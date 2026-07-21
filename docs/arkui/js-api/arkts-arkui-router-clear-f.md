# clear

## Modules to Import

```TypeScript
import { router } from '@kit.ArkUI';
```

<a id="clear"></a>
## clear

```TypeScript
function clear(): void
```

Clears all historical pages in the stack and retains only the current page at the top of the stack.

> **NOTE**  
>  
> - Since API version 10, you can use the  
> [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in  
> [UIContext](arkts-arkui-uicontext.md) to obtain the [Router](arkts-arkui-uicontext.md) object associated  
> with the current UI context.

**Since:** 8

**Deprecated since:** 18

**Substitutes:** [clear](arkts-arkui-arkui-uicontext-router-c.md#clear-1)

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-router-function clear(): void--><!--Device-router-function clear(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Example**

```TypeScript
this.getUIContext().getRouter().clear();

```

