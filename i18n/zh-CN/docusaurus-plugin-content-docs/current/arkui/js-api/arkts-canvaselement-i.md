# CanvasElement

<canvas> provides a rectangular canvas component for drawing graphics on the screen. You can control each pixel to draw on the canvas. <canvas> offers a variety of functions for drawing paths, rectangles, circles, text, and allows for adding images to it.

**继承实现关系：** CanvasElement继承自：Element。

**起始版本：** 4

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## getContext

```TypeScript
getContext(type: "2d", options?: ContextAttrOptions): CanvasRenderingContext2D
```

Obtains the context of 2D canvas drawing. Only parameters related to 2D canvas drawing are supported. The return value is a 2D drawing object that provides specific 2D drawing operations.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | "2d" | 是 | identifier defining the drawing context associated to the canvas. |
| options | ContextAttrOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CanvasRenderingContext2D |  |

## getContext

```TypeScript
getContext(type: "webgl", options?: WebGLContextAttributes): WebGLRenderingContext
```

Obtains the context of webgl canvas drawing. Only parameters related to webgl canvas drawing are supported. The return value is a webgl drawing object that provides specific webgl drawing operations.

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | "webgl" | 是 | identifier defining the drawing context associated to the canvas. |
| options | WebGLContextAttributes | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLRenderingContext |  |

## getContext

```TypeScript
getContext(type: "webgl2", options?: WebGLContextAttributes): WebGL2RenderingContext
```

Obtains the context of webgl2 canvas drawing. Only parameters related to webgl2 canvas drawing are supported. The return value is a webgl2 drawing object that provides specific webgl2 drawing operations.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | "webgl2" | 是 | identifier defining the drawing context associated to the canvas. |
| options | WebGLContextAttributes | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGL2RenderingContext |  |

## toDataURL

```TypeScript
toDataURL(type?: string, quality?: number): string
```

Creates a data URI that contains the image display.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 否 | A DOMString indicating the image format. The default type is image/png. |
| quality | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string |  |

