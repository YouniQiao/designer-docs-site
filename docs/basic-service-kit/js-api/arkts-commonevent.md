# @ohos.commonEvent

The **CommonEvent** module provides capabilities to publish, subscribe to, and unsubscribe from common events, as
well as obtain and modify the common event result code and result data.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [commonEventManager:commonEventManager](arkts-commoneventmanager.md)

**System capability:** SystemCapability.Notification.CommonEvent

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createSubscriber](arkts-basicservices-createsubscriber-depr-f.md#createsubscriber-1) | Creates a subscriber. This API uses an asynchronous callback to return the result. |
| [createSubscriber](arkts-basicservices-createsubscriber-depr-f.md#createsubscriber-2) | Creates a subscriber. This API uses a promise to return the result. |
| [publish](arkts-basicservices-publish-depr-f.md#publish-1) | Publishes a common event. This API uses an asynchronous callback to return the result. |
| [publish](arkts-basicservices-publish-depr-f.md#publish-2) | Publishes a common event with given properties. This API uses an asynchronous callback to return the result. |
| [subscribe](arkts-basicservices-subscribe-depr-f.md#subscribe-1) | Subscribes to common events. This API uses an asynchronous callback to return the result. |
| [unsubscribe](arkts-basicservices-unsubscribe-depr-f.md#unsubscribe-1) | Unsubscribes from common events. This API uses an asynchronous callback to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [publishAsUser](arkts-basicservices-publishasuser-depr-f-sys.md#publishasuser-1) | Publishes a common event to a specific user. This API uses an asynchronous callback to return the result. |
| [publishAsUser](arkts-basicservices-publishasuser-depr-f-sys.md#publishasuser-2) | Publishes a common event with given properties to a specific user. This API uses an asynchronous callback to returnthe result. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [Support](arkts-basicservices-support-depr-e.md) | A system common event is an event that is published by a system service or system application and requires specificpermissions to subscribe to. To publish or subscribe to this type of event, you must follow the event-specific definitions. |

