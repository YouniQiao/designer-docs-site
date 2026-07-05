# NotificationSubscriber

提供订阅者接收到新通知、取消通知等的回调方法。

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onDoNotDisturbDateChange

```TypeScript
onDoNotDisturbDateChange?: (mode: notification.DoNotDisturbDate) => void
```

回调返回免打扰时间选项变更。

**Type:** (mode: notification.DoNotDisturbDate) => void

**Since:** 8

**Deprecated since:** 11

**Substitute:** NotificationSubscriber#onDoNotDisturbChanged

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onDisconnect

```TypeScript
onDisconnect?:() => void
```

取消订阅的回调。

**Type:** () => void

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onConsume

```TypeScript
onConsume?:(data: SubscribeCallbackData) => void
```

新接收到的通知信息。

**Type:** (data: SubscribeCallbackData) => void

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onDestroy

```TypeScript
onDestroy?:() => void
```

服务失联的回调。

**Type:** () => void

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onEnabledNotificationChanged

```TypeScript
onEnabledNotificationChanged?:(callbackData: EnabledNotificationCallbackData) => void
```

回调返回监听到的应用信息。

**Type:** (callbackData: EnabledNotificationCallbackData) => void

**Since:** 8

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onBadgeEnabledChanged

```TypeScript
onBadgeEnabledChanged?: BadgeEnabledChangedCallback
```

返回应用角标的使能状态变化。

**Type:** BadgeEnabledChangedCallback

**Since:** 12

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onNotificationSwitchChanged

```TypeScript
onNotificationSwitchChanged?: NotificationSwitchChangedCallback
```

返回由[notificationManager.setNotificationSwitch]../@ohos.notificationManager:notificationManager.setNotificationSwitch接口设置的通知开关状态变化。

**Type:** NotificationSwitchChangedCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onBadgeChanged

```TypeScript
onBadgeChanged?:(data: BadgeNumberCallbackData) => void
```

回调返回监听到的应用信息。

**Type:** (data: BadgeNumberCallbackData) => void

**Since:** 10

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onConnect

```TypeScript
onConnect?:() => void
```

订阅完成的回调。

**Type:** () => void

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onEnabledPriorityByBundleChanged

```TypeScript
onEnabledPriorityByBundleChanged?: (callbackData: EnabledPriorityNotificationByBundleCallbackData) => void
```

返回应用通知优先级开关状态。

**Type:** (callbackData: EnabledPriorityNotificationByBundleCallbackData) => void

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onEnabledPriorityChanged

```TypeScript
onEnabledPriorityChanged?: (callbackData: EnabledPriorityNotificationCallbackData) => void
```

返回通知优先级总开关状态。

**Type:** (callbackData: EnabledPriorityNotificationCallbackData) => void

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onCancel

```TypeScript
onCancel?:(data: SubscribeCallbackData) => void
```

需要取消的通知信息。

**Type:** (data: SubscribeCallbackData) => void

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onBatchCancel

```TypeScript
onBatchCancel?: (data: Array<SubscribeCallbackData>) => void
```

新接收到的通知信息。

**Type:** (data: Array<SubscribeCallbackData>) => void

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onSystemUpdate

```TypeScript
onSystemUpdate?: SystemUpdateCallback
```

返回携带系统属性值的通知信息。

**Type:** SystemUpdateCallback

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onEnabledSilentReminderChanged

```TypeScript
onEnabledSilentReminderChanged?: EnabledSilentReminderChangedCallback
```

返回应用通知静默提醒的使能状态变化。

**Type:** EnabledSilentReminderChangedCallback

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onDoNotDisturbChanged

```TypeScript
onDoNotDisturbChanged?: (mode: notificationManager.DoNotDisturbDate) => void
```

回调返回免打扰时间选项变更。

**Type:** (mode: notificationManager.DoNotDisturbDate) => void

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## onUpdate

```TypeScript
onUpdate?:(data: NotificationSortingMap) => void
```

最新的通知排序列表。

**Type:** (data: NotificationSortingMap) => void

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

