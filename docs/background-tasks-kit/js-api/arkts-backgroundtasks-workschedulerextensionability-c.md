# WorkSchedulerExtensionAbility

Provides callbacks to be invoked when the scheduling conditions are met or the scheduling ends, for example,[onWorkStart()](arkts-backgroundtasks-workschedulerextensionability-c.md#onworkstart-1) or [onWorkStop()](arkts-backgroundtasks-workschedulerextensionability-c.md#onworkstop-1) in WorkSchedulerExtensionAbility.

**Since:** 9

<!--Device-unnamed-declare class WorkSchedulerExtensionAbility--><!--Device-unnamed-declare class WorkSchedulerExtensionAbility-End-->

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## Modules to Import

```TypeScript
import { WorkSchedulerExtensionContext } from '@kit.BackgroundTasksKit';
```

<a id="onworkstart"></a>
## onWorkStart

```TypeScript
onWorkStart(work: workScheduler.WorkInfo): void
```

Called when the system starts scheduling the deferred task.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-WorkSchedulerExtensionAbility-onWorkStart(work: workScheduler.WorkInfo): void--><!--Device-WorkSchedulerExtensionAbility-onWorkStart(work: workScheduler.WorkInfo): void-End-->

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| work | workScheduler.WorkInfo | Yes | Deferred task that starts. |

**Example**

```TypeScript
import { workScheduler } from '@kit.BackgroundTasksKit';
import { WorkSchedulerExtensionAbility } from '@kit.BackgroundTasksKit';

export default class MyWorkSchedulerExtensionAbility extends WorkSchedulerExtensionAbility {
  onWorkStart(workInfo: workScheduler.WorkInfo) {
      console.info(`MyWorkSchedulerExtensionAbility onWorkStart, workId: ${workInfo.workId},
          bundleName: ${workInfo.bundleName}, abilityName: ${workInfo.abilityName}.`);
  }
}

```

<a id="onworkstop"></a>
## onWorkStop

```TypeScript
onWorkStop(work: workScheduler.WorkInfo): void
```

Called when the system stops scheduling the deferred task. This callback is triggered when the deferred task times out for 2 minutes or the [stopWork](arkts-backgroundtasks-workscheduler-stopwork-f.md#stopwork-1) API is called to cancel the task.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-WorkSchedulerExtensionAbility-onWorkStop(work: workScheduler.WorkInfo): void--><!--Device-WorkSchedulerExtensionAbility-onWorkStop(work: workScheduler.WorkInfo): void-End-->

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| work | workScheduler.WorkInfo | Yes | Deferred task that stops. |

**Example**

```TypeScript
import { workScheduler } from '@kit.BackgroundTasksKit';
import { WorkSchedulerExtensionAbility } from '@kit.BackgroundTasksKit';

export default class MyWorkSchedulerExtensionAbility extends WorkSchedulerExtensionAbility {
  onWorkStop(workInfo: workScheduler.WorkInfo) {
      console.info(`MyWorkSchedulerExtensionAbility onWorkStop, workId: ${workInfo.workId},
          bundleName: ${workInfo.bundleName}, abilityName: ${workInfo.abilityName}.`);
  }
}

```

## context

```TypeScript
context: WorkSchedulerExtensionContext
```

Context of the WorkSchedulerExtensionAbility. This context inherits from ExtensionContext.

**Type:** WorkSchedulerExtensionContext

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

<!--Device-WorkSchedulerExtensionAbility-context: WorkSchedulerExtensionContext--><!--Device-WorkSchedulerExtensionAbility-context: WorkSchedulerExtensionContext-End-->

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

