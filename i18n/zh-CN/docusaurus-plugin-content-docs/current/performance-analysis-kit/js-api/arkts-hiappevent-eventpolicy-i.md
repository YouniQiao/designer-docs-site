# EventPolicy

Defines the system event configuration policy, which is set by calling [configEventPolicy]hiAppEvent.configEventPolicy.

**起始版本：** 22

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## 导入模块

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## resourceOverlimitPolicy

```TypeScript
resourceOverlimitPolicy?: ResourceOverlimitPolicy
```

RESOURCE_OVERLIMIT event configuration policy.

**类型：** ResourceOverlimitPolicy

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## appFreezePolicy

```TypeScript
appFreezePolicy?: AppFreezePolicy
```

APP_FREEZE event configuration policy.

**类型：** AppFreezePolicy

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## cpuUsageHighPolicy

```TypeScript
cpuUsageHighPolicy?: CpuUsageHighPolicy
```

Configuration policy for CPU_USAGE_HIGH event.

**类型：** CpuUsageHighPolicy

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## mainThreadJankPolicy

```TypeScript
mainThreadJankPolicy?: MainThreadJankPolicy
```

Configuration policy for MAIN_THREAD_JANK event.

**类型：** MainThreadJankPolicy

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## appCrashPolicy

```TypeScript
appCrashPolicy?: AppCrashPolicy
```

APP_CRASH event configuration policy.

**类型：** AppCrashPolicy

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## addressSanitizerPolicy

```TypeScript
addressSanitizerPolicy?: AddressSanitizerPolicy
```

ADDRESS_SANITIZER event configuration policy.

**类型：** AddressSanitizerPolicy

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

