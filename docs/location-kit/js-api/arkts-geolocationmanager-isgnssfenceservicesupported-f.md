# isGnssFenceServiceSupported

## isGnssFenceServiceSupported

```TypeScript
function isGnssFenceServiceSupported(): boolean
```

Check whether the GNSS fence service is supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if GNSS fence service is available, returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 3301000 | The location service is unavailable. |

