# InputClient

You must first use [on('inputStart')]inputMethodEngine.InputMethodAbility. on(type: 'inputStart', callback: (kbController: KeyboardController, inputClient: InputClient) => void): void; to obtain a **InputClient** instance, and then use this instance to call the following APIs.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## deleteBackward

```TypeScript
deleteBackward(length: int, callback: AsyncCallback<boolean>): void
```

Deletes the fixed-length text after the cursor. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | int | 是 | Text length, which cannot be less than 0. |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is true. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800002 | input method engine error. Possible causes:  1.input method panel not created. 2.the input method application does not subscribe to related events. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let length: number = 1;
inputClient.deleteBackward(length, (err: BusinessError, result: boolean) => {
  if (err) {
    console.error(`Failed to deleteBackward. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  if (result) {
    console.info('Succeeded in deleting backward.');
  } else {
    console.error(`Failed to deleteBackward.`);
  }
});

```

## deleteBackward

```TypeScript
deleteBackward(length: int): Promise<boolean>
```

Deletes the fixed-length text after the cursor. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | int | 是 | Text length, which cannot be less than 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result. The value true means that the deletion is  successful, and false means the opposite. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800002 | input method engine error. Possible causes:  1.input method panel not created. 2.the input method application does not subscribe to related events. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let length: number = 1;
inputClient.deleteBackward(length).then((result: boolean) => {
  if (result) {
    console.info('Succeeded in deleting backward.');
  } else {
    console.error('Failed to deleteBackward.');
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to deleteBackward. Code is ${err.code}, message is ${err.message}`);
});

```

## deleteBackwardSync

```TypeScript
deleteBackwardSync(length: int): void
```

Deletes the fixed-length text after the cursor.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | int | 是 | Text length, which cannot be less than 0. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800002 | input method engine error. Possible causes:  1.input method panel not created. 2.the input method application does not subscribe to related events. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
let length: number = 1;
inputClient.deleteBackwardSync(length);

```

## deleteForward

```TypeScript
deleteForward(length: int, callback: AsyncCallback<boolean>): void
```

Deletes the fixed-length text before the cursor. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | int | 是 | Text length, which cannot be less than 0. |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is true. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800002 | input method engine error. Possible causes:  1.input method panel not created. 2.the input method application does not subscribe to related events. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let length: number = 1;
inputClient.deleteForward(length, (err: BusinessError, result: boolean) => {
  if (err) {
    console.error(`Failed to deleteForward. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  if (result) {
    console.info('Succeeded in deleting forward.');
  } else {
    console.error(`Failed to deleteForward.`);
  }
});

```

## deleteForward

```TypeScript
deleteForward(length: int): Promise<boolean>
```

Deletes the fixed-length text before the cursor. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | int | 是 | Text length, which cannot be less than 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result. The value true means that the deletion is  successful, and false means the opposite. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800002 | input method engine error. Possible causes:  1.input method panel not created. 2.the input method application does not subscribe to related events. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let length: number = 1;
inputClient.deleteForward(length).then((result: boolean) => {
  if (result) {
    console.info('Succeeded in deleting forward.');
  } else {
    console.error('Failed to delete Forward.');
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to deleteForward. Code is ${err.code}, message is ${err.message}`);
});

```

## deleteForwardSync

```TypeScript
deleteForwardSync(length: int): void
```

Deletes the fixed-length text before the cursor.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | int | 是 | Text length, which cannot be less than 0. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800002 | input method engine error. Possible causes:  1.input method panel not created. 2.the input method application does not subscribe to related events. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
let length: number = 1;
inputClient.deleteForwardSync(length);

```

## finishTextPreview

```TypeScript
finishTextPreview(): Promise<void>
```

Finishes the text preview. This API uses a promise to return the result. > **NOTE** > > If there is preview text in the current text box, calling this API will display the preview text on the screen.

**起始版本：** 12

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800011 | text preview not supported. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputClient.finishTextPreview().then(() => {
  console.info('Succeeded in finishing text preview.');
}).catch((err: BusinessError) => {
  console.error(`Failed to finishTextPreview. Code is ${err.code}, message is ${err.message}`);
});

```

## finishTextPreviewSync

```TypeScript
finishTextPreviewSync(): void
```

Finishes the text preview. > **NOTE** > > If there is preview text in the current text box, calling this API will display the preview text on the screen.

**起始版本：** 12

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800011 | text preview not supported. |

**示例：**

```TypeScript
inputClient.finishTextPreviewSync();

```

## getAttachOptions

```TypeScript
getAttachOptions(): AttachOptions
```

Obtains the additional options for binding an input method.

**起始版本：** 19

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AttachOptions | Additional options for binding an input method. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. [since 19 - 19] |

**示例：**

```TypeScript
let attachOptions: inputMethodEngine.AttachOptions = inputClient.getAttachOptions();
console.info(`Succeeded in getting AttachOptions, AttachOptions is ${attachOptions}`);

```

## getAttachOptions

```TypeScript
getAttachOptions(): AttachOptions | null
```

Get input attachOptions.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AttachOptions | return attach options. |

## getBackward

```TypeScript
getBackward(length: int, callback: AsyncCallback<string>): void
```

Obtains the specific-length text after the cursor. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | int | 是 | Text length, which cannot be less than 0. |
| callback | AsyncCallback&lt;string> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the obtained text. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800006 | input method controller error. Possible cause:  create InputMethodController object failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let length: number = 1;
inputClient.getBackward(length, (err: BusinessError, text: string) => {
  if (err) {
    console.error(`Failed to getBackward. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in getting backward, text: ' + text);
});

