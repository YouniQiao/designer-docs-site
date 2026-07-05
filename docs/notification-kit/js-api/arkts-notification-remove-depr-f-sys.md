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

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | Bundle information of the application. |
| notificationKey | NotificationKey | Yes | Notification key. |
| reason | RemoveReason | Yes | Reason for deleting a notification. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |


## remove

```TypeScript
function remove(bundle: BundleOption, notificationKey: NotificationKey, reason: RemoveReason): Promise<void>
```

Removes a notification for a specified bundle. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** remove

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | Bundle information of the application. |
| notificationKey | NotificationKey | Yes | Notification key. |
| reason | RemoveReason | Yes | Reason for deleting a notification. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |


## remove

```TypeScript
function remove(hashCode: string, reason: RemoveReason, callback: AsyncCallback<void>): void
```

Removes a notification for a specified bundle. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** remove

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hashCode | string | Yes | Unique notification ID. It is the value of **hashCode**in the [NotificationRequest](arkts-notification-notificationrequest-i.md#notificationrequest) object of[SubscribeCallbackData](arkts-notification-subscribecallbackdata-i-sys.md#subscribecallbackdata) used in the[onConsume](arkts-notification-notificationsubscriber-i-sys.md#onconsume) callback. |
| reason | RemoveReason | Yes | Reason for deleting a notification. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |


## remove

```TypeScript
function remove(hashCode: string, reason: RemoveReason): Promise<void>
```

Removes a notification for a specified bundle. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** remove

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hashCode | string | Yes | Unique notification ID. |
| reason | RemoveReason | Yes | Reason for deleting a notification. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

