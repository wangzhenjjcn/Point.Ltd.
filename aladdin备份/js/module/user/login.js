/**
 * Created by shihan on 2016/9/30.
 */
$(document).ready(function(){
    //focus username field
    $(" #username").focus();

    //checkbox
    $('.login_box form h5 p').on('click','span',function(){
        if($(this).hasClass('checked')){
            $(this).removeClass('checked');
        }else{
            $(this).addClass('checked');
        }
    });

    //login
    $('#submit_btn').on('click',function(){
        var username = $('#username').val(), password = $('#password').val();
        if(!username) {
            alert('请输入邮箱/手机号');
            $('#username').focus();
            return false;
        }

        if(!password) {
            alert('请输入密码');
            $('#password').focus();
            return false;
        }

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": login_url+"?client_id="+client_id+"&client_secret="+client_secret+"&username="+username+"&password="+password+"&grant_type=password",
            "method": "POST",
            "error": function(XMLHttpRequest, textStatus, errorThrown){
                var response =  XMLHttpRequest.responseText;
                //console.log(response);
                var data = eval('(' + response + ')');
                alert(data.error_description);
            },
            "headers": {
                "content-type": "application/x-www-form-urlencoded"
            }
        }

        $.ajax(settings).done(function (response) {
            // console.log(response);
            var data = eval('(' + response + ')');
            //console.log(data);
            var access_token = data.access_token;
            $.cookie(user_cookie_name,data);
            $.cookie(user_cookie_access_token,access_token);
            //skp_login_success(username,password);
            location.href="index.html";
        });

    });

});