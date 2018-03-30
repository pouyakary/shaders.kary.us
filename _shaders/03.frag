
//
// Copyright 2018 Pouya Kary <pouya@kary.us>. All rights reserved.
//

#ifdef GL_ES
	precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main( ) {
    vec2 st = gl_FragCoord.xy / u_resolution;

    float t = fract( sin( gl_FragCoord.x ) * gl_FragCoord.x ) + u_time;

    gl_FragColor = vec4(
        abs( sin( t ) ) - cos( st.y ) / 1.5,
       	abs( cos( t ) ) - tan( st.y ) * 2.0,
        abs( sin( t ) ) - sin( st.y ) / 1.2,
       	1.0
    );
}