curpc = 0;

document.getElementById("cpu").innerHTML = "CPU: Ryzen 5 3600x";
document.getElementById("mobo").innerHTML = "Motherboard: MSI MAG B550 Tomahawk";
document.getElementById("ram").innerHTML = "Memory: Corsair Vengeance LPX 16 GB (2 x 8GB)";
document.getElementById("storage").innerHTML = "Storage: Samsung 970 Evo Plus 1 TB M.2-2280 NVME Solid State Drive";
document.getElementById("gpu").innerHTML = "GPU: EVGA GeForce RTX 3050 8GB XC";
document.getElementById("case").innerHTML = "CASE: NZXT H510";
document.getElementById("psu").innerHTML = "PSU: Corsair CV 550W";
document.getElementById("net").innerHTML = "Total Price: $1000 USD";
document.getElementById("cpulink").href = "https://www.newegg.ca/amd-ryzen-5-3600x/p/N82E16819113568?Description=ryzen%205%203600x&cm_re=ryzen_5%203600x-_-19-113-568-_-Product";
document.getElementById("mobolink").href = "https://www.newegg.ca/msi-mag-b550-tomahawk/p/N82E16813144326?Description=b550%20tomahawk&cm_re=b550_tomahawk-_-13-144-326-_-Product";
document.getElementById("ramlink").href = "https://www.newegg.ca/corsair-32gb-288-pin-ddr4-sdram/p/N82E16820236596?Description=corsair%20vengance&cm_re=corsair_vengance-_-20-236-596-_-Product";
document.getElementById("storagelink").href = "https://www.newegg.ca/samsung-970-evo-plus-1tb/p/N82E16820147743?Description=Samsung%20970%20Evo%20Plus%201%20TB%20M.2-2280%20NVME%20Solid%20State%20Drive&cm_re=Samsung_970%20Evo%20Plus%201%20TB%20M.2-2280%20NVME%20Solid%20State%20Drive-_-20-147-743-_-Product";
document.getElementById("gpulink").href = "https://www.newegg.ca/evga-geforce-rtx-3050-08g-p5-3553-kr/p/N82E16814487555?Description=EVGA%20GeForce%20RTX%203050%208GB%208%20GB%20XC%20GAMING%20Video%20Card&cm_re=EVGA_GeForce%20RTX%203050%208GB%208%20GB%20XC%20GAMING%20Video%20Card-_-14-487-555-_-Product";
document.getElementById("caselink").href = "https://www.newegg.ca/matte-white-black-nzxt-h-series-h510-atx-mid-tower/p/N82E16811146317?Description=NZXT%20H510%20ATX%20Mid%20Tower%20Case&cm_re=NZXT_H510%20ATX%20Mid%20Tower%20Case-_-11-146-317-_-Product";
document.getElementById("psulink").href = "https://www.newegg.ca/corsair-cv-series-cv550-cp-9020210-na-550w/p/N82E16817139250?Description=Corsair%20CV%20550%20W%2080+%20Bronze%20Certified%20ATX%20Power%20Supply&cm_re=Corsair_CV%20550%20W%2080+%20Bronze%20Certified%20ATX%20Power%20Supply-_-17-139-250-_-Product";

