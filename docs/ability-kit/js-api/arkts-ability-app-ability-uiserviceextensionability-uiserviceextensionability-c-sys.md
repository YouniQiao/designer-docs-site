# UIServiceExtensionAbility (System API)

UIServiceExtensionAbility provides extended capabilities related to the floating window component. It inherits from [ExtensionAbility](arkts-ability-app-ability-extensionability-extensionability-c.md). It is mainly used to provide services with UIs for third-party applications.

> **NOTE**  
>  
> The APIs of this module must be used in the main thread, but not in child threads such as Worker and TaskPool.

**Inheritance/Implementation:** UIServiceExtensionAbility extends [ExtensionAbility](arkts-ability-app-ability-extensionability-extensionability-c.md)

**Since:** 14

<!--Device-unnamed-declare class UIServiceExtensionAbility extends ExtensionAbility--><!--Device-unnamed-declare class UIServiceExtensionAbility extends ExtensionAbility-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { UIServiceExtensionAbility } from '@kit.AbilityKit';
```

<a id="onconnect"></a>
## onConnect

```TypeScript
onConnect(want: Want, proxy: UIServiceHostProxy): void
```

Called when the connection to a [UIServiceExtensionAbility](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md) is established. If the UIServiceExtensionAbility is started by calling [connectUIServiceExtensionAbility()](arkts-ability-uiextensioncontext-c.md#connectuiserviceextensionability-1), this callback will be invoked after [onCreate()](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md#oncreate-1). This callback receives a [UIServiceHostProxy](arkts-ability-uiservicehostproxy-i-sys.md) object for communication between the client and server.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIServiceExtensionAbility-onConnect(want: Want, proxy: UIServiceHostProxy): void--><!--Device-UIServiceExtensionAbility-onConnect(want: Want, proxy: UIServiceHostProxy): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | [Want](arkts-ability-app-ability-want-want-c.md) information about the [UIServiceExtensionAbility](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md), including the ability name and bundle name. |
| proxy | [UIServiceHostProxy](arkts-ability-common-uiservicehostproxy-t-sys.md) | Yes | [UIServiceHostProxy](arkts-ability-uiservicehostproxy-i-sys.md)object, used for communication between the client and server. |

**Example**

```TypeScript
import { UIServiceExtensionAbility, Want, common} from '@kit.AbilityKit';

class UIServiceExt extends UIServiceExtensionAbility {
  onConnect(want: Want, proxy: common.UIServiceHostProxy){
    console.info('onConnect, want:' + want.abilityName + '');
  }
}

```

<a id="oncreate"></a>
## onCreate

```TypeScript
onCreate(want: Want): void
```

Called to initialize the service logic.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIServiceExtensionAbility-onCreate(want: Want): void--><!--Device-UIServiceExtensionAbility-onCreate(want: Want): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | [Want](arkts-ability-app-ability-want-want-c.md) information about the [UIServiceExtensionAbility](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md), including the ability name and bundle name. |

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

<a id="ondata"></a>
## onData

```TypeScript
onData(proxy: UIServiceHostProxy, data: Record<string, Object>): void
```

Callback invoked when data is received.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIServiceExtensionAbility-onData(proxy: UIServiceHostProxy, data: Record<string, Object>): void--><!--Device-UIServiceExtensionAbility-onData(proxy: UIServiceHostProxy, data: Record<string, Object>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| proxy | [UIServiceHostProxy](arkts-ability-common-uiservicehostproxy-t-sys.md) | Yes | Proxy that sends data to the client. |
| data | [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)&lt;string, Object&gt; | Yes | Data received. |

**Example**

```TypeScript
import { UIServiceExtensionAbility, common} from '@kit.AbilityKit';

class ServiceExt extends UIServiceExtensionAbility {
  onData(proxy : common.UIServiceHostProxy, data : Record<string, Object> ){
    console.info('onData');
  }
}

