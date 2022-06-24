

	// return keys of object
	const getObjKeys = (obj) => {
		return Object.keys(obj);
	};

	// check if a value is an object
	const isObject = (n) => {
		return Object.prototype.toString.call(n) === "[object Object]";
	};

	// compare old and new form and create an update
	export const compareObj = (obj1, obj2, obj = Object.create(null)) => {
		const obj1Keys = getObjKeys(obj1);

		obj1Keys.forEach((key) => {
			if (isObject(obj1) && isObject(obj2)) {
				if (obj1[key] !== obj2[key]) {
					obj[key] = obj2[key];
				} else {
					compareObj(obj1[key], obj2[key], obj);
				}
			}
		});

		return obj;
	};