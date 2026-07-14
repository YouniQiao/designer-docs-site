# SubscribeCallbackData (System API)

Returns notification information carrying system property values.

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## notificationClassification

```TypeScript
readonly notificationClassification?: NotificationClassification
```

Notification classification information. It exists only when enableClassification in NotificationSubscribeInfo is true.

**Type:** NotificationClassification

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## reason

```TypeScript
readonly reason?: number
```

Reason for deletion. The options are as follows: - **1**: The notification is deleted after being tapped. - **2**: The notification is deleted by the user.

**Type:** number

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## request

```TypeScript
readonly request: NotificationRequest
```

Notification content.

**Type:** NotificationRequest

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## sortingMap

```TypeScript
readonly sortingMap?: NotificationSortingMap
```

Notification sorting information.

**Type:** NotificationSortingMap

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## sound

```TypeScript
readonly sound?: string
```

Notification sound.

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## vibrationValues

```TypeScript
readonly vibrationValues?: Array<number>
```

Notification vibration.

**Type:** Array<number>

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## voiceContent

```TypeScript
readonly voiceContent?: VoiceContent
```

Voice broadcast content of the notification. It exists only when voiceContentOptions.enabled is true in NotificationSubscribeInfo.

**Type:** VoiceContent

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

