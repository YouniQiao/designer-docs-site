# Contact

联系人对象类。

**Since:** 7

**System capability:** SystemCapability.Applications.ContactsData

## Modules to Import

```TypeScript
import { contact } from '@kit.ContactsKit';
```

## note

```TypeScript
note?: Note
```

联系人的备注。

**Type:** Note

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## nickName

```TypeScript
nickName?: NickName
```

联系人的昵称。

**Type:** NickName

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## sipAddresses

```TypeScript
sipAddresses?: SipAddress[]
```

联系人的会话发起协议(SIP)地址列表。

**Type:** SipAddress[]

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## contactAttributes

```TypeScript
contactAttributes?: ContactAttributes
```

联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。

**Type:** ContactAttributes

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## groups

```TypeScript
groups?: Group[]
```

联系人的群组列表。

**Type:** Group[]

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## portrait

```TypeScript
portrait?: Portrait
```

联系人的头像。

**Type:** Portrait

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## postalAddresses

```TypeScript
postalAddresses?: PostalAddress[]
```

联系人的邮政地址列表。

**Type:** PostalAddress[]

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## phoneNumbers

```TypeScript
phoneNumbers?: PhoneNumber[]
```

联系人的电话号码列表。

**Type:** PhoneNumber[]

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## emails

```TypeScript
emails?: Email[]
```

联系人的邮箱地址列表。

**Type:** Email[]

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## organization

```TypeScript
organization?: Organization
```

联系人的组织信息。

**Type:** Organization

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## INVALID_CONTACT_ID

```TypeScript
static readonly INVALID_CONTACT_ID: -1
```

默认联系人的id，值为-1。

**Type:** -1

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## name

```TypeScript
name?: Name
```

联系人的姓名。

**Type:** Name

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## websites

```TypeScript
websites?: Website[]
```

联系人的网站列表。

**Type:** Website[]

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## imAddresses

```TypeScript
imAddresses?: ImAddress[]
```

联系人的即时消息地址列表。

**Type:** ImAddress[]

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## id

```TypeScript
readonly id?: number
```

联系人的id，由系统自动生成。

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## relations

```TypeScript
relations?: Relation[]
```

联系人的关系列表。

**Type:** Relation[]

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## events

```TypeScript
events?: Event[]
```

联系人的生日、周年纪念等重要日期列表。

**Type:** Event[]

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## key

```TypeScript
readonly key?: string
```

联系人的唯一查询键key，由系统自动生成。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

