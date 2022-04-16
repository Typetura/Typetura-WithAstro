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
				component = await getComponentOutput('./packages/typetura/Typetura.astro',{js:true,selectors:'.test'})
				console.log(component.html)
			})
			it(`Render selectors output `,()=>{
				expect(component.html).to.include(`selectors:[.test]`)
			})
		})
		
	})
	describe('Test Prop: <Typetura base/>',()=>{
		before(async()=>{
			component = await getComponentOutput('./packages/typetura/Typetura.astro',{base:10})
			console.log(component.html)
		})
		it(`Changes the Base value`,()=>{
			expect(component.html).to.include(`base:10`)
		})
	})
});
