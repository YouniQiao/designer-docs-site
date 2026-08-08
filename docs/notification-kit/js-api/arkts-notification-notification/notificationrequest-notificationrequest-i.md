# NotificationRequest

Defines the data structure of a notification request, which is used to describe all information about a notification, including the notification content, identifier, display style, and interaction behavior.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-unnamed-export interface NotificationRequest--><!--Device-unnamed-export interface NotificationRequest-End-->

**System capability:** SystemCapability.Notification.Notification

## actionButtons

```TypeScript
actionButtons?: Array<NotificationActionButton>
```

Notification button. This parameter is left empty by default. A notification can contain a maximum of two buttons.Since API version 16, a notification can contain a maximum of three buttons for wearables.

**Type:** Array&lt;NotificationActionButton&gt;

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-actionButtons?: Array<NotificationActionButton>--><!--Device-NotificationRequest-actionButtons?: Array<NotificationActionButton>-End-->

**System capability:** SystemCapability.Notification.Notification

## appMessageId

```TypeScript
appMessageId?: string
```

Unique identifier field carried when an application sends a notification, used for notification deduplication.If the same application publishes notifications carrying the same **appMessageId** through different channels such as local and cloud, the device displays only one message, and subsequent duplicate notifications received will be silently deduplicated without being displayed or alerted. The deduplication identifier is valid only within 24hours after the notification is published, and becomes invalid after 24 hours or after the device restarts. The size does not exceed 202 bytes, and the excess part will be truncated. The value is empty by default.

**Type:** string

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-appMessageId?: string--><!--Device-NotificationRequest-appMessageId?: string-End-->

**System capability:** SystemCapability.Notification.Notification

## autoDeletedTime

```TypeScript
autoDeletedTime?: long
```

Scheduled auto-delete time for the notification. You can set this parameter to automatically delete the notification after the specified time. Default value: **0**. This parameter does not take effect if a value less than 0 or a past time is passed in.Data format: timestamp. Unit: millisecond. For example, to delete a notification after it has been retained for3 seconds (3000 ms), the corresponding deletion time is: **new Date().getTime()** + 3000.

**Type:** long

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-autoDeletedTime?: long--><!--Device-NotificationRequest-autoDeletedTime?: long-End-->

**System capability:** SystemCapability.Notification.Notification

## badgeIconStyle

```TypeScript
badgeIconStyle?: int
```

Notification badge type. Not supported currently.

**Type:** int

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-badgeIconStyle?: int--><!--Device-NotificationRequest-badgeIconStyle?: int-End-->

**System capability:** SystemCapability.Notification.Notification

## badgeNumber

```TypeScript
badgeNumber?: long
```

Number of notifications displayed on the application icon. The value is accumulated. The default value is **0**.

If the value of **badgeNumber** is less than or equal to 0, the badge number is not displayed;

if the value is greater than 99, **99+** is displayed on the badge.

For example, if an application publishes three notifications, and \_\_\_INLINE\_CODE\_DESC\_USD\_0\_\_\_ is set to **2**, **0**, and **3**  
in sequence, the application displays **2**, **2**, and **5** accordingly.

**Type:** long

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-badgeNumber?: long--><!--Device-NotificationRequest-badgeNumber?: long-End-->

**System capability:** SystemCapability.Notification.Notification

## color

```TypeScript
color?: long
```

Background color of the notification. Not supported currently.

**Type:** long

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-color?: long--><!--Device-NotificationRequest-color?: long-End-->

**System capability:** SystemCapability.Notification.Notification

## colorEnabled

```TypeScript
colorEnabled?: boolean
```

Whether the notification background color can be enabled. Not supported currently.

**Type:** boolean

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-colorEnabled?: boolean--><!--Device-NotificationRequest-colorEnabled?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## content

```TypeScript
content: NotificationContent
```

Notification display content, including the notification title and body.

**Type:** NotificationContent

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-content: NotificationContent--><!--Device-NotificationRequest-content: NotificationContent-End-->

**System capability:** SystemCapability.Notification.Notification

## creatorBundleName

```TypeScript
readonly creatorBundleName?: string
```

Name of the application that creates the notification.

**Type:** string

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-readonly creatorBundleName?: string--><!--Device-NotificationRequest-readonly creatorBundleName?: string-End-->

**System capability:** SystemCapability.Notification.Notification

