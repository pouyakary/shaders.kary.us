
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

    const homepageFileString =
        getTemplate( "home" )

    const templateFileString =
        getTemplate( "template" )

    const boxFileString =
        getTemplate( "box" )

    const shadersDir =
        "collection"

//
// ─── GET TEMPLATE ───────────────────────────────────────────────────────────────
//

    function getTemplate ( name ) {
        const address =
            path.join( process.cwd( ), "_template", name + ".html" )

        return fs.readFileSync( address, "utf8" )
    }

//
// ─── GET SHADER ─────────────────────────────────────────────────────────────────
//

    function getShader ( name ) {
        return fs.readFileSync( path.join( process.cwd( ), "_shaders", name ) )
    }

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
            getShader( fileName )
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
// ─── COMPILE HOMEPAGE ───────────────────────────────────────────────────────────
//

    function createHomepage ( names ) {
        const boxesForNames =
            names.map( createBoxForName )
        const homepageCode =
            homepageFileString
                .replace( "{{-BOXES-}}", boxesForNames.join("") )
        const homepageFileAddress =
            path.join( process.cwd( ), "index.html" )

        fs.writeFileSync( homepageFileAddress, homepageCode )
    }

//
// ─── CREATE A BOX FOR NAME ──────────────────────────────────────────────────────
//

    function createBoxForName ( fileName ) {
        const justName =
            removeExtension( fileName )
        const shaderCode =
            getShader( fileName )
        const boxCode =
            boxFileString
                .replace( "{{-SHADER-NAME-}}", justName )
                .replace( "{{-SHADER-CODE-}}", shaderCode )

        return boxCode
    }

//
// ─── MAIN ───────────────────────────────────────────────────────────────────────
//

    main( ); function main ( ) {
        // start
        const fileNames =
            getFileAddresses( )

        // homepage
        createHomepage( fileNames )

        // single pages
        checkIfDirExistsElseCreateIt( shadersDir )
        for ( const name of fileNames )
            buildTemplateForFileString( name )
    }

// ────────────────────────────────────────────────────────────────────────────────
