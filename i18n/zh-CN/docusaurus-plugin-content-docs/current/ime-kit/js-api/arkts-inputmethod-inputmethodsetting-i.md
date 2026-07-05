# InputMethodSetting

In the following API examples, you must first use [getSetting](arkts-inputmethod-getsetting-f.md#getSetting-1) to obtain an **InputMethodSetting** instance, and then call the APIs using the obtained instance.

**起始版本：** 8

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { inputMethod } from '@kit.IMEKit';
```

## displayOptionalInputMethod

```TypeScript
displayOptionalInputMethod(callback: AsyncCallback<void>): void
```

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.inputMethodList/InputMethodListDialog

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | the callback of displayOptionalInputMethod. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getSetting().displayOptionalInputMethod((err: BusinessError) => {
  if (err) {
    console.error(`Failed to displayOptionalInputMethod, code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in displaying optionalInputMethod.');
});

```

## displayOptionalInputMethod

```TypeScript
displayOptionalInputMethod(): Promise<void>
```

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.inputMethodList/InputMethodListDialog

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getSetting().displayOptionalInputMethod().then(() => {
  console.info('Succeeded in displaying optionalInputMethod.');
}).catch((err: BusinessError) => {
  console.error(`Failed to displayOptionalInputMethod, code: ${err.code}, message: ${err.message}`);
})

```

## enableInputMethod

```TypeScript
enableInputMethod(bundleName: string, extensionName: string, enabledState: EnabledState): Promise<void>
```

Enables or disables an input method. This API uses a promise to return the result.

**起始版本：** 20

**需要权限：** 

 ohos.permission.CONNECT_IME_ABILITY

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | Bundle name of the input method. |
| extensionName | string | 是 | Extension name of the input method. |
| enabledState | EnabledState | 是 | Whether the input method is enabled. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permissions check fails. |
| 202 | not system application. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800018 | input method is not found. |
| 12800019 | current operation cannot be applied to the preconfigured default input  method. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function enableInputMethodSafely() {
  const currentIme: inputMethod.InputMethodProperty = inputMethod.getCurrentInputMethod();
  if (!currentIme) {
    console.error("Failed to get current input method");
    return;
  }

  inputMethod.getSetting()
    .enableInputMethod(currentIme.name, currentIme.id, inputMethod.EnabledState.BASIC_MODE)
    .then(() => {
      console.info('Succeeded in enable inputmethod.');
    })
    .catch((err) => {
      if (err instanceof BusinessError) {
        console.error(`Failed to enableInputMethod. Code: ${err.code}, message: ${err.message}`);
      } else {
        console.error(`Failed to enableInputMethod. Error: ${err}`);
      }
    });
}

enableInputMethodSafely();

```

## enableInputMethod

```TypeScript
enableInputMethod(
      bundleName: string, extensionName: string, enabledState: EnabledState, userId?: int): Promise<void>
```

Change the enabled state of an input method of a specified user.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.CONNECT_IME_ABILITY

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | Indicates the bundle name of the input method. |
| extensionName | string | 是 | Indicates the extension name of the input method. |
| enabledState | EnabledState | 是 | Indicates the enabledState to be changed. |
| userId | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permissions check fails. |
| 202 | not system application. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800018 | input method is not found. |
| 12800019 | current operation cannot be applied to the preconfigured  default input method. |
| 12800023 | the specified user does not exist. |
| 12800024 | the specified user is not in the foreground. |
| 12800025 | cross-user operation denied.  Only user 0 applications are authorized for this operation. |

## getAllInputMethods

```TypeScript
getAllInputMethods(callback: AsyncCallback<Array<InputMethodProperty>>): void
```

List all input methods

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;InputMethodProperty>> | 是 | the callback of getInputMethods. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getSetting().getAllInputMethods((err: BusinessError, data: Array<inputMethod.InputMethodProperty>) => {
  if (err) {
    console.error(`Failed to getAllInputMethods, code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in getting all inputMethods.');
});

```

## getAllInputMethods

```TypeScript
getAllInputMethods(): Promise<Array<InputMethodProperty>>
```

List all input methods

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;InputMethodProperty>> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getSetting().getAllInputMethods().then((data: Array<inputMethod.InputMethodProperty>) => {
  console.info('Succeeded in getting all inputMethods.');
}).catch((err: BusinessError) => {
  console.error(`Failed to getAllInputMethods, code: ${err.code}, message: ${err.message}`);
})

```

## getAllInputMethodsSync

```TypeScript
getAllInputMethodsSync(): Array<InputMethodProperty>
```

