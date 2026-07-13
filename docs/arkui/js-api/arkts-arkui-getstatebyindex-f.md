# getStateByIndex

## Modules to Import

```TypeScript
import { router } from '@kit.ArkUI';
```

## getStateByIndex

```TypeScript
function getStateByIndex(index: number): RouterState | undefined
```

Obtains the status information about a page by its index.

> **NOTE**
>
> - Since API version 12, you can use the
> [getRouter](../../../../reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in
> [UIContext](arkts-arkui-uicontext.md) to obtain the [Router](arkts-arkui-uicontext.md) object associated
> with the current UI context.

**Since:** 12

**Deprecated since:** 18

**Substitutes:** [getStateByIndex](arkts-arkui-router-c.md#getstatebyindex-1)

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the target page. The index starts from 1 from the bottom to the top of thestack. |

**Return value:**

| Type | Description |
| --- | --- |
| RouterState | State information about the target page; **undefined** if the specified indexdoes not exist. |

**Example**

```TypeScript
let options: router.RouterState | undefined = router.getStateByIndex(1);
if (options != undefined) {
  console.info('index = ' + options.index);
  console.info('name = ' + options.name);
  console.info('path = ' + options.path);
  console.info(`params = ${JSON.stringify(options.params)}`);
}

```

