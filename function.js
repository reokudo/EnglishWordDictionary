//URLパラメータ取得関数
function getParam(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//URLパラメータ取得と初期化用関数
function setKeyinit(key,value){
	var url_key=getParam(key);
	if(url_key==null)url_key=value;
	else if((typeof value)=="number")url_key=Number(url_key);
	return url_key;
}

//単語表示フレーム用関数
function wordFrame(word,width='100%',height='500px'){
	var wordurl="word/word.html?word="+word;
	console.log(width,height)
	return "<iframe width='"+width+"' height='"+height+"' src='"+wordurl+"'></iframe>"
}