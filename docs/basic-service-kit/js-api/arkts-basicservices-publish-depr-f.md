# publish

## publish

```TypeScript
function publish(event: string, callback: AsyncCallback<void>): void
```

Publishes a common event. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** publish(event:

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | Name of the common event to publish. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
import Base from '@ohos.base';

// Callback for common event publication.
function publishCB(err:Base.BusinessError) {
    if (err.code) {
        console.error(`publish failed, code is ${err.code}`);
    } else {
        console.info("publish");
    }
}

// Publish a common event.
commonEvent.publish("event", publishCB);

```


## publish

```TypeScript
function publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>): void
```

Publishes a common event with given properties. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** publish(event:

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | Name of the common event to publish. |
| options | CommonEventPublishData | Yes | Properties of the common event to publish. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
import Base from '@ohos.base';
import CommonEventManager from '@ohos.commonEventManager';

// Information of a common event.
let options:CommonEventManager.CommonEventPublishData = {
    code: 0,             // Initial code of the common event.
    data: "initial data", // Initial data of the common event.
    isOrdered: true  // The common event is an ordered one.
}

// Callback for common event publication.
function publishCB(err:Base.BusinessError) {
    if (err.code) {
        console.error(`publish failed, code is ${err.code}`);
    } else {
        console.info("publish");
    }
}

// Publish a common event.
commonEvent.publish("event", options, publishCB);

```