List all input methods sync

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;InputMethodProperty> | the list of all inputmethod. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
let imeProperty: Array<inputMethod.InputMethodProperty> = inputMethod.getSetting().getAllInputMethodsSync();

```

## getAllInputMethodsSync

```TypeScript
getAllInputMethodsSync(userId?: int): Array<InputMethodProperty>
```

Get all input methods sync of a specified user.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userId | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;InputMethodProperty> | the list of all input methods. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | not system application. |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800023 | the specified user does not exist. |
| 12800024 | the specified user is not in the foreground. |
| 12800025 | cross-user operation denied.  Only user 0 applications are authorized for this operation. |

## getCursorInfo

```TypeScript
getCursorInfo(userId?: int): CursorInfo
```

Get the cursor information of a specified user.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userId | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CursorInfo | the information of the cursor of the specified display. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | not system application. |
| 12800003 | input method client error. Possible causes:  1. No edit box is bound to the current input method application under the specified user. |
| 12800008 | input method manager service error. Possible causes:  a system error, such as null pointer, IPC exception. |
| 12800023 | the specified user does not exist. |
| 12800024 | the specified user is not in the foreground. |
| 12800025 | cross-user operation denied.  Only user 0 applications are authorized for this operation. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let cursorInfo: inputMethod.CursorInfo = inputMethod.getSetting().getCursorInfo();
  console.info(`get cursorInfo success, left: ${cursorInfo.left}, top: ${cursorInfo.top}, width: ${cursorInfo.width}, height: ${cursorInfo.height}, displayId: ${cursorInfo.displayId}`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to get cursorInfo. Code: ${error.code}, message: ${error.message}`);
}

```

## getDefaultInputMethodAbility

```TypeScript
getDefaultInputMethodAbility(): InputMethodProperty
```

<p>Get the default input method ability.</p> <p>To optimize performance, only the 'name' and 'id' properties which can uniquely identify an input method ability are included in the returned InputMethodProperty object.</p>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| InputMethodProperty | property of the default input method.Only contains 'name' and 'id' properties. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | not system application. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
try {
  const defaultAbility: inputMethod.InputMethodProperty = inputMethod.getSetting().getDefaultInputMethodAbility();
  console.info('Succeeded in getting default input method ability, name: ' + defaultAbility.name + ', id: ' + defaultAbility.id);
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to getDefaultInputMethodAbility. Code: ${error.code}, message: ${error.message}`);
}

```

## getInputMethods

```TypeScript
getInputMethods(enable: boolean, callback: AsyncCallback<Array<InputMethodProperty>>): void
```

List input methods

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | If true, collect enabled input methods.  If false, collect disabled input methods. |
| callback | AsyncCallback&lt;Array&lt;InputMethodProperty>> | 是 | the callback of getInputMethods. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getSetting().getInputMethods(true, (err: BusinessError, data: Array<inputMethod.InputMethodProperty>) => {
  if (err) {
    console.error(`Failed to getInputMethods, code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in getting inputMethods.');
});

```

## getInputMethods

```TypeScript
getInputMethods(enable: boolean): Promise<Array<InputMethodProperty>>
```

List input methods

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | If true, collect enabled input methods.  If false, collect disabled input methods. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;InputMethodProperty>> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getSetting().getInputMethods(true).then((data: Array<inputMethod.InputMethodProperty>) => {
  console.info('Succeeded in getting inputMethods.');
}).catch((err: BusinessError) => {
  console.error(`Failed to getInputMethods, code: ${err.code}, message: ${err.message}`);
})


```

## getInputMethodsSync

```TypeScript
getInputMethodsSync(enable: boolean): Array<InputMethodProperty>
```

List enabled or disabled input methods sync

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | If true, collect enabled input methods.  If false, collect disabled input methods. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;InputMethodProperty> | the list of inputmethod. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
let imeProperty: Array<inputMethod.InputMethodProperty> = inputMethod.getSetting().getInputMethodsSync(true);

```

## getInputMethodsSync

```TypeScript
getInputMethodsSync(enable: boolean, userId?: int): Array<InputMethodProperty>
```

List enabled or disabled input methods sync of a specified user.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | If true, collect enabled input methods.  If false, collect disabled input methods. |
| userId | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;InputMethodProperty> | the list of input methods. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | not system application. |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800023 | the specified user does not exist. |
| 12800024 | the specified user is not in the foreground. |
| 12800025 | cross-user operation denied.  Only user 0 applications are authorized for this operation. |

## getInputMethodState

```TypeScript
getInputMethodState(): Promise<EnabledState>
```

The input method application calls this interface to obtain its own enabled state.

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;EnabledState> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800004 | not an input method application. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getSetting().getInputMethodState().then((status: inputMethod.EnabledState) => {
  console.info(`Succeeded in getInputMethodState, status: ${status}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to getInputMethodState, code: ${err.code}, message: ${err.message}`);
});

```

