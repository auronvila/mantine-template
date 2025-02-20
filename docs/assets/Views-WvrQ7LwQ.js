function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SignIn-_iZ1pB0p.js","assets/index-y8OWP3zI.js","assets/index-DcEPgtnB.css","assets/Title-F8NexOoA.js","assets/Text-RDjPAdg3.js","assets/SignIn-vC25xiuQ.css","assets/Dashboard-0ospS--E.js","assets/Users-6gTpZ9md.js","assets/Pages-V1Z1dhjR.js","assets/Files-ZyGVSn6E.js","assets/Manage-R8YcHzPl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as n,_ as u,z as m,n as _,k as t,N as i,J as x,K as y,M as p,Q as j,S as E,V as l,W as R,o as A,X as f,Y as c}from "./index-y8OWP3zI.js";const P=[{key:"signIn",path:"/sign-in",component:n.lazy(()=>u(()=>import("./SignIn-_iZ1pB0p.js"),__vite__mapDeps([0,1,2,3,4,5]))),authority:[]}],k=[...P],g=[{key:"dashboard",path:"/dashboard",component:n.lazy(()=>u(()=>import("./Dashboard-0ospS--E.js"),__vite__mapDeps([6,1,2]))),authority:[]},{key:"users",path:"/users",component:n.lazy(()=>u(()=>import("./Users-6gTpZ9md.js"),__vite__mapDeps([7,1,2]))),authority:[]},{key:"pages",path:"/dashboard/pages",component:n.lazy(()=>u(()=>import("./Pages-V1Z1dhjR.js"),__vite__mapDeps([8,1,2]))),authority:[]},{key:"files",path:"/dashboard/files",component:n.lazy(()=>u(()=>import("./Files-ZyGVSn6E.js"),__vite__mapDeps([9,1,2]))),authority:[]},{key:"manage",path:"/users/manage",component:n.lazy(()=>u(()=>import("./Manage-R8YcHzPl.js"),__vite__mapDeps([10,1,2]))),authority:[]}],{unAuthenticatedEntryPath:L}=p,V=()=>{const{authenticated:s}=m(),a=_();return s?t.jsx(y,{}):t.jsx(i,{replace:!0,to:`${L}?${x}=${a.pathname}`})},d=({component:s,routeKey:a,...e})=>{const o=_(),r=j(),h=n.useCallback(()=>{r(E(a))},[r,a]);return n.useEffect(()=>{h()},[o,h]),t.jsx(s,{...e})};function b(s=[], a=[], e=!1){const o=n.useMemo(()=>a.some(r=>s.includes(r)),[a,s]);return l(a)||l(s)||typeof a>"u"?!e:o}const v= s=>{const{userAuthority:a=[],authority:e=[],children:o}=s,r=b(a,e);return t.jsx(t.Fragment,{children:r?o:t.jsx(i,{to:"/access-denied"})})},{authenticatedEntryPath:D}=p,I=()=>{const{authenticated:s}=m();return s?t.jsx(i,{to:D}):t.jsx(y,{})},{authenticatedEntryPath:z}=p,O= s=>{const a=A(e=>e.auth.user.role);return t.jsxs(f,{children:[t.jsxs(c,{path:"/",element:t.jsx(V,{}),children:[t.jsx(c,{path:"/",element:t.jsx(i,{replace:!0,to:z})}),g.map((e, o)=>t.jsx(c,{path:e.path,element:t.jsx(v,{userAuthority:a,authority:e.authority,children:t.jsx(d,{routeKey:e.key,component:e.component,...e.authority})})},e.key+o)),t.jsx(c,{path:"*",element:t.jsx(i,{replace:!0,to:"/"})})]}),t.jsx(c,{path:"/",element:t.jsx(I,{}),children:k.map(e=>t.jsx(c,{path:e.path,element:t.jsx(d,{routeKey:e.key,component:e.component})},e.path))})]})},T= s=>t.jsx(n.Suspense,{fallback:t.jsx(R,{}),children:t.jsx(O,{...s})}),$=T;export{$ as V,b as u};
