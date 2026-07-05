# ControlEvent

Defines a control event.

**Since:** 20

**System capability:** SystemCapability.MultimodalAwareness.OnScreenAwareness

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { onScreen } from '@kit.MultimodalAwarenessKit';
```

## hookId

```TypeScript
hookId?: long
```

Hook ID corresponding to the control event. The hook ID and the session ID can be obtained from [PageContent]onScreen.PageContent of a session.

**Type:** long

**Since:** 20

**System capability:** SystemCapability.MultimodalAwareness.OnScreenAwareness

**System API:** This is a system API.

## eventType

```TypeScript
eventType: EventType
```

Control event type.

**Type:** EventType

**Since:** 20

**System capability:** SystemCapability.MultimodalAwareness.OnScreenAwareness

**System API:** This is a system API.

## sessionId

```TypeScript
sessionId: long
```

ID of the session to be operated. The hook ID and the session ID can be obtained from [PageContent]onScreen.PageContent of a session.

**Type:** long

**Since:** 20

**System capability:** SystemCapability.MultimodalAwareness.OnScreenAwareness

**System API:** This is a system API.

## windowId

```TypeScript
windowId: int
```

ID of the window to be operated.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.MultimodalAwareness.OnScreenAwareness

**System API:** This is a system API.

