# AutoDeviceSwitchStatus

Describes the information about the automatic camera switch status.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## isDeviceCapabilityChanged

```TypeScript
readonly isDeviceCapabilityChanged: boolean
```

Whether the camera capability is changed after the camera is automatically switched. **true** if changed, **false** otherwise.

**类型：** boolean

**起始版本：** 13

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## isDeviceSwitched

```TypeScript
readonly isDeviceSwitched: boolean
```

Whether the camera is automatically switched. **true** if auto-switched, **false** otherwise.

**类型：** boolean

**起始版本：** 13

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

