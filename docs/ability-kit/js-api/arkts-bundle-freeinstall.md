# @ohos.bundle.freeInstall

The module provides APIs for setting and obtaining installation-free information and APIs for obtaining BundlePackInfo and DispatchInfo. > **NOTE** > > The APIs provided by this module are system APIs.

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { freeInstall } from '@kit.AbilityKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getBundlePackInfo](arkts-ability-getbundlepackinfo-f-sys.md#getbundlepackinfo-1) | Obtains bundlePackInfo based on **bundleName** and **bundlePackFlag**. This API uses an asynchronous callback to return the result. |
| [getBundlePackInfo](arkts-ability-getbundlepackinfo-f-sys.md#getbundlepackinfo-2) | Obtains bundlePackInfo based on **bundleName** and **bundlePackFlag**. This API uses a promise to return the result. |
| [getDispatchInfo](arkts-ability-getdispatchinfo-f-sys.md#getdispatchinfo-1) | Obtains the dispatch information. This API uses an asynchronous callback to return the result. |
| [getDispatchInfo](arkts-ability-getdispatchinfo-f-sys.md#getdispatchinfo-2) | Obtains the dispatch information. This API uses a promise to return the result. |
| [isHapModuleRemovable](arkts-ability-ishapmoduleremovable-f-sys.md#ishapmoduleremovable-1) | Checks whether a module can be removed. This API uses an asynchronous callback to return the result. |
| [isHapModuleRemovable](arkts-ability-ishapmoduleremovable-f-sys.md#ishapmoduleremovable-2) | Checks whether a module can be removed. This API uses a promise to return the result. |
| [setHapModuleUpgradeFlag](arkts-ability-sethapmoduleupgradeflag-f-sys.md#sethapmoduleupgradeflag-1) | Sets an upgrade flag for a module. This API uses an asynchronous callback to return the result. |
| [setHapModuleUpgradeFlag](arkts-ability-sethapmoduleupgradeflag-f-sys.md#sethapmoduleupgradeflag-2) | Sets an upgrade flag for a module. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [BundlePackFlag](arkts-ability-bundlepackflag-e-sys.md) | Flag of the bundle package. |
| [UpgradeFlag](arkts-ability-upgradeflag-e-sys.md) | Upgrade flag, which is for internal use only. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [AbilityFormInfo](arkts-ability-abilityforminfo-t-sys.md) | Defines the widget information. |
| [ApiVersion](arkts-ability-apiversion-t-sys.md) | Defines the API version of the module. |
| [BundleConfigInfo](arkts-ability-bundleconfiginfo-t-sys.md) | Defines the bundle configuration information. |
| [BundlePackInfo](arkts-ability-bundlepackinfo-t-sys.md) | Defines the bundle information. |
| [DispatchInfo](arkts-ability-dispatchinfo-t-sys.md) | Defines the installation-free structure and API version information. |
| [ExtensionAbility](arkts-ability-extensionability-t-sys.md) | Defines the ExtensionAbility configuration information. |
| [ModuleAbilityInfo](arkts-ability-moduleabilityinfo-t-sys.md) | Defines the ability information of the module. |
| [ModuleConfigInfo](arkts-ability-moduleconfiginfo-t-sys.md) | Defines the module configuration information of the bundle. |
| [ModuleDistroInfo](arkts-ability-moduledistroinfo-t-sys.md) | Defines the distribution information of the module. |
| [PackageConfig](arkts-ability-packageconfig-t-sys.md) | Defines the package configuration information in the **pack.info** file. |
| [PackageSummary](arkts-ability-packagesummary-t-sys.md) | Defines the package summary information in the **pack.info** file. |
| [Version](arkts-ability-version-t-sys.md) | Defines the version in the **pack.info** file. |
<!--DelEnd-->

