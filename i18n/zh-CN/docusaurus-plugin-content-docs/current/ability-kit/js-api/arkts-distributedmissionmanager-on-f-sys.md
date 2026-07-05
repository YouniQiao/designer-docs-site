# on

## on('continueStateChange')

```TypeScript
function on(type: 'continueStateChange', callback: Callback<ContinueCallbackInfo>): void
```

Subscribes to continuation state change events of the current mission.

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
| callback | Callback&lt;ContinueCallbackInfo> | 是 | Callback used to return the continuation state and information of  the current mission. [since 11] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**示例：**

```TypeScript
  import { distributedMissionManager } from '@kit.AbilityKit';

  try {
    distributedMissionManager.on('continueStateChange', (data) => {
      console.info("continueStateChange on:" + JSON.stringify(data));
    });
  } catch (error) {
    console.error("continueStateChange err: " + JSON.stringify(error));
  }

```

