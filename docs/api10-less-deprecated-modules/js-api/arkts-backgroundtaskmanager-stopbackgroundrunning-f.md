# stopBackgroundRunning

## stopBackgroundRunning

```TypeScript
function stopBackgroundRunning(context: Context, callback: AsyncCallback<void>): void
```

向系统申请取消长时任务，使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.stopBackgroundRunning(context:

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用运行的上下文。 FA模型的应用Context定义见[Context]./app/context。 Stage模型的应用Context定义见  [Context]./application/Context:Context。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，取消长时任务成功时，err为undefined，否则为错误对象。 |

**Example**

```TypeScript
import backgroundTaskManager from '@ohos.backgroundTaskManager';
import featureAbility from '@ohos.ability.featureAbility';
import { BusinessError } from '@ohos.base';

function callback(err: BusinessError, data: void) {
  if (err) {
    console.error("Operation stopBackgroundRunning failed Cause: " + err);
  } else {
    console.info("Operation stopBackgroundRunning succeeded");
  }
}

backgroundTaskManager.stopBackgroundRunning(featureAbility.getContext(), callback);



import UIAbility from '@ohos.app.ability.UIAbility';
import backgroundTaskManager from '@ohos.backgroundTaskManager';
import Want from '@ohos.app.ability.Want';
import AbilityConstant from '@ohos.app.ability.AbilityConstant';
import { BusinessError } from '@ohos.base';

function callback(err: BusinessError, data: void) {
  if (err) {
    console.error("Operation stopBackgroundRunning failed Cause: " + err);
  } else {
    console.info("Operation stopBackgroundRunning succeeded");
  }
}

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    backgroundTaskManager.stopBackgroundRunning(this.context, callback);
  }
};

```

## stopBackgroundRunning

```TypeScript
function stopBackgroundRunning(context: Context): Promise<void>
```

向系统申请取消长时任务，使用promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager.stopBackgroundRunning(context:

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | - 应用运行的上下文。 FA模型的应用Context定义见[Context]./app/context。 Stage模型的应用Context定义见  [Context]./application/Context:Context。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Example**

```TypeScript
import backgroundTaskManager from '@ohos.backgroundTaskManager';
import featureAbility from '@ohos.ability.featureAbility';
import { BusinessError } from '@ohos.base';

// Cancel a continuous task.
backgroundTaskManager.stopBackgroundRunning(featureAbility.getContext()).then(() => {
  console.info("Operation stopBackgroundRunning succeeded");
}).catch((err: BusinessError) => {
  console.error("Operation stopBackgroundRunning failed Cause: " + err);
});



import UIAbility from '@ohos.app.ability.UIAbility';
import backgroundTaskManager from '@ohos.backgroundTaskManager';
import Want from '@ohos.app.ability.Want';
import AbilityConstant from '@ohos.app.ability.AbilityConstant';
import { BusinessError } from '@ohos.base';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    // Cancel a continuous task.
    backgroundTaskManager.stopBackgroundRunning(this.context).then(() => {
      console.info("Operation stopBackgroundRunning succeeded");
    }).catch((err: BusinessError) => {
      console.error("Operation stopBackgroundRunning failed Cause: " + err);
    });
  }
};

```

