# UIExtensionContentSession

UIExtensionAbility组件的界面操作类，提供页面加载、设置宿主应用窗口隐私模式等功能。

**起始版本：** 10

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## 导入模块

```TypeScript
import { UIExtensionContentSession } from '@kit.AbilityKit';
```

## getUIExtensionHostWindowProxy

```TypeScript
getUIExtensionHostWindowProxy(): uiExtensionHost.UIExtensionHostWindowProxy
```

获取当前UIExtension对应的窗口对象，用于通知宽高、位置、避让信息等。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| uiExtensionHost.UIExtensionHostWindowProxy | 宿主应用窗口信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. Interface caller is not a system app. |
| 16000050 | Internal error. |

**示例：**

```TypeScript
import { UIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { uiExtensionHost } from '@kit.ArkUI';

const TAG: string = '[UIExtAbility]';

export default class UIExtAbility extends UIExtensionAbility {
  onCreate() {
    console.info(TAG, `UIExtAbility onCreate`);
  }

  onForeground() {
    console.info(TAG, `UIExtAbility onForeground`);
  }

  onBackground() {
    console.info(TAG, `UIExtAbility onBackground`);
  }

  onDestroy() {
    console.info(TAG, `UIExtAbility onDestroy`);
  }

  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    let extensionHostWindow = session.getUIExtensionHostWindowProxy();
    let data: Record<string, UIExtensionContentSession | uiExtensionHost.UIExtensionHostWindowProxy> = {
      'session': session,
      'extensionHostWindow': extensionHostWindow
    };
    let storage: LocalStorage = new LocalStorage(data);

    try {
      session.loadContent('pages/Extension', storage);
    } catch (err) {
      console.error('loadContent err:' + JSON.stringify(err));
    }
  }

  onSessionDestroy(session: UIExtensionContentSession) {
    console.info(TAG, `UIExtAbility onSessionDestroy`);
  }
}

```

## getUIExtensionWindowProxy

```TypeScript
getUIExtensionWindowProxy(): uiExtension.WindowProxy
```

获取UIExtension窗口代理。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| uiExtension.WindowProxy | UIExtensionAbility组件的宿主应用窗口代理。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000050 | Internal error. |

**示例：**

```TypeScript
// Index.ets
import { UIExtensionContentSession } from '@kit.AbilityKit';
import { uiExtension } from '@kit.ArkUI';

@Entry()
@Component
struct Extension {
  storage: LocalStorage | undefined = this.getUIContext().getSharedLocalStorage();
  @State message: string = 'EmbeddedUIExtensionAbility Index';
  private session: UIExtensionContentSession | undefined = this.storage?.get<UIExtensionContentSession>('session');
  private extensionWindow: uiExtension.WindowProxy | undefined = this.session?.getUIExtensionWindowProxy();

  aboutToAppear(): void {
    this.extensionWindow?.on('windowSizeChange', (size) => {
      console.info(`size = ${JSON.stringify(size)}`);
    });
    this.extensionWindow?.on('avoidAreaChange', (info) => {
      console.info(`type = ${JSON.stringify(info.type)}, area = ${JSON.stringify(info.area)}`);
    });
  }

  aboutToDisappear(): void {
    this.extensionWindow?.off('windowSizeChange');
    this.extensionWindow?.off('avoidAreaChange');
  }

  build() {
    Column() {
      Text(this.message)
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
    }
    .width('100%')
  }
}

```

## loadContent

```TypeScript
loadContent(path: string, storage?: LocalStorage): void
```

