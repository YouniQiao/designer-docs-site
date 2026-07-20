# on

## Modules to Import

```TypeScript
import { tag } from '@kit.ConnectivityKit';
```

## on('readerMode')

```TypeScript
function on(type: 'readerMode', elementName: ElementName, discTech: number[], callback: AsyncCallback<TagInfo>): void
```

Set reader mode enabled when the specific application is foreground. Dispatches to this application only if a tag discovered.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-tag-function on(type: 'readerMode', elementName: ElementName, discTech: int[], callback: AsyncCallback<TagInfo>): void--><!--Device-tag-function on(type: 'readerMode', elementName: ElementName, discTech: int[], callback: AsyncCallback<TagInfo>): void-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'readerMode' | Yes | The callback type to be registered. |
| elementName | [ElementName](../../apis-ability-kit/arkts-apis/arkts-ability-bundlemanager-elementname-t.md) | Yes | The element name of application, must include the bundleName and abilityName. |
| discTech | number[] | Yes | The technologies list to set for discovering. From {@link NFC_A} to {@link MIFARE_ULTRALIGHT}. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<TagInfo> | Yes | The callback to dispatched the TagInfo object for application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100202](../errorcode-nfc.md#3100202-application-status-error) | The element state is invalid. |


## on('readerModeWithInterval')

```TypeScript
function on(
    type: 'readerModeWithInterval',
    elementName: ElementName,
    discTech: number[],
    callback: Callback<TagInfo>,
    interval: number
  ): void
```

Set reader mode enabled when the specific application is on foreground and set card presence interval.Tag infomation will be dispatched to the application only if a NFC tag is discovered.

**Since:** 23

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-tag-function on(
    type: 'readerModeWithInterval',
    elementName: ElementName,
    discTech: int[],
    callback: Callback<TagInfo>,
    interval: int
  ): void--><!--Device-tag-function on(
    type: 'readerModeWithInterval',
    elementName: ElementName,
    discTech: int[],
    callback: Callback<TagInfo>,
    interval: int
  ): void-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'readerModeWithInterval' | Yes | The callback type to be registered. |
| elementName | [ElementName](../../apis-ability-kit/arkts-apis/arkts-ability-bundlemanager-elementname-t.md) | Yes | The element name of application, must include the bundleName and abilityName. |
| discTech | number[] | Yes | The technologies list to set for discovering.From {@link NFC_A} to {@link MIFARE_ULTRALIGHT}. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<TagInfo> | Yes | The callback to dispatched the TagInfo object for application. |
| interval | number | Yes | The interval for reader presence check. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |
| [3100202](../errorcode-nfc.md#3100202-application-status-error) | The element state is invalid. |

