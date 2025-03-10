'use strict';

class Product {
    constructor(naam, prijs, voorraad) {
      this.naam = naam;
      this._prijs = prijs < 0 ? 0 : prijs;
      this._voorraad = voorraad < 0 ? 0 : voorraad; 
    }
  
    
    set prijs(nieuwePrijs) {
      this._prijs = nieuwePrijs < 0 ? 0 : nieuwePrijs;
    }
  
    
    get prijs() {
      return this._prijs;
    }
  
   
    set voorraad(nieuweVoorraad) {
      this._voorraad = nieuweVoorraad < 0 ? 0 : nieuweVoorraad;
    }
  
    
    get voorraad() {
      return this._voorraad;
    }
  
    
    get verkoopprijs() {
      return (this._prijs * 1.21).toFixed(2);
    }

    get beschikbaar() {
        return this._voorraad > 0;
    }

    toonInfo() {
        return `<h3>${this.naam}</h3>
                <p>Prijs: €${this.prijs}</p>
                <p>Voorraad: ${this.voorraad} stuks</p>
                <p>Verkoopprijs: €${this.verkoopprijs}</p>
                <p>Product ${this.beschikbaar ? 'is' : 'is niet'} beschikbaar</p>`;
    }
  }

    const product1 = new Product('Fiets', 500, 3);
    const product2 = new Product('Auto', 20000, 89);
    const product3 = new Product('TV', 700, 52);

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = product1.toonInfo() + "<hr>" + product2.toonInfo() + "<hr>" + product3.toonInfo();




