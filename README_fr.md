<!--
Nota bene : ce README est automatiquement généré par <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Il NE doit PAS être modifié à la main.
-->

# Armadietto pour YunoHost

[![Niveau d’intégration](https://dash.yunohost.org/integration/armadietto.svg)](https://dash.yunohost.org/appci/app/armadietto) ![Statut du fonctionnement](https://ci-apps.yunohost.org/ci/badges/armadietto.status.svg) ![Statut de maintenance](https://ci-apps.yunohost.org/ci/badges/armadietto.maintain.svg)

[![Installer Armadietto avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=armadietto)

*[Lire le README dans d'autres langues.](./ALL_README.md)*

> *Ce package vous permet d’installer Armadietto rapidement et simplement sur un serveur YunoHost.*  
> *Si vous n’avez pas YunoHost, consultez [ce guide](https://yunohost.org/install) pour savoir comment l’installer et en profiter.*

## Vue d’ensemble

[Armadietto](https://github.com/remotestorage/armadietto/) est un serveur [remoteStorage](https://remotestorage.io) écrit pour Node.js.

Armadietto est maintenu par la communauté remoteStorage, ([IRC](https://web.libera.chat/#remotestorage), [forums](https://community.remotestorage.io/)).

> ### :warning: WARNING
> Veuillez ne pas considérer `armadietto` comme prêt pour la production, ce projet est toujours
> comme expérimental.  Comme avec toute technologie de stockage en phase alpha, vous
> devez vous attendre à ce qu'elle mange vos données et prendre des précautions contre cela. Vous
> Vous devez vous attendre à ce que ses API et ses schémas de stockage changent avant qu'il ne soit 
> étiqueté comme stable.

### Option d'installation 

L'inscription des utilisateurs n'est pas autorisée par défault.
Cette option peut être activée via le panneau de configutration.

### Application pour remoteStorage

[Cliquez ici](https://remotestorage.io/apps/) pour voir une liste non exhaustive d'applications ayant intégré remoteStorage comme option de stockage/synchronisation.


**Version incluse :** 0.2.0~ynh3

## Captures d’écran

![Capture d’écran de Armadietto](./doc/screenshots/armadietto-welcome.png)
![Capture d’écran de Armadietto](./doc/screenshots/armadietto-signup.png)

## :red_circle: Anti-fonctionnalités

- **Logiciel en version alpha **: Le logiciel est au tout début de son développement. Il pourrait contenir des fonctionnalités changeantes ou instables, des bugs, et des failles de sécurité.

## Documentations et ressources

- Site officiel de l’app : <https://remotestorage.io/>
- Dépôt de code officiel de l’app : <https://github.com/remotestorage/armadietto>
- YunoHost Store : <https://apps.yunohost.org/app/armadietto>
- Signaler un bug : <https://github.com/YunoHost-Apps/armadietto_ynh/issues>

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche `testing`](https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing).

Pour essayer la branche `testing`, procédez comme suit :

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing --debug
ou
sudo yunohost app upgrade armadietto -u https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing --debug
```

**Plus d’infos sur le packaging d’applications :** <https://yunohost.org/packaging_apps>
