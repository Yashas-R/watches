/* ============================================================
   watches-data.js  |  20 Watches in INR  |  Cart + DataLayer
   ============================================================ */
window.dataLayer = window.dataLayer || [];

function dlPush(obj) {
  window.dataLayer.push(obj);
  console.log('%c📊 dataLayer', 'color:#c9a84c;font-weight:bold;font-size:13px', JSON.stringify(obj, null, 2));
}

var CURRENCY = 'INR';

function fmtINR(n) {
  return '\u20B9' + Number(n).toLocaleString('en-IN');
}

/* ============================================================
   20 WATCHES
   ============================================================ */
var WATCHES = [
  { id:'W001', brand:'Horologium', name:'Perpetuel Classique',   ref:'HC-2241',  price:1850000, cat:'dress',        badge:'new',  accent:'#e8c96a', bg:'#100d06', mv:'Cal. H-100 Self-Winding Perpetual Calendar', sz:'40mm Rose Gold',        wr:'30m',  info:'Grand feu enamel dial with perpetual calendar complication. Hand-guilloché seconds.' },
  { id:'W002', brand:'Horologium', name:'Ocean Profond I',        ref:'HO-4420',  price:1280000, cat:'sport',        badge:'',     accent:'#4a90d9', bg:'#060c18', mv:'Cal. H-200 Automatic 42h Reserve',          sz:'42mm Brushed Titanium', wr:'300m', info:'Ceramic unidirectional bezel, lume-charged indices, helium escape valve.' },
  { id:'W003', brand:'Horologium', name:'Chronos I',              ref:'HCH-3310', price:2200000, cat:'chronograph',  badge:'ltd',  accent:'#c85030', bg:'#150806', mv:'Cal. H-300 Flyback Chronograph Column Wheel',sz:'41mm Stainless Steel',  wr:'50m',  info:'Flyback chronograph with vertical clutch, pulsometer scale, contrasting sub-dials.' },
  { id:'W004', brand:'Horologium', name:'Heritage Tourbillon',    ref:'HHT-0771', price:5800000, cat:'heritage',     badge:'rare', accent:'#9070c0', bg:'#0a0810', mv:'Cal. H-T01 Flying Tourbillon 78h Reserve',   sz:'39mm Platinum',         wr:'30m',  info:'One-minute flying tourbillon at 6 o clock. Cotes de Geneve decoration throughout.' },
  { id:'W005', brand:'Horologium', name:'Celeste Moon Phase',     ref:'HM-5580',  price:2800000, cat:'dress',        badge:'',     accent:'#a0c0e8', bg:'#06080e', mv:'Cal. H-MP Automatic Astronomical Moon Phase', sz:'40mm White Gold',       wr:'30m',  info:'Astronomical moon phase accurate to 122 years. Aventurine glass dial with meteorite inlay.' },
  { id:'W006', brand:'Horologium', name:'Rallye Chronograph',     ref:'HR-6640',  price:1420000, cat:'chronograph',  badge:'',     accent:'#c9a84c', bg:'#0e0a04', mv:'Cal. H-305 Manual-Wind Chronograph',         sz:'38mm Steel/Bronze',     wr:'30m',  info:'Racing-inspired tachymeter bezel, pump pushers and Cordura strap.' },
  { id:'W007', brand:'Horologium', name:'Aquaterre GMT',          ref:'HAG-7750', price:1650000, cat:'sport',        badge:'',     accent:'#40c070', bg:'#040e08', mv:'Cal. H-GMT Automatic World Time 24-City',    sz:'42mm Steel/Ceramic',    wr:'200m', info:'Dual time zone world time disc, anti-reflective sapphire, adventure-grade resilience.' },
  { id:'W008', brand:'Horologium', name:'Squelette I',            ref:'HS-8891',  price:4200000, cat:'limited',      badge:'ltd',  accent:'#c0c0c8', bg:'#080808', mv:'Cal. H-SK Skeletonised 214 Components',      sz:'40mm Titanium DLC',     wr:'30m',  info:'Open-worked movement with black PVD bridges, hand-beveled and mirror-polished.' },
  { id:'W009', brand:'Horologium', name:'Perpetuel Sombre',       ref:'HC-2244',  price:2100000, cat:'dress',        badge:'new',  accent:'#a09878', bg:'#080808', mv:'Cal. H-102 Self-Winding Annual Calendar',    sz:'40mm Black DLC Steel',  wr:'30m',  info:'Annual calendar on smoked grey slate dial with warm 18k gold indexes.' },
  { id:'W010', brand:'Horologium', name:'Plongeur Noir',          ref:'HO-4480',  price:980000,  cat:'sport',        badge:'sale', accent:'#60b0e0', bg:'#040810', mv:'Cal. H-210 Automatic 48h Reserve',          sz:'44mm Black Ceramic',    wr:'500m', info:'Professional dive watch with Super-LumiNova dial coating and ceramic bezel.' },
  { id:'W011', brand:'Horologium', name:'Minuet Dress',           ref:'HD-1102',  price:850000,  cat:'dress',        badge:'',     accent:'#e8c060', bg:'#0c0a04', mv:'Cal. H-010 Ultra-Thin Automatic 3mm',        sz:'36mm Yellow Gold',      wr:'30m',  info:'Ultra-thin dress watch 6.9mm total height, lacquered cream dial, baton hands.' },
  { id:'W012', brand:'Horologium', name:'Rattrapante Dual',       ref:'HCH-3380', price:3500000, cat:'chronograph',  badge:'rare', accent:'#d09060', bg:'#100805', mv:'Cal. H-380 Split-Seconds Rattrapante',       sz:'42mm Rose Gold',        wr:'50m',  info:'Split-seconds rattrapante complication — a pinnacle of mechanical complexity.' },
  { id:'W013', brand:'Horologium', name:'Cosmos Orrery',          ref:'HCO-9001', price:9500000, cat:'limited',      badge:'rare', accent:'#70b0f0', bg:'#040612', mv:'Cal. H-ORR Orrery 5 Planetary Bodies',       sz:'44mm Sapphire Case',    wr:'10m',  info:'Miniature solar system on the wrist. Earth rotates every 365.25 days. Only 12 made.' },
  { id:'W014', brand:'Horologium', name:'Regulateur I',           ref:'HRG-5010', price:1950000, cat:'heritage',     badge:'',     accent:'#c9a84c', bg:'#0a0904', mv:'Cal. H-R50 Hand-Wind Regulator Display',     sz:'38mm Stainless Steel',  wr:'30m',  info:'Regulator display separating hours, minutes and seconds on three distinct axes.' },
  { id:'W015', brand:'Horologium', name:'Arctic GMT',             ref:'HAG-7790', price:1780000, cat:'sport',        badge:'new',  accent:'#80c8e8', bg:'#06080c', mv:'Cal. H-GMT2 Automatic Bidirectional GMT',    sz:'42mm White Ceramic',    wr:'200m', info:'Inspired by polar expeditions. Frosty white dial with electric-blue GMT hand.' },
  { id:'W016', brand:'Horologium', name:'Repetition Minute',      ref:'HRM-0001', price:12000000,cat:'limited',      badge:'rare', accent:'#d4a870', bg:'#0c0806', mv:'Cal. H-RM Minute Repeater Westminster Chime', sz:'41mm Titanium',         wr:'30m',  info:'Westminster chime minute repeater — the most complex Horologium movement ever produced.' },
  { id:'W017', brand:'Horologium', name:'Diver 300 Bronze',       ref:'HO-4430',  price:1120000, cat:'sport',        badge:'',     accent:'#c08050', bg:'#0c0806', mv:'Cal. H-215 Automatic Glucydur Balance',      sz:'42mm Bronze/Titanium',  wr:'300m', info:'Patinated bronze case develops unique character over time. Distressed tropical dial.' },
  { id:'W018', brand:'Horologium', name:'Chronos II Racing',      ref:'HCH-3390', price:2450000, cat:'chronograph',  badge:'new',  accent:'#e83030', bg:'#100404', mv:'Cal. H-320 Automatic Chronograph Silicon',   sz:'43mm Grade 5 Titanium', wr:'100m', info:'Silicon pallet fork for magnetic resistance. Racing-inspired crown guard.' },
  { id:'W019', brand:'Horologium', name:'Classique Ultra-Plate',  ref:'HC-2260',  price:3200000, cat:'dress',        badge:'',     accent:'#e0d8c8', bg:'#0a0906', mv:'Cal. H-UP Ultra-Thin Manual 2.1mm',          sz:'38mm Platinum 5.5mm',   wr:'10m',  info:'The thinnest movement Horologium has ever made — a meditative exercise in restraint.' },
  { id:'W020', brand:'Horologium', name:'Heritage Pocket Wrist',  ref:'HHT-0800', price:4800000, cat:'heritage',     badge:'ltd',  accent:'#e0b840', bg:'#100c04', mv:'Cal. H-PW 19th-Century Pocket Movement',     sz:'42mm Yellow Gold',      wr:'10m',  info:'A pocket watch movement re-cased for the wrist, preserving every 19th-century gear.' }
];

