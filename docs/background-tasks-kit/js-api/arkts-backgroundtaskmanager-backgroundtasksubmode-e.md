# BackgroundTaskSubmode

```TypeScript
export enum BackgroundTaskSubmode
```

长时任务子类型。通常与长时任务主类型[BackgroundTaskMode]backgroundTaskManager.BackgroundTaskMode配合使用，对照关系请参考长时任务主类型与子类型对照表，两者 共同作为API version 21新增的申请、更新长时任务接口入参，用于指定长时任务类型。

**Since:** 21

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SUBMODE_CAR_KEY_NORMAL_NOTIFICATION

```TypeScript
SUBMODE_CAR_KEY_NORMAL_NOTIFICATION = 1
```

车钥匙类型，通知类型为普通文本通知。

**Since:** 21

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SUBMODE_NORMAL_NOTIFICATION

```TypeScript
SUBMODE_NORMAL_NOTIFICATION = 2
```

普通文本通知。

**Since:** 21

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SUBMODE_LIVE_VIEW_NOTIFICATION

```TypeScript
SUBMODE_LIVE_VIEW_NOTIFICATION = 3
```

实况窗通知。

**Since:** 21

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SUBMODE_AUDIO_PLAYBACK_NORMAL_NOTIFICATION

```TypeScript
SUBMODE_AUDIO_PLAYBACK_NORMAL_NOTIFICATION = 4
```

音视频播放，通知类型为普通文本通知。根据实际场景选择是否接入[AVSession](docroot://media/avsession/avsession-overview.md)。

**Since:** 22

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SUBMODE_AVSESSION_AUDIO_PLAYBACK

```TypeScript
SUBMODE_AVSESSION_AUDIO_PLAYBACK = 5
```

已接入[AVSession](docroot://media/avsession/avsession-overview.md)的音视频播放场景，不发送通知。

**Since:** 22

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SUBMODE_AUDIO_RECORD_NORMAL_NOTIFICATION

```TypeScript
SUBMODE_AUDIO_RECORD_NORMAL_NOTIFICATION = 6
```

录音，通知类型为普通文本通知。

**Since:** 22

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SUBMODE_SCREEN_RECORD_NORMAL_NOTIFICATION

```TypeScript
SUBMODE_SCREEN_RECORD_NORMAL_NOTIFICATION = 7
```

录屏，通知类型为普通文本通知。

**Since:** 22

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SUBMODE_VOICE_CHAT_NORMAL_NOTIFICATION

```TypeScript
SUBMODE_VOICE_CHAT_NORMAL_NOTIFICATION = 8
```

通话，通知类型为普通文本通知。

**Since:** 22

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SUBMODE_MEDIA_PROCESS_NORMAL_NOTIFICATION

```TypeScript
SUBMODE_MEDIA_PROCESS_NORMAL_NOTIFICATION = 9
```

媒体处理，例如：应用在后台导出媒体文件，通知类型为普通文本通知。

**Since:** 22

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SUBMODE_VIDEO_BROADCAST_NORMAL_NOTIFICATION

```TypeScript
SUBMODE_VIDEO_BROADCAST_NORMAL_NOTIFICATION = 10
```

视频投播，例如：应用使用三方投播组件在后台进行投播，通知类型为普通文本通知。

**Since:** 22

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## SUBMODE_WORK_OUT_NORMAL_NOTIFICATION

```TypeScript
SUBMODE_WORK_OUT_NORMAL_NOTIFICATION = 11
```

运动，例如：应用在后台有室内跑步场景，通知类型为普通文本通知。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

