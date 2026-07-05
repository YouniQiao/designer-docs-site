# offAnimationReduceStateChange

## offAnimationReduceStateChange

```TypeScript
function offAnimationReduceStateChange(callback?: Callback<boolean>): void
```

Unsubscribes from the state changes in animation reduction mode. This API uses an asynchronous callback to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | No |  |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
struct Index {
  callback: (data: boolean) => void = this.eventCallback;
  eventCallback(data: boolean): void {
    console.info(`subscribe animationReduce state change, result: ${JSON.stringify(data)}`);
  }

  aboutToAppear(): void {
    accessibility.onAnimationReduceStateChange(this.callback);
  }

  aboutToDisappear(): void {
    accessibility.offAnimationReduceStateChange(this.callback);
  }

  build() {
    Column() {
    }
  }
}

```

