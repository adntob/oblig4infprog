function oppgave6() {
					
					var tall = [3, 42, 7, 69, 12, 9, 37, 17, 10]
					
					var antallPartall = ompartall(tall);
					
					var antallOddetall = tall.length	-	antallPartall;
					
					document.getElementById("paragrafAssignment6"). innerHTML = "# Oddetall:" + " " + "=" + " " +  antallOddetall + "</br>"
					
					+	"# Partall:" + " " + "=" + " " + antallPartall;
			
				
				}