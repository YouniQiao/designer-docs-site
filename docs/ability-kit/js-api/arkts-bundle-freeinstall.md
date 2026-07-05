# @ohos.bundle.freeInstall

本模块提供免安装相关的设置和查询能力，支持BundlePackInfo、DispatchInfo等信息的查询。 > **说明：** > > 本模块为系统接口。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { freeInstall } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[getBundlePackInfo](arkts-freeinstall-getbundlepackinfo-f-sys.md#getBundlePackInfo-1) | 基于bundleName和bundlePackFlag来获取bundlePackInfo。使用callback异步回调。 |
| <!--DelRow-->[getBundlePackInfo](arkts-freeinstall-getbundlepackinfo-f-sys.md#getBundlePackInfo-2) | 基于bundleName和BundlePackFlag来获取bundlePackInfo。使用Promise异步回调。 |
| <!--DelRow-->[getDispatchInfo](arkts-freeinstall-getdispatchinfo-f-sys.md#getDispatchInfo-1) | 获取有关dispatch版本的信息。使用callback异步回调。 |
| <!--DelRow-->[getDispatchInfo](arkts-freeinstall-getdispatchinfo-f-sys.md#getDispatchInfo-2) | 获取有关dispatch版本的信息。使用Promise异步回调。 |
| <!--DelRow-->[isHapModuleRemovable](arkts-freeinstall-ishapmoduleremovable-f-sys.md#isHapModuleRemovable-1) | 查询指定模块是否可以被移除。使用callback异步回调。 |
| <!--DelRow-->[isHapModuleRemovable](arkts-freeinstall-ishapmoduleremovable-f-sys.md#isHapModuleRemovable-2) | 查询指定模块是否可以被移除。使用Promise异步回调。 |
| <!--DelRow-->[setHapModuleUpgradeFlag](arkts-freeinstall-sethapmoduleupgradeflag-f-sys.md#setHapModuleUpgradeFlag-1) | 设置指定模块是否升级。使用callback异步回调。 |
| <!--DelRow-->[setHapModuleUpgradeFlag](arkts-freeinstall-sethapmoduleupgradeflag-f-sys.md#setHapModuleUpgradeFlag-2) | 设置指定模块是否升级。使用Promise异步回调。 |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[AbilityFormInfo](arkts-freeinstall-abilityforminfo-t-sys.md) | 卡片信息。 |
| <!--DelRow-->[AbilityFormInfo](arkts-freeinstall-abilityforminfo-t-sys.md) | 卡片信息。 |
| <!--DelRow-->[ApiVersion](arkts-freeinstall-apiversion-t-sys.md) | module的api版本。 |
| <!--DelRow-->[ApiVersion](arkts-freeinstall-apiversion-t-sys.md) | module的api版本。 |
| <!--DelRow-->[BundleConfigInfo](arkts-freeinstall-bundleconfiginfo-t-sys.md) | 包的配置信息。 |
| <!--DelRow-->[BundleConfigInfo](arkts-freeinstall-bundleconfiginfo-t-sys.md) | 包的配置信息。 |
| <!--DelRow-->[BundlePackInfo](arkts-freeinstall-bundlepackinfo-t-sys.md) | 应用包信息。 |
| <!--DelRow-->[BundlePackInfo](arkts-freeinstall-bundlepackinfo-t-sys.md) | 应用包信息。 |
| <!--DelRow-->[DispatchInfo](arkts-freeinstall-dispatchinfo-t-sys.md) | 免安装结构体和接口版本信息类。 |
| <!--DelRow-->[ExtensionAbility](arkts-freeinstall-extensionability-t-sys.md) | extensionAbilities的配置信息。 |
| <!--DelRow-->[ExtensionAbility](arkts-freeinstall-extensionability-t-sys.md) | extensionAbilities的配置信息。 |
| <!--DelRow-->[ModuleAbilityInfo](arkts-freeinstall-moduleabilityinfo-t-sys.md) | module包含的ability组件信息。 |
| <!--DelRow-->[ModuleAbilityInfo](arkts-freeinstall-moduleabilityinfo-t-sys.md) | module包含的ability组件信息。 |
| <!--DelRow-->[ModuleConfigInfo](arkts-freeinstall-moduleconfiginfo-t-sys.md) | 包的module配置信息。 |
| <!--DelRow-->[ModuleConfigInfo](arkts-freeinstall-moduleconfiginfo-t-sys.md) | 包的module配置信息。 |
| <!--DelRow-->[ModuleDistroInfo](arkts-freeinstall-moduledistroinfo-t-sys.md) | module发行版信息。 |
| <!--DelRow-->[ModuleDistroInfo](arkts-freeinstall-moduledistroinfo-t-sys.md) | module发行版信息。 |
| <!--DelRow-->[PackageConfig](arkts-freeinstall-packageconfig-t-sys.md) | pack.info的包信息。 |
| <!--DelRow-->[PackageConfig](arkts-freeinstall-packageconfig-t-sys.md) | pack.info的包信息。 |
| <!--DelRow-->[PackageSummary](arkts-freeinstall-packagesummary-t-sys.md) | pack.info中的包摘要信息。 |
| <!--DelRow-->[PackageSummary](arkts-freeinstall-packagesummary-t-sys.md) | pack.info中的包摘要信息。 |
| <!--DelRow-->[Version](arkts-freeinstall-version-t-sys.md) | 包的版本。 |
| <!--DelRow-->[Version](arkts-freeinstall-version-t-sys.md) | 包的版本。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[BundlePackFlag](arkts-freeinstall-bundlepackflag-e-sys.md) | 要查询的应用包标志 |
| <!--DelRow-->[UpgradeFlag](arkts-freeinstall-upgradeflag-e-sys.md) | 仅供内部系统使用标志位 |

