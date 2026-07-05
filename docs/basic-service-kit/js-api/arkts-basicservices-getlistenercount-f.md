# getListenerCount

## Modules to Import

```TypeScript
import { emitter } from '@ohos.events.emitter';
```

## getListenerCount

```TypeScript
function getListenerCount(eventId: number | string): number
```

Obtains the number of subscriptions to a specified event.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Notification.Emitter

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventId | number \| string | Yes | Event ID, which is a custom string with a maximum of 10240 bytes. The valuecannot be empty. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Number of subscriptions to a specified event. |

**Example**

```TypeScript
let count: number = emitter.getListenerCount("eventId");

```

