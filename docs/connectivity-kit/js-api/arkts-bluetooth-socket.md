# @ohos.bluetooth.socket

Provides methods to operate or manage bluetooth socket connection.

**Since:** 10

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { socket } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getDeviceId](arkts-connectivity-getdeviceid-f.md#getdeviceid-1) | Obtain the device id in the client socket. |
| [getL2capPsm](arkts-connectivity-getl2cappsm-f.md#getl2cappsm-1) | Get l2cap socket psm. |
| [getMaxReceiveDataSize](arkts-connectivity-getmaxreceivedatasize-f.md#getmaxreceivedatasize-1) | Obtain the maximum data size that can be received through this socket channel. |
| [getMaxTransmitDataSize](arkts-connectivity-getmaxtransmitdatasize-f.md#getmaxtransmitdatasize-1) | Obtain the maximum data size that can be transmitted through this socket channel. |
| [isConnected](arkts-connectivity-isconnected-f.md#isconnected-1) | Check whether the current socket connection has been established. |
| [off](arkts-connectivity-off-f.md#off-1) | Unsubscribe the event reported when data is read from the socket. |
| [on](arkts-connectivity-on-f.md#on-1) | Subscribe the event reported when data is read from the socket. |
| [sppAccept](arkts-connectivity-sppaccept-f.md#sppaccept-1) | Waits for a remote device to connect. |
| [sppCloseClientSocket](arkts-connectivity-sppcloseclientsocket-f.md#sppcloseclientsocket-1) | Disables an spp client socket and releases related resources. |
| [sppCloseServerSocket](arkts-connectivity-sppcloseserversocket-f.md#sppcloseserversocket-1) | Disables an spp server socket and releases related resources. |
| [sppConnect](arkts-connectivity-sppconnect-f.md#sppconnect-1) | Connects to a remote device over the socket. |
| [sppListen](arkts-connectivity-spplisten-f.md#spplisten-1) | Creates a Bluetooth server listening socket. |
| [sppReadAsync](arkts-connectivity-sppreadasync-f.md#sppreadasync-1) | Asynchronous interface for reading data from the socket. |
| [sppWrite](arkts-connectivity-sppwrite-f.md#sppwrite-1) | Write data through the socket. |
| [sppWriteAsync](arkts-connectivity-sppwriteasync-f.md#sppwriteasync-1) | Asynchronous interface for writing data to the socket. |

### Interfaces

| Name | Description |
| --- | --- |
| [SppOptions](arkts-connectivity-sppoptions-i.md) | Describes the spp parameters. |

### Enums

| Name | Description |
| --- | --- |
| [SppType](arkts-connectivity-spptype-e.md) | The enum of SPP type. |

