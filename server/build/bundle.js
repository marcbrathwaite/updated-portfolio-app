!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("styled-components")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("@babel/runtime/helpers/taggedTemplateLiteral")},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("@babel/runtime/helpers/slicedToArray")},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-string-replace")},function(e,t){e.exports=require("contentfully")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,t){e.exports=require("lodash.isempty")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("path")},function(e,t){},function(e,t,n){"use strict";n.r(t);var r=n(9),a=n.n(r),i=n(12),o=n.n(i),c=(n(19),n(5)),l=n(0),s=n.n(l),u=n(13),f=n(14),p=n(8),m=n(1),d=n.n(m),g=n(15),h=n.n(g),b=n(2),v=n.n(b),x=(n(20),function(e){var t=e.route.routes;return s.a.createElement("div",null,Object(c.renderRoutes)(t))});x.propTypes={route:v.a.object.isRequired};var y={component:x},w=n(4),k=n.n(w),_=n(7),E=n.n(_),C=n(6),j=n.n(C),N=n(16),I=n.n(N),S=n(3),T=n.n(S),P="UNINIT",O="PENDING",q="SUCCESS",L="FAILURE",R={lg:"940px",md:"768px",sm:"480px"},A={collab1:{name:"Shielarose Gandhi",link:"http://shielarosegandhi.com"},collab2:{name:"Janet Bird",link:"http://www.janetbird.io"},collab3:{name:"Jason Mortfield",link:"http://www.jsonmortfield.com"}},z=Object.keys(R).reduce((function(e,t){return e[t]=function(){return Object(m.css)(["@media (max-width:","){","}"],R[t],m.css.apply(void 0,arguments))},e}),{});function B(){var e=T()(["\n    width: 95%;\n  "]);return B=function(){return e},e}function H(){var e=T()(["\n    width: 90%;\n  "]);return H=function(){return e},e}var M=d.a.div.withConfig({displayName:"Wrapper__Container",componentId:"sc-1rm02zx-0"})(["max-width:1280px;width:80%;margin:0 auto;"," ",""],z.lg(H()),z.md(B())),F=function(e){var t=e.className,n=e.children;return s.a.createElement(M,{className:t},n)};F.propTypes={children:v.a.node.isRequired};var D=F;function U(){var e=T()(["\n    font-size: 4.5rem;\n  "]);return U=function(){return e},e}function W(){var e=T()(["\n    font-size: 5rem;\n  "]);return W=function(){return e},e}var Y=d.a.div.withConfig({displayName:"Heading__Heading1",componentId:"hxitf-0"})(["font-family:'Roboto',sans-serif;font-weight:bold;font-size:6.5rem;line-height:1.6;color:",";",""],(function(e){return e.invert?"black":"#f1f1f1"}),z.sm(W())),G=d.a.div.withConfig({displayName:"Heading__Heading2",componentId:"hxitf-1"})(["font-family:'Roboto',sans-serif;font-weight:bold;font-size:5rem;text-transform:uppercase;line-height:1.6;color:",";position:relative;text-align:center;margin-bottom:",";align-self:",";::after{content:'';position:absolute;bottom:0;width:10%;left:50%;transform:translateX(-50%);border-bottom:5px solid #2ec4b6;}",""],(function(e){return e.invert?"white":"black"}),(function(e){return e.invert?"30px":"50px"}),(function(e){return e.invert?"stretch":"auto"}),z.sm(U())),J=d.a.div.withConfig({displayName:"Heading__Heading3",componentId:"hxitf-2"})(["font-family:'Roboto',sans-serif;font-weight:bold;font-size:2rem;line-height:1.6;color:",";margin-bottom:20px;"],(function(e){return e.invert?"white":"#2EC4B6"})),X=function(e){var t=e.className,n=e.level,r=e.tag,a=e.invert,i=e.children,o=r||n;switch(n){case"h1":return s.a.createElement(Y,{as:o,className:t,invert:a},i);case"h2":return s.a.createElement(G,{as:o,className:t,invert:a},i);case"h3":return s.a.createElement(J,{as:o,className:t,invert:a},i);default:return null}};X.defaultProps={tag:null,invert:!1},X.propTypes={children:v.a.node.isRequired,level:v.a.string.isRequired,tag:v.a.string};var K=X,Q=d.a.p.withConfig({displayName:"Paragraph__PTag",componentId:"u8t2se-0"})(["font-family:'Cabin',sans-serif;font-size:1.8rem;line-height:1.6;color:",";"],(function(e){return e.inverted?"#f1f1f1":"black"})),V=function(e){var t=e.className,n=e.children,r=e.inverted;return s.a.createElement(Q,{className:t,inverted:r},n)};V.defaultProps={inverted:!1},V.propTypes={children:v.a.node.isRequired,inverted:v.a.bool};var Z=V;function $(){var e=T()(["\n    flex-direction: column;\n    & li {\n      margin-bottom: 30px;\n      &:last-of-type {\n        margin-bottom: 0;\n      }\n    }\n  "]);return $=function(){return e},e}var ee=d.a.nav.withConfig({displayName:"NavigationBar__NavBar",componentId:"a6rjtu-0"})(["display:flex;position:fixed;top:",";left:0;right:0;background:#36454f;transition:all 0.3s ease-in-out;justify-content:center;align-items:center;padding:10px 0;z-index:90;"],(function(e){return e.isClicked?"0px":"-100%"})),te=d.a.ul.withConfig({displayName:"NavigationBar__NavList",componentId:"a6rjtu-1"})(["display:flex;list-style:none;height:100%;width:70%;align-items:center;justify-content:space-between;padding:10px 0;",""],z.md($())),ne=d.a.a.withConfig({displayName:"NavigationBar__NavLink",componentId:"a6rjtu-2"})(["font-family:'Roboto',sans-serif;font-weight:bold;font-size:1.8rem;text-transform:uppercase;line-height:1.6;color:white;text-decoration:none;transition:border-bottom 0.2s;:hover,:active{border-bottom:2px solid #242682;}"]),re=function(e){var t=e.content,n=e.isHamBurgerClicked,r=e.setSectionRef,a=function(e){e.preventDefault();var t=e.target.name;r(t.slice(1))};return s.a.createElement(ee,{isClicked:n},s.a.createElement(te,null,t.links?t.links.map((function(e){return s.a.createElement("li",{key:e._id},s.a.createElement(ne,{href:e.linkUrl,onClick:a,name:e.linkUrl},e.linkText))})):null))};re.propTypes={content:v.a.object.isRequired,isHamBurgerClicked:v.a.bool.isRequired,setSectionRef:v.a.func.isRequired};var ae=re,ie=d.a.header.withConfig({displayName:"Header__HeaderContainer",componentId:"z0dui2-0"})(["height:105vh;background:linear-gradient(to bottom,#242682e0,#242682e0),url('","');background-size:cover;"],(function(e){return e.backgroundImage})),oe=d.a.label.withConfig({displayName:"Header__Hamburger",componentId:"z0dui2-1"})(["position:fixed;top:19px;right:30px;font-size:2.5rem;color:#2ec4b6;z-index:100;cursor:pointer;"]),ce=d.a.div.withConfig({displayName:"Header__SubContainer",componentId:"z0dui2-2"})(["position:relative;display:flex;flex-direction:column;justify-content:center;height:85%;"]),le=d.a.span.withConfig({displayName:"Header__MyName",componentId:"z0dui2-3"})(["color:#2ec4b6;"]),se=function(e){var t=e.content,n=e.setSectionRef,r=t.backgroundImage,a=t.navigationBar,i=t.headerTitle,o=t.myName,c=t.headerSubtitle,u=Object(l.useState)(!1),f=j()(u,2),p=f[0],m=f[1];return s.a.createElement(s.a.Fragment,null,r&&s.a.createElement(ie,{backgroundImage:r.url},s.a.createElement(oe,{onClick:function(){m(!p)}},s.a.createElement("i",{className:"fas fa-bars"})),s.a.createElement(ae,{content:a,isHamBurgerClicked:p,setSectionRef:n}),s.a.createElement(ce,null,s.a.createElement(D,null,s.a.createElement(K,{level:"h1"},i," ",s.a.createElement(le,null,o)),s.a.createElement(Z,{inverted:!0},c)))))};se.propTypes={content:v.a.object.isRequired,setSectionRef:v.a.func.isRequired};var ue=se;function fe(){var e=T()(["\n    text-align: center;\n  "]);return fe=function(){return e},e}function pe(){var e=T()(["\n  margin-right: 0;\n    margin-bottom: 30px;\n    width: 250px;\n    height: 350px;\n  "]);return pe=function(){return e},e}function me(){var e=T()(["\n    flex-direction: column;\n    align-items: center;\n  "]);return me=function(){return e},e}var de=d()(D).withConfig({displayName:"About__Container",componentId:"sc-1a21jnj-0"})(["position:relative;z-index:20;"]),ge=d.a.div.withConfig({displayName:"About__ColumnWrapper",componentId:"sc-1a21jnj-1"})(["display:flex;width:100%;",""],z.lg(me())),he=d.a.div.withConfig({displayName:"About__ImgComtainer",componentId:"sc-1a21jnj-2"})(["width:300px;height:400px;box-shadow:10px 10px #36454f;margin-right:55px;",""],z.lg(pe())),be=d.a.img.withConfig({displayName:"About__ProfileImage",componentId:"sc-1a21jnj-3"})(["object-fit:cover;width:100%;height:100%;"]),ve=d.a.div.withConfig({displayName:"About__TextContainer",componentId:"sc-1a21jnj-4"})(["flex:1 0 60%;display:flex;flex-direction:column;justify-content:center;"]),xe=d()(Z).withConfig({displayName:"About__Text",componentId:"sc-1a21jnj-5"})(["margin-bottom:15px;:last-of-type{margin-bottom:0;}",""],z.md(fe())),ye=function(e){var t=e.content,n=t.title,r=t.profileImage,a=t.paragraphs;return s.a.createElement(de,null,n&&s.a.createElement(K,{level:"h2"},n),s.a.createElement(ge,null,r&&s.a.createElement(he,null,s.a.createElement(be,{src:r.url,alt:r.description})),s.a.createElement(ve,null,a&&a.map((function(e){return s.a.createElement(xe,{key:e._id},e.text)})))))};ye.propTypes={content:v.a.object.isRequired};var we=ye,ke=n(10),_e=n.n(ke);function Ee(){var e=T()(["\n    padding: 8px 10px;\n  "]);return Ee=function(){return e},e}function Ce(){var e=T()(["\n  align-self: ",";\n  "]);return Ce=function(){return e},e}function je(){var e=T()(["\n    margin-right: 10px;\n    margin-left: 0;\n  "]);return je=function(){return e},e}function Ne(){var e=T()(["\n    align-self: ",";\n    justify-content: ",";\n  "]);return Ne=function(){return e},e}function Ie(){var e=T()(["\n    width: 100%;\n    text-align: left;\n    margin: 0;\n  "]);return Ie=function(){return e},e}function Se(){var e=T()(["\n    margin-bottom: 25px;\n    margin-right: 0;\n  "]);return Se=function(){return e},e}function Te(){var e=T()(["\n    flex-direction: ",";\n    align-items: center;\n  "]);return Te=function(){return e},e}var Pe=d()(D).withConfig({displayName:"Projects__Container",componentId:"sc-1xvafic-0"})(["position:relative;z-index:40;"]),Oe=d.a.div.withConfig({displayName:"Projects__ProjectContainer",componentId:"sc-1xvafic-1"})(["display:flex;margin-bottom:50px;padding:45px 35px;background:white;border-radius:15px;flex-wrap:wrap;:last-of-type{margin-bottom:0;}",""],z.lg(Te(),(function(e){return e.isLeftAlign?"column":"column-reverse"}))),qe=d.a.div.withConfig({displayName:"Projects__ProjectImageContainer",componentId:"sc-1xvafic-2"})(["flex:1 0 calc(30% - 30px);margin-right:",";",""],(function(e){return e.isLeftAlign?"60px":"0px"}),z.lg(Se())),Le=d.a.div.withConfig({displayName:"Projects__ProjectDescContainer",componentId:"sc-1xvafic-3"})(["flex:1 0 calc(70% - 30px);display:flex;flex-direction:column;margin-right:",";text-align:",";",""],(function(e){return e.isLeftAlign?"0":"60px"}),(function(e){return e.isLeftAlign?"left":"right"}),z.lg(Ie())),Re=d()(Z).withConfig({displayName:"Projects__ProjectDesc",componentId:"sc-1xvafic-4"})(["margin-bottom:20px;"]),Ae=d()(Z).withConfig({displayName:"Projects__ProjectTechContainer",componentId:"sc-1xvafic-5"})(["margin-bottom:20px;display:flex;flex-wrap:wrap;align-self:",";justify-content:",";",""],(function(e){return e.isLeftAlign?"auto":"flex-end"}),(function(e){return e.isLeftAlign?"auto":"flex-end"}),z.lg(Ne(),(function(e){return e.isLeftAlign?"auto":"flex-start"}),(function(e){return e.isLeftAlign?"auto":"flex-start"}))),ze=d.a.span.withConfig({displayName:"Projects__ProjectTech",componentId:"sc-1xvafic-6"})(["display:block;margin-right:",";margin-left:",";border:3px solid black;margin-bottom:5px;padding:3px 5px;:last-of-type{margin-right:0;}",""],(function(e){return e.isLeftAlign?"10px":"0"}),(function(e){return e.isLeftAlign?"0":"10px"}),z.lg(je())),Be=d.a.a.withConfig({displayName:"Projects__CollabLink",componentId:"sc-1xvafic-7"})(["color:black;"]),He=d.a.div.withConfig({displayName:"Projects__ButtonContainer",componentId:"sc-1xvafic-8"})(["display:flex;align-self:",";",""],(function(e){return e.isLeftAlign?"auto":"flex-end"}),z.lg(Ce(),(function(e){return e.isLeftAlign?"auto":"flex-start"}))),Me=d.a.a.withConfig({displayName:"Projects__Button",componentId:"sc-1xvafic-9"})(["display:block;font-size:1.8rem;color:white;background:#242582;text-decoration:none;margin-right:10px;padding:10px 15px;border:1px solid transparent;transition:background border 0.2s;text-align:center;:last-of-type{margin-right:0;}:hover,:active{border:1px solid black;background:white;color:#242582;}",""],z.sm(Ee())),Fe=function(e){var t=e.content,n=t.title,r=t.projects;return s.a.createElement(Pe,null,n&&s.a.createElement(K,{level:"h2"},n),r&&r.map((function(e,t){var n=e.id,r=e.title,a=e.description,i=e.projectImage,o=e.techStackList,c=e.liveButtonText,u=e.liveButtonTitle,f=e.liveButtonUrl,p=e.githubButtonText,m=e.githubButtonTitle,d=e.githubButtonUrl,g=t%2==0;return s.a.createElement(Oe,{key:n,isLeftAlign:g},g?s.a.createElement(l.Fragment,null,s.a.createElement(qe,{isLeftAlign:g},f&&s.a.createElement("a",{href:f,target:"_blank",rel:"noopener noreferrer"},i.url&&i.description&&s.a.createElement("img",{src:i.url,alt:i.description}))),s.a.createElement(Le,{isLeftAlign:g},r&&s.a.createElement(K,{level:"h3"},r),a&&s.a.createElement(Re,null,_e()(a,/(collab\d)/,(function(e,t){return s.a.createElement(Be,{key:t,href:A[e].link,target:"_blank",rel:"noopener noreferrer"},A[e].name)}))),o&&s.a.createElement(Ae,{isLeftAlign:g},o.map((function(e,t){return s.a.createElement(ze,{key:"".concat(e,"-").concat(t),isLeftAlign:g},e)}))),s.a.createElement(He,{isLeftAlign:g},f&&u&&c&&s.a.createElement(Me,{href:f,title:u,target:"_blank",rel:"noopener noreferrer"},c),p&&m&&d&&s.a.createElement(Me,{href:d,title:m,target:"_blank",rel:"noopener noreferrer"},p)))):s.a.createElement(l.Fragment,null,s.a.createElement(Le,{isLeftAlign:g},r&&s.a.createElement(K,{level:"h3"},r),a&&s.a.createElement(Re,null,_e()(a,/(collab\d)/,(function(e,t){return s.a.createElement(Be,{key:t,href:A[e].link,target:"_blank",rel:"noopener noreferrer"},A[e].name)}))),o&&s.a.createElement(Ae,{isLeftAlign:g},o.map((function(e,t){return s.a.createElement(ze,{key:"".concat(e,"-").concat(t),isLeftAlign:g},e)}))),s.a.createElement(He,{isLeftAlign:g},f&&u&&c&&s.a.createElement(Me,{href:f,title:u,target:"_blank",rel:"noopener noreferrer"},c),p&&m&&d&&s.a.createElement(Me,{href:d,title:m,target:"_blank",rel:"noopener noreferrer"},p))),s.a.createElement(qe,{isLeftAlign:g},s.a.createElement("a",{href:f,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:i.url,alt:i.description})))))})))};Fe.propTypes={content:v.a.object.isRequired};var De=Fe,Ue=d.a.i.withConfig({displayName:"Skill__Icon",componentId:"sc-1fa5vdi-0"})(["font-size:7.5rem;color:#36454f;"]),We=d()(Z).withConfig({displayName:"Skill__SkillName",componentId:"sc-1fa5vdi-1"})(["margin-top:15px;color:#36454f;text-align:center;"]),Ye=function(e){var t=e.className,n=e.skillName;return s.a.createElement(l.Fragment,null,s.a.createElement(Ue,{className:t}),s.a.createElement(We,null,n))};Ye.propTypes={className:v.a.string.isRequired,skillName:v.a.string.isRequired};var Ge=Ye;function Je(){var e=T()(["\n    flex: 1 0 33.33%;\n    &:nth-of-type(n+4) {\n        margin-top: 50px;\n    }\n  "]);return Je=function(){return e},e}var Xe=d()(D).withConfig({displayName:"TechSkills__Container",componentId:"ievwd4-0"})(["position:relative;z-index:30;"]),Ke=d.a.ul.withConfig({displayName:"TechSkills__SkillsList",componentId:"ievwd4-1"})(["display:flex;flex-wrap:wrap;"]),Qe=d.a.li.withConfig({displayName:"TechSkills__SkillItem",componentId:"ievwd4-2"})(["flex:1 0 25%;display:flex;flex-direction:column;align-items:center;:nth-of-type(n + 5){margin-top:50px;}",""],z.sm(Je())),Ve=function(e){var t=e.content,n=t.title,r=t.skills;return s.a.createElement(Xe,null,n&&s.a.createElement(K,{level:"h2"},n),r&&s.a.createElement(Ke,null,r.map((function(e){var t=e.id,n=e.skillName,r=e.deviconClassName;return s.a.createElement(Qe,{key:t},s.a.createElement(Ge,{className:r,skillName:n}))}))))};Ve.propTypes={content:v.a.object.isRequired};var Ze=Ve;function $e(){var e=T()(["\n    letter-spacing: 1px;\n  "]);return $e=function(){return e},e}function et(){var e=T()(["\n    font-size: 1.8rem;\n  "]);return et=function(){return e},e}var tt=d()(D).withConfig({displayName:"Contact__Container",componentId:"sc-1h0xb7-0"})(["position:relative;z-index:30;display:flex;flex-direction:column;align-items:center;"]),nt=d()(Z).withConfig({displayName:"Contact__ContactText",componentId:"sc-1h0xb7-1"})(["color:white;margin-bottom:10px;text-align:center;"]),rt=d.a.a.withConfig({displayName:"Contact__EmailLink",componentId:"sc-1h0xb7-2"})(["color:#2ec4b6;text-decoration:none;letter-spacing:5px;font-size:2.2rem;transition:color 0.2s;:hover,:active{color:white;}"," ",""],z.md(et()),z.sm($e())),at=d.a.ul.withConfig({displayName:"Contact__SocialList",componentId:"sc-1h0xb7-3"})(["display:flex;"]),it=d.a.li.withConfig({displayName:"Contact__SocialItem",componentId:"sc-1h0xb7-4"})(["margin-right:20px;:last-of-type{margin-right:0;}"]),ot=d.a.a.withConfig({displayName:"Contact__SocialLink",componentId:"sc-1h0xb7-5"})(["font-size:2.2rem;color:white;transition:color 0.2s;&:hover,&:active{color:#2ec4b6;}"]),ct=function(e){var t=e.content,n=t.title,r=t.paragraphsAndLinks,a=t.socialMediaLinks;return s.a.createElement(tt,null,n&&s.a.createElement(K,{level:"h2",invert:!0},n),r&&r.map((function(e){var t=e.id,n=e.text,r=e.linkText,a=e.linkUrl;return s.a.createElement(nt,{key:t},r&&a&&s.a.createElement(rt,{href:a},r),n&&s.a.createElement(l.Fragment,null,n))})),s.a.createElement(at,null,a&&a.map((function(e){var t=e.id,n=e.linkText,r=e.linkUrl,a=e.fontawesomeClass;return s.a.createElement(it,{key:t},s.a.createElement(ot,{href:r,target:"_blank"},s.a.createElement("i",{className:a}),s.a.createElement("span",{className:"visuallyhidden"},n)))}))))};ct.propTypes={content:v.a.object.isRequired};var lt=ct,st=d()(Z).withConfig({displayName:"Footer__FooterText",componentId:"t0vjhs-0"})(["color:#36454f;text-align:center;"]),ut=d.a.a.withConfig({displayName:"Footer__FooterLink",componentId:"t0vjhs-1"})(["color:#36454f;text-decoration:none;transition:color 0.2s;&:hover,&:active{color:#2ec4b6;}"]),ft=function(e){var t=e.content,n=t.footerText,r=t.photoCreditLinkText,a=t.photoCreditLinkUrl;return s.a.createElement(D,null,n&&s.a.createElement(st,null,n," ",r&&a&&s.a.createElement(ut,{href:a},r)))};ft.propTypes={content:v.a.object.isRequired};var pt=ft,mt=d.a.section.withConfig({displayName:"MyPortfolio__AboutSection",componentId:"sc-1y66pnc-0"})(["padding-top:50px;position:relative;padding-bottom:200px;::after{z-index:10;content:'';position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;background:white;transform:skewY(-5deg);transform-origin:top left;}"]),dt=d.a.section.withConfig({displayName:"MyPortfolio__ProjectSection",componentId:"sc-1y66pnc-1"})(["padding-top:100px;padding-bottom:200px;position:relative;background:#eaedf4;::after{content:'';position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;background:inherit;transform:skewY(-5deg);transform-origin:top left;}"]),gt=d.a.section.withConfig({displayName:"MyPortfolio__SkillsSection",componentId:"sc-1y66pnc-2"})(["padding-top:50px;padding-bottom:200px;background:white;position:relative;::after{content:'';position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;background:inherit;transform:skewY(5deg);transform-origin:top right;}"]),ht=d.a.section.withConfig({displayName:"MyPortfolio__ContactSection",componentId:"sc-1y66pnc-3"})(["padding-top:50px;padding-bottom:75px;background:#36454f;position:relative;::after{content:'';position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;background:inherit;transform:skewY(5deg);transform-origin:top right;}"]),bt=d.a.footer.withConfig({displayName:"MyPortfolio__FooterSection",componentId:"sc-1y66pnc-4"})(["padding:5px 0;background:#eaedf4;"]),vt=function(e){var t=e.data,n=e.urlHash,r=t.headerSection,a=t.sections,i=t.footerSection,o=Object(l.useRef)(null),c=Object(l.useRef)(null),u=Object(l.useRef)(null),f=Object(l.useRef)(null),m={about:o,work:c,skills:u,contact:f},d=Object(l.useState)(n),g=j()(d,2),h=g[0],b=g[1];return Object(l.useEffect)((function(){m[h]&&b(n)}),[n]),Object(l.useEffect)((function(){if(h){var e=m[h].current.offsetTop;window.scrollTo({top:e,left:0,behavior:"smooth"}),b(void 0)}}),[h]),s.a.createElement(s.a.Fragment,null,s.a.createElement(p.Helmet,null,s.a.createElement("title",null,"Marc Brathwaite | FullStack Web Developer"),s.a.createElement("meta",{name:"description",content:"The Portfolio Website of Marc Brathwaite describing his background, skills and the web projects he worked on"}),s.a.createElement("meta",{name:"keywords",content:"Marc Brathwaite,Developer,Software"}),s.a.createElement("meta",{name:"author",content:"Marc Brathwaite"})),r&&s.a.createElement(ue,{content:r,setSectionRef:b}),s.a.createElement("main",null,a&&a.map((function(e){switch(e._type){case"aboutSection":return s.a.createElement(mt,{key:e._id,id:e.htmlId,ref:o},s.a.createElement(we,{content:e}));case"projectSection":return s.a.createElement(dt,{key:e._id,ref:c,id:e.htmlId},s.a.createElement(De,{content:e}));case"skillsSection":return s.a.createElement(gt,{key:e._id,ref:u,id:e.htmlId},s.a.createElement(Ze,{content:e}));case"contactSection":return s.a.createElement(ht,{key:e._id,ref:f,id:e.htmlId},s.a.createElement(lt,{content:e}));default:return null}}))),s.a.createElement(bt,null,i&&s.a.createElement(pt,{content:i})))};vt.defaultProps={urlHash:""},vt.propTypes={data:v.a.object.isRequired,urlHash:v.a.string};var xt=vt,yt=Object(l.createContext)(),wt=n(17),kt=n.n(wt),_t=n(18),Et=n.n(_t),Ct=n(11),jt=new Ct.ContentfulClient({accessToken:"e15df1169fe48c511457ebd2f3242ca4beca3d59f6d386016da116291aca50c2",spaceId:"358ioy2a6cha"}),Nt=new Ct.Contentfully(jt),It=P,St=O,Tt=q,Pt=L,Ot=new(function(){function e(t){var n=t.contentfulType;kt()(this,e),this.contentfulManager=Nt,this.contentfulType=n}var t;return Et()(e,[{key:"getContentfulContent",value:(t=E()(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.contentfulManager.getModels({content_type:this.contentfulType});case 2:return t=e.sent,e.abrupt("return",t.items[0]);case 4:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),e}())({contentfulType:"homePage"}),qt=function(e){var t=e.location,n=e.staticContext,r=Object(l.useContext)(yt),a=t.hash.slice(1),i=Object(l.useState)({status:It,data:{}}),o=j()(i,2),c=o[0],u=o[1],f=c.status,p=c.data,m=f===It||f===St,d=f===Tt,g=f===Pt;Object(l.useEffect)((function(){var e=function(){var e=E()(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u({status:St,data:{}}),e.prev=1,e.next=4,Ot.getContentfulContent();case 4:t=e.sent,u({status:Tt,data:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),u({status:Pt,data:{}});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();c.status!==It||r?r&&u({status:Tt,data:r}):e()}),[]);var h=p;return n&&(h=I()(p)?n.data:p),s.a.createElement(s.a.Fragment,null,(d||n||r)&&s.a.createElement(xt,{data:h,urlHash:a}),m&&!n&&!r&&s.a.createElement("div",null,"Loading..."),g&&!n&&!r&&s.a.createElement("div",null,"Failure..."))};qt.propTypes={location:v.a.object.isRequired};var Lt,Rt={component:qt,loadData:(Lt=E()(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ot.getContentfulContent());case 1:case"end":return e.stop()}}),e)}))),function(){return Lt.apply(this,arguments)})},At=function(e){var t=e.staticContext;return(void 0===t?{}:t).notFound=!0,s.a.createElement(K,{level:"h1",invert:!0},"Oops, page not found")};At.defaultProps={staticContext:{}},At.propTypes={staticContext:v.a.object};var zt={component:At};function Bt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ht(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Bt(n,!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Mt=[Ht({},y,{routes:[Ht({},Rt,{path:"/",exact:!0}),Ht({},zt)]})],Ft=a()();Ft.use("/static",a.a.static("./dist")),Ft.get("*",(function(e,t){o.a.readFile("./dist/index.html","utf-8",(function(n,r){if(n)return t.status(500);var a=e.path,i=function(e,t){return Object(c.matchRoutes)(e,t).map((function(e){var t=e.route.loadData;return t?t():null})).map((function(e){if(e)return new Promise((function(t,n){e.then(t).catch(t)}))}))}(Mt,a);Promise.all(i).then((function(e){var n={data:{}};e.forEach((function(e){e&&Object.assign(n.data,e)}));var i=function(e,t,n){var r=new m.ServerStyleSheet,a=Object(u.renderToString)(s.a.createElement(f.StaticRouter,{location:e,context:n},s.a.createElement(m.StyleSheetManager,{sheet:r.instance},s.a.createElement("div",null,Object(c.renderRoutes)(Mt))))),i=r.getStyleTags(),o=p.Helmet.renderStatic();t=t.replace(/(<div id="root">)(<\/div>)/,(function(e,t,n){return t+a+n}));var l=o.title.toString()+o.meta.toString()+i,d=t.indexOf("</head>");return t.slice(0,d)+l+t.slice(d)}(a,r,n);n.notFound&&t.status(404),t.send(i)}))}))}));var Dt=process.env.PORT||3e3;Ft.listen(Dt,(function(){console.log("Application is running on http://localhost:3000/")}))}]);