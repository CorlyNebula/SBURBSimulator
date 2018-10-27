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
a[c]=function(){a[c]=function(){H.HR(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.v0"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.v0"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.v0(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={u2:function u2(a){this.a=a},
ry:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
wW:function(a,b,c,d){var t=new H.p0(a,b,c,[d])
t.eQ(a,b,c,d)
return t},
dz:function(a,b,c,d){if(!!J.aL(a).$isv)return new H.fZ(a,b,[c,d])
return new H.hy(a,b,[c,d])},
jp:function(){return new P.dT("No element")},
wv:function(){return new P.dT("Too few elements")},
jN:function(a,b,c,d){if(c-b<=32)H.Gm(a,b,c,d)
else H.Gl(a,b,c,d)},
Gm:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bd(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cx(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
Gl:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.al(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.al(a3+a4,2)
p=q-t
o=q+t
n=J.bd(a2)
m=n.n(a2,s)
l=n.n(a2,p)
k=n.n(a2,q)
j=n.n(a2,o)
i=n.n(a2,r)
if(J.cx(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.cx(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.cx(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.cx(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cx(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.cx(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.cx(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.cx(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cx(a5.$2(j,i),0)){h=i
i=j
j=h}n.i(a2,s,m)
n.i(a2,q,k)
n.i(a2,r,i)
n.i(a2,p,n.n(a2,a3))
n.i(a2,o,n.n(a2,a4))
g=a3+1
f=a4-1
if(J.ba(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.aL(c)
if(b.S(c,0))continue
if(b.a6(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dd(c)
if(b.aC(c,0)){--f
continue}else{a=f-1
if(b.a6(c,0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.ef(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.cx(a5.$2(d,j),0))for(;!0;)if(J.cx(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.ef(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
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
H.jN(a2,a3,g-2,a5)
H.jN(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.ba(a5.$2(n.n(a2,g),l),0);)++g
for(;J.ba(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.ba(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.ba(a5.$2(d,j),0))for(;!0;)if(J.ba(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.ef(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.jN(a2,g,f,a5)}else H.jN(a2,g,f,a5)},
kV:function kV(a){this.a=a},
v:function v(){},
ex:function ex(){},
p0:function p0(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ey:function ey(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hy:function hy(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fZ:function fZ(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
ju:function ju(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
fi:function fi(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
hS:function hS(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jX:function jX(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iA:function iA(){},
pr:function pr(){},
hO:function hO(){},
kg:function(a,b){var t=a.bo(b)
if(!u.globalState.d.cy)u.globalState.f.bv()
return t},
xX:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.aL(s).$isq)throw H.l(P.dH("Arguments to main must be a List: "+H.D(s)))
u.globalState=new H.qI(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$vU()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.qe(P.u8(null,H.eS),0)
r=P.E
s.z=new H.t(0,null,null,null,null,null,0,[r,H.fz])
s.ch=new H.t(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.qH()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.Ad,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.GG)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a6(null,null,null,r)
p=new H.fp(0,null,!1)
o=new H.fz(s,new H.t(0,null,null,null,null,null,0,[r,H.fp]),q,u.createNewIsolate(),p,new H.dI(H.rO()),new H.dI(H.rO()),!1,!1,[],P.a6(null,null,null,null),null,null,!1,!0,P.a6(null,null,null,null))
q.h(0,0)
o.d7(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fF(a,{func:1,args:[,]}))o.bo(new H.rP(t,a))
else if(H.fF(a,{func:1,args:[,,]}))o.bo(new H.rQ(t,a))
else o.bo(a)
u.globalState.f.bv()},
GG:function(a){var t=P.hu(["command","print","msg",a])
return new H.dE(!0,P.hZ(null,P.E)).ay(t)},
Af:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.Ag()
return},
Ag:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.l(new P.Z("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.l(new P.Z('Cannot extract URI from "'+t+'"'))},
Ad:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eQ(!0,[]).aW(b.data)
s=J.bd(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eQ(!0,[]).aW(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eQ(!0,[]).aW(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.E
j=P.a6(null,null,null,k)
i=new H.fp(0,null,!1)
h=new H.fz(s,new H.t(0,null,null,null,null,null,0,[k,H.fp]),j,u.createNewIsolate(),i,new H.dI(H.rO()),new H.dI(H.rO()),!1,!1,[],P.a6(null,null,null,null),null,null,!1,!0,P.a6(null,null,null,null))
j.h(0,0)
h.d7(0,i)
u.globalState.f.a.aK(0,new H.eS(h,new H.mr(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bv()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fI(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bv()
break
case"close":u.globalState.ch.ak(0,$.$get$vV().n(0,a))
a.terminate()
u.globalState.f.bv()
break
case"log":H.Ac(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hu(["command","print","msg",t])
k=new H.dE(!0,P.hZ(null,P.E)).ay(k)
s.toString
self.postMessage(k)}else P.fG(s.n(t,"msg"))
break
case"error":throw H.l(s.n(t,"msg"))}},
Ac:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hu(["command","log","msg",a])
r=new H.dE(!0,P.hZ(null,P.E)).ay(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.cw(q)
t=H.cv(q)
s=P.lt(t)
throw H.l(s)}},
Ae:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.wJ=$.wJ+("_"+s)
$.wK=$.wK+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fI(f,["spawned",new H.fA(s,r),q,t.r])
r=new H.ms(a,b,c,d,t)
if(e===!0){t.dO(q,q)
u.globalState.f.a.aK(0,new H.eS(t,r,"start isolate"))}else r.$0()},
Gs:function(a,b){var t=new H.pi(!0,!1,null)
t.eR(a,b)
return t},
GZ:function(a){return new H.eQ(!0,[]).aW(new H.dE(!1,P.hZ(null,P.E)).ay(a))},
rP:function rP(a,b){this.a=a
this.b=b},
rQ:function rQ(a,b){this.a=a
this.b=b},
qI:function qI(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
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
fz:function fz(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
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
qD:function qD(a,b){this.a=a
this.b=b},
qe:function qe(a,b){this.a=a
this.b=b},
qf:function qf(a){this.a=a},
eS:function eS(a,b,c){this.a=a
this.b=b
this.c=c},
qH:function qH(){},
mr:function mr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ms:function ms(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
q1:function q1(){},
fA:function fA(b,a){this.b=b
this.a=a},
qK:function qK(a,b){this.a=a
this.b=b},
i2:function i2(b,c,a){this.b=b
this.c=c
this.a=a},
fp:function fp(a,b,c){this.a=a
this.b=b
this.c=c},
pi:function pi(a,b,c){this.a=a
this.b=b
this.c=c},
pj:function pj(a,b){this.a=a
this.b=b},
pk:function pk(a,b){this.a=a
this.b=b},
dI:function dI(a){this.a=a},
dE:function dE(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.b=b},
zi:function(){throw H.l(new P.Z("Cannot modify unmodifiable Map"))},
Hw:function(a){return u.types[a]},
xR:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.aL(a).$isaT},
D:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cL(a)
if(typeof t!=="string")throw H.l(H.bu(a))
return t},
FT:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.o6(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
eB:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
ur:function(a,b){if(b==null)throw H.l(new P.bD(a,null,null))
return b.$1(a)},
dl:function(a,b,c){var t,s,r,q,p,o
H.xK(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.ur(a,c)
if(3>=t.length)return H.w(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.ur(a,c)}if(b<2||b>36)throw H.l(P.bG(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a7(q,o)|32)>r)return H.ur(a,c)}return parseInt(a,b)},
wI:function(a,b){return b.$1(a)},
wL:function(a,b){var t,s
H.xK(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.wI(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.kt(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.wI(a,b)}return t},
o0:function(a){var t,s,r,q,p,o,n,m
t=J.aL(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.N||!!J.aL(a).$iseM){p=C.v(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a7(q,0)===36)q=C.c.W(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.rI(H.kl(a),0,null),u.mangledGlobalNames)},
o_:function(a){return"Instance of '"+H.o0(a)+"'"},
Fx:function(){if(!!self.location)return self.location.href
return},
wH:function(a){var t,s,r,q,p
t=J.cn(a)
if(typeof t!=="number")return t.er()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
FC:function(a){var t,s,r,q
t=H.a([],[P.E])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bV)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.l(H.bu(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.aU(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.l(H.bu(q))}return H.wH(t)},
wN:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bV)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.l(H.bu(q))
if(q<0)throw H.l(H.bu(q))
if(q>65535)return H.FC(a)}return H.wH(a)},
FD:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.er()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hJ:function(a){var t
if(typeof a!=="number")return H.a9(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.aU(t,10))>>>0,56320|t&1023)}}throw H.l(P.bG(a,0,1114111,null,null))},
FE:function(a,b,c,d,e,f,g,h){var t,s
H.ee(a)
H.ee(b)
H.ee(c)
H.ee(d)
H.ee(e)
H.ee(f)
t=J.rS(b,1)
if(typeof a!=="number")return H.a9(a)
if(0<=a&&a<100){a+=400
t=J.rS(t,4800)}s=h?Date.UTC(a,t,c,d,e,f,g):new Date(a,t,c,d,e,f,g).valueOf()
if(isNaN(s)||s<-864e13||s>864e13)return
return s},
cX:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ut:function(a){return a.b?H.cX(a).getUTCFullYear()+0:H.cX(a).getFullYear()+0},
jI:function(a){return a.b?H.cX(a).getUTCMonth()+1:H.cX(a).getMonth()+1},
jH:function(a){return a.b?H.cX(a).getUTCDate()+0:H.cX(a).getDate()+0},
Fy:function(a){return a.b?H.cX(a).getUTCHours()+0:H.cX(a).getHours()+0},
FA:function(a){return a.b?H.cX(a).getUTCMinutes()+0:H.cX(a).getMinutes()+0},
FB:function(a){return a.b?H.cX(a).getUTCSeconds()+0:H.cX(a).getSeconds()+0},
Fz:function(a){return a.b?H.cX(a).getUTCMilliseconds()+0:H.cX(a).getMilliseconds()+0},
us:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.l(H.bu(a))
return a[b]},
wM:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.l(H.bu(a))
a[b]=c},
a9:function(a){throw H.l(H.bu(a))},
w:function(a,b){if(a==null)J.cn(a)
throw H.l(H.c5(a,b))},
c5:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.d_(!0,b,"index",null)
t=J.cn(a)
if(!(b<0)){if(typeof t!=="number")return H.a9(t)
s=b>=t}else s=!0
if(s)return P.by(b,a,"index",null,t)
return P.jK(b,"index",null)},
Hn:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.d_(!0,a,"start",null)
if(a<0||a>c)return new P.eF(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.d_(!0,b,"end",null)
if(b<a||b>c)return new P.eF(a,c,!0,b,"end","Invalid value")}return new P.d_(!0,b,"end",null)},
bu:function(a){return new P.d_(!0,a,null,null)},
ki:function(a){if(typeof a!=="number")throw H.l(H.bu(a))
return a},
ee:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.l(H.bu(a))
return a},
xK:function(a){if(typeof a!=="string")throw H.l(H.bu(a))
return a},
l:function(a){var t
if(a==null)a=new P.fm()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.xZ})
t.name=""}else t.toString=H.xZ
return t},
xZ:function(){return J.cL(this.dartException)},
bb:function(a){throw H.l(a)},
bV:function(a){throw H.l(new P.bN(a))},
dX:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.po(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
pp:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
x3:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
u4:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.mO(a,s,t?null:b.receiver)},
cw:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.rR(a)
if(a==null)return
if(a instanceof H.h6)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.aU(r,16)&8191)===10)switch(q){case 438:return t.$1(H.u4(H.D(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.D(s)+" (Error "+q+")"
return t.$1(new H.jA(p,null))}}if(a instanceof TypeError){o=$.$get$wY()
n=$.$get$wZ()
m=$.$get$x_()
l=$.$get$x0()
k=$.$get$x4()
j=$.$get$x5()
i=$.$get$x2()
$.$get$x1()
h=$.$get$x7()
g=$.$get$x6()
f=o.aF(s)
if(f!=null)return t.$1(H.u4(s,f))
else{f=n.aF(s)
if(f!=null){f.method="call"
return t.$1(H.u4(s,f))}else{f=m.aF(s)
if(f==null){f=l.aF(s)
if(f==null){f=k.aF(s)
if(f==null){f=j.aF(s)
if(f==null){f=i.aF(s)
if(f==null){f=l.aF(s)
if(f==null){f=h.aF(s)
if(f==null){f=g.aF(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jA(s,f==null?null:f.method))}}return t.$1(new H.pq(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.jR()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.d_(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.jR()
return a},
cv:function(a){var t
if(a instanceof H.h6)return a.b
if(a==null)return new H.kc(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.kc(a,null)},
HG:function(a){if(a==null||typeof a!='object')return J.dG(a)
else return H.eB(a)},
xO:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
HB:function(a,b,c,d,e,f,g){switch(c){case 0:return H.kg(b,new H.rD(a))
case 1:return H.kg(b,new H.rE(a,d))
case 2:return H.kg(b,new H.rF(a,d,e))
case 3:return H.kg(b,new H.rG(a,d,e,f))
case 4:return H.kg(b,new H.rH(a,d,e,f,g))}throw H.l(P.lt("Unsupported number of arguments for wrapped closure"))},
dq:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.HB)
a.$identity=t
return t},
ze:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.aL(c).$isq){t.$reflectionInfo=c
r=H.FT(t).r}else r=c
q=d?Object.create(new H.oB().constructor.prototype):Object.create(new H.fP(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dJ
$.dJ=J.e1(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.vs(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.Hw,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.vn:H.rY
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.l("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.vs(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
zb:function(a,b,c,d){var t=H.rY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
vs:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.zd(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.zb(s,!q,t,b)
if(s===0){q=$.dJ
$.dJ=J.e1(q,1)
o="self"+H.D(q)
q="return function(){var "+o+" = this."
p=$.fQ
if(p==null){p=H.kN("self")
$.fQ=p}return new Function(q+H.D(p)+";return "+o+"."+H.D(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dJ
$.dJ=J.e1(q,1)
n+=H.D(q)
q="return function("+n+"){return this."
p=$.fQ
if(p==null){p=H.kN("self")
$.fQ=p}return new Function(q+H.D(p)+"."+H.D(t)+"("+n+");}")()},
zc:function(a,b,c,d){var t,s
t=H.rY
s=H.vn
switch(b?-1:a){case 0:throw H.l(new H.oc("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
zd:function(a,b){var t,s,r,q,p,o,n,m
t=H.yV()
s=$.vm
if(s==null){s=H.kN("receiver")
$.vm=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.zc(q,!o,r,b)
if(q===1){s="return function(){return this."+H.D(t)+"."+H.D(r)+"(this."+H.D(s)+");"
o=$.dJ
$.dJ=J.e1(o,1)
return new Function(s+H.D(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.D(t)+"."+H.D(r)+"(this."+H.D(s)+", "+m+");"
o=$.dJ
$.dJ=J.e1(o,1)
return new Function(s+H.D(o)+"}")()},
v0:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.aL(c).$isq){c.fixed$length=Array
t=c}else t=c
return H.ze(a,b,t,!!d,e,f)},
rY:function(a){return a.a},
vn:function(a){return a.c},
yV:function(){var t=$.fQ
if(t==null){t=H.kN("self")
$.fQ=t}return t},
kN:function(a){var t,s,r,q,p
t=new H.fP("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
HJ:function(a,b){var t=J.bd(b)
throw H.l(H.vp(H.o0(a),t.M(b,3,t.gm(b))))},
kn:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.aL(a)[b]
else t=!0
if(t)return a
H.HJ(a,b)},
xN:function(a){var t=J.aL(a)
return"$S" in t?t.$S():null},
fF:function(a,b){var t
if(a==null)return!1
t=H.xN(a)
return t==null?!1:H.v3(t,b)},
vp:function(a,b){return new H.kS("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
HR:function(a){throw H.l(new P.la(a))},
rO:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
xP:function(a){return u.getIsolateTag(a)},
c_:function(a){return new H.dY(a,null)},
a:function(a,b){a.$ti=b
return a},
kl:function(a){if(a==null)return
return a.$ti},
xQ:function(a,b){return H.v6(a["$as"+H.D(b)],H.kl(a))},
aU:function(a,b,c){var t=H.xQ(a,b)
return t==null?null:t[c]},
O:function(a,b){var t=H.kl(a)
return t==null?null:t[b]},
dF:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.rI(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.D(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dF(t,b)
return H.H3(a,b)}return"unknown-reified-type"},
H3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dF(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dF(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dF(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.Hu(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dF(l[j],b)+(" "+H.D(j))}q+="}"}return"("+q+") => "+t},
rI:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.cb("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.O=p+", "
o=a[s]
if(o!=null)q=!1
p=t.O+=H.dF(o,c)}return q?"":"<"+t.D(0)+">"},
km:function(a){var t,s
if(a instanceof H.f_){t=H.xN(a)
if(t!=null)return H.dF(t,null)}s=J.aL(a).constructor.builtin$cls
if(a==null)return s
return s+H.rI(a.$ti,0,null)},
v6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
e0:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kl(a)
s=J.aL(a)
if(s[b]==null)return!1
return H.xI(H.v6(s[d],t),c)},
HQ:function(a,b,c,d){if(a==null)return a
if(H.e0(a,b,c,d))return a
throw H.l(H.vp(H.o0(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.rI(c,0,null),u.mangledGlobalNames)))},
xI:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.cZ(a[s],b[s]))return!1
return!0},
eU:function(a,b,c){return a.apply(b,H.xQ(b,c))},
Hj:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ad"||b.builtin$cls==="d6"
if(b==null)return!0
t=H.kl(a)
a=J.aL(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.v3(r.apply(a,null),b)}return H.cZ(s,b)},
cZ:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="d6")return!0
if('func' in b)return H.v3(a,b)
if('func' in a)return b.builtin$cls==="HX"||b.builtin$cls==="ad"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dF(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.xI(H.v6(o,t),r)},
xH:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.cZ(t,p)||H.cZ(p,t)))return!1}return!0},
Ha:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.cZ(p,o)||H.cZ(o,p)))return!1}return!0},
v3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.cZ(t,s)||H.cZ(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.xH(r,q,!1))return!1
if(!H.xH(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.cZ(i,h)||H.cZ(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.cZ(i,h)||H.cZ(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.cZ(i,h)||H.cZ(h,i)))return!1}}return H.Ha(a.named,b.named)},
I8:function(a){var t=$.v1
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
I7:function(a){return H.eB(a)},
I6:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
HC:function(a){var t,s,r,q,p,o
t=$.v1.$1(a)
s=$.rv[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rC[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.xG.$2(a,t)
if(t!=null){s=$.rv[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rC[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.v4(r)
$.rv[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.rC[t]=r
return r}if(p==="-"){o=H.v4(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.xT(a,r)
if(p==="*")throw H.l(new P.eL(t))
if(u.leafTags[t]===true){o=H.v4(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.xT(a,r)},
xT:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.rK(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
v4:function(a){return J.rK(a,!1,null,!!a.$isaT)},
HE:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.rK(t,!1,null,!!t.$isaT)
else return J.rK(t,c,null,null)},
Hz:function(){if(!0===$.v2)return
$.v2=!0
H.HA()},
HA:function(){var t,s,r,q,p,o,n,m
$.rv=Object.create(null)
$.rC=Object.create(null)
H.Hy()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.xU.$1(p)
if(o!=null){n=H.HE(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
Hy:function(){var t,s,r,q,p,o,n
t=C.O()
t=H.fE(C.P,H.fE(C.Q,H.fE(C.u,H.fE(C.u,H.fE(C.S,H.fE(C.R,H.fE(C.T(C.v),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.v1=new H.rz(p)
$.xG=new H.rA(o)
$.xU=new H.rB(n)},
fE:function(a,b){return a(b)||b},
u_:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.l(new P.bD("Illegal RegExp pattern ("+String(q)+")",a,null))},
HO:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
xY:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hq){q=b.gdv()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.bb(H.bu(b))
throw H.l("String.replaceAll(Pattern) UNIMPLEMENTED")}},
H8:function(a){return a},
HP:function(a,b,c,d){var t,s,r,q,p,o
for(t=b.aV(0,a),t=new H.k1(t.a,t.b,t.c,null),s=0,r="";t.J();){q=t.d
p=q.b
o=p.index
r=r+H.D(H.xx().$1(C.c.M(a,s,o)))+H.D(c.$1(q))
s=o+p[0].length}t=r+H.D(H.xx().$1(C.c.W(a,s)))
return t.charCodeAt(0)==0?t:t},
kY:function kY(){},
kZ:function kZ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
o6:function o6(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
po:function po(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jA:function jA(a,b){this.a=a
this.b=b},
mO:function mO(a,b,c){this.a=a
this.b=b
this.c=c},
pq:function pq(a){this.a=a},
h6:function h6(a,b){this.a=a
this.b=b},
rR:function rR(a){this.a=a},
kc:function kc(a,b){this.a=a
this.b=b},
rD:function rD(a){this.a=a},
rE:function rE(a,b){this.a=a
this.b=b},
rF:function rF(a,b,c){this.a=a
this.b=b
this.c=c},
rG:function rG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rH:function rH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f_:function f_(){},
p5:function p5(){},
oB:function oB(){},
fP:function fP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kS:function kS(a){this.a=a},
oc:function oc(a){this.a=a},
dY:function dY(a,b){this.a=a
this.b=b},
t:function t(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
mN:function mN(a){this.a=a},
mM:function mM(a){this.a=a},
mY:function mY(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mZ:function mZ(a,$ti){this.a=a
this.$ti=$ti},
n_:function n_(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rz:function rz(a){this.a=a},
rA:function rA(a){this.a=a},
rB:function rB(a){this.a=a},
hq:function hq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i_:function i_(a,b){this.a=a
this.b=b},
pX:function pX(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
r_:function r_(a,b,c){this.a=a
this.b=b
this.c=c},
r0:function r0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cA:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.l(P.dH("Invalid length "+H.D(a)))
return a},
xu:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.dH("Invalid view offsetInBytes "+H.D(b)))},
xw:function(a){return a},
Fv:function(a){return new Int8Array(H.xw(a))},
cP:function(a,b,c){H.xu(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
GY:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aC()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.l(H.Hn(a,b,c))
return b},
fk:function fk(){},
eA:function eA(){},
nq:function nq(){},
jx:function jx(){},
hC:function hC(){},
hE:function hE(){},
hG:function hG(){},
hD:function hD(){},
hF:function hF(){},
hH:function hH(){},
nr:function nr(){},
ns:function ns(){},
nt:function nt(){},
nu:function nu(){},
nv:function nv(){},
nw:function nw(){},
nx:function nx(){},
jy:function jy(){},
fl:function fl(){},
Hu:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
HI:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
aL:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.js.prototype
return J.jr.prototype}if(typeof a=="string")return J.ev.prototype
if(a==null)return J.mK.prototype
if(typeof a=="boolean")return J.mJ.prototype
if(a.constructor==Array)return J.eu.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ew.prototype
return a}if(a instanceof P.ad)return a
return J.rw(a)},
rK:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
rw:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.v2==null){H.Hz()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.l(new P.eL("Return interceptor for "+H.D(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$u3()]
if(p!=null)return p
p=H.HC(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.F
if(s===Object.prototype)return C.F
if(typeof q=="function"){Object.defineProperty(q,$.$get$u3(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
ww:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Fa:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a7(a,b)
if(s!==32&&s!==13&&!J.ww(s))break;++b}return b},
tZ:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.Z(a,t)
if(s!==32&&s!==13&&!J.ww(s))break}return b},
bd:function(a){if(typeof a=="string")return J.ev.prototype
if(a==null)return a
if(a.constructor==Array)return J.eu.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ew.prototype
return a}if(a instanceof P.ad)return a
return J.rw(a)},
dr:function(a){if(a==null)return a
if(a.constructor==Array)return J.eu.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ew.prototype
return a}if(a instanceof P.ad)return a
return J.rw(a)},
dd:function(a){if(typeof a=="number")return J.fh.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eM.prototype
return a},
kk:function(a){if(typeof a=="number")return J.fh.prototype
if(typeof a=="string")return J.ev.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eM.prototype
return a},
de:function(a){if(typeof a=="string")return J.ev.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eM.prototype
return a},
bJ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ew.prototype
return a}if(a instanceof P.ad)return a
return J.rw(a)},
e1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kk(a).U(a,b)},
ba:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aL(a).S(a,b)},
v7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dd(a).at(a,b)},
cx:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dd(a).aC(a,b)},
ef:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dd(a).a6(a,b)},
v8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kk(a).an(a,b)},
rS:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.dd(a).V(a,b)},
i6:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.xR(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bd(a).n(a,b)},
kp:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.xR(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dr(a).i(a,b,c)},
y_:function(a,b){return J.dr(a).h(a,b)},
y0:function(a,b,c,d){return J.bJ(a).fM(a,b,c,d)},
y1:function(a,b){return J.de(a).aV(a,b)},
e2:function(a,b){return J.bJ(a).fO(a,b)},
v9:function(a){return J.bJ(a).fQ(a)},
y2:function(a,b,c){return J.dd(a).ae(a,b,c)},
y3:function(a,b){return J.kk(a).av(a,b)},
y4:function(a,b){return J.bJ(a).aA(a,b)},
y5:function(a,b){return J.bd(a).aj(a,b)},
kq:function(a,b,c){return J.bd(a).dS(a,b,c)},
y6:function(a,b){return J.bJ(a).h_(a,b)},
va:function(a,b){return J.dr(a).T(a,b)},
y7:function(a,b,c,d){return J.dr(a).bS(a,b,c,d)},
kr:function(a){return J.dd(a).am(a)},
y8:function(a,b){return J.dr(a).ac(a,b)},
vb:function(a){return J.bJ(a).gdQ(a)},
y9:function(a){return J.bJ(a).gbn(a)},
fH:function(a){return J.bJ(a).gas(a)},
ya:function(a){return J.bJ(a).gcz(a)},
dG:function(a){return J.aL(a).ga8(a)},
rT:function(a){return J.bd(a).gX(a)},
vc:function(a){return J.bJ(a).ga_(a)},
df:function(a){return J.dr(a).ga0(a)},
cn:function(a){return J.bd(a).gm(a)},
yb:function(a){return J.bJ(a).ghO(a)},
yc:function(a){return J.bJ(a).ghP(a)},
vd:function(a){return J.aL(a).gad(a)},
rU:function(a){return J.bJ(a).gaJ(a)},
yd:function(a,b){return J.bJ(a).by(a,b)},
ye:function(a,b){return J.bd(a).be(a,b)},
ve:function(a,b,c,d,e){return J.bJ(a).cB(a,b,c,d,e)},
vf:function(a,b){return J.dr(a).aw(a,b)},
yf:function(a,b,c){return J.de(a).e8(a,b,c)},
vg:function(a,b){return J.bJ(a).hA(a,b)},
yg:function(a,b,c,d){return J.bJ(a).hL(a,b,c,d)},
ks:function(a,b,c){return J.de(a).cP(a,b,c)},
yh:function(a,b,c){return J.de(a).hN(a,b,c)},
fI:function(a,b){return J.bJ(a).b4(a,b)},
vh:function(a,b){return J.bJ(a).sbn(a,b)},
yi:function(a,b){return J.dr(a).cZ(a,b)},
e3:function(a,b){return J.de(a).eE(a,b)},
yj:function(a,b){return J.de(a).W(a,b)},
vi:function(a){return J.dd(a).l(a)},
yk:function(a){return J.dr(a).ap(a)},
yl:function(a,b){return J.dd(a).bf(a,b)},
cL:function(a){return J.aL(a).D(a)},
ym:function(a){return J.de(a).hU(a)},
kt:function(a){return J.de(a).bg(a)},
yn:function(a){return J.de(a).ek(a)},
j:function j(){},
mJ:function mJ(){},
mK:function mK(){},
hr:function hr(){},
nU:function nU(){},
eM:function eM(){},
ew:function ew(){},
eu:function eu($ti){this.$ti=$ti},
u1:function u1($ti){this.$ti=$ti},
i7:function i7(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fh:function fh(){},
js:function js(){},
jr:function jr(){},
ev:function ev(){}},P={
Gx:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.Hb()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dq(new P.pZ(t),1)).observe(s,{childList:true})
return new P.pY(t,s,r)}else if(self.setImmediate!=null)return P.Hc()
return P.Hd()},
Gy:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dq(new P.q_(a),0))},
Gz:function(a){++u.globalState.f.b
self.setImmediate(H.dq(new P.q0(a),0))},
GA:function(a){P.uM(C.p,a)},
bm:function(a,b){P.xs(null,a)
return b.ghe()},
cm:function(a,b){P.xs(a,b)},
bl:function(a,b){J.y4(b,a)},
bk:function(a,b){b.ct(H.cw(a),H.cv(a))},
xs:function(a,b){var t,s,r,q
t=new P.re(b)
s=new P.rf(b)
r=J.aL(a)
if(!!r.$isbj)a.cn(t,s)
else if(!!r.$iscF)a.bY(t,s)
else{q=new P.bj(0,$.aD,null,[null])
q.a=4
q.c=a
q.cn(t,null)}},
bn:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.aD.toString
return new P.rp(t)},
xy:function(a,b){if(H.fF(a,{func:1,args:[P.d6,P.d6]})){b.toString
return a}else{b.toString
return a}},
zV:function(a,b){var t=new P.bj(0,$.aD,null,[b])
P.wX(C.p,new P.rr(a,t))
return t},
vS:function(a,b,c){var t
if(a==null)a=new P.fm()
t=$.aD
if(t!==C.e)t.toString
t=new P.bj(0,t,null,[c])
t.d9(a,b)
return t},
zW:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bj(0,$.aD,null,[P.q])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.m3(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.bV)(a),++l){q=a[l]
p=t.b
q.bY(new P.m2(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bj(0,$.aD,null,[null])
m.d8(C.X)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.cw(j)
n=H.cv(j)
if(t.b===0||!1)return P.vS(o,n,null)
else{t.c=o
t.d=n}}return s},
bi:function(a){return new P.ke(new P.bj(0,$.aD,null,[a]),[a])},
xv:function(a,b,c){$.aD.toString
a.ao(b,c)},
GD:function(a,b){var t=new P.bj(0,$.aD,null,[b])
t.a=4
t.c=a
return t},
xk:function(a,b){var t,s,r
b.a=1
try{a.bY(new P.qo(b),new P.qp(b))}catch(r){t=H.cw(r)
s=H.cv(r)
P.xV(new P.qq(b,t,s))}},
qn:function(a,b){var t,s,r
for(;a.gfq();)a=a.c
t=a.gce()
s=b.c
if(t){b.c=null
r=b.bI(s)
b.a=a.a
b.c=a.c
P.fy(b,r)}else{b.a=2
b.c=a
a.dB(s)}},
fy:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fH(p)
n=p.gaI()
s.toString
P.kh(null,null,s,o,n)}return}for(;b.gci()!=null;b=m){m=b.a
b.a=null
P.fy(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gdZ()||b.gdY()){k=b.gfK()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fH(p)
n=p.gaI()
s.toString
P.kh(null,null,s,o,n)
return}j=$.aD
if(j==null?k!=null:j!==k)$.aD=k
else j=null
if(b.gdY())new P.qv(t,r,q,b).$0()
else if(s){if(b.gdZ())new P.qu(r,b,l).$0()}else if(b.ghl())new P.qt(t,r,b).$0()
if(j!=null)$.aD=j
s=r.b
if(!!J.aL(s).$iscF){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bI(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.qn(s,i)
return}}i=b.b
b=i.bH()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
H5:function(){var t,s
for(;t=$.fC,t!=null;){$.i4=null
s=t.b
$.fC=s
if(s==null)$.i3=null
t.a.$0()}},
H7:function(){$.uZ=!0
try{P.H5()}finally{$.i4=null
$.uZ=!1
if($.fC!=null)$.$get$uV().$1(P.xJ())}},
xF:function(a){var t=new P.k2(a,null)
if($.fC==null){$.i3=t
$.fC=t
if(!$.uZ)$.$get$uV().$1(P.xJ())}else{$.i3.b=t
$.i3=t}},
H6:function(a){var t,s,r
t=$.fC
if(t==null){P.xF(a)
$.i4=$.i3
return}s=new P.k2(a,null)
r=$.i4
if(r==null){s.b=t
$.i4=s
$.fC=s}else{s.b=r.b
r.b=s
$.i4=s
if(s.b==null)$.i3=s}},
xV:function(a){var t=$.aD
if(C.e===t){P.fD(null,null,C.e,a)
return}t.toString
P.fD(null,null,t,t.cs(a,!0))},
I2:function(a,b){return new P.qZ(null,a,!1,[b])},
xC:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.cw(o)
s=H.cv(o)
$.aD.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fH(r)
q=n
p=r.gaI()
c.$2(q,p)}}},
GX:function(a,b,c,d){var t=a.bP(0)
if(!!J.aL(t).$iscF&&t!==$.$get$hg())t.c0(new P.rh(b,c,d))
else b.ao(c,d)},
xt:function(a,b){return new P.rg(a,b)},
uY:function(a,b,c){var t=a.bP(0)
if(!!J.aL(t).$iscF&&t!==$.$get$hg())t.c0(new P.ri(b,c))
else b.aE(c)},
GC:function(a,b,c,d,e,f,g){var t,s
t=$.aD
s=e?1:0
s=new P.hX(a,null,null,null,null,t,s,null,null,[f,g])
s.eU(b,c,d,e,g)
s.eX(a,b,c,d,e,f,g)
return s},
GW:function(a,b,c){$.aD.toString
a.bB(b,c)},
wX:function(a,b){var t=$.aD
if(t===C.e){t.toString
return P.uM(a,b)}return P.uM(a,t.cs(b,!0))},
uM:function(a,b){var t=C.a.al(a.a,1000)
return H.Gs(t<0?0:t,b)},
kh:function(a,b,c,d,e){var t={}
t.a=d
P.H6(new P.ro(t,e))},
xz:function(a,b,c,d){var t,s
s=$.aD
if(s===c)return d.$0()
$.aD=c
t=s
try{s=d.$0()
return s}finally{$.aD=t}},
xB:function(a,b,c,d,e){var t,s
s=$.aD
if(s===c)return d.$1(e)
$.aD=c
t=s
try{s=d.$1(e)
return s}finally{$.aD=t}},
xA:function(a,b,c,d,e,f){var t,s
s=$.aD
if(s===c)return d.$2(e,f)
$.aD=c
t=s
try{s=d.$2(e,f)
return s}finally{$.aD=t}},
fD:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cs(d,!(!t||!1))
P.xF(d)},
pZ:function pZ(a){this.a=a},
pY:function pY(a,b,c){this.a=a
this.b=b
this.c=c},
q_:function q_(a){this.a=a},
q0:function q0(a){this.a=a},
re:function re(a){this.a=a},
rf:function rf(a){this.a=a},
rp:function rp(a){this.a=a},
cF:function cF(){},
rr:function rr(a,b){this.a=a
this.b=b},
m3:function m3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m2:function m2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f0:function f0(){},
k3:function k3(){},
e_:function e_(a,$ti){this.a=a
this.$ti=$ti},
ke:function ke(a,$ti){this.a=a
this.$ti=$ti},
k7:function k7(a,b,c,d,e,$ti){var _=this
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
qk:function qk(a,b){this.a=a
this.b=b},
qs:function qs(a,b){this.a=a
this.b=b},
qo:function qo(a){this.a=a},
qp:function qp(a){this.a=a},
qq:function qq(a,b,c){this.a=a
this.b=b
this.c=c},
qm:function qm(a,b){this.a=a
this.b=b},
qr:function qr(a,b){this.a=a
this.b=b},
ql:function ql(a,b,c){this.a=a
this.b=b
this.c=c},
qv:function qv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qw:function qw(a){this.a=a},
qu:function qu(a,b,c){this.a=a
this.b=b
this.c=c},
qt:function qt(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a,b){this.a=a
this.b=b},
dn:function dn(){},
oI:function oI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oG:function oG(a,b){this.a=a
this.b=b},
oH:function oH(a,b){this.a=a
this.b=b},
oJ:function oJ(a){this.a=a},
oO:function oO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oM:function oM(a,b){this.a=a
this.b=b},
oN:function oN(){},
oP:function oP(a){this.a=a},
oS:function oS(a){this.a=a},
oT:function oT(a,b){this.a=a
this.b=b},
oQ:function oQ(a,b){this.a=a
this.b=b},
oR:function oR(a){this.a=a},
oU:function oU(a,b){this.a=a
this.b=b},
oV:function oV(a,b){this.a=a
this.b=b},
oK:function oK(a,b,c){this.a=a
this.b=b
this.c=c},
oL:function oL(a){this.a=a},
oF:function oF(){},
dp:function dp(){},
q3:function q3(a,b,c){this.a=a
this.b=b
this.c=c},
q2:function q2(a){this.a=a},
k5:function k5(){},
q8:function q8(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qa:function qa(b,c,a){this.b=b
this.c=c
this.a=a},
q9:function q9(){},
qL:function qL(){},
qM:function qM(a,b){this.a=a
this.b=b},
qY:function qY(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
qZ:function qZ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
rh:function rh(a,b,c){this.a=a
this.b=b
this.c=c},
rg:function rg(a,b){this.a=a
this.b=b},
ri:function ri(a,b){this.a=a
this.b=b},
hW:function hW(){},
hX:function hX(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
qJ:function qJ(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eW:function eW(a,b){this.a=a
this.b=b},
rd:function rd(){},
ro:function ro(a,b){this.a=a
this.b=b},
qP:function qP(){},
qQ:function qQ(a,b){this.a=a
this.b=b},
qR:function qR(a,b){this.a=a
this.b=b},
qS:function qS(a,b){this.a=a
this.b=b},
GE:function(a,b){var t=a[b]
return t===a?null:t},
uX:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
uW:function(){var t=Object.create(null)
P.uX(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
wx:function(a,b,c){return H.xO(a,new H.t(0,null,null,null,null,null,0,[b,c]))},
cG:function(a,b){return new H.t(0,null,null,null,null,null,0,[a,b])},
n0:function(){return new H.t(0,null,null,null,null,null,0,[null,null])},
hu:function(a){return H.xO(a,new H.t(0,null,null,null,null,null,0,[null,null]))},
hZ:function(a,b){return new P.ka(0,null,null,null,null,null,0,[a,b])},
GF:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
p:function(a,b,c,d,e){return new P.qy(0,null,null,null,null,[d,e])},
tW:function(a,b,c){var t,s
if(P.v_(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$i5()
s.push(a)
try{P.H4(a,t)}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=P.wV(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jo:function(a,b,c){var t,s,r
if(P.v_(a))return b+"..."+c
t=new P.cb(b)
s=$.$get$i5()
s.push(a)
try{r=t
r.O=P.wV(r.gO(),a,", ")}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=t
s.O=s.gO()+c
s=t.gO()
return s.charCodeAt(0)==0?s:s},
v_:function(a){var t,s
for(t=0;s=$.$get$i5(),t<s.length;++t)if(a===s[t])return!0
return!1},
H4:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.df(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.J())return
q=H.D(t.gR())
b.push(q)
s+=q.length+2;++r}if(!t.J()){if(r<=5)return
if(0>=b.length)return H.w(b,-1)
p=b.pop()
if(0>=b.length)return H.w(b,-1)
o=b.pop()}else{n=t.gR();++r
if(!t.J()){if(r<=4){b.push(H.D(n))
return}p=H.D(n)
if(0>=b.length)return H.w(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gR();++r
for(;t.J();n=m,m=l){l=t.gR();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.w(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.D(n)
p=H.D(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.w(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
a6:function(a,b,c,d){return new P.k9(0,null,null,null,null,null,0,[d])},
u7:function(a,b){var t,s
t=P.a6(null,null,null,b)
for(s=J.df(a);s.J();)t.h(0,s.gR())
return t},
wC:function(a){var t,s,r
t={}
if(P.v_(a))return"{...}"
s=new P.cb("")
try{$.$get$i5().push(a)
r=s
r.O=r.gO()+"{"
t.a=!0
a.ac(0,new P.nf(t,s))
t=s
t.O=t.gO()+"}"}finally{t=$.$get$i5()
if(0>=t.length)return H.w(t,-1)
t.pop()}t=s.gO()
return t.charCodeAt(0)==0?t:t},
u8:function(a,b){var t=new P.n1(null,0,0,0,[b])
t.eO(a,b)
return t},
qy:function qy(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qB:function qB(a){this.a=a},
qz:function qz(a,$ti){this.a=a
this.$ti=$ti},
qA:function qA(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ka:function ka(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
k9:function k9(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qF:function qF(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qC:function qC(){},
fg:function fg(){},
hp:function hp(){},
jt:function jt(){},
hI:function hI(){},
b6:function b6(){},
r5:function r5(){},
ne:function ne(){},
hP:function hP(a,$ti){this.a=a
this.$ti=$ti},
nf:function nf(a,b){this.a=a
this.b=b},
n1:function n1(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qG:function qG(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
oo:function oo(){},
on:function on(){},
vl:function(a,b,c,d,e,f){if(C.d.bz(f,4)!==0)throw H.l(new P.bD("Invalid base64 padding, padded length must be multiple of four, is "+H.D(f),a,c))
if(d+e!==f)throw H.l(new P.bD("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.l(new P.bD("Invalid base64 padding, more than two '=' characters",a,b))},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
fU:function fU(){},
fV:function fV(){},
ln:function ln(){},
pz:function pz(a){this.a=a},
pA:function pA(a){this.a=a},
r7:function r7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
r9:function r9(a){this.a=a},
r8:function r8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Gq:function(a,b,c){var t,s,r,q
if(b<0)throw H.l(P.bG(b,0,J.cn(a),null,null))
t=c==null
if(!t&&c<b)throw H.l(P.bG(c,b,J.cn(a),null,null))
s=J.df(a)
for(r=0;r<b;++r)if(!s.J())throw H.l(P.bG(b,0,r,null,null))
q=[]
if(t)for(;s.J();)q.push(s.gR())
else for(r=b;r<c;++r){if(!s.J())throw H.l(P.bG(c,b,r,null,null))
q.push(s.gR())}return H.wN(q)},
wV:function(a,b,c){var t=J.df(b)
if(!t.J())return a
if(c.length===0){do a+=H.D(t.gR())
while(t.J())}else{a+=H.D(t.gR())
for(;t.J();)a=a+c+H.D(t.gR())}return a},
zh:function(a,b){return J.y3(a,b)},
zl:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=P.dB("^([+-]?\\d{4,6})-?(\\d\\d)-?(\\d\\d)(?:[ T](\\d\\d)(?::?(\\d\\d)(?::?(\\d\\d)(?:\\.(\\d{1,6}))?)?)?( ?[zZ]| ?([-+])(\\d\\d)(?::?(\\d\\d))?)?)?$",!0,!1).h9(a)
if(t!=null){s=new P.ld()
r=t.b
if(1>=r.length)return H.w(r,1)
q=H.dl(r[1],null,null)
if(2>=r.length)return H.w(r,2)
p=H.dl(r[2],null,null)
if(3>=r.length)return H.w(r,3)
o=H.dl(r[3],null,null)
if(4>=r.length)return H.w(r,4)
n=s.$1(r[4])
if(5>=r.length)return H.w(r,5)
m=s.$1(r[5])
if(6>=r.length)return H.w(r,6)
l=s.$1(r[6])
if(7>=r.length)return H.w(r,7)
k=new P.le().$1(r[7])
j=J.dd(k)
i=j.bh(k,1000)
h=j.hJ(k,1000)
j=r.length
if(8>=j)return H.w(r,8)
if(r[8]!=null){if(9>=j)return H.w(r,9)
j=r[9]
if(j!=null){g=J.ba(j,"-")?-1:1
if(10>=r.length)return H.w(r,10)
f=H.dl(r[10],null,null)
if(11>=r.length)return H.w(r,11)
e=s.$1(r[11])
if(typeof f!=="number")return H.a9(f)
e=J.e1(e,60*f)
if(typeof e!=="number")return H.a9(e)
m=J.rS(m,g*e)}d=!0}else d=!1
c=H.FE(q,p,o,n,m,l,i+C.f.b0(h/1000),d)
if(c==null)throw H.l(new P.bD("Time out of range",a,null))
return P.vy(c,d)}else throw H.l(new P.bD("Invalid date format",a,null))},
vy:function(a,b){var t=new P.dL(a,b)
t.d4(a,b)
return t},
zj:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.D(t)
if(t>=10)return s+"00"+H.D(t)
return s+"000"+H.D(t)},
zk:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ig:function(a){if(a>=10)return""+a
return"0"+a},
zm:function(a,b,c,d,e,f){return new P.d1(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
vG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cL(a)
if(typeof a==="string")return JSON.stringify(a)
return P.zD(a)},
zD:function(a){var t=J.aL(a)
if(!!t.$isf_)return t.D(a)
return H.o_(a)},
dH:function(a){return new P.d_(!1,null,null,a)},
e4:function(a,b,c){return new P.d_(!0,a,b,c)},
yo:function(a){return new P.d_(!1,null,a,"Must not be null")},
wR:function(a){return new P.eF(null,null,!1,null,null,a)},
jK:function(a,b,c){return new P.eF(null,null,!0,a,b,"Value not in range")},
bG:function(a,b,c,d,e){return new P.eF(b,c,!0,a,d,"Invalid value")},
dm:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.a9(a)
if(!(0>a)){if(typeof c!=="number")return H.a9(c)
t=a>c}else t=!0
if(t)throw H.l(P.bG(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.a9(b)
if(!(a>b)){if(typeof c!=="number")return H.a9(c)
t=b>c}else t=!0
if(t)throw H.l(P.bG(b,a,c,"end",f))
return b}return c},
by:function(a,b,c,d,e){var t=e!=null?e:J.cn(b)
return new P.mo(b,t,!0,a,c,"Index out of range")},
lt:function(a){return new P.qj(a)},
dk:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.df(a);s.J();)t.push(s.gR())
if(b)return t
t.fixed$length=Array
return t},
Fb:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
f:function(a,b){var t=P.dk(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fG:function(a){H.HI(H.D(a))},
dB:function(a,b,c){return new H.hq(a,H.u_(a,!1,!0,!1),null,null)},
p_:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.dm(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a6()
s=c<t}else s=!0
return H.wN(s?C.b.c2(a,b,c):a)}if(!!J.aL(a).$isfl)return H.FD(a,b,P.dm(b,c,a.length,null,null,null))
return P.Gq(a,b,c)},
x9:function(){var t=H.Fx()
if(t!=null)return P.xa(t,0,null)
throw H.l(new P.Z("'Uri.base' is not supported"))},
xa:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a7(a,b+4)^58)*3|C.c.a7(a,b)^100|C.c.a7(a,b+1)^97|C.c.a7(a,b+2)^116|C.c.a7(a,b+3)^97)>>>0
if(s===0)return P.x8(b>0||c<c?C.c.M(a,b,c):a,5,null).gem()
else if(s===32)return P.x8(C.c.M(a,t,c),0,null).gem()}r=H.a(new Array(8),[P.E])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.xD(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.at()
if(p>=b)if(P.xD(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.U()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a6()
if(typeof l!=="number")return H.a9(l)
if(k<l)l=k
if(typeof m!=="number")return m.a6()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.a6()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.a6()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.c.aD(a,"..",m)))h=l>m+2&&C.c.aD(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aD(a,"file",b)){if(o<=b){if(!C.c.aD(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.c.M(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.c.aB(a,m,l,"/");++l;++k;++c}else{a=C.c.M(a,b,m)+"/"+C.c.M(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aD(a,"http",b)){if(q&&n+3===m&&C.c.aD(a,"80",n+1))if(b===0&&!0){a=C.c.aB(a,n,m,"")
m-=3
l-=3
k-=3
c-=3}else{a=C.c.M(a,b,n)+C.c.M(a,m,c)
p-=b
o-=b
n-=b
t=3+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="http"}else i=null
else if(p===t&&C.c.aD(a,"https",b)){if(q&&n+4===m&&C.c.aD(a,"443",n+1))if(b===0&&!0){a=C.c.aB(a,n,m,"")
m-=4
l-=4
k-=4
c-=3}else{a=C.c.M(a,b,n)+C.c.M(a,m,c)
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
if(j){if(b>0||c<a.length){a=C.c.M(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.qX(a,p,o,n,m,l,k,i,null)}return P.GI(a,b,c,p,o,n,m,l,k,i)},
xc:function(a,b){return C.b.hb(a.split("&"),P.n0(),new P.pw(b))},
Gt:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.pt(a)
s=H.cA(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.Z(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.dl(C.c.M(a,p,q),null,null)
if(J.cx(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.w(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.dl(C.c.M(a,p,c),null,null)
if(J.cx(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.w(r,o)
r[o]=m
return r},
xb:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.pu(a)
s=new P.pv(a,t)
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
k=J.ba(C.b.gb7(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.Gt(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.aq()
h=j[1]
if(typeof h!=="number")return H.a9(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.aq()
i=j[3]
if(typeof i!=="number")return H.a9(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.aL(e).S(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.w(g,f)
g[f]=0
i=f+1
if(i>=16)return H.w(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.cY()
i=C.d.aU(e,8)
if(f<0||f>=16)return H.w(g,f)
g[f]=i
i=f+1
if(i>=16)return H.w(g,i)
g[i]=e&255
f+=2}}return g},
GI:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.GQ(a,b,d)
else{if(d===b)P.i1(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.GR(a,t,e-1):""
r=P.GM(a,e,f,!1)
if(typeof f!=="number")return f.U()
q=f+1
if(typeof g!=="number")return H.a9(g)
p=q<g?P.GO(H.dl(C.c.M(a,q,g),null,new P.rs(a,f)),j):null}else{s=""
r=null
p=null}o=P.GN(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a6()
n=h<i?P.GP(a,h+1,i,null):null
return new P.kf(j,s,r,p,o,n,i<c?P.GL(a,i+1,c):null,null,null,null,null,null)},
xm:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
i1:function(a,b,c){throw H.l(new P.bD(c,a,b))},
GO:function(a,b){if(a!=null&&J.ba(a,P.xm(b)))return
return a},
GM:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.Z(a,b)===91){if(typeof c!=="number")return c.V()
t=c-1
if(C.c.Z(a,t)!==93)P.i1(a,b,"Missing end `]` to match `[` in host")
P.xb(a,b+1,t)
return C.c.M(a,b,c).toLowerCase()}if(typeof c!=="number")return H.a9(c)
s=b
for(;s<c;++s)if(C.c.Z(a,s)===58){P.xb(a,b,c)
return"["+a+"]"}return P.GT(a,b,c)},
GT:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.a9(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.Z(a,t)
if(p===37){o=P.xr(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.cb("")
m=C.c.M(a,s,t)
l=r.O+=!q?m.toLowerCase():m
if(n){o=C.c.M(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.O=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.w(C.B,n)
n=(C.B[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.cb("")
if(s<t){r.O+=C.c.M(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.w(C.j,n)
n=(C.j[n]&1<<(p&15))!==0}else n=!1
if(n)P.i1(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.Z(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.cb("")
m=C.c.M(a,s,t)
r.O+=!q?m.toLowerCase():m
r.O+=P.xn(p)
t+=k
s=t}}}}if(r==null)return C.c.M(a,b,c)
if(s<c){m=C.c.M(a,s,c)
r.O+=!q?m.toLowerCase():m}n=r.O
return n.charCodeAt(0)==0?n:n},
GQ:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.xp(C.c.a7(a,b)))P.i1(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a7(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.w(C.l,q)
q=(C.l[q]&1<<(r&15))!==0}else q=!1
if(!q)P.i1(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.M(a,b,c)
return P.GJ(s?a.toLowerCase():a)},
GJ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
GR:function(a,b,c){var t=P.fB(a,b,c,C.Z,!1)
return t==null?C.c.M(a,b,c):t},
GN:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fB(a,b,c,C.D,!1)
if(r==null)r=C.c.M(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.af(r,"/"))r="/"+r
return P.GS(r,e,f)},
GS:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.af(a,"/"))return P.GU(a,!t||c)
return P.GV(a)},
GP:function(a,b,c,d){var t=P.fB(a,b,c,C.k,!1)
return t==null?C.c.M(a,b,c):t},
GL:function(a,b,c){var t=P.fB(a,b,c,C.k,!1)
return t==null?C.c.M(a,b,c):t},
xr:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.Z(a,b+1)
r=C.c.Z(a,t)
q=H.ry(s)
p=H.ry(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.aU(o,4)
if(t>=8)return H.w(C.A,t)
t=(C.A[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hJ(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.M(a,b,b+3).toUpperCase()
return},
xn:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.a7("0123456789ABCDEF",a>>>4)
t[2]=C.c.a7("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.fG(a,6*r)&63|s
if(p>=q)return H.w(t,p)
t[p]=37
n=p+1
m=C.c.a7("0123456789ABCDEF",o>>>4)
if(n>=q)return H.w(t,n)
t[n]=m
m=p+2
n=C.c.a7("0123456789ABCDEF",o&15)
if(m>=q)return H.w(t,m)
t[m]=n
p+=3}}return P.p_(t,0,null)},
fB:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.de(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a6()
if(typeof c!=="number")return H.a9(c)
if(!(r<c))break
c$0:{o=s.Z(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.w(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.xr(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.w(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.i1(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.Z(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.xn(o)}}if(p==null)p=new P.cb("")
p.O+=C.c.M(a,q,r)
p.O+=H.D(m)
if(typeof l!=="number")return H.a9(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a6()
if(q<c)p.O+=s.M(a,q,c)
t=p.O
return t.charCodeAt(0)==0?t:t},
xq:function(a){if(C.c.af(a,"."))return!0
return C.c.be(a,"/.")!==-1},
GV:function(a){var t,s,r,q,p,o,n
if(!P.xq(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bV)(s),++p){o=s[p]
if(J.ba(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.w(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.b6(t,"/")},
GU:function(a,b){var t,s,r,q,p,o
if(!P.xq(a))return!b?P.xo(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bV)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.ba(C.b.gb7(t),"..")){if(0>=t.length)return H.w(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.w(t,0)
s=J.rT(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.ba(C.b.gb7(t),".."))t.push("")
if(!b){if(0>=t.length)return H.w(t,0)
s=P.xo(t[0])
if(0>=t.length)return H.w(t,0)
t[0]=s}return C.b.b6(t,"/")},
xo:function(a){var t,s,r,q
t=J.bd(a)
s=t.gm(a)
if(typeof s!=="number")return s.at()
if(s>=2&&P.xp(t.Z(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.a9(s)
if(!(r<s))break
q=t.Z(a,r)
if(q===58)return C.c.M(a,0,r)+"%3A"+C.c.W(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.w(C.l,s)
s=(C.l[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
GK:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.Z(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.l(P.dH("Invalid URL encoding"))}}return t},
r6:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.a9(c)
t=J.de(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.Z(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.n!==d)p=!1
else p=!0
if(p)return t.M(a,b,c)
else o=new H.kV(t.M(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.Z(a,s)
if(q>127)throw H.l(P.dH("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.l(P.dH("Truncated URI"))
o.push(P.GK(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pA(!1).fX(o)},
xp:function(a){var t=a|32
return 97<=t&&t<=122},
x8:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bd(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a9(o)
if(!(r<o))break
c$0:{p=s.Z(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.l(new P.bD("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.l(new P.bD("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a9(o)
if(!(r<o))break
p=s.Z(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gb7(t)
if(p!==44||r!==m+7||!s.aD(a,"base64",m+1))throw H.l(new P.bD("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.G.hx(0,a,o,s.gm(a))
else{l=P.fB(a,o,s.gm(a),C.k,!0)
if(l!=null)a=s.aB(a,o,s.gm(a),l)}return new P.ps(a,t,c)},
H1:function(){var t,s,r,q,p
t=P.Fb(22,new P.rl(),!0,P.db)
s=new P.rk(t)
r=new P.rm()
q=new P.rn()
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
xD:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$xE()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.w(t,d)
r=t[d]
q=C.c.a7(a,s)^96
p=J.i6(r,q>95?31:q)
if(typeof p!=="number")return p.aH()
d=p&31
o=C.d.aU(p,5)
if(o>=8)return H.w(e,o)
e[o]=s}return d},
dc:function dc(){},
bv:function bv(){},
dL:function dL(a,b){this.a=a
this.b=b},
ld:function ld(){},
le:function le(){},
U:function U(){},
d1:function d1(a){this.a=a},
lk:function lk(){},
ll:function ll(){},
el:function el(){},
fm:function fm(){},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eF:function eF(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mo:function mo(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a){this.a=a},
eL:function eL(a){this.a=a},
dT:function dT(a){this.a=a},
bN:function bN(a){this.a=a},
nG:function nG(){},
jR:function jR(){},
la:function la(a){this.a=a},
qj:function qj(a){this.a=a},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
lu:function lu(a,bE,$ti){this.a=a
this.bE=bE
this.$ti=$ti},
E:function E(){},
o:function o(){},
jq:function jq(){},
q:function q(){},
bt:function bt(){},
d6:function d6(){},
ds:function ds(){},
ad:function ad(){},
dA:function dA(){},
eG:function eG(){},
dS:function dS(){},
B:function B(){},
cb:function cb(O){this.O=O},
eN:function eN(){},
pw:function pw(a){this.a=a},
pt:function pt(a){this.a=a},
pu:function pu(a){this.a=a},
pv:function pv(a,b){this.a=a
this.b=b},
kf:function kf(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
rs:function rs(a,b){this.a=a
this.b=b},
ps:function ps(a,b,c){this.a=a
this.b=b
this.c=c},
rl:function rl(){},
rk:function rk(a){this.a=a},
rm:function rm(){},
rn:function rn(){},
qX:function qX(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
q7:function q7(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
xL:function(a){var t,s,r,q,p
if(a==null)return
t=P.n0()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.bV)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
Hk:function(a){var t,s
t=new P.bj(0,$.aD,null,[null])
s=new P.e_(t,[null])
a.then(H.dq(new P.rt(s),1))["catch"](H.dq(new P.ru(s),1))
return t},
t4:function(){var t=$.vC
if(t==null){t=J.kq(window.navigator.userAgent,"Opera",0)
$.vC=t}return t},
vF:function(){var t=$.vD
if(t==null){t=P.t4()!==!0&&J.kq(window.navigator.userAgent,"WebKit",0)
$.vD=t}return t},
vE:function(){var t,s
t=$.vz
if(t!=null)return t
s=$.vA
if(s==null){s=J.kq(window.navigator.userAgent,"Firefox",0)
$.vA=s}if(s)t="-moz-"
else{s=$.vB
if(s==null){s=P.t4()!==!0&&J.kq(window.navigator.userAgent,"Trident/",0)
$.vB=s}if(s)t="-ms-"
else t=P.t4()===!0?"-o-":"-webkit-"}$.vz=t
return t},
r1:function r1(){},
r3:function r3(a,b){this.a=a
this.b=b},
pV:function pV(){},
pW:function pW(a,b){this.a=a
this.b=b},
r2:function r2(a,b){this.a=a
this.b=b},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
rt:function rt(a){this.a=a},
ru:function ru(a){this.a=a},
l0:function l0(){},
l1:function l1(a){this.a=a},
H_:function(a){var t,s,r
t=new P.bj(0,$.aD,null,[null])
s=new P.ke(t,[null])
a.toString
r=W.T
W.eR(a,"success",new P.rj(a,s),!1,r)
W.eR(a,"error",s.gdR(),!1,r)
return t},
lc:function lc(){},
rj:function rj(a,b){this.a=a
this.b=b},
mn:function mn(){},
nD:function nD(){},
hL:function hL(){},
pm:function pm(){},
GH:function(a){var t=new P.qN(0,0)
t.eY(a)
return t},
qE:function qE(){},
qN:function qN(a,b){this.a=a
this.b=b},
qO:function qO(){},
bU:function bU(){},
ku:function ku(){},
eg:function eg(){},
lv:function lv(){},
lw:function lw(){},
lx:function lx(){},
ly:function ly(){},
lz:function lz(){},
lA:function lA(){},
lB:function lB(){},
lC:function lC(){},
lD:function lD(){},
lE:function lE(){},
lF:function lF(){},
lG:function lG(){},
lH:function lH(){},
lI:function lI(){},
lJ:function lJ(){},
lK:function lK(){},
lX:function lX(){},
cq:function cq(){},
mk:function mk(){},
d5:function d5(){},
mU:function mU(){},
iO:function iO(){},
j7:function j7(){},
ng:function ng(){},
nh:function nh(){},
d7:function d7(){},
nA:function nA(){},
iP:function iP(){},
j8:function j8(){},
nR:function nR(){},
nW:function nW(){},
oj:function oj(){},
oZ:function oZ(){},
iQ:function iQ(){},
j9:function j9(){},
kA:function kA(a){this.a=a},
cc:function cc(){},
p1:function p1(){},
p3:function p3(){},
eK:function eK(){},
pb:function pb(){},
da:function da(){},
pn:function pn(){},
iR:function iR(){},
ja:function ja(){},
py:function py(){},
pC:function pC(){},
pD:function pD(){},
hY:function hY(){},
qT:function qT(){},
qU:function qU(){},
qV:function qV(){},
bh:function bh(){},
db:function db(){},
fN:function fN(){},
eX:function eX(){},
fO:function fO(){},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
bC:function bC(){},
e5:function e5(){},
l_:function l_(){},
kw:function kw(){},
o8:function o8(){},
ra:function ra(){},
jQ:function jQ(){},
iS:function iS(){},
jb:function jb(){}},W={
vj:function(a){var t=document.createElement("a")
return t},
yT:function(a){if(a!=null)return new Audio(a)
return new Audio()},
yU:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
vu:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
GB:function(a){var t=new W.q5(a,null)
t.eV(a)
return t},
tt:function(a,b,c){return W.vT(a,null,null,b,null,null,null,c).aR(new W.me())},
vT:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e8
s=new P.bj(0,$.aD,null,[t])
r=new P.e_(s,[t])
q=new XMLHttpRequest()
C.M.hz(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.I1
W.eR(q,"load",new W.mf(r,q),!1,t)
W.eR(q,"error",r.gdR(),!1,t)
q.send()
return s},
ml:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
eT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
xl:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eR:function(a,b,c,d,e){var t=W.H9(new W.qi(c))
t=new W.qh(0,a,b,t,!1,[e])
t.eW(a,b,c,!1,e)
return t},
H0:function(a){var t
if(!!J.aL(a).$isek)return a
t=new P.k0([],[],!1)
t.c=!0
return t.b2(a)},
H9:function(a){var t=$.aD
if(t===C.e)return a
return t.fS(a,!0)},
aC:function aC(){},
eV:function eV(){},
kx:function kx(){},
eY:function eY(){},
cM:function cM(){},
kE:function kE(){},
h0:function h0(){},
h3:function h3(){},
kI:function kI(){},
eZ:function eZ(){},
kM:function kM(){},
fT:function fT(){},
eh:function eh(){},
kX:function kX(){},
ib:function ib(){},
fW:function fW(){},
l2:function l2(){},
l3:function l3(){},
fX:function fX(){},
fY:function fY(){},
l4:function l4(){},
bK:function bK(){},
ej:function ej(){},
iG:function iG(){},
q5:function q5(a,b){this.a=a
this.b=b},
jB:function jB(){},
q6:function q6(){},
id:function id(){},
l5:function l5(){},
l6:function l6(){},
lb:function lb(){},
f1:function f1(){},
ie:function ie(){},
ek:function ek(){},
ih:function ih(){},
ii:function ii(){},
lg:function lg(){},
ij:function ij(){},
ik:function ik(){},
iH:function iH(){},
j0:function j0(){},
il:function il(){},
im:function im(){},
k6:function k6(a,$ti){this.a=a
this.$ti=$ti},
dv:function dv(){},
lm:function lm(){},
h_:function h_(){},
ls:function ls(){},
T:function T(){},
aV:function aV(){},
lT:function lT(){},
cf:function cf(){},
f8:function f8(){},
iI:function iI(){},
j1:function j1(){},
lU:function lU(){},
lV:function lV(){},
lW:function lW(){},
lZ:function lZ(){},
m_:function m_(){},
iC:function iC(){},
cp:function cp(){},
mb:function mb(){},
fa:function fa(){},
iJ:function iJ(){},
j2:function j2(){},
iE:function iE(){},
e8:function e8(){},
me:function me(){},
mf:function mf(a,b){this.a=a
this.b=b},
hh:function hh(){},
mj:function mj(){},
hi:function hi(){},
fc:function fc(){},
mp:function mp(){},
mR:function mR(){},
hs:function hs(){},
ht:function ht(){},
n8:function n8(){},
nd:function nd(){},
hA:function hA(){},
jv:function jv(){},
nj:function nj(){},
nk:function nk(){},
hB:function hB(){},
cr:function cr(){},
jw:function jw(){},
iT:function iT(){},
jc:function jc(){},
ny:function ny(){},
nz:function nz(){},
aQ:function aQ(){},
jz:function jz(){},
iU:function iU(){},
jd:function jd(){},
nC:function nC(){},
nH:function nH(){},
nL:function nL(){},
nN:function nN(){},
ea:function ea(){},
nT:function nT(){},
ch:function ch(){},
jG:function jG(){},
iV:function iV(){},
je:function je(){},
nZ:function nZ(){},
jL:function jL(){},
fq:function fq(){},
jM:function jM(){},
om:function om(){},
op:function op(){},
oq:function oq(){},
or:function or(){},
cs:function cs(){},
jO:function jO(){},
h1:function h1(){},
h4:function h4(){},
fr:function fr(){},
ct:function ct(){},
jP:function jP(){},
iW:function iW(){},
jf:function jf(){},
fs:function fs(){},
ox:function ox(){},
cj:function cj(){},
oy:function oy(){},
oz:function oz(){},
oE:function oE(){},
ck:function ck(){},
ec:function ec(){},
p7:function p7(){},
p9:function p9(){},
cR:function cR(){},
cJ:function cJ(){},
pc:function pc(){},
iX:function iX(){},
jg:function jg(){},
pd:function pd(){},
h2:function h2(){},
h5:function h5(){},
ph:function ph(){},
cu:function cu(){},
jT:function jT(){},
iY:function iY(){},
jh:function jh(){},
fv:function fv(){},
jU:function jU(){},
ed:function ed(){},
px:function px(){},
pB:function pB(){},
fw:function fw(){},
jV:function jV(){},
pG:function pG(){},
jY:function jY(){},
pN:function pN(){},
eO:function eO(){},
fx:function fx(){},
q4:function q4(){},
hU:function hU(){},
iZ:function iZ(){},
ji:function ji(){},
k4:function k4(){},
j_:function j_(){},
jj:function jj(){},
qb:function qb(){},
qc:function qc(){},
k8:function k8(){},
iK:function iK(){},
j3:function j3(){},
qx:function qx(){},
i0:function i0(){},
iL:function iL(){},
j4:function j4(){},
qW:function qW(){},
kb:function kb(){},
iM:function iM(){},
j5:function j5(){},
kd:function kd(){},
iN:function iN(){},
j6:function j6(){},
rb:function rb(){},
rc:function rc(){},
qd:function qd(a){this.a=a},
qg:function qg(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
hV:function hV(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qh:function qh(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qi:function qi(a){this.a=a},
bx:function bx(){},
lY:function lY(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
r4:function r4(){}},T={
tu:function(a,b,c,d){var t
H.HQ(a,"$isq",[P.E],"$asq")
t=new T.hj(a,null,d,b,null)
t.eN(a,b,c,d)
return t},
wG:function(a,b){return new T.nI(0,a,new Uint8Array(H.cA(b==null?32768:b)))},
Gv:function(a){var t=new T.pR(-1,0,0,0,0,null,null,"",[])
t.eS(a)
return t},
Gw:function(a,b){var t=new T.pS(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.eT(a,b)
return t},
fb:function(a){var t=new T.mg(null,0,2147483647)
t.eM(a)
return t},
fJ:function fJ(a,b){this.a=a
this.b=b},
fK:function fK(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
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
dg:function dg(a){this.a=a},
hj:function hj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nI:function nI(a,b,c){this.a=a
this.b=b
this.c=c},
pR:function pR(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pS:function pS(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
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
pT:function pT(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
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
pQ:function pQ(a){this.a=a},
mg:function mg(a,b,c){this.a=a
this.b=b
this.c=c},
iF:function iF(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
kL:function kL(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a9,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
_.a9=a9
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
kO:function kO(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a9,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
_.a9=a9
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
lf:function lf(){},
m8:function m8(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a9,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
_.a9=a9
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
HD:function(){var t,s,r,q,p,o
A.rx()
W.tt(C.c.an("../",N.nP())+"navbar.txt",null,null).aR(O.HF())
t=new P.dL(Date.now(),!1)
s=H.jI(t)===4&&H.jH(t)===1?"_sauce.png":".png"
r=[K.fj]
q=new F.cd("images/Credits/jadedResearcher_icon"+s,A.co(C.c.W("#3da35a",1)),"jadedResearcher",H.a([],r))
$.$get$cl().push(q)
$.z2=q
q=new F.cd("images/Credits/Smith_of_Dreams_icon"+s,A.co(C.c.W("#9630BF",1)),"karmicRetribution",H.a([],r))
$.$get$cl().push(q)
$.z3=q
q="images/Credits/pl_icon"+s
p=C.c.W("#000066",1)
q=new F.cd(q,A.co(p),"paradoxLands",H.a([],r))
$.$get$cl().push(q)
$.z5=q
q="images/Credits/ab_icon"+s
o=C.c.W("#ff0000",1)
q=new F.cd(q,A.co(o),"authorBot",H.a([],r))
$.$get$cl().push(q)
$.yX=q
q=new F.cd("images/Credits/abj_icon"+s,A.co(C.c.W("#ffa500",1)),"authorBotJunior",H.a([],r))
$.$get$cl().push(q)
$.yY=q
q=new F.cd("images/Credits/mlh_icon"+s,A.co(C.c.W("#fcf000",1)),"forgetfulIdealist",H.a([],r))
$.$get$cl().push(q)
$.z_=q
q=new F.cd("images/Credits/hb_icon"+s,A.co(C.c.W("#ffc000",1)),"humanBot",H.a([],r))
$.$get$cl().push(q)
$.z0=q
p=new F.cd("images/Credits/rs_icon"+s,A.co(p),"recursiveSlacker",H.a([],r))
$.$get$cl().push(p)
$.z6=p
p=new F.cd("images/Credits/aw_icon"+s,A.co(C.c.W("#494132",1)),"aspiringWatcher",H.a([],r))
$.$get$cl().push(p)
$.yW=p
p=new F.cd("images/Credits/mi_icon"+s,A.co(C.c.W("#003300",1)),"manicInsomniac",H.a([],r))
$.$get$cl().push(p)
$.z4=p
p=new F.cd("images/Credits/wm_icon"+s,A.co(C.c.W("#3399ff",1)),"wooMod",H.a([],r))
$.$get$cl().push(p)
$.za=p
p="images/Credits/io_icon"+s
q=C.c.W("#00ff00",1)
p=new F.cd(p,A.co(q),"insufferableOracle",H.a([],r))
$.$get$cl().push(p)
$.z1=p
p=new F.cd("images/Credits/sb_icon"+s,A.co(C.c.W("#fff000",1)),"someBody",H.a([],r))
$.$get$cl().push(p)
$.z8=p
q=new F.cd("images/Credits/shogun_icon"+s,A.co(q),"shogun",H.a([],r))
$.$get$cl().push(q)
$.z7=q
q=new F.cd("images/Credits/tg_icon"+s,A.co(C.c.W("#ff3399",1)),"tableGuardian",H.a([],r))
$.$get$cl().push(q)
$.z9=q
r=new F.cd("images/Credits/dm_icon"+s,A.co(o),"dilletantMathematician",H.a([],r))
$.$get$cl().push(r)
$.yZ=r
T.kj()
W.eR(window,"scroll",new T.rJ(),!1,W.T)},
kj:function(){var t=0,s=P.bi(),r,q,p,o
var $async$kj=P.bn(function(a,b){if(a===1)return P.bk(b,s)
while(true)switch(t){case 0:t=2
return P.cm(T.v5(),$async$kj)
case 2:r=$.$get$cl(),q=r.length,p=0
case 3:if(!(p<r.length)){t=5
break}t=6
return P.cm(r[p].bA(),$async$kj)
case 6:case 4:r.length===q||(0,H.bV)(r),++p
t=3
break
case 5:o=document.querySelector("#newspostsMain")
$.$get$xS().cN(0,o)
return P.bl(null,s)}})
return P.bm($async$kj,s)},
v5:function(){var t=0,s=P.bi(),r,q,p,o,n
var $async$v5=P.bn(function(a,b){if(a===1)return P.bk(b,s)
while(true)switch(t){case 0:r=document
q=r.querySelector("#newspostsMain")
p=r.createElement("div")
p.classList.add("HeadshotContainer")
for(r=$.$get$cl(),o=r.length,n=0;n<r.length;r.length===o||(0,H.bV)(r),++n)r[n].cO(p)
q.appendChild(p)
return P.bl(null,s)}})
return P.bm($async$v5,s)},
rJ:function rJ(){},
FV:function(a,b,c,d,e){var t,s
t=[P.B]
s=H.a([],t)
t=new T.hM("Glitch",0.01,0.01,0.01,s,0.5,a,new H.t(0,null,null,null,null,null,0,[X.G,P.U]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.F(null,null,A.Y),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.J]),H.a([],[A.fR]),1)
t.a3(a,b,c,d,e)
return t},
hM:function hM(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
zq:function(a,b,c,d){var t,s,r,q
t=new B.du(new P.cb(""),0,0)
t.ai(a,8)
c.toString
s=H.cP(c,0,null)
for(r=s.length,q=0;q<r;++q)t.ai(s[q],8)
return t.b1(b)},
zp:function(a,b,c,d){var t,s,r,q,p
t=H.cA(c)
s=new Uint8Array(t)
r=new B.dh(null,0)
r.a=J.e2(a,b)
for(q=0;q<c;++q){p=r.aa(8)
if(q>=t)return H.w(s,q)
s[q]=p}return s},
zo:function(a,b,c,d){var t,s,r,q,p
t=new B.du(new P.cb(""),0,0)
t.ai(a,8)
s=d.gcG()
r=C.f.am(Math.log(H.ki(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cP(c,0,null)
for(s=q.length,p=0;p<s;++p)t.ai(q[p],r)
return t.b1(b)},
zn:function(a,b,c,d){var t,s,r,q,p,o
t=H.cA(c)
s=new Uint8Array(t)
r=d.y
q=C.f.am(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dh(null,0)
p.a=J.e2(a,b)
for(o=0;o<c;++o){r=p.aa(q)
if(o>=t)return H.w(s,o)
s[o]=r}return s}},S={kv:function kv(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},bH:function bH(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},ia:function ia(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},md:function md(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mS:function mS(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nb:function nb(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2},ol:function ol(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},fn:function fn(){},uN:function uN(){},uO:function uO(){},uP:function uP(){},ta:function ta(){},td:function td(){},t0:function t0(){},ux:function ux(){},uR:function uR(){},uS:function uS(){},kR:function kR(){},uo:function uo(){},uk:function uk(){},mX:function mX(){},t5:function t5(){},rW:function rW(){},l8:function l8(){},u6:function u6(){},l9:function l9(){},nM:function nM(){},uE:function uE(){},uB:function uB(){},uF:function uF(){},rV:function rV(){},m5:function m5(){},kP:function kP(){},t_:function t_(){},rZ:function rZ(){},up:function up(){},uG:function uG(){},uq:function uq(){},tc:function tc(){},tb:function tb(){},uD:function uD(){},uC:function uC(){},pe:function pe(){},uI:function uI(){},t2:function t2(){},t3:function t3(){},uQ:function uQ(){},hz:function hz(){},uc:function uc(){},ud:function ud(){},ue:function ue(){},uf:function uf(){},uy:function uy(){},uz:function uz(){},uA:function uA(){},ub:function ub(){},uh:function uh(){},ui:function ui(){},tq:function tq(){},tr:function tr(){},ts:function ts(){},uj:function uj(){},ug:function ug(){},rX:function rX(){},uK:function uK(){},uL:function uL(){},uJ:function uJ(){}},K={bW:function bW(a,b){this.a=a
this.b=b},
vr:function(){var t=$.vq
if(t==null){t=new K.kT(H.a([],[K.fj]))
$.vq=t}return t},
Ff:function(a,b){var t=new K.fj(b,null,null)
t.eP(a,b)
return t},
kT:function kT(a){this.a=a},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
mV:function mV(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
og:function og(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c}},L={
yp:function(a,b,c,d,e){var t,s,r
t=P.B
s=A.dK
r=P.E
r=new L.aa(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
r.j(0,$.ag,L.d("#FF9B00"),!0)
r.j(0,$.ai,L.d("#FF9B00"),!0)
r.j(0,$.ah,L.d("#FF8700"),!0)
r.j(0,$.ar,L.d("#7F7F7F"),!0)
r.j(0,$.aq,L.d("#727272"),!0)
r.j(0,$.ak,L.d("#A3A3A3"),!0)
r.j(0,$.al,L.d("#999999"),!0)
r.j(0,$.aj,L.d("#898989"),!0)
r.j(0,$.ap,L.d("#EFEFEF"),!0)
r.j(0,$.ao,L.d("#DBDBDB"),!0)
r.j(0,$.an,L.d("#C6C6C6"),!0)
r.j(0,$.am,L.d("#ADADAD"),!0)
s=[t]
t=new L.fL(0.01,0.01,0.01,0.5,a,new H.t(0,null,null,null,null,null,0,[X.G,P.U]),null,"","",!1,b,null,c,d,e,!1,!1,!0,1,r,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.J]),H.a([],[A.fR]),Q.F(null,null,A.Y))
t.Y(a,b,c,d,e)
return t},
d:function(a){if(C.c.af(a,"#"))return A.co(C.c.W(a,1))
else return A.co(a)},
fL:function fL(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kJ:function kJ(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
oi:function oi(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
p4:function p4(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
_.x2=x2}},M={kz:function kz(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fS:function fS(a,b){this.a=a
this.b=b},l7:function l7(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},h7:function h7(){},bB:function bB(a,b){this.a=a
this.b=b},oA:function oA(a){this.a=a},pJ:function pJ(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2}},U={kD:function kD(){},na:function na(a){this.a=a},nF:function nF(a){this.a=a},oW:function oW(){},oX:function oX(a){this.a=a},oY:function oY(a){this.a=a},li:function li(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a9,dV,dW,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
_.a9=a9
_.dV=dV
_.dW=dW
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
_.x2=x2},lL:function lL(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nc:function nc(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},b:function b(a){this.a=a},X:function X(b,c,a){this.b=b
this.c=c
this.a=a},au:function au(y,a,b,c,d,e,f,r,x){var _=this
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},pf:function pf(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
Gu:function(a){if(J.de(a).af(a," "))return C.c.W(a,1)
return a},
pK:function pK(a){this.a=a},
pL:function pL(a,b){this.a=a
this.b=b},
pM:function pM(a,b){this.a=a
this.b=b}},O={kF:function kF(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2},c9:function c9(){},dt:function dt(){},kK:function kK(a){this.a=a},eJ:function eJ(){},io:function io(){},
HH:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.nP()
a=J.yh(a,P.dB("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.rM(t))
s=document
J.ve(s.querySelector("#navbar"),"beforeend",a,C.o,null)
if(J.ba(O.Hv("seerOfVoid",null),"true"))P.zV(new O.rN(),P.d6)
r=new P.dL(Date.now(),!1)
if(H.jI(r)===4&&H.jH(r)===1)J.vb(s.querySelector("body")).h(0,"voidbody")
q=H.jI(r)
p=H.jH(r)
o=C.a.D(H.ut(r))
n=C.a.D(q)
m=C.a.D(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.jJ(null,null)
k.cX(H.dl(l,null,null))
k.hw()
if($.Gk||k.a.cE()>0.99)H.kn(s.querySelector("#today"),"$iseV").href=C.c.an("../",t)+"dead_index.html?seed="+l
else H.kn(s.querySelector("#today"),"$iseV").href=C.c.an("../",t)+"index2.html?seed="+l},
Hv:function(a,b){var t,s,r,q
t=P.x9().gcL().n(0,a)
if(t!=null)t=P.r6(t,0,J.cn(t),C.n,!1)
if(t!=null)return t
s=$.xW
if(s.length!==0){r=J.yj(window.location.href,J.ye(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.xa(H.xY(s,q,"")+"?"+$.xW,0,null).gcL().n(0,a)}return},
HS:function(){var t,s,r,q
t=document
J.vb(t.querySelector("body")).h(0,"voidbody")
s=new W.k6(t.querySelectorAll(".void"),[null])
for(t=new H.ey(s,s.gm(s),0,null,[null]);t.J();){r=t.d
q=J.y9(J.rU(r))
if(q==="none"||q.length===0)O.HM(r)
else O.Hx(r)}},
HM:function(a){var t,s
if(a==null)return
t=J.bJ(a)
s=t.gaJ(a)
J.vh(s,!!t.$isfr?"inline":"block")},
Hx:function(a){if(a==null)return
J.vh(J.rU(a),"none")},
HN:function(a){var t,s,r,q
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fG("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.e3(s,",")
if(!J.y5(r,a))window.localStorage.setItem(t,H.D(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.cw(q)
P.fG("Saving isn't possible....you don't have local storage")}},
rM:function rM(a){this.a=a},
rN:function rN(){},
rL:function rL(){},
cW:function cW(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={pa:function pa(a){this.a=a},o4:function o4(a){this.a=a},kQ:function kQ(a){this.a=a},m6:function m6(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},m7:function m7(rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nB:function nB(b,a){this.b=b
this.a=a},dR:function dR(a,b){this.a=a
this.b=b},af:function af(a,b){this.a=a
this.b=b},d0:function d0(r,c,d,e,f,a,b){var _=this
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
_.b=b},bE:function bE(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},cY:function cY(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},kU:function kU(c,a,b){this.c=c
this.a=a
this.b=b},bw:function bw(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},jD:function jD(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iB:function iB(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jF:function jF(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},of:function of(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oh:function oh(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},os:function os(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},dQ:function dQ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
np:function(){var t=0,s=P.bi(),r,q
var $async$np=P.bn(function(a,b){if(a===1)return P.bk(b,s)
while(true)switch(t){case 0:P.fG("loading big bads")
r=$
q=J
t=2
return P.cm(A.ez("BigBadLists/bigBads.txt",!1,!1,null),$async$np)
case 2:r.wF=q.e3(b,"\n")
return P.bl(null,s)}})
return P.bm($async$np,s)},
Hi:function(a){var t,s,r,q,p,o
t=J.e3(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bV)(t),++q){p=t[q]
o=J.bd(p)
r+=" "+(J.ym(o.n(p,0))+o.W(p,1))}return r}},A={kW:function kW(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
i:function(a,b,c,d,e){var t=new A.Y(c,e,null,a,!1,P.a6(null,null,null,G.V),0,3)
t.N(a,b,c,!1,e)
return t},
Y:function Y(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
mI:function mI(){},
mH:function mH(){},
nm:function nm(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
ow:function ow(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
nY:function nY(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
ou:function ou(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
pl:function pl(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a9,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
_.a9=a9
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
o5:function o5(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
m4:function m4(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
fR:function fR(){},
ei:function(a,b,c,d){var t=new A.dK(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.eL(a,b,c,d)
return t},
t1:function(a,b,c,d){var t=A.ei(0,0,0,255)
t.b=C.a.ae(C.d.am(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ae(C.d.am(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ae(C.d.am(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ae(C.d.am(d*255),0,255)
return t},
zf:function(a,b){if(b){if(typeof a!=="number")return a.aH()
return A.ei((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aH()
return A.ei((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
co:function(a){return A.zf(H.dl(a,16,new A.rq()),a.length>=8)},
dK:function dK(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
rq:function rq(){},
wB:function(){if($.wz)return
$.wz=!0
Z.zM()},
ez:function(a,b,c,d){var t=0,s=P.bi(),r,q,p,o,n
var $async$ez=P.bn(function(e,f){if(e===1)return P.bk(f,s)
while(true)switch(t){case 0:A.wB()
t=$.$get$cV().a1(0,a)?3:5
break
case 3:q=$.$get$cV().n(0,a)
p=J.aL(q)
if(!!p.$isdQ){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cp(q)
t=1
break}}else throw H.l("Requested resource ("+a+") is an unexpected type: "+H.D(J.vd(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.ua==null?8:9
break
case 8:t=10
return P.cm(A.n7(),$async$ez)
case 10:case 9:n=$.ua.eq(a)
t=n!=null?11:12
break
case 11:t=13
return P.cm(A.n2(n),$async$ez)
case 13:if(!$.$get$cV().a1(0,a))$.$get$cV().i(0,a,new Y.dQ(a,null,H.a([],[[P.f0,,]]),[null]))
r=$.$get$cV().n(0,a).b
t=1
break
case 12:case 7:r=A.Fd(a,!1,d)
t=1
break
case 4:case 1:return P.bl(r,s)}})
return P.bm($async$ez,s)},
n7:function(){var t=0,s=P.bi(),r
var $async$n7=P.bn(function(a,b){if(a===1)return P.bk(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.cm(A.ez("manifest/manifest.txt",!1,!0,$.vP),$async$n7)
case 2:r.ua=b
return P.bl(null,s)}})
return P.bm($async$n7,s)},
Fc:function(a){if(!$.$get$cV().a1(0,a))$.$get$cV().i(0,a,new Y.dQ(a,null,H.a([],[[P.f0,,]]),[null]))
return $.$get$cV().n(0,a)},
Fd:function(a,b,c){var t
if($.$get$cV().a1(0,a))throw H.l("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.vO(C.b.gb7(a.split("."))).a
t=A.Fc(a)
c.b_(A.wy(a,!1)).aR(new A.n5(t))
return t.cp(0)},
n2:function(a){var t=0,s=P.bi(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$n2=P.bn(function(b,a0){if(b===1)return P.bk(a0,s)
while(true)switch(t){case 0:t=3
return P.cm(A.ez(a+".bundle",!1,!0,null),$async$n2)
case 3:q=a0
p=C.c.M(a,0,C.c.e5(a,$.$get$wA()))
o=P.d6
n=new P.e_(new P.bj(0,$.aD,null,[o]),[o])
m=H.a([],[P.cF])
for(o=J.ya(q),l=o.length,k=[[P.f0,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.bV)(o),++i){h=o[i]
g=J.bJ(h)
f=Z.vO(C.b.gb7(J.e3(g.gL(h),"."))).a
e=p+"/"+H.D(g.gL(h))
if($.$get$cV().a1(0,e)){m.push(A.ez(e,!1,!1,null))
continue}d=H.kn(g.gbd(h),"$isdb")
if(!$.$get$cV().a1(0,e))$.$get$cV().i(0,e,new Y.dQ(e,null,H.a([],k),j))
c=$.$get$cV().n(0,e)
m.push(c.cp(0))
f.b5(d.buffer).aR(new A.n3(f,c))}P.zW(m,null,!1).aR(new A.n4(n))
r=n.a
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$n2,s)},
hv:function(a,b){var t=0,s=P.bi(),r,q,p,o,n
var $async$hv=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:if($.$get$u9().a1(0,a)){r=$.$get$u9().n(0,a)
t=1
break}q=W.fq
p=new P.bj(0,$.aD,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.eR(n,"load",new A.n6(new P.e_(p,[q]),n),!1,W.T)
n.src=A.wy(a,!1)
r=p
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$hv,s)},
wy:function(a,b){if(C.c.af(a,"/")){a=C.c.W(a,1)
b=!0}else b=!1
if(b)return H.D(window.location.protocol)+"//"+H.D(window.location.host)+"/"+a
return C.c.an("../",N.nP())+a},
n5:function n5(a){this.a=a},
n3:function n3(a,b){this.a=a
this.b=b},
n4:function n4(a){this.a=a},
n6:function n6(a,b){this.a=a
this.b=b},
nK:function nK(){},
jC:function jC(){},
jJ:function jJ(a,b){this.a=a
this.b=b},
rx:function(){var t=0,s=P.bi(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$rx=P.bn(function(a0,a1){if(a0===1)return P.bk(a1,s)
while(true)switch(t){case 0:if($.xM){t=1
break}$.xM=!0
D.Gp()
q=P.B
p=[q]
o=H.a(["metal"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,0.3)
$.$get$c().h(0,o)
$.C=o
o=H.a(["dutton"],p)
n=$.ac
H.a([],p)
o=new G.bI(n,o,0.6)
$.$get$c().h(0,o)
$.w3=o
o=H.a(["ceramic"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.bQ=o
o=H.a(["bone"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,0.2)
$.$get$c().h(0,o)
$.b9=o
o=H.a(["wood"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.W=o
o=H.a(["plastic"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.aN=o
o=H.a(["rubber"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.c2=o
o=H.a(["paper"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.N=o
o=H.a(["cloth","fabric"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.Q=o
o=H.a(["glass"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.b3=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.bX=o
o=H.a(["flesh","meat","muscle"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$c().h(0,o)
$.bf=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.I
H.a([],p)
o=new G.bI(n,o,3.1)
$.$get$c().h(0,o)
$.bq=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$c().h(0,o)
$.cg=o
o=H.a(["plant","leaf","vine"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$c().h(0,o)
$.b5=o
o=H.a(["feathery"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$c().h(0,o)
$.bz=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.K
H.a([],p)
o=new G.bI(n,o,0.1)
$.$get$c().h(0,o)
$.bS=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.K
H.a([],p)
o=new G.bI(n,o,-13)
$.$get$c().h(0,o)
$.bR=o
o=H.a(["stone","rock","concrete"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,0.3)
$.$get$c().h(0,o)
$.aG=o
o=H.a(["legendary"],p)
n=$.mG
H.a([],p)
o=new G.bI(n,o,13)
$.$get$c().h(0,o)
$.a_=o
o=H.a(["Unbeatable"],p)
n=$.mG
H.a([],p)
o=new G.bI(n,o,40.37)
$.$get$c().h(0,o)
$.EU=o
o=$.K
H.a([],p)
o=new G.aY(o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$c().h(0,o)
$.aH=o
o=$.tV
H.a([],p)
o=new G.aY(o,["glowing","bright","illuminated"],0.1)
$.$get$c().h(0,o)
$.b_=o
o=$.tV
H.a([],p)
o=new G.aY(o,["obscuring","dark","shadowy"],0.1)
$.$get$c().h(0,o)
$.az=o
o=$.K
H.a([],p)
o=new G.aY(o,["calming","pale","placating","shooshing"],0.1)
$.$get$c().h(0,o)
$.bo=o
o=$.I
H.a([],p)
o=new G.aY(o,["nuclear","radioactive","irradiated"],1)
$.$get$c().h(0,o)
$.bY=o
o=$.K
H.a([],p)
o=new G.aY(o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$c().h(0,o)
$.b4=o
o=$.K
H.a([],p)
o=new G.aY(o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$c().h(0,o)
$.bF=o
o=$.K
H.a([],p)
o=new G.aY(o,["doomed","cursed","unlucky"],-0.3)
$.$get$c().h(0,o)
$.aM=o
o=$.I
H.a([],p)
o=new G.aY(o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$c().h(0,o)
$.aZ=o
o=$.r
H.a([],p)
o=new G.aY(o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$c().h(0,o)
$.bs=o
o=$.r
H.a([],p)
o=new G.aY(o,["electrical","zap","lightning","shock"],0.6)
$.$get$c().h(0,o)
$.a2=o
o=$.r
H.a([],p)
o=new G.aY(o,["restraining","imprisoning","restricting"],0.3)
$.$get$c().h(0,o)
$.bg=o
o=$.K
H.a([],p)
o=new G.aY(o,["expensive","valuable","bling","money"],0.1)
$.$get$c().h(0,o)
$.bc=o
o=$.K
H.a([],p)
o=new G.aY(o,["edible","tasty","delicious","savory"],0.1)
$.$get$c().h(0,o)
$.aE=o
o=$.K
H.a([],p)
o=new G.aY(o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$c().h(0,o)
$.as=o
o=$.K
H.a([],p)
o=new G.aY(o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$c().h(0,o)
$.ay=o
o=$.K
H.a([],p)
o=new G.aY(o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$c().h(0,o)
$.a0=o
o=$.I
H.a([],p)
o=new G.aY(o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$c().h(0,o)
$.aA=o
o=$.K
H.a([],p)
o=new G.aY(o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$c().h(0,o)
$.aO=o
o=$.K
H.a([],p)
o=new G.aY(o,["funny","hilarious","comedy"],0.1)
$.$get$c().h(0,o)
$.b8=o
o=$.K
H.a([],p)
o=new G.aY(o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$c().h(0,o)
$.br=o
o=$.K
H.a([],p)
o=new G.aY(o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$c().h(0,o)
$.a3=o
o=$.mG
H.a([],p)
o=new G.aY(o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$c().h(0,o)
$.H=o
o=$.mG
H.a([],p)
o=new G.aY(o,["class-related","appropriate","themed"],1.3)
$.$get$c().h(0,o)
$.P=o
o=$.K
H.a([],p)
o=new G.aY(o,["pretty","aesthetic","beautiful"],0.1)
$.$get$c().h(0,o)
$.aJ=o
o=$.r
H.a([],p)
o=new G.aY(o,["healing","regenerating","recovery","life"],0.3)
$.$get$c().h(0,o)
$.b0=o
o=$.K
H.a([],p)
o=new G.aY(o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$c().h(0,o)
$.aK=o
o=$.K
H.a([],p)
o=new G.aY(o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$c().h(0,o)
$.b7=o
o=$.K
H.a([],p)
o=new G.aY(o,["poisonous","venomous","draining","poison"],0.6)
$.$get$c().h(0,o)
$.bL=o
o=$.K
H.a([],p)
o=new G.aY(o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$c().h(0,o)
$.bp=o
o=$.K
H.a([],p)
o=new G.aY(o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$c().h(0,o)
$.ca=o
o=$.K
H.a([],p)
o=new G.aY(o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$c().h(0,o)
$.aF=o
o=$.K
H.a([],p)
o=new G.aY(o,["blunt","bludgeoning","dull"],0.3)
$.$get$c().h(0,o)
$.ab=o
o=$.r
H.a([],p)
o=new G.aY(o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$c().h(0,o)
$.b1=o
o=$.K
H.a([],p)
o=new G.aY(o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$c().h(0,o)
$.a7=o
o=$.K
H.a([],p)
o=new G.aY(o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$c().h(0,o)
$.aS=o
o=$.K
H.a([],p)
o=new G.aY(o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$c().h(0,o)
$.aw=o
o=$.K
H.a([],p)
o=new G.aY(o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$c().h(0,o)
$.aW=o
o=H.a(["perfectly generic"],p)
n=$.K
H.a([],p)
o=new G.at(n,o,0.1)
$.$get$c().h(0,o)
$.fe=o
o=H.a(["a sword"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.et=o
o=H.a(["a hammer"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tF=o
o=H.a(["a rifle"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tQ=o
o=H.a(["a pistol"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tM=o
o=H.a(["a blade"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.vX=o
o=H.a(["a dagger"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tB=o
o=H.a(["a santa"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.hn=o
o=H.a(["a fist"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.w5=o
o=H.a(["claws"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.mw=o
o=H.a(["a grenade"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.mz=o
o=H.a(["a freaking safe"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wi=o
o=H.a(["a ball"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.es=o
o=H.a(["a trident"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wr=o
o=H.a(["a card"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.mv=o
o=H.a(["a frying pan"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tD=o
o=H.a(["a pillow"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.e9=o
o=H.a(["a machinegun"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tJ=o
o=H.a(["a shuriken"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wm=o
o=H.a(["a sling"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wp=o
o=H.a(["a yoyo"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wt=o
o=H.a(["a cane"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.vZ=o
o=H.a(["a shield"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.ff=o
o=H.a(["a lance"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.we=o
o=H.a(["a ax"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tw=o
o=H.a(["a sign"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wh=o
o=H.a(["a book"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.aI=o
o=H.a(["a broom"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.jk=o
o=H.a(["a club"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.jl=o
o=H.a(["a bow"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.ty=o
o=H.a(["a whip"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.ws=o
o=H.a(["a staff"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wq=o
o=H.a(["a needle"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tK=o
o=H.a(["dice"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tC=o
o=H.a(["a fork"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.w6=o
o=H.a(["a pigeon???"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,1.3)
$.$get$c().h(0,o)
$.tL=o
o=H.a(["a chainsaw"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.w_=o
o=H.a(["a sickle"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wn=o
o=H.a(["a shotgun"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wk=o
o=H.a(["a stick"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.dj=o
o=H.a(["a chain"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.hm=o
o=H.a(["a wrench"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tT=o
o=H.a(["a shovel"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wl=o
o=H.a(["a rolling pin"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tS=o
o=H.a(["a puppet"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tN=o
o=H.a(["a razor"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.tP=o
o=H.a(["a pen"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.mD=o
o=H.a(["a bust"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.hl=o
o=H.a(["a bowling ball"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.Az=o
o=H.a(["a golf club"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.w8=o
o=H.a(["a knife"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wd=o
o=H.a(["scissors"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wj=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.I
m=G.V
l=[m]
k=H.a([$.C,$.aH,$.aZ],l)
H.a([],p)
o=new G.e("Forged",k,n,o,0)
$.$get$c().h(0,o)
$.BR=o
o=H.a([],p)
n=$.x
k=H.a([$.ab,$.aH],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Bn=o
o=H.a(["fossilized"],p)
n=$.I
k=H.a([$.b9,$.aG],l)
H.a([],p)
o=new G.e("Fossilized",k,n,o,0)
$.$get$c().h(0,o)
$.BS=o
o=H.a(["adamantium"],p)
n=$.I
k=H.a([$.b9,$.C],l)
H.a([],p)
o=new G.e("Adamantium",k,n,o,0)
$.$get$c().h(0,o)
$.vW=o
o=H.a([],p)
n=$.x
k=H.a([$.b7,$.aK],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Et=o
o=H.a(["tatami"],p)
n=$.x
k=H.a([$.Q,$.W],l)
H.a([],p)
o=new G.e("Tatami",k,n,o,0)
$.$get$c().h(0,o)
$.EI=o
o=H.a(["mesh","chain link"],p)
n=$.x
k=H.a([$.Q,$.C],l)
H.a([],p)
o=new G.e("Mesh",k,n,o,0)
$.$get$c().h(0,o)
$.CR=o
o=H.a(["foil"],p)
n=$.x
k=H.a([$.N,$.C],l)
H.a([],p)
o=new G.e("Foil",k,n,o,0)
$.$get$c().h(0,o)
$.BN=o
o=H.a(["beanbag"],p)
n=$.x
k=H.a([$.Q,$.aG],l)
H.a([],p)
o=new G.e("Beanbag",k,n,o,0)
$.$get$c().h(0,o)
$.Av=o
o=H.a(["pleather","faux fur"],p)
n=$.x
k=H.a([$.cg,$.aN],l)
H.a([],p)
o=new G.e("Faux Fur",k,n,o,0)
$.$get$c().h(0,o)
$.Dr=o
o=H.a(["plywood"],p)
n=$.x
k=H.a([$.W,$.N],l)
H.a([],p)
o=new G.e("Plywood",k,n,o,0)
$.$get$c().h(0,o)
$.jm=o
o=H.a(["colossus"],p)
n=$.x
k=H.a([$.C,$.bf],l)
H.a([],p)
o=new G.e("Colossus",k,n,o,0)
$.$get$c().h(0,o)
$.w0=o
o=H.a(["rotting","zombie"],p)
n=$.I
k=H.a([$.bS,$.bf],l)
H.a([],p)
o=new G.e("Rotting",k,n,o,0)
$.$get$c().h(0,o)
$.DR=o
o=H.a(["draugr","white walker"],p)
n=$.I
k=H.a([$.bS,$.bf,$.bp],l)
H.a([],p)
o=new G.e("Draugr",k,n,o,0)
$.$get$c().h(0,o)
$.Bk=o
o=H.a(["Ultraviolet"],p)
n=$.tU
k=H.a([$.b_,$.az],l)
H.a([],p)
o=new G.e("Ultraviolet",k,n,o,0)
$.$get$c().h(0,o)
$.CA=o
o=H.a(["Ultraviolence"],p)
n=$.r
k=H.a([$.b_,$.az,$.aH],l)
H.a([],p)
o=new G.e("Ultraviolence",k,n,o,0)
$.$get$c().h(0,o)
$.ET=o
o=H.a([],p)
n=$.r
k=H.a([$.aM,$.bF],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Bi=o
o=H.a(["candy"],p)
n=$.x
k=H.a([$.aE,$.b3],l)
H.a([],p)
o=new G.e("Candy",k,n,o,0)
$.$get$c().h(0,o)
$.tz=o
o=H.a(["cotton candy"],p)
n=$.x
k=H.a([$.aE,$.Q],l)
H.a([],p)
o=new G.e("Cotton Candy",k,n,o,0)
$.$get$c().h(0,o)
$.B3=o
o=H.a(["gummy"],p)
n=$.x
k=H.a([$.aE,$.c2],l)
H.a([],p)
o=new G.e("Gum",k,n,o,0)
$.$get$c().h(0,o)
$.C3=o
o=H.a(["marrow"],p)
n=$.x
k=H.a([$.aE,$.b9],l)
H.a([],p)
o=new G.e("Marrow",k,n,o,0)
$.$get$c().h(0,o)
$.CK=o
o=H.a(["toothy"],p)
n=$.a4
k=H.a([$.b9,$.bQ],l)
H.a([],p)
o=new G.e("Toothy",k,n,o,0)
$.$get$c().h(0,o)
$.EQ=o
o=H.a(["Frost"],p)
n=$.x
k=H.a([$.aG,$.b3,$.bf],l)
H.a([],p)
o=new G.e("Frost",k,n,o,0)
$.$get$c().h(0,o)
$.BT=o
o=H.a(["arsenic","antifreeze"],p)
n=$.r
k=H.a([$.aE,$.bL],l)
H.a([],p)
o=new G.e("Arsenic",k,n,o,0)
$.$get$c().h(0,o)
$.Br=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.x
k=H.a([$.aG,$.b3],l)
H.a([],p)
o=new G.e("Crystal",k,n,o,0)
$.$get$c().h(0,o)
$.mx=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.K
k=H.a([$.aJ,$.aO,$.b8,$.a0,$.as,$.bF,$.a3],l)
H.a([],p)
o=new G.e("Mary Sue",k,n,o,0)
$.$get$c().h(0,o)
$.CL=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.K
k=H.a([$.b4,$.az,$.aH,$.a_,$.aM,$.a0,$.as,$.ay],l)
H.a([],p)
o=new G.e("Edge Lord",k,n,o,0)
$.$get$c().h(0,o)
$.Bp=o
o=H.a(["deadpool"],p)
n=$.a4
k=H.a([$.bS,$.b0,$.ay,$.b8],l)
H.a([],p)
o=new G.e("Deadpool",k,n,o,0)
$.$get$c().h(0,o)
$.B9=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.K
k=H.a([$.b4,$.ay],l)
H.a([],p)
o=new G.e("Spoopy",k,n,o,0)
$.$get$c().h(0,o)
$.Ew=o
o=H.a(["wolverine"],p)
n=$.a4
k=H.a([$.b9,$.aH,$.aZ],l)
H.a([],p)
o=new G.e("Wolverine",k,n,o,0)
$.$get$c().h(0,o)
$.F4=o
o=H.a(["rabbit's foot"],p)
n=$.a4
k=H.a([$.bF,$.cg],l)
H.a([],p)
o=new G.e("Rabbit's Foot",k,n,o,0)
$.$get$c().h(0,o)
$.tO=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.I
k=H.a([$.aZ,$.W],l)
H.a([],p)
o=new G.e("Tipped",k,n,o,0)
$.$get$c().h(0,o)
$.Ao=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a4
k=H.a([$.aZ,$.b1,$.W],l)
H.a([],p)
o=new G.e("Arrow",k,n,o,0)
$.$get$c().h(0,o)
$.tv=o
o=H.a(["training sword","bokken"],p)
n=$.a4
k=H.a([$.W,$.aH],l)
H.a([],p)
o=new G.e("Bokken",k,n,o,0)
$.$get$c().h(0,o)
$.Ct=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.aw,$.ay],l)
H.a([],p)
o=new G.e("Irony Type1",k,n,o,0)
$.$get$c().h(0,o)
$.tH=o
o=H.a(["netted","webbed"],p)
n=$.a4
k=H.a([$.bg,$.Q],l)
H.a([],p)
o=new G.e("Netted",k,n,o,0)
$.$get$c().h(0,o)
$.D5=o
o=H.a(["barbed wire"],p)
n=$.a4
k=H.a([$.aZ,$.bg,$.C,$.Q],l)
H.a([],p)
o=new G.e("Barbed Wire",k,n,o,0)
$.$get$c().h(0,o)
$.As=o
o=H.a(["morning star"],p)
n=$.a4
k=H.a([$.aZ,$.ab],l)
H.a([],p)
o=new G.e("Morning Star",k,n,o,0)
$.$get$c().h(0,o)
$.D_=o
o=H.a(["decadent"],p)
n=$.K
k=H.a([$.b7,$.bc],l)
H.a([],p)
o=new G.e("Decadent",k,n,o,0)
$.$get$c().h(0,o)
$.Bc=o
o=H.a(["SBAHJ"],p)
n=$.r
k=H.a([$.bR,$.ay],l)
H.a([],p)
o=new G.e("SBAHJ",k,n,o,0)
$.$get$c().h(0,o)
$.E0=o
o=H.a(["bayonet"],p)
n=$.a4
k=H.a([$.aZ,$.b1],l)
H.a([],p)
o=new G.e("Bayonet",k,n,o,0)
$.$get$c().h(0,o)
$.Au=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.x
k=H.a([$.bp,$.ay,$.aH],l)
H.a([],p)
o=new G.e("Snoop",k,n,o,0)
$.$get$c().h(0,o)
$.Es=o
o=H.a(["light saber"],p)
n=$.r
k=H.a([$.b_,$.aF,$.aH],l)
H.a([],p)
o=new G.e("Light Saber",k,n,o,0)
$.$get$c().h(0,o)
$.Cz=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.K
k=H.a([$.a3,$.aw],l)
H.a([],p)
o=new G.e("Fakey Fake",k,n,o,0)
$.$get$c().h(0,o)
$.By=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.K
k=H.a([$.a3,$.aW],l)
H.a([],p)
o=new G.e("Real As Shit",k,n,o,0)
$.$get$c().h(0,o)
$.DL=o
o=H.a(["skeletal"],p)
n=$.a4
k=H.a([$.b4,$.aM,$.b9],l)
H.a([],p)
o=new G.e("Skeletal",k,n,o,0)
$.$get$c().h(0,o)
$.Em=o
o=H.a(["green sun"],p)
n=$.tV
k=H.a([$.aF,$.bY,$.b_],l)
H.a([],p)
o=new G.e("Green Sun",k,n,o,0)
$.$get$c().h(0,o)
$.my=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.tU
k=H.a([$.az,$.as],l)
H.a([],p)
o=new G.e("Midnight",k,n,o,0)
$.$get$c().h(0,o)
$.CV=o
o=H.a(["radiant","dazzling"],p)
n=$.K
k=H.a([$.a3,$.b_],l)
H.a([],p)
o=new G.e("Radiant",k,n,o,0)
$.$get$c().h(0,o)
$.DI=o
o=H.a(["edgy"],p)
n=$.K
k=H.a([$.aH,$.az,$.ay],l)
H.a([],p)
o=new G.e("Edgy",k,n,o,0)
$.$get$c().h(0,o)
$.Bq=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.r
k=H.a([$.bY,$.bs],l)
H.a([],p)
o=new G.e("Warhead",k,n,o,0)
$.$get$c().h(0,o)
$.Ah=o
o=H.a(["living"],p)
n=$.I
k=H.a([$.b9,$.bf,$.aA],l)
H.a([],p)
o=new G.e("Living",k,n,o,0)
$.$get$c().h(0,o)
$.CD=o
o=H.a(["dead","corpse","deceased"],p)
n=$.I
k=H.a([$.b9,$.bf],l)
H.a([],p)
o=new G.e("Dead",k,n,o,0)
$.$get$c().h(0,o)
$.B8=o
o=H.a(["taser"],p)
n=$.r
k=H.a([$.a2,$.bg,$.b1],l)
H.a([],p)
o=new G.e("Taser",k,n,o,0)
$.$get$c().h(0,o)
$.EH=o
o=H.a(["nocturn"],p)
n=$.r
k=H.a([$.az,$.a7],l)
H.a([],p)
o=new G.e("Nocturn",k,n,o,0)
$.$get$c().h(0,o)
$.D8=o
o=H.a(["dirge"],p)
n=$.r
k=H.a([$.aM,$.a7],l)
H.a([],p)
o=new G.e("Dirge",k,n,o,0)
$.$get$c().h(0,o)
$.Bf=o
o=H.a(["Snobbish","Noble"],p)
n=$.K
k=H.a([$.as,$.bc],l)
H.a([],p)
o=new G.e("Snobbish",k,n,o,0)
$.$get$c().h(0,o)
$.Er=o
o=H.a(["flat"],p)
n=$.K
k=H.a([$.ab,$.a7],l)
H.a([],p)
o=new G.e("Flat(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.BI=o
o=H.a(["sharp"],p)
n=$.K
k=H.a([$.aH,$.a7],l)
H.a([],p)
o=new G.e("Sharp(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.E9=o
o=H.a(["sharp"],p)
n=$.K
k=H.a([$.as,$.a7],l)
H.a([],p)
o=new G.e("Sharp(Clothes)",k,n,o,0)
$.$get$c().h(0,o)
$.E8=o
o=H.a(["Bach's"],p)
n=$.ac
k=H.a([$.a0,$.a7],l)
H.a([],p)
o=new G.e("Bach's",k,n,o,0)
$.$get$c().h(0,o)
$.Aq=o
o=H.a(["Mozart's"],p)
n=$.ac
k=H.a([$.a3,$.a7],l)
H.a([],p)
o=new G.e("Mozart's",k,n,o,0)
$.$get$c().h(0,o)
$.D1=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.ac
k=H.a([$.a0,$.bY],l)
H.a([],p)
o=new G.e("Einstein's",k,n,o,0)
$.$get$c().h(0,o)
$.Bs=o
o=H.a(["Feynman's"],p)
n=$.ac
k=H.a([$.a0,$.b8],l)
H.a([],p)
o=new G.e("Feynman's",k,n,o,0)
$.$get$c().h(0,o)
$.BC=o
o=H.a(["Ziptie"],p)
n=$.ac
k=H.a([$.aN,$.bg],l)
H.a([],p)
o=new G.e("Ziptie",k,n,o,0)
$.$get$c().h(0,o)
$.F8=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.r
k=H.a([$.C,$.a0],l)
H.a([],p)
o=new G.e("Mobile",k,n,o,0)
$.$get$c().h(0,o)
$.ho=o
o=H.a(["Sassacre"],p)
n=$.ac
k=H.a([$.ca,$.b8],l)
H.a([],p)
o=new G.e("Sassacre",k,n,o,0)
$.$get$c().h(0,o)
$.DZ=o
o=H.a(["Sledge"],p)
n=$.r
k=H.a([$.ab,$.ca],l)
H.a([],p)
o=new G.e("Sledge",k,n,o,0)
$.$get$c().h(0,o)
$.Ep=o
o=H.a(["Legal"],p)
n=$.r
k=H.a([$.bg,$.N],l)
H.a([],p)
o=new G.e("Legal",k,n,o,0)
$.$get$c().h(0,o)
$.mB=o
o=H.a(["Clown"],p)
n=$.r
k=H.a([$.b8,$.aS],l)
H.a([],p)
o=new G.e("Clown",k,n,o,0)
$.$get$c().h(0,o)
$.AY=o
o=H.a(["passionate"],p)
n=$.K
k=H.a([$.aF,$.aO],l)
H.a([],p)
o=new G.e("Passionate",k,n,o,0)
$.$get$c().h(0,o)
$.Di=o
o=H.a(["pinata"],p)
n=$.a4
k=H.a([$.N,$.aE],l)
H.a([],p)
o=new G.e("Pinata",k,n,o,0)
$.$get$c().h(0,o)
$.Dm=o
o=H.a(["anvil"],p)
n=$.r
k=H.a([$.ab,$.ca,$.C],l)
H.a([],p)
o=new G.e("Anvil",k,n,o,0)
$.$get$c().h(0,o)
$.An=o
o=H.a(["flashbang"],p)
n=$.r
k=H.a([$.b_,$.bs],l)
H.a([],p)
o=new G.e("Flashbang",k,n,o,0)
$.$get$c().h(0,o)
$.BH=o
o=H.a(["smokebomb"],p)
n=$.r
k=H.a([$.az,$.bs],l)
H.a([],p)
o=new G.e("Smokebomb",k,n,o,0)
$.$get$c().h(0,o)
$.Eq=o
o=H.a(["ninja"],p)
n=$.r
k=H.a([$.az,$.aH],l)
H.a([],p)
o=new G.e("Ninja",k,n,o,0)
$.$get$c().h(0,o)
$.D7=o
o=H.a(["techno"],p)
n=$.r
k=H.a([$.a2,$.a7],l)
H.a([],p)
o=new G.e("Techno",k,n,o,0)
$.$get$c().h(0,o)
$.EK=o
o=H.a(["rock and roll"],p)
n=$.r
k=H.a([$.aG,$.a7],l)
H.a([],p)
o=new G.e("Rock And/Or Roll",k,n,o,0)
$.$get$c().h(0,o)
$.DN=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a4
k=H.a([$.aA,$.bf,$.b1],l)
H.a([],p)
o=new G.e("Pistol Shrimp",k,n,o,0)
$.$get$c().h(0,o)
$.Dn=o
o=H.a(["juggalo"],p)
n=$.r
k=H.a([$.b8,$.a7,$.aS,$.b4],l)
H.a([],p)
o=new G.e("Juggalo",k,n,o,0)
$.$get$c().h(0,o)
$.wc=o
o=H.a(["shocksauce"],p)
n=$.K
k=H.a([$.ay,$.a2],l)
H.a([],p)
o=new G.e("Shock Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.Ec=o
o=H.a(["weaksauce"],p)
n=$.K
k=H.a([$.ab,$.ay,$.bR],l)
H.a([],p)
o=new G.e("Weak Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.EZ=o
o=H.a(["spicy","picante"],p)
n=$.K
k=H.a([$.aF,$.aE],l)
H.a([],p)
o=new G.e("Spicy",k,n,o,0)
$.$get$c().h(0,o)
$.Ev=o
o=H.a(["ice cream","popsicle"],p)
n=$.x
k=H.a([$.bp,$.aE],l)
H.a([],p)
o=new G.e("Popsicle",k,n,o,0)
$.$get$c().h(0,o)
$.Cg=o
o=H.a(["popsickle"],p)
n=$.x
k=H.a([$.bp,$.aE,$.aH],l)
H.a([],p)
o=new G.e("Popsickle",k,n,o,0)
$.$get$c().h(0,o)
$.Dz=o
o=H.a(["icepick"],p)
n=$.x
k=H.a([$.bp,$.aZ],l)
H.a([],p)
o=new G.e("Icepick",k,n,o,0)
$.$get$c().h(0,o)
$.Ch=o
o=H.a(["schezwan"],p)
n=$.K
k=H.a([$.ay,$.aE],l)
H.a([],p)
o=new G.e("Schezwan",k,n,o,0)
$.$get$c().h(0,o)
$.E1=o
o=H.a(["vaporwave"],p)
n=$.r
k=H.a([$.az,$.a7,$.ay,$.a2],l)
H.a([],p)
o=new G.e("Vaporwave",k,n,o,0)
$.$get$c().h(0,o)
$.EX=o
o=H.a(["mallet"],p)
n=$.a4
k=H.a([$.W,$.ab],l)
H.a([],p)
o=new G.e("Mallet",k,n,o,0)
$.$get$c().h(0,o)
$.CJ=o
o=H.a(["fidget"],p)
n=$.r
k=H.a([$.aN,$.ay],l)
H.a([],p)
o=new G.e("Fidget",k,n,o,0)
$.$get$c().h(0,o)
$.BE=o
o=H.a(["gold foil"],p)
n=$.x
k=H.a([$.C,$.N,$.bc],l)
H.a([],p)
o=new G.e("Gold Foil",k,n,o,0)
$.$get$c().h(0,o)
$.C0=o
o=H.a(["caviar"],p)
n=$.x
k=H.a([$.aE,$.bc],l)
H.a([],p)
o=new G.e("Caviar",k,n,o,0)
$.$get$c().h(0,o)
$.AP=o
o=H.a(["RADioactive"],p)
n=$.K
k=H.a([$.bY,$.ay],l)
H.a([],p)
o=new G.e("RADioactive",k,n,o,0)
$.$get$c().h(0,o)
$.DJ=o
o=H.a(["glam"],p)
n=$.K
k=H.a([$.aG,$.a7,$.aJ],l)
H.a([],p)
o=new G.e("Glam",k,n,o,0)
$.$get$c().h(0,o)
$.BZ=o
o=H.a(["hair metal"],p)
n=$.K
k=H.a([$.C,$.a7,$.aJ],l)
H.a([],p)
o=new G.e("Hair Metal",k,n,o,0)
$.$get$c().h(0,o)
$.C5=o
o=H.a(["elven","fae","sylvan"],p)
n=$.K
k=H.a([$.a3,$.aJ],l)
H.a([],p)
o=new G.e("Elven",k,n,o,0)
$.$get$c().h(0,o)
$.Bu=o
o=H.a(["shiny"],p)
n=$.K
k=H.a([$.C,$.aJ],l)
H.a([],p)
o=new G.e("Shiny",k,n,o,0)
$.$get$c().h(0,o)
$.Eb=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.K
k=H.a([$.bc,$.aJ,$.as],l)
H.a([],p)
o=new G.e("Bespoke",k,n,o,0)
$.$get$c().h(0,o)
$.fd=o
o=H.a(["operatic"],p)
n=$.K
k=H.a([$.bc,$.a7,$.as],l)
H.a([],p)
o=new G.e("Operatic",k,n,o,0)
$.$get$c().h(0,o)
$.Dc=o
o=H.a(["ice","diamond"],p)
n=$.x
k=H.a([$.bc,$.bp],l)
H.a([],p)
o=new G.e("Diamond",k,n,o,0)
$.$get$c().h(0,o)
$.wa=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.K
k=H.a([$.aF,$.bp],l)
H.a([],p)
o=new G.e("Icy Hot",k,n,o,0)
$.$get$c().h(0,o)
$.Ci=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.K
k=H.a([$.ay,$.bp],l)
H.a([],p)
o=new G.e("Cold As Fuck",k,n,o,0)
$.$get$c().h(0,o)
$.wb=o
o=H.a(["winter's","season's"],p)
n=$.ac
k=H.a([$.bo,$.bp],l)
H.a([],p)
o=new G.e("Winter's",k,n,o,0)
$.$get$c().h(0,o)
$.F1=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.ac
k=H.a([$.a3,$.bp],l)
H.a([],p)
o=new G.e("Christmas",k,n,o,0)
$.$get$c().h(0,o)
$.AU=o
o=H.a(["Santa Saws"],p)
n=$.ac
k=H.a([$.a3,$.bp,$.aH],l)
H.a([],p)
o=new G.e("Santa Saws",k,n,o,0)
$.$get$c().h(0,o)
$.DX=o
o=H.a(["Santa Sleighs"],p)
n=$.ac
k=H.a([$.hn,$.aH],l)
H.a([],p)
o=new G.e("Santa Sleighs",k,n,o,0)
$.$get$c().h(0,o)
$.DY=o
o=H.a(["Santa Claws"],p)
n=$.ac
k=H.a([$.hn,$.mw],l)
H.a([],p)
o=new G.e("Santa Claws",k,n,o,0)
$.$get$c().h(0,o)
$.DW=o
o=H.a(["Sandy Claws"],p)
n=$.ac
k=H.a([$.hn,$.mw,$.aG],l)
H.a([],p)
o=new G.e("Sandy Claws",k,n,o,0)
$.$get$c().h(0,o)
$.DV=o
o=H.a(["Silent Night"],p)
n=$.ac
k=H.a([$.hn,$.az],l)
H.a([],p)
o=new G.e("Silent Night",k,n,o,0)
$.$get$c().h(0,o)
$.Ei=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.ac
k=H.a([$.b4,$.bX],l)
H.a([],p)
o=new G.e("Ghost's",k,n,o,0)
$.$get$c().h(0,o)
$.C6=o
o=H.a(["ghoul","mutant"],p)
n=$.x
k=H.a([$.bf,$.bY,$.bS],l)
H.a([],p)
o=new G.e("Mutant",k,n,o,0)
$.$get$c().h(0,o)
$.D2=o
o=H.a(["skate","skateboard"],p)
n=$.r
k=H.a([$.ay,$.C],l)
H.a([],p)
o=new G.e("Skateboard",k,n,o,0)
$.$get$c().h(0,o)
$.El=o
o=H.a(["microwave"],p)
n=$.r
k=H.a([$.bY,$.a2,$.aE],l)
H.a([],p)
o=new G.e("Microwave",k,n,o,0)
$.$get$c().h(0,o)
$.CU=o
o=H.a(["orbital"],p)
n=$.r
k=H.a([$.bY,$.a2,$.aE,$.b1],l)
H.a([],p)
o=new G.e("Orbital",k,n,o,0)
$.$get$c().h(0,o)
$.Dd=o
o=H.a([],p)
n=$.r
k=H.a([$.ab,$.a0],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.w2=o
o=H.a(["uranium"],p)
n=$.x
k=H.a([$.bY,$.aG],l)
H.a([],p)
o=new G.e("Uranium",k,n,o,0)
$.$get$c().h(0,o)
$.EW=o
o=H.a(["mousepad","jar opener"],p)
n=$.r
k=H.a([$.N,$.c2],l)
H.a([],p)
o=new G.e("Mousepad",k,n,o,0)
$.$get$c().h(0,o)
$.D0=o
o=H.a(["flint"],p)
n=$.x
k=H.a([$.aH,$.aG],l)
H.a([],p)
o=new G.e("Sharpened Flint",k,n,o,0)
$.$get$c().h(0,o)
$.BK=o
o=H.a(["flint"],p)
n=$.x
k=H.a([$.aZ,$.aG],l)
H.a([],p)
o=new G.e("Pointed Flint",k,n,o,0)
$.$get$c().h(0,o)
$.BL=o
o=H.a(["picnic"],p)
n=$.r
k=H.a([$.aN,$.aZ],l)
H.a([],p)
o=new G.e("Picnic",k,n,o,0)
$.$get$c().h(0,o)
$.Dl=o
o=H.a(["xtreme xplosion"],p)
n=$.K
k=H.a([$.ay,$.bs],l)
H.a([],p)
o=new G.e("Xtreme Xplosion",k,n,o,0)
$.$get$c().h(0,o)
$.F7=o
o=H.a(["lawn"],p)
n=$.r
k=H.a([$.aN,$.b7],l)
H.a([],p)
o=new G.e("Lawn",k,n,o,0)
$.$get$c().h(0,o)
$.Cx=o
o=H.a(["upholstered"],p)
n=$.x
k=H.a([$.Q,$.b7],l)
H.a([],p)
o=new G.e("Upholstered",k,n,o,0)
$.$get$c().h(0,o)
$.EV=o
o=H.a(["leather"],p)
n=$.x
k=H.a([$.bf,$.b7],l)
H.a([],p)
o=new G.e("Leather",k,n,o,0)
$.$get$c().h(0,o)
$.tI=o
o=H.a(["shag"],p)
n=$.x
k=H.a([$.cg,$.b7],l)
H.a([],p)
o=new G.e("Shag",k,n,o,0)
$.$get$c().h(0,o)
$.E7=o
o=H.a(["loyal"],p)
n=$.K
k=H.a([$.ab,$.aO],l)
H.a([],p)
o=new G.e("Loyal",k,n,o,0)
$.$get$c().h(0,o)
$.CH=o
o=H.a(["porcelain"],p)
n=$.x
k=H.a([$.aJ,$.bQ],l)
H.a([],p)
o=new G.e("Porcelain",k,n,o,0)
$.$get$c().h(0,o)
$.jn=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a4
k=H.a([$.bc,$.bQ],l)
H.a([],p)
o=new G.e("Pork Hollow",k,n,o,0)
$.$get$c().h(0,o)
$.DB=o
o=H.a(["n1nj4","katana"],p)
n=$.r
k=H.a([$.ay,$.aH],l)
H.a([],p)
o=new G.e("Katana",k,n,o,0)
$.$get$c().h(0,o)
$.Cr=o
o=H.a(["chocolate"],p)
n=$.x
k=H.a([$.aO,$.aE],l)
H.a([],p)
o=new G.e("Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.AT=o
o=H.a(["wrapped chocolate"],p)
n=$.x
k=H.a([$.aO,$.aE,$.N,$.C],l)
H.a([],p)
o=new G.e("Wrapped Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.BO=o
o=H.a(["scratch-n-sniff"],p)
n=$.x
k=H.a([$.ay,$.N],l)
H.a([],p)
o=new G.e("Scratch-n-sniff",k,n,o,0)
$.$get$c().h(0,o)
$.E3=o
o=H.a(["mythril","orichalcum"],p)
n=$.x
k=H.a([$.a3,$.C],l)
H.a([],p)
o=new G.e("Mythril",k,n,o,0)
$.$get$c().h(0,o)
$.D3=o
o=H.a(["titanium","steel"],p)
n=$.x
k=H.a([$.ab,$.C],l)
H.a([],p)
o=new G.e("Titanium",k,n,o,0)
$.$get$c().h(0,o)
$.EP=o
o=H.a(["lead"],p)
n=$.x
k=H.a([$.ca,$.C],l)
H.a([],p)
o=new G.e("Lead",k,n,o,0)
$.$get$c().h(0,o)
$.wf=o
o=H.a(["satire","parody","onion"],p)
n=$.r
k=H.a([$.aw,$.b8],l)
H.a([],p)
o=new G.e("Satire",k,n,o,0)
$.$get$c().h(0,o)
$.Db=o
o=H.a(["comedy gold"],p)
n=$.K
k=H.a([$.bc,$.b8],l)
H.a([],p)
o=new G.e("Comedy Gold",k,n,o,0)
$.$get$c().h(0,o)
$.B_=o
o=H.a(["dry","sensible chuckle"],p)
n=$.K
k=H.a([$.as,$.b8],l)
H.a([],p)
o=new G.e("Dry",k,n,o,0)
$.$get$c().h(0,o)
$.Bl=o
o=H.a(["polite"],p)
n=$.K
k=H.a([$.b7,$.aw],l)
H.a([],p)
o=new G.e("Polite",k,n,o,0)
$.$get$c().h(0,o)
$.Dx=o
o=H.a(["stradivarius"],p)
n=$.ac
k=H.a([$.as,$.bc,$.W,$.a7],l)
H.a([],p)
o=new G.e("Stradivarius",k,n,o,0)
$.$get$c().h(0,o)
$.EC=o
o=H.a(["scientistic"],p)
n=$.K
k=H.a([$.a0,$.aw],l)
H.a([],p)
o=new G.e("Scientistic",k,n,o,0)
$.$get$c().h(0,o)
$.E2=o
o=H.a(["AI"],p)
n=$.r
k=H.a([$.a2,$.aA],l)
H.a([],p)
o=new G.e("AI",k,n,o,0)
$.$get$c().h(0,o)
$.mt=o
o=H.a(["robotic"],p)
n=$.I
k=H.a([$.C,$.a2,$.aA],l)
H.a([],p)
o=new G.e("Robotic",k,n,o,0)
$.$get$c().h(0,o)
$.tR=o
o=H.a(["shrapnel"],p)
n=$.r
k=H.a([$.W,$.bs],l)
H.a([],p)
o=new G.e("Shrapnel",k,n,o,0)
$.$get$c().h(0,o)
$.Ee=o
o=H.a(["vocaloid"],p)
n=$.r
k=H.a([$.aA,$.a2,$.a7],l)
H.a([],p)
o=new G.e("Vocaloid",k,n,o,0)
$.$get$c().h(0,o)
$.EY=o
o=H.a(["*Hyun-ae"],p)
n=$.ac
k=H.a([$.aA,$.a2,$.aO],l)
H.a([],p)
o=new G.e("*Hyun-ae",k,n,o,0)
$.$get$c().h(0,o)
$.Cf=o
o=H.a(["buckshot"],p)
n=$.r
k=H.a([$.W,$.b1],l)
H.a([],p)
o=new G.e("Buckshot",k,n,o,0)
$.$get$c().h(0,o)
$.AD=o
o=H.a(["cannon"],p)
n=$.r
k=H.a([$.ca,$.b1],l)
H.a([],p)
o=new G.e("Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.AM=o
o=H.a(["stationary"],p)
n=$.r
k=H.a([$.as,$.N],l)
H.a([],p)
o=new G.e("Stationary",k,n,o,0)
$.$get$c().h(0,o)
$.EA=o
o=H.a([],p)
n=$.r
k=H.a([$.aI,$.N],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Df=o
o=H.a([],p)
n=$.r
k=H.a([$.C,$.b1],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.CS=o
o=H.a(["papercut"],p)
n=$.r
k=H.a([$.aH,$.N],l)
H.a([],p)
o=new G.e("Papercut",k,n,o,0)
$.$get$c().h(0,o)
$.Dg=o
o=H.a(["squeaky"],p)
n=$.I
k=H.a([$.ab,$.c2],l)
H.a([],p)
o=new G.e("Squeaky",k,n,o,0)
$.$get$c().h(0,o)
$.Ex=o
o=H.a(["kazoo"],p)
n=$.r
k=H.a([$.aw,$.a7],l)
H.a([],p)
o=new G.e("Kazoo",k,n,o,0)
$.$get$c().h(0,o)
$.Cs=o
o=H.a(["bandaid"],p)
n=$.r
k=H.a([$.b0,$.N],l)
H.a([],p)
o=new G.e("Bandaid",k,n,o,0)
$.$get$c().h(0,o)
$.Ar=o
o=H.a(["gushers"],p)
n=$.r
k=H.a([$.b0,$.aE],l)
H.a([],p)
o=new G.e("Gushers",k,n,o,0)
$.$get$c().h(0,o)
$.C4=o
o=H.a(["medic"],p)
n=$.r
k=H.a([$.b0,$.b1],l)
H.a([],p)
o=new G.e("Medic",k,n,o,0)
$.$get$c().h(0,o)
$.CQ=o
o=H.a(["sick nasty","ill"],p)
n=$.I
k=H.a([$.ay,$.bL],l)
H.a([],p)
o=new G.e("Sick Nasty",k,n,o,0)
$.$get$c().h(0,o)
$.Eg=o
o=H.a(["gilded","gold leaf"],p)
n=$.x
k=H.a([$.C,$.W],l)
H.a([],p)
o=new G.e("Gilded",k,n,o,0)
$.$get$c().h(0,o)
$.BY=o
o=H.a(["charging","power cord"],p)
n=$.r
k=H.a([$.aN,$.a2],l)
H.a([],p)
o=new G.e("Charging",k,n,o,0)
$.$get$c().h(0,o)
$.AS=o
o=H.a(["safety"],p)
n=$.r
k=H.a([$.c2,$.aH],l)
H.a([],p)
o=new G.e("Rubber Safety",k,n,o,0)
$.$get$c().h(0,o)
$.DT=o
o=H.a(["safety"],p)
n=$.r
k=H.a([$.aN,$.aH],l)
H.a([],p)
o=new G.e("Plastic Safety",k,n,o,0)
$.$get$c().h(0,o)
$.DU=o
o=H.a(["thunderous","thor's"],p)
n=$.K
k=H.a([$.aS,$.a2],l)
H.a([],p)
o=new G.e("Thunderous",k,n,o,0)
$.$get$c().h(0,o)
$.EN=o
o=H.a(["screeching","dial up"],p)
n=$.K
k=H.a([$.aS,$.a2,$.a0],l)
H.a([],p)
o=new G.e("Screeching",k,n,o,0)
$.$get$c().h(0,o)
$.E5=o
o=H.a(["mirrored","reflective"],p)
n=$.r
k=H.a([$.b3,$.C],l)
H.a([],p)
o=new G.e("Mirrored",k,n,o,0)
$.$get$c().h(0,o)
$.mC=o
o=H.a(["far seeing","sighted"],p)
n=$.r
k=H.a([$.b3,$.aG,$.a3],l)
H.a([],p)
o=new G.e("Far Seeing",k,n,o,0)
$.$get$c().h(0,o)
$.w1=o
o=H.a(["disabling","non lethal"],p)
n=$.r
k=H.a([$.c2,$.b1],l)
H.a([],p)
o=new G.e("Nonlethal",k,n,o,0)
$.$get$c().h(0,o)
$.Bg=o
o=H.a(["fashionable"],p)
n=$.r
k=H.a([$.aJ,$.as],l)
H.a([],p)
o=new G.e("Fashionable",k,n,o,0)
$.$get$c().h(0,o)
$.w4=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.b8,$.ay],l)
H.a([],p)
o=new G.e("Ironic Type 2",k,n,o,0)
$.$get$c().h(0,o)
$.Cm=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.bR,$.b8],l)
H.a([],p)
o=new G.e("Ironic Type 3",k,n,o,0)
$.$get$c().h(0,o)
$.mA=o
o=H.a(["post-ironic"],p)
n=$.K
k=H.a([$.aw,$.ay,$.as],l)
H.a([],p)
o=new G.e("Post Ironic",k,n,o,0)
$.$get$c().h(0,o)
$.DD=o
o=H.a(["monstrous"],p)
n=$.K
k=H.a([$.bS,$.aS,$.b4],l)
H.a([],p)
o=new G.e("Monstrous",k,n,o,0)
$.$get$c().h(0,o)
$.CZ=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.r
k=H.a([$.b1,$.ay,$.as],l)
H.a([],p)
o=new G.e("Rooty Tooty Point and Shooty",k,n,o,0)
$.$get$c().h(0,o)
$.DP=o
o=H.a(["golden"],p)
n=$.x
k=H.a([$.C,$.bc],l)
H.a([],p)
o=new G.e("Golden",k,n,o,0)
$.$get$c().h(0,o)
$.tE=o
o=H.a(["platinum"],p)
n=$.x
k=H.a([$.b_,$.C],l)
H.a([],p)
o=new G.e("Platinum",k,n,o,0)
$.$get$c().h(0,o)
$.mE=o
o=H.a(["horseshoe"],p)
n=$.r
k=H.a([$.bF,$.C],l)
H.a([],p)
o=new G.e("Horseshoe",k,n,o,0)
$.$get$c().h(0,o)
$.tG=o
o=H.a(["felt"],p)
n=$.r
k=H.a([$.Q,$.cg],l)
H.a([],p)
o=new G.e("Felt",k,n,o,0)
$.$get$c().h(0,o)
$.BA=o
o=H.a(["marble"],p)
n=$.x
k=H.a([$.aG,$.as],l)
H.a([],p)
o=new G.e("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.wg=o
o=H.a(["marble"],p)
n=$.x
k=H.a([$.aG,$.ca],l)
H.a([],p)
o=new G.e("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.C2=o
o=H.a(["glitched"],p)
n=$.I
k=H.a([$.bq,$.a2],l)
H.a([],p)
o=new G.e("Glitched",k,n,o,0)
$.$get$c().h(0,o)
$.w7=o
o=H.a(["debugging"],p)
n=$.r
k=H.a([$.b0,$.a2],l)
H.a([],p)
o=new G.e("Debugging",k,n,o,0)
$.$get$c().h(0,o)
$.Bb=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.r
k=H.a([$.C,$.aS,$.a7],l)
H.a([],p)
o=new G.e("Metalic",k,n,o,0)
$.$get$c().h(0,o)
$.CT=o
o=H.a(["Simulacrum"],p)
n=$.K
k=H.a([$.aA,$.aw],l)
H.a([],p)
o=new G.e("Simulacrum",k,n,o,0)
$.$get$c().h(0,o)
$.Ek=o
o=H.a(["Imitation"],p)
n=$.r
k=H.a([$.aE,$.aw],l)
H.a([],p)
o=new G.e("Imitation",k,n,o,0)
$.$get$c().h(0,o)
$.Cj=o
o=H.a(["Placebo"],p)
n=$.r
k=H.a([$.b0,$.aw],l)
H.a([],p)
o=new G.e("Placebo",k,n,o,0)
$.$get$c().h(0,o)
$.Dp=o
o=H.a(["counterfeit"],p)
n=$.r
k=H.a([$.bc,$.aw],l)
H.a([],p)
o=new G.e("Counterfeit",k,n,o,0)
$.$get$c().h(0,o)
$.B4=o
o=H.a(["Surreal"],p)
n=$.K
k=H.a([$.ay,$.aK,$.b8],l)
H.a([],p)
o=new G.e("Surreal1",k,n,o,0)
$.$get$c().h(0,o)
$.EE=o
o=H.a(["Brainy"],p)
n=$.K
k=H.a([$.a0,$.bf],l)
H.a([],p)
o=new G.e("Brainy",k,n,o,0)
$.$get$c().h(0,o)
$.AA=o
o=H.a(["Incendiary"],p)
n=$.r
k=H.a([$.aF,$.bs],l)
H.a([],p)
o=new G.e("Incendiary",k,n,o,0)
$.$get$c().h(0,o)
$.Ck=o
o=H.a(["C-4"],p)
n=$.x
k=H.a([$.bs,$.aN],l)
H.a([],p)
o=new G.e("C-4",k,n,o,0)
$.$get$c().h(0,o)
$.AH=o
o=H.a(["fae"],p)
n=$.r
k=H.a([$.a3,$.b_,$.bq],l)
H.a([],p)
o=new G.e("Fae",k,n,o,0)
$.$get$c().h(0,o)
$.Bx=o
o=H.a(["Plutonium"],p)
n=$.x
k=H.a([$.C,$.bY],l)
H.a([],p)
o=new G.e("Plutonium",k,n,o,0)
$.$get$c().h(0,o)
$.Dt=o
o=H.a(["Lithium"],p)
n=$.x
k=H.a([$.C,$.a2],l)
H.a([],p)
o=new G.e("Lithium",k,n,o,0)
$.$get$c().h(0,o)
$.CC=o
o=H.a(["Molten"],p)
n=$.x
k=H.a([$.C,$.aF],l)
H.a([],p)
o=new G.e("Molten",k,n,o,0)
$.$get$c().h(0,o)
$.CY=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.x
k=H.a([$.aG,$.aF],l)
H.a([],p)
o=new G.e("Magma",k,n,o,0)
$.$get$c().h(0,o)
$.CI=o
o=H.a(["Rusty"],p)
n=$.I
k=H.a([$.C,$.bR],l)
H.a([],p)
o=new G.e("Rusty",k,n,o,0)
$.$get$c().h(0,o)
$.DS=o
o=H.a(["Fonzie"],p)
n=$.r
k=H.a([$.aH,$.ay,$.as],l)
H.a([],p)
o=new G.e("Fonzie",k,n,o,0)
$.$get$c().h(0,o)
$.BP=o
o=H.a(["Romcom"],p)
n=$.r
k=H.a([$.aO,$.b8],l)
H.a([],p)
o=new G.e("Romcom",k,n,o,0)
$.$get$c().h(0,o)
$.DO=o
o=H.a(["Alluring"],p)
n=$.r
k=H.a([$.aJ,$.b_],l)
H.a([],p)
o=new G.e("Alluring",k,n,o,0)
$.$get$c().h(0,o)
$.Ak=o
o=H.a(["Masquerade"],p)
n=$.r
k=H.a([$.aJ,$.az],l)
H.a([],p)
o=new G.e("Masquerade",k,n,o,0)
$.$get$c().h(0,o)
$.CM=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.r
k=H.a([$.aG,$.bf],l)
H.a([],p)
o=new G.e("Stoneskin",k,n,o,0)
$.$get$c().h(0,o)
$.EB=o
o=H.a(["Psionic"],p)
n=$.r
k=H.a([$.a3,$.a0],l)
H.a([],p)
o=new G.e("Psionic",k,n,o,0)
$.$get$c().h(0,o)
$.DG=o
o=H.a(["Dwarven"],p)
n=$.r
k=H.a([$.a3,$.aG],l)
H.a([],p)
o=new G.e("Dwarven",k,n,o,0)
$.$get$c().h(0,o)
$.Bo=o
o=H.a(["Elemental","Animated"],p)
n=$.x
k=H.a([$.a3,$.aA],l)
H.a([],p)
o=new G.e("Elemental",k,n,o,0)
$.$get$c().h(0,o)
$.Bt=o
o=H.a(["Gourmet"],p)
n=$.K
k=H.a([$.aE,$.as],l)
H.a([],p)
o=new G.e("Gourmet",k,n,o,0)
$.$get$c().h(0,o)
$.C1=o
o=H.a(["Stained Glass"],p)
n=$.x
k=H.a([$.b3,$.aJ,$.bc],l)
H.a([],p)
o=new G.e("Stained Glass",k,n,o,0)
$.$get$c().h(0,o)
$.Ey=o
o=H.a(["Gauze"],p)
n=$.r
k=H.a([$.b0,$.Q],l)
H.a([],p)
o=new G.e("Gauze",k,n,o,0)
$.$get$c().h(0,o)
$.BV=o
o=H.a(["Locked"],p)
n=$.I
k=H.a([$.bg,$.br],l)
H.a([],p)
o=new G.e("Locked",k,n,o,0)
$.$get$c().h(0,o)
$.CE=o
o=H.a(["Etched"],p)
n=$.r
k=H.a([$.aG,$.N],l)
H.a([],p)
o=new G.e("Etched",k,n,o,0)
$.$get$c().h(0,o)
$.Bw=o
o=H.a(["Papyrus"],p)
n=$.x
k=H.a([$.N,$.b5],l)
H.a([],p)
o=new G.e("Papyrus",k,n,o,0)
$.$get$c().h(0,o)
$.Dh=o
o=H.a(["film"],p)
n=$.r
k=H.a([$.N,$.aN],l)
H.a([],p)
o=new G.e("Film",k,n,o,0)
$.$get$c().h(0,o)
$.BF=o
o=H.a(["Saucey"],p)
n=$.x
k=H.a([$.bq,$.br,$.bS],l)
H.a([],p)
o=new G.e("Saucey",k,n,o,0)
$.$get$c().h(0,o)
$.E_=o
o=H.a(["Lottery"],p)
n=$.r
k=H.a([$.N,$.bF],l)
H.a([],p)
o=new G.e("Lottery",k,n,o,0)
$.$get$c().h(0,o)
$.CG=o
o=H.a(["Blindfolded"],p)
n=$.r
k=H.a([$.az,$.Q],l)
H.a([],p)
o=new G.e("Blindfolded",k,n,o,0)
$.$get$c().h(0,o)
$.vY=o
o=H.a(["Possessed"],p)
n=$.I
k=H.a([$.bX,$.bf],l)
H.a([],p)
o=new G.e("Possessed",k,n,o,0)
$.$get$c().h(0,o)
$.DC=o
o=H.a(["Infernal"],p)
n=$.K
k=H.a([$.bX,$.aF],l)
H.a([],p)
o=new G.e("Infernal",k,n,o,0)
$.$get$c().h(0,o)
$.Cl=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.r
k=H.a([$.W,$.aW,$.tN,$.aA],l)
H.a([],p)
o=new G.e("Geppetto",k,n,o,0)
$.$get$c().h(0,o)
$.BW=o
o=H.a(["Abominable"],p)
n=$.K
k=H.a([$.bf,$.bq],l)
H.a([],p)
o=new G.e("Abominable",k,n,o,0)
$.$get$c().h(0,o)
$.Ai=o
o=H.a(["Ashen"],p)
n=$.r
k=H.a([$.aO,$.aM],l)
H.a([],p)
o=new G.e("Ashen",k,n,o,0)
$.$get$c().h(0,o)
$.Ap=o
o=H.a(["Pale"],p)
n=$.r
k=H.a([$.aO,$.bo],l)
H.a([],p)
o=new G.e("Pale",k,n,o,0)
$.$get$c().h(0,o)
$.De=o
o=H.a(["Pitch"],p)
n=$.r
k=H.a([$.aO,$.br],l)
H.a([],p)
o=new G.e("Pitch",k,n,o,0)
$.$get$c().h(0,o)
$.Do=o
o=H.a(["Lit"],p)
n=$.K
k=H.a([$.ay,$.aF],l)
H.a([],p)
o=new G.e("Lit",k,n,o,0)
$.$get$c().h(0,o)
$.CB=o
o=H.a(["Hypnotizing"],p)
n=$.r
k=H.a([$.a3,$.bo],l)
H.a([],p)
o=new G.e("Hypnotizing",k,n,o,0)
$.$get$c().h(0,o)
$.Cd=o
o=H.a(["Tranquilizing"],p)
n=$.r
k=H.a([$.bo,$.bg],l)
H.a([],p)
o=new G.e("Tranquilizing",k,n,o,0)
$.$get$c().h(0,o)
$.ES=o
o=H.a([],p)
n=$.r
k=H.a([$.bo,$.br],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.AK=o
o=H.a(["Ghost Rider's"],p)
n=$.ac
k=H.a([$.hm,$.aF,$.bX],l)
H.a([],p)
o=new G.e("Ghost Rider",k,n,o,0)
$.$get$c().h(0,o)
$.BX=o
o=H.a(["Logical"],p)
n=$.K
k=H.a([$.a0,$.bp],l)
H.a([],p)
o=new G.e("Logical",k,n,o,0)
$.$get$c().h(0,o)
$.CF=o
o=H.a(["Duelist's"],p)
n=$.ac
k=H.a([$.b1,$.as],l)
H.a([],p)
o=new G.e("Duelist's",k,n,o,0)
$.$get$c().h(0,o)
$.Bm=o
o=H.a(["Silenced"],p)
n=$.I
k=H.a([$.b1,$.az],l)
H.a([],p)
o=new G.e("Silenced",k,n,o,0)
$.$get$c().h(0,o)
$.wo=o
o=H.a(["Deudly"],p)
n=$.I
k=H.a([$.b1,$.bR],l)
H.a([],p)
o=new G.e("Deudly",k,n,o,0)
$.$get$c().h(0,o)
$.Ba=o
o=H.a(["Screaming"],p)
n=$.I
k=H.a([$.aS,$.b4],l)
H.a([],p)
o=new G.e("Screaming",k,n,o,0)
$.$get$c().h(0,o)
$.E4=o
o=H.a(["Cacophonous"],p)
n=$.K
k=H.a([$.bS,$.a7],l)
H.a([],p)
o=new G.e("Cacophonous",k,n,o,0)
$.$get$c().h(0,o)
$.AI=o
o=H.a(["Sublime"],p)
n=$.K
k=H.a([$.bS,$.aJ],l)
H.a([],p)
o=new G.e("Sublime",k,n,o,0)
$.$get$c().h(0,o)
$.ED=o
o=H.a(["Masterwork"],p)
n=$.x
k=H.a([$.aW,$.bc],l)
H.a([],p)
o=new G.e("Masterwork",k,n,o,0)
$.$get$c().h(0,o)
$.CO=o
o=H.a(["BroodFester"],p)
n=$.r
k=H.a([$.aA,$.b4,$.bq,$.a3],l)
H.a([],p)
o=new G.e("BroodFester",k,n,o,0)
$.$get$c().h(0,o)
$.AC=o
o=H.a(["[REDACTED]"],p)
n=$.r
k=H.a([$.bq,$.az],l)
H.a([],p)
o=new G.e("[REDACTED]",k,n,o,0)
$.$get$c().h(0,o)
$.DM=o
o=H.a(["Pop Rocks"],p)
n=$.r
k=H.a([$.aE,$.bs],l)
H.a([],p)
o=new G.e("Pop Rocks",k,n,o,0)
$.$get$c().h(0,o)
$.Dy=o
o=H.a(["Disguised"],p)
n=$.I
k=H.a([$.az,$.aw],l)
H.a([],p)
o=new G.e("Disguised",k,n,o,0)
$.$get$c().h(0,o)
$.Bh=o
o=H.a(["Haunted"],p)
n=$.I
k=H.a([$.aK,$.bX],l)
H.a([],p)
o=new G.e("Haunted",k,n,o,0)
$.$get$c().h(0,o)
$.C7=o
o=H.a(["Cognitohazardous"],p)
n=$.I
k=H.a([$.bq,$.a0],l)
H.a([],p)
o=new G.e("Cognitohazardous",k,n,o,0)
$.$get$c().h(0,o)
$.AZ=o
o=H.a(["Staticy"],p)
n=$.I
k=H.a([$.aK,$.a2],l)
H.a([],p)
o=new G.e("Staticy",k,n,o,0)
$.$get$c().h(0,o)
$.Ez=o
o=H.a(["Jadite"],p)
n=$.r
k=H.a([$.b3,$.bY],l)
H.a([],p)
o=new G.e("Jadite",k,n,o,0)
$.$get$c().h(0,o)
$.Cp=o
o=H.a(["Tickling"],p)
n=$.r
k=H.a([$.b8,$.aK],l)
H.a([],p)
o=new G.e("Tickling",k,n,o,0)
$.$get$c().h(0,o)
$.EO=o
o=H.a(["Composite"],p)
n=$.r
k=H.a([$.C,$.bQ],l)
H.a([],p)
o=new G.e("Composite",k,n,o,0)
$.$get$c().h(0,o)
$.B0=o
o=H.a(["High-Powered"],p)
n=$.I
k=H.a([$.bs,$.b1],l)
H.a([],p)
o=new G.e("High-Powered",k,n,o,0)
$.$get$c().h(0,o)
$.C8=o
o=H.a(["Concussive"],p)
n=$.r
k=H.a([$.bs,$.ab],l)
H.a([],p)
o=new G.e("Concussive",k,n,o,0)
$.$get$c().h(0,o)
$.B1=o
o=H.a(["Down"],p)
n=$.x
k=H.a([$.b7,$.bz],l)
H.a([],p)
o=new G.e("Down",k,n,o,0)
$.$get$c().h(0,o)
$.Bj=o
o=H.a(["Prickly"],p)
n=$.x
k=H.a([$.aK,$.aZ],l)
H.a([],p)
o=new G.e("Prickly",k,n,o,0)
$.$get$c().h(0,o)
$.DF=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.r
k=H.a([$.aK,$.az,$.a2],l)
H.a([],p)
o=new G.e("Deep-Web",k,n,o,0)
$.$get$c().h(0,o)
$.Bd=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.x
k=H.a([$.aZ,$.aH],l)
H.a([],p)
o=new G.e("Jagged",k,n,o,0)
$.$get$c().h(0,o)
$.Cq=o
o=H.a(["Nanofiber"],p)
n=$.x
k=H.a([$.Q,$.a0],l)
H.a([],p)
o=new G.e("Nanofiber",k,n,o,0)
$.$get$c().h(0,o)
$.D4=o
o=H.a(["Clanging"],p)
n=$.r
k=H.a([$.C,$.aS],l)
H.a([],p)
o=new G.e("Clanging",k,n,o,0)
$.$get$c().h(0,o)
$.AV=o
o=H.a(["Silver"],p)
n=$.x
k=H.a([$.C,$.as],l)
H.a([],p)
o=new G.e("Silver",k,n,o,0)
$.$get$c().h(0,o)
$.Ej=o
o=H.a(["Withered"],p)
n=$.I
k=H.a([$.aM,$.b5],l)
H.a([],p)
o=new G.e("Withered",k,n,o,0)
$.$get$c().h(0,o)
$.F3=o
o=H.a(["Shattered"],p)
n=$.I
k=H.a([$.b3,$.bR],l)
H.a([],p)
o=new G.e("Shattered",k,n,o,0)
$.$get$c().h(0,o)
$.Ea=o
o=H.a(["Miner's"],p)
n=$.ac
k=H.a([$.aG,$.C],l)
H.a([],p)
o=new G.e("Miner's",k,n,o,0)
$.$get$c().h(0,o)
$.CW=o
o=H.a(["Singing"],p)
n=$.r
k=H.a([$.a7,$.aA],l)
H.a([],p)
o=new G.e("Singing",k,n,o,0)
$.$get$c().h(0,o)
$.Eh=o
o=H.a(["Mitochondrial"],p)
n=$.r
k=H.a([$.bf,$.a2],l)
H.a([],p)
o=new G.e("Mitochondrial",k,n,o,0)
$.$get$c().h(0,o)
$.CX=o
o=H.a(["Blackout","EMP"],p)
n=$.r
k=H.a([$.az,$.a2],l)
H.a([],p)
o=new G.e("Blackout",k,n,o,0)
$.$get$c().h(0,o)
$.Ax=o
o=H.a(["Asbestos"],p)
n=$.x
k=H.a([$.aG,$.bL],l)
H.a([],p)
o=new G.e("Asbestos",k,n,o,0)
$.$get$c().h(0,o)
$.Aj=o
o=H.a(["Mercurial"],p)
n=$.x
k=H.a([$.bL,$.C],l)
H.a([],p)
o=new G.e("Mercurial",k,n,o,0)
$.$get$c().h(0,o)
$.CP=o
o=H.a(["Bulletproof"],p)
n=$.x
k=H.a([$.Q,$.ab],l)
H.a([],p)
o=new G.e("Bulletproof",k,n,o,0)
$.$get$c().h(0,o)
$.AF=o
o=H.a(["Cotton"],p)
n=$.x
k=H.a([$.b5,$.Q],l)
H.a([],p)
o=new G.e("Cotton",k,n,o,0)
$.$get$c().h(0,o)
$.B2=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.r
k=H.a([$.br,$.b_],l)
H.a([],p)
o=new G.e("Blinding",k,n,o,0)
$.$get$c().h(0,o)
$.Ay=o
o=H.a(["Brilliant"],p)
n=$.K
k=H.a([$.b_,$.a0],l)
H.a([],p)
o=new G.e("Brilliant",k,n,o,0)
$.$get$c().h(0,o)
$.AB=o
o=H.a(["Offensive"],p)
n=$.K
k=H.a([$.br,$.a0],l)
H.a([],p)
o=new G.e("Offensive",k,n,o,0)
$.$get$c().h(0,o)
$.Da=o
o=H.a(["Poached"],p)
n=$.I
k=H.a([$.bf,$.bc],l)
H.a([],p)
o=new G.e("Poached",k,n,o,0)
$.$get$c().h(0,o)
$.Du=o
o=H.a(["Tapestry"],p)
n=$.x
k=H.a([$.Q,$.aJ],l)
H.a([],p)
o=new G.e("Tapestry",k,n,o,0)
$.$get$c().h(0,o)
$.EG=o
o=H.a(["Itchy"],p)
n=$.K
k=H.a([$.Q,$.aK],l)
H.a([],p)
o=new G.e("Itchy",k,n,o,0)
$.$get$c().h(0,o)
$.Cn=o
o=H.a(["Wishbone"],p)
n=$.x
k=H.a([$.bF,$.b9],l)
H.a([],p)
o=new G.e("Wishbone",k,n,o,0)
$.$get$c().h(0,o)
$.F2=o
o=H.a(["Rattling"],p)
n=$.I
k=H.a([$.aS,$.b9],l)
H.a([],p)
o=new G.e("Rattling",k,n,o,0)
$.$get$c().h(0,o)
$.DK=o
o=H.a(["Cranial"],p)
n=$.x
k=H.a([$.a0,$.b9],l)
H.a([],p)
o=new G.e("Cranial",k,n,o,0)
$.$get$c().h(0,o)
$.B6=o
o=H.a(["Humerus"],p)
n=$.x
k=H.a([$.b8,$.b9],l)
H.a([],p)
o=new G.e("Humerus",k,n,o,0)
$.$get$c().h(0,o)
$.Cb=o
o=H.a(["Massage"],p)
n=$.r
k=H.a([$.b0,$.b7],l)
H.a([],p)
o=new G.e("Massage",k,n,o,0)
$.$get$c().h(0,o)
$.CN=o
o=H.a(["Pestersome","Irksome"],p)
n=$.K
k=H.a([$.aS,$.br],l)
H.a([],p)
o=new G.e("Pestersome",k,n,o,0)
$.$get$c().h(0,o)
$.Dj=o
o=H.a(["Shockwave"],p)
n=$.r
k=H.a([$.aS,$.bs],l)
H.a([],p)
o=new G.e("Shockwave",k,n,o,0)
$.$get$c().h(0,o)
$.Ed=o
o=H.a(["Antivenom"],p)
n=$.r
k=H.a([$.bL,$.b0],l)
H.a([],p)
o=new G.e("Antivenom",k,n,o,0)
$.$get$c().h(0,o)
$.Am=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.x
k=H.a([$.aF,$.a3],l)
H.a([],p)
o=new G.e("Will O Wisp",k,n,o,0)
$.$get$c().h(0,o)
$.F_=o
o=H.a(["Fiberglass"],p)
n=$.x
k=H.a([$.Q,$.b3],l)
H.a([],p)
o=new G.e("Fiberglass",k,n,o,0)
$.$get$c().h(0,o)
$.BD=o
o=H.a(["Skull"],p)
n=$.x
k=H.a([$.b9,$.b4],l)
H.a([],p)
o=new G.e("Skull",k,n,o,0)
$.$get$c().h(0,o)
$.En=o
o=H.a(["Enchanted"],p)
n=$.I
k=H.a([$.a3,$.bF],l)
H.a([],p)
o=new G.e("Enchanted",k,n,o,0)
$.$get$c().h(0,o)
$.Bv=o
o=H.a(["Berserker's"],p)
n=$.ac
k=H.a([$.a3,$.br],l)
H.a([],p)
o=new G.e("Berserker's",k,n,o,0)
$.$get$c().h(0,o)
$.Aw=o
o=H.a(["Clerical"],p)
n=$.ac
k=H.a([$.a3,$.b0],l)
H.a([],p)
o=new G.e("Clerical",k,n,o,0)
$.$get$c().h(0,o)
$.AW=o
o=H.a(["Cauterizing"],p)
n=$.r
k=H.a([$.b0,$.aF],l)
H.a([],p)
o=new G.e("Cauterizing",k,n,o,0)
$.$get$c().h(0,o)
$.AO=o
o=H.a(["X-Ray"],p)
n=$.r
k=H.a([$.bY,$.b_],l)
H.a([],p)
o=new G.e("X-Ray",k,n,o,0)
$.$get$c().h(0,o)
$.F6=o
o=H.a(["Clever"],p)
n=$.K
k=H.a([$.a0,$.bF],l)
H.a([],p)
o=new G.e("Clever",k,n,o,0)
$.$get$c().h(0,o)
$.AX=o
o=H.a(["Fireplace"],p)
n=$.r
k=H.a([$.b7,$.aF],l)
H.a([],p)
o=new G.e("Fireplace",k,n,o,0)
$.$get$c().h(0,o)
$.BG=o
o=H.a(["Crackling"],p)
n=$.I
k=H.a([$.aS,$.aF],l)
H.a([],p)
o=new G.e("Crackling",k,n,o,0)
$.$get$c().h(0,o)
$.B5=o
o=H.a(["Thumping"],p)
n=$.I
k=H.a([$.aS,$.ca],l)
H.a([],p)
o=new G.e("Thumping",k,n,o,0)
$.$get$c().h(0,o)
$.EM=o
o=H.a(["Shrieking","Banshee"],p)
n=$.I
k=H.a([$.bX,$.aS],l)
H.a([],p)
o=new G.e("Banshee",k,n,o,0)
$.$get$c().h(0,o)
$.Ef=o
o=H.a(["Surreal"],p)
n=$.K
k=H.a([$.b8,$.bq],l)
H.a([],p)
o=new G.e("Surreal2",k,n,o,0)
$.$get$c().h(0,o)
$.EF=o
o=H.a(["Aloe","Willowbark"],p)
n=$.r
k=H.a([$.b0,$.b5],l)
H.a([],p)
o=new G.e("Aloe",k,n,o,0)
$.$get$c().h(0,o)
$.Al=o
o=H.a(["Rose"],p)
n=$.r
k=H.a([$.aO,$.b5],l)
H.a([],p)
o=new G.e("Rose",k,n,o,0)
$.$get$c().h(0,o)
$.DQ=o
o=H.a(["Knock Knock"],p)
n=$.r
k=H.a([$.b8,$.ab],l)
H.a([],p)
o=new G.e("Knock Knock",k,n,o,0)
$.$get$c().h(0,o)
$.Cv=o
o=H.a(["Lifesteal"],p)
n=$.r
k=H.a([$.a3,$.bL],l)
H.a([],p)
o=new G.e("Lifesteal",k,n,o,0)
$.$get$c().h(0,o)
$.Cy=o
o=H.a(["Tragic"],p)
n=$.r
k=H.a([$.aJ,$.aM],l)
H.a([],p)
o=new G.e("Tragic",k,n,o,0)
$.$get$c().h(0,o)
$.ER=o
o=H.a(["Slapstick"],p)
n=$.r
k=H.a([$.aH,$.b8],l)
H.a([],p)
o=new G.e("Slapstick",k,n,o,0)
$.$get$c().h(0,o)
$.Eo=o
o=H.a(["Gross Out"],p)
n=$.r
k=H.a([$.bS,$.b8],l)
H.a([],p)
o=new G.e("Gross Out",k,n,o,0)
$.$get$c().h(0,o)
$.w9=o
o=H.a(["Flowery"],p)
n=$.x
k=H.a([$.aJ,$.b5],l)
H.a([],p)
o=new G.e("Flowery",k,n,o,0)
$.$get$c().h(0,o)
$.BM=o
o=H.a(["Poison Ivy"],p)
n=$.x
k=H.a([$.bL,$.b5],l)
H.a([],p)
o=new G.e("Poison Ivy",k,n,o,0)
$.$get$c().h(0,o)
$.Dw=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.I
k=H.a([$.a3,$.bz],l)
H.a([],p)
o=new G.e("Winged",k,n,o,0)
$.$get$c().h(0,o)
$.F0=o
o=H.a(["Forbidden Fruit"],p)
n=$.r
k=H.a([$.b5,$.aE,$.aM],l)
H.a([],p)
o=new G.e("Forbidden Fruit",k,n,o,0)
$.$get$c().h(0,o)
$.BQ=o
o=H.a(["Lawful"],p)
n=$.K
k=H.a([$.bg,$.aA],l)
H.a([],p)
o=new G.e("Lawful",k,n,o,0)
$.$get$c().h(0,o)
$.Cw=o
o=H.a(["Chaotic"],p)
n=$.K
k=H.a([$.br,$.aA],l)
H.a([],p)
o=new G.e("Chaotic",k,n,o,0)
$.$get$c().h(0,o)
$.tA=o
o=H.a(["Hypothermic"],p)
n=$.I
k=H.a([$.aM,$.bp],l)
H.a([],p)
o=new G.e("Hypothermic",k,n,o,0)
$.$get$c().h(0,o)
$.Ce=o
o=H.a(["Hyperthermic"],p)
n=$.I
k=H.a([$.aM,$.aF],l)
H.a([],p)
o=new G.e("Hyperthermic",k,n,o,0)
$.$get$c().h(0,o)
$.Cc=o
o=H.a(["Shackled"],p)
n=$.I
k=H.a([$.bg,$.ca],l)
H.a([],p)
o=new G.e("Shackled",k,n,o,0)
$.$get$c().h(0,o)
$.E6=o
o=H.a(["Poetic"],p)
n=$.K
k=H.a([$.a0,$.aO],l)
H.a([],p)
o=new G.e("Poetic",k,n,o,0)
$.$get$c().h(0,o)
$.Dv=o
o=H.a(["Holographic"],p)
n=$.x
k=H.a([$.b_,$.a0,$.b3,$.a2],l)
H.a([],p)
o=new G.e("Holographic",k,n,o,0)
$.$get$c().h(0,o)
$.C9=o
o=H.a(["Casket","Coffin"],p)
n=$.x
k=H.a([$.W,$.aM],l)
H.a([],p)
o=new G.e("Casket",k,n,o,0)
$.$get$c().h(0,o)
$.AN=o
o=H.a(["Spectral"],p)
n=$.x
k=H.a([$.bX,$.a3],l)
H.a([],p)
o=new G.e("Spectral",k,n,o,0)
$.$get$c().h(0,o)
$.Eu=o
o=H.a(["Phoenix"],p)
n=$.x
k=H.a([$.aF,$.bz],l)
H.a([],p)
o=new G.e("Phoenix",k,n,o,0)
$.$get$c().h(0,o)
$.Dk=o
o=H.a(["Tattered"],p)
n=$.I
k=H.a([$.Q,$.aM],l)
H.a([],p)
o=new G.e("Tattered",k,n,o,0)
$.$get$c().h(0,o)
$.EJ=o
o=H.a(["Woodwind","Reed"],p)
n=$.r
k=H.a([$.a7,$.W],l)
H.a([],p)
o=new G.e("Woodwind",k,n,o,0)
$.$get$c().h(0,o)
$.F5=o
o=H.a(["Bone Hurting"],p)
n=$.r
k=H.a([$.aK,$.b9],l)
H.a([],p)
o=new G.e("Bone Hurting",k,n,o,0)
$.$get$c().h(0,o)
$.mu=o
o=H.a(["Bone Healing:"],p)
n=$.r
k=H.a([$.b0,$.b9],l)
H.a([],p)
o=new G.e("Bone Healing:",k,n,o,0)
$.$get$c().h(0,o)
$.tx=o
o=H.a(["Calcium"],p)
n=$.x
k=H.a([$.b9,$.b0,$.aE],l)
H.a([],p)
o=new G.e("Calcium",k,n,o,0)
$.$get$c().h(0,o)
$.AJ=o
o=H.a(["Fleece"],p)
n=$.x
k=H.a([$.Q,$.aF],l)
H.a([],p)
o=new G.e("Fleece",k,n,o,0)
$.$get$c().h(0,o)
$.BJ=o
o=H.a(["Potted"],p)
n=$.x
k=H.a([$.bQ,$.b5],l)
H.a([],p)
o=new G.e("Potted",k,n,o,0)
$.$get$c().h(0,o)
$.DE=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.x
k=H.a([$.C,$.aE],l)
H.a([],p)
o=new G.e("Canned",k,n,o,0)
$.$get$c().h(0,o)
$.AL=o
o=H.a(["Diseased"],p)
n=$.I
k=H.a([$.aM,$.bf],l)
H.a([],p)
o=new G.e("Diseased",k,n,o,0)
$.$get$c().h(0,o)
$.Be=o
o=H.a(["Porcupine"],p)
n=$.x
k=H.a([$.aZ,$.cg],l)
H.a([],p)
o=new G.e("Porcupine",k,n,o,0)
$.$get$c().h(0,o)
$.DA=o
o=H.a(["Fanged"],p)
n=$.I
k=H.a([$.b9,$.aZ],l)
H.a([],p)
o=new G.e("Fanged",k,n,o,0)
$.$get$c().h(0,o)
$.Bz=o
o=H.a(["Basalt"],p)
n=$.x
k=H.a([$.aG,$.az],l)
H.a([],p)
o=new G.e("Basalt",k,n,o,0)
$.$get$c().h(0,o)
$.At=o
o=H.a(["Obsidian"],p)
n=$.x
k=H.a([$.b3,$.az],l)
H.a([],p)
o=new G.e("Obsidian",k,n,o,0)
$.$get$c().h(0,o)
$.D9=o
o=H.a(["Fenestrated"],p)
n=$.x
k=H.a([$.b3,$.W],l)
H.a([],p)
o=new G.e("Fenestrated",k,n,o,0)
$.$get$c().h(0,o)
$.BB=o
o=H.a(["Plexiglass"],p)
n=$.x
k=H.a([$.b3,$.aN],l)
H.a([],p)
o=new G.e("Plexiglass",k,n,o,0)
$.$get$c().h(0,o)
$.Ds=o
o=H.a(["Ceramic Wrap"],p)
n=$.r
k=H.a([$.bQ,$.N],l)
H.a([],p)
o=new G.e("Ceramic Wrap",k,n,o,0)
$.$get$c().h(0,o)
$.AR=o
o=H.a(["Fungal"],p)
n=$.x
k=H.a([$.b5,$.bS],l)
H.a([],p)
o=new G.e("Fungal",k,n,o,0)
$.$get$c().h(0,o)
$.BU=o
o=H.a(["Thorny"],p)
n=$.I
k=H.a([$.b5,$.aZ],l)
H.a([],p)
o=new G.e("Thorny",k,n,o,0)
$.$get$c().h(0,o)
$.EL=o
o=H.a(["Bulbed"],p)
n=$.I
k=H.a([$.b5,$.ab],l)
H.a([],p)
o=new G.e("Bulbed",k,n,o,0)
$.$get$c().h(0,o)
$.AE=o
o=H.a(["Glass Cannon"],p)
n=$.r
k=H.a([$.b3,$.b1],l)
H.a([],p)
o=new G.e("Glass Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.C_=o
o=H.a(["Caoutchouc"],p)
n=$.r
k=H.a([$.b5,$.c2],l)
H.a([],p)
o=new G.e("Caoutchouc",k,n,o,0)
$.$get$c().h(0,o)
$.Dq=o
o=H.a(["Cellulose"],p)
n=$.x
k=H.a([$.b5,$.aN],l)
H.a([],p)
o=new G.e("Cellulose",k,n,o,0)
$.$get$c().h(0,o)
$.AQ=o
o=H.a(["Horrorcore"],p)
n=$.r
k=H.a([$.a7,$.b4],l)
H.a([],p)
o=new G.e("Horrorcore",k,n,o,0)
$.$get$c().h(0,o)
$.Ca=o
o=H.a(["Nightcore"],p)
n=$.r
k=H.a([$.bq,$.a7],l)
H.a([],p)
o=new G.e("Nightcore",k,n,o,0)
$.$get$c().h(0,o)
$.D6=o
o=H.a(["Crazy Bus"],p)
n=$.r
k=H.a([$.bq,$.a2,$.a7],l)
H.a([],p)
o=new G.e("Crazy Bus",k,n,o,0)
$.$get$c().h(0,o)
$.B7=o
o=H.a(["Burdock"],p)
n=$.x
k=H.a([$.b5,$.cg],l)
H.a([],p)
o=new G.e("Burdock",k,n,o,0)
$.$get$c().h(0,o)
$.AG=o
o=H.a(["Necrotic"],p)
n=$.I
k=H.a([$.b9,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Necrotic",k,n,o,0))
o=H.a(["Stem"],p)
n=$.x
k=H.a([$.b9,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stem",k,n,o,0))
o=H.a(["DryBone"],p)
n=$.I
k=H.a([$.b9,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("DryBone",k,n,o,0))
o=H.a(["XyloBone"],p)
n=$.r
k=H.a([$.b9,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("XyloBone",k,n,o,0))
o=H.a(["Ribcage"],p)
n=$.x
k=H.a([$.b9,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ribcage",k,n,o,0))
o=H.a(["BoneZone"],p)
n=$.r
k=H.a([$.b9,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("BoneZone",k,n,o,0))
o=H.a(["Creaky"],p)
n=$.K
k=H.a([$.W,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Creaky",k,n,o,0))
o=H.a(["Maple"],p)
n=$.x
k=H.a([$.W,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Maple",k,n,o,0))
o=H.a(["Mahagony"],p)
n=$.x
k=H.a([$.W,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mahagony",k,n,o,0))
o=H.a(["Fenced"],p)
n=$.I
k=H.a([$.W,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fenced",k,n,o,0))
o=H.a(["Bocote"],p)
n=$.x
k=H.a([$.W,$.bc],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bocote",k,n,o,0))
o=H.a(["Incense"],p)
n=$.x
k=H.a([$.W,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.e("Incense",k,n,o,0))
o=H.a(["Ebony"],p)
n=$.r
k=H.a([$.W,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ebony",k,n,o,0))
o=H.a(["Birch"],p)
n=$.x
k=H.a([$.W,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Birch",k,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.r
k=H.a([$.W,$.bF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Knock-on-Wood",k,n,o,0))
o=H.a(["Firewood"],p)
n=$.r
k=H.a([$.W,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Firewood",k,n,o,0))
o=H.a(["BlackForest"],p)
n=$.ac
k=H.a([$.W,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("BlackForest",k,n,o,0))
o=H.a(["Tree"],p)
n=$.x
k=H.a([$.W,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tree",k,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.x
k=H.a([$.W,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ebonwood",k,n,o,0))
o=H.a(["Bark"],p)
n=$.x
k=H.a([$.W,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bark",k,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.r
k=H.a([$.W,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.e("Caveman's",k,n,o,0))
o=H.a(["3D Printed"],p)
n=$.x
k=H.a([$.aN,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("3D Printed",k,n,o,0))
o=H.a(["Thesis"],p)
n=$.r
k=H.a([$.N,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thesis",k,n,o,0))
o=H.a(["Graphene"],p)
n=$.x
k=H.a([$.N,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Graphene",k,n,o,0))
o=H.a(["Prophecy"],p)
n=$.r
k=H.a([$.N,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Prophecy",k,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.r
k=H.a([$.Q,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bedsheet",k,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.x
k=H.a([$.aG,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gemstone",k,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.r
k=H.a([$.aG,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pet Rock",k,n,o,0))
o=H.a(["Sand"],p)
n=$.x
k=H.a([$.aG,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sand",k,n,o,0))
o=H.a(["Geode"],p)
n=$.x
k=H.a([$.aG,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Geode",k,n,o,0))
o=H.a(["Silicon"],p)
n=$.x
k=H.a([$.aG,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silicon",k,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.x
k=H.a([$.aG,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cryolite",k,n,o,0))
o=H.a(["Meteor"],p)
n=$.x
k=H.a([$.aG,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.e("Meteor",k,n,o,0))
o=H.a(["Carbon"],p)
n=$.x
k=H.a([$.aG,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carbon",k,n,o,0))
o=H.a(["Mossy"],p)
n=$.I
k=H.a([$.aG,$.cg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mossy",k,n,o,0))
o=H.a(["Lensed"],p)
n=$.I
k=H.a([$.a0,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lensed",k,n,o,0))
o=H.a(["Hide"],p)
n=$.I
k=H.a([$.Q,$.bf],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hide",k,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.r
k=H.a([$.Q,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("FeatherBoa",k,n,o,0))
o=H.a(["Tacky"],p)
n=$.K
k=H.a([$.Q,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tacky",k,n,o,0))
o=H.a(["Whip"],p)
n=$.r
k=H.a([$.Q,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.e("Whip",k,n,o,0))
o=H.a(["Costumed"],p)
n=$.r
k=H.a([$.Q,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Costumed",k,n,o,0))
o=H.a(["Punk"],p)
n=$.K
k=H.a([$.Q,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Punk",k,n,o,0))
o=H.a(["Weighted"],p)
n=$.I
k=H.a([$.Q,$.ca],l)
H.a([],p)
$.$get$c().h(0,new G.e("Weighted",k,n,o,0))
o=H.a(["Favorite"],p)
n=$.K
k=H.a([$.Q,$.bF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Favorite",k,n,o,0))
o=H.a(["Novelty"],p)
n=$.K
k=H.a([$.Q,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Novelty",k,n,o,0))
o=H.a(["Security"],p)
n=$.x
k=H.a([$.Q,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.e("Security",k,n,o,0))
o=H.a(["IcePack"],p)
n=$.x
k=H.a([$.Q,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.e("IcePack",k,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.r
k=H.a([$.Q,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("MotionCapture",k,n,o,0))
o=H.a(["Silica"],p)
n=$.x
k=H.a([$.Q,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silica",k,n,o,0))
o=H.a(["Harp"],p)
n=$.x
k=H.a([$.Q,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Harp",k,n,o,0))
o=H.a(["Silk"],p)
n=$.x
k=H.a([$.Q,$.bc],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silk",k,n,o,0))
o=H.a(["RedFlag"],p)
n=$.x
k=H.a([$.Q,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.e("RedFlag",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.x
k=H.a([$.Q,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("MagicCarpet1",k,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.x
k=H.a([$.Q,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Satin",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.x
k=H.a([$.Q,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("MagicCarpet2",k,n,o,0))
o=H.a(["Tweed"],p)
n=$.x
k=H.a([$.Q,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tweed",k,n,o,0))
o=H.a(["Jean"],p)
n=$.x
k=H.a([$.Q,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Jean",k,n,o,0))
o=H.a(["Tesla"],p)
n=$.ac
k=H.a([$.a0,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tesla",k,n,o,0))
o=H.a(["Ashwood"],p)
n=$.x
k=H.a([$.a3,$.W],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ashwood",k,n,o,0))
o=H.a(["Peashooter"],p)
n=$.x
k=H.a([$.b5,$.b1],l)
H.a([],p)
$.$get$c().h(0,new G.e("Peashooter",k,n,o,0))
o=H.a(["Lacquer"],p)
n=$.x
k=H.a([$.aN,$.W],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lacquer",k,n,o,0))
o=H.a(["Classpecty"],p)
n=$.x
k=H.a([$.P,$.H],l)
H.a([],p)
$.$get$c().h(0,new G.e("Classpecty",k,n,o,0))
o=H.a(["Smartass"],p)
n=$.K
k=H.a([$.a0,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smartass",k,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.K
k=H.a([$.aW,$.aw,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Miraculous",k,n,o,0))
o=H.a(["Pigeon"],p)
n=$.x
k=H.a([$.bq,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pigeon",k,n,o,0))
o=H.a(["Grimoire"],p)
n=$.r
k=H.a([$.bq,$.N],l)
H.a([],p)
$.$get$c().h(0,new G.e("Grimoire",k,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.ac
k=H.a([$.bq,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Oglogoth's",k,n,o,0))
o=H.a(["Echidna's"],p)
n=$.ac
k=H.a([$.a_,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Echidna's",k,n,o,0))
o=H.a(["Superior"],p)
n=$.ac
k=H.a([$.a0,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Superior",k,n,o,0))
o=H.a(["Lego"],p)
n=$.x
k=H.a([$.a_,$.aN,$.bo,$.ab],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lego",k,n,o,0))
o=H.a(["Yardstick"],p)
n=$.r
k=H.a([$.a_,$.dj,$.W,$.N],l)
H.a([],p)
$.$get$c().h(0,new G.e("Yardstick",k,n,o,0))
o=H.a(["Queenly"],p)
n=$.ac
k=H.a([$.az,$.a3,$.aW,$.aK,$.b4],l)
H.a([],p)
o=new G.e("Queenly",k,n,o,0)
$.$get$c().h(0,o)
$.DH=o
o=H.a(["Kingly"],p)
n=$.ac
k=H.a([$.b4,$.ab,$.ca,$.a3,$.aW],l)
H.a([],p)
o=new G.e("Kingly",k,n,o,0)
$.$get$c().h(0,o)
$.Cu=o
o=H.a(["Jack"],p)
n=$.ac
k=H.a([$.aZ,$.aH,$.C,$.az],l)
H.a([],p)
o=new G.e("Jack",k,n,o,0)
$.$get$c().h(0,o)
$.Co=o
o=H.a(["Codpiece","Codtier"],p)
n=$.r
k=H.a([$.a_,$.aw,$.W,$.P,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("Codpiece",k,n,o,0))
o=H.a(["Graceful"],p)
n=$.r
k=H.a([$.a_,$.aI,$.N,$.C,$.a0,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.e("Graceful",k,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.r
k=H.a([$.a_,$.aI,$.N,$.a0,$.P,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guide",k,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.r
k=H.a([$.a_,$.aM,$.N,$.a0,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Testament",k,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.ac
k=H.a([$.a_,$.b_,$.C,$.aZ,$.aH,$.et],l)
H.a([],p)
$.$get$c().h(0,new G.e("Excalibur",k,n,o,0))
o=H.a(["Influential"],p)
n=$.ac
k=H.a([$.a_,$.N,$.br,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Influential",k,n,o,0))
o=H.a(["Alternative"],p)
n=$.ac
k=H.a([$.a_,$.a3,$.Q,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Alternative",k,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.ac
k=H.a([$.a_,$.aK,$.b9,$.C,$.ff,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Valkyrie",k,n,o,0))
o=H.a(["Ongoing"],p)
n=$.ac
k=H.a([$.a_,$.aG,$.as,$.hl,$.ab],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ongoing",k,n,o,0))
o=H.a(["Short"],p)
n=$.I
k=H.a([$.a_,$.Q,$.bc,$.aJ,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Short",k,n,o,0))
o=H.a(["Crown"],p)
n=$.r
k=H.a([$.a_,$.C,$.bc,$.aJ,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crown",k,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.r
k=H.a([$.a_,$.aN,$.a2,$.az,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gristtorrent",k,n,o,0))
o=H.a(["Robe"],p)
n=$.r
k=H.a([$.a_,$.Q,$.a0,$.a3,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Robe",k,n,o,0))
o=H.a(["Beret"],p)
n=$.r
k=H.a([$.a_,$.Q,$.a0,$.aJ,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beret",k,n,o,0))
o=H.a(["Blank"],p)
n=$.I
k=$.a_
j=$.N
i=$.a0
i=H.a([k,j,i,$.aI,i,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Blank",i,n,o,0))
o=H.a(["Cueball"],p)
n=$.x
i=H.a([$.a_,$.aJ,$.bQ,$.ab,$.es,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cueball",i,n,o,0))
o=H.a(["Meddler's"],p)
n=$.ac
i=H.a([$.a_,$.aI,$.N,$.br,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Meddler's",i,n,o,0))
o=H.a(["Scroll"],p)
n=$.ac
i=H.a([$.a3,$.N],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scroll",i,n,o,0))
o=H.a(["Tome"],p)
n=$.r
i=H.a([$.N,$.a0,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tome",i,n,o,0))
o=H.a(["Lockpick"],p)
n=$.r
i=H.a([$.a_,$.C,$.az,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lockpick",i,n,o,0))
o=H.a(["Warped"],p)
n=$.I
i=H.a([$.a_,$.C,$.b3,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Warped",i,n,o,0))
o=H.a(["Stairs"],p)
n=$.r
i=H.a([$.a_,$.aw,$.W,$.ay,$.bo,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stairs",i,n,o,0))
o=H.a(["Rocket"],p)
n=$.r
i=H.a([$.a_,$.aF,$.C,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rocket",i,n,o,0))
o=H.a(["~ATH"],p)
n=$.r
i=H.a([$.a_,$.a2,$.N,$.aI,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("~ATH",i,n,o,0))
o=H.a(["Puppeted"],p)
n=$.r
i=H.a([$.a_,$.W,$.aA,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Puppeted",i,n,o,0))
o=H.a(["Angelic"],p)
n=$.ac
i=H.a([$.a_,$.aW,$.bz,$.b_,$.a7,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Angelic",i,n,o,0))
o=H.a(["Vitae"],p)
n=$.x
i=H.a([$.a_,$.b0,$.b3,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vitae",i,n,o,0))
o=H.a(["Fluorite"],p)
n=$.x
i=H.a([$.a_,$.b_,$.bF,$.aG,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fluorite",i,n,o,0))
o=H.a(["Janus"],p)
n=$.ac
i=H.a([$.a_,$.aK,$.aG,$.as,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Janus",i,n,o,0))
o=H.a(["Bacchus"],p)
n=$.ac
i=H.a([$.a_,$.aE,$.br,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bacchus",i,n,o,0))
o=H.a(["TurnTable"],p)
n=$.ac
i=H.a([$.a_,$.C,$.a7,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("TurnTable",i,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.K
i=H.a([$.a_,$.b3,$.bY,$.b_,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("???",i,n,o,0))
o=H.a(["Demonite"],p)
n=$.x
i=H.a([$.C,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.e("Demonite",i,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.ac
i=H.a([$.C,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stymphalian",i,n,o,0))
o=H.a(["Junky"],p)
n=$.x
i=H.a([$.C,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Junky",i,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.x
i=H.a([$.C,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cold Iron",i,n,o,0))
o=H.a(["Bolted"],p)
n=$.I
i=H.a([$.C,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bolted",i,n,o,0))
o=H.a(["Armored"],p)
n=$.I
i=H.a([$.C,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Armored",i,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.x
i=H.a([$.C,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Heartsteel",i,n,o,0))
o=H.a(["Brick"],p)
n=$.x
i=H.a([$.bQ,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.e("Brick",i,n,o,0))
o=H.a(["Clay"],p)
n=$.x
i=H.a([$.bQ,$.c2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Clay",i,n,o,0))
o=H.a(["Mugly"],p)
n=$.K
i=H.a([$.bQ,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mugly",i,n,o,0))
o=H.a(["Plate"],p)
n=$.x
i=H.a([$.bQ,$.ab],l)
H.a([],p)
$.$get$c().h(0,new G.e("Plate",i,n,o,0))
o=H.a(["Terracotta"],p)
n=$.x
i=H.a([$.bQ,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Terracotta",i,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.x
i=H.a([$.bQ,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Semiconductive",i,n,o,0))
o=H.a(["Vinyl"],p)
n=$.x
i=H.a([$.bQ,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vinyl",i,n,o,0))
o=H.a(["Artisan"],p)
n=$.I
i=H.a([$.bQ,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Artisan",i,n,o,0))
o=H.a(["Tiled"],p)
n=$.x
i=H.a([$.bQ,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tiled",i,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.I
i=H.a([$.bQ,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hand-Sculpted",i,n,o,0))
o=H.a(["Handicraft"],p)
n=$.K
i=H.a([$.bR,$.N],l)
H.a([],p)
$.$get$c().h(0,new G.e("Handicraft",i,n,o,0))
o=H.a(["Torn"],p)
n=$.I
i=H.a([$.bR,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("Torn",i,n,o,0))
o=H.a(["Grotesque"],p)
n=$.K
i=H.a([$.bR,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Grotesque",i,n,o,0))
o=H.a(["Flickering"],p)
n=$.I
i=H.a([$.bR,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Flickering",i,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.x
i=H.a([$.bR,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thinly Veiled",i,n,o,0))
o=H.a(["Fragile"],p)
n=$.I
i=H.a([$.bR,$.bc],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fragile",i,n,o,0))
o=H.a(["Troll's"],p)
n=$.ac
i=H.a([$.bR,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.e("Troll's",i,n,o,0))
o=H.a(["Sappy"],p)
n=$.x
i=H.a([$.bR,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sappy",i,n,o,0))
o=H.a(["Bootleg"],p)
n=$.x
i=H.a([$.bR,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bootleg",i,n,o,0))
o=H.a(["Distorted"],p)
n=$.x
i=H.a([$.bR,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Distorted",i,n,o,0))
o=H.a(["Ent's"],p)
n=$.ac
i=H.a([$.W,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ent's",i,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.x
i=H.a([$.W,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.e("WeepingWillow",i,n,o,0))
o=H.a(["Latex"],p)
n=$.x
i=H.a([$.W,$.c2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Latex",i,n,o,0))
o=H.a(["Turf"],p)
n=$.x
i=H.a([$.aN,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Turf",i,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.r
i=H.a([$.c2,$.bo],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stress Relieving",i,n,o,0))
o=H.a(["R-Rated"],p)
n=$.I
i=H.a([$.c2,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("R-Rated",i,n,o,0))
o=H.a(["Racing"],p)
n=$.r
i=H.a([$.c2,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Racing",i,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.r
i=H.a([$.N,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cross Stitch",i,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.r
i=H.a([$.N,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("LoveLetter",i,n,o,0))
o=H.a(["EbonStone"],p)
n=$.x
i=H.a([$.aG,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.e("EbonStone",i,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.x
i=H.a([$.aG,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rock Candy",i,n,o,0))
o=H.a(["Smashing"],p)
n=$.K
i=H.a([$.aG,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smashing",i,n,o,0))
o=H.a(["Anomalous"],p)
n=$.K
i=H.a([$.bX,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.e("Anomalous",i,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.x
i=H.a([$.bX,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Onmoraki",i,n,o,0))
o=H.a(["Ghastly"],p)
n=$.K
i=H.a([$.bX,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ghastly",i,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.x
i=H.a([$.bX,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shade",i,n,o,0))
o=H.a(["Choral"],p)
n=$.x
i=H.a([$.bX,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Choral",i,n,o,0))
o=H.a(["Eerie"],p)
n=$.x
i=H.a([$.bX,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Eerie",i,n,o,0))
o=H.a(["Spiritual"],p)
n=$.K
i=H.a([$.bX,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Spiritual",i,n,o,0))
o=H.a(["Heart"],p)
n=$.x
i=H.a([$.bf,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Heart",i,n,o,0))
o=H.a(["Primordial"],p)
n=$.x
i=H.a([$.bf,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Primordial",i,n,o,0))
o=H.a(["Eyeball"],p)
n=$.x
i=H.a([$.bf,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Eyeball",i,n,o,0))
o=H.a(["Vulture"],p)
n=$.I
i=H.a([$.bf,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vulture",i,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.r
i=H.a([$.bq,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("BlackMagic",i,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.x
i=H.a([$.bq,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doppelganger",i,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.I
i=H.a([$.bq,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Incomprehensible",i,n,o,0))
o=H.a(["Destructive"],p)
n=$.r
i=H.a([$.bq,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Destructive",i,n,o,0))
o=H.a(["Growling"],p)
n=$.I
i=H.a([$.cg,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Growling",i,n,o,0))
o=H.a(["Coconut"],p)
n=$.x
i=H.a([$.cg,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Coconut",i,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.ac
i=H.a([$.cg,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beastmaster's",i,n,o,0))
o=H.a(["Fluffy"],p)
n=$.x
i=H.a([$.cg,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fluffy",i,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.x
i=H.a([$.b5,$.bz],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fern",i,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.I
i=H.a([$.b5,$.bF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Four Leafed",i,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.x
i=H.a([$.b5,$.az],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shrubbery",i,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.x
i=H.a([$.b5,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ecballium",i,n,o,0))
o=H.a(["Truffle"],p)
n=$.x
i=H.a([$.b5,$.bc],l)
H.a([],p)
$.$get$c().h(0,new G.e("Truffle",i,n,o,0))
o=H.a(["Vine"],p)
n=$.x
i=H.a([$.b5,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vine",i,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.x
i=H.a([$.b5,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("CorpseBlossom",i,n,o,0))
o=H.a(["Fruity"],p)
n=$.I
i=H.a([$.b5,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fruity",i,n,o,0))
o=H.a(["Squawking"],p)
n=$.I
i=H.a([$.bz,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Squawking",i,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.x
i=H.a([$.bz,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Poultry",i,n,o,0))
o=H.a(["Dove"],p)
n=$.x
i=H.a([$.bz,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dove",i,n,o,0))
o=H.a(["Peacock"],p)
n=$.x
i=H.a([$.bz,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Peacock",i,n,o,0))
o=H.a(["Stork"],p)
n=$.x
i=H.a([$.bz,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stork",i,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.x
i=H.a([$.bz,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Zhenniao",i,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.x
i=H.a([$.bz,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dodo",i,n,o,0))
o=H.a(["Raven"],p)
n=$.tU
i=H.a([$.bz,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Raven",i,n,o,0))
o=H.a(["Frilled"],p)
n=$.I
i=H.a([$.bz,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Frilled",i,n,o,0))
o=H.a(["Horrifying"],p)
n=$.K
i=H.a([$.bS,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Horrifying",i,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.r
i=H.a([$.aH,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Burning Edge",i,n,o,0))
o=H.a(["Scapel"],p)
n=$.r
i=H.a([$.aH,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scapel",i,n,o,0))
o=H.a(["Menacing"],p)
n=$.K
i=H.a([$.b4,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Menacing",i,n,o,0))
o=H.a(["Syringe"],p)
n=$.r
i=H.a([$.b0,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Syringe",i,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.K
i=H.a([$.aE,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bitter",i,n,o,0))
o=H.a(["Pineapple"],p)
n=$.x
i=H.a([$.aE,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pineapple",i,n,o,0))
o=H.a(["Crunchy"],p)
n=$.K
i=H.a([$.aE,$.ab],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crunchy",i,n,o,0))
o=H.a(["Bass"],p)
n=$.r
i=H.a([$.ca,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bass",i,n,o,0))
o=H.a(["Rigid"],p)
n=$.r
i=H.a([$.ca,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rigid",i,n,o,0))
o=H.a(["Prop"],p)
n=$.r
i=H.a([$.b1,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Prop",i,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.r
i=H.a([$.b1,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Magic Missle",i,n,o,0))
o=H.a(["Gangster's"],p)
n=$.ac
i=H.a([$.b1,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gangster's",i,n,o,0))
o=H.a(["Cupid's"],p)
n=$.ac
i=H.a([$.b1,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cupid's",i,n,o,0))
o=H.a(["Turreted"],p)
n=$.I
i=H.a([$.b1,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Turreted",i,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.I
i=H.a([$.b1,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("AutoTarget",i,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.ac
i=H.a([$.b1,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guerilla's",i,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.r
i=H.a([$.b1,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rail",i,n,o,0))
o=H.a(["Tau"],p)
n=$.r
i=H.a([$.b1,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tau",i,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.r
i=H.a([$.b1,$.b_],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pew",i,n,o,0))
o=H.a(["Thermal"],p)
n=$.I
i=H.a([$.b1,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thermal",i,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.x
i=H.a([$.b_,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Plasma",i,n,o,0))
o=H.a(["Shredding"],p)
n=$.x
i=H.a([$.a7,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shredding",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.x
i=H.a([$.bF,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Leprechaun",i,n,o,0))
o=H.a(["Charmed"],p)
n=$.x
i=H.a([$.bF,$.bc],l)
H.a([],p)
$.$get$c().h(0,new G.e("Charmed",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.ac
i=H.a([$.bF,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Leprechaun",i,n,o,0))
o=H.a(["Prospitian"],p)
n=$.ac
i=H.a([$.b_,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Prospitian",i,n,o,0))
o=H.a(["Vigilant"],p)
n=$.I
i=H.a([$.b_,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vigilant",i,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.K
i=H.a([$.b_,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stand-Up",i,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.I
i=H.a([$.b_,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bedazzled",i,n,o,0))
o=H.a(["Thief's"],p)
n=$.ac
i=H.a([$.az,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thief's",i,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.r
i=H.a([$.az,$.a3,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("InvisibilityCloak",i,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.I
i=H.a([$.az,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Comedy Night",i,n,o,0))
o=H.a(["Stealthy"],p)
n=$.K
i=H.a([$.az,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stealthy",i,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.r
i=H.a([$.az,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Subterfuge",i,n,o,0))
o=H.a(["Dersite"],p)
n=$.ac
i=H.a([$.az,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dersite",i,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.ac
i=H.a([$.bo,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ambient",i,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.r
i=H.a([$.bo,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Anesthesia",i,n,o,0))
o=H.a(["Supportive"],p)
n=$.r
i=H.a([$.bo,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Supportive",i,n,o,0))
o=H.a(["Nuka"],p)
n=$.r
i=H.a([$.b0,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Nuka",i,n,o,0))
o=H.a(["Contaminated"],p)
n=$.I
i=H.a([$.bL,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Contaminated",i,n,o,0))
o=H.a(["Unstable"],p)
n=$.I
i=H.a([$.aM,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Unstable",i,n,o,0))
o=H.a(["Timebomb"],p)
n=$.r
i=H.a([$.aM,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.e("Timebomb",i,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.I
i=H.a([$.a2,$.aM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Short Circuiting",i,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.r
i=H.a([$.aM,$.bc],l)
H.a([],p)
$.$get$c().h(0,new G.e("Relic",i,n,o,0))
o=H.a(["Existentialist"],p)
n=$.I
i=H.a([$.aM,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Existentialist",i,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.K
i=H.a([$.aM,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Apocalyptic",i,n,o,0))
o=H.a(["Dud"],p)
n=$.r
i=H.a([$.bs,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dud",i,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.r
i=H.a([$.bs,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guided",i,n,o,0))
o=H.a(["Bobomb"],p)
n=$.r
i=H.a([$.bs,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bobomb",i,n,o,0))
o=H.a(["Dread"],p)
n=$.r
i=H.a([$.aM,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dread",i,n,o,0))
o=H.a(["Knockback"],p)
n=$.r
i=H.a([$.bs,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Knockback",i,n,o,0))
o=H.a(["Paralysis"],p)
n=$.r
i=H.a([$.a2,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Paralysis",i,n,o,0))
o=H.a(["Carnage"],p)
n=$.r
i=H.a([$.bs,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carnage",i,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.r
i=H.a([$.bs,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Blast Beat",i,n,o,0))
o=H.a(["Corrosive"],p)
n=$.I
i=H.a([$.bs,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Corrosive",i,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.r
i=H.a([$.bs,$.bp],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ice Bomb",i,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.r
i=H.a([$.bp,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cryogenic",i,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.r
i=H.a([$.a3,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Spellcasting",i,n,o,0))
o=H.a(["Tingling"],p)
n=$.I
i=H.a([$.a2,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tingling",i,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.r
i=H.a([$.br,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rage Plague",i,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.r
i=H.a([$.bL,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Nerve Gas",i,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.r
i=H.a([$.bL,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carbon Monoxide",i,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.r
i=H.a([$.bL,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Neurotoxin",i,n,o,0))
o=H.a(["Virulent"],p)
n=$.I
i=H.a([$.bL,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Virulent",i,n,o,0))
o=H.a(["Toxic"],p)
n=$.I
i=H.a([$.bL,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Toxic",i,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.r
i=H.a([$.bL,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Laughing Gas",i,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.I
i=H.a([$.a7,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Amplified",i,n,o,0))
o=H.a(["Rap"],p)
n=$.r
i=H.a([$.a7,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rap",i,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.r
i=H.a([$.a7,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Saxaphone",i,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.r
i=H.a([$.a7,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Offbeat",i,n,o,0))
o=H.a(["Piper's"],p)
n=$.ac
i=H.a([$.a7,$.bg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Piper's",i,n,o,0))
o=H.a(["Melodic"],p)
n=$.r
i=H.a([$.a7,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Melodic",i,n,o,0))
o=H.a(["Smooth"],p)
n=$.r
i=H.a([$.a7,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smooth",i,n,o,0))
o=H.a(["Thrash"],p)
n=$.r
i=H.a([$.a7,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thrash",i,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.r
i=H.a([$.a7,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chant",i,n,o,0))
o=H.a(["Chewy"],p)
n=$.r
i=H.a([$.br,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chewy",i,n,o,0))
o=H.a(["Phony"],p)
n=$.r
i=H.a([$.br,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Phony",i,n,o,0))
o=H.a(["Doctor's"],p)
n=$.ac
i=H.a([$.a0,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doctor's",i,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.r
i=H.a([$.bg,$.b0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Straitjacketed",i,n,o,0))
o=H.a(["Strapped"],p)
n=$.r
i=H.a([$.bg,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Strapped",i,n,o,0))
o=H.a(["Bondage"],p)
n=$.r
i=H.a([$.bg,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bondage",i,n,o,0))
o=H.a(["Sealed"],p)
n=$.I
i=H.a([$.bg,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sealed",i,n,o,0))
o=H.a(["Attractive"],p)
n=$.K
i=H.a([$.aJ,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Attractive",i,n,o,0))
o=H.a(["Relaxed"],p)
n=$.I
i=H.a([$.b7,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Relaxed",i,n,o,0))
o=H.a(["Loveseat"],p)
n=$.r
i=H.a([$.b7,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Loveseat",i,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.K
i=H.a([$.aE,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Comfort Food",i,n,o,0))
o=H.a(["Yandere"],p)
n=$.K
i=H.a([$.aO,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Yandere",i,n,o,0))
o=H.a(["Tsundere"],p)
n=$.K
i=H.a([$.aO,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tsundere",i,n,o,0))
o=H.a(["Disturbed"],p)
n=$.I
i=H.a([$.aA,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Disturbed",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.I
i=H.a([$.a0,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sapient",i,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.r
i=H.a([$.a0,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hydroponic",i,n,o,0))
o=H.a(["Free Range"],p)
n=$.r
i=H.a([$.aA,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Free Range",i,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.ac
i=H.a([$.aO,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gentlemanly",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.I
i=H.a([$.a0,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sapient",i,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.I
i=H.a([$.aO,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sentimental",i,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.I
i=H.a([$.aO,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doki-Doki",i,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.I
i=H.a([$.aO,$.aS,$.aI,$.jl],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doki-Doki Literature Club",i,n,o,0))
o=H.a(["Banana"],p)
n=$.I
i=H.a([$.aE,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Banana",i,n,o,0))
o=H.a(["Mana"],p)
n=$.I
i=H.a([$.aE,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mana",i,n,o,0))
o=H.a(["Homemade"],p)
n=$.I
i=H.a([$.aE,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Homemade",i,n,o,0))
o=H.a(["Steampunk"],p)
n=$.I
i=H.a([$.a3,$.as],l)
H.a([],p)
$.$get$c().h(0,new G.e("Steampunk",i,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.I
i=H.a([$.aE,$.b8,$.a2,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("I Can't Stop Laughing",i,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.x
i=H.a([$.C,$.bX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Soulsteel",i,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.r
i=H.a([$.b9,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ritual",i,n,o,0))
o=H.a(["Inflamable"],p)
n=$.I
i=H.a([$.bR,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Inflamable",i,n,o,0))
o=H.a(["Crafting"],p)
n=$.r
i=H.a([$.W,$.a0],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crafting",i,n,o,0))
o=H.a(["Polluting"],p)
n=$.r
i=H.a([$.aN,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Polluting",i,n,o,0))
o=H.a(["Insulated"],p)
n=$.I
i=H.a([$.c2,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Insulated",i,n,o,0))
o=H.a(["Ash"],p)
n=$.x
i=H.a([$.N,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ash",i,n,o,0))
o=H.a(["Delicate"],p)
n=$.I
i=H.a([$.N,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Delicate",i,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.ac
i=H.a([$.b3,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Glass Blower's",i,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.I
i=H.a([$.bf,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sunburnt",i,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.I
i=H.a([$.aF,$.bq],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pyrebitten",i,n,o,0))
o=H.a(["Mink"],p)
n=$.x
i=H.a([$.aO,$.cg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mink",i,n,o,0))
o=H.a(["Wildfire"],p)
n=$.ac
i=H.a([$.b5,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Wildfire",i,n,o,0))
o=H.a(["Scarred"],p)
n=$.I
i=H.a([$.b0,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scarred",i,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.K
i=H.a([$.aW,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hyper Realistic",i,n,o,0))
o=H.a(["Hestia's"],p)
n=$.ac
i=H.a([$.bF,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hestia's",i,n,o,0))
o=H.a(["Smoking"],p)
n=$.I
i=H.a([$.az,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smoking",i,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.I
i=H.a([$.aF,$.a2],l)
H.a([],p)
$.$get$c().h(0,new G.e("Radiator",i,n,o,0))
o=H.a(["Fuming"],p)
n=$.I
i=H.a([$.aF,$.bL],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fuming",i,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.I
i=H.a([$.aF,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Firework",i,n,o,0))
o=H.a(["Panicky"],p)
n=$.I
i=H.a([$.aM,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Panicky",i,n,o,0))
o=H.a(["Ornamental"],p)
n=$.I
i=H.a([$.bc,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ornamental",i,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.I
i=H.a([$.bc,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dear",i,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.I
i=H.a([$.bc,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Swaggy",i,n,o,0))
o=H.a(["Uncanny"],p)
n=$.I
i=H.a([$.aK,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("Uncanny",i,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.I
i=H.a([$.aS,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Talkative",i,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.I
i=H.a([$.aO,$.aw],l)
H.a([],p)
$.$get$c().h(0,new G.e("Waifu",i,n,o,0))
o=H.a(["Charming"],p)
n=$.I
i=H.a([$.a3,$.aO],l)
H.a([],p)
$.$get$c().h(0,new G.e("Charming",i,n,o,0))
o=H.a(["God Tier"],p)
n=$.I
i=H.a([$.P,$.H,$.aW],l)
H.a([],p)
$.$get$c().h(0,new G.e("God Tier",i,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.I
i=H.a([$.P,$.H,$.aW,$.aw,$.Q],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cod Tier",i,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.I
i=H.a([$.P,$.H,$.aW,$.cg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dog Tier",i,n,o,0))
o=H.a(["Cracked"],p)
n=$.I
i=H.a([$.aG,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cracked",i,n,o,0))
o=H.a(["Ruffled"],p)
n=$.I
i=H.a([$.bz,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ruffled",i,n,o,0))
o=H.a(["Mandrake"],p)
n=$.I
i=H.a([$.b5,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mandrake",i,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.I
i=H.a([$.a3,$.b5],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beanstalk",i,n,o,0))
o=H.a(["Unnerving"],p)
n=$.I
i=H.a([$.b4,$.aK],l)
H.a([],p)
$.$get$c().h(0,new G.e("Unnerving",i,n,o,0))
o=H.a(["Chipped"],p)
n=$.I
l=H.a([$.bQ,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chipped",l,n,o,0))
if($.wS==null){o=$.mw
n=$.aZ
l=$.aH
k=$.b9
j=new U.au(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,"Claws",!1,P.a6(null,null,null,m),0,3)
j.N("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.f.h(0,o)
$.wS=j}o=$.$get$aB();(o&&C.b).sm(o,0)
o=$.$get$aB()
n=$.Q
l=$.w9
k=new U.au(n,null,null,null,"Speedo",!1,P.a6(null,null,null,m),0,3)
k.N("Speedo",[l],null,!1,null)
k.f.h(0,n)
o.push(k)
k=$.$get$aB()
o=$.et
n=$.aH
l=$.C
j=$.aZ
i=new U.au(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,"Sword",!1,P.a6(null,null,null,m),0,3)
i.N("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.f.h(0,o)
k.push(i)
i=$.$get$aB()
k=$.tF
o=$.ab
j=$.C
l=new U.au(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,"Hammer",!1,P.a6(null,null,null,m),0,3)
l.N("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.f.h(0,k)
i.push(l)
l=$.$get$aB()
i=$.tQ
k=$.b1
j=$.C
o=new U.au(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,"Rifle",!1,P.a6(null,null,null,m),0,3)
o.N("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.f.h(0,i)
l.push(o)
o=$.$get$aB()
l=$.tM
i=$.b1
j=$.C
k=new U.au(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,"Pistol",!1,P.a6(null,null,null,m),0,3)
k.N("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.f.h(0,l)
o.push(k)
k=$.$get$aB()
o=$.wk
l=$.b1
j=$.C
i=new U.au(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,"Shotgun",!1,P.a6(null,null,null,m),0,3)
i.N("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.f.h(0,o)
k.push(i)
i=$.$get$aB()
k=$.vX
o=$.aZ
j=$.aH
l=$.C
n=new U.au(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,"Blade",!1,P.a6(null,null,null,m),0,3)
n.N("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.f.h(0,k)
i.push(n)
n=$.$get$aB()
i=$.tB
k=$.aZ
l=$.aH
j=$.C
o=new U.au(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,"Dagger",!1,P.a6(null,null,null,m),0,3)
o.N("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.f.h(0,i)
n.push(o)
o=$.$get$aB()
n=$.hn
i=$.ab
j=$.bQ
l=new U.au(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,"Fancysanta",!1,P.a6(null,null,null,m),0,3)
l.N("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.f.h(0,n)
o.push(l)
l=$.$get$aB()
o=$.wn
n=$.aH
j=$.C
i=new U.au(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,"Sickle",!1,P.a6(null,null,null,m),0,3)
i.N("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.f.h(0,o)
l.push(i)
i=$.$get$aB()
l=$.w_
o=$.aH
j=$.C
n=new U.au(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,"Chainsaw",!1,P.a6(null,null,null,m),0,3)
n.N("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.f.h(0,l)
i.push(n)
n=$.$get$aB()
i=$.w6
l=$.aZ
j=$.C
o=new U.au(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,"Fork",!1,P.a6(null,null,null,m),0,3)
o.N("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.f.h(0,i)
n.push(o)
o=$.$get$aB()
n=$.tL
i=$.bz
j=$.bq
l=new U.au(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,"Pigeon",!1,P.a6(null,null,null,m),0,3)
l.N("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.f.h(0,n)
o.push(l)
l=$.$get$aB()
o=$.es
n=$.ca
j=$.aG
i=$.ab
k=new U.au(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,"Bowling Ball",!1,P.a6(null,null,null,m),0,3)
k.N("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.f.h(0,o)
l.push(k)
k=$.$get$aB()
l=$.tC
o=$.aN
i=$.bF
j=new U.au(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,"Dice",!1,P.a6(null,null,null,m),0,3)
j.N("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.f.h(0,l)
k.push(j)
j=$.$get$aB()
k=$.tK
l=$.C
i=$.aZ
o=new U.au(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,"Needle",!1,P.a6(null,null,null,m),0,3)
o.N("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.f.h(0,k)
j.push(o)
o=$.$get$aB()
j=$.wq
k=$.W
i=$.ab
l=new U.au(j,"Very magey. 7/10.","ShittyWizardKind",null,"Staff",!1,P.a6(null,null,null,m),0,3)
l.N("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.f.h(0,j)
o.push(l)
l=$.$get$aB()
o=$.ws
j=$.bg
i=$.Q
k=new U.au(o,"Probably p hard to use.","ImKinkshamingKind",null,"Whip",!1,P.a6(null,null,null,m),0,3)
k.N("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.f.h(0,o)
l.push(k)
k=$.$get$aB()
l=$.ty
o=$.b1
i=$.aG
j=$.Q
n=$.aZ
h=new U.au(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,"Bow",!1,P.a6(null,null,null,m),0,3)
h.N("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.f.h(0,l)
k.push(h)
h=$.$get$aB()
k=$.jl
l=$.W
n=$.ab
j=new U.au(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,"Club",!1,P.a6(null,null,null,m),0,3)
j.N("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.f.h(0,k)
h.push(j)
j=$.$get$aB()
h=$.jk
k=$.W
n=new U.au(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,"Broom",!1,P.a6(null,null,null,m),0,3)
n.N("Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.f.h(0,h)
j.push(n)
n=$.$get$aB()
j=$.aI
h=$.N
k=$.ab
l=new U.au(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,"Book",!1,P.a6(null,null,null,m),0,3)
l.N("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.f.h(0,j)
n.push(l)
l=$.$get$aB()
n=$.wh
j=$.C
k=$.ab
h=new U.au(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,"Road Sign",!1,P.a6(null,null,null,m),0,3)
h.N("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.f.h(0,n)
l.push(h)
h=$.$get$aB()
l=$.tw
n=$.aH
k=$.C
j=$.ab
i=new U.au(l,"Legit.","TreeMassacreKind",null,"Axe",!1,P.a6(null,null,null,m),0,3)
i.N("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.we
l=$.W
j=$.aZ
k=new U.au(h,"Good for chest stabs.","UseOnHorsebackKind",null,"Lance",!1,P.a6(null,null,null,m),0,3)
k.N("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.ff
h=$.C
j=$.ab
l=new U.au(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,"Shield",!1,P.a6(null,null,null,m),0,3)
l.N("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.vZ
i=$.W
j=$.ab
h=new U.au(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,"Cane",!1,P.a6(null,null,null,m),0,3)
h.N("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.wt
k=$.aN
j=$.ab
i=new U.au(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,"Yo-Yo",!1,P.a6(null,null,null,m),0,3)
i.N("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.wp
l=$.W
j=$.b1
k=new U.au(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,"Sling",!1,P.a6(null,null,null,m),0,3)
k.N("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.wm
h=$.C
j=$.aH
l=new U.au(i,"So edgey.","NarutoKind",null,"Shuriken",!1,P.a6(null,null,null,m),0,3)
l.N("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.tJ
i=$.C
j=$.b1
h=new U.au(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,"Machine Gun",!1,P.a6(null,null,null,m),0,3)
h.N("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.mz
k=$.C
j=$.bs
i=new U.au(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,"Grenade",!1,P.a6(null,null,null,m),0,3)
i.N("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.es
l=$.c2
j=$.ab
k=new U.au(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,"Ball",!1,P.a6(null,null,null,m),0,3)
k.N("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.wr
h=$.C
j=$.aZ
l=new U.au(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,"3dent",!1,P.a6(null,null,null,m),0,3)
l.N("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.mv
i=$.N
j=$.aH
h=new U.au(k,"An X-Men fan, I see.","YuGiOhKind",null,"Card",!1,P.a6(null,null,null,m),0,3)
h.N("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.tD
k=$.C
j=$.ab
i=new U.au(l,"Go with what you know, I guess.","UnstoppableKind",null,"Frying Pan",!1,P.a6(null,null,null,m),0,3)
i.N("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.e9
l=$.b7
j=$.Q
k=new U.au(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,"Pillow",!1,P.a6(null,null,null,m),0,3)
k.N("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.hm
h=$.C
j=$.bg
l=new U.au(i,"This could be metal as fuck.","BikerGangKind",null,"Chain",!1,P.a6(null,null,null,m),0,3)
l.N("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.tT
i=$.C
j=$.ab
h=new U.au(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,"Wrench",!1,P.a6(null,null,null,m),0,3)
h.N("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.wl
k=$.C
j=$.ab
i=new U.au(l,"Dual purpose.","HideTheBodiesKind",null,"Shovel",!1,P.a6(null,null,null,m),0,3)
i.N("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.tS
l=$.W
j=$.ab
k=new U.au(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,"Rolling Pin",!1,P.a6(null,null,null,m),0,3)
k.N("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.tN
h=$.W
j=$.aM
l=new U.au(i,"Fuck you for picking this.","KermitsGoneBadKind",null,"Puppet",!1,P.a6(null,null,null,m),0,3)
l.N("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.tP
i=$.C
j=$.aH
h=new U.au(k,"So fucking edgey.","KermitsGoneBadKind",null,"Razor",!1,P.a6(null,null,null,m),0,3)
h.N("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.mD
k=$.C
j=$.a0
i=new U.au(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,"Pen",!1,P.a6(null,null,null,m),0,3)
i.N("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.hl
l=$.aG
j=$.ca
k=new U.au(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,"Bust",!1,P.a6(null,null,null,m),0,3)
k.N("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.w8
h=$.W
j=$.ab
l=new U.au(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,"Golf Club",!1,P.a6(null,null,null,m),0,3)
l.N("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.wd
i=$.C
j=$.aH
h=new U.au(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,"Knife",!1,P.a6(null,null,null,m),0,3)
h.N("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.wj
k=$.C
j=$.aH
i=new U.au(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,"Scissors",!1,P.a6(null,null,null,m),0,3)
i.N("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.wi
l=$.C
j=$.ca
k=new U.au(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,"Safe",!1,P.a6(null,null,null,m),0,3)
k.N("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.dj
h=$.W
j=$.ab
m=new U.au(i,"Bitches love sticks","WeaponiseTheTreesKind",null,"Stick",!1,P.a6(null,null,null,m),0,3)
m.N("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
m.f.h(0,i)
k.push(m)
m=new S.bH("Duttle","Dut",null,null)
$.$get$bO().push(m)
$.vI=m
m=new S.bH("Salamander","GLUB",null,null)
$.$get$bO().push(m)
$.tl=m
m=new S.bH("Crocodile","NAK",null,null)
$.$get$bO().push(m)
$.e6=m
m=new S.bH("Iguana","thip",null,null)
$.$get$bO().push(m)
$.eo=m
m=new S.bH("Turtle","click",null,null)
$.$get$bO().push(m)
$.f6=m
m=new S.bH("Skeleton","rattle",null,null)
$.$get$bO().push(m)
$.dP=m
m=new S.bH("Robot","BEEP",null,null)
$.$get$bO().push(m)
$.f4=m
m=new S.bH("Chameleon","BLEP",null,null)
$.$get$bO().push(m)
$.it=m
m=new S.bH("Axolotl","BARP",null,null)
$.$get$bO().push(m)
$.te=m
m=new S.bH("Lizard","bleb",null,null)
$.$get$bO().push(m)
$.lN=m
m=new S.bH("Snake","hiss",null,null)
$.$get$bO().push(m)
$.tn=m
m=new S.bH("Alligator","nak",null,null)
$.$get$bO().push(m)
$.ir=m
m=new S.bH("Mole","snuff",null,null)
$.$get$bO().push(m)
$.vJ=m
m=new S.bH("Bird","tweet",null,null)
$.$get$bO().push(m)
$.lM=m
m=new S.bH("Wolf","howl",null,null)
$.$get$bO().push(m)
$.lS=m
m=new S.bH("Newt","skitter",null,null)
$.$get$bO().push(m)
$.vK=m
m=new S.bH("Spider","skitter",null,null)
$.$get$bO().push(m)
$.iz=m
m=new S.bH("Cupid","flappa",null,null)
$.$get$bO().push(m)
$.iu=m
m=new S.bH("Dragon","roar",null,null)
$.$get$bO().push(m)
$.h8=m
m=new S.ia("Prospitian","murmur",null,null)
$.$get$bO().push(m)
$.zH=m
m=new S.ia("Dersite","mutter",null,null)
$.$get$bO().push(m)
$.zE=m
m=new S.md("Horror Terror","a;lkjdf",null,null)
$.$get$bO().push(m)
$.zG=m
$.zI=H.a([$.tn,$.ir,$.vK,$.tl,$.eo,$.e6,$.f6,$.it,$.te,$.lN],[S.bH])
$.he=new T.c3(0,"spices")
m=$.zK
$.f2=new T.c3(m,"fresh baked bread")
$.cz=new T.c3(m,"sweetness")
$.c8=new T.c3(m,"nature")
$.lR=new T.c3(0,"salt")
k=$.zJ
$.d2=new T.c3(k,"rot")
$.zF=new T.c3(k,"feet")
$.eq=new T.c3(0,"oil")
$.tg=new T.c3(0,"chlorine")
$.hc=new T.c3(0,"nothing in particular")
$.en=new T.c3(0,"gunpowder")
$.hb=new T.c3(0,"must")
$.cE=new T.c3(m,"zoo animals")
$.e7=new T.c3(k,"sweat")
$.iy=new T.c3(0,"ozone")
$.c7=new T.c3(0,"deceit")
$.cT=new T.c3(k,"blood")
$.f5=new T.c3(k,"smoke")
$.c0=new K.bW(k,"creepy")
$.b2=new K.bW(m,"calm")
$.ce=new K.bW(k,"frantic")
$.lO=new K.bW(0,"like nothing")
$.bP=new K.bW(m,"energizing")
$.cD=new K.bW(0,"studious")
$.dx=new K.bW(0,"dangerous")
$.dN=new K.bW(0,"glamorous")
$.hd=new K.bW(0,"romantic")
$.dw=new K.bW(m,"creative")
$.ix=new K.bW(0,"lucky")
$.dy=new K.bW(0,"happy")
$.dO=new K.bW(0,"heroic")
$.d4=new K.bW(k,"stupid")
$.ix=new K.bW(0,"lucky")
$.th=new K.bW(0,"claustrophobic")
$.lP=new K.bW(0,"overheated")
$.dM=new K.bW(k,"confusing")
$.c6=new K.bW(0,"contemplatative")
$.cU=new M.bB(0,"clanking")
$.cy=new M.bB(0,"laughing")
$.be=new M.bB(m,"rustling")
$.er=new M.bB(k,"screaming")
$.iv=new M.bB(k,"foot steps")
$.f3=new M.bB(k,"beeping")
$.vM=new M.bB(k,"whispering")
$.em=new M.bB(0,"clacking")
$.cB=new M.bB(0,"applause")
$.ep=new M.bB(0,"jazz")
$.tj=new M.bB(0,"disco")
$.h9=new M.bB(0,"drums")
$.ha=new M.bB(0,"echoing")
$.lQ=new M.bB(k,"roaring")
$.iw=new M.bB(k,"gunfire")
$.cC=new M.bB(0,"music")
$.tm=new M.bB(0,"singing")
$.tf=new M.bB(0,"chanting")
$.f7=new M.bB(0,"whistling")
$.di=new M.bB(m,"nature")
$.ti=new M.bB(0,"croaking")
$.d3=new M.bB(0,"silence")
$.tk=new M.bB(0,"pulsing")
$.vL=new M.bB(0,"ticking")
m=H.a([],p)
o=[X.G,P.U]
n=A.Y
l=E.J
k=[l]
j=[A.fR]
m=new S.mS(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.t(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Knight",3,!0,!1,!1)
$.G1=m
m=P.f(H.a([new E.J($.bZ,0.4,!1)],k),l)
i=H.a([],p)
m=new S.ol(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.t(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Seer",6,!0,!1,!1)
$.Ge=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kF("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.t(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Bard",9,!0,!1,!1)
$.FW=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.m9("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.t(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Heir",8,!0,!1,!1)
$.FZ=m
m=H.a([],p)
m=new U.nc(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.t(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Maid",0,!0,!1,!1)
$.G4=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.o9(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.t(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Rogue",4,!0,!1,!1)
$.G9=m
m=H.a([],p)
m=new V.nJ(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.t(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Page",1,!0,!1,!1)
$.G7=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.pf(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.t(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Thief",7,!0,!1,!1)
$.Gh=m
m=P.f(H.a([new E.J($.bZ,0.1,!1)],k),l)
i=H.a([],p)
m=new R.p2(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.t(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Sylph",5,!0,!1,!1)
$.Gg=m
m=H.a([],p)
m=new N.o1("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.t(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Prince",10,!0,!1,!1)
$.G8=m
m=P.f(H.a([new E.J($.bZ,0.1,!1)],k),l)
i=H.a([],p)
m=new M.pJ("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.t(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Witch",11,!0,!1,!1)
$.Gj=m
m=P.f(H.a([new E.J($.bZ,0.4,!1)],k),l)
i=H.a([],p)
m=new S.nb("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.t(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Mage",2,!0,!1,!1)
$.G3=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.f(H.a([new E.J($.bZ,3,!1),new E.J($.oC,-2,!1)],k),l)
e=H.a([],p)
m=new E.pF("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.t(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Waste",12,!1,!1,!1)
$.Gi=m
m=H.a([],p)
m=new Y.oh("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.t(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Scout",13,!1,!1,!1)
$.Gc=m
m=P.f(H.a([new E.J($.bZ,0.5,!1)],k),l)
i=H.a([],p)
m=new L.oi("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.t(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Scribe",15,!1,!1,!1)
$.Gd=m
m=P.f(H.a([new E.J($.bZ,0.5,!1)],k),l)
i=H.a([],p)
m=new E.oe(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.t(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Sage",14,!1,!1,!1)
$.Ga=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.m7("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.t(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Guide",16,!1,!1,!1)
$.FY=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.f(H.a([new E.J($.bZ,3,!1)],k),l)
g=H.a([],p)
m=new Y.m6(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.t(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Grace",17,!1,!1,!1)
$.FX=m
m=P.f(H.a([new E.J($.bZ,0.1,!1)],k),l)
i=H.a([],p)
m=new E.nn("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.t(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Muse",18,!1,!1,!1)
$.G5=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.F(null,null,n)
h=P.f(H.a([new E.J($.bZ,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.n9("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.t(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Lord",19,!1,!1,!1)
$.G2=m
m=P.f(H.a([new E.J($.bZ,-0.1,!1),new E.J($.d8,1,!1)],k),l)
i=H.a([],p)
m=new Y.os("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.t(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Smith",20,!1,!1,!1)
$.Gf=m
m=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
i=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
h=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
f=P.f(H.a([new E.J($.bZ,4,!1),new E.J($.oC,-3,!1)],k),l)
e=H.a([],p)
m=new X.mh("Hooman",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!0,!1,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Human",new H.t(0,null,null,null,null,null,0,o),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Human",21,!1,!1,!0)
$.G_=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["hussie"],p)
f=P.f(H.a([new E.J($.bZ,41.3,!1),new E.J($.oC,41.3,!1)],k),l)
e=H.a([],p)
m=new Q.mi(20,20,0.5,m,i,h,g,!1,!0,!1,!0,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Hussie",new H.t(0,null,null,null,null,null,0,o),null,null,22,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Hussie",22,!1,!0,!0)
$.G0=m
m=H.a(["sans","sansly","sassy","super","soapful"],p)
i=H.a([],p)
m=new Y.of(m,"Glitch",0.01,0.01,0.01,i,0.5,"Sans",new H.t(0,null,null,null,null,null,0,o),null,null,23,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a3("Sans",23,!1,!0,!0)
$.Gb=m
$.G6=T.FV("Null",255,!1,!0,!1)
m=A.dK
i=P.E
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#00ff00"),!0)
h.j(0,$.ai,L.d("#EFEFEF"),!0)
h.j(0,$.ah,L.d("#DEDEDE"),!0)
h.j(0,$.ar,L.d("#FF2106"),!0)
h.j(0,$.aq,L.d("#B01200"),!0)
h.j(0,$.ak,L.d("#2F2F30"),!0)
h.j(0,$.al,L.d("#1D1D1D"),!0)
h.j(0,$.aj,L.d("#080808"),!0)
h.j(0,$.ap,L.d("#030303"),!0)
h.j(0,$.ao,L.d("#242424"),!0)
h.j(0,$.an,L.d("#333333"),!0)
h.j(0,$.am,L.d("#141414"),!0)
g=P.f(H.a(["Frogs"],p),q)
f=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.f(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.f(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.f(H.a([new E.J($.d8,2,!0),new E.J($.dV,1,!0),new E.J($.d9,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new N.ov(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Y(0,"Space",!0,!1,!1)
$.yN=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#ff0000"),!0)
a.j(0,$.ai,L.d("#FF2106"),!0)
a.j(0,$.ah,L.d("#AD1604"),!0)
a.j(0,$.ar,L.d("#030303"),!0)
a.j(0,$.aq,L.d("#242424"),!0)
a.j(0,$.ak,L.d("#510606"),!0)
a.j(0,$.al,L.d("#3C0404"),!0)
a.j(0,$.aj,L.d("#1F0000"),!0)
a.j(0,$.ap,L.d("#B70D0E"),!0)
a.j(0,$.ao,L.d("#970203"),!0)
a.j(0,$.an,L.d("#8E1516"),!0)
a.j(0,$.am,L.d("#640707"),!0)
b=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.f(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.f(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.f(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.f(H.a([new E.J($.eH,2,!0),new E.J($.d9,1,!0),new E.J($.dU,-2,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new N.pg(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Y(1,"Time",!0,!1,!1)
$.yQ=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#3399ff"),!0)
h.j(0,$.ai,L.d("#10E0FF"),!0)
h.j(0,$.ah,L.d("#00A4BB"),!0)
h.j(0,$.ar,L.d("#FEFD49"),!0)
h.j(0,$.aq,L.d("#D6D601"),!0)
h.j(0,$.ak,L.d("#0052F3"),!0)
h.j(0,$.al,L.d("#0046D1"),!0)
h.j(0,$.aj,L.d("#003396"),!0)
h.j(0,$.ap,L.d("#0087EB"),!0)
h.j(0,$.ao,L.d("#0070ED"),!0)
h.j(0,$.an,L.d("#006BE1"),!0)
h.j(0,$.am,L.d("#0054B0"),!0)
g=P.f(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.f(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.f(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.f(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.f(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.f(H.a([new E.J($.d9,2,!0),new E.J($.c4,1,!0),new E.J($.dV,-1,!0),new E.J($.dW,-1,!0),new E.J($.bZ,0.05,!1)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new T.kO(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Y(2,"Breath",!0,!1,!1)
$.ys=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#003300"),!0)
a.j(0,$.ai,L.d("#0F0F0F"),!0)
a.j(0,$.ah,L.d("#010101"),!0)
a.j(0,$.ar,L.d("#E8C15E"),!0)
a.j(0,$.aq,L.d("#C7A140"),!0)
a.j(0,$.ak,L.d("#1E211E"),!0)
a.j(0,$.al,L.d("#141614"),!0)
a.j(0,$.aj,L.d("#0B0D0B"),!0)
a.j(0,$.ap,L.d("#204020"),!0)
a.j(0,$.ao,L.d("#11200F"),!0)
a.j(0,$.an,L.d("#192C16"),!0)
a.j(0,$.am,L.d("#121F10"),!0)
b=P.f(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.f(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.f(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.f(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.f(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.f(H.a([new E.J($.d8,2,!0),new E.J($.dU,1,!0),new E.J($.eH,-1,!0),new E.J($.dV,-1,!0),new E.J($.bZ,0.01,!1)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new U.li(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Y(3,"Doom",!0,!1,!1)
$.yt=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#993300"),!0)
h.j(0,$.ai,L.d("#BA1016"),!0)
h.j(0,$.ah,L.d("#820B0F"),!0)
h.j(0,$.ar,L.d("#381B76"),!0)
h.j(0,$.aq,L.d("#1E0C47"),!0)
h.j(0,$.ak,L.d("#290704"),!0)
h.j(0,$.al,L.d("#230200"),!0)
h.j(0,$.aj,L.d("#110000"),!0)
h.j(0,$.ap,L.d("#3D190A"),!0)
h.j(0,$.ao,L.d("#2C1207"),!0)
h.j(0,$.an,L.d("#5C2913"),!0)
h.j(0,$.am,L.d("#4C1F0D"),!0)
g=P.f(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.f(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.f(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.f(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.f(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.f(H.a([new E.J($.dW,2,!0),new E.J($.c4,1,!0),new E.J($.d8,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new T.kL(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Y(4,"Blood",!0,!1,!1)
$.yr=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#ff3399"),!0)
a.j(0,$.ai,L.d("#BD1864"),!0)
a.j(0,$.ah,L.d("#780F3F"),!0)
a.j(0,$.ar,L.d("#1D572E"),!0)
a.j(0,$.aq,L.d("#11371D"),!0)
a.j(0,$.ak,L.d("#4C1026"),!0)
a.j(0,$.al,L.d("#3C0D1F"),!0)
a.j(0,$.aj,L.d("#260914"),!0)
a.j(0,$.ap,L.d("#6B0829"),!0)
a.j(0,$.ao,L.d("#4A0818"),!0)
a.j(0,$.an,L.d("#55142A"),!0)
a.j(0,$.am,L.d("#3D0E1E"),!0)
b=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.f(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.f(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.f(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.f(H.a([new E.J($.dW,1,!0),new E.i8(null,1,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new T.m8(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Y(5,"Heart",!0,!1,!1)
$.yw=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#3da35a"),!0)
h.j(0,$.ai,L.d("#06FFC9"),!0)
h.j(0,$.ah,L.d("#04A885"),!0)
h.j(0,$.ar,L.d("#6E0E2E"),!0)
h.j(0,$.aq,L.d("#4A0818"),!0)
h.j(0,$.ak,L.d("#1D572E"),!0)
h.j(0,$.al,L.d("#164524"),!0)
h.j(0,$.aj,L.d("#11371D"),!0)
h.j(0,$.ap,L.d("#3DA35A"),!0)
h.j(0,$.ao,L.d("#2E7A43"),!0)
h.j(0,$.an,L.d("#3B7E4F"),!0)
h.j(0,$.am,L.d("#265133"),!0)
g=P.f(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.f(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.f(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.f(H.a([new E.J($.dU,2,!0),new E.J($.eH,1,!0),new E.J($.d8,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new V.nl(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Y(6,"Mind",!0,!1,!1)
$.yE=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#ff9933"),!0)
a.j(0,$.ai,L.d("#FEFD49"),!0)
a.j(0,$.ah,L.d("#FEC910"),!0)
a.j(0,$.ar,L.d("#10E0FF"),!0)
a.j(0,$.aq,L.d("#00A4BB"),!0)
a.j(0,$.ak,L.d("#FA4900"),!0)
a.j(0,$.al,L.d("#E94200"),!0)
a.j(0,$.aj,L.d("#C33700"),!0)
a.j(0,$.ap,L.d("#FF8800"),!0)
a.j(0,$.ao,L.d("#D66E04"),!0)
a.j(0,$.an,L.d("#E76700"),!0)
a.j(0,$.am,L.d("#CA5B00"),!0)
b=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.f(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.f(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.f(H.a([new E.J($.ft,2,!0),new E.J($.dU,1,!0),new E.J($.c4,-1,!0),new E.J($.dV,-1,!0),new E.J($.bZ,0.2,!1)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new G.mW(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Y(7,"Light",!0,!1,!1)
$.yC=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#000066"),!0)
h.j(0,$.ai,L.d("#0B1030"),!0)
h.j(0,$.ah,L.d("#04091A"),!0)
h.j(0,$.ar,L.d("#CCC4B5"),!0)
h.j(0,$.aq,L.d("#A89F8D"),!0)
h.j(0,$.ak,L.d("#00164F"),!0)
h.j(0,$.al,L.d("#00103C"),!0)
h.j(0,$.aj,L.d("#00071A"),!0)
h.j(0,$.ap,L.d("#033476"),!0)
h.j(0,$.ao,L.d("#02285B"),!0)
h.j(0,$.an,L.d("#004CB2"),!0)
h.j(0,$.am,L.d("#003E91"),!0)
g=P.f(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.f(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.f(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.f(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.f(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.f(H.a([new E.fM(D.uH(),null,3,!0),new E.fM(D.uH(),null,-1,!0),new E.J($.eH,-1,!0),new E.J($.bZ,0.2,!1)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new Q.pE(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Y(8,"Void",!0,!1,!1)
$.yS=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#9900cc"),!0)
a.j(0,$.ai,L.d("#974AA7"),!0)
a.j(0,$.ah,L.d("#6B347D"),!0)
a.j(0,$.ar,L.d("#3D190A"),!0)
a.j(0,$.aq,L.d("#2C1207"),!0)
a.j(0,$.ak,L.d("#7C3FBA"),!0)
a.j(0,$.al,L.d("#6D34A6"),!0)
a.j(0,$.aj,L.d("#592D86"),!0)
a.j(0,$.ap,L.d("#381B76"),!0)
a.j(0,$.ao,L.d("#1E0C47"),!0)
a.j(0,$.an,L.d("#281D36"),!0)
a.j(0,$.am,L.d("#1D1526"),!0)
b=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.f(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.f(H.a([new E.J($.eI,2,!0),new E.J($.d9,1,!0),new E.J($.c4,-1,!0),new E.J($.dW,-1,!0),new E.J($.bZ,0.01,!1)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new E.o3(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Y(9,"Rage",!0,!1,!1)
$.yI=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#ffcc66"),!0)
h.j(0,$.ai,L.d("#FDF9EC"),!0)
h.j(0,$.ah,L.d("#D6C794"),!0)
h.j(0,$.ar,L.d("#164524"),!0)
h.j(0,$.aq,L.d("#06280C"),!0)
h.j(0,$.ak,L.d("#FFC331"),!0)
h.j(0,$.al,L.d("#F7BB2C"),!0)
h.j(0,$.aj,L.d("#DBA523"),!0)
h.j(0,$.ap,L.d("#FFE094"),!0)
h.j(0,$.ao,L.d("#E8C15E"),!0)
h.j(0,$.an,L.d("#F6C54A"),!0)
h.j(0,$.am,L.d("#EDAF0C"),!0)
g=P.f(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.f(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.f(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.f(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.f(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.f(H.a([new E.J($.c4,2,!0),new E.J($.ft,1,!0),new E.fM(D.uH(),null,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new X.mc(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Y(10,"Hope",!0,!1,!1)
$.yy=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#494132"),!0)
a.j(0,$.ai,L.d("#76C34E"),!0)
a.j(0,$.ah,L.d("#4F8234"),!0)
a.j(0,$.ar,L.d("#00164F"),!0)
a.j(0,$.aq,L.d("#00071A"),!0)
a.j(0,$.ak,L.d("#605542"),!0)
a.j(0,$.al,L.d("#494132"),!0)
a.j(0,$.aj,L.d("#2D271E"),!0)
a.j(0,$.ap,L.d("#CCC4B5"),!0)
a.j(0,$.ao,L.d("#A89F8D"),!0)
a.j(0,$.an,L.d("#A29989"),!0)
a.j(0,$.am,L.d("#918673"),!0)
b=P.f(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.f(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.f(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.f(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.f(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.f(H.a([new E.J($.dV,2,!0),new E.J($.eI,1,!0),new E.J($.d8,-2,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new K.mV(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Y(11,"Life",!0,!1,!1)
$.yB=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#9630BF"),!0)
h.j(0,$.ai,L.d("#cc87e8"),!0)
h.j(0,$.ah,L.d("#9545b7"),!0)
h.j(0,$.ar,L.d("#ae769b"),!0)
h.j(0,$.aq,L.d("#8f577c"),!0)
h.j(0,$.ak,L.d("#9630bf"),!0)
h.j(0,$.al,L.d("#693773"),!0)
h.j(0,$.aj,L.d("#4c2154"),!0)
h.j(0,$.ap,L.d("#fcf9bd"),!0)
h.j(0,$.ao,L.d("#e0d29e"),!0)
h.j(0,$.an,L.d("#bdb968"),!0)
h.j(0,$.am,L.d("#ab9b55"),!0)
g=P.f(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.f(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.f(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.f(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.f(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.f(H.a([new E.J($.d8,3,!0),new E.J($.c4,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new Z.lj(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Y(12,"Dream",!1,!1,!1)
$.yu=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#9630BF"),!0)
a.j(0,$.ai,L.d("#cc87e8"),!0)
a.j(0,$.ah,L.d("#9545b7"),!0)
a.j(0,$.ar,L.d("#ae769b"),!0)
a.j(0,$.aq,L.d("#8f577c"),!0)
a.j(0,$.ak,L.d("#9630bf"),!0)
a.j(0,$.al,L.d("#693773"),!0)
a.j(0,$.aj,L.d("#4c2154"),!0)
a.j(0,$.ap,L.d("#fcf9bd"),!0)
a.j(0,$.ao,L.d("#e0d29e"),!0)
a.j(0,$.an,L.d("#bdb968"),!0)
a.j(0,$.am,L.d("#ab9b55"),!0)
b=P.f(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
c=P.f(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
d=P.f(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
e=P.f(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
f=P.f(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
g=P.f(H.a([new E.J($.d8,3,!0),new E.J($.c4,-2,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new Q.mT(1.01,0.3,0.01,a,b,c,d,e,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,g,0.01,0.01,0.01,0.5,13,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Y(13,"Law",!1,!1,!0)
$.yA=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#ffff00"),!0)
h.j(0,$.ai,L.d("#ffff00"),!0)
h.j(0,$.ah,L.d("#ffff00"),!0)
h.j(0,$.ar,L.d("#508b2d"),!0)
h.j(0,$.aq,L.d("#316c0d"),!0)
h.j(0,$.ak,L.d("#dddd00"),!0)
h.j(0,$.al,L.d("#afaf00"),!0)
h.j(0,$.aj,L.d("#8f8f00"),!0)
h.j(0,$.ap,L.d("#ff0000"),!0)
h.j(0,$.ao,L.d("#a8000a"),!0)
h.j(0,$.an,L.d("#b8151f"),!0)
h.j(0,$.am,L.d("#8c1d1d"),!0)
g=P.f(H.a(["PURIFICATOR","NOT SHOGUN","WHO IS SHOGUN?"],p),q)
f=P.f(H.a(["Juice","Joke","Jespacito"],p),q)
e=P.f(H.a(["Pure","Juice","Juicey","Juiced","Small Might","Juicepacito"],p),q)
d=P.f(H.a(["Juice","Februus","Dyonisus","Bacchus","Epidotes","Juno Februtis","Ea","Marduk","Asaluhhi","Wadjet"],p),q)
c=P.f(H.a([new E.J($.bZ,13,!0)],k),l)
b=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.ag,L.d("#FF9B00"),!0)
b.j(0,$.ai,L.d("#FF9B00"),!0)
b.j(0,$.ah,L.d("#FF8700"),!0)
b.j(0,$.ar,L.d("#7F7F7F"),!0)
b.j(0,$.aq,L.d("#727272"),!0)
b.j(0,$.ak,L.d("#A3A3A3"),!0)
b.j(0,$.al,L.d("#999999"),!0)
b.j(0,$.aj,L.d("#898989"),!0)
b.j(0,$.ap,L.d("#EFEFEF"),!0)
b.j(0,$.ao,L.d("#DBDBDB"),!0)
b.j(0,$.an,L.d("#C6C6C6"),!0)
b.j(0,$.am,L.d("#ADADAD"),!0)
b=new Z.mP(13,13,13,h,g,f,e,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",d,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],c,0.01,0.01,0.01,0.5,14,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Juice",null,!1,!1,!0,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
b.Y(14,"Juice",!1,!1,!0)
$.yz=b
b=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.ag,L.d("#00ff00"),!0)
b.j(0,$.ai,L.d("#00ff00"),!0)
b.j(0,$.ah,L.d("#00ff00"),!0)
b.j(0,$.ar,L.d("#00ff00"),!0)
b.j(0,$.aq,L.d("#00cf00"),!0)
b.j(0,$.ak,L.d("#171717"),!0)
b.j(0,$.al,L.d("#080808"),!0)
b.j(0,$.aj,L.d("#080808"),!0)
b.j(0,$.ap,L.d("#616161"),!0)
b.j(0,$.ao,L.d("#3b3b3b"),!0)
b.j(0,$.an,L.d("#4a4a4a"),!0)
b.j(0,$.am,L.d("#292929"),!0)
c=P.f(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
d=P.f(H.a(["Shogun"],p),q)
e=P.f(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
f=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.f(H.a([new E.J($.eI,13,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new K.og(13,13,13,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],g,0.01,0.01,0.01,0.5,15,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Y(15,"Sauce",!1,!0,!1)
$.yL=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#933100"),!0)
h.j(0,$.ai,L.d("#933100"),!0)
h.j(0,$.ah,L.d("#682200"),!0)
h.j(0,$.ar,L.d("#4c3a27"),!0)
h.j(0,$.aq,L.d("#302418"),!0)
h.j(0,$.ak,L.d("#a0562b"),!0)
h.j(0,$.al,L.d("#723e20"),!0)
h.j(0,$.aj,L.d("#442513"),!0)
h.j(0,$.ap,L.d("#963c07"),!0)
h.j(0,$.ao,L.d("#682a06"),!0)
h.j(0,$.an,L.d("#6d4d3a"),!0)
h.j(0,$.am,L.d("#422e23"),!0)
g=P.f(H.a(["IT'S A METAPHOR","ABSOLUTE REBEL","COLD BLOODED"],p),q)
f=P.f(H.a(["Therapist","Tax","Talker","Tailess","Teammate"],p),q)
e=P.f(H.a(["Electricity","Tazerface","Rebelions","Metaphors","Ravagers"],p),q)
d=P.f(H.a(["Rebellion","Desolate","Electric","Metaphorical","Ravaging"],p),q)
c=P.f(H.a(["Prometheus","Lucifer","Zeus","Momus","Maui","Anansi","Arachne"],p),q)
b=P.f(H.a([new E.J($.d9,10,!0),new E.J($.c4,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new L.p4(2,0.7,0.7,h,g,f,e,d,"Rebellion","The OWNER is immensely strengthened, and they blast the ENEMY with a bolt of electricity.",c,["Lightning","Ice","Taserface"],["Taser"],b,0.01,0.01,0.01,0.5,16,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Taze",null,!1,!1,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Y(16,"Taze",!1,!1,!0)
$.yP=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#990000"),!0)
a.j(0,$.ai,L.d("#ff0200"),!0)
a.j(0,$.ah,L.d("#dd0000"),!0)
a.j(0,$.ar,L.d("#25334f"),!0)
a.j(0,$.aq,L.d("#07090f"),!0)
a.j(0,$.ak,L.d("#c64f4f"),!0)
a.j(0,$.al,L.d("#a33f3f"),!0)
a.j(0,$.aj,L.d("#843333"),!0)
a.j(0,$.ap,L.d("#b5c1d2"),!0)
a.j(0,$.ao,L.d("#939dac"),!0)
a.j(0,$.an,L.d("#3c3e42"),!0)
a.j(0,$.am,L.d("#202123"),!0)
b=P.f(H.a(["ABSOLUTE LOYALTY","ARROW EXTRAORDINAIRE","EMPATHETIC WARRIOR"],p),q)
c=P.f(H.a(["Relaxer","Respondant","Rememberer","Restless","Rasengan"],p),q)
d=P.f(H.a(["Yondu","Empathy","Arrows","Emotions","Ravagers"],p),q)
e=P.f(H.a(["Empathetic","Arrowed","Emotional","Literal","Ravaging"],p),q)
f=P.f(H.a(["Artemus","Apollo","Eros","Cupid","Actaeon","Atalanta","Hippolytus","Orion","Paris","Philoctetes","Poeas","Teucher"],p),q)
g=P.f(H.a([new E.J($.d9,2,!0),new E.J($.c4,5,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new V.ob(0.9,1.1,2,a,b,c,d,e,"A Song Of Arrows","The OWNER has dozens of arrows fly above their head, and right onto the ENEMY",f,["Arrow","Yondu","Empathy"],["Arrow","Bow"],g,0.01,0.01,0.01,0.5,17,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Rule",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Y(17,"Rule",!1,!1,!0)
$.yK=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#853dcc"),!0)
h.j(0,$.ai,L.d("#f76261"),!0)
h.j(0,$.ah,L.d("#913a39"),!0)
h.j(0,$.ar,L.d("#ab4443"),!0)
h.j(0,$.aq,L.d("#78302f"),!0)
h.j(0,$.ak,L.d("#a54cff"),!0)
h.j(0,$.al,L.d("#8c41d9"),!0)
h.j(0,$.aj,L.d("#7335b3"),!0)
h.j(0,$.ap,L.d("#853dcc"),!0)
h.j(0,$.ao,L.d("#642e99"),!0)
h.j(0,$.an,L.d("#4c2375"),!0)
h.j(0,$.am,L.d("#2b1442"),!0)
g=P.f(H.a(["RANT EXTRAORDINAIRE","VENT CRAWLER","DUCT MASTER"],p),q)
f=P.f(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),q)
e=P.f(H.a(["Purgatorial","Rantish","Cold","Conditioned","Lost"],p),q)
d=P.f(H.a(["Mr. Hippo","Athena","Tawaret","Twert","Thoeris","Set","Ipy","Ipet","Apet","Opet","Reret"],p),q)
c=P.f(H.a([new E.J($.d9,15,!0),new E.J($.c4,-4,!0)],k),l)
b=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.ag,L.d("#FF9B00"),!0)
b.j(0,$.ai,L.d("#FF9B00"),!0)
b.j(0,$.ah,L.d("#FF8700"),!0)
b.j(0,$.ar,L.d("#7F7F7F"),!0)
b.j(0,$.aq,L.d("#727272"),!0)
b.j(0,$.ak,L.d("#A3A3A3"),!0)
b.j(0,$.al,L.d("#999999"),!0)
b.j(0,$.aj,L.d("#898989"),!0)
b.j(0,$.ap,L.d("#EFEFEF"),!0)
b.j(0,$.ao,L.d("#DBDBDB"),!0)
b.j(0,$.an,L.d("#C6C6C6"),!0)
b.j(0,$.am,L.d("#ADADAD"),!0)
b=new V.ma(3.1,2,0.7,h,g,f,e,"Rant Your Troubles Away","The OWNER begins ranting, which strengthens themselves, but destroys the ENEMY.",d,["Hippo","Ranting"],["Vent"],c,0.01,0.01,0.01,0.5,18,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Hippo",null,!1,!1,!0,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
b.Y(18,"Hippo",!1,!1,!0)
$.yx=b
b=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.ag,L.d("#959595"),!0)
b.j(0,$.ai,L.d("#bfbfbf"),!0)
b.j(0,$.ah,L.d("#959595"),!0)
b.j(0,$.ar,L.d("#805233"),!0)
b.j(0,$.aq,L.d("#663c1f"),!0)
b.j(0,$.ak,L.d("#805233"),!0)
b.j(0,$.al,L.d("#737373"),!0)
b.j(0,$.aj,L.d("#664d3c"),!0)
b.j(0,$.ap,L.d("#663c1f"),!0)
b.j(0,$.ao,L.d("#4d2d17"),!0)
b.j(0,$.an,L.d("#68594e"),!0)
b.j(0,$.am,L.d("#4f443b"),!0)
c=P.f(H.a(["DOORWAY CLEARER","THINKY PERSON","THE FAZ"],p),q)
d=P.f(H.a(["Bear","Boiler","Bean","Bepis","Boneless","Bop"],p),q)
e=P.f(H.a(["Purgatorial","Clear","Criterion","Fazbear","Doorway"],p),q)
f=P.f(H.a(["Freddy Fazbear","Callisto","Nandi","Nanook","Otso","Onikuma","Jambavan","Ungnyeo"],p),q)
g=P.f(H.a([new E.J($.d9,5,!0),new E.J($.c4,5,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new L.kJ(0.7,2,3.1,b,c,d,e,"Persaude the Enemy","The OWNER convinces the ENEMY to get hurt.",f,["Bear","Thought"],["Doorway"],g,0.01,0.01,0.01,0.5,19,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Bear",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Y(19,"Bear",!1,!1,!0)
$.yq=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#ebd837"),!0)
h.j(0,$.ai,L.d("#ebd837"),!0)
h.j(0,$.ah,L.d("#857a1f"),!0)
h.j(0,$.ar,L.d("#857a1f"),!0)
h.j(0,$.aq,L.d("#524b13"),!0)
h.j(0,$.ak,L.d("#d0c217"),!0)
h.j(0,$.al,L.d("#9e9311"),!0)
h.j(0,$.aj,L.d("#6b640c"),!0)
h.j(0,$.ap,L.d("#c3c3c3"),!0)
h.j(0,$.ao,L.d("#8f8f8f"),!0)
h.j(0,$.an,L.d("#a88e00"),!0)
h.j(0,$.am,L.d("#756300"),!0)
g=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
f=P.f(H.a(["STONE","Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
e=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
d=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt","Stone"],p),q)
c=P.f(H.a(["Paradox Space"],p),q)
b=P.f(H.a([new E.J($.dU,2,!0),new E.J($.eH,1,!0),new E.J($.d8,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new A.nm(0.3,0.3,1,h,g,f,e,d,["stone","mind","decisions","consequences","free will","path","neurons","causality"],["stone","mind","coin","plan","mask","map","brain","circuit"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",c,b,0.01,0.01,0.01,0.5,20,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Mindstone",null,!1,!0,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Y(20,"Mindstone",!1,!0,!0)
$.yF=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#74a4ff"),!0)
a.j(0,$.ai,L.d("#74a4ff"),!0)
a.j(0,$.ah,L.d("#466299"),!0)
a.j(0,$.ar,L.d("#466299"),!0)
a.j(0,$.aq,L.d("#2f4166"),!0)
a.j(0,$.ak,L.d("#d0c217"),!0)
a.j(0,$.al,L.d("#9e9311"),!0)
a.j(0,$.aj,L.d("#6b640c"),!0)
a.j(0,$.ap,L.d("#c3c3c3"),!0)
a.j(0,$.ao,L.d("#8f8f8f"),!0)
a.j(0,$.an,L.d("#a88e00"),!0)
a.j(0,$.am,L.d("#756300"),!0)
b=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
c=P.f(H.a(["Frogs","Stone"],p),q)
d=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush","Stone"],p),q)
f=P.f(H.a(["Paradox Space"],p),q)
g=P.f(H.a([new E.J($.d8,2,!0),new E.J($.dV,1,!0),new E.J($.d9,-2,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new A.ow(0.5,1,0.5,a,b,c,d,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",e,f,["stone","space","commitment","creation","room","stars","galaxy","black hole","super nova"],["stone","space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],g,0.01,0.01,0.01,0.5,21,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Spacestone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Y(21,"Spacestone",!1,!0,!0)
$.yO=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#9846cc"),!0)
h.j(0,$.ai,L.d("#9846cc"),!0)
h.j(0,$.ah,L.d("#4c2366"),!0)
h.j(0,$.ar,L.d("#4c2366"),!0)
h.j(0,$.aq,L.d("#261233"),!0)
h.j(0,$.ak,L.d("#d0c217"),!0)
h.j(0,$.al,L.d("#9e9311"),!0)
h.j(0,$.aj,L.d("#6b640c"),!0)
h.j(0,$.ap,L.d("#c3c3c3"),!0)
h.j(0,$.ao,L.d("#8f8f8f"),!0)
h.j(0,$.an,L.d("#a88e00"),!0)
h.j(0,$.am,L.d("#756300"),!0)
g=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial","Stone"],p),q)
f=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
e=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
d=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible","Stone"],p),q)
c=P.f(H.a([new E.J($.eI,2,!0),new E.J($.d9,1,!0),new E.J($.c4,-1,!0),new E.J($.dW,-1,!0),new E.J($.bZ,0.01,!1)],k),l)
b=P.f(H.a(["Paradox Space"],p),q)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new A.nY(1,1,0.01,h,g,f,e,d,["stone","rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["stone","rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",c,b,0.01,0.01,0.01,0.5,22,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Powerstone",null,!1,!0,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Y(22,"Powerstone",!1,!0,!0)
$.yH=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#ffcb6f"),!0)
a.j(0,$.ai,L.d("#ffcb6f"),!0)
a.j(0,$.ah,L.d("#997a42"),!0)
a.j(0,$.ar,L.d("#997a42"),!0)
a.j(0,$.aq,L.d("#66512c"),!0)
a.j(0,$.ak,L.d("#d0c217"),!0)
a.j(0,$.al,L.d("#9e9311"),!0)
a.j(0,$.aj,L.d("#6b640c"),!0)
a.j(0,$.ap,L.d("#c3c3c3"),!0)
a.j(0,$.ao,L.d("#8f8f8f"),!0)
a.j(0,$.an,L.d("#a88e00"),!0)
a.j(0,$.am,L.d("#756300"),!0)
b=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters","Stone"],p),q)
c=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
e=P.f(H.a(["Stone","Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.f(H.a(["Paradox Space"],p),q)
g=P.f(H.a([new E.J($.dW,1,!0),new E.i8(null,1,!0)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new A.ou(0.3,0.6,0.01,a,b,c,d,e,["stone","heart","identity","emotion","core","beat","shadow"],["stone","heart","doll","locket","mirror","mask","shades","sculpture"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",f,g,0.01,0.01,0.01,0.5,23,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Soulstone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Y(23,"Soulstone",!1,!0,!0)
$.yM=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#7ac476"),!0)
h.j(0,$.ai,L.d("#7ac476"),!0)
h.j(0,$.ah,L.d("#3a5e39"),!0)
h.j(0,$.ar,L.d("#3a5e39"),!0)
h.j(0,$.aq,L.d("#1b2b1a"),!0)
h.j(0,$.ak,L.d("#d0c217"),!0)
h.j(0,$.al,L.d("#9e9311"),!0)
h.j(0,$.aj,L.d("#6b640c"),!0)
h.j(0,$.ap,L.d("#c3c3c3"),!0)
h.j(0,$.ao,L.d("#8f8f8f"),!0)
h.j(0,$.an,L.d("#a88e00"),!0)
h.j(0,$.am,L.d("#756300"),!0)
g=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums","Stone"],p),q)
f=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
e=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
d=P.f(H.a(["Stone","Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
c=P.f(H.a(["Paradox Space"],p),q)
b=P.f(H.a([new E.J($.eH,2,!0),new E.J($.d9,1,!0),new E.J($.dU,-2,!0)],k),l)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new A.pl(0.51,1,0.01,0.7,h,g,f,e,d,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",c,["stone","time","speed","inevitability","paradoxes","rhythm"],["stone","time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],b,0.01,0.01,0.01,0.5,24,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Timestone",null,!1,!0,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Y(24,"Timestone",!1,!0,!0)
$.yR=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#ed1c24"),!0)
a.j(0,$.ai,L.d("#ed1c24"),!0)
a.j(0,$.ah,L.d("#820a0f"),!0)
a.j(0,$.ar,L.d("#820a0f"),!0)
a.j(0,$.aq,L.d("#4f0609"),!0)
a.j(0,$.ak,L.d("#d0c217"),!0)
a.j(0,$.al,L.d("#9e9311"),!0)
a.j(0,$.aj,L.d("#6b640c"),!0)
a.j(0,$.ap,L.d("#c3c3c3"),!0)
a.j(0,$.ao,L.d("#8f8f8f"),!0)
a.j(0,$.an,L.d("#a88e00"),!0)
a.j(0,$.am,L.d("#756300"),!0)
b=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance","Stone"],p),q)
c=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
e=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze","Stone"],p),q)
f=P.f(H.a(["Paradox Space"],p),q)
g=P.f(H.a([new E.J($.ft,2,!0),new E.J($.dU,1,!0),new E.J($.c4,-1,!0),new E.J($.dV,-1,!0),new E.J($.bZ,0.2,!1)],k),l)
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#FF9B00"),!0)
h.j(0,$.ai,L.d("#FF9B00"),!0)
h.j(0,$.ah,L.d("#FF8700"),!0)
h.j(0,$.ar,L.d("#7F7F7F"),!0)
h.j(0,$.aq,L.d("#727272"),!0)
h.j(0,$.ak,L.d("#A3A3A3"),!0)
h.j(0,$.al,L.d("#999999"),!0)
h.j(0,$.aj,L.d("#898989"),!0)
h.j(0,$.ap,L.d("#EFEFEF"),!0)
h.j(0,$.ao,L.d("#DBDBDB"),!0)
h.j(0,$.an,L.d("#C6C6C6"),!0)
h.j(0,$.am,L.d("#ADADAD"),!0)
h=new A.o5(1.01,0.5,0.01,a,b,c,d,e,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["stone","light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],f,g,0.01,0.01,0.01,0.5,25,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Realitystone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.Y(25,"Realitystone",!1,!0,!0)
$.yJ=h
h=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
h.j(0,$.ag,L.d("#e19aca"),!0)
h.j(0,$.ai,L.d("#e19aca"),!0)
h.j(0,$.ah,L.d("#7a546e"),!0)
h.j(0,$.ar,L.d("#7a546e"),!0)
h.j(0,$.aq,L.d("#473140"),!0)
h.j(0,$.ak,L.d("#d0c217"),!0)
h.j(0,$.al,L.d("#9e9311"),!0)
h.j(0,$.aj,L.d("#6b640c"),!0)
h.j(0,$.ap,L.d("#c3c3c3"),!0)
h.j(0,$.ao,L.d("#8f8f8f"),!0)
h.j(0,$.an,L.d("#a88e00"),!0)
h.j(0,$.am,L.d("#756300"),!0)
g=P.f(H.a(["Stone","Gauntlet","Infinite","Mind","Space","Power","Soul","Time","Reality"],p),q)
f=P.f(H.a(["THANOS CAR","GAUNTLET HOLDER","STONE COLLECTOR"],p),q)
e=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
d=P.f(H.a(["Stone","Infinite","Gauntlet","Thanos","Mind","Space","Power","Soul","Time","Reality"],p),q)
c=P.f(H.a([new E.J($.c4,-1,!0),new E.J($.eI,2,!0)],k),l)
b=P.f(H.a(["Paradox Space"],p),q)
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#FF9B00"),!0)
a.j(0,$.ai,L.d("#FF9B00"),!0)
a.j(0,$.ah,L.d("#FF8700"),!0)
a.j(0,$.ar,L.d("#7F7F7F"),!0)
a.j(0,$.aq,L.d("#727272"),!0)
a.j(0,$.ak,L.d("#A3A3A3"),!0)
a.j(0,$.al,L.d("#999999"),!0)
a.j(0,$.aj,L.d("#898989"),!0)
a.j(0,$.ap,L.d("#EFEFEF"),!0)
a.j(0,$.ao,L.d("#DBDBDB"),!0)
a.j(0,$.an,L.d("#C6C6C6"),!0)
a.j(0,$.am,L.d("#ADADAD"),!0)
a=new A.m4(2,1.5,1,h,g,f,e,d,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","infinite","thanos","gauntlet"],["stone","infinite","thanos","gauntlet"],c,b,0.01,0.01,0.01,0.5,26,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Gauntlet",null,!1,!0,!0,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.Y(26,"Gauntlet",!1,!0,!0)
$.yv=a
a=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
a.j(0,$.ag,L.d("#c55555"),!0)
a.j(0,$.ai,L.d("#c55555"),!0)
a.j(0,$.ah,L.d("#090404"),!0)
a.j(0,$.ar,L.d("#ba872e"),!0)
a.j(0,$.aq,L.d("#8e694e"),!0)
a.j(0,$.ak,L.d("#b59e5d"),!0)
a.j(0,$.al,L.d("#837243"),!0)
a.j(0,$.aj,L.d("#4f4528"),!0)
a.j(0,$.ap,L.d("#9fbfbf"),!0)
a.j(0,$.ao,L.d("#95b5b5"),!0)
a.j(0,$.an,L.d("#956f6f"),!0)
a.j(0,$.am,L.d("#714b4b"),!0)
b=P.f(H.a(["MEME STEALER","THANOS CAR","AGGRESIVE MEMER"],p),q)
c=P.f(H.a(["Meme","Memetastic","Mesmerizing","Mop","Memelord","Mashedpotato"],p),q)
d=P.f(H.a(["Meme","Funny","Stealing","Despacito","Meme Stealing","Cursed"],p),q)
e=P.f(H.a(["Shogun","Memelord","Air Horn","420","Thanos Car","Luis Fonsi","Bowsette"],p),q)
f=P.f(H.a([new E.J($.c4,-1,!0)],k),l)
m=new L.aa(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
m.j(0,$.ag,L.d("#FF9B00"),!0)
m.j(0,$.ai,L.d("#FF9B00"),!0)
m.j(0,$.ah,L.d("#FF8700"),!0)
m.j(0,$.ar,L.d("#7F7F7F"),!0)
m.j(0,$.aq,L.d("#727272"),!0)
m.j(0,$.ak,L.d("#A3A3A3"),!0)
m.j(0,$.al,L.d("#999999"),!0)
m.j(0,$.aj,L.d("#898989"),!0)
m.j(0,$.ap,L.d("#EFEFEF"),!0)
m.j(0,$.ao,L.d("#DBDBDB"),!0)
m.j(0,$.an,L.d("#C6C6C6"),!0)
m.j(0,$.am,L.d("#ADADAD"),!0)
j=new D.ni(2,0.5,1,a,b,c,d,"cURSED","Some cursed meme music starts to play.",e,["memes"],["memes"],f,0.01,0.01,0.01,0.5,27,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Meme",null,!1,!1,!0,!1,!1,!0,1,m,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
j.Y(27,"Meme",!1,!1,!0)
$.yD=j
$.yG=L.yp(255,"Null",!1,!0,!1)
j=P.f(H.a([new E.J($.c4,1,!0),new E.J($.ft,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
f=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
e=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
d=H.a(["nobody"],p)
c=P.f(H.a([],k),l)
b=H.a(["Nobody"],p)
a=H.a(["Nobody"],p)
q=new F.no(j,q,m,f,e,!1,d,c,b,a,1,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"loud","musical","Music")
q.G()
q.H()
B.cO(q)
$.A3=q
q=P.f(H.a([new E.J($.dU,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kv(q,m,j,i,h,!1,g,f,e,d,13,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"nerdy","smart","Academic")
q.G()
q.H()
B.cO(q)
$.zX=q
q=P.f(H.a([new E.J($.eI,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kz(q,m,j,i,h,!1,g,f,e,d,4,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"dumb","athletic","Athletic")
q.G()
q.H()
B.cO(q)
$.zY=q
q=P.f(H.a([new E.J($.eH,-1,!0),new E.J($.ft,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.kW(q,m,j,i,h,!1,g,f,e,d,0,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"dorky","funny","Comedy")
q.G()
q.H()
B.cO(q)
$.zZ=q
q=P.f(H.a([new E.J($.c4,-1,!0),new E.J($.dV,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.l7(q,m,j,i,h,!1,g,f,e,d,2,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"pretentious","cultured","Culture")
q.G()
q.H()
B.cO(q)
$.A_=q
q=P.f(H.a([new E.J($.c4,1,!0),new E.J($.dW,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.lh(q,m,j,i,h,!1,g,f,e,d,8,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"boring","domestic","Domestic")
q.G()
q.H()
B.cO(q)
$.A0=q
q=P.f(H.a([new E.J($.ft,1,!0),new E.J($.d8,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.lL(q,m,j,i,h,!1,g,f,e,d,7,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"whimpy","imaginative","Fantasy")
q.G()
q.H()
B.cO(q)
$.A1=q
q=P.f(H.a([new E.J($.eI,1,!0),new E.J($.dV,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.mQ(q,m,j,i,h,!1,g,f,e,d,6,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"harsh","fair-minded","Justice")
q.G()
q.H()
B.cO(q)
$.A2=q
q=P.f(H.a([new E.J($.d9,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.nX(q,m,j,i,h,!1,g,f,e,d,9,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"frivolous","geeky","PopCulture")
q.G()
q.H()
B.cO(q)
$.A5=q
q=P.f(H.a([new E.J($.dW,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.oa(q,m,j,i,h,!1,g,f,e,d,12,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"obsessive","romantic","Romantic")
q.G()
q.H()
B.cO(q)
$.A6=q
q=P.f(H.a([new E.J($.c4,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.ot(q,m,j,i,h,!1,g,f,e,d,11,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"shallow","extroverted","Social")
q.G()
q.H()
B.cO(q)
$.A7=q
q=P.f(H.a([new E.J($.dW,-1,!0),new E.J($.c4,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.p8(q,m,j,i,h,!1,g,f,e,d,5,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"terrible","honest","Terrible")
q.G()
q.H()
B.cO(q)
$.A9=q
q=P.f(H.a([new E.J($.dU,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.pP(q,m,j,i,h,!1,g,f,e,d,3,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"wordy","lettered","Writing")
q.G()
q.H()
B.cO(q)
$.Aa=q
q=P.f(H.a([new E.J($.d8,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.p6(q,m,j,i,h,!1,g,f,e,d,10,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"awkward","techy","Technology")
q.G()
q.H()
B.cO(q)
$.A8=q
q=H.a(["nobody"],p)
l=P.f(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hk(!0,q,l,k,p,-13,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"","","Null")
q.G()
q.H()
B.cO(q)
$.A4=q
A.wB()
t=3
return P.cm(Y.np(),$async$rx)
case 3:case 1:return P.bl(r,s)}})
return P.bm($async$rx,s)}},V={lh:function lh(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},m0:function m0(a){this.a=a},ma:function ma(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
_.x2=x2},nl:function nl(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
_.x2=x2},nJ:function nJ(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2},ob:function ob(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
_.x2=x2},p8:function p8(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
zC:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.du(new P.cb(""),0,0)
t.ai(a,8)
s=Math.pow(256,e)
c.toString
r=H.cP(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.w(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.w(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.ai(n-1,p)
t.ai(a,8)}return t.b1(b)},
zB:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cA(c)
s=new Uint8Array(t)
r=new B.dh(null,0)
r.a=J.e2(a,b)
for(q=e*8,p=0;p<c;){o=r.aa(q)+1
n=r.aa(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.w(s,l)
s[l]=n}p+=o}return s},
t9:function(a){return new V.lr(a)},
t8:function(a){return new V.lq(a)},
zy:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.du(new P.cb(""),0,0)
t.ai(a,8)
s=d.gcG()
r=C.f.am(Math.log(H.ki(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cP(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.w(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.w(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.ai(m-1,o)
t.ai(a,r)}return t.b1(b)},
zx:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cA(c)
s=new Uint8Array(t)
r=d.y
q=C.f.am(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dh(null,0)
p.a=J.e2(a,b)
for(r=e*8,o=0;o<c;){n=p.aa(r)+1
m=p.aa(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.w(s,k)
s[k]=m}o+=n}return s},
t7:function(a){return new V.lp(a)},
t6:function(a){return new V.lo(a)},
zA:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.du(new P.cb(""),0,0)
t.ai(a,8)
s=d.gcG()
r=C.f.am(Math.log(H.ki(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cP(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.w(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.w(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.am(Math.log(n)/0.6931471805599453)+1
t.ai(k-1,5)
t.ai(n-1,k)
t.ai(a,r)}return t.b1(b)},
zz:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cA(c)
s=new Uint8Array(t)
r=d.y
q=C.f.am(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dh(null,0)
p.a=J.e2(a,b)
for(o=0;o<c;){n=p.aa(p.aa(5)+1)+1
m=p.aa(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
lr:function lr(a){this.a=a},
lq:function lq(a){this.a=a},
lp:function lp(a){this.a=a},
lo:function lo(a){this.a=a}},Z={lj:function lj(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a9,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
_.a9=a9
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
zM:function(){var t,s
if(!$.vN)$.vN=!0
else return
t=[P.B]
s=new Y.pa(H.a([],t))
$.tp=s
Z.cN(s,"txt",null)
Z.cN($.tp,"vert","x-shader/x-vertex")
Z.cN($.tp,"frag","x-shader/x-fragment")
$.zL=new Y.o4(H.a([],t))
$.vP=new Y.kQ(H.a([],t))
s=new B.pU(H.a([],t))
$.vR=s
Z.cN(s,"zip",null)
Z.cN($.vR,"bundle",null)
s=new U.pK(H.a([],t))
$.zU=s
Z.cN(s,"words",null)
s=new Q.nV(H.a([],t))
$.vQ=s
Z.cN(s,"png",null)
Z.cN($.vQ,"jpg","image/jpeg")
$.zS=new Q.nS(H.a([],t))
s=new M.oA(H.a([],t))
$.zT=s
Z.cN(s,"psprite",null)
s=new V.m0(H.a([],t))
$.to=s
Z.cN(s,"ttf",null)
Z.cN($.to,"otf",null)
Z.cN($.to,"woff",null)
s=new Y.nB(null,H.a([],t))
$.zP=s
Z.cN(s,"obj",null)
s=new U.na(H.a([],t))
$.zN=s
Z.cN(s,"mp3",null)
$.zO=new U.oX(H.a([],t))
s=new U.nF(H.a([],t))
$.zQ=s
Z.cN(s,"ogg",null)
$.zR=new U.oY(H.a([],t))},
cN:function(a,b,c){$.$get$m1().i(0,b,new Z.ip(a,c,[null,null]))
a.a.push(b)},
vO:function(a){var t
if($.$get$m1().a1(0,a)){t=$.$get$m1().n(0,a)
if(t.a instanceof O.c9)return t
throw H.l("File format for extension ."+H.D(a)+" does not match expected types.")}throw H.l("No file format found for extension ."+H.D(a))},
ip:function ip(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
mP:function mP(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
n9:function n9(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
_.E=E
_.F=F
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
_.r2=r2},
u0:function u0(){},
tX:function tX(){},
tY:function tY(){}},X={iq:function iq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},i9:function i9(){},mc:function mc(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
_.x2=x2},mh:function mh(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2},G:function G(a,b,c){this.a=a
this.b=b
this.c=c}},N={a5:function a5(){},mQ:function mQ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},o1:function o1(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2},o9:function o9(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},ot:function ot(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ov:function ov(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
_.x2=x2},pg:function pg(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a9,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
_.a9=a9
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
Fw:function(a){var t,s,r,q,p,o,n,m,l
t=J.cL(a)
s=new W.k6(document.querySelectorAll("link"),[null])
for(r=new H.ey(s,s.gm(s),0,null,[null]);r.J();){q=r.d
p=J.aL(q)
if(!!p.$isht&&q.rel==="stylesheet"){o=$.$get$nQ()
H.D(p.gah(q))
o.toString
o=t.length
n=Math.min(o,J.cn(p.gah(q)))
for(m=0;m<n;++m){if(m>=o)return H.w(t,m)
if(t[m]!==J.i6(p.gah(q),m)){l=C.c.W(t,m)
$.$get$nQ().toString
return l.split("/").length-1}continue}}}$.$get$nQ().b8(C.m,"Didn't find a css link to derive relative path")
return 0},
nP:function(){var t=P.x9()
if(!$.$get$nO().a1(0,t))$.$get$nO().i(0,t,N.Fw(t))
return $.$get$nO().n(0,t)}},E={iD:function iD(){},nE:function nE(){},J:function J(a,b,c){this.a=a
this.b=b
this.c=c},fM:function fM(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},nn:function nn(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2},o3:function o3(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
_.x2=x2},oe:function oe(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},pF:function pF(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
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
_.r2=r2}},B={m9:function m9(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,C,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.C=C
_.E=E
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
cO:function(a){var t=a.f
if($.$get$mq().a1(0,t))throw H.l("Duplicate aspect id for "+a.D(0)+": "+t+" is already registered for "+J.cL($.$get$mq().n(0,t))+".")
$.$get$mq().i(0,t,a)},
hk:function hk(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
pU:function pU(a){this.a=a},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
dh:function dh(a,b){this.a=a
this.b=b},
H2:function(a){return a.b9(0)},
dC:function dC(a){this.a=a},
jZ:function jZ(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
hT:function hT(a,b){this.a=a
this.b=b}},Q={mi:function mi(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},mm:function mm(){},nV:function nV(a){this.a=a},nS:function nS(a){this.a=a},mT:function mT(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a9,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
_.I=I
_.a9=a9
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
_.x2=x2},oa:function oa(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pE:function pE(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
_.x2=x2},jE:function jE(){},
F:function(a,b,c){var t=new Q.dZ(null,null,[c])
t.d5(a,b,c)
return t},
uT:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.F(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.e0(a,"$iso",[e],"$aso"))if(H.e0(a,"$iscS",[e],"$ascS"))for(s=J.df(a.gbV()),r=0;s.J();){q=s.gR()
p=t.b
o=p.length
if(r>=o)return H.w(p,r)
p[r]=q;++r}else for(s=a.ga0(a),p=[H.O(t,0)],r=0;s.J();){n=s.gR()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.w(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.ga0(a),p=[e],o=[H.O(t,0)];s.J();){l=s.gR()
if(H.Hj(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.w(m,0)
m[0]=new Q.h(l,k,o)}else if(H.e0(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.w(m,0)
m[0]=l}else throw H.l("Invalid entry type "+H.D(J.vd(l))+" for WeightedList<"+H.D(H.c_(H.dF(e)))+">. Should be "+H.D(H.c_(H.dF(e)))+" or WeightPair<"+H.D(H.c_(H.dF(e)))+">.")}return t},
uU:function(a,b,c,d){return new Q.jW(J.vf(a.gbV(),new Q.pI(c,d,b)),null,[c,d])},
cS:function cS(){},
dZ:function dZ(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
hR:function hR(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eP:function eP(){},
hQ:function hQ(){},
pH:function pH(a,$ti){this.a=a
this.$ti=$ti},
jW:function jW(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pI:function pI(a,b,c){this.a=a
this.b=b
this.c=c},
ok:function(){var t=0,s=P.bi(),r
var $async$ok=P.bn(function(a,b){if(a===1)return P.bk(b,s)
while(true)switch(t){case 0:t=3
return P.cm(A.hv("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$ok)
case 3:r=A.hv("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$ok,s)}},G={mW:function mW(y1,y2,p,q,t,u,v,w,A,B,C,E,F,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
_.ch=ch},
zg:function(a){var t,s,r,q,p,o,n,m,l
t=G.V
s=P.u7(a,t)
r=P.a6(null,null,null,t)
q=H.a([],[G.e])
for(t=G.F9(),p=J.df(t.a),t=new H.jX(p,t.b,[H.O(t,0)]);t.J();){o=p.gR()
if(o.ej(s))q.push(o)}C.b.d_(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bV)(q),++n){o=q[n]
if(o.ej(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.bV)(p),++l)s.ak(0,p[l])}}if(s.a!==0)r.bL(0,s)
return r},
F9:function(){var t=$.$get$c()
t.toString
return new H.hS(t,new G.mF(),[H.O(t,0)])},
V:function V(){},
aY:function aY(a,b,c){this.a=a
this.b=b
this.c=c},
at:function at(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(d,e,a,b,c){var _=this
_.d=d
_.e=e
_.a=a
_.b=b
_.c=c},
mF:function mF(){}},D={ni:function ni(y1,y2,p,q,t,u,v,w,A,B,C,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.C=C
_.E=E
_.F=F
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
_.x2=x2},p6:function p6(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Gp:function(){if($.wU)return
$.wU=!0
var t=new D.cI("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
t.y=0
$.oC=t
t=new D.cI("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.Go=t
t=new D.k_(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
t.y=2.5
t.Q=1
$.eI=t
t=new D.k_(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
t.y=2.5
$.dV=t
t=new D.cI("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.Gn=t
t=new D.cI("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.d9=t
t=new D.o7("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.dW=t
t=new D.cI("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.c4=t
t=new D.cI("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.dU=t
t=new D.cI("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.ft=t
t=new D.cI("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.eH=t
t=new D.cI("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.d8=t
t=new D.cI("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cQ().push(t)
$.bZ=t},
uH:function(){var t=$.$get$cQ()
return new H.hS(t,new D.oD(),[H.O(t,0)])},
oD:function oD(){},
cI:function cI(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
k_:function k_(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
o7:function o7(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch}},F={no:function no(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},pO:function pO(a){this.a=a},pP:function pP(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Fe:function(a){if(a===C.h){window
return C.i.gas(C.i)}if(a===C.m){window
return C.i.ghV()}if(a===C.a_){window
return C.i.ghm()}return P.Hm()},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
u5:function u5(){},
zw:function(a,b,c,d){var t,s,r,q
t=new B.du(new P.cb(""),0,0)
t.ai(a,8)
c.toString
s=H.cP(c,0,null)
for(r=s.length,q=0;q<r;++q)t.bM(s[q])
return t.b1(b)},
zv:function(a,b,c,d){var t,s,r,q,p
t=H.cA(c)
s=new Uint8Array(t)
r=new B.dh(null,0)
r.a=J.e2(a,b)
for(q=0;q<c;++q){p=r.bW()
if(q>=t)return H.w(s,q)
s[q]=p}return s},
zu:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.du(new P.cb(""),0,0)
t.ai(a,8)
s=d.gcG()
r=C.f.am(Math.log(H.ki(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cP(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.w(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.w(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.bM(o-1)
t.ai(a,r)}return t.b1(b)},
zt:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cA(c)
s=new Uint8Array(t)
r=d.y
q=C.f.am(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dh(null,0)
p.a=J.e2(a,b)
for(o=0;o<c;){n=p.bW()+1
m=p.aa(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
zs:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.du(new P.cb(""),0,0)
t.ai(a,8)
c.toString
s=H.cP(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.w(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.w(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.bM(p-1)
t.bM(a)}return t.b1(b)},
zr:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cA(c)
s=new Uint8Array(t)
r=new B.dh(null,0)
r.a=J.e2(a,b)
for(q=0;q<c;){p=r.bW()+1
o=r.bW()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.w(s,m)
s[m]=o}q+=p}return s}},R={
FR:function(a){var t,s
if(a.gm(a).aC(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.gi2(s).gih().e3("checking for two players, ps is "+H.D(a)+", ret is "+t)
return t},
FF:function(a){a.gag(a).gbN()
return!1},
FQ:function(a){a.gag(a).gbN()
return!1},
FP:function(a){a.gag(a).gbN()
return!1},
FO:function(a){return a.gag(a).gbk().gig()},
FM:function(a){return a.gag(a).gbk().gic()},
FL:function(a){return a.gag(a).gbk().gib()},
FI:function(a){return a.gag(a).gbk().gi9()},
FK:function(a){return a.gag(a).gbk().gia()},
FN:function(a){return a.gag(a).gbk().gie()},
FJ:function(a){var t=a.gag(a)
t.gbN()
t.gbN()
return!1},
FG:function(a){return!0},
FH:function(a){a.gag(a).gi6()
return!1},
o2:function o2(){},
a1:function a1(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
a8:function a8(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
p2:function p2(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
hf:function hf(){},
un:function un(){},
um:function um(){}}
var v=[C,H,J,P,W,T,S,K,L,M,U,O,Y,A,V,Z,X,N,E,B,Q,G,D,F,R]
setFunctionNamesIfNecessary(v)
var $={}
H.u2.prototype={}
J.j.prototype={
S:function(a,b){return a===b},
ga8:function(a){return H.eB(a)},
D:function(a){return H.o_(a)},
gad:function(a){return new H.dY(H.km(a),null)},
$ishf:1,
$isad:1,
$isfn:1,
$isad:1,
$ismL:1,
$isj:1,
$ismL:1,
$isj:1,
$ishz:1,
$isad:1}
J.mJ.prototype={
D:function(a){return String(a)},
ga8:function(a){return a?519018:218159},
gad:function(a){return C.ag},
$isdc:1}
J.mK.prototype={
S:function(a,b){return null==b},
D:function(a){return"null"},
ga8:function(a){return 0},
gad:function(a){return C.aa},
$isd6:1}
J.hr.prototype={
ga8:function(a){return 0},
gad:function(a){return C.a9},
D:function(a){return String(a)},
$ismL:1,
h:function(a,b){return a.add(b)},
ak:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gbU:function(a){return a.left},
gbZ:function(a){return a.top},
gb3:function(a){return a.width},
gaY:function(a){return a.height},
hA:function(a,b){return a.parse(b)},
eB:function(a,b){return a.setLogging(b)},
eC:function(a,b){return a.setMaterials(b)}}
J.nU.prototype={}
J.eM.prototype={}
J.ew.prototype={
D:function(a){var t=a[$.$get$vw()]
return t==null?this.eH(a):J.cL(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.eu.prototype={
bR:function(a,b){if(!!a.immutable$list)throw H.l(new P.Z(b))},
bQ:function(a,b){if(!!a.fixed$length)throw H.l(new P.Z(b))},
h:function(a,b){this.bQ(a,"add")
a.push(b)},
ak:function(a,b){var t
this.bQ(a,"remove")
for(t=0;t<a.length;++t)if(J.ba(a[t],b)){a.splice(t,1)
return!0}return!1},
ac:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.l(new P.bN(a))}},
aw:function(a,b){return new H.fi(a,b,[H.O(a,0),null])},
b6:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.D(a[r])
if(r>=t)return H.w(s,r)
s[r]=q}return s.join(b)},
cZ:function(a,b){return H.wW(a,b,null,H.O(a,0))},
hb:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.l(new P.bN(a))}return s},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
c2:function(a,b,c){if(b<0||b>a.length)throw H.l(P.bG(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.l(H.bu(c))
if(c<b||c>a.length)throw H.l(P.bG(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.O(a,0)])
return H.a(a.slice(b,c),[H.O(a,0)])},
gag:function(a){if(a.length>0)return a[0]
throw H.l(H.jp())},
gb7:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.l(H.jp())},
ab:function(a,b,c,d,e){var t,s,r
this.bR(a,"setRange")
P.dm(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.bb(P.bG(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.l(H.wv())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}},
az:function(a,b,c,d){return this.ab(a,b,c,d,0)},
bS:function(a,b,c,d){var t
this.bR(a,"fill range")
P.dm(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aB:function(a,b,c,d){var t,s,r,q,p,o
this.bQ(a,"replaceRange")
P.dm(b,c,a.length,null,null,null)
d=C.c.ap(d)
if(typeof c!=="number")return c.V()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.az(a,b,r,d)
if(p!==0){this.ab(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.ab(a,r,o,a,c)
this.az(a,b,r,d)}},
h8:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.l(new P.bN(a))}return!0},
d0:function(a,b){var t
this.bR(a,"sort")
t=b==null?P.Hl():b
H.jN(a,0,a.length-1,t)},
d_:function(a){return this.d0(a,null)},
aZ:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.ba(a[t],b))return t
return-1},
be:function(a,b){return this.aZ(a,b,0)},
aj:function(a,b){var t
for(t=0;t<a.length;++t)if(J.ba(a[t],b))return!0
return!1},
gX:function(a){return a.length===0},
D:function(a){return P.jo(a,"[","]")},
a5:function(a,b){var t=H.a(a.slice(0),[H.O(a,0)])
return t},
ap:function(a){return this.a5(a,!0)},
ga0:function(a){return new J.i7(a,a.length,0,null,[H.O(a,0)])},
ga8:function(a){return H.eB(a)},
gm:function(a){return a.length},
sm:function(a,b){this.bQ(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.e4(b,"newLength",null))
if(b<0)throw H.l(P.bG(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c5(a,b))
if(b>=a.length||b<0)throw H.l(H.c5(a,b))
return a[b]},
i:function(a,b,c){this.bR(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c5(a,b))
if(b>=a.length||b<0)throw H.l(H.c5(a,b))
a[b]=c},
$isaP:1,
$asaP:function(){},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
J.u1.prototype={}
J.i7.prototype={
gR:function(){return this.d},
J:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.l(H.bV(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fh.prototype={
av:function(a,b){var t
if(typeof b!=="number")throw H.l(H.bu(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcC(b)
if(this.gcC(a)===t)return 0
if(this.gcC(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcC:function(a){return a===0?1/a<0:a<0},
hJ:function(a,b){return a%b},
am:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.l(new P.Z(""+a+".floor()"))},
b0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.l(new P.Z(""+a+".round()"))},
ae:function(a,b,c){if(C.a.av(b,c)>0)throw H.l(H.bu(b))
if(this.av(a,b)<0)return b
if(this.av(a,c)>0)return c
return a},
l:function(a){return a},
bf:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.l(P.bG(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.Z(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.bb(new P.Z("Unexpected toString result: "+t))
r=J.bd(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.an("0",q)},
D:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga8:function(a){return a&0x1FFFFFFF},
cV:function(a){return-a},
U:function(a,b){if(typeof b!=="number")throw H.l(H.bu(b))
return a+b},
V:function(a,b){if(typeof b!=="number")throw H.l(H.bu(b))
return a-b},
an:function(a,b){if(typeof b!=="number")throw H.l(H.bu(b))
return a*b},
bz:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
bh:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dJ(a,b)},
al:function(a,b){return(a|0)===a?a/b|0:this.dJ(a,b)},
dJ:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.l(new P.Z("Result of truncating division is "+H.D(t)+": "+H.D(a)+" ~/ "+H.D(b)))},
aq:function(a,b){if(typeof b!=="number")throw H.l(H.bu(b))
if(b<0)throw H.l(H.bu(b))
return b>31?0:a<<b>>>0},
ar:function(a,b){return b>31?0:a<<b>>>0},
aU:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
fG:function(a,b){if(b<0)throw H.l(H.bu(b))
return b>31?0:a>>>b},
dI:function(a,b){return b>31?0:a>>>b},
a6:function(a,b){if(typeof b!=="number")throw H.l(H.bu(b))
return a<b},
aC:function(a,b){if(typeof b!=="number")throw H.l(H.bu(b))
return a>b},
at:function(a,b){if(typeof b!=="number")throw H.l(H.bu(b))
return a>=b},
gad:function(a){return C.aj},
$isds:1}
J.js.prototype={
gad:function(a){return C.ai},
$isU:1,
$isds:1,
$isE:1}
J.jr.prototype={
gad:function(a){return C.ah},
$isU:1,
$isds:1}
J.ev.prototype={
Z:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c5(a,b))
if(b<0)throw H.l(H.c5(a,b))
if(b>=a.length)H.bb(H.c5(a,b))
return a.charCodeAt(b)},
a7:function(a,b){if(b>=a.length)throw H.l(H.c5(a,b))
return a.charCodeAt(b)},
cq:function(a,b,c){if(c>b.length)throw H.l(P.bG(c,0,b.length,null,null))
return new H.r_(b,a,c)},
aV:function(a,b){return this.cq(a,b,0)},
e8:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.l(P.bG(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.Z(b,c+s)!==this.a7(a,s))return
return new H.jS(c,b,a)},
U:function(a,b){if(typeof b!=="string")throw H.l(P.e4(b,null,null))
return a+b},
h7:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.W(a,s-t)},
cP:function(a,b,c){return H.xY(a,b,c)},
hN:function(a,b,c){return H.HP(a,b,c,null)},
eE:function(a,b){if(b==null)H.bb(H.bu(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hq&&b.gdu().exec("").length-2===0)return a.split(b.gft())
else return this.fa(a,b)},
aB:function(a,b,c,d){var t,s
H.ee(b)
c=P.dm(b,c,a.length,null,null,null)
H.ee(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fa:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.B])
for(s=J.y1(b,a),s=s.ga0(s),r=0,q=1;s.J();){p=s.gR()
o=p.gd1(p)
n=p.gdU(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.M(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.W(a,r))
return t},
aD:function(a,b,c){var t
H.ee(c)
if(typeof c!=="number")return c.a6()
if(c<0||c>a.length)throw H.l(P.bG(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.yf(b,a,c)!=null},
af:function(a,b){return this.aD(a,b,0)},
M:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.bb(H.bu(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.bb(H.bu(c))
if(typeof b!=="number")return b.a6()
if(b<0)throw H.l(P.jK(b,null,null))
if(typeof c!=="number")return H.a9(c)
if(b>c)throw H.l(P.jK(b,null,null))
if(c>a.length)throw H.l(P.jK(c,null,null))
return a.substring(b,c)},
W:function(a,b){return this.M(a,b,null)},
hU:function(a){return a.toUpperCase()},
bg:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a7(t,0)===133){r=J.Fa(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.Z(t,q)===133?J.tZ(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
ek:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.Z(t,r)===133)s=J.tZ(t,r)}else{s=J.tZ(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
an:function(a,b){var t,s
if(typeof b!=="number")return H.a9(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.l(C.I)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
cF:function(a,b,c){var t=b-a.length
if(t<=0)return a
return this.an(c,t)+a},
aZ:function(a,b,c){var t
if(c<0||c>a.length)throw H.l(P.bG(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
be:function(a,b){return this.aZ(a,b,0)},
hs:function(a,b,c){var t
if(b==null)H.bb(H.bu(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.bb(P.bG(t,0,c,null,null))
if(b.cb(a,t)!=null)return t}return-1},
e5:function(a,b){return this.hs(a,b,null)},
dS:function(a,b,c){if(c>a.length)throw H.l(P.bG(c,0,a.length,null,null))
return H.HO(a,b,c)},
aj:function(a,b){return this.dS(a,b,0)},
gX:function(a){return a.length===0},
av:function(a,b){var t
if(typeof b!=="string")throw H.l(H.bu(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
D:function(a){return a},
ga8:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gad:function(a){return C.ab},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(H.c5(a,b))
if(b>=a.length||b<0)throw H.l(H.c5(a,b))
return a[b]},
$isaP:1,
$asaP:function(){},
$isB:1}
H.kV.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.Z(this.a,b)},
$ashO:function(){return[P.E]},
$asjt:function(){return[P.E]},
$ashI:function(){return[P.E]},
$asq:function(){return[P.E]},
$asv:function(){return[P.E]},
$aso:function(){return[P.E]}}
H.v.prototype={$asv:null}
H.ex.prototype={
ga0:function(a){return new H.ey(this,this.gm(this),0,null,[H.aU(this,"ex",0)])},
ac:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.T(0,s))
if(t!==this.gm(this))throw H.l(new P.bN(this))}},
gX:function(a){return this.gm(this)===0},
gag:function(a){if(this.gm(this)===0)throw H.l(H.jp())
return this.T(0,0)},
aj:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.ba(this.T(0,s),b))return!0
if(t!==this.gm(this))throw H.l(new P.bN(this))}return!1},
aw:function(a,b){return new H.fi(this,b,[H.aU(this,"ex",0),null])},
a5:function(a,b){var t,s,r
t=H.a([],[H.aU(this,"ex",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.T(0,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
ap:function(a){return this.a5(a,!0)}}
H.p0.prototype={
gfb:function(){var t=J.cn(this.a)
return t},
gfH:function(){var t,s
t=J.cn(this.a)
s=this.b
if(J.cx(s,t))return t
return s},
gm:function(a){var t,s
t=J.cn(this.a)
s=this.b
if(J.v7(s,t))return 0
if(typeof s!=="number")return H.a9(s)
return t-s},
T:function(a,b){var t=J.e1(this.gfH(),b)
if(J.ef(b,0)||J.v7(t,this.gfb()))throw H.l(P.by(b,this,"index",null,null))
return J.va(this.a,t)},
a5:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.bd(s)
q=r.gm(s)
if(typeof t!=="number")return H.a9(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.T(s,t+m)
if(m>=n.length)return H.w(n,m)
n[m]=o
if(r.gm(s)<q)throw H.l(new P.bN(this))}return n},
ap:function(a){return this.a5(a,!0)},
eQ:function(a,b,c,d){var t=this.b
if(J.ef(t,0))H.bb(P.bG(t,0,null,"start",null))}}
H.ey.prototype={
gR:function(){return this.d},
J:function(){var t,s,r,q
t=this.a
s=J.bd(t)
r=s.gm(t)
if(this.b!==r)throw H.l(new P.bN(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.T(t,q);++this.c
return!0}}
H.hy.prototype={
ga0:function(a){return new H.ju(null,J.df(this.a),this.b,this.$ti)},
gm:function(a){return J.cn(this.a)},
gX:function(a){return J.rT(this.a)},
$aso:function(a,b){return[b]}}
H.fZ.prototype={$isv:1,
$asv:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.ju.prototype={
J:function(){var t=this.b
if(t.J()){this.a=this.c.$1(t.gR())
return!0}this.a=null
return!1},
gR:function(){return this.a},
$asjq:function(a,b){return[b]}}
H.fi.prototype={
gm:function(a){return J.cn(this.a)},
T:function(a,b){return this.b.$1(J.va(this.a,b))},
$asex:function(a,b){return[b]},
$asv:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
H.hS.prototype={
ga0:function(a){return new H.jX(J.df(this.a),this.b,this.$ti)},
aw:function(a,b){return new H.hy(this,b,[H.O(this,0),null])}}
H.jX.prototype={
J:function(){var t,s
for(t=this.a,s=this.b;t.J();)if(s.$1(t.gR())===!0)return!0
return!1},
gR:function(){return this.a.gR()}}
H.iA.prototype={
sm:function(a,b){throw H.l(new P.Z("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.l(new P.Z("Cannot add to a fixed-length list"))},
aB:function(a,b,c,d){throw H.l(new P.Z("Cannot remove from a fixed-length list"))}}
H.pr.prototype={
i:function(a,b,c){throw H.l(new P.Z("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.l(new P.Z("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.l(new P.Z("Cannot add to an unmodifiable list"))},
ab:function(a,b,c,d,e){throw H.l(new P.Z("Cannot modify an unmodifiable list"))},
az:function(a,b,c,d){return this.ab(a,b,c,d,0)},
aB:function(a,b,c,d){throw H.l(new P.Z("Cannot remove from an unmodifiable list"))},
bS:function(a,b,c,d){throw H.l(new P.Z("Cannot modify an unmodifiable list"))},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
H.hO.prototype={$asq:null,$asv:null,$aso:null,$isq:1,$isv:1,$iso:1}
H.rP.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.rQ.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.qI.prototype={}
H.fz.prototype={
dO:function(a,b){if(!this.f.S(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.co()},
hM:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.ak(0,a)
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
if(q===s.c)s.dm();++s.d}this.y=!1}this.co()},
fL:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.aL(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.w(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
hK:function(a){var t,s,r
if(this.ch==null)return
for(t=J.aL(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.bb(new P.Z("removeRange"))
P.dm(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
eA:function(a,b){if(!this.r.S(0,a))return
this.db=b},
hh:function(a,b,c){var t=J.aL(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){J.fI(a,c)
return}t=this.cx
if(t==null){t=P.u8(null,null)
this.cx=t}t.aK(0,new H.qD(a,c))},
hg:function(a,b){var t
if(!this.r.S(0,a))return
t=J.aL(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){this.bT()
return}t=this.cx
if(t==null){t=P.u8(null,null)
this.cx=t}t.aK(0,this.ghr())},
hi:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fG(a)
if(b!=null)P.fG(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cL(a)
s[1]=b==null?null:J.cL(b)
for(r=new P.dD(t,t.r,null,null,[null]),r.c=t.e;r.J();)J.fI(r.d,s)},
bo:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.cw(o)
p=H.cv(o)
this.hi(q,p)
if(this.db===!0){this.bT()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ghq()
if(this.cx!=null)for(;n=this.cx,!n.gX(n);)this.cx.ed().$0()}return s},
cD:function(a){return this.b.n(0,a)},
d7:function(a,b){var t=this.b
if(t.a1(0,a))throw H.l(P.lt("Registry: ports must be registered only once."))
t.i(0,a,b)},
co:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.bT()},
bT:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.bc(0)
for(t=this.b,s=t.gc_(t),s=s.ga0(s);s.J();)s.gR().f3()
t.bc(0)
this.c.bc(0)
u.globalState.z.ak(0,this.a)
this.dx.bc(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.w(t,p)
J.fI(q,t[p])}this.ch=null}},
ghq:function(){return this.d},
gfW:function(){return this.e}}
H.qD.prototype={
$0:function(){J.fI(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.qe.prototype={
h1:function(){var t=this.a
if(t.b===t.c)return
return t.ed()},
eh:function(){var t,s,r
t=this.h1()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.a1(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gX(s)}else s=!1
else s=!1
else s=!1
if(s)H.bb(P.lt("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gX(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hu(["command","close"])
r=new H.dE(!0,new P.ka(0,null,null,null,null,null,0,[null,P.E])).ay(r)
s.toString
self.postMessage(r)}return!1}t.hG()
return!0},
dD:function(){if(self.window!=null)new H.qf(this).$0()
else for(;this.eh(););},
bv:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dD()
else try{this.dD()}catch(r){t=H.cw(r)
s=H.cv(r)
q=u.globalState.Q
p=P.hu(["command","error","msg",H.D(t)+"\n"+H.D(s)])
p=new H.dE(!0,P.hZ(null,P.E)).ay(p)
q.toString
self.postMessage(p)}}}
H.qf.prototype={
$0:function(){if(!this.a.eh())return
P.wX(C.p,this)},
$S:function(){return{func:1,v:true}}}
H.eS.prototype={
hG:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bo(this.b)}}
H.qH.prototype={}
H.mr.prototype={
$0:function(){H.Ae(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.ms.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fF(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fF(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.co()},
$S:function(){return{func:1,v:true}}}
H.q1.prototype={}
H.fA.prototype={
b4:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdt())return
r=H.GZ(b)
if(t.gfW()===s){s=J.bd(r)
switch(s.n(r,0)){case"pause":t.dO(s.n(r,1),s.n(r,2))
break
case"resume":t.hM(s.n(r,1))
break
case"add-ondone":t.fL(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.hK(s.n(r,1))
break
case"set-errors-fatal":t.eA(s.n(r,1),s.n(r,2))
break
case"ping":t.hh(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.hg(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.ak(0,s)
break}return}u.globalState.f.a.aK(0,new H.eS(t,new H.qK(this,r),"receive"))},
S:function(a,b){if(b==null)return!1
return b instanceof H.fA&&J.ba(this.b,b.b)},
ga8:function(a){return this.b.gcd()}}
H.qK.prototype={
$0:function(){var t=this.a.b
if(!t.gdt())t.eZ(0,this.b)},
$S:function(){return{func:1}}}
H.i2.prototype={
b4:function(a,b){var t,s,r
t=P.hu(["command","message","port",this,"msg",b])
s=new H.dE(!0,P.hZ(null,P.E)).ay(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
S:function(a,b){if(b==null)return!1
return b instanceof H.i2&&J.ba(this.b,b.b)&&J.ba(this.a,b.a)&&J.ba(this.c,b.c)},
ga8:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aq()
s=this.a
if(typeof s!=="number")return s.aq()
r=this.c
if(typeof r!=="number")return H.a9(r)
return(t<<16^s<<8^r)>>>0}}
H.fp.prototype={
f3:function(){this.c=!0
this.b=null},
eZ:function(a,b){if(this.c)return
this.b.$1(b)},
$isFS:1,
gcd:function(){return this.a},
gdt:function(){return this.c}}
H.pi.prototype={
eR:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aK(0,new H.eS(s,new H.pj(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dq(new H.pk(this,b),0),a)}else throw H.l(new P.Z("Timer greater than 0."))}}
H.pj.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.pk.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dI.prototype={
ga8:function(a){var t=this.a
if(typeof t!=="number")return t.cY()
t=C.d.aU(t,0)^C.d.al(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dI){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcd:function(){return this.a}}
H.dE.prototype={
ay:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.aL(a)
if(!!t.$isfk)return["buffer",a]
if(!!t.$iseA)return["typed",a]
if(!!t.$isaP)return this.ew(a)
if(!!t.$isAb){r=this.ges()
q=t.ge4(a)
q=H.dz(q,r,H.aU(q,"o",0),null)
q=P.dk(q,!0,H.aU(q,"o",0))
t=t.gc_(a)
t=H.dz(t,r,H.aU(t,"o",0),null)
return["map",q,P.dk(t,!0,H.aU(t,"o",0))]}if(!!t.$ismL)return this.ex(a)
if(!!t.$isj)this.el(a)
if(!!t.$isFS)this.bx(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfA)return this.ey(a)
if(!!t.$isi2)return this.ez(a)
if(!!t.$isf_){p=a.$static_name
if(p==null)this.bx(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdI)return["capability",a.a]
if(!(a instanceof P.ad))this.el(a)
return["dart",u.classIdExtractor(a),this.ev(u.classFieldsExtractor(a))]},
bx:function(a,b){throw H.l(new P.Z((b==null?"Can't transmit:":b)+" "+H.D(a)))},
el:function(a){return this.bx(a,null)},
ew:function(a){var t=this.eu(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bx(a,"Can't serialize indexable: ")},
eu:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.ay(a[s])
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
ev:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.ay(a[t]))
return a},
ex:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bx(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.ay(a[t[r]])
if(r>=s.length)return H.w(s,r)
s[r]=q}return["js-object",t,s]},
ez:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
ey:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcd()]
return["raw sendport",a]}}
H.eQ.prototype={
aW:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.l(P.dH("Bad serialized message: "+H.D(a)))
switch(C.b.gag(a)){case"ref":if(1>=a.length)return H.w(a,1)
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
s=H.a(this.bm(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bm(r),[null])
case"mutable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return this.bm(r)
case"const":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bm(r),[null])
s.fixed$length=Array
return s
case"map":return this.h5(a)
case"sendport":return this.h6(a)
case"raw sendport":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.h4(a)
case"function":if(1>=a.length)return H.w(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.w(a,1)
return new H.dI(a[1])
case"dart":s=a.length
if(1>=s)return H.w(a,1)
q=a[1]
if(2>=s)return H.w(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bm(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.l("couldn't deserialize: "+H.D(a))}},
bm:function(a){var t,s,r
t=J.bd(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.a9(r)
if(!(s<r))break
t.i(a,s,this.aW(t.n(a,s)));++s}return a},
h5:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
q=P.n0()
this.b.push(q)
s=J.yk(J.vf(s,this.gh3()))
for(t=J.bd(s),p=J.bd(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.aW(p.n(r,o)))
return q},
h6:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
if(3>=t)return H.w(a,3)
q=a[3]
if(J.ba(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cD(q)
if(o==null)return
n=new H.fA(o,r)}else n=new H.i2(s,q,r)
this.b.push(n)
return n},
h4:function(a){var t,s,r,q,p,o,n
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
if(typeof n!=="number")return H.a9(n)
if(!(o<n))break
q[t.n(s,o)]=this.aW(p.n(r,o));++o}return q}}
H.kY.prototype={
gX:function(a){return this.gm(this)===0},
D:function(a){return P.wC(this)},
i:function(a,b,c){return H.zi()},
$isbt:1,
$asbt:null}
H.kZ.prototype={
gm:function(a){return this.a},
a1:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.a1(0,b))return
return this.dl(b)},
dl:function(a){return this.b[a]},
ac:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.dl(q))}}}
H.o6.prototype={}
H.po.prototype={
aF:function(a){var t,s,r
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
H.jA.prototype={
D:function(a){var t=this.b
if(t==null)return"NullError: "+H.D(this.a)
return"NullError: method not found: '"+H.D(t)+"' on null"}}
H.mO.prototype={
D:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.D(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.D(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.D(this.a)+")"}}
H.pq.prototype={
D:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.h6.prototype={
gaI:function(){return this.b}}
H.rR.prototype={
$1:function(a){if(!!J.aL(a).$isel)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.kc.prototype={
D:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.rD.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.rE.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.rF.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.rG.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.rH.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.f_.prototype={
D:function(a){return"Closure '"+H.o0(this).trim()+"'"},
gi_:function(){return this},
$D:null}
H.p5.prototype={}
H.oB.prototype={
D:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fP.prototype={
S:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fP))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga8:function(a){var t,s
t=this.c
if(t==null)s=H.eB(this.a)
else s=typeof t!=="object"?J.dG(t):H.eB(t)
t=H.eB(this.b)
if(typeof s!=="number")return s.i3()
return(s^t)>>>0},
D:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.D(this.d)+"' of "+H.o_(t)}}
H.kS.prototype={
D:function(a){return this.a}}
H.oc.prototype={
D:function(a){return"RuntimeError: "+H.D(this.a)}}
H.dY.prototype={
D:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga8:function(a){return J.dG(this.a)},
S:function(a,b){if(b==null)return!1
return b instanceof H.dY&&J.ba(this.a,b.a)}}
H.t.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
ge4:function(a){return new H.mZ(this,[H.O(this,0)])},
gc_:function(a){return H.dz(this.ge4(this),new H.mN(this),H.O(this,0),H.O(this,1))},
a1:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dg(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dg(s,b)}else return this.hn(b)},
hn:function(a){var t=this.d
if(t==null)return!1
return this.br(this.bD(t,this.bq(a)),a)>=0},
bL:function(a,b){b.ac(0,new H.mM(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bj(t,b)
return s==null?null:s.gaX()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bj(r,b)
return s==null?null:s.gaX()}else return this.ho(b)},
ho:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bD(t,this.bq(a))
r=this.br(s,a)
if(r<0)return
return s[r].gaX()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.cf()
this.b=t}this.d6(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cf()
this.c=s}this.d6(s,b,c)}else{r=this.d
if(r==null){r=this.cf()
this.d=r}q=this.bq(b)
p=this.bD(r,q)
if(p==null)this.cm(r,q,[this.cg(b,c)])
else{o=this.br(p,b)
if(o>=0)p[o].saX(c)
else p.push(this.cg(b,c))}}},
ak:function(a,b){if(typeof b==="string")return this.dC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dC(this.c,b)
else return this.hp(b)},
hp:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bD(t,this.bq(a))
r=this.br(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.dL(q)
return q.gaX()},
bc:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
ac:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.l(new P.bN(this))
t=t.c}},
d6:function(a,b,c){var t=this.bj(a,b)
if(t==null)this.cm(a,b,this.cg(b,c))
else t.saX(c)},
dC:function(a,b){var t
if(a==null)return
t=this.bj(a,b)
if(t==null)return
this.dL(t)
this.dj(a,b)
return t.gaX()},
cg:function(a,b){var t,s
t=new H.mY(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dL:function(a){var t,s
t=a.gfA()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bq:function(a){return J.dG(a)&0x3ffffff},
br:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ba(a[s].ge2(),b))return s
return-1},
D:function(a){return P.wC(this)},
bj:function(a,b){return a[b]},
bD:function(a,b){return a[b]},
cm:function(a,b,c){a[b]=c},
dj:function(a,b){delete a[b]},
dg:function(a,b){return this.bj(a,b)!=null},
cf:function(){var t=Object.create(null)
this.cm(t,"<non-identifier-key>",t)
this.dj(t,"<non-identifier-key>")
return t},
$isAb:1,
$isbt:1,
$asbt:null}
H.mN.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.mM.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eU(function(a,b){return{func:1,args:[a,b]}},this.a,"t")}}
H.mY.prototype={
ge2:function(){return this.a},
gaX:function(){return this.b},
gfA:function(){return this.d},
saX:function(a){return this.b=a}}
H.mZ.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
ga0:function(a){var t,s
t=this.a
s=new H.n_(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
aj:function(a,b){return this.a.a1(0,b)},
ac:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.l(new P.bN(t))
s=s.c}}}
H.n_.prototype={
gR:function(){return this.d},
J:function(){var t=this.a
if(this.b!==t.r)throw H.l(new P.bN(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.rz.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.rA.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.B]}}}
H.rB.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.B]}}}
H.hq.prototype={
D:function(a){return"RegExp/"+this.a+"/"},
gdv:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.u_(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdu:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.u_(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
h9:function(a){var t=this.b.exec(a)
if(t==null)return
return new H.i_(this,t)},
cq:function(a,b,c){if(c>b.length)throw H.l(P.bG(c,0,b.length,null,null))
return new H.pX(this,b,c)},
aV:function(a,b){return this.cq(a,b,0)},
fc:function(a,b){var t,s
t=this.gdv()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.i_(this,s)},
cb:function(a,b){var t,s
t=this.gdu()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.w(s,-1)
if(s.pop()!=null)return
return new H.i_(this,s)},
e8:function(a,b,c){if(c<0||c>b.length)throw H.l(P.bG(c,0,b.length,null,null))
return this.cb(b,c)},
$isFU:1,
gft:function(){return this.b}}
H.i_.prototype={
gd1:function(a){return this.b.index},
gdU:function(a){var t=this.b
return t.index+t[0].length},
b9:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.w(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
$isdA:1}
H.pX.prototype={
ga0:function(a){return new H.k1(this.a,this.b,this.c,null)},
$ashp:function(){return[P.dA]},
$aso:function(){return[P.dA]}}
H.k1.prototype={
gR:function(){return this.d},
J:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.fc(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.jS.prototype={
gdU:function(a){return this.a+this.c.length},
n:function(a,b){return this.b9(b)},
b9:function(a){if(a!==0)throw H.l(P.jK(a,null,null))
return this.c},
$isdA:1,
gd1:function(a){return this.a}}
H.r_.prototype={
ga0:function(a){return new H.r0(this.a,this.b,this.c,null)},
$aso:function(){return[P.dA]}}
H.r0.prototype={
J:function(){var t,s,r,q,p,o,n
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
this.d=new H.jS(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gR:function(){return this.d}}
H.fk.prototype={
gad:function(a){return C.a2},
fR:function(a,b,c){return H.cP(a,b,c)},
fQ:function(a){return this.fR(a,0,null)},
fP:function(a,b,c){var t
H.xu(a,b,c)
t=new DataView(a,b)
return t},
fO:function(a,b){return this.fP(a,b,null)},
$isfk:1,
$isbh:1,
ge6:function(a){return a.byteLength}}
H.eA.prototype={
fp:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.e4(b,d,"Invalid list position"))
else throw H.l(P.bG(b,0,c,d,null))},
da:function(a,b,c,d){if(b>>>0!==b||b>c)this.fp(a,b,c,d)},
$iseA:1,
gbO:function(a){return a.buffer},
ge6:function(a){return a.byteLength}}
H.nq.prototype={
gad:function(a){return C.a3}}
H.jx.prototype={
gm:function(a){return a.length},
dH:function(a,b,c,d,e){var t,s,r
t=a.length
this.da(a,b,t,"start")
this.da(a,c,t,"end")
if(typeof b!=="number")return b.aC()
if(typeof c!=="number")return H.a9(c)
if(b>c)throw H.l(P.bG(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a6()
if(e<0)throw H.l(P.dH(e))
r=d.length
if(r-e<s)throw H.l(new P.dT("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaT:1,
$asaT:function(){},
$isaP:1,
$asaP:function(){}}
H.hC.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
a[b]=c},
ab:function(a,b,c,d,e){if(!!J.aL(d).$ishC){this.dH(a,b,c,d,e)
return}this.d3(a,b,c,d,e)},
az:function(a,b,c,d){return this.ab(a,b,c,d,0)}}
H.hE.prototype={
$asaT:function(){},
$asaP:function(){},
$asq:function(){return[P.U]},
$asv:function(){return[P.U]},
$aso:function(){return[P.U]},
$isq:1,
$isv:1,
$iso:1}
H.hG.prototype={
$asaT:function(){},
$asaP:function(){},
$asq:function(){return[P.U]},
$asv:function(){return[P.U]},
$aso:function(){return[P.U]}}
H.hD.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
a[b]=c},
ab:function(a,b,c,d,e){if(!!J.aL(d).$ishD){this.dH(a,b,c,d,e)
return}this.d3(a,b,c,d,e)},
az:function(a,b,c,d){return this.ab(a,b,c,d,0)},
$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
H.hF.prototype={
$asaT:function(){},
$asaP:function(){},
$asq:function(){return[P.E]},
$asv:function(){return[P.E]},
$aso:function(){return[P.E]},
$isq:1,
$isv:1,
$iso:1}
H.hH.prototype={
$asaT:function(){},
$asaP:function(){},
$asq:function(){return[P.E]},
$asv:function(){return[P.E]},
$aso:function(){return[P.E]}}
H.nr.prototype={
gad:function(a){return C.a4},
$isq:1,
$asq:function(){return[P.U]},
$isv:1,
$asv:function(){return[P.U]},
$iso:1,
$aso:function(){return[P.U]}}
H.ns.prototype={
gad:function(a){return C.a5},
$isq:1,
$asq:function(){return[P.U]},
$isv:1,
$asv:function(){return[P.U]},
$iso:1,
$aso:function(){return[P.U]}}
H.nt.prototype={
gad:function(a){return C.a6},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
H.nu.prototype={
gad:function(a){return C.a7},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
H.nv.prototype={
gad:function(a){return C.a8},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
H.nw.prototype={
gad:function(a){return C.ac},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
H.nx.prototype={
gad:function(a){return C.ad},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
H.jy.prototype={
gad:function(a){return C.ae},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
H.fl.prototype={
gad:function(a){return C.af},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
return a[b]},
c2:function(a,b,c){return new Uint8Array(a.subarray(b,H.GY(b,c,a.length)))},
$isfl:1,
$isdb:1,
$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
P.pZ.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.pY.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.q_.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.q0.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.re.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rf.prototype={
$2:function(a,b){this.a.$2(1,new H.h6(a,b))},
$S:function(){return{func:1,args:[,P.dS]}}}
P.rp.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.E,,]}}}
P.cF.prototype={}
P.rr.prototype={
$0:function(){var t,s,r
try{this.b.aE(this.a.$0())}catch(r){t=H.cw(r)
s=H.cv(r)
P.xv(this.b,t,s)}},
$S:function(){return{func:1}}}
P.m3.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.ao(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.ao(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.m2.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.w(r,t)
r[t]=a
if(s===0)this.d.df(r)}else if(t.b===0&&!this.b)this.d.ao(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.f0.prototype={}
P.k3.prototype={
ct:function(a,b){if(a==null)a=new P.fm()
if(this.a.a!==0)throw H.l(new P.dT("Future already completed"))
$.aD.toString
this.ao(a,b)},
bl:function(a){return this.ct(a,null)},
$isf0:1,
ghe:function(){return this.a}}
P.e_.prototype={
aA:function(a,b){var t=this.a
if(t.a!==0)throw H.l(new P.dT("Future already completed"))
t.d8(b)},
fU:function(a){return this.aA(a,null)},
ao:function(a,b){this.a.d9(a,b)}}
P.ke.prototype={
aA:function(a,b){var t=this.a
if(t.a!==0)throw H.l(new P.dT("Future already completed"))
t.aE(b)},
ao:function(a,b){this.a.ao(a,b)}}
P.k7.prototype={
gfK:function(){return this.b.b},
gdZ:function(){return(this.c&1)!==0},
ghl:function(){return(this.c&2)!==0},
gdY:function(){return this.c===8},
hj:function(a){return this.b.b.cQ(this.d,a)},
ht:function(a){if(this.c!==6)return!0
return this.b.b.cQ(this.d,J.fH(a))},
hf:function(a){var t,s,r
t=this.e
s=J.bJ(a)
r=this.b.b
if(H.fF(t,{func:1,args:[,,]}))return r.hQ(t,s.gas(a),a.gaI())
else return r.cQ(t,s.gas(a))},
hk:function(){return this.b.b.ef(this.d)},
gci:function(){return this.a}}
P.bj.prototype={
gfq:function(){return this.a===2},
gce:function(){return this.a>=4},
bY:function(a,b){var t=$.aD
if(t!==C.e){t.toString
if(b!=null)b=P.xy(b,t)}return this.cn(a,b)},
aR:function(a){return this.bY(a,null)},
cn:function(a,b){var t,s
t=new P.bj(0,$.aD,null,[null])
s=b==null?1:3
this.c3(new P.k7(null,t,s,a,b,[H.O(this,0),null]))
return t},
c0:function(a){var t,s
t=$.aD
s=new P.bj(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.O(this,0)
this.c3(new P.k7(null,s,8,a,null,[t,t]))
return s},
c3:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gce()){s.c3(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fD(null,null,t,new P.qk(this,a))}},
dB:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gci()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gce()){p.dB(a)
return}this.a=p.a
this.c=p.c}t.a=this.bI(a)
s=this.b
s.toString
P.fD(null,null,s,new P.qs(t,this))}},
bH:function(){var t=this.c
this.c=null
return this.bI(t)},
bI:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gci()
t.a=s}return s},
aE:function(a){var t,s
t=this.$ti
if(H.e0(a,"$iscF",t,"$ascF"))if(H.e0(a,"$isbj",t,null))P.qn(a,this)
else P.xk(a,this)
else{s=this.bH()
this.a=4
this.c=a
P.fy(this,s)}},
df:function(a){var t=this.bH()
this.a=4
this.c=a
P.fy(this,t)},
ao:function(a,b){var t=this.bH()
this.a=8
this.c=new P.eW(a,b)
P.fy(this,t)},
f5:function(a){return this.ao(a,null)},
d8:function(a){var t
if(H.e0(a,"$iscF",this.$ti,"$ascF")){this.f2(a)
return}this.a=1
t=this.b
t.toString
P.fD(null,null,t,new P.qm(this,a))},
f2:function(a){var t
if(H.e0(a,"$isbj",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fD(null,null,t,new P.qr(this,a))}else P.qn(a,this)
return}P.xk(a,this)},
d9:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fD(null,null,t,new P.ql(this,a,b))},
$iscF:1,
gbJ:function(){return this.a},
gfD:function(){return this.c}}
P.qk.prototype={
$0:function(){P.fy(this.a,this.b)},
$S:function(){return{func:1}}}
P.qs.prototype={
$0:function(){P.fy(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.qo.prototype={
$1:function(a){var t=this.a
t.a=0
t.aE(a)},
$S:function(){return{func:1,args:[,]}}}
P.qp.prototype={
$2:function(a,b){this.a.ao(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.qq.prototype={
$0:function(){this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.qm.prototype={
$0:function(){this.a.df(this.b)},
$S:function(){return{func:1}}}
P.qr.prototype={
$0:function(){P.qn(this.b,this.a)},
$S:function(){return{func:1}}}
P.ql.prototype={
$0:function(){this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.qv.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hk()}catch(q){s=H.cw(q)
r=H.cv(q)
if(this.c){p=J.fH(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eW(s,r)
o.a=!0
return}if(!!J.aL(t).$iscF){if(t instanceof P.bj&&t.gbJ()>=4){if(t.gbJ()===8){p=this.b
p.b=t.gfD()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.aR(new P.qw(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qw.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.qu.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hj(this.c)}catch(r){t=H.cw(r)
s=H.cv(r)
q=this.a
q.b=new P.eW(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.qt.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.ht(t)===!0&&q.e!=null){p=this.b
p.b=q.hf(t)
p.a=!1}}catch(o){s=H.cw(o)
r=H.cv(o)
q=this.a
p=J.fH(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eW(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.k2.prototype={}
P.dn.prototype={
aw:function(a,b){return new P.qJ(b,this,[H.aU(this,"dn",0),null])},
aj:function(a,b){var t,s
t={}
s=new P.bj(0,$.aD,null,[P.dc])
t.a=null
t.a=this.aN(new P.oI(t,this,b,s),!0,new P.oJ(s),s.gba())
return s},
ac:function(a,b){var t,s
t={}
s=new P.bj(0,$.aD,null,[null])
t.a=null
t.a=this.aN(new P.oO(t,this,b,s),!0,new P.oP(s),s.gba())
return s},
gm:function(a){var t,s
t={}
s=new P.bj(0,$.aD,null,[P.E])
t.a=0
this.aN(new P.oS(t),!0,new P.oT(t,s),s.gba())
return s},
gX:function(a){var t,s
t={}
s=new P.bj(0,$.aD,null,[P.dc])
t.a=null
t.a=this.aN(new P.oQ(t,s),!0,new P.oR(s),s.gba())
return s},
ap:function(a){var t,s,r
t=H.aU(this,"dn",0)
s=H.a([],[t])
r=new P.bj(0,$.aD,null,[[P.q,t]])
this.aN(new P.oU(this,s),!0,new P.oV(s,r),r.gba())
return r},
gag:function(a){var t,s
t={}
s=new P.bj(0,$.aD,null,[H.aU(this,"dn",0)])
t.a=null
t.a=this.aN(new P.oK(t,this,s),!0,new P.oL(s),s.gba())
return s}}
P.oI.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.xC(new P.oG(this.c,a),new P.oH(t,s),P.xt(t.a,s))},
$S:function(){return H.eU(function(a){return{func:1,args:[a]}},this.b,"dn")}}
P.oG.prototype={
$0:function(){return J.ba(this.b,this.a)},
$S:function(){return{func:1}}}
P.oH.prototype={
$1:function(a){if(a===!0)P.uY(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.dc]}}}
P.oJ.prototype={
$0:function(){this.a.aE(!1)},
$S:function(){return{func:1}}}
P.oO.prototype={
$1:function(a){P.xC(new P.oM(this.c,a),new P.oN(),P.xt(this.a.a,this.d))},
$S:function(){return H.eU(function(a){return{func:1,args:[a]}},this.b,"dn")}}
P.oM.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.oN.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.oP.prototype={
$0:function(){this.a.aE(null)},
$S:function(){return{func:1}}}
P.oS.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.oT.prototype={
$0:function(){this.b.aE(this.a.a)},
$S:function(){return{func:1}}}
P.oQ.prototype={
$1:function(a){P.uY(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.oR.prototype={
$0:function(){this.a.aE(!0)},
$S:function(){return{func:1}}}
P.oU.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eU(function(a){return{func:1,args:[a]}},this.a,"dn")}}
P.oV.prototype={
$0:function(){this.b.aE(this.a)},
$S:function(){return{func:1}}}
P.oK.prototype={
$1:function(a){P.uY(this.a.a,this.c,a)},
$S:function(){return H.eU(function(a){return{func:1,args:[a]}},this.b,"dn")}}
P.oL.prototype={
$0:function(){var t,s,r,q
try{r=H.jp()
throw H.l(r)}catch(q){t=H.cw(q)
s=H.cv(q)
P.xv(this.a,t,s)}},
$S:function(){return{func:1}}}
P.oF.prototype={}
P.dp.prototype={
cH:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.dP()
if((t&4)===0&&(this.e&32)===0)this.dn(this.gdz())},
eb:function(a){return this.cH(a,null)},
ee:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gX(t)}else t=!1
if(t)this.r.c1(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dn(this.gdA())}}}},
bP:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.c5()
t=this.f
return t==null?$.$get$hg():t},
c5:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.dP()
if((this.e&32)===0)this.r=null
this.f=this.dw()},
bC:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dE(b)
else this.c4(new P.q8(b,null,[H.aU(this,"dp",0)]))},
bB:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dG(a,b)
else this.c4(new P.qa(a,b,null))},
f0:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dF()
else this.c4(C.J)},
bF:function(){},
bG:function(){},
dw:function(){return},
c4:function(a){var t,s
t=this.r
if(t==null){t=new P.qY(null,null,0,[H.aU(this,"dp",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.c1(this)}},
dE:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.cR(this.a,a)
this.e=(this.e&4294967263)>>>0
this.c6((t&4)!==0)},
dG:function(a,b){var t,s
t=this.e
s=new P.q3(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.c5()
t=this.f
if(!!J.aL(t).$iscF&&t!==$.$get$hg())t.c0(s)
else s.$0()}else{s.$0()
this.c6((t&4)!==0)}},
dF:function(){var t,s
t=new P.q2(this)
this.c5()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.aL(s).$iscF&&s!==$.$get$hg())s.c0(t)
else t.$0()},
dn:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.c6((t&4)!==0)},
c6:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gX(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gX(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bF()
else this.bG()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.c1(this)},
eU:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.xy(b,t)
this.c=c},
gbJ:function(){return this.e}}
P.q3.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fF(s,{func:1,args:[P.ad,P.dS]})
q=t.d
p=this.b
o=t.b
if(r)q.hR(o,p,this.c)
else q.cR(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.q2.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.eg(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.k5.prototype={
gbs:function(a){return this.a},
sbs:function(a,b){return this.a=b}}
P.q8.prototype={
cI:function(a){a.dE(this.b)}}
P.qa.prototype={
cI:function(a){a.dG(this.b,this.c)},
$ask5:function(){},
gas:function(a){return this.b},
gaI:function(){return this.c}}
P.q9.prototype={
cI:function(a){a.dF()},
gbs:function(a){return},
sbs:function(a,b){throw H.l(new P.dT("No events after a done."))}}
P.qL.prototype={
c1:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.xV(new P.qM(this,a))
this.a=1},
dP:function(){if(this.a===1)this.a=3},
gbJ:function(){return this.a}}
P.qM.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbs(r)
t.b=q
if(q==null)t.c=null
r.cI(this.b)},
$S:function(){return{func:1}}}
P.qY.prototype={
gX:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbs(0,b)
this.c=b}}}
P.qZ.prototype={}
P.rh.prototype={
$0:function(){return this.a.ao(this.b,this.c)},
$S:function(){return{func:1}}}
P.rg.prototype={
$2:function(a,b){P.GX(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dS]}}}
P.ri.prototype={
$0:function(){return this.a.aE(this.b)},
$S:function(){return{func:1}}}
P.hW.prototype={
aN:function(a,b,c,d){return this.f8(a,d,c,!0===b)},
e7:function(a,b,c){return this.aN(a,null,b,c)},
f8:function(a,b,c,d){return P.GC(this,a,b,c,d,H.aU(this,"hW",0),H.aU(this,"hW",1))},
dq:function(a,b){b.bC(0,a)},
fn:function(a,b,c){c.bB(a,b)},
$asdn:function(a,b){return[b]}}
P.hX.prototype={
bC:function(a,b){if((this.e&2)!==0)return
this.eJ(0,b)},
bB:function(a,b){if((this.e&2)!==0)return
this.eK(a,b)},
bF:function(){var t=this.y
if(t==null)return
t.eb(0)},
bG:function(){var t=this.y
if(t==null)return
t.ee(0)},
dw:function(){var t=this.y
if(t!=null){this.y=null
return t.bP(0)}return},
fi:function(a){this.x.dq(a,this)},
fm:function(a,b){this.x.fn(a,b,this)},
fk:function(){this.f0()},
eX:function(a,b,c,d,e,f,g){this.y=this.x.a.e7(this.gfh(),this.gfj(),this.gfl())},
$asdp:function(a,b){return[b]}}
P.qJ.prototype={
dq:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.cw(q)
r=H.cv(q)
P.GW(b,s,r)
return}b.bC(0,t)}}
P.eW.prototype={
D:function(a){return H.D(this.a)},
$isel:1,
gas:function(a){return this.a},
gaI:function(){return this.b}}
P.rd.prototype={}
P.ro.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fm()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.l(t)
r=H.l(t)
r.stack=J.cL(s)
throw r},
$S:function(){return{func:1}}}
P.qP.prototype={
eg:function(a){var t,s,r,q
try{if(C.e===$.aD){r=a.$0()
return r}r=P.xz(null,null,this,a)
return r}catch(q){t=H.cw(q)
s=H.cv(q)
r=P.kh(null,null,this,t,s)
return r}},
cR:function(a,b){var t,s,r,q
try{if(C.e===$.aD){r=a.$1(b)
return r}r=P.xB(null,null,this,a,b)
return r}catch(q){t=H.cw(q)
s=H.cv(q)
r=P.kh(null,null,this,t,s)
return r}},
hR:function(a,b,c){var t,s,r,q
try{if(C.e===$.aD){r=a.$2(b,c)
return r}r=P.xA(null,null,this,a,b,c)
return r}catch(q){t=H.cw(q)
s=H.cv(q)
r=P.kh(null,null,this,t,s)
return r}},
cs:function(a,b){if(b)return new P.qQ(this,a)
else return new P.qR(this,a)},
fS:function(a,b){return new P.qS(this,a)},
n:function(a,b){return},
ef:function(a){if($.aD===C.e)return a.$0()
return P.xz(null,null,this,a)},
cQ:function(a,b){if($.aD===C.e)return a.$1(b)
return P.xB(null,null,this,a,b)},
hQ:function(a,b,c){if($.aD===C.e)return a.$2(b,c)
return P.xA(null,null,this,a,b,c)}}
P.qQ.prototype={
$0:function(){return this.a.eg(this.b)},
$S:function(){return{func:1}}}
P.qR.prototype={
$0:function(){return this.a.ef(this.b)},
$S:function(){return{func:1}}}
P.qS.prototype={
$1:function(a){return this.a.cR(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qy.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
gc_:function(a){var t=H.O(this,0)
return H.dz(new P.qz(this,[t]),new P.qB(this),t,H.O(this,1))},
a1:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.f7(b)},
f7:function(a){var t=this.d
if(t==null)return!1
return this.aM(t[this.aL(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.ff(0,b)},
ff:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aL(b)]
r=this.aM(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.uW()
this.b=t}this.dd(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.uW()
this.c=s}this.dd(s,b,c)}else this.fE(b,c)},
fE:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.uW()
this.d=t}s=this.aL(a)
r=t[s]
if(r==null){P.uX(t,s,[a,b]);++this.a
this.e=null}else{q=this.aM(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
ak:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bi(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bi(this.c,b)
else return this.cl(0,b)},
cl:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aL(b)]
r=this.aM(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
ac:function(a,b){var t,s,r,q
t=this.c8()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.l(new P.bN(this))}},
c8:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
dd:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.uX(a,b,c)},
bi:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.GE(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aL:function(a){return J.dG(a)&0x3ffffff},
aM:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.ba(a[s],b))return s
return-1},
$isbt:1,
$asbt:null}
P.qB.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qz.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
ga0:function(a){var t=this.a
return new P.qA(t,t.c8(),0,null,this.$ti)},
aj:function(a,b){return this.a.a1(0,b)},
ac:function(a,b){var t,s,r,q
t=this.a
s=t.c8()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.l(new P.bN(t))}}}
P.qA.prototype={
gR:function(){return this.d},
J:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.l(new P.bN(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.ka.prototype={
bq:function(a){return H.HG(a)&0x3ffffff},
br:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].ge2()
if(r==null?b==null:r===b)return s}return-1}}
P.k9.prototype={
ga0:function(a){var t=new P.dD(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gX:function(a){return this.a===0},
aj:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.f6(b)},
f6:function(a){var t=this.d
if(t==null)return!1
return this.aM(t[this.aL(a)],a)>=0},
cD:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.aj(0,a)?a:null
else return this.fs(a)},
fs:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aL(a)]
r=this.aM(s,a)
if(r<0)return
return J.i6(s,r).gdk()},
ac:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.l(new P.bN(this))
t=t.b}},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.dc(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.dc(r,b)}else return this.aK(0,b)},
aK:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.GF()
this.d=t}s=this.aL(b)
r=t[s]
if(r==null)t[s]=[this.c7(b)]
else{if(this.aM(r,b)>=0)return!1
r.push(this.c7(b))}return!0},
ak:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bi(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bi(this.c,b)
else return this.cl(0,b)},
cl:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aL(b)]
r=this.aM(s,b)
if(r<0)return!1
this.de(s.splice(r,1)[0])
return!0},
bc:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
dc:function(a,b){if(a[b]!=null)return!1
a[b]=this.c7(b)
return!0},
bi:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.de(t)
delete a[b]
return!0},
c7:function(a){var t,s
t=new P.qF(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
de:function(a){var t,s
t=a.gf4()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aL:function(a){return J.dG(a)&0x3ffffff},
aM:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ba(a[s].gdk(),b))return s
return-1},
$iseG:1,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
P.qF.prototype={
gdk:function(){return this.a},
gf4:function(){return this.c}}
P.dD.prototype={
gR:function(){return this.d},
J:function(){var t=this.a
if(this.b!==t.r)throw H.l(new P.bN(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.qC.prototype={}
P.fg.prototype={
aw:function(a,b){return H.dz(this,b,H.aU(this,"fg",0),null)},
aj:function(a,b){var t
for(t=this.ga0(this);t.J();)if(J.ba(t.gR(),b))return!0
return!1},
ac:function(a,b){var t
for(t=this.ga0(this);t.J();)b.$1(t.gR())},
a5:function(a,b){return P.dk(this,!0,H.aU(this,"fg",0))},
ap:function(a){return this.a5(a,!0)},
gm:function(a){var t,s
t=this.ga0(this)
for(s=0;t.J();)++s
return s},
gX:function(a){return!this.ga0(this).J()},
D:function(a){return P.tW(this,"(",")")},
$iso:1,
$aso:null}
P.hp.prototype={}
P.jt.prototype={}
P.hI.prototype={$asq:null,$asv:null,$aso:null,$isq:1,$isv:1,$iso:1}
P.b6.prototype={
ga0:function(a){return new H.ey(a,this.gm(a),0,null,[H.aU(a,"b6",0)])},
T:function(a,b){return this.n(a,b)},
ac:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.l(new P.bN(a))}},
gX:function(a){return this.gm(a)===0},
aj:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.ba(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.l(new P.bN(a))}return!1},
aw:function(a,b){return new H.fi(a,b,[H.aU(a,"b6",0),null])},
cZ:function(a,b){return H.wW(a,b,null,H.aU(a,"b6",0))},
a5:function(a,b){var t,s,r
t=H.a([],[H.aU(a,"b6",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
ap:function(a){return this.a5(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bS:function(a,b,c,d){var t
P.dm(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
ab:function(a,b,c,d,e){var t,s,r,q,p,o
P.dm(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.V()
if(typeof b!=="number")return H.a9(b)
t=c-b
if(t===0)return
if(J.ef(e,0))H.bb(P.bG(e,0,null,"skipCount",null))
if(H.e0(d,"$isq",[H.aU(a,"b6",0)],"$asq")){s=e
r=d}else{r=J.yi(d,e).a5(0,!1)
s=0}q=J.kk(s)
p=J.bd(r)
if(J.cx(q.U(s,t),p.gm(r)))throw H.l(H.wv())
if(q.a6(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.U(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.U(s,o)))},
az:function(a,b,c,d){return this.ab(a,b,c,d,0)},
aB:function(a,b,c,d){var t,s,r,q,p
P.dm(b,c,this.gm(a),null,null,null)
d=C.c.ap(d)
if(typeof c!=="number")return c.V()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.az(a,b,r,d)
if(q!==0){this.ab(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.ab(a,r,p,a,c)
this.az(a,b,r,d)}},
aZ:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.ba(this.n(a,t),b))return t
return-1},
be:function(a,b){return this.aZ(a,b,0)},
D:function(a){return P.jo(a,"[","]")},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
P.r5.prototype={
i:function(a,b,c){throw H.l(new P.Z("Cannot modify unmodifiable map"))},
$isbt:1,
$asbt:null}
P.ne.prototype={
n:function(a,b){return J.i6(this.a,b)},
i:function(a,b,c){J.kp(this.a,b,c)},
ac:function(a,b){J.y8(this.a,b)},
gX:function(a){return J.rT(this.a)},
gm:function(a){return J.cn(this.a)},
D:function(a){return J.cL(this.a)},
$isbt:1,
$asbt:null}
P.hP.prototype={$asbt:null,$isbt:1}
P.nf.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.O+=", "
t.a=!1
t=this.b
s=t.O+=H.D(a)
t.O=s+": "
t.O+=H.D(b)},
$S:function(){return{func:1,args:[,,]}}}
P.n1.prototype={
ga0:function(a){return new P.qG(this,this.c,this.d,this.b,null,this.$ti)},
ac:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.w(r,s)
b.$1(r[s])
if(t!==this.d)H.bb(new P.bN(this))}},
gX:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
T:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.a9(b)
if(0>b||b>=t)H.bb(P.by(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.w(s,q)
return s[q]},
a5:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.fJ(t)
return t},
ap:function(a){return this.a5(a,!0)},
h:function(a,b){this.aK(0,b)},
bc:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.w(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
D:function(a){return P.jo(this,"{","}")},
ed:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.l(H.jp());++this.d
s=this.a
r=s.length
if(t>=r)return H.w(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aK:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.w(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dm();++this.d},
dm:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.b.ab(s,0,q,t,r)
C.b.ab(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
fJ:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.ab(a,0,q,r,t)
return q}else{p=r.length-t
C.b.ab(a,0,p,r,t)
C.b.ab(a,p,p+this.c,this.a,0)
return this.c+p}},
eO:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asv:null,
$aso:null}
P.qG.prototype={
gR:function(){return this.e},
J:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.bb(new P.bN(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.w(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.oo.prototype={
gX:function(a){return this.a===0},
bL:function(a,b){var t
for(t=J.df(b);t.J();)this.h(0,t.gR())},
a5:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dD(this,this.r,null,null,[null]),s.c=this.e,r=0;s.J();r=p){q=s.d
p=r+1
if(r>=t.length)return H.w(t,r)
t[r]=q}return t},
ap:function(a){return this.a5(a,!0)},
aw:function(a,b){return new H.fZ(this,b,[H.O(this,0),null])},
D:function(a){return P.jo(this,"{","}")},
ac:function(a,b){var t
for(t=new P.dD(this,this.r,null,null,[null]),t.c=this.e;t.J();)b.$1(t.d)},
b6:function(a,b){var t,s
t=new P.dD(this,this.r,null,null,[null])
t.c=this.e
if(!t.J())return""
if(b===""){s=""
do s+=H.D(t.d)
while(t.J())}else{s=H.D(t.d)
for(;t.J();)s=s+b+H.D(t.d)}return s.charCodeAt(0)==0?s:s},
$iseG:1,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
P.on.prototype={}
P.kG.prototype={
hx:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bd(b)
a1=P.dm(a0,a1,t.gm(b),null,null,null)
s=$.$get$xj()
if(typeof a1!=="number")return H.a9(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.Z(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.ry(C.c.a7(b,l))
h=H.ry(C.c.a7(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.w(s,g)
f=s[g]
if(f>=0){g=C.c.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.O.length
if(e==null)e=0
if(typeof e!=="number")return e.U()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.cb("")
p.O+=C.c.M(b,q,r)
p.O+=H.hJ(k)
q=l
continue}}throw H.l(new P.bD("Invalid base64 data",b,r))}if(p!=null){t=p.O+=t.M(b,q,a1)
e=t.length
if(o>=0)P.vl(b,n,a1,o,m,e)
else{d=C.a.bz(e-1,4)+1
if(d===1)throw H.l(new P.bD("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.O=t;++d}}t=p.O
return C.c.aB(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.vl(b,n,a1,o,m,c)
else{d=C.d.bz(c,4)
if(d===1)throw H.l(new P.bD("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aB(b,a1,a1,d===2?"==":"=")}return b},
$asfU:function(){return[[P.q,P.E],P.B]}}
P.kH.prototype={
$asfV:function(){return[[P.q,P.E],P.B]}}
P.fU.prototype={}
P.fV.prototype={}
P.ln.prototype={
$asfU:function(){return[P.B,[P.q,P.E]]}}
P.pz.prototype={
gL:function(a){return"utf-8"}}
P.pA.prototype={
cu:function(a,b,c){var t,s,r,q
t=J.cn(a)
P.dm(b,c,t,null,null,null)
s=new P.cb("")
r=new P.r7(!1,s,!0,0,0,0)
r.cu(a,b,t)
r.ha(0,a,t)
q=s.O
return q.charCodeAt(0)==0?q:q},
fX:function(a){return this.cu(a,0,null)},
$asfV:function(){return[[P.q,P.E],P.B]}}
P.r7.prototype={
ha:function(a,b,c){if(this.e>0)throw H.l(new P.bD("Unfinished UTF-8 octet sequence",b,c))},
cu:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.r9(c)
p=new P.r8(this,a,b,c)
$loop$0:for(o=J.bd(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aH()
if((l&192)!==128){k=new P.bD("Bad UTF-8 encoding 0x"+C.d.bf(l,16),a,m)
throw H.l(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.w(C.w,k)
if(t<=C.w[k]){k=new P.bD("Overlong encoding of 0x"+C.a.bf(t,16),a,m-r-1)
throw H.l(k)}if(t>1114111){k=new P.bD("Character outside valid Unicode range: 0x"+C.a.bf(t,16),a,m-r-1)
throw H.l(k)}if(!this.c||t!==65279)n.O+=H.hJ(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cx(j,0)){this.c=!1
if(typeof j!=="number")return H.a9(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dd(l)
if(g.a6(l,0)){g=new P.bD("Negative UTF-8 code unit: -0x"+J.yl(g.cV(l),16),a,h-1)
throw H.l(g)}else{if(typeof l!=="number")return l.aH()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bD("Bad UTF-8 encoding 0x"+C.d.bf(l,16),a,h-1)
throw H.l(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.r9.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bd(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aH()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.E,args:[,P.E]}}}
P.r8.prototype={
$2:function(a,b){this.a.b.O+=P.p_(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.E,P.E]}}}
P.dc.prototype={}
P.bv.prototype={}
P.dL.prototype={
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dL))return!1
return this.a===b.a&&this.b===b.b},
av:function(a,b){return C.a.av(this.a,b.gfI())},
ga8:function(a){var t=this.a
return(t^C.a.aU(t,30))&1073741823},
D:function(a){var t,s,r,q,p,o,n
t=P.zj(H.ut(this))
s=P.ig(H.jI(this))
r=P.ig(H.jH(this))
q=P.ig(H.Fy(this))
p=P.ig(H.FA(this))
o=P.ig(H.FB(this))
n=P.zk(H.Fz(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.vy(C.a.U(this.a,b.gi8()),this.b)},
ghu:function(){return this.a},
d4:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.l(P.dH(this.ghu()))},
$isbv:1,
$asbv:function(){return[P.dL]},
gfI:function(){return this.a}}
P.ld.prototype={
$1:function(a){if(a==null)return 0
return H.dl(a,null,null)},
$S:function(){return{func:1,ret:P.E,args:[P.B]}}}
P.le.prototype={
$1:function(a){var t,s,r,q
if(a==null)return 0
t=J.bd(a)
t.gm(a)
for(s=0,r=0;r<6;++r){s*=10
q=t.gm(a)
if(typeof q!=="number")return H.a9(q)
if(r<q)s+=t.Z(a,r)^48}return s},
$S:function(){return{func:1,ret:P.E,args:[P.B]}}}
P.U.prototype={$isbv:1,
$asbv:function(){return[P.ds]}}
P.d1.prototype={
U:function(a,b){return new P.d1(this.a+b.gbb())},
V:function(a,b){return new P.d1(C.a.V(this.a,b.gbb()))},
an:function(a,b){return new P.d1(C.a.b0(this.a*b))},
bh:function(a,b){return new P.d1(C.a.bh(this.a,b))},
a6:function(a,b){return C.a.a6(this.a,b.gbb())},
aC:function(a,b){return C.a.aC(this.a,b.gbb())},
at:function(a,b){return C.a.at(this.a,b.gbb())},
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.d1))return!1
return this.a===b.a},
ga8:function(a){return this.a&0x1FFFFFFF},
av:function(a,b){return C.a.av(this.a,b.gbb())},
D:function(a){var t,s,r,q,p
t=new P.ll()
s=this.a
if(s<0)return"-"+new P.d1(0-s).D(0)
r=t.$1(C.a.al(s,6e7)%60)
q=t.$1(C.a.al(s,1e6)%60)
p=new P.lk().$1(s%1e6)
return""+C.a.al(s,36e8)+":"+H.D(r)+":"+H.D(q)+"."+H.D(p)},
cV:function(a){return new P.d1(0-this.a)},
$isbv:1,
$asbv:function(){return[P.d1]},
gbb:function(){return this.a}}
P.lk.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.B,args:[P.E]}}}
P.ll.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.B,args:[P.E]}}}
P.el.prototype={
gaI:function(){return H.cv(this.$thrownJsError)}}
P.fm.prototype={
D:function(a){return"Throw of null."}}
P.d_.prototype={
gca:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc9:function(){return""},
D:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.D(t)
q=this.gca()+s+r
if(!this.a)return q
p=this.gc9()
o=P.vG(this.b)
return q+p+": "+H.D(o)},
gL:function(a){return this.c}}
P.eF.prototype={
gca:function(){return"RangeError"},
gc9:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.D(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.D(t)
else{if(typeof r!=="number")return r.aC()
if(r>t)s=": Not in range "+H.D(t)+".."+H.D(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.D(t)}}return s}}
P.mo.prototype={
gca:function(){return"RangeError"},
gc9:function(){if(J.ef(this.b,0))return": index must not be negative"
var t=this.f
if(J.ba(t,0))return": no indices are valid"
return": index should be less than "+H.D(t)},
gm:function(a){return this.f}}
P.Z.prototype={
D:function(a){return"Unsupported operation: "+this.a}}
P.eL.prototype={
D:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.D(t):"UnimplementedError"}}
P.dT.prototype={
D:function(a){return"Bad state: "+this.a}}
P.bN.prototype={
D:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.D(P.vG(t))+"."}}
P.nG.prototype={
D:function(a){return"Out of Memory"},
gaI:function(){return},
$isel:1}
P.jR.prototype={
D:function(a){return"Stack Overflow"},
gaI:function(){return},
$isel:1}
P.la.prototype={
D:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.D(t)+"' during its initialization"}}
P.qj.prototype={
D:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.D(t)}}
P.bD.prototype={
D:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.D(t):"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.D(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a6()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.M(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.a9(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a7(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.D(r-o+1)+")\n"):s+(" (at character "+H.D(r+1)+")\n")
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
g=""}f=C.c.M(q,i,j)
return s+h+f+g+"\n"+C.c.an(" ",r-i+h.length)+"^\n"}}
P.lu.prototype={
D:function(a){return"Expando:"+H.D(this.a)},
n:function(a,b){var t,s
t=this.bE
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.bb(P.e4(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.us(b,"expando$values")
return s==null?null:H.us(s,t)},
i:function(a,b,c){var t,s
t=this.bE
if(typeof t!=="string")t.set(b,c)
else{s=H.us(b,"expando$values")
if(s==null){s=new P.ad()
H.wM(b,"expando$values",s)}H.wM(s,t,c)}},
gL:function(a){return this.a}}
P.E.prototype={$isbv:1,
$asbv:function(){return[P.ds]}}
P.o.prototype={
aw:function(a,b){return H.dz(this,b,H.aU(this,"o",0),null)},
aj:function(a,b){var t
for(t=this.ga0(this);t.J();)if(J.ba(t.gR(),b))return!0
return!1},
ac:function(a,b){var t
for(t=this.ga0(this);t.J();)b.$1(t.gR())},
a5:function(a,b){return P.dk(this,!0,H.aU(this,"o",0))},
ap:function(a){return this.a5(a,!0)},
gm:function(a){var t,s
t=this.ga0(this)
for(s=0;t.J();)++s
return s},
gX:function(a){return!this.ga0(this).J()},
T:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.l(P.yo("index"))
if(b<0)H.bb(P.bG(b,0,null,"index",null))
for(t=this.ga0(this),s=0;t.J();){r=t.gR()
if(b===s)return r;++s}throw H.l(P.by(b,this,"index",null,s))},
D:function(a){return P.tW(this,"(",")")},
$aso:null}
P.jq.prototype={}
P.q.prototype={$asq:null,$isv:1,$asv:null,$iso:1,$aso:null}
P.bt.prototype={$asbt:null}
P.d6.prototype={
ga8:function(a){return P.ad.prototype.ga8.call(this,this)},
D:function(a){return"null"}}
P.ds.prototype={$isbv:1,
$asbv:function(){return[P.ds]}}
P.ad.prototype={constructor:P.ad,$isad:1,
S:function(a,b){return this===b},
ga8:function(a){return H.eB(this)},
D:function(a){return H.o_(this)},
gad:function(a){return new H.dY(H.km(this),null)},
toString:function(){return this.D(this)}}
P.dA.prototype={}
P.eG.prototype={}
P.dS.prototype={}
P.B.prototype={$isbv:1,
$asbv:function(){return[P.B]}}
P.cb.prototype={
gm:function(a){return this.O.length},
gX:function(a){return this.O.length===0},
D:function(a){var t=this.O
return t.charCodeAt(0)==0?t:t},
gO:function(){return this.O}}
P.eN.prototype={}
P.pw.prototype={
$2:function(a,b){var t,s,r,q
t=J.bd(b)
s=t.be(b,"=")
if(s===-1){if(!t.S(b,""))J.kp(a,P.r6(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.M(b,0,s)
q=C.c.W(b,s+1)
t=this.a
J.kp(a,P.r6(r,0,r.length,t,!0),P.r6(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.pt.prototype={
$2:function(a,b){throw H.l(new P.bD("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.B,P.E]}}}
P.pu.prototype={
$2:function(a,b){throw H.l(new P.bD("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.B],opt:[,]}}}
P.pv.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.dl(C.c.M(this.a,a,b),16,null)
s=J.dd(t)
if(s.a6(t,0)||s.aC(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.E,args:[P.E,P.E]}}}
P.kf.prototype={
gen:function(){return this.b},
gcA:function(a){var t=this.c
if(t==null)return""
if(C.c.af(t,"["))return C.c.M(t,1,t.length-1)
return t},
gcJ:function(a){var t=this.d
if(t==null)return P.xm(this.a)
return t},
gcK:function(a){var t=this.f
return t==null?"":t},
gdX:function(){var t=this.r
return t==null?"":t},
gcL:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.B
s=new P.hP(P.xc(t==null?"":t,C.n),[s,s])
this.Q=s
t=s}return t},
ge_:function(){return this.c!=null},
ge1:function(){return this.f!=null},
ge0:function(){return this.r!=null},
D:function(a){var t=this.y
if(t==null){t=this.ds()
this.y=t}return t},
ds:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.D(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.D(s)}else t=s
t+=H.D(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
S:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.aL(b)
if(!!t.$iseN){if(this.a===b.gcW())if(this.c!=null===b.ge_()){s=this.b
r=b.gen()
if(s==null?r==null:s===r){s=this.gcA(this)
r=t.gcA(b)
if(s==null?r==null:s===r)if(J.ba(this.gcJ(this),t.gcJ(b)))if(J.ba(this.e,t.gea(b))){s=this.f
r=s==null
if(!r===b.ge1()){if(r)s=""
if(s===t.gcK(b)){t=this.r
s=t==null
if(!s===b.ge0()){if(s)t=""
t=t===b.gdX()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga8:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.ds()
this.y=t}t=C.c.ga8(t)
this.z=t}return t},
$iseN:1,
gcW:function(){return this.a},
gea:function(a){return this.e}}
P.rs.prototype={
$1:function(a){throw H.l(new P.bD("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.ps.prototype={
gem:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
t=t[0]+1
r=J.bd(s)
q=r.aZ(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fB(s,o,p,C.k,!1)
if(n==null)n=r.M(s,o,p)
p=q}else n=null
m=P.fB(s,t,p,C.D,!1)
t=new P.q7(this,"data",null,null,null,m==null?r.M(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
D:function(a){var t,s
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
return t[0]===-1?"data:"+H.D(s):s}}
P.rl.prototype={
$1:function(a){return new Uint8Array(H.cA(96))},
$S:function(){return{func:1,args:[,]}}}
P.rk.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.w(t,a)
t=t[a]
J.y7(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.db,args:[,,]}}}
P.rm.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.dr(a),r=0;r<t;++r)s.i(a,C.c.a7(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.db,P.B,P.E]}}}
P.rn.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a7(b,0),s=C.c.a7(b,1),r=J.dr(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.db,P.B,P.E]}}}
P.qX.prototype={
ge_:function(){return this.c>0},
ge1:function(){var t=this.f
if(typeof t!=="number")return t.a6()
return t<this.r},
ge0:function(){return this.r<this.a.length},
gcW:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.af(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.af(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.af(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.af(this.a,"package")){this.x="package"
t="package"}else{t=C.c.M(this.a,0,t)
this.x=t}return t},
gen:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.M(this.a,s,t-1):""},
gcA:function(a){var t=this.c
return t>0?C.c.M(this.a,t,this.d):""},
gcJ:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.U()
s=this.e
if(typeof s!=="number")return H.a9(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.U()
return H.dl(C.c.M(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.af(this.a,"http"))return 80
if(t===5&&C.c.af(this.a,"https"))return 443
return 0},
gea:function(a){return C.c.M(this.a,this.e,this.f)},
gcK:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a6()
return t<s?C.c.M(this.a,t+1,s):""},
gdX:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.W(s,t+1):""},
gcL:function(){var t=this.f
if(typeof t!=="number")return t.a6()
if(t>=this.r)return C.a0
t=P.B
return new P.hP(P.xc(this.gcK(this),C.n),[t,t])},
ga8:function(a){var t=this.y
if(t==null){t=C.c.ga8(this.a)
this.y=t}return t},
S:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.aL(b)
if(!!t.$iseN)return this.a===t.D(b)
return!1},
D:function(a){return this.a},
$iseN:1}
P.q7.prototype={}
W.aC.prototype={}
W.eV.prototype={
D:function(a){return String(a)},
$iseV:1,
$isj:1,
gah:function(a){return a.href}}
W.kx.prototype={
D:function(a){return String(a)},
$isj:1,
gah:function(a){return a.href}}
W.eY.prototype={$iseY:1,$isdv:1,$isaQ:1,$isad:1}
W.cM.prototype={$isad:1}
W.kE.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.cM]},
$isv:1,
$asv:function(){return[W.cM]},
$iso:1,
$aso:function(){return[W.cM]},
$isaT:1,
$asaT:function(){return[W.cM]},
$isaP:1,
$asaP:function(){return[W.cM]}}
W.h0.prototype={
$asq:function(){return[W.cM]},
$asv:function(){return[W.cM]},
$aso:function(){return[W.cM]},
$isq:1,
$isv:1,
$iso:1}
W.h3.prototype={
$asq:function(){return[W.cM]},
$asv:function(){return[W.cM]},
$aso:function(){return[W.cM]},
$isq:1,
$isv:1,
$iso:1}
W.kI.prototype={
gah:function(a){return a.href}}
W.eZ.prototype={$iseZ:1}
W.kM.prototype={$isj:1}
W.fT.prototype={$isfT:1,
gL:function(a){return a.name}}
W.eh.prototype={$isj:1,
gm:function(a){return a.length}}
W.kX.prototype={$isj:1}
W.ib.prototype={
cw:function(a,b){return typeof console!="undefined"?console.error(b):null},
b9:function(a){return typeof console!="undefined"?console.group(a):null},
e3:function(a){return typeof console!="undefined"?console.info(a):null},
hW:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.fW.prototype={
gL:function(a){return a.name}}
W.l2.prototype={
gaJ:function(a){return a.style}}
W.l3.prototype={
gah:function(a){return a.href}}
W.fX.prototype={
gaJ:function(a){return a.style}}
W.fY.prototype={
gL:function(a){return a.name}}
W.l4.prototype={
gaJ:function(a){return a.style}}
W.bK.prototype={$isbK:1,$isad:1}
W.ej.prototype={
by:function(a,b){var t=this.fg(a,b)
return t!=null?t:""},
fg:function(a,b){if(W.vu(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.vE()+b)},
eD:function(a,b,c,d){var t=this.f1(a,b)
a.setProperty(t,c,d)
return},
f1:function(a,b){var t,s
t=$.$get$vv()
s=t[b]
if(typeof s==="string")return s
s=W.vu(b) in a?b:P.vE()+b
t[b]=s
return s},
K:function(a,b){return a.item(b)},
gbd:function(a){return a.content},
gbn:function(a){return a.display},
sbn:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iG.prototype={}
W.q5.prototype={
by:function(a,b){var t=this.b
return J.yd(t.gag(t),b)},
fF:function(a,b){var t
for(t=this.a,t=new H.ey(t,t.gm(t),0,null,[H.O(t,0)]);t.J();)t.d.style[a]=b},
sbn:function(a,b){this.fF("display",b)},
eV:function(a){var t=P.dk(this.a,!0,null)
this.b=new H.fi(t,new W.q6(),[H.O(t,0),null])}}
W.jB.prototype={}
W.q6.prototype={
$1:function(a){return J.rU(a)},
$S:function(){return{func:1,args:[,]}}}
W.id.prototype={
gbd:function(a){return this.by(a,"content")},
gbn:function(a){return this.by(a,"display")}}
W.l5.prototype={
gaJ:function(a){return a.style}}
W.l6.prototype={
gaJ:function(a){return a.style}}
W.lb.prototype={
gcz:function(a){return a.files}}
W.f1.prototype={$isf1:1,$isad:1}
W.ie.prototype={
bK:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
K:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.ek.prototype={$isek:1}
W.ih.prototype={$isj:1}
W.ii.prototype={
gL:function(a){return a.name}}
W.lg.prototype={
gL:function(a){var t=a.name
if(P.vF()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.vF()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
D:function(a){return String(a)}}
W.ij.prototype={
D:function(a){return"Rectangle ("+H.D(a.left)+", "+H.D(a.top)+") "+H.D(this.gb3(a))+" x "+H.D(this.gaY(a))},
S:function(a,b){var t
if(b==null)return!1
t=J.aL(b)
if(!t.$isbU)return!1
return a.left===t.gbU(b)&&a.top===t.gbZ(b)&&this.gb3(a)===t.gb3(b)&&this.gaY(a)===t.gaY(b)},
ga8:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb3(a)
q=this.gaY(a)
return W.xl(W.eT(W.eT(W.eT(W.eT(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaY:function(a){return a.height},
gbU:function(a){return a.left},
gbZ:function(a){return a.top},
gb3:function(a){return a.width},
$isbU:1,
$asbU:function(){}}
W.ik.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[P.B]},
$isv:1,
$asv:function(){return[P.B]},
$iso:1,
$aso:function(){return[P.B]},
$isaT:1,
$asaT:function(){return[P.B]},
$isaP:1,
$asaP:function(){return[P.B]}}
W.iH.prototype={
$asq:function(){return[P.B]},
$asv:function(){return[P.B]},
$aso:function(){return[P.B]},
$isq:1,
$isv:1,
$iso:1}
W.j0.prototype={
$asq:function(){return[P.B]},
$asv:function(){return[P.B]},
$aso:function(){return[P.B]},
$isq:1,
$isv:1,
$iso:1}
W.il.prototype={
K:function(a,b){return a.item(b)}}
W.im.prototype={
h:function(a,b){return a.add(b)},
aj:function(a,b){return a.contains(b)},
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.k6.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot modify list"))},
sm:function(a,b){throw H.l(new P.Z("Cannot modify list"))},
gaJ:function(a){return W.GB(this)},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
W.dv.prototype={
gdQ:function(a){return new W.qd(a)},
D:function(a){return a.localName},
cB:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
$isdv:1,
$isaQ:1,
$isad:1,
$isj:1,
gaJ:function(a){return a.style}}
W.lm.prototype={
gL:function(a){return a.name}}
W.h_.prototype={
gL:function(a){return a.name}}
W.ls.prototype={
gas:function(a){return a.error}}
W.T.prototype={$isT:1,$isad:1}
W.aV.prototype={
fM:function(a,b,c,d){if(c!=null)this.f_(a,b,c,!1)},
hL:function(a,b,c,d){if(c!=null)this.fC(a,b,c,!1)},
f_:function(a,b,c,d){return a.addEventListener(b,H.dq(c,1),!1)},
fC:function(a,b,c,d){return a.removeEventListener(b,H.dq(c,1),!1)}}
W.lT.prototype={
gL:function(a){return a.name}}
W.cf.prototype={$iscf:1,$isad:1,
gL:function(a){return a.name}}
W.f8.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isf8:1,
$isaT:1,
$asaT:function(){return[W.cf]},
$isaP:1,
$asaP:function(){return[W.cf]},
$isq:1,
$asq:function(){return[W.cf]},
$isv:1,
$asv:function(){return[W.cf]},
$iso:1,
$aso:function(){return[W.cf]}}
W.iI.prototype={
$asq:function(){return[W.cf]},
$asv:function(){return[W.cf]},
$aso:function(){return[W.cf]},
$isq:1,
$isv:1,
$iso:1}
W.j1.prototype={
$asq:function(){return[W.cf]},
$asv:function(){return[W.cf]},
$aso:function(){return[W.cf]},
$isq:1,
$isv:1,
$iso:1}
W.lU.prototype={
gas:function(a){return a.error}}
W.lV.prototype={
gL:function(a){return a.name}}
W.lW.prototype={
gas:function(a){return a.error},
gm:function(a){return a.length}}
W.lZ.prototype={
gaJ:function(a){return a.style},
gcS:function(a){return a.weight}}
W.m_.prototype={
h:function(a,b){return a.add(b)},
i7:function(a,b,c){return a.forEach(H.dq(b,3),c)},
ac:function(a,b){b=H.dq(b,3)
return a.forEach(b)}}
W.iC.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gL:function(a){return a.name}}
W.cp.prototype={$iscp:1,$isad:1}
W.mb.prototype={
gm:function(a){return a.length}}
W.fa.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.aQ]},
$isv:1,
$asv:function(){return[W.aQ]},
$iso:1,
$aso:function(){return[W.aQ]},
$isaT:1,
$asaT:function(){return[W.aQ]},
$isaP:1,
$asaP:function(){return[W.aQ]}}
W.iJ.prototype={
$asq:function(){return[W.aQ]},
$asv:function(){return[W.aQ]},
$aso:function(){return[W.aQ]},
$isq:1,
$isv:1,
$iso:1}
W.j2.prototype={
$asq:function(){return[W.aQ]},
$asv:function(){return[W.aQ]},
$aso:function(){return[W.aQ]},
$isq:1,
$isv:1,
$iso:1}
W.iE.prototype={
K:function(a,b){return a.item(b)}}
W.e8.prototype={
ii:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
hz:function(a,b,c,d){return a.open(b,c,d)},
ghO:function(a){return W.H0(a.response)},
b4:function(a,b){return a.send(b)},
$ise8:1,
$isad:1,
ghP:function(a){return a.responseText}}
W.me.prototype={
$1:function(a){return J.yc(a)},
$S:function(){return{func:1,args:[W.e8]}}}
W.mf.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.at()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.aA(0,t)
else p.bl(a)},
$S:function(){return{func:1,args:[,]}}}
W.hh.prototype={}
W.mj.prototype={
gL:function(a){return a.name}}
W.hi.prototype={$ishi:1}
W.fc.prototype={$isfc:1,$isdv:1,$isaQ:1,$isad:1,
aA:function(a,b){return a.complete.$1(b)}}
W.mp.prototype={$isj:1,
gcz:function(a){return a.files},
gL:function(a){return a.name}}
W.mR.prototype={
gL:function(a){return a.name}}
W.hs.prototype={
h:function(a,b){return a.add(b)}}
W.ht.prototype={$isht:1,
gah:function(a){return a.href}}
W.n8.prototype={
D:function(a){return String(a)},
gah:function(a){return a.href}}
W.nd.prototype={
gL:function(a){return a.name}}
W.hA.prototype={
gas:function(a){return a.error}}
W.jv.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.nj.prototype={
gbd:function(a){return a.content},
gL:function(a){return a.name}}
W.nk.prototype={
i1:function(a,b,c){return a.send(b,c)},
b4:function(a,b){return a.send(b)}}
W.hB.prototype={
gL:function(a){return a.name}}
W.cr.prototype={$iscr:1,$isad:1}
W.jw.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaT:1,
$asaT:function(){return[W.cr]},
$isaP:1,
$asaP:function(){return[W.cr]},
$isq:1,
$asq:function(){return[W.cr]},
$isv:1,
$asv:function(){return[W.cr]},
$iso:1,
$aso:function(){return[W.cr]}}
W.iT.prototype={
$asq:function(){return[W.cr]},
$asv:function(){return[W.cr]},
$aso:function(){return[W.cr]},
$isq:1,
$isv:1,
$iso:1}
W.jc.prototype={
$asq:function(){return[W.cr]},
$asv:function(){return[W.cr]},
$aso:function(){return[W.cr]},
$isq:1,
$isv:1,
$iso:1}
W.ny.prototype={$isj:1}
W.nz.prototype={
gL:function(a){return a.name}}
W.aQ.prototype={
D:function(a){var t=a.nodeValue
return t==null?this.eG(a):t},
aj:function(a,b){return a.contains(b)},
$isaQ:1,
$isad:1}
W.jz.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.aQ]},
$isv:1,
$asv:function(){return[W.aQ]},
$iso:1,
$aso:function(){return[W.aQ]},
$isaT:1,
$asaT:function(){return[W.aQ]},
$isaP:1,
$asaP:function(){return[W.aQ]}}
W.iU.prototype={
$asq:function(){return[W.aQ]},
$asv:function(){return[W.aQ]},
$aso:function(){return[W.aQ]},
$isq:1,
$isv:1,
$iso:1}
W.jd.prototype={
$asq:function(){return[W.aQ]},
$asv:function(){return[W.aQ]},
$aso:function(){return[W.aQ]},
$isq:1,
$isv:1,
$iso:1}
W.nC.prototype={
gL:function(a){return a.name}}
W.nH.prototype={
gL:function(a){return a.name}}
W.nL.prototype={
gL:function(a){return a.name}}
W.nN.prototype={$isj:1}
W.ea.prototype={
gL:function(a){return a.name}}
W.nT.prototype={
gm:function(a){return a.length}}
W.ch.prototype={
K:function(a,b){return a.item(b)},
$isch:1,
$isad:1,
gm:function(a){return a.length},
gL:function(a){return a.name}}
W.jG.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.ch]},
$isv:1,
$asv:function(){return[W.ch]},
$iso:1,
$aso:function(){return[W.ch]},
$isaT:1,
$asaT:function(){return[W.ch]},
$isaP:1,
$asaP:function(){return[W.ch]}}
W.iV.prototype={
$asq:function(){return[W.ch]},
$asv:function(){return[W.ch]},
$aso:function(){return[W.ch]},
$isq:1,
$isv:1,
$iso:1}
W.je.prototype={
$asq:function(){return[W.ch]},
$asv:function(){return[W.ch]},
$aso:function(){return[W.ch]},
$isq:1,
$isv:1,
$iso:1}
W.nZ.prototype={
b4:function(a,b){return a.send(b)}}
W.jL.prototype={
b4:function(a,b){return a.send(b)}}
W.fq.prototype={$isfq:1,$isdv:1,$isaQ:1,$isad:1}
W.jM.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gL:function(a){return a.name}}
W.om.prototype={
gL:function(a){return a.name}}
W.op.prototype={$isj:1}
W.oq.prototype={
gL:function(a){return a.name}}
W.or.prototype={
gL:function(a){return a.name}}
W.cs.prototype={$iscs:1,$isad:1}
W.jO.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cs]},
$isv:1,
$asv:function(){return[W.cs]},
$iso:1,
$aso:function(){return[W.cs]},
$isaT:1,
$asaT:function(){return[W.cs]},
$isaP:1,
$asaP:function(){return[W.cs]}}
W.h1.prototype={
$asq:function(){return[W.cs]},
$asv:function(){return[W.cs]},
$aso:function(){return[W.cs]},
$isq:1,
$isv:1,
$iso:1}
W.h4.prototype={
$asq:function(){return[W.cs]},
$asv:function(){return[W.cs]},
$aso:function(){return[W.cs]},
$isq:1,
$isv:1,
$iso:1}
W.fr.prototype={$isfr:1}
W.ct.prototype={$isct:1,$isad:1,
gcS:function(a){return a.weight}}
W.jP.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.ct]},
$isv:1,
$asv:function(){return[W.ct]},
$iso:1,
$aso:function(){return[W.ct]},
$isaT:1,
$asaT:function(){return[W.ct]},
$isaP:1,
$asaP:function(){return[W.ct]}}
W.iW.prototype={
$asq:function(){return[W.ct]},
$asv:function(){return[W.ct]},
$aso:function(){return[W.ct]},
$isq:1,
$isv:1,
$iso:1}
W.jf.prototype={
$asq:function(){return[W.ct]},
$asv:function(){return[W.ct]},
$aso:function(){return[W.ct]},
$isq:1,
$isv:1,
$iso:1}
W.fs.prototype={$isfs:1,$isad:1}
W.ox.prototype={
gas:function(a){return a.error}}
W.cj.prototype={
K:function(a,b){return a.item(b)},
$iscj:1,
$isad:1,
gm:function(a){return a.length}}
W.oy.prototype={
gL:function(a){return a.name}}
W.oz.prototype={
gL:function(a){return a.name}}
W.oE.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
ac:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gX:function(a){return a.key(0)==null},
$isbt:1,
$asbt:function(){return[P.B,P.B]}}
W.ck.prototype={$isck:1,$isad:1,
gah:function(a){return a.href}}
W.ec.prototype={}
W.p7.prototype={
gbd:function(a){return a.content}}
W.p9.prototype={
gL:function(a){return a.name}}
W.cR.prototype={$isad:1}
W.cJ.prototype={$isad:1}
W.pc.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaT:1,
$asaT:function(){return[W.cJ]},
$isaP:1,
$asaP:function(){return[W.cJ]},
$isq:1,
$asq:function(){return[W.cJ]},
$isv:1,
$asv:function(){return[W.cJ]},
$iso:1,
$aso:function(){return[W.cJ]}}
W.iX.prototype={
$asq:function(){return[W.cJ]},
$asv:function(){return[W.cJ]},
$aso:function(){return[W.cJ]},
$isq:1,
$isv:1,
$iso:1}
W.jg.prototype={
$asq:function(){return[W.cJ]},
$asv:function(){return[W.cJ]},
$aso:function(){return[W.cJ]},
$isq:1,
$isv:1,
$iso:1}
W.pd.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaT:1,
$asaT:function(){return[W.cR]},
$isaP:1,
$asaP:function(){return[W.cR]},
$isq:1,
$asq:function(){return[W.cR]},
$isv:1,
$asv:function(){return[W.cR]},
$iso:1,
$aso:function(){return[W.cR]}}
W.h2.prototype={
$asq:function(){return[W.cR]},
$asv:function(){return[W.cR]},
$aso:function(){return[W.cR]},
$isq:1,
$isv:1,
$iso:1}
W.h5.prototype={
$asq:function(){return[W.cR]},
$asv:function(){return[W.cR]},
$aso:function(){return[W.cR]},
$isq:1,
$isv:1,
$iso:1}
W.ph.prototype={
gm:function(a){return a.length}}
W.cu.prototype={$iscu:1,$isad:1}
W.jT.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cu]},
$isv:1,
$asv:function(){return[W.cu]},
$iso:1,
$aso:function(){return[W.cu]},
$isaT:1,
$asaT:function(){return[W.cu]},
$isaP:1,
$asaP:function(){return[W.cu]}}
W.iY.prototype={
$asq:function(){return[W.cu]},
$asv:function(){return[W.cu]},
$aso:function(){return[W.cu]},
$isq:1,
$isv:1,
$iso:1}
W.jh.prototype={
$asq:function(){return[W.cu]},
$asv:function(){return[W.cu]},
$aso:function(){return[W.cu]},
$isq:1,
$isv:1,
$iso:1}
W.fv.prototype={$isfv:1,$isad:1}
W.jU.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.ed.prototype={}
W.px.prototype={
D:function(a){return String(a)},
$isj:1,
gah:function(a){return a.href}}
W.pB.prototype={
gm:function(a){return a.length}}
W.fw.prototype={$isfw:1,$isad:1}
W.jV.prototype={
K:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.pG.prototype={
b4:function(a,b){return a.send(b)}}
W.jY.prototype={$isj:1,
gL:function(a){return a.name}}
W.pN.prototype={$isj:1}
W.eO.prototype={$isj:1}
W.fx.prototype={$isfx:1,$isaQ:1,$isad:1,
gL:function(a){return a.name}}
W.q4.prototype={
D:function(a){return"Rectangle ("+H.D(a.left)+", "+H.D(a.top)+") "+H.D(a.width)+" x "+H.D(a.height)},
S:function(a,b){var t,s,r
if(b==null)return!1
t=J.aL(b)
if(!t.$isbU)return!1
s=a.left
r=t.gbU(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbZ(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb3(b)
if(s==null?r==null:s===r){s=a.height
t=t.gaY(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga8:function(a){var t,s,r,q
t=J.dG(a.left)
s=J.dG(a.top)
r=J.dG(a.width)
q=J.dG(a.height)
return W.xl(W.eT(W.eT(W.eT(W.eT(0,t),s),r),q))},
$isbU:1,
$asbU:function(){},
gaY:function(a){return a.height},
gbU:function(a){return a.left},
gbZ:function(a){return a.top},
gb3:function(a){return a.width}}
W.hU.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaT:1,
$asaT:function(){return[P.bU]},
$isaP:1,
$asaP:function(){return[P.bU]},
$isq:1,
$asq:function(){return[P.bU]},
$isv:1,
$asv:function(){return[P.bU]},
$iso:1,
$aso:function(){return[P.bU]}}
W.iZ.prototype={
$asq:function(){return[P.bU]},
$asv:function(){return[P.bU]},
$aso:function(){return[P.bU]},
$isq:1,
$isv:1,
$iso:1}
W.ji.prototype={
$asq:function(){return[P.bU]},
$asv:function(){return[P.bU]},
$aso:function(){return[P.bU]},
$isq:1,
$isv:1,
$iso:1}
W.k4.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.bK]},
$isv:1,
$asv:function(){return[W.bK]},
$iso:1,
$aso:function(){return[W.bK]},
$isaT:1,
$asaT:function(){return[W.bK]},
$isaP:1,
$asaP:function(){return[W.bK]}}
W.j_.prototype={
$asq:function(){return[W.bK]},
$asv:function(){return[W.bK]},
$aso:function(){return[W.bK]},
$isq:1,
$isv:1,
$iso:1}
W.jj.prototype={
$asq:function(){return[W.bK]},
$asv:function(){return[W.bK]},
$aso:function(){return[W.bK]},
$isq:1,
$isv:1,
$iso:1}
W.qb.prototype={$isj:1}
W.qc.prototype={
gaY:function(a){return a.height},
gb3:function(a){return a.width}}
W.k8.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaT:1,
$asaT:function(){return[W.cp]},
$isaP:1,
$asaP:function(){return[W.cp]},
$isq:1,
$asq:function(){return[W.cp]},
$isv:1,
$asv:function(){return[W.cp]},
$iso:1,
$aso:function(){return[W.cp]}}
W.iK.prototype={
$asq:function(){return[W.cp]},
$asv:function(){return[W.cp]},
$aso:function(){return[W.cp]},
$isq:1,
$isv:1,
$iso:1}
W.j3.prototype={
$asq:function(){return[W.cp]},
$asv:function(){return[W.cp]},
$aso:function(){return[W.cp]},
$isq:1,
$isv:1,
$iso:1}
W.qx.prototype={$isj:1}
W.i0.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.aQ]},
$isv:1,
$asv:function(){return[W.aQ]},
$iso:1,
$aso:function(){return[W.aQ]},
$isaT:1,
$asaT:function(){return[W.aQ]},
$isaP:1,
$asaP:function(){return[W.aQ]}}
W.iL.prototype={
$asq:function(){return[W.aQ]},
$asv:function(){return[W.aQ]},
$aso:function(){return[W.aQ]},
$isq:1,
$isv:1,
$iso:1}
W.j4.prototype={
$asq:function(){return[W.aQ]},
$asv:function(){return[W.aQ]},
$aso:function(){return[W.aQ]},
$isq:1,
$isv:1,
$iso:1}
W.qW.prototype={$isj:1}
W.kb.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cj]},
$isv:1,
$asv:function(){return[W.cj]},
$iso:1,
$aso:function(){return[W.cj]},
$isaT:1,
$asaT:function(){return[W.cj]},
$isaP:1,
$asaP:function(){return[W.cj]}}
W.iM.prototype={
$asq:function(){return[W.cj]},
$asv:function(){return[W.cj]},
$aso:function(){return[W.cj]},
$isq:1,
$isv:1,
$iso:1}
W.j5.prototype={
$asq:function(){return[W.cj]},
$asv:function(){return[W.cj]},
$aso:function(){return[W.cj]},
$isq:1,
$isv:1,
$iso:1}
W.kd.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
K:function(a,b){return a.item(b)},
$isaT:1,
$asaT:function(){return[W.ck]},
$isaP:1,
$asaP:function(){return[W.ck]},
$isq:1,
$asq:function(){return[W.ck]},
$isv:1,
$asv:function(){return[W.ck]},
$iso:1,
$aso:function(){return[W.ck]}}
W.iN.prototype={
$asq:function(){return[W.ck]},
$asv:function(){return[W.ck]},
$aso:function(){return[W.ck]},
$isq:1,
$isv:1,
$iso:1}
W.j6.prototype={
$asq:function(){return[W.ck]},
$asv:function(){return[W.ck]},
$aso:function(){return[W.ck]},
$isq:1,
$isv:1,
$iso:1}
W.rb.prototype={$isj:1}
W.rc.prototype={$isj:1}
W.qd.prototype={
aG:function(){var t,s,r,q,p
t=P.a6(null,null,null,P.B)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.bV)(s),++q){p=J.kt(s[q])
if(p.length!==0)t.h(0,p)}return t},
eo:function(a){this.a.className=a.b6(0," ")},
gm:function(a){return this.a.classList.length},
gX:function(a){return this.a.classList.length===0},
aj:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s}}
W.qg.prototype={
aN:function(a,b,c,d){return W.eR(this.a,this.b,a,!1,H.O(this,0))},
e7:function(a,b,c){return this.aN(a,null,b,c)}}
W.hV.prototype={}
W.qh.prototype={
bP:function(a){if(this.b==null)return
this.dM()
this.b=null
this.d=null
return},
cH:function(a,b){if(this.b==null)return;++this.a
this.dM()},
eb:function(a){return this.cH(a,null)},
ee:function(a){if(this.b==null||this.a<=0)return;--this.a
this.dK()},
dK:function(){var t=this.d
if(t!=null&&this.a<=0)J.y0(this.b,this.c,t,!1)},
dM:function(){var t=this.d
if(t!=null)J.yg(this.b,this.c,t,!1)},
eW:function(a,b,c,d,e){this.dK()}}
W.qi.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bx.prototype={
ga0:function(a){return new W.lY(a,this.gm(a),-1,null,[H.aU(a,"bx",0)])},
h:function(a,b){throw H.l(new P.Z("Cannot add to immutable List."))},
ab:function(a,b,c,d,e){throw H.l(new P.Z("Cannot setRange on immutable List."))},
az:function(a,b,c,d){return this.ab(a,b,c,d,0)},
aB:function(a,b,c,d){throw H.l(new P.Z("Cannot modify an immutable List."))},
bS:function(a,b,c,d){throw H.l(new P.Z("Cannot modify an immutable List."))},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$iso:1,
$aso:null}
W.lY.prototype={
J:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.i6(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gR:function(){return this.d}}
W.r4.prototype={}
P.r1.prototype={
bp:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
b2:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.aL(a)
if(!!s.$isdL)return new Date(a.a)
if(!!s.$isFU)throw H.l(new P.eL("structured clone of RegExp"))
if(!!s.$iscf)return a
if(!!s.$iseZ)return a
if(!!s.$isf8)return a
if(!!s.$ishi)return a
if(!!s.$isfk||!!s.$iseA)return a
if(!!s.$isbt){r=this.bp(a)
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
s.ac(a,new P.r3(t,this))
return t.a}if(!!s.$isq){r=this.bp(a)
t=this.b
if(r>=t.length)return H.w(t,r)
o=t[r]
if(o!=null)return o
return this.fY(a,r)}throw H.l(new P.eL("structured clone of other type"))},
fY:function(a,b){var t,s,r,q,p
t=J.bd(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.w(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.b2(t.n(a,p))
if(p>=r.length)return H.w(r,p)
r[p]=q}return r}}
P.r3.prototype={
$2:function(a,b){this.a.a[a]=this.b.b2(b)},
$S:function(){return{func:1,args:[,,]}}}
P.pV.prototype={
bp:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
b2:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.dL(s,!0)
r.d4(s,!0)
return r}if(a instanceof RegExp)throw H.l(new P.eL("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.Hk(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bp(a)
r=this.b
o=r.length
if(p>=o)return H.w(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.n0()
t.a=n
if(p>=o)return H.w(r,p)
r[p]=n
this.hc(a,new P.pW(t,this))
return t.a}if(a instanceof Array){p=this.bp(a)
r=this.b
if(p>=r.length)return H.w(r,p)
n=r[p]
if(n!=null)return n
o=J.bd(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.w(r,p)
r[p]=n
if(typeof m!=="number")return H.a9(m)
r=J.dr(n)
l=0
for(;l<m;++l)r.i(n,l,this.b2(o.n(a,l)))
return n}return a}}
P.pW.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b2(b)
J.kp(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.r2.prototype={}
P.k0.prototype={
hc:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.bV)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.rt.prototype={
$1:function(a){return this.a.aA(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.ru.prototype={
$1:function(a){return this.a.bl(a)},
$S:function(){return{func:1,args:[,]}}}
P.l0.prototype={
dN:function(a){if($.$get$vt().b.test(a))return a
throw H.l(P.e4(a,"value","Not a valid class token"))},
D:function(a){return this.aG().b6(0," ")},
ga0:function(a){var t,s
t=this.aG()
s=new P.dD(t,t.r,null,null,[null])
s.c=t.e
return s},
ac:function(a,b){this.aG().ac(0,b)},
aw:function(a,b){var t=this.aG()
return new H.fZ(t,b,[H.O(t,0),null])},
gX:function(a){return this.aG().a===0},
gm:function(a){return this.aG().a},
aj:function(a,b){if(typeof b!=="string")return!1
this.dN(b)
return this.aG().aj(0,b)},
cD:function(a){return this.aj(0,a)?a:null},
h:function(a,b){this.dN(b)
return this.hv(0,new P.l1(b))},
a5:function(a,b){return this.aG().a5(0,!0)},
ap:function(a){return this.a5(a,!0)},
hv:function(a,b){var t,s
t=this.aG()
s=b.$1(t)
this.eo(t)
return s},
$iseG:1,
$aseG:function(){return[P.B]},
$isv:1,
$asv:function(){return[P.B]},
$iso:1,
$aso:function(){return[P.B]}}
P.l1.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.lc.prototype={
gL:function(a){return a.name}}
P.rj.prototype={
$1:function(a){this.b.aA(0,new P.k0([],[],!1).b2(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mn.prototype={
gL:function(a){return a.name}}
P.nD.prototype={
bK:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fo(a,b,c)
q=P.H_(t)
return q}catch(p){s=H.cw(p)
r=H.cv(p)
q=P.vS(s,r,null)
return q}},
h:function(a,b){return this.bK(a,b,null)},
fo:function(a,b,c){return a.add(new P.r2([],[]).b2(b))},
gL:function(a){return a.name}}
P.hL.prototype={
gas:function(a){return a.error}}
P.pm.prototype={
gas:function(a){return a.error}}
P.qE.prototype={
bt:function(a){if(a<=0||a>4294967296)throw H.l(P.wR("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
cE:function(){return Math.random()}}
P.qN.prototype={
aT:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.al(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bt:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.l(P.wR("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.aT()
return(this.a&t)>>>0}do{this.aT()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
cE:function(){this.aT()
var t=this.a
this.aT()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
eY:function(a){var t,s,r,q,p,o,n,m
t=J.ef(a,0)?-1:0
do{if(typeof a!=="number")return a.aH()
s=(a&4294967295)>>>0
a=C.d.al(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.al(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.al(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.al(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.al(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.al(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.al(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aT()
this.aT()
this.aT()
this.aT()}}
P.qO.prototype={}
P.bU.prototype={$asbU:null}
P.ku.prototype={$isj:1,
gah:function(a){return a.href}}
P.eg.prototype={$isj:1}
P.lv.prototype={$isj:1}
P.lw.prototype={$isj:1}
P.lx.prototype={$isj:1}
P.ly.prototype={$isj:1}
P.lz.prototype={$isj:1}
P.lA.prototype={$isj:1}
P.lB.prototype={$isj:1}
P.lC.prototype={$isj:1}
P.lD.prototype={$isj:1}
P.lE.prototype={$isj:1,
gah:function(a){return a.href}}
P.lF.prototype={$isj:1}
P.lG.prototype={$isj:1}
P.lH.prototype={$isj:1}
P.lI.prototype={$isj:1}
P.lJ.prototype={$isj:1}
P.lK.prototype={$isj:1}
P.lX.prototype={$isj:1,
gah:function(a){return a.href}}
P.cq.prototype={$isj:1}
P.mk.prototype={$isj:1,
gah:function(a){return a.href}}
P.d5.prototype={$isad:1}
P.mU.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.d5]},
$isv:1,
$asv:function(){return[P.d5]},
$iso:1,
$aso:function(){return[P.d5]}}
P.iO.prototype={
$asq:function(){return[P.d5]},
$asv:function(){return[P.d5]},
$aso:function(){return[P.d5]},
$isq:1,
$isv:1,
$iso:1}
P.j7.prototype={
$asq:function(){return[P.d5]},
$asv:function(){return[P.d5]},
$aso:function(){return[P.d5]},
$isq:1,
$isv:1,
$iso:1}
P.ng.prototype={$isj:1}
P.nh.prototype={$isj:1}
P.d7.prototype={$isad:1}
P.nA.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.d7]},
$isv:1,
$asv:function(){return[P.d7]},
$iso:1,
$aso:function(){return[P.d7]}}
P.iP.prototype={
$asq:function(){return[P.d7]},
$asv:function(){return[P.d7]},
$aso:function(){return[P.d7]},
$isq:1,
$isv:1,
$iso:1}
P.j8.prototype={
$asq:function(){return[P.d7]},
$asv:function(){return[P.d7]},
$aso:function(){return[P.d7]},
$isq:1,
$isv:1,
$iso:1}
P.nR.prototype={$isj:1,
gah:function(a){return a.href}}
P.nW.prototype={
gm:function(a){return a.length}}
P.oj.prototype={$isj:1,
gah:function(a){return a.href}}
P.oZ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.B]},
$isv:1,
$asv:function(){return[P.B]},
$iso:1,
$aso:function(){return[P.B]}}
P.iQ.prototype={
$asq:function(){return[P.B]},
$asv:function(){return[P.B]},
$aso:function(){return[P.B]},
$isq:1,
$isv:1,
$iso:1}
P.j9.prototype={
$asq:function(){return[P.B]},
$asv:function(){return[P.B]},
$aso:function(){return[P.B]},
$isq:1,
$isv:1,
$iso:1}
P.kA.prototype={
aG:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a6(null,null,null,P.B)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.bV)(r),++p){o=J.kt(r[p])
if(o.length!==0)s.h(0,o)}return s},
eo:function(a){this.a.setAttribute("class",a.b6(0," "))}}
P.cc.prototype={
gdQ:function(a){return new P.kA(a)},
cB:function(a,b,c,d,e){throw H.l(new P.Z("Cannot invoke insertAdjacentHtml on SVG."))},
$isj:1}
P.p1.prototype={$isj:1}
P.p3.prototype={$isj:1}
P.eK.prototype={}
P.pb.prototype={$isj:1,
gah:function(a){return a.href}}
P.da.prototype={$isad:1}
P.pn.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.da]},
$isv:1,
$asv:function(){return[P.da]},
$iso:1,
$aso:function(){return[P.da]}}
P.iR.prototype={
$asq:function(){return[P.da]},
$asv:function(){return[P.da]},
$aso:function(){return[P.da]},
$isq:1,
$isv:1,
$iso:1}
P.ja.prototype={
$asq:function(){return[P.da]},
$asv:function(){return[P.da]},
$aso:function(){return[P.da]},
$isq:1,
$isv:1,
$iso:1}
P.py.prototype={$isj:1,
gah:function(a){return a.href}}
P.pC.prototype={$isj:1}
P.pD.prototype={$isj:1}
P.hY.prototype={$isj:1,
gah:function(a){return a.href}}
P.qT.prototype={$isj:1}
P.qU.prototype={$isj:1}
P.qV.prototype={$isj:1}
P.bh.prototype={}
P.db.prototype={$isq:1,
$asq:function(){return[P.E]},
$isv:1,
$asv:function(){return[P.E]},
$iso:1,
$aso:function(){return[P.E]}}
P.fN.prototype={$isfN:1,$isad:1,
gm:function(a){return a.length}}
P.eX.prototype={$iseX:1,$isad:1,
gbO:function(a){return a.buffer}}
P.fO.prototype={
f9:function(a,b,c,d){return a.decodeAudioData(b,H.dq(c,1),H.dq(d,1))},
h_:function(a,b){var t,s,r
t=P.fN
s=new P.bj(0,$.aD,null,[t])
r=new P.e_(s,[t])
this.f9(a,b,new P.kB(r),new P.kC(r))
return s}}
P.kB.prototype={
$1:function(a){this.a.aA(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kC.prototype={
$1:function(a){var t=this.a
if(a==null)t.bl("")
else t.bl(a)},
$S:function(){return{func:1,args:[,]}}}
P.bC.prototype={}
P.e5.prototype={}
P.l_.prototype={
gbO:function(a){return a.buffer}}
P.kw.prototype={
gL:function(a){return a.name}}
P.o8.prototype={$isj:1}
P.ra.prototype={$isj:1}
P.jQ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.l(P.by(b,a,null,null,null))
return P.xL(a.item(b))},
i:function(a,b,c){throw H.l(new P.Z("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.l(new P.Z("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
K:function(a,b){return P.xL(a.item(b))},
$isq:1,
$asq:function(){return[P.bt]},
$isv:1,
$asv:function(){return[P.bt]},
$iso:1,
$aso:function(){return[P.bt]}}
P.iS.prototype={
$asq:function(){return[P.bt]},
$asv:function(){return[P.bt]},
$aso:function(){return[P.bt]},
$isq:1,
$isv:1,
$iso:1}
P.jb.prototype={
$asq:function(){return[P.bt]},
$asv:function(){return[P.bt]},
$aso:function(){return[P.bt]},
$isq:1,
$isv:1,
$iso:1}
T.fJ.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
gX:function(a){return this.a.length===0},
ga0:function(a){var t=this.a
return new J.i7(t,t.length,0,null,[H.O(t,0)])},
$ashp:function(){return[T.fK]},
$aso:function(){return[T.fK]},
gcz:function(a){return this.a}}
T.fK.prototype={
gbd:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.fb(C.x)
r=T.fb(C.y)
q=T.wG(0,this.b)
new T.iF(s,q,0,0,0,t,r).dr()
r=q.c.buffer
q=q.a
r.toString
q=H.cP(r,0,q)
this.cy=q
t=q}else{t=s.bw()
this.cy=t}this.ch=0}}return t},
D:function(a){return this.a},
gL:function(a){return this.a}}
T.dg.prototype={
D:function(a){return"ArchiveException: "+this.a}}
T.hj.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.V()
if(typeof r!=="number")return H.a9(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.U()
if(typeof b!=="number")return H.a9(b)
s+=b
if(s<0||s>=t.length)return H.w(t,s)
return t[s]},
aS:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.a9(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.V()
if(typeof s!=="number")return H.a9(s)
b=t-(a-s)}return T.tu(this.a,this.d,b,a)},
aZ:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.U()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.a9(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.w(q,s)
q[s]}return-1},
be:function(a,b){return this.aZ(a,b,0)},
cM:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.V()
if(typeof s!=="number")return H.a9(s)
r=this.aS(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.V()
if(typeof p!=="number")return H.a9(p)
if(typeof s!=="number")return s.U()
this.b=s+(t-(q-p))
return r},
bX:function(a){return P.p_(this.cM(a).bw(),0,null)},
a2:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.U()
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
a4:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.U()
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
aP:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.U()
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
bw:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.V()
if(typeof r!=="number")return H.a9(r)
q=t-(s-r)
t=this.a
r=J.aL(t)
if(!!r.$isdb){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cP(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.xw(r.c2(t,s,p>o?o:p)))},
eN:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gbO:function(a){return this.a},
ghy:function(a){return this.b}}
T.nI.prototype={
hX:function(a,b){var t,s,r,q
if(b==null)b=J.cn(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cc(s-q)
C.q.az(r,t,s,a)
this.a+=b},
cT:function(a){return this.hX(a,null)},
hZ:function(a){var t,s,r,q
t=J.bd(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a9(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a9(r)
this.cc(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a9(r)
C.q.ab(q,s,s+r,t.gbO(a),t.ghy(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.V()
if(typeof q!=="number")return H.a9(q)
this.a=t+(r-(s-q))},
aS:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cP(t,a,b-a)},
d2:function(a){return this.aS(a,null)},
cc:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.bb(P.dH("Invalid length "+H.D(s)))
r=new Uint8Array(s)
q=this.c
C.q.az(r,0,q.length,q)
this.c=r},
fd:function(){return this.cc(null)},
gm:function(a){return this.a}}
T.pR.prototype={
fB:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.aS(this.a-20,20)
if(s.a4()!==117853008){a.b=t
return}s.a4()
r=s.aP()
s.a4()
a.b=r
if(a.a4()!==101075792){a.b=t
return}a.aP()
a.a2()
a.a2()
q=a.a4()
p=a.a4()
o=a.aP()
n=a.aP()
m=a.aP()
l=a.aP()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fe:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.V()
if(typeof r!=="number")return H.a9(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a4()===101010256){a.b=t
return q}}throw H.l(new T.dg("Could not find End of Central Directory Record"))},
eS:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fe(a)
this.a=t
a.b=t
a.a4()
this.b=a.a2()
this.c=a.a2()
this.d=a.a2()
this.e=a.a2()
this.f=a.a4()
this.r=a.a4()
s=a.a2()
if(s>0)this.x=a.bX(s)
this.fB(a)
r=a.aS(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.U()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.at()
if(!(p<t+o))break
if(r.a4()!==33639248)break
p=new T.pT(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.a2()
p.b=r.a2()
p.c=r.a2()
p.d=r.a2()
p.e=r.a2()
p.f=r.a2()
p.r=r.a4()
p.x=r.a4()
p.y=r.a4()
n=r.a2()
m=r.a2()
l=r.a2()
p.z=r.a2()
p.Q=r.a2()
p.ch=r.a4()
o=r.a4()
p.cx=o
if(n>0)p.cy=r.bX(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.V()
j=r.aS(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.V()
if(typeof g!=="number")return H.a9(g)
if(typeof k!=="number")return k.U()
r.b=k+(i-(h-g))
p.db=j.bw()
f=j.a2()
e=j.a2()
if(f===1){if(e>=8)p.y=j.aP()
if(e>=16)p.x=j.aP()
if(e>=24){o=j.aP()
p.cx=o}if(e>=28)p.z=j.a4()}}if(l>0)p.dx=r.bX(l)
a.b=o
p.dy=T.Gw(a,p)
q.push(p)}}}
T.pS.prototype={
gbd:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.fb(C.x)
q=T.fb(C.y)
t=T.wG(0,t)
new T.iF(s,t,0,0,0,r,q).dr()
q=t.c.buffer
t=t.a
q.toString
t=H.cP(q,0,t)
this.cy=t
this.d=0}else{t=s.bw()
this.cy=t}}return t},
D:function(a){return this.z},
eT:function(a,b){var t,s,r,q
t=a.a4()
this.a=t
if(t!==67324752)throw H.l(new T.dg("Invalid Zip Signature"))
this.b=a.a2()
this.c=a.a2()
this.d=a.a2()
this.e=a.a2()
this.f=a.a2()
this.r=a.a4()
this.x=a.a4()
this.y=a.a4()
s=a.a2()
r=a.a2()
this.z=a.bX(s)
this.Q=a.cM(r).bw()
this.cx=a.cM(this.ch.x)
if((this.c&8)!==0){q=a.a4()
if(q===134695760)this.r=a.a4()
else this.r=q
this.x=a.a4()
this.y=a.a4()}}}
T.pT.prototype={
D:function(a){return this.cy}}
T.pQ.prototype={
h0:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.Gv(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.E],p=0;p<t.length;t.length===r||(0,H.bV)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.cY()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fK(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.e0(k,"$isq",q,"$asq")){j.cy=k
j.cx=T.tu(k,0,null,0)}else if(k instanceof T.hj){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hj(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.h7(m,"/")
j.y=n.r
s.push(j)}return new T.fJ(s,null)}}
T.mg.prototype={
eM:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.ar(1,this.b)
r=H.cA(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.w(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.w(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iF.prototype={
dr:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.U()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.at()
if(!(r<s+q))break
if(!this.fw())break}},
fw:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.U()
if(typeof s!=="number")return s.at()
if(s>=r+q)return!1
p=this.au(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.au(16)
s=this.au(16)
if(n!==0&&n!==(s^65535)>>>0)H.bb(new T.dg("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.V()
r=q-r
if(n>s-r)H.bb(new T.dg("Input buffer is broken"))
m=t.aS(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.V()
if(typeof l!=="number")return H.a9(l)
if(typeof s!=="number")return s.U()
t.b=s+(r-(q-l))
this.b.hZ(m)
break
case 1:this.di(this.f,this.r)
break
case 2:this.fz()
break
default:throw H.l(new T.dg("unknown BTYPE: "+o))}return(p&1)===0},
au:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.U()
if(typeof r!=="number")return r.at()
if(r>=q+p)throw H.l(new T.dg("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.w(q,r)
o=q[r]
this.c=(this.c|C.a.aq(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.ar(1,a)
this.c=C.a.dI(t,a)
this.d=s-a
return(t&r-1)>>>0},
ck:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.U()
if(typeof p!=="number")return p.at()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.w(o,p)
m=o[p]
this.c=(this.c|C.a.aq(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.ar(1,s)-1)>>>0
if(p>=t.length)return H.w(t,p)
l=t[p]
k=l>>>16
this.c=C.a.dI(r,k)
this.d=q-k
return l&65535},
fz:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.au(5)+257
s=this.au(5)+1
r=this.au(4)+4
q=H.cA(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.w(C.E,o)
n=C.E[o]
m=this.au(3)
if(n>=q)return H.w(p,n)
p[n]=m}l=T.fb(p)
k=new Uint8Array(H.cA(t))
j=new Uint8Array(H.cA(s))
i=this.dh(t,l,k)
h=this.dh(s,l,j)
this.di(T.fb(i),T.fb(h))},
di:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.ck(a)
if(s>285)throw H.l(new T.dg("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.fd()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.w(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.w(C.C,p)
o=C.C[p]+this.au(C.W[p])
n=this.ck(b)
if(n<=29){if(n>=30)return H.w(C.z,n)
m=C.z[n]+this.au(C.V[n])
for(r=-m;o>m;){t.cT(t.d2(r))
o-=m}if(o===m)t.cT(t.d2(r))
else t.cT(t.aS(r,o-m))}else throw H.l(new T.dg("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.V();--r
t.b=r
if(r<0)t.b=0}},
dh:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.ck(b)
switch(q){case 16:p=3+this.au(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=s}break
case 17:p=3+this.au(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
case 18:p=11+this.au(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.l(new T.dg("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kv.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Math Book",H.a([$.N,$.a0,$.aI],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Giant Map",H.a([$.N,$.a0],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microscope",H.a([$.C,$.a0,$.b3],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Star Chart",H.a([$.N,$.a0],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("History Book",H.a([$.N,$.a0],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.bY,$.aG],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.C,$.a0],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.hb,$.m)
q.i(0,$.be,$.m)
q.i(0,$.f6,$.k)
q.i(0,$.b2,$.L)
q.i(0,$.cD,$.k)
p=$.n
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.u
o=o+n+" to stop "
m=$.M
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.Fo
n=[U.b]
q.i(0,new R.a1("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.y(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.n
q.i(0,new R.a1("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.u+" to stop "+$.M+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.wQ(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
p="The "+m+" finds a massive library, filled with books. The "
l=$.u
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.z
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.a1("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.fo(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aR)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.f3,$.L)
s.i(0,$.cD,$.m)
p=$.n
o="The "+p+"  is approached by a "
l=$.u
s.i(0,new R.a1("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.M+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.u
s.i(0,new R.a1("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.M+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.eC(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
s.i(0,new R.a1("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.u+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.fo(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.G(q,s,null),$.aR)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.f3,$.L)
t.i(0,$.cD,$.m)
t.i(0,$.c0,$.L)
t.i(0,$.tg,$.L)
r=$.n
q="The "+r+"  is approached by a "
p=$.u
q=q+p+" who offers them a grant to study "
o=$.ae
t.i(0,new R.a1("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.M+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.fo(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
o=$.u
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.M
r=r+p+".  It is up to the "
q=$.n
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.ae
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.Fu
t.i(0,new R.a1("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.eb(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
t.i(0,new R.a1("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.M+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.u+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.aR)}}
K.bW.prototype={}
L.fL.prototype={
G:function(){var t,s
t=Q.F(null,null,A.Y)
s=A.i("Perfectly Generic Object",H.a([],[G.V]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d2,$.k)
q.i(0,$.be,$.L)
q.i(0,$.dP,$.k)
q.i(0,$.c0,$.m)
q.i(0,$.e6,$.L)
p=$.n
o="The "+p+" learns that all of the local "
n=$.u
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.z
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.ci+". The "+p+" has won! "
i=[U.b]
q.i(0,new R.R("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.X(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=this.f
j.i(0,new X.G(s,q,null),$.av)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.f4,$.k)
s.i(0,$.eo,$.L)
s.i(0,$.eq,$.m)
s.i(0,$.cU,$.k)
s.i(0,$.ce,$.L)
p=$.n
o="The "+p+" learns that all of the local "
n=$.u
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.z
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.ci+". The "+p+" has won! "
s.i(0,new R.R("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.X(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.G(q,s,null),$.av)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.be,$.L)
t.i(0,$.c8,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.u
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.M
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.z
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.ci+". The "+r+" has won! "
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.X(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.uu(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
l=$.n
r="The "+l+" learns that all of the local "
m=$.u
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.z
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.ci+". The "+l+" has won! "
t.i(0,new R.R("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.X(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.G(s,t,null),$.av)},
D:function(a){return this.Q},
Y:function(a,b,c,d,e){var t=this.Q
this.r=new X.iq("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.i9]),H.a([],[M.h7]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.G()
this.H()
t=this.e
if($.$get$ky().a1(0,t))H.bb("Duplicate aspect id for "+this.D(0)+": "+t+" is already registered for "+J.cL($.$get$ky().n(0,t))+".")
$.$get$ky().i(0,t,this)},
gL:function(a){return this.Q}}
L.aa.prototype={}
M.kz.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Barbells",H.a([$.ab,$.ca,$.C],s),null,!1,"Strength Building Metal")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Basketball",H.a([$.es,$.c2],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Baseball Bat",H.a([$.jl,$.W],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rubber Ball",H.a([$.es,$.c2],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.aS,$.a2],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hockey Stick",H.a([$.jl,$.W,$.dj],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trophy",H.a([$.C,$.bc],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Boxing Glove",H.a([$.w5,$.c2],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Yoga Mat",H.a([$.c2,$.b7],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.e7,$.L)
q.i(0,$.bP,$.m)
q.i(0,$.cU,$.L)
p=$.n
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.u
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.M+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.i(0,new R.a1("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.n
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.u
q.i(0,new R.a1("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.M+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.eb(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
n="The "+m+"  wanders into a bunch of "
p=$.u
q.i(0,new R.a1("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hK(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aR)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.e7,$.m)
t.i(0,$.f7,$.m)
t.i(0,$.bP,$.m)
s=$.n
r="The "+s+" finds a team of underdog "
p=$.u
t.i(0,new R.a1("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.wQ(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.u
s="A group of "+p+"s approach the "
r=$.n
s=s+r+". Apparently their sports team lost their coach to the "+$.z+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.M
t.i(0,new R.a1("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.eb(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
k=$.u
p="A group of "+k+"s approach the "
r=$.n
t.i(0,new R.a1("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.z+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.ae+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,t,null),$.aR)}}
U.kD.prototype={
P:function(a,b){var t=0,s=P.bi(),r,q,p,o
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:q=$.$get$vk()
p=q.createBufferSource()
o=p
t=3
return P.cm(J.y6(q,b),$async$P)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$asdt:function(){return[P.eX]},
$asc9:function(){return[P.eX,P.bh]}}
U.na.prototype={
aO:function(a){return"audio/mpeg"}}
U.nF.prototype={
aO:function(a){return"audio/ogg"}}
U.oW.prototype={
P:function(a,b){var t=0,s=P.bi(),r,q,p
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:q=W.yT(b)
p=new W.hV(q,"canplaythrough",!1,[W.T])
t=3
return P.cm(p.gag(p),$async$P)
case 3:r=q
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$asio:function(){return[W.eY]},
$asc9:function(){return[W.eY,P.B]}}
U.oX.prototype={}
U.oY.prototype={}
O.kF.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Cod Piece",H.a([$.Q,$.a_,$.aw,$.P,$.W],s),"God damn it, MI. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.tz,$.P,$.bL],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aM,$.W,$.bo,$.P,$.a7],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Snare Trap",H.a([$.Q,$.aM,$.P,$.bg],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cB,$.k)
t.i(0,$.he,$.k)
t.i(0,$.cz,$.k)
t.i(0,$.dy,$.k)
t.i(0,$.cC,$.k)
t.i(0,$.f2,$.k)
r="After all the bullshit the "+$.z+" has put the native "
q=$.u
r=r+q+"s through, the "
p=$.n
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aX+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.M
m=[U.b]
t.i(0,new R.a8("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.y(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.u
n="A group of jubilant "+p+"s are following the "
q=$.n
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.M
t.i(0,new R.a8("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.z+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
q=$.n
t.i(0,new R.a8("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.z+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.y(),!1,!1,new Y.kU("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.n
q=q+r+" organizes a huge festival for all the "
p=$.u
t.i(0,new R.bA("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Y.pa.prototype={
P:function(a,b){var t=0,s=P.bi(),r
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$aseJ:function(){return[P.B]},
$asc9:function(){return[P.B,P.B]}}
Y.o4.prototype={
aO:function(a){return"application/octet-stream"},
P:function(a,b){var t=0,s=P.bi(),r
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$asdt:function(){return[P.bh]},
$asc9:function(){return[P.bh,P.bh]}}
L.kJ.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Bear",H.a([$.aS,$.aW,$.H],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Thought",H.a([$.mu,$.wo,$.fe],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Doorway",H.a([$.fe,$.H],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Contemplative","Transitions","Quiet"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.c6,$.k)
t.i(0,$.d3,$.m)
t.i(0,$.bP,$.m)
t.i(0,$.eq,$.A)
r=$.n
q="The "+r+" hears a "+$.u+" "+$.M+" up to him, it talks about how the imps keep jumpscaring it, and how The "+r+" needs to stop the Denizen."
p="The "+r+" has an imp jumpscare them, they instantly smite it, but they decide to get revenge by killing the "
o=$.z
p=p+o+"."
n="The "+r+" starts trekking to the "+o+"'s lair."
m="The "+r+" arrives in the "+o+"'s lair, they challenge it to a fight."
l="The "+o+" is slain... And the consorts aren't jumpscared any more"
t.i(0,new R.R("Revenge on the Denizen",!1,[new U.b(q),new U.b(p),new U.b(n),new U.X(m,"The "+r+" is defeated, and the "+o+"'s minions keep jumpscaring the innocent imps.",l)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.av)}}
T.kL.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Mystical Vial of Blood",H.a([$.b3,$.bo,$.H,$.b0],s),null,!1,"Vial of Not-ABs Oil")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bananaphone",H.a([$.aE,$.bo,$.H,$.b8],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.Q,$.bo,$.H,$.b0,$.hm],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.C,$.bg,$.H,$.b0,$.hm,$.aK],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.W,$.tH,$.bo,$.b0,$.H,$.a_],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cT,$.k)
q.i(0,$.tk,$.k)
q.i(0,$.c0,$.m)
p=$.n
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.u
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ae+" and some boondollars in compensation."
n=this.x2
k=[U.b]
q.i(0,new R.a1("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.eb(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.u
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.M+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.z
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.n
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.ci+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.R("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.X(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cU,$.k)
s.i(0,$.cC,$.L)
s.i(0,$.b2,$.L)
s.i(0,$.iz,$.k)
s.i(0,$.cz,$.L)
p=$.n
o="The "+p+"  and the "
m=$.eE
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.z
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.R("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(l),new U.X(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.eD(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
h=$.n
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.u
i=i+m+"s explains that before  "
p=$.z
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.ci+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.Fl
s.i(0,new R.R("Chain the Towers",!1,[new U.b(i),new U.b(m),new U.b(j),new U.X(l,h,o)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
o="The "+p+" learns of the "
h=$.aX
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.u
o=o+l+" explains that the "
j=$.z
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.ci+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.R("Protect the Beams",!1,[new U.b(l),new U.b(o),new U.b(m),new U.X(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.u
h=h+i+" on "+$.aX+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.f9+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a8("One Degree of Separation",!1,[new U.b(h),new U.b(m),new U.b(i)],H.a([],k),R.fo(),!1,!1,new Y.c1("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.u+" on "
m=$.aX
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.f9+" is now more popular with your friends than you are."
s.i(0,new R.a8("Steal The Friends",!1,[new U.b(i),new U.b(h),new U.b(m)],H.a([],k),R.uv(),!1,!1,new Y.c1("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
m="The "+p+"  and the "
h=$.eE
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.z
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.R("Pale Shipping Dungeon",!1,[new U.b(m),new U.X(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.D(C.r)+".",o)],H.a([],k),R.eD(),!1,!1,new Y.jD(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ax)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.be,$.L)
t.i(0,$.c8,$.m)
r="In the wake of the defeat of the "+$.z+" it becomes really how isolated the individual "
q=$.u
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.n
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.f9+" to kick your ass, but luckily they have several."
t.i(0,new R.a8("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.eb(),!1,!1,new Y.c1("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
o=$.n
q="The "+o+" learns that two prominent "
p=$.u
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.z
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.ci+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.M+"ing. "
t.i(0,new R.R("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(m),new U.X(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.av)}}
T.kO.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Pan's Pipe",H.a([$.a7,$.W,$.bo,$.H],s),null,!1,"Smonkin Weeds Pipe")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skeleton Key",H.a([$.b9,$.H],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.a2,$.C,$.bo,$.H],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Jet Pack",H.a([$.aF,$.C,$.aS,$.H,$.a_],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.c8,$.m)
q.i(0,$.f7,$.k)
q.i(0,$.b2,$.m)
p=$.n
o="The "+p+" tries posting a letter through the "
n=$.ae
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.z
o=o+m+" has screwed with the mail system, crippling the "
l=$.u
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.ci+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.Fp
i=[U.b]
q.i(0,new R.R("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.X(j,p,l)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.f
m.i(0,new X.G(s,q,null),$.av)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.be,$.k)
s.i(0,$.f7,$.m)
s.i(0,$.b2,$.m)
s.i(0,$.bP,$.m)
s.i(0,$.c8,$.m)
p=$.n
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.ae
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.u
k=l+k+" fields. The "+k+"s "+$.M+"ing is so joyful it's literally deafening. "
l=$.z
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.ci+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.R("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.X(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.av)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.ce,$.k)
t.i(0,$.lQ,$.k)
t.i(0,$.f7,$.L)
t.i(0,$.c8,$.L)
r=$.n
q="The "+r+" is chilling in a "+$.u+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.z
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ae
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aX+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.ci+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.R("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.X(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.av)}}
M.fS.prototype={
eq:function(a){var t=this.a
if(!t.a1(0,a))return
return t.n(0,a)}}
Y.kQ.prototype={
P:function(a,b){var t=0,s=P.bi(),r,q,p,o,n,m,l,k,j,i
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:q=J.e3(b,"\n")
p=P.B
o=P.cG(p,p)
n=P.cG(p,[P.eG,P.B])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.de(k).bg(k).length===0)m=null
else if(m==null)m=C.c.bg(k)
else{j=C.c.bg(k)
i=C.c.M(m,0,C.c.e5(m,$.$get$vo())+1)+j
o.i(0,i,m)
if(!n.a1(0,m))n.i(0,m,P.a6(null,null,null,p))
J.y_(n.n(0,m),i)}}r=new M.fS(o,n)
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$aseJ:function(){return[M.fS]},
$asc9:function(){return[M.fS,P.B]}}
K.kT.prototype={
cN:function(a,b){var t,s,r
t=this.a
C.b.d_(t)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.bV)(t),++r)t[r].cN(0,b)}}
K.fj.prototype={
cN:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=this.a
s=this.c
r=this.b
q=document
p=q.createElement("div")
p.classList.add("MemoNewspost")
o=q.createElement("div")
n=W.ml(null,t.a,null)
n.classList.add("MemoNewspostIcon")
m=n.style;(m&&C.L).eD(m,"float","left","")
l=q.createElement("span")
C.a1.cB(l,"beforeend",r,C.o,null)
l.classList.add("MemoNewspostText")
r=l.style
m=t.b.hS()
r.color=m
k=q.createElement("span")
s.toString
k.textContent=C.a.D(H.ut(s))+"-"+C.c.cF(C.a.D(H.jI(s)),2,"0")+"-"+C.c.cF(C.a.D(H.jH(s)),2,"0")+": "
k.classList.add("MemoDate")
j=W.vj(null)
t=t.c
j.textContent=t+" posted: "
j.href="bio.html?staff="+t
j.target="_blank"
j.classList.add("MemoNewspostName")
j.appendChild(n)
o.appendChild(k)
o.appendChild(j)
p.appendChild(o)
p.appendChild(l)
b.appendChild(p)},
av:function(a,b){var t,s
t=b.gfZ()
s=this.c
t=C.a.al(P.zm(0,0,0,t.a-s.a,0,0).a,1e6)
if(t===0)return C.c.af(b.a.c,"j")?-1:1
return t},
eP:function(a,b){var t=J.e3(a,":")
if(t.length<2)return
this.c=P.zl(J.kt(t[0]))
if(0>=t.length)return H.w(t,0)
C.b.ak(t,t[0])
this.b=C.b.b6(t,":")
K.vr().a.push(this)},
$isbv:1,
$asbv:function(){return[K.fj]},
gfZ:function(){return this.c}}
A.kW.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.N,$.ab,$.b8,$.ca],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.N,$.b8],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Beagle Puss",H.a([$.b3,$.b8],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.aS,$.a2,$.b8],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Banana",H.a([$.aE,$.b8],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fake Flower",H.a([$.Q,$.b8],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.C,$.b8],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.m)
q.i(0,$.cy,$.k)
q.i(0,$.bP,$.m)
p=$.n
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.u
o=o+n+"s are too scared to even "+$.M+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.z+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.i(0,new R.a1("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aR)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.e7,$.L)
s.i(0,$.bP,$.k)
s.i(0,$.cy,$.k)
s.i(0,$.cB,$.k)
o=$.n
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aX
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.u
k=k+j+"s let out a braying "+$.M+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.Fs
s.i(0,new R.a1("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.y(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aR)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cE,$.L)
t.i(0,$.c7,$.m)
t.i(0,$.cy,$.k)
t.i(0,$.bP,$.m)
t.i(0,$.it,$.m)
r=$.n
q="The "+r+"  is approached by a Crafty "
o=$.u
q=q+o+" who offers them a magical "
n=$.ae
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.M
t.i(0,new R.a1("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aR)}}
S.bH.prototype={
D:function(a){return H.D(new H.dY(H.km(this),null))+": "+this.c},
gL:function(a){return this.c}}
S.ia.prototype={}
S.md.prototype={}
M.l7.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Can of Spray Paint",H.a([$.aJ,$.C],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.N,$.as,$.b8,$.aI],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.tP,$.C,$.aH],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.N,$.as,$.aI],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.aJ,$.ay,$.N],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.as,$.N],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.as,$.aN,$.ay],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Paint Set",H.a([$.aJ,$.as],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shaving Cream",H.a([$.aF,$.as,$.C],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Classy Suit",H.a([$.Q,$.as],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.N,$.as,$.aI],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d3,$.m)
q.i(0,$.cD,$.k)
q.i(0,$.b2,$.m)
p=$.n
o="The "+p+" visits a beautiful "
n=$.ae
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.u
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.z+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.M+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.i(0,new R.a1("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.r
m.i(0,new X.G(s,q,null),$.aR)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.e7,$.L)
s.i(0,$.bP,$.m)
s.i(0,$.cy,$.L)
s.i(0,$.be,$.m)
s.i(0,$.cB,$.k)
o=$.n
n="The "+o+" finds a troupe of dejected looking "
l=$.u
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aX
l=l+n+" "
k=$.ae
s.i(0,new R.a1("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.M+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.aR)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.he,$.L)
t.i(0,$.cz,$.L)
t.i(0,$.f2,$.L)
t.i(0,$.c7,$.L)
t.i(0,$.be,$.m)
t.i(0,$.b2,$.m)
r=$.n
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.M
q=q+o+"ingworth, "
n=$.u
q=q+n+" heiress to the "+$.ae+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.Fi
t.i(0,new R.a1("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.y(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.aR)}}
T.lf.prototype={}
V.lh.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Trendy Fabric",H.a([$.aJ,$.Q],s),null,!1,"Weird Tasting Candy Paper")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Necklace",H.a([$.aJ,$.tE,$.hm],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sewing Needle",H.a([$.C,$.tK,$.aZ],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jk
r=A.i("Broom",H.a([r,$.W,$.ab,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rolling Pin",H.a([$.W,$.tS,$.ab],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.Q,$.b7,$.bo,$.aJ,$.e9],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yarn Ball",H.a([$.aJ,$.Q],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Refrigerator",H.a([$.aK,$.ca,$.C,$.bp],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Photo Album",H.a([$.aJ,$.N],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Cubes",H.a([$.bp],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.C,$.aF,$.ab,$.ca,$.tD],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Failed Dish",H.a([$.bL],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dr Pepper BBQ Sauce",H.a([$.bL],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Potted Plant",H.a([$.aJ,$.bQ,$.b5],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chicken Leg",H.a([$.aE,$.bf,$.b9],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juicy Steak",H.a([$.aE,$.bf],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Wedding Cake",H.a([$.aJ,$.aE,$.b0],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cB,$.m)
q.i(0,$.cC,$.m)
q.i(0,$.cz,$.L)
p=$.n
o="The "+p+" is visited by a Beautiful "
n=$.u
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ae
l=[U.b]
q.i(0,new R.a1("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.M+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.y(),!1,!1,new Y.ic("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.G(s,q,null),$.aR)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cz,$.k)
s.i(0,$.bP,$.m)
s.i(0,$.f2,$.k)
s.i(0,$.dy,$.m)
s.i(0,$.be,$.k)
p=$.n
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ae
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.u
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.M+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.Fq
s.i(0,new R.a1("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.y(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.aR)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.em,$.k)
t.i(0,$.be,$.m)
t.i(0,$.dw,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.iz,$.k)
r=$.n
q="The "+r+" finds a loom, and a Wizened "
p=$.u
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ae
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.M+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.a1("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.aR)}}
U.li.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aI,$.a2,$.N,$.aM,$.H,$.a_],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Egg Timer",H.a([$.aN,$.bo,$.H,$.aM],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skull Timer",H.a([$.b9,$.bo,$.H,$.aM],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poison Flask",H.a([$.b3,$.H,$.bL],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.b3,$.H,$.bp,$.aM,$.bg,$.bS,$.b4],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Obituary",H.a([$.aK,$.b4,$.aM,$.N,$.H],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.dP,$.k)
q.i(0,$.d2,$.m)
q.i(0,$.f7,$.L)
q.i(0,$.be,$.L)
q.i(0,$.c0,$.m)
p=$.n
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.u
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ae
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.z
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.ci+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.i(0,new R.R("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.X(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.dP,$.k)
s.i(0,$.d2,$.m)
s.i(0,$.er,$.ax)
s.i(0,$.en,$.m)
s.i(0,$.tg,$.m)
s.i(0,$.cT,$.m)
s.i(0,$.d2,$.m)
s.i(0,$.be,$.L)
s.i(0,$.c0,$.m)
s.i(0,$.dx,$.m)
p=$.n
o="The "+p+" has found a group of Violent "
m=$.u
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aX
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.M+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.z
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.ci+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.R("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.X(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.eC(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ae
p=p+l+"s alike. "
l=$.u+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.z
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.ci+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.R("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.X(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.c0,$.k)
t.i(0,$.vM,$.ax)
t.i(0,$.hb,$.L)
r=$.n
q="The "+r+" finds a small dungeon bearing the image of "
p=$.z
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.u+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.R("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.X(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.eC(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
k=$.n
p="The "+k+" learns from one of their "
r=$.u
p=p+r+"s that there is an ancient prophecy of a "
l=$.aX
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ae
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.z
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.ci+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.Fh
t.i(0,new R.R("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.X(o,k,q)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.av)}}
Z.lj.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Dream Diary",H.a([$.N,$.aI,$.H],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aN,$.bo,$.ab,$.H,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aN,$.bo,$.H],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.em,$.m)
q.i(0,$.dw,$.k)
q.i(0,$.b2,$.m)
q.i(0,$.iz,$.m)
p=$.u
o="A "+p+" child tugs on the "
n=$.n
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ae
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.z
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.M+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wE
k=[U.b]
q.i(0,new R.R("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.X(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=this.f
l.i(0,new X.G(s,q,null),$.av)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.ce,$.m)
s.i(0,$.dw,$.k)
s.i(0,$.d4,$.m)
s.i(0,$.c6,$.m)
s.i(0,$.dM,$.m)
s.i(0,$.cy,$.k)
p=$.n
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.u
n=n+m+"s are even starting to snigger and "
j=$.M
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.z
s.i(0,new R.R("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.X("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.G(q,s,null),$.av)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.d3,$.k)
t.i(0,$.ha,$.m)
t.i(0,$.b2,$.m)
t.i(0,$.c6,$.k)
t.i(0,$.dM,$.k)
t.i(0,$.dw,$.m)
r=$.n
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.z
t.i(0,new R.R("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aX+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.u+" is "+$.M+"ing in reverse. Another is in a "+$.ae+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.X("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.G(s,t,null),$.av)}}
X.iq.prototype={}
X.i9.prototype={
$S:function(){return{func:1,v:true,args:[[P.q,M.h7]]}}}
M.h7.prototype={}
U.lL.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Fluthulu Poster",H.a([$.Q,$.b7,$.b4,$.bq],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Scalemate",H.a([$.Q,$.b7,$.b4],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aK,$.aN,$.b9,$.ff,$.aw],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aN,$.wa,$.et,$.aw],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aN,$.bS,$.bf,$.b4],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.aI,$.N,$.aO,$.b4],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.N,$.a3,$.ab],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.N,$.a3,$.ab],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.N,$.a3,$.bS,$.b4,$.bq],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aK,$.aG,$.a3,$.ab,$.aw],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aK,$.mx,$.a3,$.ab,$.aw],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.h8,$.ax)
q.i(0,$.cC,$.m)
q.i(0,$.c8,$.m)
q.i(0,$.cE,$.L)
p=$.n
o="The "+p+" learns of a Beautiful "
n=$.u
o=o+n+" who has been kidnapped by the vial "
m=$.z
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ae
j=[U.b]
q.i(0,new R.a1("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aR)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.k)
s.i(0,$.cT,$.k)
s.i(0,$.iv,$.m)
s.i(0,$.c0,$.k)
s.i(0,$.er,$.k)
s.i(0,$.hd,$.m)
o=$.n
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.u
s.i(0,new R.a1("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aR)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.c7,$.k)
t.i(0,$.iy,$.m)
t.i(0,$.c0,$.k)
t.i(0,$.dN,$.m)
t.i(0,$.f3,$.m)
t.i(0,$.tk,$.m)
r=$.n
q="The "+r+" finds a group of three "
o=$.u
q=q+o+"s "
n=$.M
t.i(0,new R.a1("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aR)}}
N.a5.prototype={
D:function(a){return H.D(new H.dY(H.km(this),null))+": "+H.D(this.b)}}
O.c9.prototype={
b_:function(a){var t=0,s=P.bi(),r,q=this,p
var $async$b_=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.cm(q.aQ(a),$async$b_)
case 3:r=p.P(0,c)
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$b_,s)}}
O.dt.prototype={
b5:function(a){var t=0,s=P.bi(),r
var $async$b5=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$b5,s)},
cv:function(a){var t=0,s=P.bi(),r,q=this
var $async$cv=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.yU([J.v9(a)],q.aO(0),null))
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$cv,s)},
aQ:function(a){var t=0,s=P.bi(),r,q=this,p,o
var $async$aQ=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:p=P.bh
o=new P.bj(0,$.aD,null,[p])
W.vT(a,null,q.aO(0),null,null,"arraybuffer",null,null).aR(new O.kK(new P.e_(o,[p])))
r=o
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$aQ,s)},
$asc9:function(a){return[a,P.bh]}}
O.kK.prototype={
$1:function(a){this.a.aA(0,H.kn(J.yb(a),"$isbh"))},
$S:function(){return{func:1,args:[W.e8]}}}
O.eJ.prototype={
b5:function(a){var t=0,s=P.bi(),r,q,p,o,n
var $async$b5=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:a.toString
q=H.cP(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hJ(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$b5,s)},
aQ:function(a){var t=0,s=P.bi(),r
var $async$aQ=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:r=W.tt(a,null,null)
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$aQ,s)},
$asc9:function(a){return[a,P.B]}}
O.io.prototype={
aQ:function(a){var t=0,s=P.bi(),r
var $async$aQ=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$aQ,s)},
b5:function(a){return H.bb("Element format doesn't read from buffers")},
$asc9:function(a){return[a,P.B]}}
V.m0.prototype={
aO:function(a){return"font/opentype"},
P:function(a,b){var t=0,s=P.bi(),r
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:t=3
return P.cm(A.hv("scripts/Rendering/text/opentype.min.js",!1),$async$P)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$asdt:function(){return[R.hf]},
$asc9:function(){return[R.hf,P.bh]}}
Z.ip.prototype={}
E.iD.prototype={}
E.nE.prototype={}
E.J.prototype={
D:function(a){var t="["+J.cL(this.a)+" x "+H.D(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fM.prototype={
D:function(a){var t="[(Random from "+P.tW(this.d,"(",")")+") x "+H.D(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.i8.prototype={
D:function(a){return"[Stats assigned from player Interests x"+H.D(this.b)+"]"}}
Y.m6.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.aI,$.P,$.N,$.a_,$.ho],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aN,$.P,$.aM],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Exposed Thread",H.a([$.Q,$.P,$.aM],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Teetering Plate",H.a([$.jn,$.P,$.aM],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.lS,$.m)
t.i(0,$.c8,$.k)
t.i(0,$.dx,$.L)
t.i(0,$.di,$.k)
r=$.u
q="An excited "+r+" runs up to the "
p=$.n
q=q+p+" and starts to "
o=$.M
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aX
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.ae
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.z
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.i(0,new R.R("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.X(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
o=$.n
t.i(0,new R.a8("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.z+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.u+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.y(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.u
j="Now that the "+o+"s are free from the reign of "+$.z+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.n
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.M
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aX+" Quest Online: The "+$.ae+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.i(0,new R.a8("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.n
p=p+o+" shows the "
r=$.u
t.i(0,new R.bA("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.M+"s in time to stop them.    ")],H.a([],i),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Y.m7.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Sherpa Parka",H.a([$.bp,$.P,$.cg],s),"Clearly the best class uses this.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Guide Book",H.a([$.a_,$.bp,$.aI,$.N,$.P,$.a0],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Whistle",H.a([$.C,$.P,$.aS],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Announcement System",H.a([$.C,$.P,$.a2,$.a0],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.lS,$.k)
t.i(0,$.c8,$.k)
t.i(0,$.dx,$.m)
t.i(0,$.di,$.k)
r="Now that the "+$.z+" is out of the way, a group of "
q=$.u
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.n
o=[U.b]
t.i(0,new R.a8("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.M+", but they are happy.")],H.a([],o),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.n
t.i(0,new R.bA("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.u+" "+$.M+"s in time to stop them.    ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.bM)}}
T.m8.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Doll",H.a([$.jn,$.aJ,$.aA,$.H],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Puppet",H.a([$.W,$.aA,$.H,$.a_,$.b4],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.mC,$.H],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.N,$.H,$.aO],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shades",H.a([$.ay,$.b3,$.H],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.en,$.L)
q.i(0,$.ep,$.k)
q.i(0,$.bP,$.m)
p=$.n
o="The "+p+", guided by a "+$.u+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.z
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.ci+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.i(0,new R.R("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.X(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=$.n
p="The "+j+" finds a Violent "
l=$.u
p=p+l+". A Magical Talking "
k=$.ae
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.z
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.R("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.X(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.uv(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h=this.f
h.i(0,new X.G(s,q,null),$.av)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cy,$.k)
s.i(0,$.iv,$.k)
s.i(0,$.f7,$.m)
s.i(0,$.c0,$.k)
s.i(0,$.cz,$.m)
s.i(0,$.dx,$.L)
p=$.n
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ae
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.z
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.ci+". The "+p+" is victorious. "
s.i(0,new R.R("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.X(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j="Now that the "+$.z+" has been defeated, a Copy "
p=$.n
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.u
j=j+k+"s "
l=$.M
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.f9+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a8("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.eb(),!1,!1,new Y.c1("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.n
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.z
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.R("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.X(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.eC(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h.i(0,new X.G(q,s,null),$.av)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.iu,$.k)
t.i(0,$.cz,$.k)
t.i(0,$.lR,$.k)
t.i(0,$.f2,$.m)
t.i(0,$.hd,$.k)
t.i(0,$.cC,$.m)
t.i(0,$.ep,$.L)
r=$.n
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.u
t.i(0,new R.R("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.M+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aX+" laws put in place by "+$.z+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.n
p="The "+r+" finds a weeping Broken Hearted "
q=$.u
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aX
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.M
t.i(0,new R.a8("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hK(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
q=$.n
m="The "+q+"  and the "
r=$.eE
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.z
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.R("Flushed Shipping Dungeon",!1,[new U.b(m),new U.X(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.D(C.r)+".",n)],H.a([],i),R.eD(),!1,!1,new Y.iB(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ax)
n=$.n
r="The "+n+"  and the "
q=$.eE
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.z
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.R("Pitched Shipping Dungeon",!1,[new U.b(r),new U.X(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.D(C.r)+".",m)],H.a([],i),R.eD(),!1,!1,new Y.jF(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ax)
h.i(0,new X.G(s,t,null),$.aR)}}
B.m9.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Family Ashes",H.a([$.aK,$.aF,$.P,$.aM,$.bX],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.a_,$.N,$.P,$.aM,$.mB],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grooming Guide",H.a([$.aI,$.P,$.as],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Powered Attorney",H.a([$.w0,$.P,$.mt,$.mB],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Executer's Ax",H.a([$.tw,$.P,$.aH,$.mB],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.ce,$.m)
r=$.z
q="With the death of the "+r+", it now falls to the "
p=$.n
o=[U.b]
t.i(0,new R.a8("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.u+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
r="The "+$.z+" has released the frogs into the "
p=$.n
t.i(0,new R.bA("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.M+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.bM)}}
V.ma.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Hippo",H.a([$.aS,$.aW,$.H],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ranting",H.a([$.mu,$.aS,$.fe],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Vent",H.a([$.C,$.tA],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Confusion","Ranting","Cold","Quiet"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.dM,$.L)
t.i(0,$.d3,$.m)
t.i(0,$.th,$.m)
t.i(0,$.ha,$.m)
r=$.n
q="The "+r+" hears the screaming voice of the "
p=$.z
q=q+p+", and when they walk into a consort village, a "
o=$.u
q=q+o+" "
n=$.M
q=q+n+"s about how loud and annoying the "+p+" is."
n="The "+r+" sees another "+o+". The "+o+" also "+n+"s about how loud the "+p+" is."
o="The noise finally gets to The "+r+", and they vow to slay the "+p+"."
m="The "+r+" steps into the "+p+"'s lair, The "+r+" demands the noise to stop, so they challenge their Denizen to a duel. "
l="The "+p+" is defeated, and the noise finally stops."
t.i(0,new R.R("Stop the Screamening",!1,[new U.b(q),new U.b(n),new U.b(o),new U.X(m,"The "+r+" is defeated, and the "+p+" screeches more.",l)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.av)}}
X.mc.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Wand",H.a([$.W,$.H,$.a3,$.aW],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Angel Feather",H.a([$.aW,$.bz,$.H,$.b_,$.a7,$.a_,$.a3],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bR,$.tH,$.H,$.a3,$.b8,$.aW],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candle",H.a([$.aW,$.b_,$.H,$.aF],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aN,$.b_,$.H,$.aW],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.tf,$.k)
q.i(0,$.cC,$.m)
q.i(0,$.b2,$.k)
q.i(0,$.c6,$.k)
p=$.n
o="The "+p+" is just minding their own business when they see a wizened "
n=$.u
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.M+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.z
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ae
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.Fk
i=[U.b]
q.i(0,new R.R("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.X(k,p,j)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.k)
s.i(0,$.it,$.m)
s.i(0,$.d4,$.k)
p=$.n
o="The "+p+"  is approached by a Crafty "
m=$.u
o=o+m+" who offers them a magical "
l=$.ae
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.z
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.R("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.X(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.dy,$.L)
t.i(0,$.cD,$.k)
t.i(0,$.c6,$.k)
r=$.n
q="The "+r+" finds a grey town of despondant "
p=$.u
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.z
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ae
t.i(0,new R.R("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.X("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.n
o="The "+r+" discovers a group of "
p=$.u
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.z
t.i(0,new R.R("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.X("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.hK(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n.i(0,new X.G(s,t,null),$.av)}}
X.mh.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Footstick",H.a([$.dj,$.P,$.jm,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Cheating Guide",H.a([$.aI,$.P,$.ho,$.N],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of Shogun",H.a([$.Q,$.P,$.e9,$.mA,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Macrobots",H.a([$.tR,$.P,$.mt],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cE,$.k)
t.i(0,$.d4,$.k)
t.i(0,$.dw,$.k)
t.i(0,$.di,$.k)
t.i(0,$.em,$.k)
t.i(0,$.dM,$.k)
t.i(0,$.hc,$.m)
r=$.n
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.u
o=[U.b]
t.i(0,new R.a1("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.uw(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.z
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.n
n=q+" tries to manually separate the turtles by catching them with a net and "+$.ci+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.M
t.i(0,new R.R("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.X(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wO(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
q=$.n
t.i(0,new R.a1("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.A)
q="A wizened "+$.u+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.n
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.z
t.i(0,new R.R("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
m=$.n
t.i(0,new R.R("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.z+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
m="A wizened "+$.u+" tells the "
r=$.n
t.i(0,new R.a8("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.u+" that is also a SHOGUN minion tells the "
m=$.n
t.i(0,new R.a8("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wP(),!1,!1,new Y.c1("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
m=$.n
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a8("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.z
m="The "+n+" explains um. What? Where did the "
q=$.n
t.i(0,new R.bA("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.av)}}
Q.mi.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Yardstick",H.a([$.dj,$.P,$.jm,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURB Hacking Guide",H.a([$.aI,$.P,$.ho,$.N],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Body Pillow of Hussie",H.a([$.Q,$.P,$.e9,$.mA,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t}}
Q.mm.prototype={
b_:function(a){var t=0,s=P.bi(),r,q,p
var $async$b_=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:q=W.ml(null,a,null)
p=new W.hV(q,"load",!1,[W.T])
t=3
return P.cm(p.gag(p),$async$b_)
case 3:r=q
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$b_,s)},
$asdt:function(){return[W.fc]},
$asc9:function(){return[W.fc,P.bh]}}
Q.nV.prototype={
aO:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bi(),r,q=this,p,o,n
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.cm(q.cv(b),$async$P)
case 3:p=n.ml(null,d,null)
o=new W.hV(p,"load",!1,[W.T])
t=4
return P.cm(o.gag(o),$async$P)
case 4:r=p
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)}}
Q.nS.prototype={
aO:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bi()
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:throw H.l("Read NYI")
return P.bl(null,s)}})
return P.bm($async$P,s)},
$asdt:function(){return[Q.jE]},
$asc9:function(){return[Q.jE,P.bh]}}
B.hk.prototype={
G:function(){var t,s
t=Q.F(null,null,A.Y)
s=A.i("Perfectly Generic Object",H.a([],[G.V]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d2,$.k)
q.i(0,$.be,$.L)
q.i(0,$.dP,$.k)
q.i(0,$.c0,$.m)
q.i(0,$.e6,$.L)
p=$.n
o="The "+p+" learns that all of the local "
n=$.u
m=[U.b]
q.i(0,new R.a1("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.G(s,q,null),$.aR)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.f4,$.k)
s.i(0,$.eo,$.L)
s.i(0,$.eq,$.m)
s.i(0,$.cU,$.k)
s.i(0,$.ce,$.L)
p=$.n
o="The "+p+" learns that all of the local "
l=$.u
s.i(0,new R.a1("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.aR)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.be,$.L)
t.i(0,$.c8,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.u
t.i(0,new R.a1("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
r="The "+p+" learns that all of the local "
q=$.u
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.M
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.uu(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
n.i(0,new X.G(s,t,null),$.aR)},
D:function(a){return this.ch},
gL:function(a){return this.ch}}
A.Y.prototype={
av:function(a,b){var t=b.gbu()-this.gbu()
if(t>0)t=1
else if(t<0)t=-1
return C.d.b0(t)},
gh2:function(){var t,s,r,q,p,o
t=H.a([],[P.B])
s=new A.jJ(null,null)
s.cX(this.f.a)
if(this.r===0)return t
r=P.dk(G.zg(this.f),!0,G.V)
C.b.d0(r,new A.mI())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bV)(r),++p){o=r[p]
if(!(o instanceof G.at||o.gdT().length===0))t.push(" "+Y.Hi(s.hB(o.gdT())))}return t},
gbu:function(){var t,s,r
for(t=this.f,s=new P.dD(t,t.r,null,null,[null]),s.c=t.e,r=0;s.J();)r+=s.d.gbu()
return r},
gfT:function(){var t=this.f
return new H.hS(t,new A.mH(),[H.O(t,0)])},
ghd:function(){var t,s,r,q,p
for(t=this.gh2(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bV)(t),++q)r+=t[q]+" "
return r+this.d},
D:function(a){return this.ghd()},
N:function(a,b,c,d,e){var t,s,r
t=P.u7(b,null)
this.f=t
if(t.a===0)t.h(0,$.fe)
s=P.u7(this.gfT(),null)
for(t=new P.dD(s,s.r,null,null,[null]),t.c=s.e;t.J();){r=t.d
this.f.bL(0,r.geF())
this.f.ak(0,r)}$.$get$wu().push(this)},
$isbv:1,
$asbv:function(){return[A.Y]}}
A.mI.prototype={
$2:function(a,b){return a.ge9()-C.a.b0(b.ge9())},
$S:function(){return{func:1,args:[G.V,G.V]}}}
A.mH.prototype={
$1:function(a){return a instanceof G.e},
$S:function(){return{func:1,args:[G.V]}}}
Z.mP.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Juice Box",H.a([$.N,$.H,$.aW,$.aw],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shogun Body Pillow",H.a([$.e9,$.b7,$.H],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.dM,$.ax)
t.i(0,$.cC,$.m)
t.i(0,$.bP,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.c6,$.k)
r=$.n
q="The "+r+" sees a floating sentient "
p=$.ae
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.u+" notices it, and starts "+$.M+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.z
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.b]
t.i(0,new R.R("Talk to your Juice entity",!1,[new U.b(q),new U.b(o),new U.b(n),new U.X(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
r="The "+p+" is greeted by a young adolescent "
m=$.u
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.z
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.M
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.i(0,new R.R("Be The Wingman",!1,[new U.b(r),new U.b(l),new U.b(n),new U.X(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=$.n
m="The "+j+" arrives to find a consort city in total ruins! A nearby "
q=$.u
m=m+q+" informs them that "
p=$.z
m=m+p+" has somehow grown themselves to massive proportions and is wrecking havock all over the city. The "+j+" offers to help take care of it, but the "+q+" informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."
o="Inside the bunker, the "+j+" is greeted by another "+q+" in a scientist\u2019s robe. He explains to them that they have been working diligently on a giant "+q+" mech that would be able to take "+p+" down, and that preparations are almost complete. The "+j+" agrees to pilot the mech to stop the Denizen."
n="Sitting inside the controls of the giant "+q+" robot, the "+j+" finds themselves going up to "+p+" and punching them square in the face! "+p+" quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny "+q+"s watch in awe."
l="With one well-timed ROBO-PUNCH, the "+j+" deals the finishing blow to "+p+", as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The "+j+" hops out of the mech as they and "+p+" prepare to fight each other in their true sizes."
q="The "+j+" has defeated their denizen! The "+q+"s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success."
t.i(0,new R.R("Pilot The Mech",!1,[new U.b(m),new U.b(o),new U.b(n),new U.X(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.av)}}
N.mQ.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Gavel",H.a([$.W,$.tF],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Caution Tape",H.a([$.aN,$.bg],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.Q,$.aJ],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mystery Novel",H.a([$.N,$.aI],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bQ,$.aE,$.bp],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.N,$.aI,$.ay],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Handcuffs",H.a([$.aK,$.C,$.bg],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.h8,$.L)
q.i(0,$.c7,$.m)
q.i(0,$.cD,$.L)
p=$.n
o="The "+p+" finds an elaborate courtroom full of "+$.M+"ing "
n=$.u
m=[U.b]
q.i(0,new R.a1("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ae+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.G(s,q,null),$.aR)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.k)
s.i(0,$.dx,$.m)
s.i(0,$.cU,$.m)
p=$.n
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.u
l=o+l+" yells 'Stop that thief' in betwen "+$.M+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ae+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.Fg
s.i(0,new R.a1("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.y(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.aR)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.c7,$.k)
t.i(0,$.ce,$.m)
t.i(0,$.cT,$.L)
t.i(0,$.er,$.m)
t.i(0,$.en,$.m)
t.i(0,$.f5,$.m)
t.i(0,$.iw,$.m)
r=$.n
q="The "+r+" finds a crowd of "
p=$.M
q=q+p+"ing "
o=$.u
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.Ft
t.i(0,new R.a1("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.y(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.aR)}}
S.mS.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Shining Armor",H.a([$.aK,$.mE,$.P,$.ff],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Excalibur",H.a([$.a_,$.mE,$.P,$.aZ,$.aH,$.et],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Noble Steed",H.a([$.C,$.P,$.bf,$.aA],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aK,$.ff,$.P,$.mE],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.lP,$.k)
t.i(0,$.dO,$.k)
t.i(0,$.e7,$.k)
t.i(0,$.f5,$.k)
t.i(0,$.h8,$.m)
r="The "+$.z+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.M+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q=$.z
r="Now that the "+q+" is defeated, the "
o=$.u
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.n
t.i(0,new R.a8("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.aX
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.z
n=n+q+". A Learned "+$.u+" explains that it can only be defeated by the Legendary "
r=$.ae
n=n+r+" Blade. The "
m=$.n
t.i(0,new R.a8("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
r="The volcanos of the land are weirdly active after the defeat of the "+$.z+". One begins to erupt near a "
m=$.u
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.M+"s, but not really doing anything to evacuate or save anyone. The "
o=$.n
t.i(0,new R.a8("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Q.mT.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Dream Diary",H.a([$.N,$.aI,$.H],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aN,$.bo,$.ab,$.H,$.a_],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aN,$.bo,$.H],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.em,$.m)
q.i(0,$.dw,$.k)
q.i(0,$.b2,$.m)
q.i(0,$.iz,$.m)
p=$.u
o="A "+p+" child tugs on the "
n=$.n
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ae
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.z
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.M+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wE
k=[U.b]
q.i(0,new R.R("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.X(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=this.f
l.i(0,new X.G(s,q,null),$.av)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.ce,$.m)
s.i(0,$.dw,$.k)
s.i(0,$.d4,$.m)
s.i(0,$.c6,$.m)
s.i(0,$.dM,$.m)
s.i(0,$.cy,$.k)
p=$.n
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.u
n=n+m+"s are even starting to snigger and "
j=$.M
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.z
s.i(0,new R.R("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.X("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.G(q,s,null),$.av)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.d3,$.k)
t.i(0,$.ha,$.m)
t.i(0,$.b2,$.m)
t.i(0,$.c6,$.k)
t.i(0,$.dM,$.k)
t.i(0,$.dw,$.m)
r=$.n
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.z
t.i(0,new R.R("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aX+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.u+" is "+$.M+"ing in reverse. Another is in a "+$.ae+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.X("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.G(s,t,null),$.av)}}
K.mV.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Creeping Vine",H.a([$.W,$.H,$.b5,$.aA],s),null,!1,"Sentient Plant Tentacles")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lollipop",H.a([$.tz,$.H,$.b0],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Golem",H.a([$.aK,$.aG,$.H,$.aA],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bX,$.H,$.b0],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.b3,$.H,$.b0,$.a_,$.a3],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Homunculus",H.a([$.bf,$.H,$.aA],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.c8,$.k)
q.i(0,$.be,$.k)
q.i(0,$.h9,$.L)
q.i(0,$.b2,$.m)
q.i(0,$.lS,$.m)
q.i(0,$.cE,$.L)
p=$.n
o="The "+p+" finds a village of compliant "
n=$.u
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.M+"ing in panic. Don't upset "
m=$.z
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.i(0,new R.R("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.X(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c8,$.k)
s.i(0,$.cz,$.k)
s.i(0,$.cE,$.L)
s.i(0,$.b2,$.m)
o=$.n
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.u
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.z
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.R("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.X(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.d2,$.k)
t.i(0,$.be,$.L)
t.i(0,$.dP,$.k)
t.i(0,$.c0,$.m)
t.i(0,$.e6,$.m)
t.i(0,$.ir,$.m)
r="Drawn by wailing and "+$.M+"ing, the "
q=$.n
r=r+q+" enters a rotting "
o=$.u
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.z
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.R("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.X(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.av)}}
G.mW.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("FAQ",H.a([$.a2,$.H,$.a0,$.bF],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aN,$.H,$.b_,$.a2,$.bF],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.H,$.b_,$.bF,$.a_,$.mx],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.tG,$.H,$.ab],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.tO,$.H],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.b5,$.H,$.b_,$.bF],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("8-Ball",H.a([$.b3,$.H,$.aA],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ix,$.k)
q.i(0,$.em,$.m)
q.i(0,$.dN,$.k)
q.i(0,$.ep,$.k)
p=$.n
o="The "+p+" is searching for the lair of "
n=$.z
o=o+n+" when some local "
m=$.u
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.b]
q.i(0,new R.R("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.X(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.n
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.M+"ing "+$.u+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.z
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.R("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.X(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.f
m.i(0,new X.G(s,q,null),$.av)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c8,$.m)
s.i(0,$.b2,$.m)
s.i(0,$.dy,$.k)
s.i(0,$.lN,$.k)
s.i(0,$.eo,$.k)
s.i(0,$.it,$.k)
p=$.n
o="The "+p+" walks into a "
n=$.u
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ae
o=o+l+", but "
k=$.z
o=o+k+" has hoarded all of the planets "
j=$.aX
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.M+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.R("The Candlestick Taker",!1,[new U.b(l),new U.b(o),new U.b(h),new U.X(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.uv(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.n
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.u
j=j+k+" explains that the "
h=$.z
s.i(0,new R.R("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.b("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.M+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.X("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.av)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.hb,$.m)
q.i(0,$.be,$.m)
q.i(0,$.f6,$.k)
q.i(0,$.b2,$.m)
q.i(0,$.cD,$.k)
p="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.n
p=p+o+" sets up a wiki and settles in to help the "
n=$.u
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.f9+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a8("Moderate the Wiki",!1,[new U.b(p),new U.b(n),new U.b(o)],H.a([],i),R.eb(),!1,!1,new Y.c1("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
l="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.n
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.u
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.f9+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a8("Create the Wiki",!1,[new U.b(l),new U.b(n),new U.b(o)],H.a([],i),R.eC(),!1,!1,new Y.c1("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.u
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.n
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.z
q.i(0,new R.R("Shed the Light",!1,[new U.b(o),new U.b(p),new U.b(l),new U.X(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,q,null),$.av)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.dN,$.k)
t.i(0,$.ix,$.k)
t.i(0,$.ep,$.m)
t.i(0,$.cC,$.m)
t.i(0,$.tj,$.m)
t.i(0,$.c0,$.L)
t.i(0,$.e7,$.L)
t.i(0,$.bP,$.m)
t.i(0,$.cy,$.L)
t.i(0,$.be,$.m)
t.i(0,$.cB,$.k)
s=$.n
r="The "+s+" is approached by a Fast Talking "
p=$.u
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.ae
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.M+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.z
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.R("Be the Star",!1,[new U.b(r),new U.b(n),new U.b(p),new U.X(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
o="After the "+$.z+", the "
s=$.n
o=o+s+" is disappointed to learn that barely any of the "
l=$.u
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.f9+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a8("Be the Biggest Star in Paradox Space",!1,[new U.b(o),new U.b(l),new U.b(s)],H.a([],i),R.eb(),!1,!1,new Y.c1("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.G(q,t,null),$.av)}}
Z.n9.prototype={
G:function(){var t,s,r,q
t=this.F
s=[G.V]
r=A.i("Dream Bubbles Book",H.a([$.N,$.as,$.aI,$.w3],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.O(t,0)]))
t=Q.F(null,null,A.Y)
r=A.i("Uno Reverse Card",H.a([$.mv,$.jm,$.as],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lord's Cape",H.a([$.Q,$.P,$.as],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.ho,$.P,$.as],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.a_,$.N,$.P,$.br,$.aI],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cT,$.L)
q.i(0,$.er,$.L)
q.i(0,$.c0,$.L)
q.i(0,$.cU,$.m)
p="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.n
p=p+o+" comands that the "
n=$.u
m=[U.b]
q.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.M+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
o="As soon as the "+$.z+" is defeated, the "
n=$.u
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.n
q.i(0,new R.a8("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.x
p.i(0,new X.G(s,q,null),$.bM)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.vI,$.k)
t.i(0,$.c6,$.k)
t.i(0,$.be,$.k)
t.i(0,$.b2,$.m)
s="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.n
s=s+r+" comands that the "
o=$.u
t.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.M+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
r="As soon as the "+$.z+" is defeated, the "
o=$.u
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.n
t.i(0,new R.a8("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",this.F,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,t,null),$.bM)}}
S.nb.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Alternate Costume",H.a([$.Q,$.P,$.a3,$.a_,$.az],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Cape",H.a([$.Q,$.P,$.a3],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Staff",H.a([$.W,$.P,$.ab,$.a3,$.dj],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Walking Broom",H.a([$.jk,$.W,$.P,$.aA,$.a3,$.dj],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.f3,$.k)
t.i(0,$.f5,$.m)
t.i(0,$.ce,$.k)
t.i(0,$.eq,$.m)
t.i(0,$.d2,$.L)
r="The "+$.z+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q=$.n
t.i(0,new R.a8("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q=$.n
r="The "+q+" is feeling quite pleased with their victory over the "+$.z+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aX
t.i(0,new R.a8("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="Now that the "+$.z+" has been defeated, the "
o=$.u
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.n
q=q+r+"'s help in planning the brand new city of "
n=$.aX
t.i(0,new R.a8("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.M+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.y(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
U.nc.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Maiden's Breath",H.a([$.b5,$.P,$.aJ],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Feather Duster",H.a([$.W,$.P,$.dj,$.bz],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.aJ,$.aK,$.C,$.P,$.a_,$.ff,$.vW],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.N,$.P,$.a7,$.aI],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.di,$.k)
t.i(0,$.c8,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.be,$.m)
t.i(0,$.dy,$.m)
t.i(0,$.cy,$.m)
r="The "+$.z+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.n
r=r+q+" asks local  "
p=$.u
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.M
n=[U.b]
t.i(0,new R.bA("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q=$.n
o="The "+q+" has adopted a local "
p=$.u
t.i(0,new R.a8("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.M+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.z+". ")],H.a([],n),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
D.ni.prototype={
G:function(){var t,s
t=Q.F(null,null,A.Y)
s=A.i("memes",H.a([$.aW,$.tx,$.w2,$.tA],[G.V]),"No. Just no.",!1,";)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Memes"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.ix,$.k)
r=$.n
q="The "+r+" decides to become Shrek, so they travel across their land to find a Princess and fight a dragon."
p="The "+r+" finds a castle, and they hear a mighty roar. They walk into the castle, to see a giant "+$.u+"-looking dragon. They notice that it's chained up, so The "+r+" decides to free it, and it brings them to the top of the tallest tower in the castle. "
o="The dragon leads The "+r+" to the top of the tower, when they open the door, they see a bed with silk haninging over it. When The "+r+" unveils it, they see a sleeping consort, The "+r+" yeets it out the window, and rides the Dragon towards the "
n=$.z
o=o+n+". "
m="The "+r+" rides up to the "+n+"'s lair, and they challenge it to a battle. "
l="The "+r+" wins, with the added help of the Dragon, there was no chance they would lose. "
t.i(0,new R.R("Become Shrek",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(m,"Even with the added help of the Dragon, The "+r+" wasn't enough to defeat the "+n,l)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.av)}}
T.rJ.prototype={
$1:function(a){var t,s,r,q,p
t=window
s="scrollY" in t?C.d.b0(t.scrollY):C.d.b0(t.document.documentElement.scrollTop)
r=window.screen.height
if(typeof r!=="number")return H.a9(r)
q=1500-r
if(q>s){t=document.querySelector("body").style
p="center -"+C.a.D(s)+"px"
t.backgroundPosition=p}else{t=document.querySelector("body").style
p="center -"+C.a.D(q)+"px"
t.backgroundPosition=p}},
$S:function(){return{func:1,args:[W.T]}}}
V.nl.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Puzzle Box",H.a([$.W,$.H,$.a3],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a2,$.H,$.C],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.C,$.H],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.C,$.H,$.a2,$.a0],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Janus Bust",H.a([$.aK,$.hl,$.aG,$.as,$.H,$.a_,$.a2],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.c6,$.m)
q.i(0,$.em,$.L)
q.i(0,$.cD,$.L)
p=$.n
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.u
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.z
k=[U.b]
q.i(0,new R.R("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.X(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fo(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.n
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.u+" explains that at the end of the Labrinth is the "
l=$.z
q.i(0,new R.R("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.X("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.h8,$.L)
s.i(0,$.c7,$.m)
s.i(0,$.cD,$.L)
s.i(0,$.c6,$.L)
p=$.z
o="The "+p+" has commited a staggering amount of crimes against the local "+$.u+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.n
s.i(0,new R.R("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.X("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.iy,$.k)
t.i(0,$.be,$.m)
t.i(0,$.f6,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.cD,$.k)
r=$.n
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.z
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ae+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.R("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.av)}}
E.nn.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Feather Pen",H.a([$.C,$.P,$.as,$.bz],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.wg,$.P,$.hl,$.ab,$.a_],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Book of Poetry",H.a([$.N,$.P,$.as,$.aI],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.di,$.k)
t.i(0,$.c8,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.be,$.m)
t.i(0,$.dy,$.m)
t.i(0,$.cy,$.m)
r="The "+$.z+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.n
r=r+q+" asks the "
p=$.u
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.M
n=[U.b]
t.i(0,new R.bA("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.m)
q="You'd think after the dramatic defeat of the "+$.z+" the "
o=$.u
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.n
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ae
t.i(0,new R.a8("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
F.no.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Piano",H.a([$.ab,$.W,$.a7,$.as],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flute",H.a([$.C,$.a7],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microphone",H.a([$.aS,$.a2],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Violin",H.a([$.W,$.a7],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sheet Music",H.a([$.N,$.a7],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aN,$.a7,$.a2,$.aS,$.ay],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.aN,$.a7,$.a2,$.ay],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guitar",H.a([$.W,$.a7],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cC,$.ax)
q.i(0,$.tj,$.k)
q.i(0,$.ep,$.k)
q.i(0,$.dy,$.m)
q.i(0,$.b2,$.m)
q.i(0,$.lM,$.m)
p=$.n
o="The "+p+" meets a wise old "+$.u+" who tells that the "+$.z+" can only be awoken by the Legendary Hero playing the "
n=$.aX
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ae
k=[U.b]
q.i(0,new R.a1("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
n="The "+p+" finds an empty, trashed "
l=$.aX
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ae+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.M+"ing "+$.u+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.Fm
q.i(0,new R.a1("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.y(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aR)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.tm,$.ax)
s.i(0,$.dx,$.m)
s.i(0,$.cU,$.m)
s.i(0,$.dy,$.k)
s.i(0,$.lM,$.ax)
o=$.n
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aX
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.z
s.i(0,new R.a1("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.ae+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aR)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.h9,$.ax)
t.i(0,$.bP,$.m)
t.i(0,$.dP,$.m)
r=$.n
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.u
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.M
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aX+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.a1("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aR)}}
Y.nB.prototype={
P:function(a,b){var t=0,s=P.bi(),r,q=this,p,o
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:t=3
return P.cm(A.hv("scripts/Rendering/threed/three.min.js",!1),$async$P)
case 3:t=4
return P.cm(Q.ok(),$async$P)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.bJ(p)
o.eC(p,P.wx(["",$.$get$vx()],P.B,S.hz))
o.eB(p,!1)
q.b=p}J.vg(p,b)
r=J.vg(q.b,b)
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$aseJ:function(){return[S.fn]},
$asc9:function(){return[S.fn,P.B]}}
V.nJ.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Shorts",H.a([$.Q,$.P,$.fd,$.a_],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aN,$.P,$.ay],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Steroids",H.a([$.aE,$.P,$.a3],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.lP,$.k)
t.i(0,$.cE,$.m)
t.i(0,$.he,$.m)
t.i(0,$.lR,$.m)
t.i(0,$.di,$.m)
t.i(0,$.be,$.m)
t.i(0,$.e6,$.m)
t.i(0,$.eo,$.m)
t.i(0,$.tn,$.m)
t.i(0,$.ir,$.m)
t.i(0,$.lN,$.m)
r="The "+$.z+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.n
r=r+q+" asks the "
p=$.u
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.M
n=[U.b]
t.i(0,new R.bA("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q=$.n
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.u+" named Professor "
p=$.M
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ae
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.z
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.R("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.X(k,"The "+q+" whited out...",m)],H.a([],n),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m="Now that the "+$.z+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.n
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.u
t.i(0,new R.a8("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aX+" buffs. With a deafening "+$.M+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.y(),!1,!1,new Y.ic("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
G.nX.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Superhero Action Figure",H.a([$.aN,$.ay,$.aw],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Action DVD",H.a([$.aN,$.ay],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aN,$.bX],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aN,$.b8,$.bp,$.cg],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aN,$.ay],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Movie Poster",H.a([$.N,$.ay],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.b5,$.ay,$.Q,$.aA],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.b5,$.b1,$.ay,$.Q],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shitty Sword",H.a([$.aw,$.C,$.ay,$.et,$.aH,$.bR],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.N,$.ay],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.N,$.ay],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cy,$.m)
q.i(0,$.cB,$.m)
q.i(0,$.bP,$.k)
q.i(0,$.cE,$.ax)
q.i(0,$.d4,$.ax)
p=$.n
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.u
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aX+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.M+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.Fn
l=[U.b]
q.i(0,new R.a1("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aR)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.en,$.m)
s.i(0,$.dx,$.m)
s.i(0,$.cB,$.m)
s.i(0,$.bP,$.m)
s.i(0,$.dO,$.k)
o=$.n
n="The "+o+" runs towards an explosion in a local "
m=$.u
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aX
s.i(0,new R.a1("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aR)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cB,$.m)
t.i(0,$.dN,$.k)
t.i(0,$.cz,$.k)
t.i(0,$.dO,$.m)
r=$.n
q="The "+r+" gets a job at the "+$.aX+" Cinema. A new movie, The Lonely "
o=$.ae
q=q+o+" is coming out soon, and "
n=$.u
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.M+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.a1("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aR)}}
N.o1.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Feather'd Cap",H.a([$.Q,$.P,$.fd],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crown",H.a([$.a_,$.tE,$.P,$.fd],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gunpowder",H.a([$.bs,$.P],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cB,$.m)
t.i(0,$.c6,$.m)
t.i(0,$.dP,$.L)
r="With the closing of the curtain, the "+$.z+" has released the frogs, and yet they are nowhere to be found. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q=$.z
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.n
r=r+o+" to get it back to normal. They organize a team of "
n=$.u
t.i(0,new R.a8("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ae+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
U.b.prototype={}
U.X.prototype={}
R.o2.prototype={
D:function(a){return H.D(new H.dY(H.km(this),null))+": "+this.c},
gL:function(a){return this.c}}
R.a1.prototype={}
R.R.prototype={}
R.a8.prototype={}
R.bA.prototype={}
E.o3.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Curtain",H.a([$.Q,$.H,$.aw],s),null,!1,"Show Ender")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.C,$.et,$.aZ,$.H,$.aH,$.b4,$.aw,$.bq,$.aM],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.C,$.aS,$.a2,$.H,$.aw],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.aK,$.C,$.aS,$.br,$.c2,$.H,$.aw],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.aE,$.br,$.as,$.H,$.a_,$.aw],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.W,$.H,$.b4,$.aF,$.bs,$.aw],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.is,$.k)
q.i(0,$.cT,$.k)
q.i(0,$.dx,$.k)
q.i(0,$.d2,$.m)
q.i(0,$.c0,$.m)
q.i(0,$.ce,$.m)
q.i(0,$.c7,$.L)
q.i(0,$.d4,$.m)
q.i(0,$.en,$.k)
q.i(0,$.iw,$.k)
q.i(0,$.f5,$.k)
q.i(0,$.lQ,$.k)
q.i(0,$.h9,$.m)
q.i(0,$.er,$.k)
p=$.n
o="The "+p+" is chilling in a "
n=$.u
o=o+n+" village when a bunch of sentient "
m=$.ae
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.R("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.X(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hK(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=$.u
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.n
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.z
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.R("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.X(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=this.f
h.i(0,new X.G(s,q,null),$.av)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.dy,$.k)
s.i(0,$.c0,$.m)
s.i(0,$.c7,$.k)
s.i(0,$.cC,$.k)
s.i(0,$.cy,$.k)
s.i(0,$.cB,$.m)
s.i(0,$.iv,$.L)
s.i(0,$.cT,$.m)
s.i(0,$.cE,$.k)
s.i(0,$.bP,$.k)
s.i(0,$.d4,$.L)
p=$.M
o="The "+p+"ing and capering "
n=$.u
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.n
o=o+m+" to do a stupid "
l=$.aX
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.R("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.X(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.G(q,s,null),$.av)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.is,$.k)
t.i(0,$.d4,$.k)
t.i(0,$.c7,$.k)
t.i(0,$.cE,$.m)
t.i(0,$.cy,$.k)
r=$.n
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.u+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.R("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.G(s,t,null),$.av)}}
Y.dR.prototype={}
Y.af.prototype={}
Y.d0.prototype={}
Y.c1.prototype={
gL:function(a){return this.c}}
Y.S.prototype={}
Y.ic.prototype={}
Y.bE.prototype={}
Y.cY.prototype={}
Y.kU.prototype={}
Y.bw.prototype={}
Y.jD.prototype={}
Y.iB.prototype={}
Y.jF.prototype={}
N.o9.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Domino Mask",H.a([$.Q,$.P,$.fd],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Archery Set",H.a([$.ty,$.P,$.fd,$.tv],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.a_,$.aN,$.a2,$.P,$.a0,$.az],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.c7,$.k)
t.i(0,$.ce,$.m)
t.i(0,$.dO,$.m)
r="The "+$.z+" cannot release the frogs since the corrupt Noble "
q=$.u
r=r+q+"s have hoarded them. The "
p=$.n
o=[U.b]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
p=$.n
q="The "+p+" learns of the extreme injustices of the "
r=$.u
q=q+r+"s who rose to power during the tyranny of "
n=$.z
t.i(0,new R.a8("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Q.oa.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Red Rose",H.a([$.aO,$.aJ],s),null,!1,"Seductive Plant")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.aO,$.N],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aO,$.aE],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candelabra",H.a([$.aO,$.aF],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Head Cannon",H.a([$.aO,$.bs,$.C,$.b1],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.aI,$.N,$.aO],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.k)
q.i(0,$.he,$.m)
q.i(0,$.f2,$.m)
q.i(0,$.hd,$.k)
q.i(0,$.cC,$.m)
q.i(0,$.iu,$.L)
p=$.n
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.u
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ae+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.i(0,new R.a1("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aR)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cC,$.m)
s.i(0,$.dN,$.k)
s.i(0,$.hd,$.k)
s.i(0,$.cz,$.m)
s.i(0,$.ep,$.L)
s.i(0,$.iu,$.L)
o=$.u
n="A Romantic "+o+" approaches the "
m=$.n
s.i(0,new R.a1("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aR)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.iu,$.k)
t.i(0,$.cz,$.k)
t.i(0,$.f2,$.m)
t.i(0,$.lR,$.k)
t.i(0,$.hd,$.k)
t.i(0,$.cC,$.m)
t.i(0,$.ep,$.L)
r=$.n
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.u
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.M+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.z+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.Fj
t.i(0,new R.a1("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.y(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.n
r="The "+n+"  and the "
o=$.eE
t.i(0,new R.a1("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.eD(),!1,!1,new Y.iB(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ax)
o=$.n
n="The "+o+"  and the "
r=$.eE
t.i(0,new R.a1("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.eD(),!1,!1,new Y.jD(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ax)
r=$.n
o="The "+r+"  and the "
n=$.eE
t.i(0,new R.a1("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.eD(),!1,!1,new Y.jF(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ax)
p.i(0,new X.G(s,t,null),$.aR)}}
V.ob.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Arrow",H.a([$.aZ,$.W,$.tv],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bow",H.a([$.W,$.ab,$.fe],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yondu",H.a([$.aw,$.H],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Empathy",H.a([$.H,$.tx,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Empathy","Arrows","Emotions","Bows"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.b2,$.m)
t.i(0,$.d3,$.L)
t.i(0,$.bP,$.m)
t.i(0,$.c6,$.L)
r=$.n
q="The "+r+" is walking around their land, when suddenly an arrow starts floating, The "+r+" figures out they can control it with their mind."
p="The "+r+" is practicing in using their arrows, they see an imp walk close to them. The "+r+" tries to strife it, on their second attempt, The "+r+" is able to defeat the imp with their arrow, they have improved in their abilities."
o="The "+r+" has been practicing with their arrow abilities. They can now use many arrows in a giant wave to bring pain upon their enemies. The "+r+" is now able to take on their denizen."
n="The "+r+" walks into the "
m=$.z
n=n+m+"'s lair, arrows flying behind them."
m="The "+m+" is slain, it looks like it was accupunctured."
t.i(0,new R.R("Be the Yondu",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(n,"The power of the arrows was not enough to help The "+r+"...",m)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.av)}}
T.hM.prototype={
G:function(){var t,s
t=Q.F(null,null,A.Y)
s=A.i("Perfectly Generic Object",H.a([],[G.V]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d2,$.k)
q.i(0,$.be,$.L)
q.i(0,$.dP,$.k)
q.i(0,$.c0,$.m)
q.i(0,$.e6,$.L)
p=$.n
o="The "+p+" learns that all of the local "
n=$.u
m=[U.b]
q.i(0,new R.a8("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
n=this.x
n.i(0,new X.G(s,q,null),$.bM)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.f4,$.k)
s.i(0,$.eo,$.L)
s.i(0,$.eq,$.m)
s.i(0,$.cU,$.k)
s.i(0,$.ce,$.L)
p=$.n
o="The "+p+" learns that all of the local "
l=$.u
s.i(0,new R.a8("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.n
l="The "+p+" learns that all of the local "
o=$.u
s.i(0,new R.a8("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.eE+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.M+"ing in amazement. The factory is saved! ")],H.a([],m),R.eD(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.ax)
n.i(0,new X.G(q,s,null),$.bM)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b2,$.k)
t.i(0,$.be,$.L)
t.i(0,$.c8,$.m)
r=$.n
q="The "+r+" learns that all of the local "
p=$.u
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.M
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.uu(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.L)
l=$.n
p="The "+l+" learns that all of the local "
r=$.u
t.i(0,new R.a8("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.bM)},
D:function(a){return this.r},
a3:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.iq("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.i9]),H.a([],[M.h7]))
this.G()
this.H()
t=this.Q
if($.$get$od().a1(0,t))H.bb("Duplicate class id for "+this.D(0)+": "+t+" is already registered for "+J.cL($.$get$od().n(0,t))+".")
$.$get$od().i(0,t,this)},
gL:function(a){return this.r}}
E.oe.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Sage's Robe",H.a([$.Q,$.P,$.b7,$.a0,$.a3,$.a_],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.N,$.P,$.aI,$.a0],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guru Pillow",H.a([$.Q,$.P,$.e9,$.a0],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.hb,$.m)
t.i(0,$.be,$.m)
t.i(0,$.f6,$.k)
t.i(0,$.b2,$.L)
t.i(0,$.cD,$.k)
r="The "+$.z+" has blocked access to the books for the duration. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.u+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q="Now that the "+$.z+" is defeated, it is time to begin recovery efforts. The "
r=$.u
q=q+r+"s ask the "
o=$.n
t.i(0,new R.a8("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.M+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
Y.of.prototype={}
K.og.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Uno Reverse Card",H.a([$.mv,$.H,$.aw],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("JR Body Pillow",H.a([$.e9,$.b7,$.H],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.is,$.k)
q.i(0,$.cT,$.k)
q.i(0,$.dx,$.k)
q.i(0,$.d2,$.m)
q.i(0,$.c0,$.m)
q.i(0,$.ce,$.m)
q.i(0,$.c7,$.L)
q.i(0,$.d4,$.m)
q.i(0,$.en,$.k)
q.i(0,$.iw,$.k)
q.i(0,$.f5,$.k)
q.i(0,$.lQ,$.k)
q.i(0,$.h9,$.m)
q.i(0,$.er,$.k)
p=$.n
o="The "+p+" is chilling in a "
n=$.u
o=o+n+" village when a bunch of sentient "
m=$.ae
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.R("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.X(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hK(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=$.u
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.n
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.z
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.R("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.X(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=this.f
h.i(0,new X.G(s,q,null),$.av)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.dy,$.k)
s.i(0,$.c0,$.m)
s.i(0,$.c7,$.k)
s.i(0,$.cC,$.k)
s.i(0,$.cy,$.k)
s.i(0,$.cB,$.m)
s.i(0,$.iv,$.L)
s.i(0,$.cT,$.m)
s.i(0,$.cE,$.k)
s.i(0,$.bP,$.k)
s.i(0,$.d4,$.L)
p=$.M
o="The "+p+"ing and capering "
n=$.u
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.n
o=o+m+" to do a stupid "
l=$.aX
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.R("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.X(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.G(q,s,null),$.av)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.is,$.k)
t.i(0,$.d4,$.k)
t.i(0,$.c7,$.k)
t.i(0,$.cE,$.m)
t.i(0,$.cy,$.k)
r=$.n
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.u+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.R("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.G(s,t,null),$.av)}}
Y.oh.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Walking Stick",H.a([$.W,$.P,$.dj],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.Q,$.P,$.w4,$.a0,$.a_],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Map",H.a([$.N,$.P,$.a0],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.C,$.P,$.a0,$.a3],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p
t=[P.B]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.di,$.k)
t.i(0,$.c8,$.k)
t.i(0,$.be,$.k)
t.i(0,$.bP,$.L)
t.i(0,$.b2,$.L)
r="Now that the "+$.z+" has been defeated, the planet has really opened up. The "
q=$.n
p=[U.b]
t.i(0,new R.a8("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.u+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.n
t.i(0,new R.bA("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.u+" "+$.M+"s in time to stop them.   ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.bM)}}
L.oi.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Scroll",H.a([$.N,$.P,$.a0],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ink Pot",H.a([$.b3,$.P,$.az,$.a0],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blank Book",H.a([$.N,$.P,$.aI,$.a0,$.az,$.a_],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.lM,$.k)
t.i(0,$.be,$.k)
t.i(0,$.cD,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.c6,$.m)
r="The "+$.z+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q="Now that the "+$.z+" has been taken care of, the "
r=$.n
q=q+r+" discovers a large library of "
o=$.u
t.i(0,new R.a8("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
S.ol.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Cueball",H.a([$.es,$.jn,$.P,$.ab,$.aA,$.a_],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crystal Ball",H.a([$.es,$.w1,$.P,$.b_],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Binoculars",H.a([$.b3,$.P,$.C],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blindfold",H.a([$.vY,$.P,$.b7],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.vJ,$.k)
t.i(0,$.ha,$.k)
t.i(0,$.th,$.k)
t.i(0,$.cE,$.m)
r="Now that the "+$.z+" has been defeated, the land is really starting to open up. The "
q=$.n
r=r+q+" finds a tunnel filled with Blind "
p=$.u
o=[U.b]
t.i(0,new R.a8("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.n
t.i(0,new R.bA("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.u+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
p=$.n
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.u
t.i(0,new R.a8("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
r="A group of underlings are still making trouble, even after the defeat of the "+$.z+". The "
p=$.n
r=r+p+" begins planting rumors of a huge "
q=$.ae
t.i(0,new R.a8("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
T.c3.prototype={}
Y.os.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Meddler's Guide",H.a([$.aI,$.P,$.N,$.br,$.a_,$.b0],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.b3,$.P,$.b0],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.P
r=A.i("Cloud in a Bottle",H.a([r,r,$.bo],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a3,$.P,$.b_,$.aJ,$.N],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.be,$.m)
t.i(0,$.di,$.k)
t.i(0,$.cE,$.m)
t.i(0,$.b2,$.m)
t.i(0,$.c8,$.k)
r="The defeat of the "+$.z+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.n
p=[U.b]
t.i(0,new R.bA("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
q="Now that the "+$.z+" has been taken care of, the "
r=$.n
q=q+r+" finds a long line of "
o=$.u
t.i(0,new R.a8("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
N.ot.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Fiduspawn Plush",H.a([$.cg,$.Q,$.b7],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Teddy Bear",H.a([$.cg,$.Q,$.b7],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dice",H.a([$.tC,$.aN],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pigeon",H.a([$.bz,$.aA,$.bf,$.b9,$.bq,$.tL],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cat Ears",H.a([$.Q,$.b7,$.cg],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Religious Text",H.a([$.aI,$.N],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Psychology Book",H.a([$.aI,$.N],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Therapy Couch",H.a([$.b7,$.Q],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("FLARP Manual",H.a([$.aI,$.N,$.a0],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d3,$.L)
q.i(0,$.b2,$.m)
q.i(0,$.c6,$.k)
q.i(0,$.cD,$.m)
p=$.n
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.u
m=[U.b]
q.i(0,new R.a1("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aX+" or "+$.ae+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.M+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aR)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.d3,$.L)
s.i(0,$.b2,$.k)
s.i(0,$.c6,$.k)
s.i(0,$.tf,$.k)
s.i(0,$.cC,$.k)
s.i(0,$.tm,$.k)
s.i(0,$.cD,$.m)
o=$.n
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.M
n=n+l+"ing "
k=$.u
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aX
s.i(0,new R.a1("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aR)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cU,$.L)
t.i(0,$.dN,$.k)
t.i(0,$.c8,$.k)
t.i(0,$.dO,$.k)
t.i(0,$.h8,$.k)
r=$.n
q="The "+r+" wanders into an entire crowd of "
o=$.u
t.i(0,new R.a1("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.M+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aR)}}
M.bB.prototype={}
N.ov.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Frog Statue",H.a([$.aK,$.aG,$.H],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.Q,$.H],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.bY,$.a0,$.a2,$.H],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.C,$.b3,$.a0,$.H],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.N,$.H,$.my,$.a_],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m
t=$.n
s=[P.B]
r=H.a(["Wherever the "+t+" goes, they find a "+$.u+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.M+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.z+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.n
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.u+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.u+" tells the "
p=$.n
t=t+p+" that they must negotiate with "
o=$.z
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.n
p="The "+o+" meets with "
t=$.z
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cE,$.L)
t.i(0,$.ti,$.k)
s=[U.b]
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
t.i(0,new R.R("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
p=$.n
t.i(0,new R.bA("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.M+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.y(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
this.f.i(0,new X.G(o,t,null),$.Gr)}}
U.au.prototype={
gL:function(a){return this.d+"kind"},
$isbv:1,
$asbv:function(){return[A.Y]}}
K.cH.prototype={
gL:function(a){return this.a}}
M.oA.prototype={
aO:function(a){return"application/octet-stream"},
P:function(a6,a7){var t=0,s=P.bi(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$P=P.bn(function(a8,a9){if(a8===1)return P.bk(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.dh(null,0)
q.a=J.e2(a7,0)
for(p=0,o="";p<6;++p)o+=H.hJ(q.aa(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.l("Invalid header: "+n)
m=q.aa(8)
l=9+m*6
o=8*m
k=q.aa(o)
j=q.aa(o)
i=q.aa(o)
h=q.aa(o)
g=q.aa(o)
f=q.aa(o)
o=P.E
e=P.B
d=P.cG(o,e)
c=new O.cW(k,j,null,null,null,null,null,null,d,P.cG(e,o))
c.x=new Uint8Array(H.cA(k*j))
b=q.aa(8)
for(o=[o],p=0;p<b;++p){a=q.aa(8)
a0=q.aa(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.aa(8)
if(a2>=e){r=H.w(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.p_(a1,0,null))}a4=q.aa(8)
a5=$.$get$wT().n(0,a4)
if(a5==null)throw H.l("Sprite decoding error: Encoding id "+a4+" not supported.")
c.hY(i,h,g,a5.c.$4(a7,l,g*f,c))
c.hI()
r=c
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$asdt:function(){return[O.cW]},
$asc9:function(){return[O.cW,P.bh]}}
A.nm.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Puzzle Box",H.a([$.W,$.H,$.a3],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a2,$.H,$.C],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.C,$.H],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.C,$.H,$.a2,$.a0],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Janus Bust",H.a([$.aK,$.hl,$.aG,$.as,$.H,$.a_,$.a2],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.ow.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Frog Statue",H.a([$.aK,$.aG,$.H],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.Q,$.H],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.bY,$.a0,$.a2,$.H],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.C,$.b3,$.a0,$.H],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Green Sun Poster",H.a([$.N,$.H,$.my,$.a_],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.nY.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Curtain",H.a([$.Q,$.H,$.aw],s),null,!1,"Show Ender")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.C,$.et,$.aZ,$.H,$.aH,$.b4,$.aw,$.bq,$.aM],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.C,$.aS,$.a2,$.H,$.aw],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.aK,$.C,$.aS,$.br,$.c2,$.H,$.aw],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.aE,$.br,$.as,$.H,$.a_,$.aw],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nightmare Fuel",H.a([$.W,$.H,$.b4,$.aF,$.bs,$.aw],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.ou.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Doll",H.a([$.jn,$.aJ,$.aA,$.H],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Puppet",H.a([$.W,$.aA,$.H,$.a_,$.b4],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.mC,$.H],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.N,$.H,$.aO],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shades",H.a([$.ay,$.b3,$.H],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.pl.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Grandfather Clock",H.a([$.W,$.as,$.bc,$.H],s),null,!1,"Ticking Tower of Time")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.tI,$.H,$.a7],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aK,$.bf,$.H,$.b9,$.b4,$.aM],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.C,$.H,$.a7,$.as],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.C,$.H,$.a7,$.a_,$.ay],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Metronome",H.a([$.C,$.H,$.a7],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.o5.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("FAQ",H.a([$.a2,$.H,$.a0,$.bF],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aN,$.H,$.b_,$.a2,$.bF],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.H,$.b_,$.bF,$.a_,$.mx],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.tG,$.H,$.ab],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.tO,$.H],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.b5,$.H,$.b_,$.bF],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("8-Ball",H.a([$.b3,$.H,$.aA],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("A Stone",H.a([$.H,$.aW,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t}}
A.m4.prototype={
G:function(){var t,s
t=Q.F(null,null,A.Y)
s=A.i("Infinity Gauntlet",H.a([$.H,$.C,$.mu],[G.V]),"...",!1,"THANOS CAR THANOS CAR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Stone","Thanos","Mind","Space","Power","Soul","Time","Reality"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.c6,$.m)
t.i(0,$.bP,$.L)
t.i(0,$.cT,$.L)
r=$.n
q="The "+r+" is wandering their land, when an imp goes up to them. Expecting a fight, the "+r+' raises their weapon. Surprisingly, the imp starts talking, and its eyes go black, it says "You must collect the Stones, then you can prove your worth to usssss..." the imp\'s eyes go back to normal, and then it dies. The '+r+" notices it droped a small glowing crystal... MINDSTONE COLLECTED, 1/6."
p="The "+r+' is going through a dungeon. Once they arrive in the final room, a miniboss appears. It bellows "I am the keeper of the Space Stone, fight me if you dare!" It then dissapears in a cloud of smoke. The '+r+" tries to look at some of the many mirrors in the room, to try to find the monster, but to no avail. The boss then flings itself at them from a random angle, and then the "+r+" was able to kill it, and it dropped a small blue gemstone... SPACESTONE COLLECTED, 2/6. Some time later, The "+r+' is going through another dungeon, when it encounters another miniboss, similar to the previous one, it bellows "FIGHT ME, TO COLLECT THE POWER STONE!!" It takes many hours, but the '+r+" comes out on top... POWERSTONE COLLECTED, 3/6."
o="The "+r+" is used to these shenanings by now, when they see a giant crystalline mini boss, they knock it down and take the stone... SOULSTONE COLLECTED, 4/6. When the "+r+" saw another miniboss, but encased in impenetrable gems, they threw it into an over and waited to get the stone... TIMESTONE COLLECTED, 5/6. When the "+r+" encounters yet another one, they try to attack it. But it dissapears, and a similar looking boss drops on their back, it goes on like that for awhile, but the "+r+" eventually defeats it... REALITYSTONE COLLECTED, 6/6, OBJECTIVE COMPLETE."
n="The "+r+" learns it's time to visit their denizen, but when they get there they only see "+$.z+" being [REDACTED]."
m="Paradox Space has declared the "+r+" is worthy, and lets them live."
t.i(0,new R.R("Collect The Stones",!1,[new U.b(q),new U.b(p),new U.b(o),new U.X(n,"Paradox Space decrees that the "+r+" is not worthy.",m)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
this.f.i(0,new X.G(s,t,null),$.av)}}
R.p2.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Meddler's Guide",H.a([$.aI,$.P,$.N,$.br,$.a_,$.b0],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.b3,$.P,$.b0],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.P
r=A.i("Cloud in a Bottle",H.a([r,r,$.bo],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a3,$.P,$.b_,$.aJ,$.N],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.c6,$.k)
t.i(0,$.b2,$.k)
t.i(0,$.di,$.m)
t.i(0,$.f6,$.m)
t.i(0,$.te,$.m)
t.i(0,$.e6,$.m)
t.i(0,$.ir,$.m)
t.i(0,$.tl,$.m)
r=$.n
q="The "+r+" decides to take a break after defeating "+$.z+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.u
o=[U.b]
t.i(0,new R.a8("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.M+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.uw(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
r=$.u
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.n
t.i(0,new R.a8("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.u
q="The "+r+"s are so stressed after all that shit with the "+$.z+". They are yelling and "+$.M+" at each other over the slightest of insults. The "
p=$.n
t.i(0,new R.a8("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
p="The "+$.z+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.n
p=p+r+" purifies the pools "
q=$.u
t.i(0,new R.bA("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
r="The defeat of the "+$.z+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.u
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.n
t.i(0,new R.a8("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aX+". Huh. Okay then.")],H.a([],o),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
L.p4.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Lightning",H.a([$.aS,$.aW,$.H],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice",H.a([$.bp,$.wb,$.fe],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Taserface",H.a([$.aw,$.aS],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Taser",H.a([$.aS,$.H,$.aw],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Rebellion","Fear","Fighting","Turmoil"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.dM,$.L)
t.i(0,$.bP,$.k)
t.i(0,$.is,$.m)
t.i(0,$.cT,$.m)
r=$.n
q="The "+r+" is walking around on their land, when a "
p=$.u
q=q+p+" walks up to them, and tells them about "
o=$.z
q=q+o+" and how it's destroying the land. The "+r+" doesn't care."
p="The "+r+" sees another "+p+". The "+p+" starts "+$.M+"ing about how urgent it is to fight "+o+". Again The "+r+" doesn't care in the slightest."
n="The "+r+" is told about the great treasure that the "+o+" holds, The "+r+" decides to travel to the "+o+"'s lair. To fight the "+o+"."
m="The "+r+" thunders into the "+o+"'s lair, and they demand a prize."
o="The "+o+" is defeated, The "+r+" takes the grist without a second glance."
t.i(0,new R.R("Rebel Against Your Land",!1,[new U.b(q),new U.b(p),new U.b(n),new U.X(m,"The "+r+" is defeated, maybe they should've played the game the right way.",o)],H.a([],[U.b]),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.f.i(0,new X.G(s,t,null),$.av)}}
D.p6.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Robot",H.a([$.a2,$.C,$.aA,$.a0],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Circuit Board",H.a([$.a2,$.C],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.a2,$.N],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a2,$.N,$.aM,$.aI],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("3-D Printer",H.a([$.aN,$.a2,$.C],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.w7,$.C],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wrench",H.a([$.tT,$.C,$.ab],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Computer",H.a([$.a2,$.C],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.iy,$.m)
q.i(0,$.f3,$.k)
q.i(0,$.f4,$.k)
q.i(0,$.ce,$.L)
p=$.n
o="The "+p+" learns from their "
n=$.u
o=o+n+"s about the great "
m=$.aX
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.z+" destroyed it. "
o="The "+p+" searches for the "
l=$.ae
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.Fr
p=[U.b]
q.i(0,new R.a1("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.y(),!1,!1,new Y.cY("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=$.n
m="The "+l+" is approached by a "
o=$.u
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.M
q.i(0,new R.a1("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.z+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ae+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.fo(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aR)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.f4,$.k)
s.i(0,$.eo,$.L)
s.i(0,$.eq,$.m)
s.i(0,$.cU,$.k)
s.i(0,$.ce,$.L)
o=$.n
n="The "+o+" learns that all of the local "
l=$.u
s.i(0,new R.a1("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.M+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.n
l="The "+o+" finds two groups of "
n=$.u
l=l+n+"s screaming and "
k=$.M
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.ae
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.a1("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.eb(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.av)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.iy,$.L)
t.i(0,$.f3,$.k)
t.i(0,$.f4,$.k)
t.i(0,$.ce,$.L)
r=$.n
q="The "+r+" learns from a mysterious "+$.u+" in a black trenchcoat about a great "
o=$.aX
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.z
t.i(0,new R.a1("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.aR)}}
V.p8.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Lighter",H.a([$.C,$.aF],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Siberia Poster",H.a([$.N,$.bp],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.N,$.bp,$.bY],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Doomsday Device",H.a([$.C,$.aM,$.bY,$.aW,$.bq],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.N,$.wc],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Watch",H.a([$.C,$.bc,$.aW],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.C,$.bc,$.aW],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.Q,$.fd,$.aW],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bQ,$.bc],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.C,$.tM,$.b1,$.aW],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.C,$.tQ,$.b1,$.aW],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("AK-47",H.a([$.C,$.tJ,$.b1,$.aW],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("IED",H.a([$.mz,$.aH,$.C,$.bs,$.aW],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.N,$.br,$.aI],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.c2,$.C,$.aS,$.br],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Matches",H.a([$.W,$.aF],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cB,$.m)
q.i(0,$.dN,$.k)
q.i(0,$.e7,$.k)
q.i(0,$.f5,$.k)
q.i(0,$.lP,$.k)
q.i(0,$.dO,$.m)
p=$.n
o=[U.b]
q.i(0,new R.a1("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aR)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cB,$.m)
s.i(0,$.dN,$.k)
s.i(0,$.cz,$.k)
s.i(0,$.dO,$.m)
n=$.n
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.u
s.i(0,new R.a1("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ae+" underling. Tremble at the fearsome "+$.aX+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aR)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d2,$.k)
q.i(0,$.be,$.L)
q.i(0,$.dP,$.k)
q.i(0,$.c0,$.m)
q.i(0,$.e6,$.L)
q.i(0,$.cT,$.L)
n=$.n
m="The "+n+" learns that all of the local "
l=$.u
q.i(0,new R.a1("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.M+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,q,null),$.aR)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.c7,$.k)
t.i(0,$.cT,$.L)
t.i(0,$.en,$.k)
t.i(0,$.iw,$.k)
t.i(0,$.ce,$.m)
t.i(0,$.er,$.m)
s=$.n
r="The "+s+" finds a crowd of "
n=$.M
r=r+n+"ing "
m=$.u
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aX+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.a1("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,t,null),$.aR)}}
X.G.prototype={
D:function(a){return"Theme: "+H.D(this.a)}}
U.pf.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Lockpick",H.a([$.C,$.P,$.az,$.aZ,$.a_],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.Q,$.P,$.az],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Dagger",H.a([$.C,$.P,$.aZ,$.aH,$.tB],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.c7,$.k)
t.i(0,$.dx,$.m)
t.i(0,$.bP,$.m)
t.i(0,$.cU,$.m)
r="The "+$.z+" cannot release the frogs since the corrupt "
q=$.u
r=r+q+" Cops have confiscated them. The "
p=$.n
o=[U.b]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
p=$.n
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.z+"'s layer and slated to be returned to the "
r=$.u
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.M+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.i(0,new R.a8("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.u
p="A weeping "+r+" approaches the "
n=$.n
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.z
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aX+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.M+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.i(0,new R.a8("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.z
n="Now that the "+r+" has been defeated, the "
p=$.u
n=n+p+"s have recovered their precious "
q=$.ae
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.n
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.M
l=n+l+"worth, the disaffected Heir to the "+$.aX+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.i(0,new R.a8("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
N.pg.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Grandfather Clock",H.a([$.W,$.as,$.bc,$.H],s),null,!1,"Ticking Tower of Time")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.tI,$.H,$.a7],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aK,$.bf,$.H,$.b9,$.b4,$.aM],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.C,$.H,$.a7,$.as],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.C,$.H,$.a7,$.a_,$.ay],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Metronome",H.a([$.C,$.H,$.a7],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.vL,$.ax)
q.i(0,$.ce,$.m)
q.i(0,$.cU,$.m)
q.i(0,$.eq,$.k)
p=$.z
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.n
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x2
l=[U.b]
q.i(0,new R.a8("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.eC(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.n
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.u+"s, they set out to fix the "
m=$.ae
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.z
q.i(0,new R.R("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.X("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=this.f
j.i(0,new X.G(s,q,null),$.av)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.h9,$.k)
s.i(0,$.e7,$.L)
s.i(0,$.ce,$.k)
p=$.n
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.u+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.z
s.i(0,new R.R("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.X(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.G(q,s,null),$.av)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.c8,$.k)
t.i(0,$.b2,$.m)
t.i(0,$.c6,$.k)
t.i(0,$.di,$.k)
r=$.z
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.ae
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.n
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.u+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.R("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.X(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hK(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
k=$.z
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ae
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.n
t.i(0,new R.R("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.u+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.X("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.eC(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
r="With the defeat of the "+$.z+", "
k=$.n
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.u
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aX
t.i(0,new R.a8("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.eC(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.u
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.n
t.i(0,new R.R("Move Forwards, Never Stop",!1,[new U.b(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.M+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.X("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.z+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.G(s,t,null),$.av)}}
G.V.prototype={
D:function(a){var t=this.b
if(t.length!==0)return C.b.gag(t)
return"NULL TRAIT"},
ge9:function(){return this.a},
gdT:function(){return this.b},
gbu:function(){return this.c}}
G.aY.prototype={}
G.at.prototype={}
G.bI.prototype={}
G.e.prototype={
ghF:function(){return this.e.length},
gbu:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bV)(t),++q)r+=t[q].c
return r},
av:function(a,b){return C.a.b0(b.ghF()-this.e.length)},
ej:function(a){return C.b.h8(this.e,a.gfV(a))},
$isbv:1,
$asbv:function(){return[G.e]},
gL:function(a){return this.d},
geF:function(){return this.e}}
G.mF.prototype={
$1:function(a){return a instanceof G.e},
$S:function(){return{func:1,args:[G.V]}}}
Q.pE.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Cardboard Box",H.a([$.N,$.H,$.az],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hole Punch",H.a([$.C,$.H,$.az],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bs,$.H,$.az,$.mz],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tribal Mask",H.a([$.b9,$.H,$.az,$.b4,$.bS],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Opera Mask",H.a([$.aN,$.H,$.az,$.as],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.H,$.a_,$.my,$.az,$.b3],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
H:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d3,$.k)
q.i(0,$.lO,$.k)
q.i(0,$.hc,$.k)
q.i(0,$.ha,$.k)
p=$.z
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.n
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.u
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x2
l=[U.b]
q.i(0,new R.a8("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.n
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.z
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.R("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.X(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i=this.f
i.i(0,new X.G(s,q,null),$.av)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.d3,$.m)
s.i(0,$.lO,$.m)
s.i(0,$.hc,$.m)
s.i(0,$.c7,$.k)
p=$.n
o="Even with the victory of the "+p+" over the villainous "
n=$.z
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.u+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ae
s.i(0,new R.a8("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fo(),!1,!1,new Y.c1("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m=$.n
s.i(0,new R.R("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.M+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.X("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.z+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.u+"s.")],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i.i(0,new X.G(q,s,null),$.av)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.d3,$.k)
t.i(0,$.lO,$.k)
t.i(0,$.hc,$.k)
r=$.n
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.z+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.R("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.X(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i.i(0,new X.G(s,t,null),$.av)}}
E.pF.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Yardstick",H.a([$.dj,$.P,$.jm,$.a_],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.aI,$.P,$.ho,$.N],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.Q,$.P,$.e9,$.mA,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nanobots",H.a([$.tR,$.P,$.mt],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cE,$.k)
t.i(0,$.d4,$.k)
t.i(0,$.dw,$.k)
t.i(0,$.di,$.k)
t.i(0,$.em,$.k)
t.i(0,$.dM,$.k)
t.i(0,$.hc,$.m)
r=$.n
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.u
o=[U.b]
t.i(0,new R.a1("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.uw(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.z
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.n
n=q+" tries to manually separate the turtles by catching them with a net and "+$.ci+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.M
t.i(0,new R.R("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.X(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wO(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
q=$.n
t.i(0,new R.a1("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dR("Rewards/no_reward.png",null),1,null,null),$.A)
q="A wizened "+$.u+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.n
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.z
t.i(0,new R.R("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
m=$.n
t.i(0,new R.R("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.z+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ax)
m="A wizened "+$.u+" tells the "
r=$.n
t.i(0,new R.a8("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.u+" that is also a SHOGUN minion tells the "
m=$.n
t.i(0,new R.a8("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wP(),!1,!1,new Y.c1("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
m=$.n
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a8("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.z
m="The "+n+" explains um. What? Where did the "
q=$.n
t.i(0,new R.bA("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
this.x.i(0,new X.G(s,t,null),$.av)}}
M.pJ.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Cauldron",H.a([$.wf,$.P,$.a3],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flying Broom",H.a([$.jk,$.dj,$.P,$.W,$.a3],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Warped Mirror",H.a([$.mC,$.P,$.a3,$.az,$.a_],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
H:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.c0,$.m)
t.i(0,$.he,$.m)
t.i(0,$.d2,$.m)
t.i(0,$.cU,$.m)
t.i(0,$.cy,$.m)
t.i(0,$.ti,$.m)
r=$.z
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.u
q=q+p+" consorts. It's up to the "
o=$.n
n=[U.b]
t.i(0,new R.bA("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bT(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ax)
o="Even with the defeat of the "+$.z+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.u
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aX
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.n
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.go
t.i(0,new R.a8("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.A)
q="A Mysterious "+$.u+" approaches the "
p=$.n
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aX
q=q+r+" was discovered amongst the "+$.z+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.i(0,new R.a8("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.u
p="A young "+r+" approaches the "
m=$.n
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aX
t.i(0,new R.a8("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ae+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.M+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.y(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bM)}}
U.pK.prototype={
P:function(a5,a6){var t=0,s=P.bi(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$P=P.bn(function(a7,a8){if(a7===1)return P.bk(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.e3(a6,$.$get$xf())
if(0>=p.length){r=H.w(p,0)
t=1
break}if(J.yn(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.w(p,0)
t=1
break}throw H.l("Invalid WordList file header: '"+H.D(p[0])+"'")}o=P.B
n=H.a([],[o])
m=P.cG(o,B.jZ)
q.a=null
l=P.cG(o,o)
for(k=P.U,j=B.dC,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cK()
""+i
H.D(g)
f.toString
f=J.e3(g,$.$get$xd())
if(0>=f.length){r=H.w(f,0)
t=1
break $async$outer}g=f[0]
f=J.bd(g)
if(f.gX(g)===!0){$.$get$cK().toString
continue}if(f.af(g,$.$get$xe())){$.$get$cK().toString
continue}if(C.c.af(g,"@")){e=C.c.W(g,1)
$.$get$cK().toString
n.push(e)}else if(C.c.af(g,"?")){f=C.c.W(g,1)
f=$.$get$hN().aV(0,f)
f=H.dz(f,B.ko(),H.aU(f,"o",0),null)
d=P.dk(f,!0,H.aU(f,"o",0))
if(d.length<2)$.$get$cK().b8(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cK()
H.D(c)
H.D(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$xg()
a=f.cb(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.w(f,1)
t=1
break $async$outer}a0=J.cn(f[1])
a1=C.c.W(g,a0)
if(a1.length===0)continue
f=J.aL(a0)
if(f.S(a0,0)){a1=C.c.ek(a1)
$.$get$cK().toString
f=P.cG(o,o)
a2=new B.jZ(P.cG(o,k),f,a1,!1,null,null)
a2.d5(null,null,j)
q.a=a2
f.bL(0,l)
m.i(0,a1,q.a)}else if(f.S(a0,$.xh))if(C.c.af(a1,"?")){a1=C.c.W(a1,1)
f=$.$get$hN().aV(0,a1)
f=H.dz(f,B.ko(),H.aU(f,"o",0),null)
d=P.dk(f,!0,H.aU(f,"o",0))
f=$.$get$cK()
f.toString
if(d.length<2)f.b8(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.ks(d[0],$.$get$fu(),"")
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}b=J.ks(d[1],$.$get$fu(),"")
f=$.$get$cK()
a3=q.a
a3.e
f.toString
a3.d.i(0,c,b)}}else if(C.c.af(a1,"@")){e=C.c.W(a1,1)
$.$get$cK().toString
f=$.$get$hN().aV(0,a1)
f=H.dz(f,B.ko(),H.aU(f,"o",0),null)
d=P.dk(f,!0,H.aU(f,"o",0))
a4=d.length>1?H.wL(d[1],new U.pL(q,d)):1
q.a.c.i(0,C.c.cP(e,$.$get$fu(),""),a4)}else{$.$get$cK().toString
f=$.$get$hN().aV(0,g)
f=H.dz(f,B.ko(),H.aU(f,"o",0),null)
d=P.dk(f,!0,H.aU(f,"o",0))
a4=d.length>1?H.wL(d[1],new U.pM(q,d)):1
if(0>=d.length){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bg(J.ks(d[0],$.$get$fu(),""))
h=new B.dC(null)
a3=P.cG(o,o)
h.a=a3
a3.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.vi(a4)),[H.aU(f,"cS",0)]))}else if(f.S(a0,$.xh*2)){$.$get$cK().toString
f=$.$get$hN().aV(0,g)
f=H.dz(f,B.ko(),H.aU(f,"o",0),null)
d=P.dk(f,!0,H.aU(f,"o",0))
f=d.length
if(f!==2)$.$get$cK().b8(C.h,"Invalid variant for "+H.D(h.cU(0))+" in "+q.a.e)
else{if(0>=f){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bg(J.ks(d[0],$.$get$fu(),""))
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}a3=C.c.cP(U.Gu(d[1]),$.$get$fu(),"")
h.a.i(0,f,a3)}}}}}r=new B.hT(n,m)
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$aseJ:function(){return[B.hT]},
$asc9:function(){return[B.hT,P.B]}}
U.pL.prototype={
$1:function(a){var t,s,r
t=$.$get$cK()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid include weight '"+H.D(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.b8(C.m,r+H.D(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.B]}}}
U.pM.prototype={
$1:function(a){var t,s,r
t=$.$get$cK()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid weight '"+H.D(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.b8(C.m,r+H.D(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.B]}}}
F.cd.prototype={
bA:function(){var t=0,s=P.bi(),r=this,q
var $async$bA=P.bn(function(a,b){if(a===1)return P.bk(b,s)
while(true)switch(t){case 0:q="WranglerNewsposts/"+r.c+".txt"
t=2
return P.cm(W.tt(C.c.an("../",N.nP())+q,null,null).aR(new F.pO(r)),$async$bA)
case 2:return P.bl(null,s)}})
return P.bm($async$bA,s)},
cO:function(a){var t=0,s=P.bi(),r=this,q,p,o,n
var $async$cO=P.bn(function(b,c){if(b===1)return P.bk(c,s)
while(true)switch(t){case 0:q=document.createElement("div")
q.classList.add("Headshot")
p=W.ml(null,r.a,null)
p.classList.add("MemoNewspostIcon")
o=W.vj(null)
n=r.c
o.textContent=n
o.href="bio.html?staff="+n
o.target="_blank"
o.appendChild(p)
q.appendChild(o)
a.appendChild(q)
return P.bl(null,s)}})
return P.bm($async$cO,s)}}
F.pO.prototype={
$1:function(a){var t,s,r,q,p
t=J.e3(a,"\n")
for(s=t.length,r=this.a,q=r.d,p=0;p<t.length;t.length===s||(0,H.bV)(t),++p)q.push(K.Ff(t[p],r))},
$S:function(){return{func:1,args:[P.B]}}}
F.pP.prototype={
G:function(){var t,s,r,q
t=Q.F(null,null,A.Y)
s=[G.V]
r=A.i("Make a World Book",H.a([$.N,$.as,$.aI],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Quill Pen",H.a([$.b7,$.Q,$.mD],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Book On Writing",H.a([$.aI,$.N,$.a0],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("FLARP Manual",H.a([$.aI,$.N,$.a0],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Script",H.a([$.aI,$.N],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Pen",H.a([$.C,$.a0,$.mD,$.as],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.aI,$.N,$.C],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Half Written Novel",H.a([$.aI,$.N],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
H:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d3,$.k)
q.i(0,$.cD,$.k)
q.i(0,$.be,$.m)
q.i(0,$.b2,$.m)
q.i(0,$.hb,$.m)
p=$.n
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.u+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.i(0,new R.a1("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.r
m.i(0,new X.G(s,q,null),$.aR)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.dO,$.m)
s.i(0,$.cB,$.m)
s.i(0,$.cz,$.m)
s.i(0,$.be,$.m)
p=$.u
o="An Excited "+p+" rushes up to the "
n=$.n
s.i(0,new R.a1("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.M+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.aR)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cB,$.m)
t.i(0,$.dN,$.k)
t.i(0,$.cz,$.k)
t.i(0,$.dO,$.m)
t.i(0,$.dw,$.k)
r=$.n
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.u
t.i(0,new R.a1("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.y(),!1,!1,new Y.d0("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.aR)}}
B.pU.prototype={
aO:function(a){return"application/x-tar"},
P:function(a,b){var t=0,s=P.bi(),r,q,p
var $async$P=P.bn(function(c,d){if(c===1)return P.bk(d,s)
while(true)switch(t){case 0:q=$.$get$xi()
p=J.v9(b)
q.toString
r=q.h0(T.tu(p,0,null,0),!1)
t=1
break
case 1:return P.bl(r,s)}})
return P.bm($async$P,s)},
$asdt:function(){return[T.fJ]},
$asc9:function(){return[T.fJ,P.bh]}}
A.fR.prototype={}
B.du.prototype={
cr:function(a){if(a)this.b=(this.b|C.a.ar(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.O+=H.hJ(this.b)
this.b=0}},
ai:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.ar(1,t)
if(typeof a!=="number")return a.aH()
this.cr((a&s)>>>0>0)}},
fN:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.aq(1,t-s)
if(typeof a!=="number")return a.aH()
this.cr((a&r)>>>0>0)}},
bM:function(a){var t,s
a=J.e1(a,1)
t=C.d.bh(Math.log(H.ki(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cr(!1)
this.fN(a,t+1)},
b1:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.O
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.a9(r)
q+=r
p=r}else p=0
r=H.cA(q)
o=new Uint8Array(r)
if(t){n=H.cP(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.w(o,m)
o[m]=l}}t=s.O
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a7(k,m)
if(s<0||s>=r)return H.w(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.w(o,t)
o[t]=s}return o.buffer}}
B.dh.prototype={
cj:function(a){var t,s,r,q
t=C.f.am(a/8)
s=C.a.bz(a,8)
r=this.a.getUint8(t)
q=C.a.aq(1,s)
if(typeof r!=="number")return r.aH()
return(r&q)>>>0>0},
aa:function(a){var t,s,r
if(a>32)throw H.l(P.e4(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cj(this.b);++this.b
if(r)t=(t|C.a.ar(1,s))>>>0}return t},
hH:function(a){var t,s,r,q
if(a>32)throw H.l(P.e4(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cj(this.b);++this.b
if(q)s=(s|C.a.aq(1,t-r))>>>0}return s},
bW:function(){var t,s,r
for(t=0;!0;){s=this.cj(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.hH(t+1)-1}}
A.dK.prototype={
D:function(a){return"rgb("+H.D(this.b)+", "+H.D(this.c)+", "+H.D(this.d)+", "+H.D(this.a)+")"},
ei:function(a){var t,s,r,q
if(a){t=this.b
if(typeof t!=="number")return t.aq()
s=this.c
if(typeof s!=="number")return s.aq()
r=this.d
if(typeof r!=="number")return r.aq()
q=this.a
if(typeof q!=="number")return H.a9(q)
return(t<<24|s<<16|r<<8|q)>>>0}t=this.b
if(typeof t!=="number")return t.aq()
s=this.c
if(typeof s!=="number")return s.aq()
r=this.d
if(typeof r!=="number")return H.a9(r)
return(t<<16|s<<8|r)>>>0},
hT:function(a,b){var t=C.a.bf(this.ei(!1),16)
return"#"+C.c.cF(t,6,"0").toUpperCase()},
hS:function(){return this.hT(!1,!1)},
S:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.dK){t=this.b
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
ga8:function(a){return this.ei(!0)},
U:function(a,b){var t,s,r,q,p,o,n,m
t=J.aL(b)
if(!!t.$isdK){t=this.b
s=b.b
if(typeof t!=="number")return t.U()
if(typeof s!=="number")return H.a9(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.U()
if(typeof q!=="number")return H.a9(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.U()
if(typeof o!=="number")return H.a9(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.U()
if(typeof m!=="number")return H.a9(m)
return A.ei(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.ax()
s=this.c
if(typeof s!=="number")return s.ax()
r=this.d
if(typeof r!=="number")return r.ax()
q=this.a
if(typeof q!=="number")return q.ax()
return A.t1(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.U()
s=this.c
if(typeof s!=="number")return s.U()
r=this.d
if(typeof r!=="number")return r.U()
return A.ei(t+b,s+b,r+b,this.a)}throw H.l("Cannot add ["+H.D(t.gad(b))+" "+H.D(b)+"] to a Colour. Only Colour, double and int are valid.")},
V:function(a,b){var t,s,r,q,p
t=J.aL(b)
if(!!t.$isdK){s=this.b
r=b.gij()
if(typeof s!=="number")return s.V()
r=C.d.V(s,r)
s=this.c
q=b.gi0()
if(typeof s!=="number")return s.V()
q=C.d.V(s,q)
s=this.d
p=b.gi5()
if(typeof s!=="number")return s.V()
p=C.d.V(s,p)
s=this.a
t=t.gi4(b)
if(typeof s!=="number")return s.V()
return A.ei(r,q,p,C.d.V(s,t))}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.ax()
s=this.c
if(typeof s!=="number")return s.ax()
r=this.d
if(typeof r!=="number")return r.ax()
q=this.a
if(typeof q!=="number")return q.ax()
return A.t1(t/255-b,s/255-b,r/255-b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.V()
s=this.c
if(typeof s!=="number")return s.V()
r=this.d
if(typeof r!=="number")return r.V()
return A.ei(t-b,s-b,r-b,this.a)}throw H.l("Cannot subtract ["+H.D(t.gad(b))+" "+H.D(b)+"] from a Colour. Only Colour, double and int are valid.")},
an:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.ax()
s=this.c
if(typeof s!=="number")return s.ax()
r=this.d
if(typeof r!=="number")return r.ax()
q=this.a
if(typeof q!=="number")return q.ax()
return A.t1(t/255*b,s/255*b,r/255*b,q/255)},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.l("Colour index out of range: "+H.D(b))},
i:function(a,b,c){var t,s
t=J.dd(b)
if(t.a6(b,0)||t.aC(b,3))throw H.l("Colour index out of range: "+H.D(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.S(b,0)){this.b=C.a.ae(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ae(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,2)){this.d=C.a.ae(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ae(c,0,255)
else if(t.S(b,0)){this.b=C.a.ae(J.kr(J.v8(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ae(J.kr(J.v8(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kk(c)
if(t.S(b,2)){this.d=C.a.ae(J.kr(s.an(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ae(J.kr(s.an(c,255)),0,255)}},
eL:function(a,b,c,d){this.b=C.d.ae(C.d.ae(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ae(C.d.ae(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ae(C.d.ae(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ae(J.y2(d,0,255),0,255)}}
A.rq.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.B]}}}
A.n5.prototype={
$1:function(a){return this.a.ec(a)},
$S:function(){return{func:1,args:[,]}}}
A.n3.prototype={
$1:function(a){this.a.P(0,a).aR(this.b.ghE())},
$S:function(){return{func:1,args:[,]}}}
A.n4.prototype={
$1:function(a){this.a.fU(0)},
$S:function(){return{func:1,args:[P.q]}}}
A.n6.prototype={
$1:function(a){return this.a.aA(0,this.b)},
$S:function(){return{func:1,args:[W.T]}}}
F.hw.prototype={
D:function(a){return this.b}}
F.hx.prototype={
b8:function(a,b){F.Fe(a).$1("("+this.c+")["+H.D(C.b.gb7(a.b.split(".")))+"]: "+H.D(b))},
cw:function(a,b){this.b8(C.h,b)},
gL:function(a){return this.c}}
F.u5.prototype={}
O.rM.prototype={
$1:function(a){return H.D(a.b9(1))+" = "+H.D(a.b9(2))+C.c.an("../",this.a)},
$S:function(){return{func:1,args:[P.dA]}}}
O.rN.prototype={
$0:function(){var t=document
J.ve(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.o,null)
t=H.kn(t.querySelector("#voidButton"),"$isfT")
t.toString
W.eR(t,"click",new O.rL(),!1,W.I0)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.HN("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.rL.prototype={
$1:function(a){return O.HS()},
$S:function(){return{func:1,args:[W.T]}}}
R.hf.prototype={}
R.un.prototype={}
R.um.prototype={}
A.nK.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.a1(0,b)?t.n(0,b):$.$get$ul()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.a1(0,b)?t.n(0,b):$.$get$ul()}throw H.l(P.e4(b,"'name' should be a String name or int id only",null))},
ga0:function(a){var t=this.a
t=t.gc_(t)
return new H.ju(null,J.df(t.a),t.b,[H.O(t,0),H.O(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.a1(0,b))this.ak(0,b)
s=this.fu()
if(typeof s!=="number")return s.at()
if(s>=256)throw H.l(P.e4(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
ak:function(a,b){var t,s,r
t=this.a
if(!t.a1(0,b))return
s=this.c
r=s.n(0,b)
t.ak(0,b)
this.b.ak(0,r)
s.ak(0,b)
this.d.ak(0,r)},
fu:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.a1(0,s))return s;++s}}}
A.jC.prototype={
$aso:function(){return[A.dK]},
$iso:1}
Q.jE.prototype={}
A.jJ.prototype={
bt:function(a){if(a===0)return 0
return this.fv(a)},
hw:function(){return this.bt(4294967295)},
fv:function(a){var t,s
t=this.a
if(a>4294967295){s=t.cE()
this.b=C.d.b0(s*4294967295)
return C.d.am(s*a)}else{s=t.bt(a)
this.b=s
return s}},
cX:function(a){var t=a==null
this.a=t?C.K:P.GH(a)
if(!t)this.b=J.e1(a,1)},
hC:function(a,b){var t=a.length
if(t===0)return
t=this.bt(t)
if(t<0||t>=a.length)return H.w(a,t)
return a[t]},
hB:function(a){return this.hC(a,!0)}}
Y.dQ.prototype={
cp:function(a){var t,s
if(this.b!=null)throw H.l("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bj(0,$.aD,null,t)
this.c.push(new P.e_(s,t))
return s},
ec:function(a){var t,s,r
if(this.b!=null)throw H.l("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bV)(t),++r)t[r].aA(0,this.b)
C.b.sm(t,0)}}
V.lr.prototype={
$4:function(a,b,c,d){return V.zC(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.E,P.bh,P.bh,O.cW]}}}
V.lq.prototype={
$4:function(a,b,c,d){return V.zB(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bh,P.E,P.E,O.cW]}}}
V.lp.prototype={
$4:function(a,b,c,d){return V.zy(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.E,P.bh,P.bh,O.cW]}}}
V.lo.prototype={
$4:function(a,b,c,d){return V.zx(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bh,P.E,P.E,O.cW]}}}
O.cW.prototype={
hI:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
hY:function(a,b,c,d){var t,s,r,q,p
t=J.bJ(d)
s=0
while(!0){r=t.ge6(d)
if(typeof r!=="number")return H.a9(r)
if(!(s<r))break
q=(C.a.bh(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.w(r,q)
r[q]=p;++s}}}
D.oD.prototype={
$1:function(a){return a.ghD()},
$S:function(){return{func:1,args:[D.cI]}}}
D.cI.prototype={
D:function(a){return this.a},
gL:function(a){return this.a},
ghD:function(){return this.d}}
D.k_.prototype={}
D.o7.prototype={}
B.dC.prototype={
ep:function(a,b){if(this.a.a1(0,"MAIN"))return this.a.n(0,"MAIN")
return},
cU:function(a){return this.ep(a,null)},
D:function(a){return"[Word: "+H.D(this.cU(0))+"]"}}
B.jZ.prototype={
D:function(a){return"WordList '"+this.e+"': "+this.eI(0)},
$isq:1,
$asq:function(){return[B.dC]},
$asdZ:function(){return[B.dC]},
$ashR:function(){return[B.dC]},
$ascS:function(){return[B.dC]},
$aso:function(){return[B.dC]},
$asv:function(){return[B.dC]},
gL:function(a){return this.e}}
B.hT.prototype={
D:function(a){return"[WordListFile: "+this.b.D(0)+" ]"}}
S.fn.prototype={}
S.uN.prototype={}
S.uO.prototype={}
S.uP.prototype={}
S.ta.prototype={}
S.td.prototype={}
S.t0.prototype={}
S.ux.prototype={}
S.uR.prototype={}
S.uS.prototype={}
S.kR.prototype={}
S.uo.prototype={}
S.uk.prototype={}
S.mX.prototype={}
S.t5.prototype={}
S.rW.prototype={}
S.l8.prototype={}
S.u6.prototype={}
S.l9.prototype={}
S.nM.prototype={}
S.uE.prototype={}
S.uB.prototype={}
S.uF.prototype={}
S.rV.prototype={}
S.m5.prototype={}
S.kP.prototype={}
S.t_.prototype={}
S.rZ.prototype={}
S.up.prototype={}
S.uG.prototype={}
S.uq.prototype={}
S.tc.prototype={}
S.tb.prototype={}
S.uD.prototype={}
S.uC.prototype={}
S.pe.prototype={}
S.uI.prototype={}
S.t2.prototype={}
S.t3.prototype={}
S.uQ.prototype={}
S.hz.prototype={}
S.uc.prototype={}
S.ud.prototype={}
S.ue.prototype={}
S.uf.prototype={}
S.uy.prototype={}
S.uz.prototype={}
S.uA.prototype={}
S.ub.prototype={}
S.uh.prototype={}
S.ui.prototype={}
S.tq.prototype={}
S.tr.prototype={}
S.ts.prototype={}
S.uj.prototype={}
S.ug.prototype={}
S.rX.prototype={}
S.uK.prototype={}
S.uL.prototype={}
S.uJ.prototype={}
Z.u0.prototype={}
Z.tX.prototype={}
Z.tY.prototype={}
Q.cS.prototype={
k:function(a,b){return b},
D:function(a){return J.cL(this.gbV())},
aw:function(a,b){return Q.uU(this,b,H.aU(this,"cS",0),null)},
a5:function(a,b){return Q.uT(this,!1,!0,null,H.aU(this,"cS",0))},
ap:function(a){return this.a5(a,!0)},
$iso:1,
$aso:null}
Q.dZ.prototype={
gbV:function(){return this.b},
bK:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.vi(c)),[H.aU(this,"cS",0)]))},
h:function(a,b){return this.bK(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return J.vc(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.w(t,b)
t[b]=new Q.h(c,s,[H.aU(this,"cS",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
D:function(a){return P.jo(this.b,"[","]")},
aw:function(a,b){return Q.uU(this,b,H.aU(this,"dZ",0),null)},
a5:function(a,b){return Q.uT(this,!1,!0,null,H.aU(this,"dZ",0))},
ap:function(a){return this.a5(a,!0)},
d5:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.hR.prototype={$ascS:null,$aso:null,$asq:null,$asv:null,$isq:1,$isv:1,$iso:1}
Q.h.prototype={
D:function(a){return"("+H.D(this.a)+" @ "+H.D(this.b)+")"},
ga_:function(a){return this.a},
gcS:function(a){return this.b}}
Q.eP.prototype={
gbV:function(){return this.b},
ga0:function(a){var t=new Q.pH(null,[H.aU(this,"eP",0)])
t.a=J.df(this.b)
return t},
gm:function(a){return J.cn(this.b)},
D:function(a){return J.cL(this.b)},
aw:function(a,b){return Q.uU(this,b,H.aU(this,"eP",0),null)},
a5:function(a,b){return Q.uT(this,!1,!0,null,H.aU(this,"eP",0))},
ap:function(a){return this.a5(a,!0)}}
Q.hQ.prototype={$ascS:null,$aso:null,$iso:1}
Q.pH.prototype={
gR:function(){return J.vc(this.a.gR())},
J:function(){return this.a.J()}}
Q.jW.prototype={
$aseP:function(a,b){return[b]},
$ashQ:function(a,b){return[b]},
$ascS:function(a,b){return[b]},
$aso:function(a,b){return[b]}}
Q.pI.prototype={
$1:function(a){var t=J.bJ(a)
return new Q.h(this.c.$1(t.ga_(a)),t.gcS(a),[this.b])},
$S:function(){return H.eU(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"jW")}}
J.j.prototype.eG=J.j.prototype.D
J.hr.prototype.eH=J.hr.prototype.D
P.dp.prototype.eJ=P.dp.prototype.bC
P.dp.prototype.eK=P.dp.prototype.bB
P.b6.prototype.d3=P.b6.prototype.ab
Q.dZ.prototype.eI=Q.dZ.prototype.D;(function installTearOffs(){installTearOff(H.fz.prototype,"ghr",0,0,0,null,["$0"],["bT"],1)
installTearOff(H.dE.prototype,"ges",0,0,0,null,["$1"],["ay"],11)
installTearOff(H.eQ.prototype,"gh3",0,0,0,null,["$1"],["aW"],11)
installTearOff(H,"xx",1,0,0,null,["$1"],["H8"],8)
installTearOff(P,"Hb",1,0,0,null,["$1"],["Gy"],6)
installTearOff(P,"Hc",1,0,0,null,["$1"],["Gz"],6)
installTearOff(P,"Hd",1,0,0,null,["$1"],["GA"],6)
installTearOff(P,"xJ",1,0,0,null,["$0"],["H7"],1)
installTearOff(P.k3.prototype,"gdR",0,0,0,null,["$2","$1"],["ct","bl"],12)
installTearOff(P.bj.prototype,"gba",0,0,0,null,["$2","$1"],["ao","f5"],12)
var t
installTearOff(t=P.dp.prototype,"gdz",0,0,0,null,["$0"],["bF"],1)
installTearOff(t,"gdA",0,0,0,null,["$0"],["bG"],1)
installTearOff(t=P.hX.prototype,"gdz",0,0,0,null,["$0"],["bF"],1)
installTearOff(t,"gdA",0,0,0,null,["$0"],["bG"],1)
installTearOff(t,"gfh",0,0,0,null,["$1"],["fi"],function(){return H.eU(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"hX")})
installTearOff(t,"gfl",0,0,0,null,["$2"],["fm"],14)
installTearOff(t,"gfj",0,0,0,null,["$0"],["fk"],1)
installTearOff(P.k9.prototype,"gfV",0,1,0,null,["$1"],["aj"],29)
installTearOff(P,"Hl",1,0,0,null,["$2"],["zh"],30)
installTearOff(P,"Hm",1,0,0,null,["$1"],["fG"],4)
installTearOff(t=W.ib.prototype,"gas",0,1,0,null,["$1"],["cw"],4)
installTearOff(t,"ghm",0,0,0,null,["$1"],["e3"],4)
installTearOff(t,"ghV",0,0,0,null,["$1"],["hW"],4)
installTearOff(W.ej.prototype,"ga_",0,1,0,null,["$1"],["K"],5)
installTearOff(W.ie.prototype,"ga_",0,1,0,null,["$1"],["K"],32)
installTearOff(W.ik.prototype,"ga_",0,1,0,null,["$1"],["K"],5)
installTearOff(W.il.prototype,"ga_",0,1,0,null,["$1"],["K"],8)
installTearOff(W.im.prototype,"ga_",0,1,0,null,["$1"],["K"],5)
installTearOff(W.f8.prototype,"ga_",0,1,0,null,["$1"],["K"],13)
installTearOff(W.iC.prototype,"ga_",0,1,0,null,["$1"],["K"],9)
installTearOff(W.fa.prototype,"ga_",0,1,0,null,["$1"],["K"],7)
installTearOff(W.iE.prototype,"ga_",0,1,0,null,["$1"],["K"],7)
installTearOff(W.jv.prototype,"ga_",0,1,0,null,["$1"],["K"],5)
installTearOff(W.jw.prototype,"ga_",0,1,0,null,["$1"],["K"],10)
installTearOff(W.ch.prototype,"ga_",0,1,0,null,["$1"],["K"],10)
installTearOff(W.jG.prototype,"ga_",0,1,0,null,["$1"],["K"],15)
installTearOff(W.jM.prototype,"ga_",0,1,0,null,["$1"],["K"],9)
installTearOff(W.jO.prototype,"ga_",0,1,0,null,["$1"],["K"],16)
installTearOff(W.jP.prototype,"ga_",0,1,0,null,["$1"],["K"],17)
installTearOff(W.cj.prototype,"ga_",0,1,0,null,["$1"],["K"],18)
installTearOff(W.jT.prototype,"ga_",0,1,0,null,["$1"],["K"],19)
installTearOff(W.jU.prototype,"ga_",0,1,0,null,["$1"],["K"],20)
installTearOff(W.jV.prototype,"ga_",0,1,0,null,["$1"],["K"],21)
installTearOff(W.hU.prototype,"ga_",0,1,0,null,["$1"],["K"],22)
installTearOff(W.k4.prototype,"ga_",0,1,0,null,["$1"],["K"],33)
installTearOff(W.k8.prototype,"ga_",0,1,0,null,["$1"],["K"],24)
installTearOff(W.i0.prototype,"ga_",0,1,0,null,["$1"],["K"],25)
installTearOff(W.kb.prototype,"ga_",0,1,0,null,["$1"],["K"],26)
installTearOff(W.kd.prototype,"ga_",0,1,0,null,["$1"],["K"],27)
installTearOff(P.jQ.prototype,"ga_",0,1,0,null,["$1"],["K"],28)
installTearOff(T,"wD",1,0,0,null,["$0"],["HD"],1)
installTearOff(R,"eD",1,0,0,null,["$1"],["FR"],0)
installTearOff(R,"wO",1,0,0,null,["$1"],["FF"],0)
installTearOff(R,"uw",1,0,0,null,["$1"],["FQ"],0)
installTearOff(R,"bT",1,0,0,null,["$1"],["FP"],0)
installTearOff(R,"uv",1,0,0,null,["$1"],["FO"],0)
installTearOff(R,"wQ",1,0,0,null,["$1"],["FM"],0)
installTearOff(R,"hK",1,0,0,null,["$1"],["FL"],0)
installTearOff(R,"eC",1,0,0,null,["$1"],["FI"],0)
installTearOff(R,"eb",1,0,0,null,["$1"],["FK"],0)
installTearOff(R,"fo",1,0,0,null,["$1"],["FN"],0)
installTearOff(R,"uu",1,0,0,null,["$1"],["FJ"],0)
installTearOff(R,"y",1,0,0,null,["$1"],["FG"],0)
installTearOff(R,"wP",1,0,0,null,["$1"],["FH"],0)
installTearOff(F.hx.prototype,"gas",0,1,0,null,["$1"],["cw"],4)
installTearOff(O,"HF",1,0,0,null,["$1"],["HH"],31)
installTearOff(Y.dQ.prototype,"ghE",0,0,0,null,["$1"],["ec"],function(){return H.eU(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dQ")})
installTearOff(V,"HL",1,0,0,null,["$4"],["zA"],3)
installTearOff(V,"HK",1,0,0,null,["$4"],["zz"],2)
installTearOff(B,"ko",1,0,0,null,["$1"],["H2"],23)
installTearOff(T,"Hh",1,0,0,null,["$4"],["zq"],3)
installTearOff(T,"Hg",1,0,0,null,["$4"],["zp"],2)
installTearOff(T,"Hf",1,0,0,null,["$4"],["zo"],3)
installTearOff(T,"He",1,0,0,null,["$4"],["zn"],2)
installTearOff(F,"Ht",1,0,0,null,["$4"],["zw"],3)
installTearOff(F,"Hs",1,0,0,null,["$4"],["zv"],2)
installTearOff(F,"Hr",1,0,0,null,["$4"],["zu"],3)
installTearOff(F,"Hq",1,0,0,null,["$4"],["zt"],2)
installTearOff(F,"Hp",1,0,0,null,["$4"],["zs"],3)
installTearOff(F,"Ho",1,0,0,null,["$4"],["zr"],2)})();(function inheritance(){inherit(P.ad,null)
var t=P.ad
inherit(H.u2,t)
inherit(J.j,t)
inherit(J.i7,t)
inherit(P.hI,t)
inherit(P.o,t)
inherit(H.ey,t)
inherit(P.jq,t)
inherit(H.iA,t)
inherit(H.pr,t)
inherit(H.f_,t)
inherit(H.qI,t)
inherit(H.fz,t)
inherit(H.qe,t)
inherit(H.eS,t)
inherit(H.qH,t)
inherit(H.q1,t)
inherit(H.fp,t)
inherit(H.pi,t)
inherit(H.dI,t)
inherit(H.dE,t)
inherit(H.eQ,t)
inherit(H.kY,t)
inherit(H.o6,t)
inherit(H.po,t)
inherit(P.el,t)
inherit(H.h6,t)
inherit(H.kc,t)
inherit(H.dY,t)
inherit(H.t,t)
inherit(H.mY,t)
inherit(H.n_,t)
inherit(H.hq,t)
inherit(H.i_,t)
inherit(H.k1,t)
inherit(H.jS,t)
inherit(H.r0,t)
inherit(P.cF,t)
inherit(P.f0,t)
inherit(P.k3,t)
inherit(P.k7,t)
inherit(P.bj,t)
inherit(P.k2,t)
inherit(P.dn,t)
inherit(P.oF,t)
inherit(P.dp,t)
inherit(P.k5,t)
inherit(P.q9,t)
inherit(P.qL,t)
inherit(P.qZ,t)
inherit(P.eW,t)
inherit(P.rd,t)
inherit(P.qy,t)
inherit(P.qA,t)
inherit(P.oo,t)
inherit(P.qF,t)
inherit(P.dD,t)
inherit(P.fg,t)
inherit(P.b6,t)
inherit(P.r5,t)
inherit(P.ne,t)
inherit(P.qG,t)
inherit(P.fU,t)
inherit(P.fV,t)
inherit(P.r7,t)
inherit(P.dc,t)
inherit(P.bv,t)
inherit(P.dL,t)
inherit(P.ds,t)
inherit(P.d1,t)
inherit(P.nG,t)
inherit(P.jR,t)
inherit(P.qj,t)
inherit(P.bD,t)
inherit(P.lu,t)
inherit(P.q,t)
inherit(P.bt,t)
inherit(P.d6,t)
inherit(P.dA,t)
inherit(P.dS,t)
inherit(P.B,t)
inherit(P.cb,t)
inherit(P.eN,t)
inherit(P.kf,t)
inherit(P.ps,t)
inherit(P.qX,t)
inherit(W.ib,t)
inherit(W.jB,t)
inherit(W.id,t)
inherit(P.l0,t)
inherit(W.bx,t)
inherit(W.lY,t)
inherit(W.r4,t)
inherit(P.r1,t)
inherit(P.pV,t)
inherit(P.qE,t)
inherit(P.qN,t)
inherit(P.qO,t)
inherit(P.bh,t)
inherit(P.db,t)
inherit(T.fK,t)
inherit(T.dg,t)
inherit(T.hj,t)
inherit(T.nI,t)
inherit(T.pR,t)
inherit(T.pS,t)
inherit(T.pT,t)
inherit(T.pQ,t)
inherit(T.mg,t)
inherit(T.iF,t)
inherit(B.hk,t)
inherit(N.a5,t)
inherit(L.fL,t)
inherit(A.jC,t)
inherit(O.c9,t)
inherit(T.hM,t)
inherit(M.fS,t)
inherit(K.kT,t)
inherit(K.fj,t)
inherit(X.iq,t)
inherit(X.i9,t)
inherit(M.h7,t)
inherit(Z.ip,t)
inherit(E.nE,t)
inherit(E.J,t)
inherit(A.Y,t)
inherit(U.b,t)
inherit(Y.dR,t)
inherit(K.cH,t)
inherit(X.G,t)
inherit(G.V,t)
inherit(F.cd,t)
inherit(A.fR,t)
inherit(B.du,t)
inherit(B.dh,t)
inherit(A.dK,t)
inherit(F.hw,t)
inherit(F.hx,t)
inherit(Q.jE,t)
inherit(A.jJ,t)
inherit(Y.dQ,t)
inherit(O.cW,t)
inherit(D.cI,t)
inherit(B.dC,t)
inherit(Q.cS,t)
inherit(B.hT,t)
inherit(Q.h,t)
t=J.j
inherit(J.mJ,t)
inherit(J.mK,t)
inherit(J.hr,t)
inherit(J.eu,t)
inherit(J.fh,t)
inherit(J.ev,t)
inherit(H.fk,t)
inherit(H.eA,t)
inherit(W.aV,t)
inherit(W.cM,t)
inherit(W.eZ,t)
inherit(W.fW,t)
inherit(W.bK,t)
inherit(W.iG,t)
inherit(W.lb,t)
inherit(W.f1,t)
inherit(W.ie,t)
inherit(W.ii,t)
inherit(W.lg,t)
inherit(W.ij,t)
inherit(W.iH,t)
inherit(W.il,t)
inherit(W.im,t)
inherit(W.h_,t)
inherit(W.T,t)
inherit(W.iI,t)
inherit(W.lV,t)
inherit(W.lZ,t)
inherit(W.cp,t)
inherit(W.mb,t)
inherit(W.iJ,t)
inherit(W.hi,t)
inherit(W.ec,t)
inherit(W.n8,t)
inherit(W.jv,t)
inherit(W.cr,t)
inherit(W.iT,t)
inherit(W.ny,t)
inherit(W.nz,t)
inherit(W.iU,t)
inherit(W.nN,t)
inherit(W.ea,t)
inherit(W.ed,t)
inherit(W.ch,t)
inherit(W.iV,t)
inherit(W.om,t)
inherit(W.ct,t)
inherit(W.iW,t)
inherit(W.fs,t)
inherit(W.cj,t)
inherit(W.oz,t)
inherit(W.oE,t)
inherit(W.ck,t)
inherit(W.iX,t)
inherit(W.ph,t)
inherit(W.cu,t)
inherit(W.iY,t)
inherit(W.fv,t)
inherit(W.jU,t)
inherit(W.px,t)
inherit(W.fw,t)
inherit(W.jV,t)
inherit(W.q4,t)
inherit(W.iZ,t)
inherit(W.j_,t)
inherit(W.iK,t)
inherit(W.iL,t)
inherit(W.iM,t)
inherit(W.iN,t)
inherit(W.rb,t)
inherit(W.rc,t)
inherit(P.mn,t)
inherit(P.nD,t)
inherit(P.d5,t)
inherit(P.iO,t)
inherit(P.d7,t)
inherit(P.iP,t)
inherit(P.nW,t)
inherit(P.iQ,t)
inherit(P.da,t)
inherit(P.iR,t)
inherit(P.pD,t)
inherit(P.fN,t)
inherit(P.kw,t)
inherit(P.o8,t)
inherit(P.ra,t)
inherit(P.iS,t)
t=J.hr
inherit(J.nU,t)
inherit(J.eM,t)
inherit(J.ew,t)
inherit(F.u5,t)
inherit(R.hf,t)
inherit(R.un,t)
inherit(R.um,t)
inherit(S.fn,t)
inherit(S.uN,t)
inherit(S.uO,t)
inherit(S.uP,t)
inherit(S.ta,t)
inherit(S.td,t)
inherit(S.t0,t)
inherit(S.uR,t)
inherit(S.uS,t)
inherit(S.l8,t)
inherit(S.uE,t)
inherit(S.uF,t)
inherit(S.rV,t)
inherit(S.m5,t)
inherit(S.kP,t)
inherit(S.t_,t)
inherit(S.rZ,t)
inherit(S.tc,t)
inherit(S.pe,t)
inherit(S.t3,t)
inherit(S.hz,t)
inherit(S.ud,t)
inherit(S.uf,t)
inherit(S.uz,t)
inherit(S.uA,t)
inherit(S.uh,t)
inherit(S.ui,t)
inherit(S.tr,t)
inherit(S.ts,t)
inherit(S.uj,t)
inherit(S.ug,t)
inherit(S.rX,t)
inherit(S.uK,t)
inherit(S.uL,t)
inherit(S.uJ,t)
inherit(Z.u0,t)
inherit(Z.tX,t)
inherit(Z.tY,t)
inherit(J.u1,J.eu)
t=J.fh
inherit(J.js,t)
inherit(J.jr,t)
inherit(P.jt,P.hI)
t=P.jt
inherit(H.hO,t)
inherit(W.k6,t)
inherit(H.kV,H.hO)
t=P.o
inherit(H.v,t)
inherit(H.hy,t)
inherit(H.hS,t)
inherit(P.hp,t)
inherit(H.r_,t)
t=H.v
inherit(H.ex,t)
inherit(H.mZ,t)
inherit(P.qz,t)
inherit(P.eG,t)
t=H.ex
inherit(H.p0,t)
inherit(H.fi,t)
inherit(P.n1,t)
inherit(H.fZ,H.hy)
t=P.jq
inherit(H.ju,t)
inherit(H.jX,t)
inherit(Q.pH,t)
t=H.f_
inherit(H.rP,t)
inherit(H.rQ,t)
inherit(H.qD,t)
inherit(H.qf,t)
inherit(H.mr,t)
inherit(H.ms,t)
inherit(H.qK,t)
inherit(H.pj,t)
inherit(H.pk,t)
inherit(H.rR,t)
inherit(H.rD,t)
inherit(H.rE,t)
inherit(H.rF,t)
inherit(H.rG,t)
inherit(H.rH,t)
inherit(H.p5,t)
inherit(H.mN,t)
inherit(H.mM,t)
inherit(H.rz,t)
inherit(H.rA,t)
inherit(H.rB,t)
inherit(P.pZ,t)
inherit(P.pY,t)
inherit(P.q_,t)
inherit(P.q0,t)
inherit(P.re,t)
inherit(P.rf,t)
inherit(P.rp,t)
inherit(P.rr,t)
inherit(P.m3,t)
inherit(P.m2,t)
inherit(P.qk,t)
inherit(P.qs,t)
inherit(P.qo,t)
inherit(P.qp,t)
inherit(P.qq,t)
inherit(P.qm,t)
inherit(P.qr,t)
inherit(P.ql,t)
inherit(P.qv,t)
inherit(P.qw,t)
inherit(P.qu,t)
inherit(P.qt,t)
inherit(P.oI,t)
inherit(P.oG,t)
inherit(P.oH,t)
inherit(P.oJ,t)
inherit(P.oO,t)
inherit(P.oM,t)
inherit(P.oN,t)
inherit(P.oP,t)
inherit(P.oS,t)
inherit(P.oT,t)
inherit(P.oQ,t)
inherit(P.oR,t)
inherit(P.oU,t)
inherit(P.oV,t)
inherit(P.oK,t)
inherit(P.oL,t)
inherit(P.q3,t)
inherit(P.q2,t)
inherit(P.qM,t)
inherit(P.rh,t)
inherit(P.rg,t)
inherit(P.ri,t)
inherit(P.ro,t)
inherit(P.qQ,t)
inherit(P.qR,t)
inherit(P.qS,t)
inherit(P.qB,t)
inherit(P.nf,t)
inherit(P.r9,t)
inherit(P.r8,t)
inherit(P.ld,t)
inherit(P.le,t)
inherit(P.lk,t)
inherit(P.ll,t)
inherit(P.pw,t)
inherit(P.pt,t)
inherit(P.pu,t)
inherit(P.pv,t)
inherit(P.rs,t)
inherit(P.rl,t)
inherit(P.rk,t)
inherit(P.rm,t)
inherit(P.rn,t)
inherit(W.q6,t)
inherit(W.me,t)
inherit(W.mf,t)
inherit(W.qi,t)
inherit(P.r3,t)
inherit(P.pW,t)
inherit(P.rt,t)
inherit(P.ru,t)
inherit(P.l1,t)
inherit(P.rj,t)
inherit(P.kB,t)
inherit(P.kC,t)
inherit(O.kK,t)
inherit(A.mI,t)
inherit(A.mH,t)
inherit(T.rJ,t)
inherit(G.mF,t)
inherit(U.pL,t)
inherit(U.pM,t)
inherit(F.pO,t)
inherit(A.rq,t)
inherit(A.n5,t)
inherit(A.n3,t)
inherit(A.n4,t)
inherit(A.n6,t)
inherit(O.rM,t)
inherit(O.rN,t)
inherit(O.rL,t)
inherit(V.lr,t)
inherit(V.lq,t)
inherit(V.lp,t)
inherit(V.lo,t)
inherit(D.oD,t)
inherit(Q.pI,t)
t=H.q1
inherit(H.fA,t)
inherit(H.i2,t)
inherit(H.kZ,H.kY)
t=P.el
inherit(H.jA,t)
inherit(H.mO,t)
inherit(H.pq,t)
inherit(H.kS,t)
inherit(H.oc,t)
inherit(P.fm,t)
inherit(P.d_,t)
inherit(P.Z,t)
inherit(P.eL,t)
inherit(P.dT,t)
inherit(P.bN,t)
inherit(P.la,t)
t=H.p5
inherit(H.oB,t)
inherit(H.fP,t)
t=P.hp
inherit(H.pX,t)
inherit(T.fJ,t)
t=H.eA
inherit(H.nq,t)
inherit(H.jx,t)
t=H.jx
inherit(H.hE,t)
inherit(H.hF,t)
inherit(H.hG,H.hE)
inherit(H.hC,H.hG)
inherit(H.hH,H.hF)
inherit(H.hD,H.hH)
t=H.hC
inherit(H.nr,t)
inherit(H.ns,t)
t=H.hD
inherit(H.nt,t)
inherit(H.nu,t)
inherit(H.nv,t)
inherit(H.nw,t)
inherit(H.nx,t)
inherit(H.jy,t)
inherit(H.fl,t)
t=P.k3
inherit(P.e_,t)
inherit(P.ke,t)
t=P.k5
inherit(P.q8,t)
inherit(P.qa,t)
inherit(P.qY,P.qL)
t=P.dn
inherit(P.hW,t)
inherit(W.qg,t)
inherit(P.hX,P.dp)
inherit(P.qJ,P.hW)
inherit(P.qP,P.rd)
inherit(P.ka,H.t)
inherit(P.on,P.oo)
inherit(P.qC,P.on)
inherit(P.k9,P.qC)
inherit(P.hP,P.ne)
t=P.fU
inherit(P.kG,t)
inherit(P.ln,t)
t=P.fV
inherit(P.kH,t)
inherit(P.pA,t)
inherit(P.pz,P.ln)
t=P.ds
inherit(P.U,t)
inherit(P.E,t)
t=P.d_
inherit(P.eF,t)
inherit(P.mo,t)
inherit(P.q7,P.kf)
t=W.aV
inherit(W.aQ,t)
inherit(W.h0,t)
inherit(W.kX,t)
inherit(W.lU,t)
inherit(W.lW,t)
inherit(W.m_,t)
inherit(W.hh,t)
inherit(W.hB,t)
inherit(W.nZ,t)
inherit(W.jL,t)
inherit(W.op,t)
inherit(W.eO,t)
inherit(W.cs,t)
inherit(W.h1,t)
inherit(W.cR,t)
inherit(W.cJ,t)
inherit(W.h2,t)
inherit(W.pB,t)
inherit(W.pG,t)
inherit(W.jY,t)
inherit(W.pN,t)
inherit(W.qW,t)
inherit(P.lc,t)
inherit(P.hL,t)
inherit(P.pm,t)
inherit(P.bC,t)
inherit(P.fO,t)
t=W.aQ
inherit(W.dv,t)
inherit(W.eh,t)
inherit(W.ek,t)
inherit(W.ih,t)
inherit(W.fx,t)
inherit(W.qb,t)
t=W.dv
inherit(W.aC,t)
inherit(P.cc,t)
t=W.aC
inherit(W.eV,t)
inherit(W.kx,t)
inherit(W.hA,t)
inherit(W.kI,t)
inherit(W.kM,t)
inherit(W.fT,t)
inherit(W.lm,t)
inherit(W.lT,t)
inherit(W.iC,t)
inherit(W.mj,t)
inherit(W.fc,t)
inherit(W.mp,t)
inherit(W.mR,t)
inherit(W.ht,t)
inherit(W.nd,t)
inherit(W.nj,t)
inherit(W.nC,t)
inherit(W.nH,t)
inherit(W.nL,t)
inherit(W.fq,t)
inherit(W.jM,t)
inherit(W.or,t)
inherit(W.fr,t)
inherit(W.p7,t)
inherit(W.p9,t)
inherit(W.qx,t)
inherit(W.eY,W.hA)
inherit(W.h3,W.h0)
inherit(W.kE,W.h3)
t=W.bK
inherit(W.l2,t)
inherit(W.l3,t)
inherit(W.fX,t)
inherit(W.fY,t)
inherit(W.l4,t)
inherit(W.l5,t)
inherit(W.l6,t)
inherit(W.ej,W.iG)
inherit(W.q5,W.jB)
inherit(W.j0,W.iH)
inherit(W.ik,W.j0)
t=W.T
inherit(W.ls,t)
inherit(W.ox,t)
inherit(W.oy,t)
inherit(W.cf,W.eZ)
inherit(W.j1,W.iI)
inherit(W.f8,W.j1)
inherit(W.j2,W.iJ)
inherit(W.fa,W.j2)
inherit(W.iE,W.fa)
inherit(W.e8,W.hh)
inherit(W.hs,W.ec)
inherit(W.nk,W.hB)
inherit(W.jc,W.iT)
inherit(W.jw,W.jc)
inherit(W.jd,W.iU)
inherit(W.jz,W.jd)
inherit(W.nT,W.ed)
inherit(W.je,W.iV)
inherit(W.jG,W.je)
inherit(W.oq,W.eO)
inherit(W.h4,W.h1)
inherit(W.jO,W.h4)
inherit(W.jf,W.iW)
inherit(W.jP,W.jf)
inherit(W.jg,W.iX)
inherit(W.pc,W.jg)
inherit(W.h5,W.h2)
inherit(W.pd,W.h5)
inherit(W.jh,W.iY)
inherit(W.jT,W.jh)
inherit(W.ji,W.iZ)
inherit(W.hU,W.ji)
inherit(W.jj,W.j_)
inherit(W.k4,W.jj)
inherit(W.qc,W.ij)
inherit(W.j3,W.iK)
inherit(W.k8,W.j3)
inherit(W.j4,W.iL)
inherit(W.i0,W.j4)
inherit(W.j5,W.iM)
inherit(W.kb,W.j5)
inherit(W.j6,W.iN)
inherit(W.kd,W.j6)
t=P.l0
inherit(W.qd,t)
inherit(P.kA,t)
inherit(W.hV,W.qg)
inherit(W.qh,P.oF)
inherit(P.r2,P.r1)
inherit(P.k0,P.pV)
inherit(P.bU,P.qO)
t=P.cc
inherit(P.cq,t)
inherit(P.eg,t)
inherit(P.lv,t)
inherit(P.lw,t)
inherit(P.lx,t)
inherit(P.ly,t)
inherit(P.lz,t)
inherit(P.lA,t)
inherit(P.lB,t)
inherit(P.lC,t)
inherit(P.lD,t)
inherit(P.lE,t)
inherit(P.lF,t)
inherit(P.lG,t)
inherit(P.lH,t)
inherit(P.lI,t)
inherit(P.lJ,t)
inherit(P.lK,t)
inherit(P.lX,t)
inherit(P.ng,t)
inherit(P.nh,t)
inherit(P.nR,t)
inherit(P.oj,t)
inherit(P.p3,t)
inherit(P.pC,t)
inherit(P.hY,t)
inherit(P.qT,t)
inherit(P.qU,t)
inherit(P.qV,t)
t=P.cq
inherit(P.ku,t)
inherit(P.mk,t)
inherit(P.p1,t)
inherit(P.eK,t)
inherit(P.py,t)
inherit(P.j7,P.iO)
inherit(P.mU,P.j7)
inherit(P.j8,P.iP)
inherit(P.nA,P.j8)
inherit(P.j9,P.iQ)
inherit(P.oZ,P.j9)
inherit(P.pb,P.eK)
inherit(P.ja,P.iR)
inherit(P.pn,P.ja)
t=P.bC
inherit(P.e5,t)
inherit(P.l_,t)
inherit(P.eX,P.e5)
inherit(P.jb,P.iS)
inherit(P.jQ,P.jb)
t=B.hk
inherit(S.kv,t)
inherit(M.kz,t)
inherit(A.kW,t)
inherit(M.l7,t)
inherit(V.lh,t)
inherit(U.lL,t)
inherit(N.mQ,t)
inherit(F.no,t)
inherit(G.nX,t)
inherit(Q.oa,t)
inherit(N.ot,t)
inherit(D.p6,t)
inherit(V.p8,t)
inherit(F.pP,t)
t=N.a5
inherit(T.lf,t)
inherit(R.o2,t)
t=T.lf
inherit(K.bW,t)
inherit(S.bH,t)
inherit(T.c3,t)
inherit(M.bB,t)
inherit(A.nK,A.jC)
inherit(L.aa,A.nK)
t=O.c9
inherit(O.dt,t)
inherit(O.io,t)
inherit(O.eJ,t)
t=O.dt
inherit(U.kD,t)
inherit(Y.o4,t)
inherit(V.m0,t)
inherit(Q.mm,t)
inherit(Q.nS,t)
inherit(M.oA,t)
inherit(B.pU,t)
t=U.kD
inherit(U.na,t)
inherit(U.nF,t)
inherit(U.oW,O.io)
t=U.oW
inherit(U.oX,t)
inherit(U.oY,t)
t=T.hM
inherit(O.kF,t)
inherit(Y.m6,t)
inherit(Y.m7,t)
inherit(B.m9,t)
inherit(X.mh,t)
inherit(Q.mi,t)
inherit(S.mS,t)
inherit(Z.n9,t)
inherit(S.nb,t)
inherit(U.nc,t)
inherit(E.nn,t)
inherit(V.nJ,t)
inherit(N.o1,t)
inherit(N.o9,t)
inherit(E.oe,t)
inherit(Y.of,t)
inherit(Y.oh,t)
inherit(L.oi,t)
inherit(S.ol,t)
inherit(Y.os,t)
inherit(R.p2,t)
inherit(U.pf,t)
inherit(E.pF,t)
inherit(M.pJ,t)
t=O.eJ
inherit(Y.pa,t)
inherit(Y.kQ,t)
inherit(Y.nB,t)
inherit(U.pK,t)
t=L.fL
inherit(L.kJ,t)
inherit(T.kL,t)
inherit(T.kO,t)
inherit(U.li,t)
inherit(Z.lj,t)
inherit(T.m8,t)
inherit(V.ma,t)
inherit(X.mc,t)
inherit(Z.mP,t)
inherit(Q.mT,t)
inherit(K.mV,t)
inherit(G.mW,t)
inherit(D.ni,t)
inherit(V.nl,t)
inherit(E.o3,t)
inherit(V.ob,t)
inherit(K.og,t)
inherit(N.ov,t)
inherit(A.nm,t)
inherit(A.ow,t)
inherit(A.nY,t)
inherit(A.ou,t)
inherit(A.pl,t)
inherit(A.o5,t)
inherit(A.m4,t)
inherit(L.p4,t)
inherit(N.pg,t)
inherit(Q.pE,t)
t=S.bH
inherit(S.ia,t)
inherit(S.md,t)
inherit(E.iD,E.nE)
t=E.J
inherit(E.fM,t)
inherit(E.i8,t)
inherit(Q.nV,Q.mm)
inherit(U.X,U.b)
t=R.o2
inherit(R.a1,t)
inherit(R.R,t)
inherit(R.a8,t)
inherit(R.bA,R.a8)
t=Y.dR
inherit(Y.af,t)
inherit(Y.c1,t)
inherit(Y.S,t)
inherit(Y.ic,t)
inherit(Y.bE,t)
inherit(Y.cY,t)
inherit(Y.kU,t)
inherit(Y.jD,t)
inherit(Y.iB,t)
inherit(Y.jF,t)
t=Y.c1
inherit(Y.d0,t)
inherit(Y.bw,t)
inherit(U.au,A.Y)
t=G.V
inherit(G.aY,t)
inherit(G.bI,t)
inherit(G.e,t)
inherit(G.at,G.bI)
t=D.cI
inherit(D.k_,t)
inherit(D.o7,t)
t=Q.cS
inherit(Q.hR,t)
inherit(Q.hQ,t)
inherit(Q.dZ,Q.hR)
inherit(B.jZ,Q.dZ)
t=S.fn
inherit(S.ux,t)
inherit(S.kR,t)
inherit(S.mX,t)
inherit(S.ub,t)
inherit(S.tq,t)
t=S.kR
inherit(S.uo,t)
inherit(S.uk,t)
t=S.mX
inherit(S.t5,t)
inherit(S.rW,t)
t=S.l8
inherit(S.u6,t)
inherit(S.l9,t)
inherit(S.nM,S.l9)
inherit(S.uB,S.nM)
t=S.kP
inherit(S.up,t)
inherit(S.uC,t)
t=S.m5
inherit(S.uG,t)
inherit(S.uq,t)
inherit(S.tb,t)
inherit(S.uD,t)
t=S.pe
inherit(S.uI,t)
inherit(S.t2,t)
inherit(S.uQ,t)
t=S.hz
inherit(S.uc,t)
inherit(S.ue,t)
inherit(S.uy,t)
inherit(Q.eP,Q.hQ)
inherit(Q.jW,Q.eP)
mixin(H.hO,H.pr)
mixin(H.hE,P.b6)
mixin(H.hG,H.iA)
mixin(H.hF,P.b6)
mixin(H.hH,H.iA)
mixin(P.hI,P.b6)
mixin(P.hP,P.r5)
mixin(W.h0,P.b6)
mixin(W.h3,W.bx)
mixin(W.iG,W.id)
mixin(W.jB,W.id)
mixin(W.iH,P.b6)
mixin(W.j0,W.bx)
mixin(W.iI,P.b6)
mixin(W.j1,W.bx)
mixin(W.iJ,P.b6)
mixin(W.j2,W.bx)
mixin(W.iT,P.b6)
mixin(W.jc,W.bx)
mixin(W.iU,P.b6)
mixin(W.jd,W.bx)
mixin(W.iV,P.b6)
mixin(W.je,W.bx)
mixin(W.h1,P.b6)
mixin(W.h4,W.bx)
mixin(W.iW,P.b6)
mixin(W.jf,W.bx)
mixin(W.iX,P.b6)
mixin(W.jg,W.bx)
mixin(W.h2,P.b6)
mixin(W.h5,W.bx)
mixin(W.iY,P.b6)
mixin(W.jh,W.bx)
mixin(W.iZ,P.b6)
mixin(W.ji,W.bx)
mixin(W.j_,P.b6)
mixin(W.jj,W.bx)
mixin(W.iK,P.b6)
mixin(W.j3,W.bx)
mixin(W.iL,P.b6)
mixin(W.j4,W.bx)
mixin(W.iM,P.b6)
mixin(W.j5,W.bx)
mixin(W.iN,P.b6)
mixin(W.j6,W.bx)
mixin(P.iO,P.b6)
mixin(P.j7,W.bx)
mixin(P.iP,P.b6)
mixin(P.j8,W.bx)
mixin(P.iQ,P.b6)
mixin(P.j9,W.bx)
mixin(P.iR,P.b6)
mixin(P.ja,W.bx)
mixin(P.iS,P.b6)
mixin(P.jb,W.bx)
mixin(A.jC,P.fg)
mixin(Q.hR,P.b6)
mixin(Q.hQ,P.fg)})();(function constants(){C.L=W.ej.prototype
C.M=W.e8.prototype
C.N=J.j.prototype
C.b=J.eu.prototype
C.f=J.jr.prototype
C.a=J.js.prototype
C.d=J.fh.prototype
C.c=J.ev.prototype
C.U=J.ew.prototype
C.q=H.fl.prototype
C.F=J.nU.prototype
C.a1=W.fr.prototype
C.t=J.eM.prototype
C.H=new P.kH(!1)
C.G=new P.kG(C.H)
C.i=new W.ib()
C.I=new P.nG()
C.J=new P.q9()
C.K=new P.qE()
C.e=new P.qP()
C.o=new W.r4()
C.p=new P.d1(0)
C.O=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.u=function(hooks) { return hooks; }
C.P=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.Q=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.R=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.v=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.S=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.T=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.w=H.a(makeConstList([127,2047,65535,1114111]),[P.E])
C.x=makeConstList([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8])
C.j=makeConstList([0,0,32776,33792,1,10240,0,0])
C.k=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.l=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.V=makeConstList([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13])
C.y=makeConstList([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])
C.W=makeConstList([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0])
C.X=makeConstList([])
C.Z=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.z=makeConstList([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577])
C.A=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.B=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.C=makeConstList([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258])
C.D=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.E=makeConstList([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15])
C.h=new F.hw(0,"LogLevel.ERROR")
C.m=new F.hw(1,"LogLevel.WARN")
C.a_=new F.hw(3,"LogLevel.VERBOSE")
C.Y=H.a(makeConstList([]),[P.B])
C.a0=new H.kZ(0,{},C.Y,[P.B,P.B])
C.a2=H.c_("bh")
C.a3=H.c_("HT")
C.r=H.c_("HU")
C.a4=H.c_("HV")
C.a5=H.c_("HW")
C.a6=H.c_("HY")
C.a7=H.c_("HZ")
C.a8=H.c_("I_")
C.a9=H.c_("mL")
C.aa=H.c_("d6")
C.ab=H.c_("B")
C.ac=H.c_("I3")
C.ad=H.c_("I4")
C.ae=H.c_("I5")
C.af=H.c_("db")
C.ag=H.c_("dc")
C.ah=H.c_("U")
C.ai=H.c_("E")
C.aj=H.c_("ds")
C.n=new P.pz(!1)})();(function staticFields(){$.wJ="$cachedFunction"
$.wK="$cachedInvocation"
$.dJ=0
$.fQ=null
$.vm=null
$.v1=null
$.xG=null
$.xU=null
$.rv=null
$.rC=null
$.v2=null
$.fC=null
$.i3=null
$.i4=null
$.uZ=!1
$.aD=C.e
$.vH=0
$.vC=null
$.vB=null
$.vA=null
$.vD=null
$.vz=null
$.yN=null
$.yQ=null
$.ys=null
$.yt=null
$.yr=null
$.yw=null
$.yE=null
$.yC=null
$.yS=null
$.yI=null
$.yy=null
$.yB=null
$.yu=null
$.yA=null
$.yL=null
$.yz=null
$.yP=null
$.yK=null
$.yx=null
$.yq=null
$.yF=null
$.yO=null
$.yH=null
$.yM=null
$.yR=null
$.yJ=null
$.yv=null
$.yD=null
$.yG=null
$.ag="accent"
$.ai="aspect1"
$.ah="aspect2"
$.ar="shoe1"
$.aq="shoe2"
$.ak="cloak1"
$.al="cloak2"
$.aj="cloak3"
$.ap="shirt1"
$.ao="shirt2"
$.an="pants1"
$.am="pants2"
$.z2=null
$.yX=null
$.yY=null
$.z3=null
$.z6=null
$.za=null
$.yZ=null
$.z8=null
$.yW=null
$.z5=null
$.z4=null
$.z9=null
$.z7=null
$.z1=null
$.z_=null
$.z0=null
$.vq=null
$.ax=1300
$.k=3
$.m=2
$.L=1
$.A=0.1
$.zK=1
$.zJ=-1
$.tl=null
$.e6=null
$.vI=null
$.eo=null
$.f6=null
$.it=null
$.te=null
$.lN=null
$.tn=null
$.iu=null
$.ir=null
$.vK=null
$.iz=null
$.h8=null
$.dP=null
$.vJ=null
$.lM=null
$.lS=null
$.f4=null
$.zH=null
$.zE=null
$.zG=null
$.zI=null
$.he=null
$.f2=null
$.cz=null
$.d2=null
$.eq=null
$.lR=null
$.c8=null
$.c7=null
$.tg=null
$.hc=null
$.en=null
$.zF=null
$.hb=null
$.cE=null
$.e7=null
$.iy=null
$.cT=null
$.f5=null
$.c0=null
$.lP=null
$.th=null
$.b2=null
$.cD=null
$.c6=null
$.ce=null
$.lO=null
$.bP=null
$.dy=null
$.dx=null
$.dw=null
$.dN=null
$.dO=null
$.dM=null
$.d4=null
$.hd=null
$.ix=null
$.is=null
$.cU=null
$.cy=null
$.be=null
$.f3=null
$.ep=null
$.lQ=null
$.ha=null
$.h9=null
$.tj=null
$.cC=null
$.tm=null
$.tf=null
$.vM=null
$.em=null
$.cB=null
$.d3=null
$.di=null
$.f7=null
$.ti=null
$.tk=null
$.vL=null
$.iv=null
$.iw=null
$.er=null
$.vN=!1
$.tp=null
$.zL=null
$.vP=null
$.vR=null
$.zU=null
$.vQ=null
$.zS=null
$.zT=null
$.to=null
$.zP=null
$.zN=null
$.zO=null
$.zQ=null
$.zR=null
$.A3=null
$.zX=null
$.zY=null
$.zZ=null
$.A_=null
$.A0=null
$.A1=null
$.A2=null
$.A5=null
$.A6=null
$.A7=null
$.A8=null
$.A9=null
$.Aa=null
$.A4=null
$.Fl="JACK"
$.Fp="PM"
$.Fm="JS"
$.Fk="HP"
$.Fu="YD"
$.Fr="SI"
$.Fs="SU"
$.Fn="ME"
$.Fq="RB"
$.Fi="GN"
$.wE="MP"
$.Fg="AR"
$.Fo="PE"
$.Fh="DP"
$.Ft="WV"
$.Fj="HB"
$.n="PLAYER1TAG"
$.eE="PLAYER2TAG"
$.z="DENIZENTAG"
$.u="CONSORTTAG"
$.M="CONSORTSOUNDTAG"
$.aX="MCGUFFINTAG"
$.ae="TAGPHYSICALMCGUFFIN"
$.ci="TAGWEAPON"
$.G1=null
$.Ge=null
$.FW=null
$.FZ=null
$.G4=null
$.G9=null
$.G7=null
$.Gh=null
$.Gg=null
$.G8=null
$.Gj=null
$.G3=null
$.Gi=null
$.Gc=null
$.Ga=null
$.Gd=null
$.FY=null
$.FX=null
$.G6=null
$.G5=null
$.G2=null
$.Gf=null
$.G_=null
$.G0=null
$.Gb=null
$.xM=!1
$.Gk=!1
$.wS=null
$.Gr=13
$.av=3
$.bM=2
$.aR=1
$.mG=0
$.K=1
$.a4=3
$.I=4
$.tU=6
$.tV=7
$.ac=8
$.x=9
$.r=10
$.fe=null
$.et=null
$.tF=null
$.tQ=null
$.tM=null
$.vX=null
$.tB=null
$.tL=null
$.hn=null
$.w5=null
$.wn=null
$.w_=null
$.w6=null
$.tC=null
$.tK=null
$.wq=null
$.ws=null
$.ty=null
$.jl=null
$.jk=null
$.aI=null
$.wh=null
$.tw=null
$.we=null
$.ff=null
$.vZ=null
$.wt=null
$.wp=null
$.wm=null
$.tJ=null
$.mz=null
$.es=null
$.wr=null
$.mv=null
$.tD=null
$.e9=null
$.wk=null
$.dj=null
$.hm=null
$.tT=null
$.wl=null
$.tS=null
$.tN=null
$.tP=null
$.mD=null
$.hl=null
$.Az=null
$.w8=null
$.wd=null
$.wj=null
$.wi=null
$.C=null
$.w3=null
$.mw=null
$.bQ=null
$.b9=null
$.bR=null
$.W=null
$.aN=null
$.c2=null
$.N=null
$.Q=null
$.aG=null
$.b3=null
$.bX=null
$.bf=null
$.bq=null
$.cg=null
$.b5=null
$.bz=null
$.bS=null
$.a_=null
$.EU=null
$.aH=null
$.b4=null
$.aZ=null
$.ab=null
$.ca=null
$.b1=null
$.aF=null
$.bF=null
$.b_=null
$.az=null
$.bo=null
$.bY=null
$.aM=null
$.bs=null
$.bp=null
$.a2=null
$.bL=null
$.a7=null
$.bc=null
$.br=null
$.b0=null
$.bg=null
$.aJ=null
$.b7=null
$.aK=null
$.a0=null
$.aA=null
$.aO=null
$.b8=null
$.aE=null
$.ay=null
$.a3=null
$.H=null
$.P=null
$.as=null
$.aw=null
$.aW=null
$.aS=null
$.BR=null
$.Ew=null
$.F4=null
$.Bn=null
$.Et=null
$.BS=null
$.vW=null
$.EI=null
$.CR=null
$.BN=null
$.Av=null
$.Dr=null
$.jm=null
$.w0=null
$.DR=null
$.Bk=null
$.CA=null
$.Bi=null
$.tz=null
$.B3=null
$.C3=null
$.Br=null
$.CK=null
$.EQ=null
$.BT=null
$.mx=null
$.CL=null
$.Bp=null
$.B9=null
$.tO=null
$.Ao=null
$.tv=null
$.Ct=null
$.tH=null
$.D5=null
$.D_=null
$.As=null
$.Bc=null
$.E0=null
$.Au=null
$.Es=null
$.Cz=null
$.By=null
$.DL=null
$.Em=null
$.my=null
$.CV=null
$.DI=null
$.Bq=null
$.Ah=null
$.ET=null
$.CD=null
$.B8=null
$.EH=null
$.D8=null
$.Bf=null
$.Er=null
$.BI=null
$.E8=null
$.E9=null
$.Aq=null
$.D1=null
$.Bs=null
$.BC=null
$.F8=null
$.ho=null
$.DZ=null
$.Ep=null
$.mB=null
$.AY=null
$.Di=null
$.Dm=null
$.An=null
$.BH=null
$.Eq=null
$.D7=null
$.EK=null
$.DN=null
$.Dn=null
$.wc=null
$.Ec=null
$.EZ=null
$.Ev=null
$.Cg=null
$.Dz=null
$.Ch=null
$.E1=null
$.EX=null
$.CJ=null
$.BE=null
$.C0=null
$.AP=null
$.DJ=null
$.BZ=null
$.C5=null
$.Bu=null
$.Eb=null
$.fd=null
$.Dc=null
$.wa=null
$.Ci=null
$.wb=null
$.F1=null
$.AU=null
$.DX=null
$.DY=null
$.DW=null
$.DV=null
$.Ei=null
$.C6=null
$.D2=null
$.El=null
$.CU=null
$.Dd=null
$.w2=null
$.EW=null
$.D0=null
$.BK=null
$.BL=null
$.Dl=null
$.F7=null
$.Cx=null
$.EV=null
$.tI=null
$.E7=null
$.CH=null
$.jn=null
$.Cr=null
$.DB=null
$.AT=null
$.BO=null
$.E3=null
$.D3=null
$.EP=null
$.wf=null
$.Db=null
$.B_=null
$.Bl=null
$.Dx=null
$.EC=null
$.E2=null
$.mt=null
$.tR=null
$.Ee=null
$.EY=null
$.Cf=null
$.AD=null
$.AM=null
$.EA=null
$.Df=null
$.CS=null
$.Dg=null
$.Ex=null
$.Cs=null
$.Ar=null
$.C4=null
$.CQ=null
$.Eg=null
$.BY=null
$.AS=null
$.DT=null
$.DU=null
$.EN=null
$.E5=null
$.mC=null
$.w1=null
$.Bg=null
$.w4=null
$.Cm=null
$.mA=null
$.DD=null
$.CZ=null
$.DP=null
$.tE=null
$.mE=null
$.tG=null
$.BA=null
$.C2=null
$.wg=null
$.w7=null
$.Bb=null
$.EE=null
$.B4=null
$.Dp=null
$.Cj=null
$.Ek=null
$.CT=null
$.AA=null
$.Ck=null
$.Bx=null
$.Dt=null
$.CC=null
$.CY=null
$.CI=null
$.CM=null
$.DS=null
$.DO=null
$.Ak=null
$.EB=null
$.DG=null
$.Bo=null
$.Bt=null
$.C1=null
$.Ey=null
$.BV=null
$.CE=null
$.AH=null
$.BP=null
$.Bw=null
$.Dh=null
$.BF=null
$.E_=null
$.CG=null
$.vY=null
$.DC=null
$.Cl=null
$.BW=null
$.Ai=null
$.Ap=null
$.De=null
$.Do=null
$.CB=null
$.Cd=null
$.ES=null
$.AK=null
$.BX=null
$.CF=null
$.Bm=null
$.wo=null
$.Ba=null
$.E4=null
$.AI=null
$.ED=null
$.CO=null
$.AC=null
$.DM=null
$.Dy=null
$.Bh=null
$.C7=null
$.AZ=null
$.Ez=null
$.Cp=null
$.EO=null
$.B0=null
$.C8=null
$.B1=null
$.Bj=null
$.DF=null
$.Bd=null
$.Cq=null
$.D4=null
$.AV=null
$.Ej=null
$.F3=null
$.Ea=null
$.CW=null
$.Eh=null
$.CX=null
$.Ax=null
$.Aj=null
$.CP=null
$.AF=null
$.B2=null
$.Ay=null
$.AB=null
$.Da=null
$.Du=null
$.EG=null
$.Cn=null
$.F2=null
$.DK=null
$.DH=null
$.Cu=null
$.Co=null
$.B6=null
$.Cb=null
$.CN=null
$.Dj=null
$.Ed=null
$.Am=null
$.F_=null
$.BD=null
$.En=null
$.Bv=null
$.Aw=null
$.AW=null
$.AO=null
$.F6=null
$.AX=null
$.BG=null
$.B5=null
$.EM=null
$.Ef=null
$.EF=null
$.Al=null
$.DQ=null
$.Cv=null
$.Cy=null
$.ER=null
$.Eo=null
$.w9=null
$.BM=null
$.Dw=null
$.F0=null
$.BQ=null
$.Cw=null
$.tA=null
$.Ce=null
$.Cc=null
$.E6=null
$.Dv=null
$.C9=null
$.AN=null
$.Eu=null
$.Dk=null
$.EJ=null
$.F5=null
$.mu=null
$.tx=null
$.AJ=null
$.BJ=null
$.DE=null
$.Be=null
$.DA=null
$.Bz=null
$.At=null
$.AL=null
$.D9=null
$.BB=null
$.Ds=null
$.AR=null
$.BU=null
$.EL=null
$.AE=null
$.C_=null
$.Dq=null
$.AQ=null
$.Ca=null
$.D6=null
$.AG=null
$.B7=null
$.xh=4
$.f9="OWNER"
$.wz=!1
$.ua=null
$.xW=""
$.oC=null
$.Go=null
$.eI=null
$.dV=null
$.Gn=null
$.d9=null
$.dW=null
$.c4=null
$.dU=null
$.ft=null
$.eH=null
$.d8=null
$.bZ=null
$.wU=!1})();(function lazyInitializers(){lazy($,"vw","$get$vw",function(){return H.xP("_$dart_dartClosure")})
lazy($,"u3","$get$u3",function(){return H.xP("_$dart_js")})
lazy($,"vU","$get$vU",function(){return H.Af()})
lazy($,"vV","$get$vV",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.vH
$.vH=t+1
t="expando$key$"+t}return new P.lu(null,t,[P.E])})
lazy($,"wY","$get$wY",function(){return H.dX(H.pp({
toString:function(){return"$receiver$"}}))})
lazy($,"wZ","$get$wZ",function(){return H.dX(H.pp({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"x_","$get$x_",function(){return H.dX(H.pp(null))})
lazy($,"x0","$get$x0",function(){return H.dX(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"x4","$get$x4",function(){return H.dX(H.pp(void 0))})
lazy($,"x5","$get$x5",function(){return H.dX(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"x2","$get$x2",function(){return H.dX(H.x3(null))})
lazy($,"x1","$get$x1",function(){return H.dX(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"x7","$get$x7",function(){return H.dX(H.x3(void 0))})
lazy($,"x6","$get$x6",function(){return H.dX(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"uV","$get$uV",function(){return P.Gx()})
lazy($,"hg","$get$hg",function(){return P.GD(null,P.d6)})
lazy($,"i5","$get$i5",function(){return[]})
lazy($,"xj","$get$xj",function(){return H.Fv([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"xE","$get$xE",function(){return P.H1()})
lazy($,"vv","$get$vv",function(){return{}})
lazy($,"vt","$get$vt",function(){return P.dB("^\\S+$",!0,!1)})
lazy($,"ky","$get$ky",function(){return P.cG(P.E,L.fL)})
lazy($,"vo","$get$vo",function(){return P.dB("[\\/]",!0,!1)})
lazy($,"bO","$get$bO",function(){return H.a([],[S.bH])})
lazy($,"m1","$get$m1",function(){return P.cG(P.B,Z.ip)})
lazy($,"mq","$get$mq",function(){return P.cG(P.E,B.hk)})
lazy($,"wu","$get$wu",function(){return H.a([],[A.Y])})
lazy($,"xS","$get$xS",function(){return K.vr()})
lazy($,"wF","$get$wF",function(){return H.a([],[P.B])})
lazy($,"od","$get$od",function(){return P.cG(P.E,T.hM)})
lazy($,"aB","$get$aB",function(){return H.a([],[U.au])})
lazy($,"wT","$get$wT",function(){return P.wx([0,new K.cH("Pixels -> Bytes",T.Hh(),T.Hg()),1,new K.cH("Pixels -> Packed bits",T.Hf(),T.He()),2,new K.cH("RLE 1 byte",V.t9(1),V.t8(1)),3,new K.cH("RLE 2 bytes",V.t9(2),V.t8(2)),4,new K.cH("RLE 3 bytes",V.t9(3),V.t8(3)),5,new K.cH("RLE packed 1 byte",V.t7(1),V.t6(1)),6,new K.cH("RLE packed 2 bytes",V.t7(2),V.t6(2)),7,new K.cH("RLE packed 3 bytes",V.t7(3),V.t6(3)),8,new K.cH("RLE dynamic",V.HL(),V.HK()),9,new K.cH("Exponential-Golomb pixels",F.Ht(),F.Hs()),10,new K.cH("Exponential-Golomb run RLE",F.Hr(),F.Hq()),11,new K.cH("Exponential-Golomb run/data RLE",F.Hp(),F.Ho())],P.E,K.cH)})
lazy($,"c","$get$c",function(){return P.a6(null,null,null,G.V)})
lazy($,"xf","$get$xf",function(){return P.dB("[\n\r]+",!0,!1)})
lazy($,"xg","$get$xg",function(){return P.dB("( *)(.*)",!0,!1)})
lazy($,"xe","$get$xe",function(){return P.dB("^s*//",!0,!1)})
lazy($,"xd","$get$xd",function(){return P.dB("//",!0,!1)})
lazy($,"cK","$get$cK",function(){return new F.hx(!1,!1,"WordListFileFormat")})
lazy($,"cl","$get$cl",function(){return H.a([],[F.cd])})
lazy($,"xi","$get$xi",function(){return new T.pQ(null)})
lazy($,"vk","$get$vk",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cV","$get$cV",function(){return P.cG(P.B,Y.dQ)})
lazy($,"wA","$get$wA",function(){return P.dB("[\\/]",!0,!1)})
lazy($,"u9","$get$u9",function(){return P.cG(P.B,W.fq)})
lazy($,"ul","$get$ul",function(){return A.ei(255,0,255,255)})
lazy($,"nQ","$get$nQ",function(){return new F.hx(!1,!1,"Path Utils")})
lazy($,"nO","$get$nO",function(){return P.cG(P.eN,P.E)})
lazy($,"cQ","$get$cQ",function(){return H.a([],[D.cI])})
lazy($,"hN","$get$hN",function(){return P.dB("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fu","$get$fu",function(){return P.dB("\\\\(?!\\\\)",!0,!1)})
lazy($,"vx","$get$vx",function(){var t={color:16711935}
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
mangledGlobalNames:{E:"int",U:"double",ds:"num",B:"String",dc:"bool",d6:"Null",q:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.dc,args:[[P.q,E.iD]]},{func:1,v:true},{func:1,ret:P.db,args:[P.bh,P.E,P.E,O.cW]},{func:1,ret:P.bh,args:[P.E,P.bh,P.bh,O.cW]},{func:1,v:true,args:[P.ad]},{func:1,ret:P.B,args:[P.E]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.aQ,args:[P.E]},{func:1,ret:P.B,args:[P.B]},{func:1,ret:W.dv,args:[P.E]},{func:1,ret:W.cr,args:[P.E]},{func:1,args:[,]},{func:1,v:true,args:[P.ad],opt:[P.dS]},{func:1,ret:W.cf,args:[P.E]},{func:1,v:true,args:[,P.dS]},{func:1,ret:W.ch,args:[P.E]},{func:1,ret:W.cs,args:[P.E]},{func:1,ret:W.ct,args:[P.E]},{func:1,ret:W.fs,args:[P.E]},{func:1,ret:W.cu,args:[P.E]},{func:1,ret:W.fv,args:[P.E]},{func:1,ret:W.fw,args:[P.E]},{func:1,ret:P.bU,args:[P.E]},{func:1,ret:P.B,args:[P.dA]},{func:1,ret:W.cp,args:[P.E]},{func:1,ret:W.fx,args:[P.E]},{func:1,ret:W.cj,args:[P.E]},{func:1,ret:W.ck,args:[P.E]},{func:1,ret:P.bt,args:[P.E]},{func:1,ret:P.dc,args:[P.ad]},{func:1,ret:P.E,args:[P.bv,P.bv]},{func:1,v:true,args:[P.B]},{func:1,ret:W.f1,args:[P.E]},{func:1,ret:W.bK,args:[P.E]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.j,AnimationEffectTiming:J.j,AnimationTimeline:J.j,AppBannerPromptResult:J.j,BarProp:J.j,Body:J.j,CacheStorage:J.j,CanvasGradient:J.j,CanvasPattern:J.j,CanvasRenderingContext2D:J.j,CHROMIUMValuebuffer:J.j,CircularGeofencingRegion:J.j,Client:J.j,Clients:J.j,CompositorProxy:J.j,ConsoleBase:J.j,Coordinates:J.j,CredentialsContainer:J.j,Crypto:J.j,CryptoKey:J.j,CSS:J.j,DeprecatedStorageInfo:J.j,DeprecatedStorageQuota:J.j,DeviceAcceleration:J.j,DeviceRotationRate:J.j,DirectoryReader:J.j,DOMImplementation:J.j,Iterator:J.j,DOMMatrix:J.j,DOMMatrixReadOnly:J.j,DOMParser:J.j,DOMPoint:J.j,DOMPointReadOnly:J.j,EffectModel:J.j,Stream:J.j,FormData:J.j,GamepadButton:J.j,Geofencing:J.j,GeofencingRegion:J.j,Geolocation:J.j,Geoposition:J.j,Headers:J.j,HMDVRDevice:J.j,IdleDeadline:J.j,ImageBitmap:J.j,ImageBitmapRenderingContext:J.j,InjectedScriptHost:J.j,InputDeviceCapabilities:J.j,IntersectionObserver:J.j,IntersectionObserverEntry:J.j,KeyframeEffect:J.j,MediaDeviceInfo:J.j,MediaDevices:J.j,MediaError:J.j,MediaKeyStatusMap:J.j,MediaKeySystemAccess:J.j,MediaKeys:J.j,MediaMetadata:J.j,MediaSession:J.j,MemoryInfo:J.j,MessageChannel:J.j,Metadata:J.j,MIDIInputMap:J.j,MIDIOutputMap:J.j,MutationObserver:J.j,WebKitMutationObserver:J.j,MutationRecord:J.j,NavigatorStorageUtils:J.j,NodeFilter:J.j,NodeIterator:J.j,NonDocumentTypeChildNode:J.j,NonElementParentNode:J.j,OffscreenCanvas:J.j,PerformanceNavigation:J.j,PerformanceObserver:J.j,PerformanceObserverEntryList:J.j,PerformanceTiming:J.j,Permissions:J.j,PositionError:J.j,PositionSensorVRDevice:J.j,Presentation:J.j,PushManager:J.j,PushMessageData:J.j,PushSubscription:J.j,Range:J.j,ReadableByteStream:J.j,ReadableByteStreamReader:J.j,ReadableStreamReader:J.j,RTCCertificate:J.j,RTCIceCandidate:J.j,mozRTCIceCandidate:J.j,RTCSessionDescription:J.j,mozRTCSessionDescription:J.j,RTCStatsReport:J.j,RTCStatsResponse:J.j,Screen:J.j,ScrollState:J.j,Selection:J.j,SharedArrayBuffer:J.j,SourceInfo:J.j,StorageInfo:J.j,StorageManager:J.j,StorageQuota:J.j,StyleMedia:J.j,StylePropertyMap:J.j,SyncManager:J.j,TextMetrics:J.j,TreeWalker:J.j,UnderlyingSourceBase:J.j,URLSearchParams:J.j,VRDevice:J.j,VREyeParameters:J.j,VRFieldOfView:J.j,VRPositionState:J.j,ValidityState:J.j,VideoPlaybackQuality:J.j,VideoTrack:J.j,WindowClient:J.j,WorkerConsole:J.j,XPathEvaluator:J.j,XPathExpression:J.j,XPathNSResolver:J.j,XPathResult:J.j,XMLSerializer:J.j,XSLTProcessor:J.j,Bluetooth:J.j,BluetoothAdvertisingData:J.j,BluetoothCharacteristicProperties:J.j,BluetoothRemoteGATTServer:J.j,BluetoothRemoteGATTService:J.j,BluetoothUUID:J.j,Cache:J.j,DOMFileSystemSync:J.j,DirectoryEntrySync:J.j,DirectoryReaderSync:J.j,EntrySync:J.j,FileEntrySync:J.j,FileReaderSync:J.j,FileWriterSync:J.j,HTMLAllCollection:J.j,NFC:J.j,PagePopupController:J.j,Request:J.j,Response:J.j,SubtleCrypto:J.j,USBAlternateInterface:J.j,USBConfiguration:J.j,USBDevice:J.j,USBEndpoint:J.j,USBInTransferResult:J.j,USBInterface:J.j,USBIsochronousInTransferPacket:J.j,USBIsochronousInTransferResult:J.j,USBIsochronousOutTransferPacket:J.j,USBIsochronousOutTransferResult:J.j,USBOutTransferResult:J.j,WebKitCSSMatrix:J.j,Worklet:J.j,WorkletGlobalScope:J.j,IDBCursor:J.j,IDBCursorWithValue:J.j,IDBFactory:J.j,IDBKeyRange:J.j,SVGAngle:J.j,SVGAnimatedAngle:J.j,SVGAnimatedBoolean:J.j,SVGAnimatedEnumeration:J.j,SVGAnimatedInteger:J.j,SVGAnimatedLength:J.j,SVGAnimatedLengthList:J.j,SVGAnimatedNumber:J.j,SVGAnimatedNumberList:J.j,SVGAnimatedPreserveAspectRatio:J.j,SVGAnimatedRect:J.j,SVGAnimatedString:J.j,SVGAnimatedTransformList:J.j,SVGMatrix:J.j,SVGPoint:J.j,SVGPreserveAspectRatio:J.j,SVGRect:J.j,SVGUnitTypes:J.j,AudioListener:J.j,AudioParam:J.j,PeriodicWave:J.j,ANGLEInstancedArrays:J.j,ANGLE_instanced_arrays:J.j,WebGLBuffer:J.j,CHROMIUMSubscribeUniform:J.j,WebGLCompressedTextureASTC:J.j,WebGLCompressedTextureATC:J.j,WEBGL_compressed_texture_atc:J.j,WebGLCompressedTextureETC1:J.j,WEBGL_compressed_texture_etc1:J.j,WebGLCompressedTexturePVRTC:J.j,WEBGL_compressed_texture_pvrtc:J.j,WebGLCompressedTextureS3TC:J.j,WEBGL_compressed_texture_s3tc:J.j,WebGLDebugRendererInfo:J.j,WEBGL_debug_renderer_info:J.j,WebGLDebugShaders:J.j,WEBGL_debug_shaders:J.j,WebGLDepthTexture:J.j,WEBGL_depth_texture:J.j,WebGLDrawBuffers:J.j,WEBGL_draw_buffers:J.j,EXTsRGB:J.j,EXT_sRGB:J.j,EXTBlendMinMax:J.j,EXT_blend_minmax:J.j,EXTColorBufferFloat:J.j,EXTDisjointTimerQuery:J.j,EXTFragDepth:J.j,EXT_frag_depth:J.j,EXTShaderTextureLOD:J.j,EXT_shader_texture_lod:J.j,EXTTextureFilterAnisotropic:J.j,EXT_texture_filter_anisotropic:J.j,WebGLFramebuffer:J.j,WebGLLoseContext:J.j,WebGLExtensionLoseContext:J.j,WEBGL_lose_context:J.j,OESElementIndexUint:J.j,OES_element_index_uint:J.j,OESStandardDerivatives:J.j,OES_standard_derivatives:J.j,OESTextureFloat:J.j,OES_texture_float:J.j,OESTextureFloatLinear:J.j,OES_texture_float_linear:J.j,OESTextureHalfFloat:J.j,OES_texture_half_float:J.j,OESTextureHalfFloatLinear:J.j,OES_texture_half_float_linear:J.j,OESVertexArrayObject:J.j,OES_vertex_array_object:J.j,WebGLProgram:J.j,WebGLQuery:J.j,WebGLRenderbuffer:J.j,WebGLRenderingContext:J.j,WebGLSampler:J.j,WebGLShader:J.j,WebGLShaderPrecisionFormat:J.j,WebGLSync:J.j,WebGLTexture:J.j,WebGLTimerQueryEXT:J.j,WebGLTransformFeedback:J.j,WebGLUniformLocation:J.j,WebGLVertexArrayObject:J.j,WebGLVertexArrayObjectOES:J.j,Database:J.j,SQLError:J.j,SQLResultSet:J.j,SQLTransaction:J.j,ArrayBuffer:H.fk,ArrayBufferView:H.eA,DataView:H.nq,Float32Array:H.nr,Float64Array:H.ns,Int16Array:H.nt,Int32Array:H.nu,Int8Array:H.nv,Uint16Array:H.nw,Uint32Array:H.nx,Uint8ClampedArray:H.jy,CanvasPixelArray:H.jy,Uint8Array:H.fl,HTMLBRElement:W.aC,HTMLCanvasElement:W.aC,HTMLContentElement:W.aC,HTMLDListElement:W.aC,HTMLDataListElement:W.aC,HTMLDetailsElement:W.aC,HTMLDialogElement:W.aC,HTMLDivElement:W.aC,HTMLHRElement:W.aC,HTMLHeadElement:W.aC,HTMLHeadingElement:W.aC,HTMLHtmlElement:W.aC,HTMLLIElement:W.aC,HTMLLabelElement:W.aC,HTMLLegendElement:W.aC,HTMLMenuElement:W.aC,HTMLMenuItemElement:W.aC,HTMLMeterElement:W.aC,HTMLModElement:W.aC,HTMLOListElement:W.aC,HTMLOptGroupElement:W.aC,HTMLOptionElement:W.aC,HTMLParagraphElement:W.aC,HTMLPictureElement:W.aC,HTMLPreElement:W.aC,HTMLProgressElement:W.aC,HTMLQuoteElement:W.aC,HTMLShadowElement:W.aC,HTMLSourceElement:W.aC,HTMLStyleElement:W.aC,HTMLTableCaptionElement:W.aC,HTMLTableCellElement:W.aC,HTMLTableDataCellElement:W.aC,HTMLTableHeaderCellElement:W.aC,HTMLTableColElement:W.aC,HTMLTableElement:W.aC,HTMLTableRowElement:W.aC,HTMLTableSectionElement:W.aC,HTMLTitleElement:W.aC,HTMLTrackElement:W.aC,HTMLUListElement:W.aC,HTMLUnknownElement:W.aC,HTMLDirectoryElement:W.aC,HTMLFontElement:W.aC,HTMLFrameElement:W.aC,HTMLMarqueeElement:W.aC,HTMLElement:W.aC,HTMLAnchorElement:W.eV,HTMLAreaElement:W.kx,HTMLAudioElement:W.eY,AudioTrack:W.cM,AudioTrackList:W.kE,HTMLBaseElement:W.kI,Blob:W.eZ,HTMLBodyElement:W.kM,HTMLButtonElement:W.fT,CDATASection:W.eh,CharacterData:W.eh,Comment:W.eh,ProcessingInstruction:W.eh,Text:W.eh,CompositorWorker:W.kX,Credential:W.fW,FederatedCredential:W.fW,PasswordCredential:W.fW,CSSFontFaceRule:W.l2,CSSImportRule:W.l3,CSSKeyframeRule:W.fX,MozCSSKeyframeRule:W.fX,WebKitCSSKeyframeRule:W.fX,CSSKeyframesRule:W.fY,MozCSSKeyframesRule:W.fY,WebKitCSSKeyframesRule:W.fY,CSSPageRule:W.l4,CSSCharsetRule:W.bK,CSSGroupingRule:W.bK,CSSMediaRule:W.bK,CSSNamespaceRule:W.bK,CSSSupportsRule:W.bK,CSSRule:W.bK,CSSStyleDeclaration:W.ej,MSStyleCSSProperties:W.ej,CSS2Properties:W.ej,CSSStyleRule:W.l5,CSSViewportRule:W.l6,DataTransfer:W.lb,DataTransferItem:W.f1,DataTransferItemList:W.ie,Document:W.ek,HTMLDocument:W.ek,XMLDocument:W.ek,DocumentFragment:W.ih,ShadowRoot:W.ih,DOMError:W.ii,FileError:W.ii,DOMException:W.lg,DOMRectReadOnly:W.ij,DOMStringList:W.ik,DOMStringMap:W.il,DOMTokenList:W.im,Element:W.dv,HTMLEmbedElement:W.lm,DirectoryEntry:W.h_,Entry:W.h_,FileEntry:W.h_,ErrorEvent:W.ls,AnimationEvent:W.T,AnimationPlayerEvent:W.T,ApplicationCacheErrorEvent:W.T,AutocompleteErrorEvent:W.T,BeforeInstallPromptEvent:W.T,BeforeUnloadEvent:W.T,BlobEvent:W.T,ClipboardEvent:W.T,CloseEvent:W.T,CompositionEvent:W.T,CustomEvent:W.T,DeviceLightEvent:W.T,DeviceMotionEvent:W.T,DeviceOrientationEvent:W.T,ExtendableEvent:W.T,ExtendableMessageEvent:W.T,FetchEvent:W.T,FocusEvent:W.T,FontFaceSetLoadEvent:W.T,GamepadEvent:W.T,GeofencingEvent:W.T,HashChangeEvent:W.T,InstallEvent:W.T,KeyboardEvent:W.T,MediaEncryptedEvent:W.T,MediaKeyMessageEvent:W.T,MediaQueryListEvent:W.T,MediaStreamEvent:W.T,MediaStreamTrackEvent:W.T,MessageEvent:W.T,MIDIConnectionEvent:W.T,MIDIMessageEvent:W.T,MouseEvent:W.T,DragEvent:W.T,NotificationEvent:W.T,PageTransitionEvent:W.T,PointerEvent:W.T,PopStateEvent:W.T,PresentationConnectionAvailableEvent:W.T,PresentationConnectionCloseEvent:W.T,ProgressEvent:W.T,PromiseRejectionEvent:W.T,PushEvent:W.T,RelatedEvent:W.T,RTCDataChannelEvent:W.T,RTCDTMFToneChangeEvent:W.T,RTCIceCandidateEvent:W.T,RTCPeerConnectionIceEvent:W.T,SecurityPolicyViolationEvent:W.T,ServicePortConnectEvent:W.T,ServiceWorkerMessageEvent:W.T,SpeechRecognitionEvent:W.T,StorageEvent:W.T,SyncEvent:W.T,TextEvent:W.T,TouchEvent:W.T,TrackEvent:W.T,TransitionEvent:W.T,WebKitTransitionEvent:W.T,UIEvent:W.T,WheelEvent:W.T,ResourceProgressEvent:W.T,USBConnectionEvent:W.T,IDBVersionChangeEvent:W.T,SVGZoomEvent:W.T,AudioProcessingEvent:W.T,OfflineAudioCompletionEvent:W.T,WebGLContextEvent:W.T,Event:W.T,InputEvent:W.T,Animation:W.aV,ApplicationCache:W.aV,DOMApplicationCache:W.aV,OfflineResourceList:W.aV,BatteryManager:W.aV,CanvasCaptureMediaStreamTrack:W.aV,CrossOriginServiceWorkerClient:W.aV,EventSource:W.aV,MediaKeySession:W.aV,MediaQueryList:W.aV,MediaRecorder:W.aV,MediaSource:W.aV,MediaStream:W.aV,MediaStreamTrack:W.aV,MessagePort:W.aV,MIDIAccess:W.aV,NetworkInformation:W.aV,Notification:W.aV,Performance:W.aV,PermissionStatus:W.aV,PresentationAvailability:W.aV,PresentationReceiver:W.aV,PresentationRequest:W.aV,RTCDTMFSender:W.aV,RTCPeerConnection:W.aV,webkitRTCPeerConnection:W.aV,mozRTCPeerConnection:W.aV,ScreenOrientation:W.aV,ServicePortCollection:W.aV,ServiceWorkerContainer:W.aV,ServiceWorkerRegistration:W.aV,SpeechRecognition:W.aV,SpeechSynthesis:W.aV,SpeechSynthesisUtterance:W.aV,WorkerPerformance:W.aV,BluetoothDevice:W.aV,BluetoothRemoteGATTCharacteristic:W.aV,USB:W.aV,EventTarget:W.aV,HTMLFieldSetElement:W.lT,File:W.cf,FileList:W.f8,FileReader:W.lU,DOMFileSystem:W.lV,FileWriter:W.lW,FontFace:W.lZ,FontFaceSet:W.m_,HTMLFormElement:W.iC,Gamepad:W.cp,History:W.mb,HTMLOptionsCollection:W.fa,HTMLCollection:W.fa,HTMLFormControlsCollection:W.iE,XMLHttpRequest:W.e8,XMLHttpRequestUpload:W.hh,XMLHttpRequestEventTarget:W.hh,HTMLIFrameElement:W.mj,ImageData:W.hi,HTMLImageElement:W.fc,HTMLInputElement:W.mp,HTMLKeygenElement:W.mR,CalcLength:W.hs,LengthValue:W.hs,SimpleLength:W.hs,HTMLLinkElement:W.ht,Location:W.n8,HTMLMapElement:W.nd,HTMLVideoElement:W.hA,HTMLMediaElement:W.hA,MediaList:W.jv,HTMLMetaElement:W.nj,MIDIOutput:W.nk,MIDIInput:W.hB,MIDIPort:W.hB,MimeType:W.cr,MimeTypeArray:W.jw,Navigator:W.ny,NavigatorUserMediaError:W.nz,Node:W.aQ,NodeList:W.jz,RadioNodeList:W.jz,HTMLObjectElement:W.nC,HTMLOutputElement:W.nH,HTMLParamElement:W.nL,Path2D:W.nN,PerformanceCompositeTiming:W.ea,PerformanceEntry:W.ea,PerformanceMark:W.ea,PerformanceMeasure:W.ea,PerformanceRenderTiming:W.ea,PerformanceResourceTiming:W.ea,Perspective:W.nT,Plugin:W.ch,PluginArray:W.jG,PresentationConnection:W.nZ,RTCDataChannel:W.jL,DataChannel:W.jL,HTMLScriptElement:W.fq,HTMLSelectElement:W.jM,ServicePort:W.om,SharedWorker:W.op,SharedWorkerGlobalScope:W.oq,HTMLSlotElement:W.or,SourceBuffer:W.cs,SourceBufferList:W.jO,HTMLSpanElement:W.fr,SpeechGrammar:W.ct,SpeechGrammarList:W.jP,SpeechRecognitionAlternative:W.fs,SpeechRecognitionError:W.ox,SpeechRecognitionResult:W.cj,SpeechSynthesisEvent:W.oy,SpeechSynthesisVoice:W.oz,Storage:W.oE,CSSStyleSheet:W.ck,StyleSheet:W.ck,KeywordValue:W.ec,NumberValue:W.ec,PositionValue:W.ec,TransformValue:W.ec,StyleValue:W.ec,HTMLTemplateElement:W.p7,HTMLTextAreaElement:W.p9,TextTrack:W.cR,TextTrackCue:W.cJ,VTTCue:W.cJ,TextTrackCueList:W.pc,TextTrackList:W.pd,TimeRanges:W.ph,Touch:W.cu,TouchList:W.jT,TrackDefault:W.fv,TrackDefaultList:W.jU,Matrix:W.ed,Rotation:W.ed,Skew:W.ed,Translation:W.ed,TransformComponent:W.ed,URL:W.px,VideoTrackList:W.pB,VTTRegion:W.fw,VTTRegionList:W.jV,WebSocket:W.pG,Window:W.jY,DOMWindow:W.jY,Worker:W.pN,CompositorWorkerGlobalScope:W.eO,DedicatedWorkerGlobalScope:W.eO,ServiceWorkerGlobalScope:W.eO,WorkerGlobalScope:W.eO,Attr:W.fx,ClientRect:W.q4,ClientRectList:W.hU,DOMRectList:W.hU,CSSRuleList:W.k4,DocumentType:W.qb,DOMRect:W.qc,GamepadList:W.k8,HTMLFrameSetElement:W.qx,NamedNodeMap:W.i0,MozNamedAttrMap:W.i0,ServiceWorker:W.qW,SpeechRecognitionResultList:W.kb,StyleSheetList:W.kd,WorkerLocation:W.rb,WorkerNavigator:W.rc,IDBDatabase:P.lc,IDBIndex:P.mn,IDBObjectStore:P.nD,IDBOpenDBRequest:P.hL,IDBVersionChangeRequest:P.hL,IDBRequest:P.hL,IDBTransaction:P.pm,SVGAElement:P.ku,SVGAnimateElement:P.eg,SVGAnimateMotionElement:P.eg,SVGAnimateTransformElement:P.eg,SVGAnimationElement:P.eg,SVGSetElement:P.eg,SVGFEBlendElement:P.lv,SVGFEColorMatrixElement:P.lw,SVGFEComponentTransferElement:P.lx,SVGFECompositeElement:P.ly,SVGFEConvolveMatrixElement:P.lz,SVGFEDiffuseLightingElement:P.lA,SVGFEDisplacementMapElement:P.lB,SVGFEFloodElement:P.lC,SVGFEGaussianBlurElement:P.lD,SVGFEImageElement:P.lE,SVGFEMergeElement:P.lF,SVGFEMorphologyElement:P.lG,SVGFEOffsetElement:P.lH,SVGFESpecularLightingElement:P.lI,SVGFETileElement:P.lJ,SVGFETurbulenceElement:P.lK,SVGFilterElement:P.lX,SVGCircleElement:P.cq,SVGClipPathElement:P.cq,SVGDefsElement:P.cq,SVGEllipseElement:P.cq,SVGForeignObjectElement:P.cq,SVGGElement:P.cq,SVGGeometryElement:P.cq,SVGLineElement:P.cq,SVGPathElement:P.cq,SVGPolygonElement:P.cq,SVGPolylineElement:P.cq,SVGRectElement:P.cq,SVGSwitchElement:P.cq,SVGGraphicsElement:P.cq,SVGImageElement:P.mk,SVGLength:P.d5,SVGLengthList:P.mU,SVGMarkerElement:P.ng,SVGMaskElement:P.nh,SVGNumber:P.d7,SVGNumberList:P.nA,SVGPatternElement:P.nR,SVGPointList:P.nW,SVGScriptElement:P.oj,SVGStringList:P.oZ,SVGDescElement:P.cc,SVGDiscardElement:P.cc,SVGFEDistantLightElement:P.cc,SVGFEFuncAElement:P.cc,SVGFEFuncBElement:P.cc,SVGFEFuncGElement:P.cc,SVGFEFuncRElement:P.cc,SVGFEMergeNodeElement:P.cc,SVGFEPointLightElement:P.cc,SVGFESpotLightElement:P.cc,SVGMetadataElement:P.cc,SVGStopElement:P.cc,SVGStyleElement:P.cc,SVGTitleElement:P.cc,SVGComponentTransferFunctionElement:P.cc,SVGElement:P.cc,SVGSVGElement:P.p1,SVGSymbolElement:P.p3,SVGTSpanElement:P.eK,SVGTextElement:P.eK,SVGTextPositioningElement:P.eK,SVGTextContentElement:P.eK,SVGTextPathElement:P.pb,SVGTransform:P.da,SVGTransformList:P.pn,SVGUseElement:P.py,SVGViewElement:P.pC,SVGViewSpec:P.pD,SVGLinearGradientElement:P.hY,SVGRadialGradientElement:P.hY,SVGGradientElement:P.hY,SVGCursorElement:P.qT,SVGFEDropShadowElement:P.qU,SVGMPathElement:P.qV,AudioBuffer:P.fN,AudioBufferSourceNode:P.eX,AudioContext:P.fO,webkitAudioContext:P.fO,OfflineAudioContext:P.fO,AnalyserNode:P.bC,RealtimeAnalyserNode:P.bC,AudioDestinationNode:P.bC,BiquadFilterNode:P.bC,ChannelMergerNode:P.bC,AudioChannelMerger:P.bC,ChannelSplitterNode:P.bC,AudioChannelSplitter:P.bC,DelayNode:P.bC,DynamicsCompressorNode:P.bC,GainNode:P.bC,AudioGainNode:P.bC,IIRFilterNode:P.bC,MediaStreamAudioDestinationNode:P.bC,PannerNode:P.bC,AudioPannerNode:P.bC,webkitAudioPannerNode:P.bC,ScriptProcessorNode:P.bC,JavaScriptAudioNode:P.bC,StereoPannerNode:P.bC,WaveShaperNode:P.bC,AudioNode:P.bC,MediaElementAudioSourceNode:P.e5,MediaStreamAudioSourceNode:P.e5,OscillatorNode:P.e5,Oscillator:P.e5,AudioSourceNode:P.e5,ConvolverNode:P.l_,WebGLActiveInfo:P.kw,WebGL2RenderingContext:P.o8,WebGL2RenderingContextBase:P.ra,SQLResultSetRowList:P.jQ})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,URL:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,AudioSourceNode:false,ConvolverNode:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jx.$nativeSuperclassTag="ArrayBufferView"
H.hE.$nativeSuperclassTag="ArrayBufferView"
H.hG.$nativeSuperclassTag="ArrayBufferView"
H.hC.$nativeSuperclassTag="ArrayBufferView"
H.hF.$nativeSuperclassTag="ArrayBufferView"
H.hH.$nativeSuperclassTag="ArrayBufferView"
H.hD.$nativeSuperclassTag="ArrayBufferView"
W.h0.$nativeSuperclassTag="EventTarget"
W.h3.$nativeSuperclassTag="EventTarget"
W.h1.$nativeSuperclassTag="EventTarget"
W.h4.$nativeSuperclassTag="EventTarget"
W.h2.$nativeSuperclassTag="EventTarget"
W.h5.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.xX(T.wD(),b)},[])
else (function(b){H.xX(T.wD(),b)})([])})})()
//# sourceMappingURL=MemoNewspostController.dart.js.map
