# CaptionsManager

Implements configuration management for captions. Before calling any API of **CaptionsManager**, you must use the [accessibility.getCaptionsManager()](arkts-accessibility-accessibility-getcaptionsmanager-f.md#getcaptionsmanager-1) API to obtain a **CaptionsManager** instance.

**Since:** 8

<!--Device-accessibility-interface CaptionsManager--><!--Device-accessibility-interface CaptionsManager-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Hearing

## Modules to Import

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
```

<a id="off"></a>
## off('enableChange')

```TypeScript
off(type: 'enableChange', callback?: Callback<boolean>): void
```

Unsubscribes from the state changes of captions configuration. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 12

<!--Device-CaptionsManager-off(type: 'enableChange', callback?: Callback<boolean>): void--><!--Device-CaptionsManager-off(type: 'enableChange', callback?: Callback<boolean>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Hearing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'enableChange' | Yes | Event type, which is set to **'enableChange'** in this API. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;boolean&gt; | No | Callback used to unregister. It must be consistent with the callback used in [on('enableChange')](accessibility.CaptionsManager.on(type: 'enableChange', callback: Callback<boolean>)). If this parameter is not specified, listening will be disabled for all callbacks corresponding to the specified type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
struct Index {
  callback: (data: boolean) => void = this.eventCallback;
  eventCallback(data: boolean): void {
    console.info(`subscribe caption manager enable state change, result: ${JSON.stringify(data)}`);
  }

  aboutToAppear(): void {
    let captionsManager = accessibility.getCaptionsManager();
    captionsManager.on('enableChange', this.callback);
  }

  aboutToDisappear(): void {
    let captionsManager = accessibility.getCaptionsManager();
    captionsManager.off('enableChange', this.callback);
  }

  build() {
    Column() {
    }
  }
}

```

<a id="off-1"></a>
## off('styleChange')

```TypeScript
off(type: 'styleChange', callback?: Callback<CaptionsStyle>): void
```

Unsubscribes from the captions style changes. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 12

<!--Device-CaptionsManager-off(type: 'styleChange', callback?: Callback<CaptionsStyle>): void--><!--Device-CaptionsManager-off(type: 'styleChange', callback?: Callback<CaptionsStyle>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Hearing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'styleChange' | Yes | Event type, which is set to **'styleChange'** in this API. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;CaptionsStyle&gt; | No | Callback used to unregister. It must be consistent with the callback used in [on('styleChange')](accessibility.CaptionsManager.on(type: 'styleChange', callback: Callback<CaptionsStyle>)). If this parameter is not specified, listening will be disabled for all callbacks corresponding to the specified type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
struct Index {
  callback: (data: accessibility.CaptionsStyle) => void = this.eventCallback;
  eventCallback(data: accessibility.CaptionsStyle): void {
    console.info(`subscribe caption manager style state change, result: ${JSON.stringify(data)}`);
  }

  aboutToAppear(): void {
    let captionsManager = accessibility.getCaptionsManager();
    captionsManager.on('styleChange', this.callback);
  }

  aboutToDisappear(): void {
    let captionsManager = accessibility.getCaptionsManager();
    captionsManager.off('styleChange', this.callback);
  }

  build() {
    Column() {
    }
  }
}

```

<a id="on"></a>
## on('enableChange')

```TypeScript
on(type: 'enableChange', callback: Callback<boolean>): void
```

Subscribes to the state changes of captions configuration. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> - The callback parameter for registering a listener must use a named function instead of an anonymous function.  
> Otherwise, a new underlying object is created each time the function is called, causing memory leakage.  
>  
> - After calling this method, you must use  
> [off('enableChange')](accessibility.CaptionsManager.off(type: 'enableChange', callback?: Callback<boolean>))  
> to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.

**Since:** 8

**Deprecated since:** 12

<!--Device-CaptionsManager-on(type: 'enableChange', callback: Callback<boolean>): void--><!--Device-CaptionsManager-on(type: 'enableChange', callback: Callback<boolean>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Hearing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'enableChange' | Yes | Event type, which is set to **'enableChange'** in this API. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;boolean&gt; | Yes | Callback invoked when the enabled status of captions configuration changes. The value **true** indicates that the subtitle configuration is enabled, and the value **false** indicates that the subtitle configuration is disabled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
struct Index {
  callback: (data: boolean) => void = this.eventCallback;
  eventCallback(data: boolean): void {
    console.info(`subscribe caption manager enable state change, result: ${JSON.stringify(data)}`);
  }

  aboutToAppear(): void {
    let captionsManager = accessibility.getCaptionsManager();
    captionsManager.on('enableChange', this.callback);
  }

  build() {
    Column() {
    }
  }
}

```

<a id="on-1"></a>
## on('styleChange')

```TypeScript
on(type: 'styleChange', callback: Callback<CaptionsStyle>): void
```

Subscribes to captions style changes. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> - The callback parameter for registering a listener must use a named function instead of an anonymous function.  
> Otherwise, a new underlying object is created each time the function is called, causing memory leakage.  
>  
> - After calling this method, you must use  
> [off('styleChange')](accessibility.CaptionsManager.off(type: 'styleChange', callback?: Callback<CaptionsStyle>))  
> to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.

**Since:** 8

**Deprecated since:** 12

<!--Device-CaptionsManager-on(type: 'styleChange', callback: Callback<CaptionsStyle>): void--><!--Device-CaptionsManager-on(type: 'styleChange', callback: Callback<CaptionsStyle>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Hearing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'styleChange' | Yes | Event type, which is set to **'styleChange'** in this API. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;CaptionsStyle&gt; | Yes | Callback invoked when the style of captions changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
struct Index {
  callback: (data: accessibility.CaptionsStyle) => void = this.eventCallback;
  eventCallback(data: accessibility.CaptionsStyle): void {
    console.info(`subscribe caption manager style state change, result: ${JSON.stringify(data)}`);
  }

  aboutToAppear(): void {
    let captionsManager = accessibility.getCaptionsManager();
    captionsManager.on('styleChange', this.callback);
  }

  build() {
    Column() {
    }
  }
}

```

## enabled

```TypeScript
enabled: boolean
```

Whether to enable captions configuration. The value **true** indicates that the caption configuration is enabled,and **false** indicates the opposite.

**Type:** boolean

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-CaptionsManager-enabled: boolean--><!--Device-CaptionsManager-enabled: boolean-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Hearing

## style

```TypeScript
style: CaptionsStyle
```

Style of captions.

**Type:** CaptionsStyle

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-CaptionsManager-style: CaptionsStyle--><!--Device-CaptionsManager-style: CaptionsStyle-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Hearing

