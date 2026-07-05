# InnerEvent

订阅或发送的事件，订阅事件时`EventPriority`不生效。

**起始版本：** 7

**系统能力：** SystemCapability.Notification.Emitter

## 导入模块

```TypeScript
import { emitter } from '@kit.BasicServicesKit';
```

## eventId

```TypeScript
eventId: long
```

事件ID，由开发者定义，用于辨别事件。

**类型：** long

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Notification.Emitter

## priority

```TypeScript
priority?: EventPriority
```

事件的优先级，默认值为EventPriority.LOW。

**类型：** EventPriority

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Notification.Emitter

