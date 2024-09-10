(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{746:function(e,t,s){Promise.resolve().then(s.bind(s,2151))},2151:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var a=s(7437),r=s(2265),l=s(6341),n=s(9966),o=s(9155),i=s(6760),c=s(8889);let d=(0,s(8030).Z)("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);var u=s(6884),h=s(8726);function x(){let[e,t]=(0,r.useState)("#c04d4d"),[s,x]=(0,r.useState)("#54bb92"),[m,b]=(0,r.useState)(5),[g,f]=(0,r.useState)([]),p=(0,r.useCallback)(()=>{f(function(e,t,s){let a=[];for(let r=0;r<s;r++){let l=r/(s-1);a.push(function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,a=1-s,r=parseInt(e.slice(1),16),l=parseInt(t.slice(1),16);return"#".concat((16777216+(Math.round((r>>16&255)*s+(l>>16&255)*a)<<16)+(Math.round((r>>8&255)*s+(l>>8&255)*a)<<8)+Math.round((255&r)*s+(255&l)*a)).toString(16).slice(1))}(e,t,l))}return a}(e,s,m))},[e,s,m]),j=e=>{navigator.clipboard.writeText(e),h.Am.success("Copied ".concat(e," to clipboard"))};return(0,r.useEffect)(()=>{p()},[p]),(0,a.jsxs)("div",{className:"min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800",children:[(0,a.jsx)(l.default,{}),(0,a.jsxs)("main",{className:"flex-grow container mx-auto px-4 py-12",children:[(0,a.jsx)("h1",{className:"text-4xl font-bold text-white mb-8 text-center",children:"Color Mixer"}),(0,a.jsxs)("div",{className:"bg-gray-800 p-8 rounded-xl shadow-lg max-w-2xl mx-auto",children:[(0,a.jsxs)("div",{className:"grid grid-cols gap-6 mb-6",children:[(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("label",{htmlFor:"color-picker-1",className:"block text-lg font-medium text-gray-200 mb-2",children:"Start Color:"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(o.Z,{id:"color-input-1",type:"text",value:e,onChange:e=>t(e.target.value),className:"flex-grow mr-2 bg-gray-700 text-white border-gray-600"}),(0,a.jsx)("input",{id:"color-picker-1",type:"color",value:e,onChange:e=>t(e.target.value),className:"w-10 h-10 p-1 rounded"})]})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("label",{htmlFor:"color-picker-2",className:"block text-lg font-medium text-gray-200 mb-2",children:"End Color:"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(o.Z,{id:"color-input-2",type:"text",value:s,onChange:e=>x(e.target.value),className:"flex-grow mr-2 bg-gray-700 text-white border-gray-600"}),(0,a.jsx)("input",{id:"color-picker-2",type:"color",value:s,onChange:e=>x(e.target.value),className:"w-10 h-10 p-1 rounded"})]})]})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsxs)("label",{htmlFor:"steps",className:"block text-sm font-medium text-gray-300 mb-2",children:["Steps: ",m]}),(0,a.jsx)(c.Z,{id:"steps",min:2,max:10,step:1,value:m,onChange:e=>b(e),className:"w-full"})]}),(0,a.jsxs)("div",{className:"flex justify-center space-x-4",children:[(0,a.jsx)(i.Z,{onClick:()=>{t("#c04d4d"),x("#54bb92"),b(5),f([])},className:"bg-gray-600 hover:bg-gray-700 text-white",children:"Reset"}),(0,a.jsxs)(i.Z,{onClick:()=>{t("#".concat(Math.floor(16777215*Math.random()).toString(16))),x("#".concat(Math.floor(16777215*Math.random()).toString(16)))},className:"bg-green-600 hover:bg-green-700 text-white",children:[(0,a.jsx)(d,{className:"h-5 w-5 mr-2"}),"Random Colors"]})]})]}),g.length>0&&(0,a.jsxs)("div",{className:"bg-gray-800 shadow-lg rounded-lg p-8 mt-4 max-w-2xl mx-auto",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold text-white mb-4",children:"Mixed Colors"}),(0,a.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4",children:g.map((e,t)=>(0,a.jsxs)("div",{className:"bg-gray-700 shadow-md rounded-lg p-4",children:[(0,a.jsx)("div",{className:"w-full h-20 rounded-lg mb-2 relative group",style:{backgroundColor:e},children:(0,a.jsx)(i.Z,{onClick:()=>j(e),className:"absolute top-1 right-1 bg-white/10 hover:bg-white/20 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity",children:(0,a.jsx)(u.Z,{className:"h-4 w-4"})})}),(0,a.jsxs)("div",{className:"space-y-1 text-sm",children:[(0,a.jsxs)("p",{className:"text-white",children:["Hex: ",e]}),(0,a.jsxs)("p",{className:"text-white",children:["RGB: ",function(e){let t=parseInt(e.slice(1),16);return"rgb(".concat(t>>16&255,", ").concat(t>>8&255,", ").concat(255&t,")")}(e)]}),(0,a.jsxs)("p",{className:"text-white",children:["HSL: ",function(e){let t=parseInt(e.slice(1,3),16)/255,s=parseInt(e.slice(3,5),16)/255,a=parseInt(e.slice(5,7),16)/255,r=Math.max(t,s,a),l=Math.min(t,s,a),n=0,o,i=(r+l)/2;if(r===l)n=o=0;else{let e=r-l;switch(o=i>.5?e/(2-r-l):e/(r+l),r){case t:n=(s-a)/e+(s<a?6:0);break;case s:n=(a-t)/e+2;break;case a:n=(t-s)/e+4}n/=6}return"hsl(".concat(Math.round(360*n),", ").concat(Math.round(100*o),"%, ").concat(Math.round(100*i),"%)")}(e)]})]})]},t))})]}),(0,a.jsx)("div",{className:"bg-gray-800 shadow-lg rounded-lg p-8 mt-4 max-w-2xl mx-auto",children:(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{className:"text-xl font-semibold text-white mb-2",children:"About Color Mixer"}),(0,a.jsx)("p",{className:"text-white",children:"This tool allows you to mix two colors and see the gradients between them. You can input hex codes directly or use the color picker to select colors."})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{className:"text-xl font-semibold text-white mb-2",children:"How to Use"}),(0,a.jsx)("p",{className:"text-white",children:'1. Enter hex codes or use the color pickers to select start and end colors.<br /> 2. Adjust the number of steps for the gradient using the slider.<br /> 3. The mixed colors will update automatically.<br /> 4. Click on the copy icon to copy any color\'s hex code.<br /> 5. Use "Random Colors" for inspiration or "Reset" to start over.'})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{className:"text-xl font-semibold text-white mb-2",children:"Tips"}),(0,a.jsx)("p",{className:"text-white",children:"- Use complementary colors for striking gradients.<br /> - Experiment with different step counts to see varied transitions.<br /> - Use the random color feature to discover unexpected color combinations."})]})]})})]}),(0,a.jsx)(n.Z,{})]})}},9966:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var a=s(7437);s(2265);var r=s(7138),l=s(6920),n=s(568);function o(){return(0,a.jsx)("footer",{className:"bg-gray-800 text-white py-8",children:(0,a.jsxs)("div",{className:"container mx-auto px-4",children:[(0,a.jsxs)("div",{className:"flex flex-wrap justify-between",children:[(0,a.jsxs)("div",{className:"w-full md:w-1/3 mb-6 md:mb-0",children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-2",children:"ColorTools"}),(0,a.jsx)("p",{className:"text-gray-400",children:"Empowering designers and developers with cutting-edge color tools."})]}),(0,a.jsxs)("div",{className:"w-full md:w-1/3 mb-6 md:mb-0",children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-2",children:"Quick Links"}),(0,a.jsxs)("ul",{className:"text-gray-400 space-y-2",children:[(0,a.jsx)("li",{children:(0,a.jsx)(r.default,{href:"/",className:"hover:text-blue-400 transition duration-200",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.default,{href:"/about",className:"hover:text-blue-400 transition duration-200",children:"About Us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.default,{href:"/contact",className:"hover:text-blue-400 transition duration-200",children:"Contact"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.default,{href:"/privacy",className:"hover:text-blue-400 transition duration-200",children:"Privacy Policy"})})]})]}),(0,a.jsxs)("div",{className:"w-full md:w-1/3",children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-2",children:"Follow Us"}),(0,a.jsx)("div",{className:"flex space-x-4",children:[n.AYu,n.mdU,n.Zzi,n.hwn].map((e,t)=>(0,a.jsx)("a",{href:"#",className:"text-gray-400 hover:text-blue-400 transition duration-200",children:(0,a.jsx)(l.G,{icon:e,size:"1x"})},t))})]})]}),(0,a.jsxs)("div",{className:"text-center mt-8 text-gray-400",children:["\xa9 ",new Date().getFullYear()," ColorTools. All rights reserved."]})]})})}},6341:function(e,t,s){"use strict";s.d(t,{default:function(){return d}});var a=s(7437),r=s(2265),l=s(7138),n=s(6463),o=s(4817),i=s(4697),c=s(2873);function d(){let[e,t]=(0,r.useState)(!1),[s,d]=(0,r.useState)(""),u=(0,n.useRouter)();return(0,r.useEffect)(()=>{let e=()=>{window.innerWidth>=768&&t(!1)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,a.jsx)("header",{className:"bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg",children:(0,a.jsxs)("div",{className:"container mx-auto px-4 py-4",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)(l.default,{href:"/",className:"text-2xl font-bold text-white",children:[(0,a.jsx)("span",{className:"text-blue-400",children:"Color"}),"Tools"]}),(0,a.jsxs)("nav",{className:"hidden md:flex space-x-6",children:[(0,a.jsx)(l.default,{href:"/categories",className:"text-gray-300 hover:text-blue-400 transition duration-200",children:"Categories"}),(0,a.jsx)(l.default,{href:"/about",className:"text-gray-300 hover:text-blue-400 transition duration-200",children:"About"}),(0,a.jsx)(l.default,{href:"/contact",className:"text-gray-300 hover:text-blue-400 transition duration-200",children:"Contact"})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),s.trim()&&u.push("/search?q=".concat(encodeURIComponent(s)))},className:"relative",children:[(0,a.jsx)("input",{type:"text",placeholder:"Search tools...",value:s,onChange:e=>d(e.target.value),className:"pl-10 pr-4 py-2 rounded-full bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"}),(0,a.jsx)("button",{type:"submit",className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",children:(0,a.jsx)(o.Z,{size:20})})]}),(0,a.jsx)("button",{className:"md:hidden text-gray-300 hover:text-white transition duration-200",onClick:()=>{t(!e)},"aria-label":"Toggle menu",children:e?(0,a.jsx)(i.Z,{size:24}):(0,a.jsx)(c.Z,{size:24})})]})]}),e&&(0,a.jsxs)("nav",{className:"mt-4 md:hidden",children:[(0,a.jsx)(l.default,{href:"/categories",className:"block py-2 text-gray-300 hover:text-blue-400 transition duration-200",children:"Categories"}),(0,a.jsx)(l.default,{href:"/about",className:"block py-2 text-gray-300 hover:text-blue-400 transition duration-200",children:"About"}),(0,a.jsx)(l.default,{href:"/contact",className:"block py-2 text-gray-300 hover:text-blue-400 transition duration-200",children:"Contact"})]})]})})}},6760:function(e,t,s){"use strict";var a=s(7437);s(2265),t.Z=e=>{let{className:t="",children:s,...r}=e;return(0,a.jsx)("button",{className:"bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 ".concat(t),...r,children:s})}},9155:function(e,t,s){"use strict";var a=s(7437);s(2265),t.Z=e=>{let{className:t="",...s}=e;return(0,a.jsx)("input",{className:"border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ".concat(t),...s})}},8889:function(e,t,s){"use strict";var a=s(7437),r=s(2265);t.Z=e=>{let{min:t,max:s,step:l,value:n,onChange:o,className:i=""}=e,[c,d]=(0,r.useState)(!1),u=(0,r.useRef)(null),h=(n-t)/(s-t)*100,x=()=>{d(!1)},m=e=>{if(c&&u.current){let a=u.current.getBoundingClientRect();o(Math.round((Math.min(Math.max((e.clientX-a.left)/a.width,0),1)*(s-t)+t)/l)*l)}};return(0,r.useEffect)(()=>(document.addEventListener("mousemove",m),document.addEventListener("mouseup",x),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",x)}),[c]),(0,a.jsxs)("div",{ref:u,className:"relative h-2 bg-gray-700 rounded-full cursor-pointer ".concat(i),onMouseDown:e=>{e.preventDefault(),d(!0)},children:[(0,a.jsx)("div",{className:"absolute h-full bg-blue-600 rounded-full",style:{width:"".concat(h,"%")}}),(0,a.jsx)("div",{className:"absolute w-4 h-4 bg-white rounded-full shadow -mt-1 -ml-2",style:{left:"".concat(h,"%")}})]})}}},function(e){e.O(0,[958,490,920,202,971,23,744],function(){return e(e.s=746)}),_N_E=e.O()}]);