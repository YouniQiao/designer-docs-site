# KeyboardDelegate

In the following API examples, you must first use [getKeyboardDelegate]inputMethodEngine.getKeyboardDelegate() to obtain a **KeyboardDelegate** instance, and then call the APIs using the obtained instance.

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## off('keyDown' | 'keyUp')

```TypeScript
off(type: 'keyDown' | 'keyUp', callback?: (event: KeyEvent) => boolean): void
```

Disables listening for a physical keyboard event. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyDown' \| 'keyUp' | Yes | Event type.  - The value 'keyDown' indicates the keydown event.  - The value 'keyUp' indicates the keyup event. |
| callback | (event: KeyEvent) => boolean | No |  |

**Example**

```TypeScript
inputMethodEngine.getKeyboardDelegate().off('keyUp', (keyEvent: inputMethodEngine.KeyEvent) => {
  console.info('delete keyUp notification.');
  return true;
});
inputMethodEngine.getKeyboardDelegate().off('keyDown', (keyEvent: inputMethodEngine.KeyEvent) => {
  console.info('delete keyDown notification.');
  return true;
});

```

## off('keyDown' | 'keyUp')

```TypeScript
off(type: 'keyDown' | 'keyUp', callback?: (event: KeyEvent) => boolean): void
```

Disables listening for a physical keyboard event. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyDown' \| 'keyUp' | Yes | Event type.  - The value 'keyDown' indicates the keydown event.  - The value 'keyUp' indicates the keyup event. |
| callback | (event: KeyEvent) => boolean | No |  |

**Example**

```TypeScript
inputMethodEngine.getKeyboardDelegate().off('keyUp', (keyEvent: inputMethodEngine.KeyEvent) => {
  console.info('delete keyUp notification.');
  return true;
});
inputMethodEngine.getKeyboardDelegate().off('keyDown', (keyEvent: inputMethodEngine.KeyEvent) => {
  console.info('delete keyDown notification.');
  return true;
});

```

## off('keyEvent')

```TypeScript
off(type: 'keyEvent', callback?: (event: InputKeyEvent) => boolean): void
```

Disables listening for a keyboard event. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyEvent' | Yes | Event type, which is 'keyEvent'. |
| callback | (event: InputKeyEvent) => boolean | No |  |

**Example**

```TypeScript
import type { KeyEvent } from '@kit.InputKit';

inputMethodEngine.getKeyboardDelegate().off('keyEvent', (keyEvent: KeyEvent) => {
  console.info('This is a callback function which will be deregistered.');
  return true;
});
inputMethodEngine.getKeyboardDelegate().off('keyEvent');

```

## off('cursorContextChange')

```TypeScript
off(type: 'cursorContextChange', callback?: (x: number, y: number, height: number) => void): void
```

Disables listening for cursor context changes. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cursorContextChange' | Yes | Event type, which is 'cursorContextChange'. |
| callback | (x: number, y: number, height: number) => void | No |  |

**Example**

```TypeScript
inputMethodEngine.getKeyboardDelegate().off('cursorContextChange', (x: number, y: number, height: number) => {
  console.info('delete cursorContextChange notification.');
});

```

## off('selectionChange')

```TypeScript
off(
      type: 'selectionChange',
      callback?: (oldBegin: number, oldEnd: number, newBegin: number, newEnd: number) => void
    ): void
```

Disables listening for the text selection change event. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'selectionChange' | Yes | Event type, which is 'selectionChange'. |
| callback | (oldBegin: number, oldEnd: number, newBegin: number, newEnd: number) => void | No |  |

**Example**

```TypeScript
inputMethodEngine.getKeyboardDelegate()
  .off('selectionChange', (oldBegin: number, oldEnd: number, newBegin: number, newEnd: number) => {
    console.info('delete selectionChange notification.');
  });

```

## off('textChange')

```TypeScript
off(type: 'textChange', callback?: (text: string) => void): void
```

Disables listening for the text change event. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'textChange' | Yes | Event type, which is 'textChange'. |
| callback | (text: string) => void | No |  |

**Example**

```TypeScript
inputMethodEngine.getKeyboardDelegate().off('textChange', (text: string) => {
  console.info('delete textChange notification. text:' + text);
});

```

## off('editorAttributeChanged')

```TypeScript
off(type: 'editorAttributeChanged', callback?: (attr: EditorAttribute) => void): void
```

Disables listening for the edit box attribute change event. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'editorAttributeChanged' | Yes | Event type, which is 'editorAttributeChanged'. |
| callback | (attr: EditorAttribute) => void | No |  |

**Example**

```TypeScript
inputMethodEngine.getKeyboardDelegate().off('editorAttributeChanged');

```

## offCursorContextChange

```TypeScript
offCursorContextChange(callback?: CursorContextChangeCallback): void
```

