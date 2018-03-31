
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

    gl_FragColor = vec4(
        abs( cos( u_time ) ) - sin( st.y ),
       	abs( cos( u_time ) ) - cos( st.y ) * 2.0,
        abs( sin( u_time ) ) - cos( st.y ),
       	1.0
    );
}