# WhiteBalance

WhiteBalance** inherits from [WhiteBalanceQuery]camera.WhiteBalanceQuery. It provides APIs to process white balance, including obtaining and setting the white balance mode and white balance value.

**继承实现关系：** WhiteBalance继承自：WhiteBalanceQuery。

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getColorTint

```TypeScript
getColorTint(): int
```

Gets current color tint.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | The current color tint. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## getWhiteBalance

```TypeScript
getWhiteBalance(): int
```

Obtains the current white balance value.

**起始版本：** 12

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | White balance value, in units of K (Kelvin) |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 12 - 19] |
| 7400103 | Session not config. |

## getWhiteBalanceMode

```TypeScript
getWhiteBalanceMode(): WhiteBalanceMode
```

Obtains the white balance mode in use.

**起始版本：** 12

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WhiteBalanceMode | White balance mode in use. If the API call fails, undefined is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 12 - 19] |
| 7400103 | Session not config. |

## setColorTint

```TypeScript
setColorTint(colorTint: int): void
```

Sets color tint.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| colorTint | int | 是 | Color tint, the supported range can be obtained by calling  [getColorTintRange]camera.WhiteBalanceQuery.getColorTintRange. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## setWhiteBalance

```TypeScript
setWhiteBalance(whiteBalance: int): void
```

Sets a white balance value. Before the setting, run [getWhiteBalanceRange]camera.WhiteBalanceQuery.getWhiteBalanceRange to check the white balance value range supported by the device.

**起始版本：** 12

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| whiteBalance | int | 是 | White balance value, in units of K (Kelvin) |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 12 - 19] |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |

## setWhiteBalanceMode

```TypeScript
setWhiteBalanceMode(mode: WhiteBalanceMode): void
```

Sets a white balance mode. Before the setting, run [isWhiteBalanceModeSupported]camera.WhiteBalanceQuery.isWhiteBalanceModeSupported to check whether the device supports the specified white balance mode.

**起始版本：** 12

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | WhiteBalanceMode | 是 | White balance mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 12 - 19] |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |

