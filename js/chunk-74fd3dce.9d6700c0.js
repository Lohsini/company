(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74fd3dce"],{"17ad":function(t,o,e){"use strict";var n=e("efb5"),a=e.n(n);a.a},"4a5a":function(t,o,e){},"4f6b":function(t,o,e){},5899:function(t,o){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,o,e){var n=e("1d80"),a=e("5899"),r="["+a+"]",s=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),i=function(t){return function(o){var e=String(n(o));return 1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(c,"")),e}};t.exports={start:i(1),end:i(2),trim:i(3)}},"6e46":function(t,o,e){},7156:function(t,o,e){var n=e("861d"),a=e("d2bb");t.exports=function(t,o,e){var r,s;return a&&"function"==typeof(r=o.constructor)&&r!==e&&n(s=r.prototype)&&s!==e.prototype&&a(t,s),t}},"77fd":function(t,o,e){"use strict";var n=e("6e46"),a=e.n(n);a.a},a9e3:function(t,o,e){"use strict";var n=e("83ab"),a=e("da84"),r=e("94ca"),s=e("6eeb"),c=e("5135"),i=e("c6b6"),p=e("7156"),u=e("c04e"),m=e("d039"),d=e("7c73"),l=e("241c").f,h=e("06cf").f,f=e("9bf2").f,R=e("58a8").trim,L="Number",v=a[L],C=v.prototype,w=i(d(C))==L,N=function(t){var o,e,n,a,r,s,c,i,p=u(t,!1);if("string"==typeof p&&p.length>2)if(p=R(p),o=p.charCodeAt(0),43===o||45===o){if(e=p.charCodeAt(2),88===e||120===e)return NaN}else if(48===o){switch(p.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+p}for(r=p.slice(2),s=r.length,c=0;c<s;c++)if(i=r.charCodeAt(c),i<48||i>a)return NaN;return parseInt(r,n)}return+p};if(r(L,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var b,g=function(t){var o=arguments.length<1?0:t,e=this;return e instanceof g&&(w?m((function(){C.valueOf.call(e)})):i(e)!=L)?p(new v(N(o)),e,g):N(o)},y=n?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;y.length>S;S++)c(v,b=y[S])&&!c(g,b)&&f(g,b,h(v,b));g.prototype=C,C.constructor=g,s(a,L,g)}},e6dc:function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"products"},[e("Banner"),e("bar",{attrs:{active:t.active,productList:t.productList},on:{scroll:function(o){return t.scrollTo(o)}}}),t._l(t.productList,(function(t){return e("products",{key:t.name,attrs:{product:t}})})),e("Footer")],2)},a=[],r=(e("4160"),e("159b"),function(){var t=this,o=t.$createElement;t._self._c;return t._m(0)}),s=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"banner"},[e("div",{staticClass:"background"},[e("div",{staticClass:"container"},[e("div",{staticClass:"txt text-center"},[e("h1",{staticClass:"mb-4"},[t._v("產品介紹")]),e("h2",{staticClass:"mb-5"},[t._v("Product Description")])])])])])}],c={data:function(){return{button1:"產品介紹",button2:"產品規格"}},components:{},methods:{introduction:function(){window.alert("產品介紹")},specification:function(){window.alert("產品規格")}}},i=c,p=(e("77fd"),e("2877")),u=Object(p["a"])(i,r,s,!1,null,"580c677a",null),m=u.exports,d=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"products-bar"},[e("div",{staticClass:"container"},[e("ul",{staticClass:"navbar nav"},t._l(t.filiter,(function(o,n){return e("a",{key:n,class:{active:t.active===n},on:{click:function(o){return o.preventDefault(),t.scroll(n)}}},[e("li",[t._v(t._s(o.groupname))])])})),0)])])},l=[],h=(e("a9e3"),{props:{active:{type:Number,default:0},productList:{type:Array,default:function(){return[{productName:"LoRaWAN環境感知感應器集中器(LoRa1485)"},{productName:"土壤感測器組(LoRa2485) / (NB4485)"},{productName:"LoRaWAN環境感知感應器集中器(LoRa1485)"}]}}},data:function(){return{product:this.productList}},computed:{filiter:function(){var t=[];return this.product.forEach((function(o){o.scrollNav&&t.push(o)})),t}},methods:{scroll:function(t){this.$emit("scroll",t)}}}),f=h,R=(e("e7d0"),Object(p["a"])(f,d,l,!1,null,"4024a6ee",null)),L=R.exports,v=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"products",class:{scrollNav:t.thisproduct.scrollNav}},[e("h1",{staticClass:"text-center"},[t._v(t._s(t.thisproduct.no)+"-"+t._s(t.thisproduct.productName))]),e("div",{staticClass:"container"},[e("div",{staticClass:"d-flex row"},[e("div",{staticClass:"slideshow"},[e("slideshow",{attrs:{pictures:t.thisproduct.pictures}})],1),e("div",{staticClass:"description"},[e("h2",{staticClass:"text-justify"},[t._v(" "+t._s(t.thisproduct.productName)+" 規格簡述： "),e("br"),t._v(" "+t._s(t.thisproduct.description)+" ")]),t._l(t.thisproduct.componentList,(function(o,n){return e("div",{key:n},[e("p",[t._v(t._s(o.component))]),t._l(o.spec,(function(o,n){return e("ul",{key:n},[e("li",[t._v(t._s(o))])])}))],2)})),e("div",{staticClass:"dm-btn"},[e("a",{staticClass:"btn btn-primary",attrs:{href:t.thisproduct.DMdownload},on:{click:function(o){return o.preventDefault(),t.download(o)}}},[e("i",{staticClass:"fas fa-file-download"}),t._v("DM下載 ")])])],2)])])])},C=[],w=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},[t._l(t.pictures,(function(o,n){return e("swiper-slide",{key:n,style:{backgroundImage:"url("+o+")"}},[e("div",{staticClass:"number_text"},[t._v(t._s(n+1)+" / "+t._s(t.pictures.length))])])})),e("div",{staticClass:"swiper-pagination swiper-pagination-white",attrs:{slot:"pagination"},slot:"pagination"}),e("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"}),e("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"})],2)},N=[],b=e("7212"),g=(e("a7a3"),{name:"swiper-example-fade-effect",title:"Fade effect",components:{Swiper:b["Swiper"],SwiperSlide:b["SwiperSlide"]},props:{pictures:{type:Array,default:function(){return["https://picsum.photos/600/300?random=1","https://picsum.photos/600/300?random=2","https://picsum.photos/600/300?random=3","https://picsum.photos/600/300?random=4"]}}},data:function(){return{swiperOption:{spaceBetween:30,effect:"fade",pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}}),y=g,S=(e("17ad"),Object(p["a"])(y,w,N,!1,null,"2f6f20a4",null)),A=S.exports,B={components:{slideshow:A},props:{product:{type:Object,default:function(){return{scrollNav:!0,DMdownload:"",productName:"LoRaWAN環境感知感應器集中器(LoRa1485)",description:"LoRaWAN環境感知感應器集中器(Linkit 7697、LoRaWAN通訊、WiFi通訊、太陽能板；空氣溫濕度光照度感測器、土壤溫溼度/氮磷鉀/酸鹼值感測器各1個",componentList:[{component:"LoRa模組：",spec:["Compliance to LoRaWAN 1.0.2","Built-in antenna with IPEX connector","Command set with LoRaWAN chip for easy configuration","LoRa Frequency Band: 920 ~ 925MHz ISM","LoRa Transmit Power : 0.1W (up to 20 dBm)","LoRa Receive Sensitivity: -130dBm","Operating Temperature: -10ºC ~ 55ºC","LoRa Number of Channels: Configurable 8 channels","LoRa Security: AES 128","Storage Temperature: -10ºC ~ 60ºC"]},{component:"土壤溫溼度/電導度感應器：",spec:["直流供電: 3.6~30VDC","最大功耗:0.4w ","精準度:土壤濕度±3%,土壤溫度±0.5攝氏","土壤電導率±3% ","土壤溫度量程:-40~80攝氏","土壤濕度量程:0%RH~100%RH ","土壤電導度量程:0-10000us/cm","通訊方式: RS485"]}],pictures:["https://picsum.photos/600/300?random=1","https://picsum.photos/600/300?random=2","https://picsum.photos/600/300?random=3","https://picsum.photos/600/300?random=4"]}}}},data:function(){return{thisproduct:this.product}},methods:{download:function(){window.alert("這是DM下載按鈕")}}},P=B,M=(e("f283"),Object(p["a"])(P,v,C,!1,null,"411dacc9",null)),E=M.exports,T=e("02eb"),_={data:function(){return{active:0,productList:[{no:1,scrollNav:!0,groupname:"感測器",DMdownload:"",productName:"LoRaWAN環境感知感應器集中器(LoRa1485)",description:"LoRaWAN環境感知感應器集中器(Linkit 7697、LoRaWAN通訊、WiFi通訊、太陽能板；空氣溫濕度光照度感測器、土壤溫溼度/氮磷鉀/酸鹼值感測器各1個。",componentList:[{component:"LoRa模組：",spec:["Compliance to LoRaWAN 1.0.2","Built-in antenna with IPEX connector","Command set with LoRaWAN chip for easy configuration","LoRa Frequency Band: 920 ~ 925MHz ISM","LoRa Transmit Power : 0.1W (up to 20 dBm)","LoRa Receive Sensitivity: -130dBm","Operating Temperature: -10ºC ~ 55ºC","LoRa Number of Channels: Configurable 8 channels","LoRa Security: AES 128","Storage Temperature: -10ºC ~ 60ºC"]},{component:"土壤溫溼度/電導度感應器：",spec:["直流供電: 3.6~30VDC","最大功耗:0.4w ","精準度:土壤濕度±3%,土壤溫度±0.5攝氏","土壤電導率±3% ","土壤溫度量程:-40~80攝氏","土壤濕度量程:0%RH~100%RH ","土壤電導度量程:0-10000us/cm","通訊方式: RS485"]}],pictures:["https://picsum.photos/600/300?random=1","https://picsum.photos/600/300?random=2","https://picsum.photos/600/300?random=3","https://picsum.photos/600/300?random=4"]},{no:2,scrollNav:!1,DMdownload:"",productName:"土壤感測器組(LoRa2485) / (NB4485)",description:"(1)LoRa或NB-IoT通訊模組、藍芽晶片、太陽能板、鋰電池、土壤感測器一支。(2)可選配共二支土壤感測器。",componentList:[{component:"LoRa模組：",spec:["Compliance to LoRaWAN 1.0.2","Built-in antenna with IPEX connector","Command set with LoRaWAN chip for easy configuration","LoRa Frequency Band: 920 ~ 925MHz ISM","LoRa Transmit Power : 0.1W (up to 20 dBm)","LoRa Receive Sensitivity: -130dBm","Operating Temperature: -10ºC ~ 55ºC","LoRa Number of Channels: Configurable 8 channels","LoRa Security: AES 128","Storage Temperature: -10ºC ~ 60ºC"]},{component:"藍芽晶片：(nRF52832)",spec:["SoC效能至少2.4GHz以上","256KB/128KB快閃記憶體+32KB/16KB RAM","工作溫度範圍：-40℃至+105℃","電壓範圍：1.7V至3.6V","192kB快閃記憶體+ 24kB RAM"]},{component:"土壤溫溼度/電導度感應器：",spec:["直流供電: 3.6~30VDC","最大功耗:0.4w ","精準度:土壤濕度±3%,土壤溫度±0.5攝氏","土壤電導率±3% ","土壤溫度量程:-40~80攝氏","土壤濕度量程:0%RH~100%RH ","土壤電導度量程:0-10000us/cm","通訊方式: RS485"]}],pictures:["https://picsum.photos/600/300?random=5","https://picsum.photos/600/300?random=6","https://picsum.photos/600/300?random=7","https://picsum.photos/600/300?random=8"]},{no:3,scrollNav:!0,groupname:"氣象站",DMdownload:"",productName:"簡易型氣象站",description:"LoRa或NB通訊模組、藍芽晶片、太陽能板、鋰電池、風向、風速、雨量計。",componentList:[{component:"LoRa模組：",spec:["Compliance to LoRaWAN 1.0.2","Built-in antenna with IPEX connector","Command set with LoRaWAN chip for easy configuration","LoRa Frequency Band: 920 ~ 925MHz ISM","LoRa Transmit Power : 0.1W (up to 20 dBm)","LoRa Receive Sensitivity: -130dBm","Operating Temperature: -10ºC ~ 55ºC","LoRa Number of Channels: Configurable 8 channels","LoRa Security: AES 128","Storage Temperature: -10ºC ~ 60ºC"]},{component:"藍芽晶片：",spec:["SoC效能至少2.4GHz以上","256KB/128KB快閃記憶體+32KB/16KB RAM","工作溫度範圍：-40℃至+105℃","電壓範圍：1.7V至3.6V","192kB快閃記憶體+ 24kB RAM"]},{component:"微氣象站：",spec:["風向: 0~337.5度, ±22.5度","風速: 0~50 m/sec, ±0.75 m/s","雨量: 0~3553.5 mm, ±0.3mm"]}],pictures:["https://picsum.photos/600/300?random=12","https://picsum.photos/600/300?random=9","https://picsum.photos/600/300?random=10","https://picsum.photos/600/300?random=11"]},{no:4,scrollNav:!1,DMdownload:"",productName:"微氣象站組",description:"LoRa或NB通訊模組、藍芽晶片、太陽能板、鉛酸電池、風向、風速、雨量計、氣象百葉箱(空氣溫/濕度/光照度)。",componentList:[{component:"LoRa模組：",spec:["Compliance to LoRaWAN 1.0.2","Built-in antenna with IPEX connector","Command set with LoRaWAN chip for easy configuration","LoRa Frequency Band: 920 ~ 925MHz ISM","LoRa Transmit Power : 0.1W (up to 20 dBm)","LoRa Receive Sensitivity: -130dBm","Operating Temperature: -10ºC ~ 55ºC","LoRa Number of Channels: Configurable 8 channels","LoRa Security: AES 128","Storage Temperature: -10ºC ~ 60ºC"]},{component:"藍芽晶片：",spec:["SoC效能至少2.4GHz以上","256KB/128KB快閃記憶體+32KB/16KB RAM","工作溫度範圍：-40℃至+105℃","電壓範圍：1.7V至3.6V","192kB快閃記憶體+ 24kB RAM"]},{component:"微氣象站：",spec:["風向: 0~337.5度, ±22.5度","風速: 0~50 m/sec, ±0.75 m/s","雨量: 0~3553.5 mm, ±0.3mm","氣象百葉箱:","空氣溫度: -40℃ ~ +120℃, ±0.5℃","空氣濕度: 0%RH ~ 99%RH, ±3%RH","光照強度: 0~200,000Lux, ±7%"]}],pictures:["https://picsum.photos/600/300?random=10","https://picsum.photos/600/300?random=9","https://picsum.photos/600/300?random=11","https://picsum.photos/600/300?random=12"]},{no:5,scrollNav:!0,groupname:"人工智慧自動澆灌系統",DMdownload:"",productName:"人工智慧自動澆灌系統(LoRaP2P-IR)",description:"包含水閥、LoRa P2P智能水閥控制器、水錶各一個；施工及周邊耗材另計。",componentList:[{component:"LoRa P2P智能水閥控制器：",spec:["Built-in antenna with IPEX connector","Command set with LoRaWAN chip for easy configuration","LoRa Frequency Band: 920 ~ 925MHz ISM","LoRa Transmit Power : 0.1W (up to 20 dBm)","LoRa Receive Sensitivity: -130dBm","Operating Temperature: -10ºC ~ 55ºC","LoRa Number of Channels: Configurable 8 channels","LoRa Security: AES 128","Storage Temperature: -10ºC ~ 60ºC"]},{component:"LoRa P2P水錶：",spec:["Meter can be submerged, protection class IP 68","Max. working pressure: PN10","Meter body: Corrosion proof copper alloy","Diameter：25mm","TransmitionProtocal: LoRa P2P"]},{component:"水閥規格：",spec:["銅材質","電壓：AC110V","常閉式 ( 通電打開 , 斷電關）","流量孔徑：25mm","壓力：0~8kg/cm2","流體溫度：-5～80℃"]}],pictures:["https://picsum.photos/600/300?random=11","https://picsum.photos/600/300?random=10","https://picsum.photos/600/300?random=9","https://picsum.photos/600/300?random=12"]},{no:6,scrollNav:!0,groupname:"通訊開發模組",DMdownload:"",productName:"長距離低功耗通訊開發模組",description:"包含水閥、LoRa P2P智能水閥控制器、水錶各一個；施工及周邊耗材另計。",componentList:[{component:"LoRa P2P智能水閥控制器：",spec:["Built-in antenna with IPEX connector","Command set with LoRaWAN chip for easy configuration","LoRa Frequency Band: 920 ~ 925MHz ISM","LoRa Transmit Power : 0.1W (up to 20 dBm)","LoRa Receive Sensitivity: -130dBm","Operating Temperature: -10ºC ~ 55ºC","LoRa Number of Channels: Configurable 8 channels","LoRa Security: AES 128","Storage Temperature: -10ºC ~ 60ºC"]},{component:"LoRa P2P水錶：",spec:["Meter can be submerged, protection class IP 68","Max. working pressure: PN10","Meter body: Corrosion proof copper alloy","Diameter：25mm","TransmitionProtocal: LoRa P2P"]},{component:"水閥規格：",spec:["銅材質","電壓：AC110V","常閉式 ( 通電打開 , 斷電關）","流量孔徑：25mm","壓力：0~8kg/cm2","流體溫度：-5～80℃"]}],pictures:["https://picsum.photos/600/300?random=19","https://picsum.photos/600/300?random=10","https://picsum.photos/600/300?random=9","https://picsum.photos/600/300?random=12"]},{no:7,scrollNav:!1,DMdownload:"",productName:"穿戴式裝置感應器",description:"LoRa或NB通訊模、BLE藍芽通訊、GPS衛星定位、3軸加速器、溫濕度傳感器。",componentList:[{component:"LoRa P2P智能水閥控制器：",spec:["Built-in antenna with IPEX connector","Command set with LoRaWAN chip for easy configuration","LoRa Frequency Band: 920 ~ 925MHz ISM","LoRa Transmit Power : 0.1W (up to 20 dBm)","LoRa Receive Sensitivity: -130dBm","Operating Temperature: -10ºC ~ 55ºC","LoRa Number of Channels: Configurable 8 channels","LoRa Security: AES 128","Storage Temperature: -10ºC ~ 60ºC"]},{component:"LoRa P2P水錶：",spec:["Meter can be submerged, protection class IP 68","Max. working pressure: PN10","Meter body: Corrosion proof copper alloy","Diameter：25mm","TransmitionProtocal: LoRa P2P"]},{component:"水閥規格：",spec:["銅材質","電壓：AC110V","常閉式 ( 通電打開 , 斷電關）","流量孔徑：25mm","壓力：0~8kg/cm2","流體溫度：-5～80℃"]}],pictures:["https://picsum.photos/600/300?random=21","https://picsum.photos/600/300?random=10","https://picsum.photos/600/300?random=9","https://picsum.photos/600/300?random=12"]},{no:8,scrollNav:!0,groupname:"數據收集與分析平台",DMdownload:"",productName:"雲端智慧校園物聯網數據收集與分析平台",description:"一式帳號密碼，使用一年。",componentList:[{component:"",spec:["提供帳號密碼使用，登入後自動顯示學校校園地","每一個使用者帳戶可進行電子郵件修改、密碼修改","可編輯感應器的場域、子場域、所屬的MacAddress、名稱","可對每一個場域與子場域進行檢視、建立、編輯","可替每一場域建立多個子場域","可在校園地圖上拖曳圖標，標記感應器所在位置","可結合校園地圖顯示感應器位置、使用狀況、歷史軌跡","可使用報表數據瀏覽感應器歷史資料","報表數據可統計感應器每一小時之使用狀況","可於校園地圖上動態顯示 GPS 感應器的移動路線","可用圖表顯示感應器的即時與歷史使用電量資訊","具備安全認證存取功能的API, 供 APP 或網頁程式讀取感應器數據","使用 API 讀取數據時, 可以根據 MACaddress 以及時間或時段取得數據"]}],pictures:["https://picsum.photos/600/300?random=16","https://picsum.photos/600/300?random=10","https://picsum.photos/600/300?random=9","https://picsum.photos/600/300?random=12"]},{no:9,scrollNav:!1,DMdownload:"",productName:"物聯網雲端農業數據收集與分析平台",description:"一式帳號密碼，使用一年。",componentList:[{component:"",spec:["提供帳號密碼使用。登入後顯示場域即時狀態有無異常。","使用者帳戶密碼可進行修改，亦可綁定信箱用於異常發生之通知。","可建立場域及場域所屬感應器，感應器包含溫度濕度光照風速等近40種。","可編輯場域的MacAddress、名稱。","可編輯場域所屬感應器的名稱、channel。","可對各場域的數據進行即時監控、長期數值檢視。","各場域或整體帳號可連結信箱以及Line並於數據異常時發出通知，Line通知為群組通知，單一場域可同時通知群組內數人。","可對不同場域、不同種類的感應器並依挑選時間進行交叉混合比較。","可建立多種控制器如水閥、風扇、電燈並提供三類控制方式，包含手動控制、定時控制、邏輯控制。","手動控制為即時控制，下完開關指令後控制器將立即開啟並依設定時間自動關閉，亦可再開啟後隨時中斷。","定時控制為週期控制，可設定每日或一週數日的某一時間開啟，並依設定時間自動關閉。","控制器連結場域數項感應器後可使用邏輯控制，設定各類數值臨界值的規則來開啟控制器，如土壤溫度>30且濕度<50或光照>2K時開啟30秒。","可建立農業日誌，紀錄各類澆水、施肥、定植等工作事項，並配合上傳照片影片等完整記錄場域狀況，也可在建立完成後重新編輯查看刪除。","農業日誌提供匯出功能，可挑選時段將所有日誌下載為excel方便使用。"]}],pictures:["https://picsum.photos/600/300?random=17","https://picsum.photos/600/300?random=10","https://picsum.photos/600/300?random=9","https://picsum.photos/600/300?random=12"]}]}},components:{Banner:m,bar:L,products:E,Footer:T["a"]},mounted:function(){window.addEventListener("scroll",this.onScroll,!1)},destroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){var t=document.querySelectorAll(".scrollNav"),o=[];t.forEach((function(t){o.push(t.offsetTop-179)}));for(var e=document.documentElement.scrollTop||document.body.scrollTop,n=0,a=0;a<o.length;a+=1)e>=o[a]&&(n=a);this.active=n},scrollTo:function(t){var o=document.querySelectorAll(".scrollNav")[t].offsetTop-179,e=document.documentElement.scrollTop||document.body.scrollTop,n=50;function a(){e<o&&(o-e>=n?e+=n:e=o,document.body.scrollTop=e,document.documentElement.scrollTop=e,requestAnimationFrame(a))}function r(){e>o&&(e-o>=n?e-=n:e=o,document.body.scrollTop=e,document.documentElement.scrollTop=e,requestAnimationFrame(r))}e>o?r():a()}}},I=_,W=Object(p["a"])(I,n,a,!1,null,"f21d7166",null);o["default"]=W.exports},e7d0:function(t,o,e){"use strict";var n=e("4a5a"),a=e.n(n);a.a},efb5:function(t,o,e){},f283:function(t,o,e){"use strict";var n=e("4f6b"),a=e.n(n);a.a}}]);
//# sourceMappingURL=chunk-74fd3dce.9d6700c0.js.map