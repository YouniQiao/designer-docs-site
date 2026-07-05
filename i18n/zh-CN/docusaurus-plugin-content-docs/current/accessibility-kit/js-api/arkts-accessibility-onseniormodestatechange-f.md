# onSeniorModeStateChange

## onSeniorModeStateChange

```TypeScript
function onSeniorModeStateChange(callback: Callback<boolean>): void
```

Listens for enabling status changes of the senior mode. This API uses an asynchronous callback to return the result. > **NOTE** > > - The callback parameter for registering a listener must use a named function instead of an anonymous function. > Otherwise, a new underlying object is created each time the function is called, causing memory leakage. > > - After calling this method, you must use > [accessibility.offSeniorModeStateChange]accessibility.offSeniorModeStateChange(callback?: Callback<boolean>) > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 是 | Callback function. The value true indicates that the senior mode is  enabled, and the value false indicates that the senior mode is disabled. |

**示例：**

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

  build() {
    Column() {
    }
  }
}

```

