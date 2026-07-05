# NotificationPictureContent

Describes the picture-attached notification. This API is inherited from [NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md#notificationbasiccontent). > **NOTE** > > The display effect depends on the device capability and notification center UI style.

**Inheritance/Implementation:** NotificationPictureContent extends [NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md#notificationbasiccontent)

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## briefText

```TypeScript
briefText: string
```

Brief text of the notification. It cannot be empty or exceed 1,024 bytes. Excess content will be truncated.

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## expandedTitle

```TypeScript
expandedTitle: string
```

Title of the notification in the expanded state. It cannot be empty or exceed 1,024 bytes. Excess content will be truncated.

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## picture

```TypeScript
picture: image.PixelMap
```

Picture content of the notification. The total pixel data size of the image cannot exceed 2 MB.

**Type:** image.PixelMap

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

