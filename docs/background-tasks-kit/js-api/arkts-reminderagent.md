# @ohos.reminderAgent

The **reminderAgent** module provides APIs for publishing scheduled reminders through the reminder agent. You can use the APIs to create scheduled reminders for countdown timers, calendar events, and alarm clocks. When the created reminders are published, the timing and pop-up notification functions of your application will be taken over by the reminder agent in the background when your application is frozen or exits.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [reminderAgentManager:reminderAgentManager](arkts-reminderagentmanager.md)

**System capability:** SystemCapability.Notification.ReminderAgent

## Modules to Import

```TypeScript
import { reminderAgent } from '@kit.BackgroundTasksKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addNotificationSlot](arkts-backgroundtasks-addnotificationslot-f.md#addnotificationslot-1) | Adds a notification slot. This API uses an asynchronous callback to return the result. |
| [addNotificationSlot](arkts-backgroundtasks-addnotificationslot-f.md#addnotificationslot-2) | Adds a notification slot. This API uses a promise to return the result. |
| [cancelAllReminders](arkts-backgroundtasks-cancelallreminders-f.md#cancelallreminders-1) | Cancels all reminders set by the current application. This API uses an asynchronous callback to return the cancellation result. |
| [cancelAllReminders](arkts-backgroundtasks-cancelallreminders-f.md#cancelallreminders-2) | Cancels all reminders set by the current application. This API uses a promise to return the cancellation result. |
| [cancelReminder](arkts-backgroundtasks-cancelreminder-f.md#cancelreminder-1) | Cancels the reminder with the specified ID. This API uses an asynchronous callback to return the cancellation result. |
| [cancelReminder](arkts-backgroundtasks-cancelreminder-f.md#cancelreminder-2) | Cancels the reminder with the specified ID. This API uses a promise to return the cancellation result. |
| [getValidReminders](arkts-backgroundtasks-getvalidreminders-f.md#getvalidreminders-1) | Obtains all valid (not yet expired) reminders set by the current application. This API uses an asynchronous callback to return the result. |
| [getValidReminders](arkts-backgroundtasks-getvalidreminders-f.md#getvalidreminders-2) | Obtains all valid (not yet expired) reminders set by the current application. This API uses a promise to return the reminders. |
| [publishReminder](arkts-backgroundtasks-publishreminder-f.md#publishreminder-1) | Publishes a reminder through the reminder agent. This API uses an asynchronous callback to return the result. It can be called only when notification is enabled for the application through [Notification.requestEnableNotification](../../apis-notification-kit/arkts-apis/arkts-notification-requestenablenotification-depr-f.md#requestenablenotification-1) |
| [publishReminder](arkts-backgroundtasks-publishreminder-f.md#publishreminder-2) | Publishes a reminder through the reminder agent. This API uses a promise to return the result. It can be called only when notification is enabled for the application through [Notification.requestEnableNotification](../../apis-notification-kit/arkts-apis/arkts-notification-requestenablenotification-depr-f.md#requestenablenotification-1) |
| [removeNotificationSlot](arkts-backgroundtasks-removenotificationslot-f.md#removenotificationslot-1) | Removes a notification slot of a specified type. This API uses an asynchronous callback to return the result. |
| [removeNotificationSlot](arkts-backgroundtasks-removenotificationslot-f.md#removenotificationslot-2) | Removes a notification slot of a specified type. This API uses a promise to return the result. |

### Interfaces

| Name | Description |
| --- | --- |
| [ActionButton](arkts-backgroundtasks-actionbutton-i.md) | Defines a button displayed in the reminder notification. |
| [LocalDateTime](arkts-backgroundtasks-localdatetime-i.md) | Sets the time information for a calendar reminder. |
| [MaxScreenWantAgent](arkts-backgroundtasks-maxscreenwantagent-i.md) | Provides the information about the target package and ability to start automatically when the reminder is displayed in full-screen mode. This API is reserved. |
| [ReminderRequest](arkts-backgroundtasks-reminderrequest-i.md) | Defines the reminder to publish. |
| [ReminderRequestAlarm](arkts-backgroundtasks-reminderrequestalarm-i.md) | Defines a reminder for an alarm. |
| [ReminderRequestCalendar](arkts-backgroundtasks-reminderrequestcalendar-i.md) | Defines a reminder for a calendar event. |
| [ReminderRequestTimer](arkts-backgroundtasks-reminderrequesttimer-i.md) | Defines a reminder for a scheduled timer. |
| [WantAgent](arkts-backgroundtasks-wantagent-i.md) | Sets the package and ability that are redirected to when the reminder notification is clicked. |

### Enums

| Name | Description |
| --- | --- |
| [ActionButtonType](arkts-backgroundtasks-actionbuttontype-e.md) | Enumerates the button types. |
| [ReminderType](arkts-backgroundtasks-remindertype-e.md) | Enumerates reminder types. |

