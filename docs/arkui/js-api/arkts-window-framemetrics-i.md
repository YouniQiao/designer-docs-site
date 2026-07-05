# FrameMetrics

帧率指标。

**Since:** 22

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## layoutMeasureDuration

```TypeScript
layoutMeasureDuration: long
```

一帧中的布局测量耗时（单位：纳秒）。

**Type:** long

**Since:** 22

**System capability:** SystemCapability.Window.SessionManager

## vsyncTimestamp

```TypeScript
vsyncTimestamp: long
```

当前帧的开始时间戳（单位：纳秒）。

**Type:** long

**Since:** 22

**System capability:** SystemCapability.Window.SessionManager

## firstDrawFrame

```TypeScript
firstDrawFrame: boolean
```

是否是首帧。true表示首帧，false表示非首帧。

**Type:** boolean

**Since:** 22

**System capability:** SystemCapability.Window.SessionManager

## inputHandlingDuration

```TypeScript
inputHandlingDuration: long
```

一帧中的手势处理耗时（单位：纳秒）。

**Type:** long

**Since:** 22

**System capability:** SystemCapability.Window.SessionManager

