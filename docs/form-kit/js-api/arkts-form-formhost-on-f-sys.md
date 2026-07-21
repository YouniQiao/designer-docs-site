# on (System API)

## Modules to Import

```TypeScript
import { formHost } from '@kit.FormKit';
```

<a id="on"></a>
## on("formUninstall")

```TypeScript
function on(type: "formUninstall", callback: Callback<string>): void
```

Subscribes to widget uninstall events. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget  
> is automatically uninstalled.

**Since:** 9

<!--Device-formHost-function on(type: "formUninstall", callback: Callback<string>): void--><!--Device-formHost-function on(type: "formUninstall", callback: Callback<string>): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "formUninstall" | Yes | Event type. The value **"formUninstall"** indicates a widget uninstall event. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;string&gt; | Yes | Callback used to return the widget ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |


<a id="on-1"></a>
## on('formOverflow')

```TypeScript
function on(type: 'formOverflow', callback: Callback<formInfo.OverflowRequest>): void
```

Subscribes to the interactive widget animation request event. This API uses an asynchronous callback to return the result.

**Since:** 20

<!--Device-formHost-function on(type: 'formOverflow', callback: Callback<formInfo.OverflowRequest>): void--><!--Device-formHost-function on(type: 'formOverflow', callback: Callback<formInfo.OverflowRequest>): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'formOverflow' | Yes | Event callback. The supported event is **'formOverflow'**, indicating the interactive widget animation request. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;formInfo.OverflowRequest&gt; | Yes | Callback used by the widget host to process the animation request. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |

**Example**

```TypeScript
import { formHost, formInfo } from '@kit.FormKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  formHost.on('formOverflow', (request: formInfo.OverflowRequest) => {
    console.info(`formHost on formOverflow, formId is ${request.formId}`);
  });
} catch (error) {
  console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`);
}

```


<a id="on-2"></a>
## on('changeSceneAnimationState')

```TypeScript
function on(type: 'changeSceneAnimationState', 
    callback: Callback<formInfo.ChangeSceneAnimationStateRequest>): void
```

Subscribes to the event of switching the interactive widget state. An interactive widget can be in the active or inactive state. In the inactive state, the interactive widget is the same as a common widget. In the active state,the interactive widget can start the **LiveFormExtensionAbility** process developed by the widget host to implement interactive widget animations. This API uses an asynchronous callback to return the result.

**Since:** 20

<!--Device-formHost-function on(type: 'changeSceneAnimationState', 
    callback: Callback<formInfo.ChangeSceneAnimationStateRequest>): void--><!--Device-formHost-function on(type: 'changeSceneAnimationState', 
    callback: Callback<formInfo.ChangeSceneAnimationStateRequest>): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'changeSceneAnimationState' | Yes | Event type. The event **'changeSceneAnimationState'** is triggered when the interactive widget state is switched. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;formInfo.ChangeSceneAnimationStateRequest&gt; | Yes | Callback function, which is used by the widget host to process the state switching request. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |

**Example**

```TypeScript
import { formHost, formInfo } from '@kit.FormKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  formHost.on('changeSceneAnimationState', (request: formInfo.ChangeSceneAnimationStateRequest): void => {
    console.info(`formHost on changeSceneAnimationState, formId is ${request.formId}`);
  });
} catch (error) {
  console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`);
}

```


<a id="on-3"></a>
## on('getFormRect')

```TypeScript
function on(type: 'getFormRect', callback: formInfo.GetFormRectInfoCallback): void
```

Subscribes to the event of requesting widget position and dimension. This API uses an asynchronous callback to return the result.

**Since:** 20

<!--Device-formHost-function on(type: 'getFormRect', callback: formInfo.GetFormRectInfoCallback): void--><!--Device-formHost-function on(type: 'getFormRect', callback: formInfo.GetFormRectInfoCallback): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'getFormRect' | Yes | Event callback type. The supported event is **'getFormRect'**, indicating requesting widget position and dimension. |
| callback | formInfo.GetFormRectInfoCallback | Yes | Callback function used by the widget host to process the request and return the position and dimension of the widget relative to the upper-left corner of the screen.The unit is vp. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |

**Example**

```TypeScript
import { formHost, formInfo } from '@kit.FormKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  formHost.on('getFormRect', (formId: string): Promise<formInfo.Rect> => {
    // The widget host needs to process the request, and calculate and return the widget dimension and position information.
    return new Promise<formInfo.Rect>((resolve: Function) => {
      console.info(`formHost on getFormRect, formId is ${formId}`);
      let formRect: formInfo.Rect = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      };
      resolve(formRect);
    })
  });
} catch (error) {
  console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`);
}

```


<a id="on-4"></a>
## on('getLiveFormStatus')

```TypeScript
function on(type: 'getLiveFormStatus',  callback: formInfo.GetLiveFormStatusCallback): void
```

Listens to the event of get live form status.

**Since:** 20

<!--Device-formHost-function on(type: 'getLiveFormStatus',  callback: formInfo.GetLiveFormStatusCallback): void--><!--Device-formHost-function on(type: 'getLiveFormStatus',  callback: formInfo.GetLiveFormStatusCallback): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'getLiveFormStatus' | Yes | Indicates event type. |
| callback | formInfo.GetLiveFormStatusCallback | Yes | The callback of get live form status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |

