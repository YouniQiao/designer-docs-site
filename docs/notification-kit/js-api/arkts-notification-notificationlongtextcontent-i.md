# NotificationLongTextContent

Describes the long text notification. This API is inherited from [NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md#notificationbasiccontent). > **NOTE** > > The display effect depends on the device capability and notification center UI style.

**Inheritance/Implementation:** NotificationLongTextContent extends [NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md#notificationbasiccontent)

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

## longText

```TypeScript
longText: string
```

Long text of the notification. It cannot be empty or exceed 3,072 bytes. Excess content will be truncated.

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

