# switchInputMethod

## switchInputMethod

```TypeScript
function switchInputMethod(bundleName: string, subtypeId?: string): Promise<void>
```

Switches to another input method. This API uses a promise to return the result.

**起始版本：** 11

**需要权限：** 

 ohos.permission.CONNECT_IME_ABILITY

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | Bundle name of the target input method. |
| subtypeId | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permissions check fails. |
| 202 | not system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800005 | configuration persistence error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { InputMethodSubtype } from '@kit.IMEKit';

async function switchInputMethodWithSubtype() {
  // 1. 获取当前输入法
  const currentIme: inputMethod.InputMethodProperty | undefined = inputMethod.getCurrentInputMethod();
  if (!currentIme) {
    console.error("Failed to get current input method");
    return;
  }
  try {
    // 2. 切换输入法
    await inputMethod.switchInputMethod(currentIme.name);
    console.info('Succeeded in switching inputMethod.');
  } catch (err) {
    console.error(`Failed to switchInputMethod. Code: ${err.code}, message: ${err.message}`);
  }
  const currentSubtype: InputMethodSubtype | undefined = inputMethod.getCurrentInputMethodSubtype();
  if (!currentSubtype) {
    console.error("Failed to get current input subtype");
    return;
  }
  try {
    // 4. 切换输入法子类型
    await inputMethod.switchInputMethod(currentIme.name, currentSubtype.id);
    console.info('Succeeded in switching inputMethod.');
  } catch (err) {
    console.error(`Failed to switchInputMethod. Code: ${err.code}, message: ${err.message}`);
  }
}

switchInputMethodWithSubtype();

```

