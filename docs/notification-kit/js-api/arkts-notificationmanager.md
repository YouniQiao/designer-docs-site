# @ohos.notificationManager

The **NotificationManager** module provides notification management capabilities, covering notifications, notification slots, notification enabled status, and notification badge status.

**Since:** 9

**System capability:** SystemCapability.Notification.Notification

## Modules to Import

```TypeScript
import { notificationManager } from '@ohos.notificationManager';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addSlot](arkts-notification-addslot-f.md#addslot-3) | Adds a notification slot of a specified type. This API uses an asynchronous callback to return the result. |
| [addSlot](arkts-notification-addslot-f.md#addslot-4) | Adds a notification slot of a specified type. This API uses a promise to return the result. |
| [cancel](arkts-notification-cancel-f.md#cancel-1) | Cancels a notification with the specified ID. This API uses an asynchronous callback to return the result. |
| [cancel](arkts-notification-cancel-f.md#cancel-2) | Cancels a notification with the specified ID and label. This API uses an asynchronous callback to return the result. |
| [cancel](arkts-notification-cancel-f.md#cancel-3) | Cancels a notification with the specified ID and optional label. This API uses a promise to return the result. |
| [cancelAll](arkts-notification-cancelall-f.md#cancelall-1) | Cancels all notifications of this application. This API uses an asynchronous callback to return the result. |
| [cancelAll](arkts-notification-cancelall-f.md#cancelall-2) | Cancels all notifications of this application. This API uses a promise to return the result. |
| [cancelGroup](arkts-notification-cancelgroup-f.md#cancelgroup-1) | Cancels notifications under a notification group of this application. This API uses an asynchronous callback to return the result. |
| [cancelGroup](arkts-notification-cancelgroup-f.md#cancelgroup-2) | Cancels notifications under a notification group of this application. This API uses a promise to return the result. |
| [getActiveNotificationCount](arkts-notification-getactivenotificationcount-f.md#getactivenotificationcount-1) | Obtains the number of active notifications of this application. This API uses an asynchronous callback to return the result. |
| [getActiveNotificationCount](arkts-notification-getactivenotificationcount-f.md#getactivenotificationcount-2) | Obtains the number of active notifications of this application. This API uses a promise to return the result. |
| [getActiveNotifications](arkts-notification-getactivenotifications-f.md#getactivenotifications-1) | Obtains the active notifications of this application. This API uses an asynchronous callback to return the result. |
| [getActiveNotifications](arkts-notification-getactivenotifications-f.md#getactivenotifications-2) | Obtains the active notifications of this application. This API uses a promise to return the result. |
| [getBadgeNumber](arkts-notification-getbadgenumber-f.md#getbadgenumber-1) | Obtains the badge number of this application. This API uses a promise to return the result. |
| [getNotificationParameters](arkts-notification-getnotificationparameters-f.md#getnotificationparameters-1) | Obtains some information about the **wantAgent** field in [NotificationRequest](arkts-notification-notificationrequest-i.md#notificationrequest). This API uses a promise to return the result. |
| [getNotificationSetting](arkts-notification-getnotificationsetting-f.md#getnotificationsetting-1) | Obtains the notification settings of an application. This API uses a promise to return the result. |
| [getSlot](arkts-notification-getslot-f.md#getslot-1) | Obtains a notification slot of a specified type. This API uses an asynchronous callback to return the result. |
| [getSlot](arkts-notification-getslot-f.md#getslot-2) | Obtains a notification slot of a specified type. This API uses a promise to return the result. |
| [getSlots](arkts-notification-getslots-f.md#getslots-1) | Obtains all notification slots of this application. This API uses an asynchronous callback to return the result. |
| [getSlots](arkts-notification-getslots-f.md#getslots-2) | Obtains all notification slots of this application. This API uses a promise to return the result. |
| [isDistributedEnabled](arkts-notification-isdistributedenabled-f.md#isdistributedenabled-1) | Checks whether the device supports cross-device notifications. This API uses an asynchronous callback to return the result. |
| [isDistributedEnabled](arkts-notification-isdistributedenabled-f.md#isdistributedenabled-2) | Checks whether the device supports cross-device notifications. This API uses a promise to return the result. |
| [isGeofenceEnabled](arkts-notification-isgeofenceenabled-f.md#isgeofenceenabled-1) | Checks whether geofencing is enabled. This API uses a promise to return the result. |
| [isNotificationEnabledSync](arkts-notification-isnotificationenabledsync-f.md#isnotificationenabledsync-1) | Checks whether notification is enabled for the specified application. This API returns the result synchronously. |
| [isSupportTemplate](arkts-notification-issupporttemplate-f.md#issupporttemplate-1) | Checks whether a specified template is supported before using [NotificationTemplate](arkts-notification-notificationtemplate-i.md#notificationtemplate) to publish a notification. This API uses an asynchronous callback to return the result. |
| [isSupportTemplate](arkts-notification-issupporttemplate-f.md#issupporttemplate-2) | Checks whether a specified template is supported before using [NotificationTemplate](arkts-notification-notificationtemplate-i.md#notificationtemplate) to publish a notification. This API uses a promise to return the result. |
| [openNotificationSettings](arkts-notification-opennotificationsettings-f.md#opennotificationsettings-1) | Opens the notification settings page of the application, which is displayed in semi-modal mode and can be used to set the notification enabling and notification mode. This API uses a promise to return the result. |
| [openNotificationSettingsWithResult](arkts-notification-opennotificationsettingswithresult-f.md#opennotificationsettingswithresult-1) | Opens the notification settings page of the application, which is displayed in semi-modal mode and can be used to set the notification enabling and notification mode. This API uses a promise to return the result. When the semi- modal window is closed, the user-defined status is returned. |
| [publish](arkts-notification-publish-f.md#publish-1) | Publishes a notification. This API uses an asynchronous callback to return the result. If the ID and label of the new notification are the same as that of the previous notification, the new one replaces the previous one. |
| [publish](arkts-notification-publish-f.md#publish-2) | Publishes a notification. This API uses a promise to return the result. If the ID and label of the new notification are the same as that of the previous notification, the new one replaces the previous one. |
| [removeAllSlots](arkts-notification-removeallslots-f.md#removeallslots-1) | Removes all notification slots for this application. This API uses an asynchronous callback to return the result. |
| [removeAllSlots](arkts-notification-removeallslots-f.md#removeallslots-2) | Removes all notification slots for this application. This API uses a promise to return the result. |
| [removeSlot](arkts-notification-removeslot-f.md#removeslot-1) | Removes a notification slot of a specified type for this application. This API uses an asynchronous callback to return the result. |
| [removeSlot](arkts-notification-removeslot-f.md#removeslot-2) | Removes a notification slot of a specified type for this application. This API uses a promise to return the result. |
| [requestEnableNotification](arkts-notification-requestenablenotification-f.md#requestenablenotification-1) | Requests notification to be enabled for this application. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; This API is supported since API version 9 and deprecated since API version 12. You are advised to use [requestEnableNotification](arkts-notification-requestenablenotification-f.md#requestenablenotification-2) with context instead. |
| [requestEnableNotification](arkts-notification-requestenablenotification-f.md#requestenablenotification-2) | Requests notification to be enabled for this application. You can call this API to display a dialog box prompting the user to enable notification for your application before publishing a notification. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; - This API can be called only after the application UI is loaded (that is, &gt; [loadContent](../../apis-ability-kit/arkts-apis/arkts-ability-uiextensioncontentsession-c.md#loadcontent-1) is &gt; successfully called). &gt; &gt; - When an application uses **requestEnableNotification()** to display a dialog box for notification authorization &gt; and the user rejects the authorization, the application cannot use this API to open the dialog box again. However &gt; , it can call [openNotificationSettingsWithResult](arkts-notification-opennotificationsettingswithresult-f.md#opennotificationsettingswithresult-1) &gt; to open the notification management dialog box. |
| [requestEnableNotification](arkts-notification-requestenablenotification-f.md#requestenablenotification-3) | Requests notification to be enabled for this application. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; This API is supported since API version 9 and deprecated since API version 12. You are advised to use [requestEnableNotification](arkts-notification-requestenablenotification-f.md#requestenablenotification-4) with context instead. |
| [requestEnableNotification](arkts-notification-requestenablenotification-f.md#requestenablenotification-4) | Requests notification to be enabled for this application. You can call this API to display a dialog box prompting the user to enable notification for your application before publishing a notification. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; - This API can be called only after the application UI is loaded (that is, &gt; [loadContent](../../apis-ability-kit/arkts-apis/arkts-ability-uiextensioncontentsession-c.md#loadcontent-1) is &gt; successfully called). &gt; &gt; - When an application uses **requestEnableNotification()** to display a dialog box for notification authorization &gt; and the user rejects the authorization, the application cannot use this API to open the dialog box again. However &gt; , it can call [openNotificationSettingsWithResult](arkts-notification-opennotificationsettingswithresult-f.md#opennotificationsettingswithresult-1) &gt; to open the notification management dialog box. |
| [setBadgeNumber](arkts-notification-setbadgenumber-f.md#setbadgenumber-1) | Sets the notification badge number. This API uses an asynchronous callback to return the result. |
| [setBadgeNumber](arkts-notification-setbadgenumber-f.md#setbadgenumber-2) | Sets the notification badge number. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addDoNotDisturbProfile](arkts-notification-adddonotdisturbprofile-f-sys.md#adddonotdisturbprofile-1) | Adds the Do Not Disturb profile. This API uses a promise to return the result. |
| [addDoNotDisturbProfile](arkts-notification-adddonotdisturbprofile-f-sys.md#adddonotdisturbprofile-2) | Adds the Do Not Disturb profile for a specified user. This API uses a promise to return the result. |
| [addSlot](arkts-notification-addslot-f-sys.md#addslot-1) | Adds a notification slot. This API uses an asynchronous callback to return the result. |
| [addSlot](arkts-notification-addslot-f-sys.md#addslot-2) | Adds a notification slot. This API uses a promise to return the result. |
| [addSlots](arkts-notification-addslots-f-sys.md#addslots-1) | Adds an array of notification slots. This API uses an asynchronous callback to return the result. |
| [addSlots](arkts-notification-addslots-f-sys.md#addslots-2) | Adds an array of notification slots. This API uses a promise to return the result. |
| [cancel](arkts-notification-cancel-f-sys.md#cancel-4) | Cancels the notification of other applications of the user. This API uses a promise to return the result. The current application must have a proxy relationship with another application, or the **ohos.permission.NOTIFICATION_AGENT_CONTROLLER** permission is granted to the current application. |
| [cancelAsBundle](arkts-notification-cancelasbundle-f-sys.md#cancelasbundle-1) | Cancels a notification published through the reminder agent. This API uses an asynchronous callback to return the result. |
| [cancelAsBundle](arkts-notification-cancelasbundle-f-sys.md#cancelasbundle-2) | Cancels a notification published through the reminder agent. This API uses a promise to return the result. |
| [cancelAsBundle](arkts-notification-cancelasbundle-f-sys.md#cancelasbundle-3) | Cancels a notification published through the reminder agent. This API uses a promise to return the result. |
| [disableNotificationFeature](arkts-notification-disablenotificationfeature-f-sys.md#disablenotificationfeature-1) | Disables the application from publishing notifications by adding the application bundle name to the permission control list. This function can be disabled as required. |
| [disableNotificationFeature](arkts-notification-disablenotificationfeature-f-sys.md#disablenotificationfeature-2) | Disables the application from publishing notifications by adding the application bundle name to the permission control list. This API uses a promise to return the result. |
| [displayBadge](arkts-notification-displaybadge-f-sys.md#displaybadge-1) | Sets whether to enable the notification badge for a specified application. This API uses an asynchronous callback to return the result. |
| [displayBadge](arkts-notification-displaybadge-f-sys.md#displaybadge-2) | Sets whether to enable the notification badge for a specified application. This API uses a promise to return the result. |
| [getActiveNotificationByFilter](arkts-notification-getactivenotificationbyfilter-f-sys.md#getactivenotificationbyfilter-1) | Obtains information about the common live view that matches the specified filter criteria. This API uses an asynchronous callback to return the result. |
| [getActiveNotificationByFilter](arkts-notification-getactivenotificationbyfilter-f-sys.md#getactivenotificationbyfilter-2) | Obtains information about the common live view that matches the specified filter criteria. This API uses a promise to return the result. |
| [getAllActiveNotifications](arkts-notification-getallactivenotifications-f-sys.md#getallactivenotifications-1) | Obtains all active notifications. This API uses an asynchronous callback to return the result. |
| [getAllActiveNotifications](arkts-notification-getallactivenotifications-f-sys.md#getallactivenotifications-2) | Obtains all active notifications. This API uses a promise to return the result. |
| [getAllNotificationEnabledBundles](arkts-notification-getallnotificationenabledbundles-f-sys.md#getallnotificationenabledbundles-1) | Obtains a list of applications that allow notifications. This API uses a promise to return the result. |
| [getAllNotificationEnabledBundles](arkts-notification-getallnotificationenabledbundles-f-sys.md#getallnotificationenabledbundles-2) | Obtains the list of applications that are allowed to publish notifications by a specified user. This API uses a promise to return the result. |
| [getBadgeDisplayStatusByBundles](arkts-notification-getbadgedisplaystatusbybundles-f-sys.md#getbadgedisplaystatusbybundles-1) | Batch obtains the display statuses of application badges. This API uses a promise to return the result. |
| [getBundlePriorityConfig](arkts-notification-getbundlepriorityconfig-f-sys.md#getbundlepriorityconfig-1) | Obtains the priority configuration of an application. |
| [getDeviceRemindType](arkts-notification-getdeviceremindtype-f-sys.md#getdeviceremindtype-1) | Obtains the notification reminder type. This API uses an asynchronous callback to return the result. |
| [getDeviceRemindType](arkts-notification-getdeviceremindtype-f-sys.md#getdeviceremindtype-2) | Obtains the notification reminder type. This API uses a promise to return the result. |
| [getDistributedDeviceList](arkts-notification-getdistributeddevicelist-f-sys.md#getdistributeddevicelist-1) | Obtains the device types that enable cross-device notification. This API uses a promise to return the result. |
| [getDoNotDisturbDate](arkts-notification-getdonotdisturbdate-f-sys.md#getdonotdisturbdate-1) | Obtains the DND time. This API uses an asynchronous callback to return the result. |
| [getDoNotDisturbDate](arkts-notification-getdonotdisturbdate-f-sys.md#getdonotdisturbdate-2) | Obtains the DND time. This API uses a promise to return the result. |
| [getDoNotDisturbDate](arkts-notification-getdonotdisturbdate-f-sys.md#getdonotdisturbdate-3) | Obtains the DND time of a specified user. This API uses an asynchronous callback to return the result. |
| [getDoNotDisturbDate](arkts-notification-getdonotdisturbdate-f-sys.md#getdonotdisturbdate-4) | Obtains the DND time of a specified user. This API uses a promise to return the result. |
| [getDoNotDisturbProfile](arkts-notification-getdonotdisturbprofile-f-sys.md#getdonotdisturbprofile-1) | Queries the Do Not Disturb profile. This API uses a promise to return the result. |
| [getDoNotDisturbProfile](arkts-notification-getdonotdisturbprofile-f-sys.md#getdonotdisturbprofile-2) | Queries the Do Not Disturb profile of a specified user. This API uses a promise to return the result. |
| [getNotificationStatisticsByBundle](arkts-notification-getnotificationstatisticsbybundle-f-sys.md#getnotificationstatisticsbybundle-1) | Obtains notification statistics of a specified list of applications in batches. This API uses a promise to return the result. |
| [getNotificationSwitch](arkts-notification-getnotificationswitch-f-sys.md#getnotificationswitch-1) | Obtains the status of the notification switch. Use Promise asynchronous callbacks. |
| [getPriorityEnabledByBundles](arkts-notification-getpriorityenabledbybundles-f-sys.md#getpriorityenabledbybundles-1) | Obtains whether priority notifications are enabled for applications in batches. This API uses a promise to return the result. |
| [getPriorityStrategyByBundles](arkts-notification-getprioritystrategybybundles-f-sys.md#getprioritystrategybybundles-1) | Obtains the application priority notification strategies in batches. This API uses a promise to return the result. |
| [getReminderInfoByBundles](arkts-notification-getreminderinfobybundles-f-sys.md#getreminderinfobybundles-1) | Batch obtains reminders of specified applications. This API uses a promise to return the result. |
| [getRingtoneInfoByBundle](arkts-notification-getringtoneinfobybundle-f-sys.md#getringtoneinfobybundle-1) | Obtains the custom ringtone information of an application. This API uses a promise to return the result. |
| [getSlotByBundle](arkts-notification-getslotbybundle-f-sys.md#getslotbybundle-1) | Obtains a notification slot of a specified application. This API uses a promise to return the result. Before obtaining the notification slot, create a slot through [addSlot](arkts-notification-addslot-f-sys.md#addslot-1). |
| [getSlotFlagsByBundle](arkts-notification-getslotflagsbybundle-f-sys.md#getslotflagsbybundle-1) | Obtains the notification slot flag of a specified application. This API uses a promise to return the result. |
| [getSlotNumByBundle](arkts-notification-getslotnumbybundle-f-sys.md#getslotnumbybundle-1) | Obtains the number of notification slots of a specified application. This API uses an asynchronous callback to return the result. |
| [getSlotNumByBundle](arkts-notification-getslotnumbybundle-f-sys.md#getslotnumbybundle-2) | Obtains the number of notification slots of a specified application. This API uses a promise to return the result. |
| [getSlotsByBundle](arkts-notification-getslotsbybundle-f-sys.md#getslotsbybundle-1) | Obtains the notification slots of a specified application. This API uses an asynchronous callback to return the result. |
| [getSlotsByBundle](arkts-notification-getslotsbybundle-f-sys.md#getslotsbybundle-2) | Obtains the notification slots of a specified application. This API uses a promise to return the result. |
| [getSyncNotificationEnabledWithoutApp](arkts-notification-getsyncnotificationenabledwithoutapp-f-sys.md#getsyncnotificationenabledwithoutapp-1) | Obtains whether the notification sync feature is enabled for devices where the application is not installed. This API uses an asynchronous callback to return the result. |
| [getSyncNotificationEnabledWithoutApp](arkts-notification-getsyncnotificationenabledwithoutapp-f-sys.md#getsyncnotificationenabledwithoutapp-2) | Obtains whether the notification sync feature is enabled for devices where the application is not installed. This API uses a promise to return the result. |
| [isBadgeDisplayed](arkts-notification-isbadgedisplayed-f-sys.md#isbadgedisplayed-1) | Checks whether the notification badge is enabled for a specified application. This API uses an asynchronous callback to return the result. |
| [isBadgeDisplayed](arkts-notification-isbadgedisplayed-f-sys.md#isbadgedisplayed-2) | Checks whether the notification badge is enabled for a specified application. This API uses a promise to return the result. |
| [isDistributedEnabled](arkts-notification-isdistributedenabled-f-sys.md#isdistributedenabled-3) | Checks whether a device enables cross-device notification. This API uses a promise to return the result. |
| [isDistributedEnabledByBundle](arkts-notification-isdistributedenabledbybundle-f-sys.md#isdistributedenabledbybundle-1) | Checks whether distributed notification is enabled for a specified application. This API uses an asynchronous callback to return the result. |
| [isDistributedEnabledByBundle](arkts-notification-isdistributedenabledbybundle-f-sys.md#isdistributedenabledbybundle-2) | Checks whether distributed notification is enabled for a specified application. This API uses a promise to return the result. |
| [isDistributedEnabledByBundle](arkts-notification-isdistributedenabledbybundle-f-sys.md#isdistributedenabledbybundle-3) | Obtains whether a specified application enables cross-device collaboration. This API uses a promise to return the result. |
| [isDistributedEnabledBySlot](arkts-notification-isdistributedenabledbyslot-f-sys.md#isdistributedenabledbyslot-1) | Queries whether notifications of a specified slot can be sent to devices of a specified type. This API uses a promise to return the result. |
| [isNotificationEnabled](arkts-notification-isnotificationenabled-f-sys.md#isnotificationenabled-1) | Checks whether notification is enabled for the specified application. This API uses an asynchronous callback to return the result. |
| [isNotificationEnabled](arkts-notification-isnotificationenabled-f-sys.md#isnotificationenabled-2) | Checks whether notification is enabled for the specified application. This API uses a promise to return the result. |
| [isNotificationEnabled](arkts-notification-isnotificationenabled-f-sys.md#isnotificationenabled-3) | Checks whether notification is enabled for the specified application. This API uses an asynchronous callback to return the result. |
| [isNotificationEnabled](arkts-notification-isnotificationenabled-f-sys.md#isnotificationenabled-4) | Checks whether notification is enabled for the specified application. This API uses a promise to return the result. |
| [isNotificationEnabled](arkts-notification-isnotificationenabled-f-sys.md#isnotificationenabled-5) | Checks whether notification is enabled for a specified user. This API uses an asynchronous callback to return the result. |
| [isNotificationEnabled](arkts-notification-isnotificationenabled-f-sys.md#isnotificationenabled-6) | Checks whether notification is enabled for a specified user. This API uses a promise to return the result. |
| [isNotificationSlotEnabled](arkts-notification-isnotificationslotenabled-f-sys.md#isnotificationslotenabled-1) | Checks whether a notification slot type is enabled for the specified application. This API uses an asynchronous callback to return the result. |
| [isNotificationSlotEnabled](arkts-notification-isnotificationslotenabled-f-sys.md#isnotificationslotenabled-2) | Checks whether a notification slot type is enabled for the specified application. This API uses a promise to return the result. |
| [isNotificationSlotEnabledByBundles](arkts-notification-isnotificationslotenabledbybundles-f-sys.md#isnotificationslotenabledbybundles-1) | Checks whether a notification slot type is enabled for the specified applications in batch. This API uses a promise to return the result. |
| [isPriorityEnabled](arkts-notification-ispriorityenabled-f-sys.md#ispriorityenabled-1) | Checks whether the priority notification is enabled. |
| [isPriorityEnabledByBundle](arkts-notification-ispriorityenabledbybundle-f-sys.md#ispriorityenabledbybundle-1) | Checks whether the priority notification for a specified application is enabled. |
| [isPriorityIntelligentEnabled](arkts-notification-ispriorityintelligentenabled-f-sys.md#ispriorityintelligentenabled-1) | Obtains whether the intelligent priority notification service is enabled. This API uses a promise to return the result. |
| [isSilentReminderEnabled](arkts-notification-issilentreminderenabled-f-sys.md#issilentreminderenabled-1) | Checks whether the silent reminder is enabled. This API uses a promise to return the result. |
| [isSmartReminderEnabled](arkts-notification-issmartreminderenabled-f-sys.md#issmartreminderenabled-1) | Obtains a smart reminder for cross-device collaboration. This API uses a promise to return the result. |
| [isSupportDoNotDisturbMode](arkts-notification-issupportdonotdisturbmode-f-sys.md#issupportdonotdisturbmode-1) | Checks whether DND mode is supported. This API uses an asynchronous callback to return the result. |
| [isSupportDoNotDisturbMode](arkts-notification-issupportdonotdisturbmode-f-sys.md#issupportdonotdisturbmode-2) | Checks whether DND mode is supported. This API uses a promise to return the result. |
| [off](arkts-notification-off-f-sys.md#off-1) | Unsubscribes from notification events. |
| [offBadgeNumberQuery](arkts-notification-offbadgenumberquery-f-sys.md#offbadgenumberquery-1) | Unregisters the callback for querying the number of application badges. |
| [on](arkts-notification-on-f-sys.md#on-1) | Subscribes to notification events. The notification service sends the notification information in the callback to the verification program. The verification program returns the verification result to determine whether to publish the notification, for example, controlling the publication frequency of marketing notifications. Each [SlotType](arkts-notification-slottype-e.md#slottype) in the system can have only one registrant. |
| [on](arkts-notification-on-f-sys.md#on-2) | Subscribes to notification events. The notification service sends the notification information in the callback to the verification program. The verification program returns the verification result to determine whether to publish the notification, for example, controlling the publication frequency of marketing notifications. This API uses a promise to return the result. Each [SlotType](arkts-notification-slottype-e.md#slottype) in the system can have only one registrant. |
| [onBadgeNumberQuery](arkts-notification-onbadgenumberquery-f-sys.md#onbadgenumberquery-1) | Registers a callback for querying the number of application badges. |
| [publish](arkts-notification-publish-f-sys.md#publish-3) | Publishes a notification to a specified user. This API uses an asynchronous callback to return the result. |
| [publish](arkts-notification-publish-f-sys.md#publish-4) | Publishes a notification to a specified user. This API uses a promise to return the result. |
| [publishAsBundle](arkts-notification-publishasbundle-f-sys.md#publishasbundle-1) | Publishes a notification through the reminder agent. This API uses an asynchronous callback to return the result. |
| [publishAsBundle](arkts-notification-publishasbundle-f-sys.md#publishasbundle-2) | Publishes a notification through the reminder agent. This API uses a promise to return the result. |
| [publishAsBundle](arkts-notification-publishasbundle-f-sys.md#publishasbundle-3) | Publishes a notification through the reminder agent. This API uses a promise to return the result. |
| [removeDoNotDisturbProfile](arkts-notification-removedonotdisturbprofile-f-sys.md#removedonotdisturbprofile-1) | Deletes the Do Not Disturb profile. This API uses a promise to return the result. |
| [removeDoNotDisturbProfile](arkts-notification-removedonotdisturbprofile-f-sys.md#removedonotdisturbprofile-2) | Deletes the Do Not Disturb profile of a specified user. This API uses a promise to return the result. |
| [removeGroupByBundle](arkts-notification-removegroupbybundle-f-sys.md#removegroupbybundle-1) | Removes notifications under a notification group of the specified application. This API uses an asynchronous callback to return the result. |
| [removeGroupByBundle](arkts-notification-removegroupbybundle-f-sys.md#removegroupbybundle-2) | Removes notifications under a notification group of the specified application. This API uses a promise to return the result. |
| [setAdditionalConfig](arkts-notification-setadditionalconfig-f-sys.md#setadditionalconfig-1) | Sets the additional system configuration information of the notification. This API uses a promise to return the result. |
| [setBadgeDisplayStatusByBundles](arkts-notification-setbadgedisplaystatusbybundles-f-sys.md#setbadgedisplaystatusbybundles-1) | Batch sets whether to display badges for specified applications. This API uses a promise to return the result. |
| [setBadgeNumberByBundle](arkts-notification-setbadgenumberbybundle-f-sys.md#setbadgenumberbybundle-1) | Sets the badge count for other applications. This API uses a promise to return the result. |
| [setBundlePriorityConfig](arkts-notification-setbundlepriorityconfig-f-sys.md#setbundlepriorityconfig-1) | Sets the priority configuration of an application. |
| [setDistributedEnable](arkts-notification-setdistributedenable-f-sys.md#setdistributedenable-1) | Sets whether to enable distributed notification on this device. This API uses an asynchronous callback to return the result. |
| [setDistributedEnable](arkts-notification-setdistributedenable-f-sys.md#setdistributedenable-2) | Sets whether to enable distributed notification on this device. This API uses a promise to return the result. |
| [setDistributedEnableByBundle](arkts-notification-setdistributedenablebybundle-f-sys.md#setdistributedenablebybundle-1) | Sets whether to enable distributed notification for a specified application. This API uses an asynchronous callback to return the result. |
| [setDistributedEnableByBundle](arkts-notification-setdistributedenablebybundle-f-sys.md#setdistributedenablebybundle-2) | Sets whether to enable distributed notification for a specified application. This API uses a promise to return the result. |
| [setDistributedEnableByBundles](arkts-notification-setdistributedenablebybundles-f-sys.md#setdistributedenablebybundles-1) | Sets whether applications enable cross-device collaboration. This API uses a promise to return the result. |
| [setDistributedEnabled](arkts-notification-setdistributedenabled-f-sys.md#setdistributedenabled-1) | Sets whether the device of a specified type enables cross-device notification. This API uses a promise to return the result. |
| [setDistributedEnabledByBundle](arkts-notification-setdistributedenabledbybundle-f-sys.md#setdistributedenabledbybundle-1) | Sets whether a specified application enables cross-device collaboration. This API uses a promise to return the result. |
| [setDistributedEnabledBySlot](arkts-notification-setdistributedenabledbyslot-f-sys.md#setdistributedenabledbyslot-1) | Sets whether notifications of a specified slot can be sent to devices of a specified type through cross-device collaboration. This API uses a promise to return the result. |
| [setDoNotDisturbDate](arkts-notification-setdonotdisturbdate-f-sys.md#setdonotdisturbdate-1) | Sets the DND time. This API uses an asynchronous callback to return the result. |
| [setDoNotDisturbDate](arkts-notification-setdonotdisturbdate-f-sys.md#setdonotdisturbdate-2) | Sets the DND time. This API uses a promise to return the result. |
| [setDoNotDisturbDate](arkts-notification-setdonotdisturbdate-f-sys.md#setdonotdisturbdate-3) | Sets the DND time for a specified user. This API uses an asynchronous callback to return the result. |
| [setDoNotDisturbDate](arkts-notification-setdonotdisturbdate-f-sys.md#setdonotdisturbdate-4) | Sets the DND time for a specified user. This API uses a promise to return the result. |
| [setGeofenceEnabled](arkts-notification-setgeofenceenabled-f-sys.md#setgeofenceenabled-1) | Sets the enabling state of geofencing. This API uses a promise to return the result. |
| [setNotificationEnable](arkts-notification-setnotificationenable-f-sys.md#setnotificationenable-1) | Sets whether to enable notification for a specified application. This API uses an asynchronous callback to return the result. |
| [setNotificationEnable](arkts-notification-setnotificationenable-f-sys.md#setnotificationenable-2) | Sets whether to enable notification for a specified application. This API uses a promise to return the result. |
| [setNotificationEnableSlot](arkts-notification-setnotificationenableslot-f-sys.md#setnotificationenableslot-1) | Sets the enabled status of a slot type for the specified application. This API uses an asynchronous callback to return the result. |
| [setNotificationEnableSlot](arkts-notification-setnotificationenableslot-f-sys.md#setnotificationenableslot-2) | Sets the enabled status of a slot type for the specified application. This API uses an asynchronous callback to return the result. |
| [setNotificationEnableSlot](arkts-notification-setnotificationenableslot-f-sys.md#setnotificationenableslot-3) | Sets the enabled status of a slot type for the specified application. This API uses a promise to return the result. |
| [setNotificationSwitch](arkts-notification-setnotificationswitch-f-sys.md#setnotificationswitch-1) | Sets the status of the notification switch. Use Promise asynchronous callback. |
| [setPriorityEnabled](arkts-notification-setpriorityenabled-f-sys.md#setpriorityenabled-1) | Sets the enabling status of the priority notification. |
| [setPriorityEnabledByBundle](arkts-notification-setpriorityenabledbybundle-f-sys.md#setpriorityenabledbybundle-1) | Sets the enabling status of the priority notification for an application. |
| [setPriorityEnabledByBundles](arkts-notification-setpriorityenabledbybundles-f-sys.md#setpriorityenabledbybundles-1) | Sets whether priority notifications are enabled for applications in batches. This API uses a promise to return the result. |
| [setPriorityIntelligentEnabled](arkts-notification-setpriorityintelligentenabled-f-sys.md#setpriorityintelligentenabled-1) | Sets the enabling status of the intelligent priority notification service. This API uses a promise to return the result. |
| [setPriorityStrategyByBundles](arkts-notification-setprioritystrategybybundles-f-sys.md#setprioritystrategybybundles-1) | Sets the application priority notification strategies in batches. This API uses a promise to return the result. |
| [setReminderInfoByBundles](arkts-notification-setreminderinfobybundles-f-sys.md#setreminderinfobybundles-1) | Batch sets reminders for specified applications. This API uses a promise to return the result. |
| [setRingtoneInfoByBundle](arkts-notification-setringtoneinfobybundle-f-sys.md#setringtoneinfobybundle-1) | Sets the custom ringtone information for an application. This API uses a promise to return the result. |
| [setSilentReminderEnabled](arkts-notification-setsilentreminderenabled-f-sys.md#setsilentreminderenabled-1) | Sets the enabling status of the silent reminder. This API uses a promise to return the result. |
| [setSlotByBundle](arkts-notification-setslotbybundle-f-sys.md#setslotbybundle-1) | Sets the notification slot for a specified application. This API uses an asynchronous callback to return the result. Before setting a notification slot, create a slot through [addSlot](arkts-notification-addslot-f-sys.md#addslot-1). |
| [setSlotByBundle](arkts-notification-setslotbybundle-f-sys.md#setslotbybundle-2) | Sets the notification slot for a specified application. This API uses a promise to return the result. Before setting a notification slot, create a slot through [addSlot](arkts-notification-addslot-f-sys.md#addslot-1). |
| [setSlotFlagsByBundle](arkts-notification-setslotflagsbybundle-f-sys.md#setslotflagsbybundle-1) | Sets the slot flags for a specified application. This API uses a promise to return the result. |
| [setSmartReminderEnabled](arkts-notification-setsmartreminderenabled-f-sys.md#setsmartreminderenabled-1) | Sets a smart reminder for cross-device collaboration. This API uses a promise to return the result. |
| [setSyncNotificationEnabledWithoutApp](arkts-notification-setsyncnotificationenabledwithoutapp-f-sys.md#setsyncnotificationenabledwithoutapp-1) | Sets whether to enable the notification sync feature for devices where the application is not installed. This API uses an asynchronous callback to return the result. |
| [setSyncNotificationEnabledWithoutApp](arkts-notification-setsyncnotificationenabledwithoutapp-f-sys.md#setsyncnotificationenabledwithoutapp-2) | Sets whether to enable the notification sync feature for devices where the application is not installed. This API uses a promise to return the result. |
| [setTargetDeviceStatus](arkts-notification-settargetdevicestatus-f-sys.md#settargetdevicestatus-1) | Sets the status of a device after it is successfully connected. Device status determines the notification mode of the current device when a notification is published. |
| [snoozeNotification](arkts-notification-snoozenotification-f-sys.md#snoozenotification-1) | Sets a notification snooze reminder. The notification reminds the user again after the specified time. Each setting triggers only one reminder, using the same reminder mode as the original notification. After the snooze reminder is set, the original notification is deleted. |
| [subscribeSystemLiveView](arkts-notification-subscribesystemliveview-f-sys.md#subscribesystemliveview-1) | Subscribes to the system live view notification. This API uses a promise to return the result. |
| [triggerSystemLiveView](arkts-notification-triggersystemliveview-f-sys.md#triggersystemliveview-1) | Triggers a system live view notification. This API uses a promise to return the result. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [NotificationSetting](arkts-notification-notificationsetting-i.md) | Describes the setting status of the notification mode switch. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [BundleNotificationStatistics](arkts-notification-bundlenotificationstatistics-i-sys.md) | Describes the notification statistics of a specified application. |
| [ButtonOptions](arkts-notification-buttonoptions-i-sys.md) | Provides the button information of the notification. |
| [DistributedBundleEnableInfo](arkts-notification-distributedbundleenableinfo-i-sys.md) | Describes the bundle information of an application that enables cross-device collaboration. |
| [DoNotDisturbDate](arkts-notification-donotdisturbdate-i-sys.md) | DND time to set. |
| [DoNotDisturbProfile](arkts-notification-donotdisturbprofile-i-sys.md) | Do Not Disturb profile. |
| [NotificationCheckInfo](arkts-notification-notificationcheckinfo-i-sys.md) | Describes the parameters of check notifications. |
| [NotificationCheckResult](arkts-notification-notificationcheckresult-i-sys.md) | Describes the result of check notifications. |
| [NotificationReminderInfo](arkts-notification-notificationreminderinfo-i-sys.md) | Describes the information about the application reminder. |
| [RingtoneInfo](arkts-notification-ringtoneinfo-i-sys.md) | Describes the custom ringtone information. |
| [SystemLiveViewSubscriber](arkts-notification-systemliveviewsubscriber-i-sys.md) | Subscriber of the system live view notification. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [ContentType](arkts-notification-contenttype-e.md) | Enumerates the notification content types. |
| [PriorityNotificationType](arkts-notification-prioritynotificationtype-e.md) | Enumerates the priority notification types. |
| [SlotLevel](arkts-notification-slotlevel-e.md) | Enumerates the notification level. |
| [SlotType](arkts-notification-slottype-e.md) | Enumerates the notification slot types. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [DeviceRemindType](arkts-notification-deviceremindtype-e-sys.md) | The notification reminder type. |
| [DoNotDisturbType](arkts-notification-donotdisturbtype-e-sys.md) | DND time type. |
| [NotificationControlFlagStatus](arkts-notification-notificationcontrolflagstatus-e-sys.md) | Each bit can control the notification mode. When the bitwise OR operation is performed on **notificationControlFlags** and the enumerated values in the following table, the notification mode is disabled. |
| [PriorityEnableStatus](arkts-notification-priorityenablestatus-e-sys.md) | Describes the enabling status of the priority notification for an application. |
| [PriorityNotificationType](arkts-notification-prioritynotificationtype-e-sys.md) | Enumerates the priority notification types. |
| [PriorityStrategyStatus](arkts-notification-prioritystrategystatus-e-sys.md) | Describes the application notification strategy. |
| [RingtoneType](arkts-notification-ringtonetype-e-sys.md) | Enumerates the custom ringtone types. |
| [SlotType](arkts-notification-slottype-e-sys.md) | Enumerates the notification slot types. |
| [SourceType](arkts-notification-sourcetype-e-sys.md) | Notification source type. |
| [SwitchState](arkts-notification-switchstate-e-sys.md) | Describes the switch state of notifications. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [BundleOption](arkts-notification-bundleoption-t.md) | Describes the bundle information of an application. |
| [DistributedOptions](arkts-notification-distributedoptions-t.md) | Describes distributed notification options. |
| [NotificationActionButton](arkts-notification-notificationactionbutton-t.md) | Describes the operation button displayed in the notification. |
| [NotificationBasicContent](arkts-notification-notificationbasiccontent-t.md) | Describes the normal text notification. |
| [NotificationButton](arkts-notification-notificationbutton-t.md) | Describes the notification button. |
| [NotificationCapsule](arkts-notification-notificationcapsule-t.md) | Describes the notification capsule. |
| [NotificationContent](arkts-notification-notificationcontent-t.md) | Describes the notification content. |
| [NotificationLongTextContent](arkts-notification-notificationlongtextcontent-t.md) | Describes the long text notification. |
| [NotificationMultiLineContent](arkts-notification-notificationmultilinecontent-t.md) | Describes the multi-line text notification. |
| [NotificationParameters](arkts-notification-notificationparameters-t.md) | Defines Notification Parameters to describe the key information of wantAgent in the notification. |
| [NotificationPictureContent](arkts-notification-notificationpicturecontent-t.md) | Describes the picture-attached notification. |
| [NotificationProgress](arkts-notification-notificationprogress-t.md) | Describes the notification progress. |
| [NotificationRequest](arkts-notification-notificationrequest-t.md) | Describes the notification request. |
| [NotificationSlot](arkts-notification-notificationslot-t.md) | Describes the notification slot. |
| [NotificationSystemLiveViewContent](arkts-notification-notificationsystemliveviewcontent-t.md) | Describes the system live view notification. |
| [NotificationTemplate](arkts-notification-notificationtemplate-t.md) | Describes the notification template. |
| [NotificationTime](arkts-notification-notificationtime-t.md) | Describes the notification timing information. |
| [NotificationUserInput](arkts-notification-notificationuserinput-t.md) | Describes the user input for the notification. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [CoordinateSystemType](arkts-notification-coordinatesystemtype-t-sys.md) | Enumerates the coordinate systems of a geofence. |
| [Geofence](arkts-notification-geofence-t-sys.md) | Defines the configuration of a geofence. |
| [GroupInfo](arkts-notification-groupinfo-t-sys.md) | Defines the custom group notification information. |
| [LiveViewStatus](arkts-notification-liveviewstatus-t-sys.md) | Enumerates the statuses of the common live view. |
| [LiveViewTypes](arkts-notification-liveviewtypes-t-sys.md) | Enumerates live view types. |
| [MonitorEvent](arkts-notification-monitorevent-t-sys.md) | Enumerates the event types of monitoring a geofence. |
| [NotificationCheckRequest](arkts-notification-notificationcheckrequest-t-sys.md) | Describes the notification authentication information. |
| [NotificationFilter](arkts-notification-notificationfilter-t-sys.md) | Describes the filter criteria for querying the live view. |
| [NotificationFlagStatus](arkts-notification-notificationflagstatus-t-sys.md) | Enumerates the notification flag states. |
| [NotificationFlags](arkts-notification-notificationflags-t-sys.md) | Defines the notification flags. |
| [NotificationIconButton](arkts-notification-notificationiconbutton-t-sys.md) | System notification button. |
| [NotificationLiveViewContent](arkts-notification-notificationliveviewcontent-t-sys.md) | Describes the common live view. |
| [NotificationSorting](arkts-notification-notificationsorting-t-sys.md) | The **NotificationSorting** module provides APIs for defining the sorting information of active notifications. |
| [Trigger](arkts-notification-trigger-t-sys.md) | Defines the details for triggering a geofence. |
| [TriggerType](arkts-notification-triggertype-t-sys.md) | Enumerates the trigger types. |
| [UnifiedGroupInfo](arkts-notification-unifiedgroupinfo-t-sys.md) | Describes the fields of notification intelligent unification information. |
<!--DelEnd-->

