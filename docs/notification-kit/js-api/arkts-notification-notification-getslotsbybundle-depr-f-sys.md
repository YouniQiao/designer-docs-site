# getSlotsByBundle (System API)

## getSlotsByBundle

```TypeScript
function getSlotsByBundle(bundle: BundleOption, callback: AsyncCallback<Array<NotificationSlot>>): void
```

Obtains the notification slots of a specified application.This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getSlotsByBundle

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function getSlotsByBundle(bundle: BundleOption, callback: AsyncCallback<Array<NotificationSlot>>): void--><!--Device-notification-function getSlotsByBundle(bundle: BundleOption, callback: AsyncCallback<Array<NotificationSlot>>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Bundle information of the application. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<NotificationSlot>> | Yes | Callback used to return the result. |


## getSlotsByBundle

```TypeScript
function getSlotsByBundle(bundle: BundleOption): Promise<Array<NotificationSlot>>
```

Obtains the notification slots of a specified application. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getSlotsByBundle

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function getSlotsByBundle(bundle: BundleOption): Promise<Array<NotificationSlot>>--><!--Device-notification-function getSlotsByBundle(bundle: BundleOption): Promise<Array<NotificationSlot>>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Bundle information of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<NotificationSlot>> | Promise used to return the result. |

