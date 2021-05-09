/**
 * Generated from 'examples/jsm/offscreen/offscreen.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('/home/marcogomez/projects/fork/mgzthree/examples/jsm/offscreen/scene.js')) :
	typeof define === 'function' && define.amd ? define(['/home/marcogomez/projects/fork/mgzthree/examples/jsm/offscreen/scene.js'], factory) :
	(global = global || self, factory(global.THREE));
}(this, (function (init) { 'use strict';

	init = init && Object.prototype.hasOwnProperty.call(init, 'default') ? init['default'] : init;

	self.onmessage = function ( message ) {

		var data = message.data;
		init( data.drawingSurface, data.width, data.height, data.pixelRatio, data.path );

	};

})));
