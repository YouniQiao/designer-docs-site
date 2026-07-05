# shiftAppWindowTouchEvent

## shiftAppWindowTouchEvent

```TypeScript
function shiftAppWindowTouchEvent(sourceWindowId: int, targetWindowId: int, fingerId: int): Promise<void>
```

主窗口和子窗口可正常调用，用于将触屏输入事件从源窗口转移到目标窗口。使用Promise异步回调。 源窗口仅在[onTouch](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#ontouch)事件（事件类型必须为 TouchType.Down）的回调方法中调用此接口才会有触屏输入事件转移效果，成功调用此接口后，系统会向源窗口补发触屏抬起（TouchType.Up）事件，并且向目标窗口补发触屏按下（TouchType.Down）事件。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sourceWindowId | int | Yes | 源窗口id。推荐使用  [getWindowProperties()](arkts-window-window-i.md#getWindowProperties)方法获取窗口id属性。该参数应为大于0的整数，小于等于0时会返回错误  码1300016。 |
| targetWindowId | int | Yes | 目标窗口id。推荐使用  [getWindowProperties()](arkts-window-window-i.md#getWindowProperties)方法获取窗口id属性。该参数应为大于0的整数，小于等于0时会返回错误  码1300016。 |
| fingerId | int | Yes | 触屏事件的手指唯一标识符。推荐使用  [TouchEvent](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#touchevent对象说明)对象中touches属性获取  id。该参数应为大于等于0的整数，小于0时会返回错误码1300016。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.  Function shiftAppWindowTouchEvent can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. SourceWindow cannot find: not created or not belong to current process;  2. TargetWindow cannot find: not created or not belong to current process;  3. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: 1. Invalid window type. Only main windows and subwindows are supported;  2. The two windows are not from the same process. |
| 1300016 | Parameter error. Possible cause: 1. Invalid parameter range. |

**Example**

```TypeScript
// ets/pages/Index.ets
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
struct Index {
  build() {
    Row() {
      Column() {
        Blank('160')
          .color(Color.Blue)
          .onTouch((event: TouchEvent) => {
            // The source window touch event type must be TouchType.Down.
            if (event.type === TouchType.Down) {
              try {
                let sourceWindowId = 1;
                let targetWindowId = 2;
                let promise = window.shiftAppWindowTouchEvent(sourceWindowId, targetWindowId, event.touches[0].id);
                promise.then(() => {
                  console.info(`Succeeded in shifting app window touch event`);
                }).catch((err: BusinessError) => {
                  console.error(`Failed to shift app window touch event. Cause code: ${err.code}, message: ${err.message}`);
                });
              } catch (exception) {
                console.error(`Failed to shift app touch event. Cause code: ${exception.code}, message: ${exception.message}`);
              }
            }
          })
      }.width('100%')
    }.height('100%').width('100%')
  }
}

```

