import { expect } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

export const getComponent = async (props) => {
	try {
		return await getComponentOutput(`./packages/typetura/components/Caption.astro`, { ...props });
	} catch (error) {
		throw new Error('Error With Getting the Component Output', error);
	}
};

describe('Primary render test: <Caption/> ', () => {
	let component;
	before(async () => {
		component = await getComponent();
	});
	it('Render: <p class="caption"></p>', () => {
		expect(component.html).to.include('<p class="caption">').and.include('</p>');
	});
});

describe('Prop Test: Props.is', () => {
	let component;

	describe("is = 'caption'", () => {
		before(async () => {
			component = await getComponent({ is: 'caption' });
		});
		it('Render: <caption class="caption"></caption>', () => {
			expect(component.html).to.include('<caption class="caption">').and.include('</caption>');
		});
	});
	describe("is = 'figcaption'", () => {
		before(async () => {
			component = await getComponent({ is: 'figcaption' });
		});
		it('Render: <figcaption class="caption"></figcaption>', () => {
			expect(component.html).to.include('<figcaption class="caption">').and.include('</figcaption>');
		});
	});
	describe("is = 'div'", () => {
		before(async () => {
			component = await getComponent({ is: 'div' });
		});
		it('Render: <div class="caption"></div>', () => {
			expect(component.html).to.include('<div class="caption">').and.include('</div>');
		});
	});
});

describe('Prop Test: Props.none', () => {
	let component;
	before(async () => {
		component = await getComponent({ none: true });
	});
	it('Render: `<style>.caption{--tt-key:none;}</style>', () => {
		expect(component.html).to.include('style').and.to.include('--tt-key:none;');
	});
});

describe('Prop Test: Props.key', () => {
	let component;
	before(async () => {
		component = await getComponent({ key: 'test' });
	});
	it('Render: `<style>.caption{--tt-key:test;}</style>', () => {
		expect(component.html).to.include('style').and.to.include('--tt-key:test;');
	});
});
describe('Prop Test: Props.key', () => {
	let component;
	before(async () => {
		component = await getComponent({ key: 'test' });
	});
	it('Render: `<style>.caption{--tt-key:test;}</style>', () => {
		expect(component.html).to.include('style').and.to.include('--tt-key:test;');
	});
});
describe('Prop Test: Props.base', () => {
	let component;
	before(async () => {
		component = await getComponent({ base: 42 });
	});
	it('Render: `<style>.caption{--tt-base:42;}</style>', () => {
		expect(component.html).to.include('style').and.to.include('--tt-base:42;');
	});
});
describe('Prop Test: Props.scale', () => {
	let component;
	before(async () => {
		component = await getComponent({ scale: 0.5 });
	});
	it('Render: `<style>.caption{--tt-scale:0.5;}</style>', () => {
		expect(component.html).to.include('style').and.to.include('--tt-scale:0.5;');
	});
});
describe('Prop Test: Props.ease', () => {
	let component;
	before(async () => {
		component = await getComponent({ ease: 'ease-in' });
	});
	it('Render: `<style>.caption{--tt-ease:ease-in;}</style>', () => {
		expect(component.html).to.include('style').and.to.include('--tt-ease:ease-in;');
	});
});
describe('👓 <Caption is="div" key="div" base={42} scale={0.5} ease=\'ease-in\'/>', () => {
	let component;
	before(async () => {
		component = await getComponent({ is: 'div', key: 'div', ease: 'ease-in', base: 42, scale: 0.5, id: 'test' });
	});
	it('Render: `<style>.caption {--tt-key:div;--tt-ease:ease-in;--tt-base:42;--tt-scale:0.5;}</style><div class="caption" id="test">', () => {
		expect(component.html)
			.to.include('style')
			.and.to.include('--tt-key:div;')
			.and.to.include('--tt-ease:ease-in;')
			.and.to.include('--tt-base:42;')
			.and.to.include('--tt-scale:0.5;')
			.and.to.include('div')
			.and.to.include(`class="caption"`)
			.and.to.include('id="test"');
	});
});
