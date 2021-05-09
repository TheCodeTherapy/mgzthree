/**
 * Generated from 'examples/jsm/loaders/obj2/worker/parallel/OBJLoader2JsmWorker.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('/home/marcogomez/projects/fork/mgzthree/examples/jsm/loaders/obj2/OBJLoader2Parser.js'), require('/home/marcogomez/projects/fork/mgzthree/examples/jsm/loaders/obj2/worker/parallel/WorkerRunner.js')) :
	typeof define === 'function' && define.amd ? define(['/home/marcogomez/projects/fork/mgzthree/examples/jsm/loaders/obj2/OBJLoader2Parser.js', '/home/marcogomez/projects/fork/mgzthree/examples/jsm/loaders/obj2/worker/parallel/WorkerRunner.js'], factory) :
	(global = global || self, factory(global.THREE, global.THREE));
}(this, (function (OBJLoader2Parser_js, WorkerRunner_js) { 'use strict';

	/**
	 * @author Kai Salmen / https://kaisalmen.de
	 * Development repository: https://github.com/kaisalmen/WWOBJLoader
	 */

	new WorkerRunner_js.WorkerRunner( new WorkerRunner_js.DefaultWorkerPayloadHandler( new OBJLoader2Parser_js.OBJLoader2Parser() ) );

})));
