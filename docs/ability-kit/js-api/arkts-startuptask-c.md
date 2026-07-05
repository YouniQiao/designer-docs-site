# StartupTask

The module provides capabilities related to startup tasks in [AppStartup](docroot://application-models/app-startup.md).

**Since:** 12

**Decorator:** @Sendable

**System capability:** SystemCapability.Ability.AppStartup

## Modules to Import

```TypeScript
import { StartupTask } from '@kit.AbilityKit';
```

## init

```TypeScript
init(context: AbilityStageContext): Promise<Object | void>
```

当所有依赖的启动任务都执行完成后，该方法将会被调用。开发者可以在该回调中执行该启动任务的初始化操作。使用Promise异步回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AppStartup

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | AbilityStageContext | Yes | [AbilityStage](arkts-abilitystage-c.md#AbilityStage)的上下文环境 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Object \| void> | Promise used to return the execution result. |

## onDependencyCompleted

```TypeScript
onDependencyCompleted?(dependency: string, result: Object): void
```

当依赖的启动任务执行完成时该方法将会被调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AppStartup

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dependency | string | Yes | 依赖的启动任务名称。 |
| result | Object | Yes | 依赖的启动任务[init](arkts-startuptask-c.md#init)返回的执行结果。 |

