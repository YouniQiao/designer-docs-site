# ExtensionAbilityInfo

ExtensionAbility信息，可以通过 [bundleManager.getBundleInfoForSelf]./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int) 获取自身的ExtensionAbility信息，其中参数[bundleFlags]./../@ohos.bundle.bundleManager:bundleManager.BundleFlag至少包含 GET_BUNDLE_INFO_WITH_HAP_MODULE和GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY。

**起始版本：** 9

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## exported

```TypeScript
readonly exported: boolean
```

判断ExtensionAbility是否可以被其他应用调用，取值为true表示ExtensionAbility可以被其他应用调用，取值为false表示ExtensionAbility不可以被其他应用调用。

**类型：** boolean

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## iconId

```TypeScript
readonly iconId: long
```

ExtensionAbility的图标资源ID。

**类型：** long

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## metadata

```TypeScript
readonly metadata: Array<Metadata>
```

ExtensionAbility的元信息。通过调用 [getBundleInfoForSelf]./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)接 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_HAP_MODULE、GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY和 GET_BUNDLE_INFO_WITH_METADATA获取。

**类型：** Array<Metadata>

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## extensionAbilityType

```TypeScript
readonly extensionAbilityType: bundleManager.ExtensionAbilityType
```

ExtensionAbility类型。

**类型：** bundleManager.ExtensionAbilityType

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## moduleName

```TypeScript
readonly moduleName: string
```

ExtensionAbility所属的HAP的名称。

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## enabled

```TypeScript
readonly enabled: boolean
```

ExtensionAbility是否可用，取值为true表示ExtensionAbility可用，取值为false表示ExtensionAbility不可用。

**类型：** boolean

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## skills

```TypeScript
readonly skills: Array<Skill>
```

ExtensionAbility的Skills信息。

**类型：** Array<Skill>

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## appIndex

```TypeScript
readonly appIndex: int
```

应用包的分身索引标识，仅在分身应用中生效。

**类型：** int

**起始版本：** 12

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## descriptionId

```TypeScript
readonly descriptionId: long
```

ExtensionAbility的描述资源ID。

**类型：** long

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## labelId

```TypeScript
readonly labelId: long
```

ExtensionAbility的标签资源ID。

**类型：** long

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## permissions

```TypeScript
readonly permissions: Array<string>
```

被其他应用ExtensionAbility调用时需要申请的权限集合。

**类型：** Array<string>

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## readPermission

```TypeScript
readonly readPermission: string
```

读取ExtensionAbility数据所需的权限。

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## name

```TypeScript
readonly name: string
```

ExtensionAbility名称。

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## bundleName

```TypeScript
readonly bundleName: string
```

应用Bundle名称。

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## applicationInfo

```TypeScript
readonly applicationInfo: ApplicationInfo
```

应用程序的配置信息<!--Del-->，可以通过调用 [queryExtensionAbilityInfo]./../@ohos.bundle.bundleManager:bundleManager.queryExtensionAbilityInfo(want: Want, extensionAbilityType: ExtensionAbilityType, extensionAbilityFlags: int, userId: int, callback: AsyncCallback<Array<ExtensionAbilityInfo>>) 接口，extensionAbilityFlags参数传入GET_EXTENSION_ABILITY_INFO_WITH_APPLICATION获取<!--DelEnd-->。 [getBundleInfoForSelf]./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)或 者 [getBundleInfo]./../@ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId: int, callback: AsyncCallback<BundleInfo>) 接口获取ExtensionAbilityInfo信息时不会返回该字段内容，可以通过获取[bundleInfo](arkts-bundleinfo-i.md#BundleInfo).appInfo对象来获取相关信息。

**类型：** ApplicationInfo

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

```TypeScript
readonly applicationInfo: ApplicationInfo | null
```

Obtains configuration information about an application

**类型：** ApplicationInfo | null

**起始版本：** 23

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## writePermission

```TypeScript
readonly writePermission: string
```

向ExtensionAbility写数据所需的权限。

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## extensionAbilityTypeName

```TypeScript
readonly extensionAbilityTypeName: string
```

ExtensionAbility的类型名称，取值请参考 [extensionabilities标签下的type字段](docroot://quick-start/module-configuration-file.md#extensionabilities标签)。

**类型：** string

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

