# NotificationSlot

The **NotificationSlot** module provides APIs for defining the notification slots. The notification reminder modes
vary according to notification slots.

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## badgeFlag

```TypeScript
badgeFlag?: boolean
```

Whether to display the badge.

- **true**: Yes.
- **false**: No. The default value is **true**.

**Type:** boolean

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## bypassDnd

```TypeScript
bypassDnd?: boolean
```

Whether to bypass DND mode in the system.

- **true**: Yes.
- **false**: No. The default value is **false**.

**Type:** boolean

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## desc

```TypeScript
desc?: string
```

Notification slot description. The value contains a maximum of 243 bytes. Excess part will be truncated.

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## enabled

```TypeScript
readonly enabled?: boolean
```

Whether the notification is enabled.

- **true**: enabled.
- **false**: disabled.

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.Notification.Notification

## level

```TypeScript
level?: notification.SlotLevel
```

Notification level.

This attribute is supported since API version 7 and deprecated since API version 20. You are advised to use
**notificationLevel** instead.

**Type:** notification.SlotLevel

**Since:** 7

**Deprecated since:** 20

**Substitutes:** [notificationLevel](arkts-notification-notificationslot-i.md#notificationlevel)

**System capability:** SystemCapability.Notification.Notification

## lightColor

```TypeScript
lightColor?: number
```

Indicator color of the notification. Not supported currently.

**Type:** number

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## lightEnabled

```TypeScript
lightEnabled?: boolean
```

Whether the indicator blinks for the notification.

- **true**: Yes.
- **false**: No. The default value is **false**.

**Type:** boolean

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## lockscreenVisibility

```TypeScript
lockscreenVisibility?: number
```

Mode for displaying the notification on the lock screen. Not supported currently.

**Type:** number

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## notificationLevel

```TypeScript
notificationLevel?: notificationManager.SlotLevel
```

Notification level.

**Type:** notificationManager.SlotLevel

**Since:** 20

**System capability:** SystemCapability.Notification.Notification

## notificationType

```TypeScript
notificationType?: notificationManager.SlotType
```

Notification slot type.

**Type:** notificationManager.SlotType

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## sound

```TypeScript
sound?: string
```

Name of the custom ringtone file for notifications. This file is stored in the **resources/rawfile** directory and
supports formats such as M4A, AAC, MP3, OGG, WAV, FLAC, and AMR. The value contains a maximum of 243 bytes. Excess
part will be truncated.

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## type

```TypeScript
type?: notification.SlotType
```

Notification slot type.

This attribute is supported since API version 7 and deprecated since API version 11. You are advised to use
**notificationType** instead.

**Type:** notification.SlotType

**Since:** 7

**Deprecated since:** 11

**Substitutes:** [notificationType](arkts-notification-notificationslot-i.md#notificationtype)

**System capability:** SystemCapability.Notification.Notification

## vibrationEnabled

```TypeScript
vibrationEnabled?: boolean
```

Whether to enable vibration for the notification.

- **true**: Yes.
- **false**: No. The default value is **false**.

**Type:** boolean

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## vibrationValues

```TypeScript
vibrationValues?: Array<number>
```

Vibration mode of the notification. Not supported currently.

**Type:** Array<number>

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

