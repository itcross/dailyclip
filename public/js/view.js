var database = firebase.database();
var databaseRef = firebase.database().ref('list/');	//list 참조
var userEmail;	//사용자 이메일
var userId;	//사용자 고유 아이디
var articleKey;	//클립 고유키
var articleUrl; //클립 URL

firebase.auth().onAuthStateChanged(function(user) {
	if(user){
		userEmail = user.email;
		userId = user.uid;
		
		fnView();
	}
});

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

//LOAD VIEW
function fnView(){
	//articleKey = $.urlParam('link');
	
	//databaseRef.child(userId).child(articleKey).on('value', snapshot => {
	//	articleUrl = snapshot.val().url;
	//});
	//$(".article_main").load("view2.html");
	/*$(".article_main").load(function() {
		location.href = "https://www.google.co.kr";
	});*/
}