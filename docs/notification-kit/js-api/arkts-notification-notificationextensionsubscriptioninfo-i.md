# NotificationExtensionSubscriptionInfo

The **NotificationExtensionSubscriptionInfo** module describes the information about notification extension subscription.

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## addr

```TypeScript
addr: string
```

MAC address, which is a unique identifier of the device. Example: 11:22:33:AA:BB:FF.

**Type:** string

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## type

```TypeScript
type: notificationExtensionSubscription.SubscribeType
```

Subscription type, specifying the subscription method for notification extension. Currently, only **SubscribeType.BLUETOOTH** is supported, indicating subscription to notifications via Bluetooth.

**Type:** notificationExtensionSubscription.SubscribeType

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

