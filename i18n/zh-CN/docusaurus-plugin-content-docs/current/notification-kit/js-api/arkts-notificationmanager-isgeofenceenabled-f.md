# isGeofenceEnabled

## isGeofenceEnabled

```TypeScript
function isGeofenceEnabled(): Promise<boolean>
```

检查地理围栏功能是否已启用。使用Promise异步回调。

**起始版本：** 23

**系统能力：** SystemCapability.Notification.Notification

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise对象，返回地理围栏开关状态的Promise对象。返回true表示地理围栏功能已启用，返回false表示地理围栏功能未启用。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600012 | No memory space. |

**示例：**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

notificationManager.isGeofenceEnabled().then((data: boolean) => {
  hilog.info(0x0000, 'testTag', '%{public}s', `isGeofenceEnabled success, enabled:  ${JSON.stringify(data)}.`);
}).catch((err: BusinessError) => {
  hilog.error(0x0000, 'testTag', '%{public}s',`isGeofenceEnabled failed, code is ${err.code}, message is ${err.message}`);
});

```

