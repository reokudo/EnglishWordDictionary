//検索ボタン用関数
function btnclick(){
	var word=document.getElementById("input_word").value;
	document.getElementById("result_data").innerHTML=wordFrame(word);
}

$("#input_word").keydown(function(event) {
	if (event.key === "Enter"){
		btnclick();
	}
});
