# isBadgeDisplayed (System API)

## isBadgeDisplayed

```TypeScript
function isBadgeDisplayed(bundle: BundleOption, callback: AsyncCallback<boolean>): void
```

Checks whether the notification badge is enabled for a specified application.This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isBadgeDisplayed

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function isBadgeDisplayed(bundle: BundleOption, callback: AsyncCallback<boolean>): void--><!--Device-notification-function isBadgeDisplayed(bundle: BundleOption, callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Bundle information of the application. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Callback used to return the result. |


## isBadgeDisplayed

```TypeScript
function isBadgeDisplayed(bundle: BundleOption): Promise<boolean>
```

Checks whether the notification badge is enabled for a specified application.This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isBadgeDisplayed

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function isBadgeDisplayed(bundle: BundleOption): Promise<boolean>--><!--Device-notification-function isBadgeDisplayed(bundle: BundleOption): Promise<boolean>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Bundle information of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Promise used to return the result. |

