# once

## Modules to Import

```TypeScript
import { emitter } from '@ohos.events.emitter';
```

## once

```TypeScript
function once(event: InnerEvent, callback: Callback<EventData>): void
```

Subscribes to an event in one-shot manner and unsubscribes from it after the event callback is executed.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | InnerEvent | Yes | Event to subscribe to in one-shot manner. The[EventPriority](arkts-basicservices-eventpriority-e.md#eventpriority) parameter is not required and does not take effect. |
| callback | Callback&lt;EventData&gt; | Yes | Callback to be invoked when the event is received. |

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

Subscribes to an event in one-shot manner and unsubscribes from it after the event callback is executed.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The value cannot beempty. |
| callback | Callback&lt;EventData&gt; | Yes | Callback to be invoked when the event is received. |

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

Subscribes to an event in one-shot manner and unsubscribes from it after the event callback is executed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The value cannot beempty. |
| callback | Callback&lt;GenericEventData&lt;T&gt;&gt; | Yes | Callback to be invoked when the event is received. |

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

