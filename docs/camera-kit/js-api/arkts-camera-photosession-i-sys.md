# PhotoSession

Implements a photo session, which sets the parameters of the normal photo mode and saves all
[CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md)
instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md).

**Inheritance/Implementation:** PhotoSession extends [Session](arkts-camera-session-i.md), [Flash](arkts-camera-flash-i.md), [AutoExposure](arkts-camera-autoexposure-i.md), [WhiteBalance](arkts-camera-whitebalance-i.md), [Focus](arkts-camera-focus-i.md), [Zoom](arkts-camera-zoom-i.md), [ColorManagement](arkts-camera-colormanagement-i.md), [AutoDeviceSwitch](arkts-camera-autodeviceswitch-i.md), [Macro](arkts-camera-macro-i-sys.md), [ManualExposure](arkts-camera-manualexposure-i.md), [ManualFocus](arkts-camera-manualfocus-i-sys.md), [ManualIso](arkts-camera-manualiso-i-sys.md), [OIS](arkts-camera-ois-i.md), [Aperture](arkts-camera-aperture-i-sys.md)

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getSessionConflictFunctions

```TypeScript
getSessionConflictFunctions(): Array<PhotoConflictFunctions>
```

Gets session conflict functions.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;PhotoConflictFunctions&gt; | List of session conflict functions. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

## getSessionFunctions

```TypeScript
getSessionFunctions(outputCapability: CameraOutputCapability): Array<PhotoFunctions>
```

Gets session functions.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| outputCapability | CameraOutputCapability | Yes | CameraOutputCapability to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;PhotoFunctions&gt; | List of session functions. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |

## off('macroStatusChanged')

```TypeScript
off(type: 'macroStatusChanged', callback?: AsyncCallback<boolean>): void
```

Unsubscribes from macro state change events.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'macroStatusChanged' | Yes | Event type. The value is fixed at **'macroStatusChanged'**. The event canbe listened for when a session is created. |
| callback | AsyncCallback&lt;boolean&gt; | No | Callback used to return the result. If this parameter is specified,the subscription to the specified event with the specified callback is canceled. (The callback object cannotbe an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks arecanceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 11 - 19 |

## off('featureDetection')

```TypeScript
off(type: 'featureDetection', featureType: SceneFeatureType, callback?: AsyncCallback<SceneFeatureDetectionResult>): void
```

Unsubscribe from camera feature detection status change events.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'featureDetection' | Yes | Event type. The value is fixed at **'featureDetection'**. The event can belistened for when a session is created. |
| featureType | SceneFeatureType | Yes | Scene feature type. |
| callback | AsyncCallback&lt;SceneFeatureDetectionResult&gt; | No | Callback used to return the result. Thisparameter is optional. If this parameter is specified, the subscription to the specified event**on('featureDetection')** with the specified callback is canceled. (The callback object cannot be ananonymous function.) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

**Example**

```TypeScript
function unregisterFeatureDetectionStatus(photoSession: camera.PhotoSession, featureType: camera.SceneFeatureType): void {
  photoSession.off('featureDetection', featureType);
}

```

## off('effectSuggestionChange')

```TypeScript
off(type: 'effectSuggestionChange', callback?: AsyncCallback<EffectSuggestionType>): void
```

Unsubscribes from effect suggestion event callback.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'effectSuggestionChange' | Yes | Event type. |
| callback | AsyncCallback&lt;EffectSuggestionType&gt; | No | Callback used to return the result. |

## off('lcdFlashStatus')

```TypeScript
off(type: 'lcdFlashStatus', callback?: AsyncCallback<LcdFlashStatus>): void
```

Unsubscribes from LCD flash status change events.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'lcdFlashStatus' | Yes | Event type. The value is fixed at **'lcdFlashStatus'**. The event can belistened for when a session is created. |
| callback | AsyncCallback&lt;LcdFlashStatus&gt; | No | Callback used to return the result. This parameter isoptional. If this parameter is specified, the subscription to the specified event **on('lcdFlashStatus')**with the specified callback is canceled. (The callback object cannot be an anonymous function.) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

**Example**

```TypeScript
function unregisterLcdFlashStatus(photoSession: camera.PhotoSession): void {
  photoSession.off('lcdFlashStatus');
}

```

## on('macroStatusChanged')

```TypeScript
on(type: 'macroStatusChanged', callback: AsyncCallback<boolean>): void
```

Subscribes to macro state change events. This API uses an asynchronous callback to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'macroStatusChanged' | Yes | Event type. The value is fixed at **'macroStatusChanged'**. The event canbe listened for when a session is created. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the macro state. **true** if enabled,**false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 11 - 19 |

## on('featureDetection')

```TypeScript
on(type: 'featureDetection', featureType: SceneFeatureType, callback: AsyncCallback<SceneFeatureDetectionResult>): void
```

Subscribe to scene feature detection status change events. This API uses an asynchronous callback to return the
result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'featureDetection' | Yes | Event type. The value is fixed at **'featureDetection'**. The event can belistened for when a photo session is created. |
| featureType | SceneFeatureType | Yes | Scene feature type. |
| callback | AsyncCallback&lt;SceneFeatureDetectionResult&gt; | Yes | Callback used to return the status of the scenefeature detection. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, result: camera.SceneFeatureDetectionResult): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`feature type: ${result.featureType}`);
  console.info(`feature status: ${result.detected}`);
}

function registerFeatureDetectionStatus(photoSession: camera.PhotoSession, featureType: camera.SceneFeatureType): void {
  photoSession.on('featureDetection', featureType, callback);
}

```

## on('effectSuggestionChange')

```TypeScript
on(type: 'effectSuggestionChange', callback: AsyncCallback<EffectSuggestionType>): void
```

Subscribes to effect suggestion event callback.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'effectSuggestionChange' | Yes | Event type. |
| callback | AsyncCallback&lt;EffectSuggestionType&gt; | Yes | Callback used to return the result. |

## on('lcdFlashStatus')

```TypeScript
on(type: 'lcdFlashStatus', callback: AsyncCallback<LcdFlashStatus>): void
```

Subscribes to LCD flash status change events. This API uses an asynchronous callback to return the result.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'lcdFlashStatus' | Yes | Event type. The value is fixed at **'lcdFlashStatus'**. The event can belistened for when a session is created. |
| callback | AsyncCallback&lt;LcdFlashStatus&gt; | Yes | Callback used to return the LCD flash status change. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, lcdFlashStatus: camera.LcdFlashStatus): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`isLcdFlashNeeded: ${lcdFlashStatus.isLcdFlashNeeded}`);
  console.info(`lcdCompensation: ${lcdFlashStatus.lcdCompensation}`);
}

function registerLcdFlashStatus(photoSession: camera.PhotoSession): void {
  photoSession.on('lcdFlashStatus', callback);
}

```

