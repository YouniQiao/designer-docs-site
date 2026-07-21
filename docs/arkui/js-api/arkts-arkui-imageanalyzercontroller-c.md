# ImageAnalyzerController

Implements an AI image analysis controller, which provides control for image analysis features when bound to supported components.

**Since:** 12

<!--Device-unnamed-declare class ImageAnalyzerController--><!--Device-unnamed-declare class ImageAnalyzerController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

A constructor used to create an **ImageAnalyzerController** instance.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ImageAnalyzerController-constructor()--><!--Device-ImageAnalyzerController-constructor()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="getimageanalyzersupporttypes"></a>
## getImageAnalyzerSupportTypes

```TypeScript
getImageAnalyzerSupportTypes(): ImageAnalyzerType[]
```

Obtains the analysis types supported by the corresponding component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ImageAnalyzerController-getImageAnalyzerSupportTypes(): ImageAnalyzerType[]--><!--Device-ImageAnalyzerController-getImageAnalyzerSupportTypes(): ImageAnalyzerType[]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [ImageAnalyzerType](arkts-arkui-imageanalyzertype-e.md)[] | Analysis type supported by the corresponding component. |

