# AbilityFlag

```TypeScript
enum AbilityFlag
```

Ability组件信息标志，指示需要获取的Ability组件信息的内容。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_ABILITY_INFO_DEFAULT

```TypeScript
GET_ABILITY_INFO_DEFAULT = 0x00000000
```

获取默认[AbilityInfo]bundleManager/AbilityInfo，获取的AbilityInfo不包含permissions、metadata、被禁用Ability对应的 AbilityInfo。<!--Del-->通过 [setAbilityEnabled接口](arkts-bundlemanager-setabilityenabled-f-sys.md#setAbilityEnabled-2) 可设置Ability禁用状态、通过 [isAbilityEnabled接口](arkts-bundlemanager-isabilityenabled-f-sys.md#isAbilityEnabled-3)可获取 Ability禁用状态。<!--DelEnd-->

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_ABILITY_INFO_WITH_PERMISSION

```TypeScript
GET_ABILITY_INFO_WITH_PERMISSION = 0x00000001
```

获取包含permissions的AbilityInfo。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_ABILITY_INFO_WITH_APPLICATION

```TypeScript
GET_ABILITY_INFO_WITH_APPLICATION = 0x00000002
```

获取包含applicationInfo的AbilityInfo。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_ABILITY_INFO_WITH_METADATA

```TypeScript
GET_ABILITY_INFO_WITH_METADATA = 0x00000004
```

获取包含metadata的AbilityInfo。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_ABILITY_INFO_WITH_DISABLE

```TypeScript
GET_ABILITY_INFO_WITH_DISABLE = 0x00000008
```

获取被禁用Ability对应的AbilityInfo。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_ABILITY_INFO_ONLY_SYSTEM_APP

```TypeScript
GET_ABILITY_INFO_ONLY_SYSTEM_APP = 0x00000010
```

获取系统应用对应的AbilityInfo。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_ABILITY_INFO_WITH_APP_LINKING

```TypeScript
GET_ABILITY_INFO_WITH_APP_LINKING = 0x00000040
```

获取通过<!--RP3-->[域名校验](docroot://application-models/app-linking-startup.md#实现原理)<!--RP3End-->筛选的AbilityInfo。

**Since:** 12

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_ABILITY_INFO_WITH_SKILL

```TypeScript
GET_ABILITY_INFO_WITH_SKILL = 0x00000080
```

获取包含skills的AbilityInfo。

**Since:** 12

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

