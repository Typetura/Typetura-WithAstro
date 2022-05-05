import { expect } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

const getComponent = async (props) => {
	try {
		return await (
			await getComponentOutput('./packages/typetura/components/SubHeadline.astro', { ...props })
		).html;
	} catch (error) {
		return error;
	}
};

describe('Test : <SubHeadline/>', () => {
	describe('Test range of <SubHeadline/> Components', () => {
		let component;
		describe('Check Default Output', () => {
			before(async () => {
				component = await getComponent();
			});
			it('Render Default <h2>', () => {
				expect(component).to.include('h2');
			});
		});
		describe('level = 3', () => {
			before(async () => {
				component = await getComponent({ level: 3 });
			});
			it('Render <h3>', () => {
				expect(component).to.include('h3');
			});
		});
		describe('level = "h3"', () => {
			before(async () => {
				component = await getComponent({ level: 'h3' });
			});
			it('Render <h3>', () => {
				expect(component).to.include('h3');
			});
		});
		describe('level = 4', () => {
			before(async () => {
				component = await getComponent({ level: 4 });
			});
			it('Render <h4>', () => {
				expect(component).to.include('h4');
			});
		});
		describe('level = "h4"', () => {
			before(async () => {
				component = await getComponent({ level: 'h4' });
			});
			it('Render <h4>', () => {
				expect(component).to.include('h4');
			});
		});
		describe('level = 5', () => {
			before(async () => {
				component = await getComponent({ level: 5 });
			});
			it('Render <h5>', () => {
				expect(component).to.include('h5');
			});
		});
		describe('level = "h5"', () => {
			before(async () => {
				component = await getComponent({ level: 'h5' });
			});
			it('Render <h5>', () => {
				expect(component).to.include('h5');
			});
		});
	});

	describe('Test : Props.none', () => {
		let component;
		before(async () => {
			component = await getComponent({ none: true });
		});
		it('Render class="primary-subheadline-**UUID**"', () => {
			expect(component).to.include('class').and.to.include('primary-subheadline').and.to.include('--tt-key:none;');
		});
	});

	describe('Test: Prop.base', () => {
		let component;
		before(async () => {
			component = await getComponent({ base: 42 });
		});
		it('Render: <style>.primary-subheadline-**UUID** {--tt-base:42;}', () => {
			expect(component).to.include('style').and.to.include('.primary-subheadline').and.to.include('--tt-base:42');
		});
	});

	describe('Test: Prop.scale', () => {
		let component;
		before(async () => {
			component = await getComponent({ scale: 0.5 });
		});
		it('Render: <style>.primary-subheadline-**UUID** {--tt-scale:0.5;}', () => {
			expect(component).to.include('style').and.to.include('.primary-subheadline').and.to.include('--tt-scale:0.5');
		});
	});

	describe('Test: Prop.ease', () => {
		let component;
		before(async () => {
			component = await getComponent({ ease: 'ease-in' });
		});
		it('Render: <style>.primary-subheadline-**UUID** {--tt-ease:ease-in;}', () => {
			expect(component).to.include('style').and.to.include('.primary-subheadline').and.to.include('--tt-ease:ease-in');
		});
	});

	describe('Test: Prop.key', () => {
		let component;
		before(async () => {
			component = await getComponent({ key: 'test' });
		});
		it('Render: <style>.primary-subheadline-**UUID** {--tt-key:test;}', () => {
			expect(component).to.include('style').and.to.include('.primary-subheadline').and.to.include('--tt-key:test;');
		});
	});

	describe('👓 <SubHeadline level="h3" key="special" base={42} scale={0.5} ease=\'ease-in\' id="test"/>', () => {
		let component;
		before(async () => {
			component = await getComponent({ level: 'h3', key: 'special', ease: 'ease-in', base: 42, scale: 0.5, id: 'test', class: 'flex red' });
		});
		it('Render: `<style>.primary-subheadline-**UUID** {--tt-key:special;--tt-ease:ease-in;--tt-base:42;--tt-scale:0.5;}</style><h3 class="primary-headline-**UUID** flex red"/>', () => {
			expect(component)
				.to.include('style')
				.and.to.include('primary-subheadline')
				.and.to.include('--tt-key:special;')
				.and.to.include('--tt-ease:ease-in;')
				.and.to.include('--tt-base:42;')
				.and.to.include('--tt-scale:0.5;')
				.and.to.include('h3')
				.and.to.include('class')
				.and.to.include(`flex red"`)
				.and.to.include('id="test"');
		});
	});
});
