# Constants

## TIMER_TYPE_REALTIME

```TypeScript
const TIMER_TYPE_REALTIME: int
```

系统启动时间定时器（定时器启动时间不能晚于当前设置的系统时间）。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Time

**System API:** This is a system API.

## TIMER_TYPE_WAKEUP

```TypeScript
const TIMER_TYPE_WAKEUP: int
```

唤醒定时器（如果未配置为唤醒定时器，则系统处于休眠状态下不会触发，直到退出休眠状态）。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Time

**System API:** This is a system API.

## TIMER_TYPE_EXACT

```TypeScript
const TIMER_TYPE_EXACT: int
```

精准定时器（系统时间修改的情况下，可能会出现最多1s的前后偏移误差）。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Time

**System API:** This is a system API.

## TIMER_TYPE_IDLE

```TypeScript
const TIMER_TYPE_IDLE: int
```

IDLE模式定时器（仅支持系统服务配置，不支持应用配置）。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Time

**System API:** This is a system API.

