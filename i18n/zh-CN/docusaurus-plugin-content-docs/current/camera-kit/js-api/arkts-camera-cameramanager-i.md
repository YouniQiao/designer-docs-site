# CameraManager

Implements camera management. Before calling any API in CameraManager, you must use [getCameraManager]camera.getCameraManager to obtain a CameraManager instance.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## createCameraInput

```TypeScript
createCameraInput(camera: CameraDevice): CameraInput
```

Creates a **CameraInput** instance with the specified **CameraDevice** instance. This API returns the result synchronously. Before calling this API, call [getSupportedCameras]camera.CameraManager.getSupportedCameras to obtain the list of supported camera devices, select the camera device that meets the requirements based on the actual usage scenario, and then create the **CameraInput** instance.

**起始版本：** 10

**需要权限：** 

 ohos.permission.CAMERA

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| camera | CameraDevice | 是 | CameraDevice instance, which is obtained through  [getSupportedCameras]camera.CameraManager.getSupportedCameras. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CameraInput | CameraInput instance created. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. [since 12] |
| 7400201 | Camera service fatal error. [since 12] |

## createCameraInput

```TypeScript
createCameraInput(position: CameraPosition, type: CameraType): CameraInput
```

Creates a **CameraInput** instance with the specified camera position and type. This API returns the result synchronously. Before calling this API, specify the camera position and type based on the usage scenario. For example, open the front camera for the selfie feature

**起始版本：** 10

**需要权限：** 

 ohos.permission.CAMERA

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| position | CameraPosition | 是 | Camera position. You need to obtain the supported camera object by calling  [getSupportedCameras]camera.CameraManager.getSupportedCameras and then obtain the device position  information based on the returned camera object. |
| type | CameraType | 是 | Camera type. You need to obtain the supported camera object by calling  [getSupportedCameras]camera.CameraManager.getSupportedCameras and then obtain the camera type based  on the returned camera object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CameraInput | CameraInput instance created. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. [since 12] |
| 7400201 | Camera service fatal error. [since 12] |

## createCameraInputWithTokenId

```TypeScript
createCameraInputWithTokenId(camera: CameraDevice, tokenId: int): CameraInput
```

Creates a CameraInput instance by camera and calling token. Before using this interface, first through the getSupportedCameras interface to query the current list of camera devices supported by the device, the developer needs to be based on specific scenarios to choose the camera device that meets the needs of the developer, and then use this interface to create a CameraInput instance.

**起始版本：** 24

**需要权限：** 

 ohos.permission.CAMERA

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| camera | CameraDevice | 是 | Camera device used to create the instance. |
| tokenId | int | 是 | The calling token id. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CameraInput | Returns a CameraInput instance. Failure of an interface call returns the corresponding  error code, which is of type CameraErrorCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not System Application. |
| 7400102 | Operation not allowed. |
| 7400201 | Camera service fatal error. |

## createCaptureSession

```TypeScript
createCaptureSession(): CaptureSession
```

Creates a **CaptureSession** instance. This API returns the result synchronously.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.CameraManager.createSession

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CaptureSession | CaptureSession instance created. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## createControlCenterSession

```TypeScript
createControlCenterSession(): ControlCenterSession
```

Create a ControlCenterSession instance.

**起始版本：** 20

**需要权限：** 

 ohos.permission.CAMERA_CONTROL

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ControlCenterSession | the ControlCenterSession instance. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## createDeferredPreviewOutput

```TypeScript
createDeferredPreviewOutput(profile: Profile): PreviewOutput
```

Creates a deferred PreviewOutput instance.

**起始版本：** 10

**原子化服务API：** 从API version 24开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| profile | Profile | 是 | Preview output profile. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PreviewOutput | the PreviewOutput instance. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 202 | Not System Application. [since 12 - 23] |
| 7400201 | Camera service fatal error. [since 24] |

## createDepthDataOutput

