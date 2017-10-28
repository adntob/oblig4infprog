function oppgave7() {
		
		document.getElementById("btnTrykkkOppgave7").onclick = genererNavn;
	
	}
		
	function genererNavn() {
	
	
		var arr	= { };
		
		
		
		//* Lag en assosiativ array for alle verdier som kan gi et navn.
		
		arr[0] = {A:"gale", B:"snartenkte", C:"stinkende", D:"rykende", E:"magiske", F:"idiotiske", G:"lilla", H:"fargerike", I:"kjedelige", J:"spennende", K:"normale", L:"syvsovende", M: "energiske", N: "sløve", O:"kryptiske", P:"gjennomsiktig", Q:"katteaktige", R:"ikke-adjektivaktige", S:"late", T:"velluktende", U:"oransj", V:"iskalde", W:"varme", X:"negative", Y:"komplekse", Z: "positive", Æ:"egenrådige", Ø:"enfoldige", Å:"attraktive"};	
	
	
		arr[1] = {A:"vase", B:"potet", C:"bil", D:"drage", E:"løve", F:"kopp", G:"glass", H:"sko", I:"tøffel", J:"kringle", K:"skjorte", L:"sokk", M: "stol", N: "bord", O:"avis", P:"skolisse", Q:"hånd", R:"fot", S:"kongle", T:"kamel", U:"boks", V:"tallerken", W:"underbukse", X:"bestikk", Y:"buss", Z: "tog", Æ:"fly", Ø:"båt", Å:"hus"};
	
	
		arr[2]	= {A:"veps", B:"humle", C:"beist", D:"loppe", E:"fjerner", F:"ku", G:"hest", H:"esel", I:"gris", J:"katt", K:"hund", L:"suppe", M: "taco", N: "vegg", O:"bacon", P:"sekk", Q:"veske", R:"ikke-substantiveaktig", S:"ledning", T:"sang", U:"dyne", V:"teppe", W:"hjul", X:"plastikk", Y:"olje", Z: "tre", Æ:"gull", Ø:"tak", Å:"maleri"};
	
		// **
		
		// * Importer fornavn
		
		// *
	
	
		var fornavnVanlig = document.getElementById("txtNavn").value;
	
		var fornavn = fornavnVanlig.toUpperCase();
		
		var fornavnBokstaver = fornavn.split("");
		
		var forsteBokstavFornavn = fornavnBokstaver[0];
		
		console.log(forsteBokstavFornavn);
		
		
		
		
		
		//	**
		
		//	* Importer etternavn
		
		//*
		
		
		var etternavnVanlig = document.getElementById("txtEtternavn").value;
		
		var etternavn = etternavnVanlig.toUpperCase();
		
		var etternavnBokstaver = etternavn.split("");
		
		var forsteBokstavEtternavn =	etternavnBokstaver[0];
		
		var sisteBokstavEtternavn = etternavnBokstaver[etternavn.length	-	1];
		
	
	
	//	**
	
	// * Lag et navn og etternavn
	
	//
	
	var navn = arr[0][forsteBokstavFornavn];
	var mellomnavn = arr[1][forsteBokstavEtternavn];
	var etter = arr[2][sisteBokstavEtternavn];
	
	var fullnavn = navn + " " + mellomnavn + etter;
	
	document.getElementById("paragrafAssignment7").innerHTML = "Hei" + " " + fornavnVanlig + " " + etternavnVanlig + "	"
	
	+ "din bankID er" + " " + " " + " '"	+ fullnavn + "'";
	
	}