Unsubscribe cursor context change.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | CursorContextChangeCallback | No |  |

## offEditorAttributeChanged

```TypeScript
offEditorAttributeChanged(callback?: Callback<EditorAttribute>): void
```

Unsubscribe input text attribute change.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;EditorAttribute> | No |  |

## offKeyDown

```TypeScript
offKeyDown(callback?: KeyEventCallback): void
```

Unsubscribe key down event

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | KeyEventCallback | No |  |

## offKeyEvent

```TypeScript
offKeyEvent(callback?: InputKeyEventCallback): void
```

Unsubscribe key event.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | InputKeyEventCallback | No |  |

## offKeyUp

```TypeScript
offKeyUp(callback?: KeyEventCallback): void
```

Unsubscribe key up event

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | KeyEventCallback | No |  |

## offSelectionChange

```TypeScript
offSelectionChange(callback?: SelectionChangeCallback): void
```

Unsubscribe selection change.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | SelectionChangeCallback | No |  |

## offTextChange

```TypeScript
offTextChange(callback?: Callback<string>): void
```

Unsubscribe text change.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | No |  |

## on('keyDown' | 'keyUp')

```TypeScript
on(type: 'keyDown' | 'keyUp', callback: (event: KeyEvent) => boolean): void
```

Enables listening for a physical keyboard event. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyDown' \| 'keyUp' | Yes | Event type.  - The value 'keyDown' indicates the keydown event.  - The value 'keyUp' indicates the keyup event. |
| callback | (event: KeyEvent) => boolean | Yes | Callback used to return the key information. If the event is consumed by the event  subscriber, true is returned. Otherwise, false is returned. |

**Example**

```TypeScript
inputMethodEngine.getKeyboardDelegate().on('keyUp', (keyEvent: inputMethodEngine.KeyEvent) => {
  console.info(`inputMethodEngine keyCode.(keyUp): ${keyEvent.keyCode}`);
  console.info(`inputMethodEngine keyAction.(keyUp): ${keyEvent.keyAction}`);
  return true;
});
inputMethodEngine.getKeyboardDelegate().on('keyDown', (keyEvent: inputMethodEngine.KeyEvent) => {
  console.info(`inputMethodEngine keyCode.(keyDown): ${keyEvent.keyCode}`);
  console.info(`inputMethodEngine keyAction.(keyDown): ${keyEvent.keyAction}`);
  return true;
});

```

## on('keyDown' | 'keyUp')

```TypeScript
on(type: 'keyDown' | 'keyUp', callback: (event: KeyEvent) => boolean): void
```

Enables listening for a physical keyboard event. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyDown' \| 'keyUp' | Yes | Event type.  - The value 'keyDown' indicates the keydown event.  - The value 'keyUp' indicates the keyup event. |
| callback | (event: KeyEvent) => boolean | Yes | Callback used to return the key information. If the event is consumed by the event  subscriber, true is returned. Otherwise, false is returned. |

**Example**

```TypeScript
inputMethodEngine.getKeyboardDelegate().on('keyUp', (keyEvent: inputMethodEngine.KeyEvent) => {
  console.info(`inputMethodEngine keyCode.(keyUp): ${keyEvent.keyCode}`);
  console.info(`inputMethodEngine keyAction.(keyUp): ${keyEvent.keyAction}`);
  return true;
});
inputMethodEngine.getKeyboardDelegate().on('keyDown', (keyEvent: inputMethodEngine.KeyEvent) => {
  console.info(`inputMethodEngine keyCode.(keyDown): ${keyEvent.keyCode}`);
  console.info(`inputMethodEngine keyAction.(keyDown): ${keyEvent.keyAction}`);
  return true;
});

```

## on('keyEvent')

```TypeScript
on(type: 'keyEvent', callback: (event: InputKeyEvent) => boolean): void
```

