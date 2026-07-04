# createSubscriberSync

## Modules to Import

```TypeScript
import { commonEventManager } from '@ohos.commonEventManager';
```

## createSubscriberSync

```TypeScript
function createSubscriberSync(subscribeInfo: CommonEventSubscribeInfo): CommonEventSubscriber
```

Creates a subscriber. The API returns the result synchronously.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscribeInfo | CommonEventSubscribeInfo | Yes | Subscriber information. |

**Return value:**

| Type | Description |
| --- | --- |
| CommonEventSubscriber | Promise used to return the subscriber object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Define a subscriber to save the created subscriber object for subsequent subscription and unsubscription.
let subscriber: commonEventManager.CommonEventSubscriber | null = null;
// Subscriber information.
let subscribeInfo: commonEventManager.CommonEventSubscribeInfo = {
  events: ['event']
};
// Create a subscriber.
try {
  subscriber = commonEventManager.createSubscriberSync(subscribeInfo);
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`Failed to create subscriber. Code is ${err.code}, message is ${err.message}`);
}

```

