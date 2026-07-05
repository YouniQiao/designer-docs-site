# startDiscoverPrinter

## startDiscoverPrinter

```TypeScript
function startDiscoverPrinter(extensionList: Array<string>, callback: AsyncCallback<void>): void
```

通过指定“打印扩展能力列表”来发现打印机，发现的打印机具备包含指定的打印扩展能力。如果指定空的打印扩展能力列表，则表示加载所有扩展能力。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

- API版本10 - 19： ohos.permission.MANAGE_PRINT_JOB

- API版本20+： ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| extensionList | Array&lt;string> | 是 | 要加载的  [打印扩展能力](arkts-printextensionability-c.md#PrintExtensionAbility)列表，列表成员为打印扩展能力的包名，空列表表示加载所有扩展能力。 |
| callback | AsyncCallback&lt;void> | 是 | 异步开始发现打印机之后的回调。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application [since 10 - 19] |

**示例：**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 加载所有打印扩展能力
let extensionList: string[] = [];
// 通过指定自己应用的包名，在发现时加载自己的打印扩展能力
// let extensionList: string[] = ['com.myapplication.test'];
print.startDiscoverPrinter(extensionList, (err: BusinessError) => {
    if (err) {
        console.error('failed to start Discover Printer because : ' + JSON.stringify(err));
    } else {
        console.info('start Discover Printer success');
    }
})

```

## startDiscoverPrinter

```TypeScript
function startDiscoverPrinter(extensionList: Array<string>): Promise<void>
```

通过指定“打印扩展能力列表”来发现打印机，发现的打印机具备包含指定的打印扩展能力。如果指定空的打印扩展能力列表，则表示加载所有扩展能力，使用Promise异步回调。

**起始版本：** 10

**需要权限：** 

- API版本10 - 19： ohos.permission.MANAGE_PRINT_JOB

- API版本20+： ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| extensionList | Array&lt;string> | 是 | 要加载的  [打印扩展能力](arkts-printextensionability-c.md#PrintExtensionAbility)列表，列表成员为打印扩展能力的包名，空列表表示加载所有扩展能力。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application [since 10 - 19] |

**示例：**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 加载所有打印扩展能力
let extensionList: string[] = [];
// 通过指定自己应用的包名，在发现时加载自己的打印扩展能力
// let extensionList: string[] = ['com.myapplication.test'];
print.startDiscoverPrinter(extensionList).then(() => {
    console.info('start Discovery success');
}).catch((error: BusinessError) => {
    console.error('failed to start Discovery because : ' + JSON.stringify(error));
})

```

