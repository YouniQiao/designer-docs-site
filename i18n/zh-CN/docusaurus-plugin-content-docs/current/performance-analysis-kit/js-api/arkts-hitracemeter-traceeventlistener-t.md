# TraceEventListener

```TypeScript
type TraceEventListener = (traceStatus: boolean) => void
```

Defines a callback to listen for whether the trace capture is enabled.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| traceStatus | boolean | 是 | Whether the trace capture is enabled for the current application. The value  true indicates that the trace capture is enabled, and false indicates the opposite. |

