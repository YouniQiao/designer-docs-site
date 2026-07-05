# ContinuousTaskInfo

长时任务信息。

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## Modules to Import

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
```

## continuousTaskId

```TypeScript
continuousTaskId: int
```

长时任务ID。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## suspendState

```TypeScript
suspendState: boolean
```

申请的长时任务是否处于暂停状态。true表示处于暂停状态，false表示处于激活状态。

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## backgroundModes

```TypeScript
backgroundModes: string[]
```

[长时任务类型]backgroundTaskManager.BackgroundMode。

**Type:** string[]

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## pid

```TypeScript
pid: int
```

应用进程的PID。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## wantAgentBundleName

```TypeScript
wantAgentBundleName: string
```

[WantAgent]@ohos.app.ability.wantAgent 配置的包名。WantAgent为通知参数，用于指定点击长时任务通知后跳转的界面，在申请长时任务时作为参数传入。

**Type:** string

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## uid

```TypeScript
uid: int
```

应用的UID。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## appIndex

```TypeScript
appIndex?: int
```

应用分身ID。 取值范围为全体整数。

**Type:** int

**Since:** 23

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## abilityName

```TypeScript
abilityName: string
```

UIAbility名称。

**Type:** string

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## bundleName

```TypeScript
bundleName?: string
```

应用包名。

**Type:** string

**Since:** 23

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## notificationId

```TypeScript
notificationId: int
```

通知 Id。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## backgroundSubModes

```TypeScript
backgroundSubModes: string[]
```

[长时任务子类型]backgroundTaskManager.BackgroundSubMode。

**Type:** string[]

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## wantAgentAbilityName

```TypeScript
wantAgentAbilityName: string
```

[WantAgent]@ohos.app.ability.wantAgent 配置的ability名称。WantAgent为通知参数，用于指定点击长时任务通知后跳转的界面，在申请长时任务时作为参数传入。

**Type:** string

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## abilityId

```TypeScript
abilityId: int
```

UIAbility ID.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## isFromWebView

```TypeScript
isFromWebView: boolean
```

是否通过Webview方式申请，即通过系统代理应用申请长时任务。true表示通过Webview方式申请，false表示不通过Webview方式申请。

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

