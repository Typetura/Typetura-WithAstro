import { expect, should } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

export const getComponent = async (props) => {
	try {
		return await getComponentOutput(`./packages/typetura/components/Blockquote.astro`, { ...props });
	} catch (error) {
		throw new Error('Error With Getting the Component Output', error);
	}
};

describe('Primary render test: <Blockquote/> ', () => {
	let component;
	before(async () => {
		component = await getComponent();
	});
	it('Render: <blockquote class="blockquote"></blockquote>', () => {
		expect(component.html).to.include('<blockquote class="blockquote">').and.include('</blockquote>');
	});
});

describe('Prop Test: Props.as', () => {
	let component;

	describe("as = 'p'", () => {
		before(async () => {
			component = await getComponent({ as: 'p' });
		});
		it('Render: <p class="blockquote"></p>', () => {
			expect(component.html).to.include('<p class="blockquote">').and.include('</p>');
		});
	});
	describe("as = 'div'", () => {
		before(async () => {
			component = await getComponent({ as: 'div' });
		});
		it('Render: <div class="blockquote"></div>', () => {
			expect(component.html).to.include('<div class="blockquote">').and.include('</div>');
		});
	});
});

describe('Prop Test: Props.none', () => {
	let component;
	before(async () => {
		component = await getComponent({ none: true });
	});
	it('Render: `<style>.blockquote{--tt-key:none;}</style>', () => {
		expect(component.html).to.include('style').and.to.include('--tt-key:none;');
	});
});

describe('Prop Test: Props.key', () => {
	let component;
	before(async () => {
		component = await getComponent({ key: 'test' });
	});
	it('Render: `<style>.blockquote{--tt-key:test;}</style>', () => {
		expect(component.html).to.include('style').and.to.include('--tt-key:test;');
	});
});
describe('Prop Test: Props.key', () => {
	let component;
	before(async () => {
		component = await getComponent({ key: 'test' });
	});
	it('Render: `<style>.blockquote{--tt-key:test;}</style>', () => {
		expect(component.html).to.include('style').and.to.include('--tt-key:test;');
	});
});
describe('Prop Test: Props.base', () => {
	let component;
	before(async () => {
		component = await getComponent({ base: 42 });
	});
	it('Render: `<style>.blockquote{--tt-base:42;}</style>', () => {
		expect(component.html).to.include('style').and.to.include('--tt-base:42;');
	});
});
describe('Prop Test: Props.scale', () => {
	let component;
	before(async () => {
		component = await getComponent({ scale: 0.5 });
	});
	it('Render: `<style>.blockquote{--tt-scale:0.5;}</style>', () => {
		expect(component.html).to.include('style').and.to.include('--tt-scale:0.5;');
	});
});
describe('Prop Test: Props.ease', () => {
	let component;
	before(async () => {
		component = await getComponent({ ease: 'ease-in' });
	});
	it('Render: `<style>.blockquote{--tt-ease:ease-in;}</style>', () => {
		expect(component.html).to.include('style').and.to.include('--tt-ease:ease-in;');
	});
});
describe('👓 <Blockquote as="div" key="div" base={42} scale={0.5} ease=\'ease-in\'/>', () => {
	let component;
	before(async () => {
		component = await getComponent({ as: 'div', key: 'div', ease: 'ease-in', base: 42, scale: 0.5 });
		console.log(component.html);
	});
	it('Render: `<style>.blockquote{--tt-key:div;--tt-ease:ease-in;--tt-base:42;--tt-scale:0.5;}</style><div class="blockquote"/>', () => {
		expect(component.html)
			.to.include('style')
			.and.to.include('--tt-key:div;')
			.and.to.include('--tt-scale:0.5;')
			.and.to.include('--tt-base:42;')
			.and.to.include('--tt-ease:ease-in;')
			.and.to.include('div')
			.and.to.include('class=blockquote');
	});
});
