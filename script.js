//your JS code here. If required.
const btnE1=document.getElementById('btn')
const selectE1=document.getElementById('colorSelect')
btnE1.addEventListener('click',()=>{
	let val=selectE1.selectedIndex;
	if(val>=0){
	selectE1.remove(val);
	}
})