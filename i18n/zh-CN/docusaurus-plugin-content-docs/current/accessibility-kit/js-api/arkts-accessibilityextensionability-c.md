# AccessibilityExtensionAbility

The **AccessibilityExtensionAbility** module provides accessibility extension capabilities based on the ExtensionAbility framework.

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## 导入模块

```TypeScript
import { Rect,TouchPosition,AccessibilityVirtualNode,ElementAttributeKeys,FocusCondition,AccessibilityExtensionContext,ElementAttributeValues,AccessibilityEventInfo,AccessibilityEvent,AccessibilityElement,FocusRule,FocusMoveResult,FocusType,Parameter,FocusDirection,WindowType } from '@kit.AccessibilityKit';
```

## onAccessibilityConnect

```TypeScript
onAccessibilityConnect(): void
```

Called when the AccessibilityExtensionAbility is enabled and connected to the system service. In this API, you can have the service logic initialized. This API can be overridden as required. It returns the result to notify that the ability is successfully connected.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**示例：**

```TypeScript
import { AccessibilityExtensionAbility } from '@kit.AccessibilityKit';

class MyAccessibilityExtensionAbility extends AccessibilityExtensionAbility {
  onAccessibilityConnect(): void {
    console.info('AxExtensionAbility onAccessibilityConnect');
  }
}

```

## onAccessibilityDisconnect

```TypeScript
onAccessibilityDisconnect(): void
```

Called when the AccessibilityExtensionAbility is successfully disconnected from the system service. In this API, you can implement the service logic of resource release and exit. This API can be overridden as required.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**示例：**

```TypeScript
import { AccessibilityExtensionAbility } from '@kit.AccessibilityKit';

class MyAccessibilityExtensionAbility extends AccessibilityExtensionAbility {
  onAccessibilityDisconnect(): void {
    console.info('AxExtensionAbility onAccessibilityDisconnect');
  }
}

```

## onAccessibilityEvent

```TypeScript
onAccessibilityEvent(event: AccessibilityEvent): void
```

Called when an event that matches the specified bundle and event type occurs. In this API, you can implement event- specific service logic. Generally, this API needs to be overridden.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | AccessibilityEvent | 是 | Accessibility event. No return value. |

**示例：**

```TypeScript
import { AccessibilityExtensionAbility, AccessibilityEvent } from '@kit.AccessibilityKit';

class MyAccessibilityExtensionAbility extends AccessibilityExtensionAbility {
  onAccessibilityEvent(event: AccessibilityEvent): void {
    console.info('AxExtensionAbility onAccessibilityEvent');
    if (event.eventType === 'click') {
      console.info('AxExtensionAbility onAccessibilityEvent: click');
    }
  }
}

```

## onAccessibilityEventInfo

```TypeScript
onAccessibilityEventInfo(event: AccessibilityEventInfo): void
```

Called when a specified event occurs in an application. In this API, you can implement event-specific service logic. Generally, this API needs to be overridden.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | AccessibilityEventInfo | 是 | Accessibility event information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**示例：**

```TypeScript
import { AccessibilityExtensionAbility, AccessibilityEventInfo, AccessibilityEventType } from '@kit.AccessibilityKit';

class MyAccessibilityExtensionAbility extends AccessibilityExtensionAbility {
  onAccessibilityEventInfo(event: AccessibilityEventInfo): void {
    console.info('AxExtensionAbility onAccessibilityEventInfo');
    if (event.eventType === AccessibilityEventType.TYPE_CLICK) {
      console.info('AxExtensionAbility onAccessibilityEventInfo: click');
    }
  }
}

```

## onAccessibilityKeyEvent

```TypeScript
onAccessibilityKeyEvent(keyEvent: KeyEvent): boolean
```

Called when a physical key is pressed. In this API, you can determine whether to consume the event based on the service.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyEvent | KeyEvent | 是 | Key event. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the event is consumed and will not be transferred; returns false  otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**示例：**

```TypeScript
import { AccessibilityExtensionAbility } from '@kit.AccessibilityKit';
import { KeyEvent, KeyCode } from '@kit.InputKit';

class MyAccessibilityExtensionAbility extends AccessibilityExtensionAbility {
  onAccessibilityKeyEvent(keyEvent: KeyEvent): boolean {
    console.info('AxExtensionAbility onAccessibilityKeyEvent');
    if (keyEvent.key.code === KeyCode.KEYCODE_VOLUME_UP) {
      console.info('AxExtensionAbility onAccessibilityKeyEvent: intercept 16');
      return true;
    }
    return false;
  }
}

```

## onConnect

```TypeScript
onConnect(): void
```

Called when the **AccessibilityExtensionAbility** is enabled and connected to the system service. In this API, you can have the service logic initialized. This API can be overridden as required.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**示例：**

```TypeScript
import { AccessibilityExtensionAbility } from '@kit.AccessibilityKit';

class MyAccessibilityExtensionAbility extends AccessibilityExtensionAbility {
  onConnect(): void {
    console.info('AxExtensionAbility onConnect');
  }
}

```

## onDisconnect

```TypeScript
onDisconnect(): void
```

Called when the **AccessibilityExtensionAbility** is disabled and disconnected from the system service. In this API , you can implement the service logic of resource release and exit. This API can be overridden as required.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**示例：**

```TypeScript
import { AccessibilityExtensionAbility } from '@kit.AccessibilityKit';

class MyAccessibilityExtensionAbility extends AccessibilityExtensionAbility {
  onDisconnect(): void {
    console.info('AxExtensionAbility onDisconnect');
  }
}

```

## onKeyEvent

```TypeScript
onKeyEvent(keyEvent: KeyEvent): boolean
```

Called when a physical key is pressed. In this API, you can determine whether to consume the event based on the service.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyEvent | KeyEvent | 是 | Key event. If true is returned, the key is consumed. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the event is consumed and will not be transferred; returns false if  the event is not consumed and will be transferred. |

**示例：**

```TypeScript
import { AccessibilityExtensionAbility } from '@kit.AccessibilityKit';
import { KeyEvent } from '@kit.InputKit';

class MyAccessibilityExtensionAbility extends AccessibilityExtensionAbility {
  onKeyEvent(keyEvent: KeyEvent): boolean {
    console.info('AxExtensionAbility onKeyEvent');
    if (keyEvent.key.code === 16) {
      console.info('AxExtensionAbility onKeyEvent: intercept 16');
      return true;
    }
    return false;
  }
}

```

## context

```TypeScript
context: AccessibilityExtensionContext
```

Context of the accessibility extension ability.

**类型：** AccessibilityExtensionContext

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

