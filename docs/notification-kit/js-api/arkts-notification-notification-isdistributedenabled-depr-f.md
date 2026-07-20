# isDistributedEnabled

## isDistributedEnabled

```TypeScript
function isDistributedEnabled(callback: AsyncCallback<boolean>): void
```

Checks whether this device supports distributed notifications. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isDistributedEnabled

<!--Device-notification-function isDistributedEnabled(callback: AsyncCallback<boolean>): void--><!--Device-notification-function isDistributedEnabled(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Callback used to return the result. |


## isDistributedEnabled

```TypeScript
function isDistributedEnabled(): Promise<boolean>
```

Checks whether this device supports distributed notifications. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isDistributedEnabled

<!--Device-notification-function isDistributedEnabled(): Promise<boolean>--><!--Device-notification-function isDistributedEnabled(): Promise<boolean>-End-->

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Promise used to return the result. |

