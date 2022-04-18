import { expect, should } from 'chai';
import { getComponentOutput } from 'astro-component-tester';
import { error } from 'console';

const exectute = (fn) => {
	return {
		withArgs: function () {
			const args = Array.prototype.slice.call(arguments);
			fn(args);
		},
	};
};
const getComponent = async (props) => {
	try {
		return await getComponentOutput('./packages/typetura/Typetura.astro', { ...props });
	} catch (error) {
		throw new Error(error);
	}
};

describe('Test: <Typetura/> Component', () => {
	let component;

	describe('Output Primary render test:\n ', () => {
		before(async () => {
			component = await getComponentOutput('./packages/typetura/Typetura.astro');
		});
		it("Render a <script src='cdn'> && <style> with the default base and style applied</style>", () => {
			expect(component.html).to.equal(
				'<head><script src="https://cdn.jsdelivr.net/gh/scottkellum/typetura.js@master/js/typetura.min.js"></script>\n' +
					'\t<style>\n' +
					'\t:root{\n' +
					'\t\t--tt-base:20;\n' +
					'\t\t--tt-scale:1;\n' +
					'\t}\n' +
					'\t</style>\n' +
					'</head><body></body>'
			);
		});
	});

	describe('Render with JS Output', () => {
		before(async () => {
			component = await getComponentOutput('./packages/typetura/Typetura.astro', { js: true });
		});
		it(``, () => {
			expect(component.html).to.include('window.typetura');
		});
	});
	describe('Test Prop : <Typetura selectors/>', () => {
		describe('Single Prop Value', () => {
			before(async () => {
				component = await getComponentOutput('./packages/typetura/Typetura.astro', { js: true, selectors: '.test' });
			});
			it(`Render selectors output `, () => {
				expect(component.html).to.include(`selectors:[.test]`);
			});
		});
		describe('Multiple Prop Values', () => {
			before(async () => {
				component = await getComponentOutput('./packages/typetura/Typetura.astro', { js: true, selectors: '.test,test' });
			});
			it(`Render selectors output `, () => {
				expect(component.html).to.include(`selectors:[.test,test]`);
			});
		});
	});
	describe('Test Prop: <Typetura base/>', () => {
		describe('Check Default Prop  Value in CSS', () => {
			before(async () => {
				component = await getComponentOutput('./packages/typetura/Typetura.astro');
			});
			it(`Must return :root && --tt-base:20`, () => {
				expect(component.html).to.include(':root').and.to.include(`--tt-base:20`);
			});
		});
		describe('Check Default Prop Value in JS ', () => {
			before(async () => {
				component = await getComponentOutput('./packages/typetura/Typetura.astro', { js: true });
			});
			it(`Must return window && base:20 `, () => {
				expect(component.html).to.include(`window.typetura`).and.to.include('base:20');
			});
		});
		describe('Alternative Base Value in CSS', () => {
			before(async () => {
				component = await getComponentOutput('./packages/typetura/Typetura.astro', { base: 10 });
			});
			it(`Reflects an alternate Base Value of 10 `, () => {
				expect(component.html).to.include(':root').and.to.include(`base:10`);
			});
		});
		describe('Alternative Base Value in JS', () => {
			before(async () => {
				component = await getComponentOutput('./packages/typetura/Typetura.astro', { js: true, base: 10 });
			});
			it(`Reflects an alternate Base Value of 10 `, () => {
				expect(component.html).to.include('window.typetura').and.to.include(`base:10`);
			});
		});
	});
	describe('Test Prop: <Typetura scale/>', () => {
		describe('Check Default Prop  Value in CSS', () => {
			before(async () => {
				component = await getComponentOutput('./packages/typetura/Typetura.astro');
			});
			it(`Must return :root && --tt-scale:1`, () => {
				expect(component.html).to.include(':root').and.to.include(`--tt-scale:1`);
			});
		});
		describe('Check Default Prop Value in JS ', () => {
			before(async () => {
				component = await getComponentOutput('./packages/typetura/Typetura.astro', { js: true });
			});
			it(`Must return window && scale:1`, () => {
				expect(component.html).to.include(`window.typetura`).and.to.include('scale:1');
			});
		});
		describe('Alternative Scale Value in CSS', () => {
			before(async () => {
				component = await getComponentOutput('./packages/typetura/Typetura.astro', { scale: 0.5 });
			});
			it(`Reflects an alternate Scale Value of 0.5 `, () => {
				expect(component.html).to.include(':root').and.to.include(`scale:0.5`);
			});
		});
		describe('Alternative Scale Value in 0.5', () => {
			before(async () => {
				component = await getComponentOutput('./packages/typetura/Typetura.astro', { js: true, scale: 0.5 });
			});
			it(`Reflects an alternate Scale Value of 0.5 `, () => {
				expect(component.html).to.include('window.typetura').and.to.include(`scale:0.5`);
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
