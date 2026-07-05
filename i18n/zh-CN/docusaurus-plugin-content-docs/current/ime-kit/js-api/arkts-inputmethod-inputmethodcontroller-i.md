# InputMethodController

A control class that encapsulates APIs for input method management, which can only be invoked after an **InputMethodController** instance is obtained via [getController](arkts-inputmethod-getcontroller-f.md#getController-1).

**起始版本：** 6

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { inputMethod } from '@kit.IMEKit';
```

## attach

```TypeScript
attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>): void
```

Attach application to the input method service.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| showKeyboard | boolean | 是 | show the keyboard or not when attach the input method. |
| textConfig | TextConfig | 是 | indicates the config of the textInput. |
| callback | AsyncCallback&lt;void> | 是 | the callback of attach. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let inputAttribute: inputMethod.InputAttribute = {
  textInputType: inputMethod.TextInputType.TEXT,
  enterKeyType: inputMethod.EnterKeyType.GO
}
let textConfig: inputMethod.TextConfig = { inputAttribute: inputAttribute };
inputMethod.getController().attach(true, textConfig, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to attach, code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in attaching the inputMethod.');
});

```

## attach

```TypeScript
attach(showKeyboard: boolean, textConfig: TextConfig): Promise<void>
```

Attach application to the input method service.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| showKeyboard | boolean | 是 | show the keyboard or not when attach the input method. |
| textConfig | TextConfig | 是 | indicates the config of the textInput. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let inputAttribute: inputMethod.InputAttribute = {
  textInputType: inputMethod.TextInputType.TEXT,
  enterKeyType: inputMethod.EnterKeyType.GO
}
let textConfig: inputMethod.TextConfig = { inputAttribute: inputAttribute };
inputMethod.getController().attach(true, textConfig).then(() => {
  console.info('Succeeded in attaching inputMethod.');
}).catch((err: BusinessError) => {
  console.error(`Failed to attach, code: ${err.code}, message: ${err.message}`);
});

```

## attach

```TypeScript
attach(showKeyboard: boolean, textConfig: TextConfig, requestKeyboardReason: RequestKeyboardReason): Promise<void>
```

Attach application to the input method service.

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| showKeyboard | boolean | 是 | show the keyboard or not when attach the input method. |
| textConfig | TextConfig | 是 | indicates the config of the textInput. |
| requestKeyboardReason | RequestKeyboardReason | 是 | requestKeyboardReason of show the keyboard . |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let inputAttribute: inputMethod.InputAttribute = {
  textInputType: inputMethod.TextInputType.TEXT,
  enterKeyType: inputMethod.EnterKeyType.GO
}
let textConfig: inputMethod.TextConfig = { inputAttribute: inputAttribute };
let requestKeyboardReason: inputMethod.RequestKeyboardReason = inputMethod.RequestKeyboardReason.MOUSE;

inputMethod.getController().attach(true, textConfig, requestKeyboardReason).then(() => {
  console.info('Succeeded in attaching inputMethod.');
}).catch((err: BusinessError) => {
  console.error(`Failed to attach, code: ${err.code}, message: ${err.message}`);
});

```

## attachWithUIContext

```TypeScript
attachWithUIContext(uiContext: UIContext, textConfig: TextConfig, attachOptions?: AttachOptions): Promise<void>
```

Attach application to the input method service with UI context.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uiContext | UIContext | 是 | indicates the ui context where the attachment will be performed. |
| textConfig | TextConfig | 是 | indicates the config of the textInput. |
| attachOptions | AttachOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { UIContext } from '@kit.ArkUI';

let uiContext: UIContext | undefined = UIContext.getCallingScopeUIContext();
let inputAttribute: inputMethod.InputAttribute = {
  textInputType: inputMethod.TextInputType.TEXT,
  enterKeyType: inputMethod.EnterKeyType.GO
}
let textConfig: inputMethod.TextConfig = { inputAttribute: inputAttribute };
let attachOptions: inputMethod.AttachOptions = { showKeyboard: true };
inputMethod.getController().attachWithUIContext(uiContext, textConfig, attachOptions).then(() => {
  console.info('Succeeded in attaching inputMethod.');
}).catch((err: BusinessError) => {
  console.error(`Failed to attach, code: ${err.code}, message: ${err.message}`);
});

```

## changeSelection

```TypeScript
changeSelection(text: string, start: int, end: int, callback: AsyncCallback<void>): void
```

Notify the input method the selected text and the selection range of the current application text has changed.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | the whole input text. |
| start | int | 是 | start position of selected text. |
| end | int | 是 | end position of selected text. |
| callback | AsyncCallback&lt;void> | 是 | the callback of changeSelection. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getController().changeSelection('text', 0, 5, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to changeSelection, code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in changing selection.');
});

```

## changeSelection

```TypeScript
changeSelection(text: string, start: int, end: int): Promise<void>
```

Notify the input method the selected text and the selection range of the current application text has changed.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | the selected text. |
| start | int | 是 | start position of selected text. |
| end | int | 是 | end position of selected text. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getController().changeSelection('test', 0, 5).then(() => {
  console.info('Succeeded in changing selection.');
}).catch((err: BusinessError) => {
  console.error(`Failed to changeSelection, code: ${err.code}, message: ${err.message}`);
});

```

## detach

```TypeScript
detach(callback: AsyncCallback<void>): void
```

Detach the applications from the input method manager service.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | the callback of detach. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getController().detach((err: BusinessError) => {
  if (err) {
    console.error(`Failed to detach, code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in detaching inputMethod.');
});

```

## detach

```TypeScript
detach(): Promise<void>
```

Detach the applications from the input method manager service.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getController().detach().then(() => {
  console.info('Succeeded in detaching inputMethod.');
}).catch((err: BusinessError) => {
  console.error(`Failed to detach, code: ${err.code}, message: ${err.message}`);
});

```

## discardTypingText

```TypeScript
discardTypingText(): Promise<void>
```

Discard the typing text

