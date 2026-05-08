// Grams per 1 US cup for each ingredient.
// Values sourced from USDA FoodData Central & standard culinary references.
export interface Ingredient {
  id: string;
  name: string;
  category: string;
  gramsPerCup: number;
  notes?: string;
}

export const ingredients: Ingredient[] = [
  // ── Flours & Starches ──────────────────────────────────────────────────────
  { id: "all-purpose-flour",   name: "All-Purpose Flour (sifted)",  category: "Flours & Starches", gramsPerCup: 120, notes: "Spooned & leveled" },
  { id: "all-purpose-flour-u", name: "All-Purpose Flour (unsifted)", category: "Flours & Starches", gramsPerCup: 130 },
  { id: "bread-flour",         name: "Bread Flour",                  category: "Flours & Starches", gramsPerCup: 127 },
  { id: "cake-flour",          name: "Cake Flour (sifted)",          category: "Flours & Starches", gramsPerCup: 100 },
  { id: "whole-wheat-flour",   name: "Whole-Wheat Flour",            category: "Flours & Starches", gramsPerCup: 120 },
  { id: "almond-flour",        name: "Almond Flour",                 category: "Flours & Starches", gramsPerCup: 96  },
  { id: "oat-flour",           name: "Oat Flour",                    category: "Flours & Starches", gramsPerCup: 92  },
  { id: "rice-flour",          name: "Rice Flour",                   category: "Flours & Starches", gramsPerCup: 158 },
  { id: "cornstarch",          name: "Cornstarch",                   category: "Flours & Starches", gramsPerCup: 128 },
  { id: "potato-starch",       name: "Potato Starch",                category: "Flours & Starches", gramsPerCup: 160 },
  { id: "buckwheat-flour",     name: "Buckwheat Flour",              category: "Flours & Starches", gramsPerCup: 120 },
  { id: "rye-flour",           name: "Rye Flour",                    category: "Flours & Starches", gramsPerCup: 102 },
  { id: "semolina",            name: "Semolina",                     category: "Flours & Starches", gramsPerCup: 167 },
  { id: "tapioca-starch",      name: "Tapioca Starch",               category: "Flours & Starches", gramsPerCup: 120 },
  { id: "coconut-flour",       name: "Coconut Flour",                category: "Flours & Starches", gramsPerCup: 112 },

  // ── Sugars & Sweeteners ───────────────────────────────────────────────────
  { id: "granulated-sugar",    name: "Granulated Sugar",             category: "Sugars & Sweeteners", gramsPerCup: 200 },
  { id: "powdered-sugar",      name: "Powdered Sugar (sifted)",      category: "Sugars & Sweeteners", gramsPerCup: 120 },
  { id: "brown-sugar-packed",  name: "Brown Sugar (packed)",         category: "Sugars & Sweeteners", gramsPerCup: 220 },
  { id: "brown-sugar-loose",   name: "Brown Sugar (loose)",          category: "Sugars & Sweeteners", gramsPerCup: 165 },
  { id: "caster-sugar",        name: "Caster Sugar (superfine)",     category: "Sugars & Sweeteners", gramsPerCup: 225 },
  { id: "honey",               name: "Honey",                        category: "Sugars & Sweeteners", gramsPerCup: 340 },
  { id: "maple-syrup",         name: "Maple Syrup",                  category: "Sugars & Sweeteners", gramsPerCup: 322 },
  { id: "agave-nectar",        name: "Agave Nectar",                 category: "Sugars & Sweeteners", gramsPerCup: 336 },
  { id: "coconut-sugar",       name: "Coconut Sugar",                category: "Sugars & Sweeteners", gramsPerCup: 180 },
  { id: "molasses",            name: "Molasses",                     category: "Sugars & Sweeteners", gramsPerCup: 340 },

  // ── Fats & Oils ───────────────────────────────────────────────────────────
  { id: "butter",              name: "Butter (melted)",              category: "Fats & Oils", gramsPerCup: 227 },
  { id: "butter-solid",        name: "Butter (solid)",               category: "Fats & Oils", gramsPerCup: 227 },
  { id: "vegetable-oil",       name: "Vegetable Oil",                category: "Fats & Oils", gramsPerCup: 218 },
  { id: "olive-oil",           name: "Olive Oil",                    category: "Fats & Oils", gramsPerCup: 216 },
  { id: "coconut-oil",         name: "Coconut Oil (melted)",         category: "Fats & Oils", gramsPerCup: 218 },
  { id: "shortening",          name: "Vegetable Shortening",         category: "Fats & Oils", gramsPerCup: 191 },
  { id: "margarine",           name: "Margarine",                    category: "Fats & Oils", gramsPerCup: 227 },

  // ── Dairy & Eggs ─────────────────────────────────────────────────────────
  { id: "milk-whole",          name: "Whole Milk",                   category: "Dairy & Eggs", gramsPerCup: 244 },
  { id: "milk-skim",           name: "Skim Milk",                    category: "Dairy & Eggs", gramsPerCup: 245 },
  { id: "buttermilk",          name: "Buttermilk",                   category: "Dairy & Eggs", gramsPerCup: 245 },
  { id: "heavy-cream",         name: "Heavy Cream",                  category: "Dairy & Eggs", gramsPerCup: 238 },
  { id: "sour-cream",          name: "Sour Cream",                   category: "Dairy & Eggs", gramsPerCup: 230 },
  { id: "yogurt-plain",        name: "Plain Yogurt",                 category: "Dairy & Eggs", gramsPerCup: 245 },
  { id: "cream-cheese",        name: "Cream Cheese",                 category: "Dairy & Eggs", gramsPerCup: 232 },
  { id: "milk-condensed",      name: "Condensed Milk (sweetened)",   category: "Dairy & Eggs", gramsPerCup: 306 },
  { id: "milk-evaporated",     name: "Evaporated Milk",              category: "Dairy & Eggs", gramsPerCup: 252 },

  // ── Leaveners & Salt ─────────────────────────────────────────────────────
  { id: "baking-powder",       name: "Baking Powder",                category: "Leaveners & Salt", gramsPerCup: 230 },
  { id: "baking-soda",         name: "Baking Soda",                  category: "Leaveners & Salt", gramsPerCup: 288 },
  { id: "salt-table",          name: "Table Salt",                   category: "Leaveners & Salt", gramsPerCup: 288 },
  { id: "salt-kosher",         name: "Kosher Salt (Morton)",         category: "Leaveners & Salt", gramsPerCup: 240 },
  { id: "salt-sea",            name: "Fine Sea Salt",                category: "Leaveners & Salt", gramsPerCup: 273 },
  { id: "dry-yeast",           name: "Active Dry Yeast",             category: "Leaveners & Salt", gramsPerCup: 190 },

  // ── Nuts & Seeds ─────────────────────────────────────────────────────────
  { id: "walnuts-chopped",     name: "Walnuts (chopped)",            category: "Nuts & Seeds", gramsPerCup: 120 },
  { id: "almonds-whole",       name: "Almonds (whole)",              category: "Nuts & Seeds", gramsPerCup: 143 },
  { id: "almonds-sliced",      name: "Almonds (sliced)",             category: "Nuts & Seeds", gramsPerCup: 92  },
  { id: "peanuts",             name: "Peanuts (roasted)",            category: "Nuts & Seeds", gramsPerCup: 146 },
  { id: "pecans-chopped",      name: "Pecans (chopped)",             category: "Nuts & Seeds", gramsPerCup: 109 },
  { id: "sesame-seeds",        name: "Sesame Seeds",                 category: "Nuts & Seeds", gramsPerCup: 144 },
  { id: "poppy-seeds",         name: "Poppy Seeds",                  category: "Nuts & Seeds", gramsPerCup: 144 },
  { id: "chia-seeds",          name: "Chia Seeds",                   category: "Nuts & Seeds", gramsPerCup: 160 },
  { id: "flaxseeds",           name: "Flaxseeds (whole)",            category: "Nuts & Seeds", gramsPerCup: 168 },

  // ── Oats & Grains ────────────────────────────────────────────────────────
  { id: "rolled-oats",         name: "Rolled Oats",                  category: "Oats & Grains", gramsPerCup: 90  },
  { id: "quick-oats",          name: "Quick-Cooking Oats",           category: "Oats & Grains", gramsPerCup: 90  },
  { id: "breadcrumbs-fine",    name: "Breadcrumbs (fine)",           category: "Oats & Grains", gramsPerCup: 115 },
  { id: "breadcrumbs-panko",   name: "Breadcrumbs (panko)",          category: "Oats & Grains", gramsPerCup: 60  },
  { id: "rice-dry",            name: "White Rice (dry)",             category: "Oats & Grains", gramsPerCup: 185 },
  { id: "quinoa-dry",          name: "Quinoa (dry)",                 category: "Oats & Grains", gramsPerCup: 170 },

  // ── Chocolate & Cocoa ────────────────────────────────────────────────────
  { id: "cocoa-powder",        name: "Cocoa Powder (unsweetened)",   category: "Chocolate & Cocoa", gramsPerCup: 85  },
  { id: "choc-chips",          name: "Chocolate Chips",              category: "Chocolate & Cocoa", gramsPerCup: 170 },
  { id: "dutch-cocoa",         name: "Dutch-Process Cocoa",          category: "Chocolate & Cocoa", gramsPerCup: 82  },
  { id: "cacao-nibs",          name: "Cacao Nibs",                   category: "Chocolate & Cocoa", gramsPerCup: 120 },

  // ── Fruits & Dried ───────────────────────────────────────────────────────
  { id: "raisins",             name: "Raisins",                      category: "Fruits & Dried", gramsPerCup: 165 },
  { id: "dried-cranberries",   name: "Dried Cranberries",            category: "Fruits & Dried", gramsPerCup: 120 },
  { id: "dates-chopped",       name: "Dates (chopped)",              category: "Fruits & Dried", gramsPerCup: 147 },
  { id: "desiccated-coconut",  name: "Desiccated Coconut",           category: "Fruits & Dried", gramsPerCup: 80  },
  { id: "shredded-coconut",    name: "Shredded Coconut (sweetened)", category: "Fruits & Dried", gramsPerCup: 93  },

  // ── Pastes & Liquids ─────────────────────────────────────────────────────
  { id: "peanut-butter",       name: "Peanut Butter",                category: "Pastes & Liquids", gramsPerCup: 258 },
  { id: "nutella",             name: "Nutella / Hazelnut Spread",    category: "Pastes & Liquids", gramsPerCup: 300 },
  { id: "tahini",              name: "Tahini",                       category: "Pastes & Liquids", gramsPerCup: 240 },
  { id: "jam-jelly",           name: "Jam / Jelly",                  category: "Pastes & Liquids", gramsPerCup: 320 },
  { id: "water",               name: "Water",                        category: "Pastes & Liquids", gramsPerCup: 237 },
  { id: "vanilla-extract",     name: "Vanilla Extract",              category: "Pastes & Liquids", gramsPerCup: 208 },
];

export const categories = [...new Set(ingredients.map((i) => i.category))];

// Volume units relative to 1 US cup
export const volumeUnits = [
  { id: "cup",   label: "Cup (US)",          multiplier: 1 },
  { id: "tbsp",  label: "Tablespoon (US)",   multiplier: 1 / 16 },
  { id: "tsp",   label: "Teaspoon (US)",     multiplier: 1 / 48 },
  { id: "ml",    label: "Milliliter (mL)",   multiplier: 1 / 236.588 },
  { id: "fl-oz", label: "Fluid Ounce (US)",  multiplier: 1 / 8 },
];
