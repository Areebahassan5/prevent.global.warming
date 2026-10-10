
"use client";

import { useState } from "react";

const products = [
  {
    name: "Evergreen Bottle",
    category: "Reusable Essentials",
    price: 24.99,
    impact: 15,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=85",
    tag: "BESTSELLER",
    description: "Stay hydrated. Leave less behind.",
  },
  {
    name: "Earth Tote Bag",
    category: "Everyday Carry",
    price: 18.99,
    impact: 12,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=85",
    tag: "ECO FAVORITE",
    description: "Carry good habits everywhere.",
  },
  {
    name: "Bamboo Brush Set",
    category: "Plastic-Free Living",
    price: 14.99,
    impact: 10,
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=700&q=85",
    tag: "NATURAL",
    description: "Small swaps. A lighter footprint.",
  },
  {
    name: "Solar Glow Lantern",
    category: "Green Living",
    price: 29.99,
    impact: 20,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85",
    tag: "PLANET PICK",
    description: "Bring a little sunshine home.",
  },
  {
    name: "Organic Cotton Pouch",
    category: "Everyday Carry",
    price: 16.5,
    impact: 12,
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=85",
    tag: "THOUGHTFUL",
    description: "Organize your day, naturally.",
  },
  {
    name: "Forest Ceramic Mug",
    category: "Reusable Essentials",
    price: 21,
    impact: 15,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=85",
    tag: "DAILY LOVE",
    description: "A slower, greener morning.",
  },
  {
    name: "Nature Care Kit",
    category: "Plastic-Free Living",
    price: 34.99,
    impact: 18,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85",
    tag: "GIFT READY",
    description: "A thoughtful gift for our planet.",
  },
  {
    name: "Wildflower Notebook",
    category: "Everyday Carry",
    price: 12.99,
    impact: 10,
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=85",
    tag: "MINDFUL",
    description: "Write a better future, one page at a time.",
  },
];

const facts = [
  {
    icon: "🌍",
    title: "Our Warming World",
    number: "1.2°C+",
    text: "Global temperatures have risen significantly above pre-industrial levels. Every fraction of a degree matters.",
  },
  {
    icon: "🌳",
    title: "Why Trees Matter",
    number: "Nature's allies",
    text: "Trees absorb carbon dioxide as they grow, support biodiversity, and help protect healthy soil.",
  },
  {
    icon: "☀️",
    title: "Clean Energy",
    number: "A brighter future",
    text: "Solar and wind energy can reduce dependence on fossil fuels when they replace carbon-intensive energy.",
  },
  {
    icon: "💧",
    title: "Every Drop Counts",
    number: "Use less",
    text: "Fixing leaks and using water thoughtfully helps conserve a valuable resource.",
  },
];

const tips = [
  { icon: "♻️", title: "Reduce Waste", text: "Choose reusable products." },
  { icon: "🌱", title: "Eat More Plants", text: "Try a plant-based meal." },
  { icon: "💡", title: "Save Energy", text: "Switch off unused lights." },
  { icon: "🚲", title: "Travel Green", text: "Walk, cycle, or share rides." },
  { icon: "💧", title: "Save Water", text: "Turn off the tap when brushing." },
  { icon: "🌳", title: "Grow Green", text: "Support native tree planting." },
];

const stories = [
  {
    title: "Growing Hope in the Amazon",
    location: "Amazon Rainforest",
    trees: "12,000 trees",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=85",
    text: "Support forest restoration and wildlife habitats.",
  },
  {
    title: "Communities That Grow Together",
    location: "Kenya, Africa",
    trees: "8,500 trees",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=85",
    text: "Help communities nurture healthy local forests.",
  },
  {
    title: "A Greener Tomorrow",
    location: "Southeast Asia",
    trees: "6,200 trees",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=85",
    text: "Restore green spaces for people and wildlife.",
  },
];

const regions = [
  { name: "Amazon Rainforest", x: "26%", y: "49%" },
  { name: "East Africa", x: "56%", y: "59%" },
  { name: "South Asia", x: "72%", y: "42%" },
  { name: "Southeast Asia", x: "78%", y: "60%" },
  { name: "Central America", x: "25%", y: "37%" },
];

