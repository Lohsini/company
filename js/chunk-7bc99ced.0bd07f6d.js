(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bc99ced"],{"377f":function(t,e,s){},4107:function(t,e,s){},4488:function(t,e,s){},"463b":function(t,e,s){"use strict";var n=s("377f"),a=s.n(n);a.a},6860:function(t,e,s){"use strict";var n=s("fba3"),a=s.n(n);a.a},a2f9:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"news"},[s("Title",{attrs:{msg:t.wordTitle}}),s("News",{attrs:{newscard:t.news}}),s("Footer")],1)},a=[],r=(s("4160"),s("159b"),s("ae2c")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"news"},[s("div",{staticClass:"news"},[s("div",{staticClass:"black-background"},[s("div",{staticClass:"container"},[s("div",{staticClass:"news-inside row"},t._l(t.content,(function(t,e){return s("div",{key:e,staticClass:"col col-12 col-lg-4 col-md-6"},[s("card",{attrs:{newscard:t}})],1)})),0)])])])])},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"newscard"},[s("div",{staticClass:"picture"},[s("a",{attrs:{href:t.content.url,target:"_blank"}},[s("img",{attrs:{src:t.content.image}})])]),s("h1",{staticClass:"topic"},[s("a",{attrs:{href:t.content.url,target:"_blank"}},[t._v(t._s(t.content.topic))])]),s("h3",{staticClass:"categories"},[s("a",{attrs:{href:""},on:{click:function(t){t.preventDefault()}}},[t._v(t._s(t.content.categories))])]),s("p",[t._v(t._s(t.content.content))]),s("h3",{staticClass:"readmore"},[s("a",{attrs:{href:t.content.url,target:"_blank"}},[t._v(" 閱讀文章 "),s("i",{staticClass:"fas fa-angle-right"})])])])},l=[],u={props:{newscard:{type:Object,default:function(){return{topic:"這是標題",categories:"這是種類",content:"這是內容",image:"https://picsum.photos/800/800?random=1",url:""}}}},data:function(){return{content:this.newscard}}},d=u,v=(s("ca02"),s("2877")),f=Object(v["a"])(d,o,l,!1,null,"39467282",null),p=f.exports,_={props:{newscard:{type:Array,default:function(){return[{topic:"這是標題",categories:"這是種類",content:"這是內容",image:"https://picsum.photos/800/800?random=1"},{topic:"這是標題",categories:"這是種類",content:"這是內容",image:"https://picsum.photos/800/800?random=1"}]}}},data:function(){return{content:this.newscard}},components:{card:p}},h=_,m=(s("6860"),Object(v["a"])(h,c,i,!1,null,"36726e62",null)),b=m.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"container footer_parts"},[t._m(0),t._m(1),s("div",{staticClass:"footer_map"},[s("p",{},[t._v("網站地圖")]),s("router-link",{attrs:{to:"/Home"}},[t._v("首頁")]),s("router-link",{attrs:{to:"/about"}},[t._v("關於我們")]),s("router-link",{attrs:{to:"/products"}},[t._v("產品介紹")]),s("router-link",{attrs:{to:"/services"}},[t._v("服務模式")]),s("router-link",{attrs:{to:"/news"}},[t._v("新聞快訊")]),s("router-link",{attrs:{to:"/contactus"}},[t._v("聯絡我們")])],1)])])},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer_brand"},[s("p",[t._v(" 智慧物聯網與科技藝術應用研究中心 "),s("br"),t._v("本研究中心由科技部計畫補助 ")]),s("div",{staticClass:"picture"},[s("img",{attrs:{src:"https://picsum.photos/500/500?random=50",alt:"logo"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer_member"},[s("div",{staticClass:"person"},[s("p",[t._v("成員")]),s("div",[t._v("計畫主持人： 黃能富 院長")]),s("div",[t._v("共同主持人： 許素朱 院長")]),s("div",[t._v("共同主持人： 蕭銘芚 副院長")]),s("div",[t._v("共同主持人： 許健平 教授")]),s("div",[t._v("共同主持人： 陳文村 教授")]),s("div",[t._v("共同主持人： 張正尚 教授")]),s("div",[t._v("共同主持人： 蔡明哲 教授")]),s("div",[t._v("共同主持人： 徐正炘 教授")]),s("br")])])}],C=(s("463b"),{}),k=Object(v["a"])(C,w,g,!1,null,"fd646a0a",null),E=k.exports,$={data:function(){return{wordTitle:"新聞快訊",newscardContent:[]}},computed:{news:function(){var t=this.newscardContent;return t.reverse()}},components:{Title:r["a"],News:b,Footer:E},created:function(){var t=this,e="https://brycehuang.com/api/getNews/";this.axios.get(e).then((function(e){console.log(e.data.data),e.data.data.forEach((function(e){t.newscardContent.push(e)}))}))}},j=$,x=Object(v["a"])(j,n,a,!1,null,"e93d81a8",null);e["default"]=x.exports},ae2c:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("div",{staticClass:"container"},[s("h1",[t._v(t._s(t.msg))])])])},a=[],r={props:{msg:{type:String,default:"title"}}},c=r,i=(s("b1b4"),s("2877")),o=Object(i["a"])(c,n,a,!1,null,"8a1221ce",null);e["a"]=o.exports},b1b4:function(t,e,s){"use strict";var n=s("4488"),a=s.n(n);a.a},ca02:function(t,e,s){"use strict";var n=s("4107"),a=s.n(n);a.a},fba3:function(t,e,s){}}]);
//# sourceMappingURL=chunk-7bc99ced.0bd07f6d.js.map