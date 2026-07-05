# DataProxyGetResult

Defines a struct for obtaining the batch operation result of shared configuration.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## 导入模块

```TypeScript
import { dataShare } from '@kit.ArkData';
```

## result

```TypeScript
result: DataProxyErrorCode
```

Operation result code.

**类型：** DataProxyErrorCode

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## value

```TypeScript
value: ValueType | undefined
```

If the operation is successful, the value is the one set in shared configuration; otherwise, the value is undefined.

**类型：** ValueType | undefined

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## uri

```TypeScript
uri: string
```

URI to be operated, with a maximum of 256 bytes. The value is fixed at the format of **"datashareproxy://{*bundleName*}/{*path*}"**, in which **bundleName** indicates the bundle name of the publisher application, and **path** can be set to any value but must be unique in the same application.

**类型：** string

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## allowList

```TypeScript
allowList: string[] | undefined
```

If the operation is successful, the allowlist is the one set in shared configuration; otherwise, the allowlist is undefined. Only the publisher can obtain the allowlist. Other applications can obtain only the value.

**类型：** string[] | undefined

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

