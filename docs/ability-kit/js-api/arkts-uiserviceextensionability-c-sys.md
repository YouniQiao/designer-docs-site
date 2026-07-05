# UIServiceExtensionAbility

UIServiceExtensionAbility提供浮窗组件相关扩展能力，继承自[ExtensionAbility](arkts-extensionability-c.md#ExtensionAbility). 主要用于向三方应用提供带界面的服务。

**Inheritance:** UIServiceExtensionAbilityextends: ExtensionAbility.

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { UIServiceExtensionAbility } from '@kit.AbilityKit';
```

## onConnect

```TypeScript
onConnect(want: Want, proxy: UIServiceHostProxy): void
```

UIServiceExtension生命周期回调。如果是 [connectUIServiceExtensionAbility()]./application/UIExtensionContext:UIExtensionContext.connectUIServiceExtensionAbility 拉起的服务，会在[onCreate()](arkts-uiserviceextensionability-c-sys.md#onCreate)之后回调。接收一个 [UIServiceHostProxy]./application/UIServiceHostProxy:UIServiceHostProxy对象，用于客户端和服务端进行通信。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 当前  [UIServiceExtensionAbility](arkts-uiserviceextensionability-c-sys.md#UIServiceExtensionAbility)相关的  [Want](arkts-want-c.md#Want)类型信息，包括Ability名称、Bundle名称等。 |
| proxy | UIServiceHostProxy | Yes | 一个[UIServiceHostProxy]./application/UIServiceHostProxy:UIServiceHostProxy  对象，用于客户端和服务端进行通信。 |

**Example**

```TypeScript
import { UIServiceExtensionAbility, Want, common} from '@kit.AbilityKit';

class UIServiceExt extends UIServiceExtensionAbility {
  onConnect(want: Want, proxy: common.UIServiceHostProxy){
    console.info('onConnect, want:' + want.abilityName + '');
  }
}

```

## onCreate

```TypeScript
onCreate(want: Want): void
```

[UIServiceExtensionContext]./application/UIServiceExtensionContext:UIServiceExtensionContext生命周期创建接口，执行初始化 业务逻辑操作。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 当前  [UIServiceExtensionAbility](arkts-uiserviceextensionability-c-sys.md#UIServiceExtensionAbility)相关的  [Want](arkts-want-c.md#Want)类型信息，包括Ability名称、Bundle名称等。 |

**Example**

```TypeScript
import { UIServiceExtensionAbility, Want } from '@kit.AbilityKit';

class UIServiceExt extends UIServiceExtensionAbility {
  // Create a UIServiceExtensionAbility.
  onCreate(want: Want) {
    console.info(`onCreate, want: ${want.abilityName}`);
  }
}

```

## onData

```TypeScript
onData(proxy: UIServiceHostProxy, data: Record<string, Object>): void
```

接收到数据的回调。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| proxy | UIServiceHostProxy | Yes | 往客户端发送数据的Proxy。 |
| data | Record&lt;string, Object> | Yes | 表示接收到的数据。 |

**Example**

```TypeScript
import { UIServiceExtensionAbility, common} from '@kit.AbilityKit';

class ServiceExt extends UIServiceExtensionAbility {
  onData(proxy : common.UIServiceHostProxy, data : Record<string, Object> ){
    console.info('onData');
  }
}

```

## onData

```TypeScript
onData(proxy: UIServiceHostProxy, data: Record<string, RecordData>): void
```

接收到数据的回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| proxy | UIServiceHostProxy | Yes | 往客户端发送数据的Proxy。 |
| data | Record&lt;string, RecordData> | Yes | 表示接收到的数据。 |

## onDestroy

```TypeScript
onDestroy(): void
```

UIServiceExtension销毁时回调，执行资源清理等操作。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Example**

```TypeScript
import { UIServiceExtensionAbility } from '@kit.AbilityKit';

class ServiceExt extends UIServiceExtensionAbility {
  onDestroy() {
    console.info('onDestroy');
  }
}

```

## onDisconnect

```TypeScript
onDisconnect(want: Want, proxy: UIServiceHostProxy): void
```

断开与UIServiceExtension的连接。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 当前  [UIServiceExtensionAbility](arkts-uiserviceextensionability-c-sys.md#UIServiceExtensionAbility)相关的  [Want](arkts-want-c.md#Want)类型信息，包括Ability名称、Bundle名称等。 |
| proxy | UIServiceHostProxy | Yes | 往发起方发送数据的Proxy。 |

**Example**

```TypeScript
import { UIServiceExtensionAbility, Want, common } from '@kit.AbilityKit';

class UIServiceExt extends UIServiceExtensionAbility {
  onDisconnect(want: Want, proxy: common.UIServiceHostProxy) {
    console.info('onDisconnect, want: ${want.abilityName}');
  }
}

```

## onRequest

```TypeScript
onRequest(want: Want, startId: int): void
```

请求拉起UIServiceExtension服务处理。如果是 [startAbility]./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, callback: AsyncCallback<void>) 或者 [startUIServiceExtensionAbility]./application/UIAbilityContext:UIAbilityContext.startUIServiceExtensionAbility 拉起的服务，会在[onCreate](arkts-uiserviceextensionability-c-sys.md#onCreate)之后回调。每次拉起服务都会回调，startId会递增。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 当前  [UIServiceExtensionAbility](arkts-uiserviceextensionability-c-sys.md#UIServiceExtensionAbility)相关的  [Want](arkts-want-c.md#Want)类型信息，包括Ability名称、Bundle名称等。 |
| startId | int | Yes | 返回浮窗拉起次数。首次拉起初始值返回1，多次之后自动递增。 |

**Example**

```TypeScript
import { UIServiceExtensionAbility, Want} from '@kit.AbilityKit';

class UIServiceExt extends UIServiceExtensionAbility {
  onRequest(want: Want, startId: number) {
    console.info('onRequest, want:' + want.abilityName + ', startId:' + startId);
  }
}

```

## onWindowDidCreate

```TypeScript
onWindowDidCreate(window: window.Window): void
```

UIServiceExtension创建后回调。UIServiceExtension服务创建窗口成功后，通过onWindowDidCreate接口把创建的窗口对象传递给前台应用。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| window | window.Window | Yes | 表示已创建的Window。 |

**Example**

```TypeScript
import { UIServiceExtensionAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';

class ServiceExt extends UIServiceExtensionAbility {
  onWindowDidCreate(window : window.Window){
    console.info('onWindowDidCreate');
  }
}

```

## onWindowWillCreate

```TypeScript
onWindowWillCreate(config: window.ExtensionWindowConfig): void
```

UIServiceExtension窗体创建前的回调。前台应用把要创建windows的参数通过window.ExtensionWindowConfig传回给UIServiceExtension服务。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | window.ExtensionWindowConfig | Yes | UIServiceExtension窗体配置信息。 |

**Example**

```TypeScript
import { UIServiceExtensionAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';

class UIServiceExt extends UIServiceExtensionAbility {
  onWindowWillCreate(config : window.ExtensionWindowConfig){
    console.info('onWindowWillCreate');
  }
}

```

## context

```TypeScript
context: UIServiceExtensionContext
```

UIServiceExtension的上下文环境，继承自[ExtensionContext](arkts-extensionability-c.md#ExtensionAbility)。

**Type:** UIServiceExtensionContext

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

