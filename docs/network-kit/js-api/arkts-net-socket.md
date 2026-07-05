# @ohos.net.socket

Provides TCP and UDP Socket APIs.

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { socket } from '@ohos.net.socket';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [constructLocalSocketInstance](arkts-network-constructlocalsocketinstance-f.md#constructlocalsocketinstance-1) | Creates a LocalSocket object. |
| [constructLocalSocketServerInstance](arkts-network-constructlocalsocketserverinstance-f.md#constructlocalsocketserverinstance-1) | Creates a LocalSocketServer object. |
| [constructMulticastSocketInstance](arkts-network-constructmulticastsocketinstance-f.md#constructmulticastsocketinstance-1) | Creates a MulticastSocket object. |
| [constructTCPSocketInstance](arkts-network-constructtcpsocketinstance-f.md#constructtcpsocketinstance-1) | Creates a TCPSocket object. |
| [constructTCPSocketServerInstance](arkts-network-constructtcpsocketserverinstance-f.md#constructtcpsocketserverinstance-1) | Creates a TCPSocketServer object. |
| [constructTLSSocketInstance](arkts-network-constructtlssocketinstance-f.md#constructtlssocketinstance-1) | Creates a TLSSocket object. |
| [constructTLSSocketInstance](arkts-network-constructtlssocketinstance-f.md#constructtlssocketinstance-2) | Creates a TLSSocket object with a TCPSocket object. |
| [constructTLSSocketServerInstance](arkts-network-constructtlssocketserverinstance-f.md#constructtlssocketserverinstance-1) | Creates a TLSSocketServer object. |
| [constructUDPSocketInstance](arkts-network-constructudpsocketinstance-f.md#constructudpsocketinstance-1) | Creates a UDPSocket object. |

### Interfaces

| Name | Description |
| --- | --- |
| [ExtraOptionsBase](arkts-network-extraoptionsbase-i.md) |  |
| [LocalAddress](arkts-network-localaddress-i.md) | Defines a local address. |
| [LocalConnectOptions](arkts-network-localconnectoptions-i.md) | Defines LocalSocket connection parameters. |
| [LocalSendOptions](arkts-network-localsendoptions-i.md) | Defines the parameters for sending data over the LocalSocket connection. |
| [LocalSocket](arkts-network-localsocket-i.md) | Defines a LocalSocket connection. |
| [LocalSocketConnection](arkts-network-localsocketconnection-i.md) | Defines the connection of the LocalSocket client and server. |
| [LocalSocketMessageInfo](arkts-network-localsocketmessageinfo-i.md) | Defines the local socket connection information. |
| [LocalSocketServer](arkts-network-localsocketserver-i.md) | Defines a LocalSocket server connection. |
| [MulticastSocket](arkts-network-multicastsocket-i.md) | Defines a UDP MulticastSocket connection. |
| [ProxyOptions](arkts-network-proxyoptions-i.md) | Define parameters for the proxy connection. |
| [SocketMessageInfo](arkts-network-socketmessageinfo-i.md) | Defines the socket connection information. |
| [SocketRemoteInfo](arkts-network-socketremoteinfo-i.md) | Defines information about the socket connection. |
| [SocketStateBase](arkts-network-socketstatebase-i.md) | Defines the status of the socket connection. |
| [TCPConnectOptions](arkts-network-tcpconnectoptions-i.md) | Defines TCPSocket connection parameters. |
| [TCPExtraOptions](arkts-network-tcpextraoptions-i.md) | Defines other properties of the TCPSocket connection. |
| [TCPSendOptions](arkts-network-tcpsendoptions-i.md) | Defines the parameters for sending data over the TCPSocket connection. |
| [TCPSocket](arkts-network-tcpsocket-i.md) | Defines a TCPSocket connection. |
| [TCPSocketConnection](arkts-network-tcpsocketconnection-i.md) | Defines the connection of the TCPSocket client and server. |
| [TCPSocketServer](arkts-network-tcpsocketserver-i.md) | Defines a TCPSocket server connection. |
| [TLSConnectOptions](arkts-network-tlsconnectoptions-i.md) | Defines TLS connection options. |
| [TLSSecureOptions](arkts-network-tlssecureoptions-i.md) | Defines TLS security options. The CA certificate is mandatory, and other parameters are optional. |
| [TLSSocket](arkts-network-tlssocket-i.md) | Defines a TLSSocket connection. |
| [TLSSocketConnection](arkts-network-tlssocketconnection-i.md) | Defines the connection of the TLSSocket client and server. |
| [TLSSocketServer](arkts-network-tlssocketserver-i.md) | Defines a TLSSocketServer server connection. |
| [UDPExtraOptions](arkts-network-udpextraoptions-i.md) | Defines other properties of the UDPSocket connection. |
| [UDPSendOptions](arkts-network-udpsendoptions-i.md) | Defines the parameters for sending data over the UDPSocket connection. |
| [UDPSocket](arkts-network-udpsocket-i.md) | Defines a UDPSocket connection. |

### Enums

| Name | Description |
| --- | --- |
| [Protocol](arkts-network-protocol-e.md) | Enumerates TLS protocol versions. |
| [ProxyTypes](arkts-network-proxytypes-e.md) | Specify proxy types. |

### Types

| Name | Description |
| --- | --- |
| [X509CertRawData](arkts-network-x509certrawdata-t.md) | Deposit certificate |

