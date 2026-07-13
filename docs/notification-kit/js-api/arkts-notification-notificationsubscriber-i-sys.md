# NotificationSubscriber (System API)

Provides callback methods for subscribers to receive and cancel notifications.

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onBadgeChanged

```TypeScript
onBadgeChanged?:(data: BadgeNumberCallbackData) => void
```

Callback used to return the listened application information.

**Type:** (data: BadgeNumberCallbackData) => void

**Since:** 10

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onBadgeEnabledChanged

```TypeScript
onBadgeEnabledChanged?: BadgeEnabledChangedCallback
```

Returns the changes of the enabling state of the application's badge.

**Type:** BadgeEnabledChangedCallback

**Since:** 12

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onBatchCancel

```TypeScript
onBatchCancel?: (data: Array<SubscribeCallbackData>) => void
```

Notification information of batch deletion.

**Type:** (data: Array<SubscribeCallbackData>) => void

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onCancel

```TypeScript
onCancel?:(data: SubscribeCallbackData) => void
```

Information about the notification to cancel.

**Type:** (data: SubscribeCallbackData) => void

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onConnect

```TypeScript
onConnect?:() => void
```

Callback invoked when subscription is complete.

**Type:** () => void

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onConsume

```TypeScript
onConsume?:(data: SubscribeCallbackData) => void
```

Information about the notification received.

**Type:** (data: SubscribeCallbackData) => void

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onDestroy

```TypeScript
onDestroy?:() => void
```

Callback to be invoked when the service is disconnected.

**Type:** () => void

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onDisconnect

```TypeScript
onDisconnect?:() => void
```

Callback invoked when unsubscription is complete.

**Type:** () => void

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onDoNotDisturbChanged

```TypeScript
onDoNotDisturbChanged?: (mode: notificationManager.DoNotDisturbDate) => void
```

Callback used to return DND time setting updates.

**Type:** (mode: notificationManager.DoNotDisturbDate) => void

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onDoNotDisturbDateChange

```TypeScript
onDoNotDisturbDateChange?: (mode: notification.DoNotDisturbDate) => void
```

Callback used to return DND time setting updates.

**Type:** (mode: notification.DoNotDisturbDate) => void

**Since:** 8

**Deprecated since:** 11

**Substitutes:** [onDoNotDisturbChanged](arkts-notification-notificationsubscriber-i-sys.md#ondonotdisturbchanged)

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onEnabledNotificationChanged

```TypeScript
onEnabledNotificationChanged?:(callbackData: EnabledNotificationCallbackData) => void
```

Callback used to return the listened application information.

**Type:** (callbackData: EnabledNotificationCallbackData) => void

**Since:** 8

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onEnabledPriorityByBundleChanged

```TypeScript
onEnabledPriorityByBundleChanged?: (callbackData: EnabledPriorityNotificationByBundleCallbackData) => void
```

Callback used to return the result.

**Type:** (callbackData: EnabledPriorityNotificationByBundleCallbackData) => void

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onEnabledPriorityChanged

```TypeScript
onEnabledPriorityChanged?: (callbackData: EnabledPriorityNotificationCallbackData) => void
```

Callback used to return the result.

**Type:** (callbackData: EnabledPriorityNotificationCallbackData) => void

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onEnabledSilentReminderChanged

```TypeScript
onEnabledSilentReminderChanged?: EnabledSilentReminderChangedCallback
```

Returns the changes of the enabling state of the application's silent reminder.

**Type:** EnabledSilentReminderChangedCallback

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onNotificationSwitchChanged

```TypeScript
onNotificationSwitchChanged?: NotificationSwitchChangedCallback
```

Returns the notification switch state change set by the interface of
[notificationManager.setNotificationSwitch](arkts-notification-setnotificationswitch-f-sys.md#setnotificationswitch-1).

**Type:** NotificationSwitchChangedCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onSystemUpdate

```TypeScript
onSystemUpdate?: SystemUpdateCallback
```

Returns notification information containing the system property value.

**Type:** SystemUpdateCallback

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onUpdate

```TypeScript
onUpdate?:(data: NotificationSortingMap) => void
```

Latest notification sorting list.

**Type:** (data: NotificationSortingMap) => void

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

