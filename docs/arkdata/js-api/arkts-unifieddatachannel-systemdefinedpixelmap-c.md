# SystemDefinedPixelMap

Represents the image data type corresponding to [PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md#image) defined by the system. It is a child class of [SystemDefinedRecord]unifiedDataChannel.SystemDefinedRecord and holds only binary data of **PixelMap**.

**Inheritance:** SystemDefinedPixelMapextends: SystemDefinedRecord.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## rawData

```TypeScript
get rawData(): Uint8Array
```

Indicates the raw data of pixel map

**Type:** Uint8Array

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set rawData(value: Uint8Array)
```

Indicates the raw data of pixel map

**Type:** Uint8Array

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