```

## getBackward

```TypeScript
getBackward(length: int): Promise<string>
```

Obtains the specific-length text after the cursor. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | int | 是 | Text length, which cannot be less than 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise used to return the specific-length text after the cursor. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800006 | input method controller error. Possible cause:  create InputMethodController object failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let length: number = 1;
inputClient.getBackward(length).then((text: string) => {
  console.info('Succeeded in getting backward, text: ' + text);
}).catch((err: BusinessError) => {
  console.error(`Failed to getBackward. Code is ${err.code}, message is ${err.message}`);
});

```

## getBackwardSync

```TypeScript
getBackwardSync(length: int): string
```

Obtains the specific-length text after the cursor.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | int | 是 | Text length, which cannot be less than 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Specific-length text after the cursor. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800006 | input method controller error. Possible cause:  create InputMethodController object failed. |

**示例：**

```TypeScript
let length: number = 1;
let text: string = inputClient.getBackwardSync(length);
console.info(`Succeeded in getting backward, text: ${text}`);

```

## getCallingWindowInfo

```TypeScript
getCallingWindowInfo(): Promise<WindowInfo>
```

Obtains information about the application window, in which the input box that starts an input method is located. This API uses a promise to return the result. > **NOTE** > > This API applies only to the input method applications that use [Panel]inputMethodEngine.Panel as the > soft keyboard window.

**起始版本：** 12

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;WindowInfo> | Promise used to return the information obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800012 | the input method panel does not exist. |
| 12800013 | window manager service error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputClient.getCallingWindowInfo().then((windowInfo: inputMethodEngine.WindowInfo) => {
  console.info(`windowInfo.rect: ${windowInfo.rect.left}, ${windowInfo.rect.top}, ${windowInfo.rect.width}, ${windowInfo.rect.height}`);
  console.info(`windowInfo.status: ${windowInfo.status}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to getCallingWindowInfo. Code is ${err.code}, message is ${err.message}`);
});

```

## getCallingWindowInfo

```TypeScript
getCallingWindowInfo(): Promise<WindowInfo | null>
```

Get info of the calling window.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;WindowInfo \| null> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800012 | the input method panel does not exist. |
| 12800013 | window manager service error. |

## getEditorAttribute

```TypeScript
getEditorAttribute(callback: AsyncCallback<EditorAttribute>): void
```

Obtains the attribute of the edit box. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;EditorAttribute> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the attribute of the edit box. Otherwise, err is an  error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

## getEditorAttribute

```TypeScript
getEditorAttribute(callback: AsyncCallback<EditorAttribute | null>): void
```

Get attribute about editor.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;EditorAttribute \| null> | 是 | the callback of getEditorAttribute. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

## getEditorAttribute

```TypeScript
getEditorAttribute(): Promise<EditorAttribute>
```

Obtains the attribute of the edit box. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;EditorAttribute> | Promise used to return the attribute of the edit box. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputClient.getEditorAttribute().then((editorAttribute: inputMethodEngine.EditorAttribute) => {
  console.info(`editorAttribute.inputPattern:  ${editorAttribute.inputPattern}`);
  console.info(`editorAttribute.enterKeyType:  ${editorAttribute.enterKeyType}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to getEditorAttribute. Code is ${err.code}, message is ${err.message}`);
});

```

