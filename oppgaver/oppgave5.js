
			
			
				
				
					//* 1). Indeksering som skrives ut er alltid èn høyere enn selve utskriften.
					
					//* 2).Bokstavene skrives ut så lenge løkka er mindre enn lengden på bokstav-arrayen.
					
					//* 3) Ytre løkke har alltid en høyere bokstav enn den indre.
				
				
				
				
				function oppgave5() {
				
					var bokstaver = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
				
								"S", "T", "U","V", "W", "X", "Y", "Z", "Æ", "Ø", "Å"];
				
				
				var utskrift = "";
				
					for (var i =1; i<bokstaver.length; i++){
						
						var svar = "";
						
						for (j = 0; j<i;	j++ ){
						
							svar +=	bokstaver[i-1]; 
						}
						
						
						utskrift += i + ":" + svar + "</br>" + "</br>"; 
						
					}
					
					document.getElementById("paragrafAssignment5").innerHTML = utskrift;
							
				
				

				
				}
			