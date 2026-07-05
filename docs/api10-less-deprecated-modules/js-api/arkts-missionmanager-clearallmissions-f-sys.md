# clearAllMissions

## clearAllMissions

```TypeScript
function clearAllMissions(callback: AsyncCallback<void>): void
```

清理所有未锁定的任务。使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.missionManager/missionManager#clearAllMissions

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当清理所有未锁定的任务成功，err为undefined，否则为错误对象。 |

**Example**

```TypeScript
import missionManager from '@ohos.application.missionManager'

try {
  missionManager.clearAllMissions(err => {
    if (err) {
      console.error('clearAllMissions failed: ${err.message}');
    } else {
      console.info('clearAllMissions successfully.');
    }
  });
} catch (err) {
  console.error('clearAllMissions failed: ${err.message}');
}

```

## clearAllMissions

```TypeScript
function clearAllMissions(): Promise<void>
```

清理所有未锁定的任务。使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.missionManager/missionManager#clearAllMissions

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Example**

```TypeScript
import missionManager from '@ohos.application.missionManager';
import { BusinessError } from '@ohos.base';

try {
  missionManager.clearAllMissions().then((data) => {
    console.info(`clearAllMissions successfully. Data: ${JSON.stringify(data)}`);
  }).catch((err: BusinessError) => {
    console.error(`clearAllMissions failed: ${err.message}`);
  });
} catch (err) {
  console.error(`clearAllMissions failed: ${err.message}`);
}

```

