//Initialize Firebase
// 파이어베이스 접근 설정
var config = {
	apiKey: "AIzaSyBlRXKU6mf9KGW1cqUNThHuQu825qKd0MA",
	authDomain: "dailyclip-b64d3.firebaseapp.com",
	databaseURL: "https://dailyclip-b64d3.firebaseio.com",
	projectId: "dailyclip-b64d3",
	storageBucket: "dailyclip-b64d3.appspot.com",
	messagingSenderId: "753746341919"
};

firebase.initializeApp(config);

// GET URL PARAMETER
/* url이 다음과 같을 때, example.com?param1=name&param2=&id=6
	$.urlParam('param1'); // name
	$.urlParam('id');        // 6
	$.urlParam('param2');   // null
*/
$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}