## getEditorAttribute

```TypeScript
getEditorAttribute(): Promise<EditorAttribute | null>
```

Get attribute about editor.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;EditorAttribute \| null> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

## getEditorAttributeSync

```TypeScript
getEditorAttributeSync(): EditorAttribute
```

Obtains the attribute of the edit box.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| EditorAttribute | Attribute information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
let editorAttribute: inputMethodEngine.EditorAttribute = inputClient.getEditorAttributeSync();
console.info(`editorAttribute.inputPattern:  ${editorAttribute.inputPattern}`);
console.info(`editorAttribute.enterKeyType:  ${editorAttribute.enterKeyType}`);

```

## getEditorAttributeSync

```TypeScript
getEditorAttributeSync(): EditorAttribute | null
```

Get attribute about editor.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| EditorAttribute | the attribute of editor. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

## getForward

```TypeScript
getForward(length: int, callback: AsyncCallback<string>): void
```

Obtains the specific-length text before the cursor. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | int | 是 | Text length, which cannot be less than 0. |
| callback | AsyncCallback&lt;string> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the obtained text. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800006 | input method controller error. Possible cause:  create InputMethodController object failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let length: number = 1;
inputClient.getForward(length, (err: BusinessError, text: string) => {
  if (err) {
    console.error(`Failed to getForward. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in getting forward, text: ' + text);
});

```

## getForward

```TypeScript
getForward(length: int): Promise<string>
```

Obtains the specific-length text before the cursor. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | int | 是 | Text length, which cannot be less than 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise used to return the specific-length text before the cursor. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800006 | input method controller error. Possible cause:  create InputMethodController object failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let length: number = 1;
inputClient.getForward(length).then((text: string) => {
  console.info('Succeeded in getting forward, text: ' + text);
}).catch((err: BusinessError) => {
  console.error(`Failed to getForward. Code is ${err.code}, message is ${err.message}`);
});

```

## getForwardSync

```TypeScript
getForwardSync(length: int): string
```

Obtains the specific-length text before the cursor.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | int | 是 | Text length, which cannot be less than 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Specific-length text before the cursor. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800006 | input method controller error. Possible cause:  create InputMethodController object failed. |

**示例：**

```TypeScript
let length: number = 1;
let text: string = inputClient.getForwardSync(length);
console.info(`Succeeded in getting forward, text: ${text}`);

```

## getTextIndexAtCursor

```TypeScript
getTextIndexAtCursor(callback: AsyncCallback<int>): void
```

Obtains the index of the text where the cursor is located. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int> | 是 | Callback used to return the result. If the text index is obtained,  err is undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800006 | input method controller error. Possible cause:  create InputMethodController object failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputClient.getTextIndexAtCursor((err: BusinessError, index: number) => {
  if (err) {
    console.error(`Failed to getTextIndexAtCursor. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in getTextIndexAtCursor: ' + index);
});

```

## getTextIndexAtCursor

```TypeScript
getTextIndexAtCursor(): Promise<int>
```

Obtains the index of the text where the cursor is located. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800006 | input method controller error. Possible cause:  create InputMethodController object failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputClient.getTextIndexAtCursor().then((index: number) => {
  console.info('Succeeded in getTextIndexAtCursor: ' + index);
}).catch((err: BusinessError) => {
  console.error(`Failed to getTextIndexAtCursor. Code is ${err.code}, message is ${err.message}`);
});

```

## getTextIndexAtCursorSync

```TypeScript
getTextIndexAtCursorSync(): int
```

Obtains the index of the text where the cursor is located.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Index of the text where the cursor is located. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800006 | input method controller error. Possible cause:  create InputMethodController object failed. |

**示例：**

```TypeScript
let index: number = inputClient.getTextIndexAtCursorSync();
console.info(`Succeeded in getTextIndexAtCursorSync, index: ${index}`);

```

## insertText

```TypeScript
insertText(text: string, callback: AsyncCallback<boolean>): void
```

Inserts text. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Text to insert. |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is true. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800002 | input method engine error. Possible causes:  1.input method panel not created. 2.the input method application does not subscribe to related events. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';


inputClient.insertText('test', (err: BusinessError, result: boolean) => {
  if (err) {
    console.error(`Failed to insertText. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  if (result) {
    console.info('Succeeded in inserting text.');
  } else {
    console.error('Failed to insertText.');
  }
});

```

## insertText

```TypeScript
insertText(text: string): Promise<boolean>
```

Inserts text. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Text to insert. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result. The value true means that the insertion is  successful, and false means the opposite. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800002 | input method engine error. Possible causes:  1.input method panel not created. 2.the input method application does not subscribe to related events. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputClient.insertText('test').then((result: boolean) => {
  if (result) {
    console.info('Succeeded in inserting text.');
  } else {
    console.error('Failed to insertText.');
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to insertText. Code is ${err.code}, message is ${err.message}`);
});

