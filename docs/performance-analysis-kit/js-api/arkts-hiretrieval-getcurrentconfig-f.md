# getCurrentConfig

## getCurrentConfig

```TypeScript
function getCurrentConfig(): HiRetrievalConfig
```

Query the current HiRetrieval config.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiRetrieval

**Return value:**

| Type | Description |
| --- | --- |
| HiRetrievalConfig | Returns the current HiRetrieval config, an empty HiRetrievalConfig will be returned  if the result of invoking isParticipant function is false. |

