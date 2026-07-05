# File

文件类。

**Since:** 3

**Deprecated since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## access

```TypeScript
static access(options: FileAccessOption): void
```

判断指定文件或目录是否存在。

**Since:** 3

**Deprecated since:** 10

**Substitute:** @ohos.file.fs:access

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FileAccessOption | Yes | 接口选项。 |

**Example**

```TypeScript
import file from '@system.file';

export default {    
  access() {        
    file.access({            
      uri: 'internal://app/test',            
      success: function() {                
        console.info('call access success.');            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },        
    });    
  }
}


<!-- xxx.hml -->
<div class="container">
  <text class="title" style="font-size: 30px;">test</text>
  <input type="button" value="access" class="button" onclick="access"></input>
</div>


/* xxx.css */
.container {
  display: flex;
  justify-content: column;
  align-items: center;
  left: 0px;
  top: 0px;
  width: 454px;
  height: 454px;
}

.title {
  font-size: 100px;
  text-align: center;
  width: 200px;
  height: 100px;
}

.button {
  font-size: 30px;
  text-align: center;
  width: 250px;
  height: 60px;
  background-color: #0078D7;
  color: white;
  border-radius: 5px;
}


// xxx.js
import file from '@system.file';

export default {    
  access() {        
    file.access({            
      uri: 'internal://app/test',            
      success: function() {                
        console.info('call access success.');            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },        
    });    
  }
}

```

## copy

```TypeScript
static copy(options: FileCopyOption): void
```

将指定文件拷贝并存储到指定位置。

**Since:** 3

**Deprecated since:** 10

**Substitute:** @ohos.file.fs:copyFile

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FileCopyOption | Yes | 接口选项。 |

**Example**

```TypeScript
import file from '@system.file';

export default {    
  copy() {        
    file.copy({            
      srcUri: 'internal://app/file.txt',            
      dstUri: 'internal://app/file_copy.txt',            
      success: function(uri) {                
        console.info('call success callback success');            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },
    });    
  }
}


<!-- xxx.hml -->
<div class="container">
  <text class="title" style="font-size: 30px;">test</text>
  <input type="button" value="copy" class="button" onclick="copy"></input>
</div>


/* xxx.css */
.container {
  display: flex;
  justify-content: column;
  align-items: center;
  left: 0px;
  top: 0px;
  width: 454px;
  height: 454px;
}

.title {
  font-size: 100px;
  text-align: center;
  width: 200px;
  height: 100px;
}

.button {
  font-size: 30px;
  text-align: center;
  width: 250px;
  height: 60px;
  background-color: #0078D7;
  color: white;
  border-radius: 5px;
}


// xxx.js
import file from '@system.file';

export default {    
  copy() {        
    file.copy({            
      srcUri: 'internal://app/file.txt',            
      dstUri: 'internal://app/file_copy.txt',            
      success: function(uri) {                
        console.info('call success callback success');            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },
    });    
  }
}

```

## delete

```TypeScript
static delete(options: FileDeleteOption): void
```

删除本地文件。

**Since:** 3

**Deprecated since:** 10

**Substitute:** @ohos.file.fs:unlink

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FileDeleteOption | Yes | 接口选项。 |

**Example**

```TypeScript
import file from '@system.file';

export default {    
  delete() {        
    file.delete({            
      uri: 'internal://app/my_file',            
      success: function() {                
        console.info('call delete success.');            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },
    });    
  }
}


<!-- xxx.hml -->
<div class="container">
  <text class="title" style="font-size: 30px;">test</text>
  <input type="button" value="delete" class="button" onclick="delete"></input>
</div>


/* xxx.css */
.container {
  display: flex;
  justify-content: column;
  align-items: center;
  left: 0px;
  top: 0px;
  width: 454px;
  height: 454px;
}

.title {
  font-size: 100px;
  text-align: center;
  width: 200px;
  height: 100px;
}

.button {
  font-size: 30px;
  text-align: center;
  width: 250px;
  height: 60px;
  background-color: #0078D7;
  color: white;
  border-radius: 5px;
}


// xxx.js
import file from '@system.file';

export default {    
  delete() {        
    file.delete({            
      uri: 'internal://app/my_file',            
      success: function() {                
        console.info('call delete success.');            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },
    });    
  }
}

```

## get

```TypeScript
static get(options: FileGetOption): void
```

获取指定本地文件的信息。

**Since:** 3

**Deprecated since:** 10

