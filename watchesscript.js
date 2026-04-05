/* ============================================================
   watches-data.js  —  20 watches + cart helpers + dataLayer
   ============================================================ */

/* ---------- DATA LAYER INIT ---------- */
window.dataLayer = window.dataLayer || [];
function dlPush(obj) {
  window.dataLayer.push(obj);
  console.log('%c📊 dataLayer.push', 'color:#c9a84c;font-weight:bold', obj);
}

/* ---------- WATCH CATALOGUE ---------- */
var WATCHES = [
  {
    id:'W001', brand:'Horologium', name:'Perpetuel Classique', ref:'HC-2241',
    price:18500, category:'dress', badge:'new',
    movement:'Cal. H-100 Self-Winding, Perpetual Calendar',
    case:'40mm Rose Gold', water:'30m',
    desc:'Grand feu enamel dial bearing a perpetual calendar complication. Hand-guilloché centre seconds.',
    accent:'#e8c96a', bg:'#100d06'
  },
  {
    id:'W002', brand:'Horologium', name:'Océan Profond I', ref:'HO-4420',
    price:12800, category:'sport', badge:'',
    movement:'Cal. H-200 Automatic, 42h Power Reserve',
    case:'42mm Brushed Titanium', water:'300m',
    desc:'Ceramic unidirectional bezel, lume-charged indices, helium escape valve.',
    accent:'#4a90d9', bg:'#060c18'
  },
  {
    id:'W003', brand:'Horologium', name:'Chronos I', ref:'HCH-3310',
    price:22000, category:'chronograph', badge:'ltd',
    movement:'Cal. H-300 Flyback Chronograph, Column Wheel',
    case:'41mm Stainless Steel', water:'50m',
    desc:'Flyback chronograph with vertical clutch, pulsometer scale, and contrasting sub-dials.',
    accent:'#c85030', bg:'#150806'
  },
  {
    id:'W004', brand:'Horologium', name:'Héritage Tourbillon', ref:'HHT-0771',
    price:58000, category:'heritage', badge:'rare',
    movement:'Cal. H-T01 Hand-Wind Flying Tourbillon, 78h Power Reserve',
    case:'39mm Platinum', water:'30m',
    desc:'One-minute flying tourbillon at 6 o'clock. Côtes de Genève decoration throughout.',
    accent:'#9070c0', bg:'#0a0810'
  },
  {
    id:'W005', brand:'Horologium', name:'Céleste Moon Phase', ref:'HM-5580',
    price:28000, category:'dress', badge:'',
    movement:'Cal. H-MP Automatic, Moon Phase Display',
    case:'40mm White Gold', water:'30m',
    desc:'Astronomical moon phase accurate to 122 years. Aventurine glass dial with meteorite inlay.',
    accent:'#a0c0e8', bg:'#06080e'
  },
  {
    id:'W006', brand:'Horologium', name:'Rallye Chronograph', ref:'HR-6640',
    price:14200, category:'chronograph', badge:'',
    movement:'Cal. H-305 Manual-Wind Chronograph',
    case:'38mm Steel / Bronze', water:'30m',
    desc:'Racing-inspired design. Tachymeter bezel, pump pushers, and Cordura strap.',
    accent:'#c9a84c', bg:'#0e0a04'
  },
  {
    id:'W007', brand:'Horologium', name:'Aquaterre GMT', ref:'HAG-7750',
    price:16500, category:'sport', badge:'',
    movement:'Cal. H-GMT Automatic, World Time 24-City Disc',
    case:'42mm Steel / Ceramic', water:'200m',
    desc:'Dual time zone, world time disc, anti-reflective sapphire. Adventure-grade resilience.',
    accent:'#40c070', bg:'#040e08'
  },
  {
    id:'W008', brand:'Horologium', name:'Squelette I', ref:'HS-8891',
    price:42000, category:'limited', badge:'ltd',
    movement:'Cal. H-SK Hand-Wind Skeletonised, 214 Components',
    case:'40mm Titanium DLC', water:'30m',
    desc:'Open-worked movement with black PVD bridges, hand-beveled and mirror-polished.',
    accent:'#c0c0c8', bg:'#080808'
  },
  {
    id:'W009', brand:'Horologium', name:'Perpetuel Sombre', ref:'HC-2244',
    price:21000, category:'dress', badge:'new',
    movement:'Cal. H-102 Self-Winding, Annual Calendar',
    case:'40mm Black DLC Steel', water:'30m',
    desc:'Annual calendar on a smoked grey slate dial. Warmth of 18k gold indexes.',
    accent:'#a09878', bg:'#080808'
  },
  {
    id:'W010', brand:'Horologium', name:'Plongeur Noir', ref:'HO-4480',
    price:9800, category:'sport', badge:'sale',
    movement:'Cal. H-210 Automatic, 48h Power Reserve',
    case:'44mm Black Ceramic', water:'500m',
    desc:'Professional dive watch with luminescent hands and Super-LumiNova dial coating.',
    accent:'#60b0e0', bg:'#040810'
  },
  {
    id:'W011', brand:'Horologium', name:'Minuet Dress', ref:'HD-1102',
    price:8500, category:'dress', badge:'',
    movement:'Cal. H-010 Ultra-Thin Automatic, 3mm Profile',
    case:'36mm Yellow Gold', water:'30m',
    desc:'Ultra-thin dress watch at 6.9mm total height. Lacquered cream dial, baton hands.',
    accent:'#e8c060', bg:'#0c0a04'
  },
  {
    id:'W012', brand:'Horologium', name:'Rattrapante Dual', ref:'HCH-3380',
    price:35000, category:'chronograph', badge:'rare',
    movement:'Cal. H-380 Split-Seconds Chronograph',
    case:'42mm Rose Gold', water:'50m',
    desc:'Split-seconds rattrapante complication. A pinnacle of mechanical complexity.',
    accent:'#d09060', bg:'#100805'
  },
  {
    id:'W013', brand:'Horologium', name:'Cosmos Orrery', ref:'HCO-9001',
    price:95000, category:'limited', badge:'rare',
    movement:'Cal. H-ORR Hand-Wind Orrery, 5 Planetary Bodies',
    case:'44mm Sapphire Crystal Case', water:'10m',
    desc:'Miniature solar system on the wrist. Earth rotates every 365.25 days. Only 12 made.',
    accent:'#70b0f0', bg:'#040612'
  },
  {
    id:'W014', brand:'Horologium', name:'Régulateur I', ref:'HRG-5010',
    price:19500, category:'heritage', badge:'',
    movement:'Cal. H-R50 Hand-Wind Regulator Display',
    case:'38mm Stainless Steel', water:'30m',
    desc:'Regulator display separating hours, minutes, and seconds on three distinct axes.',
    accent:'#c9a84c', bg:'#0a0904'
  },
  {
    id:'W015', brand:'Horologium', name:'Arctic GMT', ref:'HAG-7790',
    price:17800, category:'sport', badge:'new',
    movement:'Cal. H-GMT2 Automatic, Bidirectional GMT',
    case:'42mm Matte White Ceramic', water:'200m',
    desc:'Inspired by polar expeditions. Frosty white dial with electric-blue GMT hand.',
    accent:'#80c8e8', bg:'#06080c'
  },
  {
    id:'W016', brand:'Horologium', name:'Répétition Minute', ref:'HRM-0001',
    price:120000, category:'limited', badge:'rare',
    movement:'Cal. H-RM Minute Repeater, Westminster Chime',
    case:'41mm Titanium', water:'30m',
    desc:'Westminster chime minute repeater. The most complex Horologium movement ever produced.',
    accent:'#d4a870', bg:'#0c0806'
  },
  {
    id:'W017', brand:'Horologium', name:'Diver 300 Bronze', ref:'HO-4430',
    price:11200, category:'sport', badge:'',
    movement:'Cal. H-215 Automatic, Glucydur Balance',
    case:'42mm Bronze / Titanium', water:'300m',
    desc:'Patinated bronze case develops unique character over time. Distressed tropical dial.',
    accent:'#c08050', bg:'#0c0806'
  },
  {
    id:'W018', brand:'Horologium', name:'Chronos II Racing', ref:'HCH-3390',
    price:24500, category:'chronograph', badge:'new',
    movement:'Cal. H-320 Automatic Chronograph, Silicon Lever',
    case:'43mm Grade 5 Titanium', water:'100m',
    desc:'Silicon pallet fork for magnetic resistance. Racing bucket-seat inspired crown guard.',
    accent:'#e83030', bg:'#100404'
  },
  {
    id:'W019', brand:'Horologium', name:'Classique Ultra-Plate', ref:'HC-2260',
    price:32000, category:'dress', badge:'',
    movement:'Cal. H-UP Ultra-Thin Manual, 2.1mm Movement',
    case:'38mm Platinum, 5.5mm Total Height', water:'10m',
    desc:'The thinnest movement Horologium has ever made. A meditative exercise in restraint.',
    accent:'#e0d8c8', bg:'#0a0906'
  },
  {
    id:'W020', brand:'Horologium', name:'Heritage Pocket Wrist', ref:'HHT-0800',
    price:48000, category:'heritage', badge:'ltd',
    movement:'Cal. H-PW Hand-Wind, Pocket Movement Converted',
    case:'42mm Yellow Gold Hunter Case', water:'10m',
    desc:'A pocketwatch movement re-cased for the wrist, preserving every 19th-century gear.',
    accent:'#e0b840', bg:'#100c04'
  }
];

