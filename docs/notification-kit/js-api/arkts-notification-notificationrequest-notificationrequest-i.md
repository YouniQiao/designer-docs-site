# NotificationRequest

The **NotificationRequest** module provides APIs for defining the notification request.

**Since:** 7

<!--Device-unnamed-export interface NotificationRequest--><!--Device-unnamed-export interface NotificationRequest-End-->

**System capability:** SystemCapability.Notification.Notification

## actionButtons

```TypeScript
actionButtons?: Array<NotificationActionButton>
```

Notification button. This parameter is left empty by default. A notification can contain a maximum of two buttons.Since API version 16, a notification can contain a maximum of three buttons for wearables.

**Type:** Array&lt;NotificationActionButton&gt;

**Since:** 7

<!--Device-NotificationRequest-actionButtons?: Array<NotificationActionButton>--><!--Device-NotificationRequest-actionButtons?: Array<NotificationActionButton>-End-->

**System capability:** SystemCapability.Notification.Notification

## appMessageId

```TypeScript
appMessageId?: string
```

Unique identifier field carried when an application sends a notification, used for notification deduplication.If the same application publishes notifications carrying the same **appMessageId** through different channels such as local and cloud, the device displays only one message, and subsequent duplicate notifications received will be silently deduplicated without being displayed or alerted. The deduplication identifier is valid only within 24hours after the notification is published, and becomes invalid after 24 hours or after the device restarts. The size does not exceed 202 bytes, and the excess part will be truncated. The value is empty by default.

**Type:** string

**Since:** 12

<!--Device-NotificationRequest-appMessageId?: string--><!--Device-NotificationRequest-appMessageId?: string-End-->

**System capability:** SystemCapability.Notification.Notification

## autoDeletedTime

```TypeScript
autoDeletedTime?: number
```

Scheduled time for clearing a notification. If this parameter is set, the notification will be automatically cleared after the specified time. The default value is **0**.

Data format: timestamp,

in milliseconds.

For example, if a notification is to be cleared after being displayed for 3 seconds (3000 ms), you can set **new Date().getTime() + 3000** to meet this requirement.

**Type:** number

**Since:** 7

<!--Device-NotificationRequest-autoDeletedTime?: long--><!--Device-NotificationRequest-autoDeletedTime?: long-End-->

**System capability:** SystemCapability.Notification.Notification

## badgeIconStyle

```TypeScript
badgeIconStyle?: number
```

Notification badge type. Not supported currently.

**Type:** number

**Since:** 7

<!--Device-NotificationRequest-badgeIconStyle?: int--><!--Device-NotificationRequest-badgeIconStyle?: int-End-->

**System capability:** SystemCapability.Notification.Notification

## badgeNumber

```TypeScript
badgeNumber?: number
```

Number of notifications displayed on the application icon. The value is accumulated. The default value is **0**.

If the value of **badgeNumber** is less than or equal to 0, the badge number is not displayed;

if the value is greater than 99, **99+** is displayed on the badge.

For example, if an application publishes three notifications, and `badgeNumber` is set to **2**, **0**, and **3** in sequence, the application displays **2**, **2**, and **5** accordingly.

**Type:** number

**Since:** 9

<!--Device-NotificationRequest-badgeNumber?: long--><!--Device-NotificationRequest-badgeNumber?: long-End-->

**System capability:** SystemCapability.Notification.Notification

## color

```TypeScript
color?: number
```

Background color of the notification. Not supported currently.

**Type:** number

**Since:** 7

<!--Device-NotificationRequest-color?: long--><!--Device-NotificationRequest-color?: long-End-->

**System capability:** SystemCapability.Notification.Notification

## colorEnabled

```TypeScript
colorEnabled?: boolean
```

Whether the notification background color can be enabled. Not supported currently.

**Type:** boolean

**Since:** 7

<!--Device-NotificationRequest-colorEnabled?: boolean--><!--Device-NotificationRequest-colorEnabled?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## content

```TypeScript
content: NotificationContent
```

Notification display content, including the notification title and body.

**Type:** NotificationContent

**Since:** 7

<!--Device-NotificationRequest-content: NotificationContent--><!--Device-NotificationRequest-content: NotificationContent-End-->

**System capability:** SystemCapability.Notification.Notification

## creatorBundleName

```TypeScript
readonly creatorBundleName?: string
```

Name of the application that creates the notification.

**Type:** string

**Since:** 7

<!--Device-NotificationRequest-readonly creatorBundleName?: string--><!--Device-NotificationRequest-readonly creatorBundleName?: string-End-->

**System capability:** SystemCapability.Notification.Notification

## creatorPid

```TypeScript
readonly creatorPid?: number
```

