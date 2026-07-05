# DelaySuspendInfo

短时任务信息。

**起始版本：** 9

**系统能力：** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

## 导入模块

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
```

## actualDelayTime

```TypeScript
actualDelayTime: int
```

Actual duration of the transient task requested by the application, in milliseconds. <br>Unit:ms **说明：** 申请时间最长为3分钟，低电量（[BatteryCapacityLevel](../../apis-basic-service-kit/arkts-apis/arkts-batteryinfo-batterycapacitylevel-e.md#BatteryCapacityLevel)为LEVEL_LOW） 时最长为1分钟。

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

## requestId

```TypeScript
requestId: int
```

应用实际申请的短时任务时间，单位：ms。

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

