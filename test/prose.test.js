import { expect } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

export const getComponent = async (props) => {
	try {
		return await (
			await getComponentOutput(`./packages/typetura/components/Prose.astro`, { ...props })
		).html;
	} catch (error) {
		return error;
	}
};

describe('Test: <Prose/>', () => {
	describe('Primary render test: <Prose/> ', () => {
		let component;
		before(async () => {
			component = await getComponent();
		});
		it('Render: <div class="typetura-prose"></div>', () => {
			expect(component).to.include('<div').and.to.include('class').and.to.include('typetura-prose').and.include('</div>');
		});
	});

	describe('Prop Test: Props.is', () => {
		let component;

		describe("is = 'div'", () => {
			before(async () => {
				component = await getComponent({ is: 'div' });
			});
			it('Render: <div class="typetura-prose"></div>', () => {
				expect(component).to.include('<div').and.to.include('class').and.to.include('typetura-prose').and.include('</div>');
			});
		});
		describe("is = 'article'", () => {
			before(async () => {
				component = await getComponent({ is: 'article' });
			});
			it('Render: <article class="typetura-prose"></article>', () => {
				expect(component).to.include('<article').and.to.include('class').and.to.include('typetura-prose').and.include('</article>');
			});
		});
		describe("is = 'div'", () => {
			before(async () => {
				component = await getComponent({ is: 'section' });
			});
			it('Render: <section class="typetura-prose"></section>', () => {
				expect(component).to.include('<section').and.to.include('class').and.to.include('typetura-prose').and.include('</section>');
			});
		});
	});

	describe('👓 <Prose is="article" id="test" class="flex red">', () => {
		let component;
		before(async () => {
			component = await getComponent({ is: 'article', id: 'test', class: 'flex red' });
		});
		it('Render: `<article class="typetura-prose" id="test"></article>', () => {
			expect(component).and.to.include('article').and.to.include('class').and.to.include('typetura-prose').and.to.include('flex').and.to.include('red').and.to.include('id="test"');
		});
	});
});
