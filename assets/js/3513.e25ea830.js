"use strict";(self.webpackChunkcalra_docs=self.webpackChunkcalra_docs||[]).push([[3513],{7561:(e,t,o)=>{o.d(t,{v:()=>s,e:()=>c});const a=Symbol("orama.insertions"),n=Symbol("orama.removals");var i;const r=(null===(i=globalThis.process)||void 0===i?void 0:i.emitWarning)??function(e,t){console.warn(`[WARNING] [${t.code}] ${e}`)};function s(e){"number"!=typeof e[a]&&(queueMicrotask((()=>{e[a]=void 0})),e[a]=0),e[a]>1e3?(r("Orama's insert operation is synchronous. Please avoid inserting a large number of document in a single operation in order not to block the main thread or, in alternative, please use insertMultiple.",{code:"ORAMA0001"}),e[a]=-1):e[a]>=0&&e[a]++}function c(e){"number"!=typeof e[n]&&(queueMicrotask((()=>{e[n]=void 0})),e[n]=0),e[n]>1e3?(r("Orama's remove operation is synchronous. Please avoid removing a large number of document in a single operation in order not to block the main thread, in alternative, please use updateMultiple.",{code:"ORAMA0002"}),e[n]=-1):e[n]>=0&&e[n]++}},3513:(e,t,o)=>{o.r(t),o.d(t,{remove:()=>r,removeMultiple:()=>s});var a=o(5341),n=o(7348),i=o(7561);async function r(e,t,o,r){let s=!0;const{index:c,docs:l}=e.data,u=await e.documentsStore.get(l,t);if(!u)return!1;const d=(0,n.f8)(e.internalDocumentIDStore,(0,n.Kj)(e.internalDocumentIDStore,t)),m=await e.documentsStore.count(l);r||await(0,a.VK)(e.beforeRemove,e,d);const v=await e.index.getSearchableProperties(c),f=await e.index.getSearchablePropertiesWithTypes(c),p=await e.getDocumentProperties(u,v);for(const a of v){var w,b,g,h;const n=p[a];if(void 0===n)continue;const i=f[a];await(null===(b=(w=e.index).beforeRemove)||void 0===b?void 0:b.call(w,e.data.index,a,d,n,i,o,e.tokenizer,m)),await e.index.remove(e.index,e.data.index,a,t,n,i,o,e.tokenizer,m)||(s=!1),await(null===(h=(g=e.index).afterRemove)||void 0===h?void 0:h.call(g,e.data.index,a,d,n,i,o,e.tokenizer,m))}const S=await e.sorter.getSortableProperties(e.data.sorting),k=await e.getDocumentProperties(u,S);for(const a of S)void 0!==k[a]&&await e.sorter.remove(e.data.sorting,a,t);return r||await(0,a.VK)(e.afterRemove,e,d),await e.documentsStore.remove(e.data.docs,t),(0,i.e)(e),s}async function s(e,t,o,i,s){let c=0;o||(o=1e3);const l=s?[]:t.map((t=>(0,n.f8)(e.internalDocumentIDStore,(0,n.Kj)(e.internalDocumentIDStore,t))));return s||await(0,a.F_)(e.beforeRemoveMultiple,e,l),await new Promise(((a,n)=>{let l=0;setTimeout((async function u(){const d=t.slice(l*o,++l*o);if(!d.length)return a();for(const t of d)try{await r(e,t,i,s)&&c++}catch(m){n(m)}setTimeout(u,0)}),0)})),s||await(0,a.F_)(e.afterRemoveMultiple,e,l),c}}}]);