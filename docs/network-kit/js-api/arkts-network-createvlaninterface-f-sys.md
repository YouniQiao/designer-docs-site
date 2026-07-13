# createVlanInterface (System API)

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## createVlanInterface

```TypeScript
function createVlanInterface(ifName: string, vlanId: number): Promise<void>
```

Create vlan interface by vlanId.
To invoke this method, you must have the {@code ohos.permission.CONNECTIVITY_INTERNAL} permission.

**Since:** 23

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ifName | string | Yes | interface name. |
| vlanId | number | Yes | vlan id. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Nonsystem applications use system APIs. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |
| [2100400](../errorcode-net-connection.md#2100400-incorrect-nic-name-nonethernet) | The input network interface name is incorrect. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let ifName = "eth0";
let vlanId = 1;
connection.createVlanInterface(ifName, vlanId).then(() => {
  console.info(`Create vlan success`);
}).catch((error: BusinessError) => {
  console.error(`Failed to create vlan. Code:${error.code}, message:${error.message}`);
});

```

