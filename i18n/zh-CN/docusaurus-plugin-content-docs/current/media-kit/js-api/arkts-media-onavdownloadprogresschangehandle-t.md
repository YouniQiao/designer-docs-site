# OnAVDownloadProgressChangeHandle

```TypeScript
type OnAVDownloadProgressChangeHandle = (taskId: string, progress: double) => void
```

Describes the callback invoked for the AVDownloader progress change event.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| taskId | string | 是 | ID of the task whose status changes. |
| progress | double | 是 |  |

