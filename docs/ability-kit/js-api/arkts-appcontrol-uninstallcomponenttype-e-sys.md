# UninstallComponentType

```TypeScript
export enum UninstallComponentType
```

标识卸载时功能组件类型。

**Since:** 15

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

## EXTENSION

```TypeScript
EXTENSION = 1
```

服务扩展能力类型。仅支持service类型的[ExtensionAbility](docroot://quick-start/module-configuration-file.md#extensionabilities标签) 。 被拉起的ExtensionAbility通过want中bundleName、moduleName、abilityName字段共同确定。

**Since:** 15

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

## UI_EXTENSION

```TypeScript
UI_EXTENSION = 2
```

UI扩展能力类型。 被拉起的UIExtensionAbility通过want中bundleName、moduleName、abilityName字段共同确定，同时want.parameters中的 ability.want.params.uiExtensionType字段需要配置为 [UIExtensionAbility](docroot://application-models/uiextensionability-sys.md)的类型。

**Since:** 22

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

