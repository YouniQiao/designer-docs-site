# preloadUIExtensionAbility

## preloadUIExtensionAbility

```TypeScript
function preloadUIExtensionAbility(want: Want): Promise<int>
```

预加载指定的[UIExtensionAbility](arkts-uiextensionability-c.md#UIExtensionAbility)并返回预加载UIExtensionAbility实例 的ID。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.PRELOAD_UI_EXTENSION_ABILITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动Ability的Want信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回预加载的  [UIExtensionAbility](arkts-uiextensionability-c.md#UIExtensionAbility)的ID，用于后续清除或管理操作。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000050 | Internal error. Possible causes: 1.Connect to system service failed;  2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.  4.Preload UIExtensionAbility timeout. |

**Example**

```TypeScript
import { abilityManager, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  const preloadWant: Want = {
    bundleName: 'com.example.application',
    abilityName: 'EntryBackupAbility',
    moduleName: 'entry',
    parameters: {
      'ability.want.params.uiExtensionType': 'sys/commonUI'
    }
  };

  abilityManager.preloadUIExtensionAbility(preloadWant)
    .then((preloadId: number) => {
      console.info(`preloadUIExtensionAbility success, preloadId: ${preloadId}`);
    })
    .catch((err: BusinessError) => {
      console.error(`preloadUIExtensionAbility fail, err: ${JSON.stringify(err)}`);
    });
} catch (err) {
  let code = (err as BusinessError).code;
  let message = (err as BusinessError).message;
  console.error(`preloadUIExtensionAbility failed, code is ${code}, message is ${message}`);
}

```

