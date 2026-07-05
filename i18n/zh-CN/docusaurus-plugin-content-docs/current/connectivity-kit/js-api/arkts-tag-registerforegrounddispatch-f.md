# registerForegroundDispatch

## registerForegroundDispatch

```TypeScript
function registerForegroundDispatch(elementName: ElementName, discTech: int[], callback: AsyncCallback<TagInfo>): void
```

Register tag foreground dispatch. Dispatches to this application only if a tag discovered.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| elementName | ElementName | 是 | The element name of application, must include the bundleName and abilityName. |
| discTech | int[] | 是 | The technologies list to set for discovering. From {@link NFC_A} to {@link MIFARE_ULTRALIGHT}. |
| callback | AsyncCallback&lt;TagInfo> | 是 | The callback to dispatched the TagInfo object for application. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100202 | The element state is invalid. |

