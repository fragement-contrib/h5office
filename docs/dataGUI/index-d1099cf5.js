var N=Object.defineProperty;var b=(h,t,o)=>t in h?N(h,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):h[t]=o;var P=(h,t,o)=>(b(h,typeof t!="symbol"?t+"":t,o),o);import{i as d}from"./index.umd.min-b64a4e47.js";import{d as C,r as F,f as H,g as k,c as q,o as B,_ as V}from"./index-c6acef26.js";const M=function(h,t,o=Math.PI*2){const e=Math.ceil(o/Math.asin(h/t)*2);return isNaN(e)||e<12?12:e};function I(h,t,o,e,n,r,s,l=0,m=Math.PI*2){let p,i;if(r==4){const u=n/1.414;p=t+u,i=e+u}else p=t+n,i=e;let a=[p,i];l!=0&&(a=d.exports.rotate(t,e,l,p,i));const _=[],f=m/r;for(let u=0;u<r;u++)_.push(t,o,e),h&&_.push(0,s,0),_.push(a[0],o,a[1]),h&&_.push(0,s,0),a=d.exports.rotate(t,e,f*(u+1),p,i),_.push(a[0],o,a[1]),h&&_.push(0,s,0);return _}function E(h,t,o,e,n,r,s,l=0,m=Math.PI*2){const p=[];let i;s==4?i=d.exports.rotate(t,e,Math.PI*.25,t-n,e):i=[t+n,e],l!=0&&(i=d.exports.rotate(t,e,l,...i));const a=m/s,_=m/(s*2);let f,u=[];for(let c=0;c<s;c++){if(f=d.exports.rotate(t,e,a,...i),h){const g=d.exports.rotate(t,e,_,...i);u=[g[0],0,g[1]]}p.push(i[0],o,i[1],...u),p.push(i[0],o+r,i[1],...u),p.push(f[0],o+r,f[1],...u),p.push(i[0],o,i[1],...u),p.push(f[0],o,f[1],...u),p.push(f[0],o+r,f[1],...u),i=f}return p}function R(h,t,o,e,n,r,s){const l=[t,o+n,e],m=Math.PI*2/r;let p;h&&l.push(0,n,0);const i=()=>{l.push(...l.slice(l.length-(h?12:6)))};for(let a=1;a<r*.5;a++){p=d.exports.rotate(t,o,m*a,t,o+n),a>1&&i();const _=d.exports.rotate(t,e,m*s,p[0],e);l.push(_[0],p[1],_[1]),h&&l.push(_[0]-t,p[1]-o,_[1]-e),a>1&&i();const f=d.exports.rotate(t,e,m*(s+1),p[0],e);l.push(f[0],p[1],f[1]),h&&l.push(f[0]-t,f[1]-o,f[1]-e)}return i(),l.push(t,o-n,e),h&&l.push(0,-n,0),l}function U(h,t){for(const o in h)t[o]=h[o];return t}function S(h,t,o,e,n,r){return(s,l,m,p)=>{if(h==e&&o==r)return[s,l,m];let i,a,_,f=s-(p?0:h),u=l-(p?0:t),c=m-(p?0:o);const g=e-h,v=n-t,L=r-o,G=Math.sqrt(g*g+L*L);a=g/G,i=L/G;const A=L*i+g*a,T=Math.sqrt(v*v+A*A);return a=v/T,i=A/T,_=[u,f],u=_[0]*a-_[1]*i,f=_[0]*i+_[1]*a,a=g/G,i=L/G,_=[f,c],f=_[0]*a-_[1]*i,c=_[0]*i+_[1]*a,[f+(p?0:h),u+(p?0:t),c+(p?0:o)]}}function w(h,t){if(h){const o=[];for(let e=0;e<t.length;e+=9){const n=[t[e+3]-t[e],t[e+4]-t[e+1],t[e+5]-t[e+2]],r=[t[e+6]-t[e],t[e+7]-t[e+1],t[e+8]-t[e+2]],s=[n[1]*r[2]-r[1]*n[2],n[2]*r[0]-n[0]*r[2],n[0]*r[1]-n[1]*r[2]];o.push(t[e],t[e+1],t[e+2],...s,t[e+3],t[e+4],t[e+5],...s,t[e+6],t[e+7],t[e+8],...s)}return o}else return t}class X{constructor(t={}){P(this,"__option");this.__option=U(t,{precision:.1,normal:!1})}splitNum(t,o){return M(this.__option.precision,t,o)}rotateLine(t,o,e,n,r,s){const l=S(t,o,e,n,r,s);return(m,p,i)=>l(m,p,i,this.__option.normal)}prismHorizontal(t,o,e,n,r,s,l,m){return I(this.__option.normal,t,o,e,n,r,s,l,m)}prismVertical(t,o,e,n,r,s,l,m){return E(this.__option.normal,t,o,e,n,r,s,l,m)}sphereFragment(t,o,e,n,r,s){return R(this.__option.normal,t,o,e,n,r,s)}pie(t,o,e,n,r,s,l){const m=M(this.__option.precision,n,l),p=d.exports.rotate(t,e,s,t+n,e),i=d.exports.rotate(t,e,s+l,t+n,e);return[{name:"bottom",points:I(this.__option.normal,t,o,e,n,m,r>0?-1:1,s,l),length:3*m,method:"TRIANGLES"},{name:"top",points:I(this.__option.normal,t,o+r,e,n,m,r>0?1:-1,s,l),length:3*m,method:"TRIANGLES"},{name:"side",points:E(this.__option.normal,t,o,e,n,r,m,s,l),length:6*m,method:"TRIANGLES"},{name:"begin",points:w(this.__option.normal,[t,o,e,t,o+r,e,p[0],o,p[1],p[0],o+r,p[1],p[0],o,p[1],t,o+r,e]),length:6,method:"TRIANGLES"},{name:"end",points:w(this.__option.normal,[t,o,e,i[0],o,i[1],t,o+r,e,i[0],o+r,i[1],t,o+r,e,i[0],o,i[1]]),length:6,method:"TRIANGLES"}]}cylinder(t,o,e,n,r,s,l){const m=M(this.__option.precision,n);return arguments.length==5?this.prism(t,o,e,n,r,m):this.prism(t,o,e,n,r,s,l,m)}prism(t,o,e,n,r,s,l,m){let p,i=null;arguments.length==6?(p=r,m=s):(p=(o>s?-1:1)*Math.sqrt((r-t)*(r-t)+(s-o)*(s-o)+(l-e)*(l-e)),i=S(t,o,e,r,s,l));const a=[{name:"bottom",points:[],length:0,method:"TRIANGLES"},{name:"top",points:[],length:0,method:"TRIANGLES"},{name:"side",points:[],length:0,method:"TRIANGLES"}];a[0].points.push(...I(this.__option.normal,t,o,e,n,m,p>0?-1:1)),a[1].points.push(...I(this.__option.normal,t,o+p,e,n,m,p>0?1:-1)),a[2].points.push(...E(this.__option.normal,t,o,e,n,p,m));for(let _=0;_<a.length;_++){if(i){const f=[];let u=!1;for(let c=0;c<a[_].points.length;c+=3)f.push(...i(a[_].points[c],a[_].points[c+1],a[_].points[c+2],this.__option.normal&&u)),u=!u;a[_].points=f}a[_].length=a[_].points.length/(this.__option.normal?6:3)}return a}sphere(t,o,e,n){const r=M(this.__option.precision,n),s=[{name:"surface",points:[],length:0,method:"TRIANGLES"}];for(let l=0;l<r;l++)s[0].points.push(...R(this.__option.normal,t,o,e,n,r,l));return s[0].length=s[0].points.length/(this.__option.normal?6:3),s}}const Z=`attribute vec4 a_position;\r
uniform mat4 u_matrix;\r
\r
void main()\r
{\r
    vec4 temp = u_matrix * a_position;\r
\r
    // \u628A\u539F\u751F\u7684WebGL\u4F7F\u7528\u7684\u5DE6\u624B\u5750\u6807\u7CFB\u53D8\u6210\u4E86\u53F3\u624B\u5750\u6807\u7CFB\r
    temp.z = -1.0 * temp.z;\r
\r
    // \u8868\u793A\u773C\u775B\u8DDD\u79BBvec4(0.0,0.0,1.0)\u7684\u8DDD\u79BB\r
    float dist = 4.0;\r
\r
    // \u4F7F\u7528\u6295\u5F71\u76F4\u63A5\u8BA1\u7B97\r
    // \u4E3A\u4FDD\u8BC1\u7EB9\u7406\u548C\u76F8\u5BF9\u4F4D\u7F6E\u6B63\u786E\r
    // x\u3001y\u3001z\u7684\u6539\u53D8\u6EE1\u8DB3\u7EBF\u6027\u53D8\u6362\r
    gl_Position = vec4((dist + 1.0) * temp.x, (dist + 1.0) * temp.y, dist * (dist + temp.z) + 1.0 - dist * dist, temp.w * 2.0 * (dist + temp.z));\r
}`,W=`precision mediump float;\r
\r
uniform vec4 u_color;\r
\r
void main()\r
{\r
    gl_FragColor = u_color;\r
}`,O=C({__name:"index",setup(h){let t=F(),o=!1;return H(()=>{let e=new X,n=d.exports.getWebGLContext(t.value),r=new d.exports.Shader(n).compile(Z,W).use(),s=new d.exports.Buffer(n).use();n.enable(n.DEPTH_TEST);let l=e.sphere(-.7,0,0,.36),m=e.sphere(.7,0,0,.36),p=e.sphere(0,.7,0,.5),i=e.cylinder(-.7,0,0,.16,0,.7,0),a=e.cylinder(.7,0,0,.16,0,.7,0),_=new d.exports.Matrix4,f=n.getUniformLocation(r.program,"u_matrix"),u=n.getAttribLocation(r.program,"a_position"),c=n.getUniformLocation(r.program,"u_color"),g=function(L){for(let G=0;G<L.length;G++)s.write(new Float32Array(L[G].points)).divide(u,3,3,0),n.drawArrays(n[L[G].method],0,L[G].length)};function v(){n.uniformMatrix4fv(f,!1,_.rotate(.05,-1,.2,0,1,.2,0).value()),n.uniform4f(c,1,.2,.2,1),g(p),n.uniform4f(c,.6,.6,.6,1),g(l),g(m),n.uniform4f(c,.2,.3,.1,.4),g(i),g(a)}(function L(){v(),o||requestAnimationFrame(L)})()}),k(()=>{o=!0}),(e,n)=>(B(),q("div",{class:"container",ref_key:"elRef",ref:t},null,512))}});const Q=V(O,[["__scopeId","data-v-45511e0a"]]);export{Q as default};