**Substitute:** @ohos.file.fs:stat

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FileGetOption | Yes | 接口选项。 |

**Example**

```TypeScript
import file from '@system.file';

export default {    
  get() {        
    file.get({            
      uri: 'internal://app/file',            
      success: function(data) {                
        console.info(data.uri);            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },
    });    
  }
}


<!-- xxx.hml -->
<div class="container">
  <text class="title" style="font-size: 30px;">test</text>
  <input type="button" value="get" class="button" onclick="get"></input>
</div>


/* xxx.css */
.container {
  display: flex;
  justify-content: column;
  align-items: center;
  left: 0px;
  top: 0px;
  width: 454px;
  height: 454px;
}

.title {
  font-size: 100px;
  text-align: center;
  width: 200px;
  height: 100px;
}

.button {
  font-size: 30px;
  text-align: center;
  width: 250px;
  height: 60px;
  background-color: #0078D7;
  color: white;
  border-radius: 5px;
}


// xxx.js
import file from '@system.file';

export default {    
  get() {        
    file.get({            
      uri: 'internal://app/file',            
      success: function(data) {                
        console.info(data.uri);            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },
    });    
  }
}

```

## list

```TypeScript
static list(options: FileListOption): void
```

获取指定路径下全部文件的列表。

**Since:** 3

**Deprecated since:** 10

**Substitute:** @ohos.file.fs:listFile

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FileListOption | Yes | 接口选项。 |

**Example**

```TypeScript
import file from '@system.file';

export default {    
  list() {        
    file.list({            
      uri: 'internal://app/pic',            
      success: function(data) {                
        console.info(JSON.stringify(data.fileList));            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },        
    });    
  }
}


<!-- xxx.hml -->
<div class="container">
  <text class="title" style="font-size: 30px;">test</text>
  <input type="button" value="list" class="button" onclick="list"></input>
</div>


/* xxx.css */
.container {
  display: flex;
  justify-content: column;
  align-items: center;
  left: 0px;
  top: 0px;
  width: 454px;
  height: 454px;
}

.title {
  font-size: 100px;
  text-align: center;
  width: 200px;
  height: 100px;
}

.button {
  font-size: 30px;
  text-align: center;
  width: 250px;
  height: 60px;
  background-color: #0078D7;
  color: white;
  border-radius: 5px;
}


// xxx.js
import file from '@system.file';

export default {    
  list() {        
    file.list({            
      uri: 'internal://app/pic',            
      success: function(data) {                
        console.info(JSON.stringify(data.fileList));            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },        
    });    
  }
}

```

## mkdir

```TypeScript
static mkdir(options: FileMkdirOption): void
```

创建指定目录。

**Since:** 3

**Deprecated since:** 10

**Substitute:** @ohos.file.fs:mkdir

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FileMkdirOption | Yes | 接口选项。 |

**Example**

```TypeScript
import file from '@system.file';

export default {    
  mkdir() {        
    file.mkdir({            
      uri: 'internal://app/test_directory',            
      success: function() {                
        console.info('call mkdir success.');            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },
    });    
  }
}


<!-- xxx.hml -->
<div class="container">
  <text class="title" style="font-size: 30px;">test</text>
  <input type="button" value="mkdir" class="button" onclick="mkdir"></input>
</div>


/* xxx.css */
.container {
  display: flex;
  justify-content: column;
  align-items: center;
  left: 0px;
  top: 0px;
  width: 454px;
  height: 454px;
}

.title {
  font-size: 100px;
  text-align: center;
  width: 200px;
  height: 100px;
}

.button {
  font-size: 30px;
  text-align: center;
  width: 250px;
  height: 60px;
  background-color: #0078D7;
  color: white;
  border-radius: 5px;
}


// xxx.js
import file from '@system.file';

export default {    
  mkdir() {        
    file.mkdir({            
      uri: 'internal://app/test_directory',            
      success: function() {                
        console.info('call mkdir success.');            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },
    });    
  }
}

```

## move

```TypeScript
static move(options: FileMoveOption): void
```

将指定文件移动到其他指定位置。

**Since:** 3

**Deprecated since:** 10

**Substitute:** @ohos.file.fs:moveFile

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FileMoveOption | Yes | 文件过滤选项。默认不进行过滤。 |

**Example**

