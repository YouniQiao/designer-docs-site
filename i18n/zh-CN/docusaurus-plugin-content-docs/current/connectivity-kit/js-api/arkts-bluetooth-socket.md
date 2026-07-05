# @ohos.bluetooth.socket

Provides methods to operate or manage bluetooth socket connection.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { socket } from '@kit.ConnectivityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getDeviceId](arkts-socket-getdeviceid-f.md#getDeviceId-1) | Obtain the device id in the client socket. |
| [getL2capPsm](arkts-socket-getl2cappsm-f.md#getL2capPsm-1) | Get l2cap socket psm. |
| [getMaxReceiveDataSize](arkts-socket-getmaxreceivedatasize-f.md#getMaxReceiveDataSize-1) | Obtain the maximum data size that can be received through this socket channel. |
| [getMaxTransmitDataSize](arkts-socket-getmaxtransmitdatasize-f.md#getMaxTransmitDataSize-1) | Obtain the maximum data size that can be transmitted through this socket channel. |
| [isConnected](arkts-socket-isconnected-f.md#isConnected-1) | Check whether the current socket connection has been established. |
| [off](arkts-socket-off-f.md#off-1) | Unsubscribe the event reported when data is read from the socket. |
| [offSppRead](arkts-socket-offsppread-f.md#offSppRead-1) | Unsubscribe the event reported when data is read from the socket. |
| [on](arkts-socket-on-f.md#on-1) | Subscribe the event reported when data is read from the socket. |
| [onSppRead](arkts-socket-onsppread-f.md#onSppRead-1) | Subscribe the event reported when data is read from the socket. |
| [sppAccept](arkts-socket-sppaccept-f.md#sppAccept-1) | Waits for a remote device to connect. |
| [sppCloseClientSocket](arkts-socket-sppcloseclientsocket-f.md#sppCloseClientSocket-1) | Disables an spp client socket and releases related resources. |
| [sppCloseServerSocket](arkts-socket-sppcloseserversocket-f.md#sppCloseServerSocket-1) | Disables an spp server socket and releases related resources. |
| [sppConnect](arkts-socket-sppconnect-f.md#sppConnect-1) | Connects to a remote device over the socket. |
| [sppListen](arkts-socket-spplisten-f.md#sppListen-1) | Creates a Bluetooth server listening socket. |
| [sppReadAsync](arkts-socket-sppreadasync-f.md#sppReadAsync-1) | Asynchronous interface for reading data from the socket. |
| [sppWrite](arkts-socket-sppwrite-f.md#sppWrite-1) | Write data through the socket. |
| [sppWriteAsync](arkts-socket-sppwriteasync-f.md#sppWriteAsync-1) | Asynchronous interface for writing data to the socket. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [SppOptions](arkts-socket-sppoptions-i.md) | Describes the spp parameters. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [SppType](arkts-socket-spptype-e.md) | The enum of SPP type. |

