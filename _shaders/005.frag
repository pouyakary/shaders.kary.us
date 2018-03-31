
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
    vec2 center = vec2( 0.5, 0.5 );
    float d = distance( position, center );
    return d < 0.4;
}

void main ( ) {
    vec2 st = gl_FragCoord.xy / u_resolution.x;
    float x_to_y;
    vec2 pos;

    float yd = ( u_resolution.y / u_resolution.x );
    pos = vec2( st.x, yd - st.y );



    if ( inCircle( pos ) ) {
        float red =
            abs( sin( u_time  ) ) * 5.0;
        float green =
            0.0;
        float blue =
            abs( sin( fract( pos.x + cos( u_time ) ) * pos.x * 10.0 ) );

        gl_FragColor = vec4( red, green, blue, 1.0 );
    } else {
        gl_FragColor = vec4( 0.1, 0.0, 0.2, 1.0 );
    }
}