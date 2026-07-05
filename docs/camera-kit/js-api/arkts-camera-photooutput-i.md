# PhotoOutput

Implements output information used in a photo session. It inherits from [CameraOutput]camera.CameraOutput.

**Inheritance:** PhotoOutputextends: CameraOutput.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## burstCapture

```TypeScript
burstCapture(setting: PhotoCaptureSetting): Promise<void>
```

Starts the burst mode, in which users can capture a series of photos in quick succession. This API is generally used in photo mode. After the burst mode starts, the bottom layer continues displaying photos. You can call [confirmCapture]camera.PhotoOutput.confirmCapture to cancel the burst mode. This API uses a promise to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| setting | PhotoCaptureSetting | Yes | Shooting parameters. The input of undefined is processed as if no  parameters were passed. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function burstCapture(photoOutput: camera.PhotoOutput): void {
  let captureLocation: camera.Location = {
    latitude: 0,
    longitude: 0,
    altitude: 0
  }
  let settings: camera.PhotoCaptureSetting = {
    quality: camera.QualityLevel.QUALITY_LEVEL_LOW,
    rotation: camera.ImageRotation.ROTATION_0,
    location: captureLocation,
    mirror: false
  }
  photoOutput.burstCapture(settings).then(() => {
    console.info('Promise returned to indicate that photo burstCapture request success.');
  }).catch((error: BusinessError) => {
    console.error(`Failed to photo output burstCapture, error code: ${error.code}.`);
  });
}

```

## capture

```TypeScript
capture(callback: AsyncCallback<void>): void
```

Captures a photo with the default photo capture parameters. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the photo is successfully  captured with the default parameters, err is undefined; otherwise, err is an error object with an  error code defined in [CameraErrorCode]camera.CameraErrorCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

## capture

```TypeScript
capture(): Promise<void>
```

Captures a photo with the default photo capture parameters. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

## capture

```TypeScript
capture(setting: PhotoCaptureSetting, callback: AsyncCallback<void>): void
```

Captures a photo with the specified photo capture parameters. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| setting | PhotoCaptureSetting | Yes | Photo capture settings. If the input data is of the undefined type,  a photo capture operation is triggered based on the default settings. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation fails, an error  code defined in [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

## capture

```TypeScript
capture(setting: PhotoCaptureSetting): Promise<void>
```

Captures a photo with the specified photo capture parameters. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| setting | PhotoCaptureSetting | Yes | Photo capture settings. If the input data is of the undefined type,  a photo capture operation is triggered based on the default settings. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

## confirmCapture

```TypeScript
confirmCapture(): void
```

Confirms photo capture. This API is generally used in night photo mode when users need to stop the exposure countdown and take a photo in advance. This API is used to end the burst mode, which is started by calling [burstCapture]camera.PhotoOutput.burstCapture.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function confirmCapture(photoOutput: camera.PhotoOutput): void {
  try {
    photoOutput.confirmCapture();
  } catch (error) {
    let err = error as BusinessError;
    console.error(`The confirmCapture call failed. error code: ${err.code}`);
  }
}

```

## deferImageDelivery

```TypeScript
deferImageDelivery(type: DeferredDeliveryImageType): void
```

Enables deferred delivery of a certain type.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | DeferredDeliveryImageType | Yes | Deferred delivery image type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

**Example**

```TypeScript
function deferImageDelivery(photoOutput: camera.PhotoOutput, type: camera.DeferredDeliveryImageType): void {
  photoOutput.deferImageDelivery(type);
}

```

## enableAutoCloudImageEnhancement

```TypeScript
enableAutoCloudImageEnhancement(enabled: boolean): void
```

Enable auto cloud image enhancement

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Target state for auto cloud image enhancement. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. |

## enableAutoExtendedGainmapDelivery

```TypeScript
enableAutoExtendedGainmapDelivery(enabled: boolean): void
```

Enable auto extended gainmap delivery.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | enable auto extended gainmap delivery if TRUE. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config, only throw in session usage. |
| 7400201 | Camera service fatal error. |

## enableAutoHighQualityPhoto

```TypeScript
enableAutoHighQualityPhoto(enabled: boolean): void
```

Enables automatic high quality for photos. Before using this API, call [isAutoHighQualityPhotoSupported]camera.PhotoOutput.isAutoHighQualityPhotoSupported to check whether automatic high quality is supported.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable or disable automatic high quality for photos. true to enable,  false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400104 | session is not running. |
| 7400201 | Camera service fatal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function enableAutoHighQualityPhoto(photoOutput: camera.PhotoOutput): void {
  return photoOutput.enableAutoHighQualityPhoto(true);
}

