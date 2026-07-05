# SystemDefinedPixelMap

Represents the image data type corresponding to [PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md#image) defined by the system. It is a child class of [SystemDefinedRecord]unifiedDataChannel.SystemDefinedRecord and holds only binary data of **PixelMap**.

**继承实现关系：** SystemDefinedPixelMap继承自：SystemDefinedRecord。

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## rawData

```TypeScript
get rawData(): Uint8Array
```

Indicates the raw data of pixel map

**类型：** Uint8Array

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set rawData(value: Uint8Array)
```

Indicates the raw data of pixel map

**类型：** Uint8Array

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

