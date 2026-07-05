# Metadata

元数据对象，可以通过 [bundleManager.getBundleInfoForSelf]./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int) 获取，其中参数bundleFlags至少包含GET_BUNDLE_INFO_WITH_METADATA。此对象在[ApplicationInfo]ApplicationInfo、 [HapModuleInfo]HapModuleInfo、[AbilityInfo]AbilityInfo、 [ExtensionAbilityInfo](arkts-extensionabilityinfo-i.md#ExtensionAbilityInfo)中均包含。

**起始版本：** 9

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## valueId

```TypeScript
readonly valueId?: long
```

Indicates the value id of the metadata

**类型：** long

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## resource

```TypeScript
resource: string
```

Indicates the metadata resource

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## name

```TypeScript
name: string
```

Indicates the metadata name

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

## value

```TypeScript
value: string
```

Indicates the metadata value

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

