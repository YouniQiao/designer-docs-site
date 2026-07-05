# DelaySuspendInfo

短时任务信息。

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

## Modules to Import

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
```

## actualDelayTime

```TypeScript
actualDelayTime: int
```

Actual duration of the transient task requested by the application, in milliseconds. <br>Unit:ms **说明：** 申请时间最长为3分钟，低电量（[BatteryCapacityLevel](../../apis-basic-service-kit/arkts-apis/arkts-batteryinfo-batterycapacitylevel-e.md#BatteryCapacityLevel)为LEVEL_LOW） 时最长为1分钟。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

## requestId

```TypeScript
requestId: int
```

应用实际申请的短时任务时间，单位：ms。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

