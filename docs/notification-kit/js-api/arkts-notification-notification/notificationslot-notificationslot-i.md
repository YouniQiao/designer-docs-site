# NotificationSlot

The **NotificationSlot** module provides APIs for defining the notification slots. The notification reminder modes vary according to notification slots.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-unnamed-export interface NotificationSlot--><!--Device-unnamed-export interface NotificationSlot-End-->

**System capability:** SystemCapability.Notification.Notification

## badgeFlag

```TypeScript
badgeFlag?: boolean
```

Whether to display the badge. The default value is **true**.

- **true**: Display the badge.  
- **false**: Do not display the badge.

**Type:** boolean

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationSlot-badgeFlag?: boolean--><!--Device-NotificationSlot-badgeFlag?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## bypassDnd

```TypeScript
bypassDnd?: boolean
```

Whether to bypass Do Not Disturb mode in the system. The default value is **false**.

- **true**: Bypass Do Not Disturb mode, and notifications will still be alerted in Do Not Disturb mode.  
- **false**: Do not bypass Do Not Disturb mode, and notifications will not be alerted in Do Not Disturb mode.

**Type:** boolean

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationSlot-bypassDnd?: boolean--><!--Device-NotificationSlot-bypassDnd?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## desc

```TypeScript
desc?: string
```

Description of the notification channel. The size cannot exceed 243 bytes, and the excess part will be truncated.

**Type:** string

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationSlot-desc?: string--><!--Device-NotificationSlot-desc?: string-End-->

**System capability:** SystemCapability.Notification.Notification

## enabled

```TypeScript
readonly enabled?: boolean
```

Whether to allow notifications of this slot type to be published.

- **true**: yes.  
- **false**: no.

**Type:** boolean

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

<!--Device-NotificationSlot-readonly enabled?: boolean--><!--Device-NotificationSlot-readonly enabled?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## level

```TypeScript
level?: notification.SlotLevel
```

Notification level.

This parameter is supported since API version 7 and deprecated since API version 20. It is recommended to use  
**notificationLevel** instead.

**Type:** notification.SlotLevel

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 20

**Substitutes:** [NotificationSlot#notificationLevel](notificationslot-notificationslot-i.md#notificationlevel)

<!--Device-NotificationSlot-level?: notification.SlotLevel--><!--Device-NotificationSlot-level?: notification.SlotLevel-End-->

**System capability:** SystemCapability.Notification.Notification

## lightColor

```TypeScript
lightColor?: int
```

Indicator color of the notification. This is a reserved capability and is not supported currently.

**Type:** int

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationSlot-lightColor?: int--><!--Device-NotificationSlot-lightColor?: int-End-->

**System capability:** SystemCapability.Notification.Notification

## lightEnabled

```TypeScript
lightEnabled?: boolean
```

Whether to enable the light. The default value is **false**.

- **true**: yes.  
- **false**: no.

**Type:** boolean

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationSlot-lightEnabled?: boolean--><!--Device-NotificationSlot-lightEnabled?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## lockscreenVisibility

```TypeScript
lockscreenVisibility?: int
```

Mode for displaying the notification on the lock screen. This is a reserved capability and is not supported currently.

**Type:** int

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationSlot-lockscreenVisibility?: int--><!--Device-NotificationSlot-lockscreenVisibility?: int-End-->

**System capability:** SystemCapability.Notification.Notification

## notificationLevel

```TypeScript
notificationLevel?: notificationManager.SlotLevel
```

Notification level, which is used to describe the display priority and alert intensity of notifications of this channel type.

**Type:** notificationManager.SlotLevel

**Since:** 20

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

<!--Device-NotificationSlot-notificationLevel?: notificationManager.SlotLevel--><!--Device-NotificationSlot-notificationLevel?: notificationManager.SlotLevel-End-->

**System capability:** SystemCapability.Notification.Notification

## notificationType

```TypeScript
notificationType?: notificationManager.SlotType
```

Slot type. Different slot types have different notification reminder types.

**Type:** notificationManager.SlotType

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

<!--Device-NotificationSlot-notificationType?: notificationManager.SlotType--><!--Device-NotificationSlot-notificationType?: notificationManager.SlotType-End-->

**System capability:** SystemCapability.Notification.Notification

## sound

```TypeScript
sound?: string
```

File name of the custom ringtone for notifications from this channel. The file is placed in the  
**resources/rawfile** directory, and formats such as M4A, AAC, MP3, OGG, WAV, FLAC, and AMR are supported. The size cannot exceed 243 bytes, and the excess part will be truncated.

**Type:** string

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationSlot-sound?: string--><!--Device-NotificationSlot-sound?: string-End-->

**System capability:** SystemCapability.Notification.Notification

## type

```TypeScript
type?: notification.SlotType
```

Channel type.

This parameter is supported since API version 7 and deprecated since API version 11. It is recommended to use  
**notificationType** instead.

**Type:** notification.SlotType

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 11

**Substitutes:** [NotificationSlot#notificationType](notificationslot-notificationslot-i.md#notificationtype)

<!--Device-NotificationSlot-type?: notification.SlotType--><!--Device-NotificationSlot-type?: notification.SlotType-End-->

**System capability:** SystemCapability.Notification.Notification

## vibrationEnabled

```TypeScript
vibrationEnabled?: boolean
```

Whether to enable vibration. The default value is **false**.

- **true**: yes.  
- **false**: no.

**Type:** boolean

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationSlot-vibrationEnabled?: boolean--><!--Device-NotificationSlot-vibrationEnabled?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## vibrationValues

```TypeScript
vibrationValues?: Array<long>
```

Vibration mode of the notification. This is a reserved capability and is not supported currently.

**Type:** Array&lt;long&gt;

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationSlot-vibrationValues?: Array<long>--><!--Device-NotificationSlot-vibrationValues?: Array<long>-End-->

**System capability:** SystemCapability.Notification.Notification

