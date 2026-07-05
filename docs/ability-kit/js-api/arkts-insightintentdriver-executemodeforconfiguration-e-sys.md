# ExecuteModeForConfiguration

```TypeScript
enum ExecuteModeForConfiguration
```

[使用配置文件开发的意图](docroot://application-models/insight-intent-config-development.md)支持的意图执行模式。例如，将 [insight_intent.json配置文件](docroot://application-models/insight-intent-config-development.md#insight_intentjson配置文件说明) 中的executeMode设置为"foreground"，表示支持与UIAbility组件绑定的意图在前台运行。

**Since:** 23

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## FOREGROUND

```TypeScript
FOREGROUND = 0
```

表示支持与UIAbility组件绑定的意图在前台运行。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## BACKGROUND

```TypeScript
BACKGROUND = 1
```

表示支持与UIAbility组件绑定的意图在后台运行。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