```TypeScript
import file from '@system.file';

export default {    
  move() {        
    file.move({            
      srcUri: 'internal://app/myfiles1',            
      dstUri: 'internal://app/myfiles2',            
      success: function(uri) {                
        console.info('call success callback success');            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },        
    });    
  }
}


<!-- xxx.hml -->
<div class="container">
  <text class="title" style="font-size: 30px;">test</text>
  <input type="button" value="move" class="button" onclick="move"></input>
</div>


/* xxx.css */
.container {
  display: flex;
  justify-content: column;
  align-items: center;
  left: 0px;
  top: 0px;
  width: 454px;
  height: 454px;
}

.title {
  font-size: 100px;
  text-align: center;
  width: 200px;
  height: 100px;
}

.button {
  font-size: 30px;
  text-align: center;
  width: 250px;
  height: 60px;
  background-color: #0078D7;
  color: white;
  border-radius: 5px;
}


// xxx.js
import file from '@system.file';

export default {
  move() {
    file.move({
      srcUri: 'internal://app/myfiles1',
      dstUri: 'internal://app/myfiles2',
      success: function(uri) {
        console.info('call success callback success');
      },
      fail: function(data, code) {
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);
      },
    });
  }
}

```

## readArrayBuffer

```TypeScript
static readArrayBuffer(options: FileReadArrayBufferOption): void
```

从指定文件中读取Buffer内容。仅支持文本文档读写。

**Since:** 3

**Deprecated since:** 10

**Substitute:** @ohos.file.fs:read

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FileReadArrayBufferOption | Yes | 接口选项。 |

**Example**

```TypeScript
import file from '@system.file';

export default {    
  readArrayBuffer() {        
    file.readArrayBuffer({            
      uri: 'internal://app/test',            
      position: 10,            
      length: 200,            
      success: function(data) {                
        console.info('call readArrayBuffer success: ' + data.buffer);            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },
    });    
  }
}


<!-- xxx.hml -->
<div class="container">
  <text class="title" style="font-size: 30px;">test</text>
  <input type="button" value="readArrayBuffer" class="button" onclick="readArrayBuffer"></input>
</div>


/* xxx.css */
.container {
  display: flex;
  justify-content: column;
  align-items: center;
  left: 0px;
  top: 0px;
  width: 454px;
  height: 454px;
}

.title {
  font-size: 100px;
  text-align: center;
  width: 200px;
  height: 100px;
}

.button {
  font-size: 30px;
  text-align: center;
  width: 250px;
  height: 60px;
  background-color: #0078D7;
  color: white;
  border-radius: 5px;
}


// xxx.js
import file from '@system.file';

export default {    
  readArrayBuffer() {        
    file.readArrayBuffer({            
      uri: 'internal://app/test',            
      position: 10,            
      length: 200,            
      success: function(data) {                
        console.info('call readArrayBuffer success: ' + data.buffer);            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },
    });    
  }
}

```

## readText

```TypeScript
static readText(options: FileReadTextOption): void
```

从指定文件中读取文本内容。仅支持文本文档读写。

**Since:** 3

**Deprecated since:** 10

**Substitute:** @ohos.file.fs:readText

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FileReadTextOption | Yes | 接口选项。 |

**Example**

```TypeScript
import file from '@system.file';

export default {    
  readText() {        
    file.readText({            
      uri: 'internal://app/text.txt',            
      success: function(data) {                
        console.info('call readText success: ' + data.text);            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },        
    });    
  }
}


<!-- xxx.hml -->
<div class="container">
  <text class="title" style="font-size: 30px;">test</text>
  <input type="button" value="readText" class="button" onclick="readText"></input>
</div>


/* xxx.css */
.container {
  display: flex;
  justify-content: column;
  align-items: center;
  left: 0px;
  top: 0px;
  width: 454px;
  height: 454px;
}

.title {
  font-size: 100px;
  text-align: center;
  width: 200px;
  height: 100px;
}

.button {
  font-size: 30px;
  text-align: center;
  width: 250px;
  height: 60px;
  background-color: #0078D7;
  color: white;
  border-radius: 5px;
}


// xxx.js
import file from '@system.file';

export default {    
  readText() {        
    file.readText({            
      uri: 'internal://app/text.txt',            
      success: function(data) {                
        console.info('call readText success: ' + data.text);            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },        
    });    
  }
}

```

## rmdir

```TypeScript
static rmdir(options: FileRmdirOption): void
```

删除指定目录。

**Since:** 3

**Deprecated since:** 10

**Substitute:** @ohos.file.fs:rmdir

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FileRmdirOption | Yes | 接口选项。 |

**Example**

