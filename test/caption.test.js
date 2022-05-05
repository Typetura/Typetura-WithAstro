import { expect } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

export const getComponent = async (props) => {
	try {
		return await (
			await getComponentOutput(`./packages/typetura/components/Caption.astro`, { ...props })
		).html;
	} catch (error) {
		return error;
	}
};

describe('Test: <Caption/>', () => {
	describe('Primary render test: <Caption/> ', () => {
		let component;
		before(async () => {
			component = await getComponent();
		});
		it('Render: <p class="caption-**UUID**"></p>', () => {
			expect(component).to.include('<p').and.to.include('class').and.to.include('.caption').and.include('</p>');
		});
	});

	describe('Prop Test: Props.is', () => {
		let component;

		describe("is = 'caption'", () => {
			before(async () => {
				component = await getComponent({ is: 'caption' });
			});
			it('Render: <caption class="caption-**UUID**"></caption>', () => {
				expect(component).to.include('<caption').and.to.include('class').and.to.include('.caption').and.include('</caption>');
			});
		});
		describe("is = 'figcaption'", () => {
			before(async () => {
				component = await getComponent({ is: 'figcaption' });
			});
			it('Render: <figcaption class="caption-**UUID**"></figcaption>', () => {
				expect(component).to.include('<figcaption').and.to.include('class').and.to.include('.caption').and.include('</figcaption>');
			});
		});
		describe("is = 'div'", () => {
			before(async () => {
				component = await getComponent({ is: 'div' });
			});
			it('Render: <div class="caption-**UUID**"></div>', () => {
				expect(component).to.include('<div').and.to.include('class').and.to.include('.caption').and.include('</div>');
			});
		});
	});

	describe('Prop Test: Props.none', () => {
		let component;
		before(async () => {
			component = await getComponent({ none: true });
		});
		it('Render: `<style>.caption-**UUID**{--tt-key:none;}</style>', () => {
			expect(component).to.include('style').and.to.include('.caption').and.to.include('--tt-key:none;');
		});
	});

	describe('Prop Test: Props.key', () => {
		let component;
		before(async () => {
			component = await getComponent({ key: 'test' });
		});
		it('Render: `<style>.caption-**UUID**{--tt-key:test;}</style>', () => {
			expect(component).to.include('style').and.to.include('.caption').and.to.include('--tt-key:test;');
		});
	});

	describe('Prop Test: Props.base', () => {
		let component;
		before(async () => {
			component = await getComponent({ base: 42 });
		});
		it('Render: `<style>.caption-**UUID**{--tt-base:42;}</style>', () => {
			expect(component).to.include('style').and.to.include('.caption').and.to.include('--tt-base:42;');
		});
	});

	describe('Prop Test: Props.scale', () => {
		let component;
		before(async () => {
			component = await getComponent({ scale: 0.5 });
		});
		it('Render: `<style>.caption-**UUID**{--tt-scale:0.5;}</style>', () => {
			expect(component).to.include('style').and.to.include('.caption').and.to.include('--tt-scale:0.5;');
		});
	});

	describe('Prop Test: Props.ease', () => {
		let component;
		before(async () => {
			component = await getComponent({ ease: 'ease-in' });
		});
		it('Render: `<style>.caption-**UUID**{--tt-ease:ease-in;}</style>', () => {
			expect(component).to.include('style').and.to.include('.caption').and.to.include('--tt-ease:ease-in;');
		});
	});

	describe('👓 <Caption is="div" key="div" base={42} scale={0.5} ease=\'ease-in\'/ id="test">', () => {
		let component;
		before(async () => {
			component = await getComponent({ is: 'div', key: 'div', ease: 'ease-in', base: 42, scale: 0.5, id: 'test' });
		});
		it('Render: `<style>.caption-**UUID** {--tt-key:div;--tt-ease:ease-in;--tt-base:42;--tt-scale:0.5;}</style><div class="caption-**UUID**" id="test"></div>', () => {
			expect(component)
				.to.include('style')
				.and.to.include('--tt-key:div;')
				.and.to.include('--tt-ease:ease-in;')
				.and.to.include('--tt-base:42;')
				.and.to.include('--tt-scale:0.5;')
				.and.to.include('div')
				.and.to.include('class')
				.and.to.include('.caption')
				.and.to.include('id="test"');
		});
	});
});
