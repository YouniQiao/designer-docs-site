# notificationSubscriber

## Summary

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [BadgeEnabledChangedCallback](arkts-notification-badgeenabledchangedcallback-i-sys.md) | Defines a callback function to listen for the enabling state changes of the application badge. type BadgeEnabledChangedCallback = (data: EnabledNotificationCallbackData) =&gt; void |
| [BadgeNumberCallbackData](arkts-notification-badgenumbercallbackdata-i-sys.md) | Describes the badge number of the application has changed. |
| [EnabledNotificationCallbackData](arkts-notification-enablednotificationcallbackdata-i-sys.md) | Defines a callback function to listen for the enabling state changes of the application badge. |
| [EnabledPriorityNotificationByBundleCallbackData](arkts-notification-enabledprioritynotificationbybundlecallbackdata-i-sys.md) | Describes the switch state to Restrict notification capability. |
| [EnabledPriorityNotificationCallbackData](arkts-notification-enabledprioritynotificationcallbackdata-i-sys.md) | Callback used to return the result. |
| [EnabledSilentReminderCallbackData](arkts-notification-enabledsilentremindercallbackdata-i-sys.md) | Defines a callback function to listen for the enabling state changes of the application's silent reminder. |
| [NotificationClassification](arkts-notification-notificationclassification-i-sys.md) | Describes the notification classification information. |
| [NotificationSubscriber](arkts-notification-notificationsubscriber-i-sys.md) | Provides callback methods for subscribers to receive and cancel notifications. |
| [NotificationSwitchChangedCallbackData](arkts-notification-notificationswitchchangedcallbackdata-i-sys.md) | Describes the notification switch state changes callback data. |
| [SubscribeCallbackData](arkts-notification-subscribecallbackdata-i-sys.md) | Notification information that carries the system property value. |
| [VoiceContent](arkts-notification-voicecontent-i-sys.md) | Describes the generated voice content for notification. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [EnabledSilentReminderChangedCallback](arkts-notification-enabledsilentreminderchangedcallback-t-sys.md) | Defines a callback function to listen for the enabling state changes of the application's silent reminder. type EnabledSilentReminderChangedCallback = (callbackData: EnabledSilentReminderCallbackData) =&gt; void |
| [NotificationSwitchChangedCallback](arkts-notification-notificationswitchchangedcallback-t-sys.md) | Register the callback function type for notification switch state changes set by the interface of [notificationManager.setNotificationSwitch](arkts-notification-setnotificationswitch-f-sys.md#setnotificationswitch-1). |
| [SystemUpdateCallback](arkts-notification-systemupdatecallback-t-sys.md) | Defines the SystemUpdateCallback callback. type SystemUpdateCallback = (data: SubscribeCallbackData) =&gt; void |
<!--DelEnd-->

