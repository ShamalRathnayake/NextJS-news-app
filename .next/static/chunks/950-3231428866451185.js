"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[950],{6182:(e,t,a)=>{a.d(t,{AuthProvider:()=>c,E:()=>o});var s=a(57437),l=a(2265),r=a(16463),i=a(23580);let n=(0,l.createContext)(),c=e=>{let{children:t}=e,[a,c]=(0,l.useState)(null),[o,d]=(0,l.useState)(null),[u,m]=(0,l.useState)(!0),h=(0,r.useRouter)();(0,l.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("user")),t=localStorage.getItem("token");e&&t&&(c(e),d(t)),m(!1)},[]);let x=async e=>{try{let t=await fetch("".concat("http://localhost:5000/api/v1/","admin/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=await t.json();if(!t.ok)throw Error(a.message||"Login failed");let{token:s,user:l}=a;localStorage.setItem("token",s),d(s),localStorage.setItem("user",JSON.stringify(l)),c(l),i.Am.success("Login Successful"),h.push("/dashboard")}catch(e){console.error("Login error:",e),i.Am.error(e.message||e||"Error")}};return(0,s.jsx)(n.Provider,{value:{user:a,token:o,loading:u,login:x,logout:()=>{localStorage.removeItem("user"),localStorage.removeItem("token"),c(null),h.push("/")}},children:t})},o=()=>(0,l.useContext)(n)},18399:(e,t,a)=>{a.d(t,{ArticlesProvider:()=>c,l:()=>o});var s=a(57437),l=a(2265),r=a(6182),i=a(23580);let n=(0,l.createContext)(),c=e=>{let{children:t}=e,{token:a}=(0,r.E)(),[c,o]=(0,l.useState)([]),[d,u]=(0,l.useState)(!0),[m,h]=(0,l.useState)(null),[x,g]=(0,l.useState)(1),f=async e=>{console.log("\uD83D\uDE80 ~ fetchArticles ~ pageNum:",e),u(!0);try{let t=await fetch("".concat("http://localhost:5000/api/v1/","news?page=1&limit=").concat(9*(e||x))),a=await t.json();if(!t.ok)throw Error(a.message||"Failed to fetch articles");o(a.data)}catch(e){h(e.message)}finally{u(!1)}},p=async()=>{g(x+1),await f(x+1)},j=async e=>{try{let t=await fetch("".concat("http://localhost:5000/api/v1/","news/"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(e)}),s=await t.json();if(!t.ok)throw Error(s.message||"Failed to add article");await f(x),i.Am.success("Create Successful")}catch(e){h(e.message),i.Am.error(e.message||"Create Failed")}},b=async(e,t)=>{try{let s=await fetch("/api/articles/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(t)}),l=await s.json();if(!s.ok)throw Error(l.message||"Failed to update article");await f(x),i.Am.success("Update Successful")}catch(e){h(e.message),i.Am.error(e.message||"Update Failed")}},y=async e=>{try{let t=await fetch("".concat("http://localhost:5000/api/v1/","news/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(a)}}),s=await t.json();if(!t.ok)throw Error(s.message||"Failed to delete article");await f(x),i.Am.success("Delete Successful")}catch(e){h(e.message),i.Am.error(e.message||"Delete Failed")}};return(0,l.useEffect)(()=>{f()},[]),(0,s.jsx)(n.Provider,{value:{articles:c,loading:d,error:m,addArticle:j,updateArticle:b,deleteArticle:y,setPage:g,fetchArticles:f,loadNextPage:p},children:t})},o=()=>(0,l.useContext)(n)},61225:(e,t,a)=>{a.d(t,{Z:()=>i});var s=a(57437);a(2265);var l=a(53780),r=a(63617);let i=e=>{let{open:t,onClose:a,title:i,children:n,isWide:c=!1}=e;return(0,s.jsx)(l.Dialog,{open:t,handler:a,size:c?"lg":"2xl",children:(0,s.jsxs)("div",{className:"w-full p-8",children:[" ",(0,s.jsxs)("div",{className:"flex justify-between items-center border-b pb-2 mb-4 sticky top-0 bg-white z-10",children:[(0,s.jsx)(l.Typography,{variant:"h5",color:"blue-gray",className:"font-semibold",children:i}),(0,s.jsx)("button",{onClick:a,className:"text-gray-500 hover:text-gray-700",children:(0,s.jsx)(r.Z,{className:"h-5 w-5"})})]}),(0,s.jsxs)("div",{className:"overflow-y-auto max-h-[80vh]",children:[" ",n]})]})})}},37950:(e,t,a)=>{a.d(t,{default:()=>O});var s=a(57437),l=a(2265),r=a(53780),i=a(75514),n=a(94323),c=a(99403),o=a(75265),d=a(66648),u=a(6182),m=a(11838),h=a.n(m);let x=e=>{let{img:t,tag:a,title:i,desc:n,author:c,date:o,onEdit:m,onDelete:x,hideButtons:g,onTextClick:f}=e,{user:p,loading:j}=(0,u.E)(),[b,y]=(0,l.useState)(!1);return(0,s.jsxs)(r.Card,{shadow:!0,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),className:"h-[500px] flex flex-col justify-around",children:[(0,s.jsx)(r.CardHeader,{className:"cursor-pointer",onClick:f,children:(0,s.jsx)(d.default,{width:768,height:768,src:t,alt:i,className:"h-full w-full scale-110 object-cover"})}),(0,s.jsxs)(r.CardBody,{className:"p-6",children:[(0,s.jsxs)("div",{className:"cursor-pointer",onClick:f,children:[(0,s.jsx)(r.Typography,{variant:"small",color:"blue",className:"mb-2 !font-medium",children:a}),(0,s.jsx)(r.Typography,{as:"a",href:"#",variant:"h5",color:"blue-gray",className:"mb-2 normal-case transition-colors hover:text-gray-900",children:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:70;if(e.length<=t)return e;let a=e.slice(0,t),s=a.lastIndexOf(" ");return s>-1?a.slice(0,s)+"...":a+"..."}(i,40)}),(0,s.jsx)(r.Typography,{className:"mb-6 font-normal !text-gray-500  h-12 overflow-hidden",children:(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:h().sanitize(n)}})})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between gap-4 md:flex-col sm:flex-row lg:flex-row",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(r.Avatar,{size:"sm",variant:"circular",src:c.img,alt:c.name}),(0,s.jsxs)("div",{className:"ml-2",children:[(0,s.jsx)(r.Typography,{variant:"small",color:"blue-gray",className:"mb-0.5 !font-medium",children:c.name}),(0,s.jsx)(r.Typography,{variant:"small",color:"gray",className:"text-xs !text-gray-500 font-normal",children:new Date(o).toLocaleDateString()})]})]}),b&&!j&&p&&!g&&(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(r.Button,{size:"sm",variant:"filled",color:"blue",className:"w-10 h-10 p-0 rounded-full hover:bg-blue-600 flex items-center justify-center",title:"Edit",onClick:m,children:(0,s.jsx)("i",{className:"fas fa-edit text-white"})}),(0,s.jsx)(r.Button,{size:"sm",variant:"filled",color:"red",className:"w-10 h-10 p-0 rounded-full hover:bg-red-600 flex items-center justify-center",title:"Delete",onClick:x,children:(0,s.jsx)("i",{className:"fas fa-trash text-white"})})]})]})]})]})};var g=a(61225),f=a(39381),p=a(14245),j=a(23705),b=a(42214),y=a(69930),N=a(93922),v=a(2375),w=a(70227),k=a(43366),C=a(68723),S=a(38133),A=a(94755),E=a(93149),T=a(63966),Z=a(51193),B=a(14382);let L=e=>{let{editorContent:t,onChange:a}=e,l=(0,j.jE)({extensions:[b.Z,y.ZP,N.ZP,v.Z,w.ZP,k.Z,C.ZP,S.Z.configure({types:["heading","paragraph"]}),A.Z,E.Z,T.ZP,Z.Z,B.Z],content:t,onUpdate:e=>{let{editor:t}=e;a(t.getHTML())},editorProps:{attributes:{class:" mx-auto focus:outline-none min-h-[110px] prose "}}});return l?(0,s.jsxs)("div",{className:" mx-auto mt-8",children:[(0,s.jsxs)("div",{className:"flex flex-wrap items-center gap-2 p-2 bg-gray-100 border-b border-gray-300",children:[[1,2,3,4,5,6].map(e=>(0,s.jsxs)("button",{onClick:()=>l.chain().focus().toggleHeading({level:e}).run(),className:"p-2",type:"button",children:[(0,s.jsx)("i",{className:"fa fa-heading ".concat(l.isActive("heading",{level:e})?"text-blue-500":"text-gray-600")}),e]},e)),["left","center","right","justify"].map(e=>(0,s.jsx)("button",{onClick:()=>l.chain().focus().setTextAlign(e).run(),className:"p-2",type:"button",children:(0,s.jsx)("i",{className:"fa fa-align-".concat(e," ").concat(l.isActive("textAlign",{align:e})?"text-blue-500":"text-gray-600")})},e)),(0,s.jsx)("input",{type:"color",onChange:e=>{let t=e.target.value;l.chain().focus().setColor(t).run()},value:l.getAttributes("textStyle").color||"#000000",className:"p-0.5 border border-gray-300 rounded shadow ".concat(l.isActive("color",{color:l.getAttributes("textStyle").color})?"text-blue-500":"text-gray-600")}),(0,s.jsx)("button",{onClick:()=>l.chain().focus().toggleBold().run(),className:"p-2",type:"button",children:(0,s.jsx)("i",{className:"fa fa-bold ".concat(l.isActive("bold")?"text-blue-500":"text-gray-600")})}),(0,s.jsx)("button",{onClick:()=>l.chain().focus().toggleItalic().run(),className:"p-2",type:"button",children:(0,s.jsx)("i",{className:"fa fa-italic ".concat(l.isActive("italic")?"text-blue-500":"text-gray-600")})}),(0,s.jsx)("button",{onClick:()=>l.chain().focus().toggleUnderline().run(),className:"p-2",type:"button",children:(0,s.jsx)("i",{className:"fa fa-underline ".concat(l.isActive("underline")?"text-blue-500":"text-gray-600")})}),(0,s.jsx)("button",{onClick:()=>l.chain().focus().toggleStrike().run(),className:"p-2",type:"button",children:(0,s.jsx)("i",{className:"fa fa-strikethrough ".concat(l.isActive("strike")?"text-blue-500":"text-gray-600")})}),(0,s.jsx)("button",{onClick:()=>l.chain().focus().toggleHighlight().run(),className:"p-2",type:"button",children:(0,s.jsx)("i",{className:"fa fa-highlighter ".concat(l.isActive("highlight")?"text-blue-500":"text-gray-600")})}),(0,s.jsx)("button",{onClick:()=>l.chain().focus().toggleBulletList().run(),className:"p-2",type:"button",children:(0,s.jsx)("i",{className:"fa fa-list-ul ".concat(l.isActive("bulletList")?"text-blue-500":"text-gray-600")})}),(0,s.jsx)("button",{onClick:()=>l.chain().focus().toggleOrderedList().run(),className:"p-2",type:"button",children:(0,s.jsx)("i",{className:"fa fa-list-ol ".concat(l.isActive("orderedList")?"text-blue-500":"text-gray-600")})}),(0,s.jsx)("button",{onClick:()=>l.chain().focus().toggleTaskList().run(),className:"p-2",type:"button",children:(0,s.jsx)("i",{className:"fa fa-tasks ".concat(l.isActive("taskList")?"text-blue-500":"text-gray-600")})}),(0,s.jsx)("button",{onClick:()=>l.chain().focus().toggleBlockquote().run(),className:"p-2",type:"button",children:(0,s.jsx)("i",{className:"fa fa-quote-right ".concat(l.isActive("blockquote")?"text-blue-500":"text-gray-600")})}),(0,s.jsx)("button",{onClick:()=>l.chain().focus().setHorizontalRule().run(),className:"p-2",type:"button",children:(0,s.jsx)("i",{className:"fa fa-minus text-gray-600"})}),(0,s.jsx)("button",{onClick:()=>l.chain().focus().undo().run(),className:"p-2",type:"button",children:(0,s.jsx)("i",{className:"fa fa-undo text-gray-600"})}),(0,s.jsx)("button",{onClick:()=>l.chain().focus().redo().run(),className:"p-2",type:"button",children:(0,s.jsx)("i",{className:"fa fa-redo text-gray-600"})}),(0,s.jsx)("button",{onClick:()=>l.chain().focus().setImage({src:"https://placekitten.com/200/200"}).run(),className:"p-2",type:"button",children:(0,s.jsx)("i",{className:"fa fa-image text-gray-600"})}),(0,s.jsx)("button",{onClick:()=>l.chain().focus().toggleSubscript().run(),className:"p-2",type:"button",children:(0,s.jsx)("i",{className:"fa fa-subscript ".concat(l.isActive("subscript")?"text-blue-500":"text-gray-600")})}),(0,s.jsx)("button",{onClick:()=>l.chain().focus().toggleSuperscript().run(),className:"p-2",type:"button",children:(0,s.jsx)("i",{className:"fa fa-superscript ".concat(l.isActive("superscript")?"text-blue-500":"text-gray-600")})})]}),(0,s.jsx)(j.kg,{editor:l,className:"border border-gray-300 rounded p-4 mt-4"})]}):null},I=["Technology","Health","Sports","Politics","Entertainment"],U=p.Ry({title:p.Z_().required("Title is required"),imageUrl:p.Z_().url("Enter a valid URL").required("Image URL is required"),category:p.Z_().required("Please select a category"),body:p.Z_().required("News body is required")}),P=e=>{let{article:t,onSubmit:a}=e,[i,n]=(0,l.useState)((null==t?void 0:t.newsBody)||"");return(0,s.jsx)(f.J9,{initialValues:{title:(null==t?void 0:t.title)||"",imageUrl:(null==t?void 0:t.imageUrl)||"",category:(null==t?void 0:t.category)||I[0],body:i},validationSchema:U,onSubmit:e=>{let{title:t,category:s,imageUrl:l}=e;a({title:t,category:s,imageUrl:l,newsBody:i})},children:e=>{let{values:a,setFieldValue:l,errors:c,touched:o}=e;return(0,s.jsxs)(f.l0,{className:"space-y-6 p-6 bg-white rounded-md max-w-2xl mx-auto",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(f.gN,{name:"title",children:e=>{let{field:t}=e;return(0,s.jsx)(r.Input,{...t,label:"Title",className:"w-full"})}}),(0,s.jsx)(f.Bc,{name:"title",component:"div",className:"text-red-500 text-sm"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(f.gN,{name:"imageUrl",children:e=>{let{field:t}=e;return(0,s.jsx)(r.Input,{...t,label:"Image URL",className:"w-full"})}}),(0,s.jsx)(f.Bc,{name:"imageUrl",component:"div",className:"text-red-500 text-sm"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(f.gN,{name:"category",children:e=>{let{field:t}=e;return(0,s.jsx)(r.Select,{label:"Category",value:t.value,onChange:e=>l("category",e),children:I.map(e=>(0,s.jsx)(r.Option,{value:e,children:e},e))})}}),(0,s.jsx)(f.Bc,{name:"category",component:"div",className:"text-red-500 text-sm"})]}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)(r.Typography,{variant:"small",className:"font-semibold mb-2",children:"News Body"}),(0,s.jsx)(L,{onChange:e=>{n(e),l("body",e)},editorContent:i}),(0,s.jsx)(f.Bc,{name:"body",component:"div",className:"text-red-500 text-sm"})]}),(0,s.jsx)("div",{className:"flex justify-end mt-4 px-6",children:(0,s.jsx)(r.Button,{type:"submit",color:"blue",disabled:(Object.keys(c).length,!i.trim()),children:t?"Update Article":"Create Article"})})]})}})};var _=a(87138),z=a(18399);let D=e=>{let{news:t,onClose:a}=e;return(0,s.jsxs)("div",{className:"bg-white rounded-lg py-6 px-3 max-w-4xl mx-auto max-h-full",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold text-gray-800 mb-6",children:t.title}),(0,s.jsxs)("div",{className:"flex items-center mb-6",children:[(0,s.jsx)(d.default,{src:t.author.profileImageUrl,alt:t.author.username,className:"w-12 h-12 rounded-full mr-3",width:500,height:500}),(0,s.jsxs)("div",{className:"text-sm text-gray-500",children:[(0,s.jsx)("p",{className:"font-medium text-gray-800 break-words",children:t.author.username}),(0,s.jsx)("p",{children:new Date(t.createdAt).toLocaleDateString()})]})]}),(0,s.jsx)(d.default,{src:t.imageUrl,alt:t.title,className:"w-max mx-auto h-max object-cover rounded-lg mb-6 pb-4",width:500,height:500}),(0,s.jsx)("p",{className:"text-lg text-gray-700 break-words max-h-96  prose ",children:(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:h().sanitize(t.newsBody)}})})]})},O=e=>{let{isLandingPage:t}=e,{user:a,loading:d}=(0,u.E)(),[m,h]=(0,l.useState)(!1),[f,p]=(0,l.useState)(null),[j,b]=(0,l.useState)(!1),[y,N]=(0,l.useState)(!1),[v,w]=(0,l.useState)(null),{articles:k,loading:C,error:S,addArticle:A,updateArticle:E,deleteArticle:T,setPage:Z,fetchArticles:B,loadNextPage:L}=(0,z.l)(),I=()=>h(!0),U=()=>{p(null),h(!1)},O=async e=>{console.log("New Article Created: ",e),await A(e),U()},q=e=>{p(e),I()},F=e=>{p(e),b(!0)},H=async()=>{await T(f._id),R()},R=()=>{p(null),b(!1)},J=e=>{w(e),N(!0)},M=()=>{w(null),N(!1)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"w-full flex flex-row items-center justify-between text-black",children:[(0,s.jsx)(r.Typography,{variant:"h4",className:"mb-5 text-black",children:"Trending News"}),!d&&!a&&t&&(0,s.jsxs)(_.default,{href:"/login",className:"flex items-center bg-blue-600 text-white hover:bg-blue-700 rounded-lg p-3 transition duration-300 shadow-md",children:[(0,s.jsx)(i.Z,{className:"h-5 w-5 mr-2"}),(0,s.jsx)("span",{className:"font-semibold",children:"Login"})]}),!d&&a&&t&&(0,s.jsxs)(_.default,{href:"/dashboard",className:"flex items-center bg-blue-600 text-white hover:bg-blue-700 rounded-lg p-3 transition duration-300 shadow-md",children:[(0,s.jsx)(n.Z,{className:"h-5 w-5 mr-2"}),(0,s.jsx)("span",{className:"font-semibold",children:"Dashboard"})]})]}),(0,s.jsxs)("section",{className:"grid min-h-screen place-items-center p-8",children:[(0,s.jsx)("div",{className:"container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1",children:k&&!C&&k.map(e=>(0,s.jsx)(x,{img:e.imageUrl,tag:e.category,title:e.title,desc:e.newsBody,date:e.createdAt,author:{img:e.author.profileImageUrl,name:e.author.username},onEdit:()=>q(e),onDelete:()=>F(e),onTextClick:()=>J(e),hideButtons:t},e._id))}),(0,s.jsxs)(r.Button,{variant:"text",size:"lg",color:"gray",className:"flex items-center gap-2 mt-24",onClick:L,children:[(0,s.jsx)(c.Z,{className:"h-5 w-5 font-bold text-gray-900"}),"VIEW MORE"]}),!d&&a&&!t&&(0,s.jsx)("div",{onClick:I,className:"fixed bottom-6 right-6 z-50 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:shadow-2xl cursor-pointer transition-transform transform hover:scale-105",children:(0,s.jsx)(o.Z,{className:"h-6 w-6"})})]}),(0,s.jsx)(g.Z,{open:m,onClose:U,title:f?"Edit Article":"Create Article",children:(0,s.jsx)(P,{onSubmit:O,article:f})}),(0,s.jsxs)(g.Z,{open:j,onClose:R,title:"Confirm Deletion",children:[(0,s.jsxs)(r.Typography,{children:["Are you sure you want to"," ",(0,s.jsx)("span",{className:"text-black font-bold",children:"delete"})," the article titled"," ",(0,s.jsx)("strong",{className:"font-bold text-black",children:null==f?void 0:f.title}),"?"]}),(0,s.jsxs)("div",{className:"flex justify-end mt-4",children:[(0,s.jsx)(r.Button,{variant:"outlined",color:"gray",onClick:R,children:"Cancel"}),(0,s.jsx)(r.Button,{variant:"filled",color:"red",className:"ml-2",onClick:H,children:"Delete"})]})]}),(0,s.jsx)(g.Z,{open:y,onClose:M,title:"View News",isWide:!0,children:(0,s.jsx)(D,{news:v,onClose:M})})]})}}}]);