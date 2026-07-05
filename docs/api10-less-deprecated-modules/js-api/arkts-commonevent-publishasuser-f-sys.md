# publishAsUser

## publishAsUser

```TypeScript
function publishAsUser(event: string, userId: number, callback: AsyncCallback<void>): void
```

以回调的形式向指定用户发布公共事件。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.commonEventManager:commonEventManager.publishAsUser(event:

**System capability:** SystemCapability.Notification.CommonEvent

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | 表示要发送的公共事件。 |
| userId | number | Yes | 表示指定向该用户ID发送此公共事件。 |
| callback | AsyncCallback&lt;void> | Yes | 表示被指定的回调方法。 |

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

以回调形式向指定用户发布公共事件并指定发布信息。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.commonEventManager:commonEventManager.publishAsUser(

**System capability:** SystemCapability.Notification.CommonEvent

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | 表示要发布的公共事件。 |
| userId | number | Yes | 表示指定向该用户ID发送此公共事件。 |
| options | CommonEventPublishData | Yes | 表示发布公共事件的属性。 |
| callback | AsyncCallback&lt;void> | Yes | 表示被指定的回调方法。 |

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

