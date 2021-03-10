// Returns a list where the val at i is the product 
// of all the elements without i

const arr = [3,2,1]

const total = (nums)=>{
	let prod = 1
	for(let num in nums){
		prod*=nums[num]
	}
	return prod
}

const output = (nums)=>{
	let output =[]
	let tot = total(arr)
	for(let num in nums){
		output.push(tot/nums[num])
	}
	return output
}
console.log(`Division: ${output(arr)}`)

console.log('^^^^^^ This is done with division ^^^^^^')
// same as above, but without using division
console.log('vvvvvv This is done without division vvvvvv')

const func = (lst, i) =>{
	let prod = 1
	for(let num in lst){
		if(num === i)
			continue
		else
			prod *= lst[num]
	}
	return prod
}

const out = (lst) =>{
	let my_out = []
	for(let num in lst){
		my_out[num] = func(lst, num)
	}
	return my_out
}

console.log(`No division: ${out(arr)}`)
