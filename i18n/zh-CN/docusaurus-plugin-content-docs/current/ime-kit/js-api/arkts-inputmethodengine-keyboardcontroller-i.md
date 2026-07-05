# KeyboardController

In the following API examples, you must first use [getKeyboardDelegate]inputMethodEngine.getKeyboardDelegate() to obtain a **KeyboardDelegate** instance, and then call the APIs using the obtained instance.

**起始版本：** 8

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## exitCurrentInputType

```TypeScript
exitCurrentInputType(callback: AsyncCallback<void>): void
```

Exits this input type. This API can be called only by the preconfigured default input method. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800010 | not the preconfigured default input method. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

keyboardController.exitCurrentInputType((err: BusinessError) => {
  if (err) {
    console.error(`Failed to exit current input type. Code:${err.code}, message:${err.message}`);
    return;
  }
  console.info('Succeeded in exiting current input type.');
});

```

## exitCurrentInputType

```TypeScript
exitCurrentInputType(): Promise<void>
```

Exits this input type. This API can be called only by the preconfigured default input method. This API uses a promise to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800010 | not the preconfigured default input method. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

keyboardController.exitCurrentInputType().then(() => {
  console.info('Succeeded in exiting current input type.');
}).catch((err: BusinessError) => {
  console.error(`Failed to exit current input type. Code:${err.code}, message:${err.message}`);
});

```

## hide

```TypeScript
hide(callback: AsyncCallback<void>): void
```

Hides the keyboard. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

keyboardController.hide((err: BusinessError) => {
  if (err) {
    console.error(`Failed to hide. Code:${err.code}, message:${err.message}`);
    return;
  }
  console.info('Succeeded in hiding keyboard.');
});

```

## hide

```TypeScript
hide(): Promise<void>
```

Hides the keyboard. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

keyboardController.hide().then(() => {
  console.info('Succeeded in hiding keyboard.');
}).catch((err: BusinessError) => {
  console.error(`Failed to hide. Code:${err.code}, message:${err.message}`);
});

```

## hideKeyboard

```TypeScript
hideKeyboard(callback: AsyncCallback<void>): void
```

Hides the keyboard. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.KeyboardController.hide(callback:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

keyboardController.hideKeyboard((err: BusinessError) => {
  if (err) {
    console.error(`Failed to hideKeyboard. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in hiding keyboard.');
});

```

## hideKeyboard

```TypeScript
hideKeyboard(): Promise<void>
```

Hides the keyboard. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.KeyboardController.hide()

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

keyboardController.hideKeyboard().then(() => {
  console.info('Succeeded in hiding keyboard.');
}).catch((err: BusinessError) => {
  console.error(`Failed to hideKeyboard. Code is ${err.code}, message is ${err.message}`);
});

```

