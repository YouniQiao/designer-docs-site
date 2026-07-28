# EnabledPriorityNotificationByBundleCallbackData (System API)

Returns the notification priority switch state.

**Since:** 23

<!--Device-unnamed-export interface EnabledPriorityNotificationByBundleCallbackData--><!--Device-unnamed-export interface EnabledPriorityNotificationByBundleCallbackData-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## bundle

```TypeScript
readonly bundle: string
```

Bundle name of the application.

**Type:** string

**Since:** 23

<!--Device-EnabledPriorityNotificationByBundleCallbackData-readonly bundle: string--><!--Device-EnabledPriorityNotificationByBundleCallbackData-readonly bundle: string-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## enableStatus

```TypeScript
readonly enableStatus: notificationManager.PriorityEnableStatus
```

Whether the priority notification for an application is enabled.  
- **DISABLE**: The priority notification is disabled.  
- **ENABLE_BY_INTELLIGENT**: The priority notification can be enabled through intelligent recognition,user keyword matching, or application rule matching.  
- **ENABLE**: The priority notification is enabled for all applications.

**Type:** notificationManager.PriorityEnableStatus

**Since:** 23

<!--Device-EnabledPriorityNotificationByBundleCallbackData-readonly enableStatus: notificationManager.PriorityEnableStatus--><!--Device-EnabledPriorityNotificationByBundleCallbackData-readonly enableStatus: notificationManager.PriorityEnableStatus-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## uid

```TypeScript
readonly uid: number
```

UID of the application.

**Type:** number

**Since:** 23

<!--Device-EnabledPriorityNotificationByBundleCallbackData-readonly uid: int--><!--Device-EnabledPriorityNotificationByBundleCallbackData-readonly uid: int-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