## creatorPid

```TypeScript
readonly creatorPid?: int
```

PID used for creating the notification.

**Type:** int

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-readonly creatorPid?: int--><!--Device-NotificationRequest-readonly creatorPid?: int-End-->

**System capability:** SystemCapability.Notification.Notification

## creatorUid

```TypeScript
readonly creatorUid?: int
```

UID of the application that creates the notification.

**Type:** int

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-readonly creatorUid?: int--><!--Device-NotificationRequest-readonly creatorUid?: int-End-->

**System capability:** SystemCapability.Notification.Notification

## creatorUserId

```TypeScript
readonly creatorUserId?: int
```

ID of the user who creates the notification.

**Type:** int

**Since:** 8

**ArkTS mode:** ArkTS-Dyn since version 8; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-readonly creatorUserId?: int--><!--Device-NotificationRequest-readonly creatorUserId?: int-End-->

**System capability:** SystemCapability.Notification.Notification

## deliveryTime

```TypeScript
deliveryTime?: long
```

Notification delivery time. This parameter is automatically generated by the system and does not require configuration. Data format: timestamp. Unit: millisecond.

**Type:** long

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-deliveryTime?: long--><!--Device-NotificationRequest-deliveryTime?: long-End-->

**System capability:** SystemCapability.Notification.Notification

## distributedOption

```TypeScript
distributedOption?: DistributedOptions
```

Distributed notification options. Not supported currently.

**Type:** DistributedOptions

**Since:** 8

**ArkTS mode:** ArkTS-Dyn since version 8; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-distributedOption?: DistributedOptions--><!--Device-NotificationRequest-distributedOption?: DistributedOptions-End-->

**System capability:** SystemCapability.Notification.Notification

## extraInfo

```TypeScript
extraInfo?: { [key: string]: any }
```

Extended parameters, used to provide custom services for applications. This parameter is left blank by default.

The key value is assigned by the system. Manual modification does not take effect. The system automatically changes the value to the actual value during data transmission.

- **ohos.notificationManager.wantUri**: **uri** field in the [Want]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ object,  
which is passed to the application when the user taps a notification. This field can be obtained via the  
[getActiveNotifications]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_API call.

**Type:** { [key: string]: any }

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-extraInfo?: { [key: string]: any }--><!--Device-NotificationRequest-extraInfo?: { [key: string]: any }-End-->

**System capability:** SystemCapability.Notification.Notification

## groupName

```TypeScript
groupName?: string
```

Group to which the notification belongs. When different notifications have the same **groupName**, these notifications will be displayed as a group. The size does not exceed 202 bytes, and the excess part will be truncated. The value is empty by default.

**Type:** string

**Since:** 8

**ArkTS mode:** ArkTS-Dyn since version 8; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-groupName?: string--><!--Device-NotificationRequest-groupName?: string-End-->

**System capability:** SystemCapability.Notification.Notification

## hashCode

```TypeScript
readonly hashCode?: string
```

Unique ID of the notification.

**Type:** string

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-readonly hashCode?: string--><!--Device-NotificationRequest-readonly hashCode?: string-End-->

**System capability:** SystemCapability.Notification.Notification

## id

```TypeScript
id?: int
```

Notification ID. The default value is **0**. If a notification with the same ID exists, the notification is updated. If no notification with the same ID exists, a new notification is created.

**Type:** int

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-id?: int--><!--Device-NotificationRequest-id?: int-End-->

**System capability:** SystemCapability.Notification.Notification

## isAlertOnce

```TypeScript
isAlertOnce?: boolean
```

Whether to send a notification only once when the notification is published or updated. The default value is  
**false**.

- **true**: A notification is sent only when the notification is published for the first time. For subsequent  
update, the notification mode is changed to  
[LEVEL\_LOW]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.  
- **false**: A notification is sent based on the configured notification mode.

**Type:** boolean

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-isAlertOnce?: boolean--><!--Device-NotificationRequest-isAlertOnce?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## isCountDown

```TypeScript
isCountDown?: boolean
```

Whether to display the countdown time. Not supported currently.

**Type:** boolean

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-isCountDown?: boolean--><!--Device-NotificationRequest-isCountDown?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## isFloatingIcon

```TypeScript
isFloatingIcon?: boolean
```

Whether the notification is displayed as a floating icon in the status bar. Not supported currently.

