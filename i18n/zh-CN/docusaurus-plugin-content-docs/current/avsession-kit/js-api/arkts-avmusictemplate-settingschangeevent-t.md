# SettingsChangeEvent

```TypeScript
type SettingsChangeEvent = (settingItem: SettingItem) => Promise<SettingItem>
```

The settings change event.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| settingItem | SettingItem | 是 | setting item |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;SettingItem> | (SettingItem) returned through promise |

