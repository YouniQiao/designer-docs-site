# offAnimationReduceStateChange

## Modules to Import

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
```

## offAnimationReduceStateChange

```TypeScript
function offAnimationReduceStateChange(callback?: Callback<boolean>): void
```

Unsubscribes from the state changes in animation reduction mode. This API uses an asynchronous callback to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-accessibility-function offAnimationReduceStateChange(callback?: Callback<boolean>): void--><!--Device-accessibility-function offAnimationReduceStateChange(callback?: Callback<boolean>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<boolean> | No | Callback function. Cancels the event response of a specified callback object. The value must be the same as the value of callback in [accessibility.onAnimationReduceStateChange](arkts-accessibility-accessibility-onanimationreducestatechange-f.md#onanimationreducestatechange-1). If this parameter is not specified, listening will be disabled for all callbacks corresponding to the specified type. |

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

