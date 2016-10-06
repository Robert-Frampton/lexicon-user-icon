'use strict';

import LexiconUserIcon from '../src/LexiconUserIcon';

let userIcon;

describe('LexiconUserIcon', () => {
	afterEach(() => {
		if (userIcon) {
			userIcon.dispose();
		}
	});

	it('should render default user icon', () => {
		userIcon = new LexiconUserIcon({
			name: 'TT'
		});

		assert.strictEqual(userIcon.element.outerHTML, __html__['test/fixture/testDefaultLexiconUserIcon.html']);
	});

	it('should render user icon with shape helper class', () => {
		userIcon = new LexiconUserIcon({
			name: 'TT',
			shape: 'rounded'
		});

		assert.strictEqual(userIcon.element.outerHTML, __html__['test/fixture/testShapeLexiconUserIcon.html']);
	});

	it('should append the provided element class to the button markup', () => {
		userIcon = new LexiconUserIcon({
			elementClasses: 'css-class',
			name: 'TT'
		});

		assert.strictEqual(userIcon.element.outerHTML, __html__['test/fixture/testElementClassesLexiconUserIcon.html']);
	});

	it('should render a lexicon icon inside the user icon using the provided spritemap and symbol', () => {
		userIcon = new LexiconUserIcon({
			icon: {
				elementClasses: 'icon-class',
				symbol: 'calendar'
			},
			spritemap: 'spritemap'
		});

		assert.strictEqual(userIcon.element.outerHTML, __html__['test/fixture/testIconLexiconUserIcon.html']);
	});

	it('should render user icon with image tag using image param as src', () => {
		userIcon = new LexiconUserIcon({
			image: '/path/to/image.png'
		});

		assert.strictEqual(userIcon.element.outerHTML, __html__['test/fixture/testImageLexiconUserIcon.html']);
	});

	it('should use the provided level to generate the user icon markup', () => {
		userIcon = new LexiconUserIcon({
			level: 'level'
		});

		assert.strictEqual(userIcon.element.outerHTML, __html__['test/fixture/testLevelLexiconUserIcon.html']);
	});

	it('should use the provided size to generate the user icon markup', () => {
		userIcon = new LexiconUserIcon({
			size: 'size'
		});

		assert.strictEqual(userIcon.element.outerHTML, __html__['test/fixture/testSizeLexiconUserIcon.html']);
	});
});
