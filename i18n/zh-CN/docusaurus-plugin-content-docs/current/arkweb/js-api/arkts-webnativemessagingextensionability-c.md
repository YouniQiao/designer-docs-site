# WebNativeMessagingExtensionAbility

class of web native messaging extension ability.

**继承实现关系：** WebNativeMessagingExtensionAbility继承自：ExtensionAbility。

**起始版本：** 21

**系统能力：** SystemCapability.Web.Webview.Core

## 导入模块

```TypeScript
import { ConnectionInfo } from '@kit.ArkWeb';
```

## onConnectNative

```TypeScript
onConnectNative(info: ConnectionInfo): void
```

Called when a web native messaging connection is established.

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Web.Webview.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| info | ConnectionInfo | 是 | Indicates connection information about new native connection. |

**示例：**

```TypeScript
import { WebNativeMessagingExtensionAbility, ConnectionInfo } from '@kit.ArkWeb';

export class MyWebNativeMessagingExtension extends WebNativeMessagingExtensionAbility {
  onConnectNative(info: ConnectionInfo): void {
    console.info('Web Native connection established!');
    console.info(`Connection ID: ${info.connectionId}`);
    console.info(`Caller bundle: ${info.bundleName}`);
    // 在此处处理连接建立后的业务逻辑
  }
}

```

## onDestroy

```TypeScript
onDestroy(): void
```

Called when the WebNativeMessagingExtensionAbility is destroyed.

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Web.Webview.Core

**示例：**

```TypeScript
import { WebNativeMessagingExtensionAbility } from '@kit.ArkWeb';

export class MyWebNativeMessagingExtension extends WebNativeMessagingExtensionAbility {
  onDestroy(): void {
    console.info('WebNativeMessagingExtensionAbility is about to be destroyed!');
    // 在此处释放资源或者执行清理操作
  }
}

```

## onDisconnectNative

```TypeScript
onDisconnectNative(info: ConnectionInfo): void
```

Called when a web native messaging connection is disconnected.

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Web.Webview.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| info | ConnectionInfo | 是 | Indicates connection information about new native connection. |

**示例：**

```TypeScript
import { WebNativeMessagingExtensionAbility, ConnectionInfo } from '@kit.ArkWeb';

export class MyWebNativeMessagingExtension extends WebNativeMessagingExtensionAbility {
  onDisconnectNative(info: ConnectionInfo): void {
    console.info('Web Native connection closed!');
    console.info(`Connection ID: ${info.connectionId}`);
    // 在此处处理连接断开后的清理工作
  }
}

```

## context

```TypeScript
context: WebNativeMessagingExtensionContext
```

Indicates web native messaging extension ability context.

**类型：** WebNativeMessagingExtensionContext

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Web.Webview.Core

