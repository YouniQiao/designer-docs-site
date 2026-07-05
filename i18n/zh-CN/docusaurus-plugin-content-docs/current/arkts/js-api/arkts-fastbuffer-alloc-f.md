# alloc

## alloc

```TypeScript
function alloc(size: number, fill?: string | FastBuffer | number, encoding?: BufferEncoding): FastBuffer
```

创建指定字节长度的FastBuffer对象并初始化。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| size | number | 是 | 指定的FastBuffer对象长度，单位：字节。取值范围：0 &lt;= size &lt;= UINT32_MAX。 |
| fill | string \| FastBuffer \| number | 否 |  |
| encoding | BufferEncoding | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| FastBuffer | 返回一个FastBuffer对象。 |

**示例：**

```TypeScript
import { fastbuffer } from '@kit.ArkTS';

let buf1 = fastbuffer.alloc(5);
let buf2 = fastbuffer.alloc(5, 'a');
let buf3 = fastbuffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
console.info(buf2.toString());
// 输出结果：aaaaa
console.info(buf3.toString());
// 输出结果：hello world

```

