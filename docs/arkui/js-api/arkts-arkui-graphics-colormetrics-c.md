# ColorMetrics

Used to mix colors.

**Since:** 12

<!--Device-unnamed-declare class ColorMetrics--><!--Device-unnamed-declare class ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="autorefresh"></a>
## autoRefresh

```TypeScript
autoRefresh?(value: boolean): ColorMetrics
```

Sets automatic refresh for the ColorMetrics object.When enabled, the color values of objects created with ColorMetrics.resourceColor() are automatically updated when the system configuration changes.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ColorMetrics-autoRefresh?(value: boolean): ColorMetrics--><!--Device-ColorMetrics-autoRefresh?(value: boolean): ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to automatically refresh the color value when system configuration changes.<br>If this parameter is set to true, the color values of objects created using ColorMetrics.resourceColor()are automatically updated when the system configuration changes. If set to false, the color values of objects created by ColorMetrics.resourceColor() are not automatically updated.The default value is false. |

**Return value:**

| Type | Description |
| --- | --- |
| [ColorMetrics](arkts-arkui-graphics-colormetrics-c.md) | Returns the ColorMetrics object for chaining. |

<a id="blendcolor"></a>
## blendColor

```TypeScript
blendColor(overlayColor: ColorMetrics): ColorMetrics
```

Blends a specified color (**overlayColor**) with the current color and returns the resulting color.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ColorMetrics-blendColor(overlayColor: ColorMetrics): ColorMetrics--><!--Device-ColorMetrics-blendColor(overlayColor: ColorMetrics): ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| overlayColor | [ColorMetrics](arkts-arkui-graphics-colormetrics-c.md) | Yes | Color to overlay. The alpha value determines the blending strength: **1.0** indicates complete opacity (fully covers the base color), and **0.0** indicates complete transparency (returns the original color). |

**Return value:**

| Type | Description |
| --- | --- |
| [ColorMetrics](arkts-arkui-graphics-colormetrics-c.md) | New color object with red, green, blue, and alpha channels representing the blended result of the current color and overlay color. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. The type of the input parameter is not ColorMetrics. |

<a id="colorwithspace"></a>
## colorWithSpace

```TypeScript
static colorWithSpace(colorSpace: ColorSpace, red: number, green: number, blue: number, alpha?: number): ColorMetrics
```

Creates a **ColorMetrics** instance using specified [ColorSpace](arkts-arkui-colorspace-e.md) and RGBA values. Only certain attributes support color configuration in the display-p3 color space.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ColorMetrics-static colorWithSpace(colorSpace: ColorSpace, red: number, green: number, blue: number, alpha?: number): ColorMetrics--><!--Device-ColorMetrics-static colorWithSpace(colorSpace: ColorSpace, red: number, green: number, blue: number, alpha?: number): ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorSpace | [ColorSpace](arkts-arkui-window-colorspace-e.md) | Yes | Color space used to specify the color. If ColorSpace.DISPLAY_P3 is used, the [setWindowColorSpace](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setwindowcolorspace9-1) API must be called to set the current window to the wide color gamut mode. |
| red | number | Yes | Red component of the color. The value is a floating point number ranging from 0 to 1. |
| green | number | Yes | Green component of the color. The value is a floating point number ranging from 0 to 1. |
| blue | number | Yes | Blue component of the color. The value is a floating point number ranging from 0 to 1. |
| alpha | number | No | Alpha component of the color. The value is a floating point number ranging from 0.0 to1.0. The default value is **1.0** (fully opaque). |

**Return value:**

| Type | Description |
| --- | --- |
| [ColorMetrics](arkts-arkui-graphics-colormetrics-c.md) | Instance of the **ColorMetrics** class. |

<a id="numeric"></a>
## numeric

```TypeScript
static numeric(value: number): ColorMetrics
```

Instantiates the **ColorMetrics** class using a color in HEX format.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ColorMetrics-static numeric(value: number): ColorMetrics--><!--Device-ColorMetrics-static numeric(value: number): ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Color in HEX format.<br>RGB and ARGB color values are supported. |

**Return value:**

| Type | Description |
| --- | --- |
| [ColorMetrics](arkts-arkui-graphics-colormetrics-c.md) | Instance of the **ColorMetrics** class. |

<a id="resourcecolor"></a>
## resourceColor

```TypeScript
static resourceColor(color: ResourceColor): ColorMetrics
```

Instantiates the **ColorMetrics** class using a color in resource reference format.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ColorMetrics-static resourceColor(color: ResourceColor): ColorMetrics--><!--Device-ColorMetrics-static resourceColor(color: ResourceColor): ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | [ResourceColor](arkts-arkui-resourcecolor-t.md) | Yes | Color in resource reference format. |

**Return value:**

| Type | Description |
| --- | --- |
| [ColorMetrics](arkts-arkui-graphics-colormetrics-c.md) | Instance of the **ColorMetrics** class. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [180003](../errorcode-event.md#180003-input-event-is-not-a-cloned-event) | Failed to obtain the color resource. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause:1. The type of the input color parameter is not ResourceColor.2. The format of the input color string is not RGB or RGBA. |

<a id="rgba"></a>
## rgba

```TypeScript
static rgba(red: number, green: number, blue: number, alpha?: number): ColorMetrics
```

Instantiates the **ColorMetrics** class using colors in RGB or RGBA format.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ColorMetrics-static rgba(red: number, green: number, blue: number, alpha?: number): ColorMetrics--><!--Device-ColorMetrics-static rgba(red: number, green: number, blue: number, alpha?: number): ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| red | number | Yes | Red component of the color. The value is an integer ranging from 0 to 255. |
| green | number | Yes | Green component of the color. The value is an integer ranging from 0 to 255. |
| blue | number | Yes | Blue component of the color. The value is an integer ranging from 0 to 255. |
| alpha | number | No | Alpha component of the color. The value is a floating point number ranging from 0.0 to 1.0. The default value is **1.0** (fully opaque).<br> Note: If alpha is less than 0, the color is fully transparent. If alpha is greater than 1, the color is opaque. |

**Return value:**

| Type | Description |
| --- | --- |
| [ColorMetrics](arkts-arkui-graphics-colormetrics-c.md) | Instance of the **ColorMetrics** class. |

## alpha

```TypeScript
get alpha(): number
```

Obtains the alpha component of the ColorMetrics color.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ColorMetrics-get alpha(): number--><!--Device-ColorMetrics-get alpha(): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## blue

```TypeScript
get blue(): number
```

Obtains the blue component of the ColorMetrics color.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ColorMetrics-get blue(): number--><!--Device-ColorMetrics-get blue(): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
get color(): string
```

Obtains the color of **ColorMetrics**. The return value is a string indicating an RGBA color value.

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ColorMetrics-get color(): string--><!--Device-ColorMetrics-get color(): string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## green

```TypeScript
get green(): number
```

Obtains the green component of the ColorMetrics color.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ColorMetrics-get green(): number--><!--Device-ColorMetrics-get green(): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## red

```TypeScript
get red(): number
```

Obtains the red component of the ColorMetrics color.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ColorMetrics-get red(): number--><!--Device-ColorMetrics-get red(): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

