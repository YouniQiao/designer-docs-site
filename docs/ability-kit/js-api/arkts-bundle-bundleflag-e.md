# BundleFlag

```TypeScript
enum BundleFlag
```

> **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [bundleManager.BundleFlag](arkts-bundlemanager-bundleflag-e.md#BundleFlag)替代。 包信息标志，指示需要获取的包信息的内容。 当接口与标志不匹配时，该标志会被忽略，例如获取application时使用GET_ABILITY_INFO_WITH_PERMISSION对结果不会产生影响。 标志可以叠加使用，例如使用GET_APPLICATION_INFO_WITH_PERMISSION + GET_APPLICATION_INFO_WITH_DISABLE可以使结果同时包含应用权限信息和被禁用的应用信息。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.bundle.bundleManager:bundleManager.BundleFlag

**System capability:** SystemCapability.BundleManager.BundleFramework

## GET_BUNDLE_DEFAULT

```TypeScript
GET_BUNDLE_DEFAULT = 0x00000000
```

获取默认的应用信息。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.BundleFlag#GET_BUNDLE_INFO_DEFAULT

**System capability:** SystemCapability.BundleManager.BundleFramework

## GET_BUNDLE_WITH_ABILITIES

```TypeScript
GET_BUNDLE_WITH_ABILITIES = 0x00000001
```

获取包括Ability信息的包信息。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.BundleFlag#GET_BUNDLE_INFO_WITH_ABILITY

**System capability:** SystemCapability.BundleManager.BundleFramework

## GET_ABILITY_INFO_WITH_PERMISSION

```TypeScript
GET_ABILITY_INFO_WITH_PERMISSION = 0x00000002
```

获取包括权限的Ability信息。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityFlag#GET_ABILITY_INFO_WITH_PERMISSION

**System capability:** SystemCapability.BundleManager.BundleFramework

## GET_ABILITY_INFO_WITH_APPLICATION

```TypeScript
GET_ABILITY_INFO_WITH_APPLICATION = 0x00000004
```

获取包括Application的ability信息。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityFlag#GET_ABILITY_INFO_WITH_APPLICATION

**System capability:** SystemCapability.BundleManager.BundleFramework

## GET_APPLICATION_INFO_WITH_PERMISSION

```TypeScript
GET_APPLICATION_INFO_WITH_PERMISSION = 0x00000008
```

安装冲突 （常见于升级和已有应用基本信息不一致）。

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## GET_BUNDLE_WITH_REQUESTED_PERMISSION

```TypeScript
GET_BUNDLE_WITH_REQUESTED_PERMISSION = 0x00000010
```

获取包括所需权限的包信息。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.BundleFlag#GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION

**System capability:** SystemCapability.BundleManager.BundleFramework

## GET_ALL_APPLICATION_INFO

```TypeScript
GET_ALL_APPLICATION_INFO = 0xFFFF0000
```

安装冲突 （常见于升级和已有应用基本信息不一致）。

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## GET_ABILITY_INFO_WITH_METADATA

```TypeScript
GET_ABILITY_INFO_WITH_METADATA = 0x00000020
```

获取ability的元数据信息。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityFlag#GET_ABILITY_INFO_WITH_METADATA

**System capability:** SystemCapability.BundleManager.BundleFramework

## GET_APPLICATION_INFO_WITH_METADATA

```TypeScript
GET_APPLICATION_INFO_WITH_METADATA = 0x00000040
```

缺少卸载权限。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## GET_ABILITY_INFO_SYSTEMAPP_ONLY

```TypeScript
GET_ABILITY_INFO_SYSTEMAPP_ONLY = 0x00000080
```

获取仅包括系统应用的ability信息。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityFlag#GET_ABILITY_INFO_ONLY_SYSTEM_APP

**System capability:** SystemCapability.BundleManager.BundleFramework

## GET_ABILITY_INFO_WITH_DISABLE

```TypeScript
GET_ABILITY_INFO_WITH_DISABLE = 0x00000100
```

获取包括被禁用的ability信息。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityFlag#GET_ABILITY_INFO_WITH_DISABLE

**System capability:** SystemCapability.BundleManager.BundleFramework

## GET_APPLICATION_INFO_WITH_DISABLE

```TypeScript
GET_APPLICATION_INFO_WITH_DISABLE = 0x00000200
```

缺少卸载权限。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

