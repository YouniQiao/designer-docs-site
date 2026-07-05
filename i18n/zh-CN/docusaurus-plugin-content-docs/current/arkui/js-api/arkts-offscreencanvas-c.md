# OffscreenCanvas

OffscreenCanvas provides a Canvas object that can be rendered off-screen. It works in both window and Web worker environments.

**起始版本：** 11

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(width: number, height: number)
```

The width of the offScreen Canvas object The height of the offScreen Canvas object

**起始版本：** 11

**模型约束：** 此接口仅可在FA模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| width | number | 是 |  |
| height | number | 是 |  |

## getContext

```TypeScript
getContext(contextId: "2d", options?: CanvasRenderingContext2DSettings): OffscreenCanvasRenderingContext2D
```

Gets the context object for off-screen drawing.

**起始版本：** 11

**模型约束：** 此接口仅可在FA模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| contextId | "2d" | 是 | creates a CanvasRenderingContext2D object representing a two-dimensional rendering context. |
| options | CanvasRenderingContext2DSettings | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| OffscreenCanvasRenderingContext2D | a render canvas for the offScreen Canvas object. |

## toDataURL

```TypeScript
toDataURL(type?: string, quality?: number): string
```

Converts the draw contents of the current off-screen draw object to a string in the form of a Blob.

**起始版本：** 11

**模型约束：** 此接口仅可在FA模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 否 |  |
| quality | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | A Promise returning a Blob object representing the image contained in the canvas. |

## transferToImageBitmap

```TypeScript
transferToImageBitmap(): ImageBitmap
```

Converts the draw content in the current off-screen draw object to a Bitmap object.

**起始版本：** 11

**模型约束：** 此接口仅可在FA模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ImageBitmap | Returns An ImageBitmap object. |

## width

```TypeScript
width: number
```

The width of the offScreen Canvas object

**类型：** number

**起始版本：** 11

**模型约束：** 此接口仅可在FA模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## height

```TypeScript
height: number
```

The height of the offScreen Canvas object

**类型：** number

**起始版本：** 11

**模型约束：** 此接口仅可在FA模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

