# setDistributedEnableByBundles

## setDistributedEnableByBundles

```TypeScript
function setDistributedEnableByBundles(bundleEnableInfos: Array<DistributedBundleEnableInfo>, deviceType: string): Promise<void>
```

批量设置应用是否支持跨设备协同。使用Promise异步回调。

**起始版本：** 20

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleEnableInfos | Array&lt;DistributedBundleEnableInfo> | 是 | 需要设置的应用数组。 |
| deviceType | string | 是 | 设备类型。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 801 | Capability not supported. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600010 | Distributed operation failed. |
| 1600012 | No memory space. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let bundle1: notificationManager.DistributedBundleEnableInfo = {
    bundleName: "bundleName1",
    uid: 1,
    enable: true
};
let bundle2: notificationManager.DistributedBundleEnableInfo = {
    bundleName: "bundleName2",
    uid: 2,
    enable: true
};
let bundles: Array<notificationManager.DistributedBundleEnableInfo> = [
    bundle1,bundle2
]

let deviceType: string = "liteWearable";
notificationManager.setDistributedEnableByBundles(bundles, deviceType).then(() => {
    console.info("setDistributedEnableByBundles success");
}).catch((err: BusinessError) => {
    console.error(`setDistributedEnableByBundles failed, code is ${err.code}, message is ${err.message}`);
});

```

