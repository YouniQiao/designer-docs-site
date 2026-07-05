# @ohos.inputMethodEngine

The **inputMethodEngine** module is oriented to input method applications (including system and third-party input method applications). With the APIs of this module, input method applications are able to create soft keyboard windows, insert or delete characters, select text, and listen for physical keyboard events.

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createKeyboardDelegate](arkts-inputmethodengine-createkeyboarddelegate-f.md#createKeyboardDelegate-1) | Obtains a [KeyboardDelegate]{@link inputMethodEngine.KeyboardDelegate} instance for the input method. The input method can use the obtained instance to subscribe to a physical keyboard event, text selection change event, and more. |
| [getInputMethodAbility](arkts-inputmethodengine-getinputmethodability-f.md#getInputMethodAbility-1) | Obtains an [InputMethodAbility]{@link inputMethodEngine.InputMethodAbility} instance for the input method. This API can be called only by an input method. The input method can use the obtained instance to subscribe to a soft keyboard display/hide request event, create/ destroy an input method panel, and the like. |
| [getInputMethodAbility](arkts-inputmethodengine-getinputmethodability-f.md#getInputMethodAbility-2) | Get InputMethodAbility object to subscribe events about IME. |
| [getInputMethodEngine](arkts-inputmethodengine-getinputmethodengine-f.md#getInputMethodEngine-1) | Obtains an [InputMethodEngine]{@link inputMethodEngine.InputMethodEngine} instance for the input method. The input method can use the obtained instance to subscribe to a soft keyboard display/hide request event. |
| [getKeyboardDelegate](arkts-inputmethodengine-getkeyboarddelegate-f.md#getKeyboardDelegate-1) | Obtains a [KeyboardDelegate]{@link inputMethodEngine.KeyboardDelegate} instance for the input method. The input method can use the obtained instance to subscribe to a physical keyboard event, text selection change event, and more. |
| [getKeyboardDelegate](arkts-inputmethodengine-getkeyboarddelegate-f.md#getKeyboardDelegate-2) | Get KeyboardDelegate object to subscribe key event or events about editor. |

### Interfaces

| Name | Description |
| --- | --- |
| [AttachOptions](arkts-inputmethodengine-attachoptions-i.md) | Defines additional options for binding an input method. |
| [EditorAttribute](arkts-inputmethodengine-editorattribute-i.md) | In the following API examples, you must first use [getKeyboardDelegate]{@link inputMethodEngine.getKeyboardDelegate()} to obtain a **KeyboardDelegate** instance, and then call the APIs using the obtained instance. |
| [EnhancedPanelRect](arkts-inputmethodengine-enhancedpanelrect-i.md) | Indicates the size of the enhanced input method panel, including the custom avoid area and touch area. |
| [ImmersiveEffect](arkts-inputmethodengine-immersiveeffect-i.md) | Describes the immersive effect. |
| [InputClient](arkts-inputmethodengine-inputclient-i.md) | You must first use [on('inputStart')]{@link inputMethodEngine.InputMethodAbility. on(type: 'inputStart', callback: (kbController: KeyboardController, inputClient: InputClient) => void): void;} to obtain a **InputClient** instance, and then use this instance to call the following APIs. |
| [InputMethodAbility](arkts-inputmethodengine-inputmethodability-i.md) | In the following API examples, you must first use [getInputMethodAbility]{@link inputMethodEngine.getInputMethodAbility()} to obtain an **InputMethodAbility** instance, and then call the APIs using the obtained instance. |
| [InputMethodEngine](arkts-inputmethodengine-inputmethodengine-i.md) | In the following API examples, you must first use [getInputMethodEngine]{@link inputMethodEngine.getInputMethodEngine} to obtain an **InputMethodEngine** instance, and then call the APIs using the obtained instance. |
| [KeyboardArea](arkts-inputmethodengine-keyboardarea-i.md) | Represents the keyboard area on the panel. |
| [KeyboardController](arkts-inputmethodengine-keyboardcontroller-i.md) | In the following API examples, you must first use [getKeyboardDelegate]{@link inputMethodEngine.getKeyboardDelegate()} to obtain a **KeyboardDelegate** instance, and then call the APIs using the obtained instance. |
| [KeyboardDelegate](arkts-inputmethodengine-keyboarddelegate-i.md) | In the following API examples, you must first use [getKeyboardDelegate]{@link inputMethodEngine.getKeyboardDelegate()} to obtain a **KeyboardDelegate** instance, and then call the APIs using the obtained instance. |
| [KeyEvent](arkts-inputmethodengine-keyevent-i.md) | In the following API examples, you must first use [getKeyboardDelegate]{@link inputMethodEngine.getKeyboardDelegate()} to obtain a **KeyboardDelegate** instance, and then call the APIs using the obtained instance. |
| [MessageHandler](arkts-inputmethodengine-messagehandler-i.md) | Represents a custom communication object. > **NOTE** > > You can register this object to receive custom communication data sent by the edit box application attached to > the input method application. When the custom communication data is received, the > [onMessage]{@link inputMethodEngine.MessageHandler.onMessage(msgId: string, msgParam?: ArrayBuffer)} callback in > this object is triggered. > > This object is globally unique. After multiple registrations, only the last registered object is valid and > retained, and the [onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()} callback of the > penultimate registered object is triggered. > > If this object is unregistered, its [onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()} > callback will be triggered. |
| [Movement](arkts-inputmethodengine-movement-i.md) | Describes the direction in which the cursor moves when the text is selected. |
| [Panel](arkts-inputmethodengine-panel-i.md) | In the following API examples, you must first use [createPanel]{@link inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo, callback: AsyncCallback<Panel>)} to obtain a **Panel** instance, and then call the APIs using the obtained instance. |
| [PanelInfo](arkts-inputmethodengine-panelinfo-i.md) | Describes the attributes of the input method panel. |
| [PanelRect](arkts-inputmethodengine-panelrect-i.md) | Represents the size of the input method panel. |
| [Range](arkts-inputmethodengine-range-i.md) | Describes the range of the selected text. |
| [SystemPanelInsets](arkts-inputmethodengine-systempanelinsets-i.md) | Defines the offset area between the input method soft keyboard and the system panel. |
| [TextInputClient](arkts-inputmethodengine-textinputclient-i.md) | In the following API examples, you must first use [on('inputStart')]{@link inputMethodEngine.InputMethodEngine.on(type: 'inputStart', callback: (kbController: KeyboardController, textInputClient: TextInputClient) => void): void;} to obtain a **TextInputClient** instance, and then call the APIs using the obtained instance. |
| [WindowInfo](arkts-inputmethodengine-windowinfo-i.md) | Represents window information. |

### Types

| Name | Description |
| --- | --- |
| [CommandDataType](arkts-inputmethodengine-commanddatatype-t.md) | Defines the private data type, which varies depending on its function. |
| [CursorContextChangeCallback](arkts-inputmethodengine-cursorcontextchangecallback-t.md) | The callback of 'cursorContextChange' event. |
| [IMAInputStartCallback](arkts-inputmethodengine-imainputstartcallback-t.md) | The callback of 'inputStart' event. |
| [InputKeyEventCallback](arkts-inputmethodengine-inputkeyeventcallback-t.md) | The callback of 'keyEvent' event. |
| [KeyEventCallback](arkts-inputmethodengine-keyeventcallback-t.md) | The callback of 'keyDown' or 'keyUp' event. |
| [OnMessageCallback](arkts-inputmethodengine-onmessagecallback-t.md) | Callback function on receiving a custom message. |
| [SelectionChangeCallback](arkts-inputmethodengine-selectionchangecallback-t.md) | The callback of 'selectionChange' event. |
| [SizeChangeCallback](arkts-inputmethodengine-sizechangecallback-t.md) | Callback triggered when the size of the input method panel changes. |
| <!--DelRow-->[SizeUpdateCallback](arkts-inputmethodengine-sizeupdatecallback-t-sys.md) | Callback triggered when the size of the input method panel changes. |

### Enums

| Name | Description |
| --- | --- |
| [CapitalizeMode](arkts-inputmethodengine-capitalizemode-e.md) | Enumerates the modes of capitalizing the first letter of a text. |
| [Direction](arkts-inputmethodengine-direction-e.md) | Enumerates the directions of cursor movement of the input method. |
| [ExtendAction](arkts-inputmethodengine-extendaction-e.md) | Describes the type of the extended edit action on the text box. |
| <!--DelRow-->[FluidLightMode](arkts-inputmethodengine-fluidlightmode-e-sys.md) | Enumerates the fluid light modes of the input method. |
| [GradientMode](arkts-inputmethodengine-gradientmode-e.md) | Enumerates the gradient modes of the input method. |
| [ImmersiveMode](arkts-inputmethodengine-immersivemode-e.md) | Enumerates the immersive modes of the input method. |
| [PanelFlag](arkts-inputmethodengine-panelflag-e.md) | Enumerates the state types of the input method panel. |
| [PanelType](arkts-inputmethodengine-paneltype-e.md) | Enumerates the types of the input method panel. |
| [RequestKeyboardReason](arkts-inputmethodengine-requestkeyboardreason-e.md) | Enumerates the reasons for requesting keyboard input. |
| [SecurityMode](arkts-inputmethodengine-securitymode-e.md) | Describes the security mode. |

### Constants

| Name | Description |
| --- | --- |
| [CURSOR_DOWN](arkts-inputmethodengine-con.md#CURSOR_DOWN) | The caret moves downward. |
| [CURSOR_LEFT](arkts-inputmethodengine-con.md#CURSOR_LEFT) | The caret moves leftward. |
| [CURSOR_RIGHT](arkts-inputmethodengine-con.md#CURSOR_RIGHT) | The caret moves rightward. |
| [CURSOR_UP](arkts-inputmethodengine-con.md#CURSOR_UP) | The caret moves upward. |
| [DISPLAY_MODE_FULL](arkts-inputmethodengine-con.md#DISPLAY_MODE_FULL) | The edit box is displayed in full screen. |
| [DISPLAY_MODE_PART](arkts-inputmethodengine-con.md#DISPLAY_MODE_PART) | The edit box is displayed in half-screen mode. |
| [ENTER_KEY_TYPE_DONE](arkts-inputmethodengine-con.md#ENTER_KEY_TYPE_DONE) | Key that indicates that a task or input is complete. |
| [ENTER_KEY_TYPE_GO](arkts-inputmethodengine-con.md#ENTER_KEY_TYPE_GO) | Key that executes a command or navigates to a specific location. |
| [ENTER_KEY_TYPE_NEWLINE](arkts-inputmethodengine-con.md#ENTER_KEY_TYPE_NEWLINE) | Key that inserts a new line. |
| [ENTER_KEY_TYPE_NEXT](arkts-inputmethodengine-con.md#ENTER_KEY_TYPE_NEXT) | Key that moves the focus to the next item in a sequence. |
| [ENTER_KEY_TYPE_PREVIOUS](arkts-inputmethodengine-con.md#ENTER_KEY_TYPE_PREVIOUS) | Key that moves the focus to the previous item in a sequence. |
| [ENTER_KEY_TYPE_SEARCH](arkts-inputmethodengine-con.md#ENTER_KEY_TYPE_SEARCH) | Key that initiates a search operation. |
| [ENTER_KEY_TYPE_SEND](arkts-inputmethodengine-con.md#ENTER_KEY_TYPE_SEND) | Key that sends the text to its target. |
| [ENTER_KEY_TYPE_UNSPECIFIED](arkts-inputmethodengine-con.md#ENTER_KEY_TYPE_UNSPECIFIED) | No function is specified for the key. |
| [FLAG_SELECTING](arkts-inputmethodengine-con.md#FLAG_SELECTING) | The edit box is being selected. |
| [FLAG_SINGLE_LINE](arkts-inputmethodengine-con.md#FLAG_SINGLE_LINE) | The edit box allows only single-line input. |
| [OPTION_ASCII](arkts-inputmethodengine-con.md#OPTION_ASCII) | ASCII values are allowed. |
| [OPTION_AUTO_CAP_CHARACTERS](arkts-inputmethodengine-con.md#OPTION_AUTO_CAP_CHARACTERS) | Characters are allowed. |
| [OPTION_AUTO_CAP_SENTENCES](arkts-inputmethodengine-con.md#OPTION_AUTO_CAP_SENTENCES) | Sentences are allowed. |
| [OPTION_AUTO_WORDS](arkts-inputmethodengine-con.md#OPTION_AUTO_WORDS) | Words are allowed. |
| [OPTION_MULTI_LINE](arkts-inputmethodengine-con.md#OPTION_MULTI_LINE) | Multiple lines are allowed. |
| [OPTION_NO_FULLSCREEN](arkts-inputmethodengine-con.md#OPTION_NO_FULLSCREEN) | Half-screen style. |
| [OPTION_NONE](arkts-inputmethodengine-con.md#OPTION_NONE) | No input attribute is specified. |
| [PATTERN_DATETIME](arkts-inputmethodengine-con.md#PATTERN_DATETIME) | Date edit box. |
| [PATTERN_EMAIL](arkts-inputmethodengine-con.md#PATTERN_EMAIL) | Email edit box. |
| [PATTERN_NEW_PASSWORD](arkts-inputmethodengine-con.md#PATTERN_NEW_PASSWORD) | New password edit box. |
| [PATTERN_NEW_PASSWORD](arkts-inputmethodengine-con.md#PATTERN_NEW_PASSWORD) | New password edit box. |
| [PATTERN_NULL](arkts-inputmethodengine-con.md#PATTERN_NULL) | Any type of edit box. |
| [PATTERN_NUMBER](arkts-inputmethodengine-con.md#PATTERN_NUMBER) | Number edit box. |
| [PATTERN_NUMBER_DECIMAL](arkts-inputmethodengine-con.md#PATTERN_NUMBER_DECIMAL) | Edit box for numbers with decimal points. |
| [PATTERN_NUMBER_DECIMAL](arkts-inputmethodengine-con.md#PATTERN_NUMBER_DECIMAL) | Edit box for numbers with decimal points. |
| [PATTERN_ONE_TIME_CODE](arkts-inputmethodengine-con.md#PATTERN_ONE_TIME_CODE) | Verification code edit box. |
| [PATTERN_ONE_TIME_CODE](arkts-inputmethodengine-con.md#PATTERN_ONE_TIME_CODE) | Verification code edit box. |
| [PATTERN_PASSWORD](arkts-inputmethodengine-con.md#PATTERN_PASSWORD) | Password edit box. |
| [PATTERN_PASSWORD_NUMBER](arkts-inputmethodengine-con.md#PATTERN_PASSWORD_NUMBER) | Numeric password edit box. |
| [PATTERN_PASSWORD_SCREEN_LOCK](arkts-inputmethodengine-con.md#PATTERN_PASSWORD_SCREEN_LOCK) | Screen lock password edit box. |
| [PATTERN_PHONE](arkts-inputmethodengine-con.md#PATTERN_PHONE) | Phone number edit box. |
| [PATTERN_TEXT](arkts-inputmethodengine-con.md#PATTERN_TEXT) | Text edit box. |
| [PATTERN_URI](arkts-inputmethodengine-con.md#PATTERN_URI) | URI edit box. |
| [PATTERN_USER_NAME](arkts-inputmethodengine-con.md#PATTERN_USER_NAME) | User name edit box. |
| [PATTERN_USER_NAME](arkts-inputmethodengine-con.md#PATTERN_USER_NAME) | User name edit box. |
| [WINDOW_TYPE_INPUT_METHOD_FLOAT](arkts-inputmethodengine-con.md#WINDOW_TYPE_INPUT_METHOD_FLOAT) | The input method is displayed in a floating window. |

