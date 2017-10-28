
				function oppgave9() {
					
					document.getElementById("btnInputOppgave9").onclick = trykket;
						}
						
						//* 1). Ta for deg hver bokstav i alfabetet
						
						//* 2). Se om denne inkluderes i arrayen din
						
						//* 2.1). Hvis denne er inkludert, marker denne posisjonen i alfabetet.
						
						//* 2.2). Skriv ut alt som ikke er markert
					
				function trykket()	{
					
					streng = document.getElementById("txtInputOppgave9").value
					
					
					var svar  = "";
						
					var bokstaver = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z", "æ", "ø", "å"];
							
					var streng =streng.toLowerCase();  //* Skriv ned toLowerCase
						

						
					var array = streng.split("");		//* Split på mellomrom
							
					
					for (var i =0; i<bokstaver.length; i++){
							
							if (array.includes(bokstaver[i])	===	true){	//* Sjekk om array inkluderer en bokstav
							
								bokstaver[i] = "#";
								
							}
							
						}
					
						
					for (i = 0; i<bokstaver.length; i++){
						
						if (bokstaver[i] !=	"#"){
								
							svar += bokstaver[i] +"," + " ";

							}
							
						}
					
						document.getElementById("paragrafAssignment9").innerHTML = "Bokstavene som ikke er inkludert i arrayen din er" + "</br>" +
						
						"[" + svar + "]";
						
						
						
				}