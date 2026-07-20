# WantAgentInfo

Defines the information required for triggering a WantAgent object. The information can be used as an input parameter in [getWantAgent](../../../../reference/apis-ability-kit/js-apis-app-ability-wantAgent.md#wantagentgetwantagent) to obtain a specified WantAgent object.

**Since:** 7

<!--Device-unnamed-export interface WantAgentInfo--><!--Device-unnamed-export interface WantAgentInfo-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## actionFlags

```TypeScript
actionFlags?: Array<abilityWantAgent.WantAgentFlags>
```

Array of flags for using the WantAgent object.

**Type:** Array<abilityWantAgent.WantAgentFlags>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WantAgentInfo-actionFlags?: Array<abilityWantAgent.WantAgentFlags>--><!--Device-WantAgentInfo-actionFlags?: Array<abilityWantAgent.WantAgentFlags>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## actionType

```TypeScript
actionType?: abilityWantAgent.OperationType
```

Operation type.

**Type:** abilityWantAgent.OperationType

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WantAgentInfo-actionType?: abilityWantAgent.OperationType--><!--Device-WantAgentInfo-actionType?: abilityWantAgent.OperationType-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## extraInfo

```TypeScript
extraInfo?: { [key: string]: any }
```

Extra information.

**Type:** { [key: string]: any }

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WantAgentInfo-extraInfo?: { [key: string]: any }--><!--Device-WantAgentInfo-extraInfo?: { [key: string]: any }-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## extraInfos

```TypeScript
extraInfos?: Record<string, Object>
```

Extra information. You are advised to use this property to replace **extraInfo**. When this property is set,**extraInfo** does not take effect.

**Type:** Record<string, Object>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WantAgentInfo-extraInfos?: Record<string, Object>--><!--Device-WantAgentInfo-extraInfos?: Record<string, Object>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## operationType

```TypeScript
operationType?: wantAgent.OperationType
```

Operation type.

This attribute is supported since API version 7 and deprecated since API version 11. You are advised to use actionType<sup>11+</sup> instead.

**Type:** wantAgent.OperationType

**Since:** 7

**Deprecated since:** 11

**Substitutes:** [actionType](arkts-ability-wantagentinfo-wantagentinfo-i.md#actiontype)

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WantAgentInfo-operationType?: wantAgent.OperationType--><!--Device-WantAgentInfo-operationType?: wantAgent.OperationType-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## requestCode

```TypeScript
requestCode: number
```

Custom request code, which is used to identify the operation to execute.

**Type:** number

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WantAgentInfo-requestCode: int--><!--Device-WantAgentInfo-requestCode: int-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## wantAgentFlags

```TypeScript
wantAgentFlags?: Array<wantAgent.WantAgentFlags>
```

Array of flags for using the WantAgent object.

This attribute is supported since API version 7 and deprecated since API version 11. You are advised to use actionFlags<sup>11+</sup> instead.

**Type:** Array<wantAgent.WantAgentFlags>

**Since:** 7

**Deprecated since:** 11

**Substitutes:** [actionFlags](arkts-ability-wantagentinfo-wantagentinfo-i.md#actionflags)

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WantAgentInfo-wantAgentFlags?: Array<wantAgent.WantAgentFlags>--><!--Device-WantAgentInfo-wantAgentFlags?: Array<wantAgent.WantAgentFlags>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## wants

```TypeScript
wants: Array<Want>
```

Array of all Want objects. Currently, only one Want is supported. The array is reserved for future capability expansion. If multiple values are passed in, only the first member in the array is used.

**Type:** Array<Want>

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WantAgentInfo-wants: Array<Want>--><!--Device-WantAgentInfo-wants: Array<Want>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

