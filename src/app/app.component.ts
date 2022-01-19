import { Component, OnInit } from '@angular/core';
import { House } from './interfaces/house.interface';
import { HouseService } from './services/house.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public houses: House[];
  // @TODO:  w tym miejscu przechowujesz tablicę domów, więc nazwa powinna to odzwierciedlać. Warto by było dodać houses zamiast house, co wskazuje od razu, że mówimy o większej ilości, czyli w naszym
  // kontekscie o tablicy domów.
  // zapis dodatkowo jakiego bym się trzymał to mimo wszystko dodawanie zakresu widoczności czyli public lub private. W tym przypadku chemy użyć zmiennej w szablonie więc powinniśmy dodać public

  //@TODO:  PRZYKŁADOWY ZAPIS
  // public houses: House[];

  constructor(private houseService: HouseService) {}

  // @TODO: wiem, że w kursie też nie zawsze dodaję w pierwszych lekcjach, ale chicałbym abyś od razu zwracał na to uwagę.
  // tutaj także dodajmy zakres widoczności public oraz typ zwracany dla metody, w naszym przypadku void
  // public ngOnInit(): void {
  //   ciało metody
  // }
  public ngOnInit(): void {
    this.houses = this.houseService
      .fetchHouses()
      .filter((house: House) => house.price >= 900000);
    // @TODO:  hmm niby wiemy o jakim typie mówimy bo filtrujemy tablicę domów o typie House, ale mimo wszystko najczęściej spotykam się z konwencją aby mimo wszystko ten typ w funkcji strzałkowej także dodawać.
    // @TODO: tutaj tak naprawdę mamy ciało metody jednolinijkowe, a co za tym idzie możemy skorzystać z uproszczonego zapisu i nie musimy dodawać return oraz opakowywać w nawiasy klamrowe
  }

  // @TODO: PRZYKŁADOWY ZAPIS
  // public ngOnInit(): void {
  //   this.house = this.houseService.fetchHouses()
  //     .filter((house: IHouse) => house.price >= 900000);
  // }
}
