import { expect, should } from 'chai';
import { getComponentOutput } from 'astro-component-tester';
import { error } from 'console';

const getComponent = async (props) => {
	try {
		return await getComponentOutput('./packages/typetura/Headline.astro', { ...props });
	} catch (error) {
		throw new Error(error);
	}
};

describe('Test: <Headline />', () => {
	let component;
	describe('Checks a range of <Headline/>s', () => {
		describe('Check Default Output', () => {
			before(async () => {
				component = await getComponent();
			});
			it('Render Default <h1>', () => {
				expect(component.html).to.include('h1');
			});
		});
		describe('level = 1', () => {
			before(async () => {
				component = await getComponent({ level: 1 });
			});
			it('Render <h1>', () => {
				expect(component.html).to.include('h1');
			});
		});
		describe('level = 2', () => {
			before(async () => {
				component = await getComponent({ level: 2 });
			});
			it('Render <h2>', () => {
				expect(component.html).to.include('h2');
			});
		});
		describe('level = 3', () => {
			before(async () => {
				component = await getComponent({ level: 3 });
			});
			it('Render <h3>', () => {
				expect(component.html).to.include('h3');
			});
		});
		describe('level = 4', () => {
			before(async () => {
				component = await getComponent({ level: 4 });
			});
			it('Render <h4>', () => {
				expect(component.html).to.include('h4');
			});
		});
		// describe('level = 5', () => {
		// 	before(async () => {
		// 		component = await getComponent({ level: 5 });
		// 	});
		// 	it('Should throw Error', () => {
		// 		//Need to figure out this test
		// 	});
		// });
	});
	describe('Check Props.sub', () => {
		describe('Primary Headline - no props.sub', () => {
			before(async () => {
				component = await getComponent();
			});
			it('Render class="primary-headline"', () => {
				expect(component.html).to.include('class').and.to.include('primary-headline');
			});
		});
		describe('Primary SubHeadline - props.sub', () => {
			before(async () => {
				component = await getComponent({ sub: true });
			});
			it('Render class="primary-subheadline', () => {
				expect(component.html).to.include('class').and.to.include('primary-subheadline');
			});
		});
	});
	describe('Check Props.section', () => {
		describe('Section Headline - props.section', () => {
			before(async () => {
				component = await getComponent({ section: true });
			});
			it('Render class="primary-headline"', () => {
				expect(component.html).to.include('class').and.to.include('section-headline');
			});
		});
		describe('SubSection Headline - props.section && props.sub', () => {
			before(async () => {
				component = await getComponent({ section: true, sub: true });
			});
			it('Render class="primary-subheadline"', () => {
				expect(component.html).to.include('class').and.to.include('section-subheadline');
			});
		});
	});
	describe('Check Props.label', () => {
		describe('Section Label - props.label', () => {
			before(async () => {
				component = await getComponent({ label: true });
			});
			it('Render class="section-label"', () => {
				expect(component.html).to.include('class').and.to.include('section-label');
			});
		});
		describe('Section Label - props.section && props.label', () => {
			before(async () => {
				component = await getComponent({ section: true, label: true });
			});
			it('Render class="section-label"', () => {
				expect(component.html).to.include('class').and.to.include('section-label');
			});
		});
	});
	describe('Check passing of class attributes', () => {
		describe('Primary Headline + additional class ', () => {
			before(async () => {
				component = await getComponent({ class: 'test' });
			});
			it('Render class="primary-headline test"', () => {
				expect(component.html).to.include('class').and.to.include('primary-headline test');
			});
		});
		describe('Primary Headline + additional classes ', () => {
			before(async () => {
				component = await getComponent({ class: 'test red flex' });
			});
			it('Render class="primary-headline test red flex"', () => {
				expect(component.html).to.include('class').and.to.include('primary-headline test red flex');
			});
		});
	});
	describe('Check passing of additional html attributes', () => {
		describe('Passing through an id="test" ', () => {
			before(async () => {
				component = await getComponent({ id: 'test' });
			});
			it('Render id="test"', () => {
				expect(component.html).to.include('id="test"');
			});
		});
		describe('Passing through data-value attributes ', () => {
			before(async () => {
				component = await getComponent({ 'data-value': 42 });
			});
			it('Render data-value="42"', () => {
				expect(component.html).to.include('data-value="42"');
			});
		});
		describe('Passing through aria attributes ', () => {
			before(async () => {
				component = await getComponent({ 'aria-labelledby': 'Joe' });
			});
			it('Render aria-labelledby="Joe"', () => {
				expect(component.html).to.include('aria-labelledby="Joe"');
			});
		});
		// describe('', () => {
		// 	before(async () => {
		// 		component = await getComponent();
		// 	});
		// 	it('', () => {
		// 		expect(component);
		// 	});
		// });
	});
});
