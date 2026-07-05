# RichEditorBuilderSpanOptions

设置builder的偏移位置和样式。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilitySpanOptions

```TypeScript
accessibilitySpanOptions?: AccessibilitySpanOptions
```

无障碍朗读功能属性。缺省时，取[AccessibilitySpanOptions](arkts-accessibilityspanoptions-i.md#AccessibilitySpanOptions)的默认值。 **模型约束：** 此接口仅可在Stage模型下使用。

**Type:** AccessibilitySpanOptions

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## offset

```TypeScript
offset?: number
```

添加builder的位置。省略或者为异常值时，添加到所有内容的最后。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isDragShadowNeeded

```TypeScript
isDragShadowNeeded?: boolean
```

添加builder单独拖拽时是否需要投影。不配置或者异常值时，默认需要投影。true表示需要投影，false表示不需要投影。 默认值： true

**Type:** boolean

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## dragBackgroundColor

```TypeScript
dragBackgroundColor? : ColorMetrics
```

添加builder单独拖拽时的背板背景颜色。不配置或者异常值时，颜色按系统默认配置。

**Type:** ColorMetrics

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

