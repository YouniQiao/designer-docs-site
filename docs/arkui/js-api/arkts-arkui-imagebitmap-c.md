# ImageBitmap

An **ImageBitmap** object stores pixel data rendered on a canvas. Since API version 11,when an application creates a [worker thread](docroot://arkts-utils/worker-introduction.md), it can use **postMessage** to transfer the **ImageBitmap** instance to the worker thread for drawing, and use **onmessage** to receive the drawing results sent by the worker thread for display.

**Since:** 8

<!--Device-unnamed-declare class ImageBitmap--><!--Device-unnamed-declare class ImageBitmap-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="close"></a>
## close

```TypeScript
close(): void
```

Releases all graphics resources associated with this **ImageBitmap** object and sets its width and height to **0**.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ImageBitmap-close(): void--><!--Device-ImageBitmap-close(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor(src: string)
```

Creates an **ImageBitmap** object using an **ImageSrc** object.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ImageBitmap-constructor(src: string)--><!--Device-ImageBitmap-constructor(src: string)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | string | Yes | Image source. Local images are supported.<br>1. The string format is used to load local images, for example,**ImageBitmap("common/images/example.jpg")**. For entry and feature modules,the start point of the image path for loading is the **ets** folder of the module.For HAR and shared modules, the start point is the **ets** folder of the entry or feature module into which they are built.<br>For modules whose **type** is **"har"** or **"shared"**, you are advised to use [ImageSource](docroot://media/image/image-decoding.md) to decode resource images into a unified **PixelMap** object for loading and use.<br>2. Supported image formats: BMP, JPG, PNG, SVG, and WEBP.<br>**NOTE**<br>   - ArkTS widgets do not support the strings with the **http://**, **datashare://**,or **file://data/storage**. |

<a id="constructor-1"></a>
## constructor

```TypeScript
constructor(src: string, unit: LengthMetricsUnit)
```

Creates an **ImageBitmap** object using an **ImageSrc** object. The unit mode of the Path2D object can be configured using **unit**.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-ImageBitmap-constructor(src: string, unit: LengthMetricsUnit)--><!--Device-ImageBitmap-constructor(src: string, unit: LengthMetricsUnit)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | string | Yes | Image source. Local images are supported.<br>1. The string format is used to load local images, for example,**ImageBitmap("common/images/example.jpg")**. For entry and feature modules,the start point of the image path for loading is the **ets** folder of the module.For HAR and shared modules, the start point is the **ets** folder of the entry or feature module into which they are built.<br>For modules whose **type** is **"har"** or **"shared"**, you are advised to use [ImageSource](docroot://media/image/image-decoding.md) to decode resource images into a unified **PixelMap** object for loading and use.<br>2. Supported image formats: BMP, JPG, PNG, SVG, and WEBP.<br>**NOTE**<br>   - ArkTS widgets do not support the strings with the **http://**, **datashare://**,or **file://data/storage**. |
| unit | [LengthMetricsUnit](../arkts-apis/arkts-arkui-graphics-lengthmetricsunit-e.md) | Yes | Unit mode of the **ImageBitmap** object.The value cannot be dynamically changed once set. The configuration method is the same as that of [CanvasRenderingContext2D](arkts-arkui-canvasrenderingcontext2d-c.md).<br>If the value is **undefined**, **NaN**, or **Infinity**, the default value will be used. |

<a id="constructor-2"></a>
## constructor

```TypeScript
constructor(data: PixelMap)
```

Creates an **ImageBitmap** object using a **PixelMap** object.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ImageBitmap-constructor(data: PixelMap)--><!--Device-ImageBitmap-constructor(data: PixelMap)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-image-pixelmap-i.md) | Yes | Image data source, which supports **PixelMap** objects. |

<a id="constructor-3"></a>
## constructor

```TypeScript
constructor(data: PixelMap, unit: LengthMetricsUnit)
```

Creates an **ImageBitmap** object using a **PixelMap** object. The unit mode of the Path2D object can be configured using **unit**.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ImageBitmap-constructor(data: PixelMap, unit: LengthMetricsUnit)--><!--Device-ImageBitmap-constructor(data: PixelMap, unit: LengthMetricsUnit)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-image-pixelmap-i.md) | Yes | Image data source, which supports **PixelMap** objects. |
| unit | [LengthMetricsUnit](../arkts-apis/arkts-arkui-graphics-lengthmetricsunit-e.md) | Yes | Unit mode of the **ImageBitmap** object.The value cannot be dynamically changed once set. The configuration method is the same as that of [CanvasRenderingContext2D](arkts-arkui-canvasrenderingcontext2d-c.md). |

<a id="constructor-4"></a>
## constructor

```TypeScript
constructor(data: Resource, unit?: LengthMetricsUnit)
```

Transfer a Resource object to construct an ImageBitmap object.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-ImageBitmap-constructor(data: Resource, unit?: LengthMetricsUnit)--><!--Device-ImageBitmap-constructor(data: Resource, unit?: LengthMetricsUnit)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | [Resource](../../apis-localization-kit/arkts-apis/arkts-localization-resource-resource-i.md) | Yes | Resource object |
| unit | [LengthMetricsUnit](../arkts-apis/arkts-arkui-graphics-lengthmetricsunit-e.md) | No | the unit mode |

## height

```TypeScript
readonly height: number
```

Pixel height of the **ImageBitmap** object.

Default unit: vp

**Type:** number

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ImageBitmap-readonly height: number--><!--Device-ImageBitmap-readonly height: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## width

```TypeScript
readonly width: number
```

Pixel width of the **ImageBitmap** object.

Default unit: vp

**Type:** number

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ImageBitmap-readonly width: number--><!--Device-ImageBitmap-readonly width: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

