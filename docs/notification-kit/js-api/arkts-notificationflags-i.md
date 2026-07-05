# NotificationFlags

描述通知标志位。

**Since:** 8

**System capability:** SystemCapability.Notification.Notification

## reminderFlags

```TypeScript
readonly reminderFlags?: long
```

是否启用输入信息提示功能。 - bit0：铃声提示。0表示关闭，1表示开启。 - bit1：锁屏。0表示关闭，1表示开启。 - bit2：横幅。0表示关闭，1表示开启。 - bit3：亮屏。0表示关闭，1表示开启。 - bit4：振动。0表示关闭，1表示开启。 - bit5：状态栏通知图标。0表示关闭，1表示开启。

**Type:** long

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## lockScreenEnabled

```TypeScript
lockScreenEnabled?: NotificationFlagStatus
```

是否启用锁屏功能。默认值为TYPE_NONE。设置时仅[TYPE_CLOSE](arkts-notificationflagstatus-e-sys.md#NotificationFlagStatus)会生效。

**Type:** NotificationFlagStatus

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

## bannerEnabled

```TypeScript
bannerEnabled?: NotificationFlagStatus
```

是否启用横幅功能。默认值为TYPE_NONE。设置时仅[TYPE_CLOSE](arkts-notificationflagstatus-e-sys.md#NotificationFlagStatus)会生效。

**Type:** NotificationFlagStatus

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

## soundEnabled

```TypeScript
soundEnabled?: NotificationFlagStatus
```

是否启用声音提示功能。默认值为TYPE_NONE。从API version 23开始成为可写参数，设置时仅[TYPE_CLOSE](arkts-notificationflagstatus-e-sys.md#NotificationFlagStatus)会生效。

**Type:** NotificationFlagStatus

**Since:** 8

**System capability:** SystemCapability.Notification.Notification

## vibrationEnabled

```TypeScript
vibrationEnabled?: NotificationFlagStatus
```

是否启用振动提醒功能。默认值为TYPE_NONE。从API version 23开始成为可写参数，设置时仅[TYPE_CLOSE](arkts-notificationflagstatus-e-sys.md#NotificationFlagStatus)会生效。

**Type:** NotificationFlagStatus

**Since:** 8

**System capability:** SystemCapability.Notification.Notification

