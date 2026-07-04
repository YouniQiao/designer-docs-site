# FlashQuery

Provides APIs to obtain the flash information of a camera device, including whether the LCD flash is supported.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@ohos.multimedia.camera';
```

## isLcdFlashSupported

```TypeScript
isLcdFlashSupported(): boolean
```

Checks whether the LCD flash is supported.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the LCD flash. **true** if supported, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config, only throw in session usage. |

**Example**

```TypeScript
function isLcdFlashSupported(nightPhotoSession: camera.NightPhotoSession): boolean {
  return nightPhotoSession.isLcdFlashSupported();
}

```

