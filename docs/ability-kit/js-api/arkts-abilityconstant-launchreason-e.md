# LaunchReason

```TypeScript
export enum LaunchReason
```

Ability启动原因，该类型为枚举，可配合UIAbility的[onCreate(want, launchParam)](arkts-uiability-c.md#onCreate) 方法根据launchParam.launchReason的不同类型执行相应操作。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## UNKNOWN

```TypeScript
UNKNOWN = 0
```

未知原因。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## START_ABILITY

```TypeScript
START_ABILITY = 1
```

通过 [startAbility]./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, callback: AsyncCallback<void>) 接口启动Ability。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## CALL

```TypeScript
CALL = 2
```

通过[startAbilityByCall]./application/UIAbilityContext:UIAbilityContext.startAbilityByCall接口启动Ability。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## CONTINUATION

```TypeScript
CONTINUATION = 3
```

跨端迁移启动Ability。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## APP_RECOVERY

```TypeScript
APP_RECOVERY = 4
```

设置应用恢复后，应用故障时自动恢复启动Ability。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## SHARE

```TypeScript
SHARE = 5
```

通过原子化服务分享启动Ability。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## AUTO_STARTUP

```TypeScript
AUTO_STARTUP = 8
```

通过设置开机自启动来启动Ability。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## INSIGHT_INTENT

```TypeScript
INSIGHT_INTENT = 9
```

通过洞察意图来启动Ability。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## PREPARE_CONTINUATION

```TypeScript
PREPARE_CONTINUATION = 10
```

跨端迁移提前启动Ability。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## PRELOAD

```TypeScript
PRELOAD = 11
```

表明该UIAbility是通过预加载机制启动的。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

