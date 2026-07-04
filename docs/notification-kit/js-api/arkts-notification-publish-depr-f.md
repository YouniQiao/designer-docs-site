# publish

## publish

```TypeScript
function publish(request: NotificationRequest, callback: AsyncCallback<void>): void
```

Publishes a notification. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** publish

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | NotificationRequest | Yes | Content and related configuration of the notification to publish. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |


## publish

```TypeScript
function publish(request: NotificationRequest): Promise<void>
```

Publishes a notification. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** publish

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | NotificationRequest | Yes | Content and related configuration of the notification to publish. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

