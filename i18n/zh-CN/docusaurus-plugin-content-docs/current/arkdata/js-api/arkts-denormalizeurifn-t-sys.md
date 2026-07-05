# DenormalizeUriFn

```TypeScript
type DenormalizeUriFn = (uri: string, callback: AsyncCallback<string>) => void
```

Callback function called when converting the given normalized URI into a denormalized URI.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | Indicates the uri to denormalize. |
| callback | AsyncCallback&lt;string> | 是 | Returns the denormalized {@code uri} object if the denormalization is  successful; returns the original {@code uri} passed to this method if  there is nothing to do; returns {@code null} if the data identified by  the original {@code uri} cannot be found in the current environment. |

