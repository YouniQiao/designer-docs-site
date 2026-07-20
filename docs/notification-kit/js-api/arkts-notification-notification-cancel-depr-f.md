# cancel

## cancel

```TypeScript
function cancel(id: number, callback: AsyncCallback<void>): void
```

Cancels a notification with the specified ID. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** cancel

<!--Device-notification-function cancel(id: number, callback: AsyncCallback<void>): void--><!--Device-notification-function cancel(id: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Notification ID. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |


## cancel

```TypeScript
function cancel(id: number, label: string, callback: AsyncCallback<void>): void
```

Cancels a notification with the specified ID and label. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** cancel

<!--Device-notification-function cancel(id: number, label: string, callback: AsyncCallback<void>): void--><!--Device-notification-function cancel(id: number, label: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Notification ID. |
| label | string | Yes | Notification label. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |


## cancel

```TypeScript
function cancel(id: number, label?: string): Promise<void>
```

Cancels a notification with the specified ID and optional label. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** cancel

<!--Device-notification-function cancel(id: number, label?: string): Promise<void>--><!--Device-notification-function cancel(id: number, label?: string): Promise<void>-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Notification ID. |
| label | string | No | Notification label. This parameter is left empty by default. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

