# @ohos.bundle.installer

在设备上安装、升级和卸载应用。 > **说明：** > > 本模块为系统接口。

**起始版本：** 9

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { installer } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getBundleInstaller](arkts-installer-getbundleinstaller-f-sys.md#getBundleInstaller-1) | 获取BundleInstaller对象。使用callback异步回调。 |
| <!--DelRow-->[getBundleInstaller](arkts-installer-getbundleinstaller-f-sys.md#getBundleInstaller-2) | 获取BundleInstaller对象。使用Promise异步回调。 |
| <!--DelRow-->[getBundleInstallerSync](arkts-installer-getbundleinstallersync-f-sys.md#getBundleInstallerSync-1) | 获取并返回BundleInstaller对象。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[BundleInstaller](arkts-installer-bundleinstaller-i-sys.md) | Bundle installer interface, include install uninstall recover. |
| <!--DelRow-->[CreateAppCloneParam](arkts-installer-createappcloneparam-i-sys.md) | 创建分身应用可指定的参数信息。 |
| <!--DelRow-->[DestroyAppCloneParam](arkts-installer-destroyappcloneparam-i-sys.md) | 删除分身应用可指定的参数信息。 |
| <!--DelRow-->[HashParam](arkts-installer-hashparam-i-sys.md) | 应用程序安装卸载哈希参数信息。 |
| <!--DelRow-->[InstallParam](arkts-installer-installparam-i-sys.md) | 应用程序安装、卸载或恢复需指定的参数信息。 |
| <!--DelRow-->[Parameters](arkts-installer-parameters-i-sys.md) | 扩展参数信息。 |
| <!--DelRow-->[PGOParam](arkts-installer-pgoparam-i-sys.md) | PGO（Profile-guided Optimization）配置文件参数信息。 |
| <!--DelRow-->[PluginParam](arkts-installer-pluginparam-i-sys.md) | 插件应用安装、卸载的参数信息。 |
| <!--DelRow-->[UninstallParam](arkts-installer-uninstallparam-i-sys.md) | 共享包卸载需指定的参数信息。 |
| <!--DelRow-->[VerifyCodeParam](arkts-installer-verifycodeparam-i-sys.md) | 应用程序代码签名文件信息。 |

