# UIServiceExtensionAbility (System API)

UIServiceExtensionAbility provides extended capabilities related to the floating window component. It inherits from
[ExtensionAbility](arkts-ability-extensionability-c.md). It is mainly used to provide services
with UIs for third-party applications.

> **NOTE**
>
> The APIs of this module must be used in the main thread, but not in child threads such as Worker and TaskPool.

**Inheritance/Implementation:** UIServiceExtensionAbility extends [ExtensionAbility](arkts-ability-extensionability-c.md)

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

Called when the connection to a
[UIServiceExtensionAbility](arkts-ability-uiserviceextensionability-c-sys.md) is
established. If the UIServiceExtensionAbility is started by calling
[connectUIServiceExtensionAbility()](arkts-ability-uiextensioncontext-c.md#connectuiserviceextensionability-1)
, this callback will be invoked after [onCreate()](arkts-ability-uiserviceextensionability-c-sys.md#oncreate-1). This callback
receives a [UIServiceHostProxy](arkts-ability-uiservicehostproxy-i-sys.md) object for communication
between the client and server.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | [Want](arkts-ability-want-c.md) information about the[UIServiceExtensionAbility](arkts-ability-uiserviceextensionability-c-sys.md), includingthe ability name and bundle name. |
| proxy | UIServiceHostProxy | Yes | [UIServiceHostProxy](arkts-ability-uiservicehostproxy-i-sys.md)object, used for communication between the client and server. |

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

Called to initialize the service logic.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | [Want](arkts-ability-want-c.md) information about the[UIServiceExtensionAbility](arkts-ability-uiserviceextensionability-c-sys.md), includingthe ability name and bundle name. |

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

Callback invoked when data is received.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| proxy | UIServiceHostProxy | Yes | Proxy that sends data to the client. |
| data | Record&lt;string, Object&gt; | Yes | Data received. |

**Example**

```TypeScript
import { UIServiceExtensionAbility, common} from '@kit.AbilityKit';

class ServiceExt extends UIServiceExtensionAbility {
  onData(proxy : common.UIServiceHostProxy, data : Record<string, Object> ){
    console.info('onData');
  }
}

```

## onDestroy

```TypeScript
onDestroy(): void
```

Called to clear resources when this
[UIServiceExtensionAbility](arkts-ability-uiserviceextensionability-c-sys.md) is
destroyed.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

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

Called when the connection to a
[UIServiceExtensionAbility](arkts-ability-uiserviceextensionability-c-sys.md) is
interrupted.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | [Want](arkts-ability-want-c.md) information about the[UIServiceExtensionAbility](arkts-ability-uiserviceextensionability-c-sys.md), includingthe ability name and bundle name. |
| proxy | UIServiceHostProxy | Yes | Proxy that sends data to the sender. |

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
onRequest(want: Want, startId: number): void
```

Called to request to start a
[UIServiceExtensionAbility](arkts-ability-uiserviceextensionability-c-sys.md). If the
UIServiceExtensionAbility is started by calling
[startAbility](arkts-ability-uiabilitycontext-c.md#startability-1)
or
[startUIServiceExtensionAbility](arkts-ability-uiabilitycontext-c.md#startuiserviceextensionability-1)
, this callback will be invoked after [onCreate](arkts-ability-uiserviceextensionability-c-sys.md#oncreate-1). The value of
**startId** is incremented for each UIServiceExtensionAbility that is started.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | [Want](arkts-ability-want-c.md) information about the[UIServiceExtensionAbility](arkts-ability-uiserviceextensionability-c-sys.md), includingthe ability name and bundle name. |
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

## onWindowDidCreate

```TypeScript
onWindowDidCreate(window: window.Window): void
```

Called when a window is created for the
[UIServiceExtensionAbility](arkts-ability-uiserviceextensionability-c-sys.md). Through
this callback, the
[UIServiceExtensionAbility](arkts-ability-uiserviceextensionability-c-sys.md) passes the
created window object to the foreground application.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

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

## onWindowWillCreate

```TypeScript
onWindowWillCreate(config: window.ExtensionWindowConfig): void
```

Called when a window will be created for the
[UIServiceExtensionAbility](arkts-ability-uiserviceextensionability-c-sys.md). Through
**window.ExtensionWindowConfig** in the callback, the foreground application sends the parameters for creating the
window to the
[UIServiceExtensionAbility](arkts-ability-uiserviceextensionability-c-sys.md).

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

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

Context environment for a
[UIServiceExtensionAbility](arkts-ability-uiserviceextensionability-c-sys.md). This
context inherits from [ExtensionContext](arkts-ability-extensioncontext-c.md).

**Type:** UIServiceExtensionContext

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

