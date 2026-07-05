# SystemDefinedPixelMap

Represents the image data type corresponding to [PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md#image) defined by the system. It is a child class of [SystemDefinedRecord](arkts-arkdata-systemdefinedrecord-c.md#systemdefinedrecord) and holds only binary data of **PixelMap**.

**Inheritance/Implementation:** SystemDefinedPixelMap extends [SystemDefinedRecord](arkts-arkdata-systemdefinedrecord-c.md#systemdefinedrecord)

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@ohos.data.unifiedDataChannel';
```

## rawData

```TypeScript
set rawData(value: Uint8Array)
```

Indicates the raw data of pixel map

**Type:** Uint8Array

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