```

## enableDepthDataDelivery

```TypeScript
enableDepthDataDelivery(enabled: boolean): void
```

Enable depth data delivery.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Target state for depth data delivery. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

## enableMirror

```TypeScript
enableMirror(enabled: boolean): void
```

Enables or disables mirroring photo capture. Before calling this API, check whether moving photo capture is supported by calling [isMovingPhotoSupported]camera.PhotoOutput.isMovingPhotoSupported and whether mirroring is supported by calling [isMirrorSupported]camera.PhotoOutput.isMirrorSupported.

**Since:** 13

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable mirroring photo capture. true to enable, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## enableMovingPhoto

```TypeScript
enableMovingPhoto(enabled: boolean): void
```

Enables or disables the feature of taking moving photos.

**Since:** 12

**Required permissions:** 

 ohos.permission.MICROPHONE

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable the feature of taking moving photos. true to enable, false  otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. |

## enableOffline

```TypeScript
enableOffline(): void
```

Enable offline processing.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400104 | session is not running. |
| 7400201 | Camera service fatal error. |

## enableOriginalImageGeneration

```TypeScript
enableOriginalImageGeneration(enabled: boolean): void
```

Enable original image generation.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | enable original image generation if TRUE. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400201 | Camera service fatal error. |

## enableQuickThumbnail

```TypeScript
enableQuickThumbnail(enabled: boolean): void
```

Enables or disables the quick thumbnail feature. This API takes effect after [addOutput]camera.Session.addOutput and [addInput]camera.Session.addInput and before [commitConfig]camera.Session.commitConfig().

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable the quick thumbnail feature. true to enable, false  otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400104 | session is not running. |
| 202 | Not System Application. [since 12] |
| 7400101 | Parameter missing or parameter type incorrect. [since 12] |
| 7400201 | Camera service fatal error. [since 12] |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { camera } from '@kit.CameraKit';

async function enableQuickThumbnail(context: common.BaseContext, mode: camera.SceneMode, photoProfile: camera.Profile): Promise<void> {
  let cameraManager: camera.CameraManager = camera.getCameraManager(context);
  let cameras: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();
  // Create a CaptureSession instance.
  let session: camera.Session = cameraManager.createSession(mode);
  // Start configuration for the session.
  session.beginConfig();
  // Add a CameraInput instance to the session.
  let cameraInput: camera.CameraInput = cameraManager.createCameraInput(cameras[0]);
  await cameraInput.open();
  session.addInput(cameraInput);
  // Add a PhotoOutput instance to the session.
  let photoOutput: camera.PhotoOutput = cameraManager.createPhotoOutput(photoProfile);
  session.addOutput(photoOutput);
  let isSupported: boolean = photoOutput.isQuickThumbnailSupported();
  if (!isSupported) {
    console.info('Quick Thumbnail is not supported to be turned on.');
    return;
  }
  try {
    photoOutput.enableQuickThumbnail(true);
  } catch (error) {
    let err = error as BusinessError;
    console.error(`The enableQuickThumbnail call failed. error code: ${err.code}`);
  }
}

```

## enableRawDelivery

```TypeScript
enableRawDelivery(enabled: boolean): void
```

Enable raw image image delivery.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Target state for raw image delivery. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

## getActiveProfile

```TypeScript
getActiveProfile(): Profile
```

Obtains the profile that takes effect currently.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Profile | Profile obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error. |

## getPhotoRotation

```TypeScript
getPhotoRotation(deviceDegree?: int): ImageRotation
```

Obtains the photo rotation angle. - Device's natural orientation: the default orientation for using a device. For example, the default orientation of the bar-type phone is in portrait mode, with the charging port facing downward. - Camera lens angle: equivalent to the angle at which the camera is rotated clockwise to match the device's natural orientation. For example, the rear camera sensor of a bar-type phone is installed in landscape mode. Therefore, it needs to be rotated by 90 degrees clockwise to match the device's natural orientation.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceDegree | int | No | Device rotation angle, measured in degrees, within the range of [0, 360]. If the  input value goes beyond this range, the system uses the remainder of the input value divided by 360. Since  API version 23, the input parameter deviceDegree is optional. If no parameter is passed, the system  obtains the deviceDegree value to calculate the photo rotation angle. [since 12 - 22] |

**Return value:**

