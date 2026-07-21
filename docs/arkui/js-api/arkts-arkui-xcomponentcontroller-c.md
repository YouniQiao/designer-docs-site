# XComponentController

Defines the controller of the XComponent.You can bind the controller to the XComponent to call the component APIs through the controller.

**Since:** 12

<!--Device-unnamed-declare class XComponentController--><!--Device-unnamed-declare class XComponentController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

A constructor used to create a XComponentController instance.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-XComponentController-constructor()--><!--Device-XComponentController-constructor()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="getxcomponentcontext"></a>
## getXComponentContext

```TypeScript
getXComponentContext(): Object
```

Obtains the context of an XComponent object.This API works only when type of the XComponent is set to SURFACE("surface") or TEXTURE.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-XComponentController-getXComponentContext(): Object--><!--Device-XComponentController-getXComponentContext(): Object-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Object | Context of the XComponent object.The APIs contained in the context are defined by developers.The context is passed in as the first parameter of the onLoad callback. |

<a id="getxcomponentsurfaceid"></a>
## getXComponentSurfaceId

```TypeScript
getXComponentSurfaceId(): string
```

Obtains the ID of the surface held by the XComponent, which can then be used for @ohos APIs.This API works only when type of the XComponent is set to SURFACE("surface") or TEXTURE.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-XComponentController-getXComponentSurfaceId(): string--><!--Device-XComponentController-getXComponentSurfaceId(): string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | ID of the surface held by the XComponent. |

<a id="getxcomponentsurfacerect"></a>
## getXComponentSurfaceRect

```TypeScript
getXComponentSurfaceRect(): SurfaceRect
```

Get the rectangle information of surface created by XComponent.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-XComponentController-getXComponentSurfaceRect(): SurfaceRect--><!--Device-XComponentController-getXComponentSurfaceRect(): SurfaceRect-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [SurfaceRect](arkts-arkui-surfacerect-i.md) | The surface rectangle information. |

<a id="getxcomponentsurfacerotation"></a>
## getXComponentSurfaceRotation

```TypeScript
getXComponentSurfaceRotation(): Required<SurfaceRotationOptions>
```

Get the rotation options result of the Surface created by XComponent.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-XComponentController-getXComponentSurfaceRotation(): Required<SurfaceRotationOptions>--><!--Device-XComponentController-getXComponentSurfaceRotation(): Required<SurfaceRotationOptions>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Required](../../apis-na/arkts-apis/arkts-na-required-t.md)&lt;SurfaceRotationOptions&gt; | The surface rotation options result. |

<a id="lockcanvas"></a>
## lockCanvas

```TypeScript
lockCanvas(): DrawingCanvas | null
```

Get a Canvas for drawing into the surface created by XComponent.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-XComponentController-lockCanvas(): DrawingCanvas | null--><!--Device-XComponentController-lockCanvas(): DrawingCanvas | null-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [DrawingCanvas](arkts-arkui-drawingcanvas-t.md) | Returns a Canvas for drawing into the surface created by XComponent.Returns null if the surface is not available. |

<a id="onsurfacechanged"></a>
## onSurfaceChanged

```TypeScript
onSurfaceChanged(surfaceId: string, rect: SurfaceRect): void
```

Called after the surface rectangle information is changed.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-XComponentController-onSurfaceChanged(surfaceId: string, rect: SurfaceRect): void--><!--Device-XComponentController-onSurfaceChanged(surfaceId: string, rect: SurfaceRect): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | The id of the surface created by XComponent. |
| rect | [SurfaceRect](arkts-arkui-surfacerect-i.md) | Yes | The rectangle information of the surface created by XComponent. |

<a id="onsurfacecreated"></a>
## onSurfaceCreated

```TypeScript
onSurfaceCreated(surfaceId: string): void
```

Called after the surface is first created.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-XComponentController-onSurfaceCreated(surfaceId: string): void--><!--Device-XComponentController-onSurfaceCreated(surfaceId: string): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | The id of the surface created by XComponent. |

<a id="onsurfacedestroyed"></a>
## onSurfaceDestroyed

```TypeScript
onSurfaceDestroyed(surfaceId: string): void
```

Called when the surface is about to be destroyed.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-XComponentController-onSurfaceDestroyed(surfaceId: string): void--><!--Device-XComponentController-onSurfaceDestroyed(surfaceId: string): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | The id of the surface created by XComponent. |

