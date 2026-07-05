# publish

## publish

```TypeScript
function publish(event: string, callback: AsyncCallback<void>): void
```

发布公共事件（回调形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.commonEventManager:commonEventManager.publish(event:

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | 表示要发送的公共事件。 |
| callback | AsyncCallback&lt;void> | Yes | 表示指定的回调方法。 |

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

以回调的形式发布公共事件。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.commonEventManager:commonEventManager.publish(event:

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | 表示要发布的公共事件。 |
| options | CommonEventPublishData | Yes | 表示发布公共事件的属性。 |
| callback | AsyncCallback&lt;void> | Yes | 表示指定的回调方法。 |

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

