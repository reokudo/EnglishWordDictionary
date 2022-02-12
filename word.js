function convSpace(word,space){
	return word.replace(/ /g,space)
}

//'en-US'
function pronounce(word,lang){
	let u = new SpeechSynthesisUtterance();
	u.lang =lang;
	u.text = word;
	speechSynthesis.speak(u);
}

word=setKeyinit("word","")

links={
"weblio":{"url":"https://ejje.weblio.jp/content/","space":" "},
"ALC":{"url":"https://eow.alc.co.jp/search?q=","space":" "},
"Oxford":{"url":"https://www.oxfordlearnersdictionaries.com/search/english/?q=","space":" "},
"LONGMAN":{"url":"https://www.ldoceonline.com/search/direct/?q=","space":"+"},
"DeepL":{"url":"https://www.deepl.com/translator#en/ja/","space":" "},
"WikiPedia":{"url":"https://en.wikipedia.org/wiki/","space":" "},
"Google":{"url":"https://www.google.com/search?hl=en&gl=uk&q=","space":" "},
"Google Image":{"url":"https://www.google.co.jp/search?tbm=isch&hl=en&gl=uk&q=","space":" "},
"Yahoo! Image":{"url":"https://images.search.yahoo.com/search/images;?p=","space":" "}
};

pronounce_langs=['en-US','en-GB']

output="";
output+="<h1>"+word+"</h1>"
for(let key in links){
	output+="<p><a href='"+links[key]["url"]+convSpace(word,links[key]["space"])+"' target='_blank' rel='noopener noreferrer'>"+key+"</a></p>"
}

output+="<p>"
for(let value in pronounce_langs){
	output+="<button id='button' onclick=\"pronounce('"+word+"','"+pronounce_langs[value]+"')\">"+pronounce_langs[value]+"</button>"
}
output+="</p>"

document.getElementById('output').innerHTML = output;