
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
// ─── MAIN ───────────────────────────────────────────────────────────────────────
//

    void main ( ) {
        vec2 st =
            gl_FragCoord.xy / u_resolution;
        float dist =
            distance( st, vec2( 0.5,0.5 ) );
        float y =
            fract( st.y - ( sin( gl_FragCoord.x ) ) * 10. * u_time ) * ( 0.5 - dist );
        gl_FragColor =
            vec4( 0., y * 2.0, 0., 1.0 );
    }

// ────────────────────────────────────────────────────────────────────────────────
