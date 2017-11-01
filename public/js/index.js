var database = firebase.database();


//현재 로그인한 사용자 가져오기
firebase.auth().onAuthStateChanged(function(user) {
	if(user){
		var displayName = user.displayName;
		var email = user.email;
		var emailVerified = user.emailVerified;
		var photoURL = user.photoURL;
		var isAnonymous = user.isAnonymous;
		var uid = user.uid;
		var providerData = user.providerData;

		//location.href="list.html";
		location.href="info.html";
	}else{
		return false;
	}
});

function fnAutoLogin(userId, userPw){

	if(userId == null || userPw == null){
		return;
}


firebase.auth().signInWithEmailAndPassword(userId, userPw)
.then(function(){
	location.href="list.html";
}).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	// [START_EXCLUDE]
	if (errorCode === 'auth/wrong-password') {
	  alert('패스워드가 틀렸습니다. 다시확인해주세요');
	  App.setUserLoginData(null,null);
	  $('#loginPw').val('');
	  $('#loginPw').focus();
	  return false;
	} else {
	
	}
	console.log(error);
	// [END_EXCLUDE]
}); 

}

function fnLogin(){
var loginId = $('#loginId').val();
var loginPw = $('#loginPw').val();
var success = 'true';

//이메일과 패스워드를 사용해 로그인확인
firebase.auth().signInWithEmailAndPassword(loginId, loginPw)
.then(function(){
	try{
		App.setUserLoginData(loginId,loginPw);
	}catch(err){
		if(err.name =="ReferenceError"){
		
		}
	}finally{
		location.href="list.html";
	}
})
.catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	// [START_EXCLUDE]
	if (errorCode === 'auth/wrong-password') {
		try{
		  App.setUserLoginData(null,null);
		}catch(err){
			if(err.name =="ReferenceError"){

			}
		}
	
	  alert('패스워드가 틀렸습니다. 다시확인해주세요');
	  $('#loginPw').val('');
	  $('#loginPw').focus();
	  return false;
	} else {
	 
	}
	console.log(error);
	// [END_EXCLUDE]
}); 

}

//엔터키 이벤트
function enterKeyCheck(keyCode){
  if(keyCode == '13'){
	  fnLogin();
  }
}