function Globe() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center">
      <div className="absolute inset-[8%] rounded-full bg-emerald-300/40 blur-3xl" />
      <div className="absolute inset-0 animate-[spin_35s_linear_infinite] rounded-full border border-dashed border-emerald-500/40" />
      <div className="absolute inset-[6%] rounded-full border border-white/80" />

      <div
        className="relative aspect-square w-[78%] overflow-hidden rounded-full border-4 border-white shadow-2xl"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, #d9f99d, #38bdf8 38%, #0284c7 65%, #075985)",
        }}
      >
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 h-full w-full"
          fill="none"
          aria-label="Illustrated Earth with green continents"
        >
          <defs>
            <clipPath id="planet-clip">
              <circle cx="200" cy="200" r="198" />
            </clipPath>
            <linearGradient id="land-color" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d9f99d" />
              <stop offset="55%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
          </defs>

          <g clipPath="url(#planet-clip)">
            {Array.from({ length: 8 }, (_, i) => (
              <ellipse
                key={`long-${i}`}
                cx="200"
                cy="200"
                rx={30 + i * 20}
                ry="198"
                stroke="#e0f2fe"
                strokeOpacity=".35"
              />
            ))}
            {Array.from({ length: 5 }, (_, i) => (
              <ellipse
                key={`lat-${i}`}
                cx="200"
                cy="200"
                rx="198"
                ry={40 + i * 32}
                stroke="#e0f2fe"
                strokeOpacity=".35"
              />
            ))}

            <path
              d="M43 79 L65 43 100 34 120 48 142 43 159 64 148 83 122 89 112 111 90 120 82 144 63 133 60 110 40 103Z"
              fill="url(#land-color)"
              stroke="#ecfccb"
              strokeWidth="2"
            />
            <path
              d="M118 150 L145 136 173 147 190 173 183 205 168 230 160 264 142 292 132 270 124 238 110 214 105 183Z"
              fill="url(#land-color)"
              stroke="#ecfccb"
              strokeWidth="2"
            />
            <path
              d="M190 55 L220 40 248 48 268 64 292 65 314 83 342 85 365 108 345 126 316 118 302 138 277 129 258 150 236 143 222 119 197 112 184 86Z"
              fill="url(#land-color)"
              stroke="#ecfccb"
              strokeWidth="2"
            />
            <path
              d="M209 147 L241 130 270 141 285 168 275 195 258 219 249 257 225 285 208 259 205 230 187 206 190 174Z"
              fill="url(#land-color)"
              stroke="#ecfccb"
              strokeWidth="2"
            />
            <path
              d="M292 231 L317 219 344 235 355 257 338 281 311 273 294 254Z"
              fill="url(#land-color)"
              stroke="#ecfccb"
              strokeWidth="2"
            />
            <path
              d="M160 175 Q188 163 211 180 T262 181"
              stroke="#fef9c3"
              strokeWidth="4"
              strokeLinecap="round"
              opacity=".75"
            />
            <circle cx="145" cy="174" r="5" fill="#fef08a" />
            <circle cx="235" cy="195" r="5" fill="#fef08a" />
            <circle cx="281" cy="119" r="5" fill="#fef08a" />
            <circle cx="164" cy="250" r="4" fill="#fef08a" />
          </g>
        </svg>

        <span className="absolute bottom-[18%] left-[16%] rounded-full bg-white p-2 text-xl shadow-lg">
          🌱
        </span>
        <span className="absolute right-[16%] top-[25%] rounded-full bg-white p-2 text-xl shadow-lg">
          🌳
        </span>
      </div>

      {regions.map((region) => (
        <div
          key={region.name}
          className="group absolute z-10"
          style={{ left: region.x, top: region.y }}
        >
          <span className="block h-4 w-4 animate-pulse rounded-full border-[3px] border-white bg-emerald-600 shadow-lg" />
          <span className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-emerald-950 px-3 py-2 text-xs text-white shadow-xl group-hover:block md:block">
            {region.name}
          </span>
        </div>
      ))}

      <div className="absolute left-0 top-[10%] rounded-2xl border border-white bg-white/95 p-3 shadow-xl">
        <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
          Our mission
        </p>
        <p className="mt-1 text-sm font-extrabold text-emerald-950">
          One planet. One future.
        </p>
      </div>

      <div className="absolute bottom-[7%] right-0 rounded-2xl border border-white bg-white/95 p-3 shadow-xl">
        <p className="text-[10px] text-slate-500">Impact map preview</p>
        <p className="mt-1 text-sm font-bold text-emerald-800">
          📍 5 featured regions
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [cart, setCart] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [filter, setFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] =
    useState<(typeof products)[number] | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);

  const categories = [
    "All",
    "Reusable Essentials",
    "Everyday Carry",
    "Plastic-Free Living",
    "Green Living",
  ];

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

  function addToCart(product: (typeof products)[number]) {
    setCart((current) => current + 1);
    setCartTotal((current) => current + product.price);
    setSelectedProduct(null);
    setShowCart(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* Announcement */}
      <div className="bg-emerald-950 px-4 py-3 text-center text-xs font-medium tracking-wide text-white sm:text-sm">
        🌍 Shop consciously. Protect nature. Prevent global warming.{" "}
        <a href="#our-impact" className="underline underline-offset-4">
          Discover our mission →
        </a>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 lg:px-8">
          <a href="#home" className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
              🌿
            </span>
            <span className="min-w-0">
              <span className="block break-words text-base font-black tracking-tight text-emerald-950 sm:text-xl">
                prevent.global.warming
              </span>
              <span className="block text-[9px] tracking-wide text-slate-500 sm:text-[10px]">
                PROTECT OUR PLANET. GROW A GREENER FUTURE.
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
            <a href="#home" className="hover:text-emerald-700">Home</a>
            <a href="#shop" className="hover:text-emerald-700">Shop</a>
            <a href="#our-impact" className="hover:text-emerald-700">Our Impact</a>
            <a href="#climate-corner" className="hover:text-emerald-700">Climate Corner</a>
            <a href="#stories" className="hover:text-emerald-700">Stories</a>
          </nav>

          <button
            onClick={() => setShowCart(!showCart)}
            className="flex shrink-0 items-center gap-2 rounded-full bg-emerald-50 px-3 py-2.5 text-sm font-bold text-emerald-900 hover:bg-emerald-100 sm:px-4"
          >
            <span>🛍️</span>
            <span className="hidden sm:inline">My Bag</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-800 px-1 text-[10px] text-white">
              {cart}
            </span>
          </button>
        </div>
      </header>

      {/* Shopping bag panel */}
      {showCart && (
        <div className="fixed right-4 top-28 z-50 w-[min(340px,calc(100vw-2rem))] rounded-3xl border border-emerald-100 bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-extrabold text-emerald-950">Your green bag</h3>
            <button
              onClick={() => setShowCart(false)}
              className="rounded-full p-2 text-xl hover:bg-slate-100"
              aria-label="Close bag"
            >
              ×
            </button>
          </div>
          {cart === 0 ? (
            <p className="py-8 text-sm text-slate-500">
              Your bag is empty. Let&apos;s find something planet-friendly!
            </p>
          ) : (
            <div className="py-5">
              <div className="rounded-2xl bg-emerald-50 p-4">
                <p className="text-sm text-slate-600">Items added: {cart}</p>
                <p className="mt-2 text-2xl font-black text-emerald-900">
                  ${cartTotal.toFixed(2)}
                </p>
                <p className="mt-2 text-xs leading-5 text-emerald-800">
                  Thank you for supporting a greener future. This is a demo
                  bag, not a completed order.
                </p>
              </div>
              <button
                onClick={() => setShowCart(false)}
                className="mt-4 w-full rounded-full bg-emerald-800 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-950"
              >
                Continue shopping
              </button>
            </div>
          )}
        </div>
      )}

      {/* Hero */}
      <section
        id="home"
        className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-emerald-50"
      >
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 md:py-20 lg:grid-cols-2 lg:gap-4 lg:px-8 lg:py-24">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-800 shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Small choices. Global change.
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-tight text-emerald-950 sm:text-6xl lg:text-7xl">
              Prevent global warming.
              <span className="mt-3 block text-emerald-700">
                One choice at a time.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Discover planet-conscious essentials and learn how everyday
              choices can make a difference. Shop thoughtfully, support
              reforestation, and become part of a greener future.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#shop"
                className="inline-flex items-center gap-3 rounded-full bg-emerald-800 px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-emerald-950"
              >
                Explore the collection →
              </a>
              <a
                href="#our-impact"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-7 py-4 text-sm font-bold text-emerald-900 hover:bg-white"
              >
                See our mission ↗
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-emerald-200 pt-6">
              <div>
                <span className="text-2xl">🌱</span>
                <p className="mt-2 text-xs font-bold text-emerald-950 sm:text-sm">Live thoughtfully</p>
                <p className="mt-1 text-[11px] text-slate-500">Everyday choices</p>
              </div>
              <div>
                <span className="text-2xl">🌳</span>
                <p className="mt-2 text-xs font-bold text-emerald-950 sm:text-sm">Support trees</p>
                <p className="mt-1 text-[11px] text-slate-500">Help restore forests</p>
              </div>
              <div>
                <span className="text-2xl">♻️</span>
                <p className="mt-2 text-xs font-bold text-emerald-950 sm:text-sm">Waste less</p>
                <p className="mt-1 text-[11px] text-slate-500">Reuse what you can</p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl">
            <Globe />
          </div>
        </div>

        <div className="border-y border-white bg-white/75 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-6 sm:grid-cols-4 lg:px-8">
            {[
              ["🌎", "One shared planet", "Our common home"],
              ["🌿", "Mindful shopping", "Better everyday habits"],
              ["💚", "Community powered", "People create change"],
              ["☀️", "Hope for tomorrow", "Progress together"],
            ].map(([icon, title, subtitle]) => (
              <div key={title} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-xl">
                  {icon}
                </span>
                <div>
                  <p className="text-sm font-bold text-emerald-950">{title}</p>
                  <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact dashboard */}
      <section id="our-impact" className="px-5 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-700">
              Our growing mission
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl">
              Every little action adds up.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Reforestation takes time, care, and community effort. Explore
              how everyday choices can support a healthier planet.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["🌳", "1,248,736", "Illustrative tree counter", "Example community dashboard"],
              ["🗺️", "5 regions", "Featured locations", "Example planting regions"],
              ["🤝", "Together", "People-powered change", "Every mindful choice matters"],
              ["♻️", "Every day", "A chance to do better", "Make sustainability a habit"],
            ].map(([icon, number, label, text]) => (
              <div
                key={label}
                className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                  {icon}
                </span>
                <p className="mt-5 text-2xl font-black text-emerald-900">{number}</p>
                <h3 className="mt-2 text-sm font-bold text-slate-800">{label}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid overflow-hidden rounded-[2rem] border border-emerald-100 bg-emerald-50 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
                Our promise
              </span>
              <h3 className="mt-4 text-3xl font-black leading-tight text-emerald-950">
                A little greener with every choice.
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Sustainability should feel practical, beautiful, and
                accessible. Choose reusable products, learn about climate
                change, and support responsible restoration efforts.
              </p>
              <a
                href="#climate-corner"
                className="mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-emerald-800 px-6 py-3.5 text-sm font-bold text-white hover:bg-emerald-950"
              >
                Learn how to help →
              </a>
            </div>
            <div className="relative min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=85"
                alt="Green plants growing in a sunlit garden"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Our philosophy</p>
                <p className="mt-2 text-lg font-extrabold text-emerald-950">
                  Protect nature. Respect resources. Grow hope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product shop */}
      <section id="shop" className="bg-[#f7faf6] px-5 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-700">
                Thoughtful by nature
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl">
                Shop for a greener tomorrow.
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-slate-600">
                Meet everyday essentials that encourage mindful living.
                Find your next favorite and support our planet-first mission.
              </p>
            </div>
            <a
              href="#purchase-impact"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-bold text-emerald-800 hover:bg-emerald-50"
            >
              How purchases help →
            </a>
          </div>

          <div className="mt-8 flex gap-2 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`shrink-0 rounded-full px-5 py-3 text-xs font-bold transition sm:text-sm ${
                  filter === category
                    ? "bg-emerald-800 text-white shadow-md"
                    : "border border-emerald-100 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
              >
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="relative block aspect-[4/4.2] w-full overflow-hidden bg-emerald-50 text-left"
                  aria-label={`View ${product.name}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[9px] font-extrabold tracking-wider text-emerald-800 shadow">
                    {product.tag}
                  </span>
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-emerald-900 shadow-lg group-hover:bg-emerald-800 group-hover:text-white">
                    ↗
                  </span>
                </button>

                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    {product.category}
                  </p>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="mt-2 text-left text-lg font-extrabold text-slate-900 hover:text-emerald-800"
                  >
                    {product.name}
                  </button>
                  <p className="mt-2 min-h-10 text-sm leading-5 text-slate-500">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-black text-emerald-950">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-amber-500">★★★★★</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-2 rounded-xl bg-emerald-50 px-3 py-2.5">
                    <span className="text-xs font-bold text-emerald-900">
                      🌱 {product.impact}% tree fund
                    </span>
                    <span className="text-[10px] text-emerald-700">Example</span>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full rounded-full border border-emerald-800 px-4 py-3 text-sm font-bold text-emerald-900 transition hover:bg-emerald-800 hover:text-white"
                  >
                    Add to bag +
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-emerald-950 px-6 py-8 text-white sm:px-10 sm:py-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Your next small step
                </p>
                <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                  Choose better. Use longer. Waste less.
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-emerald-100/80">
                  Start with one reusable item, build habits that last, and
                  share your best ideas with your community.
                </p>
              </div>
              <a
                href="#climate-corner"
                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-yellow-300 px-7 py-4 text-sm font-extrabold text-emerald-950 hover:bg-yellow-200"
              >
                Find green inspiration →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase impact */}
      <section id="purchase-impact" className="px-5 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-emerald-100 sm:min-h-[460px]">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=85"
              alt="Young green plant growing in sunlight"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/5 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-10">
              <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-bold backdrop-blur">
                SMALL CHOICES. BIG CHANGE.
              </span>
              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                Good things grow
                <br />
                when we grow together.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/85">
                Every contribution can support a wider effort to restore
                forests and care for the places we call home.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-sky-50 p-6 sm:p-10">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-700">
              Your money. Your impact.
            </span>
            <h2 className="mt-3 text-3xl font-black text-emerald-950 sm:text-4xl">
              Know where it goes.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              We believe environmental giving should be transparent. This
              example shows how a product sale could be allocated. Replace
              these sample figures with your real business figures.
            </p>

            <div className="mt-8 rounded-3xl border border-white bg-white/80 p-5 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-slate-700">Example product price</p>
                  <p className="mt-1 text-xs text-slate-500">Illustrative allocation</p>
                </div>
                <p className="text-3xl font-black text-emerald-900">$100</p>
              </div>

              <div className="mt-6 flex h-4 overflow-hidden rounded-full bg-slate-100">
                <div className="w-[15%] bg-emerald-700" />
                <div className="w-[5%] bg-yellow-400" />
                <div className="w-[5%] bg-sky-400" />
                <div className="w-[75%] bg-slate-300" />
              </div>

              <div className="mt-6 space-y-4">
                {[
                  { color: "bg-emerald-700", title: "Tree planting fund", percent: "15%", amount: "$15", icon: "🌳" },
                  { color: "bg-yellow-400", title: "Sustainable operations", percent: "5%", amount: "$5", icon: "☀️" },
                  { color: "bg-sky-400", title: "Community initiatives", percent: "5%", amount: "$5", icon: "🤝" },
                  { color: "bg-slate-300", title: "Products and other costs", percent: "75%", amount: "$75", icon: "📦" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className={`h-3 w-3 shrink-0 rounded-full ${item.color}`} />
                      <span className="text-sm text-slate-600">
                        {item.icon} {item.title}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-extrabold text-slate-900">{item.percent}</span>
                      <span className="ml-2 text-xs text-slate-500">{item.amount}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-emerald-100 p-4">
                <p className="text-sm font-extrabold text-emerald-950">
                  🌱 Example: $15 goes to the tree-planting fund.
                </p>
                <p className="mt-1 text-xs leading-5 text-emerald-800">
                  Actual contributions and planting results must be verified
                  and published by the business.
                </p>
              </div>
            </div>

            <a
              href="#stories"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-emerald-800 px-6 py-3.5 text-sm font-bold text-white hover:bg-emerald-950"
            >
              Explore our mission →
            </a>
          </div>
        </div>
      </section>

      {/* Climate Corner */}
      <section
        id="climate-corner"
        className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-emerald-50 px-5 py-16 sm:py-20 lg:px-8"
      >
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-sky-800">
                Learn a little. Change a lot.
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl">
                Welcome to Climate Corner.
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-slate-600">
                Climate knowledge without the overwhelm. Discover why our
                planet is changing and practical steps you can take today.
              </p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-5 py-3 text-sm font-bold text-sky-900">
              🌎 Learn. Act. Repeat.
            </span>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact, index) => (
              <article
                key={fact.title}
                className="rounded-3xl border border-white bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-3xl">
                  {fact.icon}
                </span>
                <p className="mt-6 text-xs font-bold uppercase tracking-wider text-sky-800">
                  Climate fact 0{index + 1}
                </p>
                <h3 className="mt-2 text-lg font-extrabold text-emerald-950">{fact.title}</h3>
                <p className="mt-3 text-2xl font-black text-emerald-700">{fact.number}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{fact.text}</p>
              </article>
            ))}
          </div>

          {/* Daily sustainability tips */}
          <div className="mt-14 rounded-[2rem] border border-white bg-white/75 p-6 backdrop-blur sm:p-10">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-700">
                  Your daily green routine
                </p>
                <h3 className="mt-3 text-2xl font-black text-emerald-950 sm:text-3xl">
                  Six small ways to make a difference.
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                  You don&apos;t have to do everything at once. Choose one
                  action, make it a habit, and build from there.
                </p>
              </div>
              <span className="text-sm font-bold text-emerald-700">🌱 One day at a time</span>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {tips.map((tip, index) => (
                <button
                  key={tip.title}
                  onClick={() => setTipIndex(index)}
                  className={`rounded-2xl border p-4 text-center transition ${
                    tipIndex === index
                      ? "border-emerald-500 bg-emerald-100 shadow-sm"
                      : "border-emerald-100 bg-white hover:border-emerald-300"
                  }`}
                >
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-3xl shadow-sm">
                    {tip.icon}
                  </span>
                  <p className="mt-4 text-sm font-extrabold text-emerald-950">{tip.title}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{tip.text}</p>
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-emerald-950 p-5 text-white sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Your selected action
                </p>
                <p className="mt-2 text-lg font-extrabold">
                  {tips[tipIndex].icon} {tips[tipIndex].title}
                </p>
                <p className="mt-1 text-sm text-emerald-100/80">{tips[tipIndex].text}</p>
              </div>
              <button
                onClick={() => setTipIndex((current) => (current + 1) % tips.length)}
                className="shrink-0 rounded-full bg-yellow-300 px-6 py-3 text-sm font-extrabold text-emerald-950 hover:bg-yellow-200"
              >
                Show another tip ↗
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-6 overflow-hidden rounded-[2rem] bg-sky-900 text-white md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div className="p-6 md:p-0">
              <span className="text-3xl">💚</span>
              <h3 className="mt-4 text-2xl font-black sm:text-3xl">
                Your choices have a ripple effect.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-sky-100/85">
                Choose reusable over disposable when practical, waste less,
                learn from trusted climate resources, and support credible
                conservation projects. Real progress grows through action.
              </p>
            </div>
            <a
              href="#shop"
              className="mx-6 mb-6 inline-flex items-center justify-center gap-3 rounded-full bg-yellow-300 px-6 py-4 text-sm font-extrabold text-sky-950 hover:bg-yellow-200 md:mx-0 md:mb-0"
            >
              Make a greener choice →
            </a>
          </div>
        </div>
      </section>

      {/* Reforestation stories */}
      <section id="stories" className="px-5 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-700">
                People. Places. Progress.
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl">
                Where a greener future begins.
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                From rainforest restoration to community-led tree planting,
                lasting environmental progress starts with caring for local ecosystems.
              </p>
            </div>
            <span className="w-fit rounded-full bg-emerald-50 px-5 py-3 text-sm font-bold text-emerald-800">
              Our planet. Our responsibility.
            </span>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <article
                key={story.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-60 overflow-hidden bg-emerald-50">
                  <img
                    src={story.image}
                    alt={story.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-emerald-900 shadow">
                    🌿 Restoration
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    {story.location}
                  </p>
                  <h3 className="mt-3 text-xl font-extrabold text-emerald-950">{story.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{story.text}</p>
                  <div className="mt-5 flex items-center justify-between gap-2 border-t border-emerald-100 pt-4">
                    <span className="text-sm font-extrabold text-emerald-800">{story.trees}</span>
                    <span className="text-[10px] text-slate-400">Sample figure</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-slate-400">
            Project names, locations, and tree counts are illustrative demo
            content, not verified planting records.
          </p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-[#f7faf6] px-5 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-700">
              Better habits start here
            </span>
            <h2 className="mt-3 text-3xl font-black text-emerald-950 sm:text-4xl">
              Sustainability, made approachable.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              You don&apos;t need to be perfect. Make informed choices,
              celebrate improvements, and keep finding ways to care for our planet.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "🌿",
                title: "Thoughtful products",
                text: "Explore reusable and nature-inspired essentials that encourage lower-waste habits.",
              },
              {
                icon: "🌳",
                title: "A planting mission",
                text: "Support credible restoration work with transparent funding and verified results.",
              },
              {
                icon: "☀️",
                title: "Climate education",
                text: "Discover practical tips and trustworthy information that turn awareness into action.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-emerald-100 bg-white p-7 transition hover:shadow-lg"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-3xl">
                  {item.icon}
                </span>
                <h3 className="mt-5 text-xl font-extrabold text-emerald-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-5 py-16 sm:py-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-900 via-emerald-800 to-sky-900 p-7 text-white sm:p-12 lg:p-16">
          <div className="absolute -right-10 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -right-1 top-0 h-56 w-56 rounded-full border border-white/10" />
          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-emerald-400/10 blur-2xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-100">
                Notes from nature
              </span>
              <h2 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
                A little green in your inbox.
              </h2>
              <p className="mt-4 max-w-lg leading-7 text-emerald-100/80">
                Get product news, practical sustainability tips, and inspiring
                stories about people making a difference for our planet.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-emerald-100/80">
                <span>✓ Useful ideas</span>
                <span>✓ Nature-inspired living</span>
                <span>✓ No daily spam</span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur sm:p-7">
              <h3 className="text-xl font-extrabold">Join our community</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-100/80">
                Your next greener habit starts with a little inspiration.
              </p>
              <form
                className="mt-6"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (email.trim() && email.includes("@")) {
                    setSubscribed(true);
                  }
                }}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Your email address
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setSubscribed(false);
                    }}
                    placeholder="Enter your email address"
                    className="min-w-0 flex-1 rounded-full border border-white/20 bg-white px-5 py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-300"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-yellow-300 px-7 py-4 text-sm font-extrabold text-emerald-950 hover:bg-yellow-200"
                  >
                    Subscribe →
                  </button>
                </div>
                {subscribed && (
                  <p className="mt-4 rounded-xl bg-white/10 p-3 text-sm text-emerald-100">
                    Thanks for your interest! Connect a newsletter service to
                    save real subscriptions.
                  </p>
                )}
              </form>
              <p className="mt-4 text-xs leading-5 text-emerald-100/60">
                Demo form only. No email is stored or sent by this page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="relative overflow-hidden bg-emerald-50 px-5 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-5xl">🌍</span>
          <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.24em] text-emerald-700">
            Our planet needs all of us
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-emerald-950 sm:text-6xl">
            A greener planet
            <span className="block text-emerald-700">starts with us.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Shop thoughtfully. Learn something new. Support nature. Together,
            we can help create a world where people and the planet thrive.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#shop"
              className="inline-flex items-center gap-3 rounded-full bg-emerald-800 px-8 py-4 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-1 hover:bg-emerald-950"
            >
              Start shopping →
            </a>
            <a
              href="#climate-corner"
              className="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white px-8 py-4 text-sm font-extrabold text-emerald-900 hover:bg-emerald-100"
            >
              Explore climate tips ↗
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-medium text-emerald-800">
            <span>🌱 Choose consciously</span>
            <span>♻️ Reuse thoughtfully</span>
            <span>🌳 Grow hope together</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#102f25] px-5 pb-8 pt-14 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr_1.2fr]">
            <div>
              <a href="#home" className="inline-flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                  🌿
                </span>
                <span>
                  <span className="block break-words text-xl font-black sm:text-2xl">
                    prevent.global.warming
                  </span>
                  <span className="mt-1 block text-[9px] tracking-wider text-emerald-200/70">
                    PROTECT OUR PLANET. GROW TOGETHER.
                  </span>
                </span>
              </a>
              <p className="mt-5 max-w-xs text-sm leading-7 text-emerald-100/70">
                Thoughtful essentials and planet-friendly inspiration for a
                more sustainable everyday life.
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  ["Instagram", "ig"],
                  ["Facebook", "fb"],
                  ["Pinterest", "p"],
                  ["YouTube", "yt"],
                ].map(([name, short]) => (
                  <a
                    key={name}
                    href="#home"
                    aria-label={name}
                    title={name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs font-extrabold transition hover:bg-white/15"
                  >
                    {short}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-extrabold">Explore</h3>
              <ul className="mt-5 space-y-3 text-sm text-emerald-100/70">
                <li><a className="hover:text-white" href="#home">Home</a></li>
                <li><a className="hover:text-white" href="#shop">Shop all</a></li>
                <li><a className="hover:text-white" href="#our-impact">Our impact</a></li>
                <li><a className="hover:text-white" href="#stories">Our stories</a></li>
                <li><a className="hover:text-white" href="#climate-corner">Climate Corner</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-extrabold">Customer care</h3>
              <ul className="mt-5 space-y-3 text-sm text-emerald-100/70">
                <li><a className="hover:text-white" href="#purchase-impact">Tree fund</a></li>
                <li><a className="hover:text-white" href="#shop">Product guide</a></li>
                <li><a className="hover:text-white" href="#our-impact">Transparency</a></li>
                <li><a className="hover:text-white" href="#climate-corner">Climate tips</a></li>
                <li><a className="hover:text-white" href="#home">Contact us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-extrabold">Grow with us</h3>
              <p className="mt-4 text-sm leading-6 text-emerald-100/70">
                Discover new collections and more ways to care for our shared home.
              </p>
              <a
                href="#newsletter-email"
                className="mt-5 inline-flex items-center gap-3 rounded-full bg-yellow-300 px-5 py-3 text-sm font-extrabold text-emerald-950 hover:bg-yellow-200"
              >
                Join our community →
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-emerald-100/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 prevent.global.warming. Demo storefront.</p>
            <div className="flex flex-wrap gap-5">
              <a href="#home" className="hover:text-white">Privacy</a>
              <a href="#home" className="hover:text-white">Terms</a>
              <a href="#purchase-impact" className="hover:text-white">Impact policy</a>
            </div>
            <p className="font-bold text-emerald-200">🌱 More trees. A brighter future.</p>
          </div>
        </div>
      </footer>

      {/* Product details and purchase impact modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-emerald-950/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProduct.name} details`}
            className="relative my-auto grid w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-2xl sm:grid-cols-2"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-slate-700 shadow-lg"
              aria-label="Close product details"
            >
              ×
            </button>
            <div className="min-h-64 bg-emerald-50 sm:min-h-[440px]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                {selectedProduct.category}
              </p>
              <h2 className="mt-3 text-3xl font-black text-emerald-950">
                {selectedProduct.name}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                {selectedProduct.description}
              </p>
              <p className="mt-5 text-2xl font-black text-emerald-900">
                ${selectedProduct.price.toFixed(2)}
              </p>

              <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <p className="font-extrabold text-emerald-950">
                  🌳 Purchase Impact
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Example allocation: {selectedProduct.impact}% of this
                  product&apos;s sale price is intended for the tree-planting fund.
                </p>
                <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-emerald-200">
                  <div
                    className="h-full rounded-full bg-emerald-700"
                    style={{ width: `${selectedProduct.impact}%` }}
                  />
                </div>
                <p className="mt-3 text-sm font-extrabold text-emerald-900">
                  ${(
                    (selectedProduct.price * selectedProduct.impact) /
                    100
                  ).toFixed(2)}{" "}
                  example tree-fund contribution
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Illustrative only. Replace this with your actual verified
                  contribution and planting-partner information.
                </p>
              </div>

              <button
                onClick={() => addToCart(selectedProduct)}
                className="mt-6 w-full rounded-full bg-emerald-800 px-6 py-4 text-sm font-extrabold text-white hover:bg-emerald-950"
              >
                Add to bag — ${selectedProduct.price.toFixed(2)}
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                className="mt-3 w-full rounded-full border border-emerald-200 px-6 py-3 text-sm font-bold text-emerald-900 hover:bg-emerald-50"
              >
                Continue exploring
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
