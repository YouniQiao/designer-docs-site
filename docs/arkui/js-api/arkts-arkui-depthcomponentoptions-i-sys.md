# DepthComponentOptions (System API)

Defines the options of DepthComponent.

**Since:** 26.0.0

<!--Device-unnamed-declare interface DepthComponentOptions--><!--Device-unnamed-declare interface DepthComponentOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## depthSpace

```TypeScript
depthSpace?: DepthSpaceType
```

Depth space type.

**Type:** DepthSpaceType

**Default:** DepthSpace.INSTANCE

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-DepthComponentOptions-depthSpace?: DepthSpaceType--><!--Device-DepthComponentOptions-depthSpace?: DepthSpaceType-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## render3DScale

```TypeScript
render3DScale?: number
```

Scale factor for 3D rendering window, applied to both width and height. The value range is (0.0, 1.0]. Values outside this range are invalid and the default value is used.

**Type:** number

**Default:** 1.0

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-DepthComponentOptions-render3DScale?: double--><!--Device-DepthComponentOptions-render3DScale?: double-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

