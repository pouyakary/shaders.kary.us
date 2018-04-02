
//
// Copyright 2018 Pouya Kary <pouya@kary.us>. All rights reserved.
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
        float red =
            pow( st.x, abs( sin( u_time ) * 3.0 ) );
        float green =
            pow( st.x, abs( cos( u_time ) ) * 5.0 );
        float blue =
            pow( st.y, abs( sin( u_time ) * 2.0 ) );
        vec3 color =
            vec3( red, green, blue );
        gl_FragColor =
            vec4( color, 1.0 );
    }

// ────────────────────────────────────────────────────────────────────────────────
