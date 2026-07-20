# @ohos.events.emitter

The **Emitter** module provides the capabilities of sending and processing inter- or intra-thread events in a process. You can use the APIs of this module to subscribe to an event in persistent or one-shot manner, unsubscribe from an event, or emit an event to the event queue.

**Since:** 7

<!--Device-unnamed-declare namespace emitter--><!--Device-unnamed-declare namespace emitter-End-->

**System capability:** SystemCapability.Notification.Emitter

## Modules to Import

```TypeScript
import { emitter } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [emit](arkts-basicservices-emitter-emit-f.md#emit-1) | Emits a specified event.This API can be used to emit data objects across threads. The data objects must meet the specifications specified in [Overview of Inter-Thread Communication Objects](../../../../arkts-utils/serializable-overview.md). Currently,complex data decorated by decorators such as [@State](../../../../ui/state-management/arkts-state.md) and [@Observed](../../../../ui/state-management/arkts-observed-and-objectlink.md) is not supported.After an event is published using this API, the event may not be executed immediately. When the execution starts depends on the number of events in the event queue and the execution efficiency of each event. |
| [emit](arkts-basicservices-emitter-emit-f.md#emit-2) | Emits a specified event.This API can be used to emit data objects across threads. The data objects must meet the specifications specified in [Overview of Inter-Thread Communication Objects](../../../../arkts-utils/serializable-overview.md). Currently,complex data decorated by decorators such as [@State](../../../../ui/state-management/arkts-state.md) and [@Observed](../../../../ui/state-management/arkts-observed-and-objectlink.md) is not supported.After an event is published using this API, the event may not be executed immediately. When the execution starts depends on the number of events in the event queue and the execution efficiency of each event. |
| [emit](arkts-basicservices-emitter-emit-f.md#emit-3) | Emits a specified event.This API can be used to emit data objects across threads. The data objects must meet the specifications specified in [Overview of Inter-Thread Communication Objects](../../../../arkts-utils/serializable-overview.md). Currently,complex data decorated by decorators such as [@State](../../../../ui/state-management/arkts-state.md) and [@Observed](../../../../ui/state-management/arkts-observed-and-objectlink.md) is not supported.After an event is published using this API, the event may not be executed immediately. When the execution starts depends on the number of events in the event queue and the execution efficiency of each event. |
| [emit](arkts-basicservices-emitter-emit-f.md#emit-4) | Emits an event of a specified priority.This API can be used to emit data objects across threads. The data objects must meet the specifications specified in [Overview of Inter-Thread Communication Objects](../../../../arkts-utils/serializable-overview.md). Currently,complex data decorated by decorators such as [@State](../../../../ui/state-management/arkts-state.md) and [@Observed](../../../../ui/state-management/arkts-observed-and-objectlink.md) is not supported.After an event is published using this API, the event may not be executed immediately. When the execution starts depends on the number of events in the event queue and the execution efficiency of each event. |
| [emit](arkts-basicservices-emitter-emit-f.md#emit-5) | Emits an event of a specified priority.This API can be used to emit data objects across threads. The data objects must meet the specifications specified in [Overview of Inter-Thread Communication Objects](../../../../arkts-utils/serializable-overview.md). Currently,complex data decorated by decorators such as [@State](../../../../ui/state-management/arkts-state.md) and [@Observed](../../../../ui/state-management/arkts-observed-and-objectlink.md) is not supported.After an event is published using this API, the event may not be executed immediately. When the execution starts depends on the number of events in the event queue and the execution efficiency of each event. |
| [getListenerCount](arkts-basicservices-emitter-getlistenercount-f.md#getlistenercount-1) | Obtains the number of subscriptions to a specified event. |
| [off](arkts-basicservices-emitter-off-f.md#off-1) | Unsubscribes from all events with the specified event ID.After this API is used to unsubscribe from an event, the event that has been published through the [emit](emitter.emit(eventId: string)) API but has not been executed will be unsubscribed. |
| [off](arkts-basicservices-emitter-off-f.md#off-2) | Unsubscribes from all events with the specified event ID.After this API is used to unsubscribe from an event, the event that has been published through the [emit](emitter.emit(eventId: string)) API but has not been executed will be unsubscribed. |
| [off](arkts-basicservices-emitter-off-f.md#off-3) | Unsubscribes from an event with the specified event ID and processed by the specified callback. This API takes effect only when **Callback\&lt;EventData&gt;** has been registered through the [on](arkts-basicservices-emitter-on-f.md#on-1) or [once](arkts-basicservices-emitter-once-f.md#once-1) API. Otherwise, no processing is performed.After this API is used to unsubscribe from an event, the event that has been published through the [emit](emitter.emit(eventId: string)) API but has not been executed will be unsubscribed. |
| [off](arkts-basicservices-emitter-off-f.md#off-4) | Unsubscribes from an event with the specified event ID and processed by the specified callback. This API takes effect only when **Callback\&lt;EventData&gt;** has been registered through the [on](arkts-basicservices-emitter-on-f.md#on-2) or [once](arkts-basicservices-emitter-once-f.md#once-2) API. Otherwise, no processing is performed.After this API is used to unsubscribe from an event, the event that has been published through the [emit](emitter.emit(eventId: string)) API but has not been executed will be unsubscribed. |
| [off](arkts-basicservices-emitter-off-f.md#off-5) | Unsubscribes from an event with the specified event ID and processed by the specified callback. This API takes effect only when **Callback\&lt;EventData&gt;** has been registered through the [on](arkts-basicservices-emitter-on-f.md#on-3) or [once](arkts-basicservices-emitter-once-f.md#once-3) API. Otherwise, no processing is performed.After this API is used to unsubscribe from an event, the event that has been published through the [emit](emitter.emit(eventId: string)) API but has not been executed will be unsubscribed. |
| [on](arkts-basicservices-emitter-on-f.md#on-1) | Subscribes to an event in persistent manner and executes a callback after the event is received. |
| [on](arkts-basicservices-emitter-on-f.md#on-2) | Subscribes to an event in persistent manner and executes a callback after the event is received. |
| [on](arkts-basicservices-emitter-on-f.md#on-3) | Subscribes to an event in persistent manner and executes a callback after the event is received. |
| [once](arkts-basicservices-emitter-once-f.md#once-1) | Subscribes to an event in one-shot manner and unsubscribes from it after the event callback is executed. |
| [once](arkts-basicservices-emitter-once-f.md#once-2) | Subscribes to an event in one-shot manner and unsubscribes from it after the event callback is executed. |
| [once](arkts-basicservices-emitter-once-f.md#once-3) | Subscribes to an event in one-shot manner and unsubscribes from it after the event callback is executed. |

### Classes

| Name | Description |
| --- | --- |
| [Emitter](arkts-basicservices-emitter-emitter-c.md) | This module provides the capabilities of sending and processing inter- or intra-thread events in a process of the same Emitter instance. You can use the following APIs to subscribe to an event in persistent or one-shot manner,unsubscribe from an event, or emit an event to the event queue. |

### Interfaces

| Name | Description |
| --- | --- |
| [EventData](arkts-basicservices-emitter-eventdata-i.md) | Describes data passed in the event. |
| [GenericEventData](arkts-basicservices-emitter-genericeventdata-i.md) | Describes the generic data carried by the emitted event. |
| [InnerEvent](arkts-basicservices-emitter-innerevent-i.md) | Describes an event to subscribe to or emit. The **EventPriority** settings do not take effect under event subscription. |
| [Options](arkts-basicservices-emitter-options-i.md) | Describes the event emit priority. |

### Enums

| Name | Description |
| --- | --- |
| [EventPriority](arkts-basicservices-emitter-eventpriority-e.md) | Enumerates the event priorities. |

