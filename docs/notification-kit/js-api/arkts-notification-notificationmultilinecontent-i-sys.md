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

## lineWantAgents

```TypeScript
lineWantAgents?: Array<WantAgent>
```

**wantAgent**s triggered when a line of text in the multi-line text is tapped. The text in different lines
corresponds to different **wantAgent**s. The maximum number of lines configured for this field is equal to the
value of [lines](arkts-notification-notificationmultilinecontent-i.md). This parameter is left
empty by default.

**Type:** Array<WantAgent>

**Since:** 20

**Required permissions:** ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

