# TextInputClient

In the following API examples, you must first use [on('inputStart')]inputMethodEngine.InputMethodEngine.on(type: 'inputStart', callback: (kbController: KeyboardController, textInputClient: TextInputClient) => void): void; to obtain a **TextInputClient** instance, and then call the APIs using the obtained instance.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.InputClient

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## deleteBackward

```TypeScript
deleteBackward(length: number, callback: AsyncCallback<boolean>): void
```

Deletes the fixed-length text after the cursor. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.InputClient.deleteBackward(length:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | number | 是 | Text length, which cannot be less than 0. |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is true. Otherwise, err is an error object. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let length: number = 1;
textInputClient.deleteBackward(length, (err: BusinessError, result: boolean) => {
  if (err) {
    console.error(`Failed to deleteBackward. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  if (result) {
    console.info('Succeeded in deleting backward.');
  } else {
    console.error('Failed to deleteBackward.');
  }
});

```

## deleteBackward

```TypeScript
deleteBackward(length: number): Promise<boolean>
```

Deletes the fixed-length text after the cursor. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.InputClient.deleteBackward(length:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | number | 是 | Text length, which cannot be less than 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result. The value true means that the deletion is  successful, and false means the opposite. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let length: number = 1;
textInputClient.deleteBackward(length).then((result: boolean) => {
  if (result) {
    console.info('Succeeded in deleting backward.');
  } else {
    console.error('Failed to deleteBackward.');
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to deleteBackward. Code is ${err.code}, message is ${err.message}`);
});

```

## deleteForward

```TypeScript
deleteForward(length: number, callback: AsyncCallback<boolean>): void
```

Deletes the fixed-length text before the cursor. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.InputClient.deleteForward(length:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | number | 是 | Text length, which cannot be less than 0. |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is true. Otherwise, err is an error object. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let length: number = 1;
textInputClient.deleteForward(length, (err: BusinessError, result: boolean) => {
  if (err) {
    console.error(`Failed to deleteForward. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  if (result) {
    console.info('Succeeded in deleting forward.');
  } else {
    console.error('Failed to deleteForward.');
  }
});

```

## deleteForward

```TypeScript
deleteForward(length: number): Promise<boolean>
```

Deletes the fixed-length text before the cursor. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.InputClient.deleteForward(length:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | number | 是 | Text length, which cannot be less than 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result. The value true means that the deletion is  successful, and false means the opposite. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let length: number = 1;
textInputClient.deleteForward(length).then((result: boolean) => {
  if (result) {
    console.info('Succeeded in deleting forward.');
  } else {
    console.error('Failed to delete forward.');
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to deleteForward. Code is ${err.code}, message is ${err.message}`);
});

```

## getBackward

```TypeScript
getBackward(length: number, callback: AsyncCallback<string>): void
```

Obtains the specific-length text after the cursor. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.InputClient.getBackward(length:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | number | 是 | Text length, which cannot be less than 0. |
| callback | AsyncCallback&lt;string> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the obtained text. Otherwise, err is an error object. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let length: number = 1;
textInputClient.getBackward(length, (err: BusinessError, text: string) => {
  if (err) {
    console.error(`Failed to getBackward. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in getting backward, text: ' + text);
});

```

## getBackward

```TypeScript
getBackward(length: number): Promise<string>
```

Obtains the specific-length text after the cursor. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.InputClient.getBackward(length:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | number | 是 | Text length, which cannot be less than 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise used to return the specific-length text after the cursor. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let length: number = 1;
textInputClient.getBackward(length).then((text: string) => {
  console.info(`'Succeeded in getting backward: ${text}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to getBackward. Code is ${err.code}, message is ${err.message}`);
});

```

## getEditorAttribute

```TypeScript
getEditorAttribute(callback: AsyncCallback<EditorAttribute>): void
```

Obtains the attribute of the edit box. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.InputClient.getEditorAttribute(callback:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;EditorAttribute> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the attribute of the edit box. Otherwise, err is an  error object. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';


textInputClient.getEditorAttribute((err: BusinessError,
  editorAttribute: inputMethodEngine.EditorAttribute) => {
  if (err) {
    console.error(`Failed to getEditorAttribute. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info(`editorAttribute.inputPattern: ${editorAttribute.inputPattern}`);
  console.info(`editorAttribute.enterKeyType: ${editorAttribute.enterKeyType}`);
});

```

## getEditorAttribute

```TypeScript
getEditorAttribute(): Promise<EditorAttribute>
```

Obtains the attribute of the edit box. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.InputClient.getEditorAttribute(callback:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;EditorAttribute> | Promise used to return the attribute of the edit box. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

textInputClient.getEditorAttribute().then((editorAttribute: inputMethodEngine.EditorAttribute) => {
  console.info(`editorAttribute.inputPattern: ${editorAttribute.inputPattern}`);
  console.info(`editorAttribute.enterKeyType: ${editorAttribute.enterKeyType}}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to getEditorAttribute. Code is ${err.code}, message is ${err.message}`);
});

```

## getForward

```TypeScript
getForward(length: number, callback: AsyncCallback<string>): void
```

Obtains the specific-length text before the cursor. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.InputClient.getForward(length:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | number | 是 | Text length, which cannot be less than 0. |
| callback | AsyncCallback&lt;string> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the obtained text. Otherwise, err is an error object. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let length: number = 1;
textInputClient.getForward(length, (err: BusinessError, text: string) => {
  if (err) {
    console.error(`Failed to getForward. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in getting forward, text: ' + text);
});

```

## getForward

```TypeScript
getForward(length: number): Promise<string>
```

Obtains the specific-length text before the cursor. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.InputClient.getForward(length:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | number | 是 | Text length, which cannot be less than 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise used to return the specific-length text before the cursor. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let length: number = 1;
textInputClient.getForward(length).then((text: string) => {
  console.info('Succeeded in getting forward, text: ' + text);
}).catch((err: BusinessError) => {
  console.error(`Failed to getForward. Code is ${err.code}, message is ${err.message}`);
});

```

## insertText

```TypeScript
insertText(text: string, callback: AsyncCallback<boolean>): void
```

Inserts text. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.InputClient.insertText(text:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Text to insert. |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is true. Otherwise, err is an error object. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

textInputClient.insertText('test', (err: BusinessError, result: boolean) => {
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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.InputClient.insertText(text:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Text to insert. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result. The value true means that the insertion is  successful, and false means the opposite. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

textInputClient.insertText('test').then((result: boolean) => {
  if (result) {
    console.info('Succeeded in inserting text.');
  } else {
    console.error('Failed to insertText.');
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to insertText. Code is ${err.code}, message is ${err.message}`);
});

```

## sendKeyFunction

```TypeScript
sendKeyFunction(action: number, callback: AsyncCallback<boolean>): void
```

Sends the function key. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.InputClient.sendKeyFunction(action:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| action | number | 是 | Action of the function key.  - 0: invalid key.  - 1: confirm key (Enter key). |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is true. Otherwise, err is an error object. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let action: number = 1;
textInputClient.sendKeyFunction(action, (err: BusinessError, result: boolean) => {
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
sendKeyFunction(action: number): Promise<boolean>
```

Sends the function key. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.InputClient.sendKeyFunction(action:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| action | number | 是 | Action of the function key.  0: invalid key.  1: confirm key (Enter key). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result. The value true means that the setting is  successful, and false means the opposite. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let action: number = 1;
textInputClient.sendKeyFunction(action).then((result: boolean) => {
  if (result) {
    console.info('Succeeded in sending key function.');
  } else {
    console.error('Failed to sendKeyFunction.');
  }
}).catch((err: BusinessError) => {
  console.error(`Failed to sendKeyFunction:. Code is ${err.code}, message is ${err.message}`);
});

```

