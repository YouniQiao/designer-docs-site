# isRTL

## isRTL

```TypeScript
export function isRTL(locale: string): boolean
```

Checks whether a language is an RTL language. For an RTL language, [UI mirroring](docroot://internationalization/i18n-ui-design.md#ui-mirroring) is required.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| locale | string | 是 | [System locale](docroot://internationalization/i18n-locale-culture.md#how-it-works),  which consists of the language, script, and country/region. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether a language is an RTL language. The value true indicates that the language is an  RTL language, and the value false indicates the opposite. |

