# DataOperation

```TypeScript
declare type DataOperation =
  DataAddOperation | DataDeleteOperation | DataChangeOperation | DataMoveOperation | DataExchangeOperation | DataReloadOperation
```

定义数据操作类型。 > **说明

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

| Type | Description |
| --- | --- |
| DataAddOperation | Represents Represents Represents Represents Represents Represents Represents 添加单个数据。 |
| DataDeleteOperation | Represents Represents Represents Represents Represents Represents Represents 删除单个数据。 |
| DataChangeOperation | Represents Represents Represents Represents Represents Represents Represents 执行单个数据的插入、更新或删除。 |
| DataMoveOperation | Represents Represents Represents Represents Represents Represents Represents 移动单个数据。 |
| DataExchangeOperation | Represents Represents Represents Represents Represents Represents Represents 交换单个数据。 |
| DataReloadOperation | Represents Represents Represents Represents Represents Represents Represents 重载所有数据。 |

