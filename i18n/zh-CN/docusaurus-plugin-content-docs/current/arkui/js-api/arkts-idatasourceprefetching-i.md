# IDataSourcePrefetching

继承自[IDataSource]IDataSource。实现该接口，提供具备预取能力的DataSource。

**继承实现关系：** IDataSourcePrefetching继承自：IDataSource。

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { IDataSourcePrefetching,BasicPrefetcher,IPrefetcher } from '@kit.ArkUI';
```

## cancel

```TypeScript
cancel?(index: number): Promise<void> | void
```

取消从数据集中预取指定的元素。该方法可以为同步，也可为异步。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | number | 是 | 取消预取数据项索引值。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise when this API is executed asynchronously; no return value when this API  is executed synchronously. The promise only indicates that the operation is completed and contains no actual  return content. |

## prefetch

```TypeScript
prefetch(index: number): Promise<void> | void
```

从数据集中预取指定的元素。该方法可以为同步，也可为异步。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | number | 是 | 预取数据项索引值。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise when this API is executed asynchronously; no return value when this API  is executed synchronously. The promise only indicates that the operation is completed and contains no actual  return content. |

