# getL2capPsm

## getL2capPsm

```TypeScript
function getL2capPsm(serverSocket: int): int
```

Get l2cap socket psm.

**Since:** 20

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| serverSocket | int | Yes | Indicates the server socket ID, returned by {@link sppListen}. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Returns the l2cap socket psm |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// The server obtains the address of the client.
let serverNumber = 1; // Set serverNumber to the value of serverNumber returned by the sppListen callback.
try {
    let l2capPsm: number = socket.getL2capPsm(serverNumber);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

