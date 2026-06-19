import Image from "next/image";
import {
  Search,
  ChevronDown,
  Lock,
  SlidersHorizontal,
  ArrowRight,
  Clock,
  Check,
  ListPlus,
  Star,
  Instagram,
  Facebook,
  Youtube,
  Menu,
} from "lucide-react";
import React from "react";

// --- MOCK DATA ---

const dinnerRecipes = [
  { id: 1, title: 'Rigatoni with Broccoli', image: 'https://picsum.photos/seed/rigatoni/600/700', time: '30 mins cook', author: 'Jordon Ezra King', avatar: 'https://picsum.photos/seed/jordon/100/100', diet: 'Pescatarian', isFree: true, top50: true },
  { id: 2, title: 'Puttanesca Pasta Salad', image: 'https://picsum.photos/seed/puttanesca/600/700', time: '15 mins cook', author: 'Elena Silcock', avatar: 'https://picsum.photos/seed/elena/100/100', diet: '', isFree: true },
  { id: 3, title: 'Peanut Sriracha Noodles', image: 'https://picsum.photos/seed/peanut/600/700', time: '10 mins cook', author: 'CRAV', avatar: 'https://picsum.photos/seed/crav/100/100', diet: 'Vegan', isFree: true },
  { id: 4, title: 'Quick & Creamy Butter Bean Bowl', image: 'https://picsum.photos/seed/bean/600/700', time: '20 mins cook', author: 'Christina Soteriou', avatar: 'https://picsum.photos/seed/christina/100/100', diet: 'Vegan', top50: true },
  { id: 5, title: 'Tuna & New Potato Salad with Caper Dressing', image: 'https://picsum.photos/seed/tuna/600/700', time: '25 mins cook', author: 'Kitty Coles', avatar: 'https://picsum.photos/seed/kitty/100/100', diet: 'Mustard' },
  { id: 6, title: 'Melted Broccoli & Anchovy Pasta', image: 'https://picsum.photos/seed/melted/600/700', time: '20 mins cook', author: 'Chloe René', avatar: 'https://picsum.photos/seed/chloe/100/100', diet: 'Pescatarian' },
];

const quickRecipes = [
  { id: 11, title: 'Green Bean & Tuna Salad', image: 'https://picsum.photos/seed/greenbean/600/700', time: '15 mins cook', author: 'Chloe René', avatar: 'https://picsum.photos/seed/chloe/100/100', diet: 'Pescatarian', isFree: true, top50: true },
  { id: 12, title: 'Sticky Sesame Chicken & Greens', image: 'https://picsum.photos/seed/sticky/600/700', time: '20 mins cook', author: 'Jodie Nixon', avatar: 'https://picsum.photos/seed/jodie/100/100', diet: '', isFree: true }, 
  { id: 13, title: 'Salmon & Smashed Cucumber Bowl', image: 'https://picsum.photos/seed/salmonbd/600/700', time: '15 mins cook', author: 'Sophie Wyburd', avatar: 'https://picsum.photos/seed/sophie/100/100', diet: 'Pescatarian', top50: true },
  { id: 14, title: 'Sausage & Bean Stew', image: 'https://picsum.photos/seed/stew/600/700', time: '30 mins cook', author: 'Nishat Tahsin', avatar: 'https://picsum.photos/seed/nishat/100/100', diet: '' },
  { id: 15, title: 'Chicken Gyros', image: 'https://picsum.photos/seed/gyros/600/700', time: '40 mins cook', author: 'Sophie Waplington', avatar: 'https://picsum.photos/seed/sophiew/100/100', diet: 'High Protein' },
  { id: 16, title: 'Teriyaki Chicken Meatballs', image: 'https://picsum.photos/seed/teriyaki/600/700', time: '30 mins cook', author: 'Elena Silcock', avatar: 'https://picsum.photos/seed/elena/100/100', diet: 'Vegan' },
];

