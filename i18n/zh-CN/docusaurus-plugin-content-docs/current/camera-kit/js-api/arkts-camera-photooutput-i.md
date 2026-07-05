# PhotoOutput

Implements output information used in a photo session. It inherits from [CameraOutput]camera.CameraOutput.

**继承实现关系：** PhotoOutput继承自：CameraOutput。

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## burstCapture

```TypeScript
burstCapture(setting: PhotoCaptureSetting): Promise<void>
```

Starts the burst mode, in which users can capture a series of photos in quick succession. This API is generally used in photo mode. After the burst mode starts, the bottom layer continues displaying photos. You can call [confirmCapture]camera.PhotoOutput.confirmCapture to cancel the burst mode. This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| setting | PhotoCaptureSetting | 是 | Shooting parameters. The input of undefined is processed as if no  parameters were passed. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

**示例：**

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

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the photo is successfully  captured with the default parameters, err is undefined; otherwise, err is an error object with an  error code defined in [CameraErrorCode]camera.CameraErrorCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

## capture

```TypeScript
capture(): Promise<void>
```

Captures a photo with the default photo capture parameters. This API uses a promise to return the result.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

## capture

```TypeScript
capture(setting: PhotoCaptureSetting, callback: AsyncCallback<void>): void
```

Captures a photo with the specified photo capture parameters. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| setting | PhotoCaptureSetting | 是 | Photo capture settings. If the input data is of the undefined type,  a photo capture operation is triggered based on the default settings. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation fails, an error  code defined in [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

## capture

```TypeScript
capture(setting: PhotoCaptureSetting): Promise<void>
```

Captures a photo with the specified photo capture parameters. This API uses a promise to return the result.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| setting | PhotoCaptureSetting | 是 | Photo capture settings. If the input data is of the undefined type,  a photo capture operation is triggered based on the default settings. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

## confirmCapture

```TypeScript
confirmCapture(): void
```

Confirms photo capture. This API is generally used in night photo mode when users need to stop the exposure countdown and take a photo in advance. This API is used to end the burst mode, which is started by calling [burstCapture]camera.PhotoOutput.burstCapture.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

**示例：**

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

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | DeferredDeliveryImageType | 是 | Deferred delivery image type. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

**示例：**

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

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | Target state for auto cloud image enhancement. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. |

## enableAutoExtendedGainmapDelivery

```TypeScript
enableAutoExtendedGainmapDelivery(enabled: boolean): void
```

Enable auto extended gainmap delivery.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | enable auto extended gainmap delivery if TRUE. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config, only throw in session usage. |
| 7400201 | Camera service fatal error. |

## enableAutoHighQualityPhoto

```TypeScript
enableAutoHighQualityPhoto(enabled: boolean): void
```

Enables automatic high quality for photos. Before using this API, call [isAutoHighQualityPhotoSupported]camera.PhotoOutput.isAutoHighQualityPhotoSupported to check whether automatic high quality is supported.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | Whether to enable or disable automatic high quality for photos. true to enable,  false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400104 | session is not running. |
| 7400201 | Camera service fatal error. |

**示例：**

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

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | Target state for depth data delivery. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 13

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | Whether to enable mirroring photo capture. true to enable, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## enableMovingPhoto

```TypeScript
enableMovingPhoto(enabled: boolean): void
```

Enables or disables the feature of taking moving photos.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MICROPHONE

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | Whether to enable the feature of taking moving photos. true to enable, false  otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permission denied. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. |

## enableOffline

```TypeScript
enableOffline(): void
```

Enable offline processing.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400104 | session is not running. |
| 7400201 | Camera service fatal error. |

## enableOriginalImageGeneration

```TypeScript
enableOriginalImageGeneration(enabled: boolean): void
```

Enable original image generation.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | enable original image generation if TRUE. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400201 | Camera service fatal error. |

## enableQuickThumbnail

```TypeScript
enableQuickThumbnail(enabled: boolean): void
```

Enables or disables the quick thumbnail feature. This API takes effect after [addOutput]camera.Session.addOutput and [addInput]camera.Session.addInput and before [commitConfig]camera.Session.commitConfig().

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | Whether to enable the quick thumbnail feature. true to enable, false  otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400104 | session is not running. |
| 202 | Not System Application. [since 12] |
| 7400101 | Parameter missing or parameter type incorrect. [since 12] |
| 7400201 | Camera service fatal error. [since 12] |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { camera } from '@kit.CameraKit';

async function enableQuickThumbnail(context: common.BaseContext, mode: camera.SceneMode, photoProfile: camera.Profile): Promise<void> {
  let cameraManager: camera.CameraManager = camera.getCameraManager(context);
  let cameras: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();
  // 创建CaptureSession实例。
  let session: camera.Session = cameraManager.createSession(mode);
  // 开始配置会话。
  session.beginConfig();
  // 把CameraInput加入到会话。
  let cameraInput: camera.CameraInput = cameraManager.createCameraInput(cameras[0]);
  await cameraInput.open();
  session.addInput(cameraInput);
  // 把PhotoOutPut加入到会话。
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

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | Target state for raw image delivery. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Profile | Profile obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## getPhotoRotation

```TypeScript
getPhotoRotation(deviceDegree?: int): ImageRotation
```

Obtains the photo rotation angle. - Device's natural orientation: the default orientation for using a device. For example, the default orientation of the bar-type phone is in portrait mode, with the charging port facing downward. - Camera lens angle: equivalent to the angle at which the camera is rotated clockwise to match the device's natural orientation. For example, the rear camera sensor of a bar-type phone is installed in landscape mode. Therefore, it needs to be rotated by 90 degrees clockwise to match the device's natural orientation.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceDegree | int | 否 | Device rotation angle, measured in degrees, within the range of [0, 360]. If the  input value goes beyond this range, the system uses the remainder of the input value divided by 360. Since  API version 23, the input parameter deviceDegree is optional. If no parameter is passed, the system  obtains the deviceDegree value to calculate the photo rotation angle. [since 12 - 22] |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ImageRotation | Rotation angle of the photo. If the API call fails, undefined is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. [since 12 - 22] |
| 7400201 | Camera service fatal error. |

## getSupportedMovingPhotoVideoCodecTypes

```TypeScript
getSupportedMovingPhotoVideoCodecTypes(): Array<VideoCodecType>
```

Obtains the supported video codec types of moving photos.

**起始版本：** 13

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;VideoCodecType> | Array holding the supported video codec types. If the API call fails,  undefined is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## isAutoCloudImageEnhancementSupported

```TypeScript
isAutoCloudImageEnhancementSupported(): boolean
```

Confirm if the auto cloud image enhancement is supported.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | TRUE if the auto cloud image enhancement is supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400201 | Camera service fatal error. |

## isAutoExtendedGainmapDeliverySupported

```TypeScript
isAutoExtendedGainmapDeliverySupported(): boolean
```

Confirm if auto extended gainmap delivery supported.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | TRUE if the auto extended gainmap delivery is supported. |

## isAutoHighQualityPhotoSupported

```TypeScript
isAutoHighQualityPhotoSupported(): boolean
```

Checks whether automatic high quality is supported for photos.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether automatic high quality is supported. true if supported,  false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400104 | session is not running. |
| 7400201 | Camera service fatal error. |

**示例：**

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

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | DeferredDeliveryImageType | 是 | Deferred delivery image type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether deferred delivery is enabled. true if enabled, false  otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

**示例：**

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

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | DeferredDeliveryImageType | 是 | Deferred delivery image type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of deferred delivery. true if supported, false  otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

**示例：**

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

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | TRUE if the type of delivery image is enabled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

## isMirrorSupported

```TypeScript
isMirrorSupported(): boolean
```

Checks whether mirror photography is supported.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of mirror photography. true if supported, false  otherwise. If the API call fails, undefined is returned. |

## isMovingPhotoSupported

```TypeScript
isMovingPhotoSupported(): boolean
```

Checks whether taking moving photos is supported.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of taking moving photos. true if supported, false  otherwise. If the API call fails, undefined is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## isOfflineSupported

```TypeScript
isOfflineSupported(): boolean
```

Confirm if offline processing is supported.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | TRUE if the type of offline is supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400201 | Camera service fatal error. |

## isOriginalImageGenerationSupported

```TypeScript
isOriginalImageGenerationSupported(): boolean
```

Confirm if original image generation supported.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | TRUE if the original image generation is supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400201 | Camera service fatal error. |

## isPhotoQualityPrioritizationSupported

```TypeScript
isPhotoQualityPrioritizationSupported(qualityPrioritization: PhotoQualityPrioritization): boolean
```

Checks whether the specified photo quality prioritization strategy is supported.

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| qualityPrioritization | PhotoQualityPrioritization | 是 | Photo quality prioritization strategy. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the specified photo quality prioritization strategy.  true if supported, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error,  reconfiguring streams is needed to recover from failure. |

## isQuickThumbnailSupported

```TypeScript
isQuickThumbnailSupported(): boolean
```

Checks whether the quick thumbnail feature is supported. This API takes effect after [addOutput]camera.Session.addOutput and [addInput]camera.Session.addInput and before [commitConfig]camera.Session.commitConfig().

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the quick thumbnail feature. true if supported,  false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400104 | session is not running. |
| 202 | Not System Application. [since 12] |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

async function isQuickThumbnailSupported(context: common.BaseContext, mode: camera.SceneMode, photoProfile: camera.Profile): Promise<boolean> {
  let cameraManager: camera.CameraManager = camera.getCameraManager(context);
  let cameras: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();
  // 创建CaptureSession实例。
  let session: camera.Session = cameraManager.createSession(mode);
  // 开始配置会话。
  session.beginConfig();
  // 把CameraInput加入到会话。
  if (cameras.length <= 0) {
    console.info('Get supported cameras is null or [].');
    return false;
  }
  let cameraInput: camera.CameraInput = cameraManager.createCameraInput(cameras[0]);
  await cameraInput.open();
  session.addInput(cameraInput);
  // 把photoOutput加入到会话。
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

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | TRUE if the type of delivery image is support. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400104 | Session not running. |
| 7400201 | Camera service fatal error. |

## off('photoAvailable')

```TypeScript
off(type: 'photoAvailable', callback?: AsyncCallback<Photo>): void
```

Unsubscribes from the events of returning available photos.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'photoAvailable' | 是 | Event type. The value is fixed at 'photoAvailable'. The event can be  listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;Photo> | 否 | Callback used to return the result. If this parameter is specified,  the subscription to the specified event with the specified callback is canceled. (The callback object cannot  be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## off('deferredPhotoProxyAvailable')

```TypeScript
off(type: 'deferredPhotoProxyAvailable', callback?: AsyncCallback<DeferredPhotoProxy>): void
```

Unsubscribes from events indicating available thumbnail proxies.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deferredPhotoProxyAvailable' | 是 | Event type. The value is fixed at  'deferredPhotoProxyAvailable'. The event can be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;DeferredPhotoProxy> | 否 | Callback used to return the result. This parameter is  optional. If this parameter is specified, the subscription to the specified event  on('deferredPhotoProxyAvailable') with the specified callback is canceled. (The callback object cannot be  an anonymous function.) |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

**示例：**

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

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'photoAssetAvailable' | 是 | Event type. The value is fixed at 'photoAssetAvailable'. The event  can be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;photoAccessHelper.PhotoAsset> | 否 | Callback used for unsubscription. If this  parameter is specified, the subscription to the specified event with the specified callback is canceled. (The  callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with  all the callbacks are canceled. |

## off('captureStart')

```TypeScript
off(type: 'captureStart', callback?: AsyncCallback<number>): void
```

Unsubscribes from capture start events. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.PhotoOutput.off(type:

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'captureStart' | 是 | Event type. The value is fixed at 'captureStart'. The event can be listened  for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;number> | 否 | Callback used to return the result. If this parameter is specified,  the subscription to the specified event with the specified callback is canceled. (The callback object cannot  be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## off('captureStartWithInfo')

```TypeScript
off(type: 'captureStartWithInfo', callback?: AsyncCallback<CaptureStartInfo>): void
```

Unsubscribes from capture start events.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'captureStartWithInfo' | 是 | Event type. The value is fixed at 'captureStartWithInfo'. The event  can be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;CaptureStartInfo> | 否 | Callback used to return the result. If this parameter is  specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. |

## off('frameShutter')

```TypeScript
off(type: 'frameShutter', callback?: AsyncCallback<FrameShutterInfo>): void
```

Unsubscribes from frame shutter events.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'frameShutter' | 是 | Event type. The value is fixed at 'frameShutter'. The event can be listened  for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;FrameShutterInfo> | 否 | Callback used to return the result. If this parameter is  specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. |

## off('frameShutterEnd')

```TypeScript
off(type: 'frameShutterEnd', callback?: AsyncCallback<FrameShutterEndInfo>): void
```

Unsubscribes from frame shutter end events.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'frameShutterEnd' | 是 | Event type. The value is fixed at 'frameShutterEnd'. The event can be  listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;FrameShutterEndInfo> | 否 | Callback used to return the result. If this parameter is  specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. |

## off('captureEnd')

```TypeScript
off(type: 'captureEnd', callback?: AsyncCallback<CaptureEndInfo>): void
```

Unsubscribes from capture end events.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'captureEnd' | 是 | Event type. The value is fixed at 'captureEnd'. The event can be listened for  when a photoOutput instance is created. |
| callback | AsyncCallback&lt;CaptureEndInfo> | 否 | Callback used to return the result. If this parameter is  specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. |

## off('captureReady')

```TypeScript
off(type: 'captureReady', callback?: AsyncCallback<void>): void
```

Unsubscribes from capture ready events.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'captureReady' | 是 | Event type. The value is fixed at 'captureReady'. The event can be listened  for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;void> | 否 | Callback used to return the result. If this parameter is specified, the  subscription to the specified event with the specified callback is canceled. (The callback object cannot be  an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## off('estimatedCaptureDuration')

```TypeScript
off(type: 'estimatedCaptureDuration', callback?: AsyncCallback<double>): void
```

Unsubscribes from estimated capture duration events.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'estimatedCaptureDuration' | 是 | Event type. The value is fixed at 'estimatedCaptureDuration'.  The event can be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;double> | 否 | Callback used to return the result. If this parameter is specified,  the subscription to the specified event with the specified callback is canceled. (The callback object cannot  be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from PhotoOutput error events.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type. The value is fixed at 'error'. The event can be listened for when a  photoOutput instance is created. |
| callback | ErrorCallback | 否 | Callback used to return the result. If this parameter is specified, the  subscription to the specified event with the specified callback is canceled. (The callback object cannot be  an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## off('quickThumbnail')

```TypeScript
off(type: 'quickThumbnail', callback?: AsyncCallback<image.PixelMap>): void
```

Unsubscribes from quick thumbnail output events.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'quickThumbnail' | 是 | Event type. The value is fixed at 'quickThumbnail'. |
| callback | AsyncCallback&lt;image.PixelMap> | 否 | Callback used to return the result. This parameter is  optional. If this parameter is specified, the subscription to the specified event on('quickThumbnail')  with the specified callback is canceled. (The callback object cannot be an anonymous function.) |

**示例：**

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

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'offlineDeliveryFinished' | 是 | Event type. |
| callback | AsyncCallback&lt;void> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## offCaptureEnd

```TypeScript
offCaptureEnd(callback?: AsyncCallback<CaptureEndInfo>): void
```

Unsubscribes from capture end event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CaptureEndInfo> | 否 |  |

## offCapturePhotoAvailable

```TypeScript
offCapturePhotoAvailable(callback?: Callback<CapturePhoto>): void
```

Unsubscribes photo available event callback, which supports delivery of uncompressed photo.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;CapturePhoto> | 否 |  |

## offCaptureReady

```TypeScript
offCaptureReady(callback?: AsyncCallback<void>): void
```

Unsubscribes from capture ready event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 否 |  |

## offCaptureStartWithInfo

```TypeScript
offCaptureStartWithInfo(callback?: AsyncCallback<CaptureStartInfo>): void
```

Unsubscribes from capture start event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CaptureStartInfo> | 否 |  |

## offDeferredPhotoProxyAvailable

```TypeScript
offDeferredPhotoProxyAvailable(callback?: AsyncCallback<DeferredPhotoProxy>): void
```

Unsubscribes deferred photo proxy available event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DeferredPhotoProxy> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## offError

```TypeScript
offError(callback?: ErrorCallback): void
```

Unsubscribes from error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 否 |  |

## offEstimatedCaptureDuration

```TypeScript
offEstimatedCaptureDuration(callback?: AsyncCallback<double>): void
```

Unsubscribes from estimated capture duration event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;double> | 否 |  |

## offFrameShutter

```TypeScript
offFrameShutter(callback?: AsyncCallback<FrameShutterInfo>): void
```

Unsubscribes from frame shutter event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;FrameShutterInfo> | 否 |  |

## offFrameShutterEnd

```TypeScript
offFrameShutterEnd(callback?: AsyncCallback<FrameShutterEndInfo>): void
```

Unsubscribes from frame shutter end event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;FrameShutterEndInfo> | 否 |  |

## offOfflineDeliveryFinished

```TypeScript
offOfflineDeliveryFinished(callback?: AsyncCallback<void>): void
```

Unsubscribes offline Delivery finished events. This method is valid only after enableOffline() is called.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## offPhotoAssetAvailable

```TypeScript
offPhotoAssetAvailable(callback?: AsyncCallback<photoAccessHelper.PhotoAsset>): void
```

Unsubscribes photo asset event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;photoAccessHelper.PhotoAsset> | 否 |  |

## offPhotoAvailable

```TypeScript
offPhotoAvailable(callback?: AsyncCallback<Photo>): void
```

Unsubscribes photo available event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Photo> | 否 |  |

## offQuickThumbnail

```TypeScript
offQuickThumbnail(callback?: AsyncCallback<image.PixelMap>): void
```

Unsubscribes from camera thumbnail events. This method is valid only after enableQuickThumbnail(true) is called.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;image.PixelMap> | 否 |  |

## on('photoAvailable')

```TypeScript
on(type: 'photoAvailable', callback: AsyncCallback<Photo>): void
```

Subscribes to the events of returning available photos. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'photoAvailable' | 是 | Event type. The value is fixed at 'photoAvailable'. The event can be  listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;Photo> | 是 | Callback used to listen for the events of returning available photos. |

## on('deferredPhotoProxyAvailable')

```TypeScript
on(type: 'deferredPhotoProxyAvailable', callback: AsyncCallback<DeferredPhotoProxy>): void
```

Subscribes to events indicating available thumbnail proxies. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deferredPhotoProxyAvailable' | 是 | Event type. The value is fixed at  'deferredPhotoProxyAvailable'. The event can be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;DeferredPhotoProxy> | 是 | Callback used to return the thumbnail proxy. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

**示例：**

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

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'photoAssetAvailable' | 是 | Event type. The value is fixed at 'photoAssetAvailable'. The event  can be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;photoAccessHelper.PhotoAsset> | 是 | Callback used to return the photo asset. |

## on('captureStart')

```TypeScript
on(type: 'captureStart', callback: AsyncCallback<number>): void
```

Subscribes to capture start events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.PhotoOutput.on(type:

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'captureStart' | 是 | Event type. The value is fixed at 'captureStart'. The event can be listened  for when a photoOutput instance is created. This event is triggered and returned when the bottom layer starts  exposure each time a photo is taken. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the capture ID. |

## on('captureStartWithInfo')

```TypeScript
on(type: 'captureStartWithInfo', callback: AsyncCallback<CaptureStartInfo>): void
```

Subscribes to capture start events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'captureStartWithInfo' | 是 | Event type. The value is fixed at 'captureStartWithInfo'. The event  can be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;CaptureStartInfo> | 是 | Callback used to return the capture ID. |

## on('frameShutter')

```TypeScript
on(type: 'frameShutter', callback: AsyncCallback<FrameShutterInfo>): void
```

Subscribes to frame shutter events. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'frameShutter' | 是 | Event type. The value is fixed at 'frameShutter'. The event can be listened  for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;FrameShutterInfo> | 是 | Callback used to return the result. A new photo capture  request can be delivered as long as this event is returned. |

## on('frameShutterEnd')

```TypeScript
on(type: 'frameShutterEnd', callback: AsyncCallback<FrameShutterEndInfo>): void
```

Subscribes to frame shutter end events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'frameShutterEnd' | 是 | Event type. The value is fixed at 'frameShutterEnd'. The event can be  listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;FrameShutterEndInfo> | 是 | Callback used to return the result. It is invoked when  the frame shutter ends. |

## on('captureEnd')

```TypeScript
on(type: 'captureEnd', callback: AsyncCallback<CaptureEndInfo>): void
```

Subscribes to capture end events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'captureEnd' | 是 | Event type. The value is fixed at 'captureEnd'. The event can be listened for  when a photoOutput instance is created. This event is triggered and the corresponding information is returned  when the photo capture is complete. |
| callback | AsyncCallback&lt;CaptureEndInfo> | 是 | Callback used to return the result. |

## on('captureReady')

```TypeScript
on(type: 'captureReady', callback: AsyncCallback<void>): void
```

Subscribes to capture ready events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'captureReady' | 是 | Event type. The value is fixed at 'captureReady'. The event can be listened  for when a photoOutput instance is created. The event is triggered and the corresponding information is  returned when it is ready to take the next photo. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

## on('estimatedCaptureDuration')

```TypeScript
on(type: 'estimatedCaptureDuration', callback: AsyncCallback<double>): void
```

Subscribes to estimated capture duration events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'estimatedCaptureDuration' | 是 | Event type. The value is fixed at 'estimatedCaptureDuration'.  The event can be listened for when a photoOutput instance is created. This event is triggered and the  corresponding information is returned when the photo capture is complete. |
| callback | AsyncCallback&lt;double> | 是 | Callback used to return the estimated duration when the sensor  captures frames at the bottom layer in a single capture, measured in units of milliseconds. If –1 is  reported, there is no estimated duration. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to PhotoOutput error events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type. The value is fixed at 'error'. The event can be listened for when a  photoOutput instance is created. This event is triggered and the corresponding error message is returned when  an error occurs during the calling of a photo-related API. |
| callback | ErrorCallback | 是 | Callback used to return an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

## on('quickThumbnail')

```TypeScript
on(type: 'quickThumbnail', callback: AsyncCallback<image.PixelMap>): void
```

Subscribes to quick thumbnail output events. This API uses an asynchronous callback to return the result. The listening takes effect after **enableQuickThumbnail(true)** is called.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'quickThumbnail' | 是 | Event type. The value is fixed at 'quickThumbnail'. |
| callback | AsyncCallback&lt;image.PixelMap> | 是 | Callback that returns a PixelMap instance. |

**示例：**

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
  // 显示或保存pixelMap。
  // 执行操作。
}

async function registerQuickThumbnail(context: common.BaseContext, mode: camera.SceneMode, photoProfile: camera.Profile): Promise<void> {
  let cameraManager: camera.CameraManager = camera.getCameraManager(context);
  let cameras: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();
  // 创建CaptureSession实例。
  let session: camera.Session = cameraManager.createSession(mode);
  // 开始配置会话。
  session.beginConfig();
  // 把CameraInput加入到会话。
  let cameraInput: camera.CameraInput = cameraManager.createCameraInput(cameras[0]);
  await cameraInput.open();
  session.addInput(cameraInput);
  // 把PhotoOutPut加入到会话。
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

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'offlineDeliveryFinished' | 是 | Event type. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to get offline Delivery finished events. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## onCaptureEnd

```TypeScript
onCaptureEnd(callback: AsyncCallback<CaptureEndInfo>): void
```

Subscribes capture end event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CaptureEndInfo> | 是 | Callback used to get the capture end information. |

## onCapturePhotoAvailable

```TypeScript
onCapturePhotoAvailable(callback: Callback<CapturePhoto>): void
```

Subscribes photo available event callback, which supports delivery of uncompressed photo.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;CapturePhoto> | 是 | Callback used to get the CapturePhoto. |

## onCaptureReady

```TypeScript
onCaptureReady(callback: AsyncCallback<void>): void
```

Subscribes capture ready event callback. After receiving the callback, can proceed to the next capture

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to notice capture ready. |

## onCaptureStartWithInfo

```TypeScript
onCaptureStartWithInfo(callback: AsyncCallback<CaptureStartInfo>): void
```

Subscribes capture start event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CaptureStartInfo> | 是 | Callback used to get the capture start info. |

## onDeferredPhotoProxyAvailable

```TypeScript
onDeferredPhotoProxyAvailable(callback: AsyncCallback<DeferredPhotoProxy>): void
```

Subscribes deferred photo proxy available event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DeferredPhotoProxy> | 是 | Callback used to get the DeferredPhotoProxy. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## onError

```TypeScript
onError(callback: ErrorCallback): void
```

Subscribes to error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 是 | Callback used to get the photo output errors. |

## onEstimatedCaptureDuration

```TypeScript
onEstimatedCaptureDuration(callback: AsyncCallback<double>): void
```

Subscribes estimated capture duration event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;double> | 是 | Callback used to notify the estimated capture duration (in  milliseconds). |

## onFrameShutter

```TypeScript
onFrameShutter(callback: AsyncCallback<FrameShutterInfo>): void
```

Subscribes frame shutter event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;FrameShutterInfo> | 是 | Callback used to get the frame shutter information. |

## onFrameShutterEnd

```TypeScript
onFrameShutterEnd(callback: AsyncCallback<FrameShutterEndInfo>): void
```

Subscribes frame shutter end event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;FrameShutterEndInfo> | 是 | Callback used to get the frame shutter end information. |

## onOfflineDeliveryFinished

```TypeScript
onOfflineDeliveryFinished(callback: AsyncCallback<void>): void
```

Subscribes offline Delivery finished events. This method is valid only after enableOffline() is called.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to get offline Delivery finished events. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## onPhotoAssetAvailable

```TypeScript
onPhotoAssetAvailable(callback: AsyncCallback<photoAccessHelper.PhotoAsset>): void
```

Subscribes to photo asset event callback. This API processes deferred photo delivery data by quickly displaying low-quality images to give users the impression of faster photo capture, while also generating high-quality images to maintain the final output quality. For details about the design specifications, see [Optimizing Deferred Photo Delivery](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-camera-shot2see).

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;photoAccessHelper.PhotoAsset> | 是 | Callback used to get the asset. |

## onPhotoAvailable

```TypeScript
onPhotoAvailable(callback: AsyncCallback<Photo>): void
```

Subscribes photo available event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Photo> | 是 | Callback used to get the Photo. |

## onQuickThumbnail

```TypeScript
onQuickThumbnail(callback: AsyncCallback<image.PixelMap>): void
```

Subscribes to camera thumbnail events. This method is valid only after enableQuickThumbnail(true) is called.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;image.PixelMap> | 是 | Callback used to get the quick thumbnail. |

## setEditData

```TypeScript
setEditData(editData: string): void
```

Set edit data.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| editData | string | 是 | The edit data. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400201 | Camera service fatal error. |

## setMovingPhotoVideoCodecType

```TypeScript
setMovingPhotoVideoCodecType(codecType: VideoCodecType): void
```

Sets a video codec type for moving photos.

**起始版本：** 13

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| codecType | VideoCodecType | 是 | Video codec type. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## setPhotoQualityPrioritization

```TypeScript
setPhotoQualityPrioritization(qualityPrioritization: PhotoQualityPrioritization): void
```

Sets the photo quality prioritization strategy. Before setting the strategy, you can call [isPhotoQualityPrioritizationSupported]camera.PhotoOutput.isPhotoQualityPrioritizationSupported to check whether the device supports the specified photo quality prioritization strategy.

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| qualityPrioritization | PhotoQualityPrioritization | 是 | Photo quality prioritization strategy. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error,  reconfiguring streams is needed to recover from failure. |
| 7400102 | Operation not allowed. |

