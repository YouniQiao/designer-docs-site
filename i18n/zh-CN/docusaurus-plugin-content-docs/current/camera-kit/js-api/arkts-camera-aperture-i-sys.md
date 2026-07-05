# Aperture

Provides the APIs for aperture settings. It inherits from [ApertureQuery]camera.ApertureQuery.

**继承实现关系：** Aperture继承自：ApertureQuery。

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getPhysicalAperture

```TypeScript
getPhysicalAperture(): double
```

Gets current physical aperture value.

**起始版本：** 11

**原子化服务API：** 从API version 24开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | The current physical aperture value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 11 - 23] |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. [since 24] |

## getVirtualAperture

```TypeScript
getVirtualAperture(): double
```

Obtains the virtual aperture in use.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | Virtual aperture. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**示例：**

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

**起始版本：** 11

**原子化服务API：** 从API version 24开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aperture | double | 是 | physical aperture value. The supported physical aperture range can be obtained by  calling [getSupportedPhysicalApertures]camera.ApertureQuery.getSupportedPhysicalApertures |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 11 - 23] |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. [since 24] |

## setVirtualAperture

```TypeScript
setVirtualAperture(aperture: double): void
```

Sets a virtual aperture. Before the setting, call [getSupportedVirtualApertures]camera.ApertureQuery.getSupportedVirtualApertures to obtain the supported virtual apertures.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aperture | double | 是 | virtual aperture value |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**示例：**

```TypeScript
function setVirtualAperture(session: camera.PortraitPhotoSession, virtualAperture: number): void {
  session.setVirtualAperture(virtualAperture);
}

```

