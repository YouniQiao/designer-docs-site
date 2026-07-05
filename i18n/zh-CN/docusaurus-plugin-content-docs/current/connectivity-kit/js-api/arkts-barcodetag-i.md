# BarcodeTag

Provides methods for accessing Barcode tag.

**继承实现关系：** BarcodeTag继承自：TagSession。

**起始版本：** 18

**系统能力：** SystemCapability.Communication.NFC.Tag

## getBarcode

```TypeScript
getBarcode(): Promise<ArrayBuffer>
```

Returns the barcode of a Barcode tag.

**起始版本：** 18

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ArrayBuffer> | The barcode of tag. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

