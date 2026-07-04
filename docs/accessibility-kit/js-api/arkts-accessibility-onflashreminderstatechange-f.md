# onFlashReminderStateChange

## Modules to Import

```TypeScript
import { accessibility } from '@ohos.accessibility';
```

## onFlashReminderStateChange

```TypeScript
function onFlashReminderStateChange(callback: Callback<boolean>): void
```

Subscribes to the state changes in flash alerts mode. This API uses an asynchronous callback to return the result. > **NOTE** > > - The callback parameter for registering a listener must use a named function instead of an anonymous function. > Otherwise, a new underlying object is created each time the function is called, causing memory leakage. > > - After calling this method, you must use > [accessibility.offFlashReminderStateChange](arkts-accessibility-offflashreminderstatechange-f.md#offflashreminderstatechange-1) > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean&gt; | Yes | Callback function. Returns **true** if flash alerts mode is enabled;returns **false** otherwise. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
struct Index {
  callback: (data: boolean) => void = this.eventCallback;
  eventCallback(data: boolean): void {
    console.info(`subscribe flashReminder state change, result: ${JSON.stringify(data)}`);
  }

  aboutToAppear(): void {
    accessibility.onFlashReminderStateChange(this.callback);
  }

  build() {
    Column() {
    }
  }
}

```