| Type | Description |
| --- | --- |
| ImageRotation | Rotation angle of the photo. If the API call fails, undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. [since 12 - 22] |
| 7400201 | Camera service fatal error. |

## getSupportedMovingPhotoVideoCodecTypes

```TypeScript
getSupportedMovingPhotoVideoCodecTypes(): Array<VideoCodecType>
```

Obtains the supported video codec types of moving photos.

**Since:** 13

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;VideoCodecType> | Array holding the supported video codec types. If the API call fails,  undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error. |

## isAutoCloudImageEnhancementSupported

```TypeScript
isAutoCloudImageEnhancementSupported(): boolean
```

Confirm if the auto cloud image enhancement is supported.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | TRUE if the auto cloud image enhancement is supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400201 | Camera service fatal error. |

## isAutoExtendedGainmapDeliverySupported

```TypeScript
isAutoExtendedGainmapDeliverySupported(): boolean
```

Confirm if auto extended gainmap delivery supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | TRUE if the auto extended gainmap delivery is supported. |

## isAutoHighQualityPhotoSupported

```TypeScript
isAutoHighQualityPhotoSupported(): boolean
```

Checks whether automatic high quality is supported for photos.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether automatic high quality is supported. true if supported,  false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400104 | session is not running. |
| 7400201 | Camera service fatal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function isAutoHighQualityPhotoSupported(photoOutput: camera.PhotoOutput): boolean {
  return photoOutput.isAutoHighQualityPhotoSupported();
}

```

## isDeferredImageDeliveryEnabled

```TypeScript
isDeferredImageDeliveryEnabled(type: DeferredDeliveryImageType): boolean
```

Checks whether deferred delivery of a certain type is enabled.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | DeferredDeliveryImageType | Yes | Deferred delivery image type. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether deferred delivery is enabled. true if enabled, false  otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

**Example**

```TypeScript
function isDeferredImageDeliveryEnabled(photoOutput: camera.PhotoOutput, type: camera.DeferredDeliveryImageType): boolean {
  let res: boolean = false;
  res = photoOutput.isDeferredImageDeliveryEnabled(type);
  return res;
}

```

## isDeferredImageDeliverySupported

```TypeScript
isDeferredImageDeliverySupported(type: DeferredDeliveryImageType): boolean
```

Checks whether deferred delivery of a certain type is supported.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | DeferredDeliveryImageType | Yes | Deferred delivery image type. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of deferred delivery. true if supported, false  otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

**Example**

```TypeScript
function isDeferredImageDeliverySupported(photoOutput: camera.PhotoOutput, type: camera.DeferredDeliveryImageType): boolean {
  let res: boolean = false;
  res = photoOutput.isDeferredImageDeliverySupported(type);
  return res;
}

```

## isDepthDataDeliverySupported

```TypeScript
isDepthDataDeliverySupported(): boolean
```

Check if the depth data delivery is supported.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | TRUE if the type of delivery image is enabled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

## isMirrorSupported

```TypeScript
isMirrorSupported(): boolean
```

Checks whether mirror photography is supported.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of mirror photography. true if supported, false  otherwise. If the API call fails, undefined is returned. |

## isMovingPhotoSupported

```TypeScript
isMovingPhotoSupported(): boolean
```

Checks whether taking moving photos is supported.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of taking moving photos. true if supported, false  otherwise. If the API call fails, undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error. |

## isOfflineSupported

```TypeScript
isOfflineSupported(): boolean
```

Confirm if offline processing is supported.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | TRUE if the type of offline is supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400201 | Camera service fatal error. |

## isOriginalImageGenerationSupported

```TypeScript
isOriginalImageGenerationSupported(): boolean
```

Confirm if original image generation supported.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | TRUE if the original image generation is supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400201 | Camera service fatal error. |

## isPhotoQualityPrioritizationSupported

```TypeScript
isPhotoQualityPrioritizationSupported(qualityPrioritization: PhotoQualityPrioritization): boolean
```

Checks whether the specified photo quality prioritization strategy is supported.

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| qualityPrioritization | PhotoQualityPrioritization | Yes | Photo quality prioritization strategy. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the specified photo quality prioritization strategy.  true if supported, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error,  reconfiguring streams is needed to recover from failure. |

## isQuickThumbnailSupported

```TypeScript
isQuickThumbnailSupported(): boolean
```

Checks whether the quick thumbnail feature is supported. This API takes effect after [addOutput]camera.Session.addOutput and [addInput]camera.Session.addInput and before [commitConfig]camera.Session.commitConfig().

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the quick thumbnail feature. true if supported,  false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400104 | session is not running. |
| 202 | Not System Application. [since 12] |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

async function isQuickThumbnailSupported(context: common.BaseContext, mode: camera.SceneMode, photoProfile: camera.Profile): Promise<boolean> {
  let cameraManager: camera.CameraManager = camera.getCameraManager(context);
  let cameras: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();
  // Create a CaptureSession instance.
  let session: camera.Session = cameraManager.createSession(mode);
  // Start configuration for the session.
  session.beginConfig();
  // Add a CameraInput instance to the session.
  if (cameras.length <= 0) {
    console.info('Get supported cameras is null or [].');
    return false;
  }
  let cameraInput: camera.CameraInput = cameraManager.createCameraInput(cameras[0]);
  await cameraInput.open();
  session.addInput(cameraInput);
  // Add a PhotoOutput instance to the session.
  let photoOutput: camera.PhotoOutput = cameraManager.createPhotoOutput(photoProfile);
  try {
    session.addOutput(photoOutput);
  } catch (error) {
    let err = error as BusinessError;
    console.error(`AddOutput called failed. error code: ${err.code}`);
    return false;
  }
  let isSupported: boolean = photoOutput.isQuickThumbnailSupported();
  return isSupported;
}

```

