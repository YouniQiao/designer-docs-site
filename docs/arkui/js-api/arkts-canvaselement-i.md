# CanvasElement

<canvas> provides a rectangular canvas component for drawing graphics on the screen. You can control each pixel to draw on the canvas. <canvas> offers a variety of functions for drawing paths, rectangles, circles, text, and allows for adding images to it.

**Inheritance:** CanvasElementextends: Element.

**Since:** 4

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getContext

```TypeScript
getContext(type: "2d", options?: ContextAttrOptions): CanvasRenderingContext2D
```

Obtains the context of 2D canvas drawing. Only parameters related to 2D canvas drawing are supported. The return value is a 2D drawing object that provides specific 2D drawing operations.

**Since:** 4

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "2d" | Yes | identifier defining the drawing context associated to the canvas. |
| options | ContextAttrOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| CanvasRenderingContext2D |  |

## getContext

```TypeScript
getContext(type: "webgl", options?: WebGLContextAttributes): WebGLRenderingContext
```

Obtains the context of webgl canvas drawing. Only parameters related to webgl canvas drawing are supported. The return value is a webgl drawing object that provides specific webgl drawing operations.

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "webgl" | Yes | identifier defining the drawing context associated to the canvas. |
| options | WebGLContextAttributes | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| WebGLRenderingContext |  |

## getContext

```TypeScript
getContext(type: "webgl2", options?: WebGLContextAttributes): WebGL2RenderingContext
```

Obtains the context of webgl2 canvas drawing. Only parameters related to webgl2 canvas drawing are supported. The return value is a webgl2 drawing object that provides specific webgl2 drawing operations.

**Since:** 4

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "webgl2" | Yes | identifier defining the drawing context associated to the canvas. |
| options | WebGLContextAttributes | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| WebGL2RenderingContext |  |

## toDataURL

```TypeScript
toDataURL(type?: string, quality?: number): string
```

Creates a data URI that contains the image display.

**Since:** 4

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | No | A DOMString indicating the image format. The default type is image/png. |
| quality | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

