<!--
NOTA: Este README foi creado automáticamente por <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
NON debe editarse manualmente.
-->

# Armadietto para YunoHost

[![Nivel de integración](https://dash.yunohost.org/integration/armadietto.svg)](https://dash.yunohost.org/appci/app/armadietto) ![Estado de funcionamento](https://ci-apps.yunohost.org/ci/badges/armadietto.status.svg) ![Estado de mantemento](https://ci-apps.yunohost.org/ci/badges/armadietto.maintain.svg)

[![Instalar Armadietto con YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=armadietto)

*[Le este README en outros idiomas.](./ALL_README.md)*

> *Este paquete permíteche instalar Armadietto de xeito rápido e doado nun servidor YunoHost.*  
> *Se non usas YunoHost, le a [documentación](https://yunohost.org/install) para saber como instalalo.*

## Vista xeral

[Armadietto](https://github.com/remotestorage/armadietto/) is a [remoteStorage](https://remotestorage.io) server written for Node.js.

Armadietto is maintained by the remoteStorage community, ([IRC](https://web.libera.chat/#remotestorage), [forums](https://community.remotestorage.io/)).

> ### :warning: WARNING
> Please do not consider `armadietto` production ready, this project is still
> considered experimental.  As with any alpha-stage storage technology, you
> MUST expect that it will eat your data and take precautions against this. You
> SHOULD expect that its APIs and storage schemas will change before it is
> labelled stable.

### Installation option 

User registration is not allowed out of the box.
This option can be enabled in the configuration panel.

### Application for remoteStorage

[Here](https://remotestorage.io/apps/) is a non-exhaustive list of apps that have integrated remoteStorage as a storage/sync option.


**Versión proporcionada:** 0.2.0~ynh3

## Capturas de pantalla

![Captura de pantalla de Armadietto](./doc/screenshots/armadietto-welcome.png)
![Captura de pantalla de Armadietto](./doc/screenshots/armadietto-signup.png)

## :red_circle: Caraterísticas cuestionables

- **Alpha software**: Early development stage. May contain changing or unstable features, bugs, and security vulnerability.

## Documentación e recursos

- Web oficial da app: <https://remotestorage.io/>
- Repositorio de orixe do código: <https://github.com/remotestorage/armadietto>
- Tenda YunoHost: <https://apps.yunohost.org/app/armadietto>
- Informar dun problema: <https://github.com/YunoHost-Apps/armadietto_ynh/issues>

## Info de desenvolvemento

Envía a túa colaboración á [rama `testing`](https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing).

Para probar a rama `testing`, procede deste xeito:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing --debug
ou
sudo yunohost app upgrade armadietto -u https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing --debug
```

**Máis info sobre o empaquetado da app:** <https://yunohost.org/packaging_apps>