## getInputMethodSubtypes

```TypeScript
getInputMethodSubtypes(bundleName: string, userId?: int): Array<InputMethodSubtype>
```

Get subtypes of a specified input method of a specified user.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | the bundle name of the specified input method. |
| userId | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;InputMethodSubtype> | the subtype of target input method. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | not system application. |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800023 | the specified user does not exist. |
| 12800024 | the specified user is not in the foreground. |
| 12800025 | cross-user operation denied.  Only user 0 applications are authorized for this operation. |

## isPanelShown

```TypeScript
isPanelShown(panelInfo: PanelInfo): boolean
```

Checks whether the input method panel of a specified type is shown.

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| panelInfo | PanelInfo | 是 | Information about the input method panel. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the input method panel is shown.  - The value true means that the input method panel is shown.  - The value false means that the input method panel is hidden. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | not system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { PanelInfo, PanelType, PanelFlag } from '@kit.IMEKit';

let info: PanelInfo = {
  type: PanelType.SOFT_KEYBOARD,
  flag: PanelFlag.FLAG_FIXED
}

try {
  let result: boolean = inputMethod.getSetting().isPanelShown(info);
  console.info('Succeeded in querying isPanelShown, result: ' + result);
} catch (err) {
  console.error(`Failed to query isPanelShown. Code: ${err.code}, message: ${err.message}`);
}

```

## isPanelShown

```TypeScript
isPanelShown(panelInfo: PanelInfo, displayId: long): boolean
```

Checks whether the input method panel of a specified type is shown on a specified screen.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| panelInfo | PanelInfo | 是 | Information about the input method panel. |
| displayId | long | 是 | Display ID. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the input method panel is shown.  - The value true means that the input method panel is shown.  - The value false means that the input method panel is hidden. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | not system application. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { PanelInfo, PanelType, PanelFlag } from '@kit.IMEKit';

let displayId: number = 10;
let info: PanelInfo = {
  type: PanelType.SOFT_KEYBOARD,
  flag: PanelFlag.FLAG_FIXED
}

try {
  let result: boolean = inputMethod.getSetting().isPanelShown(info, displayId);
  console.info('Succeeded in querying isPanelShown, result: ' + result);
} catch (err) {
  console.error(`Failed to query isPanelShown. Code: ${err.code}, message: ${err.message}`);
}

```

## listCurrentInputMethodSubtype

```TypeScript
listCurrentInputMethodSubtype(callback: AsyncCallback<Array<InputMethodSubtype>>): void
```

List subtype of current input method

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;InputMethodSubtype>> | 是 | the callback of listCurrentInputMethodSubtype. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { InputMethodSubtype } from '@kit.IMEKit';
import { BusinessError } from '@kit.BasicServicesKit';