## isRawDeliverySupported

```TypeScript
isRawDeliverySupported(): boolean
```

Confirm if the raw image delivery is supported

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | TRUE if the type of delivery image is support. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

## off('photoAvailable')

```TypeScript
off(type: 'photoAvailable', callback?: AsyncCallback<Photo>): void
```

Unsubscribes from the events of returning available photos.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoAvailable' | Yes | Event type. The value is fixed at 'photoAvailable'. The event can be  listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;Photo> | No | Callback used to return the result. If this parameter is specified,  the subscription to the specified event with the specified callback is canceled. (The callback object cannot  be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## off('deferredPhotoProxyAvailable')

```TypeScript
off(type: 'deferredPhotoProxyAvailable', callback?: AsyncCallback<DeferredPhotoProxy>): void
```

Unsubscribes from events indicating available thumbnail proxies.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deferredPhotoProxyAvailable' | Yes | Event type. The value is fixed at  'deferredPhotoProxyAvailable'. The event can be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;DeferredPhotoProxy> | No | Callback used to return the result. This parameter is  optional. If this parameter is specified, the subscription to the specified event  on('deferredPhotoProxyAvailable') with the specified callback is canceled. (The callback object cannot be  an anonymous function.) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

function callback(err: BusinessError, proxyObj: camera.DeferredPhotoProxy): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  proxyObj.getThumbnail().then((thumbnail: image.PixelMap) => {
    AppStorage.setOrCreate('proxyThumbnail', thumbnail);
  });
}

function unRegisterPhotoOutputDeferredPhotoProxyAvailable(photoOutput: camera.PhotoOutput): void {
  photoOutput.off('deferredPhotoProxyAvailable', callback);
}

