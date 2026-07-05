# Constants

## TextClock

```TypeScript
declare const TextClock: TextClockInterface
```

TextClock组件通过文本将当前系统时间显示在设备上。支持不同时区的时间显示，最高精度到秒级。 组件不可见时，时间变动将停止。组件的可见状态基于 [onVisibleAreaChange]CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback) 处理，可见阈值ratios大于0即视为可见状态。 ###### 子组件 无

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 11 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## TextClockInstance

```TypeScript
declare const TextClockInstance: TextClockAttribute
```

定义TextClock组件实例。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 11 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

