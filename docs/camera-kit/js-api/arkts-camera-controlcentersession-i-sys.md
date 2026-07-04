# ControlCenterSession (System API)

Control center session object.

**Inheritance/Implementation:** ControlCenterSession extends [Beauty](arkts-camera-beauty-i-sys.md#beauty), [Aperture](arkts-camera-aperture-i-sys.md#aperture), [ColorEffect](arkts-camera-coloreffect-i-sys.md#coloreffect)

**Since:** 20

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@ohos.multimedia.camera';
```

## enableAutoFraming

```TypeScript
enableAutoFraming(enabled: boolean): void
```

Enable auto-framing effect.

**Since:** 24

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | enable auto-framing effect if TRUE. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400104](../errorcode-camera.md#7400104-session-not-running) | Session not running. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## getAutoFramingStatus

```TypeScript
getAutoFramingStatus(): boolean
```

Gets the status of auto-framing effect.

**Since:** 24

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Is auto-framing active. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

## getControlCenterHeight

```TypeScript
getControlCenterHeight(): number
```

Gets the control center height.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number | the control center height, in units of vp. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

## getCurrentDevice

```TypeScript
getCurrentDevice(): CameraDevice
```

Gets the current camera device.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| CameraDevice | the current camera device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400104](../errorcode-camera.md#7400104-session-not-running) | Session not running. |

## isAutoFramingSupported

```TypeScript
isAutoFramingSupported(): boolean
```

Checks whether auto-framing is supported.

**Since:** 24

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Is auto-framing supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

## release

```TypeScript
release(): Promise<void>
```

Release control center session object.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

## usedAsPosition

```TypeScript
usedAsPosition(position: CameraPosition): void
```

Sets the camera to be used as a camera at the specified position.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | CameraPosition | Yes | The positon used for the camera. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400104](../errorcode-camera.md#7400104-session-not-running) | Session not running. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

