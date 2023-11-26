// Busqueda secuencial / lineal
const searchLinear = (arr, el) =>{
    let res = 'no encontrado'
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]==el) {
                return i
            }
        }
        return -1
    }

// Busqueda por saltos
function searchJump(arr, target) {
	let starTime=Date.now()
	let len = arr.length
	let step = Math.floor(Math.sqrt(len));
	let blockStart = 0, currentStep = step;

	while (arr[Math.min(currentStep, len) - 1] < target) 
	{
		blockStart = currentStep;
		currentStep += step;
		if (blockStart >= len)
		{
				
			return {
				pos: -1,
				time: ( Date.now - starTime)
			};
		}
	}

	while (arr[blockStart] < target)
	{
		blockStart++;
		if (blockStart == Math.min(currentStep, len))
			return {
				pos: -1,
				time: ( Date.now() - starTime)
			};
	}

	if (arr[blockStart] == target){
		let enTime = Date.now()
		return {
			pos: blockStart,
			time: ( enTime- starTime)
		};
	}
	else
		return {
			pos: -1,
			time: ( Date.now() - starTime)
		};
}
module.exports = {searchLinear:searchLinear, searchJump:searchJump}