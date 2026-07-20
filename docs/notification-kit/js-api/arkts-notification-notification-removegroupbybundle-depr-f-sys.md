# removeGroupByBundle (System API)

## removeGroupByBundle

```TypeScript
function removeGroupByBundle(bundle: BundleOption, groupName: string, callback: AsyncCallback<void>): void
```

Removes notifications under a notification group of a specified application.This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** removeGroupByBundle

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function removeGroupByBundle(bundle: BundleOption, groupName: string, callback: AsyncCallback<void>): void--><!--Device-notification-function removeGroupByBundle(bundle: BundleOption, groupName: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Bundle information of the application. |
| groupName | string | Yes | Name of the notification group. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |


## removeGroupByBundle

```TypeScript
function removeGroupByBundle(bundle: BundleOption, groupName: string): Promise<void>
```

Removes notifications under a notification group of a specified application.This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** removeGroupByBundle

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function removeGroupByBundle(bundle: BundleOption, groupName: string): Promise<void>--><!--Device-notification-function removeGroupByBundle(bundle: BundleOption, groupName: string): Promise<void>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Bundle information of the application. |
| groupName | string | Yes | Name of the notification group. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | the promise returned by the function. |

