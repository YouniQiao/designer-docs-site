# WindowExtensionAbility (System API)

class of window extension ability.

**Since:** 9

**Deprecated since:** 21

<!--Device-unnamed-declare class WindowExtensionAbility--><!--Device-unnamed-declare class WindowExtensionAbility-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { WindowExtensionContext } from '@kit.ArkUI';
```

## onConnect

```TypeScript
onConnect(want: Want): void
```

Called back when a window extension is first connected to an ability.

**Since:** 9

**Deprecated since:** 21

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowExtensionAbility-onConnect(want: Want): void--><!--Device-WindowExtensionAbility-onConnect(want: Want): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](arkts-arkui-want-t-sys.md) | Yes | Indicates connection information about the Window ability. |

**Example**

```TypeScript
import { WindowExtensionAbility } from '@kit.ArkUI';
import { Want } from '@kit.AbilityKit';

export default class MyWindowExtensionAbility extends WindowExtensionAbility {
  onConnect(want: Want) {
    console.info(`WindowExtAbility onConnect, abilityName: ${want.abilityName}`);
  }
}

```

## onDisconnect

```TypeScript
onDisconnect(want: Want): void
```

Called back when all abilities connected to a window extension are disconnected.

**Since:** 9

**Deprecated since:** 21

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowExtensionAbility-onDisconnect(want: Want): void--><!--Device-WindowExtensionAbility-onDisconnect(want: Want): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](arkts-arkui-want-t-sys.md) | Yes | Indicates disconnection information about the window extension. |

**Example**

```TypeScript
import { WindowExtensionAbility } from '@kit.ArkUI';
import { Want } from '@kit.AbilityKit';

export default class MyWindowExtensionAbility extends WindowExtensionAbility {
  onDisconnect(want: Want) {
    console.info(`WindowExtAbility onDisconnect, abilityName: ${want.abilityName}`);
  }
}

```

## onWindowReady

```TypeScript
onWindowReady(window: window.Window): void
```

Called back when window is created.

**Since:** 9

**Deprecated since:** 21

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowExtensionAbility-onWindowReady(window: window.Window): void--><!--Device-WindowExtensionAbility-onWindowReady(window: window.Window): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| window | window.Window | Yes | Current Window instance. |

**Example**

```TypeScript
import { WindowExtensionAbility, window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

export default class MyWindowExtensionAbility extends WindowExtensionAbility {
  onWindowReady(window: window.Window) {
    window.setUIContent('WindowExtAbility/pages/index1',(err:BusinessError) => {
      let pro = window.getWindowProperties();
      console.info(`WindowExtension pro: ${JSON.stringify(pro)}`);
      window.showWindow();
    });
  }
}

```

## context

```TypeScript
context: WindowExtensionContext
```

Indicates window extension ability context.

**Type:** WindowExtensionContext

**Since:** 9

**Deprecated since:** 21

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowExtensionAbility-context: WindowExtensionContext--><!--Device-WindowExtensionAbility-context: WindowExtensionContext-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

