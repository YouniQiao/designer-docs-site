# Panel

In the following API examples, you must first use [createPanel]inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo, callback: AsyncCallback<Panel>) to obtain a **Panel** instance, and then call the APIs using the obtained instance.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## adjustPanelRect

```TypeScript
adjustPanelRect(flag: PanelFlag, rect: PanelRect): void
```

Adjusts the panel rectangle. After the API is called, the adjust request is submitted to the input method framework, but the execution is not complete. > **NOTE** > > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** > state. > > This API returns the result synchronously. The return only indicates that the system receives the setting > request, not that the setting is complete. > > When the **PanelFlag** of a smartphone is **FLG_FLOATING** and the panel width is between 0 and 288 vp, the > function buttons at the bottom of the panel will dynamically adjust their size according to the panel width. To > ensure the optimal user experience, it is recommended that the panel width be no less than 90 vp.

**Since:** 12

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flag | PanelFlag | Yes | Type of the state of the target panel. It can be FLG_FIXED or FLG_FLOATING. |
| rect | PanelRect | Yes | Landscape rectangle and portrait rectangle of the target panel. For the panel of the  fixed state, the height cannot exceed 70% of the screen height, and the width cannot exceed the screen width.  For the panel of the floating state, the height cannot exceed the screen height, and the width cannot exceed  the screen width. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800013 | window manager service error. |

**Example**

```TypeScript
import { window } from '@kit.ArkUI';

let landscapeRect: window.Rect = {
  left: 100,
  top: 100,
  width: 400,
  height: 400
};

let portraitRect: window.Rect = {
  left: 200,
  top: 200,
  width: 300,
  height: 300
};

// Target panel status type.
let panelFlag: inputMethodEngine.PanelFlag = inputMethodEngine.PanelFlag.FLG_FIXED;
// X-coordinate, Y-coordinate, width, and height of the target panel in both landscape and portrait orientations.
let panelRect: inputMethodEngine.PanelRect = {
  landscapeRect: landscapeRect,
  portraitRect: portraitRect
};
panel.adjustPanelRect(panelFlag, panelRect);

```

## adjustPanelRect

```TypeScript
adjustPanelRect(flag: PanelFlag, rect: EnhancedPanelRect): void
```

Adjusts the panel rectangle, and customizes the avoid area and touch area. > **NOTE** > > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** > state. This API is compatible with > [adjustPanelRect]inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: PanelRect). If the > input parameter **rect** contains only the **landscapeRect** and **portraitRect** attributes, > [adjustPanelRect]inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: PanelRect) is called by > default. > > This API returns the result synchronously. The return only indicates that the system receives the setting > request, not that the setting is complete. > > When the **PanelFlag** of a smartphone is **FLG_FLOATING** and the panel width is between 0 and 288 vp, the > function buttons at the bottom of the panel will dynamically adjust their size according to the panel width. To > ensure the optimal user experience, it is recommended that the panel width be no less than 90 vp.

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flag | PanelFlag | Yes | Type of the state of the target panel. It can be FLG_FIXED or FLG_FLOATING. |
| rect | EnhancedPanelRect | Yes | The target panel rectangle, avoid area, and touch area. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800013 | window manager service error. |
| 12800017 | invalid panel type or panel flag. |

**Example**

```TypeScript
import { window } from '@kit.ArkUI';

let landscapeRect1: window.Rect = {
  left: 300,
  top: 650,
  width: 2000,
  height: 500
};
let landscapeInputRegion: Array<window.Rect> = [landscapeRect1];

let portraitRect1: window.Rect = {
  left: 0,
  top: 1800,
  width: 1200,
  height: 800
}
let portraitInputRegion: Array<window.Rect> = [portraitRect1];
// Target panel status type.
let panelFlag: inputMethodEngine.PanelFlag = inputMethodEngine.PanelFlag.FLG_FIXED;
// Location, size, avoid area, and hot zone of the target panel in both landscape and portrait orientations.
let panelRect: inputMethodEngine.EnhancedPanelRect = {
  landscapeAvoidY: 650,
  landscapeInputRegion: landscapeInputRegion,
  portraitAvoidY: 1800,
  portraitInputRegion: portraitInputRegion,
  fullScreenMode: true
};
panel.adjustPanelRect(panelFlag, panelRect);

```

## changeFlag

```TypeScript
changeFlag(flag: PanelFlag): void
```

