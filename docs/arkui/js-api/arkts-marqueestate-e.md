# MarqueeState

```TypeScript
declare enum MarqueeState
```

Marquee状态回调的返回值。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## START

```TypeScript
START = 0
```

跑马灯滚动开始。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## BOUNCE

```TypeScript
BOUNCE = 1
```

完成一次跑马灯滚动，如果循环次数不是1，将会多次返回。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## FINISH

```TypeScript
FINISH = 2
```

跑马灯全部循环次数完成。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

