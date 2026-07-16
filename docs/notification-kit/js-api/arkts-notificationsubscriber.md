# notificationSubscriber

## Summary

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [BadgeEnabledChangedCallback](arkts-notification-badgeenabledchangedcallback-i-sys.md) | Defines a callback function to listen for the enabling state changes of the application badge.type BadgeEnabledChangedCallback = (data: EnabledNotificationCallbackData) =&gt; void |
| [BadgeNumberCallbackData](arkts-notification-badgenumbercallbackdata-i-sys.md) | Returns the changes of the application badge number. |
| [EnabledNotificationCallbackData](arkts-notification-enablednotificationcallbackdata-i-sys.md) | Returns the changes of the application badge enabling state. |
| [EnabledPriorityNotificationByBundleCallbackData](arkts-notification-enabledprioritynotificationbybundlecallbackdata-i-sys.md) | Returns the notification priority switch state. |
| [EnabledPriorityNotificationCallbackData](arkts-notification-enabledprioritynotificationcallbackdata-i-sys.md) | Returns the notification priority master switch state. |
| [EnabledSilentReminderCallbackData](arkts-notification-enabledsilentremindercallbackdata-i-sys.md) | Returns the application notification silent reminder switch state. |
| [NotificationClassification](arkts-notification-notificationclassification-i-sys.md) | Returns the notification classification information. |
| [NotificationSubscriber](arkts-notification-notificationsubscriber-i-sys.md) | Provides callback methods for subscribers to receive and cancel notifications. |
| [NotificationSwitchChangedCallbackData](arkts-notification-notificationswitchchangedcallbackdata-i-sys.md) | Returns the changes of the notification switch state. |
| [SubscribeCallbackData](arkts-notification-subscribecallbackdata-i-sys.md) | Returns notification information carrying system property values. |
| [VoiceContent](arkts-notification-voicecontent-i-sys.md) | Returns the notification voice broadcast content. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [EnabledSilentReminderChangedCallback](arkts-notification-enabledsilentreminderchangedcallback-t-sys.md) | Defines a callback function to listen for the enabling state changes of the application's silent reminder.type EnabledSilentReminderChangedCallback = (callbackData: EnabledSilentReminderCallbackData) =&gt; void |
| [NotificationSwitchChangedCallback](arkts-notification-notificationswitchchangedcallback-t-sys.md) | Register the callback function type for notification switch state changes set by the interface of[notificationManager.setNotificationSwitch]{@link../@ohos.notificationManager:notificationManager.setNotificationSwitch}. |
| [SystemUpdateCallback](arkts-notification-systemupdatecallback-t-sys.md) | Defines the SystemUpdateCallback callback.type SystemUpdateCallback = (data: SubscribeCallbackData) =&gt; void |
<!--DelEnd-->