```

## off('photoAssetAvailable')

```TypeScript
off(type: 'photoAssetAvailable', callback?: AsyncCallback<photoAccessHelper.PhotoAsset>): void
```

Unsubscribes from photo asset available events.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoAssetAvailable' | Yes | Event type. The value is fixed at 'photoAssetAvailable'. The event  can be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;photoAccessHelper.PhotoAsset> | No | Callback used for unsubscription. If this  parameter is specified, the subscription to the specified event with the specified callback is canceled. (The  callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with  all the callbacks are canceled. |

## off('captureStart')

```TypeScript
off(type: 'captureStart', callback?: AsyncCallback<number>): void
```

Unsubscribes from capture start events. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.PhotoOutput.off(type:

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureStart' | Yes | Event type. The value is fixed at 'captureStart'. The event can be listened  for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;number> | No | Callback used to return the result. If this parameter is specified,  the subscription to the specified event with the specified callback is canceled. (The callback object cannot  be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## off('captureStartWithInfo')

```TypeScript
off(type: 'captureStartWithInfo', callback?: AsyncCallback<CaptureStartInfo>): void
```

Unsubscribes from capture start events.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureStartWithInfo' | Yes | Event type. The value is fixed at 'captureStartWithInfo'. The event  can be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;CaptureStartInfo> | No | Callback used to return the result. If this parameter is  specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. |

## off('frameShutter')

```TypeScript
off(type: 'frameShutter', callback?: AsyncCallback<FrameShutterInfo>): void
```

Unsubscribes from frame shutter events.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameShutter' | Yes | Event type. The value is fixed at 'frameShutter'. The event can be listened  for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;FrameShutterInfo> | No | Callback used to return the result. If this parameter is  specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. |

## off('frameShutterEnd')

```TypeScript
off(type: 'frameShutterEnd', callback?: AsyncCallback<FrameShutterEndInfo>): void
```

Unsubscribes from frame shutter end events.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameShutterEnd' | Yes | Event type. The value is fixed at 'frameShutterEnd'. The event can be  listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;FrameShutterEndInfo> | No | Callback used to return the result. If this parameter is  specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. |

## off('captureEnd')

```TypeScript
off(type: 'captureEnd', callback?: AsyncCallback<CaptureEndInfo>): void
```

Unsubscribes from capture end events.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureEnd' | Yes | Event type. The value is fixed at 'captureEnd'. The event can be listened for  when a photoOutput instance is created. |
| callback | AsyncCallback&lt;CaptureEndInfo> | No | Callback used to return the result. If this parameter is  specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. |

## off('captureReady')

```TypeScript
off(type: 'captureReady', callback?: AsyncCallback<void>): void
```

Unsubscribes from capture ready events.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureReady' | Yes | Event type. The value is fixed at 'captureReady'. The event can be listened  for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;void> | No | Callback used to return the result. If this parameter is specified, the  subscription to the specified event with the specified callback is canceled. (The callback object cannot be  an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## off('estimatedCaptureDuration')

```TypeScript
off(type: 'estimatedCaptureDuration', callback?: AsyncCallback<double>): void
```

Unsubscribes from estimated capture duration events.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'estimatedCaptureDuration' | Yes | Event type. The value is fixed at 'estimatedCaptureDuration'.  The event can be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;double> | No | Callback used to return the result. If this parameter is specified,  the subscription to the specified event with the specified callback is canceled. (The callback object cannot  be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from PhotoOutput error events.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at 'error'. The event can be listened for when a  photoOutput instance is created. |
| callback | ErrorCallback | No | Callback used to return the result. If this parameter is specified, the  subscription to the specified event with the specified callback is canceled. (The callback object cannot be  an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## off('quickThumbnail')

```TypeScript
off(type: 'quickThumbnail', callback?: AsyncCallback<image.PixelMap>): void
```

Unsubscribes from quick thumbnail output events.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'quickThumbnail' | Yes | Event type. The value is fixed at 'quickThumbnail'. |
| callback | AsyncCallback&lt;image.PixelMap> | No | Callback used to return the result. This parameter is  optional. If this parameter is specified, the subscription to the specified event on('quickThumbnail')  with the specified callback is canceled. (The callback object cannot be an anonymous function.) |

**Example**

```TypeScript
function unregisterQuickThumbnail(photoOutput: camera.PhotoOutput): void {
  photoOutput.off('quickThumbnail');
}

