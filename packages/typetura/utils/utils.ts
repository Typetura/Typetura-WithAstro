export function handleError(msg: string, component?: string): void {
	throw new Error(`
		⚠ Error from '<Typetura${component ? `.${component}` : ''}/>'
		${msg}
	`);
}

export interface ClassesFromAttrsShape {
	classlist: string[];
}

export const getClassesFromAttrs = <TAttrs>(attrs: TAttrs) => {
	const classes = Object.keys(attrs).find((item) => /^class$/i.test(item));
	let additionalClassList: string[] = [];
	if (classes) {
		//@ts-expect-error : Object Attrs has undeclared type signs
		let classList = attrs['class'];
		//@ts-expect-error : Object Attrs has undeclared type signs
		delete attrs['class'];
		classList = typeof classList === 'string' ? classList.split(' ') : handleError('Incorrect values passed as classes.');
		additionalClassList = classList;
	}

	return {
		classlist: additionalClassList,
	};
};

export const UUID = () => Math.random().toString(36).slice(9);

export const ScopedStyleName = (classname: string) => ({ scopedClass: `${classname} ${UUID()}` });

export const ManageStyles = (classlist: string, key?: string, none?: boolean, base?: number, scale?: number, ease?: string | number): string => {
	let str = '';
	const sentence = (classes: string, statement: string): string => `.${classes} {${statement}}`;
	if (classlist.split(' ').length > 2) {
		handleError('Error with manageStyles():', classlist);
	}
	if (none && !key) {
		str = `--tt-key:none;`;
		return sentence(classlist, str);
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
	return sentence(classlist, str);
};

export const HeadingLevels = (level: string | number, rangeOfHeadings: number[], component: string) => {
	const headingLevel = typeof level === 'string' && level.startsWith('h') ? +level.slice(1) : +level;
	if (rangeOfHeadings.length > 2) {
		handleError('Param Range:number[] can only accept a min and max value', 'HeadingLevels()');
	}
	if (!(headingLevel >= rangeOfHeadings[0] && headingLevel <= rangeOfHeadings[1])) {
		handleError(`Level: ${headingLevel} is out of Range:\n\t Accepted Heading range is ${rangeOfHeadings[0]} -> ${rangeOfHeadings[1]}`, component);
	}
	return `h${headingLevel}`;
};
