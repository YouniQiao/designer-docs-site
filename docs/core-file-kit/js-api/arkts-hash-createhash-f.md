# createHash

## createHash

```TypeScript
function createHash(algorithm: string): HashStream
```

创建并返回 HashStream 对象，该对象可用于使用给定的 algorithm 生成哈希摘要。

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| algorithm | string | Yes | 哈希计算采用的算法。可选 "md5"、"sha1" 或 "sha256"。建议采用安全强度更高的 "sha256"。 |

**Return value:**

| Type | Description |
| --- | --- |
| HashStream | HashStream 类的实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |

**Example**

```TypeScript
// pages/xxx.ets
import { fileIo } from '@kit.CoreFileKit';

function hashFileWithStream() {
  const filePath = pathDir + "/test.txt";
  // Create a readable stream.
  const rs = fileIo.createReadStream(filePath);
  // Create a hash stream.
  const hs = hash.createHash('sha256');
  rs.on('data', (emitData) => {
    const data = emitData?.data;
    hs.update(new Uint8Array(data?.split('').map((x: string) => x.charCodeAt(0))).buffer);
  });
  rs.on('close', async () => {
    const hashResult = hs.digest();
    const fileHash = await hash.hash(filePath, 'sha256');
    console.info(`hashResult: ${hashResult}, fileHash: ${fileHash}`);
  });
}

```

