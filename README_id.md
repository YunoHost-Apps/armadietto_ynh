<!--
N.B.: README ini dibuat secara otomatis oleh <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Ini TIDAK boleh diedit dengan tangan.
-->

# Armadietto untuk YunoHost

[![Tingkat integrasi](https://dash.yunohost.org/integration/armadietto.svg)](https://ci-apps.yunohost.org/ci/apps/armadietto/) ![Status kerja](https://ci-apps.yunohost.org/ci/badges/armadietto.status.svg) ![Status pemeliharaan](https://ci-apps.yunohost.org/ci/badges/armadietto.maintain.svg)

[![Pasang Armadietto dengan YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=armadietto)

*[Baca README ini dengan bahasa yang lain.](./ALL_README.md)*

> *Paket ini memperbolehkan Anda untuk memasang Armadietto secara cepat dan mudah pada server YunoHost.*  
> *Bila Anda tidak mempunyai YunoHost, silakan berkonsultasi dengan [panduan](https://yunohost.org/install) untuk mempelajari bagaimana untuk memasangnya.*

## Ringkasan

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


**Versi terkirim:** 0.6.0~ynh1

## Tangkapan Layar

![Tangkapan Layar pada Armadietto](./doc/screenshots/armadietto-signup.png)
![Tangkapan Layar pada Armadietto](./doc/screenshots/armadietto-welcome.png)

## :red_circle: Antifitur

- **Alpha software**: Early development stage. May contain changing or unstable features, bugs, and security vulnerability.

## Dokumentasi dan sumber daya

- Website aplikasi resmi: <https://remotestorage.io/>
- Depot kode aplikasi hulu: <https://github.com/remotestorage/armadietto>
- Gudang YunoHost: <https://apps.yunohost.org/app/armadietto>
- Laporkan bug: <https://github.com/YunoHost-Apps/armadietto_ynh/issues>

## Info developer

Silakan kirim pull request ke [`testing` branch](https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing).

Untuk mencoba branch `testing`, silakan dilanjutkan seperti:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing --debug
atau
sudo yunohost app upgrade armadietto -u https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing --debug
```

**Info lebih lanjut mengenai pemaketan aplikasi:** <https://yunohost.org/packaging_apps>
