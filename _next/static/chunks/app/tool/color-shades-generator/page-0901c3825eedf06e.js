(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[898],{3090:function(e,t,s){Promise.resolve().then(s.bind(s,3548))},3548:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var a=s(7437),r=s(2265),l=s(6341),n=s(9966),i=s(9155),o=s(8889);function c(){let[e,t]=(0,r.useState)("#3da013"),[s,c]=(0,r.useState)(10),[d,h]=(0,r.useState)([]),[u,x]=(0,r.useState)(null),m=(0,r.useCallback)((e,t)=>{var s;let[a,r,l]=[parseInt((s=e).slice(1,3),16),parseInt(s.slice(3,5),16),parseInt(s.slice(5,7),16)];return Array.from({length:t},(e,s)=>{let n=s/(t-1),i=Math.round(a*(1-n)+255*n),o=Math.round(r*(1-n)+255*n),c=Math.round(l*(1-n)+255*n);return{hex:"#".concat((16777216+(i<<16)+(o<<8)+c).toString(16).slice(1)),rgb:[i,o,c],hsv:function(e,t,s){let a=Math.max(e/=255,t/=255,s/=255),r=Math.min(e,t,s),l=a-r,n=0;if(a!==r){switch(a){case e:n=(t-s)/l+(t<s?6:0);break;case t:n=(s-e)/l+2;break;case s:n=(e-t)/l+4}n/=6}return[Math.round(360*n),Math.round(100*(0===a?0:l/a)),Math.round(100*a)]}(i,o,c),hsl:function(e,t,s){let a=Math.max(e/=255,t/=255,s/=255),r=Math.min(e,t,s),l=0,n,i=(a+r)/2;if(a===r)l=n=0;else{let o=a-r;switch(n=i>.5?o/(2-a-r):o/(a+r),a){case e:l=(t-s)/o+(t<s?6:0);break;case t:l=(s-e)/o+2;break;case s:l=(e-t)/o+4}l/=6}return[Math.round(360*l),Math.round(100*n),Math.round(100*i)]}(i,o,c)}})},[]);return(0,r.useEffect)(()=>{let t=m(e,s);h(t),x(t[Math.floor(t.length/2)])},[e,s,m]),(0,a.jsxs)("div",{className:"min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800",children:[(0,a.jsx)(l.default,{}),(0,a.jsxs)("main",{className:"flex-grow container mx-auto px-4 py-12",children:[(0,a.jsx)("h1",{className:"text-4xl font-bold text-white mb-8 text-center",children:"Color Shades Generator"}),(0,a.jsxs)("div",{className:"bg-gray-800 p-8 rounded-xl shadow-lg max-w-2xl mx-auto",children:[(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("label",{htmlFor:"color-picker",className:"block text-lg font-medium text-gray-200 mb-2",children:"Enter Color:"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(i.Z,{id:"color-input",type:"text",value:e,onChange:e=>t(e.target.value),className:"flex-grow mr-2 bg-gray-700 text-white border-gray-600"}),(0,a.jsx)("input",{id:"color-picker",type:"color",value:e,onChange:e=>t(e.target.value),className:"w-10 h-10 p-1 rounded"})]})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsxs)("label",{htmlFor:"shade-slider",className:"block text-lg font-medium text-gray-200 mb-2",children:["Shade Count: ",s]}),(0,a.jsx)(o.Z,{id:"shade-slider",min:2,max:15,step:1,value:s,onChange:c,className:"w-full"})]}),(0,a.jsx)("div",{className:"flex mb-6",id:"shades-container",children:d.map((e,t)=>(0,a.jsx)("div",{className:"flex-1 h-10 shade",style:{backgroundColor:e.hex},onClick:()=>x(e)},t))}),u&&(0,a.jsxs)("div",{className:"mt-6",children:[(0,a.jsx)("h2",{className:"text-lg font-semibold text-gray-200",children:"Selected Shade:"}),(0,a.jsxs)("div",{className:"flex mt-2",children:[(0,a.jsx)("div",{className:"w-1/3 h-32 rounded-md",style:{backgroundColor:u.hex}}),(0,a.jsxs)("div",{className:"w-2/3 ml-4 text-gray-300",children:[(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsx)("strong",{children:"HEX:"})," ",u.hex]}),(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsx)("strong",{children:"RGB:"})," rgb(",u.rgb.join(", "),")"]}),(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsx)("strong",{children:"HSL:"})," hsl(",u.hsl.join(", "),")"]}),(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsx)("strong",{children:"HSV:"})," hsv(",u.hsv.join(", "),")"]})]})]})]})]}),(0,a.jsx)("div",{className:"bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto mt-4",children:(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsxs)("section",{className:"mb-6",children:[(0,a.jsx)("h2",{className:"text-xl font-semibold text-white mb-2",children:"About Color Shades Generator"}),(0,a.jsx)("p",{className:"text-white",children:"The Color Shades Generator helps you create different shades of a base color. You can generate a range of lighter or darker shades by adjusting the shade count, making it a perfect tool for designers and developers who need flexible color options."})]}),(0,a.jsxs)("section",{className:"mb-6",children:[(0,a.jsx)("h2",{className:"text-xl font-semibold text-white mb-2",children:"How to Use"}),(0,a.jsxs)("p",{className:"text-white",children:["1. Choose a base color using the color picker or enter its hex code.",(0,a.jsx)("br",{}),"2. Adjust the number of shades using the slider to generate a desired range of color variations.",(0,a.jsx)("br",{}),"3. Each shade will be displayed with its hex code, which you can use in your design projects."]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{className:"text-xl font-semibold text-white mb-2",children:"Tips"}),(0,a.jsxs)("p",{className:"text-white",children:["- The base color is the starting point for generating shades.",(0,a.jsx)("br",{}),"- Increasing the shade count will provide more nuanced color variations.",(0,a.jsx)("br",{}),"- You can use the generated hex codes directly in your CSS to enhance visual consistency across your designs."]})]})]})})]}),(0,a.jsx)(n.Z,{})]})}},9966:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var a=s(7437);s(2265);var r=s(7138),l=s(6920),n=s(568);function i(){return(0,a.jsx)("footer",{className:"bg-gray-800 text-white py-8",children:(0,a.jsxs)("div",{className:"container mx-auto px-4",children:[(0,a.jsxs)("div",{className:"flex flex-wrap justify-between",children:[(0,a.jsxs)("div",{className:"w-full md:w-1/3 mb-6 md:mb-0",children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-2",children:"ColorTools"}),(0,a.jsx)("p",{className:"text-gray-400",children:"Empowering designers and developers with cutting-edge color tools."})]}),(0,a.jsxs)("div",{className:"w-full md:w-1/3 mb-6 md:mb-0",children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-2",children:"Quick Links"}),(0,a.jsxs)("ul",{className:"text-gray-400 space-y-2",children:[(0,a.jsx)("li",{children:(0,a.jsx)(r.default,{href:"/",className:"hover:text-blue-400 transition duration-200",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.default,{href:"/about",className:"hover:text-blue-400 transition duration-200",children:"About Us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.default,{href:"/contact",className:"hover:text-blue-400 transition duration-200",children:"Contact"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.default,{href:"/privacy",className:"hover:text-blue-400 transition duration-200",children:"Privacy Policy"})})]})]}),(0,a.jsxs)("div",{className:"w-full md:w-1/3",children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-2",children:"Follow Us"}),(0,a.jsx)("div",{className:"flex space-x-4",children:[n.AYu,n.mdU,n.Zzi,n.hwn].map((e,t)=>(0,a.jsx)("a",{href:"#",className:"text-gray-400 hover:text-blue-400 transition duration-200",children:(0,a.jsx)(l.G,{icon:e,size:"1x"})},t))})]})]}),(0,a.jsxs)("div",{className:"text-center mt-8 text-gray-400",children:["\xa9 ",new Date().getFullYear()," ColorTools. All rights reserved."]})]})})}},6341:function(e,t,s){"use strict";s.d(t,{default:function(){return d}});var a=s(7437),r=s(2265),l=s(7138),n=s(6463),i=s(4817),o=s(4697),c=s(2873);function d(){let[e,t]=(0,r.useState)(!1),[s,d]=(0,r.useState)(""),h=(0,n.useRouter)();return(0,r.useEffect)(()=>{let e=()=>{window.innerWidth>=768&&t(!1)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,a.jsx)("header",{className:"bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg",children:(0,a.jsxs)("div",{className:"container mx-auto px-4 py-4",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)(l.default,{href:"/",className:"text-2xl font-bold text-white",children:[(0,a.jsx)("span",{className:"text-blue-400",children:"Color"}),"Tools"]}),(0,a.jsxs)("nav",{className:"hidden md:flex space-x-6",children:[(0,a.jsx)(l.default,{href:"/categories",className:"text-gray-300 hover:text-blue-400 transition duration-200",children:"Categories"}),(0,a.jsx)(l.default,{href:"/about",className:"text-gray-300 hover:text-blue-400 transition duration-200",children:"About"}),(0,a.jsx)(l.default,{href:"/contact",className:"text-gray-300 hover:text-blue-400 transition duration-200",children:"Contact"})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),s.trim()&&h.push("/search?q=".concat(encodeURIComponent(s)))},className:"relative",children:[(0,a.jsx)("input",{type:"text",placeholder:"Search tools...",value:s,onChange:e=>d(e.target.value),className:"pl-10 pr-4 py-2 rounded-full bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"}),(0,a.jsx)("button",{type:"submit",className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",children:(0,a.jsx)(i.Z,{size:20})})]}),(0,a.jsx)("button",{className:"md:hidden text-gray-300 hover:text-white transition duration-200",onClick:()=>{t(!e)},"aria-label":"Toggle menu",children:e?(0,a.jsx)(o.Z,{size:24}):(0,a.jsx)(c.Z,{size:24})})]})]}),e&&(0,a.jsxs)("nav",{className:"mt-4 md:hidden",children:[(0,a.jsx)(l.default,{href:"/categories",className:"block py-2 text-gray-300 hover:text-blue-400 transition duration-200",children:"Categories"}),(0,a.jsx)(l.default,{href:"/about",className:"block py-2 text-gray-300 hover:text-blue-400 transition duration-200",children:"About"}),(0,a.jsx)(l.default,{href:"/contact",className:"block py-2 text-gray-300 hover:text-blue-400 transition duration-200",children:"Contact"})]})]})})}},9155:function(e,t,s){"use strict";var a=s(7437);s(2265),t.Z=e=>{let{className:t="",...s}=e;return(0,a.jsx)("input",{className:"border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ".concat(t),...s})}},8889:function(e,t,s){"use strict";var a=s(7437),r=s(2265);t.Z=e=>{let{min:t,max:s,step:l,value:n,onChange:i,className:o=""}=e,[c,d]=(0,r.useState)(!1),h=(0,r.useRef)(null),u=(n-t)/(s-t)*100,x=()=>{d(!1)},m=e=>{if(c&&h.current){let a=h.current.getBoundingClientRect();i(Math.round((Math.min(Math.max((e.clientX-a.left)/a.width,0),1)*(s-t)+t)/l)*l)}};return(0,r.useEffect)(()=>(document.addEventListener("mousemove",m),document.addEventListener("mouseup",x),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",x)}),[c]),(0,a.jsxs)("div",{ref:h,className:"relative h-2 bg-gray-700 rounded-full cursor-pointer ".concat(o),onMouseDown:e=>{e.preventDefault(),d(!0)},children:[(0,a.jsx)("div",{className:"absolute h-full bg-blue-600 rounded-full",style:{width:"".concat(u,"%")}}),(0,a.jsx)("div",{className:"absolute w-4 h-4 bg-white rounded-full shadow -mt-1 -ml-2",style:{left:"".concat(u,"%")}})]})}}},function(e){e.O(0,[958,490,920,971,23,744],function(){return e(e.s=3090)}),_N_E=e.O()}]);