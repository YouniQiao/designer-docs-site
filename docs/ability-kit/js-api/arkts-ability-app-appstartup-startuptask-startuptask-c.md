# StartupTask

The module provides capabilities related to startup tasks in [AppStartup](docroot://application-models/app-startup.md).

**Since:** 12

**Decorator:** @Sendable

<!--Device-unnamed-declare class StartupTask--><!--Device-unnamed-declare class StartupTask-End-->

**System capability:** SystemCapability.Ability.AppStartup

## Modules to Import

```TypeScript
import { StartupTask } from '@kit.AbilityKit';
```

<a id="init"></a>
## init

```TypeScript
init(context: AbilityStageContext): Promise<Object | void>
```

Called when all the dependent startup tasks are complete. You can initialize the startup task in this callback.This API uses a promise to return the result.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-StartupTask-init(context: AbilityStageContext): Promise<Object | void>--><!--Device-StartupTask-init(context: AbilityStageContext): Promise<Object | void>-End-->

**System capability:** SystemCapability.Ability.AppStartup

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [AbilityStageContext](arkts-ability-common-abilitystagecontext-t.md) | Yes | Context environment of the [AbilityStage](arkts-ability-app-ability-abilitystage-abilitystage-c.md). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Object \| void&gt; | Promise used to return the execution result. |

**Example**

```TypeScript
import { StartupTask, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

@Sendable
export default class StartupTask_001 extends StartupTask {
  constructor() {
    super();
  }
  async init(context: common.AbilityStageContext) {
    hilog.info(0x0000, 'testTag', 'StartupTask_001 init.');
    // ...
    
    return "StartupTask_001";
  }

  onDependencyCompleted(dependency: string, result: Object): void {
    // ...
  }
}

```

<a id="ondependencycompleted"></a>
## onDependencyCompleted

```TypeScript
onDependencyCompleted?(dependency: string, result: Object): void
```

Called when the dependent startup task is complete.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-StartupTask-onDependencyCompleted?(dependency: string, result: Object): void--><!--Device-StartupTask-onDependencyCompleted?(dependency: string, result: Object): void-End-->

**System capability:** SystemCapability.Ability.AppStartup

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dependency | string | Yes | Name of the dependent startup task. |
| result | Object | Yes | Execution result of [init](arkts-ability-app-appstartup-startuptask-startuptask-c.md#init-1) of the dependent startup task. |

**Example**

```TypeScript
import { StartupTask, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

@Sendable
export default class StartupTask_001 extends StartupTask {
  constructor() {
    super();
  }

  async init(context: common.AbilityStageContext) {
    // ...
  }

  onDependencyCompleted(dependency: string, result: Object): void {
    hilog.info(0x0000, 'testTag', 'StartupTask_001 onDependencyCompleted, dependency: %{public}s, result: %{public}s',
      dependency, JSON.stringify(result));
    // ...
  }
}

```

