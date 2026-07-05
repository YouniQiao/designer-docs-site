# ProgressMask

ProgressMask设置遮罩的进度、最大值和颜色。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(value: number, total: number, color: ResourceColor)
```

构造ProgressMask对象。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 进度遮罩的当前值。 取值范围：[0.0, +∞) |
| total | number | Yes | 进度遮罩的最大值。 取值范围：[0.0, +∞) |
| color | ResourceColor | Yes | 进度遮罩的颜色。 |

## enableBreathingAnimation

```TypeScript
enableBreathingAnimation(value: boolean): void
```

进度满时的呼吸光晕动画开关。不设置该接口时，默认关闭呼吸光晕动画。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否开启呼吸光晕动画。 true：开启呼吸光晕动画。 false：关闭呼吸光晕动画。 |

## updateColor

```TypeScript
updateColor(value: ResourceColor): void
```

更新进度遮罩的颜色。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 进度遮罩的颜色。 |

## updateProgress

```TypeScript
updateProgress(value: number): void
```

更新进度遮罩的进度值。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 进度遮罩的当前值。 |

