# PrelaunchConfig

Defines the camera prelaunch configuration. Currently, the configuration is used for sensor-level prelaunch. It will be used for stream-level prelaunch in a later version.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## activeTime

```TypeScript
activeTime?: int
```

Activation time, in minutes.

**类型：** int

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## cameraDevice

```TypeScript
cameraDevice: CameraDevice
```

Camera device.

**类型：** CameraDevice

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## restoreParamType

```TypeScript
restoreParamType?: RestoreParamType
```

Type of the parameter used for prelaunch.

**类型：** RestoreParamType

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## settingParam

```TypeScript
settingParam?: SettingParam
```

Setting parameter.

**类型：** SettingParam

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

