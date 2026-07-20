# off

## Modules to Import

```TypeScript
import { tag } from '@kit.ConnectivityKit';
```

## off('readerMode')

```TypeScript
function off(type: 'readerMode', elementName: ElementName, callback?: AsyncCallback<TagInfo>): void
```

Disable foreground reader mode settings explicitly.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-tag-function off(type: 'readerMode', elementName: ElementName, callback?: AsyncCallback<TagInfo>): void--><!--Device-tag-function off(type: 'readerMode', elementName: ElementName, callback?: AsyncCallback<TagInfo>): void-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'readerMode' | Yes | The callback type to be unregistered. |
| elementName | [ElementName](../../apis-ability-kit/arkts-apis/arkts-ability-bundlemanager-elementname-t.md) | Yes | The element name of application, must include the bundleName and abilityName. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<TagInfo> | No | The callback to dispatched the TagInfo object for application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100203](../errorcode-nfc.md#3100203-incorrect-api-call-sequence) | The off() API can be called only when the on() has been called. |


## off('readerModeWithInterval')

```TypeScript
function off(type: 'readerModeWithInterval', elementName: ElementName, callback?: Callback<TagInfo>): void
```

Disable foreground reader mode settings explicitly.

**Since:** 23

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-tag-function off(type: 'readerModeWithInterval', elementName: ElementName, callback?: Callback<TagInfo>): void--><!--Device-tag-function off(type: 'readerModeWithInterval', elementName: ElementName, callback?: Callback<TagInfo>): void-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'readerModeWithInterval' | Yes | The callback type to be unregistered. |
| elementName | [ElementName](../../apis-ability-kit/arkts-apis/arkts-ability-bundlemanager-elementname-t.md) | Yes | The element name of application, must include the bundleName and abilityName. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<TagInfo> | No | The callback to dispatched the TagInfo object for application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100203](../errorcode-nfc.md#3100203-incorrect-api-call-sequence) | The off() API can be called only when the on() has been called. |

**Example**

```TypeScript
import { tag } from '@kit.ConnectivityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { AbilityConstant, UIAbility, Want, bundleManager } from '@kit.AbilityKit';

let discTech : number[] = [tag.NFC_A, tag.NFC_B]; // Specify the technology required for foreground ability.
let elementName : bundleManager.ElementName;
let interval : number = 200;

function readerModeCb(tagInfo: tag.TagInfo) {
    if (tagInfo == null) {
      console.error('readerModeWithInterval tagInfo is invalid');
      return;
    }
    console.info("readerModeWithInterval: tag found tagInfo = ", JSON.stringify(tagInfo));
  // Other operations on taginfo
}

export default class MainAbility extends UIAbility {
    OnCreate(want : Want, launchParam : AbilityConstant.LaunchParam) {
        console.info("OnCreate");
        elementName = {
            bundleName: want.bundleName as string,
            abilityName: want.abilityName as string,
            moduleName: want.moduleName as string
        }
    }

    onForeground() {
        console.info("on start");
        try {
            tag.on('readerModeWithInterval', elementName, discTech, readerModeCb, interval);
        } catch (e) {
            console.error("tag.on error: " + (e as BusinessError).message);
        }
    }

    onBackground() {
        console.info("onBackground");
        try {
            tag.off('readerModeWithInterval', elementName, readerModeCb);
        } catch (e) {
            console.error("tag.off error: " + (e as BusinessError).message);
        }
    }

    onWindowStageDestroy() {
        console.info("onWindowStageDestroy");
        try {
            tag.off('readerModeWithInterval', elementName, readerModeCb);
        } catch (e) {
            console.error("tag.off error: " + (e as BusinessError).message);
        }
    }

  // Other functions in the ability lifecycle
}

```

