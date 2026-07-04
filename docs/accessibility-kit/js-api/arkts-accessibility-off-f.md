# off

## Modules to Import

```TypeScript
import { accessibility } from '@ohos.accessibility';
```

## off('accessibilityStateChange')

```TypeScript
function off(type: 'accessibilityStateChange', callback?: Callback<boolean>): void
```

Unsubscribes from the state changes of the accessibility application. This API uses an asynchronous callback to return the result.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'accessibilityStateChange' | Yes | Event type, which is set to **'accessibilityStateChange'** in thisAPI. |
| callback | Callback&lt;boolean&gt; | No | Callback used to unregister. It must be consistent with the callback usedin[accessibility.on('accessibilityStateChange')](arkts-accessibility-on-f.md#on-1). If this parameter is not specified, listening will be disabled for all callbacks corresponding to thespecified type.<br>**Since:** 20 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

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

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'touchGuideStateChange' | Yes | Event type, which is set to **'touchGuideStateChange'** in this API. |
| callback | Callback&lt;boolean&gt; | No | Callback used to unregister. It must be consistent with the callback usedin[accessibility.on('touchGuideStateChange')](arkts-accessibility-on-f.md#on-2). If this parameter is not specified, listening will be disabled for all callbacks corresponding to thespecified type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

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

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'screenReaderStateChange' | Yes | Event type, which is set to **'screenReaderStateChange'** in this API. |
| callback | Callback&lt;boolean&gt; | No | Callback used to unregister. It must be consistent with the callback usedin[accessibility.on('screenReaderStateChange')](arkts-accessibility-on-f.md#on-3). If this parameter is not specified, listening will be disabled for all callbacks corresponding to thespecified type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

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

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'touchModeChange' | Yes | Event type, which is set to **'touchModeChange'** in this API. |
| callback | Callback&lt;string&gt; | No | Callback used to unregister. The value must be the same as the value ofcallback in[accessibility.on('touchModeChange')](arkts-accessibility-on-f.md#on-4). If this parameter is not specified, listening will be disabled for all callbacks corresponding to thespecified type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.Incorrect parameter types. 3.Parameter verification failed. |

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

