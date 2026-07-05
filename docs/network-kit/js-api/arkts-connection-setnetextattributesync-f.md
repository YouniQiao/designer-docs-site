# setNetExtAttributeSync

## setNetExtAttributeSync

```TypeScript
function setNetExtAttributeSync(netHandle: NetHandle, netExtAttribute: string): void
```

Set the network extended attribute for a {@link NetHandle} object. To invoke this method, you must have the {@code ohos.permission.SET_NET_EXT_ATTRIBUTE} permission.

**Since:** 20

**Required permissions:** 

 ohos.permission.SET_NET_EXT_ATTRIBUTE

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netHandle | NetHandle | Yes | Indicates the network to be set. See {@link NetHandle}. |
| netExtAttribute | string | Yes | Indicates the extended attribute of the network. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let netExtAttribute: string = "xxx";
let netHandle = connection.getDefaultNetSync();
if (netHandle.netId != 0) {
  connection.setNetExtAttributeSync(netHandle, netExtAttribute);
}

```

