# @ohos.fastbuffer

The FastBuffer class is a container type for dealing with binary data directly. It can be constructed in a variety of ways.

**Since:** 20

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { fastbuffer } from '@kit.ArkTS';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [alloc](arkts-arkts-alloc-f.md#alloc-1) | Allocates a new FastBuffer for a fixed size bytes. If fill is undefined, the FastBuffer will be zero-filled. |
| [allocUninitialized](arkts-arkts-allocuninitialized-f.md#allocuninitialized-1) | Allocates a new un-pooled FastBuffer for a fixed size bytes. The FastBuffer will not be initially filled. |
| [allocUninitializedFromPool](arkts-arkts-allocuninitializedfrompool-f.md#allocuninitializedfrompool-1) | Allocates a new FastBuffer for a fixed size bytes. The FastBuffer will not be initially filled. |
| [byteLength](arkts-arkts-bytelength-f.md#bytelength-1) | Returns the byte length of a string when encoded using `encoding`.This is not the same as [`String.prototype.length`], which does not accountfor the encoding that is used to convert the string into bytes. |
| [compare](arkts-arkts-compare-f.md#compare-1) | Compares buf1 to buf2 |
| [concat](arkts-arkts-concat-f.md#concat-1) | Returns a new `FastBuffer` which is the result of concatenating all the `FastBuffer`instances in the `list` together. |
| [from](arkts-arkts-from-f.md#from-1) | Allocates a new FastBuffer using an array of bytes in the range 0 – 255. Array entries outside that range will be truncated to fit into it. |
| [from](arkts-arkts-from-f.md#from-2) | This creates a view of the ArrayBuffer without copying the underlying memory. |
| [from](arkts-arkts-from-f.md#from-3) | Copies the passed buffer data onto a new FastBuffer instance. |
| [from](arkts-arkts-from-f.md#from-4) | Creates a new FastBuffer containing string. The encoding parameter identifies the character encodingto be used when converting string into bytes. |
| [isBuffer](arkts-arkts-isbuffer-f.md#isbuffer-1) | Returns true if obj is a FastBuffer, false otherwise |
| [isEncoding](arkts-arkts-isencoding-f.md#isencoding-1) | Returns true if encoding is the name of a supported character encoding, or false otherwise. |
| [transcode](arkts-arkts-transcode-f.md#transcode-1) | Re-encodes the given FastBuffer or Uint8Array instance from one character encoding to another. |

### Classes

| Name | Description |
| --- | --- |
| [FastBuffer](arkts-arkts-fastbuffer-c.md) | The FastBuffer object is a method of handling buffers dedicated to binary data. |

### Interfaces

| Name | Description |
| --- | --- |
| [TypedArray](arkts-arkts-typedarray-i.md) | TypedArray inherits the features and methods of Int8Array |

### Types

| Name | Description |
| --- | --- |
| [BufferEncoding](arkts-arkts-bufferencoding-t.md) | This parameter specifies the type of a common encoding format. |

