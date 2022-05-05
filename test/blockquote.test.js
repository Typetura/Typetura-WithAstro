import { expect } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

export const getComponent = async (props) => {
	try {
		return await (
			await getComponentOutput(`./packages/typetura/components/Blockquote.astro`, { ...props })
		).html;
	} catch (error) {
		return error;
	}
};
describe('Test: <Blockquote/>', () => {
	describe('Primary render test: <Blockquote/> ', () => {
		let component;
		before(async () => {
			component = await getComponent();
		});
		it('Render: <blockquote class="blockquote-**UUID**"></blockquote>', () => {
			expect(component).to.include('<blockquote ').and.to.include('class').and.to.include('blockquote').and.include('</blockquote>');
		});
	});

	describe('Prop Test: Props.as', () => {
		let component;

		describe("as = 'p'", () => {
			before(async () => {
				component = await getComponent({ is: 'p' });
			});
			it('Render: <p class="blockquote-**UUID* "></p>', () => {
				expect(component).to.include('<p ').and.to.include('class').and.to.include('blockquote').and.include('</p>');
			});
		});
		describe("as = 'div'", () => {
			before(async () => {
				component = await getComponent({ is: 'div' });
			});
			it('Render: <div class="blockquote-**UUID* "></div>', () => {
				expect(component).to.include('<div ').and.to.include('class').and.to.include('blockquote').and.include('</div>');
			});
		});
	});

	describe('Prop Test: Props.none', () => {
		let component;
		before(async () => {
			component = await getComponent({ none: true });
		});
		it('Render: `<style>.blockquote-**UUID* {--tt-key:none;}</style>', () => {
			expect(component).to.include('style').and.to.include('--tt-key:none;');
		});
	});

	describe('Prop Test: Props.key', () => {
		let component;
		before(async () => {
			component = await getComponent({ key: 'test' });
		});
		it('Render: `<style>.blockquote-**UUID* {--tt-key:test;}</style>', () => {
			expect(component).to.include('style').and.to.include('--tt-key:test;');
		});
	});

	describe('Prop Test: Props.base', () => {
		let component;
		before(async () => {
			component = await getComponent({ base: 42 });
		});
		it('Render: `<style>.blockquote-**UUID* {--tt-base:42;}</style>', () => {
			expect(component).to.include('style').and.to.include('--tt-base:42;');
		});
	});

	describe('Prop Test: Props.scale', () => {
		let component;
		before(async () => {
			component = await getComponent({ scale: 0.5 });
		});
		it('Render: `<style>.blockquote-**UUID* {--tt-scale:0.5;}</style>', () => {
			expect(component).to.include('style').and.to.include('--tt-scale:0.5;');
		});
	});

	describe('Prop Test: Props.ease', () => {
		let component;
		before(async () => {
			component = await getComponent({ ease: 'ease-in' });
		});
		it('Render: `<style>.blockquote-**UUID* {--tt-ease:ease-in;}</style>', () => {
			expect(component).to.include('style').and.to.include('--tt-ease:ease-in;');
		});
	});

	describe('👓 <Blockquote as="div" key="div" base={42} scale={0.5} ease=\'ease-in\' id="test"/>', () => {
		let component;
		before(async () => {
			component = await getComponent({ is: 'div', key: 'test', ease: 'ease-in', base: 42, scale: 0.5, id: 'test' });
		});
		it('Render: `<style>.blockquote-**UUID* {--tt-key:div;--tt-ease:ease-in;--tt-base:42;--tt-scale:0.5;}</style><div class="blockquote-**UUID* " id="test"/>', () => {
			expect(component)
				.to.include('style')
				.and.to.include('--tt-key:test;')
				.and.to.include('--tt-scale:0.5;')
				.and.to.include('--tt-base:42;')
				.and.to.include('--tt-ease:ease-in;')
				.and.to.include('div')
				.and.to.include('class')
				.and.to.include('blockquote')
				.and.to.include('id="test"');
		});
	});
});
