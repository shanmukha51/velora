import React, { useState, useEffect, createContext, useContext } from 'react';
import { 
  ShoppingBag, Heart, Search, User, Menu, X, ChevronRight, 
  Star, Filter, ArrowRight, Check, Trash2, Plus, Minus, 
  ShieldCheck, RefreshCw, Truck, ArrowLeft, Lock, Mail, Phone, Eye, EyeOff
} from 'lucide-react';

// --- INITIAL PRODUCTS CATALOG (INR Pricing) ---
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Elegant Satin Slip Dress",
    category: "Dresses",
    price: 2499,
    originalPrice: 3499,
    description: "A fluid, minimalist satin slip dress crafted with a bias cut for an effortless, flattering silhouette on evening occasions.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black", "Champagne", "Emerald"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.8,
    reviews: 142,
    stock: 12,
    isNew: true,
    isFeatured: true
  },
  {
    id: 2,
    name: "Structured Linen Blazer",
    category: "Tops",
    price: 3299,
    originalPrice: 4199,
    description: "Tailored from breathable European linen, featuring structured shoulders and a relaxed drape for contemporary workwear.",
    images: [
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Cream", "Beige", "Black"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 98,
    stock: 8,
    isNew: true,
    isFeatured: true
  },
  {
    id: 3,
    name: "Pleated High-Waist Trousers",
    category: "Bottoms",
    price: 2199,
    originalPrice: 2899,
    description: "Classic high-waist trousers featuring delicate front pleats and a wide-leg cut designed for effortless sophistication.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Soft Brown", "Black", "Cream"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.9,
    reviews: 215,
    stock: 20,
    isNew: false,
    isFeatured: true
  },
  {
    id: 4,
    name: "Knitted Cashmere-Blend Cardigan",
    category: "Casual Wear",
    price: 2899,
    originalPrice: 3599,
    description: "An ultra-soft cashmere blend cardigan accented with tortoiseshell buttons. Perfect for transitional layering.",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Beige", "Cream", "Charcoal"],
    sizes: ["S", "M", "L"],
    rating: 4.6,
    reviews: 76,
    stock: 14,
    isNew: true,
    isFeatured: false
  },
  {
    id: 5,
    name: "Sequin Embellished Party Dress",
    category: "Party Wear",
    price: 4599,
    originalPrice: 5999,
    description: "Catch every light in this dazzling midi party dress featuring all-over micro-sequins and a sensual slit.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black", "Midnight Blue", "Rose Gold"],
    sizes: ["XS", "S", "M"],
    rating: 4.9,
    reviews: 54,
    stock: 5,
    isNew: true,
    isFeatured: true
  },
  {
    id: 6,
    name: "Minimalist Leather Handbag",
    category: "Accessories",
    price: 3499,
    originalPrice: 4499,
    description: "Structured genuine leather handbag with sleek hardware and a detachable crossbody strap for daily versatility.",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black", "Soft Brown", "Cream"],
    sizes: ["One Size"],
    rating: 4.7,
    reviews: 110,
    stock: 10,
    isNew: false,
    isFeatured: true
  },
  {
    id: 7,
    name: "Ribbed Cotton Crop Top",
    category: "Tops",
    price: 1299,
    originalPrice: 1699,
    description: "A breathable, high-stretch ribbed cotton crop top engineered for clean lines and daily layering.",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["White", "Black", "Beige"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.4,
    reviews: 64,
    stock: 25,
    isNew: false,
    isFeatured: false
  },
  {
    id: 8,
    name: "Flowing Chiffon Maxi Dress",
    category: "Dresses",
    price: 3899,
    originalPrice: 4999,
    description: "An ethereal tiered maxi dress crafted from translucent chiffon with delicate button closures.",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Cream", "Sage", "Dusty Pink"],
    sizes: ["S", "M", "L"],
    rating: 4.8,
    reviews: 89,
    stock: 9,
    isNew: true,
    isFeatured: true
  },
  {
  
    id: 9,
    name: "Classic Silk Wrap Blouse",
    category: "Tops",
    price: 1899,
    originalPrice: 2499,
    description: "A luxurious silk wrap blouse featuring a V-neckline and tie-waist detailing for an effortless transition from office to evening.",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Ivory", "Black", "Rose"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.8,
    reviews: 42,
    stock: 15,
    isNew: true,
    isFeatured: true
  },
  {
    id: 10,
    name: "Tailored Wool Blend Trench Coat",
    category: "Casual Wear",
    price: 5499,
    originalPrice: 6999,
    description: "An iconic double-breasted trench coat tailored from a warm wool-blend fabric, complete with epaulettes and a matching belt.",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Camel", "Black", "Olive"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 118,
    stock: 6,
    isNew: true,
    isFeatured: true
  },
  {
    id: 11,
    name: "Velvet Evening Midi Skirt",
    category: "Bottoms",
    price: 2299,
    originalPrice: 2999,
    description: "Lustrous velvet midi skirt cut in an A-line shape, offering a rich texture and graceful movement for festive evenings.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Emerald", "Burgundy", "Black"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.7,
    reviews: 35,
    stock: 14,
    isNew: false,
    isFeatured: false
  },
  {
    id: 12,
    name: "Oversized Cashmere Turtleneck",
    category: "Casual Wear",
    price: 3999,
    originalPrice: 4999,
    description: "Supremely cozy oversized turtleneck sweater spun from 100% sustainable cashmere yarn for ultimate luxury warmth.",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Oatmeal", "Grey", "Black"],
    sizes: ["S", "M", "L"],
    rating: 4.9,
    reviews: 88,
    stock: 11,
    isNew: true,
    isFeatured: true
  },
  {
    id: 13,
    name: "Metallic Pleated Party Skirt",
    category: "Party Wear",
    price: 2799,
    originalPrice: 3499,
    description: "Catch the light with every step in this accordion-pleated metallic skirt featuring a comfortable elastic waistband.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Gold", "Silver", "Bronze"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.6,
    reviews: 51,
    stock: 10,
    isNew: false,
    isFeatured: false
  },
  {
    id: 14,
    name: "Designer Gold Chain Belt",
    category: "Accessories",
    price: 1499,
    originalPrice: 1999,
    description: "An adjustable geometric link chain belt finished in polished gold hardware to cinch dresses and blazers with style.",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Gold", "Silver"],
    sizes: ["One Size"],
    rating: 4.8,
    reviews: 62,
    stock: 22,
    isNew: false,
    isFeatured: false
  },
  {
    id: 15,
    name: "Floral-Embroidered Tiered Haute Couture Gown",
    category: "Dresses",
    price: 5400,
    originalPrice: 5500,
    description: "An exquisite floral-embroidered tiered gown featuring intricate embroidery and a dramatic silhouette for grand evenings.",
    images: [
      "https://images.unsplash.com/photo-1715852700550-6436320162e6?auto=format&fit=crop&w=800&q=80",
      
    ],
    colors: ["Rose Pink", "Red", "Champagne"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.9,
    reviews: 142,
    stock: 12,
    isNew: true,
    isFeatured: true
  },
  {
    id: 16,
    name: "Pleated Velvet Midi Dress",
    category: "Dresses",
    price: 3499,
    originalPrice: 4299,
    description: "A rich velvet midi dress featuring accordion pleats, a waist belt, and an elegant high neckline.",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Burgundy", "Emerald", "Black"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.8,
    reviews: 78,
    stock: 14,
    isNew: true,
    isFeatured: true
  },
  {
    id: 17,
    name: "Embroidered Organza Maxi Gown",
    category: "Dresses",
    price: 7899,
    originalPrice: 9499,
    description: "An ethereal organza gown accented with delicate floral embroidery and sheer puffed sleeves.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Powder Blue", "Blush Pink", "Ivory"],
    sizes: ["S", "M", "L"],
    rating: 4.9,
    reviews: 112,
    stock: 6,
    isNew: true,
    isFeatured: true
  },
  {
    id: 18,
    name: "Asymmetric Cut-Out Bodycon Dress",
    category: "Dresses",
    price: 2999,
    originalPrice: 3799,
    description: "Modern architectural bodycon dress featuring asymmetric waist cut-outs and a sleek thigh slit.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black", "Chocolate", "Cobalt"],
    sizes: ["XS", "S", "M"],
    rating: 4.7,
    reviews: 64,
    stock: 18,
    isNew: false,
    isFeatured: false
  },
  {
    id: 19,
    name: "Tiered Cotton Sundress",
    category: "Dresses",
    price: 2199,
    originalPrice: 2799,
    description: "Breezy tiered cotton sundress styled with tie shoulder straps and a relaxed A-line skirt.",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Sage Green", "Cream", "Mustard"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 95,
    stock: 22,
    isNew: false,
    isFeatured: false
  },
  {
    id: 20,
    name: "Satin Halterneck Cocktail Dress",
    category: "Dresses",
    price: 3899,
    originalPrice: 4699,
    description: "Glamorous halterneck dress made from lustrous satin with a draped cowl back.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Champagne", "Ruby Red", "Black"],
    sizes: ["XS", "S", "M"],
    rating: 4.8,
    reviews: 83,
    stock: 9,
    isNew: true,
    isFeatured: true
  },
  {
    id: 21,
    name: "Floral Chiffon Wrap Midi Dress",
    category: "Dresses",
    price: 2799,
    originalPrice: 3499,
    description: "Flowing wrap midi dress printed with subtle botanical motifs, crafted from soft chiffon.",
    images: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Rose", "Dusty Blue", "Olive"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 47,
    stock: 15,
    isNew: false,
    isFeatured: false
  },
  {
    id: 22,
    name: "Ribbed Knit Sweater Dress",
    category: "Dresses",
    price: 3299,
    originalPrice: 3999,
    description: "Cozy figure-hugging sweater dress knitted with fine vertical ribbing and a turtleneck collar.",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608234807905-4466023792f5?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Oatmeal", "Charcoal", "Camel"],
    sizes: ["S", "M", "L"],
    rating: 4.7,
    reviews: 130,
    stock: 12,
    isNew: true,
    isFeatured: false
  },
  {
    id: 23,
    name: "Backless Sequin Gala Gown",
    category: "Dresses",
    price: 8999,
    originalPrice: 10500,
    description: "Floor-length sequin evening gown featuring a dramatic plunging open back and mermaid hem.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Silver", "Gold", "Midnight Navy"],
    sizes: ["XS", "S", "M"],
    rating: 5.0,
    reviews: 41,
    stock: 4,
    isNew: true,
    isFeatured: true
  },
  {
    id: 24,
    name: "Linen Button-Front Shirt Dress",
    category: "Dresses",
    price: 2499,
    originalPrice: 3199,
    description: "Tailored shirt dress made from pure linen, accented with mother-of-pearl buttons and a fabric belt.",
    images: [
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["White", "Beige", "Terracotta"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 88,
    stock: 16,
    isNew: false,
    isFeatured: false
  },
  {
    id: 25,
    name: "Off-Shoulder Corset Mini Dress",
    category: "Dresses",
    price: 3699,
    originalPrice: 4499,
    description: "Structured corset-style mini dress designed with boning details and romantic off-shoulder sleeves.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black", "Blush", "Red"],
    sizes: ["XS", "S", "M"],
    rating: 4.8,
    reviews: 104,
    stock: 8,
    isNew: true,
    isFeatured: true
  },
  {
    id: 26,
    name: "Bohemian Printed Tiered Maxi",
    category: "Dresses",
    price: 2899,
    originalPrice: 3599,
    description: "Relaxed boho maxi dress featuring paisley prints, long puff sleeves, and a soft drawstring waist.",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Teal", "Rust", "Cream"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 52,
    stock: 14,
    isNew: false,
    isFeatured: false
  },
  {
    id: 27,
    name: "Draped Metallic Jersey Dress",
    category: "Dresses",
    price: 4199,
    originalPrice: 5199,
    description: "High-shine metallic jersey dress featuring twist-front waist detailing and long fitted sleeves.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Bronze", "Gunmetal", "Silver"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.9,
    reviews: 67,
    stock: 10,
    isNew: true,
    isFeatured: true
  },
  {
    id: 28,
    name: "Square-Neck Denim Mini Dress",
    category: "Dresses",
    price: 2299,
    originalPrice: 2899,
    description: "Structured denim mini dress styled with a retro square neckline and exposed silver front zipper.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Vintage Wash", "Dark Denim"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.6,
    reviews: 79,
    stock: 20,
    isNew: false,
    isFeatured: false
  },
  {
    id: 29,
    name: "High-Low Taffeta Promenade Gown",
    category: "Dresses",
    price: 6999,
    originalPrice: 8499,
    description: "Dramatic taffeta gown featuring a fitted strapless bodice and a volumetric high-low skirt train.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Royal Blue", "Magenta", "Black"],
    sizes: ["S", "M", "L"],
    rating: 4.9,
    reviews: 38,
    stock: 5,
    isNew: true,
    isFeatured: true
  },
  {
    id: 30,
    name: "Minimalist Shift Linen Dress",
    category: "Dresses",
    price: 1999,
    originalPrice: 2599,
    description: "Clean-cut sleeveless linen shift dress with subtle side slits for easy daily resort wear.",
    images: [
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Sand", "Olive", "White"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.4,
    reviews: 62,
    stock: 25,
    isNew: false,
    isFeatured: false
  },
  {
    id: 31,
    name: "Feather-Trimmed Satin Party Mini",
    category: "Dresses",
    price: 4599,
    originalPrice: 5499,
    description: "Statement satin party dress hemmed with soft ostrich feathers along the cuffs and skirt line.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Emerald Green", "Black", "Dusty Pink"],
    sizes: ["XS", "S", "M"],
    rating: 4.8,
    reviews: 49,
    stock: 7,
    isNew: true,
    isFeatured: true
  },
  {
    id: 32,
    name: "Monochrome Plaid Tweed Pinafore",
    category: "Dresses",
    price: 3199,
    originalPrice: 3899,
    description: "Chic French tweed pinafore dress adorned with pearl buttons, perfect for autumn layering.",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black/White", "Houndstooth"],
    sizes: ["S", "M", "L"],
    rating: 4.7,
    reviews: 84,
    stock: 11,
    isNew: false,
    isFeatured: false
  },
  {
    id: 33,
    name: "Cowl-Neck Silk Slip Midi",
    category: "Dresses",
    price: 2899,
    originalPrice: 3699,
    description: "Liquid silk midi dress with adjustable spaghetti straps and an elegant draped cowl bust.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Terracotta", "Champagne", "Black"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.8,
    reviews: 140,
    stock: 16,
    isNew: true,
    isFeatured: true
  },
  {
    id: 34,
    name: "Embroidered Tulle Ballgown",
    category: "Dresses",
    price: 9499,
    originalPrice: 11999,
    description: "Opulent multi-layered tulle gown featuring hand-embroidered sequin motifs across the corset.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Blush Gold", "Midnight Silver"],
    sizes: ["S", "M", "L"],
    rating: 5.0,
    reviews: 29,
    stock: 3,
    isNew: true,
    isFeatured: true
  },
  {
    id: 35,
    name: "Ruched Mesh Bodycon Dress",
    category: "Dresses",
    price: 2599,
    originalPrice: 3299,
    description: "Stretch mesh bodycon dress featuring full body ruching for a flattering contoured fit.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Chocolate Brown", "Plum", "Black"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.6,
    reviews: 91,
    stock: 15,
    isNew: false,
    isFeatured: false
  },
  {
    id: 36,
    name: "Smocked Floral Poplin Midi",
    category: "Dresses",
    price: 2699,
    originalPrice: 3399,
    description: "Crisp cotton poplin dress featuring a smocked elastic bodice and romantic puff sleeves.",
    images: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Yellow Floral", "Blue Garden"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 73,
    stock: 19,
    isNew: false,
    isFeatured: false
  },
  {
    id: 37,
    name: "One-Shoulder Satin Column Gown",
    category: "Dresses",
    price: 5299,
    originalPrice: 6499,
    description: "Sleek column gown crafted in heavy satin with a dramatic cape-like one-shoulder drape.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Scarlet Red", "Emerald", "Black"],
    sizes: ["XS", "S", "M"],
    rating: 4.9,
    reviews: 67,
    stock: 8,
    isNew: true,
    isFeatured: true
  },
  {
    id: 38,
    name: "Structured Crepe Blazer Dress",
    category: "Dresses",
    price: 4299,
    originalPrice: 5199,
    description: "Double-breasted blazer dress tailored in premium crepe fabric with satin peak lapels.",
    images: [
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Ivory", "Black", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 105,
    stock: 10,
    isNew: true,
    isFeatured: false
  },
  {
    id: 39,
    name: "Pleated Halter Resort Maxi",
    category: "Dresses",
    price: 3199,
    originalPrice: 3999,
    description: "Micro-pleated resort maxi dress with a gold-ring neck tie and open silhouette.",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Coral", "Turquoise", "Cream"],
    sizes: ["S", "M", "L"],
    rating: 4.7,
    reviews: 58,
    stock: 13,
    isNew: false,
    isFeatured: false
  },
  {
    id: 40,
    name: "Glitter Velvet Wrap Cocktail Dress",
    category: "Dresses",
    price: 3799,
    originalPrice: 4599,
    description: "Shimmering velvet wrap dress studded with micro-glitter and tied at the side waist.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Midnight Blue", "Plum", "Black"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.8,
    reviews: 77,
    stock: 9,
    isNew: true,
    isFeatured: true
  },
  {
    id: 41,
    name: "Layered Chiffon Skater Dress",
    category: "Dresses",
    price: 2399,
    originalPrice: 2999,
    description: "Flirty layered chiffon skater dress with a tight fitted waist and flouncy hemline.",
    images: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Lavender", "Mint", "Blush"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.5,
    reviews: 61,
    stock: 17,
    isNew: false,
    isFeatured: false
  },
  {
    id: 42,
    name: "V-Neck Satin Slip Midi",
    category: "Dresses",
    price: 2699,
    originalPrice: 3399,
    description: "Minimalist satin slip with a sharp front V-neck and a high side leg slit.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Champagne", "Black", "Sage"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.7,
    reviews: 115,
    stock: 14,
    isNew: true,
    isFeatured: false
  },
  {
    id: 43,
    name: "Crystal-Trimmed Cutout Gown",
    category: "Dresses",
    price: 8499,
    originalPrice: 9999,
    description: "Evening gown lined with sparkling rhinestones along the ribcage cutouts and collar line.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black", "White Crystal"],
    sizes: ["XS", "S", "M"],
    rating: 4.9,
    reviews: 53,
    stock: 5,
    isNew: true,
    isFeatured: true
  },
  {
    id: 44,
    name: "Vintage Polka Dot Midi Dress",
    category: "Dresses",
    price: 2299,
    originalPrice: 2899,
    description: "Retro polka dot midi dress designed with short puff sleeves and a row of decorative front buttons.",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black/White", "Navy/White"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 82,
    stock: 18,
    isNew: false,
    isFeatured: false
  },
  {
    id: 45,
    name: "Heavy Satin Mermaid Gown",
    category: "Dresses",
    price: 7499,
    originalPrice: 8999,
    description: "Sculpted mermaid dress made of heavyweight satin featuring a sweetheart neckline and train.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Burgundy", "Navy", "Emerald"],
    sizes: ["S", "M", "L"],
    rating: 4.9,
    reviews: 36,
    stock: 6,
    isNew: true,
    isFeatured: true
  },
  {
    id: 46,
    name: "Tiered Eyelet Lace Sundress",
    category: "Dresses",
    price: 2999,
    originalPrice: 3699,
    description: "Delicate eyelet lace sundress tailored with scalloped edges and a tiered A-line skirt.",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Pure White", "Butter Yellow"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.7,
    reviews: 94,
    stock: 12,
    isNew: false,
    isFeatured: false
  },
  {
    id: 47,
    name: "High-Neck Lace Evening Midi",
    category: "Dresses",
    price: 3999,
    originalPrice: 4899,
    description: "Intricate floral lace midi dress featuring a sophisticated Victorian high collar.",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black", "Nude/White"],
    sizes: ["S", "M", "L"],
    rating: 4.8,
    reviews: 70,
    stock: 8,
    isNew: true,
    isFeatured: true
  },
  {
    id: 48,
    name: "Casual Ribbed Tank Dress",
    category: "Dresses",
    price: 1599,
    originalPrice: 1999,
    description: "Minimalist tank midi dress made of high-stretch ribbed cotton for easy weekend wear.",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Heather Grey", "Black", "Beige"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.4,
    reviews: 140,
    stock: 30,
    isNew: false,
    isFeatured: false
  },
  {
    id: 49,
    name: "Metallic Jacquard Cocktail Dress",
    category: "Dresses",
    price: 4999,
    originalPrice: 5999,
    description: "Structured brocade jacquard party dress woven with gold thread in a classic fit-and-flare cut.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black/Gold", "Emerald/Gold"],
    sizes: ["S", "M", "L"],
    rating: 4.9,
    reviews: 44,
    stock: 7,
    isNew: true,
    isFeatured: true
  },
  {
    id: 50,
    name: "Sheer Organza Trench Dress",
    category: "Dresses",
    price: 4599,
    originalPrice: 5699,
    description: "Avant-garde transparent organza dress cut like a double-breasted trench coat.",
    images: [
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Nude Organza", "Black Organza"],
    sizes: ["S", "M", "L"],
    rating: 4.7,
    reviews: 32,
    stock: 6,
    isNew: true,
    isFeatured: false
  },
  {
    id: 51,
    name: "Asymmetric Satin Slip Midi",
    category: "Dresses",
    price: 2799,
    originalPrice: 3499,
    description: "Bias-cut satin slip featuring an asymmetric handkerchief skirt hemline.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Dusty Rose", "Olive", "Black"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.8,
    reviews: 86,
    stock: 15,
    isNew: false,
    isFeatured: false
  },
  {
    id: 52,
    name: "Sequined Fringe Flapper Dress",
    category: "Dresses",
    price: 4899,
    originalPrice: 5999,
    description: "1920s inspired party dress covered in tiered glass bead fringes that move with every step.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black/Gold", "Champagne"],
    sizes: ["XS", "S", "M"],
    rating: 4.9,
    reviews: 58,
    stock: 5,
    isNew: true,
    isFeatured: true
  },
  {
    id: 53,
    name: "Ruched Linen Bodycon Mini",
    category: "Dresses",
    price: 2199,
    originalPrice: 2799,
    description: "Summery linen blend mini dress with adjustable drawstring side ruching.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Terracotta", "White", "Sand"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.6,
    reviews: 69,
    stock: 18,
    isNew: false,
    isFeatured: false
  },
  {
    id: 54,
    name: "Embellished Pearl Corset Gown",
    category: "Dresses",
    price: 8999,
    originalPrice: 10999,
    description: "Couture floor-length dress lined with hand-sewn faux pearls along the transparent tulle bodice.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Ivory Pearl", "Blush Pearl"],
    sizes: ["S", "M"],
    rating: 5.0,
    reviews: 22,
    stock: 4,
    isNew: true,
    isFeatured: true
  },
  {
    id: 55,
    name: "Puffed-Sleeve Poplin Mini",
    category: "Dresses",
    price: 2399,
    originalPrice: 2999,
    description: "Playful poplin mini dress with dramatic structured puff sleeves and an open square back.",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Fuchsia", "White", "Black"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.5,
    reviews: 50,
    stock: 16,
    isNew: false,
    isFeatured: false
  },
  {
    id: 56,
    name: "Plunging Satin Maxi Gown",
    category: "Dresses",
    price: 5899,
    originalPrice: 6999,
    description: "Floor-sweeping satin gown with a deep plunge neckline and a cinched empire waistband.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Emerald Green", "Wine Red", "Black"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.9,
    reviews: 93,
    stock: 8,
    isNew: true,
    isFeatured: true
  },
  {
    id: 57,
    name: "Boho Tiered Floral Sundress",
    category: "Dresses",
    price: 2599,
    originalPrice: 3199,
    description: "Tiered rayon sundress adorned with micro-floral prints and adjustable shoulder ties.",
    images: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Yellow Floral", "Sage Floral"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 78,
    stock: 21,
    isNew: false,
    isFeatured: false
  },
  {
    id: 58,
    name: "Crushed Velvet Wrap Mini",
    category: "Dresses",
    price: 2899,
    originalPrice: 3599,
    description: "Crushed velvet party mini styled with long bishop sleeves and an overlapping V-neck skirt.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Plum", "Midnight Blue", "Black"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.7,
    reviews: 64,
    stock: 12,
    isNew: true,
    isFeatured: false
  },
  {
    id: 59,
    name: "Draped Greek Goddess Maxi",
    category: "Dresses",
    price: 6499,
    originalPrice: 7999,
    description: "Flowing Grecian silhouette gown in soft jersey with gold metal shoulder cuffs.",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Ivory", "Golden Bronze"],
    sizes: ["S", "M", "L"],
    rating: 4.9,
    reviews: 47,
    stock: 6,
    isNew: true,
    isFeatured: true
  },
  {
    id: 60,
    name: "Structured Denim Apron Dress",
    category: "Dresses",
    price: 2199,
    originalPrice: 2799,
    description: "Heavy cotton denim apron-style overall dress with adjustable shoulder straps and side pockets.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Indigo Blue", "Washed Black"],
    sizes: ["S", "M", "L"],
    rating: 4.4,
    reviews: 82,
    stock: 19,
    isNew: false,
    isFeatured: false
  },
  {
    id: 61,
    name: "Sequin Ombre Midi Bodycon",
    category: "Dresses",
    price: 4399,
    originalPrice: 5299,
    description: "Glamorous stretch bodycon midi dress featuring an ombre transition of silver to black sequins.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Silver-Black Ombre"],
    sizes: ["XS", "S", "M"],
    rating: 4.8,
    reviews: 56,
    stock: 7,
    isNew: true,
    isFeatured: true
  },
  {
    id: 62,
    name: "Classic Linen Wrap Maxi",
    category: "Dresses",
    price: 2999,
    originalPrice: 3699,
    description: "Breathable wrap maxi dress tailored from natural European flax linen.",
    images: [
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Natural Beige", "Soft Olive", "Terracotta"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 92,
    stock: 14,
    isNew: false,
    isFeatured: false
  },
  {
    id: 63,
    name: "Tulle Layered Prom Gown",
    category: "Dresses",
    price: 7999,
    originalPrice: 9499,
    description: "Fairytale prom gown layered with voluminous tulle and a glitter-infused under-skirt.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Lilac Tulle", "Powder Blue"],
    sizes: ["S", "M", "L"],
    rating: 4.9,
    reviews: 38,
    stock: 4,
    isNew: true,
    isFeatured: true
  },
  {
    id: 64,
    name: "Ribbed Cutout Midi Dress",
    category: "Dresses",
    price: 2499,
    originalPrice: 3199,
    description: "Modern casual midi dress knit from ribbed cotton with a keyhole front cutout.",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Camel", "Black", "Off-White"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.5,
    reviews: 73,
    stock: 22,
    isNew: false,
    isFeatured: false
  },
  {
    id: 65,
    name: "High-Slit Satin Corset Gown",
    category: "Dresses",
    price: 6199,
    originalPrice: 7499,
    description: "Glamorous corset-waisted satin dress featuring a daring thigh-high side leg slit.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Deep Red", "Emerald", "Black"],
    sizes: ["XS", "S", "M"],
    rating: 4.8,
    reviews: 110,
    stock: 9,
    isNew: true,
    isFeatured: true
  },
  {
    id: 66,
    name: "Crochet Beach Cover-up Dress",
    category: "Dresses",
    price: 1899,
    originalPrice: 2399,
    description: "Open-knit bohemian crochet maxi dress designed for poolside and resort layering.",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Ecru White", "Beige"],
    sizes: ["S", "M", "L"],
    rating: 4.4,
    reviews: 65,
    stock: 16,
    isNew: false,
    isFeatured: false
  },
  {
    id: 67,
    name: "Feather-Trimmed Satin Slip",
    category: "Dresses",
    price: 3999,
    originalPrice: 4799,
    description: "Satin slip midi trimmed with tonal ostrich feathers along the hem and V-neckline.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Blush Pink", "Black", "Champagne"],
    sizes: ["XS", "S", "M"],
    rating: 4.9,
    reviews: 42,
    stock: 6,
    isNew: true,
    isFeatured: true
  },
  {
    id: 68,
    name: "Structured Crepe Mini Shift",
    category: "Dresses",
    price: 2699,
    originalPrice: 3299,
    description: "Clean minimalist crepe mini dress featuring tailored front dart seams.",
    images: [
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Cobalt Blue", "White", "Black"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 83,
    stock: 17,
    isNew: false,
    isFeatured: false
  },
  {
    id: 69,
    name: "Draped One-Shoulder Jersey Midi",
    category: "Dresses",
    price: 3199,
    originalPrice: 3899,
    description: "Fluid jersey midi dress styled with an elegant asymmetrical one-shoulder draped sleeve.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Chocolate", "Plum", "Black"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.7,
    reviews: 59,
    stock: 13,
    isNew: true,
    isFeatured: false
  },
  {
    id: 70,
    name: "Lustrous Metallic Pleated Gown",
    category: "Dresses",
    price: 6899,
    originalPrice: 8299,
    description: "Floor-length metallic sunray pleated gown with a criss-cross halter neckline.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Liquid Gold", "Liquid Silver"],
    sizes: ["S", "M", "L"],
    rating: 4.9,
    reviews: 34,
    stock: 5,
    isNew: true,
    isFeatured: true
  },
  {
    id: 71,
    name: "Casual Gingham Cotton Midi",
    category: "Dresses",
    price: 1999,
    originalPrice: 2499,
    description: "Vintage-inspired gingham check cotton midi dress featuring a tie back waist.",
    images: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black/White Gingham", "Red/White Gingham"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.4,
    reviews: 71,
    stock: 24,
    isNew: false,
    isFeatured: false
  },
  {
    id: 72,
    name: "Backless Halter Satin Gown",
    category: "Dresses",
    price: 5499,
    originalPrice: 6599,
    description: "Sleek heavy satin gown with a self-tie halter neck and fully open back.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Midnight Blue", "Emerald", "Black"],
    sizes: ["XS", "S", "M"],
    rating: 4.8,
    reviews: 88,
    stock: 8,
    isNew: true,
    isFeatured: true
  },
  {
    id: 73,
    name: "Embroidered Mesh Cocktail Dress",
    category: "Dresses",
    price: 4299,
    originalPrice: 5199,
    description: "Sheer black mesh dress decorated with intricate botanical threadwork embroidery.",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black Floral", "Nude Floral"],
    sizes: ["S", "M", "L"],
    rating: 4.7,
    reviews: 49,
    stock: 10,
    isNew: false,
    isFeatured: false
  },
  {
    id: 74,
    name: "Velvet Off-Shoulder Midi",
    category: "Dresses",
    price: 3699,
    originalPrice: 4499,
    description: "Luxurious stretch velvet dress styled with a classic bardot off-shoulder foldover neckline.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Royal Burgundy", "Navy", "Black"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.8,
    reviews: 67,
    stock: 11,
    isNew: true,
    isFeatured: true
  },
  {
    id: 75,
    name: "Sleeveless Poplin Shirt Dress",
    category: "Dresses",
    price: 2199,
    originalPrice: 2799,
    description: "Crisp cotton poplin dress designed with a sharp collar line and flared skirt.",
    images: [
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Sky Blue", "White", "Khaki"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 90,
    stock: 20,
    isNew: false,
    isFeatured: false
  },
  {
    id: 76,
    name: "Sequin Bustier Party Mini",
    category: "Dresses",
    price: 3999,
    originalPrice: 4899,
    description: "Glamorous party mini featuring a structured sequin cup bustier and satin skirt.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Gold/Black", "Rose Gold"],
    sizes: ["XS", "S", "M"],
    rating: 4.9,
    reviews: 73,
    stock: 7,
    isNew: true,
    isFeatured: true
  },
  {
    id: 77,
    name: "Bohemian Tiered Maxi Dress",
    category: "Dresses",
    price: 2799,
    originalPrice: 3499,
    description: "Flowing multi-tiered maxi with elastic cuffs and a tasseled split keyhole tie.",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Rust Orange", "Deep Green"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 84,
    stock: 16,
    isNew: false,
    isFeatured: false
  },
  {
    id: 78,
    name: "Corset-Waisted Crepe Midi",
    category: "Dresses",
    price: 3599,
    originalPrice: 4399,
    description: "Tailored crepe midi dress with built-in internal boning to define the silhouette.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Crimson Red", "Black", "Ivory"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.8,
    reviews: 102,
    stock: 12,
    isNew: true,
    isFeatured: true
  },
  {
    id: 79,
    name: "Glitter Tulle Layered Maxi",
    category: "Dresses",
    price: 6999,
    originalPrice: 8499,
    description: "Sparkling tulle evening gown infused with micro-glitter across all skirt tiers.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Champagne Sparkle", "Silver Sparkle"],
    sizes: ["S", "M", "L"],
    rating: 4.9,
    reviews: 41,
    stock: 5,
    isNew: true,
    isFeatured: true
  },
  {
    id: 80,
    name: "Satin Asymmetric Halter Mini",
    category: "Dresses",
    price: 2699,
    originalPrice: 3299,
    description: "Sleek satin mini dress featuring a single diagonal neck tie and ruched side body.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Hot Pink", "Black", "Emerald"],
    sizes: ["XS", "S", "M"],
    rating: 4.7,
    reviews: 66,
    stock: 14,
    isNew: false,
    isFeatured: false
  },
  {
    id: 81,
    name: "Pleated Chiffon Cape Gown",
    category: "Dresses",
    price: 7599,
    originalPrice: 8999,
    description: "Opulent chiffon evening gown with an attached sheer pleated shoulder cape.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Powder Pink", "Plum", "Ivory"],
    sizes: ["S", "M", "L"],
    rating: 4.9,
    reviews: 33,
    stock: 4,
    isNew: true,
    isFeatured: true
  },
  {
    id: 82,
    name: "Classic Tweed Buttoned Shift",
    category: "Dresses",
    price: 3499,
    originalPrice: 4199,
    description: "Tailored bouclé tweed mini dress accented with decorative gold crest buttons.",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Cream Tweed", "Navy Tweed"],
    sizes: ["S", "M", "L"],
    rating: 4.7,
    reviews: 79,
    stock: 10,
    isNew: false,
    isFeatured: false
  },
  {
    id: 83,
    name: "Ruched Mesh Long-Sleeve Midi",
    category: "Dresses",
    price: 2899,
    originalPrice: 3599,
    description: "Form-fitting long sleeve mesh dress covered in body-sculpting ruching.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Mocha", "Black", "Dusty Blue"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.6,
    reviews: 95,
    stock: 18,
    isNew: true,
    isFeatured: false
  },
  {
    id: 84,
    name: "Tiered Organza Mini Dress",
    category: "Dresses",
    price: 3699,
    originalPrice: 4499,
    description: "Volumetric organza party dress built with crisp tiered ruffle skirts.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Lavender", "Off-White"],
    sizes: ["XS", "S", "M"],
    rating: 4.8,
    reviews: 52,
    stock: 8,
    isNew: true,
    isFeatured: true
  },
  {
    id: 85,
    name: "Satin High-Collar Maxi Gown",
    category: "Dresses",
    price: 5999,
    originalPrice: 7199,
    description: "Modest high-collar gown tailored in heavy silk satin with long cuffed sleeves.",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Champagne Gold", "Emerald", "Black"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 64,
    stock: 9,
    isNew: false,
    isFeatured: true
  },
  {
    id: 86,
    name: "Smocked Cotton Sundress",
    category: "Dresses",
    price: 1999,
    originalPrice: 2499,
    description: "Breathable cotton sundress with a elastic smocked bust and ruffled hem.",
    images: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Sky Blue", "Coral", "White"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 87,
    stock: 25,
    isNew: false,
    isFeatured: false
  },
  {
    id: 87,
    name: "Sequin Fringe Halter Mini",
    category: "Dresses",
    price: 4199,
    originalPrice: 4999,
    description: "Party mini dress featuring hanging sequin strings that shimmer with movement.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Silver", "Black"],
    sizes: ["XS", "S", "M"],
    rating: 4.8,
    reviews: 45,
    stock: 6,
    isNew: true,
    isFeatured: true
  },
  {
    id: 88,
    name: "Classic Ribbed Midi Knit",
    category: "Dresses",
    price: 2599,
    originalPrice: 3199,
    description: "Minimalist long-sleeve knit midi dress with a sleek crew neck.",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Camel", "Olive", "Black"],
    sizes: ["S", "M", "L"],
    rating: 4.6,
    reviews: 112,
    stock: 20,
    isNew: false,
    isFeatured: false
  },
  {
    id: 89,
    name: "Plunging V-Neck Satin Midi",
    category: "Dresses",
    price: 3299,
    originalPrice: 3999,
    description: "Fluid satin midi styled with a dramatic plunged front and twist waist detail.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Wine Red", "Navy", "Champagne"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.8,
    reviews: 81,
    stock: 14,
    isNew: true,
    isFeatured: true
  },
  {
    id: 90,
    name: "Embroidered Tulle Mermaid Gown",
    category: "Dresses",
    price: 8999,
    originalPrice: 10500,
    description: "Sculpted tulle mermaid gown featuring hand-sewn metallic threadwork.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Rose Gold Tulle", "Silver Tulle"],
    sizes: ["S", "M", "L"],
    rating: 5.0,
    reviews: 29,
    stock: 3,
    isNew: true,
    isFeatured: true
  },
  {
    id: 91,
    name: "Casual Poplin Tiered Midi",
    category: "Dresses",
    price: 2299,
    originalPrice: 2899,
    description: "Relaxed cotton poplin midi dress designed with three voluminous gathered tiers.",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Terracotta", "White", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 76,
    stock: 18,
    isNew: false,
    isFeatured: false
  },
  {
    id: 92,
    name: "Velvet Cutout Party Mini",
    category: "Dresses",
    price: 3199,
    originalPrice: 3899,
    description: "Plum stretch velvet mini styled with a high collar and diamond front chest cutout.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Plum", "Black"],
    sizes: ["XS", "S", "M"],
    rating: 4.7,
    reviews: 62,
    stock: 11,
    isNew: true,
    isFeatured: false
  },
  {
    id: 93,
    name: "Cowl Neck Satin Evening Gown",
    category: "Dresses",
    price: 6499,
    originalPrice: 7899,
    description: "Floor-length heavy silk-satin dress featuring a deep draped cowl bust and open back.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Emerald Green", "Black"],
    sizes: ["S", "M", "L"],
    rating: 4.9,
    reviews: 58,
    stock: 6,
    isNew: true,
    isFeatured: true
  },
  {
    id: 94,
    name: "Minimalist Linen Wrap Sundress",
    category: "Dresses",
    price: 2399,
    originalPrice: 2999,
    description: "Lightweight linen sundress featuring an overlapping wrap front and V-neckline.",
    images: [
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Oatmeal", "Soft Pink", "Sage"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 94,
    stock: 22,
    isNew: false,
    isFeatured: false
  },
  {
    id: 95,
    name: "Sequin Corset Promenade Mini",
    category: "Dresses",
    price: 4599,
    originalPrice: 5499,
    description: "Corset-waisted mini dress covered in high-sparkle iridescent sequins.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Iridescent Pink", "Iridescent Silver"],
    sizes: ["XS", "S", "M"],
    rating: 4.9,
    reviews: 50,
    stock: 7,
    isNew: true,
    isFeatured: true
  },
  {
    id: 96,
    name: "Ribbed Turtle-Neck Knit Dress",
    category: "Dresses",
    price: 2999,
    originalPrice: 3699,
    description: "Warm bodycon knit dress styled with an exaggerated folded turtleneck collar.",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608234807905-4466023792f5?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Charcoal", "Cream", "Burgundy"],
    sizes: ["S", "M", "L"],
    rating: 4.7,
    reviews: 103,
    stock: 15,
    isNew: false,
    isFeatured: false
  },
  {
    id: 97,
    name: "High-Slit Draped Satin Gown",
    category: "Dresses",
    price: 5999,
    originalPrice: 7299,
    description: "Sculptural evening gown featuring gathered side ruching and a dramatic leg slit.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Scarlet Red", "Midnight Blue"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.9,
    reviews: 82,
    stock: 8,
    isNew: true,
    isFeatured: true
  },
  {
    id: 98,
    name: "Tiered Chiffon Resort Dress",
    category: "Dresses",
    price: 2799,
    originalPrice: 3499,
    description: "Lightweight tiered chiffon maxi dress featuring an empire elastic bustline.",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Coral", "Teal Blue"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 69,
    stock: 19,
    isNew: false,
    isFeatured: false
  },
  {
    id: 99,
    name: "Feather-Cuffed Satin Mini",
    category: "Dresses",
    price: 4299,
    originalPrice: 5199,
    description: "Modern long sleeve satin shirt dress finished with plush tonal feathers on the wrist cuffs.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black", "Emerald Green"],
    sizes: ["XS", "S", "M"],
    rating: 4.8,
    reviews: 44,
    stock: 7,
    isNew: true,
    isFeatured: true
  },
  {
    id: 100,
    name: "Couture Embroidered Gala Ballgown",
    category: "Dresses",
    price: 12499,
    originalPrice: 14999,
    description: "Masterpiece royal ballgown crafted with thousands of hand-embroidered metallic beads and multi-layered organza.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Champagne Gold", "Royal Ivory"],
    sizes: ["XS", "S", "M", "L"],
    rating: 5.0,
    reviews: 18,
    stock: 2,
    isNew: true,
    isFeatured: true
  }
];

