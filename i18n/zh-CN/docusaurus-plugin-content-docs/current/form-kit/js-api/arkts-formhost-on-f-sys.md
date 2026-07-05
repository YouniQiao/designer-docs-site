# on

## on("formUninstall")

```TypeScript
function on(type: "formUninstall", callback: Callback<string>): void
```

Subscribes to widget uninstall events. This API uses an asynchronous callback to return the result. > **NOTE** > > Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget > is automatically uninstalled.

**起始版本：** 9

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | "formUninstall" | 是 | Event type. The value "formUninstall" indicates a widget uninstall event. |
| callback | Callback&lt;string> | 是 | Callback used to return the widget ID. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## on('formOverflow')

```TypeScript
function on(type: 'formOverflow', callback: Callback<formInfo.OverflowRequest>): void
```

Subscribes to the interactive widget animation request event. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'formOverflow' | 是 | Event callback. The supported event is 'formOverflow', indicating the  interactive widget animation request. |
| callback | Callback&lt;formInfo.OverflowRequest> | 是 | Callback used by the widget host to process the animation  request. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |

**示例：**

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

## on('changeSceneAnimationState')

```TypeScript
function on(type: 'changeSceneAnimationState', 
    callback: Callback<formInfo.ChangeSceneAnimationStateRequest>): void
```

Subscribes to the event of switching the interactive widget state. An interactive widget can be in the active or inactive state. In the inactive state, the interactive widget is the same as a common widget. In the active state, the interactive widget can start the **LiveFormExtensionAbility** process developed by the widget host to implement interactive widget animations. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'changeSceneAnimationState' | 是 | Event type. The event 'changeSceneAnimationState' is triggered  when the interactive widget state is switched. |
| callback | Callback&lt;formInfo.ChangeSceneAnimationStateRequest> | 是 | Callback function, which is used by the  widget host to process the state switching request. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |

**示例：**

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

## on('getFormRect')

```TypeScript
function on(type: 'getFormRect', callback: formInfo.GetFormRectInfoCallback): void
```

Subscribes to the event of requesting widget position and dimension. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'getFormRect' | 是 | Event callback type. The supported event is 'getFormRect', indicating  requesting widget position and dimension. |
| callback | formInfo.GetFormRectInfoCallback | 是 | Callback function used by the widget host to process the  request and return the position and dimension of the widget relative to the upper-left corner of the screen.  The unit is vp. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |

**示例：**

```TypeScript
import { formHost, formInfo } from '@kit.FormKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  formHost.on('getFormRect', (formId: string): Promise<formInfo.Rect> => {
    // 卡片使用方需要对查询请求进行处理，计算并返回卡片尺寸、位置信息
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

## on('getLiveFormStatus')

```TypeScript
function on(type: 'getLiveFormStatus',  callback: formInfo.GetLiveFormStatusCallback): void
```

Listens to the event of get live form status.

**起始版本：** 20

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'getLiveFormStatus' | 是 | Indicates event type. |
| callback | formInfo.GetLiveFormStatusCallback | 是 | The callback of get live form status. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |

