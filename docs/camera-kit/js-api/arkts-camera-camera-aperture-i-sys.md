# Aperture (System API)

Provides the APIs for aperture settings. It inherits from [ApertureQuery](arkts-camera-camera-aperturequery-i-sys.md).

**Inheritance/Implementation:** Aperture extends [ApertureQuery](arkts-camera-camera-aperturequery-i-sys.md)

**Since:** 24

<!--Device-camera-interface Aperture extends ApertureQuery--><!--Device-camera-interface Aperture extends ApertureQuery-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getPhysicalAperture

```TypeScript
getPhysicalAperture(): number
```

Gets current physical aperture value.

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-Aperture-getPhysicalAperture(): double--><!--Device-Aperture-getPhysicalAperture(): double-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number | The current physical aperture value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 11 - 23 |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed, the inputDevice or the session is abnormal.<br>**Applicable version:** 24 and later |

## getVirtualAperture

```TypeScript
getVirtualAperture(): number
```

Obtains the virtual aperture in use.

**Since:** 11

<!--Device-Aperture-getVirtualAperture(): double--><!--Device-Aperture-getVirtualAperture(): double-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number | Virtual aperture. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

**Example**

```TypeScript
function getVirtualAperture(session: camera.PortraitPhotoSession): number {
  let virtualAperture: number = session.getVirtualAperture();
  return virtualAperture;
}

```

## setPhysicalAperture

```TypeScript
setPhysicalAperture(aperture: number): void
```

Sets physical aperture value.

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-Aperture-setPhysicalAperture(aperture: double): void--><!--Device-Aperture-setPhysicalAperture(aperture: double): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aperture | number | Yes | physical aperture value. The supported physical aperture range can be obtained by calling [getSupportedPhysicalApertures](arkts-camera-camera-aperturequery-i-sys.md#getsupportedphysicalapertures) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 11 - 23 |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed, the inputDevice or the session is abnormal.<br>**Applicable version:** 24 and later |

## setVirtualAperture

```TypeScript
setVirtualAperture(aperture: number): void
```

Sets a virtual aperture. Before the setting, call [getSupportedVirtualApertures](arkts-camera-camera-aperturequery-i-sys.md#getsupportedvirtualapertures) to obtain the supported virtual apertures.

**Since:** 11

<!--Device-Aperture-setVirtualAperture(aperture: double): void--><!--Device-Aperture-setVirtualAperture(aperture: double): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aperture | number | Yes | virtual aperture value |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

**Example**

```TypeScript
function setVirtualAperture(session: camera.PortraitPhotoSession, virtualAperture: number): void {
  session.setVirtualAperture(virtualAperture);
}

```

