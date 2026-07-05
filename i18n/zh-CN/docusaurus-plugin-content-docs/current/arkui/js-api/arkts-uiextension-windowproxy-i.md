# WindowProxy

UIExtension窗口代理。

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { uiExtension } from '@kit.ArkUI';
```

## createSubWindowWithOptions

```TypeScript
createSubWindowWithOptions(name: string, subWindowOptions: window.SubWindowOptions): Promise<window.Window>
```

创建该WindowProxy实例下的子窗口，使用Promise异步回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 子窗口的名字。 |
| subWindowOptions | window.SubWindowOptions | 是 | 子窗口参数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;window.Window> | Promise used to return the subwindow created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. Possible causes:  1. The window is not created or destroyed.  2. Internal task error.  3. The subWindow has been created and can not be created again.  4. It is not allowed to create non-secure window when secure extension exists. |
| 1300035 | Creating a subwindow is not allowed in the current context. Possible cause:  1. An AgentUIExtensionAbility cannot create a subwindow. |

**示例：**

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
    // 创建子窗口
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

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 子窗口的名字。 |
| subWindowConfig | window.SubWindowOptions | 是 | 子窗口参数。 |
| followCreatorLifecycle | boolean | 是 | 子窗生命周期是否跟组件（EmbeddedComponent或UIExtensionComponent）保持同步。true表示该组件隐藏时，  子窗隐藏，该组件显示时子窗显示，false表示子窗的显隐不跟随该组件变化。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;window.Window> | Promise used to return the subwindow. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed.  2. Internal task error.  3. The subWindow has been created and can not be created again.  4. It is not allowed to create non-secure window when secure extension exists. |
| 1300035 | Creating a subwindow is not allowed in the current context. Possible cause:  1. An AgentUIExtensionAbility cannot create a subwindow. |

**示例：**

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
    // 创建子窗口
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

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | window.AvoidAreaType | 是 | 表示避让区类型。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| window.AvoidArea | Avoidance area for the content of the host window. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

**示例：**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    // 获取宿主应用窗口的避让信息
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

**起始版本：** 12

**需要权限：** 

 ohos.permission.ALLOW_SHOW_NON_SECURE_WINDOWS

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| shouldHide | boolean | 是 | 指示是否隐藏不安全窗口，true表示隐藏，false表示不隐藏。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 1300002 | Abnormal state. Possible causes:  1. Permission denied. Interface caller does not have permission "ohos.permission.ALLOW_SHOW_NON_SECURE_WINDOWS".  2. The UIExtension window proxy is abnormal. |
| 1300003 | This window manager service works abnormally. |

**示例：**

```TypeScript
// ExtensionProvider.ets

import { UIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    const extensionHostWindow = session.getUIExtensionHostWindowProxy();
    // 隐藏非安全窗口
    extensionHostWindow.hideNonSecureWindows(true).then(()=> {
      console.info(`Succeeded in hiding the non-secure windows.`);
    }).catch((err: BusinessError)=> {
      console.error(`Failed to hide the non-secure windows. Cause:${JSON.stringify(err)}`);
    })
  }
  
  onSessionDestroy(session: UIExtensionContentSession) {
    const extensionHostWindow = session.getUIExtensionHostWindowProxy();
    // 取消隐藏非安全窗口
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

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| eventFlags | int | 是 | 占用的事件类型，具体取值可见[EventFlag]uiExtension.EventFlag枚举值。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed.  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |

**示例：**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { uiExtension } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    // 占用事件
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

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'avoidAreaChange' | 是 | 注销的事件类型，固定为'avoidAreaChange'，即系统避让区变化事件。 |
| callback | Callback&lt;AvoidAreaInfo> | 否 | 回调函数：如果传入该参数，则关闭该监听。如果未传入参数，则关闭所有系统避让区变化的监听。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listening type is not registered.  3. The listener has not been registered.  4. The UIExtension window proxy is abnormal. |

**示例：**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession } from '@kit.AbilityKit';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionDestroy(session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    // 注销所有避让区变化的监听
    extensionWindow.off('avoidAreaChange');
  }
}

```

## off('windowSizeChange')

```TypeScript
off(type: 'windowSizeChange', callback?: Callback<window.Size>): void
```

注销组件（EmbeddedComponent或UIExtensionComponent）尺寸变化的监听。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowSizeChange' | 是 | 注销的事件类型，固定值：'windowSizeChange'，即组件（EmbeddedComponent或UIExtensionComponent）尺寸  变化事件。 |
| callback | Callback&lt;window.Size> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listening type is not registered.  3. The listener has not been registered.  4. The UIExtension window proxy is abnormal. |

**示例：**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession } from '@kit.AbilityKit';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionDestroy(session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    // 注销组件（EmbeddedComponent或UIExtensionComponent）大小变化的监听
    extensionWindow.off('windowSizeChange');
  }
}

```

## off('rectChange')

```TypeScript
off(type: 'rectChange', callback?: Callback<RectChangeOptions>): void
```

注销组件（EmbeddedComponent或UIExtensionComponent）位置及尺寸变化的监听。

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'rectChange' | 是 | 监听事件，固定为'rectChange'，即组件（EmbeddedComponent或UIExtensionComponent）矩形变化事件。 |
| callback | Callback&lt;RectChangeOptions> | 否 | 回调函数。返回当前组件（EmbeddedComponent或UIExtensionComponent）矩形变化值及变化原因。如  果传入参数，则关闭该监听。如果未传入参数，则关闭所有组件（EmbeddedComponent或UIExtensionComponent）矩形变化的监听。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listening type is not registered.  3. The listener has not been registered.  4. The UIExtension window proxy is abnormal. |

