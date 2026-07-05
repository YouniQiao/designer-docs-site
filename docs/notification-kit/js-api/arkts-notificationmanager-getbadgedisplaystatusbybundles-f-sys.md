# getBadgeDisplayStatusByBundles

## getBadgeDisplayStatusByBundles

```TypeScript
function getBadgeDisplayStatusByBundles(bundles: Array<BundleOption>) : Promise<Map<BundleOption, boolean>>
```

批量获取应用角标显示状态。使用Promise异步回调。

**Since:** 21

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundles | Array&lt;BundleOption> | Yes | 待获取应用角标显示状态的应用包信息数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Map&lt;BundleOption, boolean>> | Promise对象，返回应用包信息和显示角标状态的键值对集合的Promise对象 。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600012 | No memory space. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let bundles: Array<notificationManager.BundleOption> = [
    {
        bundle: 'bundleName',
    },
    {
        bundle: 'bundleName1',
    }
];
notificationManager.getBadgeDisplayStatusByBundles(bundles).then((data: Map<notificationManager.BundleOption, boolean>) => {
    data.forEach((value, key) => {
        console.info(`Bundle is ${key.bundle}, uid is ${key.uid}, badge status is ${value}.`);
    });
}).catch((err: BusinessError) => {
    console.error(`GetBadgeDisplayStatusByBundles failed, code is ${err.code}, message is ${err.message}`);
});

```

