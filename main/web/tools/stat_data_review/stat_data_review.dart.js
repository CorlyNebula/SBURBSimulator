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
a[c]=function(){a[c]=function(){H.uB(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.o5"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.o5"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.o5(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={nB:function nB(a){this.a=a},
e3:function(a,b,c,d){if(!!J.a1(a).$isT)return new H.dL(a,b,[c,d])
return new H.dn(a,b,[c,d])},
fc:function(){return new P.bR("No element")},
rC:function(){return new P.bR("Too few elements")},
fv:function(a,b,c,d){if(c-b<=32)H.tI(a,b,c,d)
else H.tH(a,b,c,d)},
tI:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.aZ(a);t<=c;++t){r=s.l(a,t)
q=t
while(!0){if(!(q>b&&J.bz(d.$2(s.l(a,q-1),r),0)))break
p=q-1
s.h(a,q,s.l(a,p))
q=p}s.h(a,q,r)}},
tH:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.b.a5(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.b.a5(a3+a4,2)
p=q-t
o=q+t
n=J.aZ(a2)
m=n.l(a2,s)
l=n.l(a2,p)
k=n.l(a2,q)
j=n.l(a2,o)
i=n.l(a2,r)
if(J.bz(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.bz(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.bz(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.bz(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bz(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.bz(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.bz(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.bz(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bz(a5.$2(j,i),0)){h=i
i=j
j=h}n.h(a2,s,m)
n.h(a2,q,k)
n.h(a2,r,i)
n.h(a2,p,n.l(a2,a3))
n.h(a2,o,n.l(a2,a4))
g=a3+1
f=a4-1
if(J.ac(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.l(a2,e)
c=a5.$2(d,l)
b=J.a1(c)
if(b.P(c,0))continue
if(b.aw(c,0)){if(e!==g){n.h(a2,e,n.l(a2,g))
n.h(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.l(a2,f),l)
b=J.cE(c)
if(b.aN(c,0)){--f
continue}else{a=f-1
if(b.aw(c,0)){n.h(a2,e,n.l(a2,g))
a0=g+1
n.h(a2,g,n.l(a2,f))
n.h(a2,f,d)
f=a
g=a0
break}else{n.h(a2,e,n.l(a2,f))
n.h(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.l(a2,e)
if(J.fU(a5.$2(d,l),0)){if(e!==g){n.h(a2,e,n.l(a2,g))
n.h(a2,g,d)}++g}else if(J.bz(a5.$2(d,j),0))for(;!0;)if(J.bz(a5.$2(n.l(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.fU(a5.$2(n.l(a2,f),l),0)){n.h(a2,e,n.l(a2,g))
a0=g+1
n.h(a2,g,n.l(a2,f))
n.h(a2,f,d)
g=a0}else{n.h(a2,e,n.l(a2,f))
n.h(a2,f,d)}f=a
break}}a1=!1}b=g-1
n.h(a2,a3,n.l(a2,b))
n.h(a2,b,l)
b=f+1
n.h(a2,a4,n.l(a2,b))
n.h(a2,b,j)
H.fv(a2,a3,g-2,a5)
H.fv(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.ac(a5.$2(n.l(a2,g),l),0);)++g
for(;J.ac(a5.$2(n.l(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.l(a2,e)
if(J.ac(a5.$2(d,l),0)){if(e!==g){n.h(a2,e,n.l(a2,g))
n.h(a2,g,d)}++g}else if(J.ac(a5.$2(d,j),0))for(;!0;)if(J.ac(a5.$2(n.l(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.fU(a5.$2(n.l(a2,f),l),0)){n.h(a2,e,n.l(a2,g))
a0=g+1
n.h(a2,g,n.l(a2,f))
n.h(a2,f,d)
g=a0}else{n.h(a2,e,n.l(a2,f))
n.h(a2,f,d)}f=a
break}}H.fv(a2,g,f,a5)}else H.fv(a2,g,f,a5)},
T:function T(){},
cS:function cS(){},
fi:function fi(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
dn:function dn(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
dL:function dL(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fj:function fj(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
e4:function e4(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
bx:function bx(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
ei:function ei(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eT:function eT(){},
fS:function(a,b){var t=a.b6(b)
if(!u.globalState.d.cy)u.globalState.f.bh()
return t},
pI:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.a1(s).$isV)throw H.w(P.nb("Arguments to main must be a List: "+H.p(s)))
u.globalState=new H.md(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$oG()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.lJ(P.nF(null,H.d1),0)
r=P.N
s.z=new H.l(0,null,null,null,null,null,0,[r,H.dw])
s.ch=new H.l(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.mc()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.r2,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.tW)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.bw(null,null,null,r)
p=new H.dr(0,null,!1)
o=new H.dw(s,new H.l(0,null,null,null,null,null,0,[r,H.dr]),q,u.createNewIsolate(),p,new H.bZ(H.n1()),new H.bZ(H.n1()),!1,!1,[],P.bw(null,null,null,null),null,null,!1,!0,P.bw(null,null,null,null))
q.j(0,0)
o.cI(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.dD(a,{func:1,args:[,]}))o.b6(new H.n2(t,a))
else if(H.dD(a,{func:1,args:[,,]}))o.b6(new H.n3(t,a))
else o.b6(a)
u.globalState.f.bh()},
tW:function(a){var t=P.e2(["command","print","msg",a])
return new H.bU(!0,P.ep(null,P.N)).ag(t)},
r4:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.r5()
return},
r5:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.w(new P.aY("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.w(new P.aY('Cannot extract URI from "'+t+'"'))},
r2:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.d0(!0,[]).aC(b.data)
s=J.aZ(t)
switch(s.l(t,"command")){case"start":u.globalState.b=s.l(t,"id")
r=s.l(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.l(t,"args")
o=new H.d0(!0,[]).aC(s.l(t,"msg"))
n=s.l(t,"isSpawnUri")
m=s.l(t,"startPaused")
l=new H.d0(!0,[]).aC(s.l(t,"replyTo"))
s=u.globalState.a++
k=P.N
j=P.bw(null,null,null,k)
i=new H.dr(0,null,!1)
h=new H.dw(s,new H.l(0,null,null,null,null,null,0,[k,H.dr]),j,u.createNewIsolate(),i,new H.bZ(H.n1()),new H.bZ(H.n1()),!1,!1,[],P.bw(null,null,null,null),null,null,!1,!0,P.bw(null,null,null,null))
j.j(0,0)
h.cI(0,i)
u.globalState.f.a.az(new H.d1(h,new H.j3(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bh()
break
case"spawn-worker":break
case"message":if(s.l(t,"port")!=null)s.l(t,"port").aG(s.l(t,"msg"))
u.globalState.f.bh()
break
case"close":u.globalState.ch.a4(0,$.$get$oH().l(0,a))
a.terminate()
u.globalState.f.bh()
break
case"log":H.r1(s.l(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.e2(["command","print","msg",t])
k=new H.bU(!0,P.ep(null,P.N)).ag(k)
s.toString
self.postMessage(k)}else P.n_(s.l(t,"msg"))
break
case"error":throw H.w(s.l(t,"msg"))}},
r1:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.e2(["command","log","msg",a])
r=new H.bU(!0,P.ep(null,P.N)).ag(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.b_(q)
t=H.be(q)
s=P.id(t)
throw H.w(s)}},
r3:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.p1=$.p1+("_"+s)
$.p2=$.p2+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.aG(["spawned",new H.dx(s,r),q,t.r])
r=new H.j4(a,b,c,d,t)
if(e===!0){t.d9(q,q)
u.globalState.f.a.az(new H.d1(t,r,"start isolate"))}else r.$0()},
tM:function(a,b){var t=new H.le(!0,!1,null)
t.ee(a,b)
return t},
u_:function(a){return new H.d0(!0,[]).aC(new H.bU(!1,P.ep(null,P.N)).ag(a))},
n2:function n2(a,b){this.a=a
this.b=b},
n3:function n3(a,b){this.a=a
this.b=b},
md:function md(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
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
dw:function dw(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
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
m6:function m6(a,b){this.a=a
this.b=b},
lJ:function lJ(a,b){this.a=a
this.b=b},
lK:function lK(a){this.a=a},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
mc:function mc(){},
j3:function j3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j4:function j4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lB:function lB(){},
dx:function dx(b,a){this.b=b
this.a=a},
mg:function mg(a,b){this.a=a
this.b=b},
eq:function eq(b,c,a){this.b=b
this.c=c
this.a=a},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
le:function le(a,b,c){this.a=a
this.b=b
this.c=c},
lf:function lf(a,b){this.a=a
this.b=b},
lg:function lg(a,b){this.a=a
this.b=b},
bZ:function bZ(a){this.a=a},
bU:function bU(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
uo:function(a){return u.types[a]},
ut:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.a1(a).$isc4},
p:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bh(a)
if(typeof t!=="string")throw H.w(H.b6(a))
return t},
te:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.kf(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
cx:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
p0:function(a,b){return b.$1(a)},
rX:function(a,b,c){var t,s,r,q,p,o
H.ug(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.p0(a,c)
if(3>=t.length)return H.I(t,3)
s=t[3]
if(b<2||b>36)throw H.w(P.bm(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.f.cK(q,o)|32)>r)return H.p0(a,c)}return parseInt(a,b)},
nJ:function(a){var t,s,r,q,p,o,n,m
t=J.a1(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.x||!!J.a1(a).$iscZ){p=C.r(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.f.cK(q,0)===36)q=C.f.aJ(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.o9(H.fT(a),0,null),u.mangledGlobalNames)},
k9:function(a){return"Instance of '"+H.nJ(a)+"'"},
rY:function(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.b.c1(t,10))>>>0,56320|t&1023)}throw H.w(P.bm(a,0,1114111,null,null))},
nI:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.w(H.b6(a))
return a[b]},
p3:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.w(H.b6(a))
a[b]=c},
au:function(a){throw H.w(H.b6(a))},
I:function(a,b){if(a==null)J.cF(a)
throw H.w(H.aH(a,b))},
aH:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cf(!0,b,"index",null)
t=J.cF(a)
if(!(b<0)){if(typeof t!=="number")return H.au(t)
s=b>=t}else s=!0
if(s)return P.j1(b,a,"index",null,t)
return P.fu(b,"index",null)},
b6:function(a){return new P.cf(!0,a,null,null)},
dB:function(a){if(typeof a!=="number")throw H.w(H.b6(a))
return a},
ug:function(a){if(typeof a!=="string")throw H.w(H.b6(a))
return a},
w:function(a){var t
if(a==null)a=new P.ea()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.pK})
t.name=""}else t.toString=H.pK
return t},
pK:function(){return J.bh(this.dartException)},
aw:function(a){throw H.w(a)},
bW:function(a){throw H.w(new P.bL(a))},
cc:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.lh(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
li:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
ph:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
nD:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.jk(a,s,t?null:b.receiver)},
b_:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.n4(a)
if(a==null)return
if(a instanceof H.dN)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.c1(r,16)&8191)===10)switch(q){case 438:return t.$1(H.nD(H.p(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.p(s)+" (Error "+q+")"
return t.$1(new H.fo(p,null))}}if(a instanceof TypeError){o=$.$get$pb()
n=$.$get$pc()
m=$.$get$pd()
l=$.$get$pe()
k=$.$get$pi()
j=$.$get$pj()
i=$.$get$pg()
$.$get$pf()
h=$.$get$pl()
g=$.$get$pk()
f=o.am(s)
if(f!=null)return t.$1(H.nD(s,f))
else{f=n.am(s)
if(f!=null){f.method="call"
return t.$1(H.nD(s,f))}else{f=m.am(s)
if(f==null){f=l.am(s)
if(f==null){f=k.am(s)
if(f==null){f=j.am(s)
if(f==null){f=i.am(s)
if(f==null){f=l.am(s)
if(f==null){f=h.am(s)
if(f==null){f=g.am(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.fo(s,f==null?null:f.method))}}return t.$1(new H.lj(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.fw()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cf(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.fw()
return a},
be:function(a){var t
if(a instanceof H.dN)return a.b
if(a==null)return new H.fP(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.fP(a,null)},
ux:function(a){if(a==null||typeof a!='object')return J.bf(a)
else return H.cx(a)},
um:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
us:function(a,b,c,d,e,f,g){switch(c){case 0:return H.fS(b,new H.mU(a))
case 1:return H.fS(b,new H.mV(a,d))
case 2:return H.fS(b,new H.mW(a,d,e))
case 3:return H.fS(b,new H.mX(a,d,e,f))
case 4:return H.fS(b,new H.mY(a,d,e,f,g))}throw H.w(P.id("Unsupported number of arguments for wrapped closure"))},
ev:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.us)
a.$identity=t
return t},
qt:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.a1(c).$isV){t.$reflectionInfo=c
r=H.te(t).r}else r=c
q=d?Object.create(new H.kT().constructor.prototype):Object.create(new H.dI(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.c_
$.c_=J.dE(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.oj(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.uo,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.oh:H.ne
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.w("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.oj(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
qq:function(a,b,c,d){var t=H.ne
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
oj:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.qs(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.qq(s,!q,t,b)
if(s===0){q=$.c_
$.c_=J.dE(q,1)
o="self"+H.p(q)
q="return function(){var "+o+" = this."
p=$.dJ
if(p==null){p=H.h8("self")
$.dJ=p}return new Function(q+H.p(p)+";return "+o+"."+H.p(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.c_
$.c_=J.dE(q,1)
n+=H.p(q)
q="return function("+n+"){return this."
p=$.dJ
if(p==null){p=H.h8("self")
$.dJ=p}return new Function(q+H.p(p)+"."+H.p(t)+"("+n+");}")()},
qr:function(a,b,c,d){var t,s
t=H.ne
s=H.oh
switch(b?-1:a){case 0:throw H.w(new H.ki("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
qs:function(a,b){var t,s,r,q,p,o,n,m
t=H.qo()
s=$.og
if(s==null){s=H.h8("receiver")
$.og=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.qr(q,!o,r,b)
if(q===1){s="return function(){return this."+H.p(t)+"."+H.p(r)+"(this."+H.p(s)+");"
o=$.c_
$.c_=J.dE(o,1)
return new Function(s+H.p(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.p(t)+"."+H.p(r)+"(this."+H.p(s)+", "+m+");"
o=$.c_
$.c_=J.dE(o,1)
return new Function(s+H.p(o)+"}")()},
o5:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.a1(c).$isV){c.fixed$length=Array
t=c}else t=c
return H.qt(a,b,t,!!d,e,f)},
ne:function(a){return a.a},
oh:function(a){return a.c},
qo:function(){var t=$.dJ
if(t==null){t=H.h8("self")
$.dJ=t}return t},
h8:function(a){var t,s,r,q,p
t=new H.dI("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
uz:function(a,b){var t=J.aZ(b)
throw H.w(H.qp(H.nJ(a),t.bI(b,3,t.gF(b))))},
ex:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.a1(a)[b]
else t=!0
if(t)return a
H.uz(a,b)},
pB:function(a){var t=J.a1(a)
return"$S" in t?t.$S():null},
dD:function(a,b){var t
if(a==null)return!1
t=H.pB(a)
return t==null?!1:H.o8(t,b)},
qp:function(a,b){return new H.hd("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
uB:function(a){throw H.w(new P.i4(a))},
n1:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
pD:function(a){return u.getIsolateTag(a)},
aE:function(a){return new H.cD(a,null)},
a:function(a,b){a.$ti=b
return a},
fT:function(a){if(a==null)return
return a.$ti},
pE:function(a,b){return H.ob(a["$as"+H.p(b)],H.fT(a))},
ab:function(a,b,c){var t=H.pE(a,b)
return t==null?null:t[c]},
v:function(a,b){var t=H.fT(a)
return t==null?null:t[b]},
bV:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.o9(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.p(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bV(t,b)
return H.u1(a,b)}return"unknown-reified-type"},
u1:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bV(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bV(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bV(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.ul(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bV(l[j],b)+(" "+H.p(j))}q+="}"}return"("+q+") => "+t},
o9:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.ef("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.X=p+", "
o=a[s]
if(o!=null)q=!1
p=t.X+=H.bV(o,c)}return q?"":"<"+t.w(0)+">"},
mP:function(a){var t,s
if(a instanceof H.d5){t=H.pB(a)
if(t!=null)return H.bV(t,null)}s=J.a1(a).constructor.builtin$cls
if(a==null)return s
return s+H.o9(a.$ti,0,null)},
ob:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dC:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.fT(a)
s=J.a1(a)
if(s[b]==null)return!1
return H.py(H.ob(s[d],t),c)},
py:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.bo(a[s],b[s]))return!1
return!0},
mL:function(a,b,c){return a.apply(b,H.pE(b,c))},
uh:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ar"||b.builtin$cls==="bQ"
if(b==null)return!0
t=H.fT(a)
a=J.a1(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.o8(r.apply(a,null),b)}return H.bo(s,b)},
bo:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="bQ")return!0
if('func' in b)return H.o8(a,b)
if('func' in a)return b.builtin$cls==="uH"||b.builtin$cls==="ar"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.bV(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.py(H.ob(o,t),r)},
px:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.bo(t,p)||H.bo(p,t)))return!1}return!0},
u8:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.bo(p,o)||H.bo(o,p)))return!1}return!0},
o8:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.bo(t,s)||H.bo(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.px(r,q,!1))return!1
if(!H.px(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.bo(i,h)||H.bo(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.bo(i,h)||H.bo(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.bo(i,h)||H.bo(h,i)))return!1}}return H.u8(a.named,b.named)},
uS:function(a){var t=$.o6
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
uR:function(a){return H.cx(a)},
uQ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
uu:function(a){var t,s,r,q,p,o
t=$.o6.$1(a)
s=$.mM[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.mT[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.pw.$2(a,t)
if(t!=null){s=$.mM[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.mT[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.oa(r)
$.mM[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.mT[t]=r
return r}if(p==="-"){o=H.oa(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.pF(a,r)
if(p==="*")throw H.w(new P.du(t))
if(u.leafTags[t]===true){o=H.oa(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.pF(a,r)},
pF:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.mZ(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
oa:function(a){return J.mZ(a,!1,null,!!a.$isc4)},
uw:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.mZ(t,!1,null,!!t.$isc4)
else return J.mZ(t,c,null,null)},
uq:function(){if(!0===$.o7)return
$.o7=!0
H.ur()},
ur:function(){var t,s,r,q,p,o,n,m
$.mM=Object.create(null)
$.mT=Object.create(null)
H.up()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.pG.$1(p)
if(o!=null){n=H.uw(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
up:function(){var t,s,r,q,p,o,n
t=C.z()
t=H.dA(C.A,H.dA(C.B,H.dA(C.q,H.dA(C.q,H.dA(C.D,H.dA(C.C,H.dA(C.E(C.r),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.o6=new H.mQ(p)
$.pw=new H.mR(o)
$.pG=new H.mS(n)},
dA:function(a,b){return a(b)||b},
oZ:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.w(new P.iQ("Illegal RegExp pattern ("+String(q)+")",a,null))},
uA:function(a,b,c){var t
if(typeof b==="string")return a.indexOf(b,c)>=0
else{t=J.a1(b)
if(!!t.$isfh){t=C.f.aJ(a,c)
return b.b.test(t)}else{t=t.dd(b,C.f.aJ(a,c))
return!t.gZ(t)}}},
kf:function kf(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
lh:function lh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fo:function fo(a,b){this.a=a
this.b=b},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
lj:function lj(a){this.a=a},
dN:function dN(a,b){this.a=a
this.b=b},
n4:function n4(a){this.a=a},
fP:function fP(a,b){this.a=a
this.b=b},
mU:function mU(a){this.a=a},
mV:function mV(a,b){this.a=a
this.b=b},
mW:function mW(a,b,c){this.a=a
this.b=b
this.c=c},
mX:function mX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mY:function mY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d5:function d5(){},
l7:function l7(){},
kT:function kT(){},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hd:function hd(a){this.a=a},
ki:function ki(a){this.a=a},
cD:function cD(a,b){this.a=a
this.b=b},
l:function l(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
jj:function jj(a){this.a=a},
jt:function jt(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ju:function ju(a,$ti){this.a=a
this.$ti=$ti},
jv:function jv(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mQ:function mQ(a){this.a=a},
mR:function mR(a){this.a=a},
mS:function mS(a){this.a=a},
fh:function fh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mf:function mf(a,b){this.a=a
this.b=b},
lt:function lt(a,b,c){this.a=a
this.b=b
this.c=c},
lu:function lu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l1:function l1(a,b,c){this.a=a
this.b=b
this.c=c},
my:function my(a,b,c){this.a=a
this.b=b
this.c=c},
mz:function mz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pp:function(a,b,c){},
rW:function(a,b,c){var t
H.pp(a,b,c)
t=new Uint8Array(a,b)
return t},
dp:function dp(){},
cU:function cU(){},
jM:function jM(){},
fk:function fk(){},
fl:function fl(){},
e6:function e6(){},
e8:function e8(){},
fm:function fm(){},
e7:function e7(){},
e9:function e9(){},
jN:function jN(){},
jO:function jO(){},
jP:function jP(){},
jQ:function jQ(){},
jR:function jR(){},
jS:function jS(){},
jT:function jT(){},
fn:function fn(){},
jU:function jU(){},
ul:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
uy:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
a1:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ff.prototype
return J.fe.prototype}if(typeof a=="string")return J.cQ.prototype
if(a==null)return J.fg.prototype
if(typeof a=="boolean")return J.ji.prototype
if(a.constructor==Array)return J.cP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cR.prototype
return a}if(a instanceof P.ar)return a
return J.mO(a)},
mZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
mO:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.o7==null){H.uq()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.w(new P.du("Return interceptor for "+H.p(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$nC()]
if(p!=null)return p
p=H.uu(a)
if(p!=null)return p
if(typeof a=="function")return C.F
s=Object.getPrototypeOf(a)
if(s==null)return C.u
if(s===Object.prototype)return C.u
if(typeof q=="function"){Object.defineProperty(q,$.$get$nC(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
aZ:function(a){if(typeof a=="string")return J.cQ.prototype
if(a==null)return a
if(a.constructor==Array)return J.cP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cR.prototype
return a}if(a instanceof P.ar)return a
return J.mO(a)},
ew:function(a){if(a==null)return a
if(a.constructor==Array)return J.cP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cR.prototype
return a}if(a instanceof P.ar)return a
return J.mO(a)},
cE:function(a){if(typeof a=="number")return J.dk.prototype
if(a==null)return a
if(!(a instanceof P.ar))return J.cZ.prototype
return a},
mN:function(a){if(typeof a=="number")return J.dk.prototype
if(typeof a=="string")return J.cQ.prototype
if(a==null)return a
if(!(a instanceof P.ar))return J.cZ.prototype
return a},
un:function(a){if(typeof a=="string")return J.cQ.prototype
if(a==null)return a
if(!(a instanceof P.ar))return J.cZ.prototype
return a},
W:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cR.prototype
return a}if(a instanceof P.ar)return a
return J.mO(a)},
dE:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.mN(a).U(a,b)},
pL:function(a,b){if(typeof a=="number"&&typeof b=="number")return a/b
return J.cE(a).O(a,b)},
ac:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a1(a).P(a,b)},
bz:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.cE(a).aN(a,b)},
fU:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.cE(a).aw(a,b)},
n5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mN(a).a0(a,b)},
n6:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ut(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aZ(a).l(a,b)},
pM:function(a,b,c,d){return J.W(a).el(a,b,c,d)},
n7:function(a,b,c,d,e){return J.W(a).eL(a,b,c,d,e)},
pN:function(a,b,c,d){return J.W(a).eX(a,b,c,d)},
pO:function(a,b,c){return J.W(a).eY(a,b,c)},
pP:function(a,b){return J.W(a).fe(a,b)},
fV:function(a,b,c){return J.cE(a).L(a,b,c)},
pQ:function(a){return J.W(a).dg(a)},
fW:function(a,b){return J.mN(a).aB(a,b)},
pR:function(a,b){return J.W(a).dh(a,b)},
pS:function(a,b){return J.aZ(a).c7(a,b)},
n8:function(a,b,c){return J.aZ(a).di(a,b,c)},
pT:function(a,b){return J.ew(a).aD(a,b)},
fX:function(a){return J.cE(a).M(a)},
pU:function(a){return J.W(a).gaU(a)},
pV:function(a){return J.W(a).gfl(a)},
ey:function(a){return J.W(a).gah(a)},
pW:function(a){return J.W(a).gfB(a)},
bf:function(a){return J.a1(a).gY(a)},
n9:function(a){return J.W(a).gbd(a)},
bp:function(a){return J.ew(a).gN(a)},
cF:function(a){return J.aZ(a).gF(a)},
bq:function(a){return J.W(a).gE(a)},
oc:function(a){return J.W(a).gce(a)},
pX:function(a){return J.a1(a).ga_(a)},
na:function(a){return J.W(a).gW(a)},
bX:function(a){return J.W(a).gct(a)},
od:function(a,b){return J.ew(a).ai(a,b)},
oe:function(a){return J.W(a).h2(a)},
pY:function(a,b){return J.W(a).ha(a,b)},
pZ:function(a){return J.cE(a).a2(a)},
q_:function(a){return J.cE(a).hc(a)},
q0:function(a,b){return J.W(a).seB(a,b)},
q1:function(a,b){return J.W(a).saU(a,b)},
q2:function(a,b){return J.W(a).sad(a,b)},
bg:function(a,b){return J.W(a).sW(a,b)},
ce:function(a,b){return J.W(a).sct(a,b)},
q3:function(a){return J.W(a).e2(a)},
of:function(a,b){return J.un(a).aJ(a,b)},
q4:function(a){return J.ew(a).aj(a)},
bh:function(a){return J.a1(a).w(a)},
dF:function(a,b){return J.ew(a).cv(a,b)},
J:function J(){},
ji:function ji(){},
fg:function fg(){},
e1:function e1(){},
k7:function k7(){},
cZ:function cZ(){},
cR:function cR(){},
cP:function cP($ti){this.$ti=$ti},
nA:function nA($ti){this.$ti=$ti},
h1:function h1(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
dk:function dk(){},
ff:function ff(){},
fe:function fe(){},
cQ:function cQ(){}},P={
tP:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.u9()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.ev(new P.lw(t),1)).observe(s,{childList:true})
return new P.lv(t,s,r)}else if(self.setImmediate!=null)return P.ua()
return P.ub()},
tQ:function(a){++u.globalState.f.b
self.scheduleImmediate(H.ev(new P.lx(a),0))},
tR:function(a){++u.globalState.f.b
self.setImmediate(H.ev(new P.ly(a),0))},
tS:function(a){P.nR(C.o,a)},
o0:function(a,b){P.po(null,a)
return b.gfD()},
nY:function(a,b){P.po(a,b)},
o_:function(a,b){J.pR(b,a)},
nZ:function(a,b){b.fk(H.b_(a),H.be(a))},
po:function(a,b){var t,s,r,q
t=new P.mF(b)
s=new P.mG(b)
r=J.a1(a)
if(!!r.$isaQ)a.c2(t,s)
else if(!!r.$isbb)a.cq(t,s)
else{q=new P.aQ(0,$.a2,null,[null])
q.a=4
q.c=a
q.c2(t,null)}},
o4:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.a2.toString
return new P.mJ(t)},
pr:function(a,b){if(H.dD(a,{func:1,args:[P.bQ,P.bQ]})){b.toString
return a}else{b.toString
return a}},
nf:function(a){return new P.mD(new P.aQ(0,$.a2,null,[a]),[a])},
u0:function(a,b,c){$.a2.toString
a.ar(b,c)},
pm:function(a,b){var t,s,r
b.a=1
try{a.cq(new P.lS(b),new P.lT(b))}catch(r){t=H.b_(r)
s=H.be(r)
P.pH(new P.lU(b,t,s))}},
lR:function(a,b){var t,s,r
for(;a.geM();)a=a.c
t=a.gbT()
s=b.c
if(t){b.c=null
r=b.bt(s)
b.a=a.a
b.c=a.c
P.dv(b,r)}else{b.a=2
b.c=a
a.d_(s)}},
dv:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.ey(p)
n=p.gax()
s.toString
P.et(null,null,s,o,n)}return}for(;b.gbW()!=null;b=m){m=b.a
b.a=null
P.dv(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gdn()||b.gdm()){k=b.gf7()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.ey(p)
n=p.gax()
s.toString
P.et(null,null,s,o,n)
return}j=$.a2
if(j==null?k!=null:j!==k)$.a2=k
else j=null
if(b.gdm())new P.lZ(t,r,q,b).$0()
else if(s){if(b.gdn())new P.lY(r,b,l).$0()}else if(b.gfK())new P.lX(t,r,b).$0()
if(j!=null)$.a2=j
s=r.b
if(!!J.a1(s).$isbb){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bt(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.lR(s,i)
return}}i=b.b
b=i.bs()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
u3:function(){var t,s
for(;t=$.dy,t!=null;){$.es=null
s=t.b
$.dy=s
if(s==null)$.er=null
t.a.$0()}},
u6:function(){$.o1=!0
try{P.u3()}finally{$.es=null
$.o1=!1
if($.dy!=null)$.$get$nV().$1(P.pz())}},
pv:function(a){var t=new P.fH(a,null)
if($.dy==null){$.er=t
$.dy=t
if(!$.o1)$.$get$nV().$1(P.pz())}else{$.er.b=t
$.er=t}},
u5:function(a){var t,s,r
t=$.dy
if(t==null){P.pv(a)
$.es=$.er
return}s=new P.fH(a,null)
r=$.es
if(r==null){s.b=t
$.es=s
$.dy=s}else{s.b=r.b
r.b=s
$.es=s
if(s.b==null)$.er=s}},
pH:function(a){var t=$.a2
if(C.e===t){P.dz(null,null,C.e,a)
return}t.toString
P.dz(null,null,t,t.c4(a,!0))},
uM:function(a,b){return new P.mx(null,a,!1,[b])},
o3:function(a){return},
pq:function(a,b){var t=$.a2
t.toString
P.et(null,null,t,a,b)},
u4:function(){},
tZ:function(a,b,c){var t=a.by()
if(!!J.a1(t).$isbb&&t!==$.$get$dY())t.bl(new P.mH(b,c))
else b.aQ(c)},
tT:function(a,b,c,d,e,f,g){var t,s
t=$.a2
s=e?1:0
s=new P.em(a,null,null,null,null,t,s,null,null,[f,g])
s.cG(b,c,d,e,g)
s.eh(a,b,c,d,e,f,g)
return s},
tY:function(a,b,c){$.a2.toString
a.bn(b,c)},
tN:function(a,b){var t=$.a2
if(t===C.e){t.toString
return P.nR(a,b)}return P.nR(a,t.c4(b,!0))},
nR:function(a,b){var t=C.b.a5(a.a,1000)
return H.tM(t<0?0:t,b)},
tO:function(){return $.a2},
et:function(a,b,c,d,e){var t={}
t.a=d
P.u5(new P.mI(t,e))},
ps:function(a,b,c,d){var t,s
s=$.a2
if(s===c)return d.$0()
$.a2=c
t=s
try{s=d.$0()
return s}finally{$.a2=t}},
pu:function(a,b,c,d,e){var t,s
s=$.a2
if(s===c)return d.$1(e)
$.a2=c
t=s
try{s=d.$1(e)
return s}finally{$.a2=t}},
pt:function(a,b,c,d,e,f){var t,s
s=$.a2
if(s===c)return d.$2(e,f)
$.a2=c
t=s
try{s=d.$2(e,f)
return s}finally{$.a2=t}},
dz:function(a,b,c,d){var t=C.e!==c
if(t)d=c.c4(d,!(!t||!1))
P.pv(d)},
lw:function lw(a){this.a=a},
lv:function lv(a,b,c){this.a=a
this.b=b
this.c=c},
lx:function lx(a){this.a=a},
ly:function ly(a){this.a=a},
mF:function mF(a){this.a=a},
mG:function mG(a){this.a=a},
mJ:function mJ(a){this.a=a},
bb:function bb(){},
lF:function lF(){},
mD:function mD(a,$ti){this.a=a
this.$ti=$ti},
fN:function fN(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
aQ:function aQ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
lO:function lO(a,b){this.a=a
this.b=b},
lW:function lW(a,b){this.a=a
this.b=b},
lS:function lS(a){this.a=a},
lT:function lT(a){this.a=a},
lU:function lU(a,b,c){this.a=a
this.b=b
this.c=c},
lQ:function lQ(a,b){this.a=a
this.b=b},
lV:function lV(a,b){this.a=a
this.b=b},
lP:function lP(a,b,c){this.a=a
this.b=b
this.c=c},
lZ:function lZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m_:function m_(a){this.a=a},
lY:function lY(a,b,c){this.a=a
this.b=b
this.c=c},
lX:function lX(a,b,c){this.a=a
this.b=b
this.c=c},
fH:function fH(a,b){this.a=a
this.b=b},
cb:function cb(){},
kY:function kY(a){this.a=a},
kZ:function kZ(a,b){this.a=a
this.b=b},
l_:function l_(a,b){this.a=a
this.b=b},
l0:function l0(a,b){this.a=a
this.b=b},
kW:function kW(a,b,c){this.a=a
this.b=b
this.c=c},
kX:function kX(a){this.a=a},
kV:function kV(){},
mt:function mt(){},
mv:function mv(a){this.a=a},
mu:function mu(a){this.a=a},
lz:function lz(){},
fI:function fI(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
fJ:function fJ(a,$ti){this.a=a
this.$ti=$ti},
fK:function fK(x,a,b,c,d,e,f,r,$ti){var _=this
_.x=x
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
bJ:function bJ(){},
lD:function lD(a,b,c){this.a=a
this.b=b
this.c=c},
lC:function lC(a){this.a=a},
mw:function mw(){},
fL:function fL(){},
ej:function ej(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
lH:function lH(b,c,a){this.b=b
this.c=c
this.a=a},
lG:function lG(){},
mh:function mh(){},
mi:function mi(a,b){this.a=a
this.b=b},
fQ:function fQ(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
mx:function mx(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
mH:function mH(a,b){this.a=a
this.b=b},
el:function el(){},
em:function em(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
me:function me(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
d2:function d2(a,b){this.a=a
this.b=b},
mE:function mE(){},
mI:function mI(a,b){this.a=a
this.b=b},
ml:function ml(){},
mm:function mm(a,b){this.a=a
this.b=b},
mn:function mn(a,b){this.a=a
this.b=b},
mo:function mo(a,b){this.a=a
this.b=b},
tU:function(a,b){var t=a[b]
return t===a?null:t},
nX:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
nW:function(){var t=Object.create(null)
P.nX(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
c5:function(a,b){return new H.l(0,null,null,null,null,null,0,[a,b])},
rD:function(){return new H.l(0,null,null,null,null,null,0,[null,null])},
e2:function(a){return H.um(a,new H.l(0,null,null,null,null,null,0,[null,null]))},
ep:function(a,b){return new P.fO(0,null,null,null,null,null,0,[a,b])},
tV:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
r:function(a,b,c,d,e){return new P.m1(0,null,null,null,null,[d,e])},
nz:function(a,b,c){var t,s
if(P.o2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$eu()
s.push(a)
try{P.u2(a,t)}finally{if(0>=s.length)return H.I(s,-1)
s.pop()}s=P.pa(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
fb:function(a,b,c){var t,s,r
if(P.o2(a))return b+"..."+c
t=new P.ef(b)
s=$.$get$eu()
s.push(a)
try{r=t
r.X=P.pa(r.gX(),a,", ")}finally{if(0>=s.length)return H.I(s,-1)
s.pop()}s=t
s.X=s.gX()+c
s=t.gX()
return s.charCodeAt(0)==0?s:s},
o2:function(a){var t,s
for(t=0;s=$.$get$eu(),t<s.length;++t)if(a===s[t])return!0
return!1},
u2:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.bp(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.D())return
q=H.p(t.gH())
b.push(q)
s+=q.length+2;++r}if(!t.D()){if(r<=5)return
if(0>=b.length)return H.I(b,-1)
p=b.pop()
if(0>=b.length)return H.I(b,-1)
o=b.pop()}else{n=t.gH();++r
if(!t.D()){if(r<=4){b.push(H.p(n))
return}p=H.p(n)
if(0>=b.length)return H.I(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gH();++r
for(;t.D();n=m,m=l){l=t.gH();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.I(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.p(n)
p=H.p(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.I(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
bw:function(a,b,c,d){return new P.m9(0,null,null,null,null,null,0,[d])},
nE:function(a,b){var t,s
t=P.bw(null,null,null,b)
for(s=J.bp(a);s.D();)t.j(0,s.gH())
return t},
rG:function(a){var t,s,r
t={}
if(P.o2(a))return"{...}"
s=new P.ef("")
try{$.$get$eu().push(a)
r=s
r.X=r.gX()+"{"
t.a=!0
a.cb(0,new P.jB(t,s))
t=s
t.X=t.gX()+"}"}finally{t=$.$get$eu()
if(0>=t.length)return H.I(t,-1)
t.pop()}t=s.gX()
return t.charCodeAt(0)==0?t:t},
nF:function(a,b){var t=new P.jw(null,0,0,0,[b])
t.eb(a,b)
return t},
m1:function m1(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
m4:function m4(a){this.a=a},
m2:function m2(a,$ti){this.a=a
this.$ti=$ti},
m3:function m3(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fO:function fO(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
m9:function m9(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
ma:function ma(a,b,c){this.a=a
this.b=b
this.c=c},
by:function by(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
m5:function m5(){},
dj:function dj(){},
fa:function fa(){},
c6:function c6(){},
jB:function jB(a,b){this.a=a
this.b=b},
jw:function jw(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mb:function mb(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
ks:function ks(){},
kr:function kr(){},
pa:function(a,b,c){var t=J.bp(b)
if(!t.D())return a
if(c.length===0){do a+=H.p(t.gH())
while(t.D())}else{a+=H.p(t.gH())
for(;t.D();)a=a+c+H.p(t.gH())}return a},
qx:function(a,b){return J.fW(a,b)},
ou:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bh(a)
if(typeof a==="string")return JSON.stringify(a)
return P.qA(a)},
qA:function(a){var t=J.a1(a)
if(!!t.$isd5)return t.w(a)
return H.k9(a)},
nb:function(a){return new P.cf(!1,null,null,a)},
dG:function(a,b,c){return new P.cf(!0,a,b,c)},
fu:function(a,b,c){return new P.ft(null,null,!0,a,b,"Value not in range")},
bm:function(a,b,c,d,e){return new P.ft(b,c,!0,a,d,"Invalid value")},
p7:function(a,b,c,d,e,f){if(0>a||a>c)throw H.w(P.bm(a,0,c,"start",f))
if(a>b||b>c)throw H.w(P.bm(b,a,c,"end",f))
return b},
j1:function(a,b,c,d,e){var t=e!=null?e:J.cF(b)
return new P.j0(b,t,!0,a,c,"Index out of range")},
id:function(a){return new P.lN(a)},
cv:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.bp(a);s.D();)t.push(s.gH())
if(b)return t
t.fixed$length=Array
return t},
h:function(a,b){var t=P.cv(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
n_:function(a){H.uy(H.p(a))},
tg:function(a,b,c){return new H.fh(a,H.oZ(a,!1,!0,!1),null,null)},
cd:function cd(){},
aF:function aF(){},
t:function t(){},
ci:function ci(a){this.a=a},
i9:function i9(){},
ia:function ia(){},
cJ:function cJ(){},
ea:function ea(){},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ft:function ft(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
j0:function j0(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
aY:function aY(a){this.a=a},
du:function du(a){this.a=a},
bR:function bR(a){this.a=a},
bL:function bL(a){this.a=a},
k1:function k1(){},
fw:function fw(){},
i4:function i4(a){this.a=a},
lN:function lN(a){this.a=a},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c},
ie:function ie(a,bq,$ti){this.a=a
this.bq=bq
this.$ti=$ti},
N:function N(){},
C:function C(){},
fd:function fd(){},
V:function V(){},
bQ:function bQ(){},
bK:function bK(){},
ar:function ar(){},
cT:function cT(){},
cB:function cB(){},
B:function B(){},
ef:function ef(X){this.X=X},
pA:function(a){var t,s
t=J.a1(a)
if(!!t.$iscM){s=t.gak(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.fR(a.data,a.height,a.width)},
ui:function(a){if(a instanceof P.fR)return{data:a.a,height:a.b,width:a.c}
return a},
os:function(){var t=$.oq
if(t==null){t=J.n8(window.navigator.userAgent,"Opera",0)
$.oq=t}return t},
qz:function(){var t=$.op
if(t==null){t=P.os()!==!0&&J.n8(window.navigator.userAgent,"Trident/",0)
$.op=t}return t},
ot:function(){var t=$.or
if(t==null){t=P.os()!==!0&&J.n8(window.navigator.userAgent,"WebKit",0)
$.or=t}return t},
mA:function mA(){},
mC:function mC(a,b){this.a=a
this.b=b},
fR:function fR(a,b,c){this.a=a
this.b=b
this.c=c},
mB:function mB(a,b){this.a=a
this.b=b},
tX:function(a){var t=new P.mj(0,0)
t.ej(a)
return t},
eo:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
pn:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
td:function(a,b,c,d,e){var t,s
if(typeof c!=="number")return c.aw()
if(c<0)t=-c*0
else t=c
if(typeof d!=="number")return d.aw()
if(d<0)s=-d*0
else s=d
return new P.cz(a,b,t,s,[e])},
m7:function m7(){},
mj:function mj(a,b){this.a=a
this.b=b},
cw:function cw(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
mk:function mk(){},
cz:function cz(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fY:function fY(){},
cG:function cG(){},
ih:function ih(){},
ii:function ii(){},
ij:function ij(){},
ik:function ik(){},
il:function il(){},
im:function im(){},
io:function io(){},
ip:function ip(){},
iq:function iq(){},
ir:function ir(){},
is:function is(){},
it:function it(){},
iu:function iu(){},
iv:function iv(){},
iw:function iw(){},
ix:function ix(){},
iy:function iy(){},
iz:function iz(){},
iN:function iN(){},
iP:function iP(){},
bO:function bO(){},
co:function co(){},
j_:function j_(){},
jC:function jC(){},
jD:function jD(){},
k6:function k6(){},
ke:function ke(){},
kp:function kp(){},
l3:function l3(){},
aX:function aX(){},
l4:function l4(){},
l6:function l6(){},
fD:function fD(){},
lb:function lb(){},
eg:function eg(){},
lk:function lk(){},
ll:function ll(){},
en:function en(){},
mp:function mp(){},
mq:function mq(){},
mr:function mr(){},
cH:function cH(){}},W={
oi:function(a,b){var t=document.createElement("canvas")
t.width=b
t.height=a
return t},
qy:function(a,b,c,d){var t,s,r
t=document.createEvent("CustomEvent")
J.q0(t,d)
if(!J.a1(d).$isV)if(!J.a1(d).$isnG){s=d
if(typeof s!=="string"){s=d
s=typeof s==="number"}else s=!0}else s=!0
else s=!0
if(s)try{d=new P.mB([],[]).cu(d)
J.n7(t,a,!0,!0,d)}catch(r){H.b_(r)
J.n7(t,a,!0,!0,null)}else J.n7(t,a,!0,!0,null)
return t},
eJ:function(a,b){var t,s,r,q,p,o,n
t=a==null?b==null:a===b
s=t||b.tagName==="HTML"
if(a==null||t){if(s)return new P.cw(0,0,[null])
throw H.w(P.nb("Specified element is not a transitive offset parent of this element."))}r=W.eJ(a.offsetParent,b)
q=r.a
p=C.c.a2(a.offsetLeft)
if(typeof q!=="number")return q.U()
o=r.b
n=C.c.a2(a.offsetTop)
if(typeof o!=="number")return o.U()
return new P.cw(q+p,o+n,[null])},
aJ:function(a){var t,s,r
s=document.createElement("input")
t=s
try{J.q2(t,a)}catch(r){H.b_(r)}return t},
k0:function(a,b,c,d){var t=new Option(a,b,c,!1)
return t},
m8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
a6:function(a,b,c,d,e){var t=W.u7(new W.lM(c))
t=new W.lL(0,a,b,t,!1,[e])
t.eg(a,b,c,!1,e)
return t},
u7:function(a){var t=$.a2
if(t===C.e)return a
return t.fg(a,!0)},
a_:function a_(){},
h_:function h_(){},
h0:function h0(){},
d3:function d3(){},
h7:function h7(){},
ha:function ha(){},
hc:function hc(){},
eB:function eB(){},
cI:function cI(){},
eF:function eF(){},
d6:function d6(){},
eZ:function eZ(){},
i1:function i1(){},
i3:function i3(){},
eH:function eH(){},
eI:function eI(){},
i5:function i5(){},
cj:function cj(){},
ib:function ib(){},
ic:function ic(){},
z:function z(){},
dM:function dM(){},
iJ:function iJ(){},
aM:function aM(){},
dd:function dd(){},
f_:function f_(){},
f0:function f0(){},
eS:function eS(){},
eV:function eV(){},
iY:function iY(){},
cM:function cM(){},
iZ:function iZ(){},
eY:function eY(){},
ec:function ec(){},
jm:function jm(){},
jo:function jo(){},
js:function js(){},
jA:function jA(){},
e5:function e5(){},
jE:function jE(){},
jF:function jF(){},
jG:function jG(){},
jH:function jH(){},
jI:function jI(){},
aA:function aA(){},
jV:function jV(){},
jW:function jW(){},
cV:function cV(){},
jX:function jX(){},
jY:function jY(){},
k_:function k_(){},
k2:function k2(){},
k5:function k5(){},
kb:function kb(){},
ko:function ko(){},
c9:function c9(){},
kt:function kt(){},
kw:function kw(){},
ky:function ky(){},
kz:function kz(){},
l2:function l2(){},
la:function la(){},
bS:function bS(){},
fG:function fG(){},
lA:function lA(){},
lE:function lE(){},
lI:function lI(){},
m0:function m0(){},
ms:function ms(){},
fM:function fM(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ek:function ek(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
lL:function lL(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
lM:function lM(a){this.a=a},
eX:function eX(){},
iO:function iO(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti}},S={fZ:function fZ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jn:function jn(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
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
_.r1=r1},jy:function jy(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
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
_.r1=r1},kq:function kq(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
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
_.r1=r1}},L={
nd:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=P.B
s=A.bA
r=P.N
q=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
q.i(0,$.ad,L.c("#00ff00"),!0)
q.i(0,$.af,L.c("#EFEFEF"),!0)
q.i(0,$.ae,L.c("#DEDEDE"),!0)
q.i(0,$.an,L.c("#FF2106"),!0)
q.i(0,$.am,L.c("#B01200"),!0)
q.i(0,$.ah,L.c("#2F2F30"),!0)
q.i(0,$.ai,L.c("#1D1D1D"),!0)
q.i(0,$.ag,L.c("#080808"),!0)
q.i(0,$.aa,L.c("#030303"),!0)
q.i(0,$.al,L.c("#242424"),!0)
q.i(0,$.ak,L.c("#333333"),!0)
q.i(0,$.aj,L.c("#141414"),!0)
p=[t]
o=P.h(H.a(["Frogs"],p),t)
n=P.h(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),t)
m=P.h(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),t)
l=P.h(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),t)
k=P.h(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),t)
j=E.A
i=[j]
h=P.h(H.a([new E.A($.ca,2,!0),new E.A($.ds,1,!0),new E.A($.fB,-2,!0)],i),j)
g=[X.q,P.t]
f=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
f.i(0,$.ad,L.c("#FF9B00"),!0)
f.i(0,$.af,L.c("#FF9B00"),!0)
f.i(0,$.ae,L.c("#FF8700"),!0)
f.i(0,$.an,L.c("#7F7F7F"),!0)
f.i(0,$.am,L.c("#727272"),!0)
f.i(0,$.ah,L.c("#A3A3A3"),!0)
f.i(0,$.ai,L.c("#999999"),!0)
f.i(0,$.ag,L.c("#898989"),!0)
f.i(0,$.aa,L.c("#EFEFEF"),!0)
f.i(0,$.al,L.c("#DBDBDB"),!0)
f.i(0,$.ak,L.c("#C6C6C6"),!0)
f.i(0,$.aj,L.c("#ADADAD"),!0)
e=[A.d4]
d=A.M
f=new N.kx(0.5,1,0.5,q,o,n,m,l,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],h,0.01,0.01,0.01,0.5,0,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Space",null,!0,!1,!1,!1,!0,1,f,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
f.a9(0,"Space",!0,!1)
$.qi=f
f=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
f.i(0,$.ad,L.c("#ff0000"),!0)
f.i(0,$.af,L.c("#FF2106"),!0)
f.i(0,$.ae,L.c("#AD1604"),!0)
f.i(0,$.an,L.c("#030303"),!0)
f.i(0,$.am,L.c("#242424"),!0)
f.i(0,$.ah,L.c("#510606"),!0)
f.i(0,$.ai,L.c("#3C0404"),!0)
f.i(0,$.ag,L.c("#1F0000"),!0)
f.i(0,$.aa,L.c("#B70D0E"),!0)
f.i(0,$.al,L.c("#970203"),!0)
f.i(0,$.ak,L.c("#8E1516"),!0)
f.i(0,$.aj,L.c("#640707"),!0)
h=P.h(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),t)
k=P.h(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),t)
l=P.h(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),t)
m=P.h(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),t)
n=P.h(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),t)
o=P.h(H.a([new E.A($.fA,2,!0),new E.A($.fB,1,!0),new E.A($.ee,-2,!0)],i),j)
q=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
q.i(0,$.ad,L.c("#FF9B00"),!0)
q.i(0,$.af,L.c("#FF9B00"),!0)
q.i(0,$.ae,L.c("#FF8700"),!0)
q.i(0,$.an,L.c("#7F7F7F"),!0)
q.i(0,$.am,L.c("#727272"),!0)
q.i(0,$.ah,L.c("#A3A3A3"),!0)
q.i(0,$.ai,L.c("#999999"),!0)
q.i(0,$.ag,L.c("#898989"),!0)
q.i(0,$.aa,L.c("#EFEFEF"),!0)
q.i(0,$.al,L.c("#DBDBDB"),!0)
q.i(0,$.ak,L.c("#C6C6C6"),!0)
q.i(0,$.aj,L.c("#ADADAD"),!0)
q=new N.ld(0.51,1,0.01,0.7,f,h,k,l,m,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",n,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],o,0.01,0.01,0.01,0.5,1,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Time",null,!0,!1,!1,!1,!0,1,q,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
q.a9(1,"Time",!0,!1)
$.qj=q
q=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
q.i(0,$.ad,L.c("#3399ff"),!0)
q.i(0,$.af,L.c("#10E0FF"),!0)
q.i(0,$.ae,L.c("#00A4BB"),!0)
q.i(0,$.an,L.c("#FEFD49"),!0)
q.i(0,$.am,L.c("#D6D601"),!0)
q.i(0,$.ah,L.c("#0052F3"),!0)
q.i(0,$.ai,L.c("#0046D1"),!0)
q.i(0,$.ag,L.c("#003396"),!0)
q.i(0,$.aa,L.c("#0087EB"),!0)
q.i(0,$.al,L.c("#0070ED"),!0)
q.i(0,$.ak,L.c("#006BE1"),!0)
q.i(0,$.aj,L.c("#0054B0"),!0)
o=P.h(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),t)
n=P.h(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),t)
m=P.h(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),t)
l=P.h(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),t)
k=P.h(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],t)
h=P.h(H.a([new E.A($.fB,2,!0),new E.A($.bI,1,!0),new E.A($.ds,-1,!0),new E.A($.dt,-1,!0),new E.A($.aW,0.05,!1)],i),j)
f=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
f.i(0,$.ad,L.c("#FF9B00"),!0)
f.i(0,$.af,L.c("#FF9B00"),!0)
f.i(0,$.ae,L.c("#FF8700"),!0)
f.i(0,$.an,L.c("#7F7F7F"),!0)
f.i(0,$.am,L.c("#727272"),!0)
f.i(0,$.ah,L.c("#A3A3A3"),!0)
f.i(0,$.ai,L.c("#999999"),!0)
f.i(0,$.ag,L.c("#898989"),!0)
f.i(0,$.aa,L.c("#EFEFEF"),!0)
f.i(0,$.al,L.c("#DBDBDB"),!0)
f.i(0,$.ak,L.c("#C6C6C6"),!0)
f.i(0,$.aj,L.c("#ADADAD"),!0)
f=new T.h9(0.5,1,0.01,0.3,q,o,n,m,l,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],k,h,0.01,0.01,0.01,0.5,2,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Breath",null,!0,!1,!1,!1,!0,1,f,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
f.a9(2,"Breath",!0,!1)
$.q7=f
f=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
f.i(0,$.ad,L.c("#003300"),!0)
f.i(0,$.af,L.c("#0F0F0F"),!0)
f.i(0,$.ae,L.c("#010101"),!0)
f.i(0,$.an,L.c("#E8C15E"),!0)
f.i(0,$.am,L.c("#C7A140"),!0)
f.i(0,$.ah,L.c("#1E211E"),!0)
f.i(0,$.ai,L.c("#141614"),!0)
f.i(0,$.ag,L.c("#0B0D0B"),!0)
f.i(0,$.aa,L.c("#204020"),!0)
f.i(0,$.al,L.c("#11200F"),!0)
f.i(0,$.ak,L.c("#192C16"),!0)
f.i(0,$.aj,L.c("#121F10"),!0)
h=P.h(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),t)
k=P.h(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),t)
l=P.h(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),t)
m=P.h(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),t)
n=P.h(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),t)
o=P.h(H.a([new E.A($.ca,2,!0),new E.A($.ee,1,!0),new E.A($.fA,-1,!0),new E.A($.ds,-1,!0),new E.A($.aW,0.01,!1)],i),j)
q=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
q.i(0,$.ad,L.c("#FF9B00"),!0)
q.i(0,$.af,L.c("#FF9B00"),!0)
q.i(0,$.ae,L.c("#FF8700"),!0)
q.i(0,$.an,L.c("#7F7F7F"),!0)
q.i(0,$.am,L.c("#727272"),!0)
q.i(0,$.ah,L.c("#A3A3A3"),!0)
q.i(0,$.ai,L.c("#999999"),!0)
q.i(0,$.ag,L.c("#898989"),!0)
q.i(0,$.aa,L.c("#EFEFEF"),!0)
q.i(0,$.al,L.c("#DBDBDB"),!0)
q.i(0,$.ak,L.c("#C6C6C6"),!0)
q.i(0,$.aj,L.c("#ADADAD"),!0)
q=new U.i7(1,0.5,0.5,1,f,h,k,l,m,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,n,o,0.01,0.01,0.01,0.5,3,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Doom",null,!0,!1,!1,!1,!0,1,q,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
q.a9(3,"Doom",!0,!1)
$.q8=q
q=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
q.i(0,$.ad,L.c("#993300"),!0)
q.i(0,$.af,L.c("#BA1016"),!0)
q.i(0,$.ae,L.c("#820B0F"),!0)
q.i(0,$.an,L.c("#381B76"),!0)
q.i(0,$.am,L.c("#1E0C47"),!0)
q.i(0,$.ah,L.c("#290704"),!0)
q.i(0,$.ai,L.c("#230200"),!0)
q.i(0,$.ag,L.c("#110000"),!0)
q.i(0,$.aa,L.c("#3D190A"),!0)
q.i(0,$.al,L.c("#2C1207"),!0)
q.i(0,$.ak,L.c("#5C2913"),!0)
q.i(0,$.aj,L.c("#4C1F0D"),!0)
o=P.h(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),t)
n=P.h(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),t)
m=P.h(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),t)
l=P.h(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),t)
k=P.h(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),t)
h=P.h(H.a([new E.A($.dt,2,!0),new E.A($.bI,1,!0),new E.A($.ca,-2,!0)],i),j)
f=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
f.i(0,$.ad,L.c("#FF9B00"),!0)
f.i(0,$.af,L.c("#FF9B00"),!0)
f.i(0,$.ae,L.c("#FF8700"),!0)
f.i(0,$.an,L.c("#7F7F7F"),!0)
f.i(0,$.am,L.c("#727272"),!0)
f.i(0,$.ah,L.c("#A3A3A3"),!0)
f.i(0,$.ai,L.c("#999999"),!0)
f.i(0,$.ag,L.c("#898989"),!0)
f.i(0,$.aa,L.c("#EFEFEF"),!0)
f.i(0,$.al,L.c("#DBDBDB"),!0)
f.i(0,$.ak,L.c("#C6C6C6"),!0)
f.i(0,$.aj,L.c("#ADADAD"),!0)
f=new T.h6(0.01,0.5,1,0,q,o,n,m,l,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],k,h,0.01,0.01,0.01,0.5,4,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Blood",null,!0,!1,!1,!1,!0,1,f,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
f.a9(4,"Blood",!0,!1)
$.q6=f
f=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
f.i(0,$.ad,L.c("#ff3399"),!0)
f.i(0,$.af,L.c("#BD1864"),!0)
f.i(0,$.ae,L.c("#780F3F"),!0)
f.i(0,$.an,L.c("#1D572E"),!0)
f.i(0,$.am,L.c("#11371D"),!0)
f.i(0,$.ah,L.c("#4C1026"),!0)
f.i(0,$.ai,L.c("#3C0D1F"),!0)
f.i(0,$.ag,L.c("#260914"),!0)
f.i(0,$.aa,L.c("#6B0829"),!0)
f.i(0,$.al,L.c("#4A0818"),!0)
f.i(0,$.ak,L.c("#55142A"),!0)
f.i(0,$.aj,L.c("#3D0E1E"),!0)
h=P.h(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),t)
k=P.h(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),t)
l=P.h(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),t)
m=P.h(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),t)
n=P.h(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),t)
o=P.h(H.a([new E.A($.dt,1,!0),new E.h3(null,1,!0)],i),j)
q=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
q.i(0,$.ad,L.c("#FF9B00"),!0)
q.i(0,$.af,L.c("#FF9B00"),!0)
q.i(0,$.ae,L.c("#FF8700"),!0)
q.i(0,$.an,L.c("#7F7F7F"),!0)
q.i(0,$.am,L.c("#727272"),!0)
q.i(0,$.ah,L.c("#A3A3A3"),!0)
q.i(0,$.ai,L.c("#999999"),!0)
q.i(0,$.ag,L.c("#898989"),!0)
q.i(0,$.aa,L.c("#EFEFEF"),!0)
q.i(0,$.al,L.c("#DBDBDB"),!0)
q.i(0,$.ak,L.c("#C6C6C6"),!0)
q.i(0,$.aj,L.c("#ADADAD"),!0)
q=new T.iU(0.3,0.6,0.01,f,h,k,l,m,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,n,o,0.01,0.01,0.01,0.5,5,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Heart",null,!0,!1,!1,!1,!0,1,q,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
q.a9(5,"Heart",!0,!1)
$.qa=q
q=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
q.i(0,$.ad,L.c("#3da35a"),!0)
q.i(0,$.af,L.c("#06FFC9"),!0)
q.i(0,$.ae,L.c("#04A885"),!0)
q.i(0,$.an,L.c("#6E0E2E"),!0)
q.i(0,$.am,L.c("#4A0818"),!0)
q.i(0,$.ah,L.c("#1D572E"),!0)
q.i(0,$.ai,L.c("#164524"),!0)
q.i(0,$.ag,L.c("#11371D"),!0)
q.i(0,$.aa,L.c("#3DA35A"),!0)
q.i(0,$.al,L.c("#2E7A43"),!0)
q.i(0,$.ak,L.c("#3B7E4F"),!0)
q.i(0,$.aj,L.c("#265133"),!0)
o=P.h(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),t)
n=P.h(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),t)
m=P.h(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),t)
l=P.h(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),t)
k=P.h(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),t)
h=P.h(H.a([new E.A($.ee,2,!0),new E.A($.fA,1,!0),new E.A($.ca,-2,!0)],i),j)
f=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
f.i(0,$.ad,L.c("#FF9B00"),!0)
f.i(0,$.af,L.c("#FF9B00"),!0)
f.i(0,$.ae,L.c("#FF8700"),!0)
f.i(0,$.an,L.c("#7F7F7F"),!0)
f.i(0,$.am,L.c("#727272"),!0)
f.i(0,$.ah,L.c("#A3A3A3"),!0)
f.i(0,$.ai,L.c("#999999"),!0)
f.i(0,$.ag,L.c("#898989"),!0)
f.i(0,$.aa,L.c("#EFEFEF"),!0)
f.i(0,$.al,L.c("#DBDBDB"),!0)
f.i(0,$.ak,L.c("#C6C6C6"),!0)
f.i(0,$.aj,L.c("#ADADAD"),!0)
f=new V.jJ(0.3,0.3,1,q,o,n,m,l,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],h,0.01,0.01,0.01,0.5,6,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Mind",null,!0,!1,!1,!1,!0,1,f,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
f.a9(6,"Mind",!0,!1)
$.qf=f
f=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
f.i(0,$.ad,L.c("#ff9933"),!0)
f.i(0,$.af,L.c("#FEFD49"),!0)
f.i(0,$.ae,L.c("#FEC910"),!0)
f.i(0,$.an,L.c("#10E0FF"),!0)
f.i(0,$.am,L.c("#00A4BB"),!0)
f.i(0,$.ah,L.c("#FA4900"),!0)
f.i(0,$.ai,L.c("#E94200"),!0)
f.i(0,$.ag,L.c("#C33700"),!0)
f.i(0,$.aa,L.c("#FF8800"),!0)
f.i(0,$.al,L.c("#D66E04"),!0)
f.i(0,$.ak,L.c("#E76700"),!0)
f.i(0,$.aj,L.c("#CA5B00"),!0)
h=P.h(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),t)
k=P.h(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),t)
l=P.h(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),t)
m=P.h(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),t)
n=P.h(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),t)
o=P.h(H.a([new E.A($.fz,2,!0),new E.A($.ee,1,!0),new E.A($.bI,-1,!0),new E.A($.ds,-1,!0),new E.A($.aW,0.2,!1)],i),j)
q=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
q.i(0,$.ad,L.c("#FF9B00"),!0)
q.i(0,$.af,L.c("#FF9B00"),!0)
q.i(0,$.ae,L.c("#FF8700"),!0)
q.i(0,$.an,L.c("#7F7F7F"),!0)
q.i(0,$.am,L.c("#727272"),!0)
q.i(0,$.ah,L.c("#A3A3A3"),!0)
q.i(0,$.ai,L.c("#999999"),!0)
q.i(0,$.ag,L.c("#898989"),!0)
q.i(0,$.aa,L.c("#EFEFEF"),!0)
q.i(0,$.al,L.c("#DBDBDB"),!0)
q.i(0,$.ak,L.c("#C6C6C6"),!0)
q.i(0,$.aj,L.c("#ADADAD"),!0)
q=new G.jr(1.01,0.5,0.01,f,h,k,l,m,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",n,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],o,0.01,0.01,0.01,0.5,7,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Light",null,!0,!1,!1,!1,!0,1,q,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
q.a9(7,"Light",!0,!1)
$.qe=q
q=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
q.i(0,$.ad,L.c("#000066"),!0)
q.i(0,$.af,L.c("#0B1030"),!0)
q.i(0,$.ae,L.c("#04091A"),!0)
q.i(0,$.an,L.c("#CCC4B5"),!0)
q.i(0,$.am,L.c("#A89F8D"),!0)
q.i(0,$.ah,L.c("#00164F"),!0)
q.i(0,$.ai,L.c("#00103C"),!0)
q.i(0,$.ag,L.c("#00071A"),!0)
q.i(0,$.aa,L.c("#033476"),!0)
q.i(0,$.al,L.c("#02285B"),!0)
q.i(0,$.ak,L.c("#004CB2"),!0)
q.i(0,$.aj,L.c("#003E91"),!0)
o=P.h(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),t)
n=P.h(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),t)
m=P.h(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),t)
l=P.h(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),t)
k=P.h(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),t)
h=P.h(H.a([new E.dH(D.nQ(),null,3,!0),new E.dH(D.nQ(),null,-1,!0),new E.A($.fA,-1,!0),new E.A($.aW,0.2,!1)],i),j)
f=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
f.i(0,$.ad,L.c("#FF9B00"),!0)
f.i(0,$.af,L.c("#FF9B00"),!0)
f.i(0,$.ae,L.c("#FF8700"),!0)
f.i(0,$.an,L.c("#7F7F7F"),!0)
f.i(0,$.am,L.c("#727272"),!0)
f.i(0,$.ah,L.c("#A3A3A3"),!0)
f.i(0,$.ai,L.c("#999999"),!0)
f.i(0,$.ag,L.c("#898989"),!0)
f.i(0,$.aa,L.c("#EFEFEF"),!0)
f.i(0,$.al,L.c("#DBDBDB"),!0)
f.i(0,$.ak,L.c("#C6C6C6"),!0)
f.i(0,$.aj,L.c("#ADADAD"),!0)
f=new Q.lm(1,1,1,q,o,n,m,l,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],h,0.01,0.01,0.01,0.5,8,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Void",null,!0,!1,!1,!1,!0,1,f,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
f.a9(8,"Void",!0,!1)
$.qk=f
f=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
f.i(0,$.ad,L.c("#9900cc"),!0)
f.i(0,$.af,L.c("#974AA7"),!0)
f.i(0,$.ae,L.c("#6B347D"),!0)
f.i(0,$.an,L.c("#3D190A"),!0)
f.i(0,$.am,L.c("#2C1207"),!0)
f.i(0,$.ah,L.c("#7C3FBA"),!0)
f.i(0,$.ai,L.c("#6D34A6"),!0)
f.i(0,$.ag,L.c("#592D86"),!0)
f.i(0,$.aa,L.c("#381B76"),!0)
f.i(0,$.al,L.c("#1E0C47"),!0)
f.i(0,$.ak,L.c("#281D36"),!0)
f.i(0,$.aj,L.c("#1D1526"),!0)
h=P.h(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),t)
k=P.h(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),t)
l=P.h(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),t)
m=P.h(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),t)
n=P.h(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),t)
o=P.h(H.a([new E.A($.fC,2,!0),new E.A($.fB,1,!0),new E.A($.bI,-1,!0),new E.A($.dt,-1,!0),new E.A($.aW,0.01,!1)],i),j)
q=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
q.i(0,$.ad,L.c("#FF9B00"),!0)
q.i(0,$.af,L.c("#FF9B00"),!0)
q.i(0,$.ae,L.c("#FF8700"),!0)
q.i(0,$.an,L.c("#7F7F7F"),!0)
q.i(0,$.am,L.c("#727272"),!0)
q.i(0,$.ah,L.c("#A3A3A3"),!0)
q.i(0,$.ai,L.c("#999999"),!0)
q.i(0,$.ag,L.c("#898989"),!0)
q.i(0,$.aa,L.c("#EFEFEF"),!0)
q.i(0,$.al,L.c("#DBDBDB"),!0)
q.i(0,$.ak,L.c("#C6C6C6"),!0)
q.i(0,$.aj,L.c("#ADADAD"),!0)
q=new E.kd(1,1,0.01,f,h,k,l,m," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",n,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],o,0.01,0.01,0.01,0.5,9,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rage",null,!0,!1,!1,!1,!0,1,q,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
q.a9(9,"Rage",!0,!1)
$.qg=q
q=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
q.i(0,$.ad,L.c("#ffcc66"),!0)
q.i(0,$.af,L.c("#FDF9EC"),!0)
q.i(0,$.ae,L.c("#D6C794"),!0)
q.i(0,$.an,L.c("#164524"),!0)
q.i(0,$.am,L.c("#06280C"),!0)
q.i(0,$.ah,L.c("#FFC331"),!0)
q.i(0,$.ai,L.c("#F7BB2C"),!0)
q.i(0,$.ag,L.c("#DBA523"),!0)
q.i(0,$.aa,L.c("#FFE094"),!0)
q.i(0,$.al,L.c("#E8C15E"),!0)
q.i(0,$.ak,L.c("#F6C54A"),!0)
q.i(0,$.aj,L.c("#EDAF0C"),!0)
o=P.h(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),t)
n=P.h(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),t)
m=P.h(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),t)
l=P.h(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),t)
k=P.h(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),t)
h=P.h(H.a([new E.A($.bI,2,!0),new E.A($.fz,1,!0),new E.dH(D.nQ(),null,-2,!0)],i),j)
f=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
f.i(0,$.ad,L.c("#FF9B00"),!0)
f.i(0,$.af,L.c("#FF9B00"),!0)
f.i(0,$.ae,L.c("#FF8700"),!0)
f.i(0,$.an,L.c("#7F7F7F"),!0)
f.i(0,$.am,L.c("#727272"),!0)
f.i(0,$.ah,L.c("#A3A3A3"),!0)
f.i(0,$.ai,L.c("#999999"),!0)
f.i(0,$.ag,L.c("#898989"),!0)
f.i(0,$.aa,L.c("#EFEFEF"),!0)
f.i(0,$.al,L.c("#DBDBDB"),!0)
f.i(0,$.ak,L.c("#C6C6C6"),!0)
f.i(0,$.aj,L.c("#ADADAD"),!0)
f=new X.iW(1,1,1,q,o,n,m,l,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],k,h,0.01,0.01,0.01,0.5,10,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Hope",null,!0,!1,!1,!1,!0,1,f,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
f.a9(10,"Hope",!0,!1)
$.qb=f
f=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
f.i(0,$.ad,L.c("#494132"),!0)
f.i(0,$.af,L.c("#76C34E"),!0)
f.i(0,$.ae,L.c("#4F8234"),!0)
f.i(0,$.an,L.c("#00164F"),!0)
f.i(0,$.am,L.c("#00071A"),!0)
f.i(0,$.ah,L.c("#605542"),!0)
f.i(0,$.ai,L.c("#494132"),!0)
f.i(0,$.ag,L.c("#2D271E"),!0)
f.i(0,$.aa,L.c("#CCC4B5"),!0)
f.i(0,$.al,L.c("#A89F8D"),!0)
f.i(0,$.ak,L.c("#A29989"),!0)
f.i(0,$.aj,L.c("#918673"),!0)
h=P.h(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),t)
k=P.h(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),t)
l=P.h(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),t)
m=P.h(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),t)
n=P.h(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),t)
o=P.h(H.a([new E.A($.ds,2,!0),new E.A($.fC,1,!0),new E.A($.ca,-2,!0)],i),j)
q=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
q.i(0,$.ad,L.c("#FF9B00"),!0)
q.i(0,$.af,L.c("#FF9B00"),!0)
q.i(0,$.ae,L.c("#FF8700"),!0)
q.i(0,$.an,L.c("#7F7F7F"),!0)
q.i(0,$.am,L.c("#727272"),!0)
q.i(0,$.ah,L.c("#A3A3A3"),!0)
q.i(0,$.ai,L.c("#999999"),!0)
q.i(0,$.ag,L.c("#898989"),!0)
q.i(0,$.aa,L.c("#EFEFEF"),!0)
q.i(0,$.al,L.c("#DBDBDB"),!0)
q.i(0,$.ak,L.c("#C6C6C6"),!0)
q.i(0,$.aj,L.c("#ADADAD"),!0)
q=new K.jq(0.01,1,0.03,f,h,k,l,m,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],n,o,0.01,0.01,0.01,0.5,11,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Life",null,!0,!1,!1,!1,!0,1,q,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
q.a9(11,"Life",!0,!1)
$.qd=q
q=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
q.i(0,$.ad,L.c("#9630BF"),!0)
q.i(0,$.af,L.c("#cc87e8"),!0)
q.i(0,$.ae,L.c("#9545b7"),!0)
q.i(0,$.an,L.c("#ae769b"),!0)
q.i(0,$.am,L.c("#8f577c"),!0)
q.i(0,$.ah,L.c("#9630bf"),!0)
q.i(0,$.ai,L.c("#693773"),!0)
q.i(0,$.ag,L.c("#4c2154"),!0)
q.i(0,$.aa,L.c("#fcf9bd"),!0)
q.i(0,$.al,L.c("#e0d29e"),!0)
q.i(0,$.ak,L.c("#bdb968"),!0)
q.i(0,$.aj,L.c("#ab9b55"),!0)
o=P.h(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),t)
n=P.h(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),t)
m=P.h(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),t)
l=P.h(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),t)
k=P.h(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),t)
h=P.h(H.a([new E.A($.ca,3,!0),new E.A($.bI,-2,!0)],i),j)
f=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
f.i(0,$.ad,L.c("#FF9B00"),!0)
f.i(0,$.af,L.c("#FF9B00"),!0)
f.i(0,$.ae,L.c("#FF8700"),!0)
f.i(0,$.an,L.c("#7F7F7F"),!0)
f.i(0,$.am,L.c("#727272"),!0)
f.i(0,$.ah,L.c("#A3A3A3"),!0)
f.i(0,$.ai,L.c("#999999"),!0)
f.i(0,$.ag,L.c("#898989"),!0)
f.i(0,$.aa,L.c("#EFEFEF"),!0)
f.i(0,$.al,L.c("#DBDBDB"),!0)
f.i(0,$.ak,L.c("#C6C6C6"),!0)
f.i(0,$.aj,L.c("#ADADAD"),!0)
f=new Z.i8(1.01,0.3,0.01,q,o,n,m,l,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,k,h,0.01,0.01,0.01,0.5,12,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Dream",null,!1,!1,!1,!1,!0,1,f,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
f.a9(12,"Dream",!1,!1)
$.q9=f
f=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
f.i(0,$.ad,L.c("#9630BF"),!0)
f.i(0,$.af,L.c("#cc87e8"),!0)
f.i(0,$.ae,L.c("#9545b7"),!0)
f.i(0,$.an,L.c("#ae769b"),!0)
f.i(0,$.am,L.c("#8f577c"),!0)
f.i(0,$.ah,L.c("#9630bf"),!0)
f.i(0,$.ai,L.c("#693773"),!0)
f.i(0,$.ag,L.c("#4c2154"),!0)
f.i(0,$.aa,L.c("#fcf9bd"),!0)
f.i(0,$.al,L.c("#e0d29e"),!0)
f.i(0,$.ak,L.c("#bdb968"),!0)
f.i(0,$.aj,L.c("#ab9b55"),!0)
h=P.h(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),t)
k=P.h(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),t)
l=P.h(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),t)
m=P.h(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),t)
n=P.h(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),t)
o=P.h(H.a([new E.A($.ca,3,!0),new E.A($.bI,-2,!0)],i),j)
q=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
q.i(0,$.ad,L.c("#FF9B00"),!0)
q.i(0,$.af,L.c("#FF9B00"),!0)
q.i(0,$.ae,L.c("#FF8700"),!0)
q.i(0,$.an,L.c("#7F7F7F"),!0)
q.i(0,$.am,L.c("#727272"),!0)
q.i(0,$.ah,L.c("#A3A3A3"),!0)
q.i(0,$.ai,L.c("#999999"),!0)
q.i(0,$.ag,L.c("#898989"),!0)
q.i(0,$.aa,L.c("#EFEFEF"),!0)
q.i(0,$.al,L.c("#DBDBDB"),!0)
q.i(0,$.ak,L.c("#C6C6C6"),!0)
q.i(0,$.aj,L.c("#ADADAD"),!0)
q=new Q.jp(1.01,0.3,0.01,f,h,k,l,m,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,n,o,0.01,0.01,0.01,0.5,13,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Law",null,!1,!1,!1,!1,!0,1,q,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
q.a9(13,"Law",!1,!1)
$.qc=q
q=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
q.i(0,$.ad,L.c("#00ff00"),!0)
q.i(0,$.af,L.c("#00ff00"),!0)
q.i(0,$.ae,L.c("#00ff00"),!0)
q.i(0,$.an,L.c("#00ff00"),!0)
q.i(0,$.am,L.c("#00cf00"),!0)
q.i(0,$.ah,L.c("#171717"),!0)
q.i(0,$.ai,L.c("#080808"),!0)
q.i(0,$.ag,L.c("#080808"),!0)
q.i(0,$.aa,L.c("#616161"),!0)
q.i(0,$.al,L.c("#3b3b3b"),!0)
q.i(0,$.ak,L.c("#4a4a4a"),!0)
q.i(0,$.aj,L.c("#292929"),!0)
o=P.h(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),t)
n=P.h(H.a(["Shogun"],p),t)
m=P.h(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),t)
l=P.h(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),t)
j=P.h(H.a([new E.A($.fC,13,!0)],i),j)
s=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
s.i(0,$.ad,L.c("#FF9B00"),!0)
s.i(0,$.af,L.c("#FF9B00"),!0)
s.i(0,$.ae,L.c("#FF8700"),!0)
s.i(0,$.an,L.c("#7F7F7F"),!0)
s.i(0,$.am,L.c("#727272"),!0)
s.i(0,$.ah,L.c("#A3A3A3"),!0)
s.i(0,$.ai,L.c("#999999"),!0)
s.i(0,$.ag,L.c("#898989"),!0)
s.i(0,$.aa,L.c("#EFEFEF"),!0)
s.i(0,$.al,L.c("#DBDBDB"),!0)
s.i(0,$.ak,L.c("#C6C6C6"),!0)
s.i(0,$.aj,L.c("#ADADAD"),!0)
d=new K.kl(13,13,13,q,o,n,m," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",l,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],j,0.01,0.01,0.01,0.5,14,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!0,1,s,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Blank","Null","Boring","Error"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),P.h(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.u(null,null,d))
d.a9(14,"Sauce",!1,!0)
$.qh=d
$.nc=L.q5(255,"Null",!1,!0)},
qm:function(a){var t=$.$get$bY()
if(t.gZ(t))L.nd()
if($.$get$bY().a7(a))return $.$get$bY().l(0,a)
return $.nc},
qn:function(a){var t,s
t=$.$get$bY()
if(t.gZ(t))L.nd()
for(t=$.$get$bY(),t=t.gaf(t),t=t.gN(t);t.D();){s=t.gH()
if(J.ac(J.bq(s),a))return s}return $.nc},
ql:function(){var t=$.$get$bY()
t=t.gaf(t)
return new H.bx(t,new L.h2(),[H.ab(t,"C",0)])},
q5:function(a,b,c,d){var t,s,r
t=P.B
s=A.bA
r=P.N
r=new L.a8(P.r(null,null,null,t,s),P.r(null,null,null,r,s),P.r(null,null,null,t,r),P.r(null,null,null,r,t))
r.i(0,$.ad,L.c("#FF9B00"),!0)
r.i(0,$.af,L.c("#FF9B00"),!0)
r.i(0,$.ae,L.c("#FF8700"),!0)
r.i(0,$.an,L.c("#7F7F7F"),!0)
r.i(0,$.am,L.c("#727272"),!0)
r.i(0,$.ah,L.c("#A3A3A3"),!0)
r.i(0,$.ai,L.c("#999999"),!0)
r.i(0,$.ag,L.c("#898989"),!0)
r.i(0,$.aa,L.c("#EFEFEF"),!0)
r.i(0,$.al,L.c("#DBDBDB"),!0)
r.i(0,$.ak,L.c("#C6C6C6"),!0)
r.i(0,$.aj,L.c("#ADADAD"),!0)
s=[t]
t=new L.cg(0.01,0.01,0.01,0.5,a,new H.l(0,null,null,null,null,null,0,[X.q,P.t]),null,"","",!1,b,null,c,d,!1,!1,!0,1,r,P.h(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.h(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.h(H.a(["Blank","Null","Boring","Error"],s),t),P.h(H.a(["Blank","Null","Boring","Error"],s),t),P.h(H.a(["Nothing","Errors","Glitches"],s),t),P.h(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.h(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.A]),H.a([],[A.d4]),Q.u(null,null,A.M))
t.a9(a,b,c,d)
return t},
c:function(a){if(C.f.e_(a,"#"))return A.eD(C.f.aJ(a,1))
else return A.eD(a)},
h2:function h2(){},
cg:function cg(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},
a8:function a8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kn:function kn(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
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
_.r1=r1}},M={h4:function h4(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},i2:function i2(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},dO:function dO(){},lr:function lr(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
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
_.r1=r1}},O={h5:function h5(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
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
_.r1=r1},
qJ:function(a,b,c,d){var t,s,r,q,p,o
t=document
s=t.createElement("div")
r=W.aJ("file")
q=r.style
q.display="none"
q=J.W(r)
q.sdv(r,!0)
p=P.bw(null,null,null,P.B)
for(o=0;o<1;++o)p.b2(0,Z.qK(a[o]))
if(p.a!==0)q.sf8(r,new H.dL(p,new O.iK(),[H.v(p,0),null]).fR(0,","))
q=q.ga1(r)
W.a6(q.a,q.b,new O.iL(a,b,r),!1,H.v(q,0))
s.appendChild(r)
t=t.createElement("button")
t.textContent=c
W.a6(t,"click",new O.iM(r),!1,W.aA)
s.appendChild(t)
return s},
dX:function dX(){},
iK:function iK(){},
iL:function iL(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(a){this.a=a},
ez:function ez(){}},T={h6:function h6(x2,y1,y2,m,n,p,q,t,u,v,A,I,J,G,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.I=I
_.J=J
_.G=G
_.T=T
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
_.x1=x1},h9:function h9(x2,y1,y2,m,n,p,q,t,u,v,A,I,J,G,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.I=I
_.J=J
_.G=G
_.T=T
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
_.x1=x1},iU:function iU(x2,y1,y2,m,n,p,q,t,u,v,A,I,J,G,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.I=I
_.J=J
_.G=G
_.T=T
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
_.x1=x1},
nO:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a([],t)
r=[X.q,P.t]
q=A.M
p=E.A
o=[p]
n=[A.d4]
s=new S.jn(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Knight",new H.l(0,null,null,null,null,null,0,r),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Knight",3,!0,!1)
$.tn=s
s=P.h(H.a([new E.A($.aW,0.4,!1)],o),p)
m=H.a([],t)
s=new S.kq(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,s,"Glitch",0.01,0.01,0.01,m,0.5,"Seer",new H.l(0,null,null,null,null,null,0,r),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Seer",6,!0,!1)
$.ty=s
s=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],t)
m=H.a([],t)
s=new O.h5("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],s,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Bard",new H.l(0,null,null,null,null,null,0,r),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Bard",9,!0,!1)
$.ti=s
s=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],t)
m=H.a([],t)
s=new B.iV("Stalker",0.01,0.01,1.01,s,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Heir",new H.l(0,null,null,null,null,null,0,r),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Heir",8,!0,!1)
$.tl=s
s=H.a([],t)
s=new U.jz(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,s,0.5,"Maid",new H.l(0,null,null,null,null,null,0,r),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Maid",0,!0,!1)
$.tq=s
s=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],t)
m=H.a([],t)
s=new N.kg(1.01,0.51,0.01,s,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Rogue",new H.l(0,null,null,null,null,null,0,r),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Rogue",4,!0,!1)
$.tu=s
s=H.a([],t)
s=new V.k3(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,s,0.5,"Page",new H.l(0,null,null,null,null,null,0,r),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Page",1,!0,!1)
$.ts=s
s=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],t)
m=H.a([],t)
s=new U.lc(1.01,0.01,1.01,s,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Thief",new H.l(0,null,null,null,null,null,0,r),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Thief",7,!0,!1)
$.tB=s
s=P.h(H.a([new E.A($.aW,0.1,!1)],o),p)
m=H.a([],t)
s=new R.l5(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,s,"Glitch",0.01,0.01,0.01,m,0.5,"Sylph",new H.l(0,null,null,null,null,null,0,r),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Sylph",5,!0,!1)
$.tA=s
s=H.a([],t)
s=new N.ka("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Prince",new H.l(0,null,null,null,null,null,0,r),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Prince",10,!0,!1)
$.tt=s
s=P.h(H.a([new E.A($.aW,0.1,!1)],o),p)
m=H.a([],t)
s=new M.lr("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,s,"Glitch",0.01,0.01,0.01,m,0.5,"Witch",new H.l(0,null,null,null,null,null,0,r),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Witch",11,!0,!1)
$.tD=s
s=P.h(H.a([new E.A($.aW,0.4,!1)],o),p)
m=H.a([],t)
s=new S.jy("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,s,"Glitch",0.01,0.01,0.01,m,0.5,"Mage",new H.l(0,null,null,null,null,null,0,r),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Mage",2,!0,!1)
$.tp=s
s=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],t)
m=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],t)
l=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],t)
k=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],t)
j=P.h(H.a([new E.A($.aW,3,!1),new E.A($.p9,-2,!1)],o),p)
i=H.a([],t)
s=new E.ln("Scourge",0.01,0.01,1.01,s,m,l,k,!1,!0,!1,!1,!0,!1,j,"Glitch",0.01,0.01,0.01,i,0.5,"Waste",new H.l(0,null,null,null,null,null,0,r),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Waste",12,!1,!1)
$.tC=s
s=H.a([],t)
s=new Y.km("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Scout",new H.l(0,null,null,null,null,null,0,r),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Scout",13,!1,!1)
$.tw=s
s=P.h(H.a([new E.A($.aW,0.5,!1)],o),p)
m=H.a([],t)
s=new L.kn("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,s,"Glitch",0.01,0.01,0.01,m,0.5,"Scribe",new H.l(0,null,null,null,null,null,0,r),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Scribe",15,!1,!1)
$.tx=s
s=P.h(H.a([new E.A($.aW,0.5,!1)],o),p)
m=H.a([],t)
s=new E.kk(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,s,"Glitch",0.01,0.01,0.01,m,0.5,"Sage",new H.l(0,null,null,null,null,null,0,r),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Sage",14,!1,!1)
$.tv=s
s=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],t)
m=H.a([],t)
s=new Y.iT("Highlord",0.51,0.01,1.01,s,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Guide",new H.l(0,null,null,null,null,null,0,r),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Guide",16,!1,!1)
$.tk=s
s=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],t)
m=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],t)
l=P.h(H.a([new E.A($.aW,3,!1)],o),p)
k=H.a([],t)
s=new Y.iS(0.01,0.01,0.01,s,m,!1,!0,!1,!1,!0,!1,l,"Glitch",0.01,0.01,0.01,k,0.5,"Grace",new H.l(0,null,null,null,null,null,0,r),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Grace",17,!1,!1)
$.tj=s
s=P.h(H.a([new E.A($.aW,0.1,!1)],o),p)
m=H.a([],t)
s=new E.jK("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,s,"Glitch",0.01,0.01,0.01,m,0.5,"Muse",new H.l(0,null,null,null,null,null,0,r),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Muse",18,!1,!1)
$.tr=s
s=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],t)
m=Q.u(null,null,q)
l=P.h(H.a([new E.A($.aW,0.1,!1)],o),p)
k=H.a([],t)
s=new Z.jx("Shogun",0.01,0.5,2.01,s,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,m,l,"Glitch",0.01,0.01,0.01,k,0.5,"Lord",new H.l(0,null,null,null,null,null,0,r),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Lord",19,!1,!1)
$.to=s
s=P.h(H.a([new E.A($.aW,-0.1,!1),new E.A($.ca,1,!1)],o),p)
m=H.a([],t)
s=new Y.ku("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,s,"Glitch",0.01,0.01,0.01,m,0.5,"Smith",new H.l(0,null,null,null,null,null,0,r),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.V("Smith",20,!1,!1)
$.tz=s
s=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],t)
m=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],t)
l=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],t)
k=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],t)
p=P.h(H.a([new E.A($.aW,4,!1),new E.A($.p9,-3,!1)],o),p)
j=H.a([],t)
t=new X.iX("Hooman",0.01,0.01,1.01,s,m,l,k,!1,!0,!1,!0,!1,!1,p,"Glitch",0.01,0.01,0.01,j,0.5,"Human",new H.l(0,null,null,null,null,null,0,r),null,null,21,!1,!1,!1,!1,!1,!1,!1,!1,Q.u(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
t.V("Human",21,!1,!1)
$.tm=t
$.nN=T.th("Null",255,!1,!0)},
tE:function(){var t=$.$get$c8()
t=t.gaf(t)
return new H.bx(t,new T.kj(),[H.ab(t,"C",0)])},
tF:function(a){var t=$.$get$c8()
if(t.gZ(t))T.nO()
if($.$get$c8().a7(a))return $.$get$c8().l(0,a)
return $.nN},
tG:function(a){var t,s
t=$.$get$c8()
if(t.gZ(t))T.nO()
for(t=$.$get$c8(),t=t.gaf(t),t=t.gN(t);t.D();){s=t.gH()
if(J.ac(J.bq(s),a))return s}return $.nN},
th:function(a,b,c,d){var t,s
t=[P.B]
s=H.a([],t)
t=new T.cA("Glitch",0.01,0.01,0.01,s,0.5,a,new H.l(0,null,null,null,null,null,0,[X.q,P.t]),null,null,b,c,d,!1,!1,!1,!1,!1,!1,Q.u(null,null,A.M),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.A]),H.a([],[A.d4]),1)
t.V(a,b,c,d)
return t},
kj:function kj(){},
cA:function cA(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1}},A={i0:function i0(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
e:function(a,b,c,d,e){var t=new A.M(c,e,null,a,!1,P.bw(null,null,null,G.L),0,3)
t.ea(a,b,c,!1,e)
return t},
M:function M(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
jh:function jh(){},
jg:function jg(){},
d4:function d4(){},
bs:function(a,b,c,d){var t=new A.bA(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.e8(a,b,c,d)
return t},
b0:function(a){var t=A.bs(a.gcm(),a.c,a.d,a.a)
if(!a.e){t.aO(a.f,a.r,a.x)
t.e=!1}if(!a.y){t.cE(a.z,a.Q,a.ch)
t.y=!1}return t},
i_:function(a,b,c,d){var t=A.bs(0,0,0,255)
t.b=C.b.L(C.c.M(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.L(C.c.M(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.b.L(C.c.M(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.b.L(C.c.M(d*255),0,255)
return t},
on:function(a,b){if(b){if(typeof a!=="number")return a.cw()
return A.bs((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.cw()
return A.bs((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
eD:function(a){return A.on(H.rX(a,16,new A.mK()),J.cF(a)>=8)},
bA:function bA(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
mK:function mK(){},
k4:function k4(){},
fp:function fp(){},
tb:function(a){var t=new A.fs(null,null)
t.cF(a)
return t},
fs:function fs(a,b){this.a=a
this.b=b},
uv:function(){T.nO()
L.nd()
B.np()
var t=A.tK()
document.querySelector("#load").appendChild(O.qJ($.$get$p8(),t.gf9(),"Load statdata file",!0))},
tK:function(){var t=new A.fy(new F.dm(!0,!1,"Stat Review"),H.a([],[E.aO]),H.a([],[A.ed]),P.c5(P.B,D.cC))
t.ed()
return t},
tJ:function(a,b,c,d,e){var t=new A.ed(a,!0,null,b,c,d,e,null,null,0,0,null,null,null,null)
t.ec(a,b,c,d,e)
return t},
ue:function(a,b,c){var t,s,r,q,p
t=H.a([1,2,5],[P.N])
s=c/(b-a)
for(r=0;!0;){for(q=0;q<3;++q){p=t[q]*Math.pow(10,r)
if(s*p>=25)return p}++r}},
pC:function(a){var t,s,r,q,p,o
t=Math.abs(a)
s=H.a(["","K","M","B","T","Q","Qi","Sx"],[P.B])
for(r=0;r<8;r=q){q=r+1
if(t<Math.pow(1000,q)){p=t/Math.pow(1000,r)
o=C.d.bi(p,1)
if(C.f.fA(o,".0"))o=C.b.w(C.d.M(p))
return(a<0?"-":"")+o+s[r]}}return"!!!"},
fy:function fy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kL:function kL(){},
kM:function kM(){},
kN:function kN(){},
kO:function kO(a){this.a=a},
kP:function kP(){},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(){},
kK:function kK(a){this.a=a},
ed:function ed(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
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
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a,b){this.a=a
this.b=b},
kI:function kI(a,b){this.a=a
this.b=b},
kJ:function kJ(a){this.a=a},
kB:function kB(a){this.a=a}},V={i6:function i6(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jJ:function jJ(x2,y1,y2,m,n,p,q,t,u,v,A,I,J,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.I=I
_.J=J
_.G=G
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
_.x1=x1},k3:function k3(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
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
_.r1=r1},l9:function l9(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch}},U={i7:function i7(x2,y1,y2,m,n,p,q,t,u,v,A,I,J,G,T,dk,ca,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.I=I
_.J=J
_.G=G
_.T=T
_.dk=dk
_.ca=ca
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
_.x1=x1},iB:function iB(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jz:function jz(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
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
_.r1=r1},b:function b(a){this.a=a},K:function K(b,c,a){this.b=b
this.c=c
this.a=a},lc:function lc(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
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
_.r1=r1}},Z={i8:function i8(x2,y1,y2,m,n,p,q,t,u,v,A,I,J,G,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.I=I
_.J=J
_.G=G
_.T=T
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
_.x1=x1},
qK:function(a){var t=$.$get$no().gbe()
return new H.bx(t,new Z.iR(a),[H.ab(t,"C",0)])},
iR:function iR(a){this.a=a},
ig:function ig(){},
jx:function jx(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,A,I,J,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.I=I
_.J=J
_.G=G
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
_.r1=r1}},X={eK:function eK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},eA:function eA(){},iW:function iW(x2,y1,y2,m,n,p,q,t,u,v,A,I,J,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.I=I
_.J=J
_.G=G
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
_.x1=x1},iX:function iX(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
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
_.r1=r1},q:function q(a,b,c){this.a=a
this.b=b
this.c=c}},N={Q:function Q(){},jl:function jl(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ka:function ka(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
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
_.r1=r1},kg:function kg(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
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
_.r1=r1},kv:function kv(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},kx:function kx(x2,y1,y2,m,n,p,q,t,u,v,A,I,J,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.I=I
_.J=J
_.G=G
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
_.x1=x1},ld:function ld(x2,y1,y2,m,n,p,q,t,u,v,A,I,J,G,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.I=I
_.J=J
_.G=G
_.T=T
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
_.x1=x1}},E={eW:function eW(){},jZ:function jZ(){},A:function A(a,b,c){this.a=a
this.b=b
this.c=c},dH:function dH(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},h3:function h3(a,b,c){this.a=a
this.b=b
this.c=c},jK:function jK(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
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
_.r1=r1},kd:function kd(x2,y1,y2,m,n,p,q,t,u,v,A,I,J,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.I=I
_.J=J
_.G=G
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
_.x1=x1},kk:function kk(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
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
_.r1=r1},ln:function ln(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
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
_.r1=r1},
qv:function(a,b,c,d,e){var t
if(P.qz()===!0||J.pS(window.navigator.userAgent,$.$get$om())){$.$get$aR().ab("IE or Edge detected, skipping.")
return}t=[{func:1,ret:A.bA,args:[P.t]}]
t=new E.dK(!1,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,H.a([],[W.ec]),!1,H.a([],[E.cK]),H.a([],t),H.a([],[{func:1,ret:A.bA,args:[P.t,P.t]}]),H.a([],t),A.bs(0,0,0,255),null)
b=A.on(c,!1)
t.fo(b,e,d)
t.c8(0)
t.fM()
t.dz()
$.$get$eC().j(0,t)
E.ol()
return t},
a3:function(a,b,c){var t,s
t=a.style
s=""+c+"px"
t.top=s
s=""+b+"px"
t.left=s},
ch:function(a,b,c,d){a.value=C.c.bi(C.c.L(E.qu(J.bX(a),d),b,c),d)},
qu:function(a,b){var t,s
for(t=a,s=0;s<b;++s){if(typeof t!=="number")return t.a0()
t*=10}t=J.q_(t)
for(s=0;s<b;++s)t*=0.1
return t},
d7:function(a,b,c,d,e){var t=new E.cK(new F.dm(!1,!1,"FancySlider"),null,null,null,c,d,a,b,null,e,!1,null,null)
t.e9(a,b,c,d,e)
return t},
ol:function(){if($.ok)return
$.ok=!0
var t=W.aA
W.a6(window,"mouseup",new E.hf(),!1,t)
W.a6(window,"mousemove",new E.hg(),!1,t)},
dK:function dK(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,m){var _=this
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
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
hK:function hK(a){this.a=a},
hS:function hS(a){this.a=a},
hT:function hT(a){this.a=a},
hU:function hU(a){this.a=a},
hV:function hV(a){this.a=a},
hW:function hW(a){this.a=a},
hX:function hX(a){this.a=a},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
hL:function hL(a){this.a=a},
hM:function hM(){},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
hP:function hP(a){this.a=a},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
hh:function hh(a){this.a=a},
hi:function hi(){},
hj:function hj(){},
hk:function hk(a){this.a=a},
hv:function hv(a){this.a=a},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
hG:function hG(a){this.a=a},
hH:function hH(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.a=a
this.b=b},
hm:function hm(a){this.a=a},
hn:function hn(a){this.a=a},
ho:function ho(a){this.a=a},
hp:function hp(a){this.a=a},
hq:function hq(a){this.a=a},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
hw:function hw(a){this.a=a},
hx:function hx(a){this.a=a},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
cK:function cK(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
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
hf:function hf(){},
hg:function hg(){},
aO:function aO(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r}},Y={iS:function iS(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
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
_.r1=r1},iT:function iT(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
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
_.r1=r1},c7:function c7(a,b){this.a=a
this.b=b},R:function R(a,b){this.a=a
this.b=b},br:function br(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},aG:function aG(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},F:function F(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},eG:function eG(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},at:function at(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bn:function bn(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},he:function he(c,a,b){this.c=c
this.a=a
this.b=b},ap:function ap(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},fq:function fq(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},eU:function eU(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},fr:function fr(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},km:function km(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
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
_.r1=r1},ku:function ku(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
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
_.r1=r1},
uf:function(a){var t,s,r,q
t=C.y.hy(a," ")
for(s=t.gN(t),r="";s.D();){q=s.gH()
r+=" "+(H.p(q.l(0,0).hM(0))+H.p(q.aJ(0,1)))}return r}},B={iV:function iV(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,A,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
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
_.r1=r1},
np:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=E.A
s=[t]
r=P.h(H.a([new E.A($.bI,1,!0),new E.A($.fz,1,!0)],s),t)
q=[P.B]
p=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],q)
o=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],q)
n=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],q)
m=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],q)
l=H.a(["nobody"],q)
k=P.h(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
h=[X.q,P.t]
g=A.M
i=new F.jL(r,p,o,n,m,!1,l,k,j,i,1,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.u(null,null,g),"loud","musical","Music")
i.B()
i.C()
B.bc(i)
$.qS=i
i=P.h(H.a([new E.A($.ee,-2,!0)],s),t)
j=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],q)
k=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],q)
l=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],q)
m=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],q)
n=H.a(["nobody"],q)
o=P.h(H.a([],s),t)
p=H.a(["Nobody"],q)
r=H.a(["Nobody"],q)
r=new S.fZ(i,j,k,l,m,!1,n,o,p,r,13,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.u(null,null,g),"nerdy","smart","Academic")
r.B()
r.C()
B.bc(r)
$.qL=r
r=P.h(H.a([new E.A($.fC,2,!0)],s),t)
p=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],q)
o=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],q)
n=H.a(["MUSCLES HOARDER","BODY BOOSTER"],q)
m=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],q)
l=H.a(["nobody"],q)
k=P.h(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new M.h4(r,p,o,n,m,!1,l,k,j,i,4,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.u(null,null,g),"dumb","athletic","Athletic")
r.B()
r.C()
B.bc(r)
$.qM=r
r=P.h(H.a([new E.A($.fA,-1,!0),new E.A($.fz,1,!0)],s),t)
p=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],q)
o=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],q)
n=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],q)
m=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],q)
l=H.a(["nobody"],q)
k=P.h(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new A.i0(r,p,o,n,m,!1,l,k,j,i,0,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.u(null,null,g),"dorky","funny","Comedy")
r.B()
r.C()
B.bc(r)
$.qN=r
r=P.h(H.a([new E.A($.bI,-1,!0),new E.A($.ds,-1,!0)],s),t)
p=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],q)
o=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],q)
n=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],q)
m=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],q)
l=H.a(["nobody"],q)
k=P.h(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new M.i2(r,p,o,n,m,!1,l,k,j,i,2,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.u(null,null,g),"pretentious","cultured","Culture")
r.B()
r.C()
B.bc(r)
$.qO=r
r=P.h(H.a([new E.A($.bI,1,!0),new E.A($.dt,1,!0)],s),t)
p=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],q)
o=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],q)
n=H.a(["BATTERBRAT","GRITTY GUARDIAN"],q)
m=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],q)
l=H.a(["nobody"],q)
k=P.h(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new V.i6(r,p,o,n,m,!1,l,k,j,i,8,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.u(null,null,g),"boring","domestic","Domestic")
r.B()
r.C()
B.bc(r)
$.qP=r
r=P.h(H.a([new E.A($.fz,1,!0),new E.A($.ca,1,!0)],s),t)
p=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],q)
o=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],q)
n=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],q)
m=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],q)
l=H.a(["nobody"],q)
k=P.h(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new U.iB(r,p,o,n,m,!1,l,k,j,i,7,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.u(null,null,g),"whimpy","imaginative","Fantasy")
r.B()
r.C()
B.bc(r)
$.qQ=r
r=P.h(H.a([new E.A($.fC,1,!0),new E.A($.ds,1,!0)],s),t)
p=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],q)
o=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],q)
n=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],q)
m=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],q)
l=H.a(["nobody"],q)
k=P.h(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new N.jl(r,p,o,n,m,!1,l,k,j,i,6,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.u(null,null,g),"harsh","fair-minded","Justice")
r.B()
r.C()
B.bc(r)
$.qR=r
r=P.h(H.a([new E.A($.fB,2,!0)],s),t)
p=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],q)
o=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],q)
n=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],q)
m=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],q)
l=H.a(["nobody"],q)
k=P.h(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new G.k8(r,p,o,n,m,!1,l,k,j,i,9,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.u(null,null,g),"frivolous","geeky","PopCulture")
r.B()
r.C()
B.bc(r)
$.qU=r
r=P.h(H.a([new E.A($.dt,2,!0)],s),t)
p=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],q)
o=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],q)
n=H.a(["QUESTING CUPID","ROMANCE EXPERT"],q)
m=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],q)
l=H.a(["nobody"],q)
k=P.h(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new Q.kh(r,p,o,n,m,!1,l,k,j,i,12,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.u(null,null,g),"obsessive","romantic","Romantic")
r.B()
r.C()
B.bc(r)
$.qV=r
r=P.h(H.a([new E.A($.bI,2,!0)],s),t)
p=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],q)
o=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],q)
n=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],q)
m=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],q)
l=H.a(["nobody"],q)
k=P.h(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new N.kv(r,p,o,n,m,!1,l,k,j,i,11,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.u(null,null,g),"shallow","extroverted","Social")
r.B()
r.C()
B.bc(r)
$.qW=r
r=P.h(H.a([new E.A($.dt,-1,!0),new E.A($.bI,-1,!0)],s),t)
p=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],q)
o=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],q)
n=H.a(["ENEMY #1","JERKWAD JOURNEYER"],q)
m=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],q)
l=H.a(["nobody"],q)
k=P.h(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new V.l9(r,p,o,n,m,!1,l,k,j,i,5,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.u(null,null,g),"terrible","honest","Terrible")
r.B()
r.C()
B.bc(r)
$.qY=r
r=P.h(H.a([new E.A($.ee,2,!0)],s),t)
p=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],q)
o=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],q)
n=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],q)
m=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],q)
l=H.a(["nobody"],q)
k=P.h(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new F.ls(r,p,o,n,m,!1,l,k,j,i,3,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.u(null,null,g),"wordy","lettered","Writing")
r.B()
r.C()
B.bc(r)
$.qZ=r
r=P.h(H.a([new E.A($.ca,2,!0)],s),t)
p=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],q)
o=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],q)
n=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],q)
m=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],q)
l=H.a(["nobody"],q)
k=P.h(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new D.l8(r,p,o,n,m,!1,l,k,j,i,10,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.u(null,null,g),"awkward","techy","Technology")
r.B()
r.C()
B.bc(r)
$.qX=r
r=H.a(["nobody"],q)
t=P.h(H.a([],s),t)
s=H.a(["Nobody"],q)
q=H.a(["Nobody"],q)
t=new B.cp(!0,r,t,s,q,-13,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.u(null,null,g),"","","Null")
t.B()
t.C()
B.bc(t)
$.qT=t},
bc:function(a){if($.$get$bD().a7(a.f))throw H.w("Duplicate aspect id for "+a.w(0)+": "+a.f+" is already registered for "+J.bh($.$get$bD().l(0,a.f))+".")
$.$get$bD().h(0,a.f,a)},
oE:function(a){var t,s
t=$.$get$bD()
if(t.gZ(t))B.np()
if($.$get$bD().a7(a))return $.$get$bD().l(0,a)
t="ERROR: could not find interest category "+a+"  and null is not supported. I have "
s=$.$get$bD()
throw H.w(t+s.gF(s)+" categories")},
oF:function(a){var t,s,r
t=$.$get$bD()
if(t.gZ(t))B.np()
for(t=$.$get$bD(),t=t.gaf(t),t=t.gN(t);t.D();){s=t.gH()
if(J.ac(J.bq(s),a))return s}t="ERROR: could not find interest category "+H.p(a)+" and null is not supported. I have "
r=$.$get$bD()
throw H.w(t+r.gF(r)+" categories")},
r_:function(){var t=$.$get$bD()
t=t.gaf(t)
return new H.bx(t,new B.j2(),[H.ab(t,"C",0)])},
j2:function j2(){},
cp:function cp(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
hb:function hb(a,b){this.a=a
this.b=b}},Q={jp:function jp(x2,y1,y2,m,n,p,q,t,u,v,A,I,J,G,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.I=I
_.J=J
_.G=G
_.T=T
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
_.x1=x1},kh:function kh(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},lm:function lm(x2,y1,y2,m,n,p,q,t,u,v,A,I,J,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.I=I
_.J=J
_.G=G
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
_.x1=x1},
u:function(a,b,c){var t=new Q.lp(null,null,[c])
t.ef(a,b,c)
return t},
nT:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.u(d,null,e)
s=a.gF(a)
C.a.sF(t.b,s)
if(H.dC(a,"$isC",[e],"$asC"))if(H.dC(a,"$isbT",[e],"$asbT"))for(s=J.bp(a.gbB()),r=0;s.D();){q=s.gH()
p=t.b
o=p.length
if(r>=o)return H.I(p,r)
p[r]=q;++r}else for(s=a.gN(a),p=[H.v(t,0)],r=0;s.D();){n=s.gH()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.I(o,r)
o[r]=new Q.d(n,m,p);++r}else for(s=a.gN(a),p=[e],o=[H.v(t,0)];s.D();){l=s.gH()
if(H.uh(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.I(m,0)
m[0]=new Q.d(l,k,o)}else if(H.dC(l,"$isd",p,null)){m=t.b
k=m.length
if(0>=k)return H.I(m,0)
m[0]=l}else throw H.w("Invalid entry type "+H.p(J.pX(l))+" for WeightedList<"+H.p(H.aE(H.bV(e)))+">. Should be "+H.p(H.aE(H.bV(e)))+" or WeightPair<"+H.p(H.aE(H.bV(e)))+">.")}return t},
nU:function(a,b,c,d){return new Q.fF(J.od(a.gbB(),new Q.lq(c,d,b)),null,[c,d])},
bT:function bT(){},
lp:function lp(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
fE:function fE(){},
d:function d(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
d_:function d_(){},
eh:function eh(){},
lo:function lo(a,$ti){this.a=a
this.$ti=$ti},
fF:function fF(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
lq:function lq(a,b,c){this.a=a
this.b=b
this.c=c}},K={jq:function jq(x2,y1,y2,m,n,p,q,t,u,v,A,I,J,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.I=I
_.J=J
_.G=G
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
_.x1=x1},kl:function kl(x2,y1,y2,m,n,p,q,t,u,v,A,I,J,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.I=I
_.J=J
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
_.x1=x1}},G={jr:function jr(x2,y1,y2,m,n,p,q,t,u,v,A,I,J,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.I=I
_.J=J
_.G=G
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
_.x1=x1},k8:function k8(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fx:function fx(){},kA:function kA(b,a){this.b=b
this.a=a},
qw:function(a){var t,s,r,q,p,o,n
t=G.L
s=P.nE(a,t)
r=P.bw(null,null,null,t)
q=H.a([],[G.eE])
for(t=G.rB(),p=J.bp(t.a),t=new H.ei(p,t.b,[H.v(t,0)]);t.D();){o=p.gH()
if(o.hl(s))q.push(o)}C.a.dZ(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bW)(q),++n){o=q[n]
if(o.hl(s)){r.j(0,o)
for(p=o.ge3(),p=p.gN(p);p.D();)s.a4(0,p.gH())}}if(s.a!==0)r.b2(0,s)
return r},
rB:function(){var t=$.$get$oW()
t.toString
return new H.bx(t,new G.jf(),[H.v(t,0)])},
L:function L(){},
eE:function eE(){},
jf:function jf(){}},F={jL:function jL(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ls:function ls(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
rF:function(a,b){return new F.dm(b,!1,a)},
rE:function(a){if(a===C.t){window
return C.j.gah(C.j)}if(a===C.G){window
return C.j.ghp()}if(a===C.H){window
return C.j.gfL()}return P.uk()},
dl:function dl(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c}},R={
ta:function(a){var t,s
if(a.gF(a).aN(0,1)){a.l(0,1)
a.l(0,1)
t=!0}else t=!1
s=a.l(0,0)
s.ghw(s).ghK().ds("checking for two players, ps is "+H.p(a)+", ret is "+t)
return t},
rZ:function(a){a.gac(a).gaK()
return!1},
t9:function(a){a.gac(a).gaK()
return!1},
t8:function(a){a.gac(a).gaK()
return!1},
t7:function(a){return a.gac(a).gb3().ghJ()},
t5:function(a){return a.gac(a).gb3().ghH()},
t4:function(a){return a.gac(a).gb3().ghG()},
t1:function(a){return a.gac(a).gb3().ghE()},
t3:function(a){return a.gac(a).gb3().ghF()},
t6:function(a){return a.gac(a).gb3().ghI()},
t2:function(a){var t=a.gac(a)
t.gaK()
t.gaK()
return!1},
t_:function(a){return!0},
t0:function(a){a.gac(a).ghC()
return!1},
kc:function kc(){},
H:function H(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
D:function D(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
P:function P(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
as:function as(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
l5:function l5(r2,rx,ry,x1,x2,y1,y2,m,n,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
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
_.r1=r1}},D={l8:function l8(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
nQ:function(){var t=$.$get$nP()
return new H.bx(t,new D.kU(),[H.v(t,0)])},
kU:function kU(){},
cC:function cC(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
var v=[C,H,J,P,W,S,L,M,O,T,A,V,U,Z,X,N,E,Y,B,Q,K,G,F,R,D]
setFunctionNamesIfNecessary(v)
var $={}
H.nB.prototype={}
J.J.prototype={
P:function(a,b){return a===b},
gY:function(a){return H.cx(a)},
w:function(a){return H.k9(a)},
ga_:function(a){return new H.cD(H.mP(a),null)}}
J.ji.prototype={
w:function(a){return String(a)},
gY:function(a){return a?519018:218159},
ga_:function(a){return C.W},
$iscd:1}
J.fg.prototype={
P:function(a,b){return null==b},
w:function(a){return"null"},
gY:function(a){return 0},
ga_:function(a){return C.Q},
$isbQ:1}
J.e1.prototype={
gY:function(a){return 0},
ga_:function(a){return C.P},
w:function(a){return String(a)},
$isoY:1}
J.k7.prototype={}
J.cZ.prototype={}
J.cR.prototype={
w:function(a){var t=a[$.$get$oo()]
return t==null?this.e5(a):J.bh(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.cP.prototype={
c6:function(a,b){if(!!a.immutable$list)throw H.w(new P.aY(b))},
bz:function(a,b){if(!!a.fixed$length)throw H.w(new P.aY(b))},
j:function(a,b){this.bz(a,"add")
a.push(b)},
a4:function(a,b){var t
this.bz(a,"remove")
for(t=0;t<a.length;++t)if(J.ac(a[t],b)){a.splice(t,1)
return!0}return!1},
cv:function(a,b){return new H.bx(a,b,[H.v(a,0)])},
b2:function(a,b){var t
this.bz(a,"addAll")
for(t=J.bp(b);t.D();)a.push(t.gH())},
ai:function(a,b){return new H.e4(a,b,[H.v(a,0),null])},
aD:function(a,b){if(b<0||b>=a.length)return H.I(a,b)
return a[b]},
gac:function(a){if(a.length>0)return a[0]
throw H.w(H.fc())},
gfT:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.w(H.fc())},
aX:function(a,b,c,d,e){var t,s,r
this.c6(a,"setRange")
P.p7(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.aw(P.bm(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.w(H.rC())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r<0||r>=d.length)return H.I(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r<0||r>=d.length)return H.I(d,r)
a[b+s]=d[r]}},
aY:function(a,b){var t
this.c6(a,"sort")
t=b==null?P.uj():b
H.fv(a,0,a.length-1,t)},
dZ:function(a){return this.aY(a,null)},
w:function(a){return P.fb(a,"[","]")},
a3:function(a,b){var t=H.a(a.slice(0),[H.v(a,0)])
return t},
aj:function(a){return this.a3(a,!0)},
gN:function(a){return new J.h1(a,a.length,0,null,[H.v(a,0)])},
gY:function(a){return H.cx(a)},
gF:function(a){return a.length},
sF:function(a,b){this.bz(a,"set length")
if(b<0)throw H.w(P.bm(b,0,null,"newLength",null))
a.length=b},
l:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.w(H.aH(a,b))
if(b>=a.length||b<0)throw H.w(H.aH(a,b))
return a[b]},
h:function(a,b,c){this.c6(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.w(H.aH(a,b))
if(b>=a.length||b<0)throw H.w(H.aH(a,b))
a[b]=c},
$isbH:1,
$asbH:function(){},
$isV:1,
$asV:null,
$isT:1,
$asT:null,
$isC:1,
$asC:null}
J.nA.prototype={}
J.h1.prototype={
gH:function(){return this.d},
D:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.w(H.bW(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.dk.prototype={
aB:function(a,b){var t
if(typeof b!=="number")throw H.w(H.b6(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gbc(b)
if(this.gbc(a)===t)return 0
if(this.gbc(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbc:function(a){return a===0?1/a<0:a<0},
c5:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.w(new P.aY(""+a+".ceil()"))},
M:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.w(new P.aY(""+a+".floor()"))},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.w(new P.aY(""+a+".round()"))},
hc:function(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
L:function(a,b,c){if(C.b.aB(b,c)>0)throw H.w(H.b6(b))
if(this.aB(a,b)<0)return b
if(this.aB(a,c)>0)return c
return a},
bi:function(a,b){var t
if(b>20)throw H.w(P.bm(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gbc(a))return"-"+t
return t},
hj:function(a,b){var t
if(b<1||b>21)throw H.w(P.bm(b,1,21,"precision",null))
t=a.toPrecision(b)
if(a===0&&this.gbc(a))return"-"+t
return t},
hi:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.w(P.bm(b,2,36,"radix",null))
t=a.toString(b)
if(C.f.fi(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.aw(new P.aY("Unexpected toString result: "+t))
r=J.aZ(s)
t=r.l(s,1)
q=+r.l(s,3)
if(r.l(s,2)!=null){t+=r.l(s,2)
q-=r.l(s,2).length}return t+C.f.a0("0",q)},
w:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gY:function(a){return a&0x1FFFFFFF},
U:function(a,b){if(typeof b!=="number")throw H.w(H.b6(b))
return a+b},
O:function(a,b){if(typeof b!=="number")throw H.w(H.b6(b))
return a/b},
a0:function(a,b){return a*b},
cz:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
a5:function(a,b){return(a|0)===a?a/b|0:this.f4(a,b)},
f4:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.w(new P.aY("Result of truncating division is "+H.p(t)+": "+H.p(a)+" ~/ "+H.p(b)))},
ap:function(a,b){if(b<0)throw H.w(H.b6(b))
return b>31?0:a<<b>>>0},
f2:function(a,b){return b>31?0:a<<b>>>0},
c1:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
aw:function(a,b){if(typeof b!=="number")throw H.w(H.b6(b))
return a<b},
aN:function(a,b){if(typeof b!=="number")throw H.w(H.b6(b))
return a>b},
ga_:function(a){return C.Z},
$isbK:1}
J.ff.prototype={
ga_:function(a){return C.Y},
$ist:1,
$isbK:1,
$isN:1}
J.fe.prototype={
ga_:function(a){return C.X},
$ist:1,
$isbK:1}
J.cQ.prototype={
fi:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.w(H.aH(a,b))
if(b<0)throw H.w(H.aH(a,b))
if(b>=a.length)H.aw(H.aH(a,b))
return a.charCodeAt(b)},
cK:function(a,b){if(b>=a.length)throw H.w(H.aH(a,b))
return a.charCodeAt(b)},
c3:function(a,b,c){if(c>b.length)throw H.w(P.bm(c,0,b.length,null,null))
return new H.my(b,a,c)},
dd:function(a,b){return this.c3(a,b,0)},
U:function(a,b){if(typeof b!=="string")throw H.w(P.dG(b,null,null))
return a+b},
fA:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.aJ(a,s-t)},
e0:function(a,b,c){var t
if(c>a.length)throw H.w(P.bm(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
e_:function(a,b){return this.e0(a,b,0)},
bI:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.aw(H.b6(c))
if(b<0)throw H.w(P.fu(b,null,null))
if(typeof c!=="number")return H.au(c)
if(b>c)throw H.w(P.fu(b,null,null))
if(c>a.length)throw H.w(P.fu(c,null,null))
return a.substring(b,c)},
aJ:function(a,b){return this.bI(a,b,null)},
a0:function(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.w(C.v)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
fX:function(a,b,c){var t=b-a.length
if(t<=0)return a
return this.a0(c,t)+a},
di:function(a,b,c){if(b==null)H.aw(H.b6(b))
if(c>a.length)throw H.w(P.bm(c,0,a.length,null,null))
return H.uA(a,b,c)},
c7:function(a,b){return this.di(a,b,0)},
aB:function(a,b){var t
if(typeof b!=="string")throw H.w(H.b6(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
w:function(a){return a},
gY:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
ga_:function(a){return C.R},
gF:function(a){return a.length},
l:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.w(H.aH(a,b))
if(b>=a.length||b<0)throw H.w(H.aH(a,b))
return a[b]},
$isbH:1,
$asbH:function(){},
$isB:1}
H.T.prototype={$asT:null}
H.cS.prototype={
gN:function(a){return new H.fi(this,this.gF(this),0,null,[H.ab(this,"cS",0)])},
ai:function(a,b){return new H.e4(this,b,[H.ab(this,"cS",0),null])},
a3:function(a,b){var t,s,r
t=H.a([],[H.ab(this,"cS",0)])
C.a.sF(t,this.gF(this))
for(s=0;s<this.gF(this);++s){r=this.aD(0,s)
if(s>=t.length)return H.I(t,s)
t[s]=r}return t},
aj:function(a){return this.a3(a,!0)}}
H.fi.prototype={
gH:function(){return this.d},
D:function(){var t,s,r,q
t=this.a
s=J.aZ(t)
r=s.gF(t)
if(this.b!==r)throw H.w(new P.bL(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.aD(t,q);++this.c
return!0}}
H.dn.prototype={
gN:function(a){return new H.fj(null,J.bp(this.a),this.b,this.$ti)},
gF:function(a){return J.cF(this.a)},
$asC:function(a,b){return[b]}}
H.dL.prototype={$isT:1,
$asT:function(a,b){return[b]},
$asC:function(a,b){return[b]}}
H.fj.prototype={
D:function(){var t=this.b
if(t.D()){this.a=this.c.$1(t.gH())
return!0}this.a=null
return!1},
gH:function(){return this.a},
$asfd:function(a,b){return[b]}}
H.e4.prototype={
gF:function(a){return J.cF(this.a)},
aD:function(a,b){return this.b.$1(J.pT(this.a,b))},
$ascS:function(a,b){return[b]},
$asT:function(a,b){return[b]},
$asC:function(a,b){return[b]}}
H.bx.prototype={
gN:function(a){return new H.ei(J.bp(this.a),this.b,this.$ti)},
ai:function(a,b){return new H.dn(this,b,[H.v(this,0),null])}}
H.ei.prototype={
D:function(){var t,s
for(t=this.a,s=this.b;t.D();)if(s.$1(t.gH())===!0)return!0
return!1},
gH:function(){return this.a.gH()}}
H.eT.prototype={}
H.n2.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.n3.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.md.prototype={}
H.dw.prototype={
d9:function(a,b){if(!this.f.P(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.bw()},
h9:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.a4(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.I(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.I(p,q)
p[q]=r
if(q===s.c)s.cW();++s.d}this.y=!1}this.bw()},
fb:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.a1(a),s=0;r=this.ch,s<r.length;s+=2)if(t.P(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.I(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
h8:function(a){var t,s,r
if(this.ch==null)return
for(t=J.a1(a),s=0;r=this.ch,s<r.length;s+=2)if(t.P(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.aw(new P.aY("removeRange"))
P.p7(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
dW:function(a,b){if(!this.r.P(0,a))return
this.db=b},
fG:function(a,b,c){var t=J.a1(b)
if(!t.P(b,0))t=t.P(b,1)&&!this.cy
else t=!0
if(t){a.aG(c)
return}t=this.cx
if(t==null){t=P.nF(null,null)
this.cx=t}t.az(new H.m6(a,c))},
fF:function(a,b){var t
if(!this.r.P(0,a))return
t=J.a1(b)
if(!t.P(b,0))t=t.P(b,1)&&!this.cy
else t=!0
if(t){this.bA()
return}t=this.cx
if(t==null){t=P.nF(null,null)
this.cx=t}t.az(this.gfS())},
fH:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.n_(a)
if(b!=null)P.n_(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bh(a)
s[1]=b==null?null:J.bh(b)
for(r=new P.by(t,t.r,null,null,[null]),r.c=t.e;r.D();)r.d.aG(s)},
b6:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.b_(o)
p=H.be(o)
this.fH(q,p)
if(this.db===!0){this.bA()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.gfQ()
if(this.cx!=null)for(;n=this.cx,!n.gZ(n);)this.cx.dA().$0()}return s},
dt:function(a){return this.b.l(0,a)},
cI:function(a,b){var t=this.b
if(t.a7(a))throw H.w(P.id("Registry: ports must be registered only once."))
t.h(0,a,b)},
bw:function(){var t=this.b
if(t.gF(t)-this.c.a>0||this.y||!this.x)u.globalState.z.h(0,this.a,this)
else this.bA()},
bA:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.aV(0)
for(t=this.b,s=t.gaf(t),s=s.gN(s);s.D();)s.gH().eq()
t.aV(0)
this.c.aV(0)
u.globalState.z.a4(0,this.a)
this.dx.aV(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.I(t,p)
q.aG(t[p])}this.ch=null}},
gfQ:function(){return this.d},
gfm:function(){return this.e}}
H.m6.prototype={
$0:function(){this.a.aG(this.b)},
$S:function(){return{func:1,v:true}}}
H.lJ.prototype={
fp:function(){var t=this.a
if(t.b===t.c)return
return t.dA()},
dG:function(){var t,s,r
t=this.fp()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.a7(u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gZ(s)}else s=!1
else s=!1
else s=!1
if(s)H.aw(P.id("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gZ(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.e2(["command","close"])
r=new H.bU(!0,new P.fO(0,null,null,null,null,null,0,[null,P.N])).ag(r)
s.toString
self.postMessage(r)}return!1}t.h3()
return!0},
d1:function(){if(self.window!=null)new H.lK(this).$0()
else for(;this.dG(););},
bh:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.d1()
else try{this.d1()}catch(r){t=H.b_(r)
s=H.be(r)
q=u.globalState.Q
p=P.e2(["command","error","msg",H.p(t)+"\n"+H.p(s)])
p=new H.bU(!0,P.ep(null,P.N)).ag(p)
q.toString
self.postMessage(p)}}}
H.lK.prototype={
$0:function(){if(!this.a.dG())return
P.tN(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.d1.prototype={
h3:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.b6(this.b)}}
H.mc.prototype={}
H.j3.prototype={
$0:function(){H.r3(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.j4.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.dD(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.dD(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.bw()},
$S:function(){return{func:1,v:true}}}
H.lB.prototype={}
H.dx.prototype={
aG:function(a){var t,s,r
t=u.globalState.z.l(0,this.a)
if(t==null)return
s=this.b
if(s.gcY())return
r=H.u_(a)
if(t.gfm()===s){s=J.aZ(r)
switch(s.l(r,0)){case"pause":t.d9(s.l(r,1),s.l(r,2))
break
case"resume":t.h9(s.l(r,1))
break
case"add-ondone":t.fb(s.l(r,1),s.l(r,2))
break
case"remove-ondone":t.h8(s.l(r,1))
break
case"set-errors-fatal":t.dW(s.l(r,1),s.l(r,2))
break
case"ping":t.fG(s.l(r,1),s.l(r,2),s.l(r,3))
break
case"kill":t.fF(s.l(r,1),s.l(r,2))
break
case"getErrors":s=s.l(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.l(r,1)
t.dx.a4(0,s)
break}return}u.globalState.f.a.az(new H.d1(t,new H.mg(this,r),"receive"))},
P:function(a,b){if(b==null)return!1
return b instanceof H.dx&&J.ac(this.b,b.b)},
gY:function(a){return this.b.gbS()}}
H.mg.prototype={
$0:function(){var t=this.a.b
if(!t.gcY())t.ek(this.b)},
$S:function(){return{func:1}}}
H.eq.prototype={
aG:function(a){var t,s,r
t=P.e2(["command","message","port",this,"msg",a])
s=new H.bU(!0,P.ep(null,P.N)).ag(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.l(0,this.b)
if(r!=null)r.postMessage(s)}},
P:function(a,b){if(b==null)return!1
return b instanceof H.eq&&J.ac(this.b,b.b)&&J.ac(this.a,b.a)&&J.ac(this.c,b.c)},
gY:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.ap()
s=this.a
if(typeof s!=="number")return s.ap()
r=this.c
if(typeof r!=="number")return H.au(r)
return(t<<16^s<<8^r)>>>0}}
H.dr.prototype={
eq:function(){this.c=!0
this.b=null},
aA:function(a){var t,s
if(this.c)return
this.c=!0
this.b=null
t=u.globalState.d
s=this.a
t.b.a4(0,s)
t.c.a4(0,s)
t.bw()},
ek:function(a){if(this.c)return
this.b.$1(a)},
$istc:1,
gbS:function(){return this.a},
gcY:function(){return this.c}}
H.le.prototype={
ee:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.az(new H.d1(s,new H.lf(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.ev(new H.lg(this,b),0),a)}else throw H.w(new P.aY("Timer greater than 0."))}}
H.lf.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.lg.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.bZ.prototype={
gY:function(a){var t=this.a
if(typeof t!=="number")return t.hx()
t=C.c.c1(t,0)^C.c.a5(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
P:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.bZ){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gbS:function(){return this.a}}
H.bU.prototype={
ag:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.l(0,a)
if(s!=null)return["ref",s]
t.h(0,a,t.gF(t))
t=J.a1(a)
if(!!t.$isdp)return["buffer",a]
if(!!t.$iscU)return["typed",a]
if(!!t.$isbH)return this.dS(a)
if(!!t.$isr0){r=this.gdP()
q=a.gbe()
q=H.e3(q,r,H.ab(q,"C",0),null)
q=P.cv(q,!0,H.ab(q,"C",0))
t=t.gaf(a)
t=H.e3(t,r,H.ab(t,"C",0),null)
return["map",q,P.cv(t,!0,H.ab(t,"C",0))]}if(!!t.$isoY)return this.dT(a)
if(!!t.$isJ)this.dJ(a)
if(!!t.$istc)this.bj(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isdx)return this.dU(a)
if(!!t.$iseq)return this.dV(a)
if(!!t.$isd5){p=a.$static_name
if(p==null)this.bj(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isbZ)return["capability",a.a]
if(!(a instanceof P.ar))this.dJ(a)
return["dart",u.classIdExtractor(a),this.dR(u.classFieldsExtractor(a))]},
bj:function(a,b){throw H.w(new P.aY((b==null?"Can't transmit:":b)+" "+H.p(a)))},
dJ:function(a){return this.bj(a,null)},
dS:function(a){var t=this.dQ(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bj(a,"Can't serialize indexable: ")},
dQ:function(a){var t,s,r
t=[]
C.a.sF(t,a.length)
for(s=0;s<a.length;++s){r=this.ag(a[s])
if(s>=t.length)return H.I(t,s)
t[s]=r}return t},
dR:function(a){var t
for(t=0;t<a.length;++t)C.a.h(a,t,this.ag(a[t]))
return a},
dT:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bj(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sF(s,t.length)
for(r=0;r<t.length;++r){q=this.ag(a[t[r]])
if(r>=s.length)return H.I(s,r)
s[r]=q}return["js-object",t,s]},
dV:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
dU:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gbS()]
return["raw sendport",a]}}
H.d0.prototype={
aC:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.w(P.nb("Bad serialized message: "+H.p(a)))
switch(C.a.gac(a)){case"ref":if(1>=a.length)return H.I(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.I(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.I(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.I(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.I(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.b5(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.I(a,1)
r=a[1]
this.b.push(r)
return H.a(this.b5(r),[null])
case"mutable":if(1>=a.length)return H.I(a,1)
r=a[1]
this.b.push(r)
return this.b5(r)
case"const":if(1>=a.length)return H.I(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.b5(r),[null])
s.fixed$length=Array
return s
case"map":return this.fv(a)
case"sendport":return this.fw(a)
case"raw sendport":if(1>=a.length)return H.I(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.fu(a)
case"function":if(1>=a.length)return H.I(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.I(a,1)
return new H.bZ(a[1])
case"dart":s=a.length
if(1>=s)return H.I(a,1)
q=a[1]
if(2>=s)return H.I(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.b5(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.w("couldn't deserialize: "+H.p(a))}},
b5:function(a){var t,s,r
t=J.aZ(a)
s=0
while(!0){r=t.gF(a)
if(typeof r!=="number")return H.au(r)
if(!(s<r))break
t.h(a,s,this.aC(t.l(a,s)));++s}return a},
fv:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.I(a,1)
s=a[1]
if(2>=t)return H.I(a,2)
r=a[2]
q=P.rD()
this.b.push(q)
s=J.q4(J.od(s,this.gft()))
for(t=J.aZ(s),p=J.aZ(r),o=0;o<t.gF(s);++o)q.h(0,t.l(s,o),this.aC(p.l(r,o)))
return q},
fw:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.I(a,1)
s=a[1]
if(2>=t)return H.I(a,2)
r=a[2]
if(3>=t)return H.I(a,3)
q=a[3]
if(J.ac(s,u.globalState.b)){p=u.globalState.z.l(0,r)
if(p==null)return
o=p.dt(q)
if(o==null)return
n=new H.dx(o,r)}else n=new H.eq(s,q,r)
this.b.push(n)
return n},
fu:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.I(a,1)
s=a[1]
if(2>=t)return H.I(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.aZ(s)
p=J.aZ(r)
o=0
while(!0){n=t.gF(s)
if(typeof n!=="number")return H.au(n)
if(!(o<n))break
q[t.l(s,o)]=this.aC(p.l(r,o));++o}return q}}
H.kf.prototype={}
H.lh.prototype={
am:function(a){var t,s,r
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
H.fo.prototype={
w:function(a){var t=this.b
if(t==null)return"NullError: "+H.p(this.a)
return"NullError: method not found: '"+H.p(t)+"' on null"}}
H.jk.prototype={
w:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.p(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.p(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.p(this.a)+")"}}
H.lj.prototype={
w:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.dN.prototype={
gax:function(){return this.b}}
H.n4.prototype={
$1:function(a){if(!!J.a1(a).$iscJ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.fP.prototype={
w:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.mU.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.mV.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.mW.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.mX.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.mY.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.d5.prototype={
w:function(a){return"Closure '"+H.nJ(this).trim()+"'"},
ghs:function(){return this},
$D:null}
H.l7.prototype={}
H.kT.prototype={
w:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.dI.prototype={
P:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.dI))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gY:function(a){var t,s
t=this.c
if(t==null)s=H.cx(this.a)
else s=typeof t!=="object"?J.bf(t):H.cx(t)
t=H.cx(this.b)
if(typeof s!=="number")return s.hz()
return(s^t)>>>0},
w:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.p(this.d)+"' of "+H.k9(t)}}
H.hd.prototype={
w:function(a){return this.a}}
H.ki.prototype={
w:function(a){return"RuntimeError: "+H.p(this.a)}}
H.cD.prototype={
w:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gY:function(a){return J.bf(this.a)},
P:function(a,b){if(b==null)return!1
return b instanceof H.cD&&J.ac(this.a,b.a)}}
H.l.prototype={
gF:function(a){return this.a},
gZ:function(a){return this.a===0},
gbe:function(){return new H.ju(this,[H.v(this,0)])},
gaf:function(a){return H.e3(this.gbe(),new H.jj(this),H.v(this,0),H.v(this,1))},
a7:function(a){var t,s
if(typeof a==="string"){t=this.b
if(t==null)return!1
return this.cR(t,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){s=this.c
if(s==null)return!1
return this.cR(s,a)}else return this.fN(a)},
fN:function(a){var t=this.d
if(t==null)return!1
return this.ba(this.bp(t,this.b9(a)),a)>=0},
l:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.b0(t,b)
return s==null?null:s.gaE()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.b0(r,b)
return s==null?null:s.gaE()}else return this.fO(b)},
fO:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bp(t,this.b9(a))
r=this.ba(s,a)
if(r<0)return
return s[r].gaE()},
h:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.bU()
this.b=t}this.cH(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.bU()
this.c=s}this.cH(s,b,c)}else{r=this.d
if(r==null){r=this.bU()
this.d=r}q=this.b9(b)
p=this.bp(r,q)
if(p==null)this.c0(r,q,[this.bV(b,c)])
else{o=this.ba(p,b)
if(o>=0)p[o].saE(c)
else p.push(this.bV(b,c))}}},
a4:function(a,b){if(typeof b==="string")return this.d0(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d0(this.c,b)
else return this.fP(b)},
fP:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bp(t,this.b9(a))
r=this.ba(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.d7(q)
return q.gaE()},
aV:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
cb:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.w(new P.bL(this))
t=t.c}},
cH:function(a,b,c){var t=this.b0(a,b)
if(t==null)this.c0(a,b,this.bV(b,c))
else t.saE(c)},
d0:function(a,b){var t
if(a==null)return
t=this.b0(a,b)
if(t==null)return
this.d7(t)
this.cS(a,b)
return t.gaE()},
bV:function(a,b){var t,s
t=new H.jt(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
d7:function(a){var t,s
t=a.geV()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
b9:function(a){return J.bf(a)&0x3ffffff},
ba:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ac(a[s].gdq(),b))return s
return-1},
w:function(a){return P.rG(this)},
b0:function(a,b){return a[b]},
bp:function(a,b){return a[b]},
c0:function(a,b,c){a[b]=c},
cS:function(a,b){delete a[b]},
cR:function(a,b){return this.b0(a,b)!=null},
bU:function(){var t=Object.create(null)
this.c0(t,"<non-identifier-key>",t)
this.cS(t,"<non-identifier-key>")
return t},
$isr0:1,
$isnG:1}
H.jj.prototype={
$1:function(a){return this.a.l(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.jt.prototype={
gdq:function(){return this.a},
gaE:function(){return this.b},
geV:function(){return this.d},
saE:function(a){return this.b=a}}
H.ju.prototype={
gF:function(a){return this.a.a},
gN:function(a){var t,s
t=this.a
s=new H.jv(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.jv.prototype={
gH:function(){return this.d},
D:function(){var t=this.a
if(this.b!==t.r)throw H.w(new P.bL(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.mQ.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.mR.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.B]}}}
H.mS.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.B]}}}
H.fh.prototype={
w:function(a){return"RegExp/"+this.a+"/"},
geS:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.oZ(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
c3:function(a,b,c){if(c>b.length)throw H.w(P.bm(c,0,b.length,null,null))
return new H.lt(this,b,c)},
dd:function(a,b){return this.c3(a,b,0)},
eC:function(a,b){var t,s
t=this.geS()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.mf(this,s)},
$istf:1}
H.mf.prototype={
l:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.I(t,b)
return t[b]},
$iscT:1}
H.lt.prototype={
gN:function(a){return new H.lu(this.a,this.b,this.c,null)},
$asfa:function(){return[P.cT]},
$asC:function(){return[P.cT]}}
H.lu.prototype={
gH:function(){return this.d},
D:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.eC(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.l1.prototype={
l:function(a,b){if(b!==0)H.aw(P.fu(b,null,null))
return this.c},
$iscT:1}
H.my.prototype={
gN:function(a){return new H.mz(this.a,this.b,this.c,null)},
$asC:function(){return[P.cT]}}
H.mz.prototype={
D:function(){var t,s,r,q,p,o,n
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
this.d=new H.l1(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gH:function(){return this.d}}
H.dp.prototype={
ga_:function(a){return C.I},
ff:function(a,b,c){var t
H.pp(a,b,c)
t=new DataView(a,b)
return t},
fe:function(a,b){return this.ff(a,b,null)},
$isdp:1,
$iscH:1}
H.cU.prototype={$iscU:1}
H.jM.prototype={
ga_:function(a){return C.J}}
H.fk.prototype={
gF:function(a){return a.length},
$isc4:1,
$asc4:function(){},
$isbH:1,
$asbH:function(){}}
H.fl.prototype={
l:function(a,b){if(b>>>0!==b||b>=a.length)H.aw(H.aH(a,b))
return a[b]},
h:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aw(H.aH(a,b))
a[b]=c}}
H.e6.prototype={
$asc4:function(){},
$asbH:function(){},
$asV:function(){return[P.t]},
$asT:function(){return[P.t]},
$asC:function(){return[P.t]},
$isV:1,
$isT:1,
$isC:1}
H.e8.prototype={
$asc4:function(){},
$asbH:function(){},
$asV:function(){return[P.t]},
$asT:function(){return[P.t]},
$asC:function(){return[P.t]}}
H.fm.prototype={
h:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aw(H.aH(a,b))
a[b]=c},
$isV:1,
$asV:function(){return[P.N]},
$isT:1,
$asT:function(){return[P.N]},
$isC:1,
$asC:function(){return[P.N]}}
H.e7.prototype={
$asc4:function(){},
$asbH:function(){},
$asV:function(){return[P.N]},
$asT:function(){return[P.N]},
$asC:function(){return[P.N]},
$isV:1,
$isT:1,
$isC:1}
H.e9.prototype={
$asc4:function(){},
$asbH:function(){},
$asV:function(){return[P.N]},
$asT:function(){return[P.N]},
$asC:function(){return[P.N]}}
H.jN.prototype={
ga_:function(a){return C.K},
$isV:1,
$asV:function(){return[P.t]},
$isT:1,
$asT:function(){return[P.t]},
$isC:1,
$asC:function(){return[P.t]}}
H.jO.prototype={
ga_:function(a){return C.L},
$isV:1,
$asV:function(){return[P.t]},
$isT:1,
$asT:function(){return[P.t]},
$isC:1,
$asC:function(){return[P.t]}}
H.jP.prototype={
ga_:function(a){return C.M},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.aw(H.aH(a,b))
return a[b]},
$isV:1,
$asV:function(){return[P.N]},
$isT:1,
$asT:function(){return[P.N]},
$isC:1,
$asC:function(){return[P.N]}}
H.jQ.prototype={
ga_:function(a){return C.N},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.aw(H.aH(a,b))
return a[b]},
$isV:1,
$asV:function(){return[P.N]},
$isT:1,
$asT:function(){return[P.N]},
$isC:1,
$asC:function(){return[P.N]}}
H.jR.prototype={
ga_:function(a){return C.O},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.aw(H.aH(a,b))
return a[b]},
$isV:1,
$asV:function(){return[P.N]},
$isT:1,
$asT:function(){return[P.N]},
$isC:1,
$asC:function(){return[P.N]}}
H.jS.prototype={
ga_:function(a){return C.S},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.aw(H.aH(a,b))
return a[b]},
$isV:1,
$asV:function(){return[P.N]},
$isT:1,
$asT:function(){return[P.N]},
$isC:1,
$asC:function(){return[P.N]}}
H.jT.prototype={
ga_:function(a){return C.T},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.aw(H.aH(a,b))
return a[b]},
$isV:1,
$asV:function(){return[P.N]},
$isT:1,
$asT:function(){return[P.N]},
$isC:1,
$asC:function(){return[P.N]}}
H.fn.prototype={
ga_:function(a){return C.U},
gF:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.aw(H.aH(a,b))
return a[b]},
$isV:1,
$asV:function(){return[P.N]},
$isT:1,
$asT:function(){return[P.N]},
$isC:1,
$asC:function(){return[P.N]}}
H.jU.prototype={
ga_:function(a){return C.V},
gF:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)H.aw(H.aH(a,b))
return a[b]},
$isnS:1,
$isV:1,
$asV:function(){return[P.N]},
$isT:1,
$asT:function(){return[P.N]},
$isC:1,
$asC:function(){return[P.N]}}
P.lw.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.lv.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.lx.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.ly.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.mF.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.mG.prototype={
$2:function(a,b){this.a.$2(1,new H.dN(a,b))},
$S:function(){return{func:1,args:[,P.cB]}}}
P.mJ.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.N,,]}}}
P.bb.prototype={}
P.lF.prototype={
fk:function(a,b){if(a==null)a=new P.ea()
if(this.a.a!==0)throw H.w(new P.bR("Future already completed"))
$.a2.toString
this.ar(a,b)},
gfD:function(){return this.a}}
P.mD.prototype={
dh:function(a,b){var t=this.a
if(t.a!==0)throw H.w(new P.bR("Future already completed"))
t.aQ(b)},
ar:function(a,b){this.a.ar(a,b)}}
P.fN.prototype={
gf7:function(){return this.b.b},
gdn:function(){return(this.c&1)!==0},
gfK:function(){return(this.c&2)!==0},
gdm:function(){return this.c===8},
fI:function(a){return this.b.b.co(this.d,a)},
fU:function(a){if(this.c!==6)return!0
return this.b.b.co(this.d,J.ey(a))},
fE:function(a){var t,s,r
t=this.e
s=J.W(a)
r=this.b.b
if(H.dD(t,{func:1,args:[,,]}))return r.hd(t,s.gah(a),a.gax())
else return r.co(t,s.gah(a))},
fJ:function(){return this.b.b.dE(this.d)},
gbW:function(){return this.a}}
P.aQ.prototype={
geM:function(){return this.a===2},
gbT:function(){return this.a>=4},
cq:function(a,b){var t=$.a2
if(t!==C.e){t.toString
if(b!=null)b=P.pr(b,t)}return this.c2(a,b)},
hf:function(a){return this.cq(a,null)},
c2:function(a,b){var t,s
t=new P.aQ(0,$.a2,null,[null])
s=b==null?1:3
this.bJ(new P.fN(null,t,s,a,b,[H.v(this,0),null]))
return t},
bl:function(a){var t,s
t=$.a2
s=new P.aQ(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.v(this,0)
this.bJ(new P.fN(null,s,8,a,null,[t,t]))
return s},
bJ:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gbT()){s.bJ(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.dz(null,null,t,new P.lO(this,a))}},
d_:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gbW()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gbT()){p.d_(a)
return}this.a=p.a
this.c=p.c}t.a=this.bt(a)
s=this.b
s.toString
P.dz(null,null,s,new P.lW(t,this))}},
bs:function(){var t=this.c
this.c=null
return this.bt(t)},
bt:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gbW()
t.a=s}return s},
aQ:function(a){var t,s
t=this.$ti
if(H.dC(a,"$isbb",t,"$asbb"))if(H.dC(a,"$isaQ",t,null))P.lR(a,this)
else P.pm(a,this)
else{s=this.bs()
this.a=4
this.c=a
P.dv(this,s)}},
ar:function(a,b){var t=this.bs()
this.a=8
this.c=new P.d2(a,b)
P.dv(this,t)},
ev:function(a){return this.ar(a,null)},
en:function(a){var t
if(H.dC(a,"$isbb",this.$ti,"$asbb")){this.ep(a)
return}this.a=1
t=this.b
t.toString
P.dz(null,null,t,new P.lQ(this,a))},
ep:function(a){var t
if(H.dC(a,"$isaQ",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.dz(null,null,t,new P.lV(this,a))}else P.lR(a,this)
return}P.pm(a,this)},
eo:function(a,b){var t
this.a=1
t=this.b
t.toString
P.dz(null,null,t,new P.lP(this,a,b))},
ei:function(a,b){this.a=4
this.c=a},
$isbb:1,
gb1:function(){return this.a},
geZ:function(){return this.c}}
P.lO.prototype={
$0:function(){P.dv(this.a,this.b)},
$S:function(){return{func:1}}}
P.lW.prototype={
$0:function(){P.dv(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.lS.prototype={
$1:function(a){var t=this.a
t.a=0
t.aQ(a)},
$S:function(){return{func:1,args:[,]}}}
P.lT.prototype={
$2:function(a,b){this.a.ar(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.lU.prototype={
$0:function(){this.a.ar(this.b,this.c)},
$S:function(){return{func:1}}}
P.lQ.prototype={
$0:function(){var t,s
t=this.a
s=t.bs()
t.a=4
t.c=this.b
P.dv(t,s)},
$S:function(){return{func:1}}}
P.lV.prototype={
$0:function(){P.lR(this.b,this.a)},
$S:function(){return{func:1}}}
P.lP.prototype={
$0:function(){this.a.ar(this.b,this.c)},
$S:function(){return{func:1}}}
P.lZ.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.fJ()}catch(q){s=H.b_(q)
r=H.be(q)
if(this.c){p=J.ey(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.d2(s,r)
o.a=!0
return}if(!!J.a1(t).$isbb){if(t instanceof P.aQ&&t.gb1()>=4){if(t.gb1()===8){p=this.b
p.b=t.geZ()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.hf(new P.m_(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.m_.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.lY.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.fI(this.c)}catch(r){t=H.b_(r)
s=H.be(r)
q=this.a
q.b=new P.d2(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.lX.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.fU(t)===!0&&q.e!=null){p=this.b
p.b=q.fE(t)
p.a=!1}}catch(o){s=H.b_(o)
r=H.be(o)
q=this.a
p=J.ey(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.d2(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.fH.prototype={}
P.cb.prototype={
ai:function(a,b){return new P.me(b,this,[H.ab(this,"cb",0),null])},
gF:function(a){var t,s
t={}
s=new P.aQ(0,$.a2,null,[P.N])
t.a=0
this.av(new P.kY(t),!0,new P.kZ(t,s),s.gbN())
return s},
aj:function(a){var t,s,r
t=H.ab(this,"cb",0)
s=H.a([],[t])
r=new P.aQ(0,$.a2,null,[[P.V,t]])
this.av(new P.l_(this,s),!0,new P.l0(s,r),r.gbN())
return r},
gac:function(a){var t,s
t={}
s=new P.aQ(0,$.a2,null,[H.ab(this,"cb",0)])
t.a=null
t.a=this.av(new P.kW(t,this,s),!0,new P.kX(s),s.gbN())
return s}}
P.kY.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.kZ.prototype={
$0:function(){this.b.aQ(this.a.a)},
$S:function(){return{func:1}}}
P.l_.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.mL(function(a){return{func:1,args:[a]}},this.a,"cb")}}
P.l0.prototype={
$0:function(){this.b.aQ(this.a)},
$S:function(){return{func:1}}}
P.kW.prototype={
$1:function(a){P.tZ(this.a.a,this.c,a)},
$S:function(){return H.mL(function(a){return{func:1,args:[a]}},this.b,"cb")}}
P.kX.prototype={
$0:function(){var t,s,r,q
try{r=H.fc()
throw H.w(r)}catch(q){t=H.b_(q)
s=H.be(q)
P.u0(this.a,t,s)}},
$S:function(){return{func:1}}}
P.kV.prototype={}
P.mt.prototype={
geU:function(){if((this.b&8)===0)return this.a
return this.a.gbF()},
cV:function(){var t,s
if((this.b&8)===0){t=this.a
if(t==null){t=new P.fQ(null,null,0,this.$ti)
this.a=t}return t}s=this.a
s.gbF()
return s.gbF()},
gd5:function(){if((this.b&8)!==0)return this.a.gbF()
return this.a},
cJ:function(){if((this.b&4)!==0)return new P.bR("Cannot add event after closing")
return new P.bR("Cannot add event while adding a stream")},
cU:function(){var t=this.c
if(t==null){t=(this.b&2)!==0?$.$get$dY():new P.aQ(0,$.a2,null,[null])
this.c=t}return t},
aA:function(a){var t=this.b
if((t&4)!==0)return this.cU()
if(t>=4)throw H.w(this.cJ())
t|=4
this.b=t
if((t&1)!==0)this.bv()
else if((t&3)===0)this.cV().j(0,C.k)
return this.cU()},
aP:function(a){var t=this.b
if((t&1)!==0)this.bu(a)
else if((t&3)===0)this.cV().j(0,new P.ej(a,null,this.$ti))},
f3:function(a,b,c,d){var t,s,r,q,p
if((this.b&3)!==0)throw H.w(new P.bR("Stream has already been listened to."))
t=$.a2
s=d?1:0
r=new P.fK(this,null,null,null,t,s,null,null,this.$ti)
r.cG(a,b,c,d,H.v(this,0))
q=this.geU()
s=this.b|=1
if((s&8)!==0){p=this.a
p.sbF(r)
p.bD()}else this.a=r
r.f1(q)
r.bR(new P.mv(this))
return r},
eW:function(a){var t,s,r,q,p,o
t=null
if((this.b&8)!==0)t=this.a.by()
this.a=null
this.b=this.b&4294967286|2
q=this.r
if(q!=null)if(t==null)try{t=q.$0()}catch(p){s=H.b_(p)
r=H.be(p)
o=new P.aQ(0,$.a2,null,[null])
o.eo(s,r)
t=o}else t=t.bl(q)
q=new P.mu(this)
if(t!=null)t=t.bl(q)
else q.$0()
return t},
gb1:function(){return this.b}}
P.mv.prototype={
$0:function(){P.o3(this.a.d)},
$S:function(){return{func:1}}}
P.mu.prototype={
$0:function(){var t=this.a.c
if(t!=null&&t.a===0)t.en(null)},
$S:function(){return{func:1,v:true}}}
P.lz.prototype={
bu:function(a){this.gd5().aZ(new P.ej(a,null,[H.v(this,0)]))},
bv:function(){this.gd5().aZ(C.k)}}
P.fI.prototype={}
P.fJ.prototype={
gY:function(a){return(H.cx(this.a)^892482866)>>>0},
P:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof P.fJ))return!1
return b.a===this.a}}
P.fK.prototype={
bX:function(){return this.x.eW(this)},
aS:function(){var t=this.x
if((t.b&8)!==0)t.a.cf(0)
P.o3(t.e)},
aT:function(){var t=this.x
if((t.b&8)!==0)t.a.bD()
P.o3(t.f)}}
P.bJ.prototype={
f1:function(a){if(a==null)return
this.r=a
if(!a.gZ(a)){this.e=(this.e|64)>>>0
this.r.bm(this)}},
cg:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.df()
if((t&4)===0&&(this.e&32)===0)this.bR(this.gbY())},
cf:function(a){return this.cg(a,null)},
bD:function(){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gZ(t)}else t=!1
if(t)this.r.bm(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.bR(this.gbZ())}}}},
by:function(){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.bK()
t=this.f
return t==null?$.$get$dY():t},
bK:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.df()
if((this.e&32)===0)this.r=null
this.f=this.bX()},
aP:function(a){var t=this.e
if((t&8)!==0)return
if(t<32)this.bu(a)
else this.aZ(new P.ej(a,null,[H.ab(this,"bJ",0)]))},
bn:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.d2(a,b)
else this.aZ(new P.lH(a,b,null))},
em:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.bv()
else this.aZ(C.k)},
aS:function(){},
aT:function(){},
bX:function(){return},
aZ:function(a){var t,s
t=this.r
if(t==null){t=new P.fQ(null,null,0,[H.ab(this,"bJ",0)])
this.r=t}t.j(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.bm(this)}},
bu:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.cp(this.a,a)
this.e=(this.e&4294967263)>>>0
this.bL((t&4)!==0)},
d2:function(a,b){var t,s
t=this.e
s=new P.lD(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.bK()
t=this.f
if(!!J.a1(t).$isbb&&t!==$.$get$dY())t.bl(s)
else s.$0()}else{s.$0()
this.bL((t&4)!==0)}},
bv:function(){var t,s
t=new P.lC(this)
this.bK()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.a1(s).$isbb&&s!==$.$get$dY())s.bl(t)
else t.$0()},
bR:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.bL((t&4)!==0)},
bL:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gZ(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gZ(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.aS()
else this.aT()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.bm(this)},
cG:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.pr(b==null?P.ud():b,t)
this.c=c==null?P.uc():c},
gb1:function(){return this.e}}
P.lD.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.dD(s,{func:1,args:[P.ar,P.cB]})
q=t.d
p=this.b
o=t.b
if(r)q.he(o,p,this.c)
else q.cp(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.lC.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.dF(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.mw.prototype={
av:function(a,b,c,d){return this.a.f3(a,d,c,!0===b)},
cd:function(a,b,c){return this.av(a,null,b,c)},
aM:function(a){return this.av(a,null,null,null)}}
P.fL.prototype={
gbf:function(){return this.a},
sbf:function(a){return this.a=a}}
P.ej.prototype={
ci:function(a){a.bu(this.b)}}
P.lH.prototype={
ci:function(a){a.d2(this.b,this.c)},
$asfL:function(){},
gah:function(a){return this.b},
gax:function(){return this.c}}
P.lG.prototype={
ci:function(a){a.bv()},
gbf:function(){return},
sbf:function(a){throw H.w(new P.bR("No events after a done."))}}
P.mh.prototype={
bm:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.pH(new P.mi(this,a))
this.a=1},
df:function(){if(this.a===1)this.a=3},
gb1:function(){return this.a}}
P.mi.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbf()
t.b=q
if(q==null)t.c=null
r.ci(this.b)},
$S:function(){return{func:1}}}
P.fQ.prototype={
gZ:function(a){return this.c==null},
j:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbf(b)
this.c=b}}}
P.mx.prototype={}
P.mH.prototype={
$0:function(){return this.a.aQ(this.b)},
$S:function(){return{func:1}}}
P.el.prototype={
av:function(a,b,c,d){return this.eA(a,d,c,!0===b)},
cd:function(a,b,c){return this.av(a,null,b,c)},
eA:function(a,b,c,d){return P.tT(this,a,b,c,d,H.ab(this,"el",0),H.ab(this,"el",1))},
cX:function(a,b){b.aP(a)},
eK:function(a,b,c){c.bn(a,b)},
$ascb:function(a,b){return[b]}}
P.em.prototype={
aP:function(a){if((this.e&2)!==0)return
this.e6(a)},
bn:function(a,b){if((this.e&2)!==0)return
this.e7(a,b)},
aS:function(){var t=this.y
if(t==null)return
t.cf(0)},
aT:function(){var t=this.y
if(t==null)return
t.bD()},
bX:function(){var t=this.y
if(t!=null){this.y=null
return t.by()}return},
eF:function(a){this.x.cX(a,this)},
eJ:function(a,b){this.x.eK(a,b,this)},
eH:function(){this.em()},
eh:function(a,b,c,d,e,f,g){this.y=this.x.a.cd(this.geE(),this.geG(),this.geI())},
$asbJ:function(a,b){return[b]}}
P.me.prototype={
cX:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.b_(q)
r=H.be(q)
P.tY(b,s,r)
return}b.aP(t)}}
P.d2.prototype={
w:function(a){return H.p(this.a)},
$iscJ:1,
gah:function(a){return this.a},
gax:function(){return this.b}}
P.mE.prototype={}
P.mI.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.ea()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.w(t)
r=H.w(t)
r.stack=J.bh(s)
throw r},
$S:function(){return{func:1}}}
P.ml.prototype={
dF:function(a){var t,s,r,q
try{if(C.e===$.a2){r=a.$0()
return r}r=P.ps(null,null,this,a)
return r}catch(q){t=H.b_(q)
s=H.be(q)
r=P.et(null,null,this,t,s)
return r}},
cp:function(a,b){var t,s,r,q
try{if(C.e===$.a2){r=a.$1(b)
return r}r=P.pu(null,null,this,a,b)
return r}catch(q){t=H.b_(q)
s=H.be(q)
r=P.et(null,null,this,t,s)
return r}},
he:function(a,b,c){var t,s,r,q
try{if(C.e===$.a2){r=a.$2(b,c)
return r}r=P.pt(null,null,this,a,b,c)
return r}catch(q){t=H.b_(q)
s=H.be(q)
r=P.et(null,null,this,t,s)
return r}},
c4:function(a,b){if(b)return new P.mm(this,a)
else return new P.mn(this,a)},
fg:function(a,b){return new P.mo(this,a)},
l:function(a,b){return},
dE:function(a){if($.a2===C.e)return a.$0()
return P.ps(null,null,this,a)},
co:function(a,b){if($.a2===C.e)return a.$1(b)
return P.pu(null,null,this,a,b)},
hd:function(a,b,c){if($.a2===C.e)return a.$2(b,c)
return P.pt(null,null,this,a,b,c)}}
P.mm.prototype={
$0:function(){return this.a.dF(this.b)},
$S:function(){return{func:1}}}
P.mn.prototype={
$0:function(){return this.a.dE(this.b)},
$S:function(){return{func:1}}}
P.mo.prototype={
$1:function(a){return this.a.cp(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.m1.prototype={
gF:function(a){return this.a},
gaf:function(a){var t=H.v(this,0)
return H.e3(new P.m2(this,[t]),new P.m4(this),t,H.v(this,1))},
a7:function(a){var t,s
if(typeof a==="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a==="number"&&(a&0x3ffffff)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.ez(a)},
ez:function(a){var t=this.d
if(t==null)return!1
return this.at(t[this.as(a)],a)>=0},
l:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.eD(b)},
eD:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.as(a)]
r=this.at(s,a)
return r<0?null:s[r+1]},
h:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.nW()
this.b=t}this.cM(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.nW()
this.c=s}this.cM(s,b,c)}else this.f_(b,c)},
f_:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.nW()
this.d=t}s=this.as(a)
r=t[s]
if(r==null){P.nX(t,s,[a,b]);++this.a
this.e=null}else{q=this.at(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
a4:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b_(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b_(this.c,b)
else return this.c_(b)},
c_:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.as(a)]
r=this.at(s,a)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
cb:function(a,b){var t,s,r,q
t=this.cP()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.l(0,q))
if(t!==this.e)throw H.w(new P.bL(this))}},
cP:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
cM:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.nX(a,b,c)},
b_:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.tU(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
as:function(a){return J.bf(a)&0x3ffffff},
at:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.ac(a[s],b))return s
return-1},
$isnG:1}
P.m4.prototype={
$1:function(a){return this.a.l(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.m2.prototype={
gF:function(a){return this.a.a},
gN:function(a){var t=this.a
return new P.m3(t,t.cP(),0,null,this.$ti)}}
P.m3.prototype={
gH:function(){return this.d},
D:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.w(new P.bL(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.fO.prototype={
b9:function(a){return H.ux(a)&0x3ffffff},
ba:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gdq()
if(r==null?b==null:r===b)return s}return-1}}
P.m9.prototype={
gN:function(a){var t=new P.by(this,this.r,null,null,[null])
t.c=this.e
return t},
gF:function(a){return this.a},
c7:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.ey(b)},
ey:function(a){var t=this.d
if(t==null)return!1
return this.at(t[this.as(a)],a)>=0},
dt:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.c7(0,a)?a:null
else return this.eN(a)},
eN:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.as(a)]
r=this.at(s,a)
if(r<0)return
return J.n6(s,r).gcT()},
j:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.cL(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.cL(r,b)}else return this.az(b)},
az:function(a){var t,s,r
t=this.d
if(t==null){t=P.tV()
this.d=t}s=this.as(a)
r=t[s]
if(r==null)t[s]=[this.bM(a)]
else{if(this.at(r,a)>=0)return!1
r.push(this.bM(a))}return!0},
a4:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b_(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b_(this.c,b)
else return this.c_(b)},
c_:function(a){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.as(a)]
r=this.at(s,a)
if(r<0)return!1
this.cN(s.splice(r,1)[0])
return!0},
aV:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
cL:function(a,b){if(a[b]!=null)return!1
a[b]=this.bM(b)
return!0},
b_:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.cN(t)
delete a[b]
return!0},
bM:function(a){var t,s
t=new P.ma(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
cN:function(a){var t,s
t=a.ger()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
as:function(a){return J.bf(a)&0x3ffffff},
at:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ac(a[s].gcT(),b))return s
return-1},
$isT:1,
$asT:null,
$isC:1,
$asC:null}
P.ma.prototype={
gcT:function(){return this.a},
ger:function(){return this.c}}
P.by.prototype={
gH:function(){return this.d},
D:function(){var t=this.a
if(this.b!==t.r)throw H.w(new P.bL(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.m5.prototype={}
P.dj.prototype={
ai:function(a,b){return H.e3(this,b,H.ab(this,"dj",0),null)},
a3:function(a,b){return P.cv(this,!0,H.ab(this,"dj",0))},
aj:function(a){return this.a3(a,!0)},
gF:function(a){var t,s
t=this.gN(this)
for(s=0;t.D();)++s
return s},
w:function(a){return P.nz(this,"(",")")},
$isC:1,
$asC:null}
P.fa.prototype={}
P.c6.prototype={
gN:function(a){return new H.fi(a,this.gF(a),0,null,[H.ab(a,"c6",0)])},
aD:function(a,b){return this.l(a,b)},
ai:function(a,b){return new H.e4(a,b,[H.ab(a,"c6",0),null])},
a3:function(a,b){var t,s,r
t=H.a([],[H.ab(a,"c6",0)])
C.a.sF(t,this.gF(a))
for(s=0;s<this.gF(a);++s){r=this.l(a,s)
if(s>=t.length)return H.I(t,s)
t[s]=r}return t},
aj:function(a){return this.a3(a,!0)},
w:function(a){return P.fb(a,"[","]")},
$isV:1,
$asV:null,
$isT:1,
$asT:null,
$isC:1,
$asC:null}
P.jB.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.X+=", "
t.a=!1
t=this.b
s=t.X+=H.p(a)
t.X=s+": "
t.X+=H.p(b)},
$S:function(){return{func:1,args:[,,]}}}
P.jw.prototype={
gN:function(a){return new P.mb(this,this.c,this.d,this.b,null,this.$ti)},
gZ:function(a){return this.b===this.c},
gF:function(a){return(this.c-this.b&this.a.length-1)>>>0},
aD:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.aw(P.j1(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.I(s,q)
return s[q]},
a3:function(a,b){var t=H.a([],this.$ti)
C.a.sF(t,this.gF(this))
this.f6(t)
return t},
aj:function(a){return this.a3(a,!0)},
aV:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.I(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
w:function(a){return P.fb(this,"{","}")},
dA:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.w(H.fc());++this.d
s=this.a
r=s.length
if(t>=r)return H.I(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
az:function(a){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.I(t,s)
t[s]=a
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.cW();++this.d},
cW:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.aX(s,0,q,t,r)
C.a.aX(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
f6:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.a.aX(a,0,q,r,t)
return q}else{p=r.length-t
C.a.aX(a,0,p,r,t)
C.a.aX(a,p,p+this.c,this.a,0)
return this.c+p}},
eb:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asT:null,
$asC:null}
P.mb.prototype={
gH:function(){return this.e},
D:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.aw(new P.bL(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.I(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.ks.prototype={
b2:function(a,b){var t
for(t=b.gN(b);t.D();)this.j(0,t.gH())},
a3:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.a.sF(t,this.a)
for(s=new P.by(this,this.r,null,null,[null]),s.c=this.e,r=0;s.D();r=p){q=s.d
p=r+1
if(r>=t.length)return H.I(t,r)
t[r]=q}return t},
aj:function(a){return this.a3(a,!0)},
ai:function(a,b){return new H.dL(this,b,[H.v(this,0),null])},
w:function(a){return P.fb(this,"{","}")},
$isT:1,
$asT:null,
$isC:1,
$asC:null}
P.kr.prototype={}
P.cd.prototype={}
P.aF.prototype={}
P.t.prototype={$isaF:1,
$asaF:function(){return[P.bK]}}
P.ci.prototype={
U:function(a,b){return new P.ci(this.a+b.gbo())},
a0:function(a,b){return new P.ci(C.b.a2(this.a*b))},
aw:function(a,b){return C.b.aw(this.a,b.gbo())},
aN:function(a,b){return C.b.aN(this.a,b.gbo())},
P:function(a,b){if(b==null)return!1
if(!(b instanceof P.ci))return!1
return this.a===b.a},
gY:function(a){return this.a&0x1FFFFFFF},
aB:function(a,b){return C.b.aB(this.a,b.gbo())},
w:function(a){var t,s,r,q,p
t=new P.ia()
s=this.a
if(s<0)return"-"+new P.ci(0-s).w(0)
r=t.$1(C.b.a5(s,6e7)%60)
q=t.$1(C.b.a5(s,1e6)%60)
p=new P.i9().$1(s%1e6)
return""+C.b.a5(s,36e8)+":"+H.p(r)+":"+H.p(q)+"."+H.p(p)},
$isaF:1,
$asaF:function(){return[P.ci]},
gbo:function(){return this.a}}
P.i9.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.B,args:[P.N]}}}
P.ia.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.B,args:[P.N]}}}
P.cJ.prototype={
gax:function(){return H.be(this.$thrownJsError)}}
P.ea.prototype={
w:function(a){return"Throw of null."}}
P.cf.prototype={
gbP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbO:function(){return""},
w:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.p(t)
q=this.gbP()+s+r
if(!this.a)return q
p=this.gbO()
o=P.ou(this.b)
return q+p+": "+H.p(o)},
gE:function(a){return this.c}}
P.ft.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.p(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.p(t)
else if(r>t)s=": Not in range "+H.p(t)+".."+H.p(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.p(t)}return s}}
P.j0.prototype={
gbP:function(){return"RangeError"},
gbO:function(){if(J.fU(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.p(t)},
gF:function(a){return this.f}}
P.aY.prototype={
w:function(a){return"Unsupported operation: "+this.a}}
P.du.prototype={
w:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.p(t):"UnimplementedError"}}
P.bR.prototype={
w:function(a){return"Bad state: "+this.a}}
P.bL.prototype={
w:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.p(P.ou(t))+"."}}
P.k1.prototype={
w:function(a){return"Out of Memory"},
gax:function(){return},
$iscJ:1}
P.fw.prototype={
w:function(a){return"Stack Overflow"},
gax:function(){return},
$iscJ:1}
P.i4.prototype={
w:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.p(t)+"' during its initialization"}}
P.lN.prototype={
w:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.p(t)}}
P.iQ.prototype={
w:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.p(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.f.bI(r,0,75)+"..."
return s+"\n"+r}}
P.ie.prototype={
w:function(a){return"Expando:"+H.p(this.a)},
l:function(a,b){var t,s
t=this.bq
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.aw(P.dG(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.nI(b,"expando$values")
return s==null?null:H.nI(s,t)},
h:function(a,b,c){var t,s
t=this.bq
if(typeof t!=="string")t.set(b,c)
else{s=H.nI(b,"expando$values")
if(s==null){s=new P.ar()
H.p3(b,"expando$values",s)}H.p3(s,t,c)}},
gE:function(a){return this.a}}
P.N.prototype={$isaF:1,
$asaF:function(){return[P.bK]}}
P.C.prototype={
ai:function(a,b){return H.e3(this,b,H.ab(this,"C",0),null)},
cv:function(a,b){return new H.bx(this,b,[H.ab(this,"C",0)])},
h7:function(a,b){var t,s
t=this.gN(this)
if(!t.D())throw H.w(H.fc())
s=t.gH()
for(;t.D();)s=b.$2(s,t.gH())
return s},
fR:function(a,b){var t,s
t=this.gN(this)
if(!t.D())return""
if(b===""){s=""
do s+=H.p(t.gH())
while(t.D())}else{s=H.p(t.gH())
for(;t.D();)s=s+b+H.p(t.gH())}return s.charCodeAt(0)==0?s:s},
a3:function(a,b){return P.cv(this,!0,H.ab(this,"C",0))},
aj:function(a){return this.a3(a,!0)},
gF:function(a){var t,s
t=this.gN(this)
for(s=0;t.D();)++s
return s},
gZ:function(a){return!this.gN(this).D()},
aD:function(a,b){var t,s,r
if(b<0)H.aw(P.bm(b,0,null,"index",null))
for(t=this.gN(this),s=0;t.D();){r=t.gH()
if(b===s)return r;++s}throw H.w(P.j1(b,this,"index",null,s))},
w:function(a){return P.nz(this,"(",")")},
$asC:null}
P.fd.prototype={}
P.V.prototype={$asV:null,$isC:1,$isT:1,$asT:null}
P.bQ.prototype={
gY:function(a){return P.ar.prototype.gY.call(this,this)},
w:function(a){return"null"}}
P.bK.prototype={$isaF:1,
$asaF:function(){return[P.bK]}}
P.ar.prototype={constructor:P.ar,$isar:1,
P:function(a,b){return this===b},
gY:function(a){return H.cx(this)},
w:function(a){return H.k9(this)},
ga_:function(a){return new H.cD(H.mP(this),null)},
toString:function(){return this.w(this)}}
P.cT.prototype={}
P.cB.prototype={}
P.B.prototype={$isaF:1,
$asaF:function(){return[P.B]}}
P.ef.prototype={
gF:function(a){return this.X.length},
w:function(a){var t=this.X
return t.charCodeAt(0)==0?t:t},
gX:function(){return this.X}}
W.a_.prototype={}
W.h_.prototype={
w:function(a){return String(a)},
$isJ:1,
sad:function(a,b){return a.type=b}}
W.h0.prototype={
w:function(a){return String(a)},
$isJ:1}
W.d3.prototype={
aA:function(a){return a.close()},
$isd3:1}
W.h7.prototype={$isJ:1}
W.ha.prototype={
gE:function(a){return a.name},
gW:function(a){return a.value},
sE:function(a,b){return a.name=b},
sad:function(a,b){return a.type=b},
sW:function(a,b){return a.value=b}}
W.hc.prototype={
gfl:function(a){return a.getContext("2d")}}
W.eB.prototype={
h4:function(a,b,c,d,e,f,g,h){a.putImageData(P.ui(b),c,d)
return},
dw:function(a,b,c,d){return this.h4(a,b,c,d,null,null,null,null)}}
W.cI.prototype={$isJ:1,
gF:function(a){return a.length}}
W.eF.prototype={
c9:function(a,b){return typeof console!="undefined"?console.error(b):null},
ds:function(a){return typeof console!="undefined"?console.info(a):null},
hg:function(a){return typeof console!="undefined"?console.time(a):null},
hq:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.d6.prototype={
aL:function(a,b){return a.item(b)},
gF:function(a){return a.length}}
W.eZ.prototype={}
W.i1.prototype={}
W.i3.prototype={
eL:function(a,b,c,d,e){return a.initCustomEvent(b,!0,!0,e)},
seB:function(a,b){return a._dartDetail=b}}
W.eH.prototype={$isJ:1}
W.eI.prototype={
gE:function(a){return a.name}}
W.i5.prototype={
gE:function(a){var t=a.name
if(P.ot()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.ot()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
w:function(a){return String(a)}}
W.cj.prototype={
gb4:function(a){return P.td(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,null)},
w:function(a){return a.localName},
dg:function(a){return a.click()},
ga1:function(a){return new W.ek(a,"change",!1,[W.z])},
gce:function(a){return new W.ek(a,"click",!1,[W.aA])},
$iscj:1,
$isar:1,
$isJ:1}
W.ib.prototype={
gE:function(a){return a.name},
sE:function(a,b){return a.name=b},
sad:function(a,b){return a.type=b}}
W.ic.prototype={
gah:function(a){return a.error}}
W.z.prototype={
h2:function(a){return a.preventDefault()},
e2:function(a){return a.stopPropagation()},
$isz:1,
$isar:1}
W.dM.prototype={
el:function(a,b,c,d){return a.addEventListener(b,H.ev(c,1),!1)},
eX:function(a,b,c,d){return a.removeEventListener(b,H.ev(c,1),!1)}}
W.iJ.prototype={
gE:function(a){return a.name},
sE:function(a,b){return a.name=b}}
W.aM.prototype={$isaM:1,$isar:1,
gE:function(a){return a.name}}
W.dd.prototype={
gF:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.w(P.j1(b,a,null,null,null))
return a[b]},
h:function(a,b,c){throw H.w(new P.aY("Cannot assign element of immutable List."))},
aD:function(a,b){if(b<0||b>=a.length)return H.I(a,b)
return a[b]},
aL:function(a,b){return a.item(b)},
$isdd:1,
$isc4:1,
$asc4:function(){return[W.aM]},
$isbH:1,
$asbH:function(){return[W.aM]},
$isV:1,
$asV:function(){return[W.aM]},
$isT:1,
$asT:function(){return[W.aM]},
$isC:1,
$asC:function(){return[W.aM]}}
W.f_.prototype={
$asV:function(){return[W.aM]},
$asT:function(){return[W.aM]},
$asC:function(){return[W.aM]},
$isV:1,
$isT:1,
$isC:1}
W.f0.prototype={
$asV:function(){return[W.aM]},
$asT:function(){return[W.aM]},
$asC:function(){return[W.aM]},
$isV:1,
$isT:1,
$isC:1}
W.eS.prototype={
gdC:function(a){var t=a.result
if(!!J.a1(t).$iscH)return H.rW(t,0,null)
return t},
gah:function(a){return a.error}}
W.eV.prototype={
aL:function(a,b){return a.item(b)},
gF:function(a){return a.length},
gE:function(a){return a.name},
sE:function(a,b){return a.name=b}}
W.iY.prototype={
gE:function(a){return a.name},
sE:function(a,b){return a.name=b}}
W.cM.prototype={$iscM:1,
gak:function(a){return a.data}}
W.iZ.prototype={
dh:function(a,b){return a.complete.$1(b)}}
W.eY.prototype={$isJ:1,$isec:1,
gaU:function(a){return a.checked},
gfB:function(a){return a.files},
gE:function(a){return a.name},
gW:function(a){return a.value},
gct:function(a){return a.valueAsNumber},
sf8:function(a,b){return a.accept=b},
saU:function(a,b){return a.checked=b},
san:function(a,b){return a.max=b},
sdu:function(a,b){return a.maxLength=b},
sao:function(a,b){return a.min=b},
sdv:function(a,b){return a.multiple=b},
sE:function(a,b){return a.name=b},
sfY:function(a,b){return a.pattern=b},
saq:function(a,b){return a.step=b},
sad:function(a,b){return a.type=b},
sW:function(a,b){return a.value=b},
sct:function(a,b){return a.valueAsNumber=b}}
W.ec.prototype={$iscj:1,$isJ:1}
W.jm.prototype={
gE:function(a){return a.name},
sE:function(a,b){return a.name=b}}
W.jo.prototype={
gW:function(a){return a.value},
sW:function(a,b){return a.value=b}}
W.js.prototype={
sad:function(a,b){return a.type=b}}
W.jA.prototype={
gE:function(a){return a.name},
sE:function(a,b){return a.name=b}}
W.e5.prototype={
gah:function(a){return a.error}}
W.jE.prototype={
sad:function(a,b){return a.type=b}}
W.jF.prototype={
gaU:function(a){return a.checked},
saU:function(a,b){return a.checked=b},
sad:function(a,b){return a.type=b}}
W.jG.prototype={
aA:function(a){return a.close()}}
W.jH.prototype={
gE:function(a){return a.name},
sE:function(a,b){return a.name=b}}
W.jI.prototype={
gW:function(a){return a.value},
san:function(a,b){return a.max=b},
sao:function(a,b){return a.min=b},
sW:function(a,b){return a.value=b}}
W.aA.prototype={
gb4:function(a){return new P.cw(a.clientX,a.clientY,[null])},
$isaA:1,
$isz:1,
$isar:1}
W.jV.prototype={$isJ:1}
W.jW.prototype={
gE:function(a){return a.name}}
W.cV.prototype={
ha:function(a,b){var t,s
try{t=a.parentNode
J.pO(t,b,a)}catch(s){H.b_(s)}return a},
w:function(a){var t=a.nodeValue
return t==null?this.e4(a):t},
eY:function(a,b,c){return a.replaceChild(b,c)}}
W.jX.prototype={
sad:function(a,b){return a.type=b}}
W.jY.prototype={
gE:function(a){return a.name},
sE:function(a,b){return a.name=b},
sad:function(a,b){return a.type=b}}
W.k_.prototype={
gW:function(a){return a.value},
sW:function(a,b){return a.value=b}}
W.k2.prototype={
gE:function(a){return a.name},
gW:function(a){return a.value},
sE:function(a,b){return a.name=b},
sW:function(a,b){return a.value=b}}
W.k5.prototype={
gE:function(a){return a.name},
gW:function(a){return a.value},
sE:function(a,b){return a.name=b},
sW:function(a,b){return a.value=b}}
W.kb.prototype={
gW:function(a){return a.value},
sW:function(a,b){return a.value=b}}
W.ko.prototype={
sad:function(a,b){return a.type=b}}
W.c9.prototype={
aL:function(a,b){return a.item(b)},
$isc9:1,
gF:function(a){return a.length},
gE:function(a){return a.name},
gW:function(a){return a.value},
sdv:function(a,b){return a.multiple=b},
sE:function(a,b){return a.name=b},
sW:function(a,b){return a.value=b}}
W.kt.prototype={
gE:function(a){return a.name},
sE:function(a,b){return a.name=b}}
W.kw.prototype={
sad:function(a,b){return a.type=b}}
W.ky.prototype={
gah:function(a){return a.error}}
W.kz.prototype={
gE:function(a){return a.name}}
W.l2.prototype={
sad:function(a,b){return a.type=b}}
W.la.prototype={
gE:function(a){return a.name},
gW:function(a){return a.value},
sdu:function(a,b){return a.maxLength=b},
sE:function(a,b){return a.name=b},
sW:function(a,b){return a.value=b}}
W.bS.prototype={}
W.fG.prototype={
aA:function(a){return a.close()},
$isJ:1,
gE:function(a){return a.name}}
W.lA.prototype={
gE:function(a){return a.name}}
W.lE.prototype={
w:function(a){return"Rectangle ("+H.p(a.left)+", "+H.p(a.top)+") "+H.p(a.width)+" x "+H.p(a.height)},
P:function(a,b){var t,s,r
if(b==null)return!1
t=J.a1(b)
if(!t.$iscz)return!1
s=a.left
r=t.gcc(b)
if(s==null?r==null:s===r){s=a.top
r=t.gcr(b)
if(s==null?r==null:s===r){s=a.width
r=t.gdL(b)
if(s==null?r==null:s===r){s=a.height
t=t.gdr(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gY:function(a){var t,s,r,q,p
t=J.bf(a.left)
s=J.bf(a.top)
r=J.bf(a.width)
q=J.bf(a.height)
q=W.m8(W.m8(W.m8(W.m8(0,t),s),r),q)
p=536870911&q+((67108863&q)<<3)
p^=p>>>11
return 536870911&p+((16383&p)<<15)},
$iscz:1,
$ascz:function(){},
gde:function(a){return a.bottom},
gdr:function(a){return a.height},
gcc:function(a){return a.left},
gdD:function(a){return a.right},
gcr:function(a){return a.top},
gdL:function(a){return a.width}}
W.lI.prototype={$isJ:1}
W.m0.prototype={$isJ:1}
W.ms.prototype={$isJ:1}
W.fM.prototype={
av:function(a,b,c,d){return W.a6(this.a,this.b,a,!1,H.v(this,0))},
cd:function(a,b,c){return this.av(a,null,b,c)}}
W.ek.prototype={}
W.lL.prototype={
by:function(){if(this.b==null)return
this.d8()
this.b=null
this.d=null
return},
cg:function(a,b){if(this.b==null)return;++this.a
this.d8()},
cf:function(a){return this.cg(a,null)},
bD:function(){if(this.b==null||this.a<=0)return;--this.a
this.d6()},
d6:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.pM(r,this.c,t,!1)}},
d8:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.pN(r,this.c,t,!1)}},
eg:function(a,b,c,d,e){this.d6()}}
W.lM.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.eX.prototype={
gN:function(a){return new W.iO(a,a.length,-1,null,[H.ab(a,"eX",0)])},
$isV:1,
$asV:null,
$isT:1,
$asT:null,
$isC:1,
$asC:null}
W.iO.prototype={
D:function(){var t,s
t=this.c+1
s=this.b
if(t<s){s=this.a
if(t<0||t>=s.length)return H.I(s,t)
this.d=s[t]
this.c=t
return!0}this.d=null
this.c=s
return!1},
gH:function(){return this.d}}
P.mA.prototype={
dl:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
cu:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.a1(a)
if(!!s.$isuD)return new Date(a.a)
if(!!s.$istf)throw H.w(new P.du("structured clone of RegExp"))
if(!!s.$isaM)return a
if(!!s.$isd3)return a
if(!!s.$isdd)return a
if(!!s.$iscM)return a
if(!!s.$isdp||!!s.$iscU)return a
if(!!s.$isnG){r=this.dl(a)
q=this.b
p=q.length
if(r>=p)return H.I(q,r)
o=q[r]
t.a=o
if(o!=null)return o
o={}
t.a=o
if(r>=p)return H.I(q,r)
q[r]=o
s.cb(a,new P.mC(t,this))
return t.a}if(!!s.$isV){r=this.dl(a)
t=this.b
if(r>=t.length)return H.I(t,r)
o=t[r]
if(o!=null)return o
return this.fn(a,r)}throw H.w(new P.du("structured clone of other type"))},
fn:function(a,b){var t,s,r,q,p
t=J.aZ(a)
s=t.gF(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.I(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.cu(t.l(a,p))
if(p>=r.length)return H.I(r,p)
r[p]=q}return r}}
P.mC.prototype={
$2:function(a,b){this.a.a[a]=this.b.cu(b)},
$S:function(){return{func:1,args:[,,]}}}
P.fR.prototype={$iscM:1,$isJ:1,
gak:function(a){return this.a}}
P.mB.prototype={}
P.m7.prototype={
bg:function(){return Math.random()}}
P.mj.prototype={
aR:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.b.a5(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bg:function(){this.aR()
var t=this.a
this.aR()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
ej:function(a){var t,s,r,q,p,o,n,m
t=a<0?-1:0
do{s=(a&4294967295)>>>0
a=C.b.a5(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.b.a5(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.b.a5(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.b.a5(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.b.a5(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.b.a5(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.b.a5(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aR()
this.aR()
this.aR()
this.aR()}}
P.cw.prototype={
w:function(a){return"Point("+H.p(this.a)+", "+H.p(this.b)+")"},
P:function(a,b){var t,s
if(b==null)return!1
if(!(b instanceof P.cw))return!1
t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gY:function(a){var t,s
t=J.bf(this.a)
s=J.bf(this.b)
return P.pn(P.eo(P.eo(0,t),s))},
U:function(a,b){var t,s,r,q
t=this.a
s=J.W(b)
r=s.gR(b)
if(typeof t!=="number")return t.U()
if(typeof r!=="number")return H.au(r)
q=this.b
s=s.gS(b)
if(typeof q!=="number")return q.U()
if(typeof s!=="number")return H.au(s)
return new P.cw(t+r,q+s,this.$ti)},
a0:function(a,b){var t,s
t=this.a
if(typeof t!=="number")return t.a0()
s=this.b
if(typeof s!=="number")return s.a0()
return new P.cw(t*b,s*b,this.$ti)},
gR:function(a){return this.a},
gS:function(a){return this.b}}
P.mk.prototype={
gdD:function(a){var t=this.a
if(typeof t!=="number")return t.U()
return t+this.c},
gde:function(a){var t=this.b
if(typeof t!=="number")return t.U()
return t+this.d},
w:function(a){return"Rectangle ("+H.p(this.a)+", "+H.p(this.b)+") "+this.c+" x "+this.d},
P:function(a,b){var t,s,r,q
if(b==null)return!1
t=J.a1(b)
if(!t.$iscz)return!1
s=this.a
r=t.gcc(b)
if(s==null?r==null:s===r){r=this.b
q=t.gcr(b)
if(r==null?q==null:r===q){if(typeof s!=="number")return s.U()
if(s+this.c===t.gdD(b)){if(typeof r!=="number")return r.U()
t=r+this.d===t.gde(b)}else t=!1}else t=!1}else t=!1
return t},
gY:function(a){var t,s,r,q
t=this.a
s=J.bf(t)
r=this.b
q=J.bf(r)
if(typeof t!=="number")return t.U()
if(typeof r!=="number")return r.U()
return P.pn(P.eo(P.eo(P.eo(P.eo(0,s),q),t+this.c&0x1FFFFFFF),r+this.d&0x1FFFFFFF))}}
P.cz.prototype={$ascz:null,
gcc:function(a){return this.a},
gcr:function(a){return this.b},
gdL:function(a){return this.c},
gdr:function(a){return this.d}}
P.fY.prototype={$isJ:1}
P.cG.prototype={$isJ:1}
P.ih.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.ii.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.ij.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.ik.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.il.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.im.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.io.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.ip.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.iq.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.ir.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.is.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.it.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.iu.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.iv.prototype={
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.iw.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.ix.prototype={
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.iy.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.iz.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.iN.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.iP.prototype={
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.bO.prototype={}
P.co.prototype={$isJ:1}
P.j_.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.jC.prototype={$isJ:1}
P.jD.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.k6.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.ke.prototype={
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.kp.prototype={$isJ:1,
sad:function(a,b){return a.type=b}}
P.l3.prototype={
sad:function(a,b){return a.type=b}}
P.aX.prototype={
dg:function(a){throw H.w(new P.aY("Cannot invoke click SVG."))},
gce:function(a){return new W.ek(a,"click",!1,[W.aA])},
$isJ:1}
P.l4.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.l6.prototype={$isJ:1}
P.fD.prototype={}
P.lb.prototype={$isJ:1}
P.eg.prototype={
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.lk.prototype={$isJ:1,
gR:function(a){return a.x},
gS:function(a){return a.y}}
P.ll.prototype={$isJ:1}
P.en.prototype={$isJ:1}
P.mp.prototype={$isJ:1}
P.mq.prototype={$isJ:1}
P.mr.prototype={$isJ:1}
P.cH.prototype={}
S.fZ.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Math Book",H.a([$.O,$.aq,$.a7],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Giant Map",H.a([$.O,$.aq],s),null,!1,"Map to Staffs HQ")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Microscope",H.a([$.U,$.aq,$.bl],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Star Chart",H.a([$.O,$.aq],s),null,!1,"Cosmic Dot-to-Dot")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("History Book",H.a([$.O,$.aq],s),null,!1,"Homestuck Anthology")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Radioactive Rock",H.a([$.j9,$.f8],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Compass",H.a([$.U,$.aq],s),null,!1,"Navigation Box")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.eN,$.i)
q.h(0,$.ao,$.i)
q.h(0,$.eR,$.f)
q.h(0,$.a4,$.y)
q.h(0,$.b9,$.f)
p=$.j
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.k
o=o+n+" to stop "
m=$.x
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.rP
n=[U.b]
q.h(0,new R.H("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.m(),!1,!1,new Y.bn("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.o)
m=$.j
q.h(0,new R.H("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.k+" to stop "+$.x+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.p6(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.f)
m=$.j
p="The "+m+" finds a massive library, filled with books. The "
l=$.k
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.n
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.h(0,new R.H("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.dq(),!1,!1,new Y.at("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.f)
m=this.r
m.h(0,new X.q(s,q,null),$.Z)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dQ,$.y)
s.h(0,$.b9,$.i)
p=$.j
o="The "+p+"  is approached by a "
l=$.k
s.h(0,new R.H("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.x+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
p=$.j
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.k
s.h(0,new R.H("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.x+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.cW(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.f)
p=$.j
s.h(0,new R.H("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.k+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.dq(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.f)
m.h(0,new X.q(q,s,null),$.Z)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.dQ,$.y)
t.h(0,$.b9,$.i)
t.h(0,$.aI,$.y)
t.h(0,$.ox,$.y)
r=$.j
q="The "+r+"  is approached by a "
p=$.k
q=q+p+" who offers them a grant to study "
o=$.S
t.h(0,new R.H("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.x+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.dq(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.f)
o=$.k
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.x
r=r+p+".  It is up to the "
q=$.j
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.S
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.rV
t.h(0,new R.H("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.cy(),!1,!1,new Y.bn("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.f)
p=$.j
t.h(0,new R.H("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.x+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.k+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
m.h(0,new X.q(s,t,null),$.Z)},
gK:function(){return this.cx}}
L.h2.prototype={
$1:function(a){return!a.gbb()},
$S:function(){return{func:1,args:[L.cg]}}}
L.cg.prototype={
B:function(){var t,s
t=Q.u(null,null,A.M)
s=A.e("Perfectly Generic Object",H.a([],[G.L]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.a.j(t.b,new Q.d(s,t.k(s,1),[H.v(t,0)]))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bB,$.f)
q.h(0,$.ao,$.y)
q.h(0,$.cn,$.f)
q.h(0,$.aI,$.i)
q.h(0,$.d9,$.y)
p=$.j
o="The "+p+" learns that all of the local "
n=$.k
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.x+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.n
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.aN+". The "+p+" has won! "
i=[U.b]
q.h(0,new R.D("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.K(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
j=this.f
j.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dU,$.f)
s.h(0,$.dS,$.y)
s.h(0,$.dT,$.i)
s.h(0,$.bt,$.f)
s.h(0,$.aP,$.y)
p=$.j
o="The "+p+" learns that all of the local "
n=$.k
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.x+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.n
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.aN+". The "+p+" has won! "
s.h(0,new R.D("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.K(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
j.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.a4,$.f)
t.h(0,$.ao,$.y)
t.h(0,$.aL,$.i)
r=$.j
q="The "+r+" learns that all of the local "
p=$.k
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.x
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.n
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.aN+". The "+r+" has won! "
t.h(0,new R.H("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.K(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.nK(),!1,!1,new Y.aG(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
l=$.j
r="The "+l+" learns that all of the local "
m=$.k
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.n
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.aN+". The "+l+" has won! "
t.h(0,new R.D("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.K(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
j.h(0,new X.q(s,t,null),$.Y)},
w:function(a){return this.Q},
a9:function(a,b,c,d){var t
this.r=new X.eK("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+this.Q+".xml",!1,H.a([],[X.eA]),H.a([],[M.dO]))
t=this.Q
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.B()
this.C()
t=this.e
if($.$get$bY().a7(t))H.aw("Duplicate aspect id for "+this.w(0)+": "+t+" is already registered for "+J.bh($.$get$bY().l(0,t))+".")
$.$get$bY().h(0,t,this)},
gE:function(a){return this.Q},
gbb:function(){return this.cy},
gaa:function(){return this.fx},
gK:function(){return this.rx}}
L.a8.prototype={}
M.h4.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Barbells",H.a([$.aT,$.j7,$.U],s),null,!1,"Strength Building Metal")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Basketball",H.a([$.j5,$.e0],s),null,!1,"Dunksphere")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Baseball Bat",H.a([$.oL,$.ax],s),null,!1,"Wooden Pole of Bone Hurting")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Rubber Ball",H.a([$.j5,$.e0],s),null,!1,"Dead Animal Corpse Ball")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Megaphone",H.a([$.ct,$.aD],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Hockey Stick",H.a([$.oL,$.ax,$.cO],s),null,!1,"L Shaped Bone Hurter")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Trophy",H.a([$.U,$.f9],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Boxing Glove",H.a([$.rh,$.e0],s),null,!1,"Fist Reinforcing Pain Cubes")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Yoga Mat",H.a([$.e0,$.bj],s),null,!1,"Flesh Rubberising Practice Mat")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cL,$.y)
q.h(0,$.aS,$.i)
q.h(0,$.bt,$.y)
p=$.j
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.k
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.x+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.h(0,new R.H("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.o)
m=$.j
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.k
q.h(0,new R.H("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.x+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.cy(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.f)
m=$.j
n="The "+m+"  wanders into a bunch of "
p=$.k
q.h(0,new R.H("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.eb(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.f)
m=this.r
m.h(0,new X.q(s,q,null),$.Z)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.cL,$.i)
t.h(0,$.dW,$.i)
t.h(0,$.aS,$.i)
s=$.j
r="The "+s+" finds a team of underdog "
p=$.k
t.h(0,new R.H("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.p6(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.f)
p=$.k
s="A group of "+p+"s approach the "
r=$.j
s=s+r+". Apparently their sports team lost their coach to the "+$.n+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.x
t.h(0,new R.H("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.cy(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.f)
k=$.k
p="A group of "+k+"s approach the "
r=$.j
t.h(0,new R.H("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.n+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.S+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
m.h(0,new X.q(q,t,null),$.Z)},
gK:function(){return this.cx}}
O.h5.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Cod Piece",H.a([$.a9,$.a5,$.bk,$.E,$.ax],s),"God damn it, MI. ",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Poisoned Candy",H.a([$.oJ,$.E,$.ja],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Cursed Lyre",H.a([$.b4,$.ax,$.b3,$.E,$.bd],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Snare Trap",H.a([$.a9,$.b4,$.E,$.f6],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.b7,$.f)
t.h(0,$.eQ,$.f)
t.h(0,$.b2,$.f)
t.h(0,$.c3,$.f)
t.h(0,$.bi,$.f)
t.h(0,$.dP,$.f)
r="After all the bullshit the "+$.n+" has put the native "
q=$.k
r=r+q+"s through, the "
p=$.j
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.a0+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.x
m=[U.b]
t.h(0,new R.P("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.m(),!1,!1,new Y.c7("Rewards/no_reward.png",null),1,null,null),$.o)
p=$.k
n="A group of jubilant "+p+"s are following the "
q=$.j
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.x
t.h(0,new R.P("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.n+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
q=$.j
t.h(0,new R.P("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.n+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.m(),!1,!1,new Y.he("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.o)
q="The "+$.n+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.j
q=q+r+" organizes a huge festival for all the "
p=$.k
t.h(0,new R.as("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
this.x.h(0,new X.q(s,t,null),$.ay)}}
T.h6.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Mystical Vial of Blood",H.a([$.bl,$.b3,$.G,$.bE],s),null,!1,"Vial of Not-ABs Oil")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Bananaphone",H.a([$.cr,$.b3,$.G,$.bP],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Friendship Bracelet",H.a([$.a9,$.b3,$.G,$.bE,$.nt],s),null,!1,"Soul Binding Wrist Shackle")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Bonding Manacles",H.a([$.U,$.f6,$.G,$.bE,$.nt,$.b5],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Friendship Stairs",H.a([$.ax,$.oQ,$.b3,$.bE,$.G,$.a5],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bM,$.f)
q.h(0,$.oC,$.f)
q.h(0,$.aI,$.i)
p=$.j
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.k
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.S+" and some boondollars in compensation."
n=this.x1
k=[U.b]
q.h(0,new R.H("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.cy(),!1,!1,new Y.at("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.o)
n=$.k
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.x+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.n
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.j
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.aN+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.h(0,new R.D("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.K(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
n=this.f
n.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bt,$.f)
s.h(0,$.bi,$.y)
s.h(0,$.a4,$.y)
s.h(0,$.iI,$.f)
s.h(0,$.b2,$.y)
p=$.j
o="The "+p+"  and the "
m=$.cY
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.n
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.h(0,new R.D("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(l),new U.K(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.cX(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.X)
h=$.j
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.k
i=i+m+"s explains that before  "
p=$.n
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.aN+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.rM
s.h(0,new R.D("Chain the Towers",!1,[new U.b(i),new U.b(m),new U.b(j),new U.K(l,h,o)],H.a([],k),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.o)
p=$.j
o="The "+p+" learns of the "
h=$.a0
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.k
o=o+l+" explains that the "
j=$.n
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.aN+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.h(0,new R.D("Protect the Beams",!1,[new U.b(l),new U.b(o),new U.b(m),new U.K(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
p=$.j
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.k
h=h+i+" on "+$.a0+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.de+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.h(0,new R.P("One Degree of Separation",!1,[new U.b(h),new U.b(m),new U.b(i)],H.a([],k),R.dq(),!1,!1,new Y.aG("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
p=$.j
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.k+" on "
m=$.a0
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.de+" is now more popular with your friends than you are."
s.h(0,new R.P("Steal The Friends",!1,[new U.b(i),new U.b(h),new U.b(m)],H.a([],k),R.nL(),!1,!1,new Y.aG("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
p=$.j
m="The "+p+"  and the "
h=$.cY
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.n
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.h(0,new R.D("Pale Shipping Dungeon",!1,[new U.b(m),new U.K(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.p(C.l)+".",o)],H.a([],k),R.cX(),!1,!1,new Y.fq(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.X)
n.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.a4,$.f)
t.h(0,$.ao,$.y)
t.h(0,$.aL,$.i)
r="In the wake of the defeat of the "+$.n+" it becomes really how isolated the individual "
q=$.k
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.j
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.de+" to kick your ass, but luckily they have several."
t.h(0,new R.P("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.cy(),!1,!1,new Y.aG("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
o=$.j
q="The "+o+" learns that two prominent "
p=$.k
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.n
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.aN+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.x+"ing. "
t.h(0,new R.D("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(m),new U.K(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
n.h(0,new X.q(s,t,null),$.Y)},
gaa:function(){return this.n},
gK:function(){return this.T}}
T.h9.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Pan's Pipe",H.a([$.bd,$.ax,$.b3,$.G],s),null,!1,"Smonkin Weeds Pipe")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Skeleton Key",H.a([$.df,$.G],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Inspector's Fan",H.a([$.aD,$.U,$.b3,$.G],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Jet Pack",H.a([$.cu,$.U,$.ct,$.G,$.a5],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aL,$.i)
q.h(0,$.dW,$.f)
q.h(0,$.a4,$.i)
p=$.j
o="The "+p+" tries posting a letter through the "
n=$.S
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.n
o=o+m+" has screwed with the mail system, crippling the "
l=$.k
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.aN+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.rQ
i=[U.b]
q.h(0,new R.D("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.K(j,p,l)],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.o)
m=this.f
m.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.ao,$.f)
s.h(0,$.dW,$.i)
s.h(0,$.a4,$.i)
s.h(0,$.aS,$.i)
s.h(0,$.aL,$.i)
p=$.j
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.S
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.k
k=l+k+" fields. The "+k+"s "+$.x+"ing is so joyful it's literally deafening. "
l=$.n
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.aN+". The "+p+" is finally free to continue improving the land with wind. "
s.h(0,new R.D("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.K(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
m.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aP,$.f)
t.h(0,$.nl,$.f)
t.h(0,$.dW,$.y)
t.h(0,$.aL,$.y)
r=$.j
q="The "+r+" is chilling in a "+$.k+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.n
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.S
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.a0+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.aN+". The "+r+" has become the storm master. It is them. "
t.h(0,new R.D("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.K(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
m.h(0,new X.q(s,t,null),$.Y)},
gaa:function(){return this.n},
gK:function(){return this.T}}
A.i0.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Colonel Sassacre's Daunting Text ",H.a([$.O,$.aT,$.bP,$.j7],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Wise Guy Book",H.a([$.O,$.bP],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Beagle Puss",H.a([$.bl,$.bP],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Novelty Microphone",H.a([$.ct,$.aD,$.bP],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Banana",H.a([$.cr,$.bP],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Fake Flower",H.a([$.a9,$.bP],s),null,!1,"Flower that smells like Plastic")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Trick Handcuffs",H.a([$.U,$.bP],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.b2,$.i)
q.h(0,$.b1,$.f)
q.h(0,$.aS,$.i)
p=$.j
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.k
o=o+n+"s are too scared to even "+$.x+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.n+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.h(0,new R.H("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.o)
p=this.r
p.h(0,new X.q(s,q,null),$.Z)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cL,$.y)
s.h(0,$.aS,$.f)
s.h(0,$.b1,$.f)
s.h(0,$.b7,$.f)
o=$.j
n="The "+o+" learns of an Open Mic Nite at the "
m=$.a0
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.k
k=k+j+"s let out a braying "+$.x+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.rT
s.h(0,new R.H("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.m(),!1,!1,new Y.bn("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.o)
p.h(0,new X.q(q,s,null),$.Z)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ba,$.y)
t.h(0,$.aK,$.i)
t.h(0,$.b1,$.f)
t.h(0,$.aS,$.i)
t.h(0,$.ni,$.i)
r=$.j
q="The "+r+"  is approached by a Crafty "
o=$.k
q=q+o+" who offers them a magical "
n=$.S
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.x
t.h(0,new R.H("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
p.h(0,new X.q(s,t,null),$.Z)},
gK:function(){return this.cx}}
M.i2.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Can of Spray Paint",H.a([$.aV,$.U],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Sensible Chuckles Magazine",H.a([$.O,$.az,$.bP,$.a7],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Gentleman's Razor",H.a([$.rx,$.U,$.dg],s),null,!1,"Face Cutting Hair Remover")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("How To Draw Manga",H.a([$.O,$.az,$.a7],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Painting of a Horse Boxing a Football Player",H.a([$.aV,$.aU,$.O],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Collection of Classical Works",H.a([$.az,$.O],s),null,!1,"Book of Naked Renaissance People")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Documentary on Horses",H.a([$.az,$.av,$.aU],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Paint Set",H.a([$.aV,$.az],s),null,!1,"Pain Drink Set")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Shaving Cream",H.a([$.cu,$.az,$.U],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Classy Suit",H.a([$.a9,$.az],s),null,!1,"Georgio Armani Suit")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("The Fatherly Gent's Shaving Almanac ",H.a([$.O,$.az,$.a7],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cm,$.i)
q.h(0,$.b9,$.f)
q.h(0,$.a4,$.i)
p=$.j
o="The "+p+" visits a beautiful "
n=$.S
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.k
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.n+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.x+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.h(0,new R.H("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.o)
m=this.r
m.h(0,new X.q(s,q,null),$.Z)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cL,$.y)
s.h(0,$.aS,$.i)
s.h(0,$.b1,$.y)
s.h(0,$.ao,$.i)
s.h(0,$.b7,$.f)
o=$.j
n="The "+o+" finds a troupe of dejected looking "
l=$.k
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.a0
l=l+n+" "
k=$.S
s.h(0,new R.H("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.x+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
m.h(0,new X.q(q,s,null),$.Z)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.eQ,$.y)
t.h(0,$.b2,$.y)
t.h(0,$.dP,$.y)
t.h(0,$.aK,$.y)
t.h(0,$.ao,$.i)
t.h(0,$.a4,$.i)
r=$.j
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.x
q=q+o+"ingworth, "
n=$.k
q=q+n+" heiress to the "+$.S+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.rJ
t.h(0,new R.H("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.m(),!1,!1,new Y.bn("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.o)
m.h(0,new X.q(s,t,null),$.Z)},
gK:function(){return this.cx}}
V.i6.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Trendy Fabric",H.a([$.aV,$.a9],s),null,!1,"Weird Tasting Candy Paper")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Necklace",H.a([$.aV,$.oN,$.nt],s),null,!1,"Nasty Candy Necklace")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Sewing Needle",H.a([$.U,$.rt,$.f5],s),null,!1,"Cloth Stabbing Knife")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=$.nr
r=A.e("Broom",H.a([r,$.ax,$.aT,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Rolling Pin",H.a([$.ax,$.rz,$.aT],s),null,!1,"Babushkas Punishment Pole")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Velvet Pillow",H.a([$.a9,$.bj,$.b3,$.aV,$.f4],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Yarn Ball",H.a([$.aV,$.a9],s),null,!1,"Cats Plaything")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Refrigerator",H.a([$.b5,$.j7,$.U,$.cq],s),null,!1,"Food Hardening Box")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Photo Album",H.a([$.aV,$.O],s),null,!1,"Memory Book")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Ice Cubes",H.a([$.cq],s),null,!1,"Hard Water")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Cast Iron Skillet",H.a([$.U,$.cu,$.aT,$.j7,$.ri],s),null,!1,"Fancy Unstoppable Weapon")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Failed Dish",H.a([$.ja],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Dr Pepper BBQ Sauce",H.a([$.ja],s),"Gross.",!1,"Culinary Perfection")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Potted Plant",H.a([$.aV,$.ns,$.e_],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Chicken Leg",H.a([$.cr,$.di,$.df],s),null,!1,"Thicc Chicken")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Juicy Steak",H.a([$.cr,$.di],s),null,!1,"Juicy Cow Flesh")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Wedding Cake",H.a([$.aV,$.cr,$.bE],s),null,!1,"The Only Benefit of a Wedding")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.b7,$.i)
q.h(0,$.bi,$.i)
q.h(0,$.b2,$.y)
p=$.j
o="The "+p+" is visited by a Beautiful "
n=$.k
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.S
l=[U.b]
q.h(0,new R.H("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.x+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.m(),!1,!1,new Y.eG("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
n=this.r
n.h(0,new X.q(s,q,null),$.Z)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.b2,$.f)
s.h(0,$.aS,$.i)
s.h(0,$.dP,$.f)
s.h(0,$.c3,$.i)
s.h(0,$.ao,$.f)
p=$.j
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.S
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.k
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.x+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.rR
s.h(0,new R.H("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.m(),!1,!1,new Y.bn("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.o)
n.h(0,new X.q(q,s,null),$.Z)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.d8,$.f)
t.h(0,$.ao,$.i)
t.h(0,$.c1,$.f)
t.h(0,$.a4,$.i)
t.h(0,$.iI,$.f)
r=$.j
q="The "+r+" finds a loom, and a Wizened "
p=$.k
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.S
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.x+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.h(0,new R.H("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.o)
n.h(0,new X.q(s,t,null),$.Z)},
gK:function(){return this.cx}}
U.i7.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a7,$.aD,$.O,$.b4,$.G,$.a5],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Egg Timer",H.a([$.av,$.b3,$.G,$.b4],s),null,!1,"Egg That Counts Down to Your Death")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Skull Timer",H.a([$.df,$.b3,$.G,$.b4],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Poison Flask",H.a([$.bl,$.G,$.ja],s),null,!1,"Glass of Bone Hurting Juice")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Ice Gorgon Head",H.a([$.bl,$.G,$.cq,$.b4,$.f6,$.je,$.bF],s),null,!1,"Oddly Attractive Decapitated Head")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Obituary",H.a([$.b5,$.bF,$.b4,$.O,$.G],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cn,$.f)
q.h(0,$.bB,$.i)
q.h(0,$.dW,$.y)
q.h(0,$.ao,$.y)
q.h(0,$.aI,$.i)
p=$.j
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.k
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.S
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.n
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.aN+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.h(0,new R.D("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.K(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
n=this.f
n.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cn,$.f)
s.h(0,$.bB,$.i)
s.h(0,$.dc,$.X)
s.h(0,$.da,$.i)
s.h(0,$.ox,$.i)
s.h(0,$.bM,$.i)
s.h(0,$.bB,$.i)
s.h(0,$.ao,$.y)
s.h(0,$.aI,$.i)
s.h(0,$.c2,$.i)
p=$.j
o="The "+p+" has found a group of Violent "
m=$.k
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.a0
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.x+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.n
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.aN+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.h(0,new R.D("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.K(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.cW(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
m=$.j
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.S
p=p+l+"s alike. "
l=$.k+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.n
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.aN+". The "+m+" is finally free to continue improving the land. "
s.h(0,new R.D("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.K(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
n.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.a4,$.f)
t.h(0,$.aI,$.f)
t.h(0,$.qI,$.X)
t.h(0,$.eN,$.y)
r=$.j
q="The "+r+" finds a small dungeon bearing the image of "
p=$.n
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.k+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.h(0,new R.D("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.K(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.cW(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
k=$.j
p="The "+k+" learns from one of their "
r=$.k
p=p+r+"s that there is an ancient prophecy of a "
l=$.a0
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.S
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.n
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.aN+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.rI
t.h(0,new R.D("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.K(o,k,q)],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.o)
n.h(0,new X.q(s,t,null),$.Y)},
gaa:function(){return this.n},
gK:function(){return this.ca}}
Z.i8.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Dream Diary",H.a([$.O,$.a7,$.G],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Interlocking Brick",H.a([$.av,$.b3,$.aT,$.G,$.a5],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Art Supplies",H.a([$.av,$.b3,$.G],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.d8,$.i)
q.h(0,$.c1,$.f)
q.h(0,$.a4,$.i)
q.h(0,$.iI,$.i)
p=$.k
o="A "+p+" child tugs on the "
n=$.j
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.S
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.n
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.x+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.p_
k=[U.b]
q.h(0,new R.D("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.K(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.o)
l=this.f
l.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aP,$.i)
s.h(0,$.c1,$.f)
s.h(0,$.bC,$.i)
s.h(0,$.b8,$.i)
s.h(0,$.dR,$.i)
s.h(0,$.b1,$.f)
p=$.j
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.k
n=n+m+"s are even starting to snigger and "
j=$.x
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.n
s.h(0,new R.D("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.K("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
l.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.cm,$.f)
t.h(0,$.iE,$.i)
t.h(0,$.a4,$.i)
t.h(0,$.b8,$.f)
t.h(0,$.dR,$.f)
t.h(0,$.c1,$.i)
r=$.j
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.n
t.h(0,new R.D("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.a0+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.k+" is "+$.x+"ing in reverse. Another is in a "+$.S+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.K("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
l.h(0,new X.q(s,t,null),$.Y)},
gaa:function(){return this.m},
gK:function(){return this.T}}
X.eK.prototype={}
X.eA.prototype={
$S:function(){return{func:1,v:true,args:[[P.V,M.dO]]}}}
M.dO.prototype={}
U.iB.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Fluthulu Poster",H.a([$.a9,$.bj,$.bF,$.f1],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Scalemate",H.a([$.a9,$.bj,$.bF],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Replica Bone Shield",H.a([$.b5,$.av,$.df,$.jb,$.bk],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Replica Ice Sword",H.a([$.av,$.rn,$.jd,$.bk],s),null,!1,"Fake Hard Water Long Stabber")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Zombie Mask",H.a([$.av,$.je,$.di,$.bF],s),null,!1,"Dead Face")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Vampire Romance Novel",H.a([$.a7,$.O,$.cN,$.bF],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Wizardy Herbert",H.a([$.O,$.aC,$.aT],s),null,!1,"Shitty Wizard Object")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Complacency of the Learned",H.a([$.O,$.aC,$.aT],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Grimoire for Summoning the Zoologically Dubious ",H.a([$.O,$.aC,$.je,$.bF,$.f1],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Wizard Statue",H.a([$.b5,$.f8,$.aC,$.aT,$.bk],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Mermaid Fountain",H.a([$.b5,$.oM,$.aC,$.aT,$.bk],s),null,!1,"Water Spitting Fish Woman Statue")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.eL,$.X)
q.h(0,$.bi,$.i)
q.h(0,$.aL,$.i)
q.h(0,$.ba,$.y)
p=$.j
o="The "+p+" learns of a Beautiful "
n=$.k
o=o+n+" who has been kidnapped by the vial "
m=$.n
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.S
j=[U.b]
q.h(0,new R.H("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
p=this.r
p.h(0,new X.q(s,q,null),$.Z)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aK,$.f)
s.h(0,$.bM,$.f)
s.h(0,$.iF,$.i)
s.h(0,$.aI,$.f)
s.h(0,$.dc,$.f)
s.h(0,$.eP,$.i)
o=$.j
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.k
s.h(0,new R.H("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
p.h(0,new X.q(q,s,null),$.Z)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aK,$.f)
t.h(0,$.iH,$.i)
t.h(0,$.aI,$.f)
t.h(0,$.ck,$.i)
t.h(0,$.dQ,$.i)
t.h(0,$.oC,$.i)
r=$.j
q="The "+r+" finds a group of three "
o=$.k
q=q+o+"s "
n=$.x
t.h(0,new R.H("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
p.h(0,new X.q(s,t,null),$.Z)},
gK:function(){return this.cx}}
N.Q.prototype={
w:function(a){return H.p(new H.cD(H.mP(this),null))+": "+H.p(this.b)}}
O.dX.prototype={}
O.iK.prototype={
$1:function(a){return"."+H.p(a)},
$S:function(){return{func:1,args:[P.B]}}}
O.iL.prototype={
$1:function(a){var t=0,s=P.nf(),r,q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$$1=P.o4(function(b,c){if(b===1)return P.nZ(c,s)
while(true)switch(t){case 0:p=q.c
if(J.pW(p).length===0){t=1
break}o=p.files,n=o.length,m=q.a,l=q.b,k=0
case 3:if(!(k<o.length)){t=5
break}j=o[k]
i=0
case 6:if(!(i<1)){t=8
break}h=m[i]
t=9
return P.nY(h.bC(j),$async$$1)
case 9:g=c
t=g!=null?10:11
break
case 10:f=l
t=12
return P.nY(h.ck(g),$async$$1)
case 12:f.$2(c,j.name)
t=8
break
case 11:case 7:++i
t=6
break
case 8:case 4:o.length===n||(0,H.bW)(o),++k
t=3
break
case 5:p.value=null
case 1:return P.o_(r,s)}})
return P.o0($async$$1,s)},
$S:function(){return{func:1,ret:P.bb,args:[W.z]}}}
O.iM.prototype={
$1:function(a){return J.pQ(this.a)},
$S:function(){return{func:1,args:[W.z]}}}
O.ez.prototype={
bC:function(a){var t=0,s=P.nf(),r,q,p
var $async$bC=P.o4(function(b,c){if(b===1)return P.nZ(c,s)
while(true)switch(t){case 0:q=new FileReader()
q.readAsArrayBuffer(a)
p=new W.fM(q,"load",!1,[W.uL])
t=3
return P.nY(p.gac(p),$async$bC)
case 3:if(!!J.a1(C.p.gdC(q)).$isnS){r=H.ex(C.p.gdC(q),"$isnS").buffer
t=1
break}t=1
break
case 1:return P.o_(r,s)}})
return P.o0($async$bC,s)},
$asdX:function(a){return[a,P.cH]}}
Z.iR.prototype={
$1:function(a){$.$get$no().l(0,a).ghD()
return!1},
$S:function(){return{func:1,args:[P.B]}}}
Z.ig.prototype={}
E.eW.prototype={}
E.jZ.prototype={}
E.A.prototype={
w:function(a){var t="["+H.p(this.a)+" x "+H.p(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.dH.prototype={
w:function(a){var t="[(Random from "+P.nz(this.d,"(",")")+") x "+H.p(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gK:function(){return this.d}}
E.h3.prototype={
w:function(a){return"[Stats assigned from player Interests x"+H.p(this.b)+"]"}}
Y.iS.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("How to Teach Your Friends to Hack SBURB",H.a([$.a7,$.E,$.O,$.a5,$.jc],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Unstable Domino",H.a([$.av,$.E,$.b4],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Exposed Thread",H.a([$.a9,$.E,$.b4],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Teetering Plate",H.a([$.ny,$.E,$.b4],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.nn,$.i)
t.h(0,$.aL,$.f)
t.h(0,$.c2,$.y)
t.h(0,$.bN,$.f)
r=$.k
q="An excited "+r+" runs up to the "
p=$.j
q=q+p+" and starts to "
o=$.x
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.a0
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.S
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.n
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.h(0,new R.D("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.K(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
o=$.j
t.h(0,new R.P("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.n+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.k+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.m(),!1,!1,new Y.c7("Rewards/no_reward.png",null),1,null,null),$.o)
o=$.k
j="Now that the "+o+"s are free from the reign of "+$.n+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.j
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.x
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.a0+" Quest Online: The "+$.S+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.fy
t.h(0,new R.P("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.o)
p="The "+$.n+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.j
p=p+o+" shows the "
r=$.k
t.h(0,new R.as("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.x+"s in time to stop them.    ")],H.a([],i),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
this.x.h(0,new X.q(s,t,null),$.ay)},
gK:function(){return this.t}}
Y.iT.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Sherpa Parka",H.a([$.cq,$.E,$.f3],s),"Clearly the best class uses this.",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Guide Book",H.a([$.a5,$.cq,$.a7,$.O,$.E,$.aq],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Whistle",H.a([$.U,$.E,$.ct],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Announcement System",H.a([$.U,$.E,$.aD,$.aq],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.nn,$.f)
t.h(0,$.aL,$.f)
t.h(0,$.c2,$.i)
t.h(0,$.bN,$.f)
r="Now that the "+$.n+" is out of the way, a group of "
q=$.k
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.j
o=[U.b]
t.h(0,new R.P("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.x+", but they are happy.")],H.a([],o),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
q="The "+$.n+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.j
t.h(0,new R.as("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.k+" "+$.x+"s in time to stop them.    ")],H.a([],o),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
this.x.h(0,new X.q(s,t,null),$.ay)}}
T.iU.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Doll",H.a([$.ny,$.aV,$.bG,$.G],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Puppet",H.a([$.ax,$.bG,$.G,$.a5,$.bF],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Mirror",H.a([$.oS,$.G],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Shipping Grid",H.a([$.O,$.G,$.cN],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Shades",H.a([$.aU,$.bl,$.G],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.da,$.y)
q.h(0,$.db,$.f)
q.h(0,$.aS,$.i)
p=$.j
o="The "+p+", guided by a "+$.k+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.n
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.aN+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.h(0,new R.D("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.K(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
j=$.j
p="The "+j+" finds a Violent "
l=$.k
p=p+l+". A Magical Talking "
k=$.S
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.n
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.h(0,new R.D("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.K(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.nL(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
h=this.f
h.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.b1,$.f)
s.h(0,$.iF,$.f)
s.h(0,$.dW,$.i)
s.h(0,$.aI,$.f)
s.h(0,$.b2,$.i)
s.h(0,$.c2,$.y)
p=$.j
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.S
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.n
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.aN+". The "+p+" is victorious. "
s.h(0,new R.D("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.K(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
j="Now that the "+$.n+" has been defeated, a Copy "
p=$.j
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.k
j=j+k+"s "
l=$.x
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.de+" knows who they are, and their confidence is turned into a pink lightning attack."
s.h(0,new R.P("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.cy(),!1,!1,new Y.aG("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
p=$.j
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.n
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.h(0,new R.D("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.K(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.cW(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
h.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.iD,$.f)
t.h(0,$.b2,$.f)
t.h(0,$.nm,$.f)
t.h(0,$.dP,$.i)
t.h(0,$.eP,$.f)
t.h(0,$.bi,$.i)
t.h(0,$.db,$.y)
r=$.j
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.k
t.h(0,new R.D("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.x+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.a0+" laws put in place by "+$.n+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
r=$.j
p="The "+r+" finds a weeping Broken Hearted "
q=$.k
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.a0
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.x
t.h(0,new R.P("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.eb(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.f)
q=$.j
m="The "+q+"  and the "
r=$.cY
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.n
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.h(0,new R.D("Flushed Shipping Dungeon",!1,[new U.b(m),new U.K(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.p(C.l)+".",n)],H.a([],i),R.cX(),!1,!1,new Y.eU(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.X)
n=$.j
r="The "+n+"  and the "
q=$.cY
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.n
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.h(0,new R.D("Pitched Shipping Dungeon",!1,[new U.b(r),new U.K(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.p(C.l)+".",m)],H.a([],i),R.cX(),!1,!1,new Y.fr(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.X)
h.h(0,new X.q(s,t,null),$.Z)},
gaa:function(){return this.m},
gK:function(){return this.T}}
B.iV.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Family Ashes",H.a([$.b5,$.cu,$.E,$.b4,$.nu],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Last Will and Testament",H.a([$.a5,$.O,$.E,$.b4,$.nv],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Grooming Guide",H.a([$.a7,$.E,$.az],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Powered Attorney",H.a([$.rb,$.E,$.nq,$.nv],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Executer's Ax",H.a([$.r8,$.E,$.dg,$.nv],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.aP,$.i)
r=$.n
q="With the death of the "+r+", it now falls to the "
p=$.j
o=[U.b]
t.h(0,new R.P("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.k+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
r="The "+$.n+" has released the frogs into the "
p=$.j
t.h(0,new R.as("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.k+"s 'help' by "+$.x+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
this.x.h(0,new X.q(s,t,null),$.ay)}}
X.iW.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Wand",H.a([$.ax,$.G,$.aC,$.bv],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Angel Feather",H.a([$.bv,$.j6,$.G,$.cs,$.bd,$.a5,$.aC],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Never Ending Story DVD",H.a([$.oV,$.oQ,$.G,$.aC,$.bP,$.bv],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Candle",H.a([$.bv,$.cs,$.G,$.cu],s),null,!1,"Dying Light Stick")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Fairy Figurine",H.a([$.av,$.cs,$.G,$.bv],s),null,!1,"Tiny Petrified Tinkerbell")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.ow,$.f)
q.h(0,$.bi,$.i)
q.h(0,$.a4,$.f)
q.h(0,$.b8,$.f)
p=$.j
o="The "+p+" is just minding their own business when they see a wizened "
n=$.k
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.x+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.n
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.S
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.rL
i=[U.b]
q.h(0,new R.D("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.K(k,p,j)],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.o)
n=this.f
n.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aK,$.f)
s.h(0,$.ni,$.i)
s.h(0,$.bC,$.f)
p=$.j
o="The "+p+"  is approached by a Crafty "
m=$.k
o=o+m+" who offers them a magical "
l=$.S
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.n
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.h(0,new R.D("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.K(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
n.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.a4,$.f)
t.h(0,$.c3,$.y)
t.h(0,$.b9,$.f)
t.h(0,$.b8,$.f)
r=$.j
q="The "+r+" finds a grey town of despondant "
p=$.k
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.n
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.S
t.h(0,new R.D("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.K("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
r=$.j
o="The "+r+" discovers a group of "
p=$.k
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.n
t.h(0,new R.D("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.K("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.eb(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
n.h(0,new X.q(s,t,null),$.Y)},
gaa:function(){return this.m},
gK:function(){return this.G}}
X.iX.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Footstick",H.a([$.cO,$.E,$.nx,$.a5],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("SBURBSim Cheating Guide",H.a([$.a7,$.E,$.jc,$.O],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Body Pillow of Shogun",H.a([$.a9,$.E,$.f4,$.oR,$.bj],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Macrobots",H.a([$.oU,$.E,$.nq],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.ba,$.f)
t.h(0,$.bC,$.f)
t.h(0,$.c1,$.f)
t.h(0,$.bN,$.f)
t.h(0,$.d8,$.f)
t.h(0,$.dR,$.f)
t.h(0,$.eO,$.i)
r=$.j
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.k
o=[U.b]
t.h(0,new R.H("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.nM(),!1,!1,new Y.c7("Rewards/no_reward.png",null),1,null,null),$.o)
r=$.n
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.j
n=q+" tries to manually separate the turtles by catching them with a net and "+$.aN+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.x
t.h(0,new R.D("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.K(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.p4(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
q=$.j
t.h(0,new R.H("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.m(),!1,!1,new Y.c7("Rewards/no_reward.png",null),1,null,null),$.o)
q="A wizened "+$.k+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.j
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.n
t.h(0,new R.D("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.X)
m=$.j
t.h(0,new R.D("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.k+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.n+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.X)
m="A wizened "+$.k+" tells the "
r=$.j
t.h(0,new R.P("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.m(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
r="A "+$.k+" that is also a SHOGUN minion tells the "
m=$.j
t.h(0,new R.P("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.p5(),!1,!1,new Y.aG("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
m=$.j
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.fy
t.h(0,new R.P("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.y)
n=$.n
m="The "+n+" explains um. What? Where did the "
q=$.j
t.h(0,new R.as("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.k+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
this.x.h(0,new X.q(s,t,null),$.Y)},
gK:function(){return this.A}}
B.j2.prototype={
$1:function(a){return!a.gbb()},
$S:function(){return{func:1,args:[B.cp]}}}
B.cp.prototype={
B:function(){var t,s
t=Q.u(null,null,A.M)
s=A.e("Perfectly Generic Object",H.a([],[G.L]),null,!1,"The Third Entry for This Fucking Block")
C.a.j(t.b,new Q.d(s,t.k(s,1),[H.v(t,0)]))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bB,$.f)
q.h(0,$.ao,$.y)
q.h(0,$.cn,$.f)
q.h(0,$.aI,$.i)
q.h(0,$.d9,$.y)
p=$.j
o="The "+p+" learns that all of the local "
n=$.k
m=[U.b]
q.h(0,new R.H("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.x+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.m(),!1,!1,new Y.aG(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.o)
n=this.r
n.h(0,new X.q(s,q,null),$.Z)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dU,$.f)
s.h(0,$.dS,$.y)
s.h(0,$.dT,$.i)
s.h(0,$.bt,$.f)
s.h(0,$.aP,$.y)
p=$.j
o="The "+p+" learns that all of the local "
l=$.k
s.h(0,new R.H("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.x+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.m(),!1,!1,new Y.aG(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.o)
n.h(0,new X.q(q,s,null),$.Z)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.a4,$.f)
t.h(0,$.ao,$.y)
t.h(0,$.aL,$.i)
r=$.j
q="The "+r+" learns that all of the local "
p=$.k
t.h(0,new R.H("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.m(),!1,!1,new Y.aG(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.o)
p=$.j
r="The "+p+" learns that all of the local "
q=$.k
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.x
t.h(0,new R.H("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.nK(),!1,!1,new Y.aG(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
n.h(0,new X.q(s,t,null),$.Z)},
w:function(a){return this.ch},
gbb:function(){return this.a},
gK:function(){return this.c},
gE:function(a){return this.ch}}
A.M.prototype={
aB:function(a,b){var t=b.gcj()-this.gcj()
if(t>0)t=1
else if(t<0)t=-1
return C.b.a2(t)},
gfs:function(){var t,s,r,q,p,o,n
t=H.a([],[P.B])
s=new A.fs(null,null)
s.cF(this.f.a)
if(this.r===0)return t
r=P.cv(G.qw(this.f),!0,G.L)
C.a.aY(r,new A.jh())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bW)(r),++p){o=r[p]
n=o.gfq()
n=n.gZ(n)
if(!n)t.push(" "+Y.uf(s.fZ(o.gfq())))}return t},
gcj:function(){var t,s,r
for(t=this.f,s=new P.by(t,t.r,null,null,[null]),s.c=t.e,r=0;s.D();)r+=s.d.gcj()
return r},
gfj:function(){var t=this.f
return new H.bx(t,new A.jg(),[H.v(t,0)])},
gfC:function(){var t,s,r,q,p
for(t=this.gfs(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bW)(t),++q)r+=t[q]+" "
return r+this.d},
w:function(a){return this.gfC()},
ea:function(a,b,c,d,e){var t,s,r
t=P.nE(b,null)
this.f=t
if(t.a===0)t.j(0,$.rj)
s=P.nE(this.gfj(),null)
for(t=new P.by(s,s.r,null,null,[null]),t.c=s.e;t.D();){r=t.d
this.f.b2(0,r.ge3())
this.f.a4(0,r)}$.$get$oX().push(this)},
$isaF:1,
$asaF:function(){return[A.M]}}
A.jh.prototype={
$2:function(a,b){return a.gfW().ay(0,b.gfW().a2(0))},
$S:function(){return{func:1,args:[G.L,G.L]}}}
A.jg.prototype={
$1:function(a){return!1},
$S:function(){return{func:1,args:[G.L]}}}
N.jl.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Gavel",H.a([$.ax,$.rl],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Caution Tape",H.a([$.av,$.f6],s),null,!1,"Impassible Barrier")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Deerstalker Hat",H.a([$.a9,$.aV],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Mystery Novel",H.a([$.O,$.a7],s),null,!1,"Book where the Criminal was the Janitor")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Dish Served Cold",H.a([$.ns,$.cr,$.cq],s),null,!1,"REVENGE")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Pony Pals: Detective Pony ",H.a([$.O,$.a7,$.aU],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Handcuffs",H.a([$.b5,$.U,$.f6],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.eL,$.y)
q.h(0,$.aK,$.i)
q.h(0,$.b9,$.y)
p=$.j
o="The "+p+" finds an elaborate courtroom full of "+$.x+"ing "
n=$.k
m=[U.b]
q.h(0,new R.H("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.S+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
n=this.r
n.h(0,new X.q(s,q,null),$.Z)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aK,$.f)
s.h(0,$.c2,$.i)
s.h(0,$.bt,$.i)
p=$.j
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.k
l=o+l+" yells 'Stop that thief' in betwen "+$.x+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.S+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.rH
s.h(0,new R.H("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.m(),!1,!1,new Y.bn("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.o)
n.h(0,new X.q(q,s,null),$.Z)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aK,$.f)
t.h(0,$.aP,$.i)
t.h(0,$.bM,$.y)
t.h(0,$.dc,$.i)
t.h(0,$.da,$.i)
t.h(0,$.dV,$.i)
t.h(0,$.iG,$.i)
r=$.j
q="The "+r+" finds a crowd of "
p=$.x
q=q+p+"ing "
o=$.k
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.rU
t.h(0,new R.H("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.m(),!1,!1,new Y.bn("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.o)
n.h(0,new X.q(s,t,null),$.Z)},
gK:function(){return this.cx}}
S.jn.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Shining Armor",H.a([$.b5,$.nw,$.E,$.jb],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Excalibur",H.a([$.a5,$.nw,$.E,$.f5,$.dg,$.jd],s),"Knight Shit",!1,"Masamune")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Noble Steed",H.a([$.U,$.E,$.di,$.bG],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Hero's Shield",H.a([$.b5,$.jb,$.E,$.nw],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.nk,$.f)
t.h(0,$.cl,$.f)
t.h(0,$.cL,$.f)
t.h(0,$.dV,$.f)
t.h(0,$.eL,$.i)
r="The "+$.n+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.j
p=[U.b]
t.h(0,new R.as("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.k+"s 'help' by "+$.x+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
q=$.n
r="Now that the "+q+" is defeated, the "
o=$.k
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.j
t.h(0,new R.P("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
o=$.a0
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.n
n=n+q+". A Learned "+$.k+" explains that it can only be defeated by the Legendary "
r=$.S
n=n+r+" Blade. The "
m=$.j
t.h(0,new R.P("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
r="The volcanos of the land are weirdly active after the defeat of the "+$.n+". One begins to erupt near a "
m=$.k
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.x+"s, but not really doing anything to evacuate or save anyone. The "
o=$.j
t.h(0,new R.P("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
this.x.h(0,new X.q(s,t,null),$.ay)}}
Q.jp.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Dream Diary",H.a([$.O,$.a7,$.G],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Interlocking Brick",H.a([$.av,$.b3,$.aT,$.G,$.a5],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Art Supplies",H.a([$.av,$.b3,$.G],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.d8,$.i)
q.h(0,$.c1,$.f)
q.h(0,$.a4,$.i)
q.h(0,$.iI,$.i)
p=$.k
o="A "+p+" child tugs on the "
n=$.j
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.S
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.n
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.x+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.p_
k=[U.b]
q.h(0,new R.D("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.K(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.o)
l=this.f
l.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aP,$.i)
s.h(0,$.c1,$.f)
s.h(0,$.bC,$.i)
s.h(0,$.b8,$.i)
s.h(0,$.dR,$.i)
s.h(0,$.b1,$.f)
p=$.j
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.k
n=n+m+"s are even starting to snigger and "
j=$.x
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.n
s.h(0,new R.D("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.K("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
l.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.cm,$.f)
t.h(0,$.iE,$.i)
t.h(0,$.a4,$.i)
t.h(0,$.b8,$.f)
t.h(0,$.dR,$.f)
t.h(0,$.c1,$.i)
r=$.j
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.n
t.h(0,new R.D("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.a0+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.k+" is "+$.x+"ing in reverse. Another is in a "+$.S+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.K("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
l.h(0,new X.q(s,t,null),$.Y)},
gaa:function(){return this.m},
gK:function(){return this.T}}
K.jq.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Creeping Vine",H.a([$.ax,$.G,$.e_,$.bG],s),null,!1,"Sentient Plant Tentacles")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Lollipop",H.a([$.oJ,$.G,$.bE],s),null,!1,"Sentient Plant Tentacles")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Golem",H.a([$.b5,$.f8,$.G,$.bG],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Ectoplasm",H.a([$.nu,$.G,$.bE],s),null,!1,"Ghost [Censored]")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Aqua Vitae",H.a([$.bl,$.G,$.bE,$.a5,$.aC],s),null,!1,"Tears of JR")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Homunculus",H.a([$.di,$.G,$.bG],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aL,$.f)
q.h(0,$.ao,$.f)
q.h(0,$.eM,$.y)
q.h(0,$.a4,$.i)
q.h(0,$.nn,$.i)
q.h(0,$.ba,$.y)
p=$.j
o="The "+p+" finds a village of compliant "
n=$.k
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.x+"ing in panic. Don't upset "
m=$.n
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.h(0,new R.D("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.K(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
n=this.f
n.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aL,$.f)
s.h(0,$.b2,$.f)
s.h(0,$.ba,$.y)
s.h(0,$.a4,$.i)
o=$.j
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.k
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.n
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.h(0,new R.D("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.K(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
n.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bB,$.f)
t.h(0,$.ao,$.y)
t.h(0,$.cn,$.f)
t.h(0,$.aI,$.i)
t.h(0,$.d9,$.i)
t.h(0,$.ng,$.i)
r="Drawn by wailing and "+$.x+"ing, the "
q=$.j
r=r+q+" enters a rotting "
o=$.k
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.n
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.h(0,new R.D("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.K(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
n.h(0,new X.q(s,t,null),$.Y)},
gaa:function(){return this.m},
gK:function(){return this.G}}
G.jr.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("FAQ",H.a([$.aD,$.G,$.aq,$.j8],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Flashlight",H.a([$.av,$.G,$.cs,$.aD,$.j8],s),null,!1,"Tube of Localised Sun")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Octet",H.a([$.G,$.cs,$.j8,$.a5,$.oM],s),null,!1,"D13")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Horseshoe",H.a([$.rm,$.G,$.aT],s),null,!1,"Horse Sneaker")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Rabbits Foot",H.a([$.rw,$.G],s),null,!1,"Rabbit Remains")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("4 Leaf Clover",H.a([$.e_,$.G,$.cs,$.j8],s),null,!1,"Plant of Luck +4")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("8-Ball",H.a([$.bl,$.G,$.bG],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.oB,$.f)
q.h(0,$.d8,$.i)
q.h(0,$.ck,$.f)
q.h(0,$.db,$.f)
p=$.j
o="The "+p+" is searching for the lair of "
n=$.n
o=o+n+" when some local "
m=$.k
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.b]
q.h(0,new R.D("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.K(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
m=$.j
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.x+"ing "+$.k+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.n
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.h(0,new R.D("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.K(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
m=this.f
m.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aL,$.i)
s.h(0,$.a4,$.i)
s.h(0,$.c3,$.f)
s.h(0,$.oA,$.f)
s.h(0,$.dS,$.f)
s.h(0,$.ni,$.f)
p=$.j
o="The "+p+" walks into a "
n=$.k
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.S
o=o+l+", but "
k=$.n
o=o+k+" has hoarded all of the planets "
j=$.a0
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.x+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.h(0,new R.D("The Candlestick Taker",!1,[new U.b(l),new U.b(o),new U.b(h),new U.K(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.nL(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
n=$.j
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.k
j=j+k+" explains that the "
h=$.n
s.h(0,new R.D("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.b("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.x+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.K("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
m.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.eN,$.i)
q.h(0,$.ao,$.i)
q.h(0,$.eR,$.f)
q.h(0,$.a4,$.i)
q.h(0,$.b9,$.f)
p="Now that the "+$.n+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.j
p=p+o+" sets up a wiki and settles in to help the "
n=$.k
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.de+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.h(0,new R.P("Moderate the Wiki",!1,[new U.b(p),new U.b(n),new U.b(o)],H.a([],i),R.cy(),!1,!1,new Y.aG("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
l="Now that the "+$.n+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.j
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.k
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.de+" allows you to make you own assumptions about things, and be destroyed by them."
q.h(0,new R.P("Create the Wiki",!1,[new U.b(l),new U.b(n),new U.b(o)],H.a([],i),R.cW(),!1,!1,new Y.aG("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
p=$.k
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.j
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.n
q.h(0,new R.D("Shed the Light",!1,[new U.b(o),new U.b(p),new U.b(l),new U.K(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
m.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ck,$.f)
t.h(0,$.oB,$.f)
t.h(0,$.db,$.i)
t.h(0,$.bi,$.i)
t.h(0,$.oz,$.i)
t.h(0,$.aI,$.y)
t.h(0,$.cL,$.y)
t.h(0,$.aS,$.i)
t.h(0,$.b1,$.y)
t.h(0,$.ao,$.i)
t.h(0,$.b7,$.f)
s=$.j
r="The "+s+" is approached by a Fast Talking "
p=$.k
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.S
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.x+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.n
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.h(0,new R.D("Be the Star",!1,[new U.b(r),new U.b(n),new U.b(p),new U.K(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
o="After the "+$.n+", the "
s=$.j
o=o+s+" is disappointed to learn that barely any of the "
l=$.k
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.de+" is famous, and everyone in this fight is lucky to have met them."
t.h(0,new R.P("Be the Biggest Star in Paradox Space",!1,[new U.b(o),new U.b(l),new U.b(s)],H.a([],i),R.cy(),!1,!1,new Y.aG("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
m.h(0,new X.q(q,t,null),$.Y)},
gaa:function(){return this.m},
gK:function(){return this.G}}
Z.jx.prototype={
B:function(){var t,s,r,q
t=this.J
s=[G.L]
r=A.e("Dream Bubbles Book",H.a([$.O,$.az,$.a7,$.rf],s),null,!1,null)
C.a.j(t.b,new Q.d(r,t.k(r,1),[H.v(t,0)]))
t=Q.u(null,null,A.M)
r=A.e("Uno Reverse Card",H.a([$.oK,$.nx,$.az],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Lord's Cape",H.a([$.a9,$.E,$.az],s),"Lord Shit",!1,"Shoguns Cape")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Drawing Tablet",H.a([$.jc,$.E,$.az],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("How to Make Friends And Influence People",H.a([$.a5,$.O,$.E,$.dh,$.a7],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bM,$.y)
q.h(0,$.dc,$.y)
q.h(0,$.aI,$.y)
q.h(0,$.bt,$.i)
p="The "+$.n+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.j
p=p+o+" comands that the "
n=$.k
m=[U.b]
q.h(0,new R.as("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.x+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
o="As soon as the "+$.n+" is defeated, the "
n=$.k
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.j
q.h(0,new R.P("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
p=this.x
p.h(0,new X.q(s,q,null),$.ay)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.qD,$.f)
t.h(0,$.b8,$.f)
t.h(0,$.ao,$.f)
t.h(0,$.a4,$.i)
s="The "+$.n+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.j
s=s+r+" comands that the "
o=$.k
t.h(0,new R.as("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.x+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
r="As soon as the "+$.n+" is defeated, the "
o=$.k
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.j
t.h(0,new R.P("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",this.J,"Rewards/no_reward.png",null),1,null,null),$.o)
p.h(0,new X.q(q,t,null),$.ay)},
gK:function(){return this.G}}
S.jy.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Alternate Costume",H.a([$.a9,$.E,$.aC,$.a5,$.bu],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Mage's Cape",H.a([$.a9,$.E,$.aC],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Mage's Staff",H.a([$.ax,$.E,$.aT,$.aC,$.cO],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Walking Broom",H.a([$.nr,$.ax,$.E,$.bG,$.aC,$.cO],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.dQ,$.f)
t.h(0,$.dV,$.i)
t.h(0,$.aP,$.f)
t.h(0,$.dT,$.i)
t.h(0,$.bB,$.y)
r="The "+$.n+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.j
p=[U.b]
t.h(0,new R.as("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
q=$.j
t.h(0,new R.P("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.m(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.o)
q=$.j
r="The "+q+" is feeling quite pleased with their victory over the "+$.n+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.a0
t.h(0,new R.P("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.m(),!1,!1,new Y.aG(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.o)
q="Now that the "+$.n+" has been defeated, the "
o=$.k
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.j
q=q+r+"'s help in planning the brand new city of "
n=$.a0
t.h(0,new R.P("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.x+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.m(),!1,!1,new Y.aG(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.o)
this.x.h(0,new X.q(s,t,null),$.ay)},
gK:function(){return this.A}}
U.jz.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Maiden's Breath",H.a([$.e_,$.E,$.aV],s),null,!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Feather Duster",H.a([$.ax,$.E,$.cO,$.j6],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Valkyrie Shield",H.a([$.aV,$.b5,$.U,$.E,$.a5,$.jb,$.r6],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Maiden's Songbook",H.a([$.O,$.E,$.bd,$.a7],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.bN,$.f)
t.h(0,$.aL,$.f)
t.h(0,$.a4,$.i)
t.h(0,$.ao,$.i)
t.h(0,$.c3,$.i)
t.h(0,$.b1,$.i)
r="The "+$.n+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.j
r=r+q+" asks local  "
p=$.k
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.x
n=[U.b]
t.h(0,new R.as("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
q=$.j
o="The "+q+" has adopted a local "
p=$.k
t.h(0,new R.P("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.x+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.n+". ")],H.a([],n),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
this.x.h(0,new X.q(s,t,null),$.ay)}}
V.jJ.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Puzzle Box",H.a([$.ax,$.G,$.aC],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Tesla Coil",H.a([$.aD,$.G,$.U],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Coin",H.a([$.U,$.G],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Electronic Door",H.a([$.U,$.G,$.aD,$.aq],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Janus Bust",H.a([$.b5,$.oI,$.f8,$.az,$.G,$.a5,$.aD],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.b8,$.i)
q.h(0,$.d8,$.y)
q.h(0,$.b9,$.y)
p=$.j
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.k
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.n
k=[U.b]
q.h(0,new R.D("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.K(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.dq(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
n=$.j
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.k+" explains that at the end of the Labrinth is the "
l=$.n
q.h(0,new R.D("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.K("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
n=this.f
n.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.eL,$.y)
s.h(0,$.aK,$.i)
s.h(0,$.b9,$.y)
s.h(0,$.b8,$.y)
p=$.n
o="The "+p+" has commited a staggering amount of crimes against the local "+$.k+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.j
s.h(0,new R.D("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.K("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
n.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.iH,$.f)
t.h(0,$.ao,$.i)
t.h(0,$.eR,$.f)
t.h(0,$.a4,$.i)
t.h(0,$.b9,$.f)
r=$.j
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.n
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.S+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.h(0,new R.D("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.K(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
n.h(0,new X.q(s,t,null),$.Y)},
gaa:function(){return this.m},
gK:function(){return this.G}}
E.jK.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Feather Pen",H.a([$.U,$.E,$.az,$.j6],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Half Finished Bust of Snoop Dog",H.a([$.rs,$.E,$.oI,$.aT,$.a5],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Book of Poetry",H.a([$.O,$.E,$.az,$.a7],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.bN,$.f)
t.h(0,$.aL,$.f)
t.h(0,$.a4,$.i)
t.h(0,$.ao,$.i)
t.h(0,$.c3,$.i)
t.h(0,$.b1,$.i)
r="The "+$.n+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.j
r=r+q+" asks the "
p=$.k
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.x
n=[U.b]
t.h(0,new R.as("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
q="You'd think after the dramatic defeat of the "+$.n+" the "
o=$.k
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.j
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.S
t.h(0,new R.P("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
this.x.h(0,new X.q(s,t,null),$.ay)},
gK:function(){return this.A}}
F.jL.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Piano",H.a([$.aT,$.ax,$.bd,$.az],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Flute",H.a([$.U,$.bd],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Microphone",H.a([$.ct,$.aD],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Violin",H.a([$.ax,$.bd],s),null,!1,"Tiny Cello")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Sheet Music",H.a([$.O,$.bd],s),null,!1,"Cheat Codes for Instruments")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Electric Guitar",H.a([$.av,$.bd,$.aD,$.ct,$.aU],s),null,!1,"Electrical Stringed Music Maker")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Turn Tables",H.a([$.av,$.bd,$.aD,$.aU],s),null,!1,"Spinning Disc Sound Maker")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Guitar",H.a([$.ax,$.bd],s),null,!1,"String Music Maker")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bi,$.X)
q.h(0,$.oz,$.f)
q.h(0,$.db,$.f)
q.h(0,$.c3,$.i)
q.h(0,$.a4,$.i)
q.h(0,$.nh,$.i)
p=$.j
o="The "+p+" meets a wise old "+$.k+" who tells that the "+$.n+" can only be awoken by the Legendary Hero playing the "
n=$.a0
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.S
k=[U.b]
q.h(0,new R.H("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
p=$.j
n="The "+p+" finds an empty, trashed "
l=$.a0
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.S+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.x+"ing "+$.k+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.rN
q.h(0,new R.H("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.m(),!1,!1,new Y.bn("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.o)
p=this.r
p.h(0,new X.q(s,q,null),$.Z)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.oD,$.X)
s.h(0,$.c2,$.i)
s.h(0,$.bt,$.i)
s.h(0,$.c3,$.f)
s.h(0,$.nh,$.X)
o=$.j
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.a0
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.n
s.h(0,new R.H("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.S+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
p.h(0,new X.q(q,s,null),$.Z)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.eM,$.X)
t.h(0,$.aS,$.i)
t.h(0,$.cn,$.i)
r=$.j
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.k
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.x
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.a0+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.h(0,new R.H("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.o)
p.h(0,new X.q(s,t,null),$.Z)},
gK:function(){return this.cx}}
V.k3.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Shorts",H.a([$.a9,$.E,$.dZ,$.a5],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Sidekick Figurine",H.a([$.av,$.E,$.aU],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Steroids",H.a([$.cr,$.E,$.aC],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.nk,$.f)
t.h(0,$.ba,$.i)
t.h(0,$.eQ,$.i)
t.h(0,$.nm,$.i)
t.h(0,$.bN,$.i)
t.h(0,$.ao,$.i)
t.h(0,$.d9,$.i)
t.h(0,$.dS,$.i)
t.h(0,$.qG,$.i)
t.h(0,$.ng,$.i)
t.h(0,$.oA,$.i)
r="The "+$.n+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.j
r=r+q+" asks the "
p=$.k
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.x
n=[U.b]
t.h(0,new R.as("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
q=$.j
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.k+" named Professor "
p=$.x
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.S
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.n
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.h(0,new R.D("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.K(k,"The "+q+" whited out...",m)],H.a([],n),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
m="Now that the "+$.n+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.j
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.k
t.h(0,new R.P("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.a0+" buffs. With a deafening "+$.x+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.m(),!1,!1,new Y.eG("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
this.x.h(0,new X.q(s,t,null),$.ay)}}
G.k8.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Superhero Action Figure",H.a([$.av,$.aU,$.bk],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Action DVD",H.a([$.av,$.aU],s),null,!1,"Shogun The Movie")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Ghost Busters DVD",H.a([$.av,$.nu],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Snow Dogs DVD",H.a([$.av,$.bP,$.cq,$.f3],s),null,!1,"Snow Buddies Anthology")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Skateboarding Video Game",H.a([$.av,$.aU],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Movie Poster",H.a([$.O,$.aU],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Audrey II Plush",H.a([$.e_,$.aU,$.a9,$.bG],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Peashooter Toy",H.a([$.e_,$.f7,$.aU,$.a9],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Shitty Sword",H.a([$.bk,$.U,$.aU,$.jd,$.dg,$.oV],s),"So. Shitty.",!1,"Perfect Weapon")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("GameBro Magazine",H.a([$.O,$.aU],s),"5/5 hats.",!1,"Nerd Magazine")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("GameGrl Magazine",H.a([$.O,$.aU],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.b1,$.i)
q.h(0,$.b7,$.i)
q.h(0,$.aS,$.f)
q.h(0,$.ba,$.X)
q.h(0,$.bC,$.X)
p=$.j
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.k
o=o+n+" manages to catch a video of it, and it goes viral on "+$.a0+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.x+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.rO
l=[U.b]
q.h(0,new R.H("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.m(),!1,!1,new Y.bn("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.o)
p=this.r
p.h(0,new X.q(s,q,null),$.Z)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.da,$.i)
s.h(0,$.c2,$.i)
s.h(0,$.b7,$.i)
s.h(0,$.aS,$.i)
s.h(0,$.cl,$.f)
o=$.j
n="The "+o+" runs towards an explosion in a local "
m=$.k
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.a0
s.h(0,new R.H("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
p.h(0,new X.q(q,s,null),$.Z)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.b7,$.i)
t.h(0,$.ck,$.f)
t.h(0,$.b2,$.f)
t.h(0,$.cl,$.i)
r=$.j
q="The "+r+" gets a job at the "+$.a0+" Cinema. A new movie, The Lonely "
o=$.S
q=q+o+" is coming out soon, and "
n=$.k
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.x+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.h(0,new R.H("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.o)
p.h(0,new X.q(s,t,null),$.Z)},
gK:function(){return this.cx}}
N.ka.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Feather'd Cap",H.a([$.a9,$.E,$.dZ],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Crown",H.a([$.a5,$.oN,$.E,$.dZ],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Gunpowder",H.a([$.f2,$.E],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.b7,$.i)
t.h(0,$.b8,$.i)
t.h(0,$.cn,$.y)
r="With the closing of the curtain, the "+$.n+" has released the frogs, and yet they are nowhere to be found. The "
q=$.j
p=[U.b]
t.h(0,new R.as("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
q=$.n
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.j
r=r+o+" to get it back to normal. They organize a team of "
n=$.k
t.h(0,new R.P("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.S+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
this.x.h(0,new X.q(s,t,null),$.ay)}}
U.b.prototype={}
U.K.prototype={}
R.kc.prototype={
w:function(a){return H.p(new H.cD(H.mP(this),null))+": "+this.c},
gE:function(a){return this.c}}
R.H.prototype={}
R.D.prototype={}
R.P.prototype={}
R.as.prototype={}
E.kd.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Curtain",H.a([$.a9,$.G,$.bk],s),null,!1,"Show Ender")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Cursed Sword",H.a([$.U,$.jd,$.f5,$.G,$.dg,$.bF,$.bk,$.f1,$.b4],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Megaphone",H.a([$.U,$.ct,$.aD,$.G,$.bk],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Bike Horn",H.a([$.b5,$.U,$.ct,$.dh,$.e0,$.G,$.bk],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Bacchus Wine",H.a([$.cr,$.dh,$.az,$.G,$.a5,$.bk],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Nightmare Fuel",H.a([$.ax,$.G,$.bF,$.cu,$.f2,$.bk],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.iC,$.f)
q.h(0,$.bM,$.f)
q.h(0,$.c2,$.f)
q.h(0,$.bB,$.i)
q.h(0,$.aI,$.i)
q.h(0,$.aP,$.i)
q.h(0,$.aK,$.y)
q.h(0,$.bC,$.i)
q.h(0,$.da,$.f)
q.h(0,$.iG,$.f)
q.h(0,$.dV,$.f)
q.h(0,$.nl,$.f)
q.h(0,$.eM,$.i)
q.h(0,$.dc,$.f)
p=$.j
o="The "+p+" is chilling in a "
n=$.k
o=o+n+" village when a bunch of sentient "
m=$.S
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.n
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.h(0,new R.D("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.K(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.eb(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
h=$.k
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.j
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.n
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.h(0,new R.D("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.K(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
h=this.f
h.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.c3,$.f)
s.h(0,$.aI,$.i)
s.h(0,$.aK,$.f)
s.h(0,$.bi,$.f)
s.h(0,$.b1,$.f)
s.h(0,$.b7,$.i)
s.h(0,$.iF,$.y)
s.h(0,$.bM,$.i)
s.h(0,$.ba,$.f)
s.h(0,$.aS,$.f)
s.h(0,$.bC,$.y)
p=$.x
o="The "+p+"ing and capering "
n=$.k
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.j
o=o+m+" to do a stupid "
l=$.a0
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.n
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.h(0,new R.D("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.K(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
h.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.iC,$.f)
t.h(0,$.bC,$.f)
t.h(0,$.aK,$.f)
t.h(0,$.ba,$.i)
t.h(0,$.b1,$.f)
r=$.j
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.k+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.n+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.h(0,new R.D("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.K(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
h.h(0,new X.q(s,t,null),$.Y)},
gaa:function(){return this.m},
gK:function(){return this.G}}
Y.c7.prototype={}
Y.R.prototype={}
Y.br.prototype={}
Y.aG.prototype={
gE:function(a){return this.c}}
Y.F.prototype={}
Y.eG.prototype={}
Y.at.prototype={}
Y.bn.prototype={}
Y.he.prototype={}
Y.ap.prototype={}
Y.fq.prototype={}
Y.eU.prototype={}
Y.fr.prototype={}
N.kg.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Domino Mask",H.a([$.a9,$.E,$.dZ],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Archery Set",H.a([$.ra,$.E,$.dZ,$.r7],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Gristtorrent Server",H.a([$.a5,$.av,$.aD,$.E,$.aq,$.bu],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.aK,$.f)
t.h(0,$.aP,$.i)
t.h(0,$.cl,$.i)
r="The "+$.n+" cannot release the frogs since the corrupt Noble "
q=$.k
r=r+q+"s have hoarded them. The "
p=$.j
o=[U.b]
t.h(0,new R.as("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
p=$.j
q="The "+p+" learns of the extreme injustices of the "
r=$.k
q=q+r+"s who rose to power during the tyranny of "
n=$.n
t.h(0,new R.P("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
this.x.h(0,new X.q(s,t,null),$.ay)}}
Q.kh.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Red Rose",H.a([$.cN,$.aV],s),null,!1,"Seductive Plant")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Shipping Grid",H.a([$.cN,$.O],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Chocolate Bar",H.a([$.cN,$.cr],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Candelabra",H.a([$.cN,$.cu],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Head Cannon",H.a([$.cN,$.f2,$.U,$.f7],s),"Fuck you for that pun, JR.",!1,null)
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Her Pitch Passions Novel",H.a([$.a7,$.O,$.cN],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.b2,$.f)
q.h(0,$.eQ,$.i)
q.h(0,$.dP,$.i)
q.h(0,$.eP,$.f)
q.h(0,$.bi,$.i)
q.h(0,$.iD,$.y)
p=$.j
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.k
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.S+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.h(0,new R.H("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.o)
p=this.r
p.h(0,new X.q(s,q,null),$.Z)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bi,$.i)
s.h(0,$.ck,$.f)
s.h(0,$.eP,$.f)
s.h(0,$.b2,$.i)
s.h(0,$.db,$.y)
s.h(0,$.iD,$.y)
o=$.k
n="A Romantic "+o+" approaches the "
m=$.j
s.h(0,new R.H("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
p.h(0,new X.q(q,s,null),$.Z)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.iD,$.f)
t.h(0,$.b2,$.f)
t.h(0,$.dP,$.i)
t.h(0,$.nm,$.f)
t.h(0,$.eP,$.f)
t.h(0,$.bi,$.i)
t.h(0,$.db,$.y)
r=$.j
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.k
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.x+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.n+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.rK
t.h(0,new R.H("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.m(),!1,!1,new Y.bn("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.o)
n=$.j
r="The "+n+"  and the "
o=$.cY
t.h(0,new R.H("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.cX(),!1,!1,new Y.eU(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.X)
o=$.j
n="The "+o+"  and the "
r=$.cY
t.h(0,new R.H("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.cX(),!1,!1,new Y.fq(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.X)
r=$.j
o="The "+r+"  and the "
n=$.cY
t.h(0,new R.H("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.cX(),!1,!1,new Y.fr(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.X)
p.h(0,new X.q(s,t,null),$.Z)},
gK:function(){return this.cx}}
T.kj.prototype={
$1:function(a){return!a.gbb()},
$S:function(){return{func:1,args:[T.cA]}}}
T.cA.prototype={
B:function(){var t,s
t=Q.u(null,null,A.M)
s=A.e("Perfectly Generic Object",H.a([],[G.L]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.a.j(t.b,new Q.d(s,t.k(s,1),[H.v(t,0)]))
this.fy=t},
C:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bB,$.f)
q.h(0,$.ao,$.y)
q.h(0,$.cn,$.f)
q.h(0,$.aI,$.i)
q.h(0,$.d9,$.y)
p=$.j
o="The "+p+" learns that all of the local "
n=$.k
m=[U.b]
q.h(0,new R.P("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.x+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
n=this.x
n.h(0,new X.q(s,q,null),$.ay)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dU,$.f)
s.h(0,$.dS,$.y)
s.h(0,$.dT,$.i)
s.h(0,$.bt,$.f)
s.h(0,$.aP,$.y)
p=$.j
o="The "+p+" learns that all of the local "
l=$.k
s.h(0,new R.P("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.x+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
p=$.j
l="The "+p+" learns that all of the local "
o=$.k
s.h(0,new R.P("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.cY+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.x+"ing in amazement. The factory is saved! ")],H.a([],m),R.cX(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.X)
n.h(0,new X.q(q,s,null),$.ay)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.a4,$.f)
t.h(0,$.ao,$.y)
t.h(0,$.aL,$.i)
r=$.j
q="The "+r+" learns that all of the local "
p=$.k
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.x
t.h(0,new R.H("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.nK(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.y)
l=$.j
p="The "+l+" learns that all of the local "
r=$.k
t.h(0,new R.P("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
n.h(0,new X.q(s,t,null),$.ay)},
w:function(a){return this.r},
V:function(a,b,c,d){var t=this.r
this.y=t
this.z=new X.eK("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.eA]),H.a([],[M.dO]))
this.B()
this.C()
if($.$get$c8().a7(this.Q))H.aw("Duplicate class id for "+this.w(0)+": "+this.Q+" is already registered for "+J.bh($.$get$c8().l(0,this.Q))+".")
$.$get$c8().h(0,this.Q,this)},
gE:function(a){return this.r},
gbb:function(){return this.cx},
gK:function(){return this.k3}}
E.kk.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Sage's Robe",H.a([$.a9,$.E,$.bj,$.aq,$.aC,$.a5],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Peer Reviewed Journal",H.a([$.O,$.E,$.a7,$.aq],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Guru Pillow",H.a([$.a9,$.E,$.f4,$.aq],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.eN,$.i)
t.h(0,$.ao,$.i)
t.h(0,$.eR,$.f)
t.h(0,$.a4,$.y)
t.h(0,$.b9,$.f)
r="The "+$.n+" has blocked access to the books for the duration. The "
q=$.j
p=[U.b]
t.h(0,new R.as("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.k+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
q="Now that the "+$.n+" is defeated, it is time to begin recovery efforts. The "
r=$.k
q=q+r+"s ask the "
o=$.j
t.h(0,new R.P("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.x+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
this.x.h(0,new X.q(s,t,null),$.ay)},
gK:function(){return this.v}}
K.kl.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Uno Reverse Card",H.a([$.oK,$.G,$.bk],s),null,!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("JR Body Pillow",H.a([$.f4,$.bj,$.G],s),null,!1,null)
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.iC,$.f)
q.h(0,$.bM,$.f)
q.h(0,$.c2,$.f)
q.h(0,$.bB,$.i)
q.h(0,$.aI,$.i)
q.h(0,$.aP,$.i)
q.h(0,$.aK,$.y)
q.h(0,$.bC,$.i)
q.h(0,$.da,$.f)
q.h(0,$.iG,$.f)
q.h(0,$.dV,$.f)
q.h(0,$.nl,$.f)
q.h(0,$.eM,$.i)
q.h(0,$.dc,$.f)
p=$.j
o="The "+p+" is chilling in a "
n=$.k
o=o+n+" village when a bunch of sentient "
m=$.S
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.n
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.h(0,new R.D("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.K(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.eb(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
h=$.k
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.j
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.n
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.h(0,new R.D("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.K(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
h=this.f
h.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.c3,$.f)
s.h(0,$.aI,$.i)
s.h(0,$.aK,$.f)
s.h(0,$.bi,$.f)
s.h(0,$.b1,$.f)
s.h(0,$.b7,$.i)
s.h(0,$.iF,$.y)
s.h(0,$.bM,$.i)
s.h(0,$.ba,$.f)
s.h(0,$.aS,$.f)
s.h(0,$.bC,$.y)
p=$.x
o="The "+p+"ing and capering "
n=$.k
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.j
o=o+m+" to do a stupid "
l=$.a0
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.n
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.h(0,new R.D("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.K(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
h.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.iC,$.f)
t.h(0,$.bC,$.f)
t.h(0,$.aK,$.f)
t.h(0,$.ba,$.i)
t.h(0,$.b1,$.f)
r=$.j
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.k+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.n+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.h(0,new R.D("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.K(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
h.h(0,new X.q(s,t,null),$.Y)},
gaa:function(){return this.m},
gK:function(){return this.J}}
Y.km.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Walking Stick",H.a([$.ax,$.E,$.cO],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Adorable Girlscout Beret",H.a([$.a9,$.E,$.rg,$.aq,$.a5],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Map",H.a([$.O,$.E,$.aq],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Compass",H.a([$.U,$.E,$.aq,$.aC],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p
t=[P.B]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.bN,$.f)
t.h(0,$.aL,$.f)
t.h(0,$.ao,$.f)
t.h(0,$.aS,$.y)
t.h(0,$.a4,$.y)
r="Now that the "+$.n+" has been defeated, the planet has really opened up. The "
q=$.j
p=[U.b]
t.h(0,new R.P("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.k+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
q="The "+$.n+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.j
t.h(0,new R.as("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.k+" "+$.x+"s in time to stop them.   ")],H.a([],p),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
this.x.h(0,new X.q(s,t,null),$.ay)}}
L.kn.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Scroll",H.a([$.O,$.E,$.aq],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Ink Pot",H.a([$.bl,$.E,$.bu,$.aq],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Blank Book",H.a([$.O,$.E,$.a7,$.aq,$.bu,$.a5],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.nh,$.f)
t.h(0,$.ao,$.f)
t.h(0,$.b9,$.f)
t.h(0,$.a4,$.i)
t.h(0,$.b8,$.i)
r="The "+$.n+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.j
p=[U.b]
t.h(0,new R.as("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
q="Now that the "+$.n+" has been taken care of, the "
r=$.j
q=q+r+" discovers a large library of "
o=$.k
t.h(0,new R.P("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
this.x.h(0,new X.q(s,t,null),$.ay)},
gK:function(){return this.A}}
S.kq.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Cueball",H.a([$.j5,$.ny,$.E,$.aT,$.bG,$.a5],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Crystal Ball",H.a([$.j5,$.rc,$.E,$.cs],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Binoculars",H.a([$.bl,$.E,$.U],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Blindfold",H.a([$.r9,$.E,$.bj],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.qE,$.f)
t.h(0,$.iE,$.f)
t.h(0,$.qC,$.f)
t.h(0,$.ba,$.i)
r="Now that the "+$.n+" has been defeated, the land is really starting to open up. The "
q=$.j
r=r+q+" finds a tunnel filled with Blind "
p=$.k
o=[U.b]
t.h(0,new R.P("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.m(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.o)
q="The "+$.n+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.j
t.h(0,new R.as("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.k+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
p=$.j
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.k
t.h(0,new R.P("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.m(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.o)
r="A group of underlings are still making trouble, even after the defeat of the "+$.n+". The "
p=$.j
r=r+p+" begins planting rumors of a huge "
q=$.S
t.h(0,new R.P("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.m(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.o)
this.x.h(0,new X.q(s,t,null),$.ay)},
gK:function(){return this.v}}
Y.ku.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Meddler's Guide",H.a([$.a7,$.E,$.O,$.dh,$.a5,$.bE],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("First Aid Kit",H.a([$.bl,$.E,$.bE],s),"Heals here.",!1,"Anti-Pain Box")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=$.E
r=A.e("Cloud in a Bottle",H.a([r,r,$.b3],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Fairy Wings",H.a([$.aC,$.E,$.cs,$.aV,$.O],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.ao,$.i)
t.h(0,$.bN,$.f)
t.h(0,$.ba,$.i)
t.h(0,$.a4,$.i)
t.h(0,$.aL,$.f)
r="The defeat of the "+$.n+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.j
p=[U.b]
t.h(0,new R.as("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
q="Now that the "+$.n+" has been taken care of, the "
r=$.j
q=q+r+" finds a long line of "
o=$.k
t.h(0,new R.P("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
this.x.h(0,new X.q(s,t,null),$.ay)},
gK:function(){return this.u}}
N.kv.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Fiduspawn Plush",H.a([$.f3,$.a9,$.bj],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Teddy Bear",H.a([$.f3,$.a9,$.bj],s),null,!1,"Cuddle Bear")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Dice",H.a([$.re,$.av],s),null,!1,"D113")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Pigeon",H.a([$.j6,$.bG,$.di,$.df,$.f1,$.ru],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Cat Ears",H.a([$.a9,$.bj,$.f3],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Religious Text",H.a([$.a7,$.O],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Psychology Book",H.a([$.a7,$.O],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Therapy Couch",H.a([$.bj,$.a9],s),null,!1,"Giant Problem Absorbing Couch")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("FLARP Manual",H.a([$.a7,$.O,$.aq],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cm,$.y)
q.h(0,$.a4,$.i)
q.h(0,$.b8,$.f)
q.h(0,$.b9,$.i)
p=$.j
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.k
m=[U.b]
q.h(0,new R.H("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.a0+" or "+$.S+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.x+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
p=this.r
p.h(0,new X.q(s,q,null),$.Z)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cm,$.y)
s.h(0,$.a4,$.f)
s.h(0,$.b8,$.f)
s.h(0,$.ow,$.f)
s.h(0,$.bi,$.f)
s.h(0,$.oD,$.f)
s.h(0,$.b9,$.i)
o=$.j
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.x
n=n+l+"ing "
k=$.k
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.a0
s.h(0,new R.H("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
p.h(0,new X.q(q,s,null),$.Z)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bt,$.y)
t.h(0,$.ck,$.f)
t.h(0,$.aL,$.f)
t.h(0,$.cl,$.f)
t.h(0,$.eL,$.f)
r=$.j
q="The "+r+" wanders into an entire crowd of "
o=$.k
t.h(0,new R.H("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.x+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
p.h(0,new X.q(s,t,null),$.Z)},
gK:function(){return this.cx}}
N.kx.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Frog Statue",H.a([$.b5,$.f8,$.G],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Frog Costume",H.a([$.a9,$.G],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Nuclear Reactor",H.a([$.j9,$.aq,$.aD,$.G],s),null,!1,"A Representation of My Hatred for Everything")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Telescope",H.a([$.U,$.bl,$.aq,$.G],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Green Sun Poster",H.a([$.O,$.G,$.oO,$.a5],s),"Huh.",!1,"Sauce Sun Poster")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m
t=$.j
s=[P.B]
r=H.a(["Wherever the "+t+" goes, they find a "+$.k+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.x+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.n+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.j
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.k+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.k+" tells the "
p=$.j
t=t+p+" that they must negotiate with "
o=$.n
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.j
p="The "+o+" meets with "
t=$.n
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.ba,$.y)
t.h(0,$.oy,$.f)
s=[U.b]
t.h(0,new R.D("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.X)
t.h(0,new R.D("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.X)
t.h(0,new R.D("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.X)
t.h(0,new R.D("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.X)
t.h(0,new R.D("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.X)
t.h(0,new R.D("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.X)
p=$.j
t.h(0,new R.as("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.k+"s 'help' by "+$.x+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.m(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
this.f.h(0,new X.q(o,t,null),$.tL)},
gaa:function(){return this.m},
gK:function(){return this.G}}
G.fx.prototype={
ck:function(a){var t=0,s=P.nf(),r,q=this,p,o,n,m,l
var $async$ck=P.o4(function(b,c){if(b===1)return P.nZ(c,s)
while(true)switch(t){case 0:p=new B.hb(null,0)
p.a=J.pP(a,0)
for(o=q.b,n=0;n<("SimStat"+o).length;++n)p.aF(8)
m=p.aF(32)
l=H.a([],[E.aO])
for(n=0;n<m;++n)l.push(q.h6(p))
r=l
t=1
break
case 1:return P.o_(r,s)}})
return P.o0($async$ck,s)},
$asez:function(){return[[P.C,E.aO]]},
$asdX:function(){return[[P.C,E.aO],P.cH]}}
G.kA.prototype={
h6:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=T.tF(a.aF(8))
s=L.qm(a.aF(8))
r=B.oE(a.aF(4))
q=B.oE(a.aF(4))
p=a.aF(32)
o=a.cl()
n=P.B
m=P.t
l=P.c5(n,m)
for(k=0;k<o;++k){j=a.cl()
for(i=0,h="";i<j;++i)h+=H.rY(a.aF(8))
g=a.br(a.b);++a.b
f=a.cl()/100
if(g)f*=-1
l.h(0,h.charCodeAt(0)==0?h:h,f)}n=new E.aO(p,t,s,r,q,P.c5(D.cC,m),P.c5(n,m))
n.r=l
return n}}
R.l5.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Meddler's Guide",H.a([$.a7,$.E,$.O,$.dh,$.a5,$.bE],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("First Aid Kit",H.a([$.bl,$.E,$.bE],s),"Heals here.",!1,"Anti-Pain Box")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=$.E
r=A.e("Cloud in a Bottle",H.a([r,r,$.b3],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Fairy Wings",H.a([$.aC,$.E,$.cs,$.aV,$.O],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.b8,$.f)
t.h(0,$.a4,$.f)
t.h(0,$.bN,$.i)
t.h(0,$.eR,$.i)
t.h(0,$.qB,$.i)
t.h(0,$.d9,$.i)
t.h(0,$.ng,$.i)
t.h(0,$.qF,$.i)
r=$.j
q="The "+r+" decides to take a break after defeating "+$.n+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.k
o=[U.b]
t.h(0,new R.P("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.x+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.nM(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.f)
r=$.k
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.j
t.h(0,new R.P("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
r=$.k
q="The "+r+"s are so stressed after all that shit with the "+$.n+". They are yelling and "+$.x+" at each other over the slightest of insults. The "
p=$.j
t.h(0,new R.P("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
p="The "+$.n+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.j
p=p+r+" purifies the pools "
q=$.k
t.h(0,new R.as("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
r="The defeat of the "+$.n+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.k
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.j
t.h(0,new R.P("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.a0+". Huh. Okay then.")],H.a([],o),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
this.x.h(0,new X.q(s,t,null),$.ay)},
gK:function(){return this.v}}
D.l8.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Robot",H.a([$.aD,$.U,$.bG,$.aq],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Circuit Board",H.a([$.aD,$.U],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Datastructures for Assholes",H.a([$.aD,$.O],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aD,$.O,$.b4,$.a7],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("3-D Printer",H.a([$.av,$.aD,$.U],s),null,!1,"3-D Shitpost Maker")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Virus on a USB Stick",H.a([$.rk,$.U],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Wrench",H.a([$.rA,$.U,$.aT],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Computer",H.a([$.aD,$.U],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.iH,$.i)
q.h(0,$.dQ,$.f)
q.h(0,$.dU,$.f)
q.h(0,$.aP,$.y)
p=$.j
o="The "+p+" learns from their "
n=$.k
o=o+n+"s about the great "
m=$.a0
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.n+" destroyed it. "
o="The "+p+" searches for the "
l=$.S
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.rS
p=[U.b]
q.h(0,new R.H("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.m(),!1,!1,new Y.bn("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.o)
l=$.j
m="The "+l+" is approached by a "
o=$.k
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.x
q.h(0,new R.H("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.n+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.S+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.dq(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.f)
m=this.r
m.h(0,new X.q(s,q,null),$.Z)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dU,$.f)
s.h(0,$.dS,$.y)
s.h(0,$.dT,$.i)
s.h(0,$.bt,$.f)
s.h(0,$.aP,$.y)
o=$.j
n="The "+o+" learns that all of the local "
l=$.k
s.h(0,new R.H("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.x+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
o=$.j
l="The "+o+" finds two groups of "
n=$.k
l=l+n+"s screaming and "
k=$.x
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.S
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.h(0,new R.H("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.cy(),!1,!1,new Y.at("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.o)
m.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.iH,$.y)
t.h(0,$.dQ,$.f)
t.h(0,$.dU,$.f)
t.h(0,$.aP,$.y)
r=$.j
q="The "+r+" learns from a mysterious "+$.k+" in a black trenchcoat about a great "
o=$.a0
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.n
t.h(0,new R.H("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
m.h(0,new X.q(s,t,null),$.Z)},
gK:function(){return this.cx}}
V.l9.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Lighter",H.a([$.U,$.cu],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Siberia Poster",H.a([$.O,$.cq],s),null,!1,"Poster of the Shoguns Birthplace")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Nuclear Winter Poster",H.a([$.O,$.cq,$.j9],s),null,!1,"Shoguns Dream as a Poster")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Doomsday Device",H.a([$.U,$.b4,$.j9,$.bv,$.f1],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Juggalo Poster",H.a([$.O,$.ro],s),null,!1,"False God Poster")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Fancy Watch",H.a([$.U,$.f9,$.bv],s),null,!1,"Shoguns Watch")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Magnificent Crown",H.a([$.U,$.f9,$.bv],s),null,!1,"The Shoguns Crown")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Bitching Clothes",H.a([$.a9,$.dZ,$.bv],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Ceramic Pork Hollow",H.a([$.ns,$.f9],s),"...",!1,"Shoguns Old Porkhollow")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Shit Ton of Guns",H.a([$.U,$.rv,$.f7,$.bv],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Sniper Rifle",H.a([$.U,$.ry,$.f7,$.bv],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("AK-47",H.a([$.U,$.rr,$.f7,$.bv],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("IED",H.a([$.oP,$.dg,$.U,$.f2,$.bv],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Idiots Guide To Being An Asshole",H.a([$.O,$.dh,$.a7],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Bike Horn",H.a([$.e0,$.U,$.ct,$.dh],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Matches",H.a([$.ax,$.cu],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.b7,$.i)
q.h(0,$.ck,$.f)
q.h(0,$.cL,$.f)
q.h(0,$.dV,$.f)
q.h(0,$.nk,$.f)
q.h(0,$.cl,$.i)
p=$.j
o=[U.b]
q.h(0,new R.H("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.m(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.o)
p=this.r
p.h(0,new X.q(s,q,null),$.Z)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.b7,$.i)
s.h(0,$.ck,$.f)
s.h(0,$.b2,$.f)
s.h(0,$.cl,$.i)
n=$.j
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.k
s.h(0,new R.H("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.S+" underling. Tremble at the fearsome "+$.a0+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.m(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.o)
p.h(0,new X.q(q,s,null),$.Z)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bB,$.f)
q.h(0,$.ao,$.y)
q.h(0,$.cn,$.f)
q.h(0,$.aI,$.i)
q.h(0,$.d9,$.y)
q.h(0,$.bM,$.y)
n=$.j
m="The "+n+" learns that all of the local "
l=$.k
q.h(0,new R.H("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.x+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
p.h(0,new X.q(s,q,null),$.Z)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aK,$.f)
t.h(0,$.bM,$.y)
t.h(0,$.da,$.f)
t.h(0,$.iG,$.f)
t.h(0,$.aP,$.i)
t.h(0,$.dc,$.i)
s=$.j
r="The "+s+" finds a crowd of "
n=$.x
r=r+n+"ing "
m=$.k
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.a0+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.h(0,new R.H("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.o)
p.h(0,new X.q(q,t,null),$.Z)},
gK:function(){return this.cx}}
X.q.prototype={
w:function(a){return"Theme: "+H.p(this.a)}}
U.lc.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Lockpick",H.a([$.U,$.E,$.bu,$.f5,$.a5],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Sneaking Suit",H.a([$.a9,$.E,$.bu],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Dagger",H.a([$.U,$.E,$.f5,$.dg,$.rd],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.aK,$.f)
t.h(0,$.c2,$.i)
t.h(0,$.aS,$.i)
t.h(0,$.bt,$.i)
r="The "+$.n+" cannot release the frogs since the corrupt "
q=$.k
r=r+q+" Cops have confiscated them. The "
p=$.j
o=[U.b]
t.h(0,new R.as("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
p=$.j
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.n+"'s layer and slated to be returned to the "
r=$.k
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.x+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.fy
t.h(0,new R.P("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.o)
r=$.k
p="A weeping "+r+" approaches the "
n=$.j
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.n
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.a0+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.x+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.fy
t.h(0,new R.P("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.o)
r=$.n
n="Now that the "+r+" has been defeated, the "
p=$.k
n=n+p+"s have recovered their precious "
q=$.S
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.j
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.x
l=n+l+"worth, the disaffected Heir to the "+$.a0+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.fy
t.h(0,new R.P("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.o)
this.x.h(0,new X.q(s,t,null),$.ay)}}
N.ld.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Grandfather Clock",H.a([$.ax,$.az,$.f9,$.G],s),null,!1,"Ticking Tower of Time")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Drum",H.a([$.rq,$.G,$.bd],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Dead Doppelganger",H.a([$.b5,$.di,$.G,$.df,$.bF,$.b4],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Music Box",H.a([$.U,$.G,$.bd,$.az],s),null,!1,"Cube of Noise")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Turn Tables",H.a([$.U,$.G,$.bd,$.a5,$.aU],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Metronome",H.a([$.U,$.G,$.bd],s),null,!1,"Never Ending Ticking Device")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.qH,$.X)
q.h(0,$.aP,$.i)
q.h(0,$.bt,$.i)
q.h(0,$.dT,$.f)
p=$.n
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.j
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x1
l=[U.b]
q.h(0,new R.P("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.cW(),!1,!1,new Y.at("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.f)
n=$.j
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.k+"s, they set out to fix the "
m=$.S
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.n
q.h(0,new R.D("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.K("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
j=this.f
j.h(0,new X.q(s,q,null),$.Y)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.eM,$.f)
s.h(0,$.cL,$.y)
s.h(0,$.aP,$.f)
p=$.j
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.k+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.n
s.h(0,new R.D("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.K(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
j.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aL,$.f)
t.h(0,$.a4,$.i)
t.h(0,$.b8,$.f)
t.h(0,$.bN,$.f)
r=$.n
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.S
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.j
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.k+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.h(0,new R.D("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.K(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.eb(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
k=$.n
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.S
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.j
t.h(0,new R.D("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.k+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.K("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.cW(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.f)
r="With the defeat of the "+$.n+", "
k=$.j
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.k
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.a0
t.h(0,new R.P("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.cW(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.f)
p=$.k
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.j
t.h(0,new R.D("Move Forwards, Never Stop",!1,[new U.b(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.x+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.K("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.n+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
j.h(0,new X.q(s,t,null),$.Y)},
gaa:function(){return this.n},
gK:function(){return this.T}}
G.L.prototype={}
G.eE.prototype={$isaF:1,
$asaF:function(){return[G.eE]}}
G.jf.prototype={
$1:function(a){return!1},
$S:function(){return{func:1,args:[G.L]}}}
Q.lm.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Cardboard Box",H.a([$.O,$.G,$.bu],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Hole Punch",H.a([$.U,$.G,$.bu],s),null,!1,"Paper Impaler")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Smoke Bombs",H.a([$.f2,$.G,$.bu,$.oP],s),null,!1,"Vape Grenades")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Tribal Mask",H.a([$.df,$.G,$.bu,$.bF,$.je],s),null,!1,"Ancient Face")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Opera Mask",H.a([$.av,$.G,$.bu,$.az],s),null,!1,"Phantom of the Opera Mask")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Black Hole in a Bottle.",H.a([$.G,$.a5,$.oO,$.bu,$.bl],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.x1=t},
C:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cm,$.f)
q.h(0,$.nj,$.f)
q.h(0,$.eO,$.f)
q.h(0,$.iE,$.f)
p=$.n
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.j
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.k
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x1
l=[U.b]
q.h(0,new R.P("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.o)
m=$.j
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.n
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.h(0,new R.D("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.K(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
i=this.f
i.h(0,new X.q(s,q,null),$.Y)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cm,$.i)
s.h(0,$.nj,$.i)
s.h(0,$.eO,$.i)
s.h(0,$.aK,$.f)
p=$.j
o="Even with the victory of the "+p+" over the villainous "
n=$.n
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.k+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.S
s.h(0,new R.P("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.dq(),!1,!1,new Y.aG("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.f)
m=$.j
s.h(0,new R.D("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.x+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.K("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.n+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.k+"s.")],H.a([],l),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
i.h(0,new X.q(q,s,null),$.Y)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.cm,$.f)
t.h(0,$.nj,$.f)
t.h(0,$.eO,$.f)
r=$.j
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.n+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.h(0,new R.D("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.K(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
i.h(0,new X.q(s,t,null),$.Y)},
gaa:function(){return this.m},
gK:function(){return this.G}}
E.ln.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Yardstick",H.a([$.cO,$.E,$.nx,$.a5],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("SBURBSim Hacking Guide",H.a([$.a7,$.E,$.jc,$.O],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Body Pillow of JR",H.a([$.a9,$.E,$.f4,$.oR,$.bj],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Nanobots",H.a([$.oU,$.E,$.nq],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.ba,$.f)
t.h(0,$.bC,$.f)
t.h(0,$.c1,$.f)
t.h(0,$.bN,$.f)
t.h(0,$.d8,$.f)
t.h(0,$.dR,$.f)
t.h(0,$.eO,$.i)
r=$.j
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.k
o=[U.b]
t.h(0,new R.H("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.nM(),!1,!1,new Y.c7("Rewards/no_reward.png",null),1,null,null),$.o)
r=$.n
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.j
n=q+" tries to manually separate the turtles by catching them with a net and "+$.aN+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.x
t.h(0,new R.D("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.K(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.p4(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.o)
q=$.j
t.h(0,new R.H("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.m(),!1,!1,new Y.c7("Rewards/no_reward.png",null),1,null,null),$.o)
q="A wizened "+$.k+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.j
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.n
t.h(0,new R.D("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.X)
m=$.j
t.h(0,new R.D("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.k+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.n+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.m(),!1,!1,new Y.F("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.X)
m="A wizened "+$.k+" tells the "
r=$.j
t.h(0,new R.P("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.m(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
r="A "+$.k+" that is also a SHOGUN minion tells the "
m=$.j
t.h(0,new R.P("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.p5(),!1,!1,new Y.aG("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
m=$.j
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.fy
t.h(0,new R.P("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.y)
n=$.n
m="The "+n+" explains um. What? Where did the "
q=$.j
t.h(0,new R.as("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.k+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
this.x.h(0,new X.q(s,t,null),$.Y)},
gK:function(){return this.A}}
M.lr.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Cauldron",H.a([$.rp,$.E,$.aC],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Flying Broom",H.a([$.nr,$.cO,$.E,$.ax,$.aC],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Warped Mirror",H.a([$.oS,$.E,$.aC,$.bu,$.a5],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.fy=t},
C:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.Q,P.t])
t.h(0,$.aI,$.i)
t.h(0,$.eQ,$.i)
t.h(0,$.bB,$.i)
t.h(0,$.bt,$.i)
t.h(0,$.b1,$.i)
t.h(0,$.oy,$.i)
r=$.n
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.k
q=q+p+" consorts. It's up to the "
o=$.j
n=[U.b]
t.h(0,new R.as("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.X)
o="Even with the defeat of the "+$.n+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.k
o=o+r+" settlement, and crops refuse to thrive at "
p=$.a0
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.j
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.fy
t.h(0,new R.P("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.o)
q="A Mysterious "+$.k+" approaches the "
p=$.j
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.a0
q=q+r+" was discovered amongst the "+$.n+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.fy
t.h(0,new R.P("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.o)
r=$.k
p="A young "+r+" approaches the "
m=$.j
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.a0
t.h(0,new R.P("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.S+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.x+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.m(),!1,!1,new Y.R("Rewards/no_reward.png",null),1,null,null),$.o)
this.x.h(0,new X.q(s,t,null),$.ay)},
gK:function(){return this.A}}
F.ls.prototype={
B:function(){var t,s,r,q
t=Q.u(null,null,A.M)
s=[G.L]
r=A.e("Make a World Book",H.a([$.O,$.az,$.a7],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.v(t,0)]
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Quill Pen",H.a([$.bj,$.a9,$.oT],s),null,!1,"Dead Bird Scribing Tool")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Book On Writing",H.a([$.a7,$.O,$.aq],s),null,!1,"How to do words for unsmarts")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("FLARP Manual",H.a([$.a7,$.O,$.aq],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Script",H.a([$.a7,$.O],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Fancy Pen",H.a([$.U,$.aq,$.oT,$.az],s),null,!1,"Ink Bleeding Plastic Finger")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
r=A.e("Spiral Bound Notebook",H.a([$.a7,$.O,$.U],s),null,!1,"Spinney Spine Scribing Station")
C.a.j(t.b,new Q.d(r,t.k(r,1),q))
s=A.e("Half Written Novel",H.a([$.a7,$.O],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.a.j(t.b,new Q.d(s,t.k(s,1),q))
this.y=t},
C:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.Q,P.t]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cm,$.f)
q.h(0,$.b9,$.f)
q.h(0,$.ao,$.i)
q.h(0,$.a4,$.i)
q.h(0,$.eN,$.i)
p=$.j
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.k+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.h(0,new R.H("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.m(),!1,!1,new Y.at("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.o)
m=this.r
m.h(0,new X.q(s,q,null),$.Z)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cl,$.i)
s.h(0,$.b7,$.i)
s.h(0,$.b2,$.i)
s.h(0,$.ao,$.i)
p=$.k
o="An Excited "+p+" rushes up to the "
n=$.j
s.h(0,new R.H("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.x+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.m(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.o)
m.h(0,new X.q(q,s,null),$.Z)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.b7,$.i)
t.h(0,$.ck,$.f)
t.h(0,$.b2,$.f)
t.h(0,$.cl,$.i)
t.h(0,$.c1,$.f)
r=$.j
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.k
t.h(0,new R.H("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.m(),!1,!1,new Y.br("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.o)
m.h(0,new X.q(s,t,null),$.Z)},
gK:function(){return this.cx}}
A.d4.prototype={}
B.hb.prototype={
br:function(a){var t,s,r,q
t=C.d.M(a/8)
s=C.b.cz(a,8)
r=this.a.getUint8(t)
q=C.b.ap(1,s)
if(typeof r!=="number")return r.cw()
return(r&q)>>>0>0},
aF:function(a){var t,s,r
if(a>32)throw H.w(P.dG(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.br(this.b);++this.b
if(r)t=(t|C.b.f2(1,s))>>>0}return t},
h5:function(a){var t,s,r,q
if(a>32)throw H.w(P.dG(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.br(this.b);++this.b
if(q)s=(s|C.b.ap(1,t-r))>>>0}return s},
cl:function(){var t,s,r
for(t=0;!0;){s=this.br(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.h5(t+1)-1}}
A.bA.prototype={
gcm:function(){return this.b},
aO:function(a,b,c){this.f=a
this.r=b
this.x=c
this.au()},
cE:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h
this.z=a
this.Q=b
this.ch=c
this.y=!1
t=(a+16)/116
s=b/500+t
r=t-c/200
q=s*s*s
p=r*r*r
o=q>0.008856?q:(s-0.13793103448275862)/7.787
n=a>7.9996247999999985?Math.pow(t,3):a/903.3
m=p>0.008856?p:(s-0.13793103448275862)/7.787
l=[P.t]
k=H.a([95.047*o,100*n,108.883*m],l)
s=k[0]/100
t=k[1]/100
r=k[2]/100
j=s*3.2406+t*-1.5372+r*-0.4986
i=s*-0.9689+t*1.8758+r*0.0415
c=s*0.0557+t*-0.204+r*1.057
j=j>0.0031308?1.055*Math.pow(j,0.4166666666666667)-0.055:12.92*j
i=i>0.0031308?1.055*Math.pow(i,0.4166666666666667)-0.055:12.92*i
h=H.a([j,i,c>0.0031308?1.055*Math.pow(c,0.4166666666666667)-0.055:12.92*c],l)
this.b=C.b.L(C.c.M(h[0]*255),0,255)
this.e=!0
this.y=!0
this.c=C.b.L(C.c.M(h[1]*255),0,255)
this.e=!0
this.y=!0
this.d=C.b.L(C.c.M(h[2]*255),0,255)
this.e=!0
this.y=!0},
bG:function(a){this.b=a.b
this.c=a.c
this.d=a.d
this.e=!0
this.y=!0},
w:function(a){return"rgb("+H.p(this.b)+", "+H.p(this.c)+", "+H.p(this.d)+", "+H.p(this.a)+")"},
dH:function(a){var t,s,r,q
if(a){t=this.b
if(typeof t!=="number")return t.ap()
s=this.c
if(typeof s!=="number")return s.ap()
r=this.d
if(typeof r!=="number")return r.ap()
q=this.a
if(typeof q!=="number")return H.au(q)
return(t<<24|s<<16|r<<8|q)>>>0}t=this.b
if(typeof t!=="number")return t.ap()
s=this.c
if(typeof s!=="number")return s.ap()
r=this.d
if(typeof r!=="number")return H.au(r)
return(t<<16|s<<8|r)>>>0},
dI:function(a){var t=C.b.hi(this.dH(!1),16)
return C.f.fX(t,6,"0").toUpperCase()},
hh:function(){return this.dI(!1)},
hk:function(a,b){return"#"+this.dI(!1)},
a8:function(){return this.hk(!1,!1)},
a6:function(){var t,s,r,q,p,o,n,m,l
this.e=!1
t=this.b
if(typeof t!=="number")return t.O()
t/=255
s=this.c
if(typeof s!=="number")return s.O()
s/=255
r=this.d
if(typeof r!=="number")return r.O()
r/=255
q=Math.max(Math.max(t,s),r)
p=Math.min(Math.min(t,s),r)
o=q-p
n=q===0?0:o/q
if(q===p)m=0
else{if(q===t){t=s<r?6:0
m=(s-r)/o+t}else m=q===s?(r-t)/o+2:(t-s)/o+4
m/=6}l=H.a([m,n,q],[P.t])
this.f=l[0]
this.r=l[1]
this.x=l[2]},
au:function(){var t,s,r,q,p,o,n,m,l,k,j,i
this.e=!1
t=this.f
s=this.r
r=this.x
t*=6
q=C.c.M(t)
p=t-q
o=r*(1-s)
n=r*(1-p*s)
m=r*(1-(1-p)*s)
l=C.b.cz(q,6)
if(l===0){k=o
j=m}else if(l===1){k=o
j=r
r=n}else if(l===2){k=m
j=r
r=o}else if(l===3){k=r
r=o
j=n}else{if(l===4){k=r
r=m}else k=n
j=o}i=H.a([r,j,k],[P.t])
this.b=C.b.L(C.c.M(i[0]*255),0,255)
this.e=!0
this.y=!0
this.c=C.b.L(C.c.M(i[1]*255),0,255)
this.e=!0
this.y=!0
this.d=C.b.L(C.c.M(i[2]*255),0,255)
this.e=!0
this.y=!0},
bx:function(){var t,s,r,q,p,o,n,m,l,k,j
this.y=!1
t=this.b
if(typeof t!=="number")return t.O()
t/=255
s=this.c
if(typeof s!=="number")return s.O()
s/=255
r=this.d
if(typeof r!=="number")return r.O()
r/=255
q=(t>0.04045?Math.pow((t+0.055)/1.055,2.4):t/12.92)*100
p=(s>0.04045?Math.pow((s+0.055)/1.055,2.4):s/12.92)*100
o=(r>0.04045?Math.pow((r+0.055)/1.055,2.4):r/12.92)*100
t=[P.t]
n=H.a([q*0.4124+p*0.3576+o*0.1805,q*0.2126+p*0.7152+o*0.0722,q*0.0193+p*0.1192+o*0.9505],t)
m=n[0]/95.047
l=n[1]/100
k=n[2]/108.883
m=m>0.008856?Math.pow(m,0.3333333333333333):(903.3*m+16)/116
l=l>0.008856?Math.pow(l,0.3333333333333333):(903.3*l+16)/116
k=k>0.008856?Math.pow(k,0.3333333333333333):(903.3*k+16)/116
j=H.a([Math.max(0,116*l-16),500*(m-l),200*(l-k)],t)
this.z=j[0]
this.Q=j[1]
this.ch=j[2]},
P:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.bA){t=this.b
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
gY:function(a){return this.dH(!0)},
U:function(a,b){var t,s,r,q,p,o,n,m
t=J.a1(b)
if(!!t.$isbA){t=this.b
s=b.b
if(typeof t!=="number")return t.U()
if(typeof s!=="number")return H.au(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.U()
if(typeof q!=="number")return H.au(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.U()
if(typeof o!=="number")return H.au(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.U()
if(typeof m!=="number")return H.au(m)
return A.bs(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.O()
s=this.c
if(typeof s!=="number")return s.O()
r=this.d
if(typeof r!=="number")return r.O()
q=this.a
if(typeof q!=="number")return q.O()
return A.i_(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.U()
s=this.c
if(typeof s!=="number")return s.U()
r=this.d
if(typeof r!=="number")return r.U()
return A.bs(t+b,s+b,r+b,this.a)}throw H.w("Cannot add ["+H.p(t.ga_(b))+" "+H.p(b)+"] to a Colour. Only Colour, double and int are valid.")},
O:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.O()
s=this.c
if(typeof s!=="number")return s.O()
r=this.d
if(typeof r!=="number")return r.O()
q=this.a
if(typeof q!=="number")return q.O()
return A.i_(t/255/b,s/255/b,r/255/b,q/255)},
a0:function(a,b){var t,s,r,q
if(b instanceof A.bA){t=this.b
if(typeof t!=="number")return t.O()
t=C.d.a0(t/255,b.ghL())
s=this.c
if(typeof s!=="number")return s.O()
s=C.d.a0(s/255,b.ghv())
r=this.d
if(typeof r!=="number")return r.O()
r=C.d.a0(r/255,b.ghB())
q=this.a
if(typeof q!=="number")return q.O()
return A.i_(t,s,r,C.d.a0(q/255,b.ghA()))}else{t=this.b
if(typeof t!=="number")return t.O()
s=this.c
if(typeof s!=="number")return s.O()
r=this.d
if(typeof r!=="number")return r.O()
q=this.a
if(typeof q!=="number")return q.O()
return A.i_(t/255*b,s/255*b,r/255*b,q/255)}},
l:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.w("Colour index out of range: "+H.p(b))},
h:function(a,b,c){var t,s
t=J.cE(b)
if(t.aw(b,0)||t.aN(b,3))throw H.w("Colour index out of range: "+H.p(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.P(b,0)){this.b=C.b.L(c,0,255)
this.e=!0
this.y=!0}else if(t.P(b,1)){this.c=C.b.L(c,0,255)
this.e=!0
this.y=!0}else if(t.P(b,2)){this.d=C.b.L(c,0,255)
this.e=!0
this.y=!0}else this.a=C.b.L(c,0,255)
else if(t.P(b,0)){this.b=C.b.L(J.fX(J.n5(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.P(b,1)){this.c=C.b.L(J.fX(J.n5(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.mN(c)
if(t.P(b,2)){this.d=C.b.L(J.fX(s.a0(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.b.L(J.fX(s.a0(c,255)),0,255)}},
e8:function(a,b,c,d){this.b=C.c.L(J.fV(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.c.L(J.fV(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.c.L(J.fV(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.c.L(J.fV(d,0,255),0,255)}}
A.mK.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.B]}}}
E.dK.prototype={
cD:function(a){var t
$.$get$aR().ab("setFromRGB")
t=this.y2
t.b=C.b.L(C.c.M(this.z.y*255),0,255)
t.e=!0
t.y=!0
t=this.y2
t.c=C.b.L(C.c.M(this.Q.y*255),0,255)
t.e=!0
t.y=!0
t=this.y2
t.d=C.b.L(C.c.M(this.ch.y*255),0,255)
t.e=!0
t.y=!0
if(a){J.ce(this.cx,this.y2.b)
J.ce(this.cy,this.y2.c)
J.ce(this.db,this.y2.d)}this.ho(a,!1)},
aI:function(){return this.cD(!1)},
cB:function(a){var t,s
$.$get$aR().ab("setFromRGB")
t=this.y2
s=this.dx.y
if(t.e)t.a6()
t.f=s
t.au()
t=this.y2
s=this.dy.y
if(t.e)t.a6()
t.r=s
t.au()
t=this.y2
s=this.fr.y
if(t.e)t.a6()
t.x=s
t.au()
if(a){t=this.fx
s=this.y2
if(s.e)s.a6()
J.ce(t,C.c.M(s.f*360))
t=this.fy
s=this.y2
if(s.e)s.a6()
J.ce(t,C.c.M(s.r*100))
t=this.go
s=this.y2
if(s.e)s.a6()
J.ce(t,C.c.M(s.x*100))}this.hn(a,!1)},
aH:function(){return this.cB(!1)},
bH:function(){var t,s,r,q
t=this.y2
s=J.bX(this.id)
s.toString
r=J.bX(this.k1)
r.toString
q=J.bX(this.k2)
q.toString
t.cE(s,r,q)
this.hm(!1)},
bk:function(a,b,c,d,e){var t,s,r,q,p
if(!(this.a||a))return
$.$get$aR().ab("update: rgb: "+e+", hsv: "+c+", fromMain: "+b+", force: "+a)
if(e){t=this.z
s=this.y2
r=s.b
if(typeof r!=="number")return r.O()
t.y=r/255
t=this.Q
q=s.c
if(typeof q!=="number")return q.O()
t.y=q/255
q=this.ch
s=s.d
if(typeof s!=="number")return s.O()
q.y=s/255
J.ce(this.cx,r)
J.ce(this.cy,this.y2.c)
J.ce(this.db,this.y2.d)}if(c){t=this.dx
s=this.y2
if(s.e)s.a6()
t.y=s.f
t=this.dy
s=this.y2
if(s.e)s.a6()
t.y=s.r
t=this.fr
s=this.y2
if(s.e)s.a6()
t.y=s.x
t=this.fx
s=this.y2
if(s.e)s.a6()
J.bg(t,C.b.w(C.c.M(s.f*360)))
t=this.fy
s=this.y2
if(s.e)s.a6()
J.bg(t,C.b.w(C.c.M(s.r*100)))
t=this.go
s=this.y2
if(s.e)s.a6()
J.bg(t,C.b.w(C.c.M(s.x*100)))}if(d){t=this.id
s=this.y2
if(s.y)s.bx()
J.bg(t,C.c.bi(s.z,2))
t=this.k1
s=this.y2
if(s.y)s.bx()
J.bg(t,C.c.bi(s.Q,2))
t=this.k2
s=this.y2
if(s.y)s.bx()
J.bg(t,C.c.bi(s.ch,2))}for(t=this.ry,s=this.x1,p=0;p<t.length;++p){r=t[p]
r.cs(!0)
if(p>=s.length)return H.I(s,p)
r.dj(s[p])}this.f5(!b)
J.bg(this.k3,this.y2.hh())
t=this.r1.style
s=this.y2.a8()
t.backgroundColor=s
t=this.r2
s=$.c0
if(s>=t.length)return H.I(t,s)
J.q1(t[s],!0)},
ho:function(a,b){return this.bk(!1,a,!0,!0,b)},
hn:function(a,b){return this.bk(!1,a,b,!0,!0)},
dK:function(a){return this.bk(a,!1,!0,!0,!0)},
ae:function(){return this.bk(!1,!1,!0,!0,!0)},
hm:function(a){return this.bk(!1,!1,!0,a,!0)},
f5:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
$.$get$aR().ab("updateMainPicker: setValue: "+a)
t=this.y1
s=$.c0
if(s>=t.length)return H.I(t,s)
r=t[s]
t=this.x2
if(s>=t.length)return H.I(t,s)
q=t[s]
this.y.dj(r)
s=this.x
s.toString
p=s.getContext("2d")
o=P.pA(p.getImageData(0,0,256,256))
for(t=J.W(o),n=null,m=null,l=0;l<256;++l)for(s=l/255,k=0;k<256;++k){n=(k*256+l)*4
m=q.$2(s,1-k/255)
j=t.gak(o)
i=m.gcm()
if(n>=j.length)return H.I(j,n)
j[n]=i
i=t.gak(o)
j=n+1
h=m.c
if(j>=i.length)return H.I(i,j)
i[j]=h
h=t.gak(o)
j=n+2
i=m.d
if(j>=h.length)return H.I(h,j)
h[j]=i
i=t.gak(o)
j=n+3
if(j>=i.length)return H.I(i,j)
i[j]=255}C.n.dw(p,o,0,0)
g=this.bQ()
l=g[0].y
k=g[1].y
f=g[2].y
t=this.y2
if(t.y)t.bx()
e=t.z>50?"#000000":"#FFFFFF"
p.beginPath()
p.arc(C.c.a2(l*255),C.c.a2((1-k)*255),5,0,6.283185307179586,!1)
p.strokeStyle=e
p.stroke()
if(a)this.y.y=f
this.y.cs(!0)},
bQ:function(){var t,s,r,q
t=$.c0
if(t===0){s=this.ch
r=this.Q
q=this.z}else if(t===1){s=this.ch
r=this.z
q=this.Q}else if(t===2){s=this.z
r=this.Q
q=this.ch}else if(t===3){s=this.dy
r=this.fr
q=this.dx}else if(t===4){s=this.dx
r=this.fr
q=this.dy}else if(t===5){s=this.dx
r=this.dy
q=this.fr}else{s=null
r=null
q=null}return H.a([s,r,q],[E.cK])},
fV:function(a){var t,s,r
this.a=!0
t=A.b0(this.y2)
this.m=t
s=this.k4.style
t=t.a8()
s.backgroundColor=t
this.dz()
this.dK(!0)
t=this.f.style
t.display="block"
this.cn()
for(t=$.$get$eC(),s=new P.by(t,t.r,null,null,[null]),s.c=t.e;s.D();){r=s.d
t=J.a1(r)
if(!t.P(r,this))t.aA(r)}},
aA:function(a){var t
this.a=!1
t=this.f.style
t.display="none"},
cQ:function(a){var t,s,r
t=this.b
J.bg(t,this.y2.a8())
s=this.e.style
r=this.y2.a8()
s.backgroundColor=r
a=document.createEvent("Event")
a.initEvent("change",!0,!0)
t.dispatchEvent(a)
this.aA(0)},
ex:function(){return this.cQ(null)},
cO:function(a){this.y2.bG(this.m)
this.aA(0)},
eu:function(){return this.cO(null)},
dz:function(){var t,s
t=A.eD(J.of(J.na(this.b),1))
this.y2=t
s=this.e.style
t=t.a8()
s.backgroundColor=t
this.dK(!0)},
fM:function(){var t,s,r
t=this.x1
t.push(new E.hI(this))
t.push(new E.hJ(this))
t.push(new E.hK(this))
s=this.y1
s.push(new E.hS(this))
s.push(new E.hT(this))
s.push(new E.hU(this))
r=this.x2
r.push(new E.hV(this))
r.push(new E.hW(this))
r.push(new E.hX(this))
t.push(new E.hY(this))
t.push(new E.hZ(this))
t.push(new E.hL(this))
s.push(new E.hM())
s.push(new E.hN(this))
s.push(new E.hO(this))
r.push(new E.hP(this))
r.push(new E.hQ(this))
r.push(new E.hR(this))},
fo:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=document
s=t.createElement("div")
s.className="colourPicker_anchor"
r=t.createElement("div")
r.className="colourPicker_button"
W.a6(r,"click",new E.hh(this),!1,W.aA)
s.appendChild(r)
q=t.createElement("div")
q.className="colourPicker_button_inner colourPicker_button_inner_1"
r.appendChild(q)
p=t.createElement("div")
p.className="colourPicker_button_inner colourPicker_button_inner_2"
r.appendChild(p)
o=t.createElement("div")
o.className="colourPicker_swatch"
r.appendChild(o)
n=a.a0(0,1.15)
m=a.a0(0,0.85)
l=a.a0(0,0.4)
k=r.style
j=""+(b+2)+"px"
k.width=j
j=""+(c+2)+"px"
k.height=j
j=l.a8()
k.borderColor=j
k=q.style
j=""+b+"px"
k.width=j
j=""+c+"px"
k.height=j
j=a.a8()
k.backgroundColor=j
j=n.a8()
k.borderLeftColor=j
j=n.a8()
k.borderTopColor=j
j=m.a8()
k.borderRightColor=j
j=m.a8()
k.borderBottomColor=j
k=p.style
j=""+b+"px"
k.width=j
j=""+c+"px"
k.height=j
j=a.a8()
k.backgroundColor=j
j=m.a8()
k.borderLeftColor=j
j=m.a8()
k.borderTopColor=j
j=n.a8()
k.borderRightColor=j
j=n.a8()
k.borderBottomColor=j
k=o.style
j=""+(b-12)+"px"
k.width=j
j=""+(c-12)+"px"
k.height=j
this.c=s
this.d=r
this.e=o
k=this.b
J.pY(k,s)
j=this.c
t=t.createElement("div")
t.className="colourPicker_hidden"
t.appendChild(k)
j.appendChild(t)},
c8:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t=document
s=t.createElement("div")
s.className="colourPicker_overlay"
this.c.appendChild(s)
r=t.createElement("div")
r.className="colourPicker_overlay_2"
q=W.aA
W.a6(r,"click",new E.hi(),!1,q)
s.appendChild(r)
p=t.createElement("div")
p.className="colourPicker_window"
W.a6(p,"click",new E.hj(),!1,q)
s.appendChild(p)
this.r=p
o=W.oi(256,256)
o.className="colourPicker_canvas"
W.a6(o,"mousedown",new E.hk(this),!1,q)
this.x=o
p.appendChild(o)
o=E.d7(0,1,25,256,!0)
p.appendChild(o.b)
o.cx.aM(this.gf0())
this.y=o
E.a3(o.b,268,0)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="Old"
o=n.style
o.textAlign="center"
E.a3(n,57,263)
p.appendChild(n)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="New"
o=n.style
o.textAlign="center"
E.a3(n,183,263)
p.appendChild(n)
m=t.createElement("div")
m.className="colourPicker_previewbox"
E.a3(m,4,279)
p.appendChild(m)
o=t.createElement("div")
l=o.style
l.cursor="pointer"
W.a6(o,"click",new E.hv(this),!1,q)
this.k4=o
m.appendChild(o)
o=t.createElement("div")
l=o.style
l.left="50%"
this.r1=o
m.appendChild(o)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="Red, Green, Blue"
E.a3(n,330,5)
p.appendChild(n)
o=W.aJ("number")
o.className="colourPicker_number"
l=J.W(o)
l.sao(o,"0")
l.san(o,"255")
l.saq(o,"1")
l=C.h.ga1(o)
W.a6(l.a,l.b,new E.hB(this),!1,H.v(l,0))
this.cx=o
E.a3(o,600,20)
p.appendChild(this.cx)
o=E.d7(0,1,256,16,!1)
p.appendChild(o.b)
o.cx.aM(new E.hC(this))
this.z=o
E.a3(o.b,330,20)
o=this.ry
o.push(this.z)
l=W.aJ("number")
l.className="colourPicker_number"
k=J.W(l)
k.sao(l,"0")
k.san(l,"255")
k.saq(l,"1")
k=C.h.ga1(l)
W.a6(k.a,k.b,new E.hD(this),!1,H.v(k,0))
this.cy=l
E.a3(l,600,50)
p.appendChild(this.cy)
l=E.d7(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.aM(new E.hE(this))
this.Q=l
E.a3(l.b,330,50)
o.push(this.Q)
l=W.aJ("number")
l.className="colourPicker_number"
k=J.W(l)
k.sao(l,"0")
k.san(l,"255")
k.saq(l,"1")
k=C.h.ga1(l)
W.a6(k.a,k.b,new E.hF(this),!1,H.v(k,0))
this.db=l
E.a3(l,600,80)
p.appendChild(this.db)
l=E.d7(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.aM(new E.hG(this))
this.ch=l
E.a3(l.b,330,80)
o.push(this.ch)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="Hue, Saturation, Value"
E.a3(n,330,115)
p.appendChild(n)
l=W.aJ("number")
l.className="colourPicker_number"
k=J.W(l)
k.sao(l,"0")
k.san(l,"360")
k.saq(l,"1")
k=C.h.ga1(l)
W.a6(k.a,k.b,new E.hH(this,360),!1,H.v(k,0))
this.fx=l
E.a3(l,600,130)
p.appendChild(this.fx)
l=E.d7(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.aM(new E.hl(this,360))
this.dx=l
E.a3(l.b,330,130)
o.push(this.dx)
l=W.aJ("number")
l.className="colourPicker_number"
k=J.W(l)
k.sao(l,"0")
k.san(l,"100")
k.saq(l,"1")
k=C.h.ga1(l)
W.a6(k.a,k.b,new E.hm(this),!1,H.v(k,0))
this.fy=l
E.a3(l,600,160)
p.appendChild(this.fy)
l=E.d7(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.aM(new E.hn(this))
this.dy=l
E.a3(l.b,330,160)
o.push(this.dy)
l=W.aJ("number")
l.className="colourPicker_number"
k=J.W(l)
k.sao(l,"0")
k.san(l,"100")
k.saq(l,"1")
k=C.h.ga1(l)
W.a6(k.a,k.b,new E.ho(this),!1,H.v(k,0))
this.go=l
E.a3(l,600,190)
p.appendChild(this.go)
l=E.d7(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.aM(new E.hp(this))
this.fr=l
E.a3(l.b,330,190)
o.push(this.fr)
j=t.createElement("form")
i=W.aJ("radio")
o=J.W(i)
o.sE(i,"mode")
o=o.ga1(i)
W.a6(o.a,o.b,new E.hq(this),!1,H.v(o,0))
j.appendChild(i)
E.a3(i,305,19)
o=this.r2
o.push(i)
h=W.aJ("radio")
l=J.W(h)
l.sE(h,"mode")
l=l.ga1(h)
W.a6(l.a,l.b,new E.hr(this),!1,H.v(l,0))
j.appendChild(h)
E.a3(h,305,49)
o.push(h)
g=W.aJ("radio")
l=J.W(g)
l.sE(g,"mode")
l=l.ga1(g)
W.a6(l.a,l.b,new E.hs(this),!1,H.v(l,0))
j.appendChild(g)
E.a3(g,305,79)
o.push(g)
f=W.aJ("radio")
l=J.W(f)
l.sE(f,"mode")
l=l.ga1(f)
W.a6(l.a,l.b,new E.ht(this),!1,H.v(l,0))
j.appendChild(f)
E.a3(f,305,129)
o.push(f)
e=W.aJ("radio")
l=J.W(e)
l.sE(e,"mode")
l=l.ga1(e)
W.a6(l.a,l.b,new E.hu(this),!1,H.v(l,0))
j.appendChild(e)
E.a3(e,305,159)
o.push(e)
d=W.aJ("radio")
l=J.W(d)
l.sE(d,"mode")
l=l.ga1(d)
W.a6(l.a,l.b,new E.hw(this),!1,H.v(l,0))
j.appendChild(d)
E.a3(d,305,189)
o.push(d)
p.appendChild(j)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="CIEL*a*b"
E.a3(n,330,226)
p.appendChild(n)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="L"
E.a3(n,330,245)
p.appendChild(n)
o=W.aJ("number")
o.className="colourPicker_number colourPicker_lab"
l=J.W(o)
l.sao(o,"0")
l.san(o,"100")
l.saq(o,"0.01")
l=C.h.ga1(o)
W.a6(l.a,l.b,new E.hx(this),!1,H.v(l,0))
this.id=o
E.a3(o,344,241)
p.appendChild(this.id)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="a"
E.a3(n,408,245)
p.appendChild(n)
o=W.aJ("number")
o.className="colourPicker_number colourPicker_lab"
l=J.W(o)
l.sao(o,"-127")
l.san(o,"128")
l.saq(o,"0.01")
l=C.h.ga1(o)
W.a6(l.a,l.b,new E.hy(this),!1,H.v(l,0))
this.k1=o
E.a3(o,422,241)
p.appendChild(this.k1)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="b"
E.a3(n,486,245)
p.appendChild(n)
o=W.aJ("number")
o.className="colourPicker_number colourPicker_lab"
l=J.W(o)
l.sao(o,"-127")
l.san(o,"128")
l.saq(o,"0.01")
l=C.h.ga1(o)
W.a6(l.a,l.b,new E.hz(this),!1,H.v(l,0))
this.k2=o
E.a3(o,500,241)
p.appendChild(this.k2)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="Hex"
E.a3(n,573,226)
p.appendChild(n)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="#"
E.a3(n,573,245)
p.appendChild(n)
o=W.aJ("text")
l=J.W(o)
l.sdu(o,6)
l.sfY(o,"[\\d|a-f|A-F]{6}")
o.className="colourPicker_hex"
l=C.h.ga1(o)
W.a6(l.a,l.b,new E.hA(this),!1,H.v(l,0))
this.k3=o
E.a3(o,585,241)
p.appendChild(this.k3)
c=t.createElement("button")
c.className="colourPicker_innerButton"
c.textContent="OK"
W.a6(c,"click",this.gew(),!1,q)
E.a3(c,570,285)
p.appendChild(c)
b=t.createElement("button")
b.className="colourPicker_innerButton"
b.textContent="Cancel"
W.a6(b,"click",this.ges(),!1,q)
E.a3(b,470,285)
p.appendChild(b)
this.f=s
W.a6(window,"resize",this.ghb(),!1,W.z)
this.cn()},
cZ:function(a){var t,s,r,q,p,o,n,m
if(!this.rx)return
$.$get$aR().al(C.i,"a1")
$.$get$aR().ab("pickerDrag")
$.$get$aR().al(C.i,"a2")
t=J.W(a)
s=t.gb4(a)
s=s.gR(s)
r=this.x
r.toString
q=document
r=W.eJ(r,q.documentElement).a
if(typeof s!=="number")return s.ay()
if(typeof r!=="number")return H.au(r)
t=t.gb4(a)
t=t.gS(t)
p=this.x
p.toString
q=W.eJ(p,q.documentElement).b
if(typeof t!=="number")return t.ay()
if(typeof q!=="number")return H.au(q)
$.$get$aR().al(C.i,"a3")
o=C.c.L(s-r-1,0,255)
n=C.c.L(t-q-1,0,255)
$.$get$aR().al(C.i,"a4")
m=this.bQ()
$.$get$aR().al(C.i,"a5")
m[0].y=o/255
m[1].y=1-n/255
$.$get$aR().al(C.i,"a6")
this.d3()
$.$get$aR().al(C.i,"a7")},
d4:function(a){$.$get$aR().ab("setFromPicker")
this.bQ()[2].y=this.y.y;($.c0>=3?this.gdX():this.gdY()).$1(!0)},
d3:function(){return this.d4(null)},
dB:function(a){var t,s,r,q
t=window.innerWidth
s=window.innerHeight
r=this.f.style
q=H.p(t)+"px"
r.width=q
q=H.p(s)+"px"
r.height=q
r=this.r
q=r.style
r=r.clientWidth
if(typeof t!=="number")return t.ay()
if(typeof r!=="number")return H.au(r)
r=""+C.b.a5(t-r,2)+"px"
q.left=r
r=this.r.clientHeight
if(typeof s!=="number")return s.ay()
if(typeof r!=="number")return H.au(r)
r=""+C.b.a5(s-r,2)+"px"
q.top=r},
cn:function(){return this.dB(null)},
sh1:function(a){return this.rx=a}}
E.hI.prototype={
$1:function(a){var t=A.b0(this.a.y2)
t.b=C.b.L(C.c.M(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.t]}}}
E.hJ.prototype={
$1:function(a){var t=A.b0(this.a.y2)
t.c=C.b.L(C.c.M(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.t]}}}
E.hK.prototype={
$1:function(a){var t=A.b0(this.a.y2)
t.d=C.b.L(C.c.M(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.t]}}}
E.hS.prototype={
$1:function(a){var t=A.b0(this.a.y2)
t.b=C.b.L(C.c.M(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.t]}}}
E.hT.prototype={
$1:function(a){var t=A.b0(this.a.y2)
t.c=C.b.L(C.c.M(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.t]}}}
E.hU.prototype={
$1:function(a){var t=A.b0(this.a.y2)
t.d=C.b.L(C.c.M(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.t]}}}
E.hV.prototype={
$2:function(a,b){var t=A.b0(this.a.y2)
t.d=C.b.L(C.c.M(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.L(C.c.M(b*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.t,P.t]}}}
E.hW.prototype={
$2:function(a,b){var t=A.b0(this.a.y2)
t.d=C.b.L(C.c.M(a*255),0,255)
t.e=!0
t.y=!0
t.b=C.b.L(C.c.M(b*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.t,P.t]}}}
E.hX.prototype={
$2:function(a,b){var t=A.b0(this.a.y2)
t.b=C.b.L(C.c.M(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.L(C.c.M(b*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.t,P.t]}}}
E.hY.prototype={
$1:function(a){var t=A.b0(this.a.y2)
if(t.e)t.a6()
t.f=a
t.au()
return t},
$S:function(){return{func:1,args:[P.t]}}}
E.hZ.prototype={
$1:function(a){var t=A.b0(this.a.y2)
if(t.e)t.a6()
t.r=a
t.au()
return t},
$S:function(){return{func:1,args:[P.t]}}}
E.hL.prototype={
$1:function(a){var t=A.b0(this.a.y2)
if(t.e)t.a6()
t.x=a
t.au()
return t},
$S:function(){return{func:1,args:[P.t]}}}
E.hM.prototype={
$1:function(a){var t=A.bs(0,0,0,255)
t.aO(a,1,1)
return t},
$S:function(){return{func:1,args:[P.t]}}}
E.hN.prototype={
$1:function(a){var t=A.b0(this.a.y2)
if(t.e)t.a6()
t.r=a
t.au()
return t},
$S:function(){return{func:1,args:[P.t]}}}
E.hO.prototype={
$1:function(a){var t=A.b0(this.a.y2)
if(t.e)t.a6()
t.x=a
t.au()
return t},
$S:function(){return{func:1,args:[P.t]}}}
E.hP.prototype={
$2:function(a,b){var t,s
t=this.a.dx.y
s=A.bs(0,0,0,255)
s.aO(t,a,b)
return s},
$S:function(){return{func:1,args:[P.t,P.t]}}}
E.hQ.prototype={
$2:function(a,b){var t,s
t=this.a.dy.y
s=A.bs(0,0,0,255)
s.aO(a,t,b)
return s},
$S:function(){return{func:1,args:[P.t,P.t]}}}
E.hR.prototype={
$2:function(a,b){var t,s
t=this.a.fr.y
s=A.bs(0,0,0,255)
s.aO(a,b,t)
return s},
$S:function(){return{func:1,args:[P.t,P.t]}}}
E.hh.prototype={
$1:function(a){this.a.fV(0)
J.oe(a)
a.stopPropagation()},
$S:function(){return{func:1,args:[W.aA]}}}
E.hi.prototype={
$1:function(a){J.oe(a)
a.stopPropagation()},
$S:function(){return{func:1,args:[W.aA]}}}
E.hj.prototype={
$1:function(a){return J.q3(a)},
$S:function(){return{func:1,args:[W.z]}}}
E.hk.prototype={
$1:function(a){var t
$.$get$aR().ab("PICKER CLICK")
t=this.a
t.rx=!0
$.$get$aR().al(C.i,"click")
t.cZ(a)},
$S:function(){return{func:1,args:[W.aA]}}}
E.hv.prototype={
$1:function(a){var t=this.a
t.y2.bG(t.m)
t.ae()},
$S:function(){return{func:1,args:[W.z]}}}
E.hB.prototype={
$1:function(a){var t,s,r
t=this.a
E.ch(t.cx,0,255,0)
s=t.z
r=J.bX(t.cx)
if(typeof r!=="number")return r.O()
s.y=r/255
t.aI()},
$S:function(){return{func:1,args:[W.z]}}}
E.hC.prototype={
$1:function(a){var t=this.a
J.bg(t.cx,C.b.w(C.c.a2(t.z.y*255)))
t.aI()},
$S:function(){return{func:1,args:[W.z]}}}
E.hD.prototype={
$1:function(a){var t,s,r
t=this.a
E.ch(t.cy,0,255,0)
s=t.Q
r=J.bX(t.cy)
if(typeof r!=="number")return r.O()
s.y=r/255
t.aI()},
$S:function(){return{func:1,args:[W.z]}}}
E.hE.prototype={
$1:function(a){var t=this.a
J.bg(t.cy,C.b.w(C.c.a2(t.Q.y*255)))
t.aI()},
$S:function(){return{func:1,args:[W.z]}}}
E.hF.prototype={
$1:function(a){var t,s,r
t=this.a
E.ch(t.db,0,255,0)
s=t.ch
r=J.bX(t.db)
if(typeof r!=="number")return r.O()
s.y=r/255
t.aI()},
$S:function(){return{func:1,args:[W.z]}}}
E.hG.prototype={
$1:function(a){var t=this.a
J.bg(t.db,C.b.w(C.c.a2(t.ch.y*255)))
t.aI()},
$S:function(){return{func:1,args:[W.z]}}}
E.hH.prototype={
$1:function(a){var t,s,r,q
t=this.a
s=this.b
E.ch(t.fx,0,s,0)
r=t.dx
q=J.bX(t.fx)
if(typeof q!=="number")return q.O()
r.y=q/s
t.aH()},
$S:function(){return{func:1,args:[W.z]}}}
E.hl.prototype={
$1:function(a){var t=this.a
J.bg(t.fx,C.b.w(C.c.a2(t.dx.y*this.b)))
t.aH()},
$S:function(){return{func:1,args:[W.z]}}}
E.hm.prototype={
$1:function(a){var t,s,r
t=this.a
E.ch(t.fy,0,100,0)
s=t.dy
r=J.bX(t.fy)
if(typeof r!=="number")return r.O()
s.y=r/100
t.aH()},
$S:function(){return{func:1,args:[W.z]}}}
E.hn.prototype={
$1:function(a){var t=this.a
J.bg(t.fy,C.b.w(C.c.a2(t.dy.y*100)))
t.aH()},
$S:function(){return{func:1,args:[W.z]}}}
E.ho.prototype={
$1:function(a){var t,s,r
t=this.a
E.ch(t.go,0,100,0)
s=t.fr
r=J.bX(t.go)
if(typeof r!=="number")return r.O()
s.y=r/100
t.aH()},
$S:function(){return{func:1,args:[W.z]}}}
E.hp.prototype={
$1:function(a){var t=this.a
J.bg(t.go,C.b.w(C.c.a2(t.fr.y*100)))
t.aH()},
$S:function(){return{func:1,args:[W.z]}}}
E.hq.prototype={
$1:function(a){$.c0=0
this.a.ae()},
$S:function(){return{func:1,args:[W.z]}}}
E.hr.prototype={
$1:function(a){$.c0=1
this.a.ae()},
$S:function(){return{func:1,args:[W.z]}}}
E.hs.prototype={
$1:function(a){$.c0=2
this.a.ae()},
$S:function(){return{func:1,args:[W.z]}}}
E.ht.prototype={
$1:function(a){$.c0=3
this.a.ae()},
$S:function(){return{func:1,args:[W.z]}}}
E.hu.prototype={
$1:function(a){$.c0=4
this.a.ae()},
$S:function(){return{func:1,args:[W.z]}}}
E.hw.prototype={
$1:function(a){$.c0=5
this.a.ae()},
$S:function(){return{func:1,args:[W.z]}}}
E.hx.prototype={
$1:function(a){var t=this.a
E.ch(t.id,0,100,2)
t.bH()},
$S:function(){return{func:1,args:[W.z]}}}
E.hy.prototype={
$1:function(a){var t=this.a
E.ch(t.k1,-127,128,2)
t.bH()},
$S:function(){return{func:1,args:[W.z]}}}
E.hz.prototype={
$1:function(a){var t=this.a
E.ch(t.k2,-127,128,2)
t.bH()},
$S:function(){return{func:1,args:[W.z]}}}
E.hA.prototype={
$1:function(a){var t,s
t=this.a
s=A.eD(J.na(t.k3))
t.y2.bG(s)
t.ae()},
$S:function(){return{func:1,args:[W.z]}}}
E.cK.prototype={
cs:function(a){var t,s,r,q
this.a.ab("update: silent: "+a)
t=this.r
s=(this.y-t)/(this.x-t)
if(this.z){r=C.c.M(this.f*(1-s))
t=this.c.style
q=""+r+"px"
t.top=q}else{r=C.c.M(this.e*s)
t=this.c.style
q=""+r+"px"
t.left=q}if(!a){t=this.ch
q=W.qy("update",!0,!0,this)
if(t.b>=4)H.aw(t.cJ())
t.aP(q)}},
ae:function(){return this.cs(!1)},
eP:function(a){this.a.ab("SLIDER CLICK")
this.Q=!0
this.cC(a)},
eR:function(a){this.Q=!1},
eQ:function(a){if(!this.Q)return
this.cC(a)},
cC:function(a){var t,s,r,q,p,o
t=J.W(a)
s=t.gb4(a)
s=s.gR(s)
r=this.b
r.toString
q=document
r=W.eJ(r,q.documentElement).a
if(typeof s!=="number")return s.ay()
if(typeof r!=="number")return H.au(r)
t=t.gb4(a)
t=t.gS(t)
p=this.b
p.toString
q=W.eJ(p,q.documentElement).b
if(typeof t!=="number")return t.ay()
if(typeof q!=="number")return H.au(q)
o=this.z?C.c.L(1-(t-q)/this.f,0,1):C.d.L((s-r)/this.e,0,1)
t=this.r
this.y=o*(this.x-t)+t
this.ae()},
dj:function(a){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
t.toString
s=t.getContext("2d")
t=this.d
r=P.pA(s.getImageData(0,0,t.width,t.height))
for(t=J.W(r),q=this.z,p=0;p<this.e;++p)for(o=0;n=this.f,o<n;++o){m=this.e
l=(o*m+p)*4
k=a.$1(q?1-o/n:p/m)
n=t.gak(r)
m=k.gcm()
if(l>=n.length)return H.I(n,l)
n[l]=m
m=t.gak(r)
n=l+1
j=k.c
if(n>=m.length)return H.I(m,n)
m[n]=j
j=t.gak(r)
n=l+2
m=k.d
if(n>=j.length)return H.I(j,n)
j[n]=m
m=t.gak(r)
n=l+3
if(n>=m.length)return H.I(m,n)
m[n]=255}C.n.dw(s,r,0,0)},
e9:function(a,b,c,d,e){var t,s,r,q
t=W.z
s=new P.fI(null,0,null,null,null,null,null,[t])
this.ch=s
this.cx=new P.fJ(s,[t])
this.y=this.r
t=document
s=t.createElement("div")
s.className="fancySlider_bar"
r=s.style
q=""+this.e+"px"
r.width=q
r=s.style
q=""+this.f+"px"
r.height=q
W.a6(s,"mousedown",this.geO(),!1,W.aA)
this.b=s
s=this.e
s=W.oi(this.f,s)
s.className="fancySlider_background"
this.d=s
t=t.createElement("div")
t.className="fancySlider_slider_"+(this.z?"vertical":"horizontal")
this.c=t
this.b.appendChild(this.d)
this.b.appendChild(this.c)
this.ae()
$.$get$iA().j(0,this)
E.ol()}}
E.hf.prototype={
$1:function(a){var t,s,r
for(t=$.$get$eC(),s=[null],r=new P.by(t,t.r,null,null,s),r.c=t.e;r.D();)r.d.sh1(!1)
for(t=$.$get$iA(),s=new P.by(t,t.r,null,null,s),s.c=t.e;s.D();)s.d.eR(a)},
$S:function(){return{func:1,args:[W.aA]}}}
E.hg.prototype={
$1:function(a){var t,s,r
for(t=$.$get$eC(),s=[null],r=new P.by(t,t.r,null,null,s),r.c=t.e;r.D();)r.d.cZ(a)
for(t=$.$get$iA(),s=new P.by(t,t.r,null,null,s),s.c=t.e;s.D();)s.d.eQ(a)},
$S:function(){return{func:1,args:[W.aA]}}}
F.dl.prototype={
w:function(a){return this.b}}
F.dm.prototype={
al:function(a,b){F.rE(a).$1("("+this.c+")["+H.p(C.a.gfT(a.b.split(".")))+"]: "+H.p(b))},
c9:function(a,b){this.al(C.t,b)},
ab:function(a){},
gE:function(a){return this.c}}
A.k4.prototype={
l:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.a7(b)?t.l(0,b):$.$get$nH()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.a7(b)?t.l(0,b):$.$get$nH()}throw H.w(P.dG(b,"'name' should be a String name or int id only",null))},
gN:function(a){var t=this.a
t=t.gaf(t)
return new H.fj(null,J.bp(t.a),t.b,[H.v(t,0),H.v(t,1)])},
i:function(a,b,c,d){var t,s
t=this.a
if(t.a7(b))this.a4(0,b)
s=this.eT()
if(typeof s!=="number")return s.ht()
if(s>=256)throw H.w(P.dG(s,"Palette colour ids must be in the range 0-255",null))
t.h(0,b,c)
this.b.h(0,s,c)
this.c.h(0,b,s)
this.d.h(0,s,b)},
a4:function(a,b){var t,s,r
t=this.a
if(!t.a7(b))return
s=this.c
r=s.l(0,b)
t.a4(0,b)
this.b.a4(0,r)
s.a4(0,b)
this.d.a4(0,r)},
eT:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.a7(s))return s;++s}}}
A.fp.prototype={
$asC:function(){return[A.bA]},
$isC:1}
A.fs.prototype={
cF:function(a){var t=a==null
this.a=t?C.w:P.tX(a)
if(!t)this.b=a+1},
h_:function(a,b){var t
if(a.gZ(a))return
t=a.hu(this.a.bg())
return t},
fZ:function(a){return this.h_(a,!0)}}
D.kU.prototype={
$1:function(a){a.gh0()
return!0},
$S:function(){return{func:1,args:[D.cC]}}}
D.cC.prototype={
w:function(a){return this.a},
gE:function(a){return this.a},
gh0:function(){return this.d}}
A.fy.prototype={
fa:function(a,b){var t,s,r,q,p,o,n,m,l
C.a.b2(this.b,a)
for(t=J.bp(a);t.D();){s=t.gH()
for(r=s.gK().gbe(),r=r.gN(r);r.D();){q=r.gH()
p=J.W(q)
if(!this.d.a7(p.gE(q))){this.d.h(0,p.gE(q),q)
this.dc(p.gE(q))}}for(r=s.ge1().gbe(),r=r.gN(r);r.D();){o=r.gH()
if(!this.d.a7(o)){p=this.d
n=new D.cC(o,"","",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$nP().push(n)
p.h(0,o,n)
this.dc(o)}if(!s.f.a7(this.d.l(0,o)))s.f.h(0,this.d.l(0,o),0)
p=s.f
n=this.d.l(0,o)
m=p.l(0,n)
l=s.r.l(0,o)
if(typeof m!=="number")return m.U()
if(typeof l!=="number")return H.au(l)
p.h(0,n,m+l)}}this.ae()},
ae:function(){var t,s,r
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bW)(t),++r)t[r].fh()
this.aW()},
aW:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
t=document
s=t.querySelector("#canvas")
r=J.pV(s)
r.fillStyle="#FFFFFF"
r.fillRect(0,0,s.width,s.height)
if(this.b.length!==0){q=this.c
q=new H.bx(q,new A.kP(),[H.v(q,0)])
q=!q.gN(q).D()}else q=!0
if(q)return
p=H.ex(t.querySelector("input[type=radio][name=stat]:checked"),"$isec").value
o=p==="*"?null:this.d.l(0,p)
for(t=this.c,q=t.length,n=0,m=0,l=0,k=0,j=0;j<t.length;t.length===q||(0,H.bW)(t),++j){i=t[j]
if(i.b!==!0)continue
n+=J.cF(i.x)
m=Math.max(m,i.z)
l=Math.min(l,H.dB(i.dN(o)))
k=Math.max(k,H.dB(i.dM(o)))}if(n===0)return
q=this.a
q.ab("stat: "+H.p(o)+", total points: "+n+", turns: "+H.p(m)+", min: "+H.p(l)+", max: "+H.p(k))
h=s.width
if(typeof h!=="number")return h.ay()
g=h-50
h=s.height
if(typeof h!=="number")return h.ay()
f=h-50
e=g/(m-1)
d=Math.max(k-l,5)
c=A.ue(l,k,f)
if(k<=0)b=0
else{if(typeof c!=="number")return H.au(c)
b=C.d.c5(k/c)+1}if(l>=0)a=0
else{if(typeof c!=="number")return H.au(c)
a=C.d.c5(Math.abs(l)/c)+1}if(typeof c!=="number")return H.au(c)
a0=Math.max(C.d.c5(d/c),b+a)
a1=f/(c*a0)
a2=C.c.a2(c*a*a1)
q.ab("grid increment: "+H.p(c))
q.ab("w: "+g+", h: "+f+", xinc: "+H.p(e)+", yinc: "+H.p(f/d)+", yrange: "+H.p(d))
r.textAlign="center"
for(q=f+25,h=q+12,a3=0;a3<m;){r.fillStyle="#E5E5E5"
a4=C.d.a2(e*a3)+25
r.fillRect(a4,25,1,f)
r.fillStyle="#555555";++a3
r.fillText(A.pC(a3),a4,h)}r.textAlign="right"
for(h=f/a0,a3=0;a3<=a0;++a3){r.fillStyle="#E5E5E5"
a5=C.d.a2(h*a3)
r.fillRect(25,a5+25,g,1)
r.fillStyle="#555555"
r.fillText(A.pC((a3-a)*c),23,q-a5+5)}r.fillStyle="#555555"
q=25+f
r.fillRect(25,q-h*a,g,1)
r.fillRect(25,25,1,f)
for(h=t.length,q-=a2,j=0;j<t.length;t.length===h||(0,H.bW)(t),++j){i=t[j]
if(i.b!==!0)continue
for(a6=0,a7=!1,a8=1;a8<=m;++a8){a4=J.dF(i.x,new A.kQ(a8))
if(a4.gZ(a4))continue
a9=J.pL(new H.dn(a4,new A.kR(o),[H.v(a4,0),null]).h7(0,new A.kS()),a4.gF(a4))
b0=C.d.a2(e*(a8-1))+25
a5=q-J.pZ(J.n5(a9,a1))
a4=a4.gF(a4)
b1=i.Q
r.strokeStyle="rgba("+H.p(i.c.b)+","+H.p(i.c.c)+","+H.p(i.c.d)+","+C.d.hj(a4/b1*0.8+0.2,2)
r.strokeRect(b0-0.5,a5-0.5,2,2)
if(a8>1&&!0){a4=C.d.a2(e*(a8-2))
r.beginPath()
r.moveTo(a4+25+0.5,a6+0.5)
r.lineTo(b0+0.5,a5+0.5)
r.stroke()}a6=a5
a7=!0}}},
da:function(a){var t,s,r,q,p,o,n,m,l
t=document
s=H.ex(t.querySelector("#select_class"),"$isc9").value
r=H.ex(t.querySelector("#select_aspect"),"$isc9").value
q=H.ex(t.querySelector("#select_interest1"),"$isc9").value
p=H.ex(t.querySelector("#select_interest2"),"$isc9").value
o=s==="*"?null:T.tG(s)
n=r==="*"?null:L.qn(r)
m=q==="*"?null:B.oF(q)
l=A.tJ(this,o,n,m,p==="*"?null:B.oF(p))
this.c.push(l)
l.c8(0)
t.querySelector("#line_container").appendChild(l.y)
this.ae()},
fd:function(){return this.da(null)},
dc:function(a){var t,s,r,q,p,o,n
t=this.d.l(0,a)
s=document
r=s.querySelector("#stats_container")
q=s.createElement("div")
q.className="selection_block"
p=W.aJ("radio")
o=J.W(p)
o.sE(p,"stat")
n=J.W(t)
o.sW(p,n.gE(t))
p.id="stat_"+H.p(n.gE(t))
o=o.gce(p)
W.a6(o.a,o.b,new A.kK(this),!1,H.v(o,0))
q.appendChild(p)
s=s.createElement("label")
s.htmlFor="stat_"+H.p(n.gE(t))
s.textContent=n.gE(t)
q.appendChild(s)
r.appendChild(q)},
ed:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=document
s=J.oc(t.querySelector("#add_line"))
W.a6(s.a,s.b,this.gfc(),!1,H.v(s,0))
r=t.querySelector("#select_class")
s=T.tE()
q=P.cv(s,!0,H.v(s,0))
C.a.aY(q,new A.kL())
for(s=q.length,p=0;p<q.length;q.length===s||(0,H.bW)(q),++p){o=J.bq(q[p])
n=W.k0(o,o,null,!1)
n.textContent=o
r.appendChild(n)}r=t.querySelector("#select_aspect")
s=L.ql()
m=P.cv(s,!0,H.v(s,0))
C.a.aY(m,new A.kM())
for(s=m.length,p=0;p<m.length;m.length===s||(0,H.bW)(m),++p){o=J.bq(m[p])
n=W.k0(o,o,null,!1)
n.textContent=o
r.appendChild(n)}r=t.querySelector("#select_interest1")
l=t.querySelector("#select_interest2")
s=B.r_()
k=P.cv(s,!0,H.v(s,0))
C.a.aY(k,new A.kN())
for(s=k.length,p=0;p<k.length;k.length===s||(0,H.bW)(k),++p){j=k[p]
o=J.W(j)
n=o.gE(j)
i=W.k0(n,n,null,!1)
i.textContent=n
r.appendChild(i)
o=o.gE(j)
i=W.k0(o,o,null,!1)
i.textContent=o
l.appendChild(i)}t=J.oc(t.querySelector("#stat_average"))
W.a6(t.a,t.b,new A.kO(this),!1,H.v(t,0))},
gK:function(){return this.d}}
A.kL.prototype={
$2:function(a,b){return J.fW(J.bq(a),J.bq(b))},
$S:function(){return{func:1,args:[T.cA,T.cA]}}}
A.kM.prototype={
$2:function(a,b){return J.fW(J.bq(a),J.bq(b))},
$S:function(){return{func:1,args:[L.cg,L.cg]}}}
A.kN.prototype={
$2:function(a,b){return J.fW(J.bq(a),J.bq(b))},
$S:function(){return{func:1,args:[B.cp,B.cp]}}}
A.kO.prototype={
$1:function(a){return this.a.aW()},
$S:function(){return{func:1,args:[W.z]}}}
A.kP.prototype={
$1:function(a){return a.gfz()},
$S:function(){return{func:1,args:[A.ed]}}}
A.kQ.prototype={
$1:function(a){return J.ac(a.gbE(),this.a)},
$S:function(){return{func:1,args:[E.aO]}}}
A.kR.prototype={
$1:function(a){return a.dO(this.a)},
$S:function(){return{func:1,args:[E.aO]}}}
A.kS.prototype={
$2:function(a,b){return J.dE(a,b)},
$S:function(){return{func:1,args:[P.t,P.t]}}}
A.kK.prototype={
$1:function(a){return this.a.aW()},
$S:function(){return{func:1,args:[W.z]}}}
A.ed.prototype={
c8:function(a){var t,s,r,q,p,o,n
t=document
s=t.createElement("div")
s.className="selection_block"
r=W.aJ("checkbox")
q=J.W(r)
q.saU(r,!0)
q=q.ga1(r)
W.a6(q.a,q.b,new A.kH(this,r),!1,H.v(q,0))
s.appendChild(r)
p=W.aJ("color")
q=J.W(p)
q.sW(p,this.c.a8())
q=q.ga1(p)
W.a6(q.a,q.b,new A.kI(this,p),!1,H.v(q,0))
s.appendChild(p)
E.qv(p,null,14540253,25,48)
q=t.createElement("span")
o=this.d
o=H.p(o==null?"[Any class]":o)+" of "
n=this.e
o=o+H.p(n==null?"[Any aspect]":n)+" ["
n=this.f
o=o+H.p(n==null?"Any interest":J.bq(n))+", "
n=this.r
q.textContent=o+H.p(n==null?"Any interest":J.bq(n))+"]"
s.appendChild(q)
t=t.createElement("button")
t.textContent="Remove"
W.a6(t,"click",new A.kJ(this),!1,W.aA)
s.appendChild(t)
this.y=s},
fh:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=D.cC
s=P.t
this.ch=P.c5(t,s)
this.cx=P.c5(t,s)
this.cy=0
this.db=0
for(t=this.a,s=t.d,s=s.gaf(s),s=s.gN(s);s.D();){r=s.gH()
this.ch.h(0,r,0)
this.cx.h(0,r,0)}for(s=J.bp(this.x);s.D();){q=s.gH()
this.z=Math.max(this.z,H.dB(q.gbE()))}for(p=1;p<=this.z;++p){o=J.dF(this.x,new A.kB(p))
this.Q=Math.max(this.Q,o.gF(o))
for(s=t.d,s=s.gaf(s),s=s.gN(s),n=o.a,m=J.ew(n),l=o.b,k=[H.v(o,0)],j=0;s.D();){r=s.gH()
for(i=m.gN(n),h=new H.ei(i,l,k),g=0;h.D();){q=i.gH()
f=J.n6(q.gK(),r)
if(typeof f!=="number")return H.au(f)
g+=f
f=J.n6(q.gK(),r)
if(typeof f!=="number")return H.au(f)
j+=f}g/=o.gF(o)
i=this.ch
i.h(0,r,Math.min(H.dB(i.l(0,r)),g))
i=this.cx
i.h(0,r,Math.max(H.dB(i.l(0,r)),g))}s=t.d
j/=s.gF(s)*o.gF(o)
this.cy=Math.min(H.dB(this.cy),j)
this.db=Math.max(H.dB(this.db),j)}t.a.ab(H.p(this.d)+" of "+H.p(this.e)+", "+H.p(this.f)+" + "+H.p(this.r)+": maxturn: "+H.p(this.z)+", minima: "+J.bh(this.ch)+", maxima: "+J.bh(this.cx))},
dN:function(a){if(a!=null)return this.ch.l(0,a)
return this.cy},
dM:function(a){if(a!=null)return this.cx.l(0,a)
return this.db},
ec:function(a,b,c,d,e){var t,s,r,q
t=this.a.b
this.x=t
if(this.d!=null){t=C.a.cv(t,new A.kC(this))
this.x=t}s=this.e
r=s!=null
if(r){t=J.dF(t,new A.kD(this))
this.x=t}q=this.f==null
if(!q||this.r!=null){q=!q
if(q&&this.r!=null)this.x=J.dF(t,new A.kE(this))
else if(q)this.x=J.dF(t,new A.kF(this))
else if(this.r!=null)this.x=J.dF(t,new A.kG(this))}if(r)this.c=A.b0(s.gaa().l(0,$.aa))
else{t=$.$get$n0().a.bg()
s=$.$get$n0().a.bg()
r=$.$get$n0().a.bg()
q=A.bs(0,0,0,255)
q.aO(t,s*0.3+0.7,r*0.3+0.7)
this.c=q}},
gfz:function(){return this.b},
gcA:function(){return this.d},
gaK:function(){return this.e},
gb7:function(){return this.f},
gb8:function(){return this.r}}
A.kC.prototype={
$1:function(a){return J.ac(a.gcA(),this.a.d)},
$S:function(){return{func:1,args:[E.aO]}}}
A.kD.prototype={
$1:function(a){return J.ac(a.gaK(),this.a.e)},
$S:function(){return{func:1,args:[E.aO]}}}
A.kE.prototype={
$1:function(a){var t,s
t=this.a
s=t.f
if(!(J.ac(a.gb7(),s)&&J.ac(a.gb8(),t.r)))t=J.ac(a.gb7(),t.r)&&J.ac(a.gb8(),s)
else t=!0
return t},
$S:function(){return{func:1,args:[E.aO]}}}
A.kF.prototype={
$1:function(a){var t=this.a.f
return J.ac(a.gb7(),t)||J.ac(a.gb8(),t)},
$S:function(){return{func:1,args:[E.aO]}}}
A.kG.prototype={
$1:function(a){var t=this.a.r
return J.ac(a.gb7(),t)||J.ac(a.gb8(),t)},
$S:function(){return{func:1,args:[E.aO]}}}
A.kH.prototype={
$1:function(a){var t,s
t=this.a
s=J.pU(this.b)
t.b=s
t=t.a
t.a.al(C.i,"Enabled: "+H.p(s))
t.aW()},
$S:function(){return{func:1,args:[W.z]}}}
A.kI.prototype={
$1:function(a){var t=this.a
t.c=A.eD(J.of(J.na(this.b),1))
t.a.aW()},
$S:function(){return{func:1,args:[W.z]}}}
A.kJ.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.a
C.a.a4(s.c,t)
t=t.y
r=t.parentNode
if(r!=null)r.removeChild(t)
s.aW()},
$S:function(){return{func:1,args:[W.z]}}}
A.kB.prototype={
$1:function(a){return J.ac(a.gbE(),this.a)},
$S:function(){return{func:1,args:[E.aO]}}}
E.aO.prototype={
dO:function(a){var t,s,r
if(a!=null)return this.f.l(0,a)
for(t=this.f,t=t.gaf(t),t=t.gN(t),s=0;t.D();){r=t.gH()
if(typeof r!=="number")return H.au(r)
s+=r}t=this.f
if(t.gZ(t))t=0
else{t=this.f
t=s/t.gF(t)}return t},
gbE:function(){return this.a},
gcA:function(){return this.b},
gaK:function(){return this.c},
gb7:function(){return this.d},
gb8:function(){return this.e},
gK:function(){return this.f},
ge1:function(){return this.r}}
Q.bT.prototype={
k:function(a,b){return b},
w:function(a){return J.bh(this.gbB())},
ai:function(a,b){return Q.nU(this,b,H.ab(this,"bT",0),null)},
a3:function(a,b){return Q.nT(this,!1,!0,null,H.ab(this,"bT",0))},
aj:function(a){return this.a3(a,!0)},
$isC:1,
$asC:null}
Q.lp.prototype={
gbB:function(){return this.b},
l:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.I(t,b)
return J.n9(t[b])},
h:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.I(t,b)
t[b]=new Q.d(c,s,this.$ti)},
gF:function(a){return this.b.length},
w:function(a){return P.fb(this.b,"[","]")},
ai:function(a,b){return Q.nU(this,b,H.v(this,0),null)},
a3:function(a,b){return Q.nT(this,!1,!0,null,H.v(this,0))},
aj:function(a){return this.a3(a,!0)},
ef:function(a,b,c){var t,s
this.a=a
t=[[Q.d,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.fE.prototype={$asbT:null,$asC:null,$asV:null,$asT:null,$isV:1,$isT:1,$isC:1}
Q.d.prototype={
w:function(a){return"("+H.p(this.a)+" @ "+H.p(this.b)+")"},
gbd:function(a){return this.a},
ghr:function(){return this.b}}
Q.d_.prototype={
gbB:function(){return this.b},
gN:function(a){var t=new Q.lo(null,[H.ab(this,"d_",0)])
t.a=J.bp(this.b)
return t},
gF:function(a){return J.cF(this.b)},
w:function(a){return J.bh(this.b)},
ai:function(a,b){return Q.nU(this,b,H.ab(this,"d_",0),null)},
a3:function(a,b){return Q.nT(this,!1,!0,null,H.ab(this,"d_",0))},
aj:function(a){return this.a3(a,!0)}}
Q.eh.prototype={$asbT:null,$asC:null,$isC:1}
Q.lo.prototype={
gH:function(){return J.n9(this.a.gH())},
D:function(){return this.a.D()}}
Q.fF.prototype={
$asd_:function(a,b){return[b]},
$aseh:function(a,b){return[b]},
$asbT:function(a,b){return[b]},
$asC:function(a,b){return[b]}}
Q.lq.prototype={
$1:function(a){return new Q.d(this.c.$1(J.n9(a)),a.ghr(),[this.b])},
$S:function(){return H.mL(function(a,b){return{func:1,args:[[Q.d,a]]}},this,"fF")}}
J.J.prototype.e4=J.J.prototype.w
J.e1.prototype.e5=J.e1.prototype.w
P.bJ.prototype.e6=P.bJ.prototype.aP
P.bJ.prototype.e7=P.bJ.prototype.bn;(function installTearOffs(){installTearOff(H.dw.prototype,"gfS",0,0,0,null,["$0"],["bA"],1)
installTearOff(H.bU.prototype,"gdP",0,0,0,null,["$1"],["ag"],5)
installTearOff(H.d0.prototype,"gft",0,0,0,null,["$1"],["aC"],5)
installTearOff(P,"u9",1,0,0,null,["$1"],["tQ"],4)
installTearOff(P,"ua",1,0,0,null,["$1"],["tR"],4)
installTearOff(P,"ub",1,0,0,null,["$1"],["tS"],4)
installTearOff(P,"pz",1,0,0,null,["$0"],["u6"],1)
installTearOff(P,"ud",1,0,0,null,["$2","$1"],["pq",function(a){return P.pq(a,null)}],6)
installTearOff(P,"uc",1,0,0,null,["$0"],["u4"],1)
installTearOff(P.aQ.prototype,"gbN",0,0,0,null,["$2","$1"],["ar","ev"],6)
var t
installTearOff(t=P.fK.prototype,"gbY",0,0,0,null,["$0"],["aS"],1)
installTearOff(t,"gbZ",0,0,0,null,["$0"],["aT"],1)
installTearOff(t=P.bJ.prototype,"gbY",0,0,0,null,["$0"],["aS"],1)
installTearOff(t,"gbZ",0,0,0,null,["$0"],["aT"],1)
installTearOff(t=P.em.prototype,"gbY",0,0,0,null,["$0"],["aS"],1)
installTearOff(t,"gbZ",0,0,0,null,["$0"],["aT"],1)
installTearOff(t,"geE",0,0,0,null,["$1"],["eF"],function(){return H.mL(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"em")})
installTearOff(t,"geI",0,0,0,null,["$2"],["eJ"],9)
installTearOff(t,"geG",0,0,0,null,["$0"],["eH"],1)
installTearOff(P,"uj",1,0,0,null,["$2"],["qx"],15)
installTearOff(P,"uk",1,0,0,null,["$1"],["n_"],2)
installTearOff(t=W.eF.prototype,"gah",0,1,0,null,["$1"],["c9"],2)
installTearOff(t,"gfL",0,0,0,null,["$1"],["ds"],2)
installTearOff(t,"gbE",0,0,0,null,["$1"],["hg"],10)
installTearOff(t,"ghp",0,0,0,null,["$1"],["hq"],2)
installTearOff(W.d6.prototype,"gbd",0,1,0,null,["$1"],["aL"],11)
installTearOff(W.dd.prototype,"gbd",0,1,0,null,["$1"],["aL"],12)
installTearOff(W.eV.prototype,"gbd",0,1,0,null,["$1"],["aL"],7)
installTearOff(W.c9.prototype,"gbd",0,1,0,null,["$1"],["aL"],7)
installTearOff(R,"cX",1,0,0,null,["$1"],["ta"],0)
installTearOff(R,"p4",1,0,0,null,["$1"],["rZ"],0)
installTearOff(R,"nM",1,0,0,null,["$1"],["t9"],0)
installTearOff(R,"aB",1,0,0,null,["$1"],["t8"],0)
installTearOff(R,"nL",1,0,0,null,["$1"],["t7"],0)
installTearOff(R,"p6",1,0,0,null,["$1"],["t5"],0)
installTearOff(R,"eb",1,0,0,null,["$1"],["t4"],0)
installTearOff(R,"cW",1,0,0,null,["$1"],["t1"],0)
installTearOff(R,"cy",1,0,0,null,["$1"],["t3"],0)
installTearOff(R,"dq",1,0,0,null,["$1"],["t6"],0)
installTearOff(R,"nK",1,0,0,null,["$1"],["t2"],0)
installTearOff(R,"m",1,0,0,null,["$1"],["t_"],0)
installTearOff(R,"p5",1,0,0,null,["$1"],["t0"],0)
installTearOff(t=E.dK.prototype,"gdY",0,0,0,null,["$1","$0"],["cD","aI"],8)
installTearOff(t,"gdX",0,0,0,null,["$1","$0"],["cB","aH"],8)
installTearOff(t,"gew",0,0,0,null,["$1","$0"],["cQ","ex"],3)
installTearOff(t,"ges",0,0,0,null,["$1","$0"],["cO","eu"],3)
installTearOff(t,"gf0",0,0,0,null,["$1","$0"],["d4","d3"],3)
installTearOff(t,"ghb",0,0,0,null,["$1","$0"],["dB","cn"],3)
installTearOff(E.cK.prototype,"geO",0,0,0,null,["$1"],["eP"],13)
installTearOff(F.dm.prototype,"gah",0,1,0,null,["$1"],["c9"],2)
installTearOff(A,"pJ",1,0,0,null,["$0"],["uv"],1)
installTearOff(t=A.fy.prototype,"gf9",0,0,0,null,["$2"],["fa"],14)
installTearOff(t,"gfc",0,0,0,null,["$1","$0"],["da","fd"],3)})();(function inheritance(){inherit(P.ar,null)
var t=P.ar
inherit(H.nB,t)
inherit(J.J,t)
inherit(J.h1,t)
inherit(P.C,t)
inherit(H.fi,t)
inherit(P.fd,t)
inherit(H.eT,t)
inherit(H.d5,t)
inherit(H.md,t)
inherit(H.dw,t)
inherit(H.lJ,t)
inherit(H.d1,t)
inherit(H.mc,t)
inherit(H.lB,t)
inherit(H.dr,t)
inherit(H.le,t)
inherit(H.bZ,t)
inherit(H.bU,t)
inherit(H.d0,t)
inherit(H.kf,t)
inherit(H.lh,t)
inherit(P.cJ,t)
inherit(H.dN,t)
inherit(H.fP,t)
inherit(H.cD,t)
inherit(H.l,t)
inherit(H.jt,t)
inherit(H.jv,t)
inherit(H.fh,t)
inherit(H.mf,t)
inherit(H.lu,t)
inherit(H.l1,t)
inherit(H.mz,t)
inherit(P.bb,t)
inherit(P.lF,t)
inherit(P.fN,t)
inherit(P.aQ,t)
inherit(P.fH,t)
inherit(P.cb,t)
inherit(P.kV,t)
inherit(P.mt,t)
inherit(P.lz,t)
inherit(P.bJ,t)
inherit(P.fL,t)
inherit(P.lG,t)
inherit(P.mh,t)
inherit(P.mx,t)
inherit(P.d2,t)
inherit(P.mE,t)
inherit(P.m1,t)
inherit(P.m3,t)
inherit(P.ks,t)
inherit(P.ma,t)
inherit(P.by,t)
inherit(P.dj,t)
inherit(P.c6,t)
inherit(P.mb,t)
inherit(P.cd,t)
inherit(P.aF,t)
inherit(P.bK,t)
inherit(P.ci,t)
inherit(P.k1,t)
inherit(P.fw,t)
inherit(P.lN,t)
inherit(P.iQ,t)
inherit(P.ie,t)
inherit(P.V,t)
inherit(P.bQ,t)
inherit(P.cT,t)
inherit(P.cB,t)
inherit(P.B,t)
inherit(P.ef,t)
inherit(W.eF,t)
inherit(W.i1,t)
inherit(W.ec,t)
inherit(W.eX,t)
inherit(W.iO,t)
inherit(P.mA,t)
inherit(P.fR,t)
inherit(P.m7,t)
inherit(P.mj,t)
inherit(P.cw,t)
inherit(P.mk,t)
inherit(P.cH,t)
inherit(B.cp,t)
inherit(L.cg,t)
inherit(A.fp,t)
inherit(T.cA,t)
inherit(X.eK,t)
inherit(X.eA,t)
inherit(M.dO,t)
inherit(N.Q,t)
inherit(O.dX,t)
inherit(Z.ig,t)
inherit(E.jZ,t)
inherit(E.A,t)
inherit(A.M,t)
inherit(U.b,t)
inherit(Y.c7,t)
inherit(X.q,t)
inherit(G.L,t)
inherit(A.d4,t)
inherit(B.hb,t)
inherit(A.bA,t)
inherit(E.dK,t)
inherit(E.cK,t)
inherit(F.dl,t)
inherit(F.dm,t)
inherit(A.fs,t)
inherit(D.cC,t)
inherit(A.fy,t)
inherit(A.ed,t)
inherit(E.aO,t)
inherit(Q.bT,t)
inherit(Q.d,t)
t=J.J
inherit(J.ji,t)
inherit(J.fg,t)
inherit(J.e1,t)
inherit(J.cP,t)
inherit(J.dk,t)
inherit(J.cQ,t)
inherit(H.dp,t)
inherit(H.cU,t)
inherit(W.dM,t)
inherit(W.d3,t)
inherit(W.eB,t)
inherit(W.eZ,t)
inherit(W.z,t)
inherit(W.eI,t)
inherit(W.i5,t)
inherit(W.f_,t)
inherit(W.cM,t)
inherit(W.jV,t)
inherit(W.jW,t)
inherit(W.lE,t)
t=J.e1
inherit(J.k7,t)
inherit(J.cZ,t)
inherit(J.cR,t)
inherit(J.nA,J.cP)
t=J.dk
inherit(J.ff,t)
inherit(J.fe,t)
t=P.C
inherit(H.T,t)
inherit(H.dn,t)
inherit(H.bx,t)
inherit(P.fa,t)
inherit(H.my,t)
t=H.T
inherit(H.cS,t)
inherit(H.ju,t)
inherit(P.m2,t)
inherit(H.dL,H.dn)
t=P.fd
inherit(H.fj,t)
inherit(H.ei,t)
inherit(Q.lo,t)
t=H.cS
inherit(H.e4,t)
inherit(P.jw,t)
t=H.d5
inherit(H.n2,t)
inherit(H.n3,t)
inherit(H.m6,t)
inherit(H.lK,t)
inherit(H.j3,t)
inherit(H.j4,t)
inherit(H.mg,t)
inherit(H.lf,t)
inherit(H.lg,t)
inherit(H.n4,t)
inherit(H.mU,t)
inherit(H.mV,t)
inherit(H.mW,t)
inherit(H.mX,t)
inherit(H.mY,t)
inherit(H.l7,t)
inherit(H.jj,t)
inherit(H.mQ,t)
inherit(H.mR,t)
inherit(H.mS,t)
inherit(P.lw,t)
inherit(P.lv,t)
inherit(P.lx,t)
inherit(P.ly,t)
inherit(P.mF,t)
inherit(P.mG,t)
inherit(P.mJ,t)
inherit(P.lO,t)
inherit(P.lW,t)
inherit(P.lS,t)
inherit(P.lT,t)
inherit(P.lU,t)
inherit(P.lQ,t)
inherit(P.lV,t)
inherit(P.lP,t)
inherit(P.lZ,t)
inherit(P.m_,t)
inherit(P.lY,t)
inherit(P.lX,t)
inherit(P.kY,t)
inherit(P.kZ,t)
inherit(P.l_,t)
inherit(P.l0,t)
inherit(P.kW,t)
inherit(P.kX,t)
inherit(P.mv,t)
inherit(P.mu,t)
inherit(P.lD,t)
inherit(P.lC,t)
inherit(P.mi,t)
inherit(P.mH,t)
inherit(P.mI,t)
inherit(P.mm,t)
inherit(P.mn,t)
inherit(P.mo,t)
inherit(P.m4,t)
inherit(P.jB,t)
inherit(P.i9,t)
inherit(P.ia,t)
inherit(W.lM,t)
inherit(P.mC,t)
inherit(L.h2,t)
inherit(O.iK,t)
inherit(O.iL,t)
inherit(O.iM,t)
inherit(Z.iR,t)
inherit(B.j2,t)
inherit(A.jh,t)
inherit(A.jg,t)
inherit(T.kj,t)
inherit(G.jf,t)
inherit(A.mK,t)
inherit(E.hI,t)
inherit(E.hJ,t)
inherit(E.hK,t)
inherit(E.hS,t)
inherit(E.hT,t)
inherit(E.hU,t)
inherit(E.hV,t)
inherit(E.hW,t)
inherit(E.hX,t)
inherit(E.hY,t)
inherit(E.hZ,t)
inherit(E.hL,t)
inherit(E.hM,t)
inherit(E.hN,t)
inherit(E.hO,t)
inherit(E.hP,t)
inherit(E.hQ,t)
inherit(E.hR,t)
inherit(E.hh,t)
inherit(E.hi,t)
inherit(E.hj,t)
inherit(E.hk,t)
inherit(E.hv,t)
inherit(E.hB,t)
inherit(E.hC,t)
inherit(E.hD,t)
inherit(E.hE,t)
inherit(E.hF,t)
inherit(E.hG,t)
inherit(E.hH,t)
inherit(E.hl,t)
inherit(E.hm,t)
inherit(E.hn,t)
inherit(E.ho,t)
inherit(E.hp,t)
inherit(E.hq,t)
inherit(E.hr,t)
inherit(E.hs,t)
inherit(E.ht,t)
inherit(E.hu,t)
inherit(E.hw,t)
inherit(E.hx,t)
inherit(E.hy,t)
inherit(E.hz,t)
inherit(E.hA,t)
inherit(E.hf,t)
inherit(E.hg,t)
inherit(D.kU,t)
inherit(A.kL,t)
inherit(A.kM,t)
inherit(A.kN,t)
inherit(A.kO,t)
inherit(A.kP,t)
inherit(A.kQ,t)
inherit(A.kR,t)
inherit(A.kS,t)
inherit(A.kK,t)
inherit(A.kC,t)
inherit(A.kD,t)
inherit(A.kE,t)
inherit(A.kF,t)
inherit(A.kG,t)
inherit(A.kH,t)
inherit(A.kI,t)
inherit(A.kJ,t)
inherit(A.kB,t)
inherit(Q.lq,t)
t=H.lB
inherit(H.dx,t)
inherit(H.eq,t)
t=P.cJ
inherit(H.fo,t)
inherit(H.jk,t)
inherit(H.lj,t)
inherit(H.hd,t)
inherit(H.ki,t)
inherit(P.ea,t)
inherit(P.cf,t)
inherit(P.aY,t)
inherit(P.du,t)
inherit(P.bR,t)
inherit(P.bL,t)
inherit(P.i4,t)
t=H.l7
inherit(H.kT,t)
inherit(H.dI,t)
inherit(H.lt,P.fa)
t=H.cU
inherit(H.jM,t)
inherit(H.fk,t)
t=H.fk
inherit(H.e6,t)
inherit(H.e7,t)
inherit(H.e8,H.e6)
inherit(H.fl,H.e8)
inherit(H.e9,H.e7)
inherit(H.fm,H.e9)
t=H.fl
inherit(H.jN,t)
inherit(H.jO,t)
t=H.fm
inherit(H.jP,t)
inherit(H.jQ,t)
inherit(H.jR,t)
inherit(H.jS,t)
inherit(H.jT,t)
inherit(H.fn,t)
inherit(H.jU,t)
inherit(P.mD,P.lF)
inherit(P.fI,P.mt)
t=P.cb
inherit(P.mw,t)
inherit(P.el,t)
inherit(W.fM,t)
inherit(P.fJ,P.mw)
t=P.bJ
inherit(P.fK,t)
inherit(P.em,t)
t=P.fL
inherit(P.ej,t)
inherit(P.lH,t)
inherit(P.fQ,P.mh)
inherit(P.me,P.el)
inherit(P.ml,P.mE)
inherit(P.fO,H.l)
inherit(P.kr,P.ks)
inherit(P.m5,P.kr)
inherit(P.m9,P.m5)
t=P.bK
inherit(P.t,t)
inherit(P.N,t)
t=P.cf
inherit(P.ft,t)
inherit(P.j0,t)
t=W.dM
inherit(W.cV,t)
inherit(W.eS,t)
inherit(W.jG,t)
inherit(W.fG,t)
inherit(W.ms,t)
t=W.cV
inherit(W.cj,t)
inherit(W.cI,t)
inherit(W.eH,t)
inherit(W.lA,t)
inherit(W.lI,t)
t=W.cj
inherit(W.a_,t)
inherit(P.aX,t)
t=W.a_
inherit(W.h_,t)
inherit(W.h0,t)
inherit(W.h7,t)
inherit(W.ha,t)
inherit(W.hc,t)
inherit(W.ib,t)
inherit(W.iJ,t)
inherit(W.eV,t)
inherit(W.iY,t)
inherit(W.iZ,t)
inherit(W.eY,t)
inherit(W.jm,t)
inherit(W.jo,t)
inherit(W.js,t)
inherit(W.jA,t)
inherit(W.e5,t)
inherit(W.jE,t)
inherit(W.jF,t)
inherit(W.jH,t)
inherit(W.jI,t)
inherit(W.jX,t)
inherit(W.jY,t)
inherit(W.k_,t)
inherit(W.k2,t)
inherit(W.k5,t)
inherit(W.kb,t)
inherit(W.ko,t)
inherit(W.c9,t)
inherit(W.kt,t)
inherit(W.kw,t)
inherit(W.l2,t)
inherit(W.la,t)
inherit(W.m0,t)
inherit(W.d6,W.eZ)
t=W.z
inherit(W.i3,t)
inherit(W.ic,t)
inherit(W.bS,t)
inherit(W.ky,t)
inherit(W.kz,t)
inherit(W.aM,W.d3)
inherit(W.f0,W.f_)
inherit(W.dd,W.f0)
inherit(W.aA,W.bS)
inherit(W.ek,W.fM)
inherit(W.lL,P.kV)
inherit(P.mB,P.mA)
inherit(P.cz,P.mk)
t=P.aX
inherit(P.co,t)
inherit(P.cG,t)
inherit(P.ih,t)
inherit(P.ii,t)
inherit(P.ij,t)
inherit(P.ik,t)
inherit(P.il,t)
inherit(P.im,t)
inherit(P.io,t)
inherit(P.ip,t)
inherit(P.iq,t)
inherit(P.ir,t)
inherit(P.is,t)
inherit(P.it,t)
inherit(P.iu,t)
inherit(P.iv,t)
inherit(P.iw,t)
inherit(P.ix,t)
inherit(P.iy,t)
inherit(P.iz,t)
inherit(P.iN,t)
inherit(P.jC,t)
inherit(P.jD,t)
inherit(P.k6,t)
inherit(P.kp,t)
inherit(P.l3,t)
inherit(P.l6,t)
inherit(P.ll,t)
inherit(P.en,t)
inherit(P.mp,t)
inherit(P.mq,t)
inherit(P.mr,t)
t=P.co
inherit(P.fY,t)
inherit(P.iP,t)
inherit(P.bO,t)
inherit(P.j_,t)
inherit(P.l4,t)
inherit(P.fD,t)
inherit(P.lk,t)
inherit(P.ke,P.bO)
t=P.fD
inherit(P.lb,t)
inherit(P.eg,t)
t=B.cp
inherit(S.fZ,t)
inherit(M.h4,t)
inherit(A.i0,t)
inherit(M.i2,t)
inherit(V.i6,t)
inherit(U.iB,t)
inherit(N.jl,t)
inherit(F.jL,t)
inherit(G.k8,t)
inherit(Q.kh,t)
inherit(N.kv,t)
inherit(D.l8,t)
inherit(V.l9,t)
inherit(F.ls,t)
inherit(A.k4,A.fp)
inherit(L.a8,A.k4)
t=T.cA
inherit(O.h5,t)
inherit(Y.iS,t)
inherit(Y.iT,t)
inherit(B.iV,t)
inherit(X.iX,t)
inherit(S.jn,t)
inherit(Z.jx,t)
inherit(S.jy,t)
inherit(U.jz,t)
inherit(E.jK,t)
inherit(V.k3,t)
inherit(N.ka,t)
inherit(N.kg,t)
inherit(E.kk,t)
inherit(Y.km,t)
inherit(L.kn,t)
inherit(S.kq,t)
inherit(Y.ku,t)
inherit(R.l5,t)
inherit(U.lc,t)
inherit(E.ln,t)
inherit(M.lr,t)
t=L.cg
inherit(T.h6,t)
inherit(T.h9,t)
inherit(U.i7,t)
inherit(Z.i8,t)
inherit(T.iU,t)
inherit(X.iW,t)
inherit(Q.jp,t)
inherit(K.jq,t)
inherit(G.jr,t)
inherit(V.jJ,t)
inherit(E.kd,t)
inherit(K.kl,t)
inherit(N.kx,t)
inherit(N.ld,t)
inherit(Q.lm,t)
inherit(O.ez,O.dX)
inherit(E.eW,E.jZ)
t=E.A
inherit(E.dH,t)
inherit(E.h3,t)
inherit(U.K,U.b)
inherit(R.kc,N.Q)
t=R.kc
inherit(R.H,t)
inherit(R.D,t)
inherit(R.P,t)
inherit(R.as,R.P)
t=Y.c7
inherit(Y.R,t)
inherit(Y.aG,t)
inherit(Y.F,t)
inherit(Y.eG,t)
inherit(Y.at,t)
inherit(Y.bn,t)
inherit(Y.he,t)
inherit(Y.fq,t)
inherit(Y.eU,t)
inherit(Y.fr,t)
t=Y.aG
inherit(Y.br,t)
inherit(Y.ap,t)
inherit(G.fx,O.ez)
inherit(G.kA,G.fx)
inherit(G.eE,G.L)
t=Q.bT
inherit(Q.fE,t)
inherit(Q.eh,t)
inherit(Q.lp,Q.fE)
inherit(Q.d_,Q.eh)
inherit(Q.fF,Q.d_)
mixin(H.e6,P.c6)
mixin(H.e8,H.eT)
mixin(H.e7,P.c6)
mixin(H.e9,H.eT)
mixin(P.fI,P.lz)
mixin(W.eZ,W.i1)
mixin(W.f_,P.c6)
mixin(W.f0,W.eX)
mixin(A.fp,P.dj)
mixin(Q.fE,P.c6)
mixin(Q.eh,P.dj)})();(function constants(){C.n=W.eB.prototype
C.p=W.eS.prototype
C.h=W.eY.prototype
C.x=J.J.prototype
C.a=J.cP.prototype
C.d=J.fe.prototype
C.b=J.ff.prototype
C.y=J.fg.prototype
C.c=J.dk.prototype
C.f=J.cQ.prototype
C.F=J.cR.prototype
C.u=J.k7.prototype
C.m=J.cZ.prototype
C.j=new W.eF()
C.v=new P.k1()
C.k=new P.lG()
C.w=new P.m7()
C.e=new P.ml()
C.o=new P.ci(0)
C.z=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.q=function(hooks) { return hooks; }
C.A=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.B=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.C=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.r=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.D=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.E=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.t=new F.dl(0,"LogLevel.ERROR")
C.G=new F.dl(1,"LogLevel.WARN")
C.i=new F.dl(2,"LogLevel.INFO")
C.H=new F.dl(3,"LogLevel.VERBOSE")
C.I=H.aE("cH")
C.J=H.aE("uC")
C.l=H.aE("uE")
C.K=H.aE("uF")
C.L=H.aE("uG")
C.M=H.aE("uI")
C.N=H.aE("uJ")
C.O=H.aE("uK")
C.P=H.aE("oY")
C.Q=H.aE("bQ")
C.R=H.aE("B")
C.S=H.aE("uN")
C.T=H.aE("uO")
C.U=H.aE("uP")
C.V=H.aE("nS")
C.W=H.aE("cd")
C.X=H.aE("t")
C.Y=H.aE("N")
C.Z=H.aE("bK")})();(function staticFields(){$.p1="$cachedFunction"
$.p2="$cachedInvocation"
$.c_=0
$.dJ=null
$.og=null
$.o6=null
$.pw=null
$.pG=null
$.mM=null
$.mT=null
$.o7=null
$.dy=null
$.er=null
$.es=null
$.o1=!1
$.a2=C.e
$.ov=0
$.oq=null
$.op=null
$.or=null
$.qi=null
$.qj=null
$.q7=null
$.q8=null
$.q6=null
$.qa=null
$.qf=null
$.qe=null
$.qk=null
$.qg=null
$.qb=null
$.qd=null
$.q9=null
$.qc=null
$.qh=null
$.nc=null
$.ad="accent"
$.af="aspect1"
$.ae="aspect2"
$.an="shoe1"
$.am="shoe2"
$.ah="cloak1"
$.ai="cloak2"
$.ag="cloak3"
$.aa="shirt1"
$.al="shirt2"
$.ak="pants1"
$.aj="pants2"
$.X=1300
$.f=3
$.i=2
$.y=1
$.o=0.1
$.qF=null
$.d9=null
$.qD=null
$.dS=null
$.eR=null
$.ni=null
$.qB=null
$.oA=null
$.qG=null
$.iD=null
$.ng=null
$.iI=null
$.eL=null
$.cn=null
$.qE=null
$.nh=null
$.nn=null
$.dU=null
$.eQ=null
$.dP=null
$.b2=null
$.bB=null
$.dT=null
$.nm=null
$.aL=null
$.aK=null
$.ox=null
$.eO=null
$.da=null
$.eN=null
$.ba=null
$.cL=null
$.iH=null
$.bM=null
$.dV=null
$.aI=null
$.nk=null
$.qC=null
$.a4=null
$.b9=null
$.b8=null
$.aP=null
$.nj=null
$.aS=null
$.c3=null
$.c2=null
$.c1=null
$.ck=null
$.cl=null
$.dR=null
$.bC=null
$.eP=null
$.oB=null
$.iC=null
$.bt=null
$.b1=null
$.ao=null
$.dQ=null
$.db=null
$.nl=null
$.iE=null
$.eM=null
$.oz=null
$.bi=null
$.oD=null
$.ow=null
$.qI=null
$.d8=null
$.b7=null
$.cm=null
$.bN=null
$.dW=null
$.oy=null
$.oC=null
$.qH=null
$.iF=null
$.iG=null
$.dc=null
$.qS=null
$.qL=null
$.qM=null
$.qN=null
$.qO=null
$.qP=null
$.qQ=null
$.qR=null
$.qU=null
$.qV=null
$.qW=null
$.qX=null
$.qY=null
$.qZ=null
$.qT=null
$.rM="JACK"
$.rQ="PM"
$.rN="JS"
$.rL="HP"
$.rV="YD"
$.rS="SI"
$.rT="SU"
$.rO="ME"
$.rR="RB"
$.rJ="GN"
$.p_="MP"
$.rH="AR"
$.rP="PE"
$.rI="DP"
$.rU="WV"
$.rK="HB"
$.j="PLAYER1TAG"
$.cY="PLAYER2TAG"
$.n="DENIZENTAG"
$.k="CONSORTTAG"
$.x="CONSORTSOUNDTAG"
$.a0="MCGUFFINTAG"
$.S="TAGPHYSICALMCGUFFIN"
$.aN="TAGWEAPON"
$.tn=null
$.ty=null
$.ti=null
$.tl=null
$.tq=null
$.tu=null
$.ts=null
$.tB=null
$.tA=null
$.tt=null
$.tD=null
$.tp=null
$.tC=null
$.tw=null
$.tv=null
$.tx=null
$.tk=null
$.tj=null
$.nN=null
$.tr=null
$.to=null
$.tz=null
$.tm=null
$.tL=13
$.Y=3
$.ay=2
$.Z=1
$.rj=null
$.jd=null
$.rl=null
$.ry=null
$.rv=null
$.rd=null
$.ru=null
$.rh=null
$.re=null
$.rt=null
$.ra=null
$.oL=null
$.nr=null
$.a7=null
$.r8=null
$.jb=null
$.rr=null
$.oP=null
$.j5=null
$.oK=null
$.ri=null
$.f4=null
$.cO=null
$.nt=null
$.rA=null
$.rz=null
$.rx=null
$.oT=null
$.oI=null
$.U=null
$.rf=null
$.ns=null
$.df=null
$.oV=null
$.ax=null
$.av=null
$.e0=null
$.O=null
$.a9=null
$.f8=null
$.bl=null
$.nu=null
$.di=null
$.f1=null
$.f3=null
$.e_=null
$.j6=null
$.je=null
$.a5=null
$.dg=null
$.bF=null
$.f5=null
$.aT=null
$.j7=null
$.f7=null
$.cu=null
$.j8=null
$.cs=null
$.bu=null
$.b3=null
$.j9=null
$.b4=null
$.f2=null
$.cq=null
$.aD=null
$.ja=null
$.bd=null
$.f9=null
$.dh=null
$.bE=null
$.f6=null
$.aV=null
$.bj=null
$.b5=null
$.aq=null
$.bG=null
$.cN=null
$.bP=null
$.cr=null
$.aU=null
$.aC=null
$.G=null
$.E=null
$.az=null
$.bk=null
$.bv=null
$.ct=null
$.r6=null
$.nx=null
$.rb=null
$.oJ=null
$.oM=null
$.rw=null
$.r7=null
$.oQ=null
$.oO=null
$.jc=null
$.nv=null
$.ro=null
$.dZ=null
$.rn=null
$.rq=null
$.ny=null
$.rp=null
$.nq=null
$.oU=null
$.oS=null
$.rc=null
$.rg=null
$.oR=null
$.oN=null
$.nw=null
$.rm=null
$.rs=null
$.rk=null
$.r9=null
$.c0=3
$.ok=!1
$.de="OWNER"
$.p9=null
$.fC=null
$.ds=null
$.fB=null
$.dt=null
$.bI=null
$.ee=null
$.fz=null
$.fA=null
$.ca=null
$.aW=null})();(function lazyInitializers(){lazy($,"oo","$get$oo",function(){return H.pD("_$dart_dartClosure")})
lazy($,"nC","$get$nC",function(){return H.pD("_$dart_js")})
lazy($,"oG","$get$oG",function(){return H.r4()})
lazy($,"oH","$get$oH",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.ov
$.ov=t+1
t="expando$key$"+t}return new P.ie(null,t,[P.N])})
lazy($,"pb","$get$pb",function(){return H.cc(H.li({
toString:function(){return"$receiver$"}}))})
lazy($,"pc","$get$pc",function(){return H.cc(H.li({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"pd","$get$pd",function(){return H.cc(H.li(null))})
lazy($,"pe","$get$pe",function(){return H.cc(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"pi","$get$pi",function(){return H.cc(H.li(void 0))})
lazy($,"pj","$get$pj",function(){return H.cc(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"pg","$get$pg",function(){return H.cc(H.ph(null))})
lazy($,"pf","$get$pf",function(){return H.cc(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"pl","$get$pl",function(){return H.cc(H.ph(void 0))})
lazy($,"pk","$get$pk",function(){return H.cc(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"nV","$get$nV",function(){return P.tP()})
lazy($,"dY","$get$dY",function(){var t,s
t=P.bQ
s=new P.aQ(0,P.tO(),null,[t])
s.ei(null,t)
return s})
lazy($,"eu","$get$eu",function(){return[]})
lazy($,"bY","$get$bY",function(){return P.c5(P.N,L.cg)})
lazy($,"no","$get$no",function(){return P.c5(P.B,Z.ig)})
lazy($,"bD","$get$bD",function(){return P.c5(P.N,B.cp)})
lazy($,"oX","$get$oX",function(){return H.a([],[A.M])})
lazy($,"c8","$get$c8",function(){return P.c5(P.N,T.cA)})
lazy($,"p8","$get$p8",function(){return H.a([new G.kA(0,H.a([],[P.B]))],[G.fx])})
lazy($,"oW","$get$oW",function(){return P.bw(null,null,null,G.L)})
lazy($,"aR","$get$aR",function(){return F.rF("ColourPicker",!1)})
lazy($,"eC","$get$eC",function(){return P.bw(null,null,null,E.dK)})
lazy($,"om","$get$om",function(){return P.tg("Edge\\/\\d+",!0,!1)})
lazy($,"iA","$get$iA",function(){return P.bw(null,null,null,E.cK)})
lazy($,"nH","$get$nH",function(){return A.bs(255,0,255,255)})
lazy($,"nP","$get$nP",function(){return H.a([],[D.cC])})
lazy($,"n0","$get$n0",function(){return A.tb(null)})})()
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
mangledGlobalNames:{N:"int",t:"double",bK:"num",B:"String",cd:"bool",bQ:"Null",V:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.cd,args:[[P.V,E.eW]]},{func:1,v:true},{func:1,v:true,args:[P.ar]},{func:1,v:true,opt:[W.z]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.ar],opt:[P.cB]},{func:1,ret:W.cj,args:[P.N]},{func:1,v:true,opt:[P.cd]},{func:1,v:true,args:[,P.cB]},{func:1,v:true,args:[P.B]},{func:1,ret:P.B,args:[P.N]},{func:1,ret:W.aM,args:[P.N]},{func:1,v:true,args:[W.aA]},{func:1,v:true,args:[[P.C,E.aO],P.B]},{func:1,ret:P.N,args:[P.aF,P.aF]}],
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
setOrUpdateInterceptorsByTag({CanvasGradient:J.J,CanvasPattern:J.J,Client:J.J,MediaError:J.J,MediaSession:J.J,PositionError:J.J,PushMessageData:J.J,WindowClient:J.J,SVGAnimatedLength:J.J,SVGAnimatedLengthList:J.J,SVGAnimatedNumber:J.J,SVGAnimatedNumberList:J.J,SVGAnimatedString:J.J,SQLError:J.J,ArrayBuffer:H.dp,ArrayBufferView:H.cU,DataView:H.jM,Float32Array:H.jN,Float64Array:H.jO,Int16Array:H.jP,Int32Array:H.jQ,Int8Array:H.jR,Uint16Array:H.jS,Uint32Array:H.jT,Uint8ClampedArray:H.fn,CanvasPixelArray:H.fn,Uint8Array:H.jU,HTMLBRElement:W.a_,HTMLBaseElement:W.a_,HTMLContentElement:W.a_,HTMLDListElement:W.a_,HTMLDataListElement:W.a_,HTMLDetailsElement:W.a_,HTMLDialogElement:W.a_,HTMLDivElement:W.a_,HTMLHRElement:W.a_,HTMLHeadElement:W.a_,HTMLHeadingElement:W.a_,HTMLHtmlElement:W.a_,HTMLLabelElement:W.a_,HTMLLegendElement:W.a_,HTMLModElement:W.a_,HTMLOptGroupElement:W.a_,HTMLParagraphElement:W.a_,HTMLPictureElement:W.a_,HTMLPreElement:W.a_,HTMLQuoteElement:W.a_,HTMLShadowElement:W.a_,HTMLSpanElement:W.a_,HTMLTableCaptionElement:W.a_,HTMLTableCellElement:W.a_,HTMLTableDataCellElement:W.a_,HTMLTableHeaderCellElement:W.a_,HTMLTableColElement:W.a_,HTMLTableElement:W.a_,HTMLTableRowElement:W.a_,HTMLTableSectionElement:W.a_,HTMLTemplateElement:W.a_,HTMLTitleElement:W.a_,HTMLTrackElement:W.a_,HTMLUListElement:W.a_,HTMLUnknownElement:W.a_,HTMLDirectoryElement:W.a_,HTMLFontElement:W.a_,HTMLFrameElement:W.a_,HTMLMarqueeElement:W.a_,HTMLElement:W.a_,HTMLAnchorElement:W.h_,HTMLAreaElement:W.h0,Blob:W.d3,HTMLBodyElement:W.h7,HTMLButtonElement:W.ha,HTMLCanvasElement:W.hc,CanvasRenderingContext2D:W.eB,CDATASection:W.cI,CharacterData:W.cI,Comment:W.cI,ProcessingInstruction:W.cI,Text:W.cI,CSSStyleDeclaration:W.d6,MSStyleCSSProperties:W.d6,CSS2Properties:W.d6,CustomEvent:W.i3,DocumentFragment:W.eH,ShadowRoot:W.eH,DOMError:W.eI,FileError:W.eI,DOMException:W.i5,Element:W.cj,HTMLEmbedElement:W.ib,ErrorEvent:W.ic,AnimationEvent:W.z,AnimationPlayerEvent:W.z,ApplicationCacheErrorEvent:W.z,AutocompleteErrorEvent:W.z,BeforeInstallPromptEvent:W.z,BeforeUnloadEvent:W.z,BlobEvent:W.z,ClipboardEvent:W.z,CloseEvent:W.z,DeviceLightEvent:W.z,DeviceMotionEvent:W.z,DeviceOrientationEvent:W.z,ExtendableEvent:W.z,ExtendableMessageEvent:W.z,FetchEvent:W.z,FontFaceSetLoadEvent:W.z,GamepadEvent:W.z,GeofencingEvent:W.z,HashChangeEvent:W.z,InstallEvent:W.z,MediaEncryptedEvent:W.z,MediaKeyMessageEvent:W.z,MediaQueryListEvent:W.z,MediaStreamEvent:W.z,MediaStreamTrackEvent:W.z,MessageEvent:W.z,MIDIConnectionEvent:W.z,MIDIMessageEvent:W.z,NotificationEvent:W.z,PageTransitionEvent:W.z,PopStateEvent:W.z,PresentationConnectionAvailableEvent:W.z,PresentationConnectionCloseEvent:W.z,ProgressEvent:W.z,PromiseRejectionEvent:W.z,PushEvent:W.z,RelatedEvent:W.z,RTCDataChannelEvent:W.z,RTCDTMFToneChangeEvent:W.z,RTCIceCandidateEvent:W.z,RTCPeerConnectionIceEvent:W.z,SecurityPolicyViolationEvent:W.z,ServicePortConnectEvent:W.z,ServiceWorkerMessageEvent:W.z,SpeechRecognitionEvent:W.z,StorageEvent:W.z,SyncEvent:W.z,TrackEvent:W.z,TransitionEvent:W.z,WebKitTransitionEvent:W.z,ResourceProgressEvent:W.z,USBConnectionEvent:W.z,IDBVersionChangeEvent:W.z,AudioProcessingEvent:W.z,OfflineAudioCompletionEvent:W.z,WebGLContextEvent:W.z,Event:W.z,InputEvent:W.z,MediaStream:W.dM,EventTarget:W.dM,HTMLFieldSetElement:W.iJ,File:W.aM,FileList:W.dd,FileReader:W.eS,HTMLFormElement:W.eV,HTMLIFrameElement:W.iY,ImageData:W.cM,HTMLImageElement:W.iZ,HTMLInputElement:W.eY,HTMLKeygenElement:W.jm,HTMLLIElement:W.jo,HTMLLinkElement:W.js,HTMLMapElement:W.jA,HTMLAudioElement:W.e5,HTMLMediaElement:W.e5,HTMLVideoElement:W.e5,HTMLMenuElement:W.jE,HTMLMenuItemElement:W.jF,MessagePort:W.jG,HTMLMetaElement:W.jH,HTMLMeterElement:W.jI,MouseEvent:W.aA,DragEvent:W.aA,PointerEvent:W.aA,WheelEvent:W.aA,Navigator:W.jV,NavigatorUserMediaError:W.jW,Document:W.cV,HTMLDocument:W.cV,XMLDocument:W.cV,Node:W.cV,HTMLOListElement:W.jX,HTMLObjectElement:W.jY,HTMLOptionElement:W.k_,HTMLOutputElement:W.k2,HTMLParamElement:W.k5,HTMLProgressElement:W.kb,HTMLScriptElement:W.ko,HTMLSelectElement:W.c9,HTMLSlotElement:W.kt,HTMLSourceElement:W.kw,SpeechRecognitionError:W.ky,SpeechSynthesisEvent:W.kz,HTMLStyleElement:W.l2,HTMLTextAreaElement:W.la,CompositionEvent:W.bS,FocusEvent:W.bS,KeyboardEvent:W.bS,TextEvent:W.bS,TouchEvent:W.bS,SVGZoomEvent:W.bS,UIEvent:W.bS,Window:W.fG,DOMWindow:W.fG,Attr:W.lA,ClientRect:W.lE,DocumentType:W.lI,HTMLFrameSetElement:W.m0,ServiceWorker:W.ms,SVGAElement:P.fY,SVGAnimateElement:P.cG,SVGAnimateMotionElement:P.cG,SVGAnimateTransformElement:P.cG,SVGAnimationElement:P.cG,SVGSetElement:P.cG,SVGFEBlendElement:P.ih,SVGFEColorMatrixElement:P.ii,SVGFEComponentTransferElement:P.ij,SVGFECompositeElement:P.ik,SVGFEConvolveMatrixElement:P.il,SVGFEDiffuseLightingElement:P.im,SVGFEDisplacementMapElement:P.io,SVGFEFloodElement:P.ip,SVGFEGaussianBlurElement:P.iq,SVGFEImageElement:P.ir,SVGFEMergeElement:P.is,SVGFEMorphologyElement:P.it,SVGFEOffsetElement:P.iu,SVGFEPointLightElement:P.iv,SVGFESpecularLightingElement:P.iw,SVGFESpotLightElement:P.ix,SVGFETileElement:P.iy,SVGFETurbulenceElement:P.iz,SVGFilterElement:P.iN,SVGForeignObjectElement:P.iP,SVGCircleElement:P.bO,SVGEllipseElement:P.bO,SVGLineElement:P.bO,SVGPathElement:P.bO,SVGPolygonElement:P.bO,SVGPolylineElement:P.bO,SVGGeometryElement:P.bO,SVGClipPathElement:P.co,SVGDefsElement:P.co,SVGGElement:P.co,SVGSwitchElement:P.co,SVGGraphicsElement:P.co,SVGImageElement:P.j_,SVGMarkerElement:P.jC,SVGMaskElement:P.jD,SVGPatternElement:P.k6,SVGRectElement:P.ke,SVGScriptElement:P.kp,SVGStyleElement:P.l3,SVGDescElement:P.aX,SVGDiscardElement:P.aX,SVGFEDistantLightElement:P.aX,SVGFEFuncAElement:P.aX,SVGFEFuncBElement:P.aX,SVGFEFuncGElement:P.aX,SVGFEFuncRElement:P.aX,SVGFEMergeNodeElement:P.aX,SVGMetadataElement:P.aX,SVGStopElement:P.aX,SVGTitleElement:P.aX,SVGComponentTransferFunctionElement:P.aX,SVGElement:P.aX,SVGSVGElement:P.l4,SVGSymbolElement:P.l6,SVGTextContentElement:P.fD,SVGTextPathElement:P.lb,SVGTSpanElement:P.eg,SVGTextElement:P.eg,SVGTextPositioningElement:P.eg,SVGUseElement:P.lk,SVGViewElement:P.ll,SVGLinearGradientElement:P.en,SVGRadialGradientElement:P.en,SVGGradientElement:P.en,SVGCursorElement:P.mp,SVGFEDropShadowElement:P.mq,SVGMPathElement:P.mr})
setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,Client:true,MediaError:true,MediaSession:true,PositionError:true,PushMessageData:true,WindowClient:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedString:true,SQLError:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLModElement:true,HTMLOptGroupElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLSpanElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CustomEvent:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,Element:false,HTMLEmbedElement:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,MediaStream:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,HTMLFormElement:true,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLAudioElement:true,HTMLMediaElement:true,HTMLVideoElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,MessagePort:true,HTMLMetaElement:true,HTMLMeterElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Navigator:true,NavigatorUserMediaError:true,Document:true,HTMLDocument:true,XMLDocument:true,Node:false,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParamElement:true,HTMLProgressElement:true,HTMLScriptElement:true,HTMLSelectElement:true,HTMLSlotElement:true,HTMLSourceElement:true,SpeechRecognitionError:true,SpeechSynthesisEvent:true,HTMLStyleElement:true,HTMLTextAreaElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,SVGZoomEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DocumentType:true,HTMLFrameSetElement:true,ServiceWorker:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGPatternElement:true,SVGRectElement:true,SVGScriptElement:true,SVGStyleElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGUseElement:true,SVGViewElement:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
H.fk.$nativeSuperclassTag="ArrayBufferView"
H.e6.$nativeSuperclassTag="ArrayBufferView"
H.e8.$nativeSuperclassTag="ArrayBufferView"
H.fl.$nativeSuperclassTag="ArrayBufferView"
H.e7.$nativeSuperclassTag="ArrayBufferView"
H.e9.$nativeSuperclassTag="ArrayBufferView"
H.fm.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.pI(A.pJ(),b)},[])
else (function(b){H.pI(A.pJ(),b)})([])})})()
//# sourceMappingURL=stat_data_review.dart.js.map
