# @ohos.zlib

The **Zip** module provides APIs for file compression and decompression.

**Since:** 7

**System capability:** SystemCapability.BundleManager.Zlib

## Modules to Import

```TypeScript
import { zlib } from '@ohos.zlib';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [compressFile](arkts-basicservices-compressfile-f.md#compressfile-1) | Compresses a file. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; To avoid path traversal, the input parameters of **inFile** and **outFile** cannot contain two consecutive &gt; periods and a slash (../) since API version 13. Otherwise, error codes 900001 and 900002 are returned. |
| [compressFile](arkts-basicservices-compressfile-f.md#compressfile-2) | Compresses a file. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; To avoid path traversal, the input parameters of **inFile** and **outFile** cannot contain two consecutive &gt; periods and a slash (../) since API version 13. Otherwise, error codes 900001 and 900002 are returned. |
| [compressFiles](arkts-basicservices-compressfiles-f.md#compressfiles-1) | Compresses multiple specified files. This API uses a promise to return the result. |
| [createChecksum](arkts-basicservices-createchecksum-f.md#createchecksum-1) | Creates this checksum object. This API uses a promise to return the result. |
| [createChecksumSync](arkts-basicservices-createchecksumsync-f.md#createchecksumsync-1) | Creates this checksum object. A checksum instance is returned upon a success. |
| [createGZip](arkts-basicservices-creategzip-f.md#creategzip-1) | Creates this **GZip** object. This API uses a promise to return the result. |
| [createGZipSync](arkts-basicservices-creategzipsync-f.md#creategzipsync-1) | Creates this **GZip** object. A **GZip** instance is returned upon a success. |
| [createZip](arkts-basicservices-createzip-f.md#createzip-1) | Creates this **Zip** instance. This API uses a promise to return the result. |
| [createZipSync](arkts-basicservices-createzipsync-f.md#createzipsync-1) | Creates this **Zip** instance. A **Zip** instance is returned upon a success. |
| [decompressFile](arkts-basicservices-decompressfile-f.md#decompressfile-1) | Decompresses a file. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; To avoid path traversal, the input parameters of **inFile** and **outFile** cannot contain two consecutive &gt; periods and a slash (../) since API version 13. Otherwise, error codes 900001 and 900002 are returned. &gt; &gt; The name of the zipped file or zipped folder cannot contain two consecutive periods and a slash (../). Otherwise, &gt; the error code 900003 is returned. |
| [decompressFile](arkts-basicservices-decompressfile-f.md#decompressfile-2) | Decompresses a file. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; To avoid path traversal, the input parameters of **inFile** and **outFile** cannot contain two consecutive &gt; periods and a slash (../) since API version 13. Otherwise, error codes 900001 and 900002 are returned. &gt; &gt; The name of the zipped file or zipped folder cannot contain two consecutive periods and a slash (../). Otherwise, &gt; the error code 900003 is returned. |
| [decompressFile](arkts-basicservices-decompressfile-f.md#decompressfile-3) | Decompresses a file. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; To avoid path traversal, the input parameters of **inFile** and **outFile** cannot contain two consecutive &gt; periods and a slash (../) since API version 13. Otherwise, error codes 900001 and 900002 are returned. &gt; &gt; The name of the zipped file or zipped folder cannot contain two consecutive periods and a slash (../). Otherwise, &gt; the error code 900003 is returned. |
| [getOriginalSize](arkts-basicservices-getoriginalsize-f.md#getoriginalsize-1) | Obtains the original size of a compressed file. This API uses a promise to return the result. |
| [unzipFile](arkts-basicservices-unzipfile-f.md#unzipfile-1) | Unzips a file. The execution result is returned after the decompression is complete. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; The name of the zipped file or zipped folder cannot contain two consecutive periods and a slash (../). Otherwise, &gt; the error code -1 is returned. |
| [zipFile](arkts-basicservices-zipfile-f.md#zipfile-1) | Zips a file. The execution result is returned after the compression is complete. This API uses a promise to return the result. |

### Interfaces

| Name | Description |
| --- | --- |
| [Checksum](arkts-basicservices-checksum-i.md) | Checksum object. |
| [DecompressionOutputInfo](arkts-basicservices-decompressionoutputinfo-i.md) | Uncompress2 return value information. |
| [DeflatePendingOutputInfo](arkts-basicservices-deflatependingoutputinfo-i.md) | DeflatePending return value information. |
| [DictionaryOutputInfo](arkts-basicservices-dictionaryoutputinfo-i.md) | InflateGetDictionary and deflateGetDictionary return value information. |
| [GZip](arkts-basicservices-gzip-i.md) | Describes gzip-related APIs. |
| [GzErrorOutputInfo](arkts-basicservices-gzerroroutputinfo-i.md) | GzError return value information. |
| [GzHeader](arkts-basicservices-gzheader-i.md) | Gzip header information passed to and from zlib routines. |
| [Options](arkts-basicservices-options-i.md) | Defines options used to compress or decompress a ZIP file. |
| [ZStream](arkts-basicservices-zstream-i.md) | Process all the information required for compression and decompression. |
| [Zip](arkts-basicservices-zip-i.md) | Defines the **Zip** instance. It provides APIs to zip or unzip data in Zlib, Deflate, or Gzip format. |
| [ZipOutputInfo](arkts-basicservices-zipoutputinfo-i.md) | Compression and decompression return value information. |

### Enums

| Name | Description |
| --- | --- |
| [CompressFlushMode](arkts-basicservices-compressflushmode-e.md) | CompressFlushMode |
| [CompressLevel](arkts-basicservices-compresslevel-e.md) | CompressLevel |
| [CompressMethod](arkts-basicservices-compressmethod-e.md) | The deflate compression method (the only one supported in this version). |
| [CompressStrategy](arkts-basicservices-compressstrategy-e.md) | CompressStrategy |
| [ErrorCode](arkts-basicservices-errorcode-e.md) | ErrorCode |
| [MemLevel](arkts-basicservices-memlevel-e.md) | MemLevel |
| [OffsetReferencePoint](arkts-basicservices-offsetreferencepoint-e.md) | Defines the reference point for the offset. |
| [ParallelStrategy](arkts-basicservices-parallelstrategy-e.md) | ParallelStrategy |
| [PathSeparatorStrategy](arkts-basicservices-pathseparatorstrategy-e.md) | Defines **PathSeparatorStrategy**, a property of [Options](arkts-basicservices-options-i.md#options), used to specify the separator strategy for the file path in the compressed package specified for decompression. |
| [ReturnStatus](arkts-basicservices-returnstatus-e.md) | Return codes for the compression/decompression functions. |

### Types

| Name | Description |
| --- | --- |
| [InflateBackInputCallback](arkts-basicservices-inflatebackinputcallback-t.md) | A callback function for reading input data provided by a user. When the decompression process requires more input data, zlib will call this function. This function should read data from the data source to the buffer. |
| [InflateBackOutputCallback](arkts-basicservices-inflatebackoutputcallback-t.md) | The output data provided by the user is written into the callback function. Whenever decompressed data is ready for output, zlib calls this function to write the data from the buffer to the target location. |

