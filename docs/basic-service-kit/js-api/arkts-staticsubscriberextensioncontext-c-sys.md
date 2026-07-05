# StaticSubscriberExtensionContext

StaticSubscriberExtensionContext模块是StaticSubscriberExtensionAbility的上下文环境，继承自ExtensionContext。 StaticSubscriberExtensionContext模块提供StaticSubscriberExtensionAbility具有的接口和能力。

**Inheritance:** StaticSubscriberExtensionContextextends: ExtensionContext.

**Since:** 10

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { StaticSubscriberExtensionContext } from '@kit.BasicServicesKit';
```

## startAbility

```TypeScript
startAbility(want: Want, callback: AsyncCallback<void>): void
```

拉起一个静态订阅所属的同应用的Ability。使用callback异步回调。 使用规则： - 调用方应用位于后台时，使用该接口启动Ability需申请`ohos.permission.START_ABILITIES_FROM_BACKGROUND`权限 - 跨应用场景下，目标Ability的visible属性若配置为false，调用方应用需申请`ohos.permission.START_INVISIBLE_ABILITY`权限

**Since:** 10

**Required permissions:** 

 ohos.permission.START_ABILITIES_FROM_BACKGROUND

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动Ability的want信息。 |
| callback | AsyncCallback&lt;void> | Yes | callback形式返回启动结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |
| 16300003 | The target application is not the current application. |

**Example**

```TypeScript
import { commonEventManager, BusinessError } from '@kit.BasicServicesKit';
import { Want } from '@kit.AbilityKit';

let want: Want = {
  bundleName: "com.example.myapp",
  abilityName: "MyAbility"
};

class MyStaticSubscriberExtensionAbility extends StaticSubscriberExtensionAbility {
  onReceiveEvent(event: commonEventManager.CommonEventData) {
    console.info(`onReceiveEvent, event: ${JSON.stringify(event)}`);

    try {
      this.context.startAbility(want, (error: BusinessError) => {
        if (error) {
          // Process service logic errors.
          console.error(`startAbility failed, error.code: ${JSON.stringify(error.code)}, error.message: ${JSON.stringify(error.message)}.`);
          return;
        }
        // Carry out normal service processing.
        console.info('startAbility succeed');
      });
    } catch (paramError) {
      // Process input parameter errors.
      let code = (paramError as BusinessError).code;
      let message = (paramError as BusinessError).message;
      console.error(`startAbility failed, error.code: ${JSON.stringify(code)}, error.message: ${JSON.stringify(message)}.`);
    }
  }
}

```

## startAbility

```TypeScript
startAbility(want: Want): Promise<void>
```

拉起一个静态订阅所属的同应用的Ability。使用Promise异步回调。 使用规则： - 调用方应用位于后台时，使用该接口启动Ability需申请`ohos.permission.START_ABILITIES_FROM_BACKGROUND`权限 - 跨应用场景下，目标Ability的visible属性若配置为false，调用方应用需申请`ohos.permission.START_INVISIBLE_ABILITY`权限

**Since:** 10

**Required permissions:** 

 ohos.permission.START_ABILITIES_FROM_BACKGROUND

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动Ability的want信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise形式返回启动结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |
| 16300003 | The target application is not the current application. |

**Example**

```TypeScript
import { commonEventManager, BusinessError } from '@kit.BasicServicesKit';
import { Want } from '@kit.AbilityKit';

let want: Want = {
  bundleName: "com.example.myapp",
  abilityName: "MyAbility"
};

class MyStaticSubscriberExtensionAbility extends StaticSubscriberExtensionAbility {
  onReceiveEvent(event: commonEventManager.CommonEventData) {
    console.info(`onReceiveEvent, event: ${JSON.stringify(event)}`);
    try {
      this.context.startAbility(want)
        .then(() => {
          // Carry out normal service processing.
          console.info('startAbility succeed');
        })
        .catch((error: BusinessError) => {
          // Process service logic errors.
          console.error(`startAbility failed, error.code: ${JSON.stringify(error.code)}, error.message: ${JSON.stringify(error.message)}.`);
        });
    } catch (paramError) {
      // Process input parameter errors.
      let code = (paramError as BusinessError).code;
      let message = (paramError as BusinessError).message;
      console.error(`startAbility failed, error.code: ${JSON.stringify(code)}, error.message: ${JSON.stringify(message)}.`);
    }
  }
}

```