```

<a id="ondestroy"></a>
## onDestroy

```TypeScript
onDestroy(): void
```

Called to clear resources when this [UIServiceExtensionAbility](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md) is destroyed.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIServiceExtensionAbility-onDestroy(): void--><!--Device-UIServiceExtensionAbility-onDestroy(): void-End-->

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

<a id="ondisconnect"></a>
## onDisconnect

```TypeScript
onDisconnect(want: Want, proxy: UIServiceHostProxy): void
```

Called when the connection to a [UIServiceExtensionAbility](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md) is interrupted.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIServiceExtensionAbility-onDisconnect(want: Want, proxy: UIServiceHostProxy): void--><!--Device-UIServiceExtensionAbility-onDisconnect(want: Want, proxy: UIServiceHostProxy): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | [Want](arkts-ability-app-ability-want-want-c.md) information about the [UIServiceExtensionAbility](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md), including the ability name and bundle name. |
| proxy | [UIServiceHostProxy](arkts-ability-common-uiservicehostproxy-t-sys.md) | Yes | Proxy that sends data to the sender. |

**Example**

```TypeScript
import { UIServiceExtensionAbility, Want, common } from '@kit.AbilityKit';

class UIServiceExt extends UIServiceExtensionAbility {
  onDisconnect(want: Want, proxy: common.UIServiceHostProxy) {
    console.info('onDisconnect, want: ${want.abilityName}');
  }
}

```

<a id="onrequest"></a>
## onRequest

```TypeScript
onRequest(want: Want, startId: number): void
```

Called to request to start a [UIServiceExtensionAbility](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md). If the UIServiceExtensionAbility is started by calling [startAbility](arkts-ability-uiabilitycontext-c.md#startability-1)or [startUIServiceExtensionAbility](arkts-ability-uiabilitycontext-c.md#startuiserviceextensionability-1), this callback will be invoked after [onCreate](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md#oncreate-1). The value of **startId** is incremented for each UIServiceExtensionAbility that is started.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIServiceExtensionAbility-onRequest(want: Want, startId: int): void--><!--Device-UIServiceExtensionAbility-onRequest(want: Want, startId: int): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | [Want](arkts-ability-app-ability-want-want-c.md) information about the [UIServiceExtensionAbility](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md), including the ability name and bundle name. |
| startId | number | Yes | Number of times the instance has been started. The initial value is **1** for the first start,and it increments automatically for subsequent starts. |

**Example**

```TypeScript
import { UIServiceExtensionAbility, Want} from '@kit.AbilityKit';

class UIServiceExt extends UIServiceExtensionAbility {
  onRequest(want: Want, startId: number) {
    console.info('onRequest, want:' + want.abilityName + ', startId:' + startId);
  }
}

```

<a id="onwindowdidcreate"></a>
## onWindowDidCreate

```TypeScript
onWindowDidCreate(window: window.Window): void
```

Called when a window is created for the [UIServiceExtensionAbility](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md). Through this callback, the [UIServiceExtensionAbility](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md) passes the created window object to the foreground application.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIServiceExtensionAbility-onWindowDidCreate(window: window.Window): void--><!--Device-UIServiceExtensionAbility-onWindowDidCreate(window: window.Window): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| window | window.Window | Yes | Window object created. |

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

<a id="onwindowwillcreate"></a>
## onWindowWillCreate

```TypeScript
onWindowWillCreate(config: window.ExtensionWindowConfig): void
```

Called when a window will be created for the [UIServiceExtensionAbility](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md). Through **window.ExtensionWindowConfig** in the callback, the foreground application sends the parameters for creating the window to the [UIServiceExtensionAbility](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md).

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIServiceExtensionAbility-onWindowWillCreate(config: window.ExtensionWindowConfig): void--><!--Device-UIServiceExtensionAbility-onWindowWillCreate(config: window.ExtensionWindowConfig): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | window.ExtensionWindowConfig | Yes | Window configuration information. |

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

Context environment for a [UIServiceExtensionAbility](arkts-ability-app-ability-uiserviceextensionability-uiserviceextensionability-c-sys.md). This context inherits from [ExtensionContext](arkts-ability-extensioncontext-c.md).

**Type:** UIServiceExtensionContext

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIServiceExtensionAbility-context: UIServiceExtensionContext--><!--Device-UIServiceExtensionAbility-context: UIServiceExtensionContext-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

