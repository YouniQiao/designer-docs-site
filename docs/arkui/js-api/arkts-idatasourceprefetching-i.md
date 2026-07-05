# IDataSourcePrefetching

继承自[IDataSource]IDataSource。实现该接口，提供具备预取能力的DataSource。

**Inheritance:** IDataSourcePrefetchingextends: IDataSource.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { IDataSourcePrefetching,BasicPrefetcher,IPrefetcher } from '@kit.ArkUI';
```

## cancel

```TypeScript
cancel?(index: number): Promise<void> | void
```

取消从数据集中预取指定的元素。该方法可以为同步，也可为异步。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 取消预取数据项索引值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise when this API is executed asynchronously; no return value when this API  is executed synchronously. The promise only indicates that the operation is completed and contains no actual  return content. |

## prefetch

```TypeScript
prefetch(index: number): Promise<void> | void
```

从数据集中预取指定的元素。该方法可以为同步，也可为异步。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 预取数据项索引值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise when this API is executed asynchronously; no return value when this API  is executed synchronously. The promise only indicates that the operation is completed and contains no actual  return content. |