PID used for creating the notification.

**Type:** number

**Since:** 7

<!--Device-NotificationRequest-readonly creatorPid?: int--><!--Device-NotificationRequest-readonly creatorPid?: int-End-->

**System capability:** SystemCapability.Notification.Notification

## creatorUid

```TypeScript
readonly creatorUid?: number
```

UID of the application that creates the notification.

**Type:** number

**Since:** 7

<!--Device-NotificationRequest-readonly creatorUid?: int--><!--Device-NotificationRequest-readonly creatorUid?: int-End-->

**System capability:** SystemCapability.Notification.Notification

## creatorUserId

```TypeScript
readonly creatorUserId?: number
```

ID of the user who creates the notification.

**Type:** number

**Since:** 8

<!--Device-NotificationRequest-readonly creatorUserId?: int--><!--Device-NotificationRequest-readonly creatorUserId?: int-End-->

**System capability:** SystemCapability.Notification.Notification

## deliveryTime

```TypeScript
deliveryTime?: number
```

Notification delivery time. This parameter is automatically generated by the system and does not require configuration. Data format: timestamp. Unit: millisecond.

**Type:** number

**Since:** 7

<!--Device-NotificationRequest-deliveryTime?: long--><!--Device-NotificationRequest-deliveryTime?: long-End-->

**System capability:** SystemCapability.Notification.Notification

## distributedOption

```TypeScript
distributedOption?: DistributedOptions
```

Distributed notification options. Not supported currently.

**Type:** DistributedOptions

**Since:** 8

<!--Device-NotificationRequest-distributedOption?: DistributedOptions--><!--Device-NotificationRequest-distributedOption?: DistributedOptions-End-->

**System capability:** SystemCapability.Notification.Notification

## extraInfo

```TypeScript
extraInfo?: { [key: string]: any }
```

Extended parameters, used to provide custom services for applications. This parameter is left blank by default.

The key value is assigned by the system. Manual modification does not take effect. The system automatically changes the value to the actual value during data transmission.

