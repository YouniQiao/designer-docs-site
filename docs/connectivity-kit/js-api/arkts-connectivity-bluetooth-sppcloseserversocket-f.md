# sppCloseServerSocket

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

<a id="sppcloseserversocket"></a>
## sppCloseServerSocket

```TypeScript
function sppCloseServerSocket(socket: number): void
```

Disables an spp server socket and releases related resources.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** sppCloseServerSocket

<!--Device-bluetooth-function sppCloseServerSocket(socket: number): void--><!--Device-bluetooth-function sppCloseServerSocket(socket: number): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| socket | number | Yes | Indicates the server socket ID, returned by {@link sppListen}. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
let serverNumber = -1;
function serverSocket(code : BusinessError, number : number) {
  console.info(`bluetooth error code: ${code.code}`);
  if (code.code == 0) {
    console.info(`bluetooth serverSocket Number: ${number}`);
    serverNumber = number;
  }
}
bluetooth.sppCloseServerSocket(serverNumber);

```

