<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="Estilo.css"/>	
            </head>
            <body>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="cancion/datos">
        <h1>
            <xsl:value-of select="titulo"></xsl:value-of>
        </h1>
        <h2>
            <xsl:value-of select="autor"></xsl:value-of>
        </h2>
        <h3>
            <xsl:value-of select="fecha"></xsl:value-of>
        </h3>
        <h3>
            <xsl:value-of select="album"></xsl:value-of>
        </h3>
        <h3>
            <xsl:value-of select="genero"></xsl:value-of>
        </h3>
    </xsl:template>
    
    <xsl:template match="cancion/letra">
        <xsl:for-each select="estrofa">
              <br/>
              <xsl:for-each select="verso">
              <p>
                  <xsl:value-of select="."/>
              </p>
          </xsl:for-each>
        </xsl:for-each>
    </xsl:template>    
</xsl:stylesheet>