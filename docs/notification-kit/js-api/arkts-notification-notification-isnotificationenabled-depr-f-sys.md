# isNotificationEnabled (System API)

## isNotificationEnabled

```TypeScript
function isNotificationEnabled(bundle: BundleOption, callback: AsyncCallback<boolean>): void
```

Checks whether notification is enabled for a specified application.This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isNotificationEnabled

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function isNotificationEnabled(bundle: BundleOption, callback: AsyncCallback<boolean>): void--><!--Device-notification-function isNotificationEnabled(bundle: BundleOption, callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Bundle information of the application. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Callback used to return the result. |


## isNotificationEnabled

```TypeScript
function isNotificationEnabled(bundle: BundleOption): Promise<boolean>
```

Checks whether notification is enabled for a specified application. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isNotificationEnabled

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function isNotificationEnabled(bundle: BundleOption): Promise<boolean>--><!--Device-notification-function isNotificationEnabled(bundle: BundleOption): Promise<boolean>-End-->

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


## isNotificationEnabled

```TypeScript
function isNotificationEnabled(callback: AsyncCallback<boolean>): void
```

Checks whether notification is enabled for this application.This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isNotificationEnabled

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function isNotificationEnabled(callback: AsyncCallback<boolean>): void--><!--Device-notification-function isNotificationEnabled(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Callback used to return the result. |


## isNotificationEnabled

```TypeScript
function isNotificationEnabled(): Promise<boolean>
```

Checks whether notification is enabled for this application. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isNotificationEnabled

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function isNotificationEnabled(): Promise<boolean>--><!--Device-notification-function isNotificationEnabled(): Promise<boolean>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Promise used to return the result. |


## isNotificationEnabled

```TypeScript
function isNotificationEnabled(userId: number, callback: AsyncCallback<boolean>): void
```

Checks whether notification is enabled for a specified user.This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isNotificationEnabled

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function isNotificationEnabled(userId: number, callback: AsyncCallback<boolean>): void--><!--Device-notification-function isNotificationEnabled(userId: number, callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | User ID. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Callback used to return the result.The value **true** means that the notification is enabled, and **false** means the opposite. |


## isNotificationEnabled

```TypeScript
function isNotificationEnabled(userId: number): Promise<boolean>
```

Checks whether notification is enabled for a specified user. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isNotificationEnabled

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function isNotificationEnabled(userId: number): Promise<boolean>--><!--Device-notification-function isNotificationEnabled(userId: number): Promise<boolean>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | User ID. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Promise used to return the result.The value **true** means that the notification is enabled, and **false** means the opposite. |

