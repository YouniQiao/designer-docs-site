# ContinuousTaskSuspendReason

```TypeScript
export enum ContinuousTaskSuspendReason
```

长时任务暂停原因。

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SYSTEM_SUSPEND_DATA_TRANSFER_LOW_SPEED

```TypeScript
SYSTEM_SUSPEND_DATA_TRANSFER_LOW_SPEED = 4
```

申请DATA_TRANSFER类型长时任务，但是数据传输速率低。

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SYSTEM_SUSPEND_AUDIO_PLAYBACK_NOT_USE_AVSESSION

```TypeScript
SYSTEM_SUSPEND_AUDIO_PLAYBACK_NOT_USE_AVSESSION = 5
```

申请AUDIO_PLAYBACK类型长时任务，但是未接入[AVSession](docroot://media/avsession/avsession-overview.md)。

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SYSTEM_SUSPEND_AUDIO_PLAYBACK_NOT_RUNNING

```TypeScript
SYSTEM_SUSPEND_AUDIO_PLAYBACK_NOT_RUNNING = 6
```

申请AUDIO_PLAYBACK类型长时任务，但是未播放音视频。

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SYSTEM_SUSPEND_AUDIO_RECORDING_NOT_RUNNING

```TypeScript
SYSTEM_SUSPEND_AUDIO_RECORDING_NOT_RUNNING = 7
```

申请AUDIO_RECORDING类型长时任务，但是未录制。

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SYSTEM_SUSPEND_LOCATION_NOT_USED

```TypeScript
SYSTEM_SUSPEND_LOCATION_NOT_USED = 8
```

申请LOCATION类型长时任务，但是未使用定位导航。

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SYSTEM_SUSPEND_BLUETOOTH_NOT_USED

```TypeScript
SYSTEM_SUSPEND_BLUETOOTH_NOT_USED = 9
```

申请BLUETOOTH_INTERACTION类型长时任务，但是未使用蓝牙相关业务。

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SYSTEM_SUSPEND_MULTI_DEVICE_NOT_USED

```TypeScript
SYSTEM_SUSPEND_MULTI_DEVICE_NOT_USED = 10
```

申请MULTI_DEVICE_CONNECTION类型长时任务，但是未使用多设备互联。

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SYSTEM_SUSPEND_USED_ILLEGALLY

```TypeScript
SYSTEM_SUSPEND_USED_ILLEGALLY = 11
```

使用非法类型的长时任务，如申请AUDIO_PLAYBACK类型长时任务，但是使用音视频播放及定位导航业务。预留接口，暂未启用。

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SYSTEM_SUSPEND_SYSTEM_LOAD_WARNING

```TypeScript
SYSTEM_SUSPEND_SYSTEM_LOAD_WARNING = 12
```

系统高负载暂停长时任务。预留接口，暂未启用。

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SYSTEM_SUSPEND_VOIP_NOT_USED

```TypeScript
SYSTEM_SUSPEND_VOIP_NOT_USED = 13
```

申请VOIP类型长时任务，但是未检测到音频流或者录音流。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SYSTEM_SUSPEND_BLUETOOTH_DATA_NOT_EXIST

```TypeScript
SYSTEM_SUSPEND_BLUETOOTH_DATA_NOT_EXIST = 14
```

申请BLUETOOTH_INTERACTION类型长时任务，但是一段时间没有蓝牙数据流。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SYSTEM_SUSPEND_POSITION_NOT_MOVED

```TypeScript
SYSTEM_SUSPEND_POSITION_NOT_MOVED = 15
```

申请LOCATION类型长时任务，但是一段时间内设备处于绝对静止状态。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SYSTEM_SUSPEND_AUDIO_PLAYBACK_MUTE

```TypeScript
SYSTEM_SUSPEND_AUDIO_PLAYBACK_MUTE = 16
```

申请AUDIO_PLAYBACK类型长时任务，但是一段时间内处于整机静音状态。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SYSTEM_SUSPEND_NEARLINK_NOT_USED

```TypeScript
SYSTEM_SUSPEND_NEARLINK_NOT_USED = 17
```

申请星闪类型长时任务，但是一段时间没有星闪配对连接。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SYSTEM_SUSPEND_NEARLINK_DATA_NOT_EXIST

```TypeScript
SYSTEM_SUSPEND_NEARLINK_DATA_NOT_EXIST = 18
```

申请星闪类型长时任务，但是一段时间没有星闪数据流。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SYSTEM_SUSPEND_USER_UNAUTHORIZED

```TypeScript
SYSTEM_SUSPEND_USER_UNAUTHORIZED = 19
```

申请特殊场景类型长时任务，但是用户未授权。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