**起始版本：** 20

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800009 | input method client detached. |
| 12800015 | the other side does not accept the request. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getController().discardTypingText().then(() => {
  console.info('Succeeded discardTypingText.');
}).catch((err: BusinessError) => {
  console.error(`Failed to discardTypingText, code: ${err.code}, message: ${err.message}`);
});

```

## hideSoftKeyboard

```TypeScript
hideSoftKeyboard(callback: AsyncCallback<void>): void
```

Hide soft keyboard. This API can be called only by system applications.

**起始版本：** 9

**需要权限：** 

 ohos.permission.CONNECT_IME_ABILITY

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | the callback of hideSoftKeyboard. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permissions check fails. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getController().hideSoftKeyboard((err: BusinessError) => {
  if (!err) {
    console.info('Succeeded in hiding softKeyboard.');
  } else {
    console.error(`Failed to hide softKeyboard, code: ${err.code}, message: ${err.message}`);
  }
})

```

## hideSoftKeyboard

```TypeScript
hideSoftKeyboard(): Promise<void>
```

Hide soft keyboard. This API can be called only by system applications.

**起始版本：** 9

**需要权限：** 

 ohos.permission.CONNECT_IME_ABILITY

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permissions check fails. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getController().hideSoftKeyboard().then(() => {
  console.info('Succeeded in hiding softKeyboard.');
}).catch((err: BusinessError) => {
  console.error(`Failed to hide softKeyboard, code: ${err.code}, message: ${err.message}`);
});

```

## hideSoftKeyboard

```TypeScript
hideSoftKeyboard(displayId: long): Promise<void>
```

Hides the soft keyboard on a specified screen. This API uses a promise to return the result. > **NOTE** > > This API can be called only when the edit box is attached to the input method. That is, it can be called to > hide the soft keyboard only when the edit box is focused.

**起始版本：** 23

**需要权限：** 

 ohos.permission.CONNECT_IME_ABILITY

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayId | long | 是 | Display ID. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permissions check fails. |
| 202 | not system application. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let displayId: number = 30;
inputMethod.getController().hideSoftKeyboard(displayId).then(() => {
  console.info('Succeeded in hiding softKeyboard.');
}).catch((err: BusinessError) => {
  console.error(`Failed to hide softKeyboard, code: ${err.code}, message: ${err.message}`);
});

```

## hideTextInput

```TypeScript
hideTextInput(callback: AsyncCallback<void>): void
```

