# @ohos.zlib

本模块提供压缩解压缩文件的能力。

**起始版本：** 7

**系统能力：** SystemCapability.BundleManager.Zlib

## 导入模块

```TypeScript
import { zlib } from '@kit.BasicServicesKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [compressFile](arkts-zlib-compressfile-f.md#compressFile-1) | 压缩文件，压缩的结果。使用callback异步回调。 > **说明：** > > 为了避免路径穿越，从API version 13开始，inFile和outFile传入的参数不允许包含“../”，否则会返回900001、900002错误码。 |
| [compressFile](arkts-zlib-compressfile-f.md#compressFile-2) | 压缩文件，压缩的结果。使用Promise异步回调。 > **说明：** > > 为了避免路径穿越，从API version 13开始，inFile和outFile传入的参数不允许包含“../”，否则会返回900001、900002错误码。 |
| [compressFiles](arkts-zlib-compressfiles-f.md#compressFiles-1) | 压缩指定的多个文件。使用Promise异步回调。 |
| [createChecksum](arkts-zlib-createchecksum-f.md#createChecksum-1) | 创建校验对象。使用Promise异步回调。 |
| [createChecksumSync](arkts-zlib-createchecksumsync-f.md#createChecksumSync-1) | 创建校验对象。成功时返回Checksum对象实例。 |
| [createGZip](arkts-zlib-creategzip-f.md#createGZip-1) | 创建GZip对象。使用Promise异步回调。 |
| [createGZipSync](arkts-zlib-creategzipsync-f.md#createGZipSync-1) | 创建GZip对象。成功时返回GZip对象实例。 |
| [createZip](arkts-zlib-createzip-f.md#createZip-1) | 创建压缩解压缩对象实例。使用Promise异步回调。 |
| [createZipSync](arkts-zlib-createzipsync-f.md#createZipSync-1) | 创建压缩解压缩对象实例，成功时返回压缩解压缩对象实例。 |
| [decompressFile](arkts-zlib-decompressfile-f.md#decompressFile-1) | 解压文件，解压的结果。使用callback异步回调。 > **说明：** > > 为了避免路径穿越，从API version 13开始，inFile和outFile传入的参数不允许包含“../”，否则会返回900001、900002错误码。 > > 传入的压缩包内部文件或者文件夹名称不能包含“../”，否则会返回900003错误码。 |
| [decompressFile](arkts-zlib-decompressfile-f.md#decompressFile-2) | 解压文件，解压的结果。使用callback异步回调。 > **说明：** > > 为了避免路径穿越，从API version 13开始，inFile和outFile传入的参数不允许包含“../”，否则会返回900001、900002错误码。 > > 传入的压缩包内部文件或者文件夹名称不能包含“../”，否则会返回900003错误码。 |
| [decompressFile](arkts-zlib-decompressfile-f.md#decompressFile-3) | 解压文件，解压的结果。使用Promise异步回调。 > **说明：** > > 为了避免路径穿越，从API version 13开始，inFile和outFile传入的参数不允许包含“../”，否则会返回900001、900002错误码。 > > 传入的压缩包内部文件或者文件夹名称不能包含“../”，否则会返回900003错误码。 |
| [getOriginalSize](arkts-zlib-getoriginalsize-f.md#getOriginalSize-1) | 获取压缩文件的原始大小。使用Promise异步回调。 |
| [unzipFile](arkts-zlib-unzipfile-f.md#unzipFile-1) | 解压文件，解压完成后返回执行结果。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [zlib.decompressFile]{@link zlib.decompressFile(inFile: string, outFile: string, options: Options, callback: AsyncCallback<void>)} > 替代。 > > 传入的压缩包内部文件或者文件夹名称不能包含“../”，否则会返回-1错误码。 |
| [zipFile](arkts-zlib-zipfile-f.md#zipFile-1) | 压缩接口，压缩完成后返回执行结果。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [zlib.compressFile]{@link zlib.compressFile(inFile: string, outFile: string, options: Options, callback: AsyncCallback<void>)} > 替代。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [Checksum](arkts-zlib-checksum-i.md) | 校验对象。 |
| [DecompressionOutputInfo](arkts-zlib-decompressionoutputinfo-i.md) | 解压缩返回信息。 |
| [DeflatePendingOutputInfo](arkts-zlib-deflatependingoutputinfo-i.md) | 压缩等待返回信息。 |
| [DictionaryOutputInfo](arkts-zlib-dictionaryoutputinfo-i.md) | InflateGetDictionary和deflateGetDictionary这两个函数会返回值的相关信息。 |
| [GzErrorOutputInfo](arkts-zlib-gzerroroutputinfo-i.md) | GzError返回信息。 |
| [GzHeader](arkts-zlib-gzheader-i.md) | 传递从zlib例程中获取的Gzip头部信息。 |
| [GZip](arkts-zlib-gzip-i.md) | Gzip相关接口。 |
| [Options](arkts-zlib-options-i.md) | Options用于指定在压缩或解压Zip文件时的选项。 |
| [Zip](arkts-zlib-zip-i.md) | 压缩解压缩对象实例，支持以zlib、deflate、gzip格式对数据进行压缩与解压。 |
| [ZipOutputInfo](arkts-zlib-zipoutputinfo-i.md) | 压缩和解压缩的返回值信息。 |
| [ZStream](arkts-zlib-zstream-i.md) | 处理所有用于压缩和解压缩所需的信息。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [InflateBackInputCallback](arkts-zlib-inflatebackinputcallback-t.md) | 一个用于读取用户提供的输入数据的回调函数。当解压缩过程需要更多输入数据时，zlib 将调用此函数。此函数应从数据源读取数据并将其写入缓冲区中。 |
| [InflateBackInputCallback](arkts-zlib-inflatebackinputcallback-t.md) | 一个用于读取用户提供的输入数据的回调函数。当解压缩过程需要更多输入数据时，zlib 将调用此函数。此函数应从数据源读取数据并将其写入缓冲区中。 |
| [InflateBackOutputCallback](arkts-zlib-inflatebackoutputcallback-t.md) | 用户提供的输出数据会被写入回调函数中。每当解压后的数据准备好进行输出时，zlib 就会调用此函数将缓冲区中的数据写入目标位置。 |
| [InflateBackOutputCallback](arkts-zlib-inflatebackoutputcallback-t.md) | 用户提供的输出数据会被写入回调函数中。每当解压后的数据准备好进行输出时，zlib 就会调用此函数将缓冲区中的数据写入目标位置。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [CompressFlushMode](arkts-zlib-compressflushmode-e.md) | 压缩刷新模式。 |
| [CompressLevel](arkts-zlib-compresslevel-e.md) | 压缩等级。 |
| [CompressMethod](arkts-zlib-compressmethod-e.md) | 压缩模式。 |
| [CompressStrategy](arkts-zlib-compressstrategy-e.md) | CompressStrategy作为[Options]{@link zlib.Options}的一个属性，用于指定压缩时的压缩策略。 |
| [ErrorCode](arkts-zlib-errorcode-e.md) | 错误码。 |
| [MemLevel](arkts-zlib-memlevel-e.md) | 内存等级。 |
| [OffsetReferencePoint](arkts-zlib-offsetreferencepoint-e.md) | 偏移参考点。 |
| [ParallelStrategy](arkts-zlib-parallelstrategy-e.md) | ParallelStrategy作为[Options]{@link zlib.Options}的一个属性，用于指定压缩或解压时的串行或并行策略。 |
| [PathSeparatorStrategy](arkts-zlib-pathseparatorstrategy-e.md) | PathSeparatorStrategy作为[Options]{@link zlib.Options}的一个属性，用于指定解压时目标压缩包内文件路径中分隔符的处理策略。 |
| [ReturnStatus](arkts-zlib-returnstatus-e.md) | 压缩/解压缩函数的返回代码。 |

