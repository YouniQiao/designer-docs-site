# off

## Modules to Import

```TypeScript
import { emitter } from '@kit.BasicServicesKit';
```

<a id="off"></a>
## off

```TypeScript
function off(eventId: number): void
```

Unsubscribes from all events with the specified event ID.

After this API is used to unsubscribe from an event, the event that has been published through the [emit](emitter.emit(eventId: string)) API but has not been executed will be unsubscribed.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-emitter-function off(eventId: long): void--><!--Device-emitter-function off(eventId: long): void-End-->

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | number | Yes | Event ID. |

**Example**

```TypeScript
// Unregister all callbacks for events whose **eventId** is **1**.
emitter.off(1);

```


<a id="off-1"></a>
## off

```TypeScript
function off(eventId: string): void
```

Unsubscribes from all events with the specified event ID.

After this API is used to unsubscribe from an event, the event that has been published through the [emit](emitter.emit(eventId: string)) API but has not been executed will be unsubscribed.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-emitter-function off(eventId: string): void--><!--Device-emitter-function off(eventId: string): void-End-->

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The value cannot be empty. |

**Example**

```TypeScript
// Unregister all callbacks for events whose **eventId** is **eventId1**.
emitter.off("eventId1");

```


<a id="off-2"></a>
## off

```TypeScript
function off(eventId: number, callback: Callback<EventData>): void
```

Unsubscribes from an event with the specified event ID and processed by the specified callback. This API takes effect only when **Callback\<EventData>** has been registered through the [on](emitter.on(event: InnerEvent, callback: Callback<EventData>)) or [once](emitter.once(event: InnerEvent, callback: Callback<EventData>)) API. Otherwise, no processing is performed.

After this API is used to unsubscribe from an event, the event that has been published through the [emit](emitter.emit(eventId: string)) API but has not been executed will be unsubscribed.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-emitter-function off(eventId: long, callback: Callback<EventData>): void--><!--Device-emitter-function off(eventId: long, callback: Callback<EventData>): void-End-->

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | number | Yes | Event ID. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;EventData&gt; | Yes | Callback to unregister. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let callback: Callback<emitter.EventData> = (eventData: emitter.EventData) => {
  console.info(`eventData: ${JSON.stringify(eventData)}`);
};
// Unregister all callbacks for events whose **eventId** is **1**. The callback object must be the object used during registration.
// If the callback has not been registered, no processing is performed.
emitter.off(1, callback);

```


<a id="off-3"></a>
## off

```TypeScript
function off(eventId: string, callback: Callback<EventData>): void
```

Unsubscribes from an event with the specified event ID and processed by the specified callback. This API takes effect only when **Callback\<EventData>** has been registered through the [on](emitter.on(eventId: string, callback: Callback<EventData>)) or [once](emitter.once(eventId: string, callback: Callback<EventData>)) API. Otherwise, no processing is performed.

After this API is used to unsubscribe from an event, the event that has been published through the [emit](emitter.emit(eventId: string)) API but has not been executed will be unsubscribed.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-emitter-function off(eventId: string, callback: Callback<EventData>): void--><!--Device-emitter-function off(eventId: string, callback: Callback<EventData>): void-End-->

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The value cannot be empty. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;EventData&gt; | Yes | Callback to unregister. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let callback: Callback<emitter.EventData> = (eventData: emitter.EventData) => {
  console.info(`eventData: ${JSON.stringify(eventData)}`);
};
// Unregister all callbacks for events whose **eventId** is **eventId1**. The callback object must be the object used during registration.
// If the callback has not been registered, no processing is performed.
emitter.off("eventId1", callback);

```


<a id="off-4"></a>
## off

```TypeScript
function off<T>(eventId: string, callback: Callback<GenericEventData<T>>): void
```

Unsubscribes from an event with the specified event ID and processed by the specified callback. This API takes effect only when **Callback\<EventData>** has been registered through the [on](emitter.on<T>(eventId: string, callback: Callback<GenericEventData<T>>)) or [once](emitter.once<T>(eventId: string, callback: Callback<GenericEventData<T>>)) API. Otherwise, no processing is performed.

After this API is used to unsubscribe from an event, the event that has been published through the [emit](emitter.emit(eventId: string)) API but has not been executed will be unsubscribed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-emitter-function off<T>(eventId: string, callback: Callback<GenericEventData<T>>): void--><!--Device-emitter-function off<T>(eventId: string, callback: Callback<GenericEventData<T>>): void-End-->

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The value cannot be empty. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;GenericEventData&lt;T&gt;&gt; | Yes | Callback to unregister. |

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
};
// Unregister all callbacks for events whose **eventId** is **eventId1**. The callback object must be the object used during registration.
// If the callback has not been registered, no processing is performed.
emitter.off("eventId1", callback);

```

