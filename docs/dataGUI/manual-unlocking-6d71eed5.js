import{f as m}from"./index.es.min-e450be9a.js";import{d as x,r as b,f as S,c as k,a as _,n as w,o as R,p as B,e as E,_ as z}from"./index-c6acef26.js";const C=/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent),p=(g,o)=>{if(C){o.preventDefault();let a=o,t=g.getBoundingClientRect();return[a.targetTouches[0].clientX-t.left,a.targetTouches[0].clientY-t.top]}else{let a=o;return[a.offsetX,a.offsetY]}},y=g=>(B("data-v-60d25b36"),g=g(),E(),g),F={style:{position:"absolute",left:"0",top:"0",width:"100%",textAlign:"center",pointerEvents:"none"}},I=y(()=>_("div",{style:{fontSize:"14px",fontFamily:"cursive",fontStyle:"italic",lineHeight:"50px",color:"#6e7476"}}," \u8BF7\u7ED8\u5236\u624B\u52BF\u5BC6\u7801 ",-1)),L=y(()=>_("div",{style:{fontSize:"16px",color:"black"}}," z Z ... ",-1)),T=x({__name:"manual-unlocking",setup(g){let o=b(),a=(t,s,n)=>{let u=t.getInfo();t.clearRect(0,0,u.width,u.height);let h=u.width*.85,f=(u.width-h)*.5,d=h/3,l=d*.75*.5;t.config({strokeStyle:"#555",lineWidth:1});for(let e=0;e<3;e++)for(let i=0;i<3;i++){t.setRegion(e+"-"+i);let c=f+(e+.5)*d,r=u.height-(2.5-i)*d-f;t.onlyRegion(!0).fillCircle(c,r,l).onlyRegion(!1).strokeCircle(c,r,l)}t.setRegion("").onlyView(!0);for(let e=0;e<s.length;e++){let i=s[e][0],c=s[e][1],r=f+(i+.5)*d,v=u.height-(2.5-c)*d-f;t.config({fillStyle:"#abd5e3"}).fillCircle(r,v,l).config({fillStyle:"#3b9ee1"}).fillCircle(r,v,l*.3)}t.config({strokeStyle:"#3b9ee1",lineWidth:l*.1}).beginPath();for(let e=0;e<s.length;e++){let i=s[e][0],c=s[e][1],r=f+(i+.5)*d,v=u.height-(2.5-c)*d-f;t.lineTo(r,v)}n&&t.lineTo(n[0],n[1]),t.stroke().onlyView(!1)};return S(()=>{let t=new m(o.value),s=!1,n=[];a(t,n);let u=(l,e)=>{t.getRegion(l,e).then(i=>{i&&(n=[],s=!0)})},h="",f=(l,e)=>{s&&t.getRegion(l,e).then(i=>{if(i&&i!=h){h=i;let c=i.split("-");n.push([+c[0],+c[1]])}a(t,n,[l,e])})},d=()=>{s=!1,a(t,n);let l=[];for(let e=0;e<n.length;e++)l.push(n[e][1]*3+n[e][0]+1);l.length>0&&setTimeout(()=>{alert("\u89E3\u9501\u5BC6\u7801\uFF1A"+l.join("-")),a(t,[])},50)};o.value.addEventListener("touchstart",l=>{u(...p(o.value,l))},!1),o.value.addEventListener("touchmove",l=>{f(...p(o.value,l))},!1),o.value.addEventListener("touchend",d,!1),o.value.addEventListener("mousedown",l=>{u(...p(o.value,l))},!1),o.value.addEventListener("mousemove",l=>{f(...p(o.value,l))},!1),o.value.addEventListener("mouseup",d,!1)}),(t,s)=>(R(),k("div",{class:"container",ref_key:"elRef",ref:o},[_("div",F,[_("div",{style:w({backgroundImage:"url(../zxl20070701.jpg)",width:"80px",height:"80px",borderRadius:"50%",display:"inline-block",marginTop:"30px",fontSize:"0",backgroundSize:"100% auto"})},"\u5934\u50CF",4),I,L])],512))}});const M=z(T,[["__scopeId","data-v-60d25b36"]]);export{M as default};
