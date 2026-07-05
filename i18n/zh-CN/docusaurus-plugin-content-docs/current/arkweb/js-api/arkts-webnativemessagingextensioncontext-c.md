# WebNativeMessagingExtensionContext

WebNativeMessagingExtensionContext is the context of web native message extension and is inherited from ExtensionContext. It provides the capability of exchanging messages with WebNativeMessagingExtension. The APIs of this module can be used only in the stage model.

**继承实现关系：** WebNativeMessagingExtensionContext继承自：ExtensionContext。

**起始版本：** 21

**系统能力：** SystemCapability.Web.Webview.Core

## 导入模块

```TypeScript
import { WebNativeMessagingExtensionContext } from '@kit.ArkWeb';
```

## startAbility

```TypeScript
startAbility(want: Want, options?: StartOptions): Promise<void>
```

Starts an ability using a promise.

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Web.Webview.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Information about the ability to start. |
| options | StartOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000019 | No matching ability is found. |
| 16000050 | Internal error. Possible causes: 1. Failed to connect to the system service;  2. The system service failed to communicate with dependency module. |
| 16000055 | Installation-free timed out. |
| 16000071 | App clone is not supported. |
| 16000072 | App clone or multi-instance is not supported. |
| 16000073 | The app clone index is invalid. |
| 16000076 | The app instance key is invalid. |
| 16000077 | The number of app instances reaches the limit. |
| 16000078 | The multi-instance is not supported. |
| 16000079 | The APP_INSTANCE_KEY cannot be specified. |
| 16000080 | Creating a new instance is not supported. |

**示例：**

```TypeScript
import { WebNativeMessagingExtensionAbility, ConnectionInfo } from '@kit.ArkWeb';
import { Want } from '@kit.AbilityKit';

export class MyWebNativeMessagingExtension extends WebNativeMessagingExtensionAbility {
  onConnectNative(info: ConnectionInfo): void {
    const abilityWant: Want = {
    bundleName: 'com.example.mybundle',
    abilityName: 'MainAbility'
    };
    try {
        const context = this.context; // 获取 WebNativeMessagingExtensionContext 实例
        context.startAbility(abilityWant);
        console.info('Ability started successfully');
    } catch (err) {
        console.error(`Failed to start ability. Code: ${err.code}, Message: ${err.message}`);
    }
  }
}

```

## startAbilityForResult

```TypeScript
startAbilityForResult(want: Want, options?: StartOptions): Promise<AbilityResult>
```

Starts an ability and returns the execution result when the ability is destroyed.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.WEB_NATIVE_MESSAGING

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Web.Webview.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Indicates the ability to start. |
| options | StartOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AbilityResult> | Returns the result of startAbility. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled by the AppGallery and cannot be started. |
| 16000013 | The application is controlled by Enterprise Device Manager and  cannot be started. |
| 16000019 | No matching ability is found. |
| 16000050 | Internal error. Possible causes: 1. Failed to connect to the system service;  2. The system service failed to communicate with dependency module. |
| 16000055 | Installation-free timed out. |
| 16000071 | The application does not support appClone mode in multiAppMode. |
| 16000072 | The application does not support appClone and multi-instance mode in  multiAppMode. |
| 16000073 | The app clone index is invalid. |
| 16000076 | The app instance key is invalid. |
| 16000077 | The number of app instances reaches the limit. |
| 16000078 | The application does not support multiple instances. |
| 16000079 | The APP_INSTANCE_KEY cannot be specified. |
| 16000080 | Instances cannot be created for other applications during  inter-application startup. |

**示例：**

```TypeScript
import { WebNativeMessagingExtensionAbility, ConnectionInfo } from '@kit.ArkWeb';
import { Want, common } from '@kit.AbilityKit';

export class MyWebNativeMessagingExtension extends WebNativeMessagingExtensionAbility {
  onConnectNative(info: ConnectionInfo): void {
    const abilityWant: Want = {
      bundleName: 'com.example.mybundle', // 请开发者替换为实际的 bundleName
      abilityName: 'MainAbility' // 请开发者替换为实际的 abilityName
    };
    try {
      const context = this.context; // 获取 WebNativeMessagingExtensionContext 实例
      context.startAbilityForResult(abilityWant).then((result: common.AbilityResult) => {
        console.info(`Ability started successfully, result code: ${result.resultCode}`);
        if (result.want) {
          console.info(`Result data: ${JSON.stringify(result.want)}`);
        }
      }).catch((err: Error) => {
        console.error(`Failed to start ability. Code: ${err.name}, Message: ${err.message}`);
      });
    } catch (err) {
      console.error(`Failed to start ability. Code: ${(err as Error).name}, Message: ${(err as Error).message}`);
    }
  }
}

```

## stopNativeConnection

```TypeScript
stopNativeConnection(connectionId: number): Promise<void>
```

Stops a native connection. This API uses a promise to return the result.

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Web.Webview.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| connectionId | number | 是 | ID of the connection to stop  The value range is all integers. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. Possible causes: 1. Failed to connect to the system service;  2. The system service failed to communicate with dependency module. |

**示例：**

```TypeScript
import { WebNativeMessagingExtensionAbility, ConnectionInfo } from '@kit.ArkWeb';

export class MyWebNativeMessagingExtension extends WebNativeMessagingExtensionAbility {
  onConnectNative(info: ConnectionInfo): void {
    const CONNECTION_ID = 12345; // 实际的连接 ID
    try {
        const context = this.context;// 获取 WebNativeMessagingExtensionContext 实例
        context.stopNativeConnection(CONNECTION_ID);
        console.info('Native connection stopped successfully');
    } catch (err) {
        console.error(`Failed to stop native connection. Code: ${err.code}, Message: ${err.message}`);
    }
  }
}

```

## terminateSelf

```TypeScript
terminateSelf(): Promise<void>
```

Destroys the current native web message extension.

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Web.Webview.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. Possible causes: 1. Failed to connect to the system service;  2. The system service failed to communicate with dependency module. |

**示例：**

```TypeScript
import { WebNativeMessagingExtensionAbility, ConnectionInfo } from '@kit.ArkWeb';

export class MyWebNativeMessagingExtension extends WebNativeMessagingExtensionAbility {
  onConnectNative(info: ConnectionInfo): void {
    try {
        const context = this.context; // 获取 WebNativeMessagingExtensionContext 实例
        context.terminateSelf();
        console.info('Extension terminated successfully');
    } catch (err) {
        console.error(`Failed to terminate extension. Code: ${err.code}, Message: ${err.message}`);
    }
  }
}

```

