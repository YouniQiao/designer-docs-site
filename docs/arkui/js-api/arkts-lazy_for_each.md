# lazy_for_each

## lazy_for_each

```TypeScript
lazy_for_each(
    dataSource: IDataSource,
    itemGenerator: (item: any, index: number)
```

LazyForEach从提供的数据源中按需迭代数据，并在每次迭代过程中创建相应的组件。当在滚动容器中使用了LazyForEach，框架会根据滚动容器可视区域按需创建组件，当组件滑出可视区域外时，框架会进行组件销毁回收以降低内存占 用。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataSource | IDataSource | Yes | LazyForEach数据源，需要开发者实现相关接口。 原子化服务API（仅ArkTS-Dyn）： 从API version 11开始，该接口支  持在原子化服务中使用。 |
| itemGenerator | (item: any, index: number) => void | Yes | 子组件生成函数，为数组中的每一个数据项创建一个子组件。 说明： - item是当前数据项（可选），index是数据项索引值（可选）。- itemGenerator的函数体必须使用大括号{...}。 - itemGenerator每次迭代只能并且必须生成一个子组件。 - itemGenerator中可以使用if语句，但是必须保  证if语句每个分支都会创建一个相同类型的子组件。 原子化服务API（仅ArkTS-Dyn）： 从API version 11开始，该接口支持在原子化服务中使用。 |
| keyGenerator | (item: any, index: number) => string | No | 键值生成函数，用于给数据源中的每一个数据项生成唯一且固定的键值。修改数据源中的一个数据项若不影响其生成的键值，则对应组件不会被更新，否则此处组件就会被重建更新。  `keyGenerator`参数是可选的，但是，为了使开发框架能够更好地识别数组更改并正确更新组件，建议提供。 默认值为空回调函数。 说明： - item是当前数据项（可选），index是数  据项索引值（可选）。 - `keyGenerator`缺省时，使用默认的键值生成函数，即  `(item: Object, index: number) => { return viewId + '-' + index.toString(); }`，生成键值仅受索引值index影响（viewId在编译器转换过程中  生成，同一个LazyForEach组件内的viewId一致）。 - 为保证`LazyForEach`正确、高效地更新子组件，避免渲染结果异常、渲染效率降低等问题，键值应满足以下条件。 1. 键值具有唯一性，  每个数据项对应的键值互不相同。 2. 键值具有一致性，数据项不变时对应的键值也不变。 原子化服务API（仅ArkTS-Dyn）： 从API version 11开始，该接口支持在原子化服务中使用。 |

```TypeScript
lazy_for_each(
    dataSource: IDataSource,
    itemGenerator: (item: any, index: number)
```

LazyForEach从提供的数据源中按需迭代数据，并在每次迭代过程中创建相应的组件。当在滚动容器中使用了LazyForEach，框架会根据滚动容器可视区域按需创建组件，当组件滑出可视区域外时，框架会进行组件销毁回收以降低内存占 用。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataSource | IDataSource | Yes |  |
| itemGenerator | (item: any, index: number) => void | Yes |  |
| keyGenerator | (item: any, index: number) => string | No |  |
| options | LazyForEachOptions | No |  |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [LazyForEachAttribute](arkts-lazyforeachattribute-c.md) | 支持[拖拽排序]{@link common}属性。 |

### Interfaces

| Name | Description |
| --- | --- |
| [DataAddOperation](arkts-dataaddoperation-i.md) | 添加数据操作。 |
| [DataChangeListener](arkts-datachangelistener-i.md) | 数据变化监听器。 > **说明：** > > DataChangeListener除onDatasetChange以外的方法中，当参数包含index且值为负数时，会默认用0来替换。onDatasetChange中，当单个DataOperation参数包含index且值在数据源 > 索引范围之外（DataAddOperation中index可以等于数据源长度），则对应DataOperation不会生效。 |
| [DataChangeOperation](arkts-datachangeoperation-i.md) | 改变数据操作。 |
| [DataDeleteOperation](arkts-datadeleteoperation-i.md) | 删除数据操作。 |
| [DataExchangeOperation](arkts-dataexchangeoperation-i.md) | 交换数据操作。 |
| [DataMoveOperation](arkts-datamoveoperation-i.md) | 移动数据操作。 |
| [DataReloadOperation](arkts-datareloadoperation-i.md) | 重载所有数据操作。当onDatasetChange含有DataOperationType.RELOAD操作时，其余操作全部失效，框架会自己调用keyGenerator进行键值比对。 |
| [ExchangeIndex](arkts-exchangeindex-i.md) | 定义交换数据的位置。 |
| [ExchangeKey](arkts-exchangekey-i.md) | 定义交换数据的新键值。 |
| [IDataSource](arkts-idatasource-i.md) | LazyForEach的数据源。 |
| [LazyForEachInterface](arkts-lazyforeachinterface-i.md) | > **说明：** 开发者指南见：[LazyForEach开发者指南](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)。 在大量子组件的场景下，LazyForEach与缓存列表项、动态预加载、组件复用等方法配合使用，可以进一步提升滑动帧率并降低应用内存占用。最佳实践请参考 [优化长列表加载慢丢帧问题](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-best-practices-long-list)。 |
| [LazyForEachOptions](arkts-lazyforeachoptions-i.md) | 配置LazyForEach的参数。 |
| [MoveIndex](arkts-moveindex-i.md) | 定义移动数据的位置。 |

### Enums

| Name | Description |
| --- | --- |
| [DataOperationType](arkts-dataoperationtype-e.md) | 枚举类型，数据操作说明。 |
| [LazyForEachCustomComponentFreezeMode](arkts-lazyforeachcustomcomponentfreezemode-e.md) | 冻结模式枚举，用于配置LazyForEach中已移出组件树的缓存自定义节点的冻结行为。 |
| [LazyForEachMemOptStrategy](arkts-lazyforeachmemoptstrategy-e.md) | LazyForEach内存优化策略枚举。 |
| [LazyForEachReleaseStrategy](arkts-lazyforeachreleasestrategy-e.md) | 资源释放策略枚举，用于配置LazyForEach待销毁节点的资源释放策略。 |

### Types

| Name | Description |
| --- | --- |
| [DataOperation](arkts-dataoperation-t.md) | 定义数据操作类型。 > **说明 |

### Constants

| Name | Description |
| --- | --- |
| [LazyForEach](arkts-lazy-for-each-con.md#LazyForEach) | > **说明：** 开发者指南见：[LazyForEach开发者指南](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)。 在大量子组件的场景下，LazyForEach与缓存列表项、动态预加载、组件复用等方法配合使用，可以进一步提升滑动帧率并降低应用内存占用。最佳实践请参考 [优化长列表加载慢丢帧问题](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-best-practices-long-list)。 |

