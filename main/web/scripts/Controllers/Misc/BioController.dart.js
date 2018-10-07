{}(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
var y=function(){function t(){};return typeof t.name=='string'}()
function setFunctionNamesIfNecessary(a){if(y)return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.builtin$cls=a.name
a.prototype.constructor=a
a.prototype["$is"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function mixin(a,b){copyProperties(b.prototype,a.prototype)}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.Hu(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.uY"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.uY"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.uY(this,a,b,true,[],d).prototype
return t}:tearOffGetter(a,b,d,e)}var w=0
function installTearOff(a,b,c,d,e,f,g,h,i){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q=q+w
var p=h[0]
r.$stubName=p
var o=tearOff(t,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function setOrUpdateInterceptorsByTag(a){var t=u.interceptorsByTag
if(!t){u.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=u.leafTags
if(!t){u.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=u.types
t.push.apply(t,a)}function updateHolder(a,b){copyProperties(b,a)
return a}function initializeDeferredHunk(a){w=u.types.length
a(inherit,mixin,lazy,makeConstList,convertToFastObject,installTearOff,setFunctionNamesIfNecessary,updateHolder,updateTypes,setOrUpdateInterceptorsByTag,setOrUpdateLeafTags,u,v,$)}function getGlobalFromName(a){for(var t=0;t<v.length;t++){if(v[t]==C)continue
if(v[t][a])return v[t][a]}}var C={},H={tX:function tX(a){this.a=a},
rp:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
wR:function(a,b,c,d){var t=new H.oN(a,b,c,[d])
t.eU(a,b,c,d)
return t},
dh:function(a,b,c,d){if(!!J.ar(a).$ist)return new H.fY(a,b,[c,d])
return new H.hv(a,b,[c,d])},
jo:function(){return new P.dQ("No element")},
wq:function(){return new P.dQ("Too few elements")},
jJ:function(a,b,c,d){if(c-b<=32)H.G_(a,b,c,d)
else H.FZ(a,b,c,d)},
G_:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bd(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cu(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
FZ:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.ap(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.ap(a3+a4,2)
p=q-t
o=q+t
n=J.bd(a2)
m=n.n(a2,s)
l=n.n(a2,p)
k=n.n(a2,q)
j=n.n(a2,o)
i=n.n(a2,r)
if(J.cu(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.cu(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.cu(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.cu(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cu(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.cu(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.cu(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.cu(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cu(a5.$2(j,i),0)){h=i
i=j
j=h}n.i(a2,s,m)
n.i(a2,q,k)
n.i(a2,r,i)
n.i(a2,p,n.n(a2,a3))
n.i(a2,o,n.n(a2,a4))
g=a3+1
f=a4-1
if(J.bc(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.ar(c)
if(b.S(c,0))continue
if(b.a3(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dy(c)
if(b.aG(c,0)){--f
continue}else{a=f-1
if(b.a3(c,0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.ea(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.cu(a5.$2(d,j),0))for(;!0;)if(J.cu(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.ea(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}a1=!1}b=g-1
n.i(a2,a3,n.n(a2,b))
n.i(a2,b,l)
b=f+1
n.i(a2,a4,n.n(a2,b))
n.i(a2,b,j)
H.jJ(a2,a3,g-2,a5)
H.jJ(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.bc(a5.$2(n.n(a2,g),l),0);)++g
for(;J.bc(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.bc(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.bc(a5.$2(d,j),0))for(;!0;)if(J.bc(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.ea(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.jJ(a2,g,f,a5)}else H.jJ(a2,g,f,a5)},
kO:function kO(a){this.a=a},
t:function t(){},
ep:function ep(){},
oN:function oN(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
dM:function dM(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hv:function hv(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fY:function fY(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jt:function jt(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ff:function ff(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
hV:function hV(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jT:function jT(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iz:function iz(){},
pf:function pf(){},
hR:function hR(){},
kc:function(a,b){var t=a.bt(b)
if(!u.globalState.d.cy)u.globalState.f.bB()
return t},
xW:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.ar(s).$isp)throw H.l(P.dB("Arguments to main must be a List: "+H.z(s)))
u.globalState=new H.qw(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$vL()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.q2(P.u2(null,H.eJ),0)
r=P.D
s.z=new H.u(0,null,null,null,null,null,0,[r,H.fw])
s.ch=new H.u(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.qv()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.zS,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.Gk)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a4(null,null,null,r)
p=new H.fm(0,null,!1)
o=new H.fw(s,new H.u(0,null,null,null,null,null,0,[r,H.fm]),q,u.createNewIsolate(),p,new H.dD(H.rE()),new H.dD(H.rE()),!1,!1,[],P.a4(null,null,null,null),null,null,!1,!0,P.a4(null,null,null,null))
q.h(0,0)
o.dc(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fC(a,{func:1,args:[,]}))o.bt(new H.rF(t,a))
else if(H.fC(a,{func:1,args:[,,]}))o.bt(new H.rG(t,a))
else o.bt(a)
u.globalState.f.bB()},
Gk:function(a){var t=P.hs(["command","print","msg",a])
return new H.dx(!0,P.i0(null,P.D)).az(t)},
zU:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.zV()
return},
zV:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.l(new P.V("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.l(new P.V('Cannot extract URI from "'+t+'"'))},
zS:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eH(!0,[]).aZ(b.data)
s=J.bd(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eH(!0,[]).aZ(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eH(!0,[]).aZ(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.D
j=P.a4(null,null,null,k)
i=new H.fm(0,null,!1)
h=new H.fw(s,new H.u(0,null,null,null,null,null,0,[k,H.fm]),j,u.createNewIsolate(),i,new H.dD(H.rE()),new H.dD(H.rE()),!1,!1,[],P.a4(null,null,null,null),null,null,!1,!0,P.a4(null,null,null,null))
j.h(0,0)
h.dc(0,i)
u.globalState.f.a.aN(0,new H.eJ(h,new H.mj(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bB()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fG(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bB()
break
case"close":u.globalState.ch.ag(0,$.$get$vM().n(0,a))
a.terminate()
u.globalState.f.bB()
break
case"log":H.zR(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hs(["command","print","msg",t])
k=new H.dx(!0,P.i0(null,P.D)).az(k)
s.toString
self.postMessage(k)}else P.fD(s.n(t,"msg"))
break
case"error":throw H.l(s.n(t,"msg"))}},
zR:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hs(["command","log","msg",a])
r=new H.dx(!0,P.i0(null,P.D)).az(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.cm(q)
t=H.cl(q)
s=P.ll(t)
throw H.l(s)}},
zT:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.wE=$.wE+("_"+s)
$.wF=$.wF+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fG(f,["spawned",new H.fx(s,r),q,t.r])
r=new H.mk(a,b,c,d,t)
if(e===!0){t.dT(q,q)
u.globalState.f.a.aN(0,new H.eJ(t,r,"start isolate"))}else r.$0()},
G5:function(a,b){var t=new H.p6(!0,!1,null)
t.eV(a,b)
return t},
GD:function(a){return new H.eH(!0,[]).aZ(new H.dx(!1,P.i0(null,P.D)).az(a))},
rF:function rF(a,b){this.a=a
this.b=b},
rG:function rG(a,b){this.a=a
this.b=b},
qw:function qw(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx},
fw:function fw(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx},
qr:function qr(a,b){this.a=a
this.b=b},
q2:function q2(a,b){this.a=a
this.b=b},
q3:function q3(a){this.a=a},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
qv:function qv(){},
mj:function mj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mk:function mk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pQ:function pQ(){},
fx:function fx(b,a){this.b=b
this.a=a},
qy:function qy(a,b){this.a=a
this.b=b},
i3:function i3(b,c,a){this.b=b
this.c=c
this.a=a},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
p6:function p6(a,b,c){this.a=a
this.b=b
this.c=c},
p7:function p7(a,b){this.a=a
this.b=b},
p8:function p8(a,b){this.a=a
this.b=b},
dD:function dD(a){this.a=a},
dx:function dx(a,b){this.a=a
this.b=b},
eH:function eH(a,b){this.a=a
this.b=b},
yW:function(){throw H.l(new P.V("Cannot modify unmodifiable Map"))},
Ha:function(a){return u.types[a]},
xR:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.ar(a).$isaF},
z:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cJ(a)
if(typeof t!=="string")throw H.l(H.bv(a))
return t},
Fw:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.nT(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
er:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
uo:function(a,b){if(b==null)throw H.l(new P.bJ(a,null,null))
return b.$1(a)},
fk:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.uo(a,c)
if(3>=t.length)return H.w(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.uo(a,c)}if(b<2||b>36)throw H.l(P.bE(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a4(q,o)|32)>r)return H.uo(a,c)}return parseInt(a,b)},
wC:function(a,b){return b.$1(a)},
wG:function(a,b){var t,s
H.xJ(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.wC(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.rP(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.wC(a,b)}return t},
nO:function(a){var t,s,r,q,p,o,n,m
t=J.ar(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.ar(a).$iseC){p=C.v(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a4(q,0)===36)q=C.c.ai(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.rz(H.kg(a),0,null),u.mangledGlobalNames)},
nN:function(a){return"Instance of '"+H.nO(a)+"'"},
Fb:function(){if(!!self.location)return self.location.href
return},
wB:function(a){var t,s,r,q,p
t=J.c_(a)
if(typeof t!=="number")return t.ex()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Fg:function(a){var t,s,r,q
t=H.a([],[P.D])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bT)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.l(H.bv(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.aY(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.l(H.bv(q))}return H.wB(t)},
wI:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bT)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.l(H.bv(q))
if(q<0)throw H.l(H.bv(q))
if(q>65535)return H.Fg(a)}return H.wB(a)},
Fh:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.ex()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hG:function(a){var t
if(typeof a!=="number")return H.a8(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.aY(t,10))>>>0,56320|t&1023)}}throw H.l(P.bE(a,0,1114111,null,null))},
cU:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
wD:function(a){return a.b?H.cU(a).getUTCFullYear()+0:H.cU(a).getFullYear()+0},
nM:function(a){return a.b?H.cU(a).getUTCMonth()+1:H.cU(a).getMonth()+1},
nL:function(a){return a.b?H.cU(a).getUTCDate()+0:H.cU(a).getDate()+0},
Fc:function(a){return a.b?H.cU(a).getUTCHours()+0:H.cU(a).getHours()+0},
Fe:function(a){return a.b?H.cU(a).getUTCMinutes()+0:H.cU(a).getMinutes()+0},
Ff:function(a){return a.b?H.cU(a).getUTCSeconds()+0:H.cU(a).getSeconds()+0},
Fd:function(a){return a.b?H.cU(a).getUTCMilliseconds()+0:H.cU(a).getMilliseconds()+0},
up:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.l(H.bv(a))
return a[b]},
wH:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.l(H.bv(a))
a[b]=c},
a8:function(a){throw H.l(H.bv(a))},
w:function(a,b){if(a==null)J.c_(a)
throw H.l(H.c4(a,b))},
c4:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cY(!0,b,"index",null)
t=J.c_(a)
if(!(b<0)){if(typeof t!=="number")return H.a8(t)
s=b>=t}else s=!0
if(s)return P.by(b,a,"index",null,t)
return P.jG(b,"index",null)},
H1:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.cY(!0,a,"start",null)
if(a<0||a>c)return new P.ev(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.cY(!0,b,"end",null)
if(b<a||b>c)return new P.ev(a,c,!0,b,"end","Invalid value")}return new P.cY(!0,b,"end",null)},
bv:function(a){return new P.cY(!0,a,null,null)},
ke:function(a){if(typeof a!=="number")throw H.l(H.bv(a))
return a},
uX:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.l(H.bv(a))
return a},
xJ:function(a){if(typeof a!=="string")throw H.l(H.bv(a))
return a},
l:function(a){var t
if(a==null)a=new P.fi()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.xX})
t.name=""}else t.toString=H.xX
return t},
xX:function(){return J.cJ(this.dartException)},
bb:function(a){throw H.l(a)},
bT:function(a){throw H.l(new P.bM(a))},
dS:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.pc(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
pd:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
x1:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
tZ:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.mD(a,s,t?null:b.receiver)},
cm:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.rH(a)
if(a==null)return
if(a instanceof H.h5)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.aY(r,16)&8191)===10)switch(q){case 438:return t.$1(H.tZ(H.z(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.z(s)+" (Error "+q+")"
return t.$1(new H.jz(p,null))}}if(a instanceof TypeError){o=$.$get$wW()
n=$.$get$wX()
m=$.$get$wY()
l=$.$get$wZ()
k=$.$get$x2()
j=$.$get$x3()
i=$.$get$x0()
$.$get$x_()
h=$.$get$x5()
g=$.$get$x4()
f=o.aJ(s)
if(f!=null)return t.$1(H.tZ(s,f))
else{f=n.aJ(s)
if(f!=null){f.method="call"
return t.$1(H.tZ(s,f))}else{f=m.aJ(s)
if(f==null){f=l.aJ(s)
if(f==null){f=k.aJ(s)
if(f==null){f=j.aJ(s)
if(f==null){f=i.aJ(s)
if(f==null){f=l.aJ(s)
if(f==null){f=h.aJ(s)
if(f==null){f=g.aJ(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jz(s,f==null?null:f.method))}}return t.$1(new H.pe(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.jN()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cY(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.jN()
return a},
cl:function(a){var t
if(a instanceof H.h5)return a.b
if(a==null)return new H.k8(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.k8(a,null)},
Hk:function(a){if(a==null||typeof a!='object')return J.dA(a)
else return H.er(a)},
xN:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
Hf:function(a,b,c,d,e,f,g){switch(c){case 0:return H.kc(b,new H.ru(a))
case 1:return H.kc(b,new H.rv(a,d))
case 2:return H.kc(b,new H.rw(a,d,e))
case 3:return H.kc(b,new H.rx(a,d,e,f))
case 4:return H.kc(b,new H.ry(a,d,e,f,g))}throw H.l(P.ll("Unsupported number of arguments for wrapped closure"))},
dl:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.Hf)
a.$identity=t
return t},
yS:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.ar(c).$isp){t.$reflectionInfo=c
r=H.Fw(t).r}else r=c
q=d?Object.create(new H.om().constructor.prototype):Object.create(new H.fN(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dE
$.dE=J.e9(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.vl(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.Ha,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.vi:H.rT
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.l("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.vl(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
yP:function(a,b,c,d){var t=H.rT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
vl:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.yR(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.yP(s,!q,t,b)
if(s===0){q=$.dE
$.dE=J.e9(q,1)
o="self"+H.z(q)
q="return function(){var "+o+" = this."
p=$.fO
if(p==null){p=H.kG("self")
$.fO=p}return new Function(q+H.z(p)+";return "+o+"."+H.z(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dE
$.dE=J.e9(q,1)
n+=H.z(q)
q="return function("+n+"){return this."
p=$.fO
if(p==null){p=H.kG("self")
$.fO=p}return new Function(q+H.z(p)+"."+H.z(t)+"("+n+");}")()},
yQ:function(a,b,c,d){var t,s
t=H.rT
s=H.vi
switch(b?-1:a){case 0:throw H.l(new H.nZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
yR:function(a,b){var t,s,r,q,p,o,n,m
t=H.yO()
s=$.vh
if(s==null){s=H.kG("receiver")
$.vh=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.yQ(q,!o,r,b)
if(q===1){s="return function(){return this."+H.z(t)+"."+H.z(r)+"(this."+H.z(s)+");"
o=$.dE
$.dE=J.e9(o,1)
return new Function(s+H.z(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.z(t)+"."+H.z(r)+"(this."+H.z(s)+", "+m+");"
o=$.dE
$.dE=J.e9(o,1)
return new Function(s+H.z(o)+"}")()},
uY:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.ar(c).$isp){c.fixed$length=Array
t=c}else t=c
return H.yS(a,b,t,!!d,e,f)},
rT:function(a){return a.a},
vi:function(a){return a.c},
yO:function(){var t=$.fO
if(t==null){t=H.kG("self")
$.fO=t}return t},
kG:function(a){var t,s,r,q,p
t=new H.fN("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
Hn:function(a,b){var t=J.bd(b)
throw H.l(H.vk(H.nO(a),t.L(b,3,t.gm(b))))},
eM:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.ar(a)[b]
else t=!0
if(t)return a
H.Hn(a,b)},
xM:function(a){var t=J.ar(a)
return"$S" in t?t.$S():null},
fC:function(a,b){var t
if(a==null)return!1
t=H.xM(a)
return t==null?!1:H.v0(t,b)},
vk:function(a,b){return new H.kL("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
Hu:function(a){throw H.l(new P.l4(a))},
rE:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
xO:function(a){return u.getIsolateTag(a)},
bZ:function(a){return new H.dT(a,null)},
a:function(a,b){a.$ti=b
return a},
kg:function(a){if(a==null)return
return a.$ti},
xQ:function(a,b){return H.v3(a["$as"+H.z(b)],H.kg(a))},
as:function(a,b,c){var t=H.xQ(a,b)
return t==null?null:t[c]},
O:function(a,b){var t=H.kg(a)
return t==null?null:t[b]},
dz:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.rz(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.z(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dz(t,b)
return H.GH(a,b)}return"unknown-reified-type"},
GH:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dz(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dz(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dz(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.H9(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dz(l[j],b)+(" "+H.z(j))}q+="}"}return"("+q+") => "+t},
rz:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.cb("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.O=p+", "
o=a[s]
if(o!=null)q=!1
p=t.O+=H.dz(o,c)}return q?"":"<"+t.C(0)+">"},
kh:function(a){var t,s
if(a instanceof H.eU){t=H.xM(a)
if(t!=null)return H.dz(t,null)}s=J.ar(a).constructor.builtin$cls
if(a==null)return s
return s+H.rz(a.$ti,0,null)},
v3:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dW:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kg(a)
s=J.ar(a)
if(s[b]==null)return!1
return H.xH(H.v3(s[d],t),c)},
Ht:function(a,b,c,d){if(a==null)return a
if(H.dW(a,b,c,d))return a
throw H.l(H.vk(H.nO(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.rz(c,0,null),u.mangledGlobalNames)))},
xH:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.cX(a[s],b[s]))return!1
return!0},
eL:function(a,b,c){return a.apply(b,H.xQ(b,c))},
GX:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ac"||b.builtin$cls==="d6"
if(b==null)return!0
t=H.kg(a)
a=J.ar(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.v0(r.apply(a,null),b)}return H.cX(s,b)},
cX:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="d6")return!0
if('func' in b)return H.v0(a,b)
if('func' in a)return b.builtin$cls==="HA"||b.builtin$cls==="ac"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dz(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.xH(H.v3(o,t),r)},
xG:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.cX(t,p)||H.cX(p,t)))return!1}return!0},
GO:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.cX(p,o)||H.cX(o,p)))return!1}return!0},
v0:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.cX(t,s)||H.cX(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.xG(r,q,!1))return!1
if(!H.xG(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.cX(i,h)||H.cX(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.cX(i,h)||H.cX(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.cX(i,h)||H.cX(h,i)))return!1}}return H.GO(a.named,b.named)},
HL:function(a){var t=$.uZ
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
HK:function(a){return H.er(a)},
HJ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Hg:function(a){var t,s,r,q,p,o
t=$.uZ.$1(a)
s=$.rk[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rt[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.xF.$2(a,t)
if(t!=null){s=$.rk[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rt[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.v1(r)
$.rk[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.rt[t]=r
return r}if(p==="-"){o=H.v1(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.xS(a,r)
if(p==="*")throw H.l(new P.eB(t))
if(u.leafTags[t]===true){o=H.v1(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.xS(a,r)},
xS:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.rA(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
v1:function(a){return J.rA(a,!1,null,!!a.$isaF)},
Hi:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.rA(t,!1,null,!!t.$isaF)
else return J.rA(t,c,null,null)},
Hd:function(){if(!0===$.v_)return
$.v_=!0
H.He()},
He:function(){var t,s,r,q,p,o,n,m
$.rk=Object.create(null)
$.rt=Object.create(null)
H.Hc()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.xT.$1(p)
if(o!=null){n=H.Hi(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
Hc:function(){var t,s,r,q,p,o,n
t=C.N()
t=H.fB(C.O,H.fB(C.P,H.fB(C.u,H.fB(C.u,H.fB(C.R,H.fB(C.Q,H.fB(C.S(C.v),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.uZ=new H.rq(p)
$.xF=new H.rr(o)
$.xT=new H.rs(n)},
fB:function(a,b){return a(b)||b},
tU:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.l(new P.bJ("Illegal RegExp pattern ("+String(q)+")",a,null))},
Hr:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
v2:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.ho){q=b.gdC()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.bb(H.bv(b))
throw H.l("String.replaceAll(Pattern) UNIMPLEMENTED")}},
GM:function(a){return a},
Hs:function(a,b,c,d){var t,s,r,q,p,o
t=J.ar(b)
if(!t.$isuk)throw H.l(P.dC(b,"pattern","is not a Pattern"))
for(t=t.aQ(b,a),t=new H.jX(t.a,t.b,t.c,null),s=0,r="";t.G();){q=t.d
p=q.b
o=p.index
r=r+H.z(H.xw().$1(C.c.L(a,s,o)))+H.z(c.$1(q))
s=o+p[0].length}t=r+H.z(H.xw().$1(C.c.ai(a,s)))
return t.charCodeAt(0)==0?t:t},
kR:function kR(){},
kS:function kS(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nT:function nT(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
pc:function pc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jz:function jz(a,b){this.a=a
this.b=b},
mD:function mD(a,b,c){this.a=a
this.b=b
this.c=c},
pe:function pe(a){this.a=a},
h5:function h5(a,b){this.a=a
this.b=b},
rH:function rH(a){this.a=a},
k8:function k8(a,b){this.a=a
this.b=b},
ru:function ru(a){this.a=a},
rv:function rv(a,b){this.a=a
this.b=b},
rw:function rw(a,b,c){this.a=a
this.b=b
this.c=c},
rx:function rx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ry:function ry(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eU:function eU(){},
oS:function oS(){},
om:function om(){},
fN:function fN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kL:function kL(a){this.a=a},
nZ:function nZ(a){this.a=a},
dT:function dT(a,b){this.a=a
this.b=b},
u:function u(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
mC:function mC(a){this.a=a},
mB:function mB(a){this.a=a},
mN:function mN(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mO:function mO(a,$ti){this.a=a
this.$ti=$ti},
mP:function mP(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rq:function rq(a){this.a=a},
rr:function rr(a){this.a=a},
rs:function rs(a){this.a=a},
ho:function ho(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k6:function k6(a,b){this.a=a
this.b=b},
pL:function pL(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
qO:function qO(a,b,c){this.a=a
this.b=b
this.c=c},
qP:function qP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cz:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.l(P.dB("Invalid length "+H.z(a)))
return a},
xs:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dB("Invalid view offsetInBytes "+H.z(b)))},
xv:function(a){return a},
F9:function(a){return new Int8Array(H.xv(a))},
cN:function(a,b,c){H.xs(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
GC:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aG()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.l(H.H1(a,b,c))
return b},
fg:function fg(){},
eq:function eq(){},
nd:function nd(){},
jw:function jw(){},
hz:function hz(){},
hB:function hB(){},
hD:function hD(){},
hA:function hA(){},
hC:function hC(){},
hE:function hE(){},
ne:function ne(){},
nf:function nf(){},
ng:function ng(){},
nh:function nh(){},
ni:function ni(){},
nj:function nj(){},
nk:function nk(){},
jx:function jx(){},
fh:function fh(){},
H9:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
Hm:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ar:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jr.prototype
return J.jq.prototype}if(typeof a=="string")return J.en.prototype
if(a==null)return J.mz.prototype
if(typeof a=="boolean")return J.my.prototype
if(a.constructor==Array)return J.em.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eo.prototype
return a}if(a instanceof P.ac)return a
return J.rn(a)},
rA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
rn:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.v_==null){H.Hd()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.l(new P.eB("Return interceptor for "+H.z(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$tY()]
if(p!=null)return p
p=H.Hg(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.F
if(s===Object.prototype)return C.F
if(typeof q=="function"){Object.defineProperty(q,$.$get$tY(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
wr:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
EQ:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a4(a,b)
if(s!==32&&s!==13&&!J.wr(s))break;++b}return b},
tT:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.Z(a,t)
if(s!==32&&s!==13&&!J.wr(s))break}return b},
bd:function(a){if(typeof a=="string")return J.en.prototype
if(a==null)return a
if(a.constructor==Array)return J.em.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eo.prototype
return a}if(a instanceof P.ac)return a
return J.rn(a)},
dm:function(a){if(a==null)return a
if(a.constructor==Array)return J.em.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eo.prototype
return a}if(a instanceof P.ac)return a
return J.rn(a)},
dy:function(a){if(typeof a=="number")return J.fd.prototype
if(a==null)return a
if(!(a instanceof P.ac))return J.eC.prototype
return a},
kf:function(a){if(typeof a=="number")return J.fd.prototype
if(typeof a=="string")return J.en.prototype
if(a==null)return a
if(!(a instanceof P.ac))return J.eC.prototype
return a},
dc:function(a){if(typeof a=="string")return J.en.prototype
if(a==null)return a
if(!(a instanceof P.ac))return J.eC.prototype
return a},
b4:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.eo.prototype
return a}if(a instanceof P.ac)return a
return J.rn(a)},
e9:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kf(a).W(a,b)},
bc:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ar(a).S(a,b)},
v4:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dy(a).av(a,b)},
cu:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dy(a).aG(a,b)},
ea:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dy(a).a3(a,b)},
rI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kf(a).au(a,b)},
fE:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.xR(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bd(a).n(a,b)},
ki:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.xR(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dm(a).i(a,b,c)},
xY:function(a,b){return J.dm(a).h(a,b)},
xZ:function(a,b,c,d){return J.b4(a).fP(a,b,c,d)},
y_:function(a,b){return J.dc(a).aQ(a,b)},
dX:function(a,b){return J.b4(a).fR(a,b)},
v5:function(a){return J.b4(a).fT(a)},
rJ:function(a,b,c){return J.dy(a).ab(a,b,c)},
y0:function(a,b){return J.kf(a).aB(a,b)},
y1:function(a,b){return J.b4(a).aC(a,b)},
y2:function(a,b){return J.bd(a).ac(a,b)},
kj:function(a,b,c){return J.bd(a).dX(a,b,c)},
y3:function(a,b){return J.b4(a).h1(a,b)},
v6:function(a,b){return J.dm(a).U(a,b)},
y4:function(a,b,c,d){return J.dm(a).bY(a,b,c,d)},
kk:function(a){return J.dy(a).al(a)},
v7:function(a,b){return J.dm(a).a8(a,b)},
rK:function(a){return J.b4(a).gdV(a)},
y5:function(a){return J.b4(a).gbs(a)},
fF:function(a){return J.b4(a).gas(a)},
y6:function(a){return J.b4(a).gcJ(a)},
dA:function(a){return J.ar(a).ga5(a)},
rL:function(a){return J.bd(a).gY(a)},
v8:function(a){return J.b4(a).gX(a)},
cQ:function(a){return J.dm(a).gT(a)},
y7:function(a){return J.b4(a).gaD(a)},
c_:function(a){return J.bd(a).gm(a)},
y8:function(a){return J.b4(a).gJ(a)},
y9:function(a){return J.b4(a).gee(a)},
ya:function(a){return J.b4(a).ghT(a)},
yb:function(a){return J.b4(a).ghU(a)},
v9:function(a){return J.ar(a).ga9(a)},
rM:function(a){return J.b4(a).gaM(a)},
yc:function(a){return J.b4(a).gb7(a)},
yd:function(a){return J.b4(a).bk(a)},
ye:function(a,b){return J.b4(a).at(a,b)},
yf:function(a,b){return J.b4(a).bF(a,b)},
yg:function(a,b){return J.bd(a).bf(a,b)},
va:function(a,b,c,d,e){return J.b4(a).e9(a,b,c,d,e)},
vb:function(a,b){return J.dm(a).ay(a,b)},
yh:function(a,b,c){return J.dc(a).ed(a,b,c)},
vc:function(a,b){return J.b4(a).hD(a,b)},
yi:function(a,b,c,d){return J.b4(a).hQ(a,b,c,d)},
kl:function(a,b,c){return J.dc(a).cV(a,b,c)},
rN:function(a,b,c){return J.dc(a).hS(a,b,c)},
fG:function(a,b){return J.b4(a).b9(a,b)},
vd:function(a,b){return J.b4(a).sbs(a,b)},
yj:function(a,b){return J.dm(a).d3(a,b)},
dY:function(a,b){return J.dc(a).eJ(a,b)},
yk:function(a,b){return J.dc(a).ai(a,b)},
rO:function(a){return J.dy(a).l(a)},
yl:function(a){return J.dm(a).aq(a)},
ym:function(a,b){return J.dy(a).bC(a,b)},
cJ:function(a){return J.ar(a).C(a)},
yn:function(a){return J.dc(a).hY(a)},
rP:function(a){return J.dc(a).bj(a)},
yo:function(a){return J.dc(a).er(a)},
h:function h(){},
my:function my(){},
mz:function mz(){},
hp:function hp(){},
nG:function nG(){},
eC:function eC(){},
eo:function eo(){},
em:function em($ti){this.$ti=$ti},
tW:function tW($ti){this.$ti=$ti},
i8:function i8(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fd:function fd(){},
jr:function jr(){},
jq:function jq(){},
en:function en(){}},P={
Gb:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.GP()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dl(new P.pN(t),1)).observe(s,{childList:true})
return new P.pM(t,s,r)}else if(self.setImmediate!=null)return P.GQ()
return P.GR()},
Gc:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dl(new P.pO(a),0))},
Gd:function(a){++u.globalState.f.b
self.setImmediate(H.dl(new P.pP(a),0))},
Ge:function(a){P.uI(C.o,a)},
bt:function(a,b){P.xq(null,a)
return b.ghg()},
ct:function(a,b){P.xq(a,b)},
bs:function(a,b){J.y1(b,a)},
br:function(a,b){b.cF(H.cm(a),H.cl(a))},
xq:function(a,b){var t,s,r,q
t=new P.r2(b)
s=new P.r3(b)
r=J.ar(a)
if(!!r.$isbj)a.cv(t,s)
else if(!!r.$iscE)a.c3(t,s)
else{q=new P.bj(0,$.an,null,[null])
q.a=4
q.c=a
q.cv(t,null)}},
bu:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.an.toString
return new P.rd(t)},
xx:function(a,b){if(H.fC(a,{func:1,args:[P.d6,P.d6]})){b.toString
return a}else{b.toString
return a}},
zz:function(a,b){var t=new P.bj(0,$.an,null,[b])
P.wV(C.o,new P.rf(a,t))
return t},
tl:function(a,b,c){var t
if(a==null)a=new P.fi()
t=$.an
if(t!==C.e)t.toString
t=new P.bj(0,t,null,[c])
t.de(a,b)
return t},
zA:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bj(0,$.an,null,[P.p])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.lY(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.bT)(a),++l){q=a[l]
p=t.b
q.c3(new P.lX(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bj(0,$.an,null,[null])
m.dd(C.W)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.cm(j)
n=H.cl(j)
if(t.b===0||!1)return P.tl(o,n,null)
else{t.c=o
t.d=n}}return s},
bp:function(a){return new P.ka(new P.bj(0,$.an,null,[a]),[a])},
xu:function(a,b,c){$.an.toString
a.ao(b,c)},
Gh:function(a,b){var t=new P.bj(0,$.an,null,[b])
t.a=4
t.c=a
return t},
xi:function(a,b){var t,s,r
b.a=1
try{a.c3(new P.qc(b),new P.qd(b))}catch(r){t=H.cm(r)
s=H.cl(r)
P.xU(new P.qe(b,t,s))}},
qb:function(a,b){var t,s,r
for(;a.gfu();)a=a.c
t=a.gcn()
s=b.c
if(t){b.c=null
r=b.bO(s)
b.a=a.a
b.c=a.c
P.fv(b,r)}else{b.a=2
b.c=a
a.dG(s)}},
fv:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fF(p)
n=p.gaL()
s.toString
P.kd(null,null,s,o,n)}return}for(;b.gcq()!=null;b=m){m=b.a
b.a=null
P.fv(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.ge3()||b.ge2()){k=b.gfN()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fF(p)
n=p.gaL()
s.toString
P.kd(null,null,s,o,n)
return}j=$.an
if(j==null?k!=null:j!==k)$.an=k
else j=null
if(b.ge2())new P.qj(t,r,q,b).$0()
else if(s){if(b.ge3())new P.qi(r,b,l).$0()}else if(b.ghn())new P.qh(t,r,b).$0()
if(j!=null)$.an=j
s=r.b
if(!!J.ar(s).$iscE){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bO(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.qb(s,i)
return}}i=b.b
b=i.bN()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
GJ:function(){var t,s
for(;t=$.fz,t!=null;){$.i5=null
s=t.b
$.fz=s
if(s==null)$.i4=null
t.a.$0()}},
GL:function(){$.uV=!0
try{P.GJ()}finally{$.i5=null
$.uV=!1
if($.fz!=null)$.$get$uR().$1(P.xI())}},
xE:function(a){var t=new P.jY(a,null)
if($.fz==null){$.i4=t
$.fz=t
if(!$.uV)$.$get$uR().$1(P.xI())}else{$.i4.b=t
$.i4=t}},
GK:function(a){var t,s,r
t=$.fz
if(t==null){P.xE(a)
$.i5=$.i4
return}s=new P.jY(a,null)
r=$.i5
if(r==null){s.b=t
$.i5=s
$.fz=s}else{s.b=r.b
r.b=s
$.i5=s
if(s.b==null)$.i4=s}},
xU:function(a){var t=$.an
if(C.e===t){P.fA(null,null,C.e,a)
return}t.toString
P.fA(null,null,t,t.cD(a,!0))},
HF:function(a,b){return new P.qN(null,a,!1,[b])},
xB:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.cm(o)
s=H.cl(o)
$.an.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fF(r)
q=n
p=r.gaL()
c.$2(q,p)}}},
GB:function(a,b,c,d){var t=a.bV(0)
if(!!J.ar(t).$iscE&&t!==$.$get$hf())t.c6(new P.r5(b,c,d))
else b.ao(c,d)},
xr:function(a,b){return new P.r4(a,b)},
uU:function(a,b,c){var t=a.bV(0)
if(!!J.ar(t).$iscE&&t!==$.$get$hf())t.c6(new P.r6(b,c))
else b.aI(c)},
Gg:function(a,b,c,d,e,f,g){var t,s
t=$.an
s=e?1:0
s=new P.hZ(a,null,null,null,null,t,s,null,null,[f,g])
s.eY(b,c,d,e,g)
s.f0(a,b,c,d,e,f,g)
return s},
GA:function(a,b,c){$.an.toString
a.bH(b,c)},
wV:function(a,b){var t=$.an
if(t===C.e){t.toString
return P.uI(a,b)}return P.uI(a,t.cD(b,!0))},
uI:function(a,b){var t=C.a.ap(a.a,1000)
return H.G5(t<0?0:t,b)},
kd:function(a,b,c,d,e){var t={}
t.a=d
P.GK(new P.rc(t,e))},
xy:function(a,b,c,d){var t,s
s=$.an
if(s===c)return d.$0()
$.an=c
t=s
try{s=d.$0()
return s}finally{$.an=t}},
xA:function(a,b,c,d,e){var t,s
s=$.an
if(s===c)return d.$1(e)
$.an=c
t=s
try{s=d.$1(e)
return s}finally{$.an=t}},
xz:function(a,b,c,d,e,f){var t,s
s=$.an
if(s===c)return d.$2(e,f)
$.an=c
t=s
try{s=d.$2(e,f)
return s}finally{$.an=t}},
fA:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cD(d,!(!t||!1))
P.xE(d)},
pN:function pN(a){this.a=a},
pM:function pM(a,b,c){this.a=a
this.b=b
this.c=c},
pO:function pO(a){this.a=a},
pP:function pP(a){this.a=a},
r2:function r2(a){this.a=a},
r3:function r3(a){this.a=a},
rd:function rd(a){this.a=a},
cE:function cE(){},
rf:function rf(a,b){this.a=a
this.b=b},
lY:function lY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lX:function lX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eV:function eV(){},
jZ:function jZ(){},
dV:function dV(a,$ti){this.a=a
this.$ti=$ti},
ka:function ka(a,$ti){this.a=a
this.$ti=$ti},
k2:function k2(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bj:function bj(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
q8:function q8(a,b){this.a=a
this.b=b},
qg:function qg(a,b){this.a=a
this.b=b},
qc:function qc(a){this.a=a},
qd:function qd(a){this.a=a},
qe:function qe(a,b,c){this.a=a
this.b=b
this.c=c},
qa:function qa(a,b){this.a=a
this.b=b},
qf:function qf(a,b){this.a=a
this.b=b},
q9:function q9(a,b,c){this.a=a
this.b=b
this.c=c},
qj:function qj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qk:function qk(a){this.a=a},
qi:function qi(a,b,c){this.a=a
this.b=b
this.c=c},
qh:function qh(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a,b){this.a=a
this.b=b},
dj:function dj(){},
ot:function ot(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
or:function or(a,b){this.a=a
this.b=b},
os:function os(a,b){this.a=a
this.b=b},
ou:function ou(a){this.a=a},
oz:function oz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ox:function ox(a,b){this.a=a
this.b=b},
oy:function oy(){},
oA:function oA(a){this.a=a},
oD:function oD(a){this.a=a},
oE:function oE(a,b){this.a=a
this.b=b},
oB:function oB(a,b){this.a=a
this.b=b},
oC:function oC(a){this.a=a},
oF:function oF(a,b){this.a=a
this.b=b},
oG:function oG(a,b){this.a=a
this.b=b},
ov:function ov(a,b,c){this.a=a
this.b=b
this.c=c},
ow:function ow(a){this.a=a},
oq:function oq(){},
dk:function dk(){},
pS:function pS(a,b,c){this.a=a
this.b=b
this.c=c},
pR:function pR(a){this.a=a},
k0:function k0(){},
pX:function pX(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pZ:function pZ(b,c,a){this.b=b
this.c=c
this.a=a},
pY:function pY(){},
qz:function qz(){},
qA:function qA(a,b){this.a=a
this.b=b},
qM:function qM(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
qN:function qN(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
r5:function r5(a,b,c){this.a=a
this.b=b
this.c=c},
r4:function r4(a,b){this.a=a
this.b=b},
r6:function r6(a,b){this.a=a
this.b=b},
hY:function hY(){},
hZ:function hZ(x,y,a,b,c,d,e,f,r,$ti){var _=this
_.x=x
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qx:function qx(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eP:function eP(a,b){this.a=a
this.b=b},
r1:function r1(){},
rc:function rc(a,b){this.a=a
this.b=b},
qD:function qD(){},
qE:function qE(a,b){this.a=a
this.b=b},
qF:function qF(a,b){this.a=a
this.b=b},
qG:function qG(a,b){this.a=a
this.b=b},
Gi:function(a,b){var t=a[b]
return t===a?null:t},
uT:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
uS:function(){var t=Object.create(null)
P.uT(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
ws:function(a,b,c){return H.xN(a,new H.u(0,null,null,null,null,null,0,[b,c]))},
bY:function(a,b){return new H.u(0,null,null,null,null,null,0,[a,b])},
mQ:function(){return new H.u(0,null,null,null,null,null,0,[null,null])},
hs:function(a){return H.xN(a,new H.u(0,null,null,null,null,null,0,[null,null]))},
i0:function(a,b){return new P.k5(0,null,null,null,null,null,0,[a,b])},
Gj:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
x:function(a,b,c,d,e){return new P.qm(0,null,null,null,null,[d,e])},
tQ:function(a,b,c){var t,s
if(P.uW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$i6()
s.push(a)
try{P.GI(a,t)}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=P.wQ(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jn:function(a,b,c){var t,s,r
if(P.uW(a))return b+"..."+c
t=new P.cb(b)
s=$.$get$i6()
s.push(a)
try{r=t
r.O=P.wQ(r.gO(),a,", ")}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=t
s.O=s.gO()+c
s=t.gO()
return s.charCodeAt(0)==0?s:s},
uW:function(a){var t,s
for(t=0;s=$.$get$i6(),t<s.length;++t)if(a===s[t])return!0
return!1},
GI:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.cQ(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.G())return
q=H.z(t.gN())
b.push(q)
s+=q.length+2;++r}if(!t.G()){if(r<=5)return
if(0>=b.length)return H.w(b,-1)
p=b.pop()
if(0>=b.length)return H.w(b,-1)
o=b.pop()}else{n=t.gN();++r
if(!t.G()){if(r<=4){b.push(H.z(n))
return}p=H.z(n)
if(0>=b.length)return H.w(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gN();++r
for(;t.G();n=m,m=l){l=t.gN();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.w(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.z(n)
p=H.z(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.w(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
a4:function(a,b,c,d){return new P.k4(0,null,null,null,null,null,0,[d])},
u1:function(a,b){var t,s
t=P.a4(null,null,null,b)
for(s=J.cQ(a);s.G();)t.h(0,s.gN())
return t},
wx:function(a){var t,s,r
t={}
if(P.uW(a))return"{...}"
s=new P.cb("")
try{$.$get$i6().push(a)
r=s
r.O=r.gO()+"{"
t.a=!0
a.a8(0,new P.n4(t,s))
t=s
t.O=t.gO()+"}"}finally{t=$.$get$i6()
if(0>=t.length)return H.w(t,-1)
t.pop()}t=s.gO()
return t.charCodeAt(0)==0?t:t},
u2:function(a,b){var t=new P.mR(null,0,0,0,[b])
t.eT(a,b)
return t},
qm:function qm(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qp:function qp(a){this.a=a},
qn:function qn(a,$ti){this.a=a
this.$ti=$ti},
qo:function qo(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
k5:function k5(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
k4:function k4(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qt:function qt(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qq:function qq(){},
fc:function fc(){},
hn:function hn(){},
js:function js(){},
hF:function hF(){},
b1:function b1(){},
qU:function qU(){},
n3:function n3(){},
hS:function hS(a,$ti){this.a=a
this.$ti=$ti},
n4:function n4(a,b){this.a=a
this.b=b},
mR:function mR(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qu:function qu(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
oa:function oa(){},
o9:function o9(){},
vf:function(a,b,c,d,e,f){if(C.d.bG(f,4)!==0)throw H.l(new P.bJ("Invalid base64 padding, padded length must be multiple of four, is "+H.z(f),a,c))
if(d+e!==f)throw H.l(new P.bJ("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.l(new P.bJ("Invalid base64 padding, more than two '=' characters",a,b))},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
fR:function fR(){},
fT:function fT(){},
lf:function lf(){},
po:function po(a){this.a=a},
pp:function pp(a){this.a=a},
qW:function qW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qY:function qY(a){this.a=a},
qX:function qX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G3:function(a,b,c){var t,s,r,q
if(b<0)throw H.l(P.bE(b,0,J.c_(a),null,null))
t=c==null
if(!t&&c<b)throw H.l(P.bE(c,b,J.c_(a),null,null))
s=J.cQ(a)
for(r=0;r<b;++r)if(!s.G())throw H.l(P.bE(b,0,r,null,null))
q=[]
if(t)for(;s.G();)q.push(s.gN())
else for(r=b;r<c;++r){if(!s.G())throw H.l(P.bE(c,b,r,null,null))
q.push(s.gN())}return H.wI(q)},
wQ:function(a,b,c){var t=J.cQ(b)
if(!t.G())return a
if(c.length===0){do a+=H.z(t.gN())
while(t.G())}else{a+=H.z(t.gN())
for(;t.G();)a=a+c+H.z(t.gN())}return a},
yV:function(a,b){return J.y0(a,b)},
yY:function(a,b){var t=new P.dG(a,b)
t.d9(a,b)
return t},
yZ:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.z(t)
if(t>=10)return s+"00"+H.z(t)
return s+"000"+H.z(t)},
z_:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ig:function(a){if(a>=10)return""+a
return"0"+a},
vw:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cJ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.zh(a)},
zh:function(a){var t=J.ar(a)
if(!!t.$iseU)return t.C(a)
return H.nN(a)},
dB:function(a){return new P.cY(!1,null,null,a)},
dC:function(a,b,c){return new P.cY(!0,a,b,c)},
yp:function(a){return new P.cY(!1,null,a,"Must not be null")},
wM:function(a){return new P.ev(null,null,!1,null,null,a)},
jG:function(a,b,c){return new P.ev(null,null,!0,a,b,"Value not in range")},
bE:function(a,b,c,d,e){return new P.ev(b,c,!0,a,d,"Invalid value")},
di:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.a8(a)
if(!(0>a)){if(typeof c!=="number")return H.a8(c)
t=a>c}else t=!0
if(t)throw H.l(P.bE(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.a8(b)
if(!(a>b)){if(typeof c!=="number")return H.a8(c)
t=b>c}else t=!0
if(t)throw H.l(P.bE(b,a,c,"end",f))
return b}return c},
by:function(a,b,c,d,e){var t=e!=null?e:J.c_(b)
return new P.mg(b,t,!0,a,c,"Index out of range")},
ll:function(a){return new P.q7(a)},
d4:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.cQ(a);s.G();)t.push(s.gN())
if(b)return t
t.fixed$length=Array
return t},
ER:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
j:function(a,b){var t=P.d4(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fD:function(a){H.Hm(H.z(a))},
d8:function(a,b,c){return new H.ho(a,H.tU(a,!1,!0,!1),null,null)},
oL:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.di(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a3()
s=c<t}else s=!0
return H.wI(s?C.b.c9(a,b,c):a)}if(!!J.ar(a).$isfh)return H.Fh(a,b,P.di(b,c,a.length,null,null,null))
return P.G3(a,b,c)},
x7:function(){var t=H.Fb()
if(t!=null)return P.x8(t,0,null)
throw H.l(new P.V("'Uri.base' is not supported"))},
x8:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a4(a,b+4)^58)*3|C.c.a4(a,b)^100|C.c.a4(a,b+1)^97|C.c.a4(a,b+2)^116|C.c.a4(a,b+3)^97)>>>0
if(s===0)return P.x6(b>0||c<c?C.c.L(a,b,c):a,5,null).geu()
else if(s===32)return P.x6(C.c.L(a,t,c),0,null).geu()}r=H.a(new Array(8),[P.D])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.xC(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.av()
if(p>=b)if(P.xC(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.W()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a3()
if(typeof l!=="number")return H.a8(l)
if(k<l)l=k
if(typeof m!=="number")return m.a3()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.a3()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.a3()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.c.aH(a,"..",m)))h=l>m+2&&C.c.aH(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aH(a,"file",b)){if(o<=b){if(!C.c.aH(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.c.L(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.c.aF(a,m,l,"/");++l;++k;++c}else{a=C.c.L(a,b,m)+"/"+C.c.L(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aH(a,"http",b)){if(q&&n+3===m&&C.c.aH(a,"80",n+1))if(b===0&&!0){a=C.c.aF(a,n,m,"")
m-=3
l-=3
k-=3
c-=3}else{a=C.c.L(a,b,n)+C.c.L(a,m,c)
p-=b
o-=b
n-=b
t=3+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="http"}else i=null
else if(p===t&&C.c.aH(a,"https",b)){if(q&&n+4===m&&C.c.aH(a,"443",n+1))if(b===0&&!0){a=C.c.aF(a,n,m,"")
m-=4
l-=4
k-=4
c-=3}else{a=C.c.L(a,b,n)+C.c.L(a,m,c)
p-=b
o-=b
n-=b
t=4+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="https"}else i=null
j=!0}}}else i=null
if(j){if(b>0||c<a.length){a=C.c.L(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.qL(a,p,o,n,m,l,k,i,null)}return P.Gm(a,b,c,p,o,n,m,l,k,i)},
xa:function(a,b){return C.b.hd(a.split("&"),P.mQ(),new P.pk(b))},
G6:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.ph(a)
s=H.cz(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.Z(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.fk(C.c.L(a,p,q),null,null)
if(J.cu(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.w(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.fk(C.c.L(a,p,c),null,null)
if(J.cu(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.w(r,o)
r[o]=m
return r},
x9:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.pi(a)
s=new P.pj(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.c.Z(a,q)
if(m===58){if(q===b){++q
if(C.c.Z(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.bc(C.b.gbc(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.G6(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.aw()
h=j[1]
if(typeof h!=="number")return H.a8(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.aw()
i=j[3]
if(typeof i!=="number")return H.a8(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.ar(e).S(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.w(g,f)
g[f]=0
i=f+1
if(i>=16)return H.w(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.d2()
i=C.d.aY(e,8)
if(f<0||f>=16)return H.w(g,f)
g[f]=i
i=f+1
if(i>=16)return H.w(g,i)
g[i]=e&255
f+=2}}return g},
Gm:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.Gu(a,b,d)
else{if(d===b)P.i2(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.Gv(a,t,e-1):""
r=P.Gq(a,e,f,!1)
if(typeof f!=="number")return f.W()
q=f+1
if(typeof g!=="number")return H.a8(g)
p=q<g?P.Gs(H.fk(C.c.L(a,q,g),null,new P.re(a,f)),j):null}else{s=""
r=null
p=null}o=P.Gr(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a3()
n=h<i?P.Gt(a,h+1,i,null):null
return new P.kb(j,s,r,p,o,n,i<c?P.Gp(a,i+1,c):null,null,null,null,null,null)},
xk:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
i2:function(a,b,c){throw H.l(new P.bJ(c,a,b))},
Gs:function(a,b){if(a!=null&&J.bc(a,P.xk(b)))return
return a},
Gq:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.Z(a,b)===91){if(typeof c!=="number")return c.an()
t=c-1
if(C.c.Z(a,t)!==93)P.i2(a,b,"Missing end `]` to match `[` in host")
P.x9(a,b+1,t)
return C.c.L(a,b,c).toLowerCase()}if(typeof c!=="number")return H.a8(c)
s=b
for(;s<c;++s)if(C.c.Z(a,s)===58){P.x9(a,b,c)
return"["+a+"]"}return P.Gx(a,b,c)},
Gx:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.a8(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.Z(a,t)
if(p===37){o=P.xp(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.cb("")
m=C.c.L(a,s,t)
l=r.O+=!q?m.toLowerCase():m
if(n){o=C.c.L(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.O=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.w(C.B,n)
n=(C.B[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.cb("")
if(s<t){r.O+=C.c.L(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.w(C.k,n)
n=(C.k[n]&1<<(p&15))!==0}else n=!1
if(n)P.i2(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.Z(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.cb("")
m=C.c.L(a,s,t)
r.O+=!q?m.toLowerCase():m
r.O+=P.xl(p)
t+=k
s=t}}}}if(r==null)return C.c.L(a,b,c)
if(s<c){m=C.c.L(a,s,c)
r.O+=!q?m.toLowerCase():m}n=r.O
return n.charCodeAt(0)==0?n:n},
Gu:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.xn(C.c.a4(a,b)))P.i2(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a4(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.w(C.m,q)
q=(C.m[q]&1<<(r&15))!==0}else q=!1
if(!q)P.i2(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.L(a,b,c)
return P.Gn(s?a.toLowerCase():a)},
Gn:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Gv:function(a,b,c){var t=P.fy(a,b,c,C.Y,!1)
return t==null?C.c.L(a,b,c):t},
Gr:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fy(a,b,c,C.D,!1)
if(r==null)r=C.c.L(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.ah(r,"/"))r="/"+r
return P.Gw(r,e,f)},
Gw:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.ah(a,"/"))return P.Gy(a,!t||c)
return P.Gz(a)},
Gt:function(a,b,c,d){var t=P.fy(a,b,c,C.l,!1)
return t==null?C.c.L(a,b,c):t},
Gp:function(a,b,c){var t=P.fy(a,b,c,C.l,!1)
return t==null?C.c.L(a,b,c):t},
xp:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.Z(a,b+1)
r=C.c.Z(a,t)
q=H.rp(s)
p=H.rp(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.aY(o,4)
if(t>=8)return H.w(C.A,t)
t=(C.A[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hG(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.L(a,b,b+3).toUpperCase()
return},
xl:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.a4("0123456789ABCDEF",a>>>4)
t[2]=C.c.a4("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.fJ(a,6*r)&63|s
if(p>=q)return H.w(t,p)
t[p]=37
n=p+1
m=C.c.a4("0123456789ABCDEF",o>>>4)
if(n>=q)return H.w(t,n)
t[n]=m
m=p+2
n=C.c.a4("0123456789ABCDEF",o&15)
if(m>=q)return H.w(t,m)
t[m]=n
p+=3}}return P.oL(t,0,null)},
fy:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.dc(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a3()
if(typeof c!=="number")return H.a8(c)
if(!(r<c))break
c$0:{o=s.Z(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.w(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.xp(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.w(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.i2(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.Z(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.xl(o)}}if(p==null)p=new P.cb("")
p.O+=C.c.L(a,q,r)
p.O+=H.z(m)
if(typeof l!=="number")return H.a8(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a3()
if(q<c)p.O+=s.L(a,q,c)
t=p.O
return t.charCodeAt(0)==0?t:t},
xo:function(a){if(C.c.ah(a,"."))return!0
return C.c.bf(a,"/.")!==-1},
Gz:function(a){var t,s,r,q,p,o,n
if(!P.xo(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bT)(s),++p){o=s[p]
if(J.bc(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.w(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.bg(t,"/")},
Gy:function(a,b){var t,s,r,q,p,o
if(!P.xo(a))return!b?P.xm(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bT)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.bc(C.b.gbc(t),"..")){if(0>=t.length)return H.w(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.w(t,0)
s=J.rL(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.bc(C.b.gbc(t),".."))t.push("")
if(!b){if(0>=t.length)return H.w(t,0)
s=P.xm(t[0])
if(0>=t.length)return H.w(t,0)
t[0]=s}return C.b.bg(t,"/")},
xm:function(a){var t,s,r,q
t=J.bd(a)
s=t.gm(a)
if(typeof s!=="number")return s.av()
if(s>=2&&P.xn(t.Z(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.a8(s)
if(!(r<s))break
q=t.Z(a,r)
if(q===58)return C.c.L(a,0,r)+"%3A"+C.c.ai(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.w(C.m,s)
s=(C.m[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
Go:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.Z(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.l(P.dB("Invalid URL encoding"))}}return t},
qV:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.a8(c)
t=J.dc(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.Z(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.n!==d)p=!1
else p=!0
if(p)return t.L(a,b,c)
else o=new H.kO(t.L(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.Z(a,s)
if(q>127)throw H.l(P.dB("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.l(P.dB("Truncated URI"))
o.push(P.Go(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pp(!1).h_(o)},
xn:function(a){var t=a|32
return 97<=t&&t<=122},
x6:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bd(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a8(o)
if(!(r<o))break
c$0:{p=s.Z(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.l(new P.bJ("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.l(new P.bJ("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a8(o)
if(!(r<o))break
p=s.Z(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gbc(t)
if(p!==44||r!==m+7||!s.aH(a,"base64",m+1))throw H.l(new P.bJ("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.G.hA(0,a,o,s.gm(a))
else{l=P.fy(a,o,s.gm(a),C.l,!0)
if(l!=null)a=s.aF(a,o,s.gm(a),l)}return new P.pg(a,t,c)},
GF:function(){var t,s,r,q,p
t=P.ER(22,new P.r9(),!0,P.da)
s=new P.r8(t)
r=new P.ra()
q=new P.rb()
p=s.$2(0,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,".",14)
r.$3(p,":",34)
r.$3(p,"/",3)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(14,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,".",15)
r.$3(p,":",34)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(15,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,"%",225)
r.$3(p,":",34)
r.$3(p,"/",9)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(1,225)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
r.$3(p,":",34)
r.$3(p,"/",10)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(2,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
r.$3(p,"/",131)
r.$3(p,".",146)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(3,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",68)
r.$3(p,".",18)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(4,229)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
q.$3(p,"AZ",229)
r.$3(p,":",102)
r.$3(p,"@",68)
r.$3(p,"[",232)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(5,229)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
q.$3(p,"AZ",229)
r.$3(p,":",102)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(6,231)
q.$3(p,"19",7)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(7,231)
q.$3(p,"09",7)
r.$3(p,"@",68)
r.$3(p,"/",138)
r.$3(p,"?",172)
r.$3(p,"#",205)
r.$3(s.$2(8,8),"]",5)
p=s.$2(9,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",16)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(16,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",17)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(17,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",9)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(10,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",18)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(18,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,".",19)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(19,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",234)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(11,235)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
r.$3(p,"/",10)
r.$3(p,"?",172)
r.$3(p,"#",205)
p=s.$2(12,236)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
r.$3(p,"?",12)
r.$3(p,"#",205)
p=s.$2(13,237)
r.$3(p,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
r.$3(p,"?",13)
q.$3(s.$2(20,245),"az",21)
p=s.$2(21,245)
q.$3(p,"az",21)
q.$3(p,"09",21)
r.$3(p,"+-.",21)
return t},
xC:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$xD()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.w(t,d)
r=t[d]
q=C.c.a4(a,s)^96
p=J.fE(r,q>95?31:q)
if(typeof p!=="number")return p.aK()
d=p&31
o=C.d.aY(p,5)
if(o>=8)return H.w(e,o)
e[o]=s}return d},
db:function db(){},
bF:function bF(){},
dG:function dG(a,b){this.a=a
this.b=b},
U:function U(){},
dH:function dH(a){this.a=a},
lc:function lc(){},
ld:function ld(){},
ee:function ee(){},
fi:function fi(){},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ev:function ev(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mg:function mg(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a){this.a=a},
eB:function eB(a){this.a=a},
dQ:function dQ(a){this.a=a},
bM:function bM(a){this.a=a},
nt:function nt(){},
jN:function jN(){},
l4:function l4(a){this.a=a},
q7:function q7(a){this.a=a},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
lm:function lm(a,bK,$ti){this.a=a
this.bK=bK
this.$ti=$ti},
D:function D(){},
o:function o(){},
jp:function jp(){},
p:function p(){},
bm:function bm(){},
d6:function d6(){},
dn:function dn(){},
ac:function ac(){},
d5:function d5(){},
ew:function ew(){},
dP:function dP(){},
C:function C(){},
cb:function cb(O){this.O=O},
eD:function eD(){},
pk:function pk(a){this.a=a},
ph:function ph(a){this.a=a},
pi:function pi(a){this.a=a},
pj:function pj(a,b){this.a=a
this.b=b},
kb:function kb(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
re:function re(a,b){this.a=a
this.b=b},
pg:function pg(a,b,c){this.a=a
this.b=b
this.c=c},
r9:function r9(){},
r8:function r8(a){this.a=a},
ra:function ra(){},
rb:function rb(){},
qL:function qL(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pW:function pW(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
xK:function(a){var t,s,r,q,p
if(a==null)return
t=P.mQ()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.bT)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
GY:function(a,b){var t
if(a==null)return
t={}
J.v7(a,new P.rh(t))
return t},
GZ:function(a){var t,s
t=new P.bj(0,$.an,null,[null])
s=new P.dV(t,[null])
a.then(H.dl(new P.ri(s),1))["catch"](H.dl(new P.rj(s),1))
return t},
t_:function(){var t=$.vt
if(t==null){t=J.kj(window.navigator.userAgent,"Opera",0)
$.vt=t}return t},
vv:function(){var t=$.vu
if(t==null){t=P.t_()!==!0&&J.kj(window.navigator.userAgent,"WebKit",0)
$.vu=t}return t},
z0:function(){var t,s
t=$.vq
if(t!=null)return t
s=$.vr
if(s==null){s=J.kj(window.navigator.userAgent,"Firefox",0)
$.vr=s}if(s)t="-moz-"
else{s=$.vs
if(s==null){s=P.t_()!==!0&&J.kj(window.navigator.userAgent,"Trident/",0)
$.vs=s}if(s)t="-ms-"
else t=P.t_()===!0?"-o-":"-webkit-"}$.vq=t
return t},
qQ:function qQ(){},
qS:function qS(a,b){this.a=a
this.b=b},
pJ:function pJ(){},
pK:function pK(a,b){this.a=a
this.b=b},
rh:function rh(a){this.a=a},
qR:function qR(a,b){this.a=a
this.b=b},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
ri:function ri(a){this.a=a},
rj:function rj(a){this.a=a},
kV:function kV(){},
kW:function kW(a){this.a=a},
xt:function(a){var t,s,r
t=new P.bj(0,$.an,null,[null])
s=new P.ka(t,[null])
a.toString
r=W.T
W.e8(a,"success",new P.r7(a,s),!1,r)
W.e8(a,"error",s.gdW(),!1,r)
return t},
l6:function l6(){},
r7:function r7(a,b){this.a=a
this.b=b},
mf:function mf(){},
nq:function nq(){},
hJ:function hJ(){},
pa:function pa(){},
Gl:function(a){var t=new P.qB(0,0)
t.f1(a)
return t},
qs:function qs(){},
qB:function qB(a,b){this.a=a
this.b=b},
qC:function qC(){},
bS:function bS(){},
km:function km(){},
eb:function eb(){},
ln:function ln(){},
lo:function lo(){},
lp:function lp(){},
lq:function lq(){},
lr:function lr(){},
ls:function ls(){},
lt:function lt(){},
lu:function lu(){},
lv:function lv(){},
lw:function lw(){},
lx:function lx(){},
ly:function ly(){},
lz:function lz(){},
lA:function lA(){},
lB:function lB(){},
lC:function lC(){},
lQ:function lQ(){},
co:function co(){},
md:function md(){},
d3:function d3(){},
mJ:function mJ(){},
iN:function iN(){},
j6:function j6(){},
n5:function n5(){},
n6:function n6(){},
d7:function d7(){},
nn:function nn(){},
iO:function iO(){},
j7:function j7(){},
nD:function nD(){},
nI:function nI(){},
o5:function o5(){},
oK:function oK(){},
iP:function iP(){},
j8:function j8(){},
kt:function kt(a){this.a=a},
cc:function cc(){},
oO:function oO(){},
oQ:function oQ(){},
eA:function eA(){},
p_:function p_(){},
d9:function d9(){},
pb:function pb(){},
iQ:function iQ(){},
j9:function j9(){},
pn:function pn(){},
pr:function pr(){},
ps:function ps(){},
i_:function i_(){},
qH:function qH(){},
qI:function qI(){},
qJ:function qJ(){},
bh:function bh(){},
da:function da(){},
fL:function fL(){},
eQ:function eQ(){},
fM:function fM(){},
ku:function ku(a){this.a=a},
kv:function kv(a){this.a=a},
bC:function bC(){},
dZ:function dZ(){},
kT:function kT(){},
ko:function ko(){},
nV:function nV(){},
qZ:function qZ(){},
jM:function jM(){},
iR:function iR(){},
ja:function ja(){}},W={
yM:function(a){if(a!=null)return new Audio(a)
return new Audio()},
yN:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
yX:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
Gf:function(a){var t=new W.pU(a,null)
t.eZ(a)
return t},
vI:function(a,b,c){return W.vJ(a,null,null,b,null,null,null,c).b4(new W.m7())},
vJ:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e1
s=new P.bj(0,$.an,null,[t])
r=new P.dV(s,[t])
q=new XMLHttpRequest()
C.L.hC(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.HE
W.e8(q,"load",new W.m8(r,q),!1,t)
W.e8(q,"error",r.gdW(),!1,t)
q.send()
return s},
vK:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
eK:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
xj:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
e8:function(a,b,c,d,e){var t=W.GN(new W.q6(c))
t=new W.q5(0,a,b,t,!1,[e])
t.f_(a,b,c,!1,e)
return t},
GE:function(a){var t
if(!!J.ar(a).$ised)return a
t=new P.jW([],[],!1)
t.c=!0
return t.b6(a)},
GN:function(a){var t=$.an
if(t===C.e)return a
return t.fV(a,!0)},
at:function at(){},
eO:function eO(){},
kp:function kp(){},
eR:function eR(){},
cK:function cK(){},
kx:function kx(){},
h_:function h_(){},
h2:function h2(){},
kB:function kB(){},
eS:function eS(){},
kF:function kF(){},
eT:function eT(){},
ec:function ec(){},
kM:function kM(){},
kQ:function kQ(){},
ib:function ib(){},
fU:function fU(){},
kU:function kU(){},
kX:function kX(){},
kY:function kY(){},
fV:function fV(){},
fW:function fW(){},
kZ:function kZ(){},
bI:function bI(){},
eW:function eW(){},
iF:function iF(){},
pU:function pU(a,b){this.a=a
this.b=b},
jA:function jA(){},
pV:function pV(){},
id:function id(){},
l_:function l_(){},
l0:function l0(){},
l5:function l5(){},
eX:function eX(){},
ie:function ie(){},
fX:function fX(){},
ed:function ed(){},
ih:function ih(){},
ii:function ii(){},
l8:function l8(){},
ij:function ij(){},
ik:function ik(){},
iG:function iG(){},
j_:function j_(){},
il:function il(){},
im:function im(){},
k1:function k1(a,$ti){this.a=a
this.$ti=$ti},
dr:function dr(){},
le:function le(){},
fZ:function fZ(){},
lk:function lk(){},
T:function T(){},
aG:function aG(){},
lM:function lM(){},
cf:function cf(){},
f3:function f3(){},
iH:function iH(){},
j0:function j0(){},
lN:function lN(){},
lO:function lO(){},
lP:function lP(){},
lS:function lS(){},
lT:function lT(){},
lV:function lV(){},
iB:function iB(){},
cn:function cn(){},
m4:function m4(){},
f5:function f5(){},
iI:function iI(){},
j1:function j1(){},
iD:function iD(){},
e1:function e1(){},
m7:function m7(){},
m8:function m8(a,b){this.a=a
this.b=b},
hg:function hg(){},
mc:function mc(){},
hh:function hh(){},
f7:function f7(){},
mh:function mh(){},
mG:function mG(){},
hq:function hq(){},
hr:function hr(){},
mY:function mY(){},
n2:function n2(){},
hx:function hx(){},
ju:function ju(){},
n7:function n7(){},
n8:function n8(){},
hy:function hy(){},
cp:function cp(){},
jv:function jv(){},
iS:function iS(){},
jb:function jb(){},
nl:function nl(){},
nm:function nm(){},
az:function az(){},
jy:function jy(){},
iT:function iT(){},
jc:function jc(){},
np:function np(){},
nu:function nu(){},
ny:function ny(){},
nA:function nA(){},
e4:function e4(){},
nF:function nF(){},
ch:function ch(){},
jF:function jF(){},
iU:function iU(){},
jd:function jd(){},
nK:function nK(){},
jH:function jH(){},
fn:function fn(){},
jI:function jI(){},
o8:function o8(){},
ob:function ob(){},
oc:function oc(){},
od:function od(){},
cq:function cq(){},
jK:function jK(){},
h0:function h0(){},
h3:function h3(){},
og:function og(){},
hL:function hL(){},
cr:function cr(){},
jL:function jL(){},
iV:function iV(){},
je:function je(){},
fo:function fo(){},
oi:function oi(){},
cj:function cj(){},
oj:function oj(){},
ok:function ok(){},
op:function op(){},
oM:function oM(){},
ck:function ck(){},
e6:function e6(){},
oU:function oU(){},
hP:function hP(){},
cP:function cP(){},
cH:function cH(){},
p0:function p0(){},
iW:function iW(){},
jf:function jf(){},
p1:function p1(){},
h1:function h1(){},
h4:function h4(){},
p5:function p5(){},
cs:function cs(){},
jP:function jP(){},
iX:function iX(){},
jg:function jg(){},
fs:function fs(){},
jQ:function jQ(){},
p9:function p9(){},
e7:function e7(){},
pl:function pl(){},
pm:function pm(){},
pq:function pq(){},
ft:function ft(){},
jR:function jR(){},
pv:function pv(){},
jU:function jU(){},
pC:function pC(){},
eF:function eF(){},
fu:function fu(){},
pT:function pT(){},
hX:function hX(){},
iY:function iY(){},
jh:function jh(){},
k_:function k_(){},
iZ:function iZ(){},
ji:function ji(){},
q_:function q_(){},
q0:function q0(){},
k3:function k3(){},
iJ:function iJ(){},
j2:function j2(){},
ql:function ql(){},
i1:function i1(){},
iK:function iK(){},
j3:function j3(){},
qK:function qK(){},
k7:function k7(){},
iL:function iL(){},
j4:function j4(){},
k9:function k9(){},
iM:function iM(){},
j5:function j5(){},
r_:function r_(){},
r0:function r0(){},
q1:function q1(a){this.a=a},
q4:function q4(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
eI:function eI(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
q5:function q5(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
q6:function q6(a){this.a=a},
bx:function bx(){},
lR:function lR(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qT:function qT(){}},T={
tp:function(a,b,c,d){var t
H.Ht(a,"$isp",[P.D],"$asp")
t=new T.hi(a,null,d,b,null)
t.eS(a,b,c,d)
return t},
wA:function(a,b){return new T.nv(0,a,new Uint8Array(H.cz(b==null?32768:b)))},
G9:function(a){var t=new T.pF(-1,0,0,0,0,null,null,"",[])
t.eW(a)
return t},
Ga:function(a,b){var t=new T.pG(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.eX(a,b)
return t},
f6:function(a){var t=new T.m9(null,0,2147483647)
t.eR(a)
return t},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy},
dd:function dd(a){this.a=a},
hi:function hi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nv:function nv(a,b,c){this.a=a
this.b=b
this.c=c},
pF:function pF(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pG:function pG(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db},
pH:function pH(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy},
pE:function pE(a){this.a=a},
m9:function m9(a,b,c){this.a=a
this.b=b
this.c=c},
iE:function iE(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
kE:function kE(y1,y2,p,q,t,u,v,w,A,B,D,H,I,P,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.P=P
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
kH:function kH(y1,y2,p,q,t,u,v,w,A,B,D,H,I,P,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.P=P
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
l7:function l7(){},
m1:function m1(y1,y2,p,q,t,u,v,w,A,B,D,H,I,P,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.P=P
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
Fy:function(a,b,c,d,e){var t,s
t=[P.C]
s=H.a([],t)
t=new T.hK("Glitch",0.01,0.01,0.01,s,0.5,a,new H.u(0,null,null,null,null,null,0,[X.F,P.U]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.H(null,null,A.a1),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.M]),H.a([],[A.fP]),1)
t.a0(a,b,c,d,e)
return t},
hK:function hK(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
c3:function c3(a,b){this.a=a
this.b=b},
z4:function(a,b,c,d){var t,s,r,q
t=new B.dq(new P.cb(""),0,0)
t.aj(a,8)
c.toString
s=H.cN(c,0,null)
for(r=s.length,q=0;q<r;++q)t.aj(s[q],8)
return t.b5(b)},
z3:function(a,b,c,d){var t,s,r,q,p
t=H.cz(c)
s=new Uint8Array(t)
r=new B.de(null,0)
r.a=J.dX(a,b)
for(q=0;q<c;++q){p=r.a6(8)
if(q>=t)return H.w(s,q)
s[q]=p}return s},
z2:function(a,b,c,d){var t,s,r,q,p
t=new B.dq(new P.cb(""),0,0)
t.aj(a,8)
s=d.gcO()
r=C.f.al(Math.log(H.ke(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cN(c,0,null)
for(s=q.length,p=0;p<s;++p)t.aj(q[p],r)
return t.b5(b)},
z1:function(a,b,c,d){var t,s,r,q,p,o
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.al(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.de(null,0)
p.a=J.dX(a,b)
for(o=0;o<c;++o){r=p.a6(q)
if(o>=t)return H.w(s,o)
s[o]=r}return s}},S={kn:function kn(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},bG:function bG(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},ia:function ia(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},m6:function m6(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mH:function mH(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},n0:function n0(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},o7:function o7(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},fj:function fj(){},uJ:function uJ(){},uK:function uK(){},uL:function uL(){},t5:function t5(){},t8:function t8(){},rW:function rW(){},ut:function ut(){},uN:function uN(){},uO:function uO(){},kK:function kK(){},ul:function ul(){},uf:function uf(){},mM:function mM(){},t0:function t0(){},rR:function rR(){},l2:function l2(){},u0:function u0(){},l3:function l3(){},nz:function nz(){},uA:function uA(){},ux:function ux(){},uB:function uB(){},rQ:function rQ(){},lZ:function lZ(){},kI:function kI(){},rV:function rV(){},rU:function rU(){},um:function um(){},uC:function uC(){},un:function un(){},t7:function t7(){},t6:function t6(){},uz:function uz(){},uy:function uy(){},p2:function p2(){},uE:function uE(){},rY:function rY(){},rZ:function rZ(){},uM:function uM(){},hw:function hw(){},u6:function u6(){},u7:function u7(){},u8:function u8(){},u9:function u9(){},uu:function uu(){},uv:function uv(){},uw:function uw(){},u5:function u5(){},uc:function uc(){},ud:function ud(){},tm:function tm(){},tn:function tn(){},to:function to(){},ue:function ue(){},ua:function ua(){},rS:function rS(){},uG:function uG(){},uH:function uH(){},uF:function uF(){}},K={bU:function bU(a,b){this.a=a
this.b=b},mK:function mK(y1,y2,p,q,t,u,v,w,A,B,D,H,I,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},o2:function o2(y1,y2,p,q,t,u,v,w,A,B,D,H,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c}},L={
yq:function(a,b,c,d,e){var t,s,r
t=P.C
s=A.dF
r=P.D
r=new L.aD(P.x(null,null,null,t,s),P.x(null,null,null,r,s),P.x(null,null,null,t,r),P.x(null,null,null,r,t))
r.j(0,$.aL,L.e("#FF9B00"),!0)
r.j(0,$.aN,L.e("#FF9B00"),!0)
r.j(0,$.aM,L.e("#FF8700"),!0)
r.j(0,$.aW,L.e("#7F7F7F"),!0)
r.j(0,$.aV,L.e("#727272"),!0)
r.j(0,$.aP,L.e("#A3A3A3"),!0)
r.j(0,$.aQ,L.e("#999999"),!0)
r.j(0,$.aO,L.e("#898989"),!0)
r.j(0,$.aU,L.e("#EFEFEF"),!0)
r.j(0,$.aT,L.e("#DBDBDB"),!0)
r.j(0,$.aS,L.e("#C6C6C6"),!0)
r.j(0,$.aR,L.e("#ADADAD"),!0)
s=[t]
t=new L.fJ(0.01,0.01,0.01,0.5,a,new H.u(0,null,null,null,null,null,0,[X.F,P.U]),null,"","",!1,b,null,c,d,e,!1,!1,!0,1,r,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.j(H.a(["Blank","Null","Boring","Error"],s),t),P.j(H.a(["Blank","Null","Boring","Error"],s),t),P.j(H.a(["Nothing","Errors","Glitches"],s),t),P.j(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.M]),H.a([],[A.fP]),Q.H(null,null,A.a1))
t.aa(a,b,c,d,e)
return t},
e:function(a){if(C.c.ah(a,"#"))return A.vm(C.c.ai(a,1))
else return A.vm(a)},
fJ:function fJ(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kC:function kC(y1,y2,p,q,t,u,v,w,A,B,D,H,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
o4:function o4(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
oR:function oR(y1,y2,p,q,t,u,v,w,A,B,D,H,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2}},M={ks:function ks(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},fQ:function fQ(a,b){this.a=a
this.b=b},l1:function l1(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},h6:function h6(){},bB:function bB(a,b){this.a=a
this.b=b},ol:function ol(a){this.a=a},py:function py(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2}},U={kw:function kw(){},n_:function n_(a){this.a=a},ns:function ns(a){this.a=a},oH:function oH(){},oI:function oI(a){this.a=a},oJ:function oJ(a){this.a=a},la:function la(y1,y2,p,q,t,u,v,w,A,B,D,H,I,P,ad,e_,e0,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.P=P
_.ad=ad
_.e_=e_
_.e0=e0
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},lD:function lD(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},n1:function n1(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},b:function b(a){this.a=a},W:function W(b,c,a){this.b=b
this.c=c
this.a=a},ag:function ag(y,a,b,c,d,e,f,r,x){var _=this
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},p3:function p3(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
G7:function(a){if(J.dc(a).ah(a," "))return C.c.ai(a,1)
return a},
pz:function pz(a){this.a=a},
pA:function pA(a,b){this.a=a
this.b=b},
pB:function pB(a,b){this.a=a
this.b=b}},O={ky:function ky(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},c7:function c7(){},dp:function dp(){},kD:function kD(a){this.a=a},ez:function ez(){},io:function io(){},
Hl:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.uj()
a=J.rN(a,P.d8("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.rC(t))
s=document
J.va(s.querySelector("#navbar"),"beforeend",a,C.t,null)
if(J.bc(O.xP("seerOfVoid",null),"true"))P.zz(new O.rD(),P.d6)
r=new P.dG(Date.now(),!1)
if(H.nM(r)===4&&H.nL(r)===1)J.rK(s.querySelector("body")).h(0,"voidbody")
q=H.nM(r)
p=H.nL(r)
o=C.a.C(H.wD(r))
n=C.a.C(q)
m=C.a.C(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.hI(null,null)
k.c8(H.fk(l,null,null))
k.hz()
if($.FY||k.a.c0()>0.99)H.eM(s.querySelector("#today"),"$iseO").href=C.c.au("../",t)+"dead_index.html?seed="+l
else H.eM(s.querySelector("#today"),"$iseO").href=C.c.au("../",t)+"index2.html?seed="+l},
xP:function(a,b){var t,s,r,q
t=P.x7().gcT().n(0,a)
if(t!=null)t=P.qV(t,0,J.c_(t),C.n,!1)
if(t!=null)return t
s=$.xV
if(s.length!==0){r=J.yk(window.location.href,J.yg(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.x8(H.v2(s,q,"")+"?"+$.xV,0,null).gcT().n(0,a)}return},
Hv:function(){var t,s,r,q
t=document
J.rK(t.querySelector("body")).h(0,"voidbody")
s=new W.k1(t.querySelectorAll(".void"),[null])
for(t=new H.dM(s,s.gm(s),0,null,[null]);t.G();){r=t.d
q=J.y5(J.rM(r))
if(q==="none"||q.length===0)O.Hq(r)
else O.Hb(r)}},
Hq:function(a){var t,s
if(a==null)return
t=J.b4(a)
s=t.gaM(a)
J.vd(s,!!t.$ishL?"inline":"block")},
Hb:function(a){if(a==null)return
J.vd(J.rM(a),"none")},
eN:function(a){var t,s,r,q
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fD("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.dY(s,",")
if(!J.y2(r,a))window.localStorage.setItem(t,H.z(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.cm(q)
P.fD("Saving isn't possible....you don't have local storage")}},
rC:function rC(a){this.a=a},
rD:function rD(){},
rB:function rB(){},
cT:function cT(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={oZ:function oZ(a){this.a=a},nS:function nS(a){this.a=a},kJ:function kJ(a){this.a=a},m_:function m_(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},m0:function m0(rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},no:function no(b,a){this.b=b
this.a=a},dO:function dO(a,b){this.a=a
this.b=b},ae:function ae(a,b){this.a=a
this.b=b},cZ:function cZ(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},c1:function c1(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},S:function S(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ic:function ic(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bD:function bD(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},cV:function cV(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},kN:function kN(c,a,b){this.c=c
this.a=a
this.b=b},bw:function bw(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},jC:function jC(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iA:function iA(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jE:function jE(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},o1:function o1(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},o3:function o3(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},oe:function oe(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},dN:function dN(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nc:function(){var t=0,s=P.bp(),r,q
var $async$nc=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:P.fD("loading big bads")
r=$
q=J
t=2
return P.ct(A.e3("BigBadLists/bigBads.txt",!1,!1,null),$async$nc)
case 2:r.wz=q.dY(b,"\n")
return P.bs(null,s)}})
return P.bt($async$nc,s)},
GW:function(a){var t,s,r,q,p,o
t=J.dY(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bT)(t),++q){p=t[q]
o=J.bd(p)
r+=" "+(J.yn(o.n(p,0))+o.ai(p,1))}return r}},V={
Hh:function(){A.ro()
W.vI(C.c.au("../",N.uj())+"navbar.txt",null,null).b4(O.Hj())
V.H2()},
H2:function(){var t,s,r,q,p,o,n,m,l
t=O.xP("staff",null)
s=new P.dG(Date.now(),!1)
if(H.nM(s)===4&&H.nL(s)===1){r="#"+H.z(t)+"Avatar"
q=document.querySelector(r)
r=J.b4(q)
p=r.gak(q)
p.toString
r.sak(q,H.v2(p,".png","_sauce.png"))}r=J.ar(t)
if(r.S(t,"authorBot"))O.eN("N4Igzg9grgTgxgUxALhAJQQQwCYEsB2A5gAQCCAQgORjHm4QgA0I+mAtkquQnBB8ZmIBhAJ4AjCDEJMQAFwQAPWShDEIAd3wIYCVhxjEdmADa4AXghqyAFghHE4mfMTE8+CYggBuulwlnyBrgAZsQ2dsQAVlBgssTWOALEwQjqDuLaWrK4cMQADpgwsmAAdMQyYphwANaEMND42ABy7JwgAOL+AJL4ACq25BAKAPJiYNo+MCV5RDKyMLiEhNpCCfiIKgAMJQCsMmCIWmC9EACq+MYQNSoA2sAAOuDQ8AiPyI8ln4+Mj3qvKI9TuNiAB1LDGGxhCC0Nz8QRoCASWTfR7yJRvR5qTTaXStIJWXA6bBqUIQC72VwEEgAWWGAGVegAZACaxDAUDy2noBlk0J0hCgxkK8SgbCcpWI-QiYE5jQExmMJLCtkJxC8mFixHU4MhvKiMTiwSFcWgcVcvDhhkREFkZSlOmIuBoggAnAAWEqbADMAHYAKQONaIZWYOI2J2O51isxUkookCVGp1BrNVoYjrdPoDIajcYwSbTIjx+aLZYwVZORDp7Y+gBs8YOuksJ3Olxq6ZuAF14zp2RCwHTZKGwB2HvdfmnxwCpwA1LrU8coqfq4xQV5T95TgCMm0XIAAvoxiGOJxw95vHoyugAxACidNIpyEt73P2XJjX573O73h+Pe7+L8p1IdoXynN9HhXT8Nz3ABaLcdl-I8TxYScMSnIRhmpalbzQZ9Xz3KD13Qx54N3Kd927JhUQWJZtEHYdGUsPMOyon45FossGOKdojECUcALQ6dHgAESwromlIJp8PAwiP2I4SQB9JD-ynQCYIwrCcLwsCl0g+SgMeZSKLYmjS3oodilvABHKATFYx5KJkXtBWKbiwFuB5ULPAEQDnBdqJAIj0y3RzkNPf53hAMTqQkqT8MC4LfIADkczs5k4izGOY7RbnS5gSzomB3N4rBAjyjLzOKyywBsuzjAq-cgA")
if(r.S(t,"karmicRetribution"))O.eN("N4Igzg9grgTgxgUxALhAaQEoAIBGBLCLABwEMBzJAGhADsSBbJVAWQUawGUAXKAEwRpcQ1LggAeQ1BADuNBDAEN5WPGCxcSAGwDWeGmXWEAZjDwDeaiDXUALBCsHy5XAHRYAKjYhh7m7-LUfNkMsACsoMC5cewUiBBIuPQNGRjUuGwSsOGhNXiwMgDd7HAQBYm9RPJwATywSLABWAAYAWmr4mBaIXKxoLi6jFq5oOBssegh6Nxk5BTpGGCxIkhguQPkCpKwoIixxLhgSFpMEMDGU06wTSdt7fiJ0yyMsDAReXjxXYRAcEjhtMgwaA0XgAOSUKBAAHUrGRNAgYTBtC4iPpvgc8GQKDAAMIZGiISFNFwAdga3zAiDkYHcEAAqjQ-P9IQBtYAAHXA0HgCE5yE5mFwBGI5F5wk58zF-JArHYrx8K1G8k5lE5ogkfM5M3kigWSw0q0CcRBW0S7AYJDAYC29RsUAo+QgMH4vWeCj+iSsKnoorUJBBWHZQZACk0CRIOHhQc54zYpzcADEnXsijBataeAkCNZ0ghaoV7P66kQiEDS3gEvYyHgjJQlnAFAI4CRdsnskRqqRli4gzRe548-kSEUaAByKIeqBaTS1Lidt51K5QTSaJYCUQE+x6LDSUraMA98U-P4AoFQEHgxia6Gw+GI5GosgqtWmLHyPH+xDX4lk5-gKmnLSDJMto14sgAun+ChgMuazcAkYBgRywaStGKBoRwACCGA4phHDuAAku4dIACIAKJoaqwYFFoUC8sG-LBgAjGhAC+kFHhib4wPBawADKnD4MBgRxqogFx2K8WAADi7qiMJ6EgBBf4SfIUlkQAjlOmhIWhqEMRh2G4fhRGkRRwZUZyNGaHRaGMZyLHBuxnKsXWHJcrAX6KYK+CEKQFB-qhimyqc9CfDYKn7Ne2pzEoiwlNWNBqAoYViDaAYpZa8mmnYsapLc+bDvYXgrPwvBuCFyUIEYOqbr0uaLBcajbvUPiaIMCg1XMiRaL0sAQDgTreG4A7pgaUTDFgfg+IYUCjDu4UpvI1TpFsfTWi6uYOPJzh1Gkdi1IciAhNopS7DsC3pLcU2VpEhhEHgcAHn+vz-ICwJgko14wvod5Og++gqa+2Ifpu36kg0f6UgIgH0oyED-CJUGnLBYBSbpKFfQZwZYTheGEcR5GUWh1m2djDlsaJL6YpJGj8YJyqKcpnHA2pdMyXJjPSszYmqTx7OadpGMSljmo40Z+OmUTFkk7R9Fi5yABMlMuW5nKQJ5UoCtgvkigFR5BdKIV+M6kUaopHCwO6miqPQdQBjQeA2HgNtgHbDZndthAxbqyijmoTUOHsWm9YwlqwAgI0HVgNCEH4+jKJ1tXHXAVvrktghgHWOBQFEeiRPEeSQOwkSHAndSaDtlY7k6PQQM8Ealx6C5GJiEd+gG9zQdaVhuJh4xZco9d5ZcGRqLH0h2AoeyaDNk1kBA0yyLVcVDusZRbQcuc2FHOoqJYjK1FY9hb-YCBV6uFx1v6eS5rUzbWHIqZ7JSLZbq4L0nu956fVeik-XCBAfFvAHkfEDGm758ReWlD+SGR5obUiAvDRGTMqYhhRpXNG7Nha0FFuhcWeMTKE3Ms+aics7JoUci5NBfMpICStFzTkPNqbcSkrJeI8kkYswgfzBCgstA4P0grEAuNjIEzMsTMhNl5b4M5AAZhViAdi3xoKoykqydyhtOSiMlsQv8pMtYgBYko8C6JWa8PpgwmAGiRZ-2lDoohEijwGOvMY5RIhzFsM5tY1AEEzE8PUiHTQrJTGsSAA")
if(r.S(t,"authorBotJunior"))O.eN("N4Igzg9grgTgxgUxALhAJQQQwCYAICCAQgFIDkYuARgJYQB0IANCAHaYC2SqAmgmA8wAuCAB6CUIXBADuLBDARtOMXGEGYFFbAgQAHADYBPXJkGqInXADNqCurgA6IXvye5BACwTGwmQ41xvPlwFK30EOEFqFgBzdy9cbEwWOGi4sI4+ARBKTDgAaxiYaBZsADlMiQAVAAkASQBlRoAxOrKAUTpdWKYQQRhqGJj5AGEPZMQJAAY6AFYATl6wRDkwKogAVRZ9CAKJAG1gJ0hYRCdkJzorp0YnJQRzpxqYdleruhunYTFHyRk5BT3FTUCjSUxwDxpEy4ODQAwIXDsTD5BHQMxWYrsXDRMDUbTmSyUKBgLz8XBVLzGdhQQTCFQOBkgDwvN7XRkmCieby4KC6JLCeIIWyqSG6XRQop4+yfHJ5QrFKClCqcX4UkF1MAAGQgADcEHUAOJQPj8boxGX9QbDGBjCYPFBOGazGXLRR8dZbHYFX77AC6Ms0UH0gjADXUIZ9R0Z9wZj0ZhE1+AaAAUau0ALIAeQAGtxY0x8zrMPpjfmLoyAIz5gC+ASjd0yZfzaEz6ZGrfT7TQecZt0ZRZLD0Z5acVcZ1f9Bb6AyG8jDpi1JvkPsnt2nVrn4bABoUpmXDpAfotM+t85D7QAjlBiyunLXcEdwNB4PaLiB3jKYwe6iw6XworEACEwEWqIgi-FIsjyIomTAqC4KQrE0JWIq8jFrgujFIgYC4hALC4NI1CeCYYoaIoZgxOECDSoyP5-moaTAYB+YBFyxhwDA-jYjELAQAMSFcoktiCMYOwQPkFAYhYgqIs+AKuFOuQFEUJTlI2B4NBYCB4QgzRQAU0QACLUAg2BdLEx4bja4wpK+jpzC6Kzups2y7Pkt5ToGwahlukb5jGw75gmSaphmOY9p8-bFqWgWVjWdb+Y2sVOEmDQ1JmmpdhFBZRYOTZxeOq5fCem4LpqS4wB5a6WrOMBntuu50lVxVWfVl7XvoHkTr0XkhvVByPl+b7BSmaZZrmMoDqWB5ViA96Depb5oIaNRVO0mYbA0uDNBs3aTdFdkgLN3VCCVdVbuVOHyAcvq9DVp5bjuWB0jdd1nW1V7Fq91ZAA")
if(r.S(t,"jadedResearcher"))O.eN("N4Igzg9grgTgxgUxALhAJQQQwCYAIBSaA5GLgEICSA8iADQgB2mAtkqgIpQJgAuAlhAa4MmADZ8eATzogeCAB48UIXBADuDBDARNWMXAAtMpAEYIA5lCE8IuAI5deAodrETJAOly4AggDM5fUxcUUFzXAAraBhNSVpcHgMESVxWBB5cNQkDBKTcTAAHAsxtBgyfKESIfQg-XIQ+fR1+bWEscSkvCh4STIaYbC8AFSSUgGsEBALccz5zc1FuBmr+BnDMDPVNUpYtfJNoDLVMSVJE5Nw4TCErULgx1OqEDxePIgBxADkqAGUKH6IAH5gbgAOpGOQANz2iQ2uD4YFeMhMmHu5hg0AY2E+u2UABEAKI-AAKVCGHgKaxkPBgc3MWgAwkYGIhlAAGDwAVhkYEQmjAQwgAFUGHcxsoANrAAA64GiiFlyFlr1ltFlugQitlIuwWl41zwIg6klVsrkii1Ki2Wh0u30RlIkFE0LwwT8CDUuGJQoAWj6ADJE-JY3AMgASPn9gc+7yDsIy518lQM1UMxhCmD4eEOuD8qfOzGGo1wYEmzBLtgKED4ZUWYERuBGNYemAOlUyEMuEF1l2uuGwEC8-ogEAeVl1MSwiXq+SKJWaufzeTg3YQXbKGNE4jWuRr5lI460mg2Ble3jDUFPuAAsiczPVtL1gsUeIEhEltIDTSAUWiMeOcVYS1CRJMkKTWb8aTpRlmQVFBZQ5ABmAB2b9eR0bhBRFMVLQlABdb9tDAKBRB4MAfh4DYwFwmVpXVXY6K1OiQC+X5-kYugOMhMQuA4pVmIARg4gBfAjONkWl5i0CiqP9bhSxgXCxLVCToJgGSyPeVxAhojiNT4jjWL+H4OLVZjuNEXjmP42UhOY0TIMk+l1MosiCQcMQlNlYT4hlOVYDgpUQBVcT9PgkAmWuek2jcKRIIUHhLVUDQbQ1fRiOwXVRRSQ8YH1LFSAQaEYEkRI9yLfpcFcY14VIYIwD4ZgSI2Zx4kENcwAMCQpHiSB4QyK4hHvGs-BrCQEFEFI4GZelXRDZhuz4UaEDwEwUkTNQuuYUhahCcaYDESbgxSYxOogRZMmyCtWASRq10EepGjTAqvFBCbRC8ZLtltPQ00dCAbv4G6HvOJ7mWwBtfBDCQElgBgdvbDjTpTRYSo42q9sCQ6TpLVz4WsLrHS6191q6tYKpSEwoHWEM-CgetgzwVhMoug003uGcGvLKx+FEeoUiMaFUkweQVtUdtuNpaBHVcs5O0gcdcDGGtsGCcwR0GRtCcurd+wQUaGHGo7BbXZYSy0AR6aqqYtDgemGsEBtv1-MZ0UxbEGPCkDSXJSlzEctTIpZTVwqQ1DxPQ-ksNFCB7i88SiJIsiNOo8KpT0hjrI4ihrx8d4KE+HwhmoT5TK4njNSzwS2RE3yM6AqvZR+dghQoPE8UDH4CU+Luy-MiuDOr2vcFo+iG6Y2U8Soa8C58T4GQJPvZQsqyJ5AASa-suvmP0xuQGJOefHDRfmLM5eB73jfh9HxhM7Xn5PgJHwAGkfAPhkKCGABNJeQBXyu15Xy3iPeuAD4LMR+D4NADIfA-GLkMIUhJf7-0HrZTe3lt5jzATZEARIhgEgJNeZBF816IWvqA1BIAyBoB8AXT+iCT6mn7pZbBHEgEYJATvO+4DZT4CoGQAAYv6F+RJiEsMoZychXDx48IitPa8BJoGMM4sw1esj2EgB8pwrBlD-QUAEUSHwQoF5iLUTgjRWib67zXnnZRZ8-4kNkQAWgEpI4BVjuE4LDFQNAvdT7l3EXvAAHFInRe985oCGGGUxrCh7uIoXvGBAiBGz2LlQUu-jVGxLQaE2+MicGwJ+N4wMaAf6ZPPoEwB6DNHKTNE5aSss5L1i0PHFSUEpIuSolpKcLS04ePyYZb4xkYmUIAEwiVqapDpKd3JQE8mnMSljZQK3gCHIKIUVJhSCj4OAiACgZCNO4eKFpwpfVSnaa2bgABe3Bchwmqu4DGm04QwwRBTPWcAsxrhsLjKY+QGo9jzEER4rAygJFsIsBMeQKhVHSgULAYwvAcUIMgXAQorxhmSF0fsggiAZDGMsT0m0dC4EkNAIgrRXDYD3LuBst5JDDR6KQbAsAaWJh8AUWkfMBEjlEKQTl1xEU3jvGuCQvQWW0h3ImAALAAegEohXAYZDqqDqAI3YuAqZ8FEHgKABRsUDgYHi-IcAeBzK3FNecdyMhNWmq9TszANiBFIAiUl5LKVYGpTuCQ9q+DTVSFgeGbqoCXKZpTAQ8RNp+pyKwa4pAyVQApWuAoogTg0vEO6EsjVI1dX9bGoNCak24AUCm6obK8idRhvGXAFB4hsz6o6hgKQIDnDyvEE2uACjtgbVAf1u1oilmdLcmsNgiyCuDUOCwPrcBf2gIzTtCAIAprXOICYwbhZrphiqtQKwcjTvBOkD8-UwBEHyP2KAzATDFvkPC2koLKJ8xXMHfZe013+iWggH42bVBBCEDgalpq+BC3THTDm6IoBXoOgiGl5gNWrrXKCOkqMv3llTJAVgZUdwRHphkPqfhU2bHbAIueU9rz-NwD8MgQo0BkBQ71SYNL4VLouvBjscIKA4oxth3grwPA9v9WrDWu5yY1sMEutcHHBpK0mNMAc5aETxA4x2ht1wUgprjb1WwjbSZ7lIBx44YKfkDjHQwB4Cb23tV4JNeIQKSx6qrDAVY4RAYGH-OYHIZVETo28NaHYv0ERGoyNVI6xFWjPIyKp1V1qA3XB4PEKmEWMiLGMFCi4HbEw3KEKx1EezKLByiw8qQMxqw7lswWXAhKPDO1RK7f8WJAJrMnkSH24F-biXac5IOgUEJcjQnyTCwoY5xwWYRbgSdyKy10tI7J+8i4UG7iY8pDjKnqOqQ5dr9TOlkSaQpVpdS1Ip26RsXpQV07TcoUZdiS2UF73GfZSZHWGlUVmfM07-SZuFOKYospTCKlmI4mtxZeEZCJ1IhNqiko-JbNlJdky4kUHhSEjU6km2U47a0JKYH9BHtbbAEdwImOUcHdli90QhPhJAA")
if(r.S(t,"someBody"))O.eN("N4Igzg9grgTgxgUxALhAGQQQxgOwASYBG0ALnoTBAA5IA0IOmAtkqgMoQvEAmAngQEscAcjIALTFSq8Q9EggAeJFCAgB3HAhgJGLGHgBmQ7mDwkxCJmAQAbA3iEE8YiGCoCSmG7TxhPMIQBzAjJIFjxuKG4EB3xMZ0wyAxtEmyEggDo8NijonBteHwkySOjfD1M-GEwBQLEyKCoCHG48OBsIOABrU3NLWLMLQ0xELIAJdTwYKIQM2RBCEa7AyigWgDlmVhAJtw8vQgRuDKocQPmSAMDArQBhCRxEFQAGDIBWebBETTAAFQgAKr5TpdFQAbQAuvNtGAoDYSGA2J4EeDgAAdBhbDHIDEAJQAkgBxMa-ACiAHkAWw8AAxAG4gCaGNoGIAbl4oAhsRiAOwYgC+PnRmJY3JA5IAsut8WhyQBBX5jfHrQnMtkcrkoDEAZgFQoxuk1OJAbFJypp+NJaAAItlbnK0HLCaS1SB2TZOWKALQANgFULkVxuMCRiTAGDA1hg4IDIEutWDoYRhO0iS0MYuQa0SbApIAjlAvBn+UA")
if(r.S(t,"dilletantMathematician"))O.eN("N4Igzg9grgTgxgUxALhAGQQQxgOwJY4DmABJgEbQAuxAIgLIgA0IOmAtkqgMpsQDWCWgkoI4lCDGIAhTJREwAnsTQQA7kxAiAHpRQg1OBDASsOMAORhiYADYIEAB2J4rBeTCgORAE2JklmMQAFniEQQC0DniUcEEIvrF4MA4AdMTSCABmEoIGRibsRsRwmDjE3i4lML4hYAD0cZJwEDhgcHjQYIZgrtSJyVaYhJgEadJQ1HnGpkWYNsaY3kqxpYTxxJRxfrLyeAhWmy7EClgwYwCSB42CgWCixtRgvALlwqLiklMFZuUQ+zjmah8HBqUgUCYAfgAhBoyJg4HxCDBoDhvAA5Qp6Wz2Lx4Dj0FIOIgaSgwUJrGAAYSCpUQegADCkAEwaNomfYAFQgAFUcDYIAi9ABtAC6GmMYCgNkoYC4lFkYGFYuYpPJRjlCowPSMwuAAB0WIUDcgDVIAEoAQXOaPOHO5NAAogbGAaAG5zKAIY0GgAsBoAvsrNGTCBSNTKAOILeRKkkhsPymUOgCOUDmsf9QA")
if(r.S(t,"tableGuardian"))O.eN("N4Igzg9grgTgxgUxALhAdQJYDsAEAVAcQHIwcARBAQwBMcBlBMMDCLEAGhC0oFslU6aAHI4AggCUAwjgCMHEABcEADwUoQZSlgDmAOn04AkqQUALSgvq8oCADY4AYqwWVsCdjgAOGWxEsQAMxwzBHoXGDBTDE8cSUoYBBcAawQYD2wA3mhSB2xKewAhCCYAfhwATWgcACNE3RwIAHcsVIRuPhgcaghGGosFW1DGjDMcKJ4G3BCuhDgkhqDpuITk1PTcCBhqkYaAN1Tg01DPWy1EnAAtNoUYKB4AWhkcSlIdjFJqiB5a2mqAT0OoWqsCw2G0OEaCTmC0BYXikWisReKQU9SaLQS7QOngSnnivQCm2euBUcBGYL6CgGCH09WBlh2ChBpGg-haELs9hOlEQtE8UCwcFMwQgsLASSgtns7xwbWg2mFClF1RgFOmuW4hWKpG6zV08mqPKS2hg0Cw1CEvH4IACGAVChkuk8OnkNzt2lSknMgutAAZdABWeRgRAtMB4CAAVSwvjm6gA2sAADrgaDwBAp5Ap+45lPsFNYzMpwQiCTSABMeZTSlURY0bT0BmMhwsVh4NnsTiwLjcHmmRRaRxo60yPGyjjyWtKFSqtVRDWaqUxVs63V6hqpgwhI2F4xmCBitRaFkVRxwYFgmUQMIAaqlfJjHh5hmZsLC4JR9i3LKZsr1pnQ0D2JIMB-GALj2IEsIAArMKwGBwDgAAymy0JaABe8RJPiWD1ChEBJKQtgYCkbYds81SQFsCC0EcnSQJKz5REKODaJ+oR7pQrG+MMOg1LYNiyn8NILhibQrl4uL4qQhKdFosrKGSCgUhu1K0jUUAMpYTIwFgLKad+ODCZYlBsW+jKUCkLIxgCrBDJyXinLyXgCixSpihKUoijUqp8eqk44EUTBdOiuhViAhpzCaZoWlada2va5ZOjo4VutoHowF6WiIHW-oACzhSGbSMBG0axkkdaJkm1WprAOU1VmNU5vc1VVjVhYNa1IAlmIUg4AAzF1+Y1TWChdY1KYUDoUCmOpzZmK2dDWHYjjOK4LQeGAswrDggw0AcUHTLBLCgoh4iMLAHo+iOWRQDkAVBWAZSVFANR1KJrRYquPQfP0W4vruGATNgzDUKE0xwM4pr2KaXwwtMtqajgBB+C4pgxghwoALKzOYHhwLAmIDACb6bNs-hBAAovEZh4RABFESRoRLe2dgkA01Q9i0tDTAxtgsosZ5+HR54YMoyOo5Q6PESxH6eFzpBaLQrC2ACLQ0dZoRjgkb2yRxoQfrgPLKbsFjg2eKNUlLGNCuzNyCZ4TSpGii7Lh0kkHtJOCycSClKSpf00gY9I4IyzINAZYNgN4ShvRSCAAI5QNEng0duoyO40BzxNr6TaZZvQq7Z7JZ153LOfygqKqKvOefY7kqmqZ4avkgXaiFepDV1kXGqaAqxXw41dQlpgKP1yXaF3I2qulnrevVRY1f6g01cNKZFWGpUxhAcxDzVVWtV1DHpofe+nyAzWn6vV8FnFV8oDf3XCL10gFffa+H4oKhjffE2f1N2gbBzRMOYSwLNyJdhcKCdwXhTBgQQq3BA3wIDUCBtceGZ4KDgVNMJGA7NAKMVDlgUc44W5TiejOV6c4XZiS+iFdcgd06AwmBYCAMQlgvGpDCMgd0FAeFVMwPirJvamgmNMaK-dJiXGuLcB4MgmKtEODKfI9hahsVwshemhFdpMzImzUgZluY4Eht2aGexs7nkaDnGE3AsAQHuNQXhXgaYIUGGAJimMcA8ALjgKA7Czz7FAqxPu5oxihHAkrayNDPoSRxJ7BIMkiTyVJOSPiqlBjqRDngAAEoYOg+BDBY0ph4LipcuROTTpXNyNczziklPYYYXkhAAHk8BvVlHYqACpvKNz8s3B67ddQaPRDE926tqAmBqdgeY5gYBgzkqEm4AJTLrVpI-D+3cjQSPNJaQev9H4jwUHlCe6zH5pQyllH0j8-5dX9JWd+j8N4lSjNvXe+z74HxvvfY+C8vmfxuX87MuZAWfw2YCrgd8QWdShTVHqZYcB5WQDgcQlMyDNJhdfDFX9axYoBX8kAhgFB2zQdEt2BxzCJMkcIxooDARqwQGndyiMVEAn5CZEkiyamhDIW3YKUE6BA1IJgMwwihB3FqDAeo4CVqQPWqEGUF4cTvDTv8D6ZK8GkCsTACYSCVQ8hgTSzxCQeDYAmWMIGMIaWijPAkFlocwDqS4gEAU9xfC7DBM+ZVcAYBGgpAEVUbRqBSuWjDJBurUikCiKQJBfgTruJwAkAAVrMZSfSDZQwgPXTBjAbgQFwfgoCYwXjmM6CEHgJTQkymZVKAE-qGU9NCEkHwgxaAA2EdMIG2sIIjABCaLQShfgAlqBSPEMAKawiwbm-NpACG2HqIS4IBdSB2K8Zsc28k7IcjLhUlyVdGVcvPHXby3RzwQDClisF+Ke7bIHhmXFGKUyHOOc6SeF6H2KBnhc+ed6YUPyxTId9l6vngFDM8sqO8Kr3qxfGAAuoB99CTJQKDAHQFwyH314uA58h9v6Oo4d-Zh-D99xDNKxpIUjRTxDlCI7+oDNHP6mwEj++jwHCMsZTG-djj8AC+cG31YvOakVDFgwBIUYFtGAGH32wfgwJz9Qm0NgAILapQkmoO-uw1xz+eGtP-N08R0j5GsaUeo-p0FZmGP5BsBZs+FmQABhszVXjsnf2CZgMJ5DlMk75Ck9Bvjv7nMPPvoh2wyGPNgGuY-TT4KdMgr-b+kjZGKOUyoy5qFIBGPWfU+lgDWLAvn0vR+90CmRNiaYKkSLHz-Pmfvm58LymqCqcq+fGTQXz51cU15qAPn3kteTFi2L4K2Pn0S0ZkzaW4uZeY3F4bn8V4Beq11fLHAuohbC4ps+IBou3z2efPFIBRvJdS21yzTHmuf1y+fZba8iuz3c4psrEnNutbatWeT92RMNbNmpxeKYXsrensVj7nnvO2Ge-18+g3fuf0O8ZlLpmCuPym+drq9yrv+ZAM5lbIA1soY2w-LbEOIW7fiwdwzR2EcA5TMj6FKZLuY7g9jjrpXxMVYJzJpn736sqbZ1mLbjP8y3YyuFrrPn2dE7w6T2H43MXU6sz+0n9Ose8fkLj8LCZkzE4zAT6X8PwrI4JwBhnroucPdZzABMMGTdA+5411Ilvrd3ZF6DjXO3td8916l7HBu+e+hTCr7jQA")
r="#"+H.z(t)
p=document
o=p.querySelector(r)
if(o!=null)J.rK(o).ag(0,"void")
n=H.eM(p.querySelector("#layWaste"),"$iseT")
n.toString
W.e8(n,"click",new V.rl(),!1,W.ub)
r=P.C
m=B.eE
l=new B.oW(P.a4(null,null,null,r),P.bY(r,m),P.bY(r,m),!1,null)
m=new A.hI(null,null)
m.c8(null)
l.e=m
l.bh("headcanon")
p=J.y9(p.querySelector("#askAB"))
W.e8(p.a,p.b,new V.rm(l),!1,H.O(p,0))},
rl:function rl(){},
rm:function rm(a){this.a=a},
l9:function l9(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
lU:function lU(a){this.a=a},
m3:function m3(y1,y2,p,q,t,u,v,w,A,B,D,H,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
n9:function n9(y1,y2,p,q,t,u,v,w,A,B,D,H,I,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
nw:function nw(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
nY:function nY(y1,y2,p,q,t,u,v,w,A,B,D,H,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
oV:function oV(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
zg:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dq(new P.cb(""),0,0)
t.aj(a,8)
s=Math.pow(256,e)
c.toString
r=H.cN(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.w(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.w(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.aj(n-1,p)
t.aj(a,8)}return t.b5(b)},
zf:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cz(c)
s=new Uint8Array(t)
r=new B.de(null,0)
r.a=J.dX(a,b)
for(q=e*8,p=0;p<c;){o=r.a6(q)+1
n=r.a6(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.w(s,l)
s[l]=n}p+=o}return s},
t4:function(a){return new V.lj(a)},
t3:function(a){return new V.li(a)},
zc:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dq(new P.cb(""),0,0)
t.aj(a,8)
s=d.gcO()
r=C.f.al(Math.log(H.ke(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cN(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.w(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.w(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.aj(m-1,o)
t.aj(a,r)}return t.b5(b)},
zb:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.al(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.de(null,0)
p.a=J.dX(a,b)
for(r=e*8,o=0;o<c;){n=p.a6(r)+1
m=p.a6(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.w(s,k)
s[k]=m}o+=n}return s},
t2:function(a){return new V.lh(a)},
t1:function(a){return new V.lg(a)},
ze:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dq(new P.cb(""),0,0)
t.aj(a,8)
s=d.gcO()
r=C.f.al(Math.log(H.ke(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cN(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.w(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.w(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.al(Math.log(n)/0.6931471805599453)+1
t.aj(k-1,5)
t.aj(n-1,k)
t.aj(a,r)}return t.b5(b)},
zd:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.al(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.de(null,0)
p.a=J.dX(a,b)
for(o=0;o<c;){n=p.a6(p.a6(5)+1)+1
m=p.a6(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
lj:function lj(a){this.a=a},
li:function li(a){this.a=a},
lh:function lh(a){this.a=a},
lg:function lg(a){this.a=a}},A={kP:function kP(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
i:function(a,b,c,d,e){var t=new A.a1(c,e,null,a,!1,P.a4(null,null,null,G.Y),0,3)
t.M(a,b,c,!1,e)
return t},
a1:function a1(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
mx:function mx(){},
mw:function mw(){},
fP:function fP(){},
fS:function(a,b,c,d){var t=new A.dF(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.eQ(a,b,c,d)
return t},
rX:function(a,b,c,d){var t=A.fS(0,0,0,255)
t.b=C.a.ab(C.d.al(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ab(C.d.al(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ab(C.d.al(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ab(C.d.al(d*255),0,255)
return t},
yT:function(a,b){if(b){if(typeof a!=="number")return a.aK()
return A.fS((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aK()
return A.fS((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
vm:function(a){return A.yT(H.fk(a,16,new A.rg()),a.length>=8)},
dF:function dF(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
rg:function rg(){},
ww:function(){if($.wu)return
$.wu=!0
Z.zq()},
e3:function(a,b,c,d){var t=0,s=P.bp(),r,q,p,o,n
var $async$e3=P.bu(function(e,f){if(e===1)return P.br(f,s)
while(true)switch(t){case 0:A.ww()
t=$.$get$cS().V(0,a)?3:5
break
case 3:q=$.$get$cS().n(0,a)
p=J.ar(q)
if(!!p.$isdN){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cA(q)
t=1
break}}else throw H.l("Requested resource ("+a+") is an unexpected type: "+H.z(J.v9(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.u4==null?8:9
break
case 8:t=10
return P.ct(A.mX(),$async$e3)
case 10:case 9:n=$.u4.ew(a)
t=n!=null?11:12
break
case 11:t=13
return P.ct(A.mS(n),$async$e3)
case 13:if(!$.$get$cS().V(0,a))$.$get$cS().i(0,a,new Y.dN(a,null,H.a([],[[P.eV,,]]),[null]))
r=$.$get$cS().n(0,a).b
t=1
break
case 12:case 7:r=A.ET(a,!1,d)
t=1
break
case 4:case 1:return P.bs(r,s)}})
return P.bt($async$e3,s)},
mX:function(){var t=0,s=P.bp(),r
var $async$mX=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.ct(A.e3("manifest/manifest.txt",!1,!0,$.vF),$async$mX)
case 2:r.u4=b
return P.bs(null,s)}})
return P.bt($async$mX,s)},
ES:function(a){if(!$.$get$cS().V(0,a))$.$get$cS().i(0,a,new Y.dN(a,null,H.a([],[[P.eV,,]]),[null]))
return $.$get$cS().n(0,a)},
ET:function(a,b,c){var t
if($.$get$cS().V(0,a))throw H.l("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.vE(C.b.gbc(a.split("."))).a
t=A.ES(a)
c.b3(A.wt(a,!1)).b4(new A.mV(t))
return t.cA(0)},
mS:function(a){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$mS=P.bu(function(b,a0){if(b===1)return P.br(a0,s)
while(true)switch(t){case 0:t=3
return P.ct(A.e3(a+".bundle",!1,!0,null),$async$mS)
case 3:q=a0
p=C.c.L(a,0,C.c.ea(a,$.$get$wv()))
o=P.d6
n=new P.dV(new P.bj(0,$.an,null,[o]),[o])
m=H.a([],[P.cE])
for(o=J.y6(q),l=o.length,k=[[P.eV,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.bT)(o),++i){h=o[i]
g=J.b4(h)
f=Z.vE(C.b.gbc(J.dY(g.gJ(h),"."))).a
e=p+"/"+H.z(g.gJ(h))
if($.$get$cS().V(0,e)){m.push(A.e3(e,!1,!1,null))
continue}d=H.eM(g.gbe(h),"$isda")
if(!$.$get$cS().V(0,e))$.$get$cS().i(0,e,new Y.dN(e,null,H.a([],k),j))
c=$.$get$cS().n(0,e)
m.push(c.cA(0))
f.bb(d.buffer).b4(new A.mT(f,c))}P.zA(m,null,!1).b4(new A.mU(n))
r=n.a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$mS,s)},
ht:function(a,b){var t=0,s=P.bp(),r,q,p,o,n
var $async$ht=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:if($.$get$u3().V(0,a)){r=$.$get$u3().n(0,a)
t=1
break}q=W.fn
p=new P.bj(0,$.an,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.e8(n,"load",new A.mW(new P.dV(p,[q]),n),!1,W.T)
n.src=A.wt(a,!1)
r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$ht,s)},
wt:function(a,b){if(C.c.ah(a,"/")){a=C.c.ai(a,1)
b=!0}else b=!1
if(b)return H.z(window.location.protocol)+"//"+H.z(window.location.host)+"/"+a
return C.c.au("../",N.uj())+a},
mV:function mV(a){this.a=a},
mT:function mT(a,b){this.a=a
this.b=b},
mU:function mU(a){this.a=a},
mW:function mW(a,b){this.a=a
this.b=b},
nx:function nx(){},
jB:function jB(){},
hI:function hI(a,b){this.a=a
this.b=b},
ro:function(){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$ro=P.bu(function(a0,a1){if(a0===1)return P.br(a1,s)
while(true)switch(t){case 0:if($.xL){t=1
break}$.xL=!0
D.G2()
q=P.C
p=[q]
o=H.a(["metal"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,0.3)
$.$get$c().h(0,o)
$.E=o
o=H.a(["dutton"],p)
n=$.aa
H.a([],p)
o=new G.bH(n,o,0.6)
$.$get$c().h(0,o)
$.vW=o
o=H.a(["ceramic"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$c().h(0,o)
$.bO=o
o=H.a(["bone"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,0.2)
$.$get$c().h(0,o)
$.ba=o
o=H.a(["wood"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$c().h(0,o)
$.X=o
o=H.a(["plastic"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$c().h(0,o)
$.aA=o
o=H.a(["rubber"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$c().h(0,o)
$.c9=o
o=H.a(["paper"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$c().h(0,o)
$.L=o
o=H.a(["cloth","fabric"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$c().h(0,o)
$.P=o
o=H.a(["glass"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$c().h(0,o)
$.b7=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$c().h(0,o)
$.bW=o
o=H.a(["flesh","meat","muscle"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$c().h(0,o)
$.bi=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.G
H.a([],p)
o=new G.bH(n,o,3.1)
$.$get$c().h(0,o)
$.bn=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$c().h(0,o)
$.cg=o
o=H.a(["plant","leaf","vine"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$c().h(0,o)
$.b3=o
o=H.a(["feathery"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$c().h(0,o)
$.bz=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.I
H.a([],p)
o=new G.bH(n,o,0.1)
$.$get$c().h(0,o)
$.bQ=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.I
H.a([],p)
o=new G.bH(n,o,-13)
$.$get$c().h(0,o)
$.bP=o
o=H.a(["stone","rock","concrete"],p)
n=$.v
H.a([],p)
o=new G.bH(n,o,0.3)
$.$get$c().h(0,o)
$.aw=o
o=H.a(["legendary"],p)
n=$.mv
H.a([],p)
o=new G.bH(n,o,13)
$.$get$c().h(0,o)
$.a_=o
o=H.a(["Unbeatable"],p)
n=$.mv
H.a([],p)
o=new G.bH(n,o,40.37)
$.$get$c().h(0,o)
$.Ez=o
o=$.I
H.a([],p)
o=new G.aX(o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$c().h(0,o)
$.av=o
o=$.tP
H.a([],p)
o=new G.aX(o,["glowing","bright","illuminated"],0.1)
$.$get$c().h(0,o)
$.b2=o
o=$.tP
H.a([],p)
o=new G.aX(o,["obscuring","dark","shadowy"],0.1)
$.$get$c().h(0,o)
$.ak=o
o=$.I
H.a([],p)
o=new G.aX(o,["calming","pale","placating","shooshing"],0.1)
$.$get$c().h(0,o)
$.bk=o
o=$.G
H.a([],p)
o=new G.aX(o,["nuclear","radioactive","irradiated"],1)
$.$get$c().h(0,o)
$.c2=o
o=$.I
H.a([],p)
o=new G.aX(o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$c().h(0,o)
$.b9=o
o=$.I
H.a([],p)
o=new G.aX(o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$c().h(0,o)
$.bX=o
o=$.I
H.a([],p)
o=new G.aX(o,["doomed","cursed","unlucky"],-0.3)
$.$get$c().h(0,o)
$.aE=o
o=$.G
H.a([],p)
o=new G.aX(o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$c().h(0,o)
$.aZ=o
o=$.q
H.a([],p)
o=new G.aX(o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$c().h(0,o)
$.bo=o
o=$.q
H.a([],p)
o=new G.aX(o,["electrical","zap","lightning","shock"],0.6)
$.$get$c().h(0,o)
$.a7=o
o=$.q
H.a([],p)
o=new G.aX(o,["restraining","imprisoning","restricting"],0.3)
$.$get$c().h(0,o)
$.bf=o
o=$.I
H.a([],p)
o=new G.aX(o,["expensive","valuable","bling","money"],0.1)
$.$get$c().h(0,o)
$.bg=o
o=$.I
H.a([],p)
o=new G.aX(o,["edible","tasty","delicious","savory"],0.1)
$.$get$c().h(0,o)
$.ao=o
o=$.I
H.a([],p)
o=new G.aX(o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$c().h(0,o)
$.ai=o
o=$.I
H.a([],p)
o=new G.aX(o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$c().h(0,o)
$.am=o
o=$.I
H.a([],p)
o=new G.aX(o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$c().h(0,o)
$.Z=o
o=$.G
H.a([],p)
o=new G.aX(o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$c().h(0,o)
$.aq=o
o=$.I
H.a([],p)
o=new G.aX(o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$c().h(0,o)
$.aB=o
o=$.I
H.a([],p)
o=new G.aX(o,["funny","hilarious","comedy"],0.1)
$.$get$c().h(0,o)
$.b6=o
o=$.I
H.a([],p)
o=new G.aX(o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$c().h(0,o)
$.bq=o
o=$.I
H.a([],p)
o=new G.aX(o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$c().h(0,o)
$.a2=o
o=$.mv
H.a([],p)
o=new G.aX(o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$c().h(0,o)
$.Q=o
o=$.mv
H.a([],p)
o=new G.aX(o,["class-related","appropriate","themed"],1.3)
$.$get$c().h(0,o)
$.N=o
o=$.I
H.a([],p)
o=new G.aX(o,["pretty","aesthetic","beautiful"],0.1)
$.$get$c().h(0,o)
$.ax=o
o=$.q
H.a([],p)
o=new G.aX(o,["healing","regenerating","recovery","life"],0.3)
$.$get$c().h(0,o)
$.aY=o
o=$.I
H.a([],p)
o=new G.aX(o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$c().h(0,o)
$.aH=o
o=$.I
H.a([],p)
o=new G.aX(o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$c().h(0,o)
$.b5=o
o=$.I
H.a([],p)
o=new G.aX(o,["poisonous","venomous","draining","poison"],0.6)
$.$get$c().h(0,o)
$.bK=o
o=$.I
H.a([],p)
o=new G.aX(o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$c().h(0,o)
$.bl=o
o=$.I
H.a([],p)
o=new G.aX(o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$c().h(0,o)
$.c8=o
o=$.I
H.a([],p)
o=new G.aX(o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$c().h(0,o)
$.ap=o
o=$.I
H.a([],p)
o=new G.aX(o,["blunt","bludgeoning","dull"],0.3)
$.$get$c().h(0,o)
$.ab=o
o=$.q
H.a([],p)
o=new G.aX(o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$c().h(0,o)
$.b_=o
o=$.I
H.a([],p)
o=new G.aX(o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$c().h(0,o)
$.a9=o
o=$.I
H.a([],p)
o=new G.aX(o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$c().h(0,o)
$.aJ=o
o=$.I
H.a([],p)
o=new G.aX(o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$c().h(0,o)
$.aI=o
o=$.I
H.a([],p)
o=new G.aX(o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$c().h(0,o)
$.b8=o
o=H.a(["perfectly generic"],p)
n=$.I
H.a([],p)
o=new G.af(n,o,0.1)
$.$get$c().h(0,o)
$.f9=o
o=H.a(["a sword"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.fb=o
o=H.a(["a hammer"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.tB=o
o=H.a(["a rifle"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.tK=o
o=H.a(["a pistol"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.tH=o
o=H.a(["a blade"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.vO=o
o=H.a(["a dagger"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.tw=o
o=H.a(["a santa"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.hl=o
o=H.a(["a fist"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.vY=o
o=H.a(["claws"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.mn=o
o=H.a(["a grenade"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.mo=o
o=H.a(["a freaking safe"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.wd=o
o=H.a(["a ball"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.el=o
o=H.a(["a trident"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.wm=o
o=H.a(["a card"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.mm=o
o=H.a(["a frying pan"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.ty=o
o=H.a(["a pillow"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.e2=o
o=H.a(["a machinegun"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.tD=o
o=H.a(["a shuriken"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.wh=o
o=H.a(["a sling"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.wk=o
o=H.a(["a yoyo"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.wo=o
o=H.a(["a cane"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.vR=o
o=H.a(["a shield"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.fa=o
o=H.a(["a lance"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.w7=o
o=H.a(["a ax"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.tr=o
o=H.a(["a sign"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.wc=o
o=H.a(["a book"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.au=o
o=H.a(["a broom"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.jj=o
o=H.a(["a club"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.jl=o
o=H.a(["a bow"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.tt=o
o=H.a(["a whip"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.wn=o
o=H.a(["a staff"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.wl=o
o=H.a(["a needle"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.tF=o
o=H.a(["dice"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.tx=o
o=H.a(["a fork"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.vZ=o
o=H.a(["a pigeon???"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,1.3)
$.$get$c().h(0,o)
$.tG=o
o=H.a(["a chainsaw"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.vS=o
o=H.a(["a sickle"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.wi=o
o=H.a(["a shotgun"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.wf=o
o=H.a(["a stick"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.dg=o
o=H.a(["a chain"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.hk=o
o=H.a(["a wrench"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.tN=o
o=H.a(["a shovel"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.wg=o
o=H.a(["a rolling pin"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.tM=o
o=H.a(["a puppet"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.tI=o
o=H.a(["a razor"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.tJ=o
o=H.a(["a pen"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.mr=o
o=H.a(["a bust"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.jk=o
o=H.a(["a bowling ball"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.Ad=o
o=H.a(["a golf club"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.w0=o
o=H.a(["a knife"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.w6=o
o=H.a(["scissors"],p)
n=$.a3
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$c().h(0,o)
$.we=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.G
m=G.Y
l=[m]
k=H.a([$.E,$.av,$.aZ],l)
H.a([],p)
o=new G.d("Forged",k,n,o,0)
$.$get$c().h(0,o)
$.Bw=o
o=H.a([],p)
n=$.v
k=H.a([$.ab,$.av],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.B1=o
o=H.a(["fossilized"],p)
n=$.G
k=H.a([$.ba,$.aw],l)
H.a([],p)
o=new G.d("Fossilized",k,n,o,0)
$.$get$c().h(0,o)
$.Bx=o
o=H.a(["adamantium"],p)
n=$.G
k=H.a([$.ba,$.E],l)
H.a([],p)
o=new G.d("Adamantium",k,n,o,0)
$.$get$c().h(0,o)
$.vN=o
o=H.a([],p)
n=$.v
k=H.a([$.b5,$.aH],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.E8=o
o=H.a(["tatami"],p)
n=$.v
k=H.a([$.P,$.X],l)
H.a([],p)
o=new G.d("Tatami",k,n,o,0)
$.$get$c().h(0,o)
$.En=o
o=H.a(["mesh","chain link"],p)
n=$.v
k=H.a([$.P,$.E],l)
H.a([],p)
o=new G.d("Mesh",k,n,o,0)
$.$get$c().h(0,o)
$.Cw=o
o=H.a(["foil"],p)
n=$.v
k=H.a([$.L,$.E],l)
H.a([],p)
o=new G.d("Foil",k,n,o,0)
$.$get$c().h(0,o)
$.Bs=o
o=H.a(["beanbag"],p)
n=$.v
k=H.a([$.P,$.aw],l)
H.a([],p)
o=new G.d("Beanbag",k,n,o,0)
$.$get$c().h(0,o)
$.A9=o
o=H.a(["pleather","faux fur"],p)
n=$.v
k=H.a([$.cg,$.aA],l)
H.a([],p)
o=new G.d("Faux Fur",k,n,o,0)
$.$get$c().h(0,o)
$.D6=o
o=H.a(["plywood"],p)
n=$.v
k=H.a([$.X,$.L],l)
H.a([],p)
o=new G.d("Plywood",k,n,o,0)
$.$get$c().h(0,o)
$.jm=o
o=H.a(["colossus"],p)
n=$.v
k=H.a([$.E,$.bi],l)
H.a([],p)
o=new G.d("Colossus",k,n,o,0)
$.$get$c().h(0,o)
$.vU=o
o=H.a(["rotting","zombie"],p)
n=$.G
k=H.a([$.bQ,$.bi],l)
H.a([],p)
o=new G.d("Rotting",k,n,o,0)
$.$get$c().h(0,o)
$.Dw=o
o=H.a(["draugr","white walker"],p)
n=$.G
k=H.a([$.bQ,$.bi,$.bl],l)
H.a([],p)
o=new G.d("Draugr",k,n,o,0)
$.$get$c().h(0,o)
$.AZ=o
o=H.a(["Ultraviolet"],p)
n=$.tO
k=H.a([$.b2,$.ak],l)
H.a([],p)
o=new G.d("Ultraviolet",k,n,o,0)
$.$get$c().h(0,o)
$.Cf=o
o=H.a(["Ultraviolence"],p)
n=$.q
k=H.a([$.b2,$.ak,$.av],l)
H.a([],p)
o=new G.d("Ultraviolence",k,n,o,0)
$.$get$c().h(0,o)
$.Ey=o
o=H.a([],p)
n=$.q
k=H.a([$.aE,$.bX],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.AX=o
o=H.a(["candy"],p)
n=$.v
k=H.a([$.ao,$.b7],l)
H.a([],p)
o=new G.d("Candy",k,n,o,0)
$.$get$c().h(0,o)
$.tu=o
o=H.a(["cotton candy"],p)
n=$.v
k=H.a([$.ao,$.P],l)
H.a([],p)
o=new G.d("Cotton Candy",k,n,o,0)
$.$get$c().h(0,o)
$.AI=o
o=H.a(["gummy"],p)
n=$.v
k=H.a([$.ao,$.c9],l)
H.a([],p)
o=new G.d("Gum",k,n,o,0)
$.$get$c().h(0,o)
$.BJ=o
o=H.a(["marrow"],p)
n=$.v
k=H.a([$.ao,$.ba],l)
H.a([],p)
o=new G.d("Marrow",k,n,o,0)
$.$get$c().h(0,o)
$.Cp=o
o=H.a(["toothy"],p)
n=$.a3
k=H.a([$.ba,$.bO],l)
H.a([],p)
o=new G.d("Toothy",k,n,o,0)
$.$get$c().h(0,o)
$.Ev=o
o=H.a(["Frost"],p)
n=$.v
k=H.a([$.aw,$.b7,$.bi],l)
H.a([],p)
o=new G.d("Frost",k,n,o,0)
$.$get$c().h(0,o)
$.By=o
o=H.a(["arsenic","antifreeze"],p)
n=$.q
k=H.a([$.ao,$.bK],l)
H.a([],p)
o=new G.d("Arsenic",k,n,o,0)
$.$get$c().h(0,o)
$.B6=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.v
k=H.a([$.aw,$.b7],l)
H.a([],p)
o=new G.d("Crystal",k,n,o,0)
$.$get$c().h(0,o)
$.tv=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.I
k=H.a([$.ax,$.aB,$.b6,$.Z,$.ai,$.bX,$.a2],l)
H.a([],p)
o=new G.d("Mary Sue",k,n,o,0)
$.$get$c().h(0,o)
$.Cq=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.I
k=H.a([$.b9,$.ak,$.av,$.a_,$.aE,$.Z,$.ai,$.am],l)
H.a([],p)
o=new G.d("Edge Lord",k,n,o,0)
$.$get$c().h(0,o)
$.B4=o
o=H.a(["deadpool"],p)
n=$.a3
k=H.a([$.bQ,$.aY,$.am,$.b6],l)
H.a([],p)
o=new G.d("Deadpool",k,n,o,0)
$.$get$c().h(0,o)
$.AO=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.I
k=H.a([$.b9,$.am],l)
H.a([],p)
o=new G.d("Spoopy",k,n,o,0)
$.$get$c().h(0,o)
$.Eb=o
o=H.a(["wolverine"],p)
n=$.a3
k=H.a([$.ba,$.av,$.aZ],l)
H.a([],p)
o=new G.d("Wolverine",k,n,o,0)
$.$get$c().h(0,o)
$.EK=o
o=H.a(["rabbit's foot"],p)
n=$.a3
k=H.a([$.bX,$.cg],l)
H.a([],p)
o=new G.d("Rabbit's Foot",k,n,o,0)
$.$get$c().h(0,o)
$.wb=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.G
k=H.a([$.aZ,$.X],l)
H.a([],p)
o=new G.d("Tipped",k,n,o,0)
$.$get$c().h(0,o)
$.A2=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a3
k=H.a([$.aZ,$.b_,$.X],l)
H.a([],p)
o=new G.d("Arrow",k,n,o,0)
$.$get$c().h(0,o)
$.tq=o
o=H.a(["training sword","bokken"],p)
n=$.a3
k=H.a([$.X,$.av],l)
H.a([],p)
o=new G.d("Bokken",k,n,o,0)
$.$get$c().h(0,o)
$.C8=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aI,$.am],l)
H.a([],p)
o=new G.d("Irony Type1",k,n,o,0)
$.$get$c().h(0,o)
$.tC=o
o=H.a(["netted","webbed"],p)
n=$.a3
k=H.a([$.bf,$.P],l)
H.a([],p)
o=new G.d("Netted",k,n,o,0)
$.$get$c().h(0,o)
$.CL=o
o=H.a(["barbed wire"],p)
n=$.a3
k=H.a([$.aZ,$.bf,$.E,$.P],l)
H.a([],p)
o=new G.d("Barbed Wire",k,n,o,0)
$.$get$c().h(0,o)
$.A6=o
o=H.a(["morning star"],p)
n=$.a3
k=H.a([$.aZ,$.ab],l)
H.a([],p)
o=new G.d("Morning Star",k,n,o,0)
$.$get$c().h(0,o)
$.CF=o
o=H.a(["decadent"],p)
n=$.I
k=H.a([$.b5,$.bg],l)
H.a([],p)
o=new G.d("Decadent",k,n,o,0)
$.$get$c().h(0,o)
$.AR=o
o=H.a(["SBAHJ"],p)
n=$.q
k=H.a([$.bP,$.am],l)
H.a([],p)
o=new G.d("SBAHJ",k,n,o,0)
$.$get$c().h(0,o)
$.DG=o
o=H.a(["bayonet"],p)
n=$.a3
k=H.a([$.aZ,$.b_],l)
H.a([],p)
o=new G.d("Bayonet",k,n,o,0)
$.$get$c().h(0,o)
$.A8=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.v
k=H.a([$.bl,$.am,$.av],l)
H.a([],p)
o=new G.d("Snoop",k,n,o,0)
$.$get$c().h(0,o)
$.E7=o
o=H.a(["light saber"],p)
n=$.q
k=H.a([$.b2,$.ap,$.av],l)
H.a([],p)
o=new G.d("Light Saber",k,n,o,0)
$.$get$c().h(0,o)
$.Ce=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.I
k=H.a([$.a2,$.aI],l)
H.a([],p)
o=new G.d("Fakey Fake",k,n,o,0)
$.$get$c().h(0,o)
$.Bd=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.I
k=H.a([$.a2,$.b8],l)
H.a([],p)
o=new G.d("Real As Shit",k,n,o,0)
$.$get$c().h(0,o)
$.Dq=o
o=H.a(["skeletal"],p)
n=$.a3
k=H.a([$.b9,$.aE,$.ba],l)
H.a([],p)
o=new G.d("Skeletal",k,n,o,0)
$.$get$c().h(0,o)
$.E1=o
o=H.a(["green sun"],p)
n=$.tP
k=H.a([$.ap,$.c2,$.b2],l)
H.a([],p)
o=new G.d("Green Sun",k,n,o,0)
$.$get$c().h(0,o)
$.tA=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.tO
k=H.a([$.ak,$.ai],l)
H.a([],p)
o=new G.d("Midnight",k,n,o,0)
$.$get$c().h(0,o)
$.CA=o
o=H.a(["radiant","dazzling"],p)
n=$.I
k=H.a([$.a2,$.b2],l)
H.a([],p)
o=new G.d("Radiant",k,n,o,0)
$.$get$c().h(0,o)
$.Dn=o
o=H.a(["edgy"],p)
n=$.I
k=H.a([$.av,$.ak,$.am],l)
H.a([],p)
o=new G.d("Edgy",k,n,o,0)
$.$get$c().h(0,o)
$.B5=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.q
k=H.a([$.c2,$.bo],l)
H.a([],p)
o=new G.d("Warhead",k,n,o,0)
$.$get$c().h(0,o)
$.zW=o
o=H.a(["living"],p)
n=$.G
k=H.a([$.ba,$.bi,$.aq],l)
H.a([],p)
o=new G.d("Living",k,n,o,0)
$.$get$c().h(0,o)
$.Ci=o
o=H.a(["dead","corpse","deceased"],p)
n=$.G
k=H.a([$.ba,$.bi],l)
H.a([],p)
o=new G.d("Dead",k,n,o,0)
$.$get$c().h(0,o)
$.AN=o
o=H.a(["taser"],p)
n=$.q
k=H.a([$.a7,$.bf,$.b_],l)
H.a([],p)
o=new G.d("Taser",k,n,o,0)
$.$get$c().h(0,o)
$.Em=o
o=H.a(["nocturn"],p)
n=$.q
k=H.a([$.ak,$.a9],l)
H.a([],p)
o=new G.d("Nocturn",k,n,o,0)
$.$get$c().h(0,o)
$.CO=o
o=H.a(["dirge"],p)
n=$.q
k=H.a([$.aE,$.a9],l)
H.a([],p)
o=new G.d("Dirge",k,n,o,0)
$.$get$c().h(0,o)
$.AU=o
o=H.a(["Snobbish","Noble"],p)
n=$.I
k=H.a([$.ai,$.bg],l)
H.a([],p)
o=new G.d("Snobbish",k,n,o,0)
$.$get$c().h(0,o)
$.E6=o
o=H.a(["flat"],p)
n=$.I
k=H.a([$.ab,$.a9],l)
H.a([],p)
o=new G.d("Flat(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.Bn=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.av,$.a9],l)
H.a([],p)
o=new G.d("Sharp(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.DP=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.ai,$.a9],l)
H.a([],p)
o=new G.d("Sharp(Clothes)",k,n,o,0)
$.$get$c().h(0,o)
$.DO=o
o=H.a(["Bach's"],p)
n=$.aa
k=H.a([$.Z,$.a9],l)
H.a([],p)
o=new G.d("Bach's",k,n,o,0)
$.$get$c().h(0,o)
$.A4=o
o=H.a(["Mozart's"],p)
n=$.aa
k=H.a([$.a2,$.a9],l)
H.a([],p)
o=new G.d("Mozart's",k,n,o,0)
$.$get$c().h(0,o)
$.CH=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.aa
k=H.a([$.Z,$.c2],l)
H.a([],p)
o=new G.d("Einstein's",k,n,o,0)
$.$get$c().h(0,o)
$.B7=o
o=H.a(["Feynman's"],p)
n=$.aa
k=H.a([$.Z,$.b6],l)
H.a([],p)
o=new G.d("Feynman's",k,n,o,0)
$.$get$c().h(0,o)
$.Bh=o
o=H.a(["Ziptie"],p)
n=$.aa
k=H.a([$.aA,$.bf],l)
H.a([],p)
o=new G.d("Ziptie",k,n,o,0)
$.$get$c().h(0,o)
$.EO=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.q
k=H.a([$.E,$.Z],l)
H.a([],p)
o=new G.d("Mobile",k,n,o,0)
$.$get$c().h(0,o)
$.hm=o
o=H.a(["Sassacre"],p)
n=$.aa
k=H.a([$.c8,$.b6],l)
H.a([],p)
o=new G.d("Sassacre",k,n,o,0)
$.$get$c().h(0,o)
$.DE=o
o=H.a(["Sledge"],p)
n=$.q
k=H.a([$.ab,$.c8],l)
H.a([],p)
o=new G.d("Sledge",k,n,o,0)
$.$get$c().h(0,o)
$.E4=o
o=H.a(["Legal"],p)
n=$.q
k=H.a([$.bf,$.L],l)
H.a([],p)
o=new G.d("Legal",k,n,o,0)
$.$get$c().h(0,o)
$.mq=o
o=H.a(["Clown"],p)
n=$.q
k=H.a([$.b6,$.aJ],l)
H.a([],p)
o=new G.d("Clown",k,n,o,0)
$.$get$c().h(0,o)
$.AC=o
o=H.a(["passionate"],p)
n=$.I
k=H.a([$.ap,$.aB],l)
H.a([],p)
o=new G.d("Passionate",k,n,o,0)
$.$get$c().h(0,o)
$.CY=o
o=H.a(["pinata"],p)
n=$.a3
k=H.a([$.L,$.ao],l)
H.a([],p)
o=new G.d("Pinata",k,n,o,0)
$.$get$c().h(0,o)
$.D1=o
o=H.a(["anvil"],p)
n=$.q
k=H.a([$.ab,$.c8,$.E],l)
H.a([],p)
o=new G.d("Anvil",k,n,o,0)
$.$get$c().h(0,o)
$.A1=o
o=H.a(["flashbang"],p)
n=$.q
k=H.a([$.b2,$.bo],l)
H.a([],p)
o=new G.d("Flashbang",k,n,o,0)
$.$get$c().h(0,o)
$.Bm=o
o=H.a(["smokebomb"],p)
n=$.q
k=H.a([$.ak,$.bo],l)
H.a([],p)
o=new G.d("Smokebomb",k,n,o,0)
$.$get$c().h(0,o)
$.E5=o
o=H.a(["ninja"],p)
n=$.q
k=H.a([$.ak,$.av],l)
H.a([],p)
o=new G.d("Ninja",k,n,o,0)
$.$get$c().h(0,o)
$.CN=o
o=H.a(["techno"],p)
n=$.q
k=H.a([$.a7,$.a9],l)
H.a([],p)
o=new G.d("Techno",k,n,o,0)
$.$get$c().h(0,o)
$.Ep=o
o=H.a(["rock and roll"],p)
n=$.q
k=H.a([$.aw,$.a9],l)
H.a([],p)
o=new G.d("Rock And/Or Roll",k,n,o,0)
$.$get$c().h(0,o)
$.Ds=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a3
k=H.a([$.aq,$.bi,$.b_],l)
H.a([],p)
o=new G.d("Pistol Shrimp",k,n,o,0)
$.$get$c().h(0,o)
$.D2=o
o=H.a(["juggalo"],p)
n=$.q
k=H.a([$.b6,$.a9,$.aJ,$.b9],l)
H.a([],p)
o=new G.d("Juggalo",k,n,o,0)
$.$get$c().h(0,o)
$.w5=o
o=H.a(["shocksauce"],p)
n=$.I
k=H.a([$.am,$.a7],l)
H.a([],p)
o=new G.d("Shock Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.DS=o
o=H.a(["weaksauce"],p)
n=$.I
k=H.a([$.ab,$.am,$.bP],l)
H.a([],p)
o=new G.d("Weak Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.EE=o
o=H.a(["spicy","picante"],p)
n=$.I
k=H.a([$.ap,$.ao],l)
H.a([],p)
o=new G.d("Spicy",k,n,o,0)
$.$get$c().h(0,o)
$.Ea=o
o=H.a(["ice cream","popsicle"],p)
n=$.v
k=H.a([$.bl,$.ao],l)
H.a([],p)
o=new G.d("Popsicle",k,n,o,0)
$.$get$c().h(0,o)
$.BW=o
o=H.a(["popsickle"],p)
n=$.v
k=H.a([$.bl,$.ao,$.av],l)
H.a([],p)
o=new G.d("Popsickle",k,n,o,0)
$.$get$c().h(0,o)
$.De=o
o=H.a(["icepick"],p)
n=$.v
k=H.a([$.bl,$.aZ],l)
H.a([],p)
o=new G.d("Icepick",k,n,o,0)
$.$get$c().h(0,o)
$.BX=o
o=H.a(["schezwan"],p)
n=$.I
k=H.a([$.am,$.ao],l)
H.a([],p)
o=new G.d("Schezwan",k,n,o,0)
$.$get$c().h(0,o)
$.DH=o
o=H.a(["vaporwave"],p)
n=$.q
k=H.a([$.ak,$.a9,$.am,$.a7],l)
H.a([],p)
o=new G.d("Vaporwave",k,n,o,0)
$.$get$c().h(0,o)
$.EC=o
o=H.a(["mallet"],p)
n=$.a3
k=H.a([$.X,$.ab],l)
H.a([],p)
o=new G.d("Mallet",k,n,o,0)
$.$get$c().h(0,o)
$.Co=o
o=H.a(["fidget"],p)
n=$.q
k=H.a([$.aA,$.am],l)
H.a([],p)
o=new G.d("Fidget",k,n,o,0)
$.$get$c().h(0,o)
$.Bj=o
o=H.a(["gold foil"],p)
n=$.v
k=H.a([$.E,$.L,$.bg],l)
H.a([],p)
o=new G.d("Gold Foil",k,n,o,0)
$.$get$c().h(0,o)
$.BG=o
o=H.a(["caviar"],p)
n=$.v
k=H.a([$.ao,$.bg],l)
H.a([],p)
o=new G.d("Caviar",k,n,o,0)
$.$get$c().h(0,o)
$.At=o
o=H.a(["RADioactive"],p)
n=$.I
k=H.a([$.c2,$.am],l)
H.a([],p)
o=new G.d("RADioactive",k,n,o,0)
$.$get$c().h(0,o)
$.Do=o
o=H.a(["glam"],p)
n=$.I
k=H.a([$.aw,$.a9,$.ax],l)
H.a([],p)
o=new G.d("Glam",k,n,o,0)
$.$get$c().h(0,o)
$.BE=o
o=H.a(["hair metal"],p)
n=$.I
k=H.a([$.E,$.a9,$.ax],l)
H.a([],p)
o=new G.d("Hair Metal",k,n,o,0)
$.$get$c().h(0,o)
$.BL=o
o=H.a(["elven","fae","sylvan"],p)
n=$.I
k=H.a([$.a2,$.ax],l)
H.a([],p)
o=new G.d("Elven",k,n,o,0)
$.$get$c().h(0,o)
$.B9=o
o=H.a(["shiny"],p)
n=$.I
k=H.a([$.E,$.ax],l)
H.a([],p)
o=new G.d("Shiny",k,n,o,0)
$.$get$c().h(0,o)
$.DR=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.I
k=H.a([$.bg,$.ax,$.ai],l)
H.a([],p)
o=new G.d("Bespoke",k,n,o,0)
$.$get$c().h(0,o)
$.f8=o
o=H.a(["operatic"],p)
n=$.I
k=H.a([$.bg,$.a9,$.ai],l)
H.a([],p)
o=new G.d("Operatic",k,n,o,0)
$.$get$c().h(0,o)
$.CS=o
o=H.a(["ice","diamond"],p)
n=$.v
k=H.a([$.bg,$.bl],l)
H.a([],p)
o=new G.d("Diamond",k,n,o,0)
$.$get$c().h(0,o)
$.w3=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.I
k=H.a([$.ap,$.bl],l)
H.a([],p)
o=new G.d("Icy Hot",k,n,o,0)
$.$get$c().h(0,o)
$.BY=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.I
k=H.a([$.am,$.bl],l)
H.a([],p)
o=new G.d("Cold As Fuck",k,n,o,0)
$.$get$c().h(0,o)
$.w4=o
o=H.a(["winter's","season's"],p)
n=$.aa
k=H.a([$.bk,$.bl],l)
H.a([],p)
o=new G.d("Winter's",k,n,o,0)
$.$get$c().h(0,o)
$.EH=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.aa
k=H.a([$.a2,$.bl],l)
H.a([],p)
o=new G.d("Christmas",k,n,o,0)
$.$get$c().h(0,o)
$.Ay=o
o=H.a(["Santa Saws"],p)
n=$.aa
k=H.a([$.a2,$.bl,$.av],l)
H.a([],p)
o=new G.d("Santa Saws",k,n,o,0)
$.$get$c().h(0,o)
$.DC=o
o=H.a(["Santa Sleighs"],p)
n=$.aa
k=H.a([$.hl,$.av],l)
H.a([],p)
o=new G.d("Santa Sleighs",k,n,o,0)
$.$get$c().h(0,o)
$.DD=o
o=H.a(["Santa Claws"],p)
n=$.aa
k=H.a([$.hl,$.mn],l)
H.a([],p)
o=new G.d("Santa Claws",k,n,o,0)
$.$get$c().h(0,o)
$.DB=o
o=H.a(["Sandy Claws"],p)
n=$.aa
k=H.a([$.hl,$.mn,$.aw],l)
H.a([],p)
o=new G.d("Sandy Claws",k,n,o,0)
$.$get$c().h(0,o)
$.DA=o
o=H.a(["Silent Night"],p)
n=$.aa
k=H.a([$.hl,$.ak],l)
H.a([],p)
o=new G.d("Silent Night",k,n,o,0)
$.$get$c().h(0,o)
$.DY=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.aa
k=H.a([$.b9,$.bW],l)
H.a([],p)
o=new G.d("Ghost's",k,n,o,0)
$.$get$c().h(0,o)
$.BM=o
o=H.a(["ghoul","mutant"],p)
n=$.v
k=H.a([$.bi,$.c2,$.bQ],l)
H.a([],p)
o=new G.d("Mutant",k,n,o,0)
$.$get$c().h(0,o)
$.CI=o
o=H.a(["skate","skateboard"],p)
n=$.q
k=H.a([$.am,$.E],l)
H.a([],p)
o=new G.d("Skateboard",k,n,o,0)
$.$get$c().h(0,o)
$.E0=o
o=H.a(["microwave"],p)
n=$.q
k=H.a([$.c2,$.a7,$.ao],l)
H.a([],p)
o=new G.d("Microwave",k,n,o,0)
$.$get$c().h(0,o)
$.Cz=o
o=H.a(["orbital"],p)
n=$.q
k=H.a([$.c2,$.a7,$.ao,$.b_],l)
H.a([],p)
o=new G.d("Orbital",k,n,o,0)
$.$get$c().h(0,o)
$.CT=o
o=H.a([],p)
n=$.q
k=H.a([$.ab,$.Z],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.B2=o
o=H.a(["uranium"],p)
n=$.v
k=H.a([$.c2,$.aw],l)
H.a([],p)
o=new G.d("Uranium",k,n,o,0)
$.$get$c().h(0,o)
$.EB=o
o=H.a(["mousepad","jar opener"],p)
n=$.q
k=H.a([$.L,$.c9],l)
H.a([],p)
o=new G.d("Mousepad",k,n,o,0)
$.$get$c().h(0,o)
$.CG=o
o=H.a(["flint"],p)
n=$.v
k=H.a([$.av,$.aw],l)
H.a([],p)
o=new G.d("Sharpened Flint",k,n,o,0)
$.$get$c().h(0,o)
$.Bp=o
o=H.a(["flint"],p)
n=$.v
k=H.a([$.aZ,$.aw],l)
H.a([],p)
o=new G.d("Pointed Flint",k,n,o,0)
$.$get$c().h(0,o)
$.Bq=o
o=H.a(["picnic"],p)
n=$.q
k=H.a([$.aA,$.aZ],l)
H.a([],p)
o=new G.d("Picnic",k,n,o,0)
$.$get$c().h(0,o)
$.D0=o
o=H.a(["xtreme xplosion"],p)
n=$.I
k=H.a([$.am,$.bo],l)
H.a([],p)
o=new G.d("Xtreme Xplosion",k,n,o,0)
$.$get$c().h(0,o)
$.EN=o
o=H.a(["lawn"],p)
n=$.q
k=H.a([$.aA,$.b5],l)
H.a([],p)
o=new G.d("Lawn",k,n,o,0)
$.$get$c().h(0,o)
$.Cc=o
o=H.a(["upholstered"],p)
n=$.v
k=H.a([$.P,$.b5],l)
H.a([],p)
o=new G.d("Upholstered",k,n,o,0)
$.$get$c().h(0,o)
$.EA=o
o=H.a(["leather"],p)
n=$.v
k=H.a([$.bi,$.b5],l)
H.a([],p)
o=new G.d("Leather",k,n,o,0)
$.$get$c().h(0,o)
$.w9=o
o=H.a(["shag"],p)
n=$.v
k=H.a([$.cg,$.b5],l)
H.a([],p)
o=new G.d("Shag",k,n,o,0)
$.$get$c().h(0,o)
$.DN=o
o=H.a(["loyal"],p)
n=$.I
k=H.a([$.ab,$.aB],l)
H.a([],p)
o=new G.d("Loyal",k,n,o,0)
$.$get$c().h(0,o)
$.Cm=o
o=H.a(["porcelain"],p)
n=$.v
k=H.a([$.ax,$.bO],l)
H.a([],p)
o=new G.d("Porcelain",k,n,o,0)
$.$get$c().h(0,o)
$.mt=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a3
k=H.a([$.bg,$.bO],l)
H.a([],p)
o=new G.d("Pork Hollow",k,n,o,0)
$.$get$c().h(0,o)
$.Dg=o
o=H.a(["n1nj4","katana"],p)
n=$.q
k=H.a([$.am,$.av],l)
H.a([],p)
o=new G.d("Katana",k,n,o,0)
$.$get$c().h(0,o)
$.C6=o
o=H.a(["chocolate"],p)
n=$.v
k=H.a([$.aB,$.ao],l)
H.a([],p)
o=new G.d("Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.Ax=o
o=H.a(["wrapped chocolate"],p)
n=$.v
k=H.a([$.aB,$.ao,$.L,$.E],l)
H.a([],p)
o=new G.d("Wrapped Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.Bt=o
o=H.a(["scratch-n-sniff"],p)
n=$.v
k=H.a([$.am,$.L],l)
H.a([],p)
o=new G.d("Scratch-n-sniff",k,n,o,0)
$.$get$c().h(0,o)
$.DJ=o
o=H.a(["mythril","orichalcum"],p)
n=$.v
k=H.a([$.a2,$.E],l)
H.a([],p)
o=new G.d("Mythril",k,n,o,0)
$.$get$c().h(0,o)
$.CJ=o
o=H.a(["titanium","steel"],p)
n=$.v
k=H.a([$.ab,$.E],l)
H.a([],p)
o=new G.d("Titanium",k,n,o,0)
$.$get$c().h(0,o)
$.Eu=o
o=H.a(["lead"],p)
n=$.v
k=H.a([$.c8,$.E],l)
H.a([],p)
o=new G.d("Lead",k,n,o,0)
$.$get$c().h(0,o)
$.w8=o
o=H.a(["satire","parody","onion"],p)
n=$.q
k=H.a([$.aI,$.b6],l)
H.a([],p)
o=new G.d("Satire",k,n,o,0)
$.$get$c().h(0,o)
$.CR=o
o=H.a(["comedy gold"],p)
n=$.I
k=H.a([$.bg,$.b6],l)
H.a([],p)
o=new G.d("Comedy Gold",k,n,o,0)
$.$get$c().h(0,o)
$.AE=o
o=H.a(["dry","sensible chuckle"],p)
n=$.I
k=H.a([$.ai,$.b6],l)
H.a([],p)
o=new G.d("Dry",k,n,o,0)
$.$get$c().h(0,o)
$.B_=o
o=H.a(["polite"],p)
n=$.I
k=H.a([$.b5,$.aI],l)
H.a([],p)
o=new G.d("Polite",k,n,o,0)
$.$get$c().h(0,o)
$.Dc=o
o=H.a(["stradivarius"],p)
n=$.aa
k=H.a([$.ai,$.bg,$.X,$.a9],l)
H.a([],p)
o=new G.d("Stradivarius",k,n,o,0)
$.$get$c().h(0,o)
$.Eh=o
o=H.a(["scientistic"],p)
n=$.I
k=H.a([$.Z,$.aI],l)
H.a([],p)
o=new G.d("Scientistic",k,n,o,0)
$.$get$c().h(0,o)
$.DI=o
o=H.a(["AI"],p)
n=$.q
k=H.a([$.a7,$.aq],l)
H.a([],p)
o=new G.d("AI",k,n,o,0)
$.$get$c().h(0,o)
$.ml=o
o=H.a(["robotic"],p)
n=$.G
k=H.a([$.E,$.a7,$.aq],l)
H.a([],p)
o=new G.d("Robotic",k,n,o,0)
$.$get$c().h(0,o)
$.tL=o
o=H.a(["shrapnel"],p)
n=$.q
k=H.a([$.X,$.bo],l)
H.a([],p)
o=new G.d("Shrapnel",k,n,o,0)
$.$get$c().h(0,o)
$.DU=o
o=H.a(["vocaloid"],p)
n=$.q
k=H.a([$.aq,$.a7,$.a9],l)
H.a([],p)
o=new G.d("Vocaloid",k,n,o,0)
$.$get$c().h(0,o)
$.ED=o
o=H.a(["*Hyun-ae"],p)
n=$.aa
k=H.a([$.aq,$.a7,$.aB],l)
H.a([],p)
o=new G.d("*Hyun-ae",k,n,o,0)
$.$get$c().h(0,o)
$.BV=o
o=H.a(["buckshot"],p)
n=$.q
k=H.a([$.X,$.b_],l)
H.a([],p)
o=new G.d("Buckshot",k,n,o,0)
$.$get$c().h(0,o)
$.Ah=o
o=H.a(["cannon"],p)
n=$.q
k=H.a([$.c8,$.b_],l)
H.a([],p)
o=new G.d("Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.Aq=o
o=H.a(["stationary"],p)
n=$.q
k=H.a([$.ai,$.L],l)
H.a([],p)
o=new G.d("Stationary",k,n,o,0)
$.$get$c().h(0,o)
$.Ef=o
o=H.a([],p)
n=$.q
k=H.a([$.au,$.L],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.CV=o
o=H.a([],p)
n=$.q
k=H.a([$.E,$.b_],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.Cx=o
o=H.a(["papercut"],p)
n=$.q
k=H.a([$.av,$.L],l)
H.a([],p)
o=new G.d("Papercut",k,n,o,0)
$.$get$c().h(0,o)
$.CW=o
o=H.a(["squeaky"],p)
n=$.G
k=H.a([$.ab,$.c9],l)
H.a([],p)
o=new G.d("Squeaky",k,n,o,0)
$.$get$c().h(0,o)
$.Ec=o
o=H.a(["kazoo"],p)
n=$.q
k=H.a([$.aI,$.a9],l)
H.a([],p)
o=new G.d("Kazoo",k,n,o,0)
$.$get$c().h(0,o)
$.C7=o
o=H.a(["bandaid"],p)
n=$.q
k=H.a([$.aY,$.L],l)
H.a([],p)
o=new G.d("Bandaid",k,n,o,0)
$.$get$c().h(0,o)
$.A5=o
o=H.a(["gushers"],p)
n=$.q
k=H.a([$.aY,$.ao],l)
H.a([],p)
o=new G.d("Gushers",k,n,o,0)
$.$get$c().h(0,o)
$.BK=o
o=H.a(["medic"],p)
n=$.q
k=H.a([$.aY,$.b_],l)
H.a([],p)
o=new G.d("Medic",k,n,o,0)
$.$get$c().h(0,o)
$.Cv=o
o=H.a(["sick nasty","ill"],p)
n=$.G
k=H.a([$.am,$.bK],l)
H.a([],p)
o=new G.d("Sick Nasty",k,n,o,0)
$.$get$c().h(0,o)
$.DW=o
o=H.a(["gilded","gold leaf"],p)
n=$.v
k=H.a([$.E,$.X],l)
H.a([],p)
o=new G.d("Gilded",k,n,o,0)
$.$get$c().h(0,o)
$.BD=o
o=H.a(["charging","power cord"],p)
n=$.q
k=H.a([$.aA,$.a7],l)
H.a([],p)
o=new G.d("Charging",k,n,o,0)
$.$get$c().h(0,o)
$.Aw=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.c9,$.av],l)
H.a([],p)
o=new G.d("Rubber Safety",k,n,o,0)
$.$get$c().h(0,o)
$.Dy=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.aA,$.av],l)
H.a([],p)
o=new G.d("Plastic Safety",k,n,o,0)
$.$get$c().h(0,o)
$.Dz=o
o=H.a(["thunderous","thor's"],p)
n=$.I
k=H.a([$.aJ,$.a7],l)
H.a([],p)
o=new G.d("Thunderous",k,n,o,0)
$.$get$c().h(0,o)
$.Es=o
o=H.a(["screeching","dial up"],p)
n=$.I
k=H.a([$.aJ,$.a7,$.Z],l)
H.a([],p)
o=new G.d("Screeching",k,n,o,0)
$.$get$c().h(0,o)
$.DL=o
o=H.a(["mirrored","reflective"],p)
n=$.q
k=H.a([$.b7,$.E],l)
H.a([],p)
o=new G.d("Mirrored",k,n,o,0)
$.$get$c().h(0,o)
$.tE=o
o=H.a(["far seeing","sighted"],p)
n=$.q
k=H.a([$.b7,$.aw,$.a2],l)
H.a([],p)
o=new G.d("Far Seeing",k,n,o,0)
$.$get$c().h(0,o)
$.vV=o
o=H.a(["disabling","non lethal"],p)
n=$.q
k=H.a([$.c9,$.b_],l)
H.a([],p)
o=new G.d("Nonlethal",k,n,o,0)
$.$get$c().h(0,o)
$.AV=o
o=H.a(["fashionable"],p)
n=$.q
k=H.a([$.ax,$.ai],l)
H.a([],p)
o=new G.d("Fashionable",k,n,o,0)
$.$get$c().h(0,o)
$.vX=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.b6,$.am],l)
H.a([],p)
o=new G.d("Ironic Type 2",k,n,o,0)
$.$get$c().h(0,o)
$.C1=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.bP,$.b6],l)
H.a([],p)
o=new G.d("Ironic Type 3",k,n,o,0)
$.$get$c().h(0,o)
$.mp=o
o=H.a(["post-ironic"],p)
n=$.I
k=H.a([$.aI,$.am,$.ai],l)
H.a([],p)
o=new G.d("Post Ironic",k,n,o,0)
$.$get$c().h(0,o)
$.Di=o
o=H.a(["monstrous"],p)
n=$.I
k=H.a([$.bQ,$.aJ,$.b9],l)
H.a([],p)
o=new G.d("Monstrous",k,n,o,0)
$.$get$c().h(0,o)
$.CE=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.q
k=H.a([$.b_,$.am,$.ai],l)
H.a([],p)
o=new G.d("Rooty Tooty Point and Shooty",k,n,o,0)
$.$get$c().h(0,o)
$.Du=o
o=H.a(["golden"],p)
n=$.v
k=H.a([$.E,$.bg],l)
H.a([],p)
o=new G.d("Golden",k,n,o,0)
$.$get$c().h(0,o)
$.tz=o
o=H.a(["platinum"],p)
n=$.v
k=H.a([$.b2,$.E],l)
H.a([],p)
o=new G.d("Platinum",k,n,o,0)
$.$get$c().h(0,o)
$.ms=o
o=H.a(["horseshoe"],p)
n=$.q
k=H.a([$.bX,$.E],l)
H.a([],p)
o=new G.d("Horseshoe",k,n,o,0)
$.$get$c().h(0,o)
$.w2=o
o=H.a(["felt"],p)
n=$.q
k=H.a([$.P,$.cg],l)
H.a([],p)
o=new G.d("Felt",k,n,o,0)
$.$get$c().h(0,o)
$.Bf=o
o=H.a(["marble"],p)
n=$.v
k=H.a([$.aw,$.ai],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.wa=o
o=H.a(["marble"],p)
n=$.v
k=H.a([$.aw,$.c8],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.BI=o
o=H.a(["glitched"],p)
n=$.G
k=H.a([$.bn,$.a7],l)
H.a([],p)
o=new G.d("Glitched",k,n,o,0)
$.$get$c().h(0,o)
$.w_=o
o=H.a(["debugging"],p)
n=$.q
k=H.a([$.aY,$.a7],l)
H.a([],p)
o=new G.d("Debugging",k,n,o,0)
$.$get$c().h(0,o)
$.AQ=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.q
k=H.a([$.E,$.aJ,$.a9],l)
H.a([],p)
o=new G.d("Metalic",k,n,o,0)
$.$get$c().h(0,o)
$.Cy=o
o=H.a(["Simulacrum"],p)
n=$.I
k=H.a([$.aq,$.aI],l)
H.a([],p)
o=new G.d("Simulacrum",k,n,o,0)
$.$get$c().h(0,o)
$.E_=o
o=H.a(["Imitation"],p)
n=$.q
k=H.a([$.ao,$.aI],l)
H.a([],p)
o=new G.d("Imitation",k,n,o,0)
$.$get$c().h(0,o)
$.BZ=o
o=H.a(["Placebo"],p)
n=$.q
k=H.a([$.aY,$.aI],l)
H.a([],p)
o=new G.d("Placebo",k,n,o,0)
$.$get$c().h(0,o)
$.D4=o
o=H.a(["counterfeit"],p)
n=$.q
k=H.a([$.bg,$.aI],l)
H.a([],p)
o=new G.d("Counterfeit",k,n,o,0)
$.$get$c().h(0,o)
$.AJ=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.am,$.aH,$.b6],l)
H.a([],p)
o=new G.d("Surreal1",k,n,o,0)
$.$get$c().h(0,o)
$.Ej=o
o=H.a(["Brainy"],p)
n=$.I
k=H.a([$.Z,$.bi],l)
H.a([],p)
o=new G.d("Brainy",k,n,o,0)
$.$get$c().h(0,o)
$.Ae=o
o=H.a(["Incendiary"],p)
n=$.q
k=H.a([$.ap,$.bo],l)
H.a([],p)
o=new G.d("Incendiary",k,n,o,0)
$.$get$c().h(0,o)
$.C_=o
o=H.a(["C-4"],p)
n=$.v
k=H.a([$.bo,$.aA],l)
H.a([],p)
o=new G.d("C-4",k,n,o,0)
$.$get$c().h(0,o)
$.Al=o
o=H.a(["fae"],p)
n=$.q
k=H.a([$.a2,$.b2,$.bn],l)
H.a([],p)
o=new G.d("Fae",k,n,o,0)
$.$get$c().h(0,o)
$.Bc=o
o=H.a(["Plutonium"],p)
n=$.v
k=H.a([$.E,$.c2],l)
H.a([],p)
o=new G.d("Plutonium",k,n,o,0)
$.$get$c().h(0,o)
$.D8=o
o=H.a(["Lithium"],p)
n=$.v
k=H.a([$.E,$.a7],l)
H.a([],p)
o=new G.d("Lithium",k,n,o,0)
$.$get$c().h(0,o)
$.Ch=o
o=H.a(["Molten"],p)
n=$.v
k=H.a([$.E,$.ap],l)
H.a([],p)
o=new G.d("Molten",k,n,o,0)
$.$get$c().h(0,o)
$.CD=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.v
k=H.a([$.aw,$.ap],l)
H.a([],p)
o=new G.d("Magma",k,n,o,0)
$.$get$c().h(0,o)
$.Cn=o
o=H.a(["Rusty"],p)
n=$.G
k=H.a([$.E,$.bP],l)
H.a([],p)
o=new G.d("Rusty",k,n,o,0)
$.$get$c().h(0,o)
$.Dx=o
o=H.a(["Fonzie"],p)
n=$.q
k=H.a([$.av,$.am,$.ai],l)
H.a([],p)
o=new G.d("Fonzie",k,n,o,0)
$.$get$c().h(0,o)
$.Bu=o
o=H.a(["Romcom"],p)
n=$.q
k=H.a([$.aB,$.b6],l)
H.a([],p)
o=new G.d("Romcom",k,n,o,0)
$.$get$c().h(0,o)
$.Dt=o
o=H.a(["Alluring"],p)
n=$.q
k=H.a([$.ax,$.b2],l)
H.a([],p)
o=new G.d("Alluring",k,n,o,0)
$.$get$c().h(0,o)
$.zZ=o
o=H.a(["Masquerade"],p)
n=$.q
k=H.a([$.ax,$.ak],l)
H.a([],p)
o=new G.d("Masquerade",k,n,o,0)
$.$get$c().h(0,o)
$.Cr=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.q
k=H.a([$.aw,$.bi],l)
H.a([],p)
o=new G.d("Stoneskin",k,n,o,0)
$.$get$c().h(0,o)
$.Eg=o
o=H.a(["Psionic"],p)
n=$.q
k=H.a([$.a2,$.Z],l)
H.a([],p)
o=new G.d("Psionic",k,n,o,0)
$.$get$c().h(0,o)
$.Dl=o
o=H.a(["Dwarven"],p)
n=$.q
k=H.a([$.a2,$.aw],l)
H.a([],p)
o=new G.d("Dwarven",k,n,o,0)
$.$get$c().h(0,o)
$.B3=o
o=H.a(["Elemental","Animated"],p)
n=$.v
k=H.a([$.a2,$.aq],l)
H.a([],p)
o=new G.d("Elemental",k,n,o,0)
$.$get$c().h(0,o)
$.B8=o
o=H.a(["Gourmet"],p)
n=$.I
k=H.a([$.ao,$.ai],l)
H.a([],p)
o=new G.d("Gourmet",k,n,o,0)
$.$get$c().h(0,o)
$.BH=o
o=H.a(["Stained Glass"],p)
n=$.v
k=H.a([$.b7,$.ax,$.bg],l)
H.a([],p)
o=new G.d("Stained Glass",k,n,o,0)
$.$get$c().h(0,o)
$.Ed=o
o=H.a(["Gauze"],p)
n=$.q
k=H.a([$.aY,$.P],l)
H.a([],p)
o=new G.d("Gauze",k,n,o,0)
$.$get$c().h(0,o)
$.BA=o
o=H.a(["Locked"],p)
n=$.G
k=H.a([$.bf,$.bq],l)
H.a([],p)
o=new G.d("Locked",k,n,o,0)
$.$get$c().h(0,o)
$.Cj=o
o=H.a(["Etched"],p)
n=$.q
k=H.a([$.aw,$.L],l)
H.a([],p)
o=new G.d("Etched",k,n,o,0)
$.$get$c().h(0,o)
$.Bb=o
o=H.a(["Papyrus"],p)
n=$.v
k=H.a([$.L,$.b3],l)
H.a([],p)
o=new G.d("Papyrus",k,n,o,0)
$.$get$c().h(0,o)
$.CX=o
o=H.a(["film"],p)
n=$.q
k=H.a([$.L,$.aA],l)
H.a([],p)
o=new G.d("Film",k,n,o,0)
$.$get$c().h(0,o)
$.Bk=o
o=H.a(["Saucey"],p)
n=$.v
k=H.a([$.bn,$.bq,$.bQ],l)
H.a([],p)
o=new G.d("Saucey",k,n,o,0)
$.$get$c().h(0,o)
$.DF=o
o=H.a(["Lottery"],p)
n=$.q
k=H.a([$.L,$.bX],l)
H.a([],p)
o=new G.d("Lottery",k,n,o,0)
$.$get$c().h(0,o)
$.Cl=o
o=H.a(["Blindfolded"],p)
n=$.q
k=H.a([$.ak,$.P],l)
H.a([],p)
o=new G.d("Blindfolded",k,n,o,0)
$.$get$c().h(0,o)
$.vP=o
o=H.a(["Possessed"],p)
n=$.G
k=H.a([$.bW,$.bi],l)
H.a([],p)
o=new G.d("Possessed",k,n,o,0)
$.$get$c().h(0,o)
$.Dh=o
o=H.a(["Infernal"],p)
n=$.I
k=H.a([$.bW,$.ap],l)
H.a([],p)
o=new G.d("Infernal",k,n,o,0)
$.$get$c().h(0,o)
$.C0=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.q
k=H.a([$.X,$.b8,$.tI,$.aq],l)
H.a([],p)
o=new G.d("Geppetto",k,n,o,0)
$.$get$c().h(0,o)
$.BB=o
o=H.a(["Abominable"],p)
n=$.I
k=H.a([$.bi,$.bn],l)
H.a([],p)
o=new G.d("Abominable",k,n,o,0)
$.$get$c().h(0,o)
$.zX=o
o=H.a(["Ashen"],p)
n=$.q
k=H.a([$.aB,$.aE],l)
H.a([],p)
o=new G.d("Ashen",k,n,o,0)
$.$get$c().h(0,o)
$.A3=o
o=H.a(["Pale"],p)
n=$.q
k=H.a([$.aB,$.bk],l)
H.a([],p)
o=new G.d("Pale",k,n,o,0)
$.$get$c().h(0,o)
$.CU=o
o=H.a(["Pitch"],p)
n=$.q
k=H.a([$.aB,$.bq],l)
H.a([],p)
o=new G.d("Pitch",k,n,o,0)
$.$get$c().h(0,o)
$.D3=o
o=H.a(["Lit"],p)
n=$.I
k=H.a([$.am,$.ap],l)
H.a([],p)
o=new G.d("Lit",k,n,o,0)
$.$get$c().h(0,o)
$.Cg=o
o=H.a(["Hypnotizing"],p)
n=$.q
k=H.a([$.a2,$.bk],l)
H.a([],p)
o=new G.d("Hypnotizing",k,n,o,0)
$.$get$c().h(0,o)
$.BT=o
o=H.a(["Tranquilizing"],p)
n=$.q
k=H.a([$.bk,$.bf],l)
H.a([],p)
o=new G.d("Tranquilizing",k,n,o,0)
$.$get$c().h(0,o)
$.Ex=o
o=H.a([],p)
n=$.q
k=H.a([$.bk,$.bq],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$c().h(0,o)
$.Ao=o
o=H.a(["Ghost Rider's"],p)
n=$.aa
k=H.a([$.hk,$.ap,$.bW],l)
H.a([],p)
o=new G.d("Ghost Rider",k,n,o,0)
$.$get$c().h(0,o)
$.BC=o
o=H.a(["Logical"],p)
n=$.I
k=H.a([$.Z,$.bl],l)
H.a([],p)
o=new G.d("Logical",k,n,o,0)
$.$get$c().h(0,o)
$.Ck=o
o=H.a(["Duelist's"],p)
n=$.aa
k=H.a([$.b_,$.ai],l)
H.a([],p)
o=new G.d("Duelist's",k,n,o,0)
$.$get$c().h(0,o)
$.B0=o
o=H.a(["Silenced"],p)
n=$.G
k=H.a([$.b_,$.ak],l)
H.a([],p)
o=new G.d("Silenced",k,n,o,0)
$.$get$c().h(0,o)
$.wj=o
o=H.a(["Deudly"],p)
n=$.G
k=H.a([$.b_,$.bP],l)
H.a([],p)
o=new G.d("Deudly",k,n,o,0)
$.$get$c().h(0,o)
$.AP=o
o=H.a(["Screaming"],p)
n=$.G
k=H.a([$.aJ,$.b9],l)
H.a([],p)
o=new G.d("Screaming",k,n,o,0)
$.$get$c().h(0,o)
$.DK=o
o=H.a(["Cacophonous"],p)
n=$.I
k=H.a([$.bQ,$.a9],l)
H.a([],p)
o=new G.d("Cacophonous",k,n,o,0)
$.$get$c().h(0,o)
$.Am=o
o=H.a(["Sublime"],p)
n=$.I
k=H.a([$.bQ,$.ax],l)
H.a([],p)
o=new G.d("Sublime",k,n,o,0)
$.$get$c().h(0,o)
$.Ei=o
o=H.a(["Masterwork"],p)
n=$.v
k=H.a([$.b8,$.bg],l)
H.a([],p)
o=new G.d("Masterwork",k,n,o,0)
$.$get$c().h(0,o)
$.Ct=o
o=H.a(["BroodFester"],p)
n=$.q
k=H.a([$.aq,$.b9,$.bn,$.a2],l)
H.a([],p)
o=new G.d("BroodFester",k,n,o,0)
$.$get$c().h(0,o)
$.Ag=o
o=H.a(["[REDACTED]"],p)
n=$.q
k=H.a([$.bn,$.ak],l)
H.a([],p)
o=new G.d("[REDACTED]",k,n,o,0)
$.$get$c().h(0,o)
$.Dr=o
o=H.a(["Pop Rocks"],p)
n=$.q
k=H.a([$.ao,$.bo],l)
H.a([],p)
o=new G.d("Pop Rocks",k,n,o,0)
$.$get$c().h(0,o)
$.Dd=o
o=H.a(["Disguised"],p)
n=$.G
k=H.a([$.ak,$.aI],l)
H.a([],p)
o=new G.d("Disguised",k,n,o,0)
$.$get$c().h(0,o)
$.AW=o
o=H.a(["Haunted"],p)
n=$.G
k=H.a([$.aH,$.bW],l)
H.a([],p)
o=new G.d("Haunted",k,n,o,0)
$.$get$c().h(0,o)
$.BN=o
o=H.a(["Cognitohazardous"],p)
n=$.G
k=H.a([$.bn,$.Z],l)
H.a([],p)
o=new G.d("Cognitohazardous",k,n,o,0)
$.$get$c().h(0,o)
$.AD=o
o=H.a(["Staticy"],p)
n=$.G
k=H.a([$.aH,$.a7],l)
H.a([],p)
o=new G.d("Staticy",k,n,o,0)
$.$get$c().h(0,o)
$.Ee=o
o=H.a(["Jadite"],p)
n=$.q
k=H.a([$.b7,$.c2],l)
H.a([],p)
o=new G.d("Jadite",k,n,o,0)
$.$get$c().h(0,o)
$.C4=o
o=H.a(["Tickling"],p)
n=$.q
k=H.a([$.b6,$.aH],l)
H.a([],p)
o=new G.d("Tickling",k,n,o,0)
$.$get$c().h(0,o)
$.Et=o
o=H.a(["Composite"],p)
n=$.q
k=H.a([$.E,$.bO],l)
H.a([],p)
o=new G.d("Composite",k,n,o,0)
$.$get$c().h(0,o)
$.AF=o
o=H.a(["High-Powered"],p)
n=$.G
k=H.a([$.bo,$.b_],l)
H.a([],p)
o=new G.d("High-Powered",k,n,o,0)
$.$get$c().h(0,o)
$.BO=o
o=H.a(["Concussive"],p)
n=$.q
k=H.a([$.bo,$.ab],l)
H.a([],p)
o=new G.d("Concussive",k,n,o,0)
$.$get$c().h(0,o)
$.AG=o
o=H.a(["Down"],p)
n=$.v
k=H.a([$.b5,$.bz],l)
H.a([],p)
o=new G.d("Down",k,n,o,0)
$.$get$c().h(0,o)
$.AY=o
o=H.a(["Prickly"],p)
n=$.v
k=H.a([$.aH,$.aZ],l)
H.a([],p)
o=new G.d("Prickly",k,n,o,0)
$.$get$c().h(0,o)
$.Dk=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.q
k=H.a([$.aH,$.ak,$.a7],l)
H.a([],p)
o=new G.d("Deep-Web",k,n,o,0)
$.$get$c().h(0,o)
$.AS=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.v
k=H.a([$.aZ,$.av],l)
H.a([],p)
o=new G.d("Jagged",k,n,o,0)
$.$get$c().h(0,o)
$.C5=o
o=H.a(["Nanofiber"],p)
n=$.v
k=H.a([$.P,$.Z],l)
H.a([],p)
o=new G.d("Nanofiber",k,n,o,0)
$.$get$c().h(0,o)
$.CK=o
o=H.a(["Clanging"],p)
n=$.q
k=H.a([$.E,$.aJ],l)
H.a([],p)
o=new G.d("Clanging",k,n,o,0)
$.$get$c().h(0,o)
$.Az=o
o=H.a(["Silver"],p)
n=$.v
k=H.a([$.E,$.ai],l)
H.a([],p)
o=new G.d("Silver",k,n,o,0)
$.$get$c().h(0,o)
$.DZ=o
o=H.a(["Withered"],p)
n=$.G
k=H.a([$.aE,$.b3],l)
H.a([],p)
o=new G.d("Withered",k,n,o,0)
$.$get$c().h(0,o)
$.EJ=o
o=H.a(["Shattered"],p)
n=$.G
k=H.a([$.b7,$.bP],l)
H.a([],p)
o=new G.d("Shattered",k,n,o,0)
$.$get$c().h(0,o)
$.DQ=o
o=H.a(["Miner's"],p)
n=$.aa
k=H.a([$.aw,$.E],l)
H.a([],p)
o=new G.d("Miner's",k,n,o,0)
$.$get$c().h(0,o)
$.CB=o
o=H.a(["Singing"],p)
n=$.q
k=H.a([$.a9,$.aq],l)
H.a([],p)
o=new G.d("Singing",k,n,o,0)
$.$get$c().h(0,o)
$.DX=o
o=H.a(["Mitochondrial"],p)
n=$.q
k=H.a([$.bi,$.a7],l)
H.a([],p)
o=new G.d("Mitochondrial",k,n,o,0)
$.$get$c().h(0,o)
$.CC=o
o=H.a(["Blackout","EMP"],p)
n=$.q
k=H.a([$.ak,$.a7],l)
H.a([],p)
o=new G.d("Blackout",k,n,o,0)
$.$get$c().h(0,o)
$.Ab=o
o=H.a(["Asbestos"],p)
n=$.v
k=H.a([$.aw,$.bK],l)
H.a([],p)
o=new G.d("Asbestos",k,n,o,0)
$.$get$c().h(0,o)
$.zY=o
o=H.a(["Mercurial"],p)
n=$.v
k=H.a([$.bK,$.E],l)
H.a([],p)
o=new G.d("Mercurial",k,n,o,0)
$.$get$c().h(0,o)
$.Cu=o
o=H.a(["Bulletproof"],p)
n=$.v
k=H.a([$.P,$.ab],l)
H.a([],p)
o=new G.d("Bulletproof",k,n,o,0)
$.$get$c().h(0,o)
$.Aj=o
o=H.a(["Cotton"],p)
n=$.v
k=H.a([$.b3,$.P],l)
H.a([],p)
o=new G.d("Cotton",k,n,o,0)
$.$get$c().h(0,o)
$.AH=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.q
k=H.a([$.bq,$.b2],l)
H.a([],p)
o=new G.d("Blinding",k,n,o,0)
$.$get$c().h(0,o)
$.Ac=o
o=H.a(["Brilliant"],p)
n=$.I
k=H.a([$.b2,$.Z],l)
H.a([],p)
o=new G.d("Brilliant",k,n,o,0)
$.$get$c().h(0,o)
$.Af=o
o=H.a(["Offensive"],p)
n=$.I
k=H.a([$.bq,$.Z],l)
H.a([],p)
o=new G.d("Offensive",k,n,o,0)
$.$get$c().h(0,o)
$.CQ=o
o=H.a(["Poached"],p)
n=$.G
k=H.a([$.bi,$.bg],l)
H.a([],p)
o=new G.d("Poached",k,n,o,0)
$.$get$c().h(0,o)
$.D9=o
o=H.a(["Tapestry"],p)
n=$.v
k=H.a([$.P,$.ax],l)
H.a([],p)
o=new G.d("Tapestry",k,n,o,0)
$.$get$c().h(0,o)
$.El=o
o=H.a(["Itchy"],p)
n=$.I
k=H.a([$.P,$.aH],l)
H.a([],p)
o=new G.d("Itchy",k,n,o,0)
$.$get$c().h(0,o)
$.C2=o
o=H.a(["Wishbone"],p)
n=$.v
k=H.a([$.bX,$.ba],l)
H.a([],p)
o=new G.d("Wishbone",k,n,o,0)
$.$get$c().h(0,o)
$.EI=o
o=H.a(["Rattling"],p)
n=$.G
k=H.a([$.aJ,$.ba],l)
H.a([],p)
o=new G.d("Rattling",k,n,o,0)
$.$get$c().h(0,o)
$.Dp=o
o=H.a(["Cranial"],p)
n=$.v
k=H.a([$.Z,$.ba],l)
H.a([],p)
o=new G.d("Cranial",k,n,o,0)
$.$get$c().h(0,o)
$.AL=o
o=H.a(["Humerus"],p)
n=$.v
k=H.a([$.b6,$.ba],l)
H.a([],p)
o=new G.d("Humerus",k,n,o,0)
$.$get$c().h(0,o)
$.BR=o
o=H.a(["Massage"],p)
n=$.q
k=H.a([$.aY,$.b5],l)
H.a([],p)
o=new G.d("Massage",k,n,o,0)
$.$get$c().h(0,o)
$.Cs=o
o=H.a(["Pestersome","Irksome"],p)
n=$.I
k=H.a([$.aJ,$.bq],l)
H.a([],p)
o=new G.d("Pestersome",k,n,o,0)
$.$get$c().h(0,o)
$.CZ=o
o=H.a(["Shockwave"],p)
n=$.q
k=H.a([$.aJ,$.bo],l)
H.a([],p)
o=new G.d("Shockwave",k,n,o,0)
$.$get$c().h(0,o)
$.DT=o
o=H.a(["Antivenom"],p)
n=$.q
k=H.a([$.bK,$.aY],l)
H.a([],p)
o=new G.d("Antivenom",k,n,o,0)
$.$get$c().h(0,o)
$.A0=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.v
k=H.a([$.ap,$.a2],l)
H.a([],p)
o=new G.d("Will O Wisp",k,n,o,0)
$.$get$c().h(0,o)
$.EF=o
o=H.a(["Fiberglass"],p)
n=$.v
k=H.a([$.P,$.b7],l)
H.a([],p)
o=new G.d("Fiberglass",k,n,o,0)
$.$get$c().h(0,o)
$.Bi=o
o=H.a(["Skull"],p)
n=$.v
k=H.a([$.ba,$.b9],l)
H.a([],p)
o=new G.d("Skull",k,n,o,0)
$.$get$c().h(0,o)
$.E2=o
o=H.a(["Enchanted"],p)
n=$.G
k=H.a([$.a2,$.bX],l)
H.a([],p)
o=new G.d("Enchanted",k,n,o,0)
$.$get$c().h(0,o)
$.Ba=o
o=H.a(["Berserker's"],p)
n=$.aa
k=H.a([$.a2,$.bq],l)
H.a([],p)
o=new G.d("Berserker's",k,n,o,0)
$.$get$c().h(0,o)
$.Aa=o
o=H.a(["Clerical"],p)
n=$.aa
k=H.a([$.a2,$.aY],l)
H.a([],p)
o=new G.d("Clerical",k,n,o,0)
$.$get$c().h(0,o)
$.AA=o
o=H.a(["Cauterizing"],p)
n=$.q
k=H.a([$.aY,$.ap],l)
H.a([],p)
o=new G.d("Cauterizing",k,n,o,0)
$.$get$c().h(0,o)
$.As=o
o=H.a(["X-Ray"],p)
n=$.q
k=H.a([$.c2,$.b2],l)
H.a([],p)
o=new G.d("X-Ray",k,n,o,0)
$.$get$c().h(0,o)
$.EM=o
o=H.a(["Clever"],p)
n=$.I
k=H.a([$.Z,$.bX],l)
H.a([],p)
o=new G.d("Clever",k,n,o,0)
$.$get$c().h(0,o)
$.AB=o
o=H.a(["Fireplace"],p)
n=$.q
k=H.a([$.b5,$.ap],l)
H.a([],p)
o=new G.d("Fireplace",k,n,o,0)
$.$get$c().h(0,o)
$.Bl=o
o=H.a(["Crackling"],p)
n=$.G
k=H.a([$.aJ,$.ap],l)
H.a([],p)
o=new G.d("Crackling",k,n,o,0)
$.$get$c().h(0,o)
$.AK=o
o=H.a(["Thumping"],p)
n=$.G
k=H.a([$.aJ,$.c8],l)
H.a([],p)
o=new G.d("Thumping",k,n,o,0)
$.$get$c().h(0,o)
$.Er=o
o=H.a(["Shrieking","Banshee"],p)
n=$.G
k=H.a([$.bW,$.aJ],l)
H.a([],p)
o=new G.d("Banshee",k,n,o,0)
$.$get$c().h(0,o)
$.DV=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.b6,$.bn],l)
H.a([],p)
o=new G.d("Surreal2",k,n,o,0)
$.$get$c().h(0,o)
$.Ek=o
o=H.a(["Aloe","Willowbark"],p)
n=$.q
k=H.a([$.aY,$.b3],l)
H.a([],p)
o=new G.d("Aloe",k,n,o,0)
$.$get$c().h(0,o)
$.A_=o
o=H.a(["Rose"],p)
n=$.q
k=H.a([$.aB,$.b3],l)
H.a([],p)
o=new G.d("Rose",k,n,o,0)
$.$get$c().h(0,o)
$.Dv=o
o=H.a(["Knock Knock"],p)
n=$.q
k=H.a([$.b6,$.ab],l)
H.a([],p)
o=new G.d("Knock Knock",k,n,o,0)
$.$get$c().h(0,o)
$.Ca=o
o=H.a(["Lifesteal"],p)
n=$.q
k=H.a([$.a2,$.bK],l)
H.a([],p)
o=new G.d("Lifesteal",k,n,o,0)
$.$get$c().h(0,o)
$.Cd=o
o=H.a(["Tragic"],p)
n=$.q
k=H.a([$.ax,$.aE],l)
H.a([],p)
o=new G.d("Tragic",k,n,o,0)
$.$get$c().h(0,o)
$.Ew=o
o=H.a(["Slapstick"],p)
n=$.q
k=H.a([$.av,$.b6],l)
H.a([],p)
o=new G.d("Slapstick",k,n,o,0)
$.$get$c().h(0,o)
$.E3=o
o=H.a(["Gross Out"],p)
n=$.q
k=H.a([$.bQ,$.b6],l)
H.a([],p)
o=new G.d("Gross Out",k,n,o,0)
$.$get$c().h(0,o)
$.w1=o
o=H.a(["Flowery"],p)
n=$.v
k=H.a([$.ax,$.b3],l)
H.a([],p)
o=new G.d("Flowery",k,n,o,0)
$.$get$c().h(0,o)
$.Br=o
o=H.a(["Poison Ivy"],p)
n=$.v
k=H.a([$.bK,$.b3],l)
H.a([],p)
o=new G.d("Poison Ivy",k,n,o,0)
$.$get$c().h(0,o)
$.Db=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.G
k=H.a([$.a2,$.bz],l)
H.a([],p)
o=new G.d("Winged",k,n,o,0)
$.$get$c().h(0,o)
$.EG=o
o=H.a(["Forbidden Fruit"],p)
n=$.q
k=H.a([$.b3,$.ao,$.aE],l)
H.a([],p)
o=new G.d("Forbidden Fruit",k,n,o,0)
$.$get$c().h(0,o)
$.Bv=o
o=H.a(["Lawful"],p)
n=$.I
k=H.a([$.bf,$.aq],l)
H.a([],p)
o=new G.d("Lawful",k,n,o,0)
$.$get$c().h(0,o)
$.Cb=o
o=H.a(["Chaotic"],p)
n=$.I
k=H.a([$.bq,$.aq],l)
H.a([],p)
o=new G.d("Chaotic",k,n,o,0)
$.$get$c().h(0,o)
$.vT=o
o=H.a(["Hypothermic"],p)
n=$.G
k=H.a([$.aE,$.bl],l)
H.a([],p)
o=new G.d("Hypothermic",k,n,o,0)
$.$get$c().h(0,o)
$.BU=o
o=H.a(["Hyperthermic"],p)
n=$.G
k=H.a([$.aE,$.ap],l)
H.a([],p)
o=new G.d("Hyperthermic",k,n,o,0)
$.$get$c().h(0,o)
$.BS=o
o=H.a(["Shackled"],p)
n=$.G
k=H.a([$.bf,$.c8],l)
H.a([],p)
o=new G.d("Shackled",k,n,o,0)
$.$get$c().h(0,o)
$.DM=o
o=H.a(["Poetic"],p)
n=$.I
k=H.a([$.Z,$.aB],l)
H.a([],p)
o=new G.d("Poetic",k,n,o,0)
$.$get$c().h(0,o)
$.Da=o
o=H.a(["Holographic"],p)
n=$.v
k=H.a([$.b2,$.Z,$.b7,$.a7],l)
H.a([],p)
o=new G.d("Holographic",k,n,o,0)
$.$get$c().h(0,o)
$.BP=o
o=H.a(["Casket","Coffin"],p)
n=$.v
k=H.a([$.X,$.aE],l)
H.a([],p)
o=new G.d("Casket",k,n,o,0)
$.$get$c().h(0,o)
$.Ar=o
o=H.a(["Spectral"],p)
n=$.v
k=H.a([$.bW,$.a2],l)
H.a([],p)
o=new G.d("Spectral",k,n,o,0)
$.$get$c().h(0,o)
$.E9=o
o=H.a(["Phoenix"],p)
n=$.v
k=H.a([$.ap,$.bz],l)
H.a([],p)
o=new G.d("Phoenix",k,n,o,0)
$.$get$c().h(0,o)
$.D_=o
o=H.a(["Tattered"],p)
n=$.G
k=H.a([$.P,$.aE],l)
H.a([],p)
o=new G.d("Tattered",k,n,o,0)
$.$get$c().h(0,o)
$.Eo=o
o=H.a(["Woodwind","Reed"],p)
n=$.q
k=H.a([$.a9,$.X],l)
H.a([],p)
o=new G.d("Woodwind",k,n,o,0)
$.$get$c().h(0,o)
$.EL=o
o=H.a(["Bone Hurting"],p)
n=$.q
k=H.a([$.aH,$.ba],l)
H.a([],p)
o=new G.d("Bone Hurting",k,n,o,0)
$.$get$c().h(0,o)
$.ts=o
o=H.a(["Bone Healing:"],p)
n=$.q
k=H.a([$.aY,$.ba],l)
H.a([],p)
o=new G.d("Bone Healing:",k,n,o,0)
$.$get$c().h(0,o)
$.vQ=o
o=H.a(["Calcium"],p)
n=$.v
k=H.a([$.ba,$.aY,$.ao],l)
H.a([],p)
o=new G.d("Calcium",k,n,o,0)
$.$get$c().h(0,o)
$.An=o
o=H.a(["Fleece"],p)
n=$.v
k=H.a([$.P,$.ap],l)
H.a([],p)
o=new G.d("Fleece",k,n,o,0)
$.$get$c().h(0,o)
$.Bo=o
o=H.a(["Potted"],p)
n=$.v
k=H.a([$.bO,$.b3],l)
H.a([],p)
o=new G.d("Potted",k,n,o,0)
$.$get$c().h(0,o)
$.Dj=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.v
k=H.a([$.E,$.ao],l)
H.a([],p)
o=new G.d("Canned",k,n,o,0)
$.$get$c().h(0,o)
$.Ap=o
o=H.a(["Diseased"],p)
n=$.G
k=H.a([$.aE,$.bi],l)
H.a([],p)
o=new G.d("Diseased",k,n,o,0)
$.$get$c().h(0,o)
$.AT=o
o=H.a(["Porcupine"],p)
n=$.v
k=H.a([$.aZ,$.cg],l)
H.a([],p)
o=new G.d("Porcupine",k,n,o,0)
$.$get$c().h(0,o)
$.Df=o
o=H.a(["Fanged"],p)
n=$.G
k=H.a([$.ba,$.aZ],l)
H.a([],p)
o=new G.d("Fanged",k,n,o,0)
$.$get$c().h(0,o)
$.Be=o
o=H.a(["Basalt"],p)
n=$.v
k=H.a([$.aw,$.ak],l)
H.a([],p)
o=new G.d("Basalt",k,n,o,0)
$.$get$c().h(0,o)
$.A7=o
o=H.a(["Obsidian"],p)
n=$.v
k=H.a([$.b7,$.ak],l)
H.a([],p)
o=new G.d("Obsidian",k,n,o,0)
$.$get$c().h(0,o)
$.CP=o
o=H.a(["Fenestrated"],p)
n=$.v
k=H.a([$.b7,$.X],l)
H.a([],p)
o=new G.d("Fenestrated",k,n,o,0)
$.$get$c().h(0,o)
$.Bg=o
o=H.a(["Plexiglass"],p)
n=$.v
k=H.a([$.b7,$.aA],l)
H.a([],p)
o=new G.d("Plexiglass",k,n,o,0)
$.$get$c().h(0,o)
$.D7=o
o=H.a(["Ceramic Wrap"],p)
n=$.q
k=H.a([$.bO,$.L],l)
H.a([],p)
o=new G.d("Ceramic Wrap",k,n,o,0)
$.$get$c().h(0,o)
$.Av=o
o=H.a(["Fungal"],p)
n=$.v
k=H.a([$.b3,$.bQ],l)
H.a([],p)
o=new G.d("Fungal",k,n,o,0)
$.$get$c().h(0,o)
$.Bz=o
o=H.a(["Thorny"],p)
n=$.G
k=H.a([$.b3,$.aZ],l)
H.a([],p)
o=new G.d("Thorny",k,n,o,0)
$.$get$c().h(0,o)
$.Eq=o
o=H.a(["Bulbed"],p)
n=$.G
k=H.a([$.b3,$.ab],l)
H.a([],p)
o=new G.d("Bulbed",k,n,o,0)
$.$get$c().h(0,o)
$.Ai=o
o=H.a(["Glass Cannon"],p)
n=$.q
k=H.a([$.b7,$.b_],l)
H.a([],p)
o=new G.d("Glass Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.BF=o
o=H.a(["Caoutchouc"],p)
n=$.q
k=H.a([$.b3,$.c9],l)
H.a([],p)
o=new G.d("Caoutchouc",k,n,o,0)
$.$get$c().h(0,o)
$.D5=o
o=H.a(["Cellulose"],p)
n=$.v
k=H.a([$.b3,$.aA],l)
H.a([],p)
o=new G.d("Cellulose",k,n,o,0)
$.$get$c().h(0,o)
$.Au=o
o=H.a(["Horrorcore"],p)
n=$.q
k=H.a([$.a9,$.b9],l)
H.a([],p)
o=new G.d("Horrorcore",k,n,o,0)
$.$get$c().h(0,o)
$.BQ=o
o=H.a(["Nightcore"],p)
n=$.q
k=H.a([$.bn,$.a9],l)
H.a([],p)
o=new G.d("Nightcore",k,n,o,0)
$.$get$c().h(0,o)
$.CM=o
o=H.a(["Crazy Bus"],p)
n=$.q
k=H.a([$.bn,$.a7,$.a9],l)
H.a([],p)
o=new G.d("Crazy Bus",k,n,o,0)
$.$get$c().h(0,o)
$.AM=o
o=H.a(["Burdock"],p)
n=$.v
k=H.a([$.b3,$.cg],l)
H.a([],p)
o=new G.d("Burdock",k,n,o,0)
$.$get$c().h(0,o)
$.Ak=o
o=H.a(["Necrotic"],p)
n=$.G
k=H.a([$.ba,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Necrotic",k,n,o,0))
o=H.a(["Stem"],p)
n=$.v
k=H.a([$.ba,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stem",k,n,o,0))
o=H.a(["DryBone"],p)
n=$.G
k=H.a([$.ba,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("DryBone",k,n,o,0))
o=H.a(["XyloBone"],p)
n=$.q
k=H.a([$.ba,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("XyloBone",k,n,o,0))
o=H.a(["Ribcage"],p)
n=$.v
k=H.a([$.ba,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ribcage",k,n,o,0))
o=H.a(["BoneZone"],p)
n=$.q
k=H.a([$.ba,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("BoneZone",k,n,o,0))
o=H.a(["Creaky"],p)
n=$.I
k=H.a([$.X,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Creaky",k,n,o,0))
o=H.a(["Maple"],p)
n=$.v
k=H.a([$.X,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Maple",k,n,o,0))
o=H.a(["Mahagony"],p)
n=$.v
k=H.a([$.X,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mahagony",k,n,o,0))
o=H.a(["Fenced"],p)
n=$.G
k=H.a([$.X,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fenced",k,n,o,0))
o=H.a(["Bocote"],p)
n=$.v
k=H.a([$.X,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bocote",k,n,o,0))
o=H.a(["Incense"],p)
n=$.v
k=H.a([$.X,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incense",k,n,o,0))
o=H.a(["Ebony"],p)
n=$.q
k=H.a([$.X,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebony",k,n,o,0))
o=H.a(["Birch"],p)
n=$.v
k=H.a([$.X,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Birch",k,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.q
k=H.a([$.X,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knock-on-Wood",k,n,o,0))
o=H.a(["Firewood"],p)
n=$.q
k=H.a([$.X,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firewood",k,n,o,0))
o=H.a(["BlackForest"],p)
n=$.aa
k=H.a([$.X,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackForest",k,n,o,0))
o=H.a(["Tree"],p)
n=$.v
k=H.a([$.X,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tree",k,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.v
k=H.a([$.X,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ebonwood",k,n,o,0))
o=H.a(["Bark"],p)
n=$.v
k=H.a([$.X,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bark",k,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.q
k=H.a([$.X,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Caveman's",k,n,o,0))
o=H.a(["3D Printed"],p)
n=$.v
k=H.a([$.aA,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("3D Printed",k,n,o,0))
o=H.a(["Thesis"],p)
n=$.q
k=H.a([$.L,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thesis",k,n,o,0))
o=H.a(["Graphene"],p)
n=$.v
k=H.a([$.L,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graphene",k,n,o,0))
o=H.a(["Prophecy"],p)
n=$.q
k=H.a([$.L,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prophecy",k,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.q
k=H.a([$.P,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedsheet",k,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.v
k=H.a([$.aw,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gemstone",k,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.q
k=H.a([$.aw,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pet Rock",k,n,o,0))
o=H.a(["Sand"],p)
n=$.v
k=H.a([$.aw,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sand",k,n,o,0))
o=H.a(["Geode"],p)
n=$.v
k=H.a([$.aw,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Geode",k,n,o,0))
o=H.a(["Silicon"],p)
n=$.v
k=H.a([$.aw,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silicon",k,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.v
k=H.a([$.aw,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryolite",k,n,o,0))
o=H.a(["Meteor"],p)
n=$.v
k=H.a([$.aw,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meteor",k,n,o,0))
o=H.a(["Carbon"],p)
n=$.v
k=H.a([$.aw,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon",k,n,o,0))
o=H.a(["Mossy"],p)
n=$.G
k=H.a([$.aw,$.cg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mossy",k,n,o,0))
o=H.a(["Lensed"],p)
n=$.G
k=H.a([$.Z,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lensed",k,n,o,0))
o=H.a(["Hide"],p)
n=$.G
k=H.a([$.P,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hide",k,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.q
k=H.a([$.P,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.d("FeatherBoa",k,n,o,0))
o=H.a(["Tacky"],p)
n=$.I
k=H.a([$.P,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tacky",k,n,o,0))
o=H.a(["Whip"],p)
n=$.q
k=H.a([$.P,$.av],l)
H.a([],p)
$.$get$c().h(0,new G.d("Whip",k,n,o,0))
o=H.a(["Costumed"],p)
n=$.q
k=H.a([$.P,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Costumed",k,n,o,0))
o=H.a(["Punk"],p)
n=$.I
k=H.a([$.P,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Punk",k,n,o,0))
o=H.a(["Weighted"],p)
n=$.G
k=H.a([$.P,$.c8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Weighted",k,n,o,0))
o=H.a(["Favorite"],p)
n=$.I
k=H.a([$.P,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Favorite",k,n,o,0))
o=H.a(["Novelty"],p)
n=$.I
k=H.a([$.P,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Novelty",k,n,o,0))
o=H.a(["Security"],p)
n=$.v
k=H.a([$.P,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Security",k,n,o,0))
o=H.a(["IcePack"],p)
n=$.v
k=H.a([$.P,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("IcePack",k,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.q
k=H.a([$.P,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("MotionCapture",k,n,o,0))
o=H.a(["Silica"],p)
n=$.v
k=H.a([$.P,$.bK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silica",k,n,o,0))
o=H.a(["Harp"],p)
n=$.v
k=H.a([$.P,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Harp",k,n,o,0))
o=H.a(["Silk"],p)
n=$.v
k=H.a([$.P,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Silk",k,n,o,0))
o=H.a(["RedFlag"],p)
n=$.v
k=H.a([$.P,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("RedFlag",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.v
k=H.a([$.P,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet1",k,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.v
k=H.a([$.P,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Satin",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.v
k=H.a([$.P,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("MagicCarpet2",k,n,o,0))
o=H.a(["Tweed"],p)
n=$.v
k=H.a([$.P,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tweed",k,n,o,0))
o=H.a(["Jean"],p)
n=$.v
k=H.a([$.P,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Jean",k,n,o,0))
o=H.a(["Tesla"],p)
n=$.aa
k=H.a([$.Z,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tesla",k,n,o,0))
o=H.a(["Ashwood"],p)
n=$.v
k=H.a([$.a2,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ashwood",k,n,o,0))
o=H.a(["Peashooter"],p)
n=$.v
k=H.a([$.b3,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peashooter",k,n,o,0))
o=H.a(["Lacquer"],p)
n=$.v
k=H.a([$.aA,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lacquer",k,n,o,0))
o=H.a(["Classpecty"],p)
n=$.v
k=H.a([$.N,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.d("Classpecty",k,n,o,0))
o=H.a(["Smartass"],p)
n=$.I
k=H.a([$.Z,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smartass",k,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.I
k=H.a([$.b8,$.aI,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Miraculous",k,n,o,0))
o=H.a(["Pigeon"],p)
n=$.v
k=H.a([$.bn,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pigeon",k,n,o,0))
o=H.a(["Grimoire"],p)
n=$.q
k=H.a([$.bn,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grimoire",k,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.aa
k=H.a([$.bn,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Oglogoth's",k,n,o,0))
o=H.a(["Echidna's"],p)
n=$.aa
k=H.a([$.a_,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Echidna's",k,n,o,0))
o=H.a(["Superior"],p)
n=$.aa
k=H.a([$.Z,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Superior",k,n,o,0))
o=H.a(["Lego"],p)
n=$.v
k=H.a([$.a_,$.aA,$.bk,$.ab],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lego",k,n,o,0))
o=H.a(["Yardstick"],p)
n=$.q
k=H.a([$.a_,$.dg,$.X,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yardstick",k,n,o,0))
o=H.a(["Queenly"],p)
n=$.aa
k=H.a([$.ak,$.a2,$.b8,$.aH,$.b9],l)
H.a([],p)
o=new G.d("Queenly",k,n,o,0)
$.$get$c().h(0,o)
$.Dm=o
o=H.a(["Kingly"],p)
n=$.aa
k=H.a([$.b9,$.ab,$.c8,$.a2,$.b8],l)
H.a([],p)
o=new G.d("Kingly",k,n,o,0)
$.$get$c().h(0,o)
$.C9=o
o=H.a(["Jack"],p)
n=$.aa
k=H.a([$.aZ,$.av,$.E,$.ak],l)
H.a([],p)
o=new G.d("Jack",k,n,o,0)
$.$get$c().h(0,o)
$.C3=o
o=H.a(["Codpiece","Codtier"],p)
n=$.q
k=H.a([$.a_,$.aI,$.X,$.N,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.d("Codpiece",k,n,o,0))
o=H.a(["Graceful"],p)
n=$.q
k=H.a([$.a_,$.au,$.L,$.E,$.Z,$.N],l)
H.a([],p)
$.$get$c().h(0,new G.d("Graceful",k,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.q
k=H.a([$.a_,$.au,$.L,$.Z,$.N,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guide",k,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.q
k=H.a([$.a_,$.aE,$.L,$.Z,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Testament",k,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.aa
k=H.a([$.a_,$.b2,$.E,$.aZ,$.av,$.fb],l)
H.a([],p)
$.$get$c().h(0,new G.d("Excalibur",k,n,o,0))
o=H.a(["Influential"],p)
n=$.aa
k=H.a([$.a_,$.L,$.bq,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Influential",k,n,o,0))
o=H.a(["Alternative"],p)
n=$.aa
k=H.a([$.a_,$.a2,$.P,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Alternative",k,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.aa
k=H.a([$.a_,$.aH,$.ba,$.E,$.fa,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Valkyrie",k,n,o,0))
o=H.a(["Ongoing"],p)
n=$.aa
k=H.a([$.a_,$.aw,$.ai,$.jk,$.ab],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ongoing",k,n,o,0))
o=H.a(["Short"],p)
n=$.G
k=H.a([$.a_,$.P,$.bg,$.ax,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short",k,n,o,0))
o=H.a(["Crown"],p)
n=$.q
k=H.a([$.a_,$.E,$.bg,$.ax,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crown",k,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.q
k=H.a([$.a_,$.aA,$.a7,$.ak,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gristtorrent",k,n,o,0))
o=H.a(["Robe"],p)
n=$.q
k=H.a([$.a_,$.P,$.Z,$.a2,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Robe",k,n,o,0))
o=H.a(["Beret"],p)
n=$.q
k=H.a([$.a_,$.P,$.Z,$.ax,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beret",k,n,o,0))
o=H.a(["Blank"],p)
n=$.G
k=$.a_
j=$.L
i=$.Z
i=H.a([k,j,i,$.au,i,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blank",i,n,o,0))
o=H.a(["Cueball"],p)
n=$.v
i=H.a([$.a_,$.ax,$.bO,$.ab,$.el,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cueball",i,n,o,0))
o=H.a(["Meddler's"],p)
n=$.aa
i=H.a([$.a_,$.au,$.L,$.bq,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Meddler's",i,n,o,0))
o=H.a(["Scroll"],p)
n=$.aa
i=H.a([$.a2,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scroll",i,n,o,0))
o=H.a(["Tome"],p)
n=$.q
i=H.a([$.L,$.Z,$.au],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tome",i,n,o,0))
o=H.a(["Lockpick"],p)
n=$.q
i=H.a([$.a_,$.E,$.ak,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Lockpick",i,n,o,0))
o=H.a(["Warped"],p)
n=$.G
i=H.a([$.a_,$.E,$.b7,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Warped",i,n,o,0))
o=H.a(["Stairs"],p)
n=$.q
i=H.a([$.a_,$.aI,$.X,$.am,$.bk,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stairs",i,n,o,0))
o=H.a(["Rocket"],p)
n=$.q
i=H.a([$.a_,$.ap,$.E,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rocket",i,n,o,0))
o=H.a(["~ATH"],p)
n=$.q
i=H.a([$.a_,$.a7,$.L,$.au,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("~ATH",i,n,o,0))
o=H.a(["Puppeted"],p)
n=$.q
i=H.a([$.a_,$.X,$.aq,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Puppeted",i,n,o,0))
o=H.a(["Angelic"],p)
n=$.aa
i=H.a([$.a_,$.b8,$.bz,$.b2,$.a9,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Angelic",i,n,o,0))
o=H.a(["Vitae"],p)
n=$.v
i=H.a([$.a_,$.aY,$.b7,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vitae",i,n,o,0))
o=H.a(["Fluorite"],p)
n=$.v
i=H.a([$.a_,$.b2,$.bX,$.aw,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluorite",i,n,o,0))
o=H.a(["Janus"],p)
n=$.aa
i=H.a([$.a_,$.aH,$.aw,$.ai,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Janus",i,n,o,0))
o=H.a(["Bacchus"],p)
n=$.aa
i=H.a([$.a_,$.ao,$.bq,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bacchus",i,n,o,0))
o=H.a(["TurnTable"],p)
n=$.aa
i=H.a([$.a_,$.E,$.a9,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("TurnTable",i,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.I
i=H.a([$.a_,$.b7,$.c2,$.b2,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("???",i,n,o,0))
o=H.a(["Demonite"],p)
n=$.v
i=H.a([$.E,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Demonite",i,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.aa
i=H.a([$.E,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stymphalian",i,n,o,0))
o=H.a(["Junky"],p)
n=$.v
i=H.a([$.E,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Junky",i,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.v
i=H.a([$.E,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cold Iron",i,n,o,0))
o=H.a(["Bolted"],p)
n=$.G
i=H.a([$.E,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bolted",i,n,o,0))
o=H.a(["Armored"],p)
n=$.G
i=H.a([$.E,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Armored",i,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.v
i=H.a([$.E,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heartsteel",i,n,o,0))
o=H.a(["Brick"],p)
n=$.v
i=H.a([$.bO,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.d("Brick",i,n,o,0))
o=H.a(["Clay"],p)
n=$.v
i=H.a([$.bO,$.c9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Clay",i,n,o,0))
o=H.a(["Mugly"],p)
n=$.I
i=H.a([$.bO,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mugly",i,n,o,0))
o=H.a(["Plate"],p)
n=$.v
i=H.a([$.bO,$.ab],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plate",i,n,o,0))
o=H.a(["Terracotta"],p)
n=$.v
i=H.a([$.bO,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Terracotta",i,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.v
i=H.a([$.bO,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Semiconductive",i,n,o,0))
o=H.a(["Vinyl"],p)
n=$.v
i=H.a([$.bO,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vinyl",i,n,o,0))
o=H.a(["Artisan"],p)
n=$.G
i=H.a([$.bO,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("Artisan",i,n,o,0))
o=H.a(["Tiled"],p)
n=$.v
i=H.a([$.bO,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tiled",i,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.G
i=H.a([$.bO,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hand-Sculpted",i,n,o,0))
o=H.a(["Handicraft"],p)
n=$.I
i=H.a([$.bP,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.d("Handicraft",i,n,o,0))
o=H.a(["Torn"],p)
n=$.G
i=H.a([$.bP,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.d("Torn",i,n,o,0))
o=H.a(["Grotesque"],p)
n=$.I
i=H.a([$.bP,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Grotesque",i,n,o,0))
o=H.a(["Flickering"],p)
n=$.G
i=H.a([$.bP,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Flickering",i,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.v
i=H.a([$.bP,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thinly Veiled",i,n,o,0))
o=H.a(["Fragile"],p)
n=$.G
i=H.a([$.bP,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fragile",i,n,o,0))
o=H.a(["Troll's"],p)
n=$.aa
i=H.a([$.bP,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Troll's",i,n,o,0))
o=H.a(["Sappy"],p)
n=$.v
i=H.a([$.bP,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sappy",i,n,o,0))
o=H.a(["Bootleg"],p)
n=$.v
i=H.a([$.bP,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bootleg",i,n,o,0))
o=H.a(["Distorted"],p)
n=$.v
i=H.a([$.bP,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Distorted",i,n,o,0))
o=H.a(["Ent's"],p)
n=$.aa
i=H.a([$.X,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ent's",i,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.v
i=H.a([$.X,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.d("WeepingWillow",i,n,o,0))
o=H.a(["Latex"],p)
n=$.v
i=H.a([$.X,$.c9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Latex",i,n,o,0))
o=H.a(["Turf"],p)
n=$.v
i=H.a([$.aA,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turf",i,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.q
i=H.a([$.c9,$.bk],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stress Relieving",i,n,o,0))
o=H.a(["R-Rated"],p)
n=$.G
i=H.a([$.c9,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("R-Rated",i,n,o,0))
o=H.a(["Racing"],p)
n=$.q
i=H.a([$.c9,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Racing",i,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.q
i=H.a([$.L,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cross Stitch",i,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.q
i=H.a([$.L,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("LoveLetter",i,n,o,0))
o=H.a(["EbonStone"],p)
n=$.v
i=H.a([$.aw,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("EbonStone",i,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.v
i=H.a([$.aw,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rock Candy",i,n,o,0))
o=H.a(["Smashing"],p)
n=$.I
i=H.a([$.aw,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smashing",i,n,o,0))
o=H.a(["Anomalous"],p)
n=$.I
i=H.a([$.bW,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anomalous",i,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.v
i=H.a([$.bW,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.d("Onmoraki",i,n,o,0))
o=H.a(["Ghastly"],p)
n=$.I
i=H.a([$.bW,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ghastly",i,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.v
i=H.a([$.bW,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shade",i,n,o,0))
o=H.a(["Choral"],p)
n=$.v
i=H.a([$.bW,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Choral",i,n,o,0))
o=H.a(["Eerie"],p)
n=$.v
i=H.a([$.bW,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eerie",i,n,o,0))
o=H.a(["Spiritual"],p)
n=$.I
i=H.a([$.bW,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spiritual",i,n,o,0))
o=H.a(["Heart"],p)
n=$.v
i=H.a([$.bi,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Heart",i,n,o,0))
o=H.a(["Primordial"],p)
n=$.v
i=H.a([$.bi,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Primordial",i,n,o,0))
o=H.a(["Eyeball"],p)
n=$.v
i=H.a([$.bi,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Eyeball",i,n,o,0))
o=H.a(["Vulture"],p)
n=$.G
i=H.a([$.bi,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vulture",i,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.q
i=H.a([$.bn,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("BlackMagic",i,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.v
i=H.a([$.bn,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doppelganger",i,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.G
i=H.a([$.bn,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Incomprehensible",i,n,o,0))
o=H.a(["Destructive"],p)
n=$.q
i=H.a([$.bn,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Destructive",i,n,o,0))
o=H.a(["Growling"],p)
n=$.G
i=H.a([$.cg,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Growling",i,n,o,0))
o=H.a(["Coconut"],p)
n=$.v
i=H.a([$.cg,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Coconut",i,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.aa
i=H.a([$.cg,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beastmaster's",i,n,o,0))
o=H.a(["Fluffy"],p)
n=$.v
i=H.a([$.cg,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fluffy",i,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.v
i=H.a([$.b3,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fern",i,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.G
i=H.a([$.b3,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.d("Four Leafed",i,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.v
i=H.a([$.b3,$.ak],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shrubbery",i,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.v
i=H.a([$.b3,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ecballium",i,n,o,0))
o=H.a(["Truffle"],p)
n=$.v
i=H.a([$.b3,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Truffle",i,n,o,0))
o=H.a(["Vine"],p)
n=$.v
i=H.a([$.b3,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vine",i,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.v
i=H.a([$.b3,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("CorpseBlossom",i,n,o,0))
o=H.a(["Fruity"],p)
n=$.G
i=H.a([$.b3,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fruity",i,n,o,0))
o=H.a(["Squawking"],p)
n=$.G
i=H.a([$.bz,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Squawking",i,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.v
i=H.a([$.bz,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Poultry",i,n,o,0))
o=H.a(["Dove"],p)
n=$.v
i=H.a([$.bz,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dove",i,n,o,0))
o=H.a(["Peacock"],p)
n=$.v
i=H.a([$.bz,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Peacock",i,n,o,0))
o=H.a(["Stork"],p)
n=$.v
i=H.a([$.bz,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stork",i,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.v
i=H.a([$.bz,$.bK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Zhenniao",i,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.v
i=H.a([$.bz,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dodo",i,n,o,0))
o=H.a(["Raven"],p)
n=$.tO
i=H.a([$.bz,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Raven",i,n,o,0))
o=H.a(["Frilled"],p)
n=$.G
i=H.a([$.bz,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Frilled",i,n,o,0))
o=H.a(["Horrifying"],p)
n=$.I
i=H.a([$.bQ,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Horrifying",i,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.q
i=H.a([$.av,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Burning Edge",i,n,o,0))
o=H.a(["Scapel"],p)
n=$.q
i=H.a([$.av,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scapel",i,n,o,0))
o=H.a(["Menacing"],p)
n=$.I
i=H.a([$.b9,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Menacing",i,n,o,0))
o=H.a(["Syringe"],p)
n=$.q
i=H.a([$.aY,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Syringe",i,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.I
i=H.a([$.ao,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bitter",i,n,o,0))
o=H.a(["Pineapple"],p)
n=$.v
i=H.a([$.ao,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pineapple",i,n,o,0))
o=H.a(["Crunchy"],p)
n=$.I
i=H.a([$.ao,$.ab],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crunchy",i,n,o,0))
o=H.a(["Bass"],p)
n=$.q
i=H.a([$.c8,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bass",i,n,o,0))
o=H.a(["Rigid"],p)
n=$.q
i=H.a([$.c8,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rigid",i,n,o,0))
o=H.a(["Prop"],p)
n=$.q
i=H.a([$.b_,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prop",i,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.q
i=H.a([$.b_,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Magic Missle",i,n,o,0))
o=H.a(["Gangster's"],p)
n=$.aa
i=H.a([$.b_,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gangster's",i,n,o,0))
o=H.a(["Cupid's"],p)
n=$.aa
i=H.a([$.b_,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cupid's",i,n,o,0))
o=H.a(["Turreted"],p)
n=$.G
i=H.a([$.b_,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Turreted",i,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.G
i=H.a([$.b_,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("AutoTarget",i,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.aa
i=H.a([$.b_,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guerilla's",i,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.q
i=H.a([$.b_,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rail",i,n,o,0))
o=H.a(["Tau"],p)
n=$.q
i=H.a([$.b_,$.c2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tau",i,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.q
i=H.a([$.b_,$.b2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pew",i,n,o,0))
o=H.a(["Thermal"],p)
n=$.G
i=H.a([$.b_,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thermal",i,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.v
i=H.a([$.b2,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Plasma",i,n,o,0))
o=H.a(["Shredding"],p)
n=$.v
i=H.a([$.a9,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Shredding",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.v
i=H.a([$.bX,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Charmed"],p)
n=$.v
i=H.a([$.bX,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charmed",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.aa
i=H.a([$.bX,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Prospitian"],p)
n=$.aa
i=H.a([$.b2,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Prospitian",i,n,o,0))
o=H.a(["Vigilant"],p)
n=$.G
i=H.a([$.b2,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Vigilant",i,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.I
i=H.a([$.b2,$.b6],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stand-Up",i,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.G
i=H.a([$.b2,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bedazzled",i,n,o,0))
o=H.a(["Thief's"],p)
n=$.aa
i=H.a([$.ak,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thief's",i,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.q
i=H.a([$.ak,$.a2,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.d("InvisibilityCloak",i,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.G
i=H.a([$.ak,$.b6],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comedy Night",i,n,o,0))
o=H.a(["Stealthy"],p)
n=$.I
i=H.a([$.ak,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Stealthy",i,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.q
i=H.a([$.ak,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("Subterfuge",i,n,o,0))
o=H.a(["Dersite"],p)
n=$.aa
i=H.a([$.ak,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dersite",i,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.aa
i=H.a([$.bk,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ambient",i,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.q
i=H.a([$.bk,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Anesthesia",i,n,o,0))
o=H.a(["Supportive"],p)
n=$.q
i=H.a([$.bk,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Supportive",i,n,o,0))
o=H.a(["Nuka"],p)
n=$.q
i=H.a([$.aY,$.c2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nuka",i,n,o,0))
o=H.a(["Contaminated"],p)
n=$.G
i=H.a([$.bK,$.c2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Contaminated",i,n,o,0))
o=H.a(["Unstable"],p)
n=$.G
i=H.a([$.aE,$.c2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unstable",i,n,o,0))
o=H.a(["Timebomb"],p)
n=$.q
i=H.a([$.aE,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.d("Timebomb",i,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.G
i=H.a([$.a7,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.d("Short Circuiting",i,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.q
i=H.a([$.aE,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relic",i,n,o,0))
o=H.a(["Existentialist"],p)
n=$.G
i=H.a([$.aE,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Existentialist",i,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.I
i=H.a([$.aE,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Apocalyptic",i,n,o,0))
o=H.a(["Dud"],p)
n=$.q
i=H.a([$.bo,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dud",i,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.q
i=H.a([$.bo,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("Guided",i,n,o,0))
o=H.a(["Bobomb"],p)
n=$.q
i=H.a([$.bo,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bobomb",i,n,o,0))
o=H.a(["Dread"],p)
n=$.q
i=H.a([$.aE,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dread",i,n,o,0))
o=H.a(["Knockback"],p)
n=$.q
i=H.a([$.bo,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Knockback",i,n,o,0))
o=H.a(["Paralysis"],p)
n=$.q
i=H.a([$.a7,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Paralysis",i,n,o,0))
o=H.a(["Carnage"],p)
n=$.q
i=H.a([$.bo,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carnage",i,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.q
i=H.a([$.bo,$.a9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Blast Beat",i,n,o,0))
o=H.a(["Corrosive"],p)
n=$.G
i=H.a([$.bo,$.bK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Corrosive",i,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.q
i=H.a([$.bo,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ice Bomb",i,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.q
i=H.a([$.bl,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cryogenic",i,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.q
i=H.a([$.a2,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Spellcasting",i,n,o,0))
o=H.a(["Tingling"],p)
n=$.G
i=H.a([$.a7,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tingling",i,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.q
i=H.a([$.bq,$.bK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rage Plague",i,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.q
i=H.a([$.bK,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Nerve Gas",i,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.q
i=H.a([$.bK,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Carbon Monoxide",i,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.q
i=H.a([$.bK,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("Neurotoxin",i,n,o,0))
o=H.a(["Virulent"],p)
n=$.G
i=H.a([$.bK,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Virulent",i,n,o,0))
o=H.a(["Toxic"],p)
n=$.G
i=H.a([$.bK,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Toxic",i,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.q
i=H.a([$.bK,$.b6],l)
H.a([],p)
$.$get$c().h(0,new G.d("Laughing Gas",i,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.G
i=H.a([$.a9,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Amplified",i,n,o,0))
o=H.a(["Rap"],p)
n=$.q
i=H.a([$.a9,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Rap",i,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.q
i=H.a([$.a9,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Saxaphone",i,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.q
i=H.a([$.a9,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Offbeat",i,n,o,0))
o=H.a(["Piper's"],p)
n=$.aa
i=H.a([$.a9,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.d("Piper's",i,n,o,0))
o=H.a(["Melodic"],p)
n=$.q
i=H.a([$.a9,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Melodic",i,n,o,0))
o=H.a(["Smooth"],p)
n=$.q
i=H.a([$.a9,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smooth",i,n,o,0))
o=H.a(["Thrash"],p)
n=$.q
i=H.a([$.a9,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Thrash",i,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.q
i=H.a([$.a9,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chant",i,n,o,0))
o=H.a(["Chewy"],p)
n=$.q
i=H.a([$.bq,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chewy",i,n,o,0))
o=H.a(["Phony"],p)
n=$.q
i=H.a([$.bq,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Phony",i,n,o,0))
o=H.a(["Doctor's"],p)
n=$.aa
i=H.a([$.Z,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doctor's",i,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.q
i=H.a([$.bf,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.d("Straitjacketed",i,n,o,0))
o=H.a(["Strapped"],p)
n=$.q
i=H.a([$.bf,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Strapped",i,n,o,0))
o=H.a(["Bondage"],p)
n=$.q
i=H.a([$.bf,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Bondage",i,n,o,0))
o=H.a(["Sealed"],p)
n=$.G
i=H.a([$.bf,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sealed",i,n,o,0))
o=H.a(["Attractive"],p)
n=$.I
i=H.a([$.ax,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Attractive",i,n,o,0))
o=H.a(["Relaxed"],p)
n=$.G
i=H.a([$.b5,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Relaxed",i,n,o,0))
o=H.a(["Loveseat"],p)
n=$.q
i=H.a([$.b5,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Loveseat",i,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.I
i=H.a([$.ao,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.d("Comfort Food",i,n,o,0))
o=H.a(["Yandere"],p)
n=$.I
i=H.a([$.aB,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Yandere",i,n,o,0))
o=H.a(["Tsundere"],p)
n=$.I
i=H.a([$.aB,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Tsundere",i,n,o,0))
o=H.a(["Disturbed"],p)
n=$.G
i=H.a([$.aq,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Disturbed",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Z,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.q
i=H.a([$.Z,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hydroponic",i,n,o,0))
o=H.a(["Free Range"],p)
n=$.q
i=H.a([$.aq,$.ao],l)
H.a([],p)
$.$get$c().h(0,new G.d("Free Range",i,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.aa
i=H.a([$.aB,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Gentlemanly",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.G
i=H.a([$.Z,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sapient",i,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.G
i=H.a([$.aB,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sentimental",i,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.G
i=H.a([$.aB,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki",i,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.G
i=H.a([$.aB,$.aJ,$.au,$.jl],l)
H.a([],p)
$.$get$c().h(0,new G.d("Doki-Doki Literature Club",i,n,o,0))
o=H.a(["Banana"],p)
n=$.G
i=H.a([$.ao,$.b6],l)
H.a([],p)
$.$get$c().h(0,new G.d("Banana",i,n,o,0))
o=H.a(["Mana"],p)
n=$.G
i=H.a([$.ao,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mana",i,n,o,0))
o=H.a(["Homemade"],p)
n=$.G
i=H.a([$.ao,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Homemade",i,n,o,0))
o=H.a(["Steampunk"],p)
n=$.G
i=H.a([$.a2,$.ai],l)
H.a([],p)
$.$get$c().h(0,new G.d("Steampunk",i,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.G
i=H.a([$.ao,$.b6,$.a7,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.d("I Can't Stop Laughing",i,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.v
i=H.a([$.E,$.bW],l)
H.a([],p)
$.$get$c().h(0,new G.d("Soulsteel",i,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.q
i=H.a([$.ba,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ritual",i,n,o,0))
o=H.a(["Inflamable"],p)
n=$.G
i=H.a([$.bP,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Inflamable",i,n,o,0))
o=H.a(["Crafting"],p)
n=$.q
i=H.a([$.X,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.d("Crafting",i,n,o,0))
o=H.a(["Polluting"],p)
n=$.q
i=H.a([$.aA,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Polluting",i,n,o,0))
o=H.a(["Insulated"],p)
n=$.G
i=H.a([$.c9,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Insulated",i,n,o,0))
o=H.a(["Ash"],p)
n=$.v
i=H.a([$.L,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ash",i,n,o,0))
o=H.a(["Delicate"],p)
n=$.G
i=H.a([$.L,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Delicate",i,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.aa
i=H.a([$.b7,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Glass Blower's",i,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.G
i=H.a([$.bi,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Sunburnt",i,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.G
i=H.a([$.ap,$.bn],l)
H.a([],p)
$.$get$c().h(0,new G.d("Pyrebitten",i,n,o,0))
o=H.a(["Mink"],p)
n=$.v
i=H.a([$.aB,$.cg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mink",i,n,o,0))
o=H.a(["Wildfire"],p)
n=$.aa
i=H.a([$.b3,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Wildfire",i,n,o,0))
o=H.a(["Scarred"],p)
n=$.G
i=H.a([$.aY,$.bQ],l)
H.a([],p)
$.$get$c().h(0,new G.d("Scarred",i,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.I
i=H.a([$.b8,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hyper Realistic",i,n,o,0))
o=H.a(["Hestia's"],p)
n=$.aa
i=H.a([$.bX,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Hestia's",i,n,o,0))
o=H.a(["Smoking"],p)
n=$.G
i=H.a([$.ak,$.ap],l)
H.a([],p)
$.$get$c().h(0,new G.d("Smoking",i,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.G
i=H.a([$.ap,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.d("Radiator",i,n,o,0))
o=H.a(["Fuming"],p)
n=$.G
i=H.a([$.ap,$.bK],l)
H.a([],p)
$.$get$c().h(0,new G.d("Fuming",i,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.G
i=H.a([$.ap,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Firework",i,n,o,0))
o=H.a(["Panicky"],p)
n=$.G
i=H.a([$.aE,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Panicky",i,n,o,0))
o=H.a(["Ornamental"],p)
n=$.G
i=H.a([$.bg,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ornamental",i,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.G
i=H.a([$.bg,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dear",i,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.G
i=H.a([$.bg,$.am],l)
H.a([],p)
$.$get$c().h(0,new G.d("Swaggy",i,n,o,0))
o=H.a(["Uncanny"],p)
n=$.G
i=H.a([$.aH,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.d("Uncanny",i,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.G
i=H.a([$.aJ,$.aq],l)
H.a([],p)
$.$get$c().h(0,new G.d("Talkative",i,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.G
i=H.a([$.aB,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.d("Waifu",i,n,o,0))
o=H.a(["Charming"],p)
n=$.G
i=H.a([$.a2,$.aB],l)
H.a([],p)
$.$get$c().h(0,new G.d("Charming",i,n,o,0))
o=H.a(["God Tier"],p)
n=$.G
i=H.a([$.N,$.Q,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.d("God Tier",i,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.G
i=H.a([$.N,$.Q,$.b8,$.aI,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cod Tier",i,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.G
i=H.a([$.N,$.Q,$.b8,$.cg],l)
H.a([],p)
$.$get$c().h(0,new G.d("Dog Tier",i,n,o,0))
o=H.a(["Cracked"],p)
n=$.G
i=H.a([$.aw,$.bP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Cracked",i,n,o,0))
o=H.a(["Ruffled"],p)
n=$.G
i=H.a([$.bz,$.bP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Ruffled",i,n,o,0))
o=H.a(["Mandrake"],p)
n=$.G
i=H.a([$.b3,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.d("Mandrake",i,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.G
i=H.a([$.a2,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.d("Beanstalk",i,n,o,0))
o=H.a(["Unnerving"],p)
n=$.G
i=H.a([$.b9,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.d("Unnerving",i,n,o,0))
o=H.a(["Chipped"],p)
n=$.G
l=H.a([$.bO,$.bP],l)
H.a([],p)
$.$get$c().h(0,new G.d("Chipped",l,n,o,0))
if($.wN==null){o=$.mn
n=$.aZ
l=$.av
k=$.ba
j=new U.ag(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,"Claws",!1,P.a4(null,null,null,m),0,3)
j.M("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.f.h(0,o)
$.wN=j}o=$.$get$al();(o&&C.b).sm(o,0)
o=$.$get$al()
n=$.P
l=$.w1
k=new U.ag(n,null,null,null,"Speedo",!1,P.a4(null,null,null,m),0,3)
k.M("Speedo",[l],null,!1,null)
k.f.h(0,n)
o.push(k)
k=$.$get$al()
o=$.fb
n=$.av
l=$.E
j=$.aZ
i=new U.ag(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,"Sword",!1,P.a4(null,null,null,m),0,3)
i.M("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.f.h(0,o)
k.push(i)
i=$.$get$al()
k=$.tB
o=$.ab
j=$.E
l=new U.ag(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,"Hammer",!1,P.a4(null,null,null,m),0,3)
l.M("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.f.h(0,k)
i.push(l)
l=$.$get$al()
i=$.tK
k=$.b_
j=$.E
o=new U.ag(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,"Rifle",!1,P.a4(null,null,null,m),0,3)
o.M("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.f.h(0,i)
l.push(o)
o=$.$get$al()
l=$.tH
i=$.b_
j=$.E
k=new U.ag(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,"Pistol",!1,P.a4(null,null,null,m),0,3)
k.M("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.f.h(0,l)
o.push(k)
k=$.$get$al()
o=$.wf
l=$.b_
j=$.E
i=new U.ag(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,"Shotgun",!1,P.a4(null,null,null,m),0,3)
i.M("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.f.h(0,o)
k.push(i)
i=$.$get$al()
k=$.vO
o=$.aZ
j=$.av
l=$.E
n=new U.ag(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,"Blade",!1,P.a4(null,null,null,m),0,3)
n.M("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.f.h(0,k)
i.push(n)
n=$.$get$al()
i=$.tw
k=$.aZ
l=$.av
j=$.E
o=new U.ag(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,"Dagger",!1,P.a4(null,null,null,m),0,3)
o.M("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.f.h(0,i)
n.push(o)
o=$.$get$al()
n=$.hl
i=$.ab
j=$.bO
l=new U.ag(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,"Fancysanta",!1,P.a4(null,null,null,m),0,3)
l.M("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.f.h(0,n)
o.push(l)
l=$.$get$al()
o=$.wi
n=$.av
j=$.E
i=new U.ag(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,"Sickle",!1,P.a4(null,null,null,m),0,3)
i.M("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.f.h(0,o)
l.push(i)
i=$.$get$al()
l=$.vS
o=$.av
j=$.E
n=new U.ag(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,"Chainsaw",!1,P.a4(null,null,null,m),0,3)
n.M("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.f.h(0,l)
i.push(n)
n=$.$get$al()
i=$.vZ
l=$.aZ
j=$.E
o=new U.ag(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,"Fork",!1,P.a4(null,null,null,m),0,3)
o.M("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.f.h(0,i)
n.push(o)
o=$.$get$al()
n=$.tG
i=$.bz
j=$.bn
l=new U.ag(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,"Pigeon",!1,P.a4(null,null,null,m),0,3)
l.M("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.f.h(0,n)
o.push(l)
l=$.$get$al()
o=$.el
n=$.c8
j=$.aw
i=$.ab
k=new U.ag(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,"Bowling Ball",!1,P.a4(null,null,null,m),0,3)
k.M("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.f.h(0,o)
l.push(k)
k=$.$get$al()
l=$.tx
o=$.aA
i=$.bX
j=new U.ag(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,"Dice",!1,P.a4(null,null,null,m),0,3)
j.M("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.f.h(0,l)
k.push(j)
j=$.$get$al()
k=$.tF
l=$.E
i=$.aZ
o=new U.ag(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,"Needle",!1,P.a4(null,null,null,m),0,3)
o.M("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.f.h(0,k)
j.push(o)
o=$.$get$al()
j=$.wl
k=$.X
i=$.ab
l=new U.ag(j,"Very magey. 7/10.","ShittyWizardKind",null,"Staff",!1,P.a4(null,null,null,m),0,3)
l.M("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.f.h(0,j)
o.push(l)
l=$.$get$al()
o=$.wn
j=$.bf
i=$.P
k=new U.ag(o,"Probably p hard to use.","ImKinkshamingKind",null,"Whip",!1,P.a4(null,null,null,m),0,3)
k.M("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.f.h(0,o)
l.push(k)
k=$.$get$al()
l=$.tt
o=$.b_
i=$.aw
j=$.P
n=$.aZ
h=new U.ag(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,"Bow",!1,P.a4(null,null,null,m),0,3)
h.M("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.f.h(0,l)
k.push(h)
h=$.$get$al()
k=$.jl
l=$.X
n=$.ab
j=new U.ag(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,"Club",!1,P.a4(null,null,null,m),0,3)
j.M("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.f.h(0,k)
h.push(j)
j=$.$get$al()
h=$.jj
k=$.X
n=new U.ag(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,"Broom",!1,P.a4(null,null,null,m),0,3)
n.M("Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.f.h(0,h)
j.push(n)
n=$.$get$al()
j=$.au
h=$.L
k=$.ab
l=new U.ag(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,"Book",!1,P.a4(null,null,null,m),0,3)
l.M("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.f.h(0,j)
n.push(l)
l=$.$get$al()
n=$.wc
j=$.E
k=$.ab
h=new U.ag(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,"Road Sign",!1,P.a4(null,null,null,m),0,3)
h.M("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.f.h(0,n)
l.push(h)
h=$.$get$al()
l=$.tr
n=$.av
k=$.E
j=$.ab
i=new U.ag(l,"Legit.","TreeMassacreKind",null,"Axe",!1,P.a4(null,null,null,m),0,3)
i.M("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.w7
l=$.X
j=$.aZ
k=new U.ag(h,"Good for chest stabs.","UseOnHorsebackKind",null,"Lance",!1,P.a4(null,null,null,m),0,3)
k.M("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.fa
h=$.E
j=$.ab
l=new U.ag(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,"Shield",!1,P.a4(null,null,null,m),0,3)
l.M("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.vR
i=$.X
j=$.ab
h=new U.ag(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,"Cane",!1,P.a4(null,null,null,m),0,3)
h.M("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.wo
k=$.aA
j=$.ab
i=new U.ag(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,"Yo-Yo",!1,P.a4(null,null,null,m),0,3)
i.M("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.wk
l=$.X
j=$.b_
k=new U.ag(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,"Sling",!1,P.a4(null,null,null,m),0,3)
k.M("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.wh
h=$.E
j=$.av
l=new U.ag(i,"So edgey.","NarutoKind",null,"Shuriken",!1,P.a4(null,null,null,m),0,3)
l.M("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.tD
i=$.E
j=$.b_
h=new U.ag(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,"Machine Gun",!1,P.a4(null,null,null,m),0,3)
h.M("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.mo
k=$.E
j=$.bo
i=new U.ag(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,"Grenade",!1,P.a4(null,null,null,m),0,3)
i.M("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.el
l=$.c9
j=$.ab
k=new U.ag(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,"Ball",!1,P.a4(null,null,null,m),0,3)
k.M("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.wm
h=$.E
j=$.aZ
l=new U.ag(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,"3dent",!1,P.a4(null,null,null,m),0,3)
l.M("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.mm
i=$.L
j=$.av
h=new U.ag(k,"An X-Men fan, I see.","YuGiOhKind",null,"Card",!1,P.a4(null,null,null,m),0,3)
h.M("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.ty
k=$.E
j=$.ab
i=new U.ag(l,"Go with what you know, I guess.","UnstoppableKind",null,"Frying Pan",!1,P.a4(null,null,null,m),0,3)
i.M("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.e2
l=$.b5
j=$.P
k=new U.ag(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,"Pillow",!1,P.a4(null,null,null,m),0,3)
k.M("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.hk
h=$.E
j=$.bf
l=new U.ag(i,"This could be metal as fuck.","BikerGangKind",null,"Chain",!1,P.a4(null,null,null,m),0,3)
l.M("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.tN
i=$.E
j=$.ab
h=new U.ag(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,"Wrench",!1,P.a4(null,null,null,m),0,3)
h.M("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.wg
k=$.E
j=$.ab
i=new U.ag(l,"Dual purpose.","HideTheBodiesKind",null,"Shovel",!1,P.a4(null,null,null,m),0,3)
i.M("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.tM
l=$.X
j=$.ab
k=new U.ag(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,"Rolling Pin",!1,P.a4(null,null,null,m),0,3)
k.M("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.tI
h=$.X
j=$.aE
l=new U.ag(i,"Fuck you for picking this.","KermitsGoneBadKind",null,"Puppet",!1,P.a4(null,null,null,m),0,3)
l.M("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.tJ
i=$.E
j=$.av
h=new U.ag(k,"So fucking edgey.","KermitsGoneBadKind",null,"Razor",!1,P.a4(null,null,null,m),0,3)
h.M("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.mr
k=$.E
j=$.Z
i=new U.ag(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,"Pen",!1,P.a4(null,null,null,m),0,3)
i.M("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.jk
l=$.aw
j=$.c8
k=new U.ag(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,"Bust",!1,P.a4(null,null,null,m),0,3)
k.M("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.w0
h=$.X
j=$.ab
l=new U.ag(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,"Golf Club",!1,P.a4(null,null,null,m),0,3)
l.M("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.w6
i=$.E
j=$.av
h=new U.ag(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,"Knife",!1,P.a4(null,null,null,m),0,3)
h.M("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.we
k=$.E
j=$.av
i=new U.ag(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,"Scissors",!1,P.a4(null,null,null,m),0,3)
i.M("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.wd
l=$.E
j=$.c8
k=new U.ag(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,"Safe",!1,P.a4(null,null,null,m),0,3)
k.M("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.dg
h=$.X
j=$.ab
m=new U.ag(i,"Bitches love sticks","WeaponiseTheTreesKind",null,"Stick",!1,P.a4(null,null,null,m),0,3)
m.M("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
m.f.h(0,i)
k.push(m)
m=new S.bG("Duttle","Dut",null,null)
$.$get$bN().push(m)
$.vy=m
m=new S.bG("Salamander","GLUB",null,null)
$.$get$bN().push(m)
$.tg=m
m=new S.bG("Crocodile","NAK",null,null)
$.$get$bN().push(m)
$.e_=m
m=new S.bG("Iguana","thip",null,null)
$.$get$bN().push(m)
$.eh=m
m=new S.bG("Turtle","click",null,null)
$.$get$bN().push(m)
$.f1=m
m=new S.bG("Skeleton","rattle",null,null)
$.$get$bN().push(m)
$.dL=m
m=new S.bG("Robot","BEEP",null,null)
$.$get$bN().push(m)
$.f_=m
m=new S.bG("Chameleon","BLEP",null,null)
$.$get$bN().push(m)
$.it=m
m=new S.bG("Axolotl","BARP",null,null)
$.$get$bN().push(m)
$.t9=m
m=new S.bG("Lizard","bleb",null,null)
$.$get$bN().push(m)
$.lF=m
m=new S.bG("Snake","hiss",null,null)
$.$get$bN().push(m)
$.ti=m
m=new S.bG("Alligator","nak",null,null)
$.$get$bN().push(m)
$.ir=m
m=new S.bG("Mole","snuff",null,null)
$.$get$bN().push(m)
$.vz=m
m=new S.bG("Bird","tweet",null,null)
$.$get$bN().push(m)
$.lE=m
m=new S.bG("Wolf","howl",null,null)
$.$get$bN().push(m)
$.lL=m
m=new S.bG("Newt","skitter",null,null)
$.$get$bN().push(m)
$.vA=m
m=new S.bG("Spider","skitter",null,null)
$.$get$bN().push(m)
$.iy=m
m=new S.bG("Cupid","flappa",null,null)
$.$get$bN().push(m)
$.iu=m
m=new S.bG("Dragon","roar",null,null)
$.$get$bN().push(m)
$.h7=m
m=new S.ia("Prospitian","murmur",null,null)
$.$get$bN().push(m)
$.zl=m
m=new S.ia("Dersite","mutter",null,null)
$.$get$bN().push(m)
$.zi=m
m=new S.m6("Horror Terror","a;lkjdf",null,null)
$.$get$bN().push(m)
$.zk=m
$.zm=H.a([$.ti,$.ir,$.vA,$.tg,$.eh,$.e_,$.f1,$.it,$.t9,$.lF],[S.bG])
$.hd=new T.c3(0,"spices")
m=$.zo
$.eY=new T.c3(m,"fresh baked bread")
$.cw=new T.c3(m,"sweetness")
$.c6=new T.c3(m,"nature")
$.lK=new T.c3(0,"salt")
k=$.zn
$.d0=new T.c3(k,"rot")
$.zj=new T.c3(k,"feet")
$.ej=new T.c3(0,"oil")
$.tb=new T.c3(0,"chlorine")
$.hb=new T.c3(0,"nothing in particular")
$.eg=new T.c3(0,"gunpowder")
$.ha=new T.c3(0,"must")
$.cD=new T.c3(m,"zoo animals")
$.e0=new T.c3(k,"sweat")
$.ix=new T.c3(0,"ozone")
$.c5=new T.c3(0,"deceit")
$.d_=new T.c3(k,"blood")
$.f0=new T.c3(k,"smoke")
$.c0=new K.bU(k,"creepy")
$.b0=new K.bU(m,"calm")
$.ce=new K.bU(k,"frantic")
$.lH=new K.bU(0,"like nothing")
$.bV=new K.bU(m,"energizing")
$.cC=new K.bU(0,"studious")
$.dt=new K.bU(0,"dangerous")
$.dJ=new K.bU(0,"glamorous")
$.hc=new K.bU(0,"romantic")
$.ds=new K.bU(m,"creative")
$.lG=new K.bU(0,"lucky")
$.du=new K.bU(0,"happy")
$.dK=new K.bU(0,"heroic")
$.d2=new K.bU(k,"stupid")
$.lG=new K.bU(0,"lucky")
$.tc=new K.bU(0,"claustrophobic")
$.lI=new K.bU(0,"overheated")
$.dI=new K.bU(k,"confusing")
$.cd=new K.bU(0,"contemplatative")
$.cR=new M.bB(0,"clanking")
$.cv=new M.bB(0,"laughing")
$.be=new M.bB(m,"rustling")
$.ek=new M.bB(k,"screaming")
$.iv=new M.bB(k,"foot steps")
$.eZ=new M.bB(k,"beeping")
$.vC=new M.bB(k,"whispering")
$.ef=new M.bB(0,"clacking")
$.cA=new M.bB(0,"applause")
$.ei=new M.bB(0,"jazz")
$.te=new M.bB(0,"disco")
$.h8=new M.bB(0,"drums")
$.h9=new M.bB(0,"echoing")
$.lJ=new M.bB(k,"roaring")
$.iw=new M.bB(k,"gunfire")
$.cB=new M.bB(0,"music")
$.th=new M.bB(0,"singing")
$.ta=new M.bB(0,"chanting")
$.f2=new M.bB(0,"whistling")
$.df=new M.bB(m,"nature")
$.td=new M.bB(0,"croaking")
$.d1=new M.bB(0,"silence")
$.tf=new M.bB(0,"pulsing")
$.vB=new M.bB(0,"ticking")
m=H.a([],p)
o=[X.F,P.U]
n=A.a1
l=E.M
k=[l]
j=[A.fP]
m=new S.mH(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.u(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Knight",3,!0,!1,!1)
$.FF=m
m=P.j(H.a([new E.M($.ca,0.4,!1)],k),l)
i=H.a([],p)
m=new S.o7(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.u(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Seer",6,!0,!1,!1)
$.FS=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.ky("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.u(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Bard",9,!0,!1,!1)
$.Fz=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.m2("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.u(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Heir",8,!0,!1,!1)
$.FC=m
m=H.a([],p)
m=new U.n1(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.u(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Maid",0,!0,!1,!1)
$.FI=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.nW(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.u(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Rogue",4,!0,!1,!1)
$.FN=m
m=H.a([],p)
m=new V.nw(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.u(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Page",1,!0,!1,!1)
$.FL=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.p3(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.u(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Thief",7,!0,!1,!1)
$.FV=m
m=P.j(H.a([new E.M($.ca,0.1,!1)],k),l)
i=H.a([],p)
m=new R.oP(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.u(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Sylph",5,!0,!1,!1)
$.FU=m
m=H.a([],p)
m=new N.nP("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.u(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Prince",10,!0,!1,!1)
$.FM=m
m=P.j(H.a([new E.M($.ca,0.1,!1)],k),l)
i=H.a([],p)
m=new M.py("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.u(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Witch",11,!0,!1,!1)
$.FX=m
m=P.j(H.a([new E.M($.ca,0.4,!1)],k),l)
i=H.a([],p)
m=new S.n0("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.u(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Mage",2,!0,!1,!1)
$.FH=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.j(H.a([new E.M($.ca,3,!1),new E.M($.on,-2,!1)],k),l)
e=H.a([],p)
m=new E.pu("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.u(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Waste",12,!1,!1,!1)
$.FW=m
m=H.a([],p)
m=new Y.o3("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.u(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Scout",13,!1,!1,!1)
$.FQ=m
m=P.j(H.a([new E.M($.ca,0.5,!1)],k),l)
i=H.a([],p)
m=new L.o4("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.u(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Scribe",15,!1,!1,!1)
$.FR=m
m=P.j(H.a([new E.M($.ca,0.5,!1)],k),l)
i=H.a([],p)
m=new E.o0(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.u(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Sage",14,!1,!1,!1)
$.FO=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.m0("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.u(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Guide",16,!1,!1,!1)
$.FB=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.j(H.a([new E.M($.ca,3,!1)],k),l)
g=H.a([],p)
m=new Y.m_(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.u(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Grace",17,!1,!1,!1)
$.FA=m
m=P.j(H.a([new E.M($.ca,0.1,!1)],k),l)
i=H.a([],p)
m=new E.na("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.u(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Muse",18,!1,!1,!1)
$.FJ=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.H(null,null,n)
h=P.j(H.a([new E.M($.ca,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.mZ("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.u(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Lord",19,!1,!1,!1)
$.FG=m
m=P.j(H.a([new E.M($.ca,-0.1,!1),new E.M($.dv,1,!1)],k),l)
i=H.a([],p)
m=new Y.oe("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.u(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Smith",20,!1,!1,!1)
$.FT=m
m=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
i=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
h=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
f=P.j(H.a([new E.M($.ca,4,!1),new E.M($.on,-3,!1)],k),l)
e=H.a([],p)
m=new X.ma("Hooman",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!0,!1,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Human",new H.u(0,null,null,null,null,null,0,o),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Human",21,!1,!1,!0)
$.FD=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["hussie"],p)
f=P.j(H.a([new E.M($.ca,41.3,!1),new E.M($.on,41.3,!1)],k),l)
e=H.a([],p)
m=new Q.mb(20,20,0.5,m,i,h,g,!1,!0,!1,!0,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Hussie",new H.u(0,null,null,null,null,null,0,o),null,null,22,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Hussie",22,!1,!0,!0)
$.FE=m
m=H.a(["sans","sansly","sassy","super","soapful"],p)
i=H.a([],p)
m=new Y.o1(m,"Glitch",0.01,0.01,0.01,i,0.5,"Sans",new H.u(0,null,null,null,null,null,0,o),null,null,23,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.H(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a0("Sans",23,!1,!0,!0)
$.FP=m
$.FK=T.Fy("Null",255,!1,!0,!1)
m=A.dF
i=P.D
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#00ff00"),!0)
h.j(0,$.aN,L.e("#EFEFEF"),!0)
h.j(0,$.aM,L.e("#DEDEDE"),!0)
h.j(0,$.aW,L.e("#FF2106"),!0)
h.j(0,$.aV,L.e("#B01200"),!0)
h.j(0,$.aP,L.e("#2F2F30"),!0)
h.j(0,$.aQ,L.e("#1D1D1D"),!0)
h.j(0,$.aO,L.e("#080808"),!0)
h.j(0,$.aU,L.e("#030303"),!0)
h.j(0,$.aT,L.e("#242424"),!0)
h.j(0,$.aS,L.e("#333333"),!0)
h.j(0,$.aR,L.e("#141414"),!0)
g=P.j(H.a(["Frogs"],p),q)
f=P.j(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.j(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.j(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.j(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.j(H.a([new E.M($.dv,2,!0),new E.M($.ex,1,!0),new E.M($.dR,-2,!0)],k),l)
a=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
a.j(0,$.aL,L.e("#FF9B00"),!0)
a.j(0,$.aN,L.e("#FF9B00"),!0)
a.j(0,$.aM,L.e("#FF8700"),!0)
a.j(0,$.aW,L.e("#7F7F7F"),!0)
a.j(0,$.aV,L.e("#727272"),!0)
a.j(0,$.aP,L.e("#A3A3A3"),!0)
a.j(0,$.aQ,L.e("#999999"),!0)
a.j(0,$.aO,L.e("#898989"),!0)
a.j(0,$.aU,L.e("#EFEFEF"),!0)
a.j(0,$.aT,L.e("#DBDBDB"),!0)
a.j(0,$.aS,L.e("#C6C6C6"),!0)
a.j(0,$.aR,L.e("#ADADAD"),!0)
a=new N.oh(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!1,!0,1,a,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.aa(0,"Space",!0,!1,!1)
$.yI=a
a=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
a.j(0,$.aL,L.e("#ff0000"),!0)
a.j(0,$.aN,L.e("#FF2106"),!0)
a.j(0,$.aM,L.e("#AD1604"),!0)
a.j(0,$.aW,L.e("#030303"),!0)
a.j(0,$.aV,L.e("#242424"),!0)
a.j(0,$.aP,L.e("#510606"),!0)
a.j(0,$.aQ,L.e("#3C0404"),!0)
a.j(0,$.aO,L.e("#1F0000"),!0)
a.j(0,$.aU,L.e("#B70D0E"),!0)
a.j(0,$.aT,L.e("#970203"),!0)
a.j(0,$.aS,L.e("#8E1516"),!0)
a.j(0,$.aR,L.e("#640707"),!0)
b=P.j(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.j(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.j(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.j(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.j(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.j(H.a([new E.M($.hN,2,!0),new E.M($.dR,1,!0),new E.M($.fp,-2,!0)],k),l)
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#FF9B00"),!0)
h.j(0,$.aN,L.e("#FF9B00"),!0)
h.j(0,$.aM,L.e("#FF8700"),!0)
h.j(0,$.aW,L.e("#7F7F7F"),!0)
h.j(0,$.aV,L.e("#727272"),!0)
h.j(0,$.aP,L.e("#A3A3A3"),!0)
h.j(0,$.aQ,L.e("#999999"),!0)
h.j(0,$.aO,L.e("#898989"),!0)
h.j(0,$.aU,L.e("#EFEFEF"),!0)
h.j(0,$.aT,L.e("#DBDBDB"),!0)
h.j(0,$.aS,L.e("#C6C6C6"),!0)
h.j(0,$.aR,L.e("#ADADAD"),!0)
h=new N.p4(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(1,"Time",!0,!1,!1)
$.yK=h
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#3399ff"),!0)
h.j(0,$.aN,L.e("#10E0FF"),!0)
h.j(0,$.aM,L.e("#00A4BB"),!0)
h.j(0,$.aW,L.e("#FEFD49"),!0)
h.j(0,$.aV,L.e("#D6D601"),!0)
h.j(0,$.aP,L.e("#0052F3"),!0)
h.j(0,$.aQ,L.e("#0046D1"),!0)
h.j(0,$.aO,L.e("#003396"),!0)
h.j(0,$.aU,L.e("#0087EB"),!0)
h.j(0,$.aT,L.e("#0070ED"),!0)
h.j(0,$.aS,L.e("#006BE1"),!0)
h.j(0,$.aR,L.e("#0054B0"),!0)
g=P.j(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.j(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.j(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.j(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.j(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.j(H.a([new E.M($.dR,2,!0),new E.M($.cx,1,!0),new E.M($.ex,-1,!0),new E.M($.ey,-1,!0),new E.M($.ca,0.05,!1)],k),l)
a=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
a.j(0,$.aL,L.e("#FF9B00"),!0)
a.j(0,$.aN,L.e("#FF9B00"),!0)
a.j(0,$.aM,L.e("#FF8700"),!0)
a.j(0,$.aW,L.e("#7F7F7F"),!0)
a.j(0,$.aV,L.e("#727272"),!0)
a.j(0,$.aP,L.e("#A3A3A3"),!0)
a.j(0,$.aQ,L.e("#999999"),!0)
a.j(0,$.aO,L.e("#898989"),!0)
a.j(0,$.aU,L.e("#EFEFEF"),!0)
a.j(0,$.aT,L.e("#DBDBDB"),!0)
a.j(0,$.aS,L.e("#C6C6C6"),!0)
a.j(0,$.aR,L.e("#ADADAD"),!0)
a=new T.kH(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!1,!0,1,a,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.aa(2,"Breath",!0,!1,!1)
$.yt=a
a=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
a.j(0,$.aL,L.e("#003300"),!0)
a.j(0,$.aN,L.e("#0F0F0F"),!0)
a.j(0,$.aM,L.e("#010101"),!0)
a.j(0,$.aW,L.e("#E8C15E"),!0)
a.j(0,$.aV,L.e("#C7A140"),!0)
a.j(0,$.aP,L.e("#1E211E"),!0)
a.j(0,$.aQ,L.e("#141614"),!0)
a.j(0,$.aO,L.e("#0B0D0B"),!0)
a.j(0,$.aU,L.e("#204020"),!0)
a.j(0,$.aT,L.e("#11200F"),!0)
a.j(0,$.aS,L.e("#192C16"),!0)
a.j(0,$.aR,L.e("#121F10"),!0)
b=P.j(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.j(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.j(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.j(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.j(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.j(H.a([new E.M($.dv,2,!0),new E.M($.fp,1,!0),new E.M($.hN,-1,!0),new E.M($.ex,-1,!0),new E.M($.ca,0.01,!1)],k),l)
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#FF9B00"),!0)
h.j(0,$.aN,L.e("#FF9B00"),!0)
h.j(0,$.aM,L.e("#FF8700"),!0)
h.j(0,$.aW,L.e("#7F7F7F"),!0)
h.j(0,$.aV,L.e("#727272"),!0)
h.j(0,$.aP,L.e("#A3A3A3"),!0)
h.j(0,$.aQ,L.e("#999999"),!0)
h.j(0,$.aO,L.e("#898989"),!0)
h.j(0,$.aU,L.e("#EFEFEF"),!0)
h.j(0,$.aT,L.e("#DBDBDB"),!0)
h.j(0,$.aS,L.e("#C6C6C6"),!0)
h.j(0,$.aR,L.e("#ADADAD"),!0)
h=new U.la(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(3,"Doom",!0,!1,!1)
$.yu=h
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#993300"),!0)
h.j(0,$.aN,L.e("#BA1016"),!0)
h.j(0,$.aM,L.e("#820B0F"),!0)
h.j(0,$.aW,L.e("#381B76"),!0)
h.j(0,$.aV,L.e("#1E0C47"),!0)
h.j(0,$.aP,L.e("#290704"),!0)
h.j(0,$.aQ,L.e("#230200"),!0)
h.j(0,$.aO,L.e("#110000"),!0)
h.j(0,$.aU,L.e("#3D190A"),!0)
h.j(0,$.aT,L.e("#2C1207"),!0)
h.j(0,$.aS,L.e("#5C2913"),!0)
h.j(0,$.aR,L.e("#4C1F0D"),!0)
g=P.j(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.j(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.j(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.j(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.j(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.j(H.a([new E.M($.ey,2,!0),new E.M($.cx,1,!0),new E.M($.dv,-2,!0)],k),l)
a=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
a.j(0,$.aL,L.e("#FF9B00"),!0)
a.j(0,$.aN,L.e("#FF9B00"),!0)
a.j(0,$.aM,L.e("#FF8700"),!0)
a.j(0,$.aW,L.e("#7F7F7F"),!0)
a.j(0,$.aV,L.e("#727272"),!0)
a.j(0,$.aP,L.e("#A3A3A3"),!0)
a.j(0,$.aQ,L.e("#999999"),!0)
a.j(0,$.aO,L.e("#898989"),!0)
a.j(0,$.aU,L.e("#EFEFEF"),!0)
a.j(0,$.aT,L.e("#DBDBDB"),!0)
a.j(0,$.aS,L.e("#C6C6C6"),!0)
a.j(0,$.aR,L.e("#ADADAD"),!0)
a=new T.kE(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!1,!0,1,a,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.aa(4,"Blood",!0,!1,!1)
$.ys=a
a=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
a.j(0,$.aL,L.e("#ff3399"),!0)
a.j(0,$.aN,L.e("#BD1864"),!0)
a.j(0,$.aM,L.e("#780F3F"),!0)
a.j(0,$.aW,L.e("#1D572E"),!0)
a.j(0,$.aV,L.e("#11371D"),!0)
a.j(0,$.aP,L.e("#4C1026"),!0)
a.j(0,$.aQ,L.e("#3C0D1F"),!0)
a.j(0,$.aO,L.e("#260914"),!0)
a.j(0,$.aU,L.e("#6B0829"),!0)
a.j(0,$.aT,L.e("#4A0818"),!0)
a.j(0,$.aS,L.e("#55142A"),!0)
a.j(0,$.aR,L.e("#3D0E1E"),!0)
b=P.j(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.j(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.j(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.j(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.j(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.j(H.a([new E.M($.ey,1,!0),new E.kr(null,1,!0)],k),l)
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#FF9B00"),!0)
h.j(0,$.aN,L.e("#FF9B00"),!0)
h.j(0,$.aM,L.e("#FF8700"),!0)
h.j(0,$.aW,L.e("#7F7F7F"),!0)
h.j(0,$.aV,L.e("#727272"),!0)
h.j(0,$.aP,L.e("#A3A3A3"),!0)
h.j(0,$.aQ,L.e("#999999"),!0)
h.j(0,$.aO,L.e("#898989"),!0)
h.j(0,$.aU,L.e("#EFEFEF"),!0)
h.j(0,$.aT,L.e("#DBDBDB"),!0)
h.j(0,$.aS,L.e("#C6C6C6"),!0)
h.j(0,$.aR,L.e("#ADADAD"),!0)
h=new T.m1(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(5,"Heart",!0,!1,!1)
$.yw=h
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#3da35a"),!0)
h.j(0,$.aN,L.e("#06FFC9"),!0)
h.j(0,$.aM,L.e("#04A885"),!0)
h.j(0,$.aW,L.e("#6E0E2E"),!0)
h.j(0,$.aV,L.e("#4A0818"),!0)
h.j(0,$.aP,L.e("#1D572E"),!0)
h.j(0,$.aQ,L.e("#164524"),!0)
h.j(0,$.aO,L.e("#11371D"),!0)
h.j(0,$.aU,L.e("#3DA35A"),!0)
h.j(0,$.aT,L.e("#2E7A43"),!0)
h.j(0,$.aS,L.e("#3B7E4F"),!0)
h.j(0,$.aR,L.e("#265133"),!0)
g=P.j(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.j(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.j(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.j(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.j(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.j(H.a([new E.M($.fp,2,!0),new E.M($.hN,1,!0),new E.M($.dv,-2,!0)],k),l)
a=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
a.j(0,$.aL,L.e("#FF9B00"),!0)
a.j(0,$.aN,L.e("#FF9B00"),!0)
a.j(0,$.aM,L.e("#FF8700"),!0)
a.j(0,$.aW,L.e("#7F7F7F"),!0)
a.j(0,$.aV,L.e("#727272"),!0)
a.j(0,$.aP,L.e("#A3A3A3"),!0)
a.j(0,$.aQ,L.e("#999999"),!0)
a.j(0,$.aO,L.e("#898989"),!0)
a.j(0,$.aU,L.e("#EFEFEF"),!0)
a.j(0,$.aT,L.e("#DBDBDB"),!0)
a.j(0,$.aS,L.e("#C6C6C6"),!0)
a.j(0,$.aR,L.e("#ADADAD"),!0)
a=new V.n9(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!1,!0,1,a,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.aa(6,"Mind",!0,!1,!1)
$.yD=a
a=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
a.j(0,$.aL,L.e("#ff9933"),!0)
a.j(0,$.aN,L.e("#FEFD49"),!0)
a.j(0,$.aM,L.e("#FEC910"),!0)
a.j(0,$.aW,L.e("#10E0FF"),!0)
a.j(0,$.aV,L.e("#00A4BB"),!0)
a.j(0,$.aP,L.e("#FA4900"),!0)
a.j(0,$.aQ,L.e("#E94200"),!0)
a.j(0,$.aO,L.e("#C33700"),!0)
a.j(0,$.aU,L.e("#FF8800"),!0)
a.j(0,$.aT,L.e("#D66E04"),!0)
a.j(0,$.aS,L.e("#E76700"),!0)
a.j(0,$.aR,L.e("#CA5B00"),!0)
b=P.j(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.j(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.j(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.j(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.j(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.j(H.a([new E.M($.hM,2,!0),new E.M($.fp,1,!0),new E.M($.cx,-1,!0),new E.M($.ex,-1,!0),new E.M($.ca,0.2,!1)],k),l)
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#FF9B00"),!0)
h.j(0,$.aN,L.e("#FF9B00"),!0)
h.j(0,$.aM,L.e("#FF8700"),!0)
h.j(0,$.aW,L.e("#7F7F7F"),!0)
h.j(0,$.aV,L.e("#727272"),!0)
h.j(0,$.aP,L.e("#A3A3A3"),!0)
h.j(0,$.aQ,L.e("#999999"),!0)
h.j(0,$.aO,L.e("#898989"),!0)
h.j(0,$.aU,L.e("#EFEFEF"),!0)
h.j(0,$.aT,L.e("#DBDBDB"),!0)
h.j(0,$.aS,L.e("#C6C6C6"),!0)
h.j(0,$.aR,L.e("#ADADAD"),!0)
h=new G.mL(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(7,"Light",!0,!1,!1)
$.yC=h
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#000066"),!0)
h.j(0,$.aN,L.e("#0B1030"),!0)
h.j(0,$.aM,L.e("#04091A"),!0)
h.j(0,$.aW,L.e("#CCC4B5"),!0)
h.j(0,$.aV,L.e("#A89F8D"),!0)
h.j(0,$.aP,L.e("#00164F"),!0)
h.j(0,$.aQ,L.e("#00103C"),!0)
h.j(0,$.aO,L.e("#00071A"),!0)
h.j(0,$.aU,L.e("#033476"),!0)
h.j(0,$.aT,L.e("#02285B"),!0)
h.j(0,$.aS,L.e("#004CB2"),!0)
h.j(0,$.aR,L.e("#003E91"),!0)
g=P.j(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.j(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.j(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.j(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.j(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.j(H.a([new E.fK(D.uD(),null,3,!0),new E.fK(D.uD(),null,-1,!0),new E.M($.hN,-1,!0),new E.M($.ca,0.2,!1)],k),l)
a=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
a.j(0,$.aL,L.e("#FF9B00"),!0)
a.j(0,$.aN,L.e("#FF9B00"),!0)
a.j(0,$.aM,L.e("#FF8700"),!0)
a.j(0,$.aW,L.e("#7F7F7F"),!0)
a.j(0,$.aV,L.e("#727272"),!0)
a.j(0,$.aP,L.e("#A3A3A3"),!0)
a.j(0,$.aQ,L.e("#999999"),!0)
a.j(0,$.aO,L.e("#898989"),!0)
a.j(0,$.aU,L.e("#EFEFEF"),!0)
a.j(0,$.aT,L.e("#DBDBDB"),!0)
a.j(0,$.aS,L.e("#C6C6C6"),!0)
a.j(0,$.aR,L.e("#ADADAD"),!0)
a=new Q.pt(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!1,!0,1,a,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.aa(8,"Void",!0,!1,!1)
$.yL=a
a=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
a.j(0,$.aL,L.e("#9900cc"),!0)
a.j(0,$.aN,L.e("#974AA7"),!0)
a.j(0,$.aM,L.e("#6B347D"),!0)
a.j(0,$.aW,L.e("#3D190A"),!0)
a.j(0,$.aV,L.e("#2C1207"),!0)
a.j(0,$.aP,L.e("#7C3FBA"),!0)
a.j(0,$.aQ,L.e("#6D34A6"),!0)
a.j(0,$.aO,L.e("#592D86"),!0)
a.j(0,$.aU,L.e("#381B76"),!0)
a.j(0,$.aT,L.e("#1E0C47"),!0)
a.j(0,$.aS,L.e("#281D36"),!0)
a.j(0,$.aR,L.e("#1D1526"),!0)
b=P.j(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.j(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.j(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.j(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.j(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.j(H.a([new E.M($.hO,2,!0),new E.M($.dR,1,!0),new E.M($.cx,-1,!0),new E.M($.ey,-1,!0),new E.M($.ca,0.01,!1)],k),l)
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#FF9B00"),!0)
h.j(0,$.aN,L.e("#FF9B00"),!0)
h.j(0,$.aM,L.e("#FF8700"),!0)
h.j(0,$.aW,L.e("#7F7F7F"),!0)
h.j(0,$.aV,L.e("#727272"),!0)
h.j(0,$.aP,L.e("#A3A3A3"),!0)
h.j(0,$.aQ,L.e("#999999"),!0)
h.j(0,$.aO,L.e("#898989"),!0)
h.j(0,$.aU,L.e("#EFEFEF"),!0)
h.j(0,$.aT,L.e("#DBDBDB"),!0)
h.j(0,$.aS,L.e("#C6C6C6"),!0)
h.j(0,$.aR,L.e("#ADADAD"),!0)
h=new E.nR(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(9,"Rage",!0,!1,!1)
$.yF=h
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#ffcc66"),!0)
h.j(0,$.aN,L.e("#FDF9EC"),!0)
h.j(0,$.aM,L.e("#D6C794"),!0)
h.j(0,$.aW,L.e("#164524"),!0)
h.j(0,$.aV,L.e("#06280C"),!0)
h.j(0,$.aP,L.e("#FFC331"),!0)
h.j(0,$.aQ,L.e("#F7BB2C"),!0)
h.j(0,$.aO,L.e("#DBA523"),!0)
h.j(0,$.aU,L.e("#FFE094"),!0)
h.j(0,$.aT,L.e("#E8C15E"),!0)
h.j(0,$.aS,L.e("#F6C54A"),!0)
h.j(0,$.aR,L.e("#EDAF0C"),!0)
g=P.j(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.j(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.j(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.j(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.j(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.j(H.a([new E.M($.cx,2,!0),new E.M($.hM,1,!0),new E.fK(D.uD(),null,-2,!0)],k),l)
a=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
a.j(0,$.aL,L.e("#FF9B00"),!0)
a.j(0,$.aN,L.e("#FF9B00"),!0)
a.j(0,$.aM,L.e("#FF8700"),!0)
a.j(0,$.aW,L.e("#7F7F7F"),!0)
a.j(0,$.aV,L.e("#727272"),!0)
a.j(0,$.aP,L.e("#A3A3A3"),!0)
a.j(0,$.aQ,L.e("#999999"),!0)
a.j(0,$.aO,L.e("#898989"),!0)
a.j(0,$.aU,L.e("#EFEFEF"),!0)
a.j(0,$.aT,L.e("#DBDBDB"),!0)
a.j(0,$.aS,L.e("#C6C6C6"),!0)
a.j(0,$.aR,L.e("#ADADAD"),!0)
a=new X.m5(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!1,!0,1,a,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.aa(10,"Hope",!0,!1,!1)
$.yy=a
a=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
a.j(0,$.aL,L.e("#494132"),!0)
a.j(0,$.aN,L.e("#76C34E"),!0)
a.j(0,$.aM,L.e("#4F8234"),!0)
a.j(0,$.aW,L.e("#00164F"),!0)
a.j(0,$.aV,L.e("#00071A"),!0)
a.j(0,$.aP,L.e("#605542"),!0)
a.j(0,$.aQ,L.e("#494132"),!0)
a.j(0,$.aO,L.e("#2D271E"),!0)
a.j(0,$.aU,L.e("#CCC4B5"),!0)
a.j(0,$.aT,L.e("#A89F8D"),!0)
a.j(0,$.aS,L.e("#A29989"),!0)
a.j(0,$.aR,L.e("#918673"),!0)
b=P.j(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.j(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.j(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.j(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.j(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.j(H.a([new E.M($.ex,2,!0),new E.M($.hO,1,!0),new E.M($.dv,-2,!0)],k),l)
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#FF9B00"),!0)
h.j(0,$.aN,L.e("#FF9B00"),!0)
h.j(0,$.aM,L.e("#FF8700"),!0)
h.j(0,$.aW,L.e("#7F7F7F"),!0)
h.j(0,$.aV,L.e("#727272"),!0)
h.j(0,$.aP,L.e("#A3A3A3"),!0)
h.j(0,$.aQ,L.e("#999999"),!0)
h.j(0,$.aO,L.e("#898989"),!0)
h.j(0,$.aU,L.e("#EFEFEF"),!0)
h.j(0,$.aT,L.e("#DBDBDB"),!0)
h.j(0,$.aS,L.e("#C6C6C6"),!0)
h.j(0,$.aR,L.e("#ADADAD"),!0)
h=new K.mK(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(11,"Life",!0,!1,!1)
$.yB=h
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#9630BF"),!0)
h.j(0,$.aN,L.e("#cc87e8"),!0)
h.j(0,$.aM,L.e("#9545b7"),!0)
h.j(0,$.aW,L.e("#ae769b"),!0)
h.j(0,$.aV,L.e("#8f577c"),!0)
h.j(0,$.aP,L.e("#9630bf"),!0)
h.j(0,$.aQ,L.e("#693773"),!0)
h.j(0,$.aO,L.e("#4c2154"),!0)
h.j(0,$.aU,L.e("#fcf9bd"),!0)
h.j(0,$.aT,L.e("#e0d29e"),!0)
h.j(0,$.aS,L.e("#bdb968"),!0)
h.j(0,$.aR,L.e("#ab9b55"),!0)
g=P.j(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.j(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.j(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.j(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.j(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.j(H.a([new E.M($.dv,3,!0),new E.M($.cx,-2,!0)],k),l)
a=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
a.j(0,$.aL,L.e("#FF9B00"),!0)
a.j(0,$.aN,L.e("#FF9B00"),!0)
a.j(0,$.aM,L.e("#FF8700"),!0)
a.j(0,$.aW,L.e("#7F7F7F"),!0)
a.j(0,$.aV,L.e("#727272"),!0)
a.j(0,$.aP,L.e("#A3A3A3"),!0)
a.j(0,$.aQ,L.e("#999999"),!0)
a.j(0,$.aO,L.e("#898989"),!0)
a.j(0,$.aU,L.e("#EFEFEF"),!0)
a.j(0,$.aT,L.e("#DBDBDB"),!0)
a.j(0,$.aS,L.e("#C6C6C6"),!0)
a.j(0,$.aR,L.e("#ADADAD"),!0)
a=new Z.lb(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!1,!0,1,a,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
a.aa(12,"Dream",!1,!1,!1)
$.yv=a
a=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
a.j(0,$.aL,L.e("#9630BF"),!0)
a.j(0,$.aN,L.e("#cc87e8"),!0)
a.j(0,$.aM,L.e("#9545b7"),!0)
a.j(0,$.aW,L.e("#ae769b"),!0)
a.j(0,$.aV,L.e("#8f577c"),!0)
a.j(0,$.aP,L.e("#9630bf"),!0)
a.j(0,$.aQ,L.e("#693773"),!0)
a.j(0,$.aO,L.e("#4c2154"),!0)
a.j(0,$.aU,L.e("#fcf9bd"),!0)
a.j(0,$.aT,L.e("#e0d29e"),!0)
a.j(0,$.aS,L.e("#bdb968"),!0)
a.j(0,$.aR,L.e("#ab9b55"),!0)
b=P.j(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
c=P.j(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
d=P.j(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
e=P.j(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
f=P.j(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
g=P.j(H.a([new E.M($.dv,3,!0),new E.M($.cx,-2,!0)],k),l)
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#FF9B00"),!0)
h.j(0,$.aN,L.e("#FF9B00"),!0)
h.j(0,$.aM,L.e("#FF8700"),!0)
h.j(0,$.aW,L.e("#7F7F7F"),!0)
h.j(0,$.aV,L.e("#727272"),!0)
h.j(0,$.aP,L.e("#A3A3A3"),!0)
h.j(0,$.aQ,L.e("#999999"),!0)
h.j(0,$.aO,L.e("#898989"),!0)
h.j(0,$.aU,L.e("#EFEFEF"),!0)
h.j(0,$.aT,L.e("#DBDBDB"),!0)
h.j(0,$.aS,L.e("#C6C6C6"),!0)
h.j(0,$.aR,L.e("#ADADAD"),!0)
h=new Q.mI(1.01,0.3,0.01,a,b,c,d,e,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,g,0.01,0.01,0.01,0.5,13,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!0,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(13,"Law",!1,!1,!0)
$.yA=h
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#ffff00"),!0)
h.j(0,$.aN,L.e("#ffff00"),!0)
h.j(0,$.aM,L.e("#ffff00"),!0)
h.j(0,$.aW,L.e("#508b2d"),!0)
h.j(0,$.aV,L.e("#316c0d"),!0)
h.j(0,$.aP,L.e("#dddd00"),!0)
h.j(0,$.aQ,L.e("#afaf00"),!0)
h.j(0,$.aO,L.e("#8f8f00"),!0)
h.j(0,$.aU,L.e("#ff0000"),!0)
h.j(0,$.aT,L.e("#a8000a"),!0)
h.j(0,$.aS,L.e("#b8151f"),!0)
h.j(0,$.aR,L.e("#8c1d1d"),!0)
g=P.j(H.a(["PURIFICATOR","NOT SHOGUN","WHO IS SHOGUN?"],p),q)
f=P.j(H.a(["Juice","Joke","Jespacito"],p),q)
e=P.j(H.a(["Pure","Juice","Juicey","Juiced","Small Might","Juicepacito"],p),q)
d=P.j(H.a(["Juice","Februus","Dyonisus","Bacchus","Epidotes","Juno Februtis","Ea","Marduk","Asaluhhi","Wadjet"],p),q)
c=P.j(H.a([new E.M($.ca,13,!0)],k),l)
b=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
b.j(0,$.aL,L.e("#FF9B00"),!0)
b.j(0,$.aN,L.e("#FF9B00"),!0)
b.j(0,$.aM,L.e("#FF8700"),!0)
b.j(0,$.aW,L.e("#7F7F7F"),!0)
b.j(0,$.aV,L.e("#727272"),!0)
b.j(0,$.aP,L.e("#A3A3A3"),!0)
b.j(0,$.aQ,L.e("#999999"),!0)
b.j(0,$.aO,L.e("#898989"),!0)
b.j(0,$.aU,L.e("#EFEFEF"),!0)
b.j(0,$.aT,L.e("#DBDBDB"),!0)
b.j(0,$.aS,L.e("#C6C6C6"),!0)
b.j(0,$.aR,L.e("#ADADAD"),!0)
b=new Z.mE(13,13,13,h,g,f,e,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",d,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],c,0.01,0.01,0.01,0.5,14,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Juice",null,!1,!1,!0,!1,!1,!0,1,b,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
b.aa(14,"Juice",!1,!1,!0)
$.yz=b
b=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
b.j(0,$.aL,L.e("#00ff00"),!0)
b.j(0,$.aN,L.e("#00ff00"),!0)
b.j(0,$.aM,L.e("#00ff00"),!0)
b.j(0,$.aW,L.e("#00ff00"),!0)
b.j(0,$.aV,L.e("#00cf00"),!0)
b.j(0,$.aP,L.e("#171717"),!0)
b.j(0,$.aQ,L.e("#080808"),!0)
b.j(0,$.aO,L.e("#080808"),!0)
b.j(0,$.aU,L.e("#616161"),!0)
b.j(0,$.aT,L.e("#3b3b3b"),!0)
b.j(0,$.aS,L.e("#4a4a4a"),!0)
b.j(0,$.aR,L.e("#292929"),!0)
c=P.j(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
d=P.j(H.a(["Shogun"],p),q)
e=P.j(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
f=P.j(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.j(H.a([new E.M($.hO,13,!0)],k),l)
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#FF9B00"),!0)
h.j(0,$.aN,L.e("#FF9B00"),!0)
h.j(0,$.aM,L.e("#FF8700"),!0)
h.j(0,$.aW,L.e("#7F7F7F"),!0)
h.j(0,$.aV,L.e("#727272"),!0)
h.j(0,$.aP,L.e("#A3A3A3"),!0)
h.j(0,$.aQ,L.e("#999999"),!0)
h.j(0,$.aO,L.e("#898989"),!0)
h.j(0,$.aU,L.e("#EFEFEF"),!0)
h.j(0,$.aT,L.e("#DBDBDB"),!0)
h.j(0,$.aS,L.e("#C6C6C6"),!0)
h.j(0,$.aR,L.e("#ADADAD"),!0)
h=new K.o2(13,13,13,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],g,0.01,0.01,0.01,0.5,15,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(15,"Sauce",!1,!0,!1)
$.yH=h
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#933100"),!0)
h.j(0,$.aN,L.e("#933100"),!0)
h.j(0,$.aM,L.e("#682200"),!0)
h.j(0,$.aW,L.e("#4c3a27"),!0)
h.j(0,$.aV,L.e("#302418"),!0)
h.j(0,$.aP,L.e("#a0562b"),!0)
h.j(0,$.aQ,L.e("#723e20"),!0)
h.j(0,$.aO,L.e("#442513"),!0)
h.j(0,$.aU,L.e("#963c07"),!0)
h.j(0,$.aT,L.e("#682a06"),!0)
h.j(0,$.aS,L.e("#6d4d3a"),!0)
h.j(0,$.aR,L.e("#422e23"),!0)
g=P.j(H.a(["IT'S A METAPHOR","ABSOLUTE REBEL","COLD BLOODED"],p),q)
f=P.j(H.a(["Therapist","Tax","Talker","Tailess","Teammate"],p),q)
e=P.j(H.a(["Rebellion","Desolate","Electric","Metaphorical","Ravaging"],p),q)
d=P.j(H.a(["Prometheus","Lucifer","Zeus","Momus","Maui","Anansi","Arachne"],p),q)
c=P.j(H.a([new E.M($.dR,10,!0),new E.M($.cx,-2,!0)],k),l)
b=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
b.j(0,$.aL,L.e("#FF9B00"),!0)
b.j(0,$.aN,L.e("#FF9B00"),!0)
b.j(0,$.aM,L.e("#FF8700"),!0)
b.j(0,$.aW,L.e("#7F7F7F"),!0)
b.j(0,$.aV,L.e("#727272"),!0)
b.j(0,$.aP,L.e("#A3A3A3"),!0)
b.j(0,$.aQ,L.e("#999999"),!0)
b.j(0,$.aO,L.e("#898989"),!0)
b.j(0,$.aU,L.e("#EFEFEF"),!0)
b.j(0,$.aT,L.e("#DBDBDB"),!0)
b.j(0,$.aS,L.e("#C6C6C6"),!0)
b.j(0,$.aR,L.e("#ADADAD"),!0)
b=new L.oR(2,0.7,0.7,h,g,f,e,"Rebellion","The OWNER is immensely strengthened, and they blast the ENEMY with a bolt of electricity.",d,["Lightning","Ice","Taserface"],["Taser"],c,0.01,0.01,0.01,0.5,16,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Taze",null,!1,!1,!0,!1,!1,!0,1,b,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
b.aa(16,"Taze",!1,!1,!0)
$.yJ=b
b=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
b.j(0,$.aL,L.e("#990000"),!0)
b.j(0,$.aN,L.e("#ff0200"),!0)
b.j(0,$.aM,L.e("#dd0000"),!0)
b.j(0,$.aW,L.e("#25334f"),!0)
b.j(0,$.aV,L.e("#07090f"),!0)
b.j(0,$.aP,L.e("#c64f4f"),!0)
b.j(0,$.aQ,L.e("#a33f3f"),!0)
b.j(0,$.aO,L.e("#843333"),!0)
b.j(0,$.aU,L.e("#b5c1d2"),!0)
b.j(0,$.aT,L.e("#939dac"),!0)
b.j(0,$.aS,L.e("#3c3e42"),!0)
b.j(0,$.aR,L.e("#202123"),!0)
c=P.j(H.a(["ABSOLUTE LOYALTY","ARROW EXTRAORDINAIRE","EMPATHETIC WARRIOR"],p),q)
d=P.j(H.a(["Relaxer","Respondant","Rememberer","Restless","Rasengan"],p),q)
e=P.j(H.a(["Empathetic","Arrowed","Emotioanal","Literal","Ravaging"],p),q)
f=P.j(H.a(["Artemus","Apollo","Eros","Cupid","Actaeon","Atalanta","Hippolytus","Orion","Paris","Philoctetes","Poeas","Teucher"],p),q)
g=P.j(H.a([new E.M($.dR,2,!0),new E.M($.cx,5,!0)],k),l)
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#FF9B00"),!0)
h.j(0,$.aN,L.e("#FF9B00"),!0)
h.j(0,$.aM,L.e("#FF8700"),!0)
h.j(0,$.aW,L.e("#7F7F7F"),!0)
h.j(0,$.aV,L.e("#727272"),!0)
h.j(0,$.aP,L.e("#A3A3A3"),!0)
h.j(0,$.aQ,L.e("#999999"),!0)
h.j(0,$.aO,L.e("#898989"),!0)
h.j(0,$.aU,L.e("#EFEFEF"),!0)
h.j(0,$.aT,L.e("#DBDBDB"),!0)
h.j(0,$.aS,L.e("#C6C6C6"),!0)
h.j(0,$.aR,L.e("#ADADAD"),!0)
h=new V.nY(0.9,1.1,2,b,c,d,e,"A Song Of Arrows","The OWNER has dozens of arrows fly above their head, and right onto the ENEMY",f,["Arrow","Yondu","Empathy"],["Arrow","Bow"],g,0.01,0.01,0.01,0.5,17,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Rule",null,!1,!1,!0,!1,!1,!0,1,h,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
h.aa(17,"Rule",!1,!1,!0)
$.yG=h
h=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
h.j(0,$.aL,L.e("#853dcc"),!0)
h.j(0,$.aN,L.e("#f76261"),!0)
h.j(0,$.aM,L.e("#913a39"),!0)
h.j(0,$.aW,L.e("#ab4443"),!0)
h.j(0,$.aV,L.e("#78302f"),!0)
h.j(0,$.aP,L.e("#a54cff"),!0)
h.j(0,$.aQ,L.e("#8c41d9"),!0)
h.j(0,$.aO,L.e("#7335b3"),!0)
h.j(0,$.aU,L.e("#853dcc"),!0)
h.j(0,$.aT,L.e("#642e99"),!0)
h.j(0,$.aS,L.e("#4c2375"),!0)
h.j(0,$.aR,L.e("#2b1442"),!0)
g=P.j(H.a(["RANT EXTRAORDINAIRE","VENT CRAWLER","DUCT MASTER"],p),q)
f=P.j(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),q)
e=P.j(H.a(["Purgatorial","Rantish","Cold","Conditioned","Lost"],p),q)
d=P.j(H.a(["Mr. Hippo","Athena","Tawaret","Twert","Thoeris","Set","Ipy","Ipet","Apet","Opet","Reret"],p),q)
c=P.j(H.a([new E.M($.dR,15,!0),new E.M($.cx,-4,!0)],k),l)
b=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
b.j(0,$.aL,L.e("#FF9B00"),!0)
b.j(0,$.aN,L.e("#FF9B00"),!0)
b.j(0,$.aM,L.e("#FF8700"),!0)
b.j(0,$.aW,L.e("#7F7F7F"),!0)
b.j(0,$.aV,L.e("#727272"),!0)
b.j(0,$.aP,L.e("#A3A3A3"),!0)
b.j(0,$.aQ,L.e("#999999"),!0)
b.j(0,$.aO,L.e("#898989"),!0)
b.j(0,$.aU,L.e("#EFEFEF"),!0)
b.j(0,$.aT,L.e("#DBDBDB"),!0)
b.j(0,$.aS,L.e("#C6C6C6"),!0)
b.j(0,$.aR,L.e("#ADADAD"),!0)
b=new V.m3(3.1,2,0.7,h,g,f,e,"Rant Your Troubles Away","The OWNER begins ranting, which strengthens themselves, but destroys the ENEMY.",d,["Hippo","Ranting"],["Vent"],c,0.01,0.01,0.01,0.5,18,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Hippo",null,!1,!1,!0,!1,!1,!0,1,b,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
b.aa(18,"Hippo",!1,!1,!0)
$.yx=b
b=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
b.j(0,$.aL,L.e("#959595"),!0)
b.j(0,$.aN,L.e("#bfbfbf"),!0)
b.j(0,$.aM,L.e("#959595"),!0)
b.j(0,$.aW,L.e("#805233"),!0)
b.j(0,$.aV,L.e("#663c1f"),!0)
b.j(0,$.aP,L.e("#805233"),!0)
b.j(0,$.aQ,L.e("#737373"),!0)
b.j(0,$.aO,L.e("#664d3c"),!0)
b.j(0,$.aU,L.e("#663c1f"),!0)
b.j(0,$.aT,L.e("#4d2d17"),!0)
b.j(0,$.aS,L.e("#68594e"),!0)
b.j(0,$.aR,L.e("#4f443b"),!0)
c=P.j(H.a(["DOORWAY CLEARER","THINKY PERSON","THE FAZ"],p),q)
d=P.j(H.a(["Bear","Boiler","Bean","Bepis","Boneless","Bop"],p),q)
e=P.j(H.a(["Purgatorial","Clear","Criterion","Fazbear","Doorway"],p),q)
f=P.j(H.a(["Freddy Fazbear","Callisto","Nandi","Nanook","Otso","Onikuma","Jambavan","Ungnyeo"],p),q)
g=P.j(H.a([new E.M($.dR,5,!0),new E.M($.cx,5,!0)],k),l)
m=new L.aD(P.x(null,null,null,q,m),P.x(null,null,null,i,m),P.x(null,null,null,q,i),P.x(null,null,null,i,q))
m.j(0,$.aL,L.e("#FF9B00"),!0)
m.j(0,$.aN,L.e("#FF9B00"),!0)
m.j(0,$.aM,L.e("#FF8700"),!0)
m.j(0,$.aW,L.e("#7F7F7F"),!0)
m.j(0,$.aV,L.e("#727272"),!0)
m.j(0,$.aP,L.e("#A3A3A3"),!0)
m.j(0,$.aQ,L.e("#999999"),!0)
m.j(0,$.aO,L.e("#898989"),!0)
m.j(0,$.aU,L.e("#EFEFEF"),!0)
m.j(0,$.aT,L.e("#DBDBDB"),!0)
m.j(0,$.aS,L.e("#C6C6C6"),!0)
m.j(0,$.aR,L.e("#ADADAD"),!0)
j=new L.kC(0.7,2,3.1,b,c,d,e,"Persaude the Enemy","The OWNER convinces the ENEMY to get hurt.",f,["Bear","Thought"],["Doorway"],g,0.01,0.01,0.01,0.5,19,new H.u(0,null,null,null,null,null,0,o),null,"","",!1,"Bear",null,!1,!1,!0,!1,!1,!0,1,m,P.j(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.j(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Blank","Null","Boring","Error"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),P.j(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.j(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.H(null,null,n))
j.aa(19,"Bear",!1,!1,!0)
$.yr=j
$.yE=L.yq(255,"Null",!1,!0,!1)
j=P.j(H.a([new E.M($.cx,1,!0),new E.M($.hM,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
g=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
f=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
e=H.a(["nobody"],p)
d=P.j(H.a([],k),l)
c=H.a(["Nobody"],p)
b=H.a(["Nobody"],p)
q=new F.nb(j,q,m,g,f,!1,e,d,c,b,1,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"loud","musical","Music")
q.E()
q.F()
B.cM(q)
$.zI=q
q=P.j(H.a([new E.M($.fp,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kn(q,m,j,i,h,!1,g,f,e,d,13,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"nerdy","smart","Academic")
q.E()
q.F()
B.cM(q)
$.zB=q
q=P.j(H.a([new E.M($.hO,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.ks(q,m,j,i,h,!1,g,f,e,d,4,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"dumb","athletic","Athletic")
q.E()
q.F()
B.cM(q)
$.zC=q
q=P.j(H.a([new E.M($.hN,-1,!0),new E.M($.hM,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.kP(q,m,j,i,h,!1,g,f,e,d,0,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"dorky","funny","Comedy")
q.E()
q.F()
B.cM(q)
$.zD=q
q=P.j(H.a([new E.M($.cx,-1,!0),new E.M($.ex,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.l1(q,m,j,i,h,!1,g,f,e,d,2,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"pretentious","cultured","Culture")
q.E()
q.F()
B.cM(q)
$.zE=q
q=P.j(H.a([new E.M($.cx,1,!0),new E.M($.ey,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.l9(q,m,j,i,h,!1,g,f,e,d,8,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"boring","domestic","Domestic")
q.E()
q.F()
B.cM(q)
$.zF=q
q=P.j(H.a([new E.M($.hM,1,!0),new E.M($.dv,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.lD(q,m,j,i,h,!1,g,f,e,d,7,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"whimpy","imaginative","Fantasy")
q.E()
q.F()
B.cM(q)
$.zG=q
q=P.j(H.a([new E.M($.hO,1,!0),new E.M($.ex,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.mF(q,m,j,i,h,!1,g,f,e,d,6,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"harsh","fair-minded","Justice")
q.E()
q.F()
B.cM(q)
$.zH=q
q=P.j(H.a([new E.M($.dR,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.nJ(q,m,j,i,h,!1,g,f,e,d,9,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"frivolous","geeky","PopCulture")
q.E()
q.F()
B.cM(q)
$.zK=q
q=P.j(H.a([new E.M($.ey,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.nX(q,m,j,i,h,!1,g,f,e,d,12,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"obsessive","romantic","Romantic")
q.E()
q.F()
B.cM(q)
$.zL=q
q=P.j(H.a([new E.M($.cx,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.of(q,m,j,i,h,!1,g,f,e,d,11,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"shallow","extroverted","Social")
q.E()
q.F()
B.cM(q)
$.zM=q
q=P.j(H.a([new E.M($.ey,-1,!0),new E.M($.cx,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.oV(q,m,j,i,h,!1,g,f,e,d,5,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"terrible","honest","Terrible")
q.E()
q.F()
B.cM(q)
$.zO=q
q=P.j(H.a([new E.M($.fp,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.pD(q,m,j,i,h,!1,g,f,e,d,3,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"wordy","lettered","Writing")
q.E()
q.F()
B.cM(q)
$.zP=q
q=P.j(H.a([new E.M($.dv,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.j(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.oT(q,m,j,i,h,!1,g,f,e,d,10,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"awkward","techy","Technology")
q.E()
q.F()
B.cM(q)
$.zN=q
q=H.a(["nobody"],p)
l=P.j(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hj(!0,q,l,k,p,-13,new H.u(0,null,null,null,null,null,0,o),["NONE"],Q.H(null,null,n),"","","Null")
q.E()
q.F()
B.cM(q)
$.zJ=q
A.ww()
t=3
return P.ct(Y.nc(),$async$ro)
case 3:case 1:return P.bs(r,s)}})
return P.bt($async$ro,s)}},Z={lb:function lb(y1,y2,p,q,t,u,v,w,A,B,D,H,I,P,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.P=P
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
zq:function(){var t,s
if(!$.vD)$.vD=!0
else return
t=[P.C]
s=new Y.oZ(H.a([],t))
$.tk=s
Z.cL(s,"txt",null)
Z.cL($.tk,"vert","x-shader/x-vertex")
Z.cL($.tk,"frag","x-shader/x-fragment")
$.zp=new Y.nS(H.a([],t))
$.vF=new Y.kJ(H.a([],t))
s=new B.pI(H.a([],t))
$.vH=s
Z.cL(s,"zip",null)
Z.cL($.vH,"bundle",null)
s=new U.pz(H.a([],t))
$.zy=s
Z.cL(s,"words",null)
s=new Q.nH(H.a([],t))
$.vG=s
Z.cL(s,"png",null)
Z.cL($.vG,"jpg","image/jpeg")
$.zw=new Q.nE(H.a([],t))
s=new M.ol(H.a([],t))
$.zx=s
Z.cL(s,"psprite",null)
s=new V.lU(H.a([],t))
$.tj=s
Z.cL(s,"ttf",null)
Z.cL($.tj,"otf",null)
Z.cL($.tj,"woff",null)
s=new Y.no(null,H.a([],t))
$.zt=s
Z.cL(s,"obj",null)
s=new U.n_(H.a([],t))
$.zr=s
Z.cL(s,"mp3",null)
$.zs=new U.oI(H.a([],t))
s=new U.ns(H.a([],t))
$.zu=s
Z.cL(s,"ogg",null)
$.zv=new U.oJ(H.a([],t))},
cL:function(a,b,c){$.$get$lW().i(0,b,new Z.ip(a,c,[null,null]))
a.a.push(b)},
vE:function(a){var t
if($.$get$lW().V(0,a)){t=$.$get$lW().n(0,a)
if(t.a instanceof O.c7)return t
throw H.l("File format for extension ."+H.z(a)+" does not match expected types.")}throw H.l("No file format found for extension ."+H.z(a))},
ip:function ip(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
mE:function mE(y1,y2,p,q,t,u,v,w,A,B,D,H,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
mZ:function mZ(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,H,I,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
tV:function tV(){},
tR:function tR(){},
tS:function tS(){}},X={iq:function iq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},i9:function i9(){},m5:function m5(y1,y2,p,q,t,u,v,w,A,B,D,H,I,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},ma:function ma(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},F:function F(a,b,c){this.a=a
this.b=b
this.c=c}},N={a5:function a5(){},mF:function mF(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},nP:function nP(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},nW:function nW(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},of:function of(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},oh:function oh(y1,y2,p,q,t,u,v,w,A,B,D,H,I,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},p4:function p4(y1,y2,p,q,t,u,v,w,A,B,D,H,I,P,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.P=P
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
Fa:function(a){var t,s,r,q,p,o,n,m,l
t=J.cJ(a)
s=new W.k1(document.querySelectorAll("link"),[null])
for(r=new H.dM(s,s.gm(s),0,null,[null]);r.G();){q=r.d
p=J.ar(q)
if(!!p.$ishr&&q.rel==="stylesheet"){o=$.$get$nC()
H.z(p.gaf(q))
o.toString
o=t.length
n=Math.min(o,J.c_(p.gaf(q)))
for(m=0;m<n;++m){if(m>=o)return H.w(t,m)
if(t[m]!==J.fE(p.gaf(q),m)){l=C.c.ai(t,m)
$.$get$nC().toString
return l.split("/").length-1}continue}}}$.$get$nC().b2(C.i,"Didn't find a css link to derive relative path")
return 0},
uj:function(){var t=P.x7()
if(!$.$get$nB().V(0,t))$.$get$nB().i(0,t,N.Fa(t))
return $.$get$nB().n(0,t)}},E={iC:function iC(){},nr:function nr(){},M:function M(a,b,c){this.a=a
this.b=b
this.c=c},fK:function fK(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},kr:function kr(a,b,c){this.a=a
this.b=b
this.c=c},na:function na(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},nR:function nR(y1,y2,p,q,t,u,v,w,A,B,D,H,I,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},o0:function o0(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},pu:function pu(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2}},B={m2:function m2(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
cM:function(a){var t=a.f
if($.$get$mi().V(0,t))throw H.l("Duplicate aspect id for "+a.C(0)+": "+t+" is already registered for "+J.cJ($.$get$mi().n(0,t))+".")
$.$get$mi().i(0,t,a)},
hj:function hj(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
pI:function pI(a){this.a=a},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a,b){this.a=a
this.b=b},
GG:function(a){return a.aV(0)},
G8:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=P.C
s=P.bY(t,P.U)
r=B.cW
q=new B.eE(s,P.bY(t,t),J.y8(a),!1,null,null)
q.ca(null,null,r)
for(p=J.y7(a.gcL()),p=p.gT(p);p.G();){o=p.gN()
s.i(0,o,J.fE(a.gcL(),o))}for(s=a.gh3(),s=s.gaD(s),s=s.gT(s),p=q.d,n=a.d;s.G();){o=s.gN()
p.i(0,o,n.n(0,o))}for(s=a.b,p=s.length,r=[r],m=0;m<s.length;s.length===p||(0,H.bT)(s),++m){l=s[m]
n=J.b4(l)
k=n.gX(l)
j=J.yd(k)
k=k.gbQ()
i=new B.cW(k)
if(k==null){k=P.bY(t,t)
i.a=k}k.i(0,"MAIN",j)
n=n.gb7(l)
C.b.h(q.b,new Q.f(i,n,r))}return q},
oW:function oW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oY:function oY(a){this.a=a},
oX:function oX(a,b){this.a=a
this.b=b},
cW:function cW(a){this.a=a},
eE:function eE(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
hW:function hW(a,b){this.a=a
this.b=b}},Q={mb:function mb(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},me:function me(){},nH:function nH(a){this.a=a},nE:function nE(a){this.a=a},mI:function mI(y1,y2,p,q,t,u,v,w,A,B,D,H,I,P,ad,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.P=P
_.ad=ad
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},nX:function nX(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},pt:function pt(y1,y2,p,q,t,u,v,w,A,B,D,H,I,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},jD:function jD(){},
H:function(a,b,c){var t=new Q.dU(null,null,[c])
t.ca(a,b,c)
return t},
uP:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.H(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.dW(a,"$iso",[e],"$aso"))if(H.dW(a,"$iscy",[e],"$ascy"))for(s=J.cQ(a.gbi()),r=0;s.G();){q=s.gN()
p=t.b
o=p.length
if(r>=o)return H.w(p,r)
p[r]=q;++r}else for(s=a.gT(a),p=[H.O(t,0)],r=0;s.G();){n=s.gN()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.w(o,r)
o[r]=new Q.f(n,m,p);++r}else for(s=a.gT(a),p=[e],o=[H.O(t,0)];s.G();){l=s.gN()
if(H.GX(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.w(m,0)
m[0]=new Q.f(l,k,o)}else if(H.dW(l,"$isf",p,null)){m=t.b
k=m.length
if(0>=k)return H.w(m,0)
m[0]=l}else throw H.l("Invalid entry type "+H.z(J.v9(l))+" for WeightedList<"+H.z(H.bZ(H.dz(e)))+">. Should be "+H.z(H.bZ(H.dz(e)))+" or WeightPair<"+H.z(H.bZ(H.dz(e)))+">.")}return t},
uQ:function(a,b,c,d){return new Q.jS(J.vb(a.gbi(),new Q.px(c,d,b)),null,[c,d])},
cy:function cy(){},
dU:function dU(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
hU:function hU(){},
f:function f(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eG:function eG(){},
hT:function hT(){},
pw:function pw(a,$ti){this.a=a
this.$ti=$ti},
jS:function jS(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
px:function px(a,b,c){this.a=a
this.b=b
this.c=c},
o6:function(){var t=0,s=P.bp(),r
var $async$o6=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:t=3
return P.ct(A.ht("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$o6)
case 3:r=A.ht("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$o6,s)}},G={mL:function mL(y1,y2,p,q,t,u,v,w,A,B,D,H,I,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.D=D
_.H=H
_.I=I
_.P=P
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},nJ:function nJ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
yU:function(a){var t,s,r,q,p,o,n,m,l
t=G.Y
s=P.u1(a,t)
r=P.a4(null,null,null,t)
q=H.a([],[G.d])
for(t=G.EP(),p=J.cQ(t.a),t=new H.jT(p,t.b,[H.O(t,0)]);t.G();){o=p.gN()
if(o.eq(s))q.push(o)}C.b.eI(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bT)(q),++n){o=q[n]
if(o.eq(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.bT)(p),++l)s.ag(0,p[l])}}if(s.a!==0)r.bo(0,s)
return r},
EP:function(){var t=$.$get$c()
t.toString
return new H.hV(t,new G.mu(),[H.O(t,0)])},
Y:function Y(){},
aX:function aX(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
d:function d(d,e,a,b,c){var _=this
_.d=d
_.e=e
_.a=a
_.b=b
_.c=c},
mu:function mu(){}},F={nb:function nb(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},pD:function pD(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
EU:function(a){if(a===C.h){window
return C.j.gas(C.j)}if(a===C.i){window
return C.j.ghZ()}if(a===C.Z){window
return C.j.gho()}return P.H0()},
hu:function hu(a,b){this.a=a
this.b=b},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
u_:function u_(){},
za:function(a,b,c,d){var t,s,r,q
t=new B.dq(new P.cb(""),0,0)
t.aj(a,8)
c.toString
s=H.cN(c,0,null)
for(r=s.length,q=0;q<r;++q)t.bS(s[q])
return t.b5(b)},
z9:function(a,b,c,d){var t,s,r,q,p
t=H.cz(c)
s=new Uint8Array(t)
r=new B.de(null,0)
r.a=J.dX(a,b)
for(q=0;q<c;++q){p=r.c1()
if(q>=t)return H.w(s,q)
s[q]=p}return s},
z8:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dq(new P.cb(""),0,0)
t.aj(a,8)
s=d.gcO()
r=C.f.al(Math.log(H.ke(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cN(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.w(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.w(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.bS(o-1)
t.aj(a,r)}return t.b5(b)},
z7:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cz(c)
s=new Uint8Array(t)
r=d.y
q=C.f.al(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.de(null,0)
p.a=J.dX(a,b)
for(o=0;o<c;){n=p.c1()+1
m=p.a6(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
z6:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dq(new P.cb(""),0,0)
t.aj(a,8)
c.toString
s=H.cN(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.w(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.w(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.bS(p-1)
t.bS(a)}return t.b5(b)},
z5:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cz(c)
s=new Uint8Array(t)
r=new B.de(null,0)
r.a=J.dX(a,b)
for(q=0;q<c;){p=r.c1()+1
o=r.c1()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.w(s,m)
s[m]=o}q+=p}return s}},R={
Fu:function(a){var t,s
if(a.gm(a).aG(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.gi5(s).gii().e8("checking for two players, ps is "+H.z(a)+", ret is "+t)
return t},
Fi:function(a){a.gae(a).gbT()
return!1},
Ft:function(a){a.gae(a).gbT()
return!1},
Fs:function(a){a.gae(a).gbT()
return!1},
Fr:function(a){return a.gae(a).gbp().gih()},
Fp:function(a){return a.gae(a).gbp().gie()},
Fo:function(a){return a.gae(a).gbp().gic()},
Fl:function(a){return a.gae(a).gbp().gia()},
Fn:function(a){return a.gae(a).gbp().gib()},
Fq:function(a){return a.gae(a).gbp().gig()},
Fm:function(a){var t=a.gae(a)
t.gbT()
t.gbT()
return!1},
Fj:function(a){return!0},
Fk:function(a){a.gae(a).gi7()
return!1},
nQ:function nQ(){},
a0:function a0(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
R:function R(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
a6:function a6(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
bA:function bA(c,d,e,f,r,x,y,z,Q,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.a=a
_.b=b},
oP:function oP(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2},
he:function he(){},
ui:function ui(){},
uh:function uh(){}},D={oT:function oT(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
G2:function(){if($.wP)return
$.wP=!0
var t=new D.cG("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
t.y=0
$.on=t
t=new D.cG("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.G1=t
t=new D.jV(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
t.y=2.5
t.Q=1
$.hO=t
t=new D.jV(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
t.y=2.5
$.ex=t
t=new D.cG("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.G0=t
t=new D.cG("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.dR=t
t=new D.nU("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.ey=t
t=new D.cG("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.cx=t
t=new D.cG("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.fp=t
t=new D.cG("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.hM=t
t=new D.cG("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.hN=t
t=new D.cG("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.dv=t
t=new D.cG("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cO().push(t)
$.ca=t},
uD:function(){var t=$.$get$cO()
return new H.hV(t,new D.oo(),[H.O(t,0)])},
oo:function oo(){},
cG:function cG(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
jV:function jV(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.cx=cx
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch},
nU:function nU(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch}}
var v=[C,H,J,P,W,T,S,K,L,M,U,O,Y,V,A,Z,X,N,E,B,Q,G,F,R,D]
setFunctionNamesIfNecessary(v)
var $={}
H.tX.prototype={}
J.h.prototype={
S:function(a,b){return a===b},
ga5:function(a){return H.er(a)},
C:function(a){return H.nN(a)},
ga9:function(a){return new H.dT(H.kh(a),null)},
$ishe:1,
$isac:1,
$isfj:1,
$isac:1,
$ismA:1,
$ish:1,
$ismA:1,
$ish:1,
$ishw:1,
$isac:1}
J.my.prototype={
C:function(a){return String(a)},
ga5:function(a){return a?519018:218159},
ga9:function(a){return C.ae},
$isdb:1}
J.mz.prototype={
S:function(a,b){return null==b},
C:function(a){return"null"},
ga5:function(a){return 0},
ga9:function(a){return C.a8},
$isd6:1}
J.hp.prototype={
ga5:function(a){return 0},
ga9:function(a){return C.a7},
C:function(a){return String(a)},
$ismA:1,
h:function(a,b){return a.add(b)},
ag:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gc_:function(a){return a.left},
gc4:function(a){return a.top},
gb8:function(a){return a.width},
gb0:function(a){return a.height},
hD:function(a,b){return a.parse(b)},
eG:function(a,b){return a.setLogging(b)},
eH:function(a,b){return a.setMaterials(b)}}
J.nG.prototype={}
J.eC.prototype={}
J.eo.prototype={
C:function(a){var t=a[$.$get$vo()]
return t==null?this.eM(a):J.cJ(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.em.prototype={
bW:function(a,b){if(!!a.immutable$list)throw H.l(new P.V(b))},
cE:function(a,b){if(!!a.fixed$length)throw H.l(new P.V(b))},
h:function(a,b){this.cE(a,"add")
a.push(b)},
a8:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.l(new P.bM(a))}},
ay:function(a,b){return new H.ff(a,b,[H.O(a,0),null])},
bg:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.z(a[r])
if(r>=t)return H.w(s,r)
s[r]=q}return s.join(b)},
d3:function(a,b){return H.wR(a,b,null,H.O(a,0))},
hd:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.l(new P.bM(a))}return s},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
c9:function(a,b,c){if(b<0||b>a.length)throw H.l(P.bE(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.l(H.bv(c))
if(c<b||c>a.length)throw H.l(P.bE(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.O(a,0)])
return H.a(a.slice(b,c),[H.O(a,0)])},
gae:function(a){if(a.length>0)return a[0]
throw H.l(H.jo())},
gbc:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.l(H.jo())},
a7:function(a,b,c,d,e){var t,s,r
this.bW(a,"setRange")
P.di(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.bb(P.bE(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.l(H.wq())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)},
bY:function(a,b,c,d){var t
this.bW(a,"fill range")
P.di(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aF:function(a,b,c,d){var t,s,r,q,p,o
this.cE(a,"replaceRange")
P.di(b,c,a.length,null,null,null)
d=C.c.aq(d)
if(typeof c!=="number")return c.an()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.aA(a,b,r,d)
if(p!==0){this.a7(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a7(a,r,o,a,c)
this.aA(a,b,r,d)}},
hb:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.l(new P.bM(a))}return!0},
d4:function(a,b){var t
this.bW(a,"sort")
t=b==null?P.H_():b
H.jJ(a,0,a.length-1,t)},
eI:function(a){return this.d4(a,null)},
b1:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.bc(a[t],b))return t
return-1},
bf:function(a,b){return this.b1(a,b,0)},
ac:function(a,b){var t
for(t=0;t<a.length;++t)if(J.bc(a[t],b))return!0
return!1},
gY:function(a){return a.length===0},
C:function(a){return P.jn(a,"[","]")},
a2:function(a,b){var t=H.a(a.slice(0),[H.O(a,0)])
return t},
aq:function(a){return this.a2(a,!0)},
gT:function(a){return new J.i8(a,a.length,0,null,[H.O(a,0)])},
ga5:function(a){return H.er(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cE(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dC(b,"newLength",null))
if(b<0)throw H.l(P.bE(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c4(a,b))
if(b>=a.length||b<0)throw H.l(H.c4(a,b))
return a[b]},
i:function(a,b,c){this.bW(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c4(a,b))
if(b>=a.length||b<0)throw H.l(H.c4(a,b))
a[b]=c},
$isay:1,
$asay:function(){},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
J.tW.prototype={}
J.i8.prototype={
gN:function(){return this.d},
G:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.l(H.bT(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fd.prototype={
aB:function(a,b){var t
if(typeof b!=="number")throw H.l(H.bv(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcM(b)
if(this.gcM(a)===t)return 0
if(this.gcM(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcM:function(a){return a===0?1/a<0:a<0},
al:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.l(new P.V(""+a+".floor()"))},
bA:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.l(new P.V(""+a+".round()"))},
ab:function(a,b,c){if(C.a.aB(b,c)>0)throw H.l(H.bv(b))
if(this.aB(a,b)<0)return b
if(this.aB(a,c)>0)return c
return a},
l:function(a){return a},
bC:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.l(P.bE(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.Z(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.bb(new P.V("Unexpected toString result: "+t))
r=J.bd(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.au("0",q)},
C:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga5:function(a){return a&0x1FFFFFFF},
d0:function(a){return-a},
W:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a+b},
au:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a*b},
bG:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
d8:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dP(a,b)},
ap:function(a,b){return(a|0)===a?a/b|0:this.dP(a,b)},
dP:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.l(new P.V("Result of truncating division is "+H.z(t)+": "+H.z(a)+" ~/ "+H.z(b)))},
aw:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
if(b<0)throw H.l(H.bv(b))
return b>31?0:a<<b>>>0},
ar:function(a,b){return b>31?0:a<<b>>>0},
aY:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
fJ:function(a,b){if(b<0)throw H.l(H.bv(b))
return b>31?0:a>>>b},
dO:function(a,b){return b>31?0:a>>>b},
a3:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a<b},
aG:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a>b},
av:function(a,b){if(typeof b!=="number")throw H.l(H.bv(b))
return a>=b},
ga9:function(a){return C.ah},
$isdn:1}
J.jr.prototype={
ga9:function(a){return C.ag},
$isU:1,
$isdn:1,
$isD:1}
J.jq.prototype={
ga9:function(a){return C.af},
$isU:1,
$isdn:1}
J.en.prototype={
Z:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c4(a,b))
if(b<0)throw H.l(H.c4(a,b))
if(b>=a.length)H.bb(H.c4(a,b))
return a.charCodeAt(b)},
a4:function(a,b){if(b>=a.length)throw H.l(H.c4(a,b))
return a.charCodeAt(b)},
cB:function(a,b,c){if(c>b.length)throw H.l(P.bE(c,0,b.length,null,null))
return new H.qO(b,a,c)},
aQ:function(a,b){return this.cB(a,b,0)},
ed:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.l(P.bE(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.Z(b,c+s)!==this.a4(a,s))return
return new H.jO(c,b,a)},
W:function(a,b){if(typeof b!=="string")throw H.l(P.dC(b,null,null))
return a+b},
ha:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.ai(a,s-t)},
cV:function(a,b,c){return H.v2(a,b,c)},
hS:function(a,b,c){return H.Hs(a,b,c,null)},
eJ:function(a,b){if(b==null)H.bb(H.bv(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.ho&&b.gdB().exec("").length-2===0)return a.split(b.gfw())
else return this.fd(a,b)},
aF:function(a,b,c,d){var t,s
H.uX(b)
c=P.di(b,c,a.length,null,null,null)
H.uX(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fd:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.C])
for(s=J.y_(b,a),s=s.gT(s),r=0,q=1;s.G();){p=s.gN()
o=p.gd5(p)
n=p.gdZ(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.L(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.ai(a,r))
return t},
aH:function(a,b,c){var t
H.uX(c)
if(typeof c!=="number")return c.a3()
if(c<0||c>a.length)throw H.l(P.bE(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.yh(b,a,c)!=null},
ah:function(a,b){return this.aH(a,b,0)},
L:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.bb(H.bv(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.bb(H.bv(c))
if(typeof b!=="number")return b.a3()
if(b<0)throw H.l(P.jG(b,null,null))
if(typeof c!=="number")return H.a8(c)
if(b>c)throw H.l(P.jG(b,null,null))
if(c>a.length)throw H.l(P.jG(c,null,null))
return a.substring(b,c)},
ai:function(a,b){return this.L(a,b,null)},
hY:function(a){return a.toUpperCase()},
bj:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a4(t,0)===133){r=J.EQ(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.Z(t,q)===133?J.tT(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
er:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.Z(t,r)===133)s=J.tT(t,r)}else{s=J.tT(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
au:function(a,b){var t,s
if(typeof b!=="number")return H.a8(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.l(C.I)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
b1:function(a,b,c){var t
if(c<0||c>a.length)throw H.l(P.bE(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
bf:function(a,b){return this.b1(a,b,0)},
hu:function(a,b,c){var t
if(b==null)H.bb(H.bv(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.bb(P.bE(t,0,c,null,null))
if(b.ck(a,t)!=null)return t}return-1},
ea:function(a,b){return this.hu(a,b,null)},
dX:function(a,b,c){if(c>a.length)throw H.l(P.bE(c,0,a.length,null,null))
return H.Hr(a,b,c)},
ac:function(a,b){return this.dX(a,b,0)},
gY:function(a){return a.length===0},
aB:function(a,b){var t
if(typeof b!=="string")throw H.l(H.bv(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
C:function(a){return a},
ga5:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
ga9:function(a){return C.a9},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c4(a,b))
if(b>=a.length||b<0)throw H.l(H.c4(a,b))
return a[b]},
$isay:1,
$asay:function(){},
$isC:1,
$isuk:1}
H.kO.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.Z(this.a,b)},
$ashR:function(){return[P.D]},
$asjs:function(){return[P.D]},
$ashF:function(){return[P.D]},
$asp:function(){return[P.D]},
$ast:function(){return[P.D]},
$aso:function(){return[P.D]}}
H.t.prototype={$ast:null}
H.ep.prototype={
gT:function(a){return new H.dM(this,this.gm(this),0,null,[H.as(this,"ep",0)])},
a8:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.U(0,s))
if(t!==this.gm(this))throw H.l(new P.bM(this))}},
gY:function(a){return this.gm(this)===0},
gae:function(a){if(this.gm(this)===0)throw H.l(H.jo())
return this.U(0,0)},
ac:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.bc(this.U(0,s),b))return!0
if(t!==this.gm(this))throw H.l(new P.bM(this))}return!1},
ay:function(a,b){return new H.ff(this,b,[H.as(this,"ep",0),null])},
a2:function(a,b){var t,s,r
t=H.a([],[H.as(this,"ep",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.U(0,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
aq:function(a){return this.a2(a,!0)}}
H.oN.prototype={
gfe:function(){var t=J.c_(this.a)
return t},
gfK:function(){var t,s
t=J.c_(this.a)
s=this.b
if(J.cu(s,t))return t
return s},
gm:function(a){var t,s
t=J.c_(this.a)
s=this.b
if(J.v4(s,t))return 0
if(typeof s!=="number")return H.a8(s)
return t-s},
U:function(a,b){var t=J.e9(this.gfK(),b)
if(J.ea(b,0)||J.v4(t,this.gfe()))throw H.l(P.by(b,this,"index",null,null))
return J.v6(this.a,t)},
a2:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.bd(s)
q=r.gm(s)
if(typeof t!=="number")return H.a8(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.U(s,t+m)
if(m>=n.length)return H.w(n,m)
n[m]=o
if(r.gm(s)<q)throw H.l(new P.bM(this))}return n},
aq:function(a){return this.a2(a,!0)},
eU:function(a,b,c,d){var t=this.b
if(J.ea(t,0))H.bb(P.bE(t,0,null,"start",null))}}
H.dM.prototype={
gN:function(){return this.d},
G:function(){var t,s,r,q
t=this.a
s=J.bd(t)
r=s.gm(t)
if(this.b!==r)throw H.l(new P.bM(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.U(t,q);++this.c
return!0}}
H.hv.prototype={
gT:function(a){return new H.jt(null,J.cQ(this.a),this.b,this.$ti)},
gm:function(a){return J.c_(this.a)},
gY:function(a){return J.rL(this.a)},
$aso:function(a,b){return[b]}}
H.fY.prototype={$ist:1,
$ast:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.jt.prototype={
G:function(){var t=this.b
if(t.G()){this.a=this.c.$1(t.gN())
return!0}this.a=null
return!1},
gN:function(){return this.a},
$asjp:function(a,b){return[b]}}
H.ff.prototype={
gm:function(a){return J.c_(this.a)},
U:function(a,b){return this.b.$1(J.v6(this.a,b))},
$asep:function(a,b){return[b]},
$ast:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.hV.prototype={
gT:function(a){return new H.jT(J.cQ(this.a),this.b,this.$ti)},
ay:function(a,b){return new H.hv(this,b,[H.O(this,0),null])}}
H.jT.prototype={
G:function(){var t,s
for(t=this.a,s=this.b;t.G();)if(s.$1(t.gN())===!0)return!0
return!1},
gN:function(){return this.a.gN()}}
H.iz.prototype={
sm:function(a,b){throw H.l(new P.V("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.l(new P.V("Cannot add to a fixed-length list"))},
aF:function(a,b,c,d){throw H.l(new P.V("Cannot remove from a fixed-length list"))}}
H.pf.prototype={
i:function(a,b,c){throw H.l(new P.V("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.l(new P.V("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.l(new P.V("Cannot add to an unmodifiable list"))},
a7:function(a,b,c,d,e){throw H.l(new P.V("Cannot modify an unmodifiable list"))},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)},
aF:function(a,b,c,d){throw H.l(new P.V("Cannot remove from an unmodifiable list"))},
bY:function(a,b,c,d){throw H.l(new P.V("Cannot modify an unmodifiable list"))},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
H.hR.prototype={$asp:null,$ast:null,$aso:null,$isp:1,$ist:1,$iso:1}
H.rF.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.rG.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.qw.prototype={}
H.fw.prototype={
dT:function(a,b){if(!this.f.S(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cw()},
hR:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.ag(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.w(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.w(p,q)
p[q]=r
if(q===s.c)s.dt();++s.d}this.y=!1}this.cw()},
fO:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.ar(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.w(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
hP:function(a){var t,s,r
if(this.ch==null)return
for(t=J.ar(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.bb(new P.V("removeRange"))
P.di(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
eF:function(a,b){if(!this.r.S(0,a))return
this.db=b},
hj:function(a,b,c){var t=J.ar(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){J.fG(a,c)
return}t=this.cx
if(t==null){t=P.u2(null,null)
this.cx=t}t.aN(0,new H.qr(a,c))},
hi:function(a,b){var t
if(!this.r.S(0,a))return
t=J.ar(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){this.bZ()
return}t=this.cx
if(t==null){t=P.u2(null,null)
this.cx=t}t.aN(0,this.ght())},
hk:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fD(a)
if(b!=null)P.fD(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cJ(a)
s[1]=b==null?null:J.cJ(b)
for(r=new P.dw(t,t.r,null,null,[null]),r.c=t.e;r.G();)J.fG(r.d,s)},
bt:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.cm(o)
p=H.cl(o)
this.hk(q,p)
if(this.db===!0){this.bZ()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ghs()
if(this.cx!=null)for(;n=this.cx,!n.gY(n);)this.cx.el().$0()}return s},
cN:function(a){return this.b.n(0,a)},
dc:function(a,b){var t=this.b
if(t.V(0,a))throw H.l(P.ll("Registry: ports must be registered only once."))
t.i(0,a,b)},
cw:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.bZ()},
bZ:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.ba(0)
for(t=this.b,s=t.gc5(t),s=s.gT(s);s.G();)s.gN().f6()
t.ba(0)
this.c.ba(0)
u.globalState.z.ag(0,this.a)
this.dx.ba(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.w(t,p)
J.fG(q,t[p])}this.ch=null}},
ghs:function(){return this.d},
gfZ:function(){return this.e}}
H.qr.prototype={
$0:function(){J.fG(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.q2.prototype={
h4:function(){var t=this.a
if(t.b===t.c)return
return t.el()},
ep:function(){var t,s,r
t=this.h4()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.V(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gY(s)}else s=!1
else s=!1
else s=!1
if(s)H.bb(P.ll("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gY(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hs(["command","close"])
r=new H.dx(!0,new P.k5(0,null,null,null,null,null,0,[null,P.D])).az(r)
s.toString
self.postMessage(r)}return!1}t.hK()
return!0},
dJ:function(){if(self.window!=null)new H.q3(this).$0()
else for(;this.ep(););},
bB:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dJ()
else try{this.dJ()}catch(r){t=H.cm(r)
s=H.cl(r)
q=u.globalState.Q
p=P.hs(["command","error","msg",H.z(t)+"\n"+H.z(s)])
p=new H.dx(!0,P.i0(null,P.D)).az(p)
q.toString
self.postMessage(p)}}}
H.q3.prototype={
$0:function(){if(!this.a.ep())return
P.wV(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.eJ.prototype={
hK:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bt(this.b)}}
H.qv.prototype={}
H.mj.prototype={
$0:function(){H.zT(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mk.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fC(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fC(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cw()},
$S:function(){return{func:1,v:true}}}
H.pQ.prototype={}
H.fx.prototype={
b9:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdA())return
r=H.GD(b)
if(t.gfZ()===s){s=J.bd(r)
switch(s.n(r,0)){case"pause":t.dT(s.n(r,1),s.n(r,2))
break
case"resume":t.hR(s.n(r,1))
break
case"add-ondone":t.fO(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.hP(s.n(r,1))
break
case"set-errors-fatal":t.eF(s.n(r,1),s.n(r,2))
break
case"ping":t.hj(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.hi(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.ag(0,s)
break}return}u.globalState.f.a.aN(0,new H.eJ(t,new H.qy(this,r),"receive"))},
S:function(a,b){if(b==null)return!1
return b instanceof H.fx&&J.bc(this.b,b.b)},
ga5:function(a){return this.b.gcm()}}
H.qy.prototype={
$0:function(){var t=this.a.b
if(!t.gdA())t.f2(0,this.b)},
$S:function(){return{func:1}}}
H.i3.prototype={
b9:function(a,b){var t,s,r
t=P.hs(["command","message","port",this,"msg",b])
s=new H.dx(!0,P.i0(null,P.D)).az(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
S:function(a,b){if(b==null)return!1
return b instanceof H.i3&&J.bc(this.b,b.b)&&J.bc(this.a,b.a)&&J.bc(this.c,b.c)},
ga5:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aw()
s=this.a
if(typeof s!=="number")return s.aw()
r=this.c
if(typeof r!=="number")return H.a8(r)
return(t<<16^s<<8^r)>>>0}}
H.fm.prototype={
f6:function(){this.c=!0
this.b=null},
f2:function(a,b){if(this.c)return
this.b.$1(b)},
$isFv:1,
gcm:function(){return this.a},
gdA:function(){return this.c}}
H.p6.prototype={
eV:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aN(0,new H.eJ(s,new H.p7(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dl(new H.p8(this,b),0),a)}else throw H.l(new P.V("Timer greater than 0."))}}
H.p7.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.p8.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dD.prototype={
ga5:function(a){var t=this.a
if(typeof t!=="number")return t.d2()
t=C.d.aY(t,0)^C.d.ap(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dD){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcm:function(){return this.a}}
H.dx.prototype={
az:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.ar(a)
if(!!t.$isfg)return["buffer",a]
if(!!t.$iseq)return["typed",a]
if(!!t.$isay)return this.eB(a)
if(!!t.$iszQ){r=this.gey()
q=t.gaD(a)
q=H.dh(q,r,H.as(q,"o",0),null)
q=P.d4(q,!0,H.as(q,"o",0))
t=t.gc5(a)
t=H.dh(t,r,H.as(t,"o",0),null)
return["map",q,P.d4(t,!0,H.as(t,"o",0))]}if(!!t.$ismA)return this.eC(a)
if(!!t.$ish)this.es(a)
if(!!t.$isFv)this.bE(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfx)return this.eD(a)
if(!!t.$isi3)return this.eE(a)
if(!!t.$iseU){p=a.$static_name
if(p==null)this.bE(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdD)return["capability",a.a]
if(!(a instanceof P.ac))this.es(a)
return["dart",u.classIdExtractor(a),this.eA(u.classFieldsExtractor(a))]},
bE:function(a,b){throw H.l(new P.V((b==null?"Can't transmit:":b)+" "+H.z(a)))},
es:function(a){return this.bE(a,null)},
eB:function(a){var t=this.ez(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bE(a,"Can't serialize indexable: ")},
ez:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.az(a[s])
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
eA:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.az(a[t]))
return a},
eC:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bE(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.az(a[t[r]])
if(r>=s.length)return H.w(s,r)
s[r]=q}return["js-object",t,s]},
eE:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
eD:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcm()]
return["raw sendport",a]}}
H.eH.prototype={
aZ:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.l(P.dB("Bad serialized message: "+H.z(a)))
switch(C.b.gae(a)){case"ref":if(1>=a.length)return H.w(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.w(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.br(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return H.a(this.br(r),[null])
case"mutable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return this.br(r)
case"const":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.br(r),[null])
s.fixed$length=Array
return s
case"map":return this.h8(a)
case"sendport":return this.h9(a)
case"raw sendport":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.h7(a)
case"function":if(1>=a.length)return H.w(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.w(a,1)
return new H.dD(a[1])
case"dart":s=a.length
if(1>=s)return H.w(a,1)
q=a[1]
if(2>=s)return H.w(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.br(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.l("couldn't deserialize: "+H.z(a))}},
br:function(a){var t,s,r
t=J.bd(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.a8(r)
if(!(s<r))break
t.i(a,s,this.aZ(t.n(a,s)));++s}return a},
h8:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
q=P.mQ()
this.b.push(q)
s=J.yl(J.vb(s,this.gh6()))
for(t=J.bd(s),p=J.bd(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.aZ(p.n(r,o)))
return q},
h9:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
if(3>=t)return H.w(a,3)
q=a[3]
if(J.bc(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cN(q)
if(o==null)return
n=new H.fx(o,r)}else n=new H.i3(s,q,r)
this.b.push(n)
return n},
h7:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bd(s)
p=J.bd(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.a8(n)
if(!(o<n))break
q[t.n(s,o)]=this.aZ(p.n(r,o));++o}return q}}
H.kR.prototype={
gY:function(a){return this.gm(this)===0},
C:function(a){return P.wx(this)},
i:function(a,b,c){return H.yW()},
$isbm:1,
$asbm:null}
H.kS.prototype={
gm:function(a){return this.a},
V:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.V(0,b))return
return this.dr(b)},
dr:function(a){return this.b[a]},
a8:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.dr(q))}}}
H.nT.prototype={}
H.pc.prototype={
aJ:function(a){var t,s,r
t=new RegExp(this.a).exec(a)
if(t==null)return
s=Object.create(null)
r=this.b
if(r!==-1)s.arguments=t[r+1]
r=this.c
if(r!==-1)s.argumentsExpr=t[r+1]
r=this.d
if(r!==-1)s.expr=t[r+1]
r=this.e
if(r!==-1)s.method=t[r+1]
r=this.f
if(r!==-1)s.receiver=t[r+1]
return s}}
H.jz.prototype={
C:function(a){var t=this.b
if(t==null)return"NullError: "+H.z(this.a)
return"NullError: method not found: '"+H.z(t)+"' on null"}}
H.mD.prototype={
C:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.z(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.z(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.z(this.a)+")"}}
H.pe.prototype={
C:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.h5.prototype={
gaL:function(){return this.b}}
H.rH.prototype={
$1:function(a){if(!!J.ar(a).$isee)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.k8.prototype={
C:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.ru.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.rv.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.rw.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.rx.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.ry.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.eU.prototype={
C:function(a){return"Closure '"+H.nO(this).trim()+"'"},
gi3:function(){return this},
$D:null}
H.oS.prototype={}
H.om.prototype={
C:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fN.prototype={
S:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fN))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga5:function(a){var t,s
t=this.c
if(t==null)s=H.er(this.a)
else s=typeof t!=="object"?J.dA(t):H.er(t)
t=H.er(this.b)
if(typeof s!=="number")return s.i6()
return(s^t)>>>0},
C:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.z(this.d)+"' of "+H.nN(t)}}
H.kL.prototype={
C:function(a){return this.a}}
H.nZ.prototype={
C:function(a){return"RuntimeError: "+H.z(this.a)}}
H.dT.prototype={
C:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga5:function(a){return J.dA(this.a)},
S:function(a,b){if(b==null)return!1
return b instanceof H.dT&&J.bc(this.a,b.a)}}
H.u.prototype={
gm:function(a){return this.a},
gY:function(a){return this.a===0},
gaD:function(a){return new H.mO(this,[H.O(this,0)])},
gc5:function(a){return H.dh(this.gaD(this),new H.mC(this),H.O(this,0),H.O(this,1))},
V:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dk(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dk(s,b)}else return this.hp(b)},
hp:function(a){var t=this.d
if(t==null)return!1
return this.bw(this.bJ(t,this.bv(a)),a)>=0},
bo:function(a,b){b.a8(0,new H.mB(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bn(t,b)
return s==null?null:s.gb_()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bn(r,b)
return s==null?null:s.gb_()}else return this.hq(b)},
hq:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bJ(t,this.bv(a))
r=this.bw(s,a)
if(r<0)return
return s[r].gb_()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.co()
this.b=t}this.da(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.co()
this.c=s}this.da(s,b,c)}else{r=this.d
if(r==null){r=this.co()
this.d=r}q=this.bv(b)
p=this.bJ(r,q)
if(p==null)this.cu(r,q,[this.cp(b,c)])
else{o=this.bw(p,b)
if(o>=0)p[o].sb_(c)
else p.push(this.cp(b,c))}}},
ag:function(a,b){if(typeof b==="string")return this.dI(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dI(this.c,b)
else return this.hr(b)},
hr:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bJ(t,this.bv(a))
r=this.bw(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.dR(q)
return q.gb_()},
ba:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
a8:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.l(new P.bM(this))
t=t.c}},
da:function(a,b,c){var t=this.bn(a,b)
if(t==null)this.cu(a,b,this.cp(b,c))
else t.sb_(c)},
dI:function(a,b){var t
if(a==null)return
t=this.bn(a,b)
if(t==null)return
this.dR(t)
this.dn(a,b)
return t.gb_()},
cp:function(a,b){var t,s
t=new H.mN(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dR:function(a){var t,s
t=a.gfD()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bv:function(a){return J.dA(a)&0x3ffffff},
bw:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bc(a[s].ge7(),b))return s
return-1},
C:function(a){return P.wx(this)},
bn:function(a,b){return a[b]},
bJ:function(a,b){return a[b]},
cu:function(a,b,c){a[b]=c},
dn:function(a,b){delete a[b]},
dk:function(a,b){return this.bn(a,b)!=null},
co:function(){var t=Object.create(null)
this.cu(t,"<non-identifier-key>",t)
this.dn(t,"<non-identifier-key>")
return t},
$iszQ:1,
$isbm:1,
$asbm:null}
H.mC.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.mB.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eL(function(a,b){return{func:1,args:[a,b]}},this.a,"u")}}
H.mN.prototype={
ge7:function(){return this.a},
gb_:function(){return this.b},
gfD:function(){return this.d},
sb_:function(a){return this.b=a}}
H.mO.prototype={
gm:function(a){return this.a.a},
gY:function(a){return this.a.a===0},
gT:function(a){var t,s
t=this.a
s=new H.mP(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
ac:function(a,b){return this.a.V(0,b)},
a8:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.l(new P.bM(t))
s=s.c}}}
H.mP.prototype={
gN:function(){return this.d},
G:function(){var t=this.a
if(this.b!==t.r)throw H.l(new P.bM(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.rq.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.rr.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.C]}}}
H.rs.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.C]}}}
H.ho.prototype={
C:function(a){return"RegExp/"+this.a+"/"},
gdC:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.tU(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdB:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.tU(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cB:function(a,b,c){var t
H.xJ(b)
t=J.c_(b)
if(typeof t!=="number")return H.a8(t)
t=c>t
if(t)throw H.l(P.bE(c,0,J.c_(b),null,null))
return new H.pL(this,b,c)},
aQ:function(a,b){return this.cB(a,b,0)},
ff:function(a,b){var t,s
t=this.gdC()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.k6(this,s)},
ck:function(a,b){var t,s
t=this.gdB()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.w(s,-1)
if(s.pop()!=null)return
return new H.k6(this,s)},
ed:function(a,b,c){if(c<0||c>b.length)throw H.l(P.bE(c,0,b.length,null,null))
return this.ck(b,c)},
$isFx:1,
$isuk:1,
gfw:function(){return this.b}}
H.k6.prototype={
gd5:function(a){return this.b.index},
gdZ:function(a){var t=this.b
return t.index+t[0].length},
aV:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.w(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
$isd5:1}
H.pL.prototype={
gT:function(a){return new H.jX(this.a,this.b,this.c,null)},
$ashn:function(){return[P.d5]},
$aso:function(){return[P.d5]}}
H.jX.prototype={
gN:function(){return this.d},
G:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
t=J.c_(t)
if(typeof t!=="number")return H.a8(t)
if(s<=t){r=this.a.ff(this.b,this.c)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.jO.prototype={
gdZ:function(a){return this.a+this.c.length},
n:function(a,b){return this.aV(b)},
aV:function(a){if(a!==0)throw H.l(P.jG(a,null,null))
return this.c},
$isd5:1,
gd5:function(a){return this.a}}
H.qO.prototype={
gT:function(a){return new H.qP(this.a,this.b,this.c,null)},
$aso:function(){return[P.d5]}}
H.qP.prototype={
G:function(){var t,s,r,q,p,o,n
t=this.c
s=this.b
r=s.length
q=this.a
p=q.length
if(t+r>p){this.d=null
return!1}o=q.indexOf(s,t)
if(o<0){this.c=p+1
this.d=null
return!1}n=o+r
this.d=new H.jO(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gN:function(){return this.d}}
H.fg.prototype={
ga9:function(a){return C.a0},
fU:function(a,b,c){return H.cN(a,b,c)},
fT:function(a){return this.fU(a,0,null)},
fS:function(a,b,c){var t
H.xs(a,b,c)
t=new DataView(a,b)
return t},
fR:function(a,b){return this.fS(a,b,null)},
$isfg:1,
$isbh:1,
geb:function(a){return a.byteLength}}
H.eq.prototype={
ft:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dC(b,d,"Invalid list position"))
else throw H.l(P.bE(b,0,c,d,null))},
df:function(a,b,c,d){if(b>>>0!==b||b>c)this.ft(a,b,c,d)},
$iseq:1,
gbU:function(a){return a.buffer},
geb:function(a){return a.byteLength}}
H.nd.prototype={
ga9:function(a){return C.a1}}
H.jw.prototype={
gm:function(a){return a.length},
dN:function(a,b,c,d,e){var t,s,r
t=a.length
this.df(a,b,t,"start")
this.df(a,c,t,"end")
if(typeof b!=="number")return b.aG()
if(typeof c!=="number")return H.a8(c)
if(b>c)throw H.l(P.bE(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a3()
if(e<0)throw H.l(P.dB(e))
r=d.length
if(r-e<s)throw H.l(new P.dQ("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaF:1,
$asaF:function(){},
$isay:1,
$asay:function(){}}
H.hz.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c4(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bb(H.c4(a,b))
a[b]=c},
a7:function(a,b,c,d,e){if(!!J.ar(d).$ishz){this.dN(a,b,c,d,e)
return}this.d7(a,b,c,d,e)},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)}}
H.hB.prototype={
$asaF:function(){},
$asay:function(){},
$asp:function(){return[P.U]},
$ast:function(){return[P.U]},
$aso:function(){return[P.U]},
$isp:1,
$ist:1,
$iso:1}
H.hD.prototype={
$asaF:function(){},
$asay:function(){},
$asp:function(){return[P.U]},
$ast:function(){return[P.U]},
$aso:function(){return[P.U]}}
H.hA.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bb(H.c4(a,b))
a[b]=c},
a7:function(a,b,c,d,e){if(!!J.ar(d).$ishA){this.dN(a,b,c,d,e)
return}this.d7(a,b,c,d,e)},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)},
$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.hC.prototype={
$asaF:function(){},
$asay:function(){},
$asp:function(){return[P.D]},
$ast:function(){return[P.D]},
$aso:function(){return[P.D]},
$isp:1,
$ist:1,
$iso:1}
H.hE.prototype={
$asaF:function(){},
$asay:function(){},
$asp:function(){return[P.D]},
$ast:function(){return[P.D]},
$aso:function(){return[P.D]}}
H.ne.prototype={
ga9:function(a){return C.a2},
$isp:1,
$asp:function(){return[P.U]},
$ist:1,
$ast:function(){return[P.U]},
$iso:1,
$aso:function(){return[P.U]}}
H.nf.prototype={
ga9:function(a){return C.a3},
$isp:1,
$asp:function(){return[P.U]},
$ist:1,
$ast:function(){return[P.U]},
$iso:1,
$aso:function(){return[P.U]}}
H.ng.prototype={
ga9:function(a){return C.a4},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c4(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.nh.prototype={
ga9:function(a){return C.a5},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c4(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.ni.prototype={
ga9:function(a){return C.a6},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c4(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.nj.prototype={
ga9:function(a){return C.aa},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c4(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.nk.prototype={
ga9:function(a){return C.ab},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c4(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.jx.prototype={
ga9:function(a){return C.ac},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c4(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
H.fh.prototype={
ga9:function(a){return C.ad},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c4(a,b))
return a[b]},
c9:function(a,b,c){return new Uint8Array(a.subarray(b,H.GC(b,c,a.length)))},
$isfh:1,
$isda:1,
$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
P.pN.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.pM.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.pO.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.pP.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.r2.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.r3.prototype={
$2:function(a,b){this.a.$2(1,new H.h5(a,b))},
$S:function(){return{func:1,args:[,P.dP]}}}
P.rd.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.D,,]}}}
P.cE.prototype={}
P.rf.prototype={
$0:function(){var t,s,r
try{this.b.aI(this.a.$0())}catch(r){t=H.cm(r)
s=H.cl(r)
P.xu(this.b,t,s)}},
$S:function(){return{func:1}}}
P.lY.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.ao(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.ao(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.lX.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.w(r,t)
r[t]=a
if(s===0)this.d.dj(r)}else if(t.b===0&&!this.b)this.d.ao(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.eV.prototype={}
P.jZ.prototype={
cF:function(a,b){if(a==null)a=new P.fi()
if(this.a.a!==0)throw H.l(new P.dQ("Future already completed"))
$.an.toString
this.ao(a,b)},
bq:function(a){return this.cF(a,null)},
$iseV:1,
ghg:function(){return this.a}}
P.dV.prototype={
aC:function(a,b){var t=this.a
if(t.a!==0)throw H.l(new P.dQ("Future already completed"))
t.dd(b)},
fX:function(a){return this.aC(a,null)},
ao:function(a,b){this.a.de(a,b)}}
P.ka.prototype={
aC:function(a,b){var t=this.a
if(t.a!==0)throw H.l(new P.dQ("Future already completed"))
t.aI(b)},
ao:function(a,b){this.a.ao(a,b)}}
P.k2.prototype={
gfN:function(){return this.b.b},
ge3:function(){return(this.c&1)!==0},
ghn:function(){return(this.c&2)!==0},
ge2:function(){return this.c===8},
hl:function(a){return this.b.b.cW(this.d,a)},
hw:function(a){if(this.c!==6)return!0
return this.b.b.cW(this.d,J.fF(a))},
hh:function(a){var t,s,r
t=this.e
s=J.b4(a)
r=this.b.b
if(H.fC(t,{func:1,args:[,,]}))return r.hV(t,s.gas(a),a.gaL())
else return r.cW(t,s.gas(a))},
hm:function(){return this.b.b.en(this.d)},
gcq:function(){return this.a}}
P.bj.prototype={
gfu:function(){return this.a===2},
gcn:function(){return this.a>=4},
c3:function(a,b){var t=$.an
if(t!==C.e){t.toString
if(b!=null)b=P.xx(b,t)}return this.cv(a,b)},
b4:function(a){return this.c3(a,null)},
cv:function(a,b){var t,s
t=new P.bj(0,$.an,null,[null])
s=b==null?1:3
this.cb(new P.k2(null,t,s,a,b,[H.O(this,0),null]))
return t},
c6:function(a){var t,s
t=$.an
s=new P.bj(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.O(this,0)
this.cb(new P.k2(null,s,8,a,null,[t,t]))
return s},
cb:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcn()){s.cb(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fA(null,null,t,new P.q8(this,a))}},
dG:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcq()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcn()){p.dG(a)
return}this.a=p.a
this.c=p.c}t.a=this.bO(a)
s=this.b
s.toString
P.fA(null,null,s,new P.qg(t,this))}},
bN:function(){var t=this.c
this.c=null
return this.bO(t)},
bO:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcq()
t.a=s}return s},
aI:function(a){var t,s
t=this.$ti
if(H.dW(a,"$iscE",t,"$ascE"))if(H.dW(a,"$isbj",t,null))P.qb(a,this)
else P.xi(a,this)
else{s=this.bN()
this.a=4
this.c=a
P.fv(this,s)}},
dj:function(a){var t=this.bN()
this.a=4
this.c=a
P.fv(this,t)},
ao:function(a,b){var t=this.bN()
this.a=8
this.c=new P.eP(a,b)
P.fv(this,t)},
f8:function(a){return this.ao(a,null)},
dd:function(a){var t
if(H.dW(a,"$iscE",this.$ti,"$ascE")){this.f5(a)
return}this.a=1
t=this.b
t.toString
P.fA(null,null,t,new P.qa(this,a))},
f5:function(a){var t
if(H.dW(a,"$isbj",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fA(null,null,t,new P.qf(this,a))}else P.qb(a,this)
return}P.xi(a,this)},
de:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fA(null,null,t,new P.q9(this,a,b))},
$iscE:1,
gbP:function(){return this.a},
gfG:function(){return this.c}}
P.q8.prototype={
$0:function(){P.fv(this.a,this.b)},
$S:function(){return{func:1}}}
P.qg.prototype={
$0:function(){P.fv(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.qc.prototype={
$1:function(a){var t=this.a
t.a=0
t.aI(a)},
$S:function(){return{func:1,args:[,]}}}
P.qd.prototype={
$2:function(a,b){this.a.ao(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.qe.prototype={
$0:function(){this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.qa.prototype={
$0:function(){this.a.dj(this.b)},
$S:function(){return{func:1}}}
P.qf.prototype={
$0:function(){P.qb(this.b,this.a)},
$S:function(){return{func:1}}}
P.q9.prototype={
$0:function(){this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.qj.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hm()}catch(q){s=H.cm(q)
r=H.cl(q)
if(this.c){p=J.fF(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eP(s,r)
o.a=!0
return}if(!!J.ar(t).$iscE){if(t instanceof P.bj&&t.gbP()>=4){if(t.gbP()===8){p=this.b
p.b=t.gfG()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b4(new P.qk(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qk.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.qi.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hl(this.c)}catch(r){t=H.cm(r)
s=H.cl(r)
q=this.a
q.b=new P.eP(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.qh.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.hw(t)===!0&&q.e!=null){p=this.b
p.b=q.hh(t)
p.a=!1}}catch(o){s=H.cm(o)
r=H.cl(o)
q=this.a
p=J.fF(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eP(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.jY.prototype={}
P.dj.prototype={
ay:function(a,b){return new P.qx(b,this,[H.as(this,"dj",0),null])},
ac:function(a,b){var t,s
t={}
s=new P.bj(0,$.an,null,[P.db])
t.a=null
t.a=this.aR(new P.ot(t,this,b,s),!0,new P.ou(s),s.gbd())
return s},
a8:function(a,b){var t,s
t={}
s=new P.bj(0,$.an,null,[null])
t.a=null
t.a=this.aR(new P.oz(t,this,b,s),!0,new P.oA(s),s.gbd())
return s},
gm:function(a){var t,s
t={}
s=new P.bj(0,$.an,null,[P.D])
t.a=0
this.aR(new P.oD(t),!0,new P.oE(t,s),s.gbd())
return s},
gY:function(a){var t,s
t={}
s=new P.bj(0,$.an,null,[P.db])
t.a=null
t.a=this.aR(new P.oB(t,s),!0,new P.oC(s),s.gbd())
return s},
aq:function(a){var t,s,r
t=H.as(this,"dj",0)
s=H.a([],[t])
r=new P.bj(0,$.an,null,[[P.p,t]])
this.aR(new P.oF(this,s),!0,new P.oG(s,r),r.gbd())
return r},
gae:function(a){var t,s
t={}
s=new P.bj(0,$.an,null,[H.as(this,"dj",0)])
t.a=null
t.a=this.aR(new P.ov(t,this,s),!0,new P.ow(s),s.gbd())
return s}}
P.ot.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.xB(new P.or(this.c,a),new P.os(t,s),P.xr(t.a,s))},
$S:function(){return H.eL(function(a){return{func:1,args:[a]}},this.b,"dj")}}
P.or.prototype={
$0:function(){return J.bc(this.b,this.a)},
$S:function(){return{func:1}}}
P.os.prototype={
$1:function(a){if(a===!0)P.uU(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.db]}}}
P.ou.prototype={
$0:function(){this.a.aI(!1)},
$S:function(){return{func:1}}}
P.oz.prototype={
$1:function(a){P.xB(new P.ox(this.c,a),new P.oy(),P.xr(this.a.a,this.d))},
$S:function(){return H.eL(function(a){return{func:1,args:[a]}},this.b,"dj")}}
P.ox.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.oy.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.oA.prototype={
$0:function(){this.a.aI(null)},
$S:function(){return{func:1}}}
P.oD.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.oE.prototype={
$0:function(){this.b.aI(this.a.a)},
$S:function(){return{func:1}}}
P.oB.prototype={
$1:function(a){P.uU(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.oC.prototype={
$0:function(){this.a.aI(!0)},
$S:function(){return{func:1}}}
P.oF.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eL(function(a){return{func:1,args:[a]}},this.a,"dj")}}
P.oG.prototype={
$0:function(){this.b.aI(this.a)},
$S:function(){return{func:1}}}
P.ov.prototype={
$1:function(a){P.uU(this.a.a,this.c,a)},
$S:function(){return H.eL(function(a){return{func:1,args:[a]}},this.b,"dj")}}
P.ow.prototype={
$0:function(){var t,s,r,q
try{r=H.jo()
throw H.l(r)}catch(q){t=H.cm(q)
s=H.cl(q)
P.xu(this.a,t,s)}},
$S:function(){return{func:1}}}
P.oq.prototype={}
P.dk.prototype={
cP:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.dU()
if((t&4)===0&&(this.e&32)===0)this.du(this.gdE())},
eh:function(a){return this.cP(a,null)},
em:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gY(t)}else t=!1
if(t)this.r.c7(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.du(this.gdF())}}}},
bV:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.cd()
t=this.f
return t==null?$.$get$hf():t},
cd:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.dU()
if((this.e&32)===0)this.r=null
this.f=this.dD()},
bI:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dK(b)
else this.cc(new P.pX(b,null,[H.as(this,"dk",0)]))},
bH:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dM(a,b)
else this.cc(new P.pZ(a,b,null))},
f4:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dL()
else this.cc(C.J)},
bL:function(){},
bM:function(){},
dD:function(){return},
cc:function(a){var t,s
t=this.r
if(t==null){t=new P.qM(null,null,0,[H.as(this,"dk",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.c7(this)}},
dK:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.cX(this.a,a)
this.e=(this.e&4294967263)>>>0
this.ce((t&4)!==0)},
dM:function(a,b){var t,s
t=this.e
s=new P.pS(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.cd()
t=this.f
if(!!J.ar(t).$iscE&&t!==$.$get$hf())t.c6(s)
else s.$0()}else{s.$0()
this.ce((t&4)!==0)}},
dL:function(){var t,s
t=new P.pR(this)
this.cd()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.ar(s).$iscE&&s!==$.$get$hf())s.c6(t)
else t.$0()},
du:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.ce((t&4)!==0)},
ce:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gY(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gY(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bL()
else this.bM()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.c7(this)},
eY:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.xx(b,t)
this.c=c},
gbP:function(){return this.e}}
P.pS.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fC(s,{func:1,args:[P.ac,P.dP]})
q=t.d
p=this.b
o=t.b
if(r)q.hW(o,p,this.c)
else q.cX(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.pR.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.eo(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.k0.prototype={
gbx:function(a){return this.a},
sbx:function(a,b){return this.a=b}}
P.pX.prototype={
cQ:function(a){a.dK(this.b)}}
P.pZ.prototype={
cQ:function(a){a.dM(this.b,this.c)},
$ask0:function(){},
gas:function(a){return this.b},
gaL:function(){return this.c}}
P.pY.prototype={
cQ:function(a){a.dL()},
gbx:function(a){return},
sbx:function(a,b){throw H.l(new P.dQ("No events after a done."))}}
P.qz.prototype={
c7:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.xU(new P.qA(this,a))
this.a=1},
dU:function(){if(this.a===1)this.a=3},
gbP:function(){return this.a}}
P.qA.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbx(r)
t.b=q
if(q==null)t.c=null
r.cQ(this.b)},
$S:function(){return{func:1}}}
P.qM.prototype={
gY:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbx(0,b)
this.c=b}}}
P.qN.prototype={}
P.r5.prototype={
$0:function(){return this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.r4.prototype={
$2:function(a,b){P.GB(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dP]}}}
P.r6.prototype={
$0:function(){return this.a.aI(this.b)},
$S:function(){return{func:1}}}
P.hY.prototype={
aR:function(a,b,c,d){return this.fb(a,d,c,!0===b)},
ec:function(a,b,c){return this.aR(a,null,b,c)},
fb:function(a,b,c,d){return P.Gg(this,a,b,c,d,H.as(this,"hY",0),H.as(this,"hY",1))},
dv:function(a,b){b.bI(0,a)},
fq:function(a,b,c){c.bH(a,b)},
$asdj:function(a,b){return[b]}}
P.hZ.prototype={
bI:function(a,b){if((this.e&2)!==0)return
this.eO(0,b)},
bH:function(a,b){if((this.e&2)!==0)return
this.eP(a,b)},
bL:function(){var t=this.y
if(t==null)return
t.eh(0)},
bM:function(){var t=this.y
if(t==null)return
t.em(0)},
dD:function(){var t=this.y
if(t!=null){this.y=null
return t.bV(0)}return},
fl:function(a){this.x.dv(a,this)},
fp:function(a,b){this.x.fq(a,b,this)},
fn:function(){this.f4()},
f0:function(a,b,c,d,e,f,g){this.y=this.x.a.ec(this.gfk(),this.gfm(),this.gfo())},
$asdk:function(a,b){return[b]}}
P.qx.prototype={
dv:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.cm(q)
r=H.cl(q)
P.GA(b,s,r)
return}b.bI(0,t)}}
P.eP.prototype={
C:function(a){return H.z(this.a)},
$isee:1,
gas:function(a){return this.a},
gaL:function(){return this.b}}
P.r1.prototype={}
P.rc.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fi()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.l(t)
r=H.l(t)
r.stack=J.cJ(s)
throw r},
$S:function(){return{func:1}}}
P.qD.prototype={
eo:function(a){var t,s,r,q
try{if(C.e===$.an){r=a.$0()
return r}r=P.xy(null,null,this,a)
return r}catch(q){t=H.cm(q)
s=H.cl(q)
r=P.kd(null,null,this,t,s)
return r}},
cX:function(a,b){var t,s,r,q
try{if(C.e===$.an){r=a.$1(b)
return r}r=P.xA(null,null,this,a,b)
return r}catch(q){t=H.cm(q)
s=H.cl(q)
r=P.kd(null,null,this,t,s)
return r}},
hW:function(a,b,c){var t,s,r,q
try{if(C.e===$.an){r=a.$2(b,c)
return r}r=P.xz(null,null,this,a,b,c)
return r}catch(q){t=H.cm(q)
s=H.cl(q)
r=P.kd(null,null,this,t,s)
return r}},
cD:function(a,b){if(b)return new P.qE(this,a)
else return new P.qF(this,a)},
fV:function(a,b){return new P.qG(this,a)},
n:function(a,b){return},
en:function(a){if($.an===C.e)return a.$0()
return P.xy(null,null,this,a)},
cW:function(a,b){if($.an===C.e)return a.$1(b)
return P.xA(null,null,this,a,b)},
hV:function(a,b,c){if($.an===C.e)return a.$2(b,c)
return P.xz(null,null,this,a,b,c)}}
P.qE.prototype={
$0:function(){return this.a.eo(this.b)},
$S:function(){return{func:1}}}
P.qF.prototype={
$0:function(){return this.a.en(this.b)},
$S:function(){return{func:1}}}
P.qG.prototype={
$1:function(a){return this.a.cX(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qm.prototype={
gm:function(a){return this.a},
gY:function(a){return this.a===0},
gc5:function(a){var t=H.O(this,0)
return H.dh(new P.qn(this,[t]),new P.qp(this),t,H.O(this,1))},
V:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.fa(b)},
fa:function(a){var t=this.d
if(t==null)return!1
return this.aP(t[this.aO(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fi(0,b)},
fi:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aO(b)]
r=this.aP(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.uS()
this.b=t}this.dh(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.uS()
this.c=s}this.dh(s,b,c)}else this.fH(b,c)},
fH:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.uS()
this.d=t}s=this.aO(a)
r=t[s]
if(r==null){P.uT(t,s,[a,b]);++this.a
this.e=null}else{q=this.aP(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
ag:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bl(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bl(this.c,b)
else return this.ct(0,b)},
ct:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aO(b)]
r=this.aP(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
a8:function(a,b){var t,s,r,q
t=this.cg()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.l(new P.bM(this))}},
cg:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.e
if(t!=null)return t
s=new Array(this.a)
s.fixed$length=Array
r=this.b
if(r!=null){q=Object.getOwnPropertyNames(r)
p=q.length
for(o=0,n=0;n<p;++n){s[o]=q[n];++o}}else o=0
m=this.c
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(n=0;n<p;++n){s[o]=+q[n];++o}}l=this.d
if(l!=null){q=Object.getOwnPropertyNames(l)
p=q.length
for(n=0;n<p;++n){k=l[q[n]]
j=k.length
for(i=0;i<j;i+=2){s[o]=k[i];++o}}}this.e=s
return s},
dh:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.uT(a,b,c)},
bl:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.Gi(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aO:function(a){return J.dA(a)&0x3ffffff},
aP:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.bc(a[s],b))return s
return-1},
$isbm:1,
$asbm:null}
P.qp.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qn.prototype={
gm:function(a){return this.a.a},
gY:function(a){return this.a.a===0},
gT:function(a){var t=this.a
return new P.qo(t,t.cg(),0,null,this.$ti)},
ac:function(a,b){return this.a.V(0,b)},
a8:function(a,b){var t,s,r,q
t=this.a
s=t.cg()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.l(new P.bM(t))}}}
P.qo.prototype={
gN:function(){return this.d},
G:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.l(new P.bM(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.k5.prototype={
bv:function(a){return H.Hk(a)&0x3ffffff},
bw:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].ge7()
if(r==null?b==null:r===b)return s}return-1}}
P.k4.prototype={
gT:function(a){var t=new P.dw(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gY:function(a){return this.a===0},
ac:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.f9(b)},
f9:function(a){var t=this.d
if(t==null)return!1
return this.aP(t[this.aO(a)],a)>=0},
cN:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.ac(0,a)?a:null
else return this.fv(a)},
fv:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aO(a)]
r=this.aP(s,a)
if(r<0)return
return J.fE(s,r).gdq()},
a8:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.l(new P.bM(this))
t=t.b}},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.dg(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.dg(r,b)}else return this.aN(0,b)},
aN:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.Gj()
this.d=t}s=this.aO(b)
r=t[s]
if(r==null)t[s]=[this.cf(b)]
else{if(this.aP(r,b)>=0)return!1
r.push(this.cf(b))}return!0},
ag:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bl(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bl(this.c,b)
else return this.ct(0,b)},
ct:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aO(b)]
r=this.aP(s,b)
if(r<0)return!1
this.di(s.splice(r,1)[0])
return!0},
ba:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
dg:function(a,b){if(a[b]!=null)return!1
a[b]=this.cf(b)
return!0},
bl:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.di(t)
delete a[b]
return!0},
cf:function(a){var t,s
t=new P.qt(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
di:function(a){var t,s
t=a.gf7()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aO:function(a){return J.dA(a)&0x3ffffff},
aP:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bc(a[s].gdq(),b))return s
return-1},
$isew:1,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
P.qt.prototype={
gdq:function(){return this.a},
gf7:function(){return this.c}}
P.dw.prototype={
gN:function(){return this.d},
G:function(){var t=this.a
if(this.b!==t.r)throw H.l(new P.bM(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.qq.prototype={}
P.fc.prototype={
ay:function(a,b){return H.dh(this,b,H.as(this,"fc",0),null)},
ac:function(a,b){var t
for(t=this.gT(this);t.G();)if(J.bc(t.gN(),b))return!0
return!1},
a8:function(a,b){var t
for(t=this.gT(this);t.G();)b.$1(t.gN())},
a2:function(a,b){return P.d4(this,!0,H.as(this,"fc",0))},
aq:function(a){return this.a2(a,!0)},
gm:function(a){var t,s
t=this.gT(this)
for(s=0;t.G();)++s
return s},
gY:function(a){return!this.gT(this).G()},
C:function(a){return P.tQ(this,"(",")")},
$iso:1,
$aso:null}
P.hn.prototype={}
P.js.prototype={}
P.hF.prototype={$asp:null,$ast:null,$aso:null,$isp:1,$ist:1,$iso:1}
P.b1.prototype={
gT:function(a){return new H.dM(a,this.gm(a),0,null,[H.as(a,"b1",0)])},
U:function(a,b){return this.n(a,b)},
a8:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.l(new P.bM(a))}},
gY:function(a){return this.gm(a)===0},
ac:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.bc(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.l(new P.bM(a))}return!1},
ay:function(a,b){return new H.ff(a,b,[H.as(a,"b1",0),null])},
d3:function(a,b){return H.wR(a,b,null,H.as(a,"b1",0))},
a2:function(a,b){var t,s,r
t=H.a([],[H.as(a,"b1",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
aq:function(a){return this.a2(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bY:function(a,b,c,d){var t
P.di(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a7:function(a,b,c,d,e){var t,s,r,q,p,o
P.di(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.an()
if(typeof b!=="number")return H.a8(b)
t=c-b
if(t===0)return
if(J.ea(e,0))H.bb(P.bE(e,0,null,"skipCount",null))
if(H.dW(d,"$isp",[H.as(a,"b1",0)],"$asp")){s=e
r=d}else{r=J.yj(d,e).a2(0,!1)
s=0}q=J.kf(s)
p=J.bd(r)
if(J.cu(q.W(s,t),p.gm(r)))throw H.l(H.wq())
if(q.a3(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.W(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.W(s,o)))},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)},
aF:function(a,b,c,d){var t,s,r,q,p
P.di(b,c,this.gm(a),null,null,null)
d=C.c.aq(d)
if(typeof c!=="number")return c.an()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.aA(a,b,r,d)
if(q!==0){this.a7(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a7(a,r,p,a,c)
this.aA(a,b,r,d)}},
b1:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.bc(this.n(a,t),b))return t
return-1},
bf:function(a,b){return this.b1(a,b,0)},
C:function(a){return P.jn(a,"[","]")},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
P.qU.prototype={
i:function(a,b,c){throw H.l(new P.V("Cannot modify unmodifiable map"))},
$isbm:1,
$asbm:null}
P.n3.prototype={
n:function(a,b){return J.fE(this.a,b)},
i:function(a,b,c){J.ki(this.a,b,c)},
a8:function(a,b){J.v7(this.a,b)},
gY:function(a){return J.rL(this.a)},
gm:function(a){return J.c_(this.a)},
C:function(a){return J.cJ(this.a)},
$isbm:1,
$asbm:null}
P.hS.prototype={$asbm:null,$isbm:1}
P.n4.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.O+=", "
t.a=!1
t=this.b
s=t.O+=H.z(a)
t.O=s+": "
t.O+=H.z(b)},
$S:function(){return{func:1,args:[,,]}}}
P.mR.prototype={
gT:function(a){return new P.qu(this,this.c,this.d,this.b,null,this.$ti)},
a8:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.w(r,s)
b.$1(r[s])
if(t!==this.d)H.bb(new P.bM(this))}},
gY:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
U:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.a8(b)
if(0>b||b>=t)H.bb(P.by(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.w(s,q)
return s[q]},
a2:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.fM(t)
return t},
aq:function(a){return this.a2(a,!0)},
h:function(a,b){this.aN(0,b)},
ba:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.w(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
C:function(a){return P.jn(this,"{","}")},
el:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.l(H.jo());++this.d
s=this.a
r=s.length
if(t>=r)return H.w(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aN:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.w(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dt();++this.d},
dt:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.b.a7(s,0,q,t,r)
C.b.a7(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
fM:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a7(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a7(a,0,p,r,t)
C.b.a7(a,p,p+this.c,this.a,0)
return this.c+p}},
eT:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$ast:null,
$aso:null}
P.qu.prototype={
gN:function(){return this.e},
G:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.bb(new P.bM(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.w(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.oa.prototype={
gY:function(a){return this.a===0},
bo:function(a,b){var t
for(t=J.cQ(b);t.G();)this.h(0,t.gN())},
a2:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dw(this,this.r,null,null,[null]),s.c=this.e,r=0;s.G();r=p){q=s.d
p=r+1
if(r>=t.length)return H.w(t,r)
t[r]=q}return t},
aq:function(a){return this.a2(a,!0)},
ay:function(a,b){return new H.fY(this,b,[H.O(this,0),null])},
C:function(a){return P.jn(this,"{","}")},
a8:function(a,b){var t
for(t=new P.dw(this,this.r,null,null,[null]),t.c=this.e;t.G();)b.$1(t.d)},
bg:function(a,b){var t,s
t=new P.dw(this,this.r,null,null,[null])
t.c=this.e
if(!t.G())return""
if(b===""){s=""
do s+=H.z(t.d)
while(t.G())}else{s=H.z(t.d)
for(;t.G();)s=s+b+H.z(t.d)}return s.charCodeAt(0)==0?s:s},
$isew:1,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
P.o9.prototype={}
P.kz.prototype={
hA:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bd(b)
a1=P.di(a0,a1,t.gm(b),null,null,null)
s=$.$get$xh()
if(typeof a1!=="number")return H.a8(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.Z(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.rp(C.c.a4(b,l))
h=H.rp(C.c.a4(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.w(s,g)
f=s[g]
if(f>=0){g=C.c.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.O.length
if(e==null)e=0
if(typeof e!=="number")return e.W()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.cb("")
p.O+=C.c.L(b,q,r)
p.O+=H.hG(k)
q=l
continue}}throw H.l(new P.bJ("Invalid base64 data",b,r))}if(p!=null){t=p.O+=t.L(b,q,a1)
e=t.length
if(o>=0)P.vf(b,n,a1,o,m,e)
else{d=C.a.bG(e-1,4)+1
if(d===1)throw H.l(new P.bJ("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.O=t;++d}}t=p.O
return C.c.aF(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.vf(b,n,a1,o,m,c)
else{d=C.d.bG(c,4)
if(d===1)throw H.l(new P.bJ("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aF(b,a1,a1,d===2?"==":"=")}return b},
$asfR:function(){return[[P.p,P.D],P.C]}}
P.kA.prototype={
$asfT:function(){return[[P.p,P.D],P.C]}}
P.fR.prototype={}
P.fT.prototype={}
P.lf.prototype={
$asfR:function(){return[P.C,[P.p,P.D]]}}
P.po.prototype={
gJ:function(a){return"utf-8"}}
P.pp.prototype={
cG:function(a,b,c){var t,s,r,q
t=J.c_(a)
P.di(b,c,t,null,null,null)
s=new P.cb("")
r=new P.qW(!1,s,!0,0,0,0)
r.cG(a,b,t)
r.hc(0,a,t)
q=s.O
return q.charCodeAt(0)==0?q:q},
h_:function(a){return this.cG(a,0,null)},
$asfT:function(){return[[P.p,P.D],P.C]}}
P.qW.prototype={
hc:function(a,b,c){if(this.e>0)throw H.l(new P.bJ("Unfinished UTF-8 octet sequence",b,c))},
cG:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.qY(c)
p=new P.qX(this,a,b,c)
$loop$0:for(o=J.bd(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aK()
if((l&192)!==128){k=new P.bJ("Bad UTF-8 encoding 0x"+C.d.bC(l,16),a,m)
throw H.l(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.w(C.w,k)
if(t<=C.w[k]){k=new P.bJ("Overlong encoding of 0x"+C.a.bC(t,16),a,m-r-1)
throw H.l(k)}if(t>1114111){k=new P.bJ("Character outside valid Unicode range: 0x"+C.a.bC(t,16),a,m-r-1)
throw H.l(k)}if(!this.c||t!==65279)n.O+=H.hG(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cu(j,0)){this.c=!1
if(typeof j!=="number")return H.a8(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dy(l)
if(g.a3(l,0)){g=new P.bJ("Negative UTF-8 code unit: -0x"+J.ym(g.d0(l),16),a,h-1)
throw H.l(g)}else{if(typeof l!=="number")return l.aK()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bJ("Bad UTF-8 encoding 0x"+C.d.bC(l,16),a,h-1)
throw H.l(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.qY.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bd(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aK()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.D,args:[,P.D]}}}
P.qX.prototype={
$2:function(a,b){this.a.b.O+=P.oL(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.D,P.D]}}}
P.db.prototype={}
P.bF.prototype={}
P.dG.prototype={
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dG))return!1
return this.a===b.a&&this.b===b.b},
aB:function(a,b){return C.a.aB(this.a,b.gfL())},
ga5:function(a){var t=this.a
return(t^C.a.aY(t,30))&1073741823},
C:function(a){var t,s,r,q,p,o,n
t=P.yZ(H.wD(this))
s=P.ig(H.nM(this))
r=P.ig(H.nL(this))
q=P.ig(H.Fc(this))
p=P.ig(H.Fe(this))
o=P.ig(H.Ff(this))
n=P.z_(H.Fd(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.yY(C.a.W(this.a,b.gi9()),this.b)},
ghx:function(){return this.a},
d9:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.l(P.dB(this.ghx()))},
$isbF:1,
$asbF:function(){return[P.dG]},
gfL:function(){return this.a}}
P.U.prototype={$isbF:1,
$asbF:function(){return[P.dn]}}
P.dH.prototype={
W:function(a,b){return new P.dH(this.a+b.gbm())},
au:function(a,b){if(typeof b!=="number")return H.a8(b)
return new P.dH(C.d.bA(this.a*b))},
a3:function(a,b){return C.a.a3(this.a,b.gbm())},
aG:function(a,b){return C.a.aG(this.a,b.gbm())},
av:function(a,b){return C.a.av(this.a,b.gbm())},
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dH))return!1
return this.a===b.a},
ga5:function(a){return this.a&0x1FFFFFFF},
aB:function(a,b){return C.a.aB(this.a,b.gbm())},
C:function(a){var t,s,r,q,p
t=new P.ld()
s=this.a
if(s<0)return"-"+new P.dH(0-s).C(0)
r=t.$1(C.a.ap(s,6e7)%60)
q=t.$1(C.a.ap(s,1e6)%60)
p=new P.lc().$1(s%1e6)
return""+C.a.ap(s,36e8)+":"+H.z(r)+":"+H.z(q)+"."+H.z(p)},
d0:function(a){return new P.dH(0-this.a)},
$isbF:1,
$asbF:function(){return[P.dH]},
gbm:function(){return this.a}}
P.lc.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.C,args:[P.D]}}}
P.ld.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.C,args:[P.D]}}}
P.ee.prototype={
gaL:function(){return H.cl(this.$thrownJsError)}}
P.fi.prototype={
C:function(a){return"Throw of null."}}
P.cY.prototype={
gcj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gci:function(){return""},
C:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.z(t)
q=this.gcj()+s+r
if(!this.a)return q
p=this.gci()
o=P.vw(this.b)
return q+p+": "+H.z(o)},
gJ:function(a){return this.c}}
P.ev.prototype={
gcj:function(){return"RangeError"},
gci:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.z(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.z(t)
else{if(typeof r!=="number")return r.aG()
if(r>t)s=": Not in range "+H.z(t)+".."+H.z(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.z(t)}}return s}}
P.mg.prototype={
gcj:function(){return"RangeError"},
gci:function(){if(J.ea(this.b,0))return": index must not be negative"
var t=this.f
if(J.bc(t,0))return": no indices are valid"
return": index should be less than "+H.z(t)},
gm:function(a){return this.f}}
P.V.prototype={
C:function(a){return"Unsupported operation: "+this.a}}
P.eB.prototype={
C:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.z(t):"UnimplementedError"}}
P.dQ.prototype={
C:function(a){return"Bad state: "+this.a}}
P.bM.prototype={
C:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.z(P.vw(t))+"."}}
P.nt.prototype={
C:function(a){return"Out of Memory"},
gaL:function(){return},
$isee:1}
P.jN.prototype={
C:function(a){return"Stack Overflow"},
gaL:function(){return},
$isee:1}
P.l4.prototype={
C:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.z(t)+"' during its initialization"}}
P.q7.prototype={
C:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.z(t)}}
P.bJ.prototype={
C:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.z(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a3()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.L(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.a8(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a4(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.z(r-o+1)+")\n"):s+(" (at character "+H.z(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.c.Z(q,m)
if(l===10||l===13){k=m
break}}if(k-o>78)if(r-o<75){j=o+75
i=o
h=""
g="..."}else{if(k-r<75){i=k-75
j=k
g=""}else{i=r-36
j=r+36
g="..."}h="..."}else{j=k
i=o
h=""
g=""}f=C.c.L(q,i,j)
return s+h+f+g+"\n"+C.c.au(" ",r-i+h.length)+"^\n"}}
P.lm.prototype={
C:function(a){return"Expando:"+H.z(this.a)},
n:function(a,b){var t,s
t=this.bK
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.bb(P.dC(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.up(b,"expando$values")
return s==null?null:H.up(s,t)},
i:function(a,b,c){var t,s
t=this.bK
if(typeof t!=="string")t.set(b,c)
else{s=H.up(b,"expando$values")
if(s==null){s=new P.ac()
H.wH(b,"expando$values",s)}H.wH(s,t,c)}},
gJ:function(a){return this.a}}
P.D.prototype={$isbF:1,
$asbF:function(){return[P.dn]}}
P.o.prototype={
ay:function(a,b){return H.dh(this,b,H.as(this,"o",0),null)},
ac:function(a,b){var t
for(t=this.gT(this);t.G();)if(J.bc(t.gN(),b))return!0
return!1},
a8:function(a,b){var t
for(t=this.gT(this);t.G();)b.$1(t.gN())},
a2:function(a,b){return P.d4(this,!0,H.as(this,"o",0))},
aq:function(a){return this.a2(a,!0)},
gm:function(a){var t,s
t=this.gT(this)
for(s=0;t.G();)++s
return s},
gY:function(a){return!this.gT(this).G()},
U:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.yp("index"))
if(b<0)H.bb(P.bE(b,0,null,"index",null))
for(t=this.gT(this),s=0;t.G();){r=t.gN()
if(b===s)return r;++s}throw H.l(P.by(b,this,"index",null,s))},
C:function(a){return P.tQ(this,"(",")")},
$aso:null}
P.jp.prototype={}
P.p.prototype={$asp:null,$ist:1,$ast:null,$iso:1,$aso:null}
P.bm.prototype={$asbm:null}
P.d6.prototype={
ga5:function(a){return P.ac.prototype.ga5.call(this,this)},
C:function(a){return"null"}}
P.dn.prototype={$isbF:1,
$asbF:function(){return[P.dn]}}
P.ac.prototype={constructor:P.ac,$isac:1,
S:function(a,b){return this===b},
ga5:function(a){return H.er(this)},
C:function(a){return H.nN(this)},
ga9:function(a){return new H.dT(H.kh(this),null)},
toString:function(){return this.C(this)}}
P.d5.prototype={}
P.ew.prototype={}
P.dP.prototype={}
P.C.prototype={$isbF:1,
$asbF:function(){return[P.C]},
$isuk:1}
P.cb.prototype={
gm:function(a){return this.O.length},
gY:function(a){return this.O.length===0},
C:function(a){var t=this.O
return t.charCodeAt(0)==0?t:t},
gO:function(){return this.O}}
P.eD.prototype={}
P.pk.prototype={
$2:function(a,b){var t,s,r,q
t=J.bd(b)
s=t.bf(b,"=")
if(s===-1){if(!t.S(b,""))J.ki(a,P.qV(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.L(b,0,s)
q=C.c.ai(b,s+1)
t=this.a
J.ki(a,P.qV(r,0,r.length,t,!0),P.qV(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.ph.prototype={
$2:function(a,b){throw H.l(new P.bJ("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.C,P.D]}}}
P.pi.prototype={
$2:function(a,b){throw H.l(new P.bJ("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.C],opt:[,]}}}
P.pj.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.fk(C.c.L(this.a,a,b),16,null)
s=J.dy(t)
if(s.a3(t,0)||s.aG(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.D,args:[P.D,P.D]}}}
P.kb.prototype={
gev:function(){return this.b},
gcK:function(a){var t=this.c
if(t==null)return""
if(C.c.ah(t,"["))return C.c.L(t,1,t.length-1)
return t},
gcR:function(a){var t=this.d
if(t==null)return P.xk(this.a)
return t},
gcS:function(a){var t=this.f
return t==null?"":t},
ge1:function(){var t=this.r
return t==null?"":t},
gcT:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.C
s=new P.hS(P.xa(t==null?"":t,C.n),[s,s])
this.Q=s
t=s}return t},
ge4:function(){return this.c!=null},
ge6:function(){return this.f!=null},
ge5:function(){return this.r!=null},
C:function(a){var t=this.y
if(t==null){t=this.dz()
this.y=t}return t},
dz:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.z(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.z(s)}else t=s
t+=H.z(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
S:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.ar(b)
if(!!t.$iseD){if(this.a===b.gd1())if(this.c!=null===b.ge4()){s=this.b
r=b.gev()
if(s==null?r==null:s===r){s=this.gcK(this)
r=t.gcK(b)
if(s==null?r==null:s===r)if(J.bc(this.gcR(this),t.gcR(b)))if(J.bc(this.e,t.geg(b))){s=this.f
r=s==null
if(!r===b.ge6()){if(r)s=""
if(s===t.gcS(b)){t=this.r
s=t==null
if(!s===b.ge5()){if(s)t=""
t=t===b.ge1()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga5:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dz()
this.y=t}t=C.c.ga5(t)
this.z=t}return t},
$iseD:1,
gd1:function(){return this.a},
geg:function(a){return this.e}}
P.re.prototype={
$1:function(a){throw H.l(new P.bJ("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.pg.prototype={
geu:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
t=t[0]+1
r=J.bd(s)
q=r.b1(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fy(s,o,p,C.l,!1)
if(n==null)n=r.L(s,o,p)
p=q}else n=null
m=P.fy(s,t,p,C.D,!1)
t=new P.pW(this,"data",null,null,null,m==null?r.L(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
C:function(a){var t,s
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
return t[0]===-1?"data:"+H.z(s):s}}
P.r9.prototype={
$1:function(a){return new Uint8Array(H.cz(96))},
$S:function(){return{func:1,args:[,]}}}
P.r8.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.w(t,a)
t=t[a]
J.y4(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.da,args:[,,]}}}
P.ra.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.dm(a),r=0;r<t;++r)s.i(a,C.c.a4(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.da,P.C,P.D]}}}
P.rb.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a4(b,0),s=C.c.a4(b,1),r=J.dm(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.da,P.C,P.D]}}}
P.qL.prototype={
ge4:function(){return this.c>0},
ge6:function(){var t=this.f
if(typeof t!=="number")return t.a3()
return t<this.r},
ge5:function(){return this.r<this.a.length},
gd1:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.ah(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.ah(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.ah(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.ah(this.a,"package")){this.x="package"
t="package"}else{t=C.c.L(this.a,0,t)
this.x=t}return t},
gev:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.L(this.a,s,t-1):""},
gcK:function(a){var t=this.c
return t>0?C.c.L(this.a,t,this.d):""},
gcR:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.W()
s=this.e
if(typeof s!=="number")return H.a8(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.W()
return H.fk(C.c.L(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.ah(this.a,"http"))return 80
if(t===5&&C.c.ah(this.a,"https"))return 443
return 0},
geg:function(a){return C.c.L(this.a,this.e,this.f)},
gcS:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a3()
return t<s?C.c.L(this.a,t+1,s):""},
ge1:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.ai(s,t+1):""},
gcT:function(){var t=this.f
if(typeof t!=="number")return t.a3()
if(t>=this.r)return C.a_
t=P.C
return new P.hS(P.xa(this.gcS(this),C.n),[t,t])},
ga5:function(a){var t=this.y
if(t==null){t=C.c.ga5(this.a)
this.y=t}return t},
S:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.ar(b)
if(!!t.$iseD)return this.a===t.C(b)
return!1},
C:function(a){return this.a},
$iseD:1}
P.pW.prototype={}
W.at.prototype={}
W.eO.prototype={
C:function(a){return String(a)},
$iseO:1,
$ish:1,
gaf:function(a){return a.href}}
W.kp.prototype={
C:function(a){return String(a)},
$ish:1,
gaf:function(a){return a.href}}
W.eR.prototype={$iseR:1,$isdr:1,$isaz:1,$isac:1}
W.cK.prototype={$isac:1}
W.kx.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.cK]},
$ist:1,
$ast:function(){return[W.cK]},
$iso:1,
$aso:function(){return[W.cK]},
$isaF:1,
$asaF:function(){return[W.cK]},
$isay:1,
$asay:function(){return[W.cK]}}
W.h_.prototype={
$asp:function(){return[W.cK]},
$ast:function(){return[W.cK]},
$aso:function(){return[W.cK]},
$isp:1,
$ist:1,
$iso:1}
W.h2.prototype={
$asp:function(){return[W.cK]},
$ast:function(){return[W.cK]},
$aso:function(){return[W.cK]},
$isp:1,
$ist:1,
$iso:1}
W.kB.prototype={
gaf:function(a){return a.href}}
W.eS.prototype={$iseS:1}
W.kF.prototype={$ish:1}
W.eT.prototype={$iseT:1,
gJ:function(a){return a.name}}
W.ec.prototype={$ish:1,
gm:function(a){return a.length}}
W.kM.prototype={
at:function(a,b){return a.get(b)}}
W.kQ.prototype={$ish:1}
W.ib.prototype={
cI:function(a,b){return typeof console!="undefined"?console.error(b):null},
aV:function(a){return typeof console!="undefined"?console.group(a):null},
e8:function(a){return typeof console!="undefined"?console.info(a):null},
i_:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.fU.prototype={
gJ:function(a){return a.name}}
W.kU.prototype={
at:function(a,b){if(b!=null)return a.get(P.GY(b,null))
return a.get()},
bk:function(a){return this.at(a,null)}}
W.kX.prototype={
gaM:function(a){return a.style}}
W.kY.prototype={
gaf:function(a){return a.href}}
W.fV.prototype={
gaM:function(a){return a.style}}
W.fW.prototype={
gJ:function(a){return a.name}}
W.kZ.prototype={
gaM:function(a){return a.style}}
W.bI.prototype={$isbI:1,$isac:1}
W.eW.prototype={
bF:function(a,b){var t=this.fj(a,b)
return t!=null?t:""},
fj:function(a,b){if(W.yX(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.z0()+b)},
K:function(a,b){return a.item(b)},
gbe:function(a){return a.content},
gbs:function(a){return a.display},
sbs:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iF.prototype={}
W.pU.prototype={
bF:function(a,b){var t=this.b
return J.yf(t.gae(t),b)},
fI:function(a,b){var t
for(t=this.a,t=new H.dM(t,t.gm(t),0,null,[H.O(t,0)]);t.G();)t.d.style[a]=b},
sbs:function(a,b){this.fI("display",b)},
eZ:function(a){var t=P.d4(this.a,!0,null)
this.b=new H.ff(t,new W.pV(),[H.O(t,0),null])}}
W.jA.prototype={}
W.pV.prototype={
$1:function(a){return J.rM(a)},
$S:function(){return{func:1,args:[,]}}}
W.id.prototype={
gbe:function(a){return this.bF(a,"content")},
gbs:function(a){return this.bF(a,"display")}}
W.l_.prototype={
gaM:function(a){return a.style}}
W.l0.prototype={
gaM:function(a){return a.style}}
W.l5.prototype={
gcJ:function(a){return a.files}}
W.eX.prototype={$iseX:1,$isac:1}
W.ie.prototype={
bR:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
K:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.fX.prototype={$isfX:1}
W.ed.prototype={$ised:1}
W.ih.prototype={$ish:1}
W.ii.prototype={
gJ:function(a){return a.name}}
W.l8.prototype={
gJ:function(a){var t=a.name
if(P.vv()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.vv()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
C:function(a){return String(a)}}
W.ij.prototype={
C:function(a){return"Rectangle ("+H.z(a.left)+", "+H.z(a.top)+") "+H.z(this.gb8(a))+" x "+H.z(this.gb0(a))},
S:function(a,b){var t
if(b==null)return!1
t=J.ar(b)
if(!t.$isbS)return!1
return a.left===t.gc_(b)&&a.top===t.gc4(b)&&this.gb8(a)===t.gb8(b)&&this.gb0(a)===t.gb0(b)},
ga5:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb8(a)
q=this.gb0(a)
return W.xj(W.eK(W.eK(W.eK(W.eK(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gb0:function(a){return a.height},
gc_:function(a){return a.left},
gc4:function(a){return a.top},
gb8:function(a){return a.width},
$isbS:1,
$asbS:function(){}}
W.ik.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]},
$isaF:1,
$asaF:function(){return[P.C]},
$isay:1,
$asay:function(){return[P.C]}}
W.iG.prototype={
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$aso:function(){return[P.C]},
$isp:1,
$ist:1,
$iso:1}
W.j_.prototype={
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$aso:function(){return[P.C]},
$isp:1,
$ist:1,
$iso:1}
W.il.prototype={
K:function(a,b){return a.item(b)}}
W.im.prototype={
h:function(a,b){return a.add(b)},
ac:function(a,b){return a.contains(b)},
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.k1.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot modify list"))},
sm:function(a,b){throw H.l(new P.V("Cannot modify list"))},
gaM:function(a){return W.Gf(this)},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
W.dr.prototype={
gdV:function(a){return new W.q1(a)},
C:function(a){return a.localName},
e9:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
gee:function(a){return new W.eI(a,"click",!1,[W.ub])},
$isdr:1,
$isaz:1,
$isac:1,
$ish:1,
gaM:function(a){return a.style}}
W.le.prototype={
gJ:function(a){return a.name},
gak:function(a){return a.src},
sak:function(a,b){return a.src=b}}
W.fZ.prototype={
gJ:function(a){return a.name}}
W.lk.prototype={
gas:function(a){return a.error}}
W.T.prototype={$isT:1,$isac:1}
W.aG.prototype={
fP:function(a,b,c,d){if(c!=null)this.f3(a,b,c,!1)},
hQ:function(a,b,c,d){if(c!=null)this.fF(a,b,c,!1)},
f3:function(a,b,c,d){return a.addEventListener(b,H.dl(c,1),!1)},
fF:function(a,b,c,d){return a.removeEventListener(b,H.dl(c,1),!1)}}
W.lM.prototype={
gJ:function(a){return a.name}}
W.cf.prototype={$iscf:1,$isac:1,
gJ:function(a){return a.name}}
W.f3.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isf3:1,
$isaF:1,
$asaF:function(){return[W.cf]},
$isay:1,
$asay:function(){return[W.cf]},
$isp:1,
$asp:function(){return[W.cf]},
$ist:1,
$ast:function(){return[W.cf]},
$iso:1,
$aso:function(){return[W.cf]}}
W.iH.prototype={
$asp:function(){return[W.cf]},
$ast:function(){return[W.cf]},
$aso:function(){return[W.cf]},
$isp:1,
$ist:1,
$iso:1}
W.j0.prototype={
$asp:function(){return[W.cf]},
$ast:function(){return[W.cf]},
$aso:function(){return[W.cf]},
$isp:1,
$ist:1,
$iso:1}
W.lN.prototype={
gas:function(a){return a.error}}
W.lO.prototype={
gJ:function(a){return a.name}}
W.lP.prototype={
gas:function(a){return a.error},
gm:function(a){return a.length}}
W.lS.prototype={
gaM:function(a){return a.style},
gb7:function(a){return a.weight}}
W.lT.prototype={
h:function(a,b){return a.add(b)},
i8:function(a,b,c){return a.forEach(H.dl(b,3),c)},
a8:function(a,b){b=H.dl(b,3)
return a.forEach(b)}}
W.lV.prototype={
at:function(a,b){return a.get(b)}}
W.iB.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gJ:function(a){return a.name}}
W.cn.prototype={$iscn:1,$isac:1}
W.m4.prototype={
gm:function(a){return a.length}}
W.f5.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.az]},
$ist:1,
$ast:function(){return[W.az]},
$iso:1,
$aso:function(){return[W.az]},
$isaF:1,
$asaF:function(){return[W.az]},
$isay:1,
$asay:function(){return[W.az]}}
W.iI.prototype={
$asp:function(){return[W.az]},
$ast:function(){return[W.az]},
$aso:function(){return[W.az]},
$isp:1,
$ist:1,
$iso:1}
W.j1.prototype={
$asp:function(){return[W.az]},
$ast:function(){return[W.az]},
$aso:function(){return[W.az]},
$isp:1,
$ist:1,
$iso:1}
W.iD.prototype={
K:function(a,b){return a.item(b)}}
W.e1.prototype={
ij:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
hC:function(a,b,c,d){return a.open(b,c,d)},
ghT:function(a){return W.GE(a.response)},
b9:function(a,b){return a.send(b)},
$ise1:1,
$isac:1,
ghU:function(a){return a.responseText}}
W.m7.prototype={
$1:function(a){return J.yb(a)},
$S:function(){return{func:1,args:[W.e1]}}}
W.m8.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.av()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.aC(0,t)
else p.bq(a)},
$S:function(){return{func:1,args:[,]}}}
W.hg.prototype={}
W.mc.prototype={
gJ:function(a){return a.name},
gak:function(a){return a.src},
sak:function(a,b){return a.src=b}}
W.hh.prototype={$ishh:1}
W.f7.prototype={$isf7:1,$isdr:1,$isaz:1,$isac:1,
aC:function(a,b){return a.complete.$1(b)},
gak:function(a){return a.src},
sak:function(a,b){return a.src=b}}
W.mh.prototype={$ish:1,
gcJ:function(a){return a.files},
gJ:function(a){return a.name},
gak:function(a){return a.src},
sak:function(a,b){return a.src=b}}
W.mG.prototype={
gJ:function(a){return a.name}}
W.hq.prototype={
h:function(a,b){return a.add(b)}}
W.hr.prototype={$ishr:1,
gaf:function(a){return a.href}}
W.mY.prototype={
C:function(a){return String(a)},
gaf:function(a){return a.href}}
W.n2.prototype={
gJ:function(a){return a.name}}
W.hx.prototype={
gas:function(a){return a.error},
gak:function(a){return a.src},
sak:function(a,b){return a.src=b}}
W.ju.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.n7.prototype={
gbe:function(a){return a.content},
gJ:function(a){return a.name}}
W.n8.prototype={
i4:function(a,b,c){return a.send(b,c)},
b9:function(a,b){return a.send(b)}}
W.hy.prototype={
gJ:function(a){return a.name}}
W.cp.prototype={$iscp:1,$isac:1}
W.jv.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaF:1,
$asaF:function(){return[W.cp]},
$isay:1,
$asay:function(){return[W.cp]},
$isp:1,
$asp:function(){return[W.cp]},
$ist:1,
$ast:function(){return[W.cp]},
$iso:1,
$aso:function(){return[W.cp]}}
W.iS.prototype={
$asp:function(){return[W.cp]},
$ast:function(){return[W.cp]},
$aso:function(){return[W.cp]},
$isp:1,
$ist:1,
$iso:1}
W.jb.prototype={
$asp:function(){return[W.cp]},
$ast:function(){return[W.cp]},
$aso:function(){return[W.cp]},
$isp:1,
$ist:1,
$iso:1}
W.nl.prototype={$ish:1}
W.nm.prototype={
gJ:function(a){return a.name}}
W.az.prototype={
C:function(a){var t=a.nodeValue
return t==null?this.eL(a):t},
ac:function(a,b){return a.contains(b)},
$isaz:1,
$isac:1}
W.jy.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.az]},
$ist:1,
$ast:function(){return[W.az]},
$iso:1,
$aso:function(){return[W.az]},
$isaF:1,
$asaF:function(){return[W.az]},
$isay:1,
$asay:function(){return[W.az]}}
W.iT.prototype={
$asp:function(){return[W.az]},
$ast:function(){return[W.az]},
$aso:function(){return[W.az]},
$isp:1,
$ist:1,
$iso:1}
W.jc.prototype={
$asp:function(){return[W.az]},
$ast:function(){return[W.az]},
$aso:function(){return[W.az]},
$isp:1,
$ist:1,
$iso:1}
W.np.prototype={
gJ:function(a){return a.name}}
W.nu.prototype={
gJ:function(a){return a.name}}
W.ny.prototype={
gJ:function(a){return a.name}}
W.nA.prototype={$ish:1}
W.e4.prototype={
gJ:function(a){return a.name}}
W.nF.prototype={
gm:function(a){return a.length}}
W.ch.prototype={
K:function(a,b){return a.item(b)},
$isch:1,
$isac:1,
gm:function(a){return a.length},
gJ:function(a){return a.name}}
W.jF.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ch]},
$ist:1,
$ast:function(){return[W.ch]},
$iso:1,
$aso:function(){return[W.ch]},
$isaF:1,
$asaF:function(){return[W.ch]},
$isay:1,
$asay:function(){return[W.ch]}}
W.iU.prototype={
$asp:function(){return[W.ch]},
$ast:function(){return[W.ch]},
$aso:function(){return[W.ch]},
$isp:1,
$ist:1,
$iso:1}
W.jd.prototype={
$asp:function(){return[W.ch]},
$ast:function(){return[W.ch]},
$aso:function(){return[W.ch]},
$isp:1,
$ist:1,
$iso:1}
W.nK.prototype={
b9:function(a,b){return a.send(b)}}
W.jH.prototype={
b9:function(a,b){return a.send(b)}}
W.fn.prototype={$isfn:1,$isdr:1,$isaz:1,$isac:1,
gak:function(a){return a.src},
sak:function(a,b){return a.src=b}}
W.jI.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gJ:function(a){return a.name}}
W.o8.prototype={
gJ:function(a){return a.name}}
W.ob.prototype={$ish:1}
W.oc.prototype={
gJ:function(a){return a.name}}
W.od.prototype={
gJ:function(a){return a.name}}
W.cq.prototype={$iscq:1,$isac:1}
W.jK.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cq]},
$ist:1,
$ast:function(){return[W.cq]},
$iso:1,
$aso:function(){return[W.cq]},
$isaF:1,
$asaF:function(){return[W.cq]},
$isay:1,
$asay:function(){return[W.cq]}}
W.h0.prototype={
$asp:function(){return[W.cq]},
$ast:function(){return[W.cq]},
$aso:function(){return[W.cq]},
$isp:1,
$ist:1,
$iso:1}
W.h3.prototype={
$asp:function(){return[W.cq]},
$ast:function(){return[W.cq]},
$aso:function(){return[W.cq]},
$isp:1,
$ist:1,
$iso:1}
W.og.prototype={
gak:function(a){return a.src},
sak:function(a,b){return a.src=b}}
W.hL.prototype={$ishL:1}
W.cr.prototype={$iscr:1,$isac:1,
gb7:function(a){return a.weight}}
W.jL.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cr]},
$ist:1,
$ast:function(){return[W.cr]},
$iso:1,
$aso:function(){return[W.cr]},
$isaF:1,
$asaF:function(){return[W.cr]},
$isay:1,
$asay:function(){return[W.cr]}}
W.iV.prototype={
$asp:function(){return[W.cr]},
$ast:function(){return[W.cr]},
$aso:function(){return[W.cr]},
$isp:1,
$ist:1,
$iso:1}
W.je.prototype={
$asp:function(){return[W.cr]},
$ast:function(){return[W.cr]},
$aso:function(){return[W.cr]},
$isp:1,
$ist:1,
$iso:1}
W.fo.prototype={$isfo:1,$isac:1}
W.oi.prototype={
gas:function(a){return a.error}}
W.cj.prototype={
K:function(a,b){return a.item(b)},
$iscj:1,
$isac:1,
gm:function(a){return a.length}}
W.oj.prototype={
gJ:function(a){return a.name}}
W.ok.prototype={
gJ:function(a){return a.name}}
W.op.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
a8:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gY:function(a){return a.key(0)==null},
$isbm:1,
$asbm:function(){return[P.C,P.C]}}
W.oM.prototype={
at:function(a,b){return a.get(b)}}
W.ck.prototype={$isck:1,$isac:1,
gaf:function(a){return a.href}}
W.e6.prototype={}
W.oU.prototype={
gbe:function(a){return a.content}}
W.hP.prototype={$ishP:1,
gJ:function(a){return a.name}}
W.cP.prototype={$isac:1}
W.cH.prototype={$isac:1}
W.p0.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaF:1,
$asaF:function(){return[W.cH]},
$isay:1,
$asay:function(){return[W.cH]},
$isp:1,
$asp:function(){return[W.cH]},
$ist:1,
$ast:function(){return[W.cH]},
$iso:1,
$aso:function(){return[W.cH]}}
W.iW.prototype={
$asp:function(){return[W.cH]},
$ast:function(){return[W.cH]},
$aso:function(){return[W.cH]},
$isp:1,
$ist:1,
$iso:1}
W.jf.prototype={
$asp:function(){return[W.cH]},
$ast:function(){return[W.cH]},
$aso:function(){return[W.cH]},
$isp:1,
$ist:1,
$iso:1}
W.p1.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaF:1,
$asaF:function(){return[W.cP]},
$isay:1,
$asay:function(){return[W.cP]},
$isp:1,
$asp:function(){return[W.cP]},
$ist:1,
$ast:function(){return[W.cP]},
$iso:1,
$aso:function(){return[W.cP]}}
W.h1.prototype={
$asp:function(){return[W.cP]},
$ast:function(){return[W.cP]},
$aso:function(){return[W.cP]},
$isp:1,
$ist:1,
$iso:1}
W.h4.prototype={
$asp:function(){return[W.cP]},
$ast:function(){return[W.cP]},
$aso:function(){return[W.cP]},
$isp:1,
$ist:1,
$iso:1}
W.p5.prototype={
gm:function(a){return a.length}}
W.cs.prototype={$iscs:1,$isac:1}
W.jP.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cs]},
$ist:1,
$ast:function(){return[W.cs]},
$iso:1,
$aso:function(){return[W.cs]},
$isaF:1,
$asaF:function(){return[W.cs]},
$isay:1,
$asay:function(){return[W.cs]}}
W.iX.prototype={
$asp:function(){return[W.cs]},
$ast:function(){return[W.cs]},
$aso:function(){return[W.cs]},
$isp:1,
$ist:1,
$iso:1}
W.jg.prototype={
$asp:function(){return[W.cs]},
$ast:function(){return[W.cs]},
$aso:function(){return[W.cs]},
$isp:1,
$ist:1,
$iso:1}
W.fs.prototype={$isfs:1,$isac:1}
W.jQ.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.p9.prototype={
gak:function(a){return a.src},
sak:function(a,b){return a.src=b}}
W.e7.prototype={}
W.pl.prototype={
C:function(a){return String(a)},
$ish:1,
gaf:function(a){return a.href}}
W.pm.prototype={
at:function(a,b){return a.get(b)}}
W.pq.prototype={
gm:function(a){return a.length}}
W.ft.prototype={$isft:1,$isac:1}
W.jR.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.pv.prototype={
b9:function(a,b){return a.send(b)}}
W.jU.prototype={$ish:1,
gJ:function(a){return a.name}}
W.pC.prototype={$ish:1}
W.eF.prototype={$ish:1}
W.fu.prototype={$isfu:1,$isaz:1,$isac:1,
gJ:function(a){return a.name}}
W.pT.prototype={
C:function(a){return"Rectangle ("+H.z(a.left)+", "+H.z(a.top)+") "+H.z(a.width)+" x "+H.z(a.height)},
S:function(a,b){var t,s,r
if(b==null)return!1
t=J.ar(b)
if(!t.$isbS)return!1
s=a.left
r=t.gc_(b)
if(s==null?r==null:s===r){s=a.top
r=t.gc4(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb8(b)
if(s==null?r==null:s===r){s=a.height
t=t.gb0(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga5:function(a){var t,s,r,q
t=J.dA(a.left)
s=J.dA(a.top)
r=J.dA(a.width)
q=J.dA(a.height)
return W.xj(W.eK(W.eK(W.eK(W.eK(0,t),s),r),q))},
$isbS:1,
$asbS:function(){},
gb0:function(a){return a.height},
gc_:function(a){return a.left},
gc4:function(a){return a.top},
gb8:function(a){return a.width}}
W.hX.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaF:1,
$asaF:function(){return[P.bS]},
$isay:1,
$asay:function(){return[P.bS]},
$isp:1,
$asp:function(){return[P.bS]},
$ist:1,
$ast:function(){return[P.bS]},
$iso:1,
$aso:function(){return[P.bS]}}
W.iY.prototype={
$asp:function(){return[P.bS]},
$ast:function(){return[P.bS]},
$aso:function(){return[P.bS]},
$isp:1,
$ist:1,
$iso:1}
W.jh.prototype={
$asp:function(){return[P.bS]},
$ast:function(){return[P.bS]},
$aso:function(){return[P.bS]},
$isp:1,
$ist:1,
$iso:1}
W.k_.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.bI]},
$ist:1,
$ast:function(){return[W.bI]},
$iso:1,
$aso:function(){return[W.bI]},
$isaF:1,
$asaF:function(){return[W.bI]},
$isay:1,
$asay:function(){return[W.bI]}}
W.iZ.prototype={
$asp:function(){return[W.bI]},
$ast:function(){return[W.bI]},
$aso:function(){return[W.bI]},
$isp:1,
$ist:1,
$iso:1}
W.ji.prototype={
$asp:function(){return[W.bI]},
$ast:function(){return[W.bI]},
$aso:function(){return[W.bI]},
$isp:1,
$ist:1,
$iso:1}
W.q_.prototype={$ish:1}
W.q0.prototype={
gb0:function(a){return a.height},
gb8:function(a){return a.width}}
W.k3.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaF:1,
$asaF:function(){return[W.cn]},
$isay:1,
$asay:function(){return[W.cn]},
$isp:1,
$asp:function(){return[W.cn]},
$ist:1,
$ast:function(){return[W.cn]},
$iso:1,
$aso:function(){return[W.cn]}}
W.iJ.prototype={
$asp:function(){return[W.cn]},
$ast:function(){return[W.cn]},
$aso:function(){return[W.cn]},
$isp:1,
$ist:1,
$iso:1}
W.j2.prototype={
$asp:function(){return[W.cn]},
$ast:function(){return[W.cn]},
$aso:function(){return[W.cn]},
$isp:1,
$ist:1,
$iso:1}
W.ql.prototype={$ish:1}
W.i1.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.az]},
$ist:1,
$ast:function(){return[W.az]},
$iso:1,
$aso:function(){return[W.az]},
$isaF:1,
$asaF:function(){return[W.az]},
$isay:1,
$asay:function(){return[W.az]}}
W.iK.prototype={
$asp:function(){return[W.az]},
$ast:function(){return[W.az]},
$aso:function(){return[W.az]},
$isp:1,
$ist:1,
$iso:1}
W.j3.prototype={
$asp:function(){return[W.az]},
$ast:function(){return[W.az]},
$aso:function(){return[W.az]},
$isp:1,
$ist:1,
$iso:1}
W.qK.prototype={$ish:1}
W.k7.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cj]},
$ist:1,
$ast:function(){return[W.cj]},
$iso:1,
$aso:function(){return[W.cj]},
$isaF:1,
$asaF:function(){return[W.cj]},
$isay:1,
$asay:function(){return[W.cj]}}
W.iL.prototype={
$asp:function(){return[W.cj]},
$ast:function(){return[W.cj]},
$aso:function(){return[W.cj]},
$isp:1,
$ist:1,
$iso:1}
W.j4.prototype={
$asp:function(){return[W.cj]},
$ast:function(){return[W.cj]},
$aso:function(){return[W.cj]},
$isp:1,
$ist:1,
$iso:1}
W.k9.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaF:1,
$asaF:function(){return[W.ck]},
$isay:1,
$asay:function(){return[W.ck]},
$isp:1,
$asp:function(){return[W.ck]},
$ist:1,
$ast:function(){return[W.ck]},
$iso:1,
$aso:function(){return[W.ck]}}
W.iM.prototype={
$asp:function(){return[W.ck]},
$ast:function(){return[W.ck]},
$aso:function(){return[W.ck]},
$isp:1,
$ist:1,
$iso:1}
W.j5.prototype={
$asp:function(){return[W.ck]},
$ast:function(){return[W.ck]},
$aso:function(){return[W.ck]},
$isp:1,
$ist:1,
$iso:1}
W.r_.prototype={$ish:1}
W.r0.prototype={$ish:1}
W.q1.prototype={
aE:function(){var t,s,r,q,p
t=P.a4(null,null,null,P.C)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.bT)(s),++q){p=J.rP(s[q])
if(p.length!==0)t.h(0,p)}return t},
cZ:function(a){this.a.className=a.bg(0," ")},
gm:function(a){return this.a.classList.length},
gY:function(a){return this.a.classList.length===0},
ac:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s},
ag:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.remove(b)
return s}}
W.q4.prototype={
aR:function(a,b,c,d){return W.e8(this.a,this.b,a,!1,H.O(this,0))},
ec:function(a,b,c){return this.aR(a,null,b,c)}}
W.eI.prototype={}
W.q5.prototype={
bV:function(a){if(this.b==null)return
this.dS()
this.b=null
this.d=null
return},
cP:function(a,b){if(this.b==null)return;++this.a
this.dS()},
eh:function(a){return this.cP(a,null)},
em:function(a){if(this.b==null||this.a<=0)return;--this.a
this.dQ()},
dQ:function(){var t=this.d
if(t!=null&&this.a<=0)J.xZ(this.b,this.c,t,!1)},
dS:function(){var t=this.d
if(t!=null)J.yi(this.b,this.c,t,!1)},
f_:function(a,b,c,d,e){this.dQ()}}
W.q6.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bx.prototype={
gT:function(a){return new W.lR(a,this.gm(a),-1,null,[H.as(a,"bx",0)])},
h:function(a,b){throw H.l(new P.V("Cannot add to immutable List."))},
a7:function(a,b,c,d,e){throw H.l(new P.V("Cannot setRange on immutable List."))},
aA:function(a,b,c,d){return this.a7(a,b,c,d,0)},
aF:function(a,b,c,d){throw H.l(new P.V("Cannot modify an immutable List."))},
bY:function(a,b,c,d){throw H.l(new P.V("Cannot modify an immutable List."))},
$isp:1,
$asp:null,
$ist:1,
$ast:null,
$iso:1,
$aso:null}
W.lR.prototype={
G:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.fE(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gN:function(){return this.d}}
W.qT.prototype={}
P.qQ.prototype={
bu:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
b6:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.ar(a)
if(!!s.$isdG)return new Date(a.a)
if(!!s.$isFx)throw H.l(new P.eB("structured clone of RegExp"))
if(!!s.$iscf)return a
if(!!s.$iseS)return a
if(!!s.$isf3)return a
if(!!s.$ishh)return a
if(!!s.$isfg||!!s.$iseq)return a
if(!!s.$isbm){r=this.bu(a)
q=this.b
p=q.length
if(r>=p)return H.w(q,r)
o=q[r]
t.a=o
if(o!=null)return o
o={}
t.a=o
if(r>=p)return H.w(q,r)
q[r]=o
s.a8(a,new P.qS(t,this))
return t.a}if(!!s.$isp){r=this.bu(a)
t=this.b
if(r>=t.length)return H.w(t,r)
o=t[r]
if(o!=null)return o
return this.h0(a,r)}throw H.l(new P.eB("structured clone of other type"))},
h0:function(a,b){var t,s,r,q,p
t=J.bd(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.w(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.b6(t.n(a,p))
if(p>=r.length)return H.w(r,p)
r[p]=q}return r}}
P.qS.prototype={
$2:function(a,b){this.a.a[a]=this.b.b6(b)},
$S:function(){return{func:1,args:[,,]}}}
P.pJ.prototype={
bu:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
b6:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.dG(s,!0)
r.d9(s,!0)
return r}if(a instanceof RegExp)throw H.l(new P.eB("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.GZ(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bu(a)
r=this.b
o=r.length
if(p>=o)return H.w(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.mQ()
t.a=n
if(p>=o)return H.w(r,p)
r[p]=n
this.he(a,new P.pK(t,this))
return t.a}if(a instanceof Array){p=this.bu(a)
r=this.b
if(p>=r.length)return H.w(r,p)
n=r[p]
if(n!=null)return n
o=J.bd(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.w(r,p)
r[p]=n
if(typeof m!=="number")return H.a8(m)
r=J.dm(n)
l=0
for(;l<m;++l)r.i(n,l,this.b6(o.n(a,l)))
return n}return a}}
P.pK.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b6(b)
J.ki(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.rh.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.C,,]}}}
P.qR.prototype={}
P.jW.prototype={
he:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.bT)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.ri.prototype={
$1:function(a){return this.a.aC(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rj.prototype={
$1:function(a){return this.a.bq(a)},
$S:function(){return{func:1,args:[,]}}}
P.kV.prototype={
cz:function(a){if($.$get$vn().b.test(a))return a
throw H.l(P.dC(a,"value","Not a valid class token"))},
C:function(a){return this.aE().bg(0," ")},
gT:function(a){var t,s
t=this.aE()
s=new P.dw(t,t.r,null,null,[null])
s.c=t.e
return s},
a8:function(a,b){this.aE().a8(0,b)},
ay:function(a,b){var t=this.aE()
return new H.fY(t,b,[H.O(t,0),null])},
gY:function(a){return this.aE().a===0},
gm:function(a){return this.aE().a},
ac:function(a,b){if(typeof b!=="string")return!1
this.cz(b)
return this.aE().ac(0,b)},
cN:function(a){return this.ac(0,a)?a:null},
h:function(a,b){this.cz(b)
return this.hy(0,new P.kW(b))},
ag:function(a,b){var t,s
this.cz(b)
t=this.aE()
s=t.ag(0,b)
this.cZ(t)
return s},
a2:function(a,b){return this.aE().a2(0,!0)},
aq:function(a){return this.a2(a,!0)},
hy:function(a,b){var t,s
t=this.aE()
s=b.$1(t)
this.cZ(t)
return s},
$isew:1,
$asew:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
P.kW.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.l6.prototype={
gJ:function(a){return a.name}}
P.r7.prototype={
$1:function(a){this.b.aC(0,new P.jW([],[],!1).b6(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mf.prototype={
at:function(a,b){var t,s,r,q,p
try{t=a.get(b)
q=P.xt(t)
return q}catch(p){s=H.cm(p)
r=H.cl(p)
q=P.tl(s,r,null)
return q}},
gJ:function(a){return a.name}}
P.nq.prototype={
bR:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fs(a,b,c)
q=P.xt(t)
return q}catch(p){s=H.cm(p)
r=H.cl(p)
q=P.tl(s,r,null)
return q}},
h:function(a,b){return this.bR(a,b,null)},
fs:function(a,b,c){return a.add(new P.qR([],[]).b6(b))},
gJ:function(a){return a.name}}
P.hJ.prototype={
gas:function(a){return a.error}}
P.pa.prototype={
gas:function(a){return a.error}}
P.qs.prototype={
by:function(a){if(a<=0||a>4294967296)throw H.l(P.wM("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
c0:function(){return Math.random()}}
P.qB.prototype={
aX:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.ap(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
by:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.l(P.wM("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.aX()
return(this.a&t)>>>0}do{this.aX()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
c0:function(){this.aX()
var t=this.a
this.aX()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
f1:function(a){var t,s,r,q,p,o,n,m
t=J.ea(a,0)?-1:0
do{if(typeof a!=="number")return a.aK()
s=(a&4294967295)>>>0
a=C.d.ap(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.ap(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.ap(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.ap(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.ap(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.ap(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.ap(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aX()
this.aX()
this.aX()
this.aX()}}
P.qC.prototype={}
P.bS.prototype={$asbS:null}
P.km.prototype={$ish:1,
gaf:function(a){return a.href}}
P.eb.prototype={$ish:1}
P.ln.prototype={$ish:1}
P.lo.prototype={$ish:1}
P.lp.prototype={$ish:1}
P.lq.prototype={$ish:1}
P.lr.prototype={$ish:1}
P.ls.prototype={$ish:1}
P.lt.prototype={$ish:1}
P.lu.prototype={$ish:1}
P.lv.prototype={$ish:1}
P.lw.prototype={$ish:1,
gaf:function(a){return a.href}}
P.lx.prototype={$ish:1}
P.ly.prototype={$ish:1}
P.lz.prototype={$ish:1}
P.lA.prototype={$ish:1}
P.lB.prototype={$ish:1}
P.lC.prototype={$ish:1}
P.lQ.prototype={$ish:1,
gaf:function(a){return a.href}}
P.co.prototype={$ish:1}
P.md.prototype={$ish:1,
gaf:function(a){return a.href}}
P.d3.prototype={$isac:1}
P.mJ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d3]},
$ist:1,
$ast:function(){return[P.d3]},
$iso:1,
$aso:function(){return[P.d3]}}
P.iN.prototype={
$asp:function(){return[P.d3]},
$ast:function(){return[P.d3]},
$aso:function(){return[P.d3]},
$isp:1,
$ist:1,
$iso:1}
P.j6.prototype={
$asp:function(){return[P.d3]},
$ast:function(){return[P.d3]},
$aso:function(){return[P.d3]},
$isp:1,
$ist:1,
$iso:1}
P.n5.prototype={$ish:1}
P.n6.prototype={$ish:1}
P.d7.prototype={$isac:1}
P.nn.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d7]},
$ist:1,
$ast:function(){return[P.d7]},
$iso:1,
$aso:function(){return[P.d7]}}
P.iO.prototype={
$asp:function(){return[P.d7]},
$ast:function(){return[P.d7]},
$aso:function(){return[P.d7]},
$isp:1,
$ist:1,
$iso:1}
P.j7.prototype={
$asp:function(){return[P.d7]},
$ast:function(){return[P.d7]},
$aso:function(){return[P.d7]},
$isp:1,
$ist:1,
$iso:1}
P.nD.prototype={$ish:1,
gaf:function(a){return a.href}}
P.nI.prototype={
gm:function(a){return a.length}}
P.o5.prototype={$ish:1,
gaf:function(a){return a.href}}
P.oK.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.C]},
$ist:1,
$ast:function(){return[P.C]},
$iso:1,
$aso:function(){return[P.C]}}
P.iP.prototype={
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$aso:function(){return[P.C]},
$isp:1,
$ist:1,
$iso:1}
P.j8.prototype={
$asp:function(){return[P.C]},
$ast:function(){return[P.C]},
$aso:function(){return[P.C]},
$isp:1,
$ist:1,
$iso:1}
P.kt.prototype={
aE:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a4(null,null,null,P.C)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.bT)(r),++p){o=J.rP(r[p])
if(o.length!==0)s.h(0,o)}return s},
cZ:function(a){this.a.setAttribute("class",a.bg(0," "))}}
P.cc.prototype={
gdV:function(a){return new P.kt(a)},
e9:function(a,b,c,d,e){throw H.l(new P.V("Cannot invoke insertAdjacentHtml on SVG."))},
gee:function(a){return new W.eI(a,"click",!1,[W.ub])},
$ish:1}
P.oO.prototype={$ish:1}
P.oQ.prototype={$ish:1}
P.eA.prototype={}
P.p_.prototype={$ish:1,
gaf:function(a){return a.href}}
P.d9.prototype={$isac:1}
P.pb.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d9]},
$ist:1,
$ast:function(){return[P.d9]},
$iso:1,
$aso:function(){return[P.d9]}}
P.iQ.prototype={
$asp:function(){return[P.d9]},
$ast:function(){return[P.d9]},
$aso:function(){return[P.d9]},
$isp:1,
$ist:1,
$iso:1}
P.j9.prototype={
$asp:function(){return[P.d9]},
$ast:function(){return[P.d9]},
$aso:function(){return[P.d9]},
$isp:1,
$ist:1,
$iso:1}
P.pn.prototype={$ish:1,
gaf:function(a){return a.href}}
P.pr.prototype={$ish:1}
P.ps.prototype={$ish:1}
P.i_.prototype={$ish:1,
gaf:function(a){return a.href}}
P.qH.prototype={$ish:1}
P.qI.prototype={$ish:1}
P.qJ.prototype={$ish:1}
P.bh.prototype={}
P.da.prototype={$isp:1,
$asp:function(){return[P.D]},
$ist:1,
$ast:function(){return[P.D]},
$iso:1,
$aso:function(){return[P.D]}}
P.fL.prototype={$isfL:1,$isac:1,
gm:function(a){return a.length}}
P.eQ.prototype={$iseQ:1,$isac:1,
gbU:function(a){return a.buffer}}
P.fM.prototype={
fc:function(a,b,c,d){return a.decodeAudioData(b,H.dl(c,1),H.dl(d,1))},
h1:function(a,b){var t,s,r
t=P.fL
s=new P.bj(0,$.an,null,[t])
r=new P.dV(s,[t])
this.fc(a,b,new P.ku(r),new P.kv(r))
return s}}
P.ku.prototype={
$1:function(a){this.a.aC(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kv.prototype={
$1:function(a){var t=this.a
if(a==null)t.bq("")
else t.bq(a)},
$S:function(){return{func:1,args:[,]}}}
P.bC.prototype={}
P.dZ.prototype={}
P.kT.prototype={
gbU:function(a){return a.buffer}}
P.ko.prototype={
gJ:function(a){return a.name}}
P.nV.prototype={$ish:1}
P.qZ.prototype={$ish:1}
P.jM.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return P.xK(a.item(b))},
i:function(a,b,c){throw H.l(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.V("Cannot resize immutable List."))},
U:function(a,b){return this.n(a,b)},
K:function(a,b){return P.xK(a.item(b))},
$isp:1,
$asp:function(){return[P.bm]},
$ist:1,
$ast:function(){return[P.bm]},
$iso:1,
$aso:function(){return[P.bm]}}
P.iR.prototype={
$asp:function(){return[P.bm]},
$ast:function(){return[P.bm]},
$aso:function(){return[P.bm]},
$isp:1,
$ist:1,
$iso:1}
P.ja.prototype={
$asp:function(){return[P.bm]},
$ast:function(){return[P.bm]},
$aso:function(){return[P.bm]},
$isp:1,
$ist:1,
$iso:1}
T.fH.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
gY:function(a){return this.a.length===0},
gT:function(a){var t=this.a
return new J.i8(t,t.length,0,null,[H.O(t,0)])},
$ashn:function(){return[T.fI]},
$aso:function(){return[T.fI]},
gcJ:function(a){return this.a}}
T.fI.prototype={
gbe:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.f6(C.x)
r=T.f6(C.y)
q=T.wA(0,this.b)
new T.iE(s,q,0,0,0,t,r).dw()
r=q.c.buffer
q=q.a
r.toString
q=H.cN(r,0,q)
this.cy=q
t=q}else{t=s.bD()
this.cy=t}this.ch=0}}return t},
C:function(a){return this.a},
gJ:function(a){return this.a}}
T.dd.prototype={
C:function(a){return"ArchiveException: "+this.a}}
T.hi.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.an()
if(typeof r!=="number")return H.a8(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
if(typeof b!=="number")return H.a8(b)
s+=b
if(s<0||s>=t.length)return H.w(t,s)
return t[s]},
aW:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.a8(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.an()
if(typeof s!=="number")return H.a8(s)
b=t-(a-s)}return T.tp(this.a,this.d,b,a)},
b1:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.W()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.a8(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.w(q,s)
q[s]}return-1},
bf:function(a,b){return this.b1(a,b,0)},
cU:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.an()
if(typeof s!=="number")return H.a8(s)
r=this.aW(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.an()
if(typeof p!=="number")return H.a8(p)
if(typeof s!=="number")return s.W()
this.b=s+(t-(q-p))
return r},
c2:function(a){return P.oL(this.cU(a).bD(),0,null)},
a_:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.w(t,s)
p=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.w(t,r)
o=t[r]&255
if(this.d===1)return p<<8|o
return o<<8|p},
a1:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.w(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.w(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.w(t,s)
n=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.w(t,r)
m=t[r]&255
if(this.d===1)return(p<<24|o<<16|n<<8|m)>>>0
return(m<<24|n<<16|o<<8|p)>>>0},
aT:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.w(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.w(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.w(t,s)
n=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.w(t,r)
m=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.w(t,s)
l=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.w(t,r)
k=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.w(t,s)
j=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.w(t,r)
i=t[r]&255
if(this.d===1)return(C.a.ar(p,56)|C.a.ar(o,48)|C.a.ar(n,40)|C.a.ar(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.ar(i,56)|C.a.ar(j,48)|C.a.ar(k,40)|C.a.ar(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bD:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.an()
if(typeof r!=="number")return H.a8(r)
q=t-(s-r)
t=this.a
r=J.ar(t)
if(!!r.$isda){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cN(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.xv(r.c9(t,s,p>o?o:p)))},
eS:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gbU:function(a){return this.a},
ghB:function(a){return this.b}}
T.nv.prototype={
i0:function(a,b){var t,s,r,q
if(b==null)b=J.c_(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cl(s-q)
C.p.aA(r,t,s,a)
this.a+=b},
cY:function(a){return this.i0(a,null)},
i2:function(a){var t,s,r,q
t=J.bd(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a8(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a8(r)
this.cl(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a8(r)
C.p.a7(q,s,s+r,t.gbU(a),t.ghB(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.an()
if(typeof q!=="number")return H.a8(q)
this.a=t+(r-(s-q))},
aW:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cN(t,a,b-a)},
d6:function(a){return this.aW(a,null)},
cl:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.bb(P.dB("Invalid length "+H.z(s)))
r=new Uint8Array(s)
q=this.c
C.p.aA(r,0,q.length,q)
this.c=r},
fg:function(){return this.cl(null)},
gm:function(a){return this.a}}
T.pF.prototype={
fE:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.aW(this.a-20,20)
if(s.a1()!==117853008){a.b=t
return}s.a1()
r=s.aT()
s.a1()
a.b=r
if(a.a1()!==101075792){a.b=t
return}a.aT()
a.a_()
a.a_()
q=a.a1()
p=a.a1()
o=a.aT()
n=a.aT()
m=a.aT()
l=a.aT()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fh:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.an()
if(typeof r!=="number")return H.a8(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a1()===101010256){a.b=t
return q}}throw H.l(new T.dd("Could not find End of Central Directory Record"))},
eW:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fh(a)
this.a=t
a.b=t
a.a1()
this.b=a.a_()
this.c=a.a_()
this.d=a.a_()
this.e=a.a_()
this.f=a.a1()
this.r=a.a1()
s=a.a_()
if(s>0)this.x=a.c2(s)
this.fE(a)
r=a.aW(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.W()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.av()
if(!(p<t+o))break
if(r.a1()!==33639248)break
p=new T.pH(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.a_()
p.b=r.a_()
p.c=r.a_()
p.d=r.a_()
p.e=r.a_()
p.f=r.a_()
p.r=r.a1()
p.x=r.a1()
p.y=r.a1()
n=r.a_()
m=r.a_()
l=r.a_()
p.z=r.a_()
p.Q=r.a_()
p.ch=r.a1()
o=r.a1()
p.cx=o
if(n>0)p.cy=r.c2(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.an()
j=r.aW(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.an()
if(typeof g!=="number")return H.a8(g)
if(typeof k!=="number")return k.W()
r.b=k+(i-(h-g))
p.db=j.bD()
f=j.a_()
e=j.a_()
if(f===1){if(e>=8)p.y=j.aT()
if(e>=16)p.x=j.aT()
if(e>=24){o=j.aT()
p.cx=o}if(e>=28)p.z=j.a1()}}if(l>0)p.dx=r.c2(l)
a.b=o
p.dy=T.Ga(a,p)
q.push(p)}}}
T.pG.prototype={
gbe:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.f6(C.x)
q=T.f6(C.y)
t=T.wA(0,t)
new T.iE(s,t,0,0,0,r,q).dw()
q=t.c.buffer
t=t.a
q.toString
t=H.cN(q,0,t)
this.cy=t
this.d=0}else{t=s.bD()
this.cy=t}}return t},
C:function(a){return this.z},
eX:function(a,b){var t,s,r,q
t=a.a1()
this.a=t
if(t!==67324752)throw H.l(new T.dd("Invalid Zip Signature"))
this.b=a.a_()
this.c=a.a_()
this.d=a.a_()
this.e=a.a_()
this.f=a.a_()
this.r=a.a1()
this.x=a.a1()
this.y=a.a1()
s=a.a_()
r=a.a_()
this.z=a.c2(s)
this.Q=a.cU(r).bD()
this.cx=a.cU(this.ch.x)
if((this.c&8)!==0){q=a.a1()
if(q===134695760)this.r=a.a1()
else this.r=q
this.x=a.a1()
this.y=a.a1()}}}
T.pH.prototype={
C:function(a){return this.cy}}
T.pE.prototype={
h2:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.G9(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.D],p=0;p<t.length;t.length===r||(0,H.bT)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.d2()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fI(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.dW(k,"$isp",q,"$asp")){j.cy=k
j.cx=T.tp(k,0,null,0)}else if(k instanceof T.hi){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hi(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.ha(m,"/")
j.y=n.r
s.push(j)}return new T.fH(s,null)}}
T.m9.prototype={
eR:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.ar(1,this.b)
r=H.cz(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.w(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.w(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iE.prototype={
dw:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.W()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.av()
if(!(r<s+q))break
if(!this.fB())break}},
fB:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.W()
if(typeof s!=="number")return s.av()
if(s>=r+q)return!1
p=this.ax(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.ax(16)
s=this.ax(16)
if(n!==0&&n!==(s^65535)>>>0)H.bb(new T.dd("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.an()
r=q-r
if(n>s-r)H.bb(new T.dd("Input buffer is broken"))
m=t.aW(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.an()
if(typeof l!=="number")return H.a8(l)
if(typeof s!=="number")return s.W()
t.b=s+(r-(q-l))
this.b.i2(m)
break
case 1:this.dm(this.f,this.r)
break
case 2:this.fC()
break
default:throw H.l(new T.dd("unknown BTYPE: "+o))}return(p&1)===0},
ax:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.W()
if(typeof r!=="number")return r.av()
if(r>=q+p)throw H.l(new T.dd("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.w(q,r)
o=q[r]
this.c=(this.c|C.a.aw(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.ar(1,a)
this.c=C.a.dO(t,a)
this.d=s-a
return(t&r-1)>>>0},
cs:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.W()
if(typeof p!=="number")return p.av()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.w(o,p)
m=o[p]
this.c=(this.c|C.a.aw(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.ar(1,s)-1)>>>0
if(p>=t.length)return H.w(t,p)
l=t[p]
k=l>>>16
this.c=C.a.dO(r,k)
this.d=q-k
return l&65535},
fC:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.ax(5)+257
s=this.ax(5)+1
r=this.ax(4)+4
q=H.cz(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.w(C.E,o)
n=C.E[o]
m=this.ax(3)
if(n>=q)return H.w(p,n)
p[n]=m}l=T.f6(p)
k=new Uint8Array(H.cz(t))
j=new Uint8Array(H.cz(s))
i=this.dl(t,l,k)
h=this.dl(s,l,j)
this.dm(T.f6(i),T.f6(h))},
dm:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cs(a)
if(s>285)throw H.l(new T.dd("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.fg()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.w(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.w(C.C,p)
o=C.C[p]+this.ax(C.V[p])
n=this.cs(b)
if(n<=29){if(n>=30)return H.w(C.z,n)
m=C.z[n]+this.ax(C.U[n])
for(r=-m;o>m;){t.cY(t.d6(r))
o-=m}if(o===m)t.cY(t.d6(r))
else t.cY(t.aW(r,o-m))}else throw H.l(new T.dd("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.an();--r
t.b=r
if(r<0)t.b=0}},
dl:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cs(b)
switch(q){case 16:p=3+this.ax(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=s}break
case 17:p=3+this.ax(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
case 18:p=11+this.ax(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.l(new T.dd("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kn.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Math Book",H.a([$.L,$.Z,$.au],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Giant Map",H.a([$.L,$.Z],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Microscope",H.a([$.E,$.Z,$.b7],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Star Chart",H.a([$.L,$.Z],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("History Book",H.a([$.L,$.Z],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.c2,$.aw],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.E,$.Z],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.ha,$.m)
q.i(0,$.be,$.m)
q.i(0,$.f1,$.k)
q.i(0,$.b0,$.K)
q.i(0,$.cC,$.k)
p=$.n
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.r
o=o+n+" to stop "
m=$.J
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.F2
n=[U.b]
q.i(0,new R.a0("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.n
q.i(0,new R.a0("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.r+" to stop "+$.J+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.wL(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
p="The "+m+" finds a massive library, filled with books. The "
l=$.r
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.A
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.a0("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.fl(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.eZ,$.K)
s.i(0,$.cC,$.m)
p=$.n
o="The "+p+"  is approached by a "
l=$.r
s.i(0,new R.a0("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.J+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.n
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.r
s.i(0,new R.a0("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.J+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.es(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
s.i(0,new R.a0("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.r+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.fl(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.eZ,$.K)
t.i(0,$.cC,$.m)
t.i(0,$.c0,$.K)
t.i(0,$.tb,$.K)
r=$.n
q="The "+r+"  is approached by a "
p=$.r
q=q+p+" who offers them a grant to study "
o=$.ad
t.i(0,new R.a0("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.J+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.fl(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
o=$.r
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.J
r=r+p+".  It is up to the "
q=$.n
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.ad
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.F8
t.i(0,new R.a0("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.e5(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
t.i(0,new R.a0("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.J+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.r+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,t,null),$.aC)}}
K.bU.prototype={}
L.fJ.prototype={
E:function(){var t,s
t=Q.H(null,null,A.a1)
s=A.i("Perfectly Generic Object",H.a([],[G.Y]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.k)
q.i(0,$.be,$.K)
q.i(0,$.dL,$.k)
q.i(0,$.c0,$.m)
q.i(0,$.e_,$.K)
p=$.n
o="The "+p+" learns that all of the local "
n=$.r
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.A
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.ci+". The "+p+" has won! "
i=[U.b]
q.i(0,new R.R("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.W(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.F(s,q,null),$.aj)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.f_,$.k)
s.i(0,$.eh,$.K)
s.i(0,$.ej,$.m)
s.i(0,$.cR,$.k)
s.i(0,$.ce,$.K)
p=$.n
o="The "+p+" learns that all of the local "
n=$.r
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.A
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.ci+". The "+p+" has won! "
s.i(0,new R.R("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.W(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.F(q,s,null),$.aj)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.be,$.K)
t.i(0,$.c6,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.r
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.J
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.A
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.ci+". The "+r+" has won! "
t.i(0,new R.a0("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.uq(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
l=$.n
r="The "+l+" learns that all of the local "
m=$.r
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.A
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.ci+". The "+l+" has won! "
t.i(0,new R.R("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.W(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.F(s,t,null),$.aj)},
C:function(a){return this.Q},
aa:function(a,b,c,d,e){var t=this.Q
this.r=new X.iq("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.i9]),H.a([],[M.h6]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.E()
this.F()
t=this.e
if($.$get$kq().V(0,t))H.bb("Duplicate aspect id for "+this.C(0)+": "+t+" is already registered for "+J.cJ($.$get$kq().n(0,t))+".")
$.$get$kq().i(0,t,this)},
gJ:function(a){return this.Q}}
L.aD.prototype={}
M.ks.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Barbells",H.a([$.ab,$.c8,$.E],s),null,!1,"Strength Building Metal")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Basketball",H.a([$.el,$.c9],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Baseball Bat",H.a([$.jl,$.X],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Rubber Ball",H.a([$.el,$.c9],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.aJ,$.a7],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Hockey Stick",H.a([$.jl,$.X,$.dg],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Trophy",H.a([$.E,$.bg],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Boxing Glove",H.a([$.vY,$.c9],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Yoga Mat",H.a([$.c9,$.b5],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.e0,$.K)
q.i(0,$.bV,$.m)
q.i(0,$.cR,$.K)
p=$.n
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.r
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.J+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.i(0,new R.a0("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.n
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.r
q.i(0,new R.a0("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.J+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.e5(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
n="The "+m+"  wanders into a bunch of "
p=$.r
q.i(0,new R.a0("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hH(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.e0,$.m)
t.i(0,$.f2,$.m)
t.i(0,$.bV,$.m)
s=$.n
r="The "+s+" finds a team of underdog "
p=$.r
t.i(0,new R.a0("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.wL(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.r
s="A group of "+p+"s approach the "
r=$.n
s=s+r+". Apparently their sports team lost their coach to the "+$.A+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.J
t.i(0,new R.a0("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.e5(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
k=$.r
p="A group of "+k+"s approach the "
r=$.n
t.i(0,new R.a0("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.A+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.ad+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,t,null),$.aC)}}
U.kw.prototype={
R:function(a,b){var t=0,s=P.bp(),r,q,p,o
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=$.$get$ve()
p=q.createBufferSource()
o=p
t=3
return P.ct(J.y3(q,b),$async$R)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdp:function(){return[P.eQ]},
$asc7:function(){return[P.eQ,P.bh]}}
U.n_.prototype={
aS:function(a){return"audio/mpeg"}}
U.ns.prototype={
aS:function(a){return"audio/ogg"}}
U.oH.prototype={
R:function(a,b){var t=0,s=P.bp(),r,q,p
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=W.yM(b)
p=new W.eI(q,"canplaythrough",!1,[W.T])
t=3
return P.ct(p.gae(p),$async$R)
case 3:r=q
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asio:function(){return[W.eR]},
$asc7:function(){return[W.eR,P.C]}}
U.oI.prototype={}
U.oJ.prototype={}
O.ky.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Cod Piece",H.a([$.P,$.a_,$.aI,$.N,$.X],s),"God damn it, MI. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.tu,$.N,$.bK],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aE,$.X,$.bk,$.N,$.a9],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Snare Trap",H.a([$.P,$.aE,$.N,$.bf],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cA,$.k)
t.i(0,$.hd,$.k)
t.i(0,$.cw,$.k)
t.i(0,$.du,$.k)
t.i(0,$.cB,$.k)
t.i(0,$.eY,$.k)
r="After all the bullshit the "+$.A+" has put the native "
q=$.r
r=r+q+"s through, the "
p=$.n
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aK+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.J
m=[U.b]
t.i(0,new R.a6("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.y(),!1,!1,new Y.dO("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.r
n="A group of jubilant "+p+"s are following the "
q=$.n
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.J
t.i(0,new R.a6("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.A+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
q=$.n
t.i(0,new R.a6("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.A+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.y(),!1,!1,new Y.kN("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.A+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.n
q=q+r+" organizes a huge festival for all the "
p=$.r
t.i(0,new R.bA("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Y.oZ.prototype={
R:function(a,b){var t=0,s=P.bp(),r
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asez:function(){return[P.C]},
$asc7:function(){return[P.C,P.C]}}
Y.nS.prototype={
aS:function(a){return"application/octet-stream"},
R:function(a,b){var t=0,s=P.bp(),r
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdp:function(){return[P.bh]},
$asc7:function(){return[P.bh,P.bh]}}
L.kC.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Bear",H.a([$.aJ,$.b8,$.Q],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Thought",H.a([$.ts,$.wj,$.f9],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Doorway",H.a([$.f9,$.Q],s),null,!1,null)
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Contemplative","Transitions","Quiet"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cd,$.k)
t.i(0,$.d1,$.m)
t.i(0,$.bV,$.m)
t.i(0,$.ej,$.B)
r=$.n
q="The "+r+" hears a "+$.r+" "+$.J+" up to him, it talks about how the imps keep jumpscaring it, and how The "+r+" needs to stop the Denizen."
p="The "+r+" has an imp jumpscare them, they instantly smite it, but they decide to get revenge by killing the "
o=$.A
p=p+o+"."
n="The "+r+" starts trekking to the "+o+"'s lair."
m="The "+r+" arrives in the "+o+"'s lair, they challenge it to a fight."
l="The "+o+" is slain... And the consorts aren't jumpscared any more"
t.i(0,new R.R("Revenge on the Denizen",!1,[new U.b(q),new U.b(p),new U.b(n),new U.W(m,"The "+r+" is defeated, and the "+o+"'s minions keep jumpscaring the innocent imps.",l)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.F(s,t,null),$.aj)}}
V.rl.prototype={
$1:function(a){var t,s,r,q
t=document
s=H.eM(t.querySelector("#myHeadCanon"),"$ishP")
r=H.eM(t.querySelector("#canon"),"$isfX")
q=t.createElement("div")
q.textContent=s.value
r.appendChild(q)},
$S:function(){return{func:1,args:[,]}}}
V.rm.prototype={
$1:function(a){var t,s
t=document
s=t.querySelector("#canon")
t=t.createElement("div")
t.textContent="AB: "+this.a.hE("JRheadcanon")
s.appendChild(t)
t=s.style
t.color="#ff0000"
t=s.style
t.backgroundColor="#888888"},
$S:function(){return{func:1,args:[W.T]}}}
T.kE.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Mystical Vial of Blood",H.a([$.b7,$.bk,$.Q,$.aY],s),null,!1,"Vial of Not-ABs Oil")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Bananaphone",H.a([$.ao,$.bk,$.Q,$.b6],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.P,$.bk,$.Q,$.aY,$.hk],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.E,$.bf,$.Q,$.aY,$.hk,$.aH],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.X,$.tC,$.bk,$.aY,$.Q,$.a_],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d_,$.k)
q.i(0,$.tf,$.k)
q.i(0,$.c0,$.m)
p=$.n
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.r
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ad+" and some boondollars in compensation."
n=this.x2
k=[U.b]
q.i(0,new R.a0("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.e5(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.r
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.J+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.A
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.n
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.ci+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.R("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.W(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.F(s,q,null),$.aj)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.cR,$.k)
s.i(0,$.cB,$.K)
s.i(0,$.b0,$.K)
s.i(0,$.iy,$.k)
s.i(0,$.cw,$.K)
p=$.n
o="The "+p+"  and the "
m=$.eu
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.A
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.R("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(l),new U.W(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.et(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
h=$.n
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.r
i=i+m+"s explains that before  "
p=$.A
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.ci+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.F_
s.i(0,new R.R("Chain the Towers",!1,[new U.b(i),new U.b(m),new U.b(j),new U.W(l,h,o)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.n
o="The "+p+" learns of the "
h=$.aK
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.r
o=o+l+" explains that the "
j=$.A
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.ci+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.R("Protect the Beams",!1,[new U.b(l),new U.b(o),new U.b(m),new U.W(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.n
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.r
h=h+i+" on "+$.aK+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.f4+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a6("One Degree of Separation",!1,[new U.b(h),new U.b(m),new U.b(i)],H.a([],k),R.fl(),!1,!1,new Y.c1("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.r+" on "
m=$.aK
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.f4+" is now more popular with your friends than you are."
s.i(0,new R.a6("Steal The Friends",!1,[new U.b(i),new U.b(h),new U.b(m)],H.a([],k),R.ur(),!1,!1,new Y.c1("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
m="The "+p+"  and the "
h=$.eu
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.A
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.R("Pale Shipping Dungeon",!1,[new U.b(m),new U.W(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.z(C.q)+".",o)],H.a([],k),R.et(),!1,!1,new Y.jC(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ah)
n.i(0,new X.F(q,s,null),$.aj)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.be,$.K)
t.i(0,$.c6,$.m)
r="In the wake of the defeat of the "+$.A+" it becomes really how isolated the individual "
q=$.r
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.n
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.f4+" to kick your ass, but luckily they have several."
t.i(0,new R.a6("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.e5(),!1,!1,new Y.c1("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
o=$.n
q="The "+o+" learns that two prominent "
p=$.r
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.A
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.ci+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.J+"ing. "
t.i(0,new R.R("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(m),new U.W(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.aj)}}
T.kH.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Pan's Pipe",H.a([$.a9,$.X,$.bk,$.Q],s),null,!1,"Smonkin Weeds Pipe")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Skeleton Key",H.a([$.ba,$.Q],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.a7,$.E,$.bk,$.Q],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Jet Pack",H.a([$.ap,$.E,$.aJ,$.Q,$.a_],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.c6,$.m)
q.i(0,$.f2,$.k)
q.i(0,$.b0,$.m)
p=$.n
o="The "+p+" tries posting a letter through the "
n=$.ad
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.A
o=o+m+" has screwed with the mail system, crippling the "
l=$.r
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.ci+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.F3
i=[U.b]
q.i(0,new R.R("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.W(j,p,l)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.f
m.i(0,new X.F(s,q,null),$.aj)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.be,$.k)
s.i(0,$.f2,$.m)
s.i(0,$.b0,$.m)
s.i(0,$.bV,$.m)
s.i(0,$.c6,$.m)
p=$.n
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.ad
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.r
k=l+k+" fields. The "+k+"s "+$.J+"ing is so joyful it's literally deafening. "
l=$.A
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.ci+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.R("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.W(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,s,null),$.aj)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.ce,$.k)
t.i(0,$.lJ,$.k)
t.i(0,$.f2,$.K)
t.i(0,$.c6,$.K)
r=$.n
q="The "+r+" is chilling in a "+$.r+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.A
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ad
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aK+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.ci+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.R("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,t,null),$.aj)}}
M.fQ.prototype={
ew:function(a){var t=this.a
if(!t.V(0,a))return
return t.n(0,a)}}
Y.kJ.prototype={
R:function(a,b){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=J.dY(b,"\n")
p=P.C
o=P.bY(p,p)
n=P.bY(p,[P.ew,P.C])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.dc(k).bj(k).length===0)m=null
else if(m==null)m=C.c.bj(k)
else{j=C.c.bj(k)
i=C.c.L(m,0,C.c.ea(m,$.$get$vj())+1)+j
o.i(0,i,m)
if(!n.V(0,m))n.i(0,m,P.a4(null,null,null,p))
J.xY(n.n(0,m),i)}}r=new M.fQ(o,n)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asez:function(){return[M.fQ]},
$asc7:function(){return[M.fQ,P.C]}}
A.kP.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.L,$.ab,$.b6,$.c8],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.L,$.b6],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Beagle Puss",H.a([$.b7,$.b6],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.aJ,$.a7,$.b6],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Banana",H.a([$.ao,$.b6],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Fake Flower",H.a([$.P,$.b6],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.E,$.b6],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cw,$.m)
q.i(0,$.cv,$.k)
q.i(0,$.bV,$.m)
p=$.n
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.r
o=o+n+"s are too scared to even "+$.J+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.A+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.i(0,new R.a0("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.e0,$.K)
s.i(0,$.bV,$.k)
s.i(0,$.cv,$.k)
s.i(0,$.cA,$.k)
o=$.n
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aK
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.r
k=k+j+"s let out a braying "+$.J+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.F6
s.i(0,new R.a0("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.cD,$.K)
t.i(0,$.c5,$.m)
t.i(0,$.cv,$.k)
t.i(0,$.bV,$.m)
t.i(0,$.it,$.m)
r=$.n
q="The "+r+"  is approached by a Crafty "
o=$.r
q=q+o+" who offers them a magical "
n=$.ad
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.J
t.i(0,new R.a0("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,t,null),$.aC)}}
S.bG.prototype={
C:function(a){return H.z(new H.dT(H.kh(this),null))+": "+this.c},
gJ:function(a){return this.c}}
S.ia.prototype={}
S.m6.prototype={}
M.l1.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Can of Spray Paint",H.a([$.ax,$.E],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.L,$.ai,$.b6,$.au],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.tJ,$.E,$.av],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.L,$.ai,$.au],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.ax,$.am,$.L],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.ai,$.L],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.ai,$.aA,$.am],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Paint Set",H.a([$.ax,$.ai],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Shaving Cream",H.a([$.ap,$.ai,$.E],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Classy Suit",H.a([$.P,$.ai],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.L,$.ai,$.au],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d1,$.m)
q.i(0,$.cC,$.k)
q.i(0,$.b0,$.m)
p=$.n
o="The "+p+" visits a beautiful "
n=$.ad
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.r
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.A+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.J+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.i(0,new R.a0("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.e0,$.K)
s.i(0,$.bV,$.m)
s.i(0,$.cv,$.K)
s.i(0,$.be,$.m)
s.i(0,$.cA,$.k)
o=$.n
n="The "+o+" finds a troupe of dejected looking "
l=$.r
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aK
l=l+n+" "
k=$.ad
s.i(0,new R.a0("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.J+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.hd,$.K)
t.i(0,$.cw,$.K)
t.i(0,$.eY,$.K)
t.i(0,$.c5,$.K)
t.i(0,$.be,$.m)
t.i(0,$.b0,$.m)
r=$.n
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.J
q=q+o+"ingworth, "
n=$.r
q=q+n+" heiress to the "+$.ad+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.EX
t.i(0,new R.a0("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,t,null),$.aC)}}
T.l7.prototype={}
V.l9.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Trendy Fabric",H.a([$.ax,$.P],s),null,!1,"Weird Tasting Candy Paper")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Necklace",H.a([$.ax,$.tz,$.hk],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Sewing Needle",H.a([$.E,$.tF,$.aZ],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=$.jj
r=A.i("Broom",H.a([r,$.X,$.ab,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Rolling Pin",H.a([$.X,$.tM,$.ab],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.P,$.b5,$.bk,$.ax,$.e2],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Yarn Ball",H.a([$.ax,$.P],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Refrigerator",H.a([$.aH,$.c8,$.E,$.bl],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Photo Album",H.a([$.ax,$.L],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Cubes",H.a([$.bl],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.E,$.ap,$.ab,$.c8,$.ty],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Failed Dish",H.a([$.bK],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Dr Pepper BBQ Sauce",H.a([$.bK],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Potted Plant",H.a([$.ax,$.bO,$.b3],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Chicken Leg",H.a([$.ao,$.bi,$.ba],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Juicy Steak",H.a([$.ao,$.bi],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Wedding Cake",H.a([$.ax,$.ao,$.aY],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cA,$.m)
q.i(0,$.cB,$.m)
q.i(0,$.cw,$.K)
p=$.n
o="The "+p+" is visited by a Beautiful "
n=$.r
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ad
l=[U.b]
q.i(0,new R.a0("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.J+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.y(),!1,!1,new Y.ic("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.cw,$.k)
s.i(0,$.bV,$.m)
s.i(0,$.eY,$.k)
s.i(0,$.du,$.m)
s.i(0,$.be,$.k)
p=$.n
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ad
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.r
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.J+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.F4
s.i(0,new R.a0("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.ef,$.k)
t.i(0,$.be,$.m)
t.i(0,$.ds,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.iy,$.k)
r=$.n
q="The "+r+" finds a loom, and a Wizened "
p=$.r
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ad
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.J+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.a0("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.aC)}}
U.la.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.au,$.a7,$.L,$.aE,$.Q,$.a_],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Egg Timer",H.a([$.aA,$.bk,$.Q,$.aE],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Skull Timer",H.a([$.ba,$.bk,$.Q,$.aE],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Poison Flask",H.a([$.b7,$.Q,$.bK],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.b7,$.Q,$.bl,$.aE,$.bf,$.bQ,$.b9],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Obituary",H.a([$.aH,$.b9,$.aE,$.L,$.Q],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.dL,$.k)
q.i(0,$.d0,$.m)
q.i(0,$.f2,$.K)
q.i(0,$.be,$.K)
q.i(0,$.c0,$.m)
p=$.n
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.r
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ad
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.A
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.ci+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.i(0,new R.R("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.F(s,q,null),$.aj)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.dL,$.k)
s.i(0,$.d0,$.m)
s.i(0,$.ek,$.ah)
s.i(0,$.eg,$.m)
s.i(0,$.tb,$.m)
s.i(0,$.d_,$.m)
s.i(0,$.d0,$.m)
s.i(0,$.be,$.K)
s.i(0,$.c0,$.m)
s.i(0,$.dt,$.m)
p=$.n
o="The "+p+" has found a group of Violent "
m=$.r
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aK
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.J+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.A
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.ci+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.R("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.es(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ad
p=p+l+"s alike. "
l=$.r+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.A
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.ci+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.R("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.W(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.aj)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.c0,$.k)
t.i(0,$.vC,$.ah)
t.i(0,$.ha,$.K)
r=$.n
q="The "+r+" finds a small dungeon bearing the image of "
p=$.A
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.r+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.R("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.W(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.es(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
k=$.n
p="The "+k+" learns from one of their "
r=$.r
p=p+r+"s that there is an ancient prophecy of a "
l=$.aK
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ad
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.A
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.ci+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.EW
t.i(0,new R.R("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.W(o,k,q)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.aj)}}
Z.lb.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Dream Diary",H.a([$.L,$.au,$.Q],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aA,$.bk,$.ab,$.Q,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aA,$.bk,$.Q],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.ef,$.m)
q.i(0,$.ds,$.k)
q.i(0,$.b0,$.m)
q.i(0,$.iy,$.m)
p=$.r
o="A "+p+" child tugs on the "
n=$.n
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ad
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.A
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.J+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wy
k=[U.b]
q.i(0,new R.R("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.W(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=this.f
l.i(0,new X.F(s,q,null),$.aj)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.ce,$.m)
s.i(0,$.ds,$.k)
s.i(0,$.d2,$.m)
s.i(0,$.cd,$.m)
s.i(0,$.dI,$.m)
s.i(0,$.cv,$.k)
p=$.n
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.r
n=n+m+"s are even starting to snigger and "
j=$.J
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.A
s.i(0,new R.R("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.W("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.F(q,s,null),$.aj)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.d1,$.k)
t.i(0,$.h9,$.m)
t.i(0,$.b0,$.m)
t.i(0,$.cd,$.k)
t.i(0,$.dI,$.k)
t.i(0,$.ds,$.m)
r=$.n
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.A
t.i(0,new R.R("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aK+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.r+" is "+$.J+"ing in reverse. Another is in a "+$.ad+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.W("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.F(s,t,null),$.aj)}}
X.iq.prototype={}
X.i9.prototype={
$S:function(){return{func:1,v:true,args:[[P.p,M.h6]]}}}
M.h6.prototype={}
U.lD.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Fluthulu Poster",H.a([$.P,$.b5,$.b9,$.bn],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Scalemate",H.a([$.P,$.b5,$.b9],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aH,$.aA,$.ba,$.fa,$.aI],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aA,$.w3,$.fb,$.aI],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aA,$.bQ,$.bi,$.b9],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.au,$.L,$.aB,$.b9],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.L,$.a2,$.ab],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.L,$.a2,$.ab],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.L,$.a2,$.bQ,$.b9,$.bn],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aH,$.aw,$.a2,$.ab,$.aI],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aH,$.tv,$.a2,$.ab,$.aI],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.h7,$.ah)
q.i(0,$.cB,$.m)
q.i(0,$.c6,$.m)
q.i(0,$.cD,$.K)
p=$.n
o="The "+p+" learns of a Beautiful "
n=$.r
o=o+n+" who has been kidnapped by the vial "
m=$.A
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ad
j=[U.b]
q.i(0,new R.a0("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.k)
s.i(0,$.d_,$.k)
s.i(0,$.iv,$.m)
s.i(0,$.c0,$.k)
s.i(0,$.ek,$.k)
s.i(0,$.hc,$.m)
o=$.n
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.r
s.i(0,new R.a0("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.c5,$.k)
t.i(0,$.ix,$.m)
t.i(0,$.c0,$.k)
t.i(0,$.dJ,$.m)
t.i(0,$.eZ,$.m)
t.i(0,$.tf,$.m)
r=$.n
q="The "+r+" finds a group of three "
o=$.r
q=q+o+"s "
n=$.J
t.i(0,new R.a0("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,t,null),$.aC)}}
N.a5.prototype={
C:function(a){return H.z(new H.dT(H.kh(this),null))+": "+H.z(this.b)}}
O.c7.prototype={
b3:function(a){var t=0,s=P.bp(),r,q=this,p
var $async$b3=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.ct(q.aU(a),$async$b3)
case 3:r=p.R(0,c)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b3,s)}}
O.dp.prototype={
bb:function(a){var t=0,s=P.bp(),r
var $async$bb=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$bb,s)},
cH:function(a){var t=0,s=P.bp(),r,q=this
var $async$cH=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.yN([J.v5(a)],q.aS(0),null))
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$cH,s)},
aU:function(a){var t=0,s=P.bp(),r,q=this,p,o
var $async$aU=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=P.bh
o=new P.bj(0,$.an,null,[p])
W.vJ(a,null,q.aS(0),null,null,"arraybuffer",null,null).b4(new O.kD(new P.dV(o,[p])))
r=o
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aU,s)},
$asc7:function(a){return[a,P.bh]}}
O.kD.prototype={
$1:function(a){this.a.aC(0,H.eM(J.ya(a),"$isbh"))},
$S:function(){return{func:1,args:[W.e1]}}}
O.ez.prototype={
bb:function(a){var t=0,s=P.bp(),r,q,p,o,n
var $async$bb=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:a.toString
q=H.cN(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hG(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$bb,s)},
aU:function(a){var t=0,s=P.bp(),r
var $async$aU=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=W.vI(a,null,null)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aU,s)},
$asc7:function(a){return[a,P.C]}}
O.io.prototype={
aU:function(a){var t=0,s=P.bp(),r
var $async$aU=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aU,s)},
bb:function(a){return H.bb("Element format doesn't read from buffers")},
$asc7:function(a){return[a,P.C]}}
V.lU.prototype={
aS:function(a){return"font/opentype"},
R:function(a,b){var t=0,s=P.bp(),r
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:t=3
return P.ct(A.ht("scripts/Rendering/text/opentype.min.js",!1),$async$R)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdp:function(){return[R.he]},
$asc7:function(){return[R.he,P.bh]}}
Z.ip.prototype={}
E.iC.prototype={}
E.nr.prototype={}
E.M.prototype={
C:function(a){var t="["+J.cJ(this.a)+" x "+H.z(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fK.prototype={
C:function(a){var t="[(Random from "+P.tQ(this.d,"(",")")+") x "+H.z(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.kr.prototype={
C:function(a){return"[Stats assigned from player Interests x"+H.z(this.b)+"]"}}
Y.m_.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.au,$.N,$.L,$.a_,$.hm],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aA,$.N,$.aE],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Exposed Thread",H.a([$.P,$.N,$.aE],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Teetering Plate",H.a([$.mt,$.N,$.aE],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.lL,$.m)
t.i(0,$.c6,$.k)
t.i(0,$.dt,$.K)
t.i(0,$.df,$.k)
r=$.r
q="An excited "+r+" runs up to the "
p=$.n
q=q+p+" and starts to "
o=$.J
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aK
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.ad
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.A
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.i(0,new R.R("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.W(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o=$.n
t.i(0,new R.a6("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.A+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.r+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.y(),!1,!1,new Y.dO("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.r
j="Now that the "+o+"s are free from the reign of "+$.A+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.n
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.J
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aK+" Quest Online: The "+$.ad+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.i(0,new R.a6("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.A+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.n
p=p+o+" shows the "
r=$.r
t.i(0,new R.bA("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.J+"s in time to stop them.    ")],H.a([],i),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Y.m0.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Sherpa Parka",H.a([$.bl,$.N,$.cg],s),"Clearly the best class uses this.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Guide Book",H.a([$.a_,$.bl,$.au,$.L,$.N,$.Z],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Whistle",H.a([$.E,$.N,$.aJ],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Announcement System",H.a([$.E,$.N,$.a7,$.Z],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.lL,$.k)
t.i(0,$.c6,$.k)
t.i(0,$.dt,$.m)
t.i(0,$.df,$.k)
r="Now that the "+$.A+" is out of the way, a group of "
q=$.r
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.n
o=[U.b]
t.i(0,new R.a6("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.J+", but they are happy.")],H.a([],o),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.A+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.n
t.i(0,new R.bA("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.r+" "+$.J+"s in time to stop them.    ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
T.m1.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Doll",H.a([$.mt,$.ax,$.aq,$.Q],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Puppet",H.a([$.X,$.aq,$.Q,$.a_,$.b9],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.tE,$.Q],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.L,$.Q,$.aB],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Shades",H.a([$.am,$.b7,$.Q],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.eg,$.K)
q.i(0,$.ei,$.k)
q.i(0,$.bV,$.m)
p=$.n
o="The "+p+", guided by a "+$.r+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.A
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.ci+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.i(0,new R.R("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.W(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=$.n
p="The "+j+" finds a Violent "
l=$.r
p=p+l+". A Magical Talking "
k=$.ad
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.A
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.R("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.W(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.ur(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h=this.f
h.i(0,new X.F(s,q,null),$.aj)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.cv,$.k)
s.i(0,$.iv,$.k)
s.i(0,$.f2,$.m)
s.i(0,$.c0,$.k)
s.i(0,$.cw,$.m)
s.i(0,$.dt,$.K)
p=$.n
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ad
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.A
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.ci+". The "+p+" is victorious. "
s.i(0,new R.R("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.W(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j="Now that the "+$.A+" has been defeated, a Copy "
p=$.n
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.r
j=j+k+"s "
l=$.J
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.f4+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a6("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.e5(),!1,!1,new Y.c1("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.A
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.R("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.W(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.es(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h.i(0,new X.F(q,s,null),$.aj)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.iu,$.k)
t.i(0,$.cw,$.k)
t.i(0,$.lK,$.k)
t.i(0,$.eY,$.m)
t.i(0,$.hc,$.k)
t.i(0,$.cB,$.m)
t.i(0,$.ei,$.K)
r=$.n
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.r
t.i(0,new R.R("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.J+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aK+" laws put in place by "+$.A+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.n
p="The "+r+" finds a weeping Broken Hearted "
q=$.r
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aK
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.J
t.i(0,new R.a6("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hH(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
q=$.n
m="The "+q+"  and the "
r=$.eu
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.A
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.R("Flushed Shipping Dungeon",!1,[new U.b(m),new U.W(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.z(C.q)+".",n)],H.a([],i),R.et(),!1,!1,new Y.iA(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ah)
n=$.n
r="The "+n+"  and the "
q=$.eu
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.A
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.R("Pitched Shipping Dungeon",!1,[new U.b(r),new U.W(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.z(C.q)+".",m)],H.a([],i),R.et(),!1,!1,new Y.jE(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ah)
h.i(0,new X.F(s,t,null),$.aC)}}
B.m2.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Family Ashes",H.a([$.aH,$.ap,$.N,$.aE,$.bW],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a_,$.L,$.N,$.aE,$.mq],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Grooming Guide",H.a([$.au,$.N,$.ai],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Powered Attorney",H.a([$.vU,$.N,$.ml,$.mq],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Executer's Ax",H.a([$.tr,$.N,$.av,$.mq],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.ce,$.m)
r=$.A
q="With the death of the "+r+", it now falls to the "
p=$.n
o=[U.b]
t.i(0,new R.a6("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.r+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
r="The "+$.A+" has released the frogs into the "
p=$.n
t.i(0,new R.bA("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.J+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
V.m3.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Hippo",H.a([$.aJ,$.b8,$.Q],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Ranting",H.a([$.ts,$.aJ,$.f9],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Vent",H.a([$.E,$.vT],s),null,!1,null)
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Confusion","Ranting","Cold","Quiet"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.dI,$.K)
t.i(0,$.d1,$.m)
t.i(0,$.tc,$.m)
t.i(0,$.h9,$.m)
r=$.n
q="The "+r+" hears the screaming voice of the "
p=$.A
q=q+p+", and when they walk into a consort village, a "
o=$.r
q=q+o+" "
n=$.J
q=q+n+"s about how loud and annoying the "+p+" is."
n="The "+r+" sees another "+o+". The "+o+" also "+n+"s about how loud the "+p+" is."
o="The noise finally gets to The "+r+", and they vow to slay the "+p+"."
m="The "+r+" steps into the "+p+"'s lair, The "+r+" demands the noise to stop, so they challenge their Denizen to a duel. "
l="The "+p+" is defeated, and the noise finally stops."
t.i(0,new R.R("Stop the Screamening",!1,[new U.b(q),new U.b(n),new U.b(o),new U.W(m,"The "+r+" is defeated, and the "+p+" screeches more.",l)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.F(s,t,null),$.aj)}}
X.m5.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Wand",H.a([$.X,$.Q,$.a2,$.b8],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Angel Feather",H.a([$.b8,$.bz,$.Q,$.b2,$.a9,$.a_,$.a2],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bP,$.tC,$.Q,$.a2,$.b6,$.b8],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Candle",H.a([$.b8,$.b2,$.Q,$.ap],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aA,$.b2,$.Q,$.b8],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.ta,$.k)
q.i(0,$.cB,$.m)
q.i(0,$.b0,$.k)
q.i(0,$.cd,$.k)
p=$.n
o="The "+p+" is just minding their own business when they see a wizened "
n=$.r
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.J+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.A
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ad
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.EZ
i=[U.b]
q.i(0,new R.R("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(k,p,j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.F(s,q,null),$.aj)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.k)
s.i(0,$.it,$.m)
s.i(0,$.d2,$.k)
p=$.n
o="The "+p+"  is approached by a Crafty "
m=$.r
o=o+m+" who offers them a magical "
l=$.ad
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.A
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.R("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.aj)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.du,$.K)
t.i(0,$.cC,$.k)
t.i(0,$.cd,$.k)
r=$.n
q="The "+r+" finds a grey town of despondant "
p=$.r
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.A
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ad
t.i(0,new R.R("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.W("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.n
o="The "+r+" discovers a group of "
p=$.r
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.A
t.i(0,new R.R("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.W("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.hH(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n.i(0,new X.F(s,t,null),$.aj)}}
X.ma.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Footstick",H.a([$.dg,$.N,$.jm,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Cheating Guide",H.a([$.au,$.N,$.hm,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of Shogun",H.a([$.P,$.N,$.e2,$.mp,$.b5],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Macrobots",H.a([$.tL,$.N,$.ml],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cD,$.k)
t.i(0,$.d2,$.k)
t.i(0,$.ds,$.k)
t.i(0,$.df,$.k)
t.i(0,$.ef,$.k)
t.i(0,$.dI,$.k)
t.i(0,$.hb,$.m)
r=$.n
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.r
o=[U.b]
t.i(0,new R.a0("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.us(),!1,!1,new Y.dO("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.A
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.n
n=q+" tries to manually separate the turtles by catching them with a net and "+$.ci+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.J
t.i(0,new R.R("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.W(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wJ(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
q=$.n
t.i(0,new R.a0("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dO("Rewards/no_reward.png",null),1,null,null),$.B)
q="A wizened "+$.r+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.n
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.A
t.i(0,new R.R("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
m=$.n
t.i(0,new R.R("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.A+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
m="A wizened "+$.r+" tells the "
r=$.n
t.i(0,new R.a6("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
r="A "+$.r+" that is also a SHOGUN minion tells the "
m=$.n
t.i(0,new R.a6("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wK(),!1,!1,new Y.c1("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
m=$.n
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a6("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.K)
n=$.A
m="The "+n+" explains um. What? Where did the "
q=$.n
t.i(0,new R.bA("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.aj)}}
Q.mb.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Yardstick",H.a([$.dg,$.N,$.jm,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURB Hacking Guide",H.a([$.au,$.N,$.hm,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Body Pillow of Hussie",H.a([$.P,$.N,$.e2,$.mp,$.b5],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t}}
Q.me.prototype={
b3:function(a){var t=0,s=P.bp(),r,q,p
var $async$b3=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:q=W.vK(null,a,null)
p=new W.eI(q,"load",!1,[W.T])
t=3
return P.ct(p.gae(p),$async$b3)
case 3:r=q
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b3,s)},
$asdp:function(){return[W.f7]},
$asc7:function(){return[W.f7,P.bh]}}
Q.nH.prototype={
aS:function(a){return"image/png"},
R:function(a,b){var t=0,s=P.bp(),r,q=this,p,o,n
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.ct(q.cH(b),$async$R)
case 3:p=n.vK(null,d,null)
o=new W.eI(p,"load",!1,[W.T])
t=4
return P.ct(o.gae(o),$async$R)
case 4:r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)}}
Q.nE.prototype={
aS:function(a){return"image/png"},
R:function(a,b){var t=0,s=P.bp()
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:throw H.l("Read NYI")
return P.bs(null,s)}})
return P.bt($async$R,s)},
$asdp:function(){return[Q.jD]},
$asc7:function(){return[Q.jD,P.bh]}}
B.hj.prototype={
E:function(){var t,s
t=Q.H(null,null,A.a1)
s=A.i("Perfectly Generic Object",H.a([],[G.Y]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.k)
q.i(0,$.be,$.K)
q.i(0,$.dL,$.k)
q.i(0,$.c0,$.m)
q.i(0,$.e_,$.K)
p=$.n
o="The "+p+" learns that all of the local "
n=$.r
m=[U.b]
q.i(0,new R.a0("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.f_,$.k)
s.i(0,$.eh,$.K)
s.i(0,$.ej,$.m)
s.i(0,$.cR,$.k)
s.i(0,$.ce,$.K)
p=$.n
o="The "+p+" learns that all of the local "
l=$.r
s.i(0,new R.a0("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.be,$.K)
t.i(0,$.c6,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.r
t.i(0,new R.a0("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=$.n
r="The "+p+" learns that all of the local "
q=$.r
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.J
t.i(0,new R.a0("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.uq(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
n.i(0,new X.F(s,t,null),$.aC)},
C:function(a){return this.ch},
gJ:function(a){return this.ch}}
A.a1.prototype={
aB:function(a,b){var t=b.gbz()-this.gbz()
if(t>0)t=1
else if(t<0)t=-1
return C.d.bA(t)},
gh5:function(){var t,s,r,q,p,o
t=H.a([],[P.C])
s=new A.hI(null,null)
s.c8(this.f.a)
if(this.r===0)return t
r=P.d4(G.yU(this.f),!0,G.Y)
C.b.d4(r,new A.mx())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bT)(r),++p){o=r[p]
if(!(o instanceof G.af||o.gdY().length===0))t.push(" "+Y.GW(s.ei(o.gdY())))}return t},
gbz:function(){var t,s,r
for(t=this.f,s=new P.dw(t,t.r,null,null,[null]),s.c=t.e,r=0;s.G();)r+=s.d.gbz()
return r},
gfW:function(){var t=this.f
return new H.hV(t,new A.mw(),[H.O(t,0)])},
ghf:function(){var t,s,r,q,p
for(t=this.gh5(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bT)(t),++q)r+=t[q]+" "
return r+this.d},
C:function(a){return this.ghf()},
M:function(a,b,c,d,e){var t,s,r
t=P.u1(b,null)
this.f=t
if(t.a===0)t.h(0,$.f9)
s=P.u1(this.gfW(),null)
for(t=new P.dw(s,s.r,null,null,[null]),t.c=s.e;t.G();){r=t.d
this.f.bo(0,r.geK())
this.f.ag(0,r)}$.$get$wp().push(this)},
$isbF:1,
$asbF:function(){return[A.a1]}}
A.mx.prototype={
$2:function(a,b){return a.gef()-C.a.bA(b.gef())},
$S:function(){return{func:1,args:[G.Y,G.Y]}}}
A.mw.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.Y]}}}
Z.mE.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Juice Box",H.a([$.L,$.Q,$.b8,$.aI],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Shogun Body Pillow",H.a([$.e2,$.b5,$.Q],s),null,!1,null)
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.dI,$.ah)
t.i(0,$.cB,$.m)
t.i(0,$.bV,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.cd,$.k)
r=$.n
q="The "+r+" sees a floating sentient "
p=$.ad
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.r+" notices it, and starts "+$.J+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.A
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.b]
t.i(0,new R.R("Talk to your Juice entity",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.n
r="The "+p+" is greeted by a young adolescent "
m=$.r
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.A
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.J
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.i(0,new R.R("Be The Wingman",!1,[new U.b(r),new U.b(l),new U.b(n),new U.W(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=$.n
m="The "+j+" arrives to find a consort city in total ruins! A nearby "
q=$.r
m=m+q+" informs them that "
p=$.A
m=m+p+" has somehow grown themselves to massive proportions and is wrecking havock all over the city. The "+j+" offers to help take care of it, but the "+q+" informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."
o="Inside the bunker, the "+j+" is greeted by another "+q+" in a scientist\u2019s robe. He explains to them that they have been working diligently on a giant "+q+" mech that would be able to take "+p+" down, and that preparations are almost complete. The "+j+" agrees to pilot the mech to stop the Denizen."
n="Sitting inside the controls of the giant "+q+" robot, the "+j+" finds themselves going up to "+p+" and punching them square in the face! "+p+" quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny "+q+"s watch in awe."
l="With one well-timed ROBO-PUNCH, the "+j+" deals the finishing blow to "+p+", as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The "+j+" hops out of the mech as they and "+p+" prepare to fight each other in their true sizes."
q="The "+j+" has defeated their denizen! The "+q+"s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success."
t.i(0,new R.R("Pilot The Mech",!1,[new U.b(m),new U.b(o),new U.b(n),new U.W(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.F(s,t,null),$.aj)}}
N.mF.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Gavel",H.a([$.X,$.tB],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Caution Tape",H.a([$.aA,$.bf],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.P,$.ax],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Mystery Novel",H.a([$.L,$.au],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bO,$.ao,$.bl],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.L,$.au,$.am],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Handcuffs",H.a([$.aH,$.E,$.bf],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.h7,$.K)
q.i(0,$.c5,$.m)
q.i(0,$.cC,$.K)
p=$.n
o="The "+p+" finds an elaborate courtroom full of "+$.J+"ing "
n=$.r
m=[U.b]
q.i(0,new R.a0("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ad+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.k)
s.i(0,$.dt,$.m)
s.i(0,$.cR,$.m)
p=$.n
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.r
l=o+l+" yells 'Stop that thief' in betwen "+$.J+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ad+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.EV
s.i(0,new R.a0("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.c5,$.k)
t.i(0,$.ce,$.m)
t.i(0,$.d_,$.K)
t.i(0,$.ek,$.m)
t.i(0,$.eg,$.m)
t.i(0,$.f0,$.m)
t.i(0,$.iw,$.m)
r=$.n
q="The "+r+" finds a crowd of "
p=$.J
q=q+p+"ing "
o=$.r
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.F7
t.i(0,new R.a0("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.aC)}}
S.mH.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Shining Armor",H.a([$.aH,$.ms,$.N,$.fa],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Excalibur",H.a([$.a_,$.ms,$.N,$.aZ,$.av,$.fb],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Noble Steed",H.a([$.E,$.N,$.bi,$.aq],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aH,$.fa,$.N,$.ms],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.lI,$.k)
t.i(0,$.dK,$.k)
t.i(0,$.e0,$.k)
t.i(0,$.f0,$.k)
t.i(0,$.h7,$.m)
r="The "+$.A+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.J+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.A
r="Now that the "+q+" is defeated, the "
o=$.r
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.n
t.i(0,new R.a6("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.aK
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.A
n=n+q+". A Learned "+$.r+" explains that it can only be defeated by the Legendary "
r=$.ad
n=n+r+" Blade. The "
m=$.n
t.i(0,new R.a6("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
r="The volcanos of the land are weirdly active after the defeat of the "+$.A+". One begins to erupt near a "
m=$.r
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.J+"s, but not really doing anything to evacuate or save anyone. The "
o=$.n
t.i(0,new R.a6("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Q.mI.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Dream Diary",H.a([$.L,$.au,$.Q],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aA,$.bk,$.ab,$.Q,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aA,$.bk,$.Q],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.ef,$.m)
q.i(0,$.ds,$.k)
q.i(0,$.b0,$.m)
q.i(0,$.iy,$.m)
p=$.r
o="A "+p+" child tugs on the "
n=$.n
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ad
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.A
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.J+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wy
k=[U.b]
q.i(0,new R.R("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.W(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=this.f
l.i(0,new X.F(s,q,null),$.aj)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.ce,$.m)
s.i(0,$.ds,$.k)
s.i(0,$.d2,$.m)
s.i(0,$.cd,$.m)
s.i(0,$.dI,$.m)
s.i(0,$.cv,$.k)
p=$.n
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.r
n=n+m+"s are even starting to snigger and "
j=$.J
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.A
s.i(0,new R.R("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.W("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.F(q,s,null),$.aj)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.d1,$.k)
t.i(0,$.h9,$.m)
t.i(0,$.b0,$.m)
t.i(0,$.cd,$.k)
t.i(0,$.dI,$.k)
t.i(0,$.ds,$.m)
r=$.n
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.A
t.i(0,new R.R("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aK+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.r+" is "+$.J+"ing in reverse. Another is in a "+$.ad+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.W("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.F(s,t,null),$.aj)}}
K.mK.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Creeping Vine",H.a([$.X,$.Q,$.b3,$.aq],s),null,!1,"Sentient Plant Tentacles")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Lollipop",H.a([$.tu,$.Q,$.aY],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Golem",H.a([$.aH,$.aw,$.Q,$.aq],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bW,$.Q,$.aY],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.b7,$.Q,$.aY,$.a_,$.a2],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Homunculus",H.a([$.bi,$.Q,$.aq],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.c6,$.k)
q.i(0,$.be,$.k)
q.i(0,$.h8,$.K)
q.i(0,$.b0,$.m)
q.i(0,$.lL,$.m)
q.i(0,$.cD,$.K)
p=$.n
o="The "+p+" finds a village of compliant "
n=$.r
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.J+"ing in panic. Don't upset "
m=$.A
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.i(0,new R.R("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.W(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.F(s,q,null),$.aj)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.k)
s.i(0,$.cw,$.k)
s.i(0,$.cD,$.K)
s.i(0,$.b0,$.m)
o=$.n
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.r
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.A
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.R("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.W(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.aj)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.d0,$.k)
t.i(0,$.be,$.K)
t.i(0,$.dL,$.k)
t.i(0,$.c0,$.m)
t.i(0,$.e_,$.m)
t.i(0,$.ir,$.m)
r="Drawn by wailing and "+$.J+"ing, the "
q=$.n
r=r+q+" enters a rotting "
o=$.r
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.A
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.R("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.W(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.aj)}}
G.mL.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("FAQ",H.a([$.a7,$.Q,$.Z,$.bX],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aA,$.Q,$.b2,$.a7,$.bX],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.Q,$.b2,$.bX,$.a_,$.tv],s),null,!1,"D13")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.w2,$.Q,$.ab],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.wb,$.Q],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.b3,$.Q,$.b2,$.bX],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("8-Ball",H.a([$.b7,$.Q,$.aq],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.lG,$.k)
q.i(0,$.ef,$.m)
q.i(0,$.dJ,$.k)
q.i(0,$.ei,$.k)
p=$.n
o="The "+p+" is searching for the lair of "
n=$.A
o=o+n+" when some local "
m=$.r
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.b]
q.i(0,new R.R("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.W(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.n
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.J+"ing "+$.r+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.A
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.R("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.W(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.f
m.i(0,new X.F(s,q,null),$.aj)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.m)
s.i(0,$.b0,$.m)
s.i(0,$.du,$.k)
s.i(0,$.lF,$.k)
s.i(0,$.eh,$.k)
s.i(0,$.it,$.k)
p=$.n
o="The "+p+" walks into a "
n=$.r
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ad
o=o+l+", but "
k=$.A
o=o+k+" has hoarded all of the planets "
j=$.aK
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.J+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.R("The Candlestick Taker",!1,[new U.b(l),new U.b(o),new U.b(h),new U.W(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.ur(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.n
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.r
j=j+k+" explains that the "
h=$.A
s.i(0,new R.R("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.b("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.J+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.W("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,s,null),$.aj)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.ha,$.m)
q.i(0,$.be,$.m)
q.i(0,$.f1,$.k)
q.i(0,$.b0,$.m)
q.i(0,$.cC,$.k)
p="Now that the "+$.A+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.n
p=p+o+" sets up a wiki and settles in to help the "
n=$.r
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.f4+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a6("Moderate the Wiki",!1,[new U.b(p),new U.b(n),new U.b(o)],H.a([],i),R.e5(),!1,!1,new Y.c1("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
l="Now that the "+$.A+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.n
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.r
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.f4+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a6("Create the Wiki",!1,[new U.b(l),new U.b(n),new U.b(o)],H.a([],i),R.es(),!1,!1,new Y.c1("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.r
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.n
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.A
q.i(0,new R.R("Shed the Light",!1,[new U.b(o),new U.b(p),new U.b(l),new U.W(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,q,null),$.aj)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.dJ,$.k)
t.i(0,$.lG,$.k)
t.i(0,$.ei,$.m)
t.i(0,$.cB,$.m)
t.i(0,$.te,$.m)
t.i(0,$.c0,$.K)
t.i(0,$.e0,$.K)
t.i(0,$.bV,$.m)
t.i(0,$.cv,$.K)
t.i(0,$.be,$.m)
t.i(0,$.cA,$.k)
s=$.n
r="The "+s+" is approached by a Fast Talking "
p=$.r
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.ad
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.J+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.A
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.R("Be the Star",!1,[new U.b(r),new U.b(n),new U.b(p),new U.W(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o="After the "+$.A+", the "
s=$.n
o=o+s+" is disappointed to learn that barely any of the "
l=$.r
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.f4+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a6("Be the Biggest Star in Paradox Space",!1,[new U.b(o),new U.b(l),new U.b(s)],H.a([],i),R.e5(),!1,!1,new Y.c1("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.F(q,t,null),$.aj)}}
Z.mZ.prototype={
E:function(){var t,s,r,q
t=this.I
s=[G.Y]
r=A.i("Dream Bubbles Book",H.a([$.L,$.ai,$.au,$.vW],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),[H.O(t,0)]))
t=Q.H(null,null,A.a1)
r=A.i("Uno Reverse Card",H.a([$.mm,$.jm,$.ai],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Lord's Cape",H.a([$.P,$.N,$.ai],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.hm,$.N,$.ai],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a_,$.L,$.N,$.bq,$.au],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d_,$.K)
q.i(0,$.ek,$.K)
q.i(0,$.c0,$.K)
q.i(0,$.cR,$.m)
p="The "+$.A+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.n
p=p+o+" comands that the "
n=$.r
m=[U.b]
q.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.J+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
o="As soon as the "+$.A+" is defeated, the "
n=$.r
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.n
q.i(0,new R.a6("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.x
p.i(0,new X.F(s,q,null),$.bL)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.vy,$.k)
t.i(0,$.cd,$.k)
t.i(0,$.be,$.k)
t.i(0,$.b0,$.m)
s="The "+$.A+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.n
s=s+r+" comands that the "
o=$.r
t.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.J+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
r="As soon as the "+$.A+" is defeated, the "
o=$.r
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.n
t.i(0,new R.a6("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",this.I,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,t,null),$.bL)}}
S.n0.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Alternate Costume",H.a([$.P,$.N,$.a2,$.a_,$.ak],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Cape",H.a([$.P,$.N,$.a2],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Staff",H.a([$.X,$.N,$.ab,$.a2,$.dg],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Walking Broom",H.a([$.jj,$.X,$.N,$.aq,$.a2,$.dg],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.eZ,$.k)
t.i(0,$.f0,$.m)
t.i(0,$.ce,$.k)
t.i(0,$.ej,$.m)
t.i(0,$.d0,$.K)
r="The "+$.A+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.n
t.i(0,new R.a6("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.y(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q=$.n
r="The "+q+" is feeling quite pleased with their victory over the "+$.A+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aK
t.i(0,new R.a6("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="Now that the "+$.A+" has been defeated, the "
o=$.r
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.n
q=q+r+"'s help in planning the brand new city of "
n=$.aK
t.i(0,new R.a6("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.J+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.n1.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Maiden's Breath",H.a([$.b3,$.N,$.ax],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Feather Duster",H.a([$.X,$.N,$.dg,$.bz],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.ax,$.aH,$.E,$.N,$.a_,$.fa,$.vN],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.L,$.N,$.a9,$.au],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.df,$.k)
t.i(0,$.c6,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.be,$.m)
t.i(0,$.du,$.m)
t.i(0,$.cv,$.m)
r="The "+$.A+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.n
r=r+q+" asks local  "
p=$.r
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.b]
t.i(0,new R.bA("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.n
o="The "+q+" has adopted a local "
p=$.r
t.i(0,new R.a6("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.J+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.A+". ")],H.a([],n),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
V.n9.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Puzzle Box",H.a([$.X,$.Q,$.a2],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a7,$.Q,$.E],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.E,$.Q],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.E,$.Q,$.a7,$.Z],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Janus Bust",H.a([$.aH,$.jk,$.aw,$.ai,$.Q,$.a_,$.a7],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cd,$.m)
q.i(0,$.ef,$.K)
q.i(0,$.cC,$.K)
p=$.n
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.r
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.A
k=[U.b]
q.i(0,new R.R("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fl(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.n
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.r+" explains that at the end of the Labrinth is the "
l=$.A
q.i(0,new R.R("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.W("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.F(s,q,null),$.aj)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.h7,$.K)
s.i(0,$.c5,$.m)
s.i(0,$.cC,$.K)
s.i(0,$.cd,$.K)
p=$.A
o="The "+p+" has commited a staggering amount of crimes against the local "+$.r+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.n
s.i(0,new R.R("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.W("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(q,s,null),$.aj)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.ix,$.k)
t.i(0,$.be,$.m)
t.i(0,$.f1,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.cC,$.k)
r=$.n
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.A
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ad+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.R("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.aj)}}
E.na.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Feather Pen",H.a([$.E,$.N,$.ai,$.bz],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.wa,$.N,$.jk,$.ab,$.a_],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Book of Poetry",H.a([$.L,$.N,$.ai,$.au],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.df,$.k)
t.i(0,$.c6,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.be,$.m)
t.i(0,$.du,$.m)
t.i(0,$.cv,$.m)
r="The "+$.A+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.n
r=r+q+" asks the "
p=$.r
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.b]
t.i(0,new R.bA("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.m)
q="You'd think after the dramatic defeat of the "+$.A+" the "
o=$.r
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.n
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ad
t.i(0,new R.a6("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
F.nb.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Piano",H.a([$.ab,$.X,$.a9,$.ai],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Flute",H.a([$.E,$.a9],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Microphone",H.a([$.aJ,$.a7],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Violin",H.a([$.X,$.a9],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Sheet Music",H.a([$.L,$.a9],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aA,$.a9,$.a7,$.aJ,$.am],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.aA,$.a9,$.a7,$.am],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Guitar",H.a([$.X,$.a9],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cB,$.ah)
q.i(0,$.te,$.k)
q.i(0,$.ei,$.k)
q.i(0,$.du,$.m)
q.i(0,$.b0,$.m)
q.i(0,$.lE,$.m)
p=$.n
o="The "+p+" meets a wise old "+$.r+" who tells that the "+$.A+" can only be awoken by the Legendary Hero playing the "
n=$.aK
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ad
k=[U.b]
q.i(0,new R.a0("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.n
n="The "+p+" finds an empty, trashed "
l=$.aK
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ad+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.J+"ing "+$.r+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.F0
q.i(0,new R.a0("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.th,$.ah)
s.i(0,$.dt,$.m)
s.i(0,$.cR,$.m)
s.i(0,$.du,$.k)
s.i(0,$.lE,$.ah)
o=$.n
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aK
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.A
s.i(0,new R.a0("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.ad+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.h8,$.ah)
t.i(0,$.bV,$.m)
t.i(0,$.dL,$.m)
r=$.n
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.r
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.J
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aK+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.a0("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,t,null),$.aC)}}
Y.no.prototype={
R:function(a,b){var t=0,s=P.bp(),r,q=this,p,o
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:t=3
return P.ct(A.ht("scripts/Rendering/threed/three.min.js",!1),$async$R)
case 3:t=4
return P.ct(Q.o6(),$async$R)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.b4(p)
o.eH(p,P.ws(["",$.$get$vp()],P.C,S.hw))
o.eG(p,!1)
q.b=p}J.vc(p,b)
r=J.vc(q.b,b)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asez:function(){return[S.fj]},
$asc7:function(){return[S.fj,P.C]}}
V.nw.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Shorts",H.a([$.P,$.N,$.f8,$.a_],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aA,$.N,$.am],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Steroids",H.a([$.ao,$.N,$.a2],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.lI,$.k)
t.i(0,$.cD,$.m)
t.i(0,$.hd,$.m)
t.i(0,$.lK,$.m)
t.i(0,$.df,$.m)
t.i(0,$.be,$.m)
t.i(0,$.e_,$.m)
t.i(0,$.eh,$.m)
t.i(0,$.ti,$.m)
t.i(0,$.ir,$.m)
t.i(0,$.lF,$.m)
r="The "+$.A+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.n
r=r+q+" asks the "
p=$.r
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.b]
t.i(0,new R.bA("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.n
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.r+" named Professor "
p=$.J
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ad
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.A
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.R("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.W(k,"The "+q+" whited out...",m)],H.a([],n),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m="Now that the "+$.A+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.n
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.r
t.i(0,new R.a6("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aK+" buffs. With a deafening "+$.J+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.y(),!1,!1,new Y.ic("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
G.nJ.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Superhero Action Figure",H.a([$.aA,$.am,$.aI],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Action DVD",H.a([$.aA,$.am],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aA,$.bW],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aA,$.b6,$.bl,$.cg],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aA,$.am],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Movie Poster",H.a([$.L,$.am],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.b3,$.am,$.P,$.aq],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.b3,$.b_,$.am,$.P],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Shitty Sword",H.a([$.aI,$.E,$.am,$.fb,$.av,$.bP],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.L,$.am],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.L,$.am],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cv,$.m)
q.i(0,$.cA,$.m)
q.i(0,$.bV,$.k)
q.i(0,$.cD,$.ah)
q.i(0,$.d2,$.ah)
p=$.n
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.r
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aK+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.J+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.F1
l=[U.b]
q.i(0,new R.a0("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.eg,$.m)
s.i(0,$.dt,$.m)
s.i(0,$.cA,$.m)
s.i(0,$.bV,$.m)
s.i(0,$.dK,$.k)
o=$.n
n="The "+o+" runs towards an explosion in a local "
m=$.r
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aK
s.i(0,new R.a0("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.cA,$.m)
t.i(0,$.dJ,$.k)
t.i(0,$.cw,$.k)
t.i(0,$.dK,$.m)
r=$.n
q="The "+r+" gets a job at the "+$.aK+" Cinema. A new movie, The Lonely "
o=$.ad
q=q+o+" is coming out soon, and "
n=$.r
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.J+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.a0("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,t,null),$.aC)}}
N.nP.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Feather'd Cap",H.a([$.P,$.N,$.f8],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Crown",H.a([$.a_,$.tz,$.N,$.f8],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Gunpowder",H.a([$.bo,$.N],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cA,$.m)
t.i(0,$.cd,$.m)
t.i(0,$.dL,$.K)
r="With the closing of the curtain, the "+$.A+" has released the frogs, and yet they are nowhere to be found. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q=$.A
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.n
r=r+o+" to get it back to normal. They organize a team of "
n=$.r
t.i(0,new R.a6("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ad+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.b.prototype={}
U.W.prototype={}
R.nQ.prototype={
C:function(a){return H.z(new H.dT(H.kh(this),null))+": "+this.c},
gJ:function(a){return this.c}}
R.a0.prototype={}
R.R.prototype={}
R.a6.prototype={}
R.bA.prototype={}
E.nR.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Curtain",H.a([$.P,$.Q,$.aI],s),null,!1,"Show Ender")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.E,$.fb,$.aZ,$.Q,$.av,$.b9,$.aI,$.bn,$.aE],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.E,$.aJ,$.a7,$.Q,$.aI],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.aH,$.E,$.aJ,$.bq,$.c9,$.Q,$.aI],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.ao,$.bq,$.ai,$.Q,$.a_,$.aI],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.X,$.Q,$.b9,$.ap,$.bo,$.aI],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.is,$.k)
q.i(0,$.d_,$.k)
q.i(0,$.dt,$.k)
q.i(0,$.d0,$.m)
q.i(0,$.c0,$.m)
q.i(0,$.ce,$.m)
q.i(0,$.c5,$.K)
q.i(0,$.d2,$.m)
q.i(0,$.eg,$.k)
q.i(0,$.iw,$.k)
q.i(0,$.f0,$.k)
q.i(0,$.lJ,$.k)
q.i(0,$.h8,$.m)
q.i(0,$.ek,$.k)
p=$.n
o="The "+p+" is chilling in a "
n=$.r
o=o+n+" village when a bunch of sentient "
m=$.ad
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.A
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.R("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hH(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.r
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.n
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.A
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.R("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.W(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.F(s,q,null),$.aj)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.du,$.k)
s.i(0,$.c0,$.m)
s.i(0,$.c5,$.k)
s.i(0,$.cB,$.k)
s.i(0,$.cv,$.k)
s.i(0,$.cA,$.m)
s.i(0,$.iv,$.K)
s.i(0,$.d_,$.m)
s.i(0,$.cD,$.k)
s.i(0,$.bV,$.k)
s.i(0,$.d2,$.K)
p=$.J
o="The "+p+"ing and capering "
n=$.r
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.n
o=o+m+" to do a stupid "
l=$.aK
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.A
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.R("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.W(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.F(q,s,null),$.aj)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.is,$.k)
t.i(0,$.d2,$.k)
t.i(0,$.c5,$.k)
t.i(0,$.cD,$.m)
t.i(0,$.cv,$.k)
r=$.n
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.r+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.A+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.R("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.F(s,t,null),$.aj)}}
Y.dO.prototype={}
Y.ae.prototype={}
Y.cZ.prototype={}
Y.c1.prototype={
gJ:function(a){return this.c}}
Y.S.prototype={}
Y.ic.prototype={}
Y.bD.prototype={}
Y.cV.prototype={}
Y.kN.prototype={}
Y.bw.prototype={}
Y.jC.prototype={}
Y.iA.prototype={}
Y.jE.prototype={}
N.nW.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Domino Mask",H.a([$.P,$.N,$.f8],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Archery Set",H.a([$.tt,$.N,$.f8,$.tq],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a_,$.aA,$.a7,$.N,$.Z,$.ak],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.c5,$.k)
t.i(0,$.ce,$.m)
t.i(0,$.dK,$.m)
r="The "+$.A+" cannot release the frogs since the corrupt Noble "
q=$.r
r=r+q+"s have hoarded them. The "
p=$.n
o=[U.b]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
p=$.n
q="The "+p+" learns of the extreme injustices of the "
r=$.r
q=q+r+"s who rose to power during the tyranny of "
n=$.A
t.i(0,new R.a6("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Q.nX.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Red Rose",H.a([$.aB,$.ax],s),null,!1,"Seductive Plant")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.aB,$.L],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aB,$.ao],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Candelabra",H.a([$.aB,$.ap],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Head Cannon",H.a([$.aB,$.bo,$.E,$.b_],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.au,$.L,$.aB],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cw,$.k)
q.i(0,$.hd,$.m)
q.i(0,$.eY,$.m)
q.i(0,$.hc,$.k)
q.i(0,$.cB,$.m)
q.i(0,$.iu,$.K)
p=$.n
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.r
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ad+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.i(0,new R.a0("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.cB,$.m)
s.i(0,$.dJ,$.k)
s.i(0,$.hc,$.k)
s.i(0,$.cw,$.m)
s.i(0,$.ei,$.K)
s.i(0,$.iu,$.K)
o=$.r
n="A Romantic "+o+" approaches the "
m=$.n
s.i(0,new R.a0("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.iu,$.k)
t.i(0,$.cw,$.k)
t.i(0,$.eY,$.m)
t.i(0,$.lK,$.k)
t.i(0,$.hc,$.k)
t.i(0,$.cB,$.m)
t.i(0,$.ei,$.K)
r=$.n
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.r
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.J+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.A+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.EY
t.i(0,new R.a0("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.n
r="The "+n+"  and the "
o=$.eu
t.i(0,new R.a0("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.et(),!1,!1,new Y.iA(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ah)
o=$.n
n="The "+o+"  and the "
r=$.eu
t.i(0,new R.a0("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.et(),!1,!1,new Y.jC(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ah)
r=$.n
o="The "+r+"  and the "
n=$.eu
t.i(0,new R.a0("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.et(),!1,!1,new Y.jE(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ah)
p.i(0,new X.F(s,t,null),$.aC)}}
V.nY.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Arrow",H.a([$.aZ,$.X,$.tq],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Bow",H.a([$.X,$.ab,$.f9],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Yondu",H.a([$.aI,$.Q],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Empathy",H.a([$.Q,$.vQ,$.aI],s),null,!1,null)
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Empathy","Arrows","Emotions","Bows"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.b0,$.m)
t.i(0,$.d1,$.K)
t.i(0,$.bV,$.m)
t.i(0,$.cd,$.K)
r=$.n
q="The "+r+" is walking around their land, when suddenly an arrow starts floating, The "+r+" figures out they can control it with their mind."
p="The "+r+" is practicing in using their arrows, they see an imp walk close to them. The "+r+" tries to strife it, on their second attempt, The "+r+" is able to defeat the imp with their arrow, they have improved in their abilities."
o="The "+r+" has been practicing with their arrow abilities. They can now use many arrows in a giant wave to bring pain upon their enemies. The "+r+" is now able to take on their denizen."
n="The "+r+" walks into the "
m=$.A
n=n+m+"'s lair, arrows flying behind them."
m="The "+m+" is slain, it looks like it was accupunctured."
t.i(0,new R.R("Be the Yondu",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"The power of the arrows was not enough to help The "+r+"...",m)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.F(s,t,null),$.aj)}}
T.hK.prototype={
E:function(){var t,s
t=Q.H(null,null,A.a1)
s=A.i("Perfectly Generic Object",H.a([],[G.Y]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.k)
q.i(0,$.be,$.K)
q.i(0,$.dL,$.k)
q.i(0,$.c0,$.m)
q.i(0,$.e_,$.K)
p=$.n
o="The "+p+" learns that all of the local "
n=$.r
m=[U.b]
q.i(0,new R.a6("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.x
n.i(0,new X.F(s,q,null),$.bL)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.f_,$.k)
s.i(0,$.eh,$.K)
s.i(0,$.ej,$.m)
s.i(0,$.cR,$.k)
s.i(0,$.ce,$.K)
p=$.n
o="The "+p+" learns that all of the local "
l=$.r
s.i(0,new R.a6("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.n
l="The "+p+" learns that all of the local "
o=$.r
s.i(0,new R.a6("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.eu+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.J+"ing in amazement. The factory is saved! ")],H.a([],m),R.et(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.ah)
n.i(0,new X.F(q,s,null),$.bL)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.b0,$.k)
t.i(0,$.be,$.K)
t.i(0,$.c6,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.r
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.J
t.i(0,new R.a0("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.uq(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.K)
l=$.n
p="The "+l+" learns that all of the local "
r=$.r
t.i(0,new R.a6("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.F(s,t,null),$.bL)},
C:function(a){return this.r},
a0:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.iq("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.i9]),H.a([],[M.h6]))
this.E()
this.F()
t=this.Q
if($.$get$o_().V(0,t))H.bb("Duplicate class id for "+this.C(0)+": "+t+" is already registered for "+J.cJ($.$get$o_().n(0,t))+".")
$.$get$o_().i(0,t,this)},
gJ:function(a){return this.r}}
E.o0.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Sage's Robe",H.a([$.P,$.N,$.b5,$.Z,$.a2,$.a_],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.L,$.N,$.au,$.Z],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Guru Pillow",H.a([$.P,$.N,$.e2,$.Z],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.ha,$.m)
t.i(0,$.be,$.m)
t.i(0,$.f1,$.k)
t.i(0,$.b0,$.K)
t.i(0,$.cC,$.k)
r="The "+$.A+" has blocked access to the books for the duration. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.r+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q="Now that the "+$.A+" is defeated, it is time to begin recovery efforts. The "
r=$.r
q=q+r+"s ask the "
o=$.n
t.i(0,new R.a6("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.J+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
Y.o1.prototype={}
K.o2.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Uno Reverse Card",H.a([$.mm,$.Q,$.aI],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("JR Body Pillow",H.a([$.e2,$.b5,$.Q],s),null,!1,null)
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.is,$.k)
q.i(0,$.d_,$.k)
q.i(0,$.dt,$.k)
q.i(0,$.d0,$.m)
q.i(0,$.c0,$.m)
q.i(0,$.ce,$.m)
q.i(0,$.c5,$.K)
q.i(0,$.d2,$.m)
q.i(0,$.eg,$.k)
q.i(0,$.iw,$.k)
q.i(0,$.f0,$.k)
q.i(0,$.lJ,$.k)
q.i(0,$.h8,$.m)
q.i(0,$.ek,$.k)
p=$.n
o="The "+p+" is chilling in a "
n=$.r
o=o+n+" village when a bunch of sentient "
m=$.ad
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.A
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.R("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hH(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.r
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.n
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.A
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.R("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.W(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.F(s,q,null),$.aj)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.du,$.k)
s.i(0,$.c0,$.m)
s.i(0,$.c5,$.k)
s.i(0,$.cB,$.k)
s.i(0,$.cv,$.k)
s.i(0,$.cA,$.m)
s.i(0,$.iv,$.K)
s.i(0,$.d_,$.m)
s.i(0,$.cD,$.k)
s.i(0,$.bV,$.k)
s.i(0,$.d2,$.K)
p=$.J
o="The "+p+"ing and capering "
n=$.r
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.n
o=o+m+" to do a stupid "
l=$.aK
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.A
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.R("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.W(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.F(q,s,null),$.aj)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.is,$.k)
t.i(0,$.d2,$.k)
t.i(0,$.c5,$.k)
t.i(0,$.cD,$.m)
t.i(0,$.cv,$.k)
r=$.n
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.r+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.A+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.R("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.F(s,t,null),$.aj)}}
Y.o3.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Walking Stick",H.a([$.X,$.N,$.dg],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.P,$.N,$.vX,$.Z,$.a_],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Map",H.a([$.L,$.N,$.Z],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.E,$.N,$.Z,$.a2],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p
t=[P.C]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.df,$.k)
t.i(0,$.c6,$.k)
t.i(0,$.be,$.k)
t.i(0,$.bV,$.K)
t.i(0,$.b0,$.K)
r="Now that the "+$.A+" has been defeated, the planet has really opened up. The "
q=$.n
p=[U.b]
t.i(0,new R.a6("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.r+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.A+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.n
t.i(0,new R.bA("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.r+" "+$.J+"s in time to stop them.   ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.bL)}}
L.o4.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Scroll",H.a([$.L,$.N,$.Z],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Ink Pot",H.a([$.b7,$.N,$.ak,$.Z],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Blank Book",H.a([$.L,$.N,$.au,$.Z,$.ak,$.a_],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.lE,$.k)
t.i(0,$.be,$.k)
t.i(0,$.cC,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.cd,$.m)
r="The "+$.A+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q="Now that the "+$.A+" has been taken care of, the "
r=$.n
q=q+r+" discovers a large library of "
o=$.r
t.i(0,new R.a6("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
S.o7.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Cueball",H.a([$.el,$.mt,$.N,$.ab,$.aq,$.a_],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Crystal Ball",H.a([$.el,$.vV,$.N,$.b2],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Binoculars",H.a([$.b7,$.N,$.E],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Blindfold",H.a([$.vP,$.N,$.b5],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.vz,$.k)
t.i(0,$.h9,$.k)
t.i(0,$.tc,$.k)
t.i(0,$.cD,$.m)
r="Now that the "+$.A+" has been defeated, the land is really starting to open up. The "
q=$.n
r=r+q+" finds a tunnel filled with Blind "
p=$.r
o=[U.b]
t.i(0,new R.a6("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.y(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.A+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.n
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.r+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
p=$.n
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.r
t.i(0,new R.a6("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.y(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
r="A group of underlings are still making trouble, even after the defeat of the "+$.A+". The "
p=$.n
r=r+p+" begins planting rumors of a huge "
q=$.ad
t.i(0,new R.a6("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.y(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
T.c3.prototype={}
Y.oe.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Meddler's Guide",H.a([$.au,$.N,$.L,$.bq,$.a_,$.aY],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.b7,$.N,$.aY],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=$.N
r=A.i("Cloud in a Bottle",H.a([r,r,$.bk],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a2,$.N,$.b2,$.ax,$.L],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.be,$.m)
t.i(0,$.df,$.k)
t.i(0,$.cD,$.m)
t.i(0,$.b0,$.m)
t.i(0,$.c6,$.k)
r="The defeat of the "+$.A+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
q="Now that the "+$.A+" has been taken care of, the "
r=$.n
q=q+r+" finds a long line of "
o=$.r
t.i(0,new R.a6("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
N.of.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Fiduspawn Plush",H.a([$.cg,$.P,$.b5],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Teddy Bear",H.a([$.cg,$.P,$.b5],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Dice",H.a([$.tx,$.aA],s),null,!1,"D113")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Pigeon",H.a([$.bz,$.aq,$.bi,$.ba,$.bn,$.tG],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Cat Ears",H.a([$.P,$.b5,$.cg],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Religious Text",H.a([$.au,$.L],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Psychology Book",H.a([$.au,$.L],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Therapy Couch",H.a([$.b5,$.P],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("FLARP Manual",H.a([$.au,$.L,$.Z],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d1,$.K)
q.i(0,$.b0,$.m)
q.i(0,$.cd,$.k)
q.i(0,$.cC,$.m)
p=$.n
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.r
m=[U.b]
q.i(0,new R.a0("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aK+" or "+$.ad+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.J+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.d1,$.K)
s.i(0,$.b0,$.k)
s.i(0,$.cd,$.k)
s.i(0,$.ta,$.k)
s.i(0,$.cB,$.k)
s.i(0,$.th,$.k)
s.i(0,$.cC,$.m)
o=$.n
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.J
n=n+l+"ing "
k=$.r
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aK
s.i(0,new R.a0("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.cR,$.K)
t.i(0,$.dJ,$.k)
t.i(0,$.c6,$.k)
t.i(0,$.dK,$.k)
t.i(0,$.h7,$.k)
r=$.n
q="The "+r+" wanders into an entire crowd of "
o=$.r
t.i(0,new R.a0("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.J+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,t,null),$.aC)}}
M.bB.prototype={}
N.oh.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Frog Statue",H.a([$.aH,$.aw,$.Q],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.P,$.Q],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.c2,$.Z,$.a7,$.Q],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.E,$.b7,$.Z,$.Q],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.L,$.Q,$.tA,$.a_],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=$.n
s=[P.C]
r=H.a(["Wherever the "+t+" goes, they find a "+$.r+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.J+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.A+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.n
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.r+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.r+" tells the "
p=$.n
t=t+p+" that they must negotiate with "
o=$.A
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.n
p="The "+o+" meets with "
t=$.A
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cD,$.K)
t.i(0,$.td,$.k)
s=[U.b]
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
p=$.n
t.i(0,new R.bA("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.r+"s 'help' by "+$.J+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.y(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
this.f.i(0,new X.F(o,t,null),$.G4)}}
U.ag.prototype={
gJ:function(a){return this.d+"kind"},
$isbF:1,
$asbF:function(){return[A.a1]}}
K.cF.prototype={
gJ:function(a){return this.a}}
M.ol.prototype={
aS:function(a){return"application/octet-stream"},
R:function(a6,a7){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$R=P.bu(function(a8,a9){if(a8===1)return P.br(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.de(null,0)
q.a=J.dX(a7,0)
for(p=0,o="";p<6;++p)o+=H.hG(q.a6(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.l("Invalid header: "+n)
m=q.a6(8)
l=9+m*6
o=8*m
k=q.a6(o)
j=q.a6(o)
i=q.a6(o)
h=q.a6(o)
g=q.a6(o)
f=q.a6(o)
o=P.D
e=P.C
d=P.bY(o,e)
c=new O.cT(k,j,null,null,null,null,null,null,d,P.bY(e,o))
c.x=new Uint8Array(H.cz(k*j))
b=q.a6(8)
for(o=[o],p=0;p<b;++p){a=q.a6(8)
a0=q.a6(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.a6(8)
if(a2>=e){r=H.w(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.oL(a1,0,null))}a4=q.a6(8)
a5=$.$get$wO().n(0,a4)
if(a5==null)throw H.l("Sprite decoding error: Encoding id "+a4+" not supported.")
c.i1(i,h,g,a5.c.$4(a7,l,g*f,c))
c.hO()
r=c
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdp:function(){return[O.cT]},
$asc7:function(){return[O.cT,P.bh]}}
R.oP.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Meddler's Guide",H.a([$.au,$.N,$.L,$.bq,$.a_,$.aY],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.b7,$.N,$.aY],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=$.N
r=A.i("Cloud in a Bottle",H.a([r,r,$.bk],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a2,$.N,$.b2,$.ax,$.L],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cd,$.k)
t.i(0,$.b0,$.k)
t.i(0,$.df,$.m)
t.i(0,$.f1,$.m)
t.i(0,$.t9,$.m)
t.i(0,$.e_,$.m)
t.i(0,$.ir,$.m)
t.i(0,$.tg,$.m)
r=$.n
q="The "+r+" decides to take a break after defeating "+$.A+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.r
o=[U.b]
t.i(0,new R.a6("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.J+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.us(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
r=$.r
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.n
t.i(0,new R.a6("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.r
q="The "+r+"s are so stressed after all that shit with the "+$.A+". They are yelling and "+$.J+" at each other over the slightest of insults. The "
p=$.n
t.i(0,new R.a6("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.A+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.n
p=p+r+" purifies the pools "
q=$.r
t.i(0,new R.bA("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
r="The defeat of the "+$.A+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.r
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.n
t.i(0,new R.a6("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aK+". Huh. Okay then.")],H.a([],o),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
L.oR.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Lightning",H.a([$.aJ,$.b8,$.Q],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice",H.a([$.bl,$.w4,$.f9],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Taserface",H.a([$.aI,$.aJ],s),null,!1,null)
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Taser",H.a([$.aJ,$.Q,$.aI],s),null,!1,null)
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Rebellion","Fear","Fighting","Turmoil"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.dI,$.K)
t.i(0,$.bV,$.k)
t.i(0,$.is,$.m)
t.i(0,$.d_,$.m)
r=$.n
q="The "+r+" is walking around on their land, when a "
p=$.r
q=q+p+" walks up to them, and tells them about "
o=$.A
q=q+o+" and how it's destroying the land. The "+r+" doesn't care."
p="The "+r+" sees another "+p+". The "+p+" starts "+$.J+"ing about how urgent it is to fight "+o+". Again The "+r+" doesn't care in the slightest."
n="The "+r+" is told about the great treasure that the "+o+" holds, The "+r+" decides to travel to the "+o+"'s lair. To fight the "+o+"."
m="The "+r+" thunders into the "+o+"'s lair, and they demand a prize."
o="The "+o+" is defeated, The "+r+" takes the grist without a second glance."
t.i(0,new R.R("Rebel Against Your Land",!1,[new U.b(q),new U.b(p),new U.b(n),new U.W(m,"The "+r+" is defeated, maybe they should've played the game the right way.",o)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.F(s,t,null),$.aj)}}
D.oT.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Robot",H.a([$.a7,$.E,$.aq,$.Z],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Circuit Board",H.a([$.a7,$.E],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.a7,$.L],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a7,$.L,$.aE,$.au],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("3-D Printer",H.a([$.aA,$.a7,$.E],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.w_,$.E],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Wrench",H.a([$.tN,$.E,$.ab],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Computer",H.a([$.a7,$.E],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.ix,$.m)
q.i(0,$.eZ,$.k)
q.i(0,$.f_,$.k)
q.i(0,$.ce,$.K)
p=$.n
o="The "+p+" learns from their "
n=$.r
o=o+n+"s about the great "
m=$.aK
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.A+" destroyed it. "
o="The "+p+" searches for the "
l=$.ad
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.F5
p=[U.b]
q.i(0,new R.a0("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.y(),!1,!1,new Y.cV("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=$.n
m="The "+l+" is approached by a "
o=$.r
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.J
q.i(0,new R.a0("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.A+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ad+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.fl(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.f_,$.k)
s.i(0,$.eh,$.K)
s.i(0,$.ej,$.m)
s.i(0,$.cR,$.k)
s.i(0,$.ce,$.K)
o=$.n
n="The "+o+" learns that all of the local "
l=$.r
s.i(0,new R.a0("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.n
l="The "+o+" finds two groups of "
n=$.r
l=l+n+"s screaming and "
k=$.J
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.ad
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.a0("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.e5(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,s,null),$.aj)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.ix,$.K)
t.i(0,$.eZ,$.k)
t.i(0,$.f_,$.k)
t.i(0,$.ce,$.K)
r=$.n
q="The "+r+" learns from a mysterious "+$.r+" in a black trenchcoat about a great "
o=$.aK
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.A
t.i(0,new R.a0("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,t,null),$.aC)}}
V.oV.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Lighter",H.a([$.E,$.ap],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Siberia Poster",H.a([$.L,$.bl],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.L,$.bl,$.c2],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Doomsday Device",H.a([$.E,$.aE,$.c2,$.b8,$.bn],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.L,$.w5],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Watch",H.a([$.E,$.bg,$.b8],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.E,$.bg,$.b8],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.P,$.f8,$.b8],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bO,$.bg],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.E,$.tH,$.b_,$.b8],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.E,$.tK,$.b_,$.b8],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("AK-47",H.a([$.E,$.tD,$.b_,$.b8],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("IED",H.a([$.mo,$.av,$.E,$.bo,$.b8],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.L,$.bq,$.au],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.c9,$.E,$.aJ,$.bq],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Matches",H.a([$.X,$.ap],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.cA,$.m)
q.i(0,$.dJ,$.k)
q.i(0,$.e0,$.k)
q.i(0,$.f0,$.k)
q.i(0,$.lI,$.k)
q.i(0,$.dK,$.m)
p=$.n
o=[U.b]
q.i(0,new R.a0("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.y(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.cA,$.m)
s.i(0,$.dJ,$.k)
s.i(0,$.cw,$.k)
s.i(0,$.dK,$.m)
n=$.n
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.r
s.i(0,new R.a0("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ad+" underling. Tremble at the fearsome "+$.aK+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.y(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d0,$.k)
q.i(0,$.be,$.K)
q.i(0,$.dL,$.k)
q.i(0,$.c0,$.m)
q.i(0,$.e_,$.K)
q.i(0,$.d_,$.K)
n=$.n
m="The "+n+" learns that all of the local "
l=$.r
q.i(0,new R.a0("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.c5,$.k)
t.i(0,$.d_,$.K)
t.i(0,$.eg,$.k)
t.i(0,$.iw,$.k)
t.i(0,$.ce,$.m)
t.i(0,$.ek,$.m)
s=$.n
r="The "+s+" finds a crowd of "
n=$.J
r=r+n+"ing "
m=$.r
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aK+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.a0("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.F(q,t,null),$.aC)}}
X.F.prototype={
C:function(a){return"Theme: "+H.z(this.a)}}
U.p3.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Lockpick",H.a([$.E,$.N,$.ak,$.aZ,$.a_],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.P,$.N,$.ak],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Dagger",H.a([$.E,$.N,$.aZ,$.av,$.tw],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.c5,$.k)
t.i(0,$.dt,$.m)
t.i(0,$.bV,$.m)
t.i(0,$.cR,$.m)
r="The "+$.A+" cannot release the frogs since the corrupt "
q=$.r
r=r+q+" Cops have confiscated them. The "
p=$.n
o=[U.b]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
p=$.n
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.A+"'s layer and slated to be returned to the "
r=$.r
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.J+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.i(0,new R.a6("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.r
p="A weeping "+r+" approaches the "
n=$.n
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.A
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aK+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.J+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.i(0,new R.a6("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.A
n="Now that the "+r+" has been defeated, the "
p=$.r
n=n+p+"s have recovered their precious "
q=$.ad
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.n
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.J
l=n+l+"worth, the disaffected Heir to the "+$.aK+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.i(0,new R.a6("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
N.p4.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Grandfather Clock",H.a([$.X,$.ai,$.bg,$.Q],s),null,!1,"Ticking Tower of Time")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.w9,$.Q,$.a9],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aH,$.bi,$.Q,$.ba,$.b9,$.aE],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.E,$.Q,$.a9,$.ai],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.E,$.Q,$.a9,$.a_,$.am],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Metronome",H.a([$.E,$.Q,$.a9],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.vB,$.ah)
q.i(0,$.ce,$.m)
q.i(0,$.cR,$.m)
q.i(0,$.ej,$.k)
p=$.A
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.n
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x2
l=[U.b]
q.i(0,new R.a6("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.es(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.n
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.r+"s, they set out to fix the "
m=$.ad
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.A
q.i(0,new R.R("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.W("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.F(s,q,null),$.aj)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.h8,$.k)
s.i(0,$.e0,$.K)
s.i(0,$.ce,$.k)
p=$.n
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.r+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.A
s.i(0,new R.R("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.W(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.F(q,s,null),$.aj)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.c6,$.k)
t.i(0,$.b0,$.m)
t.i(0,$.cd,$.k)
t.i(0,$.df,$.k)
r=$.A
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.ad
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.n
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.r+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.R("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.W(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hH(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
k=$.A
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ad
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.n
t.i(0,new R.R("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.r+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.W("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.es(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
r="With the defeat of the "+$.A+", "
k=$.n
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.r
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aK
t.i(0,new R.a6("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.es(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.r
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.n
t.i(0,new R.R("Move Forwards, Never Stop",!1,[new U.b(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.J+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.W("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.A+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.F(s,t,null),$.aj)}}
G.Y.prototype={
C:function(a){var t=this.b
if(t.length!==0)return C.b.gae(t)
return"NULL TRAIT"},
gef:function(){return this.a},
gdY:function(){return this.b},
gbz:function(){return this.c}}
G.aX.prototype={}
G.af.prototype={}
G.bH.prototype={}
G.d.prototype={
ghJ:function(){return this.e.length},
gbz:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bT)(t),++q)r+=t[q].c
return r},
aB:function(a,b){return C.a.bA(b.ghJ()-this.e.length)},
eq:function(a){return C.b.hb(this.e,a.gfY(a))},
$isbF:1,
$asbF:function(){return[G.d]},
gJ:function(a){return this.d},
geK:function(){return this.e}}
G.mu.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.Y]}}}
Q.pt.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Cardboard Box",H.a([$.L,$.Q,$.ak],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Hole Punch",H.a([$.E,$.Q,$.ak],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bo,$.Q,$.ak,$.mo],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Tribal Mask",H.a([$.ba,$.Q,$.ak,$.b9,$.bQ],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Opera Mask",H.a([$.aA,$.Q,$.ak,$.ai],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.Q,$.a_,$.tA,$.ak,$.b7],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d1,$.k)
q.i(0,$.lH,$.k)
q.i(0,$.hb,$.k)
q.i(0,$.h9,$.k)
p=$.A
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.n
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.r
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x2
l=[U.b]
q.i(0,new R.a6("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.n
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.A
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.R("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.W(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i=this.f
i.i(0,new X.F(s,q,null),$.aj)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.d1,$.m)
s.i(0,$.lH,$.m)
s.i(0,$.hb,$.m)
s.i(0,$.c5,$.k)
p=$.n
o="Even with the victory of the "+p+" over the villainous "
n=$.A
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.r+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ad
s.i(0,new R.a6("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fl(),!1,!1,new Y.c1("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
s.i(0,new R.R("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.J+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.W("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.A+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.r+"s.")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.F(q,s,null),$.aj)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.d1,$.k)
t.i(0,$.lH,$.k)
t.i(0,$.hb,$.k)
r=$.n
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.A+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.R("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.W(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.F(s,t,null),$.aj)}}
E.pu.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Yardstick",H.a([$.dg,$.N,$.jm,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.au,$.N,$.hm,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.P,$.N,$.e2,$.mp,$.b5],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Nanobots",H.a([$.tL,$.N,$.ml],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cD,$.k)
t.i(0,$.d2,$.k)
t.i(0,$.ds,$.k)
t.i(0,$.df,$.k)
t.i(0,$.ef,$.k)
t.i(0,$.dI,$.k)
t.i(0,$.hb,$.m)
r=$.n
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.r
o=[U.b]
t.i(0,new R.a0("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.us(),!1,!1,new Y.dO("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.A
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.n
n=q+" tries to manually separate the turtles by catching them with a net and "+$.ci+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.J
t.i(0,new R.R("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.W(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wJ(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
q=$.n
t.i(0,new R.a0("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dO("Rewards/no_reward.png",null),1,null,null),$.B)
q="A wizened "+$.r+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.n
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.A
t.i(0,new R.R("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
m=$.n
t.i(0,new R.R("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.A+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ah)
m="A wizened "+$.r+" tells the "
r=$.n
t.i(0,new R.a6("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
r="A "+$.r+" that is also a SHOGUN minion tells the "
m=$.n
t.i(0,new R.a6("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wK(),!1,!1,new Y.c1("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
m=$.n
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a6("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.K)
n=$.A
m="The "+n+" explains um. What? Where did the "
q=$.n
t.i(0,new R.bA("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.r+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
this.x.i(0,new X.F(s,t,null),$.aj)}}
M.py.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Cauldron",H.a([$.w8,$.N,$.a2],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Flying Broom",H.a([$.jj,$.dg,$.N,$.X,$.a2],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Warped Mirror",H.a([$.tE,$.N,$.a2,$.ak,$.a_],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.c0,$.m)
t.i(0,$.hd,$.m)
t.i(0,$.d0,$.m)
t.i(0,$.cR,$.m)
t.i(0,$.cv,$.m)
t.i(0,$.td,$.m)
r=$.A
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.r
q=q+p+" consorts. It's up to the "
o=$.n
n=[U.b]
t.i(0,new R.bA("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ah)
o="Even with the defeat of the "+$.A+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.r
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aK
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.n
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.go
t.i(0,new R.a6("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.B)
q="A Mysterious "+$.r+" approaches the "
p=$.n
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aK
q=q+r+" was discovered amongst the "+$.A+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.i(0,new R.a6("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.r
p="A young "+r+" approaches the "
m=$.n
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aK
t.i(0,new R.a6("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ad+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.J+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.y(),!1,!1,new Y.ae("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.F(s,t,null),$.bL)}}
U.pz.prototype={
R:function(a5,a6){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$R=P.bu(function(a7,a8){if(a7===1)return P.br(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.dY(a6,$.$get$xd())
if(0>=p.length){r=H.w(p,0)
t=1
break}if(J.yo(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.w(p,0)
t=1
break}throw H.l("Invalid WordList file header: '"+H.z(p[0])+"'")}o=P.C
n=H.a([],[o])
m=P.bY(o,B.eE)
q.a=null
l=P.bY(o,o)
for(k=P.U,j=B.cW,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cI()
""+i
H.z(g)
f.toString
f=J.dY(g,$.$get$xb())
if(0>=f.length){r=H.w(f,0)
t=1
break $async$outer}g=f[0]
f=J.bd(g)
if(f.gY(g)===!0){$.$get$cI().toString
continue}if(f.ah(g,$.$get$xc())){$.$get$cI().toString
continue}if(C.c.ah(g,"@")){e=C.c.ai(g,1)
$.$get$cI().toString
n.push(e)}else if(C.c.ah(g,"?")){f=C.c.ai(g,1)
f=$.$get$hQ().aQ(0,f)
f=H.dh(f,B.i7(),H.as(f,"o",0),null)
d=P.d4(f,!0,H.as(f,"o",0))
if(d.length<2)$.$get$cI().b2(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cI()
H.z(c)
H.z(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$xe()
a=f.ck(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.w(f,1)
t=1
break $async$outer}a0=J.c_(f[1])
a1=C.c.ai(g,a0)
if(a1.length===0)continue
f=J.ar(a0)
if(f.S(a0,0)){a1=C.c.er(a1)
$.$get$cI().toString
f=P.bY(o,o)
a2=new B.eE(P.bY(o,k),f,a1,!1,null,null)
a2.ca(null,null,j)
q.a=a2
f.bo(0,l)
m.i(0,a1,q.a)}else if(f.S(a0,$.xf))if(C.c.ah(a1,"?")){a1=C.c.ai(a1,1)
f=$.$get$hQ().aQ(0,a1)
f=H.dh(f,B.i7(),H.as(f,"o",0),null)
d=P.d4(f,!0,H.as(f,"o",0))
f=$.$get$cI()
f.toString
if(d.length<2)f.b2(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.kl(d[0],$.$get$fq(),"")
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}b=J.kl(d[1],$.$get$fq(),"")
f=$.$get$cI()
H.z(q.a.e)
f.toString
q.a.d.i(0,c,b)}}else if(C.c.ah(a1,"@")){e=C.c.ai(a1,1)
$.$get$cI().toString
f=$.$get$hQ().aQ(0,a1)
f=H.dh(f,B.i7(),H.as(f,"o",0),null)
d=P.d4(f,!0,H.as(f,"o",0))
a3=d.length>1?H.wG(d[1],new U.pA(q,d)):1
q.a.c.i(0,C.c.cV(e,$.$get$fq(),""),a3)}else{$.$get$cI().toString
f=$.$get$hQ().aQ(0,g)
f=H.dh(f,B.i7(),H.as(f,"o",0),null)
d=P.d4(f,!0,H.as(f,"o",0))
a3=d.length>1?H.wG(d[1],new U.pB(q,d)):1
if(0>=d.length){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bj(J.kl(d[0],$.$get$fq(),""))
h=new B.cW(null)
a4=P.bY(o,o)
h.a=a4
a4.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.f(h,f.k(h,J.rO(a3)),[H.as(f,"cy",0)]))}else if(f.S(a0,$.xf*2)){$.$get$cI().toString
f=$.$get$hQ().aQ(0,g)
f=H.dh(f,B.i7(),H.as(f,"o",0),null)
d=P.d4(f,!0,H.as(f,"o",0))
f=d.length
if(f!==2)$.$get$cI().b2(C.h,"Invalid variant for "+H.z(h.bk(0))+" in "+H.z(q.a.e))
else{if(0>=f){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bj(J.kl(d[0],$.$get$fq(),""))
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}a4=C.c.cV(U.G7(d[1]),$.$get$fq(),"")
h.a.i(0,f,a4)}}}}}r=new B.hW(n,m)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asez:function(){return[B.hW]},
$asc7:function(){return[B.hW,P.C]}}
U.pA.prototype={
$1:function(a){var t,s,r
t=$.$get$cI()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid include weight '"+H.z(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.b2(C.i,r+H.z(s[0])+"' in list '"+H.z(this.a.a.e)+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.C]}}}
U.pB.prototype={
$1:function(a){var t,s,r
t=$.$get$cI()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid weight '"+H.z(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.b2(C.i,r+H.z(s[0])+"' in list '"+H.z(this.a.a.e)+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.C]}}}
F.pD.prototype={
E:function(){var t,s,r,q
t=Q.H(null,null,A.a1)
s=[G.Y]
r=A.i("Make a World Book",H.a([$.L,$.ai,$.au],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Quill Pen",H.a([$.b5,$.P,$.mr],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Book On Writing",H.a([$.au,$.L,$.Z],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("FLARP Manual",H.a([$.au,$.L,$.Z],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Script",H.a([$.au,$.L],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Pen",H.a([$.E,$.Z,$.mr,$.ai],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.au,$.L,$.E],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.f(r,t.k(r,C.a.l(1)),q))
s=A.i("Half Written Novel",H.a([$.au,$.L],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.f(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.u(0,null,null,null,null,null,0,r)
q.i(0,$.d1,$.k)
q.i(0,$.cC,$.k)
q.i(0,$.be,$.m)
q.i(0,$.b0,$.m)
q.i(0,$.ha,$.m)
p=$.n
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.r+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.i(0,new R.a0("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.F(s,q,null),$.aC)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.u(0,null,null,null,null,null,0,r)
s.i(0,$.dK,$.m)
s.i(0,$.cA,$.m)
s.i(0,$.cw,$.m)
s.i(0,$.be,$.m)
p=$.r
o="An Excited "+p+" rushes up to the "
n=$.n
s.i(0,new R.a0("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.J+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.y(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(q,s,null),$.aC)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.u(0,null,null,null,null,null,0,r)
t.i(0,$.cA,$.m)
t.i(0,$.dJ,$.k)
t.i(0,$.cw,$.k)
t.i(0,$.dK,$.m)
t.i(0,$.ds,$.k)
r=$.n
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.r
t.i(0,new R.a0("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.y(),!1,!1,new Y.cZ("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.F(s,t,null),$.aC)}}
B.pI.prototype={
aS:function(a){return"application/x-tar"},
R:function(a,b){var t=0,s=P.bp(),r,q,p
var $async$R=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=$.$get$xg()
p=J.v5(b)
q.toString
r=q.h2(T.tp(p,0,null,0),!1)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$R,s)},
$asdp:function(){return[T.fH]},
$asc7:function(){return[T.fH,P.bh]}}
A.fP.prototype={}
B.dq.prototype={
cC:function(a){if(a)this.b=(this.b|C.a.ar(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.O+=H.hG(this.b)
this.b=0}},
aj:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.ar(1,t)
if(typeof a!=="number")return a.aK()
this.cC((a&s)>>>0>0)}},
fQ:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.aw(1,t-s)
if(typeof a!=="number")return a.aK()
this.cC((a&r)>>>0>0)}},
bS:function(a){var t,s
a=J.e9(a,1)
t=C.d.d8(Math.log(H.ke(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cC(!1)
this.fQ(a,t+1)},
b5:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.O
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.a8(r)
q+=r
p=r}else p=0
r=H.cz(q)
o=new Uint8Array(r)
if(t){n=H.cN(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.w(o,m)
o[m]=l}}t=s.O
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a4(k,m)
if(s<0||s>=r)return H.w(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.w(o,t)
o[t]=s}return o.buffer}}
B.de.prototype={
cr:function(a){var t,s,r,q
t=C.f.al(a/8)
s=C.a.bG(a,8)
r=this.a.getUint8(t)
q=C.a.aw(1,s)
if(typeof r!=="number")return r.aK()
return(r&q)>>>0>0},
a6:function(a){var t,s,r
if(a>32)throw H.l(P.dC(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cr(this.b);++this.b
if(r)t=(t|C.a.ar(1,s))>>>0}return t},
hN:function(a){var t,s,r,q
if(a>32)throw H.l(P.dC(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cr(this.b);++this.b
if(q)s=(s|C.a.aw(1,t-r))>>>0}return s},
c1:function(){var t,s,r
for(t=0;!0;){s=this.cr(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.hN(t+1)-1}}
A.dF.prototype={
C:function(a){return"rgb("+H.z(this.b)+", "+H.z(this.c)+", "+H.z(this.d)+", "+H.z(this.a)+")"},
hX:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.aw()
s=this.c
if(typeof s!=="number")return s.aw()
r=this.d
if(typeof r!=="number")return r.aw()
q=this.a
if(typeof q!=="number")return H.a8(q)
return(t<<24|s<<16|r<<8|q)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.dF){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.c
s=b.c
if(t==null?s==null:t===s){t=this.d
s=b.d
if(t==null?s==null:t===s){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t}return!1},
ga5:function(a){return this.hX(!0)},
W:function(a,b){var t,s,r,q,p,o,n,m
t=J.ar(b)
if(!!t.$isdF){t=this.b
s=b.b
if(typeof t!=="number")return t.W()
if(typeof s!=="number")return H.a8(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.W()
if(typeof q!=="number")return H.a8(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.W()
if(typeof o!=="number")return H.a8(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.W()
if(typeof m!=="number")return H.a8(m)
return A.fS(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.am()
s=this.c
if(typeof s!=="number")return s.am()
r=this.d
if(typeof r!=="number")return r.am()
q=this.a
if(typeof q!=="number")return q.am()
return A.rX(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.W()
s=this.c
if(typeof s!=="number")return s.W()
r=this.d
if(typeof r!=="number")return r.W()
return A.fS(t+b,s+b,r+b,this.a)}throw H.l("Cannot add ["+H.z(t.ga9(b))+" "+H.z(b)+"] to a Colour. Only Colour, double and int are valid.")},
au:function(a,b){var t,s,r,q,p,o,n,m
t=J.ar(b)
if(!!t.$isdF){t=this.b
if(typeof t!=="number")return t.am()
s=b.b
if(typeof s!=="number")return s.am()
r=this.c
if(typeof r!=="number")return r.am()
q=b.c
if(typeof q!=="number")return q.am()
p=this.d
if(typeof p!=="number")return p.am()
o=b.d
if(typeof o!=="number")return o.am()
n=this.a
if(typeof n!=="number")return n.am()
m=b.a
if(typeof m!=="number")return m.am()
return A.rX(t/255*(s/255),r/255*(q/255),p/255*(o/255),n/255*(m/255))}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.am()
s=this.c
if(typeof s!=="number")return s.am()
r=this.d
if(typeof r!=="number")return r.am()
q=this.a
if(typeof q!=="number")return q.am()
return A.rX(t/255*b,s/255*b,r/255*b,q/255)}throw H.l("Cannot multiply a Colour by ["+H.z(t.ga9(b))+" "+H.z(b)+"]. Only Colour, double and int are valid.")},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.l("Colour index out of range: "+H.z(b))},
i:function(a,b,c){var t,s
t=J.dy(b)
if(t.a3(b,0)||t.aG(b,3))throw H.l("Colour index out of range: "+H.z(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.S(b,0)){this.b=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,2)){this.d=C.a.ab(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ab(c,0,255)
else if(t.S(b,0)){this.b=C.a.ab(J.kk(J.rI(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ab(J.kk(J.rI(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kf(c)
if(t.S(b,2)){this.d=C.a.ab(J.kk(s.au(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ab(J.kk(s.au(c,255)),0,255)}},
eQ:function(a,b,c,d){this.b=C.d.ab(C.d.ab(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ab(C.d.ab(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ab(C.d.ab(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ab(J.rJ(d,0,255),0,255)}}
A.rg.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.C]}}}
A.mV.prototype={
$1:function(a){return this.a.ej(a)},
$S:function(){return{func:1,args:[,]}}}
A.mT.prototype={
$1:function(a){this.a.R(0,a).b4(this.b.ghI())},
$S:function(){return{func:1,args:[,]}}}
A.mU.prototype={
$1:function(a){this.a.fX(0)},
$S:function(){return{func:1,args:[P.p]}}}
A.mW.prototype={
$1:function(a){return this.a.aC(0,this.b)},
$S:function(){return{func:1,args:[W.T]}}}
F.hu.prototype={
C:function(a){return this.b}}
F.fe.prototype={
b2:function(a,b){F.EU(a).$1("("+this.c+")["+H.z(C.b.gbc(a.b.split(".")))+"]: "+H.z(b))},
cI:function(a,b){this.b2(C.h,b)},
bX:function(a){},
gJ:function(a){return this.c}}
F.u_.prototype={}
O.rC.prototype={
$1:function(a){return H.z(a.aV(1))+" = "+H.z(a.aV(2))+C.c.au("../",this.a)},
$S:function(){return{func:1,args:[P.d5]}}}
O.rD.prototype={
$0:function(){var t=document
J.va(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.t,null)
t=H.eM(t.querySelector("#voidButton"),"$iseT")
t.toString
W.e8(t,"click",new O.rB(),!1,W.ub)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.eN("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.rB.prototype={
$1:function(a){return O.Hv()},
$S:function(){return{func:1,args:[W.T]}}}
R.he.prototype={}
R.ui.prototype={}
R.uh.prototype={}
A.nx.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.V(0,b)?t.n(0,b):$.$get$ug()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.V(0,b)?t.n(0,b):$.$get$ug()}throw H.l(P.dC(b,"'name' should be a String name or int id only",null))},
gT:function(a){var t=this.a
t=t.gc5(t)
return new H.jt(null,J.cQ(t.a),t.b,[H.O(t,0),H.O(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.V(0,b))this.ag(0,b)
s=this.fz()
if(typeof s!=="number")return s.av()
if(s>=256)throw H.l(P.dC(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
ag:function(a,b){var t,s,r
t=this.a
if(!t.V(0,b))return
s=this.c
r=s.n(0,b)
t.ag(0,b)
this.b.ag(0,r)
s.ag(0,b)
this.d.ag(0,r)},
fz:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.V(0,s))return s;++s}}}
A.jB.prototype={
$aso:function(){return[A.dF]},
$iso:1}
Q.jD.prototype={}
A.hI.prototype={
by:function(a){if(a===0)return 0
return this.fA(a)},
hz:function(){return this.by(4294967295)},
fA:function(a){var t,s
t=this.a
if(a>4294967295){s=t.c0()
this.b=C.d.bA(s*4294967295)
return C.d.al(s*a)}else{s=t.by(a)
this.b=s
return s}},
c8:function(a){var t=a==null
this.a=t?C.K:P.Gl(a)
if(!t)this.b=J.e9(a,1)},
hG:function(a,b){var t=J.bd(a)
if(t.gY(a))return
if(!!t.$iscy)return t.at(a,this.a.c0())
return t.U(a,this.by(t.gm(a)))},
ei:function(a){return this.hG(a,!0)}}
Y.dN.prototype={
cA:function(a){var t,s
if(this.b!=null)throw H.l("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bj(0,$.an,null,t)
this.c.push(new P.dV(s,t))
return s},
ej:function(a){var t,s,r
if(this.b!=null)throw H.l("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bT)(t),++r)t[r].aC(0,this.b)
C.b.sm(t,0)}}
V.lj.prototype={
$4:function(a,b,c,d){return V.zg(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.D,P.bh,P.bh,O.cT]}}}
V.li.prototype={
$4:function(a,b,c,d){return V.zf(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bh,P.D,P.D,O.cT]}}}
V.lh.prototype={
$4:function(a,b,c,d){return V.zc(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.D,P.bh,P.bh,O.cT]}}}
V.lg.prototype={
$4:function(a,b,c,d){return V.zb(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bh,P.D,P.D,O.cT]}}}
O.cT.prototype={
hO:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.a
s=this.b
for(r=this.x,q=r.length,p=s,o=t,n=-1,m=-1,l=null,k=0;k<t;++k)for(j=0;j<s;++j){l=j*t+k
if(l>=q)return H.w(r,l)
if(r[l]!==0){if(k<o)o=k
else if(k>n)n=k
if(j<p)p=j
else if(j>m)m=j}}i=Math.max(0,n-o+1)
h=Math.max(0,m-p+1)
this.c=o
this.d=p
this.e=i
this.f=h},
i1:function(a,b,c,d){var t,s,r,q,p
t=J.b4(d)
s=0
while(!0){r=t.geb(d)
if(typeof r!=="number")return H.a8(r)
if(!(s<r))break
q=(C.a.d8(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.w(r,q)
r[q]=p;++s}}}
D.oo.prototype={
$1:function(a){return a.ghH()},
$S:function(){return{func:1,args:[D.cG]}}}
D.cG.prototype={
C:function(a){return this.a},
gJ:function(a){return this.a},
ghH:function(){return this.d}}
D.jV.prototype={}
D.nU.prototype={}
B.oW.prototype={
hF:function(a,b){var t
if(!this.d)this.hM()
t=this.ds(a)
if(t==null){$.$get$fr().bX("Root list '"+a+"' not found")
return"["+a+"]"}return this.dH(J.ye(t,b),P.bY(P.C,B.cW))},
hE:function(a){return this.hF(a,null)},
bh:function(a){var t=0,s=P.bp(),r,q=this,p,o,n,m
var $async$bh=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=q.a
if(p.ac(0,a)){p=$.$get$fr()
H.z(a)
p.toString
t=1
break}p.h(0,a)
t=3
return P.ct(A.e3("wordlists/"+H.z(a)+".words",!1,!1,null),$async$bh)
case 3:o=c
q.b.bo(0,o.ghv())
p=o.a,n=p.length,m=0
case 4:if(!(m<p.length)){t=6
break}t=7
return P.ct(q.bh(p[m]),$async$bh)
case 7:case 5:p.length===n||(0,H.bT)(p),++m
t=4
break
case 6:q.d=!1
case 1:return P.bs(r,s)}})
return P.bt($async$bh,s)},
hM:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
$.$get$fr().bX("Processing word lists")
this.d=!0
t=this.c
t.ba(0)
for(s=this.b,r=s.gaD(s),r=r.gT(r);r.G();){q=r.gN()
p=B.G8(s.n(0,q))
t.i(0,q,p)
for(o=p.d,n=o.gaD(o),n=n.gT(n),m=[H.as(p,"b1",0)];n.G();){l=n.gN()
for(k=new H.dM(p,p.gm(p),0,null,m);k.G();){j=k.d
if(!j.gbQ().V(0,l)){i=o.n(0,l)
j.a.i(0,l,i)}}}}for(s=t.gaD(t),s=s.gT(s);s.G();){p=t.n(0,s.gN())
p.hL(t)
for(r=new H.dM(p,p.gm(p),0,null,[H.as(p,"b1",0)]),o=p.d;r.G();){h=r.d
for(n=o.gaD(o),n=n.gT(n);n.G();){l=n.gN()
if(!h.gbQ().V(0,l))h.a.i(0,l,o.n(0,l))}for(n=h.gbQ(),n=n.gaD(n),n=n.gT(n);n.G();){g=n.gN()
m=h.a
m.i(0,g,J.rN(m.n(0,g),$.$get$wT(),new B.oY(h)))}}}},
ds:function(a){var t,s
t=this.c
if(!t.V(0,a)){$.$get$fr().bX("List '"+H.z(a)+"' not found")
return}s=t.n(0,a)
return this.e.ei(s)},
dH:function(a,b){return J.rN(a,$.$get$wS(),new B.oX(this,b))}}
B.oY.prototype={
$1:function(a){var t,s
t=a.aV(1)
s=this.a
if(!s.a.V(0,t))return"["+H.z(t)+"]"
return s.a.n(0,t)},
$S:function(){return{func:1,args:[P.d5]}}}
B.oX.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=a.aV(1)
s=$.$get$wU().aQ(0,t)
s=H.dh(s,B.i7(),H.as(s,"o",0),null)
r=P.d4(s,!0,H.as(s,"o",0))
if(0>=r.length)return H.w(r,0)
q=J.dY(r[0],"@")
s=q.length
p=s>1?q[1]:null
o=this.a
if(0>=s)return H.w(q,0)
n=o.ds(q[0])
s=r.length
if(s>1){for(s=this.b,m=n,l=1;k=r.length,l<k;++l){q=J.dY(r[l],"@")
if(0>=q.length)return H.w(q,0)
if(J.bc(q[0],"var")){if(q.length<2)continue
j=q[1]
if(s.V(0,j))m=s.n(0,j)
else s.i(0,j,m)}}s=k}else m=n
if(m==null){if(0>=s)return H.w(r,0)
return"["+H.z(r[0])+"]"}s=J.b4(m)
i=s.at(m,p)
if(i==null){$.$get$fr().bX("Missing variant '"+H.z(p)+"' for word '"+H.z(m)+"', falling back to base")
i=s.bk(m)}return o.dH(i,this.b)},
$S:function(){return{func:1,args:[P.d5]}}}
B.cW.prototype={
at:function(a,b){if(b==null)b="MAIN"
if(this.a.V(0,b))return this.a.n(0,b)
return},
bk:function(a){return this.at(a,null)},
C:function(a){return"[Word: "+H.z(this.bk(0))+"]"},
gbQ:function(){return this.a}}
B.eE.prototype={
C:function(a){return"WordList '"+H.z(this.e)+"': "+this.eN(0)},
ek:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
if(this.f)return
this.f=!0
b=P.a4(null,null,null,B.eE)
b.h(0,this)
for(t=this.c,s=t.gaD(t),s=s.gT(s),r=this.e;s.G();){q=s.gN()
if(a.V(0,q)){p=a.n(0,q)
if(b.ac(0,p)){$.$get$fr().b2(C.i,"Include loop detected in list '"+H.z(r)+"', already visited '"+H.z(p.e)+"', ignoring")
continue}p.ek(a,b)}}for(s=t.gaD(t),s=s.gT(s),r=[H.as(this,"cy",0)];s.G();){q=s.gN()
if(!a.V(0,q))continue
for(o=a.n(0,q).b,n=o.length,m=0;m<o.length;o.length===n||(0,H.bT)(o),++m){l=o[m]
k=J.b4(l)
j=k.gX(l)
k=J.rI(k.gb7(l),t.n(0,q))
C.b.h(this.b,new Q.f(j,this.k(j,J.rO(k)),r))}}},
hL:function(a){return this.ek(a,null)},
$isp:1,
$asp:function(){return[B.cW]},
$asdU:function(){return[B.cW]},
$ashU:function(){return[B.cW]},
$ascy:function(){return[B.cW]},
$aso:function(){return[B.cW]},
$ast:function(){return[B.cW]},
gcL:function(){return this.c},
gh3:function(){return this.d},
gJ:function(a){return this.e}}
B.hW.prototype={
C:function(a){return"[WordListFile: "+this.b.C(0)+" ]"},
gcL:function(){return this.a},
ghv:function(){return this.b}}
S.fj.prototype={}
S.uJ.prototype={}
S.uK.prototype={}
S.uL.prototype={}
S.t5.prototype={}
S.t8.prototype={}
S.rW.prototype={}
S.ut.prototype={}
S.uN.prototype={}
S.uO.prototype={}
S.kK.prototype={}
S.ul.prototype={}
S.uf.prototype={}
S.mM.prototype={}
S.t0.prototype={}
S.rR.prototype={}
S.l2.prototype={}
S.u0.prototype={}
S.l3.prototype={}
S.nz.prototype={}
S.uA.prototype={}
S.ux.prototype={}
S.uB.prototype={}
S.rQ.prototype={}
S.lZ.prototype={}
S.kI.prototype={}
S.rV.prototype={}
S.rU.prototype={}
S.um.prototype={}
S.uC.prototype={}
S.un.prototype={}
S.t7.prototype={}
S.t6.prototype={}
S.uz.prototype={}
S.uy.prototype={}
S.p2.prototype={}
S.uE.prototype={}
S.rY.prototype={}
S.rZ.prototype={}
S.uM.prototype={}
S.hw.prototype={}
S.u6.prototype={}
S.u7.prototype={}
S.u8.prototype={}
S.u9.prototype={}
S.uu.prototype={}
S.uv.prototype={}
S.uw.prototype={}
S.u5.prototype={}
S.uc.prototype={}
S.ud.prototype={}
S.tm.prototype={}
S.tn.prototype={}
S.to.prototype={}
S.ue.prototype={}
S.ua.prototype={}
S.rS.prototype={}
S.uG.prototype={}
S.uH.prototype={}
S.uF.prototype={}
Z.tV.prototype={}
Z.tR.prototype={}
Z.tS.prototype={}
Q.cy.prototype={
at:function(a,b){var t,s,r,q,p,o,n
t=this.d_()
s=J.rJ(b,0,1)*t
for(r=J.cQ(this.gbi()),q=0;r.G();){p=r.gN()
o=J.b4(p)
n=o.gb7(p)
if(typeof n!=="number")return H.a8(n)
q+=n
if(s<=q)return o.gX(p)}return},
d_:function(){var t,s,r
for(t=J.cQ(this.gbi()),s=0;t.G();){r=J.yc(t.gN())
if(typeof r!=="number")return H.a8(r)
s+=r}return s},
k:function(a,b){return b},
C:function(a){return J.cJ(this.gbi())},
ay:function(a,b){return Q.uQ(this,b,H.as(this,"cy",0),null)},
a2:function(a,b){return Q.uP(this,!1,!0,null,H.as(this,"cy",0))},
aq:function(a){return this.a2(a,!0)},
$iso:1,
$aso:null}
Q.dU.prototype={
at:function(a,b){var t,s,r,q,p,o,n,m,l
t=this.d_()
s=J.rJ(b,0,1)*t
for(r=this.b,q=r.length,p=0,o=0;o<r.length;r.length===q||(0,H.bT)(r),++o){n=r[o]
m=J.b4(n)
l=m.gb7(n)
if(typeof l!=="number")return H.a8(l)
p+=l
if(s<=p)return m.gX(n)}return},
gbi:function(){return this.b},
bR:function(a,b,c){C.b.h(this.b,new Q.f(b,this.k(b,J.rO(c)),[H.as(this,"cy",0)]))},
h:function(a,b){return this.bR(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return J.v8(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.w(t,b)
t[b]=new Q.f(c,s,[H.as(this,"cy",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
C:function(a){return P.jn(this.b,"[","]")},
ay:function(a,b){return Q.uQ(this,b,H.as(this,"dU",0),null)},
a2:function(a,b){return Q.uP(this,!1,!0,null,H.as(this,"dU",0))},
aq:function(a){return this.a2(a,!0)},
ca:function(a,b,c){var t,s
this.a=a
t=[[Q.f,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.hU.prototype={$ascy:null,$aso:null,$asp:null,$ast:null,$isp:1,$ist:1,$iso:1}
Q.f.prototype={
C:function(a){return"("+H.z(this.a)+" @ "+H.z(this.b)+")"},
gX:function(a){return this.a},
gb7:function(a){return this.b}}
Q.eG.prototype={
gbi:function(){return this.b},
gT:function(a){var t=new Q.pw(null,[H.as(this,"eG",0)])
t.a=J.cQ(this.b)
return t},
gm:function(a){return J.c_(this.b)},
C:function(a){return J.cJ(this.b)},
ay:function(a,b){return Q.uQ(this,b,H.as(this,"eG",0),null)},
a2:function(a,b){return Q.uP(this,!1,!0,null,H.as(this,"eG",0))},
aq:function(a){return this.a2(a,!0)}}
Q.hT.prototype={$ascy:null,$aso:null,$iso:1}
Q.pw.prototype={
gN:function(){return J.v8(this.a.gN())},
G:function(){return this.a.G()}}
Q.jS.prototype={
$aseG:function(a,b){return[b]},
$ashT:function(a,b){return[b]},
$ascy:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
Q.px.prototype={
$1:function(a){var t=J.b4(a)
return new Q.f(this.c.$1(t.gX(a)),t.gb7(a),[this.b])},
$S:function(){return H.eL(function(a,b){return{func:1,args:[[Q.f,a]]}},this,"jS")}}
J.h.prototype.eL=J.h.prototype.C
J.hp.prototype.eM=J.hp.prototype.C
P.dk.prototype.eO=P.dk.prototype.bI
P.dk.prototype.eP=P.dk.prototype.bH
P.b1.prototype.d7=P.b1.prototype.a7
Q.dU.prototype.eN=Q.dU.prototype.C;(function installTearOffs(){installTearOff(H.fw.prototype,"ght",0,0,0,null,["$0"],["bZ"],1)
installTearOff(H.dx.prototype,"gey",0,0,0,null,["$1"],["az"],11)
installTearOff(H.eH.prototype,"gh6",0,0,0,null,["$1"],["aZ"],11)
installTearOff(H,"xw",1,0,0,null,["$1"],["GM"],8)
installTearOff(P,"GP",1,0,0,null,["$1"],["Gc"],6)
installTearOff(P,"GQ",1,0,0,null,["$1"],["Gd"],6)
installTearOff(P,"GR",1,0,0,null,["$1"],["Ge"],6)
installTearOff(P,"xI",1,0,0,null,["$0"],["GL"],1)
installTearOff(P.jZ.prototype,"gdW",0,0,0,null,["$2","$1"],["cF","bq"],12)
installTearOff(P.bj.prototype,"gbd",0,0,0,null,["$2","$1"],["ao","f8"],12)
var t
installTearOff(t=P.dk.prototype,"gdE",0,0,0,null,["$0"],["bL"],1)
installTearOff(t,"gdF",0,0,0,null,["$0"],["bM"],1)
installTearOff(t=P.hZ.prototype,"gdE",0,0,0,null,["$0"],["bL"],1)
installTearOff(t,"gdF",0,0,0,null,["$0"],["bM"],1)
installTearOff(t,"gfk",0,0,0,null,["$1"],["fl"],function(){return H.eL(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"hZ")})
installTearOff(t,"gfo",0,0,0,null,["$2"],["fp"],14)
installTearOff(t,"gfm",0,0,0,null,["$0"],["fn"],1)
installTearOff(P.k4.prototype,"gfY",0,1,0,null,["$1"],["ac"],29)
installTearOff(P,"H_",1,0,0,null,["$2"],["yV"],30)
installTearOff(P,"H0",1,0,0,null,["$1"],["fD"],4)
installTearOff(t=W.ib.prototype,"gas",0,1,0,null,["$1"],["cI"],4)
installTearOff(t,"gho",0,0,0,null,["$1"],["e8"],4)
installTearOff(t,"ghZ",0,0,0,null,["$1"],["i_"],4)
installTearOff(W.eW.prototype,"gX",0,1,0,null,["$1"],["K"],5)
installTearOff(W.ie.prototype,"gX",0,1,0,null,["$1"],["K"],32)
installTearOff(W.ik.prototype,"gX",0,1,0,null,["$1"],["K"],5)
installTearOff(W.il.prototype,"gX",0,1,0,null,["$1"],["K"],8)
installTearOff(W.im.prototype,"gX",0,1,0,null,["$1"],["K"],5)
installTearOff(W.f3.prototype,"gX",0,1,0,null,["$1"],["K"],13)
installTearOff(W.iB.prototype,"gX",0,1,0,null,["$1"],["K"],9)
installTearOff(W.f5.prototype,"gX",0,1,0,null,["$1"],["K"],7)
installTearOff(W.iD.prototype,"gX",0,1,0,null,["$1"],["K"],7)
installTearOff(W.ju.prototype,"gX",0,1,0,null,["$1"],["K"],5)
installTearOff(W.jv.prototype,"gX",0,1,0,null,["$1"],["K"],10)
installTearOff(W.ch.prototype,"gX",0,1,0,null,["$1"],["K"],10)
installTearOff(W.jF.prototype,"gX",0,1,0,null,["$1"],["K"],15)
installTearOff(W.jI.prototype,"gX",0,1,0,null,["$1"],["K"],9)
installTearOff(W.jK.prototype,"gX",0,1,0,null,["$1"],["K"],16)
installTearOff(W.jL.prototype,"gX",0,1,0,null,["$1"],["K"],17)
installTearOff(W.cj.prototype,"gX",0,1,0,null,["$1"],["K"],18)
installTearOff(W.jP.prototype,"gX",0,1,0,null,["$1"],["K"],19)
installTearOff(W.jQ.prototype,"gX",0,1,0,null,["$1"],["K"],20)
installTearOff(W.jR.prototype,"gX",0,1,0,null,["$1"],["K"],21)
installTearOff(W.hX.prototype,"gX",0,1,0,null,["$1"],["K"],22)
installTearOff(W.k_.prototype,"gX",0,1,0,null,["$1"],["K"],33)
installTearOff(W.k3.prototype,"gX",0,1,0,null,["$1"],["K"],24)
installTearOff(W.i1.prototype,"gX",0,1,0,null,["$1"],["K"],25)
installTearOff(W.k7.prototype,"gX",0,1,0,null,["$1"],["K"],26)
installTearOff(W.k9.prototype,"gX",0,1,0,null,["$1"],["K"],27)
installTearOff(P.jM.prototype,"gX",0,1,0,null,["$1"],["K"],28)
installTearOff(V,"vg",1,0,0,null,["$0"],["Hh"],1)
installTearOff(R,"et",1,0,0,null,["$1"],["Fu"],0)
installTearOff(R,"wJ",1,0,0,null,["$1"],["Fi"],0)
installTearOff(R,"us",1,0,0,null,["$1"],["Ft"],0)
installTearOff(R,"bR",1,0,0,null,["$1"],["Fs"],0)
installTearOff(R,"ur",1,0,0,null,["$1"],["Fr"],0)
installTearOff(R,"wL",1,0,0,null,["$1"],["Fp"],0)
installTearOff(R,"hH",1,0,0,null,["$1"],["Fo"],0)
installTearOff(R,"es",1,0,0,null,["$1"],["Fl"],0)
installTearOff(R,"e5",1,0,0,null,["$1"],["Fn"],0)
installTearOff(R,"fl",1,0,0,null,["$1"],["Fq"],0)
installTearOff(R,"uq",1,0,0,null,["$1"],["Fm"],0)
installTearOff(R,"y",1,0,0,null,["$1"],["Fj"],0)
installTearOff(R,"wK",1,0,0,null,["$1"],["Fk"],0)
installTearOff(F.fe.prototype,"gas",0,1,0,null,["$1"],["cI"],4)
installTearOff(O,"Hj",1,0,0,null,["$1"],["Hl"],31)
installTearOff(Y.dN.prototype,"ghI",0,0,0,null,["$1"],["ej"],function(){return H.eL(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dN")})
installTearOff(V,"Hp",1,0,0,null,["$4"],["ze"],3)
installTearOff(V,"Ho",1,0,0,null,["$4"],["zd"],2)
installTearOff(B,"i7",1,0,0,null,["$1"],["GG"],23)
installTearOff(T,"GV",1,0,0,null,["$4"],["z4"],3)
installTearOff(T,"GU",1,0,0,null,["$4"],["z3"],2)
installTearOff(T,"GT",1,0,0,null,["$4"],["z2"],3)
installTearOff(T,"GS",1,0,0,null,["$4"],["z1"],2)
installTearOff(F,"H8",1,0,0,null,["$4"],["za"],3)
installTearOff(F,"H7",1,0,0,null,["$4"],["z9"],2)
installTearOff(F,"H6",1,0,0,null,["$4"],["z8"],3)
installTearOff(F,"H5",1,0,0,null,["$4"],["z7"],2)
installTearOff(F,"H4",1,0,0,null,["$4"],["z6"],3)
installTearOff(F,"H3",1,0,0,null,["$4"],["z5"],2)})();(function inheritance(){inherit(P.ac,null)
var t=P.ac
inherit(H.tX,t)
inherit(J.h,t)
inherit(J.i8,t)
inherit(P.hF,t)
inherit(P.o,t)
inherit(H.dM,t)
inherit(P.jp,t)
inherit(H.iz,t)
inherit(H.pf,t)
inherit(H.eU,t)
inherit(H.qw,t)
inherit(H.fw,t)
inherit(H.q2,t)
inherit(H.eJ,t)
inherit(H.qv,t)
inherit(H.pQ,t)
inherit(H.fm,t)
inherit(H.p6,t)
inherit(H.dD,t)
inherit(H.dx,t)
inherit(H.eH,t)
inherit(H.kR,t)
inherit(H.nT,t)
inherit(H.pc,t)
inherit(P.ee,t)
inherit(H.h5,t)
inherit(H.k8,t)
inherit(H.dT,t)
inherit(H.u,t)
inherit(H.mN,t)
inherit(H.mP,t)
inherit(H.ho,t)
inherit(H.k6,t)
inherit(H.jX,t)
inherit(H.jO,t)
inherit(H.qP,t)
inherit(P.cE,t)
inherit(P.eV,t)
inherit(P.jZ,t)
inherit(P.k2,t)
inherit(P.bj,t)
inherit(P.jY,t)
inherit(P.dj,t)
inherit(P.oq,t)
inherit(P.dk,t)
inherit(P.k0,t)
inherit(P.pY,t)
inherit(P.qz,t)
inherit(P.qN,t)
inherit(P.eP,t)
inherit(P.r1,t)
inherit(P.qm,t)
inherit(P.qo,t)
inherit(P.oa,t)
inherit(P.qt,t)
inherit(P.dw,t)
inherit(P.fc,t)
inherit(P.b1,t)
inherit(P.qU,t)
inherit(P.n3,t)
inherit(P.qu,t)
inherit(P.fR,t)
inherit(P.fT,t)
inherit(P.qW,t)
inherit(P.db,t)
inherit(P.bF,t)
inherit(P.dG,t)
inherit(P.dn,t)
inherit(P.dH,t)
inherit(P.nt,t)
inherit(P.jN,t)
inherit(P.q7,t)
inherit(P.bJ,t)
inherit(P.lm,t)
inherit(P.p,t)
inherit(P.bm,t)
inherit(P.d6,t)
inherit(P.d5,t)
inherit(P.dP,t)
inherit(P.C,t)
inherit(P.cb,t)
inherit(P.eD,t)
inherit(P.kb,t)
inherit(P.pg,t)
inherit(P.qL,t)
inherit(W.ib,t)
inherit(W.jA,t)
inherit(W.id,t)
inherit(P.kV,t)
inherit(W.bx,t)
inherit(W.lR,t)
inherit(W.qT,t)
inherit(P.qQ,t)
inherit(P.pJ,t)
inherit(P.qs,t)
inherit(P.qB,t)
inherit(P.qC,t)
inherit(P.bh,t)
inherit(P.da,t)
inherit(T.fI,t)
inherit(T.dd,t)
inherit(T.hi,t)
inherit(T.nv,t)
inherit(T.pF,t)
inherit(T.pG,t)
inherit(T.pH,t)
inherit(T.pE,t)
inherit(T.m9,t)
inherit(T.iE,t)
inherit(B.hj,t)
inherit(N.a5,t)
inherit(L.fJ,t)
inherit(A.jB,t)
inherit(O.c7,t)
inherit(T.hK,t)
inherit(M.fQ,t)
inherit(X.iq,t)
inherit(X.i9,t)
inherit(M.h6,t)
inherit(Z.ip,t)
inherit(E.nr,t)
inherit(E.M,t)
inherit(A.a1,t)
inherit(U.b,t)
inherit(Y.dO,t)
inherit(K.cF,t)
inherit(X.F,t)
inherit(G.Y,t)
inherit(A.fP,t)
inherit(B.dq,t)
inherit(B.de,t)
inherit(A.dF,t)
inherit(F.hu,t)
inherit(F.fe,t)
inherit(Q.jD,t)
inherit(A.hI,t)
inherit(Y.dN,t)
inherit(O.cT,t)
inherit(D.cG,t)
inherit(B.oW,t)
inherit(B.cW,t)
inherit(Q.cy,t)
inherit(B.hW,t)
inherit(Q.f,t)
t=J.h
inherit(J.my,t)
inherit(J.mz,t)
inherit(J.hp,t)
inherit(J.em,t)
inherit(J.fd,t)
inherit(J.en,t)
inherit(H.fg,t)
inherit(H.eq,t)
inherit(W.aG,t)
inherit(W.cK,t)
inherit(W.eS,t)
inherit(W.kM,t)
inherit(W.fU,t)
inherit(W.kU,t)
inherit(W.bI,t)
inherit(W.iF,t)
inherit(W.l5,t)
inherit(W.eX,t)
inherit(W.ie,t)
inherit(W.ii,t)
inherit(W.l8,t)
inherit(W.ij,t)
inherit(W.iG,t)
inherit(W.il,t)
inherit(W.im,t)
inherit(W.fZ,t)
inherit(W.T,t)
inherit(W.iH,t)
inherit(W.lO,t)
inherit(W.lS,t)
inherit(W.lV,t)
inherit(W.cn,t)
inherit(W.m4,t)
inherit(W.iI,t)
inherit(W.hh,t)
inherit(W.e6,t)
inherit(W.mY,t)
inherit(W.ju,t)
inherit(W.cp,t)
inherit(W.iS,t)
inherit(W.nl,t)
inherit(W.nm,t)
inherit(W.iT,t)
inherit(W.nA,t)
inherit(W.e4,t)
inherit(W.e7,t)
inherit(W.ch,t)
inherit(W.iU,t)
inherit(W.o8,t)
inherit(W.cr,t)
inherit(W.iV,t)
inherit(W.fo,t)
inherit(W.cj,t)
inherit(W.ok,t)
inherit(W.op,t)
inherit(W.oM,t)
inherit(W.ck,t)
inherit(W.iW,t)
inherit(W.p5,t)
inherit(W.cs,t)
inherit(W.iX,t)
inherit(W.fs,t)
inherit(W.jQ,t)
inherit(W.pl,t)
inherit(W.pm,t)
inherit(W.ft,t)
inherit(W.jR,t)
inherit(W.pT,t)
inherit(W.iY,t)
inherit(W.iZ,t)
inherit(W.iJ,t)
inherit(W.iK,t)
inherit(W.iL,t)
inherit(W.iM,t)
inherit(W.r_,t)
inherit(W.r0,t)
inherit(P.mf,t)
inherit(P.nq,t)
inherit(P.d3,t)
inherit(P.iN,t)
inherit(P.d7,t)
inherit(P.iO,t)
inherit(P.nI,t)
inherit(P.iP,t)
inherit(P.d9,t)
inherit(P.iQ,t)
inherit(P.ps,t)
inherit(P.fL,t)
inherit(P.ko,t)
inherit(P.nV,t)
inherit(P.qZ,t)
inherit(P.iR,t)
t=J.hp
inherit(J.nG,t)
inherit(J.eC,t)
inherit(J.eo,t)
inherit(F.u_,t)
inherit(R.he,t)
inherit(R.ui,t)
inherit(R.uh,t)
inherit(S.fj,t)
inherit(S.uJ,t)
inherit(S.uK,t)
inherit(S.uL,t)
inherit(S.t5,t)
inherit(S.t8,t)
inherit(S.rW,t)
inherit(S.uN,t)
inherit(S.uO,t)
inherit(S.l2,t)
inherit(S.uA,t)
inherit(S.uB,t)
inherit(S.rQ,t)
inherit(S.lZ,t)
inherit(S.kI,t)
inherit(S.rV,t)
inherit(S.rU,t)
inherit(S.t7,t)
inherit(S.p2,t)
inherit(S.rZ,t)
inherit(S.hw,t)
inherit(S.u7,t)
inherit(S.u9,t)
inherit(S.uv,t)
inherit(S.uw,t)
inherit(S.uc,t)
inherit(S.ud,t)
inherit(S.tn,t)
inherit(S.to,t)
inherit(S.ue,t)
inherit(S.ua,t)
inherit(S.rS,t)
inherit(S.uG,t)
inherit(S.uH,t)
inherit(S.uF,t)
inherit(Z.tV,t)
inherit(Z.tR,t)
inherit(Z.tS,t)
inherit(J.tW,J.em)
t=J.fd
inherit(J.jr,t)
inherit(J.jq,t)
inherit(P.js,P.hF)
t=P.js
inherit(H.hR,t)
inherit(W.k1,t)
inherit(H.kO,H.hR)
t=P.o
inherit(H.t,t)
inherit(H.hv,t)
inherit(H.hV,t)
inherit(P.hn,t)
inherit(H.qO,t)
t=H.t
inherit(H.ep,t)
inherit(H.mO,t)
inherit(P.qn,t)
inherit(P.ew,t)
t=H.ep
inherit(H.oN,t)
inherit(H.ff,t)
inherit(P.mR,t)
inherit(H.fY,H.hv)
t=P.jp
inherit(H.jt,t)
inherit(H.jT,t)
inherit(Q.pw,t)
t=H.eU
inherit(H.rF,t)
inherit(H.rG,t)
inherit(H.qr,t)
inherit(H.q3,t)
inherit(H.mj,t)
inherit(H.mk,t)
inherit(H.qy,t)
inherit(H.p7,t)
inherit(H.p8,t)
inherit(H.rH,t)
inherit(H.ru,t)
inherit(H.rv,t)
inherit(H.rw,t)
inherit(H.rx,t)
inherit(H.ry,t)
inherit(H.oS,t)
inherit(H.mC,t)
inherit(H.mB,t)
inherit(H.rq,t)
inherit(H.rr,t)
inherit(H.rs,t)
inherit(P.pN,t)
inherit(P.pM,t)
inherit(P.pO,t)
inherit(P.pP,t)
inherit(P.r2,t)
inherit(P.r3,t)
inherit(P.rd,t)
inherit(P.rf,t)
inherit(P.lY,t)
inherit(P.lX,t)
inherit(P.q8,t)
inherit(P.qg,t)
inherit(P.qc,t)
inherit(P.qd,t)
inherit(P.qe,t)
inherit(P.qa,t)
inherit(P.qf,t)
inherit(P.q9,t)
inherit(P.qj,t)
inherit(P.qk,t)
inherit(P.qi,t)
inherit(P.qh,t)
inherit(P.ot,t)
inherit(P.or,t)
inherit(P.os,t)
inherit(P.ou,t)
inherit(P.oz,t)
inherit(P.ox,t)
inherit(P.oy,t)
inherit(P.oA,t)
inherit(P.oD,t)
inherit(P.oE,t)
inherit(P.oB,t)
inherit(P.oC,t)
inherit(P.oF,t)
inherit(P.oG,t)
inherit(P.ov,t)
inherit(P.ow,t)
inherit(P.pS,t)
inherit(P.pR,t)
inherit(P.qA,t)
inherit(P.r5,t)
inherit(P.r4,t)
inherit(P.r6,t)
inherit(P.rc,t)
inherit(P.qE,t)
inherit(P.qF,t)
inherit(P.qG,t)
inherit(P.qp,t)
inherit(P.n4,t)
inherit(P.qY,t)
inherit(P.qX,t)
inherit(P.lc,t)
inherit(P.ld,t)
inherit(P.pk,t)
inherit(P.ph,t)
inherit(P.pi,t)
inherit(P.pj,t)
inherit(P.re,t)
inherit(P.r9,t)
inherit(P.r8,t)
inherit(P.ra,t)
inherit(P.rb,t)
inherit(W.pV,t)
inherit(W.m7,t)
inherit(W.m8,t)
inherit(W.q6,t)
inherit(P.qS,t)
inherit(P.pK,t)
inherit(P.rh,t)
inherit(P.ri,t)
inherit(P.rj,t)
inherit(P.kW,t)
inherit(P.r7,t)
inherit(P.ku,t)
inherit(P.kv,t)
inherit(V.rl,t)
inherit(V.rm,t)
inherit(O.kD,t)
inherit(A.mx,t)
inherit(A.mw,t)
inherit(G.mu,t)
inherit(U.pA,t)
inherit(U.pB,t)
inherit(A.rg,t)
inherit(A.mV,t)
inherit(A.mT,t)
inherit(A.mU,t)
inherit(A.mW,t)
inherit(O.rC,t)
inherit(O.rD,t)
inherit(O.rB,t)
inherit(V.lj,t)
inherit(V.li,t)
inherit(V.lh,t)
inherit(V.lg,t)
inherit(D.oo,t)
inherit(B.oY,t)
inherit(B.oX,t)
inherit(Q.px,t)
t=H.pQ
inherit(H.fx,t)
inherit(H.i3,t)
inherit(H.kS,H.kR)
t=P.ee
inherit(H.jz,t)
inherit(H.mD,t)
inherit(H.pe,t)
inherit(H.kL,t)
inherit(H.nZ,t)
inherit(P.fi,t)
inherit(P.cY,t)
inherit(P.V,t)
inherit(P.eB,t)
inherit(P.dQ,t)
inherit(P.bM,t)
inherit(P.l4,t)
t=H.oS
inherit(H.om,t)
inherit(H.fN,t)
t=P.hn
inherit(H.pL,t)
inherit(T.fH,t)
t=H.eq
inherit(H.nd,t)
inherit(H.jw,t)
t=H.jw
inherit(H.hB,t)
inherit(H.hC,t)
inherit(H.hD,H.hB)
inherit(H.hz,H.hD)
inherit(H.hE,H.hC)
inherit(H.hA,H.hE)
t=H.hz
inherit(H.ne,t)
inherit(H.nf,t)
t=H.hA
inherit(H.ng,t)
inherit(H.nh,t)
inherit(H.ni,t)
inherit(H.nj,t)
inherit(H.nk,t)
inherit(H.jx,t)
inherit(H.fh,t)
t=P.jZ
inherit(P.dV,t)
inherit(P.ka,t)
t=P.k0
inherit(P.pX,t)
inherit(P.pZ,t)
inherit(P.qM,P.qz)
t=P.dj
inherit(P.hY,t)
inherit(W.q4,t)
inherit(P.hZ,P.dk)
inherit(P.qx,P.hY)
inherit(P.qD,P.r1)
inherit(P.k5,H.u)
inherit(P.o9,P.oa)
inherit(P.qq,P.o9)
inherit(P.k4,P.qq)
inherit(P.hS,P.n3)
t=P.fR
inherit(P.kz,t)
inherit(P.lf,t)
t=P.fT
inherit(P.kA,t)
inherit(P.pp,t)
inherit(P.po,P.lf)
t=P.dn
inherit(P.U,t)
inherit(P.D,t)
t=P.cY
inherit(P.ev,t)
inherit(P.mg,t)
inherit(P.pW,P.kb)
t=W.aG
inherit(W.az,t)
inherit(W.h_,t)
inherit(W.kQ,t)
inherit(W.lN,t)
inherit(W.lP,t)
inherit(W.lT,t)
inherit(W.hg,t)
inherit(W.hy,t)
inherit(W.nK,t)
inherit(W.jH,t)
inherit(W.ob,t)
inherit(W.eF,t)
inherit(W.cq,t)
inherit(W.h0,t)
inherit(W.cP,t)
inherit(W.cH,t)
inherit(W.h1,t)
inherit(W.pq,t)
inherit(W.pv,t)
inherit(W.jU,t)
inherit(W.pC,t)
inherit(W.qK,t)
inherit(P.l6,t)
inherit(P.hJ,t)
inherit(P.pa,t)
inherit(P.bC,t)
inherit(P.fM,t)
t=W.az
inherit(W.dr,t)
inherit(W.ec,t)
inherit(W.ed,t)
inherit(W.ih,t)
inherit(W.fu,t)
inherit(W.q_,t)
t=W.dr
inherit(W.at,t)
inherit(P.cc,t)
t=W.at
inherit(W.eO,t)
inherit(W.kp,t)
inherit(W.hx,t)
inherit(W.kB,t)
inherit(W.kF,t)
inherit(W.eT,t)
inherit(W.fX,t)
inherit(W.le,t)
inherit(W.lM,t)
inherit(W.iB,t)
inherit(W.mc,t)
inherit(W.f7,t)
inherit(W.mh,t)
inherit(W.mG,t)
inherit(W.hr,t)
inherit(W.n2,t)
inherit(W.n7,t)
inherit(W.np,t)
inherit(W.nu,t)
inherit(W.ny,t)
inherit(W.fn,t)
inherit(W.jI,t)
inherit(W.od,t)
inherit(W.og,t)
inherit(W.hL,t)
inherit(W.oU,t)
inherit(W.hP,t)
inherit(W.p9,t)
inherit(W.ql,t)
inherit(W.eR,W.hx)
inherit(W.h2,W.h_)
inherit(W.kx,W.h2)
t=W.bI
inherit(W.kX,t)
inherit(W.kY,t)
inherit(W.fV,t)
inherit(W.fW,t)
inherit(W.kZ,t)
inherit(W.l_,t)
inherit(W.l0,t)
inherit(W.eW,W.iF)
inherit(W.pU,W.jA)
inherit(W.j_,W.iG)
inherit(W.ik,W.j_)
t=W.T
inherit(W.lk,t)
inherit(W.oi,t)
inherit(W.oj,t)
inherit(W.cf,W.eS)
inherit(W.j0,W.iH)
inherit(W.f3,W.j0)
inherit(W.j1,W.iI)
inherit(W.f5,W.j1)
inherit(W.iD,W.f5)
inherit(W.e1,W.hg)
inherit(W.hq,W.e6)
inherit(W.n8,W.hy)
inherit(W.jb,W.iS)
inherit(W.jv,W.jb)
inherit(W.jc,W.iT)
inherit(W.jy,W.jc)
inherit(W.nF,W.e7)
inherit(W.jd,W.iU)
inherit(W.jF,W.jd)
inherit(W.oc,W.eF)
inherit(W.h3,W.h0)
inherit(W.jK,W.h3)
inherit(W.je,W.iV)
inherit(W.jL,W.je)
inherit(W.jf,W.iW)
inherit(W.p0,W.jf)
inherit(W.h4,W.h1)
inherit(W.p1,W.h4)
inherit(W.jg,W.iX)
inherit(W.jP,W.jg)
inherit(W.jh,W.iY)
inherit(W.hX,W.jh)
inherit(W.ji,W.iZ)
inherit(W.k_,W.ji)
inherit(W.q0,W.ij)
inherit(W.j2,W.iJ)
inherit(W.k3,W.j2)
inherit(W.j3,W.iK)
inherit(W.i1,W.j3)
inherit(W.j4,W.iL)
inherit(W.k7,W.j4)
inherit(W.j5,W.iM)
inherit(W.k9,W.j5)
t=P.kV
inherit(W.q1,t)
inherit(P.kt,t)
inherit(W.eI,W.q4)
inherit(W.q5,P.oq)
inherit(P.qR,P.qQ)
inherit(P.jW,P.pJ)
inherit(P.bS,P.qC)
t=P.cc
inherit(P.co,t)
inherit(P.eb,t)
inherit(P.ln,t)
inherit(P.lo,t)
inherit(P.lp,t)
inherit(P.lq,t)
inherit(P.lr,t)
inherit(P.ls,t)
inherit(P.lt,t)
inherit(P.lu,t)
inherit(P.lv,t)
inherit(P.lw,t)
inherit(P.lx,t)
inherit(P.ly,t)
inherit(P.lz,t)
inherit(P.lA,t)
inherit(P.lB,t)
inherit(P.lC,t)
inherit(P.lQ,t)
inherit(P.n5,t)
inherit(P.n6,t)
inherit(P.nD,t)
inherit(P.o5,t)
inherit(P.oQ,t)
inherit(P.pr,t)
inherit(P.i_,t)
inherit(P.qH,t)
inherit(P.qI,t)
inherit(P.qJ,t)
t=P.co
inherit(P.km,t)
inherit(P.md,t)
inherit(P.oO,t)
inherit(P.eA,t)
inherit(P.pn,t)
inherit(P.j6,P.iN)
inherit(P.mJ,P.j6)
inherit(P.j7,P.iO)
inherit(P.nn,P.j7)
inherit(P.j8,P.iP)
inherit(P.oK,P.j8)
inherit(P.p_,P.eA)
inherit(P.j9,P.iQ)
inherit(P.pb,P.j9)
t=P.bC
inherit(P.dZ,t)
inherit(P.kT,t)
inherit(P.eQ,P.dZ)
inherit(P.ja,P.iR)
inherit(P.jM,P.ja)
t=B.hj
inherit(S.kn,t)
inherit(M.ks,t)
inherit(A.kP,t)
inherit(M.l1,t)
inherit(V.l9,t)
inherit(U.lD,t)
inherit(N.mF,t)
inherit(F.nb,t)
inherit(G.nJ,t)
inherit(Q.nX,t)
inherit(N.of,t)
inherit(D.oT,t)
inherit(V.oV,t)
inherit(F.pD,t)
t=N.a5
inherit(T.l7,t)
inherit(R.nQ,t)
t=T.l7
inherit(K.bU,t)
inherit(S.bG,t)
inherit(T.c3,t)
inherit(M.bB,t)
inherit(A.nx,A.jB)
inherit(L.aD,A.nx)
t=O.c7
inherit(O.dp,t)
inherit(O.io,t)
inherit(O.ez,t)
t=O.dp
inherit(U.kw,t)
inherit(Y.nS,t)
inherit(V.lU,t)
inherit(Q.me,t)
inherit(Q.nE,t)
inherit(M.ol,t)
inherit(B.pI,t)
t=U.kw
inherit(U.n_,t)
inherit(U.ns,t)
inherit(U.oH,O.io)
t=U.oH
inherit(U.oI,t)
inherit(U.oJ,t)
t=T.hK
inherit(O.ky,t)
inherit(Y.m_,t)
inherit(Y.m0,t)
inherit(B.m2,t)
inherit(X.ma,t)
inherit(Q.mb,t)
inherit(S.mH,t)
inherit(Z.mZ,t)
inherit(S.n0,t)
inherit(U.n1,t)
inherit(E.na,t)
inherit(V.nw,t)
inherit(N.nP,t)
inherit(N.nW,t)
inherit(E.o0,t)
inherit(Y.o1,t)
inherit(Y.o3,t)
inherit(L.o4,t)
inherit(S.o7,t)
inherit(Y.oe,t)
inherit(R.oP,t)
inherit(U.p3,t)
inherit(E.pu,t)
inherit(M.py,t)
t=O.ez
inherit(Y.oZ,t)
inherit(Y.kJ,t)
inherit(Y.no,t)
inherit(U.pz,t)
t=L.fJ
inherit(L.kC,t)
inherit(T.kE,t)
inherit(T.kH,t)
inherit(U.la,t)
inherit(Z.lb,t)
inherit(T.m1,t)
inherit(V.m3,t)
inherit(X.m5,t)
inherit(Z.mE,t)
inherit(Q.mI,t)
inherit(K.mK,t)
inherit(G.mL,t)
inherit(V.n9,t)
inherit(E.nR,t)
inherit(V.nY,t)
inherit(K.o2,t)
inherit(N.oh,t)
inherit(L.oR,t)
inherit(N.p4,t)
inherit(Q.pt,t)
t=S.bG
inherit(S.ia,t)
inherit(S.m6,t)
inherit(E.iC,E.nr)
t=E.M
inherit(E.fK,t)
inherit(E.kr,t)
inherit(Q.nH,Q.me)
inherit(U.W,U.b)
t=R.nQ
inherit(R.a0,t)
inherit(R.R,t)
inherit(R.a6,t)
inherit(R.bA,R.a6)
t=Y.dO
inherit(Y.ae,t)
inherit(Y.c1,t)
inherit(Y.S,t)
inherit(Y.ic,t)
inherit(Y.bD,t)
inherit(Y.cV,t)
inherit(Y.kN,t)
inherit(Y.jC,t)
inherit(Y.iA,t)
inherit(Y.jE,t)
t=Y.c1
inherit(Y.cZ,t)
inherit(Y.bw,t)
inherit(U.ag,A.a1)
t=G.Y
inherit(G.aX,t)
inherit(G.bH,t)
inherit(G.d,t)
inherit(G.af,G.bH)
t=D.cG
inherit(D.jV,t)
inherit(D.nU,t)
t=Q.cy
inherit(Q.hU,t)
inherit(Q.hT,t)
inherit(Q.dU,Q.hU)
inherit(B.eE,Q.dU)
t=S.fj
inherit(S.ut,t)
inherit(S.kK,t)
inherit(S.mM,t)
inherit(S.u5,t)
inherit(S.tm,t)
t=S.kK
inherit(S.ul,t)
inherit(S.uf,t)
t=S.mM
inherit(S.t0,t)
inherit(S.rR,t)
t=S.l2
inherit(S.u0,t)
inherit(S.l3,t)
inherit(S.nz,S.l3)
inherit(S.ux,S.nz)
t=S.kI
inherit(S.um,t)
inherit(S.uy,t)
t=S.lZ
inherit(S.uC,t)
inherit(S.un,t)
inherit(S.t6,t)
inherit(S.uz,t)
t=S.p2
inherit(S.uE,t)
inherit(S.rY,t)
inherit(S.uM,t)
t=S.hw
inherit(S.u6,t)
inherit(S.u8,t)
inherit(S.uu,t)
inherit(Q.eG,Q.hT)
inherit(Q.jS,Q.eG)
mixin(H.hR,H.pf)
mixin(H.hB,P.b1)
mixin(H.hD,H.iz)
mixin(H.hC,P.b1)
mixin(H.hE,H.iz)
mixin(P.hF,P.b1)
mixin(P.hS,P.qU)
mixin(W.h_,P.b1)
mixin(W.h2,W.bx)
mixin(W.iF,W.id)
mixin(W.jA,W.id)
mixin(W.iG,P.b1)
mixin(W.j_,W.bx)
mixin(W.iH,P.b1)
mixin(W.j0,W.bx)
mixin(W.iI,P.b1)
mixin(W.j1,W.bx)
mixin(W.iS,P.b1)
mixin(W.jb,W.bx)
mixin(W.iT,P.b1)
mixin(W.jc,W.bx)
mixin(W.iU,P.b1)
mixin(W.jd,W.bx)
mixin(W.h0,P.b1)
mixin(W.h3,W.bx)
mixin(W.iV,P.b1)
mixin(W.je,W.bx)
mixin(W.iW,P.b1)
mixin(W.jf,W.bx)
mixin(W.h1,P.b1)
mixin(W.h4,W.bx)
mixin(W.iX,P.b1)
mixin(W.jg,W.bx)
mixin(W.iY,P.b1)
mixin(W.jh,W.bx)
mixin(W.iZ,P.b1)
mixin(W.ji,W.bx)
mixin(W.iJ,P.b1)
mixin(W.j2,W.bx)
mixin(W.iK,P.b1)
mixin(W.j3,W.bx)
mixin(W.iL,P.b1)
mixin(W.j4,W.bx)
mixin(W.iM,P.b1)
mixin(W.j5,W.bx)
mixin(P.iN,P.b1)
mixin(P.j6,W.bx)
mixin(P.iO,P.b1)
mixin(P.j7,W.bx)
mixin(P.iP,P.b1)
mixin(P.j8,W.bx)
mixin(P.iQ,P.b1)
mixin(P.j9,W.bx)
mixin(P.iR,P.b1)
mixin(P.ja,W.bx)
mixin(A.jB,P.fc)
mixin(Q.hU,P.b1)
mixin(Q.hT,P.fc)})();(function constants(){C.L=W.e1.prototype
C.M=J.h.prototype
C.b=J.em.prototype
C.f=J.jq.prototype
C.a=J.jr.prototype
C.d=J.fd.prototype
C.c=J.en.prototype
C.T=J.eo.prototype
C.p=H.fh.prototype
C.F=J.nG.prototype
C.r=J.eC.prototype
C.H=new P.kA(!1)
C.G=new P.kz(C.H)
C.j=new W.ib()
C.I=new P.nt()
C.J=new P.pY()
C.K=new P.qs()
C.e=new P.qD()
C.t=new W.qT()
C.o=new P.dH(0)
C.N=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.u=function(hooks) { return hooks; }
C.O=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.P=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.Q=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.v=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.R=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.S=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.w=H.a(makeConstList([127,2047,65535,1114111]),[P.D])
C.x=makeConstList([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8])
C.k=makeConstList([0,0,32776,33792,1,10240,0,0])
C.l=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.m=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.U=makeConstList([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13])
C.y=makeConstList([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])
C.V=makeConstList([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0])
C.W=makeConstList([])
C.Y=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.z=makeConstList([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577])
C.A=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.B=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.C=makeConstList([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258])
C.D=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.E=makeConstList([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15])
C.h=new F.hu(0,"LogLevel.ERROR")
C.i=new F.hu(1,"LogLevel.WARN")
C.Z=new F.hu(3,"LogLevel.VERBOSE")
C.X=H.a(makeConstList([]),[P.C])
C.a_=new H.kS(0,{},C.X,[P.C,P.C])
C.a0=H.bZ("bh")
C.a1=H.bZ("Hw")
C.q=H.bZ("Hx")
C.a2=H.bZ("Hy")
C.a3=H.bZ("Hz")
C.a4=H.bZ("HB")
C.a5=H.bZ("HC")
C.a6=H.bZ("HD")
C.a7=H.bZ("mA")
C.a8=H.bZ("d6")
C.a9=H.bZ("C")
C.aa=H.bZ("HG")
C.ab=H.bZ("HH")
C.ac=H.bZ("HI")
C.ad=H.bZ("da")
C.ae=H.bZ("db")
C.af=H.bZ("U")
C.ag=H.bZ("D")
C.ah=H.bZ("dn")
C.n=new P.po(!1)})();(function staticFields(){$.wE="$cachedFunction"
$.wF="$cachedInvocation"
$.dE=0
$.fO=null
$.vh=null
$.uZ=null
$.xF=null
$.xT=null
$.rk=null
$.rt=null
$.v_=null
$.fz=null
$.i4=null
$.i5=null
$.uV=!1
$.an=C.e
$.vx=0
$.vt=null
$.vs=null
$.vr=null
$.vu=null
$.vq=null
$.yI=null
$.yK=null
$.yt=null
$.yu=null
$.ys=null
$.yw=null
$.yD=null
$.yC=null
$.yL=null
$.yF=null
$.yy=null
$.yB=null
$.yv=null
$.yA=null
$.yH=null
$.yz=null
$.yJ=null
$.yG=null
$.yx=null
$.yr=null
$.yE=null
$.aL="accent"
$.aN="aspect1"
$.aM="aspect2"
$.aW="shoe1"
$.aV="shoe2"
$.aP="cloak1"
$.aQ="cloak2"
$.aO="cloak3"
$.aU="shirt1"
$.aT="shirt2"
$.aS="pants1"
$.aR="pants2"
$.ah=1300
$.k=3
$.m=2
$.K=1
$.B=0.1
$.zo=1
$.zn=-1
$.tg=null
$.e_=null
$.vy=null
$.eh=null
$.f1=null
$.it=null
$.t9=null
$.lF=null
$.ti=null
$.iu=null
$.ir=null
$.vA=null
$.iy=null
$.h7=null
$.dL=null
$.vz=null
$.lE=null
$.lL=null
$.f_=null
$.zl=null
$.zi=null
$.zk=null
$.zm=null
$.hd=null
$.eY=null
$.cw=null
$.d0=null
$.ej=null
$.lK=null
$.c6=null
$.c5=null
$.tb=null
$.hb=null
$.eg=null
$.zj=null
$.ha=null
$.cD=null
$.e0=null
$.ix=null
$.d_=null
$.f0=null
$.c0=null
$.lI=null
$.tc=null
$.b0=null
$.cC=null
$.cd=null
$.ce=null
$.lH=null
$.bV=null
$.du=null
$.dt=null
$.ds=null
$.dJ=null
$.dK=null
$.dI=null
$.d2=null
$.hc=null
$.lG=null
$.is=null
$.cR=null
$.cv=null
$.be=null
$.eZ=null
$.ei=null
$.lJ=null
$.h9=null
$.h8=null
$.te=null
$.cB=null
$.th=null
$.ta=null
$.vC=null
$.ef=null
$.cA=null
$.d1=null
$.df=null
$.f2=null
$.td=null
$.tf=null
$.vB=null
$.iv=null
$.iw=null
$.ek=null
$.vD=!1
$.tk=null
$.zp=null
$.vF=null
$.vH=null
$.zy=null
$.vG=null
$.zw=null
$.zx=null
$.tj=null
$.zt=null
$.zr=null
$.zs=null
$.zu=null
$.zv=null
$.zI=null
$.zB=null
$.zC=null
$.zD=null
$.zE=null
$.zF=null
$.zG=null
$.zH=null
$.zK=null
$.zL=null
$.zM=null
$.zN=null
$.zO=null
$.zP=null
$.zJ=null
$.F_="JACK"
$.F3="PM"
$.F0="JS"
$.EZ="HP"
$.F8="YD"
$.F5="SI"
$.F6="SU"
$.F1="ME"
$.F4="RB"
$.EX="GN"
$.wy="MP"
$.EV="AR"
$.F2="PE"
$.EW="DP"
$.F7="WV"
$.EY="HB"
$.n="PLAYER1TAG"
$.eu="PLAYER2TAG"
$.A="DENIZENTAG"
$.r="CONSORTTAG"
$.J="CONSORTSOUNDTAG"
$.aK="MCGUFFINTAG"
$.ad="TAGPHYSICALMCGUFFIN"
$.ci="TAGWEAPON"
$.FF=null
$.FS=null
$.Fz=null
$.FC=null
$.FI=null
$.FN=null
$.FL=null
$.FV=null
$.FU=null
$.FM=null
$.FX=null
$.FH=null
$.FW=null
$.FQ=null
$.FO=null
$.FR=null
$.FB=null
$.FA=null
$.FK=null
$.FJ=null
$.FG=null
$.FT=null
$.FD=null
$.FE=null
$.FP=null
$.xL=!1
$.FY=!1
$.wN=null
$.G4=13
$.aj=3
$.bL=2
$.aC=1
$.mv=0
$.I=1
$.a3=3
$.G=4
$.tO=6
$.tP=7
$.aa=8
$.v=9
$.q=10
$.f9=null
$.fb=null
$.tB=null
$.tK=null
$.tH=null
$.vO=null
$.tw=null
$.tG=null
$.hl=null
$.vY=null
$.wi=null
$.vS=null
$.vZ=null
$.tx=null
$.tF=null
$.wl=null
$.wn=null
$.tt=null
$.jl=null
$.jj=null
$.au=null
$.wc=null
$.tr=null
$.w7=null
$.fa=null
$.vR=null
$.wo=null
$.wk=null
$.wh=null
$.tD=null
$.mo=null
$.el=null
$.wm=null
$.mm=null
$.ty=null
$.e2=null
$.wf=null
$.dg=null
$.hk=null
$.tN=null
$.wg=null
$.tM=null
$.tI=null
$.tJ=null
$.mr=null
$.jk=null
$.Ad=null
$.w0=null
$.w6=null
$.we=null
$.wd=null
$.E=null
$.vW=null
$.mn=null
$.bO=null
$.ba=null
$.bP=null
$.X=null
$.aA=null
$.c9=null
$.L=null
$.P=null
$.aw=null
$.b7=null
$.bW=null
$.bi=null
$.bn=null
$.cg=null
$.b3=null
$.bz=null
$.bQ=null
$.a_=null
$.Ez=null
$.av=null
$.b9=null
$.aZ=null
$.ab=null
$.c8=null
$.b_=null
$.ap=null
$.bX=null
$.b2=null
$.ak=null
$.bk=null
$.c2=null
$.aE=null
$.bo=null
$.bl=null
$.a7=null
$.bK=null
$.a9=null
$.bg=null
$.bq=null
$.aY=null
$.bf=null
$.ax=null
$.b5=null
$.aH=null
$.Z=null
$.aq=null
$.aB=null
$.b6=null
$.ao=null
$.am=null
$.a2=null
$.Q=null
$.N=null
$.ai=null
$.aI=null
$.b8=null
$.aJ=null
$.Bw=null
$.Eb=null
$.EK=null
$.B1=null
$.E8=null
$.Bx=null
$.vN=null
$.En=null
$.Cw=null
$.Bs=null
$.A9=null
$.D6=null
$.jm=null
$.vU=null
$.Dw=null
$.AZ=null
$.Cf=null
$.AX=null
$.tu=null
$.AI=null
$.BJ=null
$.B6=null
$.Cp=null
$.Ev=null
$.By=null
$.tv=null
$.Cq=null
$.B4=null
$.AO=null
$.wb=null
$.A2=null
$.tq=null
$.C8=null
$.tC=null
$.CL=null
$.CF=null
$.A6=null
$.AR=null
$.DG=null
$.A8=null
$.E7=null
$.Ce=null
$.Bd=null
$.Dq=null
$.E1=null
$.tA=null
$.CA=null
$.Dn=null
$.B5=null
$.zW=null
$.Ey=null
$.Ci=null
$.AN=null
$.Em=null
$.CO=null
$.AU=null
$.E6=null
$.Bn=null
$.DO=null
$.DP=null
$.A4=null
$.CH=null
$.B7=null
$.Bh=null
$.EO=null
$.hm=null
$.DE=null
$.E4=null
$.mq=null
$.AC=null
$.CY=null
$.D1=null
$.A1=null
$.Bm=null
$.E5=null
$.CN=null
$.Ep=null
$.Ds=null
$.D2=null
$.w5=null
$.DS=null
$.EE=null
$.Ea=null
$.BW=null
$.De=null
$.BX=null
$.DH=null
$.EC=null
$.Co=null
$.Bj=null
$.BG=null
$.At=null
$.Do=null
$.BE=null
$.BL=null
$.B9=null
$.DR=null
$.f8=null
$.CS=null
$.w3=null
$.BY=null
$.w4=null
$.EH=null
$.Ay=null
$.DC=null
$.DD=null
$.DB=null
$.DA=null
$.DY=null
$.BM=null
$.CI=null
$.E0=null
$.Cz=null
$.CT=null
$.B2=null
$.EB=null
$.CG=null
$.Bp=null
$.Bq=null
$.D0=null
$.EN=null
$.Cc=null
$.EA=null
$.w9=null
$.DN=null
$.Cm=null
$.mt=null
$.C6=null
$.Dg=null
$.Ax=null
$.Bt=null
$.DJ=null
$.CJ=null
$.Eu=null
$.w8=null
$.CR=null
$.AE=null
$.B_=null
$.Dc=null
$.Eh=null
$.DI=null
$.ml=null
$.tL=null
$.DU=null
$.ED=null
$.BV=null
$.Ah=null
$.Aq=null
$.Ef=null
$.CV=null
$.Cx=null
$.CW=null
$.Ec=null
$.C7=null
$.A5=null
$.BK=null
$.Cv=null
$.DW=null
$.BD=null
$.Aw=null
$.Dy=null
$.Dz=null
$.Es=null
$.DL=null
$.tE=null
$.vV=null
$.AV=null
$.vX=null
$.C1=null
$.mp=null
$.Di=null
$.CE=null
$.Du=null
$.tz=null
$.ms=null
$.w2=null
$.Bf=null
$.BI=null
$.wa=null
$.w_=null
$.AQ=null
$.Ej=null
$.AJ=null
$.D4=null
$.BZ=null
$.E_=null
$.Cy=null
$.Ae=null
$.C_=null
$.Bc=null
$.D8=null
$.Ch=null
$.CD=null
$.Cn=null
$.Cr=null
$.Dx=null
$.Dt=null
$.zZ=null
$.Eg=null
$.Dl=null
$.B3=null
$.B8=null
$.BH=null
$.Ed=null
$.BA=null
$.Cj=null
$.Al=null
$.Bu=null
$.Bb=null
$.CX=null
$.Bk=null
$.DF=null
$.Cl=null
$.vP=null
$.Dh=null
$.C0=null
$.BB=null
$.zX=null
$.A3=null
$.CU=null
$.D3=null
$.Cg=null
$.BT=null
$.Ex=null
$.Ao=null
$.BC=null
$.Ck=null
$.B0=null
$.wj=null
$.AP=null
$.DK=null
$.Am=null
$.Ei=null
$.Ct=null
$.Ag=null
$.Dr=null
$.Dd=null
$.AW=null
$.BN=null
$.AD=null
$.Ee=null
$.C4=null
$.Et=null
$.AF=null
$.BO=null
$.AG=null
$.AY=null
$.Dk=null
$.AS=null
$.C5=null
$.CK=null
$.Az=null
$.DZ=null
$.EJ=null
$.DQ=null
$.CB=null
$.DX=null
$.CC=null
$.Ab=null
$.zY=null
$.Cu=null
$.Aj=null
$.AH=null
$.Ac=null
$.Af=null
$.CQ=null
$.D9=null
$.El=null
$.C2=null
$.EI=null
$.Dp=null
$.Dm=null
$.C9=null
$.C3=null
$.AL=null
$.BR=null
$.Cs=null
$.CZ=null
$.DT=null
$.A0=null
$.EF=null
$.Bi=null
$.E2=null
$.Ba=null
$.Aa=null
$.AA=null
$.As=null
$.EM=null
$.AB=null
$.Bl=null
$.AK=null
$.Er=null
$.DV=null
$.Ek=null
$.A_=null
$.Dv=null
$.Ca=null
$.Cd=null
$.Ew=null
$.E3=null
$.w1=null
$.Br=null
$.Db=null
$.EG=null
$.Bv=null
$.Cb=null
$.vT=null
$.BU=null
$.BS=null
$.DM=null
$.Da=null
$.BP=null
$.Ar=null
$.E9=null
$.D_=null
$.Eo=null
$.EL=null
$.ts=null
$.vQ=null
$.An=null
$.Bo=null
$.Dj=null
$.AT=null
$.Df=null
$.Be=null
$.A7=null
$.Ap=null
$.CP=null
$.Bg=null
$.D7=null
$.Av=null
$.Bz=null
$.Eq=null
$.Ai=null
$.BF=null
$.D5=null
$.Au=null
$.BQ=null
$.CM=null
$.Ak=null
$.AM=null
$.xf=4
$.f4="OWNER"
$.wu=!1
$.u4=null
$.xV=""
$.on=null
$.G1=null
$.hO=null
$.ex=null
$.G0=null
$.dR=null
$.ey=null
$.cx=null
$.fp=null
$.hM=null
$.hN=null
$.dv=null
$.ca=null
$.wP=!1})();(function lazyInitializers(){lazy($,"vo","$get$vo",function(){return H.xO("_$dart_dartClosure")})
lazy($,"tY","$get$tY",function(){return H.xO("_$dart_js")})
lazy($,"vL","$get$vL",function(){return H.zU()})
lazy($,"vM","$get$vM",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.vx
$.vx=t+1
t="expando$key$"+t}return new P.lm(null,t,[P.D])})
lazy($,"wW","$get$wW",function(){return H.dS(H.pd({
toString:function(){return"$receiver$"}}))})
lazy($,"wX","$get$wX",function(){return H.dS(H.pd({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"wY","$get$wY",function(){return H.dS(H.pd(null))})
lazy($,"wZ","$get$wZ",function(){return H.dS(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"x2","$get$x2",function(){return H.dS(H.pd(void 0))})
lazy($,"x3","$get$x3",function(){return H.dS(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"x0","$get$x0",function(){return H.dS(H.x1(null))})
lazy($,"x_","$get$x_",function(){return H.dS(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"x5","$get$x5",function(){return H.dS(H.x1(void 0))})
lazy($,"x4","$get$x4",function(){return H.dS(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"uR","$get$uR",function(){return P.Gb()})
lazy($,"hf","$get$hf",function(){return P.Gh(null,P.d6)})
lazy($,"i6","$get$i6",function(){return[]})
lazy($,"xh","$get$xh",function(){return H.F9([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"xD","$get$xD",function(){return P.GF()})
lazy($,"vn","$get$vn",function(){return P.d8("^\\S+$",!0,!1)})
lazy($,"kq","$get$kq",function(){return P.bY(P.D,L.fJ)})
lazy($,"vj","$get$vj",function(){return P.d8("[\\/]",!0,!1)})
lazy($,"bN","$get$bN",function(){return H.a([],[S.bG])})
lazy($,"lW","$get$lW",function(){return P.bY(P.C,Z.ip)})
lazy($,"mi","$get$mi",function(){return P.bY(P.D,B.hj)})
lazy($,"wp","$get$wp",function(){return H.a([],[A.a1])})
lazy($,"wz","$get$wz",function(){return H.a([],[P.C])})
lazy($,"o_","$get$o_",function(){return P.bY(P.D,T.hK)})
lazy($,"al","$get$al",function(){return H.a([],[U.ag])})
lazy($,"wO","$get$wO",function(){return P.ws([0,new K.cF("Pixels -> Bytes",T.GV(),T.GU()),1,new K.cF("Pixels -> Packed bits",T.GT(),T.GS()),2,new K.cF("RLE 1 byte",V.t4(1),V.t3(1)),3,new K.cF("RLE 2 bytes",V.t4(2),V.t3(2)),4,new K.cF("RLE 3 bytes",V.t4(3),V.t3(3)),5,new K.cF("RLE packed 1 byte",V.t2(1),V.t1(1)),6,new K.cF("RLE packed 2 bytes",V.t2(2),V.t1(2)),7,new K.cF("RLE packed 3 bytes",V.t2(3),V.t1(3)),8,new K.cF("RLE dynamic",V.Hp(),V.Ho()),9,new K.cF("Exponential-Golomb pixels",F.H8(),F.H7()),10,new K.cF("Exponential-Golomb run RLE",F.H6(),F.H5()),11,new K.cF("Exponential-Golomb run/data RLE",F.H4(),F.H3())],P.D,K.cF)})
lazy($,"c","$get$c",function(){return P.a4(null,null,null,G.Y)})
lazy($,"xd","$get$xd",function(){return P.d8("[\n\r]+",!0,!1)})
lazy($,"xe","$get$xe",function(){return P.d8("( *)(.*)",!0,!1)})
lazy($,"xc","$get$xc",function(){return P.d8("^s*//",!0,!1)})
lazy($,"xb","$get$xb",function(){return P.d8("//",!0,!1)})
lazy($,"cI","$get$cI",function(){return new F.fe(!1,!1,"WordListFileFormat")})
lazy($,"xg","$get$xg",function(){return new T.pE(null)})
lazy($,"ve","$get$ve",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cS","$get$cS",function(){return P.bY(P.C,Y.dN)})
lazy($,"wv","$get$wv",function(){return P.d8("[\\/]",!0,!1)})
lazy($,"u3","$get$u3",function(){return P.bY(P.C,W.fn)})
lazy($,"ug","$get$ug",function(){return A.fS(255,0,255,255)})
lazy($,"nC","$get$nC",function(){return new F.fe(!1,!1,"Path Utils")})
lazy($,"nB","$get$nB",function(){return P.bY(P.eD,P.D)})
lazy($,"cO","$get$cO",function(){return H.a([],[D.cG])})
lazy($,"wU","$get$wU",function(){return P.d8("([^\\\\|]|\\\\|)+",!0,!1)})
lazy($,"hQ","$get$hQ",function(){return P.d8("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fr","$get$fr",function(){return new F.fe(!1,!1,"TextEngine")})
lazy($,"wS","$get$wS",function(){return P.d8("#(.*?)#",!0,!1)})
lazy($,"wT","$get$wT",function(){return P.d8("\\?(.*?)\\?",!0,!1)})
lazy($,"fq","$get$fq",function(){return P.d8("\\\\(?!\\\\)",!0,!1)})
lazy($,"vp","$get$vp",function(){var t={color:16711935}
return new THREE.MeshBasicMaterial(t)})})()
var u={
createNewIsolate:function(){return $},
staticFunctionNameToClosure:function(a){var t=getGlobalFromName(a)
var s=t.$tearOff
return s()},
classIdExtractor:function(a){return a.constructor.name},
classFieldsExtractor:function(a){var t=a.constructor
var s=t.$cachedFieldNames
if(!s){var r=new t()
s=t.$cachedFieldNames=Object.keys(r)}var q=new Array(s.length)
for(var p=0;p<s.length;p++)q[p]=a[s[p]]
return q},
instanceFromClassId:function(a){var t=getGlobalFromName(a)
return new t()},
initializeEmptyInstance:function(a,b,c){var t=b.constructor
var s=Object.keys(b)
if(s.length!=c.length)throw new Error("Mismatch during deserialization.")
for(var r=0;r<c.length;r++)b[s[r]]=c[r]
return b},
mangledGlobalNames:{D:"int",U:"double",dn:"num",C:"String",db:"bool",d6:"Null",p:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.db,args:[[P.p,E.iC]]},{func:1,v:true},{func:1,ret:P.da,args:[P.bh,P.D,P.D,O.cT]},{func:1,ret:P.bh,args:[P.D,P.bh,P.bh,O.cT]},{func:1,v:true,args:[P.ac]},{func:1,ret:P.C,args:[P.D]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.az,args:[P.D]},{func:1,ret:P.C,args:[P.C]},{func:1,ret:W.dr,args:[P.D]},{func:1,ret:W.cp,args:[P.D]},{func:1,args:[,]},{func:1,v:true,args:[P.ac],opt:[P.dP]},{func:1,ret:W.cf,args:[P.D]},{func:1,v:true,args:[,P.dP]},{func:1,ret:W.ch,args:[P.D]},{func:1,ret:W.cq,args:[P.D]},{func:1,ret:W.cr,args:[P.D]},{func:1,ret:W.fo,args:[P.D]},{func:1,ret:W.cs,args:[P.D]},{func:1,ret:W.fs,args:[P.D]},{func:1,ret:W.ft,args:[P.D]},{func:1,ret:P.bS,args:[P.D]},{func:1,ret:P.C,args:[P.d5]},{func:1,ret:W.cn,args:[P.D]},{func:1,ret:W.fu,args:[P.D]},{func:1,ret:W.cj,args:[P.D]},{func:1,ret:W.ck,args:[P.D]},{func:1,ret:P.bm,args:[P.D]},{func:1,ret:P.db,args:[P.ac]},{func:1,ret:P.D,args:[P.bF,P.bF]},{func:1,v:true,args:[P.C]},{func:1,ret:W.eX,args:[P.D]},{func:1,ret:W.bI,args:[P.D]}],
interceptorsByTag:null,
leafTags:null};(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(convertToFastObject(n))[0]}
u.getIsolateTag=function(a){return t("___dart_"+a+u.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
u.isolateTag=o
break}}u.dispatchPropertyName=u.getIsolateTag("dispatch_record")}()
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.h,AnimationEffectTiming:J.h,AnimationTimeline:J.h,AppBannerPromptResult:J.h,BarProp:J.h,Body:J.h,CacheStorage:J.h,CanvasGradient:J.h,CanvasPattern:J.h,CanvasRenderingContext2D:J.h,CHROMIUMValuebuffer:J.h,CircularGeofencingRegion:J.h,Client:J.h,CompositorProxy:J.h,ConsoleBase:J.h,Coordinates:J.h,Crypto:J.h,CryptoKey:J.h,CSS:J.h,DeprecatedStorageInfo:J.h,DeprecatedStorageQuota:J.h,DeviceAcceleration:J.h,DeviceRotationRate:J.h,DirectoryReader:J.h,DOMImplementation:J.h,Iterator:J.h,DOMMatrix:J.h,DOMMatrixReadOnly:J.h,DOMParser:J.h,DOMPoint:J.h,DOMPointReadOnly:J.h,EffectModel:J.h,Stream:J.h,GamepadButton:J.h,Geofencing:J.h,GeofencingRegion:J.h,Geolocation:J.h,Geoposition:J.h,Headers:J.h,HMDVRDevice:J.h,IdleDeadline:J.h,ImageBitmap:J.h,ImageBitmapRenderingContext:J.h,InjectedScriptHost:J.h,InputDeviceCapabilities:J.h,IntersectionObserver:J.h,IntersectionObserverEntry:J.h,KeyframeEffect:J.h,MediaDeviceInfo:J.h,MediaDevices:J.h,MediaError:J.h,MediaKeyStatusMap:J.h,MediaKeySystemAccess:J.h,MediaKeys:J.h,MediaMetadata:J.h,MediaSession:J.h,MemoryInfo:J.h,MessageChannel:J.h,Metadata:J.h,MIDIInputMap:J.h,MIDIOutputMap:J.h,MutationObserver:J.h,WebKitMutationObserver:J.h,MutationRecord:J.h,NavigatorStorageUtils:J.h,NodeFilter:J.h,NodeIterator:J.h,NonDocumentTypeChildNode:J.h,NonElementParentNode:J.h,OffscreenCanvas:J.h,PerformanceNavigation:J.h,PerformanceObserver:J.h,PerformanceObserverEntryList:J.h,PerformanceTiming:J.h,Permissions:J.h,PositionError:J.h,PositionSensorVRDevice:J.h,Presentation:J.h,PushManager:J.h,PushMessageData:J.h,PushSubscription:J.h,Range:J.h,ReadableByteStream:J.h,ReadableByteStreamReader:J.h,ReadableStreamReader:J.h,RTCCertificate:J.h,RTCIceCandidate:J.h,mozRTCIceCandidate:J.h,RTCSessionDescription:J.h,mozRTCSessionDescription:J.h,RTCStatsReport:J.h,RTCStatsResponse:J.h,Screen:J.h,ScrollState:J.h,Selection:J.h,SharedArrayBuffer:J.h,SourceInfo:J.h,StorageInfo:J.h,StorageManager:J.h,StorageQuota:J.h,StyleMedia:J.h,SyncManager:J.h,TextMetrics:J.h,TreeWalker:J.h,UnderlyingSourceBase:J.h,VRDevice:J.h,VREyeParameters:J.h,VRFieldOfView:J.h,VRPositionState:J.h,ValidityState:J.h,VideoPlaybackQuality:J.h,VideoTrack:J.h,WindowClient:J.h,WorkerConsole:J.h,XPathEvaluator:J.h,XPathExpression:J.h,XPathNSResolver:J.h,XPathResult:J.h,XMLSerializer:J.h,XSLTProcessor:J.h,Bluetooth:J.h,BluetoothAdvertisingData:J.h,BluetoothCharacteristicProperties:J.h,BluetoothRemoteGATTServer:J.h,BluetoothRemoteGATTService:J.h,BluetoothUUID:J.h,Cache:J.h,DOMFileSystemSync:J.h,DirectoryEntrySync:J.h,DirectoryReaderSync:J.h,EntrySync:J.h,FileEntrySync:J.h,FileReaderSync:J.h,FileWriterSync:J.h,HTMLAllCollection:J.h,NFC:J.h,PagePopupController:J.h,Request:J.h,Response:J.h,SubtleCrypto:J.h,USBAlternateInterface:J.h,USBConfiguration:J.h,USBDevice:J.h,USBEndpoint:J.h,USBInTransferResult:J.h,USBInterface:J.h,USBIsochronousInTransferPacket:J.h,USBIsochronousInTransferResult:J.h,USBIsochronousOutTransferPacket:J.h,USBIsochronousOutTransferResult:J.h,USBOutTransferResult:J.h,WebKitCSSMatrix:J.h,Worklet:J.h,WorkletGlobalScope:J.h,IDBCursor:J.h,IDBCursorWithValue:J.h,IDBFactory:J.h,IDBKeyRange:J.h,SVGAngle:J.h,SVGAnimatedAngle:J.h,SVGAnimatedBoolean:J.h,SVGAnimatedEnumeration:J.h,SVGAnimatedInteger:J.h,SVGAnimatedLength:J.h,SVGAnimatedLengthList:J.h,SVGAnimatedNumber:J.h,SVGAnimatedNumberList:J.h,SVGAnimatedPreserveAspectRatio:J.h,SVGAnimatedRect:J.h,SVGAnimatedString:J.h,SVGAnimatedTransformList:J.h,SVGMatrix:J.h,SVGPoint:J.h,SVGPreserveAspectRatio:J.h,SVGRect:J.h,SVGUnitTypes:J.h,AudioListener:J.h,AudioParam:J.h,PeriodicWave:J.h,ANGLEInstancedArrays:J.h,ANGLE_instanced_arrays:J.h,WebGLBuffer:J.h,CHROMIUMSubscribeUniform:J.h,WebGLCompressedTextureASTC:J.h,WebGLCompressedTextureATC:J.h,WEBGL_compressed_texture_atc:J.h,WebGLCompressedTextureETC1:J.h,WEBGL_compressed_texture_etc1:J.h,WebGLCompressedTexturePVRTC:J.h,WEBGL_compressed_texture_pvrtc:J.h,WebGLCompressedTextureS3TC:J.h,WEBGL_compressed_texture_s3tc:J.h,WebGLDebugRendererInfo:J.h,WEBGL_debug_renderer_info:J.h,WebGLDebugShaders:J.h,WEBGL_debug_shaders:J.h,WebGLDepthTexture:J.h,WEBGL_depth_texture:J.h,WebGLDrawBuffers:J.h,WEBGL_draw_buffers:J.h,EXTsRGB:J.h,EXT_sRGB:J.h,EXTBlendMinMax:J.h,EXT_blend_minmax:J.h,EXTColorBufferFloat:J.h,EXTDisjointTimerQuery:J.h,EXTFragDepth:J.h,EXT_frag_depth:J.h,EXTShaderTextureLOD:J.h,EXT_shader_texture_lod:J.h,EXTTextureFilterAnisotropic:J.h,EXT_texture_filter_anisotropic:J.h,WebGLFramebuffer:J.h,WebGLLoseContext:J.h,WebGLExtensionLoseContext:J.h,WEBGL_lose_context:J.h,OESElementIndexUint:J.h,OES_element_index_uint:J.h,OESStandardDerivatives:J.h,OES_standard_derivatives:J.h,OESTextureFloat:J.h,OES_texture_float:J.h,OESTextureFloatLinear:J.h,OES_texture_float_linear:J.h,OESTextureHalfFloat:J.h,OES_texture_half_float:J.h,OESTextureHalfFloatLinear:J.h,OES_texture_half_float_linear:J.h,OESVertexArrayObject:J.h,OES_vertex_array_object:J.h,WebGLProgram:J.h,WebGLQuery:J.h,WebGLRenderbuffer:J.h,WebGLRenderingContext:J.h,WebGLSampler:J.h,WebGLShader:J.h,WebGLShaderPrecisionFormat:J.h,WebGLSync:J.h,WebGLTexture:J.h,WebGLTimerQueryEXT:J.h,WebGLTransformFeedback:J.h,WebGLUniformLocation:J.h,WebGLVertexArrayObject:J.h,WebGLVertexArrayObjectOES:J.h,Database:J.h,SQLError:J.h,SQLResultSet:J.h,SQLTransaction:J.h,ArrayBuffer:H.fg,ArrayBufferView:H.eq,DataView:H.nd,Float32Array:H.ne,Float64Array:H.nf,Int16Array:H.ng,Int32Array:H.nh,Int8Array:H.ni,Uint16Array:H.nj,Uint32Array:H.nk,Uint8ClampedArray:H.jx,CanvasPixelArray:H.jx,Uint8Array:H.fh,HTMLBRElement:W.at,HTMLCanvasElement:W.at,HTMLContentElement:W.at,HTMLDListElement:W.at,HTMLDataListElement:W.at,HTMLDetailsElement:W.at,HTMLDialogElement:W.at,HTMLHRElement:W.at,HTMLHeadElement:W.at,HTMLHeadingElement:W.at,HTMLHtmlElement:W.at,HTMLLIElement:W.at,HTMLLabelElement:W.at,HTMLLegendElement:W.at,HTMLMenuElement:W.at,HTMLMenuItemElement:W.at,HTMLMeterElement:W.at,HTMLModElement:W.at,HTMLOListElement:W.at,HTMLOptGroupElement:W.at,HTMLOptionElement:W.at,HTMLParagraphElement:W.at,HTMLPictureElement:W.at,HTMLPreElement:W.at,HTMLProgressElement:W.at,HTMLQuoteElement:W.at,HTMLShadowElement:W.at,HTMLStyleElement:W.at,HTMLTableCaptionElement:W.at,HTMLTableCellElement:W.at,HTMLTableDataCellElement:W.at,HTMLTableHeaderCellElement:W.at,HTMLTableColElement:W.at,HTMLTableElement:W.at,HTMLTableRowElement:W.at,HTMLTableSectionElement:W.at,HTMLTitleElement:W.at,HTMLUListElement:W.at,HTMLUnknownElement:W.at,HTMLDirectoryElement:W.at,HTMLFontElement:W.at,HTMLFrameElement:W.at,HTMLMarqueeElement:W.at,HTMLElement:W.at,HTMLAnchorElement:W.eO,HTMLAreaElement:W.kp,HTMLAudioElement:W.eR,AudioTrack:W.cK,AudioTrackList:W.kx,HTMLBaseElement:W.kB,Blob:W.eS,HTMLBodyElement:W.kF,HTMLButtonElement:W.eT,CDATASection:W.ec,CharacterData:W.ec,Comment:W.ec,ProcessingInstruction:W.ec,Text:W.ec,Clients:W.kM,CompositorWorker:W.kQ,Credential:W.fU,FederatedCredential:W.fU,PasswordCredential:W.fU,CredentialsContainer:W.kU,CSSFontFaceRule:W.kX,CSSImportRule:W.kY,CSSKeyframeRule:W.fV,MozCSSKeyframeRule:W.fV,WebKitCSSKeyframeRule:W.fV,CSSKeyframesRule:W.fW,MozCSSKeyframesRule:W.fW,WebKitCSSKeyframesRule:W.fW,CSSPageRule:W.kZ,CSSCharsetRule:W.bI,CSSGroupingRule:W.bI,CSSMediaRule:W.bI,CSSNamespaceRule:W.bI,CSSSupportsRule:W.bI,CSSRule:W.bI,CSSStyleDeclaration:W.eW,MSStyleCSSProperties:W.eW,CSS2Properties:W.eW,CSSStyleRule:W.l_,CSSViewportRule:W.l0,DataTransfer:W.l5,DataTransferItem:W.eX,DataTransferItemList:W.ie,HTMLDivElement:W.fX,Document:W.ed,HTMLDocument:W.ed,XMLDocument:W.ed,DocumentFragment:W.ih,ShadowRoot:W.ih,DOMError:W.ii,FileError:W.ii,DOMException:W.l8,DOMRectReadOnly:W.ij,DOMStringList:W.ik,DOMStringMap:W.il,DOMTokenList:W.im,Element:W.dr,HTMLEmbedElement:W.le,DirectoryEntry:W.fZ,Entry:W.fZ,FileEntry:W.fZ,ErrorEvent:W.lk,AnimationEvent:W.T,AnimationPlayerEvent:W.T,ApplicationCacheErrorEvent:W.T,AutocompleteErrorEvent:W.T,BeforeInstallPromptEvent:W.T,BeforeUnloadEvent:W.T,BlobEvent:W.T,ClipboardEvent:W.T,CloseEvent:W.T,CompositionEvent:W.T,CustomEvent:W.T,DeviceLightEvent:W.T,DeviceMotionEvent:W.T,DeviceOrientationEvent:W.T,ExtendableEvent:W.T,ExtendableMessageEvent:W.T,FetchEvent:W.T,FocusEvent:W.T,FontFaceSetLoadEvent:W.T,GamepadEvent:W.T,GeofencingEvent:W.T,HashChangeEvent:W.T,InstallEvent:W.T,KeyboardEvent:W.T,MediaEncryptedEvent:W.T,MediaKeyMessageEvent:W.T,MediaQueryListEvent:W.T,MediaStreamEvent:W.T,MediaStreamTrackEvent:W.T,MessageEvent:W.T,MIDIConnectionEvent:W.T,MIDIMessageEvent:W.T,MouseEvent:W.T,DragEvent:W.T,NotificationEvent:W.T,PageTransitionEvent:W.T,PointerEvent:W.T,PopStateEvent:W.T,PresentationConnectionAvailableEvent:W.T,PresentationConnectionCloseEvent:W.T,ProgressEvent:W.T,PromiseRejectionEvent:W.T,PushEvent:W.T,RelatedEvent:W.T,RTCDataChannelEvent:W.T,RTCDTMFToneChangeEvent:W.T,RTCIceCandidateEvent:W.T,RTCPeerConnectionIceEvent:W.T,SecurityPolicyViolationEvent:W.T,ServicePortConnectEvent:W.T,ServiceWorkerMessageEvent:W.T,SpeechRecognitionEvent:W.T,StorageEvent:W.T,SyncEvent:W.T,TextEvent:W.T,TouchEvent:W.T,TrackEvent:W.T,TransitionEvent:W.T,WebKitTransitionEvent:W.T,UIEvent:W.T,WheelEvent:W.T,ResourceProgressEvent:W.T,USBConnectionEvent:W.T,IDBVersionChangeEvent:W.T,SVGZoomEvent:W.T,AudioProcessingEvent:W.T,OfflineAudioCompletionEvent:W.T,WebGLContextEvent:W.T,Event:W.T,InputEvent:W.T,Animation:W.aG,ApplicationCache:W.aG,DOMApplicationCache:W.aG,OfflineResourceList:W.aG,BatteryManager:W.aG,CanvasCaptureMediaStreamTrack:W.aG,CrossOriginServiceWorkerClient:W.aG,EventSource:W.aG,MediaKeySession:W.aG,MediaQueryList:W.aG,MediaRecorder:W.aG,MediaSource:W.aG,MediaStream:W.aG,MediaStreamTrack:W.aG,MessagePort:W.aG,MIDIAccess:W.aG,NetworkInformation:W.aG,Notification:W.aG,Performance:W.aG,PermissionStatus:W.aG,PresentationAvailability:W.aG,PresentationReceiver:W.aG,PresentationRequest:W.aG,RTCDTMFSender:W.aG,RTCPeerConnection:W.aG,webkitRTCPeerConnection:W.aG,mozRTCPeerConnection:W.aG,ScreenOrientation:W.aG,ServicePortCollection:W.aG,ServiceWorkerContainer:W.aG,ServiceWorkerRegistration:W.aG,SpeechRecognition:W.aG,SpeechSynthesis:W.aG,SpeechSynthesisUtterance:W.aG,WorkerPerformance:W.aG,BluetoothDevice:W.aG,BluetoothRemoteGATTCharacteristic:W.aG,USB:W.aG,EventTarget:W.aG,HTMLFieldSetElement:W.lM,File:W.cf,FileList:W.f3,FileReader:W.lN,DOMFileSystem:W.lO,FileWriter:W.lP,FontFace:W.lS,FontFaceSet:W.lT,FormData:W.lV,HTMLFormElement:W.iB,Gamepad:W.cn,History:W.m4,HTMLOptionsCollection:W.f5,HTMLCollection:W.f5,HTMLFormControlsCollection:W.iD,XMLHttpRequest:W.e1,XMLHttpRequestUpload:W.hg,XMLHttpRequestEventTarget:W.hg,HTMLIFrameElement:W.mc,ImageData:W.hh,HTMLImageElement:W.f7,HTMLInputElement:W.mh,HTMLKeygenElement:W.mG,CalcLength:W.hq,LengthValue:W.hq,SimpleLength:W.hq,HTMLLinkElement:W.hr,Location:W.mY,HTMLMapElement:W.n2,HTMLVideoElement:W.hx,HTMLMediaElement:W.hx,MediaList:W.ju,HTMLMetaElement:W.n7,MIDIOutput:W.n8,MIDIInput:W.hy,MIDIPort:W.hy,MimeType:W.cp,MimeTypeArray:W.jv,Navigator:W.nl,NavigatorUserMediaError:W.nm,Node:W.az,NodeList:W.jy,RadioNodeList:W.jy,HTMLObjectElement:W.np,HTMLOutputElement:W.nu,HTMLParamElement:W.ny,Path2D:W.nA,PerformanceCompositeTiming:W.e4,PerformanceEntry:W.e4,PerformanceMark:W.e4,PerformanceMeasure:W.e4,PerformanceRenderTiming:W.e4,PerformanceResourceTiming:W.e4,Perspective:W.nF,Plugin:W.ch,PluginArray:W.jF,PresentationConnection:W.nK,RTCDataChannel:W.jH,DataChannel:W.jH,HTMLScriptElement:W.fn,HTMLSelectElement:W.jI,ServicePort:W.o8,SharedWorker:W.ob,SharedWorkerGlobalScope:W.oc,HTMLSlotElement:W.od,SourceBuffer:W.cq,SourceBufferList:W.jK,HTMLSourceElement:W.og,HTMLSpanElement:W.hL,SpeechGrammar:W.cr,SpeechGrammarList:W.jL,SpeechRecognitionAlternative:W.fo,SpeechRecognitionError:W.oi,SpeechRecognitionResult:W.cj,SpeechSynthesisEvent:W.oj,SpeechSynthesisVoice:W.ok,Storage:W.op,StylePropertyMap:W.oM,CSSStyleSheet:W.ck,StyleSheet:W.ck,KeywordValue:W.e6,NumberValue:W.e6,PositionValue:W.e6,TransformValue:W.e6,StyleValue:W.e6,HTMLTemplateElement:W.oU,HTMLTextAreaElement:W.hP,TextTrack:W.cP,TextTrackCue:W.cH,VTTCue:W.cH,TextTrackCueList:W.p0,TextTrackList:W.p1,TimeRanges:W.p5,Touch:W.cs,TouchList:W.jP,TrackDefault:W.fs,TrackDefaultList:W.jQ,HTMLTrackElement:W.p9,Matrix:W.e7,Rotation:W.e7,Skew:W.e7,Translation:W.e7,TransformComponent:W.e7,URL:W.pl,URLSearchParams:W.pm,VideoTrackList:W.pq,VTTRegion:W.ft,VTTRegionList:W.jR,WebSocket:W.pv,Window:W.jU,DOMWindow:W.jU,Worker:W.pC,CompositorWorkerGlobalScope:W.eF,DedicatedWorkerGlobalScope:W.eF,ServiceWorkerGlobalScope:W.eF,WorkerGlobalScope:W.eF,Attr:W.fu,ClientRect:W.pT,ClientRectList:W.hX,DOMRectList:W.hX,CSSRuleList:W.k_,DocumentType:W.q_,DOMRect:W.q0,GamepadList:W.k3,HTMLFrameSetElement:W.ql,NamedNodeMap:W.i1,MozNamedAttrMap:W.i1,ServiceWorker:W.qK,SpeechRecognitionResultList:W.k7,StyleSheetList:W.k9,WorkerLocation:W.r_,WorkerNavigator:W.r0,IDBDatabase:P.l6,IDBIndex:P.mf,IDBObjectStore:P.nq,IDBOpenDBRequest:P.hJ,IDBVersionChangeRequest:P.hJ,IDBRequest:P.hJ,IDBTransaction:P.pa,SVGAElement:P.km,SVGAnimateElement:P.eb,SVGAnimateMotionElement:P.eb,SVGAnimateTransformElement:P.eb,SVGAnimationElement:P.eb,SVGSetElement:P.eb,SVGFEBlendElement:P.ln,SVGFEColorMatrixElement:P.lo,SVGFEComponentTransferElement:P.lp,SVGFECompositeElement:P.lq,SVGFEConvolveMatrixElement:P.lr,SVGFEDiffuseLightingElement:P.ls,SVGFEDisplacementMapElement:P.lt,SVGFEFloodElement:P.lu,SVGFEGaussianBlurElement:P.lv,SVGFEImageElement:P.lw,SVGFEMergeElement:P.lx,SVGFEMorphologyElement:P.ly,SVGFEOffsetElement:P.lz,SVGFESpecularLightingElement:P.lA,SVGFETileElement:P.lB,SVGFETurbulenceElement:P.lC,SVGFilterElement:P.lQ,SVGCircleElement:P.co,SVGClipPathElement:P.co,SVGDefsElement:P.co,SVGEllipseElement:P.co,SVGForeignObjectElement:P.co,SVGGElement:P.co,SVGGeometryElement:P.co,SVGLineElement:P.co,SVGPathElement:P.co,SVGPolygonElement:P.co,SVGPolylineElement:P.co,SVGRectElement:P.co,SVGSwitchElement:P.co,SVGGraphicsElement:P.co,SVGImageElement:P.md,SVGLength:P.d3,SVGLengthList:P.mJ,SVGMarkerElement:P.n5,SVGMaskElement:P.n6,SVGNumber:P.d7,SVGNumberList:P.nn,SVGPatternElement:P.nD,SVGPointList:P.nI,SVGScriptElement:P.o5,SVGStringList:P.oK,SVGDescElement:P.cc,SVGDiscardElement:P.cc,SVGFEDistantLightElement:P.cc,SVGFEFuncAElement:P.cc,SVGFEFuncBElement:P.cc,SVGFEFuncGElement:P.cc,SVGFEFuncRElement:P.cc,SVGFEMergeNodeElement:P.cc,SVGFEPointLightElement:P.cc,SVGFESpotLightElement:P.cc,SVGMetadataElement:P.cc,SVGStopElement:P.cc,SVGStyleElement:P.cc,SVGTitleElement:P.cc,SVGComponentTransferFunctionElement:P.cc,SVGElement:P.cc,SVGSVGElement:P.oO,SVGSymbolElement:P.oQ,SVGTSpanElement:P.eA,SVGTextElement:P.eA,SVGTextPositioningElement:P.eA,SVGTextContentElement:P.eA,SVGTextPathElement:P.p_,SVGTransform:P.d9,SVGTransformList:P.pb,SVGUseElement:P.pn,SVGViewElement:P.pr,SVGViewSpec:P.ps,SVGLinearGradientElement:P.i_,SVGRadialGradientElement:P.i_,SVGGradientElement:P.i_,SVGCursorElement:P.qH,SVGFEDropShadowElement:P.qI,SVGMPathElement:P.qJ,AudioBuffer:P.fL,AudioBufferSourceNode:P.eQ,AudioContext:P.fM,webkitAudioContext:P.fM,OfflineAudioContext:P.fM,AnalyserNode:P.bC,RealtimeAnalyserNode:P.bC,AudioDestinationNode:P.bC,BiquadFilterNode:P.bC,ChannelMergerNode:P.bC,AudioChannelMerger:P.bC,ChannelSplitterNode:P.bC,AudioChannelSplitter:P.bC,DelayNode:P.bC,DynamicsCompressorNode:P.bC,GainNode:P.bC,AudioGainNode:P.bC,IIRFilterNode:P.bC,MediaStreamAudioDestinationNode:P.bC,PannerNode:P.bC,AudioPannerNode:P.bC,webkitAudioPannerNode:P.bC,ScriptProcessorNode:P.bC,JavaScriptAudioNode:P.bC,StereoPannerNode:P.bC,WaveShaperNode:P.bC,AudioNode:P.bC,MediaElementAudioSourceNode:P.dZ,MediaStreamAudioSourceNode:P.dZ,OscillatorNode:P.dZ,Oscillator:P.dZ,AudioSourceNode:P.dZ,ConvolverNode:P.kT,WebGLActiveInfo:P.ko,WebGL2RenderingContext:P.nV,WebGL2RenderingContextBase:P.qZ,SQLResultSetRowList:P.jM})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,SyncManager:true,TextMetrics:true,TreeWalker:true,UnderlyingSourceBase:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTitleElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,Clients:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CredentialsContainer:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,HTMLDivElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,FormData:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSourceElement:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,StylePropertyMap:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,HTMLTrackElement:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,URL:true,URLSearchParams:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,AudioSourceNode:false,ConvolverNode:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jw.$nativeSuperclassTag="ArrayBufferView"
H.hB.$nativeSuperclassTag="ArrayBufferView"
H.hD.$nativeSuperclassTag="ArrayBufferView"
H.hz.$nativeSuperclassTag="ArrayBufferView"
H.hC.$nativeSuperclassTag="ArrayBufferView"
H.hE.$nativeSuperclassTag="ArrayBufferView"
H.hA.$nativeSuperclassTag="ArrayBufferView"
W.h_.$nativeSuperclassTag="EventTarget"
W.h2.$nativeSuperclassTag="EventTarget"
W.h0.$nativeSuperclassTag="EventTarget"
W.h3.$nativeSuperclassTag="EventTarget"
W.h1.$nativeSuperclassTag="EventTarget"
W.h4.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.xW(V.vg(),b)},[])
else (function(b){H.xW(V.vg(),b)})([])})})()
//# sourceMappingURL=BioController.dart.js.map
