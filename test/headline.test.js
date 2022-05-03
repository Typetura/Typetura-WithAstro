import { expect } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

const getComponent = async (props) => {
	try {
		return await getComponentOutput('./packages/typetura/components/Headline.astro', { ...props });
	} catch (error) {
		throw new Error(error);
	}
};

describe('Test: <Headline />', () => {
	let component;
	describe('Checks a range of <Headline/> Components', () => {
		describe('Check Default Output', () => {
			before(async () => {
				component = await getComponent();
			});
			it('Render Default <h1>', () => {
				expect(component.html).to.include('h1');
			});
		});
		describe('level = "h1"', () => {
			before(async () => {
				component = await getComponent({ level: 'h1' });
			});
			it('Render <h1>', () => {
				expect(component.html).to.include('h1');
			});
		});
		describe('level = 2', () => {
			before(async () => {
				component = await getComponent({ level: 2 });
			});
			it('Render <h2>', () => {
				expect(component.html).to.include('h2');
			});
		});
		describe('level = "h2"', () => {
			before(async () => {
				component = await getComponent({ level: 'h2' });
			});
			it('Render <h2>', () => {
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
		describe('level = "h3"', () => {
			before(async () => {
				component = await getComponent({ level: 'h3' });
			});
			it('Render <h3>', () => {
				expect(component.html).to.include('h3');
			});
		});
	});
});

describe('Test : Props.none', () => {
	let component;
	before(async () => {
		component = await getComponent({ none: true });
	});
	it('Render class="primary-headline"', () => {
		expect(component.html).to.include('class').and.to.include('primary-headline').and.to.include('--tt-key:none;');
	});
});

describe('Test: Prop.base', () => {
	let component;
	before(async () => {
		component = await getComponent({ base: 42 });
	});
	it('Render: <style>.primary-headline {--tt-base:42;}', () => {
		expect(component.html).to.include('style').and.to.include('--tt-base:42');
	});
});

describe('Test: Prop.scale', () => {
	let component;
	before(async () => {
		component = await getComponent({ scale: 0.5 });
	});
	it('Render: <style>.primary-headline {--tt-scale:0.5;}', () => {
		expect(component.html).to.include('style').and.to.include('--tt-scale:0.5');
	});
});

describe('Test: Prop.ease', () => {
	let component;
	before(async () => {
		component = await getComponent({ ease: 'ease-in' });
	});
	it('Render: <style>.primary-headline {--tt-ease:ease-in;}', () => {
		expect(component.html).to.include('style').and.to.include('--tt-ease:ease-in');
	});
});

describe('Test: Prop.key', () => {
	let component;
	before(async () => {
		component = await getComponent({ key: 'test' });
	});
	it('Render: <style>.primary-headline {--tt-key:test;}', () => {
		expect(component.html).to.include('style').and.to.include('--tt-key:test;');
	});
});

describe('Test: Prop.none', () => {
	let component;
	before(async () => {
		component = await getComponent({ none: true });
	});
	it('Render: <style>.primary-headline {--tt-key:none;}', () => {
		expect(component.html).to.include('style').and.to.include('--tt-key:none;');
	});
});
describe('👓 <Headline  key="special" base={42} scale={0.5} ease=\'ease-in\' id="test"/>', () => {
	let component;
	before(async () => {
		component = await getComponent({ level: 'h2', key: 'special', ease: 'ease-in', base: 42, scale: 0.5, id: 'test', class: 'flex red' });
		console.log(component.html);
	});
	it('Render: `<style>.primary-headline-**UUID** {--tt-key:special;--tt-ease:ease-in;--tt-base:42;--tt-scale:0.5;}</style><h2 class="primary-headline-**UUID** flex red"/>', () => {
		expect(component.html)
			.to.include('style')
			.and.to.include('primary-headline')
			.and.to.include('--tt-key:special;')
			.and.to.include('--tt-ease:ease-in;')
			.and.to.include('--tt-base:42;')
			.and.to.include('--tt-scale:0.5;')
			.and.to.include('h2')
			.and.to.include('class')
			.and.to.include(`flex red"`)
			.and.to.include('id="test"');
	});
});
