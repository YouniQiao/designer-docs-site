# WantAgentFlags

```TypeScript
export enum WantAgentFlags
```

表示WantAgent行为控制标志，用于配置WantAgent的创建和触发行为。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent#WantAgentFlags

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## ONE_TIME_FLAG

```TypeScript
ONE_TIME_FLAG = 0
```

WantAgent仅能使用一次。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#ONE_TIME_FLAG

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## NO_BUILD_FLAG

```TypeScript
NO_BUILD_FLAG
```

如果描述WantAgent对象不存在，则不创建它，直接返回null。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#NO_BUILD_FLAG

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## CANCEL_PRESENT_FLAG

```TypeScript
CANCEL_PRESENT_FLAG
```

在生成一个新的WantAgent对象前取消已存在的一个WantAgent对象。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#CANCEL_PRESENT_FLAG

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## UPDATE_PRESENT_FLAG

```TypeScript
UPDATE_PRESENT_FLAG
```

使用新的WantAgent的额外数据替换已存在的WantAgent中的额外数据。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#UPDATE_PRESENT_FLAG

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## CONSTANT_FLAG

```TypeScript
CONSTANT_FLAG
```

WantAgent是不可变的。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#CONSTANT_FLAG

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## REPLACE_ELEMENT

```TypeScript
REPLACE_ELEMENT
```

当前Want中的element属性可被WantAgent.trigger()中Want的element属性取代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#REPLACE_ELEMENT

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## REPLACE_ACTION

```TypeScript
REPLACE_ACTION
```

当前Want中的action属性可被WantAgent.trigger()中Want的action属性取代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#REPLACE_ACTION

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## REPLACE_URI

```TypeScript
REPLACE_URI
```

当前Want中的uri属性可被WantAgent.trigger()中Want的uri属性取代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#REPLACE_URI

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## REPLACE_ENTITIES

```TypeScript
REPLACE_ENTITIES
```

当前Want中的entities属性可被WantAgent.trigger()中Want的entities属性取代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#REPLACE_ENTITIES

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## REPLACE_BUNDLE

```TypeScript
REPLACE_BUNDLE
```

当前Want中的bundleName属性可被WantAgent.trigger()中Want的bundleName属性取代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#REPLACE_BUNDLE

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

