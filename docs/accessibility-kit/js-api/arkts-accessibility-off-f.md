# off

## off('accessibilityStateChange')

```TypeScript
function off(type: 'accessibilityStateChange', callback?: Callback<boolean>): void
```

Unsubscribes from the state changes of the accessibility application. This API uses an asynchronous callback to return the result.

**Since:** 7

**Atomic service API:** From API version 23 this API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'accessibilityStateChange' | Yes | Event type, which is set to 'accessibilityStateChange' in this  API. |
| callback | Callback&lt;boolean> | No | Callback used to unregister. It must be consistent with the callback used  in  [accessibility.on('accessibilityStateChange')]accessibility.on(type: 'accessibilityStateChange', callback: Callback)  . If this parameter is not specified, listening will be disabled for all callbacks corresponding to the  specified type. [since 7 - 19] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

accessibility.off('accessibilityStateChange', (data: boolean) => {
  console.info(`Unsubscribe accessibility state change, result: ${JSON.stringify(data)}`);
});

```

## off('touchGuideStateChange')

```TypeScript
function off(type: 'touchGuideStateChange', callback?: Callback<boolean>): void
```

Unsubscribes from the state changes in touch guide mode. This API uses an asynchronous callback to return the result.

**Since:** 7

**Atomic service API:** From API version 23 this API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'touchGuideStateChange' | Yes | Event type, which is set to 'touchGuideStateChange' in this API. |
| callback | Callback&lt;boolean> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

accessibility.off('touchGuideStateChange', (data: boolean) => {
  console.info(`Unsubscribe touch guide state change, result: ${JSON.stringify(data)}`);
});

```

## off('screenReaderStateChange')

```TypeScript
function off(type: 'screenReaderStateChange', callback?: Callback<boolean>): void
```

Unsubscribes from the state changes of the screen reader. This API uses an asynchronous callback to return the result.

**Since:** 18

**Atomic service API:** From API version 23 this API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'screenReaderStateChange' | Yes | Event type, which is set to 'screenReaderStateChange' in this API. |
| callback | Callback&lt;boolean> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

accessibility.off('screenReaderStateChange', (data: boolean) => {
  console.info(`Unsubscribe screen reader state change, result: ${JSON.stringify(data)}`);
});

```

## off('touchModeChange')

```TypeScript
function off(type: 'touchModeChange', callback?: Callback<string>): void
```

Unsubscribes from the single- or double-touch event changes in touch guide mode. This API uses an asynchronous callback to return the result.

**Since:** 20

**Atomic service API:** From API version 23 this API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'touchModeChange' | Yes | Event type, which is set to 'touchModeChange' in this API. |
| callback | Callback&lt;string> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. 3.Parameter verification failed. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
struct Index {
  callback: (mode: string) => void = this.eventCallback;
  eventCallback(mode: string): void {
    console.info(`current touch mode: ${JSON.stringify(mode)}`);
  }

  aboutToAppear(): void {
    accessibility.on('touchModeChange', this.callback);
  }

  aboutToDisappear(): void {
    accessibility.off('touchModeChange', this.callback);
  }

  build() {
    Column() {
    }
  }
}

```

