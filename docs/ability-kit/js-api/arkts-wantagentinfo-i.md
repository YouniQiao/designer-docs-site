# WantAgentInfo

定义触发WantAgent所需要的信息，可以作为 [getWantAgent](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent.md#wantagentgetwantagent)的入参创建指定的 WantAgent对象。

**Since:** 7

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## actionFlags

```TypeScript
actionFlags?: Array<abilityWantAgent.WantAgentFlags>
```

动作执行属性。

**Type:** Array<abilityWantAgent.WantAgentFlags>

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## actionType

```TypeScript
actionType?: abilityWantAgent.OperationType
```

动作类型。

**Type:** abilityWantAgent.OperationType

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## wantAgentFlags

```TypeScript
wantAgentFlags?: Array<wantAgent.WantAgentFlags>
```

动作执行属性。 从API version 7 开始支持，从API version 11 开始废弃，建议使用actionFlags<sup>11+</sup>替代。

**Type:** Array<wantAgent.WantAgentFlags>

**Since:** 7

**Deprecated since:** 11

**Substitute:** WantAgentInfo.actionFlags

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## requestCode

```TypeScript
requestCode: int
```

开发者自定义的请求码，用于标识将被执行的动作。

**Type:** int

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## wants

```TypeScript
wants: Array<Want>
```

将被执行的动作列表。wants数组为预留能力，当前只支持一个want。传入多个时只取wants数组的第一个成员。

**Type:** Array<Want>

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## operationType

```TypeScript
operationType?: wantAgent.OperationType
```

动作类型。 从API version 7 开始支持，从API version 11 开始废弃，建议使用actionType<sup>11+</sup>替代。

**Type:** wantAgent.OperationType

**Since:** 7

**Deprecated since:** 11

**Substitute:** WantAgentInfo.actionType

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## userId

```TypeScript
userId?: int
```

用户ID。 取值范围：大于等于0。 默认值为调用方所在用户ID。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## extraInfos

```TypeScript
extraInfos?: Record<string, Object>
```

额外数据。推荐使用该属性替代extraInfo，设置该属性后，extraInfo不再生效。

**Type:** Record<string, Object>

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

```TypeScript
extraInfos?: Record<string, RecordData>
```

额外数据。推荐使用该属性替代extraInfo，设置该属性后，extraInfo不再生效。

**Type:** Record<string, RecordData>

**Since:** 23

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## extraInfo

```TypeScript
extraInfo?: { [key: string]: any }
```

额外数据。

**Type:** { [key: string]: any }

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

```TypeScript
extraInfo?: Record<string, RecordData>
```

启动应用的额外信息。 如果没有需要设置的额外信息，此常量可以留空。

**Type:** Record<string, RecordData>

**Since:** 23

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

