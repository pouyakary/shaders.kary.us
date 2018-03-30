
//
// Copyright 2018 by Pouya Kary. All rights reserved.
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

    const fs = require( "fs" )
    const path = require( "path" )

//
// ─── CONSTANTS ──────────────────────────────────────────────────────────────────
//

    const shadersDirectory =
        path.join( process.cwd( ), "_shaders" )

    const templateFileAddress =
        path.join( process.cwd( ), "_template", "template.html")

    const templateFileString =
        fs.readFileSync( templateFileAddress, "utf8" )

    const shadersDir =
        "collection"

//
// ─── GET FILE ADDRESSES ─────────────────────────────────────────────────────────
//

    function getFileAddresses ( ) {
        return fs.readdirSync( shadersDirectory )
    }


//
// ─── BUILD TEMPLATE FOR FILE STRING ─────────────────────────────────────────────
//

    function buildTemplateForFileString ( fileName ) {
        const fragmentFileString =
            fs.readFileSync( path.join( process.cwd( ), "_shaders", fileName ) )
        const name =
            removeExtension( fileName )
        const resultFile =
            templateFileString
                .replace( "{{-FRAGMENT-PLACEHOLDER-}}", fragmentFileString )
                .replace( "{{-FRAGMENT-TITLE-}}", name )
                .replace( "{{-FRAGMENT-NAME-}}", name )

        writeShaderHTML( fileName, resultFile )
    }

//
// ─── WRITE SHADER ───────────────────────────────────────────────────────────────
//

    function writeShaderHTML ( name, data ) {
        const nameWithoutExtension =
            removeExtension( name )
        const resultDirectoryAddress =
            path.join( shadersDir, nameWithoutExtension )

        checkIfDirExistsElseCreateIt( resultDirectoryAddress )

        fs.writeFileSync( path.join( resultDirectoryAddress, "index.html" ) , data )
    }

//
// ─── REMOVE EXTENSION ───────────────────────────────────────────────────────────
//

    function removeExtension ( name ) {
        return name.replace( /\.frag$/, "" )
    }

//
// ─── CHECK IF DIR EXISTS ────────────────────────────────────────────────────────
//

    function checkIfDirExistsElseCreateIt ( dirAddress ) {
        const absAddress =
            path.join( process.cwd( ), dirAddress )

        if ( !fs.existsSync( absAddress ) ) {
            fs.mkdirSync( absAddress )
        }
    }

//
// ─── MAIN ───────────────────────────────────────────────────────────────────────
//

    main( ); function main ( ) {
        checkIfDirExistsElseCreateIt( shadersDir )

        for ( const name of getFileAddresses( ) )
            buildTemplateForFileString( name )
    }

// ────────────────────────────────────────────────────────────────────────────────
