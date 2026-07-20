# getParams

## Modules to Import

```TypeScript
import { router } from '@kit.ArkUI';
```

## getParams

```TypeScript
function getParams(): Object
```

Obtains the parameters passed from the page that initiates redirection to the current page.

> **NOTE**  
>  
> - Since API version 10, you can use the  
> [getRouter](../../../../reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in  
> [UIContext](arkts-arkui-uicontext.md) to obtain the [Router](arkts-arkui-uicontext.md) object associated  
> with the current UI context.  
>  
> **getParams** obtains only the parameters of the current page and does not clear the parameters associated with  
> the page.

**Since:** 8

**Deprecated since:** 18

**Substitutes:** [getParams](arkts-arkui-arkui-uicontext-router-c.md#getparams-1)

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-router-function getParams(): Object--><!--Device-router-function getParams(): Object-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Object](../../apis-na/arkts-apis/arkts-na-lib-es5-object-i.md) | Parameters passed from the page that initiates redirection to the current page. |

**Example**

```TypeScript
this.getUIContext().getRouter().getParams();

```

