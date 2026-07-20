# @ohos.commonEventManager

The **CommonEventManager** module provides common event capabilities to publish, subscribe to, and unsubscribe from common events.

**Since:** 9

<!--Device-unnamed-declare namespace commonEventManager--><!--Device-unnamed-declare namespace commonEventManager-End-->

**System capability:** SystemCapability.Notification.CommonEvent

## Modules to Import

```TypeScript
import { commonEventManager } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createSubscriber](arkts-basicservices-commoneventmanager-createsubscriber-f.md#createsubscriber-1) | Creates a subscriber. This API uses an asynchronous callback to return the result. |
| [createSubscriber](arkts-basicservices-commoneventmanager-createsubscriber-f.md#createsubscriber-2) | Creates a subscriber. This API uses a promise to return the result. |
| [createSubscriberSync](arkts-basicservices-commoneventmanager-createsubscribersync-f.md#createsubscribersync-1) | Creates a subscriber. The API returns the result synchronously. |
| [publish](arkts-basicservices-commoneventmanager-publish-f.md#publish-1) | Publishes a common event. This API uses an asynchronous callback to return the result. |
| [publish](arkts-basicservices-commoneventmanager-publish-f.md#publish-2) | Publishes a common event. This API uses an asynchronous callback to return the result. |
| [subscribe](arkts-basicservices-commoneventmanager-subscribe-f.md#subscribe-1) | Subscribes to a common event. This API uses an asynchronous callback to return the result. |
| [subscribeToEvent](arkts-basicservices-commoneventmanager-subscribetoevent-f.md#subscribetoevent-1) | Subscribes to a common event. This API uses a promise to return the result, indicating subscription success or failure. |
| [unsubscribe](arkts-basicservices-commoneventmanager-unsubscribe-f.md#unsubscribe-1) | Unsubscribes from a common event. This API uses an asynchronous callback to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [publishAsUser](arkts-basicservices-commoneventmanager-publishasuser-f-sys.md#publishasuser-1) | Publishes a common event to a specified user. This API uses an asynchronous callback to return the result. |
| [publishAsUser](arkts-basicservices-commoneventmanager-publishasuser-f-sys.md#publishasuser-2) | Publishes a common event to a specified user and specifies the information to be published. This API uses an asynchronous callback to return the result. |
| [removeStickyCommonEvent](arkts-basicservices-commoneventmanager-removestickycommonevent-f-sys.md#removestickycommonevent-1) | Removes a sticky common event. This API uses an asynchronous callback to return the result. |
| [removeStickyCommonEvent](arkts-basicservices-commoneventmanager-removestickycommonevent-f-sys.md#removestickycommonevent-2) | Removes a sticky common event. This API uses a promise to return the result. |
| [setStaticSubscriberState](arkts-basicservices-commoneventmanager-setstaticsubscriberstate-f-sys.md#setstaticsubscriberstate-1) | Enables or disables static subscription for an application. This API uses an asynchronous callback to return the result. |
| [setStaticSubscriberState](arkts-basicservices-commoneventmanager-setstaticsubscriberstate-f-sys.md#setstaticsubscriberstate-2) | Enables or disables static subscription for an application. This API uses a promise to return the result. |
| [setStaticSubscriberState](arkts-basicservices-commoneventmanager-setstaticsubscriberstate-f-sys.md#setstaticsubscriberstate-3) | Enables or disables the static subscription event for the current application and records the event name. This API uses a promise to return the result. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [Support](arkts-basicservices-commoneventmanager-support-e.md) | System common events are events published by system services or system applications. Subscribing to these common events requires specific permissions and values. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [Support](arkts-basicservices-commoneventmanager-support-e-sys.md) | System common events are events published by system services or system applications. Subscribing to these common events requires specific permissions and values. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [CommonEventData](arkts-basicservices-commoneventmanager-commoneventdata-t.md) | Describes the data of a common event. |
| [CommonEventPublishData](arkts-basicservices-commoneventmanager-commoneventpublishdata-t.md) | Describes the content and properties of a common event. |
| [CommonEventSubscribeInfo](arkts-basicservices-commoneventmanager-commoneventsubscribeinfo-t.md) | Describes the information about a subscriber. |
| [CommonEventSubscriber](arkts-basicservices-commoneventmanager-commoneventsubscriber-t.md) | Describes the subscriber of a common event. |

