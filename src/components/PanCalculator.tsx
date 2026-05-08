import { useState } from "react";

type PanShape = "round" | "square" | "rectangular";

interface PanPreset {
  label: string;
  shape: PanShape;
  dim1: number;
  dim2?: number;
  height: number;
}

const presets: PanPreset[] = [
  { label: '6" Round',           shape: "round",       dim1: 6,  height: 2 },
  { label: '8" Round',           shape: "round",       dim1: 8,  height: 2 },
  { label: '9" Round',           shape: "round",       dim1: 9,  height: 2 },
  { label: '10" Round',          shape: "round",       dim1: 10, height: 2 },
  { label: '8" Square',          shape: "square",      dim1: 8,  height: 2 },
  { label: '9" Square',          shape: "square",      dim1: 9,  height: 2 },
  { label: '9×13" Rectangle',    shape: "rectangular", dim1: 9,  dim2: 13, height: 2 },
  { label: '8×12" Rectangle',    shape: "rectangular", dim1: 8,  dim2: 12, height: 2 },
  { label: '11×15" Sheet',       shape: "rectangular", dim1: 11, dim2: 15, height: 1 },
];

// Metric presets (cm)
const metricPresets: PanPreset[] = [
  { label: '15 cm Round',        shape: "round",       dim1: 15, height: 5  },
  { label: '20 cm Round',        shape: "round",       dim1: 20, height: 5  },
  { label: '22 cm Round',        shape: "round",       dim1: 22, height: 5  },
  { label: '24 cm Round',        shape: "round",       dim1: 24, height: 5  },
  { label: '26 cm Round',        shape: "round",       dim1: 26, height: 5  },
  { label: '28 cm Round',        shape: "round",       dim1: 28, height: 5  },
  { label: '20×20 cm Square',    shape: "square",      dim1: 20, height: 5  },
  { label: '23×33 cm Rectangle', shape: "rectangular", dim1: 23, dim2: 33, height: 5 },
];

function calcVolume(shape: PanShape, d1: number, d2: number, h: number): number {
  if (shape === "round") return Math.PI * (d1 / 2) ** 2 * h;
  if (shape === "square") return d1 * d1 * h;
  return d1 * d2 * h;
}

type UnitSystem = "imperial" | "metric";

export default function PanCalculator() {
  const [unit, setUnit] = useState<UnitSystem>("imperial");

  const [fromShape, setFromShape] = useState<PanShape>("round");
  const [fromD1, setFromD1] = useState<string>("9");
  const [fromD2, setFromD2] = useState<string>("13");
  const [fromH, setFromH]   = useState<string>("2");

  const [toShape, setToShape] = useState<PanShape>("round");
  const [toD1, setToD1]   = useState<string>("8");
  const [toD2, setToD2]   = useState<string>("12");
  const [toH, setToH]     = useState<string>("2");

  const [servings, setServings] = useState<string>("8");

  const activePresets = unit === "imperial" ? presets : metricPresets;
  const unitLabel = unit === "imperial" ? "in" : "cm";

  const applyPreset = (p: PanPreset, side: "from" | "to") => {
    const set = side === "from"
      ? { shape: setFromShape, d1: setFromD1, d2: setFromD2, h: setFromH }
      : { shape: setToShape,   d1: setToD1,   d2: setToD2,   h: setToH   };
    set.shape(p.shape);
    set.d1(String(p.dim1));
    set.d2(String(p.dim2 ?? p.dim1));
    set.h(String(p.height));
  };

  const fromVol = calcVolume(fromShape, +fromD1, +(fromD2||fromD1), +fromH);
  const toVol   = calcVolume(toShape,   +toD1,   +(toD2||toD1),     +toH);

  const ratio = toVol > 0 && fromVol > 0 ? toVol / fromVol : 0;
  const pct   = Math.round((ratio - 1) * 100);

  const newServings = ratio > 0 ? Math.round(+servings * ratio) : 0;

  const DimInputs = ({
    shape,
    d1, setD1,
    d2, setD2,
    h,  setH,
    side,
  }: {
    shape: PanShape;
    d1: string; setD1: (v: string) => void;
    d2: string; setD2: (v: string) => void;
    h:  string; setH:  (v: string) => void;
    side: "from" | "to";
  }) => (
    <div className="space-y-3">
      {shape === "round" && (
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
            Diameter ({unitLabel})
          </label>
          <input type="number" min="1" step="0.5" value={d1} onChange={(e) => setD1(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-400" />
        </div>
      )}
      {shape === "square" && (
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
            Side ({unitLabel})
          </label>
          <input type="number" min="1" step="0.5" value={d1} onChange={(e) => setD1(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-400" />
        </div>
      )}
      {shape === "rectangular" && (
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Width ({unitLabel})
            </label>
            <input type="number" min="1" step="0.5" value={d1} onChange={(e) => setD1(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-400" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Length ({unitLabel})
            </label>
            <input type="number" min="1" step="0.5" value={d2} onChange={(e) => setD2(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-400" />
          </div>
        </div>
      )}
      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
          Depth / Height ({unitLabel})
        </label>
        <input type="number" min="0.5" step="0.5" value={h} onChange={(e) => setH(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-400" />
      </div>

      {/* Presets */}
      <div>
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Presets</span>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {activePresets.map((p) => (
            <button
              key={p.label}
              onClick={() => applyPreset(p, side)}
              className="px-2 py-1 text-xs rounded-lg border border-gray-200 text-gray-600 hover:border-teal-400 hover:text-teal-600 transition-colors"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="pan-calculator" className="bg-white rounded-2xl shadow-md p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-xl flex-shrink-0">
          🎂
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Baking Pan Size Calculator</h2>
          <p className="text-sm text-gray-500">Scale any recipe to a different pan — round, square, or rectangular</p>
        </div>
      </div>

      {/* Unit toggle */}
      <div className="flex gap-2 mb-6 mt-4">
        <button
          onClick={() => setUnit("imperial")}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
            unit === "imperial" ? "bg-teal-500 text-white border-teal-500" : "border-gray-200 text-gray-600 hover:border-teal-400"
          }`}
        >
          Imperial (inches)
        </button>
        <button
          onClick={() => setUnit("metric")}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
            unit === "metric" ? "bg-teal-500 text-white border-teal-500" : "border-gray-200 text-gray-600 hover:border-teal-400"
          }`}
        >
          Metric (cm)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* FROM pan */}
        <div className="border border-gray-100 rounded-2xl p-4 bg-gray-50">
          <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">A</span>
            Original Pan (recipe calls for)
          </h3>
          {/* Shape selector */}
          <div className="flex gap-2 mb-4">
            {(["round","square","rectangular"] as PanShape[]).map((s) => (
              <button key={s} onClick={() => setFromShape(s)}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold border capitalize transition-colors ${
                  fromShape === s ? "bg-orange-400 text-white border-orange-400" : "border-gray-200 text-gray-600 hover:border-orange-300"
                }`}
              >{s}</button>
            ))}
          </div>
          <DimInputs shape={fromShape} d1={fromD1} setD1={setFromD1} d2={fromD2} setD2={setFromD2} h={fromH} setH={setFromH} side="from" />
        </div>

        {/* TO pan */}
        <div className="border border-gray-100 rounded-2xl p-4 bg-gray-50">
          <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-bold">B</span>
            Your Pan (what you have)
          </h3>
          {/* Shape selector */}
          <div className="flex gap-2 mb-4">
            {(["round","square","rectangular"] as PanShape[]).map((s) => (
              <button key={s} onClick={() => setToShape(s)}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold border capitalize transition-colors ${
                  toShape === s ? "bg-teal-500 text-white border-teal-500" : "border-gray-200 text-gray-600 hover:border-teal-300"
                }`}
              >{s}</button>
            ))}
          </div>
          <DimInputs shape={toShape} d1={toD1} setD1={setToD1} d2={toD2} setD2={setToD2} h={toH} setH={setToH} side="to" />
        </div>
      </div>

      {/* Result */}
      {ratio > 0 && (
        <div className="mt-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
          <h3 className="font-bold text-gray-700 mb-4 text-center">Scaling Result</h3>
          <div className="flex flex-col sm:flex-row items-center justify-around gap-4">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-teal-600">×{ratio.toFixed(3)}</div>
              <div className="text-sm text-gray-500 mt-1">Multiplication factor</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${pct > 0 ? "text-teal-600" : "text-orange-500"}`}>
                {pct > 0 ? `+${pct}%` : `${pct}%`}
              </div>
              <div className="text-sm text-gray-500 mt-1">Recipe size change</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700">
                {fromVol > 0 ? fromVol.toFixed(0) : "—"} → {toVol > 0 ? toVol.toFixed(0) : "—"}
              </div>
              <div className="text-sm text-gray-500 mt-1">Volume ({unitLabel}³)</div>
            </div>
          </div>

          {/* Servings */}
          <div className="mt-5 border-t border-teal-100 pt-5 flex flex-col sm:flex-row items-center gap-3">
            <label className="text-sm font-semibold text-gray-600 whitespace-nowrap">Recipe makes:</label>
            <input
              type="number"
              min="1"
              value={servings}
              onChange={(e) => setServings(e.target.value)}
              className="w-20 border border-gray-200 rounded-xl px-3 py-1.5 text-sm text-center bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <span className="text-sm text-gray-600">servings →</span>
            <span className="text-lg font-bold text-teal-600">
              {newServings} servings
            </span>
            <span className="text-sm text-gray-500">with your pan</span>
          </div>

          {/* How to use */}
          <div className="mt-5 bg-white rounded-xl p-4 border border-teal-100">
            <p className="text-sm font-semibold text-gray-700 mb-2">How to apply this:</p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Multiply <strong>every ingredient quantity</strong> in the recipe by <strong>×{ratio.toFixed(3)}</strong></li>
              <li>
                {ratio > 1
                  ? `Baking time will likely increase — start checking about ${Math.round((ratio - 1) * 10)} min earlier than the stated time.`
                  : `Baking time will likely decrease — start checking about ${Math.round((1 - ratio) * 10)} min earlier.`}
              </li>
              <li>Temperature stays the same. Use a skewer or toothpick to test doneness.</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
