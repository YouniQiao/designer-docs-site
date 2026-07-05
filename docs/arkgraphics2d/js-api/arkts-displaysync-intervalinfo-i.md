# IntervalInfo

开发者可以从订阅函数中获取帧绘制的时间戳信息，包含当前帧到达的时间timestamp和下一帧预期到达的时间targetTimestamp。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { displaySync } from '@kit.ArkGraphics2D';
```

## targetTimestamp

```TypeScript
targetTimestamp: long
```

下一帧预期到达的时间（单位：纳秒）。

**Type:** long

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## timestamp

```TypeScript
timestamp: long
```

当前帧到达的时间（单位：纳秒）。

**Type:** long

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

