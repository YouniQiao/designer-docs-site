# switchCurrentInputMethodAndSubtype

## switchCurrentInputMethodAndSubtype

```TypeScript
function switchCurrentInputMethodAndSubtype(
    inputMethodProperty: InputMethodProperty,
    inputMethodSubtype: InputMethodSubtype,
    callback: AsyncCallback<boolean>
  ): void
```

Switch input method and subtype. The caller must be the current inputmethod.

**起始版本：** 9

**需要权限：** 

- API版本9 - 10： ohos.permission.CONNECT_IME_ABILITY

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputMethodProperty | InputMethodProperty | 是 | indicates the target input method. |
| inputMethodSubtype | InputMethodSubtype | 是 | indicates the target input method subtype. |
| callback | AsyncCallback&lt;boolean> | 是 | the callback of switchCurrentInputMethodAndSubtype. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permissions check fails. [since 9 - 10] |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800005 | configuration persistence error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { InputMethodSubtype } from '@kit.IMEKit';
import { BusinessError } from '@kit.BasicServicesKit';

let currentIme: inputMethod.InputMethodProperty = inputMethod.getCurrentInputMethod();
let imSubType: InputMethodSubtype = inputMethod.getCurrentInputMethodSubtype();
inputMethod.switchCurrentInputMethodAndSubtype(currentIme, imSubType, (err: BusinessError, result: boolean) => {
  if (err) {
    console.error(`Failed to switchCurrentInputMethodAndSubtype, code: ${err.code}, message: ${err.message}`);
    return;
  }
  if (result) {
    console.info('Succeeded in switching currentInputMethodAndSubtype.');
  } else {
    console.error('Failed to switchCurrentInputMethodAndSubtype.');
  }
});

```

## switchCurrentInputMethodAndSubtype

```TypeScript
function switchCurrentInputMethodAndSubtype(
    inputMethodProperty: InputMethodProperty,
    inputMethodSubtype: InputMethodSubtype
  ): Promise<boolean>
```

Switch input method and subtype. The caller must be the current inputmethod.

**起始版本：** 9

**需要权限：** 

- API版本9 - 10： ohos.permission.CONNECT_IME_ABILITY

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputMethodProperty | InputMethodProperty | 是 | indicates the target input method. |
| inputMethodSubtype | InputMethodSubtype | 是 | indicates the target input method subtype. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permissions check fails. [since 9 - 10] |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800005 | configuration persistence error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { InputMethodSubtype } from '@kit.IMEKit';
import { BusinessError } from '@kit.BasicServicesKit';

let currentIme: inputMethod.InputMethodProperty = inputMethod.getCurrentInputMethod();
let imSubType: InputMethodSubtype = inputMethod.getCurrentInputMethodSubtype();
inputMethod.switchCurrentInputMethodAndSubtype(currentIme, imSubType).then((result: boolean) => {
  if (result) {
    console.info('Succeeded in switching currentInputMethodAndSubtype.');
  } else {
    console.error('Failed to switchCurrentInputMethodAndSubtype.');
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to switchCurrentInputMethodAndSubtype, code: ${err.code}, message: ${err.message}`);
});

```

