
//
// ─── SETUP ──────────────────────────────────────────────────────────────────────
//

    #ifdef GL_ES
    precision mediump float;
    #endif

//
// ─── UNIFORMS ───────────────────────────────────────────────────────────────────
//

    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;

//
// ─── IN CIRCLE ──────────────────────────────────────────────────────────────────
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
// ─── MAIN ───────────────────────────────────────────────────────────────────────
//


    void main ( ) {
        vec2 st =
            gl_FragColor.xy / u_resolution.xy;

        if ( inCircle( ) ) {
            float red =
               abs( sin( u_time ) );
            float green =
                cos( gl_FragCoord.x * u_time );
            float blue =
                1. - abs( cos( u_time ) );
            gl_FragColor =
                vec4( red, green, blue, 1.0 );
        }
    }

// ────────────────────────────────────────────────────────────────────────────────