```

## insertTextSync

```TypeScript
insertTextSync(text: string): void
```

Inserts text.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Text to insert. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800002 | input method engine error. Possible causes:  1.input method panel not created. 2.the input method application does not subscribe to related events. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
inputClient.insertTextSync('test');

```

## moveCursor

```TypeScript
moveCursor(direction: int, callback: AsyncCallback<void>): void
```

Moves the cursor. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| direction | int | 是 | Direction in which the cursor moves.  - 1: upward.  - 2: downward.  - 3: leftward.  - 4: rightward. which cannot be less than 0. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputClient.moveCursor(inputMethodEngine.Direction.CURSOR_UP, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to moveCursor. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in moving cursor.');
});

```

## moveCursor

```TypeScript
moveCursor(direction: int): Promise<void>
```

Moves the cursor. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| direction | int | 是 | Direction in which the cursor moves.  - 1: upward.  - 2: downward.  - 3: leftward.  - 4: rightward. which cannot be less than 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputClient.moveCursor(inputMethodEngine.Direction.CURSOR_UP).then(() => {
  console.info('Succeeded in moving cursor.');
}).catch((err: BusinessError) => {
  console.error(`Failed to moveCursor. Code is ${err.code}, message is ${err.message}`);
});

```

## moveCursorSync

```TypeScript
moveCursorSync(direction: int): void
```

Moves the cursor.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| direction | int | 是 | Direction in which the cursor moves.  - 1: upward.  - 2: downward.  - 3: leftward.  - 4: rightward. which cannot be less than 0. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
inputClient.moveCursorSync(inputMethodEngine.Direction.CURSOR_UP);

```

## off('attachOptionsDidChange')

```TypeScript
off(type: 'attachOptionsDidChange', callback?: Callback<AttachOptions>): void
```

Unsubscribes from the event indicating that additional options for binding an input method are changed. This API uses an asynchronous callback to return the result.

**起始版本：** 19

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'attachOptionsDidChange' | 是 | Additional option change event when the input method is bound. The  value is fixed to 'attachOptionsDidChange'. |
| callback | Callback&lt;AttachOptions> | 否 |  |

**示例：**

```TypeScript
let attachOptionsDidChangeCallback: (attachOptions: inputMethodEngine.AttachOptions) => void =
  (_attachOptions: inputMethodEngine.AttachOptions) => {
    console.info(`AttachOptionsDidChangeCallback1: attachOptionsDidChange event triggered`);
  };

inputClient.on('attachOptionsDidChange', attachOptionsDidChangeCallback);
console.info(`attachOptionsDidChangeCallback subscribed to attachOptionsDidChange`);
inputClient.off('attachOptionsDidChange', attachOptionsDidChangeCallback);
console.info(`attachOptionsDidChange unsubscribed from attachOptionsDidChange`);

```

## offAttachOptionsDidChange

```TypeScript
offAttachOptionsDidChange(callback?: Callback<AttachOptions>): void
```

Unsubscribe 'attachOptionsDidChange' event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AttachOptions> | 否 |  |

## on('attachOptionsDidChange')

```TypeScript
on(type: 'attachOptionsDidChange', callback: Callback<AttachOptions>): void
```

Subscribes to the event indicating that the additional options for binding an input method are changed. This API uses an asynchronous callback to return the result.

**起始版本：** 19

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'attachOptionsDidChange' | 是 | Additional option change event when the input method is bound. The  value is fixed to 'attachOptionsDidChange'. |
| callback | Callback&lt;AttachOptions> | 是 | Callback used to return the additional options for binding an input  method. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. [since 19 - 19] |

**示例：**

```TypeScript
// 创建附加选项变更回调函数
let attachOptionsDidChangeCallback: (attachOptions: inputMethodEngine.AttachOptions) => void =
  (_attachOptions: inputMethodEngine.AttachOptions) => {
    console.info(`AttachOptionsDidChangeCallback1: attachOptionsDidChange event triggered`);
  };

