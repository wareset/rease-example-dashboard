!function(){"use strict";var t={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},s="undefined"!=typeof window,d={},n$1=t=>t&&t._&&t._.ir===d,f=Array.isArray,a$1=t=>"function"==typeof t,o=t=>null!=t&&a$1(t.then),i$1=t=>null!=t&&a$1(t.subscribe),v=/^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/,h=t=>v.test(t),G="undefined"!=typeof Map?Map:class BudgetMap{constructor(t){this._=t?t.slice():[]}get(t){for(var s=this._.length;s--;)if(this._[s][0]===t)return this._[s][1]}set(t,s){for(var d=-1,f=this._.length;f--;)if(this._[f][0]===t){d=f;break}return d<0?this._.push([t,s]):this._[d][1]=s,this}},P=Object,q=P.defineProperty,Y=P.getPrototypeOf,J=P.getOwnPropertyDescriptor,p=()=>{},g=()=>p,_=t=>t,b=(t,s,d)=>{t.then((t=>{m(t,s,d)}))},m=(t,s,d)=>{o(t)?t.then((t=>{m(t,s,d)})):s(t,d)},E=(t,s,d)=>{if(t.length)for(var f=[],v=[t.length],G=v[0];G-- >0;)m(t[G],T,[f,G,v,s,d]);else s([],d)},N=t=>{var s,d=!1,f=[];return t((t=>{m(t,(t=>{d=!0,s=t;for(var v=0;v<f.length;v++)f[v][0](f[v][1](s))}))})),{then:t=>N((v=>{d?v(t(s)):f.push([v,t])}))}},T=(t,s)=>{s[0][s[1]]=t,--s[2][0]||s[3](s[0],s[4])},w=(t,s,d)=>{var n=()=>{s=p},f=[],v=t.subscribe((t=>{if(1===f.push(t)){for(var v=0;v<f.length;v++)s(f[v],d,n);f=[]}}));return n=()=>{v&&(s=p,v.unsubscribe?v.unsubscribe():v(),v=null)},s===p&&n(),n},y=(t,s,d)=>{var f=[p,p,()=>{f[2]===p||(f[2]=s=p,f[1](),f[0]())}];return f[0]=w(t,((t,s,d)=>{s.u[0]=d,s.u[1](),s.u[1]=k(t,((t,s,d)=>{s.u[1]=d,s.f(t,s.c,s.u[2])}),s)}),{u:f,f:s,c:d}),f[2]},k=(t,s,d)=>{if(o(t))t=R(t);else if(!i$1(t))return s(t,d,p),p;return y(t,s,d)},L=(t,s,d)=>w(O(t),s,d),R=t=>({subscribe:(s,d)=>{var n=()=>{s=p};return b(t,(t=>{s(t,d,n)})),n}}),O=t=>({subscribe:(s,d)=>{t=t.slice();for(var f=[],v={},G=[0],o=()=>{for(var t in v)v[t]()},P=t.length,q=0;q<P;q++)v[q]=k(t[q],M,[q,P,f,v,G,[!1],s,d,o]);return o}}),S=(t,s)=>({subscribe:(d,f)=>{var v=p,G=p,o=()=>{d=p,v(),G()};return G=w(O(t),((t,P,q)=>{G=q,v(),v=k(s(t),((t,s,G)=>{v=G,d(t,f,o)}))})),o}}),M=(t,[s,d,f,v,G,P,q,Y,J],te)=>{f[s]=t,v[s]=te,(G[0]===d||P[0]!==(P[0]=!0)&&++G[0]===d)&&q(f.slice(),Y,J)},te=/^style--/,oe=/^class--/,H=t=>t,U=t=>{switch(typeof t){case"string":return t;case"object":var s="",d="";if(f(t))for(var v,G=0;G<t.length;G++)(v=U(t[G]))&&(s+=d+v,d=" ");else if(t)for(var P in t)t[P]&&(s+=d+P,d=" ");return s;default:return""}},ie={},F=t=>ie[t]||(ie[t]=t.replace(/([A-Z])/g,"-$1").toLowerCase()),I=t=>{switch(typeof t){case"string":return t;case"object":var s="";if(f(t))for(var d,v=0;v<t.length;v++)(d=I(t[v]))&&(s+=d+(";"===d[d.length-1]?"":";"));else if(t)for(var G in t)null!=t[G]&&(s+=F(G)+":"+t[G]+";");return s;default:return""}},x=(t,s,d)=>{d?t.classList.add(s):t.classList.remove(s)},re=[(t,s,d,f)=>{if(d?t.setAttribute(s,d):t.removeAttribute(s),f._.ac)for(var v in f._.ac)x(t,v,f._.ac[v]);(t=>{t.home._is.css&&!t.home._is.css[2]&&t.node&&t.node.classList.add(t.home._is.css[1])})(f)},U],se=[(t,s,d,f)=>{if(d?t.setAttribute(s,d):t.removeAttribute(s),f._.as)for(var v in f._.as)t.style[v]=f._.as[v]},I],ae=[(t,s,d,f)=>{x(t,s=s.slice(7),f._.ac[s]=d)},H],le=[(t,s,d,f)=>{t.style[s=s.slice(7)]=f._.as[s]=d},H],ve=[(t,s,d)=>{"_"===s[0]||B(t.localName,s,t).set?t[s]=d:null==d||""===d?t.removeAttribute(s):t.getAttribute(s)!==d&&t.setAttribute(s,d)},H],X=(t,s)=>"class"===t?re:"style"===t?se:oe.test(t)?(s.ac||(s.ac={}),ae):te.test(t)?(s.as||(s.as={}),le):ve,me={},B=(t,s,d)=>(me[t]||(me[t]={}))[s]||(me[t][s]=J(Y(d),s)||{}),be=(()=>{if(!s)return g;var t=document,d=setTimeout,v=clearTimeout,a=(t,s,d,f)=>(t.addEventListener(s,d,f),()=>{t.removeEventListener(s,d,f)}),o=t=>{t.cancelable&&t.preventDefault()},i=t=>{t.stopPropagation()},l=(t,s)=>function(d){for(var f=0;f<t.length;f++)t[f].call(this,d,s)},h=(t,s)=>function(d){d.target===t&&s.call(this,d)},u=t=>function(s){s.isTrusted&&t.call(this,s)},c=(t,s,d)=>function(f){((t,s)=>{var d=s;for(var f in Y){if(!(Y[f][0]in t)&&!(Y[f][1]in t))return!1;d--}return!d})(s,d)&&t.call(this,f)},G=[],P=[],Y={},b=()=>{b=p,a(t,"keyup",(s=>{for(var d=0;d<G.length;d++)G[d][0].length?G[d][1].call(t,s):G.splice(d--,1);delete Y[s.code+s.key]}),!1),a(t,"keydown",(s=>{Y[s.code+s.key]=[s.code,s.key];for(var d=0;d<P.length;d++)P[d][0].length?P[d][1].call(t,s):P.splice(d--,1)}),!1)},m=(s,d,f,v)=>{var G=t.createEvent("CustomEvent");return G.initCustomEvent(s,d,f,v),G},E=(t,s)=>{t.dispatchEvent(s)},J=0,T=()=>{J--},te=0,y=()=>{te--},oe=0,L=()=>{oe--},ie=t.head,re=ie,se=ie,ae=ie,A=(t,s)=>t.contains(s),C=(t,s)=>function(d){(se===t||A(t,se))&&s.call(this,d)},H=(t,s)=>function(d){(ae===t||A(t,ae))&&s.call(this,d)},U=(t,s)=>function(d){se!==t&&!A(t,se)&&s.call(this,d)},$=(t,s)=>function(d){ae!==t&&!A(t,ae)&&s.call(this,d)},le=0,I=(t,s)=>(le++,function(d){ie!==t&&!A(t,ie)&&s.call(t,d)}),x=()=>{le--},ve=0,j=(t,s)=>(ve++,function(d){re!==t&&!A(t,re)&&s.call(t,d)}),W=()=>{ve--},me=0,z=(t,s)=>(me++,function(d){se!==t&&!A(t,se)&&s.call(t,d)}),X=()=>{me--},be=0,B=(t,s)=>(be++,function(d){ae!==t&&!A(t,ae)&&s.call(t,d)}),Z=()=>{be--},xe="tapstart tapmove tapend inhover infocus unhover unfocus".split(" "),[Se,Ae,Me,Oe,je,Ge,Xe]=xe,Ye=!1,ne=()=>{ne=p;try{a(window,"test",p,q({},"passive",{get:()=>!(Ye=!0)}))}catch(t){}var s,f,G,i=(t,s)=>{var d;ie=se,re=ae,se=t.target,ae=s===Se?se:ae,ie!==se&&(d={event:t},me>0&&E(ie,m(Ge,!0,!1,d)),le>0&&E(se,m(Oe,!0,!1,d))),re!==ae&&(d={event:t},be>0&&E(re,m(Xe,!0,!1,d)),ve>0&&E(ae,m(je,!0,!1,d)))},l=(t,s)=>{var d=t.target;switch(s){case Se:J>0&&E(d,m(Se,!0,!0,{event:t}));break;case Ae:te>0&&E(d,m(Ae,!0,!0,{event:t}));break;case Me:oe>0&&E(d,m(Me,!0,!0,{event:t}))}},h=()=>{s=!1},u=(t,d)=>{t.touches.length<2&&(s=!0,l(t,d))},c=(t,G)=>{s?(v(f),f=d(h)):l(t,G)};for(var P in G="onpointermove"in t?{pointerdown:t=>{i(t,Se)},pointermove:t=>{i(t,Ae)},pointerup:t=>{i(t,Me)},pointercancel:t=>{i(t,Me)},touchstart:t=>{u(t,Se)},touchmove:t=>{u(t,Ae)},touchend:t=>{u(t,Me)},touchcancel:t=>{u(t,Me)},mousedown:t=>{c(t,Se)},mousemove:t=>{c(t,Ae)},mouseup:t=>{c(t,Me)}}:{touchstart:t=>{i(t,Se),u(t,Se)},touchmove:t=>{i(t,Ae),u(t,Ae)},touchend:t=>{i(t,Me),u(t,Me)},touchcancel:t=>{i(t,Me),u(t,Me)},mousedown:t=>{i(t,Se),c(t,Se)},mousemove:t=>{i(t,Ae),c(t,Ae)},mouseup:t=>{i(t,Me),c(t,Me)}})a(t,P,G[P],!0)};return(t,s,d,v)=>{for(var q,Y,ie=f(d)?d.slice():[d],re=l(ie,v),se={},ae=0,le=[],O=()=>{for(ie.length=0;le.length>0;)le.pop()()},ve=!1,me=!1,be=!1,xe=!1,Ze=s.split(/[^a-z\d]+/i),ot=Ze.length;ot--;)if(Y=Ze[ot])switch(Y){case"once":ie.push(O);break;case"strict":be=!0;break;case"keysup":xe=!0;break;case"passive":ve=!0;break;case"capture":me=!0;break;case"self":re=h(t,re);break;case"trusted":re=u(re);break;case"stop":ie.unshift(i);break;case"prevent":ie.unshift(o);break;case"inhovered":re=C(t,re);break;case"infocused":re=H(t,re);break;case"unhovered":re=U(t,re);break;case"unfocused":re=$(t,re);break;default:if(1===Y.length||/[A-Z]/.test(Y[0]))Y in se||(se[Y]=!0,ae++);else if(!ot)switch(q=Y){case Oe:re=I(t,re),le.push(x);break;case je:re=j(t,re),le.push(W);break;case Ge:re=z(t,re),le.push(X);break;case Xe:re=B(t,re),le.push(Z)}}if(ne(),(ae||be)&&(b(),re=c(re,se,ae)),q){switch(q){case Se:J++,le.push(T);break;case Ae:te++,le.push(y);break;case Me:oe++,le.push(L)}var at=Ye?{passive:ve,capture:me}:me;le.push(a(t,q,re,at))}else(xe?G:P).push([ie,re]);return O}})(),D=(t,s)=>d=>be(d.node,t,s,d),xe=(()=>{if(!s)return g;var t,d="__REASE_RESIZE",f=setTimeout,v=clearTimeout,a=s=>{for(var f,v,G,P,q=0;q<s.length;q++)if(!(v=(f=s[q].target)[d])||v.l.length<1)t.unobserve(f);else if(G=f.offsetWidth||f.clientWidth,P=f.offsetHeight||f.clientHeight,v.w!==G||v.h!==P){v.w=G,v.h=P;for(var Y,J={width:G,height:P,target:f},te=v.l,oe=0;oe<te.length;oe++){Y=te[oe];for(var ie=1;ie<Y.length;ie++)Y[ie].call(f,J,Y[0]);Y.length||te.splice(oe--,1)}v.l.length||t.unobserve(f)}},o=()=>{o=p;try{t=new ResizeObserver(a)}catch(P){var s,G=[],l=()=>{v(s),a(G),G.length&&(s=f(l,25))};t={observe:t=>{G.push({target:t}),f(l)},unobserve:t=>{f((t=>{var s=t[d];if(!s||!s.l.length)for(var f=G.length;f-- >0;)if(G[f].target===t){G.splice(f,1);break}}),1,t)}},document.addEventListener("visibilitychange",(()=>{document.hidden?v(s):l()}),!1)}};return(s,G,P)=>{o();var q=[P].concat(G),Y=s[d]||(s[d]={l:[]});1===Y.l.push(q)&&t.observe(s);var J=f((()=>{var t=s.offsetWidth||s.clientWidth,d=s.offsetHeight||s.clientHeight,f={width:t,height:d,target:s};Y.w=t,Y.h=d;for(var v=1;v<q.length;v++)q[v].call(s,f,q[0])}));return q.push((()=>{v(J),q.pop()})),()=>{q.length=0,!Y.l[1]&&(!Y.l[0]||Y.l[0]===q)&&t.unobserve(s)}}})(),K=t=>s=>xe(s.node,t,s),Q=(t,s)=>{return!((t,s)=>t==t?t===s:s!=s)(t,s)||null!=(d=s)&&"object"==typeof d||a$1(s);var d},V=(t,s,d)=>{t._value=s;var f=t._;f.break=!0;var v=f.queue;if(1===v.push({f:d,n:s})){for(var G,P=f.index,q=f.items,Y=0;Y<v.length;Y++)if((G=v[Y].f)||Y>v.length-2){f.break=!1,P[0]=0;for(var J,te=v[Y];P[0]<q.length;P[0]++)if(J=P[0],(G||Q(q[J].o,te.n))&&q[J].s(t._value=q[J].o=te.n),!G&&f.break){q[J].o=t._value;break}}f.queue=[]}return t};class ReaseSubject{constructor(t,s,d,f){this._={items:[],queue:[],mwSet:d||(d=_),mwGet:f||_,onFst:s,onLst:null,break:!1,index:[0]},this._value=d(t,this)}get(){return this._.mwGet(this._value,this)}set(t){return this._.queue.length>0?V(this,this._.mwSet(t,this),!1):Q(this._value,t=this._.mwSet(t,this))?V(this,t,!1):this}next(t){return V(this,this._.mwSet(t,this),!0)}clear(){for(var t=this._.items,s=t.length;s-- >0;)t[s].u();return this}subscribe(t,s){var d={s:f=>{t(f,s,d.u)},u:()=>{if(d.s!==d.u){d.s=d.u=p;var t=v.indexOf(d);t<0||(v.splice(t,1),t>f.index[0]||f.index[0]--),v.length<1&&f.onLst&&f.onLst(this)}},o:{}},f=this._,v=f.items;return v.length<1&&f.onFst&&(f.onLst=f.onFst(this)),v.push(d),f.queue.length<1&&d.s(d.o=this._value),d.u}}var Se=ReaseSubject.prototype;q(Se,"$",{get:Se.get,set:Se.set});for(var ee=function(t,s){q(Se,t[s],{value:function(){var d=this.get();return d=null!=d&&d[t[s]]?d[t[s]](arguments):d,s?d+"":d}})},Ae=["valueOf","toString","toJSON"],Me=3;Me-- >0;)ee(Ae,Me);var Oe,je,Ge,Xe=S,Ye={ROOT:"ROOT",COMPONENT:"COMPONENT",ELEMENT:"ELEMENT",FRAGMENT:"FRAGMENT",SLOT:"SLOT",TEXT:"TEXT",EXPRESSION:"EXPRESSION",COMMENT:"COMMENT",HTML:"HTML",RULES:{TAG:"RULE_TAG",IF:"RULE_IF",ELIF:"RULE_ELIF",ELSE:"RULE_ELSE",WATCH:"RULE_WATCH",AWAIT:"RULE_AWAIT",THEN:"RULE_THEN",FOR:"RULE_FOR"}},he=t=>{Ge=t,Oe=t.high,je=t.home},ue=t=>{Ge=t.parent},ce=()=>{Ge=null};function de(t){var s=n$1(this)?this:Ge;if(!n$1(s))throw t;s.on?(s._.od||(s._.od=[])).push(t):t(s)}var Ze,pe=(t,s,d)=>{if(!n$1(t))throw t;var f=Ge,v=Oe,G=je;he(t),t.type===Ye.COMPONENT&&(Oe=je=t);var P=s.apply(t,d);return Ge=f,Oe=v,je=G,P},ge=()=>Ge,_e=t=>{if(t._.esu)for(var s,d=t._.esu;d.length;)(s=d.pop())&&a$1(s=s.destroy||s)&&(he(t),s(t))},ot={3:[],8:[]},at=/^(?:audio|bgsound|source|track|video|dialog|link|meta|style|applet|embed|noembed|object|param|canvas|noscript|script|button|datalist|fieldset|form|input|keygen|label|legend|meter|optgroup|option|output|progress|select|textarea|frame|frameset|iframe|noframes)$/i,Ee=(t,s)=>{var d=t.nodeType;if(3===d||8===d)ot[d].length<s&&ot[d].push(t);else if(1===d&&!at.test(t.localName)&&((d=t.localName+t.namespaceURI)in ot||(ot[d]=[]),ot[d].length<s)){for(var f=t.childNodes,v=f.length;v-- >0;)t.removeChild(f[v]);t.value&&(t.value=null),t.type&&(t.type=null),ot[d].push(t)}},Ne=t=>{if(t._.od)for(;t._.od.length;)t._.od.pop()(t)},Te=t=>{if(t&&t.on){t.on=!1,_e(t),Ne(t),Re(t),t._.ods&&t._.ods();var s=t.node;s&&s.parentNode&&s.parentNode.removeChild(s),we(t),s&&Ee(s,25),t._.$&&(t._.$=1,Ue(t))}},we=t=>{for(;t.children.length;)Te(t.children.pop())},ye=(t,s)=>{t._.ods=s,t.on||t._.ods()},ke=t=>s=>{if(s.root.node)for(var d,f,v=s;;)if(d=(v=v.parent).node){1===d.nodeType?(t(s,d),d.appendChild(s.node)):(t(s,d=(f=d).parentNode),d.insertBefore(s.node,f));break}},Le=t=>{var s,d,f,v=t.attrs;for(var G in t.props)if(d=v[G]={is:null,_is:s=t.props[G],high:t.high,_:{$:0,u:p}},i$1(s)||o(s)&&(s=R(s),1)){if(He(d),d._.u=y(s,((t,[s,d,f,v],G)=>{d._.u=G,s.on?d.is!==(d.is=t=v[1](t))&&s.node&&v[0](s.node,f,t,s):G(),Ue(d)}),[t,d,G,X(G,t._)]),!t.on){d._.u();break}}else f=X(G,t._),d.is=s=f[1](s),t.node&&f[0](t.node,G,s,t)},Re=t=>{var s=t.attrs;if(s){t.attrs=null;var d=t.node;for(var f in s)d&&(d.hasAttribute(f)?d.removeAttribute(f):f in d&&(d[f]=null)),s[f]._.u(),Ue(s[f])}},lt=(Ze=ke(((s,d)=>{var f=t[s.is]||d.namespaceURI,v=s.is+f,G=v in ot&&ot[v].pop();if(G)for(var P=G.attributes,q=P.length;q-- >0;)G.removeAttribute(P[q].name);else G=document.createElementNS(f,s.is);s.node=G,(t=>{if(t.use)for(var s=t._.esu||(t._.esu=[]),d=0;d<t.use.length;d++)if(he(t),s.push(t.use[d](t)),!t.on){_e(t);break}})(s),Le(s),he(s)})),t=>{t.attrs={},Ze(t),t.node||Le(t)}),ut=ke((t=>{ot[3].length?(t.node=ot[3].pop()).data="":t.node=document.createTextNode("")})),ft=ke((t=>{ot[3].length?(t.node=ot[3].pop()).data=t.is:t.node=document.createTextNode(t.is)})),gt=ke((t=>{ot[8].length?(t.node=ot[8].pop()).data=t.is:t.node=document.createComment(t.is)})),Ce=(t,s,f,v,G,P)=>Ge=Ge.children[Ge.children.push({type:t,name:P,is:f,_is:s,node:null,props:v,use:G,root:Ge.root,home:je,high:Oe,parent:Ge,children:[],slots:null,attrs:null,on:Ge.on,pub:{},_:{ir:d,$:0}})-1],He=t=>{t.high._.$++,t._.$++},Ue=t=>{if(t._.$>0)if(t._.$--,t.type!==Ye.COMPONENT&&t.type!==Ye.ROOT)t.high&&Ue(t.high);else if(0===t._.$){t._.$=NaN;var s=t._.oc;if(s){for(var d=[],f=0;f<s.length&&(he(t),d.push(s[f](t)),t.on);f++);ce(),E(d,((t,s)=>{if(s.on){for(var d=t.length;d--;)a$1(t[d])&&de(t[d]);s.high&&Ue(s.high)}else for(var f=t.length;f--;)a$1(t[f])&&(he(s),t[f](s));ce()}),t)}else t.high&&Ue(t.high)}},$e=t=>{Ge.on&&void 0!==t&&""!==t&&(ft(Ce(Ye.TEXT,t,""+t)),ue(Ge))},Fe=t=>{if(Ge.on&&void 0!==t&&""!==t){var s=Ce(Ye.EXPRESSION,t,"");ft(s),He(s),ye(s,k(t,((t,s,d)=>{s.on?(t=void 0===t?"":""+t,s.is!==(s.is=t)&&s.node&&(s.node.data=t)):d(),Ue(s)}),s)),ue(s)}},Ie=t=>{Ge.on&&void 0!==t&&""!==t&&(gt(Ce(Ye.COMMENT,t,""+t)),ue(Ge))},yt={},We=(t,s)=>{for(var d,f=t.children,v=0;v<f.length;v++){if(!(d=f[v]).node||1!==d.node.nodeType)if(d.type===Ye.HTML)for(;d._.html.length;)s.appendChild(d._.html[0]);else We(d,s);d.node&&s.appendChild(d.node)}},Pe=t=>{for(var s=t.slots,d=0;d<s.length;d++)t.on&&s[d][1]()},ze=s=>{var d=Ge;d.slots=s,He(d),ye(d,k(d._is,((s,d,f)=>{if(d.on){if(d.is!==(d.is=s)){switch(typeof s){case"function":we(d),he(d),Je(s,d.props,d.use)(d.slots);break;case"string":if("r-slot"===s)we(d),he(d),Be(d._.sn,d.props,d.use)((()=>{Pe(d)}));else{var v=d.children[0],G=h(s),P=!v||v.type!==Ye.ELEMENT&&v.type!==Ye.FRAGMENT||G||s in t,q=!!d.root.node;if("r-fragment"===s){if(P)we(d),he(d),tt(d.props,d.use)(Pe(d));else if(_e(v),Ne(v),Re(v),v.type=Ye.FRAGMENT,v.is=null,q){var Y=v.node,J=Y.parentNode;J.removeChild(Y),ut(v);for(var te=v.node,oe=Y.childNodes,ie=oe.length;ie-- >0;)J.insertBefore(oe[ie],te),te=oe[ie]}}else if(P||v&&(v.is in t||h(v.is)))we(d),he(d),Qe(s,d.props,d.use)(G||Pe(d));else{_e(v),Ne(v),Re(v);var re=v.type;if(v.type=Ye.ELEMENT,v.is=s,q){var se=v.node;if(se.parentNode.removeChild(se),lt(v),re!==Ye.FRAGMENT)for(var ae=se.childNodes;ae.length;)v.node.appendChild(ae[0]);else We(v,v.node);Ke()}}}break;default:we(d)}ce()}}else f();Ue(d)}),d)),ue(d)},qe=t=>{for(var s=Ge,d=s.home.slots,f=0;f<d.length&&(d[f][0]!==s._is||(Ge=s,Oe=s.high,je=s.home.home,s.is=!0,d[f][1](),s.on));f++);s.is?(Oe=s.high,je=s.home):t&&t.call(s),ue(s)},Be=(t,s,d)=>Ge.on?(ut(Ce(Ye.SLOT,t,!1,s,d,t)),qe):p,De=t=>{var s=Ge;s.slots=t,He(s),Oe=je=s,s.is.call(s,s.props),Ue(s),Oe=s.high,je=s.home,ue(s)},Je=(t,s,d)=>Ge.on?(Ce(Ye.COMPONENT,t,t,s||{},d,t.name),((t,s)=>{s&&!(s[1]in t.css)&&(a$1(s[0])&&(s[0]=s[0]("."+s[1])),t.css[s[1]]="",t._.$++,t._.od.push(k(s[0],((t,[s,d,f,v,G],P)=>{if(s.on){if(f[0]!==(f[0]=t)&&(s.css[d]=t,s.node)){var q=v[0]||(v[0]=document.getElementById(d)||(t=>{var s=document.createElement("style");return s.id=t,document.head.appendChild(s),s})(d));q.textContent!==t&&(q.textContent=t)}}else P();G[0]&&(G[0]=!1,Ue(s))}),[t,s[1],[""],[null],[!0]])))})(Ge.root,t.css),De):p,Ke=()=>{var t=Ge;(t=>{if(t._.esu)for(var s,d=t._.esu,f=0;f<d.length;f++)if((s=d[f])&&a$1(s=s.created)&&(he(t),s(t),!t.on)){_e(t);break}})(t),ue(t)},Qe=(t,s,d)=>Ge.on?(lt(Ce(Ye.ELEMENT,t,t,s||{},d)),Ke):p,Ve=t=>{t.call(Ge)},et=()=>{ue(Ge)},tt=(t,s)=>Ge.on?(ut(Ce(Ye.FRAGMENT,null,null,t,s)),et):p,rt=(t,s)=>s>0?!t:t,nt=t=>{var s=Ge;He(s),ye(s,w(O(s.parent._.if),((t,[s,d,f],v)=>{s.on?s.is!==(s.is=t.every(rt))&&(s.is?(he(s),d.call(s,t[f]),ce()):(Ne(s),we(s))):v(),Ue(s)}),[s,t||p,s.parent._.if.length-1])),ue(s)},st=(t,s,d)=>Ge.on?(ut(Ce(Ye.RULES.IF,t,!1,s,d)),Ge.parent._.if=[t],nt):p,it=t=>{var s=Ge;He(s),ye(s,k(s._is,((t,[s,d],f)=>{s.on?(Ne(s),we(s),he(s),d.call(s,s.is=t),ce()):f(),Ue(s)}),[s,t||p])),ue(s)},ht=t=>{var s=Ge,d=[!0];ye(s,k(s._is,((t,[s,d],f)=>{d[0]=!1,s.is=s.parent._.await=t,f(),Ne(s),we(s)}),[s,d])),d[0]&&t&&s.on&&(he(s),t.call(s,s.is),ce()),ue(s)},ct=t=>{var s=Ge;He(s),ye(s,k(s._is,((t,[s,d],f)=>{f(),s.on&&(he(s),d.call(s,s.is=t),ce()),Ue(s)}),[s,t||p])),ue(s)},dt=t=>t>0?1:t<0?-1:0,vt=(t,s,d,f,v)=>{var G;return he(t),tt(t.props,t.use)(((G=Ge)._.for=[d,s],v.call(t,s,d,f))),ce(),G},pt=t=>{var s=Ge;He(s),ye(s,k(s._is,((t,[s,d,v,P],q)=>{if(s.on){var Y=s.children,J=typeof t;if(s.is!==(s.is=t)||"object"===J){var te;if(t)switch(J){case"number":if(te=dt(t|=0))if(P[0]!==(P[0]=J)||dt(v[0])!==te){we(s);for(var oe=0,ie=0;oe!==t&&(vt(s,oe+te,ie++,t,d),s.on);oe+=te);}else if(te===dt(t-v[0]))for(var re=v[0],se=re*te;re!==t&&(vt(s,re+te,se++,t,d),s.on);re+=te);else for(var ae=t*te;Y.length>ae;)Te(Y.pop());else we(s);break;case"string":if(P[0]!==(P[0]=J)){we(s);for(var le=0;le<t.length&&(vt(s,t[le],le,t,d),s.on);le++);}else{for(var ve=!1;Y.length>t.length;)Te(Y.pop());for(var me=0;me<t.length;me++)if(t[me]!==v[0][me]){if(!ve)for(ve=!0;Y.length>me;)Te(Y.pop());if(vt(s,t[me],me,t,d),!s.on)break}}break;case"object":if(f(t)){var be=new G;if(P[0]!==(P[0]="a"))for(var xe,Se=0;Se<t.length&&(be.set(t[Se],(xe=be.get(t[Se]))?xe+1:1),vt(s,t[Se],Se,t,d),s.on);Se++);else{for(var Ae,Me=0;Me<t.length;Me++)if(be.set(t[Me],(Ae=be.get(t[Me]))?Ae+1:1),Ae=v[0].get(t[Me]))v[0].set(t[Me],Ae-1);else if(vt(s,t[Me],Me,t,d),!s.on)break;for(var Oe,je,Ge=Y.length;Ge--;)(je=v[0].get(Oe=Y[Ge]._.for[1]))&&(v[0].set(Oe,je-1),Te(Y.splice(Ge,1)[0]))}t=be}else if(P[0]!==(P[0]=J)){for(var Xe in we(s),t)if(vt(s,t[Xe],Xe,t,d),!s.on)break}else{for(var Ye,Ze={},ot=Y.length;ot--;)t[(Ye=Y[ot]._.for)[0]]===Ye[1]?Ze[Ye[0]]=!0:Te(Y.splice(ot,1)[0]);for(var at in t)if(!0!==Ze[at]&&(vt(s,t[at],at,t,d),!s.on))break}break;default:throw t}else P[0]="",we(s);v[0]=t}}else q();Ue(s)}),[s,t,[null],[""]])),ue(s)},_t=t=>{if(t.parentNode&&t.parentNode.removeChild(t),t.childNodes)for(var s=t.childNodes,d=s.length;d-- >0;)_t(s[d]);Ee(t,999)},bt=(t,[s,d,f,v,G])=>{var P=Ge,q=Oe,Y=je;if(G&&s.node)for(var J,te=s.node.childNodes,oe=te.length;oe-- >0;)"script"!==(J=te[oe]).localName&&"style"!==J.localName&&_t(J);Oe=je=Ge=s,s._.$++,Je(d,f,v)((de((t=>{t.root.node=null,Te(t.root)})),[])),Ue(s),Ge=P,Oe=q,je=Y},mt=(t,{hydrate:s=!0,target:d=null,pub:f={},props:v={},use:G,beforeCreated:P=null,onCreated:q=null}={})=>{var Y=Ge;Ge={on:!0,_:{},children:[]};var J=Ce(Ye.ROOT,null,null,{},void 0);J.css={},J.high=J.home=J.parent=null,J.pub=f,J.node=d,J.root=J,q&&(J._.oc=[q]),de((t=>{t.node=null})),Ge=Y;var te=[J,t,v,G,s];P?m(P(J),bt,te):bt(0,te)},Et=(t,s)=>{if(n$1(t)||n$1(t=ge()))return t;throw"not external "+s.name},Nt=(t,s,d,f)=>new ReaseSubject(t,s,d,f),wt=function e(t,s,d,f){var v=Et(this,e),G=Nt(t,s,d,f);return de.call(v,(()=>{G.clear()})),G},kt=function e(t,s,d){var f=Et(this,e),v=w(t,s,d);return de.call(f,v),v},xt=function e(t,s,d){var f=Et(this,e),v=k(t,s,d);return de.call(f,v),v},Lt=t=>{if(n$1(t)){if(t.parent){var s=t.parent.children,d=s.indexOf(t);d<0||s.splice(d,1)}Te(t)}},Tt=function e(t,s,d,f){var v=Et(this,e),G=be(t,s,d,f);return de.call(v,G),G},St=s?window:{innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},Rt=0,At=()=>{Ct.$=Ot.$=Dt.$=Wt.$=window.outerHeight-1},Mt=s?()=>(Rt++||window.addEventListener("resize",At,!0),()=>{--Rt||window.removeEventListener("resize",At,!0)}):g,Ht=()=>St.innerWidth,Ut=()=>St.innerHeight,$t=()=>St.outerWidth,Ft=()=>St.outerHeight,Ct=Nt(0,Mt,Ht,Ht),Ot=Nt(0,Mt,Ut,Ut),Dt=Nt(0,Mt,$t,$t),Wt=Nt(0,Mt,Ft,Ft),zt=Object.freeze({__proto__:null,$innerHeight:Ot,$innerWidth:Ct,$outerHeight:Wt,$outerWidth:Dt,ReaseSubject:ReaseSubject,TYPES:Ye,_$:Xe,_c:Je,_d:(t,s,d,f)=>{var v=p;if(Ge.on){var G=Ce(Ye.ELEMENT,f,t,s||{},d);He(G),ye(G,k(f,((t,[s,d],f)=>{if(s.on)if(s.is!==(t||(t=d))&&s.node){_e(s),Ne(s),Re(s),s.is=t;var v=s.node;v.parentNode.removeChild(v),lt(s);for(var G=v.childNodes;G.length;)s.node.appendChild(G[0]);Ke()}else s.is=t;else f();Ue(s)}),[G,t])),G.on&&(he(G),lt(G),v=Ke)}return v},_e:Qe,_f:tt,_fc:Ve,_h:(t,s)=>{if(Ge.on){var d=Ce(Ye.HTML,t,"");ut(d),He(d),ye(d,k(t,((t,[s,d,f],v)=>{if(s.on){if(t=void 0===t?"":""+t,s.is!==(s.is=t)&&s.node){for(var G;d.length;)(G=d.pop()).parentNode.removeChild(G);if(t){var P=s.node.parentNode,q=P.namespaceURI;(yt[q]||(yt[q]=document.createElementNS(q,"div"))).innerHTML=f?f.createHTML(t):t;for(var Y=yt[q].childNodes,J=0;J<Y.length;J++)d.push(G=Y[J]),P.insertBefore(G,s.node)}}}else v();Ue(s)}),[d,d._.html=[],s])),ue(d)}},_n:Ie,_nd:t=>{if(Ge.on&&void 0!==t&&""!==t){var s=Ce(Ye.COMMENT,t,"");gt(s),He(s),ye(s,k(t,((t,s,d)=>{s.on?(t=void 0===t?"":""+t,s.is!==(s.is=t)&&s.node&&(s.node.data=t)):d(),Ue(s)}),s)),ue(s)}},_ra:(t,s,d)=>Ge.on?(ut(Ce(Ye.RULES.AWAIT,Ge._.await=t,void 0,s,d)),ht):p,_rd:(t,s,d,f)=>Ge.on?(ut(Ce(Ye.RULES.TAG,t,null,s||{},d)),Ge._.sn=f,ze):p,_re:(t,s)=>Ge.on?(ut(Ce(Ye.RULES.ELSE,null,!1,t,s)),Ge.parent._.if=[!0,...Ge.parent._.if||[!0]],nt):p,_rf:(t,s,d)=>Ge.on?(ut(Ce(Ye.RULES.FOR,t,null,s,d)),pt):p,_ri:st,_rl:(t,s,d)=>Ge.on?(ut(Ce(Ye.RULES.ELIF,t,!1,s,d)),Ge.parent._.if=[t,...Ge.parent._.if||[!0]],nt):p,_rt:(t,s)=>Ge.on?(ut(Ce(Ye.RULES.THEN,Ge._.await,void 0,t,s)),ct):p,_rw:(t,s,d)=>Ge.on?(ut(Ce(Ye.RULES.WATCH,t,void 0,s,d)),it):p,_s:Be,_t:$e,_ul:D,_ur:K,_x:Fe,context:ge,createReaseApp:mt,destroy:Lt,involve:pe,isContext:n$1,isSubject:t=>t instanceof ReaseSubject,isSubscribable:i$1,isThenable:o,listen:Tt,listenGlobal:be,onCreated:function fe(t){var s=n$1(this)?this:Ge;if(!n$1(s))throw t;if(s.type!==Ye.COMPONENT)throw t;s.on?(s._.oc||(s._.oc=[])).push(t):t(s)},onDestroy:de,resize:function e(t,s,d){var f=Et(this,e),v=xe(t,s,d);return de.call(f,v),v},resizeGlobal:xe,subject:wt,subjectGlobal:Nt,subscribablefySafeAll:O,subscribablefySafeAllWithProxy:S,subscribablefyThenable:R,subscribe:kt,subscribeGlobal:w,subscribeSafe:xt,subscribeSafeAll:function(t,s,d){var f=Et(this,xt),v=L(t,s,d);return de.call(f,v),v},subscribeSafeAllGlobal:L,subscribeSafeGlobal:k,then:b,thenSafe:m,thenSafeAll:E,thenablefy:N}),clearSelection=()=>{window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty()};const[It,jt,Gt]=(()=>{let t;const s=Nt(null),hideDashboardContextmenu=()=>{s.$=null};return[function DashboardContextmenu(){const d=wt(0),f=wt(0),resizer=s=>{const v=s.width,G=s.height;let P=d.$,q=f.$;P=t.clientX,q=t.clientY,P+v>window.innerWidth&&(P-=v),q+G>window.innerHeight&&(q-=G),P<0&&(P=0),q<0&&(q=0),d.$=P,f.$=q};st(s)((([t,s])=>{Qe("div",{class:["position-absolute","top-0","bottom-0","start-0","end-0"],"style--z-index":"1"},[D("tapstart-prevent-stop-self",hideDashboardContextmenu)])(Ve((()=>{Tt(window,"resize",hideDashboardContextmenu),clearSelection(),Qe("div",{class:["position-fixed","animated zoomIn","dropdown-menu dropdown-menu-dark show"],style:"--animate-duration: 0.125s","style--left":Xe([d],(t=>t[0]+"px")),"style--top":Xe([f],(t=>t[0]+"px"))},[K(resizer),D("contextmenu-prevent-stop",[]),D("click-prevent-stop",hideDashboardContextmenu)])(Ve((()=>{t(s)})))})))}))},(d,f)=>v=>be(v.node,"contextmenu-prevent-stop"+(f?"-self":""),(f=>{t=f,s.$=[d,v]})),t=>s=>{for(const d of t)d?Qe("li")(Qe("button",{type:"button",class:"dropdown-item"},[D("click",(()=>{d.click(s)}))])(Fe(d.title))):Qe("li")(Qe("hr",{class:"dropdown-divider"})())}]})(),noop=()=>{},Pt=Math.random,{round:Xt,ceil:qt,floor:Bt,max:Yt,min:Zt}=Math,random=()=>Pt()||random(),randomTo=(t,s=t)=>Xt(random()*(s-t)+t),Jt=parseFloat,random_string=()=>randomTo(1e16,9e16).toString(36);var a=t=>{t.stopPropagation(),t.cancelable&&t.preventDefault()},n=t=>{var s=0,d=0;if("touches"in t){var f=t.touches[0];f&&(s=f.clientX,d=f.clientY)}else s=t.clientX,d=t.clientY;return[s,d]},i=(t,s)=>d=>{var f=d.node,v={ctx:d,isDown:!1,isMove:!1,dx:0,dy:0,ox:0,oy:0},G=[be(f,"tapstart-capture",((t,s)=>{var d=t.detail.event;s.isDown=!0,s.isMove=!1,s.ox=s.oy=0,[s.dx,s.dy]=n(d)}),v),be(document,"tapmove-capture",((d,f)=>{var v=d.detail.event;if(f.isMove){var[G,P]=n(v),q=G-f.dx,Y=P-f.dy;f.ox+=q,f.oy+=Y,a(v),t({type:"move",event:v,detail:s,delta:{x:q,y:Y},offset:{x:f.ox,y:f.oy}},f.ctx),f.dx=G,f.dy=P}else f.isDown&&(f.isDown=!1,f.isMove=!0,a(v),t({type:"start",event:v,detail:s,delta:{x:0,y:0},offset:{x:0,y:0}},f.ctx))}),v),be(document,"tapend-capture",((d,f)=>{if(f.isMove){var v=d.detail.event;f.isDown=f.isMove=!1,a(v),t({type:"end",event:v,detail:s,delta:{x:0,y:0},offset:{x:f.ox,y:f.oy}},f.ctx)}else f.isDown&&(f.isDown=!1)}),v)];return()=>{for(var t=G.length;t-- >0;)G[t]()}},r=(t,s,d)=>{var f=1;s<0&&(s=-s),t<0&&(f=-1,t=-t);var v=(t+=s)%s;t-=v+s;var G=f>0?v>=s/2:v>s/2;return G&&(t+=s),d&&(t+=s*d*f,v&&f>0!==(d<0&&!G||d>0&&G)||(t-=(d>0?s:-s)*f)),t&&t*f};const Kt=Nt(50),Qt=Nt({W:2,H:2});L([Ct,Ot,Kt],(([t,s,d])=>{const f=t/d,v=r(f,6)||r(f,4)||r(f,3)||2,G=s/(t/v),P=r(G,6)||r(G,4)||r(G,3)||2,q=Qt.$,Y=100/v,J=100/P;q.W===Y&&q.H===J||(q.W=Y,q.H=J,Qt.next(q))}));const Vt=Nt(null),eo=Nt(null);let to=1;const oo={},no={},visibleAllWindows=()=>{for(const t in no)no[t].$=!1},collapseAllWindows=()=>{for(const t in no)no[t].$=!0},title_btn=(t,s,d)=>{Qe("button",{type:"button",class:["btn btn-sm btn-"+s,"p-0 ms-2 lh-1 rounded-pill","d-inline-flex justify-content-center align-items-center"],"style--width":"1.625em","style--height":"1.625em"},[D("click",d)])(Qe("i",{role:"img","aria-label":t,class:[`bi-${t}`],style:"margin-bottom:-0.0625em;"})())},resize_div=(t,s)=>{Qe("div",{style:`position:absolute;z-index:1;cursor:${t}-resize;${s}`,"data-resize":t})()},io=Nt(""),setSize=(t,s)=>100/Jt(t)*s;function DesktopWindow({component:t,componentProps:s,title:d,top:f,left:v,right:G,bottom:P}={}){const q=this,Y=q.pub;Y.component=t;const J=Y.id="w"+random_string(),te=randomTo(30,50),oe=randomTo(30,50);null==f&&(f=randomTo(0,100-oe)),null==v&&(v=randomTo(0,100-te)),null==G&&(G=randomTo(0,100-te-v)),null==P&&(P=randomTo(0,100-oe-f));const setTop=t=>f=r(Yt(t,0),Qt.$.H),setLeft=t=>v=r(Zt(t,100-Qt.$.W),Qt.$.W),setRight=t=>G=r(Zt(t,100-Qt.$.W),Qt.$.W),setBottom=t=>P=r(Zt(t,100-Qt.$.H),Qt.$.H);setTop(f),setLeft(v),setRight(G),setBottom(P);const ie=Y.$title=wt("");xt(d,(t=>{ie.$=""+(t||J)}));const re=wt(""),se=wt(!1),ae=Y.$isFullscreen=wt(!1);kt(ae,((t,[s,d])=>{s.$=t?"Восстановить":"Развернуть",d.$=!0,setTimeout((()=>{d.$=!1}),250)}),[re,se]);const le=oo[J]=wt(-1);de((()=>{delete oo[J]}));const ve=Y.$isHovered=wt(!0),me=Y.$isFocused=wt(!0);kt(ve,((t,[s])=>{t!==(Vt.$===s)&&(Vt.$=t?s:null)}),[q]),kt(me,((t,[s,d])=>{t!==(eo.$===s)&&(eo.$=t?(((t,s)=>{if(to>4e9){to=1;for(const t in oo)oo[t].$=++to;t.$=++to}else to!==t.$&&(t.$=++to);Vt.$=eo.$=s})(d,s),s):null)}),[q,le]),kt(Vt,((t,[s,d])=>{d.$=t===s}),[q,ve]),kt(eo,((t,[s,d])=>{d.$=t===s}),[q,me]);const unhover=()=>{ve.$=!1},unfocus=()=>{me.$=!1},be=no[J]=Y.$isCollapsed=wt(!1);de((()=>{delete no[J]}));const xe=wt(!1);kt(be,(t=>{t?(unhover(),unfocus(),setTimeout((()=>{xe.$=!0}),250)):xe.$=!1}));const windowClose=()=>{Lt(this)},toggleFullscreen=()=>{ae.$=!ae.$},toggleCollapsed=()=>{be.$=!be.$};Qe("div",{id:J,class:Xe([be,xe],(t=>["card","position-absolute","bg-dark text-white","animated",t[1]&&"d-none",t[0]?"zoomOut":"zoomIn"])),style:Xe([se,Qt,ae],(t=>["--animate-duration:0.25s",{top:(t[2]?0:f)+"%",left:(t[2]?0:v)+"%",right:(t[2]?0:G)+"%",bottom:(t[2]?0:P)+"%",minWidth:t[1].W+"%",minHeight:t[1].H+"%"},t[0]&&"transition: all 0.25s"])),"style--zIndex":le},[D("inhover",(()=>{ve.$=!0})),D("infocus",(()=>{me.$=!0})),D("unhover",unhover),D("unfocus",unfocus),i(((t,s)=>{const[d,f,v,G,P,q]=t.detail;if("start"!==t.type||f.$||(d[0]=((t,s)=>t.getAttribute("data-"+s))(t.event.target,"resize")),d[0]){const f=d[0],J=s.node;let te,oe,ie,re,se;if("start"===t.type?(te=getComputedStyle(J),Y="move"===f?f:f+"-resize",io.$=Y):te=J.style,"move"!==f&&"n"!==f[0]||(oe=Jt(te.top)+t.delta.y),"move"!==f&&"w"!==f&&"w"!==f[1]||(ie=Jt(te.left)+t.delta.x),"move"!==f&&"e"!==f&&"e"!==f[1]||(re=Jt(te.right)-t.delta.x),"move"!==f&&"s"!==f[0]||(se=Jt(te.bottom)-t.delta.y),te=J.style,"end"===t.type){d[0]=null,io.$="";const t=getComputedStyle(J.parentElement);"move"!==f&&"n"!==f[0]||(te.top=v(setSize(t.height,oe))+"%"),"move"!==f&&"w"!==f&&"w"!==f[1]||(te.left=G(setSize(t.width,ie))+"%"),"move"!==f&&"e"!==f&&"e"!==f[1]||(te.right=P(setSize(t.width,re))+"%"),"move"!==f&&"s"!==f[0]||(te.bottom=q(setSize(t.height,se))+"%")}else clearSelection(),"move"!==f&&"n"!==f[0]||(te.top=oe+"px"),"move"!==f&&"w"!==f&&"w"!==f[1]||(te.left=ie+"px"),"move"!==f&&"e"!==f&&"e"!==f[1]||(te.right=re+"px"),"move"!==f&&"s"!==f[0]||(te.bottom=se+"px")}var Y}),[[null],ae,setTop,setLeft,setRight,setBottom])])(Qe("div",{class:Xe([me],(t=>["card-header","d-flex align-items-center","p-1 overflow-hidden user-select-none",t[0]?"bg-primary":"bg-secondary"])),style:"z-index:1","style--opacity":Xe([ve],(t=>t[0]?1:.875))},[jt(Gt([{title:"Свернуть",click:toggleCollapsed},{title:re,click:toggleFullscreen},,{title:"Закрыть",click:windowClose}]))])(Qe("div",{class:["flex-fill","text-truncate","px-1"],style:"margin-bottom:-0.0625em","data-resize":"move"},[D("dblclick",toggleFullscreen)])(Fe(ie)),Qe("div",{class:"text-nowrap"})($e((title_btn("dash-lg","dark",toggleCollapsed),title_btn("plus-lg","dark",toggleFullscreen),title_btn("x-lg","danger",windowClose))))),Qe("div",{class:["card-body","position-relative"],"style--z-index":"1"})(Qe("div",{style:"z-index:1;position:absolute;top:2px;bottom:2px;left:2px;right:2px;"})(Ve((()=>{Y.component?Je(Y.component,{...s||{}})([]):$e("empty")}))),Qe("div",{class:["position-absolute","top-0","start-0","w-100","h-100"],"style--display":Xe([me],(t=>t[0]?"none":"block")),"style--backgroundColor":"rgba(0,0,0,0.125)","style--z-index":"1"},[D("contextmenu-prevent-stop",noop)])()),st(Xe([ae],(t=>!t[0])))((()=>{resize_div("n","top:-0.25em;left:0;width:100%;height:0.5em;"),resize_div("s","bottom:-0.25em;left:0;width:100%;height:0.5em;"),resize_div("w","top:0;left:-0.25em;width:0.5em;height:100%;"),resize_div("e","top:0;right:-0.25em;width:0.5em;height:100%;"),resize_div("nw","top:-0.375em;left:-0.375em;width:0.75em;height:0.75em;"),resize_div("ne","top:-0.375em;right:-0.375em;width:0.75em;height:0.75em;"),resize_div("sw","bottom:-0.375em;left:-0.375em;width:0.75em;height:0.75em;"),resize_div("se","bottom:-0.375em;right:-0.375em;width:0.75em;height:0.75em;")})))}function DashboardTopbarSettings(){Qe("div")($e("DashboardTopbarSettings"))}function DashboardTopbar(){Qe("div",{class:["position-absolute","w-100","top-0","left-0"],"style--z-index":"1","style--height":"2em","style--backgroundColor":"rgba(0,0,0,0.75)"},[jt(Gt([{title:"Настройки панели",click:t=>{pe(t.root.pub.DashboardDesktop,(()=>{Je(DesktopWindow,{title:"Настройки панели",component:DashboardTopbarSettings})([])}),[])}},,{title:"Показать все окна",click:visibleAllWindows},{title:"Свернуть все окна",click:collapseAllWindows}]))])()}function DashboardDesktopSettings(){Qe("div")(Ie("qweqwe"),$e("DashboardDesktopSettings"))}function Shortcut({name:t,size:s=4.8,inline:d=!1}){const f=this.pub.id="sc"+random_string();Qe("div",{style:Xe([s,d],(t=>["width:"+(t[1]?"100%":2.5*t[0]+"em"),`margin:${t[0]/5}em`]))})(Qe("div",{id:f,class:Xe([d],(t=>["d-flex align-items-center user-select-none",t[0]?"flex-row":"flex-column"])),title:Xe([t],(t=>t[0]||f))})(Qe("div",{style:Xe([s],(t=>[`width:${t[0]}em;height:${t[0]}em;`])),"style--background":"#ad3"})(),Qe("div",{class:Xe([d],(t=>["position-relative flex-fill",!t[0]&&"w-100 text-center"])),"style--minHeight":Xe([s],(t=>t[0]+"em"))})(Qe("div",{class:Xe([d],(t=>[t[0]&&"position-absolute top-0 start-0 end-0 bottom-0",t[0]&&"d-flex align-items-center"])),style:Xe([s,d],(t=>[`${t[1]?"padding:0 ":"padding-top:"}${t[0]/5}em;`]))})(Qe("small",{class:Xe([d],(t=>["text-break",t[0]&&"text-truncate"]))})(Fe(Xe([t],(t=>t[0]||f+" 12345".repeat(randomTo(1,10))))))))))}const ro=Nt(""),changeWallpapper=()=>{ro.$=(()=>{const t=[];for(let s,d=20;d-- >0;)s=[99*random(),99*random(),99*random()].sort(((t,s)=>t-s)),t.push(`linear-gradient(${randomTo(-360,360)}deg, transparent ${s[0]}%, hsl(${randomTo(240,420)},100%,60%) ${s[1]}%, transparent ${s[2]}%)`);return""+t})()};function DashboardDesktop(){Qe("div",{class:["position-absolute","bottom-0","start-0","end-0"],"style--z-index":"1","style--top":"2em"})($e((this.root.pub.DashboardDesktop=ge(),"")),Qe("div",{class:["position-absolute top-0 start-0 end-0 bottom-0","d-flex flex-row flex-wrap align-content-start","overflow-auto"],"style--z-index":"1"},[jt(Gt([{title:"Создать файл",click:()=>{}},{title:"Создать папку",click:()=>{}},,{title:"Настройки",click:t=>{pe(t.root.pub.DashboardDesktop,(()=>{Je(DesktopWindow,{title:"Параметры рабочего стола",component:DashboardDesktopSettings})([])}),[])}},,{title:"Показать все окна",click:visibleAllWindows},{title:"Свернуть все окна",click:collapseAllWindows},,{title:"__Изменить фон__",click:changeWallpapper},{title:"__Создать пустое окно__",click:t=>{pe(t.root.pub.DashboardDesktop,(()=>{Je(DesktopWindow)([])}),[])}}]))])($e([...Array(randomTo(1,20))].forEach((()=>{Je(Shortcut)([])}))))),(t=>{const s="rgba(128,128,128,0.25)",d=`linear-gradient(to right, ${s} 1px,transparent 1px),linear-gradient(to bottom,${s} 1px,transparent 1px)`;Qe("div",{class:["position-absolute","bottom-0","start-0","end-0"],style:Xe([Qt,io,t],(t=>["z-index:1",{top:t[2],cursor:t[1],display:t[1]?"block":"none",backgroundImage:d,backgroundSize:`${t[0].W}% ${t[0].H}%`}]))},[D("contextmenu-prevent-stop",noop)])()})("2em")}function Dashboard(){Qe("div",{class:["position-fixed","w-100","h-100","top-0","start-0"]})(Qe("div",{style:"position:absolute;top:-20px;bottom:-20px;left:-20px;right:-20px;","style--backgroundColor":"hsl(0,80%,60%)","style--backgroundImage":ro,"style--filter":"blur(10px)"})(),Je(DashboardTopbar)([]),Je(DashboardDesktop)([]),Je(It)([]))}changeWallpapper(),console.log(zt),mt((function App(){Je(Dashboard)([])}),{target:document.body,beforeCreated:()=>{console.time("ReaseApp")},onCreated:()=>{console.timeEnd("ReaseApp")}})}();
