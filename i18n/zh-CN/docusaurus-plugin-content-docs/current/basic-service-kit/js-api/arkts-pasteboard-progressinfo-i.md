# ProgressInfo

Defines the progress information. This information is reported only when [ProgressIndicator]pasteboard.ProgressIndicator is set to **NONE**.

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.Pasteboard

## 导入模块

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

## progress

```TypeScript
progress: int
```

If the progress indicator provided by the system is not used, the system reports the progress percentage of the paste task.

**类型：** int

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

