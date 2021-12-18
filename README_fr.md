# Armadietto package pour Yunohost

[![Integration level](https://dash.yunohost.org/integration/armadietto.svg)](https://dash.yunohost.org/appci/app/armadietto) ![](https://ci-apps.yunohost.org/ci/badges/armadietto.status.svg)  ![](https://ci-apps.yunohost.org/ci/badges/armadietto.maintain.svg)

[![Install Armadietto with YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=armadietto)

*[Read this readme in english.](./README.md)*


> *Ce paquetage vous permet d'installer  Armadietto rapidement et simplement sur un serveur YunoHost.
Si vous n'avez pas YunoHost, veuillez consulter [le guide](https://yunohost.org/#/install) pour savoir comment l'installer.*

## Aperçu d'Armadietto

[Armadietto](https://github.com/remotestorage/armadietto/) est un serveur [remoteStorage](https://remotestorage.io) écrit pour Node.js.

Armadietto est maintenu par l'équipe remoteStorage [IRC](https://kiwiirc.com/client/irc.freenode.net/#remotestorage).

> ### :warning : WARNING
> Veuillez ne pas considérer `armadietto` comme prêt pour la production, ce projet est toujours
> comme expérimental.  Comme avec toute technologie de stockage en phase alpha, vous
> devez vous attendre à ce qu'elle mange vos données et prendre des précautions contre cela. Vous
> Vous devez vous attendre à ce que ses API et ses schémas de stockage changent avant qu'il ne soit 
> étiqueté comme stable.

**Version livrée:** 0.1.5


## Captures d'écran


   ![](./doc/screenshots/armadietto.png)




## Avertissements / informations importantes

### Notes importantes
RemoteStorage nécessite un domaine dédié, il faut donc en obtenir un et l'ajouter en utilisant le panneau d'administration de YunoHost. **Domaines -> Ajouter un domaine**. Comme RemoteStorage utilise le domaine complet et est installé à la racine, vous pouvez créer un sous-domaine tel que remote.domain.tld. N'oubliez pas de mettre à jour vos DNS si vous les gérez manuellement.

RemoteStorage nécessite des certificats SSL approuvés par le navigateur. Si vous disposez de certificats qui ne sont pas émis par [Let's Encrypt](https://letsencrypt.org/), installez-les manuellement comme d'habitude.


### Application pour remoteStorage
[Cliquez ici](https://remotestorage.io/apps/) pour voir la liste des applications qui peuvent être utilisées avec RemoteStorage.


## Documentations et ressources

* Site Web officiel de l'application : https://remotestorage.io/
* Dépôt de code de l'application en amont : https://github.com/remotestorage/armadietto/
* Signalez un bogue : https://github.com/bencharp/armadietto_ynh/issues

## Informations pour les développeurs

Veuillez envoyer votre demande à la [branche de test] (https://github.com/bencharp/armadietto_ynh/tree/testing).

Pour essayer la branche testing, veuillez procéder comme suit.
```
sudo yunohost app install https://github.com/bencharp/armadietto_ynh/tree/testing --debug
ou
sudo yunohost app upgrade armadietto_ynh -u https://github.com/bencharp/armadietto_ynh/tree/testing --debug
```
