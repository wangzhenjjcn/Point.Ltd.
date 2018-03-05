/**
 * Created by shihan on 2016/9/30.
 */
//var server_url = "http://123.56.147.42:28090";
var server_url = "http://localhost:8090";
var html_server_url = "http://60.205.136.95";
var goods_pic_url = "http://60.205.136.95/";

var html_house_url = html_server_url+"/housingType_manager.html";
var html_upload_house_url = html_server_url+"/update_houseType.html";
var html_model_url = html_server_url+"/modelType_manager.html";
var html_upload_my_model_url = html_server_url+"/update_model.html";
var html_upload_single_model_url = html_server_url+"/update_danModel.html";


var client_id = "123456";
var client_secret = "abcdef";

var user_cookie_name = "user_cookie_name";
var user_cookie_access_token = "access_token_cookie_name";
var user_info_cookie_name = "user_info_cookie_name";

var login_url = server_url +"/api/v1/oauth/token";
var find_pwd_url = server_url + "/api/v1/users/findpwd";
var userinfo_url = server_url + "/api/v1/users/me";
var houseType_manager_url=server_url + "/api/housetypes";

var upload_file_url=server_url+"/api/v1/upload";

var upload_file_house_url = server_url + "/api/v1/upload_house";

var brand_list_url = server_url + "/api/v1/brands/list";
var category_list_url = server_url + "/api/v1/categorys/list";
var goods_list_url = server_url + "/api/v1/goods/list";
