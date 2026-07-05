# notifyDebugAssertResult

## notifyDebugAssertResult

```TypeScript
function notifyDebugAssertResult(sessionId: string, status: UserStatus): Promise<void>
```

将断言调试结果通知应用程序。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.NOTIFY_DEBUG_ASSERT_RESULT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | string | Yes | 指示AssertFault的请求ID。 |
| status | UserStatus | Yes | 用户的操作状态。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { abilityManager, UIExtensionAbility, wantConstant, Want, UIExtensionContentSession } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class UiExtAbility extends UIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    let sessionId: string = '';
    if (want.parameters) {
      sessionId = want.parameters[wantConstant.Params.ASSERT_FAULT_SESSION_ID] as string;
    }
    let status = abilityManager.UserStatus.ASSERT_TERMINATE;
    abilityManager.notifyDebugAssertResult(sessionId, status).then(() => {
      console.info('notifyDebugAssertResult success.');
    }).catch((err: BusinessError) => {
      console.error(`notifyDebugAssertResult failed, error: ${JSON.stringify(err)}`);
    });
  }
}

```

