
//
// Copyright 2018 Pouya Kary <pouya@kary.us>. All rights reserved.
//

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main ( ) {
	vec2 st =
        gl_FragCoord.xy / u_resolution;
    float red =
        abs( sin( st.x * 10.0 ) ) * 0.6;
    float blue =
        abs( cos( gl_FragCoord.y / 5.0 ) );

	gl_FragColor = vec4( red, 0. , blue, 1. );
}
