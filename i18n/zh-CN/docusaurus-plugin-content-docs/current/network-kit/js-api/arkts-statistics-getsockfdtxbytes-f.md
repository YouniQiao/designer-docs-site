# getSockfdTxBytes

## getSockfdTxBytes

```TypeScript
function getSockfdTxBytes(sockfd: int, callback: AsyncCallback<long>): void
```

Queries the data traffic (including all TCP and UDP data packets) sent through a specified sockfd.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sockfd | int | 是 | Indicates the file descriptor of the given socket. |
| callback | AsyncCallback&lt;long> | 是 | Returns the data traffic bytes sent by the specified sockfd. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { statistics } from '@kit.NetworkKit';

let sockfd = 50; // 实际开发中需要先根据自己创建的Socket获取到。
statistics.getSockfdTxBytes(sockfd, (error: BusinessError, stats: number) => {
  if (error) {
    console.error(JSON.stringify(error));
    return;
  }
  console.info(JSON.stringify(stats));
});

```

## getSockfdTxBytes

```TypeScript
function getSockfdTxBytes(sockfd: int): Promise<long>
```

Queries the data traffic (including all TCP and UDP data packets) sent through a specified sockfd.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sockfd | int | 是 | Indicates the file descriptor of the given socket. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Returns the data traffic bytes sent by the specified sockfd. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { statistics } from '@kit.NetworkKit';

let sockfd = 50; // 实际开发中需要先根据自己创建的Socket获取到。
statistics.getSockfdTxBytes(sockfd).then((stats: number) => {
  console.info(JSON.stringify(stats));
}).catch((err: BusinessError) => {
  console.error(JSON.stringify(err));
});

```

