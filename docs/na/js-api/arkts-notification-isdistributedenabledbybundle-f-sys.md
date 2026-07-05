# isDistributedEnabledByBundle

## isDistributedEnabledByBundle

```TypeScript
function isDistributedEnabledByBundle(bundle: BundleOption, callback: AsyncCallback<boolean>): void
```

根据应用的包获取应用程序是否支持分布式通知（Callback形式）。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#isDistributedEnabledByBundle

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | 应用的包。 |
| callback | AsyncCallback&lt;boolean> | Yes | 查询指定应用是否支持分布式通知的回调函数。 |

## isDistributedEnabledByBundle

```TypeScript
function isDistributedEnabledByBundle(bundle: BundleOption): Promise<boolean>
```

查询指定应用是否支持分布式通知（Promise形式）。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#isDistributedEnabledByBundle

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | 应用的包。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise方式返回指定应用是否支持分布式通知的结果。 |

