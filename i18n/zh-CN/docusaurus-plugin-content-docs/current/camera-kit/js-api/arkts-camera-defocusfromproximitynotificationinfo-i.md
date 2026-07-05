# DefocusFromProximityNotificationInfo

Describes defocus notification information caused by close proximity.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## name

```TypeScript
readonly name: NotificationName
```

Notification name. This value is {@link NotificationName.DEFOCUS_FROM_PROXIMITY}.

**类型：** NotificationName

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## value

```TypeScript
readonly value: ProximityStateForFocus
```

Notification value. Indicates the proximity state for focus.

**类型：** ProximityStateForFocus

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

