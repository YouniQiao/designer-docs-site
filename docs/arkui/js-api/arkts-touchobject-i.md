# TouchObject

触摸事件类型。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getCurrentLocalPosition

```TypeScript
getCurrentLocalPosition?(): Coordinate2D
```

获取点击位置相对于当前组件实时位置的左上角坐标。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Coordinate2D | - 点击位置相对于当前组件实时位置的左上角坐标。 |

## windowY

```TypeScript
windowY: number
```

触摸点在当前应用窗口坐标系中的Y坐标。 单位：vp

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## windowX

```TypeScript
windowX: number
```

触摸点在当前应用窗口坐标系中的X坐标。 单位：vp

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## displayY

```TypeScript
displayY: number
```

触摸点在当前应用屏幕坐标系中的Y坐标。 单位：vp

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## pressure

```TypeScript
pressure?: number
```

当前手指按压的压力值。 取值范围：[0,65535)，压力越大，值越大。

**Type:** number

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## displayX

```TypeScript
displayX: number
```

触摸点在当前应用屏幕坐标系中的X坐标。 单位：vp

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type: TouchType
```

触摸事件的类型。

**Type:** TouchType

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## pressedTime

```TypeScript
pressedTime?: number
```

当前手指按下的时间。 单位：ns

**Type:** number

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## width

```TypeScript
width?: number
```

当前手指按压区域的宽度。 单位：vp

**Type:** number

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## x

```TypeScript
x: number
```

触摸点在事件响应组件为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的X坐标。 单位：vp

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## globalDisplayX

```TypeScript
globalDisplayX?: number
```

触摸点在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的X坐标。 单位：vp 取值范围：[0, +∞)

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## y

```TypeScript
y: number
```

触摸点在事件响应组件为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的Y坐标。 单位：vp

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## globalDisplayY

```TypeScript
globalDisplayY?: number
```

点击位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的Y坐标。 单位：vp 取值范围：[0, +∞)

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## id

```TypeScript
id: number
```

手指唯一标识符。

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## screenX

```TypeScript
screenX: number
```

触摸点在当前应用窗口坐标系中的X坐标。 单位：vp

**Type:** number

**Since:** 7

**Deprecated since:** 10

**Substitute:** TouchObject#windowX

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## height

```TypeScript
height?: number
```

当前手指按压区域的高度。 单位：vp

**Type:** number

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## hand

```TypeScript
hand?: InteractionHand
```

表示事件是由左手点击还是右手点击触发。

**Type:** InteractionHand

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## screenY

```TypeScript
screenY: number
```

触摸点在当前应用窗口坐标系中的Y坐标。 单位：vp

**Type:** number

**Since:** 7

**Deprecated since:** 10

**Substitute:** TouchObject#windowY

**System capability:** SystemCapability.ArkUI.ArkUI.Full

