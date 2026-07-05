# remove

## remove

```TypeScript
function remove(
    bundle: BundleOption,
    notificationKey: NotificationKey,
    reason: RemoveReason,
    callback: AsyncCallback<void>
  ): void
```

删除指定通知（Callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationSubscribe/notificationSubscribe#remove

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | 指定应用的包信息。 |
| notificationKey | NotificationKey | Yes | 通知键值。 |
| reason | RemoveReason | Yes | 通知删除原因。 |
| callback | AsyncCallback&lt;void> | Yes | 删除指定通知回调函数。 |

## remove

```TypeScript
function remove(bundle: BundleOption, notificationKey: NotificationKey, reason: RemoveReason): Promise<void>
```

删除指定通知（Promise形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationSubscribe/notificationSubscribe#remove

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | 指定应用的包信息。 |
| notificationKey | NotificationKey | Yes | 通知键值。 |
| reason | RemoveReason | Yes | 通知删除原因。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## remove

```TypeScript
function remove(hashCode: string, reason: RemoveReason, callback: AsyncCallback<void>): void
```

删除指定通知（Callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationSubscribe/notificationSubscribe#remove

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hashCode | string | Yes | 通知唯一ID。可以通过[onConsume]./notification/notificationSubscriber:NotificationSubscriber.onConsume  回调的入参[SubscribeCallbackData]./notification/notificationSubscriber:SubscribeCallbackData获取其内部  [NotificationRequest]./notification/notificationRequest:NotificationRequest对象中的hashCode。 |
| reason | RemoveReason | Yes | 通知删除原因。 |
| callback | AsyncCallback&lt;void> | Yes | 删除指定通知回调函数。 |

## remove

```TypeScript
function remove(hashCode: string, reason: RemoveReason): Promise<void>
```

删除指定通知（Promise形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationSubscribe/notificationSubscribe#remove

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hashCode | string | Yes | 通知唯一ID。 |
| reason | RemoveReason | Yes | 通知删除原因。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

