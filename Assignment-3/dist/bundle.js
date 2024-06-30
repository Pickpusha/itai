"use strict";(()=>{var st=Object.create;var X=Object.defineProperty;var at=Object.getOwnPropertyDescriptor;var ot=Object.getOwnPropertyNames;var ut=Object.getPrototypeOf,ct=Object.prototype.hasOwnProperty;var tt=(u,o)=>()=>(o||u((o={exports:{}}).exports,o),o.exports);var ft=(u,o,v,w)=>{if(o&&typeof o=="object"||typeof o=="function")for(let y of ot(o))!ct.call(u,y)&&y!==v&&X(u,y,{get:()=>o[y],enumerable:!(w=at(o,y))||w.enumerable});return u};var et=(u,o,v)=>(v=u!=null?st(ut(u)):{},ft(o||!u||!u.__esModule?X(v,"default",{value:u,enumerable:!0}):v,u));var nt=tt((P,V)=>{(function(u,o){typeof P=="object"&&typeof V<"u"?V.exports=o():typeof define=="function"&&define.amd?define(o):(u=typeof globalThis<"u"?globalThis:u||self).dayjs=o()})(P,function(){"use strict";var u=1e3,o=6e4,v=36e5,w="millisecond",y="second",_="minute",p="hour",f="day",g="week",l="month",C="quarter",T="year",k="date",I="Invalid Date",W=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,B=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var n=["th","st","nd","rd"],t=i%100;return"["+i+(n[(t-20)%10]||n[t]||n[0])+"]"}},U=function(i,n,t){var r=String(i);return!r||r.length>=n?i:""+Array(n+1-r.length).join(t)+i},H={s:U,z:function(i){var n=-i.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+U(r,2,"0")+":"+U(e,2,"0")},m:function i(n,t){if(n.date()<t.date())return-i(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,l),s=t-e<0,a=n.clone().add(r+(s?-1:1),l);return+(-(r+(t-e)/(s?e-a:a-e))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:l,y:T,w:g,d:f,D:k,h:p,m:_,s:y,ms:w,Q:C}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},D="en",S={};S[D]=A;var j="$isDayjsObject",N=function(i){return i instanceof Z||!(!i||!i[j])},R=function i(n,t,r){var e;if(!n)return D;if(typeof n=="string"){var s=n.toLowerCase();S[s]&&(e=s),t&&(S[s]=t,e=s);var a=n.split("-");if(!e&&a.length>1)return i(a[0])}else{var d=n.name;S[d]=n,e=d}return!r&&e&&(D=e),e||!r&&D},m=function(i,n){if(N(i))return i.clone();var t=typeof n=="object"?n:{};return t.date=i,t.args=arguments,new Z(t)},c=H;c.l=R,c.i=N,c.w=function(i,n){return m(i,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var Z=function(){function i(t){this.$L=R(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[j]=!0}var n=i.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,s=r.utc;if(e===null)return new Date(NaN);if(c.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var a=e.match(W);if(a){var d=a[2]-1||0,h=(a[7]||"0").substring(0,3);return s?new Date(Date.UTC(a[1],d,a[3]||1,a[4]||0,a[5]||0,a[6]||0,h)):new Date(a[1],d,a[3]||1,a[4]||0,a[5]||0,a[6]||0,h)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return c},n.isValid=function(){return this.$d.toString()!==I},n.isSame=function(t,r){var e=m(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return m(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<m(t)},n.$g=function(t,r,e){return c.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,s=!!c.u(r)||r,a=c.p(t),d=function(L,b){var x=c.w(e.$u?Date.UTC(e.$y,b,L):new Date(e.$y,b,L),e);return s?x:x.endOf(f)},h=function(L,b){return c.w(e.toDate()[L].apply(e.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(b)),e)},$=this.$W,M=this.$M,O=this.$D,E="set"+(this.$u?"UTC":"");switch(a){case T:return s?d(1,0):d(31,11);case l:return s?d(1,M):d(0,M+1);case g:var Y=this.$locale().weekStart||0,F=($<Y?$+7:$)-Y;return d(s?O-F:O+(6-F),M);case f:case k:return h(E+"Hours",0);case p:return h(E+"Minutes",1);case _:return h(E+"Seconds",2);case y:return h(E+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,s=c.p(t),a="set"+(this.$u?"UTC":""),d=(e={},e[f]=a+"Date",e[k]=a+"Date",e[l]=a+"Month",e[T]=a+"FullYear",e[p]=a+"Hours",e[_]=a+"Minutes",e[y]=a+"Seconds",e[w]=a+"Milliseconds",e)[s],h=s===f?this.$D+(r-this.$W):r;if(s===l||s===T){var $=this.clone().set(k,1);$.$d[d](h),$.init(),this.$d=$.set(k,Math.min(this.$D,$.daysInMonth())).$d}else d&&this.$d[d](h);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[c.p(t)]()},n.add=function(t,r){var e,s=this;t=Number(t);var a=c.p(r),d=function(M){var O=m(s);return c.w(O.date(O.date()+Math.round(M*t)),s)};if(a===l)return this.set(l,this.$M+t);if(a===T)return this.set(T,this.$y+t);if(a===f)return d(1);if(a===g)return d(7);var h=(e={},e[_]=o,e[p]=v,e[y]=u,e)[a]||1,$=this.$d.getTime()+t*h;return c.w($,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||I;var s=t||"YYYY-MM-DDTHH:mm:ssZ",a=c.z(this),d=this.$H,h=this.$m,$=this.$M,M=e.weekdays,O=e.months,E=e.meridiem,Y=function(b,x,J,z){return b&&(b[x]||b(r,s))||J[x].slice(0,z)},F=function(b){return c.s(d%12||12,b,"0")},L=E||function(b,x,J){var z=b<12?"AM":"PM";return J?z.toLowerCase():z};return s.replace(B,function(b,x){return x||function(J){switch(J){case"YY":return String(r.$y).slice(-2);case"YYYY":return c.s(r.$y,4,"0");case"M":return $+1;case"MM":return c.s($+1,2,"0");case"MMM":return Y(e.monthsShort,$,O,3);case"MMMM":return Y(O,$);case"D":return r.$D;case"DD":return c.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return Y(e.weekdaysMin,r.$W,M,2);case"ddd":return Y(e.weekdaysShort,r.$W,M,3);case"dddd":return M[r.$W];case"H":return String(d);case"HH":return c.s(d,2,"0");case"h":return F(1);case"hh":return F(2);case"a":return L(d,h,!0);case"A":return L(d,h,!1);case"m":return String(h);case"mm":return c.s(h,2,"0");case"s":return String(r.$s);case"ss":return c.s(r.$s,2,"0");case"SSS":return c.s(r.$ms,3,"0");case"Z":return a}return null}(b)||a.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var s,a=this,d=c.p(r),h=m(t),$=(h.utcOffset()-this.utcOffset())*o,M=this-h,O=function(){return c.m(a,h)};switch(d){case T:s=O()/12;break;case l:s=O();break;case C:s=O()/3;break;case g:s=(M-$)/6048e5;break;case f:s=(M-$)/864e5;break;case p:s=M/v;break;case _:s=M/o;break;case y:s=M/u;break;default:s=M}return e?s:c.a(s)},n.daysInMonth=function(){return this.endOf(l).$D},n.$locale=function(){return S[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),s=R(t,r,!0);return s&&(e.$L=s),e},n.clone=function(){return c.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},i}(),K=Z.prototype;return m.prototype=K,[["$ms",w],["$s",y],["$m",_],["$H",p],["$W",f],["$M",l],["$y",T],["$D",k]].forEach(function(i){K[i[1]]=function(n){return this.$g(n,i[0],i[1])}}),m.extend=function(i,n){return i.$i||(i(n,Z,m),i.$i=!0),m},m.locale=R,m.isDayjs=N,m.unix=function(i){return m(1e3*i)},m.en=S[D],m.Ls=S,m.p={},m})});var rt=tt((q,Q)=>{(function(u,o){typeof q=="object"&&typeof Q<"u"?Q.exports=o():typeof define=="function"&&define.amd?define(o):(u=typeof globalThis<"u"?globalThis:u||self).dayjs_plugin_relativeTime=o()})(q,function(){"use strict";return function(u,o,v){u=u||{};var w=o.prototype,y={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function _(f,g,l,C){return w.fromToBase(f,g,l,C)}v.en.relativeTime=y,w.fromToBase=function(f,g,l,C,T){for(var k,I,W,B=l.$locale().relativeTime||y,A=u.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],U=A.length,H=0;H<U;H+=1){var D=A[H];D.d&&(k=C?v(f).diff(l,D.d,!0):l.diff(f,D.d,!0));var S=(u.rounding||Math.round)(Math.abs(k));if(W=k>0,S<=D.r||!D.r){S<=1&&H>0&&(D=A[H-1]);var j=B[D.l];T&&(S=T(""+S)),I=typeof j=="string"?j.replace("%d",S):j(S,g,D.l,W);break}}if(g)return I;var N=W?B.future:B.past;return typeof N=="function"?N(I):N.replace("%s",I)},w.to=function(f,g){return _(f,g,this,!0)},w.from=function(f,g){return _(f,g,this)};var p=function(f){return f.$u?v.utc():v()};w.toNow=function(f){return this.to(p(this),f)},w.fromNow=function(f){return this.from(p(this),f)}}})});var G=et(nt()),it=et(rt());G.default.extend(it.default);async function dt(){let u="i.nguen@innopolis.university",o="https://fwd.innopolis.university/api/hw2",v=new URLSearchParams({email:u}),y=await(await fetch(`${o}?${v}`)).text(),p=await(await fetch(`https://fwd.innopolis.university/api/comic?id=${y}`)).json();document.getElementById("comic-title").textContent=p.safe_title;let f=document.getElementById("comic-img");f.src=p.img,f.alt=p.alt;let g=new Date(Number(p.year),Number(p.month)-1,Number(p.day));document.getElementById("comic-date").textContent=g.toLocaleDateString(),document.getElementById("comic-alt").textContent=p.alt;let l=(0,G.default)(g).fromNow(),C=document.createElement("p");C.textContent=`Released ${l}`,document.getElementById("comic-container").appendChild(C)}dt();})();
//# sourceMappingURL=bundle.js.map
