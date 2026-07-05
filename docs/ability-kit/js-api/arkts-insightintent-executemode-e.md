# ExecuteMode

```TypeScript
enum ExecuteMode
```

意图执行模式。表示系统入口触发意图执行时传递的执行模式，每个意图支持的执行模式在意图开发时定义。

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## UI_ABILITY_FOREGROUND

```TypeScript
UI_ABILITY_FOREGROUND = 0
```

将UIAbility在前台显示。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## UI_ABILITY_BACKGROUND

```TypeScript
UI_ABILITY_BACKGROUND = 1
```

将UIAbility在后台拉起。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## UI_EXTENSION_ABILITY

```TypeScript
UI_EXTENSION_ABILITY = 2
```

拉起UIExtensionAbility。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## SERVICE_EXTENSION_ABILITY

```TypeScript
SERVICE_EXTENSION_ABILITY = 3
```

拉起ServiceExtensionAbility。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

