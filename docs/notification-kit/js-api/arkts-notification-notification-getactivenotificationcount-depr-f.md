# getActiveNotificationCount

## getActiveNotificationCount

```TypeScript
function getActiveNotificationCount(callback: AsyncCallback<number>): void
```

Obtains the number of active notifications of this application. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getActiveNotificationCount

<!--Device-notification-function getActiveNotificationCount(callback: AsyncCallback<number>): void--><!--Device-notification-function getActiveNotificationCount(callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<number> | Yes | Callback used to return the result. |


## getActiveNotificationCount

```TypeScript
function getActiveNotificationCount(): Promise<number>
```

Obtains the number of active notifications of this application. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getActiveNotificationCount

<!--Device-notification-function getActiveNotificationCount(): Promise<number>--><!--Device-notification-function getActiveNotificationCount(): Promise<number>-End-->

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Promise used to return the result. |

