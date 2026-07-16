# @ohos.inputMethodEngine

The **inputMethodEngine** module is oriented to input method applications (including system and third-party input
method applications). With the APIs of this module, input method applications are able to create soft keyboard
windows, insert or delete characters, select text, and listen for physical keyboard events.

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
| [createKeyboardDelegate](arkts-ime-createkeyboarddelegate-f.md#createkeyboarddelegate-1) | Obtains a [KeyboardDelegate](arkts-ime-keyboarddelegate-i.md) instance for the input method. The input method can use the obtained instance to subscribe to a physical keyboard event, text selection change event, and more. |
| [getInputMethodAbility](arkts-ime-getinputmethodability-f.md#getinputmethodability-1) | Obtains an [InputMethodAbility](arkts-ime-inputmethodability-i.md) instance for the input method. This APIcan be called only by an input method.The input method can use the obtained instance to subscribe to a soft keyboard display/hide request event, create/destroy an input method panel, and the like. |
| [getInputMethodEngine](arkts-ime-getinputmethodengine-f.md#getinputmethodengine-1) | Obtains an [InputMethodEngine](arkts-ime-inputmethodengine-i.md) instance for the input method.The input method can use the obtained instance to subscribe to a soft keyboard display/hide request event. |
| [getKeyboardDelegate](arkts-ime-getkeyboarddelegate-f.md#getkeyboarddelegate-1) | Obtains a [KeyboardDelegate](arkts-ime-keyboarddelegate-i.md) instance for the input method.The input method can use the obtained instance to subscribe to a physical keyboard event, text selection change event, and more. |

### Interfaces

| Name | Description |
| --- | --- |
| [AttachOptions](arkts-ime-attachoptions-i.md) | Defines additional options for binding an input method. |
| [EditorAttribute](arkts-ime-editorattribute-i.md) | In the following API examples, you must first use [getKeyboardDelegate](arkts-ime-getkeyboarddelegate-f.md#getkeyboarddelegate-1) to obtain a **KeyboardDelegate** instance, andthen call the APIs using the obtained instance. |
| [EnhancedPanelRect](arkts-ime-enhancedpanelrect-i.md) | Indicates the size of the enhanced input method panel, including the custom avoid area and touch area. |
| [ImmersiveEffect](arkts-ime-immersiveeffect-i.md) | Describes the immersive effect. |
| [InputClient](arkts-ime-inputclient-i.md) | You must first use [on('inputStart')](inputMethodEngine.InputMethodAbility. on(type: 'inputStart', callback:(kbController: KeyboardController, inputClient: InputClient) =&gt; void): void;) to obtain a **InputClient** instance, and then use this instance to call the following APIs. |
| [InputMethodAbility](arkts-ime-inputmethodability-i.md) | In the following API examples, you must first use [getInputMethodAbility](arkts-ime-getinputmethodability-f.md#getinputmethodability-1) to obtain an **InputMethodAbility** instance, and then call the APIs using the obtained instance. |
| [InputMethodEngine](arkts-ime-inputmethodengine-i.md) | In the following API examples, you must first use [getInputMethodEngine](arkts-ime-getinputmethodengine-f.md#getinputmethodengine-1) to obtain an **InputMethodEngine** instance, and then call the APIs using the obtained instance. |
| [KeyEvent](arkts-ime-keyevent-i.md) | In the following API examples, you must first use [getKeyboardDelegate](arkts-ime-getkeyboarddelegate-f.md#getkeyboarddelegate-1) to obtain a **KeyboardDelegate** instance, andthen call the APIs using the obtained instance. |
| [KeyboardArea](arkts-ime-keyboardarea-i.md) | Represents the keyboard area on the panel. |
| [KeyboardController](arkts-ime-keyboardcontroller-i.md) | In the following API examples, you must first use [getKeyboardDelegate](arkts-ime-getkeyboarddelegate-f.md#getkeyboarddelegate-1) to obtain a **KeyboardDelegate** instance, andthen call the APIs using the obtained instance. |
| [KeyboardDelegate](arkts-ime-keyboarddelegate-i.md) | In the following API examples, you must first use [getKeyboardDelegate](arkts-ime-getkeyboarddelegate-f.md#getkeyboarddelegate-1) to obtain a **KeyboardDelegate** instance, andthen call the APIs using the obtained instance. |
| [MessageHandler](arkts-ime-messagehandler-i.md) | Represents a custom communication object.&gt; **NOTE**&gt;&gt; You can register this object to receive custom communication data sent by the edit box application attached to &gt; the input method application. When the custom communication data is received, the &gt; [onMessage](arkts-ime-messagehandler-i.md#onmessage-1) callback in &gt; this object is triggered.&gt;&gt; This object is globally unique. After multiple registrations, only the last registered object is valid and &gt; retained, and the [onTerminated](arkts-ime-messagehandler-i.md#onterminated-1) callback of the &gt; penultimate registered object is triggered.&gt;&gt; If this object is unregistered, its [onTerminated](arkts-ime-messagehandler-i.md#onterminated-1) &gt; callback will be triggered. |
| [Movement](arkts-ime-movement-i.md) | Describes the direction in which the cursor moves when the text is selected. |
| [Panel](arkts-ime-panel-i.md) | In the following API examples, you must first use [createPanel](arkts-ime-inputmethodability-i.md#createpanel-1)to obtain a **Panel** instance, and then call the APIs using the obtained instance. |
| [PanelInfo](arkts-ime-panelinfo-i.md) | Describes the attributes of the input method panel. |
| [PanelRect](arkts-ime-panelrect-i.md) | Represents the size of the input method panel. |
| [Range](arkts-ime-range-i.md) | Describes the range of the selected text. |
| [TextInputClient](arkts-ime-textinputclient-i.md) | In the following API examples, you must first use [on('inputStart')](inputMethodEngine.InputMethodEngine.on(type: 'inputStart',callback: (kbController: KeyboardController, textInputClient: TextInputClient) =&gt; void): void;)to obtain a **TextInputClient** instance, and then call the APIs using the obtained instance. |
| [WindowInfo](arkts-ime-windowinfo-i.md) | Represents window information. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [EditorAttribute](arkts-ime-editorattribute-i-sys.md) | In the following API examples, you must first use [getKeyboardDelegate](arkts-ime-getkeyboarddelegate-f.md#getkeyboarddelegate-1) to obtain a **KeyboardDelegate** instance, andthen call the APIs using the obtained instance. |
| [ImmersiveEffect](arkts-ime-immersiveeffect-i-sys.md) | Describes the immersive effect. |
| [Panel](arkts-ime-panel-i-sys.md) | In the following API examples, you must first use [createPanel](arkts-ime-inputmethodability-i.md#createpanel-1)to obtain a **Panel** instance, and then call the APIs using the obtained instance. |
| [SystemPanelInsets](arkts-ime-systempanelinsets-i.md) | Defines the offset area between the input method soft keyboard and the system panel. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [CapitalizeMode](arkts-ime-capitalizemode-e.md) | Enumerates the modes of capitalizing the first letter of a text. |
| [Direction](arkts-ime-direction-e.md) | Enumerates the directions of cursor movement of the input method. |
| [ExtendAction](arkts-ime-extendaction-e.md) | Describes the type of the extended edit action on the text box. |
| [GradientMode](arkts-ime-gradientmode-e.md) | Enumerates the gradient modes of the input method. |
| [ImmersiveMode](arkts-ime-immersivemode-e.md) | Enumerates the immersive modes of the input method. |
| [PanelFlag](arkts-ime-panelflag-e.md) | Enumerates the state types of the input method panel. |
| [PanelType](arkts-ime-paneltype-e.md) | Enumerates the types of the input method panel. |
| [RequestKeyboardReason](arkts-ime-requestkeyboardreason-e.md) | Enumerates the reasons for requesting keyboard input. |
| [SecurityMode](arkts-ime-securitymode-e.md) | Describes the security mode. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [FluidLightMode](arkts-ime-fluidlightmode-e-sys.md) | Enumerates the fluid light modes of the input method. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [CommandDataType](arkts-ime-commanddatatype-t.md) | Defines the private data type, which varies depending on its function. |
| [SizeChangeCallback](arkts-ime-sizechangecallback-t.md) | Callback triggered when the size of the input method panel changes. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [SizeUpdateCallback](arkts-ime-sizeupdatecallback-t-sys.md) | Callback triggered when the size of the input method panel changes. |
<!--DelEnd-->

### Constants

| Name | Description |
| --- | --- |
| [CURSOR_DOWN](arkts-ime-inputmethodengine-con.md#cursor_down) | The caret moves downward. |
| [CURSOR_LEFT](arkts-ime-inputmethodengine-con.md#cursor_left) | The caret moves leftward. |
| [CURSOR_RIGHT](arkts-ime-inputmethodengine-con.md#cursor_right) | The caret moves rightward. |
| [CURSOR_UP](arkts-ime-inputmethodengine-con.md#cursor_up) | The caret moves upward. |
| [DISPLAY_MODE_FULL](arkts-ime-inputmethodengine-con.md#display_mode_full) | The edit box is displayed in full screen. |
| [DISPLAY_MODE_PART](arkts-ime-inputmethodengine-con.md#display_mode_part) | The edit box is displayed in half-screen mode. |
| [ENTER_KEY_TYPE_DONE](arkts-ime-inputmethodengine-con.md#enter_key_type_done) | Key that indicates that a task or input is complete. |
| [ENTER_KEY_TYPE_GO](arkts-ime-inputmethodengine-con.md#enter_key_type_go) | Key that executes a command or navigates to a specific location. |
| [ENTER_KEY_TYPE_NEWLINE](arkts-ime-inputmethodengine-con.md#enter_key_type_newline) | Key that inserts a new line. |
| [ENTER_KEY_TYPE_NEXT](arkts-ime-inputmethodengine-con.md#enter_key_type_next) | Key that moves the focus to the next item in a sequence. |
| [ENTER_KEY_TYPE_PREVIOUS](arkts-ime-inputmethodengine-con.md#enter_key_type_previous) | Key that moves the focus to the previous item in a sequence. |
| [ENTER_KEY_TYPE_SEARCH](arkts-ime-inputmethodengine-con.md#enter_key_type_search) | Key that initiates a search operation. |
| [ENTER_KEY_TYPE_SEND](arkts-ime-inputmethodengine-con.md#enter_key_type_send) | Key that sends the text to its target. |
| [ENTER_KEY_TYPE_UNSPECIFIED](arkts-ime-inputmethodengine-con.md#enter_key_type_unspecified) | No function is specified for the key. |
| [FLAG_SELECTING](arkts-ime-inputmethodengine-con.md#flag_selecting) | The edit box is being selected. |
| [FLAG_SINGLE_LINE](arkts-ime-inputmethodengine-con.md#flag_single_line) | The edit box allows only single-line input. |
| [OPTION_ASCII](arkts-ime-inputmethodengine-con.md#option_ascii) | ASCII values are allowed. |
| [OPTION_AUTO_CAP_CHARACTERS](arkts-ime-inputmethodengine-con.md#option_auto_cap_characters) | Characters are allowed. |
| [OPTION_AUTO_CAP_SENTENCES](arkts-ime-inputmethodengine-con.md#option_auto_cap_sentences) | Sentences are allowed. |
| [OPTION_AUTO_WORDS](arkts-ime-inputmethodengine-con.md#option_auto_words) | Words are allowed. |
| [OPTION_MULTI_LINE](arkts-ime-inputmethodengine-con.md#option_multi_line) | Multiple lines are allowed. |
| [OPTION_NONE](arkts-ime-inputmethodengine-con.md#option_none) | No input attribute is specified. |
| [OPTION_NO_FULLSCREEN](arkts-ime-inputmethodengine-con.md#option_no_fullscreen) | Half-screen style. |
| [PATTERN_DATETIME](arkts-ime-inputmethodengine-con.md#pattern_datetime) | Date edit box. |
| [PATTERN_EMAIL](arkts-ime-inputmethodengine-con.md#pattern_email) | Email edit box. |
| [PATTERN_NEW_PASSWORD](arkts-ime-inputmethodengine-con.md#pattern_new_password) | New password edit box. The value is fixed at 11. |
| [PATTERN_NULL](arkts-ime-inputmethodengine-con.md#pattern_null) | Any type of edit box. |
| [PATTERN_NUMBER](arkts-ime-inputmethodengine-con.md#pattern_number) | Number edit box. |
| [PATTERN_NUMBER_DECIMAL](arkts-ime-inputmethodengine-con.md#pattern_number_decimal) | Edit box for numbers with decimal points. The value is fixed at 12. |
| [PATTERN_ONE_TIME_CODE](arkts-ime-inputmethodengine-con.md#pattern_one_time_code) | Verification code edit box. The value is fixed at 13. |
| [PATTERN_PASSWORD](arkts-ime-inputmethodengine-con.md#pattern_password) | Password edit box. |
| [PATTERN_PASSWORD_NUMBER](arkts-ime-inputmethodengine-con.md#pattern_password_number) | Numeric password edit box. |
| [PATTERN_PASSWORD_SCREEN_LOCK](arkts-ime-inputmethodengine-con.md#pattern_password_screen_lock) | Screen lock password edit box. |
| [PATTERN_PHONE](arkts-ime-inputmethodengine-con.md#pattern_phone) | Phone number edit box. |
| [PATTERN_TEXT](arkts-ime-inputmethodengine-con.md#pattern_text) | Text edit box. |
| [PATTERN_URI](arkts-ime-inputmethodengine-con.md#pattern_uri) | URI edit box. |
| [PATTERN_USER_NAME](arkts-ime-inputmethodengine-con.md#pattern_user_name) | User name edit box. The value is fixed at 10. |
| [WINDOW_TYPE_INPUT_METHOD_FLOAT](arkts-ime-inputmethodengine-con.md#window_type_input_method_float) | The input method is displayed in a floating window. |

