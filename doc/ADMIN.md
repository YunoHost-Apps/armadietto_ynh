### :warning: WARNING
The Armadietto_ynh package is still under development, so you should expect some undocumented changes before it is labeled stable.

### :information_source: Security considerations from [Armadietto](https://github.com/remotestorage/armadietto/) :

> #### **Storage security**
>
> In production, we recommend that you restrict access to the files managed by your armadietto server as much as possible. This is particularly true if you host your storage on a machine with other web applications; you need to protect your files in the event that one of those apps is exploited.
>
> You should take these steps to keep your storage safe:
>
>    - Pick a unique Unix user to run your server process; no other process on the box should run as this user: sudo useradd armadietto --system --no-create-home
>
>    - Do not run other applications as root, or as any user that could access files owned by your armadietto user
>
>    - Make sure the directory path/to/storage cannot be read, written or executed by anyone but this user: sudo chmod 0700 /path/to/storage && sudo chown armadietto /path/to/storage
>
>    - Do not run armadietto as root; if you need to bind to port 80 or 443 use a reverse proxy like nginx, Apache2, caddy, lighttpd or enable bind capability: setcap 'cap_net_bind_service=+ep' `which armadietto`
>
>    - Ideally, run your storage inside a container or on a dedicated machine

<br />

### **Important Notes**

- RemoteStorage requires a dedicated domain, so obtain one and add it using the YunoHost admin panel. **Domains -> Add domain**.
- As RemoteStorage uses the full domain and is installed on the root, you can create a subdomain such as remote.domain.tld.
- Don't forget to update your DNS if you manage them manually.

- RemoteStorage requires browser-approved SSL certificates. If you have certificates not issued by [Let's Encrypt](https://letsencrypt.org/), install them manually as usual.
