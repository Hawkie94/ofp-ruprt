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
			alert("Nebyl zadán žádný soubor, který má být zmìnìn.\n\nPøed odesláním musíš zadat alespoò jeden soubor, který chceš zmìnit.");
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
		alert("Musíš zadat platný název souboru mise (*.ZIP) vèetnì úplné cesty.");
		tbf.focus();
		return false;
	};
	if (tbf.value.length > 0 && (sExt != "ZIP" || !dotOK)) {
		alert("Pro soubor mise/kampanì\nje povolen pouze formát typu *.ZIP");
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
		alert("Musíš zadat platný název souboru \"Readme\" vèetnì úplné cesty.");
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
				alert("Pro soubory \"Readme\"\njsou povoleny pouze formáty typu *.TXT, *.HTM a *.HTML");
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
			alert("Pro soubory screenshotu\njsou povoleny pouze formáty typu *.JPG a *.GIF");
			tbf.focus();
			return false;
		};
	};
	
	return true;
};
	
function verifyTextInput()
{
	if (document.getElementById("tbMissionName").value.length == 0){
		alert("Nebyl zadán název mise/kampanì.");
		document.getElementById("tbMissionName").focus();
		return false;
	};
	if (document.getElementById("tbMissionAutor").value.length == 0){
		alert("Nebylo zadáno jméno autora mise/kampanì.");
		document.getElementById("tbMissionAutor").focus();
		return false;
	};
	if (document.getElementById("tbMissionIsland").value.length == 0 &&
		document.getElementById("cbMissionTypes").value != "Kampaò"){
		alert("Nebyl zadán název ostrova.\nToto pole mùže být prázdné pouze v pøípadì, že se uploaduje kampaò.");
		document.getElementById("tbMissionIsland").focus();
		return false;
	};
	return true;
};

function confirmDiscard()
{
	if (confirm("Opravdu si pøejete zrušit zpracování\nnových údajù o této misi ?"))
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