/* ---------- WATCH SVG GENERATOR ---------- */
function generateWatchSVG(w, size) {
  size = size || 160;
  var a = w.accent || '#c9a84c';
  var bg = w.bg || '#0d0b06';
  return '<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" width="'+size+'" height="'+size+'">' +
    '<rect x="84" y="8" width="32" height="52" rx="6" fill="'+bg+'" stroke="'+a+'" stroke-width="1"/>' +
    '<rect x="84" y="220" width="32" height="52" rx="6" fill="'+bg+'" stroke="'+a+'" stroke-width="1"/>' +
    '<rect x="48" y="55" width="104" height="130" rx="16" fill="#222016" stroke="'+a+'" stroke-width="1.8"/>' +
    '<rect x="52" y="59" width="96" height="122" rx="14" fill="'+bg+'"/>' +
    '<circle cx="100" cy="120" r="44" fill="#08070400" stroke="'+a+'" stroke-width="1"/>' +
    '<circle cx="100" cy="120" r="38" fill="'+bg+'" stroke="'+a+'" stroke-width="0.5" stroke-dasharray="1 4"/>' +
    '<text x="100" y="106" text-anchor="middle" fill="'+a+'" font-size="5.5" font-family="Playfair Display,serif" letter-spacing="2.5">HOROLOGIUM</text>' +
    '<text x="100" y="117" text-anchor="middle" fill="'+a+'" font-size="3.8" font-family="Montserrat,sans-serif" letter-spacing="2" opacity="0.6">GENÈVE</text>' +
    '<rect x="98" y="81" width="3" height="10" rx="1" fill="'+a+'"/>' +
    '<rect x="98" y="149" width="3" height="10" rx="1" fill="'+a+'"/>' +
    '<rect x="139" y="118" width="10" height="3" rx="1" fill="'+a+'"/>' +
    '<rect x="51" y="118" width="10" height="3" rx="1" fill="'+a+'"/>' +
    '<line x1="100" y1="120" x2="100" y2="89" stroke="'+a+'" stroke-width="2.5" stroke-linecap="round"/>' +
    '<line x1="100" y1="120" x2="126" y2="111" stroke="'+a+'" stroke-width="2" stroke-linecap="round"/>' +
    '<line x1="100" y1="120" x2="82" y2="133" stroke="#cc2222" stroke-width="1.5" stroke-linecap="round"/>' +
    '<circle cx="100" cy="120" r="3.5" fill="'+a+'"/>' +
    '<rect x="148" y="110" width="8" height="20" rx="3" fill="#1a1710" stroke="'+a+'" stroke-width="1"/>' +
    '</svg>';
}

