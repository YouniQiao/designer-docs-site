# PublishedItem

Defines the data to publish.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { dataShare } from '@kit.ArkData';
```

## data

```TypeScript
data: string | ArrayBuffer
```

Data to publish. If the data to publish exceeds 20 KB, you are advised to use the data in ArrayBuffer format.

**类型：** string | ArrayBuffer

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

## subscriberId

```TypeScript
subscriberId: string
```

Subscriber ID.

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

## key

```TypeScript
key: string
```

Key of the data to publish.

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

