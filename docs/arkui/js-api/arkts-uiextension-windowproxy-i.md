# WindowProxy

UIExtension窗口代理。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { uiExtension } from '@kit.ArkUI';
```

## createSubWindowWithOptions

```TypeScript
createSubWindowWithOptions(name: string, subWindowOptions: window.SubWindowOptions): Promise<window.Window>
```

创建该WindowProxy实例下的子窗口，使用Promise异步回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 子窗口的名字。 |
| subWindowOptions | window.SubWindowOptions | Yes | 子窗口参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;window.Window> | Promise used to return the subwindow created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. Possible causes:  1. The window is not created or destroyed.  2. Internal task error.  3. The subWindow has been created and can not be created again.  4. It is not allowed to create non-secure window when secure extension exists. |
| 1300035 | Creating a subwindow is not allowed in the current context. Possible cause:  1. An AgentUIExtensionAbility cannot create a subwindow. |

**Example**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    const subWindowOpts: window.SubWindowOptions = {
      title: 'This is a subwindow',
      decorEnabled: true
    };
    // Create a subwindow.
    extensionWindow.createSubWindowWithOptions('subWindowForHost', subWindowOpts)
      .then((subWindow: window.Window) => {
        subWindow.setUIContent('pages/Index', (err, data) => {
          if (err && err.code != 0) {
            return;
          }
          subWindow?.resize(300, 300, (err, data) => {
            if (err && err.code != 0) {
              return;
            }
            subWindow?.moveWindowTo(100, 100, (err, data) => {
              if (err && err.code != 0) {
                return;
              }
              subWindow?.showWindow((err, data) => {
                if (err && err.code == 0) {
                  console.info(`The subwindow has been shown!`);
                } else {
                  console.error(`Failed to show the subwindow!`);
                }
              });
            });
          });
        });
      }).catch((error: BusinessError) => {
      console.error(`Create subwindow failed. Cause code: ${error.code}, message: ${error.message}`);
    })
  }
}

```

## createSubWindowWithOptions

```TypeScript
createSubWindowWithOptions(name: string, subWindowConfig: window.SubWindowOptions,
        followCreatorLifecycle: boolean): Promise<window.Window>
```

创建该WindowProxy实例下的子窗口，可通过设置followCreatorLifecycle，决定子窗是否跟随组件（EmbeddedComponent或UIExtensionComponent）的生命周期，使用 Promise异步回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 子窗口的名字。 |
| subWindowConfig | window.SubWindowOptions | Yes | 子窗口参数。 |
| followCreatorLifecycle | boolean | Yes | 子窗生命周期是否跟组件（EmbeddedComponent或UIExtensionComponent）保持同步。true表示该组件隐藏时，  子窗隐藏，该组件显示时子窗显示，false表示子窗的显隐不跟随该组件变化。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;window.Window> | Promise used to return the subwindow. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed.  2. Internal task error.  3. The subWindow has been created and can not be created again.  4. It is not allowed to create non-secure window when secure extension exists. |
| 1300035 | Creating a subwindow is not allowed in the current context. Possible cause:  1. An AgentUIExtensionAbility cannot create a subwindow. |

**Example**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    const subWindowConfig: window.SubWindowOptions = {
      title: 'This is a subwindow',
      decorEnabled: true
    };
    // Create a subwindow.
    extensionWindow.createSubWindowWithOptions('subWindowForHost', subWindowConfig, true)
      .then((subWindow: window.Window) => {
        subWindow.setUIContent('pages/Index', (err, data) => {
          if (err && err.code != 0) {
            return;
          }
          subWindow?.resize(300, 300, (err, data) => {
            if (err && err.code != 0) {
              return;
            }
            subWindow?.moveWindowTo(100, 100, (err, data) => {
              if (err && err.code != 0) {
                return;
              }
              subWindow?.showWindow((err, data) => {
                if (err && err.code == 0) {
                  console.info(`The subwindow has been shown!`);
                } else {
                  console.error(`Failed to show the subwindow!`);
                }
              });
            });
          });
        });
      }).catch((error: BusinessError) => {
      console.error(`Create subwindow failed. Cause code: ${error.code}, message: ${error.message}`);
    })
  }
}

```

## getWindowAvoidArea

```TypeScript
getWindowAvoidArea(type: window.AvoidAreaType): window.AvoidArea
```

获取宿主应用窗口内容规避的区域；如系统栏区域、刘海屏区域、手势区域、软键盘区域等与宿主窗口内容重叠时，需要宿主窗口内容避让的区域。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | window.AvoidAreaType | Yes | 表示避让区类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| window.AvoidArea | Avoidance area for the content of the host window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

**Example**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    // Obtain the information about the area where the window cannot be displayed.
    let avoidArea: window.AvoidArea | undefined = extensionWindow?.getWindowAvoidArea(window.AvoidAreaType.TYPE_SYSTEM);
    console.info(`avoidArea: ${JSON.stringify(avoidArea)}`);
  }
}

```

