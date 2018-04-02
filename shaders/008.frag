//
// Copyright ][dff2018 Pouya Kary <pouya@kary.us>. All rights reserved.
//

//
// ─── GLSL CANVAS STARTERS ───────────────────────────────────────────────────────
//

    #ifdef GL_ES
        precision mediump float;
    #endif

    #define PI 3.14159265359

    uniform vec2  u_resolution;
    uniform vec2  u_mouse;
    uniform float u_time;

//
// ─── IMPULSE FUNCTION ───────────────────────────────────────────────────────────
//

    float impulse( float k, float x ) {
        float h = k * x * 10.;
        return h * exp( sin( u_time ) * 0.85 - h );
    }

//
// ─── MAIN ───────────────────────────────────────────────────────────────────────
//

    void main ( ) {
        vec2 st =
            gl_FragCoord.xy / u_resolution.xy;
        float x =
            st.x - ( abs( cos( u_time ) ) * 0.3 ) - 0.05;
        float fx =
            impulse( abs( sin( u_time / 2. ) ), x );

        // shape
        if ( st.y > fx )
            gl_FragColor = vec4( 0.3 * st.y, 0., 0.4 * st.y, 1. );

        // background
        else
            gl_FragColor = vec4( st.y * 2., x, ( 1. - st.y ) * 0.4, 1. );
    }

// ────────────────────────────────────────────────────────────────────────────────
