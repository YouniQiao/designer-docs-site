# unbind

## unbind

```TypeScript
function unbind(floatViewController: FloatViewController,
    floatingBallController: floatingBall.FloatingBallController): Promise<void>
```

解绑标准悬浮窗和闪控球。需要在[标准悬浮窗控制器]floatView.FloatViewController和 [闪控球控制器](arkts-floatingball-floatingballcontroller-i.md#FloatingBallController)均停止后才可解绑。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| floatViewController | FloatViewController | Yes | 标准悬浮窗控制器。 |
| floatingBallController | floatingBall.FloatingBallController | Yes | 闪控球控制器。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported on this device. Possible cause:  Call api on unsupported device. |
| 1300025 | The floating ball state does not support this operation. Possible cause:  1. The floating ball has started but not stopped yet.  2. The floatingBallController has not been bound. |
| 1300031 | The floatView state does not support this operation. Possible cause:  1. The float view has started but not stopped yet.  2. The floatViewController has not been bound.  3. The floatViewController and the floatingBallController are not bound together. |

**Example**

```TypeScript
// Entry.ets
import { BusinessError } from '@kit.BasicServicesKit';
import { floatingBall, floatView } from '@kit.ArkUI';

@Entry
@Component
struct Index {
  private floatingBallController: floatingBall.FloatingBallController | undefined = undefined;
  private floatViewController: floatView.FloatViewController | undefined = undefined;
  // Create a controller.
  // ...
  public unbindController(): void {
    try {
      // Use the float view controller and floating ball controller passed during the binding.
      if (this.floatViewController && this.floatingBallController) {
        // Unbind the float view and the floating ball.
        floatView.unbind(this.floatViewController!, this.floatingBallController!).then(() => {
          console.info('Succeeded in unbinding float view and floating ball.');
        }).catch((err: BusinessError): void => {
          console.error(`Failed to unbind float view and floating ball. Cause:${err.code}, message:${err.message}`);
        });
      }
    } catch (e) {
      console.error(`Failed to unbind float view and floating ball. Cause:${e.code}, message:${e.message}`);
    }
  }
}

```