// 订阅绑定输入法时的附加选项变更事件
inputClient.on('attachOptionsDidChange', attachOptionsDidChangeCallback);
console.info(`attachOptionsDidChangeCallback subscribed to attachOptionsDidChange`);
// 取消订阅绑定输入法时的附加选项变更事件
inputClient.off('attachOptionsDidChange', attachOptionsDidChangeCallback);
console.info(`attachOptionsDidChange unsubscribed from attachOptionsDidChange`);

```

## onAttachOptionsDidChange

```TypeScript
onAttachOptionsDidChange(callback: Callback<AttachOptions>): void
```

Subscribe 'attachOptionsDidChange' event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AttachOptions> | 是 | the callback called when the attach options changed. |

## recvMessage

```TypeScript
recvMessage(msgHandler?: MessageHandler): void
```

Registers or unregisters MessageHandler. > **NOTE** > > The [MessageHandler]inputMethodEngine.MessageHandler object is globally unique. After multiple > registrations, only the last registered object is valid and retained, and the > [onTerminated]inputMethodEngine.MessageHandler.onTerminated() callback of the penultimate registered > object is triggered. > > If no parameter is set, unregister [MessageHandler]inputMethodEngine.MessageHandler. Its > [onTerminated]inputMethodEngine.MessageHandler.onTerminated() callback will be triggered.

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
inputMethodEngine.getInputMethodAbility()
  .on('inputStart',
    (kbController: inputMethodEngine.KeyboardController, client: inputMethodEngine.InputClient) => {
      // 创建消息处理器，用于接收编辑框应用发送的自定义通信数据
      let messageHandler: inputMethodEngine.MessageHandler = {
        onTerminated(): void {
          console.info('OnTerminated.');
        },
        onMessage(msgId: string, msgParam?: ArrayBuffer): void {
          console.info('recv message.');
        }
      }
      // 注册消息处理器
      client.recvMessage(messageHandler);
    });

```

## selectByMovement

```TypeScript
selectByMovement(movement: Movement, callback: AsyncCallback<void>): void
```

Selects text based on the cursor movement direction. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| movement | Movement | 是 | Direction in which the cursor moves when the text is selected. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the selection event is sent,  err is undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 设置选中时光标向上移动
// 设置选中时光标向上移动
let movement: inputMethodEngine.Movement = { direction: 1 };
inputClient.selectByMovement(movement, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to selectByMovement. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in selecting by movement.');
});

```

## selectByMovement

```TypeScript
selectByMovement(movement: Movement): Promise<void>
```

Selects text based on the cursor movement direction. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| movement | Movement | 是 | Direction in which the cursor moves when the text is selected. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 设置选中时光标向上移动
// 设置选中时光标向上移动
let movement: inputMethodEngine.Movement = { direction: 1 };
inputClient.selectByMovement(movement).then(() => {
  console.info('Succeeded in selecting by movement.');
}).catch((err: BusinessError) => {
  console.error(`Failed to selectByMovement. Code is ${err.code}, message is ${err.message}`);
});

```

## selectByMovementSync

```TypeScript
selectByMovementSync(movement: Movement): void
```

Selects text based on the cursor movement direction.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| movement | Movement | 是 | Direction in which the cursor moves when the text is selected. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
// 设置选中时光标向上移动
// 设置选中时光标向上移动
let movement: inputMethodEngine.Movement = { direction: 1 };
inputClient.selectByMovementSync(movement);

```

## selectByRange

```TypeScript
selectByRange(range: Range, callback: AsyncCallback<void>): void
```

Selects text based on the specified range. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| range | Range | 是 | Range of the selected text. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the selection event is sent,  err is undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 设置预上屏文本的替换范围为第一个字符
// 设置选中文本的起始和结束位置
// 设置预上屏文本的替换范围为第一个字符
// 设置选中文本的起始和结束位置
let range: inputMethodEngine.Range = { start: 0, end: 1 };
inputClient.selectByRange(range, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to selectByRange. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in selecting by range.');
});

```

## selectByRange

```TypeScript
selectByRange(range: Range): Promise<void>
```

