# getNetExtAttribute

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## getNetExtAttribute

```TypeScript
function getNetExtAttribute(netHandle: NetHandle): Promise<string>
```

Get the network extended attribute for a {@link NetHandle} object.
To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.

**Since:** 20

**Required permissions:** ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netHandle | NetHandle | Yes | Indicates the network to be queried. See {@link NetHandle}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | The promise returned by the function. |

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

connection.getDefaultNet().then((netHandle: connection.NetHandle) => {
  if (netHandle.netId == 0) {
    // If no network is connected, the obtained netId of netHandle is 0, which is abnormal. You can add specific processing based on the service requirements.
    return;
  }
  connection.getNetExtAttribute(netHandle).then((netExtAttribute: string) => {
    console.info("getNetExtAttribute: " + netExtAttribute);
  }).catch((error: BusinessError) => {
    console.error("getNetExtAttribute failed, err: " + error.code);
  })
});

```

