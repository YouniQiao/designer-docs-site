# getConnectOwnerUidSync

## getConnectOwnerUidSync

```TypeScript
function getConnectOwnerUidSync(protocol: ProtocolType, local: NetAddress, remote: NetAddress): int
```

Obtains the data network that is activated by default. You can only call this method in VPN application.

**Since:** 23

**Required permissions:** 

 ohos.permission.GET_NETWORK_INFO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| protocol | ProtocolType | Yes | Protocol type. |
| local | NetAddress | Yes | Local net address. |
| remote | NetAddress | Yes | Remote net address. |

**Return value:**

| Type | Description |
| --- | --- |
| int | The owner uid of the specified connection. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100301 | Incorrect usage in non-VPN application. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let protocol = connection.ProtocolType.PROTO_TYPE_TCP;
let local: connection.NetAddress = { address: '192.168.1.100', family: 1, port: 6666 };
let remote: connection.NetAddress = { address: '192.168.1.200', family: 1, port: 8888 };
try {
  let uid = connection.getConnectOwnerUidSync(protocol, local, remote);
  console.info(`uid: ${uid}`);
} catch (e) {
  let err = e as BusinessError;
  console.error(`getConnectOwnerUid failed. errorCode: ${err.code} message:${err.message}`);
}

```

