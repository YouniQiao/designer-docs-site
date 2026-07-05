# ExpectedFrameRateRange

设置动画期望的帧率。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## min

```TypeScript
min: number
```

期望的最小帧率，单位为帧/秒（fps）。 取值范围为[0, 设备最大帧率]。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## max

```TypeScript
max: number
```

期望的最大帧率，单位为帧/秒（fps）。 取值范围为[min, 设备最大帧率]。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## expected

```TypeScript
expected: number
```

期望的最优帧率，单位为帧/秒（fps）。 取值范围为[min, max]。设置为0时，将跟随应用的帧率。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

