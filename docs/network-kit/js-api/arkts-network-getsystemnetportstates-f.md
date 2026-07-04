# getSystemNetPortStates

## Modules to Import

```TypeScript
import { connection } from '@ohos.net.connection';
```

## getSystemNetPortStates

```TypeScript
function getSystemNetPortStates(): Promise<NetPortStatesInfo>
```

Obtains the port states of system network. To invoke this method, you must have the {@code ohos.permission.GET_IP_MAC_INFO} permission.

**Since:** 24

**Required permissions:** ohos.permission.GET_IP_MAC_INFO

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NetPortStatesInfo&gt; | Returns the port status of system network. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

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

