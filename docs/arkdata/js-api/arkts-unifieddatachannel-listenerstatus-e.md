# ListenerStatus

```TypeScript
enum ListenerStatus
```

Enumerates the status codes returned when data is obtained from the UDMF.

**Since:** 15

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## FINISHED

```TypeScript
FINISHED = 0
```

The task is completed.

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## PROCESSING

```TypeScript
PROCESSING = 1
```

The task is being processed.

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## CANCELED

```TypeScript
CANCELED = 2
```

The task is canceled.

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## INNER_ERROR

```TypeScript
INNER_ERROR = 200
```

An internal error occurs.

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## INVALID_PARAMETERS

```TypeScript
INVALID_PARAMETERS = 201
```

[GetDataParams]unifiedDataChannel.GetDataParams contains invalid parameters.

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## DATA_NOT_FOUND

```TypeScript
DATA_NOT_FOUND = 202
```

No data is obtained.

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## SYNC_FAILED

```TypeScript
SYNC_FAILED = 203
```

Failed to sync data.

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## COPY_FILE_FAILED

```TypeScript
COPY_FILE_FAILED = 204
```

Failed to copy data.

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