Selects text based on the specified range. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| range | Range | 是 | Range of the selected text. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 设置预上屏文本的替换范围为第一个字符
// 设置选中文本的起始和结束位置
// 设置预上屏文本的替换范围为第一个字符
// 设置选中文本的起始和结束位置
let range: inputMethodEngine.Range = { start: 0, end: 1 };
inputClient.selectByRange(range).then(() => {
  console.info('Succeeded in selecting by range.');
}).catch((err: BusinessError) => {
  console.error(`Failed to selectByRange. Code is ${err.code}, message is ${err.message}`);
});

```

## selectByRangeSync

```TypeScript
selectByRangeSync(range: Range): void
```

Selects text based on the specified range.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| range | Range | 是 | Range of the selected text. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
// 设置预上屏文本的替换范围为第一个字符
// 设置选中文本的起始和结束位置
// 设置预上屏文本的替换范围为第一个字符
// 设置选中文本的起始和结束位置
let range: inputMethodEngine.Range = { start: 0, end: 1 };
inputClient.selectByRangeSync(range);

```

## sendExtendAction

```TypeScript
sendExtendAction(action: ExtendAction, callback: AsyncCallback<void>): void
```

Sends an extended edit action. This API uses an asynchronous callback to return the result. > **NOTE** > > The input method applications call this API to send extended edit actions to the edit box. The edit box listens > for the corresponding event using > [on('handleExtendAction')]@ohos.inputMethod:inputMethod.InputMethodController.on(type: 'handleExtendAction', callback: (action: ExtendAction) => void): void for further processing. > > When the edit box responds to the **PASTE** command of [ExtendAction]inputMethodEngine.ExtendAction, > the edit box application needs to apply for the > [ohos.permission.READ_PASTEBOARD](docroot://security/AccessToken/restricted-permissions.md#ohospermissionread_pasteboard) > permission.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| action | ExtendAction | 是 | Extended edit action to send. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800006 | input method controller error. Possible cause:  create InputMethodController object failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputClient.sendExtendAction(inputMethodEngine.ExtendAction.COPY, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to sendExtendAction. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in sending extend action.');
});

```

## sendExtendAction

```TypeScript
sendExtendAction(action: ExtendAction): Promise<void>
```

Sends an extended edit action. This API uses a promise to return the result. > **NOTE** > > The input method applications call this API to send extended edit actions to the edit box. The edit box listens > for the corresponding event using > [on('handleExtendAction')]@ohos.inputMethod:inputMethod.InputMethodController.on(type: 'handleExtendAction', callback: (action: ExtendAction) => void): void; for > further processing. > > When the edit box responds to the **PASTE** command of [ExtendAction]inputMethodEngine.ExtendAction, > the edit box application needs to apply for the > [ohos.permission.READ_PASTEBOARD](docroot://security/AccessToken/restricted-permissions.md#ohospermissionread_pasteboard) > permission.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| action | ExtendAction | 是 | Extended edit action to send. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800006 | input method controller error. Possible cause:  create InputMethodController object failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputClient.sendExtendAction(inputMethodEngine.ExtendAction.COPY).then(() => {
  console.info('Succeeded in sending extend action.');
}).catch((err: BusinessError) => {
  console.error(`Failed to sendExtendAction. Code is ${err.code}, message is ${err.message}`);
});

```

## sendKeyFunction

```TypeScript
sendKeyFunction(action: int, callback: AsyncCallback<boolean>): void
```

Sends the function key. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| action | int | 是 | Action of the function key.  - 0: invalid key.  - 1: confirm key (Enter key). |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is true. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let action: number = 1;

