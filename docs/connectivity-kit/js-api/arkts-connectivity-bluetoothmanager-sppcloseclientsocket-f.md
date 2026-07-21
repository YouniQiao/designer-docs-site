# sppCloseClientSocket

## Modules to Import

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

<a id="sppcloseclientsocket"></a>
## sppCloseClientSocket

```TypeScript
function sppCloseClientSocket(socket: number): void
```

Disables an spp client socket and releases related resources.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** sppCloseClientSocket

<!--Device-bluetoothManager-function sppCloseClientSocket(socket: number): void--><!--Device-bluetoothManager-function sppCloseClientSocket(socket: number): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| socket | number | Yes | Indicates the client socket ID, returned by {@link sppAccept} or {@link sppConnect}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
let clientNumber = -1;
function clientSocket(code: BusinessError, number: number) {
  if (code == null || code.code != 0) {
    return;
  }
  console.info(`bluetooth serverSocket Number: ${number}`);
  // The obtained clientNumber is used as the socket ID for subsequent read/write operations on the client.
  clientNumber = number;
}
try {
    bluetoothManager.sppCloseClientSocket(clientNumber);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

