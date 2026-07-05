# deleteKeyItem

## deleteKeyItem

```TypeScript
function deleteKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<void>): void
```

删除密钥。使用callback异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Huks.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyAlias | string | 是 | 密钥别名，应为生成key时传入的别名。 |
| options | HuksOptions | 是 | 用于删除密钥时指定密钥的属性，如使用[HuksAuthStorageLevel]huks.HuksAuthStorageLevel指定需删除密钥的安  全级别， 可传空，当API version ≥ 12时，传空默认为CE，当API version ＜ 12时，传空默认为DE。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当删除密钥成功时，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | api is not supported |
| 12000004 | operating file failed |
| 12000005 | IPC communication failed |
| 12000011 | queried entity does not exist |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |
| 12000018 | the group id specified by the access group tag is invalid [since 23] |

**示例：**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* 此处options选择emptyOptions传空 */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};

/* 删除密钥 */
huks.deleteKeyItem(keyAlias, emptyOptions, (error) => {
  if (error) {
    console.error(`callback: deleteKeyItem failed`);
  } else {
    console.info(`callback: deleteKeyItem key success`);
  }
});


<stack class="container">
    <input type="button" class="deleteBtn" @click="deleteKey">删除密钥</input>
    <text class="result">{{result}}</text>
</stack>


.container {
  width: 454px;
  height: 800px;
  background-color: #ffffffff;
}

.deleteBtn {
  left: 77px;
  top: 100px;
  width: 300px;
  height: 80px;
  text-align: center;
  color: white;
  background-color: orange;
  font-size: 25px;
}

.result {
  left: 30px;
  top: 190px;
  width: 390px;
  height: 80px;
  text-align: center;
  color: #ff000000;
  background-color: #ffffffff;
  font-size: 25px;
}


import huks from '@ohos.security.huks';

function testDeleteKey() {
    let huksInfo;
    let keyAlias = 'keyAlias';
    let emptyOptions = {
        properties: []
    };
    huks.deleteKeyItem(keyAlias, emptyOptions, (err, data) => {
        if (err) {
            huksInfo = 'deleteKeyItem failed, code: ' + err.code + ', message: ' + err.message;
            console.error(huksInfo);
        } else {
            huksInfo = 'deleteKeyItem succeeded';
            console.info(huksInfo);
        }
    });
    return huksInfo;
}

export default {
    data: {
        result: ''
    },

    deleteKey() {
        this.result = testDeleteKey();
    }
};


```

## deleteKeyItem

```TypeScript
function deleteKeyItem(keyAlias: string, options: HuksOptions): Promise<void>
```

删除密钥。使用Promise异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Huks.Extension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyAlias | string | 是 | 密钥别名，应为生成key时传入的别名。 |
| options | HuksOptions | 是 | 用于删除时指定密钥的属性TAG，如使用[HuksAuthStorageLevel]huks.HuksAuthStorageLevel指定需删除密钥的  安全级别， 可传空，当API version ≥ 12时，传空默认为CE，当API version ＜ 12时，传空默认为DE。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | api is not supported |
| 12000004 | operating file failed |
| 12000005 | IPC communication failed |
| 12000011 | queried entity does not exist |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |
| 12000018 | the group id specified by the access group tag is invalid [since 23] |

**示例：**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* 此处options选择emptyOptions传空 */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};
/* 删除密钥 */
huks.deleteKeyItem(keyAlias, emptyOptions)
  .then(() => {
    console.info(`promise: deleteKeyItem key success`);
  });

```

