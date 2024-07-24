import{a as R,e as x,b as v,c as E,d as U,f as m,g as T,h as P,j as N,k as p,l as A,m as g,n as y,r as X}from"../chunks/scheduler.CGJU2uGW.js";import{S as j,i as D}from"../chunks/index.CCBAQQ5v.js";import{Y as B}from"../chunks/index.DOZu7E5x.js";function M(u){let n,o,l,c,r,t,i,_="Push",h,s,C="Merge",k,f,w="Handle Duplicate",b,$;return{c(){n=x("textarea"),o=v(),l=x("textarea"),c=v(),r=x("textarea"),t=v(),i=x("button"),i.textContent=_,h=v(),s=x("button"),s.textContent=C,k=v(),f=x("button"),f.textContent=w,this.h()},l(e){n=E(e,"TEXTAREA",{id:!0,class:!0}),U(n).forEach(m),o=T(e),l=E(e,"TEXTAREA",{id:!0,class:!0}),U(l).forEach(m),c=T(e),r=E(e,"TEXTAREA",{id:!0,class:!0}),U(r).forEach(m),t=T(e),i=E(e,"BUTTON",{"data-svelte-h":!0}),P(i)!=="svelte-1t1npeu"&&(i.textContent=_),h=T(e),s=E(e,"BUTTON",{"data-svelte-h":!0}),P(s)!=="svelte-1kmn4h8"&&(s.textContent=C),k=T(e),f=E(e,"BUTTON",{"data-svelte-h":!0}),P(f)!=="svelte-xi4vn3"&&(f.textContent=w),this.h()},h(){N(n,"id","base"),N(n,"class","border-2 border-black"),N(l,"id","add"),N(l,"class","border-2 border-black"),N(r,"id","merge"),N(r,"class","border-2 border-black"),r.value=u[2]},m(e,a){p(e,n,a),A(n,u[0]),p(e,o,a),p(e,l,a),A(l,u[1]),p(e,c,a),p(e,r,a),p(e,t,a),p(e,i,a),p(e,h,a),p(e,s,a),p(e,k,a),p(e,f,a),b||($=[g(n,"input",u[5]),g(l,"input",u[6]),g(i,"click",u[7]),g(s,"click",u[8]),g(f,"click",u[9])],b=!0)},p(e,[a]){a&1&&A(n,e[0]),a&2&&A(l,e[1]),a&4&&(r.value=e[2])},i:y,o:y,d(e){e&&(m(n),m(o),m(l),m(c),m(r),m(t),m(i),m(h),m(s),m(k),m(f)),b=!1,X($)}}}function S(u){let n=u.split("-"),o=n[n.length-1],l=parseInt(o);return isNaN(l)?n.push("2"):n[n.length-1]=`${l+1}`,n.join("-")}function O(u,n){let o=!1,l=!1,c=!1,r=structuredClone(n);return n.contexts.forEach(t=>{l=u.contexts.some(s=>s.name===t.name),o=u.clusters.some(s=>s.name===t.context.cluster),c=u.users.some(s=>s.name===t.context.user);let i=t.name,_=t.context.cluster,h=t.context.user;l&&(i=S(t.name),console.log(`Context name ${t.name} already exists`)),o&&(_=`${t.context.cluster}-${i}`,console.log(`Cluster name ${t.context.cluster} already exists`)),c&&(h=`${t.context.user}-${i}`,console.log(`User name ${t.context.user} already exists`)),(o||c||l)&&(r.clusters.forEach(s=>{s.name===t.context.cluster&&(s.name=_)}),r.users.forEach(s=>{s.name===t.context.user&&(s.name=h)}),r.contexts.forEach(s=>{s.name===t.name&&(s.name=i,s.context.cluster=_,s.context.user=h)}))}),r}function Y(u,n,o){let l="",c="",r="";function t(f){return B.parse(f)}function i(f,w){const b=t(f),$=t(w);let e=structuredClone(b),a=O(b,$);return e.clusters.push(...a.clusters),e.contexts.push(...a.contexts),e.users.push(...a.users),B.stringify(e)}function _(){l=this.value,o(0,l)}function h(){c=this.value,o(1,c)}return[l,c,r,t,i,_,h,()=>{console.log(t(l))},()=>{o(2,r=i(l,c))},()=>{O(t(l),t(c))}]}class L extends j{constructor(n){super(),D(this,n,Y,M,R,{})}}export{L as component};
