# Publicar la nueva web (Discord + Free + Descargas)

1. En GitHub abre `https://github.com/YhasOS/squadvoxis-web`.
2. `Add file` > `Upload files`. Arrastra **los archivos descomprimidos**, conservando `assets/` y sustituyendo los ficheros anteriores: `index.html`, `app.js`, `styles.css`, etc.
3. Pulsa `Commit changes`. GitHub Pages actualizará `https://squadvoxis.com`.
4. En la nueva página, revisa el encabezado **VOICE ROUTING FOR DISCORD SERVERS**, el plan Free en Plans y el apartado Download.
5. El botón Download abre `https://github.com/YhasOS/squadvoxis-web/releases`. Hasta subir un instalador verificado, esta página no tendrá ningún ejecutable público.
6. Cuando el instalador Free esté validado en Windows, en ese mismo repositorio crea `Releases` > `Draft a new release`, etiqueta `v1.0-free-test` y adjunta el archivo `SquadVoxis-Free-Windows-Setup.exe`. Marca **Pre-release** mientras esté en prueba y publica la release. A partir de ese momento el enlace de la web tendrá el programa para descargar.

**Aviso:** GitHub Pages tiene restricciones para sitios cuyo objetivo principal sea una tienda/comercio. Esta página funciona temporalmente como escaparate informativo y no incorpora cobros. Antes de habilitar ventas reales conviene trasladar el sitio a un alojamiento apropiado y revisar la Política de desarrolladores de Discord.
