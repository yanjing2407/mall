jQuery.extend({ajaxMutiUploadConfig:{"iframeId":"ajaxFileUploadIFrame","formId":"ajaxFileUploadForm"},createAjaxMutiUploadForm:function(fileElementId,data){var $form=$("<form/>");$form.attr({"action":param.url,"method":"post","name":$.ajaxMutiUploadConfig.iframeId,"id":$.ajaxMutiUploadConfig.formId,"target":$.ajaxMutiUploadConfig.iframeId,"enctype":"multipart/form-data","encoding":"multipart/form-data"}).css({"display":"none"});if(data){for(var i in data){$form.append('<input type="hidden" name="'+i+'" value="'+data[i]+'"/>')}}var fileElementIds=fileElementId.split(",");var i=0;for(i;i<fileElementIds.length;i++){var $oldFile=$("#"+fileElementIds[i]);var $newFile=$oldFile.clone();$oldFile.before($newFile);$form.append($oldFile)}jQuery($form).appendTo("body");return $form},createAjaxMutiUploadIframe:function(){var $ifm=$('<iframe name="'+$.ajaxMutiUploadConfig.iframeId+'"/>');$ifm.attr({"id":$.ajaxMutiUploadConfig.iframeId}).css({"display":"none"});$($ifm).appendTo("body");return $ifm.get(0)},ajaxMutiUpload:function(config){var $ifm=$("#"+$.ajaxMutiUploadConfig.formId);var $f=$("#"+$.ajaxMutiUploadConfig.iframeId);$ifm.remove();$f.remove();param={"url":"","fileElementId":"","success":"","data":""};param=jQuery.extend({},jQuery.ajaxSettings,config);var $formNew=jQuery.createAjaxMutiUploadForm(param.fileElementId,param.data);var v_iframe=jQuery.createAjaxMutiUploadIframe();if(v_iframe.attachEvent){v_iframe.attachEvent("onload",function(){$.ajaxMutiUploadCallBack()})}else{v_iframe.onload=function(){$.ajaxMutiUploadCallBack()}}$formNew.submit()},ajaxMutiUploadCallBack:function(){var $ajaxMutiUploadIframe=$("#"+$.ajaxMutiUploadConfig.iframeId);var v_rs=$.parseJSON($ajaxMutiUploadIframe.contents().find("body").text());param.success(v_rs)}});