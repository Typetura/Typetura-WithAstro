export function handleError(msg: string, component?: string): void {
	throw new Error(`
		⚠ Error from '<Typetura${component ? `.${component}` : ''}/>'
		${msg}
	`);
}

export interface ClassesFromAttrsShape {
	classlist: string[];
}

export const getClassesFromAttrs = <TAttrs>(attrs: TAttrs): ClassesFromAttrsShape => {
	const classes = Object.keys(attrs).find((item) => /^class$/i.test(item));
	let additionalClassList = [];
	if (classes) {
		//@ts-ignore
		let classList = attrs['class'];
		//@ts-ignore
		delete attrs['class'];
		classList = typeof classList === 'string' ? classList.split(' ') : handleError('Incorrect values passed as classes.');
		additionalClassList = classList;
	}

	return {
		classlist: additionalClassList,
	};
};

export const ManageStyles = (leclass: string, key?: string, none?: boolean, base?: number, scale?: number, ease?: string | number): string => {
	let str = '';
	const sentence = (classes: string, statement: string): string => `<style>.${classes} {${statement}}</style>`;
	if (leclass.split(' ').length > 1) {
		handleError('Error with manageStyles(): Only one class allowed');
	}
	if (none && !key) {
		str = `--tt-key:none;`;
		return sentence(leclass, str);
	}
	if (key && !none) {
		str += `--tt-key:${key};`;
	}
	if (ease) {
		str += `--tt-ease:${ease};`;
	}
	if (base) {
		str += `--tt-base:${base};`;
	}
	if (scale) {
		str += `--tt-scale:${scale};`;
	}
	return sentence(leclass, str);
};
