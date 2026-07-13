# cancel

## cancel

```TypeScript
function cancel(id: number, callback: AsyncCallback<void>): void
```

Cancels a notification with the specified ID. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** cancel

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Notification ID. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |


## cancel

```TypeScript
function cancel(id: number, label: string, callback: AsyncCallback<void>): void
```

Cancels a notification with the specified ID and label. This API uses an asynchronous callback to return the
result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** cancel

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Notification ID. |
| label | string | Yes | Notification label. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |


## cancel

```TypeScript
function cancel(id: number, label?: string): Promise<void>
```

Cancels a notification with the specified ID and optional label. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** cancel

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Notification ID. |
| label | string | No | Notification label. This parameter is left empty by default. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

