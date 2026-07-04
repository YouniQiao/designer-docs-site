# NotificationSystemLiveViewContent

Describes the system live view notification. A third-party application cannot directly create a notification of this type. After the system proxy creates a system live view, the third-party application releases a notification with the same ID to update the specified content. This API is inherited from [NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md#notificationbasiccontent).

**Inheritance/Implementation:** NotificationSystemLiveViewContent extends [NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md#notificationbasiccontent)

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## cardButtons

```TypeScript
cardButtons?: Array<NotificationIconButton>
```

Live view buttons (a maximum of three buttons are supported). This parameter is left empty by default.

**Type:** Array<NotificationIconButton>

**Since:** 18

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## liveViewType

```TypeScript
liveViewType?: LiveViewTypes
```

Live view types. The default value is **LIVE_VIEW_ACTIVITY**.

**Type:** LiveViewTypes

**Since:** 18

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