## hideNonSecureWindows

```TypeScript
hideNonSecureWindows(shouldHide: boolean): Promise<void>
```

设置是否隐藏不安全窗口，使用Promise异步回调。 > **说明：** > > - 不安全窗口是指可能遮挡[EmbeddedComponent]./@internal/component/ets/embedded_component（或 > [UIExtensionComponent]./@internal/component/ets/ui_extension_component）组件的窗口，如全局悬浮窗、宿主子窗口和宿主创建的Dialog窗口 > （不包括系统应用创建的上述类型窗口）。 > > - 当EmbeddedComponent（或UIExtensionComponent）组件被用来显示敏感操作提示内容时，可以选择隐藏不安全窗口，保护敏感操作提示内容不会被遮挡。当EmbeddedComponent（或 > UIExtensionComponent）组件不显示或销毁时，不安全窗口会重新显示。 > > - 针对PC/2in1设备，当调用hideNonSecureWindows(true)时，不安全窗口中的全局悬浮窗不会被隐藏。

**Since:** 12

**Required permissions:** 

 ohos.permission.ALLOW_SHOW_NON_SECURE_WINDOWS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shouldHide | boolean | Yes | 指示是否隐藏不安全窗口，true表示隐藏，false表示不隐藏。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 1300002 | Abnormal state. Possible causes:  1. Permission denied. Interface caller does not have permission "ohos.permission.ALLOW_SHOW_NON_SECURE_WINDOWS".  2. The UIExtension window proxy is abnormal. |
| 1300003 | This window manager service works abnormally. |

**Example**

```TypeScript
// ExtensionProvider.ets

import { UIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    const extensionHostWindow = session.getUIExtensionHostWindowProxy();
    // Hide non-secure windows.
    extensionHostWindow.hideNonSecureWindows(true).then(()=> {
      console.info(`Succeeded in hiding the non-secure windows.`);
    }).catch((err: BusinessError)=> {
      console.error(`Failed to hide the non-secure windows. Cause:${JSON.stringify(err)}`);
    })
  }
  
  onSessionDestroy(session: UIExtensionContentSession) {
    const extensionHostWindow = session.getUIExtensionHostWindowProxy();
    // Unhide non-secure windows.
    extensionHostWindow.hideNonSecureWindows(false).then(()=> {
      console.info(`Succeeded in showing the non-secure windows.`);
    }).catch((err: BusinessError)=> {
      console.error(`Failed to show the non-secure windows. Cause:${JSON.stringify(err)}`);
    })
  }
}

```

## occupyEvents

```TypeScript
occupyEvents(eventFlags: int): Promise<void>
```

设置组件（EmbeddedComponent或UIExtensionComponent）占用事件，宿主将不响应组件区域内被占用的事件。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventFlags | int | Yes | 占用的事件类型，具体取值可见[EventFlag]uiExtension.EventFlag枚举值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed.  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |

**Example**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { uiExtension } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    // Occupy events.
    setTimeout(() => {
      try {
        let promise =
          extensionWindow.occupyEvents(uiExtension.EventFlag.EVENT_CLICK | uiExtension.EventFlag.EVENT_LONG_PRESS);
        promise.then(() => {
          console.info(`Succeeded in occupying events`);
        }).catch((err: BusinessError) => {
          console.error(`Failed to occupy events. Cause code: ${err.code}, message: ${err.message}`);
        });
      } catch (e) {
        console.error(`Occupy events got exception code: ${e.code}, message: ${e.message}`);
      }
    }, 500);
  }
}

```

## off('avoidAreaChange')

```TypeScript
off(type: 'avoidAreaChange', callback?: Callback<AvoidAreaInfo>): void
```

注销系统避让区变化的监听。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'avoidAreaChange' | Yes | 注销的事件类型，固定为'avoidAreaChange'，即系统避让区变化事件。 |
| callback | Callback&lt;AvoidAreaInfo> | No | 回调函数：如果传入该参数，则关闭该监听。如果未传入参数，则关闭所有系统避让区变化的监听。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listening type is not registered.  3. The listener has not been registered.  4. The UIExtension window proxy is abnormal. |

**Example**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession } from '@kit.AbilityKit';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionDestroy(session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    // Cancel all subscriptions to the event indicating changes to the area where the window cannot be displayed.
    extensionWindow.off('avoidAreaChange');
  }
}

```

