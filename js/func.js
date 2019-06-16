function is_tx(email,pwd,callback){
    api.ajax({
          method:"post",
          url:'http://' + DOMAIN + '/is_Tx/',
          data:{
            values:{
              'email':email,
              'pwd':pwd
            }
          },
          dataType:'json',
          timeout: 3
        },function(ret,err){
          if(ret.result==='success!'){
            if(ret.is_tx === 1){
                api.setPrefs({
                    key: 'tx',
                    value: 1
                });
            }
            else
                api.setPrefs({
                        key: 'tx',
                        value: 0
                    });
            callback();
          }else {
            if(ret.result === 'failed!'){

            }
            else{
              alert('异常!')
            }
            api.setPrefs({
                    key: 'tx',
                    value: 0
                });
            callback();
          }
        });
}

function is_connect(callback){
    api.ajax({
        url: 'http://' + DOMAIN + '/is_connect/',
        method: 'get',
        cache:false,
        timeout:2
    }, function(ret, err) {
        if (ret) {
          callback('1');
        } else {
          callback('0');
        }
    });

}