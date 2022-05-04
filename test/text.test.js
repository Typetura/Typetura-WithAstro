import { expect, should } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

export const getComponent = async (props) => {
	try {
		return await (
			await getComponentOutput(`./packages/typetura/components/Text.astro`, { ...props })
		).html;
	} catch (error) {
		return error;
	}
};

describe('Test : <Text/>', () => {
	describe('Primary render test: <Text/> ', () => {
		let component;
		before(async () => {
			component = await getComponent();
		});
		it('Render: <p class="regular"></p>', () => {
			expect(component).to.include('<p').and.to.include('class').and.to.include('regular').and.include('</p>');
		});
	});

	describe('Prop Test: Props.big', () => {
		let component;
		before(async () => {
			component = await getComponent({ big: true });
		});
		it('Render : <p class="big">', () => {
			expect(component).to.include('<p').and.to.include('class').and.to.include('big').and.include('</p>');
		});
	});

	describe('Prop Test: Props.small', () => {
		let component;
		before(async () => {
			component = await getComponent({ small: true });
		});
		it('Render : <p class="small">', () => {
			expect(component).to.include('<p').and.to.include('class').and.to.include('small').and.include('</p>');
		});
	});

	describe('Prop Test: Props.none', () => {
		let component;
		before(async () => {
			component = await getComponent({ none: true });
		});
		it('Render: `<style>.text{--tt-key:none;}</style>', () => {
			expect(component).to.include('style').and.to.include('--tt-key:none;');
		});
	});

	describe('Prop Test: Props.key', () => {
		let component;
		before(async () => {
			component = await getComponent({ key: 'test' });
		});
		it('Render: `<style>.text{--tt-key:test;}</style>', () => {
			expect(component).to.include('style').and.to.include('--tt-key:test;');
		});
	});

	describe('Prop Test: Props.key', () => {
		let component;
		before(async () => {
			component = await getComponent({ key: 'test' });
		});
		it('Render: `<style>.text{--tt-key:test;}</style>', () => {
			expect(component).to.include('style').and.to.include('--tt-key:test;');
		});
	});

	describe('Prop Test: Props.base', () => {
		let component;
		before(async () => {
			component = await getComponent({ base: 42 });
		});
		it('Render: `<style>.text{--tt-base:42;}</style>', () => {
			expect(component).to.include('style').and.to.include('--tt-base:42;');
		});
	});

	describe('Prop Test: Props.scale', () => {
		let component;
		before(async () => {
			component = await getComponent({ scale: 0.5 });
		});
		it('Render: `<style>.text{--tt-scale:0.5;}</style>', () => {
			expect(component).to.include('style').and.to.include('--tt-scale:0.5;');
		});
	});

	describe('Prop Test: Props.ease', () => {
		let component;
		before(async () => {
			component = await getComponent({ ease: 'ease-in' });
		});
		it('Render: `<style>.text{--tt-ease:ease-in;}</style>', () => {
			expect(component).to.include('style').and.to.include('--tt-ease:ease-in;');
		});
	});

	describe('👓 <Text key="test" base={42} scale={0.5} ease=\'ease-in\'/>', () => {
		let component;
		before(async () => {
			component = await getComponent({ small: true, key: 'test', ease: 'ease-in', base: 42, scale: 0.5, id: 'test' });
		});
		it('Render: `<style>.text{--tt-key:test;--tt-ease:ease-in;--tt-base:42;--tt-scale:0.5;}</style><p class="text"/>', () => {
			expect(component)
				.to.include('style')
				.and.to.include('--tt-key:test;')
				.and.to.include('--tt-scale:0.5;')
				.and.to.include('--tt-base:42;')
				.and.to.include('--tt-ease:ease-in;')
				.and.to.include('p')
				.and.to.include('class')
				.and.to.include('small')
				.and.to.include('id="test"');
		});
	});
});
