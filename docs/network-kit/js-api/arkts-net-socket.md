# @ohos.net.socket

Provides TCP and UDP Socket APIs.

**Since:** 10

<!--Device-unnamed-declare namespace socket--><!--Device-unnamed-declare namespace socket-End-->

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { socket } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [constructLocalSocketInstance](arkts-network-socket-constructlocalsocketinstance-f.md#constructlocalsocketinstance-1) | Creates a LocalSocket object. |
| [constructLocalSocketServerInstance](arkts-network-socket-constructlocalsocketserverinstance-f.md#constructlocalsocketserverinstance-1) | Creates a LocalSocketServer object. |
| [constructMulticastSocketInstance](arkts-network-socket-constructmulticastsocketinstance-f.md#constructmulticastsocketinstance-1) | Creates a MulticastSocket object. |
| [constructTCPSocketInstance](arkts-network-socket-constructtcpsocketinstance-f.md#constructtcpsocketinstance-1) | Creates a TCPSocket object. |
| [constructTCPSocketServerInstance](arkts-network-socket-constructtcpsocketserverinstance-f.md#constructtcpsocketserverinstance-1) | Creates a TCPSocketServer object. |
| [constructTLSSocketInstance](arkts-network-socket-constructtlssocketinstance-f.md#constructtlssocketinstance-1) | Creates a TLSSocket object. |
| [constructTLSSocketInstance](arkts-network-socket-constructtlssocketinstance-f.md#constructtlssocketinstance-2) | Creates a TLSSocket object with a TCPSocket object. |
| [constructTLSSocketServerInstance](arkts-network-socket-constructtlssocketserverinstance-f.md#constructtlssocketserverinstance-1) | Creates a TLSSocketServer object. |
| [constructUDPSocketInstance](arkts-network-socket-constructudpsocketinstance-f.md#constructudpsocketinstance-1) | Creates a UDPSocket object. |

### Interfaces

| Name | Description |
| --- | --- |
| [ExtraOptionsBase](arkts-network-socket-extraoptionsbase-i.md) |  |
| [LocalAddress](arkts-network-socket-localaddress-i.md) | Defines a local address. |
| [LocalConnectOptions](arkts-network-socket-localconnectoptions-i.md) | Defines LocalSocket connection parameters. |
| [LocalSendOptions](arkts-network-socket-localsendoptions-i.md) | Defines the parameters for sending data over the LocalSocket connection. |
| [LocalSocket](arkts-network-socket-localsocket-i.md) | Defines a LocalSocket connection. |
| [LocalSocketConnection](arkts-network-socket-localsocketconnection-i.md) | Defines the connection of the LocalSocket client and server. |
| [LocalSocketMessageInfo](arkts-network-socket-localsocketmessageinfo-i.md) | Defines the local socket connection information. |
| [LocalSocketServer](arkts-network-socket-localsocketserver-i.md) | Defines a LocalSocket server connection. |
| [MulticastSocket](arkts-network-socket-multicastsocket-i.md) | Defines a UDP MulticastSocket connection. |
| [ProxyOptions](arkts-network-socket-proxyoptions-i.md) | Define parameters for the proxy connection. |
| [SocketMessageInfo](arkts-network-socket-socketmessageinfo-i.md) | Defines the socket connection information. |
| [SocketRemoteInfo](arkts-network-socket-socketremoteinfo-i.md) | Defines information about the socket connection. |
| [SocketStateBase](arkts-network-socket-socketstatebase-i.md) | Defines the status of the socket connection. |
| [TCPConnectOptions](arkts-network-socket-tcpconnectoptions-i.md) | Defines TCPSocket connection parameters. |
| [TCPExtraOptions](arkts-network-socket-tcpextraoptions-i.md) | Defines other properties of the TCPSocket connection. |
| [TCPSendOptions](arkts-network-socket-tcpsendoptions-i.md) | Defines the parameters for sending data over the TCPSocket connection. |
| [TCPSocket](arkts-network-socket-tcpsocket-i.md) | Defines a TCPSocket connection. |
| [TCPSocketConnection](arkts-network-socket-tcpsocketconnection-i.md) | Defines the connection of the TCPSocket client and server. |
| [TCPSocketServer](arkts-network-socket-tcpsocketserver-i.md) | Defines a TCPSocket server connection. |
| [TLSConnectOptions](arkts-network-socket-tlsconnectoptions-i.md) | Defines TLS connection options. |
| [TLSSecureOptions](arkts-network-socket-tlssecureoptions-i.md) | Defines TLS security options. The CA certificate is mandatory, and other parameters are optional. |
| [TLSSocket](arkts-network-socket-tlssocket-i.md) | Defines a TLSSocket connection. |
| [TLSSocketConnection](arkts-network-socket-tlssocketconnection-i.md) | Defines the connection of the TLSSocket client and server. |
| [TLSSocketServer](arkts-network-socket-tlssocketserver-i.md) | Defines a TLSSocketServer server connection. |
| [UDPExtraOptions](arkts-network-socket-udpextraoptions-i.md) | Defines other properties of the UDPSocket connection. |
| [UDPSendOptions](arkts-network-socket-udpsendoptions-i.md) | Defines the parameters for sending data over the UDPSocket connection. |
| [UDPSocket](arkts-network-socket-udpsocket-i.md) | Defines a UDPSocket connection. |

### Enums

| Name | Description |
| --- | --- |
| [Protocol](arkts-network-socket-protocol-e.md) | Enumerates TLS protocol versions. |
| [ProxyTypes](arkts-network-socket-proxytypes-e.md) | Specify proxy types. |

### Types

| Name | Description |
| --- | --- |
| [X509CertRawData](arkts-network-socket-x509certrawdata-t.md) | Deposit certificate |

