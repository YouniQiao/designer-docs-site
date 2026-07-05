# ContactAttributes

联系人属性列表，一般作为入参用来标识希望查询的联系人属性。 当传入为null时，默认查询全部属性。

**Since:** 7

**System capability:** SystemCapability.Applications.ContactsData

## Modules to Import

```TypeScript
import { contact } from '@kit.ContactsKit';
```

## attributes

```TypeScript
attributes: Attribute[]
```

联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。

**Type:** Attribute[]

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

