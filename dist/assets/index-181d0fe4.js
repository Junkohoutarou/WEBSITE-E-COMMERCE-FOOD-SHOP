import{G as o,c,j as t,T as a,aB as m,R as d,aC as x}from"./index-95793c1e.js";import{b as h}from"./index.esm-9e73d95f.js";function j(e){return o({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M255.9 456c31.1 0 48.1-22 48.1-53h-96.3c0 31 17 53 48.2 53zM412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.4-11-24.7-24.4-24.6-13.4-.2-24.4 11.2-24.4 24.6v2.9c0 3.7-2.6 5-6.2 5.9-38.5 9.1-79.6 46.5-79.6 139.8 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h280.1c16.3 0 25.7-18.8 15.8-31.8z"}}]})(e)}function z(e){return o({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"}}]})(e)}function f(e){return o({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M228.9 79.9L51.8 403.1C40.6 423.3 55.5 448 78.9 448h354.3c23.3 0 38.2-24.7 27.1-44.9L283.1 79.9c-11.7-21.2-42.5-21.2-54.2 0zM273.6 214L270 336h-28l-3.6-122h35.2zM256 402.4c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4 19.1 8.1 19.1 18.4-8.4 18.4-19.1 18.4z"}}]})(e)}const g=e=>{const{type:s="",message:i=""}=e,[n,r]=c.useState(!0),l=s===a.SUCCESS?"notification--item-success":s===a.ERROR?"notification--item-error":"notification--item-warning";return c.useEffect(()=>{setTimeout(()=>{r(!1)},3e3)},[]),t.jsx(t.Fragment,{children:n&&t.jsx("section",{style:{zIndex:1e4},className:"shadow-xl bg-white h-16 w-68 relative rounded overflow-hidden border-1 border-solid border-gray-200 wrap--notification--item",children:t.jsxs("section",{className:`p-4 ${l} flex flex-row justify-start items-center h-full space-x-4`,children:[s===a.SUCCESS&&t.jsxs(t.Fragment,{children:[t.jsx(m,{color:"#A6CF98",size:36}),t.jsx("p",{className:"text-sm font-medium",children:i})]}),s===a.ERROR&&t.jsxs(t.Fragment,{children:[t.jsx(h,{color:"#ff355b",size:36}),t.jsx("p",{className:"text-sm font-medium",children:i})]}),s===a.WARNING&&t.jsxs(t.Fragment,{children:[t.jsx(f,{color:"#FFC021",size:36}),t.jsx("p",{className:"text-sm font-medium",children:i})]})]})})})},C=()=>{const{data:e}=d(x);return console.log(e),t.jsx("article",{className:"absolute right-2 top-2 z-50 text-black flex flex-col space-y-4",children:e.length>0&&e.map((s,i)=>t.jsx(g,{type:s.type,message:s.message},i))})};export{z as I,C as N,j as a};
