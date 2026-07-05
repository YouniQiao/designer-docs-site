# AppEventPackage

Defines parameters of an **AppEventPackage** object. This API is used to obtain detail information about an event package, which is obtained using the [takeNext]hiAppEvent.AppEventPackageHolder#takeNext() API.

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## Modules to Import

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## data

```TypeScript
data: string[]
```

Event data in the event package. **Atomic service API**: This parameter can be used in atomic services since API version 11.

**Type:** string[]

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## size

```TypeScript
size: int
```

Event size of the event package, in bytes. **Atomic service API**: This parameter can be used in atomic services since API version 11.

**Type:** int

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## packageId

```TypeScript
packageId: int
```

Event package ID, which is named from **0** in ascending order. **Atomic service API**: This parameter can be used in atomic services since API version 11.

**Type:** int

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## row

```TypeScript
row: int
```

Number of events in the event package. **Atomic service API**: This parameter can be used in atomic services since API version 11.

**Type:** int

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## appEventInfos

```TypeScript
appEventInfos: Array<AppEventInfo>
```

Event object group. **Atomic service API**: This parameter can be used in atomic services since API version 12.

**Type:** Array<AppEventInfo>

**Since:** 12

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

