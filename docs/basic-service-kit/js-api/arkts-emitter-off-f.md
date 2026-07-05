# off

## off

```TypeScript
function off(eventId: long): void
```

取消事件ID为eventId的所有订阅。 使用该接口取消某个事件订阅后，已通过[emit]emitter.emit(eventId: string)接口发布但尚未被执行的事件将被取消。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | long | Yes | 事件ID。 |

**Example**

```TypeScript
// Unregister all callbacks for events whose **eventId** is **1**.
emitter.off(1);

```

## off

```TypeScript
function off(eventId: string): void
```

取消事件ID为eventId的所有订阅。 使用该接口取消某个事件订阅后，已通过[emit]emitter.emit(eventId: string)接口发布但尚未被执行的事件将被取消。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | 事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。 |

**Example**

```TypeScript
// Unregister all callbacks for events whose **eventId** is **eventId1**.
emitter.off("eventId1");

```

## off

```TypeScript
function off(eventId: long, callback: Callback<EventData>): void
```

取消事件ID为eventId且回调处理函数为callback的订阅。仅当已使用[on]emitter.on(event: InnerEvent, callback: Callback<EventData>)或 [once]emitter.once(event: InnerEvent, callback: Callback<EventData>)接口订阅callback时，该接口才生效。 使用该接口取消某个事件订阅后，已通过[emit]emitter.emit(eventId: string)接口发布但尚未被执行的事件将被取消。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | long | Yes | 事件ID。 |
| callback | Callback&lt;EventData> | Yes | 事件的回调处理函数。 |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let callback: Callback<emitter.EventData> = (eventData: emitter.EventData) => {
  console.info(`eventData: ${JSON.stringify(eventData)}`);
}
// Unregister all callbacks for events whose **eventId** is **1**. The callback object must be the object used during registration.
// If the callback has not been registered, no processing is performed.
emitter.off(1, callback);

```

## off

```TypeScript
function off(eventId: string, callback: Callback<EventData>): void
```

取消事件ID为eventId且回调处理函数为callback的订阅。仅当已使用[on]emitter.on(eventId: string, callback: Callback<EventData>)或 [once]emitter.once(eventId: string, callback: Callback<EventData>)接口订阅callback时，该接口才生效。 使用该接口取消某个事件订阅后，已通过[emit]emitter.emit(eventId: string)接口发布但尚未被执行的事件将被取消。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | 事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。 |
| callback | Callback&lt;EventData> | Yes | 事件的回调处理函数。 |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let callback: Callback<emitter.EventData> = (eventData: emitter.EventData) => {
  console.info(`eventData: ${JSON.stringify(eventData)}`);
}
// Unregister all callbacks for events whose **eventId** is **eventId1**. The callback object must be the object used during registration.
// If the callback has not been registered, no processing is performed.
emitter.off("eventId1", callback);

```

## off

```TypeScript
function off<T>(eventId: string, callback: Callback<GenericEventData<T>>): void
```

取消事件ID为eventId且回调处理函数为callback的订阅。仅当已使用 [on]emitter.on<T>(eventId: string, callback: Callback<GenericEventData<T>>)或 [once]emitter.once<T>(eventId: string, callback: Callback<GenericEventData<T>>)接口订阅callback时，该接口才生效。 使用该接口取消某个事件订阅后，已通过[emit]emitter.emit(eventId: string)接口发布但尚未被执行的事件将被取消。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | 事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。 |
| callback | Callback&lt;GenericEventData&lt;T>> | Yes | 事件的回调处理函数。 |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

@Sendable
class Sample {
  constructor() {
    this.count = 100;
  }
  printCount() {
    console.info('Print count : ' + this.count);
  }
  count: number;
}

let callback: Callback<emitter.GenericEventData<Sample>> = (eventData: emitter.GenericEventData<Sample>): void => {
  console.info(`eventData: ${JSON.stringify(eventData?.data)}`);
  if (eventData?.data instanceof Sample) {
    eventData?.data?.printCount();
  }
}
// Unregister all callbacks for events whose **eventId** is **eventId1**. The callback object must be the object used during registration.
// If the callback has not been registered, no processing is performed.
emitter.off("eventId1", callback);

```

