<!--
Ohart ongi: README hau automatikoki sortu da <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>ri esker
EZ editatu eskuz.
-->

# Armadietto YunoHost-erako

[![Integrazio maila](https://dash.yunohost.org/integration/armadietto.svg)](https://dash.yunohost.org/appci/app/armadietto) ![Funtzionamendu egoera](https://ci-apps.yunohost.org/ci/badges/armadietto.status.svg) ![Mantentze egoera](https://ci-apps.yunohost.org/ci/badges/armadietto.maintain.svg)

[![Instalatu Armadietto YunoHost-ekin](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=armadietto)

*[Irakurri README hau beste hizkuntzatan.](./ALL_README.md)*

> *Pakete honek Armadietto YunoHost zerbitzari batean azkar eta zailtasunik gabe instalatzea ahalbidetzen dizu.*  
> *YunoHost ez baduzu, kontsultatu [gida](https://yunohost.org/install) nola instalatu ikasteko.*

## Aurreikuspena

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


**Paketatutako bertsioa:** 0.2.0~ynh4

## Pantaila-argazkiak

![Armadietto(r)en pantaila-argazkia](./doc/screenshots/armadietto-welcome.png)
![Armadietto(r)en pantaila-argazkia](./doc/screenshots/armadietto-signup.png)

## :red_circle: Ezaugarri zalantzagarriak

- **Alfa softwarea**: Garapenaren hasierako fasean dago. Ezaugarri aldakor edo ezegonkorrak, erroreak eta segurtasun-arazoak izan ditzazke.

## Dokumentazioa eta baliabideak

- Aplikazioaren webgune ofiziala: <https://remotestorage.io/>
- Jatorrizko aplikazioaren kode-gordailua: <https://github.com/remotestorage/armadietto>
- YunoHost Denda: <https://apps.yunohost.org/app/armadietto>
- Eman errore baten berri: <https://github.com/YunoHost-Apps/armadietto_ynh/issues>

## Garatzaileentzako informazioa

Bidali `pull request`a [`testing` abarrera](https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing).

`testing` abarra probatzeko, ondorengoa egin:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing --debug
edo
sudo yunohost app upgrade armadietto -u https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing --debug
```

**Informazio gehiago aplikazioaren paketatzeari buruz:** <https://yunohost.org/packaging_apps>
