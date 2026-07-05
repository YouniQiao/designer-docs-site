# getLineInstance

## getLineInstance

```TypeScript
export function getLineInstance(locale: string): BreakIterator
```

Obtains a **BreakIterator** object. The **BreakIterator** object maintains an internal break iterator that can be used to access various line break points.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| locale | string | 是 | [System locale](docroot://internationalization/i18n-locale-culture.md#how-it-works),  which consists of the language, script, and country/region.  The generated  [BreakIterator]i18n.BreakIterator object calculates the positions of line breaks based on the rules of  the specified locale. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| BreakIterator | BreakIterator object. |

