import { expect } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

describe('Test: <Typetura/> Component', () => {
	
	let component

	// Need To fix this test
	describe('Output Primary render test:\n ',  () => {
		before(async()=>{
			component = await getComponentOutput('./packages/typetura/Typetura.astro')
		})
		it('Render a <script src=\'cdn\'> && <style> with the default base and style applied</style>', () => {
			expect(component.html).to.equal('<head><script src="https://cdn.jsdelivr.net/gh/scottkellum/typetura.js@master/js/typetura.min.js"></script>\n' +
			'\t<style>\n' +
			'\t:root{\n' +
			'\t\t--tt-base:20;\n' +
			'\t\t--tt-scale:1;\n' +
			'\t}\n' +
			'\t</style>\n' +
			'</head><body></body>');
		});
	});

	describe('Render with JS Output',()=>{
		before(async()=>{
			component = await getComponentOutput('./packages/typetura/Typetura.astro',{js:true})
		})
		it(``,()=>{
			expect(component.html).to.include('window.typetura')
		})
	})
	describe('Test Prop : <Typetura selectors/>',()=>{
		describe('Single Prop Value',()=>{
			before(async()=>{
				component = await getComponentOutput('./packages/typetura/Typetura.astro',{js:true,selectors:'.test'})
				console.log(component.html)
			})
			it(`Render selectors output `,()=>{
				expect(component.html).to.include(`selectors:[.test]`)
			})
		})
		describe('Multiple Prop Values',()=>{
			before(async()=>{
				component = await getComponentOutput('./packages/typetura/Typetura.astro',{js:true,selectors:'.test,test'})
				console.log(component.html)
			})
			it(`Render selectors output `,()=>{
				expect(component.html).to.include(`selectors:[.test,test]`)
			})
		})
		
	})
	describe('Test Prop: <Typetura base/>',()=>{
		describe('Check Default Prop  Value in CSS',()=>{
			before(async()=>{
				component = await getComponentOutput('./packages/typetura/Typetura.astro')
				console.log(component.html)
			})
			it(`Must return :root && --tt-base:20`,()=>{
				expect(component.html).to.include(':root').and.to.include(`--tt-base:20`)
			})
		})
		describe('Check Default Prop Value in JS ',()=>{
			before(async()=>{
				component = await getComponentOutput('./packages/typetura/Typetura.astro',{js:true})
				console.log(component.html)
			})
			it(`Must return window && base:20 `,()=>{
				expect(component.html).to.include(`window.typetura`).and.to.include('base:20')
			})
		})
		describe('Alternative Base Value in CSS',()=>{
			before(async()=>{
				component = await getComponentOutput('./packages/typetura/Typetura.astro',{base:10})
				console.log(component.html)
			})
			it(`Reflects a alternate Base Value of 10 `,()=>{
				expect(component.html).to.include(':root').and.to.include(`base:10`)
			})
		})
		describe('Alternative Base Value in JS',()=>{
			before(async()=>{
				component = await getComponentOutput('./packages/typetura/Typetura.astro',{js:true,base:10})
				console.log(component.html)
			})
			it(`Reflects a alternate Base Value of 10 `,()=>{
				expect(component.html).to.include('window.typetura').and.to.include(`base:10`)
			})
		})
	})
});