let inputMethodSetting: inputMethod.InputMethodSetting = inputMethod.getSetting();
inputMethodSetting.listCurrentInputMethodSubtype((err: BusinessError, data: Array<InputMethodSubtype>) => {
  if (err) {
    console.error(`Failed to listCurrentInputMethodSubtype, code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in listing currentInputMethodSubtype.');
});

```

## listCurrentInputMethodSubtype

```TypeScript
listCurrentInputMethodSubtype(): Promise<Array<InputMethodSubtype>>
```

List subtype of current input method

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;InputMethodSubtype>> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { InputMethodSubtype } from '@kit.IMEKit';
import { BusinessError } from '@kit.BasicServicesKit';

let inputMethodSetting: inputMethod.InputMethodSetting = inputMethod.getSetting();

inputMethodSetting.listCurrentInputMethodSubtype().then((data: Array<InputMethodSubtype>) => {
  console.info('Succeeded in listing currentInputMethodSubtype.');
}).catch((err: BusinessError) => {
  console.error(`Failed to listCurrentInputMethodSubtype, code: ${err.code}, message: ${err.message}`);
})


```

## listInputMethod

```TypeScript
listInputMethod(callback: AsyncCallback<Array<InputMethodProperty>>): void
```

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethod.InputMethodSetting#getInputMethods

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;InputMethodProperty>> | 是 | the callback of listInputMethod. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getSetting().listInputMethod((err: BusinessError, data: Array<inputMethod.InputMethodProperty>) => {
  if (err) {
    console.error(`Failed to listInputMethod, code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in listing inputMethod.');
});

```

## listInputMethod

```TypeScript
listInputMethod(): Promise<Array<InputMethodProperty>>
```

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethod.InputMethodSetting#getInputMethods

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;InputMethodProperty>> | the promise returned by the function. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getSetting().listInputMethod().then((data: Array<inputMethod.InputMethodProperty>) => {
  console.info('Succeeded in listing inputMethod.');
}).catch((err: BusinessError) => {
  console.error(`Failed to listInputMethod, code: ${err.code}, message: ${err.message}`);
})

```

## listInputMethodSubtype

```TypeScript
listInputMethodSubtype(
      inputMethodProperty: InputMethodProperty,
      callback: AsyncCallback<Array<InputMethodSubtype>>
    ): void
```

List subtype of the specified input method.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputMethodProperty | InputMethodProperty | 是 | the property of the specified inputmethod. |
| callback | AsyncCallback&lt;Array&lt;InputMethodSubtype>> | 是 | the callback of listInputMethodSubtype. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { InputMethodSubtype } from '@kit.IMEKit';
import { BusinessError } from '@kit.BasicServicesKit';

let inputMethodProperty: inputMethod.InputMethodProperty = {
  name: 'com.example.keyboard',
  id: 'propertyId',
  packageName: 'com.example.keyboard',
  methodId: 'propertyId',
}
let inputMethodSetting: inputMethod.InputMethodSetting = inputMethod.getSetting();

inputMethodSetting.listInputMethodSubtype(inputMethodProperty,
  (err: BusinessError, data: Array<InputMethodSubtype>) => {
    if (err) {
      console.error(`Failed to listInputMethodSubtype, code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in listing inputMethodSubtype.');
  });

```

## listInputMethodSubtype

```TypeScript
listInputMethodSubtype(inputMethodProperty: InputMethodProperty): Promise<Array<InputMethodSubtype>>
```

List subtype of the specified input method.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputMethodProperty | InputMethodProperty | 是 | Indicates the specified input method. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;InputMethodSubtype>> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { InputMethodSubtype } from '@kit.IMEKit';
import { BusinessError } from '@kit.BasicServicesKit';

let inputMethodProperty: inputMethod.InputMethodProperty = {
  name: 'com.example.keyboard',
  id: 'propertyId',
  packageName: 'com.example.keyboard',
  methodId: 'propertyId',
}
let inputMethodSetting: inputMethod.InputMethodSetting = inputMethod.getSetting();

inputMethodSetting.listInputMethodSubtype(inputMethodProperty).then((data: Array<InputMethodSubtype>) => {
  console.info('Succeeded in listing inputMethodSubtype.');
}).catch((err: BusinessError) => {
  console.error(`Failed to listInputMethodSubtype, code: ${err.code}, message: ${err.message}`);
})

```

## off('imeChange')

```TypeScript
off(
      type: 'imeChange',
      callback?: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void
    ): void
```

Unsubscribe input method or subtype change.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'imeChange' | 是 | Indicates the event type. |
| callback | (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void | 否 |  |

**示例：**

```TypeScript
inputMethod.getSetting().off('imeChange');

```

## off('imeShow')

```TypeScript
off(type: 'imeShow', callback?: (info: Array<InputWindowInfo>) => void): void
```

Unsubscribes from the soft keyboard show event of the [input method panel](arkts-inputmethodengine-panel-i.md#Panel) in the fixed state.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'imeShow' | 是 | Event type, which is 'imeShow'. |
| callback | (info: Array&lt;InputWindowInfo>) => void | 否 |  |

**示例：**

```TypeScript
inputMethod.getSetting().off('imeShow');

```

## off('imeHide')

```TypeScript
off(type: 'imeHide', callback?: (info: Array<InputWindowInfo>) => void): void
```

Unsubscribes from the soft keyboard hide event of the [input method panel](arkts-inputmethodengine-panel-i.md#Panel) in the fixed state.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'imeHide' | 是 | Event type, which is 'imeHide'. |
| callback | (info: Array&lt;InputWindowInfo>) => void | 否 |  |

**示例：**

```TypeScript
inputMethod.getSetting().off('imeHide');

```

## offImeChange

```TypeScript
offImeChange(callback?: ImeChangeCallback): void
```

Unsubscribe input method or subtype change.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ImeChangeCallback | 否 |  |

## offImeChangeWithUserId

```TypeScript
offImeChangeWithUserId(callback?: ImeChangeWithUserIdCallback): void
```

Unsubscribe from the input method change event.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ImeChangeWithUserIdCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | not system application. |

## offImeHide

```TypeScript
offImeHide(callback?: Callback<Array<InputWindowInfo>>): void
```

Unsubscribe input window hide event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;InputWindowInfo>> | 否 |  |

## offImeShow

```TypeScript
offImeShow(callback?: Callback<Array<InputWindowInfo>>):void
```

Unsubscribe input window show event.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;InputWindowInfo>> | 否 |  |

## on('imeChange')

```TypeScript
on(
      type: 'imeChange',
      callback: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void
    ): void
```

Subscribe input method or subtype change.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'imeChange' | 是 | Indicates the event type. |
| callback | (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void | 是 | the callback of 'imeChange' |

**示例：**

```TypeScript
import { InputMethodSubtype } from '@kit.IMEKit';

inputMethod.getSetting()
  .on('imeChange', (inputMethodProperty: inputMethod.InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => {
    console.info(`Succeeded in subscribing imeChange: inputMethodProperty.name: ${inputMethodProperty.name} ` +
      `, inputMethodSubtype.id: ${inputMethodSubtype.id}`);
  });

```

## on('imeShow')

```TypeScript
on(type: 'imeShow', callback: (info: Array<InputWindowInfo>) => void): void
```

Subscribes to the soft keyboard show event of the [input method panel](arkts-inputmethodengine-panel-i.md#Panel) in the fixed state. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'imeShow' | 是 | Event type, which is 'imeShow'. |
| callback | (info: Array&lt;InputWindowInfo>) => void | 是 | Callback used to return the soft keyboard information of the input method panel in  the fixed state. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | not system application. |

**示例：**

```TypeScript
inputMethod.getSetting().on('imeShow', (info: Array<inputMethod.InputWindowInfo>) => {
  console.info('Succeeded in subscribing imeShow event.');
});

```

## on('imeHide')

```TypeScript
on(type: 'imeHide', callback: (info: Array<InputWindowInfo>) => void): void
```

Subscribes to the soft keyboard hide event of the [input method panel](arkts-inputmethodengine-panel-i.md#Panel) in the fixed state. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'imeHide' | 是 | Event type, which is 'imeHide'. |
| callback | (info: Array&lt;InputWindowInfo>) => void | 是 | Callback used to return the soft keyboard information of the input method panel in  the fixed state. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | not system application. |

**示例：**

```TypeScript
inputMethod.getSetting().on('imeHide', (info: Array<inputMethod.InputWindowInfo>) => {
  console.info('Succeeded in subscribing imeHide event.');
});

```

## onImeChange

```TypeScript
onImeChange(callback: ImeChangeCallback): void
```

Subscribe input method or subtype change.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ImeChangeCallback | 是 | the callback called when the current input method changes. |

## onImeChangeWithUserId

```TypeScript
onImeChangeWithUserId(callback: ImeChangeWithUserIdCallback): void
```

Subscribe to the input method change event.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ImeChangeWithUserIdCallback | 是 | the callback called when the current input method changes. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | not system application. |

## onImeHide

```TypeScript
onImeHide(callback: Callback<Array<InputWindowInfo>>): void
```

Subscribes to input window hidden events.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;InputWindowInfo>> | 是 | the callback called when input method hides. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | not system application. |

## onImeShow

```TypeScript
onImeShow(callback: Callback<Array<InputWindowInfo>>):void
```

Subscribes to input window show events.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;InputWindowInfo>> | 是 | the callback called when input method shows. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | not system application. |

## showOptionalInputMethods

```TypeScript
showOptionalInputMethods(callback: AsyncCallback<boolean>): void
```

Show input method setting extension dialog

**起始版本：** 9

**废弃版本：** 18

**替代接口：** ohos.inputMethodList/InputMethodListDialog

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | the callback of showOptionalInputMethods. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getSetting().showOptionalInputMethods((err: BusinessError, result: boolean) => {
  if (err) {
    console.error(`Failed to showOptionalInputMethods, code: ${err.code}, message: ${err.message}`);
    return;
  }
  if (result) {
    console.info('Succeeded in showing optionalInputMethods.');
  } else {
    console.error(`Failed to showOptionalInputMethods.`);
  }
});

```

## showOptionalInputMethods

```TypeScript
showOptionalInputMethods(): Promise<boolean>
```

Show input method setting extension dialog

**起始版本：** 9

**废弃版本：** 18

**替代接口：** ohos.inputMethodList/InputMethodListDialog

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getSetting().showOptionalInputMethods().then((result: boolean) => {
  if (result) {
    console.info('Succeeded in showing optionalInputMethods.');
  } else {
    console.error(`Failed to showOptionalInputMethods.`);
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to showOptionalInputMethods, code: ${err.code}, message: ${err.message}`);
})

```

