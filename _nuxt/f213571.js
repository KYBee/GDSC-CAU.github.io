(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{278:function(t,e,n){var map={"./eunsol.jpg":281,"./heemin.jpg":282,"./ilgoo.jpg":283,"./minjun.jpg":284,"./peniel.jpg":285,"./songgyeong.jpg":286,"./tim-cook.png":287,"./uhyeon.JPG":288};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=278},281:function(t,e,n){t.exports=n.p+"img/eunsol.8a0eeaf.jpg"},282:function(t,e,n){t.exports=n.p+"img/heemin.c61b693.jpg"},283:function(t,e,n){t.exports=n.p+"img/ilgoo.39ec243.jpg"},284:function(t,e,n){t.exports=n.p+"img/minjun.e7101cf.jpg"},285:function(t,e,n){t.exports=n.p+"img/peniel.aabf029.jpg"},286:function(t,e,n){t.exports=n.p+"img/songgyeong.f86d17d.jpg"},287:function(t,e,n){t.exports=n.p+"img/tim-cook.db7978f.png"},288:function(t,e,n){t.exports=n.p+"img/uhyeon.2b5ad42.JPG"},302:function(t,e,n){var content=n(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("36a917fa",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";n(302)},318:function(t,e,n){var r=n(28)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.custom-text[data-v-81e95efc]{\n  word-break:keep-all\n}\n.back-yellow[data-v-81e95efc]{\n  background-color:#fbbf25\n}\n.lead-box[data-v-81e95efc]{\n  border-radius:70%;\n  overflow:hidden\n}\n.profile[data-v-81e95efc]{\n  width:100%;\n  height:100%;\n  -o-object-fit:cover;\n     object-fit:cover\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},370:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(42),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("members",r.id).where({role:"Lead"}).fetch();case 3:return o=e.sent,e.next=6,n("members",r.id).sortBy("name","asc").where({role:"Core Member"}).fetch();case 6:return l=e.sent,e.abrupt("return",{coreMember:l,Lead:o});case 8:case"end":return e.stop()}}),e)})))()},head:{title:"About",htmlAttrs:{lang:"ko"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"중앙대학교 Google DSC 블로그입니다. 활동 관련 소식, 공부 내용 등을 주기적으로 업로드합니다."},{name:"format-detection",content:"telephone=no"}]}}),l=(n(317),n(9)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-6 md:gap-y-0"},[r("div",{staticClass:"custom-text poppins text-2xl md:text-3xl mr-9 py-2 md:py-6 text-gray-800"},[t._v("\n            Google Developer Student Clubs CAU is a community group for CAU students interested in Google developer technologies.\n        ")]),t._v(" "),r("div",{staticClass:"px-8 py-8 back-yellow rounded-xl relative h-52 md:h-auto"},[t._m(1),t._v(" "),r("nuxt-link",{staticClass:"absolute bottom-0 left-0 pb-8 pl-8",attrs:{to:"members"}},[r("div",{staticClass:"poppins text-base md:text-lg text-gray-800 underline"},[t._v("\n                    See Members\n                ")])])],1),t._v(" "),r("div",{staticClass:"px-8 py-8 back-yellow rounded-xl relative h-56 md:h-auto"},[t._m(2),t._v(" "),r("nuxt-link",{staticClass:"absolute bottom-0 left-0 pb-8 pl-8",attrs:{to:"projects"}},[r("div",{staticClass:" poppins text-base md:text-lg text-gray-800 underline"},[t._v("\n                    See Projects\n                ")])])],1)]),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"pt-12 md:pt-16 max-w-6xl mx-auto px-10"},[r("div",{},t._l(t.Lead,(function(e){return r("div",{key:e},[r("nuxt-link",{staticClass:"max-x-3xl mx-auto md:flex md:justify-between md:items-center group",attrs:{to:{name:"id",params:{id:e.slug}}}},[r("div",{staticClass:"flex justify-center"},[r("div",{staticClass:"lead-box w-40 h-40 md:w-52 md:h-52"},[r("img",{staticClass:"profile",attrs:{src:n(278)("./"+e.img),alt:""}})])]),t._v(" "),r("div",{staticClass:"mx-auto pl-0 md:pl-12"},[r("div",{},[r("p",{staticClass:"pt-6 md:pt-0 custom-text text-center text-gray-600 text-base md:text-xl mb-4 md:mb-6"},[t._v('\n                                "공부만을 위한 프로그래밍을 원하지 않습니다. 세상과 부딪히는 개발을 원합니다. '),r("br"),t._v(' 그런 사람들과 함께하고자 중앙대학교 GDSC에서 모였습니다."\n                            ')]),t._v(" "),r("div",{staticClass:"text-lg md:text-xl flex justify-center poppins text-gray-800 group-hover:underline"},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"text-sm md:text-base flex justify-center poppins text-gray-800"},[t._v(t._s(e.role))])])])])],1)})),0)]),t._v(" "),t._m(4),t._v(" "),r("div",{staticClass:"max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-x-3 md:gap-x-5 gap-y-9 pb-20 md:pb-24"},t._l(t.coreMember,(function(e){return r("div",{key:e},[r("nuxt-link",{staticClass:"group",attrs:{to:{name:"id",params:{id:e.slug}}}},[r("div",{staticClass:"flex justify-center mb-3 md:mb-5"},[r("div",{staticClass:"lead-box h-32 w-32 md:h-40 md:w-40"},[r("img",{staticClass:"profile",attrs:{src:n(278)("./"+e.img),alt:""}})])]),t._v(" "),r("div",[r("div",{staticClass:"text-lg md:text-xl flex justify-center poppins text-gray-800 group-hover:underline"},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"text-sm md:text-base flex justify-center poppins text-gray-800"},[t._v(t._s(e.role))])])])],1)})),0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-28 md:pt-52 pb-0 md:pb-10 max-w-6xl mx-auto px-6"},[n("div",{staticClass:"pb-6 poppins text-3xl md:text-7xl font-medium text-gray-800"},[t._v("\n            About\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"text-5xl poppins pb-2.5 font-medium text-gray-800"},[t._v("20")]),t._v(" "),n("p",{staticClass:"text-xl poppins text-gray-800"},[t._v("Active Members")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"text-5xl poppins pb-2.5 font-medium text-gray-800"},[t._v("20")]),t._v(" "),n("p",{staticClass:"text-xl poppins text-gray-800"},[t._v("Individual Projects "),n("br"),t._v(" in Process")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-16 md:pt-24 flex justify-between items-center max-w-6xl mx-auto px-6"},[n("div",{staticClass:"text-3xl md:text-4xl text-gray-800 font-medium poppins"},[t._v("Lead")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-16 md:pt-24 flex justify-between items-center max-w-6xl mx-auto px-6 pb-12 md:pb-16"},[n("div",{staticClass:"text-3xl md:text-4xl text-gray-800 font-medium poppins"},[t._v("Core Members")])])}],!1,null,"81e95efc",null);e.default=component.exports}}]);