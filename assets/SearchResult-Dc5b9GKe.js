import{u as j,f as te,g as ae,h as M,i as se,P as le,t as re,j as ue,k as B,l as C,m as ie,n as U,p as a,q as oe,R as b,s as ne,v as ce,x as ve,C as pe,y as he,z as ye,A as de,B as me,D as ge,E as fe,F as Ee,G as I,H as O,I as He,J as k,K as _e}from"./app-0PrRTHXE.js";const Ae=["/intro.html","/","/LLM%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91/1-%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%9F%BA%E7%A1%80%E8%AF%8D%E6%B1%87.html","/others/onlyfans.html","/others/","/tutorial_of_ChatGPT/GPT4o.html","/tutorial_of_ChatGPT/GPT4_upgrade_tutorial.html","/tutorial_of_ChatGPT/how_to_register_openAI_ID.html","/tutorial_of_ChatGPT/how_to_upgrade_GPT_plus.html","/tutorial_of_ChatGPT/","/404.html","/LLM%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91/","/category/","/category/%E6%95%99%E7%A8%8B/","/category/onlyfans/","/category/%E5%85%85%E5%80%BC/","/category/chatgpt4/","/category/gpt4o/","/category/chatgpt/","/tag/","/tag/%E8%B4%A6%E5%8F%B7/","/tag/chatgpt/","/article/","/star/","/timeline/"],Re="SEARCH_PRO_QUERY_HISTORY",g=j(Re,[]),Ce=()=>{const{queryHistoryCount:s}=k,l=s>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,s-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},S=s=>Ae[s.id]+("anchor"in s?`#${s.anchor}`:""),ke="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:$}=k,f=j(ke,[]),we=()=>{const s=$>0;return{enabled:s,resultHistory:f,addResultHistory:l=>{if(s){const r={link:S(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,$-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},Qe=s=>{const l=pe(),r=M(),w=he(),i=B(0),_=C(()=>i.value>0),y=ye([]);return de(()=>{const{search:d,terminate:Q}=me(),E=He(c=>{const H=c.join(" "),{searchFilter:q=h=>h,splitWord:x,suggestionsFilter:D,...m}=l.value;H?(i.value+=1,d(c.join(" "),r.value,m).then(h=>q(h,H,r.value,w.value)).then(h=>{i.value-=1,y.value=h}).catch(h=>{console.warn(h),i.value-=1,i.value||(y.value=[])})):y.value=[]},k.searchDelay-k.suggestDelay);U([s,r],([c])=>E(c),{immediate:!0}),ge(()=>{Q()})}),{isSearching:_,results:y}};var xe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=ae(),w=M(),i=se(le),{enabled:_,addQueryHistory:y,queryHistory:d,removeQueryHistory:Q}=Ce(),{enabled:E,resultHistory:c,addResultHistory:H,removeResultHistory:q}=we(),x=_||E,D=re(s,"queries"),{results:m,isSearching:h}=Qe(D),u=ue({isQuery:!0,index:0}),v=B(0),p=B(0),F=C(()=>x&&(d.value.length>0||c.value.length>0)),P=C(()=>m.value.length>0),L=C(()=>m.value[v.value]||null),Y=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?c.value.length-1:d.value.length-1):u.index=t-1},z=()=>{const{isQuery:e,index:t}=u;t===(e?d.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=L.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},V=()=>{p.value<L.value.contents.length-1?p.value+=1:K()},N=()=>{p.value>0?p.value-=1:J()},T=e=>e.map(t=>_e(t)?t:a(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=fe[e.index]||"$content",[o,R=""]=Ee(t)?t[w.value].split("$content"):t.split("$content");return e.display.map(n=>a("div",T([o,...n,R])))}return e.display.map(t=>a("div",T(t)))},A=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>_?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.queryHistory),d.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{l("updateQuery",e)}},[a(I,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:O,onClick:o=>{o.preventDefault(),o.stopPropagation(),Q(t)}})]))])):null,Z=()=>E?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,t)=>a(b,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{A()}},()=>[a(I,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>T(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:O,onClick:o=>{o.preventDefault(),o.stopPropagation(),q(t)}})]))])):null;return ie("keydown",e=>{if(s.isFocusing){if(P.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=L.value.contents[p.value];y(s.queries.join(" ")),H(t),r.push(S(t)),A()}}else if(E){if(e.key==="ArrowUp")Y();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(l("updateQuery",d.value[t]),e.preventDefault()):(r.push(c.value[t].link),A())}}}}),U([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!P.value:!F.value}],id:"search-pro-results"},s.queries.length?h.value?a(oe,{hint:i.value.searching}):P.value?a("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},o)=>{const R=v.value===o;return a("li",{class:["search-pro-result-list-item",{active:R}]},[a("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((n,ee)=>{const G=R&&p.value===ee;return a(b,{to:S(n),class:["search-pro-result-item",{active:G,"aria-selected":G}],onClick:()=>{y(s.queries.join(" ")),H(n),A()}},()=>[n.type==="text"?null:a(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",W(n))])])})])})):i.value.emptyResult:x?F.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{xe as default};