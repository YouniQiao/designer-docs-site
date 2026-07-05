# getSlotNumByBundle

## getSlotNumByBundle

```TypeScript
function getSlotNumByBundle(bundle: BundleOption, callback: AsyncCallback<number>): void
```

获取指定应用的通知通道数量（Callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#getSlotNumByBundle

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | 指定应用的包信息。 |
| callback | AsyncCallback&lt;number> | Yes | 获取通知通道数量回调函数。 |

## getSlotNumByBundle

```TypeScript
function getSlotNumByBundle(bundle: BundleOption): Promise<number>
```

获取指定应用的通知通道数量（Promise形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#getSlotNumByBundle

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | 指定应用的包信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | 以Promise形式返回获取指定应用的通知通道数量。 |

