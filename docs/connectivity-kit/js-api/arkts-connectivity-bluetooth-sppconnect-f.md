# sppConnect

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

<a id="sppconnect"></a>
## sppConnect

```TypeScript
function sppConnect(device: string, option: SppOption, callback: AsyncCallback<number>): void
```

Connects to a remote device over the socket.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** sppConnect

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-bluetooth-function sppConnect(device: string, option: SppOption, callback: AsyncCallback<number>): void--><!--Device-bluetooth-function sppConnect(device: string, option: SppOption, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | string | Yes | The address of the remote device to connect. |
| option | [SppOption](arkts-connectivity-bluetoothmanager-sppoption-i.md) | Yes | Indicates the connect parameters {@link SppOption}. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return a client socket ID. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
let clientNumber = -1;
function clientSocket(code : BusinessError, number : number) {
  if (code == null || code.code != 0) {
    return;
  }
  console.info(`bluetooth serverSocket Number: ${number}`);
  // The obtained clientNumber is used as the socket ID for subsequent read/write operations on the client.
  clientNumber = number;
}
let sppOption : bluetooth.SppOption = {uuid: '00001810-0000-1000-8000-00805F9B34FB', secure: false, type: 0};
bluetooth.sppConnect('XX:XX:XX:XX:XX:XX', sppOption, clientSocket);

```

