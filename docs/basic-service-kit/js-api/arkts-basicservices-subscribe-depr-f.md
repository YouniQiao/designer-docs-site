# subscribe

## subscribe

```TypeScript
function subscribe(subscriber: CommonEventSubscriber, callback: AsyncCallback<CommonEventData>): void
```

Subscribes to common events. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [subscribe](arkts-basicservices-subscribe-f.md#subscribe-1)

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriber | CommonEventSubscriber | Yes | Subscriber object. |
| callback | AsyncCallback&lt;CommonEventData&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
import Base from '@ohos.base';
import CommonEventManager from '@ohos.commonEventManager';

let subscriber:CommonEventManager.CommonEventSubscriber;// Used to save the created subscriber object for subsequent subscription and unsubscription.

// Subscriber information.
let subscribeInfo:CommonEventManager.CommonEventSubscribeInfo = {
    events: ["event"]
};

// Callback for common event subscription.
function subscribeCB(err:Base.BusinessError, data:CommonEventManager.CommonEventData) {
    if (err.code) {
        console.error(`subscribe failed, code is ${err.code}`);
    } else {
        console.info("subscribe " + JSON.stringify(data));
    }
}

// Callback for subscriber creation.
function createCB(err:Base.BusinessError, commonEventSubscriber:CommonEventManager.CommonEventSubscriber) {
    if (err.code) {
        console.error(`createSubscriber failed, code is ${err.code}`);
    } else {
        console.info("createSubscriber");
        subscriber = commonEventSubscriber;
        // Subscribe to a common event.
        commonEvent.subscribe(subscriber, subscribeCB);
    }
}

// Create a subscriber.
commonEvent.createSubscriber(subscribeInfo, createCB);

```

