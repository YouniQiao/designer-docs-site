# PrepareTermination

```TypeScript
export enum PrepareTermination
```

应用准备关闭时返回的动作，该类型为枚举。需要配合[AbilityStage](arkts-abilitystage-c.md#AbilityStage)的 [onPrepareTermination](arkts-abilitystage-c.md#onPrepareTermination)或者 [onPrepareTerminationAsync](arkts-abilitystage-c.md#onPrepareTerminationAsync)方法使用。

**Since:** 15

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## TERMINATE_IMMEDIATELY

```TypeScript
TERMINATE_IMMEDIATELY = 0
```

表示立即执行结束动作，默认值。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## CANCEL

```TypeScript
CANCEL = 1
```

表示取消结束动作。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