- **ohos.notificationManager.wantUri**: **uri** field in the [Want](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-want-want-c.md) object,which is passed to the application when the user taps a notification. This field can be obtained via the [getActiveNotifications](arkts-notification-notification-getactivenotifications-depr-f.md#getactivenotifications-1)API call.

**Type:** { [key: string]: any }

**Since:** 7

<!--Device-NotificationRequest-extraInfo?: { [key: string]: any }--><!--Device-NotificationRequest-extraInfo?: { [key: string]: any }-End-->

**System capability:** SystemCapability.Notification.Notification

## groupName

```TypeScript
groupName?: string
```

Group to which a notification belongs. If the group names of different notifications are the same, these notifications are displayed in a group. This parameter is left blank by default.

**Type:** string

**Since:** 8

<!--Device-NotificationRequest-groupName?: string--><!--Device-NotificationRequest-groupName?: string-End-->

**System capability:** SystemCapability.Notification.Notification

## hashCode

```TypeScript
readonly hashCode?: string
```

Unique ID of the notification.

**Type:** string

**Since:** 7

<!--Device-NotificationRequest-readonly hashCode?: string--><!--Device-NotificationRequest-readonly hashCode?: string-End-->

**System capability:** SystemCapability.Notification.Notification

## id

```TypeScript
id?: number
```

Notification ID. The default value is **0**. If a notification with the same ID exists, the notification is updated. If no notification with the same ID exists, a new notification is created.

**Type:** number

**Since:** 7

<!--Device-NotificationRequest-id?: int--><!--Device-NotificationRequest-id?: int-End-->

**System capability:** SystemCapability.Notification.Notification

## isAlertOnce

```TypeScript
isAlertOnce?: boolean
```

Whether to send a notification only once when the notification is published or updated. The default value is **false**.

- **true**: A notification is sent only when the notification is published for the first time. For subsequent update, the notification mode is changed to [LEVEL_LOW](arkts-notification-notificationmanager-slotlevel-e.md).  
- **false**: A notification is sent based on the configured notification mode.

**Type:** boolean

**Since:** 7

<!--Device-NotificationRequest-isAlertOnce?: boolean--><!--Device-NotificationRequest-isAlertOnce?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## isCountDown

```TypeScript
isCountDown?: boolean
```

Whether to display the countdown time. Not supported currently.

**Type:** boolean

**Since:** 7

<!--Device-NotificationRequest-isCountDown?: boolean--><!--Device-NotificationRequest-isCountDown?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## isFloatingIcon

```TypeScript
isFloatingIcon?: boolean
```

Whether the notification is displayed as a floating icon in the status bar. Not supported currently.

**Type:** boolean

**Since:** 7

<!--Device-NotificationRequest-isFloatingIcon?: boolean--><!--Device-NotificationRequest-isFloatingIcon?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## isOngoing

```TypeScript
isOngoing?: boolean
```

Not supported currently.

**Type:** boolean

**Since:** 7

<!--Device-NotificationRequest-isOngoing?: boolean--><!--Device-NotificationRequest-isOngoing?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## isStopwatch

```TypeScript
isStopwatch?: boolean
```

Whether to display the stopwatch. Not supported currently.

**Type:** boolean

**Since:** 7

<!--Device-NotificationRequest-isStopwatch?: boolean--><!--Device-NotificationRequest-isStopwatch?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## isUnremovable

```TypeScript
isUnremovable?: boolean
```

Not supported currently.

**Type:** boolean

**Since:** 7

<!--Device-NotificationRequest-isUnremovable?: boolean--><!--Device-NotificationRequest-isUnremovable?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## label

```TypeScript
label?: string
```

Notification label. The **label** field functions similarly to an ID and can be used alone or combined with the ID to serve as the notification identifier. It is recommended to use the ID. If the **label** is not empty when a notification is published, the corresponding **label** must also be specified when the notification is updated or deleted. The size does not exceed 202 bytes, and the excess part will be truncated. The value is empty by default.

**Type:** string

**Since:** 7

<!--Device-NotificationRequest-label?: string--><!--Device-NotificationRequest-label?: string-End-->

**System capability:** SystemCapability.Notification.Notification

## largeIcon

```TypeScript
largeIcon?: image.PixelMap
```

Large notification icon. This parameter is left empty by default. The total number of the icon pixel bytes cannot exceed 192 KB (which is obtained through [getPixelBytesNumber](../../apis-image-kit/arkts-apis/arkts-image-image-pixelmap-i.md#getpixelbytesnumber-1)). The recommended icon size is 128 × 128 pixels. The display effect depends on the device capability and notification center UI style.

**Type:** image.PixelMap

**Since:** 7

<!--Device-NotificationRequest-largeIcon?: image.PixelMap--><!--Device-NotificationRequest-largeIcon?: image.PixelMap-End-->

**System capability:** SystemCapability.Notification.Notification

## notificationFlags

```TypeScript
notificationFlags?: NotificationFlags
```

Notification flags to be set or obtained. This parameter is left empty by default. This parameter is writable since API version 23. You can set this parameter to reduce the notification modes. When the notification channel type is LIVE_VIEW, this parameter does not take effect.

**Type:** NotificationFlags

**Since:** 8

**Model restriction:** 
- API version 23 and later: This API can be used in both the stage model and FA model.

<!--Device-NotificationRequest-notificationFlags?: NotificationFlags--><!--Device-NotificationRequest-notificationFlags?: NotificationFlags-End-->

**System capability:** SystemCapability.Notification.Notification

## notificationSlotType

```TypeScript
notificationSlotType?: notificationManager.SlotType
```

Notification slot type. The default value is **OTHER_TYPES**. The notification reminder mode varies depending on the notification slot type.

**Type:** notificationManager.SlotType

**Since:** 11

<!--Device-NotificationRequest-notificationSlotType?: notificationManager.SlotType--><!--Device-NotificationRequest-notificationSlotType?: notificationManager.SlotType-End-->

**System capability:** SystemCapability.Notification.Notification

## priorityNotificationType

```TypeScript
priorityNotificationType?: notificationManager.PriorityNotificationType
```

Notification priority type. The default value is **OTHER**. If this parameter is set, the notification is pinned on the top and displayed in a highlighted manner in the notification center. The actual display effect depends on the device capability and notification center UI style.

**Type:** notificationManager.PriorityNotificationType

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-NotificationRequest-priorityNotificationType?: notificationManager.PriorityNotificationType--><!--Device-NotificationRequest-priorityNotificationType?: notificationManager.PriorityNotificationType-End-->

**System capability:** SystemCapability.Notification.Notification

## removalWantAgent

```TypeScript
removalWantAgent?: WantAgent
```

Behavior intent of an application, which is triggered when a notification is removed. This parameter is left empty by default. Currently, redirection to UIAbility is not supported. Only common events can be published (that is, the **actionType** field of WantAgentInfo is set to **4**).

**Type:** WantAgent

**Since:** 9

<!--Device-NotificationRequest-removalWantAgent?: WantAgent--><!--Device-NotificationRequest-removalWantAgent?: WantAgent-End-->

**System capability:** SystemCapability.Notification.Notification

## showDeliveryTime

```TypeScript
showDeliveryTime?: boolean
```

Whether to display the time when the notification is delivered. Not supported currently.

**Type:** boolean

**Since:** 7

<!--Device-NotificationRequest-showDeliveryTime?: boolean--><!--Device-NotificationRequest-showDeliveryTime?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## slotType

```TypeScript
slotType?: notification.SlotType
```

Notification slot type. The default value is **OTHER_TYPES**.

This attribute is supported since API version 7 and deprecated since API version 11. You are advised to use **notificationSlotType** instead.

**Type:** notification.SlotType

**Since:** 7

**Deprecated since:** 11

**Substitutes:** [notificationSlotType](arkts-notification-notificationrequest-notificationrequest-i.md#notificationslottype)

<!--Device-NotificationRequest-slotType?: notification.SlotType--><!--Device-NotificationRequest-slotType?: notification.SlotType-End-->

**System capability:** SystemCapability.Notification.Notification

## smallIcon

```TypeScript
smallIcon?: image.PixelMap
```

Small notification icon. This parameter is left empty by default. The total number of the icon pixel bytes cannot exceed 192 KB (which is obtained through [getPixelBytesNumber](../../apis-image-kit/arkts-apis/arkts-image-image-pixelmap-i.md#getpixelbytesnumber-1)). The recommended icon size is 128 × 128 pixels. The display effect depends on the device capability and notification center UI style.

**Type:** image.PixelMap

**Since:** 7

<!--Device-NotificationRequest-smallIcon?: image.PixelMap--><!--Device-NotificationRequest-smallIcon?: image.PixelMap-End-->

**System capability:** SystemCapability.Notification.Notification

## sound

```TypeScript
sound?: string
```

Path of the custom application notification ringtone resource. By default, this parameter is left empty. The following two types of audio resources are supported:

- Resource file: Audio file preconfigured in the application. It must be stored in the **resources/rawfile** directory. To use the resource file, directly pass the file name.  
- Sandbox file: Audio file downloaded from the network or generated by the user. It must be stored in the **files** directory or its subdirectory in the EL1 area of the [sandbox file directory](docroot://file-management/app-sandbox-directory.md#application-sandbox-directory-and-application-sandbox-path). The input format is **uri::{fileUri}**, where **fileUri** is the path obtained through [getUriFromPath](../../apis-core-file-kit/arkts-apis/arkts-corefile-fileuri-geturifrompath-f.md#geturifrompath-1). For example, if an application transfers the downloaded audio resource demo.mp3 to the sandbox file directory /data/storage/el1/base/files/, the path obtained through **getUriFromPath** is **file://{bundleName}/data/storage/el1/base/files/demo.mp3**. You can use this path to release a notification to play the audio resource downloaded by the application.

Supported formats: M4A, AAC, MP3, OGG, WAV, FLAC, and AMR.

**Type:** string

**Since:** 12

<!--Device-NotificationRequest-sound?: string--><!--Device-NotificationRequest-sound?: string-End-->

**System capability:** SystemCapability.Notification.Notification

## tapDismissed

```TypeScript
tapDismissed?: boolean
```

Whether the notification is automatically cleared when the notification carries **wantAgent** or **actionButtons**.This parameter is valid only when the notification carries **wantAgent** or **actionButtons**. The default value is **true**.

- **true**: The current notification is automatically cleared after the notification or button is tapped.  
- **false**: The current notification is retained after the notification or button is tapped.

**Type:** boolean

**Since:** 7

<!--Device-NotificationRequest-tapDismissed?: boolean--><!--Device-NotificationRequest-tapDismissed?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## template

```TypeScript
template?: NotificationTemplate
```

Notification template. This parameter is left empty by default.

**Type:** NotificationTemplate

**Since:** 8

<!--Device-NotificationRequest-template?: NotificationTemplate--><!--Device-NotificationRequest-template?: NotificationTemplate-End-->

**System capability:** SystemCapability.Notification.Notification

## updateOnly

```TypeScript
updateOnly?: boolean
```

Whether to update notifications only. The default value is **false**.

- **true**: If a notification with the same ID exists, the notification is updated. If no notification with the same ID exists, the update fails and no new notification is created.  
- **false**: If a notification with the same ID exists, the notification is updated. If no notification with the same ID exists, a new notification is created.

**Type:** boolean

**Since:** 18

<!--Device-NotificationRequest-updateOnly?: boolean--><!--Device-NotificationRequest-updateOnly?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## wantAgent

```TypeScript
wantAgent?: WantAgent
```

Behavior intent of an application, which is triggered when a notification is clicked. This parameter is left empty by default.

**Type:** WantAgent

**Since:** 7

<!--Device-NotificationRequest-wantAgent?: WantAgent--><!--Device-NotificationRequest-wantAgent?: WantAgent-End-->

**System capability:** SystemCapability.Notification.Notification

