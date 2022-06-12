export const createElement = function (tag, props, ...children) {
	const element = document.createElement(tag);

	Object.keys(props).forEach(key => element[key] = props[key]);

	if (children.length > 0) {
		children.forEach(child => {
			if (typeof child === 'string') {
				child = document.createTextNode(child);
			}
			element.appendChild(child);
		});
	}
	return element;
};
