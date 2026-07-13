# NotificationMultiLineContent

Describes the multi-line text notification. This API is inherited from
[NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md).

> **NOTE**
>
> - When the multi-line text notification and another notification form a group notification, the group notification
> is displayed as a [normal text notification](arkts-notification-notificationbasiccontent-i.md) by default. After the group
> notification is expanded, the value of **longTitle** is used as the title, and the value of **lines** is used as
> the multi-line text content.

When the multi-line text notification is displayed independently, the value of **longTitle** is used as the title,
and the value of **lines** is used as the multi-line text content.

> - The display effect depends on the device capability and notification center UI style.

**Inheritance/Implementation:** NotificationMultiLineContent extends [NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md)

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

## lines

```TypeScript
lines: Array<string>
```

Multi-line text of a notification. A maximum of three lines are supported, and each line cannot exceed 1,024 bytes.
Excess content will be truncated.

**Type:** Array<string>

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## longTitle

```TypeScript
longTitle: string
```

Title of the notification in the expanded state. It cannot be empty or exceed 1,024 bytes. Excess content will be
truncated.

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

