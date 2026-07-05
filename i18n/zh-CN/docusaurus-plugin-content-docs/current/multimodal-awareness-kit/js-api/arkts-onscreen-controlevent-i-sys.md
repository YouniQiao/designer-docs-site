# ControlEvent

Defines a control event.

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { onScreen } from '@kit.MultimodalAwarenessKit';
```

## hookId

```TypeScript
hookId?: long
```

Hook ID corresponding to the control event. The hook ID and the session ID can be obtained from [PageContent]onScreen.PageContent of a session.

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## eventType

```TypeScript
eventType: EventType
```

Control event type.

**类型：** EventType

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## sessionId

```TypeScript
sessionId: long
```

ID of the session to be operated. The hook ID and the session ID can be obtained from [PageContent]onScreen.PageContent of a session.

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## windowId

```TypeScript
windowId: int
```

ID of the window to be operated.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

