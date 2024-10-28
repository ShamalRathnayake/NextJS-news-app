exports.id=504,exports.ids=[504],exports.modules={18966:(e,t,s)=>{Promise.resolve().then(s.bind(s,33521)),Promise.resolve().then(s.bind(s,60134)),Promise.resolve().then(s.bind(s,29394))},92119:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,96114,23)),Promise.resolve().then(s.t.bind(s,92639,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,79671,23)),Promise.resolve().then(s.t.bind(s,41868,23)),Promise.resolve().then(s.t.bind(s,84759,23)),Promise.resolve().then(s.t.bind(s,22816,23))},33521:(e,t,s)=>{"use strict";s.d(t,{AuthProvider:()=>n,E:()=>c});var a=s(68819),l=s(17266),r=s(35047),i=s(29394);let o=(0,l.createContext)(),n=({children:e})=>{let[t,s]=(0,l.useState)(null),[n,c]=(0,l.useState)(null),[d,u]=(0,l.useState)(!0),m=(0,r.useRouter)();(0,l.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("user")),t=localStorage.getItem("token");e&&t&&(s(e),c(t)),u(!1)},[]);let h=async e=>{try{let t=await fetch("http://localhost:5000/api/v1/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=await t.json();if(!t.ok)throw Error(a.message||"Login failed");let{token:l,user:r}=a;localStorage.setItem("token",l),c(l),localStorage.setItem("user",JSON.stringify(r)),s(r),i.Am.success("Login Successful"),m.push("/dashboard")}catch(e){console.error("Login error:",e),i.Am.error(e.message||e||"Error")}};return(0,a.jsx)(o.Provider,{value:{user:t,token:n,loading:d,login:h,logout:()=>{localStorage.removeItem("user"),localStorage.removeItem("token"),s(null),m.push("/")}},children:e})},c=()=>(0,l.useContext)(o)},60134:(e,t,s)=>{"use strict";s.d(t,{ArticlesProvider:()=>n,l:()=>c});var a=s(68819),l=s(17266),r=s(33521),i=s(29394);let o=(0,l.createContext)(),n=({children:e})=>{let{token:t}=(0,r.E)(),[s,n]=(0,l.useState)([]),[c,d]=(0,l.useState)(!0),[u,m]=(0,l.useState)(null),[h,x]=(0,l.useState)(1),g=async e=>{console.log("\uD83D\uDE80 ~ fetchArticles ~ pageNum:",e),d(!0);try{let t=await fetch(`http://localhost:5000/api/v1/news?page=1&limit=${9*(e||h)}`),s=await t.json();if(!t.ok)throw Error(s.message||"Failed to fetch articles");n(s.data)}catch(e){m(e.message)}finally{d(!1)}},p=async()=>{x(h+1),await g(h+1)},f=async e=>{try{let s=await fetch("http://localhost:5000/api/v1/news/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)}),a=await s.json();if(!s.ok)throw Error(a.message||"Failed to add article");await g(h),i.Am.success("Create Successful")}catch(e){m(e.message),i.Am.error(e.message||"Create Failed")}},b=async(e,s)=>{try{let a=await fetch(`/api/articles/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(s)}),l=await a.json();if(!a.ok)throw Error(l.message||"Failed to update article");await g(h),i.Am.success("Update Successful")}catch(e){m(e.message),i.Am.error(e.message||"Update Failed")}},y=async e=>{try{let s=await fetch(`http://localhost:5000/api/v1/news/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}}),a=await s.json();if(!s.ok)throw Error(a.message||"Failed to delete article");await g(h),i.Am.success("Delete Successful")}catch(e){m(e.message),i.Am.error(e.message||"Delete Failed")}};return(0,l.useEffect)(()=>{g()},[]),(0,a.jsx)(o.Provider,{value:{articles:s,loading:c,error:u,addArticle:f,updateArticle:b,deleteArticle:y,setPage:x,fetchArticles:g,loadNextPage:p},children:e})},c=()=>(0,l.useContext)(o)},41031:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(68819);s(17266);var l=s(79740),r=s(75812);let i=({open:e,onClose:t,title:s,children:i,isWide:o=!1})=>(0,a.jsx)(l.Dialog,{open:e,handler:t,size:o?"lg":"2xl",children:(0,a.jsxs)("div",{className:"w-full p-8",children:[" ",(0,a.jsxs)("div",{className:"flex justify-between items-center border-b pb-2 mb-4 sticky top-0 bg-white z-10",children:[(0,a.jsx)(l.Typography,{variant:"h5",color:"blue-gray",className:"font-semibold",children:s}),(0,a.jsx)("button",{onClick:t,className:"text-gray-500 hover:text-gray-700",children:(0,a.jsx)(r.Z,{className:"h-5 w-5"})})]}),(0,a.jsxs)("div",{className:"overflow-y-auto max-h-[80vh]",children:[" ",i]})]})})},14595:(e,t,s)=>{"use strict";s.d(t,{default:()=>z});var a=s(68819),l=s(17266),r=s(79740),i=s(17857),o=s(44089),n=s(31160),c=s(43346),d=s(46226),u=s(33521),m=s(41092);let h=({img:e,tag:t,title:s,desc:i,author:o,date:n,onEdit:c,onDelete:h,hideButtons:x,onTextClick:g})=>{let{user:p,loading:f}=(0,u.E)(),[b,y]=(0,l.useState)(!1);return(0,a.jsxs)(r.Card,{shadow:!0,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),className:"h-[500px] flex flex-col justify-around",children:[(0,a.jsx)(r.CardHeader,{className:"cursor-pointer",onClick:g,children:(0,a.jsx)(d.default,{width:768,height:768,src:e,alt:s,className:"h-full w-full scale-110 object-cover"})}),(0,a.jsxs)(r.CardBody,{className:"p-6",children:[(0,a.jsxs)("div",{className:"cursor-pointer",onClick:g,children:[(0,a.jsx)(r.Typography,{variant:"small",color:"blue",className:"mb-2 !font-medium",children:t}),(0,a.jsx)(r.Typography,{as:"a",href:"#",variant:"h5",color:"blue-gray",className:"mb-2 normal-case transition-colors hover:text-gray-900",children:((e,t=70)=>{if(e.length<=t)return e;let s=e.slice(0,t),a=s.lastIndexOf(" ");return a>-1?s.slice(0,a)+"...":s+"..."})(s,40)}),(0,a.jsx)(r.Typography,{className:"mb-6 font-normal !text-gray-500  h-12 overflow-hidden",children:(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:m.Z.sanitize(i)}})})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between gap-4 md:flex-col sm:flex-row lg:flex-row",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(r.Avatar,{size:"sm",variant:"circular",src:o.img,alt:o.name}),(0,a.jsxs)("div",{className:"ml-2",children:[(0,a.jsx)(r.Typography,{variant:"small",color:"blue-gray",className:"mb-0.5 !font-medium",children:o.name}),(0,a.jsx)(r.Typography,{variant:"small",color:"gray",className:"text-xs !text-gray-500 font-normal",children:new Date(n).toLocaleDateString()})]})]}),b&&!f&&p&&!x&&(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(r.Button,{size:"sm",variant:"filled",color:"blue",className:"w-10 h-10 p-0 rounded-full hover:bg-blue-600 flex items-center justify-center",title:"Edit",onClick:c,children:(0,a.jsx)("i",{className:"fas fa-edit text-white"})}),(0,a.jsx)(r.Button,{size:"sm",variant:"filled",color:"red",className:"w-10 h-10 p-0 rounded-full hover:bg-red-600 flex items-center justify-center",title:"Delete",onClick:h,children:(0,a.jsx)("i",{className:"fas fa-trash text-white"})})]})]})]})]})};var x=s(41031),g=s(23703),p=s(10123),f=s(948),b=s(45367),y=s(74675),j=s(12703),v=s(75864),N=s(85771),w=s(74539),C=s(3255),k=s(77542),A=s(62967),S=s(70616),P=s(77288),Z=s(94652),T=s(45871);let B=({editorContent:e,onChange:t})=>{let s=(0,f.jE)({extensions:[b.Z,y.ZP,j.ZP,v.Z,N.ZP,w.Z,C.ZP,k.Z.configure({types:["heading","paragraph"]}),A.Z,S.Z,P.ZP,Z.Z,T.Z],content:e,onUpdate:({editor:e})=>{t(e.getHTML())},editorProps:{attributes:{class:" mx-auto focus:outline-none min-h-[110px] prose "}}});return s?(0,a.jsxs)("div",{className:" mx-auto mt-8",children:[(0,a.jsxs)("div",{className:"flex flex-wrap items-center gap-2 p-2 bg-gray-100 border-b border-gray-300",children:[[1,2,3,4,5,6].map(e=>(0,a.jsxs)("button",{onClick:()=>s.chain().focus().toggleHeading({level:e}).run(),className:"p-2",type:"button",children:[(0,a.jsx)("i",{className:`fa fa-heading ${s.isActive("heading",{level:e})?"text-blue-500":"text-gray-600"}`}),e]},e)),["left","center","right","justify"].map(e=>(0,a.jsx)("button",{onClick:()=>s.chain().focus().setTextAlign(e).run(),className:"p-2",type:"button",children:(0,a.jsx)("i",{className:`fa fa-align-${e} ${s.isActive("textAlign",{align:e})?"text-blue-500":"text-gray-600"}`})},e)),(0,a.jsx)("input",{type:"color",onChange:e=>{let t=e.target.value;s.chain().focus().setColor(t).run()},value:s.getAttributes("textStyle").color||"#000000",className:`p-0.5 border border-gray-300 rounded shadow ${s.isActive("color",{color:s.getAttributes("textStyle").color})?"text-blue-500":"text-gray-600"}`}),(0,a.jsx)("button",{onClick:()=>s.chain().focus().toggleBold().run(),className:"p-2",type:"button",children:(0,a.jsx)("i",{className:`fa fa-bold ${s.isActive("bold")?"text-blue-500":"text-gray-600"}`})}),(0,a.jsx)("button",{onClick:()=>s.chain().focus().toggleItalic().run(),className:"p-2",type:"button",children:(0,a.jsx)("i",{className:`fa fa-italic ${s.isActive("italic")?"text-blue-500":"text-gray-600"}`})}),(0,a.jsx)("button",{onClick:()=>s.chain().focus().toggleUnderline().run(),className:"p-2",type:"button",children:(0,a.jsx)("i",{className:`fa fa-underline ${s.isActive("underline")?"text-blue-500":"text-gray-600"}`})}),(0,a.jsx)("button",{onClick:()=>s.chain().focus().toggleStrike().run(),className:"p-2",type:"button",children:(0,a.jsx)("i",{className:`fa fa-strikethrough ${s.isActive("strike")?"text-blue-500":"text-gray-600"}`})}),(0,a.jsx)("button",{onClick:()=>s.chain().focus().toggleHighlight().run(),className:"p-2",type:"button",children:(0,a.jsx)("i",{className:`fa fa-highlighter ${s.isActive("highlight")?"text-blue-500":"text-gray-600"}`})}),(0,a.jsx)("button",{onClick:()=>s.chain().focus().toggleBulletList().run(),className:"p-2",type:"button",children:(0,a.jsx)("i",{className:`fa fa-list-ul ${s.isActive("bulletList")?"text-blue-500":"text-gray-600"}`})}),(0,a.jsx)("button",{onClick:()=>s.chain().focus().toggleOrderedList().run(),className:"p-2",type:"button",children:(0,a.jsx)("i",{className:`fa fa-list-ol ${s.isActive("orderedList")?"text-blue-500":"text-gray-600"}`})}),(0,a.jsx)("button",{onClick:()=>s.chain().focus().toggleTaskList().run(),className:"p-2",type:"button",children:(0,a.jsx)("i",{className:`fa fa-tasks ${s.isActive("taskList")?"text-blue-500":"text-gray-600"}`})}),(0,a.jsx)("button",{onClick:()=>s.chain().focus().toggleBlockquote().run(),className:"p-2",type:"button",children:(0,a.jsx)("i",{className:`fa fa-quote-right ${s.isActive("blockquote")?"text-blue-500":"text-gray-600"}`})}),(0,a.jsx)("button",{onClick:()=>s.chain().focus().setHorizontalRule().run(),className:"p-2",type:"button",children:(0,a.jsx)("i",{className:"fa fa-minus text-gray-600"})}),(0,a.jsx)("button",{onClick:()=>s.chain().focus().undo().run(),className:"p-2",type:"button",children:(0,a.jsx)("i",{className:"fa fa-undo text-gray-600"})}),(0,a.jsx)("button",{onClick:()=>s.chain().focus().redo().run(),className:"p-2",type:"button",children:(0,a.jsx)("i",{className:"fa fa-redo text-gray-600"})}),(0,a.jsx)("button",{onClick:()=>s.chain().focus().setImage({src:"https://placekitten.com/200/200"}).run(),className:"p-2",type:"button",children:(0,a.jsx)("i",{className:"fa fa-image text-gray-600"})}),(0,a.jsx)("button",{onClick:()=>s.chain().focus().toggleSubscript().run(),className:"p-2",type:"button",children:(0,a.jsx)("i",{className:`fa fa-subscript ${s.isActive("subscript")?"text-blue-500":"text-gray-600"}`})}),(0,a.jsx)("button",{onClick:()=>s.chain().focus().toggleSuperscript().run(),className:"p-2",type:"button",children:(0,a.jsx)("i",{className:`fa fa-superscript ${s.isActive("superscript")?"text-blue-500":"text-gray-600"}`})})]}),(0,a.jsx)(f.kg,{editor:s,className:"border border-gray-300 rounded p-4 mt-4"})]}):null},E=["Technology","Health","Sports","Politics","Entertainment"],$=p.Ry({title:p.Z_().required("Title is required"),imageUrl:p.Z_().url("Enter a valid URL").required("Image URL is required"),category:p.Z_().required("Please select a category"),body:p.Z_().required("News body is required")}),L=({article:e,onSubmit:t})=>{let[s,i]=(0,l.useState)(e?.newsBody||"");return(0,a.jsx)(g.J9,{initialValues:{title:e?.title||"",imageUrl:e?.imageUrl||"",category:e?.category||E[0],body:s},validationSchema:$,onSubmit:({title:e,category:a,imageUrl:l})=>{t({title:e,category:a,imageUrl:l,newsBody:s})},children:({values:t,setFieldValue:l,errors:o,touched:n})=>(0,a.jsxs)(g.l0,{className:"space-y-6 p-6 bg-white rounded-md max-w-2xl mx-auto",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(g.gN,{name:"title",children:({field:e})=>(0,a.jsx)(r.Input,{...e,label:"Title",className:"w-full"})}),(0,a.jsx)(g.Bc,{name:"title",component:"div",className:"text-red-500 text-sm"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(g.gN,{name:"imageUrl",children:({field:e})=>(0,a.jsx)(r.Input,{...e,label:"Image URL",className:"w-full"})}),(0,a.jsx)(g.Bc,{name:"imageUrl",component:"div",className:"text-red-500 text-sm"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(g.gN,{name:"category",children:({field:e})=>(0,a.jsx)(r.Select,{label:"Category",value:e.value,onChange:e=>l("category",e),children:E.map(e=>(0,a.jsx)(r.Option,{value:e,children:e},e))})}),(0,a.jsx)(g.Bc,{name:"category",component:"div",className:"text-red-500 text-sm"})]}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)(r.Typography,{variant:"small",className:"font-semibold mb-2",children:"News Body"}),(0,a.jsx)(B,{onChange:e=>{i(e),l("body",e)},editorContent:s}),(0,a.jsx)(g.Bc,{name:"body",component:"div",className:"text-red-500 text-sm"})]}),(0,a.jsx)("div",{className:"flex justify-end mt-4 px-6",children:(0,a.jsx)(r.Button,{type:"submit",color:"blue",disabled:(Object.keys(o).length,!s.trim()),children:e?"Update Article":"Create Article"})})]})})};var U=s(90434),I=s(60134);let D=({news:e,onClose:t})=>(0,a.jsxs)("div",{className:"bg-white rounded-lg py-6 px-3 max-w-4xl mx-auto max-h-full",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold text-gray-800 mb-6",children:e.title}),(0,a.jsxs)("div",{className:"flex items-center mb-6",children:[(0,a.jsx)(d.default,{src:e.author.profileImageUrl,alt:e.author.username,className:"w-12 h-12 rounded-full mr-3",width:500,height:500}),(0,a.jsxs)("div",{className:"text-sm text-gray-500",children:[(0,a.jsx)("p",{className:"font-medium text-gray-800 break-words",children:e.author.username}),(0,a.jsx)("p",{children:new Date(e.createdAt).toLocaleDateString()})]})]}),(0,a.jsx)(d.default,{src:e.imageUrl,alt:e.title,className:"w-max mx-auto h-max object-cover rounded-lg mb-6 pb-4",width:500,height:500}),(0,a.jsx)("p",{className:"text-lg text-gray-700 break-words max-h-96  prose ",children:(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:m.Z.sanitize(e.newsBody)}})})]}),z=({isLandingPage:e})=>{let{user:t,loading:s}=(0,u.E)(),[d,m]=(0,l.useState)(!1),[g,p]=(0,l.useState)(null),[f,b]=(0,l.useState)(!1),[y,j]=(0,l.useState)(!1),[v,N]=(0,l.useState)(null),{articles:w,loading:C,error:k,addArticle:A,updateArticle:S,deleteArticle:P,setPage:Z,fetchArticles:T,loadNextPage:B}=(0,I.l)(),E=()=>m(!0),$=()=>{p(null),m(!1)},z=async e=>{console.log("New Article Created: ",e),await A(e),$()},O=e=>{p(e),E()},q=e=>{p(e),b(!0)},_=async()=>{await P(g._id),F()},F=()=>{p(null),b(!1)},H=e=>{N(e),j(!0)},M=()=>{N(null),j(!1)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"w-full flex flex-row items-center justify-between text-black",children:[(0,a.jsx)(r.Typography,{variant:"h4",className:"mb-5 text-black",children:"Trending News"}),!s&&!t&&e&&(0,a.jsxs)(U.default,{href:"/login",className:"flex items-center bg-blue-600 text-white hover:bg-blue-700 rounded-lg p-3 transition duration-300 shadow-md",children:[(0,a.jsx)(i.Z,{className:"h-5 w-5 mr-2"}),(0,a.jsx)("span",{className:"font-semibold",children:"Login"})]}),!s&&t&&e&&(0,a.jsxs)(U.default,{href:"/dashboard",className:"flex items-center bg-blue-600 text-white hover:bg-blue-700 rounded-lg p-3 transition duration-300 shadow-md",children:[(0,a.jsx)(o.Z,{className:"h-5 w-5 mr-2"}),(0,a.jsx)("span",{className:"font-semibold",children:"Dashboard"})]})]}),(0,a.jsxs)("section",{className:"grid min-h-screen place-items-center p-8",children:[(0,a.jsx)("div",{className:"container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1",children:w&&!C&&w.map(t=>(0,a.jsx)(h,{img:t.imageUrl,tag:t.category,title:t.title,desc:t.newsBody,date:t.createdAt,author:{img:t.author.profileImageUrl,name:t.author.username},onEdit:()=>O(t),onDelete:()=>q(t),onTextClick:()=>H(t),hideButtons:e},t._id))}),(0,a.jsxs)(r.Button,{variant:"text",size:"lg",color:"gray",className:"flex items-center gap-2 mt-24",onClick:B,children:[(0,a.jsx)(n.Z,{className:"h-5 w-5 font-bold text-gray-900"}),"VIEW MORE"]}),!s&&t&&!e&&(0,a.jsx)("div",{onClick:E,className:"fixed bottom-6 right-6 z-50 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:shadow-2xl cursor-pointer transition-transform transform hover:scale-105",children:(0,a.jsx)(c.Z,{className:"h-6 w-6"})})]}),(0,a.jsx)(x.Z,{open:d,onClose:$,title:g?"Edit Article":"Create Article",children:(0,a.jsx)(L,{onSubmit:z,article:g})}),(0,a.jsxs)(x.Z,{open:f,onClose:F,title:"Confirm Deletion",children:[(0,a.jsxs)(r.Typography,{children:["Are you sure you want to"," ",(0,a.jsx)("span",{className:"text-black font-bold",children:"delete"})," the article titled"," ",(0,a.jsx)("strong",{className:"font-bold text-black",children:g?.title}),"?"]}),(0,a.jsxs)("div",{className:"flex justify-end mt-4",children:[(0,a.jsx)(r.Button,{variant:"outlined",color:"gray",onClick:F,children:"Cancel"}),(0,a.jsx)(r.Button,{variant:"filled",color:"red",className:"ml-2",onClick:_,children:"Delete"})]})]}),(0,a.jsx)(x.Z,{open:y,onClose:M,title:"View News",isWide:!0,children:(0,a.jsx)(D,{news:v,onClose:M})})]})}},58804:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.r(t),s.d(t,{AuthProvider:()=>r,useAuthContext:()=>i});var l=s(71851);let e=await (0,l.createProxy)(String.raw`C:\Users\shama\Desktop\New folder\news-app\app\components\Context\AuthProvider.js`),r=e.AuthProvider,i=e.useAuthContext;a()}catch(e){a(e)}},1)},28679:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.r(t),s.d(t,{ArticlesProvider:()=>r,useArticles:()=>i});var l=s(71851);let e=await (0,l.createProxy)(String.raw`C:\Users\shama\Desktop\New folder\news-app\app\components\Context\NewsContext.js`),r=e.ArticlesProvider,i=e.useArticles;a()}catch(e){a(e)}},1)},10214:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.r(t),s.d(t,{default:()=>h,metadata:()=>x});var l=s(89351),r=s(96160),i=s.n(r),o=s(11427),n=s.n(o);s(97001),s(67272);var c=s(58804),d=s(58384),u=s(28679),m=e([c,d,u]);[c,d,u]=m.then?(await m)():m;let x={title:"News App",description:"News App"};function h({children:e}){return(0,l.jsx)("html",{lang:"en",children:(0,l.jsxs)("body",{className:`${i().variable} ${n().variable} antialiased`,children:[(0,l.jsx)(d.ToastContainer,{position:"top-right",autoClose:3e3,hideProgressBar:!1}),(0,l.jsx)(c.AuthProvider,{children:(0,l.jsx)(u.ArticlesProvider,{children:e})})]})})}a()}catch(e){a(e)}})},57481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var a=s(40771);let l=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};