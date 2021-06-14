var editFlag = false;

function verifyFileInput()
{
	var tbf;
	var sExt;
	var dotOK = false;
	if (editFlag) {
		if (document.getElementById("tbfMissionFile").value.length == 0 &&
			document.getElementById("tbfReadmeFile").value.length == 0 &&
			document.getElementById("tbfSSFile").value.length == 0) {
			alert("Nebyl zad�n ��dn� soubor, kter� m� b�t zm�n�n.\n\nP�ed odesl�n�m mus� zadat alespo� jeden soubor, kter� chce� zm�nit.");
			document.getElementById("tbfMissionFile").focus();
			return false;
		};
	};
	//Mission file check
	tbf = document.getElementById("tbfMissionFile");
	if (tbf.value.length > 2) {
		sExt = tbf.value.substr(tbf.value.length - 3, 3).toUpperCase();
		if (tbf.value.charAt(tbf.value.length - 4) === "."){dotOK = true};
	};
	if (!editFlag && tbf.value.length < 6) {
		alert("Mus� zadat platn� n�zev souboru mise (*.ZIP) v�etn� �pln� cesty.");
		tbf.focus();
		return false;
	};
	if (tbf.value.length > 0 && (sExt != "ZIP" || !dotOK)) {
		alert("Pro soubor mise/kampan�\nje povolen pouze form�t typu *.ZIP");
		tbf.focus();
		return false;
	};

	//Readme file check
	dotOK = false;
	tbf = document.getElementById("tbfReadmeFile");
	if (tbf.value.length > 2) {
		sExt = tbf.value.substr(tbf.value.length - 3, 3).toUpperCase();
		if (tbf.value.charAt(tbf.value.length - 4) === "."){dotOK = true};
	};
	if (!editFlag && tbf.value.length < 6) {
		alert("Mus� zadat platn� n�zev souboru \"Readme\" v�etn� �pln� cesty.");
		tbf.focus();
		return false;
	};
	if (tbf.value.length > 0) {
		if (sExt != "TXT" && sExt != "HTM" || !dotOK) {
			if (tbf.value.length > 3) {
				sExt = tbf.value.substr(tbf.value.length - 4, 4).toUpperCase();
				if (tbf.value.charAt(tbf.value.length - 5) === "."){dotOK = true};
			};
			if (sExt != "HTML" || !dotOK) {
				alert("Pro soubory \"Readme\"\njsou povoleny pouze form�ty typu *.TXT, *.HTM a *.HTML");
				tbf.focus();
				return false;
			};
		};
	};
	
	//Screenshot file check
	dotOK = false;
	tbf = document.getElementById("tbfSSFile");
	if (tbf.value.length > 2) {
		sExt = tbf.value.substr(tbf.value.length - 3, 3).toUpperCase();
		if (tbf.value.charAt(tbf.value.length - 4) === "."){dotOK = true};
	};
	if (tbf.value.length > 0) {
		if (sExt != "JPG" && sExt != "GIF" || !dotOK) {
			alert("Pro soubory screenshotu\njsou povoleny pouze form�ty typu *.JPG a *.GIF");
			tbf.focus();
			return false;
		};
	};
	
	return true;
};
	
function verifyTextInput()
{
	if (document.getElementById("tbMissionName").value.length == 0){
		alert("Nebyl zad�n n�zev mise/kampan�.");
		document.getElementById("tbMissionName").focus();
		return false;
	};
	if (document.getElementById("tbMissionAutor").value.length == 0){
		alert("Nebylo zad�no jm�no autora mise/kampan�.");
		document.getElementById("tbMissionAutor").focus();
		return false;
	};
	if (document.getElementById("tbMissionIsland").value.length == 0 &&
		document.getElementById("cbMissionTypes").value != "Kampa�"){
		alert("Nebyl zad�n n�zev ostrova.\nToto pole m��e b�t pr�zdn� pouze v p��pad�, �e se uploaduje kampa�.");
		document.getElementById("tbMissionIsland").focus();
		return false;
	};
	return true;
};

function confirmDiscard()
{
	if (confirm("Opravdu si p�ejete zru�it zpracov�n�\nnov�ch �daj� o t�to misi ?"))
	{
		return true;
	};
	return false;
};

function woknoMise(adr)
{
	var newWndLeft = ((self.screen.width-733)/2);
	var newWndTop = ((self.screen.height-468)/2);
	window.open('missiondetail.aspx'+adr, '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=733,height=468,left='+newWndLeft+',top='+newWndTop);
};

function disableUI(caller)
{
	caller.disabled = true;
	document.getElementById("btnBackToMissList").disabled = true;
	document.getElementById("btnLogOut").disabled = true;
};
