# XmlSAXParser

XmlSAXParser类用于以流式方式解析XML文本。适用于需要边读取边处理的场景，支持从[stream.Readable](arkts-stream-readable-c.md#Readable) 流中读取XML数据并 进行解析。 > **说明：** > > - 本接口采用流式解析的方式，理论上可以解析任意大小的XML文本。但考虑到实际性能表现，建议单次解析的数据大小不超过300MB，以避免解析时间过长影响使用体验。

**Since:** 24

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { xml } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor(inputStream: stream.Readable, encoding?: string)
```

XmlSAXParser的构造函数。 > **说明：** > > - `inputStream`参数必须传入继承自[Readable](arkts-stream-readable-c.md#Readable)且实现 > [Doread](arkts-stream-readable-c.md#doRead)的类。可以传入其他模块中满足该条件的类，如 > [ReadStream](../../apis-core-file-kit/arkts-apis/arkts-readstream-c.md#ReadStream)。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inputStream | stream.Readable | Yes | 用于读取XML数据的可读流实例。 |
| encoding | string | No |  |

## parse

```TypeScript
parse(xmlSAXHandler: XmlSAXHandler): void
```

使用SAX（Simple API for XML）方式解析XML数据。 > **说明：** > > - 在调用parse函数后，用户可以通过控制流的方式来控制解析进度。任意数据块被推入后，解析器会解析相应的进度。具体流控制方式详见 > [@ohos.util.stream (数据流基类stream)](arkts-util-stream.md#stream)。 > > - 可以配合自动控制数据的流使用，如[ReadStream](../../apis-core-file-kit/arkts-apis/arkts-readstream-c.md#ReadStream)，此时用户不再需要手动控制数据。 > > - parse接口注册了流的on监听器，会自动读取流中的数据。不建议再对流的监听器进行操作或者读取数据，以免发生冲突导致接口能力失效。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| xmlSAXHandler | XmlSAXHandler | Yes | SAX处理器对象。 |

