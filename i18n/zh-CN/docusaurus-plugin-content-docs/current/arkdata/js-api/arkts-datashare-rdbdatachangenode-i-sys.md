# RdbDataChangeNode

Represents the RDB data change result. The data returned by the callback is not larger than 10 MB in size.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { dataShare } from '@kit.ArkData';
```

## data

```TypeScript
data: Array<string>
```

Data of the callback. If an error occurs during callback data processing, the callback will not be triggered.

**类型：** Array<string>

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

## templateId

```TypeScript
templateId: TemplateId
```

ID of the template that triggers the callback.

**类型：** TemplateId

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

## uri

```TypeScript
uri: string
```

URI of the callback.

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

