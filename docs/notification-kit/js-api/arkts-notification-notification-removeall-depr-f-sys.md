# removeAll (System API)

## removeAll

```TypeScript
function removeAll(bundle: BundleOption, callback: AsyncCallback<void>): void
```

Removes all notifications for a specified application. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** removeAll

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function removeAll(bundle: BundleOption, callback: AsyncCallback<void>): void--><!--Device-notification-function removeAll(bundle: BundleOption, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Bundle information of the application. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |


## removeAll

```TypeScript
function removeAll(callback: AsyncCallback<void>): void
```

Removes all notifications. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** removeAll

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function removeAll(callback: AsyncCallback<void>): void--><!--Device-notification-function removeAll(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |


## removeAll

```TypeScript
function removeAll(userId: number, callback: AsyncCallback<void>): void
```

Removes all notifications for a specified user. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** removeAll

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function removeAll(userId: number, callback: AsyncCallback<void>): void--><!--Device-notification-function removeAll(userId: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | User ID. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |


## removeAll

```TypeScript
function removeAll(userId: number): Promise<void>
```

Removes all notifications for a specified user. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** removeAll

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function removeAll(userId: number): Promise<void>--><!--Device-notification-function removeAll(userId: number): Promise<void>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | User ID. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |


## removeAll

```TypeScript
function removeAll(bundle?: BundleOption): Promise<void>
```

Removes all notifications for a specified application. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** removeAll

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function removeAll(bundle?: BundleOption): Promise<void>--><!--Device-notification-function removeAll(bundle?: BundleOption): Promise<void>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | No | Bundle information of the application.By default, this parameter is left empty, indicating that all notifications will be removed. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

