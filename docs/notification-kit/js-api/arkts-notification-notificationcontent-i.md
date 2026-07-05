# NotificationContent

Describes the notification contents.

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## contentType

```TypeScript
contentType?: notification.ContentType
```

Notification content type. This attribute is supported since API version 7 and deprecated since API version 11. You are advised to use **notificationContentType** instead.

**Type:** notification.ContentType

**Since:** 7

**Deprecated since:** 11

**Substitutes:** [notificationContentType](arkts-notification-notificationcontent-i.md#notificationcontenttype)

**System capability:** SystemCapability.Notification.Notification

## longText

```TypeScript
longText?: NotificationLongTextContent
```

Long text.

**Type:** NotificationLongTextContent

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## multiLine

```TypeScript
multiLine?: NotificationMultiLineContent
```

Multi-line text.

**Type:** NotificationMultiLineContent

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## normal

```TypeScript
normal?: NotificationBasicContent
```

Normal text.

**Type:** NotificationBasicContent

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## notificationContentType

```TypeScript
notificationContentType?: notificationManager.ContentType
```

Notification content type.

**Type:** notificationManager.ContentType

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## picture

```TypeScript
picture?: NotificationPictureContent
```

Picture-attached.

**Type:** NotificationPictureContent

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## systemLiveView

```TypeScript
systemLiveView?: NotificationSystemLiveViewContent
```

System live view. A third-party application cannot directly create a notification of this type. After the system proxy creates a system live view, the third-party application releases a notification with the same ID to update the specified content.

**Type:** NotificationSystemLiveViewContent

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

