(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();function a(){}function C(e){return e()}function N(){return Object.create(null)}function p(e){e.forEach(C)}function P(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function I(e){return Object.keys(e).length===0}function g(e,t,r){e.insertBefore(t,r||null)}function m(e){e.parentNode&&e.parentNode.removeChild(e)}function O(e){return document.createElement(e)}function M(e){return document.createTextNode(e)}function W(){return M(" ")}function q(e){return Array.from(e.childNodes)}let x;function d(e){x=e}const l=[],L=[],_=[],j=[],F=Promise.resolve();let $=!1;function K(){$||($=!0,F.then(S))}function b(e){_.push(e)}const y=new Set;let f=0;function S(){if(f!==0)return;const e=x;do{try{for(;f<l.length;){const t=l[f];f++,d(t),T(t.$$)}}catch(t){throw l.length=0,f=0,t}for(d(null),l.length=0,f=0;L.length;)L.pop()();for(let t=0;t<_.length;t+=1){const r=_[t];y.has(r)||(y.add(r),r())}_.length=0}while(l.length);for(;j.length;)j.pop()();$=!1,y.clear(),d(e)}function T(e){if(e.fragment!==null){e.update(),p(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(b)}}const z=new Set;function D(e,t){e&&e.i&&(z.delete(e),e.i(t))}function G(e,t,r,c){const{fragment:n,after_update:o}=e.$$;n&&n.m(t,r),c||b(()=>{const s=e.$$.on_mount.map(C).filter(P);e.$$.on_destroy?e.$$.on_destroy.push(...s):p(s),e.$$.on_mount=[]}),o.forEach(b)}function H(e,t){const r=e.$$;r.fragment!==null&&(p(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function J(e,t){e.$$.dirty[0]===-1&&(l.push(e),K(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Q(e,t,r,c,n,o,s,A=[-1]){const h=x;d(e);const i=e.$$={fragment:null,ctx:[],props:o,update:a,not_equal:n,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:N(),dirty:A,skip_bound:!1,root:t.target||h.$$.root};s&&s(i.root);let k=!1;if(i.ctx=r?r(e,t.props||{},(u,w,...v)=>{const E=v.length?v[0]:w;return i.ctx&&n(i.ctx[u],i.ctx[u]=E)&&(!i.skip_bound&&i.bound[u]&&i.bound[u](E),k&&J(e,u)),w}):[],i.update(),k=!0,p(i.before_update),i.fragment=c?c(i.ctx):!1,t.target){if(t.hydrate){const u=q(t.target);i.fragment&&i.fragment.l(u),u.forEach(m)}else i.fragment&&i.fragment.c();t.intro&&D(e.$$.fragment),G(e,t.target,t.anchor,t.customElement),S()}d(h)}class R{$destroy(){H(this,1),this.$destroy=a}$on(t,r){if(!P(r))return a;const c=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return c.push(r),()=>{const n=c.indexOf(r);n!==-1&&c.splice(n,1)}}$set(t){this.$$set&&!I(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function U(e){let t,r,c;return{c(){t=O("h1"),t.textContent="Nils Website",r=W(),c=O("h3"),c.textContent="Work in Progress..."},m(n,o){g(n,t,o),g(n,r,o),g(n,c,o)},p:a,i:a,o:a,d(n){n&&m(t),n&&m(r),n&&m(c)}}}class V extends R{constructor(t){super(),Q(this,t,null,U,B,{})}}new V({target:document.getElementById("app")});
