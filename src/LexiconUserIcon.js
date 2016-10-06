import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './LexiconUserIcon.soy';

import LexiconIcon from 'lexicon-icon'; // jshint ignore:line

/**
 * Implementation of the Lexicon User Icon
 *
 * @see  {@link http://liferay.github.io/lexicon/content/user-icons/|Lexicon Definition}
 */
class LexiconUserIcon extends Component {
}

/**
 * State definition.
 * @type {!Object}
 * @static
 */
LexiconUserIcon.STATE = {
	/**
	 * Symbol and elementClasses of icon component.
	 * @default undefined
	 * @instance
	 * @memberof LexiconUserIcon
	 * @type {!{elementClasses: string, symbol: string}}
	 */
	icon: {
		validator: core.isObject
	},

	/**
	 * Url of image.
	 * @default undefined
	 * @instance
	 * @memberof LexiconUserIcon
	 * @type {string}
	 */
	image: {
		validator: core.isString
	},

	/**
	 * Level of user icon, value appended to "user-icon-".
	 * @default undefined
	 * @instance
	 * @memberof LexiconUserIcon
	 * @type {string}
	 */
	level: {
		validator: core.isString
	},

	/**
	 * Text value centered inside user icon element.
	 * @default undefined
	 * @instance
	 * @memberof LexiconUserIcon
	 * @type {string}
	 */
	name: {
		validator: core.isString
	},

	/**
	 * Determines shape of user icon's main container.
	 * @default undefined
	 * @instance
	 * @memberof LexiconUserIcon
	 * @type {string}
	 */
	shape: {
		validator: core.isString
	},

	/**
	 * Size of user icon.
	 * @default undefined
	 * @instance
	 * @memberof LexiconUserIcon
	 * @type {string}
	 */
	size: {
		validator: core.isString
	}
};

// Register component
Soy.register(LexiconUserIcon, templates);

export default LexiconUserIcon;