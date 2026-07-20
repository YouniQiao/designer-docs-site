# remove (System API)

## remove

```TypeScript
function remove(
    bundle: BundleOption,
    notificationKey: NotificationKey,
    reason: RemoveReason,
    callback: AsyncCallback<void>
  ): void
```

Removes a notification for a specified bundle. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** remove

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function remove(
    bundle: BundleOption,
    notificationKey: NotificationKey,
    reason: RemoveReason,
    callback: AsyncCallback<void>
  ): void--><!--Device-notification-function remove(
    bundle: BundleOption,
    notificationKey: NotificationKey,
    reason: RemoveReason,
    callback: AsyncCallback<void>
  ): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Bundle information of the application. |
| notificationKey | [NotificationKey](arkts-notification-notificationsubscribe-notificationkey-i-sys.md) | Yes | Notification key. |
| reason | [RemoveReason](arkts-notification-notificationsubscribe-removereason-e-sys.md) | Yes | Reason for deleting a notification. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |


## remove

```TypeScript
function remove(bundle: BundleOption, notificationKey: NotificationKey, reason: RemoveReason): Promise<void>
```

Removes a notification for a specified bundle. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** remove

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function remove(bundle: BundleOption, notificationKey: NotificationKey, reason: RemoveReason): Promise<void>--><!--Device-notification-function remove(bundle: BundleOption, notificationKey: NotificationKey, reason: RemoveReason): Promise<void>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Bundle information of the application. |
| notificationKey | [NotificationKey](arkts-notification-notificationsubscribe-notificationkey-i-sys.md) | Yes | Notification key. |
| reason | [RemoveReason](arkts-notification-notificationsubscribe-removereason-e-sys.md) | Yes | Reason for deleting a notification. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |


## remove

```TypeScript
function remove(hashCode: string, reason: RemoveReason, callback: AsyncCallback<void>): void
```

Removes a notification for a specified bundle. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** remove

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function remove(hashCode: string, reason: RemoveReason, callback: AsyncCallback<void>): void--><!--Device-notification-function remove(hashCode: string, reason: RemoveReason, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hashCode | string | Yes | Unique notification ID. It is the value of **hashCode** in the [NotificationRequest](arkts-notification-notificationrequest-notificationrequest-i.md) object of [SubscribeCallbackData](arkts-notification-notificationsubscriber-subscribecallbackdata-i-sys.md) used in the [onConsume](arkts-notification-notificationsubscriber-notificationsubscriber-i-sys.md#onconsume) callback. |
| reason | [RemoveReason](arkts-notification-notificationsubscribe-removereason-e-sys.md) | Yes | Reason for deleting a notification. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |


## remove

```TypeScript
function remove(hashCode: string, reason: RemoveReason): Promise<void>
```

Removes a notification for a specified bundle. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** remove

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function remove(hashCode: string, reason: RemoveReason): Promise<void>--><!--Device-notification-function remove(hashCode: string, reason: RemoveReason): Promise<void>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hashCode | string | Yes | Unique notification ID. |
| reason | [RemoveReason](arkts-notification-notificationsubscribe-removereason-e-sys.md) | Yes | Reason for deleting a notification. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

