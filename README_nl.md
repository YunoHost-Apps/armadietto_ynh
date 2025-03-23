<!--
NB: Deze README is automatisch gegenereerd door <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Hij mag NIET handmatig aangepast worden.
-->

# Armadietto voor Yunohost

[![Integratieniveau](https://apps.yunohost.org/badge/integration/armadietto)](https://ci-apps.yunohost.org/ci/apps/armadietto/)
![Mate van functioneren](https://apps.yunohost.org/badge/state/armadietto)
![Onderhoudsstatus](https://apps.yunohost.org/badge/maintained/armadietto)

[![Armadietto met Yunohost installeren](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=armadietto)

*[Deze README in een andere taal lezen.](./ALL_README.md)*

> *Met dit pakket kun je Armadietto snel en eenvoudig op een YunoHost-server installeren.*  
> *Als je nog geen YunoHost hebt, lees dan [de installatiehandleiding](https://yunohost.org/install), om te zien hoe je 'm installeert.*

## Overzicht

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


**Geleverde versie:** 0.6.0~ynh2

## Schermafdrukken

![Schermafdrukken van Armadietto](./doc/screenshots/armadietto-signup.png)
![Schermafdrukken van Armadietto](./doc/screenshots/armadietto-welcome.png)

## :red_circle: Anti-eigenschappen

- **Alpha software**: Early development stage. May contain changing or unstable features, bugs, and security vulnerability.

## Documentatie en bronnen

- Officiele website van de app: <https://remotestorage.io/>
- Upstream app codedepot: <https://github.com/remotestorage/armadietto>
- YunoHost-store: <https://apps.yunohost.org/app/armadietto>
- Meld een bug: <https://github.com/YunoHost-Apps/armadietto_ynh/issues>

## Ontwikkelaarsinformatie

Stuur je pull request alsjeblieft naar de [`testing`-branch](https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing).

Om de `testing`-branch uit te proberen, ga als volgt te werk:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing --debug
of
sudo yunohost app upgrade armadietto -u https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing --debug
```

**Verdere informatie over app-packaging:** <https://yunohost.org/packaging_apps>
