# VideoOutput

**VideoOutput** implements output information used in a video session. It inherits from
[CameraOutput](arkts-camera-cameraoutput-i.md).

**Inheritance/Implementation:** VideoOutput extends [CameraOutput](arkts-camera-cameraoutput-i.md)

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## attachMetaSurface

```TypeScript
attachMetaSurface(surfaceId: string, type: VideoMetaType): void
```

Attach a meta surface to VideoOutput.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | Surface object id used for receiving meta infos. |
| type | VideoMetaType | Yes | Video meta type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## enableAutoDeferredVideoEnhancement

```TypeScript
enableAutoDeferredVideoEnhancement(enabled: boolean): void
```

Enable auto deferred video enhancement if needed.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Status of auto deferred video enhancement. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## enableAutoVideoFrameRate

```TypeScript
enableAutoVideoFrameRate(enabled: boolean): void
```

Enable auto frame rate for video capture.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | enable auto frame rate if TRUE. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

## enableMirror

```TypeScript
enableMirror(enabled: boolean): void
```

Enables or disables mirror recording.

- Before calling this API, check whether mirror recording is supported by using
[isMirrorSupported](arkts-camera-videooutput-i-sys.md#ismirrorsupported-1).
- After enabling or disabling mirror recording, call
[getVideoRotation](arkts-camera-videooutput-i.md#getvideorotation-1) to obtain the rotation angle and
[updateRotation](../../apis-media-kit/arkts-apis/arkts-media-avrecorder-i.md#updaterotation-1) to update the rotation angle.

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable mirror recording. **true** to enable, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 12 - 14 |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

## getSupportedRotations

```TypeScript
getSupportedRotations(): Array<ImageRotation>
```

Get supported video rotations.

**Since:** 14

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;ImageRotation&gt; | The array of supported video rotations. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

## getSupportedVideoMetaTypes

```TypeScript
getSupportedVideoMetaTypes(): Array<VideoMetaType>
```

Get supported video meta types.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;VideoMetaType&gt; | The array of supported video meta type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## isAutoDeferredVideoEnhancementEnabled

```TypeScript
isAutoDeferredVideoEnhancementEnabled(): boolean
```

Confirm if auto deferred video enhancement is enabled.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | TRUE if auto deferred video enhancement is enabled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## isAutoDeferredVideoEnhancementSupported

```TypeScript
isAutoDeferredVideoEnhancementSupported(): boolean
```

Confirm if auto deferred video enhancement is supported in the specific device.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | TRUE if auto deferred video enhancement is supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## isAutoVideoFrameRateSupported

```TypeScript
isAutoVideoFrameRateSupported(): boolean
```

Determine whether auto frame rate is supported.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Is auto frame rate supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

## isMirrorSupported

```TypeScript
isMirrorSupported(): boolean
```

Checks whether mirror recording is supported.

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of mirror recording. **true** if supported, **false**otherwise. If the API call fails, undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 12 - 14 |

## isRotationSupported

```TypeScript
isRotationSupported(): boolean
```

Determine whether video rotation is supported.

**Since:** 14

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Is video rotation supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

## off('deferredVideoEnhancementInfo')

```TypeScript
off(type: 'deferredVideoEnhancementInfo', callback?: AsyncCallback<DeferredVideoEnhancementInfo>): void
```

Unsubscribes from deferred video enhancement info callback.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deferredVideoEnhancementInfo' | Yes | Event type. |
| callback | AsyncCallback&lt;DeferredVideoEnhancementInfo&gt; | No | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

## on('deferredVideoEnhancementInfo')

```TypeScript
on(type: 'deferredVideoEnhancementInfo', callback: AsyncCallback<DeferredVideoEnhancementInfo>): void
```

Subscribes deferred video enhancement info callback.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deferredVideoEnhancementInfo' | Yes | Event type. |
| callback | AsyncCallback&lt;DeferredVideoEnhancementInfo&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

## setRotation

```TypeScript
setRotation(rotation: ImageRotation): void
```

Set a video rotation.

**Since:** 14

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rotation | ImageRotation | Yes | The rotation angle. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |

