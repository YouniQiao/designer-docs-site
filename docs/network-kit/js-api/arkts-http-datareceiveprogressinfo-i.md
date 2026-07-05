# DataReceiveProgressInfo

This interface is used to obtain the progress information of file upload or download.

**Since:** 15

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { http } from '@kit.NetworkKit';
```

## totalSize

```TypeScript
totalSize: int
```

Total number of bytes to receive.

**Type:** int

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

## receiveSize

```TypeScript
receiveSize: int
```

Number of data bytes received.

**Type:** int

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

