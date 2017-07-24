app.factory("generatTree",[function(){
    return function(obj){
        var tree = [];
        var dataBase = {};
        if(angular.isArray(obj)){
            var i = 0;
            for(i = 0; i < obj.length; i++){
                if(obj[i].type == 'database'){
                    var temp = obj[i];
                    temp.label = obj[i].name;
                    temp.children = [];
                    dataBase = temp;
                }else if(obj[i].type == 'table'){
                    var temp = obj[i];
                    temp.label = obj[i].name;
                    temp.children = [];
                    dataBase.children.push(temp);
                }
            }
            for(var i = 0; i < obj.length; i++ ){
                if(obj[i].type == 'field'){
                    for(var j = 0; j < dataBase.children.length; j++){
                        if(obj[i].pid == dataBase.children[j].id){
                            var temp = obj[i];
                            temp.label = obj[i].name;
                            temp.children = [];
                            dataBase.children[j].children.push(temp);
                        }
                    }
                }
            }
            dataBase.state = 1;
            tree.push(dataBase);
            return tree;
        }else{
            dataBase.state = -1;
            tree.push(dataBase);
            return tree;
        }
        
    }
}]);