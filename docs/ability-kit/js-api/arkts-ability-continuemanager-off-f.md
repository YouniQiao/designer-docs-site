# off

## Modules to Import

```TypeScript
import { continueManager } from '@kit.AbilityKit';
```

## off('prepareContinue')

```TypeScript
function off(type: 'prepareContinue', context: Context, callback?: AsyncCallback<ContinueResultInfo>): void
```

Unregisters the callback used to obtain the quick start result when an application is launched quickly. This API uses an asynchronous callback to return the result.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-continueManager-function off(type: 'prepareContinue', context: Context, callback?: AsyncCallback<ContinueResultInfo>): void--><!--Device-continueManager-function off(type: 'prepareContinue', context: Context, callback?: AsyncCallback<ContinueResultInfo>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'prepareContinue' | Yes | The value is fixed at **prepareContinue**. |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Context of the ability. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<ContinueResultInfo> | No | Callback used to return the result. If the callback is unregistered, **err** is undefined, and **ContinueResultInfo** is the callback unregistration result. Otherwise,**err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16300501](../errorcode-DistributedSchedule.md#16300501-the-system-ability-works-abnormally) | the system ability work abnormally. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want, continueManager } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG: string = '[MigrationAbility]';
const DOMAIN_NUMBER: number = 0xFF00;

export default class MigrationAbility extends UIAbility {
    storage : LocalStorage = new LocalStorage();

    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        hilog.info(DOMAIN_NUMBER, TAG, '%{public}s', 'Ability onCreate');

        // 1. Quick start is configured. Trigger the lifecycle callback when the application is launched immediately.
        if (launchParam.launchReason === AbilityConstant.LaunchReason.PREPARE_CONTINUATION) {
            // Unregister the callback used to obtain the quick start result.
            try {
              continueManager.off("prepareContinue", this.context, (err, continueResultInfo) => {
                if (err.code != 0) {
                  console.error('unregister failed, cause: ' + JSON.stringify(err));
                  return;
                }
                console.info('unregister finished, ' + JSON.stringify(continueResultInfo));
              });
            } catch (e) {
              console.error('unregister failed, cause: ' + JSON.stringify(e));
            }
            // If the application data to migrate is large, add a loading screen here (for example, displaying "loading" on the screen).
            // Handle issues related to custom redirection and timing.
            // ...
        }
    }
}

```

