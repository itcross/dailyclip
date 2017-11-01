var database = firebase.database();
var email;

firebase.auth().onAuthStateChanged(function(user) {
	if(user){
		email = user.email;
		$('#loginEmail').text(email);
	}
});

//로그아웃처리 사용자 로그인 세션 정리
function fnLogOut(){
	firebase.auth().signOut().then(function() {
		try{
		  App.setUserLoginData(null,null);
		}catch(err){

		}
		
		location.href="index.html";
	})

}

//로그인 패스워드 변경을위한 메일 전송
function fnNewPwd(){
	firebase.auth().sendPasswordResetEmail(email).then(function() {
		console.log('이메일을 전송하였습니다.');
	}, function(error) {
	});
}