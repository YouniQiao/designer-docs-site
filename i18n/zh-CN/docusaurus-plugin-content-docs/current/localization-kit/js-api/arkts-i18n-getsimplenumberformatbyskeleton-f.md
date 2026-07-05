# getSimpleNumberFormatBySkeleton

## getSimpleNumberFormatBySkeleton

```TypeScript
export function getSimpleNumberFormatBySkeleton(skeleton: string, locale?: Intl.Locale): SimpleNumberFormat
```

Obtains a **SimpleNumberFormat** object based on the specified skeleton.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| skeleton | string | 是 | Valid skeleton. For details about the supported characters and their meanings, see  [Number Skeletons](https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#number-skeletons)  . |
| locale | Intl.Locale | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SimpleNumberFormat | SimpleNumberFormat object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

## getSimpleNumberFormatBySkeleton

```TypeScript
export function getSimpleNumberFormatBySkeleton(skeleton: string, locale?: intl.Locale): SimpleNumberFormat
```

Obtains a **SimpleNumberFormat** object based on the specified skeleton.

**起始版本：** 18

**废弃版本：** 20

**替代接口：** i18n.getSimpleNumberFormatBySkeleton(skeleton:

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| skeleton | string | 是 | Valid skeleton. For details about the supported characters and their meanings, see  [Number Skeletons](https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#number-skeletons)  . |
| locale | intl.Locale | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SimpleNumberFormat | SimpleNumberFormat object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

