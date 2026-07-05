# getSystemNetPortStates

## getSystemNetPortStates

```TypeScript
function getSystemNetPortStates(): Promise<NetPortStatesInfo>
```

Obtains the port states of system network. To invoke this method, you must have the {@code ohos.permission.GET_IP_MAC_INFO} permission.

**起始版本：** 24

**需要权限：** 

 ohos.permission.GET_IP_MAC_INFO

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;NetPortStatesInfo> | Returns the port status of system network. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getSystemNetPortStates().then((data: connection.NetPortStatesInfo) => {
  console.info(`Succeeded to get data: ${JSON.stringify(data)}`);
  if (data.tcpPortStatesInfo?.length) {
    data.tcpPortStatesInfo?.forEach(item => {
      console.info(`Succeeded to get Tcp data: ${JSON.stringify(item)}`);
    })
  } else {
    console.info("TcpPortStatesInfo is undefined ");
  }
  if (data.udpPortStatesInfo?.length) {
    data.udpPortStatesInfo?.forEach(item => {
      console.info(`Succeeded to get Udp data: ${JSON.stringify(item)}`);
    })
  } else {
    console.info("UdpPortStatesInfo is undefined ");
  }
}).catch((error: BusinessError) => {
  console.error(`Error fetching getSystemNetPortStates. Code:${error.code}, message:${error.message}`);
});

```

