app.filter("title",function(){
    return function(str){
        return "-"+str;
    }
});