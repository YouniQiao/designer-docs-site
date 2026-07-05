# MetadataOutput

Implements metadata streams. It inherits from [CameraOutput](arkts-camera-cameraoutput-i.md#cameraoutput).

**Inheritance/Implementation:** MetadataOutput extends [CameraOutput](arkts-camera-cameraoutput-i.md#cameraoutput)

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@ohos.multimedia.camera';
```

## addMetadataObjectTypes

```TypeScript
addMetadataObjectTypes(types: Array<MetadataObjectType>): void
```

Adds the types of metadata objects to be detected.

**Since:** 23

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| types | Array&lt;MetadataObjectType&gt; | Yes | Metadata object types, which are obtained through**getSupportedOutputCapability**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 13 - 22 |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## removeMetadataObjectTypes

```TypeScript
removeMetadataObjectTypes(types: Array<MetadataObjectType>): void
```

Removes the types of metadata objects to be detected.

**Since:** 23

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| types | Array&lt;MetadataObjectType&gt; | Yes | Metadata object types, which are obtained through**getSupportedOutputCapability**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 13 - 22 |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

