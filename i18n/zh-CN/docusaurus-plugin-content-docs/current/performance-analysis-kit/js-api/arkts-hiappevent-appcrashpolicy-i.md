# AppCrashPolicy

Defines the application crash event configuration policy.

**起始版本：** 24

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## 导入模块

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## collectMinidump

```TypeScript
collectMinidump?: boolean
```

Policy for the APP_CRASH event the value true means to the minidump capture capability is enabled. the value false means to the minidump capture function is disabled. <br>Default value:false.

**类型：** boolean

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## pageSwitchLogEnable

```TypeScript
pageSwitchLogEnable?: boolean
```

Whether to enable the page switching log for APP_CRASH event. **true**: yes. **false**: no. The default value is **false**. Note: The enabling behavior of an application takes effect only in its current lifecycle. In the same lifecycle, the enabling status of the last successful call is used. After the application restarts, you need to set the enabling status again.

**类型：** boolean

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## simplifyVmaPrinting

```TypeScript
simplifyVmaPrinting?: boolean
```

The policy for APP_CRASH event The value true means to print only the Virtual Memory Area (VMA) mapping information of the addresses in the crash log, that is, Maps in the crash log, to reduce the log size. The value false means to print all VMA mapping information. Default value: false.

**类型：** boolean

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## logFileCutoffSzBytes

```TypeScript
logFileCutoffSzBytes?: int
```

The policy for APP_CRASH event The value ranges from 0 to 5242880, in bytes. The crash log is truncated to the specified size when this parameter is set. Otherwise, the default value 0 is used, which means no truncation.

**类型：** int

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## extendPcLrPrinting

```TypeScript
extendPcLrPrinting?: boolean
```

The policy for APP_CRASH event The value true means to print the memory values of the 248 bytes before and 256 bytes after the PC and LR in the 64-bit system, or print the memory values of the 124 bytes before and 128 bytes after the PC and LR in the 32-bit system. The value false means to print the memory values of the 16 bytes before and 232 bytes after the PC and LR in the 64-bit system, or print the memory values of the 8 bytes before and 116 bytes after the PC and LR in the 32-bit system. If not set the param, the default value is false.

**类型：** boolean

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

