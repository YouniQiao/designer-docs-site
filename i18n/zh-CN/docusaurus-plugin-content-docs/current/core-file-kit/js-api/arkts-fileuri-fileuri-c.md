# FileUri

FileUri represents the uri of the file.

**继承实现关系：** FileUri继承自：uri.URI。

**起始版本：** 15

**系统能力：** SystemCapability.FileManagement.AppFileService

## 导入模块

```TypeScript
import { fileUri } from '@kit.CoreFileKit';
```

## constructor

```TypeScript
constructor(uriOrPath: string)
```

Constructor for obtaining the instance of the FileUri class.

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.AppFileService

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uriOrPath | string | 是 | Uri or Path. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900005 | I/O error |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |
| 14300002 | Invalid uri |

**示例：**

```TypeScript
let path = pathDir + '/test';
let uri = fileUri.getUriFromPath(path);  // file://<packageName>/data/storage/el2/base/haps/entry/files/test
let fileUriObject = new fileUri.FileUri(uri);
console.info("The name of FileUri is " + fileUriObject.name);

```

## getFullDirectoryUri

```TypeScript
getFullDirectoryUri(): string
```

Get the full directory uri where the file URI is located

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.AppFileService

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Return the directory uri |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900002 | No such file or directory |
| 13900012 | Permission denied |
| 13900042 | Unknown error |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  let path = pathDir + '/test.txt';
  let fileUriObject = new fileUri.FileUri(path);
  let directoryUri = fileUriObject.getFullDirectoryUri();
  console.info(`success to getFullDirectoryUri: ${JSON.stringify(directoryUri)}`);
} catch (error) {
  console.error(`failed to getFullDirectoryUri because: ${JSON.stringify(error)}`);
}

```

## isRemoteUri

```TypeScript
isRemoteUri(): boolean
```

Check whether the incoming URI is a remote URI

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.AppFileService

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Return true or false |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900042 | Unknown error |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
function isRemoteUriExample() {
  let uri = "file://com.example.demo/data/storage/el2/base/test.txt?networkid=xxxx";// ?networkid设备id，远端URI的标识
  let fileUriObject = new fileUri.FileUri(uri);
  let ret = fileUriObject.isRemoteUri();
  if (ret) {
      console.info(`It is a remote uri.`);
  }
}

```

## toString

```TypeScript
toString(): string
```

Converts this URI into an encoded string.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Utils.Lang

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | URI in a serialized string. |

**示例：**

```TypeScript
let path = pathDir + '/test';
let fileUriObject = new fileUri.FileUri(path);
console.info("The uri of FileUri is " + fileUriObject.toString());

```

## name

```TypeScript
get name(): string
```

Obtains the file name of uri.

**类型：** string

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.AppFileService

