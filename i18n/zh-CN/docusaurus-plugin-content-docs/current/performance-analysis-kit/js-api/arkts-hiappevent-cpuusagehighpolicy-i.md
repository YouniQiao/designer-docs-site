# CpuUsageHighPolicy

Defines the configuration policy for the high CPU usage event. > **NOTE** > > After this API is called, the setting is persisted. If this API is called again and the corresponding parameter > is not set, the value used by the system last time is used.

**起始版本：** 22

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## 导入模块

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## threadLoadThreshold

```TypeScript
threadLoadThreshold?: int
```

High CPU usage threshold of the application thread, in percentage. The value range is **[15, 100]**. The default value is **70**. If the value is not within the threshold range, the default value **70** is used.

**类型：** int

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## backgroundLoadThreshold

```TypeScript
backgroundLoadThreshold?: int
```

High CPU usage threshold of the application background, in percentage. The value range is **[1, 100]**. The default value is **10**. If the value is not within the threshold range, the default value **10** is used. **Note**: It is recommended that the value be less than **10**.

**类型：** int

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## foregroundLoadThreshold

```TypeScript
foregroundLoadThreshold?: int
```

High CPU usage threshold of the application foreground, in percentage. The value range is **[1, 100]**. The default value is **30**. If the value is not within the threshold range, the default value **30** is used. **Note**: It is recommended that the value be less than **30**.

**类型：** int

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## perfLogCaptureCount

```TypeScript
perfLogCaptureCount?: int
```

Number of log collection times per day. Once the system detects that the number of log collection times exceeds the set value, the system still reports the event normally, but the **external_log** field in the exception event is not attached with the log file path information. For debug-type applications, the threshold range is **[-1, 100]**. For release-type applications, the threshold range is **[0, 20]**. Unit: times. Default value: **1**. If the value is not within the threshold range, the default value **1** is used. **NOTE** 1. The value **-1** indicates that log collection times are not limited. 2. The value **0** indicates that logs are not collected. 3. A value greater than **0** indicates the maximum number of daily collection times.

**类型：** int

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## threadLoadInterval

```TypeScript
threadLoadInterval?: int
```

Interval for detecting high CPU usage of application threads, in seconds. The value range is **[5, 3600]**. The default value is **60**. If the value is not within the threshold range, the default value **60** is used.

**类型：** int

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

