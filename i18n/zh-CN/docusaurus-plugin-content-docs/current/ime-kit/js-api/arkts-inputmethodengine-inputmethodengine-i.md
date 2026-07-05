# InputMethodEngine

In the following API examples, you must first use [getInputMethodEngine]inputMethodEngine.getInputMethodEngine to obtain an **InputMethodEngine** instance, and then call the APIs using the obtained instance.

**起始版本：** 8

**废弃版本：** 23

**替代接口：** inputMethodEngine.InputMethodAbility

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## off('inputStart')

```TypeScript
off(
      type: 'inputStart',
      callback?: (kbController: KeyboardController, textInputClient: TextInputClient) => void
    ): void
```

Disables listening for the input method binding event.

**起始版本：** 8

**废弃版本：** 23

**替代接口：** inputMethodEngine.InputMethodAbility.off(type:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'inputStart' | 是 | Event type, which is 'inputStart'. |
| callback | (kbController: KeyboardController, textInputClient: TextInputClient) => void | 否 | Callback to unregister. If this parameter is not specified, this API unregisters  all callbacks for the specified type. |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodEngine()
  .off('inputStart',
    (_kbController: inputMethodEngine.KeyboardController, _textClient: inputMethodEngine.TextInputClient) => {
      console.info('delete inputStart notification.');
    });

```

## off('keyboardShow' | 'keyboardHide')

```TypeScript
off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void): void
```

Disables listening for a keyboard visibility event. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 23

**替代接口：** inputMethodEngine.InputMethodAbility.off(type:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardShow' \| 'keyboardHide' | 是 | Event type.  - The value 'keyboardShow' indicates the keyboard display event.  - The value 'keyboardHide' indicates the keyboard hiding event. |
| callback | () => void | 否 |  |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodEngine().off('keyboardShow');
inputMethodEngine.getInputMethodEngine().off('keyboardHide');

```

## off('keyboardShow' | 'keyboardHide')

```TypeScript
off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void): void
```

Disables listening for a keyboard visibility event. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 23

**替代接口：** inputMethodEngine.InputMethodAbility.off(type:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardShow' \| 'keyboardHide' | 是 | Event type.  - The value 'keyboardShow' indicates the keyboard display event.  - The value 'keyboardHide' indicates the keyboard hiding event. |
| callback | () => void | 否 |  |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodEngine().off('keyboardShow');
inputMethodEngine.getInputMethodEngine().off('keyboardHide');

```

## on('inputStart')

```TypeScript
on(
      type: 'inputStart',
      callback: (kbController: KeyboardController, textInputClient: TextInputClient) => void
    ): void
```

Enables listening for the input method binding event. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 23

**替代接口：** inputMethodEngine.InputMethodAbility.on(type:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'inputStart' | 是 | Event type, which is 'inputStart'. |
| callback | (kbController: KeyboardController, textInputClient: TextInputClient) => void | 是 | Callback used to return the KeyboardController and TextInputClient  instances. |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodEngine()
  .on('inputStart',
    (keyboardController: inputMethodEngine.KeyboardController, textInputClient: inputMethodEngine.TextInputClient) => {
      // 使用kbController和textClient进行相关操作
    });

```

## on('keyboardShow' | 'keyboardHide')

```TypeScript
on(type: 'keyboardShow' | 'keyboardHide', callback: () => void): void
```

Enables listening for a keyboard visibility event. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 23

**替代接口：** inputMethodEngine.InputMethodAbility.on(type:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardShow' \| 'keyboardHide' | 是 | Event type.  - The value 'keyboardShow' indicates the keyboard display event.  - The value 'keyboardHide' indicates the keyboard hiding event. |
| callback | () => void | 是 | Callback used to return the result. |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodEngine().on('keyboardShow', () => {
  console.info('inputMethodEngine keyboardShow.');
});
inputMethodEngine.getInputMethodEngine().on('keyboardHide', () => {
  console.info('inputMethodEngine keyboardHide.');
});

```

## on('keyboardShow' | 'keyboardHide')

```TypeScript
on(type: 'keyboardShow' | 'keyboardHide', callback: () => void): void
```

Enables listening for a keyboard visibility event. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 23

**替代接口：** inputMethodEngine.InputMethodAbility.on(type:

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardShow' \| 'keyboardHide' | 是 | Event type.  - The value 'keyboardShow' indicates the keyboard display event.  - The value 'keyboardHide' indicates the keyboard hiding event. |
| callback | () => void | 是 | Callback used to return the result. |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodEngine().on('keyboardShow', () => {
  console.info('inputMethodEngine keyboardShow.');
});
inputMethodEngine.getInputMethodEngine().on('keyboardHide', () => {
  console.info('inputMethodEngine keyboardHide.');
});

```

