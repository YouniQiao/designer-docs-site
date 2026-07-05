# addPreferredLanguage

## addPreferredLanguage

```TypeScript
export function addPreferredLanguage(language: string, index?: int): boolean
```

Adds a preferred language to the specified position on the preferred language list.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** i18n.System.addPreferredLanguage

**需要权限：** 

 ohos.permission.UPDATE_CONFIGURATION

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| language | string | 是 | Preferred language to add. |
| index | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | true if the operation is successful, and false otherwise. |

