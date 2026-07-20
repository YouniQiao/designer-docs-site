# cancelAll

## cancelAll

```TypeScript
function cancelAll(callback: AsyncCallback<void>): void
```

Cancels all notifications. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** cancelAll

<!--Device-notification-function cancelAll(callback: AsyncCallback<void>): void--><!--Device-notification-function cancelAll(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |


## cancelAll

```TypeScript
function cancelAll(): Promise<void>
```

Cancels all notifications. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** cancelAll

<!--Device-notification-function cancelAll(): Promise<void>--><!--Device-notification-function cancelAll(): Promise<void>-End-->

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

