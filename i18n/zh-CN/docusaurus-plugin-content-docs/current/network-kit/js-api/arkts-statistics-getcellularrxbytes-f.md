# getCellularRxBytes

## getCellularRxBytes

```TypeScript
function getCellularRxBytes(callback: AsyncCallback<long>): void
```

Queries the data traffic (including all TCP and UDP data packets) received through the cellular network.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;long> | 是 | Returns the data traffic received through the cellular network. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2103005 | Failed to read the system map. |
| 2103011 | Failed to create a system map. |
| 2103012 | Failed to obtain the NIC name. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { statistics } from '@kit.NetworkKit';

statistics.getCellularRxBytes((error: BusinessError, stats: number) => {
  if (error) {
    console.error(`getCellularRxBytes error, ${JSON.stringify(error)}`);
    return;
  }
  console.info(`getCellularRxBytes success, ${JSON.stringify(stats)}`);
});

```

## getCellularRxBytes

```TypeScript
function getCellularRxBytes(): Promise<long>
```

Queries the data traffic (including all TCP and UDP data packets) received through the cellular network.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2103005 | Failed to read the system map. |
| 2103011 | Failed to create a system map. |
| 2103012 | Failed to obtain the NIC name. |

**示例：**

```TypeScript
import { statistics } from '@kit.NetworkKit';

statistics.getCellularRxBytes().then((stats: number) => {
  console.info('getCellularRxBytes success', JSON.stringify(stats));
}).catch((error: Error) => {
   console.error('getCellularRxBytes error', JSON.stringify(error));
});

```

