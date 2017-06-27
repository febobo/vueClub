let baseUrl = './public/images'
let navData = [{
    id: "fePortals",
    weight: 2,
    name: "\u524d\u7aef\u95e8\u6237",
    list: [{
        id: "W3cplus",
        name: "W3cplus",
        logo: {
            url: baseUrl + "/w3cplus-favicon.png",
            bgc: "#00a3cf",
            width: 210,
            height: 210
        },
        url: "http://www.w3cplus.com/",
        desc: "W3cplus\u662f\u4e00\u4e2a\u81f4\u529b\u4e8e\u63a8\u5e7f\u56fd\u5185\u524d\u7aef\u884c\u4e1a\u7684\u6280\u672f\u535a\u5ba2"
    }, {
        id: "HTML5DreamWorks",
        name: "HTML5\u68a6\u5de5\u5382",
        logo: {
            url: baseUrl + "/html5dw-favicon.png",
            width: 313,
            height: 313
        },
        url: "http://www.html5dw.com/",
        desc: "HTML5\u68a6\u5de5\u573a \u52a9\u63a8HTML5\u53d1\u5c55"
    }, {
        id: "w3ctech",
        name: "w3ctech",
        logo: {
            url: baseUrl + "/w3ctech-favicon.jpg",
            width: 313,
            height: 313
        },
        url: "https://w3ctech.com/",
        desc: "\u4e2d\u56fd\u6700\u5927\u7684\u524d\u7aef\u6280\u672f\u793e\u533a"
    }, {
        id: "daqianduan",
        name: "\u5927\u524d\u7aef",
        logo: {
            url: baseUrl + "/daqianduan-favicon.png"
        },
        url: "http://www.daqianduan.com/",
        desc: "\u65e8\u5728\u66f4\u5b8c\u5584\u7684\u4e3a\u5404\u4f4d\u524d\u7aef\u7231\u597d\u8005\u63d0\u4f9b\u9605\u8bfb\u548c\u81ea\u6211\u63d0\u5347\u670d\u52a1\u3002"
    }]
}, {
    id: "blog",
    weight: 0,
    name: "\u56e2\u961f\u7ec4\u7ec7",
    list: [{
        id: "alloyteam",
        name: "\u817e\u8baf AlloyTeam \u56e2\u961f",
        logo: {
            url: baseUrl + "/alloyteam-favicon.jpg",
            bgc: "rgb(169, 213, 244)",
            width: 210,
            height: 210
        },
        url: "http://www.alloyteam.com/",
        desc: "\u817e\u8bafWeb\u524d\u7aef\u56e2\u961f\uff0c\u4ee3\u8868\u4f5c\u54c1WebQQ\uff0c\u81f4\u529b\u4e8e\u524d\u7aef\u6280\u672f\u7684\u7814\u7a76"
    }, {
        id: "isux",
        name: "ISUX",
        logo: {
            bgc: "rgb(0, 0, 0)",
            url: baseUrl + "/isux-favicon.jpg",
            width: 176,
            height: 50
        },
        url: "https://isux.tencent.com/",
        desc: "\u817e\u8baf\u793e\u4ea4\u7528\u6237\u4f53\u9a8c\u8bbe\u8ba1\uff0c\u7b80\u79f0ISUX\uff0c\u817e\u8baf\u8bbe\u8ba1\u56e2\u961f\u7f51\u7ad9"
    }, {
        bid: "fex",
        name: "FEX",
        logo: {
            url: baseUrl + "/fex-favicon.png",
            bgc: "rgb(252,252,252)",
            width: 91,
            height: 50
        },
        url: "http://fex.baidu.com/",
        desc: "\u767e\u5ea6Web\u524d\u7aef\u7814\u53d1\u90e8\u51fa\u54c1"
    }, {
        bid: "taobaofed",
        name: "\u6dd8\u5b9d\u524d\u7aef\u56e2\u961f\uff08FED\uff09",
        logo: {
            url: baseUrl + "/fed-favicon.png",
            width: 400,
            height: 400
        },
        url: "http://taobaofed.org/",
        desc: "\u7528\u6280\u672f\u4e3a\u4f53\u9a8c\u63d0\u4f9b\u65e0\u9650\u53ef\u80fd"
    }, {
        id: "aotu",
        name: "\u51f9\u51f8\u5b9e\u9a8c\u5ba4",
        logo: {
            url: baseUrl + "/aotu-favicon.png",
            bgc: "rgb(97, 144, 232)",
            width: 200,
            height: 200
        },
        url: "https://aotu.io/",
        desc: "\u4eac\u4e1c\u7528\u6237\u4f53\u9a8c\u8bbe\u8ba1\u90e8\u51fa\u54c1"
    }, {
        id: "75team",
        name: "\u5947\u821e\u56e2",
        logo: {
            url: baseUrl + "/75team-favicon.png",
            bgc: "rgb(32,32,32)",
            width: 280,
            height: 280
        },
        url: "https://75team.com/",
        desc: "\u5947\u864e360\u65d7\u4e0b\u524d\u7aef\u5f00\u53d1\u56e2\u961f\u51fa\u54c1"
    }, {
        id: "aliued",
        name: "\u963f\u91cc\u5df4\u5df4\u56fd\u9645UED\u56e2\u961f",
        logo: {
            url: baseUrl + "/aliued-favicon.ico",
            bgc: "rgb(33,32,65)",
            width: 240,
            height: 154
        },
        url: "http://www.aliued.com/",
        desc: "\u5728\u66f4\u65b0\u7684\u5c4f\u5e55\u91cc\u521b\u9020\u51fa\u66f4\u597d\u7684\u4ea7\u54c1\u548c\u66f4\u4f18\u7684\u4f53\u9a8c"
    }, {
        bid: "efe",
        name: "EFE",
        logo: {
            url: baseUrl + "/efe-favicon.png",
            bgc: "rgb(221,238,250)",
            width: 142,
            height: 398
        },
        url: "http://efe.baidu.com/",
        desc: "\u7531\u767e\u5ea6\u591a\u4e2a\u9075\u5faa\u7edf\u4e00\u6280\u672f\u4f53\u7cfb\u7684\u524d\u7aef\u56e2\u961f\u6240\u7ec4\u6210"
    }]
}, {
    id: "wechatSubscription",
    weight: 14,
    name: "\u524d\u7aef\u516c\u4f17\u53f7",
    list: [{
        id: "AlloyTeam",
        name: "\u817e\u8bafAlloyTeam",
        logo: "",
        qrcode: baseUrl + "/alloyteam-qrcode.png"
    }, {
        id: "75team",
        name: "\u5947\u821e\u5468\u520a",
        logo: "",
        qrcode: baseUrl + "/75team-qrcode.png"
    }, {
        id: "FrontDev",
        name: "\u524d\u7aef\u5927\u5168",
        logo: "",
        qrcode: baseUrl + "/front-dev-qrcode.png"
    }, {
        id: "FrontendMagazine",
        name: "\u524d\u7aef\u5916\u520a\u8bc4\u8bba",
        logo: "",
        qrcode: baseUrl + "/front-end-magazine-qrcode.png"
    }, {
        id: "FeZaoDuKe",
        name: "\u524d\u7aef\u65e9\u8bfb\u8bfe",
        logo: "",
        qrcode: baseUrl + "/fe-zaoduke-qrcode.png"
    }, {
        id: "frontshow",
        name: "\u524d\u7aef\u4e4b\u5dc5",
        logo: "",
        qrcode: baseUrl + "/front-show.png"
    }, {
        id: "AOTULabs",
        name: "\u51f9\u51f8\u5b9e\u9a8c\u5ba4",
        log: "",
        qrcode: baseUrl + "/o2-qrcode.png"
    }, {
        id: "Node-Subway",
        name: "Node\u5730\u4e0b\u94c1",
        logo: "",
        qrcode: baseUrl + "/node-subway-qrcode.png"
    }, {
        id: "baidu-front-end",
        name: "FEX",
        qrcode: baseUrl + "/fex-qrcode.png"
    }, {
        id: "W3cplus",
        name: "W3cplus",
        logo: "",
        qrcode: baseUrl + "/w3cplus-qrcode.png"
    }, {
        id: "w3ctech",
        name: "w3ctech",
        logo: "",
        qrcode: baseUrl + "/w3ctech-qrcode.png"
    }]
}, {
    id: "css",
    name: "CSS\u76f8\u5173",
    weight: 6,
    list: [{
        id: "csstricks",
        name: "CSS-Tricks",
        logo: {
            url: baseUrl + "/css-tricks-favicon.png",
            bgc: "rgb(215, 136, 42)",
            width: 367,
            height: 137
        },
        url: "https://css-tricks.com/",
        desc: "\u4e00\u4e2a\u5173\u4e8e\u8fd0\u7528CSS\u6280\u672f\u8fdb\u884c\u7f51\u7edc\u5f00\u53d1\u548c\u8bbe\u8ba1\u7684\u5c0f\u6280\u5de7\u7684\u4ea4\u6d41\u7f51\u7ad9"
    }, {
        id: "css-wizardry",
        name: "Css Wizardry",
        logo: {
            url: baseUrl + "/css-wizardry-favicon.png"
        },
        url: "http://csswizardry.com/",
        desc: "Front-end Architecture and Performance Engineering"
    }, {
        id: "sass",
        name: "Sass",
        logo: {
            url: baseUrl + "/sass-favicon.png",
            bgc: "rgb(204, 102, 153)",
            width: 323,
            height: 156
        },
        url: "http://sass.bootcss.com/docs/sass-reference/",
        desc: "Sass \u662f\u6210\u719f\u3001\u7a33\u5b9a\u3001\u5f3a\u5927\u7684 CSS \u6269\u5c55\u8bed\u8a00"
    }, {
        id: "less",
        name: "Less",
        logo: {
            url: baseUrl + "/less-favicon.png"
        },
        url: "http://less.bootcss.com/",
        desc: "\u4e00\u79cd\u5c06css\u8d4b\u4e88\u4e86\u52a8\u6001\u8bed\u8a00\u7279\u6027\u7684\u52a8\u6001\u6837\u5f0f\u8bed\u8a00"
    }, {
        id: "stylus",
        name: "Stylus",
        logo: {
            url: baseUrl + "/stylus-favicon.png",
            width: 393,
            height: 241
        },
        url: "http://stylus-lang.com/",
        desc: "EXPRESSIVE, DYNAMIC, ROBUST CSS"
    }]
}, {
    id: "framework",
    name: "\u6846\u67b6\u7c7b\u5e93",
    weight: 3,
    list: [{
        id: "react",
        name: "React",
        logo: {
            url: baseUrl + "/react-favicon.png",
            bgc: "rgb(42, 44, 46)",
            width: 259,
            height: 194
        },
        url: "https://facebook.github.io/react/",
        desc: "\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684Javscript\u5e93"
    }, {
        id: "vue",
        name: "Vue",
        logo: {
            url: baseUrl + "/vue-favicon.png",
            bgc: "white",
            width: 287,
            height: 175
        },
        url: "https://cn.vuejs.org/",
        desc: "\u6784\u5efa\u6570\u636e\u9a71\u52a8\u7684web\u754c\u9762\u7684\u6e10\u8fdb\u5f0f\u6846\u67b6"
    }, {
        id: "jQuery",
        name: "jQuery",
        logo: {
            url: baseUrl + "/jquery.png",
            bgc: "white",
            width: 453,
            height: 111
        },
        url: "http://www.jquery123.com/",
        desc: "\u4f18\u79c0\u7684JavaScript\u4ee3\u7801\u5e93"
    }, {
        id: "bootstrap",
        name: "Bootstrap",
        logo: {
            url: baseUrl + "/bootstrap-favicon.png",
            bgc: "rgb(91, 67, 134)",
            width: 512,
            height: 512
        },
        url: "http://www.bootcss.com/",
        desc: "\u57fa\u4e8eHTML/CSS/Javscript\u7684\u524d\u7aef\u6846\u67b6"
    }, {
        id: "reactNative",
        name: "React Native",
        logo: {
            url: baseUrl + "/react-native.png",
            bgc: "rgb(34, 34, 34)",
            width: 286,
            height: 176
        },
        url: "https://reactnative.cn/",
        desc: "\u4f7f\u7528React\u6784\u5efa\u539f\u751fapp\u7684\u6846\u67b6"
    }, {
        id: "rxjs",
        name: "RxJs",
        logo: {
            url: baseUrl + "/rxjs-favicon.png",
            bgc: "rgb(246, 247, 249)",
            width: 286,
            height: 176
        },
        url: "http://reactivex.io/rxjs/",
        desc: "\u63d0\u4f9b\u5f3a\u5927\u7684\u6570\u636e\u6d41\u7ec4\u5408\u548c\u63a7\u5236\u80fd\u529b\u7684Reactive\u7f16\u7a0b\u5e93"
    }]
}, {
    id: "buildTools",
    name: "\u6784\u5efa\u5de5\u5177",
    weight: 10,
    list: [{
        id: "webpack",
        name: "Webpack",
        logo: {
            url: baseUrl + "/webpack-favicon.png",
            bgc: "white",
            width: 225,
            height: 225
        },
        url: "https://webpack.js.org/",
        desc: "\u4ee3\u7801\u6a21\u5757\u5316\u6784\u5efa\u6253\u5305\u5de5\u5177"
    }, {
        id: "gulp",
        name: "Gulp",
        logo: {
            url: baseUrl + "/gulp-favicon.png",
            bgc: "rgb(207, 70, 70)",
            width: 318,
            height: 159
        },
        url: "http://www.gulpjs.com.cn/",
        desc: "\u57fa\u4e8e\u6d41\u7684\u81ea\u52a8\u5316\u6784\u5efa\u5de5\u5177"
    }, {
        id: "browserify",
        name: "Browserify",
        logo: {
            url: baseUrl + "/browserify.png",
            bgc: "rgb(240, 240, 240)",
            width: 280,
            height: 180
        },
        url: "http://browserify.org/",
        desc: "\u9075\u5faacommonjs\u89c4\u8303\u7684\u6a21\u5757\u5316\u5de5\u5177"
    }, {
        id: "yeoman",
        name: "Yeoman",
        logo: {
            url: baseUrl + "/yeoman-favicon.png",
            bgc: "rgb(90, 173, 183)",
            width: 298,
            height: 212
        },
        url: "http://yeoman.io/",
        desc: "\u4e00\u5957\u7528\u4e8e\u81ea\u52a8\u5316\u5f00\u53d1\u5de5\u4f5c\u6d41\u7a0b\u7684\u5de5\u5177\u3002"
    }, {
        id: "grunt",
        name: "Grunt",
        logo: {
            url: baseUrl + "/grunt-favicon.png",
            bgc: "white",
            width: 600,
            height: 318
        },
        url: "http://www.gruntjs.net",
        desc: "JavaScript \u4e16\u754c\u7684\u6784\u5efa\u5de5\u5177"
    }, {
        id: "babel",
        name: "Babel",
        logo: {
            url: baseUrl + "/babel-favicon.png",
            bgc: "rgb(245, 218, 85)",
            width: 270,
            height: 187
        },
        url: "https://babeljs.io/",
        desc: "\u4f7f\u7528\u6700\u65b0\u7684\u89c4\u8303\u6765\u7f16\u5199js"
    }, {
        id: "fis3",
        name: "FIS3",
        logo: {
            url: baseUrl + "/fis-favicon.png",
            bgc: "#3360A3",
            width: 332,
            height: 118
        },
        url: "https://fex-team.github.io/fis3/",
        desc: "FIS3 , \u4e3a\u4f60\u5b9a\u5236\u7684\u524d\u7aef\u5de5\u7a0b\u6784\u5efa\u5de5\u5177"
    }]
}, {
    id: "community",
    name: "\u5f00\u53d1\u793e\u533a",
    weight: 1,
    list: [{
        id: "gold",
        name: "\u6398\u91d1",
        logo: {
            url: baseUrl + "/gold-favicon.png",
            width: 98,
            height: 38
        },
        url: "https://juejin.im/",
        desc: "\u53ea\u6709\u9ad8\u624b\u5206\u4eab\u7684\u4e2d\u6587\u6280\u672f\u793e\u533a"
    }, {
        id: "stackoverflow",
        name: "Stack Overflow",
        logo: {
            url: baseUrl + "/stackoverflow-favicon.png",
            bgc: "white",
            width: 240,
            height: 180
        },
        url: "http://stackoverflow.com/",
        desc: "\u7f16\u7a0b\u76f8\u5173\u7684IT\u6280\u672f\u95ee\u7b54\u7f51\u7ad9"
    }, {
        id: "github",
        name: "GitHub",
        logo: {
            url: baseUrl + "/github-favicon.png",
            bgc: "white",
            width: 310,
            height: 163
        },
        url: "https://github.com/",
        desc: "\u9762\u5411\u5f00\u6e90\u53ca\u79c1\u6709\u8f6f\u4ef6\u9879\u76ee\u7684git\u6258\u7ba1\u5e73\u53f0"
    }, {
        id: "segmentfault",
        name: "SegmentFault",
        logo: {
            url: baseUrl + "/segmentfault-favicon.png",
            bgc: "rgb(34,34,34)",
            width: 385,
            height: 131
        },
        url: "https://segmentfault.com/",
        desc: "\u4e00\u4e2a\u4e13\u6ce8\u4e8e\u89e3\u51b3\u7f16\u7a0b\u95ee\u9898\uff0c\u63d0\u9ad8\u5f00\u53d1\u6280\u80fd\u7684\u793e\u533a\u3002"
    }, {
        id: "v2ex",
        name: "V2EX",
        logo: {
            url: baseUrl + "/v2ex-favicon.png",
            width: 274,
            height: 195
        },
        url: "https://www.v2ex.com/",
        desc: "\u4e00\u4e2a\u5173\u4e8e\u5206\u4eab\u548c\u63a2\u7d22\u7684\u5730\u65b9\u3002"
    }, {
        id: "smashingmagazine",
        name: "Smashingmagazine",
        logo: {
            url: baseUrl + "/smashingmagazine-favicon.png",
            bgc: "rgb(230,230,230)",
            width: 300,
            height: 78
        },
        url: "https://www.smashingmagazine.com/",
        desc: "\u4e00\u4e2aweb\u6280\u672f\u7c7b\u7684\u535a\u5ba2\u6742\u5fd7\u7ad9\u70b9"
    }, {
        id: "cnode",
        name: "CNode",
        logo: {
            url: baseUrl + "/cnodejs-favicon.png",
            bgc: "rgb(68, 68, 68)",
            width: 300,
            height: 70
        },
        url: "https://cnodejs.org/",
        desc: "Node.js\u4e13\u4e1a\u4e2d\u6587\u793e\u533a"
    }, {
        id: "jstips",
        name: "JS Tips",
        logo: {
            url: baseUrl + "/jstips-favicon.png",
            width: 900,
            height: 394
        },
        url: "http://www.jstips.co/",
        desc: "\u6bcf\u5929\u63a8\u51fa\u4e00\u4e2aJS\u6280\u5de7\u7684\u7f51\u7ad9"
    }]
}, {
    id: "gameFramework",
    name: "\u6e38\u620f\u6846\u67b6",
    weight: 5,
    list: [{
        id: "phaserjs",
        name: "PhaserJS",
        logo: {
            url: baseUrl + "/phaserjs.png",
            bgc: "rgb(33,33,33)",
            width: 57,
            height: 72
        },
        url: "http://phaser.io/",
        desc: "PC\u7aef\u548c\u79fb\u52a8\u7aefHTML5\u6e38\u620f\u6846\u67b6\u3002"
    }, {
        id: "cocos",
        name: "Cocos2d-x",
        logo: {
            url: baseUrl + "/cocos2dx.png",
            width: 57,
            height: 72
        },
        url: "http://www.cocos.com/",
        desc: "\u4ee5\u5185\u5bb9\u521b\u4f5c\u4e3a\u6838\u5fc3\u7684\u4e00\u4f53\u5316\u6e38\u620f\u5f00\u53d1\u5de5\u5177"
    }, {
        id: "egret",
        name: "\u767d\u9e6d\u5f15\u64ce",
        logo: {
            url: baseUrl + "/egret.png",
            bgc: "rgb(33,33,33)",
            width: 57,
            height: 72
        },
        url: "https://www.egret.com/",
        desc: "\u4e3a\u79fb\u52a8\u9886\u57df\u63d0\u4f9b\u5b8c\u6574\u9ad8\u6548\u7684\u6e38\u620f\u53ca\u5e94\u7528\u89e3\u51b3\u65b9\u6848"
    }]
}, {
    id: "animation",
    name: "\u56fe\u5f62\u52a8\u6548",
    weight: 4,
    list: [{
        id: "d3",
        name: "D3",
        logo: {
            url: baseUrl + "/d3-favicon.png",
            width: 230,
            height: 219
        },
        url: "https://d3js.org/",
        desc: "\u7528\u52a8\u6001\u56fe\u5f62\u663e\u793a\u6570\u636e\u7684JavaScript\u5e93"
    }, {
        id: "threejs",
        name: "Threejs",
        logo: {
            url: baseUrl + "/threejs-favicon.png",
            width: 305,
            height: 165,
            bgc: "rgb(44,150,200)"
        },
        url: "https://threejs.org/",
        desc: "\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u4e2d\u76843D \u5f15\u64ce"
    }, {
        id: "echarts",
        name: "Echarts",
        logo: {
            url: baseUrl + "/echarts-favicon.png",
            width: 400,
            height: 120,
            bgc: "rgb(41,60,85)"
        },
        url: "http://echarts.baidu.com/",
        desc: "\u767e\u5ea6\u5f00\u53d1\u7684\u53ef\u5b9a\u5236\u7684\u6570\u636e\u53ef\u89c6\u5316\u56fe\u8868"
    }, {
        id: "highcharts",
        name: "Highcharts",
        logo: {
            url: baseUrl + "/highcharts-favicon.png",
            width: 425,
            height: 142,
            bgc: "rgb(71,71,92)"
        },
        url: "http://www.highcharts.com/",
        desc: "\u517c\u5bb9 IE6+\u3001\u652f\u6301\u79fb\u52a8\u7aef\u3001\u56fe\u8868\u7c7b\u578b\u4e30\u5bcc\u7684HTML5\u4ea4\u4e92\u6027\u56fe\u8868\u5e93"
    }]
}, {
    id: "designNav",
    name: "\u8bbe\u8ba1\u8d44\u6e90",
    weight: 13,
    list: [{
        id: "uigreat",
        name: "UIGREAT",
        logo: {
            url: baseUrl + "/uigreat-favicon.jpg",
            width: 250,
            height: 50
        },
        url: "http://www.uigreat.com/",
        desc: "\u4f18\u79c0\u8bbe\u8ba1\u5e08\u7684\u8d34\u5fc3\u4f34\u4fa3\u3002"
    }, {
        id: "huaban",
        name: "\u82b1\u74e3",
        logo: {
            url: baseUrl + "/huaban-favicon.png",
            width: 200,
            height: 200
        },
        url: "http://huaban.com/",
        desc: "\u82b1\u74e3\uff0c\u966a\u4f60\u505a\u751f\u6d3b\u7684\u8bbe\u8ba1\u5e08\u3002"
    }, {
        id: "dribbble",
        name: "Dribbble",
        logo: {
            url: baseUrl + "/dribbble-favicon.png",
            bgc: "rgb(49, 49, 49)",
            width: 152,
            height: 38
        },
        url: "https://dribbble.com/",
        desc: "\u8bbe\u8ba1\u4f5c\u54c1\u7684\u4ea4\u6d41\u5e73\u53f0"
    }, {
        id: "behance",
        name: "Behance",
        logo: {
            url: baseUrl + "/behance-favicon.png",
            bgc: "rgb(2, 91, 255)",
            width: 563,
            height: 220
        },
        url: "https://www.behance.net/",
        desc: "\u7cfb\u5217\u8bbe\u8ba1\u4f5c\u54c1\u5f00\u653e\u5e73\u53f0"
    }, {
        id: "pinterest",
        name: "Pinterest",
        logo: {
            url: baseUrl + "/pinterest-favicon.png",
            bgc: "white",
            width: 200,
            height: 220
        },
        url: "https://www.pinterest.com/",
        desc: "\u56fe\u7247\u5206\u4eab\u7c7b\u7684\u793e\u4ea4\u7f51\u7ad9"
    }, {
        id: "zcool",
        name: "\u7ad9\u9177",
        logo: {
            url: baseUrl + "/zcool-favicon.jpg",
            bgc: "rgb(255, 167, 0)",
            width: 121,
            height: 20
        },
        url: "http://www.zcool.com.cn/",
        desc: "\u6253\u5f00\u7ad9\u9177,\u53d1\u73b0\u66f4\u597d\u7684\u8bbe\u8ba1!"
    }, {
        id: "fwa",
        name: "FWA",
        logo: {
            url: baseUrl + "/thefwa-favicon.png",
            bgc: "white",
            width: 134,
            height: 40
        },
        url: "https://thefwa.com/",
        desc: "\u4e92\u52a8\u591a\u5a92\u4f53\u7f51\u7ad9\u6536\u5f55\u5e73\u53f0"
    }]
}, {
    id: "ide",
    name: "IDE",
    weight: 8,
    list: [{
        id: "sublime",
        name: "Sublime",
        logo: {
            url: baseUrl + "/sublime-favicon.png",
            width: 281,
            height: 180,
            bgc: "rgb(232,232, 232)"
        },
        url: "https://www.sublimetext.com/",
        desc: "\u8d85\u8f7b\u91cf\u4e14\u5f3a\u5927\u7684\u8de8\u5e73\u53f0\u6587\u672c\u7f16\u8f91\u5668\uff0c\u62e5\u6709\u6d77\u91cf\u63d2\u4ef6"
    }, {
        id: "webstorm",
        name: "WebStorm",
        logo: {
            url: baseUrl + "/webstorm-favicon.png",
            width: 225,
            height: 225
        },
        url: "https://www.jetbrains.com/webstorm/",
        desc: "\u8fd9\u624d\u53eb\u524d\u7aefIDE"
    }]
}, {
    id: "debugTools",
    name: "\u8c03\u8bd5\u5de5\u5177",
    weight: 9,
    list: [{
        id: "fiddler",
        name: "Fiddler",
        logo: {
            url: baseUrl + "/fiddler-favicon.png",
            width: 256,
            height: 256
        },
        url: "http://www.telerik.com/fiddler",
        desc: "\u524d\u7aef\u5fc5\u5907\u6293\u5305\u8c03\u8bd5\u5de5\u5177\uff0c\u6ca1\u6709\u4e4b\u4e00"
    }, {
        id: "charles",
        name: "Charles",
        logo: {
            url: baseUrl + "/charles-favicon.png",
            width: 256,
            height: 256
        },
        url: "https://www.charlesproxy.com/",
        desc: "\u597d\u7528\u7684\u6293\u5305\u8c03\u8bd5\u5de5\u5177\uff0c\u53ef\u5728mac\u4e0a\u4f7f\u7528"
    }]
}, {
    id: "fontIcon",
    name: "\u5b57\u4f53\u56fe\u6807",
    weight: 12,
    list: [{
        id: "fontAwesome",
        name: "Font Awesome",
        logo: {
            url: baseUrl + "/font-awesome-favicon.png"
        },
        url: "http://www.bootcss.com/p/font-awesome/",
        desc: "\u5b8c\u7f8e\u7684\u56fe\u6807\u5b57\u4f53 \u53ea\u4e3aBootstrap\u8bbe\u8ba1"
    }, {
        id: "iconfont",
        name: "Iconfont",
        logo: {
            bgc: "rgb(8, 8, 20)",
            url: baseUrl + "/iconfont-favicon.jpg"
        },
        url: "http://iconfont.cn/",
        desc: "\u963f\u91cc\u5df4\u5df4\u77e2\u91cf\u56fe\u6807\u5e93"
    }, {
        id: "icomoon",
        name: "IcoMoon",
        logo: {
            width: 359,
            height: 140,
            bgc: "rgb(27, 27, 27)",
            url: baseUrl + "/icomoon-favicon.png"
        },
        url: "https://icomoon.io/",
        desc: "WEB\u5b57\u4f53\u56fe\u6807\u5236\u9020\u5668"
    }]
}, {
    id: "excellentFrontEndEngineer",
    name: "\u524d\u7aef\u5927\u725b",
    weight: 15,
    list: [{
        id: "kinvix",
        name: "TAT.Kinvix",
        logo: {
            url: baseUrl + "/kinvix.png"
        },
        url: "https://github.com/kinvix",
        desc: "\u817e\u8bafAlloyTeam\u8d1f\u8d23\u4eba\uff1bHTML5\u68a6\u5de5\u573a\u6df1\u5733\u8d1f\u8d23\u4eba\uff1b\u817e\u8bafWebQQ\u67b6\u6784\u5e08\uff1b"
    }, {
        id: "dntzhang",
        name: "dntzhang",
        logo: {
            url: baseUrl + "/dntzhang.jpeg"
        },
        url: "https://github.com/dntzhang",
        desc: "\u5728\u817e\u8baf\u516c\u53f8\u4e3b\u8981\u8d1f\u8d23\u548c\u53c2\u4e0e\u65e5\u8ff9\u3001\u5174\u8da3\u90e8\u843d\u7b49\u9879\u76ee\uff0c\u4e13\u6ce8\u5f00\u6e90\uff0c\u4e50\u4e8e\u5206\u4eab\uff0c\u4e3b\u5bfc\u4f17\u591aAlloyTeam\u5f00\u6e90\u9879\u76ee\uff0cAlloyFinger\u3001AlloyPaper\u3001AlloyTouch\u4f5c\u8005"
    }, {
        id: "tj",
        name: "TJ Holowaychuk",
        logo: {
            url: baseUrl + "/tj.png"
        },
        url: "https://github.com/tj",
        desc: "\u7a0b\u5e8f\u5458\u517c\u827a\u672f\u5bb6\uff0cKoa\u3001Co\u3001Express\u3001jade\u3001mocha\u3001node-canvas\u3001commander.js\u7b49\u77e5\u540d\u5f00\u6e90\u9879\u76ee\u7684\u521b\u5efa\u548c\u8d21\u732e\u8005\u3002"
    }, {
        id: "yyx990803",
        name: "\u5c24\u96e8\u6eaa",
        logo: {
            url: baseUrl + "/yyx990803.png"
        },
        url: "https://github.com/yyx990803",
        desc: "Vue.js\u4f5c\u8005"
    }, {
        id: "lifesinger",
        name: "\u7389\u4f2f",
        logo: {
            url: baseUrl + "/lifesinger.png"
        },
        url: "https://github.com/lifesinger",
        desc: "seajs\u3001kiss\u4f5c\u8005\uff0c\u5c31\u804c\u4e8e\u8682\u8681\u91d1\u670d\u3002"
    }, {
        id: "winter",
        name: "winter",
        logo: {
            url: baseUrl + "/winter.png"
        },
        url: "https://github.com/wintercn",
        desc: "\u963f\u91cc\u5df4\u5df4\u9ad8\u7ea7\u6280\u672f\u4e13\u5bb6\uff0c\u77e5\u4e4e\u5927V"
    }, {
        id: "byvod",
        name: "BYVod",
        logo: {
            url: baseUrl + "/byvoid.png"
        },
        url: "https://github.com/BYVoid",
        desc: "\u300aNode.js \u5f00\u53d1\u6307\u5357\u300b\u4f5c\u8005\uff0c\u5c31\u804c\u4e8eFacebook\u3002"
    }]
}, {
    id: "bookShare",
    name: "\u4e66\u7c4d\u63a8\u8350",
    weight: 16,
    list: [{
        id: "definitiveGuide",
        name: "JavaScript\u6743\u5a01\u6307\u5357",
        logo: {
            width: 359,
            height: 140,
            url: baseUrl + "/define-guild.jpg"
        },
        url: "https://book.douban.com/subject/6854549/",
        desc: "\u5b66\u4e60 JavaScript \u7684\u5fc5\u5907\u4e66\u520a"
    }, {
        id: "professionalJavascript",
        name: "JavaScript\u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1",
        logo: {
            width: 359,
            height: 140,
            url: baseUrl + "/professional-javascript.jpg"
        },
        url: "https://book.douban.com/subject/10546125//",
        desc: "\u7ea2\u5b9d\u4e66"
    }, {
        id: "js-design-pattern",
        name: "JavaScript\u8bbe\u8ba1\u6a21\u5f0f\u4e0e\u5f00\u53d1\u5b9e\u8df5",
        logo: {
            width: 359,
            height: 140,
            url: baseUrl + "/js-design-pattern.jpg"
        },
        url: "https://book.douban.com/subject/26382780/",
        desc: "\u672c\u4e66\u5c06\u6559\u4f1a\u4f60\u5982\u4f55\u628a\u7ecf\u5178\u7684\u8bbe\u8ba1\u6a21\u5f0f\u5e94\u7528\u5230JavaScript\u8bed\u8a00\u4e2d"
    }, {
        id: "httpguide",
        name: "HTTP\u6743\u5a01\u6307\u5357",
        logo: {
            width: 359,
            height: 140,
            url: baseUrl + "/http-guide.jpg"
        },
        url: "https://book.douban.com/subject/10746113/",
        desc: "\u6bd4\u8f83\u5c11\u89c1\u7684\u5168\u9762\u4ecb\u7ecdHTTP\u534f\u8bae\u7684\u4e66\u3002"
    }]
}, {
    id: "inlineTools",
    name: "\u5728\u7ebf\u5de5\u5177",
    weight: 11,
    list: [{
        id: "codepen",
        name: "CodePen",
        logo: {
            width: 359,
            height: 140,
            url: baseUrl + "/codepen.png"
        },
        url: "http://codepen.io/",
        desc: "\u5728\u7ebf\u4ee3\u7801\u6d4b\u8bd5\u5de5\u5177"
    }, {
        id: "caniuse",
        name: "Can I use",
        logo: {
            width: 359,
            height: 140,
            url: baseUrl + "/caniuse.png"
        },
        url: "http://caniuse.com/",
        desc: "Web\u524d\u7aef\u517c\u5bb9\u6027\u5217\u8868"
    }]
}, {
    id: "nodejs",
    name: "Node.js\u76f8\u5173",
    weight: 7,
    list: [{
        id: "koa",
        name: "Koa",
        logo: {
            url: baseUrl + "/koa.png",
            width: 286,
            height: 176
        },
        url: "http://koa.bootcss.com/",
        desc: "\u57fa\u4e8eNodejs\u7684\u65b0\u4e00\u4ee3\u6846\u67b6\u3002"
    }, {
        id: "express",
        name: "Express",
        logo: {
            url: baseUrl + "/express.png",
            bgc: "rgb(254, 252, 254)",
            width: 498,
            height: 148
        },
        url: "http://www.expressjs.com.cn/",
        desc: "\u57fa\u4e8e Node.js \u5e73\u53f0\uff0c\u5feb\u901f\u3001\u5f00\u653e\u3001\u6781\u7b80\u7684 web \u5f00\u53d1\u6846\u67b6\u3002"
    }]
}, {
    id: "front-end-conf",
    name: "\u524d\u7aef\u5927\u4f1a",
    weight: 6,
    list: [{
        id: "ac",
        name: "\u817e\u8baf Web \u524d\u7aef\u5927\u4f1a",
        logo: {
            url: baseUrl + "/qqlog.png",
            width: 286,
            height: 176
        },
        url: "https://tfc.tencent.com/",
        desc: "\u817e\u8baf\u4e3b\u529e\uff0c\u529b\u4e89\u4e3a\u53c2\u4f1a\u8005\u5e26\u6765\u6700\u5177\u5b9e\u8df5\u4ef7\u503c\u3001\u6700\u63a5\u5730\u6c14\u7684Web\u524d\u7aef\u5f00\u53d1\u7ecf\u9a8c\u3002"
    }, {
        id: "ac",
        name: "AlloyTeam \u524d\u7aef\u6280\u672f\u5927\u4f1a",
        logo: {
            url: baseUrl + "/alloyteam-favicon.jpg",
            width: 286,
            height: 176
        },
        url: "http://ac.alloyteam.com/",
        desc: "\u817e\u8baf\u524d\u7aef\u56e2\u961fAlloyTeam\u4e3b\u529e\uff0c\u65e8\u5728\u5206\u4eab\u56e2\u961f\u5728\u6280\u672f\u7814\u7a76\u3001\u4ea7\u54c1\u8001\u53d1\u3001\u5f00\u6e90\u9879\u76ee\u7684\u7ecf\u9a8c\u3002"
    }, {
        id: "iweb",
        name: "iWeb\u5cf0\u4f1a",
        logo: {
            url: baseUrl + "/iweb.png",
            bgc: "rgb(254, 252, 254)",
            width: 498,
            height: 148
        },
        url: "http://2016.html5dw.com/",
        desc: "\u4e2d\u56fd\u6700\u5927\u7684HTML5\u793e\u533a\u2014\u2014HTML5\u68a6\u5de5\u573a\u4e3b\u529e\uff0c\u662f\u4e2d\u56fd\u6700\u5927\u3001\u6700\u63a5\u5730\u6c14\u3001\u6700\u6709\u8bda\u610f\u3001\u6700\u5177\u5f71\u54cd\u529b\u7684HTML5\u884c\u4e1a\u5e74\u5ea6\u76db\u4f1a"
    }, {
        id: "d2",
        name: "D2\u524d\u7aef\u6280\u672f\u8bba\u575b",
        logo: {
            url: baseUrl + "/d2.png",
            bgc: "rgb(254, 252, 254)",
            width: 498,
            height: 148
        },
        url: "http://d2forum.alibaba-inc.com/",
        desc: "\u963f\u91cc\u5df4\u5df4\u4e3e\u529e\uff0c\u5206\u4eab\u6280\u672f\u7684\u4e50\u8da3\uff0c\u63a2\u8ba8\u884c\u4e1a\u7684\u53d1\u5c55\u3002"
    }, {
        id: "css-conf",
        name: "\u4e2d\u56fdCSS\u5f00\u53d1\u8005\u5927\u4f1a",
        logo: {
            url: baseUrl + "/css-conf.png",
            bgc: "rgb(254, 252, 254)",
            width: 498,
            height: 148
        },
        url: "https://css.w3ctech.com/",
        desc: "\u63d0\u9ad8css\u5f00\u53d1\u59ff\u52bf\u7684\u5927\u4f1a\u3002"
    }, {
        id: "feday",
        name: "\u524d\u7aef\u5f00\u53d1\u8005\u5927\u4f1a",
        logo: {
            url: baseUrl + "/feday.png",
            bgc: "rgb(254, 252, 254)",
            width: 498,
            height: 148
        },
        url: "https://fequan.com/feday",
        desc: "\u524d\u7aef\u5708\u4e3b\u529e"
    }, {
        id: "vueconf",
        name: "Vue.js\u5f00\u53d1\u8005\u5927\u4f1a",
        logo: {
            url: baseUrl + "/vueconf.png",
            bgc: "rgb(254, 252, 254)",
            width: 498,
            height: 148
        },
        url: "https://fequan.com/feday",
        desc: "Vue.js\u5f00\u53d1\u8005\u5927\u4f1a\u4e2d\u56fd\u7ad9"
    }, {
        id: "jsconf",
        name: "\u4e2d\u56fdJS\u5f00\u53d1\u8005\u5927\u4f1a",
        logo: {
            url: baseUrl + "/js-conf.png",
            bgc: "rgb(254, 252, 254)",
            width: 498,
            height: 148
        },
        url: "http://jsconf.cn/",
        desc: "\u4e00\u573a\u4e13\u6ce8\u4e8eJavaScript\u548cNode.js\u6280\u672f\u7684\u56fd\u9645\u6027\u5927\u4f1a"
    }]
}, {
    id: "front-end-platform",
    name: "\u5f00\u53d1\u5e73\u53f0",
    weight: 3,
    list: [{
        id: "coding",
        name: "Coding",
        logo: {
            url: baseUrl + "/coding.png",
            width: 200,
            height: 200
        },
        url: "https://coding.net",
        desc: "\u4e2d\u56fd\u6700\u5927\u7684git\u5e73\u53f0\u3002"
    }]
}]
