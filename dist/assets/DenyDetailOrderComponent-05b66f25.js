import{j as e,e as f,$ as h,a as j,c as m,R as y,L as D}from"./index-95793c1e.js";import{d as E}from"./dayjs.min-30b80ddb.js";import{g as R,d as x,M as b}from"./hook-f4e73b85.js";const _=()=>{const{t}=f();return e.jsx("section",{className:"flex flex-row pb-2 border-b-1 border-solid border-gray-500",children:e.jsx("div",{className:"text-2xl font-bold",children:t("DETAIL_ORDERED.DENY_DETAIL")})})},g=()=>{const{t}=f(),{state:o,contents:l}=h(R);return console.log(o),console.log(l),e.jsxs("section",{children:[e.jsxs("div",{className:"flex flex-row w-full font-bold",children:[e.jsx("div",{className:"w-2/5 flex justify-center items-center",children:t("SELLER_VIEW.LIST_PRODUCT.ORDER_ID")}),e.jsx("div",{className:"w-2/5 flex justify-center items-center",children:t("SELLER_VIEW.LIST_PRODUCT.CREATE_AT")}),e.jsx("div",{className:"w-1/6 flex justify-center items-center",children:t("SELLER_VIEW.LIST_PRODUCT.BUYER")}),e.jsx("div",{className:"w-1/6 flex justify-center items-center",children:t("SELLER_VIEW.LIST_PRODUCT.STATUS")})]}),o==="loading"&&e.jsx("p",{children:"Loading..."}),o==="hasValue"&&e.jsx(e.Fragment,{children:l.data.map(n=>n.status==="deny"?e.jsx(L,{order_id:n.order_id,order_items:n.order_items,price:n.price,status:n.status,buyer:n.buyer},n.order_id):null)})]})},L=t=>{const{t:o}=f(),{order_id:l,price:n,status:c,buyer:d="",order_items:s}=t,r=j(x),i=()=>{let a=`${s[0].title}: ${s[0].quantity}`;for(let u in s)if(console.log(u),u!=0){const p=s[u];a=a+`, ${p.title}: ${p.quantity}`}r(u=>({...u,open:!0,data:{order_id:l,buyer:d.username,status:c,address:`${d.province}, ${d.district}, ${d.ward}`,products:a,price:n}}))};return e.jsxs("div",{onClick:a=>{a.preventDefault(),i()},className:"product--list--item flex flex-row w-full hover-cursor hover-box  py-6 border-solid border-1 rounded border-black mt-4 shadow ",children:[e.jsx("div",{className:"w-2/5 flex justify-center items-center",children:l}),e.jsx("div",{className:"w-2/5 flex justify-center items-center",children:E("2023-11-21T15:12:15.000Z").format("HH:mm:ss - DD/MM/YYYY")}),e.jsx("div",{className:"w-1/6 flex justify-center items-center",children:d.username}),e.jsxs("div",{className:"w-1/6 flex justify-center items-center",children:[c==="ordered"&&e.jsx("p",{style:{color:"#9ADE7B"},className:"text-base font-bold",children:o("DETAIL_ORDERED.ORDERED")}),c==="deny"&&e.jsx("p",{style:{color:"#DF2E38"},className:"text-base font-bold",children:o("DETAIL_ORDERED.DENY")}),c==="processing"&&e.jsx("p",{style:{color:"#A9A9A9"},className:"text-base font-bold",children:o("DETAIL_ORDERED.PROCESSING")})]})]})},w=()=>{const t=m.useRef(null),o=y(x),l=D(x),{handleDenyOrder:n}=b.useDenyOrder(),{handleAcceptOrder:c}=b.useAcceptOrder();m.useEffect(()=>{var r;o.open&&!((r=t.current)!=null&&r.open)?t.current.showModal():!o.open&&t.current.open&&t.current.close()},[o.open]);const d=()=>{l()},{data:s}=o;return e.jsx("dialog",{ref:t,className:"overflow-hidden rounded-2xl ",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},onClick:r=>{r.preventDefault();const i=r.currentTarget.getBoundingClientRect();(r.clientX<i.left||r.clientX>i.right||r.clientY<i.top||r.clientY>i.bottom)&&d()},children:s?e.jsxs("section",{className:"w-116 h-72  p-4 flex flex-col justify-between",children:[e.jsx("div",{className:"text-2xl flex justify-center items-center border-b-1 border-gray-200 pb-2",children:"DETAIL"}),e.jsxs("section",{className:"h-full flex flex-col space-y-2 pt-4 border-b-1 border-solid border-gray-300 px-4",children:[e.jsxs("div",{children:["Buyer: ",s.buyer]}),e.jsxs("div",{children:["Address: ",s.address]}),e.jsxs("div",{children:["Product: ",s.products]}),e.jsxs("div",{children:["Price: ",s.price||""]})]}),e.jsxs("div",{className:"flex flex-row justify-around space-x-2 mt-4",children:[e.jsx("button",{onClick:r=>{r.preventDefault(),d()},className:"grow p-2 border-1 border-solid rounded border-gray-400 font-bold text-base bg-white",children:"Close"}),e.jsx("button",{onClick:r=>{r.preventDefault(),n(s.order_id)},className:"grow p-2 border-1 border-solid rounded border-gray-400 font-bold text-base",style:{color:`${s.status==="deny"?"white":"#DF2E38"}`,backgroundColor:`${s.status==="deny"?"#DF2E38":"white"}`},children:"Deny"}),e.jsx("button",{onClick:r=>{r.preventDefault(),c(s.order_id)},className:"grow p-2 border-1 border-solid border-gray-400 rounded font-bold text-base",style:{color:`${s.status==="ordered"?"white":"#9ADE7B"}`,backgroundColor:`${s.status==="ordered"?"#54B435":"white"}`},children:s.status==="ordered"?"Ordered":"Accept"})]})]}):e.jsx("p",{children:"Loading..."})})},C=()=>e.jsxs(e.Fragment,{children:[e.jsx(w,{}),e.jsxs("article",{className:"mt-12  space-y-6",children:[e.jsx(_,{}),e.jsx(g,{})]})]});export{C as default};