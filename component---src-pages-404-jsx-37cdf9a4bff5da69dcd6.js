(self.webpackChunkjeffdoes=self.webpackChunkjeffdoes||[]).push([[256],{9483:function(e,t,o){var r=o(7854),a=o(4411),n=o(6330),l=r.TypeError;e.exports=function(e){if(a(e))return e;throw l(n(e)+" is not a constructor")}},1530:function(e,t,o){"use strict";var r=o(8710).charAt;e.exports=function(e,t,o){return t+(o?r(e,t).length:1)}},8544:function(e,t,o){var r=o(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},4994:function(e,t,o){"use strict";var r=o(3383).IteratorPrototype,a=o(30),n=o(9114),l=o(8003),i=o(7497),c=function(){return this};e.exports=function(e,t,o,m){var s=t+" Iterator";return e.prototype=a(r,{next:n(+!m,o)}),l(e,s,!1,!0),i[s]=c,e}},7850:function(e,t,o){var r=o(111),a=o(4326),n=o(5112)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==a(e))}},3383:function(e,t,o){"use strict";var r,a,n,l=o(7293),i=o(614),c=o(30),m=o(9518),s=o(1320),d=o(5112),u=o(1913),_=d("iterator"),v=!1;[].keys&&("next"in(n=[].keys())?(a=m(m(n)))!==Object.prototype&&(r=a):v=!0),null==r||l((function(){var e={};return r[_].call(e)!==e}))?r={}:u&&(r=c(r)),i(r[_])||s(r,_,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:v}},1070:function(e,t,o){var r=o(7854);e.exports=r.Promise},8523:function(e,t,o){"use strict";var r=o(9662),a=function(e){var t,o;this.promise=new e((function(e,r){if(void 0!==t||void 0!==o)throw TypeError("Bad Promise constructor");t=e,o=r})),this.resolve=r(t),this.reject=r(o)};e.exports.f=function(e){return new a(e)}},9518:function(e,t,o){var r=o(7854),a=o(2597),n=o(614),l=o(7908),i=o(6200),c=o(8544),m=i("IE_PROTO"),s=r.Object,d=s.prototype;e.exports=c?s.getPrototypeOf:function(e){var t=l(e);if(a(t,m))return t[m];var o=t.constructor;return n(o)&&t instanceof o?o.prototype:t instanceof s?d:null}},9478:function(e,t,o){var r=o(9670),a=o(111),n=o(8523);e.exports=function(e,t){if(r(e),a(t)&&t.constructor===e)return t;var o=n.f(e);return(0,o.resolve)(t),o.promise}},7651:function(e,t,o){var r=o(7854),a=o(6916),n=o(9670),l=o(614),i=o(4326),c=o(2261),m=r.TypeError;e.exports=function(e,t){var o=e.exec;if(l(o)){var r=a(o,e,t);return null!==r&&n(r),r}if("RegExp"===i(e))return a(c,e,t);throw m("RegExp#exec called on incompatible receiver")}},2261:function(e,t,o){"use strict";var r,a,n=o(6916),l=o(1702),i=o(1340),c=o(7066),m=o(2999),s=o(2309),d=o(30),u=o(9909).get,_=o(9441),v=o(7168),f=s("native-string-replace",String.prototype.replace),h=RegExp.prototype.exec,x=h,g=l("".charAt),p=l("".indexOf),K=l("".replace),b=l("".slice),k=(a=/b*/g,n(h,r=/a/,"a"),n(h,a,"a"),0!==r.lastIndex||0!==a.lastIndex),P=m.BROKEN_CARET,z=void 0!==/()??/.exec("")[1];(k||z||P||_||v)&&(x=function(e){var t,o,r,a,l,m,s,_=this,v=u(_),y=i(e),w=v.raw;if(w)return w.lastIndex=_.lastIndex,t=n(x,w,y),_.lastIndex=w.lastIndex,t;var A=v.groups,N=P&&_.sticky,E=n(c,_),$=_.source,B=0,J=y;if(N&&(E=K(E,"y",""),-1===p(E,"g")&&(E+="g"),J=b(y,_.lastIndex),_.lastIndex>0&&(!_.multiline||_.multiline&&"\n"!==g(y,_.lastIndex-1))&&($="(?: "+$+")",J=" "+J,B++),o=new RegExp("^(?:"+$+")",E)),z&&(o=new RegExp("^"+$+"$(?!\\s)",E)),k&&(r=_.lastIndex),a=n(h,N?o:_,J),N?a?(a.input=b(a.input,B),a[0]=b(a[0],B),a.index=_.lastIndex,_.lastIndex+=a[0].length):_.lastIndex=0:k&&a&&(_.lastIndex=_.global?a.index+a[0].length:r),z&&a&&a.length>1&&n(f,a[0],o,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)})),a&&A)for(a.groups=m=d(null),l=0;l<A.length;l++)m[(s=A[l])[0]]=a[s[1]];return a}),e.exports=x},7066:function(e,t,o){"use strict";var r=o(9670);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},2999:function(e,t,o){var r=o(7293),a=o(7854).RegExp,n=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),l=n||r((function(){return!a("a","y").sticky})),i=n||r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:i,MISSED_STICKY:l,UNSUPPORTED_Y:n}},9441:function(e,t,o){var r=o(7293),a=o(7854).RegExp;e.exports=r((function(){var e=a(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:function(e,t,o){var r=o(7293),a=o(7854).RegExp;e.exports=r((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},8003:function(e,t,o){var r=o(3070).f,a=o(2597),n=o(5112)("toStringTag");e.exports=function(e,t,o){e&&!o&&(e=e.prototype),e&&!a(e,n)&&r(e,n,{configurable:!0,value:t})}},6707:function(e,t,o){var r=o(9670),a=o(9483),n=o(5112)("species");e.exports=function(e,t){var o,l=r(e).constructor;return void 0===l||null==(o=r(l)[n])?t:a(o)}},8710:function(e,t,o){var r=o(1702),a=o(9303),n=o(1340),l=o(4488),i=r("".charAt),c=r("".charCodeAt),m=r("".slice),s=function(e){return function(t,o){var r,s,d=n(l(t)),u=a(o),_=d.length;return u<0||u>=_?e?"":void 0:(r=c(d,u))<55296||r>56319||u+1===_||(s=c(d,u+1))<56320||s>57343?e?i(d,u):r:e?m(d,u,u+2):s-56320+(r-55296<<10)+65536}};e.exports={codeAt:s(!1),charAt:s(!0)}},1340:function(e,t,o){var r=o(7854),a=o(648),n=r.String;e.exports=function(e){if("Symbol"===a(e))throw TypeError("Cannot convert a Symbol value to a string");return n(e)}},5837:function(e,t,o){o(2109)({global:!0},{globalThis:o(7854)})},5438:function(e,t,o){var r=o(2109),a=Math.hypot,n=Math.abs,l=Math.sqrt;r({target:"Math",stat:!0,forced:!!a&&a(1/0,NaN)!==1/0},{hypot:function(e,t){for(var o,r,a=0,i=0,c=arguments.length,m=0;i<c;)m<(o=n(arguments[i++]))?(a=a*(r=m/o)*r+1,m=o):a+=o>0?(r=o/m)*r:o;return m===1/0?1/0:m*l(a)}})},7727:function(e,t,o){"use strict";var r=o(2109),a=o(1913),n=o(1070),l=o(7293),i=o(5005),c=o(614),m=o(6707),s=o(9478),d=o(1320);if(r({target:"Promise",proto:!0,real:!0,forced:!!n&&l((function(){n.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=m(this,i("Promise")),o=c(e);return this.then(o?function(o){return s(t,e()).then((function(){return o}))}:e,o?function(o){return s(t,e()).then((function(){throw o}))}:e)}}),!a&&c(n)){var u=i("Promise").prototype.finally;n.prototype.finally!==u&&d(n.prototype,"finally",u,{unsafe:!0})}},6373:function(e,t,o){"use strict";var r=o(2109),a=o(7854),n=o(6916),l=o(1702),i=o(4994),c=o(4488),m=o(7466),s=o(1340),d=o(9670),u=o(4326),_=o(7976),v=o(7850),f=o(7066),h=o(8173),x=o(1320),g=o(7293),p=o(5112),K=o(6707),b=o(1530),k=o(7651),P=o(9909),z=o(1913),y=p("matchAll"),w="RegExp String",A="RegExp String Iterator",N=P.set,E=P.getterFor(A),$=RegExp.prototype,B=a.TypeError,J=l(f),I=l("".indexOf),T=l("".matchAll),C=!!T&&!g((function(){T("a",/./)})),S=i((function(e,t,o,r){N(this,{type:A,regexp:e,string:t,global:o,unicode:r,done:!1})}),w,(function(){var e=E(this);if(e.done)return{value:void 0,done:!0};var t=e.regexp,o=e.string,r=k(t,o);return null===r?{value:void 0,done:e.done=!0}:e.global?(""===s(r[0])&&(t.lastIndex=b(o,m(t.lastIndex),e.unicode)),{value:r,done:!1}):(e.done=!0,{value:r,done:!1})})),R=function(e){var t,o,r,a,n,l,i=d(this),c=s(e);return t=K(i,RegExp),void 0===(o=i.flags)&&_($,i)&&!("flags"in $)&&(o=J(i)),r=void 0===o?"":s(o),a=new t(t===RegExp?i.source:i,r),n=!!~I(r,"g"),l=!!~I(r,"u"),a.lastIndex=m(i.lastIndex),new S(a,c,n,l)};r({target:"String",proto:!0,forced:C},{matchAll:function(e){var t,o,r,a,l=c(this);if(null!=e){if(v(e)&&(t=s(c("flags"in $?e.flags:J(e))),!~I(t,"g")))throw B("`.matchAll` does not allow non-global regexes");if(C)return T(l,e);if(void 0===(r=h(e,y))&&z&&"RegExp"==u(e)&&(r=R),r)return n(r,e,l)}else if(C)return T(l,e);return o=s(l),a=new RegExp(e,"g"),z?n(R,a,o):a[y](o)}}),z||y in $||x($,y,R)},5743:function(e,t,o){o(5837)},3728:function(e,t,o){o(6373)},4398:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return Qt}});var r={};o.r(r),o.d(r,{ai:function(){return J},_F:function(){return I},Pr:function(){return gt},Rh:function(){return M},aY:function(){return Le},m7:function(){return ae},NV:function(){return Ne},Jd:function(){return w},UP:function(){return je},Gs:function(){return et},QK:function(){return j},C0:function(){return lt},fH:function(){return zt},tJ:function(){return se},CG:function(){return he},gZ:function(){return W},XC:function(){return T},n3:function(){return ut},Tr:function(){return U},$o:function(){return Te},v2:function(){return ke},Kh:function(){return yt},Bj:function(){return pt},gQ:function(){return O},Ay:function(){return Fe},jS:function(){return ne},Im:function(){return Ee},zd:function(){return A},Yx:function(){return Ve},rP:function(){return tt},NL:function(){return V},ve:function(){return it},lW:function(){return de},D0:function(){return xe},Mu:function(){return D},Ky:function(){return C},Be:function(){return _t},au:function(){return X},bM:function(){return Ce},PG:function(){return Pe},h2:function(){return N},h3:function(){return S},Fe:function(){return R},LE:function(){return $t},wZ:function(){return Bt},fn:function(){return Jt},IG:function(){return B},ay:function(){return wt},jm:function(){return At},Jz:function(){return y},_c:function(){return Nt},dC:function(){return It},rL:function(){return St},tC:function(){return Tt},$D:function(){return Rt},L6:function(){return Et},Me:function(){return Ct},D_:function(){return Mt},xm:function(){return vt},a4:function(){return Q},Vd:function(){return kt},Dj:function(){return Se},HZ:function(){return ge},Rt:function(){return He},Uh:function(){return E},ru:function(){return ze},$Q:function(){return oe},Qp:function(){return ue},Wr:function(){return ct},NY:function(){return Y},kj:function(){return le},ow:function(){return Ye},fC:function(){return ot},_7:function(){return ce},rY:function(){return we},DS:function(){return $},Yu:function(){return ht},do:function(){return ee},EH:function(){return st},aP:function(){return We},AC:function(){return Ke},nj:function(){return Qe},pt:function(){return $e},Tv:function(){return Me},MZ:function(){return Ue},tq:function(){return at},Oo:function(){return Kt},vO:function(){return L},as:function(){return H},ab:function(){return ve},uL:function(){return Je},nt:function(){return ft},kM:function(){return q},Lu:function(){return Pt},Qc:function(){return Re},$v:function(){return pe},Pv:function(){return Ze},dW:function(){return ye},yZ:function(){return re},hD:function(){return _e},yh:function(){return mt},vC:function(){return G},Rg:function(){return ie},Md:function(){return Ge},Hy:function(){return rt},$e:function(){return me},y4:function(){return Ae},vt:function(){return xt},Jx:function(){return te},rR:function(){return dt},Hu:function(){return De},lA:function(){return be},MN:function(){return qe},sH:function(){return Be},II:function(){return Oe},tH:function(){return Xe},EV:function(){return nt},cm:function(){return bt},AY:function(){return F},_h:function(){return Z},Wg:function(){return fe},Zx:function(){return Ie}});var a=o(2982),n=o(7294),l=o(3339),i=o(8837),c=o(1597),m=o(8601),s=o(3366),d=o(2318),u=o.n(d),_=o(3514),v=o.p+"static/image-b21063d0537e2a59278d67bc72652d9c.png",f=new Array,h=new Array("sketch","sketchDiv");var x={root:["root"]};var g,p,K=Object.assign(((p=function(e){var t=(0,m.xf)(e,{name:g,descendantNames:(0,a.Z)(x[g]),internalArgPropNames:h,internalVariantPropNames:f});return function(e){e.variants;var t,o=e.args,r=e.overrides,a=e.forNode,n=(0,m.LK)({mode:(0,l.yU)()});return(0,m.eh)("div",{"data-plasmic-name":"root","data-plasmic-override":r.root,"data-plasmic-root":!0,"data-plasmic-for-node":a,className:(0,m.AK)(_.$6,_.WY,_.E,_.oY,"PlasmicP5Sketch-module--root--WlaT4","sketch-canvas",(t={},t[_.Y5]=(0,m.zK)(n,"mode","dark"),t)),id:"sketch-div"},m.nR({defaultContents:(0,m.eh)(m.Vv,{alt:"",className:(0,m.AK)("PlasmicP5Sketch-module--img__n3Soy--mxizX"),displayHeight:"auto",displayMaxHeight:"none",displayMaxWidth:"100%",displayMinHeight:"0",displayMinWidth:"0",displayWidth:"auto",loading:"lazy",src:{src:v,fullWidth:1711,fullHeight:1711,aspectRatio:void 0}}),value:o.sketchDiv}))}({variants:t.variants,args:t.args,overrides:t.overrides,forNode:g})}).displayName="root"===(g="root")?"PlasmicP5Sketch":"PlasmicP5Sketch."+g,p),{internalVariantProps:f,internalArgProps:h}),b=["sketch","sketchDiv","ref"];var k=function(e){var t=e.sketch,o=(e.sketchDiv,e.ref,(0,s.Z)(e,b)),r=(0,n.useRef)();return(0,n.useEffect)((function(){new(u())(t,r.current)}),[]),n.createElement(K,Object.assign({sketchDiv:n.createElement("div",{ref:r})},o))},P=o(8272),z=o(9189),y="Plasmic_404-module--root--AY+m-",w="Plasmic_404-module--freeBox__b1Tf7--hDUzj",A="Plasmic_404-module--freeBoxglobal_mode_reveal__b1Tf7V94Jk--iah4S",N="Plasmic_404-module--h2--vWTR9",E="Plasmic_404-module--text___9Attp--947Zt",$="Plasmic_404-module--text__qihLi--cCvPA",B="Plasmic_404-module--p5Sketch--hFgPo",J="Plasmic_404-module--controls--Vm5en",I="Plasmic_404-module--controlsglobal_mode_reveal--DlX0p",T="Plasmic_404-module--freeBox__p2Zdo--QaFbs",C="Plasmic_404-module--freeBoxglobal_mode_reveal__p2Zdov94Jk--UyuVU",S="Plasmic_404-module--h3--sJuOH",R="Plasmic_404-module--h3global_mode_reveal--Tq7J1",M="Plasmic_404-module--freeBox___3ZKp--jeuFt",O="Plasmic_404-module--freeBoxglobal_mode_reveal___3ZKpv94Jk--ebjRJ",j="Plasmic_404-module--freeBox__gWlBb--RGgSX",V="Plasmic_404-module--freeBoxglobal_mode_reveal__gWlBBv94Jk--TOYx7",Y="Plasmic_404-module--text__hl30A--7LXDr",G="Plasmic_404-module--textglobal_mode_reveal__hl30Av94Jk--Bz9Lp",H="Plasmic_404-module--text__zKrYn--TeL66",Z="Plasmic_404-module--textglobal_mode_reveal__zKrYnv94Jk--KjnM4",W="Plasmic_404-module--freeBox__lsdS8--fxBXK",D="Plasmic_404-module--freeBoxglobal_mode_reveal__lsdS8V94Jk--SDVFL",L="Plasmic_404-module--text__yuaCy--vfI2s",F="Plasmic_404-module--textglobal_mode_reveal__yuaCyv94Jk--+sJUi",Q="Plasmic_404-module--text___46OTd--0It5a",q="Plasmic_404-module--textglobal_mode_reveal___46OTdv94Jk--gOih8",U="Plasmic_404-module--freeBox__wUgE--Ykm29",X="Plasmic_404-module--freeBoxglobal_mode_reveal__wUgEv94Jk--fe6j8",ee="Plasmic_404-module--text__su7Mj--ndBeG",te="Plasmic_404-module--textglobal_mode_reveal__su7Mjv94Jk--s4yb4",oe="Plasmic_404-module--text__dVEf6--dqSio",re="Plasmic_404-module--textglobal_mode_reveal__dVEf6V94Jk--q7c2K",ae="Plasmic_404-module--freeBox__a1Adx--nOfXM",ne="Plasmic_404-module--freeBoxglobal_mode_reveal__a1AdXv94Jk--eZvT-",le="Plasmic_404-module--text__jx42--Y3Zm1",ie="Plasmic_404-module--textglobal_mode_reveal__jx42V94Jk--yGk5L",ce="Plasmic_404-module--text__mWhT--9U3Tq",me="Plasmic_404-module--textglobal_mode_reveal__mWhTv94Jk--WJ0Iw",se="Plasmic_404-module--freeBox__jQbp4--czY1H",de="Plasmic_404-module--freeBoxglobal_mode_reveal__jQbp4V94Jk--wxbic",ue="Plasmic_404-module--text__fmI7Z--d+vd4",_e="Plasmic_404-module--textglobal_mode_reveal__fmI7Zv94Jk--PD0+D",ve="Plasmic_404-module--text__zPsps--P5mAF",fe="Plasmic_404-module--textglobal_mode_reveal__zPspSv94Jk--Hbxtq",he="Plasmic_404-module--freeBox__jQik0--DmgHb",xe="Plasmic_404-module--freeBoxglobal_mode_reveal__jQik0V94Jk--rhYm5",ge="Plasmic_404-module--text___85W5--+WCq-",pe="Plasmic_404-module--textglobal_mode_reveal___85W5V94Jk--tI4n1",Ke="Plasmic_404-module--text__vYtl--tpGIi",be="Plasmic_404-module--textglobal_mode_reveal__vYtlv94Jk--GCY2A",ke="Plasmic_404-module--freeBox__z6H--ZOnio",Pe="Plasmic_404-module--freeBoxglobal_mode_reveal__z6HV94Jk--tCSUM",ze="Plasmic_404-module--text___9GMvN--w5+g7",ye="Plasmic_404-module--textglobal_mode_reveal___9GMvNv94Jk--3FOr1",we="Plasmic_404-module--text__mn9Sz--MHLIX",Ae="Plasmic_404-module--textglobal_mode_reveal__mn9Szv94Jk--7sQAq",Ne="Plasmic_404-module--freeBox__aH8Rt--u5GnG",Ee="Plasmic_404-module--freeBoxglobal_mode_reveal__aH8Rtv94Jk--dqTbk",$e="Plasmic_404-module--text__vzP53--XaTKs",Be="Plasmic_404-module--textglobal_mode_reveal__vzP53V94Jk--tUqpp",Je="Plasmic_404-module--text__zh0O8--vSMTE",Ie="Plasmic_404-module--textglobal_mode_reveal__zh0O8V94Jk--SB6xL",Te="Plasmic_404-module--freeBox__xAxfb--hKuBy",Ce="Plasmic_404-module--freeBoxglobal_mode_reveal__xAxfbv94Jk--2V0g+",Se="Plasmic_404-module--text___7YKxL--v8tTZ",Re="Plasmic_404-module--textglobal_mode_reveal___7YKxLv94Jk--4wJF9",Me="Plasmic_404-module--text__wDfxb--bPkz3",Oe="Plasmic_404-module--textglobal_mode_reveal__wDfxBv94Jk--lS1x6",je="Plasmic_404-module--freeBox__bgG2A---vQuC",Ve="Plasmic_404-module--freeBoxglobal_mode_reveal__bgG2Av94Jk--BY4G0",Ye="Plasmic_404-module--text__lQvEg--92zzR",Ge="Plasmic_404-module--textglobal_mode_reveal__lQvEGv94Jk--jcCO4",He="Plasmic_404-module--text___8EXrt--zJcuF",Ze="Plasmic_404-module--textglobal_mode_reveal___8EXrTv94Jk--+r-6B",We="Plasmic_404-module--text__uXlNh--OEGZy",De="Plasmic_404-module--textglobal_mode_reveal__uXlNhv94Jk--I1tN9",Le="Plasmic_404-module--freeBox___7FyTr--GuQKF",Fe="Plasmic_404-module--freeBoxglobal_mode_reveal___7FyTRv94Jk--Kuakw",Qe="Plasmic_404-module--text__vezl8--Buh8f",qe="Plasmic_404-module--textglobal_mode_reveal__vezl8V94Jk--7RQR9",Ue="Plasmic_404-module--text__xnpu3--DOExa",Xe="Plasmic_404-module--textglobal_mode_reveal__xnpu3V94Jk--Q0Ix-",et="Plasmic_404-module--freeBox__fmXd--68cgt",tt="Plasmic_404-module--freeBoxglobal_mode_reveal__fmXdv94Jk--G4Fdy",ot="Plasmic_404-module--text__lTgew--kZNQW",rt="Plasmic_404-module--textglobal_mode_reveal__lTgewv94Jk--57pOP",at="Plasmic_404-module--text__xtRf--Mt+by",nt="Plasmic_404-module--textglobal_mode_reveal__xtRfV94Jk--LKNn4",lt="Plasmic_404-module--freeBox__hGUoi--urBMa",it="Plasmic_404-module--freeBoxglobal_mode_reveal__hGUoiv94Jk--vudpk",ct="Plasmic_404-module--text__he3Bq--FnSv6",mt="Plasmic_404-module--textglobal_mode_reveal__he3Bqv94Jk--wVQ0V",st="Plasmic_404-module--text__tu3Yb--58teF",dt="Plasmic_404-module--textglobal_mode_reveal__tu3YBv94Jk--nEdKr",ut="Plasmic_404-module--freeBox__sBt4N--bcn4u",_t="Plasmic_404-module--freeBoxglobal_mode_reveal__sBt4Nv94Jk--buuAj",vt="Plasmic_404-module--text___1Vvnc--Vt7S9",ft="Plasmic_404-module--textglobal_mode_reveal___1Vvncv94Jk--qa4sA",ht="Plasmic_404-module--text__s0KEd--gNDT8",xt="Plasmic_404-module--textglobal_mode_reveal__s0KEdv94Jk--wijFL",gt="Plasmic_404-module--freeBox___3H9Oi--DGI8+",pt="Plasmic_404-module--freeBoxglobal_mode_reveal___3H9Oiv94Jk--+znbx",Kt="Plasmic_404-module--text__yTgCr--8WIWE",bt="Plasmic_404-module--textglobal_mode_reveal__yTgCRv94Jk--gWP0I",kt="Plasmic_404-module--text___7TmOv--2zoWy",Pt="Plasmic_404-module--textglobal_mode_reveal___7TmOVv94Jk--Po5XU",zt="Plasmic_404-module--freeBox__hxHbG--c0HiQ",yt="Plasmic_404-module--freeBoxglobal_mode_dark__hxHbGjYvh--0hjr3",wt="Plasmic_404-module--reveal--ookOr",At="Plasmic_404-module--revealglobal_mode_reveal--wW2iJ",Nt="Plasmic_404-module--svg__mviom--F5TL4",Et="Plasmic_404-module--svgglobal_mode_reveal__mviomv94Jk--0hsBM",$t="Plasmic_404-module--home--dBKgP",Bt="Plasmic_404-module--homeglobal_mode_dark--VJq4V",Jt="Plasmic_404-module--homeglobal_mode_reveal--PvOCU",It="Plasmic_404-module--svg__pp4QS--zTGf2",Tt="Plasmic_404-module--svgglobal_mode_dark__pp4QSjYvh--FLNZe",Ct="Plasmic_404-module--svgglobal_mode_reveal__pp4QSv94Jk--Sp44p",St="Plasmic_404-module--svg__tMqKe--5VTwk",Rt="Plasmic_404-module--svgglobal_mode_dark__tMqKejYvh--bwtvc",Mt="Plasmic_404-module--svgglobal_mode_reveal__tMqKEv94Jk--DvD-T",Ot=o(1761),jt=o(5117),Vt=o(7322),Yt=o(1682),Gt=o(8193),Ht=new Array,Zt=new Array;var Wt={root:["root","h2","p5Sketch","controls","h3","reveal","home","logo","darkmode"],h2:["h2"],p5Sketch:["p5Sketch"],controls:["controls","h3"],h3:["h3"],reveal:["reveal"],home:["home","logo"],logo:["logo"],darkmode:["darkmode"]};function Dt(e){var t=function(t){var o=(0,m.xf)(t,{name:e,descendantNames:(0,a.Z)(Wt[e]),internalArgPropNames:Zt,internalVariantPropNames:Ht});return function(e){e.variants,e.args;var t,o,a,i,s,d,u,v,f,h,x,g,p,K,b,Ht,Zt,Wt,Dt,Lt,Ft,Qt,qt,Ut,Xt,eo,to,oo,ro,ao,no,lo,io,co,mo,so,uo,_o,vo,fo,ho,xo,go,po,Ko,bo,ko,Po,zo,yo,wo,Ao,No,Eo,$o,Bo,Jo,Io,To,Co,So,Ro=e.overrides,Mo=e.forNode,Oo=(0,m.LK)({screen:(0,z.Xj)(),mode:(0,l.yU)()});return(0,m.eh)(n.Fragment,null,(0,m.eh)("style",null,"\n        body {\n          margin: 0;\n        }\n      "),(0,m.eh)("div",{className:_.jM},(0,m.eh)(m.Kq,{as:"div","data-plasmic-name":"root","data-plasmic-override":Ro.root,"data-plasmic-root":!0,"data-plasmic-for-node":Mo,hasGap:!0,className:(0,m.AK)(_.$6,_.WY,_.E,_.oY,y,(t={},t[_.Y5]=(0,m.zK)(Oo,"mode","dark"),t[_.DJ]=(0,m.zK)(Oo,"mode","reveal"),t[r.rootglobal_mode_dark]=(0,m.zK)(Oo,"mode","dark"),t[r.rootglobal_mode_reveal]=(0,m.zK)(Oo,"mode","reveal"),t))},((0,m.zK)(Oo,"mode","reveal"),(0,m.eh)(m.Kq,{as:"div",hasGap:!0,className:(0,m.AK)(_.$6,w,(o={},o[A]=(0,m.zK)(Oo,"mode","reveal"),o))},(0,m.eh)("h2",{"data-plasmic-name":"h2","data-plasmic-override":Ro.h2,className:(0,m.AK)(_.$6,_.h2,_.__wab_text,N)},"four oh four"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,E)},((0,m.zK)(Oo,"screen","desktopOnly"),"the thing you were looking for isn't here. unless you were looking for this.")),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,$)},"whatever the reason for your presence here, take a moment to be present."))),(0,m.eh)(k,{"data-plasmic-name":"p5Sketch","data-plasmic-override":Ro.p5Sketch,className:(0,m.AK)("__wab_instance",B,(a={},a[r.p5Sketchglobal_mode_reveal]=(0,m.zK)(Oo,"mode","reveal"),a))}),((0,m.zK)(Oo,"mode","reveal"),(0,m.eh)(m.Kq,{as:"div","data-plasmic-name":"controls","data-plasmic-override":Ro.controls,hasGap:!0,className:(0,m.AK)(_.$6,J,(i={},i[I]=(0,m.zK)(Oo,"mode","reveal"),i))},((0,m.zK)(Oo,"mode","reveal"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,T,(s={},s[C]=(0,m.zK)(Oo,"mode","reveal"),s))},(0,m.eh)("h3",{"data-plasmic-name":"h3","data-plasmic-override":Ro.h3,className:(0,m.AK)(_.$6,_.h3,_.__wab_text,S,(d={},d[R]=(0,m.zK)(Oo,"mode","reveal"),d))},(0,m.zK)(Oo,"mode","reveal")?"controls":"Enter some text"))),((0,m.zK)(Oo,"mode","reveal"),(0,m.eh)(m.Kq,{as:"div",hasGap:!0,className:(0,m.AK)(_.$6,M,(u={},u[O]=(0,m.zK)(Oo,"mode","reveal"),u))},(0,m.eh)("div",{className:(0,m.AK)(_.$6,j,(v={},v[V]=(0,m.zK)(Oo,"mode","reveal"),v))},(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,Y,(f={},f[G]=(0,m.zK)(Oo,"mode","reveal"),f))},(0,m.zK)(Oo,"mode","reveal")&&(0,m.zK)(Oo,"screen","desktopOnly")?"click":(0,m.zK)(Oo,"mode","reveal")?"tap":"Enter some text"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,H,(h={},h[Z]=(0,m.zK)(Oo,"mode","reveal"),h))},(0,m.zK)(Oo,"mode","reveal")?"randomize number of points, circles, & reflections":"Enter some text")),(0,m.eh)("div",{className:(0,m.AK)(_.$6,W,(x={},x[D]=(0,m.zK)(Oo,"mode","reveal"),x))},(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,L,(g={},g[F]=(0,m.zK)(Oo,"mode","reveal"),g))},(0,m.zK)(Oo,"mode","reveal")?"press":"Enter some text"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,Q,(p={},p[q]=(0,m.zK)(Oo,"mode","reveal"),p))},(0,m.zK)(Oo,"mode","reveal")?"& this'll happen":"Enter some text")),(0,m.eh)("div",{className:(0,m.AK)(_.$6,U,(K={},K[X]=(0,m.zK)(Oo,"mode","reveal"),K))},(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,ee,(b={},b[te]=(0,m.zK)(Oo,"mode","reveal"),b))},(0,m.zK)(Oo,"mode","reveal")?"← / →":"Enter some text"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,oe,(Ht={},Ht[re]=(0,m.zK)(Oo,"mode","reveal"),Ht))},(0,m.zK)(Oo,"mode","reveal")?"Change circle radius [1, w/6]":"Enter some text")),(0,m.eh)("div",{className:(0,m.AK)(_.$6,ae,(Zt={},Zt[ne]=(0,m.zK)(Oo,"mode","reveal"),Zt))},(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,le,(Wt={},Wt[ie]=(0,m.zK)(Oo,"mode","reveal"),Wt))},(0,m.zK)(Oo,"mode","reveal")?"↑ / ↓":"Enter some text"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,ce,(Dt={},Dt[me]=(0,m.zK)(Oo,"mode","reveal"),Dt))},(0,m.zK)(Oo,"mode","reveal")?"Change # of points [1, 50]":"Enter some text")),(0,m.eh)("div",{className:(0,m.AK)(_.$6,se,(Lt={},Lt[de]=(0,m.zK)(Oo,"mode","reveal"),Lt))},(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,ue,(Ft={},Ft[_e]=(0,m.zK)(Oo,"mode","reveal"),Ft))},(0,m.zK)(Oo,"mode","reveal")?"+ / -":"Enter some text"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,ve,(Qt={},Qt[fe]=(0,m.zK)(Oo,"mode","reveal"),Qt))},(0,m.zK)(Oo,"mode","reveal")?"Change circles/point [1, 50]":"Enter some text")),(0,m.eh)("div",{className:(0,m.AK)(_.$6,he,(qt={},qt[xe]=(0,m.zK)(Oo,"mode","reveal"),qt))},(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,ge,(Ut={},Ut[pe]=(0,m.zK)(Oo,"mode","reveal"),Ut))},(0,m.zK)(Oo,"mode","reveal")?"↑ / ↓":"Enter some text"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,Ke,(Xt={},Xt[be]=(0,m.zK)(Oo,"mode","reveal"),Xt))},(0,m.zK)(Oo,"mode","reveal")?"Change # of points [1, 50]":"Enter some text")),(0,m.eh)("div",{className:(0,m.AK)(_.$6,ke,(eo={},eo[Pe]=(0,m.zK)(Oo,"mode","reveal"),eo))},(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,ze,(to={},to[ye]=(0,m.zK)(Oo,"mode","reveal"),to))},(0,m.zK)(Oo,"mode","reveal")?"< / >":"Enter some text"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,we,(oo={},oo[Ae]=(0,m.zK)(Oo,"mode","reveal"),oo))},(0,m.zK)(Oo,"mode","reveal")?"Change reflections [0, 1, 2]":"Enter some text")),(0,m.eh)("div",{className:(0,m.AK)(_.$6,Ne,(ro={},ro[Ee]=(0,m.zK)(Oo,"mode","reveal"),ro))},(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,$e,(ao={},ao[Be]=(0,m.zK)(Oo,"mode","reveal"),ao))},(0,m.zK)(Oo,"mode","reveal")?"[ / ]":"Enter some text"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,Je,(no={},no[Ie]=(0,m.zK)(Oo,"mode","reveal"),no))},(0,m.zK)(Oo,"mode","reveal")?"Change rotation [0, 360]":"Enter some text")),(0,m.eh)("div",{className:(0,m.AK)(_.$6,Te,(lo={},lo[Ce]=(0,m.zK)(Oo,"mode","reveal"),lo))},(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,Se,(io={},io[Re]=(0,m.zK)(Oo,"mode","reveal"),io))},(0,m.zK)(Oo,"mode","reveal")?"enter":"Enter some text"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,Me,(co={},co[Oe]=(0,m.zK)(Oo,"mode","reveal"),co))},(0,m.zK)(Oo,"mode","reveal")?"swap fore/background colors":"Enter some text")),(0,m.eh)("div",{className:(0,m.AK)(_.$6,je,(mo={},mo[Ve]=(0,m.zK)(Oo,"mode","reveal"),mo))},(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,Ye,(so={},so[Ge]=(0,m.zK)(Oo,"mode","reveal"),so))},(0,m.zK)(Oo,"mode","reveal")?"j / u":"Enter some text"),((0,m.zK)(Oo,"mode","reveal"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,He,(uo={},uo[Ze]=(0,m.zK)(Oo,"mode","reveal"),uo))},(0,m.zK)(Oo,"mode","reveal")?"swap fore/background colors":"Enter some text")),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,We,(_o={},_o[De]=(0,m.zK)(Oo,"mode","reveal"),_o))},(0,m.zK)(Oo,"mode","reveal")?"Change hue [0, 360]":"Enter some text")),(0,m.eh)("div",{className:(0,m.AK)(_.$6,Le,(vo={},vo[Fe]=(0,m.zK)(Oo,"mode","reveal"),vo))},(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,Qe,(fo={},fo[qe]=(0,m.zK)(Oo,"mode","reveal"),fo))},(0,m.zK)(Oo,"mode","reveal")?"k / i":"Enter some text"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,Ue,(ho={},ho[Xe]=(0,m.zK)(Oo,"mode","reveal"),ho))},(0,m.zK)(Oo,"mode","reveal")?"Change saturation [0, 100]":"Enter some text")),(0,m.eh)("div",{className:(0,m.AK)(_.$6,et,(xo={},xo[tt]=(0,m.zK)(Oo,"mode","reveal"),xo))},(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,ot,(go={},go[rt]=(0,m.zK)(Oo,"mode","reveal"),go))},(0,m.zK)(Oo,"mode","reveal")?"l / o":"Enter some text"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,at,(po={},po[nt]=(0,m.zK)(Oo,"mode","reveal"),po))},(0,m.zK)(Oo,"mode","reveal")?"Change brightness [0, 100]":"Enter some text")),(0,m.eh)("div",{className:(0,m.AK)(_.$6,lt,(Ko={},Ko[it]=(0,m.zK)(Oo,"mode","reveal"),Ko))},(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,ct,(bo={},bo[mt]=(0,m.zK)(Oo,"mode","reveal"),bo))},(0,m.zK)(Oo,"mode","reveal")?"shift":"Enter some text"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,st,(ko={},ko[dt]=(0,m.zK)(Oo,"mode","reveal"),ko))},(0,m.zK)(Oo,"mode","reveal")?"toggle edit secondary color":"Enter some text")),(0,m.eh)("div",{className:(0,m.AK)(_.$6,ut,(Po={},Po[_t]=(0,m.zK)(Oo,"mode","reveal"),Po))},(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,vt,(zo={},zo[ft]=(0,m.zK)(Oo,"mode","reveal"),zo))},(0,m.zK)(Oo,"mode","reveal")?"space":"Enter some text"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,ht,(yo={},yo[xt]=(0,m.zK)(Oo,"mode","reveal"),yo))},(0,m.zK)(Oo,"mode","reveal")?"fresh canvas (paint bg color)":"Enter some text")),(0,m.eh)("div",{className:(0,m.AK)(_.$6,gt,(wo={},wo[pt]=(0,m.zK)(Oo,"mode","reveal"),wo))},(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,Kt,(Ao={},Ao[bt]=(0,m.zK)(Oo,"mode","reveal"),Ao))},(0,m.zK)(Oo,"mode","reveal")?"alt / option":"Enter some text"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,_.__wab_text,kt,(No={},No[Pt]=(0,m.zK)(Oo,"mode","reveal"),No))},(0,m.zK)(Oo,"mode","reveal")?"toggle straight or curved paths":"Enter some text")))))),((0,m.zK)(Oo,"mode","dark"),(0,m.eh)("div",{className:(0,m.AK)(_.$6,zt,(Eo={},Eo[yt]=(0,m.zK)(Oo,"mode","dark"),Eo[r.freeBoxglobal_mode_reveal__hxHbGv94Jk]=(0,m.zK)(Oo,"mode","reveal"),Eo))},(0,m.eh)(P.Z,{"data-plasmic-name":"reveal","data-plasmic-override":Ro.reveal,className:(0,m.AK)("__wab_instance",wt,($o={},$o[At]=(0,m.zK)(Oo,"mode","reveal"),$o)),icon:(0,m.eh)(m.HM,{PlasmicIconType:(0,m.zK)(Oo,"mode","reveal")?jt.Z:Ot.Z,className:(0,m.AK)(_.$6,Nt,(Bo={},Bo[Et]=(0,m.zK)(Oo,"mode","reveal"),Bo)),cursor:((0,m.zK)(Oo,"mode","reveal"),"pointer"),role:"img"}),label:(0,m.zK)(Oo,"mode","reveal")?"hide controls":"show controls"}),(0,m.eh)(m.L,{"data-plasmic-name":"home","data-plasmic-override":Ro.home,className:(0,m.AK)(_.$6,_.a,$t,(Jo={},Jo[Bt]=(0,m.zK)(Oo,"mode","dark"),Jo[Jt]=(0,m.zK)(Oo,"mode","reveal"),Jo)),component:c.Link,href:"/design",id:((0,m.zK)(Oo,"mode","reveal")||(0,m.zK)(Oo,"mode","dark"),"logo"),platform:"gatsby",title:((0,m.zK)(Oo,"mode","reveal")||(0,m.zK)(Oo,"mode","dark"),"jeff wade")},(0,m.eh)(P.Z,{"data-plasmic-name":"logo","data-plasmic-override":Ro.logo,className:(0,m.AK)("__wab_instance",r.logo,(Io={},Io[r.logoglobal_mode_dark]=(0,m.zK)(Oo,"mode","dark"),Io[r.logoglobal_mode_reveal]=(0,m.zK)(Oo,"mode","reveal"),Io)),icon:(0,m.eh)(m.HM,{PlasmicIconType:((0,m.zK)(Oo,"mode","reveal")||(0,m.zK)(Oo,"mode","dark"),Vt.Z),className:(0,m.AK)(_.$6,It,(To={},To[Tt]=(0,m.zK)(Oo,"mode","dark"),To[Ct]=(0,m.zK)(Oo,"mode","reveal"),To)),role:"img"}),label:((0,m.zK)(Oo,"mode","reveal")||(0,m.zK)(Oo,"mode","dark"),"jeff wade")})),(0,m.eh)(P.Z,{"data-plasmic-name":"darkmode","data-plasmic-override":Ro.darkmode,className:(0,m.AK)("__wab_instance",r.darkmode,(Co={},Co[r.darkmodeglobal_mode_dark]=(0,m.zK)(Oo,"mode","dark"),Co[r.darkmodeglobal_mode_reveal]=(0,m.zK)(Oo,"mode","reveal"),Co)),icon:(0,m.eh)(m.HM,{PlasmicIconType:(0,m.zK)(Oo,"mode","reveal")?Yt.Z:(0,m.zK)(Oo,"mode","dark")?Gt.Z:Yt.Z,className:(0,m.AK)(_.$6,St,(So={},So[Rt]=(0,m.zK)(Oo,"mode","dark"),So[Mt]=(0,m.zK)(Oo,"mode","reveal"),So)),cursor:((0,m.zK)(Oo,"mode","reveal")||(0,m.zK)(Oo,"mode","dark"),"pointer"),role:"img"}),label:(0,m.zK)(Oo,"mode","reveal")?"skitch to light mode":(0,m.zK)(Oo,"mode","dark")?"switch to light mode":"switch to darkmode"}))))))}({variants:o.variants,args:o.args,overrides:o.overrides,forNode:e})};return t.displayName="root"===e?"Plasmic_404":"Plasmic_404."+e,t}var Lt=Object.assign(Dt("root"),{h2:Dt("h2"),p5Sketch:Dt("p5Sketch"),controls:Dt("controls"),h3:Dt("h3"),reveal:Dt("reveal"),home:Dt("home"),logo:Dt("logo"),darkmode:Dt("darkmode"),internalVariantProps:Ht,internalArgProps:Zt}),Ft=function(e){var t,o,r,a,n={h:171,s:98,b:76,a:90},l=162,i=4,c=6,m=20,s={h:200,s:75,b:3,a:2},d=(n.h,n.b,1/60),u=1,_=["center","corners","all","none"],v=2,f=_[v],h=3,x=20,g=!0,p=!1,K=!1,b=7,k=4,P=1,z=100,y=24,w=5,A=0,N=!0,E=function(){var t=e.windowWidth>e.windowHeight?.6*e.windowHeight:.6*e.windowWidth;e.createCanvas(t,t);x=e.width/5,z=e.width/2-x};e.setup=function(){E(),e.colorMode(e.HSB,360,100,100,100),t=e.color(n.h,n.s,n.b,n.a),e.color(l,i,c,m),r=e.color(s.h,s.s,s.b,100),a=0,V(),e.frameRate(38),e.cursor("pointer")},e.draw=function(){N&&(K&&T(),o=g?e.color(n.h,n.s,n.b,s.a):e.color(s.h,s.s,s.b,s.a),t=g?e.color(s.h,s.s,s.b,n.a):e.color(n.h,n.s,n.b,n.a),$(e.width/2,e.height/2,a),J()),B(f,x/4,e.width*d*Math.cos(e.radians(.8*A)))};var $=function(o,r,a){A++,e.push(),e.translate(o,r),e.rotate(a),e.fill(t),e.noStroke();for(var n=0;n<=k;n++)for(var l=e.radians(20*A)/y,i=n*Math.PI/w,c=z*Math.cos(n*l),m=p?z*Math.sin(n*i):z*Math.sin(l+n*i),s=0;s<b;s++){switch(e.push(),e.rotate(s*(2*Math.PI)/b),P){case 2:e.circle(c/n,m,h),e.circle(-c/n,m,h),e.circle(c/n,-m,h),e.circle(-c/n,-m,h);break;case 1:e.circle(c/n,m,h),e.circle(-c/n,m,h);break;default:e.circle(c/n,m,h)}e.pop()}e.pop()},B=function(o,r,a){switch(e.push(),e.stroke(t),e.strokeWeight(u),e.noFill(),o){case"center":e.circle(e.width/2,e.height/2,a);break;case"corners":e.circle(r,r,a),e.circle(e.width-r,r,a),e.circle(e.width-r,e.height-r,a),e.circle(r,e.height-r,a);break;case"all":e.circle(e.width/2,e.height/2,a),e.circle(r,r,a),e.circle(e.width-r,r,a),e.circle(e.width-r,e.height-r,a),e.circle(r,e.height-r,a)}e.pop()},J=function(){e.push(),e.fill(o),e.noStroke(),e.rect(0,0,e.width,e.height),e.pop()};e.mouseClicked=function(){e.mouseX<e.width&&e.mouseX>0&&e.mouseY<e.height&&e.mouseY>0&&(b=Math.floor(e.random(1,13)),k=Math.floor(e.random(1,7)),P=Math.floor(e.random(3)),h=Math.floor(e.random(1,20)),V())},e.keyPressed=function(){p=e.keyCode===(e.ALT||e.OPTION)?!p:p,K=e.keyCode===e.SHIFT?!K:K,N="p"===e.key?!N:N,38===e.keyCode&&Z(1),40===e.keyCode&&Z(-1),187===e.keyCode&&G(1),189===e.keyCode&&G(-1),188===e.keyCode&&H(-1),190===e.keyCode&&H(1),e.keyCode===e.LEFT_ARROW&&W(-1),e.keyCode===e.RIGHT_ARROW&&W(1),221===e.keyCode&&Y(Math.PI/60),219===e.keyCode&&Y(-Math.PI/60),g=e.keyCode===(e.RETURN||e.ENTER)&&N?!g:g,32===e.keyCode&&V(),K?("u"===e.key&&M(1),"j"===e.key&&M(-1),"i"===e.key&&j(1),"k"===e.key&&j(-1),"o"===e.key&&O(1),"l"===e.key&&O(-1)):("u"===e.key&&C(1),"j"===e.key&&C(-1),"i"===e.key&&R(1),"k"===e.key&&R(-1),"o"===e.key&&S(1),"l"===e.key&&S(-1)),"b"===e.key&&I(),"s"===e.key&&e.saveCanvas(D(),"png")};var I=function(){v++,f=_[v%=4],e.background(r)},T=function(){e.push(),e.translate(e.width/2,10),e.noStroke(),e.fill(t),e.triangle(0,0,-3,5,3,5),e.pop()},C=function(e){n.h+=e,n.h=n.h<0?n.h+360:n.h%360},S=function(t){n.b+=t,n.b=e.map(n.b,0,100,0,100,!0)},R=function(t){n.s+=t,n.s=e.map(n.s,0,100,0,100,!0)},M=function(e){s.h+=e,s.h=s.h<0?s.h+360:s.h%360},O=function(t){s.b+=t,s.b=e.map(s.b,0,100,0,100,!0)},j=function(t){s.s+=t,s.s=e.map(s.s,0,100,0,100,!0)},V=function(){r=g?e.color(n.h,n.s,n.b,100):e.color(s.h,s.s,s.b,100),e.background(r)},Y=function(e){a+e>2*Math.PI?a=a-2*Math.PI+e:a+e<0?a=2*Math.PI+a+e:a+=e},G=function(t){var o=k+t;k=e.map(o,1,50,1,50,!0)},H=function(t){var o=P+t;P=e.map(o,0,2,0,2,!0)},Z=function(t){var o=b+t;b=e.map(o,1,50,1,50,!0)},W=function(t){var o=h+t;h=e.map(o,1,Math.floor(e.width/6),1,Math.floor(e.width/6),!0)},D=function(){return"mandigidala-"+b+"-"+k+"-"+P+"-0-"+A};e.windowResized=function(){E(),V()}};o.p;var Qt=function(){var e=(0,n.useState)([]),t=e[0],o=e[1];return n.createElement(i.mV.Provider,{value:void 0},n.createElement(l.QB.Provider,{value:t},n.createElement(Lt,{p5Sketch:{props:{sketch:Ft}},reveal:{onClick:function(){return(e=(0,a.Z)(t)).includes("reveal")?e.pop():e.push("reveal"),void o(e);var e}},darkmode:{onClick:function(){return(e=(0,a.Z)(t)).includes("dark")?e.shift():e.unshift("dark"),void o(e);var e}}})))}}}]);
//# sourceMappingURL=component---src-pages-404-jsx-37cdf9a4bff5da69dcd6.js.map