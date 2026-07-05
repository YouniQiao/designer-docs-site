# DepthComponentAttribute

Style the DepthComponent.

**Inheritance:** DepthComponentAttributeextends: CommonMethod<DepthComponentAttribute>.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## camera

```TypeScript
camera(camera: DepthCameraParams)
```

Camera parameters for depth rendering.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| camera | DepthCameraParams | Yes | Camera parameters. |

## depthMap

```TypeScript
depthMap(depthMap: ResourceStr | PixelMap, callback?: DepthMapCallback)
```

Depth map for depth calculation and rendering.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| depthMap | ResourceStr \| PixelMap | Yes | Depth map path or PixelMap. |
| callback | DepthMapCallback | No |  |

## light

```TypeScript
light(light: DepthLightParams)
```

Lighting parameters for depth rendering.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| light | DepthLightParams | Yes | Lighting parameters including direction, color and intensity. |

## onComplete

```TypeScript
onComplete(callback: DepthComponentCompleteCallback)
```

Triggered when the background resource is loaded successfully.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DepthComponentCompleteCallback | Yes |  |

## onError

```TypeScript
onError(callback: DepthComponentErrorCallback)
```

Triggered when an error occurs during background resource loading.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DepthComponentErrorCallback | Yes |  |