**Type:** boolean

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-isFloatingIcon?: boolean--><!--Device-NotificationRequest-isFloatingIcon?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## isOngoing

```TypeScript
isOngoing?: boolean
```

Not supported currently.

**Type:** boolean

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-isOngoing?: boolean--><!--Device-NotificationRequest-isOngoing?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## isStopwatch

```TypeScript
isStopwatch?: boolean
```

Whether to display the stopwatch. Not supported currently.

**Type:** boolean

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-isStopwatch?: boolean--><!--Device-NotificationRequest-isStopwatch?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## isUnremovable

```TypeScript
isUnremovable?: boolean
```

Not supported currently.

**Type:** boolean

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-isUnremovable?: boolean--><!--Device-NotificationRequest-isUnremovable?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## label

```TypeScript
label?: string
```

Notification label. The **label** field functions similarly to an ID and can be used alone or combined with the ID to serve as the notification identifier. It is recommended to use the ID. If the **label** is not empty when a notification is published, the corresponding **label** must also be specified when the notification is updated or deleted. The size does not exceed 202 bytes, and the excess part will be truncated. The value is empty by default.

**Type:** string

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-label?: string--><!--Device-NotificationRequest-label?: string-End-->

**System capability:** SystemCapability.Notification.Notification

## largeIcon

```TypeScript
largeIcon?: image.PixelMap
```

Large notification icon. This parameter is left empty by default. The total number of the icon pixel bytes cannot exceed 192 KB (which is obtained through  
[getPixelBytesNumber]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_). The setting does not take effect if the limit is exceeded. When **largeIcon** is not set, the notification does not display a large icon. The recommended icon size is 128 × 128 pixels. The display effect depends on the device capability and notification center UI style.

**Type:** image.PixelMap

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-largeIcon?: image.PixelMap--><!--Device-NotificationRequest-largeIcon?: image.PixelMap-End-->

**System capability:** SystemCapability.Notification.Notification

## notificationFlags

```TypeScript
notificationFlags?: NotificationFlags
```

Notification flags. The default value is empty. This parameter is writable since API version 23. You can set this parameter to reduce the notification modes. This parameter does not take effect when the notification slot type is LIVE\_VIEW.

**Type:** NotificationFlags

**Since:** 8

**ArkTS mode:** ArkTS-Dyn since version 8; ArkTS-Sta since version 23.

**Model restriction:** 
- API version 23 and later: This API can be used in both the stage model and FA model.

<!--Device-NotificationRequest-notificationFlags?: NotificationFlags--><!--Device-NotificationRequest-notificationFlags?: NotificationFlags-End-->

**System capability:** SystemCapability.Notification.Notification

## notificationSlotType

```TypeScript
notificationSlotType?: notificationManager.SlotType
```

Notification slot type. The default value is **OTHER\_TYPES**. The notification reminder mode varies depending on the notification slot type.

**Type:** notificationManager.SlotType

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-notificationSlotType?: notificationManager.SlotType--><!--Device-NotificationRequest-notificationSlotType?: notificationManager.SlotType-End-->

**System capability:** SystemCapability.Notification.Notification

## overlayIcon

```TypeScript
overlayIcon?: image.PixelMap
```

Notification overlay icon. This parameter is left empty by default. The total bytes of the icon pixels cannot exceed 192 KB.

**Type:** image.PixelMap

**Since:** 23

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-overlayIcon?: image.PixelMap--><!--Device-NotificationRequest-overlayIcon?: image.PixelMap-End-->

**System capability:** SystemCapability.Notification.Notification

## priorityNotificationType

```TypeScript
priorityNotificationType?: notificationManager.PriorityNotificationType
```

Notification priority type. The default value is **OTHER**. If this parameter is set, the notification is pinned on the top and displayed in a highlighted manner in the notification center. The actual display effect depends on the device capability and notification center UI style.

**Type:** notificationManager.PriorityNotificationType

**Since:** 23

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 23.

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

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-removalWantAgent?: WantAgent--><!--Device-NotificationRequest-removalWantAgent?: WantAgent-End-->

**System capability:** SystemCapability.Notification.Notification

## showDeliveryTime

```TypeScript
showDeliveryTime?: boolean
```

Whether to display the time when the notification is delivered. Not supported currently.

