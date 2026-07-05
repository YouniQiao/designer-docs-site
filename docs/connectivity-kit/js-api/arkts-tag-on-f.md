# on

## on('readerMode')

```TypeScript
function on(type: 'readerMode', elementName: ElementName, discTech: int[], callback: AsyncCallback<TagInfo>): void
```

Set reader mode enabled when the specific application is foreground. Dispatches to this application only if a tag discovered.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'readerMode' | Yes | The callback type to be registered. |
| elementName | ElementName | Yes | The element name of application, must include the bundleName and abilityName. |
| discTech | int[] | Yes | The technologies list to set for discovering. From {@link NFC_A} to {@link MIFARE_ULTRALIGHT}. |
| callback | AsyncCallback&lt;TagInfo> | Yes | The callback to dispatched the TagInfo object for application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100202 | The element state is invalid. |

## on('readerModeWithInterval')

```TypeScript
function on(
    type: 'readerModeWithInterval',
    elementName: ElementName,
    discTech: int[],
    callback: Callback<TagInfo>,
    interval: int
  ): void
```

Set reader mode enabled when the specific application is on foreground and set card presence interval. Tag infomation will be dispatched to the application only if a NFC tag is discovered.

**Since:** 23

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'readerModeWithInterval' | Yes | The callback type to be registered. |
| elementName | ElementName | Yes | The element name of application, must include the bundleName and abilityName. |
| discTech | int[] | Yes | The technologies list to set for discovering.  From {@link NFC_A} to {@link MIFARE_ULTRALIGHT}. |
| callback | Callback&lt;TagInfo> | Yes | The callback to dispatched the TagInfo object for application. |
| interval | int | Yes | The interval for reader presence check. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100202 | The element state is invalid. |

