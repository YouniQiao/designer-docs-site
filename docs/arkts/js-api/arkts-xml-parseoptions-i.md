# ParseOptions

XML解析选项。

**Since:** 8

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { xml } from '@kit.ArkTS';
```

## tagValueCallbackFunction

```TypeScript
tagValueCallbackFunction?: (name: string, value: string) => boolean
```

解析开始标签、标签值和结束标签，默认值undefined，表示不解析。

**Type:** (name: string, value: string) => boolean

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## attributeValueCallbackFunction

```TypeScript
attributeValueCallbackFunction?: (name: string, value: string) => boolean
```

解析属性和属性值，默认值undefined，表示不解析。

**Type:** (name: string, value: string) => boolean

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## attributeWithTagCallbackFunction

```TypeScript
attributeWithTagCallbackFunction?: AttributeWithTagCb
```

解析tagName标签，默认值undefined，表示不解析。

**Type:** AttributeWithTagCb

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## ignoreNameSpace

```TypeScript
ignoreNameSpace?: boolean
```

是否忽略命名空间，忽略命名空间后，将不会对其进行解析。true表示忽略命名空间，false表示不忽略命名空间，默认值false。

**Type:** boolean

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## tokenValueCallbackFunction

```TypeScript
tokenValueCallbackFunction?: (eventType: EventType, value: ParseInfo) => boolean
```

解析元素事件类型([EventType]xml.EventType)和[ParseInfo]xml.ParseInfo属性，默认值undefined，表示不解析。

**Type:** (eventType: EventType, value: ParseInfo) => boolean

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## supportDoctype

```TypeScript
supportDoctype?: boolean
```

是否解析文档类型，false表示不解析文档类型，true表示解析文档类型，默认值false。

**Type:** boolean

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

