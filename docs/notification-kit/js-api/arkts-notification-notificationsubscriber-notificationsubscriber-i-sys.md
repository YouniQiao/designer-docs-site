# NotificationSubscriber (System API)

Provides callback methods for subscribers to receive and cancel notifications.

**Since:** 7

<!--Device-unnamed-export interface NotificationSubscriber--><!--Device-unnamed-export interface NotificationSubscriber-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onBadgeChanged

```TypeScript
onBadgeChanged?:(data: BadgeNumberCallbackData) => void
```

Callback used to return the listened application information.

**Type:** (data: BadgeNumberCallbackData) =&gt; void

**Since:** 10

<!--Device-NotificationSubscriber-onBadgeChanged?:(data: BadgeNumberCallbackData) => void--><!--Device-NotificationSubscriber-onBadgeChanged?:(data: BadgeNumberCallbackData) => void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onBadgeEnabledChanged

```TypeScript
onBadgeEnabledChanged?: BadgeEnabledChangedCallback
```

Returns the changes of the enabling state of the application's badge.

**Type:** BadgeEnabledChangedCallback

**Since:** 12

<!--Device-NotificationSubscriber-onBadgeEnabledChanged?: BadgeEnabledChangedCallback--><!--Device-NotificationSubscriber-onBadgeEnabledChanged?: BadgeEnabledChangedCallback-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onBatchCancel

```TypeScript
onBatchCancel?: (data: Array<SubscribeCallbackData>) => void
```

Notification information of batch deletion.

**Type:** (data: Array&lt;SubscribeCallbackData&gt;) =&gt; void

**Since:** 11

<!--Device-NotificationSubscriber-onBatchCancel?: (data: Array<SubscribeCallbackData>) => void--><!--Device-NotificationSubscriber-onBatchCancel?: (data: Array<SubscribeCallbackData>) => void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onCancel

```TypeScript
onCancel?:(data: SubscribeCallbackData) => void
```

Information about the notification to cancel.

**Type:** (data: SubscribeCallbackData) =&gt; void

**Since:** 7

<!--Device-NotificationSubscriber-onCancel?:(data: SubscribeCallbackData) => void--><!--Device-NotificationSubscriber-onCancel?:(data: SubscribeCallbackData) => void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onConnect

```TypeScript
onConnect?:() => void
```

Callback invoked when subscription is complete.

**Type:** () =&gt; void

**Since:** 7

<!--Device-NotificationSubscriber-onConnect?:() => void--><!--Device-NotificationSubscriber-onConnect?:() => void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onConsume

```TypeScript
onConsume?:(data: SubscribeCallbackData) => void
```

Information about the notification received.

**Type:** (data: SubscribeCallbackData) =&gt; void

**Since:** 7

<!--Device-NotificationSubscriber-onConsume?:(data: SubscribeCallbackData) => void--><!--Device-NotificationSubscriber-onConsume?:(data: SubscribeCallbackData) => void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onDestroy

```TypeScript
onDestroy?:() => void
```

Callback to be invoked when the service is disconnected.

**Type:** () =&gt; void

**Since:** 7

<!--Device-NotificationSubscriber-onDestroy?:() => void--><!--Device-NotificationSubscriber-onDestroy?:() => void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onDisconnect

```TypeScript
onDisconnect?:() => void
```

Callback invoked when unsubscription is complete.

**Type:** () =&gt; void

**Since:** 7

<!--Device-NotificationSubscriber-onDisconnect?:() => void--><!--Device-NotificationSubscriber-onDisconnect?:() => void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onDoNotDisturbChanged

```TypeScript
onDoNotDisturbChanged?: (mode: notificationManager.DoNotDisturbDate) => void
```

Callback used to return DND time setting updates.

**Type:** (mode: notificationManager.DoNotDisturbDate) =&gt; void

**Since:** 11

<!--Device-NotificationSubscriber-onDoNotDisturbChanged?: (mode: notificationManager.DoNotDisturbDate) => void--><!--Device-NotificationSubscriber-onDoNotDisturbChanged?: (mode: notificationManager.DoNotDisturbDate) => void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onDoNotDisturbDateChange

