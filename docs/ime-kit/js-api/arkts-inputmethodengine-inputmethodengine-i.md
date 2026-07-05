# InputMethodEngine

In the following API examples, you must first use [getInputMethodEngine]inputMethodEngine.getInputMethodEngine to obtain an **InputMethodEngine** instance, and then call the APIs using the obtained instance.

**Since:** 8

**Deprecated since:** 23

**Substitute:** inputMethodEngine.InputMethodAbility

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

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

**Since:** 8

**Deprecated since:** 23

**Substitute:** inputMethodEngine.InputMethodAbility.off(type:

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'inputStart' | Yes | Event type, which is 'inputStart'. |
| callback | (kbController: KeyboardController, textInputClient: TextInputClient) => void | No | Callback to unregister. If this parameter is not specified, this API unregisters  all callbacks for the specified type. |

**Example**

```TypeScript
inputMethodEngine.getInputMethodEngine()
  .off('inputStart',
    (kbController: inputMethodEngine.KeyboardController, textClient: inputMethodEngine.TextInputClient) => {
      console.info('delete inputStart notification.');
    });

```

## off('keyboardShow' | 'keyboardHide')

```TypeScript
off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void): void
```

Disables listening for a keyboard visibility event. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 23

**Substitute:** inputMethodEngine.InputMethodAbility.off(type:

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardShow' \| 'keyboardHide' | Yes | Event type.  - The value 'keyboardShow' indicates the keyboard display event.  - The value 'keyboardHide' indicates the keyboard hiding event. |
| callback | () => void | No |  |

**Example**

```TypeScript
inputMethodEngine.getInputMethodEngine().off('keyboardShow');
inputMethodEngine.getInputMethodEngine().off('keyboardHide');

```

## off('keyboardShow' | 'keyboardHide')

```TypeScript
off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void): void
```

Disables listening for a keyboard visibility event. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 23

**Substitute:** inputMethodEngine.InputMethodAbility.off(type:

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardShow' \| 'keyboardHide' | Yes | Event type.  - The value 'keyboardShow' indicates the keyboard display event.  - The value 'keyboardHide' indicates the keyboard hiding event. |
| callback | () => void | No |  |

**Example**

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

**Since:** 8

**Deprecated since:** 23

**Substitute:** inputMethodEngine.InputMethodAbility.on(type:

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'inputStart' | Yes | Event type, which is 'inputStart'. |
| callback | (kbController: KeyboardController, textInputClient: TextInputClient) => void | Yes | Callback used to return the KeyboardController and TextInputClient  instances. |

**Example**

```TypeScript
inputMethodEngine.getInputMethodEngine()
  .on('inputStart',
    (kbController: inputMethodEngine.KeyboardController, textClient: inputMethodEngine.TextInputClient) => {
      let keyboardController: inputMethodEngine.KeyboardController = kbController;
      let textInputClient: inputMethodEngine.TextInputClient = textClient;
    });

```

## on('keyboardShow' | 'keyboardHide')

```TypeScript
on(type: 'keyboardShow' | 'keyboardHide', callback: () => void): void
```

Enables listening for a keyboard visibility event. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 23

**Substitute:** inputMethodEngine.InputMethodAbility.on(type:

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardShow' \| 'keyboardHide' | Yes | Event type.  - The value 'keyboardShow' indicates the keyboard display event.  - The value 'keyboardHide' indicates the keyboard hiding event. |
| callback | () => void | Yes | Callback used to return the result. |

**Example**

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

**Since:** 8

**Deprecated since:** 23

**Substitute:** inputMethodEngine.InputMethodAbility.on(type:

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardShow' \| 'keyboardHide' | Yes | Event type.  - The value 'keyboardShow' indicates the keyboard display event.  - The value 'keyboardHide' indicates the keyboard hiding event. |
| callback | () => void | Yes | Callback used to return the result. |

**Example**

```TypeScript
inputMethodEngine.getInputMethodEngine().on('keyboardShow', () => {
  console.info('inputMethodEngine keyboardShow.');
});
inputMethodEngine.getInputMethodEngine().on('keyboardHide', () => {
  console.info('inputMethodEngine keyboardHide.');
});

```

