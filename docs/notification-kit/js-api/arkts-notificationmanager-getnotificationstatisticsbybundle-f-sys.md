# getNotificationStatisticsByBundle

## getNotificationStatisticsByBundle

```TypeScript
function getNotificationStatisticsByBundle(bundles: BundleOption[]): Promise<BundleNotificationStatistics[]>
```

批量获取指定应用列表的通知统计信息，使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundles | BundleOption[] | Yes | 应用的包信息列表。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BundleNotificationStatistics[]> | Promise对象。返回指定应用列表的通知统计信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 801 | Capability not supported. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let bundles: notificationManager.BundleOption[] = [
  { bundle:"com.example.test01" },
  { bundle:"com.example.test02" }
];
notificationManager.getNotificationStatisticsByBundle(bundles).then(
  (data: notificationManager.BundleNotificationStatistics[]) => {
  console.info(`getNotificationStatisticsByBundle success, data is ${JSON.stringify(data)}`)
}).catch((err: BusinessError):void => {
  console.error(`getNotificationStatisticsByBundle err: ${JSON.stringify(err)}`)
});

```

