# SquadVoxis — publicación de la web informativa

Esta carpeta contiene solamente la web pública de presentación (HTML/CSS/JS/imágenes). **No contiene el programa SquadVoxis, el motor de voz, claves ni credenciales**.

## 1. Crear repositorio en GitHub

1. Inicia sesión con tu cuenta `YhasOS` en https://github.com/new.
2. **Repository name:** `squadvoxis-web`.
3. Selecciona **Public** y pulsa **Create repository**. No modifiques el repositorio existente `yhasos.github.io`.
4. En el nuevo repositorio, utiliza **uploading an existing file** o **Add file → Upload files**.
5. Descomprime el ZIP de esta web en tu ordenador y arrastra **todos los archivos y la carpeta `assets`**, no el ZIP. Confirma con **Commit changes**.
6. En el repositorio abre **Settings → Pages**. En **Build and deployment** selecciona **Deploy from a branch**, rama **main**, carpeta **/(root)**. Guarda.
7. La dirección temporal será `https://yhasos.github.io/squadvoxis-web/` mientras no se configure el dominio personalizado.

## 2. Conectar squadvoxis.com (después de publicar en GitHub)

1. En el repositorio de GitHub, **Settings → Pages → Custom domain** escribe `squadvoxis.com` (sin `https://`) y pulsa **Save**. Esto puede crear automáticamente un fichero `CNAME`.
2. En **Arsys → Mis productos → squadvoxis.com → Panel de control / Gestión DNS**, edita la zona DNS existente (no compres hosting ni cambies de proveedor DNS).
3. Elimina cualquier entrada A incompatible existente para el dominio raíz `@`. Crea cuatro registros **A** para `@`, con estas direcciones:

   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

4. Para `www`, crea un registro **CNAME** cuyo destino sea `yhasos.github.io` (sin `https://`). Si existe ya un registro de `www` incompatible, revísalo antes de sustituirlo.
5. **No borres registros MX, TXT ni otros datos no relacionados** sin revisar si se usan para correo u otros servicios.
6. Espera a que se propaguen los DNS (pueden tardar hasta 24 horas). En GitHub **Settings → Pages**, cuando esté disponible marca **Enforce HTTPS**.
7. Prueba `https://squadvoxis.com` y `https://www.squadvoxis.com`.

## 3. Importante para la comercialización

Esta web es **informativa**: el software aparece como “en desarrollo”, los planes son orientativos y los pagos están deshabilitados. Para utilizarla como tienda comercial con enlaces de compra, tras su lanzamiento, se recomienda migrar el hosting a una plataforma apta para fines comerciales (por ejemplo, Cloudflare Pages), conservando el mismo código web y el dominio. GitHub Pages **no permite** utilizarlo como servicio gratuito de alojamiento para negocios, e-commerce o webs destinadas principalmente a facilitar transacciones comerciales.

Antes de solicitar revisión comercial en un procesador de pagos, incorpora los datos reales de contacto de tu negocio, condiciones de compra, política de reembolso y política de privacidad cuando proceda. No se han inventado datos legales ni de contacto para este sitio.

## Documentación oficial

- GitHub Pages, origen de publicación: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Dominio propio: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- Limitaciones de Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
