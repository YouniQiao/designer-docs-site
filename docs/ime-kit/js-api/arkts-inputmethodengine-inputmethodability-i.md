# InputMethodAbility

In the following API examples, you must first use [getInputMethodAbility]inputMethodEngine.getInputMethodAbility() to obtain an **InputMethodAbility** instance, and then call the APIs using the obtained instance.

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## createPanel

```TypeScript
createPanel(ctx: BaseContext, info: PanelInfo, callback: AsyncCallback<Panel>): void
```

Creates an input method panel. This API can be called only by the input method application in the [InputMethodExtensionAbility](arkts-inputmethodextensionability-c.md#InputMethodExtensionAbility) class. This API uses an asynchronous callback to return the result. > **NOTE** > > Only one [SOFT_KEYBOARD]inputMethodEngine.PanelType panel and one > [STATUS_BAR]inputMethodEngine.PanelType panel can be created for a single input method. > The input method panel does not support subwindows. For example, subwindows cannot be created using APIs such > as > [window.createWindow]window.createWindow > , [bindContextMenu]CommonMethod<T>.bindContextMenu, > and [CustomDialog]./@internal/component/ets/custom_dialog_controller. You are advised to adopt > alternative solutions to sub-windows, such as using a [dialog box]@ohos.arkui.advanced.Dialog or > [bindMenu]CommonMethod<T>.bindMenu, or set > **showInSubwindow** to **false**.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ctx | BaseContext | Yes | Current context of the input method. |
| info | PanelInfo | Yes | Information about the input method panel. |
| callback | AsyncCallback&lt;Panel> | Yes | Callback used to return the result. If the operation is successful,  the created input method panel is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800004 | not an input method application. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { inputMethodEngine, InputMethodExtensionAbility } from '@kit.IMEKit';
import { Want } from '@kit.AbilityKit';

let panelInfo: inputMethodEngine.PanelInfo = {
  type: inputMethodEngine.PanelType.SOFT_KEYBOARD,
  flag: inputMethodEngine.PanelFlag.FLG_FIXED
}

class InputMethodExt extends InputMethodExtensionAbility {
    onCreate(want: Want): void {
        console.info(`onCreate, want: ${want.abilityName}`);
        if (!this.context) {
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

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ctx | BaseContext | Yes | Current context of the input method. |
| info | PanelInfo | Yes | Information about the input method panel. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Panel> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| 12800004 | not an input method application. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { inputMethodEngine, InputMethodExtensionAbility } from '@kit.IMEKit';
import { Want } from '@kit.AbilityKit';

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

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| panel | Panel | Yes | Input method panel to destroy. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let panelInfo: inputMethodEngine.PanelInfo = {
  type: inputMethodEngine.PanelType.SOFT_KEYBOARD,
  flag: inputMethodEngine.PanelFlag.FLG_FIXED
}

let inputPanel: inputMethodEngine.Panel | undefined = undefined;
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
    if (err !== undefined) {
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

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| panel | Panel | Yes | Input method panel to destroy. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let panelInfo: inputMethodEngine.PanelInfo = {
  type: inputMethodEngine.PanelType.SOFT_KEYBOARD,
  flag: inputMethodEngine.PanelFlag.FLG_FIXED
}

let inputPanel: inputMethodEngine.Panel | undefined = undefined;
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

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| SecurityMode | Security mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800004 | not an input method application. |

**Example**

```TypeScript
let security: inputMethodEngine.SecurityMode = inputMethodEngine.getInputMethodAbility().getSecurityMode();
console.error(`getSecurityMode, securityMode is : ${security}`);

```

## off('inputStart')

```TypeScript
off(type: 'inputStart', callback?: (kbController: KeyboardController, inputClient: InputClient) => void): void
```

Disables listening for the input method binding event. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'inputStart' | Yes | Event type, which is 'inputStart'. |
| callback | (kbController: KeyboardController, inputClient: InputClient) => void | No |  |

**Example**

```TypeScript
inputMethodEngine.getInputMethodAbility().off('inputStart');

```

## off('inputStop')

```TypeScript
off(type: 'inputStop', callback: () => void): void
```

Disables listening for the input method stop event. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'inputStop' | Yes | Event type, which is 'inputStop'. |
| callback | () => void | Yes | Callback to unregister. If this parameter is not specified, this API unregisters  all callbacks for the specified type. |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'setCallingWindow' | Yes | Event type, which is 'setCallingWindow'. |
| callback | (wid: number) => void | Yes | Callback to unregister. If this parameter is not specified, this API unregisters  all callbacks for the specified type. |

**Example**

```TypeScript
inputMethodEngine.getInputMethodAbility().off('setCallingWindow', (wid: number) => {
  console.info('inputMethodAbility delete setCallingWindow notification.');
});

```

## off('keyboardShow' | 'keyboardHide')

```TypeScript
off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void): void
```

Disables listening for a keyboard visibility event. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardShow' \| 'keyboardHide' | Yes | Event type.  - The value 'keyboardShow' indicates the keyboard display event.  - The value 'keyboardHide' indicates the keyboard hiding event. |
| callback | () => void | No |  |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardShow' \| 'keyboardHide' | Yes | Event type.  - The value 'keyboardShow' indicates the keyboard display event.  - The value 'keyboardHide' indicates the keyboard hiding event. |
| callback | () => void | No |  |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'setSubtype' | Yes | Event type, which is 'setSubtype'. |
| callback | (inputMethodSubtype: InputMethodSubtype) => void | No |  |

**Example**

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

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'securityModeChange' | Yes | Event type, which is 'securityModeChange'. |
| callback | Callback&lt;SecurityMode> | No |  |

**Example**

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

**Since:** 12

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'privateCommand' | Yes | Event type, which is 'privateCommand'. |
| callback | Callback&lt;Record&lt;string, CommandDataType>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800010 | not the preconfigured default input method. |

**Example**

```TypeScript
let privateCommandCallback: (record: Record<string, inputMethodEngine.CommandDataType>) => void =
  (record: Record<string, inputMethodEngine.CommandDataType>) => {
    for (let i: number = 0; i < record.length; i++) {
      console.info(`private command key: ${i}, value: ${record[i]}`);
    }
  }

inputMethodEngine.getInputMethodAbility().off('privateCommand', privateCommandCallback);

```

## off('callingDisplayDidChange')

```TypeScript
off(type: 'callingDisplayDidChange', callback?: Callback<number>): void
```

Disables listening for changes of the screen ID of the window associated with the edit box. This API uses an asynchronous callback to return the result.

**Since:** 18

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callingDisplayDidChange' | Yes | Event type, which is 'callingDisplayDidChange'. |
| callback | Callback&lt;number> | No |  |

**Example**

```TypeScript
inputMethodEngine.getInputMethodAbility().off('callingDisplayDidChange', (num: number) => {
  console.info('InputMethodAbility delete calling display  notification.');
});

```

## off('discardTypingText')

```TypeScript
off(type: 'discardTypingText', callback?: Callback<void>): void
```

Unsubscribes from the event of discarding candidate words and sends the event to the input method. This API uses an asynchronous callback to return the result.

**Since:** 20

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'discardTypingText' | Yes | Event type, which is 'discardTypingText'.  - 'discardTypingText': indicates unsubscribing from the event of discarding candidate words and  sending the event to the input method. |
| callback | Callback&lt;void> | No |  |

**Example**

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

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | No |  |

## offDiscardTypingText

```TypeScript
offDiscardTypingText(callback?: Callback<void>): void
```

Unsubscribe 'discardTypingText' event.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | No |  |

## offInputStart

```TypeScript
offInputStart(callback?: IMAInputStartCallback): void
```

Unsubscribe 'inputStart' event.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | IMAInputStartCallback | No |  |

## offInputStop

```TypeScript
offInputStop(callback: Callback<void>): void
```

Unsubscribe 'inputStop'.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes | the callback called when the system needs input method application  to terminate itself. |

## offKeyboardHide

```TypeScript
offKeyboardHide(callback?: Callback<void>): void
```

Unsubscribe 'keyboardHide'.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | No |  |

## offKeyboardShow

```TypeScript
offKeyboardShow(callback?: Callback<void>): void
```

Unsubscribe 'keyboardShow'.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | No |  |

## offPrivateCommand

```TypeScript
offPrivateCommand(callback?: Callback<Record<string, CommandDataType>>): void
```

Unsubscribe 'privateCommand'. This function can only be called by default input method configured by system.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, CommandDataType>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800010 | not the preconfigured default input method. |

## offSecurityModeChange

```TypeScript
offSecurityModeChange(callback?: Callback<SecurityMode>): void
```

Unsubscribe 'securityModeChange' event.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;SecurityMode> | No |  |

## offSetCallingWindow

```TypeScript
offSetCallingWindow(callback: Callback<int>): void
```

Unsubscribe 'setCallingWindow'.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | Yes | the callback called when the edit box sets calling window id. |

## offSetSubtype

```TypeScript
offSetSubtype(callback?: Callback<InputMethodSubtype>): void
```

Unsubscribe 'setSubtype'.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;InputMethodSubtype> | No |  |

## on('inputStart')

```TypeScript
on(type: 'inputStart', callback: (kbController: KeyboardController, inputClient: InputClient) => void): void
```

Enables listening for the input method binding event. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'inputStart' | Yes | Event type, which is 'inputStart'. |
| callback | (kbController: KeyboardController, inputClient: InputClient) => void | Yes | Callback used to return instances related to input method operations. |

**Example**

```TypeScript
inputMethodEngine.getInputMethodAbility()
  .on('inputStart',
    (kbController: inputMethodEngine.KeyboardController, client: inputMethodEngine.InputClient) => {
      let keyboardController: inputMethodEngine.KeyboardController = kbController;
      let inputClient: inputMethodEngine.InputClient = client;
    });

```

## on('inputStop')

```TypeScript
on(type: 'inputStop', callback: () => void): void
```

Enables listening for the input method unbinding event. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'inputStop' | Yes | Event type, which is 'inputStop'. |
| callback | () => void | Yes | Callback used to return the result. |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'setCallingWindow' | Yes | Event type, which is 'setCallingWindow'. |
| callback | (wid: number) => void | Yes | Callback used to return the window ID of the caller. |

**Example**

```TypeScript
inputMethodEngine.getInputMethodAbility().on('setCallingWindow', (wid: number) => {
  console.info('inputMethodAbility setCallingWindow');
});

```

## on('keyboardShow' | 'keyboardHide')

```TypeScript
on(type: 'keyboardShow' | 'keyboardHide', callback: () => void): void
```

Enables listening for a keyboard visibility event. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardShow' \| 'keyboardHide' | Yes | Event type.  - The value 'keyboardShow' indicates the keyboard display event.  - The value 'keyboardHide' indicates the keyboard hiding event. |
| callback | () => void | Yes | Callback used to return the result. |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyboardShow' \| 'keyboardHide' | Yes | Event type.  - The value 'keyboardShow' indicates the keyboard display event.  - The value 'keyboardHide' indicates the keyboard hiding event. |
| callback | () => void | Yes | Callback used to return the result. |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'setSubtype' | Yes | Event type, which is 'setSubtype'. |
| callback | (inputMethodSubtype: InputMethodSubtype) => void | Yes | Callback used to return the input method subtype. |

**Example**

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

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'securityModeChange' | Yes | Event type, which is 'securityModeChange'. |
| callback | Callback&lt;SecurityMode> | Yes | Callback used to return the current security mode. |

**Example**

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

**Since:** 12

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'privateCommand' | Yes | Event type, which is 'privateCommand'. |
| callback | Callback&lt;Record&lt;string, CommandDataType>> | Yes | Callback used to return the private data sent to  the input method application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800010 | not the preconfigured default input method. |

**Example**

```TypeScript
let privateCommandCallback: (record: Record<string, inputMethodEngine.CommandDataType>) => void =
  (record: Record<string, inputMethodEngine.CommandDataType>) => {
    for (let i :number = 0; i < record.length; i++) {
      console.info(`private command key: ${i}, value: ${record[i]}`);
    }
  }
inputMethodEngine.getInputMethodAbility().on('privateCommand', privateCommandCallback);

```

## on('callingDisplayDidChange')

```TypeScript
on(type: 'callingDisplayDidChange', callback: Callback<number>): void
```

Enables listening for changes of the screen ID of the window associated with the edit box. This API uses an asynchronous callback to return the result.

**Since:** 18

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callingDisplayDidChange' | Yes | Event type, which is 'callingDisplayDidChange'. |
| callback | Callback&lt;number> | Yes | Callback used to return the screen ID of the window corresponding to the  edit box. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | capability not supported. |

**Example**

```TypeScript
let callingDisplayDidChangeCallback: (num: number) => void = (num: number) => {
  console.info(`display id: ${num}`);
}
inputMethodEngine.getInputMethodAbility().on('callingDisplayDidChange', callingDisplayDidChangeCallback);

```

## on('discardTypingText')

```TypeScript
on(type: 'discardTypingText', callback: Callback<void>): void
```

Subscribes to the event of discarding candidate words and sends the event to the input method. This API uses an asynchronous callback to return the result.

**Since:** 20

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'discardTypingText' | Yes | Event type, which is 'discardTypingText'.  - 'discardTypingText'  : indicates subscribing to the event of discarding candidate words and sending the event to the input method. |
| callback | Callback&lt;void> | Yes | Callback used to return the result. If the operation is successful, err  is undefined. Otherwise, err is an error object. |

**Example**

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

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | Yes | the callback called when calling display id changed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | capability not supported. |

## onDiscardTypingText

```TypeScript
onDiscardTypingText(callback: Callback<void>): void
```

Subscribe 'discardTypingText' event.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes | the callback called when the edit box requests to discard typing text. |

## onInputStart

```TypeScript
onInputStart(callback: IMAInputStartCallback): void
```

Subscribe 'inputStart' event.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | IMAInputStartCallback | Yes | the callback called when edit box requests keyboard. |

## onInputStop

```TypeScript
onInputStop(callback: Callback<void>): void
```

Subscribe 'inputStop'.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes | the callback called when the system needs input method application  to terminate itself. |

## onKeyboardHide

```TypeScript
onKeyboardHide(callback: Callback<void>): void
```

Subscribe 'keyboardHide'.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes | the callback called when hiding keyboard. |

## onKeyboardShow

```TypeScript
onKeyboardShow(callback: Callback<void>): void
```

Subscribe 'keyboardShow'.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes | the callback called when showing keyboard. |

## onPrivateCommand

```TypeScript
onPrivateCommand(callback: Callback<Record<string, CommandDataType>>): void
```

Subscribe 'privateCommand'. This function can only be called by default input method configured by system.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, CommandDataType>> | Yes | the callback called when receiving  private command. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800010 | not the preconfigured default input method. |

## onSecurityModeChange

```TypeScript
onSecurityModeChange(callback: Callback<SecurityMode>): void
```

Subscribe 'securityModeChange' event.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;SecurityMode> | Yes | the callback called when the security mode changes. |

## onSetCallingWindow

```TypeScript
onSetCallingWindow(callback: Callback<int>): void
```

Subscribe 'setCallingWindow'.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | Yes | the callback called when the edit box sets calling window id. |

## onSetSubtype

```TypeScript
onSetSubtype(callback: Callback<InputMethodSubtype>): void
```

Subscribe 'setSubtype'.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;InputMethodSubtype> | Yes | the callback called when the system notify  to switch subtype. |

