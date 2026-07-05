# SubscribeCallbackData

返回携带系统属性值的通知信息。

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## reason

```TypeScript
readonly reason?: int
```

删除原因（1:点击通知后删除通知，2:用户删除通知） 。

**Type:** int

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## request

```TypeScript
readonly request: NotificationRequest
```

通知内容。

**Type:** NotificationRequest

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## sortingMap

```TypeScript
readonly sortingMap?: NotificationSortingMap
```

通知排序信息。

**Type:** NotificationSortingMap

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## sound

```TypeScript
readonly sound?: string
```

通知声音。

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## notificationClassification

```TypeScript
readonly notificationClassification?: NotificationClassification
```

通知分类信息。 仅在[NotificationSubscribeInfo](arkts-notificationsubscribeinfo-i-sys.md#NotificationSubscribeInfo)中的enableClassification为true时存在。

**Type:** NotificationClassification

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## vibrationValues

```TypeScript
readonly vibrationValues?: Array<long>
```

通知震动。

**Type:** Array<long>

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## voiceContent

```TypeScript
voiceContent?: VoiceContent
```

通知消息中语音播报内容定义

**Type:** VoiceContent

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

