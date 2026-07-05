# RelativeTimeFormatResolvedOptions

Represents the formatting options for the **RelativeTimeFormat** object.

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.ResolvedRelativeTimeFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions#return_value)

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { intl } from '@kit.LocalizationKit';
```

## numeric

```TypeScript
numeric: string
```

Format of the output result. It determines whether numeric values are used to represent relative dates or times in the formatting result. The value can be **always** or **auto**. For details about their display effects, see [Table 23](docroot://reference/apis-localization-kit/js-apis-intl.md#appendix).

**类型：** string

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.ResolvedRelativeTimeFormatOptions.numeric](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions#numeric)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## style

```TypeScript
style: string
```

Length of an internationalized message. The value can be **long**, **short**, or **narrow**. For details about their display effects, see [Table 24](docroot://reference/apis-localization-kit/js-apis-intl.md#appendix).

**类型：** string

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.ResolvedRelativeTimeFormatOptions.style](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions#style)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## numberingSystem

```TypeScript
numberingSystem: string
```

Numbering system. The value can be: **adlm**, **ahom**, **arab**, **arabext**, **bali**, **beng**, **bhks**, **brah**, **cakm**, **cham**, **deva**, **diak**, **fullwide**, **gong**, **gonm**, **gujr**, **guru**, **hanidec**, **hmng**, **hmnp**, **java**, **kali**, **khmr**, **knda**, **lana**, **lanatham**, **laoo**, **latn**, **lepc**, **limb**, **mathbold**, **mathdbl**, **mathmono**, **mathsanb**, **mathsans**, **mlym**, **modi**, **mong**, **mroo**, **mtei**, **mymr** , **mymrshan**, **mymrtlng**, **newa**, **nkoo**, **olck**, **orya**, **osma**, **rohg**, **saur**, **segment**, **shrd**, **sind**, **sinh**, **sora**, **sund**, **takr**, **talu**, **tamldec**, **telu**, **thai**, **tibt**, **tirh**, **vaii**, **wara**, or **wcho**.

**类型：** string

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.ResolvedRelativeTimeFormatOptions.numberingSystem](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions#numberingsystem)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## locale

```TypeScript
locale: string
```

Locale ID, including the language, script, and region.

**类型：** string

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.ResolvedRelativeTimeFormatOptions.locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions#locale)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

