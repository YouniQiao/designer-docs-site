# Emitter

This module provides the capabilities of sending and processing inter- or intra-thread events in a process of the same Emitter instance. You can use the following APIs to subscribe to an event in persistent or one-shot manner, unsubscribe from an event, or emit an event to the event queue.

**Since:** 22

**System capability:** SystemCapability.Notification.Emitter

## Modules to Import

```TypeScript
import { emitter } from '@ohos.events.emitter';
```

## constructor

```TypeScript
constructor()
```

Defines a constructor.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Notification.Emitter

**Example**

```TypeScript
let emitter1: emitter.Emitter = new emitter.Emitter();

```

## emit

```TypeScript
emit(eventId: string, data?: EventData): void
```

Emits a specified event to the Emitter class instance. This API can be used to emit data objects across threads. The data objects must meet the specifications specified in [Overview of Inter-Thread Communication Objects](../../../../arkts-utils/serializable-overview.md). Currently, complex data decorated by decorators such as [@State](../../../../ui/state-management/arkts-state.md) and [@Observed](../../../../ui/state-management/arkts-observed-and-objectlink.md) is not supported. After an event is published using this API, the event may not be executed immediately. When the execution starts depends on the number of events in the event queue and the execution efficiency of each event.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The value cannot beempty. |
| data | EventData | No | Data carried by the event. This parameter is left empty by default. |

**Example**

```TypeScript
let emitter1: emitter.Emitter = new emitter.Emitter();
let eventData: emitter.EventData = {
  data: {
  "content": "content",
  "id": 1,
  }
};

emitter1.emit("eventId", eventData);

```

## emit

```TypeScript
emit<T>(eventId: string, data?: GenericEventData<T>): void
```

Emits a specified event to the Emitter class instance. This API can be used to emit data objects across threads. The data objects must meet the specifications specified in [Overview of Inter-Thread Communication Objects](../../../../arkts-utils/serializable-overview.md). Currently, complex data decorated by decorators such as [@State](../../../../ui/state-management/arkts-state.md) and [@Observed](../../../../ui/state-management/arkts-observed-and-objectlink.md) is not supported. After an event is published using this API, the event may not be executed immediately. When the execution starts depends on the number of events in the event queue and the execution efficiency of each event.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The value cannot beempty. |
| data | GenericEventData&lt;T&gt; | No | Data carried by the event. This parameter is left empty by default. |

**Example**

```TypeScript
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

let emitter1: emitter.Emitter = new emitter.Emitter();

let eventData: emitter.GenericEventData<Sample> = {
  data: new Sample()
};

emitter1.emit("eventId", eventData);

```

## emit

```TypeScript
emit(eventId: string, options: Options, data?: EventData): void
```

Emits a specified event to the Emitter class instance. This API can be used to emit data objects across threads. The data objects must meet the specifications specified in [Overview of Inter-Thread Communication Objects](../../../../arkts-utils/serializable-overview.md). Currently, complex data decorated by decorators such as [@State](../../../../ui/state-management/arkts-state.md) and [@Observed](../../../../ui/state-management/arkts-observed-and-objectlink.md) is not supported. After an event is published using this API, the event may not be executed immediately. When the execution starts depends on the number of events in the event queue and the execution efficiency of each event.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The value cannot beempty. |
| options | Options | Yes | Event emit priority. |
| data | EventData | No | Data carried by the event. This parameter is left empty by default. |

**Example**

```TypeScript
let emitter1: emitter.Emitter = new emitter.Emitter();

let options: emitter.Options = {
  priority: emitter.EventPriority.HIGH
};
let eventData: emitter.EventData = {
  data: {
  "content": "content",
  "id": 1,
  }
};

emitter1.emit("eventId", options, eventData);

```

## emit

```TypeScript
emit<T>(eventId: string, options: Options, data?: GenericEventData<T>): void
```

Emits an event of a specified priority to the Emitter instance. This API can be used to emit data objects across threads. The data objects must meet the specifications specified in [Overview of Inter-Thread Communication Objects](../../../../arkts-utils/serializable-overview.md). Currently, complex data decorated by decorators such as [@State](../../../../ui/state-management/arkts-state.md) and [@Observed](../../../../ui/state-management/arkts-observed-and-objectlink.md) is not supported. After an event is published using this API, the event may not be executed immediately. When the execution starts depends on the number of events in the event queue and the execution efficiency of each event.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The value cannot beempty. |
| options | Options | Yes | Event emit priority. |
| data | GenericEventData&lt;T&gt; | No | Data carried by the event. This parameter is left empty by default. |

**Example**

```TypeScript
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

let emitter1: emitter.Emitter = new emitter.Emitter();

let options: emitter.Options = {
  priority: emitter.EventPriority.HIGH
};
let eventData: emitter.GenericEventData<Sample> = {
  data: new Sample()
};

emitter1.emit("eventId", options, eventData);

```

## getListenerCount

```TypeScript
getListenerCount(eventId: string): number
```

