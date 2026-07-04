# DataReceiveProgressInfo

This interface is used to obtain the progress information of file upload or download.

**Since:** 15

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { http } from '@ohos.net.http';
```

## receiveSize

```TypeScript
receiveSize: number
```

Number of data bytes received.

**Type:** number

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.Communication.NetStack

## totalSize

```TypeScript
totalSize: number
```

Total number of bytes to receive.

**Type:** number

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.Communication.NetStack

