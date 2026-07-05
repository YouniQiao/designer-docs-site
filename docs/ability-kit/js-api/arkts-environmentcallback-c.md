# EnvironmentCallback

EnvironmentCallback模块提供对系统环境变化监听回调的能力。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { EnvironmentCallback } from '@kit.AbilityKit';
```

## onConfigurationUpdated

```TypeScript
onConfigurationUpdated(config: Configuration): void
```

[注册系统环境变化的监听]./application/ApplicationContext:ApplicationContext.on(type: 'environment', callback: EnvironmentCallback) 后，在系统环境变化时触发回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | Configuration | Yes | 变化后的Configuration对象。 |

## onMemoryLevel

```TypeScript
onMemoryLevel(level: AbilityConstant.MemoryLevel): void
```

[注册系统环境变化的监听]./application/ApplicationContext:ApplicationContext.on(type: 'environment', callback: EnvironmentCallback) 后，在系统内存变化时触发回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| level | AbilityConstant.MemoryLevel | Yes | 整机可用内存级别，对应的触发场景详见  [AbilityConstant.MemoryLevel]./@ohos.app.ability.AbilityConstant:AbilityConstant.MemoryLevel。 |

