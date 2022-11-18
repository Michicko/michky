

	// return keys of object
	const getObjKeys = (obj) => {
		return Object.keys(obj);
	};

	// check if a value is an object
	const isObject = (n) => {
		return Object.prototype.toString.call(n) === "[object Object]";
	};

	// compare old and new form and create an update
	export const compareObj = (oldObj, newObj, obj = Object.create(null)) => {
		const oldObjKeys = getObjKeys(oldObj);

		oldObjKeys.forEach((key) => {
			if (isObject(oldObj) && isObject(newObj)) {
				if (oldObj[key] !== newObj[key]) {
					obj[key] = newObj[key];
				} else {
					compareObj(oldObj[key], newObj[key], obj);
				}
			}
		});
		return obj;
	};