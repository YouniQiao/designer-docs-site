# setNetExtAttribute

## Modules to Import

```TypeScript
import { connection } from '@ohos.net.connection';
```

## setNetExtAttribute

```TypeScript
function setNetExtAttribute(netHandle: NetHandle, netExtAttribute: string): Promise<void>
```

Set the network extended attribute for a {@link NetHandle} object. To invoke this method, you must have the {@code ohos.permission.SET_NET_EXT_ATTRIBUTE} permission.

**Since:** 20

**Required permissions:** ohos.permission.SET_NET_EXT_ATTRIBUTE

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netHandle | NetHandle | Yes | Indicates the network to be set. See {@link NetHandle}. |
| netExtAttribute | string | Yes | Indicates the extended attribute of the network. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

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
  let netExtAttribute: string = "xxx";
  connection.setNetExtAttribute(netHandle, netExtAttribute).then(() => {
    console.info("setNetExtAttribute success");
  }).catch((error: BusinessError) => {
    console.error("setNetExtAttribute failed, err: " + error.code);
  })
});

```

