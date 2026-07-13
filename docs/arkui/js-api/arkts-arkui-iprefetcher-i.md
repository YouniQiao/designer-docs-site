# IPrefetcher

Provides prefetching capabilities.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { IDataSourcePrefetching, BasicPrefetcher, IPrefetcher } from '@kit.ArkUI';
```

## setDataSource

```TypeScript
setDataSource(dataSource: IDataSourcePrefetching): void
```

Sets the prefetching-capable data source to bind to the **Prefetcher**.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataSource | IDataSourcePrefetching | Yes | Prefetching-capable data source. |

## visibleAreaChanged

```TypeScript
visibleAreaChanged(minVisible: number, maxVisible: number): void
```

Called when the boundaries of the visible area change. This API works with the **List**, **Grid**, **WaterFlow**,
and **Swiper** components.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| minVisible | number | Yes | Upper bound of the visible area. |
| maxVisible | number | Yes | Lower bound of the visible area. |