/* ============================================================
   SVG WATCH FACE GENERATOR
   ============================================================ */
function generateWatchSVG(w, size) {
  size = size || 160;
  var a  = w.accent || '#c9a84c';
  var bg = w.bg     || '#0d0b06';
  var h  = [
    '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" width="'+size+'" height="'+Math.round(size*1.5)+'">',
    /* strap top */
    '<rect x="80" y="4" width="40" height="58" rx="8" fill="'+bg+'" stroke="'+a+'" stroke-width="1.4"/>',
    '<rect x="85" y="8" width="30" height="50" rx="6" fill="rgba(0,0,0,0.35)"/>',
    '<circle cx="100" cy="20" r="2.8" fill="rgba(0,0,0,0.55)"/>',
    '<circle cx="100" cy="35" r="2.8" fill="rgba(0,0,0,0.55)"/>',
    '<circle cx="100" cy="50" r="2.8" fill="rgba(0,0,0,0.55)"/>',
    /* case body */
    '<rect x="44" y="58" width="112" height="144" rx="20" fill="#221f12" stroke="'+a+'" stroke-width="2"/>',
    '<rect x="48" y="62" width="104" height="136" rx="18" fill="'+bg+'"/>',
    /* crown */
    '<rect x="154" y="108" width="13" height="32" rx="5" fill="#1c1912" stroke="'+a+'" stroke-width="1.3"/>',
    /* chrono pusher */
    '<rect x="154" y="96" width="11" height="9" rx="3" fill="#1c1912" stroke="'+a+'" stroke-width="1"/>',
    /* dial circle */
    '<circle cx="100" cy="130" r="48" fill="#050403" stroke="'+a+'" stroke-width="1.3"/>',
    '<circle cx="100" cy="130" r="42" fill="'+bg+'" stroke="'+a+'" stroke-width="0.4" stroke-dasharray="1 4"/>',
    /* 12, 3, 6, 9 markers */
    '<rect x="97" y="86" width="6" height="14" rx="2" fill="'+a+'"/>',
    '<rect x="97" y="160" width="6" height="14" rx="2" fill="'+a+'"/>',
    '<rect x="145" y="127" width="14" height="6" rx="2" fill="'+a+'"/>',
    '<rect x="41" y="127" width="14" height="6" rx="2" fill="'+a+'"/>',
    /* small tick markers */
    '<rect x="121" y="89" width="3" height="9" rx="1" fill="'+a+'" opacity="0.55" transform="rotate(30 122.5 93.5)"/>',
    '<rect x="138" y="105" width="3" height="9" rx="1" fill="'+a+'" opacity="0.55" transform="rotate(60 139.5 109.5)"/>',
    '<rect x="59" y="147" width="3" height="9" rx="1" fill="'+a+'" opacity="0.55" transform="rotate(30 60.5 151.5)"/>',
    '<rect x="76" y="163" width="3" height="9" rx="1" fill="'+a+'" opacity="0.55" transform="rotate(60 77.5 167.5)"/>',
    /* brand name */
    '<text x="100" y="115" text-anchor="middle" fill="'+a+'" font-size="6.5" font-family="Playfair Display,Georgia,serif" letter-spacing="2.5">HOROLOGIUM</text>',
    '<text x="100" y="126" text-anchor="middle" fill="'+a+'" font-size="4" font-family="Montserrat,sans-serif" letter-spacing="2.2" opacity="0.5">GENEVE</text>',
    /* sub-dial */
    '<circle cx="100" cy="153" r="11" fill="none" stroke="'+a+'" stroke-width="0.6" opacity="0.45"/>',
    '<line x1="100" y1="153" x2="100" y2="146" stroke="'+a+'" stroke-width="1.1" stroke-linecap="round" opacity="0.6"/>',
    /* hour hand */
    '<line x1="100" y1="130" x2="100" y2="96" stroke="'+a+'" stroke-width="4" stroke-linecap="round"/>',
    /* minute hand */
    '<line x1="100" y1="130" x2="132" y2="116" stroke="'+a+'" stroke-width="3" stroke-linecap="round"/>',
    /* seconds hand red */
    '<line x1="100" y1="130" x2="74" y2="147" stroke="#cc2020" stroke-width="1.6" stroke-linecap="round"/>',
    '<line x1="100" y1="130" x2="110" y2="112" stroke="#cc2020" stroke-width="1.6" stroke-linecap="round" opacity="0.45"/>',
    /* center jewel */
    '<circle cx="100" cy="130" r="4.5" fill="'+a+'"/>',
    '<circle cx="100" cy="130" r="2.2" fill="'+bg+'"/>',
    /* strap bottom */
    '<rect x="80" y="238" width="40" height="58" rx="8" fill="'+bg+'" stroke="'+a+'" stroke-width="1.4"/>',
    '<rect x="85" y="242" width="30" height="50" rx="6" fill="rgba(0,0,0,0.35)"/>',
    '<rect x="90" y="278" width="20" height="10" rx="3" fill="rgba(0,0,0,0.5)" stroke="'+a+'" stroke-width="0.9"/>',
    '</svg>'
  ].join('');
  return h;
}

/* ============================================================
   CART HELPERS
   ============================================================ */
function getCart() {
  try { return JSON.parse(localStorage.getItem('hrg_cart') || '[]'); }
  catch(e) { return []; }
}
function saveCart(c) {
  try { localStorage.setItem('hrg_cart', JSON.stringify(c)); } catch(e){}
  updateCartBadgeAll();
}

function addToCart(watchId) {
  var found = null;
  for (var i = 0; i < WATCHES.length; i++) {
    if (WATCHES[i].id === watchId) { found = WATCHES[i]; break; }
  }
  if (!found) return;

  var cart = getCart();
  for (var j = 0; j < cart.length; j++) {
    if (cart[j].id === watchId) { showToast('Already in your cart'); return; }
  }

  cart.push({ id:found.id, brand:found.brand, name:found.name, ref:found.ref,
               price:found.price, cat:found.cat, accent:found.accent, bg:found.bg });
  saveCart(cart);
  refreshAddBtns();
  showToast(found.name + ' added to cart');

  dlPush({
    event: 'add_to_cart',
    ecommerce: {
      currency: CURRENCY,
      value:    found.price,
      items: [{ item_id:found.id, item_name:found.name, item_brand:found.brand,
                item_category:found.cat, item_variant:found.ref,
                price:found.price, quantity:1 }]
    }
  });
}

