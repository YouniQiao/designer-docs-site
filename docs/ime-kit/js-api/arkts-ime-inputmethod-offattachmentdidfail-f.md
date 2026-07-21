# offAttachmentDidFail

## Modules to Import

```TypeScript
import { inputMethod } from '@kit.IMEKit';
```

<a id="offattachmentdidfail"></a>
## offAttachmentDidFail

```TypeScript
function offAttachmentDidFail(callback?: Callback<AttachFailureReason>): void
```

Unsubscribe the attachment failure event.

**Since:** 22

<!--Device-inputMethod-function offAttachmentDidFail(callback?: Callback<AttachFailureReason>): void--><!--Device-inputMethod-function offAttachmentDidFail(callback?: Callback<AttachFailureReason>): void-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AttachFailureReason&gt; | No | the callback is invoked only when the attachment triggered by the registrant's process fails. When subscriber unsubscribes all callback, this parameter can be left blank. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let attachmentDidFailCallback: Callback<inputMethod.AttachFailureReason> = 
  (reason: inputMethod.AttachFailureReason): void => {
    console.info(`Attachment failed with reason: ${reason}.`);
  if (reason === inputMethod.AttachFailureReason.CALLER_NOT_FOCUSED) {
    console.info(`Failure reason is CALLER_NOT_FOCUSED.`);
  }
  };
inputMethod.onAttachmentDidFail(attachmentDidFailCallback);
inputMethod.offAttachmentDidFail(attachmentDidFailCallback);

```

