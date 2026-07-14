# @ohos.inputMethod

The **inputMethod** module is oriented to common foreground applications (system applications such as Notes, Messaging, and Settings). It provides input method control and management capabilities, including displaying or hiding the soft keyboard, switching between input methods, and obtaining the list of all input methods.

**Since:** 6

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { inputMethod } from '@kit.IMEKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getController](arkts-ime-getcontroller-f.md#getcontroller-1) | Input method controller |
| [getCurrentInputMethod](arkts-ime-getcurrentinputmethod-f.md#getcurrentinputmethod-1) | Get current input method |
| [getCurrentInputMethodSubtype](arkts-ime-getcurrentinputmethodsubtype-f.md#getcurrentinputmethodsubtype-1) | Get the current input method subtype |
| [getDefaultInputMethod](arkts-ime-getdefaultinputmethod-f.md#getdefaultinputmethod-1) | Get default input method |
| [getInputMethodController](arkts-ime-getinputmethodcontroller-f.md#getinputmethodcontroller-1) | Input method controller |
| [getInputMethodSetting](arkts-ime-getinputmethodsetting-f.md#getinputmethodsetting-1) | Input method setting |
| [getSetting](arkts-ime-getsetting-f.md#getsetting-1) | Input method setting |
| [getSystemInputMethodConfigAbility](arkts-ime-getsysteminputmethodconfigability-f.md#getsysteminputmethodconfigability-1) | Get system input method config ability |
| [offAttachmentDidFail](arkts-ime-offattachmentdidfail-f.md#offattachmentdidfail-1) | Unsubscribe the attachment failure event. |
| [onAttachmentDidFail](arkts-ime-onattachmentdidfail-f.md#onattachmentdidfail-1) | Subscribe the attachment failure event. |
| [setSimpleKeyboardEnabled](arkts-ime-setsimplekeyboardenabled-f.md#setsimplekeyboardenabled-1) | Set simple keyboard mode. |
| [switchCurrentInputMethodAndSubtype](arkts-ime-switchcurrentinputmethodandsubtype-f.md#switchcurrentinputmethodandsubtype-1) | Switch input method and subtype. The caller must be the current inputmethod. |
| [switchCurrentInputMethodAndSubtype](arkts-ime-switchcurrentinputmethodandsubtype-f.md#switchcurrentinputmethodandsubtype-2) | Switch input method and subtype. The caller must be the current inputmethod. |
| [switchCurrentInputMethodSubtype](arkts-ime-switchcurrentinputmethodsubtype-f.md#switchcurrentinputmethodsubtype-1) | Switch current input method subtype. The caller must be the current inputmethod. |
| [switchCurrentInputMethodSubtype](arkts-ime-switchcurrentinputmethodsubtype-f.md#switchcurrentinputmethodsubtype-2) | Switch current input method subtype. The caller must be the current inputmethod. |
| [switchInputMethod](arkts-ime-switchinputmethod-f.md#switchinputmethod-1) | Switch input method. The caller must be the current inputmethod. |
| [switchInputMethod](arkts-ime-switchinputmethod-f.md#switchinputmethod-2) | Switch input method. The caller must be the current inputmethod. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getCurrentInputMethod](arkts-ime-getcurrentinputmethod-f-sys.md#getcurrentinputmethod-2) | Get the current input method of a specified user. |
| [getCurrentInputMethodSubtype](arkts-ime-getcurrentinputmethodsubtype-f-sys.md#getcurrentinputmethodsubtype-2) | Get the current input method subtype of a specified user. |
| [getDefaultInputMethod](arkts-ime-getdefaultinputmethod-f-sys.md#getdefaultinputmethod-2) | Get the default input method of a specified user. |
| [getSystemInputMethodConfigAbility](arkts-ime-getsysteminputmethodconfigability-f-sys.md#getsysteminputmethodconfigability-2) | Get the system input method config ability of a specified user. |
| [switchInputMethod](arkts-ime-switchinputmethod-f-sys.md#switchinputmethod-3) | Switches to another input method. This API uses a promise to return the result. |
| [switchInputMethodWithUserId](arkts-ime-switchinputmethodwithuserid-f-sys.md#switchinputmethodwithuserid-1) | Switch input method and subtype of a specified user. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AttachOptions](arkts-ime-attachoptions-i.md) | Attach options. |
| [CursorInfo](arkts-ime-cursorinfo-i.md) | Information of Cursor. |
| [FunctionKey](arkts-ime-functionkey-i.md) | FunctionKey of Input. |
| [InputAttribute](arkts-ime-inputattribute-i.md) | Attribute of Input. |
| [InputMethodController](arkts-ime-inputmethodcontroller-i.md) | A control class that encapsulates APIs for input method management, which can only be invoked after an **InputMethodController** instance is obtained via [getController](arkts-ime-getcontroller-f.md#getcontroller-1). |
| [InputMethodProperty](arkts-ime-inputmethodproperty-i.md) | input method property |
| [InputMethodSetting](arkts-ime-inputmethodsetting-i.md) | In the following API examples, you must first use [getSetting](arkts-ime-getsetting-f.md#getsetting-1) to obtain an **InputMethodSetting** instance, and then call the APIs using the obtained instance. |
| [InputWindowInfo](arkts-ime-inputwindowinfo-i.md) | Information of input window. |
| [MessageHandler](arkts-ime-messagehandler-i.md) | &lt;p&gt;Custom message handler.&lt;/p&gt; &lt;p&gt;Implement this interface to respond to custom messages.&lt;/p&gt; |
| [Movement](arkts-ime-movement-i.md) | Movement of cursor. |
| [Range](arkts-ime-range-i.md) | Range of selected text. |
| [TextConfig](arkts-ime-textconfig-i.md) | Config of editor. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [InputMethodController](arkts-ime-inputmethodcontroller-i-sys.md) | A control class that encapsulates APIs for input method management, which can only be invoked after an **InputMethodController** instance is obtained via [getController](arkts-ime-getcontroller-f.md#getcontroller-1). |
| [InputMethodSetting](arkts-ime-inputmethodsetting-i-sys.md) | In the following API examples, you must first use [getSetting](arkts-ime-getsetting-f.md#getsetting-1) to obtain an **InputMethodSetting** instance, and then call the APIs using the obtained instance. |
| [InputWindowInfo](arkts-ime-inputwindowinfo-i-sys.md) | Information of input window. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AttachFailureReason](arkts-ime-attachfailurereason-e.md) | Enumerates the specific reasons for attachment failure |
| [CapitalizeMode](arkts-ime-capitalizemode-e.md) | Enumerates the capitalization mode. |
| [Direction](arkts-ime-direction-e.md) | Enumerates the moving direction of cursor |
| [EnabledState](arkts-ime-enabledstate-e.md) | Enumerates the enabled state. |
| [EnterKeyType](arkts-ime-enterkeytype-e.md) | Enumerates the enter key type. |
| [ExtendAction](arkts-ime-extendaction-e.md) | Enumerates the extend action. |
| [KeyboardStatus](arkts-ime-keyboardstatus-e.md) | Enumerates the keyboard status. |
| [RequestKeyboardReason](arkts-ime-requestkeyboardreason-e.md) | requestKeyboardReason of input click |
| [TextInputType](arkts-ime-textinputtype-e.md) | Enumerates the text input type. |

### Types

| Name | Description |
| --- | --- |
| [SetPreviewTextCallback](arkts-ime-setpreviewtextcallback-t.md) | The callback of 'setPreviewText' event. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [ImeChangeWithUserIdCallback](arkts-ime-imechangewithuseridcallback-t-sys.md) | The callback of the inputmethod change event which carries the user ID whose inputmethod is changed. |
<!--DelEnd-->

### Constants

| Name | Description |
| --- | --- |
| [MAX_TYPE_NUM](arkts-ime-inputmethod-con.md#max_type_num) | Keyboard max number. Max value is 128. |

