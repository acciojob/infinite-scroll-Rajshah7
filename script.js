const list = document.getElementById("infi-list");

let count =0;
function addItems(nums){
	

	for(let i=0;i<nums;i++){
		count++;

		const li = document.createElement("li");

		li.textContent = `Item ${count}`;
		list.appendChild(li);
	}
}

addItems(10);

list.addEventListener('scroll', () =>{
	if(list.scrollTop + list.clientHeight >= list.scrollHeight){
		addItems(2);
	}
})



