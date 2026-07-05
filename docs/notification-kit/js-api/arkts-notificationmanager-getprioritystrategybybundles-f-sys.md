# getPriorityStrategyByBundles

## getPriorityStrategyByBundles

```TypeScript
function getPriorityStrategyByBundles(bundles: Array<BundleOption>): Promise<Map<BundleOption, long>>
```

批量获取应用通知优先策略。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundles | Array&lt;BundleOption> | Yes | 应用包信息数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Map&lt;BundleOption, long>> | Promise对象，返回应用通知优先策略的键值对集合的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |
| 1600012 | No memory space. |
| 17700001 | The specified bundle name was not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const bundleOption : notificationManager.BundleOption = { bundle: 'bundleName', uid: 1000 };
let bundles: Array<notificationManager.BundleOption> = new Array(bundleOption);
notificationManager.getPriorityStrategyByBundles(bundles).then((strategies: Map<notificationManager.BundleOption, number>) => {
  strategies.forEach((value, key) => {
    hilog.info(0x0000, 'testTag', `getPriorityStrategyByBundles strategies: ${key.bundle} ${key.uid}, ${value}`);
  })
}).catch((err: BusinessError) => {
  hilog.error(0x0000, 'testTag', `getPriorityStrategyByBundles failed, code is ${err.code}, message is ${err.message}`);
});

```

