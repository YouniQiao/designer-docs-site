# on

## on('prepareContinue')

```TypeScript
function on(type: 'prepareContinue', context: Context, callback: AsyncCallback<ContinueResultInfo>): void
```

Registers a callback to obtain the quick start result when an application is launched quickly. This API uses an asynchronous callback to return the result.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'prepareContinue' | 是 | The value is fixed at prepareContinue. |
| context | Context | 是 | Context of the ability. |
| callback | AsyncCallback&lt;ContinueResultInfo> | 是 | Callback used to return the result. If obtaining the quick start  result is successful, err is undefined, and ContinueResultInfo is the obtained quick startup result.  Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16300501 | the system ability work abnormally. |

**示例：**

```TypeScript
import { AbilityConstant, UIAbility, Want, continueManager } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG: string = '[MigrationAbility]';
const DOMAIN_NUMBER: number = 0xFF00;

export default class MigrationAbility extends UIAbility {
    storage : LocalStorage = new LocalStorage();

    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        hilog.info(DOMAIN_NUMBER, TAG, '%{public}s', 'Ability onCreate');

        // 1.已配置快速拉起功能，应用立即启动时触发应用生命周期回调
        if (launchParam.launchReason === AbilityConstant.LaunchReason.PREPARE_CONTINUATION) {
            // 注册快速拉起结果通知的回调函数
            try {
              continueManager.on("prepareContinue", this.context, (err, continueResultInfo) => {
                if (err.code != 0) {
                  console.error('register failed, cause: ' + JSON.stringify(err));
                  return;
                }
                console.info('register finished, ' + JSON.stringify(continueResultInfo));
              });
            } catch (e) {
              console.error('register failed, cause: ' + JSON.stringify(e));
            }
            // 若应用迁移数据较大，可在此处添加加载页面(页面中显示loading等)
            // 可处理应用自定义跳转、时序等问题
            // ...
        }
    }
}

```

