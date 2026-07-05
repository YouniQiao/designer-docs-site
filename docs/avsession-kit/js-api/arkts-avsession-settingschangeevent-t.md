# SettingsChangeEvent

```TypeScript
type SettingsChangeEvent = (settingItem: SettingItem) => Promise<SettingItem>
```

The settings change event.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| settingItem | SettingItem | Yes | setting item |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SettingItem&gt; | (SettingItem) returned through promise |

