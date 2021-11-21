
// Copyright 2021 by Pouya Kary <kary@gnu.org>

// Simulation of Magic Corner Algorithm for
// displaying pixel graphs.
// Learned from:
// https://www.youtube.com/watch?v=EvvWOaLgKVU
// To use for Arendelle and TextGraphic.

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float originX = u_resolution.x / 2.0;
float originY = u_resolution.y / 2.0;
float LINE_THICKNESS = 1.0;
float GUIDE_SIZE = 2.0 + abs(cos(u_time / 5.0)) * 23.0;

float formula(float x, float y) {
    return y - radians(180.0) * sin(radians(x * cos(u_time / 2.0) * 4.0 * GUIDE_SIZE * 0.35)) * (u_resolution.y / (GUIDE_SIZE * 7.5));
}

float check_formula(float x, float y) {
    return sign(formula(x, y));
}

float compute_corner_magic_score(float x, float y) {
    float step = LINE_THICKNESS;
    float a = check_formula(x + step, y + step);
    float b = check_formula(x       , y       );
    float c = check_formula(x + step, y       );
    float d = check_formula(x       , y + step);
    return a + b + c + d;
}

bool is_made_of(float a, float b) {
    return (a - floor(a / b) * b) <= 1.0;
}

bool is_on_grid(float x, float y) {
    return is_made_of(abs(x), GUIDE_SIZE) || is_made_of(abs(y), GUIDE_SIZE);
}

void main() {
    float gx = gl_FragCoord.x - originX;
    float gy = gl_FragCoord.y - originY;
    float x = floor(gx / GUIDE_SIZE);
    float y = floor(gy / GUIDE_SIZE);
    float magic_score = compute_corner_magic_score(x, y);

   	if (-4.0 < magic_score && magic_score < 4.0) {
 		gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
    } else {
        // this is for the grid
    	if (is_on_grid(gx, gy)) {
            gl_FragColor = vec4(0.000,0.3,0.000,1.000);
        } else {
         	gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
}


// hihi
