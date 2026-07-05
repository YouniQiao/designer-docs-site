# DragPreviewMode

```TypeScript
declare enum DragPreviewMode
```

设置拖拽预览图的显示模式。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## AUTO

```TypeScript
AUTO = 1
```

系统根据拖拽场景自动改变跟手点位置，根据规则自动对拖拽背板图进行缩放变换等。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## DISABLE_SCALE

```TypeScript
DISABLE_SCALE = 2
```

禁用系统对拖拽背板图的缩放行为。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ENABLE_DEFAULT_SHADOW

```TypeScript
ENABLE_DEFAULT_SHADOW = 3
```

启用非文本类组件默认阴影效果。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ENABLE_DEFAULT_RADIUS

```TypeScript
ENABLE_DEFAULT_RADIUS = 4
```

启用非文本类组件统一圆角效果，默认值12vp。当应用自身设置的圆角值大于默认值或modifier设置的圆角时，则显示应用自定义圆角效果。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ENABLE_DRAG_ITEM_GRAY_EFFECT

```TypeScript
ENABLE_DRAG_ITEM_GRAY_EFFECT = 5
```

启用支持原拖拽对象灰显（透明度）效果，对文本内容拖拽不生效。用户拖起时原对象显示灰显效果，释放时原对象恢复原有效果。 开启默认灰显效果后，不建议在拖拽开始后自行修改透明度，如果开发者在拖拽发起后自行修改应用透明度，则灰显效果将被覆盖， 且在结束拖拽时无法正确恢复原始透明度效果。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ENABLE_MULTI_TILE_EFFECT

```TypeScript
ENABLE_MULTI_TILE_EFFECT = 6
```

启用支持多选对象鼠标拖拽不聚拢效果，各拖拽图显示在其原始位置的相对位置，当满足多选的情况下且 isMultiSelectionEnabled为true时该参数才生效。不聚拢效果优先级高于dragPreview。 不支持二次拖拽、圆角和缩放设置。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ENABLE_TOUCH_POINT_CALCULATION_BASED_ON_FINAL_PREVIEW

```TypeScript
ENABLE_TOUCH_POINT_CALCULATION_BASED_ON_FINAL_PREVIEW = 7
```

启用支持以拖拽预览图初始尺寸计算跟手点位置，长按浮起图和拖拽图不一致时使用。 鼠标拖拽，设置DragPreviewMode.ENABLE_MULTI_TILE_EFFECT时不生效。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

