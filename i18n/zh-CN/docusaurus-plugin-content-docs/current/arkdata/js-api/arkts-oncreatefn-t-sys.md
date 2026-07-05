# OnCreateFn

```TypeScript
type OnCreateFn = (want: Want, callback: AsyncCallback<void>) => void
```

Callback function called when a datashare extension ability is started for initialization.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Indicates connection information about the datashare extension ability. |
| callback | AsyncCallback&lt;void> | 是 | callback function, no return value. |

