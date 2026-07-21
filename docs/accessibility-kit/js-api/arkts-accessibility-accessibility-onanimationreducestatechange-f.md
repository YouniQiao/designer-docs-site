# onAnimationReduceStateChange

## Modules to Import

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
```

<a id="onanimationreducestatechange"></a>
## onAnimationReduceStateChange

```TypeScript
function onAnimationReduceStateChange(callback: Callback<boolean>): void
```

Subscribes to the state changes in animation reduction mode. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> - The callback parameter for registering a listener must use a named function instead of an anonymous function.  
> Otherwise, a new underlying object is created each time the function is called, causing memory leakage.  
>  
> - After calling this method, you must use  
> [accessibility.offAnimationReduceStateChange](accessibility.offAnimationReduceStateChange(callback?: Callback<boolean>))  
> to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-accessibility-function onAnimationReduceStateChange(callback: Callback<boolean>): void--><!--Device-accessibility-function onAnimationReduceStateChange(callback: Callback<boolean>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;boolean&gt; | Yes | Callback function. Returns **true** if animation reduction mode is enabled;returns **false** otherwise. |

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

  build() {
    Column() {
    }
  }
}

```

