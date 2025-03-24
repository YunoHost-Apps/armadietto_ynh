<!--
To README zostało automatycznie wygenerowane przez <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Nie powinno być ono edytowane ręcznie.
-->

# Armadietto dla YunoHost

[![Poziom integracji](https://apps.yunohost.org/badge/integration/armadietto)](https://ci-apps.yunohost.org/ci/apps/armadietto/)
![Status działania](https://apps.yunohost.org/badge/state/armadietto)
![Status utrzymania](https://apps.yunohost.org/badge/maintained/armadietto)

[![Zainstaluj Armadietto z YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=armadietto)

*[Przeczytaj plik README w innym języku.](./ALL_README.md)*

> *Ta aplikacja pozwala na szybką i prostą instalację Armadietto na serwerze YunoHost.*  
> *Jeżeli nie masz YunoHost zapoznaj się z [poradnikiem](https://yunohost.org/install) instalacji.*

## Przegląd

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


**Dostarczona wersja:** 0.6.0~ynh2

## Zrzuty ekranu

![Zrzut ekranu z Armadietto](./doc/screenshots/armadietto-signup.png)
![Zrzut ekranu z Armadietto](./doc/screenshots/armadietto-welcome.png)

## :red_circle: Niepożądane funkcje

- **Alpha software**: Early development stage. May contain changing or unstable features, bugs, and security vulnerability.

## Dokumentacja i zasoby

- Oficjalna strona aplikacji: <https://remotestorage.io/>
- Repozytorium z kodem źródłowym: <https://github.com/remotestorage/armadietto>
- Sklep YunoHost: <https://apps.yunohost.org/app/armadietto>
- Zgłaszanie błędów: <https://github.com/YunoHost-Apps/armadietto_ynh/issues>

## Informacje od twórców

Wyślij swój pull request do [gałęzi `testing`](https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing).

Aby wypróbować gałąź `testing` postępuj zgodnie z instrukcjami:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing --debug
lub
sudo yunohost app upgrade armadietto -u https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing --debug
```

**Więcej informacji o tworzeniu paczek aplikacji:** <https://yunohost.org/packaging_apps>
