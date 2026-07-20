# CapturePhoto

**CapturePhoto** provides APIs for obtaining the objects of the full-quality image and the uncompressed image.

**Since:** 23

<!--Device-camera-interface CapturePhoto--><!--Device-camera-interface CapturePhoto-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## release

```TypeScript
release(): Promise<void>
```

Releases output resources. This API uses a promise to return the result.Model constraint: This API can be used only in the stage model.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-CapturePhoto-release(): Promise<void>--><!--Device-CapturePhoto-release(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

## main

```TypeScript
main: ImageType
```

Object of the full-quality image and the uncompressed image.

**Type:** ImageType

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-CapturePhoto-main: ImageType--><!--Device-CapturePhoto-main: ImageType-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

