(function(t){function e(e){for(var c,u,l=e[0],i=e[1],a=e[2],p=0,b=[];p<l.length;p++)u=l[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&b.push(o[u][0]),o[u]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);s&&s(e);while(b.length)b.shift()();return r.push.apply(r,a||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(c=!1)}c&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var c={},o={app:0},r=[];function u(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=c,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)u.d(n,c,function(e){return t[e]}.bind(null,c));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var a=0;a<l.length;a++)e(l[a]);var s=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2b95":function(t,e,n){},"2fd0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("b0c0");var c=n("7a23"),o=n("e347"),r=n.n(o),u=function(t){return Object(c["m"])("data-v-f0d73120"),t=t(),Object(c["l"])(),t},l={class:"wrapper"},i=u((function(){return Object(c["g"])("img",{class:"logo",src:r.a,alt:"Logo",role:"banner"},null,-1)})),a={class:"calculator",role:"main"},s={class:"calculator__left"},p={class:"clculator__tips"},b=u((function(){return Object(c["g"])("div",{class:"label"},"Select Tip %",-1)})),f={class:"calculator__buttons"},v={class:"calculator__right"},d={class:"calculator_res_row"},j=u((function(){return Object(c["g"])("div",{class:"title"},[Object(c["g"])("p",null,"Tip Amount"),Object(c["g"])("span",null,"/ person")],-1)})),O={class:"value"},g={class:"calculator_res_row _last"},m=u((function(){return Object(c["g"])("div",{class:"title"},[Object(c["g"])("p",null,"Total"),Object(c["g"])("span",null,"/ person")],-1)})),h={class:"value"};function y(t,e,n,o,r,u){var y=Object(c["q"])("InputText"),k=Object(c["q"])("NumeredButton");return Object(c["k"])(),Object(c["f"])("div",l,[i,Object(c["g"])("div",a,[Object(c["g"])("div",s,[Object(c["h"])(y,{label:"Bill",icon:"money"}),Object(c["g"])("div",p,[b,Object(c["g"])("div",f,[(Object(c["k"])(!0),Object(c["f"])(c["a"],null,Object(c["p"])(o.buttons,(function(t){return Object(c["k"])(),Object(c["d"])(k,{buttonValue:t,key:t,class:Object(c["j"])({active:o.persent===t}),onButtonClick:o.setPersent},null,8,["buttonValue","class","onButtonClick"])})),128)),o.custom?Object(c["v"])((Object(c["k"])(),Object(c["f"])("input",{key:0,ref:"input",class:"custom-input",type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.persent=t}),onInput:e[1]||(e[1]=function(){return o.setCustomPersent&&o.setCustomPersent.apply(o,arguments)})},null,544)),[[c["t"],o.persent]]):(Object(c["k"])(),Object(c["d"])(k,{key:1,title:"Custom",class:"custom",onButtonClick:o.setCustom},null,8,["onButtonClick"]))])]),Object(c["h"])(y,{label:"Number of Piople",icon:"person"})]),Object(c["g"])("div",v,[Object(c["g"])("div",d,[j,Object(c["g"])("div",O,"$"+Object(c["r"])(o.tip),1)]),Object(c["g"])("div",g,[m,Object(c["g"])("div",h,"$"+Object(c["r"])(o.total),1)]),Object(c["g"])("button",{class:"reset",onClick:e[2]||(e[2]=function(){return o.reset&&o.reset.apply(o,arguments)})},"Reset")])])])}var k=n("b1f8"),_=(n("a9e3"),n("ac1f"),n("466d"),n("b680"),n("5502")),w={name:"App",setup:function(){var t=Object(_["b"])(),e=Object(c["o"])(null),n=Object(c["o"])(0),o=Object(c["o"])(!1),r=[5,10,15,25,50],u=function(t){o.value=!1,n.value=t},l=function(t){n.value=t,o.value=!0,setTimeout((function(){return e.value.focus()}),0)},i=function(t){var e=Number(t.target.value.match(/\d{1,4}/));e<0&&Object(k["a"])("val"),t.target.value=e},a=Object(c["b"])((function(){if(0===t.state.piople)return"0.00";var e=t.state.bill*n.value/t.state.piople/100;return e>0?e.toFixed(2):"0.00"})),s=Object(c["b"])((function(){if(0===t.state.piople)return"0.00";var e=(t.state.bill*n.value/100+t.state.bill)/t.state.piople;return e>0?e.toFixed(2):"0.00"})),p=function(){n.value=0,o.value=!1,t.state.bill=0,t.state.piople=0};return{input:e,buttons:r,setPersent:u,persent:n,tip:a,total:s,custom:o,setCustomPersent:i,setCustom:l,reset:p}}},C=(n("adb1"),n("6b0d")),x=n.n(C);const B=x()(w,[["render",y],["__scopeId","data-v-f0d73120"]]);var P=B,S=(n("5319"),Object(_["a"])({state:function(){return{bill:0,piople:0}},mutations:{setBill:function(t,e){return t.bill=e},setPiople:function(t,e){return t.piople=e}},actions:{bill:function(t,e){var n=t.commit;/^(?=.*\d)\d*(?:\.\d{0,2})?$/.test(e)||(e=e.substr(0,e.length-1)),e=0===e.length||"0"==e?0:Number(e),n("setBill",e)},piople:function(t,e){var n=t.commit;e=e.replace(/\D/g,""),e=0===e.length||"0"==e?0:Number(e),n("setPiople",e)}}})),T=S,V=function(t){return Object(c["m"])("data-v-e7725f34"),t=t(),Object(c["l"])(),t},$={class:"input-text"},F={class:"input-label"},M=["for"],I={key:0,class:"error-msg"},N={class:"input-wrapper"},z={key:0,class:"icon"},D={key:0,xmlns:"http://www.w3.org/2000/svg",width:"11",height:"17"},E=V((function(){return Object(c["g"])("path",{fill:"#9EBBBD",d:"M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"},null,-1)})),H=[E],A={key:1,xmlns:"http://www.w3.org/2000/svg",width:"13",height:"16"},Z=V((function(){return Object(c["g"])("path",{fill:"#9EBBBD",d:"M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"},null,-1)})),q=[Z],J=["id"];function R(t,e,n,o,r,u){return Object(c["k"])(),Object(c["f"])("div",$,[Object(c["g"])("div",F,[Object(c["g"])("label",{for:n.icon},Object(c["r"])(n.label),9,M),u.isZerro?(Object(c["k"])(),Object(c["f"])("span",I,"Can't be zerro")):Object(c["e"])("",!0)]),Object(c["g"])("div",N,[n.icon.length?(Object(c["k"])(),Object(c["f"])("i",z,["money"===n.icon?(Object(c["k"])(),Object(c["f"])("svg",D,H)):Object(c["e"])("",!0),"person"===n.icon?(Object(c["k"])(),Object(c["f"])("svg",A,q)):Object(c["e"])("",!0)])):Object(c["e"])("",!0),Object(c["v"])(Object(c["g"])("input",{type:"text",class:Object(c["j"])({error:u.isZerro}),"onUpdate:modelValue":e[0]||(e[0]=function(t){return u.ipt=t}),id:n.icon,onInput:e[1]||(e[1]=function(){return u.validation&&u.validation.apply(u,arguments)}),onFocus:e[2]||(e[2]=function(){return o.setFocus&&o.setFocus.apply(o,arguments)}),onMouseup:e[3]||(e[3]=function(){return o.setFocusEnd&&o.setFocusEnd.apply(o,arguments)})},null,42,J),[[c["t"],u.ipt]])])])}var U={name:"InputText",props:{label:{type:String},icon:{type:String,default:""}},setup:function(){var t=function(t){t.preventDefault()},e=function(t){t.preventDefault(),t.target.setSelectionRange(-1,-1)};return{setFocus:t,setFocusEnd:e}},methods:{validation:function(t){t.target.value=t.target.value.replace(/^00/,"0"),"money"===this.icon&&(/^(?=.*\d)\d*(?:\.\d{0,2})?$/.test(t.target.value)||(t.target.value=t.target.value.substr(0,t.target.value.length-1))),"person"===this.icon&&(t.target.value=t.target.value.replace(/\D/g,""),0===t.target.value.length&&(t.target.value="0"))}},computed:{ipt:{get:function(){return"money"===this.icon?this.$store.state.bill:"person"===this.icon?this.$store.state.piople:void 0},set:function(t){"money"===this.icon&&this.$store.dispatch("bill",t),"person"===this.icon&&this.$store.dispatch("piople",t)}},isZerro:function(){return 0===this.$store.state.bill&&"money"===this.icon||0===this.$store.state.piople&&"person"===this.icon}}};n("d5be");const L=x()(U,[["render",R],["__scopeId","data-v-e7725f34"]]);var G=L;function K(t,e,n,o,r,u){return Object(c["k"])(),Object(c["f"])("button",{onClick:e[0]||(e[0]=function(){return o.clickHandler&&o.clickHandler.apply(o,arguments)})},Object(c["r"])(o.buttonTitle),1)}n("d3b7"),n("25f0");var Q={name:"NumeredButton",props:{title:{type:String,default:""},buttonValue:{type:Number,default:0}},setup:function(t,e){var n=e.emit,o=Object(c["s"])(t,"buttonValue"),r=Object(c["s"])(t,"title"),u=o.value?o.value.toString()+"%":r.value,l=function(){n("buttonClick",o.value)};return{buttonTitle:u,clickHandler:l}}};n("9b7e");const W=x()(Q,[["render",K],["__scopeId","data-v-499431ac"]]);var X=W,Y=[G,X],tt=(n("2b95"),Object(c["c"])(P));Y.forEach((function(t){tt.component(t.name,t)})),tt.use(T),tt.mount("#app")},"5cd7":function(t,e,n){},"7fa3":function(t,e,n){},"9b7e":function(t,e,n){"use strict";n("7fa3")},adb1:function(t,e,n){"use strict";n("2fd0")},d5be:function(t,e,n){"use strict";n("5cd7")},e347:function(t,e,n){t.exports=n.p+"tip-calculator-app/img/logo.696ac68c.svg"}});
//# sourceMappingURL=app.7ce8dc15.js.map