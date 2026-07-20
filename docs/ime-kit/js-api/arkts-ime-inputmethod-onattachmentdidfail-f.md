# onAttachmentDidFail

## Modules to Import

```TypeScript
import { inputMethod } from '@kit.IMEKit';
```

## onAttachmentDidFail

```TypeScript
function onAttachmentDidFail(callback: Callback<AttachFailureReason>): void
```

Subscribe the attachment failure event.

**Since:** 22

<!--Device-inputMethod-function onAttachmentDidFail(callback: Callback<AttachFailureReason>): void--><!--Device-inputMethod-function onAttachmentDidFail(callback: Callback<AttachFailureReason>): void-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<AttachFailureReason> | Yes | the callback is invoked only when the attachment triggered by the registrant's process fails. |

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

```