// --- APP CONTEXT ---
const AppContext = createContext();

export default function App() {
  // Navigation & Page State
  const [currentPage, setCurrentPage] = useState('home'); // home, shop, product-details, cart, wishlist, checkout, login, register, about, contact, order-success, not-found
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');

  // Cart & Wishlist state with LocalStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('velora_cart');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('velora_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('velora_user');
      return saved ? JSON.parse(saved) : null;
    } catch { return null; }
  });

  // UI Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('velora_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('velora_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (user) localStorage.setItem('velora_user', JSON.stringify(user));
    else localStorage.removeItem('velora_user');
  }, [user]);

  // Toast trigger helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart Actions
  const addToCart = (product, selectedSize, selectedColor, quantity = 1) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(
        item => item.id === product.id && item.size === selectedSize && item.color === selectedColor
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { ...product, size: selectedSize, color: selectedColor, quantity }];
    });
    showToast(`Added ${product.name} to your shopping bag.`);
    setIsCartOpen(true);
  };

  const updateCartQuantity = (index, delta) => {
    setCart(prev => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        updated.splice(index, 1);
      } else {
        updated[index].quantity = newQty;
      }
      return updated;
    });
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
    showToast("Item removed from bag.");
  };

  // Wishlist Actions
  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        showToast(`Removed ${product.name} from wishlist.`);
        return prev.filter(item => item.id !== product.id);
      } else {
        showToast(`Added ${product.name} to wishlist.`);
        return [...prev, product];
      }
    });
  };

  const navigateTo = (page, param = null) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsCartOpen(false);
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
    
    if (page === 'category' && param) {
      setSelectedCategoryFilter(param);
      setCurrentPage('shop');
      return;
    }
    if (page === 'product-details' && param) {
      setSelectedProduct(param);
    }
    setCurrentPage(page);
  };

  // Format currency helper
  const formatINR = (amount) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <AppContext.Provider value={{
      cart, addToCart, updateCartQuantity, removeFromCart,
      wishlist, toggleWishlist, user, setUser,
      navigateTo, formatINR, showToast,
      selectedCategoryFilter, setSelectedCategoryFilter,
      selectedProduct
    }}>
      <div className="velora-app">
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#171717] text-[#F8F5F0] px-6 py-3 rounded shadow-2xl flex items-center space-x-3 text-sm tracking-wide fade-in border border-[#D8C8B8]/30">
            <Check size={16} className="text-[#D8C8B8]" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Header */}
        <Header 
          setIsCartOpen={setIsCartOpen} 
          setIsSearchOpen={setIsSearchOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
          navigateTo={navigateTo}
        />

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <MobileMenu 
            setIsMobileMenuOpen={setIsMobileMenuOpen} 
            navigateTo={navigateTo} 
          />
        )}

        {/* Cart Drawer */}
        {isCartOpen && <CartDrawer setIsCartOpen={setIsCartOpen} navigateTo={navigateTo} />}

        {/* Search Modal */}
        {isSearchOpen && <SearchModal setIsSearchOpen={setIsSearchOpen} navigateTo={navigateTo} />}

        {/* Main Content Pages Router */}
        <main className="min-h-screen">
          {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
          {currentPage === 'shop' && <ShopPage />}
          {currentPage === 'new-arrivals' && <ShopPage initialFilter="New" />}
          {currentPage === 'product-details' && <ProductDetailsPage />}
          {currentPage === 'wishlist' && <WishlistPage />}
          {currentPage === 'cart' && <CartPage navigateTo={navigateTo} />}
          {currentPage === 'checkout' && <CheckoutPage navigateTo={navigateTo} />}
          {currentPage === 'login' && <LoginPage navigateTo={navigateTo} />}
          {currentPage === 'register' && <RegisterPage navigateTo={navigateTo} />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'contact' && <ContactPage />}
          {currentPage === 'order-success' && <OrderSuccessPage navigateTo={navigateTo} />}
          {currentPage === 'not-found' && <NotFoundPage navigateTo={navigateTo} />}
        </main>

        {/* Footer */}
        <Footer navigateTo={navigateTo} />
      </div>
    </AppContext.Provider>
  );
}

