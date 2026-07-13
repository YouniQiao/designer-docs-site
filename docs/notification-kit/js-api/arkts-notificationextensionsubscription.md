# @ohos.notificationExtensionSubscription

The **notificationExtensionSubscription** module provides capabilities for managing notification extension, including
opening the extension settings screen, subscribing to/unsubscribing from notification extension, and obtaining/
setting the notification authorization status.

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## Modules to Import

```TypeScript
import { notificationExtensionSubscription } from '@kit.NotificationKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getSubscribeInfo](arkts-notification-getsubscribeinfo-f.md#getsubscribeinfo-1) | Obtains the subscription information about the notification extension of this application. This API uses a promise to return the result. |
| [getUserGrantedEnabledBundles](arkts-notification-getusergrantedenabledbundles-f.md#getusergrantedenabledbundles-2) | Obtains the applications that are allowed to access device notifications. This API uses a promise to return the result. |
| [isUserGranted](arkts-notification-isusergranted-f.md#isusergranted-1) | Checks whether the **Allow access to notifications on this device** switch is toggled on. This API uses a promise to return the result. |
| [openSubscriptionSettings](arkts-notification-opensubscriptionsettings-f.md#opensubscriptionsettings-1) | Opens the settings screen of notification extension subscription in a semi-modal dialog box. On this screen, the user can toggle on the **Allow access to notifications on this device** switch and grant access to notifications for specified applications. This API uses a promise to return the result. |
| [openSubscriptionSettingsWithResult](arkts-notification-opensubscriptionsettingswithresult-f.md#opensubscriptionsettingswithresult-1) | Opens the settings screen of notification extension subscription in a semi-modal dialog box. On this screen, the user can toggle on the **Allow access to notifications on this device** switch and grant access to notifications for specified applications. This API uses a promise to return the result. When the semi-modal window is closed, theuser-defined authorization result is returned. |
| [subscribe](arkts-notification-subscribe-f.md#subscribe-1) | Subscribes to the notification extension. You can subscribe to the notification extension only after obtaining the unique address of the Bluetooth device by calling the APIs related to the [Bluetooth modules](../../../../connectivity/connectivity-kit-intro.md#bluetooth). This API uses a promise to return the result. |
| [unsubscribe](arkts-notification-unsubscribe-f.md#unsubscribe-1) | Unsubscribes from the notification extension. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getAllSubscriptionBundles](arkts-notification-getallsubscriptionbundles-f-sys.md#getallsubscriptionbundles-1) | Obtains all applications that have requested the ohos.permission.SUBSCRIBE_NOTIFICATION permission and implemented [NotificationSubscriberExtensionAbility](arkts-notification-notificationsubscriberextensionability-c.md). This API uses a promise to return the result. |
| [getUserGrantedEnabledBundles](arkts-notification-getusergrantedenabledbundles-f-sys.md#getusergrantedenabledbundles-1) | Obtains the applications that are allowed to access device notifications.This API uses a promise to return the result. |
| [getUserGrantedState](arkts-notification-getusergrantedstate-f-sys.md#getusergrantedstate-1) | Obtains the enabling state of the **Allow access to notifications on this device** switchof a specified application. This API uses a promise to return the result. |
| [setUserGrantedBundleState](arkts-notification-setusergrantedbundlestate-f-sys.md#setusergrantedbundlestate-1) | Sets the enabling state of device notification access for the specified application.This API uses a promise to return the result. |
| [setUserGrantedState](arkts-notification-setusergrantedstate-f-sys.md#setusergrantedstate-1) | Sets the enabling state of the **Allow access to notifications on this device** switch for a specified application.This API uses a promise to return the result. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [SubscribeType](arkts-notification-subscribetype-e.md) | Describes the type that enables notification extension subscription. |

### Types

| Name | Description |
| --- | --- |
| [BundleOption](arkts-notification-bundleoption-t.md) | Describes the bundle information of an application. |
| [GrantedBundleInfo](arkts-notification-grantedbundleinfo-t.md) | Describes the bundle information of the authorized application. |
| [NotificationExtensionSubscriptionInfo](arkts-notification-notificationextensionsubscriptioninfo-t.md) | Describes the information about the notification extension subscription. |
| [NotificationInfo](arkts-notification-notificationinfo-t.md) | Describes the notification information delivered to the [onReceiveMessage](arkts-notification-notificationsubscriberextensionability-c.md#onreceivemessage-1)callback of ExtensionAbility for notification subscriptions. |
| [UserGrantSetting](arkts-notification-usergrantsetting-t.md) | Describes the user authorization settings. |

