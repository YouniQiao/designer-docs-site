# removePreferredLanguage

## removePreferredLanguage

```TypeScript
export function removePreferredLanguage(index: int): boolean
```

Removes a preferred language from the specified position on the preferred language list.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** i18n.System.removePreferredLanguage

**需要权限：** 

 ohos.permission.UPDATE_CONFIGURATION

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | int | 是 | Position of the preferred language to delete. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the operation is successful. The value true indicates that the operation is  successful, and the value false indicates the opposite. |

