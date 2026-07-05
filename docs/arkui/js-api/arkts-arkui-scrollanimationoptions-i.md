# ScrollAnimationOptions

Provides parameters for customizing scroll animations.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## canOverScroll

```TypeScript
canOverScroll?: boolean
```

Whether to enable overscroll. <p><strong>NOTE</strong> <br> Scrolling can exceed the boundary and initiate a bounce animation when this parameter is set to <em>true</em>, and the component's <em>edgeEffect</em> attribute is set to EdgeEffect.Spring. </p>

**Type:** boolean

**Default:** false

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## curve

```TypeScript
curve?: Curve | ICurve
```

Scrolling curve.

**Type:** Curve | ICurve

**Default:** Curve.Ease

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## duration

```TypeScript
duration?: number
```

Scrolling duration. <p><strong>NOTE</strong> <br>Scrolling duration.<br>Default value: **1000**<br>Unit: ms <br>**NOTE**<br>A value less than 0 evaluates to the default value. </p>

**Type:** number

**Default:** 1000

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

