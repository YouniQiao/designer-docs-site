# ExtensionAbilityFlag

```TypeScript
enum ExtensionAbilityFlag
```

扩展组件信息标志，指示需要获取的扩展组件信息的内容。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_EXTENSION_ABILITY_INFO_DEFAULT

```TypeScript
GET_EXTENSION_ABILITY_INFO_DEFAULT = 0x00000000
```

用于获取默认extensionAbilityInfo。获取的extensionAbilityInfo不包含permission、metadata 和禁用的extensionAbilityInfo。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_EXTENSION_ABILITY_INFO_WITH_PERMISSION

```TypeScript
GET_EXTENSION_ABILITY_INFO_WITH_PERMISSION = 0x00000001
```

用于获取包含permission的extensionAbilityInfo。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_EXTENSION_ABILITY_INFO_WITH_APPLICATION

```TypeScript
GET_EXTENSION_ABILITY_INFO_WITH_APPLICATION = 0x00000002
```

用于获取包含applicationInfo的extensionAbilityInfo。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_EXTENSION_ABILITY_INFO_WITH_METADATA

```TypeScript
GET_EXTENSION_ABILITY_INFO_WITH_METADATA = 0x00000004
```

用于获取包含metadata的extensionAbilityInfo。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_EXTENSION_ABILITY_INFO_WITH_SKILL

```TypeScript
GET_EXTENSION_ABILITY_INFO_WITH_SKILL = 0x00000010
```

用于获取包含skills的extensionAbilityInfo。

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

