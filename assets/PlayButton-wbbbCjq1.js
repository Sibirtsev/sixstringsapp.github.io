import{r as u,j as o}from"./index-3yvjuENy.js";const y=({label:r,playFn:i,icon:a,disabled:e,className:l,title:s})=>{const[t,n]=u.useState(!1),c=async()=>{if(!(e||t)){n(!0);try{await i()}finally{setTimeout(()=>n(!1),1200)}}};return o.jsxs("button",{type:"button",className:`relative flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors duration-150
        ${t?"bg-green-500 text-white animate-pulse":"bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"}
        ${e||t?"opacity-60 cursor-not-allowed":"hover:bg-green-100 dark:hover:bg-green-600"}
        ${l||""}`,onClick:c,disabled:e||t,title:s||"","aria-label":s||r,children:[a&&o.jsx("span",{className:"mr-2",children:a}),t?"▶️":""," ",r]})};export{y as P};
