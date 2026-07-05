# @ohos.arkui.drawableDescriptor

## Modules to Import

```TypeScript
import { DrawableDescriptor, AnimatedDrawableDescriptor, AnimationStopMode, AnimationOptions, AnimationController, DrawableDescriptorLoadedResult, LayeredDrawableDescriptor, PictureDrawableDescriptor, PixelMapDrawableDescriptor, HdrCompositionConfig } from '@ohos.arkui.drawableDescriptor';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AnimatedDrawableDescriptor](arkts-arkui-animateddrawabledescriptor-c.md) | Defines a descriptor object used to play animated content (for example, **PixelMap** arrays or animated image resources) using the [Image](./@internal/component/ets/image) component. It inherits from [DrawableDescriptor](arkts-arkui-drawabledescriptorloadedresult-i.md#drawabledescriptorloadedresult). |
| [DrawableDescriptor](arkts-arkui-drawabledescriptor-c.md) | Represents the base class providing overridable methods for [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#pixelmap) acquisition and image resource loading. |
| [LayeredDrawableDescriptor](arkts-arkui-layereddrawabledescriptor-c.md) | Creates a **LayeredDrawableDescriptor** object when the passed resource ID or name belongs to a JSON file that contains foreground and background resources. Inherits from [DrawableDescriptor](arkts-arkui-drawabledescriptorloadedresult-i.md#drawabledescriptorloadedresult). The **drawable.json** file is located under **entry/src/main/resources/base/media** in the project directory. Below shows the file content: |
| [PictureDrawableDescriptor](arkts-arkui-picturedrawabledescriptor-c.md) | Creates a **PictureDrawableDescriptor** object by passing a **Picture** object. This API inherits from [DrawableDescriptor](arkts-arkui-drawabledescriptorloadedresult-i.md#drawabledescriptorloadedresult). |
| [PixelMapDrawableDescriptor](arkts-arkui-pixelmapdrawabledescriptor-c.md) | Implements a **PixelMapDrawableDescriptor** object, which can be created by passing in a **PixelMap** object. Inherits from [DrawableDescriptor](arkts-arkui-drawabledescriptorloadedresult-i.md#drawabledescriptorloadedresult). |

<!--Del-->
### Classes（系统接口）

| Name | Description |
| --- | --- |
| [DrawableDescriptor](arkts-arkui-drawabledescriptor-c-sys.md) | Represents the base class providing overridable methods for [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#pixelmap) acquisition and image resource loading. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AnimationController](arkts-arkui-animationcontroller-i.md) | Implements an animation controller object. It provides APIs for playing, stopping, resuming, and pausing animations, as well as querying the status. |
| [AnimationOptions](arkts-arkui-animationoptions-i.md) | Provides the configuration options for animation playback, including the playback duration, number of playback times, and autoplay behavior. |
| [DrawableDescriptorLoadedResult](arkts-arkui-drawabledescriptorloadedresult-i.md) | Represents the result of loading an image resource or URI. |
| [HdrCompositionConfig](arkts-arkui-hdrcompositionconfig-i.md) | Provides HDR composition configuration. |

### Enums

| Name | Description |
| --- | --- |
| [AnimationStopMode](arkts-arkui-animationstopmode-e.md) | Enumerates the stop modes of an animation. |

