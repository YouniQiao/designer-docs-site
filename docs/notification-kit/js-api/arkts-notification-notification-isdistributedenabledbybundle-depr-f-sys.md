# isDistributedEnabledByBundle (System API)

## isDistributedEnabledByBundle

```TypeScript
function isDistributedEnabledByBundle(bundle: BundleOption, callback: AsyncCallback<boolean>): void
```

Obtains whether an application supports distributed notifications based on the bundle.This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isDistributedEnabledByBundle

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function isDistributedEnabledByBundle(bundle: BundleOption, callback: AsyncCallback<boolean>): void--><!--Device-notification-function isDistributedEnabledByBundle(bundle: BundleOption, callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Application bundle. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Callback used to return the result. |


## isDistributedEnabledByBundle

```TypeScript
function isDistributedEnabledByBundle(bundle: BundleOption): Promise<boolean>
```

Checks whether a specified application supports distributed notifications.This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isDistributedEnabledByBundle

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function isDistributedEnabledByBundle(bundle: BundleOption): Promise<boolean>--><!--Device-notification-function isDistributedEnabledByBundle(bundle: BundleOption): Promise<boolean>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Application bundle. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Promise used to return the result. |

