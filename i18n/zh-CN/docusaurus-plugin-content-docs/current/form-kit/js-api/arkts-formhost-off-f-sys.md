# off

## off("formUninstall")

```TypeScript
function off(type: "formUninstall", callback?: Callback<string>): void
```

Unsubscribes from widget uninstall events. This API uses an asynchronous callback to return the result. > **NOTE** > > Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget > is automatically uninstalled.

**起始版本：** 9

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | "formUninstall" | 是 | Event type. The value "formUninstall" indicates a widget uninstall event. |
| callback | Callback&lt;string> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## off('formOverflow')

```TypeScript
function off(type: 'formOverflow', callback?: Callback<formInfo.OverflowRequest>): void
```

Unsubscribes from the interactive widget animation request event. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'formOverflow' | 是 | Event callback. The supported event is 'formOverflow', indicating the  interactive widget animation request. |
| callback | Callback&lt;formInfo.OverflowRequest> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |

**示例：**

```TypeScript
import { formHost, formInfo } from '@kit.FormKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  formHost.off('formOverflow', (request: formInfo.OverflowRequest) => {
    console.info(`formHost off formOverflow, formId is ${request.formId}`);
  });
} catch (error) {
  console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`);
}   

```

## off('changeSceneAnimationState')

```TypeScript
function off(type: 'changeSceneAnimationState', 
    callback?: Callback<formInfo.ChangeSceneAnimationStateRequest>): void
```

Unsubscribes from the event of switching the interactive widget state. An interactive widget can be in the active or inactive state. In the inactive state, the interactive widget is the same as a common widget. In the active state, the interactive widget can start the **LiveFormExtensionAbility** process developed by the widget host to implement interactive widget animations. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'changeSceneAnimationState' | 是 | Event type. The event 'changeSceneAnimationState' is triggered  when the interactive widget state is switched. |
| callback | Callback&lt;formInfo.ChangeSceneAnimationStateRequest> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |

**示例：**

```TypeScript
import { formHost, formInfo } from '@kit.FormKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  formHost.off('changeSceneAnimationState', (request: formInfo.ChangeSceneAnimationStateRequest): void => {
    console.info(`formHost off changeSceneAnimationState, formId is ${request.formId}`);
  });
} catch (error) {
  console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`);
}

```

## off('getFormRect')

```TypeScript
function off(type: 'getFormRect', callback?: formInfo.GetFormRectInfoCallback): void
```

Unsubscribes from the event of requesting widget position and dimension. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'getFormRect' | 是 | Event callback type. The supported event is 'getFormRect', indicating  requesting widget position and dimension. |
| callback | formInfo.GetFormRectInfoCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |

**示例：**

```TypeScript
import { formHost } from '@kit.FormKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  formHost.off('getFormRect');
} catch (error) {
  console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`);
}

```

## off('getLiveFormStatus')

```TypeScript
function off(type: 'getLiveFormStatus', 
    callback?: formInfo.GetLiveFormStatusCallback): void
```

Cancels Listening to the event of get live form status.

**起始版本：** 20

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'getLiveFormStatus' | 是 | Indicates event type. |
| callback | formInfo.GetLiveFormStatusCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |

