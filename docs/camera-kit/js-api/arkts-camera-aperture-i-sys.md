# Aperture

Provides the APIs for aperture settings. It inherits from [ApertureQuery]camera.ApertureQuery.

**Inheritance:** Apertureextends: ApertureQuery.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getPhysicalAperture

```TypeScript
getPhysicalAperture(): double
```

Gets current physical aperture value.

**Since:** 11

**Atomic service API:** From API version 24 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| double | The current physical aperture value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 11 - 23] |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. [since 24] |

## getVirtualAperture

```TypeScript
getVirtualAperture(): double
```

Obtains the virtual aperture in use.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| double | Virtual aperture. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**Example**

```TypeScript
function getVirtualAperture(session: camera.PortraitPhotoSession): number {
  let virtualAperture: number = session.getVirtualAperture();
  return virtualAperture;
}

```

## setPhysicalAperture

```TypeScript
setPhysicalAperture(aperture: double): void
```

Sets physical aperture value.

**Since:** 11

**Atomic service API:** From API version 24 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aperture | double | Yes | physical aperture value. The supported physical aperture range can be obtained by  calling [getSupportedPhysicalApertures]camera.ApertureQuery.getSupportedPhysicalApertures |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 11 - 23] |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. [since 24] |

## setVirtualAperture

```TypeScript
setVirtualAperture(aperture: double): void
```

Sets a virtual aperture. Before the setting, call [getSupportedVirtualApertures]camera.ApertureQuery.getSupportedVirtualApertures to obtain the supported virtual apertures.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aperture | double | Yes | virtual aperture value |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**Example**

```TypeScript
function setVirtualAperture(session: camera.PortraitPhotoSession, virtualAperture: number): void {
  session.setVirtualAperture(virtualAperture);
}

```

