# enableAlertBeforeBackPage

## Modules to Import

```TypeScript
import { router } from '@ohos.router';
```

## enableAlertBeforeBackPage

```TypeScript
function enableAlertBeforeBackPage(options: EnableAlertOptions): void
```

Enables the display of a confirm dialog box before returning to the previous page.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [showAlertBeforeBackPage](arkts-arkui-router-c.md#showalertbeforebackpage-1)

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | EnableAlertOptions | Yes | Description of the dialog box. |

**Example**

```TypeScript
router.enableAlertBeforeBackPage({
  message: 'Message Info'
});

```

```TypeScript
router.enableAlertBeforeBackPage({
  message: 'Message Info'
});

```

