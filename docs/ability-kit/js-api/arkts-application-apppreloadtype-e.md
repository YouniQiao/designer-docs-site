# AppPreloadType

```TypeScript
export enum AppPreloadType
```

表示应用当前进程的预加载类型枚举。

**Since:** 22

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## UNSPECIFIED

```TypeScript
UNSPECIFIED = 0
```

未发生预加载或预加载数据已被清除。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## TYPE_CREATE_PROCESS

```TypeScript
TYPE_CREATE_PROCESS = 1
```

进程最终预加载到进程创建完成阶段。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## TYPE_CREATE_ABILITY_STAGE

```TypeScript
TYPE_CREATE_ABILITY_STAGE = 2
```

进程最终预加载到[AbilityStage](arkts-abilitystage-c.md#AbilityStage)创建完成阶段。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## TYPE_CREATE_WINDOW_STAGE

```TypeScript
TYPE_CREATE_WINDOW_STAGE = 3
```

进程最终预加载到[WindowStage]@ohos.window创建完成阶段。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## TYPE_CREATE_BACKGROUND_ABILITY

```TypeScript
TYPE_CREATE_BACKGROUND_ABILITY = 4
```

进程最终预加载到[onBackground](arkts-uiability-c.md#onBackground)执行完成阶段。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

