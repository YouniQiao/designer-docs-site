# requestAutoSave

## Modules to Import

```TypeScript
import { autoFillManager } from '@kit.AbilityKit';
```

<a id="requestautosave"></a>
## requestAutoSave

```TypeScript
export function requestAutoSave(context: UIContext, callback?: AutoSaveCallback): void
```

Requests to automatically save the widget data. This API uses an asynchronous callback to return the result.If the current widget does not support widget switching, you can call this API to save historical widget input data. The callback is triggered when the auto-save request is complete.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-autoFillManager-export function requestAutoSave(context: UIContext, callback?: AutoSaveCallback): void--><!--Device-autoFillManager-export function requestAutoSave(context: UIContext, callback?: AutoSaveCallback): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [UIContext](../../apis-arkui/arkts-components/arkts-arkui-uicontext-t.md) | Yes | UI context in which the auto-save operation will be performed. |
| callback | [AutoSaveCallback](arkts-ability-autofillmanager-autosavecallback-i.md) | No | Implements callbacks triggered when auto-save is complete. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes: 1. Get instance id failed;<br>2. Parse instance id failed; 3. The second parameter is not of type callback. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

**Example**

```TypeScript
// EntryAbility.ets
import { UIAbility, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window, UIContext } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage): void {
    // Main window is created. Set a main page for this ability.
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');
    let localStorageData: Record<string, string | common.UIAbilityContext> = {
      'message': "AutoFill Page",
      'context': this.context,
    };
    let storage = new LocalStorage(localStorageData);
    windowStage.loadContent('pages/Index', storage, (err, data) => {
      if (err && err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      // Obtain the main window.
      windowStage.getMainWindow((err: BusinessError, data: window.Window) => {
        let errCode: number = err?.code;
        if (errCode) {
          console.error('Failed to obtain the main window. Cause: ' + JSON.stringify(err));
          return;
        }
        console.info('Succeeded in obtaining the main window. Data: ' + JSON.stringify(data));
        // get UIContext instance.
        let uiContext: UIContext = windowStage.getMainWindowSync().getUIContext();
        PersistentStorage.persistProp("uiContext", uiContext);
      })
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');
    });
  }
}

```

```TypeScript
// Index.ets
import { autoFillManager } from '@kit.AbilityKit';
import { UIContext } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    Row() {
      Column() {
        Text('Hello World')
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
      }

      Button('requestAutoSave')
        .onClick(() => {
          let uiContext = AppStorage.get<UIContext>("uiContext");
          console.info("uiContext: ", JSON.stringify(uiContext));
          try {
            // Initiate an auto-save request.
            autoFillManager.requestAutoSave(uiContext, {
              onSuccess: () => {
                console.info(`save request on success.`);
              },
              onFailure: () => {
                console.error(`save request on failure.`);
              }
            });
          } catch (error) {
            console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`);
          }
        })
        .width('100%')
    }
    .height('100%')
  }
}

```


<a id="requestautosave-1"></a>
## requestAutoSave

```TypeScript
export function requestAutoSave(context: UIContext, request: SaveRequest, callback?: AutoSaveCallback): void
```

Trigger an auto save request.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-autoFillManager-export function requestAutoSave(context: UIContext, request: SaveRequest, callback?: AutoSaveCallback): void--><!--Device-autoFillManager-export function requestAutoSave(context: UIContext, request: SaveRequest, callback?: AutoSaveCallback): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [UIContext](../../apis-arkui/arkts-components/arkts-arkui-uicontext-t.md) | Yes | Indicates the ui context where the save operation will be performed. |
| request | [SaveRequest](arkts-ability-autofillrequest-saverequest-i-sys.md) | Yes | Indicates the struct of automatic save request. |
| callback | [AutoSaveCallback](arkts-ability-autofillmanager-autosavecallback-i.md) | No | Indicates the callback that used to receive the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

