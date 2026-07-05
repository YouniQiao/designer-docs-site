# AbilityInfo

Ability信息，未做特殊说明的属性，均通过 [bundle.getAbilityInfo]./../@ohos.bundle:bundle.getAbilityInfo(bundleName: string, abilityName: string)获取。 > **说明：** > > 从API version 9开始，该模块不再维护，建议使用[bundleManager-AbilityInfo](arkts-abilityinfo-i.md#AbilityInfo)替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** abilityInfo:AbilityInfo

**System capability:** SystemCapability.BundleManager.BundleFramework

## formEnabled

```TypeScript
readonly formEnabled: boolean
```

判断Ability是否提供卡片能力，取值为true表示Ability提供卡片能力，取值为false表示Ability不提供卡片能力。 **模型约束：** 此接口仅可在FA模型下使用。

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.BundleManager.BundleFramework

## moduleName

```TypeScript
readonly moduleName: string
```

Ability所属的HAP的名称。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#moduleName

**System capability:** SystemCapability.BundleManager.BundleFramework

## icon

```TypeScript
readonly icon: string
```

Ability的图标资源文件索引。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#icon

**System capability:** SystemCapability.BundleManager.BundleFramework

## description

```TypeScript
readonly description: string
```

Ability的描述。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#description

**System capability:** SystemCapability.BundleManager.BundleFramework

## type

```TypeScript
readonly type: bundle.AbilityType
```

Ability类型。 **模型约束：** 此接口仅可在FA模型下使用。

**Type:** bundle.AbilityType

**Since:** 7

**Deprecated since:** 9

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.BundleManager.BundleFramework

## enabled

```TypeScript
readonly enabled: boolean
```

Ability是否可用，取值为true表示Ability可用，取值为false表示Ability不可用。

**Type:** boolean

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#enabled

**System capability:** SystemCapability.BundleManager.BundleFramework

## metaData

```TypeScript
readonly metaData: Array<CustomizeData>
```

Ability的元信息。 通过调用[bundle.getAbilityInfo]./../@ohos.bundle:bundle.getAbilityInfo(bundleName: string, abilityName: string) 接口时，传入GET_ABILITY_INFO_WITH_METADATA获取。

**Type:** Array<CustomizeData>

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#metadata

**System capability:** SystemCapability.BundleManager.BundleFramework

## descriptionId

```TypeScript
readonly descriptionId: number
```

Ability的描述的资源id值。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#descriptionId

**System capability:** SystemCapability.BundleManager.BundleFramework

## labelId

```TypeScript
readonly labelId: number
```

Ability的标签的资源id值。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#labelId

**System capability:** SystemCapability.BundleManager.BundleFramework

## permissions

```TypeScript
readonly permissions: Array<string>
```

被其他应用Ability调用时需要申请的权限集合。 通过调用[bundle.getAbilityInfo]./../@ohos.bundle:bundle.getAbilityInfo(bundleName: string, abilityName: string) 接口时，传入GET_ABILITY_INFO_WITH_PERMISSION获取。

**Type:** Array<string>

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#permissions

**System capability:** SystemCapability.BundleManager.BundleFramework

## readPermission

```TypeScript
readonly readPermission: string
```

读取Ability数据所需的权限。 **模型约束：** 此接口仅可在FA模型下使用。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.BundleManager.BundleFramework

## targetAbility

```TypeScript
readonly targetAbility: string
```

当前Ability重用的目标Ability。 **模型约束：** 此接口仅可在FA模型下使用。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.BundleManager.BundleFramework

## iconId

```TypeScript
readonly iconId: number
```

Ability的图标的资源id值。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#iconId

**System capability:** SystemCapability.BundleManager.BundleFramework

## orientation

```TypeScript
readonly orientation: bundle.DisplayOrientation
```

Ability的显示模式。

**Type:** bundle.DisplayOrientation

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#orientation

**System capability:** SystemCapability.BundleManager.BundleFramework

## process

```TypeScript
readonly process: string
```

Ability的进程名称。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#process

**System capability:** SystemCapability.BundleManager.BundleFramework

## backgroundModes

```TypeScript
readonly backgroundModes: number
```

表示后台服务的类型。 **模型约束：** 此接口仅可在FA模型下使用。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.BundleManager.BundleFramework

## isVisible

```TypeScript
readonly isVisible: boolean
```

判断Ability是否可以被其他应用调用，取值为true表示Ability可以被其他应用调用，取值为false表示Ability不可以被其他应用调用。

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#exported

**System capability:** SystemCapability.BundleManager.BundleFramework

## label

```TypeScript
readonly label: string
```

Ability对用户显示的名称。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#label

**System capability:** SystemCapability.BundleManager.BundleFramework

## uri

```TypeScript
readonly uri: string
```

获取Ability的统一资源标识符（URI）。 **模型约束：** 此接口仅可在FA模型下使用。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.BundleManager.BundleFramework

## deviceTypes

```TypeScript
readonly deviceTypes: Array<string>
```

Ability支持的设备类型。

**Type:** Array<string>

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#deviceTypes

**System capability:** SystemCapability.BundleManager.BundleFramework

## launchMode

```TypeScript
readonly launchMode: bundle.LaunchMode
```

Ability的启动模式。

**Type:** bundle.LaunchMode

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#launchType

**System capability:** SystemCapability.BundleManager.BundleFramework

## name

```TypeScript
readonly name: string
```

Ability名称。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#name

**System capability:** SystemCapability.BundleManager.BundleFramework

## bundleName

```TypeScript
readonly bundleName: string
```

应用Bundle名称。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#bundleName

**System capability:** SystemCapability.BundleManager.BundleFramework

## subType

```TypeScript
readonly subType: bundle.AbilitySubType
```

Ability中枚举使用的模板的子类型。 **模型约束：** 此接口仅可在FA模型下使用。

**Type:** bundle.AbilitySubType

**Since:** 7

**Deprecated since:** 9

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.BundleManager.BundleFramework

## applicationInfo

```TypeScript
readonly applicationInfo: ApplicationInfo
```

应用程序的配置信息。 通过调用[bundle.getAbilityInfo]./../@ohos.bundle:bundle.getAbilityInfo(bundleName: string, abilityName: string) 接口时，传入GET_ABILITY_INFO_WITH_APPLICATION获取。

**Type:** ApplicationInfo

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.AbilityInfo#applicationInfo

**System capability:** SystemCapability.BundleManager.BundleFramework

## writePermission

```TypeScript
readonly writePermission: string
```

向Ability写数据所需的权限。 **模型约束：** 此接口仅可在FA模型下使用。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.BundleManager.BundleFramework

## deviceCapabilities

```TypeScript
readonly deviceCapabilities: Array<string>
```

Ability需要的设备能力。

**Type:** Array<string>

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

