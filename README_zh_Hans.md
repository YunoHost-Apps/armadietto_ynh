<!--
注意：此 README 由 <https://github.com/YunoHost/apps/tree/master/tools/readme_generator> 自动生成
请勿手动编辑。
-->

# YunoHost 上的 Armadietto

[![集成程度](https://dash.yunohost.org/integration/armadietto.svg)](https://dash.yunohost.org/appci/app/armadietto) ![工作状态](https://ci-apps.yunohost.org/ci/badges/armadietto.status.svg) ![维护状态](https://ci-apps.yunohost.org/ci/badges/armadietto.maintain.svg)

[![使用 YunoHost 安装 Armadietto](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=armadietto)

*[阅读此 README 的其它语言版本。](./ALL_README.md)*

> *通过此软件包，您可以在 YunoHost 服务器上快速、简单地安装 Armadietto。*  
> *如果您还没有 YunoHost，请参阅[指南](https://yunohost.org/install)了解如何安装它。*

## 概况

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


**分发版本：** 0.2.0~ynh4

## 截图

![Armadietto 的截图](./doc/screenshots/armadietto-signup.png)
![Armadietto 的截图](./doc/screenshots/armadietto-welcome.png)

## :red_circle: 负面特征

- **Alpha software**: Early development stage. May contain changing or unstable features, bugs, and security vulnerability.

## 文档与资源

- 官方应用网站： <https://remotestorage.io/>
- 上游应用代码库： <https://github.com/remotestorage/armadietto>
- YunoHost 商店： <https://apps.yunohost.org/app/armadietto>
- 报告 bug： <https://github.com/YunoHost-Apps/armadietto_ynh/issues>

## 开发者信息

请向 [`testing` 分支](https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing) 发送拉取请求。

如要尝试 `testing` 分支，请这样操作：

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing --debug
或
sudo yunohost app upgrade armadietto -u https://github.com/YunoHost-Apps/armadietto_ynh/tree/testing --debug
```

**有关应用打包的更多信息：** <https://yunohost.org/packaging_apps>
