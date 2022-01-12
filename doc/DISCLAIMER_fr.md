### :warning: WARNING
Le paquet Armadietto_ynh est toujours en cours de développement, vous devez donc vous attendre à d'éventuels changements non documentés avant qu'il ne soit qualifié de stable.

### :information_source: Considérations sur la sécurité de [Armadietto](https://github.com/remotestorage/armadietto/) :

> #### **Sécurité du stockage**
> 
> En production, nous vous recommandons de restreindre autant que possible l'accès aux fichiers gérés par votre serveur armadietto. Ceci est particulièrement vrai si vous hébergez votre stockage sur une machine avec d'autres applications web ; vous devez protéger vos fichiers dans le cas où l'une de ces applications serait exploitée.
> 
> Vous devez prendre les mesures suivantes pour assurer la sécurité de votre stockage :
> 
>    - Choisissez un utilisateur Unix unique pour exécuter votre processus serveur ; aucun autre processus sur la machine ne doit être exécuté sous cet utilisateur : sudo useradd armadietto --system --no-create-home
> 
>    - Ne lancez pas d'autres applications en tant que root, ou en tant qu'utilisateur qui pourrait accéder à des fichiers appartenant à votre utilisateur armadietto.
> 
>    - Assurez-vous que le répertoire path/to/storage ne peut être lu, écrit ou exécuté par personne d'autre que cet utilisateur : sudo chmod 0700 /path/to/storage && sudo chown armadietto /path/to/storage
> 
>    - Ne lancez pas armadietto en tant que root ; si vous avez besoin de vous lier au port 80 ou 443, utilisez un reverse proxy comme nginx, Apache2, caddy, lighttpd ou activez la capacité de liaison : setcap 'cap_net_bind_service=+ep' `which armadietto`.
> 
>    - Idéalement, exécutez votre stockage dans un conteneur ou sur une machine dédiée.

<br />

### **Notes importantes**

- RemoteStorage nécessite un domaine dédié, il faut donc en obtenir un et l'ajouter en utilisant le panneau d'administration de YunoHost. **Domaines -> Ajouter un domaine**. 
- Comme RemoteStorage utilise le domaine complet et est installé à la racine, vous pouvez créer un sous-domaine tel que remote.domain.tld. 
- N'oubliez pas de mettre à jour vos DNS si vous les gérez manuellement.

- RemoteStorage nécessite des certificats SSL approuvés par le navigateur. Si vous disposez de certificats qui ne sont pas émis par [Let's Encrypt](https://letsencrypt.org/), installez-les manuellement comme d'habitude.


## TODO

* Toute limitation ou contrainte connue ou tout élément ne fonctionnant pas, tel que (mais non limité à) :
    * architectures non prises en charge ?
    * L'authentification unique ou l'intégration LDAP ne fonctionnent pas ?
    * etc...

* D'autres informations que les gens devraient connaître, comme.. :
    * toute étape spécifique à effectuer après l'installation (comme terminer manuellement l'installation, des identifiants d'administration spécifiques, ...)
    * Comment configurer / administrer l'application si ce n'est pas évident.
    * Spécificités, les choses à savoir ?