**Type:** boolean

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-showDeliveryTime?: boolean--><!--Device-NotificationRequest-showDeliveryTime?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## slotType

```TypeScript
slotType?: notification.SlotType
```

Notification slot type. The default value is **OTHER\_TYPES**.

This attribute is supported since API version 7 and deprecated since API version 11. You are advised to use  
**notificationSlotType** instead.

**Type:** notification.SlotType

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 11

**Substitutes:** [NotificationRequest#notificationSlotType](notificationrequest-notificationrequest-i.md#notificationslottype)

<!--Device-NotificationRequest-slotType?: notification.SlotType--><!--Device-NotificationRequest-slotType?: notification.SlotType-End-->

**System capability:** SystemCapability.Notification.Notification

## smallIcon

```TypeScript
smallIcon?: image.PixelMap
```

Small notification icon. This parameter is left empty by default. The total number of the icon pixel bytes cannot exceed 192 KB (which is obtained through  
[getPixelBytesNumber]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_). The setting does not take effect if the limit is exceeded. When **smallIcon** is not set, the notification displays the default application icon. The recommended icon size is 128 × 128 pixels. The display effect depends on the device capability and notification center UI style.

**Type:** image.PixelMap

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-smallIcon?: image.PixelMap--><!--Device-NotificationRequest-smallIcon?: image.PixelMap-End-->

**System capability:** SystemCapability.Notification.Notification

## sound

```TypeScript
sound?: string
```

Path of the custom application notification ringtone resource. By default, this parameter is left empty. The following two types of audio resources are supported:

- Resource file: Audio file preconfigured in the application. It must be stored in the **resources/rawfile**  
directory. To use the resource file, directly pass the file name.  
- Sandbox file: Audio file downloaded from the network or generated by the user. It must be stored in the **files**  
directory or its subdirectory in the EL1 area of the  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_. The input format is **uri::{fileUri}**, where **fileUri** is the path obtained through  
[getUriFromPath]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_. For example, if an application transfers the downloaded audio resource demo.mp3 to the sandbox file directory /data/storage/el1/base/files/, the path obtained through **getUriFromPath** is **file://{bundleName}/data/storage/el1/base/files/demo.mp3**. You can use this path to release a notification to play the audio resource downloaded by the application.

Supported formats: M4A, AAC, MP3, OGG, WAV, FLAC, and AMR.

**Type:** string

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-sound?: string--><!--Device-NotificationRequest-sound?: string-End-->

**System capability:** SystemCapability.Notification.Notification

## tapDismissed

```TypeScript
tapDismissed?: boolean
```

Whether the notification is automatically cleared when the notification carries **wantAgent** or **actionButtons**.This parameter is valid only when the notification carries **wantAgent** or **actionButtons**. The default value is  
**true**.

- **true**: The current notification is automatically cleared after the notification or button is tapped.  
- **false**: The current notification is retained after the notification or button is tapped.

**Type:** boolean

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-tapDismissed?: boolean--><!--Device-NotificationRequest-tapDismissed?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## template

```TypeScript
template?: NotificationTemplate
```

Notification template. This parameter is left empty by default.

**Type:** NotificationTemplate

**Since:** 8

**ArkTS mode:** ArkTS-Dyn since version 8; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-template?: NotificationTemplate--><!--Device-NotificationRequest-template?: NotificationTemplate-End-->

**System capability:** SystemCapability.Notification.Notification

## updateOnly

```TypeScript
updateOnly?: boolean
```

Whether to update notifications only. The default value is **false**.

- **true**: If a notification with the same ID exists, the notification is updated. If no notification with the  
same ID exists, the update fails and no new notification is created.  
- **false**: If a notification with the same ID exists, the notification is updated. If no notification with the  
same ID exists, a new notification is created.

**Type:** boolean

**Since:** 18

**ArkTS mode:** ArkTS-Dyn since version 18; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-updateOnly?: boolean--><!--Device-NotificationRequest-updateOnly?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

## wantAgent

```TypeScript
wantAgent?: WantAgent
```

Behavior intent of an application, which is triggered when a notification is clicked. This parameter is left empty by default.

**Type:** WantAgent

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-NotificationRequest-wantAgent?: WantAgent--><!--Device-NotificationRequest-wantAgent?: WantAgent-End-->

**System capability:** SystemCapability.Notification.Notification

