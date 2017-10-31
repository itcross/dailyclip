	var r = firebase.database().ref('folder/');
    var userId;
    var email;

    firebase.auth().onAuthStateChanged(function(user) {
         if(user){
             email = user.email;
             userId = user.uid;
             //DB 구조 변경

             updateList();

         }
    });

    var goToList = function(name){
        r.child(userId).on('value',function(sn){
            sn.forEach(function(snf){
                if(snf.val().name == name){
                    var trans = snf.key;
                    try{
                        //App.intoFolderUserLink(userId, trans);
                
                    }catch(err){

                    }finally{
                        
                        //location.href = "list.html?key=" + trans;
                    }
                    
                }
            });
        });
    };

    var updateList = function(){
        $(".add_folder").empty();
        $("#del").empty();
        if(!userId){
            return;
        }
        r.child(userId).on('value',function(sn){
            var s = 0;
            sn.forEach(function(snf){
                  $(".add_folder").append(
                        "<li class='add_list' onclick='goToList("+'"'+ snf.val().name +'"'+");'>"
                            +"<span class='add_title'>"+snf.val().name+"</span>"
                            +"<span class='add_hit'>0</span>"
                        +"</li>");
                    $("#del").append("<span id='del"+s+"'>"+snf.val().name+"</span><br>");
                    s++;
            });
            $(".container").css('display','none');
            $(".add_folder").slideDown();
            $(".btn_add").css('display','block');
        });
    }