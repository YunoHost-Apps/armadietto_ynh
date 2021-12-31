<!--
N.B.: This README was automatically generated by https://github.com/YunoHost/apps/tree/master/tools/README-generator
It shall NOT be edited by hand.
-->

# Armadietto package for Yunohost

[![Integration level](https://dash.yunohost.org/integration/armadietto.svg)](https://dash.yunohost.org/appci/app/armadietto) ![](https://ci-apps.yunohost.org/ci/badges/armadietto.status.svg)  ![](https://ci-apps.yunohost.org/ci/badges/armadietto.maintain.svg)

[![Install Armadietto with YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=armadietto)

*[Lire ce readme en français.](./README_fr.md)*

> *This package allows you to install example quickly and simply on a YunoHost server.
If you don't have YunoHost, please consult [the guide](https://yunohost.org/#/install) to learn how to install it.*

## Armadietto overview

[Armadietto](https://github.com/remotestorage/armadietto/) is a [remoteStorage](https://remotestorage.io) server written for Node.js.

Armadietto is maintained by remoteStorage Team [IRC](https://kiwiirc.com/client/irc.freenode.net/#remotestorage)

> ### :warning: WARNING
> Please do not consider `armadietto` production ready, this project is still
> considered experimental.  As with any alpha-stage storage technology, you
> MUST expect that it will eat your data and take precautions against this. You
> SHOULD expect that its APIs and storage schemas will change before it is
> labelled stable.

**Shipped version:** 0.1.5

## Screenshots


   ![](./doc/screenshots/armadietto.png)




## Disclaimers / important information

### Important Notes
RemoteStorage requires a dedicated domain, so obtain one and add it using the YunoHost admin panel. **Domains -> Add domain**. As RemoteStorage uses the full domain and is installed on the root, you can create a subdomain such as remote.domain.tld. Don't forget to update your DNS if you manage them manually.

RemoteStorage requires browser-approved SSL certificates. If you have certificates not issued by [Let's Encrypt](https://letsencrypt.org/), install them manually as usual.


### Application for remoteStorage
[Click here](https://remotestorage.io/apps/) to see the list of applications that can be used with RemoteStorage.


## Documentation and resources

* Official app website: https://remotestorage.io/
* Upstream app code repository:  https://github.com/remotestorage/armadietto/
* Report a bug: https://github.com/bencharp/armadietto_ynh/issues

## Developer info

Please send your pull request to the [testing branch](https://github.com/bencharp/armadietto_ynh/tree/testing).

To try the testing branch, please proceed like that.
```
sudo yunohost app install https://github.com/bencharp/armadietto_ynh/tree/testing --debug
or
sudo yunohost app upgrade armadietto_ynh -u https://github.com/bencharp/armadietto_ynh/tree/testing --debug
```