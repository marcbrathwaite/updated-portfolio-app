!function(e){function t(t){for(var r,o,c=t[0],l=t[1],s=t[2],f=0,p=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;i.push([222,1]),n()}({100:function(e,t,n){},222:function(e,t,n){"use strict";n.r(t);var r=n(36),a=n.n(r),i=n(0),o=n.n(i),c=n(82),l=n.n(c),s=n(91),u=n(19),f=Object(i.createContext)(),p=n(2),m=n.n(p),d=(n(100),function(e){var t=e.route.routes;return o.a.createElement("div",null,Object(u.b)(t))});d.propTypes={route:m.a.object.isRequired};var g={component:d},h=n(11),b=n.n(h),v=n(26),y=n.n(v),x=n(20),w=n.n(x),E=n(85),_=n.n(E),k=n(86),j=n(1),C=n(3),N=n.n(C),O="UNINIT",I="PENDING",P="SUCCESS",S="FAILURE",T={lg:"940px",md:"768px",sm:"480px"},L={collab1:{name:"Shielarose Gandhi",link:"http://shielarosegandhi.com"},collab2:{name:"Janet Bird",link:"http://www.janetbird.io"},collab3:{name:"Jason Mortfield",link:"http://www.jsonmortfield.com"}},R=Object.keys(T).reduce((function(e,t){return e[t]=function(){return Object(j.a)(["@media (max-width:","){","}"],T[t],j.a.apply(void 0,arguments))},e}),{});function A(){var e=N()(["\n    width: 95%;\n  "]);return A=function(){return e},e}function z(){var e=N()(["\n    width: 90%;\n  "]);return z=function(){return e},e}var B=j.b.div.withConfig({displayName:"Wrapper__Container",componentId:"sc-1rm02zx-0"})(["max-width:1280px;width:80%;margin:0 auto;"," ",""],R.lg(z()),R.md(A())),H=function(e){var t=e.className,n=e.children;return o.a.createElement(B,{className:t},n)};H.propTypes={children:m.a.node.isRequired};var q=H;function M(){var e=N()(["\n    font-size: 4.5rem;\n  "]);return M=function(){return e},e}function D(){var e=N()(["\n    font-size: 5rem;\n  "]);return D=function(){return e},e}var F=j.b.div.withConfig({displayName:"Heading__Heading1",componentId:"hxitf-0"})(["font-family:'Roboto',sans-serif;font-weight:bold;font-size:6.5rem;line-height:1.6;color:",";",""],(function(e){return e.invert?"black":"#f1f1f1"}),R.sm(D())),U=j.b.div.withConfig({displayName:"Heading__Heading2",componentId:"hxitf-1"})(["font-family:'Roboto',sans-serif;font-weight:bold;font-size:5rem;text-transform:uppercase;line-height:1.6;color:",";position:relative;text-align:center;margin-bottom:",";align-self:",";::after{content:'';position:absolute;bottom:0;width:10%;left:50%;transform:translateX(-50%);border-bottom:5px solid #2ec4b6;}",""],(function(e){return e.invert?"white":"black"}),(function(e){return e.invert?"30px":"50px"}),(function(e){return e.invert?"stretch":"auto"}),R.sm(M())),J=j.b.div.withConfig({displayName:"Heading__Heading3",componentId:"hxitf-2"})(["font-family:'Roboto',sans-serif;font-weight:bold;font-size:2rem;line-height:1.6;color:",";margin-bottom:20px;"],(function(e){return e.invert?"white":"#2EC4B6"})),Y=function(e){var t=e.className,n=e.level,r=e.tag,a=e.invert,i=e.children,c=r||n;switch(n){case"h1":return o.a.createElement(F,{as:c,className:t,invert:a},i);case"h2":return o.a.createElement(U,{as:c,className:t,invert:a},i);case"h3":return o.a.createElement(J,{as:c,className:t,invert:a},i);default:return null}};Y.defaultProps={tag:null,invert:!1},Y.propTypes={children:m.a.node.isRequired,level:m.a.string.isRequired,tag:m.a.string};var G=Y,W=j.b.p.withConfig({displayName:"Paragraph__PTag",componentId:"u8t2se-0"})(["font-family:'Cabin',sans-serif;font-size:1.8rem;line-height:1.6;color:",";"],(function(e){return e.inverted?"#f1f1f1":"black"})),X=function(e){var t=e.className,n=e.children,r=e.inverted;return o.a.createElement(W,{className:t,inverted:r},n)};X.defaultProps={inverted:!1},X.propTypes={children:m.a.node.isRequired,inverted:m.a.bool};var K=X;function Q(){var e=N()(["\n    flex-direction: column;\n    & li {\n      margin-bottom: 30px;\n      &:last-of-type {\n        margin-bottom: 0;\n      }\n    }\n  "]);return Q=function(){return e},e}var V=j.b.nav.withConfig({displayName:"NavigationBar__NavBar",componentId:"a6rjtu-0"})(["display:flex;position:fixed;top:",";left:0;right:0;background:#36454f;transition:all 0.3s ease-in-out;justify-content:center;align-items:center;padding:10px 0;z-index:90;"],(function(e){return e.isClicked?"0px":"-100%"})),Z=j.b.ul.withConfig({displayName:"NavigationBar__NavList",componentId:"a6rjtu-1"})(["display:flex;list-style:none;height:100%;width:70%;align-items:center;justify-content:space-between;padding:10px 0;",""],R.md(Q())),$=j.b.a.withConfig({displayName:"NavigationBar__NavLink",componentId:"a6rjtu-2"})(["font-family:'Roboto',sans-serif;font-weight:bold;font-size:1.8rem;text-transform:uppercase;line-height:1.6;color:white;text-decoration:none;transition:border-bottom 0.2s;:hover,:active{border-bottom:2px solid #242682;}"]),ee=function(e){var t=e.content,n=e.isHamBurgerClicked,r=e.setSectionRef,a=function(e){e.preventDefault();var t=e.target.name;r(t.slice(1))};return o.a.createElement(V,{isClicked:n},o.a.createElement(Z,null,t.links?t.links.map((function(e){return o.a.createElement("li",{key:e._id},o.a.createElement($,{href:e.linkUrl,onClick:a,name:e.linkUrl},e.linkText))})):null))};ee.propTypes={content:m.a.object.isRequired,isHamBurgerClicked:m.a.bool.isRequired,setSectionRef:m.a.func.isRequired};var te=ee,ne=j.b.header.withConfig({displayName:"Header__HeaderContainer",componentId:"z0dui2-0"})(["height:105vh;background:linear-gradient(to bottom,#242682e0,#242682e0),url('","');background-size:cover;"],(function(e){return e.backgroundImage})),re=j.b.label.withConfig({displayName:"Header__Hamburger",componentId:"z0dui2-1"})(["position:fixed;top:19px;right:30px;font-size:2.5rem;color:#2ec4b6;z-index:100;cursor:pointer;"]),ae=j.b.div.withConfig({displayName:"Header__SubContainer",componentId:"z0dui2-2"})(["position:relative;display:flex;flex-direction:column;justify-content:center;height:85%;"]),ie=j.b.span.withConfig({displayName:"Header__MyName",componentId:"z0dui2-3"})(["color:#2ec4b6;"]),oe=function(e){var t=e.content,n=e.setSectionRef,r=t.backgroundImage,a=t.navigationBar,c=t.headerTitle,l=t.myName,s=t.headerSubtitle,u=Object(i.useState)(!1),f=w()(u,2),p=f[0],m=f[1];return o.a.createElement(o.a.Fragment,null,r&&o.a.createElement(ne,{backgroundImage:r.url},o.a.createElement(re,{onClick:function(){m(!p)}},o.a.createElement("i",{className:"fas fa-bars"})),o.a.createElement(te,{content:a,isHamBurgerClicked:p,setSectionRef:n}),o.a.createElement(ae,null,o.a.createElement(q,null,o.a.createElement(G,{level:"h1"},c," ",o.a.createElement(ie,null,l)),o.a.createElement(K,{inverted:!0},s)))))};oe.propTypes={content:m.a.object.isRequired,setSectionRef:m.a.func.isRequired};var ce=oe;function le(){var e=N()(["\n    text-align: center;\n  "]);return le=function(){return e},e}function se(){var e=N()(["\n  margin-right: 0;\n    margin-bottom: 30px;\n    width: 250px;\n    height: 350px;\n  "]);return se=function(){return e},e}function ue(){var e=N()(["\n    flex-direction: column;\n    align-items: center;\n  "]);return ue=function(){return e},e}var fe=Object(j.b)(q).withConfig({displayName:"About__Container",componentId:"sc-1a21jnj-0"})(["position:relative;z-index:20;"]),pe=j.b.div.withConfig({displayName:"About__ColumnWrapper",componentId:"sc-1a21jnj-1"})(["display:flex;width:100%;",""],R.lg(ue())),me=j.b.div.withConfig({displayName:"About__ImgComtainer",componentId:"sc-1a21jnj-2"})(["width:300px;height:400px;box-shadow:10px 10px #36454f;margin-right:55px;",""],R.lg(se())),de=j.b.img.withConfig({displayName:"About__ProfileImage",componentId:"sc-1a21jnj-3"})(["object-fit:cover;width:100%;height:100%;"]),ge=j.b.div.withConfig({displayName:"About__TextContainer",componentId:"sc-1a21jnj-4"})(["flex:1 0 60%;display:flex;flex-direction:column;justify-content:center;"]),he=Object(j.b)(K).withConfig({displayName:"About__Text",componentId:"sc-1a21jnj-5"})(["margin-bottom:15px;:last-of-type{margin-bottom:0;}",""],R.md(le())),be=function(e){var t=e.content,n=t.title,r=t.profileImage,a=t.paragraphs;return o.a.createElement(fe,null,n&&o.a.createElement(G,{level:"h2"},n),o.a.createElement(pe,null,r&&o.a.createElement(me,null,o.a.createElement(de,{src:r.url,alt:r.description})),o.a.createElement(ge,null,a&&a.map((function(e){return o.a.createElement(he,{key:e._id},e.text)})))))};be.propTypes={content:m.a.object.isRequired};var ve=be,ye=n(55),xe=n.n(ye);function we(){var e=N()(["\n    padding: 8px 10px;\n  "]);return we=function(){return e},e}function Ee(){var e=N()(["\n  align-self: ",";\n  "]);return Ee=function(){return e},e}function _e(){var e=N()(["\n    margin-right: 10px;\n    margin-left: 0;\n  "]);return _e=function(){return e},e}function ke(){var e=N()(["\n    align-self: ",";\n    justify-content: ",";\n  "]);return ke=function(){return e},e}function je(){var e=N()(["\n    width: 100%;\n    text-align: left;\n    margin: 0;\n  "]);return je=function(){return e},e}function Ce(){var e=N()(["\n    margin-bottom: 25px;\n    margin-right: 0;\n  "]);return Ce=function(){return e},e}function Ne(){var e=N()(["\n    flex-direction: ",";\n    align-items: center;\n  "]);return Ne=function(){return e},e}var Oe=Object(j.b)(q).withConfig({displayName:"Projects__Container",componentId:"sc-1xvafic-0"})(["position:relative;z-index:40;"]),Ie=j.b.div.withConfig({displayName:"Projects__ProjectContainer",componentId:"sc-1xvafic-1"})(["display:flex;margin-bottom:50px;padding:45px 35px;background:white;border-radius:15px;flex-wrap:wrap;:last-of-type{margin-bottom:0;}",""],R.lg(Ne(),(function(e){return e.isLeftAlign?"column":"column-reverse"}))),Pe=j.b.div.withConfig({displayName:"Projects__ProjectImageContainer",componentId:"sc-1xvafic-2"})(["flex:1 0 calc(30% - 30px);margin-right:",";",""],(function(e){return e.isLeftAlign?"60px":"0px"}),R.lg(Ce())),Se=j.b.div.withConfig({displayName:"Projects__ProjectDescContainer",componentId:"sc-1xvafic-3"})(["flex:1 0 calc(70% - 30px);display:flex;flex-direction:column;margin-right:",";text-align:",";",""],(function(e){return e.isLeftAlign?"0":"60px"}),(function(e){return e.isLeftAlign?"left":"right"}),R.lg(je())),Te=Object(j.b)(K).withConfig({displayName:"Projects__ProjectDesc",componentId:"sc-1xvafic-4"})(["margin-bottom:20px;"]),Le=Object(j.b)(K).withConfig({displayName:"Projects__ProjectTechContainer",componentId:"sc-1xvafic-5"})(["margin-bottom:20px;display:flex;flex-wrap:wrap;align-self:",";justify-content:",";",""],(function(e){return e.isLeftAlign?"auto":"flex-end"}),(function(e){return e.isLeftAlign?"auto":"flex-end"}),R.lg(ke(),(function(e){return e.isLeftAlign?"auto":"flex-start"}),(function(e){return e.isLeftAlign?"auto":"flex-start"}))),Re=j.b.span.withConfig({displayName:"Projects__ProjectTech",componentId:"sc-1xvafic-6"})(["display:block;margin-right:",";margin-left:",";border:3px solid black;margin-bottom:5px;padding:3px 5px;:last-of-type{margin-right:0;}",""],(function(e){return e.isLeftAlign?"10px":"0"}),(function(e){return e.isLeftAlign?"0":"10px"}),R.lg(_e())),Ae=j.b.a.withConfig({displayName:"Projects__CollabLink",componentId:"sc-1xvafic-7"})(["color:black;"]),ze=j.b.div.withConfig({displayName:"Projects__ButtonContainer",componentId:"sc-1xvafic-8"})(["display:flex;align-self:",";",""],(function(e){return e.isLeftAlign?"auto":"flex-end"}),R.lg(Ee(),(function(e){return e.isLeftAlign?"auto":"flex-start"}))),Be=j.b.a.withConfig({displayName:"Projects__Button",componentId:"sc-1xvafic-9"})(["display:block;font-size:1.8rem;color:white;background:#242582;text-decoration:none;margin-right:10px;padding:10px 15px;border:1px solid transparent;transition:background border 0.2s;text-align:center;:last-of-type{margin-right:0;}:hover,:active{border:1px solid black;background:white;color:#242582;}",""],R.sm(we())),He=function(e){var t=e.content,n=t.title,r=t.projects;return o.a.createElement(Oe,null,n&&o.a.createElement(G,{level:"h2"},n),r&&r.map((function(e,t){var n=e.id,r=e.title,a=e.description,c=e.projectImage,l=e.techStackList,s=e.liveButtonText,u=e.liveButtonTitle,f=e.liveButtonUrl,p=e.githubButtonText,m=e.githubButtonTitle,d=e.githubButtonUrl,g=t%2==0;return o.a.createElement(Ie,{key:n,isLeftAlign:g},g?o.a.createElement(i.Fragment,null,o.a.createElement(Pe,{isLeftAlign:g},f&&o.a.createElement("a",{href:f,target:"_blank",rel:"noopener noreferrer"},c.url&&c.description&&o.a.createElement("img",{src:c.url,alt:c.description}))),o.a.createElement(Se,{isLeftAlign:g},r&&o.a.createElement(G,{level:"h3"},r),a&&o.a.createElement(Te,null,xe()(a,/(collab\d)/,(function(e,t){return o.a.createElement(Ae,{key:t,href:L[e].link,target:"_blank",rel:"noopener noreferrer"},L[e].name)}))),l&&o.a.createElement(Le,{isLeftAlign:g},l.map((function(e,t){return o.a.createElement(Re,{key:"".concat(e,"-").concat(t),isLeftAlign:g},e)}))),o.a.createElement(ze,{isLeftAlign:g},f&&u&&s&&o.a.createElement(Be,{href:f,title:u,target:"_blank",rel:"noopener noreferrer"},s),p&&m&&d&&o.a.createElement(Be,{href:d,title:m,target:"_blank",rel:"noopener noreferrer"},p)))):o.a.createElement(i.Fragment,null,o.a.createElement(Se,{isLeftAlign:g},r&&o.a.createElement(G,{level:"h3"},r),a&&o.a.createElement(Te,null,xe()(a,/(collab\d)/,(function(e,t){return o.a.createElement(Ae,{key:t,href:L[e].link,target:"_blank",rel:"noopener noreferrer"},L[e].name)}))),l&&o.a.createElement(Le,{isLeftAlign:g},l.map((function(e,t){return o.a.createElement(Re,{key:"".concat(e,"-").concat(t),isLeftAlign:g},e)}))),o.a.createElement(ze,{isLeftAlign:g},f&&u&&s&&o.a.createElement(Be,{href:f,title:u,target:"_blank",rel:"noopener noreferrer"},s),p&&m&&d&&o.a.createElement(Be,{href:d,title:m,target:"_blank",rel:"noopener noreferrer"},p))),o.a.createElement(Pe,{isLeftAlign:g},o.a.createElement("a",{href:f,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:c.url,alt:c.description})))))})))};He.propTypes={content:m.a.object.isRequired};var qe=He,Me=j.b.i.withConfig({displayName:"Skill__Icon",componentId:"sc-1fa5vdi-0"})(["font-size:7.5rem;color:#36454f;"]),De=Object(j.b)(K).withConfig({displayName:"Skill__SkillName",componentId:"sc-1fa5vdi-1"})(["margin-top:15px;color:#36454f;text-align:center;"]),Fe=function(e){var t=e.className,n=e.skillName;return o.a.createElement(i.Fragment,null,o.a.createElement(Me,{className:t}),o.a.createElement(De,null,n))};Fe.propTypes={className:m.a.string.isRequired,skillName:m.a.string.isRequired};var Ue=Fe;function Je(){var e=N()(["\n    flex: 1 0 33.33%;\n    &:nth-of-type(n+4) {\n        margin-top: 50px;\n    }\n  "]);return Je=function(){return e},e}var Ye=Object(j.b)(q).withConfig({displayName:"TechSkills__Container",componentId:"ievwd4-0"})(["position:relative;z-index:30;"]),Ge=j.b.ul.withConfig({displayName:"TechSkills__SkillsList",componentId:"ievwd4-1"})(["display:flex;flex-wrap:wrap;"]),We=j.b.li.withConfig({displayName:"TechSkills__SkillItem",componentId:"ievwd4-2"})(["flex:1 0 25%;display:flex;flex-direction:column;align-items:center;:nth-of-type(n + 5){margin-top:50px;}",""],R.sm(Je())),Xe=function(e){var t=e.content,n=t.title,r=t.skills;return o.a.createElement(Ye,null,n&&o.a.createElement(G,{level:"h2"},n),r&&o.a.createElement(Ge,null,r.map((function(e){var t=e.id,n=e.skillName,r=e.deviconClassName;return o.a.createElement(We,{key:t},o.a.createElement(Ue,{className:r,skillName:n}))}))))};Xe.propTypes={content:m.a.object.isRequired};var Ke=Xe;function Qe(){var e=N()(["\n    letter-spacing: 1px;\n  "]);return Qe=function(){return e},e}function Ve(){var e=N()(["\n    font-size: 1.8rem;\n  "]);return Ve=function(){return e},e}var Ze=Object(j.b)(q).withConfig({displayName:"Contact__Container",componentId:"sc-1h0xb7-0"})(["position:relative;z-index:30;display:flex;flex-direction:column;align-items:center;"]),$e=Object(j.b)(K).withConfig({displayName:"Contact__ContactText",componentId:"sc-1h0xb7-1"})(["color:white;margin-bottom:10px;text-align:center;"]),et=j.b.a.withConfig({displayName:"Contact__EmailLink",componentId:"sc-1h0xb7-2"})(["color:#2ec4b6;text-decoration:none;letter-spacing:5px;font-size:2.2rem;transition:color 0.2s;:hover,:active{color:white;}"," ",""],R.md(Ve()),R.sm(Qe())),tt=j.b.ul.withConfig({displayName:"Contact__SocialList",componentId:"sc-1h0xb7-3"})(["display:flex;"]),nt=j.b.li.withConfig({displayName:"Contact__SocialItem",componentId:"sc-1h0xb7-4"})(["margin-right:20px;:last-of-type{margin-right:0;}"]),rt=j.b.a.withConfig({displayName:"Contact__SocialLink",componentId:"sc-1h0xb7-5"})(["font-size:2.2rem;color:white;transition:color 0.2s;&:hover,&:active{color:#2ec4b6;}"]),at=function(e){var t=e.content,n=t.title,r=t.paragraphsAndLinks,a=t.socialMediaLinks;return o.a.createElement(Ze,null,n&&o.a.createElement(G,{level:"h2",invert:!0},n),r&&r.map((function(e){var t=e.id,n=e.text,r=e.linkText,a=e.linkUrl;return o.a.createElement($e,{key:t},r&&a&&o.a.createElement(et,{href:a},r),n&&o.a.createElement(i.Fragment,null,n))})),o.a.createElement(tt,null,a&&a.map((function(e){var t=e.id,n=e.linkText,r=e.linkUrl,a=e.fontawesomeClass;return o.a.createElement(nt,{key:t},o.a.createElement(rt,{href:r,target:"_blank"},o.a.createElement("i",{className:a}),o.a.createElement("span",{className:"visuallyhidden"},n)))}))))};at.propTypes={content:m.a.object.isRequired};var it=at,ot=Object(j.b)(K).withConfig({displayName:"Footer__FooterText",componentId:"t0vjhs-0"})(["color:#36454f;text-align:center;"]),ct=j.b.a.withConfig({displayName:"Footer__FooterLink",componentId:"t0vjhs-1"})(["color:#36454f;text-decoration:none;transition:color 0.2s;&:hover,&:active{color:#2ec4b6;}"]),lt=function(e){var t=e.content,n=t.footerText,r=t.photoCreditLinkText,a=t.photoCreditLinkUrl;return o.a.createElement(q,null,n&&o.a.createElement(ot,null,n," ",r&&a&&o.a.createElement(ct,{href:a},r)))};lt.propTypes={content:m.a.object.isRequired};var st=lt,ut=j.b.section.withConfig({displayName:"MyPortfolio__AboutSection",componentId:"sc-1y66pnc-0"})(["padding-top:50px;position:relative;padding-bottom:200px;::after{z-index:10;content:'';position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;background:white;transform:skewY(-5deg);transform-origin:top left;}"]),ft=j.b.section.withConfig({displayName:"MyPortfolio__ProjectSection",componentId:"sc-1y66pnc-1"})(["padding-top:100px;padding-bottom:200px;position:relative;background:#eaedf4;::after{content:'';position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;background:inherit;transform:skewY(-5deg);transform-origin:top left;}"]),pt=j.b.section.withConfig({displayName:"MyPortfolio__SkillsSection",componentId:"sc-1y66pnc-2"})(["padding-top:50px;padding-bottom:200px;background:white;position:relative;::after{content:'';position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;background:inherit;transform:skewY(5deg);transform-origin:top right;}"]),mt=j.b.section.withConfig({displayName:"MyPortfolio__ContactSection",componentId:"sc-1y66pnc-3"})(["padding-top:50px;padding-bottom:75px;background:#36454f;position:relative;::after{content:'';position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;background:inherit;transform:skewY(5deg);transform-origin:top right;}"]),dt=j.b.footer.withConfig({displayName:"MyPortfolio__FooterSection",componentId:"sc-1y66pnc-4"})(["padding:5px 0;background:#eaedf4;"]),gt=function(e){var t=e.data,n=e.urlHash,r=t.headerSection,a=t.sections,c=t.footerSection,l=Object(i.useRef)(null),s=Object(i.useRef)(null),u=Object(i.useRef)(null),f=Object(i.useRef)(null),p={about:l,work:s,skills:u,contact:f},m=Object(i.useState)(n),d=w()(m,2),g=d[0],h=d[1];return Object(i.useEffect)((function(){p[g]&&h(n)}),[n]),Object(i.useEffect)((function(){if(g){var e=p[g].current.offsetTop;window.scrollTo({top:e,left:0,behavior:"smooth"}),h(void 0)}}),[g]),o.a.createElement(o.a.Fragment,null,o.a.createElement(k.Helmet,null,o.a.createElement("title",null,"Marc Brathwaite | Developer"),o.a.createElement("meta",{name:"description",content:"Marc Brathwaite Portfolio"}),o.a.createElement("meta",{name:"keywords",content:"Marc Brathwaite,Developer,Software"}),o.a.createElement("meta",{name:"author",content:"Marc Brathwaite"})),r&&o.a.createElement(ce,{content:r,setSectionRef:h}),o.a.createElement("main",null,a&&a.map((function(e){switch(e._type){case"aboutSection":return o.a.createElement(ut,{key:e._id,id:e.htmlId,ref:l},o.a.createElement(ve,{content:e}));case"projectSection":return o.a.createElement(ft,{key:e._id,ref:s,id:e.htmlId},o.a.createElement(qe,{content:e}));case"skillsSection":return o.a.createElement(pt,{key:e._id,ref:u,id:e.htmlId},o.a.createElement(Ke,{content:e}));case"contactSection":return o.a.createElement(mt,{key:e._id,ref:f,id:e.htmlId},o.a.createElement(it,{content:e}));default:return null}}))),o.a.createElement(dt,null,c&&o.a.createElement(st,{content:c})))};gt.defaultProps={urlHash:""},gt.propTypes={data:m.a.object.isRequired,urlHash:m.a.string};var ht,bt=gt,vt=n(89),yt=n.n(vt),xt=n(90),wt=n.n(xt),Et=n(56),_t=new Et.ContentfulClient({accessToken:"e15df1169fe48c511457ebd2f3242ca4beca3d59f6d386016da116291aca50c2",spaceId:"358ioy2a6cha"}),kt=new Et.Contentfully(_t),jt=O,Ct=I,Nt=P,Ot=S,It=new(function(){function e(t){var n=t.contentfulType;yt()(this,e),this.contentfulManager=kt,this.contentfulType=n}var t;return wt()(e,[{key:"getContentfulContent",value:(t=y()(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.contentfulManager.getModels({content_type:this.contentfulType});case 2:return t=e.sent,e.abrupt("return",t.items[0]);case 4:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),e}())({contentfulType:"homePage"}),Pt=function(e){var t=e.location,n=e.staticContext,r=Object(i.useContext)(f),a=t.hash.slice(1),c=Object(i.useState)({status:jt,data:{}}),l=w()(c,2),s=l[0],u=l[1],p=s.status,m=s.data,d=p===jt||p===Ct,g=p===Nt,h=p===Ot;Object(i.useEffect)((function(){var e=function(){var e=y()(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u({status:Ct,data:{}}),e.prev=1,e.next=4,It.getContentfulContent();case 4:t=e.sent,u({status:Nt,data:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),u({status:Ot,data:{}});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();s.status!==jt||r?r&&u({status:Nt,data:r}):e()}),[]);var v=m;return n&&(v=_()(m)?n.data:m),o.a.createElement(o.a.Fragment,null,(g||n||r)&&o.a.createElement(bt,{data:v,urlHash:a}),d&&!n&&!r&&o.a.createElement("div",null,"Loading..."),h&&!n&&!r&&o.a.createElement("div",null,"Failure..."))};function St(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Tt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?St(n,!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):St(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Pt.propTypes={location:m.a.object.isRequired};var Lt=[Tt({},g,{routes:[Tt({},{component:Pt,loadData:(ht=y()(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",It.getContentfulContent());case 1:case"end":return e.stop()}}),e)}))),function(){return ht.apply(this,arguments)})},{path:"/",exact:!0})]})];function Rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var At,zt,Bt,Ht=window.document.location.pathname,qt=(At=Lt,zt=Ht,Object(u.a)(At,zt).map((function(e){var t=e.route.loadData;return t?t():null})).map((function(e){if(e)return new Promise((function(t,n){e.then(t).catch(t)}))})));Promise.all(qt).then((function(e){Bt=e.reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Rt(n,!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t)}),{})})),l.a.hydrate(o.a.createElement(f.Provider,{value:Bt},o.a.createElement(s.a,null,o.a.createElement("div",null,Object(u.b)(Lt)))),document.getElementById("root"))}});