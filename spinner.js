
function spinner(){ 
	var counter=1;
    spinner.prototype.Up= function(){counter++;console.log(counter);};
    spinner.prototype.Down= function(){counter--;console.log(counter);};
}


var spin= new spinner();
spin.Up();
spin.Up();
spin.Up();
spin.Down();
console.log(spin.counter);