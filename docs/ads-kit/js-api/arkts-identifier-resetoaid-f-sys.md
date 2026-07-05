# resetOAID

## resetOAID

```TypeScript
function resetOAID(): void
```

重置开放匿名设备标识符（OAID）。

**Since:** 10

**System capability:** SystemCapability.Advertising.OAID

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17300001 | System internal error. |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 17300002 | Not in the trust list. [since 12] |

**Example**

```TypeScript
import { identifier } from '@kit.AdsKit';

identifier.resetOAID();

```

