# ExtensionContext

ExtensionContext是[ExtensionAbility](arkts-extensionability-c.md#ExtensionAbility)的上下文环境，继承自 [Context](docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#context)。 ExtensionContext模块提供访问特定[ExtensionAbility](arkts-extensionability-c.md#ExtensionAbility)的资源的能力。

**Inheritance:** ExtensionContextextends: Context.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## currentHapModuleInfo

```TypeScript
currentHapModuleInfo: HapModuleInfo
```

所属Hap包的信息。

**Type:** HapModuleInfo

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## extensionAbilityInfo

```TypeScript
extensionAbilityInfo: ExtensionAbilityInfo
```

所属[ExtensionAbility](arkts-extensionability-c.md#ExtensionAbility)的信息。

**Type:** ExtensionAbilityInfo

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## config

```TypeScript
config: Configuration
```

所属Module的配置信息。

**Type:** Configuration

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

