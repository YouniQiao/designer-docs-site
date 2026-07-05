# MifareClassicTag

Provides methods for accessing MifareClassic tag.

**继承实现关系：** MifareClassicTag继承自：TagSession。

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NFC.Tag

## authenticateSector

```TypeScript
authenticateSector(sectorIndex: int, key: int[], isKeyA: boolean): Promise<void>
```

Authenticates a sector with the key. Only successful authentication sector can be operated.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sectorIndex | int | 是 | Index of sector to authenticate. |
| key | int[] | 是 | The key(6-bytes) to authenticate. |
| isKeyA | boolean | 是 | KeyA flag. true means KeyA, otherwise KeyB. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

## authenticateSector

```TypeScript
authenticateSector(sectorIndex: int, key: int[], isKeyA: boolean, callback: AsyncCallback<void>): void
```

Authenticates a sector with the key. Only successful authentication sector can be operated.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sectorIndex | int | 是 | Index of sector to authenticate. |
| key | int[] | 是 | The key(6-bytes) to authenticate. |
| isKeyA | boolean | 是 | KeyA flag. true means KeyA, otherwise KeyB. |
| callback | AsyncCallback&lt;void> | 是 | The callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The Tag I/O operation failed. |

## decrementBlock

```TypeScript
decrementBlock(blockIndex: int, value: int): Promise<void>
```

Decreases the contents of a block, and stores the result in the internal transfer buffer.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blockIndex | int | 是 | The index of block to decrease. |
| value | int | 是 | The value to decrease, non-negative. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

## decrementBlock

```TypeScript
decrementBlock(blockIndex: int, value: int, callback: AsyncCallback<void>): void
```

Decreases the contents of a block, and stores the result in the internal transfer buffer.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blockIndex | int | 是 | The index of block to decrease. |
| value | int | 是 | The value to decrease, non-negative. |
| callback | AsyncCallback&lt;void> | 是 | The callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The Tag I/O operation failed. |

## getBlockCountInSector

```TypeScript
getBlockCountInSector(sectorIndex: int): int
```

Gets the number of blocks in the sector.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sectorIndex | int | 是 | The index of sector. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns the number of blocks. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## getBlockIndex

```TypeScript
getBlockIndex(sectorIndex: int): int
```

Gets the first block of the specific sector.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sectorIndex | int | 是 | The index of sector. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns index of first block in the sector. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## getSectorCount

```TypeScript
getSectorCount(): int
```

Gets the number of sectors in MifareClassic tag.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns the number of sectors. |

## getSectorIndex

```TypeScript
getSectorIndex(blockIndex: int): int
```

Gets the sector index, that the sector contains the specific block.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blockIndex | int | 是 | The index of block. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns the sector index. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## getTagSize

```TypeScript
getTagSize(): int
```

Gets size of the tag in bytes.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns the size of the tag. |

## getType

```TypeScript
getType(): tag.MifareClassicType
```

Gets the type of the MifareClassic tag.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| tag.MifareClassicType | Returns type of MifareClassic tag. |

## incrementBlock

```TypeScript
incrementBlock(blockIndex: int, value: int): Promise<void>
```

Increments the contents of a block, and stores the result in the internal transfer buffer.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blockIndex | int | 是 | The index of block to increment. |
| value | int | 是 | The value to increment, non-negative. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

## incrementBlock

```TypeScript
incrementBlock(blockIndex: int, value: int, callback: AsyncCallback<void>): void
```

Increments the contents of a block, and stores the result in the internal transfer buffer.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blockIndex | int | 是 | The index of block to increment. |
| value | int | 是 | The value to increment, non-negative. |
| callback | AsyncCallback&lt;void> | 是 | The callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The Tag I/O operation failed. |

## isEmulatedTag

```TypeScript
isEmulatedTag(): boolean
```

Checks if the tag is emulated or not.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if tag is emulated, otherwise false. |

## readSingleBlock

```TypeScript
readSingleBlock(blockIndex: int): Promise<int[]>
```

Reads a block, one block size is 16 bytes.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blockIndex | int | 是 | The index of block to read. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int[]> | Returns the block data. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

## readSingleBlock

```TypeScript
readSingleBlock(blockIndex: int, callback: AsyncCallback<int[]>): void
```

Reads a block, one block size is 16 bytes.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blockIndex | int | 是 | The index of block to read. |
| callback | AsyncCallback&lt;int[]> | 是 | The callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The Tag I/O operation failed. |

## restoreFromBlock

```TypeScript
restoreFromBlock(blockIndex: int): Promise<void>
```

Moves the contents of a block into the internal transfer buffer.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blockIndex | int | 是 | The index of value block to be moved from. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

## restoreFromBlock

```TypeScript
restoreFromBlock(blockIndex: int, callback: AsyncCallback<void>): void
```

Moves the contents of a block into the internal transfer buffer.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blockIndex | int | 是 | The index of value block to be moved from. |
| callback | AsyncCallback&lt;void> | 是 | The callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The Tag I/O operation failed. |

## transferToBlock

```TypeScript
transferToBlock(blockIndex: int): Promise<void>
```

Writes the contents of the internal transfer buffer to a value block.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blockIndex | int | 是 | The index of value block to be written. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

## transferToBlock

```TypeScript
transferToBlock(blockIndex: int, callback: AsyncCallback<void>): void
```

Writes the contents of the internal transfer buffer to a value block.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blockIndex | int | 是 | The index of value block to be written. |
| callback | AsyncCallback&lt;void> | 是 | The callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The Tag I/O operation failed. |

## writeSingleBlock

```TypeScript
writeSingleBlock(blockIndex: int, data: int[]): Promise<void>
```

Writes a block, one block size is 16 bytes.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blockIndex | int | 是 | The index of block to write. |
| data | int[] | 是 | The block data to write. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

## writeSingleBlock

```TypeScript
writeSingleBlock(blockIndex: int, data: int[], callback: AsyncCallback<void>): void
```

Writes a block, one block size is 16 bytes.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blockIndex | int | 是 | The index of block to write. |
| data | int[] | 是 | The block data to write. |
| callback | AsyncCallback&lt;void> | 是 | The callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The Tag I/O operation failed. |

