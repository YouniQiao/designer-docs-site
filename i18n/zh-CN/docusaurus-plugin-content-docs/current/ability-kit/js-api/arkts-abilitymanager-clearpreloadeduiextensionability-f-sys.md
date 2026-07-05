# clearPreloadedUIExtensionAbility

## clearPreloadedUIExtensionAbility

```TypeScript
function clearPreloadedUIExtensionAbility(preloadId: int): Promise<void>
```

清除指定的[UIExtensionAbility](arkts-uiextensionability-c.md#UIExtensionAbility)实例。使用Promise异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.PRELOAD_UI_EXTENSION_ABILITY

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| preloadId | int | 是 | 预加载[UIExtensionAbility](arkts-uiextensionability-c.md#UIExtensionAbility)实例的ID。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 16000003 | The specified ID does not exist. Possible causes:  1.The specified ID is incorrect; 2.The preloaded UIExtensionAbility has been loaded;  3.The preloaded UIExtensionAbility has been destroyed; |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed;  2.Send restart message to system service failed; 3.System service failed to communicate with dependency module. |

**示例：**

```TypeScript
import { abilityManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // 通过preloadUIExtensionAbility接口预加载后返回的ID
  let preloadId: number = 1001;
  abilityManager.clearPreloadedUIExtensionAbility(preloadId)
    .then(() => {
      console.info('clearPreloadedUIExtensionAbility success.');
    })
    .catch((err: BusinessError) => {
      console.error(`clearPreloadedUIExtensionAbility fail, err: ${JSON.stringify(err)}`);
    });
} catch (err) {
  let code = (err as BusinessError).code;
  let message = (err as BusinessError).message;
  console.error(`clearPreloadedUIExtensionAbility failed, code is ${code}, message is ${message}`);
}

```

