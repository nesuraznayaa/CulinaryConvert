export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-50 px-3 py-1 rounded-full">Our Story</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-3 mb-3">About CulinaryConvert</h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          Born from the frustration of failed cakes and a burning desire for baking precision.
        </p>
      </div>

      {/* Story */}
      <section className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Why We Built This</h2>
        <div className="prose prose-gray text-sm text-gray-600 space-y-4 leading-relaxed">
          <p>
            It started with a sunken chocolate cake. The recipe said "2 cups of flour" — but after following
            every step correctly, the result was a dense, gummy disappointment. The culprit? A packed cup of
            flour weighing 165 g instead of the intended 120 g. A 37% error in the most important ingredient.
          </p>
          <p>
            That experience sent us down a rabbit hole of baking science: the difference between volume
            and weight measurements, why professional bakers work exclusively in grams, and how a simple
            digital scale transforms baking from an art of guesswork into a reliable craft.
          </p>
          <p>
            We built <strong>CulinaryConvert</strong> because every existing converter we found was either
            incomplete (covering only a handful of ingredients), inaccurate (using single-source data),
            or buried in ads that made it unusable on mobile. We wanted something fast, clean, and genuinely useful.
          </p>
          <p>
            Our values are built around data integrity. Every gram-per-cup value in our database was
            cross-referenced against at least two authoritative culinary sources, including the
            USDA FoodData Central database, King Arthur Baking's weight charts, and professional
            culinary textbooks. Where sources disagreed, we tested in our own kitchen.
          </p>
        </div>
      </section>

      {/* What we offer */}
      <section className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-5">What CulinaryConvert Offers</h2>
        <div className="space-y-4">
          {[
            {
              icon: "⚖️",
              title: "Volume-to-Weight Converter",
              desc: "Convert cups, tablespoons, teaspoons, fluid ounces, and milliliters to grams and ounces for 70+ common ingredients — organized by category for quick access.",
            },
            {
              icon: "🎂",
              title: "Baking Pan Size Calculator",
              desc: "Mathematically scale any recipe to fit a different pan: round, square, or rectangular, in both imperial (inches) and metric (centimeters). Includes servings calculation and baking time guidance.",
            },
            {
              icon: "📚",
              title: "Baking Tips & Guides",
              desc: "12 science-backed baking tips written by experienced home bakers — covering technique, equipment, storage, and the food science that makes baking work.",
            },
            {
              icon: "📱",
              title: "Truly Mobile-First",
              desc: "Designed to work flawlessly on a phone in the kitchen, with one hand, while your other hand holds a spatula. No app download required.",
            },
          ].map((f) => (
            <div key={f.title} className="flex gap-4">
              <div className="text-2xl flex-shrink-0 mt-0.5">{f.icon}</div>
              <div>
                <h3 className="font-bold text-gray-700 mb-0.5">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Data sources */}
      <section className="bg-amber-50 rounded-2xl p-8 border border-amber-100 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Our Data Sources</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Accuracy is our top priority. Our ingredient weight database draws from:
        </p>
        <ul className="text-sm text-gray-600 space-y-2">
          <li className="flex gap-2"><span className="text-amber-500 font-bold">→</span> <span><strong>USDA FoodData Central</strong> — the U.S. government's authoritative food composition database</span></li>
          <li className="flex gap-2"><span className="text-amber-500 font-bold">→</span> <span><strong>King Arthur Baking Company</strong> — the gold standard for flour and baking ingredient weights</span></li>
          <li className="flex gap-2"><span className="text-amber-500 font-bold">→</span> <span><strong>The Professional Pastry Chef</strong> by Bo Friberg — a classic culinary school reference</span></li>
          <li className="flex gap-2"><span className="text-amber-500 font-bold">→</span> <span><strong>The Joy of Cooking</strong> (2019 edition) — comprehensive American culinary reference</span></li>
          <li className="flex gap-2"><span className="text-amber-500 font-bold">→</span> <span><strong>In-kitchen testing</strong> — for ingredients where authoritative sources disagreed</span></li>
        </ul>
      </section>
            {/* Contact CTA */}
      <section className="bg-gray-800 rounded-2xl p-8 text-white text-center">
        <h2 className="text-xl font-bold mb-2">Found an Error? Have a Suggestion?</h2>
        <p className="text-gray-400 text-sm mb-5">
          We're always improving our database. If you spot an inaccuracy or want to see an ingredient added,
          we want to hear from you.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-2.5 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-400 transition-colors text-sm"
        >
          Get in Touch →
        </a>
      </section>
    </main>
  );
}
