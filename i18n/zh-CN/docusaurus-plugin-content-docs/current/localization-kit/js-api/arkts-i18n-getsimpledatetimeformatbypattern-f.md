# getSimpleDateTimeFormatByPattern

## getSimpleDateTimeFormatByPattern

```TypeScript
export function getSimpleDateTimeFormatByPattern(pattern: string, locale?: Intl.Locale): SimpleDateTimeFormat
```

Obtains a **SimpleDateTimeFormat** object based on the specified pattern string. For details about the difference between the objects obtained by this API and [getSimpleDateTimeFormatBySkeleton]i18n.getSimpleDateTimeFormatBySkeleton(skeleton: string, locale?: Intl.Locale) , see the examples in [SimpleDateTimeFormat.format]i18n.SimpleDateTimeFormat#format.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pattern | string | 是 | Valid pattern, which supports free combinations of field patterns in  [Date Field Symbol Table](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). This  parameter also supports custom text enclosed in single quotation marks (`''`). |
| locale | Intl.Locale | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SimpleDateTimeFormat | SimpleDateTimeFormat object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

## getSimpleDateTimeFormatByPattern

```TypeScript
export function getSimpleDateTimeFormatByPattern(pattern: string, locale?: intl.Locale): SimpleDateTimeFormat
```

Obtains a **SimpleDateTimeFormat** object based on the specified pattern string. For details about the difference between the objects obtained by this API and [getSimpleDateTimeFormatBySkeleton]i18n.getSimpleDateTimeFormatBySkeleton(skeleton: string, locale?: intl.Locale) , see the examples in [SimpleDateTimeFormat.format]i18n.SimpleDateTimeFormat#format.

**起始版本：** 18

**废弃版本：** 20

**替代接口：** i18n.getSimpleDateTimeFormatByPattern(pattern:

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pattern | string | 是 | Valid pattern, which supports free combinations of field patterns in  [Date Field Symbol Table](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). This  parameter also supports custom text enclosed in single quotation marks (`''`). |
| locale | intl.Locale | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SimpleDateTimeFormat | SimpleDateTimeFormat object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

