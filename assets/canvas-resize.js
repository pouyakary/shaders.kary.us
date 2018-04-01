
//
// Copyright 2018-present by Pouya Kary. All rights reserved.
//

//
// ─── RESIZER ───────────────────────────────────────────────────────────────────
//

    document.querySelectorAll( ".glslCanvas" )
        .forEach( function ( canvas ) {
            canvas.setAttribute( "height", canvas.offsetHeight * window.devicePixelRatio);
            canvas.setAttribute( "width", canvas.offsetWidth * window.devicePixelRatio );
        });

// ────────────────────────────────────────────────────────────────────────────────
