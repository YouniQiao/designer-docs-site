# ResourceOverlimitPolicy

Defines the resource leak event configuration policy.

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

Whether to enable the page switching log for RESOURCE_OVERLIMIT event. **true**: yes. **false**: no. The default value is **false**. Note: The enabling behavior of an application takes effect only in its current lifecycle. In the same lifecycle, the enabling status of the last successful call is used. After the application restarts, you need to set the enabling status again.

**类型：** boolean

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## useRefinedLogFileName

```TypeScript
useRefinedLogFileName?: boolean
```

This parameter is used to control whether to output refined external log file names. The default value is false.

**类型：** boolean

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## jsHeapLogtype

```TypeScript
jsHeapLogtype?: string
```

The policy for RESOURCE_OVERLIMIT event event: No heap snapshot is transferred when an OOM error occurs. event_rawheap: The system generates and transfers a heap snapshot when an OOM error occurs. Note: Only the preceding two values are supported. If other values are passed in, the API fails to be called and takes no effect.

**类型：** string

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

