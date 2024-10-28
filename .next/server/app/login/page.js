(()=>{var e={};e.id=626,e.ids=[626],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},80326:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var s=r(3003),a=r(14293),i=r(66550),o=r.n(i),l=r(86979),n={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);r.d(t,n);let d=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,89959)),"C:\\Users\\shama\\Desktop\\New folder\\news-app\\app\\login\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,10214)),"C:\\Users\\shama\\Desktop\\New folder\\news-app\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,52075,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\shama\\Desktop\\New folder\\news-app\\app\\login\\page.js"],u={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},18966:(e,t,r)=>{Promise.resolve().then(r.bind(r,33521)),Promise.resolve().then(r.bind(r,60134)),Promise.resolve().then(r.bind(r,29394))},81662:(e,t,r)=>{Promise.resolve().then(r.bind(r,80638))},92119:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,92639,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23)),Promise.resolve().then(r.t.bind(r,22816,23))},33521:(e,t,r)=>{"use strict";r.d(t,{AuthProvider:()=>n,E:()=>d});var s=r(68819),a=r(17266),i=r(35047),o=r(29394);let l=(0,a.createContext)(),n=({children:e})=>{let[t,r]=(0,a.useState)(null),[n,d]=(0,a.useState)(null),[c,u]=(0,a.useState)(!0),p=(0,i.useRouter)();(0,a.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("user")),t=localStorage.getItem("token");e&&t&&(r(e),d(t)),u(!1)},[]);let m=async e=>{try{let t=await fetch("http://localhost:5000/api/v1/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),s=await t.json();if(!t.ok)throw Error(s.message||"Login failed");let{token:a,user:i}=s;localStorage.setItem("token",a),d(a),localStorage.setItem("user",JSON.stringify(i)),r(i),o.Am.success("Login Successful"),p.push("/dashboard")}catch(e){console.error("Login error:",e),o.Am.error(e.message||e||"Error")}};return(0,s.jsx)(l.Provider,{value:{user:t,token:n,loading:c,login:m,logout:()=>{localStorage.removeItem("user"),localStorage.removeItem("token"),r(null),p.push("/")}},children:e})},d=()=>(0,a.useContext)(l)},60134:(e,t,r)=>{"use strict";r.d(t,{ArticlesProvider:()=>n,l:()=>d});var s=r(68819),a=r(17266),i=r(33521),o=r(29394);let l=(0,a.createContext)(),n=({children:e})=>{let{token:t}=(0,i.E)(),[r,n]=(0,a.useState)([]),[d,c]=(0,a.useState)(!0),[u,p]=(0,a.useState)(null),[m,h]=(0,a.useState)(1),x=async e=>{console.log("\uD83D\uDE80 ~ fetchArticles ~ pageNum:",e),c(!0);try{let t=await fetch(`http://localhost:5000/api/v1/news?page=1&limit=${9*(e||m)}`),r=await t.json();if(!t.ok)throw Error(r.message||"Failed to fetch articles");n(r.data)}catch(e){p(e.message)}finally{c(!1)}},g=async()=>{h(m+1),await x(m+1)},f=async e=>{try{let r=await fetch("http://localhost:5000/api/v1/news/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)}),s=await r.json();if(!r.ok)throw Error(s.message||"Failed to add article");await x(m),o.Am.success("Create Successful")}catch(e){p(e.message),o.Am.error(e.message||"Create Failed")}},v=async(e,r)=>{try{let s=await fetch(`/api/articles/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(r)}),a=await s.json();if(!s.ok)throw Error(a.message||"Failed to update article");await x(m),o.Am.success("Update Successful")}catch(e){p(e.message),o.Am.error(e.message||"Update Failed")}},w=async e=>{try{let r=await fetch(`http://localhost:5000/api/v1/news/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}}),s=await r.json();if(!r.ok)throw Error(s.message||"Failed to delete article");await x(m),o.Am.success("Delete Successful")}catch(e){p(e.message),o.Am.error(e.message||"Delete Failed")}};return(0,a.useEffect)(()=>{x()},[]),(0,s.jsx)(l.Provider,{value:{articles:r,loading:d,error:u,addArticle:f,updateArticle:v,deleteArticle:w,setPage:h,fetchArticles:x,loadNextPage:g},children:e})},d=()=>(0,a.useContext)(l)},80638:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var s=r(68819),a=r(46226),i=r(23703),o=r(10123),l=r(33521),n=r(35047),d=r(17266);let c=({children:e})=>{let{user:t,loading:r}=(0,l.E)(),a=(0,n.useRouter)();return((0,d.useEffect)(()=>{!r&&t&&["superAdmin","admin"].includes(t.role)&&a.push("/dashboard")},[t,r]),r)?null:(0,s.jsx)(s.Fragment,{children:e})},u=o.Ry({email:o.Z_().email("Invalid email address").required("Email is required"),password:o.Z_().min(8,"Password must be at least 8 characters").required("Password is required")}),p=()=>{let{login:e}=(0,l.E)(),t=async t=>{await e(t)};return(0,s.jsx)(c,{children:(0,s.jsx)("main",{children:(0,s.jsx)("div",{className:"flex justify-center items-center bg-gray-100 font-[sans-serif] h-full md:min-h-screen p-4",children:(0,s.jsxs)("div",{className:"grid justify-center max-w-md mx-auto",children:[(0,s.jsx)("div",{children:(0,s.jsx)(a.default,{className:"w-full object-cover rounded-2xl",src:"https://readymadeui.com/login-image.webp",alt:"login-image",width:500,height:500})}),(0,s.jsx)(i.J9,{initialValues:{email:"",password:""},validationSchema:u,onSubmit:t,children:({isSubmitting:e})=>(0,s.jsxs)(i.l0,{className:"bg-white rounded-2xl p-6 -mt-24 relative z-10 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]",children:[(0,s.jsx)("div",{className:"mb-12",children:(0,s.jsx)("h3",{className:"text-3xl font-extrabold text-blue-600",children:"Sign In"})}),(0,s.jsxs)("div",{className:"relative flex flex-col mb-6",children:[(0,s.jsx)(i.gN,{name:"email",type:"text",className:"w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none",placeholder:"Enter email"}),(0,s.jsx)(i.Bc,{name:"email",component:"span",className:"text-red-500 text-xs mt-1"})]}),(0,s.jsxs)("div",{className:"relative flex flex-col mb-6",children:[(0,s.jsx)(i.gN,{name:"password",type:"password",className:"w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none",placeholder:"Enter password"}),(0,s.jsx)(i.Bc,{name:"password",component:"span",className:"text-red-500 text-xs mt-1"})]}),(0,s.jsx)("div",{className:"mt-16",children:(0,s.jsx)("button",{type:"submit",disabled:e,className:"w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none",children:e?"Signing in...":"Sign in"})}),(0,s.jsx)("hr",{className:"my-6 border-gray-300"})]})})]})})})})}},58804:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{AuthProvider:()=>i,useAuthContext:()=>o});var a=r(71851);let e=await (0,a.createProxy)(String.raw`C:\Users\shama\Desktop\New folder\news-app\app\components\Context\AuthProvider.js`),i=e.AuthProvider,o=e.useAuthContext;s()}catch(e){s(e)}},1)},28679:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{ArticlesProvider:()=>i,useArticles:()=>o});var a=r(71851);let e=await (0,a.createProxy)(String.raw`C:\Users\shama\Desktop\New folder\news-app\app\components\Context\NewsContext.js`),i=e.ArticlesProvider,o=e.useArticles;s()}catch(e){s(e)}},1)},10214:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>m,metadata:()=>h});var a=r(89351),i=r(96160),o=r.n(i),l=r(11427),n=r.n(l);r(97001),r(67272);var d=r(58804),c=r(58384),u=r(28679),p=e([d,c,u]);[d,c,u]=p.then?(await p)():p;let h={title:"News App",description:"News App"};function m({children:e}){return(0,a.jsx)("html",{lang:"en",children:(0,a.jsxs)("body",{className:`${o().variable} ${n().variable} antialiased`,children:[(0,a.jsx)(c.ToastContainer,{position:"top-right",autoClose:3e3,hideProgressBar:!1}),(0,a.jsx)(d.AuthProvider,{children:(0,a.jsx)(u.ArticlesProvider,{children:e})})]})})}s()}catch(e){s(e)}})},89959:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>e});var a=r(71851);let e=(await (0,a.createProxy)(String.raw`C:\Users\shama\Desktop\New folder\news-app\app\login\page.js`)).default;s()}catch(e){s(e)}},1)},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(40771);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[147,912,973],()=>r(80326));module.exports=s})();