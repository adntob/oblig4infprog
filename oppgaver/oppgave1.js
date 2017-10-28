
				
					//* 1). lag en løkke som går ifra 0 til 99.
					
					//* 2). Gang hvert tall med seg selv
					
					//* 3). Skriv ut stykket og svaret
				
				
				function oppgave1() {
					
					var svar = "";
					
					var gange =0;
					
					for (var i = 0; i<100; i++){
						
						var gange = i*i;
					
						svar += i + "*" + i + "=" + gange + "</br>" + "</br>";
					}
					
					document.getElementById("printAssignment1").innerHTML = svar;
				}