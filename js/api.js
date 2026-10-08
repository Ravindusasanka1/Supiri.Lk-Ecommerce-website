const STORAGE_KEY = "supiriFrontendData";

const DEFAULT_DATA = {
  products: [
    {id:1,name:"Classic Polo",sku:"TS-POL-02",category:"T-Shirts",price:4990,stock:21,sizes:["S","M","L","XL"],colors:[{name:"Black",hex:"#000000"},{name:"White",hex:"#ffffff"},{name:"Navy",hex:"#1b2a49"}]},
    {id:2,name:"Oxford Casual Shirt",sku:"SH-OXF-01",category:"Shirts",price:6480,stock:32,sizes:["M","L","XL"],colors:[{name:"White",hex:"#ffffff"},{name:"Light Blue",hex:"#9ecae1"}]},
    {id:3,name:"Slim Chino",sku:"TR-CHI-03",category:"Trousers",price:6990,stock:8,sizes:["30","32","34","36"],colors:[{name:"Beige",hex:"#d8c3a5"},{name:"Black",hex:"#111111"}]}
  ],
  orders:[
    {id:1024,customer:"Kamal Perera",date:"2026-10-02",amount:8480,status:"Pending"},
    {id:1023,customer:"Ruwan Silva",date:"2026-10-01",amount:4990,status:"Paid"},
    {id:1022,customer:"Nimal Fernando",date:"2026-09-30",amount:6990,status:"Shipped"},
    {id:1021,customer:"Hasini Perera",date:"2026-09-29",amount:9480,status:"Delivered"}
  ],
  customers:[
    {id:1,name:"Kamal Perera",email:"kamal@example.com",phone:"077 123 4567",orders:8,totalSpent:48900},
    {id:2,name:"Ruwan Silva",email:"ruwan@example.com",phone:"071 222 3344",orders:5,totalSpent:27450},
    {id:3,name:"Nimal Fernando",email:"nimal@example.com",phone:"075 345 6789",orders:4,totalSpent:21960},
    {id:4,name:"Hasini Perera",email:"hasini@example.com",phone:"076 555 6677",orders:3,totalSpent:18920}
  ],
  settings:{storeName:"Supiri.Lk",adminEmail:"admin@supiri.lk",deliveryFee:350,threshold:10,emailAlerts:true,maintenance:false,guestCheckout:true}
};

function getData(){
  try{
    const saved=localStorage.getItem(STORAGE_KEY);
    if(saved) return JSON.parse(saved);
  }catch(e){}
  localStorage.setItem(STORAGE_KEY,JSON.stringify(DEFAULT_DATA));
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}
function saveData(d){localStorage.setItem(STORAGE_KEY,JSON.stringify(d));}
async function apiFetch(url, options={}){
  const d=getData();
  const method=(options.method||"GET").toUpperCase();
  const body=options.body?JSON.parse(options.body):null;
  let parts=url.split("/").filter(Boolean);

  if(parts[0]==="dashboard") return {
    products:d.products.length,orders:d.orders.length,customers:d.customers.length,
    lowStock:d.products.filter(p=>Number(p.stock)<=Number(d.settings.threshold)).length,
    recentOrders:d.orders.slice(-5).reverse()
  };

  if(parts[0]==="products" && parts.length===1){
    if(method==="GET") return d.products;
    if(method==="POST"){
      if(!body.name||!body.sku) throw new Error("Product name and SKU are required");
      if(d.products.some(p=>p.sku.toLowerCase()===String(body.sku).toLowerCase())) throw new Error("SKU already exists");
      const id=d.products.length?Math.max(...d.products.map(p=>p.id))+1:1;
      const p={id,...body,price:Number(body.price||0),stock:Number(body.stock||0),
        sizes:Array.isArray(body.sizes)?body.sizes:[],colors:Array.isArray(body.colors)?body.colors:[]};
      d.products.push(p);saveData(d);return p;
    }
  }

  if(parts[0]==="products" && parts[1]){
    const id=Number(parts[1]), i=d.products.findIndex(p=>p.id===id);
    if(i<0) throw new Error("Product not found");
    if(parts[2]==="stock" && method==="PATCH"){
      d.products[i].stock=Math.max(0,Number(body.stock));saveData(d);return d.products[i];
    }
    if(method==="PUT"){
      if(body.sku && d.products.some((p,idx)=>idx!==i&&p.sku.toLowerCase()===String(body.sku).toLowerCase())) throw new Error("SKU already exists");
      d.products[i]={...d.products[i],...body,id,price:Number(body.price??d.products[i].price),stock:Number(body.stock??d.products[i].stock)};
      saveData(d);return d.products[i];
    }
    if(method==="DELETE"){d.products.splice(i,1);saveData(d);return {ok:true};}
  }

  if(parts[0]==="orders"){
    if(parts.length===1&&method==="GET") return d.orders;
    const o=d.orders.find(x=>x.id===Number(parts[1]));
    if(!o) throw new Error("Order not found");
    if(parts[2]==="status"&&method==="PATCH"){o.status=String(body.status||o.status);saveData(d);return o;}
  }

  if(parts[0]==="customers"&&method==="GET") return d.customers;

  if(parts[0]==="settings"){
    if(method==="GET") return d.settings;
    if(method==="PUT"){d.settings={...d.settings,...body};saveData(d);return d.settings;}
  }
  throw new Error("Unknown request");
}
function showError(err){console.error(err);alert(err.message||"Something went wrong");}


