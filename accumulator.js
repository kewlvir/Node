
module.exports=function(){
      var intx=0;
    return{ 
        
        Add: function(x){intx=intx+x;},
        Substract: function(x){intx=intx-x;},
        Multiply: function(x){intx=intx*x;},
        Divide: function(x){intx=intx/x;},
        getResult: function(){return intx;}
        };
};

