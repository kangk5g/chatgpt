import{u as B,f as te,g as se,h as U,i as ae,P as le,t as re,j as ue,k as D,l as C,m as ie,w as Y,n as s,p as oe,R as I,q as ne,s as ce,v as ve,C as pe,x as he,y as de,z as ye,A as me,B as ge,D as fe,E as _e,F as O,G as $,H as He,I as Q,J as Re}from"./app-CtTzWfhO.js";const ke=["/intro.html","/","/others/","/tutorial_of_ChatGPT/ChatGPT_mirror_sites.html","/tutorial_of_ChatGPT/GPT4_upgrade_tutorial.html","/tutorial_of_ChatGPT/how_to_register_openAI_ID.html","/tutorial_of_ChatGPT/how_to_upgrade_GPT_plus.html","/tutorial_of_ChatGPT/","/404.html","/category/","/category/chatgpt/","/category/%E6%95%99%E7%A8%8B/","/category/chatgpt4/","/tag/","/tag/%E8%B4%A6%E5%8F%B7/","/tag/chatgpt/","/article/","/star/","/timeline/"],we="SEARCH_PRO_QUERY_HISTORY",g=B(we,[]),Ce=()=>{const{queryHistoryCount:a}=Q,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},L=a=>ke[a.id]+("anchor"in a?`#${a.anchor}`:""),Qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:j}=Q,f=B(Qe,[]),qe=()=>{const a=j>0;return{enabled:a,resultHistory:f,addResultHistory:l=>{if(a){const r={link:L(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,j-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},xe=a=>{const l=pe(),r=U(),q=he(),i=D(0),R=C(()=>i.value>0),d=de([]);return ye(()=>{const{search:y,terminate:x}=me(),_=He(c=>{const H=c.join(" "),{searchFilter:P=h=>h,splitWord:T,suggestionsFilter:G,...m}=l.value;H?(i.value+=1,y(c.join(" "),r.value,m).then(h=>P(h,H,r.value,q.value)).then(h=>{i.value-=1,d.value=h}).catch(h=>{console.warn(h),i.value-=1,i.value||(d.value=[])})):d.value=[]},Q.searchDelay-Q.suggestDelay);Y([a,r],([c])=>_(c),{immediate:!0}),ge(()=>{x()})}),{isSearching:R,results:d}};var Te=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=se(),q=U(),i=ae(le),{enabled:R,addQueryHistory:d,queryHistory:y,removeQueryHistory:x}=Ce(),{enabled:_,resultHistory:c,addResultHistory:H,removeResultHistory:P}=qe(),T=R||_,G=re(a,"queries"),{results:m,isSearching:h}=xe(G),u=ue({isQuery:!0,index:0}),v=D(0),p=D(0),b=C(()=>T&&(y.value.length>0||c.value.length>0)),S=C(()=>m.value.length>0),E=C(()=>m.value[v.value]||null),M=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=t-1},z=()=>{const{isQuery:e,index:t}=u;t===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=E.value.contents.length-1},V=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},K=()=>{p.value<E.value.contents.length-1?p.value+=1:V()},N=()=>{p.value>0?p.value-=1:J()},A=e=>e.map(t=>Re(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=fe[e.index]||"$content",[o,w=""]=_e(t)?t[q.value].split("$content"):t.split("$content");return e.display.map(n=>s("div",A([o,...n,w])))}return e.display.map(t=>s("div",A(t)))},k=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>R?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{l("updateQuery",e)}},[s(O,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:o=>{o.preventDefault(),o.stopPropagation(),x(t)}})]))])):null,Z=()=>_?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,t)=>s(I,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{k()}},()=>[s(O,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(o=>A(o)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:o=>{o.preventDefault(),o.stopPropagation(),P(t)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(S.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const t=E.value.contents[p.value];d(a.queries.join(" ")),H(t),r.push(L(t)),k()}}else if(_){if(e.key==="ArrowUp")M();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(l("updateQuery",y.value[t]),e.preventDefault()):(r.push(c.value[t].link),k())}}}}),Y([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!S.value:!b.value}],id:"search-pro-results"},a.queries.length?h.value?s(oe,{hint:i.value.searching}):S.value?s("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},o)=>{const w=v.value===o;return s("li",{class:["search-pro-result-list-item",{active:w}]},[s("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((n,ee)=>{const F=w&&p.value===ee;return s(I,{to:L(n),class:["search-pro-result-item",{active:F,"aria-selected":F}],onClick:()=>{d(a.queries.join(" ")),H(n),k()}},()=>[n.type==="text"?null:s(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?s("div",{class:"content-header"},n.header):null,s("div",W(n))])])})])})):i.value.emptyResult:T?b.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Te as default};