```TypeScript
import file from '@system.file';

export default {    
  rmdir() {        
    file.rmdir({            
      uri: 'internal://app/test_directory',            
      success: function() {                
        console.info('call rmdir success.');            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },
    });    
  }
}


<!-- xxx.hml -->
<div class="container">
  <text class="title" style="font-size: 30px;">test</text>
  <input type="button" value="rmdir" class="button" onclick="rmdir"></input>
</div>


/* xxx.css */
.container {
  display: flex;
  justify-content: column;
  align-items: center;
  left: 0px;
  top: 0px;
  width: 454px;
  height: 454px;
}

.title {
  font-size: 100px;
  text-align: center;
  width: 200px;
  height: 100px;
}

.button {
  font-size: 30px;
  text-align: center;
  width: 250px;
  height: 60px;
  background-color: #0078D7;
  color: white;
  border-radius: 5px;
}


// xxx.js
import file from '@system.file';

export default {    
  rmdir() {        
    file.rmdir({            
      uri: 'internal://app/test_directory',            
      success: function() {                
        console.info('call rmdir success.');            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },
    });    
  }
}

```

## writeArrayBuffer

```TypeScript
static writeArrayBuffer(options: FileWriteArrayBufferOption): void
```

写Buffer内容到指定文件。仅支持文本文档读写。

**Since:** 3

**Deprecated since:** 10

**Substitute:** @ohos.file.fs:write

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FileWriteArrayBufferOption | Yes | 接口选项。 |

**Example**

```TypeScript
import file from '@system.file';

export default {    
  writeArrayBuffer() {       
    file.writeArrayBuffer({           
      uri: 'internal://app/test',           
      buffer: new Uint8Array(8),// The buffer is of the Uint8Array type.
      success: function() {                
        console.info('call writeArrayBuffer success.');            
      },           
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },
    });    
  }
}


<!-- xxx.hml -->
<div class="container">
  <text class="title" style="font-size: 30px;">test</text>
  <input type="button" value="writeArrayBuffer" class="button" onclick="writeArrayBuffer"></input>
</div>


/* xxx.css */
.container {
  display: flex;
  justify-content: column;
  align-items: center;
  left: 0px;
  top: 0px;
  width: 454px;
  height: 454px;
}

.title {
  font-size: 100px;
  text-align: center;
  width: 200px;
  height: 100px;
}

.button {
  font-size: 30px;
  text-align: center;
  width: 250px;
  height: 60px;
  background-color: #0078D7;
  color: white;
  border-radius: 5px;
}


// xxx.js
import file from '@system.file';

export default {    
  writeArrayBuffer() {       
    file.writeArrayBuffer({           
      uri: 'internal://app/test',           
      buffer: new Uint8Array(8),// The buffer is of the Uint8Array type.
      success: function() {                
        console.info('call writeArrayBuffer success.');            
      },           
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },
    });    
  }
}

```

## writeText

```TypeScript
static writeText(options: FileWriteTextOption): void
```

写文本内容到指定文件。仅支持文本文档读写。

**Since:** 3

**Deprecated since:** 10

**Substitute:** @ohos.file.fs:write

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FileWriteTextOption | Yes | 接口选项。 |

**Example**

```TypeScript
import file from '@system.file';

export default {    
  writeText() {        
    file.writeText({            
      uri: 'internal://app/test.txt',            
      text: 'Text that just for test.',            
      success: function() {                
        console.info('call writeText success.');            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },        
    });    
  }
}


<!-- xxx.hml -->
<div class="container">
  <text class="title" style="font-size: 30px;">test</text>
  <input type="button" value="writeText" class="button" onclick="writeText"></input>
</div>


/* xxx.css */
.container {
  display: flex;
  justify-content: column;
  align-items: center;
  left: 0px;
  top: 0px;
  width: 454px;
  height: 454px;
}

.title {
  font-size: 100px;
  text-align: center;
  width: 200px;
  height: 100px;
}

.button {
  font-size: 30px;
  text-align: center;
  width: 250px;
  height: 60px;
  background-color: #0078D7;
  color: white;
  border-radius: 5px;
}


// xxx.js
import file from '@system.file';

export default {    
  writeText() {        
    file.writeText({            
      uri: 'internal://app/test.txt',            
      text: 'Text that just for test.',            
      success: function() {                
        console.info('call writeText success.');            
      },            
      fail: function(data, code) {                
        console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
      },        
    });    
  }
}

```