## off('windowSizeChange')

```TypeScript
off(type: 'windowSizeChange', callback?: Callback<window.Size>): void
```

注销组件（EmbeddedComponent或UIExtensionComponent）尺寸变化的监听。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowSizeChange' | Yes | 注销的事件类型，固定值：'windowSizeChange'，即组件（EmbeddedComponent或UIExtensionComponent）尺寸  变化事件。 |
| callback | Callback&lt;window.Size> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listening type is not registered.  3. The listener has not been registered.  4. The UIExtension window proxy is abnormal. |

**Example**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession } from '@kit.AbilityKit';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionDestroy(session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    // Unsubscribe from size change events of the component (EmbeddedComponent or UIExtensionComponent).
    extensionWindow.off('windowSizeChange');
  }
}

```

## off('rectChange')

```TypeScript
off(type: 'rectChange', callback?: Callback<RectChangeOptions>): void
```

注销组件（EmbeddedComponent或UIExtensionComponent）位置及尺寸变化的监听。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'rectChange' | Yes | 监听事件，固定为'rectChange'，即组件（EmbeddedComponent或UIExtensionComponent）矩形变化事件。 |
| callback | Callback&lt;RectChangeOptions> | No | 回调函数。返回当前组件（EmbeddedComponent或UIExtensionComponent）矩形变化值及变化原因。如  果传入参数，则关闭该监听。如果未传入参数，则关闭所有组件（EmbeddedComponent或UIExtensionComponent）矩形变化的监听。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listening type is not registered.  3. The listener has not been registered.  4. The UIExtension window proxy is abnormal. |

**Example**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession } from '@kit.AbilityKit';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionDestroy(session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    // Unsubscribe from position and size change events of the component (EmbeddedComponent or UIExtensionComponent).
    extensionWindow.off('rectChange');
  }
}

```

## offAvoidAreaChange

```TypeScript
offAvoidAreaChange(callback?: Callback<AvoidAreaInfo>): void
```

Unsubscribes from the event indicating changes to the area where the window cannot be displayed.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AvoidAreaInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listening type is not registered.  3. The listener has not been registered.  4. The UIExtension window proxy is abnormal. |

## offRectChange

```TypeScript
offRectChange(callback?: Callback<RectChangeOptions>): void
```

Unsubscribes from changes in the position and size of the component (EmbeddedComponent or UIExtensionComponent). This API can be used only on 2-in-1 devices.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;RectChangeOptions> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listening type is not registered.  3. The listener has not been registered.  4. The UIExtension window proxy is abnormal. |

## offWindowSizeChange

```TypeScript
offWindowSizeChange(callback?: Callback<window.Size>): void
```

Unsubscribes from the component (EmbeddedComponent or UIExtensionComponent) size change event.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;window.Size> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listening type is not registered.  3. The listener has not been registered.  4. The UIExtension window proxy is abnormal. |

## on('avoidAreaChange')

```TypeScript
on(type: 'avoidAreaChange', callback: Callback<AvoidAreaInfo>): void
```

注册系统避让区变化的监听。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'avoidAreaChange' | Yes | 监听的事件类型，固定为'avoidAreaChange'，即系统避让区变化事件。 |
| callback | Callback&lt;AvoidAreaInfo> | Yes | 回调函数：入参用于接收当前避让区的信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listener has been registered.  3. The UIExtension window proxy is abnormal. |

**Example**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { uiExtension } from '@kit.ArkUI';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    // Subscribe to the event indicating changes to the area where the window cannot be displayed.
    extensionWindow.on('avoidAreaChange', (info: uiExtension.AvoidAreaInfo) => {
      console.info(`The avoid area of the host window is: ${JSON.stringify(info.area)}.`);
    });
  }
}

```

## on('windowSizeChange')

```TypeScript
on(type: 'windowSizeChange', callback: Callback<window.Size>): void
```

注册组件（EmbeddedComponent或UIExtensionComponent）尺寸变化的监听。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowSizeChange' | Yes | 监听的事件类型，固定为'windowSizeChange'，即组件（EmbeddedComponent或UIExtensionComponent）尺寸变  化事件。 |
| callback | Callback&lt;window.Size> | Yes | 回调函数：入参用于接收当前组件（EmbeddedComponent或UIExtensionComponent）的尺寸。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listener has been registered.  3. The UIExtension window proxy is abnormal. |

**Example**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    // Subscribe to size change events of the component (EmbeddedComponent or UIExtensionComponent).
    extensionWindow.on('windowSizeChange', (size: window.Size) => {
      console.info(`The size of the component is: ${JSON.stringify(size)}.`);
    });
  }
}

```

