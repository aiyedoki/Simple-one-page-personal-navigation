const sInfor = document.getElementById("search");
const sBaidu = document.getElementById("baidu");
const sGoogle = document.getElementById("google");
const sBing = document.getElementById("bing");
const sGitHub = document.getElementById("github");
const sZhihu = document.getElementById('zhihu');
const sJd = document.getElementById('jd');
const sTaoBao = document.getElementById('taobao');
const sYouTube = document.getElementById('youtube')
const sBilibili = document.getElementById("bilibili");


//isEmpty;
let isEmpty = function(obj) {
	if (obj === null) return true;
	if (typeof obj === 'undefined') {
		return true;
	}
	if (typeof obj === 'string') {
		let reg = new RegExp("^([ ]+)|([　]+)$");
		//判断有空格，如果有空格，删除左边空格；
		if (reg.test(obj)) {
			obj = obj.replace(/(^\s*)/g, "");
		}

		if (obj === "") {
			return true;
		}


	}
	return false;
}
//doAction 搜索跳转方法
/*  
p：搜索网址前段 
n: 搜到网址后段
h: 搜索首页
*/
let doAction = function(p, n, s) {
	if (isEmpty(sInfor.value)) {
		window.open(s);
	} else {
		window.open(p + sInfor.value + n);
	}

}

//拼接网址
let p = '';
let n = '';
let s = ''

//Google
sGoogle.onclick = function() {
	p = "https://www.google.com/search?q=";
	n = "&gws_rd=cr&nfpr=1&newwindow=1&num=30";
	s = 'https://www.google.com/webhp?gws_rd=cr&nfpr=1&newwindow=1&num=30';
	doAction(p, n, s);
}
//BaiDu
sBaidu.onclick = function() {
	p = "https://www.baidu.com/s?wd=";
	doAction(p, '', p);
};
document.onkeydown = function(e) { // 回车提交表单
	// 兼容FF和IE和Opera
	var theEvent = window.event || e;
	var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
	if (code == 13) {
		// p = 'https://cn.bing.com/search?q=';
		p = 'https://cn.bing.com/search?q=';
		n = '&ensearch=1&FORM=BESBTB'
		// s = 'https://www4.bing.com/?scope=web&FORM=BESBTB';
		s = 'https://www4.bing.com/?scope=web&FORM=BESBTB';
		doAction(p, n, s);
	};
}
//Bing
sBing.onclick = function() {
	p = 'https://cn.bing.com/search?q=';
	n = '&ensearch=1&FORM=BESBTB'
	s = 'https://www4.bing.com/?scope=web&FORM=BESBTB';
	doAction(p, n, s);
}
//GitHub
sGitHub.onclick = function() {
	p = 'https://github.com/search?q=';
	n = '';
	s = 'https://github.com'
	doAction(p, n, s);
}
//Zhihu
sZhihu.onclick = function() {
	p = 'https://www.zhihu.com/search?q=';
	n = '&type=content&utm_content=search_hot';
	s = 'https://www.zhihu.com/'
	doAction(p, n, s);
}
//jd
sJd.onclick = function() {
	p = 'https://search.jd.com/Search?enc=utf-8&keyword=';
	n = '';
	s = 'https://search.jd.com/'
	doAction(p, n, s);
}
//TaoBao
sTaoBao.onclick = function() {
	p = 'https://s.taobao.com/search?q=';
	n = '&taoke_type=1';
	s = 'https://s.taobao.com/';
	doAction(p, n, s);
}
//YouTube
sYouTube.onclick = function() {
	p = 'https://www.youtube.com/results?search_query=';
	doAction(p, n, p);
}
//Bilibili
sBilibili.onclick = function() {
	p = 'https://www.bilibili.com/';
	n = '';
	s = 'https://www.bilibili.com/'
	doAction(p, n, s);
}
console.log("                                  ");
console.log("   - 欢迎来到DokiDokis个人导航 -     ");
console.log("===============================");
console.log("                          ");
console.log("       冲冲冲~      ");
console.log("                          ");
console.log("===============================")
