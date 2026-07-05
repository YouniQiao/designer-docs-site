# FilterClause

联系人过滤条件。多个筛选条件之间是“或者”的关系，如果参数是数组类型，数组最多只能包含3个元素。

**Since:** 15

**System capability:** SystemCapability.Applications.Contacts

## Modules to Import

```TypeScript
import { contact } from '@kit.ContactsKit';
```

## dataItem

```TypeScript
dataItem?: DataFilter
```

联系人数据过滤项。

**Type:** DataFilter

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.Contacts

## focusModeList

```TypeScript
focusModeList?: Array<FilterOptions>
```

专注模式。

**Type:** Array<FilterOptions>

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.Contacts

## name

```TypeScript
name?: Array<FilterOptions>
```

联系人姓名。

**Type:** Array<FilterOptions>

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.Contacts

## id

```TypeScript
id?: Array<FilterOptions>
```

联系人id。

**Type:** Array<FilterOptions>

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.Contacts

