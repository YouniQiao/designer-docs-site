# SaveSuccessResponse

Represents the information returned by the callback of save. .

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

## 导入模块

```TypeScript
import { distributedDataObject } from '@kit.ArkData';
```

## sessionId

```TypeScript
sessionId: string
```

Unique ID for multi-device collaboration.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

## deviceId

```TypeScript
deviceId: string
```

ID of the device where the distributed data object is stored. The value local indicates a local device.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

## version

```TypeScript
version: int
```

Version of the saved object, which is a non-negative integer.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataObject.DistributedObject

