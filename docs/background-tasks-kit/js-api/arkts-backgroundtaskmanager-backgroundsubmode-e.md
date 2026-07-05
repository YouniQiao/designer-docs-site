# BackgroundSubMode

```TypeScript
export enum BackgroundSubMode
```

长时任务子类型。

**Since:** 16

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## CAR_KEY

```TypeScript
CAR_KEY = 1
```

车钥匙。 **说明：** 1. 只有申请BLUETOOTH_INTERACTION类型的长时任务，车钥匙子类型才能生效。 2. 不支持通过[updateBackgroundRunning]backgroundTaskManager.updateBackgroundRunning(context: Context, bgModes: string[])接口更新为此类型长时任务。

**Since:** 16

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

