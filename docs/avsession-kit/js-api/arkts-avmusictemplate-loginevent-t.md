# LoginEvent

```TypeScript
type LoginEvent = (controlType: LoginType, id?: string) => Promise<QrCodeInfo[]>
```

The login event.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| controlType | LoginType | Yes | control type |
| id | string | no |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;QrCodeInfo[]> | (QrCodeInfo[]) returned through promise |

