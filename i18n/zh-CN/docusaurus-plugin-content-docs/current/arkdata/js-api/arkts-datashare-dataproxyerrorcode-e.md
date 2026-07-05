# DataProxyErrorCode

```TypeScript
enum DataProxyErrorCode
```

Enumerates the status code returned by the batch operations of shared configuration.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## SUCCESS

```TypeScript
SUCCESS = 0
```

The operation is successful.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## URI_NOT_EXIST

```TypeScript
URI_NOT_EXIST = 1
```

The URI does not exist or the URI is not subscribed to.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## NO_PERMISSION

```TypeScript
NO_PERMISSION = 2
```

No permission to perform this operation on the URI.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## OVER_LIMIT

```TypeScript
OVER_LIMIT = 3
```

The number of configurations published by the current application exceeds the upper limit of 32.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

