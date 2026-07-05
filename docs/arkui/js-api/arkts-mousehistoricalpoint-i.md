# MouseHistoricalPoint

鼠标事件历史点信息。 历史点按时间顺序排列，获取到的第一个历史点是最早发生的事件的信息，最后一个是最新发生事件的信息。历史点的数量取决于系统事件队列的配置和硬件性能。历史点主要用于如下场景： 1. 平滑绘制：使用历史点可以实现更平滑的绘制效果，特别是在鼠标快速移动时。 2. 手势识别：通过分析历史点的轨迹，可以识别各种鼠标手势。 3. 性能优化：在一个事件回调中处理多个历史点，减少事件处理频率，提升性能。 4. 轨迹分析：分析鼠标移动轨迹，用于绘图应用或手势控制。 5. 数据分析：历史点中的timestamp可用于计算鼠标移动速度。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## windowY

```TypeScript
windowY: double
```

鼠标指针相对于应用窗口左上角的Y坐标。 单位：vp

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## windowX

```TypeScript
windowX: double
```

鼠标指针相对于应用窗口左上角的X坐标。 单位：vp

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## globalDisplayX

```TypeScript
globalDisplayX: double
```

鼠标位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的X坐标。 单位：vp

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## x

```TypeScript
x: double
```

鼠标指针相对于被点击组件左上角的X坐标。 单位：vp

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## y

```TypeScript
y: double
```

鼠标指针相对于被点击组件左上角的Y坐标。 单位：vp

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## displayY

```TypeScript
displayY: double
```

鼠标指针相对于整个屏幕左上角的Y坐标。 单位：vp

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## globalDisplayY

```TypeScript
globalDisplayY: double
```

鼠标位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的Y坐标。 单位：vp

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## displayX

```TypeScript
displayX: double
```

鼠标指针相对于整个屏幕左上角的X坐标。 单位：vp

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## timestamp

```TypeScript
timestamp: long
```

鼠标事件的时间戳。 单位：ns

**Type:** long

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