```

## off('offlineDeliveryFinished')

```TypeScript
off(type: 'offlineDeliveryFinished', callback?: AsyncCallback<void>): void
```

Unsubscribes offline Delivery finished events. This method is valid only after enableOffline() is called.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'offlineDeliveryFinished' | Yes | Event type. |
| callback | AsyncCallback&lt;void> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## offCaptureEnd

```TypeScript
offCaptureEnd(callback?: AsyncCallback<CaptureEndInfo>): void
```

Unsubscribes from capture end event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CaptureEndInfo> | No |  |

## offCapturePhotoAvailable

```TypeScript
offCapturePhotoAvailable(callback?: Callback<CapturePhoto>): void
```

Unsubscribes photo available event callback, which supports delivery of uncompressed photo.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CapturePhoto> | No |  |

## offCaptureReady

```TypeScript
offCaptureReady(callback?: AsyncCallback<void>): void
```

Unsubscribes from capture ready event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | No |  |

## offCaptureStartWithInfo

```TypeScript
offCaptureStartWithInfo(callback?: AsyncCallback<CaptureStartInfo>): void
```

Unsubscribes from capture start event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CaptureStartInfo> | No |  |

## offDeferredPhotoProxyAvailable

```TypeScript
offDeferredPhotoProxyAvailable(callback?: AsyncCallback<DeferredPhotoProxy>): void
```

Unsubscribes deferred photo proxy available event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DeferredPhotoProxy> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## offError

```TypeScript
offError(callback?: ErrorCallback): void
```

Unsubscribes from error events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ErrorCallback | No |  |

## offEstimatedCaptureDuration

```TypeScript
offEstimatedCaptureDuration(callback?: AsyncCallback<double>): void
```

Unsubscribes from estimated capture duration event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;double> | No |  |

## offFrameShutter

```TypeScript
offFrameShutter(callback?: AsyncCallback<FrameShutterInfo>): void
```

Unsubscribes from frame shutter event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;FrameShutterInfo> | No |  |

## offFrameShutterEnd

```TypeScript
offFrameShutterEnd(callback?: AsyncCallback<FrameShutterEndInfo>): void
```

Unsubscribes from frame shutter end event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;FrameShutterEndInfo> | No |  |

## offOfflineDeliveryFinished

```TypeScript
offOfflineDeliveryFinished(callback?: AsyncCallback<void>): void
```

Unsubscribes offline Delivery finished events. This method is valid only after enableOffline() is called.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## offPhotoAssetAvailable

```TypeScript
offPhotoAssetAvailable(callback?: AsyncCallback<photoAccessHelper.PhotoAsset>): void
```

Unsubscribes photo asset event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;photoAccessHelper.PhotoAsset> | No |  |

## offPhotoAvailable

```TypeScript
offPhotoAvailable(callback?: AsyncCallback<Photo>): void
```

Unsubscribes photo available event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Photo> | No |  |

## offQuickThumbnail

```TypeScript
offQuickThumbnail(callback?: AsyncCallback<image.PixelMap>): void
```

Unsubscribes from camera thumbnail events. This method is valid only after enableQuickThumbnail(true) is called.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;image.PixelMap> | No |  |

## on('photoAvailable')

```TypeScript
on(type: 'photoAvailable', callback: AsyncCallback<Photo>): void
```

Subscribes to the events of returning available photos. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoAvailable' | Yes | Event type. The value is fixed at 'photoAvailable'. The event can be  listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;Photo> | Yes | Callback used to listen for the events of returning available photos. |

## on('deferredPhotoProxyAvailable')

```TypeScript
on(type: 'deferredPhotoProxyAvailable', callback: AsyncCallback<DeferredPhotoProxy>): void
```

Subscribes to events indicating available thumbnail proxies. This API uses an asynchronous callback to return the result.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deferredPhotoProxyAvailable' | Yes | Event type. The value is fixed at  'deferredPhotoProxyAvailable'. The event can be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;DeferredPhotoProxy> | Yes | Callback used to return the thumbnail proxy. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

function callback(err: BusinessError, proxyObj: camera.DeferredPhotoProxy): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  proxyObj.getThumbnail().then((thumbnail: image.PixelMap) => {
    AppStorage.setOrCreate('proxyThumbnail', thumbnail);
  });
}

function registerPhotoOutputDeferredPhotoProxyAvailable(photoOutput: camera.PhotoOutput): void {
  photoOutput.on('deferredPhotoProxyAvailable', callback);
}

```

## on('photoAssetAvailable')

```TypeScript
on(type: 'photoAssetAvailable', callback: AsyncCallback<photoAccessHelper.PhotoAsset>): void
```

Subscribes to photo asset available events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoAssetAvailable' | Yes | Event type. The value is fixed at 'photoAssetAvailable'. The event  can be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;photoAccessHelper.PhotoAsset> | Yes | Callback used to return the photo asset. |

## on('captureStart')

```TypeScript
on(type: 'captureStart', callback: AsyncCallback<number>): void
```

