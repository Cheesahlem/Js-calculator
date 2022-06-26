let result=document.getElementById('input');

let calculate=(number)=>{
	result.value+=number;
}


let output=()=>{
	try {
		result.value=eval(result.value)
	}

	catch(err){
		alert("Syntax error!")
	}
}

function clr(){
	result.value= " ";
}
function del(){
	result.value=result.value.slice(0,-1);
}