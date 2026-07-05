# EventProcess

```TypeScript
type EventProcess = (event: string, args: Record<string, Object>) => void
```

The general process funcation with an event and arguments.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | string | 是 | request event |
| args | Record&lt;string, Object> | 是 | arguments associated with event |

