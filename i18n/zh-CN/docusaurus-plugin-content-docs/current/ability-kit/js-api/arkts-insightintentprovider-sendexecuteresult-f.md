# sendExecuteResult

## sendExecuteResult

```TypeScript
function sendExecuteResult(instanceId: int, result: insightIntent.ExecuteResult): Promise<void>
```

Send execute result.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| instanceId | int | 是 | The insight intent instance ID.  It is from InsightIntentExecutor.context.instanceId. |
| result | insightIntent.ExecuteResult | 是 | The result of insight intent execution. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000003 | The specified ID does not exist. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed;  2.Send restart message to system service failed; 3.System service failed to communicate with dependency module. |

**示例：**

```TypeScript
import { InsightIntentExecutor, insightIntent } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class InsightIntentExecutorUI extends InsightIntentExecutor {
  onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>,
    pageLoader: window.WindowStage): insightIntent.ExecuteResult {
    hilog.info(0x0000, 'testTag', 'onExecuteInUIAbilityForegroundMode %{public}s', name);
    let result: insightIntent.ExecuteResult;
    result = {
      code: 0,
      result: {
        message: 'Unsupported insight intent.',
      },
    };
    try {
      // 设置意图执行结果的返回形式为延迟返回
      this.context.setReturnModeForUIAbilityForeground(insightIntent.ReturnMode.FUNCTION);
    } catch (error) {
      let code = (error as BusinessError).code;
      let msg = (error as BusinessError).message;
      console.error(`testTag setReturnModeForUIExtensionAbility fail, error code: ${code}, error msg: ${msg}.`);
    }
    // 将意图实例的id通过localStorage传入目标页面中
    let localStorageData: Record<string, number> = {
      'insightId': this.context.instanceId,
    };
    let storage: LocalStorage = new LocalStorage(localStorageData);
    // 通过pageLoader加载页面
    pageLoader.loadContent('pages/UIAbilityIndex', storage, (err, data) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));
      } else {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Succeeded in loading the content');
      }
    });
    return result;
  }
}


import { BusinessError } from '@kit.BasicServicesKit';
import { insightIntent, insightIntentProvider } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  storage: LocalStorage | undefined = this.getUIContext().getSharedLocalStorage();
  insightId: number | undefined = this.storage?.get<number>('insightId');

  build() {
    Column() {
      // 通过sendExecuteResult接口主动返回意图执行结果
      Button('insightIntentProvider sendExecuteResult')
        .onClick(() => {
          try {
            let result: insightIntent.ExecuteResult;
            result = {
              code: 0,
              result: {
                message: 'Unsupported insight intent.',
              },
            };
            insightIntentProvider.sendExecuteResult(this.insightId, result)
              .then(() => {
                console.info('testTag setExecuteResult success');
              })
              .catch((error: BusinessError) => {
                console.error(`testTag setExecuteResult fail1, error code: ${error.code}, error msg: ${error.message}.`);
              });
          } catch (e) {
            let code = (e as BusinessError).code;
            let msg = (e as BusinessError).message;
            console.error(`testTag setExecuteResult fail2, error code: ${code}, error msg: ${msg}`);
          }
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

