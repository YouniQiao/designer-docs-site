# off

## off('continueStateChange')

```TypeScript
function off(type: 'continueStateChange', callback?: Callback<ContinueCallbackInfo>): void
```

Unsubscribes from continuation state change events of the current mission.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_MISSIONS

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'continueStateChange' | 是 | Event type. The value 'continueStateChange' indicates the continuation state  change event of the current mission. |
| callback | Callback&lt;ContinueCallbackInfo> | 否 | Callback used for unsubscription. If the callback is unspecified  , all subscriptions to the specified event are canceled. [since 11] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**示例：**

```TypeScript
  import { distributedMissionManager } from '@kit.AbilityKit';

  try {
    distributedMissionManager.off('continueStateChange', (data) => {
      console.info("continueStateChange off:" + JSON.stringify(data));
    });
  } catch (err) {
    console.error("continueStateChange err: " + JSON.stringify(err));
  }

```

