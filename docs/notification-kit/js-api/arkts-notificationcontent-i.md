# NotificationContent

通知内容。

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## liveView

```TypeScript
liveView?: NotificationLiveViewContent
```

普通实况窗类型通知内容。

**Type:** NotificationLiveViewContent

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## normal

```TypeScript
normal?: NotificationBasicContent
```

基本类型通知内容。

**Type:** NotificationBasicContent

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## longText

```TypeScript
longText?: NotificationLongTextContent
```

长文本类型通知内容。

**Type:** NotificationLongTextContent

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## notificationContentType

```TypeScript
notificationContentType?: notificationManager.ContentType
```

通知内容类型。

**Type:** notificationManager.ContentType

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## systemLiveView

```TypeScript
systemLiveView?: NotificationSystemLiveViewContent
```

系统实况窗类型通知内容。不支持三方应用直接创建该类型通知，可以由系统代理创建系统实况窗类型通知后，三方应用发布同ID的通知来更新指定内容。

**Type:** NotificationSystemLiveViewContent

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## multiLine

```TypeScript
multiLine?: NotificationMultiLineContent
```

多行类型通知内容。

**Type:** NotificationMultiLineContent

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## contentType

```TypeScript
contentType?: notification.ContentType
```

通知内容类型。 从API version 7开始支持，从API version 11开始废弃，建议使用notificationContentType替代。

**Type:** notification.ContentType

**Since:** 7

**Deprecated since:** 11

**Substitute:** NotificationContent#notificationContentType

**System capability:** SystemCapability.Notification.Notification

## picture

```TypeScript
picture?: NotificationPictureContent
```

图片类型通知内容。

**Type:** NotificationPictureContent

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

