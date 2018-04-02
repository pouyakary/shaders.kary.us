//
// Copyright ][dff2018 Pouya Kary <pouya@kary.us>. All rights reserved.
//

//
// ─── GLSL CANVAS STARTERS ───────────────────────────────────────────────────────
//

    #ifdef GL_ES
        precision mediump float;
    #endif

    uniform vec2  u_resolution;
    uniform vec2  u_mouse;
    uniform float u_time;

//
// ─── MAIN ───────────────────────────────────────────────────────────────────────
//

    void main ( ) {
        vec2 st =
            gl_FragCoord.xy / u_resolution;

        float time =
            u_time / 5.;

        float x =
            sin( st.x + 4. ) + sin( time );

        float y =
            abs( sin( x * 6.048 ) ) * 0.636 + abs( cos( time ) ) * -0.132 + 0.2;

        float color_range =
            st.y / y;

        float r =
            abs( cos( time ) );

        if ( st.y > y ) {
            gl_FragColor =
                vec4( st.y * 0.3, 0., ( 1. - st.y ) * 0.6, 1. );
        } else {
            gl_FragColor =
                vec4( r * 0.420, ( 1. - r ) * 0.340, color_range , 1. );
        }
    }

// ────────────────────────────────────────────────────────────────────────────────
