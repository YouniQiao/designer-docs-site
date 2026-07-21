# BasicPrefetcher

**BasicPrefetcher** is a fundamental implementation of **IPrefetcher**. It offers an intelligent data prefetching algorithm that decides the data items to prefetch based on real-time changes in the visible area on the screen and variations in the prefetch duration. It can also determine the prefetch requests to be canceled based on the user's scrolling actions.

**BasicPrefetcher** objects do not support JSON serialization.

**Inheritance/Implementation:** BasicPrefetcher implements [IPrefetcher](arkts-arkui-arkui-prefetcher-iprefetcher-i.md)

**Since:** 12

<!--Device-unnamed-export class BasicPrefetcher implements IPrefetcher--><!--Device-unnamed-export class BasicPrefetcher implements IPrefetcher-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { IDataSourcePrefetching, BasicPrefetcher, IPrefetcher } from '@kit.ArkUI';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(dataSource?: IDataSourcePrefetching)
```

A constructor used to create a prefetching-capable data source to bind to the **Prefetcher**.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BasicPrefetcher-constructor(dataSource?: IDataSourcePrefetching)--><!--Device-BasicPrefetcher-constructor(dataSource?: IDataSourcePrefetching)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataSource | [IDataSourcePrefetching](arkts-arkui-arkui-prefetcher-idatasourceprefetching-i.md) | No | Prefetching-capable data source. |

<a id="setdatasource"></a>
## setDataSource

```TypeScript
setDataSource(dataSource: IDataSourcePrefetching): void
```

Sets the prefetching-capable data source to bind to the **Prefetcher**.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BasicPrefetcher-setDataSource(dataSource: IDataSourcePrefetching): void--><!--Device-BasicPrefetcher-setDataSource(dataSource: IDataSourcePrefetching): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataSource | [IDataSourcePrefetching](arkts-arkui-arkui-prefetcher-idatasourceprefetching-i.md) | Yes | Prefetching-capable data source. |

<a id="visibleareachanged"></a>
## visibleAreaChanged

```TypeScript
visibleAreaChanged(minVisible: number, maxVisible: number): void
```

Called when the boundaries of the visible area change. This API works with the **List**, **Grid**, **WaterFlow**,and **Swiper** components.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BasicPrefetcher-visibleAreaChanged(minVisible: number, maxVisible: number): void--><!--Device-BasicPrefetcher-visibleAreaChanged(minVisible: number, maxVisible: number): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| minVisible | number | Yes | Upper bound of the visible area. |
| maxVisible | number | Yes | Lower bound of the visible area. |

