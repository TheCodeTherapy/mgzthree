/**
 * Generated from 'examples/jsm/helpers/VertexTangentsHelper.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE));
}(this, (function (exports, THREE) { 'use strict';

	/**
	 * @author WestLangley / http://github.com/WestLangley
	 */

	var _v1 = new THREE.Vector3();
	var _v2 = new THREE.Vector3();

	function VertexTangentsHelper( object, size, hex, linewidth ) {

		this.object = object;

		this.size = ( size !== undefined ) ? size : 1;

		var color = ( hex !== undefined ) ? hex : 0x00ffff;

		var width = ( linewidth !== undefined ) ? linewidth : 1;

		//

		var objGeometry = this.object.geometry;

		if ( ! ( objGeometry && objGeometry.isBufferGeometry ) ) {

			console.error( 'VertexTangentsHelper: geometry not an instance of THREE.BufferGeometry.', objGeometry );
			return;

		}

		var nTangents = objGeometry.attributes.tangent.count;

		//

		var geometry = new THREE.BufferGeometry();

		var positions = new THREE.Float32BufferAttribute( nTangents * 2 * 3, 3 );

		geometry.setAttribute( 'position', positions );

		THREE.LineSegments.call( this, geometry, new THREE.LineBasicMaterial( { color: color, linewidth: width } ) );

		//

		this.matrixAutoUpdate = false;

		this.update();

	}

	VertexTangentsHelper.prototype = Object.create( THREE.LineSegments.prototype );
	VertexTangentsHelper.prototype.constructor = VertexTangentsHelper;

	VertexTangentsHelper.prototype.update = function () {

		this.object.updateMatrixWorld( true );

		var matrixWorld = this.object.matrixWorld;

		var position = this.geometry.attributes.position;

		//

		var objGeometry = this.object.geometry;

		var objPos = objGeometry.attributes.position;

		var objTan = objGeometry.attributes.tangent;

		var idx = 0;

		// for simplicity, ignore index and drawcalls, and render every tangent

		for ( var j = 0, jl = objPos.count; j < jl; j ++ ) {

			_v1.set( objPos.getX( j ), objPos.getY( j ), objPos.getZ( j ) ).applyMatrix4( matrixWorld );

			_v2.set( objTan.getX( j ), objTan.getY( j ), objTan.getZ( j ) );

			_v2.transformDirection( matrixWorld ).multiplyScalar( this.size ).add( _v1 );

			position.setXYZ( idx, _v1.x, _v1.y, _v1.z );

			idx = idx + 1;

			position.setXYZ( idx, _v2.x, _v2.y, _v2.z );

			idx = idx + 1;

		}

		position.needsUpdate = true;

	};

	exports.VertexTangentsHelper = VertexTangentsHelper;

})));
