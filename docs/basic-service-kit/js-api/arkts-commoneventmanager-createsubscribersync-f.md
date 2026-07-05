# createSubscriberSync

## createSubscriberSync

```TypeScript
function createSubscriberSync(subscribeInfo: CommonEventSubscribeInfo): CommonEventSubscriber
```

createSubscriber的同步接口。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscribeInfo | CommonEventSubscribeInfo | Yes | 表示订阅信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| CommonEventSubscriber | 返回订阅者对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

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

