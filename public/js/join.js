var database = firebase.database();

function fnNewMember(){
	var email = $('#userEmail').val();
	var userPwd1 = $('#userPwd1').val();
	var userPwd2 = $('#userPwd2').val();
	var userBirth = $('#userBirth').val();
	var userGender = $('#userGender').val();
	
	if(userPwd1 != userPwd2){
		alert('패스워드를 다시 확인해주세요');
		$('#userPwd1').val('');
		$('#userPwd1').focus();
		$('#userPwd2').val('');
		return false;
	}else{
		
		if(confirm('회원가입을 진행하시겠습니까?')){
			
			//회원가입을 위한 기능
			firebase.auth().createUserWithEmailAndPassword(email, userPwd1)
			.then(function(){
				PushNewUser(email , userBirth , userGender);
			})
			.catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
			   
				// [START_EXCLUDE]
				if (errorCode == 'auth/weak-password') {
				  alert('패스워드가 매우 취약합니다. 다시설정해주시기 바랍니다.');
				  success = 'false';
				} else if (errorCode == 'auth/invalid-email') {
					alert('이메일 주소의 형식이 잘못되었습니다.');
					success = 'false';
				} else if (errorCode == 'auth/email-already-in-use') {
					alert('이메일 주소는 이미 다른 계정에서 사용 중입니다.');
					success = 'false';
				} else {
				  //alert(errorMessage);
				  success = 'false';
				}
				//console.log(error);
				// [END_EXCLUDE]
			});
		}
	}
}

//회원정보 등록	
function PushNewUser(email , birth , gender) {  
	var postData = {
		email : email,
		birth : birth,
		gender : gender
	};
	var newPostKey = firebase.database().ref().child('users').push().key;
	var updates = {};
	updates['/users/' + newPostKey] = postData;
	var result=firebase.database().ref().update(updates);
	
	location.href="index.html";
}