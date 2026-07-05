# registerForegroundDispatch

## registerForegroundDispatch

```TypeScript
function registerForegroundDispatch(elementName: ElementName, discTech: int[], callback: AsyncCallback<TagInfo>): void
```

Register tag foreground dispatch. Dispatches to this application only if a tag discovered.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
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

