# Scenarios

```TypeScript
export enum Scenarios
```

表示不触发[onNewWant](arkts-uiability-c.md#onNewWant)生命周期回调场景的枚举，用于 [setOnNewWantSkipScenarios]./application/UIAbilityContext:UIAbilityContext.setOnNewWantSkipScenarios接口。

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## SCENARIO_MOVE_MISSION_TO_FRONT

```TypeScript
SCENARIO_MOVE_MISSION_TO_FRONT = 0x00000001
```

<!--RP1-->系统接口[missionManager.moveMissionToFront](./js-apis-app-ability-missionManager-sys.md#missionmanagermovemissiontofront-2)接口触发的UIAbility到前台场景。<!--RP1End-->

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## SCENARIO_SHOW_ABILITY

```TypeScript
SCENARIO_SHOW_ABILITY = 0x00000002
```

[showAbility]./application/UIAbilityContext:UIAbilityContext#showAbility接口触发的UIAbility到前台场景。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## SCENARIO_BACK_TO_CALLER_ABILITY_WITH_RESULT

```TypeScript
SCENARIO_BACK_TO_CALLER_ABILITY_WITH_RESULT = 0x00000004
```

[backToCallerAbilityWithResult]./application/UIAbilityContext:UIAbilityContext.backToCallerAbilityWithResult 接口触发的UIAbility到前台场景。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

