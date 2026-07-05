# destroyVlanInterface

## destroyVlanInterface

```TypeScript
function destroyVlanInterface(ifName: string, vlanId: int): Promise<void>
```

Destroy vlan interface by vlanId. To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.

**Since:** 23

**Required permissions:** 

 ohos.permission.CONNECTIVITY_INTERNAL

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ifName | string | Yes | interface name. |
| vlanId | int | Yes | vlan id. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Nonsystem applications use system APIs. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2100400 | The input network interface name is incorrect. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let ifName = "eth0";
let vlanId = 1;
connection.destroyVlanInterface(ifName, vlanId).then(() => {
  console.info(`Destroy vlan success`);
}).catch((error: BusinessError) => {
  console.error(`Failed to destroy vlan. Code:${error.code}, message:${error.message}`);
});

```

