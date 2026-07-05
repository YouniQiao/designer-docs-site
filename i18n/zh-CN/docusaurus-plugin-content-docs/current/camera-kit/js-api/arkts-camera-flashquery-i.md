# FlashQuery

Provides APIs to obtain the flash information of a camera device, including whether the LCD flash is supported.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## hasFlash

```TypeScript
hasFlash(): boolean
```

Checks whether the camera device has flash.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether the camera device has flash. true if it has flash, false  otherwise. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |

## isFlashModeSupported

```TypeScript
isFlashModeSupported(flashMode: FlashMode): boolean
```

Checks whether a flash mode is supported.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| flashMode | FlashMode | 是 | Flash mode. If the input parameter is null or undefined, it is treated as 0 and  the flash is turned off. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the flash mode. true if supported, false otherwise.  If the operation fails, undefined is returned and an error code defined in  [CameraErrorCode]camera.CameraErrorCode is thrown. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |

## isLcdFlashSupported

```TypeScript
isLcdFlashSupported(): boolean
```

Checks whether the LCD flash is supported.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the LCD flash. true if supported, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config, only throw in session usage. |

**示例：**

```TypeScript
function isLcdFlashSupported(nightPhotoSession: camera.NightPhotoSession): boolean {
  return nightPhotoSession.isLcdFlashSupported();
}

```