Changes the state type ([PanelFlag]inputMethodEngine.PanelFlag) of this input method panel. This API only works for [SOFT_KEYBOARD]inputMethodEngine.PanelType panels.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flag | PanelFlag | Yes | Type of the state of the target panel. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

**Example**

```TypeScript
let panelFlag: inputMethodEngine.PanelFlag = inputMethodEngine.PanelFlag.FLG_FIXED;
panel.changeFlag(panelFlag);

```

## getDisplayId

```TypeScript
getDisplayId(): Promise<long>
```

Obtains the window ID. This API uses a promise to return the result.

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise used to return the result. It returns displayId of the window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800002 | input method engine error. Possible causes:  1.input method panel not created. 2.the input method application does not subscribe to related events. |
| 12800013 | window manager service error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

panel.getDisplayId().then((result: number) => {
  console.info('get displayId:' + result);
}).catch((err: BusinessError) => {
  console.error(`Failed to get displayId. Code is ${err.code}, message is ${err.message}`);
});

```

## getImmersiveMode

```TypeScript
getImmersiveMode(): ImmersiveMode
```

Obtains the immersive mode of the input method application.

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| ImmersiveMode | Immersive mode. |

**Example**

```TypeScript
let mode: inputMethodEngine.ImmersiveMode = panel.getImmersiveMode();

```

## getSystemPanelCurrentInsets

```TypeScript
getSystemPanelCurrentInsets(displayId: number): Promise<SystemPanelInsets>
```

Obtains the offset area of the soft keyboard relative to the system panel under the current state of the specified screen (for example, folded or unfolded) and the current state of the input method keyboard (for example, floating or fixed). This API uses a promise to return the result.

**Since:** 21

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | number | Yes | Display ID of the screen where the input method keyboard is located. It can be  obtained by calling [getDisplayId]inputMethodEngine.Panel.getDisplayId. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SystemPanelInsets> | Promise used to return the offset area between the input method keyboard  and the system panel. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800013 | window manager service error. |
| 12800017 | invalid panel type or panel flag. Possible causes:  1. Current panel's type is not SOFT_KEYBOARD. 2. Panel's flag is not FLG_FIXED or FLG_FLOATING. |
| 12800022 | invalid displayId. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { inputMethodEngine } from '@kit.IMEKit';

let inputMethodAbility: inputMethodEngine.InputMethodAbility = inputMethodEngine.getInputMethodAbility();
let panelConfig: inputMethodEngine.PanelInfo = {
  type: inputMethodEngine.PanelType.SOFT_KEYBOARD,
  flag: inputMethodEngine.PanelFlag.FLG_FIXED
}
// The following logic needs to be executed in InputMethodExtensionAbility. this.context is the context of InputMethodExtensionAbility.
inputMethodAbility.createPanel(this.context, panelConfig).then( (panel: inputMethodEngine.Panel) =>{
  panel.getDisplayId().then((displayId: number) => {
    panel.getSystemPanelCurrentInsets(displayId).then((insets: inputMethodEngine.SystemPanelInsets) => {
      console.info(`getSystemPanelCurrentInsets success, insets is { left: ${insets.left}, right: ${insets.right}, bottom: ${insets.bottom} }`);
    }).catch((error: BusinessError) => {
      console.error(`getSystemPanelCurrentInsets failed, code: ${error.code}, message: ${error.message}`);
    })
  });
})

```

## getSystemPanelCurrentInsets

```TypeScript
getSystemPanelCurrentInsets(displayId: long): Promise<SystemPanelInsets | null>
```

Get the current insets of the system panel of a specified display. <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED or FLG_FLOATING.</p> <p>This interface only supports obtaining the current insets values of a display. When the display undergoes orientation changes, or is folded or unfolded, it is necessary to reinvoke this interface to get the latest values.</p>

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | long | Yes | specify which display's system panel insets. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SystemPanelInsets \| null> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800013 | window manager service error. |
| 12800017 | invalid panel type or panel flag. Possible causes:  1. Current panel's type is not SOFT_KEYBOARD. 2. Panel's flag is not FLG_FIXED or FLG_FLOATING. |
| 12800022 | invalid displayId. |

## hide

```TypeScript
hide(callback: AsyncCallback<void>): void
```

Hides this panel. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

panel.hide((err: BusinessError) => {
  if (err) {
    console.error(`Failed to hide panel. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in hiding the panel.');
});

```

## hide

```TypeScript
hide(): Promise<void>
```

Hides this panel. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

panel.hide().then(() => {
  console.info('Succeeded in hiding the panel.');
}).catch((err: BusinessError) => {
  console.error(`Failed to hide panel. Code is ${err.code}, message is ${err.message}`);
});

```

## moveTo

```TypeScript
moveTo(x: int, y: int, callback: AsyncCallback<void>): void
```

Moves this input method panel to the specified position. This API uses an asynchronous callback to return the result. This API does not work on panels in the [FLG_FIXED]inputMethodEngine.PanelFlag state.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | int | Yes | Distance to move along the horizontal axis, in px. A positive value indicates moving  rightwards. The value must be an integer. |
| y | int | Yes | Distance to move along the vertical axis, in px. A positive value indicates moving downwards.  The value must be an integer. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

panel.moveTo(300, 300, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to move panel. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in moving the panel.');
});

```

## moveTo

```TypeScript
moveTo(x: int, y: int): Promise<void>
```

Moves this input method panel to the specified position. This API uses a promise to return the result. This API does not work on panels in the [FLG_FIXED]inputMethodEngine.PanelFlag state.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | int | Yes | Distance to move along the horizontal axis, in px. A positive value indicates moving  rightwards. The value must be an integer. |
| y | int | Yes | Distance to move along the vertical axis, in px. A positive value indicates moving downwards.  The value must be an integer. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

panel.moveTo(300, 300).then(() => {
  console.info('Succeeded in moving the panel.');
}).catch((err: BusinessError) => {
  console.error(`Failed to move panel. Code is ${err.code}, message is ${err.message}`);
});

```

## off('show')

```TypeScript
off(type: 'show', callback?: () => void): void
```

Disables listening for the show event of this panel. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'show' | Yes | Event type, which is 'show'. |
| callback | () => void | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

**Example**

```TypeScript
panel.off('show');

```

## off('hide')

```TypeScript
off(type: 'hide', callback?: () => void): void
```

Disables listening for the hide event of this panel. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hide' | Yes | Event type, which is 'hide'. |
| callback | () => void | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

**Example**

```TypeScript
panel.off('hide');

```

## off('sizeChange')

```TypeScript
off(type: 'sizeChange', callback?: SizeChangeCallback): void
```

Disables listening for the panel size change. This API uses an asynchronous callback to return the result. > **NOTE** > > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** > state. When you call **adjustPanelRect** to adjust the panel size, the system calculates the final value based > on certain rules (for example, whether the panel size exceeds the screen). This callback can be used to obtain > the actual panel size to refresh the panel layout. > > - This API is supported from API version 12 to 14. The callback function of this API contains only mandatory > parameters of the [window.Size]window.Size type. > > - Since API version 15, after the > [adjustPanelRect]inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: EnhancedPanelRect) API > is called, an optional parameter of the [KeyboardArea]inputMethodEngine.KeyboardArea type is added to > the callback function of this API.

**Since:** 12

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sizeChange' | Yes | Event type, which is 'sizeChange'. |
| callback | SizeChangeCallback | No |  |

**Example**

```TypeScript
import { window } from '@kit.ArkUI';

panel.off('sizeChange', (windowSize: window.Size) => {
  console.info(`panel size changed, width: ${windowSize.width}, height: ${windowSize.height}`);
});

```

## off('sizeUpdate')

```TypeScript
off(type: 'sizeUpdate', callback?: SizeUpdateCallback): void
```

Disables listening for the panel size change. This API uses an asynchronous callback to return the result. > **NOTE** > > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** > state. When you call > [adjustPanelRect](arkts-inputmethodengine-panel-i.md#adjustPanelRect) > to adjust the panel size, the system calculates the final value based on certain rules (for example, whether > the panel size exceeds the screen). This callback can be used to obtain the actual panel size to refresh the > panel layout.

**Since:** 14

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sizeUpdate' | Yes | Event type, which is 'sizeUpdate'. |
| callback | SizeUpdateCallback | No |  |

**Example**

```TypeScript
import { window } from '@kit.ArkUI';

panel.off('sizeUpdate', (windowSize: window.Size, keyboardArea: inputMethodEngine.KeyboardArea) => {
  console.info(`panel size changed, width: ${windowSize.width}, height: ${windowSize.height}`);
});

```

## offHide

```TypeScript
offHide(callback?: Callback<void>): void
```

Unregisters panel hide event.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | No |  |

## offShow

```TypeScript
offShow(callback?: Callback<void>): void
```

Unregisters panel show event.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | No |  |

## offSizeChange

```TypeScript
offSizeChange(callback?: SizeChangeCallback): void
```

Unsubscribe 'sizeChange' event. <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | SizeChangeCallback | No |  |

## offSizeUpdate

```TypeScript
offSizeUpdate(callback?: SizeUpdateCallback): void
```

Unsubscribe 'sizeUpdate' event. <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | SizeUpdateCallback | No |  |

## on('show')

```TypeScript
on(type: 'show', callback: () => void): void
```

Enables listening for the show event of this panel. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'show' | Yes | Event type, which is 'show'. |
| callback | () => void | Yes | Callback used to return the result. |

**Example**

```TypeScript
panel.on('show', () => {
  console.info('Panel is showing.');
});

```

## on('hide')

```TypeScript
on(type: 'hide', callback: () => void): void
```

Enables listening for the hide event of this panel. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hide' | Yes | Event type, which is 'hide'. |
| callback | () => void | Yes | Callback used to return the result. |

**Example**

```TypeScript
panel.on('hide', () => {
  console.info('Panel is hiding.');
});

```

## on('sizeChange')

```TypeScript
on(type: 'sizeChange', callback: SizeChangeCallback): void
```

Enables listening for the panel size change. This API uses an asynchronous callback to return the result. > **NOTE** > > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** > state. When you call **adjustPanelRect** to adjust the panel size, the system calculates the final value based > on certain rules (for example, whether the panel size exceeds the screen). This callback can be used to obtain > the actual panel size to refresh the panel layout. > > - This API is supported from API version 12 to 14. The callback function of this API contains only mandatory > parameters of the [window.Size]window.Size type. > > - Since API version 15, after the > [adjustPanelRect]inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: EnhancedPanelRect) API > is called, an optional parameter of the [KeyboardArea]inputMethodEngine.KeyboardArea type is added to > the callback function of this API.

**Since:** 12

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sizeChange' | Yes | Event type, which is 'sizeChange'. |
| callback | SizeChangeCallback | Yes | Callback used to return the size of the soft keyboard panel, including  the width and height. [since 15] |

**Example**

```TypeScript
import { window } from '@kit.ArkUI';

panel.on('sizeChange', (windowSize: window.Size) => {
  console.info(`panel size changed, width: ${windowSize.width}, height: ${windowSize.height}`);
});

panel.on('sizeChange', (windowSize: window.Size, keyboardArea: inputMethodEngine.KeyboardArea) => {
  console.info(`panel size changed, windowSize: ${windowSize.width}, ${windowSize.height}, ` +
    `keyboardArea: ${keyboardArea.top}, ${keyboardArea.bottom}, ${keyboardArea.left}, ${keyboardArea.right}`);
});

```

## on('sizeUpdate')

```TypeScript
on(type: 'sizeUpdate', callback: SizeUpdateCallback): void
```

Listens for the panel size change. This API uses an asynchronous callback to return the result. > **NOTE** > > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** > state. When you call > [adjustPanelRect](arkts-inputmethodengine-panel-i.md#adjustPanelRect) > to adjust the panel size, the system calculates the final value based on certain rules (for example, whether > the panel size exceeds the screen). This callback can be used to obtain the actual panel size to refresh the > panel layout.

**Since:** 14

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sizeUpdate' | Yes | Event type, which is 'sizeUpdate'. |
| callback | SizeUpdateCallback | Yes | Callback used to return the size of the soft keyboard panel, including  the width and height. |

**Example**

```TypeScript
import { window } from '@kit.ArkUI';

panel.on('sizeUpdate', (windowSize: window.Size, keyboardArea: inputMethodEngine.KeyboardArea) => {
  console.info(`panel size changed, windowSize: ${windowSize.width}, ${windowSize.height}, ` +
    `keyboardArea: ${keyboardArea.top}, ${keyboardArea.bottom}, ${keyboardArea.left}, ${keyboardArea.right}`);
});

```

## onHide

```TypeScript
onHide(callback: Callback<void>): void
```

Registers panel hide event. <p>The "hide" events are triggered when the panel is hidden.</p>

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes | the callback called when the panel hides. |

## onShow

```TypeScript
onShow(callback: Callback<void>): void
```

Registers panel show event. <p>The "show" events are triggered when the panel is shown.</p>

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes | the callback called when the panel shows. |

## onSizeChange

```TypeScript
onSizeChange(callback: SizeChangeCallback): void
```

Subscribe 'sizeChange' event. <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | SizeChangeCallback | Yes | the callback called when the panel size changes. |

## onSizeUpdate

```TypeScript
onSizeUpdate(callback: SizeUpdateCallback): void
```

Subscribe 'sizeUpdate' event. <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | SizeUpdateCallback | Yes | the callback called when the panel size updates. |

## resize

```TypeScript
resize(width: long, height: long, callback: AsyncCallback<void>): void
```

Resizes this input method panel. This API uses an asynchronous callback to return the result. > **NOTE** > > The panel width cannot exceed the screen width, and the panel height cannot be 0.7 times higher than the screen > height. > > When the **PanelFlag** of a smartphone is **FLG_FLOATING** and the panel width is between 0 and 288 vp, the > function buttons at the bottom of the panel will dynamically adjust their size according to the panel width. To > ensure the optimal user experience, it is recommended that the panel width be no less than 90 vp.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | long | Yes | Target width of the panel, in px. The value is an integer greater than or equal to 0, and  cannot be greater than the screen width. |
| height | long | Yes | Target height of the panel, in px. The value is an integer greater than or equal to 0,  and cannot be greater than 0.7 times the screen height. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

panel.resize(500, 1000, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to resize panel. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in changing the panel size.');
});

```

## resize

```TypeScript
resize(width: long, height: long): Promise<void>
```

Resizes this input method panel. This API uses a promise to return the result. > **NOTE** > > The panel width cannot exceed the screen width, and the panel height cannot be 0.7 times higher than the screen > height. > > When the **PanelFlag** of a smartphone is **FLG_FLOATING** and the panel width is between 0 and 288 vp, the > function buttons at the bottom of the panel will dynamically adjust their size according to the panel width. To > ensure the optimal user experience, it is recommended that the panel width be no less than 90 vp.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | long | Yes | Target width of the panel, in px. The value is an integer greater than or equal to 0, and  cannot be greater than the screen width. |
| height | long | Yes | Target height of the panel, in px. The value is an integer greater than or equal to 0,  and cannot be greater than 0.7 times the screen height. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

panel.resize(500, 1000).then(() => {
  console.info('Succeeded in changing the panel size.');
}).catch((err: BusinessError) => {
  console.error(`Failed to resize panel. Code is ${err.code}, message is ${err.message}`);
});

```

## setImmersiveEffect

```TypeScript
setImmersiveEffect(effect: ImmersiveEffect): void
```

Sets the immersive effect of the input method application. - Gradient mode and fluid light mode can be used only when the [immersive mode]inputMethodEngine.Panel.setImmersiveMode is enabled. - The fluid light mode can be used only when the gradient mode is enabled. - If the gradient mode is disabled, the gradient height must be 0 px. - Only system applications can set the fluid light mode. - The current API can be called only after any of the following APIs is called: - [adjustPanelRect]inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: PanelRect) (available since API version 12) - [adjustPanelRect]inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: EnhancedPanelRect) ( available since API version 15) - [resize]inputMethodEngine.Panel.resize(width: long, height: long, callback: AsyncCallback<void>) ( available since API version 10)

**Since:** 20

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| effect | ImmersiveEffect | Yes | Immersive effect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | capability not supported. |
| 12800002 | input method engine error. Possible causes:  1. input method panel not created. 2. the input method application does not subscribe to related events. |
| 12800013 | window manager service error. |
| 12800020 | invalid immersive effect.  1. The gradient mode and the fluid light mode can only be used when the immersive mode is enabled.  2. The fluid light mode can only be used when the gradient mode is enabled.  3. When the gradient mode is not enabled, the gradient height can only be 0. |
| 12800021 | this operation is allowed only after adjustPanelRect or resize is called. |

**Example**

```TypeScript
let effect: inputMethodEngine.ImmersiveEffect = {
  gradientHeight: 100,
  gradientMode: inputMethodEngine.GradientMode.LINEAR_GRADIENT
}
panel.setImmersiveEffect(effect);

```

## setImmersiveMode

```TypeScript
setImmersiveMode(mode: ImmersiveMode): void
```

Sets the immersive mode of the input method application. You can only set the immersion mode to **NONE_IMMERSIVE**, **LIGHT_IMMERSIVE**, or **DARK_IMMERSIVE**. **IMMERSIVE** cannot be set.

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | ImmersiveMode | Yes | Immersive mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Incorrect parameter types; 2.Parameter verification failed. |
| 12800002 | input method engine error. Possible causes:  1.input method panel not created. 2.the input method application does not subscribe to related events. |
| 12800013 | window manager service error. |

**Example**

```TypeScript
panel.setImmersiveMode(inputMethodEngine.ImmersiveMode.LIGHT_IMMERSIVE);

```

## setKeepScreenOn

```TypeScript
setKeepScreenOn(isKeepScreenOn: boolean): Promise<void>
```

Sets to keep the screen always on. This API uses a promise to return the result. > **NOTE** > > - When the keyboard is displayed, the screen stays on. When the keyboard is hidden, the screen turns off. > > - You need to use this API properly. Set the attribute to **true** in necessary scenarios (for example, voice > input) and reset this attribute to **false** after exiting necessary scenarios. In other scenarios, do not use > this API.

**Since:** 20

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isKeepScreenOn | boolean | Yes | Whether to keep the screen always on. The value true means that the  screen is always on; the value false means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800013 | window manager service error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

panel.setKeepScreenOn(true).then(() => {
  console.info(`setKeepScreenOn success.`);
}).catch((error: BusinessError) => {
  console.error(`setKeepScreenOn failed, code: ${error.code}, message: ${error.message}`);
})

```

## setPrivacyMode

```TypeScript
setPrivacyMode(isPrivacyMode: boolean): void
```

Sets the input method panel to privacy mode. In privacy mode, screenshot and screen recording are blocked.

**Since:** 11

**Required permissions:** 

 ohos.permission.PRIVACY_WINDOW

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isPrivacyMode | boolean | Yes | Whether to set the input method panel to privacy mode.  - true: privacy mode.  - false: non-privacy mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permissions check fails. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
let isPrivacyMode: boolean = true;
panel.setPrivacyMode(isPrivacyMode);

```

## setShadow

```TypeScript
setShadow(radius: double, color: string, offsetX: double, offsetY: double): void
```

Sets the shadow effect of the input method window. > **NOTE** > > Panels whose [PanelType](arkts-inputmethodengine-paneltype-e.md#PanelType) is **SOFT_KEYBOARD** and > [PanelFlag](arkts-inputmethodengine-panelflag-e.md#PanelFlag) is **FLG_FIXED** are not supported.

**Since:** 22

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| radius | double | Yes | Radius of the shadow. The value is a floating-point number greater than or equal to 0.  0, in px. The value 0.0 means that the shadow is disabled for the window borders. |
| color | string | Yes | Color of the shadow. The value is a hexadecimal RGB or ARGB color code and is case  insensitive, for example, `#000000` or `#FF000000`. |
| offsetX | double | Yes | Offset of the shadow along the x-axis, in pixels. The value is a floating-point  number. |
| offsetY | double | Yes | Offset of the shadow along the y-axis, in pixels. The value is a floating-point  number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | not system application. |
| 12800013 | window manager service error. |
| 12800017 | invalid panel type or panel flag.  Possible causes: Panel's flag is FLG_FIXED. |

**Example**

```TypeScript
panel.setShadow(20, '#000000', 20, 20);

```

## setSystemPanelButtonColor

```TypeScript
setSystemPanelButtonColor(fillColor: string | undefined, backgroundColor: string | undefined): Promise<void>
```

Sets the color of the function buttons and their background color on the current panel. This API uses a promise to return the result.

**Since:** 22

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fillColor | string \| undefined | Yes | Color of the function buttons. The value can be [#01000000, #FFFFFFFF]  or [#000000, #FFFFFF]. The value of the fully transparent alpha channel (#00xxxxxx) is not supported. |
| backgroundColor | string \| undefined | Yes | Background color of the function buttons. The value can be  [#01000000, #FFFFFFFF] or [#000000, #FFFFFF]. The value of the fully transparent alpha channel (#00xxxxxx) is  not supported. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no result. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let fillColor = "#FFFF00";
  let backgroundColor = "#0000FF";
  this.panel.setSystemPanelButtonColor(fillColor, backgroundColor).then(() => {
    console.info(`setSystemPanelButtonColor success.`);
  }).catch((error: BusinessError) => {
    console.error(`setSystemPanelButtonColor failed, code: ${error.code}, message: ${error.message}`);
  })
} catch (err) {
  let error = err as BusinessError;
  console.error(`setSystemPanelButtonColor failed, code: ${error.code}, message: ${error.message}`);
}

```

## setUiContent

```TypeScript
setUiContent(path: string, callback: AsyncCallback<void>): void
```

Loads content from a page to this input method panel. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Path of the page from which the content will be loaded. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

panel.setUiContent('pages/page2/page2', (err: BusinessError) => {
  if (err) {
    console.error(`Failed to setUiContent. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in setting the content.');
});

```

## setUiContent

```TypeScript
setUiContent(path: string): Promise<void>
```

Loads content from a page to this input method panel. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Path of the page from which the content will be loaded. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

panel.setUiContent('pages/page2/page2').then(() => {
  console.info('Succeeded in setting the content.');
}).catch((err: BusinessError) => {
  console.error(`Failed to setUiContent. Code is ${err.code}, message is ${err.message}`);
});

```

## setUiContent

```TypeScript
setUiContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void
```

Loads content from a page linked to LocalStorage to this input method panel. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Path of the page linked to LocalStorage. |
| storage | LocalStorage | Yes | Storage unit that provides storage for mutable and immutable state variables in  the application. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let storage: LocalStorage = new LocalStorage();
storage.setOrCreate('storageSimpleProp', 121);
panel.setUiContent('pages/page2/page2', storage, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to setUiContent. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in setting the content.');
});

```

## setUiContent

```TypeScript
setUiContent(path: string, storage: LocalStorage): Promise<void>
```

Loads content from a page linked to LocalStorage to this panel. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Path of the page from which the content will be loaded. |
| storage | LocalStorage | Yes | Storage unit that provides storage for mutable and immutable state variables in  the application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let storage: LocalStorage = new LocalStorage();
storage.setOrCreate('storageSimpleProp', 121);
panel.setUiContent('pages/page2/page2', storage).then(() => {
  console.info('Succeeded in setting the content.');
}).catch((err: BusinessError) => {
  console.error(`Failed to setUiContent. Code is ${err.code}, message is ${err.message}`);
});

```

## show

```TypeScript
show(callback: AsyncCallback<void>): void
```

Shows this input method panel. This API uses an asynchronous callback to return the result. It can be called when the input method is bound to the edit box.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined. Otherwise, err is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

panel.show((err: BusinessError) => {
  if (err) {
    console.error(`Failed to show panel. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in showing the panel.');
});

```

## show

```TypeScript
show(): Promise<void>
```

Shows this input method panel. This API uses a promise to return the result. It can be called when the input method is bound to the edit box.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

panel.show().then(() => {
  console.info('Succeeded in showing the panel.');
}).catch((err: BusinessError) => {
  console.error(`Failed to show panel. Code is ${err.code}, message is ${err.message}`);
});

```

## startMoving

```TypeScript
startMoving(): void
```

Sends a command to start moving the window. The window can be moved only when the mouse is clicked.

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800002 | input method engine error. Possible causes:  1.input method panel not created. 2.the input method application does not subscribe to related events. |
| 12800013 | window manager service error. |
| 12800017 | invalid panel type or panel flag. |
| 801 | capability not supported. [since 18] |

**Example**

```TypeScript
panel.startMoving();

```

## updatePanelRect

```TypeScript
updatePanelRect(flag: PanelFlag, rect: PanelRect): Promise<void>
```

Update the panel rectangle. This API uses a promise to return the result. > **NOTE** > > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** > state. > > When the **PanelFlag** of a smartphone is **FLG_FLOATING** and the panel width is between 0 and 288 vp, the > function buttons at the bottom of the panel will dynamically update their size according to the panel width. To > ensure the optimal user experience, it is recommended that the panel width be no less than 90 vp.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flag | PanelFlag | Yes | Type of the state of the target panel. It can be FLG_FIXED or FLG_FLOATING. |
| rect | PanelRect | Yes | Landscape rectangle and portrait rectangle of the target panel. For the panel of the  fixed state, the height cannot exceed 70% of the screen height, and the width cannot exceed the screen width.  For the panel of the floating state, the height cannot exceed the screen height, and the width cannot exceed  the screen width. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800013 | window manager service error. |

## updatePanelRect

```TypeScript
updatePanelRect(flag: PanelFlag, rect: EnhancedPanelRect): Promise<void>
```

Update the panel rectangle, and customizes the avoid area and touch area. This API uses a promise to return the result. > **NOTE** > > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** > state. This API is compatible with > [updatePanelRect]inputMethodEngine.Panel.updatePanelRect(flag: PanelFlag, rect: PanelRect). > If the input parameter **rect** contains only the **landscapeRect** and **portraitRect** attributes, > [updatePanelRect]inputMethodEngine.Panel.updatePanelRect(flag: PanelFlag, rect: PanelRect) > is called by default. > > When the **PanelFlag** of a smartphone is **FLG_FLOATING** and the panel width is between 0 and 288 vp, the > function buttons at the bottom of the panel will dynamically update their size according to the panel width. To > ensure the optimal user experience, it is recommended that the panel width be no less than 90 vp.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flag | PanelFlag | Yes | Type of the state of the target panel. It can be FLG_FIXED or FLG_FLOATING. |
| rect | EnhancedPanelRect | Yes | The target panel rectangle, avoid area, and touch area. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800013 | window manager service error. |
| 12800017 | invalid panel type or panel flag. |

## updatePanelRectSync

```TypeScript
updatePanelRectSync(flag: PanelFlag, rect: PanelRect): void
```

Update the panel rectangle. > **NOTE** > > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** > state. > > When the **PanelFlag** of a smartphone is **FLG_FLOATING** and the panel width is between 0 and 288 vp, the > function buttons at the bottom of the panel will dynamically update their size according to the panel width. To > ensure the optimal user experience, it is recommended that the panel width be no less than 90 vp.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flag | PanelFlag | Yes | Type of the state of the target panel. It can be FLG_FIXED or FLG_FLOATING. |
| rect | PanelRect | Yes | Landscape rectangle and portrait rectangle of the target panel. For the panel of the  fixed state, the height cannot exceed 70% of the screen height, and the width cannot exceed the screen width.  For the panel of the floating state, the height cannot exceed the screen height, and the width cannot exceed  the screen width. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800013 | window manager service error. |

## updatePanelRectSync

```TypeScript
updatePanelRectSync(flag: PanelFlag, rect: EnhancedPanelRect): void
```

Update the panel rectangle, and customizes the avoid area and touch area. > **NOTE** > > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** > state. This API is compatible with > [updatePanelRectSync]inputMethodEngine.Panel.updatePanelRectSync(flag: PanelFlag, rect: PanelRect). > If the input parameter **rect** contains only the **landscapeRect** and **portraitRect** attributes, > [updatePanelRectSync]inputMethodEngine.Panel.updatePanelRectSync(flag: PanelFlag, rect: PanelRect) > is called by default. > > When the **PanelFlag** of a smartphone is **FLG_FLOATING** and the panel width is between 0 and 288 vp, the > function buttons at the bottom of the panel will dynamically update their size according to the panel width. To > ensure the optimal user experience, it is recommended that the panel width be no less than 90 vp.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flag | PanelFlag | Yes | Type of the state of the target panel. It can be FLG_FIXED or FLG_FLOATING. |
| rect | EnhancedPanelRect | Yes | The target panel rectangle, avoid area, and touch area. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12800013 | window manager service error. |
| 12800017 | invalid panel type or panel flag. |

## updateRegion

```TypeScript
updateRegion(inputRegion: Array<window.Rect>): void
```

Updates the hot zone on the input method panel in the current state. > **NOTE** > > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** > state. > > This API returns the result synchronously. The return only indicates that the system has received the request > for updating the hot zone, not that the hot zone has been updated.

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inputRegion | Array&lt;window.Rect> | Yes | Region for receiving input events.  - The array size is limited to [1, 4].  - The input hot zone is relative to the left vertex of the input method panel window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 12800013 | window manager service error. |
| 12800017 | invalid panel type or panel flag. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

let inputRegion: Array<window.Rect> = [{
  left: 300,
  top: 650,
  width: 2000,
  height: 500
}];
panel.updateRegion(inputRegion);

```

