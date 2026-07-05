# XMPMetadata

XMPMetadata instance.

**Since:** 26.0.0

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## enumerateTags

```TypeScript
public enumerateTags(
      callback: (path: string, tag: XMPTag) => boolean,
      rootPath?: string,
      options?: XMPEnumerateOptions
    ): void
```

Enumerate the XMP tags from specified path and uses a callback to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (path: string, tag: XMPTag) => boolean | Yes | Callback used to return the XMP node and the corresponding XMPTag.  The callback receives a path argument that follows the XMP namespace:path format. |
| rootPath | string | No |  |
| options | XMPEnumerateOptions | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600206 | Invalid argument. Possible causes: 1. Namespace is not registered.  2. The rootPath syntax is invalid. |

## getBlob

```TypeScript
public getBlob(): Promise<ArrayBuffer>
```

Obtains the XMP metadata as a blob.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer> | A Promise instance used to return the ArrayBuffer of blob. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600301 | Memory alloc failed. |
| 7600302 | Memory copy failed. |

## getTag

```TypeScript
public getTag(path: string): Promise<XMPTag | null>
```

Get a single XMP tag from specified path.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | The specified path of the target XMP tag.(e.g., "dc:title"). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;XMPTag \| null> | Promise used to return the XMP tag. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600206 | Invalid argument. Possible causes: 1. Namespace is not registered.  2. The path syntax is invalid. |

## getTags

```TypeScript
public getTags(rootPath?: string, options?: XMPEnumerateOptions): Promise<Record<string, XMPTag>>
```

Get all XMP tags from specified path.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rootPath | string | No |  |
| options | XMPEnumerateOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, XMPTag>> | A Promise instance used to return all XMP tags. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600206 | Invalid argument. Possible causes: 1. Namespace is not registered.  2. The rootPath syntax is invalid. |

## registerXMPNamespace

```TypeScript
public registerXMPNamespace(xmpNamespace: XMPNamespace): Promise<void>
```

Register a new namespace according to the xml namespace and prefix.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| xmpNamespace | XMPNamespace | Yes | The xmp namespace. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result. If the operation fails, an  error message is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600206 | Invalid argument. Possible causes: 1. Invalid namespace format.  2. The uri is already registered. 3. The prefix is already registered. |

## removeTag

```TypeScript
public removeTag(path: string): Promise<void>
```

Remove the XMP tag from specified path.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | The specified path of the target XMP tag.(e.g., "dc:title"). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result. If the operation fails, an  error message is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600206 | Invalid argument. Possible causes: 1. Namespace is not registered.  2. The path syntax is invalid. |

## setBlob

```TypeScript
public setBlob(buffer: ArrayBuffer): Promise<void>
```

Set a blob into the XMP metadata.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | blob data. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result. If the operation fails, an  error message is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600206 | Invalid argument. Possible causes: 1. The buffer is empty or invalid. |

## setValue

```TypeScript
public setValue(path: string, type: XMPTagType, value?: string): Promise<void>
```

Set the XMP type and value of the XMP tag in the specified path.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | The specified path of the target XMP tag.(e.g., "dc:title"). |
| type | XMPTagType | Yes | The specified XMP tag type. |
| value | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | A Promise instance used to return the operation result. If the operation fails, an  error message is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600206 | Invalid argument. Possible causes: 1. Namespace is not registered.  2. The path syntax is invalid. 3. The path does not match the type. 4. The value is invalid for the type. |

