 $(function(){
        register();//注册验证
        // suijiNum();//随机数
    })
    // $(".gray").click(function(){
    //     suijiNum();
    // });
    // $(".suijise").click(function(){
    //     suijiNum();
    // });
    
    
    //注册
    $("#PhoneReg").click(function(){
        //1、创建对象
        let xhr = new XMLHttpRequest();
        
        //2、设置请求参数
        xhr.open("post","php/zhucehoutai.php",true);
        
        //3、设置回调函数
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                //5、接收响应
                let str = xhr.responseText;
                if(str=="1"){
                    alert("注册成功！");
                    location.href="register.html";
                }else if(str=="-1"){
                    
                    alert("注册失败，用户名已经存在");
                }else{
                    
                    alert("注册失败，服务器出错！");
                }
            }
        }
        
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        
        //4、发送请求
        let str = "Phone_Mobile="+$("#Phone_Mobile").val()+"&Phone_Password="+$("#Phone_Password").val();
        xhr.send(str);
    })
    

    
    
    //检测
     function register(){
        $('#Phone_Mobile').blur(function(){
            //创建对象
            let xhr = new XMLHttpRequest();
            //设置open参数
            xhr.open("get","php/zhucehoutai.php?Phone_Mobile="+this.value,true);
            //回调函数
            xhr.onreadystatechange = function(){
                //接受响应
                if(xhr.readyState==4 && xhr.status==200){
                    let str = xhr.responseText;
                    if(str=='0'){
                        $('.showvalue').html('已被注册，请重输');
                    }else{
                        $('.showvalue').html('该号码可以使用');
                    }
                }
            }
            //发送请求
            xhr.send();
        })
    }
     
//     //随机4位数
//     // id是哪个id下面，tagName是标签 意思哪个id下面的哪几个标签，四位随机数需要4个span,因为牵扯到颜色各不同；
//     // 如果要四个颜色一致 每次点击切换不同那样效果 可以放一个span来拼接实现;
//     function suijiNum(){
//     var arr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var inner = '';
//     var id = $("#suijise");
//     var target = id.find("span");
//     //要产生几个随机数，就循环几次
//     for(var i = 0; i < 4; i++){
//         // 产生了的四个随机数
//         var num = parseInt(Math.random()*arr.length);
// //      console.log(target);
//         target.eq(i).html(arr[num]);
// //      target[i].style.color = suijiColor();
//         inner += arr[num];
//     }
//       id.html(inner);
// }