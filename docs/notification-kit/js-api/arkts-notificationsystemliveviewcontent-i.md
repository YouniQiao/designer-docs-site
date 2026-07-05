# NotificationSystemLiveViewContent

描述系统实况窗通知内容。不支持三方应用直接创建该类型通知，可以由系统代理创建系统实况窗类型通知后，三方应用发布同ID的通知来更新指定内容。继承自 [NotificationBasicContent](arkts-notificationbasiccontent-i.md#NotificationBasicContent)。

**Inheritance:** NotificationSystemLiveViewContentextends: NotificationBasicContent.

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## button

```TypeScript
button?: NotificationButton
```

实况通知的按钮。默认为空。

**Type:** NotificationButton

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## liveViewType

```TypeScript
liveViewType?: LiveViewTypes
```

实况窗类型。默认值为LIVE_VIEW_ACTIVITY。

**Type:** LiveViewTypes

**Since:** 18

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## capsule

```TypeScript
capsule?: NotificationCapsule
```

实况通知的胶囊。默认为空。

**Type:** NotificationCapsule

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## progress

```TypeScript
progress?: NotificationProgress
```

实况内容的进度。默认为空。

**Type:** NotificationProgress

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## time

```TypeScript
time?: NotificationTime
```

实况通知的时间。默认为空。

**Type:** NotificationTime

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## cardButtons

```TypeScript
cardButtons?: Array<NotificationIconButton>
```

实况窗按钮（最多支持3个）。默认为空。

**Type:** Array<NotificationIconButton>

**Since:** 18

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## typeCode

```TypeScript
typeCode: int
```

类型标识符，标记调用方业务类型。

**Type:** int

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

