# once

## once

```TypeScript
function once(event: InnerEvent, callback: Callback<EventData>): void
```

单次订阅指定的事件，在接收到该事件且执行完对应的回调函数后，自动取消订阅。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | InnerEvent | Yes | 单次订阅的事件，其中[EventPriority]emitter.EventPriority，在订阅事件时无需指定，也不生效。 |
| callback | Callback&lt;EventData> | Yes | 接收到该事件时需要执行的回调处理函数。 |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let innerEvent: emitter.InnerEvent = {
  eventId: 1
};

let callback: Callback<emitter.EventData> = (eventData: emitter.EventData) => {
  console.info(`eventData: ${JSON.stringify(eventData)}`);
}
// Execute the callback after receiving the event whose eventId is 1.
emitter.once(innerEvent, callback);

```

## once

```TypeScript
function once(eventId: string, callback: Callback<EventData>): void
```

单次订阅指定的事件，在接收到该事件且执行完对应的回调函数后，自动取消订阅。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | 单次订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。 |
| callback | Callback&lt;EventData> | Yes | 接收到该事件时需要执行的回调处理函数。 |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let callback: Callback<emitter.EventData> = (eventData: emitter.EventData) => {
  console.info(`eventData: ${JSON.stringify(eventData)}`);
}
// Execute the callback after receiving the event whose event ID is eventId.
emitter.once("eventId", callback);

```

## once

```TypeScript
function once<T>(eventId: string, callback: Callback<GenericEventData<T>>): void
```

单次订阅指定的事件，在接收到该事件且执行完相应的回调函数后，自动取消订阅。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | 单次订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。 |
| callback | Callback&lt;GenericEventData&lt;T>> | Yes | 接收到该事件时需要执行的回调处理函数。 |

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
// Execute the callback after receiving the event whose event ID is eventId.
emitter.once("eventId", callback);

```

