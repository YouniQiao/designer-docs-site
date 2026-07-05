# EnvironmentCallback

EnvironmentCallback模块提供对系统环境变化监听回调的能力。

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## 导入模块

```TypeScript
import { EnvironmentCallback } from '@kit.AbilityKit';
```

## onConfigurationUpdated

```TypeScript
onConfigurationUpdated(config: Configuration): void
```

[注册系统环境变化的监听]./application/ApplicationContext:ApplicationContext.on(type: 'environment', callback: EnvironmentCallback) 后，在系统环境变化时触发回调。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | Configuration | 是 | 变化后的Configuration对象。 |

## onMemoryLevel

```TypeScript
onMemoryLevel(level: AbilityConstant.MemoryLevel): void
```

[注册系统环境变化的监听]./application/ApplicationContext:ApplicationContext.on(type: 'environment', callback: EnvironmentCallback) 后，在系统内存变化时触发回调。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| level | AbilityConstant.MemoryLevel | 是 | 整机可用内存级别，对应的触发场景详见  [AbilityConstant.MemoryLevel]./@ohos.app.ability.AbilityConstant:AbilityConstant.MemoryLevel。 |