为[UIExtensionAbility]./@ohos.app.ability.UIExtensionAbility:UIExtensionAbility组件加载页面，支持通过 [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)传递状态属性给被加载的页面。该接口用于开发者在UIExtensionAbility组件的 [onSessionCreate]./@ohos.app.ability.UIExtensionAbility:UIExtensionAbility.onSessionCreate生命周期中加载页面。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 要加载的页面所在的路径，该路径通过[module.json5配置文件](docroot://quick-start/module-configuration-file.md)中的  [pages标签](docroot://quick-start/module-configuration-file.md#pages标签)配置。 |
| storage | LocalStorage | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000050 | Internal error. |

**示例：**

```TypeScript
// UIExtensionAbility组件不支持三方应用直接继承，故以派生类ShareExtensionAbility举例说明。
import { UIExtensionContentSession, ShareExtensionAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class ShareExtAbility extends ShareExtensionAbility {
  // ...

  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    try {
      let storage: LocalStorage = new LocalStorage();
      storage.setOrCreate('session', session);
      session.loadContent('pages/Extension', storage);
    } catch (error) {
      let code = (error as BusinessError).code;
      let message = (error as BusinessError).message;
      console.error(`Failed to load content, code: ${code}, msg: ${message}`);
    }
  }

  // ...
}

```

## loadContentByName

```TypeScript
loadContentByName(name: string, storage?: LocalStorage): void
```

为[UIExtensionAbility]./@ohos.app.ability.UIExtensionAbility:UIExtensionAbility组件加载 [命名路由](docroot://ui/arkts-routing.md#命名路由)页面，支持通过 [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)传递状态属性给被加载的页面。该接口用于开发者在UIExtensionAbility组件的 [onSessionCreate]./@ohos.app.ability.UIExtensionAbility:UIExtensionAbility.onSessionCreate生命周期中加载命名路由页面。

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 命名路由页面的名称。 |
| storage | LocalStorage | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000050 | Internal error. |

**示例：**

```TypeScript
// UIExtensionAbility组件不支持三方应用直接继承，故以派生类ShareExtensionAbility举例说明。
import { UIExtensionContentSession, ShareExtensionAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import './pages/UIExtensionPage'; // 导入命名路由页面，示例代码以“./pages/UIExtensionPage.ets”文件为例，在实际代码开发过程中修改为真实路径和文件名称。

export default class ShareExtAbility extends ShareExtensionAbility {
  // 其他生命周期和实现

  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    let storage: LocalStorage = new LocalStorage();
    storage.setOrCreate('session', session);

    let name: string = 'UIExtPage'; // 命名路由页面的名字。
    try {
      session.loadContentByName(name, storage);
    } catch (error) {
      let code = (error as BusinessError).code;
      let message = (error as BusinessError).message;
      console.error(`Failed to load content by name ${name}, code: ${code}, msg: ${message}`);
    }
  }

  // 其他生命周期和实现
}


// “./pages/UIExtensionPage.ets”文件的实现。
import { UIExtensionContentSession } from '@kit.AbilityKit';

@Entry({ routeName: 'UIExtPage' }) // 通过“routeName”定义命名路由页面的名字。
@Component
struct UIExtensionPage {
  @State message: string = 'Hello world';
  storage: LocalStorage | undefined = this.getUIContext().getSharedLocalStorage();
  private session: UIExtensionContentSession | undefined = this.storage?.get<UIExtensionContentSession>('session');

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(20)
          .fontWeight(FontWeight.Bold)
      }
      .width('100%')
    }
    .height('100%')
  }
}

```

## sendData

```TypeScript
sendData(data: Record<string, Object>): void
```

发送数据给UIExtensionComponent控件。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | Record&lt;string, Object> | 是 | 发送给UIExtensionComponent控件的数据参数。 [since 11] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. Interface caller is not a system app. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000050 | Internal error. |

**示例：**

```TypeScript
import { UIExtensionContentSession } from '@kit.AbilityKit';

@Entry()
@Component
struct Index {
  private storage: LocalStorage | undefined = this.getUIContext().getSharedLocalStorage();
  private session: UIExtensionContentSession | undefined =
    this.storage?.get<UIExtensionContentSession>('session');

  build() {
    RelativeContainer() {
      Button('SendData')
        .onClick(() => {
          let data: Record<string, Object> = {
            'number': 123456,
            'message': 'test'
          };

          try {
            this.session?.sendData(data);
          } catch (err) {
            console.error('sendData err:' + JSON.stringify(err));
          }
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

## sendData

```TypeScript
sendData(data: Record<string, RecordData>): void
```

发送数据给UIExtensionComponent控件。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | Record&lt;string, RecordData> | 是 | 发送给UIExtensionComponent控件的数据参数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. Interface caller is not a system app. |
| 16000050 | Internal error. |

## setReceiveDataCallback

```TypeScript
setReceiveDataCallback(callback: (data: Record<string, Object>) => void): void
```

设置从UIExtensionComponent控件接收数据的回调方法。使用callback异步回调。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (data: Record&lt;string, Object>) => void | 是 | 回调函数，返回接收的数据。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. Interface caller is not a system app. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000050 | Internal error. |

**示例：**

```TypeScript
import { UIExtensionContentSession } from '@kit.AbilityKit';

@Entry()
@Component
struct Index {
  storage: LocalStorage | undefined = this.getUIContext().getSharedLocalStorage();
  private session: UIExtensionContentSession | undefined =
    this.storage?.get<UIExtensionContentSession>('session');

  build() {
    RelativeContainer() {
      Button('SendData')
        .onClick(() => {
          this.session?.setReceiveDataCallback((data: Record<string, Object>) => {
            console.info(`Succeeded in setReceiveDataCallback, data: ${JSON.stringify(data)}`);
          });
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

## setReceiveDataCallback

```TypeScript
setReceiveDataCallback(callback: OnReceiveDataCallback): void
```

设置从UIExtensionComponent控件接收数据的回调方法。使用callback异步回调。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnReceiveDataCallback | 是 | 回调函数，返回接收的数据。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. Interface caller is not a system app. |
| 16000050 | Internal error. Possible causes: Failed to communicate with dependency module. |

## setReceiveDataForResultCallback

```TypeScript
setReceiveDataForResultCallback(callback: (data: Record<string, Object>) => Record<string, Object>): void
```

设置从UIExtensionComponent控件接收数据带返回值的回调方法。使用callback异步回调。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (data: Record&lt;string, Object>) => Record&lt;string, Object> | 是 | 回调函数，返回带返回值的接收的数据。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. Interface caller is not a system app. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000050 | Internal error. |

**示例：**

```TypeScript
import { UIExtensionContentSession } from '@kit.AbilityKit';

@Entry()
@Component
struct Index {
  storage: LocalStorage | undefined = this.getUIContext().getSharedLocalStorage();
  private session: UIExtensionContentSession | undefined =
    this.storage?.get<UIExtensionContentSession>('session');

  build() {
    RelativeContainer() {
      Button('SetReceiveDataForResultCallback')
        .onClick(() => {
          this.session?.setReceiveDataForResultCallback((data: Record<string, Object>) => {
            console.info(`Succeeded in setReceiveDataCallback, data: ${JSON.stringify(data)}`);
            return data;
          });
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

## setReceiveDataForResultCallback

```TypeScript
setReceiveDataForResultCallback(callback: OnReceiveDataForResultCallback): void
```

设置从UIExtensionComponent控件接收数据带返回值的回调方法。使用callback异步回调。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnReceiveDataForResultCallback | 是 | 回调函数，返回带返回值的接收的数据。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. Interface caller is not a system app. |
| 16000050 | Internal error. Possible causes: Failed to communicate with dependency module. |

## setWindowBackgroundColor

```TypeScript
setWindowBackgroundColor(color: string): void
```

设置UIExtensionAbility加载界面的背景色。该接口需要在 [loadContent()]./@ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession.loadContent调用生效后使用。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | string | 是 | 需要设置的背景色，为十六进制RGB或ARGB颜色，不区分大小写，例如`#00FF00`或`#FF00FF00`。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. Interface caller is not a system app. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000050 | Internal error. |

**示例：**

```TypeScript
import { UIExtensionContentSession, UIExtensionAbility, Want } from '@kit.AbilityKit';

export default class UIExtAbility extends UIExtensionAbility {
  // ...

  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    let storage: LocalStorage = new LocalStorage();
    storage.setOrCreate('session', session);

    try {
      session.loadContent('pages/Extension', storage);
    } catch (err) {
      console.error('loadContent err:' + JSON.stringify(err));
    }

    try {
      session.setWindowBackgroundColor('#00FF00');
    } catch (err) {
      console.error('setWindowBackgroundColor err:' + JSON.stringify(err));
    }
  }

  // ...
}

```

## setWindowPrivacyMode

```TypeScript
setWindowPrivacyMode(isPrivacyMode: boolean): Promise<void>
```

设置宿主应用窗口的隐私模式开启或关闭。设置为隐私模式的窗口，窗口内容将无法被截屏或录屏。使用Promise异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.PRIVACY_WINDOW

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isPrivacyMode | boolean | 是 | 表示是否开启隐私模式。true表示开启；false表示关闭。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

**示例：**

```TypeScript
// UIExtensionAbility组件不支持三方应用直接继承，故以派生类ShareExtensionAbility举例说明。
import { UIExtensionContentSession, ShareExtensionAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class ShareExtAbility extends ShareExtensionAbility {
  // ...

  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    let isPrivacyMode: boolean = true;
    try {
      session.setWindowPrivacyMode(isPrivacyMode)
        .then(() => {
          console.info(`Succeeded in setting window to privacy mode.`);
        })
        .catch((err: BusinessError) => {
          console.error(`Failed to set window to privacy mode, code: ${err.code}, msg: ${err.message}`);
        });
    } catch (e) {
      let code = (e as BusinessError).code;
      let msg = (e as BusinessError).message;
      console.error(`Failed to set window to privacy mode, code: ${code}, msg: ${msg}`);
    }
  }

  // ...
}

```

## setWindowPrivacyMode

```TypeScript
setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void
```

设置宿主应用窗口的隐私模式开启或关闭。设置为隐私模式的窗口，窗口内容将无法被截屏或录屏。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.PRIVACY_WINDOW

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isPrivacyMode | boolean | 是 | 表示是否开启隐私模式。true表示开启；false表示关闭。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当设置成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

**示例：**

```TypeScript
// UIExtensionAbility组件不支持三方应用直接继承，故以派生类ShareExtensionAbility举例说明。
import { UIExtensionContentSession, ShareExtensionAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class ShareExtAbility extends ShareExtensionAbility {
  // ...

  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    let isPrivacyMode: boolean = true;
    try {
      session.setWindowPrivacyMode(isPrivacyMode, (err: BusinessError) => {
        if (err) {
          console.error(`Failed to set window to privacy mode, code: ${err.code}, msg: ${err.message}`);
          return;
        }
        console.info(`Succeeded in setting window to privacy mode.`);
      });
    } catch (e) {
      let code = (e as BusinessError).code;
      let msg = (e as BusinessError).message;
      console.error(`Failed to set window to privacy mode, code: ${code}, msg: ${msg}`);
    }
  }

  // ...
}

```

## startAbility

```TypeScript
startAbility(want: Want, callback: AsyncCallback<void>): void
```

启动Ability。使用callback异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。 > > 对应UIExtensionComponent控件所在的应用需要处于前台获焦状态。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | 启动Ability的want信息。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当启动成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | Not System App. Interface caller is not a system app. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |

**示例：**

```TypeScript
import { UIExtensionContentSession, UIExtensionAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class UIExtAbility extends UIExtensionAbility {
  // ...

  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    session.startAbility(want, (err: BusinessError) => {
      if (err) {
        console.error(`Failed to startAbility, code: ${err.code}, msg: ${err.message}`);
        return;
      }
      console.info(`Succeeded in startAbility`);
    })
  }

  // ...
}

```

## startAbility

```TypeScript
startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void
```

启动Ability。使用callback异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。 > > 对应UIExtensionComponent控件所在的应用需要处于前台获焦状态。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | 启动Ability的want信息。 |
| options | StartOptions | 是 | 启动Ability所携带的参数。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当启动成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | Not System App. Interface caller is not a system app. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000001 | The specified ability does not exist. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |

**示例：**

```TypeScript
import { UIExtensionContentSession, UIExtensionAbility, Want, StartOptions } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class UIExtAbility extends UIExtensionAbility {
  // ...

  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    let startOptions: StartOptions = {
      displayId: 0
    };

    session.startAbility(want, startOptions, (err: BusinessError) => {
      if (err) {
        console.error(`Failed to startAbility, code: ${err.code}, msg: ${err.message}`);
        return;
      }
      console.info(`Succeeded in startAbility`);
    })
  }

  // ...
}

```

## startAbility

```TypeScript
startAbility(want: Want, options?: StartOptions): Promise<void>
```

启动Ability。使用Promise异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。 > > 对应UIExtensionComponent控件所在的应用需要处于前台获焦状态。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | 启动Ability的want信息。 |
| options | StartOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | Not System App. Interface caller is not a system app. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |

**示例：**

```TypeScript
import { UIExtensionContentSession, UIExtensionAbility, Want, StartOptions } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class UIExtAbility extends UIExtensionAbility {
  // ...

  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    let startOptions: StartOptions = {
      displayId: 0
    };

    session.startAbility(want, startOptions)
      .then(() => {
        console.info(`Succeeded in startAbility`);
      })
      .catch((err: BusinessError) => {
        console.error(`Failed to startAbility, code: ${err.code}, msg: ${err.message}`);
      });
  }

  // ...
}

```

## startAbilityAsCaller

```TypeScript
startAbilityAsCaller(want: Want, callback: AsyncCallback<void>): void
```

初始Ability将自己的caller信息（如BundleName、AbilityName等）置于want参数中，传递给中间层的ExtensionAbility。当ExtensionAbility通过该接口拉起另外一个 Ability，被拉起的Ability可以从onCreate生命周期获取到初始Ability的caller信息。使用callback异步回调。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | 启动Ability的want信息。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当启动Ability成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |

**示例：**

```TypeScript
import { UIExtensionContentSession, UIExtensionAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class UIExtAbility extends UIExtensionAbility {
  // ...

  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    let localWant: Want = want;
    localWant.bundleName = 'com.example.demo';
    localWant.moduleName = 'entry';
    localWant.abilityName = 'TestAbility';

    session.startAbilityAsCaller(localWant, (err: BusinessError) => {
      if (err) {
        console.error(`Failed to startAbilityAsCaller, code: ${err.code}, msg: ${err.message}`);
        return;
      }
      console.info(`Succeeded in startAbilityAsCaller`);
    })
  }

  // ...
}

```

## startAbilityAsCaller

```TypeScript
startAbilityAsCaller(want: Want, options: StartOptions, callback: AsyncCallback<void>): void
```

初始Ability将自己的caller信息（如BundleName、AbilityName等）置于want参数中，传递给中间层的ExtensionAbility。当ExtensionAbility通过该接口拉起另外一个 Ability，被拉起的Ability可以从onCreate生命周期获取到初始Ability的caller信息。使用callback异步回调。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | 启动Ability的want信息。 |
| options | StartOptions | 是 | 启动Ability所携带的参数。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当启动Ability成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000001 | The specified ability does not exist. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |

**示例：**

```TypeScript
import { UIExtensionContentSession, UIExtensionAbility, Want, StartOptions } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class UIExtAbility extends UIExtensionAbility {
  // ...

  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    let localWant: Want = want;
    localWant.bundleName = 'com.example.demo';
    localWant.moduleName = 'entry';
    localWant.abilityName = 'TestAbility';

    let startOptions: StartOptions = {
      displayId: 0
    };

    session.startAbilityAsCaller(localWant, startOptions, (err: BusinessError) => {
      if (err) {
        console.error(`Failed to startAbilityAsCaller, code: ${err.code}, msg: ${err.message}`);
        return;
      }
      console.info(`Succeeded in startAbilityAsCaller`);
    })
  }

  // ...
}

```

## startAbilityAsCaller

```TypeScript
startAbilityAsCaller(want: Want, options?: StartOptions): Promise<void>
```

初始Ability将自己的caller信息（如BundleName、AbilityName等）置于want参数中，传递给中间层的ExtensionAbility。当ExtensionAbility通过该接口拉起另外一个 Ability，被拉起的Ability可以从onCreate生命周期获取到初始Ability的caller信息。使用Promise异步回调。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | 启动Ability的want信息。 |
| options | StartOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |

**示例：**

```TypeScript
import { UIExtensionContentSession, UIExtensionAbility, Want, StartOptions } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class UIExtAbility extends UIExtensionAbility {
  // ...

  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    let localWant: Want = want;
    localWant.bundleName = 'com.example.demo';
    localWant.moduleName = 'entry';
    localWant.abilityName = 'TestAbility';

    let startOptions: StartOptions = {
      displayId: 0
    };

    session.startAbilityAsCaller(localWant, startOptions)
      .then(() => {
        console.info(`Succeeded in startAbilityAsCaller`);
      })
      .catch((err: BusinessError) => {
        console.error(`Failed to startAbilityAsCaller, code: ${err.code}, msg: ${err.message}`);
      });
  }

  // ...
}

```

## startAbilityByType

```TypeScript
startAbilityByType(type: string, wantParam: Record<string, Object>,
    abilityStartCallback: AbilityStartCallback, callback: AsyncCallback<void>): void
```

通过type隐式启动UIExtensionAbility。使用callback异步回调。仅支持处于前台的应用调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | UIExtensionAbility组件类型，取值详见  [通过startAbilityByType接口拉起垂类面板](docroot://application-models/start-intent-panel.md#匹配规则)。 |
| wantParam | Record&lt;string, Object> | 是 | 表示启动UIExtensionAbility组件时传递的参数。 |
| abilityStartCallback | AbilityStartCallback | 是 | 表示启动UIExtensionAbility组件的执行结果。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当接口调用成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. [since 11 - 11] |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000001 | The specified ability does not exist. [since 11 - 11] |
| 16000002 | Incorrect ability type. [since 11 - 11] |
| 16000004 | Cannot start an invisible component. [since 11 - 11] |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. [since 11 - 11] |

**示例：**

```TypeScript
// UIExtensionAbility组件不支持三方应用直接继承，故以派生类ShareExtensionAbility举例说明。
import { UIExtensionContentSession, ShareExtensionAbility, Want, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class ShareExtAbility extends ShareExtensionAbility {
  // ...

  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    let wantParams: Record<string, Object> = {
      'sceneType': 1
    };
    let abilityStartCallback: common.AbilityStartCallback = {
      onError: (code: number, name: string, message: string) => {
        console.error(`onError, code: ${code}, name: ${name}, msg: ${message}`);
      },
      onResult: (result: common.AbilityResult) => {
        console.info(`onResult, result: ${JSON.stringify(result)}`);
      }
    };

    session.startAbilityByType('navigation', wantParams, abilityStartCallback, (err: BusinessError) => {
      if (err) {
        console.error(`Failed to startAbilityByType, code: ${err.code}, msg: ${err.message}`);
        return;
      }
      console.info(`Succeeded in startAbilityByType`);
    });
  }

  // ...
}

```

## startAbilityByType

```TypeScript
startAbilityByType(type: string, wantParam: Record<string, RecordData>,
    abilityStartCallback: AbilityStartCallback, callback: AsyncCallback<void>): void
```

通过type隐式启动UIExtensionAbility。使用callback异步回调。仅支持处于前台的应用调用。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 显示拉起的UIExtensionAbility类型，取值详见  [通过startAbilityByType接口拉起垂类面板](docroot://application-models/start-intent-panel.md#匹配规则)。 |
| wantParam | Record&lt;string, RecordData> | 是 | 表示扩展参数。 |
| abilityStartCallback | AbilityStartCallback | 是 | 回调函数，返回启动失败后的详细错误信息。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当启动Ability成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000050 | Internal error. |

## startAbilityByType

```TypeScript
startAbilityByType(type: string, wantParam: Record<string, Object>,
    abilityStartCallback: AbilityStartCallback): Promise<void>
```

通过type隐式启动UIExtensionAbility组件。使用Promise异步回调。仅支持处于前台的应用调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | UIExtensionAbility组件类型，取值详见  [通过startAbilityByType接口拉起垂类面板](docroot://application-models/start-intent-panel.md#匹配规则)。 |
| wantParam | Record&lt;string, Object> | 是 | 表示启动UIExtensionAbility组件时传递的参数。 |
| abilityStartCallback | AbilityStartCallback | 是 | 表示启动UIExtensionAbility组件的执行结果。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. [since 11 - 11] |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000001 | The specified ability does not exist. [since 11 - 11] |
| 16000002 | Incorrect ability type. [since 11 - 11] |
| 16000004 | Cannot start an invisible component. [since 11 - 11] |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. [since 11 - 11] |

**示例：**

```TypeScript
// UIExtensionAbility组件不支持三方应用直接继承，故以派生类ShareExtensionAbility举例说明。
import { UIExtensionContentSession, ShareExtensionAbility, Want, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class ShareExtAbility extends ShareExtensionAbility {
  // ...

  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    let wantParams: Record<string, Object> = {
      'sceneType': 1
    };
    let abilityStartCallback: common.AbilityStartCallback = {
      onError: (code: number, name: string, message: string) => {
        console.error(`onError, code: ${code}, name: ${name}, msg: ${message}`);
      },
      onResult: (result: common.AbilityResult) => {
        console.info(`onResult, result: ${JSON.stringify(result)}`);
      }
    };

    session.startAbilityByType('test', wantParams, abilityStartCallback)
      .then(() => {
        console.info(`Succeeded in startAbilityByType`);
      })
      .catch((err: BusinessError) => {
        console.error(`Failed to startAbilityByType, code: ${err.code}, msg: ${err.message}`);
      });
  }

  // ...
}

```

## startAbilityByType

```TypeScript
startAbilityByType(type: string, wantParam: Record<string, RecordData>,
    abilityStartCallback: AbilityStartCallback): Promise<void>
```

通过type隐式启动UIExtensionAbility。使用callback异步回调。仅支持处于前台的应用调用。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 显示拉起的UIExtensionAbility类型，取值详见  [通过startAbilityByType接口拉起垂类面板](docroot://application-models/start-intent-panel.md#匹配规则)。 |
| wantParam | Record&lt;string, RecordData> | 是 | 表示扩展参数。 |
| abilityStartCallback | AbilityStartCallback | 是 | 回调函数，返回启动失败后的详细错误信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000050 | Internal error. |

## startAbilityForResult

```TypeScript
startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>): void
```

启动一个Ability，在Ability终止后返回结果给调用方。使用callback异步回调。 Ability的终止方式包括以下几种情况： - 正常情况下可通过调用 [terminateSelfWithResult]./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>) 接口使之终止并且返回结果给调用方。 - 异常情况下比如杀死Ability会返回异常信息给调用方，异常信息中resultCode为-1。 - 如果被启动的Ability模式是单实例模式，不同应用多次调用该接口启动这个Ability，当这个Ability调用 [terminateSelfWithResult]./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>) 接口使之终止时，只将正常结果返回给最后一个调用方，其他调用方返回异常信息，异常信息中resultCode为-1。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。 > > 对应UIExtensionComponent控件所在的应用需要处于前台获焦状态。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | 启动Ability的want信息。 |
| callback | AsyncCallback&lt;AbilityResult> | 是 | 回调函数。当Ability启动并终止成功，err为undefined，data为获取到的结果码和数据；否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | Not System App. Interface caller is not a system app. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |

**示例：**

```TypeScript
import { UIExtensionContentSession, UIExtensionAbility, Want, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class UIExtAbility extends UIExtensionAbility {
  // ...

  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    session.startAbilityForResult(want, (err: BusinessError, data: common.AbilityResult) => {
      if (err) {
        console.error(`Failed to startAbilityForResult, code: ${err.code}, msg: ${err.message}`);
        return;
      }
      console.info(`Succeeded in startAbilityForResult, data: ${JSON.stringify(data)}`);
    })
  }

  // ...
}

```

## startAbilityForResult

```TypeScript
startAbilityForResult(want: Want, options: StartOptions, callback: AsyncCallback<AbilityResult>): void
```

启动一个Ability，在Ability终止后返回结果给调用方。使用callback异步回调。 Ability的终止方式包括以下几种情况： - 正常情况下可通过调用 [terminateSelfWithResult]./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>) 接口使之终止并且返回结果给调用方。 - 异常情况下比如杀死Ability会返回异常信息给调用方，异常信息中resultCode为-1。 - 如果被启动的Ability模式是单实例模式，不同应用多次调用该接口启动这个Ability，当这个Ability调用 [terminateSelfWithResult]./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>) 接口使之终止时，只将正常结果返回给最后一个调用方，其他调用方返回异常信息，异常信息中resultCode为-1。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。 > > 对应UIExtensionComponent控件所在的应用需要处于前台获焦状态。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | 启动Ability的want信息。 |
| options | StartOptions | 是 | 启动Ability所携带的参数。 |
| callback | AsyncCallback&lt;AbilityResult> | 是 | 回调函数。当Ability启动并终止成功，err为undefined，data为获取到的结果码和数据；否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | Not System App. Interface caller is not a system app. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000001 | The specified ability does not exist. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |

**示例：**

```TypeScript
import { UIExtensionContentSession, UIExtensionAbility, Want, StartOptions, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class UIExtAbility extends UIExtensionAbility {
  // ...

  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    let startOptions: StartOptions = {
      displayId: 0
    };

    session.startAbilityForResult(want, startOptions, (err: BusinessError, data: common.AbilityResult) => {
      if (err) {
        console.error(`Failed to startAbilityForResult, code: ${err.code}, msg: ${err.message}`);
        return;
      }
      console.info(`Succeeded in startAbilityForResult, data: ${JSON.stringify(data)}`);
    })
  }

  // ...
}

```

## startAbilityForResult

```TypeScript
startAbilityForResult(want: Want, options?: StartOptions): Promise<AbilityResult>
```

启动一个Ability，在Ability终止后返回结果给调用方。使用Promise异步回调。 Ability的终止方式包括以下几种情况： - 正常情况下可通过调用 [terminateSelfWithResult]./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>) 接口使之终止并且返回结果给调用方。 - 异常情况下比如杀死Ability会返回异常信息给调用方，异常信息中resultCode为-1。 - 如果被启动的Ability模式是单实例模式，不同应用多次调用该接口启动这个Ability，当这个Ability调用 [terminateSelfWithResult]./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>) 接口使之终止时，只将正常结果返回给最后一个调用方，其他调用方返回异常信息，异常信息中resultCode为-1。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。 > > 对应UIExtensionComponent控件所在的应用需要处于前台获焦状态。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | 启动Ability的want信息。 |
| options | StartOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AbilityResult> | Promise对象，返回结果码和数据。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | Not System App. Interface caller is not a system app. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |

**示例：**

```TypeScript
import { UIExtensionContentSession, UIExtensionAbility, Want, StartOptions, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class UIExtAbility extends UIExtensionAbility {
  // ...

  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    let startOptions: StartOptions = {
      displayId: 0
    };

    session.startAbilityForResult(want, startOptions)
      .then((data: common.AbilityResult) => {
        console.info(`Succeeded in startAbilityForResult, data: ${JSON.stringify(data)}`);
      })
      .catch((err: BusinessError) => {
        console.error(`Failed to startAbilityForResult, code: ${err.code}, msg: ${err.message}`);
      });
  }

  // ...
}

```

## terminateSelf

```TypeScript
terminateSelf(callback: AsyncCallback<void>): void
```

销毁UIExtensionAbility组件自身，同时关闭对应的宿主应用窗口界面。使用callback异步回调。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当接口调用成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

**示例：**

```TypeScript
import { UIExtensionContentSession } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry()
@Component
struct Index {
  storage: LocalStorage | undefined = this.getUIContext().getSharedLocalStorage();
  private session: UIExtensionContentSession | undefined =
    this.storage?.get<UIExtensionContentSession>('session');

  build() {
    RelativeContainer() {
      Button('TerminateSelf')
        .onClick(() => {
          this.session?.terminateSelf((err: BusinessError) => {
            if (err) {
              console.error(`Failed to terminate self, code: ${err.code}, msg: ${err.message}`);
              return;
            }
            console.info(`Succeeded in terminating self.`);
          });

          this.storage?.clear();
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

## terminateSelf

```TypeScript
terminateSelf(): Promise<void>
```

销毁UIExtensionAbility组件自身，同时关闭对应的宿主应用窗口界面。使用Promise异步回调。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**示例：**

```TypeScript
import { UIExtensionContentSession } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry()
@Component
struct Index {
  storage: LocalStorage | undefined = this.getUIContext().getSharedLocalStorage();
  private session: UIExtensionContentSession | undefined =
    this.storage?.get<UIExtensionContentSession>('session');

  build() {
    RelativeContainer() {
      Button('TerminateSelf')
        .onClick(() => {
          this.session?.terminateSelf()
            .then(() => {
              console.info(`Succeeded in terminating self.`);
            })
            .catch((err: BusinessError) => {
              console.error(`Failed to terminate self, code: ${err.code}, msg: ${err.message}`);
            });

          this.storage?.clear();
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

## terminateSelfWithResult

```TypeScript
terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>): void
```

销毁UIExtensionAbility组件自身，关闭对应的宿主应用窗口界面，并将结果返回给宿主应用。使用callback异步回调。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| parameter | AbilityResult | 是 | 返回给宿主应用的信息。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当接口调用成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

**示例：**

```TypeScript
import { UIExtensionContentSession, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry()
@Component
struct Index {
  storage: LocalStorage | undefined = this.getUIContext().getSharedLocalStorage();
  private session: UIExtensionContentSession | undefined =
    this.storage?.get<UIExtensionContentSession>('session');

  build() {
    RelativeContainer() {
      Button('TerminateSelfWithResult')
        .onClick(() => {
          let abilityResult: common.AbilityResult = {
            resultCode: 0,
            want: {
              bundleName: 'com.ohos.uiextensioncontentsession',
              parameters: {
                'result': 123456
              }
            }
          };

          this.session?.terminateSelfWithResult(abilityResult, (err: BusinessError) => {
            if (err) {
              console.error(`Failed to terminate self with result, code: ${err.code}, msg: ${err.message}`);
              return;
            }
            console.info(`Succeeded in terminating self with result.`);
          });

          this.storage?.clear();
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

## terminateSelfWithResult

```TypeScript
terminateSelfWithResult(parameter: AbilityResult): Promise<void>
```

销毁UIExtensionAbility组件自身，关闭对应的宿主应用窗口界面，并将结果返回给宿主应用。使用Promise异步回调。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| parameter | AbilityResult | 是 | 返回给宿主应用的信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

**示例：**

```TypeScript
import { UIExtensionContentSession, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry()
@Component
struct Index {
  storage: LocalStorage | undefined = this.getUIContext().getSharedLocalStorage();
  private session: UIExtensionContentSession | undefined =
    this.storage?.get<UIExtensionContentSession>('session');

  build() {
    RelativeContainer() {
      Button('TerminateSelfWithResult')
        .onClick(() => {
          let abilityResult: common.AbilityResult = {
            resultCode: 0,
            want: {
              bundleName: 'com.ohos.uiextensioncontentsession',
              parameters: {
                'result': 123456
              }
            }
          };

          this.session?.terminateSelfWithResult(abilityResult)
            .then(() => {
              console.info(`Succeeded in terminating self with result.`);
            })
            .catch((err: BusinessError) => {
              console.error(`Failed to terminate self with result, code: ${err.code}, msg: ${err.message}`);
            });

          this.storage?.clear();
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

