# PreviewOutput

Implements preview output. It inherits from [CameraOutput](arkts-camera-camera-cameraoutput-i.md).

**Inheritance/Implementation:** PreviewOutput extends [CameraOutput](arkts-camera-camera-cameraoutput-i.md)

**Since:** 10

<!--Device-camera-interface PreviewOutput extends CameraOutput--><!--Device-camera-interface PreviewOutput extends CameraOutput-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## addDeferredSurface

```TypeScript
addDeferredSurface(surfaceId: string): void
```

Adds a deferred surface.

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-PreviewOutput-addDeferredSurface(surfaceId: string): void--><!--Device-PreviewOutput-addDeferredSurface(surfaceId: string): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | Surface object id used in camera photo output. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API.<br>**Applicable version:** 13 - 23 |

## attachSketchSurface

```TypeScript
attachSketchSurface(surfaceId: string): void
```

Attaches a surface for PiP preview.

**Since:** 11

<!--Device-PreviewOutput-attachSketchSurface(surfaceId: string): void--><!--Device-PreviewOutput-attachSketchSurface(surfaceId: string): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | Surface ID, which is obtained from [XComponent](XComponent). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect.<br>**Applicable version:** 12 and later |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error.<br>**Applicable version:** 12 and later |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function attachSketchSurface(previewOutput: camera.PreviewOutput, session: camera.Session, cameraInput: camera.CameraInput, sketchSurfaceId: string): void {
  try {
    session.beginConfig();
    session.addInput(cameraInput);
    session.addOutput(previewOutput);
    previewOutput.enableSketch(true);
    session.commitConfig();
    previewOutput.attachSketchSurface(sketchSurfaceId);
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The attachSketchSurface call failed. error code: ${err.code}`);
  }
}

```

## enableSketch

```TypeScript
enableSketch(enabled: boolean): void
```

Enables or disables PiP preview.

**Since:** 11

<!--Device-PreviewOutput-enableSketch(enabled: boolean): void--><!--Device-PreviewOutput-enableSketch(enabled: boolean): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable or disable PiP view. **true** to enable, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed.<br>**Applicable version:** 12 and later |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error.<br>**Applicable version:** 12 and later |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function enableSketch(previewOutput: camera.PreviewOutput, session: camera.Session, cameraInput: camera.CameraInput): void {
  try {
    session.beginConfig();
    session.addInput(cameraInput);
    session.addOutput(previewOutput);
    previewOutput.enableSketch(true);
    session.commitConfig();
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The enableSketch call failed. error code: ${err.code}`);
  }
}

```

## getSketchRatio

```TypeScript
getSketchRatio(): number
```

Obtains the zoom ratio when PiP preview is enabled.

**Since:** 11

<!--Device-PreviewOutput-getSketchRatio(): double--><!--Device-PreviewOutput-getSketchRatio(): double-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number | Zoom ratio. If PiP preview is not supported, the value **-1** is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

**Example**

```TypeScript
function getSketchRatio(previewOutput: camera.PreviewOutput): number {
  let sketchRatio: number = previewOutput.getSketchRatio();
  return sketchRatio;
}

```

## isSketchSupported

```TypeScript
isSketchSupported(): boolean
```

Checks whether Picture-in-Picture (PiP) preview is supported.

**Since:** 11

<!--Device-PreviewOutput-isSketchSupported(): boolean--><!--Device-PreviewOutput-isSketchSupported(): boolean-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the PiP preview. **true** if supported, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function isSketchSupported(previewOutput: camera.PreviewOutput): boolean {
  try {
    let isSupported: boolean = previewOutput.isSketchSupported();
    return isSupported;
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The isSketchSupported call failed. error code: ${err.code}`);
  }
  return false;
}

```

## off('sketchStatusChanged')

```TypeScript
off(type: 'sketchStatusChanged', callback?: AsyncCallback<SketchStatusData>): void
```

Unsubscribes from PiP status change events.

**Since:** 11

<!--Device-PreviewOutput-off(type: 'sketchStatusChanged', callback?: AsyncCallback<SketchStatusData>): void--><!--Device-PreviewOutput-off(type: 'sketchStatusChanged', callback?: AsyncCallback<SketchStatusData>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sketchStatusChanged' | Yes | Event type. The value is fixed at **'sketchStatusChanged'**. The event can be listened for when a PiP preview stream is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<SketchStatusData> | No | Callback used to return the result. This parameter is optional. If this parameter is specified, the subscription to the specified event **on('sketchStatusChanged')** with the specified callback is canceled. (The callback object cannot be an anonymous function.) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

**Example**

```TypeScript
function unregisterSketchStatusChanged(previewOutput: camera.PreviewOutput): void {
  previewOutput.off('sketchStatusChanged');
}

```

## on('sketchStatusChanged')

```TypeScript
on(type: 'sketchStatusChanged', callback: AsyncCallback<SketchStatusData>): void
```

Subscribes to PiP status change events. This API uses an asynchronous callback to return the result.

**Since:** 11

<!--Device-PreviewOutput-on(type: 'sketchStatusChanged', callback: AsyncCallback<SketchStatusData>): void--><!--Device-PreviewOutput-on(type: 'sketchStatusChanged', callback: AsyncCallback<SketchStatusData>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sketchStatusChanged' | Yes | Event type. The value is fixed at **'sketchStatusChanged'**. The event can be listened for when a PiP preview stream is created. This event is triggered when PiP preview is enabled or disabled or the zoom ratio changes while PiP preview is enabled. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<SketchStatusData> | Yes | Callback used to return the PiP status data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function callback(error: BusinessError, data: camera.SketchStatusData): void {
  if (error !== undefined && error.code !== 0) {
    console.error(`Callback Error, errorCode: ${error.code}`);
    return;
  }
  console.info(`sketch errorCode is ${error.code}, data is ${JSON.stringify(data)}`);
}

function registerSketchStatusChanged(previewOutput: camera.PreviewOutput): void {
  previewOutput.on('sketchStatusChanged', callback);
}

```

