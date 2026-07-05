# startArkChildProcess

## startArkChildProcess

```TypeScript
function startArkChildProcess(srcEntry: string, args: ChildProcessArgs, options?: ChildProcessOptions): Promise<int>
```

启动[ArkTS子进程](docroot://application-models/ability-terminology.md#arkts子进程)。使用Promise异步回调。 该接口在Tablet、PC/2in1中可正常调用，在其他设备类型中返回801错误码。 > **说明：** > > 调用该接口创建的子进程不会继承父进程资源，子进程创建成功会返回子进程pid，然后执行子进程的 > [ChildProcess.onStart](arkts-childprocess-c.md#onStart)函数。 > [ChildProcess.onStart](arkts-childprocess-c.md#onStart)函数执行完后子进程不会自动销毁，需要子进程调用 > [process.abort](../../apis-arkts/arkts-apis/arkts-process-abort-f.md#abort-1)销毁。调用该接口的进程销毁后，所创建的子进程也会一并销毁。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| srcEntry | string | Yes | 子进程源文件路径，不支持源文件放在HAR类型的模块中。由“模块名” + “/” + “文件路径”组成，文件路径以src/main为根目录。例如子进程文件在module1模块下src/  main/ets/process/DemoProcess.ets，则srcEntry为"module1/ets/process/DemoProcess.ets"。 另外，需要确保子进程源文件被其它文件引用到，防止被构建工具优  化掉。（详见下方示例代码） |
| args | ChildProcessArgs | Yes | 传递到子进程的参数。 |
| options | ChildProcessOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回子进程pid。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 801 | Capability not supported. |
| 16000050 | Internal error. |
| 16000061 | Operation not supported. |
| 16000062 | The number of child processes exceeds the upper limit. [since 13] |

**Example**

```TypeScript
// Create the child process class DemoProcess.ets in src/main/ets/process of module1.
// module1/src/main/ets/process/DemoProcess.ets
import { ChildProcess, ChildProcessArgs } from '@kit.AbilityKit';

export default class DemoProcess extends ChildProcess {

  onStart(args?: ChildProcessArgs) {
    let entryParams = args?.entryParams;
    let fd = args?.fds?.key1;
    // ..
  }
}


// Call childProcessManager.startArkChildProcess to start the child process.
// module1/src/main/ets/tool/Tool.ets
import { common, ChildProcessArgs, ChildProcessOptions, childProcessManager } from '@kit.AbilityKit';
import { fileIo } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';
import DemoProcess from '../process/DemoProcess';

@Entry
@Component
struct Index {
  build() {
    Row() {
      Column() {
        Text('Click')
          .fontSize(30)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            try {
              DemoProcess.toString(); // Call any API of the DemoProcess class to prevent the code from being directly optimized by the compiler because it is not being referenced.
              let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
              let path = context.filesDir + "/test.txt";
              let file = fileIo.openSync(path, fileIo.OpenMode.READ_ONLY | fileIo.OpenMode.CREATE);
              let args: ChildProcessArgs = {
                entryParams: "testParam",
                fds: {
                  "key1": file.fd
                }
              };
              let options: ChildProcessOptions = {
                isolationMode: false
              };
              childProcessManager.startArkChildProcess("module1/ets/process/DemoProcess.ets", args, options)
                .then((pid) => {
                  console.info(`startChildProcess success, pid: ${pid}`);
                })
                .catch((err: BusinessError) => {
                  console.error(`startChildProcess business error, errorCode: ${err.code}, errorMsg:${err.message}`);
                })
            } catch (err) {
              console.error(`startChildProcess error, errorCode: ${err.code}, errorMsg:${err.message}`);
            }
          });
      }
      .width('100%')
    }
    .height('100%')
  }
}

```

