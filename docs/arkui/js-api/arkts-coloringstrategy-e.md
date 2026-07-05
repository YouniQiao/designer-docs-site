# ColoringStrategy

```TypeScript
declare enum ColoringStrategy
```

智能取色枚举类型。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## INVERT

```TypeScript
INVERT = 'invert'
```

设置前景色为控件背景色的反色。仅支持在[foregroundColor]CommonMethod#foregroundColor(value: ResourceColor | ColoringStrategy)中设 置该枚举。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## AVERAGE

```TypeScript
AVERAGE = 'average'
```

设置控件背景阴影色为控件背景阴影区域的平均色。仅支持在入参类型为ShadowOptions的 [shadow]CommonMethod#shadow(value: ShadowOptions | ShadowStyle)中设置该枚举。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## PRIMARY

```TypeScript
PRIMARY = 'primary'
```

设置控件背景阴影色为控件背景阴影区域的主色。仅支持在入参类型为ShadowOptions的 [shadow]CommonMethod#shadow(value: ShadowOptions | ShadowStyle)中设置该枚举。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## CONTRAST

```TypeScript
CONTRAST = 'contrast'
```

从组件背景中提取平均颜色，并转换为对比鲜明的黑色或白色。子组件可以通过 Color（'foreground'） 使用此颜色。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

