(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{2772:function(e,t,s){Promise.resolve().then(s.bind(s,4827))},6780:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});let r=(0,s(8030).Z)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},4827:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var r=s(7437),a=s(2265),l=s(6780),n=s(6341),i=s(9966),o=s(7992),c=s(9155),d=s(6760);function u(){let[e,t]=(0,a.useState)(""),[s,u]=(0,a.useState)(""),[x,h]=(0,a.useState)(""),[m,b]=(0,a.useState)(""),[f,g]=(0,a.useState)(""),j=(e,t,s)=>{let r=Math.max(e/=255,t/=255,s/=255),a=Math.min(e,t,s),l=r-a,n=0;if(r!==a){switch(r){case e:n=(t-s)/l+(t<s?6:0);break;case t:n=(s-e)/l+2;break;case s:n=(e-t)/l+4}n/=6}return{h:Math.round(360*n),s:Math.round(100*(0===r?0:l/r)),v:Math.round(100*r)}};return(0,r.jsxs)("div",{className:"min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800",children:[(0,r.jsx)(n.default,{}),(0,r.jsxs)("main",{className:"flex-grow container mx-auto px-4 py-12",children:[(0,r.jsx)("h1",{className:"text-4xl font-bold text-white mb-8 text-center",children:"RGB to HSV Converter"}),(0,r.jsxs)("div",{className:"bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mb-8 mx-auto",children:[(0,r.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"red-input",className:"block text-sm font-medium text-gray-300 mb-2",children:"Red (0-255)"}),(0,r.jsx)(c.Z,{id:"red-input",type:"number",min:"0",max:"255",value:e,onChange:e=>t(e.target.value),className:"w-full bg-gray-700 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"green-input",className:"block text-sm font-medium text-gray-300 mb-2",children:"Green (0-255)"}),(0,r.jsx)(c.Z,{id:"green-input",type:"number",min:"0",max:"255",value:s,onChange:e=>u(e.target.value),className:"w-full bg-gray-700 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"blue-input",className:"block text-sm font-medium text-gray-300 mb-2",children:"Blue (0-255)"}),(0,r.jsx)(c.Z,{id:"blue-input",type:"number",min:"0",max:"255",value:x,onChange:e=>h(e.target.value),className:"w-full bg-gray-700 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500"})]})]}),(0,r.jsx)(d.Z,{onClick:()=>{g("");let t=parseInt(e),r=parseInt(s),a=parseInt(x);if(isNaN(t)||t<0||t>255||isNaN(r)||r<0||r>255||isNaN(a)||a<0||a>255){g("Please enter valid RGB values (0-255).");return}let{h:l,s:n,v:i}=j(t,r,a);b("hsv(".concat(l,"\xb0, ").concat(n,"%, ").concat(i,"%)"))},className:"w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Convert"}),f&&(0,r.jsxs)(o.bZ,{className:"mt-4",children:[(0,r.jsx)(l.Z,{className:"h-4 w-4"}),(0,r.jsx)(o.Cd,{children:"Error"}),(0,r.jsx)(o.X,{children:f})]}),m&&(0,r.jsxs)("div",{className:"mt-6",children:[(0,r.jsx)("h2",{className:"text-xl font-semibold text-white mb-2",children:"Result:"}),(0,r.jsx)("div",{className:"bg-gray-700 p-4 rounded-lg",children:(0,r.jsxs)("p",{className:"text-white",id:"hsv-value",children:["HSV: ",m]})}),(0,r.jsx)("div",{id:"color-palette",className:"mt-4 w-full h-20 rounded-lg",style:{backgroundColor:"rgb(".concat(e,", ").concat(s,", ").concat(x,")")}})]})]}),(0,r.jsx)("div",{className:"bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto",children:(0,r.jsxs)("div",{className:"mt-8",children:[(0,r.jsxs)("section",{className:"mb-6",children:[(0,r.jsx)("h2",{className:"text-xl font-semibold text-white mb-2",children:"About RGB to HSV Converter"}),(0,r.jsx)("p",{className:"text-white",children:"This tool allows you to convert RGB (Red, Green, Blue) color values to their HSV (Hue, Saturation, Value) equivalent. HSV is an alternative representation of the RGB color model, designed to more closely align with the way human vision perceives color-making attributes."})]}),(0,r.jsxs)("section",{className:"mb-6",children:[(0,r.jsx)("h2",{className:"text-xl font-semibold text-white mb-2",children:"How to Use"}),(0,r.jsxs)("p",{className:"text-white",children:["1. Enter Red, Green, and Blue values between 0 and 255.",(0,r.jsx)("br",{}),'2. Click the "Convert" button to see the HSV equivalent and a color preview.',(0,r.jsx)("br",{}),"3. The result will show the Hue (0-360\xb0), Saturation (0-100%), and Value (0-100%)."]})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:"text-xl font-semibold text-white mb-2",children:"Tips"}),(0,r.jsxs)("p",{className:"text-white",children:["- RGB values range from 0 to 255, representing the intensity of each color component.",(0,r.jsx)("br",{}),"- Hue is represented as a degree on the color wheel from 0 to 360. 0 is red, 120 is green, 240 is blue.",(0,r.jsx)("br",{}),"- Saturation is the intensity of the color from 0% (gray) to 100% (full color).",(0,r.jsx)("br",{}),"- Value represents the brightness of the color from 0% (black) to 100% (full brightness)."]})]})]})})]}),(0,r.jsx)(i.Z,{})]})}},9966:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var r=s(7437);s(2265);var a=s(7138),l=s(6920),n=s(568);function i(){return(0,r.jsx)("footer",{className:"bg-gray-800 text-white py-8",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsxs)("div",{className:"flex flex-wrap justify-between",children:[(0,r.jsxs)("div",{className:"w-full md:w-1/3 mb-6 md:mb-0",children:[(0,r.jsx)("h3",{className:"text-xl font-bold mb-2",children:"ColorTools"}),(0,r.jsx)("p",{className:"text-gray-400",children:"Empowering designers and developers with cutting-edge color tools."})]}),(0,r.jsxs)("div",{className:"w-full md:w-1/3 mb-6 md:mb-0",children:[(0,r.jsx)("h3",{className:"text-xl font-bold mb-2",children:"Quick Links"}),(0,r.jsxs)("ul",{className:"text-gray-400 space-y-2",children:[(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/",className:"hover:text-blue-400 transition duration-200",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/about",className:"hover:text-blue-400 transition duration-200",children:"About Us"})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/contact",className:"hover:text-blue-400 transition duration-200",children:"Contact"})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/privacy",className:"hover:text-blue-400 transition duration-200",children:"Privacy Policy"})})]})]}),(0,r.jsxs)("div",{className:"w-full md:w-1/3",children:[(0,r.jsx)("h3",{className:"text-xl font-bold mb-2",children:"Follow Us"}),(0,r.jsx)("div",{className:"flex space-x-4",children:[n.AYu,n.mdU,n.Zzi,n.hwn].map((e,t)=>(0,r.jsx)("a",{href:"#",className:"text-gray-400 hover:text-blue-400 transition duration-200",children:(0,r.jsx)(l.G,{icon:e,size:"1x"})},t))})]})]}),(0,r.jsxs)("div",{className:"text-center mt-8 text-gray-400",children:["\xa9 ",new Date().getFullYear()," ColorTools. All rights reserved."]})]})})}},6341:function(e,t,s){"use strict";s.d(t,{default:function(){return d}});var r=s(7437),a=s(2265),l=s(7138),n=s(6463),i=s(4817),o=s(4697),c=s(2873);function d(){let[e,t]=(0,a.useState)(!1),[s,d]=(0,a.useState)(""),u=(0,n.useRouter)();return(0,a.useEffect)(()=>{let e=()=>{window.innerWidth>=768&&t(!1)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.jsx)("header",{className:"bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg",children:(0,r.jsxs)("div",{className:"container mx-auto px-4 py-4",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)(l.default,{href:"/",className:"text-2xl font-bold text-white",children:[(0,r.jsx)("span",{className:"text-blue-400",children:"Color"}),"Tools"]}),(0,r.jsxs)("nav",{className:"hidden md:flex space-x-6",children:[(0,r.jsx)(l.default,{href:"/categories",className:"text-gray-300 hover:text-blue-400 transition duration-200",children:"Categories"}),(0,r.jsx)(l.default,{href:"/about",className:"text-gray-300 hover:text-blue-400 transition duration-200",children:"About"}),(0,r.jsx)(l.default,{href:"/contact",className:"text-gray-300 hover:text-blue-400 transition duration-200",children:"Contact"})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault(),s.trim()&&u.push("/search?q=".concat(encodeURIComponent(s)))},className:"relative",children:[(0,r.jsx)("input",{type:"text",placeholder:"Search tools...",value:s,onChange:e=>d(e.target.value),className:"pl-10 pr-4 py-2 rounded-full bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"}),(0,r.jsx)("button",{type:"submit",className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",children:(0,r.jsx)(i.Z,{size:20})})]}),(0,r.jsx)("button",{className:"md:hidden text-gray-300 hover:text-white transition duration-200",onClick:()=>{t(!e)},"aria-label":"Toggle menu",children:e?(0,r.jsx)(o.Z,{size:24}):(0,r.jsx)(c.Z,{size:24})})]})]}),e&&(0,r.jsxs)("nav",{className:"mt-4 md:hidden",children:[(0,r.jsx)(l.default,{href:"/categories",className:"block py-2 text-gray-300 hover:text-blue-400 transition duration-200",children:"Categories"}),(0,r.jsx)(l.default,{href:"/about",className:"block py-2 text-gray-300 hover:text-blue-400 transition duration-200",children:"About"}),(0,r.jsx)(l.default,{href:"/contact",className:"block py-2 text-gray-300 hover:text-blue-400 transition duration-200",children:"Contact"})]})]})})}},6760:function(e,t,s){"use strict";var r=s(7437);s(2265),t.Z=e=>{let{className:t="",children:s,...a}=e;return(0,r.jsx)("button",{className:"bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 ".concat(t),...a,children:s})}},9155:function(e,t,s){"use strict";var r=s(7437);s(2265),t.Z=e=>{let{className:t="",...s}=e;return(0,r.jsx)("input",{className:"border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ".concat(t),...s})}},7992:function(e,t,s){"use strict";s.d(t,{Cd:function(){return l},X:function(){return n},bZ:function(){return a}});var r=s(7437);function a(e){let{children:t,className:s=""}=e;return(0,r.jsx)("div",{className:"bg-red-500 text-white p-4 rounded-lg ".concat(s),children:t})}function l(e){let{children:t}=e;return(0,r.jsx)("strong",{className:"font-bold",children:t})}function n(e){let{children:t}=e;return(0,r.jsx)("p",{children:t})}s(2265)}},function(e){e.O(0,[958,490,920,971,23,744],function(){return e(e.s=2772)}),_N_E=e.O()}]);