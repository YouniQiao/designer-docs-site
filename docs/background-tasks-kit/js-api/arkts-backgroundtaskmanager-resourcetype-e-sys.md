# ResourceType

```TypeScript
export enum ResourceType
```

能效资源类型。

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## CPU

```TypeScript
CPU = 1
```

CPU资源，申请后应用进程不被挂起。

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## COMMON_EVENT

```TypeScript
COMMON_EVENT = 1 << 1
```

公共事件资源，申请后应用进程被挂起后，可以收到公共事件。

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## TIMER

```TypeScript
TIMER = 1 << 2
```

计时器，申请后应用进程被挂起后，Timer仍然可以唤醒应用。

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## WORK_SCHEDULER

```TypeScript
WORK_SCHEDULER = 1 << 3
```

延迟任务资源，申请后延迟任务管控变宽松。

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## BLUETOOTH

```TypeScript
BLUETOOTH = 1 << 4
```

蓝牙资源，申请后应用进程被挂起后，蓝牙相关事件仍然可以唤醒应用。

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## GPS

```TypeScript
GPS = 1 << 5
```

GPS资源，申请后应用进程被挂起后，GPS相关事件可以唤醒应用。

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## AUDIO

```TypeScript
AUDIO = 1 << 6
```

音频资源，有音频播放时对应的应用进程不被挂起。

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## RUNNING_LOCK

```TypeScript
RUNNING_LOCK = 1 << 7
```

RUNNING_LOCK资源，申请后挂起状态不会代理RUNNING_BACKGROUND锁。

**Since:** 10

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## SENSOR

```TypeScript
SENSOR = 1 << 8
```

申请后不拦截Sensor回调。

**Since:** 10

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