**示例：**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession } from '@kit.AbilityKit';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionDestroy(session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    // 注销组件（EmbeddedComponent或UIExtensionComponent）位置及尺寸变化的监听
    extensionWindow.off('rectChange');
  }
}

```

## offAvoidAreaChange

```TypeScript
offAvoidAreaChange(callback?: Callback<AvoidAreaInfo>): void
```

Unsubscribes from the event indicating changes to the area where the window cannot be displayed.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AvoidAreaInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listening type is not registered.  3. The listener has not been registered.  4. The UIExtension window proxy is abnormal. |

## offRectChange

```TypeScript
offRectChange(callback?: Callback<RectChangeOptions>): void
```

Unsubscribes from changes in the position and size of the component (EmbeddedComponent or UIExtensionComponent). This API can be used only on 2-in-1 devices.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;RectChangeOptions> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listening type is not registered.  3. The listener has not been registered.  4. The UIExtension window proxy is abnormal. |

## offWindowSizeChange

```TypeScript
offWindowSizeChange(callback?: Callback<window.Size>): void
```

Unsubscribes from the component (EmbeddedComponent or UIExtensionComponent) size change event.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;window.Size> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listening type is not registered.  3. The listener has not been registered.  4. The UIExtension window proxy is abnormal. |

## on('avoidAreaChange')

```TypeScript
on(type: 'avoidAreaChange', callback: Callback<AvoidAreaInfo>): void
```

注册系统避让区变化的监听。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'avoidAreaChange' | 是 | 监听的事件类型，固定为'avoidAreaChange'，即系统避让区变化事件。 |
| callback | Callback&lt;AvoidAreaInfo> | 是 | 回调函数：入参用于接收当前避让区的信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listener has been registered.  3. The UIExtension window proxy is abnormal. |

**示例：**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { uiExtension } from '@kit.ArkUI';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    // 注册避让区变化的监听
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

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowSizeChange' | 是 | 监听的事件类型，固定为'windowSizeChange'，即组件（EmbeddedComponent或UIExtensionComponent）尺寸变  化事件。 |
| callback | Callback&lt;window.Size> | 是 | 回调函数：入参用于接收当前组件（EmbeddedComponent或UIExtensionComponent）的尺寸。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listener has been registered.  3. The UIExtension window proxy is abnormal. |

**示例：**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    // 注册组件（EmbeddedComponent或UIExtensionComponent）大小变化的监听
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

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'rectChange' | 是 | 监听事件，固定为'rectChange'，即组件（EmbeddedComponent或UIExtensionComponent）矩形变化事件。 |
| reasons | number | 是 | 触发组件（EmbeddedComponent或UIExtensionComponent）位置及尺寸变化的原因，具体取值可参考  [RectChangeReason]uiExtension.RectChangeReason枚举值。 |
| callback | Callback&lt;RectChangeOptions> | 是 | 回调函数。返回当前组件（EmbeddedComponent或UIExtensionComponent）矩形变化值及变化原因。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listener has been registered.  3. The UIExtension window proxy is abnormal. |

**示例：**

```TypeScript
// ExtensionProvider.ets
import { EmbeddedUIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { uiExtension } from '@kit.ArkUI';

export default class EntryAbility extends EmbeddedUIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    const extensionWindow = session.getUIExtensionWindowProxy();
    // 注册组件（EmbeddedComponent或UIExtensionComponent）位置及尺寸变化的监听
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

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AvoidAreaInfo> | 是 | Callback used to return the avoid area information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listener has been registered.  3. The UIExtension window proxy is abnormal. |

## onRectChange

```TypeScript
onRectChange(reasons: int, callback: Callback<RectChangeOptions>): void
```

Subscribes to changes in the position and size of the component (EmbeddedComponent or UIExtensionComponent). This API can be used only on 2-in-1 devices.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| reasons | int | 是 | The reasons of component rect change.  取值范围为全体整数。 |
| callback | Callback&lt;RectChangeOptions> | 是 | Callback used to return the RectChangeOptions. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listener has been registered.  3. The UIExtension window proxy is abnormal. |

## onWindowSizeChange

```TypeScript
onWindowSizeChange(callback: Callback<window.Size>): void
```

Subscribes to the component (EmbeddedComponent or UIExtensionComponent) size change event.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;window.Size> | 是 | Callback used to return the window size. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | Abnormal state. Possible causes:  1. The listening type is not supported.  2. The listener has been registered.  3. The UIExtension window proxy is abnormal. |

## setWaterMarkFlag

```TypeScript
setWaterMarkFlag(enable: boolean): Promise<void>
```

为当前窗口添加或删除安全水印标志，使用Promise异步回调。 > **说明：** > > 添加安全水印标志后，窗口在前台时会将当前全屏幕覆盖水印。全屏、悬浮窗、分屏等场景下只要有添加了安全水印标志的窗口在前台，就会显示全屏水印。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 是否对窗口添加标志位。true表示添加，false表示删除。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | The UIExtension window proxy is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300008 | The display device is abnormal. |

**示例：**

```TypeScript
// ExtensionProvider.ets
import { UIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIExtensionAbility {
  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    const extensionHostWindow = session.getUIExtensionHostWindowProxy();
    // 添加安全水印标志
    extensionHostWindow.setWaterMarkFlag(true).then(() => {
      console.info(`Succeeded in setting water mark flag of window.`);
    }).catch((err: BusinessError) => {
      console.error(`Failed to setting water mark flag of window. Cause:${JSON.stringify(err)}`);
    })
  }
  onSessionDestroy(session: UIExtensionContentSession) {
    const extensionHostWindow = session.getUIExtensionHostWindowProxy();
    // 删除安全水印标志
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

**类型：** WindowProxyProperties

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

