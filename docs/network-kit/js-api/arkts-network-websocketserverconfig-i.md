# WebSocketServerConfig

Defines parameters for a WebSocket Server.

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { webSocket } from '@kit.NetworkKit';
```

## maxConcurrentClientsNumber

```TypeScript
maxConcurrentClientsNumber: number
```

Maximum number of concurrent clients. When it's reached, the server will reject new connections.

**Type:** number

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## maxConnectionsForOneClient

```TypeScript
maxConnectionsForOneClient: number
```

Maximum number of one client's connections. When it's reached, the server will reject new connections.

**Type:** number

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## protocol

```TypeScript
protocol?: string
```

Self defined protocol.

**Type:** string

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## serverCert

```TypeScript
serverCert?: ServerCert
```

Server cert.

**Type:** ServerCert

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## serverIP

```TypeScript
serverIP?: string
```

Network card that the server listens on.
The server listens on this specific address. It's 0.0.0.0 by default.

**Type:** string

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## serverPort

```TypeScript
serverPort: number
```

Port number that the server listens on.

**Type:** number

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

