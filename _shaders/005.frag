
//
// Copyright 2018 Pouya Kary <pouya@kary.us>. All rights reserved.
//

#ifdef GL_ES
	precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

bool inCircle ( vec2 position ) {
    vec2 pos =
        position;
    vec2 center =
        vec2( 0.5, 0.5 );
    float d =
        distance( pos, center );
    return d < 0.4;
}

void main ( ) {
    vec2 st = gl_FragCoord.xy / u_resolution.x;

    if ( inCircle( st ) ) {
        float red =
            abs( sin( u_time  ) ) * 5.0;
        float green =
            0.0;
        float blue =
            abs( sin( fract( st.x + cos( u_time ) ) * st.x * 10.0 ) );

        gl_FragColor = vec4( red, green, blue, 1.0 );
    } else {
        gl_FragColor = vec4( 0.1, 0.0, 0.2, 1.0 );
    }
}