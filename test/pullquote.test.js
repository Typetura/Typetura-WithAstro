import { expect, should } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

export const getComponent = async (props) => {
	try {
		return await (
			await getComponentOutput(`./packages/typetura/components/Pullquote.astro`, { ...props })
		).html;
	} catch (error) {
		return error;
	}
};
describe('Test : <Pullquote/>', () => {
	describe('Primary render test: <Pullquote/> ', () => {
		let component;
		before(async () => {
			component = await getComponent();
		});
		it('Default Render: <p class="pullquote"></p>', () => {
			expect(component).to.include('<p').and.to.include('class').and.to.include('pullquote').and.include('</p>');
		});
	});

	describe('Prop Test: Props.is', () => {
		let component;

		describe("is = 'blockquote'", () => {
			before(async () => {
				component = await getComponent({ is: 'blockquote' });
			});
			it('Render: <blockquote class="pullquote"></blockquote>', () => {
				expect(component).to.include('<blockquote').and.to.include('class').and.to.include('.pullquote').and.include('</blockquote>');
			});
		});
		describe("is = 'p'", () => {
			before(async () => {
				component = await getComponent({ is: 'p' });
			});
			it('Render: <p class="pullquote"></p>', () => {
				expect(component).to.include('<p').and.to.include('class').and.to.include('.pullquote').and.include('</p>');
			});
		});
	});

	describe('Prop Test: Props.none', () => {
		let component;
		before(async () => {
			component = await getComponent({ none: true });
		});
		it('Render: `<style>.pullquote-**UUID** {--tt-key:none;}</style>', () => {
			expect(component).to.include('style').and.to.include('.pullquote').and.to.include('--tt-key:none;');
		});
	});

	describe('Prop Test: Props.key', () => {
		let component;
		before(async () => {
			component = await getComponent({ key: 'test' });
		});
		it('Render: `<style>.pullquote-**UUID** {--tt-key:test;}</style>', () => {
			expect(component).to.include('style').and.to.include('.pullquote').and.to.include('--tt-key:test;');
		});
	});

	describe('Prop Test: Props.base', () => {
		let component;
		before(async () => {
			component = await getComponent({ base: 42 });
		});
		it('Render: `<style>.pullquote-**UUID** {--tt-base:42;}</style>', () => {
			expect(component).to.include('style').and.to.include('.pullquote').and.to.include('--tt-base:42;');
		});
	});

	describe('Prop Test: Props.scale', () => {
		let component;
		before(async () => {
			component = await getComponent({ scale: 0.5 });
		});
		it('Render: `<style>.pullquote-**UUID** {--tt-scale:0.5;}</style>', () => {
			expect(component).to.include('style').and.to.include('.pullquote').and.to.include('--tt-scale:0.5;');
		});
	});

	describe('Prop Test: Props.ease', () => {
		let component;
		before(async () => {
			component = await getComponent({ ease: 'ease-in' });
		});
		it('Render: `<style>.pullquote-**UUID** {--tt-ease:ease-in;}</style>', () => {
			expect(component).to.include('style').and.to.include('.pullquote').and.to.include('--tt-ease:ease-in;');
		});
	});

	describe('👓 <Pullquote is="div" key="div" base={42} scale={0.5} ease=\'ease-in\' id="test"/>', () => {
		let component;
		before(async () => {
			component = await getComponent({ is: 'blockquote', key: 'special', ease: 'ease-in', base: 42, scale: 0.5, class: 'flex red', id: 'test' });
		});
		it('Render: `<style>.pullquote=**UUID** {--tt-key:special;--tt-ease:ease-in;--tt-base:42;--tt-scale:0.5;}</style><blockquote class="pullquote-**UUID** flex red" id="test"/>', () => {
			expect(component)
				.to.include('style')
				.and.to.include('--tt-key:special;')
				.and.to.include('--tt-ease:ease-in;')
				.and.to.include('--tt-base:42;')
				.and.to.include('--tt-scale:0.5;')
				.and.to.include('blockquote')
				.and.to.include(`class`)
				.and.to.include('pullquote')
				.and.to.include('flex red')
				.and.to.include(`id="test"`);
		});
	});
});
