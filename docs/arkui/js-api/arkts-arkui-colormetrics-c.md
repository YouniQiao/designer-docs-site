# ColorMetrics

Used to mix colors.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## autoRefresh

```TypeScript
autoRefresh?(value: boolean): ColorMetrics
```

Sets automatic refresh for the ColorMetrics object.
When enabled, the color values of objects created with ColorMetrics.resourceColor() are automatically updated
when the system configuration changes.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to automatically refresh the color value when system configuration changes.<br>If this parameter is set to true, the color values of objects created using ColorMetrics.resourceColor()are automatically updated when the system configuration changes. If set to false, the color values of objectscreated by ColorMetrics.resourceColor() are not automatically updated.The default value is false. |

**Return value:**

| Type | Description |
| --- | --- |
| ColorMetrics | Returns the ColorMetrics object for chaining. |

## blendColor

```TypeScript
blendColor(overlayColor: ColorMetrics): ColorMetrics
```

Blends a specified color (**overlayColor**) with the current color and returns the resulting color.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| overlayColor | ColorMetrics | Yes | Color to overlay. The alpha value determines the blending strength: **1.0**indicates complete opacity (fully covers the base color), and **0.0** indicates complete transparency (returnsthe original color). |

**Return value:**

| Type | Description |
| --- | --- |
| ColorMetrics | New color object with red, green, blue, and alpha channels representing the blendedresult of the current color and overlay color. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. The type of the input parameter is not ColorMetrics. |

## colorWithSpace

```TypeScript
static colorWithSpace(colorSpace: ColorSpace, red: number, green: number, blue: number, alpha?: number): ColorMetrics
```

Creates a **ColorMetrics** instance using specified [ColorSpace](../arkts-components/arkts-arkui-colorspace-e.md) and RGBA values. Only certain
attributes support color configuration in the display-p3 color space.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorSpace | ColorSpace | Yes | Color space used to specify the color. If ColorSpace.DISPLAY_P3 is used, the[setWindowColorSpace](../../../../reference/apis-arkui/arkts-apis-window-Window.md#setwindowcolorspace9-1) APImust be called to set the current window to the wide color gamut mode. |
| red | number | Yes | Red component of the color. The value is a floating point number ranging from 0 to 1. |
| green | number | Yes | Green component of the color. The value is a floating point number ranging from 0 to 1. |
| blue | number | Yes | Blue component of the color. The value is a floating point number ranging from 0 to 1. |
| alpha | number | No | Alpha component of the color. The value is a floating point number ranging from 0.0 to1.0. The default value is **1.0** (fully opaque). |

**Return value:**

| Type | Description |
| --- | --- |
| ColorMetrics | Instance of the **ColorMetrics** class. |

## numeric

```TypeScript
static numeric(value: number): ColorMetrics
```

Instantiates the **ColorMetrics** class using a color in HEX format.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Color in HEX format.<br>RGB and ARGB color values are supported. |

**Return value:**

| Type | Description |
| --- | --- |
| ColorMetrics | Instance of the **ColorMetrics** class. |

## resourceColor

```TypeScript
static resourceColor(color: ResourceColor): ColorMetrics
```

Instantiates the **ColorMetrics** class using a color in resource reference format.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | ResourceColor | Yes | Color in resource reference format. |

**Return value:**

| Type | Description |
| --- | --- |
| ColorMetrics | Instance of the **ColorMetrics** class. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [180003](../errorcode-event.md#180003-input-event-is-not-a-cloned-event) | Failed to obtain the color resource. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause:1. The type of the input color parameter is not ResourceColor.2. The format of the input color string is not RGB or RGBA. |

## rgba

```TypeScript
static rgba(red: number, green: number, blue: number, alpha?: number): ColorMetrics
```

Instantiates the **ColorMetrics** class using colors in RGB or RGBA format.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| red | number | Yes | Red component of the color. The value is an integer ranging from 0 to 255. |
| green | number | Yes | Green component of the color. The value is an integer ranging from 0 to 255. |
| blue | number | Yes | Blue component of the color. The value is an integer ranging from 0 to 255. |
| alpha | number | No | Alpha component of the color. The value is a floating point number ranging from 0.0 to 1.0. The default value is **1.0** (fully opaque).<br> Note: If alpha is less than 0, the color is fullytransparent. If alpha is greater than 1, the color is opaque. |

**Return value:**

| Type | Description |
| --- | --- |
| ColorMetrics | Instance of the **ColorMetrics** class. |

## alpha

```TypeScript
get alpha(): number
```

Obtains the alpha component of the ColorMetrics color.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

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

**System capability:** SystemCapability.ArkUI.ArkUI.Full