const breakfastRecipes = [
  { id: 21, title: 'Chocolate Berry Overnight Oats', image: 'https://picsum.photos/seed/oats1/600/700', time: '5 mins prep', author: 'CRAV', avatar: 'https://picsum.photos/seed/crav/100/100', diet: 'Vegan' },
  { id: 22, title: 'Almond & Raspberry Chia Pot', image: 'https://picsum.photos/seed/oats2/600/700', time: '5 mins prep', author: 'CRAV', avatar: 'https://picsum.photos/seed/crav/100/100', diet: 'Vegan' },
  { id: 23, title: 'Banana & Peanut Butter Overnight Oats', image: 'https://picsum.photos/seed/oats3/600/700', time: '5 mins prep', author: 'Chloe René', avatar: 'https://picsum.photos/seed/chloe/100/100', diet: 'Vegan' },
  { id: 24, title: 'Spinach & Feta Breakfast Wrap', image: 'https://picsum.photos/seed/wrap/600/700', time: '15 mins cook', author: 'Ben Lippett', avatar: 'https://picsum.photos/seed/ben/100/100', diet: 'Vegetarian' },
  { id: 25, title: 'Tiramisu Overnight Oats', image: 'https://picsum.photos/seed/oats4/600/700', time: '10 mins prep', author: 'Kitty Coles', avatar: 'https://picsum.photos/seed/kitty/100/100', diet: 'Vegan' },
  { id: 26, title: 'Caramelised Banana Porridge', image: 'https://picsum.photos/seed/porridge/600/700', time: '15 mins cook', author: 'Jordon Ezra King', avatar: 'https://picsum.photos/seed/jordon/100/100', diet: 'Vegetarian' },
];

const chefs = [
  { name: 'Ben Lippett', image: 'https://picsum.photos/seed/ben/200/200' },
  { name: 'Chloe René', image: 'https://picsum.photos/seed/chloe2/200/200' },
  { name: 'Lily Vanilli', image: 'https://picsum.photos/seed/lily/200/200' },
  { name: 'Kitty Coles', image: 'https://picsum.photos/seed/kitty2/200/200' },
  { name: 'Karan Gokani', image: 'https://picsum.photos/seed/karan/200/200' },
  { name: 'Sophie Waplington', image: 'https://picsum.photos/seed/sophiew2/200/200' },
  { name: 'Jodie Nixon', image: 'https://picsum.photos/seed/jodie2/200/200' },
  { name: 'Romany Henry', image: 'https://picsum.photos/seed/romany/200/200' },
  { name: 'Justin Tsang', image: 'https://picsum.photos/seed/justin/200/200' },
];

const testimonials = [
  { id: 1, text: "CRAV Premium? It's like having a VIP pass to the coolest kitchen party online. Top chefs, killer recipes, and endless inspiration—all in one place.", author: "Caitlin P" },
  { id: 2, text: "The most helpful recipe inspiration food-loving site to use day to day - often use recipes to cook for friends and they tell me how good it was - I don't take the credit, credit is due to CRAV!", author: "Lucy P" },
  { id: 3, text: "CRAV is the perfect source of inspiration for when I don't know what to make – I can browse the site, pick something I like the look of, and have it on the table really easily.", author: "Sonia M" },
  { id: 4, text: "CRAV has a massive range of recipes that are guaranteed to hit every time. I can literally just pick something at random and know that it'll be absolutely delicious.", author: "Dylan F" },
  { id: 5, text: "Lots of recipes and great food content are uploaded all the time. Easy to make collections of recipe ideas. Really good search tool.", author: "Georgia W" },
  { id: 6, text: "I would recommend CRAV to anyone as it's an easy way to explore recipes that suit every budget and lifestyle. They're recipes you can 100% trust.", author: "Reine F" }
];

const tags = [
  { name: 'Dinner, sorted', active: true },
  { name: 'New recipes' },
  { name: 'High-protein dinners' },
  { name: 'Packed lunches' },
  { name: 'Make-ahead breakfasts' },
  { name: 'Your saved recipes', icon: Lock },
];


// --- COMPONENTS ---

