# InputMethodSetting

In the following API examples, you must first use [getSetting](arkts-inputmethod-getsetting-f.md#getSetting-1) to obtain an **InputMethodSetting** instance, and then call the APIs using the obtained instance.

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { inputMethod } from '@kit.IMEKit';
```

## displayOptionalInputMethod

```TypeScript
displayOptionalInputMethod(callback: AsyncCallback<void>): void
```

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.inputMethodList/InputMethodListDialog

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | the callback of displayOptionalInputMethod. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.inputMethodList/InputMethodListDialog

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**Example**

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

**Since:** 20

**Required permissions:** 

 ohos.permission.CONNECT_IME_ABILITY

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the input method. |
| extensionName | string | Yes | Extension name of the input method. |
| enabledState | EnabledState | Yes | Whether the input method is enabled. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permissions check fails. |
| 202 | not system application. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800018 | input method is not found. |
| 12800019 | current operation cannot be applied to the preconfigured default input  method. |

**Example**

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
    .catch((err: BusinessError) => {
      console.error(`Failed to enableInputMethod. Code: ${err.code}, message: ${err.message}`);
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

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CONNECT_IME_ABILITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Indicates the bundle name of the input method. |
| extensionName | string | Yes | Indicates the extension name of the input method. |
| enabledState | EnabledState | Yes | Indicates the enabledState to be changed. |
| userId | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
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

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;InputMethodProperty>> | Yes | the callback of getInputMethods. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

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

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;InputMethodProperty>> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

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

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;InputMethodProperty> | the list of all inputmethod. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

```TypeScript
let imeProperty: Array<inputMethod.InputMethodProperty> = inputMethod.getSetting().getAllInputMethodsSync();

```

## getAllInputMethodsSync

```TypeScript
getAllInputMethodsSync(userId?: int): Array<InputMethodProperty>
```

Get all input methods sync of a specified user.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;InputMethodProperty> | the list of all input methods. |

**Error codes:**

| Error Code ID | Error Message |
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

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| CursorInfo | the information of the cursor of the specified display. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | not system application. |
| 12800003 | input method client error. Possible causes:  1. No edit box is bound to the current input method application under the specified user. |
| 12800008 | input method manager service error. Possible causes:  a system error, such as null pointer, IPC exception. |
| 12800023 | the specified user does not exist. |
| 12800024 | the specified user is not in the foreground. |
| 12800025 | cross-user operation denied.  Only user 0 applications are authorized for this operation. |

**Example**

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

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| InputMethodProperty | property of the default input method.Only contains 'name' and 'id' properties. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | not system application. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

```TypeScript
try {
  const defaultAbility: inputMethod.InputMethodProperty = inputMethod.getSetting().getDefaultInputMethodAbility();
  console.info('Succeeded in getting default input method ability, name: ' + defaultAbility.name + ', id: ' + defaultAbility.id);
} catch (err) {
  console.error(`Failed to getDefaultInputMethodAbility. Code: ${err.code}, message: ${err.message}`);
}

```

## getInputMethods

```TypeScript
getInputMethods(enable: boolean, callback: AsyncCallback<Array<InputMethodProperty>>): void
```

List input methods

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | If true, collect enabled input methods.  If false, collect disabled input methods. |
| callback | AsyncCallback&lt;Array&lt;InputMethodProperty>> | Yes | the callback of getInputMethods. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | If true, collect enabled input methods.  If false, collect disabled input methods. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;InputMethodProperty>> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

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

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | If true, collect enabled input methods.  If false, collect disabled input methods. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;InputMethodProperty> | the list of inputmethod. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

```TypeScript
let imeProperty: Array<inputMethod.InputMethodProperty> = inputMethod.getSetting().getInputMethodsSync(true);

```

## getInputMethodsSync

```TypeScript
getInputMethodsSync(enable: boolean, userId?: int): Array<InputMethodProperty>
```

List enabled or disabled input methods sync of a specified user.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | If true, collect enabled input methods.  If false, collect disabled input methods. |
| userId | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;InputMethodProperty> | the list of input methods. |

**Error codes:**

| Error Code ID | Error Message |
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

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;EnabledState> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800004 | not an input method application. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getSetting().getInputMethodState().then((status: inputMethod.EnabledState) => {
  console.info(`Succeeded in getInputMethodState, status: ${status}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to getInputMethodState, code: ${err.code}, message: ${err.message}`);
})

```

## getInputMethodSubtypes

```TypeScript
getInputMethodSubtypes(bundleName: string, userId?: int): Array<InputMethodSubtype>
```

Get subtypes of a specified input method of a specified user.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | the bundle name of the specified input method. |
| userId | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;InputMethodSubtype> | the subtype of target input method. |

**Error codes:**

| Error Code ID | Error Message |
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

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| panelInfo | PanelInfo | Yes | Information about the input method panel. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the input method panel is shown.  - The value true means that the input method panel is shown.  - The value false means that the input method panel is hidden. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | not system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

```TypeScript
import { PanelInfo, PanelType, PanelFlag } from '@kit.IMEKit';

let info: PanelInfo = {
  type: PanelType.SOFT_KEYBOARD,
  flag: PanelFlag.FLAG_FIXED
}

let result: boolean = inputMethod.getSetting().isPanelShown(info);
console.info('Succeeded in querying isPanelShown, result: ' + result);

```

## isPanelShown

```TypeScript
isPanelShown(panelInfo: PanelInfo, displayId: long): boolean
```

Checks whether the input method panel of a specified type is shown on a specified screen.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| panelInfo | PanelInfo | Yes | Information about the input method panel. |
| displayId | long | Yes | Display ID. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the input method panel is shown.  - The value true means that the input method panel is shown.  - The value false means that the input method panel is hidden. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | not system application. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

```TypeScript
import { PanelInfo, PanelType, PanelFlag } from '@kit.IMEKit';

let displayId: number = 10;
let info: PanelInfo = {
  type: PanelType.SOFT_KEYBOARD,
  flag: PanelFlag.FLAG_FIXED
}

let result: boolean = inputMethod.getSetting().isPanelShown(info, displayId);
console.info('Succeeded in querying isPanelShown, result: ' + result);

```

## listCurrentInputMethodSubtype

```TypeScript
listCurrentInputMethodSubtype(callback: AsyncCallback<Array<InputMethodSubtype>>): void
```

List subtype of current input method

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;InputMethodSubtype>> | Yes | the callback of listCurrentInputMethodSubtype. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;InputMethodSubtype>> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** inputMethod.InputMethodSetting#getInputMethods

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;InputMethodProperty>> | Yes | the callback of listInputMethod. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** inputMethod.InputMethodSetting#getInputMethods

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;InputMethodProperty>> | the promise returned by the function. |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inputMethodProperty | InputMethodProperty | Yes | the property of the specified inputmethod. |
| callback | AsyncCallback&lt;Array&lt;InputMethodSubtype>> | Yes | the callback of listInputMethodSubtype. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inputMethodProperty | InputMethodProperty | Yes | Indicates the specified input method. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;InputMethodSubtype>> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800001 | bundle manager error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'imeChange' | Yes | Indicates the event type. |
| callback | (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void | No |  |

**Example**

```TypeScript
inputMethod.getSetting().off('imeChange');

```

## off('imeShow')

```TypeScript
off(type: 'imeShow', callback?: (info: Array<InputWindowInfo>) => void): void
```

Unsubscribes from the soft keyboard show event of the [input method panel](arkts-inputmethodengine-panel-i.md#Panel) in the fixed state.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'imeShow' | Yes | Event type, which is 'imeShow'. |
| callback | (info: Array&lt;InputWindowInfo>) => void | No |  |

**Example**

```TypeScript
inputMethod.getSetting().off('imeShow');

```

## off('imeHide')

```TypeScript
off(type: 'imeHide', callback?: (info: Array<InputWindowInfo>) => void): void
```

Unsubscribes from the soft keyboard hide event of the [input method panel](arkts-inputmethodengine-panel-i.md#Panel) in the fixed state.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'imeHide' | Yes | Event type, which is 'imeHide'. |
| callback | (info: Array&lt;InputWindowInfo>) => void | No |  |

**Example**

```TypeScript
inputMethod.getSetting().off('imeHide');

```

## offImeChange

```TypeScript
offImeChange(callback?: ImeChangeCallback): void
```

Unsubscribe input method or subtype change.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ImeChangeCallback | No |  |

## offImeChangeWithUserId

```TypeScript
offImeChangeWithUserId(callback?: ImeChangeWithUserIdCallback): void
```

Unsubscribe from the input method change event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ImeChangeWithUserIdCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | not system application. |

## offImeHide

```TypeScript
offImeHide(callback?: Callback<Array<InputWindowInfo>>): void
```

Unsubscribe input window hide event.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;InputWindowInfo>> | No |  |

## offImeShow

```TypeScript
offImeShow(callback?: Callback<Array<InputWindowInfo>>):void
```

Unsubscribe input window show event.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;InputWindowInfo>> | No |  |

## on('imeChange')

```TypeScript
on(
      type: 'imeChange',
      callback: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void
    ): void
```

Subscribe input method or subtype change.

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'imeChange' | Yes | Indicates the event type. |
| callback | (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void | Yes | the callback of 'imeChange' |

**Example**

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

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'imeShow' | Yes | Event type, which is 'imeShow'. |
| callback | (info: Array&lt;InputWindowInfo>) => void | Yes | Callback used to return the soft keyboard information of the input method panel in  the fixed state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | not system application. |

**Example**

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

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'imeHide' | Yes | Event type, which is 'imeHide'. |
| callback | (info: Array&lt;InputWindowInfo>) => void | Yes | Callback used to return the soft keyboard information of the input method panel in  the fixed state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | not system application. |

**Example**

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

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ImeChangeCallback | Yes | the callback called when the current input method changes. |

## onImeChangeWithUserId

```TypeScript
onImeChangeWithUserId(callback: ImeChangeWithUserIdCallback): void
```

Subscribe to the input method change event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ImeChangeWithUserIdCallback | Yes | the callback called when the current input method changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | not system application. |

## onImeHide

```TypeScript
onImeHide(callback: Callback<Array<InputWindowInfo>>): void
```

Subscribes to input window hidden events.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;InputWindowInfo>> | Yes | the callback called when input method hides. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | not system application. |

## onImeShow

```TypeScript
onImeShow(callback: Callback<Array<InputWindowInfo>>):void
```

Subscribes to input window show events.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;InputWindowInfo>> | Yes | the callback called when input method shows. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | not system application. |

## showOptionalInputMethods

```TypeScript
showOptionalInputMethods(callback: AsyncCallback<boolean>): void
```

Show input method setting extension dialog

**Since:** 9

**Deprecated since:** 18

**Substitute:** ohos.inputMethodList/InputMethodListDialog

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | the callback of showOptionalInputMethods. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

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

**Since:** 9

**Deprecated since:** 18

**Substitute:** ohos.inputMethodList/InputMethodListDialog

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**Example**

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