inputClient.sendKeyFunction(action, (err: BusinessError, result: boolean) => {
  if (err) {
    console.error(`Failed to sendKeyFunction. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  if (result) {
    console.info('Succeeded in sending key function.');
  } else {
    console.error('Failed to sendKeyFunction.');
  }
});

```

## sendKeyFunction

```TypeScript
sendKeyFunction(action: int): Promise<boolean>
```

Sends the function key. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| action | int | 是 | Action of the function key.  0: invalid key.  1: confirm key (Enter key). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result. The value true means that the operation is  successful, and false means the opposite. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let action: number = 1;
inputClient.sendKeyFunction(action).then((result: boolean) => {
  if (result) {
    console.info('Succeeded in sending key function.');
  } else {
    console.error('Failed to sendKeyFunction.');
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to sendKeyFunction. Code is ${err.code}, message is ${err.message}`);
});

```

## sendMessage

```TypeScript
sendMessage(msgId: string, msgParam?: ArrayBuffer): Promise<void>
```

Sends the custom communication to the edit box application attached to the input method application. This API uses a promise to return the result. > **NOTE** > > This API can be called only when the edit box is attached to the input method and enter the edit mode, and the > input method application is in full experience mode. > > The maximum length of **msgId** is 256 B, and the maximum length of **msgParam** is 128 KB.

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| msgId | string | 是 | Identifier of the custom data to be sent to the edit box application attached to the  input method application. |
| msgParam | ArrayBuffer | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

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
inputClient.sendMessage(msgId, msgParam).then(() => {
  console.info('Succeeded send message.');
}).catch((err: BusinessError) => {
  console.error(`Failed to send message. Code is ${err.code}, message is ${err.message}`);
});

```

## sendPrivateCommand

```TypeScript
sendPrivateCommand(commandData: Record<string, CommandDataType>): Promise<void>
```

Sends private data to the system component that needs to communicate with the input method application. This API uses a promise to return the result. > **NOTE** > > - The private data channel allows communication between the system preset input method application and specific > system components (such as a text box or a home screen application). It is usually used to implement custom > input on a specific device. > > - The total size of the private data is 32 KB, and the maximum number of private data records is 5.

**起始版本：** 12

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| commandData | Record&lt;string, CommandDataType> | 是 | Private data to send. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800010 | not the preconfigured default input method. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

inputMethodEngine.getInputMethodAbility().on('inputStart', (kbController, textInputClient) => {
  let record: Record<string, inputMethodEngine.CommandDataType> = {
    "valueString1": "abcdefg",
    "valueString2": true,
    "valueString3": 500,
  }
  textInputClient.sendPrivateCommand(record).then(() => {
  }).catch((err: BusinessError) => {
    if (err) {
      console.error(`sendPrivateCommand catch error: ${err.code}, message: ${err.message}`);
    }
  });
})

```

## setPreviewText

```TypeScript
setPreviewText(text: string, range: Range): Promise<void>
```

Sets the preview text. This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Preview text to set. |
| range | Range | 是 | Range of the preview text.  - If the value is { start: -1, end: -1 }, text  replaces the entire text in the current preview area by default.  - If start is equal to end,  text is inserted into the cursor position specified by start.  - If start is not equal to end, text replaces the text of the specified range.  - If the values of start and end are negative values, a parameter error is returned.  - If there is preview text in the text box, the value of  range cannot exceed the range of the preview text. Otherwise, a parameter error is returned.  - If there is no preview text in the text box, the value of range cannot exceed the text range of  the text box. Otherwise, a parameter error is returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800011 | text preview not supported. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 设置预上屏文本的替换范围为第一个字符
// 设置选中文本的起始和结束位置
// 设置预上屏文本的替换范围为第一个字符
// 设置选中文本的起始和结束位置
let range: inputMethodEngine.Range = { start: 0, end: 1 };
inputClient.setPreviewText('test', range).then(() => {
  console.info('Succeeded in setting preview text.');
}).catch((err: BusinessError) => {
  console.error(`Failed to setPreviewText. Code is ${err.code}, message is ${err.message}`);
});

```

## setPreviewTextSync

```TypeScript
setPreviewTextSync(text: string, range: Range): void
```

Sets the preview text.

**起始版本：** 12

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Preview text to set. |
| range | Range | 是 | Range of the preview text.  - If the value is { start: -1, end: -1 }, text  replaces the entire text in the current preview area by default.  - If start is equal to end,  text is inserted into the cursor position specified by start.  - If start is not equal to  end, text replaces the text of the specified range.  - If the values of start and end are negative values, a parameter error is returned.  - If there is preview text in the text box, the value of  range cannot exceed the range of the preview text. Otherwise, a parameter error is returned.  - If there is no preview text in the text box, the value of range cannot exceed the text range of  the text box. Otherwise, a parameter error is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800003 | input method client error. Possible causes:  1.the edit box is not focused. 2.no edit box is bound to current input method application.  3.ipc failed due to the large amount of data transferred or other reasons. |
| 12800011 | text preview not supported. |

**示例：**

```TypeScript
// 设置预上屏文本的替换范围为第一个字符
// 设置选中文本的起始和结束位置
// 设置预上屏文本的替换范围为第一个字符
// 设置选中文本的起始和结束位置
let range: inputMethodEngine.Range = { start: 0, end: 1 };
inputClient.setPreviewTextSync('test', range);

```

