# getNetExtAttributeSync

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

<a id="getnetextattributesync"></a>
## getNetExtAttributeSync

```TypeScript
function getNetExtAttributeSync(netHandle: NetHandle): string
```

Get the network extended attribute for a {@link NetHandle} object.To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.

**Since:** 20

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-connection-function getNetExtAttributeSync(netHandle: NetHandle): string--><!--Device-connection-function getNetExtAttributeSync(netHandle: NetHandle): string-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netHandle | [NetHandle](arkts-network-connection-nethandle-i.md) | Yes | Indicates the network to be queried. See {@link NetHandle}. |

**Return value:**

| Type | Description |
| --- | --- |
| string | The netExtAttribute string returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let netHandle = connection.getDefaultNetSync();
if (netHandle.netId != 0) {
  let netExtAttribute: string = connection.getNetExtAttributeSync(netHandle);
  console.info("getNetExtAttribute: " + netExtAttribute);
}

```

