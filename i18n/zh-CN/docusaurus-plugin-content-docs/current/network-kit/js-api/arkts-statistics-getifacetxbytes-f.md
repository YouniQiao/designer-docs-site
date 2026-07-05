# getIfaceTxBytes

## getIfaceTxBytes

```TypeScript
function getIfaceTxBytes(nic: string, callback: AsyncCallback<long>): void
```

Queries the data traffic (including all TCP and UDP data packets) sent through a specified NIC.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| nic | string | 是 | Network interface card. |
| callback | AsyncCallback&lt;long> | 是 | Returns the data traffic sent through the specified NIC. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2103005 | Failed to read the system map. |
| 2103011 | Failed to create a system map. |
| 2103012 | Failed to obtain the NIC name. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { statistics } from '@kit.NetworkKit';

statistics.getIfaceTxBytes("wlan0", (error: BusinessError, stats: number) => {
  if (error) {
    console.error(`getIfaceTxBytes error, ${JSON.stringify(error)}`);
    return;
  }
  console.info(`getIfaceTxBytes success, ${JSON.stringify(stats)}`);
});

```

## getIfaceTxBytes

```TypeScript
function getIfaceTxBytes(nic: string): Promise<long>
```

Queries the data traffic (including all TCP and UDP data packets) sent through a specified NIC.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| nic | string | 是 | Network interface card. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2103005 | Failed to read the system map. |
| 2103011 | Failed to create a system map. |
| 2103012 | Failed to obtain the NIC name. |

**示例：**

```TypeScript
import { statistics } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

statistics.getIfaceTxBytes("wlan0").then((stats: number) => {
  console.info(`getIfaceTxBytes success, ${JSON.stringify(stats)}`);
}).catch((err: BusinessError) => {
   console.error(`getIfaceTxBytes error, ${JSON.stringify(err)}`);
});

```

