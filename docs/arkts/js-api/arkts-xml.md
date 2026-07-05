# @ohos.xml

本模块提供XML生成和解析的接口。 本模块提供了两种生成XML文件的方式: * [XmlSerializer]{@link xml.XmlSerializer}：适用于已知XML文本大小的情况。 * [XmlDynamicSerializer<sup>20+</sup>]{@link xml.XmlDynamicSerializer}：适用于未知XML文本大小的情况。 本模块提供了两种解析XML文件的方式: * [XmlPullParser]{@link xml.XmlPullParser}：适用于对xml文本进行随机访问和灵活解析的场景。 * [XmlSAXParser<sup>24+</sup>]{@link xml.XmlSAXParser}：适用于流式解析xml文本的场景，当xml文本较大，其他解析方式会消耗较多内存，建议采用流式解析。 > **说明：** > > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。

**Since:** 8

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { xml } from '@kit.ArkTS';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [XmlDynamicSerializer](arkts-xml-xmldynamicserializer-c.md) | XmlDynamicSerializer类用于动态生成XML字符串。当无法确定XML内容长度时，推荐使用该类。 > **说明：** > > 使用该类构造的对象无需自行创建ArrayBuffer，程序动态扩容，可以不断添加XML元素，最终序列化结果字符串长度上限为100000。 |
| [XmlPullParser](arkts-xml-xmlpullparser-c.md) | XmlPullParser接口用于解析现有的XML文件。 |
| [XmlSAXParser](arkts-xml-xmlsaxparser-c.md) | XmlSAXParser类用于以流式方式解析XML文本。适用于需要边读取边处理的场景，支持从[stream.Readable]{@link @ohos.util.stream:stream.Readable} 流中读取XML数据并 进行解析。 > **说明：** > > - 本接口采用流式解析的方式，理论上可以解析任意大小的XML文本。但考虑到实际性能表现，建议单次解析的数据大小不超过300MB，以避免解析时间过长影响使用体验。 |
| [XmlSerializer](arkts-xml-xmlserializer-c.md) | XmlSerializer接口用于生成XML文件。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ParseInfo](arkts-xml-parseinfo-i.md) | 当前XML解析信息。 |
| [ParseOptions](arkts-xml-parseoptions-i.md) | XML解析选项。 |
| [XmlSAXHandler](arkts-xml-xmlsaxhandler-i.md) | XmlSAXHandler定义了SAX解析xml文本时的回调方法。开发者需要实现这些回调方法来处理xml文本的不同部分。这些回调方法会在xml解析过程的对应时机触发。startDocument会在开始解析文档时触发， endDocument会在结束文档解析时触发，startElement会在开始解析元素时触发，endElement会在结束解析元素时触发，characters则会在解析元素间文本内容时触发。 |

### Types

| Name | Description |
| --- | --- |
| [AttributeWithTagCb](arkts-xml-attributewithtagcb-t.md) | ParseOptions中attributeWithTagCallbackFunction的回调方法，三个字符串参数都是由XML解析器在解析过程中自动提取的，开发者无法直接自定义这些值。开发者只能在回调函数中通过返回值来决定如何处 理这些已存在的属性。 |

### Enums

| Name | Description |
| --- | --- |
| [EventType](arkts-xml-eventtype-e.md) | 事件类型枚举。 **ArkTS-Dyn起始版本：** 8 **ArkTS-Sta起始版本：** 23 |

