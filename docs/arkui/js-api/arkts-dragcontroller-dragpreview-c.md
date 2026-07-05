# DragPreview

拖拽背板的对象，在OnDrop和OnDragEnd回调中使用不生效。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { dragController } from '@kit.ArkUI';
```

## animate

```TypeScript
animate(options: AnimationOptions, handler: () =>void): void
```

设置背板蒙版颜色变化动效，在OnDrop和OnDragEnd回调中使用不生效，仅支持通过 [getDragPreview()](arkts-dragcontroller-c.md#getDragPreview)方法获取到的 对象上使用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | AnimationOptions | Yes | 动效参数。 |
| handler | () =>void | Yes | 用于修改背板蒙版颜色等属性的回调方法。 |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window, UIContext } from '@kit.ArkUI';

let uiContext: UIContext;
let localStorage: LocalStorage = new LocalStorage('uiContext');

export default class EntryAbility extends UIAbility {
  storage: LocalStorage = localStorage;

  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
  }

  onDestroy(): void {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');

    windowStage.loadContent('pages/Index', this.storage, (err, data) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s',
          `Code is ${err.code}, message is ${err.message}`);
        return;
      }
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s',
        `Code is ${err.code}, message is ${err.message}`);
      windowStage.getMainWindow((err, data) => {
        if (err.code) {
          hilog.error(0x0000, `Failed to obtain the main window. Cause: ${err.message}`, '');
          return;
        }
        uiContext = data.getUIContext();
        this.storage.setOrCreate<UIContext>('uiContext', uiContext);
      })
    });
  }
}



import { unifiedDataChannel } from '@kit.ArkData';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { dragController, curves, promptAction, UIContext } from '@kit.ArkUI';
import { image } from '@kit.ImageKit';
import { BusinessError } from '@kit.BasicServicesKit';

class DragInfo {
  event: DragEvent | undefined = undefined;
  extraParams: string = '';
}

@Entry()
@Component
struct DragControllerPage {
  @State pixmap: image.PixelMap | null = null;
  storages = this.getUIContext().getSharedLocalStorage();

  @Builder
  DraggingBuilder() {
    Column() {
      Text("DraggingBuilder")
        .fontColor(Color.White)
        .fontSize(12)
    }
    .width(100)
    .height(100)
    .backgroundColor(Color.Blue)
  }

  @Builder
  PixmapBuilder() {
    Column() {
      Text("PixmapBuilder")
    }
    .width(100)
    .height(100)
    .backgroundColor(Color.Blue)
  }

  build() {
    Column() {
      Button('Drop Here')
        .margin(10)
        .onDragEnter(() => {
          try {
            let uiContext: UIContext = this.storages?.get<UIContext>('uiContext') as UIContext;
            let previewObj: dragController.DragPreview = uiContext.getDragController().getDragPreview();
            let foregroundColor: ResourceColor = Color.Green;

            let previewAnimation: dragController.AnimationOptions = {
              curve: curves.cubicBezierCurve(0.2, 0, 0, 1),
            }
            previewObj.animate(previewAnimation, () => {
              previewObj.setForegroundColor(foregroundColor);
            });
          } catch (error) {
            let msg = (error as BusinessError).message;
            let code = (error as BusinessError).code;
            hilog.error(0x0000, `show error code is ${code}, message is ${msg}`, '');
          }
        })
        .onDrop(() => {
          this.getUIContext().getPromptAction().showToast({ duration: 100, message: 'Drag Success', bottom: 400 })
        })
      Button('Drag').onTouch((event?: TouchEvent) => {
        if (event) {
          if (event.type == TouchType.Down) {
            let text = new unifiedDataChannel.Text()
            let unifiedData = new unifiedDataChannel.UnifiedData(text)
            let dragInfo: dragController.DragInfo = {
              pointerId: 0,
              data: unifiedData,
              extraParams: ''
            }
            let eve: DragInfo = new DragInfo();
            this.getUIContext()
              .getDragController()
              .executeDrag(() => { // You are advised to use this.getUIContext().getDragController().executeDrag().
                this.DraggingBuilder()
              }, dragInfo, (err, eve) => {
                hilog.info(0x0000, `${JSON.stringify(err)}`, '')
                if (eve && eve.event) {
                  if (eve.event.getResult() == DragResult.DRAG_SUCCESSFUL) {
                    hilog.info(0x0000, 'success', '');
                  } else if (eve.event.getResult() == DragResult.DRAG_FAILED) {
                    hilog.info(0x0000, 'failed', '');
                  }
                }
              })
          }
        }
      }).margin({ top: 100 })
    }
    .width('100%')
    .height('100%')
  }
}

```

## setForegroundColor

```TypeScript
setForegroundColor(color: ResourceColor): void
```

设置背板蒙版颜色，在OnDrop和OnDragEnd回调中使用不生效，仅支持通过 [getDragPreview()](arkts-dragcontroller-c.md#getDragPreview)方法获取到的 对象上使用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | ResourceColor | Yes | 背板蒙版颜色。 |

