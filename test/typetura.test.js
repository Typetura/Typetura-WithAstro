import { expect } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

const getComponent = async (props) => {
	try {
		return await getComponentOutput('./packages/typetura/components/Typetura.astro', { ...props });
	} catch (error) {
		throw new Error(error);
	}
};

describe('Test: <Typetura/> Component', () => {
	let component;

	describe('Output Primary render test:\n ', () => {
		before(async () => {
			component = await getComponent();
		});
		it("Render a <script src='cdn'> && <style> with the default base and style applied</style>", () => {
			expect(component.html)
				.to.include(`script`)
				.and.to.include(`src="https://cdn.jsdelivr.net/gh/scottkellum/typetura.js@master/js/typetura.min.js"`)
				.and.to.include('style')
				.and.to.include(`:root`)
				.and.to.include(`--tt-base:20;`)
				.and.to.include(`--tt-scale:1;`);
		});
	});

	describe('Render with JS Output', () => {
		before(async () => {
			component = await getComponent({ js: true });
		});
		it(`Render : <script>window.typetura = {}</script>`, () => {
			expect(component.html).to.include('script').and.to.include('window.typetura');
		});
	});
	describe('Test : Prop.selectors', () => {
		describe('Single Selector', () => {
			before(async () => {
				component = await getComponent({ js: true, selectors: '.test' });
			});
			it(`Render : selector:['.test'] `, () => {
				expect(component.html).to.include(`selectors:['.test']`);
			});
		});
		describe('Multiple Prop Values', () => {
			before(async () => {
				component = await getComponent({ js: true, selectors: '.test,test' });
			});
			it(`Render : selectors:['.test','test'] `, () => {
				expect(component.html).to.include(`selectors:['.test','test']`);
			});
		});
	});
	describe('Test Prop: <Typetura base/>', () => {
		describe('Check Default Prop  Value in CSS', () => {
			before(async () => {
				component = await getComponent();
			});
			it(`Render : :root {--tt-base:20}`, () => {
				expect(component.html).to.include(':root').and.to.include(`--tt-base:20`);
			});
		});
		describe('Check Default Prop Value in JS ', () => {
			before(async () => {
				component = await getComponent({ js: true });
			});
			it(`Render: window.typetura={base:20} `, () => {
				expect(component.html).to.include(`window.typetura`).and.to.include('base: 20');
			});
		});
		describe('Alternative Base Value in CSS', () => {
			before(async () => {
				component = await getComponent({ base: 10 });
			});
			it(`Reflects an alternate Base Value of 10 `, () => {
				expect(component.html).to.include(':root').and.to.include(`base:10`);
			});
		});
		describe('Alternative Base Value in JS', () => {
			before(async () => {
				component = await getComponent({ js: true, base: 10 });
			});
			it(`Reflects an alternate Base Value of 10 `, () => {
				expect(component.html).to.include('window.typetura').and.to.include(`base: 10`);
			});
		});
	});
	describe('Test Prop: <Typetura scale/>', () => {
		describe('Check Default Prop  Value in CSS', () => {
			before(async () => {
				component = await getComponent();
			});
			it(`Must return :root && --tt-scale:1`, () => {
				expect(component.html).to.include(':root').and.to.include(`--tt-scale:1`);
			});
		});
		describe('Check Default Prop Value in JS ', () => {
			before(async () => {
				component = await getComponent({ js: true });
			});
			it(`Must return window && scale:1`, () => {
				expect(component.html).to.include(`window.typetura`).and.to.include('scale: 1');
			});
		});
		describe('Alternative Scale Value in CSS', () => {
			before(async () => {
				component = await getComponent({ scale: 0.5 });
			});
			it(`Reflects an alternate Scale Value of 0.5 `, () => {
				expect(component.html).to.include(':root').and.to.include(`--tt-scale:0.5`);
			});
		});
		describe('Alternative Scale Value in 0.5', () => {
			before(async () => {
				component = await getComponent({ js: true, scale: 0.5 });
			});
			it(`Reflects an alternate Scale Value of 0.5 `, () => {
				expect(component.html).to.include('window.typetura').and.to.include(`scale: 0.5`);
			});
		});
	});
	// // Need To fix this test
	// describe('Test Prop: <Typetura pack/>', () => {
	// 	describe('No API Key declared in process.env', () => {
	// 		before(async () => {
	// 			try {
	// 				component = await getComponent({ pack: 'armonk' });
	// 			} catch (error) {
	// 				return error;
	// 			}
	// 		});
	// 		it('Should throw an error', () => {
	// 			console.log(error);
	// 			expect(component).to.equal(undefined);
	// 		});
	// 	});
	// });
});
