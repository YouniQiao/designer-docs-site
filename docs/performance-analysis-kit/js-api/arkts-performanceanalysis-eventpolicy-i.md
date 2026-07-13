# EventPolicy

Defines the system event configuration policy, which is set by calling
[configEventPolicy](arkts-performanceanalysis-configeventpolicy-f.md#configeventpolicy-1).

**Since:** 22

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## Modules to Import

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## addressSanitizerPolicy

```TypeScript
addressSanitizerPolicy?: AddressSanitizerPolicy
```

ADDRESS_SANITIZER event configuration policy.

**Type:** AddressSanitizerPolicy

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## appCrashPolicy

```TypeScript
appCrashPolicy?: AppCrashPolicy
```

APP_CRASH event configuration policy.

**Type:** AppCrashPolicy

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## appFreezePolicy

```TypeScript
appFreezePolicy?: AppFreezePolicy
```

APP_FREEZE event configuration policy.

**Type:** AppFreezePolicy

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## cpuUsageHighPolicy

```TypeScript
cpuUsageHighPolicy?: CpuUsageHighPolicy
```

Configuration policy for CPU_USAGE_HIGH event.

**Type:** CpuUsageHighPolicy

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## mainThreadJankPolicy

```TypeScript
mainThreadJankPolicy?: MainThreadJankPolicy
```

Configuration policy for MAIN_THREAD_JANK event.

**Type:** MainThreadJankPolicy

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## resourceOverlimitPolicy

```TypeScript
resourceOverlimitPolicy?: ResourceOverlimitPolicy
```

RESOURCE_OVERLIMIT event configuration policy.

**Type:** ResourceOverlimitPolicy

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

