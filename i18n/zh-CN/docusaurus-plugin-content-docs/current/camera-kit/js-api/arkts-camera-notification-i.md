# Notification

Provides APIs for managing notifications.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## offNotificationReceive

```TypeScript
offNotificationReceive(callback?: Callback<NotificationInfo>): void
```

Unregisters the callback for receiving notifications.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;NotificationInfo> | 否 |  |

## onNotificationReceive

```TypeScript
onNotificationReceive(callback: Callback<NotificationInfo>): void
```

Registers a callback to receive notifications.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;NotificationInfo> | 是 | Callback for receiving notifications. |

