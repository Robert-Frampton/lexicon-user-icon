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
	 * Border styling for user icon's main container
	 * @default undefined
	 * @instance
	 * @memberof LexiconUserIcon
	 * @type {string}
	 */
	border: {
		validator: core.isString
	},

	/**
	 * CSS class (or list of classes) for styling the user icon's main container
	 * @default undefined
	 * @instance
	 * @memberof LexiconUserIcon
	 * @type {string}
	 */
	cssClass: {
		validator: core.isString
	},

	/**
	 * Id of the icon to show from the list of available icons
	 * @default undefined
	 * @instance
	 * @memberof LexiconUserIcon
	 * @type {string}
	 */
	icon: {
		validator: core.isString
	},

	/**
	 * CSS class (or list of classes) for styling the icon's main container
	 * @default undefined
	 * @instance
	 * @memberof LexiconUserIcon
	 * @type {string}
	 */
	iconCssClass: {
		validator: core.isString
	},

	/**
	 * Url of image
	 * @default undefined
	 * @instance
	 * @memberof LexiconUserIcon
	 * @type {string}
	 */
	image: {
		validator: core.isString
	},

	/**
	 * Level of user icon, value appended to user-icon-
	 * @default undefined
	 * @instance
	 * @memberof LexiconUserIcon
	 * @type {string}
	 */
	level: {
		validator: core.isString
	},

	/**
	 * Text value centered inside user icon
	 * @default undefined
	 * @instance
	 * @memberof LexiconUserIcon
	 * @type {string}
	 */
	name: {
		validator: core.isString
	},

	/**
	 * Size of user icon
	 * @default undefined
	 * @instance
	 * @memberof LexiconUserIcon
	 * @type {string}
	 */
	size: {
		validator: core.isString
	},

	/**
	 * Path to the spritemap file with the icons
	 * @default undefined
	 * @instance
	 * @memberof LexiconUserIcon
	 * @type {string}
	 */
	spritemap: {
		validator: core.isString
	}
};

// Register component
Soy.register(LexiconUserIcon, templates);

export default LexiconUserIcon;