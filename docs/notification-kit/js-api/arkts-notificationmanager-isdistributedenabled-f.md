# isDistributedEnabled

## isDistributedEnabled

```TypeScript
function isDistributedEnabled(callback: AsyncCallback<boolean>): void
```

查询设备是否支持跨设备协同通知。使用callback异步回调。

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** notificationManager.isDistributedEnabled(deviceType:

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示支持跨设备协同通知；返回false表示不支持跨设备协同通知；调用失败返回错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. [since 26.0.0] |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600010 | Distributed operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let isDistributedEnabledCallback = (err: BusinessError, data: boolean): void => {
  if (err) {
    console.error(`isDistributedEnabled failed, code is ${err.code}, message is ${err.message}`);
  } else {
    console.info(`isDistributedEnabled success ${JSON.stringify(data)}`);
  }
};
notificationManager.isDistributedEnabled(isDistributedEnabledCallback);

```

## isDistributedEnabled

```TypeScript
function isDistributedEnabled(): Promise<boolean>
```

查询设备是否支持跨设备协同通知。使用Promise异步回调。

**Since:** 9

**Deprecated since:** 26.0.0

**Substitute:** notificationManager.isDistributedEnabled(deviceType:

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示支持跨设备协同通知；返回false表示不支持跨设备协同通知。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. [since 26.0.0] |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600010 | Distributed operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

notificationManager.isDistributedEnabled().then((data: boolean) => {
  console.info(`isDistributedEnabled success, data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`isDistributedEnabled failed, code is ${err.code}, message is ${err.message}`);
});

```

