# sppWriteAsync

## sppWriteAsync

```TypeScript
function sppWriteAsync(clientSocket: int, data: ArrayBuffer): Promise<void>
```

Asynchronous interface for writing data to the socket.

**Since:** 18

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| clientSocket | int | Yes | Indicates the client socket ID, returned by {@link sppAccept} or {@link sppConnect}. |
| data | ArrayBuffer | Yes | Indicates the data to write. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 2901054 | IO error. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let clientNumber = 1; // clientNumber is obtained by sppAccept or sppConnect.
let arrayBuffer = new ArrayBuffer(8);
let data = new Uint8Array(arrayBuffer);
try {
    socket.sppWriteAsync(clientNumber, arrayBuffer).then(() => {
      console.info("sppWrite success");
    });
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

