# @ohos.bundle.installer

The module provides APIs for you to install, uninstall, and recover bundles on devices. > **NOTE** > > The APIs provided by this module are system APIs.

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { installer } from '@kit.AbilityKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getBundleInstaller](arkts-ability-getbundleinstaller-f-sys.md#getbundleinstaller-1) | Obtains a BundleInstaller object. This API uses an asynchronous callback to return the result. |
| [getBundleInstaller](arkts-ability-getbundleinstaller-f-sys.md#getbundleinstaller-2) | Obtains a BundleInstaller object. This API uses a promise to return the result. |
| [getBundleInstallerSync](arkts-ability-getbundleinstallersync-f-sys.md#getbundleinstallersync-1) | Obtains a BundleInstaller object. This API is a synchronous API. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [BundleInstaller](arkts-ability-bundleinstaller-i-sys.md) | Bundle installer interface, include install uninstall recover. |
| [CreateAppCloneParam](arkts-ability-createappcloneparam-i-sys.md) | Describes the parameters used for creating an application clone. |
| [DestroyAppCloneParam](arkts-ability-destroyappcloneparam-i-sys.md) | Describes the parameters used for destroying an application clone. |
| [HashParam](arkts-ability-hashparam-i-sys.md) | Defines the hash parameters for bundle installation and uninstall. |
| [InstallParam](arkts-ability-installparam-i-sys.md) | Defines the parameters that need to be specified for bundle installation, uninstall, or recovering. |
| [PGOParam](arkts-ability-pgoparam-i-sys.md) | Defines the parameters of the PGO configuration file. |
| [Parameters](arkts-ability-parameters-i-sys.md) | Describes the extended parameter information. |
| [PluginParam](arkts-ability-pluginparam-i-sys.md) | Defines the parameters for installing or uninstalling a plugin. |
| [UninstallParam](arkts-ability-uninstallparam-i-sys.md) | Defines the parameters required for the uninstall of a shared bundle. |
| [VerifyCodeParam](arkts-ability-verifycodeparam-i-sys.md) | Defines the information about the code signature file. |
<!--DelEnd-->

