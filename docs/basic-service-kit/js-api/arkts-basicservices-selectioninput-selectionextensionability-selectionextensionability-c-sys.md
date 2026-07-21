# SelectionExtensionAbility (System API)

This module provides ExtensionAbility for word selection, allowing users to search or translate text selected using a mouse or touchpad.

> **NOTE**  
> - This module is supported only on PCs/2-in-1 devices.

**Since:** 24

<!--Device-unnamed-declare class SelectionExtensionAbility--><!--Device-unnamed-declare class SelectionExtensionAbility-End-->

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { SelectionExtensionAbility } from '@kit.BasicServicesKit';
```

<a id="onconnect"></a>
## onConnect

```TypeScript
onConnect(want: Want): rpc.RemoteObject
```

Called when the SelectionExtensionAbility instance is created. You can execute initialization logic (such as defining variables, loading resources, and listening for word selection events) within this callback.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-SelectionExtensionAbility-onConnect(want: Want): rpc.RemoteObject--><!--Device-SelectionExtensionAbility-onConnect(want: Want): rpc.RemoteObject-End-->

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information of the SelectionExtensionAbility, including the ability name and bundle name. |

**Return value:**

| Type | Description |
| --- | --- |
| rpc.RemoteObject | Remote object, which is used for communication between the client and server. |

**Example**

```TypeScript
import { SelectionExtensionAbility } from '@kit.BasicServicesKit';
import { rpc } from '@kit.IPCKit';
import { Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG: string = '[SelectionExtensionAbility]';

class StubTest extends rpc.RemoteObject {
  constructor(des: string) {
    super(des);
  }
  onConnect(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence, option: rpc.MessageOption) {
  }
}

class ServiceExtAbility extends SelectionExtensionAbility {
  onConnect(want: Want): rpc.RemoteObject {
    hilog.info(0x0000, TAG, `onConnect, want: ${want.abilityName}`);
    return new StubTest('test');
  }
}

```

<a id="ondisconnect"></a>
## onDisconnect

```TypeScript
onDisconnect(): void
```

Called when the **SelectionExtensionAbility** instance is destroyed (for example, when the user disables the word selection function or switches the word selection application). You can clear resources and save data during this lifecycle. This API returns the result synchronously or uses a promise to return the result.After the **onDisconnect()** lifecycle callback is executed, the application may exit. Consequently, the asynchronous function (for example, asynchronously writing data to the database) in **onDisconnect()** may fail to be executed. Using a Promise for asynchronous callback is recommended to prevent such issues.The callback is invoked only when the SelectionExtensionAbility exits gracefully. It is not invoked in cases of abnormal exits (for example, process termination due to low memory conditions).

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-SelectionExtensionAbility-onDisconnect(): void--><!--Device-SelectionExtensionAbility-onDisconnect(): void-End-->

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Example**

```TypeScript
import { SelectionExtensionAbility } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG: string = '[SelectionExtensionAbility]';

class ServiceExtAbility extends SelectionExtensionAbility {
  onDisconnect(): void {
    hilog.info(0x0000, TAG, `onDisconnect`);
  }
}

```

## context

```TypeScript
context: SelectionExtensionContext
```

Context of the SelectionExtensionAbility. This context is inherited from [ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-extensioncontext-c.md).

**Type:** SelectionExtensionContext

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-SelectionExtensionAbility-context: SelectionExtensionContext--><!--Device-SelectionExtensionAbility-context: SelectionExtensionContext-End-->

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

