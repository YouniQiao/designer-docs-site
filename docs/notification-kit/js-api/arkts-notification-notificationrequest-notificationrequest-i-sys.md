# NotificationRequest

The **NotificationRequest** module provides APIs for defining the notification request.

**Since:** 7

<!--Device-unnamed-export interface NotificationRequest--><!--Device-unnamed-export interface NotificationRequest-End-->

**System capability:** SystemCapability.Notification.Notification

## agentBundle

```TypeScript
readonly agentBundle?: BundleOption
```

Information about the agent bundle for creating notifications. This parameter is left empty by default.

**Type:** BundleOption

**Since:** 12

<!--Device-NotificationRequest-readonly agentBundle?: BundleOption--><!--Device-NotificationRequest-readonly agentBundle?: BundleOption-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## appInstanceKey

```TypeScript
readonly appInstanceKey?: string
```

Application instance key. This parameter is left empty by default.

**Type:** string

**Since:** 15

<!--Device-NotificationRequest-readonly appInstanceKey?: string--><!--Device-NotificationRequest-readonly appInstanceKey?: string-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## classification

```TypeScript
classification?: string
```

Notification category.Not supported currently.

**Type:** string

**Since:** 7

<!--Device-NotificationRequest-classification?: string--><!--Device-NotificationRequest-classification?: string-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## creatorInstanceKey

```TypeScript
readonly creatorInstanceKey?: number
```

Creator instance key. This parameter is supported since API version 12 and deprecated since API version 15. You are advised to use **appInstanceKey** instead.

**Type:** number

**Since:** 12

**Deprecated since:** 15

**Substitutes:** [appInstanceKey](arkts-notification-notificationrequest-notificationrequest-i-sys.md#appinstancekey)

<!--Device-NotificationRequest-readonly creatorInstanceKey?: number--><!--Device-NotificationRequest-readonly creatorInstanceKey?: number-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## deviceId

```TypeScript
readonly deviceId?: string
```

Device ID of the notification source. Not supported currently.

**Type:** string

**Since:** 8

<!--Device-NotificationRequest-readonly deviceId?: string--><!--Device-NotificationRequest-readonly deviceId?: string-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## extendInfo

```TypeScript
extendInfo?: Record<string, Object>
```

Extended parameters customized for the system applications to publish notifications.This parameter is left empty by default.

**Type:** Record<string, Object>

**Since:** 20

<!--Device-NotificationRequest-extendInfo?: Record<string, Object>--><!--Device-NotificationRequest-extendInfo?: Record<string, Object>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## forceDistributed

```TypeScript
forceDistributed?: boolean
```

Whether notifications are forcibly displayed in all scenario across devices.**NOTE** This field takes effect only when the application is in the cross-device collaborative management list and **notDistributed** is set to **false**. Check whether the **collaborationFilter** field in the **notification_config.json** file contains the UID or bundle name of the application. For details about the file configuration path, see the **NOTIFICATION_CONFIG_FILE** property in [notification_config_parse.h](https://gitcode.com/openharmony/notification_distributed_notification_service/blob/master/services/ans/include/notification_config_parse.h). If yes, the application is on the cross-device collaborative management list.  
- **true**: Notifications are displayed on all collaboration devices.  
- **false**: Notifications are displayed on the applications that are on the collaborative management list.

**Type:** boolean

**Default:** false

**Since:** 18

<!--Device-NotificationRequest-forceDistributed?: boolean--><!--Device-NotificationRequest-forceDistributed?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## groupInfo

```TypeScript
groupInfo?: GroupInfo
```

Custom group notification information. This parameter is left empty by default.

**Type:** GroupInfo

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-NotificationRequest-groupInfo?: GroupInfo--><!--Device-NotificationRequest-groupInfo?: GroupInfo-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## isRemoveAllowed

```TypeScript
isRemoveAllowed?: boolean
```

Whether the notification can be removed. If a notification is not removable, it will not be deleted when the user touches the delete button below the notification, and it also cannot be deleted by swiping left on the notification and touching the delete button. The default value is **true**.

- **true**: The notification can be removed.  
- **false**: The notification cannot be removed.

**Type:** boolean

**Default:** true

**Since:** 8

**Required permissions:** 
- API version 11+: ohos.permission.SET_UNREMOVABLE_NOTIFICATION

<!--Device-NotificationRequest-isRemoveAllowed?: boolean--><!--Device-NotificationRequest-isRemoveAllowed?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## notDistributed

```TypeScript
notDistributed?: boolean
```

Whether notifications are not displayed in all scenarios across devices.**NOTE** This field is mutually exclusive with the **forceDistributed** field.When both fields are set to **true**, only the **notDistributed** field takes effect.  
- **true**: Notifications are displayed only on the local device.  
- **false**: Notifications are displayed on all collaboration devices.

**Type:** boolean

**Default:** false

**Since:** 18

<!--Device-NotificationRequest-notDistributed?: boolean--><!--Device-NotificationRequest-notDistributed?: boolean-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## notificationControlFlags

```TypeScript
notificationControlFlags?: number
```

Notification mode control. The default value is **0**. This API can be used to reduce the notification modes of the current notification. This parameter is obtained by performing the bitwise OR operation with the enumeration of NotificationControlFlagStatus.

**Type:** number

**Since:** 12

<!--Device-NotificationRequest-notificationControlFlags?: long--><!--Device-NotificationRequest-notificationControlFlags?: long-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## overlayIcon

```TypeScript
overlayIcon?: image.PixelMap
```

Notification overlay icon. This parameter is left empty by default. The total number of the icon pixel bytes cannot exceed 192 KB (which is obtained through [getPixelBytesNumber](../../apis-image-kit/arkts-apis/arkts-image-image-pixelmap-i.md#getpixelbytesnumber-1)).

This API takes effect only when [notificationSlotType](arkts-notification-notificationrequest-notificationrequest-i.md) is set to **SOCIAL_COMMUNICATION**. The recommended icon size is 128 × 128 pixels. The display effect depends on the device capability and notification center UI style.

**Type:** image.PixelMap

**Since:** 23

<!--Device-NotificationRequest-overlayIcon?: image.PixelMap--><!--Device-NotificationRequest-overlayIcon?: image.PixelMap-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## representativeBundle

```TypeScript
representativeBundle?: BundleOption
```

Information about the proxied bundle. This parameter is left empty by default.

**Type:** BundleOption

**Since:** 12

<!--Device-NotificationRequest-representativeBundle?: BundleOption--><!--Device-NotificationRequest-representativeBundle?: BundleOption-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## source

```TypeScript
readonly source?: number
```

Notification source. Not supported currently.

**Type:** number

**Since:** 8

<!--Device-NotificationRequest-readonly source?: int--><!--Device-NotificationRequest-readonly source?: int-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## trigger

```TypeScript
trigger?:Trigger
```

Condition object. This parameter is left empty by default.

**Type:** Trigger

**Since:** 23

<!--Device-NotificationRequest-trigger?:Trigger--><!--Device-NotificationRequest-trigger?:Trigger-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## unifiedGroupInfo

```TypeScript
unifiedGroupInfo?: UnifiedGroupInfo
```

Intelligent notification unification information. This parameter is left empty by default.

**Type:** UnifiedGroupInfo

**Since:** 12

<!--Device-NotificationRequest-unifiedGroupInfo?: UnifiedGroupInfo--><!--Device-NotificationRequest-unifiedGroupInfo?: UnifiedGroupInfo-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