## on('rectChange')

```TypeScript
on(type: 'rectChange', reasons: number, callback: Callback<RectChangeOptions>): void
```

注册组件（EmbeddedComponent或UIExtensionComponent）位置及尺寸变化的监听。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'rectChange' | Yes | 监听事件，固定为'rectChange'，即组件（EmbeddedComponent或UIExtensionComponent）矩形变化事件。 |
| reasons | number | Yes | 触发组件（EmbeddedComponent或UIExtensionComponent）位置及尺寸变化的原因，具体取值可参考  [RectChangeReason]uiExtension.RectChangeReason枚举值。 |
| callback | Callback&lt;RectChangeOptions> | Yes | 回调函数。返回当前组件（EmbeddedComponent或UIExtensionComponent）矩形变化值及变化原因。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listener has been registered.  3. The UIExtension window proxy is abnormal. |

**Example**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { uiExtension } from '@kit.ArkUI';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    // Subscribe to position and size change events of the component (EmbeddedComponent or UIExtensionComponent).
    extensionWindow.on('rectChange', uiExtension.RectChangeReason.HOST_WINDOW_RECT_CHANGE, (data: uiExtension.RectChangeOptions) => {
        console.info('Succeeded window rect changes. Data: ' + JSON.stringify(data));
    });
  }
}

```

## onAvoidAreaChange

```TypeScript
onAvoidAreaChange(callback: Callback<AvoidAreaInfo>): void
```

Subscribes to the event indicating changes to the area where the window cannot be displayed.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AvoidAreaInfo> | Yes | Callback used to return the avoid area information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listener has been registered.  3. The UIExtension window proxy is abnormal. |

## onRectChange

```TypeScript
onRectChange(reasons: int, callback: Callback<RectChangeOptions>): void
```

Subscribes to changes in the position and size of the component (EmbeddedComponent or UIExtensionComponent). This API can be used only on 2-in-1 devices.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reasons | int | Yes | The reasons of component rect change.  取值范围为全体整数。 |
| callback | Callback&lt;RectChangeOptions> | Yes | Callback used to return the RectChangeOptions. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listener has been registered.  3. The UIExtension window proxy is abnormal. |

## onWindowSizeChange

```TypeScript
onWindowSizeChange(callback: Callback<window.Size>): void
```

Subscribes to the component (EmbeddedComponent or UIExtensionComponent) size change event.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;window.Size> | Yes | Callback used to return the window size. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listener has been registered.  3. The UIExtension window proxy is abnormal. |

## setWaterMarkFlag

```TypeScript
setWaterMarkFlag(enable: boolean): Promise<void>
```

为当前窗口添加或删除安全水印标志，使用Promise异步回调。 > **说明：** > > 添加安全水印标志后，窗口在前台时会将当前全屏幕覆盖水印。全屏、悬浮窗、分屏等场景下只要有添加了安全水印标志的窗口在前台，就会显示全屏水印。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | 是否对窗口添加标志位。true表示添加，false表示删除。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | The UIExtension window proxy is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300008 | The display device is abnormal. |

**Example**

```TypeScript
// ExtensionProvider.ets
import { UIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    const extensionHostWindow = session.getUIExtensionHostWindowProxy();
    // Add the watermark flag.
    extensionHostWindow.setWaterMarkFlag(true).then(() => {
      console.info(`Succeeded in setting water mark flag of window.`);
    }).catch((err: BusinessError) => {
      console.error(`Failed to setting water mark flag of window. Cause:${JSON.stringify(err)}`);
    })
  }
  onSessionDestroy(session: UIExtensionContentSession) {
    const extensionHostWindow = session.getUIExtensionHostWindowProxy();
    // Delete the watermark flag.
    extensionHostWindow.setWaterMarkFlag(false).then(() => {
      console.info(`Succeeded in deleting water mark flag of window.`);
    }).catch((err: BusinessError) => {
      console.error(`Failed to deleting water mark flag of window. Cause:${JSON.stringify(err)}`);
    })
  }
}

```

## properties

```TypeScript
properties: WindowProxyProperties
```

组件（EmbeddedComponent或UIExtensionComponent）的信息。 **约束：** 由于架构约束，不建议在 [onSessionCreate](../../apis-ability-kit/arkts-apis/arkts-uiextensionability-c.md#onSessionCreate)阶段同步获取该值，建议在收到 [on('windowSizeChange')](arkts-uiextension-windowproxy-i.md#on) 回调之后获取。

**Type:** WindowProxyProperties

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

