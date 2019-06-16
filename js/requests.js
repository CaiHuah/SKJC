function AjaxPost(uri,method,values,callback){
    url = 'http://' + DOMAIN + '/' + uri + '/';
    api.ajax({
        url: url,
        method: method,
        data: {
            values
        },
        dataType:'json'
    }, function(ret, err) {
        if (ret) {
            if(ret.result === 'success!'){
                callback(ret.data);
            }
        } else {
            api.toast({
                msg: '网络不给力',
                duration: 2000,
                location: 'bottom'
            });
        }
    });
}

function AjaxGet(uri,callback){
    api.ajax({
        url: 'http://' + DOMAIN + '/' + uri,
        method: 'get',
        cache:false,
    }, function(ret, err) {
        if (ret) {
            if(ret.result === 'success!'){
                callback(ret.data);
            }
        } else {
            api.toast({
                msg: '网络不给力',
                duration: 2000,
                location: 'bottom'
            });
        }
    });   
}