```TypeScript
onDoNotDisturbDateChange?: (mode: notification.DoNotDisturbDate) => void
```

Callback used to return DND time setting updates.

**Type:** (mode: notification.DoNotDisturbDate) =&gt; void

**Since:** 8

**Deprecated since:** 11

**Substitutes:** [onDoNotDisturbChanged](arkts-notification-notificationsubscriber-notificationsubscriber-i-sys.md#ondonotdisturbchanged)

<!--Device-NotificationSubscriber-onDoNotDisturbDateChange?: (mode: notification.DoNotDisturbDate) => void--><!--Device-NotificationSubscriber-onDoNotDisturbDateChange?: (mode: notification.DoNotDisturbDate) => void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onEnabledNotificationChanged

```TypeScript
onEnabledNotificationChanged?:(callbackData: EnabledNotificationCallbackData) => void
```

Callback used to return the listened application information.

**Type:** (callbackData: EnabledNotificationCallbackData) =&gt; void

**Since:** 8

<!--Device-NotificationSubscriber-onEnabledNotificationChanged?:(callbackData: EnabledNotificationCallbackData) => void--><!--Device-NotificationSubscriber-onEnabledNotificationChanged?:(callbackData: EnabledNotificationCallbackData) => void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onEnabledPriorityByBundleChanged

```TypeScript
onEnabledPriorityByBundleChanged?: (callbackData: EnabledPriorityNotificationByBundleCallbackData) => void
```

Callback used to return the result.

**Type:** (callbackData: EnabledPriorityNotificationByBundleCallbackData) =&gt; void

**Since:** 23

<!--Device-NotificationSubscriber-onEnabledPriorityByBundleChanged?: (callbackData: EnabledPriorityNotificationByBundleCallbackData) => void--><!--Device-NotificationSubscriber-onEnabledPriorityByBundleChanged?: (callbackData: EnabledPriorityNotificationByBundleCallbackData) => void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onEnabledPriorityChanged

```TypeScript
onEnabledPriorityChanged?: (callbackData: EnabledPriorityNotificationCallbackData) => void
```

Callback used to return the result.

**Type:** (callbackData: EnabledPriorityNotificationCallbackData) =&gt; void

**Since:** 23

<!--Device-NotificationSubscriber-onEnabledPriorityChanged?: (callbackData: EnabledPriorityNotificationCallbackData) => void--><!--Device-NotificationSubscriber-onEnabledPriorityChanged?: (callbackData: EnabledPriorityNotificationCallbackData) => void-End-->

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

<!--Device-NotificationSubscriber-onEnabledSilentReminderChanged?: EnabledSilentReminderChangedCallback--><!--Device-NotificationSubscriber-onEnabledSilentReminderChanged?: EnabledSilentReminderChangedCallback-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onNotificationSwitchChanged

```TypeScript
onNotificationSwitchChanged?: NotificationSwitchChangedCallback
```

Returns the notification switch state change set by the interface of [notificationManager.setNotificationSwitch](arkts-notification-notificationmanager-setnotificationswitch-f-sys.md#setnotificationswitch).

**Type:** NotificationSwitchChangedCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-NotificationSubscriber-onNotificationSwitchChanged?: NotificationSwitchChangedCallback--><!--Device-NotificationSubscriber-onNotificationSwitchChanged?: NotificationSwitchChangedCallback-End-->

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

<!--Device-NotificationSubscriber-onSystemUpdate?: SystemUpdateCallback--><!--Device-NotificationSubscriber-onSystemUpdate?: SystemUpdateCallback-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onUpdate

```TypeScript
onUpdate?:(data: NotificationSortingMap) => void
```

Latest notification sorting list.

**Type:** (data: NotificationSortingMap) =&gt; void

**Since:** 7

<!--Device-NotificationSubscriber-onUpdate?:(data: NotificationSortingMap) => void--><!--Device-NotificationSubscriber-onUpdate?:(data: NotificationSortingMap) => void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

