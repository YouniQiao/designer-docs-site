# XComponentController

Defines the controller of the XComponent. You can bind the controller to the XComponent to call the component APIs through the controller.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor()
```

A constructor used to create a XComponentController instance.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getXComponentContext

```TypeScript
getXComponentContext(): Object
```

Obtains the context of an XComponent object. This API works only when type of the XComponent is set to SURFACE("surface") or TEXTURE.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Object | Context of the XComponent object.The APIs contained in the context are defined by developers.The context is passed in as the first parameter of the onLoad callback. |

## getXComponentSurfaceId

```TypeScript
getXComponentSurfaceId(): string
```

Obtains the ID of the surface held by the XComponent, which can then be used for @ohos APIs. This API works only when type of the XComponent is set to SURFACE("surface") or TEXTURE.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | ID of the surface held by the XComponent. |

## getXComponentSurfaceRect

```TypeScript
getXComponentSurfaceRect(): SurfaceRect
```

Get the rectangle information of surface created by XComponent.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| SurfaceRect | The surface rectangle information. |

## getXComponentSurfaceRotation

```TypeScript
getXComponentSurfaceRotation(): Required<SurfaceRotationOptions>
```

Get the rotation options result of the Surface created by XComponent.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Required&lt;SurfaceRotationOptions&gt; | The surface rotation options result. |

## lockCanvas

```TypeScript
lockCanvas(): DrawingCanvas | null
```

Get a Canvas for drawing into the surface created by XComponent.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| DrawingCanvas | Returns a Canvas for drawing into the surface created by XComponent.Returns null if the surface is not available. |

## onSurfaceChanged

```TypeScript
onSurfaceChanged(surfaceId: string, rect: SurfaceRect): void
```

Called after the surface rectangle information is changed.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | The id of the surface created by XComponent. |
| rect | SurfaceRect | Yes | The rectangle information of the surface created by XComponent. |

## onSurfaceCreated

```TypeScript
onSurfaceCreated(surfaceId: string): void
```

Called after the surface is first created.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | The id of the surface created by XComponent. |

## onSurfaceDestroyed

```TypeScript
onSurfaceDestroyed(surfaceId: string): void
```

Called when the surface is about to be destroyed.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | The id of the surface created by XComponent. |

## setXComponentSurfaceConfig

```TypeScript
setXComponentSurfaceConfig(config: SurfaceConfig):void
```

Set the config of the surface created by the XComponent.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | SurfaceConfig | Yes | surface config |

## setXComponentSurfaceRect

```TypeScript
setXComponentSurfaceRect(rect: SurfaceRect): void
```

Set the rectangle information of surface created by XComponent.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rect | SurfaceRect | Yes | The surface rectangle information. |

## setXComponentSurfaceRotation

```TypeScript
setXComponentSurfaceRotation(rotationOptions: SurfaceRotationOptions): void
```

Set the rotation options of the Surface created by XComponent.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rotationOptions | SurfaceRotationOptions | Yes | The surface rotation options. |

## setXComponentSurfaceSize

```TypeScript
setXComponentSurfaceSize(value: {
    surfaceWidth: number;
    surfaceHeight: number;
  }): void
```

Sets the width and height of the surface held by the XComponent. This API works only when type of the XComponent is set to SURFACE("surface") or TEXTURE.

**Since:** 9

**Deprecated since:** 12

**Substitutes:** [setXComponentSurfaceRect](arkts-arkui-xcomponentcontroller-c.md#setxcomponentsurfacerect-1)

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | {    surfaceWidth: number;    surfaceHeight: number;  } | Yes | Width and Height of the surface held by the XComponent. |

## startImageAnalyzer

```TypeScript
startImageAnalyzer(config: ImageAnalyzerConfig): Promise<void>
```

Starts AI image analysis in the given settings. Before calling this API, make sure the AI image analyzer is enabled. Because the image frame used for analysis is the one captured when this API is called, pay attention to the invoking time of this API. If this API is repeatedly called before the execution is complete, an error callback is triggered.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | ImageAnalyzerConfig | Yes | Settings of the AI image analyzer. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [110001](../arkui-ts/errorcode-image-analyzer.md#110001-ai-image-analysis-not-supported) | Image analysis feature is unsupported. |
| [110002](../arkui-ts/errorcode-image-analyzer.md#110002-ai-image-analysis-already-in-progress) | Image analysis is currently being executed. |
| [110003](../arkui-ts/errorcode-image-analyzer.md#110003-ai-image-analysis-terminated) | Image analysis is stopped. |

## stopImageAnalyzer

```TypeScript
stopImageAnalyzer(): void
```

Stops AI image analysis. The content displayed by the AI image analyzer will be destroyed.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## unlockCanvasAndPost

```TypeScript
unlockCanvasAndPost(canvas: DrawingCanvas):void
```

Posts the new contents of the Canvas to the surface created by XComponent and releases the Canvas.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| canvas | DrawingCanvas | Yes | The canvas previously obtained from lockCanvas. |

