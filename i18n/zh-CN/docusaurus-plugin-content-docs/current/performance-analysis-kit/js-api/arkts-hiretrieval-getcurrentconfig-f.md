# getCurrentConfig

## getCurrentConfig

```TypeScript
function getCurrentConfig(): HiRetrievalConfig
```

Query the current HiRetrieval config.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiRetrieval

**返回值：**

| 类型 | 说明 |
| --- | --- |
| HiRetrievalConfig | Returns the current HiRetrieval config, an empty HiRetrievalConfig will be returned  if the result of invoking isParticipant function is false. |

