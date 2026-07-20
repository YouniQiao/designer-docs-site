# onChangeWithAttribute

## Modules to Import

```TypeScript
import { display } from '@kit.ArkUI';
```

## onChangeWithAttribute

```TypeScript
function onChangeWithAttribute(displayAttributeOption: Array<string>, callback: Callback<number>): void
```

Subscribes to changes of specified attributes of a display.

**Since:** 23

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-display-function onChangeWithAttribute(displayAttributeOption: Array<string>, callback: Callback<long>): void--><!--Device-display-function onChangeWithAttribute(displayAttributeOption: Array<string>, callback: Callback<long>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayAttributeOption | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | Attribute names. Only attributes contained in [Display](arkts-arkui-display-display-i.md) are supported. |
| callback | [Callback](../arkts-components/arkts-arkui-common-callback-i.md)<number> | Yes | Callback used to return the ID of the display, which is an integer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function onChangeWithAttribute can not work correctly due to limited device capabilities. |
| [1400003](../errorcode-display.md#1400003-abnormal-display-manager-service) | This display manager service works abnormally.Possible causes: Internal IPC error. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let attributesChangeCallback: Callback<number> = (data: number) => {
  console.info(`Listening enabled. Data: ${data}`);
};
let attributes: Array<string> = ["rotation", "width"];
display.onChangeWithAttribute(attributes, attributesChangeCallback);

```