/* ---------- CART STORAGE ---------- */
function getCart() {
  try { return JSON.parse(localStorage.getItem('hrg_cart') || '[]'); } catch(e) { return []; }
}
function saveCart(cart) {
  localStorage.setItem('hrg_cart', JSON.stringify(cart));
  updateCartBadgeAll();
}
function addToCart(watchId) {
  var cart = getCart();
  var w = WATCHES.find(function(x){ return x.id === watchId; });
  if (!w) return;
  if (cart.find(function(c){ return c.id === watchId; })) {
    showToast('Already in your cart');
    return;
  }
  cart.push({ id: w.id, name: w.name, brand: w.brand, ref: w.ref,
               price: w.price, category: w.category, accent: w.accent, bg: w.bg });
  saveCart(cart);
  showToast(w.name + ' added to cart');
  refreshAddBtns();
  // dataLayer
  dlPush({
    event: 'add_to_cart',
    ecommerce: {
      currency: 'USD',
      value: w.price,
      items: [{ item_id: w.id, item_name: w.name, item_brand: w.brand,
                item_category: w.category, price: w.price, quantity: 1 }]
    }
  });
}
function removeFromCart(watchId) {
  var cart = getCart();
  var w = cart.find(function(c){ return c.id === watchId; });
  cart = cart.filter(function(c){ return c.id !== watchId; });
  saveCart(cart);
  if (w) {
    dlPush({ event: 'remove_from_cart',
             ecommerce: { currency:'USD', value: w.price,
               items:[{ item_id: w.id, item_name: w.name, price: w.price, quantity:1 }] } });
  }
  if (typeof renderCartPage === 'function') renderCartPage();
  refreshAddBtns();
}
function cartTotal() {
  return getCart().reduce(function(s,w){ return s + w.price; }, 0);
}
function cartTax() { return Math.round(cartTotal() * 0.08); }
function cartGrandTotal() { return cartTotal() + cartTax(); }

