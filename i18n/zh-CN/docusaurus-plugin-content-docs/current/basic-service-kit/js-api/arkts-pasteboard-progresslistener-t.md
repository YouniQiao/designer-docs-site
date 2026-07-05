# ProgressListener

```TypeScript
type ProgressListener = (progress: ProgressInfo) => void
```

Defines a listener for progress data changes. If the default progress indicator is not used, you can set this API to obtain the paste progress.

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| progress | ProgressInfo | 是 | Defines the progress information. This information is reported only when  [ProgressIndicator]pasteboard.ProgressIndicator is set to NONE. |

