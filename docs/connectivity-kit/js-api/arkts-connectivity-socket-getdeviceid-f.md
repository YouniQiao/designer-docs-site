# getDeviceId

## Modules to Import

```TypeScript
import { socket } from '@kit.ConnectivityKit';
```

<a id="getdeviceid"></a>
## getDeviceId

```TypeScript
function getDeviceId(clientSocket: number): string
```

Obtain the device id in the client socket.

**Since:** 17

<!--Device-socket-function getDeviceId(clientSocket: int): string--><!--Device-socket-function getDeviceId(clientSocket: int): string-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| clientSocket | number | Yes | Indicates client socket. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the connected device id |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// The server obtains the address of the client.
let clientSocket = 1; // clientSocket is obtained from the sppAccept callback. Before calling getDeviceId, update the clientSocket.
try {
    let deviceAddr: string = socket.getDeviceId(clientSocket);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

// The client obtains the address of the server.
// clientSocket is obtained from the sppConnect callback. Before calling getDeviceId, update the clientSocket.
try {
    let deviceAddr: string = socket.getDeviceId(clientSocket);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

