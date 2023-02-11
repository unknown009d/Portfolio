import{S as Y,i as K,s as J,x as Z,a as j,k,r as q,y as W,c as N,l as E,m as H,u as z,h as d,P as F,p as c,z as U,b as V,E as v,n as x,f as D,t as A,A as G,o as ue,Q as Oe,e as te,g as ne,d as re,R as Be,v as ee,T as qe,L as me,M as ge,J as X,q as ae,U as se,K as he,O as fe}from"../../chunks/index-5b52a252.js";import{H as ze}from"../../chunks/Header-ba66ef09.js";import{H as Re}from"../../chunks/HeadDoc-7531f369.js";import{S as ve,C as Ze}from"../../chunks/Contact-c6287a23.js";const We=""+new URL("../../assets/Hand-c180ed5c.svg",import.meta.url).href;function Ue(i){let e,l,t,s,n,o,h,f,r,u,a,w,g,_,L,m,b;return e=new ze({}),{c(){Z(e.$$.fragment),l=j(),t=k("div"),s=k("h2"),n=q(`Hey there
		`),o=k("img"),f=j(),r=k("h1"),u=q("I’m"),a=k("br"),w=q(" Drubajyoti"),g=k("br"),_=q(" Debnath"),L=j(),m=k("p"),this.h()},l(I){W(e.$$.fragment,I),l=N(I),t=E(I,"DIV",{class:!0});var $=H(t);s=E($,"H2",{class:!0});var y=H(s);n=z(y,`Hey there
		`),o=E(y,"IMG",{src:!0,id:!0,class:!0,alt:!0}),y.forEach(d),f=N($),r=E($,"H1",{class:!0});var C=H(r);u=z(C,"I’m"),a=E(C,"BR",{class:!0}),w=z(C," Drubajyoti"),g=E(C,"BR",{class:!0}),_=z(C," Debnath"),C.forEach(d),L=N($),m=E($,"P",{class:!0}),H(m).forEach(d),$.forEach(d),this.h()},h(){F(o.src,h=We)||c(o,"src",h),c(o,"id","wi"),c(o,"class","wave-icon svelte-1w2b3a1"),c(o,"alt","👋🏽"),c(s,"class","normal-heading svelte-1w2b3a1"),c(a,"class","mb-break"),c(g,"class","mb-break"),c(r,"class","fancy-font svelte-1w2b3a1"),c(m,"class","small-description svelte-1w2b3a1"),c(t,"class","landing-content svelte-1w2b3a1")},m(I,$){U(e,I,$),V(I,l,$),V(I,t,$),v(t,s),v(s,n),v(s,o),v(t,f),v(t,r),v(r,u),v(r,a),v(r,w),v(r,g),v(r,_),v(t,L),v(t,m),i[1](m),b=!0},p:x,i(I){b||(D(e.$$.fragment,I),b=!0)},o(I){A(e.$$.fragment,I),b=!1},d(I){G(e,I),I&&d(l),I&&d(t),i[1](null)}}}function Ge(i,e,l){let t;ue(async()=>{let n=`
		An introvert developer with a focus on elevating better User Interface / Experience, I strive to bring
		ideas to life through technology. Pursuing a B.Tech in Computer Science & Engineering. My
		commitment to continuous learning and exploration of new technologies, paired with my passion
		for <abbr title="Free and Open-Source Software">FOSS</abbr> enables me to bring unique and impactful solutions to the
		table. btw, I use Arch.
		`;const o=await fetch("dynamic/landing.json");o.ok&&(n=(await o.json())[0].about),l(0,t.innerHTML=n,t)});function s(n){Oe[n?"unshift":"push"](()=>{t=n,l(0,t)})}return[t,s]}class Xe extends Y{constructor(e){super(),K(this,e,Ge,Ue,J,{})}}function _e(i,e,l){const t=i.slice();return t[1]=e[l],t}function pe(i){let e,l,t,s,n=[],o=new Map,h;l=new ve({props:{heading:"Academic Experience",sub:"Educational background in a reverse-chronological order"}});let f=i[0];const r=u=>u[1].id;for(let u=0;u<f.length;u+=1){let a=_e(i,f,u),w=r(a);o.set(w,n[u]=we(w,a))}return{c(){e=k("div"),Z(l.$$.fragment),t=j(),s=k("div");for(let u=0;u<n.length;u+=1)n[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var a=H(e);W(l.$$.fragment,a),t=N(a),s=E(a,"DIV",{class:!0});var w=H(s);for(let g=0;g<n.length;g+=1)n[g].l(w);w.forEach(d),a.forEach(d),this.h()},h(){c(s,"class","school-container svelte-1f9cish"),c(e,"class","education p-padding svelte-1f9cish")},m(u,a){V(u,e,a),U(l,e,null),v(e,t),v(e,s);for(let w=0;w<n.length;w+=1)n[w].m(s,null);h=!0},p(u,a){a&1&&(f=u[0],n=Be(n,a,r,1,u,f,o,s,qe,we,null,_e))},i(u){h||(D(l.$$.fragment,u),h=!0)},o(u){A(l.$$.fragment,u),h=!1},d(u){u&&d(e),G(l);for(let a=0;a<n.length;a+=1)n[a].d()}}}function we(i,e){let l,t,s,n,o,h,f,r=e[1].name+"",u,a,w,g=e[1].course+"",_,L,m,b=e[1].duration+"",I,$;return{key:i,first:null,c(){l=k("div"),t=k("div"),s=k("img"),o=j(),h=k("div"),f=k("p"),u=q(r),a=j(),w=k("p"),_=q(g),L=j(),m=k("small"),I=q(b),$=j(),this.h()},l(y){l=E(y,"DIV",{class:!0});var C=H(l);t=E(C,"DIV",{class:!0});var B=H(t);s=E(B,"IMG",{src:!0,alt:!0,class:!0}),B.forEach(d),o=N(C),h=E(C,"DIV",{class:!0});var T=H(h);f=E(T,"P",{class:!0});var R=H(f);u=z(R,r),R.forEach(d),a=N(T),w=E(T,"P",{class:!0});var S=H(w);_=z(S,g),S.forEach(d),L=N(T),m=E(T,"SMALL",{class:!0});var M=H(m);I=z(M,b),M.forEach(d),T.forEach(d),$=N(C),C.forEach(d),this.h()},h(){F(s.src,n=e[1].img)||c(s,"src",n),c(s,"alt","School Logo"),c(s,"class","svelte-1f9cish"),c(t,"class","school-img svelte-1f9cish"),c(f,"class","name svelte-1f9cish"),c(w,"class","course svelte-1f9cish"),c(m,"class","duration svelte-1f9cish"),c(h,"class","school-content svelte-1f9cish"),c(l,"class","school svelte-1f9cish"),this.first=l},m(y,C){V(y,l,C),v(l,t),v(t,s),v(l,o),v(l,h),v(h,f),v(f,u),v(h,a),v(h,w),v(w,_),v(h,L),v(h,m),v(m,I),v(l,$)},p(y,C){e=y,C&1&&!F(s.src,n=e[1].img)&&c(s,"src",n),C&1&&r!==(r=e[1].name+"")&&ee(u,r),C&1&&g!==(g=e[1].course+"")&&ee(_,g),C&1&&b!==(b=e[1].duration+"")&&ee(I,b)},d(y){y&&d(l)}}}function Fe(i){let e,l,t=i[0].length>0&&pe(i);return{c(){t&&t.c(),e=te()},l(s){t&&t.l(s),e=te()},m(s,n){t&&t.m(s,n),V(s,e,n),l=!0},p(s,[n]){s[0].length>0?t?(t.p(s,n),n&1&&D(t,1)):(t=pe(s),t.c(),D(t,1),t.m(e.parentNode,e)):t&&(ne(),A(t,1,1,()=>{t=null}),re())},i(s){l||(D(t),l=!0)},o(s){A(t),l=!1},d(s){t&&t.d(s),s&&d(e)}}}function Ye(i,e,l){let t=[];return ue(async()=>{const s=await fetch("dynamic/education.json");if(s.ok){const n=await s.json();l(0,t=n)}}),[t]}class Ke extends Y{constructor(e){super(),K(this,e,Ye,Fe,J,{})}}function Je(i){let e,l,t,s,n,o;return{c(){e=k("a"),l=me("svg"),t=me("path"),s=me("path"),this.h()},l(h){e=E(h,"A",{href:!0,class:!0,id:!0});var f=H(e);l=ge(f,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,class:!0});var r=H(l);t=ge(r,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0,class:!0}),H(t).forEach(d),s=ge(r,"path",{d:!0,fill:!0,class:!0}),H(s).forEach(d),r.forEach(d),f.forEach(d),this.h()},h(){c(t,"fill-rule","evenodd"),c(t,"clip-rule","evenodd"),c(t,"d","M34.0597 101.061L43.6057 91.5147C44.1915 90.9289 44.1915 89.9792 43.6057 89.3934C43.0199 88.8076 42.0701 88.8076 41.4843 89.3934L34.4991 96.3787L34.4991 62H31.4991L31.4991 96.3787L24.5138 89.3934C23.928 88.8076 22.9783 88.8076 22.3925 89.3934C21.8067 89.9792 21.8067 90.9289 22.3925 91.5147L31.9384 101.061C32.5242 101.646 33.4739 101.646 34.0597 101.061ZM31.4991 21H34.4991L34.4991 0H31.4991L31.4991 21Z"),c(t,"fill","#ACA1F5"),c(t,"class","svelte-95gdrw"),c(s,"d","M25.3387 28.2727H27.2733L29.8643 34.5966H29.9665L32.5574 28.2727H34.4921V37H32.975V31.0043H32.8941L30.4822 36.9744H29.3486L26.9367 30.9915H26.8557V37H25.3387V28.2727ZM36.3371 28.2727H38.1226L40.2576 32.1335H40.3428L42.4777 28.2727H44.2632L41.0885 33.7443V37H39.5118V33.7443L36.3371 28.2727ZM4.25168 54L0.714039 41.6364H3.56951L5.61603 50.2269H5.71866L7.97647 41.6364H10.4214L12.6732 50.245H12.7819L14.8284 41.6364H17.6839L14.1462 54H11.5986L9.24422 45.9165H9.14763L6.79927 54H4.25168ZM30.7672 47.8182C30.7672 49.1664 30.5116 50.3134 30.0005 51.2592C29.4934 52.205 28.8011 52.9274 27.9238 53.4265C27.0504 53.9215 26.0684 54.169 24.9777 54.169C23.879 54.169 22.893 53.9195 22.0196 53.4205C21.1463 52.9214 20.4561 52.199 19.949 51.2532C19.4419 50.3074 19.1883 49.1624 19.1883 47.8182C19.1883 46.4699 19.4419 45.3229 19.949 44.3771C20.4561 43.4313 21.1463 42.7109 22.0196 42.2159C22.893 41.7169 23.879 41.4673 24.9777 41.4673C26.0684 41.4673 27.0504 41.7169 27.9238 42.2159C28.8011 42.7109 29.4934 43.4313 30.0005 44.3771C30.5116 45.3229 30.7672 46.4699 30.7672 47.8182ZM28.1169 47.8182C28.1169 46.9448 27.9861 46.2083 27.7245 45.6087C27.467 45.009 27.1027 44.5542 26.6319 44.2443C26.161 43.9344 25.6096 43.7795 24.9777 43.7795C24.3459 43.7795 23.7945 43.9344 23.3236 44.2443C22.8527 44.5542 22.4865 45.009 22.2249 45.6087C21.9673 46.2083 21.8385 46.9448 21.8385 47.8182C21.8385 48.6915 21.9673 49.428 22.2249 50.0277C22.4865 50.6274 22.8527 51.0821 23.3236 51.392C23.7945 51.7019 24.3459 51.8569 24.9777 51.8569C25.6096 51.8569 26.161 51.7019 26.6319 51.392C27.1027 51.0821 27.467 50.6274 27.7245 50.0277C27.9861 49.428 28.1169 48.6915 28.1169 47.8182ZM33.7235 54V41.6364H38.6013C39.5351 41.6364 40.3319 41.8034 40.992 42.1374C41.656 42.4674 42.1611 42.9363 42.5072 43.544C42.8574 44.1477 43.0324 44.8581 43.0324 45.6751C43.0324 46.4961 42.8554 47.2024 42.5012 47.794C42.147 48.3816 41.6339 48.8324 40.9618 49.1463C40.2937 49.4602 39.4847 49.6172 38.5349 49.6172H35.269V47.5163H38.1123C38.6114 47.5163 39.0259 47.4479 39.356 47.3111C39.686 47.1742 39.9315 46.969 40.0925 46.6953C40.2575 46.4216 40.34 46.0816 40.34 45.6751C40.34 45.2646 40.2575 44.9184 40.0925 44.6367C39.9315 44.355 39.684 44.1417 39.3499 43.9968C39.0199 43.8479 38.6034 43.7734 38.1003 43.7734H36.3375V54H33.7235ZM40.4003 48.3736L43.4731 54H40.5875L37.5811 48.3736H40.4003ZM45.8998 54V41.6364H48.5137V47.0877H48.6767L53.126 41.6364H56.2591L51.6711 47.1722L56.3135 54H53.1863L49.7996 48.9169L48.5137 50.4865V54H45.8998ZM65.2479 45.1921C65.1996 44.7051 64.9923 44.3268 64.6261 44.0572C64.2598 43.7875 63.7628 43.6527 63.1349 43.6527C62.7083 43.6527 62.3481 43.7131 62.0543 43.8338C61.7605 43.9505 61.5352 44.1135 61.3782 44.3228C61.2253 44.5321 61.1488 44.7695 61.1488 45.0352C61.1407 45.2565 61.187 45.4497 61.2876 45.6147C61.3923 45.7797 61.5352 45.9226 61.7163 46.0433C61.8974 46.16 62.1067 46.2627 62.3441 46.3512C62.5816 46.4357 62.8351 46.5082 63.1048 46.5685L64.2156 46.8342C64.7549 46.9549 65.2499 47.1159 65.7006 47.3171C66.1514 47.5183 66.5418 47.7659 66.8718 48.0597C67.2018 48.3535 67.4574 48.6996 67.6385 49.098C67.8236 49.4964 67.9182 49.9532 67.9222 50.4684C67.9182 51.225 67.725 51.881 67.3427 52.4364C66.9644 52.9878 66.417 53.4164 65.7006 53.7223C64.9883 54.0241 64.129 54.1751 63.1229 54.1751C62.1248 54.1751 61.2555 54.0221 60.5149 53.7163C59.7784 53.4104 59.2029 52.9576 58.7884 52.358C58.3778 51.7543 58.1625 51.0077 58.1424 50.1183H60.6719C60.7001 50.5328 60.8188 50.8789 61.0281 51.1566C61.2414 51.4303 61.5251 51.6375 61.8793 51.7784C62.2375 51.9152 62.6419 51.9837 63.0927 51.9837C63.5354 51.9837 63.9198 51.9193 64.2457 51.7905C64.5758 51.6617 64.8313 51.4826 65.0124 51.2532C65.1935 51.0238 65.2841 50.7602 65.2841 50.4624C65.2841 50.1847 65.2016 49.9512 65.0366 49.7621C64.8756 49.5729 64.6381 49.4119 64.3242 49.2791C64.0143 49.1463 63.634 49.0256 63.1832 48.9169L61.837 48.5788C60.7946 48.3253 59.9716 47.9289 59.3679 47.3896C58.7642 46.8503 58.4644 46.1238 58.4684 45.2102C58.4644 44.4616 58.6636 43.8076 59.0661 43.2482C59.4725 42.6888 60.03 42.2521 60.7383 41.9382C61.4466 41.6243 62.2515 41.4673 63.1531 41.4673C64.0707 41.4673 64.8716 41.6243 65.5558 41.9382C66.244 42.2521 66.7792 42.6888 67.1616 43.2482C67.5439 43.8076 67.7411 44.4556 67.7532 45.1921H65.2479Z"),c(s,"fill","#ACA1F5"),c(s,"class","svelte-95gdrw"),c(l,"width","69"),c(l,"height","102"),c(l,"viewBox","0 0 69 102"),c(l,"fill","none"),c(l,"xmlns","http://www.w3.org/2000/svg"),c(l,"class","svelte-95gdrw"),c(e,"href","#works"),c(e,"class","scroll-down-component svelte-95gdrw"),c(e,"id","sdc")},m(h,f){V(h,e,f),v(e,l),v(l,t),v(l,s),n||(o=X(e,"click",i[0]),n=!0)},p:x,i:x,o:x,d(h){h&&d(e),n=!1,o()}}}function Qe(i){return[()=>{scrollTo(0,500)}]}class xe extends Y{constructor(e){super(),K(this,e,Qe,Je,J,{})}}function et(i){let e,l,t,s,n,o;return{c(){e=k("div"),l=k("p"),t=q(i[0]),s=j(),n=k("p"),o=q(i[1]),this.h()},l(h){e=E(h,"DIV",{class:!0,style:!0});var f=H(e);l=E(f,"P",{class:!0});var r=H(l);t=z(r,i[0]),r.forEach(d),s=N(f),n=E(f,"P",{class:!0});var u=H(n);o=z(u,i[1]),u.forEach(d),f.forEach(d),this.h()},h(){c(l,"class","skills-name svelte-1qt7cud"),c(n,"class","skills-level svelte-1qt7cud"),c(e,"class","skills svelte-1qt7cud"),ae(e,"filter","hue-rotate("+i[2]*45+"deg)")},m(h,f){V(h,e,f),v(e,l),v(l,t),v(e,s),v(e,n),v(n,o)},p(h,[f]){f&1&&ee(t,h[0]),f&2&&ee(o,h[1]),f&4&&ae(e,"filter","hue-rotate("+h[2]*45+"deg)")},i:x,o:x,d(h){h&&d(e)}}}function tt(i,e,l){let{name:t="N/A"}=e,{level:s="Noob"}=e,{hueRotate:n=0}=e;return i.$$set=o=>{"name"in o&&l(0,t=o.name),"level"in o&&l(1,s=o.level),"hueRotate"in o&&l(2,n=o.hueRotate)},[t,s,n]}class lt extends Y{constructor(e){super(),K(this,e,tt,et,J,{name:0,level:1,hueRotate:2})}}function $e(i,e,l){const t=i.slice();return t[5]=e[l],t}function be(i,e,l){const t=i.slice();return t[8]=e[l],t}function Ce(i){let e,l,t,s,n,o,h,f,r,u,a,w,g,_,L,m,b,I,$,y,C,B=i[0],T=[];for(let S=0;S<B.length;S+=1)T[S]=Ee($e(i,B,S));const R=S=>A(T[S],1,1,()=>{T[S]=null});return{c(){e=k("div"),l=k("div"),t=k("h2"),s=q("Have a look at my skills"),n=j(),o=k("p"),h=q(`In these 5+ years of self taught journey, I have experienced a lot of new & advanced
				technologies and have tried most of them. But the one thing that i will always have in me is
				the urge to learn more.`),f=j(),r=k("p"),u=q(`“Learning is a never ending journey”
				`),a=k("small"),w=q("- "),g=k("abbr"),_=q("idk"),L=q(" who said this"),m=j(),b=k("span"),I=q("SKILLS"),$=j(),y=k("div");for(let S=0;S<T.length;S+=1)T[S].c();this.h()},l(S){e=E(S,"DIV",{class:!0});var M=H(e);l=E(M,"DIV",{class:!0});var P=H(l);t=E(P,"H2",{class:!0});var p=H(t);s=z(p,"Have a look at my skills"),p.forEach(d),n=N(P),o=E(P,"P",{class:!0});var O=H(o);h=z(O,`In these 5+ years of self taught journey, I have experienced a lot of new & advanced
				technologies and have tried most of them. But the one thing that i will always have in me is
				the urge to learn more.`),O.forEach(d),f=N(P),r=E(P,"P",{class:!0});var Q=H(r);u=z(Q,`“Learning is a never ending journey”
				`),a=E(Q,"SMALL",{class:!0});var le=H(a);w=z(le,"- "),g=E(le,"ABBR",{title:!0});var ie=H(g);_=z(ie,"idk"),ie.forEach(d),L=z(le," who said this"),le.forEach(d),m=N(Q),b=E(Q,"SPAN",{style:!0,class:!0});var oe=H(b);I=z(oe,"SKILLS"),oe.forEach(d),Q.forEach(d),P.forEach(d),$=N(M),y=E(M,"DIV",{class:!0});var ce=H(y);for(let de=0;de<T.length;de+=1)T[de].l(ce);ce.forEach(d),M.forEach(d),this.h()},h(){c(t,"class","fancy-font fancy-h svelte-w07ra5"),c(o,"class","fancy-p"),c(g,"title","I don't know"),c(a,"class","svelte-w07ra5"),ae(b,"transform","translateX("+(He-ye*i[2])+"px)"),c(b,"class","backdropText svelte-w07ra5"),c(r,"class","quote svelte-w07ra5"),c(l,"class","skills-content svelte-w07ra5"),c(y,"class","skills-showcase svelte-w07ra5"),c(e,"class","skills-container svelte-w07ra5")},m(S,M){V(S,e,M),v(e,l),v(l,t),v(t,s),v(l,n),v(l,o),v(o,h),v(l,f),v(l,r),v(r,u),v(r,a),v(a,w),v(a,g),v(g,_),v(a,L),v(r,m),v(r,b),v(b,I),v(e,$),v(e,y);for(let P=0;P<T.length;P+=1)T[P].m(y,null);C=!0},p(S,M){if((!C||M&4)&&ae(b,"transform","translateX("+(He-ye*S[2])+"px)"),M&1){B=S[0];let P;for(P=0;P<B.length;P+=1){const p=$e(S,B,P);T[P]?(T[P].p(p,M),D(T[P],1)):(T[P]=Ee(p),T[P].c(),D(T[P],1),T[P].m(y,null))}for(ne(),P=B.length;P<T.length;P+=1)R(P);re()}},i(S){if(!C){for(let M=0;M<B.length;M+=1)D(T[M]);C=!0}},o(S){T=T.filter(Boolean);for(let M=0;M<T.length;M+=1)A(T[M]);C=!1},d(S){S&&d(e),fe(T,S)}}}function ke(i){let e,l;return e=new lt({props:{name:i[8].name,level:i[8].level,hueRotate:i[5].color}}),{c(){Z(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,s){U(e,t,s),l=!0},p(t,s){const n={};s&1&&(n.name=t[8].name),s&1&&(n.level=t[8].level),s&1&&(n.hueRotate=t[5].color),e.$set(n)},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function Ee(i){let e,l,t=i[5].category+"",s,n,o,h,f=i[5].skills,r=[];for(let a=0;a<f.length;a+=1)r[a]=ke(be(i,f,a));const u=a=>A(r[a],1,1,()=>{r[a]=null});return{c(){e=k("div"),l=k("p"),s=q(t),n=j();for(let a=0;a<r.length;a+=1)r[a].c();o=j(),this.h()},l(a){e=E(a,"DIV",{class:!0});var w=H(e);l=E(w,"P",{class:!0});var g=H(l);s=z(g,t),g.forEach(d),n=N(w);for(let _=0;_<r.length;_+=1)r[_].l(w);o=N(w),w.forEach(d),this.h()},h(){c(l,"class","category svelte-w07ra5"),c(e,"class","field svelte-w07ra5")},m(a,w){V(a,e,w),v(e,l),v(l,s),v(e,n);for(let g=0;g<r.length;g+=1)r[g].m(e,null);v(e,o),h=!0},p(a,w){if((!h||w&1)&&t!==(t=a[5].category+"")&&ee(s,t),w&1){f=a[5].skills;let g;for(g=0;g<f.length;g+=1){const _=be(a,f,g);r[g]?(r[g].p(_,w),D(r[g],1)):(r[g]=ke(_),r[g].c(),D(r[g],1),r[g].m(e,o))}for(ne(),g=f.length;g<r.length;g+=1)u(g);re()}},i(a){if(!h){for(let w=0;w<f.length;w+=1)D(r[w]);h=!0}},o(a){r=r.filter(Boolean);for(let w=0;w<r.length;w+=1)A(r[w]);h=!1},d(a){a&&d(e),fe(r,a)}}}function st(i){let e=!1,l=()=>{e=!1},t,s,n,o,h,f;se(i[3]),se(i[4]);let r=i[0].length>0&&Ce(i);return{c(){s=j(),r&&r.c(),n=te()},l(u){s=N(u),r&&r.l(u),n=te()},m(u,a){V(u,s,a),r&&r.m(u,a),V(u,n,a),o=!0,h||(f=[X(window,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(l,100),i[3]()}),X(window,"resize",i[4])],h=!0)},p(u,[a]){a&4&&!e&&(e=!0,clearTimeout(t),scrollTo(window.pageXOffset,u[2]),t=setTimeout(l,100)),u[0].length>0?r?(r.p(u,a),a&1&&D(r,1)):(r=Ce(u),r.c(),D(r,1),r.m(n.parentNode,n)):r&&(ne(),A(r,1,1,()=>{r=null}),re())},i(u){o||(D(r),o=!0)},o(u){A(r),o=!1},d(u){u&&d(s),r&&r.d(u),u&&d(n),h=!1,he(f)}}}let He=1e3,ye=.4;function nt(i,e,l){let t=[],s,n=0;ue(async()=>{const f=await fetch("dynamic/skills.json");if(f.ok){const r=await f.json();l(0,t=r)}});function o(){l(2,n=window.pageYOffset)}function h(){l(1,s=window.innerWidth)}return[t,s,n,o,h]}class rt extends Y{constructor(e){super(),K(this,e,nt,st,J,{})}}function at(i){let e,l,t,s,n,o,h,f,r,u,a,w,g,_;return se(i[6]),{c(){e=k("div"),l=k("button"),t=k("img"),o=j(),h=k("div"),f=k("h4"),r=q(i[0]),u=j(),a=k("p"),w=q(i[1]),this.h()},l(L){e=E(L,"DIV",{class:!0,tabindex:!0});var m=H(e);l=E(m,"BUTTON",{class:!0,tabindex:!0});var b=H(l);t=E(b,"IMG",{src:!0,alt:!0,class:!0}),b.forEach(d),o=N(m),h=E(m,"DIV",{class:!0,tabindex:!0});var I=H(h);f=E(I,"H4",{class:!0});var $=H(f);r=z($,i[0]),$.forEach(d),u=N(I),a=E(I,"P",{class:!0});var y=H(a);w=z(y,i[1]),y.forEach(d),I.forEach(d),m.forEach(d),this.h()},h(){F(t.src,s=i[2])||c(t,"src",s),c(t,"alt",n="Certification of "+i[0]),c(t,"class","svelte-1qkug67"),c(l,"class","imgHolder svelte-1qkug67"),c(l,"tabindex","-1"),c(f,"class","txtWrap1 svelte-1qkug67"),c(a,"class","svelte-1qkug67"),c(h,"class","content svelte-1qkug67"),c(h,"tabindex","-1"),c(e,"class","imgText-container svelte-1qkug67"),c(e,"tabindex","-1")},m(L,m){V(L,e,m),v(e,l),v(l,t),v(e,o),v(e,h),v(h,f),v(f,r),v(h,u),v(h,a),v(a,w),g||(_=[X(window,"resize",i[6]),X(l,"click",i[7])],g=!0)},p(L,[m]){m&4&&!F(t.src,s=L[2])&&c(t,"src",s),m&1&&n!==(n="Certification of "+L[0])&&c(t,"alt",n),m&1&&ee(r,L[0]),m&2&&ee(w,L[1])},i:x,o:x,d(L){L&&d(e),g=!1,he(_)}}}function it(i,e,l){let{title:t="Title Here"}=e,{sub:s="Subtitle here..."}=e,{img:n=""}=e,o=a=>{if(a.target.style.position==""){let w=a.target.getBoundingClientRect(),g=a.target.offsetWidth,_=a.target.offsetHeight;a.target.style=`
				z-index: 101;
				position: fixed; 
				top: ${w.top}px; 
				left: ${w.left}px;
				right: ${w.right}px;
				bottom: ${w.bottom}px;
				width: ${g}px;
				height: ${_}px;
    			box-sizing: border-box;
				`,a.target.classList.add("fullscreen-preview"),a.target.parentNode.nextElementSibling.style.opacity=0,a.target.parentNode.nextElementSibling.style.paddingTop="15rem"}else a.target.classList.add("remove-preview"),setTimeout(()=>{a.target.style="",a.target.classList.remove("fullscreen-preview"),a.target.classList.remove("remove-preview"),a.target.parentNode.nextElementSibling.style.opacity=1,a.target.parentNode.nextElementSibling.style.paddingTop=""},600)},h,f;function r(){l(4,f=window.innerHeight),l(3,h=window.innerWidth)}const u=a=>{h>612&&o(a)};return i.$$set=a=>{"title"in a&&l(0,t=a.title),"sub"in a&&l(1,s=a.sub),"img"in a&&l(2,n=a.img)},[t,s,n,h,f,o,r,u]}class ot extends Y{constructor(e){super(),K(this,e,it,at,J,{title:0,sub:1,img:2})}}function Le(i,e,l){const t=i.slice();return t[1]=e[l].id,t[2]=e[l].img,t[3]=e[l].title,t[4]=e[l].issued,t}function Ie(i){let e,l,t,s,n,o,h,f,r,u,a,w,g,_,L;l=new ve({props:{heading:"Certificates Achieved",sub:"Here are some of the certification that I have achieved..."}});let m=i[0],b=[];for(let $=0;$<m.length;$+=1)b[$]=Te(Le(i,m,$));const I=$=>A(b[$],1,1,()=>{b[$]=null});return{c(){e=k("div"),Z(l.$$.fragment),t=j(),s=k("div"),n=k("div"),o=k("button"),h=k("span"),f=j();for(let $=0;$<b.length;$+=1)b[$].c();r=j(),u=k("div"),a=k("button"),w=k("span"),this.h()},l($){e=E($,"DIV",{class:!0});var y=H(e);W(l.$$.fragment,y),y.forEach(d),t=N($),s=E($,"DIV",{class:!0});var C=H(s);n=E(C,"DIV",{class:!0});var B=H(n);o=E(B,"BUTTON",{class:!0,"data-tooltip":!0});var T=H(o);h=E(T,"SPAN",{class:!0}),H(h).forEach(d),T.forEach(d),B.forEach(d),f=N(C);for(let M=0;M<b.length;M+=1)b[M].l(C);r=N(C),u=E(C,"DIV",{class:!0});var R=H(u);a=E(R,"BUTTON",{class:!0,"data-tooltip":!0});var S=H(a);w=E(S,"SPAN",{class:!0}),H(w).forEach(d),S.forEach(d),R.forEach(d),C.forEach(d),this.h()},h(){c(e,"class","page"),c(h,"class","icon i-backward svelte-1xacpwi"),c(o,"class","scroll-btns svelte-1xacpwi"),c(o,"data-tooltip","Previous"),c(n,"class","sb-container bt-previous svelte-1xacpwi"),c(w,"class","icon i-forward svelte-1xacpwi"),c(a,"class","scroll-btns svelte-1xacpwi"),c(a,"data-tooltip","Next"),c(u,"class","sb-container bt-next svelte-1xacpwi"),c(s,"class","certificate-container svelte-1xacpwi")},m($,y){V($,e,y),U(l,e,null),V($,t,y),V($,s,y),v(s,n),v(n,o),v(o,h),v(s,f);for(let C=0;C<b.length;C+=1)b[C].m(s,null);v(s,r),v(s,u),v(u,a),v(a,w),g=!0,_||(L=[X(o,"click",ft),X(a,"click",ut)],_=!0)},p($,y){if(y&1){m=$[0];let C;for(C=0;C<m.length;C+=1){const B=Le($,m,C);b[C]?(b[C].p(B,y),D(b[C],1)):(b[C]=Te(B),b[C].c(),D(b[C],1),b[C].m(s,r))}for(ne(),C=m.length;C<b.length;C+=1)I(C);re()}},i($){if(!g){D(l.$$.fragment,$);for(let y=0;y<m.length;y+=1)D(b[y]);g=!0}},o($){A(l.$$.fragment,$),b=b.filter(Boolean);for(let y=0;y<b.length;y+=1)A(b[y]);g=!1},d($){$&&d(e),G(l),$&&d(t),$&&d(s),fe(b,$),_=!1,he(L)}}}function Te(i){let e,l,t;return l=new ot({props:{img:i[2],title:i[3],sub:i[4]}}),{c(){e=k("div"),Z(l.$$.fragment),this.h()},l(s){e=E(s,"DIV",{class:!0,tabindex:!0});var n=H(e);W(l.$$.fragment,n),n.forEach(d),this.h()},h(){c(e,"class","certi svelte-1xacpwi"),c(e,"tabindex","-1")},m(s,n){V(s,e,n),U(l,e,null),t=!0},p(s,n){const o={};n&1&&(o.img=s[2]),n&1&&(o.title=s[3]),n&1&&(o.sub=s[4]),l.$set(o)},i(s){t||(D(l.$$.fragment,s),t=!0)},o(s){A(l.$$.fragment,s),t=!1},d(s){s&&d(e),G(l)}}}function ct(i){let e,l,t=i[0].length>0&&Ie(i);return{c(){t&&t.c(),e=te()},l(s){t&&t.l(s),e=te()},m(s,n){t&&t.m(s,n),V(s,e,n),l=!0},p(s,[n]){s[0].length>0?t?(t.p(s,n),n&1&&D(t,1)):(t=Ie(s),t.c(),D(t,1),t.m(e.parentNode,e)):t&&(ne(),A(t,1,1,()=>{t=null}),re())},i(s){l||(D(t),l=!0)},o(s){A(t),l=!1},d(s){t&&t.d(s),s&&d(e)}}}const ft=i=>{i.target.parentNode.parentNode.scrollLeft-=250},ut=i=>{i.target.parentNode.parentNode.scrollLeft+=250};function ht(i,e,l){let t=[];return ue(async()=>{const s=await fetch("dynamic/certificates.json");if(s.ok){const n=await s.json();l(0,t=n)}}),[t]}class dt extends Y{constructor(e){super(),K(this,e,ht,ct,J,{})}}function Se(i,e,l){const t=i.slice();return t[6]=e[l],t}function Ve(i,e,l){const t=i.slice();return t[6]=e[l],t}function De(i){let e,l,t,s,n,o,h,f,r;l=new ve({props:{heading:"The Collection",sub:"Have a look at some of the projects i have worked on ..."}});let u=i[2][0].projects,a=[];for(let _=0;_<u.length;_+=1)a[_]=je(Ve(i,u,_));let w=i[2][1].projects,g=[];for(let _=0;_<w.length;_+=1)g[_]=Ne(Se(i,w,_));return{c(){e=k("div"),Z(l.$$.fragment),t=j(),s=k("div"),n=k("div");for(let _=0;_<a.length;_+=1)a[_].c();o=j(),h=k("div");for(let _=0;_<g.length;_+=1)g[_].c();this.h()},l(_){e=E(_,"DIV",{class:!0});var L=H(e);W(l.$$.fragment,L),L.forEach(d),t=N(_),s=E(_,"DIV",{class:!0,style:!0});var m=H(s);n=E(m,"DIV",{class:!0});var b=H(n);for(let $=0;$<a.length;$+=1)a[$].l(b);b.forEach(d),o=N(m),h=E(m,"DIV",{class:!0});var I=H(h);for(let $=0;$<g.length;$+=1)g[$].l(I);I.forEach(d),m.forEach(d),this.h()},h(){c(e,"class","page p-padding"),c(n,"class","image-container svelte-1lwdvrf"),c(h,"class","image-container svelte-1lwdvrf"),c(s,"class","project-container svelte-1lwdvrf"),c(s,"style",f=i[0]>612?i[3](Me-Pe*i[1]):"")},m(_,L){V(_,e,L),U(l,e,null),V(_,t,L),V(_,s,L),v(s,n);for(let m=0;m<a.length;m+=1)a[m].m(n,null);v(s,o),v(s,h);for(let m=0;m<g.length;m+=1)g[m].m(h,null);r=!0},p(_,L){if(L&4){u=_[2][0].projects;let m;for(m=0;m<u.length;m+=1){const b=Ve(_,u,m);a[m]?a[m].p(b,L):(a[m]=je(b),a[m].c(),a[m].m(n,null))}for(;m<a.length;m+=1)a[m].d(1);a.length=u.length}if(L&4){w=_[2][1].projects;let m;for(m=0;m<w.length;m+=1){const b=Se(_,w,m);g[m]?g[m].p(b,L):(g[m]=Ne(b),g[m].c(),g[m].m(h,null))}for(;m<g.length;m+=1)g[m].d(1);g.length=w.length}(!r||L&3&&f!==(f=_[0]>612?_[3](Me-Pe*_[1]):""))&&c(s,"style",f)},i(_){r||(D(l.$$.fragment,_),r=!0)},o(_){A(l.$$.fragment,_),r=!1},d(_){_&&d(e),G(l),_&&d(t),_&&d(s),fe(a,_),fe(g,_)}}}function je(i){let e,l,t,s;return{c(){e=k("div"),l=k("img"),this.h()},l(n){e=E(n,"DIV",{class:!0});var o=H(e);l=E(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(d),this.h()},h(){F(l.src,t=i[6].image)||c(l,"src",t),c(l,"alt",s=i[2].name),c(l,"class","svelte-1lwdvrf"),c(e,"class","image svelte-1lwdvrf")},m(n,o){V(n,e,o),v(e,l)},p(n,o){o&4&&!F(l.src,t=n[6].image)&&c(l,"src",t),o&4&&s!==(s=n[2].name)&&c(l,"alt",s)},d(n){n&&d(e)}}}function Ne(i){let e,l,t,s;return{c(){e=k("div"),l=k("img"),this.h()},l(n){e=E(n,"DIV",{class:!0});var o=H(e);l=E(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(d),this.h()},h(){F(l.src,t=i[6].image)||c(l,"src",t),c(l,"alt",s=i[2].name),c(l,"class","svelte-1lwdvrf"),c(e,"class","image svelte-1lwdvrf")},m(n,o){V(n,e,o),v(e,l)},p(n,o){o&4&&!F(l.src,t=n[6].image)&&c(l,"src",t),o&4&&s!==(s=n[2].name)&&c(l,"alt",s)},d(n){n&&d(e)}}}function mt(i){let e=!1,l=()=>{e=!1},t,s,n,o,h;se(i[4]),se(i[5]);let f=i[2].length>0&&De(i);return{c(){f&&f.c(),s=te()},l(r){f&&f.l(r),s=te()},m(r,u){f&&f.m(r,u),V(r,s,u),n=!0,o||(h=[X(window,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(l,100),i[4]()}),X(window,"resize",i[5])],o=!0)},p(r,[u]){u&2&&!e&&(e=!0,clearTimeout(t),scrollTo(window.pageXOffset,r[1]),t=setTimeout(l,100)),r[2].length>0?f?(f.p(r,u),u&4&&D(f,1)):(f=De(r),f.c(),D(f,1),f.m(s.parentNode,s)):f&&(ne(),A(f,1,1,()=>{f=null}),re())},i(r){n||(D(f),n=!0)},o(r){A(f),n=!1},d(r){f&&f.d(r),r&&d(s),o=!1,he(h)}}}let Me=250,Pe=.08;function gt(i,e,l){let t,s=0,n=r=>(t<=750&&(r/=2,r+=30),"transform: rotate(2deg) scale(1.2) translate("+r+"px, 75px);"),o=[];ue(async()=>{const r=await fetch("dynamic/projectsShowcase.json");if(r.ok){const u=await r.json();l(2,o=u)}});function h(){l(1,s=window.pageYOffset)}function f(){l(0,t=window.innerWidth)}return[t,s,o,n,h,f]}class vt extends Y{constructor(e){super(),K(this,e,gt,mt,J,{})}}function _t(i){let e=!1,l=()=>{e=!1},t,s,n,o,h,f,r,u,a,w,g,_,L,m,b,I,$,y,C,B,T,R,S,M,P;return se(i[2]),se(i[3]),s=new Re({}),h=new Xe({}),u=new Ke({}),g=new dt({}),m=new rt({}),I=new xe({}),C=new vt({}),R=new Ze({}),{c(){Z(s.$$.fragment),n=j(),o=k("section"),Z(h.$$.fragment),f=j(),r=k("section"),Z(u.$$.fragment),a=j(),w=k("section"),Z(g.$$.fragment),_=j(),L=k("section"),Z(m.$$.fragment),b=j(),Z(I.$$.fragment),$=j(),y=k("section"),Z(C.$$.fragment),B=j(),T=k("section"),Z(R.$$.fragment),this.h()},l(p){W(s.$$.fragment,p),n=N(p),o=E(p,"SECTION",{class:!0,id:!0,style:!0});var O=H(o);W(h.$$.fragment,O),O.forEach(d),f=N(p),r=E(p,"SECTION",{class:!0});var Q=H(r);W(u.$$.fragment,Q),Q.forEach(d),a=N(p),w=E(p,"SECTION",{class:!0});var le=H(w);W(g.$$.fragment,le),le.forEach(d),_=N(p),L=E(p,"SECTION",{class:!0});var ie=H(L);W(m.$$.fragment,ie),ie.forEach(d),b=N(p),W(I.$$.fragment,p),$=N(p),y=E(p,"SECTION",{class:!0,id:!0});var oe=H(y);W(C.$$.fragment,oe),oe.forEach(d),B=N(p),T=E(p,"SECTION",{class:!0});var ce=H(T);W(R.$$.fragment,ce),ce.forEach(d),this.h()},h(){c(o,"class","page p-cover svelte-2sgvwo"),c(o,"id","CoverInitial"),ae(o,"background-position-y",Ae-i[0]*(i[1]>612?.08:i[1]>450?.06:.04)+"%"),c(r,"class","page"),c(w,"class","p-certi svelte-2sgvwo"),c(L,"class","skillsPage"),c(y,"class","projectsPage svelte-2sgvwo"),c(y,"id","works"),c(T,"class","page p-padding")},m(p,O){U(s,p,O),V(p,n,O),V(p,o,O),U(h,o,null),V(p,f,O),V(p,r,O),U(u,r,null),V(p,a,O),V(p,w,O),U(g,w,null),V(p,_,O),V(p,L,O),U(m,L,null),V(p,b,O),U(I,p,O),V(p,$,O),V(p,y,O),U(C,y,null),V(p,B,O),V(p,T,O),U(R,T,null),S=!0,M||(P=[X(window,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(l,100),i[2]()}),X(window,"resize",i[3])],M=!0)},p(p,[O]){O&1&&!e&&(e=!0,clearTimeout(t),scrollTo(window.pageXOffset,p[0]),t=setTimeout(l,100)),(!S||O&3)&&ae(o,"background-position-y",Ae-p[0]*(p[1]>612?.08:p[1]>450?.06:.04)+"%")},i(p){S||(D(s.$$.fragment,p),D(h.$$.fragment,p),D(u.$$.fragment,p),D(g.$$.fragment,p),D(m.$$.fragment,p),D(I.$$.fragment,p),D(C.$$.fragment,p),D(R.$$.fragment,p),S=!0)},o(p){A(s.$$.fragment,p),A(h.$$.fragment,p),A(u.$$.fragment,p),A(g.$$.fragment,p),A(m.$$.fragment,p),A(I.$$.fragment,p),A(C.$$.fragment,p),A(R.$$.fragment,p),S=!1},d(p){G(s,p),p&&d(n),p&&d(o),G(h),p&&d(f),p&&d(r),G(u),p&&d(a),p&&d(w),G(g),p&&d(_),p&&d(L),G(m),p&&d(b),G(I,p),p&&d($),p&&d(y),G(C),p&&d(B),p&&d(T),G(R),M=!1,he(P)}}}let Ae=70;function pt(i,e,l){let t=0,s=0;function n(){l(0,t=window.pageYOffset)}function o(){l(1,s=window.innerWidth)}return[t,s,n,o]}class kt extends Y{constructor(e){super(),K(this,e,pt,_t,J,{})}}export{kt as default};
