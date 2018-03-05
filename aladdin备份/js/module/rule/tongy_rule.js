/**
 * Created by shihan on 2016/10/11.
 */
$(function(){

    function initEvent(){
        $('.tongY_content table tr').on('click','.editor',function(){
            $(this).find('img').attr('src','images/tongy_rule/rule_editor_hover.png')

        })
        $('.tongY_content table tr').on('click','.rule',function(){
            $(this).find('img').attr('src','images/tongy_rule/rule_del_hover.png');
            var id = $(this).find('img').attr('alt');
            del_series(id)
        })
    }

    var access_token = $.cookie(user_cookie_access_token);

    function getSettings (){
        return {
            "async": true,
            "crossDomain": true,
            "url":series_list_url,
            "method": "GET",
            "headers": {
                "access_token": access_token
            }
        }
    }

    var tpl = document.getElementById('tpl').innerHTML;

    function render(){
        $.ajax(getSettings()).done(function (response) {
            console.log(response);
            var code = response.code;
            if(code==200){
                var tpl_html = juicer(tpl, response);
                $("#m_tpl").empty();
                $("#m_tpl").html(tpl_html);
                initEvent();
            }else{
                alert("服务器错误，请稍后重试");
            }
        });
    }

    /**
     * 删除通用规则
     * @param id
     * @returns {{async: boolean, crossDomain: boolean, url: string, method: string, headers: {access_token: *}}}
     */
    function getDel_Settings (id){
        return {
            "async": true,
            "crossDomain": true,
            "url":series_list_url+"/"+id,
            "method": "DELETE",
            "headers": {
                "access_token": access_token
            }
        }
    }

    function del_series(id){
        $.ajax(getDel_Settings(id)).done(function (response) {
            console.log(response);
            var code = response.code;
            if(code==200){
               render();
            }else{
                alert("服务器错误，请稍后重试");
            }
        });
    }

    render();


})