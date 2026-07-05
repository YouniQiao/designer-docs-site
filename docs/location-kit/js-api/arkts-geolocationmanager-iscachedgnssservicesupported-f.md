# isCachedGnssServiceSupported

## isCachedGnssServiceSupported

```TypeScript
function isCachedGnssServiceSupported(): boolean
```

Check whether the cached GNSS service is supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if cached service is available, returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 3301000 | The location service is unavailable. |

