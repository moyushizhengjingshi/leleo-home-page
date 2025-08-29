const config = {
	//网页元数据
	metaData: {
		title: '小梦的个人主页🎉',
		description: '欢迎来到小梦的奇妙世界！',
		keywords: '小梦,个人主页,个人网站',
		icon: '/img/ficon'   //网页图标，支持外链
	},

	avatar: "/img/avatar.jpg", // 头像
	welcometitle: "Hi, I'm XiaoMeng", // 标题

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
		turntablecolor1: "#FFFF00",  // 转盘渐变色一
		turntablecolor2: "#00FFFF"   // 转盘渐变色二
	},

	brightness: 75, // 背景亮度 --%
	blur: 5, // 毛玻璃模糊效果

	// 我的标签
	tags: ['王者荣耀','无间傀儡','济宁医学院','ISFJ','算法竞赛'],

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "video",  
			"datainfo": {
				"title": "春至-动",
				"preview": "/img/wallpaper/dynamic/春至-动/春至.webm",
				"url": "/img/wallpaper/dynamic/春至-动/春至.webm",     //随机PC壁纸api："url":"https://t.mwm.moe/pc"
			},
		},
		"mobile": {   //移动端
			"type": "pic",
			"datainfo": {
				"title": "001",
				"preview": "/img/wallpaper/static-mobile/0001/001.webp",
				"url": "/img/wallpaper/static-mobile/0001/001.jpg"  //："url":"https://t.mwm.moe/mp"
			}
		}

	},

	//极坐标图数据
	polarChart: {
		skills: ['c/c++', 'go', 'Java', 'Python', 'linux', 'MySQL','h5','js','css'],
		skillPoints: [80, 25, 45, 45, 15, 15,10,10,10],
	},

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-github", link: "https://github.com/moyushizhengjingshi" },
		{ icon: "mdi-youtube", link: "https://www.youtube.com/@xiaomeng-v9i5e" },
		{ icon: "mdi-facebook", link: "https://www.facebook.com" }
	],
	
	
	//打字机
	typeWriterStrings: [
		"如果你看到了这行字，说明我已经成功吸引到了你的注意力。",
		"顶峰的少年，给了你所有细节，你却说我不是迪迦，给不了你想要的光。",
		"心简单，世界就简单，幸福才会生长；心自由，生活就自由，到哪都有快乐。",
		"生命太短，没有时间留给遗憾，若不是终点，请微笑一直向前。"
	],

	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'tencent',  
		type: 'playlist',   
		id: '1140481259'  
	},

	wallpaper: {
		pic: [
			{ "title": "春至",     "preview": "/img/wallpaper/static/春至/image.webp",     "url": "/img/wallpaper/static/春至/image.png" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/001.webp", "url": "/img/wallpaper/static-mobile/0001/001.jpg" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/002.webp", "url": "/img/wallpaper/static-mobile/0002/002.jpg" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/003.webp", "url": "/img/wallpaper/static-mobile/0003/003.jpg" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/004.webp", "url": "/img/wallpaper/static-mobile/0004/004.jpg" },
		],
		video: [
			{
				"title": "春至-动",
				"preview": "/img/wallpaper/dynamic/春至-动/春至.webm",
				"url":     "/img/wallpaper/dynamic/春至-动/春至.webm"
			},
			{
				"title": "向往航天的女孩",
				"preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
				"url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
			},
			{
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
				"url": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm"
			},
		],
		videoMobile: [
			{
				"title": "崩铁克拉拉",
				"preview": "/img/wallpaper/dynamic-mobile/崩铁克拉拉/崩铁克拉拉.mp4",
				"url": "/img/wallpaper/dynamic-mobile/崩铁克拉拉/崩铁克拉拉.mp4"
			},
			{
				"title": "碧蓝档案水着2",
				"preview": "/img/wallpaper/dynamic-mobile/碧蓝档案水着2/碧蓝档案水着2.mp4",
				"url": "/img/wallpaper/dynamic-mobile/碧蓝档案水着2/碧蓝档案水着2.mp4"
			},
			{
				"title": "情书凌华",
				"preview": "/img/wallpaper/dynamic-mobile/情书凌华/情书凌华.mp4",
				"url": "/img/wallpaper/dynamic-mobile/情书凌华/情书凌华.mp4"
			},
			{
				"title": "依神紫苑-晨光",
				"preview": "/img/wallpaper/dynamic-mobile/依神紫苑-晨光/依神紫苑-晨光.mp4",
				"url": "/img/wallpaper/dynamic-mobile/依神紫苑-晨光/依神紫苑-晨光.mp4"
			},
		],
	},

	//项目卡片 其中 字段"show"控制初始卡片的text是否展开
	projectcards: [
		{ go: "🚀 前往", img: "/img/paimeng.jpg", title: "b站",  subtitle: "梦开始的地方", text: "所有的学习基本都来自b站", url: "https://space.bilibili.com/1073065054?spm_id_from=333.1007.0.0", show: 0 },
		{ go: "🗂️ 前往", img: "/img/feng.jpg", title: "csdn",  subtitle: "跨过挫折的地方", text: "是各个up主的分享解决所遇到的各种环境部署、以及代码问题", url: "https://blog.csdn.net/2301_79676237?spm=1000.2115.3001.5343", show: false },
		{ go: "📝 前往", img: "/img/yan.jpg", title: "Project 3",  subtitle: "尽", text: "", url: "", show: false },
		{ go: "👍 前往", img: "/img/lei.jpg", title: "Project 4", subtitle: "请", text: "", url: "", show: false },
		{ go: "🗃 前往", img: "/img/cao.jpg", title: "Project 5", subtitle: "期", text: "", url: "", show: false },
		{ go: "🎨 前往", img: "/img/shui.jpg", title: "Project 6", subtitle: "待", text: "", url: "", show: false },
		// { go: "💍 前往", img: "/img/sunshine.jpg", title: "Project 7", subtitle: "7,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://leleo.top", show: false },
		// { go: "🔍 前往", img: "/img/sunshine.jpg", title: "Project 8", subtitle: "8,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://leleo.top", show: false },
	],

	
}

export default config