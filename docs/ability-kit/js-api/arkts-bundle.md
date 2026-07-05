# @ohos.bundle

本模块提供应用信息查询能力，支持[包信息]{@link ./bundle/bundleInfo}、[应用信息]{@link ./bundle/applicationInfo:ApplicationInfo}、 [Ability组件信息]{@link ./bundle/abilityInfo:AbilityInfo}等信息的查询，以及应用禁用状态的查询、设置等。 > **说明：** > > 从API version 9开始，该模块不再维护，建议使用[@ohos.bundle.bundleManager]{@link @ohos.bundle.bundleManager:bundleManager}替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.bundle.bundleManager:bundleManager

**System capability:** SystemCapability.BundleManager.BundleFramework

## Modules to Import

```TypeScript
import { bundle } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[cleanBundleCacheFiles](arkts-bundle-cleanbundlecachefiles-f-sys.md#cleanBundleCacheFiles-1) | 清除指定应用程序的缓存数据，使用callback异步回调。 |
| <!--DelRow-->[cleanBundleCacheFiles](arkts-bundle-cleanbundlecachefiles-f-sys.md#cleanBundleCacheFiles-2) | 清除指定应用程序的缓存数据，使用Promise异步回调。 |
| [getAbilityIcon](arkts-bundle-getabilityicon-f.md#getAbilityIcon-1) | 通过bundleName和abilityName获取对应Icon的[PixelMap]{@link @ohos.multimedia.image:image}，使用callback异步回调。 获取调用方自己的信息时不需要权限。 |
| [getAbilityIcon](arkts-bundle-getabilityicon-f.md#getAbilityIcon-2) | 通过bundleName和abilityName获取对应Icon的[PixelMap]{@link @ohos.multimedia.image:image}，使用Promise异步回调。 获取调用方自己的信息时不需要权限。 |
| [getAbilityInfo](arkts-bundle-getabilityinfo-f.md#getAbilityInfo-1) | 通过Bundle名称和组件名获取Ability组件信息，使用callback异步回调。 获取调用方自己的信息时不需要权限。 |
| [getAbilityInfo](arkts-bundle-getabilityinfo-f.md#getAbilityInfo-2) | 通过Bundle名称和组件名获取Ability组件信息，使用Promise形式异步回调。 获取调用方自己的信息时不需要权限。 |
| [getAbilityLabel](arkts-bundle-getabilitylabel-f.md#getAbilityLabel-1) | 通过Bundle名称和Ability组件名获取应用名称，使用callback异步回调。 获取调用方自己的信息时不需要权限。 |
| [getAbilityLabel](arkts-bundle-getabilitylabel-f.md#getAbilityLabel-2) | 通过Bundle名称和ability名称获取应用名称，使用Promise异步回调。 获取调用方自己的信息时不需要权限。 |
| [getAllApplicationInfo](arkts-bundle-getallapplicationinfo-f.md#getAllApplicationInfo-1) | 获取指定用户下所有已安装的应用信息，使用callback异步回调。 |
| [getAllApplicationInfo](arkts-bundle-getallapplicationinfo-f.md#getAllApplicationInfo-2) | 获取调用方所在用户下已安装的应用信息，使用callback异步回调。 |
| [getAllApplicationInfo](arkts-bundle-getallapplicationinfo-f.md#getAllApplicationInfo-3) | 获取指定用户下所有已安装的应用信息，使用promise异步回调。 |
| [getAllBundleInfo](arkts-bundle-getallbundleinfo-f.md#getAllBundleInfo-1) | 获取系统中指定用户下所有的BundleInfo，使用callback异步回调。 |
| [getAllBundleInfo](arkts-bundle-getallbundleinfo-f.md#getAllBundleInfo-2) | 获取当前用户所有的BundleInfo，使用callback异步回调。 |
| [getAllBundleInfo](arkts-bundle-getallbundleinfo-f.md#getAllBundleInfo-3) | 获取指定用户所有的BundleInfo，使用Promise形式异步回调。 |
| [getApplicationInfo](arkts-bundle-getapplicationinfo-f.md#getApplicationInfo-1) | 根据给定的Bundle名称获取指定用户下的ApplicationInfo，使用callback异步回调。 获取调用方自己的信息时不需要权限。 |
| [getApplicationInfo](arkts-bundle-getapplicationinfo-f.md#getApplicationInfo-2) | 根据给定的Bundle名称获取ApplicationInfo，使用callback异步回调。 获取调用方自己的信息时不需要权限。 |
| [getApplicationInfo](arkts-bundle-getapplicationinfo-f.md#getApplicationInfo-3) | 根据给定的Bundle名称获取ApplicationInfo。使用Promise异步回调。 获取调用方自己的信息时不需要权限。 |
| [getBundleArchiveInfo](arkts-bundle-getbundlearchiveinfo-f.md#getBundleArchiveInfo-1) | 获取有关HAP中包含的应用程序包的信息，使用callback异步回调。 |
| [getBundleArchiveInfo](arkts-bundle-getbundlearchiveinfo-f.md#getBundleArchiveInfo-2) | 获取有关HAP中包含的应用程序包的信息，使用Promise异步回调。 |
| [getBundleInfo](arkts-bundle-getbundleinfo-f.md#getBundleInfo-1) | 根据给定的Bundle名称获取BundleInfo，使用callback异步回调。 获取调用方自己的信息时不需要权限。 |
| [getBundleInfo](arkts-bundle-getbundleinfo-f.md#getBundleInfo-2) | 根据给定的Bundle名称获取BundleInfo，使用callback异步回调。 获取调用方自己的信息时不需要权限。 |
| [getBundleInfo](arkts-bundle-getbundleinfo-f.md#getBundleInfo-3) | 根据给定的Bundle名称获取BundleInfo，使用Promise异步回调。 获取调用方自己的信息时不需要权限。 |
| <!--DelRow-->[getBundleInstaller](arkts-bundle-getbundleinstaller-f-sys.md#getBundleInstaller-1) | 获取用于安装包的接口，使用callback异步回调。 |
| <!--DelRow-->[getBundleInstaller](arkts-bundle-getbundleinstaller-f-sys.md#getBundleInstaller-2) | 获取用于安装包的接口，使用Promise异步回调，返回安装接口对象。 |
| [getLaunchWantForBundle](arkts-bundle-getlaunchwantforbundle-f.md#getLaunchWantForBundle-1) | 查询拉起指定应用的want对象，使用callback异步回调。 |
| [getLaunchWantForBundle](arkts-bundle-getlaunchwantforbundle-f.md#getLaunchWantForBundle-2) | 查询拉起指定应用的want对象，使用Promise异步回调。 |
| [getNameForUid](arkts-bundle-getnameforuid-f.md#getNameForUid-1) |  |
| [getNameForUid](arkts-bundle-getnameforuid-f.md#getNameForUid-2) | 通过uid获取对应的Bundle名称，使用Promise异步回调。 |
| <!--DelRow-->[getPermissionDef](arkts-bundle-getpermissiondef-f-sys.md#getPermissionDef-1) | 按权限名称获取权限的详细信息，使用callback异步回调。 |
| <!--DelRow-->[getPermissionDef](arkts-bundle-getpermissiondef-f-sys.md#getPermissionDef-2) | 按权限名称获取权限的详细信息，使用promise异步回调。 |
| [isAbilityEnabled](arkts-bundle-isabilityenabled-f.md#isAbilityEnabled-1) | 根据给定的AbilityInfo查询ability是否已经启用，使用callback异步回调。 |
| [isAbilityEnabled](arkts-bundle-isabilityenabled-f.md#isAbilityEnabled-2) | 根据给定的AbilityInfo查询ability是否已经启用，使用Promise异步回调。 |
| [isApplicationEnabled](arkts-bundle-isapplicationenabled-f.md#isApplicationEnabled-1) | 根据给定的bundleName查询指定应用程序是否已经启用，使用callback异步回调。 |
| [isApplicationEnabled](arkts-bundle-isapplicationenabled-f.md#isApplicationEnabled-2) | 根据给定的bundleName查询指定应用程序是否已经启用，使用Promise异步回调。 |
| [queryAbilityByWant](arkts-bundle-queryabilitybywant-f.md#queryAbilityByWant-1) | 根据给定的意图获取指定用户下Ability信息，使用callback异步回调。 获取调用方自己的信息时不需要权限。 |
| [queryAbilityByWant](arkts-bundle-queryabilitybywant-f.md#queryAbilityByWant-2) | 根据给定的意图获取Ability信息，使用callback异步回调。 获取调用方自己的信息时不需要权限。 |
| [queryAbilityByWant](arkts-bundle-queryabilitybywant-f.md#queryAbilityByWant-3) | 根据给定的意图获取Ability组件信息，使用Promise异步回调。 获取调用方自己的信息时不需要权限。 |
| <!--DelRow-->[setAbilityEnabled](arkts-bundle-setabilityenabled-f-sys.md#setAbilityEnabled-1) | 设置是否启用指定的Ability组件，使用callback异步回调。 |
| <!--DelRow-->[setAbilityEnabled](arkts-bundle-setabilityenabled-f-sys.md#setAbilityEnabled-2) | 设置是否启用指定的Ability组件，使用Promise异步回调。 |
| <!--DelRow-->[setApplicationEnabled](arkts-bundle-setapplicationenabled-f-sys.md#setApplicationEnabled-1) | 设置是否启用指定的应用程序，使用callback异步回调。 |
| <!--DelRow-->[setApplicationEnabled](arkts-bundle-setapplicationenabled-f-sys.md#setApplicationEnabled-2) | 设置是否启用指定的应用程序，使用Promise异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| [BundleOptions](arkts-bundle-bundleoptions-i.md) | > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，暂无替代接口。 查询选项，包含userId。 |

### Enums

| Name | Description |
| --- | --- |
| [AbilitySubType](arkts-bundle-abilitysubtype-e.md) | > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，暂无替代接口。 Ability组件的子类型。 |
| [AbilityType](arkts-bundle-abilitytype-e.md) | > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [bundleManager.AbilityType]{@link @ohos.bundle.bundleManager:bundleManager.AbilityType}替代。 Ability组件类型。 |
| [BundleFlag](arkts-bundle-bundleflag-e.md) | > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [bundleManager.BundleFlag]{@link @ohos.bundle.bundleManager:bundleManager.BundleFlag}替代。 包信息标志，指示需要获取的包信息的内容。 当接口与标志不匹配时，该标志会被忽略，例如获取application时使用GET_ABILITY_INFO_WITH_PERMISSION对结果不会产生影响。 标志可以叠加使用，例如使用GET_APPLICATION_INFO_WITH_PERMISSION + GET_APPLICATION_INFO_WITH_DISABLE可以使结果同时包含应用权限信息和被禁用的应用信息。 |
| [ColorMode](arkts-bundle-colormode-e.md) | > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，暂无替代接口。 应用、卡片等的颜色模式。 |
| [DisplayOrientation](arkts-bundle-displayorientation-e.md) | > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [bundleManager.DisplayOrientation]{@link @ohos.bundle.bundleManager:bundleManager.DisplayOrientation}替代。 屏幕显示方向。 |
| [GrantStatus](arkts-bundle-grantstatus-e.md) | > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [bundleManager.PermissionGrantState]{@link @ohos.bundle.bundleManager:bundleManager.PermissionGrantState}替代。 权限授予状态。 |
| [InstallErrorCode](arkts-bundle-installerrorcode-e.md) | > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[包管理子系统通用错误码](docroot://reference/apis-ability-kit/errorcode-bundle.md) > 替代。 |
| [LaunchMode](arkts-bundle-launchmode-e.md) | > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [bundleManager.LaunchType]{@link @ohos.bundle.bundleManager:bundleManager.LaunchType}替代。 Ability组件的启动模式。 |

