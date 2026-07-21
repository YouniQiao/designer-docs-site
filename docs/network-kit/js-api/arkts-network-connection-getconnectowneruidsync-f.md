# getConnectOwnerUidSync

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

<a id="getconnectowneruidsync"></a>
## getConnectOwnerUidSync

```TypeScript
function getConnectOwnerUidSync(protocol: ProtocolType, local: NetAddress, remote: NetAddress): number
```

Obtains the data network that is activated by default.You can only call this method in VPN application.

**Since:** 23

**Required permissions:** ohos.permission.GET_NETWORK_INFO

**Model restriction:** This API can be used only in the stage model.

<!--Device-connection-function getConnectOwnerUidSync(protocol: ProtocolType, local: NetAddress, remote: NetAddress): int--><!--Device-connection-function getConnectOwnerUidSync(protocol: ProtocolType, local: NetAddress, remote: NetAddress): int-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| protocol | [ProtocolType](../../apis-connectivity-kit/arkts-apis/arkts-connectivity-hid-protocoltype-e.md) | Yes | Protocol type. |
| local | [NetAddress](arkts-network-connection-netaddress-i.md) | Yes | Local net address. |
| remote | [NetAddress](arkts-network-connection-netaddress-i.md) | Yes | Remote net address. |

**Return value:**

| Type | Description |
| --- | --- |
| number | The owner uid of the specified connection. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100301](../errorcode-net-connection.md#2100301-failed-to-authenticate-the-caller-nonvpn-application) | Incorrect usage in non-VPN application. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

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

