# RichEditorBuilderSpanOptions

设置builder的偏移位置和样式。

**起始版本：** 11

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## accessibilitySpanOptions

```TypeScript
accessibilitySpanOptions?: AccessibilitySpanOptions
```

无障碍朗读功能属性。缺省时，取[AccessibilitySpanOptions](arkts-accessibilityspanoptions-i.md#AccessibilitySpanOptions)的默认值。 **模型约束：** 此接口仅可在Stage模型下使用。

**类型：** AccessibilitySpanOptions

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## offset

```TypeScript
offset?: number
```

添加builder的位置。省略或者为异常值时，添加到所有内容的最后。

**类型：** number

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## isDragShadowNeeded

```TypeScript
isDragShadowNeeded?: boolean
```

添加builder单独拖拽时是否需要投影。不配置或者异常值时，默认需要投影。true表示需要投影，false表示不需要投影。 默认值： true

**类型：** boolean

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## dragBackgroundColor

```TypeScript
dragBackgroundColor? : ColorMetrics
```

添加builder单独拖拽时的背板背景颜色。不配置或者异常值时，颜色按系统默认配置。

**类型：** ColorMetrics

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

