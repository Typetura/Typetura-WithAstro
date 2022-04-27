import { expect } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

const getComponent = async (props) => {
	try {
		return await getComponentOutput('./packages/typetura/components/Section.astro', { ...props });
	} catch (error) {
		throw new Error(error);
	}
};

describe('Test: <Section />', () => {
	let component;
	describe('Checks a range of <Section/> Components', () => {
		describe('Check Default Output', () => {
			before(async () => {
				component = await getComponent();
			});
			it('Render Default <h2>', () => {
				expect(component.html).to.include('h2');
			});
		});
		describe('level = 3', () => {
			before(async () => {
				component = await getComponent({ level: 3 });
			});
			it('Render <h3>', () => {
				expect(component.html).to.include('h3');
			});
		});
		describe('level = 4', () => {
			before(async () => {
				component = await getComponent({ level: 4 });
			});
			it('Render <h4>', () => {
				expect(component.html).to.include('h4');
			});
		});
		describe('level = 5', () => {
			before(async () => {
				component = await getComponent({ level: 5 });
			});
			it('Render <h5>', () => {
				expect(component.html).to.include('h5');
			});
		});
	});
});

describe('Props Test: Props.sub', () => {
	let component;
	describe('Control Test : No Props.sub', () => {
		before(async () => {
			component = await getComponent();
		});
		it('Render class="section-headline"', () => {
			expect(component.html).to.include('class').and.to.include('section-headline');
		});
	});
	describe('Test SubHeadline : Props.sub', () => {
		before(async () => {
			component = await getComponent({ sub: true });
		});
		it('Render class="section-subheadline', () => {
			expect(component.html).to.include('class').and.to.include('section-subheadline');
		});
	});
	describe('Test SubHeadline : Props.sub', () => {
		before(async () => {
			component = await getComponent({ label: true });
		});
		it('Render class="section-label', () => {
			expect(component.html).to.include('class').and.to.include('section-label');
		});
	});
});

describe('Test : Props.none', () => {
	let component;
	before(async () => {
		component = await getComponent({ none: true });
	});
	it('Render class="section-headline"', () => {
		expect(component.html).to.include('class').and.to.include('section-headline').and.to.include('--tt-key:none;');
	});
});

describe('Test: Prop.base', () => {
	let component;
	before(async () => {
		component = await getComponent({ base: 42 });
	});
	it('Render: <style>.section-headline {--tt-base:42;}', () => {
		expect(component.html).to.include('style').and.to.include('--tt-base:42');
	});
});

describe('Test: Prop.scale', () => {
	let component;
	before(async () => {
		component = await getComponent({ scale: 0.5 });
	});
	it('Render: <style>.section-headline {--tt-scale:0.5;}', () => {
		expect(component.html).to.include('style').and.to.include('--tt-scale:0.5');
	});
});

describe('Test: Prop.ease', () => {
	let component;
	before(async () => {
		component = await getComponent({ ease: 'ease-in' });
	});
	it('Render: <style>.section-headline {--tt-ease:ease-in;}', () => {
		expect(component.html).to.include('style').and.to.include('--tt-ease:ease-in');
	});
});

describe('Test: Prop.key', () => {
	let component;
	before(async () => {
		component = await getComponent({ key: 'test' });
	});
	it('Render: <style>.section-headline {--tt-key:test;}', () => {
		expect(component.html).to.include('style').and.to.include('--tt-key:test;');
	});
});

describe('Test: Prop.none', () => {
	let component;
	before(async () => {
		component = await getComponent({ none: true });
	});
	it('Render: <style>.section-headline {--tt-key:none;}', () => {
		expect(component.html).to.include('style').and.to.include('--tt-key:none;');
	});
});
