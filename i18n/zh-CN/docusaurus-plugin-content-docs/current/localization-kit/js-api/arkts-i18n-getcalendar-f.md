# getCalendar

## getCalendar

```TypeScript
export function getCalendar(locale: string, type?: string): Calendar
```

Obtains the **Calendar** object for the specified locale and calendar type.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| locale | string | 是 | [Locale ID](docroot://internationalization/i18n-locale-culture.md#how-it-works), which  consists of the language, script, and country/region, for example, zh-Hans-CN. |
| type | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Calendar | Calendar object. |

