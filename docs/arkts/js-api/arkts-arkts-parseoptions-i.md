# ParseOptions

Parse options for XmlPullParser.

**Since:** 8

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { xml } from '@ohos.xml';
```

## attributeValueCallbackFunction

```TypeScript
attributeValueCallbackFunction?: (name: string, value: string) => boolean
```

Attribute value callback function.

**Type:** (name: string, value: string) => boolean

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

## attributeWithTagCallbackFunction

```TypeScript
attributeWithTagCallbackFunction?: AttributeWithTagCb
```

Attribute value and tag callback function.

**Type:** AttributeWithTagCb

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Utils.Lang

## ignoreNameSpace

```TypeScript
ignoreNameSpace?: boolean
```

Whether to ignore parsing texts of the elements.

**Type:** boolean

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

## supportDoctype

```TypeScript
supportDoctype?: boolean
```

Whether to parsing Doctype of the elements.

**Type:** boolean

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

## tagValueCallbackFunction

```TypeScript
tagValueCallbackFunction?: (name: string, value: string) => boolean
```

Tag value callback function.

**Type:** (name: string, value: string) => boolean

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

## tokenValueCallbackFunction

```TypeScript
tokenValueCallbackFunction?: (eventType: EventType, value: ParseInfo) => boolean
```

Token value callback function.

**Type:** (eventType: EventType, value: ParseInfo) => boolean

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

