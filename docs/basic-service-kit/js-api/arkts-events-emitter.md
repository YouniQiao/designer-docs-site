# @ohos.events.emitter

本模块提供了在同一进程不同线程间或同一线程内发送和处理事件的能力，支持持续订阅事件、单次订阅事件、取消订阅事件及发送事件到事件队列。

**Since:** 7

**System capability:** SystemCapability.Notification.Emitter

## Modules to Import

```TypeScript
import { emitter } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [emit](arkts-emitter-emit-f.md#emit-1) | 发送指定事件。 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[线程间通信对象](docroot://arkts-utils/serializable-overview.md)。目前不支持使用 [@State装饰器](docroot://ui/state-management/arkts-state.md)、 [@Observed装饰器](docroot://ui/state-management/arkts-observed-and-objectlink.md)等装饰器修饰的复杂类型数据。 该接口发布某个事件后，不保证该事件立刻执行，执行时间取决于事件队列里面的事件数量以及各事件的执行效率。 |
| [emit](arkts-emitter-emit-f.md#emit-2) | 发送指定事件。 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[线程间通信对象](docroot://arkts-utils/serializable-overview.md)。目前不支持使用 [@State装饰器](docroot://ui/state-management/arkts-state.md)、 [@Observed装饰器](docroot://ui/state-management/arkts-observed-and-objectlink.md)等装饰器修饰的复杂类型数据。 该接口发布某个事件后，不保证该事件立刻执行，执行时间取决于事件队列里面的事件数量以及各事件的执行效率。 |
| [emit](arkts-emitter-emit-f.md#emit-3) | 发送指定事件。 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[ArkTS-Sta并发迁移规则](../../quick-start/arkts-dyn-to-sta-concurrency-rules.md) |
| [emit](arkts-emitter-emit-f.md#emit-4) | 发送指定事件。 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[ArkTS-Sta并发迁移规则](../../quick-start/arkts-dyn-to-sta-concurrency-rules.md) |
| [emit](arkts-emitter-emit-f.md#emit-5) | 发送指定事件。 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[线程间通信对象](docroot://arkts-utils/serializable-overview.md)。目前不支持使用 [@State装饰器](docroot://ui/state-management/arkts-state.md)、 [@Observed装饰器](docroot://ui/state-management/arkts-observed-and-objectlink.md)等装饰器修饰的复杂类型数据。 该接口发布某个事件后，不保证该事件立刻执行，执行时间取决于事件队列里面的事件数量以及各事件的执行效率。 |
| [emit](arkts-emitter-emit-f.md#emit-6) | 发送指定事件。 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[ArkTS-Sta并发迁移规则](../../quick-start/arkts-dyn-to-sta-concurrency-rules.md) |
| [emit](arkts-emitter-emit-f.md#emit-7) | 发送指定优先级事件。 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[线程间通信对象](docroot://arkts-utils/serializable-overview.md)。目前不支持使用 [@State装饰器](docroot://ui/state-management/arkts-state.md)、 [@Observed装饰器](docroot://ui/state-management/arkts-observed-and-objectlink.md)等装饰器修饰的复杂类型数据。 该接口发布某个事件后，不保证该事件立刻执行，执行时间取决于事件队列里面的事件数量以及各事件的执行效率。 |
| [emit](arkts-emitter-emit-f.md#emit-8) | 发送指定优先级事件。 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[ArkTS-Sta并发迁移规则](../../quick-start/arkts-dyn-to-sta-concurrency-rules.md) |
| [emit](arkts-emitter-emit-f.md#emit-9) | 发送指定优先级事件。 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[ArkTS-Sta并发迁移规则](../../quick-start/arkts-dyn-to-sta-concurrency-rules.md) |
| [emit](arkts-emitter-emit-f.md#emit-10) | 发送指定优先级事件。 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[线程间通信对象](docroot://arkts-utils/serializable-overview.md)。目前不支持使用 [@State装饰器](docroot://ui/state-management/arkts-state.md)、 [@Observed装饰器](docroot://ui/state-management/arkts-observed-and-objectlink.md)等装饰器修饰的复杂类型数据。 该接口发布某个事件后，不保证该事件立刻执行，执行时间取决于事件队列里面的事件数量以及各事件的执行效率。 |
| [emit](arkts-emitter-emit-f.md#emit-11) | 发送指定优先级事件。 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[ArkTS-Sta并发迁移规则](../../quick-start/arkts-dyn-to-sta-concurrency-rules.md) |
| [getListenerCount](arkts-emitter-getlistenercount-f.md#getListenerCount-1) | 获取指定事件的订阅数。 |
| [off](arkts-emitter-off-f.md#off-1) | 取消事件ID为eventId的所有订阅。 使用该接口取消某个事件订阅后，已通过[emit]{@link emitter.emit(eventId: string)}接口发布但尚未被执行的事件将被取消。 |
| [off](arkts-emitter-off-f.md#off-2) | 取消事件ID为eventId的所有订阅。 使用该接口取消某个事件订阅后，已通过[emit]{@link emitter.emit(eventId: string)}接口发布但尚未被执行的事件将被取消。 |
| [off](arkts-emitter-off-f.md#off-3) | 取消事件ID为eventId且回调处理函数为callback的订阅。仅当已使用[on]{@link emitter.on(event: InnerEvent, callback: Callback<EventData>)}或 [once]{@link emitter.once(event: InnerEvent, callback: Callback<EventData>)}接口订阅callback时，该接口才生效。 使用该接口取消某个事件订阅后，已通过[emit]{@link emitter.emit(eventId: string)}接口发布但尚未被执行的事件将被取消。 |
| [off](arkts-emitter-off-f.md#off-4) | 取消事件ID为eventId且回调处理函数为callback的订阅。仅当已使用[on]{@link emitter.on(eventId: string, callback: Callback<EventData>)}或 [once]{@link emitter.once(eventId: string, callback: Callback<EventData>)}接口订阅callback时，该接口才生效。 使用该接口取消某个事件订阅后，已通过[emit]{@link emitter.emit(eventId: string)}接口发布但尚未被执行的事件将被取消。 |
| [off](arkts-emitter-off-f.md#off-5) | 取消事件ID为eventId且回调处理函数为callback的订阅。仅当已使用 [on]{@link emitter.on<T>(eventId: string, callback: Callback<GenericEventData<T>>)}或 [once]{@link emitter.once<T>(eventId: string, callback: Callback<GenericEventData<T>>)}接口订阅callback时，该接口才生效。 使用该接口取消某个事件订阅后，已通过[emit]{@link emitter.emit(eventId: string)}接口发布但尚未被执行的事件将被取消。 |
| [offEventData](arkts-emitter-offeventdata-f.md#offEventData-1) | 取消事件ID为eventId且回调处理函数为callback的订阅。仅当已使用 [onEventData]{@link emitter.onEventData(eventId: string, callback: Callback<EventData>)}或 [onceEventData]{@link emitter.onceEventData(eventId: string, callback: Callback<EventData>)}接口订阅callback时，该接口才生效。 使用该接口取消某个事件订阅后，已通过[emit]{@link emitter.emit(eventId: string)}接口发布但尚未被执行的事件将被取消。 |
| [offGenericEventData](arkts-emitter-offgenericeventdata-f.md#offGenericEventData-1) | 取消订阅当前Emitter类实例的事件。仅当已使用 [onGenericEventData]{@link emitter.onGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>)}或 [onceGenericEventData]{@link emitter.onceGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>)}接口订阅了事件ID为eventId且回调处理函数为callback的事件时，该接口才生效。 使用该接口取消事件订阅后，已通过[emit]{@link emitter.emit(eventId: string)}接口发布但尚未执行的事件将被取消。 |
| [on](arkts-emitter-on-f.md#on-1) | 持续订阅指定的事件，并在接收到该事件时，执行对应的回调处理函数。 |
| [on](arkts-emitter-on-f.md#on-2) | 持续订阅指定的事件，并在接收到该事件时，执行对应的回调处理函数。 |
| [on](arkts-emitter-on-f.md#on-3) | 持续订阅指定的事件，并在接收到该事件时，执行对应的回调处理函数。 |
| [onEventData](arkts-emitter-oneventdata-f.md#onEventData-1) | 持续订阅指定的事件，并在接收到该事件时，使用callback异步回调。 |
| [onGenericEventData](arkts-emitter-ongenericeventdata-f.md#onGenericEventData-1) | 持续订阅指定的事件，并在接收到该事件时，使用callback异步回调。 |
| [once](arkts-emitter-once-f.md#once-1) | 单次订阅指定的事件，在接收到该事件且执行完对应的回调函数后，自动取消订阅。 |
| [once](arkts-emitter-once-f.md#once-2) | 单次订阅指定的事件，在接收到该事件且执行完对应的回调函数后，自动取消订阅。 |
| [once](arkts-emitter-once-f.md#once-3) | 单次订阅指定的事件，在接收到该事件且执行完相应的回调函数后，自动取消订阅。 |
| [onceEventData](arkts-emitter-onceeventdata-f.md#onceEventData-1) | 单次订阅指定的事件，在接收到该事件且执行完对应的回调函数后，自动取消订阅。 |
| [onceGenericEventData](arkts-emitter-oncegenericeventdata-f.md#onceGenericEventData-1) | 单次订阅当前Emitter类实例指定的事件，在接收到该事件且执行完相应的回调函数后，自动取消订阅。使用callback异步回调。 |

### Classes

| Name | Description |
| --- | --- |
| [Emitter](arkts-emitter-emitter-c.md) | 该功能支持在同一进程的同一Emitter类实例中，跨不同线程或同一线程内发送和处理事件。它能够实现持续订阅事件、单次订阅事件、取消订阅事件以及将事件发送到事件队列。 |

### Interfaces

| Name | Description |
| --- | --- |
| [EventData](arkts-emitter-eventdata-i.md) | 发送事件时传递的数据。 |
| [GenericEventData](arkts-emitter-genericeventdata-i.md) | 发送事件时传递的泛型数据。 |
| [InnerEvent](arkts-emitter-innerevent-i.md) | 订阅或发送的事件，订阅事件时`EventPriority`不生效。 |
| [Options](arkts-emitter-options-i.md) | 发送事件的优先级。 |

### Enums

| Name | Description |
| --- | --- |
| [EventPriority](arkts-emitter-eventpriority-e.md) | 表示事件的优先级。 |

