# off

## off("formUninstall")

```TypeScript
function off(type: "formUninstall", callback?: Callback<string>): void
```

Unsubscribes from widget uninstall events. This API uses an asynchronous callback to return the result. > **NOTE** > > Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget > is automatically uninstalled.

**Since:** 9

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "formUninstall" | Yes | Event type. The value "formUninstall" indicates a widget uninstall event. |
| callback | Callback&lt;string> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## off('formOverflow')

```TypeScript
function off(type: 'formOverflow', callback?: Callback<formInfo.OverflowRequest>): void
```

Unsubscribes from the interactive widget animation request event. This API uses an asynchronous callback to return the result.

**Since:** 20

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'formOverflow' | Yes | Event callback. The supported event is 'formOverflow', indicating the  interactive widget animation request. |
| callback | Callback&lt;formInfo.OverflowRequest> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |

**Example**

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

**Since:** 20

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'changeSceneAnimationState' | Yes | Event type. The event 'changeSceneAnimationState' is triggered  when the interactive widget state is switched. |
| callback | Callback&lt;formInfo.ChangeSceneAnimationStateRequest> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |

**Example**

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

**Since:** 20

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'getFormRect' | Yes | Event callback type. The supported event is 'getFormRect', indicating  requesting widget position and dimension. |
| callback | formInfo.GetFormRectInfoCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |

**Example**

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

**Since:** 20

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'getLiveFormStatus' | Yes | Indicates event type. |
| callback | formInfo.GetLiveFormStatusCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |

