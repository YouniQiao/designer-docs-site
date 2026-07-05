# SystemDefinedRecord

Represents specific data types defined by OpenHarmony. It is a child class of [UnifiedRecord]unifiedDataChannel.UnifiedRecord and a base class of OpenHarmony-specific data types. You are advised to use the child class of **SystemDefinedRecord**, for example, [SystemDefinedForm]unifiedDataChannel.SystemDefinedForm, [SystemDefinedAppItem]unifiedDataChannel.SystemDefinedAppItem, and [SystemDefinedPixelMap]unifiedDataChannel.SystemDefinedPixelMap, to describe OpenHarmony-specific data.

**继承实现关系：** SystemDefinedRecord继承自：UnifiedRecord。

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## details

```TypeScript
details?: Record<string, int | long | double | string | Uint8Array>
```

A dictionary type object, where the key is of the string type, and the value can be a number, a string, or a Uint 8Array. The default value is an empty dictionary object.

**类型：** Record<string, int | long | double | string | Uint8Array>

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
get details(): Record<string, int | long | double | string | Uint8Array> | undefined
```

Indicates the details of system defined data

**类型：** Record<string, int | long | double | string | Uint8Array>

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set details(value: Record<string, int | long | double | string | Uint8Array> | undefined)
```

Indicates the details of system defined data

**类型：** Record<string, int | long | double | string | Uint8Array>

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

