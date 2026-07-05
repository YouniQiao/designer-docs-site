# StateType

```TypeScript
export enum StateType
```

保存应用数据场景原因，该类型为枚举。配合UIAbility的 [onSaveState()](arkts-uiability-c.md#onSaveState) 方法使用，可以实现[UIAbility备份恢复](docroot://application-models/ability-recover-guideline.md)。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## CONTINUATION

```TypeScript
CONTINUATION = 0
```

应用迁移场景。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## APP_RECOVERY

```TypeScript
APP_RECOVERY = 1
```

应用故障恢复场景。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

