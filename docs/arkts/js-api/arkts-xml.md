# @ohos.xml

The xml module provides utilities for converting XML text to Javascript object, XML generation and parsing.

**Since:** 8

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { xml } from '@ohos.xml';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [XmlDynamicSerializer](arkts-arkts-xmldynamicserializer-c.md) | The XmlDynamicSerializer interface is used to dynamically generate an xml file. |
| [XmlPullParser](arkts-arkts-xmlpullparser-c.md) | The XmlPullParser interface is used to parse the existing xml file. |
| [XmlSAXParser](arkts-arkts-xmlsaxparser-c.md) | The XmlSAXParser provides the capability of parsing XML in a streaming manner. |
| [XmlSerializer](arkts-arkts-xmlserializer-c.md) | The XmlSerializer interface is used to generate an xml file. |

### Interfaces

| Name | Description |
| --- | --- |
| [ParseInfo](arkts-arkts-parseinfo-i.md) | The current parse info. |
| [ParseOptions](arkts-arkts-parseoptions-i.md) | Parse options for XmlPullParser. |
| [XmlSAXHandler](arkts-arkts-xmlsaxhandler-i.md) | A simple API for XML handling |

### Enums

| Name | Description |
| --- | --- |
| [EventType](arkts-arkts-eventtype-e.md) | The event types represented by XML elements. |

### Types

| Name | Description |
| --- | --- |
| [AttributeWithTagCb](arkts-arkts-attributewithtagcb-t.md) | The type of ParseOptions attributeWithTagCallbackFunction. |

