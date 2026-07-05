# CollatorOptions

Defines the options for creating a **Collator** object. Since API version 9, the attributes in **CollatorOptions** are optional.

**起始版本：** 8

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { intl } from '@kit.LocalizationKit';
```

## ignorePunctuation

```TypeScript
ignorePunctuation?: boolean
```

Whether to ignore punctuation. The value **true** means to ignore punctuation, and the value **false** means the opposite. The default value is **false**.

**类型：** boolean

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## usage

```TypeScript
usage?: string
```

Purpose of comparison. The options are as follows: - **sort**: sorting. - **search**: search for matched strings. The default value is **sort**.

**类型：** string

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## localeMatcher

```TypeScript
localeMatcher?: string
```

Locale matching algorithm. The options are as follows: **lookup**: fuzzy match. **best fit**: exact match. The default value is **best fit**.

**类型：** string

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## numeric

```TypeScript
numeric?: boolean
```

Whether numeric sorting is used. The options are as follows: - **true**: Numeric sorting is used. For example, '1' < '2' < '10' < '11'. - **false**: Numeric sorting is not used. For example, '1' < '10' < '11' < '2'. The default value is **false**.

**类型：** boolean

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## caseFirst

```TypeScript
caseFirst?: string
```

Whether case is taken into account for the locale's collation rules. The value can be: **upper**: Uppercase letters come first. **lower**: Lowercase letters come first. - **false**: The default collation rules of the locale are used. The default value is **false**.

**类型：** string

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## collation

```TypeScript
collation?: string
```

Collation rules for the locale. The value can be: **big5han**: Pinyin sorting for Latin letters. **compat**: compatibility sorting, only for Arabic. **dict**: dictionary-style sorting, only for Singhalese. **direct**: binary code point sorting. **ducet**: sorting according to the Unicode collation element table. **eor**: sorting according to the European collation rules. **gb2312**: Pinyin sorting, only for Chinese. **phonebk**: phone book-style sorting. **phonetic**: phonetic sorting. **pinyin**: Pinyin sorting. **reformed**: reformed sorting, only for Swedish. **searchjl**: special sorting for Korean initial consonant search. **stroke**: stroke sorting for Chinese. **trad**: traditional-style sorting, for example, Spanish. **unihan**: radical-stroke sorting for Han characters, only for Chinese, Japanese, and Korean. **zhuyin**: Zhuyin sorting, only for Chinese. The default value is **default**.

**类型：** string

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## sensitivity

```TypeScript
sensitivity?: string
```

Differences in the strings that lead to non-zero return values. The options are as follows: - **base**: Different letters are considered unequal, for example, 'a' ≠ 'b', 'a' = 'á', 'a' = 'A'. - **accent**: Different letters or same letters with different pronunciations are considered unequal, for example , 'a' ≠ 'b', 'a' ≠ 'á', 'a' = 'A'. - **case**: Different letters or same letters with different cases are considered unequal, for example, 'a' ≠ 'b' , 'a' = 'á', 'a' ≠ 'A'. - **variant**: Different letters, pronunciations, other distinguishing marks, or cases are all considered unequal , for example, 'a' ≠ 'b', 'a' ≠ 'á', 'a' ≠ 'A'. The default value is **variant**.

**类型：** string

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

