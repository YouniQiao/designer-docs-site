# enableAlertBeforeBackPage

## Modules to Import

```TypeScript
import { router } from '@kit.ArkUI';
```

## enableAlertBeforeBackPage

```TypeScript
function enableAlertBeforeBackPage(options: EnableAlertOptions): void
```

Enables the display of a confirm dialog box before returning to the previous page.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [showAlertBeforeBackPage](arkts-arkui-arkui-uicontext-router-c.md#showalertbeforebackpage-1)

<!--Device-router-function enableAlertBeforeBackPage(options: EnableAlertOptions): void--><!--Device-router-function enableAlertBeforeBackPage(options: EnableAlertOptions): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [EnableAlertOptions](arkts-arkui-router-enablealertoptions-i.md) | Yes | Description of the dialog box. |

**Example**

```TypeScript
import { router } from '@kit.ArkUI';

router.enableAlertBeforeBackPage({
  message: 'Message Info'
});

```

```TypeScript
import { router } from '@kit.ArkUI';

router.enableAlertBeforeBackPage({
  message: 'Message Info'
});

```

