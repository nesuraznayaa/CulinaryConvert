import { useState, useMemo } from "react";
import { ingredients, volumeUnits, categories } from "../data/ingredients";

export default function WeightConverter() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ingredientId, setIngredientId] = useState("all-purpose-flour");
  const [unit, setUnit] = useState("cup");
  const [amount, setAmount] = useState<string>("1");
  const [copied, setCopied] = useState(false);

  const filtered = useMemo(
    () =>
      selectedCategory === "All"
        ? ingredients
        : ingredients.filter((i) => i.category === selectedCategory),
    [selectedCategory]
  );

  // If current ingredient not in filtered list, reset
  const ingredient = ingredients.find((i) => i.id === ingredientId) || ingredients[0];
  const unitObj = volumeUnits.find((u) => u.id === unit) || volumeUnits[0];

  const numAmount = parseFloat(amount) || 0;
  const gramsResult = numAmount * unitObj.multiplier * ingredient.gramsPerCup;
  const ouncesResult = gramsResult / 28.3495;

  const handleCopy = () => {
    const text = `${amount} ${unitObj.label} of ${ingredient.name} = ${gramsResult.toFixed(1)} g`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    const firstInCat =
      cat === "All"
        ? ingredients[0]
        : ingredients.find((i) => i.category === cat);
    if (firstInCat) setIngredientId(firstInCat.id);
  };

  // Preset quick amounts
  const presets = [
    { label: "¼", value: "0.25" },
    { label: "⅓", value: "0.333" },
    { label: "½", value: "0.5" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
  ];

  return (
    <section id="weight-converter" className="bg-white rounded-2xl shadow-md p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">
          ⚖️
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Cups & Spoons → Grams</h2>
          <p className="text-sm text-gray-500">Convert any volume measure to weight for 70+ ingredients</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Left column – inputs */}
        <div className="space-y-4">
          {/* Category filter */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="All">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Ingredient */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Ingredient
            </label>
            <select
              value={ingredientId}
              onChange={(e) => setIngredientId(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              {filtered.map((i) => (
                <option key={i.id} value={i.id}>{i.name}</option>
              ))}
            </select>
            {ingredient.notes && (
              <p className="text-xs text-amber-600 mt-1">ℹ️ {ingredient.notes}</p>
            )}
          </div>

          {/* Amount + unit */}
          <div className="grid grid-cols-5 gap-2">
            <div className="col-span-2">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Amount
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="e.g. 1.5"
              />
            </div>
            <div className="col-span-3">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Unit
              </label>
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                {volumeUnits.map((u) => (
                  <option key={u.id} value={u.id}>{u.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Preset buttons */}
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Quick amounts</span>
            <div className="flex flex-wrap gap-2 mt-1.5">
              {presets.map((p) => (
                <button
                  key={p.value}
                  onClick={() => setAmount(p.value)}
                  className={`px-3 py-1 rounded-lg text-sm border transition-colors ${
                    amount === p.value
                      ? "bg-amber-500 text-white border-amber-500"
                      : "border-gray-200 text-gray-600 hover:border-amber-400 hover:text-amber-600"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right column – result */}
        <div className="flex flex-col justify-center">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center border border-amber-100">
            <p className="text-sm text-gray-500 mb-1">
              {numAmount || "?"} {unitObj.label}{numAmount !== 1 ? "s" : ""} of
            </p>
            <p className="font-semibold text-gray-700 mb-4 text-sm">{ingredient.name}</p>

            <div className="mb-3">
              <span className="text-5xl font-extrabold text-amber-600">
                {gramsResult > 0 ? gramsResult.toFixed(1) : "—"}
              </span>
              <span className="text-2xl font-bold text-amber-500 ml-1">g</span>
            </div>
            <div className="text-sm text-gray-500 mb-5">
              ≈ {ouncesResult > 0 ? ouncesResult.toFixed(2) : "—"} oz
            </div>

            {/* Reference row */}
            <div className="grid grid-cols-3 gap-2 text-xs text-gray-500 border-t border-amber-100 pt-4">
              <div>
                <div className="font-semibold text-gray-700">1 tsp</div>
                <div>{((1 / 48) * ingredient.gramsPerCup).toFixed(1)} g</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700">1 tbsp</div>
                <div>{((1 / 16) * ingredient.gramsPerCup).toFixed(1)} g</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700">1 cup</div>
                <div>{ingredient.gramsPerCup} g</div>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="mt-4 w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold transition-colors"
            >
              {copied ? "✓ Copied!" : "Copy Result"}
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
            Reference: 1 US cup = 240 ml. Values based on USDA data and standard culinary sources.
          </p>
        </div>
      </div>

      {/* Conversion table */}
      <div className="mt-8 overflow-x-auto">
        <h3 className="text-sm font-bold text-gray-700 mb-3">Quick Reference Table — {ingredient.name}</h3>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-amber-50 text-gray-600">
              <th className="text-left px-3 py-2 rounded-tl-lg font-semibold">Amount</th>
              <th className="text-right px-3 py-2 font-semibold">Grams (g)</th>
              <th className="text-right px-3 py-2 rounded-tr-lg font-semibold">Ounces (oz)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: "1 teaspoon", cups: 1 / 48 },
              { label: "1 tablespoon", cups: 1 / 16 },
              { label: "2 tablespoons", cups: 2 / 16 },
              { label: "¼ cup", cups: 0.25 },
              { label: "⅓ cup", cups: 1 / 3 },
              { label: "½ cup", cups: 0.5 },
              { label: "⅔ cup", cups: 2 / 3 },
              { label: "¾ cup", cups: 0.75 },
              { label: "1 cup", cups: 1 },
              { label: "2 cups", cups: 2 },
            ].map((row, idx) => {
              const g = row.cups * ingredient.gramsPerCup;
              const oz = g / 28.3495;
              return (
                <tr
                  key={row.label}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-3 py-2 text-gray-700">{row.label}</td>
                  <td className="px-3 py-2 text-right font-mono text-amber-700 font-semibold">{g.toFixed(1)}</td>
                  <td className="px-3 py-2 text-right font-mono text-gray-500">{oz.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
