# sppWrite

## Modules to Import

```TypeScript
import { socket } from '@kit.ConnectivityKit';
```

<a id="sppwrite"></a>
## sppWrite

```TypeScript
function sppWrite(clientSocket: number, data: ArrayBuffer): void
```

Write data through the socket.

**Since:** 10

<!--Device-socket-function sppWrite(clientSocket: int, data: ArrayBuffer): void--><!--Device-socket-function sppWrite(clientSocket: int, data: ArrayBuffer): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| clientSocket | number | Yes | Indicates the client socket ID, returned by {@link sppAccept} or {@link sppConnect}. |
| data | ArrayBuffer | Yes | Indicates the data to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2901054 | IO error. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let clientNumber = 1; // clientNumber is obtained by sppAccept or sppConnect.
let arrayBuffer = new ArrayBuffer(8);
let data = new Uint8Array(arrayBuffer);
data[0] = 123;
try {
    socket.sppWrite(clientNumber, arrayBuffer);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

