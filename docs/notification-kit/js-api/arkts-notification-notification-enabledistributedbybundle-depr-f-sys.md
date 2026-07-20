# enableDistributedByBundle (System API)

## enableDistributedByBundle

```TypeScript
function enableDistributedByBundle(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void
```

Sets whether a specified application supports distributed notifications.This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** setDistributedEnableByBundle

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function enableDistributedByBundle(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void--><!--Device-notification-function enableDistributedByBundle(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Bundle information of the application. |
| enable | boolean | Yes | Whether the device supports distributed notifications. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |


## enableDistributedByBundle

```TypeScript
function enableDistributedByBundle(bundle: BundleOption, enable: boolean): Promise<void>
```

Sets whether a specified application supports distributed notifications.This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** setDistributedEnableByBundle

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function enableDistributedByBundle(bundle: BundleOption, enable: boolean): Promise<void>--><!--Device-notification-function enableDistributedByBundle(bundle: BundleOption, enable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Application bundle. |
| enable | boolean | Yes | Whether the device supports distributed notifications. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

