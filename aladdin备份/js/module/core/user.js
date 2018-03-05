/**
 * Created by shihan on 2016/9/30.
 */

//userinfo
if(!$.cookie(user_cookie_access_token)){
    location.href = "login.html";
}else{
    if(!$.cookie(user_info_cookie_name)){
        var access_token = $.cookie(user_cookie_access_token);
        console.log(access_token);
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": userinfo_url,
            "method": "GET",
            "headers": {
                "access_token": access_token
            }
        }

        $.ajax(settings).done(function (response) {
            $.cookie(user_info_cookie_name,response);
        });
    }
}

function getUserToken(){
    return $.cookie(user_cookie_access_token);
}