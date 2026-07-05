# Metadata

元数据对象，可以通过 [bundleManager.getBundleInfoForSelf]./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int) 获取，其中参数bundleFlags至少包含GET_BUNDLE_INFO_WITH_METADATA。此对象在[ApplicationInfo]ApplicationInfo、 [HapModuleInfo]HapModuleInfo、[AbilityInfo]AbilityInfo、 [ExtensionAbilityInfo](arkts-extensionabilityinfo-i.md#ExtensionAbilityInfo)中均包含。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## valueId

```TypeScript
readonly valueId?: long
```

Indicates the value id of the metadata

**Type:** long

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## resource

```TypeScript
resource: string
```

Indicates the metadata resource

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## name

```TypeScript
name: string
```

Indicates the metadata name

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## value

```TypeScript
value: string
```

Indicates the metadata value

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

