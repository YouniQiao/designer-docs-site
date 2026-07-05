# CollaborateResult

```TypeScript
export enum CollaborateResult
```

应用协同状态，该类型为枚举。用于多设备场景下，调用方应用拉起协同方应用时，协同方应用是否接受协同。需要配合UIAbility的 [onCollaborate()](arkts-uiability-c.md#onCollaborate)方法进行 设置。

**Since:** 18

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## ACCEPT

```TypeScript
ACCEPT = 0
```

接受协同。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## REJECT

```TypeScript
REJECT = 1
```

拒绝协同。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

