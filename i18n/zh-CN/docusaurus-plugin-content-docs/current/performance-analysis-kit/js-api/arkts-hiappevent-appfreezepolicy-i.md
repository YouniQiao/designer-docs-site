# AppFreezePolicy

Defines the application freeze event configuration policy.

**起始版本：** 24

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## 导入模块

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## pageSwitchLogEnable

```TypeScript
pageSwitchLogEnable?: boolean
```

Whether to enable the page switching log for APP_FREEZE event. **true**: yes. **false**: no. The default value is **false**. Note: The enabling behavior of an application takes effect only in its current lifecycle. In the same lifecycle, the enabling status of the last successful call is used. After the application restarts, you need to set the enabling status again.

**类型：** boolean

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

