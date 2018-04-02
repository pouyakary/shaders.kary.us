
//
// Copyright 2018 Pouya Kary <pouya@kary.us>. All rights reserved.
//

//
// ─── GLCANVAS STARTERS ──────────────────────────────────────────────────────────
//

    #ifdef GL_ES
        precision mediump float;
    #endif

    uniform vec2  u_resolution;
    uniform vec2  u_mouse;
    uniform float u_time;

//
// ─── IS PIXEL WITHIN THE CIRCLE ─────────────────────────────────────────────────
//

    bool inCircle ( ) {
        vec2 pos =
            gl_FragCoord.xy;
        vec2 center =
            vec2( 0.5 * u_resolution.x, 0.5 * u_resolution.y );
        float d =
            distance( pos, center );
        float radius =
            min( u_resolution.x, u_resolution.y ) * 0.4;

        return d < radius;
    }

//
// ─── MAIN FUNCTION ──────────────────────────────────────────────────────────────
//

    void main ( ) {
        vec2 st =
            gl_FragCoord.xy / u_resolution.x;

        if ( inCircle( ) ) {
            float red =
                abs( sin( u_time  ) ) * 5.0;
            float green =
                0.0;
            float blue =
                abs( sin( fract( st.x + cos( u_time ) ) * st.x * 10.0 ) );
            gl_FragColor =
                vec4( red, green, blue, 1.0 );

        } else {
            gl_FragColor =
                vec4( 0.1, 0.0, 0.2, 1.0 );
        }
    }

// ────────────────────────────────────────────────────────────────────────────────
