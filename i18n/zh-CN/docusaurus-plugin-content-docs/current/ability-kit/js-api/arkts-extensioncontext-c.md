# ExtensionContext

ExtensionContext是[ExtensionAbility](arkts-extensionability-c.md#ExtensionAbility)的上下文环境，继承自 [Context](docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#context)。 ExtensionContext模块提供访问特定[ExtensionAbility](arkts-extensionability-c.md#ExtensionAbility)的资源的能力。

**继承实现关系：** ExtensionContext继承自：Context。

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## currentHapModuleInfo

```TypeScript
currentHapModuleInfo: HapModuleInfo
```

所属Hap包的信息。

**类型：** HapModuleInfo

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## extensionAbilityInfo

```TypeScript
extensionAbilityInfo: ExtensionAbilityInfo
```

所属[ExtensionAbility](arkts-extensionability-c.md#ExtensionAbility)的信息。

**类型：** ExtensionAbilityInfo

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## config

```TypeScript
config: Configuration
```

所属Module的配置信息。

**类型：** Configuration

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