function updateCartBadgeAll() {
  var count = getCart().length;
  document.querySelectorAll('.cart-count').forEach(function(el){ el.textContent = count; });
}

function refreshAddBtns() {
  var cart = getCart();
  var ids = cart.map(function(c){ return c.id; });
  document.querySelectorAll('[data-watch-id]').forEach(function(btn){
    var id = btn.getAttribute('data-watch-id');
    if (ids.indexOf(id) > -1) {
      btn.textContent = 'In Cart ✓';
      btn.classList.add('in-cart');
    } else {
      btn.textContent = 'Add to Cart';
      btn.classList.remove('in-cart');
    }
  });
}

/* ---------- TOAST ---------- */
function showToast(msg) {
  var el = document.getElementById('toast-global');
  if (!el) return;
  el.querySelector('.toast-msg').textContent = msg;
  el.classList.add('visible');
  clearTimeout(el._timer);
  el._timer = setTimeout(function(){ el.classList.remove('visible'); }, 3200);
}

/* ---------- FORMAT ---------- */
function fmtPrice(n) { return '$' + n.toLocaleString('en-US'); }

/* ---------- PAGE VIEW ---------- */
function trackPageView(name, path) {
  dlPush({ event: 'page_view', page_name: name, page_path: path || window.location.pathname,
           timestamp: new Date().toISOString() });
}

/* ---------- INIT ON DOM READY ---------- */
document.addEventListener('DOMContentLoaded', function(){
  updateCartBadgeAll();
  refreshAddBtns();
});
