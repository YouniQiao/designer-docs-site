# NotificationSystemLiveViewContent

Describes the system live view notification. A third-party application cannot directly create a notification of this
type. After the system proxy creates a system live view, the third-party application releases a notification with the
same ID to update the specified content. This API is inherited from
[NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md).

**Inheritance/Implementation:** NotificationSystemLiveViewContent extends [NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md)

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## button

```TypeScript
button?: NotificationButton
```

Button in the notification. This parameter is left empty by default.

**Type:** NotificationButton

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## capsule

```TypeScript
capsule?: NotificationCapsule
```

Capsule of the notification. This parameter is left empty by default.

**Type:** NotificationCapsule

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## progress

```TypeScript
progress?: NotificationProgress
```

Progress of the notification. This parameter is left empty by default.

**Type:** NotificationProgress

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## time

```TypeScript
time?: NotificationTime
```

Time of the notification. This parameter is left empty by default.

**Type:** NotificationTime

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## typeCode

```TypeScript
typeCode: number
```

Type code, which identifies the type of the service that invokes the API.

**Type:** number

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

