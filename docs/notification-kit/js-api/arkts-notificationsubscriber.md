# notificationSubscriber

## Summary

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [BadgeEnabledChangedCallback](arkts-notification-notificationsubscriber-badgeenabledchangedcallback-i-sys.md) | Defines a callback function to listen for the enabling state changes of the application badge.type BadgeEnabledChangedCallback = (data: EnabledNotificationCallbackData) => void |
| [BadgeNumberCallbackData](arkts-notification-notificationsubscriber-badgenumbercallbackdata-i-sys.md) | Returns the changes of the application badge number. |
| [EnabledNotificationCallbackData](arkts-notification-notificationsubscriber-enablednotificationcallbackdata-i-sys.md) | Returns the changes of the application badge enabling state. |
| [EnabledPriorityNotificationByBundleCallbackData](arkts-notification-notificationsubscriber-enabledprioritynotificationbybundlecallbackdata-i-sys.md) | Returns the notification priority switch state. |
| [EnabledPriorityNotificationCallbackData](arkts-notification-notificationsubscriber-enabledprioritynotificationcallbackdata-i-sys.md) | Returns the notification priority master switch state. |
| [EnabledSilentReminderCallbackData](arkts-notification-notificationsubscriber-enabledsilentremindercallbackdata-i-sys.md) | Returns the application notification silent reminder switch state. |
| [NotificationClassification](arkts-notification-notificationsubscriber-notificationclassification-i-sys.md) | Returns the notification classification information. |
| [NotificationSubscriber](arkts-notification-notificationsubscriber-notificationsubscriber-i-sys.md) | Provides callback methods for subscribers to receive and cancel notifications. |
| [NotificationSwitchChangedCallbackData](arkts-notification-notificationsubscriber-notificationswitchchangedcallbackdata-i-sys.md) | Returns the changes of the notification switch state. |
| [SubscribeCallbackData](arkts-notification-notificationsubscriber-subscribecallbackdata-i-sys.md) | Returns notification information carrying system property values. |
| [VoiceContent](arkts-notification-notificationsubscriber-voicecontent-i-sys.md) | Returns the notification voice broadcast content. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [EnabledSilentReminderChangedCallback](arkts-notification-enabledsilentreminderchangedcallback-t-sys.md) | Defines a callback function to listen for the enabling state changes of the application's silent reminder.type EnabledSilentReminderChangedCallback = (callbackData: EnabledSilentReminderCallbackData) => void |
| [NotificationSwitchChangedCallback](arkts-notification-notificationswitchchangedcallback-t-sys.md) | Register the callback function type for notification switch state changes set by the interface of [notificationManager.setNotificationSwitch](arkts-notification-notificationmanager-setnotificationswitch-f-sys.md#setnotificationswitch-1). |
| [SystemUpdateCallback](arkts-notification-systemupdatecallback-t-sys.md) | Defines the SystemUpdateCallback callback.type SystemUpdateCallback = (data: SubscribeCallbackData) => void |
<!--DelEnd-->

