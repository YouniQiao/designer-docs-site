# showToast

## showToast

```TypeScript
function showToast(options: ShowToastOptions): void
```

Displays the notification text.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.arkui.UIContext.PromptAction#showToast

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ShowToastOptions | Yes | Options. |

**Example**

```TypeScript
import prompt from '@ohos.prompt'
prompt.showToast({
  message: 'Message Info',
    duration: 2000
});

```

