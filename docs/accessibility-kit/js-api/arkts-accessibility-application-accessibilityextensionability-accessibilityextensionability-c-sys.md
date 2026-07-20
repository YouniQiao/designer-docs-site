# AccessibilityExtensionAbility

The **AccessibilityExtensionAbility** module provides accessibility extension capabilities based on the ExtensionAbility framework.

**Since:** 9

<!--Device-unnamed-declare class AccessibilityExtensionAbility--><!--Device-unnamed-declare class AccessibilityExtensionAbility-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## Modules to Import

```TypeScript
import { Rect, TouchPosition, AccessibilityVirtualNode, ElementAttributeKeys, FocusCondition, AccessibilityExtensionContext, ElementAttributeValues, AccessibilityEventInfo, AccessibilityEvent, AccessibilityElement, FocusRule, FocusMoveResult, FocusType, Parameter, FocusDirection, WindowType } from '@kit.AccessibilityKit';
```

## onAccessibilityConnect

```TypeScript
onAccessibilityConnect(): void
```

Called when the AccessibilityExtensionAbility is enabled and connected to the system service.In this API, you can have the service logic initialized. This API can be overridden as required. It returns the result to notify that the ability is successfully connected.

**Since:** 20

**Required permissions:** ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

<!--Device-AccessibilityExtensionAbility-onAccessibilityConnect(): void--><!--Device-AccessibilityExtensionAbility-onAccessibilityConnect(): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { AccessibilityExtensionAbility } from '@kit.AccessibilityKit';

class MyAccessibilityExtensionAbility extends AccessibilityExtensionAbility {
  onAccessibilityConnect(): void {
    console.log('AxExtensionAbility onAccessibilityConnect');
  }
}

```

## onAccessibilityDisconnect

```TypeScript
onAccessibilityDisconnect(): void
```

Called when the AccessibilityExtensionAbility is successfully disconnected from the system service.In this API, you can implement the service logic of resource release and exit. This API can be overridden as required.

**Since:** 20

**Required permissions:** ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

<!--Device-AccessibilityExtensionAbility-onAccessibilityDisconnect(): void--><!--Device-AccessibilityExtensionAbility-onAccessibilityDisconnect(): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { AccessibilityExtensionAbility } from '@kit.AccessibilityKit';

class MyAccessibilityExtensionAbility extends AccessibilityExtensionAbility {
  onAccessibilityDisconnect(): void {
    console.log('AxExtensionAbility onAccessibilityDisconnect');
  }
}

```

## onAccessibilityEventInfo

```TypeScript
onAccessibilityEventInfo(event: AccessibilityEventInfo): void
```

Called when a specified event occurs in an application. In this API, you can implement event-specific service logic. Generally, this API needs to be overridden.

**Since:** 20

**Required permissions:** ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

<!--Device-AccessibilityExtensionAbility-onAccessibilityEventInfo(event: AccessibilityEventInfo): void--><!--Device-AccessibilityExtensionAbility-onAccessibilityEventInfo(event: AccessibilityEventInfo): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [AccessibilityEventInfo](arkts-accessibility-application-accessibilityextensionability-accessibilityeventinfo-i-sys.md) | Yes | Accessibility event information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { AccessibilityExtensionAbility, AccessibilityEventInfo, AccessibilityEventType } from '@kit.AccessibilityKit';

class MyAccessibilityExtensionAbility extends AccessibilityExtensionAbility {
  onAccessibilityEventInfo(event: AccessibilityEventInfo): void {
    console.log('AxExtensionAbility onAccessibilityEventInfo');
    if (event.eventType === AccessibilityEventType.TYPE_CLICK) {
      console.log('AxExtensionAbility onAccessibilityEventInfo: click');
    }
  }
}

```

## onAccessibilityKeyEvent

```TypeScript
onAccessibilityKeyEvent(keyEvent: KeyEvent): boolean
```

Called when a physical key is pressed. In this API, you can determine whether to consume the event based on the service.

**Since:** 20

**Required permissions:** ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

<!--Device-AccessibilityExtensionAbility-onAccessibilityKeyEvent(keyEvent: KeyEvent): boolean--><!--Device-AccessibilityExtensionAbility-onAccessibilityKeyEvent(keyEvent: KeyEvent): boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyEvent | [KeyEvent](../../apis-arkui/arkts-components/arkts-arkui-common-keyevent-i.md) | Yes | Key event. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the event is consumed and will not be transferred; returns **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { AccessibilityExtensionAbility } from '@kit.AccessibilityKit';
import { KeyEvent, KeyCode } from '@kit.InputKit';

class MyAccessibilityExtensionAbility extends AccessibilityExtensionAbility {
  onAccessibilityKeyEvent(keyEvent: KeyEvent): boolean {
    console.log('AxExtensionAbility onAccessibilityKeyEvent');
    if (keyEvent.key.code === KeyCode.KEYCODE_VOLUME_UP) {
      console.log('AxExtensionAbility onAccessibilityKeyEvent: intercept 16');
      return true;
    }
    return false;
  }
}

```

