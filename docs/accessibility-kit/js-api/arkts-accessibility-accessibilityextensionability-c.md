# AccessibilityExtensionAbility

The **AccessibilityExtensionAbility** module provides accessibility extension capabilities based on the ExtensionAbility framework.

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## Modules to Import

```TypeScript
import { Rect, TouchPosition, AccessibilityVirtualNode, ElementAttributeKeys, FocusCondition, AccessibilityExtensionContext, ElementAttributeValues, AccessibilityEventInfo, AccessibilityEvent, AccessibilityElement, FocusRule, FocusMoveResult, FocusType, Parameter, FocusDirection, WindowType } from '@ohos.application.AccessibilityExtensionAbility';
```

## onAccessibilityEvent

```TypeScript
onAccessibilityEvent(event: AccessibilityEvent): void
```

Called when an event that matches the specified bundle and event type occurs. In this API, you can implement event- specific service logic. Generally, this API needs to be overridden.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | AccessibilityEvent | Yes | Accessibility event. No return value. |

**Example**

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

## onConnect

```TypeScript
onConnect(): void
```

Called when the **AccessibilityExtensionAbility** is enabled and connected to the system service. In this API, you can have the service logic initialized. This API can be overridden as required.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Example**

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

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Example**

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

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyEvent | KeyEvent | Yes | Key event. If **true** is returned, the key is consumed. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the event is consumed and will not be transferred;<br>returns **false** ifthe event is not consumed and will be transferred. |

**Example**

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

**Type:** AccessibilityExtensionContext

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

