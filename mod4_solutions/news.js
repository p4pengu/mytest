var names=new Array();
names[0]="Maria";
names[1]="Elena";
names[2]="Mary";
names[3]="Kevin";
names[4]="Jeffrey";
names[5]="franky";
names[6]="Harry";
names[7]="paulina";
names[8]="mario";
names[9]="luigi";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}