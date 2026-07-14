# @ohos.print

The **print** module provides APIs for basic print operations.

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addPrinter](arkts-basicservices-addprinter-f.md#addprinter-1) | Add a printer to system. |
| [addPrinterToDiscovery](arkts-basicservices-addprintertodiscovery-f.md#addprintertodiscovery-1) | Adds a printer to the printer discovery list. This API uses a promise to return the result. |
| [getAddedPrinters](arkts-basicservices-getaddedprinters-f.md#getaddedprinters-1) | Obtains the list of printers added to the system. This API uses a promise to return the result. |
| [getPrinterInformationById](arkts-basicservices-getprinterinformationbyid-f.md#getprinterinformationbyid-1) | Obtains printer information based on the printer ID. This API uses a promise to return the result. |
| [notifyWatermarkComplete](arkts-basicservices-notifywatermarkcomplete-f.md#notifywatermarkcomplete-1) | Notify watermark complete. |
| [off](arkts-basicservices-off-f.md#off-4) | Unregisters the listener for printer state change events. This API uses a callback to return the result. |
| [on](arkts-basicservices-on-f.md#on-4) | Registers a listener for the printer change events. This API uses a callback to return the result. |
| [print](arkts-basicservices-print-f.md#print-1) | Prints files. This API uses an asynchronous callback to return the result. To start the system print preview page, call the [print](arkts-basicservices-print-f.md#print-4) API and pass in context. |
| [print](arkts-basicservices-print-f.md#print-2) | Prints files. This API uses a promise to return the result. To start the system print preview page, call the [print](arkts-basicservices-print-f.md#print-4) API and pass in context. |
| [print](arkts-basicservices-print-f.md#print-3) | Prints files. This API uses an asynchronous callback to return the result. |
| [print](arkts-basicservices-print-f.md#print-4) | Prints files. This API uses a promise to return the result. |
| [print](arkts-basicservices-print-f.md#print-5) | Prints a file. This API uses a promise to return the result. |
| [registerWatermarkCallback](arkts-basicservices-registerwatermarkcallback-f.md#registerwatermarkcallback-1) | Register to listen for watermark handling. |
| [removePrinterFromDiscovery](arkts-basicservices-removeprinterfromdiscovery-f.md#removeprinterfromdiscovery-1) | Removes a printer from the printer discovery list. This API uses a promise to return the result. |
| [startPrint](arkts-basicservices-startprint-f.md#startprint-1) | Prints a file or binary data. This API uses a promise to return the result. |
| [unregisterWatermarkCallback](arkts-basicservices-unregisterwatermarkcallback-f.md#unregisterwatermarkcallback-1) | Unregister to listen for watermark handling. |
| [updatePrinterInDiscovery](arkts-basicservices-updateprinterindiscovery-f.md#updateprinterindiscovery-1) | Updates the printer capabilities to the printer discovery list. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addPrinterToCups](arkts-basicservices-addprintertocups-f-sys.md#addprintertocups-1) | Add a printer to cups. |
| [addPrinters](arkts-basicservices-addprinters-f-sys.md#addprinters-1) | Adds printers. This API uses an asynchronous callback to return the result. |
| [addPrinters](arkts-basicservices-addprinters-f-sys.md#addprinters-2) | Adds printers. This API uses a promise to return the result. |
| [analyzePrintEvents](arkts-basicservices-analyzeprintevents-f-sys.md#analyzeprintevents-1) | Analyze print events. |
| [authPrintJob](arkts-basicservices-authprintjob-f-sys.md#authprintjob-1) | Authenticate a print job. |
| [authSmbDeviceAsRegisteredUser](arkts-basicservices-authsmbdeviceasregistereduser-f-sys.md#authsmbdeviceasregistereduser-1) | Authenticate SMB device as registered user and get available printers. |
| [cancelPrintJob](arkts-basicservices-cancelprintjob-f-sys.md#cancelprintjob-1) | Cancels the specified print job, which is on the print queue of the printer. This API uses an asynchronous callback to return the result. |
| [cancelPrintJob](arkts-basicservices-cancelprintjob-f-sys.md#cancelprintjob-2) | Cancels the specified print job, which is on the print queue of the printer. This API uses a promise to return the result. |
| [checkPreferencesConflicts](arkts-basicservices-checkpreferencesconflicts-f-sys.md#checkpreferencesconflicts-1) | Check preferences conflicts. |
| [connectPrinter](arkts-basicservices-connectprinter-f-sys.md#connectprinter-1) | Connects to a printer by printer ID. This API uses an asynchronous callback to return the result. |
| [connectPrinter](arkts-basicservices-connectprinter-f-sys.md#connectprinter-2) | Connects to a printer by printer ID. This API uses a promise to return the result. |
| [connectPrinterByIdAndPpd](arkts-basicservices-connectprinterbyidandppd-f-sys.md#connectprinterbyidandppd-1) | Query recommend printer drivers by printer ID. |
| [connectPrinterByIpAndPpd](arkts-basicservices-connectprinterbyipandppd-f-sys.md#connectprinterbyipandppd-1) | Connect a printer by the printer IP and ppd. |
| [deletePrinterFromCups](arkts-basicservices-deleteprinterfromcups-f-sys.md#deleteprinterfromcups-1) | Delete a printer from cups. |
| [disconnectPrinter](arkts-basicservices-disconnectprinter-f-sys.md#disconnectprinter-1) | Disconnects from the specified printer. This API uses an asynchronous callback to return the result. |
| [disconnectPrinter](arkts-basicservices-disconnectprinter-f-sys.md#disconnectprinter-2) | Disconnects from the specified printer. This API uses a promise to return the result. |
| [discoverUsbPrinters](arkts-basicservices-discoverusbprinters-f-sys.md#discoverusbprinters-1) | Discovers USB printers. This API uses a promise to return the result. |
| [getPrinterDefaultPreferences](arkts-basicservices-getprinterdefaultpreferences-f-sys.md#getprinterdefaultpreferences-1) | Get default preferences by printer ID. |
| [getPrinterInfoById](arkts-basicservices-getprinterinfobyid-f-sys.md#getprinterinfobyid-1) | Obtains printer information based on the printer ID. This API uses a promise to return the result. |
| [getSharedHosts](arkts-basicservices-getsharedhosts-f-sys.md#getsharedhosts-1) | Get all available shared hosts. |
| [notifyPrintService](arkts-basicservices-notifyprintservice-f-sys.md#notifyprintservice-1) | Notifies the print service of the spooler shutdown information. This API uses an asynchronous callback to return the result. |
| [notifyPrintService](arkts-basicservices-notifyprintservice-f-sys.md#notifyprintservice-2) | Notifies the print service of the spooler shutdown information. This API uses a promise to return the result. |
| [notifyPrintServiceEvent](arkts-basicservices-notifyprintserviceevent-f-sys.md#notifyprintserviceevent-1) | Notifies the print service of the print application events. This API uses a promise to return the result. |
| [notifyPrintServiceEvent](arkts-basicservices-notifyprintserviceevent-f-sys.md#notifyprintserviceevent-2) | Notifies the print service of the print application events. This API uses a promise to return the result. |
| [off](arkts-basicservices-off-f-sys.md#off-1) | Unregisters the listener for printer state change events. This API uses a callback to return the result. |
| [off](arkts-basicservices-off-f-sys.md#off-2) | Unregisters the listener for print job state change events. This API uses a callback to return the result. |
| [off](arkts-basicservices-off-f-sys.md#off-3) | Unregisters the listener for printer extension information change events. This API uses a callback to return the result. |
| [offPrinterInfoQuery](arkts-basicservices-offprinterinfoquery-f-sys.md#offprinterinfoquery-1) | Unregister event callback for the printer info queried. |
| [on](arkts-basicservices-on-f-sys.md#on-1) | Registers a listener for printer state change events. This API uses a callback to return the result. |
| [on](arkts-basicservices-on-f-sys.md#on-2) | Registers a listener for print job state change events. This API uses a callback to return the result. |
| [on](arkts-basicservices-on-f-sys.md#on-3) | Registers a listener for printer extension information change events. This API uses a callback to return the result. |
| [onPrinterInfoQuery](arkts-basicservices-onprinterinfoquery-f-sys.md#onprinterinfoquery-1) | Register event callback for the printer info queried. |
| [queryAllActivePrintJobs](arkts-basicservices-queryallactiveprintjobs-f-sys.md#queryallactiveprintjobs-1) | Queries all active print jobs. This API uses a promise to return the result. |
| [queryAllPrintJobs](arkts-basicservices-queryallprintjobs-f-sys.md#queryallprintjobs-1) | Queries all print jobs. This API uses an asynchronous callback to return the result. |
| [queryAllPrintJobs](arkts-basicservices-queryallprintjobs-f-sys.md#queryallprintjobs-2) | Queries all print jobs. This API uses a promise to return the result. |
| [queryAllPrinterExtensionInfos](arkts-basicservices-queryallprinterextensioninfos-f-sys.md#queryallprinterextensioninfos-1) | Obtains the information of all installed printer extensions. This API uses an asynchronous callback to return the result. |
| [queryAllPrinterExtensionInfos](arkts-basicservices-queryallprinterextensioninfos-f-sys.md#queryallprinterextensioninfos-2) | Obtains the information of all installed printer extensions. This API uses a promise to return the result. |
| [queryAllPrinterPpds](arkts-basicservices-queryallprinterppds-f-sys.md#queryallprinterppds-1) | Query all printer ppds. |
| [queryPrintJobById](arkts-basicservices-queryprintjobbyid-f-sys.md#queryprintjobbyid-1) | Queries a print job by ID. This API uses an asynchronous callback to return the result. |
| [queryPrintJobById](arkts-basicservices-queryprintjobbyid-f-sys.md#queryprintjobbyid-2) | Queries a print job by ID. This API uses a promise to return the result. |
| [queryPrintJobList](arkts-basicservices-queryprintjoblist-f-sys.md#queryprintjoblist-1) | Queries all print jobs. This API uses an asynchronous callback to return the result. |
| [queryPrintJobList](arkts-basicservices-queryprintjoblist-f-sys.md#queryprintjoblist-2) | Queries all print jobs. This API uses a promise to return the result. |
| [queryPrinterCapability](arkts-basicservices-queryprintercapability-f-sys.md#queryprintercapability-1) | Queries the printer capability. This API uses an asynchronous callback to return the result. |
| [queryPrinterCapability](arkts-basicservices-queryprintercapability-f-sys.md#queryprintercapability-2) | Queries the printer capability. This API uses a promise to return the result. |
| [queryPrinterCapabilityByUri](arkts-basicservices-queryprintercapabilitybyuri-f-sys.md#queryprintercapabilitybyuri-1) | Query printer capabilityies by printer uri. |
| [queryPrinterInfoByIp](arkts-basicservices-queryprinterinfobyip-f-sys.md#queryprinterinfobyip-1) | Query printer info by ip. |
| [queryRecommendDriversById](arkts-basicservices-queryrecommenddriversbyid-f-sys.md#queryrecommenddriversbyid-1) | Query recommend printer drivers by printer ID. |
| [removePrinters](arkts-basicservices-removeprinters-f-sys.md#removeprinters-1) | Removes printers. This API uses an asynchronous callback to return the result. |
| [removePrinters](arkts-basicservices-removeprinters-f-sys.md#removeprinters-2) | Removes printers. This API uses a promise to return the result. |
| [requestPrintPreview](arkts-basicservices-requestprintpreview-f-sys.md#requestprintpreview-1) | Requests print preview data. This API uses a callback to return the result. |
| [requestPrintPreview](arkts-basicservices-requestprintpreview-f-sys.md#requestprintpreview-2) | Requests print preview data. This API uses a promise to return the result. |
| [restartPrintJob](arkts-basicservices-restartprintjob-f-sys.md#restartprintjob-1) | Restarts a print job that has been finished before. This API uses a promise to return the result. |
| [savePdfFileJob](arkts-basicservices-savepdffilejob-f-sys.md#savepdffilejob-1) | Save the pdf file for a print job. |
| [setDefaultPrinter](arkts-basicservices-setdefaultprinter-f-sys.md#setdefaultprinter-1) | Sets the default printer. This API uses a promise to return the result. |
| [setPrinterPreferences](arkts-basicservices-setprinterpreferences-f-sys.md#setprinterpreferences-1) | Sets the printer preferences. This API uses a promise to return the result. |
| [startDiscoverPrinter](arkts-basicservices-startdiscoverprinter-f-sys.md#startdiscoverprinter-1) | Discovers printers by specifying the extension list. The discovered printers contain the specified print extension abilities. If an empty extension list is specified, all extension abilities are loaded. This API uses an asynchronous callback to return the result. |
| [startDiscoverPrinter](arkts-basicservices-startdiscoverprinter-f-sys.md#startdiscoverprinter-2) | Discovers printers by specifying the extension list. The discovered printers contain the specified print extension abilities. If an empty extension list is specified, all extension abilities are loaded. This API uses a promise to return the result. |
| [startGettingPrintFile](arkts-basicservices-startgettingprintfile-f-sys.md#startgettingprintfile-1) | Starts to obtain the print file. This API uses an asynchronous callback to return the result. |
| [startPrintJob](arkts-basicservices-startprintjob-f-sys.md#startprintjob-1) | Starts the specified print job. This API uses an asynchronous callback to return the result. |
| [startPrintJob](arkts-basicservices-startprintjob-f-sys.md#startprintjob-2) | Starts the specified print job. This API uses a promise to return the result. |
| [stopDiscoverPrinter](arkts-basicservices-stopdiscoverprinter-f-sys.md#stopdiscoverprinter-1) | Stops discovering printers. This API uses an asynchronous callback to return the result. |
| [stopDiscoverPrinter](arkts-basicservices-stopdiscoverprinter-f-sys.md#stopdiscoverprinter-2) | Stops discovering printers. This API uses a promise to return the result. |
| [updateExtensionInfo](arkts-basicservices-updateextensioninfo-f-sys.md#updateextensioninfo-1) | Updates the printer extension information. This API uses an asynchronous callback to return the result. |
| [updateExtensionInfo](arkts-basicservices-updateextensioninfo-f-sys.md#updateextensioninfo-2) | Updates the printer extension information. This API uses a promise to return the result. |
| [updatePrintJobState](arkts-basicservices-updateprintjobstate-f-sys.md#updateprintjobstate-1) | Updates the print job state. This API uses an asynchronous callback to return the result. |
| [updatePrintJobState](arkts-basicservices-updateprintjobstate-f-sys.md#updateprintjobstate-2) | Updates the print job state. This API uses a promise to return the result. |
| [updatePrinterInformation](arkts-basicservices-updateprinterinformation-f-sys.md#updateprinterinformation-1) | Updates the information of a printer in the system. This API uses a promise to return the result. Currently, only the **alias** and **options** fields of [PrinterInformation](arkts-basicservices-printerinformation-i.md) can be updated. |
| [updatePrinterState](arkts-basicservices-updateprinterstate-f-sys.md#updateprinterstate-1) | Updates the printer state. This API uses an asynchronous callback to return the result. |
| [updatePrinterState](arkts-basicservices-updateprinterstate-f-sys.md#updateprinterstate-2) | Updates the printer state. This API uses a promise to return the result. |
| [updatePrinters](arkts-basicservices-updateprinters-f-sys.md#updateprinters-1) | Updates information about the specified printers. This API uses an asynchronous callback to return the result. |
| [updatePrinters](arkts-basicservices-updateprinters-f-sys.md#updateprinters-2) | Updates information about the specified printers. This API uses a promise to return the result. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [PpdInfo](arkts-basicservices-ppdinfo-i.md) | defines ppd info. |
| [PrintAttributes](arkts-basicservices-printattributes-i.md) | Defines the print attributes. |
| [PrintDocumentAdapter](arkts-basicservices-printdocumentadapter-i.md) | Provides information about the document to print. This API must be implemented by a third-party application. |
| [PrintJob](arkts-basicservices-printjob-i.md) | Defines a print job. |
| [PrintJobData](arkts-basicservices-printjobdata-i.md) | Defines a print job. |
| [PrintPageRange](arkts-basicservices-printpagerange-i.md) | Defines the print range. |
| [PrintPageSize](arkts-basicservices-printpagesize-i.md) | Defines the size of the printed page. |
| [PrintTask](arkts-basicservices-printtask-i.md) | Implements event listeners for print jobs. |
| [PrinterCapabilities](arkts-basicservices-printercapabilities-i.md) | Defines the printer capabilities. |
| [PrinterInformation](arkts-basicservices-printerinformation-i.md) | Defines the printer information. |
| [PrinterPreferences](arkts-basicservices-printerpreferences-i.md) | Defines the printer preferences. |
| [SharedHost](arkts-basicservices-sharedhost-i.md) | Interface defining shared device information |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [PreviewAttribute](arkts-basicservices-previewattribute-i-sys.md) | Defines the print preview attributes. |
| [PrintJob](arkts-basicservices-printjob-i-sys.md) | Defines a print job. |
| [PrintMargin](arkts-basicservices-printmargin-i-sys.md) | Defines the page margins for printing. |
| [PrintResolution](arkts-basicservices-printresolution-i-sys.md) | Defines the resolution for printing. |
| [PrinterCapability](arkts-basicservices-printercapability-i-sys.md) | Defines the printer capabilities. |
| [PrinterExtensionInfo](arkts-basicservices-printerextensioninfo-i-sys.md) | Provides the printer extension information. |
| [PrinterInfo](arkts-basicservices-printerinfo-i-sys.md) | Provides the printer information. |
| [PrinterRange](arkts-basicservices-printerrange-i-sys.md) | Defines the print range. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [ApplicationEvent](arkts-basicservices-applicationevent-e.md) | Enumerates print application events. |
| [DefaultPrinterType](arkts-basicservices-defaultprintertype-e.md) | Enumerates default printer types. |
| [DocFlavor](arkts-basicservices-docflavor-e.md) | Enumerates the data source types for printing. |
| [PrintColorMode](arkts-basicservices-printcolormode-e.md) | Enumerates the color modes. |
| [PrintDirectionMode](arkts-basicservices-printdirectionmode-e.md) | Enumerates the print direction modes. |
| [PrintDocumentAdapterState](arkts-basicservices-printdocumentadapterstate-e.md) | Enumerates the print job states. |
| [PrintDocumentFormat](arkts-basicservices-printdocumentformat-e.md) | Enumerates the data formats. |
| [PrintDuplexMode](arkts-basicservices-printduplexmode-e.md) | Enumerates the duplex modes. |
| [PrintErrorCode](arkts-basicservices-printerrorcode-e.md) | Enumerates the print error codes. |
| [PrintFileCreationState](arkts-basicservices-printfilecreationstate-e.md) | Enumerates the print file creation status. |
| [PrintJobState](arkts-basicservices-printjobstate-e.md) | Enumerates the print job states. |
| [PrintJobSubState](arkts-basicservices-printjobsubstate-e.md) | Enumerates the print job substates. |
| [PrintOrientationMode](arkts-basicservices-printorientationmode-e.md) | Enumerates the print directions. |
| [PrintPageType](arkts-basicservices-printpagetype-e.md) | Enumerates the print page types. |
| [PrintQuality](arkts-basicservices-printquality-e.md) | Enumerates the print qualities. |
| [PrinterEvent](arkts-basicservices-printerevent-e.md) | Enumerates printer-related events. |
| [PrinterState](arkts-basicservices-printerstate-e.md) | Enumerates the printer states. |
| [PrinterStatus](arkts-basicservices-printerstatus-e.md) | Enumerates the printer states. |
| [WatermarkHandleResult](arkts-basicservices-watermarkhandleresult-e.md) | Watermark handling result. |

### Types

| Name | Description |
| --- | --- |
| [PrinterChangeCallback](arkts-basicservices-printerchangecallback-t.md) | Defines a callback that takes the printer event and printer information as parameters. |
| [WatermarkCallback](arkts-basicservices-watermarkcallback-t.md) | Defines the callback type used in registering to listen for watermark handling. The value of jobId indicates the print job ID. The value of fd indicates the fd. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [PrinterInfoQueryCallback](arkts-basicservices-printerinfoquerycallback-t-sys.md) | Defines the callback type used in registering to listen for printerInfoQuery event. The value of printerInfo indicates the printer info. The value of ppdInfo indicates all the printer ppd info. |
<!--DelEnd-->