Obtains the number of subscriptions to a specified event of the Emitter instance.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The value cannot beempty. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Number of subscriptions to a specified event. |

**Example**

```TypeScript
let emitter1: emitter.Emitter = new emitter.Emitter();
let count = emitter1.getListenerCount("eventId");

```

## off

```TypeScript
off(eventId: string): void
```

Unsubscribes from all events with the specified event ID of the Emitter instance. After this API is used to unsubscribe from an event, the event that has been published through the [emit](arkts-basicservices-emitter-c.md#emit-1) API but has not been executed will be unsubscribed.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The value cannot beempty. |

**Example**

```TypeScript
let emitter1: emitter.Emitter = new emitter.Emitter();

emitter1.off("eventId");

```

## off

```TypeScript
off(eventId: string, callback: Callback<EventData>): void
```

Unsubscribes from an event of the Emitter instance. This API takes effect only when the [on](arkts-basicservices-emitter-c.md#on-1) or [once](arkts-basicservices-emitter-c.md#once-1) API is used to subscribe to the event with specified event ID and a callback is used to process the event. After this API is used to unsubscribe from an event, the event that has been published through the [emit](arkts-basicservices-emitter-c.md#emit-1) API but has not been executed will be unsubscribed.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The value cannot beempty. |
| callback | Callback&lt;EventData&gt; | Yes | Callback to unregister. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let emitter1: emitter.Emitter = new emitter.Emitter();

let callback: Callback<emitter.EventData> = (eventData: emitter.EventData) => {
  console.info(`eventData: ${JSON.stringify(eventData)}`);
}

emitter1.off("eventId", callback);

```

## off

```TypeScript
off<T>(eventId: string, callback: Callback<GenericEventData<T>>): void
```

Unsubscribes from an event of the Emitter instance. This API takes effect only when the [on](arkts-basicservices-emitter-c.md#on-2) or [once](arkts-basicservices-emitter-c.md#once-2) API is used to subscribe to the event with specified event ID and a callback is used to process the event. After this API is used to unsubscribe from an event, the event that has been published through the [emit](arkts-basicservices-emitter-c.md#emit-2) API but has not been executed will be unsubscribed.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The value cannot beempty. |
| callback | Callback&lt;GenericEventData&lt;T&gt;&gt; | Yes | Callback to unregister. |

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

let emitter1: emitter.Emitter = new emitter.Emitter();

let callback: Callback<emitter.GenericEventData<Sample>> = (eventData: emitter.GenericEventData<Sample>): void => {
  console.info(`eventData: ${JSON.stringify(eventData?.data)}`);
  if (eventData?.data instanceof Sample) {
    eventData?.data?.printCount();
  }
}

emitter1.off("eventId", callback);

```

## on

```TypeScript
on(eventId: string, callback: Callback<EventData>): void
```

Subscribes to an event specified by the Emitter instance in persistent manner and executes a callback after the event is received.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The value cannot beempty. |
| callback | Callback&lt;EventData&gt; | Yes | Callback to be invoked when the event is received. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let emitter1: emitter.Emitter = new emitter.Emitter();

let callback: Callback<emitter.EventData> = (eventData: emitter.EventData) => {
  console.info(`eventData: ${JSON.stringify(eventData)}`);
}

emitter1.on(`eventId`, callback);

```

## on

```TypeScript
on<T>(eventId: string, callback: Callback<GenericEventData<T>>): void
```

Subscribes to an event specified by the Emitter instance in persistent manner and executes a callback after the event is received.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The value cannot beempty. |
| callback | Callback&lt;GenericEventData&lt;T&gt;&gt; | Yes | Callback to be invoked when the event is received. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let emitter1: emitter.Emitter = new emitter.Emitter();

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

emitter1.on("eventId", callback);

```

## once

```TypeScript
once(eventId: string, callback: Callback<EventData>): void
```

Subscribes to an event specified by the Emitter instance in one-shot manner and unsubscribes from it after the event callback is executed. This API uses an asynchronous callback to return the result.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The value cannot beempty. |
| callback | Callback&lt;EventData&gt; | Yes | Callback to be invoked when the event is received. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let emitter1: emitter.Emitter = new emitter.Emitter();

let callback: Callback<emitter.EventData> = (eventData: emitter.EventData) => {
  console.info(`eventData: ${JSON.stringify(eventData)}`);
}

emitter1.once("eventId", callback);

```

## once

```TypeScript
once<T>(eventId: string, callback: Callback<GenericEventData<T>>): void
```

Subscribes to an event specified by the Emitter instance in one-shot manner and unsubscribes from it after the event callback is executed. This API uses an asynchronous callback to return the result.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The value cannot beempty. |
| callback | Callback&lt;GenericEventData&lt;T&gt;&gt; | Yes | Callback to be invoked when the event is received. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let emitter1: emitter.Emitter = new emitter.Emitter();

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

emitter1.once("eventId", callback);

```

