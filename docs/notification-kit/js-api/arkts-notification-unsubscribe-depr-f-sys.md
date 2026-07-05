# unsubscribe (System API)

## unsubscribe

```TypeScript
function unsubscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void
```

Unsubscribes from a notification. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** unsubscribe

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriber | NotificationSubscriber | Yes | Notification subscriber. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |


## unsubscribe

```TypeScript
function unsubscribe(subscriber: NotificationSubscriber): Promise<void>
```

Unsubscribes from a notification. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** unsubscribe

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriber | NotificationSubscriber | Yes | Notification subscriber. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

