# BlendApplyType

```TypeScript
declare enum BlendApplyType
```

指示如何将指定的混合模式应用于视图的内容。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## FAST

```TypeScript
FAST = 0
```

在目标图像上按顺序混合视图的内容。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## OFFSCREEN

```TypeScript
OFFSCREEN = 1
```

将此组件和子组件内容绘制到离屏画布上，然后整体进行混合。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## OFFSCREEN_WITH_BACKGROUND

```TypeScript
OFFSCREEN_WITH_BACKGROUND = 2
```

创建离屏画布时，先拷贝一份背景初始化画布，再将此组件和子组件内容绘制到离屏画布上，然后整体进行混合。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

