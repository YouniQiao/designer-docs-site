# sppReadAsync

## Modules to Import

```TypeScript
import { socket } from '@kit.ConnectivityKit';
```

<a id="sppreadasync"></a>
## sppReadAsync

```TypeScript
function sppReadAsync(clientSocket: number): Promise<ArrayBuffer>
```

Asynchronous interface for reading data from the socket.

**Since:** 18

<!--Device-socket-function sppReadAsync(clientSocket: int): Promise<ArrayBuffer>--><!--Device-socket-function sppReadAsync(clientSocket: int): Promise<ArrayBuffer>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| clientSocket | number | Yes | Indicates the client socket ID, returned by {@link sppAccept} or {@link sppConnect}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer&gt; | Returns the promise object, used to get the spp read data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2901054 | IO error. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// clientNumber is obtained via sppAccept or sppConnect.
async function readAsync(clientNumber: number) {
  let flag = 1;
  try {
    while (flag) { // Call the API cyclically to read data. This example is for reference only. You need to change the implementation based on the service requirements. 
      let buffer = await socket.sppReadAsync(clientNumber); // Use await to ensure sequential reading.
      let data = new Uint8Array(buffer);
      if (data) {
        console.info('sppRead success, data length = ' + data.byteLength);
        // Process the received data.
      }
    }
  } catch (err) {
    console.error('startSppRead errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
    socket.sppCloseClientSocket(clientNumber); // Close the connection when an error occurs.
  }
}

```

