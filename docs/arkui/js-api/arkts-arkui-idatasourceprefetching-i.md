# IDataSourcePrefetching

Extends the [IDataSource](../arkts-components/arkts-arkui-idatasource-i.md) API to add data prefetching capability to your data source.

**Inheritance/Implementation:** IDataSourcePrefetching extends [IDataSource](../arkts-components/arkts-arkui-idatasource-i.md)

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { IDataSourcePrefetching, BasicPrefetcher, IPrefetcher } from '@kit.ArkUI';
```

## cancel

```TypeScript
cancel?(index: number): Promise<void> | void
```

Cancels the prefetching of a specified data item from the dataset. This API can be either synchronous or asynchronous.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the data item to cancel prefetching for. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise when this API is executed asynchronously; no return value when this APIis executed synchronously. The promise only indicates that the operation is completed and contains no actualreturn content. |

## prefetch

```TypeScript
prefetch(index: number): Promise<void> | void
```

Prefetches a specified data item from the dataset. This API can be either synchronous or asynchronous.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the data item to prefetch. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise when this API is executed asynchronously; no return value when this APIis executed synchronously. The promise only indicates that the operation is completed and contains no actualreturn content. |

