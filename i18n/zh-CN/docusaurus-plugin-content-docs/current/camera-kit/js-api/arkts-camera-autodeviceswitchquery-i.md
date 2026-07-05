# AutoDeviceSwitchQuery

AutoDeviceSwitchQuery** is used to check whether a device supports automatic camera switch. [Automatic Camera Switching](docroot://media/camera/camera-auto-switch.md) is supported only on foldable devices. For details about how to enable this capability, see [enableAutoDeviceSwitch]camera.AutoDeviceSwitch.enableAutoDeviceSwitch.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## isAutoDeviceSwitchSupported

```TypeScript
isAutoDeviceSwitchSupported(): boolean
```

Checks whether the device supports automatic camera switch.

**起始版本：** 13

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of automatic camera switch. true if supported, false  otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. [since 13 - 17] |

