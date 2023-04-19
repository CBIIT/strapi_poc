"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[8418],{95972:(j,E,t)=>{t.r(E),t.d(E,{default:()=>oe});var e=t(67294),s=t(88767),g=t(86896),a=t(86597),c=t(14087),M=t(185),T=t(53979),O=t(49066),p=t(81912),l=t(89031);const m=async()=>{const{get:d}=(0,a.tg)(),{data:f}=await d((0,l.Gc)("email-templates"));return f},B=d=>{const{put:f}=(0,a.tg)();return f((0,l.Gc)("email-templates"),d)};var y=t(45697),n=t.n(y),r=t(38939),u=t(8060),o=t(79031),i=t(37909),P=t(63237),x=t(75515),I=t(15234),U=t(52624),D=t(12028),J=t(30815),$=t(4585),Q=t(85018);const H=({canUpdate:d,onEditClick:f})=>{const{formatMessage:v}=(0,g.Z)();return e.createElement(r.i,{colCount:3,rowCount:3},e.createElement(u.h,null,e.createElement(o.Tr,null,e.createElement(i.Th,{width:"1%"},e.createElement(P.T,null,v({id:(0,l.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),e.createElement(i.Th,null,e.createElement(x.Z,{variant:"sigma",textColor:"neutral600"},v({id:(0,l.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),e.createElement(i.Th,{width:"1%"},e.createElement(P.T,null,v({id:(0,l.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),e.createElement(I.p,null,e.createElement(o.Tr,{...(0,a.X7)({fn:()=>f("reset_password")})},e.createElement(i.Td,null,e.createElement(U.J,null,e.createElement(J.Z,{"aria-label":v({id:"global.reset-password",defaultMessage:"Reset password"})}))),e.createElement(i.Td,null,e.createElement(x.Z,null,v({id:"global.reset-password",defaultMessage:"Reset password"}))),e.createElement(i.Td,{...a.UW},e.createElement(D.h,{onClick:()=>f("reset_password"),label:v({id:(0,l.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:d&&e.createElement($.Z,null)}))),e.createElement(o.Tr,{...(0,a.X7)({fn:()=>f("email_confirmation")})},e.createElement(i.Td,null,e.createElement(U.J,null,e.createElement(Q.Z,{"aria-label":v({id:(0,l.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),e.createElement(i.Td,null,e.createElement(x.Z,null,v({id:(0,l.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),e.createElement(i.Td,{...a.UW},e.createElement(D.h,{onClick:()=>f("email_confirmation"),label:v({id:(0,l.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:d&&e.createElement($.Z,null)})))))};H.propTypes={canUpdate:n().bool.isRequired,onEditClick:n().func.isRequired};const X=H;var Y=t(94649),w=t(42866),k=t(24969),S=t(2407),q=t(59946),_=t(11276),Z=t(74571),ee=t(64256),te=t(36856),K=t(29728),L=t(87561);const ae=L.Ry().shape({options:L.Ry().shape({from:L.Ry().shape({name:L.Z_().required(a.I0.required),email:L.Z_().email(a.I0.email).required(a.I0.required)}).required(),response_email:L.Z_().email(a.I0.email),object:L.Z_().required(a.I0.required),message:L.Z_().required(a.I0.required)}).required(a.I0.required)}),N=({template:d,onToggle:f,onSubmit:v})=>{const{formatMessage:h}=(0,g.Z)();return e.createElement(w.P,{onClose:f,labelledBy:`${h({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${h({id:(0,l.OB)(d.display),defaultMessage:d.display})}`},e.createElement(k.x,null,e.createElement(S.O,{label:`${h({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${h({id:(0,l.OB)(d.display),defaultMessage:d.display})}`},e.createElement(S.$,null,h({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),e.createElement(S.$,null,h({id:(0,l.OB)(d.display),defaultMessage:d.display})))),e.createElement(Y.J9,{onSubmit:v,initialValues:d,validateOnChange:!1,validationSchema:ae,enableReinitialize:!0},({errors:R,values:A,handleChange:C,isSubmitting:W})=>e.createElement(a.l0,null,e.createElement(q.f,null,e.createElement(_.r,{gap:5},e.createElement(Z.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:C,value:A.options.from.name,error:R?.options?.from?.name,type:"text"})),e.createElement(Z.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:C,value:A.options.from.email,error:R?.options?.from?.email,type:"text"})),e.createElement(Z.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:C,value:A.options.response_email,error:R?.options?.response_email,type:"text"})),e.createElement(Z.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:C,value:A.options.object,error:R?.options?.object,type:"text"})),e.createElement(Z.P,{col:12,s:12},e.createElement(ee.g,{label:h({id:(0,l.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),name:"options.message",onChange:C,value:A.options.message,error:R?.options?.message&&h({id:R.options.message,defaultMessage:R.options.message})})))),e.createElement(te.m,{startActions:e.createElement(K.z,{onClick:f,variant:"tertiary"},"Cancel"),endActions:e.createElement(K.z,{loading:W,type:"submit"},"Finish")}))))};N.propTypes={template:n().shape({display:n().string,icon:n().string,options:n().shape({from:n().shape({name:n().string,email:n().string}),message:n().string,object:n().string,response_email:n().string})}).isRequired,onSubmit:n().func.isRequired,onToggle:n().func.isRequired};const ne=N,le=()=>e.createElement(a.O4,{permissions:p.Z.readEmailTemplates},e.createElement(se,null)),se=()=>{const{formatMessage:d}=(0,g.Z)(),{trackUsage:f}=(0,a.rS)(),{notifyStatus:v}=(0,c.G)(),h=(0,a.lm)(),{lockApp:R,unlockApp:A}=(0,a.o1)(),C=(0,e.useRef)(f),W=(0,s.useQueryClient)();(0,a.go)();const[ie,re]=(0,e.useState)(!1),[V,de]=(0,e.useState)(null),me=(0,e.useMemo)(()=>({update:p.Z.updateEmailTemplates}),[]),{isLoading:ce,allowedActions:{canUpdate:ue}}=(0,a.ss)(me),{status:pe,data:z}=(0,s.useQuery)("email-templates",()=>m(),{onSuccess(){v(d({id:(0,l.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(){h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Ee=ce||pe!=="success",F=()=>{re(b=>!b)},ge=b=>{de(b),F()},G=(0,s.useMutation)(b=>B({"email-templates":b}),{async onSuccess(){await W.invalidateQueries("email-templates"),h({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),C.current("didEditEmailTemplates"),A(),F()},onError(){h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),A()},refetchActive:!0}),{isLoading:fe}=G,ve=b=>{R(),C.current("willEditEmailTemplates");const ye={...z,[V]:b};G.mutate(ye)};return Ee?e.createElement(M.o,{"aria-busy":"true"},e.createElement(a.SL,{name:d({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(T.T,{title:d({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(O.D,null,e.createElement(a.dO,null))):e.createElement(M.o,{"aria-busy":fe},e.createElement(a.SL,{name:d({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(T.T,{title:d({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(O.D,null,e.createElement(X,{onEditClick:ge,canUpdate:ue}),ie&&e.createElement(ne,{template:z[V],onToggle:F,onSubmit:ve})))},oe=le},89031:(j,E,t)=>{t.d(E,{YX:()=>a,Gc:()=>T,OB:()=>O.Z});var e=t(41609),s=t.n(e);const a=p=>Object.keys(p).reduce((l,m)=>{const B=p[m].controllers,y=Object.keys(B).reduce((n,r)=>(s()(B[r])||(n[r]=B[r]),n),{});return s()(y)||(l[m]={controllers:y}),l},{});var c=t(31498);const T=p=>`/${c.Z}/${p}`;var O=t(84757)},2407:(j,E,t)=>{t.d(E,{$:()=>p,O:()=>l});var e=t(85893),s=t(16405),g=t(88972),a=t(41580),c=t(11047),M=t(75515),T=t(63237);const O=(0,g.ZP)(c.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:m})=>m.colors.neutral500};
    }
  }
  :last-of-type ${a.x} {
    display: none;
  }
  :last-of-type ${M.Z} {
    color: ${({theme:m})=>m.colors.neutral800};
    font-weight: ${({theme:m})=>m.fontWeights.bold};
  }
