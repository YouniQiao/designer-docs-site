# GetDelayData

```TypeScript
type GetDelayData = (type: string) => UnifiedData
```

Defines a function used to obtain a deferred **UnifiedData** object. Currently, it can be used only in the pasteboard application of the same device.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | Identifier of the deferred encapsulation. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| UnifiedData | UnifiedData object. |

