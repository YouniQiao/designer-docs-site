# OISQuery

OIS (Optical Image Stabilization) query interface.

**起始版本：** 24

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getCurrentCustomOISBias

```TypeScript
getCurrentCustomOISBias(oisAxis: OISAxes): double
```

Gets the current custom bias value for the specified OIS axis.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| oisAxis | OISAxes | 是 | The OIS axis |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | The current bias value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. |
| 7400103 | Session not config. |

## getCurrentOISMode

```TypeScript
getCurrentOISMode(): OISMode
```

Gets the current OIS mode.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| OISMode | The current OIS mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. |
| 7400103 | Session not config. |

## getSupportedOISBiasRange

```TypeScript
getSupportedOISBiasRange(oisAxis: OISAxes): Array<double>
```

Gets the supported bias range for the specified OIS axis.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| oisAxis | OISAxes | 是 | The OIS axis. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;double> | The bias range. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. |
| 7400103 | Session not config. |

## getSupportedOISBiasStep

```TypeScript
getSupportedOISBiasStep(oisAxis: OISAxes): double
```

Gets the bias step for the specified OIS axis.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| oisAxis | OISAxes | 是 | The OIS axis. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | The bias step value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. |
| 7400103 | Session not config. |

## isOISModeSupported

```TypeScript
isOISModeSupported(mode: OISMode): boolean
```

Checks if the specified OIS mode is supported.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | OISMode | 是 | The OIS mode to check. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the mode is supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. |
| 7400103 | Session not config. |