function removeFromCart(watchId) {
  var cart = getCart(), gone = null, next = [];
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === watchId) gone = cart[i];
    else next.push(cart[i]);
  }
  saveCart(next);
  refreshAddBtns();
  if (gone) dlPush({ event:'remove_from_cart', ecommerce:{ currency:CURRENCY, value:gone.price,
    items:[{ item_id:gone.id, item_name:gone.name, price:gone.price, quantity:1 }] } });
  if (typeof renderCartPanel === 'function') renderCartPanel();
}

function cartSubtotal()   { return getCart().reduce(function(s,w){ return s+w.price; }, 0); }
function cartTax()        { return Math.round(cartSubtotal() * 0.18); } /* 18% GST */
function cartGrandTotal() { return cartSubtotal() + cartTax(); }

function updateCartBadgeAll() {
  var n = getCart().length;
  var els = document.querySelectorAll('.cart-count');
  for (var i=0;i<els.length;i++) els[i].textContent = n;
}

function refreshAddBtns() {
  var ids = {};
  var cart = getCart();
  for (var i=0;i<cart.length;i++) ids[cart[i].id]=true;
  var btns = document.querySelectorAll('[data-watch-id]');
  for (var j=0;j<btns.length;j++) {
    var b = btns[j], id = b.getAttribute('data-watch-id');
    if (ids[id]) { b.textContent='In Cart \u2713'; b.classList.add('in-cart'); }
    else          { b.textContent='Add to Cart';    b.classList.remove('in-cart'); }
  }
}

function showToast(msg) {
  var el = document.getElementById('toast-global');
  if (!el) return;
  el.querySelector('.toast-msg').textContent = msg;
  el.classList.add('visible');
  clearTimeout(el._t);
  el._t = setTimeout(function(){ el.classList.remove('visible'); }, 3200);
}

function trackPageView(name, path) {
  dlPush({ event:'page_view', page_name:name,
           page_path: path || window.location.pathname,
           currency: CURRENCY, timestamp: new Date().toISOString() });
}

document.addEventListener('DOMContentLoaded', function(){
  updateCartBadgeAll();
  refreshAddBtns();
});
