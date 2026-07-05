# onFlashReminderStateChange

## onFlashReminderStateChange

```TypeScript
function onFlashReminderStateChange(callback: Callback<boolean>): void
```

Subscribes to the state changes in flash alerts mode. This API uses an asynchronous callback to return the result. > **NOTE** > > - The callback parameter for registering a listener must use a named function instead of an anonymous function. > Otherwise, a new underlying object is created each time the function is called, causing memory leakage. > > - After calling this method, you must use > [accessibility.offFlashReminderStateChange]accessibility.offFlashReminderStateChange(callback?: Callback<boolean>) > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 是 | Callback function. Returns true if flash alerts mode is enabled;  returns false otherwise. |

**示例：**

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

