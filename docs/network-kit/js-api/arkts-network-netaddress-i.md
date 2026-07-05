# NetAddress

Defines a network address.

**Since:** 24

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { connection } from '@ohos.net.connection';
```

## address

```TypeScript
address: string
```

Network address.

**Type:** string

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Communication.NetManager.Core

## family

```TypeScript
family?: number
```

Address family identifier. The value is 1 for IPv4 and 2 for IPv6. The default value is 1.

**Type:** number

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Communication.NetManager.Core

## port

```TypeScript
port?: number
```

Port number. The value ranges from 0 to 65535.

**Type:** number

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Communication.NetManager.Core

