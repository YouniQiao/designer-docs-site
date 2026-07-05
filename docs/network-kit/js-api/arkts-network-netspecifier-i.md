# NetSpecifier

Provides an instance that bear data network capabilities.

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { connection } from '@ohos.net.connection';
```

## bearerPrivateIdentifier

```TypeScript
bearerPrivateIdentifier?: string
```

Network identifier, the identifier for Wi Fi networks is "wifi", and the identifier for cellular networks is "simId1" (corresponding to SIM card 1).

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetManager.Core

## netCapabilities

```TypeScript
netCapabilities: NetCapabilities
```

The transmission capacity and support of the network's global proxy storage data network.

**Type:** NetCapabilities

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetManager.Core