`,p=({children:m})=>(0,e.jsxs)(O,{inline:!0,as:"li",children:[(0,e.jsx)(M.Z,{variant:"pi",textColor:"neutral600",children:m}),(0,e.jsx)(a.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,e.jsx)(s.Z,{})})]});p.displayName="Crumb";const l=({children:m,label:B,...y})=>(0,e.jsxs)(c.k,{...y,children:[(0,e.jsx)(T.T,{children:B}),(0,e.jsx)("ol",{"aria-hidden":!0,children:m})]});l.displayName="Breadcrumbs"},49066:(j,E,t)=>{t.d(E,{D:()=>a});var e=t(67294),s=t(45697),g=t(41580);const a=({children:c})=>e.createElement(g.x,{paddingLeft:10,paddingRight:10},c);a.propTypes={children:s.node.isRequired}},53979:(j,E,t)=>{t.d(E,{T:()=>m});var e=t(67294),s=t(45697),g=t(88972),a=t(41580),c=t(11047);const M=n=>{const r=(0,e.useRef)(null),[u,o]=(0,e.useState)(!0),i=([P])=>{o(P.isIntersecting)};return(0,e.useEffect)(()=>{const P=r.current,x=new IntersectionObserver(i,n);return P&&x.observe(r.current),()=>{P&&x.disconnect()}},[r,n]),[r,u]};var T=t(95355);const O=(n,r)=>{const u=(0,T.W)(r);(0,e.useLayoutEffect)(()=>{const o=new ResizeObserver(u);return Array.isArray(n)?n.forEach(i=>{i.current&&o.observe(i.current)}):n.current&&o.observe(n.current),()=>{o.disconnect()}},[n,u])};var p=t(75515);const l=()=>{const n=(0,e.useRef)(null),[r,u]=(0,e.useState)(null),[o,i]=M({root:null,rootMargin:"0px",threshold:0});return O(o,()=>{o.current&&u(o.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{n.current&&u(n.current.getBoundingClientRect())},[n]),{containerRef:o,isVisible:i,baseHeaderLayoutRef:n,headerSize:r}},m=n=>{const{containerRef:r,isVisible:u,baseHeaderLayoutRef:o,headerSize:i}=l();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:i?.height},ref:r},u&&e.createElement(y,{ref:o,...n})),!u&&e.createElement(y,{...n,sticky:!0,width:i?.width}))};m.displayName="HeaderLayout";const B=(0,g.ZP)(a.x)`
  width: ${n=>n.width}px;
