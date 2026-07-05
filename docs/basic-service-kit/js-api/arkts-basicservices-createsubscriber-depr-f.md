# createSubscriber

## createSubscriber

```TypeScript
function createSubscriber(
    subscribeInfo: CommonEventSubscribeInfo,
    callback: AsyncCallback<CommonEventSubscriber>
  ): void
```

Creates a subscriber. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** createSubscriber(

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscribeInfo | CommonEventSubscribeInfo | Yes | Subscriber information. |
| callback | AsyncCallback&lt;CommonEventSubscriber&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
import Base from '@ohos.base';
import CommonEventManager from '@ohos.commonEventManager';

let subscriber:CommonEventManager.CommonEventSubscriber; // Used to save the created subscriber object for subsequent subscription and unsubscription.

// Subscriber information.
let subscribeInfo:CommonEventManager.CommonEventSubscribeInfo = {
    events: ["event"]
};

// Callback for subscriber creation.
function createCB(err:Base.BusinessError, commonEventSubscriber:CommonEventManager.CommonEventSubscriber) {
    if (err.code) {
        console.error(`createSubscriber failed, code is ${err.code}`);
    } else {
        console.info("createSubscriber");
        subscriber = commonEventSubscriber;
    }
}

// Create a subscriber.
commonEvent.createSubscriber(subscribeInfo, createCB);

```


## createSubscriber

```TypeScript
function createSubscriber(subscribeInfo: CommonEventSubscribeInfo): Promise<CommonEventSubscriber>
```

Creates a subscriber. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** createSubscriber(subscribeInfo:

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscribeInfo | CommonEventSubscribeInfo | Yes | Subscriber information. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CommonEventSubscriber&gt; | Promise used to return the subscriber object. |

**Example**

```TypeScript
import Base from '@ohos.base';
import CommonEventManager from '@ohos.commonEventManager';

let subscriber:CommonEventManager.CommonEventSubscriber; // Used to save the created subscriber object for subsequent subscription and unsubscription.

// Subscriber information.
let subscribeInfo:CommonEventManager.CommonEventSubscribeInfo = {
    events: ["event"]
};

// Create a subscriber.
commonEvent.createSubscriber(subscribeInfo).then((commonEventSubscriber:CommonEventManager.CommonEventSubscriber) => {
    console.info("createSubscriber");
    subscriber = commonEventSubscriber;
}).catch((err:Base.BusinessError) => {
    console.error(`createSubscriber failed, code is ${err.code}`);
});

```

