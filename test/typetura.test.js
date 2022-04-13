import { expect } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

describe('Example Tests', () => {

	it('should equal 2', () => {
		expect(1 + 1).to.equal(2);
	});

	describe('Component test', async () => {
		let component;

		before(async () => {
			component = await getComponentOutput('./packages/typetura/Typetura.astro');
		});

		it('', () => {
			expect(component.html).to.contain('');
		});
	});
});
