# setBundlePriorityConfig

## setBundlePriorityConfig

```TypeScript
function setBundlePriorityConfig(bundle: BundleOption, value: string): Promise<void>
```

设置应用的优先功能配置。

**起始版本：** 23

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundle | BundleOption | 是 | 指定应用的包信息。 |
| value | string | 是 | 应用的优先功能配置。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |
| 17700001 | The specified bundle name was not found. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const bundleOption : notificationManager.BundleOption = { bundle: 'bundleName', uid: 0 };
notificationManager.setBundlePriorityConfig(bundleOption, 'keyword\nkeyword1').then(() => {
  hilog.info(0x0000, 'testTag', `setBundlePriorityConfig success`);
}).catch((err: BusinessError) => {
  hilog.error(0x0000, 'testTag', `setBundlePriorityConfig failed, code is ${err.code}, message is ${err.message}`);
});

```

