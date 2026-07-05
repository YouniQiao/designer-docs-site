# NormalizeUriFn

```TypeScript
type NormalizeUriFn = (uri: string, callback: AsyncCallback<string>) => void
```

Callback function called when converting the given URI into a normalized URI.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | Indicates the uri to normalize. |
| callback | AsyncCallback&lt;string> | 是 | Returns the normalized uri if the data share supports URI normalization. |

