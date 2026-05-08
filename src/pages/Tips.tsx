export default function Tips() {
  const tips = [
    {
      icon: "🌡️",
      title: "Always Start with Room-Temperature Ingredients",
      category: "Technique",
      body: `Cold butter will not cream properly with sugar, and cold eggs can cause batters to curdle. 
      Take your butter, eggs, milk, and cream cheese out of the refrigerator at least 45–60 minutes before baking. 
      In a hurry? Place whole uncracked eggs in a bowl of warm (not hot) water for 10 minutes. 
      Cut butter into cubes and let it sit — don't microwave it, as melted butter creates a completely different structure in cakes.`,
    },
    {
      icon: "⚖️",
      title: "Weigh Your Flour — Don't Scoop It",
      category: "Measurements",
      body: `The single biggest mistake home bakers make is scooping flour directly from the bag with a measuring cup. 
      This can pack 40–60% more flour than intended, yielding dense, dry baked goods. 
      The correct method: spoon flour into the measuring cup with a separate spoon, then level with a straight edge. 
      Better yet, use a digital kitchen scale — 1 cup of all-purpose flour should weigh 120–130 g. 
      Many baking failures are simply a measurement error in disguise.`,
    },
    {
      icon: "🥚",
      title: "Understand What Each Leavener Does",
      category: "Science",
      body: `Baking powder is double-acting: it releases CO₂ once when wet and again when heated. 
      Baking soda is 3–4× stronger but requires an acid (buttermilk, yogurt, honey, vinegar, brown sugar, cocoa) to activate. 
      Using the wrong one — or too much — causes bitter flavors, uneven rise, or collapsed cakes. 
      As a guideline: use 1 tsp baking powder per 1 cup of flour, or ¼ tsp baking soda when an acid is present. 
      Always check expiry dates; old leaveners lose potency over time.`,
    },
    {
      icon: "🔥",
      title: "Know Your Oven — It Lies to You",
      category: "Equipment",
      body: `Studies show that home ovens can be off by 25–50°F (14–28°C) from their dial setting. 
      An inexpensive oven thermometer is one of the best investments a home baker can make. 
      Most baked goods benefit from baking in the center rack, where heat circulates most evenly. 
      If your oven has a hot spot (brownies darker on one side), rotate the pan halfway through. 
      Fan-assisted (convection) ovens cook faster — reduce stated temperatures by 15–20°C (25°F) and start checking doneness earlier.`,
    },
    {
      icon: "🧊",
      title: "The Muffin Method: Less Is More",
      category: "Technique",
      body: `For muffins, quick breads, and pancakes, overmixing develops gluten strands that make the crumb tough and chewy. 
      Combine wet and dry ingredients in the fewest strokes possible — it's okay to have streaks of flour remaining. 
      The batter will look lumpy; that's perfectly normal. Those lumps hydrate and disappear during baking. 
      The magic number: most quick-bread batters need no more than 12–15 folds with a spatula.`,
    },
    {
      icon: "🌡️",
      title: "Caramel & Sugar Work: Use a Thermometer",
      category: "Candy & Sugar",
      body: `Sugar transforms at specific temperatures, and visual cues can be misleading:
      Thread stage (106°C / 223°F) — sugar syrup for poaching fruit.
      Soft ball (113–115°C / 235–240°F) — fudge, fondant, pralines.
      Hard ball (121–130°C / 250–266°F) — nougat, marshmallows.
      Hard crack (150–154°C / 302–310°F) — toffee, brittles.
      Caramel (160–177°C / 320–350°F) — the Maillard reaction gives caramel its color.
      An instant-read or candy thermometer removes all guesswork.`,
    },
    {
      icon: "🧁",
      title: "How to Tell When a Cake Is Done",
      category: "Technique",
      body: `Color is not a reliable indicator — darker pans produce browner crusts even when underbaked inside. 
      Use multiple tests: insert a skewer or toothpick into the center — it should come out clean or with just a few moist crumbs (not wet batter). 
      Gently press the top; a done cake springs back. Pull it slightly away from the sides of the pan. 
      For large, dense cakes like fruitcakes, an instant-read thermometer reading 93–96°C (200–205°F) in the center is the most reliable test.`,
    },
    {
      icon: "❄️",
      title: "Cool Completely Before Frosting",
      category: "Finishing",
      body: `A warm cake will melt buttercream instantly, causing it to slide off. 
      Wait until the cake is completely at room temperature — typically 1–2 hours on a wire rack. 
      For layer cakes, wrapping cooled layers in plastic wrap and refrigerating for 30 minutes firms the crumb, 
      making it much easier to apply a crumb coat without tearing. 
      Never use a cloth to cover cooling baked goods — it traps steam and makes crusts soggy.`,
    },
    {
      icon: "📦",
      title: "Storage: Keep Moisture Where It Belongs",
      category: "Storage",
      body: `Different baked goods have different enemies. Cookies lose crispness from humidity — store them in an airtight container with a slice of bread (the bread absorbs moisture). 
      Cakes dry out from air exposure — store under a cake dome or wrapped in plastic. 
      Bread goes stale fastest in the fridge (starch retrogradation) — keep at room temperature for 2 days, then freeze. 
      Most baked goods freeze beautifully: wrap tightly in plastic, then foil, and freeze for up to 3 months.`,
    },
    {
      icon: "📏",
      title: "Pan Size Substitution Rules of Thumb",
      category: "Equipment",
      body: `When you don't have the pan a recipe calls for, use our Pan Size Calculator above for precision. 
      But here are quick mental shortcuts: an 8×8 inch (20×20 cm) square pan holds the same volume as a 9-inch (23 cm) round pan. 
      A 9×13 inch (23×33 cm) rectangle equals two 9-inch rounds. 
      When going from a deeper pan to a shallower one, increase the temperature by 10–15°F (5–8°C) and reduce bake time. 
      When going to a deeper, narrower pan, lower the temperature and extend bake time.`,
    },
    {
      icon: "💧",
      title: "Humidity Affects Baking More Than You Think",
      category: "Science",
      body: `On humid days, flour absorbs moisture from the air, increasing its effective weight and making doughs stickier. 
      Hygroscopic ingredients like brown sugar and honey will attract atmospheric moisture. 
      In high-humidity climates, you may need to reduce liquids by 10–15% or add slightly more flour. 
      The opposite problem occurs at high altitude (above 3,500 ft / 1,000 m): reduced air pressure weakens gluten and causes excess leavening. 
      Reduce baking powder by ⅛ tsp per cup, add 1–2 extra tbsp of flour, and increase oven temperature by 15°F (8°C).`,
    },
    {
      icon: "🍫",
      title: "Melting Chocolate: Avoid Seizing",
      category: "Technique",
      body: `Chocolate seizes (turns grainy and thick) when even a small drop of water gets into it — water causes sugar particles to dissolve and clump. 
      Always ensure your bowl, spatula, and any equipment is completely dry. 
      Melt chocolate slowly: use a double boiler (bowl over barely simmering water, not touching) or the microwave in 20-second bursts, stirring between each. 
      Dark chocolate tolerates higher temperatures (up to 50°C / 122°F); milk and white chocolates are more delicate (max 43°C / 110°F). 
      If chocolate seizes, you can often rescue it by stirring in 1 tsp of vegetable oil per 30g of chocolate.`,
    },
  ];

  const categories = [...new Set(tips.map(t => t.category))];

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-50 px-3 py-1 rounded-full">Knowledge Base</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-3 mb-3">
          Baking Tips & Techniques
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
          12 science-backed tips from professional bakers that will immediately improve
          your results — from measuring correctly to understanding your oven.
        </p>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map(c => (
          <span key={c} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600">{c}</span>
        ))}
      </div>

      {/* Tips grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips.map((tip, i) => (
          <article key={i} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl flex-shrink-0">{tip.icon}</span>
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-wide">{tip.category}</span>
                <h2 className="font-bold text-gray-800 text-base leading-snug">{tip.title}</h2>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{tip.body}</p>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-extrabold mb-2">Ready to measure with precision?</h2>
        <p className="text-amber-100 mb-5 text-sm">Use our free converter to get exact gram weights for any ingredient.</p>
        <a href="/" className="inline-block px-6 py-3 bg-white text-amber-700 font-bold rounded-xl hover:bg-amber-50 transition-colors text-sm shadow">
          Open the Converter →
        </a>
      </div>
    </main>
  );
}