function switchPC() {
    if (curpc == 1){
        document.getElementById("cpu").innerHTML = "CPU: Ryzen 5 3600x";
document.getElementById("mobo").innerHTML = "Motherboard: MSI MAG B550 Tomahawk";
document.getElementById("ram").innerHTML = "Memory: Corsair Vengeance LPX 16 GB (2 x 8GB)";
document.getElementById("storage").innerHTML = "Storage: Samsung 970 Evo Plus 1 TB M.2-2280 NVME Solid State Drive";
document.getElementById("gpu").innerHTML = "GPU: EVGA GeForce RTX 3050 8GB XC";
document.getElementById("case").innerHTML = "CASE: NZXT H510";
document.getElementById("psu").innerHTML = "PSU: Corsair CV 550W";
document.getElementById("net").innerHTML = "Total Price: $1000 USD";
document.getElementById("cpulink").href = "https://www.newegg.ca/amd-ryzen-5-3600x/p/N82E16819113568?Description=ryzen%205%203600x&cm_re=ryzen_5%203600x-_-19-113-568-_-Product";
document.getElementById("mobolink").href = "https://www.newegg.ca/msi-mag-b550-tomahawk/p/N82E16813144326?Description=b550%20tomahawk&cm_re=b550_tomahawk-_-13-144-326-_-Product";
document.getElementById("ramlink").href = "https://www.newegg.ca/corsair-32gb-288-pin-ddr4-sdram/p/N82E16820236596?Description=corsair%20vengance&cm_re=corsair_vengance-_-20-236-596-_-Product";
document.getElementById("storagelink").href = "https://www.newegg.ca/samsung-970-evo-plus-1tb/p/N82E16820147743?Description=Samsung%20970%20Evo%20Plus%201%20TB%20M.2-2280%20NVME%20Solid%20State%20Drive&cm_re=Samsung_970%20Evo%20Plus%201%20TB%20M.2-2280%20NVME%20Solid%20State%20Drive-_-20-147-743-_-Product";
document.getElementById("gpulink").href = "https://www.newegg.ca/evga-geforce-rtx-3050-08g-p5-3553-kr/p/N82E16814487555?Description=EVGA%20GeForce%20RTX%203050%208GB%208%20GB%20XC%20GAMING%20Video%20Card&cm_re=EVGA_GeForce%20RTX%203050%208GB%208%20GB%20XC%20GAMING%20Video%20Card-_-14-487-555-_-Product";
document.getElementById("caselink").href = "https://www.newegg.ca/matte-white-black-nzxt-h-series-h510-atx-mid-tower/p/N82E16811146317?Description=NZXT%20H510%20ATX%20Mid%20Tower%20Case&cm_re=NZXT_H510%20ATX%20Mid%20Tower%20Case-_-11-146-317-_-Product";
document.getElementById("psulink").href = "https://www.newegg.ca/corsair-cv-series-cv550-cp-9020210-na-550w/p/N82E16817139250?Description=Corsair%20CV%20550%20W%2080+%20Bronze%20Certified%20ATX%20Power%20Supply&cm_re=Corsair_CV%20550%20W%2080+%20Bronze%20Certified%20ATX%20Power%20Supply-_-17-139-250-_-Product";
curpc = 0
    }
    else {

        document.getElementById("cpu").innerHTML = "CPU: Ryzen 5 3600x";
document.getElementById("mobo").innerHTML = "Motherboard: MSI B450 Tomahawk";
document.getElementById("ram").innerHTML = "Memory: Corsair Vengeance LPX 16 GB (2 x 8GB)";
document.getElementById("storage").innerHTML = "Storage: Crucial P2 SSD";
document.getElementById("gpu").innerHTML = "GPU: Gigabyte GeForce GTX 1660 Ti";
document.getElementById("case").innerHTML = "CASE: Phanteks Eclipse P360A ATX Mid Tower Case";
document.getElementById("psu").innerHTML = "PSU: Corsair CXF 550 W 80+ Bronze";
document.getElementById("net").innerHTML = "Total Price: $750 USD";
document.getElementById("cpulink").href = "https://www.newegg.ca/amd-ryzen-5-3600x/p/N82E16819113568?Description=ryzen%205%203600x&cm_re=ryzen_5%203600x-_-19-113-568-_-Product";
document.getElementById("ramlink").href = "https://www.newegg.ca/corsair-32gb-288-pin-ddr4-sdram/p/N82E16820236596?Description=corsair%20vengance&cm_re=corsair_vengance-_-20-236-596-_-Product";
document.getElementById("mobolink").href = "https://www.newegg.com/msi-b450-tomahawk-max/p/N82E16813144267?Item=N82E16813144267&nm_mc=AFC-RAN-COM&cm_mmc=AFC-RAN-COM&utm_medium=affiliates&utm_source=afc-PCPartPicker&AFFID=2558510&AFFNAME=PCPartPicker&ACRID=1&ASID=https%3a%2f%2fpcpartpicker.com%2f&ranMID=44583&ranEAID=2558510&ranSiteID=8BacdVP0GFs-eIeiLLamar7OxCjtXbQdiw";
document.getElementById("storagelink").href = "https://www.newegg.com/crucial-500gb-p2/p/N82E16820156245?Description=Crucial%20P2%20500%20GB&cm_re=Crucial_P2%20500%20GB-_-20-156-245-_-Product";
document.getElementById("gpulink").href = "https://www.amazon.ca/GIGABYTE-GeForce-192-bit-DisplayPort-Windforce/dp/B07NJPKZQG/ref=sr_1_1?keywords=GIGABYTE+GeForce+GTX+1660+Ti+OC+6G+192-bit+GDDR6+DisplayPort+1.4+HDMI+2.0B+with+Windforce+2X+Cooling+System+Graphic+Cards-+Gv-N166TOC-6GD&linkCode=gs3&qid=1655179032&sr=8-1";
document.getElementById("caselink").href = "https://www.newegg.com/black-phanteks-eclipse-p360a-atx-mid-tower/p/N82E16811854103?Item=N82E16811854103&nm_mc=AFC-RAN-COM&cm_mmc=AFC-RAN-COM&utm_medium=affiliates&utm_source=afc-PCPartPicker&AFFID=2558510&AFFNAME=PCPartPicker&ACRID=1&ASID=https%3a%2f%2fpcpartpicker.com%2f&ranMID=44583&ranEAID=2558510&ranSiteID=8BacdVP0GFs-qgaS2nBhIi6ieviICUHvBw";
document.getElementById("psulink").href = "https://www.newegg.com/corsair-cx550f-rgb-cp-9020216-na-550w/p/N82E16817139265?Item=N82E16817139265&nm_mc=AFC-RAN-COM&cm_mmc=AFC-RAN-COM&utm_medium=affiliates&utm_source=afc-PCPartPicker&AFFID=2558510&AFFNAME=PCPartPicker&ACRID=1&ASID=https%3a%2f%2fpcpartpicker.com%2f&ranMID=44583&ranEAID=2558510&ranSiteID=8BacdVP0GFs-MSEo9FUvsyFTUwNifaOiqA";
curpc = 1
}
}