const RecipeCard = ({ recipe }: { recipe: any }) => (
  <div className="flex flex-col group cursor-pointer min-w-[280px] md:min-w-[0]">
    {/* Image Container */}
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-100">
      <Image
        src={recipe.image}
        alt={recipe.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      {/* Badges */}
      <div className="absolute top-3 left-3 flex items-center gap-2">
        {recipe.isFree && (
          <span className="bg-[#2fc167] text-black text-xs font-bold px-2 py-1 rounded-md tracking-tight">
            Free
          </span>
        )}
        {recipe.top50 && (
          <span className="bg-[#f6dec7] text-black text-xs font-bold px-2 py-1 rounded-md tracking-tight">
            Top 50
          </span>
        )}
      </div>
      {/* Add Button */}
      <button className="absolute top-3 right-3 bg-black hover:bg-gray-800 text-white p-[6px] rounded-full shadow-md transition-colors">
        <ListPlus size={18} strokeWidth={2.5} />
      </button>
    </div>

    {/* Content */}
    <div className="mt-4 flex flex-col flex-1">
      <h3 className="font-semibold text-[17px] leading-tight text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-2">
        {recipe.title}
      </h3>
      <div className="flex items-center gap-1.5 text-gray-500 mt-2">
        <Clock size={14} />
        <span className="text-[13px]">{recipe.time}</span>
      </div>

      <div className="h-px w-full bg-gray-200 my-4" />

      {/* Author & Diet */}
      <div className="auto pb-2 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6 rounded-full overflow-hidden bg-gray-200">
            <Image src={recipe.avatar} alt={recipe.author} fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <span className="text-[13px]">{recipe.author}</span>
        </div>
        {recipe.diet && (
          <span className="text-[13px] text-gray-500">{recipe.diet}</span>
        )}
      </div>
    </div>
  </div>
);


export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-[#2fc167] w-full py-2.5 text-center px-4">
        <span className="text-sm font-bold text-black tracking-wide">
          Start Your Free Trial
        </span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6 flex-1">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="relative w-40 h-10">
              <Image src="/logo.png" alt="CRAV" fill className="object-contain" />
            </div>
            <span className="text-gray-700 text-lg hidden md:block select-none border-l border-gray-300 pl-4">
              Love cooking
            </span>
          </div>

          {/* Search */}
          <div className="hidden lg:flex items-center bg-[#f2f2f2] rounded-full px-4 py-2.5 flex-1 max-w-2xl mx-12">
            <Search size={20} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for recipes, ingredients, etc..."
              className="bg-transparent border-none outline-none w-full text-sm text-gray-800 placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-1 bg-[#f2f2f2] hover:bg-gray-200 text-black text-sm font-medium px-4 py-2.5 rounded-full transition-colors">
            Log In <ChevronDown size={16} />
          </button>
          <button className="bg-[#2fc167] hover:bg-[#28a458] text-black text-sm font-bold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap">
            Join CRAV
          </button>
          <button className="md:hidden p-2">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Secondary Nav */}
      <nav className="flex items-center border-b border-gray-100 overflow-x-auto no-scrollbar px-6">
        <div className="flex items-center gap-8 py-4 w-max">
          {["All recipes", "Weeknight dinner", "Easy lunches", "Recipes for Kids", "Plan & Batch"].map((item, i) => (
            <a key={i} href="#" className="text-[15px] font-bold text-gray-900 whitespace-nowrap hover:text-gray-600 transition-colors">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-4 mt-6 md:px-6">
        <div className="bg-[#eaf9f0] rounded-2xl w-full flex flex-col lg:flex-row items-center p-8 md:p-16 gap-12 overflow-hidden">
          
          {/* Hero Content */}
          <div className="flex-1 max-w-2xl lg:pr-12">
            <h2 className="font-heading text-[40px] md:text-[64px] font-bold text-black leading-[1.05] tracking-tight mb-10">
              Your home for easy, delicious meal prep recipes
            </h2>
            <ul className="space-y-4 mb-10">
              {[
                "Unlimited access to 3000+ recipes",
                "Plan your meals with ease",
                "Organise and save your favourite recipes"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-800 text-[17px]">
                  <Check size={20} className="text-black flex-shrink-0" strokeWidth={3} />
                  {text}
                </li>
              ))}
            </ul>
            <button className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-3.5 rounded-full transition-colors">
              Start Your Free Trial
            </button>
          </div>

          {/* Hero Collage */}
          <div className="flex-1 w-full lg:w-auto flex gap-4 h-[500px] md:h-[600px] overflow-hidden -mr-8 md:-mr-16">
            <div className="flex flex-col gap-4 w-1/3 pt-12">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="https://picsum.photos/seed/collage1/400/300" alt="Food" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden">
                <Image src="https://picsum.photos/seed/collage2/400/500" alt="Food" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="flex flex-col gap-4 w-1/3">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                <Image src="https://picsum.photos/seed/collage3/400/400" alt="Food" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden">
                <Image src="https://picsum.photos/seed/collage4/400/500" alt="Food" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="flex flex-col gap-4 w-1/3 pt-8">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                <Image src="https://picsum.photos/seed/collage5/400/400" alt="Food" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="https://picsum.photos/seed/collage6/400/300" alt="Food" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                <Image src="https://picsum.photos/seed/collage7/400/400" alt="Food" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter / Tags Bar */}
      <div className="flex items-center justify-between px-4 md:px-6 mt-16 mb-8 group">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full pr-4 pb-2">
          {tags.map((tag, i) => (
            <button
              key={i}
              className={`flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full text-[15px] font-medium transition-colors ${
                tag.active 
                  ? "bg-black text-white" 
                  : "bg-[#f2f2f2] text-gray-800 hover:bg-gray-200"
              }`}
            >
              {tag.icon && <tag.icon size={16} />}
              {tag.name}
            </button>
          ))}
        </div>
        <button className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm -mt-2">
          <SlidersHorizontal size={18} />
        </button>
      </div>

      {/* Row 1: Dinner, sorted (Grid) */}
      <div className="px-4 md:px-6 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {dinnerRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 mb-16 pt-8 pb-12 overflow-hidden">
        <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-black tracking-tight px-4 md:px-6 mb-8">
          Used and loved by over 300,000 home cooks
        </h2>
        
        {/* Horizontal draggable track */}
        <div className="flex gap-4 overflow-x-auto px-4 md:px-6 pb-8 no-scrollbar snap-x">
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="bg-[#f2f2f2] rounded-xl p-8 flex flex-col justify-between min-w-[320px] max-w-[350px] snap-center flex-shrink-0"
            >
              <div>
                <div className="flex text-black mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" stroke="none" className="mr-0.5" />
                  ))}
                </div>
                <p className="text-[15px] text-gray-600 leading-relaxed font-light">
                  {t.text}
                </p>
              </div>
              <p className="text-xs font-bold text-black mt-8 tracking-wide uppercase">
                {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Quick & healthy dinners */}
      <div className="px-4 md:px-6 mb-16 pb-8">
        <h2 className="font-heading text-[32px] font-bold text-black tracking-tight mb-8">
          Quick & healthy dinners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {quickRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>

      {/* Highlighted Chefs */}
      <div className="px-4 md:px-6 mb-20 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-heading text-[32px] font-bold text-black tracking-tight mb-1">
              Highlighted chefs
            </h2>
            <p className="text-gray-600">
              Meet the chefs that bring you delicious food every day.
            </p>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
          {chefs.map((chef, i) => (
            <div key={i} className="flex flex-col items-center gap-3 flex-shrink-0 cursor-pointer group">
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden relative border border-gray-100 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                <Image src={chef.image} alt={chef.name} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <span className="text-[15px] font-medium text-gray-900 group-hover:text-black">
                {chef.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 3: Make-ahead breakfasts */}
      <div className="px-4 md:px-6 mb-16 pb-8">
        <h2 className="font-heading text-[32px] font-bold text-black tracking-tight mb-8">
          Make-ahead breakfasts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {breakfastRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>

      {/* Pre-footer image block */}
      <div className="px-4 md:px-6 mb-16">
         <div className="w-full flex gap-1 h-[250px] md:h-[400px] overflow-hidden rounded-xl border border-gray-200">
            <div className="w-2/3 md:w-3/4 relative">
               <Image src="https://picsum.photos/seed/largebanner/1200/400" alt="Banner" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="w-1/3 md:w-1/4 flex flex-col gap-1">
               <div className="flex-1 relative">
                 <Image src="https://picsum.photos/seed/smallbnr1/400/200" alt="Banner" fill className="object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="flex-1 relative">
                 <Image src="https://picsum.photos/seed/smallbnr2/400/200" alt="Banner" fill className="object-cover" referrerPolicy="no-referrer" />
               </div>
            </div>
         </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#111111] text-white pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-24">
          
          {/* Logo & Tagline */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-4 mb-2">
                <div className="relative w-48 h-12">
                  <Image src="/logo.png" alt="CRAV" fill className="object-contain" />
                </div>
                <div className="h-6 w-px bg-white/20 ml-2" />
                <span className="text-xl text-white font-medium ml-2">Your weekly cooking made easy and delicious</span>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:w-2/3">
             <div className="flex flex-col gap-4 text-sm text-gray-300">
               <a href="#" className="hover:text-[#2fc167] transition-colors">Recipes</a>
               <a href="#" className="hover:text-[#2fc167] transition-colors">Cuisines</a>
               <a href="#" className="hover:text-[#2fc167] transition-colors">Meals</a>
               <a href="#" className="hover:text-[#2fc167] transition-colors">Types</a>
             </div>
             <div className="flex flex-col gap-4 text-sm text-gray-300">
               <a href="#" className="hover:text-[#2fc167] transition-colors">Ingredients</a>
               <a href="#" className="hover:text-[#2fc167] transition-colors">Diets</a>
               <a href="#" className="hover:text-[#2fc167] transition-colors">Occasions</a>
               <a href="#" className="hover:text-[#2fc167] transition-colors">Recipe Categories</a>
             </div>
             <div className="flex flex-col gap-4 text-sm text-gray-300">
               <a href="#" className="hover:text-[#2fc167] transition-colors">About Us</a>
               <a href="#" className="hover:text-[#2fc167] transition-colors">Privacy & Cookies</a>
               <a href="#" className="hover:text-[#2fc167] transition-colors">Careers</a>
               <a href="#" className="hover:text-[#2fc167] transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-white font-semibold transition-colors mt-2">Log In</a>
             </div>
             <div className="flex flex-col gap-4 text-sm text-gray-300">
                 {/* Socials embedded on top for md layout based on design */}
                 <div className="hidden md:flex gap-4 text-white mb-6">
                    <Facebook size={24} className="hover:text-[#2fc167] cursor-pointer" />
                    <Instagram size={24} className="hover:text-[#2fc167] cursor-pointer" />
                    <Youtube size={24} className="hover:text-[#2fc167] cursor-pointer" />
                 </div>
               <a href="#" className="hover:text-[#2fc167] transition-colors">Contact Us</a>
               <a href="#" className="hover:text-[#2fc167] transition-colors">FAQs</a>
               <a href="#" className="hover:text-[#2fc167] transition-colors">Privacy Settings</a>
               <a href="#" className="hover:text-[#2fc167] transition-colors">Gift Subscription</a>
               <a href="#" className="hover:text-white font-semibold transition-colors mt-2">Try CRAV for free</a>
             </div>
          </div>
        </div>
        
        {/* Newsletter & Bottom */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pt-8">
           <div className="w-full md:max-w-md">
             <div className="relative mb-6">
               <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-white text-black rounded-full py-4 px-6 pr-14 text-sm outline-none font-medium"
               />
               <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                 <ArrowRight size={18} />
               </button>
             </div>
             <label className="flex items-start gap-4 cursor-pointer group">
                <div className="w-5 h-5 rounded-full border border-gray-400 mt-0.5 flex-shrink-0 flex items-center justify-center group-hover:border-white transition-colors">
                   <div className="w-3 h-3 bg-transparent rounded-full" />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">
                   I consent to being contacted by email. Your email address is safe with us. Read our <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>.
                </span>
             </label>
           </div>
           
           <div className="flex md:hidden gap-5 text-white">
              <Facebook size={24} className="hover:text-[#2fc167] cursor-pointer" />
              <Instagram size={24} className="hover:text-[#2fc167] cursor-pointer" />
              <Youtube size={24} className="hover:text-[#2fc167] cursor-pointer" />
           </div>
        </div>
      </footer>

    </div>
  );
}
