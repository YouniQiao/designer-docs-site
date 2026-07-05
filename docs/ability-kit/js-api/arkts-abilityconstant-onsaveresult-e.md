# OnSaveResult

```TypeScript
export enum OnSaveResult
```

保存应用数据的结果，该类型为枚举。配合UIAbility的 [onSaveState()](arkts-uiability-c.md#onSaveState) 方法使用，可以实现[UIAbility备份恢复](docroot://application-models/ability-recover-guideline.md)。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## ALL_AGREE

```TypeScript
ALL_AGREE = 0
```

总是同意保存状态。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## CONTINUATION_REJECT

```TypeScript
CONTINUATION_REJECT = 1
```

拒绝迁移保存状态。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## CONTINUATION_MISMATCH

```TypeScript
CONTINUATION_MISMATCH = 2
```

迁移不匹配。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## RECOVERY_AGREE

```TypeScript
RECOVERY_AGREE = 3
```

同意恢复保存状态。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## RECOVERY_REJECT

```TypeScript
RECOVERY_REJECT = 4
```

拒绝恢复保存状态。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## ALL_REJECT

```TypeScript
ALL_REJECT = 5
```

Always rejected to save the status.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

