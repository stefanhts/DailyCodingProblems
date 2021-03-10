const arr = [10, 15, 3, 7]

const res = (lst, k) =>{
	let lookup = new Set()
	for(let num of lst){
		if(lookup.has(num))
			return true
		lookup.add(k-num)
	}
	return false
}

console.log(res(arr, 17))