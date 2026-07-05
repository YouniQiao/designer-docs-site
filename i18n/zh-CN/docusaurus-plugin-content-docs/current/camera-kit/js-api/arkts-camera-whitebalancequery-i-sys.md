# WhiteBalanceQuery

WhiteBalanceQuery provides APIs to check whether a white balance mode is supported and obtain the white balance mode range supported.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getColorTintRange

```TypeScript
getColorTintRange(): Array<int>
```

Query the color tint range.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;int> | The array of color tint range. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |

## getWhiteBalanceRange

```TypeScript
getWhiteBalanceRange(): Array<int>
```

Obtains the range of white balance values in manual white balance mode.

**起始版本：** 12

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;int> | Range of white balance values, for example, [2800, ...,10000], in units of K (Kelvin).  The actual value depends on the bottom-layer capability. If the API call fails, undefined is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 12 - 19] |
| 7400103 | Session not config, only throw in session usage. |

## isWhiteBalanceModeSupported

```TypeScript
isWhiteBalanceModeSupported(mode: WhiteBalanceMode): boolean
```

Checks whether a white balance mode is supported.

**起始版本：** 12

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | WhiteBalanceMode | 是 | White balance mode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the white balance mode. true if supported, false  otherwise. If the API call fails, undefined is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 12 - 19] |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config, only throw in session usage. |

