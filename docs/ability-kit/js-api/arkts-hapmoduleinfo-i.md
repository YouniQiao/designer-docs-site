# HapModuleInfo

Hap模块信息，未做特殊说明的属性，均通过 [bundle.getBundleInfo]./../@ohos.bundle:bundle.getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions) 获取。 > **说明：** > > 从API version 9开始，该模块不再维护，建议使用[bundleManager-HapModuleInfo](arkts-hapmoduleinfo-i.md#HapModuleInfo)替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** hapModuleInfo:HapModuleInfo

**System capability:** SystemCapability.BundleManager.BundleFramework

## iconId

```TypeScript
readonly iconId: number
```

模块图标ID。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.HapModuleInfo#iconId

**System capability:** SystemCapability.BundleManager.BundleFramework

## installationFree

```TypeScript
readonly installationFree: boolean
```

是否支持免安装，取值为true表示支持免安装，取值为false表示不支持免安装。

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.HapModuleInfo#installationFree

**System capability:** SystemCapability.BundleManager.BundleFramework

## moduleName

```TypeScript
readonly moduleName: string
```

模块名。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.HapModuleInfo#name

**System capability:** SystemCapability.BundleManager.BundleFramework

## icon

```TypeScript
readonly icon: string
```

模块图标。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.HapModuleInfo#icon

**System capability:** SystemCapability.BundleManager.BundleFramework

## description

```TypeScript
readonly description: string
```

模块描述信息。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.HapModuleInfo#description

**System capability:** SystemCapability.BundleManager.BundleFramework

## mainAbilityName

```TypeScript
readonly mainAbilityName: string
```

入口Ability名称。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## label

```TypeScript
readonly label: string
```

模块标签。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.HapModuleInfo#label

**System capability:** SystemCapability.BundleManager.BundleFramework

## supportedModes

```TypeScript
readonly supportedModes: number
```

模块支持的模式。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## deviceTypes

```TypeScript
readonly deviceTypes: Array<string>
```

支持运行的设备类型。

**Type:** Array<string>

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.HapModuleInfo#deviceTypes

**System capability:** SystemCapability.BundleManager.BundleFramework

## descriptionId

```TypeScript
readonly descriptionId: number
```

描述信息ID。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.HapModuleInfo#descriptionId

**System capability:** SystemCapability.BundleManager.BundleFramework

## backgroundImg

```TypeScript
readonly backgroundImg: string
```

模块背景图片。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## labelId

```TypeScript
readonly labelId: number
```

模块标签ID。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.HapModuleInfo#labelId

**System capability:** SystemCapability.BundleManager.BundleFramework

## reqCapabilities

```TypeScript
readonly reqCapabilities: Array<string>
```

模块运行需要的能力。

**Type:** Array<string>

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## name

```TypeScript
readonly name: string
```

模块名称。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.HapModuleInfo#name

**System capability:** SystemCapability.BundleManager.BundleFramework

## abilityInfo

```TypeScript
readonly abilityInfo: Array<AbilityInfo>
```

Ability信息。

**Type:** Array<AbilityInfo>

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.HapModuleInfo#abilitiesInfo

**System capability:** SystemCapability.BundleManager.BundleFramework

