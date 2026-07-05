# ContactSelectionOptions

选择联系人条件。

**Since:** 10

**System capability:** SystemCapability.Applications.Contacts

## Modules to Import

```TypeScript
import { contact } from '@kit.ContactsKit';
```

## filter

```TypeScript
filter?: ContactSelectionFilter
```

联系人查询过滤器。 从API version 15 开始，该接口支持在原子化服务中使用。

**Type:** ContactSelectionFilter

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.Contacts

## isAutoDismissOnNavigation

```TypeScript
isAutoDismissOnNavigation?: boolean
```

联系人picker发生页面路由时是否自动关闭，比如应用退后台场景 默认值为false

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.Contacts

## isMultiSelect

```TypeScript
isMultiSelect?: boolean
```

是否为多选，true:多选，false:单选。默认值为false。

**Type:** boolean

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Applications.Contacts

## isDisplayedByName

```TypeScript
isDisplayedByName?: boolean
```

是否按联系人姓名维度展示，true:按联系人姓名维度展示，false:按联系人号码维度展示，默认值为false。 从API version 15 开始，该接口支持在原子化服务中使用。

**Type:** boolean

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.Contacts

## maxSelectable

```TypeScript
maxSelectable?: number
```

联系人数量上限。默认值为10000，超出上限则以默认值筛选。 从API version 15 开始，该接口支持在原子化服务中使用。

**Type:** number

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.Contacts