// ==========================================
// HEADER COMPONENT
// ==========================================
function Header({ setIsCartOpen, setIsSearchOpen, setIsMobileMenuOpen, navigateTo }) {
  const { cart, wishlist, user } = useContext(AppContext);
  const [shopDropdown, setShopDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#F8F5F0]/95 backdrop-blur-md shadow-sm py-4' : 'bg-[#F8F5F0] py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)} 
          className="md:hidden text-[#171717] p-1"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        {/* Logo */}
        <div 
          onClick={() => navigateTo('home')} 
          className="cursor-pointer tracking-[0.25em] font-serif text-2xl font-bold uppercase text-[#171717]"
        >
          VELORA
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm tracking-widest uppercase font-medium">
          <button onClick={() => navigateTo('home')} className="hover:text-[#8B7465] transition">Home</button>
          
          <div 
            className="relative group py-2"
            onMouseEnter={() => setShopDropdown(true)}
            onMouseLeave={() => setShopDropdown(false)}
          >
            <button onClick={() => navigateTo('shop')} className="hover:text-[#8B7465] transition flex items-center">
              Shop
            </button>
            {shopDropdown && (
              <div className="absolute top-full left-0 w-48 bg-[#FFFFFF] shadow-xl border border-[#EAEAEA] py-2 flex flex-col space-y-2 z-50 text-xs tracking-wider">
                <button onClick={() => navigateTo('category', 'All')} className="text-left px-4 py-2 hover:bg-[#F8F5F0] transition">Shop All</button>
                <button onClick={() => navigateTo('category', 'Dresses')} className="text-left px-4 py-2 hover:bg-[#F8F5F0] transition">Dresses</button>
                <button onClick={() => navigateTo('category', 'Tops')} className="text-left px-4 py-2 hover:bg-[#F8F5F0] transition">Tops</button>
                <button onClick={() => navigateTo('category', 'Bottoms')} className="text-left px-4 py-2 hover:bg-[#F8F5F0] transition">Bottoms</button>
                <button onClick={() => navigateTo('category', 'Casual Wear')} className="text-left px-4 py-2 hover:bg-[#F8F5F0] transition">Casual Wear</button>
                <button onClick={() => navigateTo('category', 'Party Wear')} className="text-left px-4 py-2 hover:bg-[#F8F5F0] transition">Party Wear</button>
                <button onClick={() => navigateTo('category', 'Accessories')} className="text-left px-4 py-2 hover:bg-[#F8F5F0] transition">Accessories</button>
              </div>
            )}
          </div>

          <button onClick={() => navigateTo('new-arrivals')} className="hover:text-[#8B7465] transition">New Arrivals</button>
          <button onClick={() => navigateTo('about')} className="hover:text-[#8B7465] transition">About</button>
          <button onClick={() => navigateTo('contact')} className="hover:text-[#8B7465] transition">Contact</button>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-5 text-[#171717]">
          <button onClick={() => setIsSearchOpen(true)} className="hover:text-[#8B7465] transition" aria-label="Search">
            <Search size={20} />
          </button>
          
          <button onClick={() => navigateTo(user ? 'wishlist' : 'login')} className="relative hover:text-[#8B7465] transition hidden sm:block" aria-label="Wishlist">
            <Heart size={20} />
            {wishlist.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#8B7465] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
                {wishlist.length}
              </span>
            )}
          </button>

          <button onClick={() => navigateTo(user ? 'account' : 'login')} className="hover:text-[#8B7465] transition hidden sm:block" aria-label="Account">
            <User size={20} />
          </button>

          <button onClick={() => setIsCartOpen(true)} className="relative hover:text-[#8B7465] transition" aria-label="Shopping Bag">
            <ShoppingBag size={20} />
            {totalCartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#171717] text-[#F8F5F0] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-bold">
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

// ==========================================
// MOBILE MENU COMPONENT
// ==========================================
function MobileMenu({ setIsMobileMenuOpen, navigateTo }) {
  return (
    <div className="fixed inset-0 z-50 bg-[#171717]/50 backdrop-blur-sm flex justify-start">
      <div className="bg-[#F8F5F0] w-4/5 max-w-sm h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#D8C8B8]">
            <span className="font-serif text-xl tracking-[0.2em] font-bold">VELORA</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-1">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 pt-6 text-sm tracking-widest uppercase">
            <button onClick={() => navigateTo('home')} className="text-left py-2 border-b border-[#EAEAEA]">Home</button>
            <button onClick={() => navigateTo('shop')} className="text-left py-2 border-b border-[#EAEAEA]">Shop All</button>
            <button onClick={() => navigateTo('category', 'Dresses')} className="text-left py-2 border-b border-[#EAEAEA] pl-4 text-xs text-[#8B7465]">→ Dresses</button>
            <button onClick={() => navigateTo('category', 'Tops')} className="text-left py-2 border-b border-[#EAEAEA] pl-4 text-xs text-[#8B7465]">→ Tops</button>
            <button onClick={() => navigateTo('category', 'Bottoms')} className="text-left py-2 border-b border-[#EAEAEA] pl-4 text-xs text-[#8B7465]">→ Bottoms</button>
            <button onClick={() => navigateTo('category', 'Party Wear')} className="text-left py-2 border-b border-[#EAEAEA] pl-4 text-xs text-[#8B7465]">→ Party Wear</button>
            <button onClick={() => navigateTo('new-arrivals')} className="text-left py-2 border-b border-[#EAEAEA]">New Arrivals</button>
            <button onClick={() => navigateTo('wishlist')} className="text-left py-2 border-b border-[#EAEAEA]">Wishlist</button>
            <button onClick={() => navigateTo('about')} className="text-left py-2 border-b border-[#EAEAEA]">About Velora</button>
            <button onClick={() => navigateTo('contact')} className="text-left py-2 border-b border-[#EAEAEA]">Contact</button>
          </nav>
        </div>
        <div className="pt-6 border-t border-[#D8C8B8] flex justify-between items-center text-xs tracking-wider">
          <button onClick={() => navigateTo('login')} className="uppercase font-semibold">Sign In / Register</button>
          <span className="text-[#8B7465]">© 2026 Velora</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SEARCH MODAL COMPONENT
// ==========================================
function SearchModal({ setIsSearchOpen, navigateTo }) {
  const [query, setQuery] = useState('');
  const { formatINR } = useContext(AppContext);

  const results = query.trim() === '' ? [] : PRODUCTS_DATA.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) || 
    item.category.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-[#171717]/70 backdrop-blur-md flex flex-col pt-20 px-4">
      <div className="max-w-3xl w-full mx-auto bg-[#FFFFFF] rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        <div className="p-4 border-b border-[#EAEAEA] flex items-center justify-between">
          <div className="flex items-center space-x-3 w-full">
            <Search size={20} className="text-[#8B7465]" />
            <input 
              type="text" 
              placeholder="Search dresses, tops, accessories..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="w-full text-sm outline-none bg-transparent font-sans text-[#171717]"
            />
          </div>
          <button onClick={() => setIsSearchOpen(false)} className="p-1">
            <X size={20} />
          </button>
        </div>
        
        <div className="overflow-y-auto p-6 space-y-4">
          {query.trim() !== '' && results.length === 0 && (
            <p className="text-center text-gray-500 py-8 text-sm">No luxury items found matching "{query}".</p>
          )}

          {query.trim() === '' && (
            <div className="text-center py-10 text-gray-400 text-xs tracking-widest uppercase">
              Type to search our editorial collection
            </div>
          )}

          {results.map(prod => (
            <div 
              key={prod.id} 
              onClick={() => navigateTo('product-details', prod)}
              className="flex items-center justify-between p-3 hover:bg-[#F8F5F0] rounded cursor-pointer transition border-b border-[#EAEAEA]"
            >
              <div className="flex items-center space-x-4">
                <img src={prod.images[0]} alt={prod.name} className="w-12 h-16 object-cover rounded" />
                <div>
                  <h4 className="font-serif text-sm font-semibold">{prod.name}</h4>
                  <p className="text-xs text-[#8B7465]">{prod.category}</p>
                </div>
              </div>
              <span className="text-sm font-medium">{formatINR(prod.price)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// CART DRAWER COMPONENT
// ==========================================
function CartDrawer({ setIsCartOpen, navigateTo }) {
  const { cart, updateCartQuantity, removeFromCart, formatINR } = useContext(AppContext);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 2999 ? 0 : 250;
  const total = subtotal + (cart.length > 0 ? shipping : 0);

  return (
    <div className="fixed inset-0 z-50 bg-[#171717]/60 backdrop-blur-sm flex justify-end">
      <div className="bg-[#FFFFFF] w-full max-w-md h-full shadow-2xl p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#EAEAEA]">
            <h3 className="font-serif text-lg font-bold tracking-wide">Your Shopping Bag ({cart.reduce((a,c)=>a+c.quantity,0)})</h3>
            <button onClick={() => setIsCartOpen(false)} className="p-1">
              <X size={20} />
            </button>
          </div>

          <div className="overflow-y-auto max-h-[55vh] py-4 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 text-gray-400 text-sm">
                Your shopping bag is empty.
              </div>
            ) : (
              cart.map((item, idx) => (
                <div key={idx} className="flex space-x-4 pb-4 border-b border-[#EAEAEA]">
                  <img src={item.images[0]} alt={item.name} className="w-20 h-24 object-cover rounded" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="font-serif text-sm font-medium">{item.name}</h4>
                        <button onClick={() => removeFromCart(idx)} className="text-gray-400 hover:text-red-600">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Size: {item.size} | Color: {item.color}</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border border-[#EAEAEA] rounded">
                        <button onClick={() => updateCartQuantity(idx, -1)} className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-100"><Minus size={12} /></button>
                        <span className="px-2 text-xs font-medium">{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(idx, 1)} className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-100"><Plus size={12} /></button>
                      </div>
                      <span className="text-sm font-semibold">{formatINR(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {cart.length > 0 && (
          <div className="pt-4 border-t border-[#EAEAEA] space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">{formatINR(subtotal)}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Shipping (Free over ₹2,999)</span>
              <span>{shipping === 0 ? 'FREE' : formatINR(shipping)}</span>
            </div>
            <div className="flex justify-between text-base font-bold pt-2 border-t border-[#EAEAEA]">
              <span>Estimated Total</span>
              <span>{formatINR(total)}</span>
            </div>
            <button 
              onClick={() => { setIsCartOpen(false); navigateTo('checkout'); }}
              className="w-full bg-[#171717] text-[#F8F5F0] py-3 text-xs tracking-[0.2em] uppercase font-semibold rounded hover:bg-[#8B7465] transition"
            >
              Proceed to Checkout
            </button>
            <button 
              onClick={() => { setIsCartOpen(false); navigateTo('cart'); }}
              className="w-full bg-[#F8F5F0] text-[#171717] border border-[#D8C8B8] py-2.5 text-xs tracking-[0.2em] uppercase font-semibold rounded hover:bg-[#EAEAEA] transition"
            >
              View Full Bag
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// HOME PAGE COMPONENT
// ==========================================
function HomePage({ navigateTo }) {
  const { formatINR, toggleWishlist, wishlist } = useContext(AppContext);

  return (
    <div className="bg-[#F8F5F0] text-[#171717]">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[550px] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=85" 
            alt="Velora Editorial Hero" 
            className="w-full h-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-[#FFFFFF] space-y-6 fade-in">
          <span className="text-xs uppercase tracking-[0.3em] bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full">
            VELORA COLLECTION
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
            Style That Speaks. Elegance That Lasts.
          </h1>
          <p className="text-sm sm:text-base font-sans font-light tracking-wide max-w-lg mx-auto text-gray-200">
            Discover timeless essentials and modern silhouettes designed for every moment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <button 
              onClick={() => navigateTo('shop')}
              className="w-full sm:w-auto bg-[#FFFFFF] text-[#171717] px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold rounded hover:bg-[#F8F5F0] transition shadow-lg"
            >
              Shop Collection
            </button>
            <button 
              onClick={() => navigateTo('new-arrivals')}
              className="w-full sm:w-auto border border-[#FFFFFF] text-[#FFFFFF] px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold rounded hover:bg-white/10 transition backdrop-blur-sm"
            >
              Explore New Arrivals
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold tracking-tight">Curated Categories</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8B7465] mt-2">Explore our signature lines</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Dresses", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80" },
            { name: "Tops", image: "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=600&q=80" },
            { name: "Bottoms", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80" },
            { name: "Casual Wear", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80" },
            { name: "Party Wear", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80" },
            { name: "Accessories", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80" }
          ].map((cat, idx) => (
            <div 
              key={idx} 
              onClick={() => navigateTo('category', cat.name)}
              className="group relative h-80 rounded overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="font-serif text-xl font-medium tracking-wide">{cat.name}</h3>
                <span className="text-xs uppercase tracking-[0.2em] mt-1 text-[#D8C8B8] flex items-center group-hover:translate-x-1 transition">
                  Explore <ArrowRight size={14} className="ml-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals Preview */}
      <section className="bg-[#FFFFFF] py-20 border-t border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight">New Arrivals</h2>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8B7465] mt-2">Fresh additions to the wardrobe</p>
            </div>
            <button 
              onClick={() => navigateTo('new-arrivals')}
              className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-[#171717] pb-1 hover:text-[#8B7465] hover:border-[#8B7465] transition"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {PRODUCTS_DATA.filter(p => p.isNew).slice(0, 4).map(prod => {
              const isWishlisted = wishlist.some(w => w.id === prod.id);
              return (
                <div key={prod.id} className="group relative bg-[#F8F5F0] rounded overflow-hidden flex flex-col">
                  <div className="relative h-80 overflow-hidden cursor-pointer" onClick={() => navigateTo('product-details', prod)}>
                    <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleWishlist(prod); }}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition ${isWishlisted ? 'bg-[#171717] text-white' : 'bg-white/80 text-[#171717] hover:bg-white'}`}
                      aria-label="Wishlist"
                    >
                      <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
                    </button>
                    {prod.isNew && (
                      <span className="absolute top-3 left-3 bg-[#171717] text-white text-[10px] uppercase tracking-widest px-2.5 py-1 rounded">
                        New
                      </span>
                    )}
                  </div>
                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      <p className="text-[11px] text-[#8B7465] uppercase tracking-wider">{prod.category}</p>
                      <h3 onClick={() => navigateTo('product-details', prod)} className="font-serif text-base font-semibold mt-1 cursor-pointer hover:text-[#8B7465]">
                        {prod.name}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm font-bold">{formatINR(prod.price)}</span>
                      <button 
                        onClick={() => navigateTo('product-details', prod)}
                        className="text-xs uppercase tracking-widest font-semibold underline hover:text-[#8B7465]"
                      >
                        Quick View
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="relative py-24 bg-[#171717] text-[#FFFFFF] text-center px-4 overflow-hidden my-16">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=2000&q=80" alt="Banner" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D8C8B8]">SEASONAL EDIT</span>
          <h2 className="font-serif text-4xl font-bold tracking-wide">Your New Season Wardrobe</h2>
          <p className="text-sm text-gray-300 font-light">Discover effortless fashion for every occasion, tailored with absolute precision.</p>
          <button 
            onClick={() => navigateTo('shop')}
            className="bg-[#FFFFFF] text-[#171717] px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold rounded hover:bg-[#F8F5F0] transition"
          >
            Explore Collection
          </button>
        </div>
      </section>

      {/* Fashion Editorial Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="h-[500px] overflow-hidden rounded shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80" 
              alt="Editorial" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8B7465]">THE VELORA PHILOSOPHY</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">Crafted for the Modern Woman</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We believe fashion should be enduring rather than ephemeral. Every piece in our collection is thoughtfully sourced and meticulously tailored to offer a harmonious blend of feminine grace and contemporary minimalism.
            </p>
            <button 
              onClick={() => navigateTo('about')}
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold border-b border-[#171717] pb-1 hover:text-[#8B7465] hover:border-[#8B7465] transition"
            >
              Read Our Story <ArrowRight size={14} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

// ==========================================
// SHOP PAGE COMPONENT
// ==========================================
function ShopPage({ initialFilter = 'All' }) {
  const { formatINR, toggleWishlist, wishlist, navigateTo, selectedCategoryFilter, setSelectedCategoryFilter } = useContext(AppContext);
  
  const [category, setCategory] = useState(selectedCategoryFilter || initialFilter);
  const [sortBy, setSortBy] = useState('featured');
  const [maxPrice, setMaxPrice] = useState(20000);
  const [searchFilter, setSearchFilter] = useState('');

  // Filtering logic
  let filtered = PRODUCTS_DATA.filter(p => {
    if (category !== 'All' && category !== 'New' && p.category !== category) return false;
    if (category === 'New' && !p.isNew) return false;
    if (p.price > maxPrice) return false;
    if (searchFilter && !p.name.toLowerCase().includes(searchFilter.toLowerCase())) return false;
    return true;
  });

  // Sorting logic
  if (sortBy === 'price-low') filtered.sort((a,b) => a.price - b.price);
  else if (sortBy === 'price-high') filtered.sort((a,b) => b.price - a.price);
  else if (sortBy === 'newest') filtered.sort((a,b) => b.isNew ? -1 : 1);
  else if (sortBy === 'popularity') filtered.sort((a,b) => b.reviews - a.reviews);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 border-b border-[#EAEAEA] pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight">
            {category === 'New' ? 'New Arrivals' : category === 'All' ? 'Complete Collection' : `${category}`}
          </h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Showing {filtered.length} curated styles</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
          <input 
            type="text" 
            placeholder="Filter within shop..." 
            value={searchFilter} 
            onChange={(e) => setSearchFilter(e.target.value)}
            className="text-xs px-3 py-2 border border-[#D8C8B8] rounded bg-[#FFFFFF] outline-none w-full sm:w-48"
          />
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs px-3 py-2 border border-[#D8C8B8] rounded bg-[#FFFFFF] outline-none cursor-pointer"
          >
            <option value="featured">Sort by: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
            <option value="popularity">Most Popular</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="space-y-6 lg:border-r lg:border-[#EAEAEA] lg:pr-6">
          <div>
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider mb-4">Categories</h3>
            <div className="flex flex-col space-y-2 text-xs tracking-wide">
              {['All', 'Dresses', 'Tops', 'Bottoms', 'Casual Wear', 'Party Wear', 'Accessories', 'New'].map(cat => (
                <button 
                  key={cat} 
                  onClick={() => { setCategory(cat); setSelectedCategoryFilter(cat); }}
                  className={`text-left py-1.5 transition ${category === cat ? 'font-bold text-[#171717] pl-2 border-l-2 border-[#171717]' : 'text-gray-600 hover:text-[#171717]'}`}
                >
                  {cat === 'New' ? 'New Arrivals' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#EAEAEA]">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider mb-4">Max Price: {formatINR(maxPrice)}</h3>
            <input 
              type="range" 
              min="1000" 
              max="6000" 
              step="200" 
              value={maxPrice} 
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#171717]"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400 text-sm">
              No products found matching your filter criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filtered.map(prod => {
                const isWishlisted = wishlist.some(w => w.id === prod.id);
                return (
                  <div key={prod.id} className="group relative bg-[#FFFFFF] rounded border border-[#EAEAEA] overflow-hidden flex flex-col">
                    <div className="relative h-80 overflow-hidden cursor-pointer" onClick={() => navigateTo('product-details', prod)}>
                      <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleWishlist(prod); }}
                        className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition ${isWishlisted ? 'bg-[#171717] text-white' : 'bg-white/80 text-[#171717] hover:bg-white'}`}
                        aria-label="Wishlist"
                      >
                        <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
                      </button>
                      {prod.isNew && (
                        <span className="absolute top-3 left-3 bg-[#171717] text-white text-[10px] uppercase tracking-widest px-2.5 py-1 rounded">
                          New
                        </span>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-1 justify-between">
                      <div>
                        <p className="text-[11px] text-[#8B7465] uppercase tracking-wider">{prod.category}</p>
                        <h3 onClick={() => navigateTo('product-details', prod)} className="font-serif text-base font-semibold mt-1 cursor-pointer hover:text-[#8B7465]">
                          {prod.name}
                        </h3>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#EAEAEA]">
                        <span className="text-sm font-bold">{formatINR(prod.price)}</span>
                        <button 
                          onClick={() => navigateTo('product-details', prod)}
                          className="text-xs uppercase tracking-widest font-semibold underline hover:text-[#8B7465]"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// PRODUCT DETAILS PAGE COMPONENT
// ==========================================
function ProductDetailsPage() {
  const { selectedProduct, addToCart, toggleWishlist, wishlist, formatINR, navigateTo } = useContext(AppContext);
  
  if (!selectedProduct) {
    return (
      <div className="text-center py-24">
        <p className="text-sm text-gray-500 mb-4">No product selected.</p>
        <button onClick={() => navigateTo('shop')} className="bg-[#171717] text-white px-6 py-2 text-xs uppercase tracking-widest rounded">Return to Shop</button>
      </div>
    );
  }

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(selectedProduct.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(selectedProduct.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const isWishlisted = wishlist.some(w => w.id === selectedProduct.id);
  const relatedProducts = PRODUCTS_DATA.filter(p => p.category === selectedProduct.category && p.id !== selectedProduct.id).slice(0, 3);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    addToCart(selectedProduct, selectedSize, selectedColor, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="h-[550px] overflow-hidden rounded bg-[#FFFFFF] border border-[#EAEAEA]">
            <img src={selectedProduct.images[activeImage]} alt={selectedProduct.name} className="w-full h-full object-cover" />
          </div>
          {selectedProduct.images.length > 1 && (
            <div className="flex space-x-4">
              {selectedProduct.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)} 
                  className={`w-20 h-24 rounded overflow-hidden border-2 transition ${activeImage === idx ? 'border-[#171717]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#8B7465]">{selectedProduct.category}</span>
            <h1 className="font-serif text-3xl font-bold mt-1">{selectedProduct.name}</h1>
            <div className="flex items-center space-x-3 mt-3">
              <span className="text-xl font-bold">{formatINR(selectedProduct.price)}</span>
              {selectedProduct.originalPrice && (
                <span className="text-sm text-gray-400 line-through">{formatINR(selectedProduct.originalPrice)}</span>
              )}
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">{selectedProduct.description}</p>

          {/* Color Selection */}
          <div>
            <label className="block text-xs uppercase tracking-widest font-semibold text-gray-700 mb-2">
              Color: <span className="font-normal text-[#171717]">{selectedColor}</span>
            </label>
            <div className="flex space-x-3">
              {selectedProduct.colors.map(col => (
                <button 
                  key={col} 
                  onClick={() => setSelectedColor(col)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider rounded border transition ${selectedColor === col ? 'border-[#171717] bg-[#171717] text-white' : 'border-[#D8C8B8] bg-white text-[#171717] hover:border-[#171717]'}`}
                >
                  {col}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs uppercase tracking-widest font-semibold text-gray-700">
                Size: <span className="font-normal text-[#171717]">{selectedSize}</span>
              </label>
              <span className="text-[11px] text-[#8B7465] underline cursor-pointer">Size Guide</span>
            </div>
            <div className="flex space-x-3">
              {selectedProduct.sizes.map(sz => (
                <button 
                  key={sz} 
                  onClick={() => setSelectedSize(sz)}
                  className={`w-12 h-12 text-xs font-semibold rounded border transition flex items-center justify-center ${selectedSize === sz ? 'border-[#171717] bg-[#171717] text-white' : 'border-[#D8C8B8] bg-white text-[#171717] hover:border-[#171717]'}`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center space-x-4 pt-2">
            <div className="flex items-center border border-[#D8C8B8] rounded bg-white">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"><Minus size={14} /></button>
              <span className="px-4 text-sm font-semibold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"><Plus size={14} /></button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-[#171717] text-[#F8F5F0] py-3 text-xs tracking-[0.2em] uppercase font-semibold rounded hover:bg-[#8B7465] transition shadow-md"
            >
              Add to Shopping Bag
            </button>
            <button 
              onClick={() => toggleWishlist(selectedProduct)}
              className={`p-3 rounded border border-[#D8C8B8] transition ${isWishlisted ? 'bg-[#171717] text-white' : 'bg-white text-[#171717] hover:border-[#171717]'}`}
              aria-label="Wishlist"
            >
              <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Accordion / Tabs for details */}
          <div className="border-t border-[#EAEAEA] pt-6 space-y-4">
            <div className="flex space-x-6 border-b border-[#EAEAEA] pb-3 text-xs uppercase tracking-widest font-semibold">
              <button onClick={() => setActiveTab('description')} className={`pb-1 border-b-2 transition ${activeTab === 'description' ? 'border-[#171717]' : 'border-transparent text-gray-400'}`}>Details</button>
              <button onClick={() => setActiveTab('shipping')} className={`pb-1 border-b-2 transition ${activeTab === 'shipping' ? 'border-[#171717]' : 'border-transparent text-gray-400'}`}>Shipping & Returns</button>
            </div>
            <div className="text-xs text-gray-600 leading-relaxed">
              {activeTab === 'description' && (
                <ul className="list-disc pl-4 space-y-2">
                  <li>Premium designer blend fabric with soft interior lining.</li>
                  <li>Dry clean recommended or gentle hand wash cold.</li>
                  <li>Meticulously tailored for a contemporary silhouette.</li>
                </ul>
              )}
              {activeTab === 'shipping' && (
                <p>Complimentary standard shipping on all orders over ₹2,999. Express delivery available at checkout. Easy 14-day returns across India.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-24 border-t border-[#EAEAEA] pt-16">
          <h3 className="font-serif text-2xl font-bold mb-8 text-center">You May Also Like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map(prod => (
              <div 
                key={prod.id} 
                onClick={() => navigateTo('product-details', prod)}
                className="group cursor-pointer bg-white rounded border border-[#EAEAEA] overflow-hidden"
              >
                <div className="h-72 overflow-hidden">
                  <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-base font-semibold">{prod.name}</h4>
                  <p className="text-sm font-bold mt-2">{formatINR(prod.price)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// WISHLIST PAGE COMPONENT
// ==========================================
function WishlistPage() {
  const { wishlist, toggleWishlist, navigateTo, formatINR } = useContext(AppContext);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-3xl font-bold tracking-tight mb-2">My Wishlist</h1>
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-8">{wishlist.length} saved items</p>

      {wishlist.length === 0 ? (
        <div className="text-center py-24 bg-white rounded border border-[#EAEAEA]">
          <p className="text-sm text-gray-500 mb-6">Your wishlist is currently empty.</p>
          <button 
            onClick={() => navigateTo('shop')}
            className="bg-[#171717] text-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold rounded"
          >
            Explore Collection
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {wishlist.map(prod => (
            <div key={prod.id} className="group relative bg-[#FFFFFF] rounded border border-[#EAEAEA] overflow-hidden flex flex-col">
              <div className="relative h-80 overflow-hidden cursor-pointer" onClick={() => navigateTo('product-details', prod)}>
                <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleWishlist(prod); }}
                  className="absolute top-3 right-3 p-2 rounded-full bg-[#171717] text-white"
                  aria-label="Remove"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-[11px] text-[#8B7465] uppercase tracking-wider">{prod.category}</p>
                  <h3 onClick={() => navigateTo('product-details', prod)} className="font-serif text-base font-semibold mt-1 cursor-pointer hover:text-[#8B7465]">
                    {prod.name}
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#EAEAEA]">
                  <span className="text-sm font-bold">{formatINR(prod.price)}</span>
                  <button 
                    onClick={() => navigateTo('product-details', prod)}
                    className="text-xs uppercase tracking-widest font-semibold underline hover:text-[#8B7465]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ==========================================
// CART PAGE COMPONENT
// ==========================================
function CartPage({ navigateTo }) {
  const { cart, updateCartQuantity, removeFromCart, formatINR } = useContext(AppContext);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 2999 ? 0 : 250;
  const total = subtotal + (cart.length > 0 ? shipping : 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="font-serif text-3xl font-bold mb-4">Your Shopping Bag is Empty</h1>
        <p className="text-sm text-gray-500 mb-8">Discover our exquisite seasonal collections and add items to your bag.</p>
        <button 
          onClick={() => navigateTo('shop')}
          className="bg-[#171717] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold rounded"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-3xl font-bold tracking-tight mb-8">Shopping Bag</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item, idx) => (
            <div key={idx} className="flex space-x-6 p-6 bg-white rounded border border-[#EAEAEA] items-center">
              <img src={item.images[0]} alt={item.name} className="w-24 h-32 object-cover rounded" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-serif text-lg font-semibold">{item.name}</h3>
                  <button onClick={() => removeFromCart(idx)} className="text-gray-400 hover:text-red-600">
                    <Trash2 size={18} />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Size: {item.size} | Color: {item.color}</p>
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center border border-[#EAEAEA] rounded">
                    <button onClick={() => updateCartQuantity(idx, -1)} className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100"><Minus size={14} /></button>
                    <span className="px-3 text-sm font-semibold">{item.quantity}</span>
                    <button onClick={() => updateCartQuantity(idx, 1)} className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100"><Plus size={14} /></button>
                  </div>
                  <span className="text-base font-bold">{formatINR(item.price * item.quantity)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded border border-[#EAEAEA] h-fit space-y-4">
          <h3 className="font-serif text-lg font-bold pb-3 border-b border-[#EAEAEA]">Order Summary</h3>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">{formatINR(subtotal)}</span>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'FREE' : formatINR(shipping)}</span>
          </div>
          <div className="flex justify-between text-base font-bold pt-3 border-t border-[#EAEAEA]">
            <span>Total</span>
            <span>{formatINR(total)}</span>
          </div>
          <button 
            onClick={() => navigateTo('checkout')}
            className="w-full bg-[#171717] text-white py-3.5 text-xs uppercase tracking-[0.2em] font-semibold rounded hover:bg-[#8B7465] transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// CHECKOUT PAGE COMPONENT
// ==========================================
function CheckoutPage({ navigateTo }) {
  const { cart, formatINR } = useContext(AppContext);
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '',
    house: '', street: '', city: '', state: '', postal: '', country: 'India',
    paymentMethod: 'UPI'
  });

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 2999 ? 0 : 250;
  const total = subtotal + (cart.length > 0 ? shipping : 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.street || !formData.city) {
      alert("Please fill in all mandatory customer and address fields.");
      return;
    }
    navigateTo('order-success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-3xl font-bold tracking-tight mb-8">Secure Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {/* Customer Information */}
          <div className="bg-white p-6 rounded border border-[#EAEAEA] space-y-4">
            <h3 className="font-serif text-lg font-semibold border-b pb-2">1. Customer Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" placeholder="Full Name" required 
                value={formData.fullName} onChange={e=>setFormData({...formData, fullName: e.target.value})}
                className="text-xs p-3 border border-[#D8C8B8] rounded outline-none"
              />
              <input 
                type="email" placeholder="Email Address" required 
                value={formData.email} onChange={e=>setFormData({...formData, email: e.target.value})}
                className="text-xs p-3 border border-[#D8C8B8] rounded outline-none"
              />
            </div>
            <input 
              type="tel" placeholder="Phone Number" required 
              value={formData.phone} onChange={e=>setFormData({...formData, phone: e.target.value})}
              className="text-xs p-3 border border-[#D8C8B8] rounded outline-none w-full"
            />
          </div>

          {/* Shipping Address */}
          <div className="bg-white p-6 rounded border border-[#EAEAEA] space-y-4">
            <h3 className="font-serif text-lg font-semibold border-b pb-2">2. Shipping Address</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" placeholder="House / Apartment No." required 
                value={formData.house} onChange={e=>setFormData({...formData, house: e.target.value})}
                className="text-xs p-3 border border-[#D8C8B8] rounded outline-none"
              />
              <input 
                type="text" placeholder="Street Address" required 
                value={formData.street} onChange={e=>setFormData({...formData, street: e.target.value})}
                className="text-xs p-3 border border-[#D8C8B8] rounded outline-none"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <input 
                type="text" placeholder="City" required 
                value={formData.city} onChange={e=>setFormData({...formData, city: e.target.value})}
                className="text-xs p-3 border border-[#D8C8B8] rounded outline-none"
              />
              <input 
                type="text" placeholder="State" required 
                value={formData.state} onChange={e=>setFormData({...formData, state: e.target.value})}
                className="text-xs p-3 border border-[#D8C8B8] rounded outline-none"
              />
              <input 
                type="text" placeholder="Postal Code" required 
                value={formData.postal} onChange={e=>setFormData({...formData, postal: e.target.value})}
                className="text-xs p-3 border border-[#D8C8B8] rounded outline-none"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white p-6 rounded border border-[#EAEAEA] space-y-4">
            <h3 className="font-serif text-lg font-semibold border-b pb-2">3. Payment Method</h3>
            <div className="space-y-3 text-xs">
              {['UPI (Google Pay / PhonePe / Paytm)', 'Card Payment (Credit / Debit)', 'Cash on Delivery (COD)'].map((method) => (
                <label key={method} className="flex items-center space-x-3 p-3 border rounded cursor-pointer hover:bg-gray-50">
                  <input 
                    type="radio" name="payment" defaultChecked={method.includes('UPI')} 
                    onChange={()=>setFormData({...formData, paymentMethod: method})}
                  />
                  <span className="font-medium">{method}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="bg-white p-6 rounded border border-[#EAEAEA] h-fit space-y-4">
          <h3 className="font-serif text-lg font-bold pb-3 border-b border-[#EAEAEA]">Order Summary</h3>
          <div className="max-h-60 overflow-y-auto space-y-3">
            {cart.map((item, idx) => (
              <div key={idx} className="flex justify-between text-xs">
                <span className="text-gray-600">{item.name} ({item.size}) x {item.quantity}</span>
                <span className="font-semibold">{formatINR(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-[#EAEAEA] space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-gray-600">Subtotal</span><span>{formatINR(subtotal)}</span></div>
            <div className="flex justify-between text-xs text-gray-500"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : formatINR(shipping)}</span></div>
            <div className="flex justify-between text-base font-bold pt-2 border-t"><span>Total</span><span>{formatINR(total)}</span></div>
          </div>
          <button 
            type="submit"
            className="w-full bg-[#171717] text-white py-3.5 text-xs uppercase tracking-[0.2em] font-semibold rounded hover:bg-[#8B7465] transition shadow-md"
          >
            Place Order ({formatINR(total)})
          </button>
        </div>
      </form>
    </div>
  );
}

// ==========================================
// ORDER SUCCESS PAGE
// ==========================================
function OrderSuccessPage({ navigateTo }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 bg-[#171717] text-white rounded-full flex items-center justify-center mx-auto">
        <Check size={32} />
      </div>
      <h1 className="font-serif text-4xl font-bold tracking-tight">Order Confirmed</h1>
      <p className="text-sm text-gray-600 leading-relaxed">
        Thank you for shopping with Velora. Your order has been successfully placed and is being prepared with utmost care. A confirmation email with tracking details has been sent to your inbox.
      </p>
      <div className="pt-6">
        <button 
          onClick={() => navigateTo('home')}
          className="bg-[#171717] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold rounded hover:bg-[#8B7465] transition"
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
}

// ==========================================
// LOGIN & REGISTER PAGES
// ==========================================
function LoginPage({ navigateTo }) {
  const { setUser, showToast } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ email, name: email.split('@')[0] });
    showToast("Successfully signed in.");
    navigateTo('home');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-24">
      <div className="bg-white p-8 rounded border border-[#EAEAEA] shadow-sm space-y-6">
        <div className="text-center">
          <h1 className="font-serif text-2xl font-bold tracking-widest uppercase">VELORA</h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Sign in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Email Address</label>
            <input 
              type="email" required value={email} onChange={e=>setEmail(e.target.value)}
              className="w-full text-xs p-3 border border-[#D8C8B8] rounded outline-none"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Password</label>
            <div className="relative">
              <input 
                type={showPass ? 'text' : 'password'} required value={password} onChange={e=>setPassword(e.target.value)}
                className="w-full text-xs p-3 border border-[#D8C8B8] rounded outline-none pr-10"
              />
              <button type="button" onClick={()=>setShowPass(!showPass)} className="absolute right-3 top-3 text-gray-400">
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <button 
            type="submit"
            className="w-full bg-[#171717] text-white py-3 text-xs uppercase tracking-[0.2em] font-semibold rounded hover:bg-[#8B7465] transition"
          >
            Sign In
          </button>
        </form>

        <div className="text-center text-xs text-gray-500 pt-4 border-t border-[#EAEAEA]">
          Don't have an account?{' '}
          <button onClick={() => navigateTo('register')} className="font-semibold underline text-[#171717]">
            Register here
          </button>
        </div>
      </div>
    </div>
  );
}

function RegisterPage({ navigateTo }) {
  const { setUser, showToast } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    setUser({ email, name });
    showToast("Account created successfully.");
    navigateTo('home');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-24">
      <div className="bg-white p-8 rounded border border-[#EAEAEA] shadow-sm space-y-6">
        <div className="text-center">
          <h1 className="font-serif text-2xl font-bold tracking-widest uppercase">VELORA</h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Create a new account</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Full Name</label>
            <input 
              type="text" required value={name} onChange={e=>setName(e.target.value)}
              className="w-full text-xs p-3 border border-[#D8C8B8] rounded outline-none"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Email Address</label>
            <input 
              type="email" required value={email} onChange={e=>setEmail(e.target.value)}
              className="w-full text-xs p-3 border border-[#D8C8B8] rounded outline-none"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Password</label>
            <input 
              type="password" required value={password} onChange={e=>setPassword(e.target.value)}
              className="w-full text-xs p-3 border border-[#D8C8B8] rounded outline-none"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-[#171717] text-white py-3 text-xs uppercase tracking-[0.2em] font-semibold rounded hover:bg-[#8B7465] transition"
          >
            Create Account
          </button>
        </form>

        <div className="text-center text-xs text-gray-500 pt-4 border-t border-[#EAEAEA]">
          Already have an account?{' '}
          <button onClick={() => navigateTo('login')} className="font-semibold underline text-[#171717]">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// ABOUT & CONTACT PAGES
// ==========================================
function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8B7465]">ESTABLISHED 2026</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold">About Velora</h1>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Velora is a modern fashion destination designed for individuals who appreciate effortless elegance, uncompromising craftsmanship, and timeless silhouettes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80" alt="About" className="rounded h-96 object-cover" />
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="font-serif text-2xl font-bold">The Editorial Standard</h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            Every garment we produce follows strict ethical sourcing standards and uses premium fabrics like European linen, satin, and organic cotton. We bridge the gap between luxury runway aesthetics and accessible everyday wear.
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  const { showToast } = useContext(AppContext);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 space-y-8">
      <div className="text-center">
        <h1 className="font-serif text-3xl font-bold">Get in Touch</h1>
        <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">We are here to assist your inquiries</p>
      </div>

      {submitted ? (
        <div className="bg-white p-8 rounded border border-[#EAEAEA] text-center space-y-4">
          <h3 className="font-serif text-xl font-bold">Message Received</h3>
          <p className="text-xs text-gray-600">Thank you for reaching out. Our client concierge team will respond within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={(e)=>{e.preventDefault(); setSubmitted(true); showToast("Message sent successfully.");}} className="bg-white p-8 rounded border border-[#EAEAEA] space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" required className="text-xs p-3 border border-[#D8C8B8] rounded outline-none" />
            <input type="email" placeholder="Email Address" required className="text-xs p-3 border border-[#D8C8B8] rounded outline-none" />
          </div>
          <textarea rows="5" placeholder="Your Message..." required className="w-full text-xs p-3 border border-[#D8C8B8] rounded outline-none" />
          <button type="submit" className="bg-[#171717] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold rounded hover:bg-[#8B7465] transition">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

// ==========================================
// NOT FOUND PAGE
// ==========================================
function NotFoundPage({ navigateTo }) {
  return (
    <div className="max-w-md mx-auto px-4 py-32 text-center space-y-6">
      <h1 className="font-serif text-6xl font-bold">404</h1>
      <h2 className="font-serif text-xl font-medium">Page Not Found</h2>
      <p className="text-xs text-gray-500">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <button onClick={() => navigateTo('home')} className="bg-[#171717] text-white px-8 py-3 text-xs uppercase tracking-widest rounded">
        Return Home
      </button>
    </div>
  );
}

// ==========================================
// NEWSLETTER COMPONENT
// ==========================================
function Newsletter() {
  const { showToast } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  return (
    <section className="bg-[#FFFFFF] py-20 border-t border-[#EAEAEA] text-center px-4">
      <div className="max-w-xl mx-auto space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8B7465]">JOIN THE CLUB</span>
        <h2 className="font-serif text-3xl font-bold">Join the Velora Club</h2>
        <p className="text-xs text-gray-600 tracking-wide">Get exclusive updates, new arrivals, and special seasonal offers.</p>
        
        {success ? (
          <p className="text-xs font-semibold text-[#8B7465] tracking-widest uppercase">Thank you for subscribing to Velora.</p>
        ) : (
          <form onSubmit={(e)=>{e.preventDefault(); setSuccess(true); showToast("Subscribed successfully.");}} className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" placeholder="Enter your email address..." required 
              value={email} onChange={e=>setEmail(e.target.value)}
              className="flex-1 text-xs p-3.5 border border-[#D8C8B8] rounded outline-none bg-[#F8F5F0]"
            />
            <button type="submit" className="bg-[#171717] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold rounded hover:bg-[#8B7465] transition">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// ==========================================
// FOOTER COMPONENT
// ==========================================
function Footer({ navigateTo }) {
  return (
    <footer className="bg-[#171717] text-[#F8F5F0] pt-16 pb-12 border-t border-[#D8C8B8]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
        <div className="space-y-4">
          <span className="font-serif text-xl tracking-[0.25em] font-bold">VELORA</span>
          <p className="text-xs text-gray-400 leading-relaxed">
            A modern, elegant, and premium fashion destination engineered for the contemporary woman.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-sm font-bold uppercase tracking-widest mb-4 text-[#D8C8B8]">Shop</h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li><button onClick={() => navigateTo('category', 'Dresses')} className="hover:text-white transition">Dresses</button></li>
            <li><button onClick={() => navigateTo('category', 'Tops')} className="hover:text-white transition">Tops</button></li>
            <li><button onClick={() => navigateTo('category', 'Bottoms')} className="hover:text-white transition">Bottoms</button></li>
            <li><button onClick={() => navigateTo('category', 'Party Wear')} className="hover:text-white transition">Party Wear</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm font-bold uppercase tracking-widest mb-4 text-[#D8C8B8]">Customer Care</h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition">Contact Us</button></li>
            <li><button onClick={() => navigateTo('about')} className="hover:text-white transition">Shipping Information</button></li>
            <li><button onClick={() => navigateTo('about')} className="hover:text-white transition">Returns & Exchanges</button></li>
            <li><button onClick={() => navigateTo('about')} className="hover:text-white transition">Privacy Policy</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm font-bold uppercase tracking-widest mb-4 text-[#D8C8B8]">Connect</h4>
          <p className="text-xs text-gray-300 mb-4">Instagram / Pinterest / Newsletter</p>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">Designed for Portfolios & Flagships</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2026 VELORA FASHION. All Rights Reserved.</p>
        <p className="mt-2 sm:mt-0">Crafted with React & Vite</p>
      </div>
    </footer>
  );
}