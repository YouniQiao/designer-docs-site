# @ohos.multimedia.cameraPicker

The module provides APIs for an application to use the system camera to take photos or record videos, depending on the media type specified by the application. The application must call these APIs within a UIAbility. Otherwise, the camera picker cannot be started.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { cameraPicker } from '@kit.CameraKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [pick](arkts-camera-pick-f.md#pick-1) | Starts the camera picker and enters the corresponding mode based on the media type. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; When an application is running on a widescreen foldable device and the camera picker is launched while the device &gt; is unfolded, switching the device from unfolded to folded will automatically move the camera picker to the &gt; background. |

### Classes

| Name | Description |
| --- | --- |
| [PickerProfile](arkts-camera-pickerprofile-c.md) | Defines the configuration information about the camera picker. |
| [PickerResult](arkts-camera-pickerresult-c.md) | Defines the processing result of the camera picker. |

### Enums

| Name | Description |
| --- | --- |
| [PickerMediaType](arkts-camera-pickermediatype-e.md) | Enumerates the media types displayed in the camera picker. |

