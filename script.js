const list = document.getElementById("infi-list");

function addItems(nums){
	let count =0;

	for(let i=0;i<nums;i++){
		count++;

		const li = document.createElement("li");

		li.textContent = `Item ${count}`;
		list.appendChild(li);
	}
}

addItems(nums);

list.addEventListener('scroll', () =>{
	if(list.scrollTop + list.clientHeight >= list.scrollHeight){
		addItems(2);
	}
})



