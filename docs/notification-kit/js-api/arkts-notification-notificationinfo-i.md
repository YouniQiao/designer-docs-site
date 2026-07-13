# NotificationInfo

The **NotificationInfo** module describes the notification information delivered to the
[onReceiveMessage](arkts-notification-notificationsubscriberextensionability-c.md#onreceivemessage-1)
callback of ExtensionAbility for notification subscriptions.

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## appIndex

```TypeScript
readonly appIndex: number
```

Index of the application clone that creates the notification. It takes effect only for application clones.

**Type:** number

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## appName

```TypeScript
readonly appName?: string
```

Name of the application that creates the notification.

**Type:** string

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## bundleName

```TypeScript
readonly bundleName: string
```

Name of the bundle that creates the notification.

**Type:** string

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## content

```TypeScript
readonly content: NotificationExtensionContent
```

Notification content.

**Type:** NotificationExtensionContent

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## deliveryTime

```TypeScript
readonly deliveryTime?: number
```

Timestamp (in milliseconds) when the notification is published.

**Type:** number

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## groupName

```TypeScript
readonly groupName?: string
```

Notification group name, which is left empty by default.

**Type:** string

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## hashCode

```TypeScript
readonly hashCode: string
```

Unique identifier of the notification.

**Type:** string

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## notificationSlotType

```TypeScript
readonly notificationSlotType: notificationManager.SlotType
```

Notification slot type.

**Type:** notificationManager.SlotType

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

