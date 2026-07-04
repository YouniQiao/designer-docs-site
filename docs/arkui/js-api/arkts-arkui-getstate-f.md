# getState

## Modules to Import

```TypeScript
import { router } from '@ohos.router';
```

## getState

```TypeScript
function getState(): RouterState
```

Obtains state information about the page at the top of the navigation stack. > **NOTE** > > - Since API version 10, you can use the > [getRouter](../../../../reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in > [UIContext](arkts-arkui-uicontext.md) to obtain the [Router](arkts-arkui-uicontext.md) object associated > with the current UI context.

**Since:** 8

**Deprecated since:** 18

**Substitutes:** [getState](arkts-arkui-router-c.md#getstate-1)

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| RouterState | Page routing state. |

**Example**

```TypeScript
let page = this.getUIContext().getRouter().getState();
console.info('current index = ' + page.index);
console.info('current name = ' + page.name);
console.info('current path = ' + page.path);

```

