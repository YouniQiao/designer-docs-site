# MoreButtonOptions

Defines the options for the more button menu.

**Since:** 19

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundBlurStyle

```TypeScript
backgroundBlurStyle?: BlurStyle
```

Background blur style of the more button menu. If this parameter is not set, background blur is disabled.

**Type:** BlurStyle

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundBlurStyleOptions

```TypeScript
backgroundBlurStyleOptions?: BackgroundBlurStyleOptions
```

Options for the title bar background blur style.

**NOTE**

This parameter is only effective when **backgroundBlurStyle** is set.

Avoid using this API in conjunction with **backgroundEffect**.

**Type:** BackgroundBlurStyleOptions

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundEffect

```TypeScript
backgroundEffect?: BackgroundEffectOptions
```

Title bar background properties, including blur radius, brightness, saturation, and color.

**NOTE**

Avoid using this API in conjunction with **backgroundBlurStyleOptions**.

**Type:** BackgroundEffectOptions

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

