# @ohos.net.socket

Provides TCP and UDP Socket APIs.

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { socket } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [constructLocalSocketInstance](arkts-socket-constructlocalsocketinstance-f.md#constructLocalSocketInstance-1) | Creates a LocalSocket object. |
| [constructLocalSocketServerInstance](arkts-socket-constructlocalsocketserverinstance-f.md#constructLocalSocketServerInstance-1) | Creates a LocalSocketServer object. |
| [constructMulticastSocketInstance](arkts-socket-constructmulticastsocketinstance-f.md#constructMulticastSocketInstance-1) | Creates a MulticastSocket object. |
| [constructTCPSocketInstance](arkts-socket-constructtcpsocketinstance-f.md#constructTCPSocketInstance-1) | Creates a TCPSocket object. |
| [constructTCPSocketServerInstance](arkts-socket-constructtcpsocketserverinstance-f.md#constructTCPSocketServerInstance-1) | Creates a TCPSocketServer object. |
| [constructTLSSocketInstance](arkts-socket-constructtlssocketinstance-f.md#constructTLSSocketInstance-1) | Creates a TLSSocket object. |
| [constructTLSSocketInstance](arkts-socket-constructtlssocketinstance-f.md#constructTLSSocketInstance-2) | Creates a TLSSocket object with a TCPSocket object. |
| [constructTLSSocketServerInstance](arkts-socket-constructtlssocketserverinstance-f.md#constructTLSSocketServerInstance-1) | Creates a TLSSocketServer object. |
| [constructUDPSocketInstance](arkts-socket-constructudpsocketinstance-f.md#constructUDPSocketInstance-1) | Creates a UDPSocket object. |

### Interfaces

| Name | Description |
| --- | --- |
| [ExtraOptionsBase](arkts-socket-extraoptionsbase-i.md) |  |
| [LocalAddress](arkts-socket-localaddress-i.md) | Defines a local address. |
| [LocalConnectOptions](arkts-socket-localconnectoptions-i.md) | Defines LocalSocket connection parameters. |
| [LocalSendOptions](arkts-socket-localsendoptions-i.md) | Defines the parameters for sending data over the LocalSocket connection. |
| [LocalSocket](arkts-socket-localsocket-i.md) | Defines a LocalSocket connection. |
| [LocalSocketConnection](arkts-socket-localsocketconnection-i.md) | Defines the connection of the LocalSocket client and server. |
| [LocalSocketMessageInfo](arkts-socket-localsocketmessageinfo-i.md) | Defines the local socket connection information. |
| [LocalSocketServer](arkts-socket-localsocketserver-i.md) | Defines a LocalSocket server connection. |
| [MulticastSocket](arkts-socket-multicastsocket-i.md) | Defines a UDP MulticastSocket connection. |
| [ProxyOptions](arkts-socket-proxyoptions-i.md) | Define parameters for the proxy connection. |
| [SocketMessageInfo](arkts-socket-socketmessageinfo-i.md) | Defines the socket connection information. |
| [SocketRemoteInfo](arkts-socket-socketremoteinfo-i.md) | Defines information about the socket connection. |
| [SocketStateBase](arkts-socket-socketstatebase-i.md) | Defines the status of the socket connection. |
| [TCPConnectOptions](arkts-socket-tcpconnectoptions-i.md) | Defines TCPSocket connection parameters. |
| [TCPExtraOptions](arkts-socket-tcpextraoptions-i.md) | Defines other properties of the TCPSocket connection. |
| [TCPSendOptions](arkts-socket-tcpsendoptions-i.md) | Defines the parameters for sending data over the TCPSocket connection. |
| [TCPSocket](arkts-socket-tcpsocket-i.md) | Defines a TCPSocket connection. |
| [TCPSocketConnection](arkts-socket-tcpsocketconnection-i.md) | Defines the connection of the TCPSocket client and server. |
| [TCPSocketServer](arkts-socket-tcpsocketserver-i.md) | Defines a TCPSocket server connection. |
| [TLSConnectOptions](arkts-socket-tlsconnectoptions-i.md) | Defines TLS connection options. |
| [TLSSecureOptions](arkts-socket-tlssecureoptions-i.md) | Defines TLS security options. The CA certificate is mandatory, and other parameters are optional. |
| [TLSSocket](arkts-socket-tlssocket-i.md) | Defines a TLSSocket connection. |
| [TLSSocketConnection](arkts-socket-tlssocketconnection-i.md) | Defines the connection of the TLSSocket client and server. |
| [TLSSocketServer](arkts-socket-tlssocketserver-i.md) | Defines a TLSSocketServer server connection. |
| [UDPExtraOptions](arkts-socket-udpextraoptions-i.md) | Defines other properties of the UDPSocket connection. |
| [UDPSendOptions](arkts-socket-udpsendoptions-i.md) | Defines the parameters for sending data over the UDPSocket connection. |
| [UDPSocket](arkts-socket-udpsocket-i.md) | Defines a UDPSocket connection. |

### Types

| Name | Description |
| --- | --- |
| [X509CertRawData](arkts-socket-x509certrawdata-t.md) | Deposit certificate |

### Enums

| Name | Description |
| --- | --- |
| [Protocol](arkts-socket-protocol-e.md) | Enumerates TLS protocol versions. |
| [ProxyTypes](arkts-socket-proxytypes-e.md) | Specify proxy types. |

