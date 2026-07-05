# depth_component

Defines DepthComponent Component instance.

## depth_component

```TypeScript
depth_component(background: ResourceStr | PixelMap, options?: DepthComponentOptions)
```

Defines the DepthComponent constructor.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| background | ResourceStr \| PixelMap | Yes | Background resource or PixelMap (required). |
| options | DepthComponentOptions | No |  |

## Summary

### Classes

| Name | Description |
| --- | --- |
| <!--DelRow-->[DepthComponentAttribute](arkts-depthcomponentattribute-c.md) | Style the DepthComponent. |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[CameraBufferCrop](arkts-camerabuffercrop-i.md) | Camera buffer crop parameters. |
| <!--DelRow-->[CropOffset](arkts-cropoffset-i.md) | 2D offset for crop frame. |
| <!--DelRow-->[DepthCameraParams](arkts-depthcameraparams-i.md) | Camera parameters struct. |
| <!--DelRow-->[DepthComponentCompleteEvent](arkts-depthcomponentcompleteevent-i.md) | Information about the background resource loaded successfully. |
| <!--DelRow-->[DepthComponentErrorEvent](arkts-depthcomponenterrorevent-i.md) | Information about the background resource loading error. |
| <!--DelRow-->[DepthComponentInterface](arkts-depthcomponentinterface-i.md) | DepthComponentInterface |
| <!--DelRow-->[DepthComponentOptions](arkts-depthcomponentoptions-i.md) | Defines the options of DepthComponent. |
| <!--DelRow-->[DepthLightParams](arkts-depthlightparams-i.md) | Lighting parameters struct. |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[DepthSpaceType](arkts-depthspacetype-e.md) | Depth space type enumeration. |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[DepthComponentCompleteCallback](arkts-depthcomponentcompletecallback-t.md) | Callback invoked when the background resource is loaded successfully. |
| <!--DelRow-->[DepthComponentErrorCallback](arkts-depthcomponenterrorcallback-t.md) | Callback invoked when an error occurs during background resource loading. |
| <!--DelRow-->[DepthMapCallback](arkts-depthmapcallback-t.md) | Callback invoked when the depth map resource is loaded. |

### Constants

| Name | Description |
| --- | --- |
| <!--DelRow-->[DepthComponent](arkts-depth-component-con-sys.md#DepthComponent) | Defines DepthComponent Component. |
| <!--DelRow-->[DepthComponentInstance](arkts-depth-component-con-sys.md#DepthComponentInstance) | Defines DepthComponent Component instance. |

