# RouterOptions

Defines the option of router.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** RouterOptions

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

## Modules to Import

```TypeScript
import { BackRouterOptions, DisableAlertBeforeBackPageOptions, RouterOptions, RouterState, EnableAlertBeforeBackPageOptions } from '@kit.ArkUI';
```

## params

```TypeScript
params?: Object
```

Data that needs to be passed to the destination page during navigation.
After the destination page is displayed, the parameter can be directly used for the page.
For example, this.data1 (data1 is the key value of the params used for page navigation.)

**Type:** Object

**Since:** 3

**Deprecated since:** 8

**Substitutes:** params

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

## uri

```TypeScript
uri: string
```

URI of the destination page, which supports the following formats:
1. Absolute path of the page, which is provided by the pages list in the config.json file.
Example:
pages/index/index
pages/detail/detail
2. Particular path. If the URI is a slash (/), the home page is displayed.

**Type:** string

**Since:** 3

**Deprecated since:** 8

**Substitutes:** url

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

