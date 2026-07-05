# ContinueState

```TypeScript
export enum ContinueState
```

流转状态枚举值。用于表示当前应用任务流转的状态。可配合[UIAbilityContext]./application/UIAbilityContext:UIAbilityContext的 [setMissionContinueState]./application/UIAbilityContext:UIAbilityContext.setMissionContinueState(state: AbilityConstant.ContinueState, callback: AsyncCallback<void>) 方法进行设置。

**Since:** 10

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## ACTIVE

```TypeScript
ACTIVE = 0
```

指示当前应用任务流转处于激活状态。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## INACTIVE

```TypeScript
INACTIVE = 1
```

指示当前应用任务流转处于未激活状态。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

