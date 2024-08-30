<!--
Важно: этот README был автоматически сгенерирован <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Он НЕ ДОЛЖЕН редактироваться вручную.
-->

# Armadietto для YunoHost

[![Уровень интеграции](https://dash.yunohost.org/integration/armadietto.svg)](https://ci-apps.yunohost.org/ci/apps/armadietto/) ![Состояние работы](https://ci-apps.yunohost.org/ci/badges/armadietto.status.svg) ![Состояние сопровождения](https://ci-apps.yunohost.org/ci/badges/armadietto.maintain.svg)

[![Установите Armadietto с YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=armadietto)

*[Прочтите этот README на других языках.](./ALL_README.md)*

> *Этот пакет позволяет Вам установить Armadietto быстро и просто на YunoHost-сервер.*  
> *Если у Вас нет YunoHost, пожалуйста, посмотрите [инструкцию](https://yunohost.org/install), чтобы узнать, как установить его.*

## Обзор

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


**Поставляемая версия:** 0.6.0~ynh1

## Снимки экрана

![Снимок экрана Armadietto](./doc/screenshots/armadietto-signup.png)
![Снимок экрана Armadietto](./doc/screenshots/armadietto-welcome.png)

## :red_circle: Анти-функции

- **Alpha software**: Early development stage. May contain changing or unstable features, bugs, and security vulnerability.

## Документация и ресурсы

- Официальный веб-сайт приложения: <https://remotestorage.io/>
- Репозиторий кода главной ветки приложения: <https://github.com/remotestorage/armadietto>
- Магазин YunoHost: <https://apps.yunohost.org/app/armadietto>
- Сообщите об ошибке: <https://github.com/YunoHost-Apps/armadietto_ynh/issues>

## Информация для разработчиков

Пришлите Ваш запрос на слияние в [ветку `testing`](https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing).

Чтобы попробовать ветку `testing`, пожалуйста, сделайте что-то вроде этого:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing --debug
или
sudo yunohost app upgrade armadietto -u https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing --debug
```

**Больше информации о пакетировании приложений:** <https://yunohost.org/packaging_apps>