Hide the text input and stop typing.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | the callback of hideTextInput. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getController().hideTextInput((err: BusinessError) => {
  if (err) {
    console.error(`Failed to hideTextInput, code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in hiding text input.');
});

```

## hideTextInput

```TypeScript
hideTextInput(): Promise<void>
```

Hide the text input and stop typing.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getController().hideTextInput().then(() => {
  console.info('Succeeded in hiding inputMethod.');
}).catch((err: BusinessError) => {
  console.error(`Failed to hideTextInput, code: ${err.code}, message: ${err.message}`);
})

```

## off('selectByRange')

```TypeScript
off(type: 'selectByRange', callback?: Callback<Range>): void
```

Unregister the callback of selectedByRange.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'selectByRange' | 是 | event type, fixed as 'selectByRange'. |
| callback | Callback&lt;Range> | 否 |  |

**示例：**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let onSelectByRangeCallback: Callback<inputMethod.Range> = (range: inputMethod.Range): void => {
  console.info(`Succeeded in subscribing selectByRange, start: ${range.start} , end: ${range.end}`);
};

let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
inputMethodController.off('selectByRange', onSelectByRangeCallback);
inputMethodController.off('selectByRange');

```

## off('selectByMovement')

```TypeScript
off(type: 'selectByMovement', callback?: Callback<Movement>): void
```

Unregister the callback of selectedByMovement.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'selectByMovement' | 是 | event type, fixed as 'selectByMovement'. |
| callback | Callback&lt;Movement> | 否 |  |

**示例：**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let onSelectByMovementCallback: Callback<inputMethod.Movement> = (movement: inputMethod.Movement): void => {
  console.info(`Succeeded in subscribing selectByMovement, movement.direction: ${movement.direction}`);
};

let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
inputMethodController.off('selectByMovement', onSelectByMovementCallback);
inputMethodController.off('selectByMovement');

```

## off('insertText')

```TypeScript
off(type: 'insertText', callback?: (text: string) => void): void
```

Unregister the callback of insertText.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'insertText' | 是 | event type, fixed as 'insertText'. |
| callback | (text: string) => void | 否 |  |

**示例：**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let onInsertTextCallback: Callback<string> = (text: string): void => {
  console.info(`Succeeded in subscribing insertText: ${text}`);
};

let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
inputMethodController.off('insertText', onInsertTextCallback);
inputMethodController.off('insertText');

```

## off('deleteLeft')

```TypeScript
off(type: 'deleteLeft', callback?: (length: number) => void): void
```

Unregister the callback of deleteLeft.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deleteLeft' | 是 | event type, fixed as 'deleteLeft'. |
| callback | (length: number) => void | 否 |  |

**示例：**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let onDeleteLeftCallback: Callback<number> = (length: number): void => {
  console.info(`Succeeded in subscribing deleteLeft, length: ${length}`);
};

let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
inputMethodController.off('deleteLeft', onDeleteLeftCallback);
inputMethodController.off('deleteLeft');

```

## off('deleteRight')

```TypeScript
off(type: 'deleteRight', callback?: (length: number) => void): void
```

Unregister the callback of deleteRight.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deleteRight' | 是 | event type, fixed as 'deleteRight'. |
| callback | (length: number) => void | 否 |  |

**示例：**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let onDeleteRightCallback: Callback<number> = (length: number): void => {
  console.info(`Succeeded in subscribing deleteRight, length: ${length}`);
};
let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
inputMethodController.off('deleteRight', onDeleteRightCallback);
inputMethodController.off('deleteRight');

```

## off('sendKeyboardStatus')

```TypeScript
off(type: 'sendKeyboardStatus', callback?: (keyboardStatus: KeyboardStatus) => void): void
```

Unregister the callback of sendKeyboardStatus.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sendKeyboardStatus' | 是 | event type, fixed as 'sendKeyboardStatus'. |
| callback | (keyboardStatus: KeyboardStatus) => void | 否 |  |

**示例：**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let onSendKeyboardStatus: Callback<inputMethod.KeyboardStatus> = (keyboardStatus: inputMethod.KeyboardStatus): void => {
  console.info(`Succeeded in subscribing sendKeyboardStatus, keyboardStatus: ${keyboardStatus}`);
};

let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
inputMethodController.off('sendKeyboardStatus', onSendKeyboardStatus);
inputMethodController.off('sendKeyboardStatus');

```

## off('sendFunctionKey')

```TypeScript
off(type: 'sendFunctionKey', callback?: (functionKey: FunctionKey) => void): void
```

Unregister the callback of sendFunctionKey.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sendFunctionKey' | 是 | event type, fixed as 'sendFunctionKey'. |
| callback | (functionKey: FunctionKey) => void | 否 |  |

**示例：**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let onSendFunctionKey: Callback<inputMethod.FunctionKey> = (functionKey: inputMethod.FunctionKey): void => {
  console.info(`Succeeded in subscribing sendFunctionKey, functionKey: ${functionKey.enterKeyType}`);
};

let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
inputMethodController.off('sendFunctionKey', onSendFunctionKey);
inputMethodController.off('sendFunctionKey');

```

## off('moveCursor')

```TypeScript
off(type: 'moveCursor', callback?: (direction: Direction) => void): void
```

Unregister the callback of moveCursor.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'moveCursor' | 是 | event type, fixed as 'moveCursor'. |
| callback | (direction: Direction) => void | 否 |  |

**示例：**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let onMoveCursorCallback: Callback<inputMethod.Direction> = (direction: inputMethod.Direction): void => {
  console.info(`Succeeded in subscribing moveCursor, direction: ${direction}`);
};

let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
inputMethodController.off('moveCursor', onMoveCursorCallback);
inputMethodController.off('moveCursor');

```

## off('handleExtendAction')

```TypeScript
off(type: 'handleExtendAction', callback?: (action: ExtendAction) => void): void
```

Unregister the callback of handleExtendAction.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'handleExtendAction' | 是 | event type, fixed as 'handleExtendAction'. |
| callback | (action: ExtendAction) => void | 否 |  |

**示例：**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let onHandleExtendActionCallback: Callback<inputMethod.ExtendAction> = (action: inputMethod.ExtendAction): void => {
  console.info(`Succeeded in subscribing handleExtendAction, action: ${action}`);
};

let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
inputMethodController.off('handleExtendAction', onHandleExtendActionCallback);
inputMethodController.off('handleExtendAction');

```

## off('getLeftTextOfCursor')

```TypeScript
off(type: 'getLeftTextOfCursor', callback?: (length: number) => string): void
```

Unregister the callback of getLeftTextOfCursor event.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'getLeftTextOfCursor' | 是 | event type, fixed as 'getLeftTextOfCursor'. |
| callback | (length: number) => string | 否 |  |

**示例：**

```TypeScript
let getLeftTextOfCursorCallback: (length: number) => string = (length: number): string => {
  console.info(`Succeeded in unsubscribing getLeftTextOfCursor, length: ${length}`);
  let text: string = "";
  return text;
};

let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
inputMethodController.off('getLeftTextOfCursor', getLeftTextOfCursorCallback);
inputMethodController.off('getLeftTextOfCursor');

```

## off('getRightTextOfCursor')

```TypeScript
off(type: 'getRightTextOfCursor', callback?: (length: number) => string): void
```

Unregister the callback of getRightTextOfCursor event.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'getRightTextOfCursor' | 是 | event type, fixed as 'getRightTextOfCursor'. |
| callback | (length: number) => string | 否 |  |

**示例：**

```TypeScript
let getRightTextOfCursorCallback: (length: number) => string = (length: number): string => {
  console.info(`Succeeded in unsubscribing getRightTextOfCursor, length: ${length}`);
  let text: string = "";
  return text;
};

let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
inputMethodController.off('getRightTextOfCursor', getRightTextOfCursorCallback);
inputMethodController.off('getRightTextOfCursor');

```

## off('getTextIndexAtCursor')

```TypeScript
off(type: 'getTextIndexAtCursor', callback?: () => number): void
```

Unregister the callback of getTextIndexAtCursor.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'getTextIndexAtCursor' | 是 | event type, fixed as 'getTextIndexAtCursor'. |
| callback | () => number | 否 |  |

**示例：**

```TypeScript
let getTextIndexAtCursorCallback: () => number = (): number => {
  console.info(`Succeeded in unsubscribing getTextIndexAtCursor.`);
  let index: number = 0;
  return index;
};

let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
inputMethodController.off('getTextIndexAtCursor', getTextIndexAtCursorCallback);
inputMethodController.off('getTextIndexAtCursor');

```

## off('setPreviewText')

```TypeScript
off(type: 'setPreviewText', callback?: SetPreviewTextCallback): void
```

Unsubscribe 'setPreviewText' event.

**起始版本：** 17

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'setPreviewText' | 是 | the type of unsubscribe event. |
| callback | SetPreviewTextCallback | 否 |  |

**示例：**

```TypeScript
let setPreviewTextCallback1: inputMethod.SetPreviewTextCallback = (text: string, range: inputMethod.Range): void => {
  console.info(`SetPreviewTextCallback1: Received text - ${text}, Received range - start: ${range.start}, end: ${range.end}`);
};

let setPreviewTextCallback2: inputMethod.SetPreviewTextCallback = (text: string, range: inputMethod.Range): void => {
  console.info(`setPreviewTextCallback2: Received text - ${text}, Received range - start: ${range.start}, end: ${range.end}`);
};

let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
inputMethodController.on('setPreviewText', setPreviewTextCallback1);
console.info(`SetPreviewTextCallback1 subscribed to setPreviewText`);
inputMethodController.on('setPreviewText', setPreviewTextCallback2);
console.info(`SetPreviewTextCallback2 subscribed to setPreviewText`);
// 仅取消setPreviewText的callback1的回调。
inputMethodController.off('setPreviewText', setPreviewTextCallback1);
console.info(`SetPreviewTextCallback1 unsubscribed from setPreviewText`);
// 取消setPreviewText的所有回调。
inputMethodController.off('setPreviewText');
console.info(`All callbacks unsubscribed from setPreviewText`);

```

## off('finishTextPreview')

```TypeScript
off(type: 'finishTextPreview', callback?: Callback<void>): void
```

Unsubscribe 'finishTextPreview' event.

**起始版本：** 17

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'finishTextPreview' | 是 | the type of unsubscribe event. |
| callback | Callback&lt;void> | 否 |  |

**示例：**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let finishTextPreviewCallback1: Callback<void> = (): void => {
  console.info(`FinishTextPreviewCallback1: finishTextPreview event triggered`);
};
let finishTextPreviewCallback2: Callback<void> = (): void => {
  console.info(`FinishTextPreviewCallback2: finishTextPreview event triggered`);
};

let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
inputMethodController.on('finishTextPreview', finishTextPreviewCallback1);
console.info(`FinishTextPreviewCallback1 subscribed to finishTextPreview`);
inputMethodController.on('finishTextPreview', finishTextPreviewCallback2);
console.info(`FinishTextPreviewCallback2 subscribed to finishTextPreview`);
// 仅取消finishTextPreview的callback1的回调。
inputMethodController.off('finishTextPreview', finishTextPreviewCallback1);
console.info(`FinishTextPreviewCallback1 unsubscribed from finishTextPreview`);
// 取消finishTextPreview的所有回调。
inputMethodController.off('finishTextPreview');
console.info(`All callbacks unsubscribed from finishTextPreview`);

```

## offDeleteLeft

```TypeScript
offDeleteLeft(callback?: Callback<int>): void
```

Unregister the callback of deleteLeft.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | 否 |  |

## offDeleteRight

```TypeScript
offDeleteRight(callback?: Callback<int>): void
```

Unregister the callback of deleteRight.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | 否 |  |

## offFinishTextPreview

```TypeScript
offFinishTextPreview(callback?: Callback<void>): void
```

Unsubscribe 'finishTextPreview' event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 否 |  |

## offGetLeftTextOfCursor

```TypeScript
offGetLeftTextOfCursor(callback?: GetTextCallback): void
```

Unregister the callback of getLeftTextofCursor event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | GetTextCallback | 否 |  |

## offGetRightTextOfCursor

```TypeScript
offGetRightTextOfCursor(callback?: GetTextCallback): void
```

Unregister the callback of getRightTextOfCursor event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | GetTextCallback | 否 |  |

## offGetTextIndexAtCursor

```TypeScript
offGetTextIndexAtCursor(callback?:GetTextIndexAtCursorCallback): void
```

Unregister the callback of getTextIndexAtCursor.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | GetTextIndexAtCursorCallback | 否 |  |

## offHandleExtendAction

```TypeScript
offHandleExtendAction(callback?: Callback<ExtendAction>): void
```

Unregister the callback of handleExtendAction.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ExtendAction> | 否 |  |

## offInsertText

```TypeScript
offInsertText(callback?: Callback<string>): void
```

Unregister the callback of insertText.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | 否 |  |

## offMoveCursor

```TypeScript
offMoveCursor(callback?: Callback<Direction>): void
```

Unregister the callback of moveCursor.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Direction> | 否 |  |

## offSelectByMovement

```TypeScript
offSelectByMovement(callback?: Callback<Movement>): void
```

Unregister the callback of selectedByMovement.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Movement> | 否 |  |

## offSelectByRange

```TypeScript
offSelectByRange(callback?: Callback<Range>): void
```

Unregister the callback of selectedByRange.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Range> | 否 |  |

## offSendFunctionKey

```TypeScript
offSendFunctionKey(callback?: Callback<FunctionKey>): void
```

Unregister the callback of sendFunctionKey.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;FunctionKey> | 否 |  |

## offSendKeyboardStatus

```TypeScript
offSendKeyboardStatus(callback?: Callback<KeyboardStatus>): void
```

Unregister the callback of sendKeyboardStatus.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;KeyboardStatus> | 否 |  |

## offSetPreviewText

```TypeScript
offSetPreviewText(callback?:SetPreviewTextCallback): void
```

Unsubscribe 'setPreviewText' event.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | SetPreviewTextCallback | 否 |  |

## on('selectByRange')

```TypeScript
on(type: 'selectByRange', callback: Callback<Range>): void
```

Register a callback and when IME sends select event with range of selection, the callback will be invoked.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'selectByRange' | 是 | event type, fixed as 'selectByRange'. |
| callback | Callback&lt;Range> | 是 | processes selectByRange command. The range of selection is provided for  this callback, and subscribers are expected to select corresponding text in callback according to  the range. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

**示例：**

```TypeScript
inputMethod.getController().on('selectByRange', (range: inputMethod.Range) => {
  console.info(`Succeeded in subscribing selectByRange: start: ${range.start} , end: ${range.end}`);
});

```

## on('selectByMovement')

```TypeScript
on(type: 'selectByMovement', callback: Callback<Movement>): void
```

Register a callback and when IME sends select event witch movement of cursor, the callback will be invoked.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'selectByMovement' | 是 | event type, fixed as 'selectByMovement'. |
| callback | Callback&lt;Movement> | 是 | processes selectByMovement command. The movement of cursor is provided  for this callback, and subscribers are expected to select corresponding text in callback according to  the movement. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

**示例：**

```TypeScript
inputMethod.getController().on('selectByMovement', (movement: inputMethod.Movement) => {
  console.info('Succeeded in subscribing selectByMovement: direction: ' + movement.direction);
});

```

## on('insertText')

```TypeScript
on(type: 'insertText', callback: (text: string) => void): void
```

Register a callback and when IME sends insert text event, the callback will be invoked.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'insertText' | 是 | event type, fixed as 'insertText'. |
| callback | (text: string) => void | 是 | processes insertText command. The text of insert is provided for this callback.  Subscribers are expected to process the inserted text and update changes in editor by changeSelection and  updateCursor as needed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
function callback1(text: string): void {
  console.info(`Succeeded in getting callback1, data: ${text}`);
}

function callback2(text: string): void {
  console.info(`Succeeded in getting callback2, data: ${text}`);
}

let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
// 注册回调
inputMethodController.on('insertText', callback1);
inputMethodController.on('insertText', callback2);
// 仅取消insertText的callback1的回调
inputMethodController.off('insertText', callback1);
// 取消insertText的所有回调
inputMethodController.off('insertText');

```

## on('deleteLeft')

```TypeScript
on(type: 'deleteLeft', callback: (length: number) => void): void
```

Register a callback and when IME sends delete left event with length, the callback will be invoked.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deleteLeft' | 是 | event type, fixed as 'deleteLeft'. |
| callback | (length: number) => void | 是 | processes deleteLeft command. The length of  delete is provided for this callback. Subscribers are expected to delete specified length of text  to the left of the cursor and update changes in editor by changeSelection and updateCursor as needed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
inputMethod.getController().on('deleteLeft', (length: number) => {
  console.info(`Succeeded in subscribing deleteLeft, length: ${length}`);
});

```

## on('deleteRight')

```TypeScript
on(type: 'deleteRight', callback: (length: number) => void): void
```

Register a callback and when IME sends delete right event with length, the callback will be invoked.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deleteRight' | 是 | event type, fixed as 'deleteRight'. |
| callback | (length: number) => void | 是 | processes deleteRight command. The length of  delete is provided for this callback. Subscribers are expected to delete specified length of text  to the right of the cursor and update changes in editor by changeSelection and updateCursor as needed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
inputMethod.getController().on('deleteRight', (length: number) => {
  console.info(`Succeeded in subscribing deleteRight, length: ${length}`);
});

```

## on('sendKeyboardStatus')

```TypeScript
on(type: 'sendKeyboardStatus', callback: (keyboardStatus: KeyboardStatus) => void): void
```

Register a callback and when IME sends keyboard status, the callback will be invoked.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sendKeyboardStatus' | 是 | event type, fixed as 'sendKeyboardStatus'. |
| callback | (keyboardStatus: KeyboardStatus) => void | 是 | processes sendKeyboardStatus command.  The keyboardStatus is provided for this callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
inputMethod.getController().on('sendKeyboardStatus', (keyboardStatus: inputMethod.KeyboardStatus) => {
  console.info(`Succeeded in subscribing sendKeyboardStatus, keyboardStatus: ${keyboardStatus}`);
});

```

## on('sendFunctionKey')

```TypeScript
on(type: 'sendFunctionKey', callback: (functionKey: FunctionKey) => void): void
```

Register a callback and when IME sends functionKey, the callback will be invoked.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sendFunctionKey' | 是 | event type, fixed as 'sendFunctionKey'. |
| callback | (functionKey: FunctionKey) => void | 是 | processes sendFunctionKey command.  The functionKey is provided for this callback.Subscribers are expected to complete the  corresponding task based on the value of functionKey. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
inputMethod.getController().on('sendFunctionKey', (functionKey: inputMethod.FunctionKey) => {
  console.info(`Succeeded in subscribing sendFunctionKey, functionKey.enterKeyType: ${functionKey.enterKeyType}`);
});

```

## on('moveCursor')

```TypeScript
on(type: 'moveCursor', callback: (direction: Direction) => void): void
```

Register a callback and when IME sends move cursor, the callback will be invoked.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'moveCursor' | 是 | event type, fixed as 'moveCursor'. |
| callback | (direction: Direction) => void | 是 | processes moveCursor command. The direction of  cursor is provided for this callback. Subscribers are expected to move the cursor and update changes  in editor by changeSelection and updateCursor. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
inputMethod.getController().on('moveCursor', (direction: inputMethod.Direction) => {
  console.info(`Succeeded in subscribing moveCursor, direction: ${direction}`);
});

```

## on('handleExtendAction')

```TypeScript
on(type: 'handleExtendAction', callback: (action: ExtendAction) => void): void
```

Register a callback and when IME sends extend action code, the callback will be invoked.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'handleExtendAction' | 是 | event type, fixed as 'handleExtendAction'. |
| callback | (action: ExtendAction) => void | 是 | processes handleExtendAction command. The action code  is provided for this callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
inputMethod.getController().on('handleExtendAction', (action: inputMethod.ExtendAction) => {
  console.info(`Succeeded in subscribing handleExtendAction, action: ${action}`);
});

```

## on('getLeftTextOfCursor')

```TypeScript
on(type: 'getLeftTextOfCursor', callback: (length: number) => string): void
```

Register a callback and when input method ability gets left text of cursor, the callback will be invoked.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'getLeftTextOfCursor' | 是 | event type, fixed as 'getLeftTextOfCursor'. |
| callback | (length: number) => string | 是 | processes getLeftTextOfCursor command. The callback  must be a synchronization method and will block the input method application. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
inputMethod.getController().on('getLeftTextOfCursor', (length: number) => {
  console.info(`Succeeded in subscribing getLeftTextOfCursor, length: ${length}`);
  let text: string = "";
  return text;
});

```

## on('getRightTextOfCursor')

```TypeScript
on(type: 'getRightTextOfCursor', callback: (length: number) => string): void
```

Register a callback and when input method ability gets right text of cursor, the callback will be invoked.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'getRightTextOfCursor' | 是 | event type, fixed as 'getRightTextOfCursor'. |
| callback | (length: number) => string | 是 | processes getRightTextOfCursor command. The callback  must be a synchronization method and will block the input method application. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
inputMethod.getController().on('getRightTextOfCursor', (length: number) => {
  console.info(`Succeeded in subscribing getRightTextOfCursor, length: ${length}`);
  let text: string = "";
  return text;
});

```

## on('getTextIndexAtCursor')

```TypeScript
on(type: 'getTextIndexAtCursor', callback: () => number): void
```

Register a callback and when input method ability gets the text index at cursor, the callback will be invoked.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'getTextIndexAtCursor' | 是 | event type, fixed as 'getTextIndexAtCursor'. |
| callback | () => number | 是 | processes getTextIndexAtCursor command. The callback  must be a synchronization method, and should return the text index at the cursor. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
inputMethod.getController().on('getTextIndexAtCursor', () => {
  console.info(`Succeeded in subscribing getTextIndexAtCursor.`);
  let index: number = 0;
  return index;
});

```

## on('setPreviewText')

```TypeScript
on(type: 'setPreviewText', callback: SetPreviewTextCallback): void
```

<p>Subscribe 'setPreviewText' event.</p> <p>To support the preview text feature, developers should subscribe to this event before calling attach.</p>

**起始版本：** 17

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'setPreviewText' | 是 | the type of subscribe event. |
| callback | SetPreviewTextCallback | 是 | the callback of on('setPreviewText'). |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed. |

**示例：**

```TypeScript
let setPreviewTextCallback1: inputMethod.SetPreviewTextCallback = (text: string, range: inputMethod.Range): void => {
  console.info(`SetPreviewTextCallback1: Received text - ${text}, Received range - start: ${range.start}, end: ${range.end}`);
};

let setPreviewTextCallback2: inputMethod.SetPreviewTextCallback = (text: string, range: inputMethod.Range): void => {
  console.info(`setPreviewTextCallback2: Received text - ${text}, Received range - start: ${range.start}, end: ${range.end}`);
};

let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
inputMethodController.on('setPreviewText', setPreviewTextCallback1);
console.info(`SetPreviewTextCallback1 subscribed to setPreviewText`);
inputMethodController.on('setPreviewText', setPreviewTextCallback2);
console.info(`SetPreviewTextCallback2 subscribed to setPreviewText`);
// 仅取消setPreviewText的callback1的回调。
inputMethodController.off('setPreviewText', setPreviewTextCallback1);
console.info(`SetPreviewTextCallback1 unsubscribed from setPreviewText`);
// 取消setPreviewText的所有回调。
inputMethodController.off('setPreviewText');
console.info(`All callbacks unsubscribed from setPreviewText`);

```

## on('finishTextPreview')

```TypeScript
on(type: 'finishTextPreview', callback: Callback<void>): void
```

<p>Subscribe 'finishTextPreview' event.</p> <p>To support the preview text feature, developers should subscribe to this event before calling attach.</p>

**起始版本：** 17

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'finishTextPreview' | 是 | the type of subscribe event. |
| callback | Callback&lt;void> | 是 | the callback of on('finishTextPreview'). |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed. |

**示例：**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let finishTextPreviewCallback1: Callback<void> = (): void => {
  console.info(`FinishTextPreviewCallback1: finishTextPreview event triggered`);
};
let finishTextPreviewCallback2: Callback<void> = (): void => {
  console.info(`FinishTextPreviewCallback2: finishTextPreview event triggered`);
};

let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
inputMethodController.on('finishTextPreview', finishTextPreviewCallback1);
console.info(`FinishTextPreviewCallback1 subscribed to finishTextPreview`);
inputMethodController.on('finishTextPreview', finishTextPreviewCallback2);
console.info(`FinishTextPreviewCallback2 subscribed to finishTextPreview`);
// 仅取消finishTextPreview的callback1的回调。
inputMethodController.off('finishTextPreview', finishTextPreviewCallback1);
console.info(`FinishTextPreviewCallback1 unsubscribed from finishTextPreview`);
// 取消finishTextPreview的所有回调。
inputMethodController.off('finishTextPreview');
console.info(`All callbacks unsubscribed from finishTextPreview`);

```

## onDeleteLeft

```TypeScript
onDeleteLeft(callback: Callback<int>): void
```

Register a callback and when IME sends delete left event with length, the callback will be invoked.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | 是 | the callback called when the input method deletes text  to the left of the cursor. The length of delete is provided for this callback.  Subscribers are expected to delete specified length of text to the left of the cursor and  update changes in editor by changeSelection and updateCursor as needed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800009 | input method client detached. |

## onDeleteRight

```TypeScript
onDeleteRight(callback: Callback<int>): void
```

Register a callback and when IME sends delete right event with length, the callback will beinvoked.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | 是 | the callback called whenthe input method deletes text  to theright of the cursor. The length of delete is provided for this callback.  Subscribers are expected to delete specified length of text to the right of the cursor and  update changes in editor by changeSelection and updateCursor as needed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800009 | input method client detached. |

## onFinishTextPreview

```TypeScript
onFinishTextPreview(callback: Callback<void>): void
```

<p>Subscribe 'finishTextPreview' event.</p> <p>To support the preview text feature, developers should subscribe to this event before calling attach.</p>

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 | the callback called when the input method finishes text preview. |

## onGetLeftTextOfCursor

```TypeScript
onGetLeftTextOfCursor(callback: GetTextCallback): void
```

Register a callback and when input method ability gets left text of cursor, the callback will be invoked.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | GetTextCallback | 是 | the callback called when the input method gets text to the left  of the cursor. The callback must be a synchronization method and will block the input method application. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800009 | input method client detached. |

## onGetRightTextOfCursor

```TypeScript
onGetRightTextOfCursor(callback: GetTextCallback): void
```

Register a callback and when input method ability gets right text of cursor, the callback will be invoked.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | GetTextCallback | 是 | the callback called when the input method gets text to the right  of the cursor. The callback must be a synchronization method and will block the input method application. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800009 | input method client detached. |

## onGetTextIndexAtCursor

```TypeScript
onGetTextIndexAtCursor(callback: GetTextIndexAtCursorCallback): void
```

Register a callback and when input method ability gets the text index at cursor, the callback will be invoked.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | GetTextIndexAtCursorCallback | 是 | the callback called when input method the gets cursor index.  The callback must be a synchronization method, and should return the text index at the cursor. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800009 | input method client detached. |

## onHandleExtendAction

```TypeScript
onHandleExtendAction(callback: Callback<ExtendAction>): void
```

Register a callback and when IME sends extend action code, the callback will be invoked.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ExtendAction> | 是 | the callback called when the input method sends extend action. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800009 | input method client detached. |

## onInsertText

```TypeScript
onInsertText(callback: Callback<string>): void
```

Register a callback and when IME sends insert text event, the callback will be invoked.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | 是 | the callback called when the input method inserts text.  Subscribers are expected to process the inserted text and update changes in editor by  changeSelection and updateCursor as needed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800009 | input method client detached. |

## onMoveCursor

```TypeScript
onMoveCursor(callback: Callback<Direction>): void
```

Register a callback and when IME sends move cursor, the callback will be invoked.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Direction> | 是 | the callback called when the input method moves cursor.  The direction of cursor is provided for this callback. Subscribers are expected to move the cursor and  update changes in editor by changeSelection and updateCursor. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800009 | input method client detached. |

## onSelectByMovement

```TypeScript
onSelectByMovement(callback: Callback<Movement>): void
```

Register a callback and when IME sends select event witch movement of cursor, the callback will be invoked.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Movement> | 是 | the callback called when the input method selects text by movement.  The movement of the cursor is provided for this callback, and subscribers are expected to select  corresponding text in callback according to themovement. |

## onSelectByRange

```TypeScript
onSelectByRange(callback: Callback<Range>): void
```

Register a callback and when IME sends select event with range of selection, the callback will be invoked.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Range> | 是 | the callback called when the input method selects text by range.  The range of selection is provided for this callback, and subscribers are expected to select  corresponding text in callback according to the range. |

## onSendFunctionKey

```TypeScript
onSendFunctionKey(callback: Callback<FunctionKey>): void
```

Register a callback and whenIME sends functionKey, the callback will be invoked.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;FunctionKey> | 是 | the callback called when the input method send function key.  The functionKey is provided for this callback. Subscribers are expected to complete the  corresponding task based on the value of functionKey. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800009 | input method client detached. |

## onSendKeyboardStatus

```TypeScript
onSendKeyboardStatus(callback: Callback<KeyboardStatus>): void
```

Register a callback and when IME sends keyboard status, the callback will be invoked.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;KeyboardStatus> | 是 | the callback called when the input method send keyboard's status. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800009 | input method client detached. |

## onSetPreviewText

```TypeScript
onSetPreviewText(callback: SetPreviewTextCallback): void
```

<p>Subscribe 'setPreviewText' event.</p> <p>To support the preview text feature, developers should subscribe to this event before calling attach.</p>

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | SetPreviewTextCallback | 是 | the callback called when the input method setspreview text. |

## recvMessage

```TypeScript
recvMessage(msgHandler?: MessageHandler): void
```

Start receiving message from input method.

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| msgHandler | MessageHandler | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let messageHandler: inputMethod.MessageHandler = {
  onTerminated(): void {
    console.info('OnTerminated.');
  },
  onMessage(msgId: string, msgParam?: ArrayBuffer): void {
    console.info('recv message.');
  }
};
let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();
inputMethodController.recvMessage(messageHandler);
// 取消已注册的MessageHandler
inputMethodController.recvMessage();

```

## sendMessage

```TypeScript
sendMessage(msgId: string, msgParam?: ArrayBuffer): Promise<void>
```

Send message to input method.

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| msgId | string | 是 | the identifier of the message. Max size is 256B. |
| msgParam | ArrayBuffer | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Incorrect parameter types. 2. Incorrect parameter length. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800009 | input method client detached. |
| 12800014 | the input method is in basic mode. |
| 12800015 | the other side does not accept the request. |
| 12800016 | input method client is not editable. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let msgId: string = "testMsgId";
let msgParam: ArrayBuffer = new ArrayBuffer(128);
inputMethod.getController().sendMessage(msgId, msgParam).then(() => {
  console.info('Succeeded send message.');
}).catch((err: BusinessError) => {
  console.error(`Failed to send message, code: ${err.code}, message: ${err.message}`);
});

```

## setCallingWindow

```TypeScript
setCallingWindow(windowId: int, callback: AsyncCallback<void>): void
```

Inform the system of the window ID of the application currently bound to the input method. After the correct setting, the window where the client is located can avoid the input method window.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| windowId | int | 是 | the window ID of the application currently bound to the input method. |
| callback | AsyncCallback&lt;void> | 是 | the callback of setCallingWindow. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let windowId: number = 2000;
inputMethod.getController().setCallingWindow(windowId, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to setCallingWindow, code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in setting callingWindow.');
});

```

## setCallingWindow

```TypeScript
setCallingWindow(windowId: int): Promise<void>
```

Inform the system of the window ID of the application currently bound to the input method. After the correct setting, the window where the client is located can avoid the input method window.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| windowId | int | 是 | the window ID of the application currently bound to the input method. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let windowId: number = 2000;
inputMethod.getController().setCallingWindow(windowId).then(() => {
  console.info('Succeeded in setting callingWindow.');
}).catch((err: BusinessError) => {
  console.error(`Failed to setCallingWindow, code: ${err.code}, message: ${err.message}`);
});

```

## showSoftKeyboard

```TypeScript
showSoftKeyboard(callback: AsyncCallback<void>): void
```

Show soft keyboard. This API can be called only by system applications.

**起始版本：** 9

**需要权限：** 

 ohos.permission.CONNECT_IME_ABILITY

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | the callback of showSoftKeyboard. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permissions check fails. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getController().showSoftKeyboard((err: BusinessError) => {
  if (!err) {
    console.info('Succeeded in showing softKeyboard.');
  } else {
    console.error(`Failed to show softKeyboard, ${err.code}, message: ${err.message}`);
  }
});

```

## showSoftKeyboard

```TypeScript
showSoftKeyboard(): Promise<void>
```

Show soft keyboard. This API can be called only by system applications.

**起始版本：** 9

**需要权限：** 

 ohos.permission.CONNECT_IME_ABILITY

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permissions check fails. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getController().showSoftKeyboard().then(() => {
  console.info('Succeeded in showing softKeyboard.');
}).catch((err: BusinessError) => {
  console.error(`Failed to show softKeyboard, code: ${err.code}, message: ${err.message}`);
});

```

## showSoftKeyboard

```TypeScript
showSoftKeyboard(displayId: long): Promise<void>
```

Shows the soft keyboard on a specified screen. This API uses a promise to return the result. > **NOTE** > > This API can be called only when the edit box is attached to the input method. That is, it can be called to > show the soft keyboard only when the edit box is focused.

**起始版本：** 23

**需要权限：** 

 ohos.permission.CONNECT_IME_ABILITY

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayId | long | 是 | Display ID. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permissions check fails. |
| 202 | not system application. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let displayId: number = 20;
inputMethod.getController().showSoftKeyboard(displayId).then(() => {
  console.info('Succeeded in showing softKeyboard.');
}).catch((err: BusinessError) => {
  console.error(`Failed to show softKeyboard, code: ${err.code}, message: ${err.message}`);
});

```

## showTextInput

```TypeScript
showTextInput(callback: AsyncCallback<void>): void
```

Show the text input and start typing.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | the callback of showTextInput. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getController().showTextInput((err: BusinessError) => {
  if (err) {
    console.error(`Failed to showTextInput, code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in showing the inputMethod.');
});

```

## showTextInput

```TypeScript
showTextInput(): Promise<void>
```

Show the text input and start typing.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getController().showTextInput().then(() => {
  console.info('Succeeded in showing text input.');
}).catch((err: BusinessError) => {
  console.error(`Failed to showTextInput, code: ${err.code}, message: ${err.message}`);
});

```

## showTextInput

```TypeScript
showTextInput(requestKeyboardReason: RequestKeyboardReason): Promise<void>
```

Show the text input and start typing.

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| requestKeyboardReason | RequestKeyboardReason | 是 | requestKeyboardReason of show the keyboard . |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let requestKeyboardReason: inputMethod.RequestKeyboardReason = inputMethod.RequestKeyboardReason.MOUSE;

inputMethod.getController().showTextInput(requestKeyboardReason).then(() => {
  console.info('Succeeded in showing text input.');
}).catch((err: BusinessError) => {
  console.error(`Failed to showTextInput, code: ${err.code}, message: ${err.message}`);
});

```

## stopInput

```TypeScript
stopInput(callback: AsyncCallback<boolean>): void
```

Stop input

**起始版本：** 6

**废弃版本：** 9

**替代接口：** inputMethod.InputMethodController#stopInputSession

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | the callback of stopInput. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getController().stopInput((err: BusinessError, result: boolean) => {
  if (err) {
    console.error(`Failed to stopInput, code: ${err.code}, message: ${err.message}`);
    return;
  }
  if (result) {
    console.info('Succeeded in stopping input.');
  } else {
    console.error('Failed to stopInput.');
  }
});

```

## stopInput

```TypeScript
stopInput(): Promise<boolean>
```

Stop input

**起始版本：** 6

**废弃版本：** 9

**替代接口：** inputMethod.InputMethodController#stopInputSession

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | the promise returned by the function. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getController().stopInput().then((result: boolean) => {
  if (result) {
    console.info('Succeeded in stopping input.');
  } else {
    console.error('Failed to stopInput.');
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to stopInput, code: ${err.code}, message: ${err.message}`);
});

```

## stopInputSession

```TypeScript
stopInputSession(callback: AsyncCallback<boolean>): void
```

Stop input session

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | the callback of stopInputSession. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getController().stopInputSession((err: BusinessError, result: boolean) => {
  if (err) {
    console.error(`Failed to stopInputSession, code: ${err.code}, message: ${err.message}`);
    return;
  }
  if (result) {
    console.info('Succeeded in stopping inputSession.');
  } else {
    console.error('Failed to stopInputSession.');
  }
});

```

## stopInputSession

```TypeScript
stopInputSession(): Promise<boolean>
```

Stop input session

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethod.getController().stopInputSession().then((result: boolean) => {
  if (result) {
    console.info('Succeeded in stopping inputSession.');
  } else {
    console.error('Failed to stopInputSession.');
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to stopInputSession, code: ${err.code}, message: ${err.message}`);
});

```

## updateAttribute

```TypeScript
updateAttribute(attribute: InputAttribute, callback: AsyncCallback<void>): void
```

Update InputAttribute information of input text.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| attribute | InputAttribute | 是 | the InputAttribute object. |
| callback | AsyncCallback&lt;void> | 是 | the callback of updateAttribute. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let inputAttribute: inputMethod.InputAttribute = { textInputType: 0, enterKeyType: 1 };
inputMethod.getController().updateAttribute(inputAttribute, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to updateAttribute, code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in updating attribute.');
});

```

## updateAttribute

```TypeScript
updateAttribute(attribute: InputAttribute): Promise<void>
```

Update InputAttribute information of input text.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| attribute | InputAttribute | 是 | the InputAttribute object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let inputAttribute: inputMethod.InputAttribute = { textInputType: 0, enterKeyType: 1 };
inputMethod.getController().updateAttribute(inputAttribute).then(() => {
  console.info('Succeeded in updating attribute.');
}).catch((err: BusinessError) => {
  console.error(`Failed to updateAttribute, code: ${err.code}, message: ${err.message}`);
});

```

## updateCursor

```TypeScript
updateCursor(cursorInfo: CursorInfo, callback: AsyncCallback<void>): void
```

Update Cursor and notify the input method that the current application cursor has changed.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cursorInfo | CursorInfo | 是 | the CursorInfo object. |
| callback | AsyncCallback&lt;void> | 是 | the callback of updateCursor. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let cursorInfo: inputMethod.CursorInfo = {
  left: 0,
  top: 0,
  width: 600,
  height: 800
};
inputMethod.getController().updateCursor(cursorInfo, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to updateCursor, code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in updating cursorInfo.');
});


```

## updateCursor

```TypeScript
updateCursor(cursorInfo: CursorInfo): Promise<void>
```

Update Cursor and notify the input method that the current application cursor has changed.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cursorInfo | CursorInfo | 是 | the CursorInfo object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800009 | input method client detached. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let cursorInfo: inputMethod.CursorInfo = {
  left: 0,
  top: 0,
  width: 600,
  height: 800
};
inputMethod.getController().updateCursor(cursorInfo).then(() => {
  console.info('Succeeded in updating cursorInfo.');
}).catch((err: BusinessError) => {
  console.error(`Failed to updateCursor, code: ${err.code}, message: ${err.message}`);
});

```