```TypeScript
createDepthDataOutput(profile: DepthProfile): DepthDataOutput
```

Creates a DepthDataOutput instance. This API returns the result synchronously.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| profile | DepthProfile | 是 | Supported preview profile, which is obtained through  [getSupportedOutputCapability]camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DepthDataOutput | DepthDataOutput instance. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function createDepthDataOutput(cameraOutputCapability: camera.CameraOutputCapability, cameraManager: camera.CameraManager): camera.DepthDataOutput | undefined {
  let profile: camera.DepthProfile = cameraOutputCapability.depthProfiles[0];
  let depthDataOutput: camera.DepthDataOutput | undefined = undefined;
  try {
    depthDataOutput = cameraManager.createDepthDataOutput(profile);
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The createDepthDataOutput call failed. error code: ${err.code}`);
  }
  return depthDataOutput;
}

```

## createMetadataOutput

```TypeScript
createMetadataOutput(metadataObjectTypes: Array<MetadataObjectType>): MetadataOutput
```

Creates a **MetadataOutput** instance. This API returns the result synchronously.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| metadataObjectTypes | Array&lt;MetadataObjectType> | 是 | Metadata object types, which are obtained through  [getSupportedOutputCapability]camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MetadataOutput | MetadataOutput instance created. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. [since 12] |

## createPhotoOutput

```TypeScript
createPhotoOutput(profile: Profile, surfaceId: string): PhotoOutput
```

Creates a **PhotoOutput** instance. This API returns the result synchronously. > **NOTE** > > - This API can only be used to create a **PhotoOutput** object in JPEG format.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.CameraManager.createPhotoOutput(profile?:

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| profile | Profile | 是 | Supported photo profile, which is obtained through  [getSupportedOutputCapability]camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode). |
| surfaceId | string | 是 | Surface ID, which is obtained from  [ImageReceiver](../../apis-image-kit/arkts-apis/arkts-image-imagereceiver-i.md#ImageReceiver). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PhotoOutput | PhotoOutput instance created. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |

## createPhotoOutput

```TypeScript
createPhotoOutput(profile?: Profile): PhotoOutput
```

Creates a **PhotoOutput** instance. This API returns the result synchronously.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| profile | Profile | 否 | Supported photo profile, which is obtained through  [getSupportedOutputCapability]camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode).  In API version 11, this parameter is mandatory. Starting from API version 12, it will overwrite the  preconfigured parameters passed in through [preconfig]camera.PhotoSession.preconfig. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PhotoOutput | PhotoOutput instance created. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. [since 12] |

## createPreviewOutput

```TypeScript
createPreviewOutput(profile: Profile, surfaceId: string): PreviewOutput
```

Creates a **PreviewOutput** instance. This API returns the result synchronously.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| profile | Profile | 是 | Supported preview profile, which is obtained through  [getSupportedOutputCapability]camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode). |
| surfaceId | string | 是 | Surface ID, which is obtained from  [XComponent]XComponent or [ImageReceiver](../../apis-image-kit/arkts-apis/arkts-image-imagereceiver-i.md#ImageReceiver). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PreviewOutput | PreviewOutput instance created. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. [since 12] |

## createPreviewOutput

```TypeScript
createPreviewOutput(surfaceId: string): PreviewOutput
```

Creates a **PreviewOutput** instance without configuration. This API returns the result synchronously. It must be used with [preconfig]camera.PhotoSession.preconfig.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| surfaceId | string | 是 | Surface ID, which is obtained from  [XComponent]XComponent or [ImageReceiver](../../apis-image-kit/arkts-apis/arkts-image-imagereceiver-i.md#ImageReceiver). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PreviewOutput | PreviewOutput instance created. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. |

## createSession

```TypeScript
createSession<T extends Session>(mode: SceneMode): T
```

Creates a **Session** instance with a given scene mode. This API returns the result synchronously.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | SceneMode | 是 | Scene mode. The API does not take effect if the input parameter is invalid (for  example, the value is out of range, null, or undefined). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T | Session instance created. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |
| 7400101 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;  3. Parameter verification failed. [since 19] |

## createVideoOutput

```TypeScript
createVideoOutput(profile: VideoProfile, surfaceId: string): VideoOutput
```

Creates a **VideoOutput** instance. This API returns the result synchronously. In video recording mode, if SDR or HDR VIVID is enabled, the camera format and color space must be configured according to the relationships specified in the table below. Configurations that do not match the table will cause issues such as preview exceptions. | SDR/HDR Photo Capture | CameraFormat | ColorSpace | |--------------------|--------------------------|------------------| | SDR | CAMERA_FORMAT_YUV_420_SP | BT709_LIMIT | | HDR_VIVID | CAMERA_FORMAT_YCRCB_P010<br>CAMERA_FORMAT_YCBCR_P010 | BT2020_HLG_LIMIT<br>BT2020_HLG_FULL |

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| profile | VideoProfile | 是 | Supported video profile, which is obtained through  [getSupportedOutputCapability]camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode). |
| surfaceId | string | 是 | Surface ID, which is obtained from [AVRecorder](../../apis-media-kit/arkts-apis/arkts-multimedia-media.md#media). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| VideoOutput | VideoOutput instance created. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. [since 12] |

## createVideoOutput

```TypeScript
createVideoOutput(surfaceId: string): VideoOutput
```

Creates a **VideoOutput** instance without configuration. This API returns the result synchronously. It must be used with [preconfig]camera.VideoSession.preconfig.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| surfaceId | string | 是 | Surface ID, which is obtained from [AVRecorder](../../apis-media-kit/arkts-apis/arkts-multimedia-media.md#media). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| VideoOutput | VideoOutput instance created. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. |

## getCameraConcurrentInfos

```TypeScript
getCameraConcurrentInfos(cameras: Array<CameraDevice>): Array<CameraConcurrentInfo>
```

Obtains the concurrency information of the specified cameras. If the return value is an empty array, concurrency is not supported.

**起始版本：** 18

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cameras | Array&lt;CameraDevice> | 是 | Array of CameraDevice objects. You are advised to use the front and  rear cameras obtained by calling [getCameraDevice]camera.CameraManager.getCameraDevice. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;CameraConcurrentInfo> | Array of concurrency information corresponding to the provided  CameraDevice objects, with a one-to-one mapping. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## getCameraDevice

```TypeScript
getCameraDevice(position: CameraPosition, type: CameraType): CameraDevice
```

Obtains the specified camera based on the camera position and type. Obtains the camera lens of the specified [CameraPosition]camera.CameraPosition and [CameraType]camera.CameraType. If the returned result is undefined, the camera lens is not found on the current device.

**起始版本：** 18

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| position | CameraPosition | 是 | Camera position. |
| type | CameraType | 是 | Camera type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CameraDevice | Camera obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## getCameraDevices

```TypeScript
getCameraDevices(position: CameraPosition, types: Array<CameraType>, connectType: ConnectionType): Array<CameraDevice>
```

Obtains the list of cameras that meet the search criteria based on the camera position, camera types, and connection type.

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| position | CameraPosition | 是 | Camera position. |
| types | Array&lt;CameraType> | 是 | Array of camera types. |
| connectType | ConnectionType | 是 | Camera connection type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;CameraDevice> | Array of cameras that meet the search criteria. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## getSupportedCameras

```TypeScript
getSupportedCameras(): Array<CameraDevice>
```

Obtains the supported camera devices. This API returns the result synchronously.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;CameraDevice> | Array of camera devices supported. |

## getSupportedFullOutputCapability

```TypeScript
getSupportedFullOutputCapability(camera: CameraDevice, mode: SceneMode): CameraOutputCapability
```

Obtains the complete output capabilities supported by a specified camera in a specified mode, including YUV, HEIF , and HDR. > **NOTE** > > Before using YUV, HEIF, or HDR, you need to explicitly call this method to ensure that the complete output > capabilities are obtained.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| camera | CameraDevice | 是 | Camera device. |
| mode | SceneMode | 是 | Scene mode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CameraOutputCapability | Camera output capability obtained. |

## getSupportedOutputCapability

```TypeScript
getSupportedOutputCapability(camera: CameraDevice): CameraOutputCapability
```

Obtains the output capability supported by a camera device. This API returns the result synchronously.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.CameraManager.getSupportedOutputCapability(camera:

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| camera | CameraDevice | 是 | Camera device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CameraOutputCapability | Camera output capability obtained. |

## getSupportedOutputCapability

```TypeScript
getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode): CameraOutputCapability
```

Obtains the output capability supported by a camera device in a given scene mode. This API returns the result synchronously.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| camera | CameraDevice | 是 | Camera device. |
| mode | SceneMode | 是 | Scene mode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CameraOutputCapability | Camera output capability obtained. |

## getSupportedSceneModes

```TypeScript
getSupportedSceneModes(camera: CameraDevice): Array<SceneMode>
```

Obtains the scene modes supported by a camera device. This API returns the result synchronously.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| camera | CameraDevice | 是 | Camera device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;SceneMode> | Array of scene modes supported. |

## getTorchMode

```TypeScript
getTorchMode(): TorchMode
```

Obtains the flashlight mode of this camera device.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TorchMode | Flashlight mode. |

## isCameraMuted

```TypeScript
isCameraMuted(): boolean
```

Checks whether this camera is muted.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether the camera is muted. true if muted, false otherwise. |

## isCameraMuteSupported

```TypeScript
isCameraMuteSupported(): boolean
```

Checks whether the camera device can be muted.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether the camera device can be muted. true if it can be muted,  false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. [since 13] |

**示例：**

```TypeScript
function isCameraMuteSupported(cameraManager: camera.CameraManager): boolean {
  let isMuteSupported: boolean = cameraManager.isCameraMuteSupported();
  return isMuteSupported;
}

```

## isControlCenterActive

```TypeScript
isControlCenterActive(): boolean
```

Check if the control center active.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | this value that specifies whether the control center active. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

## isPrelaunchSupported

```TypeScript
isPrelaunchSupported(camera: CameraDevice): boolean
```

Checks whether a camera device supports prelaunch.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| camera | CameraDevice | 是 | Camera device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of prelaunch. true if supported, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 202 | Permission verification failed. A non-system application calls a system API. [since 12] |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';

function isPreLaunchSupported(context: common.BaseContext): boolean {
  let cameraManager: camera.CameraManager = camera.getCameraManager(context);
  let cameras: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();
  let isSupported: boolean = false;
  if (cameras && cameras.length >= 1) {
    isSupported = cameraManager.isPrelaunchSupported(cameras[0]);
    console.info(`PreLaunch supported states: ${isSupported}`);
    return isSupported;
  }
  return isSupported;
}

```

## isTorchLevelControlSupported

```TypeScript
isTorchLevelControlSupported(): boolean
```

Checks whether the device supports flashlight brightness control.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the device supports flashlight brightness control. Returns true if supported,  false if not. If the API call fails, undefined is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 23 - 24] |

## isTorchModeSupported

```TypeScript
isTorchModeSupported(mode: TorchMode): boolean
```

Checks whether a flashlight mode is supported.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | TorchMode | 是 | Flashlight mode. If the input parameter is null or undefined, it is treated as 0 and  the flashlight is turned off. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the flashlight mode. true if supported, false  otherwise. If the API call fails, undefined is returned. |

## isTorchSupported

```TypeScript
isTorchSupported(): boolean
```

Checks whether the camera device supports the flashlight.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the flashlight. true if supported, false otherwise.  If the API call fails, undefined is returned. |

## muteCamera

```TypeScript
muteCamera(mute: boolean): void
```

Mutes or unmutes the camera device.

**起始版本：** 10

**废弃版本：** 12

**替代接口：** camera.CameraManager.muteCameraPersistent

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mute | boolean | 是 | Mutes or unmutes the camera device. true to mute, false otherwise. |

**示例：**

```TypeScript
function muteCamera(cameraManager: camera.CameraManager): void {
  let mute: boolean = true;
  cameraManager.muteCamera(mute);
}

```

## muteCameraPersistent

```TypeScript
muteCameraPersistent(mute: boolean, type: PolicyType): void
```

Mutes the camera device permanently.

**起始版本：** 12

**需要权限：** 

 ohos.permission.CAMERA_CONTROL

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mute | boolean | 是 | Mutes or unmutes the camera device. true to mute, false otherwise. |
| type | PolicyType | 是 | Policy type. For details about the available options, see  [PolicyType]camera.PolicyType. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |

**示例：**

```TypeScript
function muteCameraPersistent(cameraManager: camera.CameraManager): void {
  let mute: boolean = true;
  cameraManager.muteCameraPersistent(mute, camera.PolicyType.PRIVACY);
}

```

## off('cameraStatus')

```TypeScript
off(type: 'cameraStatus', callback?: AsyncCallback<CameraStatusInfo>): void
```

Unsubscribes from camera status events. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'cameraStatus' | 是 | Event type. The value is fixed at 'cameraStatus'. The event can be listened  for when a CameraManager instance is obtained. |
| callback | AsyncCallback&lt;CameraStatusInfo> | 否 | Callback used to return the result. If this parameter is  specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. |

## off('foldStatusChange')

```TypeScript
off(type: 'foldStatusChange', callback?: AsyncCallback<FoldStatusInfo>): void
```

Unsubscribes from fold state change events of the foldable device.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'foldStatusChange' | 是 | Event type. The value is fixed at 'foldStatusChange'. The event is  triggered when the fold state of the foldable device changes. |
| callback | AsyncCallback&lt;FoldStatusInfo> | 否 | Callback used to return the fold state information about the  foldable device. If this parameter is specified, the subscription to the specified event with the specified  callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to  the specified event with all the callbacks are canceled. |

## off('cameraMute')

```TypeScript
off(type: 'cameraMute', callback?: AsyncCallback<boolean>): void
```

Unsubscribes from camera mute status events.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'cameraMute' | 是 | Event type. The value is fixed at 'cameraMute', indicating the camera mute  status. The event can be listened for when a CameraManager instance is obtained. |
| callback | AsyncCallback&lt;boolean> | 否 | Callback used to return the camera mute status. true if muted,  false otherwise. This parameter is optional. If this parameter is specified, the subscription to the  specified event on('cameraMute') with the specified callback is canceled. (The callback object cannot be  an anonymous function.) |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. [since 13] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, curMuted: boolean): void {
  let isMuted: boolean = curMuted;
}

function unregisterCameraMute(cameraManager: camera.CameraManager): void {
  cameraManager.off('cameraMute', callback);
}

```

## off('controlCenterStatusChange')

```TypeScript
off(type: 'controlCenterStatusChange', callback?: AsyncCallback<boolean>): void
```

Unsubscribes control center status change event callback.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'controlCenterStatusChange' | 是 | Event type. |
| callback | AsyncCallback&lt;boolean> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

## off('torchStatusChange')

```TypeScript
off(type: 'torchStatusChange', callback?: AsyncCallback<TorchStatusInfo>): void
```

Unsubscribes from flashlight status change events. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'torchStatusChange' | 是 | Event type. The value is fixed at 'torchStatusChange'. The event can be  listened for when a CameraManager instance is obtained. |
| callback | AsyncCallback&lt;TorchStatusInfo> | 否 | Callback used to return the result. If this parameter is  specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. |

## offCameraMute

```TypeScript
offCameraMute(callback?: AsyncCallback<boolean>): void
```

Unsubscribes from camera mute change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

## offCameraStatus

```TypeScript
offCameraStatus(callback?: AsyncCallback<CameraStatusInfo>): void
```

Unsubscribes from camera status change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CameraStatusInfo> | 否 |  |

## offControlCenterStatusChange

```TypeScript
offControlCenterStatusChange(callback?: AsyncCallback<boolean>): void
```

Unsubscribes control center status change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

## offFoldStatusChange

```TypeScript
offFoldStatusChange(callback?: AsyncCallback<FoldStatusInfo>): void
```

Unsubscribes from fold status change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;FoldStatusInfo> | 否 |  |

## offTorchStatusChange

```TypeScript
offTorchStatusChange(callback?: AsyncCallback<TorchStatusInfo>): void
```

Unsubscribes torch status change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;TorchStatusInfo> | 否 |  |

## on('cameraStatus')

```TypeScript
on(type: 'cameraStatus', callback: AsyncCallback<CameraStatusInfo>): void
```

Subscribes to camera status events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'cameraStatus' | 是 | Event type. The value is fixed at 'cameraStatus'. The event can be listened  for when a CameraManager instance is obtained. This event is triggered and the corresponding information  is returned only when the camera device is enabled or disabled. |
| callback | AsyncCallback&lt;CameraStatusInfo> | 是 | Callback used to return the camera status change. |

## on('foldStatusChange')

```TypeScript
on(type: 'foldStatusChange', callback: AsyncCallback<FoldStatusInfo>): void
```

Subscribes to fold status change events of the foldable device. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'foldStatusChange' | 是 | Event type. The value is fixed at 'foldStatusChange'. The event is  triggered when the fold state of the foldable device changes. |
| callback | AsyncCallback&lt;FoldStatusInfo> | 是 | Callback used to return the fold state information about the  foldable device. |

## on('cameraMute')

```TypeScript
on(type: 'cameraMute', callback: AsyncCallback<boolean>): void
```

Subscribes to camera mute status events. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'cameraMute' | 是 | Event type. The value is fixed at 'cameraMute', indicating the camera mute  status. The event can be listened for when a CameraManager instance is obtained. This event is triggered and  the status is returned when the camera device is muted or unmuted. |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the camera mute status. true if muted,  false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. [since 13] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, curMuted: boolean): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  let isMuted: boolean = curMuted;
  console.info(`cameraMute status: ${isMuted}`);
}

function registerCameraMute(cameraManager: camera.CameraManager): void {
  cameraManager.on('cameraMute', callback);
}

```

## on('controlCenterStatusChange')

```TypeScript
on(type: 'controlCenterStatusChange', callback: AsyncCallback<boolean>): void
```

Subscribes control center status change event callback.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'controlCenterStatusChange' | 是 | Event type. |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to get the control center status change. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

## on('torchStatusChange')

```TypeScript
on(type: 'torchStatusChange', callback: AsyncCallback<TorchStatusInfo>): void
```

Subscribes to flashlight status change events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'torchStatusChange' | 是 | Event type. The value is fixed at 'torchStatusChange'. The event can be  listened for when a CameraManager instance is obtained. Currently, this event is triggered only in the  following scenarios: The flashlight is turned on or turned off, or becomes unavailable or available. |
| callback | AsyncCallback&lt;TorchStatusInfo> | 是 | Callback used to return the flashlight status. |

## onCameraMute

```TypeScript
onCameraMute(callback: AsyncCallback<boolean>): void
```

Subscribes camera mute change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to get the camera mute change. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

## onCameraStatus

```TypeScript
onCameraStatus(callback: AsyncCallback<CameraStatusInfo>): void
```

Subscribes camera status change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CameraStatusInfo> | 是 | Callback used to get the camera status change. |

## onControlCenterStatusChange

```TypeScript
onControlCenterStatusChange(callback: AsyncCallback<boolean>): void
```

Subscribes control center status change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to get the control center status change. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

## onFoldStatusChange

```TypeScript
onFoldStatusChange(callback: AsyncCallback<FoldStatusInfo>): void
```

Subscribes fold status change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;FoldStatusInfo> | 是 | Callback used to get the fold status change. |

## onTorchStatusChange

```TypeScript
onTorchStatusChange(callback: AsyncCallback<TorchStatusInfo>): void
```

Subscribes torch status change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;TorchStatusInfo> | 是 | Callback used to return the torch status change |

## prelaunch

```TypeScript
prelaunch(): void
```

Prelaunches the camera device. This API is called when a user clicks the system camera icon to start the camera application.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 13] |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { camera } from '@kit.CameraKit';

function preLaunch(context: common.BaseContext): void {
  let cameraManager: camera.CameraManager = camera.getCameraManager(context);
  try {
    cameraManager.prelaunch();
  } catch (error) {
    let err = error as BusinessError;
    console.error(`prelaunch error. Code: ${err.code}, message: ${err.message}`);
  }
}

```

## preSwitchCamera

```TypeScript
preSwitchCamera(cameraId: string): void
```

Pre-switches a camera device to speed up its startup.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cameraId | string | 是 | Camera ID. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. [since 12] |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

function preSwitch(cameraDevice: camera.CameraDevice, context: common.BaseContext): void {
  let cameraManager: camera.CameraManager = camera.getCameraManager(context);
  try {
    cameraManager.preSwitchCamera(cameraDevice.cameraId);
  } catch (error) {
    let err = error as BusinessError;
    console.error(`prelaunch error. Code: ${err.code}, message: ${err.message}`);
  }
}

```

## setPrelaunchConfig

```TypeScript
setPrelaunchConfig(prelaunchConfig: PrelaunchConfig): void
```

Sets prelaunch configuration. Before the setting, call [isPrelaunchSupported]camera.CameraManager.isPrelaunchSupported to check whether the camera device supports prelaunch.

**起始版本：** 10

**需要权限：** 

 ohos.permission.CAMERA

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| prelaunchConfig | PrelaunchConfig | 是 | Prelaunch configuration. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |
| 202 | Not System Application. [since 12] |
| 7400201 | Camera service fatal error. [since 12] |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

function setPrelaunchConfig(context: common.BaseContext): void {
  let cameraManager: camera.CameraManager = camera.getCameraManager(context);
  let cameras: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();
  if (cameras && cameras.length >= 1) {
    let cameraDevice: camera.CameraDevice = cameras[0];
    if(cameraManager.isPrelaunchSupported(cameraDevice)) {
      try {
        cameraManager.setPrelaunchConfig({cameraDevice: cameraDevice});
      } catch (error) {
        let err = error as BusinessError;
        console.error(`setPrelaunchConfig error. Code: ${err.code}, message: ${err.message}`);
      }
    }
  }
}

```

## setTorchMode

```TypeScript
setTorchMode(mode: TorchMode): void
```

Sets the flashlight mode.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | TorchMode | 是 | Flashlight mode. If the input parameter is null or undefined, it is treated as 0 and  the flashlight is turned off. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. [since 11 - 17] |
| 7400102 | Operation not allowed. [since 12] |
| 7400201 | Camera service fatal error. [since 12] |

## setTorchModeOnWithLevel

```TypeScript
setTorchModeOnWithLevel(torchLevel: double): void
```

Sets the torch mode to {@link camera.TorchMode.ON} with the specified torch level.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| torchLevel | double | 是 | the specified torch level, the value range is [0.0, 1.0] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 23 - 24] |
| 7400102 | Operation not allowed. |
| 7400201 | Camera service fatal error. |

