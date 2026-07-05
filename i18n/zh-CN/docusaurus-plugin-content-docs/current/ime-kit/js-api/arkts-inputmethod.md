# @ohos.inputMethod

The **inputMethod** module is oriented to common foreground applications (system applications such as Notes, Messaging, and Settings). It provides input method control and management capabilities, including displaying or hiding the soft keyboard, switching between input methods, and obtaining the list of all input methods.

**起始版本：** 6

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { inputMethod } from '@kit.IMEKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getController](arkts-inputmethod-getcontroller-f.md#getController-1) | Input method controller |
| [getCurrentInputMethod](arkts-inputmethod-getcurrentinputmethod-f.md#getCurrentInputMethod-1) | Get current input method |
| <!--DelRow-->[getCurrentInputMethod](arkts-inputmethod-getcurrentinputmethod-f-sys.md#getCurrentInputMethod-1) | Get the current input method of a specified user. |
| [getCurrentInputMethodSubtype](arkts-inputmethod-getcurrentinputmethodsubtype-f.md#getCurrentInputMethodSubtype-1) | Get the current input method subtype |
| <!--DelRow-->[getCurrentInputMethodSubtype](arkts-inputmethod-getcurrentinputmethodsubtype-f-sys.md#getCurrentInputMethodSubtype-1) | Get the current input method subtype of a specified user. |
| [getDefaultInputMethod](arkts-inputmethod-getdefaultinputmethod-f.md#getDefaultInputMethod-1) | Get default input method |
| <!--DelRow-->[getDefaultInputMethod](arkts-inputmethod-getdefaultinputmethod-f-sys.md#getDefaultInputMethod-1) | Get the default input method of a specified user. |
| [getInputMethodController](arkts-inputmethod-getinputmethodcontroller-f.md#getInputMethodController-1) | Input method controller |
| [getInputMethodSetting](arkts-inputmethod-getinputmethodsetting-f.md#getInputMethodSetting-1) | Input method setting |
| [getSetting](arkts-inputmethod-getsetting-f.md#getSetting-1) | Input method setting |
| [getSystemInputMethodConfigAbility](arkts-inputmethod-getsysteminputmethodconfigability-f.md#getSystemInputMethodConfigAbility-1) | Get system input method config ability |
| <!--DelRow-->[getSystemInputMethodConfigAbility](arkts-inputmethod-getsysteminputmethodconfigability-f-sys.md#getSystemInputMethodConfigAbility-1) | Get the system input method config ability of a specified user. |
| [offAttachmentDidFail](arkts-inputmethod-offattachmentdidfail-f.md#offAttachmentDidFail-1) | Unsubscribe the attachment failure event. |
| [onAttachmentDidFail](arkts-inputmethod-onattachmentdidfail-f.md#onAttachmentDidFail-1) | Subscribe the attachment failure event. |
| [setSimpleKeyboardEnabled](arkts-inputmethod-setsimplekeyboardenabled-f.md#setSimpleKeyboardEnabled-1) | Set simple keyboard mode. |
| [switchCurrentInputMethodAndSubtype](arkts-inputmethod-switchcurrentinputmethodandsubtype-f.md#switchCurrentInputMethodAndSubtype-1) | Switch input method and subtype. The caller must be the current inputmethod. |
| [switchCurrentInputMethodAndSubtype](arkts-inputmethod-switchcurrentinputmethodandsubtype-f.md#switchCurrentInputMethodAndSubtype-2) | Switch input method and subtype. The caller must be the current inputmethod. |
| [switchCurrentInputMethodSubtype](arkts-inputmethod-switchcurrentinputmethodsubtype-f.md#switchCurrentInputMethodSubtype-1) | Switch current input method subtype. The caller must be the current inputmethod. |
| [switchCurrentInputMethodSubtype](arkts-inputmethod-switchcurrentinputmethodsubtype-f.md#switchCurrentInputMethodSubtype-2) | Switch current input method subtype. The caller must be the current inputmethod. |
| [switchInputMethod](arkts-inputmethod-switchinputmethod-f.md#switchInputMethod-1) | Switch input method. The caller must be the current inputmethod. |
| [switchInputMethod](arkts-inputmethod-switchinputmethod-f.md#switchInputMethod-2) | Switch input method. The caller must be the current inputmethod. |
| <!--DelRow-->[switchInputMethod](arkts-inputmethod-switchinputmethod-f-sys.md#switchInputMethod-1) | Switches to another input method. This API uses a promise to return the result. |
| <!--DelRow-->[switchInputMethodWithUserId](arkts-inputmethod-switchinputmethodwithuserid-f-sys.md#switchInputMethodWithUserId-1) | Switch input method and subtype of a specified user. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [AttachOptions](arkts-inputmethod-attachoptions-i.md) | Attach options. |
| [CursorInfo](arkts-inputmethod-cursorinfo-i.md) | Information of Cursor. |
| [FunctionKey](arkts-inputmethod-functionkey-i.md) | FunctionKey of Input. |
| [InputAttribute](arkts-inputmethod-inputattribute-i.md) | Attribute of Input. |
| [InputMethodController](arkts-inputmethod-inputmethodcontroller-i.md) | A control class that encapsulates APIs for input method management, which can only be invoked after an **InputMethodController** instance is obtained via [getController]{@link @ohos.inputMethod:inputMethod.getController}. |
| [InputMethodProperty](arkts-inputmethod-inputmethodproperty-i.md) | input method property |
| [InputMethodSetting](arkts-inputmethod-inputmethodsetting-i.md) | In the following API examples, you must first use [getSetting]{@link @ohos.inputMethod:inputMethod.getSetting} to obtain an **InputMethodSetting** instance, and then call the APIs using the obtained instance. |
| [InputWindowInfo](arkts-inputmethod-inputwindowinfo-i.md) | Information of input window. |
| [MessageHandler](arkts-inputmethod-messagehandler-i.md) | <p>Custom message handler.</p> <p>Implement this interface to respond to custom messages.</p> |
| [Movement](arkts-inputmethod-movement-i.md) | Movement of cursor. |
| [Range](arkts-inputmethod-range-i.md) | Range of selected text. |
| [TextConfig](arkts-inputmethod-textconfig-i.md) | Config of editor. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [GetTextCallback](arkts-inputmethod-gettextcallback-t.md) | The callback of 'getLeftTextOfCursor' or 'getRightTextOfCursor' event. |
| [GetTextIndexAtCursorCallback](arkts-inputmethod-gettextindexatcursorcallback-t.md) | The callback of 'getTextIndexAtCursor' event. |
| [ImeChangeCallback](arkts-inputmethod-imechangecallback-t.md) | The callback of 'imeChange' event. |
| <!--DelRow-->[ImeChangeWithUserIdCallback](arkts-inputmethod-imechangewithuseridcallback-t-sys.md) | The callback of the inputmethod change event which carries the user ID whose inputmethod is changed. |
| [OnMessageCallback](arkts-inputmethod-onmessagecallback-t.md) | Callback function on receiving a custom message. |
| [SetPreviewTextCallback](arkts-inputmethod-setpreviewtextcallback-t.md) | The callback of 'setPreviewText' event. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [AttachFailureReason](arkts-inputmethod-attachfailurereason-e.md) | Enumerates the specific reasons for attachment failure |
| [CapitalizeMode](arkts-inputmethod-capitalizemode-e.md) | Enumerates the capitalization mode. |
| [Direction](arkts-inputmethod-direction-e.md) | Enumerates the moving direction of cursor |
| [EnabledState](arkts-inputmethod-enabledstate-e.md) | Enumerates the enabled state. |
| [EnterKeyType](arkts-inputmethod-enterkeytype-e.md) | Enumerates the enter key type. |
| [ExtendAction](arkts-inputmethod-extendaction-e.md) | Enumerates the extend action. |
| [KeyboardStatus](arkts-inputmethod-keyboardstatus-e.md) | Enumerates the keyboard status. |
| [RequestKeyboardReason](arkts-inputmethod-requestkeyboardreason-e.md) | requestKeyboardReason of input click |
| [TextInputType](arkts-inputmethod-textinputtype-e.md) | Enumerates the text input type. |

### 常量

| 名称 | 描述 |
| --- | --- |
| [MAX_TYPE_NUM](arkts-inputmethod-con.md#MAX_TYPE_NUM) | Keyboard max number. Max value is 128. |

