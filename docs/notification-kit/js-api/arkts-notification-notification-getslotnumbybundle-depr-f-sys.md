# getSlotNumByBundle (System API)

## getSlotNumByBundle

```TypeScript
function getSlotNumByBundle(bundle: BundleOption, callback: AsyncCallback<number>): void
```

Obtains the number of notification slots of a specified application.This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getSlotNumByBundle

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function getSlotNumByBundle(bundle: BundleOption, callback: AsyncCallback<number>): void--><!--Device-notification-function getSlotNumByBundle(bundle: BundleOption, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Bundle information of the application. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<number> | Yes | Callback used to return the result. |


## getSlotNumByBundle

```TypeScript
function getSlotNumByBundle(bundle: BundleOption): Promise<number>
```

Obtains the number of notification slots of a specified application. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getSlotNumByBundle

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function getSlotNumByBundle(bundle: BundleOption): Promise<number>--><!--Device-notification-function getSlotNumByBundle(bundle: BundleOption): Promise<number>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Bundle information of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Promise used to return the result. |

