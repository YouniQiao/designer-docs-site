# WorkSchedulerExtensionAbility

延迟任务回调，当满足调度条件或调度结束时，系统会回调应用WorkSchedulerExtensionAbility中 [onWorkStart()](arkts-workschedulerextensionability-c.md#onWorkStart)或 [onWorkStop()](arkts-workschedulerextensionability-c.md#onWorkStop)的方法。

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## Modules to Import

```TypeScript
import { WorkSchedulerExtensionContext } from '@kit.BackgroundTasksKit';
```

## onWorkStart

```TypeScript
onWorkStart(work: workScheduler.WorkInfo): void
```

开始延迟任务调度回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| work | workScheduler.WorkInfo | Yes | 要添加到执行队列的任务。 |

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

## onWorkStop

```TypeScript
onWorkStop(work: workScheduler.WorkInfo): void
```

结束延迟任务调度回调。当延迟任务2分钟超时或应用调用[stopWork](arkts-workscheduler-stopwork-f.md#stopWork-1) 接口取消任务时，触发该回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| work | workScheduler.WorkInfo | Yes | 执行队列中要结束回调的任务。 |

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

WorkSchedulerExtension的上下文环境，继承自ExtensionContext。

**Type:** WorkSchedulerExtensionContext

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

