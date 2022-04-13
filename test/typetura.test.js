import { expect } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

describe('Example Tests', () => {
	// Simple test to get us started with the syntax
	it('should equal 2', () => {
		expect(1 + 1).to.equal(2);
	});

	// This show us how to write a test for our component's output using astro-component-tester
	describe('Component test', async () => {
		let component;

		// First get the component's output, this returns an object containing the generated html (`.html`)
		before(async () => {
			component = await getComponentOutput('./packages/typetura/Typetura.astro');
		});
		// Unless you modified /src/Component.astro, this should pass, as the component is empty apart from the frontmatter
		it('just saying hey', () => {
			expect(component.html).to.contain('');
		});
	});
});
