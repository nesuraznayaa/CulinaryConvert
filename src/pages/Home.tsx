import WeightConverter from "../components/WeightConverter";
import PanCalculator from "../components/PanCalculator";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero */}
      <div
        className="relative rounded-3xl overflow-hidden mb-10 text-white"
        style={{
          background: "linear-gradient(135deg, #b45309 0%, #d97706 45%, #f59e0b 100%)",
          minHeight: "240px",
        }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-white/10" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-white/10" />

        <div className="relative z-10 p-8 md:p-12">
          <p className="text-amber-200 font-semibold text-sm uppercase tracking-widest mb-2">Free Online Tool</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
            Culinary Measurement Converter
          </h1>
          <p className="text-amber-100 text-base md:text-lg max-w-2xl leading-relaxed">
            Stop guessing. Convert cups, tablespoons, and teaspoons to precise gram weights for
            70+ ingredients — and instantly rescale any recipe to fit a different baking pan.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            <a
              href="#weight-converter"
              className="px-5 py-2.5 bg-white text-amber-700 font-bold rounded-xl hover:bg-amber-50 transition-colors text-sm shadow"
            >
              ⚖️ Convert Cups → Grams
            </a>
            <a
              href="#pan-calculator"
              className="px-5 py-2.5 bg-amber-800/40 text-white font-bold rounded-xl hover:bg-amber-800/60 transition-colors text-sm border border-white/30"
            >
              🎂 Pan Size Calculator
            </a>
          </div>
        </div>
      </div>

      {/* Feature pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {[
          { icon: "🌾", text: "70+ Ingredients" },
          { icon: "📏", text: "Imperial & Metric" },
          { icon: "🔢", text: "Instant Results" },
          { icon: "📱", text: "Mobile-Friendly" },
        ].map((f) => (
          <div key={f.text} className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm border border-gray-100">
            <span className="text-2xl">{f.icon}</span>
            <span className="text-sm font-semibold text-gray-700">{f.text}</span>
          </div>
        ))}
      </div>

      {/* Converters */}
      <div className="space-y-8">
        <WeightConverter />
        <PanCalculator />
      </div>

      {/* Why section */}
      <section className="mt-16 bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Why Weight Matters in Baking</h2>
        <p className="text-gray-500 text-sm mb-6">
          Volume measurements are notoriously imprecise — a cup of all-purpose flour can weigh anywhere from
          110 g to 160 g depending on how you scoop it. Here's why professionals always weigh ingredients:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🎯",
              title: "Consistency Every Time",
              body: "A kitchen scale removes human variability. Whether you spoon-and-level or scoop, the weight never lies. That's why every professional bakery uses scales, not measuring cups.",
            },
            {
              icon: "⚡",
              title: "Faster Cleanup",
              body: "Weigh directly into your bowl, zeroing out (taring) between each ingredient. No more washing multiple measuring cups and spoons — just one bowl and your scale.",
            },
            {
              icon: "🔬",
              title: "Better Texture & Rise",
              body: "Over-measuring flour by just 20% (easy to do when scooping) can make cakes dense and dry. Precise weights mean the gluten ratio is always exactly right.",
            },
          ].map((c) => (
            <div key={c.title} className="flex gap-4">
              <div className="text-3xl flex-shrink-0">{c.icon}</div>
              <div>
                <h3 className="font-bold text-gray-700 mb-1">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to measure section */}
      <section className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4">How We Calculate: The Method Behind the Numbers</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Our gram values are based on the <strong>spoon-and-level method</strong> for dry ingredients: spoon the ingredient lightly
          into a measuring cup and level the top with a straight edge. We cross-reference multiple authoritative sources for each ingredient:
        </p>
        <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
          <li><strong>USDA FoodData Central</strong> — the official U.S. database for nutritional composition</li>
          <li><strong>King Arthur Baking Company</strong> weight charts — the gold standard for baking flours</li>
          <li><strong>The Joy of Cooking</strong> and <em>The Professional Pastry Chef</em> by Bo Friberg</li>
          <li>Our own in-kitchen tests for ingredients where sources diverge</li>
        </ul>
        <p className="text-xs text-gray-400 mt-4">
          Note: density can vary slightly by brand and how the ingredient was stored (e.g., settled vs. freshly sifted flour).
          When in doubt, weigh your own ingredient and note the result — your measurement will always be the most accurate.
        </p>
      </section>

      {/* Common conversions quick table */}
      <section className="mt-8 bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-1">Most-Searched Conversions</h2>
        <p className="text-sm text-gray-500 mb-5">Quick reference for the ingredients home bakers convert most often.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="text-left px-3 py-2 rounded-tl-lg font-semibold">Ingredient</th>
                <th className="text-right px-3 py-2 font-semibold">1 tsp</th>
                <th className="text-right px-3 py-2 font-semibold">1 tbsp</th>
                <th className="text-right px-3 py-2 font-semibold">¼ cup</th>
                <th className="text-right px-3 py-2 rounded-tr-lg font-semibold">1 cup</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "All-Purpose Flour",    gpC: 120 },
                { name: "Granulated Sugar",      gpC: 200 },
                { name: "Brown Sugar (packed)",  gpC: 220 },
                { name: "Butter (melted)",       gpC: 227 },
                { name: "Honey",                 gpC: 340 },
                { name: "Cocoa Powder",          gpC: 85  },
                { name: "Rolled Oats",           gpC: 90  },
                { name: "Powdered Sugar",        gpC: 120 },
                { name: "Baking Powder",         gpC: 230 },
                { name: "Table Salt",            gpC: 288 },
              ].map((row, idx) => (
                <tr key={row.name} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-2 font-medium text-gray-700">{row.name}</td>
                  <td className="px-3 py-2 text-right font-mono text-amber-700">{(row.gpC / 48).toFixed(1)} g</td>
                  <td className="px-3 py-2 text-right font-mono text-amber-700">{(row.gpC / 16).toFixed(1)} g</td>
                  <td className="px-3 py-2 text-right font-mono text-amber-700">{(row.gpC / 4).toFixed(1)} g</td>
                  <td className="px-3 py-2 text-right font-mono font-bold text-amber-700">{row.gpC} g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
