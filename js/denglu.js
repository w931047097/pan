
$(function(){
        $(".btns").click(function(){
            //1、
            $.post(
                "php/denglu.php",
                {
                    "Phone_Mobile":$("#Phone_Mobile").val(),
                    "Phone_Password":$("#Phone_Password").val()
                },
                function(data){ 
                console.log(data);                
                    if(data=="1"){//登录成功！
                        alert("登陆成功");
    
    
//                      saveCookie("userId",$("#userId").val(),7);
                        location.href="index.html";
                    }else{
                        alert("登录失败，用户名或者密码不对！");
                    }
                    if(data=="1"){
                    var Phone_Mobile=$("#Phone_Mobile").val();
                    var Phone_Password=$("#Phone_Password").val();
                    addCookie(1,Phone_Mobile,7);
                    }
                }
            );
        });
        
        
    });
        //保存cookie
        function addCookie(key,value,dayCount){
        var d = new Date();
        d.setDate(d.getDate()+dayCount);
        document.cookie = key+"="+escape(value)+";expires="+d.toGMTString();
}