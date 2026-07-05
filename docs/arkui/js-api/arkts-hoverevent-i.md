# HoverEvent

继承于[BaseEvent](arkts-baseevent-i.md#BaseEvent)。

**Inheritance:** HoverEventextends: BaseEvent.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## windowY

```TypeScript
windowY?: number
```

鼠标光标或手写笔位置在当前应用窗口坐标系中的Y坐标。 单位：vp 取值范围：[0, +∞) **原子化服务API：** 从API version 15开始，该接口支持在原子化服务中使用。

**Type:** number

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## windowX

```TypeScript
windowX?: number
```

鼠标光标或手写笔位置在当前应用窗口坐标系中的X坐标。 单位：vp 取值范围：[0, +∞) **原子化服务API：** 从API version 15开始，该接口支持在原子化服务中使用。

**Type:** number

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## globalDisplayX

```TypeScript
globalDisplayX?: number
```

鼠标光标或手写笔位置在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的X坐标。 单位：vp 取值范围：[0, +∞)

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## x

```TypeScript
x?: number
```

鼠标光标或手写笔位置在当前组件为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的X坐标。 单位：vp 取值范围：[0, +∞) **原子化服务API：** 从API version 15开始，该接口支持在原子化服务中使用。

**Type:** number

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## y

```TypeScript
y?: number
```

鼠标光标或手写笔位置在当前组件为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的Y坐标。 单位：vp 取值范围：[0, +∞) **原子化服务API：** 从API version 15开始，该接口支持在原子化服务中使用。

**Type:** number

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## displayY

```TypeScript
displayY?: number
```

鼠标光标或手写笔位置在当前应用屏幕坐标系中的Y坐标。 单位：vp 取值范围：[0, +∞) **原子化服务API：** 从API version 15开始，该接口支持在原子化服务中使用。

**Type:** number

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## stopPropagation

```TypeScript
stopPropagation: () => void
```

阻塞[事件冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)。 **原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**Type:** () => void

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## globalDisplayY

```TypeScript
globalDisplayY?: number
```

相对于全局显示的点的 Y 坐标。

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## displayX

```TypeScript
displayX?: number
```

鼠标光标或手写笔位置在当前应用屏幕坐标系中的X坐标。 单位：vp 取值范围：[0, +∞) **原子化服务API：** 从API version 15开始，该接口支持在原子化服务中使用。

**Type:** number

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

