# @ohos.reminderAgentManager

The **reminderAgentManager** module provides APIs related to agent-powered reminders. When your application is frozen or exits, the application's scheduled notification capability will be taken over by a system service running in the background. You can use the APIs to create scheduled reminders for countdown timers, calendar events, and alarm clocks. For details, see [Agent-powered Reminder](../../../../task-management/agent-powered-reminder.md).

**Since:** 9

**System capability:** SystemCapability.Notification.ReminderAgent

## Modules to Import

```TypeScript
import { reminderAgentManager } from '@kit.BackgroundTasksKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addExcludeDate](arkts-backgroundtasks-addexcludedate-f.md#addexcludedate-1) | Adds a non-reminder date for a recurring calendar reminder with a specific ID. For example, configure a daily reminder to skip notifications on Tuesdays. This API uses a promise to return the result. |
| [addNotificationSlot](arkts-backgroundtasks-addnotificationslot-f.md#addnotificationslot-1) | Adds a notification slot. This API uses an asynchronous callback to return the result. |
| [addNotificationSlot](arkts-backgroundtasks-addnotificationslot-f.md#addnotificationslot-2) | Adds a notification slot. This API uses a promise to return the result. |
| [cancelAllReminders](arkts-backgroundtasks-cancelallreminders-f.md#cancelallreminders-1) | Cancels all reminders set by the current application. This API uses an asynchronous callback to return the result. |
| [cancelAllReminders](arkts-backgroundtasks-cancelallreminders-f.md#cancelallreminders-2) | Cancels all reminders set by the current application. This API uses a promise to return the result. |
| [cancelReminder](arkts-backgroundtasks-cancelreminder-f.md#cancelreminder-1) | Cancels a reminder published. This API uses an asynchronous callback to return the result. |
| [cancelReminder](arkts-backgroundtasks-cancelreminder-f.md#cancelreminder-2) | Cancels a reminder published. This API uses a promise to return the result. |
| [cancelReminderOnDisplay](arkts-backgroundtasks-cancelreminderondisplay-f.md#cancelreminderondisplay-1) | Cancels the notification card displayed in the notification center with the agent reminder data retained. For example, for a daily repeating reminder, calling this API removes the card from the notification center, but the reminder will be triggered again the next day according to its schedule. |
| [deleteExcludeDates](arkts-backgroundtasks-deleteexcludedates-f.md#deleteexcludedates-1) | Deletes all non-reminder dates for a recurring calendar reminder with a specific ID. This API uses a promise to return the result. |
| [getAllValidReminders](arkts-backgroundtasks-getallvalidreminders-f.md#getallvalidreminders-1) | Obtains all [valid (not yet expired) reminders](../../../../task-management/agent-powered-reminder.md#constraints) set by the current application. This API uses a promise to return the result. To call this API, you need to request the ohos.permission.PUBLISH_AGENT_REMINDER permission. |
| [getExcludeDates](arkts-backgroundtasks-getexcludedates-f.md#getexcludedates-1) | Obtains all non-reminder dates for a recurring calendar reminder with a specific ID. This API uses a promise to return the result. |
| [getValidReminders](arkts-backgroundtasks-getvalidreminders-f.md#getvalidreminders-1) | Obtains all [valid (not yet expired) reminders](../../../../task-management/agent-powered-reminder.md#constraints) set by the current application. This API uses an asynchronous callback to return the result. |
| [getValidReminders](arkts-backgroundtasks-getvalidreminders-f.md#getvalidreminders-2) | Obtains all [valid (not yet expired) reminders](../../../../task-management/agent-powered-reminder.md#constraints) set by the current application. This API uses a promise to return the result. |
| [publishReminder](arkts-backgroundtasks-publishreminder-f.md#publishreminder-1) | Publishes a reminder. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; This API can be called only after the &gt; [notificationManager.requestEnableNotification](../../apis-notification-kit/arkts-apis/arkts-notification-requestenablenotification-f.md#requestenablenotification-2) &gt; permission is obtained. &gt; |
| [publishReminder](arkts-backgroundtasks-publishreminder-f.md#publishreminder-2) | Publishes a reminder. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; This API can be called only after the &gt; [notificationManager.requestEnableNotification](../../apis-notification-kit/arkts-apis/arkts-notification-requestenablenotification-f.md#requestenablenotification-2) &gt; permission is obtained. &gt; |
| [removeNotificationSlot](arkts-backgroundtasks-removenotificationslot-f.md#removenotificationslot-1) | Removes a specified notification slot. This API uses an asynchronous callback to return the result. |
| [removeNotificationSlot](arkts-backgroundtasks-removenotificationslot-f.md#removenotificationslot-2) | Removes a specified notification slot. This API uses a promise to return the result. |
| [subscribeReminderState](arkts-backgroundtasks-subscribereminderstate-f.md#subscribereminderstate-1) | Subscribes to agent-powered reminder state changes. This API uses a promise to return the result. |
| [unsubscribeReminderState](arkts-backgroundtasks-unsubscribereminderstate-f.md#unsubscribereminderstate-1) | Unsubscribes from agent-powered reminder state changes. This API uses a promise to return the result. |
| [updateReminder](arkts-backgroundtasks-updatereminder-f.md#updatereminder-1) | Updates the agent-powered reminder with the specified ID. This API uses a promise to return the result. Only [valid (not yet expired) reminders](../../../../task-management/agent-powered-reminder.md#constraints) that are not displayed in the notification panel can be updated. |

### Interfaces

| Name | Description |
| --- | --- |
| [ActionButton](arkts-backgroundtasks-actionbutton-i.md) | Describes the button displayed for a reminder. |
| [LocalDateTime](arkts-backgroundtasks-localdatetime-i.md) | Defines the time information for a calendar reminder. |
| [MaxScreenWantAgent](arkts-backgroundtasks-maxscreenwantagent-i.md) | Describes the information about the ability that is started automatically and displayed in full-screen mode when a reminder is displayed in the notification center. This API is reserved. |
| [NotificationRequestProxy](arkts-backgroundtasks-notificationrequestproxy-i.md) | Notification request proxy. |
| [ReminderInfo](arkts-backgroundtasks-reminderinfo-i.md) | Defines the reminder information. |
| [ReminderRequest](arkts-backgroundtasks-reminderrequest-i.md) | Defines the request for publishing a reminder. |
| [ReminderRequestAlarm](arkts-backgroundtasks-reminderrequestalarm-i.md) | ReminderRequestAlarm extends ReminderRequest Defines a reminder for an alarm. |
| [ReminderRequestCalendar](arkts-backgroundtasks-reminderrequestcalendar-i.md) | ReminderRequestCalendar extends ReminderRequest Defines a reminder for a calendar event. |
| [ReminderRequestTimer](arkts-backgroundtasks-reminderrequesttimer-i.md) | ReminderRequestTimer extends ReminderRequest Defines a reminder for a scheduled timer. |
| [ReminderState](arkts-backgroundtasks-reminderstate-i.md) | Defines the agent-powered reminder state information, for which notifications are triggered in the following scenarios: 1. When a user taps a button on an agent-powered reminder notification, a notification specifying the tapped button type is sent to the application if it is running. If the application is not running, the notification will not be received. 2. Since the above scenario cannot guarantee that the application receives the notification, all callbacks associated with user-tapped button types under the application are returned to the application when it registers a new callback function. State information is retained for a maximum of 30 days. Cached state information is cleared when the application registers a new callback function or has not registered any callback function for more than 30 days. |
| [WantAgent](arkts-backgroundtasks-wantagent-i.md) | Defines the information about the redirected-to ability. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [ActionButton](arkts-backgroundtasks-actionbutton-i-sys.md) | Describes the button displayed for a reminder. |
| [DataShareUpdate](arkts-backgroundtasks-datashareupdate-i-sys.md) | Defines the parameter information used to update the database. The data provider needs to set the ID, read/write permissions, and basic information of the table to be shared under **proxyData** in the **module.json5** file. For details about the configuration method, see [Data Provider Application Development](../../../../database/share-data-by-silent-access-sys.md#data-provider-application-development) |
| [ReminderRequest](arkts-backgroundtasks-reminderrequest-i-sys.md) | Defines the request for publishing a reminder. |
| [ReminderRequestCalendar](arkts-backgroundtasks-reminderrequestcalendar-i-sys.md) | ReminderRequestCalendar extends ReminderRequest Defines a reminder for a calendar event. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [ActionButtonType](arkts-backgroundtasks-actionbuttontype-e.md) | Enumerates the types of buttons displayed for a reminder. |
| [ReminderType](arkts-backgroundtasks-remindertype-e.md) | Enumerates the reminder types. |
| [RingChannel](arkts-backgroundtasks-ringchannel-e.md) | Enumerates the audio playback channels for the custom prompt tone. |
| [TimeZoneType](arkts-backgroundtasks-timezonetype-e.md) | Time zone type. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ActionButtonType](arkts-backgroundtasks-actionbuttontype-e-sys.md) | Enumerates the types of buttons displayed for a reminder. |
<!--DelEnd-->

