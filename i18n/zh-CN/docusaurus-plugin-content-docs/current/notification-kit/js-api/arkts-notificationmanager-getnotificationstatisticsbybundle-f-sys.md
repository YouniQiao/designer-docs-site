# getNotificationStatisticsByBundle

## getNotificationStatisticsByBundle

```TypeScript
function getNotificationStatisticsByBundle(bundles: BundleOption[]): Promise<BundleNotificationStatistics[]>
```

批量获取指定应用列表的通知统计信息，使用Promise异步回调。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundles | BundleOption[] | 是 | 应用的包信息列表。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;BundleNotificationStatistics[]> | Promise对象。返回指定应用列表的通知统计信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 801 | Capability not supported. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |

**示例：**

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