Subscribes to capture start events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.PhotoOutput.on(type:

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureStart' | Yes | Event type. The value is fixed at 'captureStart'. The event can be listened  for when a photoOutput instance is created. This event is triggered and returned when the bottom layer starts  exposure each time a photo is taken. |
| callback | AsyncCallback&lt;number> | Yes | Callback used to return the capture ID. |

## on('captureStartWithInfo')

```TypeScript
on(type: 'captureStartWithInfo', callback: AsyncCallback<CaptureStartInfo>): void
```

Subscribes to capture start events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureStartWithInfo' | Yes | Event type. The value is fixed at 'captureStartWithInfo'. The event  can be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;CaptureStartInfo> | Yes | Callback used to return the capture ID. |

## on('frameShutter')

```TypeScript
on(type: 'frameShutter', callback: AsyncCallback<FrameShutterInfo>): void
```

Subscribes to frame shutter events. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameShutter' | Yes | Event type. The value is fixed at 'frameShutter'. The event can be listened  for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;FrameShutterInfo> | Yes | Callback used to return the result. A new photo capture  request can be delivered as long as this event is returned. |

## on('frameShutterEnd')

```TypeScript
on(type: 'frameShutterEnd', callback: AsyncCallback<FrameShutterEndInfo>): void
```

Subscribes to frame shutter end events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameShutterEnd' | Yes | Event type. The value is fixed at 'frameShutterEnd'. The event can be  listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;FrameShutterEndInfo> | Yes | Callback used to return the result. It is invoked when  the frame shutter ends. |

## on('captureEnd')

```TypeScript
on(type: 'captureEnd', callback: AsyncCallback<CaptureEndInfo>): void
```

Subscribes to capture end events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureEnd' | Yes | Event type. The value is fixed at 'captureEnd'. The event can be listened for  when a photoOutput instance is created. This event is triggered and the corresponding information is returned  when the photo capture is complete. |
| callback | AsyncCallback&lt;CaptureEndInfo> | Yes | Callback used to return the result. |

## on('captureReady')

```TypeScript
on(type: 'captureReady', callback: AsyncCallback<void>): void
```

Subscribes to capture ready events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureReady' | Yes | Event type. The value is fixed at 'captureReady'. The event can be listened  for when a photoOutput instance is created. The event is triggered and the corresponding information is  returned when it is ready to take the next photo. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

## on('estimatedCaptureDuration')

```TypeScript
on(type: 'estimatedCaptureDuration', callback: AsyncCallback<double>): void
```

Subscribes to estimated capture duration events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'estimatedCaptureDuration' | Yes | Event type. The value is fixed at 'estimatedCaptureDuration'.  The event can be listened for when a photoOutput instance is created. This event is triggered and the  corresponding information is returned when the photo capture is complete. |
| callback | AsyncCallback&lt;double> | Yes | Callback used to return the estimated duration when the sensor  captures frames at the bottom layer in a single capture, measured in units of milliseconds. If –1 is  reported, there is no estimated duration. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to PhotoOutput error events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at 'error'. The event can be listened for when a  photoOutput instance is created. This event is triggered and the corresponding error message is returned when  an error occurs during the calling of a photo-related API. |
| callback | ErrorCallback | Yes | Callback used to return an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

## on('quickThumbnail')

```TypeScript
on(type: 'quickThumbnail', callback: AsyncCallback<image.PixelMap>): void
```

Subscribes to quick thumbnail output events. This API uses an asynchronous callback to return the result. The listening takes effect after **enableQuickThumbnail(true)** is called.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'quickThumbnail' | Yes | Event type. The value is fixed at 'quickThumbnail'. |
| callback | AsyncCallback&lt;image.PixelMap> | Yes | Callback that returns a PixelMap instance. |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';
import { camera } from '@kit.CameraKit';

function callback(err: BusinessError, pixelMap: image.PixelMap): void {
  if (err || pixelMap === undefined) {
      console.error('photoOutput on thumbnail failed');
      return;
  }
  // Display or save the PixelMap instance.
  // Execute the operation.
}

async function registerQuickThumbnail(context: common.BaseContext, mode: camera.SceneMode, photoProfile: camera.Profile): Promise<void> {
  let cameraManager: camera.CameraManager = camera.getCameraManager(context);
  let cameras: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();
  // Create a CaptureSession instance.
  let session: camera.Session = cameraManager.createSession(mode);
  // Start configuration for the session.
  session.beginConfig();
  // Add a CameraInput instance to the session.
  let cameraInput: camera.CameraInput = cameraManager.createCameraInput(cameras[0]);
  await cameraInput.open();
  session.addInput(cameraInput);
  // Add a PhotoOutput instance to the session.
  let photoOutput: camera.PhotoOutput = cameraManager.createPhotoOutput(photoProfile);
  session.addOutput(photoOutput);
  let isSupported: boolean = photoOutput.isQuickThumbnailSupported();
  if (!isSupported) {
    console.info('Quick Thumbnail is not supported to be turned on.');
    return;
  }
  try {
    photoOutput.enableQuickThumbnail(true);
  } catch (error) {
    let err = error as BusinessError;
    console.error(`The enableQuickThumbnail call failed. error code: ${err.code}`);
  }

  photoOutput.on('quickThumbnail', callback);
}

```

## on('offlineDeliveryFinished')

```TypeScript
on(type: 'offlineDeliveryFinished', callback: AsyncCallback<void>): void
```

Subscribes offline Delivery finished events. This method is valid only after enableOffline() is called.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'offlineDeliveryFinished' | Yes | Event type. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to get offline Delivery finished events. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## onCaptureEnd

```TypeScript
onCaptureEnd(callback: AsyncCallback<CaptureEndInfo>): void
```

Subscribes capture end event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CaptureEndInfo> | Yes | Callback used to get the capture end information. |

## onCapturePhotoAvailable

```TypeScript
onCapturePhotoAvailable(callback: Callback<CapturePhoto>): void
```

Subscribes photo available event callback, which supports delivery of uncompressed photo.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CapturePhoto> | Yes | Callback used to get the CapturePhoto. |

## onCaptureReady

```TypeScript
onCaptureReady(callback: AsyncCallback<void>): void
```

Subscribes capture ready event callback. After receiving the callback, can proceed to the next capture

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to notice capture ready. |

## onCaptureStartWithInfo

```TypeScript
onCaptureStartWithInfo(callback: AsyncCallback<CaptureStartInfo>): void
```

Subscribes capture start event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CaptureStartInfo> | Yes | Callback used to get the capture start info. |

## onDeferredPhotoProxyAvailable

```TypeScript
onDeferredPhotoProxyAvailable(callback: AsyncCallback<DeferredPhotoProxy>): void
```

Subscribes deferred photo proxy available event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DeferredPhotoProxy> | Yes | Callback used to get the DeferredPhotoProxy. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## onError

```TypeScript
onError(callback: ErrorCallback): void
```

Subscribes to error events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ErrorCallback | Yes | Callback used to get the photo output errors. |

## onEstimatedCaptureDuration

```TypeScript
onEstimatedCaptureDuration(callback: AsyncCallback<double>): void
```

Subscribes estimated capture duration event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;double> | Yes | Callback used to notify the estimated capture duration (in  milliseconds). |

## onFrameShutter

```TypeScript
onFrameShutter(callback: AsyncCallback<FrameShutterInfo>): void
```

Subscribes frame shutter event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;FrameShutterInfo> | Yes | Callback used to get the frame shutter information. |

## onFrameShutterEnd

```TypeScript
onFrameShutterEnd(callback: AsyncCallback<FrameShutterEndInfo>): void
```

Subscribes frame shutter end event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;FrameShutterEndInfo> | Yes | Callback used to get the frame shutter end information. |

## onOfflineDeliveryFinished

```TypeScript
onOfflineDeliveryFinished(callback: AsyncCallback<void>): void
```

Subscribes offline Delivery finished events. This method is valid only after enableOffline() is called.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to get offline Delivery finished events. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## onPhotoAssetAvailable

```TypeScript
onPhotoAssetAvailable(callback: AsyncCallback<photoAccessHelper.PhotoAsset>): void
```

Subscribes to photo asset event callback. This API processes deferred photo delivery data by quickly displaying low-quality images to give users the impression of faster photo capture, while also generating high-quality images to maintain the final output quality. For details about the design specifications, see [Optimizing Deferred Photo Delivery](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-camera-shot2see).

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;photoAccessHelper.PhotoAsset> | Yes | Callback used to get the asset. |

## onPhotoAvailable

```TypeScript
onPhotoAvailable(callback: AsyncCallback<Photo>): void
```

Subscribes photo available event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Photo> | Yes | Callback used to get the Photo. |

## onQuickThumbnail

```TypeScript
onQuickThumbnail(callback: AsyncCallback<image.PixelMap>): void
```

Subscribes to camera thumbnail events. This method is valid only after enableQuickThumbnail(true) is called.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;image.PixelMap> | Yes | Callback used to get the quick thumbnail. |

## setEditData

```TypeScript
setEditData(editData: string): void
```

Set edit data.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| editData | string | Yes | The edit data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400201 | Camera service fatal error. |

## setMovingPhotoVideoCodecType

```TypeScript
setMovingPhotoVideoCodecType(codecType: VideoCodecType): void
```

Sets a video codec type for moving photos.

**Since:** 13

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| codecType | VideoCodecType | Yes | Video codec type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error. |

## setPhotoQualityPrioritization

```TypeScript
setPhotoQualityPrioritization(qualityPrioritization: PhotoQualityPrioritization): void
```

Sets the photo quality prioritization strategy. Before setting the strategy, you can call [isPhotoQualityPrioritizationSupported]camera.PhotoOutput.isPhotoQualityPrioritizationSupported to check whether the device supports the specified photo quality prioritization strategy.

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| qualityPrioritization | PhotoQualityPrioritization | Yes | Photo quality prioritization strategy. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error,  reconfiguring streams is needed to recover from failure. |
| 7400102 | Operation not allowed. |

