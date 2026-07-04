# participate

## Modules to Import

```TypeScript
import { hiRetrieval } from '@ohos.hiviewdfx.hiRetrieval';
```

## participate

```TypeScript
function participate(config: HiRetrievalConfig): void
```

Participate the HiRetrieval project with given HiRetrievalConfig.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.HiviewDFX.HiRetrieval

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | HiRetrievalConfig | Yes | The config set by the developers. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 36000001 | Initialization error.Possibly caused by invoking this function before invoking init function. |

