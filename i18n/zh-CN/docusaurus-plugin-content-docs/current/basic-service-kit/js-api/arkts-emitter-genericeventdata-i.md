# GenericEventData

发送事件时传递的泛型数据。

**起始版本：** 12

**系统能力：** SystemCapability.Notification.Emitter

## 导入模块

```TypeScript
import { emitter } from '@kit.BasicServicesKit';
```

## data

```TypeScript
data?: T
```

发送事件时传递的数据。T：泛型类型。

**类型：** T

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Notification.Emitter

```TypeScript
data?: T | ESValue
```

发送事件时传递的数据。T：泛型类型。

**类型：** T | ESValue

**起始版本：** 23

**系统能力：** SystemCapability.Notification.Emitter