Enables listening for a keyboard event. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyEvent' | Yes | Event type, which is 'keyEvent'. |
| callback | (event: InputKeyEvent) => boolean | Yes | Callback used to return the result. The input parameter is the key event  information and the return value is of the Boolean type.  - Input parameter: [InputKeyEvent](../../apis-input-kit/arkts-apis/arkts-keyevent-i.md#KeyEvent).  - If the event is consumed by the event  subscriber, true is returned. Otherwise, false is returned. |

**Example**

```TypeScript
import type { KeyEvent } from '@kit.InputKit';

inputMethodEngine.getKeyboardDelegate().on('keyEvent', (keyEvent: KeyEvent) => {
  console.info(`inputMethodEngine keyEvent.action:${ keyEvent.action}`);
  console.info(`inputMethodEngine keyEvent.key.code: ${keyEvent.key.code}`);
  console.info(`inputMethodEngine keyEvent.ctrlKey: ${keyEvent.ctrlKey}`);
  console.info(`inputMethodEngine keyEvent.unicodeChar: ${keyEvent.unicodeChar}`);
  return true;
});

```

## on('cursorContextChange')

```TypeScript
on(type: 'cursorContextChange', callback: (x: number, y: number, height: number) => void): void
```

Enables listening for the cursor change event. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cursorContextChange' | Yes | Event type, which is 'cursorContextChange'. |
| callback | (x: number, y: number, height: number) => void | Yes | Callback used to return the cursor information.  - x: x coordinate of the top of the cursor.  - y: y coordinate of the bottom of the cursor.  - height: height of the cursor. |

**Example**

```TypeScript
inputMethodEngine.getKeyboardDelegate().on('cursorContextChange', (x: number, y: number, height: number) => {
  console.info('inputMethodEngine cursorContextChange x:' + x);
  console.info('inputMethodEngine cursorContextChange y:' + y);
  console.info('inputMethodEngine cursorContextChange height:' + height);
});

```

## on('selectionChange')

```TypeScript
on(
      type: 'selectionChange',
      callback: (oldBegin: number, oldEnd: number, newBegin: number, newEnd: number) => void
    ): void
```

Enables listening for the text selection change event. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'selectionChange' | Yes | Event type, which is 'selectionChange'. |
| callback | (oldBegin: number, oldEnd: number, newBegin: number, newEnd: number) => void | Yes | Callback used to return the text selection information.  - oldBegin: start of the selected text before the change.  - oldEnd: end of the selected text before the change.  - newBegin: start of the selected text after the change.  - newEnd: end of the selected text after the change. |

**Example**

```TypeScript
inputMethodEngine.getKeyboardDelegate()
  .on('selectionChange', (oldBegin: number, oldEnd: number, newBegin: number, newEnd: number) => {
    console.info('selectionChange oldBegin:' + oldBegin);
    console.info('selectionChange oldEnd:' + oldEnd);
    console.info('selectionChange newBegin:' + newBegin);
    console.info('selectionChange newEnd:' + newEnd);
  });

```

## on('textChange')

```TypeScript
on(type: 'textChange', callback: (text: string) => void): void
```

Enables listening for the text change event. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'textChange' | Yes | Event type, which is 'textChange'. |
| callback | (text: string) => void | Yes | Callback used to return the text content. |

**Example**

```TypeScript
inputMethodEngine.getKeyboardDelegate().on('textChange', (text: string) => {
  console.info('inputMethodEngine textChange. text:' + text);
});

```

## on('editorAttributeChanged')

```TypeScript
on(type: 'editorAttributeChanged', callback: (attr: EditorAttribute) => void): void
```

Enables listening for the edit box attribute change event. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'editorAttributeChanged' | Yes | Event type, which is 'editorAttributeChanged'. |
| callback | (attr: EditorAttribute) => void | Yes | Callback used to return the changed edit box attribute. |

**Example**

```TypeScript
inputMethodEngine.getKeyboardDelegate()
  .on('editorAttributeChanged', (attr: inputMethodEngine.EditorAttribute) => {
    console.info(`Succeeded in receiving attribute of editor, inputPattern = ${attr.inputPattern}, enterKeyType = ${attr.enterKeyType}`);
  });

```

## onCursorContextChange

```TypeScript
onCursorContextChange(callback: CursorContextChangeCallback): void
```

Subscribe cursor context change.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | CursorContextChangeCallback | Yes | the callback called when cursor information changes. |

## onEditorAttributeChanged

```TypeScript
onEditorAttributeChanged(callback: Callback<EditorAttribute>): void
```

Subscribe input text attribute change.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;EditorAttribute> | Yes | the callback called when editor's attribute changes. |

## onKeyDown

```TypeScript
onKeyDown(callback: KeyEventCallback): void
```

Subscribe key down event

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | KeyEventCallback | Yes | the callback called when a key down event occurs.  If the key is processed by event subscriber, callback should be return true, else return false. |

## onKeyEvent

```TypeScript
onKeyEvent(callback: InputKeyEventCallback): void
```

Subscribe key event.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | InputKeyEventCallback | Yes | the callback called when a key event event occurs.  If the key is processed by event subscriber, callback should be return true, else return false. |

## onKeyUp

```TypeScript
onKeyUp(callback: KeyEventCallback): void
```

Subscribe key up event

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | KeyEventCallback | Yes | the callback called when a key up event occurs.  If the key is processed by event subscriber, callback should be return true, else return false. |

## onSelectionChange

```TypeScript
onSelectionChange(callback: SelectionChangeCallback): void
```

Subscribe selection change.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | SelectionChangeCallback | Yes | the callback called when the text selection changes. |

## onTextChange

```TypeScript
onTextChange(callback: Callback<string>): void
```

Subscribe text change.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | Yes | the callback called when the text changes. |

