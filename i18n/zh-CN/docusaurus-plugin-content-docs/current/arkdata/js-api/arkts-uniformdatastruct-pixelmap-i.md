# PixelMap

Represents data of the pixel map type defined by the system.

**起始版本：** 15

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { uniformDataStruct } from '@kit.ArkData';
```

## uniformDataType

```TypeScript
readonly uniformDataType: 'openharmony.pixel-map'
```

Uniform data type, which has a fixed value of **openharmony.pixel-map**. For details, see [UniformDataType](arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType).

**类型：** 'openharmony.pixel-map'

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## details

```TypeScript
details?: Record<string, int | long | double | string | Uint8Array>
```

Object of the dictionary type used to describe the icon. The key is of the string type, and the value can be a number, a string, or a Uint8Array. By default, it is an empty dictionary object.

**类型：** Record<string, int | long | double | string | Uint8Array>

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## pixelMap

```TypeScript
pixelMap: image.PixelMap
```

Binary data of the pixel map.

**类型：** image.PixelMap

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

