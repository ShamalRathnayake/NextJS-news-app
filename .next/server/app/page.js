(()=>{var e={};e.id=931,e.ids=[931],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},41147:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d});var i=r(3003),s=r(14293),n=r(66550),o=r.n(n),a=r(86979),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,26734)),"C:\\Users\\shama\\Desktop\\New folder\\news-app\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,10214)),"C:\\Users\\shama\\Desktop\\New folder\\news-app\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,52075,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\shama\\Desktop\\New folder\\news-app\\app\\page.js"],c={require:r,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},13117:(e,t,r)=>{Promise.resolve().then(r.bind(r,14595)),Promise.resolve().then(r.t.bind(r,92481,23))},33010:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{ViewArticles:()=>n,default:()=>o});var s=r(71851);let e=await (0,s.createProxy)(String.raw`C:\Users\shama\Desktop\New folder\news-app\app\components\ViewArticles\ViewArticles.js`),n=e.ViewArticles,o=e.default;i()}catch(e){i(e)}},1)},26734:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{default:()=>a});var s=r(89351);r(74894);var n=r(33010),o=e([n]);function a(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"bg-white p-6",children:(0,s.jsx)(n.default,{isLandingPage:!0})})})}n=(o.then?(await o)():o)[0],i()}catch(e){i(e)}})},74894:(e,t,r)=>{"use strict";r(91902)},9455:(e,t,r)=>{"use strict";let{createProxy:i}=r(71851);e.exports=i("C:\\Users\\shama\\Desktop\\New folder\\news-app\\node_modules\\next\\dist\\client\\image-component.js")},7306:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(25062);let i=r(27660),s=r(22444);function n(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,d,{src:u,sizes:c,unoptimized:p=!1,priority:f=!1,loading:m,className:g,quality:h,width:w,height:v,fill:b=!1,style:y,overrideSrc:x,onLoad:_,onLoadingComplete:j,placeholder:P="empty",blurDataURL:S,fetchPriority:C,decoding:E="async",layout:O,objectFit:k,objectPosition:z,lazyBoundary:M,lazyRoot:A,...D}=e,{imgConf:I,showAltText:G,blurComplete:N,defaultLoader:R}=t,q=I||s.imageConfigDefault;if("allSizes"in q)a=q;else{let e=[...q.deviceSizes,...q.imageSizes].sort((e,t)=>e-t),t=q.deviceSizes.sort((e,t)=>e-t);a={...q,allSizes:e,deviceSizes:t}}if(void 0===R)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=D.loader||R;delete D.loader,delete D.srcSet;let U="__next_img_default"in F;if(U){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...i}=t;return e(i)}}if(O){"fill"===O&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!c&&(c=t)}let V="",L=o(w),B=o(v);if((r=u)&&"object"==typeof r&&(n(r)||void 0!==r.src)){let e=n(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,V=e.src,!b){if(L||B){if(L&&!B){let t=L/e.width;B=Math.round(e.height*t)}else if(!L&&B){let t=B/e.height;L=Math.round(e.width*t)}}else L=e.width,B=e.height}}let W=!f&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:V)||u.startsWith("data:")||u.startsWith("blob:"))&&(p=!0,W=!1),a.unoptimized&&(p=!0),U&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(p=!0);let T=o(h),J=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:z}:{},G?{}:{color:"transparent"},y),Y=N||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:L,heightInt:B,blurWidth:l,blurHeight:d,blurDataURL:S||"",objectFit:J.objectFit})+'")':'url("'+P+'")',H=Y?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},K=function(e){let{config:t,src:r,unoptimized:i,width:s,quality:n,sizes:o,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:s}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,o),u=l.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:l.map((e,i)=>a({config:t,src:r,quality:n,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:a({config:t,src:r,quality:n,width:l[u]})}}({config:a,src:u,unoptimized:p,width:L,quality:T,sizes:c,loader:F});return{props:{...D,loading:W?"lazy":m,fetchPriority:C,width:L,height:B,decoding:E,className:g,style:{...J,...H},sizes:K.sizes,srcSet:K.srcSet,src:x||K.src},meta:{unoptimized:p,priority:f,placeholder:P,fill:b}}}},27660:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:s,blurDataURL:n,objectFit:o}=e,a=i?40*i:t,l=s?40*s:r,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},22444:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},91902:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return a}});let i=r(73925),s=r(7306),n=r(9455),o=i._(r(22634));function a(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=n.Image},22634:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:s}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},25062:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[147,912,973,102,504],()=>r(41147));module.exports=i})();