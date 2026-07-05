# InputMethodAbility

In the following API examples, you must first use [getInputMethodAbility]inputMethodEngine.getInputMethodAbility() to obtain an **InputMethodAbility** instance, and then call the APIs using the obtained instance.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## createPanel

```TypeScript
createPanel(ctx: BaseContext, info: PanelInfo, callback: AsyncCallback<Panel>): void
```

Creates an input method panel. This API can be called only by the input method application in the [InputMethodExtensionAbility](arkts-inputmethodextensionability-c.md#InputMethodExtensionAbility) class. This API uses an asynchronous callback to return the result. > **NOTE** > > Only one [SOFT_KEYBOARD]inputMethodEngine.PanelType panel and one > [STATUS_BAR]inputMethodEngine.PanelType panel can be created for a single input method. > The input method panel does not support subwindows. For example, subwindows cannot be created using APIs such > as > [window.createWindow]window.createWindow > , [bindContextMenu]CommonMethod<T>.bindContextMenu, > and [CustomDialog]./@internal/component/ets/custom_dialog_controller. You are advised to adopt > alternative solutions to sub-windows, such as using a [dialog box]@ohos.arkui.advanced.Dialog or > [bindMenu]CommonMethod<T>.bindMenu, or set > **showInSubwindow** to **false**.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ctx | BaseContext | 是 | Current context of the input method. |
| info | PanelInfo | 是 | Information about the input method panel. |
| callback | AsyncCallback&lt;Panel> | 是 | Callback used to return the result. If the operation is successful,  the created input method panel is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800004 | not an input method application. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { inputMethodEngine, InputMethodExtensionAbility } from '@kit.IMEKit';
import { Want } from '@kit.AbilityKit';

// 创建面板信息，设置面板类型为软键盘，状态为固定态
let panelInfo: inputMethodEngine.PanelInfo = {
  type: inputMethodEngine.PanelType.SOFT_KEYBOARD,
  flag: inputMethodEngine.PanelFlag.FLG_FIXED
}

class InputMethodExt extends InputMethodExtensionAbility {
    onCreate(want: Want): void {
        console.info(`onCreate, want: ${want.abilityName}`);
        // context为InputMethodExtensionAbility类提供的上下文对象，无需额外获取
        if (this.context) {
            // 创建输入法面板
            inputMethodEngine.getInputMethodAbility()
            .createPanel(this.context, panelInfo, (err: BusinessError, panel: inputMethodEngine.Panel) => {
                if (err) {
                console.error(`Failed to createPanel. Code is ${err.code}, message is ${err.message}`);
                return;
              }
                console.info('Succeed in creating panel.');
            })
        }
    }
}

```

## createPanel

```TypeScript
createPanel(ctx: BaseContext, info: PanelInfo): Promise<Panel>
```

Creates an input method panel. This API can be called only by the input method application in the [InputMethodExtensionAbility](arkts-inputmethodextensionability-c.md#InputMethodExtensionAbility) class. This API uses a promise to return the result. > **NOTE** > > Only one [SOFT_KEYBOARD]inputMethodEngine.PanelType panel and one > [STATUS_BAR]inputMethodEngine.PanelType panel can be created for a single input method. > The input method panel does not support subwindows. For example, subwindows cannot be created using APIs such > as > [window.createWindow](docroot://windowmanager/application-window-fa.md#setting-the-child-window-of-an-application) > , [bindContextMenu]CommonMethod<T>.bindContextMenu, > and [CustomDialog]./@internal/component/ets/custom_dialog_controller. You are advised to adopt > alternative solutions to sub-windows, such as using a [dialog box]@ohos.arkui.advanced.Dialog or > [bindMenu]CommonMethod<T>.bindMenu, or set > **showInSubwindow** to **false**.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ctx | BaseContext | 是 | Current context of the input method. |
| info | PanelInfo | 是 | Information about the input method panel. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Panel> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800004 | not an input method application. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { inputMethodEngine, InputMethodExtensionAbility } from '@kit.IMEKit';
import { Want } from '@kit.AbilityKit';

// 创建面板信息，设置面板类型为软键盘，状态为固定态
let panelInfo: inputMethodEngine.PanelInfo = {
  type: inputMethodEngine.PanelType.SOFT_KEYBOARD,
  flag: inputMethodEngine.PanelFlag.FLG_FIXED
}

class InputMethodExt extends InputMethodExtensionAbility {
    onCreate(want: Want): void {
        console.info(`onCreate, want: ${want.abilityName}`);
        if (this.context) {
            inputMethodEngine.getInputMethodAbility().createPanel(this.context, panelInfo)
                .then((panel: inputMethodEngine.Panel) => {
                console.info('Succeed in creating panel.');
            }).catch((err: BusinessError) => {
                console.error(`Failed to create panel. Code is ${err.code}, message is ${err.message}`);
            })
        }
    }
}

```

## destroyPanel

```TypeScript
destroyPanel(panel: Panel, callback: AsyncCallback<void>): void
```

Destroys the specified input method panel. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| panel | Panel | 是 | Input method panel to destroy. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 创建面板信息，设置面板类型为软键盘，状态为固定态
let panelInfo: inputMethodEngine.PanelInfo = {
  type: inputMethodEngine.PanelType.SOFT_KEYBOARD,
  flag: inputMethodEngine.PanelFlag.FLG_FIXED
}

let inputPanel: inputMethodEngine.Panel | undefined = undefined;
// context为InputMethodExtensionAbility类提供的上下文对象，无需额外获取
if (this.context) {
  inputMethodEngine.getInputMethodAbility()
    .createPanel(this.context, panelInfo, (err: BusinessError, panel: inputMethodEngine.Panel) => {
      if (err) {
        console.error(`Failed to create panel. Code is ${err.code}, message is ${err.message}`);
        return;
      }
      inputPanel = panel;
      console.info('Succeed in creating panel.');
    })
}

if (inputPanel) {
  inputMethodEngine.getInputMethodAbility().destroyPanel(inputPanel, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to destroy panel. Code is ${err.code}, message is ${err.message}`);
      return;
    }
    console.info('Succeed in destroying panel.');
  })
}

```

## destroyPanel

```TypeScript
destroyPanel(panel: Panel): Promise<void>
```

Destroys the specified input method panel. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| panel | Panel | 是 | Input method panel to destroy. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 创建面板信息，设置面板类型为软键盘，状态为固定态
let panelInfo: inputMethodEngine.PanelInfo = {
  type: inputMethodEngine.PanelType.SOFT_KEYBOARD,
  flag: inputMethodEngine.PanelFlag.FLG_FIXED
}

let inputPanel: inputMethodEngine.Panel | undefined = undefined;
// context为InputMethodExtensionAbility类提供的上下文对象，无需额外获取
if (this.context) {
  inputMethodEngine.getInputMethodAbility()
    .createPanel(this.context, panelInfo, (err: BusinessError, panel: inputMethodEngine.Panel) => {
      if (err) {
        console.error(`Failed to create panel. Code is ${err.code}, message is ${err.message}`);
        return;
      }
      inputPanel = panel;
      console.info('Succeed in creating panel.');
    })
}

if (inputPanel) {
  inputMethodEngine.getInputMethodAbility().destroyPanel(inputPanel).then(() => {
    console.info('Succeed in destroying panel.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to destroy panel. Code is ${err.code}, message is ${err.message}`);
  });
}

```

## getSecurityMode

```TypeScript
getSecurityMode(): SecurityMode
```

Obtains the current security mode of the input method.

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SecurityMode | Security mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800004 | not an input method application. |

**示例：**

```TypeScript
let security: inputMethodEngine.SecurityMode = inputMethodEngine.getInputMethodAbility().getSecurityMode();
console.error(`getSecurityMode, securityMode is : ${security}`);

```

## off('inputStart')

```TypeScript
off(type: 'inputStart', callback?: (kbController: KeyboardController, inputClient: InputClient) => void): void
```

Disables listening for the input method binding event. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'inputStart' | 是 | Event type, which is 'inputStart'. |
| callback | (kbController: KeyboardController, inputClient: InputClient) => void | 否 |  |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility().off('inputStart');

```

## off('inputStop')

```TypeScript
off(type: 'inputStop', callback: () => void): void
```

Disables listening for the input method stop event. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'inputStop' | 是 | Event type, which is 'inputStop'. |
| callback | () => void | 是 | Callback to unregister. If this parameter is not specified, this API unregisters  all callbacks for the specified type. |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility().off('inputStop', () => {
  console.info('inputMethodAbility delete inputStop notification.');
});

```

## off('setCallingWindow')

```TypeScript
off(type: 'setCallingWindow', callback: (wid: number) => void): void
```

Disables listening for the window invocation setting event. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'setCallingWindow' | 是 | Event type, which is 'setCallingWindow'. |
| callback | (wid: number) => void | 是 | Callback to unregister. If this parameter is not specified, this API unregisters  all callbacks for the specified type. |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility().off('setCallingWindow', (windowId: number) => {
  console.info('inputMethodAbility delete setCallingWindow notification.');
});

```

## off('keyboardShow' | 'keyboardHide')

```TypeScript
off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void): void
```

Disables listening for a keyboard visibility event. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardShow' \| 'keyboardHide' | 是 | Event type.  - The value 'keyboardShow' indicates the keyboard display event.  - The value 'keyboardHide' indicates the keyboard hiding event. |
| callback | () => void | 否 |  |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility().off('keyboardShow', () => {
  console.info('InputMethodAbility delete keyboardShow notification.');
});
inputMethodEngine.getInputMethodAbility().off('keyboardHide', () => {
  console.info('InputMethodAbility delete keyboardHide notification.');
});

```

## off('keyboardShow' | 'keyboardHide')

```TypeScript
off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void): void
```

Disables listening for a keyboard visibility event. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardShow' \| 'keyboardHide' | 是 | Event type.  - The value 'keyboardShow' indicates the keyboard display event.  - The value 'keyboardHide' indicates the keyboard hiding event. |
| callback | () => void | 否 |  |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility().off('keyboardShow', () => {
  console.info('InputMethodAbility delete keyboardShow notification.');
});
inputMethodEngine.getInputMethodAbility().off('keyboardHide', () => {
  console.info('InputMethodAbility delete keyboardHide notification.');
});

```

## off('setSubtype')

```TypeScript
off(type: 'setSubtype', callback?: (inputMethodSubtype: InputMethodSubtype) => void): void
```

Disables listening for the input method subtype setting event. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'setSubtype' | 是 | Event type, which is 'setSubtype'. |
| callback | (inputMethodSubtype: InputMethodSubtype) => void | 否 |  |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility().off('setSubtype', () => {
  console.info('InputMethodAbility delete setSubtype notification.');
});

```

## off('securityModeChange')

```TypeScript
off(type: 'securityModeChange', callback?: Callback<SecurityMode>): void
```

Disables listening for the security mode changes of the input method. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'securityModeChange' | 是 | Event type, which is 'securityModeChange'. |
| callback | Callback&lt;SecurityMode> | 否 |  |

**示例：**

```TypeScript
let securityChangeCallback: (securityMode: inputMethodEngine.SecurityMode) => void =
  (securityMode: inputMethodEngine.SecurityMode) => {
    console.info(`InputMethodAbility securityModeChange, security is ${securityMode}`);
  };
let inputMethodAbility: inputMethodEngine.InputMethodAbility = inputMethodEngine.getInputMethodAbility();
inputMethodAbility.on('securityModeChange', securityChangeCallback);
inputMethodAbility.off('securityModeChange', securityChangeCallback);

```

## off('privateCommand')

```TypeScript
off(type: 'privateCommand', callback?: Callback<Record<string, CommandDataType>>): void
```

Disables listening for the private data event of the input method. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'privateCommand' | 是 | Event type, which is 'privateCommand'. |
| callback | Callback&lt;Record&lt;string, CommandDataType>> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800010 | not the preconfigured default input method. |

**示例：**

```TypeScript
let privateCommandCallback: (record: Record<string, inputMethodEngine.CommandDataType>) => void =
  (record: Record<string, inputMethodEngine.CommandDataType>) => {
    for (const key in record) {
      console.info(`private command key: ${key}, value: ${record[key]}`);
    }
  }

inputMethodEngine.getInputMethodAbility().off('privateCommand', privateCommandCallback);

```

## off('callingDisplayDidChange')

```TypeScript
off(type: 'callingDisplayDidChange', callback?: Callback<number>): void
```

Disables listening for changes of the screen ID of the window associated with the edit box. This API uses an asynchronous callback to return the result.

**起始版本：** 18

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'callingDisplayDidChange' | 是 | Event type, which is 'callingDisplayDidChange'. |
| callback | Callback&lt;number> | 否 |  |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility().off('callingDisplayDidChange', (displayId: number) => {
  console.info('InputMethodAbility delete calling display notification.');
});

```

## off('discardTypingText')

```TypeScript
off(type: 'discardTypingText', callback?: Callback<void>): void
```

Unsubscribes from the event of discarding candidate words and sends the event to the input method. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'discardTypingText' | 是 | Event type, which is 'discardTypingText'.  - 'discardTypingText': indicates unsubscribing from the event of discarding candidate words and  sending the event to the input method. |
| callback | Callback&lt;void> | 否 |  |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility().off('discardTypingText', () => {
  console.info('InputMethodAbility discard the typing text.');
});

```

## offCallingDisplayDidChange

```TypeScript
offCallingDisplayDidChange(callback?: Callback<int>): void
```

Unsubscribe 'callingDisplayDidChange' event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | 否 |  |

## offDiscardTypingText

```TypeScript
offDiscardTypingText(callback?: Callback<void>): void
```

Unsubscribe 'discardTypingText' event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 否 |  |

## offInputStart

```TypeScript
offInputStart(callback?: IMAInputStartCallback): void
```

Unsubscribe 'inputStart' event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | IMAInputStartCallback | 否 |  |

## offInputStop

```TypeScript
offInputStop(callback: Callback<void>): void
```

Unsubscribe 'inputStop'.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 | the callback called when the system needs input method application  to terminate itself. |

## offKeyboardHide

```TypeScript
offKeyboardHide(callback?: Callback<void>): void
```

Unsubscribe 'keyboardHide'.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 否 |  |

## offKeyboardShow

```TypeScript
offKeyboardShow(callback?: Callback<void>): void
```

Unsubscribe 'keyboardShow'.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 否 |  |

## offPrivateCommand

```TypeScript
offPrivateCommand(callback?: Callback<Record<string, CommandDataType>>): void
```

Unsubscribe 'privateCommand'. This function can only be called by default input method configured by system.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, CommandDataType>> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800010 | not the preconfigured default input method. |

## offSecurityModeChange

```TypeScript
offSecurityModeChange(callback?: Callback<SecurityMode>): void
```

Unsubscribe 'securityModeChange' event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;SecurityMode> | 否 |  |

## offSetCallingWindow

```TypeScript
offSetCallingWindow(callback: Callback<int>): void
```

Unsubscribe 'setCallingWindow'.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | 是 | the callback called when the edit box sets calling window id. |

## offSetSubtype

```TypeScript
offSetSubtype(callback?: Callback<InputMethodSubtype>): void
```

Unsubscribe 'setSubtype'.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;InputMethodSubtype> | 否 |  |

## on('inputStart')

```TypeScript
on(type: 'inputStart', callback: (kbController: KeyboardController, inputClient: InputClient) => void): void
```

Enables listening for the input method binding event. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'inputStart' | 是 | Event type, which is 'inputStart'. |
| callback | (kbController: KeyboardController, inputClient: InputClient) => void | 是 | Callback used to return instances related to input method operations. |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility()
  .on('inputStart',
    (keyboardController: inputMethodEngine.KeyboardController, inputClient: inputMethodEngine.InputClient) => {
      // 使用kbController和client进行相关操作
    });

```

## on('inputStop')

```TypeScript
on(type: 'inputStop', callback: () => void): void
```

Enables listening for the input method unbinding event. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'inputStop' | 是 | Event type, which is 'inputStop'. |
| callback | () => void | 是 | Callback used to return the result. |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility().on('inputStop', () => {
  console.info('inputMethodAbility inputStop');
});

```

## on('setCallingWindow')

```TypeScript
on(type: 'setCallingWindow', callback: (wid: number) => void): void
```

Enables listening for the window invocation setting event. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'setCallingWindow' | 是 | Event type, which is 'setCallingWindow'. |
| callback | (wid: number) => void | 是 | Callback used to return the window ID of the caller. |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility().on('setCallingWindow', (windowId: number) => {
  console.info('inputMethodAbility setCallingWindow');
});

```

## on('keyboardShow' | 'keyboardHide')

```TypeScript
on(type: 'keyboardShow' | 'keyboardHide', callback: () => void): void
```

Enables listening for a keyboard visibility event. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardShow' \| 'keyboardHide' | 是 | Event type.  - The value 'keyboardShow' indicates the keyboard display event.  - The value 'keyboardHide' indicates the keyboard hiding event. |
| callback | () => void | 是 | Callback used to return the result. |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility().on('keyboardShow', () => {
  console.info('InputMethodAbility keyboardShow.');
});
inputMethodEngine.getInputMethodAbility().on('keyboardHide', () => {
  console.info('InputMethodAbility keyboardHide.');
});

```

## on('keyboardShow' | 'keyboardHide')

```TypeScript
on(type: 'keyboardShow' | 'keyboardHide', callback: () => void): void
```

Enables listening for a keyboard visibility event. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardShow' \| 'keyboardHide' | 是 | Event type.  - The value 'keyboardShow' indicates the keyboard display event.  - The value 'keyboardHide' indicates the keyboard hiding event. |
| callback | () => void | 是 | Callback used to return the result. |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility().on('keyboardShow', () => {
  console.info('InputMethodAbility keyboardShow.');
});
inputMethodEngine.getInputMethodAbility().on('keyboardHide', () => {
  console.info('InputMethodAbility keyboardHide.');
});

```

## on('setSubtype')

```TypeScript
on(type: 'setSubtype', callback: (inputMethodSubtype: InputMethodSubtype) => void): void
```

Enables listening for the input method subtype setting event. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'setSubtype' | 是 | Event type, which is 'setSubtype'. |
| callback | (inputMethodSubtype: InputMethodSubtype) => void | 是 | Callback used to return the input method subtype. |

**示例：**

```TypeScript
import { InputMethodSubtype } from '@kit.IMEKit';

inputMethodEngine.getInputMethodAbility().on('setSubtype', (inputMethodSubtype: InputMethodSubtype) => {
  console.info('InputMethodAbility setSubtype.');
});

```

## on('securityModeChange')

```TypeScript
on(type: 'securityModeChange', callback: Callback<SecurityMode>): void
```

Enables listening for the security mode changes of the input method. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'securityModeChange' | 是 | Event type, which is 'securityModeChange'. |
| callback | Callback&lt;SecurityMode> | 是 | Callback used to return the current security mode. |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility()
  .on('securityModeChange', (securityMode: inputMethodEngine.SecurityMode) => {
    console.info(`InputMethodAbility securityModeChange, security is ${securityMode}`);
  });

```

## on('privateCommand')

```TypeScript
on(type: 'privateCommand', callback: Callback<Record<string, CommandDataType>>): void
```

Enables listening for the private data event of the input method. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'privateCommand' | 是 | Event type, which is 'privateCommand'. |
| callback | Callback&lt;Record&lt;string, CommandDataType>> | 是 | Callback used to return the private data sent to  the input method application. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800010 | not the preconfigured default input method. |

**示例：**

```TypeScript
let privateCommandCallback: (record: Record<string, inputMethodEngine.CommandDataType>) => void =
  (record: Record<string, inputMethodEngine.CommandDataType>) => {
    for (const key in record) {
      console.info(`private command key: ${key}, value: ${record[key]}`);
    }
  }
inputMethodEngine.getInputMethodAbility().on('privateCommand', privateCommandCallback);

```

## on('callingDisplayDidChange')

```TypeScript
on(type: 'callingDisplayDidChange', callback: Callback<number>): void
```

Enables listening for changes of the screen ID of the window associated with the edit box. This API uses an asynchronous callback to return the result.

**起始版本：** 18

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'callingDisplayDidChange' | 是 | Event type, which is 'callingDisplayDidChange'. |
| callback | Callback&lt;number> | 是 | Callback used to return the screen ID of the window corresponding to the  edit box. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility().on('callingDisplayDidChange', (displayId: number) => {
  console.info(`display id: ${displayId}`);
});
inputMethodEngine.getInputMethodAbility().on('callingDisplayDidChange', callingDisplayDidChangeCallback);

```

## on('discardTypingText')

```TypeScript
on(type: 'discardTypingText', callback: Callback<void>): void
```

Subscribes to the event of discarding candidate words and sends the event to the input method. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'discardTypingText' | 是 | Event type, which is 'discardTypingText'.  - 'discardTypingText'  : indicates subscribing to the event of discarding candidate words and sending the event to the input method. |
| callback | Callback&lt;void> | 是 | Callback used to return the result. If the operation is successful, err  is undefined. Otherwise, err is an error object. |

**示例：**

```TypeScript
inputMethodEngine.getInputMethodAbility().on('discardTypingText', () => {
  console.info('InputMethodAbility discard the typing text.');
});

```

## onCallingDisplayDidChange

```TypeScript
onCallingDisplayDidChange(callback: Callback<int>): void
```

Subscribe 'callingDisplayDidChange' event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | 是 | the callback called when calling display id changed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |

## onDiscardTypingText

```TypeScript
onDiscardTypingText(callback: Callback<void>): void
```

Subscribe 'discardTypingText' event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 | the callback called when the edit box requests to discard typing text. |

## onInputStart

```TypeScript
onInputStart(callback: IMAInputStartCallback): void
```

Subscribe 'inputStart' event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | IMAInputStartCallback | 是 | the callback called when edit box requests keyboard. |

## onInputStop

```TypeScript
onInputStop(callback: Callback<void>): void
```

Subscribe 'inputStop'.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 | the callback called when the system needs input method application  to terminate itself. |

## onKeyboardHide

```TypeScript
onKeyboardHide(callback: Callback<void>): void
```

Subscribe 'keyboardHide'.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 | the callback called when hiding keyboard. |

## onKeyboardShow

```TypeScript
onKeyboardShow(callback: Callback<void>): void
```

Subscribe 'keyboardShow'.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 | the callback called when showing keyboard. |

## onPrivateCommand

```TypeScript
onPrivateCommand(callback: Callback<Record<string, CommandDataType>>): void
```

Subscribe 'privateCommand'. This function can only be called by default input method configured by system.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, CommandDataType>> | 是 | the callback called when receiving  private command. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800010 | not the preconfigured default input method. |

## onSecurityModeChange

```TypeScript
onSecurityModeChange(callback: Callback<SecurityMode>): void
```

Subscribe 'securityModeChange' event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;SecurityMode> | 是 | the callback called when the security mode changes. |

## onSetCallingWindow

```TypeScript
onSetCallingWindow(callback: Callback<int>): void
```

Subscribe 'setCallingWindow'.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | 是 | the callback called when the edit box sets calling window id. |

## onSetSubtype

```TypeScript
onSetSubtype(callback: Callback<InputMethodSubtype>): void
```

Subscribe 'setSubtype'.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;InputMethodSubtype> | 是 | the callback called when the system notify  to switch subtype. |

