/**
 * Created by shihan on 2016/10/11.
 */

function skp_login_success(username,password){
    var data = {"username":username,"password":password};
    ART.Sketchup.callback("Tools.login",data)
}

function skp_my_house_html(){
    var data = {"url":html_house_url};
    ART.Sketchup.callback("Tools.my_floor_plans",data);
}

function skp_my_model_html(){
    var data = {"url":html_model_url};
    ART.Sketchup.callback("Tools.my_models",data);
}

function skp_down_my_house(url){
    var data = {"url":url};
    ART.Sketchup.callback("MyFloorPlans.download_floor_plan",data);
}

function skp_down_my_model(url,models){
    var data = {"url":url,"models":models};
    ART.Sketchup.callback("MyFloorPlans.download_floor_plan",data);
}

function skp_upload_houseType(){
    var data = {"url":html_upload_house_url};
    ART.Sketchup.callback("Tools.open_upload_floor_plan_window", data);
}

function skp_edit_upload_houseType(id){
    var data = {"url":html_upload_house_url+"/"+id};
    ART.Sketchup.callback("Tools.open_upload_floor_plan_window", data);
}

function skp_upload_houseType_file(){
    ART.Sketchup.callback("Upload.upload_floor_plan", {
        url : upload_file_house_url
    });
}


function skp_upload_my_model(){
    var data = {"url":html_upload_my_model_url};
    ART.Sketchup.callback("MyModels.open_upload_my_model_window", data);
}

function skp_upload_single_model(){
    var data = {"url":html_upload_single_model_url};
    ART.Sketchup.callback("MyModels.open_sku_window", data);
}

function skp_edit_upload_my_model(id){
    var data = {"url":html_upload_my_model_url+"/"+id};
    ART.Sketchup.callback("MyModels.open_upload_my_model_window", data);
}

function skp_edit_upload_single_model(id){
    var data = {"url":html_upload_single_model_url+"/"+id};
    ART.Sketchup.callback("MyModels.open_sku_window", data);
}



function begin_loading(){

}

function end_loading(){

}