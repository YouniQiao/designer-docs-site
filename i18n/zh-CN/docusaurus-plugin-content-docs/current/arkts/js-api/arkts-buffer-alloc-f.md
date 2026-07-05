# alloc

## alloc

```TypeScript
function alloc(size: int, fill?: string | Buffer | int | double | long, encoding?: BufferEncoding): Buffer
```

创建指定字节长度的Buffer对象并初始化。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| size | int | 是 | 指定的Buffer对象长度，单位：字节。 |
| fill | string \| Buffer \| int \| double \| long | 否 |  |
| encoding | BufferEncoding | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Buffer | 返回一个Buffer对象。 |

