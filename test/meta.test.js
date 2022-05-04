import { expect, should } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

export const getComponent = async (props) => {
	try {
		return await (
			await getComponentOutput(`./packages/typetura/components/Meta.astro`, { ...props })
		).html;
	} catch (error) {
		return error;
	}
};

describe('Test: <Meta/>', () => {
	describe('Primary render test: <Meta/> ', () => {
		let component;
		before(async () => {
			component = await getComponent();
		});
		it('Render: <p class="meta"></p>', () => {
			expect(component).to.include('<p').and.to.include('class').and.to.include('meta').and.include('</p>');
		});
	});

	describe('Prop Test: Props.none', () => {
		let component;
		before(async () => {
			component = await getComponent({ none: true });
		});
		it('Render: `<style>.meta{--tt-key:none;}</style>', () => {
			expect(component).to.include('style').and.to.include('.meta').and.to.include('--tt-key:none;');
		});
	});

	describe('Prop Test: Props.key', () => {
		let component;
		before(async () => {
			component = await getComponent({ key: 'test' });
		});
		it('Render: `<style>.meta{--tt-key:test;}</style>', () => {
			expect(component).to.include('style').and.to.include('.meta').and.to.include('--tt-key:test;');
		});
	});

	describe('Prop Test: Props.key', () => {
		let component;
		before(async () => {
			component = await getComponent({ key: 'test' });
		});
		it('Render: `<style>.meta{--tt-key:test;}</style>', () => {
			expect(component).to.include('style').and.to.include('.meta').and.to.include('--tt-key:test;');
		});
	});

	describe('Prop Test: Props.base', () => {
		let component;
		before(async () => {
			component = await getComponent({ base: 42 });
		});
		it('Render: `<style>.meta{--tt-base:42;}</style>', () => {
			expect(component).to.include('style').and.to.include('.meta').and.to.include('--tt-base:42;');
		});
	});

	describe('Prop Test: Props.scale', () => {
		let component;
		before(async () => {
			component = await getComponent({ scale: 0.5 });
		});
		it('Render: `<style>.meta{--tt-scale:0.5;}</style>', () => {
			expect(component).to.include('style').and.to.include('.meta').and.to.include('--tt-scale:0.5;');
		});
	});

	describe('Prop Test: Props.ease', () => {
		let component;
		before(async () => {
			component = await getComponent({ ease: 'ease-in' });
		});
		it('Render: `<style>.meta{--tt-ease:ease-in;}</style>', () => {
			expect(component).to.include('style').and.to.include('.meta').and.to.include('--tt-ease:ease-in;');
		});
	});

	describe('👓 <Meta  key="special" base={42} scale={0.5} ease=\'ease-in\' id="test"/>', () => {
		let component;
		before(async () => {
			component = await getComponent({ key: 'special', ease: 'ease-in', base: 42, scale: 0.5, id: 'test', class: 'flex red' });
		});
		it('Render: `<style>.meta {--tt-key:special;--tt-ease:ease-in;--tt-base:42;--tt-scale:0.5;}</style><p class="meta flex red" id="test"/>', () => {
			expect(component)
				.to.include('style')
				.and.to.include('--tt-key:special;')
				.and.to.include('--tt-ease:ease-in;')
				.and.to.include('.meta')
				.and.to.include('--tt-base:42;')
				.and.to.include('--tt-scale:0.5;')
				.and.to.include('p')
				.and.to.include('class')
				.and.to.include('meta')
				.and.to.include('flex red')
				.and.to.include('id="test"');
		});
	});
});
