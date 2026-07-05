# @ohos.print

该模块为基本打印的操作API，提供调用基础打印功能的接口。

**起始版本：** 10

**系统能力：** SystemCapability.Print.PrintFramework

## 导入模块

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [addPrinter](arkts-print-addprinter-f.md#addPrinter-1) | 添加打印机到系统中，使用Promise异步回调。 |
| <!--DelRow-->[addPrinterToCups](arkts-print-addprintertocups-f-sys.md#addPrinterToCups-1) | 添加打印机到cups，使用Promise异步回调。 |
| [addPrinterToDiscovery](arkts-print-addprintertodiscovery-f.md#addPrinterToDiscovery-1) | 添加打印机到系统打印机发现列表，使用Promise异步回调。 |
| <!--DelRow-->[addPrinters](arkts-print-addprinters-f-sys.md#addPrinters-1) | 添加打印机，使用callback异步回调。 |
| <!--DelRow-->[addPrinters](arkts-print-addprinters-f-sys.md#addPrinters-2) | 添加打印机，使用Promise异步回调。 |
| <!--DelRow-->[analyzePrintEvents](arkts-print-analyzeprintevents-f-sys.md#analyzePrintEvents-1) | 分析打印事件。 |
| <!--DelRow-->[authPrintJob](arkts-print-authprintjob-f-sys.md#authPrintJob-1) | 验证打印作业。 |
| <!--DelRow-->[authSmbDeviceAsRegisteredUser](arkts-print-authsmbdeviceasregistereduser-f-sys.md#authSmbDeviceAsRegisteredUser-1) | 以注册用户身份对SMB设备进行身份验证，并获取可用打印机。 |
| <!--DelRow-->[cancelPrintJob](arkts-print-cancelprintjob-f-sys.md#cancelPrintJob-1) | 取消已发送到打印机的打印任务，使用callback异步回调。 |
| <!--DelRow-->[cancelPrintJob](arkts-print-cancelprintjob-f-sys.md#cancelPrintJob-2) | 取消已发送到打印机的打印任务，使用Promise异步回调。 |
| <!--DelRow-->[checkPreferencesConflicts](arkts-print-checkpreferencesconflicts-f-sys.md#checkPreferencesConflicts-1) | 检查首选项冲突。 |
| <!--DelRow-->[connectPrinter](arkts-print-connectprinter-f-sys.md#connectPrinter-1) | 通过打印机ID连接打印机，使用callback异步回调。 |
| <!--DelRow-->[connectPrinter](arkts-print-connectprinter-f-sys.md#connectPrinter-2) | 通过打印机ID连接打印机，使用Promise异步回调。 |
| <!--DelRow-->[connectPrinterByIdAndPpd](arkts-print-connectprinterbyidandppd-f-sys.md#connectPrinterByIdAndPpd-1) | 根据打印机ID查询推荐的打印机驱动程序。 |
| <!--DelRow-->[connectPrinterByIpAndPpd](arkts-print-connectprinterbyipandppd-f-sys.md#connectPrinterByIpAndPpd-1) | 通过打印机IP和ppd连接打印机。 |
| <!--DelRow-->[deletePrinterFromCups](arkts-print-deleteprinterfromcups-f-sys.md#deletePrinterFromCups-1) | 从cups中删除打印机，使用Promise异步回调。 |
| <!--DelRow-->[disconnectPrinter](arkts-print-disconnectprinter-f-sys.md#disconnectPrinter-1) | 断开特定打印机的连接，使用callback异步回调。 |
| <!--DelRow-->[disconnectPrinter](arkts-print-disconnectprinter-f-sys.md#disconnectPrinter-2) | 断开特定打印机的连接，使用Promise异步回调。 |
| <!--DelRow-->[discoverUsbPrinters](arkts-print-discoverusbprinters-f-sys.md#discoverUsbPrinters-1) | 发现usb打印机，使用Promise异步回调。 |
| [getAddedPrinters](arkts-print-getaddedprinters-f.md#getAddedPrinters-1) | 获取系统中已添加的打印机列表，使用Promise异步回调。 |
| <!--DelRow-->[getPrinterDefaultPreferences](arkts-print-getprinterdefaultpreferences-f-sys.md#getPrinterDefaultPreferences-1) | 按打印机ID获取默认首选项。 |
| <!--DelRow-->[getPrinterInfoById](arkts-print-getprinterinfobyid-f-sys.md#getPrinterInfoById-1) | 根据打印机id获取打印机信息，使用Promise异步回调。 |
| [getPrinterInformationById](arkts-print-getprinterinformationbyid-f.md#getPrinterInformationById-1) | 根据打印机id获取打印机信息，使用Promise异步回调。 |
| <!--DelRow-->[getSharedHosts](arkts-print-getsharedhosts-f-sys.md#getSharedHosts-1) | 获取所有可用的共享主机。 |
| <!--DelRow-->[notifyPrintService](arkts-print-notifyprintservice-f-sys.md#notifyPrintService-1) | 将spooler关闭信息通知打印服务，使用callback异步回调。 |
| <!--DelRow-->[notifyPrintService](arkts-print-notifyprintservice-f-sys.md#notifyPrintService-2) | 将spooler关闭信息通知打印服务，使用Promise异步回调。 |
| <!--DelRow-->[notifyPrintServiceEvent](arkts-print-notifyprintserviceevent-f-sys.md#notifyPrintServiceEvent-1) | 将打印应用相关事件通知打印服务，使用Promise异步回调。 |
| <!--DelRow-->[notifyPrintServiceEvent](arkts-print-notifyprintserviceevent-f-sys.md#notifyPrintServiceEvent-2) | 将打印应用相关事件通知打印服务，使用Promise异步回调。 |
| <!--DelRow-->[notifyPrintServiceSpoolerCloseForCancelled](arkts-print-notifyprintservicespoolercloseforcancelled-f-sys.md#notifyPrintServiceSpoolerCloseForCancelled-1) | Notify print service the information. |
| <!--DelRow-->[notifyPrintServiceSpoolerCloseForCancelled](arkts-print-notifyprintservicespoolercloseforcancelled-f-sys.md#notifyPrintServiceSpoolerCloseForCancelled-2) | Notify print service the information. |
| <!--DelRow-->[notifyPrintServiceSpoolerCloseForStarted](arkts-print-notifyprintservicespoolercloseforstarted-f-sys.md#notifyPrintServiceSpoolerCloseForStarted-1) | Notify print service the information. |
| <!--DelRow-->[notifyPrintServiceSpoolerCloseForStarted](arkts-print-notifyprintservicespoolercloseforstarted-f-sys.md#notifyPrintServiceSpoolerCloseForStarted-2) | Notify print service the information. |
| [notifyWatermarkComplete](arkts-print-notifywatermarkcomplete-f.md#notifyWatermarkComplete-1) | 通知水印处理完成。 |
| [off](arkts-print-off-f.md#off-1) | 取消注册打印机变动事件回调，使用callback回调。 |
| <!--DelRow-->[off](arkts-print-off-f-sys.md#off-1) | 取消注册打印机状态变化事件回调，使用callback回调。 |
| <!--DelRow-->[off](arkts-print-off-f-sys.md#off-2) | 取消注册打印任务状态变化事件回调，使用callback回调。 |
| <!--DelRow-->[off](arkts-print-off-f-sys.md#off-3) | 取消注册打印扩展信息变化事件回调，使用callback回调。 |
| <!--DelRow-->[offExtInfoChange](arkts-print-offextinfochange-f-sys.md#offExtInfoChange-1) | Unregister event callback for the information change of print extension. |
| <!--DelRow-->[offJobStateChange](arkts-print-offjobstatechange-f-sys.md#offJobStateChange-1) | Unregister event callback for the state change of print job. |
| [offPrinterChange](arkts-print-offprinterchange-f.md#offPrinterChange-1) | Unregister event callback for the change of printer. |
| <!--DelRow-->[offPrinterInfoQuery](arkts-print-offprinterinfoquery-f-sys.md#offPrinterInfoQuery-1) | 查询到的打印机信息的Unregister事件回调。 |
| <!--DelRow-->[offPrinterStateChange](arkts-print-offprinterstatechange-f-sys.md#offPrinterStateChange-1) | Unregister event callback for the state change of printer. |
| [on](arkts-print-on-f.md#on-1) | 注册打印机变动事件回调，使用callback回调。 |
| <!--DelRow-->[on](arkts-print-on-f-sys.md#on-1) | 注册打印机状态变化事件回调，使用callback回调。 |
| <!--DelRow-->[on](arkts-print-on-f-sys.md#on-2) | 注册打印任务状态变化事件回调，使用callback回调。 |
| <!--DelRow-->[on](arkts-print-on-f-sys.md#on-3) | 注册打印扩展信息变化事件回调，使用callback回调。 |
| <!--DelRow-->[onExtInfoChange](arkts-print-onextinfochange-f-sys.md#onExtInfoChange-1) | Register event callback for the information change of print extension. |
| <!--DelRow-->[onJobStateChange](arkts-print-onjobstatechange-f-sys.md#onJobStateChange-1) | Register event callback for the state change of print job. |
| [onPrinterChange](arkts-print-onprinterchange-f.md#onPrinterChange-1) | Register event callback for the change of printer. |
| <!--DelRow-->[onPrinterInfoQuery](arkts-print-onprinterinfoquery-f-sys.md#onPrinterInfoQuery-1) | 为查询到的打印机信息注册事件回调。 |
| <!--DelRow-->[onPrinterStateChange](arkts-print-onprinterstatechange-f-sys.md#onPrinterStateChange-1) | Register event callback for the state change of printer. |
| [print](arkts-print-f.md#print-1) | 打印接口，传入文件进行打印，使用callback异步回调。拉起系统打印预览界面，需要使用[print]{@link print.print(files: Array<string>, context: Context)}接口，传入 context。 |
| [print](arkts-print-f.md#print-2) | 打印接口，传入文件进行打印，使用Promise异步回调。拉起系统打印预览界面，需要使用[print]{@link print.print(files: Array<string>, context: Context)}接口，传入 context。 |
| [print](arkts-print-f.md#print-3) | 打印接口，传入文件进行打印，使用callback异步回调。 |
| [print](arkts-print-f.md#print-4) | 打印接口，传入文件进行打印，使用Promise异步回调。 |
| [print](arkts-print-f.md#print-5) | 打印接口，传入文件进行打印，三方应用需要更新打印文件，使用Promise异步回调。当前支持的文件类型：".pdf"。 |
| <!--DelRow-->[queryAllActivePrintJobs](arkts-print-queryallactiveprintjobs-f-sys.md#queryAllActivePrintJobs-1) | 查询所有活跃中的打印任务，使用Promise进行异步回调。 |
| <!--DelRow-->[queryAllPrintJobs](arkts-print-queryallprintjobs-f-sys.md#queryAllPrintJobs-1) | 查询所有打印任务，使用callback异步回调。 |
| <!--DelRow-->[queryAllPrintJobs](arkts-print-queryallprintjobs-f-sys.md#queryAllPrintJobs-2) | 查询所有打印任务，使用Promise异步回调。 |
| <!--DelRow-->[queryAllPrinterExtensionInfos](arkts-print-queryallprinterextensioninfos-f-sys.md#queryAllPrinterExtensionInfos-1) | 查询所有已安装的打印机扩展服务，使用callback异步回调。 |
| <!--DelRow-->[queryAllPrinterExtensionInfos](arkts-print-queryallprinterextensioninfos-f-sys.md#queryAllPrinterExtensionInfos-2) | 查询所有已安装的打印机扩展服务，使用Promise异步回调。 |
| <!--DelRow-->[queryAllPrinterPpds](arkts-print-queryallprinterppds-f-sys.md#queryAllPrinterPpds-1) | 查询所有打印机ppd。 |
| <!--DelRow-->[queryPrintJobById](arkts-print-queryprintjobbyid-f-sys.md#queryPrintJobById-1) | 按打印任务ID查询打印任务，使用callback异步回调。 |
| <!--DelRow-->[queryPrintJobById](arkts-print-queryprintjobbyid-f-sys.md#queryPrintJobById-2) | 按打印任务ID查询打印任务，使用Promise异步回调。 |
| <!--DelRow-->[queryPrintJobList](arkts-print-queryprintjoblist-f-sys.md#queryPrintJobList-1) | 查询所有打印任务，使用callback异步回调。 |
| <!--DelRow-->[queryPrintJobList](arkts-print-queryprintjoblist-f-sys.md#queryPrintJobList-2) | 查询所有打印任务，使用Promise异步回调。 |
| <!--DelRow-->[queryPrinterCapability](arkts-print-queryprintercapability-f-sys.md#queryPrinterCapability-1) | 查询打印机能力，使用callback异步回调。 |
| <!--DelRow-->[queryPrinterCapability](arkts-print-queryprintercapability-f-sys.md#queryPrinterCapability-2) | 查询打印机能力，使用Promise异步回调。 |
| <!--DelRow-->[queryPrinterCapabilityByUri](arkts-print-queryprintercapabilitybyuri-f-sys.md#queryPrinterCapabilityByUri-1) | 使用打印机的uri查询打印机能力，使用Promise异步回调。 |
| <!--DelRow-->[queryPrinterInfoByIp](arkts-print-queryprinterinfobyip-f-sys.md#queryPrinterInfoByIp-1) | 根据ip查询打印机信息。 |
| <!--DelRow-->[queryRecommendDriversById](arkts-print-queryrecommenddriversbyid-f-sys.md#queryRecommendDriversById-1) | 根据打印机ID查询推荐的打印机驱动程序。 |
| [registerWatermarkCallback](arkts-print-registerwatermarkcallback-f.md#registerWatermarkCallback-1) | 注册强制水印处理的监听事件。 |
| [removePrinterFromDiscovery](arkts-print-removeprinterfromdiscovery-f.md#removePrinterFromDiscovery-1) | 从系统打印机发现列表里移除打印机，使用Promise异步回调。 |
| <!--DelRow-->[removePrinters](arkts-print-removeprinters-f-sys.md#removePrinters-1) | 移除打印机，使用callback异步回调。 |
| <!--DelRow-->[removePrinters](arkts-print-removeprinters-f-sys.md#removePrinters-2) | 移除打印机，使用Promise异步回调。 |
| <!--DelRow-->[requestPrintPreview](arkts-print-requestprintpreview-f-sys.md#requestPrintPreview-1) | 请求预览打印数据，使用callback回调。 |
| <!--DelRow-->[requestPrintPreview](arkts-print-requestprintpreview-f-sys.md#requestPrintPreview-2) | 请求预览打印数据，使用Promise异步回调。 |
| <!--DelRow-->[restartPrintJob](arkts-print-restartprintjob-f-sys.md#restartPrintJob-1) | 重新打印之前打印过的打印任务，使用Promise异步回调。 |
| <!--DelRow-->[savePdfFileJob](arkts-print-savepdffilejob-f-sys.md#savePdfFileJob-1) | 保存打印作业的pdf文件。 |
| <!--DelRow-->[setDefaultPrinter](arkts-print-setdefaultprinter-f-sys.md#setDefaultPrinter-1) | 设置默认打印机，使用Promise异步回调。 |
| <!--DelRow-->[setPrinterPreferences](arkts-print-setprinterpreferences-f-sys.md#setPrinterPreferences-1) | 设置打印机首选项，使用Promise异步回调。 |
| <!--DelRow-->[startDiscoverPrinter](arkts-print-startdiscoverprinter-f-sys.md#startDiscoverPrinter-1) | 通过指定“打印扩展能力列表”来发现打印机，发现的打印机具备包含指定的打印扩展能力。如果指定空的打印扩展能力列表，则表示加载所有扩展能力。使用callback异步回调。 |
| <!--DelRow-->[startDiscoverPrinter](arkts-print-startdiscoverprinter-f-sys.md#startDiscoverPrinter-2) | 通过指定“打印扩展能力列表”来发现打印机，发现的打印机具备包含指定的打印扩展能力。如果指定空的打印扩展能力列表，则表示加载所有扩展能力，使用Promise异步回调。 |
| <!--DelRow-->[startGettingPrintFile](arkts-print-startgettingprintfile-f-sys.md#startGettingPrintFile-1) | 开始获取打印文件，使用Callback异步回调。 |
| [startPrint](arkts-print-startprint-f.md#startPrint-1) | 打印接口，传入文件或者二进制数据进行打印，使用Promise异步回调。 |
| <!--DelRow-->[startPrintJob](arkts-print-startprintjob-f-sys.md#startPrintJob-1) | 开始打印任务，使用callback异步回调。 |
| <!--DelRow-->[startPrintJob](arkts-print-startprintjob-f-sys.md#startPrintJob-2) | 开始打印任务，使用Promise异步回调。 |
| <!--DelRow-->[stopDiscoverPrinter](arkts-print-stopdiscoverprinter-f-sys.md#stopDiscoverPrinter-1) | 停止发现打印机，使用callback异步回调。 |
| <!--DelRow-->[stopDiscoverPrinter](arkts-print-stopdiscoverprinter-f-sys.md#stopDiscoverPrinter-2) | 停止发现打印机，使用Promise异步回调。 |
| [unregisterWatermarkCallback](arkts-print-unregisterwatermarkcallback-f.md#unregisterWatermarkCallback-1) | 注销强制水印处理的监听事件。 |
| <!--DelRow-->[updateExtensionInfo](arkts-print-updateextensioninfo-f-sys.md#updateExtensionInfo-1) | 更新打印扩展状态，使用callback异步回调。 |
| <!--DelRow-->[updateExtensionInfo](arkts-print-updateextensioninfo-f-sys.md#updateExtensionInfo-2) | 更新打印扩展状态，使用Promise异步回调。 |
| <!--DelRow-->[updatePrintJobState](arkts-print-updateprintjobstate-f-sys.md#updatePrintJobState-1) | 更新打印任务状态，使用callback异步回调。 |
| <!--DelRow-->[updatePrintJobState](arkts-print-updateprintjobstate-f-sys.md#updatePrintJobState-2) | 更新打印任务状态，使用Promise异步回调。 |
| [updatePrinterInDiscovery](arkts-print-updateprinterindiscovery-f.md#updatePrinterInDiscovery-1) | 更新打印机能力到系统打印机发现列表，使用Promise异步回调。 |
| <!--DelRow-->[updatePrinterInformation](arkts-print-updateprinterinformation-f-sys.md#updatePrinterInformation-1) | 更新系统中打印机的部分信息，使用Promise异步回调。当前仅允许更新[PrinterInformation]{@link print.PrinterInformation}的alias和options字段。 |
| <!--DelRow-->[updatePrinterState](arkts-print-updateprinterstate-f-sys.md#updatePrinterState-1) | 更新打印机状态，使用callback异步回调。 |
| <!--DelRow-->[updatePrinterState](arkts-print-updateprinterstate-f-sys.md#updatePrinterState-2) | 更新打印机状态，使用Promise异步回调。 |
| <!--DelRow-->[updatePrinters](arkts-print-updateprinters-f-sys.md#updatePrinters-1) | 更新特定打印机的信息，使用callback异步回调。 |
| <!--DelRow-->[updatePrinters](arkts-print-updateprinters-f-sys.md#updatePrinters-2) | 更新特定打印机的信息，使用Promise异步回调。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [PpdInfo](arkts-print-ppdinfo-i.md) | 定义打印机所使用驱动的PPD文件信息的接口。 |
| <!--DelRow-->[PreviewAttribute](arkts-print-previewattribute-i-sys.md) | 定义打印预览属性的接口。 |
| [PrintAttributes](arkts-print-printattributes-i.md) | 定义打印参数的接口。 |
| [PrintDocumentAdapter](arkts-print-printdocumentadapter-i.md) | 第三方应用程序实现此接口来渲染要打印的文件。 |
| [PrinterCapabilities](arkts-print-printercapabilities-i.md) | 定义打印机能力的接口。 |
| <!--DelRow-->[PrinterCapability](arkts-print-printercapability-i-sys.md) | 定义打印能力的接口。 |
| <!--DelRow-->[PrinterExtensionInfo](arkts-print-printerextensioninfo-i-sys.md) | 定义打印扩展信息的接口。 |
| <!--DelRow-->[PrinterInfo](arkts-print-printerinfo-i-sys.md) | 定义打印信息的接口。 |
| [PrinterInformation](arkts-print-printerinformation-i.md) | 定义打印机信息的接口。 |
| [PrinterPreferences](arkts-print-printerpreferences-i.md) | 定义打印机首选项的接口。 |
| <!--DelRow-->[PrinterRange](arkts-print-printerrange-i-sys.md) | 定义打印范围的接口。 |
| <!--DelRow-->[PrintJob](arkts-print-printjob-i-sys.md) | 定义打印任务的接口。 |
| [PrintJobData](arkts-print-printjobdata-i.md) | 定义打印任务的接口。 |
| <!--DelRow-->[PrintMargin](arkts-print-printmargin-i-sys.md) | 定义打印页边距的接口。 |
| [PrintPageRange](arkts-print-printpagerange-i.md) | 定义打印范围的接口。 |
| [PrintPageSize](arkts-print-printpagesize-i.md) | 定义打印页面尺寸的接口。 |
| <!--DelRow-->[PrintResolution](arkts-print-printresolution-i-sys.md) | 定义打印分辨率的接口。 |
| [PrintTask](arkts-print-printtask-i.md) | 打印任务完成后的事件监听回调接口类。 |
| [SharedHost](arkts-print-sharedhost-i.md) | 定义共享设备信息的接口。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[ExtInfoChangeCallback](arkts-print-extinfochangecallback-t-sys.md) | Defines the callback type used in registering to listen for extension change. The value of extensionId indicates the print extension id. The value of info indicates the connect info. |
| [PrinterChangeCallback](arkts-print-printerchangecallback-t.md) | 将打印机事件和打印机信息作为参数的回调方法。 |
| <!--DelRow-->[PrinterInfoQueryCallback](arkts-print-printerinfoquerycallback-t-sys.md) | 定义注册监听printInfoQuery事件的回调类型。 printInfo的值表示打印机信息。 ppdInfo的值表示所有打印机的ppd信息。 |
| <!--DelRow-->[PrinterStateChangeCallback](arkts-print-printerstatechangecallback-t-sys.md) | Defines the callback type used in registering to listen for PrinterState. The value of state indicates the state of printer. The value of info indicates the latest printer info. |
| <!--DelRow-->[PrintJobStateChangeCallback](arkts-print-printjobstatechangecallback-t-sys.md) | Defines the callback type used in registering to listen for PrintJobState. The value of state indicates the state of print job. The value of job indicates the latest print job info. |
| [WatermarkCallback](arkts-print-watermarkcallback-t.md) | 定义用来注册强制水印处理的监听事件时使用的回调类型。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [ApplicationEvent](arkts-print-applicationevent-e.md) | 打印应用事件的枚举。 |
| [DefaultPrinterType](arkts-print-defaultprintertype-e.md) | 默认打印类型的枚举。 |
| [DocFlavor](arkts-print-docflavor-e.md) | 打印数据来源形式的枚举。 |
| [PrintColorMode](arkts-print-printcolormode-e.md) | 打印色彩模式的枚举。 |
| [PrintDirectionMode](arkts-print-printdirectionmode-e.md) | 打印纸张方向的枚举。 |
| [PrintDocumentAdapterState](arkts-print-printdocumentadapterstate-e.md) | 打印任务状态的枚举。 |
| [PrintDocumentFormat](arkts-print-printdocumentformat-e.md) | 打印数据格式的枚举。 |
| [PrintDuplexMode](arkts-print-printduplexmode-e.md) | 打印单双面模式的枚举。 |
| [PrinterEvent](arkts-print-printerevent-e.md) | 打印机相关事件的枚举。 |
| [PrintErrorCode](arkts-print-printerrorcode-e.md) | 打印错误代码的枚举。 |
| [PrinterState](arkts-print-printerstate-e.md) | 打印机状态的枚举。 |
| [PrinterStatus](arkts-print-printerstatus-e.md) | 打印机状态的枚举。 |
| [PrintFileCreationState](arkts-print-printfilecreationstate-e.md) | 打印文件创建状态的枚举。 |
| [PrintJobState](arkts-print-printjobstate-e.md) | 打印任务状态的枚举。 |
| [PrintJobSubState](arkts-print-printjobsubstate-e.md) | 打印任务子状态的枚举。 |
| [PrintOrientationMode](arkts-print-printorientationmode-e.md) | 打印方向的枚举。 |
| [PrintPageType](arkts-print-printpagetype-e.md) | 打印纸张类型的枚举。 |
| [PrintQuality](arkts-print-printquality-e.md) | 打印质量的枚举。 |
| [WatermarkHandleResult](arkts-print-watermarkhandleresult-e.md) | 强制水印处理结果的枚举。 |

