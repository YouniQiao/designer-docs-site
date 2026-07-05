# Transform

一种特殊的双工流，支持数据转换和结果输出。**Transform**类继承自[Duplex]stream.Duplex，支持**Duplex**中的所有API。

**Inheritance:** Transformextends: Duplex.

**Since:** 12

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { stream } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor()
```

创建**Transform**对象的构造函数。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
let transform = new stream.Transform();

```

## doFlush

```TypeScript
doFlush(callback: Function): void
```

在流结束时调用，用于处理剩余数据。使用异步回调返回结果。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Function | Yes | 回调函数。 |

**Example**

```TypeScript
class TestTransform extends stream.Transform {
  constructor() {
    super();
  }

  doTransform(chunk: string, encoding: string, callback: Function) {
    callback();
  }

  doFlush(callback: Function) {
    callback(null, 'test');
  }
}

let transform = new TestTransform();
transform.end('my test');
transform.on('data', (data) => {
  console.info("data is", data.data); // data is test
});

```

## doTransform

```TypeScript
doTransform(chunk: string, encoding: string, callback: Function): void
```

转换或处理输入的数据块，并通过回调通知处理完成。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| chunk | string | Yes | 待写入的数据。 |
| encoding | string | Yes | 编码格式。目前支持'utf8'、'gb18030'、'gbk'和'gb2312'。 |
| callback | Function | Yes | 回调函数。 |

**Example**

```TypeScript
class TestTransform extends stream.Transform {
  constructor() {
    super();
  }

  doTransform(chunk: string, encoding: string, callback: Function) {
    let stringChunk = chunk.toString().toUpperCase();
    console.info("Transform test doTransform", stringChunk); // Transform test doTransform HELLO
    this.push(stringChunk);
    callback();
  }
}

let tr = new TestTransform();
tr.write("hello");

```

