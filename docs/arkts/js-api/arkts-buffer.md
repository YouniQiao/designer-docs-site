# @ohos.buffer

A **Buffer** object represents a byte sequence of a fixed length. It is used to store binary data. **Recommended use case**: Use Buffer when you need to process images and a large amount of binary data, and receive or upload files.

**Since:** 9

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { buffer } from '@kit.ArkTS';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [alloc](arkts-arkts-alloc-f.md#alloc-1) | Creates and initializes a **Buffer** object of the specified length. |
| [allocUninitialized](arkts-arkts-allocuninitialized-f.md#allocuninitialized-1) | Creates a **Buffer** object of the specified size, without initializing it. This API does not allocate memory from the buffer pool. You need to use [fill()](arkts-arkts-buffer-c.md#fill-1) to initialize the **Buffer** object created. |
| [allocUninitializedFromPool](arkts-arkts-allocuninitializedfrompool-f.md#allocuninitializedfrompool-1) | Creates a **Buffer** object of the specified size from the buffer pool, without initializing it. You need to use [fill()](arkts-arkts-buffer-c.md#fill-1) to initialize the **Buffer** object created. |
| [byteLength](arkts-arkts-bytelength-f.md#bytelength-1) | Obtains the number of bytes of a string based on the encoding format. |
| [compare](arkts-arkts-compare-f.md#compare-1) | Compares two **Buffer** objects. This API is used for sorting **Buffer** objects. |
| [concat](arkts-arkts-concat-f.md#concat-1) | Concatenates an array of **Buffer** objects of the specified length into a new object. |
| [from](arkts-arkts-from-f.md#from-1) | Creates a **Buffer** object with the specified array. |
| [from](arkts-arkts-from-f.md#from-2) | Creates a **Buffer** object of the specified length that shares memory with ArrayBuffer. |
| [from](arkts-arkts-from-f.md#from-3) | Copies the data of a passed **Buffer** object to create a new **Buffer** object and returns the new one. Creates a **Buffer** object based on the memory of a passed **Uint8Array** object and returns the new object, maintaining the memory association of the data. |
| [from](arkts-arkts-from-f.md#from-4) | Creates a **Buffer** object based on the specified object. |
| [from](arkts-arkts-from-f.md#from-5) | Creates a **Buffer** object based on a string in the given encoding format. |
| [isBuffer](arkts-arkts-isbuffer-f.md#isbuffer-1) | Checks whether the specified object is a **Buffer** object. |
| [isEncoding](arkts-arkts-isencoding-f.md#isencoding-1) | Checks whether the encoding format is supported. |
| [transcode](arkts-arkts-transcode-f.md#transcode-1) | Transcodes a **Buffer** or **Uint8Array** object from one encoding format to another. |

### Classes

| Name | Description |
| --- | --- |
| [Blob](arkts-arkts-blob-c.md) | Process data as blob type |
| [Buffer](arkts-arkts-buffer-c.md) | The Buffer object is a method of handling buffers dedicated to binary data. |

### Interfaces

| Name | Description |
| --- | --- |
| [TypedArray](arkts-arkts-typedarray-i.md) | TypedArray inherits the features and methods of Int8Array |

### Types

| Name | Description |
| --- | --- |
| [BufferEncoding](arkts-arkts-bufferencoding-t.md) | Enumerates the supported encoding formats. |

