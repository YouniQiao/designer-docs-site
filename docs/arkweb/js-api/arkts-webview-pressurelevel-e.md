# PressureLevel

```TypeScript
enum PressureLevel
```

内存压力等级。在应用主动清理Web组件占用的缓存时，Web内核会根据内存压力等级，进行缓存释放。

**Since:** 14

**System capability:** SystemCapability.Web.Webview.Core

## MEMORY_PRESSURE_LEVEL_MODERATE

```TypeScript
MEMORY_PRESSURE_LEVEL_MODERATE = 1
```

中等内存压力等级。这个等级下，Web内核会尝试释放重新分配开销较小且不需要立即使用的缓存。

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## MEMORY_PRESSURE_LEVEL_CRITICAL

```TypeScript
MEMORY_PRESSURE_LEVEL_CRITICAL = 2
```

严重内存压力等级。这个等级下，Web内核会尝试释放所有可能的内存缓存。

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

