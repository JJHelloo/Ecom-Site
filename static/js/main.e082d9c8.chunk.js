(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/wrap.f3630f6b.png"},function(e,t,a){e.exports=a.p+"static/media/banner.1da150ad.png"},function(e,t,a){e.exports=a.p+"static/media/wrap-product.76f69293.png"},,,function(e,t,a){e.exports=a.p+"static/media/GatorLogo.ad2debe9.png"},function(e,t,a){e.exports=a.p+"static/media/cart.2efb530f.png"},function(e,t,a){e.exports=a.p+"static/media/GatorWrapsTruck.69e643d7.png"},function(e,t,a){e.exports=a.p+"static/media/contact.8c04d24c.png"},function(e,t,a){e.exports=a.p+"static/media/banner-product.014035c3.png"},function(e,t,a){e.exports=a(37)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/black-wrap.de4c39fa.png"},function(e,t,a){e.exports=a.p+"static/media/gatorbanner.dae3a9bf.png"},function(e,t,a){e.exports=a.p+"static/media/gatorwrap.5e92b2d7.png"},function(e,t,a){e.exports=a.p+"static/media/sign.dbc2dfc1.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),l=(a(23),a(3)),o=a(1),s=a(10),m=a.n(s),u=a(11),d=a.n(u);a(24);var p=e=>{let{cart:t}=e;return r.a.createElement("header",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{src:m.a,alt:"Gator Wraps Logo"})),r.a.createElement("nav",null,r.a.createElement(l.b,{to:"/"},"Home"),r.a.createElement(l.b,{className:"products",to:"/products"},"Products"),r.a.createElement(l.b,{to:"/faq"},"FAQ"),r.a.createElement(l.b,{to:"/about"},"About"),r.a.createElement(l.b,{to:"/contact"},"Contact"),r.a.createElement("div",{className:"cart-icon-container"},r.a.createElement(l.b,{className:"cart",to:"/cart"},r.a.createElement("img",{src:d.a,alt:"Cart"}),t.length>0&&r.a.createElement("div",{className:"cart-counter"},t.reduce((e,t)=>e+t.quantity,0))))))};a(25);var E=()=>r.a.createElement("div",{className:"container"},r.a.createElement("footer",null,r.a.createElement("p",null,"--- Disclaimer: This website is a personal project created for demonstration and portfolio purposes only. While the name and branding may resemble an existing company, it is not affiliated with that company in any way. This project is intended to showcase web development skills and is not meant to represent or imitate the actual company. All products, prices, and information on this site are fictional and intended for illustrative purposes. Thank you for visiting! ---"))),g=a(12),h=a.n(g),f=(a(26),a(5)),b=a.n(f),v=a(6),y=a.n(v),w=a(13),N=a.n(w),x=a(7),q=a.n(x),k=a(14),C=a.n(k);var S=()=>{const e=[h.a,q.a,C.a],[t,a]=Object(n.useState)(0);return Object(n.useEffect)(()=>{const t=setInterval(()=>{a(t=>(t+1)%e.length)},5e3);return()=>clearInterval(t)},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hero-section",style:{backgroundImage:"url(".concat(e[t],")")}},"            "),r.a.createElement("div",{className:"break"}),r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product-text"},r.a.createElement("h3",{className:"lead-text"},"lorem ipsum"),r.a.createElement("p",{className:"product-description"},"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),r.a.createElement("div",{className:"product-images"},r.a.createElement("div",{className:"product-item"},r.a.createElement(l.b,{to:"/products"},r.a.createElement("img",{src:b.a,alt:"Gator Wraps"})),r.a.createElement("span",null,"Wraps")),r.a.createElement("div",{className:"product-item"},r.a.createElement(l.b,{to:"/products"},r.a.createElement("img",{src:y.a,alt:"Gator Banners"})),r.a.createElement("span",null,"Banners")),r.a.createElement("div",{className:"product-item"},r.a.createElement(l.b,{to:"/contact"},r.a.createElement("img",{src:N.a,alt:"Gator Contact"})),r.a.createElement("span",null,"Contact")))),r.a.createElement("div",{className:"break"}))};const F=[{id:1,name:"Classic Black Vehicle Wrap",description:"High-quality black matte wrap for a sleek and modern look.",price:250,image:a(27)},{id:2,name:"Gatior Banner",description:"Vibrant green Gatior Banner.",price:150,image:a(6)},{id:3,name:"Carbon Fiber Texture Wrap",description:"Realistic carbon fiber texture for a high-tech appearance.",price:300,image:a(5)},{id:4,name:"Glossy Metallic Finish Wrap",description:"Shiny metallic finish to stand out on the road.",price:275,image:a(7)},{id:5,name:"Custom Design Banners",description:"Personalized banner with your custom design for a unique look.",price:"Quote",image:a(28)},{id:6,name:"Custom Design Wraps",description:"Personalized wrap with your custom design for a unique look.",price:"Quote",image:a(29)},{id:7,name:"Custom Design Signs",description:"Personalized signs with your custom design for a unique look.",price:"Quote",image:a(30)}];a(31);var I=e=>{let{cart:t,setCart:a}=e;return Object(n.useEffect)(()=>{console.log(t)},[t]),r.a.createElement("div",{className:"products-container"},F.map(e=>r.a.createElement("div",{key:e.id,className:"product-card"},r.a.createElement("img",{src:e.image,alt:e.name}),r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.description),r.a.createElement("p",null,"Price: $",e.price),r.a.createElement("button",{onClick:()=>(e=>{a(t=>{const a=t.findIndex(t=>t.id===e.id);if(a>=0){const e=[...t],n=e[a].quantity||0;return e[a]={...e[a],quantity:n+1},e}return[...t,{...e,quantity:1}]})})(e)},"Add to Cart"))))};a(32);var T=()=>r.a.createElement("div",{className:"about-container"},r.a.createElement("h1",null,"About This Project"),r.a.createElement("p",null,"Welcome to my showcase website, a demonstration of my skills in web development and design. This project is designed to illustrate my capabilities in creating a fully functional e-commerce site, complete with product listings, a shopping cart, and informative pages."),r.a.createElement("h2",null,"My Journey as a Developer"),r.a.createElement("p",null,"I embarked on my journey in web development in 2022. Since then, I have honed my skills in various technologies such as React, JavaScript, CSS, and more. This project is a culmination of my learning and an example of my commitment to crafting engaging and user-friendly web experiences."),r.a.createElement("h2",null,"The Technologies Used"),r.a.createElement("p",null,"This website is built using the following technologies:",r.a.createElement("ul",null,r.a.createElement("li",null,"React - for building the user interface"),r.a.createElement("li",null,"CSS - for styling and layout"),r.a.createElement("li",null,"JavaScript - for interactive elements"))),r.a.createElement("h2",null,"Future Goals"),r.a.createElement("p",null,"My goal is to continue learning and improving my skills in web development. I'm particularly interested in exploring web technologies, and I plan to integrate these into future projects."));a(33);var j=()=>r.a.createElement("div",{className:"faq-container"},r.a.createElement("h1",null,"Frequently Asked Questions"),r.a.createElement("div",{className:"faq"},r.a.createElement("h2",null,"What is [Your Product/Service]?"),r.a.createElement("p",null,"This is a showcase project demonstrating a high-quality product or service.")),r.a.createElement("div",{className:"faq"},r.a.createElement("h2",null,"How Do I Purchase Items?"),r.a.createElement("p",null,"As a showcase site, purchases are not available. This section demonstrates how one might interact with customers' common queries.")),r.a.createElement("div",{className:"faq"},r.a.createElement("h2",null,"What is the Return Policy?"),r.a.createElement("p",null,"In a real e-commerce setting, this section would detail the return policy. For this showcase, it's an example of response to customer inquiries.")));a(34);var P=()=>{return r.a.createElement("div",{className:"contact-container"},r.a.createElement("h1",null,"Contact Us"),r.a.createElement("form",{onSubmit:e=>{e.preventDefault(),alert("Form submitted! (Not really, since this is a showcase.)")}},r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",id:"name",name:"name",required:!0}),r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{type:"email",id:"email",name:"email",required:!0}),r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{id:"message",name:"message",required:!0}),r.a.createElement("button",{type:"submit"},"Submit")))};a(35);var W=e=>{let{cart:t,setCart:a}=e;return r.a.createElement("div",{className:"cart-container"},r.a.createElement("h2",null,"Cart"),t.length>0?t.map(e=>r.a.createElement("div",{key:e.id,className:"cart-item"},r.a.createElement("img",{src:e.image,alt:e.name}),r.a.createElement("div",null,r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.description),r.a.createElement("p",null,"Price: $",e.price),r.a.createElement("p",null,"Quantity: ",e.quantity),r.a.createElement("button",{onClick:()=>(e=>{a(t=>t.filter(t=>t.id!==e))})(e.id)},"Remove from Cart")))):r.a.createElement("p",null,"Your cart is empty."))};a(36);var G=()=>{const[e,t]=Object(n.useState)(()=>{const e=localStorage.getItem("cart");return e?JSON.parse(e):[]});return Object(n.useEffect)(()=>{localStorage.setItem("cart",JSON.stringify(e))},[e]),r.a.createElement(l.a,null,r.a.createElement(p,{cart:e}),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",element:r.a.createElement(S,null)}),r.a.createElement(o.a,{path:"/products",element:r.a.createElement(I,{cart:e,setCart:t})}),r.a.createElement(o.a,{path:"/about",element:r.a.createElement(T,null)}),r.a.createElement(o.a,{path:"/faq",element:r.a.createElement(j,null)}),r.a.createElement(o.a,{path:"/contact",element:r.a.createElement(P,null)}),r.a.createElement(o.a,{path:"/cart",element:r.a.createElement(W,{cart:e,setCart:t})})),r.a.createElement(E,null))};var B=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:c,getTTFB:i}=t;a(e),n(e),r(e),c(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null))),B()}],[[15,1,2]]]);
//# sourceMappingURL=main.e082d9c8.chunk.js.map