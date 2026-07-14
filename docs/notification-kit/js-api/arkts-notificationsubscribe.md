# @ohos.notificationSubscribe

The **notificationSubscribe** module provides APIs for notification subscription, notification unsubscription, subscription removal, and more. In general cases, only system applications can call these APIs. > **NOTE** > > The APIs provided by this module are system APIs.

**Since:** 9

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { notificationSubscribe } from '@kit.NotificationKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [distributeOperation](arkts-notification-distributeoperation-f-sys.md#distributeoperation-1) | Triggers a notification for cross-device operations, such as tap-to-redirect and quick reply. This API uses a promise to return the result. |
| [remove](arkts-notification-remove-f-sys.md#remove-1) | Removes a notification based on the bundle information and notification key. This API uses an asynchronous callback to return the result. |
| [remove](arkts-notification-remove-f-sys.md#remove-2) | Removes a notification based on the bundle information and notification key. This API uses a promise to return the result. |
| [remove](arkts-notification-remove-f-sys.md#remove-3) | Removes a notification based on the specified unique notification ID. This API uses an asynchronous callback to return the result. |
| [remove](arkts-notification-remove-f-sys.md#remove-4) | Removes specified notifications. This API uses an asynchronous callback to return the result. |
| [remove](arkts-notification-remove-f-sys.md#remove-5) | Removes a notification based on the specified unique notification ID. This API uses a promise to return the result. |
| [remove](arkts-notification-remove-f-sys.md#remove-6) | Removes specified notifications. This API uses a promise to return the result. |
| [removeAll](arkts-notification-removeall-f-sys.md#removeall-1) | Removes all notifications for a specified application. This API uses an asynchronous callback to return the result. |
| [removeAll](arkts-notification-removeall-f-sys.md#removeall-2) | Removes all notifications. This API uses an asynchronous callback to return the result. |
| [removeAll](arkts-notification-removeall-f-sys.md#removeall-3) | Removes all notifications for a specified user. This API uses an asynchronous callback to return the result. |
| [removeAll](arkts-notification-removeall-f-sys.md#removeall-4) | Removes all notifications for a specified user. This API uses a promise to return the result. |
| [removeAll](arkts-notification-removeall-f-sys.md#removeall-5) | Removes all notifications for a specified application. This API uses a promise to return the result. |
| [subscribe](arkts-notification-subscribe-f-sys.md#subscribe-1) | Subscribes to notifications of all applications under this user. This API uses an asynchronous callback to return the result. |
| [subscribe](arkts-notification-subscribe-f-sys.md#subscribe-2) | Subscribes to a notification with the subscription information specified. This API uses an asynchronous callback to return the result. |
| [subscribe](arkts-notification-subscribe-f-sys.md#subscribe-3) | Subscribes to a notification with the subscription information specified. This API uses a promise to return the result. |
| [subscribeNotification](arkts-notification-subscribenotification-f-sys.md#subscribenotification-1) | Subscribes to notifications. After the subscription, the new message is received through the callback in the subscriber. This API uses a promise to return the result. |
| [subscribeNotification](arkts-notification-subscribenotification-f-sys.md#subscribenotification-2) | Subscribes to notifications. After the subscription, the new message is received through the callback in the subscriber. This API uses a promise to return the result. |
| [subscribeSelf](arkts-notification-subscribeself-f-sys.md#subscribeself-1) | Subscribes to notifications of the application and specifies subscription information. This API uses a promise to return the result. |
| [unsubscribe](arkts-notification-unsubscribe-f-sys.md#unsubscribe-1) | Unsubscribes from a notification. This API uses an asynchronous callback to return the result. |
| [unsubscribe](arkts-notification-unsubscribe-f-sys.md#unsubscribe-2) | Unsubscribes from a notification. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [NotificationKey](arkts-notification-notificationkey-i-sys.md) | Notification key. |
| [OperationInfo](arkts-notification-operationinfo-i-sys.md) | Cross-device operation information. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [RemoveReason](arkts-notification-removereason-e-sys.md) | Reason for removing the notification. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [BadgeNumberCallbackData](arkts-notification-badgenumbercallbackdata-t-sys.md) | Describes the badge number of the application has changed. |
| [BundleOption](arkts-notification-bundleoption-t-sys.md) | Describes the **BundleOption** information, that is, the bundle information of an application. |
| [EnabledNotificationCallbackData](arkts-notification-enablednotificationcallbackdata-t-sys.md) | Describes the properties of the application that the permission to send notifications has changed. |
| [EnabledPriorityNotificationByBundleCallbackData](arkts-notification-enabledprioritynotificationbybundlecallbackdata-t-sys.md) | Describes the bundle switch state for priority notification. |
| [EnabledPriorityNotificationCallbackData](arkts-notification-enabledprioritynotificationcallbackdata-t-sys.md) | Describes the main switch state for priority notification. |
| [EnabledSilentReminderCallbackData](arkts-notification-enabledsilentremindercallbackdata-t-sys.md) | Describes the switch state for silent reminder notification. |
| [EnabledSilentReminderChangedCallback](arkts-notification-enabledsilentreminderchangedcallback-t-sys.md) | Defines a callback function to listen for the enabling state changes of the application's silent reminder. |
| [NotificationClassification](arkts-notification-notificationclassification-t-sys.md) | Describes the notification classification information. |
| [NotificationSubscribeInfo](arkts-notification-notificationsubscribeinfo-t-sys.md) | The **NotificationSubscribeInfo** module provides APIs for defining the information about the publisher for notification subscription. |
| [NotificationSubscriber](arkts-notification-notificationsubscriber-t-sys.md) | Provides callback methods for subscribers to receive and cancel notifications. |
| [NotificationSwitchChangedCallback](arkts-notification-notificationswitchchangedcallback-t-sys.md) | Register the callback function type for notification switch state changes set by the interface of [notificationManager.setNotificationSwitch](arkts-notification-setnotificationswitch-f-sys.md#setnotificationswitch-1). |
| [NotificationSwitchChangedCallbackData](arkts-notification-notificationswitchchangedcallbackdata-t-sys.md) | Describes the notification switch state changes callback data. |
| [SubscribeCallbackData](arkts-notification-subscribecallbackdata-t-sys.md) | Provides methods that will be called back when the subscriber receives a new notification or a notification is canceled. |
| [VoiceContent](arkts-notification-voicecontent-t-sys.md) | Describes the properties of the voice content of the received notification. |
| [VoiceContentOptions](arkts-notification-voicecontentoptions-t-sys.md) | Describes the properties of the voice content options for notification subscription. |
<!--DelEnd-->

