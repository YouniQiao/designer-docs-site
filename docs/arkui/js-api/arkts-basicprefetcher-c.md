# BasicPrefetcher

BasicPrefetcher是IPrefetcher的基础实现。它提供了一种智能数据预取算法，以根据屏幕上可见区域的实时变化和预取持续时间的变化来决定应预取哪些数据项。它还可以根据用户的滚动操作来确定哪些预取请求应该被取消。 BasicPrefetcher对象不支持使用JSON序列化。

**Inheritance:** BasicPrefetcherimplements: IPrefetcher.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { IDataSourcePrefetching,BasicPrefetcher,IPrefetcher } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(dataSource?: IDataSourcePrefetching)
```

传入支持预取的DataSource以绑定到Prefetcher。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataSource | IDataSourcePrefetching | No | 支持预取能力的数据源。 |

## setDataSource

```TypeScript
setDataSource(dataSource: IDataSourcePrefetching): void
```

设置支持预取的数据源以绑定到Prefetcher。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataSource | IDataSourcePrefetching | Yes | 支持预取能力的数据源。 |

## visibleAreaChanged

```TypeScript
visibleAreaChanged(minVisible: number, maxVisible: number): void
```

当可见区域边界发生改变时调用此方法。支持与`List`、`Grid`、`WaterFlow`和`Swiper`组件配合使用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| minVisible | number | Yes | 列表可见区域的上界。 |
| maxVisible | number | Yes | 列表可见区域的下界。 |