`,y=e.forwardRef(({navigationAction:n,primaryAction:r,secondaryAction:u,subtitle:o,title:i,sticky:P,width:x,...I},U)=>{const D=typeof o=="string";return P?e.createElement(B,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:x,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(c.k,{justifyContent:"space-between"},e.createElement(c.k,null,n&&e.createElement(a.x,{paddingRight:3},n),e.createElement(a.x,null,e.createElement(p.Z,{variant:"beta",as:"h1",...I},i),D?e.createElement(p.Z,{variant:"pi",textColor:"neutral600"},o):o),u?e.createElement(a.x,{paddingLeft:4},u):null),e.createElement(c.k,null,r?e.createElement(a.x,{paddingLeft:2},r):void 0))):e.createElement(a.x,{ref:U,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0},n?e.createElement(a.x,{paddingBottom:2},n):null,e.createElement(c.k,{justifyContent:"space-between"},e.createElement(c.k,{minWidth:0},e.createElement(p.Z,{as:"h1",variant:"alpha",...I},i),u?e.createElement(a.x,{paddingLeft:4},u):null),r),D?e.createElement(p.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},o):o)});y.displayName="BaseHeaderLayout",y.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},y.propTypes={navigationAction:s.node,primaryAction:s.node,secondaryAction:s.node,sticky:s.bool,subtitle:s.oneOfType([s.string,s.node]),title:s.string.isRequired,width:s.number},m.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},m.propTypes={navigationAction:s.node,primaryAction:s.node,secondaryAction:s.node,subtitle:s.oneOfType([s.string,s.node]),title:s.string.isRequired}},185:(j,E,t)=>{t.d(E,{o:()=>c});var e=t(67294),s=t(45697),g=t(88972);const a=g.ZP.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,c=({labelledBy:M,...T})=>{const O=M||"main-content-title";return e.createElement(a,{"aria-labelledby":O,id:"main-content",tabIndex:-1,...T})};c.defaultProps={labelledBy:void 0},c.propTypes={labelledBy:s.string}},30815:(j,E,t)=>{t.d(E,{Z:()=>g});var e=t(85893);const s=a=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0 0 11.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 0 0 3.589-4.831 1.117 1.117 0 0 0-.664-1.418 1.086 1.086 0 0 0-1.393.676 7.769 7.769 0 0 1-2.792 3.758 7.546 7.546 0 0 1-4.41 1.428V4.222h.002a7.492 7.492 0 0 1 3.003.625 7.61 7.61 0 0 1 2.5 1.762l.464.551-2.986 3.042a.186.186 0 0 0 .129.316H22V3.317a.188.188 0 0 0-.112-.172.179.179 0 0 0-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 0 0-3.239-2.293Zm-3.863 1.418V2v2.222Zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778Z",fill:"#212134"})}),g=s}}]);
