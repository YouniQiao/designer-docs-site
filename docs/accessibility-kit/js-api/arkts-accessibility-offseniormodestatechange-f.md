# offSeniorModeStateChange

## Modules to Import

```TypeScript
import { accessibility } from '@ohos.accessibility';
```

## offSeniorModeStateChange

```TypeScript
function offSeniorModeStateChange(callback?: Callback<boolean>): void
```

Cancels listening for the senior mode change event. This API uses an asynchronous callback to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean&gt; | No | Callback function. The value **true** indicates that the senior mode isenabled, and the value **false** indicates that the senior mode is disabled. Cancels the event response of aspecified callback object. It must be consistent with the callback used in[accessibility.onSeniorModeStateChange](arkts-accessibility-onseniormodestatechange-f.md#onseniormodestatechange-1). If this parameter is not specified, listening will be disabled for all callbacks corresponding to thespecified type. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
struct Index {
  callback: (data: boolean) => void = this.eventCallback;
  eventCallback(data: boolean): void {
    console.info(`subscribe senior mode state change, result: ${JSON.stringify(data)}`);
  }

  aboutToAppear(): void {
    accessibility.onSeniorModeStateChange(this.callback);
  }

  aboutToDisappear(): void {
    accessibility.offSeniorModeStateChange(this.callback);
  }

  build() {
    Column() {
    }
  }
}

```