<a id="setxcomponentsurfaceconfig"></a>
## setXComponentSurfaceConfig

```TypeScript
setXComponentSurfaceConfig(config: SurfaceConfig):void
```

Set the config of the surface created by the XComponent.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-XComponentController-setXComponentSurfaceConfig(config: SurfaceConfig):void--><!--Device-XComponentController-setXComponentSurfaceConfig(config: SurfaceConfig):void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [SurfaceConfig](arkts-arkui-surfaceconfig-i.md) | Yes | surface config |

<a id="setxcomponentsurfacerect"></a>
## setXComponentSurfaceRect

```TypeScript
setXComponentSurfaceRect(rect: SurfaceRect): void
```

Set the rectangle information of surface created by XComponent.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-XComponentController-setXComponentSurfaceRect(rect: SurfaceRect): void--><!--Device-XComponentController-setXComponentSurfaceRect(rect: SurfaceRect): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rect | [SurfaceRect](arkts-arkui-surfacerect-i.md) | Yes | The surface rectangle information. |

<a id="setxcomponentsurfacerotation"></a>
## setXComponentSurfaceRotation

```TypeScript
setXComponentSurfaceRotation(rotationOptions: SurfaceRotationOptions): void
```

Set the rotation options of the Surface created by XComponent.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-XComponentController-setXComponentSurfaceRotation(rotationOptions: SurfaceRotationOptions): void--><!--Device-XComponentController-setXComponentSurfaceRotation(rotationOptions: SurfaceRotationOptions): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rotationOptions | [SurfaceRotationOptions](arkts-arkui-surfacerotationoptions-i.md) | Yes | The surface rotation options. |

<a id="setxcomponentsurfacesize"></a>
## setXComponentSurfaceSize

```TypeScript
setXComponentSurfaceSize(value: {
    surfaceWidth: number;
    surfaceHeight: number;
  }): void
```

Sets the width and height of the surface held by the XComponent.This API works only when type of the XComponent is set to SURFACE("surface") or TEXTURE.

**Since:** 9

**Deprecated since:** 12

**Substitutes:** [setXComponentSurfaceRect](arkts-arkui-xcomponentcontroller-c.md#setxcomponentsurfacerect-1)

<!--Device-XComponentController-setXComponentSurfaceSize(value: {
    surfaceWidth: number;
    surfaceHeight: number;
  }): void--><!--Device-XComponentController-setXComponentSurfaceSize(value: {
    surfaceWidth: number;
    surfaceHeight: number;
  }): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | {     surfaceWidth: number;     surfaceHeight: number;   } | Yes | Width and Height of the surface held by the XComponent. |

<a id="startimageanalyzer"></a>
## startImageAnalyzer

```TypeScript
startImageAnalyzer(config: ImageAnalyzerConfig): Promise<void>
```

Starts AI image analysis in the given settings.Before calling this API, make sure the AI image analyzer is enabled.Because the image frame used for analysis is the one captured when this API is called, pay attention to the invoking time of this API.If this API is repeatedly called before the execution is complete, an error callback is triggered.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-XComponentController-startImageAnalyzer(config: ImageAnalyzerConfig): Promise<void>--><!--Device-XComponentController-startImageAnalyzer(config: ImageAnalyzerConfig): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [ImageAnalyzerConfig](../arkts-apis/arkts-arkui-imageanalyzerconfig-i.md) | Yes | Settings of the AI image analyzer. |

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

<a id="stopimageanalyzer"></a>
## stopImageAnalyzer

```TypeScript
stopImageAnalyzer(): void
```

Stops AI image analysis.The content displayed by the AI image analyzer will be destroyed.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-XComponentController-stopImageAnalyzer(): void--><!--Device-XComponentController-stopImageAnalyzer(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="unlockcanvasandpost"></a>
## unlockCanvasAndPost

```TypeScript
unlockCanvasAndPost(canvas: DrawingCanvas):void
```

Posts the new contents of the Canvas to the surface created by XComponent and releases the Canvas.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-XComponentController-unlockCanvasAndPost(canvas: DrawingCanvas):void--><!--Device-XComponentController-unlockCanvasAndPost(canvas: DrawingCanvas):void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| canvas | [DrawingCanvas](arkts-arkui-drawingcanvas-t.md) | Yes | The canvas previously obtained from lockCanvas. |

