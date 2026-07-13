# publishAsUser (System API)

## publishAsUser

```TypeScript
function publishAsUser(event: string, userId: number, callback: AsyncCallback<void>): void
```

Publishes a common event to a specific user. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** publishAsUser(event:

**System capability:** SystemCapability.Notification.CommonEvent

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | Name of the common event to publish. |
| userId | number | Yes | User ID. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
import Base from '@ohos.base';

// Callback for common event publication
function publishCB(err:Base.BusinessError) {
    if (err.code) {
        console.error(`publishAsUser failed, code is ${err.code}`);
    } else {
        console.info("publishAsUser");
    }
}

// Specify the user to whom the common event will be published.
let userId = 100;

// Publish a common event.
commonEvent.publishAsUser("event", userId, publishCB);

```


## publishAsUser

```TypeScript
function publishAsUser(
    event: string,
    userId: number,
    options: CommonEventPublishData,
    callback: AsyncCallback<void>
  ): void
```

Publishes a common event with given properties to a specific user. This API uses an asynchronous callback to return
the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** publishAsUser(

**System capability:** SystemCapability.Notification.CommonEvent

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | Name of the common event to publish. |
| userId | number | Yes | User ID. |
| options | CommonEventPublishData | Yes | Properties of the common event to publish. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
import Base from '@ohos.base';
import CommonEventManager from '@ohos.commonEventManager';

// Information of a common event.
let options:CommonEventManager.CommonEventPublishData = {
    code: 0,             // Initial code of the common event.
    data: "initial data",// Initial data of the common event.
}

// Callback for common event publication
function publishCB(err:Base.BusinessError) {
    if (err.code) {
        console.error(`publishAsUser failed, code is ${err.code}`);
    } else {
        console.info("publishAsUser");
    }
}

// Specify the user to whom the common event will be published.
let userId = 100;

// Publish a common event.
commonEvent.publishAsUser("event", userId, options, publishCB);

```

